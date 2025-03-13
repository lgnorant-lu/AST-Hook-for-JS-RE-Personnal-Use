# AST-Hook-for-JS-RE 项目结构树

```
AST-Hook-for-JS-RE/
├── src/                                # 源代码目录
│   ├── api-server/                     # API服务器相关代码
│   │   └── api-server.js              # API服务器入口文件，监听10010端口
│   ├── components/                     # 核心组件目录
│   │   └── global-assign-hook-component/  # 全局变量Hook组件
│   │       ├── core/                  # 核心逻辑
│   │       └── plugins/               # 插件目录
│   │           ├── string-put-to-db-plugins.js    # 字符串存储到数据库插件
│   │           ├── search-strings-db-plugins.js   # 数据库搜索插件
│   │           └── eval-hook-plugins.js           # eval执行代码Hook插件
│   ├── proxy-server/                   # 代理服务器相关代码
│   │   ├── proxy-server.js            # 代理服务器入口文件，监听10086端口
│   │   └── js-file-cache/            # JavaScript文件缓存目录
│   └── runtime-for-result/            # 运行时工具目录
│       └── remove-hook-function.js    # 移除Hook函数的工具
│
├── node_modules/                       # 项目依赖目录
├── images/                            # 文档图片资源目录
├── js-file-cache/                     # JavaScript文件全局缓存目录
├── package.json                       # 项目配置和依赖声明文件
├── package-lock.json                  # 依赖版本锁定文件
├── update_log.md                      # 项目更新日志
├── README.md                          # 项目说明文档
└── rootCA.crt                         # AnyProxy根证书文件

```

## 文件说明

### 核心文件
- `src/api-server/api-server.js`: API服务器入口，提供变量搜索等API接口
- `src/proxy-server/proxy-server.js`: 代理服务器入口，负责JavaScript代码的AST注入
- `src/components/global-assign-hook-component/plugins/*`: 核心功能插件集合

### 配置文件
- `package.json`: 项目依赖配置
- `rootCA.crt`: AnyProxy HTTPS抓包所需的根证书
- `update_log.md`: 项目更新日志，记录所有改动

### 缓存目录
- `js-file-cache/`: 全局JavaScript文件缓存
- `src/proxy-server/js-file-cache/`: 代理服务器专用缓存

### 文档
- `README.md`: 项目主文档
- `images/`: 文档相关图片资源

## 主要依赖版本
- @babel/core: ^7.23.9
- @babel/generator: ^7.23.6
- @babel/types: ^7.23.9
- express: 4.18.3
- anyproxy: 4.0.11
- core-js: 3.36.0

## 模块依赖关系
1. proxy-server依赖components中的Hook组件进行AST注入
2. api-server依赖plugins提供的功能实现API接口
3. 所有插件都依赖core中的核心逻辑