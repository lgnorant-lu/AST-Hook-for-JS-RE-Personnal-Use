const { process } = require('../../src/components/global-assign-hook-component/core/global-assign-hook-component-main');

describe('HTML处理测试', () => {
    // 模拟请求和响应对象
    function createMockResponse(body, contentType = 'text/html; charset=utf-8') {
        return {
            response: {
                body: Buffer.from(body),
                header: {
                    'content-type': contentType
                }
            }
        };
    }

    function createMockRequest(url = 'http://example.com') {
        return {
            url,
            method: 'GET',
            requestOptions: {
                hostname: 'example.com'
            }
        };
    }

    describe('内容类型检测', () => {
        test('正确识别HTML内容类型', () => {
            const response = createMockResponse('<html><body></body></html>');
            process(createMockRequest(), response);
            expect(response.response.header['content-type']).toContain('text/html');
            expect(response.response.header['content-type'].toLowerCase()).toContain('charset=utf-8');
        });

        test('忽略非HTML内容', () => {
            const response = createMockResponse('{"key": "value"}', 'application/json');
            const originalBody = response.response.body;
            process(createMockRequest(), response);
            expect(response.response.body).toEqual(originalBody);
        });

        test('处理不同字符集的HTML', () => {
            const response = createMockResponse('<html><body></body></html>', 'text/html; charset=gbk');
            process(createMockRequest(), response);
            expect(response.response.header['content-type']).toContain('charset=gbk');
        });
    });

    describe('Script标签处理', () => {
        test('处理单个内联script标签', () => {
            const html = `
                <html>
                <body>
                    <script>
                        var x = 1;
                    </script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('"var-init"');
        });

        test('处理多个script标签', () => {
            const html = `
                <html>
                <body>
                    <script>var a = 1;</script>
                    <script>var b = 2;</script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            const matches = result.match(/cc11001100_hook/g) || [];
            expect(matches.length).toBeGreaterThanOrEqual(2);
        });

        test('跳过带src属性的script标签', () => {
            const html = `
                <html>
                <body>
                    <script src="external.js">
                        // 这些内容应该被忽略
                        var x = 1;
                    </script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).not.toContain('cc11001100_hook');
        });

        test('保留script标签属性', () => {
            const html = `
                <html>
                <body>
                    <script type="text/javascript" id="test-script">
                        var x = 1;
                    </script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('type="text/javascript"');
            expect(result).toContain('id="test-script"');
        });
    });

    describe('复杂场景测试', () => {
        test('处理混合内容', () => {
            const html = `
                <html>
                <body>
                    <div>Some text</div>
                    <script>var x = 1;</script>
                    <div>More text</div>
                    <script src="external.js"></script>
                    <script>var y = 2;</script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('Some text');
            expect(result).toContain('More text');
            expect(result).toContain('cc11001100_hook');
            expect(result).toContain('src="external.js"');
        });

        test('处理嵌套结构', () => {
            const html = `
                <html>
                <body>
                    <div>
                        <script>var x = 1;</script>
                        <div>
                            <script>var y = 2;</script>
                        </div>
                    </div>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            const matches = result.match(/cc11001100_hook/g) || [];
            expect(matches.length).toBeGreaterThanOrEqual(2);
        });

        test('处理HTML实体', () => {
            const html = `
                <html>
                <body>
                    <script>
                        var message = "Hello &quot;World&quot;";
                    </script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('&quot;');
            expect(result).toContain('cc11001100_hook');
        });

        test('处理注释', () => {
            const html = `
                <html>
                <body>
                    <!-- HTML Comment -->
                    <script>
                        // JS Comment
                        var x = 1;
                        /* Multi-line
                           Comment */
                        var y = 2;
                    </script>
                </body>
                </html>
            `;
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('<!-- HTML Comment -->');
            expect(result).toContain('// JS Comment');
            expect(result).toContain('Multi-line');
            expect(result).toContain('cc11001100_hook');
        });
    });

    describe('错误处理', () => {
        test('处理无效HTML', () => {
            const html = '<html><body><script>var x = 1;</script></div></html>';
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('cc11001100_hook');
        });

        test('处理空的script标签', () => {
            const html = '<html><body><script></script></body></html>';
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('<script></script>');
        });

        test('处理畸形script标签', () => {
            const html = '<html><body><script>var x = 1;<script>var y = 2;</script></body></html>';
            const response = createMockResponse(html);
            process(createMockRequest(), response);
            const result = response.response.body.toString();
            expect(result).toContain('cc11001100_hook');
        });
    });
}); 