const AnyProxy = require("anyproxy");
const path = require("path");
const fs = require("fs");
const net = require('net');
const https = require('https');
const os = require('os');
const crypto = require('crypto');

// 获取AnyProxy默认证书路径
const userHome = os.homedir();
const certDir = path.join(userHome, '.anyproxy/certificates');

// 缓存配置
const CACHE_DIR = path.join(__dirname, 'cache');
const CACHE_META_FILE = path.join(CACHE_DIR, 'meta.jsonl');
const CACHE_EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24小时
const jsFileCache = new Map();

// 性能监控数据
let stats = {
    startTime: Date.now(),
    requestCount: 0,
    errorCount: 0,
    lastReportTime: Date.now(),
    cacheHits: 0,
    cacheMisses: 0
};

// 确保缓存目录存在
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// 加载完整的Hook实现
const hookImplementation = `
(() => {
    // 获取全局对象
    var globalThis = (function(){
        if(typeof window !== 'undefined') return window;
        if(typeof global !== 'undefined') return global;
        if(typeof self !== 'undefined') return self;
        return Function('return this')();
    })();

    // 如果已经初始化过，直接返回
    if (globalThis.cc11001100_hook) {
        return;
    }

    // 数据存储
    const stringsDB = {
        varValueDb: [],
        codeLocationExecuteTimesCount: []
    };

    // Hook回调数组
    const hookCallbacks = [];

    // 主Hook函数
    globalThis.cc11001100_hook = function(name, value, type) {
        try {
            // 记录变量信息
            stringsDB.varValueDb.push({
                name: name,
                value: value,
                type: type,
                timestamp: Date.now(),
                stack: new Error().stack
            });

            // 执行所有回调
            for (let callback of hookCallbacks) {
                try {
                    callback(name, value, type);
                } catch (e) {
                    console.error('[AST HOOK工具] 回调执行出错:', e);
                }
            }
        } catch (e) {
            console.error('[AST HOOK工具] Hook执行出错:', e);
        }
        return value;
    };

    // 添加Hook回调
    globalThis.cc11001100_hook.addCallback = function(callback) {
        if (typeof callback === 'function') {
            hookCallbacks.push(callback);
        }
    };

    // 搜索功能
    globalThis.cc11001100_hook.search = function(pattern, options = {}) {
        const { caseSensitive = false, type = null } = options;
        
        return stringsDB.varValueDb.filter(item => {
            if (!item.value || typeof item.value !== 'string') {
                return false;
            }
            
            if (type && item.type !== type) {
                return false;
            }

            const value = caseSensitive ? item.value : item.value.toLowerCase();
            const searchPattern = caseSensitive ? pattern : pattern.toLowerCase();
            
            return value.includes(searchPattern);
        });
    };

    // 按名称搜索
    globalThis.cc11001100_hook.searchByName = function(pattern, isEquals = false) {
        return stringsDB.varValueDb.filter(item => {
            if (!item.name) {
                return false;
            }
            
            if (isEquals) {
                return item.name === pattern;
            }
            
            return item.name.includes(pattern);
        });
    };

    // 获取数据库
    globalThis.cc11001100_hook.getDB = function() {
        return stringsDB;
    };

    // 清空数据库
    globalThis.cc11001100_hook.clearDB = function() {
        stringsDB.varValueDb = [];
        stringsDB.codeLocationExecuteTimesCount = [];
    };

    // 导出数据
    globalThis.cc11001100_hook.exportData = function() {
        return JSON.stringify(stringsDB, null, 2);
    };

    // 设置为不可修改
    Object.defineProperties(globalThis.cc11001100_hook, {
        hookCallback: {
            value: hookCallbacks,
            writable: false,
            configurable: false
        },
        stringsDB: {
            value: stringsDB,
            writable: false,
            configurable: false
        }
    });

    console.log('[AST HOOK工具] Hook函数初始化成功');
})();
`;

// 检查是否需要跳过Hook注入
function shouldSkipHook(url, contentType) {
    // 跳过jQuery相关脚本
    if (url.includes('jquery')) {
        return true;
    }
    
    // 跳过非JavaScript响应
    if (!contentType.includes('javascript') && 
        !url.endsWith('.js') && 
        !contentType.includes('application/x-javascript') && 
        !contentType.includes('text/javascript')) {
        return true;
    }

    return false;
}

