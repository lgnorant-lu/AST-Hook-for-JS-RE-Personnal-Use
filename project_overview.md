# AST-Hook-for-JS-RE 项目概述

## 项目目标
AST-Hook-for-JS-RE 是一个浏览器端的内存漫游解决方案，主要用于JavaScript逆向工程分析。其核心目标是：

1. 提供变量级别的抓包监控能力
2. 快速定位加密逻辑代码位置
3. 提供可扩展的插件系统
4. 简化JavaScript逆向分析流程

## 技术栈
- **Node.js**: 要求 v14.0.0+
- **AnyProxy**: 用于HTTPS抓包与请求处理
- **AST**: 用于JavaScript代码分析与注入
- **Express**: API服务器框架
- **Chrome DevTools Protocol**: 用于浏览器调试通信

## 核心模块

### 1. 代理服务器 (Proxy Server)
- 监听端口: 10086
- 主要职责: 
  - 拦截JavaScript响应
  - 注入Hook逻辑
  - 管理文件缓存

### 2. API服务器 (API Server)
- 监听端口: 10010
- 主要职责:
  - 提供变量搜索接口
  - 管理变量数据库
  - 处理插件请求

### 3. Hook组件系统
- 插件化架构
- 支持自定义Hook逻辑
- 内置三个核心插件:
  - 字符串数据库存储
  - 变量搜索
  - eval执行代码Hook

## 更新日志

### v0.2.0 (当前版本)
#### 新增功能
- 变量级抓包监控
- 基于AST的代码注入
- 插件系统框架
- 文件缓存机制

#### 已知问题
- script hook plugins 需要完善
- eval hook plugins 需要优化
- cache逻辑需要优化

### 计划功能 (v0.3.0)
1. script hook plugins 增强
   - 支持动态插入的script标签监控
   - 完善innerHTML注入场景

2. eval hook plugins 增强
   - 支持直接定位到jsvm
   - 优化eval执行环境追踪

3. 缓存优化
   - 改进缓存策略
   - 提高性能

4. URL加密参数分析
   - 集成URL参数分析能力
   - 提供加密参数定位辅助

## 依赖关系图
```
Proxy Server (10086)
    └── Hook Component
        ├── Core Logic
        └── Plugins System
            ├── String DB Plugin
            ├── Search Plugin
            └── Eval Hook Plugin
                    ↓
API Server (10010)
    └── Variable Database
        └── Search API
```

## 贡献指南
1. 插件开发
   - 在 `src/components/global-assign-hook-component/plugins` 创建新插件
   - 在 `plugins-manager.js` 中注册插件
   - 插件代码运行于浏览器环境

2. 调试提示
   - 插件代码缓存时间为3秒
   - 修改插件后无需重启代理服务器
   - 使用 `hookCallback` 注册变量捕获回调 