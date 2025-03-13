var sa_storage = cc11001100_hook("sa_storage", {}, "var-init"),
  sa_eL = cc11001100_hook("sa_eL", !1, "var-init");
(function () {
  function c(t) {
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", decodeURIComponent(sa_config.u + encodeURIComponent(t)), "var-init");
    return n.ascsr && (i = cc11001100_hook("i", i + "&csr=1", "assign")), n.isPathSearch && (i = cc11001100_hook("i", i + "&pths=1", "assign")), n.enableRequeryParam && (i = cc11001100_hook("i", i + "&rqry=1", "assign")), n.ascssdis || n.ascsr || (i = cc11001100_hook("i", i + "&css=1", "assign")), _G.IG !== null && _G.IG !== "" && _G.IG !== undefined ? i + "&zis=1&pf=1&cvid=" + _G.IG : "";
  }
  function v(n) {
    cc11001100_hook("n", n, "function-parameter");
    Log && Log.Log && Log.Log("AS.Error", n, "AS", !0);
  }
  function l() {
    var f,
      u = cc11001100_hook("u", t && t.getAttribute("value") ? t.getAttribute("value").toLocaleLowerCase() : "", "var-init"),
      r,
      o,
      e;
    u.length < 30 && (r = cc11001100_hook("r", sj_gx(), "assign"), o = cc11001100_hook("o", c(u), "assign"), o !== "" && (r.open("GET", c(u), !0), i !== null && i.parentNode !== null && (e = cc11001100_hook("e", (f = cc11001100_hook("f", i.parentNode.offsetWidth, "assign")) === null || f === void 0 ? void 0 : f.toString(), "assign"), n.cors ? r.setRequestHeader("contentWidth", e) : r.setRequestHeader("X-Autosuggest-ContentWidth", e)), n.IsBingPrivate && !n.cors && r.setRequestHeader("preferAnonymous", "1"), r.onload = cc11001100_hook("r.onload", function () {
      r.status === 200 && (!n.ascsr || n.ascsr && p(r.responseText)) && (sa_storage[u] = cc11001100_hook("sa_storage[u]", r, "assign"));
    }, "assign"), r.send()));
  }
  function y(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t, i, r;
    try {
      t = cc11001100_hook("t", _w.localStorage ? _w.localStorage.getItem(n) : null, "assign");
      t = cc11001100_hook("t", JSON.parse(t), "assign");
      i = cc11001100_hook("i", parseInt(t.expiry, 10), "assign");
      r = cc11001100_hook("r", new Date().getTime(), "assign");
      i > r && l();
    } catch (u) {}
  }
  function p(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (typeof n != "string" || n.length === 0) return !1;
    try {
      return JSON.parse(n), !0;
    } catch (t) {
      return !1;
    }
  }
  function a(t, i, r) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    t && sj_ue(t, i, a);
    sa_eL = cc11001100_hook("sa_eL", sa_eL || r, "assign");
    var u = cc11001100_hook("u", i === "load" && n.bundleearly, "var-init");
    h || u || (h = cc11001100_hook("h", !0, "assign"), sj_evt.fire("AS.bootload", t), sa_loader(), (n.aspreinitcss || n.ascsr) && w(), n.ascsr && typeof preact == "undefined" && typeof sa_preactloader != "undefined" && sa_preactloader(), n.csr_precompbootstrap && typeof sa_preactcompsloader != "undefined" && sa_preactcompsloader());
  }
  function w() {
    var n = cc11001100_hook("n", document.getElementById("as-css-link"), "var-init");
    n !== null && n.setAttribute("rel", "stylesheet");
  }
  function b() {
    var n,
      t = cc11001100_hook("t", document.querySelectorAll('link[id="as-css-link"]'), "var-init");
    t !== null && t !== undefined && t.length > 1 && ((n = cc11001100_hook("n", document.querySelector('link[id="as-css-link"][rel="prefetch"]'), "assign")) === null || n === void 0 ? void 0 : n.remove());
  }
  function u(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    sj_be(n, t, function (r) {
      a(n, t, i, sj_ev(r));
    });
  }
  var f, e, o, s, n, t, i, r, h;
  if (typeof sa_config == "undefined" || !sa_config) {
    v("sa_config is not defined");
    return;
  }
  if (n = cc11001100_hook("n", sa_config, "assign"), t = cc11001100_hook("t", _ge(n.i), "assign"), t && t.setAttribute("autocomplete", "off"), performance.mark("AutosuggestBootstrapLoaded"), n.asaccfixid && b(), i = cc11001100_hook("i", _ge(n.c), "assign"), !i) {
    if (r = cc11001100_hook("r", _ge("sa_qs") || t, "assign"), !r) {
      _w.sj_log && sj_log("CI.AS", "AS Init Failed", "sq_qs_or_sb_not_found");
      return;
    }
    i = cc11001100_hook("i", sj_ce("div"), "assign");
    i.id = cc11001100_hook("i.id", n.c, "assign");
    _ge("sb_form_q").nodeName === "TEXTAREA" ? r.parentNode && r.parentNode.parentNode.appendChild(i) : r.parentNode.appendChild(i);
  }
  n.asprefre ? y("asUsed") : !n.asprefrev2 || ((e = cc11001100_hook("e", (f = cc11001100_hook("f", window === null || window === void 0 ? void 0 : window.location, "assign")) === null || f === void 0 ? void 0 : f.pathname, "assign")) === null || e === void 0 ? void 0 : e.includes("/search")) && !((s = cc11001100_hook("s", (o = cc11001100_hook("o", window === null || window === void 0 ? void 0 : window.location, "assign")) === null || o === void 0 ? void 0 : o.search, "assign")) === null || s === void 0 ? void 0 : s.includes("&sp=")) || l();
  h = cc11001100_hook("h", !1, "assign");
  _w.sa_loader && ("ontouchend" in _w && u(t, "touchend", !0), u(t, "click", !0), u(t, "keydown", !0), n.ol && u(_w, "load", !1));
})();