// 从缓存中获取处理后的代码
async function getFromCache(url) {
    try {
        const meta = jsFileCache.get(url);
        if (!meta || !fs.existsSync(meta.filepath)) {
            return null;
        }

        // 检查缓存是否过期
        if (Date.now() > meta.expireTime) {
            jsFileCache.delete(url);
            fs.unlinkSync(meta.filepath);
            return null;
        }

        const content = await fs.promises.readFile(meta.filepath, 'utf-8');
        if (!content.includes('cc11001100_hook')) {
            return null;
        }

        stats.cacheHits++;
        return content;
    } catch (e) {
        console.error('[AST HOOK工具] 缓存读取失败:', e);
        return null;
    }
}

// 将处理后的代码保存到缓存
async function saveToCache(url, code) {
    try {
        const md5 = crypto.createHash('md5').update(url).digest('hex');
        const filepath = path.join(CACHE_DIR, `${md5}.js`);
        
        const meta = {
            url,
            filepath,
            cacheTime: Date.now(),
            expireTime: Date.now() + CACHE_EXPIRE_TIME
        };

        await fs.promises.writeFile(filepath, code, 'utf-8');
        jsFileCache.set(url, meta);
        
        // 更新元数据文件
        await fs.promises.appendFile(CACHE_META_FILE, JSON.stringify(meta) + '\n');
        
        stats.cacheMisses++;
    } catch (e) {
        console.error('[AST HOOK工具] 缓存保存失败:', e);
    }
}

// 检查端口是否被占用
async function isPortInUse(port) {
    return new Promise((resolve) => {
        const server = net.createServer()
            .once('error', () => resolve(true))
            .once('listening', () => {
                server.close();
                resolve(false);
            })
            .listen(port);
    });
}

// 获取可用端口
async function getAvailablePort(startPort) {
    let port = startPort;
    while (await isPortInUse(port)) {
        port++;
    }
    return port;
}

// 打印性能统计
function printStats() {
    const now = Date.now();
    const uptime = (now - stats.startTime) / 1000;
    const rps = stats.requestCount / uptime;
    const memoryUsage = process.memoryUsage();
    
    console.log(`
========= 性能统计 =========
运行时间: ${uptime.toFixed(2)}秒
总请求数: ${stats.requestCount}
错误数: ${stats.errorCount}
缓存命中: ${stats.cacheHits}
缓存未命中: ${stats.cacheMisses}
平均RPS: ${rps.toFixed(2)}

内存使用:
- RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)}MB
- 堆总大小: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)}MB
- 堆使用: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)}MB

请求类型统计:
${Object.entries(stats.requestTypes || {}).map(([type, count]) => `- ${type}: ${count}`).join('\n')}

错误类型统计:
${Object.entries(stats.errorTypes || {}).map(([type, count]) => `- ${type}: ${count}`).join('\n')}

状态码统计:
${Object.entries(stats.statusCodes || {}).map(([code, count]) => `- ${code}: ${count}`).join('\n')}
===========================
`);
}

