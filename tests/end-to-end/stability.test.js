const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

describe('系统稳定性测试', () => {
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
        
        console.log('稳定性测试环境已准备就绪');
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
        
        console.log('稳定性测试环境清理完成');
    });
    
    test('长时间运行稳定性测试', async () => {
        // 定义测试参数
        const testDuration = 10000; // 10秒，实际生产环境测试应更长
        const interval = 500; // 每500毫秒发送一个请求
        const startTime = performance.now();
        const results = [];
        
        // 简单的JavaScript代码
        const jsCode = 'var x = 1; function test() { return x + 1; }';
        
        // 在指定时间内定期发送请求
        while (performance.now() - startTime < testDuration) {
            try {
                const response = await request(apiApp)
                    .post('/hook-js-code')
                    .set('Content-Type', 'text/plain')
                    .send(jsCode);
                
                results.push({
                    status: response.status,
                    time: performance.now() - startTime,
                    success: response.status === 200
                });
                
                // 等待指定间隔
                await new Promise(resolve => setTimeout(resolve, interval));
            } catch (error) {
                results.push({
                    status: 'error',
                    time: performance.now() - startTime,
                    success: false,
                    error: error.message
                });
            }
        }
        
        // 分析结果
        const successCount = results.filter(r => r.success).length;
        const totalCount = results.length;
        const successRate = (successCount / totalCount) * 100;
        
        console.log(`总请求数: ${totalCount}`);
        console.log(`成功请求数: ${successCount}`);
        console.log(`成功率: ${successRate.toFixed(2)}%`);
        
        // 验证稳定性
        expect(successRate).toBeGreaterThan(95); // 成功率应该大于95%
    }, 60000);
    
    test('内存使用稳定性测试', async () => {
        // 记录初始内存使用情况
        const initialMemory = process.memoryUsage();
        const memorySnapshots = [initialMemory];
        
        // 定义测试参数
        const requestCount = 50;
        const jsCode = `
            var memTest = {
                data: "${'-'.repeat(1000)}", // 1KB字符串
                method: function() {
                    return this.data.length;
                }
            };
        `;
        
        // 发送一系列请求
        for (let i = 0; i < requestCount; i++) {
            await request(apiApp)
                .post('/hook-js-code')
                .set('Content-Type', 'text/plain')
                .send(jsCode);
            
            // 每10个请求记录一次内存使用情况
            if (i % 10 === 0) {
                memorySnapshots.push(process.memoryUsage());
            }
        }
        
        // 记录最终内存使用情况
        const finalMemory = process.memoryUsage();
        memorySnapshots.push(finalMemory);
        
        // 分析内存使用情况
        console.log('内存使用快照:');
        for (let i = 0; i < memorySnapshots.length; i++) {
            const snapshot = memorySnapshots[i];
            console.log(`快照 ${i}: 堆内存: ${(snapshot.heapUsed / 1024 / 1024).toFixed(2)}MB`);
        }
        
        // 计算内存增长情况
        const memoryGrowth = finalMemory.heapUsed - initialMemory.heapUsed;
        const memoryGrowthMB = memoryGrowth / 1024 / 1024;
        console.log(`内存增长: ${memoryGrowthMB.toFixed(2)}MB`);
        
        // 验证内存使用是否稳定
        // 理想情况下，内存增长应该有限
        // 对于50个请求，增长不应超过50MB
        expect(memoryGrowthMB).toBeLessThan(50);
    }, 60000);
    
    test('系统重启恢复能力测试', async () => {
        // 1. 发送一个初始请求
        const jsCode = 'var restartTest = "测试重启恢复能力";';
        
        const initialResponse = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        
        expect(initialResponse.status).toBe(200);
        
        // 2. 重启API服务器
        await new Promise((resolve) => {
            apiServer.close(() => {
                console.log('API服务器已关闭，准备重启');
                resolve();
            });
        });
        
        // 重新启动API服务器
        const apiServerModule = require('../../src/api-server/api-server');
        apiApp = apiServerModule.app;
        apiServer = await apiServerModule.startServer();
        
        console.log('API服务器已重新启动');
        
        // 等待一小段时间确保服务器完全启动
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 3. 重启后发送相同的请求，验证服务器恢复正常
        const restartResponse = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        
        expect(restartResponse.status).toBe(200);
        const injectedCode = decodeURIComponent(restartResponse.text);
        expect(injectedCode).toContain('cc11001100_hook');
        expect(injectedCode).toContain('restartTest');
        
        console.log('系统重启恢复能力测试完成');
    }, 60000);
}); 