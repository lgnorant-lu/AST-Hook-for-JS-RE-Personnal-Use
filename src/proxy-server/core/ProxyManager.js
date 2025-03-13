const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');
const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

class ProxyManager extends EventEmitter {
    constructor(options = {}) {
        super();
        this.options = {
            port: options.port || 10086,
            webPort: options.webPort || 8002,
            cacheDir: options.cacheDir || path.join(__dirname, '../../js-file-cache'),
            certPath: options.certPath || path.join(__dirname, '../../../rootCA.crt'),
            ...options
        };
        
        this.proxy = httpProxy.createProxyServer({
            secure: false,
            changeOrigin: true
        });
        
        this.setupEventHandlers();
        this.setupCacheDir();
    }
    
    setupEventHandlers() {
        this.proxy.on('error', (err, req, res) => {
            console.error('Proxy error:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Proxy error');
        });
        
        this.proxy.on('proxyRes', (proxyRes, req, res) => {
            if (this.isJavaScript(proxyRes)) {
                this.handleJavaScript(proxyRes, req, res);
            }
        });
    }
    
    setupCacheDir() {
        if (!fs.existsSync(this.options.cacheDir)) {
            fs.mkdirSync(this.options.cacheDir, { recursive: true });
        }
    }
    
    isJavaScript(proxyRes) {
        const contentType = proxyRes.headers['content-type'] || '';
        return contentType.includes('javascript') || 
               contentType.includes('ecmascript');
    }
    
    async handleJavaScript(proxyRes, req, res) {
        // TODO: 实现JavaScript代码处理逻辑
        this.emit('javascript', { proxyRes, req, res });
    }
    
    start() {
        const server = http.createServer((req, res) => {
            this.proxy.web(req, res, {
                target: req.url,
                ssl: this.options.ssl
            });
        });
        
        server.listen(this.options.port, () => {
            console.log(`Proxy server running on port ${this.options.port}`);
            this.emit('ready');
        });
        
        return server;
    }
    
    stop() {
        return new Promise((resolve) => {
            this.proxy.close(() => {
                console.log('Proxy server stopped');
                resolve();
            });
        });
    }
}

module.exports = ProxyManager; 