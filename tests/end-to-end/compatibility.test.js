const request = require('supertest');
const fs = require('fs');
const path = require('path');

describe('系统兼容性测试', () => {
    let apiServer;
    let apiApp;
    
    // 测试前的准备工作
    beforeAll(async () => {
        // 设置测试环境
        process.env.NODE_ENV = 'test';
        
        // 启动API服务器
        const apiServerModule = require('../../src/api-server/api-server');
        apiApp = apiServerModule.app;
        apiServer = await apiServerModule.startServer();
        
        console.log('兼容性测试环境已准备就绪');
    });
    
    // 测试完成后的清理工作
    afterAll(async () => {
        if (apiServer) {
            await new Promise((resolve) => {
                apiServer.close(() => {
                    console.log('API服务器已关闭');
                    resolve();
                });
            });
        }
        
        console.log('兼容性测试环境清理完成');
    });
    
    test('ES5 JavaScript兼容性测试', async () => {
        // ES5标准JavaScript代码
        const jsCode = `
            var es5Test = "ES5兼容性测试";
            
            function testFunc() {
                return es5Test;
            }
            
            var obj = {
                prop: "test",
                method: function() {
                    return this.prop;
                }
            };
        `;
        
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        
        const injectedCode = decodeURIComponent(response.text);
        expect(injectedCode).toContain('cc11001100_hook');
        expect(injectedCode).toContain('es5Test');
        expect(injectedCode).toContain('testFunc');
        
        console.log('ES5 JavaScript兼容性测试完成');
    });
    
    test('ES6+ JavaScript兼容性测试', async () => {
        // ES6+特性的JavaScript代码
        const jsCode = `
            // 箭头函数
            const arrowFunc = () => "箭头函数测试";
            
            // 模板字符串
            const template = \`模板字符串测试: \${arrowFunc()}\`;
            
            // 解构赋值
            const { a, b } = { a: 1, b: 2 };
            
            // 默认参数
            function defaultParams(x = 1, y = 2) {
                return x + y;
            }
            
            // 类
            class TestClass {
                constructor(name) {
                    this.name = name;
                }
                
                sayHello() {
                    return \`Hello, \${this.name}\`;
                }
            }
            
            // Promise
            const promiseTest = new Promise(resolve => {
                resolve("Promise测试");
            });
            
            // 扩展运算符
            const arr1 = [1, 2, 3];
            const arr2 = [...arr1, 4, 5];
            
            // 可选链
            const obj = { a: { b: { c: 42 } } };
            const value = obj?.a?.b?.c;
            
            // 空值合并
            const nullish = null ?? "默认值";
        `;
        
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jsCode)
            .expect(200);
        
        const injectedCode = decodeURIComponent(response.text);
        expect(injectedCode).toContain('cc11001100_hook');
        expect(injectedCode).toContain('arrowFunc');
        expect(injectedCode).toContain('template');
        expect(injectedCode).toContain('TestClass');
        expect(injectedCode).toContain('Promise');
        
        console.log('ES6+ JavaScript兼容性测试完成');
    });
    
    test('常见JavaScript库和框架兼容性测试', async () => {
        // 模拟React组件的JavaScript代码
        const reactCode = `
            // 模拟React组件
            const MyComponent = () => {
                const [state, setState] = React.useState(0);
                
                React.useEffect(() => {
                    console.log('Component mounted');
                    return () => console.log('Component unmounted');
                }, []);
                
                return {
                    type: 'div',
                    props: {
                        children: [
                            {
                                type: 'h1',
                                props: { children: 'Hello, React!' }
                            },
                            {
                                type: 'button',
                                props: {
                                    onClick: () => setState(s => s + 1),
                                    children: 'Click me'
                                }
                            }
                        ]
                    }
                };
            };
        `;
        
        const response1 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(reactCode)
            .expect(200);
        
        const injectedReactCode = decodeURIComponent(response1.text);
        expect(injectedReactCode).toContain('cc11001100_hook');
        expect(injectedReactCode).toContain('MyComponent');
        expect(injectedReactCode).toContain('useState');
        
        // 模拟jQuery代码
        const jqueryCode = `
            // 模拟jQuery代码
            $(document).ready(function() {
                $('.button').click(function() {
                    $('#element').addClass('active');
                    
                    $.ajax({
                        url: '/api/data',
                        method: 'GET',
                        success: function(data) {
                            console.log(data);
                        },
                        error: function(error) {
                            console.error(error);
                        }
                    });
                });
            });
        `;
        
        const response2 = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(jqueryCode)
            .expect(200);
        
        const injectedJqueryCode = decodeURIComponent(response2.text);
        expect(injectedJqueryCode).toContain('cc11001100_hook');
        expect(injectedJqueryCode).toContain('document');
        expect(injectedJqueryCode).toContain('ajax');
        
        console.log('常见JavaScript库和框架兼容性测试完成');
    });
    
    test('特殊字符和国际化兼容性测试', async () => {
        // 包含特殊字符和不同语言的JavaScript代码
        const specialCharsCode = `
            // 中文变量和字符串
            var 中文变量 = "这是中文字符串测试";
            
            // 日文
            var 日本語テスト = "これは日本語のテストです";
            
            // 韩文
            var 한국어테스트 = "이것은 한국어 테스트입니다";
            
            // 俄文
            var русскийТест = "Это тест на русском языке";
            
            // 阿拉伯文
            var اختبارعربي = "هذا اختبار باللغة العربية";
            
            // 特殊字符
            var specialChars = "!@#$%^&*()_+{}|:<>?~\`-=[]\\;',./";
            
            // Emoji
            var emojiTest = "😀 🎉 🚀 👍 🔥";
            
            function testSpecialChars() {
                return 中文变量 + 日本語テスト + 한국어테스트 + русскийТест + اختبارعربي + specialChars + emojiTest;
            }
        `;
        
        const response = await request(apiApp)
            .post('/hook-js-code')
            .set('Content-Type', 'text/plain')
            .send(specialCharsCode)
            .expect(200);
        
        const injectedCode = decodeURIComponent(response.text);
        expect(injectedCode).toContain('cc11001100_hook');
        expect(injectedCode).toContain('中文变量');
        expect(injectedCode).toContain('日本語テスト');
        expect(injectedCode).toContain('한국어테스트');
        expect(injectedCode).toContain('русскийТест');
        expect(injectedCode).toContain('اختبارعربي');
        expect(injectedCode).toContain('specialChars');
        expect(injectedCode).toContain('emojiTest');
        
        console.log('特殊字符和国际化兼容性测试完成');
    });
}); 