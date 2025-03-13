const babel = require("@babel/core");
const types = require("@babel/types");
const generate = require("@babel/generator").default;

const hookFunctionName = "cc11001100_hook";

function injectHook(jsCode) {
    if (!jsCode || typeof jsCode !== 'string') {
        return jsCode;
    }

    try {
        const ast = babel.parseSync(jsCode, {
            sourceType: "unambiguous",  // 自动检测模块类型
            presets: [
                ["@babel/preset-env", {
                    targets: {
                        node: "current"
                    }
                }]
            ],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-optional-chaining",
                "@babel/plugin-proposal-nullish-coalescing-operator",
                "@babel/plugin-syntax-jsx"
            ],
            parserOpts: {
                tokens: true,           // 保留tokens信息
                errorRecovery: true,    // 出错时尝试恢复
                allowReturnOutsideFunction: true,  // 允许在函数外使用return
                allowAwaitOutsideFunction: true    // 允许在函数外使用await
            }
        });
        
        if (!ast) {
            console.error("AST解析失败，返回原始代码");
            return jsCode;
        }

        babel.traverse(ast, {
            // 变量声明
            VariableDeclaration(path) {
                const node = path.node;
                if (!node.declarations?.length) {
                    return;
                }
                for (let variableDeclarator of node.declarations) {
                    if (!variableDeclarator.init) {
                        continue;
                    }
                    if (types.isFunctionExpression(variableDeclarator.init)) {
                        continue;
                    }

                    let varName = "";
                    if (types.isIdentifier(variableDeclarator.id) || types.isMemberExpression(variableDeclarator.id)) {
                        varName = generate(variableDeclarator.id).code;
                    }

                    try {
                        const hookFunctionArguments = [
                            types.stringLiteral(varName),
                            variableDeclarator.init,
                            types.stringLiteral("var-init")
                        ];
                        variableDeclarator.init = types.callExpression(types.identifier(hookFunctionName), hookFunctionArguments)
                    } catch (e) {
                        console.error("变量声明Hook注入失败:", e);
                    }
                }
            },

            AssignmentExpression(path) {
                const node = path.node;
                if (types.isFunctionExpression(node)) {
                    return;
                }

                let varName = "";
                if (types.isIdentifier(node.left) || types.isMemberExpression(node.left)) {
                    varName = generate(node.left).code;
                }

                try {
                    const hookFunctionArguments = [
                        types.stringLiteral(varName),
                        node.right,
                        types.stringLiteral("assign")
                    ];
                    node.right = types.callExpression(types.identifier(hookFunctionName), hookFunctionArguments)
                } catch (e) {
                    console.error("赋值表达式Hook注入失败:", e);
                }
            },

            // 对象表达式
            ObjectExpression(path) {
                const node = path.node;
                if (!node.properties?.length) {
                    return;
                }
                for (let objectProperty of node.properties) {
                    const propertyValue = objectProperty.value;
                    if (!propertyValue || types.isFunctionExpression(propertyValue) || types.isObjectExpression(propertyValue)) {
                        continue;
                    }

                    let objectKey = objectProperty.key;
                    if (types.isIdentifier(objectKey)) {
                        objectKey = types.stringLiteral(objectKey.name);
                    }

                    try {
                        const hookFunctionArguments = [
                            objectKey,
                            propertyValue,
                            types.stringLiteral("object-key-init")
                        ];
                        objectProperty.value = types.callExpression(types.identifier(hookFunctionName), hookFunctionArguments);
                    } catch (e) {
                        console.error("对象属性Hook注入失败:", e);
                    }
                }
            },

            // 函数的形参
            FunctionDeclaration(path) {
                const node = path.node;
                if (!node.params?.length) {
                    return;
                }
                if (types.isBlockStatement(node.body)) {
                    // 函数体是个代码块的，则在代码块最前面插入Hook，检查参数的值
                    for (let i = node.params.length - 1; i >= 0; i--) {
                        try {
                            const paramName = node.params[i];
                            const hookFunctionArguments = [
                                types.stringLiteral(generate(paramName).code),
                                paramName,
                                types.stringLiteral("function-parameter")
                            ];
                            const hookFunction = types.callExpression(types.identifier(hookFunctionName), hookFunctionArguments);
                            node.body.body.unshift(types.expressionStatement(hookFunction));
                        } catch (e) {
                            console.error("函数参数Hook注入失败:", e);
                        }
                    }
                }
            },

            // 类属性
            ClassProperty(path) {
                const node = path.node;
                if (!node.value || types.isFunctionExpression(node.value)) {
                    return;
                }

                try {
                    const propertyName = node.key.name || node.key.value;
                    const hookFunctionArguments = [
                        types.stringLiteral(propertyName),
                        node.value,
                        types.stringLiteral("class-property")
                    ];
                    node.value = types.callExpression(types.identifier(hookFunctionName), hookFunctionArguments);
                } catch (e) {
                    console.error("类属性Hook注入失败:", e);
                }
            }
        });

        return generate(ast, {
            retainLines: true,
            compact: false,
            jsescOption: {
                minimal: true
            }
        }).code;
    } catch (e) {
        console.error("AST解析或转换失败:", e);
        return jsCode; // 出错时返回原始代码
    }
}

module.exports.injectHook = injectHook;
