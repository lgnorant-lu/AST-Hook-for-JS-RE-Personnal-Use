const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { 
    process: processRequest, 
    injectSuccessJsFileCache,
    ensureCacheReady,
    initCache,
    updateCacheExpireTime,
    CACHE_EXPIRE_TIME
} = require('../../src/components/global-assign-hook-component/core/global-assign-hook-component-main');
const { TEST_CACHE_DIR, TEST_CACHE_META, ensureDirectoryExists } = require('../setup');

describe('缓存管理器测试', () => {
    // 测试工具函数
    function createMockResponse(body, contentType = 'application/javascript') {
        return {
            response: {
                body: Buffer.from(body),
                header: {
                    'content-type': contentType
                }
            }
        };
    }

    function createMockRequest(url = 'http://example.com/test.js') {
        return {
            url,
            method: 'GET',
            requestOptions: {
                hostname: 'example.com'
            }
        };
    }

    function generateLongJsCode(size = 3000) {
        let code = 'var x = 1;\n';
        while (code.length < size) {
            code += `var test_${code.length} = "这是一个测试变量";\n`;
        }
        return code;
    }

    function getMd5(str) {
        const md5 = crypto.createHash('md5');
        md5.update(str);
        return md5.digest('hex');
    }

    // 等待文件写入完成
    async function waitForFile(filePath, timeout = 5000) {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            if (fs.existsSync(filePath)) {
                return true;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return false;
    }

    beforeEach(async () => {
        // 重置缓存状态
        injectSuccessJsFileCache.clear();
        await ensureCacheReady();
        await new Promise(resolve => setTimeout(resolve, 500));
    });

    describe('基础功能测试', () => {
        test('缓存目录和元数据文件应该正确创建', async () => {
            expect(fs.existsSync(TEST_CACHE_DIR)).toBe(true);
            expect(fs.existsSync(TEST_CACHE_META)).toBe(true);
        });

        test('缓存初始化应该正确加载现有缓存', async () => {
            const testUrl = 'http://test.com/script.js';
            const testMeta = {
                url: testUrl,
                filepath: path.join(TEST_CACHE_DIR, `${getMd5(testUrl)}.js`),
                cacheTime: Date.now()
            };
            
            // 写入测试元数据
            await fs.promises.appendFile(TEST_CACHE_META, JSON.stringify(testMeta) + '\n');
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 重新初始化缓存
            await initCache();
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 验证缓存是否被正确加载
            expect(injectSuccessJsFileCache.has(testUrl)).toBe(true);
            const loadedMeta = injectSuccessJsFileCache.get(testUrl);
            expect(loadedMeta.filepath).toBe(testMeta.filepath);
        });
    });

    describe('缓存写入测试', () => {
        test('处理大型JavaScript文件时应该创建缓存', async () => {
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const expectedCacheFile = path.join(TEST_CACHE_DIR, `${getMd5(request.url)}.js`);
            const fileExists = await waitForFile(expectedCacheFile);
            expect(fileExists).toBe(true);

            const metaContent = await fs.promises.readFile(TEST_CACHE_META, 'utf-8');
            expect(metaContent).toContain(request.url);
        });

        test('小型JavaScript文件不应该创建缓存', async () => {
            const jsCode = 'var x = 1;'; // 小于2000字节
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const expectedCacheFile = path.join(TEST_CACHE_DIR, `${getMd5(request.url)}.js`);
            expect(fs.existsSync(expectedCacheFile)).toBe(false);
        });

        test('缓存文件应包含注入的Hook代码', async () => {
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const expectedCacheFile = path.join(TEST_CACHE_DIR, `${getMd5(request.url)}.js`);
            const fileExists = await waitForFile(expectedCacheFile);
            expect(fileExists).toBe(true);

            const cacheContent = await fs.promises.readFile(expectedCacheFile, 'utf-8');
            expect(cacheContent).toContain('cc11001100_hook');
        });
    });

    describe('缓存读取测试', () => {
        test('相同URL的请求应该复用缓存', async () => {
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response1 = createMockResponse(jsCode);
            const response2 = createMockResponse(jsCode);

            // 第一次请求
            await processRequest(request, response1);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const firstResponse = response1.response.body.toString();

            // 第二次请求
            await processRequest(request, response2);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const secondResponse = response2.response.body.toString();

            expect(secondResponse).toBe(firstResponse);
        });

        test('不同URL的请求应该创建新缓存', async () => {
            const jsCode = generateLongJsCode();
            const request1 = createMockRequest('http://example.com/1.js');
            const request2 = createMockRequest('http://example.com/2.js');
            const response1 = createMockResponse(jsCode);
            const response2 = createMockResponse(jsCode);

            await processRequest(request1, response1);
            await processRequest(request2, response2);
            await new Promise(resolve => setTimeout(resolve, 2000));

            const cacheFile1 = path.join(TEST_CACHE_DIR, `${getMd5(request1.url)}.js`);
            const cacheFile2 = path.join(TEST_CACHE_DIR, `${getMd5(request2.url)}.js`);

            const file1Exists = await waitForFile(cacheFile1);
            const file2Exists = await waitForFile(cacheFile2);

            expect(file1Exists).toBe(true);
            expect(file2Exists).toBe(true);
            expect(cacheFile1).not.toBe(cacheFile2);
        });
    });

    describe('错误处理测试', () => {
        test('缓存文件损坏时应该重新生成', async () => {
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            // 首次处理创建缓存
            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const cacheFile = path.join(TEST_CACHE_DIR, `${getMd5(request.url)}.js`);
            const fileExists = await waitForFile(cacheFile);
            expect(fileExists).toBe(true);
            
            // 损坏缓存文件
            await fs.promises.writeFile(cacheFile, 'corrupted');
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 再次处理
            const response2 = createMockResponse(jsCode);
            await processRequest(request, response2);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const newContent = await fs.promises.readFile(cacheFile, 'utf-8');
            expect(newContent).not.toBe('corrupted');
            expect(newContent).toContain('cc11001100_hook');
        });

        test('元数据文件损坏时应该重新初始化', async () => {
            // 损坏元数据文件
            await fs.promises.writeFile(TEST_CACHE_META, 'corrupted');
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 重新初始化
            await initCache();
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 验证元数据文件被重置
            const metaContent = await fs.promises.readFile(TEST_CACHE_META, 'utf-8');
            expect(metaContent).toBe('');
            expect(injectSuccessJsFileCache.size).toBe(0);
        });

        test('缓存目录不存在时应该自动创建', async () => {
            // 删除缓存目录
            await fs.promises.rm(TEST_CACHE_DIR, { recursive: true, force: true });
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 处理请求
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const dirExists = await waitForFile(TEST_CACHE_DIR);
            const metaExists = await waitForFile(TEST_CACHE_META);

            expect(dirExists).toBe(true);
            expect(metaExists).toBe(true);
        });
    });

    describe('缓存清理测试', () => {
        test('禁用缓存时不应创建缓存文件', async () => {
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            // 禁用缓存
            processRequest.disableCache = true;

            // 确保缓存目录存在
            await ensureDirectoryExists(TEST_CACHE_DIR);
            await new Promise(resolve => setTimeout(resolve, 500));

            // 清空缓存目录
            const files = await fs.promises.readdir(TEST_CACHE_DIR);
            for (const file of files) {
                if (file !== 'meta.jsonl') {
                    await fs.promises.unlink(path.join(TEST_CACHE_DIR, file));
                }
            }
            await fs.promises.writeFile(TEST_CACHE_META, '', 'utf-8');
            await new Promise(resolve => setTimeout(resolve, 500));

            // 处理请求
            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 验证响应内容
            const responseBody = response.response.body.toString();
            expect(responseBody).toContain('cc11001100_hook');

            // 验证没有创建缓存文件
            const cacheFile = path.join(TEST_CACHE_DIR, `${getMd5(request.url)}.js`);
            expect(fs.existsSync(cacheFile)).toBe(false);

            // 验证元数据文件为空
            const metaContent = await fs.promises.readFile(TEST_CACHE_META, 'utf-8');
            expect(metaContent.trim()).toBe('');

            // 验证内存缓存为空
            expect(injectSuccessJsFileCache.size).toBe(0);
        });

        test('缓存文件名应该使用URL的MD5值', async () => {
            const jsCode = generateLongJsCode();
            const request = createMockRequest();
            const response = createMockResponse(jsCode);

            // 确保缓存未禁用
            processRequest.disableCache = false;

            console.log('测试URL:', request.url);
            console.log('预期MD5:', getMd5(request.url));

            await processRequest(request, response);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const expectedCacheFile = path.join(TEST_CACHE_DIR, `${getMd5(request.url)}.js`);
            console.log('预期缓存文件路径:', expectedCacheFile);

            // 列出缓存目录中的所有文件
            const files = await fs.promises.readdir(TEST_CACHE_DIR);
            console.log('缓存目录中的文件:', files);

            const fileExists = await waitForFile(expectedCacheFile);
            expect(fileExists).toBe(true);
        });
    });

    describe('缓存过期测试', () => {
        beforeEach(async () => {
            // 清空缓存目录
            const files = await fs.promises.readdir(TEST_CACHE_DIR);
            for (const file of files) {
                if (file !== 'meta.jsonl') {
                    await fs.promises.unlink(path.join(TEST_CACHE_DIR, file));
                }
            }
            await fs.promises.writeFile(TEST_CACHE_META, '', 'utf-8');
            await new Promise(resolve => setTimeout(resolve, 500));
        });

        test('缓存应在过期时被删除', async () => {
            const testUrl = 'http://example.com/test.js';
            const mockRequest = {
                url: testUrl,
                method: 'GET',
                requestOptions: {
                    hostname: 'example.com',
                    path: '/test.js'
                }
            };
            const mockResponse = {
                response: {
                    body: generateLongJsCode(),
                    header: {
                        'content-type': 'application/javascript'
                    }
                }
            };

            // 设置一个较短的过期时间用于测试
            const originalExpireTime = CACHE_EXPIRE_TIME;
            updateCacheExpireTime(1000); // 1秒后过期

            // 首次请求应该创建缓存
            await processRequest(mockRequest, mockResponse);
            await new Promise(resolve => setTimeout(resolve, 100));

            // 验证缓存文件已创建
            const md5 = crypto.createHash('md5');
            md5.update(testUrl);
            const cacheFile = path.join(TEST_CACHE_DIR, `${md5.digest('hex')}.js`);
            expect(fs.existsSync(cacheFile)).toBe(true);
            console.log('缓存文件已创建:', cacheFile);

            // 等待缓存过期
            await new Promise(resolve => setTimeout(resolve, 2000));

            // 再次请求同一URL
            await processRequest(mockRequest, mockResponse);
            await new Promise(resolve => setTimeout(resolve, 100));

            // 验证旧的缓存文件已被删除,并创建了新的缓存文件
            const newMd5 = crypto.createHash('md5');
            newMd5.update(testUrl);
            const newCacheFile = path.join(TEST_CACHE_DIR, `${newMd5.digest('hex')}.js`);
            expect(fs.existsSync(newCacheFile)).toBe(true);
            console.log('新缓存文件已创建:', newCacheFile);

            // 恢复原始过期时间
            updateCacheExpireTime(originalExpireTime);
        });

        test('未过期的缓存应该被重用', async () => {
            const testUrl = 'http://example.com/test2.js';
            const mockRequest = {
                url: testUrl,
                method: 'GET',
                requestOptions: {
                    hostname: 'example.com',
                    path: '/test2.js'
                }
            };
            const mockResponse = {
                response: {
                    body: generateLongJsCode(),
                    header: {
                        'content-type': 'application/javascript'
                    }
                }
            };

            // 设置一个较长的过期时间用于测试
            const originalExpireTime = CACHE_EXPIRE_TIME;
            updateCacheExpireTime(10000); // 10秒后过期

            // 首次请求创建缓存
            await processRequest(mockRequest, mockResponse);
            await new Promise(resolve => setTimeout(resolve, 100));

            // 获取首次缓存的文件修改时间
            const md5 = crypto.createHash('md5');
            md5.update(testUrl);
            const cacheFile = path.join(TEST_CACHE_DIR, `${md5.digest('hex')}.js`);
            expect(fs.existsSync(cacheFile)).toBe(true);
            const firstMtime = fs.statSync(cacheFile).mtime;
            console.log('首次缓存文件已创建:', cacheFile);

            // 等待一小段时间后再次请求
            await new Promise(resolve => setTimeout(resolve, 500));
            await processRequest(mockRequest, mockResponse);
            await new Promise(resolve => setTimeout(resolve, 100));

            // 验证缓存文件未被更新
            expect(fs.existsSync(cacheFile)).toBe(true);
            const secondMtime = fs.statSync(cacheFile).mtime;
            expect(secondMtime).toEqual(firstMtime);
            console.log('缓存文件未被更新:', cacheFile);

            // 恢复原始过期时间
            updateCacheExpireTime(originalExpireTime);
        });
    });
});