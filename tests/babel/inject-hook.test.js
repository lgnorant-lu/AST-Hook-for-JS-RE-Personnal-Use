const { injectHook } = require('../../src/components/global-assign-hook-component/core/inject-hook');

describe('Babel Hook注入测试', () => {
    
    describe('基础JavaScript代码测试', () => {
        test('测试变量声明Hook注入', () => {
            const code = 'var a = 1;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试赋值表达式Hook注入', () => {
            const code = 'a = 2;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"assign"');
        });

        test('测试对象属性Hook注入', () => {
            const code = 'var obj = {a: 1};';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"object-key-init"');
        });
    });

    describe('ES6+特性测试', () => {
        test('测试let/const声明', () => {
            const code = 'let x = 1; const y = 2;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试箭头函数参数', () => {
            const code = 'const fn = (a, b) => a + b;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
        });

        test('测试解构赋值', () => {
            const code = 'const {a, b} = obj;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
        });

        test('测试模板字符串', () => {
            const code = 'const msg = `Hello ${name}`;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试类属性', () => {
            const code = `
                class Example {
                    static field = "test";
                    instance = 123;
                }
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"class-property"');
        });

        test('测试可选链操作符', () => {
            const code = 'const value = obj?.prop?.nested;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });
    });

    describe('错误处理测试', () => {
        test('测试无效代码处理', () => {
            const code = 'invalid javascript code @#$';
            const result = injectHook(code);
            expect(result).toBe(code); // 应该返回原始代码
        });

        test('测试空代码处理', () => {
            const code = '';
            const result = injectHook(code);
            expect(result).toBe(code);
        });

        test('测试注释处理', () => {
            const code = '// 这是注释\nvar a = 1;';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('这是注释');
        });

        test('测试语法错误处理', () => {
            const code = 'function() { return';  // 缺少闭合括号
            const result = injectHook(code);
            expect(result).toBe(code);
        });

        test('测试Unicode字符处理', () => {
            const code = 'var 变量 = "测试";';
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });
    });

    describe('复杂场景测试', () => {
        test('测试嵌套对象', () => {
            const code = `
                var obj = {
                    a: {
                        b: 1,
                        c: {
                            d: 2
                        }
                    }
                };
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"object-key-init"');
        });

        test('测试函数参数Hook', () => {
            const code = `
                function test(a, b) {
                    return a + b;
                }
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"function-parameter"');
        });

        test('测试混合代码', () => {
            const code = `
                var a = 1;
                let b = 2;
                const obj = {x: 1};
                function fn(p) {
                    return p + 1;
                }
                a = b + obj.x;
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
            expect(result).toContain('"assign"');
            expect(result).toContain('"object-key-init"');
            expect(result).toContain('"function-parameter"');
        });

        test('测试IIFE和闭包', () => {
            const code = `
                (function(global) {
                    var secret = "hidden";
                    global.value = secret;
                })(window);
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
            expect(result).toContain('"assign"');
        });

        test('测试异步函数和Promise', () => {
            const code = `
                async function fetchData() {
                    const response = await fetch(url);
                    const data = await response.json();
                    return data;
                }
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试复杂解构和默认值', () => {
            const code = `
                const {
                    a: { b: [x, y] = [1, 2] } = { b: [] },
                    c: d = 3
                } = obj;
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });
    });

    describe('特殊场景测试', () => {
        test('测试eval和动态代码', () => {
            const code = `
                var expr = "x + y";
                var result = eval(expr);
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试with语句处理', () => {
            const code = `
                with (Math) {
                    var x = PI * r * r;
                }
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试标签模板字符串', () => {
            const code = `
                function tag(strings, ...values) {
                    return strings.reduce((result, str, i) => 
                        result + str + (values[i] || ''), '');
                }
                const result = tag\`Hello \${name}\`;
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('测试Proxy和Reflect', () => {
            const code = `
                const handler = {
                    get: function(target, prop) {
                        return Reflect.get(target, prop);
                    }
                };
                const proxy = new Proxy({}, handler);
            `;
            const result = injectHook(code);
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });
    });
}); 