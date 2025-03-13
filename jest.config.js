module.exports = {
    // 测试环境
    testEnvironment: 'node',
    
    // 测试文件匹配模式
    testMatch: [
        '**/tests/**/*.test.js',
        '**/tests/**/*.spec.js'
    ],
    
    // 覆盖率收集
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/**/js-file-cache/**',
        '!**/node_modules/**'
    ],
    
    // 覆盖率报告目录
    coverageDirectory: 'coverage',
    
    // 在每次测试前执行的设置
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    
    // 忽略的文件夹
    testPathIgnorePatterns: [
        '/node_modules/',
        '/js-file-cache/'
    ],
    
    // 详细的测试报告
    verbose: true,

    // 环境变量
    globals: {
        'NODE_ENV': 'test'
    },

    // 测试超时时间
    testTimeout: 10000
}; 