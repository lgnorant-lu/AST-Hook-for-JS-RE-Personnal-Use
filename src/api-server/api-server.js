const express = require("express");
const bodyParser = require("body-parser");
const { injectHook } = require("../components/global-assign-hook-component/core/inject-hook");
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const net = require('net');
const cors = require('cors');
const acorn = require('acorn');

// 检查端口是否被占用
async function isPortInUse(port) {
    return new Promise((resolve) => {
        const server = net.createServer()
            .once('error', () => resolve(true))
            .once('listening', () => {
                server.close();
                resolve(false);
            })
            .listen(port);
    });
}

// 获取可用端口
async function getAvailablePort(startPort) {
    let port = startPort;
    while (await isPortInUse(port)) {
        port++;
    }
    return port;
}

const app = express();

// 基础安全配置
app.use(helmet());

// 日志记录
app.use(morgan('combined'));

// CORS配置
app.use(cors({
    origin: '*',
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200 // 设置OPTIONS请求的成功状态码为200
}));

// OPTIONS请求处理
app.options('/hook-js-code', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
    }).status(200).end();
});

// 请求体解析
app.use(express.text({ 
    limit: '5mb',
    type: 'text/plain'
}));

// 错误处理中间件 - 处理请求体过大的错误
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError || err.type === 'entity.too.large') {
        return res.status(413).json({
            error: 'Payload Too Large',
            message: 'Request body exceeds size limit'
        });
    }
    next(err);
});

// 方法不允许处理
app.all('/hook-js-code', (req, res, next) => {
    if (req.method !== 'POST' && req.method !== 'OPTIONS') {
        return res.status(405).json({
            error: 'Method Not Allowed',
            message: 'Only POST requests are allowed for this endpoint'
        });
    }
    next();
});

// 请求速率限制
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分钟
    max: process.env.NODE_ENV === 'test' ? 1000 : 100, // 测试环境设置更高的限制
    handler: (req, res) => {
        res.status(429).json({
            error: 'Too Many Requests',
            message: 'Rate limit exceeded'
        });
    },
    // 测试环境可以完全禁用限流
    skip: (req) => {
        // 在测试环境中完全跳过限流
        if (process.env.NODE_ENV === 'test') {
            return true;
        }
        
        // 生产环境中跳过特定请求
        return !req.body || !req.body.length || req.body.toString().trim() === '' || 
                req.method === 'OPTIONS' || // 跳过OPTIONS请求
                (req.body && !isValidJavaScript(req.body.toString())); // 跳过无效的JavaScript代码
    }
});

// 验证JavaScript代码
function isValidJavaScript(code) {
    try {
        acorn.parse(code, { ecmaVersion: 'latest' });
        return true;
    } catch (e) {
        return false;
    }
}

// 在所有路由之前应用限流
app.use('/hook-js-code', limiter);

// Hook注入端点
app.post("/hook-js-code", async (req, res) => {
    try {
        if (!req.body || !req.body.length) {
            return res.status(400).json({
                error: 'Invalid request',
                message: 'Request body is empty'
            });
        }

        const jsCode = decodeURIComponent(req.body.toString());
        if (!jsCode.trim()) {
            return res.status(400).json({
                error: 'Invalid request',
                message: 'JavaScript code is empty'
            });
        }
        
        // 验证JavaScript代码
        if (!isValidJavaScript(jsCode)) {
            return res.status(400).json({
                error: 'Failed to inject hook',
                message: 'Invalid JavaScript code'
            });
        }
        
        let newJsCode;
        try {
            newJsCode = await injectHook(jsCode);
        } catch (hookError) {
            console.error('Hook injection error:', hookError);
            return res.status(400).json({
                error: 'Failed to inject hook',
                message: hookError.message
            });
        }
        
        const contentType = req.headers["content-type"];
        const charsetMatch = /charset=([\w-]+)/.exec(contentType);
        const charset = charsetMatch ? charsetMatch[1] : 'utf-8';

        res.set({
            'Content-Type': `text/plain; charset=${charset}`,
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block'
        });

        res.send(encodeURIComponent(newJsCode));
    } catch (error) {
        console.error('Request processing error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An unexpected error occurred'
        });
    }
});

// 健康检查端点
app.get('/health', (req, res) => {
    res.set({
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
    });
    res.status(200).json({ status: 'ok' });
});

// 404处理
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource does not exist'
    });
});

// 全局错误处理
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: 'An unexpected error occurred'
    });
});

// 启动服务器
async function startServer() {
    try {
        const defaultPort = process.env.API_PORT || 10010;
        const port = await getAvailablePort(defaultPort);
        
        return new Promise((resolve) => {
            const server = app.listen(port, () => {
                if (process.env.NODE_ENV !== 'test') {
                    console.log(`API服务器运行在端口 ${port}`);
                    if (port !== defaultPort) {
                        console.log(`注意: 使用了备用端口，因为端口 ${defaultPort} 被占用`);
                    }
                }
                resolve(server);
            });

            // 优雅关闭
            process.on('SIGTERM', () => {
                console.log('收到SIGTERM信号，正在优雅关闭...');
                server.close(() => {
                    console.log('服务器已关闭');
                    process.exit(0);
                });
            });
        });
    } catch (error) {
        console.error('启动服务器时出错:', error);
        throw error;
    }
}

module.exports = {
    app,
    startServer
};

// 如果直接运行此文件，则启动服务器
if (require.main === module) {
    startServer().catch(error => {
        console.error('启动API服务器失败:', error);
        process.exit(1);
    });
}