// 规则配置
const rules = {
    *beforeSendRequest(requestDetail) {
        // 添加请求头以避免某些HTTPS握手问题
        const newRequestOptions = {
            ...requestDetail.requestOptions,
            headers: {
                ...requestDetail.requestOptions.headers,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
                'Accept': '*/*',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Mode': 'navigate'
            },
            rejectUnauthorized: false,
            checkServerIdentity: () => undefined
        };

        return { requestOptions: newRequestOptions };
    },

    *beforeSendResponse(requestDetail, responseDetail) {
        try {
            const contentType = responseDetail.response.header['content-type'] || '';
            
            // 检查是否需要跳过Hook注入
            if (shouldSkipHook(requestDetail.url, contentType)) {
                return { response: responseDetail.response };
            }

            // 尝试从缓存获取
            const cachedCode = yield getFromCache(requestDetail.url);
            if (cachedCode) {
                return {
                    response: {
                        ...responseDetail.response,
                        body: Buffer.from(hookImplementation + '\n' + cachedCode),
                        header: {
                            ...responseDetail.response.header,
                            'content-length': undefined // 让服务器自动计算长度
                        }
                    }
                };
            }

            const originalCode = responseDetail.response.body.toString();
            
            // 发送代码到API服务器进行注入
            const response = yield new Promise((resolve, reject) => {
                const http = require('http');
                const options = {
                    hostname: '127.0.0.1',
                    port: 10010,
                    path: '/hook-js-code',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain',
                        'X-Original-URL': requestDetail.url
                    }
                };

                const req = http.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => data += chunk);
                    res.on('end', () => resolve(data));
                });

                req.on('error', (error) => {
                    console.error('[AST HOOK工具] API服务器请求失败:', error);
                    reject(error);
                });

                req.write(encodeURIComponent(originalCode));
                req.end();
            });

            if (!response) {
                console.error('[AST HOOK工具] API服务器返回空响应');
                return { response: responseDetail.response };
            }

            const processedCode = decodeURIComponent(response);
            
            // 保存到缓存
            yield saveToCache(requestDetail.url, processedCode);

            // 返回处理后的响应
            return {
                response: {
                    ...responseDetail.response,
                    body: Buffer.from(hookImplementation + '\n' + processedCode),
                    header: {
                        ...responseDetail.response.header,
                        'content-length': undefined // 让服务器自动计算长度
                    }
                }
            };

        } catch (error) {
            console.error('[AST HOOK工具] 响应处理失败:', error);
            stats.errorCount++;
            return { response: responseDetail.response };
        }
    },

    *beforeDealHttpsRequest(requestDetail) {
        return { response: null };
    },

    *onError(requestDetail, error) {
        console.error('[AST HOOK工具] 请求错误:', error);
        stats.errorCount++;
        return {
            response: {
                statusCode: 500,
                header: { 'Content-Type': 'text/plain' },
                body: Buffer.from('请求处理出错')
            }
        };
    },

    *onConnectError(requestDetail, error) {
        console.error('[AST HOOK工具] 连接错误:', error);
        stats.errorCount++;
        return {
            response: {
                statusCode: 502,
                header: { 'Content-Type': 'text/plain' },
                body: Buffer.from('代理服务器连接目标服务器失败')
            }
        };
    }
};

// 配置选项
const options = {
    port: 10086,
    webInterface: {
        enable: true,
        webPort: 8002
    },
    
    // 基础配置
    throttle: 10000,
    forceProxyHttps: true,
    wsIntercept: true, // 启用WebSocket拦截
    silent: false,
    
    // 证书配置
    dangerouslyIgnoreUnauthorized: true,
    interceptHttps: true,
    forceProxyHttps: true,
    
    // 证书相关配置
    rootCAPath: path.join(certDir, 'rootCA.crt'),
    keyPath: path.join(certDir, 'rootCA.key'),
    certDir: certDir,

    // 缓存目录配置
    cacheDir: path.join(__dirname, '../js-file-cache'),

    // 错误重试配置
    retry: {
        maxRetries: 3,
        retryDelay: 1000,
        retryableErrors: [
            'ETIMEDOUT',
            'ECONNRESET',
            'ECONNREFUSED',
            'EPIPE',
            'ENOTFOUND',
            'ENETUNREACH',
            'EHOSTUNREACH'
        ]
    },

    // DNS配置
    dns: {
        servers: [
            '223.5.5.5',    // 阿里DNS
            '119.29.29.29', // 腾讯DNS
            '8.8.8.8',      // Google DNS
            '1.1.1.1'       // Cloudflare DNS
        ],
        enableCache: true,
        cacheSize: 1000
    },

    // 规则配置
    rule: rules,

    // 压缩配置
    customResponse: {
        compression: false  // 禁用brotli压缩，避免相关问题
    }
};

// 确保缓存目录存在
if (!fs.existsSync(options.cacheDir)) {
    fs.mkdirSync(options.cacheDir, { recursive: true });
}

