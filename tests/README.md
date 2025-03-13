# AST钩子注入系统测试文档

本文档描述了AST钩子注入系统的测试框架、测试类型以及如何运行测试。

## 测试类型

系统测试分为以下几个类别：

### 1. 单元测试

- **目录**: `tests/babel-hook/`
- **描述**: 测试Babel钩子注入功能的核心组件
- **主要文件**: `inject-hook.test.js`

### 2. API服务器测试

- **目录**: `tests/api-server/`
- **描述**: 测试JavaScript代码钩子注入API的功能和响应
- **主要文件**: `api-server.test.js`

### 3. 端到端测试

- **目录**: `tests/end-to-end/`
- **描述**: 测试完整的系统流程，从API请求到钩子注入
- **主要文件**:
  - `complete-flow.test.js`: 测试完整流程
  - `stability.test.js`: 测试系统稳定性和资源使用
  - `performance.test.js`: 测试系统性能和响应时间
  - `compatibility.test.js`: 测试对不同JavaScript版本的兼容性
  - `security.test.js`: 测试系统安全性和防御能力

## 如何运行测试

我们提供了几种运行测试的方式：

### 使用测试运行脚本（推荐）

使用我们的测试运行脚本可以轻松运行任何类别的测试：

```bash
# 运行所有测试
node scripts/run-tests.js all

# 运行特定类别的测试
node scripts/run-tests.js api     # 仅测试API服务器
node scripts/run-tests.js babel   # 仅测试Babel钩子注入
node scripts/run-tests.js e2e     # 运行所有端到端测试
node scripts/run-tests.js perf    # 仅运行性能测试
node scripts/run-tests.js compat  # 仅运行兼容性测试
node scripts/run-tests.js security # 仅运行安全测试
node scripts/run-tests.js stability # 仅运行稳定性测试
```

测试结果将输出到控制台，并且会生成HTML测试报告和日志文件，存放在项目根目录的`test-reports/`文件夹中。

### 使用npm脚本

您也可以使用npm预设脚本运行测试：

```bash
# 运行所有测试
npm test

# 运行API服务器测试
npm run test:api

# 运行Babel钩子测试
npm run test:babel
```

### 直接使用Jest

如果您需要更灵活的控制，可以直接使用Jest命令：

```bash
# 运行所有测试
npx jest

# 运行特定文件
npx jest tests/api-server/api-server.test.js

# 运行匹配特定名称的测试
npx jest -t "特定测试名称"
```

## 测试目录结构

```
/tests
  /api-server
    - api-server.test.js       # API服务器测试
  /babel-hook
    - inject-hook.test.js      # Babel钩子注入测试
  /end-to-end
    - complete-flow.test.js    # 完整流程测试
    - stability.test.js        # 稳定性测试
    - compatibility.test.js    # 兼容性测试
    - performance.test.js      # 性能测试
    - security.test.js         # 安全测试
  - README.md                  # 本文档
/scripts
  - run-tests.js               # 测试运行脚本
```

## 测试报告

运行测试脚本后，系统会在`test-reports/`目录下生成两种报告：

1. **HTML测试报告**: 提供图形化的测试结果展示，包括测试通过率、运行时间等指标
2. **日志文件**: 包含详细的测试输出信息，用于调试分析

测试报告命名格式：`report-[测试类别]-[时间戳].html`
日志文件命名格式：`test-[测试类别]-[时间戳].log`

## 添加新测试

如果您需要添加新的测试，请按照以下指南：

1. 为相应的功能模块创建新的测试文件，遵循命名约定`[功能名称].test.js`
2. 使用Jest测试框架语法编写测试用例
3. 确保测试文件位于正确的目录中
4. 更新本文档以反映新增的测试

## 测试环境

测试使用以下环境变量来区分测试环境和生产环境：

- `NODE_ENV=test`: 表示运行测试环境，会调整系统参数（如请求限制）以适应测试需求

测试框架会自动设置这些环境变量，您通常不需要手动设置。 