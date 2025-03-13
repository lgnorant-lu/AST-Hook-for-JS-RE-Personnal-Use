!function (e, t) {
  e.WxLogin = cc11001100_hook("e.WxLogin", function (e) {
    var r = cc11001100_hook("r", "default", "var-init");
    !0 === e.self_redirect ? r = cc11001100_hook("r", "true", "assign") : !1 === e.self_redirect && (r = cc11001100_hook("r", "false", "assign"));
    var i = cc11001100_hook("i", t.createElement("iframe"), "var-init"),
      n = cc11001100_hook("n", "https://open.weixin.qq.com/connect/qrconnect?appid=" + e.appid + "&scope=" + e.scope + "&redirect_uri=" + e.redirect_uri + "&state=" + e.state + "&login_type=jssdk&self_redirect=" + r + "&styletype=" + (e.styletype || "") + "&sizetype=" + (e.sizetype || "") + "&bgcolor=" + (e.bgcolor || "") + "&rst=" + (e.rst || ""), "var-init");
    n += cc11001100_hook("n", e.style ? "&style=" + e.style : "", "assign"), n += cc11001100_hook("n", e.href ? "&href=" + e.href : "", "assign"), n += cc11001100_hook("n", "en" === e.lang ? "&lang=en" : "", "assign"), n += cc11001100_hook("n", 1 === e.stylelite ? "&stylelite=1" : "", "assign"), n += cc11001100_hook("n", 0 === e.fast_login ? "&fast_login=0" : "", "assign"), i.src = cc11001100_hook("i.src", n, "assign"), i.frameBorder = cc11001100_hook("i.frameBorder", "0", "assign"), i.allowTransparency = cc11001100_hook("i.allowTransparency", "true", "assign"), i.scrolling = cc11001100_hook("i.scrolling", "no", "assign"), i.width = cc11001100_hook("i.width", "300px", "assign"), i.height = cc11001100_hook("i.height", "400px", "assign");
    var l = cc11001100_hook("l", t.getElementById(e.id), "var-init");
    l.innerHTML = cc11001100_hook("l.innerHTML", "", "assign"), l.appendChild(i);
  }, "assign");
}(window, document);