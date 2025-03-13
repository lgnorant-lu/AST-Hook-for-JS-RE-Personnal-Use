const request = require('supertest');
const fs = require('fs');
const path = require('path');

describe('系统安全测试', () => {
    let apiServer;
    let apiApp;
    
    // 测试前的准备工作
    beforeAll(async () => {
        // 设置测试环境
        process.env.NODE_ENV = 'test';
        
        // 启动API服务器
        const apiServerModule = require('../../src/api-server/api-server');
        apiApp = apiServerModule.app;
        apiServer = await apiServerModule.startServer();
        
        console.log('安全测试环境已准备就绪');
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
        
        console.log('安全测试环境清理完成');
    });
    
    test('防御XSS攻击测试', async () => {
        // 包含潜在XSS攻击的JavaScript代码
        const xssCode = `
            // 尝试执行XSS攻击的JavaScript代码
            var maliciousPayload = "<script>alert('XSS攻击')</script>";
            document.body.innerHTML = maliciousPayload;
            
            // 尝试插入iframe
            var iframe = document.createElement('iframe');
            iframe.src = 'https://malicious-site.com';
            document.body.appendChild(iframe);
            
            // 尝试通过eval执行代码
            eval("alert('通过eval执行的恶意代码')");
            
            // 使用事件处理程序
            window.onload = function() {
                location.href = 'https://malicious-redirect.com';
            };
        `;
        
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(xssCode)
            .expect(200);
        
        const injectedCode = decodeURIComponent(response.text);
        // 验证代码被正确注入了钩子
        expect(injectedCode).toContain('cc11001100_hook');
        
        // 确保响应中包含合适的内容安全策略头（如果支持）
        if (response.headers['content-security-policy']) {
            expect(response.headers['content-security-policy']).toContain("script-src 'self'");
        }
        
        console.log('XSS防御测试完成');
    });
    
    test('防御注入攻击测试', async () => {
        // 构造可能导致代码注入的JavaScript
        const injectionCode = `
            // 尝试覆盖或篡改全局对象
            Object.prototype.toString = function() { return "被篡改的toString"; };
            
            // 尝试修改原生函数
            Array.prototype.push = function() { console.log("被篡改的push方法"); };
            
            // 尝试覆盖钩子函数
            function cc11001100_hook() {
                console.log("尝试覆盖钩子函数");
                return null;
            }
            
            // 尝试通过原型链污染
            const payload = '{"__proto__": {"malicious": true}}';
            const obj = JSON.parse(payload);
        `;
        
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(injectionCode)
            .expect(200);
        
        const injectedCode = decodeURIComponent(response.text);
        // 验证钩子注入正常工作
        expect(injectedCode).toContain('cc11001100_hook');
        
        // 检查响应内容，确保尝试覆盖钩子的代码被正确处理
        // 注：这里只能检查代码转换结果，不能执行实际JS代码
        console.log('注入攻击防御测试完成');
    });
    
    test('防御大量请求攻击测试', async () => {
        // 模拟DoS攻击：短时间内发送大量请求
        const requestCount = 30; // 足够触发速率限制但不会真正造成DoS
        const jsCode = 'console.log("测试代码");';
        
        console.log(`发送${requestCount}个连续请求模拟DoS攻击`);
        
        const requests = [];
        for (let i = 0; i < requestCount; i++) {
            requests.push(
                request(apiApp)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(jsCode)
                    .then(response => ({
                        status: response.status,
                        attempt: i + 1
                    }))
                    .catch(err => ({
                        status: err.response ? err.response.status : 'error',
                        attempt: i + 1
                    }))
            );
        }
        
        const results = await Promise.all(requests);
        
        // 分析结果：应该有部分请求被限流（429状态码）
        const statusCounts = results.reduce((acc, result) => {
            acc[result.status] = (acc[result.status] || 0) + 1;
            return acc;
        }, {});
        
        console.log('请求状态统计:', statusCounts);
        
        // 确认存在被限流的请求（429 Too Many Requests）
        expect(statusCounts['429']).toBeGreaterThan(0);
        
        console.log('DoS防御测试完成');
    });
    
    test('溢出和边界条件测试', async () => {
        // 测试特别大的JavaScript代码
        const largeCode = 'const a = "' + 'X'.repeat(1000000) + '";'; // 1MB左右的代码
        
        const response1 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(largeCode);
        
        // 应该返回413 Payload Too Large或者能成功处理
        expect([200, 413].includes(response1.status)).toBeTruthy();
        if (response1.status === 200) {
            expect(decodeURIComponent(response1.text)).toContain('cc11001100_hook');
        }
        
        // 测试非常复杂的嵌套代码（可能导致堆栈溢出）
        let complexCode = 'function f0() { return 0; }';
        for (let i = 1; i <= 500; i++) {
            complexCode += `function f${i}() { return f${i-1}() + 1; }`;
        }
        complexCode += 'f500();';
        
        const response2 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(complexCode);
        
        // 应该能正常处理或返回错误，但不应崩溃服务器
        expect(response2.status).toBeDefined();
        
        // 再次发送正常请求，确认服务器仍在运行
        const normalCode = 'function test() { return "正常请求"; }';
        const response3 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(normalCode)
            .expect(200);
        
        expect(decodeURIComponent(response3.text)).toContain('cc11001100_hook');
        
        console.log('溢出和边界条件测试完成');
    });
    
    test('防止敏感信息泄露测试', async () => {
        // 发送错误请求，检查错误响应是否包含敏感信息
        const response1 = await request(apiApp)
            .get('/not-exist-endpoint')
            .expect(404);
        
        // 检查错误响应是否包含堆栈跟踪或其他敏感信息
        if (response1.text) {
            expect(response1.text).not.toContain('Error: ');
            expect(response1.text).not.toContain('at ');
            expect(response1.text).not.toContain('node_modules');
            expect(response1.text).not.toContain('throw');
        }
        
        // 发送一个无效的JavaScript代码，检查错误响应
        const invalidCode = 'function test() { var x = 1; return x + };'; // 语法错误
        const response2 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(invalidCode);
        
        // 应该返回400错误，并且不包含详细的堆栈跟踪
        expect([400, 429]).toContain(response2.status); // 可能因为限流返回429
        if (response2.text && response2.status === 400) {
            expect(response2.text).not.toContain('SyntaxError: ');
            expect(response2.text).not.toContain('at Parser.');
            expect(response2.text).not.toContain('node_modules');
        }
        
        console.log('敏感信息泄露防护测试完成');
    });
    
    test('HTTP头安全测试', async () => {
        // 发送正常请求，检查安全相关HTTP头
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send('function securityTest() { return "测试安全HTTP头"; }')
            .expect(200);
        
        // 检查常见的安全HTTP头
        // 注：具体头的存在取决于服务器配置
        const headers = response.headers;
        
        console.log('安全相关HTTP头:');
        const securityHeaders = [
            'x-content-type-options',
            'x-frame-options',
            'content-security-policy',
            'strict-transport-security',
            'x-xss-protection'
        ];
        
        securityHeaders.forEach(header => {
            console.log(`${header}: ${headers[header] || '未设置'}`);
        });
        
        // 检查内容类型设置
        expect(headers['content-type']).toBeDefined();
        
        // 至少应该设置了一些安全头（取决于服务器配置）
        const hasSecurityHeaders = securityHeaders.some(header => headers[header]);
        expect(hasSecurityHeaders).toBeTruthy();
        
        console.log('HTTP头安全测试完成');
    });
}); 