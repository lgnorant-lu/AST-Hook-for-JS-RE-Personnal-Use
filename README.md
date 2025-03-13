# AST Hook for JavaScript Reverse Engineering

一个用于JavaScript逆向工程的AST Hook工具。

> 本项目基于 [JSREI/ast-hook-for-js-RE](https://github.com/JSREI/ast-hook-for-js-RE) 进行胡改。

## 功能特点

- 基于AST的JavaScript代码分析和修改
- 支持代理服务器拦截和修改请求
- 完整的缓存机制
- 性能监控和优化
- 错误处理和日志记录

## 安装

```bash
npm install
```

## 使用方法

1. 启动代理服务器:
```bash
npm start
```

2. 配置浏览器代理为:
- 地址: 127.0.0.1
- 端口: 8080

3. 安装并信任根证书(rootCA.crt)

## 开发

```bash
# 运行测试
npm test

# 代码检查
npm run lint
```

## 版本历史

- v1.0.1: 稳定版本,包含完整的缓存机制和性能优化

## 许可证

WTFPL

## 致谢

- 原作者: [CC11001100](https://github.com/CC11001100)
- 原始项目: [JSREI/ast-hook-for-js-RE](https://github.com/JSREI/ast-hook-for-js-RE)
