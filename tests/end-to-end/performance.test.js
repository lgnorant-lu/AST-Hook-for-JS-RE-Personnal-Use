const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

describe('系统性能测试', () => {
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
        
        // 确保测试缓存目录存在
        const cachePath = path.join(__dirname, '../../cache');
        if (!fs.existsSync(cachePath)) {
            fs.mkdirSync(cachePath, { recursive: true });
        }
        
        console.log('性能测试环境已准备就绪');
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
        
        console.log('性能测试环境清理完成');
    });
    
    // 生成指定大小的JavaScript代码
    function generateJSCode(sizeInKB) {
        const baseCode = `
            // 基础代码
            function test() {
                return "测试字符串";
            }
            
            var obj = {
                prop1: "value1",
                prop2: "value2",
                method: function() {
                    return this.prop1 + this.prop2;
                }
            };
        `;
        
        // 添加注释来增加文件大小
        let padding = '// ';
        const paddingSize = sizeInKB * 1024 - baseCode.length;
        if (paddingSize > 0) {
            padding = padding.padEnd(paddingSize, '-');
        }
        
        return baseCode + padding;
    }
    
    test('不同大小文件的注入性能测试', async () => {
        const sizes = [1, 10, 50, 100]; // KB
        const results = {};
        
        for (const size of sizes) {
            console.log(`测试 ${size}KB 文件的注入性能`);
            const jsCode = generateJSCode(size);
            
            const startTime = performance.now();
            const response = await request(apiApp)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(jsCode)
                .expect(200);
            const endTime = performance.now();
            
            const duration = endTime - startTime;
            results[`${size}KB`] = duration;
            
            const injectedCode = decodeURIComponent(response.text);
            expect(injectedCode).toContain('cc11001100_hook');
            
            console.log(`${size}KB文件处理耗时: ${duration.toFixed(2)}ms`);
        }
        
        // 输出结果汇总
        console.table(results);
        
        // 确保性能在可接受范围内
        // 对于100KB的文件，响应时间应该低于2000ms
        expect(results['100KB']).toBeLessThan(2000);
    }, 30000);
    
    test('并发请求性能测试', async () => {
        const concurrentRequests = 10;
        const jsCode = `
            function testConcurrent() {
                return "并发测试";
            }
            
            var concurrentObj = {
                test: function() {
                    return "并发对象测试";
                }
            };
        `;
        
        console.log(`执行${concurrentRequests}个并发请求测试`);
        
        const startTime = performance.now();
        
        // 创建多个并发请求
        const requests = Array(concurrentRequests).fill().map(() => 
            request(apiApp)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(jsCode)
        );
        
        // 等待所有请求完成
        const responses = await Promise.all(requests);
        
        const endTime = performance.now();
        const totalDuration = endTime - startTime;
        const avgDuration = totalDuration / concurrentRequests;
        
        console.log(`${concurrentRequests}个并发请求总耗时: ${totalDuration.toFixed(2)}ms`);
        console.log(`平均每个请求耗时: ${avgDuration.toFixed(2)}ms`);
        
        // 验证所有响应都成功
        responses.forEach((response, index) => {
            expect(response.status).toBe(200);
            const injectedCode = decodeURIComponent(response.text);
            expect(injectedCode).toContain('cc11001100_hook');
        });
        
        // 确保平均响应时间在可接受范围内
        expect(avgDuration).toBeLessThan(500);
    }, 30000);
    
    test('响应时间稳定性测试', async () => {
        const iterations = 10;
        const jsCode = `
            function testStability() {
                return "稳定性测试";
            }
            
            var stableObj = {
                method1: function() {
                    return "方法1";
                },
                method2: function() {
                    return "方法2";
                }
            };
        `;
        
        const durations = [];
        
        console.log(`执行${iterations}次请求测试响应时间稳定性`);
        
        for (let i = 0; i < iterations; i++) {
            const startTime = performance.now();
            const response = await request(apiApp)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(jsCode)
                .expect(200);
            const endTime = performance.now();
            
            const duration = endTime - startTime;
            durations.push(duration);
            
            console.log(`请求 #${i+1} 耗时: ${duration.toFixed(2)}ms`);
            
            // 验证响应成功
            const injectedCode = decodeURIComponent(response.text);
            expect(injectedCode).toContain('cc11001100_hook');
            
            // 每次请求之间稍微暂停以模拟真实使用场景
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // 计算统计指标
        const avgDuration = durations.reduce((sum, d) => sum + d, 0) / durations.length;
        const minDuration = Math.min(...durations);
        const maxDuration = Math.max(...durations);
        const variance = durations.reduce((sum, d) => sum + Math.pow(d - avgDuration, 2), 0) / durations.length;
        const stdDev = Math.sqrt(variance);
        
        console.log('响应时间统计:');
        console.log(`平均响应时间: ${avgDuration.toFixed(2)}ms`);
        console.log(`最小响应时间: ${minDuration.toFixed(2)}ms`);
        console.log(`最大响应时间: ${maxDuration.toFixed(2)}ms`);
        console.log(`标准差: ${stdDev.toFixed(2)}ms`);
        
        // 验证标准差在可接受范围内（响应时间稳定性指标）
        expect(stdDev).toBeLessThan(avgDuration * 0.5); // 标准差应该小于平均值的50%
    }, 30000);
    
    test('缓存性能对比测试', async () => {
        const jsCode = `
            function testCaching() {
                return "缓存测试";
            }
            
            var cacheObj = {
                method: function() {
                    return "缓存方法测试";
                }
            };
        `;
        
        console.log('执行缓存性能对比测试');
        
        // 第一次请求（无缓存）
        const startTime1 = performance.now();
        const response1 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        const endTime1 = performance.now();
        
        const duration1 = endTime1 - startTime1;
        console.log(`首次请求（无缓存）耗时: ${duration1.toFixed(2)}ms`);
        
        // 第二次请求（应使用缓存）
        const startTime2 = performance.now();
        const response2 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        const endTime2 = performance.now();
        
        const duration2 = endTime2 - startTime2;
        console.log(`第二次请求（有缓存）耗时: ${duration2.toFixed(2)}ms`);
        
        // 验证两次响应内容相同
        const injectedCode1 = decodeURIComponent(response1.text);
        const injectedCode2 = decodeURIComponent(response2.text);
        expect(injectedCode1).toEqual(injectedCode2);
        expect(injectedCode1).toContain('cc11001100_hook');
        
        // 验证缓存后的响应时间显著缩短（至少快30%）
        const speedupPercentage = ((duration1 - duration2) / duration1) * 100;
        console.log(`缓存性能提升: ${speedupPercentage.toFixed(2)}%`);
        
        expect(duration2).toBeLessThan(duration1 * 0.7); // 缓存后应至少快30%
    }, 15000);
}); 