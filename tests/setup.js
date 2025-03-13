// 全局测试设置
const fs = require('fs');
const path = require('path');

// 设置测试环境
process.env.NODE_ENV = 'test';

// 创建临时测试目录
const TEST_CACHE_DIR = path.join(__dirname, 'cache/test-cache');
const TEST_CACHE_META = path.join(TEST_CACHE_DIR, 'meta.jsonl');

// 全局变量
global.__TEST_CACHE_DIR__ = TEST_CACHE_DIR;

// 确保目录存在
async function ensureDirectoryExists(directory) {
    try {
        if (!fs.existsSync(directory)) {
            await fs.promises.mkdir(directory, { recursive: true, mode: 0o777 });
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return true;
    } catch (e) {
        console.error('创建目录失败:', e);
        throw e;
    }
}

// 清理目录
async function cleanDirectory(directory) {
    try {
        if (fs.existsSync(directory)) {
            await fs.promises.rm(directory, { recursive: true, force: true });
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    } catch (e) {
        console.error('清理目录失败:', e);
        throw e;
    }
}

// 测试完成后清理
afterAll(async () => {
    try {
        await cleanDirectory(TEST_CACHE_DIR);
    } catch (e) {
        console.error('清理测试目录失败:', e);
    }
});

// 每个测试前清理和初始化
beforeEach(async () => {
    try {
        // 重置环境变量
        process.env.NODE_ENV = 'test';
        global.__TEST_CACHE_DIR__ = TEST_CACHE_DIR;

        // 清理旧的测试目录
        await cleanDirectory(TEST_CACHE_DIR);
        await new Promise(resolve => setTimeout(resolve, 100));

        // 创建新的测试目录
        await ensureDirectoryExists(TEST_CACHE_DIR);
        await new Promise(resolve => setTimeout(resolve, 100));

        // 创建新的元数据文件
        await fs.promises.writeFile(TEST_CACHE_META, '', 'utf-8');
        await new Promise(resolve => setTimeout(resolve, 100));

        // 确保目录权限正确
        try {
            fs.chmodSync(TEST_CACHE_DIR, 0o777);
            fs.chmodSync(TEST_CACHE_META, 0o666);
        } catch (e) {
            console.warn('设置文件权限失败:', e);
        }

        // 清空require缓存
        Object.keys(require.cache).forEach(key => {
            if (key.includes('global-assign-hook-component')) {
                delete require.cache[key];
            }
        });

        // 重新加载主模块
        const mainModule = require('../src/components/global-assign-hook-component/core/global-assign-hook-component-main');
        
        // 更新缓存目录
        mainModule.updateCacheDirectory(TEST_CACHE_DIR);
        
        // 重置缓存状态
        mainModule.injectSuccessJsFileCache.clear();
        mainModule.disableCache = false;

        // 初始化缓存
        await mainModule.initCache();
        await new Promise(resolve => setTimeout(resolve, 500));

        // 验证目录和文件存在
        if (!fs.existsSync(TEST_CACHE_DIR)) {
            throw new Error(`测试缓存目录不存在: ${TEST_CACHE_DIR}`);
        }
        if (!fs.existsSync(TEST_CACHE_META)) {
            throw new Error(`测试元数据文件不存在: ${TEST_CACHE_META}`);
        }

        // 等待文件系统操作完成
        await new Promise(resolve => setTimeout(resolve, 500));
    } catch (e) {
        console.error('初始化测试环境失败:', e);
        throw e;
    }
});

// 导出测试配置
module.exports = {
    TEST_CACHE_DIR,
    TEST_CACHE_META,
    ensureDirectoryExists,
    cleanDirectory
};