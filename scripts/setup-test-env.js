#!/usr/bin/env node

/**
 * 测试环境设置脚本
 * 该脚本确保测试所需的所有目录结构都存在
 */

const fs = require('fs');
const path = require('path');

console.log('开始设置测试环境...');

// 项目根目录
const rootDir = path.resolve(__dirname, '..');

// 需要确保存在的目录列表
const requiredDirs = [
    // 测试目录结构
    path.join(rootDir, 'tests'),
    path.join(rootDir, 'tests/api-server'),
    path.join(rootDir, 'tests/babel-hook'),
    path.join(rootDir, 'tests/end-to-end'),
    
    // 测试报告和日志目录
    path.join(rootDir, 'test-reports'),
    
    // 缓存目录
    path.join(rootDir, 'cache')
];

// 创建所有必需的目录
requiredDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        console.log(`创建目录: ${path.relative(rootDir, dir)}`);
        fs.mkdirSync(dir, { recursive: true });
    } else {
        console.log(`目录已存在: ${path.relative(rootDir, dir)}`);
    }
});

// 创建.gitkeep文件以确保空目录被git追踪
requiredDirs.forEach(dir => {
    const gitkeepFile = path.join(dir, '.gitkeep');
    if (!fs.existsSync(gitkeepFile) && fs.readdirSync(dir).length === 0) {
        console.log(`创建.gitkeep文件: ${path.relative(rootDir, gitkeepFile)}`);
        fs.writeFileSync(gitkeepFile, '# 此文件确保目录被git追踪\n');
    }
});

// 检查缓存目录权限
try {
    const testFile = path.join(rootDir, 'cache', 'test-write.tmp');
    fs.writeFileSync(testFile, 'test');
    fs.unlinkSync(testFile);
    console.log('缓存目录权限正常');
} catch (error) {
    console.error('警告: 无法写入缓存目录，这可能会导致测试失败');
    console.error('错误详情:', error.message);
}

// 检查package.json中的测试脚本
const packageJsonPath = path.join(rootDir, 'package.json');
if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const requiredScripts = [
        'test',
        'test:api',
        'test:babel',
        'test:e2e',
        'test:perf',
        'test:compat',
        'test:security',
        'test:stability'
    ];
    
    const missingScripts = requiredScripts.filter(script => !packageJson.scripts || !packageJson.scripts[script]);
    
    if (missingScripts.length > 0) {
        console.warn('警告: package.json缺少以下测试脚本:');
        missingScripts.forEach(script => console.warn(`  - ${script}`));
        console.warn('建议添加这些脚本以简化测试运行');
    } else {
        console.log('package.json中所有必需的测试脚本已配置');
    }
}

console.log('测试环境设置完成！');
console.log('');
console.log('可以使用以下命令运行测试:');
console.log('  npm test              - 运行所有测试');
console.log('  npm run test:api      - 运行API服务器测试');
console.log('  npm run test:babel    - 运行Babel钩子注入测试');
console.log('  npm run test:e2e      - 运行端到端测试');
console.log('  npm run test:perf     - 运行性能测试');
console.log('  npm run test:compat   - 运行兼容性测试');
console.log('  npm run test:security - 运行安全测试');
console.log('  npm run test:stability - 运行稳定性测试'); 