// 请求重试处理
async function retryRequest(requestHandler, retryCount = 0) {
    try {
        return await requestHandler();
    } catch (error) {
        if (retryCount < options.retry.maxRetries && 
            options.retry.retryableErrors.includes(error.code)) {
            console.log(`请求失败，${retryCount + 1}秒后重试(${retryCount + 1}/${options.retry.maxRetries})`);
            await new Promise(resolve => setTimeout(resolve, options.retry.retryDelay));
            return retryRequest(requestHandler, retryCount + 1);
        }
        throw error;
    }
}

// 启动服务器
async function startServer() {
    try {
        // 检查并获取可用端口
        options.port = await getAvailablePort(options.port);
        options.webInterface.webPort = await getAvailablePort(options.webInterface.webPort);
        
        const proxyServer = new AnyProxy.ProxyServer(options);

        // WebSocket错误处理
        proxyServer.on('wsError', (error, req) => {
            console.warn(`WebSocket错误: ${req.url}`, error);
            stats.errorCount++;
            if (!stats.errorTypes) stats.errorTypes = {};
            stats.errorTypes['WS_ERROR'] = (stats.errorTypes['WS_ERROR'] || 0) + 1;
        });

        // 连接错误处理
        proxyServer.on('error', (error) => {
            console.error("代理服务器错误:", error);
            stats.errorCount++;
            
            // 错误分类统计
            if (!stats.errorTypes) stats.errorTypes = {};
            const errorType = error.code || 'UNKNOWN';
            stats.errorTypes[errorType] = (stats.errorTypes[errorType] || 0) + 1;

            // 对于特定错误进行重试
            if (options.retry.retryableErrors.includes(error.code)) {
                console.log(`检测到可重试错误: ${error.code}，将在${options.retry.retryDelay}ms后重试`);
            }
        });

        // 事件处理
        proxyServer.on("ready", () => {
            console.log(`代理服务器运行在端口 ${options.port}`);
            console.log(`Web界面可通过端口 ${options.webInterface.webPort} 访问`);
            printStats(); // 打印初始统计
        });

        proxyServer.on("beforeRequest", (requestDetail) => {
            console.log(`正在处理请求: ${requestDetail.url}`);
            stats.requestCount++;
            
            // 请求类型统计
            if (!stats.requestTypes) stats.requestTypes = {};
            const protocol = requestDetail.protocol || 'unknown';
            stats.requestTypes[protocol] = (stats.requestTypes[protocol] || 0) + 1;
        });

        proxyServer.on("beforeResponse", (requestDetail, responseDetail) => {
            // 响应状态码统计
            if (!stats.statusCodes) stats.statusCodes = {};
            const statusCode = responseDetail.response.statusCode;
            stats.statusCodes[statusCode] = (stats.statusCodes[statusCode] || 0) + 1;
        });

        // 优雅关闭
        process.on('SIGINT', () => {
            console.log('正在关闭代理服务器...');
            proxyServer.close(() => {
                console.log('代理服务器已关闭');
                // 打印最终统计信息
                console.log('\n=== 最终统计信息 ===');
                printStats();
                process.exit(0);
            });
        });

        // 定期打印性能统计
        setInterval(() => {
            printStats();
        }, 5 * 60 * 1000); // 每5分钟

        // 监控未捕获的异常
        process.on('uncaughtException', (err) => {
            console.error('未捕获的异常:', err);
            stats.errorCount++;
            if (!stats.errorTypes) stats.errorTypes = {};
            stats.errorTypes['UNCAUGHT'] = (stats.errorTypes['UNCAUGHT'] || 0) + 1;
        });

        process.on('unhandledRejection', (reason, promise) => {
            console.error('未处理的Promise拒绝:', reason);
            stats.errorCount++;
            if (!stats.errorTypes) stats.errorTypes = {};
            stats.errorTypes['UNHANDLED_REJECTION'] = (stats.errorTypes['UNHANDLED_REJECTION'] || 0) + 1;
        });

        await proxyServer.start();
        
        return proxyServer;
    } catch (error) {
        console.error("启动代理服务器失败:", error);
        throw error;
    }
}

// 启动服务器
startServer();