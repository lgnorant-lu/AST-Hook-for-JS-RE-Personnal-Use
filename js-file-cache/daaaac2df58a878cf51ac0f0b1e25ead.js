(function () {
  function e(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    typeof Log != "undefined" && Log.Log && Log.Log(n, t, i, !0);
  }
  function t(t, h) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var l;
    t != h && (_w.DMMode = cc11001100_hook("_w.DMMode", h, "assign"));
    l = cc11001100_hook("l", r(n, u), "assign");
    l != h && i(n, u, h, !0, "/", null);
    e("Info", o, h);
    var c = cc11001100_hook("c", new URLSearchParams(_w.location.search), "var-init"),
      y = cc11001100_hook("y", c && c.get("features") && c.get("features").split(",").indexOf("webthemedark") !== -1, "var-init"),
      a = cc11001100_hook("a", c.get("webthemedark") === "1" || y, "var-init");
    a && i(n, f, "1", !0, "/", null);
    var v = cc11001100_hook("v", r(n, f), "var-init"),
      p = cc11001100_hook("p", h == "1" && v == "2", "var-init"),
      w = cc11001100_hook("w", v == "1", "var-init"),
      b = cc11001100_hook("b", a || p || w ? "1" : "0", "var-init");
    e("Info", s, b);
  }
  function h(n, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var u = cc11001100_hook("u", "(prefers-color-scheme:" + n + ")", "var-init");
    return _w.matchMedia(u).matches ? (t(i, r), !0) : !1;
  }
  function c() {
    var n = cc11001100_hook("n", _w.DMMode, "var-init");
    _w.matchMedia ? h("dark", n, "1") || t(n, "0") : t(n, "0");
  }
  var i = cc11001100_hook("i", sj_cook.set, "var-init"),
    r = cc11001100_hook("r", sj_cook.get, "var-init"),
    n = cc11001100_hook("n", "SRCHHPGUSR", "var-init"),
    u = cc11001100_hook("u", "DM", "var-init"),
    f = cc11001100_hook("f", "WEBTHEME", "var-init"),
    o = cc11001100_hook("o", "DM", "var-init"),
    s = cc11001100_hook("s", "DARKMODE", "var-init");
  c();
})();