const fs = require("fs");
const shell = require("shelljs");
const crypto = require("crypto");
const cheerio = require("cheerio");
const path = require("path");

const {loadPluginsAsStringWithCache} = require("./plugins-manager");
const {injectHook} = require("./inject-hook");

// 注入Hook成功的文件暂存目录
let injectSuccessJsFileCacheDirectory = process.env?.NODE_ENV === 'test' && global.__TEST_CACHE_DIR__ ? 
    global.__TEST_CACHE_DIR__ : 
    path.join(__dirname, 'cache');

let injectSuccessJsFileCacheMetaFile = path.join(injectSuccessJsFileCacheDirectory, 'meta.jsonl');

// 缓存结构
// {
//   "filepath": "",
//   "url": "",
//   "cacheTime": "",
//   "expireTime": ""  // 新增过期时间字段
// }
const injectSuccessJsFileCache = new Map();

let disableCache = false;
let CACHE_EXPIRE_TIME = 24 * 60 * 60 * 1000; // 默认缓存24小时

// 更新缓存目录
function updateCacheDirectory(newDirectory) {
    injectSuccessJsFileCacheDirectory = newDirectory;
    injectSuccessJsFileCacheMetaFile = path.join(injectSuccessJsFileCacheDirectory, 'meta.jsonl');
    injectSuccessJsFileCache.clear();
}

// 更新缓存过期时间
function updateCacheExpireTime(newExpireTime) {
    CACHE_EXPIRE_TIME = newExpireTime;
    console.log('更新缓存过期时间:', CACHE_EXPIRE_TIME);
}

// 检查缓存是否过期
function isCacheExpired(meta) {
    return meta.expireTime && Date.now() > meta.expireTime;
}

// 删除过期缓存
async function removeExpiredCache(meta) {
    try {
        await fs.promises.unlink(meta.filepath);
        injectSuccessJsFileCache.delete(meta.url);
        console.log('删除过期缓存:', meta.filepath);
    } catch (err) {
        console.error('删除过期缓存失败:', err);
    }
}

