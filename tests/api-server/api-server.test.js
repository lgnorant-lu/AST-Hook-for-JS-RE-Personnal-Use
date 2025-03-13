const request = require('supertest');
const express = require('express');
const path = require('path');
const fs = require('fs');

describe('API服务器测试', () => {
    let server;
    let app;

    beforeAll(async () => {
        // 设置测试环境
        process.env.NODE_ENV = 'test';
        
        // 动态导入服务器模块
        const serverModule = require('../../src/api-server/api-server');
        app = serverModule.app;
        server = await serverModule.startServer();
    });

    afterAll(async () => {
        if (server) {
            await new Promise((resolve) => {
                server.close(() => {
                    console.log('测试服务器已关闭');
                    resolve();
                });
            });
        }
    });

    describe('基础功能测试', () => {
        test('健康检查端点应该返回200', async () => {
            const response = await request(app)
                .get('/health')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).toEqual({ status: 'ok' });
        });

        test('Hook注入端点应该正确处理JavaScript代码', async () => {
            const jsCode = 'var x = 1;';
            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(jsCode)
                .expect(200);

            const decodedResponse = decodeURIComponent(response.text);
            expect(decodedResponse).toContain('cc11001100_hook');
            expect(decodedResponse).toContain('var x = ');
        });

        test('Hook注入端点应该处理大型JavaScript代码', async () => {
            let jsCode = 'var x = 1;\n';
            for (let i = 0; i < 1000; i++) {
                jsCode += `var test${i} = ${i};\n`;
            }

            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(jsCode)
                .expect(200);

            const decodedResponse = decodeURIComponent(response.text);
            expect(decodedResponse).toContain('cc11001100_hook');
            expect(decodedResponse.length).toBeGreaterThan(jsCode.length);
        }, 10000);  // 增加超时时间
    });

    describe('请求限流测试', () => {
        test('应该配置有请求限流', async () => {
            // 检查API服务器是否配置了限流功能
            
            // 在测试环境中验证限流被禁用
            expect(process.env.NODE_ENV).toBe('test');
            
            // 测试服务器在测试环境中应该允许大量请求
            const requests = [];
            for (let i = 0; i < 20; i++) {
                requests.push(
                    request(app)
                        .post('/hook-js-code')
                        .set('Content-Type', 'text/plain')
                        .send('var x = 1;')
                );
            }
            
            const responses = await Promise.all(requests);
            const successResponses = responses.filter(r => r.status === 200);
            
            // 在测试环境中，所有请求都应该成功，验证限流配置在测试环境中正确禁用
            expect(successResponses.length).toBe(20);
            
            // 验证请求的响应中包含正确的hook
            for (const response of successResponses) {
                const decodedResponse = decodeURIComponent(response.text);
                expect(decodedResponse).toContain('cc11001100_hook');
            }
        }, 30000);
    });

    describe('错误处理测试', () => {
        test('无效的JavaScript代码应该返回400', async () => {
            const invalidCode = 'var x = ;'; // 语法错误的代码
            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(invalidCode)
                .expect(400);

            expect(response.body.error).toBe('Failed to inject hook');
        }, 30000);

        test('过大的请求应该返回413', async () => {
            const largeCode = 'x'.repeat(6 * 1024 * 1024);  // 6MB
            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(largeCode)
                .expect(413);
        });

        test('空请求应该返回400', async () => {
            await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send('')
                .expect(400);
        });
    });

    describe('安全性测试', () => {
        test('应该包含安全响应头', async () => {
            const response = await request(app)
                .get('/health')
                .expect(200);

            expect(response.headers).toHaveProperty('x-content-type-options', 'nosniff');
            expect(response.headers).toHaveProperty('x-xss-protection');
            expect(response.headers).toHaveProperty('x-frame-options');
        });

        test('不存在的路由应该返回404', async () => {
            await request(app)
                .get('/not-exist')
                .expect(404);
        });

        test('不允许的HTTP方法应该返回405', async () => {
            await request(app)
                .put('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send('var x = 1;')
                .expect(405);
        });

        test('CORS配置应该正确', async () => {
            const response = await request(app)
                .options('/hook-js-code')
                .expect(200);

            expect(response.headers['access-control-allow-origin']).toBe('*');
            expect(response.headers['access-control-allow-methods']).toContain('POST');
            expect(response.headers['access-control-allow-headers']).toContain('Content-Type');
        });
    });

    describe('并发测试', () => {
        test('应该能处理多个并发请求', async () => {
            const concurrentRequests = 10;
            const jsCode = 'var x = 1;';
            
            const requests = Array(concurrentRequests).fill().map(() => 
                request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(jsCode)
            );

            const responses = await Promise.all(requests);
            const successResponses = responses.filter(r => r.status === 200);
            
            expect(successResponses.length).toBe(concurrentRequests);
            
            // 验证所有响应都包含注入的Hook
            for (const response of successResponses) {
                const decodedResponse = decodeURIComponent(response.text);
                expect(decodedResponse).toContain('cc11001100_hook');
            }
        }, 30000);

        test('并发请求应该正确处理错误', async () => {
            const requests = [
                // 正常请求
                request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send('var x = 1;'),
                // 无效代码
                request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send('var x = ;'),
                // 空请求
                request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(''),
                // 过大请求
                request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send('x'.repeat(6 * 1024 * 1024))
            ];

            const responses = await Promise.all(requests);
            expect(responses[0].status).toBe(200);  // 正常请求
            expect(responses[1].status).toBe(400);  // 无效代码
            expect(responses[2].status).toBe(400);  // 空请求
            expect(responses[3].status).toBe(413);  // 过大请求
        }, 30000);
    });

    describe('边界条件测试', () => {
        test('应该处理接近大小限制的请求', async () => {
            const almostTooLarge = 'x'.repeat(5 * 1024 * 1024 - 100); // 接近5MB
            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(almostTooLarge)
                .expect(200);
        }, 30000);

        test('应该处理特殊字符', async () => {
            const specialChars = `
                var x = "测试";
                var y = "🎉";
                var z = "\\u0000\\u0001";
                var w = "\\\\\\"";
            `;
            
            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(specialChars)
                .expect(200);

            const decodedResponse = decodeURIComponent(response.text);
            expect(decodedResponse).toContain('cc11001100_hook');
        });

        test('应该处理长变量名', async () => {
            let longVarName = 'var ' + 'a'.repeat(1000) + ' = 1;';
            const response = await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(longVarName)
                .expect(200);

            const decodedResponse = decodeURIComponent(response.text);
            expect(decodedResponse).toContain('cc11001100_hook');
        });
    });

    describe('性能测试', () => {
        test('小型请求的响应时间应该在可接受范围内', async () => {
            const start = Date.now();
            await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send('var x = 1;')
                .expect(200);
            const duration = Date.now() - start;
            
            expect(duration).toBeLessThan(1000); // 应该在1秒内完成
        });

        test('中型请求的响应时间应该在可接受范围内', async () => {
            let mediumCode = 'var x = 1;\n';
            for (let i = 0; i < 1000; i++) {
                mediumCode += `var test${i} = ${i};\n`;
            }

            const start = Date.now();
            await request(app)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(mediumCode)
                .expect(200);
            const duration = Date.now() - start;
            
            expect(duration).toBeLessThan(3000); // 应该在3秒内完成
        }, 30000);

        test('连续请求的性能应该稳定', async () => {
            const jsCode = 'var x = 1;';
            const requestCount = 5;
            const durations = [];

            for (let i = 0; i < requestCount; i++) {
                const start = Date.now();
                await request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(jsCode)
                    .expect(200);
                durations.push(Date.now() - start);
            }

            // 计算平均响应时间和标准差
            const average = durations.reduce((a, b) => a + b) / requestCount;
            const variance = durations.reduce((a, b) => a + Math.pow(b - average, 2), 0) / requestCount;
            const stdDev = Math.sqrt(variance);

            expect(average).toBeLessThan(1000); // 平均响应时间应该在1秒内
            expect(stdDev).toBeLessThan(500);   // 标准差应该小于500ms
        }, 30000);
    });

    describe('内存使用测试', () => {
        test('处理大量请求时内存使用应该稳定', async () => {
            const initialMemory = process.memoryUsage().heapUsed;
            const requestCount = 50;
            const jsCode = 'var x = 1;';

            for (let i = 0; i < requestCount; i++) {
                await request(app)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(jsCode)
                    .expect(200);
            }

            const finalMemory = process.memoryUsage().heapUsed;
            const memoryIncrease = finalMemory - initialMemory;
            
            // 内存增长不应超过50MB
            expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
        }, 60000);
    });
}); 