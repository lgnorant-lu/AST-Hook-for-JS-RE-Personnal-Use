const request = require('supertest');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { injectHook } = require('../../src/components/global-assign-hook-component/core/inject-hook');

describe('端到端测试 - 完整流程', () => {
    let apiServer;
    let proxyServer;
    let apiApp;
    
    // 测试前的准备工作
    beforeAll(async () => {
        // 设置测试环境
        process.env.NODE_ENV = 'test';
        
        // 启动API服务器
        const apiServerModule = require('../../src/api-server/api-server');
        apiApp = apiServerModule.app;
        apiServer = await apiServerModule.startServer();
        
        // 清理缓存目录
        const cacheDir = path.join(__dirname, '../../js-file-cache');
        if (fs.existsSync(cacheDir)) {
            const files = fs.readdirSync(cacheDir);
            for (const file of files) {
                if (file !== '.gitkeep') {
                    fs.unlinkSync(path.join(cacheDir, file));
                }
            }
        }
        
        console.log('测试服务器和环境已准备就绪');
    });
    
    // 测试完成后的清理工作
    afterAll(async () => {
        if (apiServer) {
            await new Promise((resolve) => {
                apiServer.close(() => {
                    console.log('API服务器已关闭');
                    resolve();
                });
            });
        }
        
        console.log('测试环境清理完成');
    });
    
    test('JavaScript代码注入和处理完整流程', async () => {
        // 1. 准备测试代码
        const jsCode = `
            var testVar = 'hello world';
            function testFunc() {
                return testVar;
            }
            var obj = {
                prop: 'test',
                method: function() {
                    return this.prop;
                }
            };
        `;
        
        // 2. 通过API服务器注入钩子
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        
        // 3. 验证响应
        expect(response.status).toBe(200);
        const injectedCode = decodeURIComponent(response.text);
        
        // 4. 验证钩子是否注入成功
        expect(injectedCode).toContain('cc11001100_hook');
        
        // 5. 验证注入后的代码是否仍然有效
        expect(injectedCode).toContain('testVar');
        expect(injectedCode).toContain('testFunc');
        expect(injectedCode).toContain('obj');
        
        // 6. 将注入后的代码保存到临时文件
        const tempFilePath = path.join(__dirname, 'temp-injected.js');
        fs.writeFileSync(tempFilePath, injectedCode);
        
        // 7. 清理临时文件
        if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
        
        console.log('JavaScript代码注入和处理流程测试完成');
    }, 30000);
    
    test('错误恢复机制测试', async () => {
        // 1. 测试无效JavaScript的处理
        const invalidJsCode = `
            var x = ;
            function brokenFunc() {
                return x
            }
        `;
        
        const response1 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(invalidJsCode)
            .expect(400);
        
        expect(response1.body).toHaveProperty('error');
        expect(response1.body.error).toBe('Failed to inject hook');
        
        // 2. 测试空请求处理
        const response2 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send('')
            .expect(400);
        
        expect(response2.body).toHaveProperty('error');
        expect(response2.body.error).toBe('Invalid request');
        
        // 3. 测试过大请求处理
        const largeJsCode = 'x'.repeat(6 * 1024 * 1024); // 6MB
        
        const response3 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(largeJsCode)
            .expect(413);
        
        expect(response3.body).toHaveProperty('error');
        expect(response3.body.error).toBe('Payload Too Large');
        
        // 4. 测试恢复能力 - 错误后仍能正常处理
        const validJsCode = 'var recoveryTest = 123;';
        
        const response4 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(validJsCode)
            .expect(200);
        
        expect(response4.status).toBe(200);
        const injectedCode = decodeURIComponent(response4.text);
        expect(injectedCode).toContain('cc11001100_hook');
        
        console.log('错误恢复机制测试完成');
    }, 30000);
    
    test('API服务器连续请求稳定性测试', async () => {
        // 准备测试代码
        const jsCode = 'var stabilityTest = "测试稳定性";';
        
        // 连续发送10个请求
        const requests = [];
        for (let i = 0; i < 10; i++) {
            requests.push(
                request(apiApp)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(jsCode + ` // 请求序号 ${i}`)
            );
        }
        
        // 等待所有请求完成
        const responses = await Promise.all(requests);
        
        // 验证所有请求都成功
        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            expect(response.status).toBe(200);
            const injectedCode = decodeURIComponent(response.text);
            expect(injectedCode).toContain('cc11001100_hook');
            expect(injectedCode).toContain(`请求序号 ${i}`);
        }
        
        console.log('API服务器连续请求稳定性测试完成');
    }, 60000);
}); 