// 初始化缓存
async function initCache() {
    try {
        // 如果是测试环境,使用测试目录
        if (process.env?.NODE_ENV === 'test' && global.__TEST_CACHE_DIR__) {
            updateCacheDirectory(global.__TEST_CACHE_DIR__);
        }

        // 确保缓存目录存在
        await ensureDirectoryExists(injectSuccessJsFileCacheDirectory);
        await new Promise(resolve => setTimeout(resolve, 100));

        // 确保元数据文件存在
        if (!fs.existsSync(injectSuccessJsFileCacheMetaFile)) {
            await fs.promises.writeFile(injectSuccessJsFileCacheMetaFile, '', 'utf-8');
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // 设置文件权限
        try {
            fs.chmodSync(injectSuccessJsFileCacheDirectory, 0o777);
            fs.chmodSync(injectSuccessJsFileCacheMetaFile, 0o666);
        } catch (e) {
            console.warn('设置文件权限失败:', e);
        }

        // 读取并解析元数据
        const metaContent = await fs.promises.readFile(injectSuccessJsFileCacheMetaFile, 'utf-8');
        const lines = metaContent.split('\n').filter(line => line.trim());

        // 清空当前缓存
        injectSuccessJsFileCache.clear();

        // 重新加载缓存
        let hasError = false;
        for (const line of lines) {
            try {
                const meta = JSON.parse(line);
                if (meta.url && meta.filepath) {
                    injectSuccessJsFileCache.set(meta.url, meta);
                }
            } catch (e) {
                console.error('解析缓存元数据失败:', e);
                hasError = true;
                break;
            }
        }

        // 如果有错误,清空元数据文件
        if (hasError) {
            await fs.promises.writeFile(injectSuccessJsFileCacheMetaFile, '', 'utf-8');
            injectSuccessJsFileCache.clear();
        }
    } catch (e) {
        console.error('初始化缓存失败:', e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
    }
}

async function process(requestDetail, responseDetail) {
    if (isHtmlResponse(responseDetail)) {
        try {
            await processHtmlResponse(requestDetail, responseDetail);
        } catch (e) {
            console.error("处理HTML响应失败:", e);
        }
        return;
    }

    if (isJavaScriptResponse(responseDetail)) {
        try {
            // 确保禁用缓存设置正确传递
            if (process.disableCache) {
                disableCache = true;
            }
            await processJavaScriptResponse(requestDetail, responseDetail);
        } catch (e) {
            console.error("处理JavaScript响应失败:", e);
        }
        return;
    }
}

// 判断是否是HTML类型的响应内容
function isHtmlResponse(responseDetail) {
    if (!responseDetail?.response?.header) {
        return false;
    }
    const contentType = responseDetail.response.header["content-type"]?.toLowerCase() || "";
    if (contentType.includes("text/html")) {
        // 确保字符集为UTF-8
        if (!contentType.includes("charset=utf-8")) {
            responseDetail.response.header["content-type"] = contentType + "; charset=utf-8";
        }
        return true;
    }
    return false;
}

// HTML中可能会夹带script标签，里面的JS代码也要能Hook到
async function processHtmlResponse(requestDetail, responseDetail) {
    const url = requestDetail.url;
    const body = responseDetail.response.body.toString();

    if (!body.length) {
        return;
    }

    try {
        // 使用新版cheerio特性
        const $ = cheerio.load(body, {
            decodeEntities: false,
            xmlMode: false,
            lowerCaseAttributeNames: false,
            lowerCaseTags: false
        });

        const scripts = $("script");
        if (!scripts.length) {
            return;
        }

        let alreadyInjectHookContext = false;
        for (const script of scripts) {
            // 对于是src引用的外部脚本，跳过处理
            if ($(script).attr("src")) {
                continue;
            }

            const jsCode = $(script).html();
            if (!jsCode) {
                continue;
            }

            try {
                let newJsCode = injectHook(jsCode);
                // 随着script替换时注入，不创建新的script标签
                if (!alreadyInjectHookContext) {
                    newJsCode = loadPluginsAsStringWithCache() + newJsCode;
                    alreadyInjectHookContext = true;
                }

                $(script).html(newJsCode);
            } catch (e) {
                console.error("注入Hook到script标签失败:", e);
            }
        }

        responseDetail.response.body = $.html();
    } catch (e) {
        console.error("处理HTML中的script标签失败:", e);
    }
}

// 判断是否是JavaScript响应
function isJavaScriptResponse(responseDetail) {
    if (!responseDetail?.response?.header) {
        return false;
    }
    const contentType = responseDetail.response.header["content-type"]?.toLowerCase() || "";
    if (contentType.includes("javascript")) {
        // 确保字符集为UTF-8
        if (!contentType.includes("charset=utf-8")) {
            responseDetail.response.header["content-type"] = contentType + "; charset=utf-8";
        }
        return true;
    }
    return false;
}

async function processJavaScriptResponse(requestDetail, responseDetail) {
    const body = responseDetail.response.body.toString();
    const url = requestDetail.url;

    if (isNeedIgnoreHook(body)) {
        return;
    }

    try {
        // 生成新的JavaScript代码
        const newJsCode = injectHook(body);

        console.log('处理JavaScript响应:', {
            url,
            bodyLength: body.length,
            disableCache,
            cacheDirectory: injectSuccessJsFileCacheDirectory
        });

        // 小文件或禁用缓存时直接返回处理结果
        if (disableCache || body.length <= 2000) {
            console.log('跳过缓存:', { disableCache, bodyLength: body.length });
            responseDetail.response.body = loadPluginsAsStringWithCache() + newJsCode;
            return;
        }

        // 确保缓存就绪
        await ensureCacheReady();

        // 生成缓存文件路径
        const md5 = crypto.createHash("md5");
        md5.update(url);
        const cacheFilePath = path.join(injectSuccessJsFileCacheDirectory, `${md5.digest("hex")}.js`);
        console.log('缓存文件路径:', cacheFilePath);

        // 检查缓存是否可用
        if (injectSuccessJsFileCache.has(url)) {
            const meta = injectSuccessJsFileCache.get(url);
            // 检查缓存是否过期
            if (isCacheExpired(meta)) {
                await removeExpiredCache(meta);
            } else if (fs.existsSync(meta.filepath)) {
                try {
                    const fileContent = await fs.promises.readFile(meta.filepath, 'utf-8');
                    if (fileContent.includes('cc11001100_hook')) {
                        console.log('使用缓存:', meta.filepath);
                        responseDetail.response.body = loadPluginsAsStringWithCache() + fileContent;
                        return;
                    }
                } catch (e) {
                    // 缓存文件损坏,删除缓存
                    await removeExpiredCache(meta);
                }
            }
        }

        // 生成新的缓存
        const meta = {
            url,
            filepath: cacheFilePath,
            cacheTime: Date.now(),
            expireTime: Date.now() + CACHE_EXPIRE_TIME // 添加过期时间
        };

        // 写入新的缓存
        try {
            // 确保缓存目录存在
            await ensureDirectoryExists(injectSuccessJsFileCacheDirectory);

            // 写入缓存文件
            console.log('写入缓存文件:', cacheFilePath);
            await fs.promises.writeFile(cacheFilePath, newJsCode, 'utf-8');
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 验证缓存文件
            if (!fs.existsSync(cacheFilePath)) {
                throw new Error(`缓存文件写入失败: ${cacheFilePath}`);
            }

            const writtenContent = await fs.promises.readFile(cacheFilePath, 'utf-8');
            if (!writtenContent.includes('cc11001100_hook')) {
                throw new Error(`缓存文件内容验证失败: ${cacheFilePath}`);
            }

            // 写入元数据
            const metaLine = JSON.stringify(meta) + '\n';
            console.log('写入元数据:', metaLine);
            await fs.promises.appendFile(injectSuccessJsFileCacheMetaFile, metaLine);
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 验证元数据
            const metaContent = await fs.promises.readFile(injectSuccessJsFileCacheMetaFile, 'utf-8');
            if (!metaContent.includes(url)) {
                throw new Error(`元数据写入失败: ${url}`);
            }

            // 更新内存缓存
            injectSuccessJsFileCache.set(url, meta);

            // 确保缓存文件存在
            if (!fs.existsSync(cacheFilePath)) {
                throw new Error(`缓存文件不存在: ${cacheFilePath}`);
            }

            console.log('缓存创建成功:', {
                url,
                filepath: cacheFilePath,
                cacheSize: injectSuccessJsFileCache.size
            });
        } catch (e) {
            // 写入失败时清理
            console.error('缓存创建失败:', e);
            try {
                if (fs.existsSync(cacheFilePath)) {
                    await fs.promises.unlink(cacheFilePath);
                }
            } catch (err) {}
            throw e;
        }

        responseDetail.response.body = loadPluginsAsStringWithCache() + newJsCode;
    } catch (e) {
        console.error('处理JavaScript响应失败:', e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
        responseDetail.response.body = body;
    }
}

function isNeedIgnoreHook(body) {
    return body.startsWith("{");
}

async function processFromCache(responseDetail, url, body) {
    try {
        const meta = injectSuccessJsFileCache.get(url);
        if (!meta || !fs.existsSync(meta.filepath)) {
            throw new Error("缓存文件不存在");
        }
        
        // 检查缓存是否过期
        if (meta.expireTime && Date.now() > meta.expireTime) {
            console.log('缓存已过期:', meta.filepath);
            injectSuccessJsFileCache.delete(url);
            await fs.promises.unlink(meta.filepath);
            throw new Error("缓存已过期");
        }

        const fileContent = await fs.promises.readFile(meta.filepath, 'utf-8');
        if (!fileContent.includes('cc11001100_hook')) {
            throw new Error("缓存文件已损坏");
        }
        responseDetail.response.body = loadPluginsAsStringWithCache() + fileContent;
        return true;
    } catch (e) {
        console.error("从缓存处理JavaScript失败:", e);
        return false;
    }
}

// 确保目录存在
async function ensureDirectoryExists(directory) {
    try {
        if (!fs.existsSync(directory)) {
            await fs.promises.mkdir(directory, { recursive: true, mode: 0o777 });
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return true;
    } catch (e) {
        console.error("创建目录失败:", e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
        return false;
    }
}

// 确保缓存就绪
async function ensureCacheReady() {
    try {
        // 确保缓存目录存在
        await ensureDirectoryExists(injectSuccessJsFileCacheDirectory);

        // 确保元数据文件存在
        if (!fs.existsSync(injectSuccessJsFileCacheMetaFile)) {
            await fs.promises.writeFile(injectSuccessJsFileCacheMetaFile, '', 'utf-8');
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // 验证缓存目录和元数据文件
        if (!fs.existsSync(injectSuccessJsFileCacheDirectory)) {
            throw new Error(`缓存目录不存在: ${injectSuccessJsFileCacheDirectory}`);
        }
        if (!fs.existsSync(injectSuccessJsFileCacheMetaFile)) {
            throw new Error(`元数据文件不存在: ${injectSuccessJsFileCacheMetaFile}`);
        }

        // 设置文件权限
        try {
            fs.chmodSync(injectSuccessJsFileCacheDirectory, 0o777);
            fs.chmodSync(injectSuccessJsFileCacheMetaFile, 0o666);
        } catch (e) {
            console.warn('设置文件权限失败:', e);
        }

        // 重新初始化缓存
        await initCache();
    } catch (e) {
        console.error('确保缓存就绪失败:', e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
    }
}

// 写入缓存元数据
function appendCacheMeta(meta) {
    try {
        ensureDirectoryExists(injectSuccessJsFileCacheDirectory);
        if (!fs.existsSync(injectSuccessJsFileCacheMetaFile)) {
            fs.writeFileSync(injectSuccessJsFileCacheMetaFile, '');
        }
        const metaLine = JSON.stringify(meta) + '\n';
        fs.appendFileSync(injectSuccessJsFileCacheMetaFile, metaLine);
        injectSuccessJsFileCache.set(meta.url, meta);
    } catch (e) {
        console.error("写入缓存元数据失败:", e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
    }
}

async function processRealtime(responseDetail, url, body) {
    try {
        const newJsCode = injectHook(body);
        
        // 禁用缓存时直接返回处理结果
        if (disableCache) {
            responseDetail.response.body = loadPluginsAsStringWithCache() + newJsCode;
            return;
        }

        const md5 = crypto.createHash("md5");
        md5.update(url);
        const cacheFilePath = path.join(injectSuccessJsFileCacheDirectory, `${md5.digest("hex")}.js`);
        
        const meta = {
            url,
            filepath: cacheFilePath,
            cacheTime: Date.now(),
            expireTime: Date.now() + CACHE_EXPIRE_TIME // 添加过期时间
        };

        try {
            // 确保缓存目录存在
            await ensureDirectoryExists(injectSuccessJsFileCacheDirectory);
            
            // 写入缓存文件
            await fs.promises.writeFile(cacheFilePath, newJsCode, 'utf-8');
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // 验证缓存文件
            if (!fs.existsSync(cacheFilePath)) {
                throw new Error(`缓存文件写入失败: ${cacheFilePath}`);
            }

            const writtenContent = await fs.promises.readFile(cacheFilePath, 'utf-8');
            if (!writtenContent.includes('cc11001100_hook')) {
                throw new Error(`缓存文件内容验证失败: ${cacheFilePath}`);
            }
            
            // 写入元数据
            const metaLine = JSON.stringify(meta) + '\n';
            await fs.promises.appendFile(injectSuccessJsFileCacheMetaFile, metaLine);
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // 验证元数据
            const metaContent = await fs.promises.readFile(injectSuccessJsFileCacheMetaFile, 'utf-8');
            if (!metaContent.includes(url)) {
                throw new Error(`元数据写入失败: ${url}`);
            }
            
            // 更新内存中的缓存映射
            injectSuccessJsFileCache.set(url, meta);
            
            responseDetail.response.body = loadPluginsAsStringWithCache() + newJsCode;
            return true;
        } catch (e) {
            // 写入失败时清理
            try {
                if (fs.existsSync(cacheFilePath)) {
                    await fs.promises.unlink(cacheFilePath);
                }
            } catch (err) {}
            throw e;
        }
    } catch (e) {
        console.error("实时处理JavaScript失败:", e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
        responseDetail.response.body = body;
        return false;
    }
}

function exists(path) {
    try {
        fs.statSync(path);
        return true;
    } catch (e) {
        return false;
    }
}

// 初始化缓存
initCache();

// 导出配置项
process.disableCache = disableCache;

// 导出缓存Map供测试使用
module.exports = {
    process,
    injectSuccessJsFileCache,
    get disableCache() {
        return disableCache;
    },
    set disableCache(value) {
        disableCache = !!value;
    },
    // 为了测试暴露以下函数
    initCache,
    ensureDirectoryExists,
    ensureCacheReady,
    processJavaScriptResponse,
    processRealtime,
    updateCacheDirectory,
    updateCacheExpireTime,
    processRequest,
    CACHE_EXPIRE_TIME
};

async function processRequest(requestDetail) {
    try {
        const url = requestDetail.requestDetail.url;
        const body = requestDetail.response.body;

        // 记录处理信息
        console.log('处理JavaScript响应:', {
            url,
            bodyLength: body.length,
            disableCache,
            cacheDirectory: injectSuccessJsFileCacheDirectory
        });

        // 如果禁用缓存或文件太小,跳过缓存
        if (disableCache || body.length < 1024) {
            console.log('\n跳过缓存:', { disableCache, bodyLength: body.length });
            await processRealtime(requestDetail, url, body);
            return;
        }

        // 尝试从缓存读取
        const cacheResult = await processFromCache(requestDetail, url, body);
        if (!cacheResult) {
            // 缓存不存在或已过期,使用实时处理
            await processRealtime(requestDetail, url, body);
        }
    } catch (e) {
        console.error('处理请求失败:', e);
        if (process.env?.NODE_ENV === 'test') {
            throw e;
        }
    }
}
