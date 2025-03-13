#!/usr/bin/env node

/**
 * 测试运行脚本
 * 用法：
 *   node scripts/run-tests.js [类别]
 * 
 * 可选类别:
 *   - all: 运行所有测试（默认）
 *   - unit: 运行单元测试
 *   - api: 运行API服务器测试
 *   - babel: 运行Babel钩子注入测试
 *   - e2e: 运行端到端测试
 *   - perf: 运行性能测试
 *   - compat: 运行兼容性测试
 *   - security: 运行安全测试
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 获取命令行参数
const args = process.argv.slice(2);
const testType = args[0] || 'all';

// 测试类别映射
const testConfig = {
    all: {
        desc: '所有测试',
        cmd: 'jest'
    },
    unit: {
        desc: '单元测试',
        cmd: 'jest --testPathIgnorePatterns="end-to-end"'
    },
    api: {
        desc: 'API服务器测试',
        cmd: 'jest tests/api-server/'
    },
    babel: {
        desc: 'Babel钩子注入测试',
        cmd: 'jest tests/babel-hook/'
    },
    e2e: {
        desc: '端到端测试',
        cmd: 'jest tests/end-to-end/'
    },
    perf: {
        desc: '性能测试',
        cmd: 'jest tests/end-to-end/performance.test.js'
    },
    compat: {
        desc: '兼容性测试',
        cmd: 'jest tests/end-to-end/compatibility.test.js'
    },
    security: {
        desc: '安全测试',
        cmd: 'jest tests/end-to-end/security.test.js'
    },
    stability: {
        desc: '稳定性测试',
        cmd: 'jest tests/end-to-end/stability.test.js'
    }
};

// 验证测试类别
if (!testConfig[testType]) {
    console.error(`错误: 未知的测试类别 "${testType}"`);
    console.log('可用的测试类别:');
    for (const [type, config] of Object.entries(testConfig)) {
        console.log(`  - ${type}: ${config.desc}`);
    }
    process.exit(1);
}

// 配置
const config = testConfig[testType];
const rootDir = path.resolve(__dirname, '..');
const reportDir = path.join(rootDir, 'test-reports');

// 确保报告目录存在
if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
}

// 运行时间戳
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const logFile = path.join(reportDir, `test-${testType}-${timestamp}.log`);

// 确保缓存目录存在
const cacheDir = path.join(rootDir, 'cache');
if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
} else {
    // 清理缓存目录
    fs.readdirSync(cacheDir).forEach(file => {
        const filePath = path.join(cacheDir, file);
        try {
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            }
        } catch (err) {
            console.error(`清理缓存文件 ${filePath} 时出错:`, err.message);
        }
    });
    console.log('缓存目录已清理');
}

// 运行测试并捕获输出
console.log(`开始运行${config.desc}...`);
console.log(`测试结果将记录到: ${logFile}`);

try {
    // 设置环境变量
    process.env.NODE_ENV = 'test';
    
    // 运行Jest命令
    const command = `npx ${config.cmd} --runInBand --detectOpenHandles --forceExit`;
    console.log(`执行命令: ${command}`);
    
    const output = execSync(command, {
        cwd: rootDir,
        stdio: 'pipe',
        encoding: 'utf8'
    });
    
    // 将输出保存到日志文件
    fs.writeFileSync(logFile, output);
    
    // 在控制台显示输出
    console.log(output);
    console.log(`测试成功完成！结果已保存到 ${logFile}`);
    
    // 生成简单的测试报告
    generateReport(output, testType, timestamp);
    
    process.exit(0);
} catch (error) {
    // 测试失败
    console.error('测试执行失败:');
    
    if (error.stdout) {
        // 将输出保存到日志文件
        fs.writeFileSync(logFile, error.stdout);
        console.log(error.stdout);
    }
    
    if (error.stderr) {
        fs.appendFileSync(logFile, `\n\nSTDERR:\n${error.stderr}`);
        console.error(error.stderr);
    }
    
    console.error(`测试失败！详细日志已保存到 ${logFile}`);
    
    // 生成失败报告
    if (error.stdout) {
        generateReport(error.stdout, testType, timestamp, false);
    }
    
    process.exit(1);
}

/**
 * 生成简单的测试报告
 * @param {string} output - 测试输出
 * @param {string} testType - 测试类型
 * @param {string} timestamp - 时间戳
 * @param {boolean} success - 测试是否成功
 */
function generateReport(output, testType, timestamp, success = true) {
    const reportFile = path.join(reportDir, `report-${testType}-${timestamp}.html`);
    
    // 提取测试结果
    const totalMatch = output.match(/(\d+) tests? passed/);
    const failedMatch = output.match(/(\d+) tests? failed/);
    const timeMatch = output.match(/Time:\s+([0-9.]+)\s+s/);
    
    const totalTests = totalMatch ? parseInt(totalMatch[1], 10) : 0;
    const failedTests = failedMatch ? parseInt(failedMatch[1], 10) : 0;
    const passedTests = totalTests - failedTests;
    const time = timeMatch ? parseFloat(timeMatch[1]) : 0;
    
    // 创建HTML报告
    const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>测试报告 - ${testConfig[testType].desc}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                color: #333;
            }
            .container {
                max-width: 900px;
                margin: 0 auto;
            }
            h1 {
                color: #333;
                border-bottom: 2px solid #eee;
                padding-bottom: 10px;
            }
            .summary {
                background-color: ${success ? '#f0f8ff' : '#fff0f0'};
                border-left: 4px solid ${success ? '#4caf50' : '#f44336'};
                padding: 15px;
                margin: 20px 0;
                border-radius: 3px;
            }
            .stats {
                display: flex;
                flex-wrap: wrap;
                margin: 20px 0;
            }
            .stat-box {
                flex: 1;
                margin: 5px;
                padding: 15px;
                background-color: #f5f5f5;
                border-radius: 5px;
                text-align: center;
                min-width: 100px;
            }
            .passed { background-color: #e8f5e9; color: #2e7d32; }
            .failed { background-color: #ffebee; color: #c62828; }
            .time { background-color: #e3f2fd; color: #1565c0; }
            .big-number {
                font-size: 28px;
                font-weight: bold;
                margin: 5px 0;
            }
            .output {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                overflow-x: auto;
                white-space: pre-wrap;
                font-family: monospace;
                margin-top: 20px;
            }
            .timestamp {
                color: #666;
                font-size: 14px;
                margin-top: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>测试报告 - ${testConfig[testType].desc}</h1>
            <p class="timestamp">运行时间: ${new Date(timestamp.replace(/-/g, ':')).toLocaleString()}</p>
            
            <div class="summary">
                <h2>测试结果: ${success ? '成功 ✅' : '失败 ❌'}</h2>
                <p>总计运行 ${totalTests} 个测试，用时 ${time} 秒</p>
            </div>
            
            <div class="stats">
                <div class="stat-box passed">
                    <div>通过测试</div>
                    <div class="big-number">${passedTests}</div>
                </div>
                <div class="stat-box failed">
                    <div>失败测试</div>
                    <div class="big-number">${failedTests}</div>
                </div>
                <div class="stat-box time">
                    <div>运行时间</div>
                    <div class="big-number">${time}s</div>
                </div>
            </div>
            
            <h2>测试输出</h2>
            <div class="output">${output.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        </div>
    </body>
    </html>
    `;
    
    fs.writeFileSync(reportFile, html);
    console.log(`HTML测试报告已生成: ${reportFile}`);
} 