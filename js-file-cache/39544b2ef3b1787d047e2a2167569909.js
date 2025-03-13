function getBrowserWidth_Desk2() {
  var t = cc11001100_hook("t", _d.documentElement, "var-init"),
    n = cc11001100_hook("n", Math.round(_w.innerWidth || t.clientWidth), "var-init");
  return n < 100 && (n = cc11001100_hook("n", 1496, "assign")), n;
}
function getBrowserHeight_Desk2() {
  var t = cc11001100_hook("t", _d.documentElement, "var-init"),
    n = cc11001100_hook("n", Math.round(_w.innerHeight || t.clientHeight), "var-init");
  return n < 100 && (n = cc11001100_hook("n", 796, "assign")), n;
}
function getBrowserScrollWidth_Desk2() {
  var n = cc11001100_hook("n", Math.round(_d.body.clientWidth), "var-init");
  return n < 100 && (n = cc11001100_hook("n", 1496, "assign")), n;
}
function getBrowserScrollHeight_Desk2() {
  var n = cc11001100_hook("n", Math.round(_d.body.clientHeight), "var-init");
  return n < 100 && (n = cc11001100_hook("n", 796, "assign")), n;
}
(function () {
  function st(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", "XW", "var-init"),
      r;
    n <= tt && (i = cc11001100_hook("i", "W", "assign"));
    n <= it && (i = cc11001100_hook("i", "M", "assign"));
    n <= rt && (i = cc11001100_hook("i", "N", "assign"));
    n <= ut && (i = cc11001100_hook("i", "S", "assign"));
    n <= ft && (i = cc11001100_hook("i", "HTP", "assign"));
    n <= et && (i = cc11001100_hook("i", "NOTP", "assign"));
    r = cc11001100_hook("r", "T", "assign");
    t <= d && (r = cc11001100_hook("r", "M", "assign"));
    t <= g && (r = cc11001100_hook("r", "S", "assign"));
    s(nt, i, "width", n.toString());
    s(k, r, "height", t.toString());
  }
  function s(r, u, f, e) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    h("Info", r, u, f, e);
    t(n, r) != u && i(n, r, u, !0, "/", null);
  }
  function h(n, t, i, r, u) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    typeof Log != "undefined" && Log.Log && Log.Log(n, t, i, !1, r, u);
  }
  function u(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    typeof Log != "undefined" && Log.Log && Log.Log(n, t, i);
  }
  function f(r, f, e) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var o = cc11001100_hook("o", t(n, f), "var-init");
    o && o === r || (i(n, f, r, !0, "/", null), o && e && u("Info", "BRResize", e));
  }
  function ht() {
    var e = cc11001100_hook("e", t(n, "DPR"), "var-init"),
      r = cc11001100_hook("r", _w.devicePixelRatio != null && !isNaN(_w.devicePixelRatio) ? _w.devicePixelRatio.toFixed(1) : "1", "var-init"),
      u,
      f;
    h("Info", p, r, "RawDPR", r);
    e && parseFloat(e) === parseFloat(r) || i(n, "DPR", r, !0, "/", null);
    u = cc11001100_hook("u", t(n, "UTC"), "assign");
    f = cc11001100_hook("f", (new Date().getTimezoneOffset() * -1).toString(), "assign");
    (u == null || u !== f) && i(n, "UTC", f, !0, "/", null);
  }
  function e(f, e) {
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    f != e && (u("Info", r, e), _w.DMMode = cc11001100_hook("_w.DMMode", e, "assign"));
    var o = cc11001100_hook("o", t(n, v), "var-init");
    t(n, r) != e && (i(n, r, e, !0, "/", null), o === y && (u("Info", r, "reload and update DM " + e), _w.location.reload()));
  }
  function o(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var r = cc11001100_hook("r", "(prefers-color-scheme: " + n + ")", "var-init");
    return _w.matchMedia(r).matches ? (t != i && e(t, i), !0) : !1;
  }
  function c() {
    var n = cc11001100_hook("n", _w.DMMode, "var-init");
    _w.matchMedia ? o("light", n, "0") || o("dark", n, "1") || o("no-preference", n, "2") || e(n, "3") : e(n, "4");
  }
  function ct() {
    _w[w] = cc11001100_hook("_w[w]", 0, "assign");
    _w[b] = cc11001100_hook("_w[b]", 0, "assign");
    l();
    ht();
    c();
  }
  function l() {
    lt();
    at();
  }
  function lt() {
    var n = cc11001100_hook("n", getBrowserWidth_Desk2(), "var-init"),
      t = cc11001100_hook("t", getBrowserHeight_Desk2(), "var-init");
    st(n, t);
    f(n.toString(), "CW", "W");
    f(t.toString(), "CH", "H");
    f(getBrowserScrollWidth_Desk2().toString(), "SCW", "");
    f(getBrowserScrollHeight_Desk2().toString(), "SCH", "");
  }
  function at() {
    var i = cc11001100_hook("i", +t(n, "CW"), "var-init"),
      r = cc11001100_hook("r", +t(n, "SCW"), "var-init");
    (i && i != getBrowserWidth_Desk2() || r && r != getBrowserScrollWidth_Desk2()) && u("Info", "CookieCorrupt", "1");
  }
  function vt() {
    var r = cc11001100_hook("r", t(n, "CW"), "var-init"),
      u = cc11001100_hook("u", t(n, "CH"), "var-init");
    r && i(n, "PRVCW", r, !0, "/", null);
    u && i(n, "PRVCH", u, !0, "/", null);
  }
  function a() {
    var n = cc11001100_hook("n", _ge("b_context"), "var-init"),
      t = cc11001100_hook("t", _ge("b_results"), "var-init");
    n != null && t != null && n.clientHeight > t.clientHeight && _w.sj_log && sj_log(ot, "Context", "high");
    vt();
    ct();
  }
  var i = cc11001100_hook("i", sj_cook.set, "var-init"),
    t = cc11001100_hook("t", sj_cook.get, "var-init"),
    n = cc11001100_hook("n", "SRCHHPGUSR", "var-init"),
    r = cc11001100_hook("r", "DM", "var-init"),
    v = cc11001100_hook("v", "WEBTHEME", "var-init"),
    y = cc11001100_hook("y", "2", "var-init"),
    p = cc11001100_hook("p", "DPR", "var-init"),
    w = cc11001100_hook("w", "WResizeCNT", "var-init"),
    b = cc11001100_hook("b", "WResizeTS", "var-init"),
    k = cc11001100_hook("k", "BRH", "var-init"),
    d = cc11001100_hook("d", 1e3, "var-init"),
    g = cc11001100_hook("g", 700, "var-init"),
    nt = cc11001100_hook("nt", "BRW", "var-init"),
    tt = cc11001100_hook("tt", 1480.9, "var-init"),
    it = cc11001100_hook("it", 1346.9, "var-init"),
    rt = cc11001100_hook("rt", 1257.9, "var-init"),
    ut = cc11001100_hook("ut", 1164, "var-init"),
    ft = cc11001100_hook("ft", 1016, "var-init"),
    et = cc11001100_hook("et", 868, "var-init"),
    ot = cc11001100_hook("ot", "CI.RightRail", "var-init");
  a();
  sj_evt.bind("ajax.load", a);
  sj_be(_w, "resize", l);
  sj_be(_d, "visibilitychange", function () {
    _d.visibilityState === "visible" && c();
  });
})();
window.ClientObserver = cc11001100_hook("window.ClientObserver", {
  getBrowserWidth: cc11001100_hook("getBrowserWidth", getBrowserWidth_Desk2, "object-key-init"),
  getBrowserHeight: cc11001100_hook("getBrowserHeight", getBrowserHeight_Desk2, "object-key-init"),
  getBrowserScrollWidth: cc11001100_hook("getBrowserScrollWidth", getBrowserScrollWidth_Desk2, "object-key-init"),
  getBrowserScrollHeight: cc11001100_hook("getBrowserScrollHeight", getBrowserScrollHeight_Desk2, "object-key-init")
}, "assign");