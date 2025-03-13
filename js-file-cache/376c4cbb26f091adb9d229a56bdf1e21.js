var __assign = cc11001100_hook("__assign", this && this.__assign || function () {
    return __assign = cc11001100_hook("__assign", Object.assign || function (n) {
      for (var t, r, i = cc11001100_hook("i", 1, "var-init"), u = cc11001100_hook("u", arguments.length, "var-init"); i < u; i++) {
        t = cc11001100_hook("t", arguments[i], "assign");
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = cc11001100_hook("n[r]", t[r], "assign"));
      }
      return n;
    }, "assign"), __assign.apply(this, arguments);
  }, "var-init"),
  __spreadArray = cc11001100_hook("__spreadArray", this && this.__spreadArray || function (n, t, i) {
    if (i || arguments.length === 2) for (var r = cc11001100_hook("r", 0, "var-init"), f = cc11001100_hook("f", t.length, "var-init"), u; r < f; r++) !u && r in t || (u || (u = cc11001100_hook("u", Array.prototype.slice.call(t, 0, r), "assign")), u[r] = cc11001100_hook("u[r]", t[r], "assign"));
    return n.concat(u || Array.prototype.slice.call(t));
  }, "var-init"),
  LGUtility;
(function (n) {
  function ei() {
    sj_evt.bind(h, oi, !0);
    sj_evt.bind("bfbMainlineAnswerRemoved", vt, !0);
    sj_evt.bind("bfbPreExpanded", vt, !0);
    sj_evt.bind(ri, ci, !0);
  }
  function oi(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e, o, s;
    try {
      if (n[2]) {
        var t = cc11001100_hook("t", n[1], "var-init"),
          h = cc11001100_hook("h", _ge(f(t)), "var-init"),
          r = cc11001100_hook("r", h.getBoundingClientRect(), "var-init");
        fi && !r.height ? (e = cc11001100_hook("e", {
          name: cc11001100_hook("name", "InvalidRender", "object-key-init"),
          message: cc11001100_hook("message", "Widget did not have a height during render event", "object-key-init")
        }, "assign"), ht(t, e)) : (o = cc11001100_hook("o", u[t], "assign"), u[t] = cc11001100_hook("u[t]", {
          name: cc11001100_hook("name", t, "object-key-init"),
          top: cc11001100_hook("top", r.top + _w.scrollY, "object-key-init"),
          bottom: cc11001100_hook("bottom", r.bottom + _w.scrollY, "object-key-init")
        }, "assign"), o ? (s = cc11001100_hook("s", pt(t), "assign"), i.splice(s, 1), yt(t)) : yt(t));
      }
      ot(n[1], !1);
    } catch (c) {
      g = cc11001100_hook("g", !0, "assign");
      ht(n[1], c);
    }
  }
  function si() {
    for (var l, h, n = cc11001100_hook("n", ".b_widgetContainer", "var-init"), a = cc11001100_hook("a", ft.top.classes, "var-init"), i = cc11001100_hook("i", document.querySelector(ft.magazine["class"]), "var-init"), r = cc11001100_hook("r", document.querySelector(ft.magazineParent["class"]), "var-init"), u = cc11001100_hook("u", i === null || i === void 0 ? void 0 : i.querySelector(n), "var-init"), f = cc11001100_hook("f", w === null || w === void 0 ? void 0 : w.querySelector(n), "var-init"), e = cc11001100_hook("e", ut === null || ut === void 0 ? void 0 : ut.querySelector(n), "var-init"), o = cc11001100_hook("o", r === null || r === void 0 ? void 0 : r.querySelector(n), "var-init"), t = cc11001100_hook("t", null, "var-init"), s = cc11001100_hook("s", 0, "var-init"), c = cc11001100_hook("c", a, "var-init"); s < c.length; s++) if (l = cc11001100_hook("l", c[s], "assign"), h = cc11001100_hook("h", document.querySelector(l), "assign"), h && (t = cc11001100_hook("t", h.querySelector(n), "assign"), t)) break;
    return u && u.id ? u.id.split("Container")[0] : e && e.id ? e.id.split("Container")[0] : f && f.id ? f.id.split("Container")[0] : t && t.id ? t.id.split("Container")[0] : o && o.id ? o.id.split("Container")[0] : "";
  }
  function hi(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (ni) {
      var t = cc11001100_hook("t", si(), "var-init");
      return t === n;
    }
    return !0;
  }
  function ci() {
    at || (bt(ui), at = cc11001100_hook("at", !0, "assign"));
  }
  function vt() {
    for (var t, n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) if (t = cc11001100_hook("t", i[n].name, "assign"), o[t]) {
      kt(t);
      return;
    }
  }
  function yt(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var f, e, r = cc11001100_hook("r", 0, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < i.length; t++) {
      if (f = cc11001100_hook("f", i[t].top, "assign"), e = cc11001100_hook("e", u[n].top, "assign"), e < f) {
        r = cc11001100_hook("r", t, "assign");
        i.splice(r, 0, u[n]);
        return;
      }
      r = cc11001100_hook("r", t, "assign");
    }
    i.splice(r + 1, 0, u[n]);
  }
  function pt(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < i.length; t++) if (i[t].name === n) return t;
    return null;
  }
  function ot(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    o[n] ? t ? p[n] = cc11001100_hook("p[n]", !0, "assign") : delete p[n] : s[n] && (t ? c[n] = cc11001100_hook("c[n]", !0, "assign") : delete c[n]);
    var i = cc11001100_hook("i", Object.keys(p).length, "var-init"),
      r = cc11001100_hook("r", Object.keys(c).length, "var-init");
    !t && i === 0 && r > 0 && d > 0 && wt() && st();
    sj_evt.fire(ii);
  }
  function wt() {
    for (var t = cc11001100_hook("t", Object.keys(c), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) if (!b[t[n]]) return !1;
    return !0;
  }
  function st() {
    if (et) setTimeout(function () {
      st();
    }, 0);else {
      et = cc11001100_hook("et", !0, "assign");
      var n = cc11001100_hook("n", nt.shift(), "var-init"),
        t = cc11001100_hook("t", b[n] && b[n](), "var-init");
      sj_evt.fire(h, n, !!t);
      !t || d--;
      et = cc11001100_hook("et", !1, "assign");
    }
  }
  function li() {
    for (var i, t = cc11001100_hook("t", Object.keys(c), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) i = cc11001100_hook("i", s[t[n]], "assign"), nt[i] = cc11001100_hook("nt[i]", t[n], "assign");
    nt = cc11001100_hook("nt", nt.filter(Boolean), "assign");
  }
  function bt(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var r, t, o, e = cc11001100_hook("e", Object.keys(s), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) r = cc11001100_hook("r", e[i], "assign"), u[r] && (t = cc11001100_hook("t", _ge(f(r)), "assign"), t && (o = cc11001100_hook("o", parseInt(t.style.top.slice(0, -2)), "assign"), t.style.top = cc11001100_hook("t.style.top", o + n + "px", "assign")));
  }
  function f(n) {
    cc11001100_hook("n", n, "function-parameter");
    return ct[n] ? ct[n] : n + "Container";
  }
  function ai() {
    return p;
  }
  function kt(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (!n || !u[n] || !f(n) || !_ge(f(n))) return null;
    var t = cc11001100_hook("t", u[n].bottom, "var-init"),
      i = cc11001100_hook("i", _ge(f(n)), "var-init"),
      r = cc11001100_hook("r", i.getBoundingClientRect().bottom + _w.scrollY, "var-init"),
      e = cc11001100_hook("e", r - t, "var-init");
    bt(e);
  }
  function vi(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (b[n] = cc11001100_hook("b[n]", t, "assign"), wt()) {
      li();
      var i = cc11001100_hook("i", Object.keys(p).length, "var-init"),
        r = cc11001100_hook("r", Object.keys(c).length, "var-init");
      i === 0 && r > 0 && d > 0 && st();
    }
  }
  function yi(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r, f, e;
    return !g && u[t] ? (r = cc11001100_hook("r", pt(t), "assign"), f = cc11001100_hook("f", i[r].bottom, "assign"), i[r + 1] ? (e = cc11001100_hook("e", i[r + 1].top, "assign"), e - f + y > n) : !0) : !1;
  }
  function pi(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var c, f, s, h, p, nt;
    if (t === void 0 && (t = cc11001100_hook("t", !1, "assign")), !k || !n || g) return null;
    var tt = cc11001100_hook("tt", _ge("b_sydConvCont"), "var-init"),
      b = cc11001100_hook("b", Lib.CssClass.contains(document.body, "b_sydConvMode"), "var-init"),
      u = cc11001100_hook("u", w && w.getBoundingClientRect(), "var-init"),
      l = cc11001100_hook("l", _ge("b_content"), "var-init"),
      r = cc11001100_hook("r", l && l.getBoundingClientRect(), "var-init"),
      a = cc11001100_hook("a", k === null || k === void 0 ? void 0 : k.getBoundingClientRect(), "var-init"),
      d = cc11001100_hook("d", (c = cc11001100_hook("c", _ge("b_genserp_container"), "assign")) === null || c === void 0 ? void 0 : c.getBoundingClientRect(), "var-init"),
      e = cc11001100_hook("e", _ge("b_scope_container"), "var-init"),
      it = cc11001100_hook("it", e && typeof e != "undefined", "var-init"),
      v = cc11001100_hook("v", e && e.getBoundingClientRect(), "var-init"),
      o = cc11001100_hook("o", !t && u && u.bottom || (b ? r === null || r === void 0 ? void 0 : r.top : it ? v === null || v === void 0 ? void 0 : v.bottom : a === null || a === void 0 ? void 0 : a.bottom), "var-init");
    for (o += cc11001100_hook("o", _w.scrollY, "assign"), f = cc11001100_hook("f", d && d.bottom + _w.scrollY || o, "assign"), h = cc11001100_hook("h", 0, "assign"); h < i.length; h++) {
      if (p = cc11001100_hook("p", _ge(i[h].name + "Container").getBoundingClientRect(), "assign"), p.top + _w.scrollY - (f + y) >= n) break;
      f = cc11001100_hook("f", Math.max(f, p.bottom + _w.scrollY), "assign");
    }
    return (s = cc11001100_hook("s", f + y, "assign"), nt = cc11001100_hook("nt", r && _w.getComputedStyle(l).position == "relative" ? (r === null || r === void 0 ? void 0 : r.top) + _w.scrollY : 0, "assign"), tt && b) ? !t && (u === null || u === void 0 ? void 0 : u.height) ? s - o + (u.height + ((u === null || u === void 0 ? void 0 : u.top) - (r === null || r === void 0 ? void 0 : r.top))) : s - o : s - nt;
  }
  function wi(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", _ge(f(n)), "var-init");
    if (!u[n] || !i || !i.parentElement || g) return null;
    var e = cc11001100_hook("e", i.parentElement.getBoundingClientRect(), "var-init"),
      r = cc11001100_hook("r", i.getBoundingClientRect(), "var-init"),
      o = cc11001100_hook("o", r.top - e.top, "var-init");
    return e.bottom - (r.bottom + y) >= t ? r.height + o + y : null;
  }
  function bi(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", e[n], "var-init");
    n && t != undefined && v[n] && ((a === null || t <= e[a]) && (a = cc11001100_hook("a", n, "assign")), r !== null && v[r].imbeds[a] ? v[n].imbeds[a] && (r = cc11001100_hook("r", t < e[r] ? n : r, "assign")) : r = cc11001100_hook("r", a, "assign"), ot(n, !0), rr(n));
  }
  function ki(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (dt() || !ir(n)) return sj_evt.fire(h, n, !1), !1;
    if (l != null && l != n) return gt(n, l), sj_evt.fire(h, n, !1), !1;
    var t = cc11001100_hook("t", v[r], "var-init"),
      i = cc11001100_hook("i", _ge(f(n)), "var-init");
    return ({
      wholepgtemp: cc11001100_hook("wholepgtemp", !0, "object-key-init"),
      LeftGutterDisambig: cc11001100_hook("LeftGutterDisambig", !0, "object-key-init")
    }[n] || i) && t && !t.imbeds[n] ? hi(n) && (t.shared[n] || r === n || o[r] && o[n] || s[n] && d > 0) ? !0 : (gt(n, r), sj_evt.fire(h, n, !1), !1) : (sj_evt.fire(h, n, !1), !1);
  }
  function di(n) {
    cc11001100_hook("n", n, "function-parameter");
    return !!v[r].imbeds[n];
  }
  function gi(n) {
    cc11001100_hook("n", n, "function-parameter");
    return lt[n];
  }
  function nr(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    lt[n] = cc11001100_hook("lt[n]", t, "assign");
    sj_evt.fire(ti, n);
  }
  function tr(n) {
    cc11001100_hook("n", n, "function-parameter");
    var u = cc11001100_hook("u", n && n.getAttribute("h"), "var-init"),
      i = cc11001100_hook("i", {
        appNS: cc11001100_hook("appNS", null, "object-key-init"),
        kValue: cc11001100_hook("kValue", null, "object-key-init")
      }, "var-init"),
      t,
      r;
    return u && (t = cc11001100_hook("t", u.split(","), "assign"), t && t.length >= 2 && (r = cc11001100_hook("r", t[0].split("="), "assign"), i.appNS = cc11001100_hook("i.appNS", r && r[1], "assign"), i.kValue = cc11001100_hook("i.kValue", t[1], "assign"))), i;
  }
  function dt() {
    var t, i, r, u, n;
    return ((i = cc11001100_hook("i", (t = cc11001100_hook("t", _w.location, "assign")) === null || t === void 0 ? void 0 : t.search, "assign")) === null || i === void 0 ? void 0 : i.indexOf("showselans")) > -1 && typeof URLSearchParams != "undefined" ? (n = cc11001100_hook("n", new URLSearchParams(_w.location.search), "assign"), n.get("showselans") === "1") : ((u = cc11001100_hook("u", (r = cc11001100_hook("r", _w.location, "assign")) === null || r === void 0 ? void 0 : r.search, "assign")) === null || u === void 0 ? void 0 : u.indexOf("showonlyads")) > -1 && typeof URLSearchParams != "undefined" ? (n = cc11001100_hook("n", new URLSearchParams(_w.location.search), "assign"), n.get("showonlyads") === "1") : !1;
  }
  function ir(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", Lib.CssClass.contains(document.body, "b_dark"), "var-init");
    return t ? !!rt[n] : !0;
  }
  function rr(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (it[n]) {
      var t = cc11001100_hook("t", e[n], "var-init");
      (l == null || t < e[l]) && (l = cc11001100_hook("l", n, "assign"));
    }
  }
  function gt(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    Log && Log.Log && Log.Log("LeftGutterUtility", n, "LGSuppressed", !1, "SuppressingFeature", t);
  }
  function ht(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", "Error Name: " + t.name + "\nError Message: " + t.message, "var-init");
    Log && Log.Log && Log.Log("LeftGutterUtility", n, "error", !1, "errorName", t.name, "errorDesc", i);
  }
  function ur(n, t, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    for (var f = cc11001100_hook("f", [], "var-init"), u = cc11001100_hook("u", 4, "var-init"); u < arguments.length; u++) f[u - 4] = cc11001100_hook("f[u - 4]", arguments[u], "assign");
    tt.apply(void 0, __spreadArray([n, "ContainerClick", t, i, r], f, !1));
  }
  function fr(n, t, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    for (var f = cc11001100_hook("f", [], "var-init"), u = cc11001100_hook("u", 4, "var-init"); u < arguments.length; u++) f[u - 4] = cc11001100_hook("f[u - 4]", arguments[u], "assign");
    tt.apply(void 0, __spreadArray([n, "ContainerHover", t, i, r], f, !1));
  }
  function er(n, t, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    tt(n, "ContainerRender", t, i, r);
  }
  function tt(n, t, i, r, u) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    for (var e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 5, "var-init"); f < arguments.length; f++) e[f - 5] = cc11001100_hook("e[f - 5]", arguments[f], "assign");
    r && u ? Log && Log.Log && Log.Log.apply(Log, __spreadArray(["LeftGutterModule", n, t, !1, "AppNS", r, "K", u, "Category", "CommonControls", "AnswerType", i], e, !1)) : Log && Log.Log && Log.Log.apply(Log, __spreadArray(["LeftGutterModule", n, t, !1, "AnswerType", i], e, !1));
  }
  function or(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", _ge(f(n)), "var-init");
    t && t.parentElement && t.parentElement.removeChild(t);
    ot(n, !1);
  }
  var ni = cc11001100_hook("ni", n.enableCleanSerp === !0, "var-init"),
    e,
    o,
    s,
    it,
    rt;
  (function (n) {
    n[n.AutosSerpWPFilters = cc11001100_hook("n.AutosSerpWPFilters", 0, "assign")] = cc11001100_hook("n[n.AutosSerpWPFilters = 0]", "AutosSerpWPFilters", "assign");
    n[n.shopWPFilters = cc11001100_hook("n.shopWPFilters", 1, "assign")] = cc11001100_hook("n[n.shopWPFilters = 1]", "shopWPFilters", "assign");
    n[n.shopFiltersWidget = cc11001100_hook("n.shopFiltersWidget", 2, "assign")] = cc11001100_hook("n[n.shopFiltersWidget = 2]", "shopFiltersWidget", "assign");
    n[n.wholepgtemp = cc11001100_hook("n.wholepgtemp", 3, "assign")] = cc11001100_hook("n[n.wholepgtemp = 3]", "wholepgtemp", "assign");
    n[n.financeWidget = cc11001100_hook("n.financeWidget", 4, "assign")] = cc11001100_hook("n[n.financeWidget = 4]", "financeWidget", "assign");
    n[n.lgRealEstate = cc11001100_hook("n.lgRealEstate", 5, "assign")] = cc11001100_hook("n[n.lgRealEstate = 5]", "lgRealEstate", "assign");
    n[n.lgRealEstateSA = cc11001100_hook("n.lgRealEstateSA", 6, "assign")] = cc11001100_hook("n[n.lgRealEstateSA = 6]", "lgRealEstateSA", "assign");
    n[n.lgREAds = cc11001100_hook("n.lgREAds", 7, "assign")] = cc11001100_hook("n[n.lgREAds = 7]", "lgREAds", "assign");
    n[n.lgAds = cc11001100_hook("n.lgAds", 8, "assign")] = cc11001100_hook("n[n.lgAds = 8]", "lgAds", "assign");
    n[n.lgTravelAds = cc11001100_hook("n.lgTravelAds", 9, "assign")] = cc11001100_hook("n[n.lgTravelAds = 9]", "lgTravelAds", "assign");
    n[n.HotelsLGWidget = cc11001100_hook("n.HotelsLGWidget", 10, "assign")] = cc11001100_hook("n[n.HotelsLGWidget = 10]", "HotelsLGWidget", "assign");
    n[n.textAdsWidget = cc11001100_hook("n.textAdsWidget", 11, "assign")] = cc11001100_hook("n[n.textAdsWidget = 11]", "textAdsWidget", "assign");
    n[n.productAdsFilterLGW = cc11001100_hook("n.productAdsFilterLGW", 12, "assign")] = cc11001100_hook("n[n.productAdsFilterLGW = 12]", "productAdsFilterLGW", "assign");
    n[n.shopWidget = cc11001100_hook("n.shopWidget", 13, "assign")] = cc11001100_hook("n[n.shopWidget = 13]", "shopWidget", "assign");
    n[n.RichDeveloperGutterWidget = cc11001100_hook("n.RichDeveloperGutterWidget", 14, "assign")] = cc11001100_hook("n[n.RichDeveloperGutterWidget = 14]", "RichDeveloperGutterWidget", "assign");
    n[n.LGCashbackEnrollWidget = cc11001100_hook("n.LGCashbackEnrollWidget", 15, "assign")] = cc11001100_hook("n[n.LGCashbackEnrollWidget = 15]", "LGCashbackEnrollWidget", "assign");
    n[n.textDeeplinksWidget = cc11001100_hook("n.textDeeplinksWidget", 16, "assign")] = cc11001100_hook("n[n.textDeeplinksWidget = 16]", "textDeeplinksWidget", "assign");
    n[n.nowCastIcon = cc11001100_hook("n.nowCastIcon", 17, "assign")] = cc11001100_hook("n[n.nowCastIcon = 17]", "nowCastIcon", "assign");
    n[n.destLGW = cc11001100_hook("n.destLGW", 18, "assign")] = cc11001100_hook("n[n.destLGW = 18]", "destLGW", "assign");
    n[n.XMOfferWidget = cc11001100_hook("n.XMOfferWidget", 19, "assign")] = cc11001100_hook("n[n.XMOfferWidget = 19]", "XMOfferWidget", "assign");
    n[n.GigServicesWidget = cc11001100_hook("n.GigServicesWidget", 20, "assign")] = cc11001100_hook("n[n.GigServicesWidget = 20]", "GigServicesWidget", "assign");
    n[n.AirlineWidget = cc11001100_hook("n.AirlineWidget", 21, "assign")] = cc11001100_hook("n[n.AirlineWidget = 21]", "AirlineWidget", "assign");
    n[n.FlightWidget = cc11001100_hook("n.FlightWidget", 22, "assign")] = cc11001100_hook("n[n.FlightWidget = 22]", "FlightWidget", "assign");
    n[n.HealthWidget = cc11001100_hook("n.HealthWidget", 23, "assign")] = cc11001100_hook("n[n.HealthWidget = 23]", "HealthWidget", "assign");
    n[n.TopicsLGWidget = cc11001100_hook("n.TopicsLGWidget", 24, "assign")] = cc11001100_hook("n[n.TopicsLGWidget = 24]", "TopicsLGWidget", "assign");
    n[n.AutosMarketplaceWidget = cc11001100_hook("n.AutosMarketplaceWidget", 25, "assign")] = cc11001100_hook("n[n.AutosMarketplaceWidget = 25]", "AutosMarketplaceWidget", "assign");
    n[n.PromotionalGutterWidget = cc11001100_hook("n.PromotionalGutterWidget", 26, "assign")] = cc11001100_hook("n[n.PromotionalGutterWidget = 26]", "PromotionalGutterWidget", "assign");
    n[n.StockGutterWidget = cc11001100_hook("n.StockGutterWidget", 27, "assign")] = cc11001100_hook("n[n.StockGutterWidget = 27]", "StockGutterWidget", "assign");
    n[n.localWidget = cc11001100_hook("n.localWidget", 28, "assign")] = cc11001100_hook("n[n.localWidget = 28]", "localWidget", "assign");
    n[n.wikiWidget = cc11001100_hook("n.wikiWidget", 29, "assign")] = cc11001100_hook("n[n.wikiWidget = 29]", "wikiWidget", "assign");
    n[n.wptMagazineWikiWidget = cc11001100_hook("n.wptMagazineWikiWidget", 30, "assign")] = cc11001100_hook("n[n.wptMagazineWikiWidget = 30]", "wptMagazineWikiWidget", "assign");
    n[n.lgWptNav = cc11001100_hook("n.lgWptNav", 31, "assign")] = cc11001100_hook("n[n.lgWptNav = 31]", "lgWptNav", "assign");
    n[n.lgGenSERP = cc11001100_hook("n.lgGenSERP", 32, "assign")] = cc11001100_hook("n[n.lgGenSERP = 32]", "lgGenSERP", "assign");
    n[n.newsWidget = cc11001100_hook("n.newsWidget", 33, "assign")] = cc11001100_hook("n[n.newsWidget = 33]", "newsWidget", "assign");
    n[n.richCalendarWidget = cc11001100_hook("n.richCalendarWidget", 34, "assign")] = cc11001100_hook("n[n.richCalendarWidget = 34]", "richCalendarWidget", "assign");
    n[n.richcardWidget = cc11001100_hook("n.richcardWidget", 35, "assign")] = cc11001100_hook("n[n.richcardWidget = 35]", "richcardWidget", "assign");
    n[n.lgImgAns = cc11001100_hook("n.lgImgAns", 36, "assign")] = cc11001100_hook("n[n.lgImgAns = 36]", "lgImgAns", "assign");
    n[n.lgVidAns = cc11001100_hook("n.lgVidAns", 37, "assign")] = cc11001100_hook("n[n.lgVidAns = 37]", "lgVidAns", "assign");
    n[n.lgAnsFeedbackMop = cc11001100_hook("n.lgAnsFeedbackMop", 38, "assign")] = cc11001100_hook("n[n.lgAnsFeedbackMop = 38]", "lgAnsFeedbackMop", "assign");
    n[n.lgAnsFeedbackTop = cc11001100_hook("n.lgAnsFeedbackTop", 39, "assign")] = cc11001100_hook("n[n.lgAnsFeedbackTop = 39]", "lgAnsFeedbackTop", "assign");
    n[n.segmentWidget = cc11001100_hook("n.segmentWidget", 40, "assign")] = cc11001100_hook("n[n.segmentWidget = 40]", "segmentWidget", "assign");
    n[n.SportsLGWidget = cc11001100_hook("n.SportsLGWidget", 41, "assign")] = cc11001100_hook("n[n.SportsLGWidget = 41]", "SportsLGWidget", "assign");
    n[n.flightTimeWidget = cc11001100_hook("n.flightTimeWidget", 42, "assign")] = cc11001100_hook("n[n.flightTimeWidget = 42]", "flightTimeWidget", "assign");
    n[n.whereToWatchWidget = cc11001100_hook("n.whereToWatchWidget", 43, "assign")] = cc11001100_hook("n[n.whereToWatchWidget = 43]", "whereToWatchWidget", "assign");
    n[n.lgShopFilter = cc11001100_hook("n.lgShopFilter", 44, "assign")] = cc11001100_hook("n[n.lgShopFilter = 44]", "lgShopFilter", "assign");
    n[n.sydneyLetsChatWidget = cc11001100_hook("n.sydneyLetsChatWidget", 45, "assign")] = cc11001100_hook("n[n.sydneyLetsChatWidget = 45]", "sydneyLetsChatWidget", "assign");
    n[n.lgWeather = cc11001100_hook("n.lgWeather", 46, "assign")] = cc11001100_hook("n[n.lgWeather = 46]", "lgWeather", "assign");
    n[n.lgWeatherAds = cc11001100_hook("n.lgWeatherAds", 47, "assign")] = cc11001100_hook("n[n.lgWeatherAds = 47]", "lgWeatherAds", "assign");
    n[n.listNavWidget = cc11001100_hook("n.listNavWidget", 48, "assign")] = cc11001100_hook("n[n.listNavWidget = 48]", "listNavWidget", "assign");
    n[n.ShoppingAnswerPALGFilter = cc11001100_hook("n.ShoppingAnswerPALGFilter", 49, "assign")] = cc11001100_hook("n[n.ShoppingAnswerPALGFilter = 49]", "ShoppingAnswerPALGFilter", "assign");
    n[n.ShoppingAnswerMALGFilter = cc11001100_hook("n.ShoppingAnswerMALGFilter", 50, "assign")] = cc11001100_hook("n[n.ShoppingAnswerMALGFilter = 50]", "ShoppingAnswerMALGFilter", "assign");
    n[n.ShoppingAnswerLGFilter = cc11001100_hook("n.ShoppingAnswerLGFilter", 51, "assign")] = cc11001100_hook("n[n.ShoppingAnswerLGFilter = 51]", "ShoppingAnswerLGFilter", "assign");
    n[n.sapphireUpsell = cc11001100_hook("n.sapphireUpsell", 52, "assign")] = cc11001100_hook("n[n.sapphireUpsell = 52]", "sapphireUpsell", "assign");
    n[n.lgJobListings = cc11001100_hook("n.lgJobListings", 53, "assign")] = cc11001100_hook("n[n.lgJobListings = 53]", "lgJobListings", "assign");
    n[n.lgCashback = cc11001100_hook("n.lgCashback", 54, "assign")] = cc11001100_hook("n[n.lgCashback = 54]", "lgCashback", "assign");
    n[n.lgLocalListing = cc11001100_hook("n.lgLocalListing", 55, "assign")] = cc11001100_hook("n[n.lgLocalListing = 55]", "lgLocalListing", "assign");
    n[n.UnifiedAnswerGutterWidget = cc11001100_hook("n.UnifiedAnswerGutterWidget", 56, "assign")] = cc11001100_hook("n[n.UnifiedAnswerGutterWidget = 56]", "UnifiedAnswerGutterWidget", "assign");
    n[n.lgHighBingAtWork = cc11001100_hook("n.lgHighBingAtWork", 57, "assign")] = cc11001100_hook("n[n.lgHighBingAtWork = 57]", "lgHighBingAtWork", "assign");
    n[n.lgMedBingAtWork = cc11001100_hook("n.lgMedBingAtWork", 58, "assign")] = cc11001100_hook("n[n.lgMedBingAtWork = 58]", "lgMedBingAtWork", "assign");
    n[n.lgLcgBingAtWork = cc11001100_hook("n.lgLcgBingAtWork", 59, "assign")] = cc11001100_hook("n[n.lgLcgBingAtWork = 59]", "lgLcgBingAtWork", "assign");
    n[n.EdgeWorkspacesWidget = cc11001100_hook("n.EdgeWorkspacesWidget", 60, "assign")] = cc11001100_hook("n[n.EdgeWorkspacesWidget = 60]", "EdgeWorkspacesWidget", "assign");
    n[n.lgCreator = cc11001100_hook("n.lgCreator", 61, "assign")] = cc11001100_hook("n[n.lgCreator = 61]", "lgCreator", "assign");
    n[n.lgDarkModeUpsell = cc11001100_hook("n.lgDarkModeUpsell", 62, "assign")] = cc11001100_hook("n[n.lgDarkModeUpsell = 62]", "lgDarkModeUpsell", "assign");
    n[n.lgWeatherUpsell = cc11001100_hook("n.lgWeatherUpsell", 63, "assign")] = cc11001100_hook("n[n.lgWeatherUpsell = 63]", "lgWeatherUpsell", "assign");
    n[n.listNavPAWidget = cc11001100_hook("n.listNavPAWidget", 64, "assign")] = cc11001100_hook("n[n.listNavPAWidget = 64]", "listNavPAWidget", "assign");
    n[n.lgRecipe = cc11001100_hook("n.lgRecipe", 65, "assign")] = cc11001100_hook("n[n.lgRecipe = 65]", "lgRecipe", "assign");
    n[n.shopPageWidget = cc11001100_hook("n.shopPageWidget", 66, "assign")] = cc11001100_hook("n[n.shopPageWidget = 66]", "shopPageWidget", "assign");
    n[n.LeftGutterDisambig = cc11001100_hook("n.LeftGutterDisambig", 67, "assign")] = cc11001100_hook("n[n.LeftGutterDisambig = 67]", "LeftGutterDisambig", "assign");
    n[n.LGPopDomains = cc11001100_hook("n.LGPopDomains", 68, "assign")] = cc11001100_hook("n[n.LGPopDomains = 68]", "LGPopDomains", "assign");
    n[n.relatedSearches = cc11001100_hook("n.relatedSearches", 69, "assign")] = cc11001100_hook("n[n.relatedSearches = 69]", "relatedSearches", "assign");
    n[n.miniSidebar = cc11001100_hook("n.miniSidebar", 70, "assign")] = cc11001100_hook("n[n.miniSidebar = 70]", "miniSidebar", "assign");
    n[n.LGOlympicMedals = cc11001100_hook("n.LGOlympicMedals", 71, "assign")] = cc11001100_hook("n[n.LGOlympicMedals = 71]", "LGOlympicMedals", "assign");
    n[n.savingsAnswerNav = cc11001100_hook("n.savingsAnswerNav", 72, "assign")] = cc11001100_hook("n[n.savingsAnswerNav = 72]", "savingsAnswerNav", "assign");
    n[n.brandUpSell = cc11001100_hook("n.brandUpSell", 73, "assign")] = cc11001100_hook("n[n.brandUpSell = 73]", "brandUpSell", "assign");
    n[n.AlgoWidget_0 = cc11001100_hook("n.AlgoWidget_0", 74, "assign")] = cc11001100_hook("n[n.AlgoWidget_0 = 74]", "AlgoWidget_0", "assign");
    n[n.AlgoWidget_1 = cc11001100_hook("n.AlgoWidget_1", 75, "assign")] = cc11001100_hook("n[n.AlgoWidget_1 = 75]", "AlgoWidget_1", "assign");
    n[n.AlgoWidget_2 = cc11001100_hook("n.AlgoWidget_2", 76, "assign")] = cc11001100_hook("n[n.AlgoWidget_2 = 76]", "AlgoWidget_2", "assign");
    n[n.AlgoWidget_3 = cc11001100_hook("n.AlgoWidget_3", 77, "assign")] = cc11001100_hook("n[n.AlgoWidget_3 = 77]", "AlgoWidget_3", "assign");
    n[n.AlgoWidget_4 = cc11001100_hook("n.AlgoWidget_4", 78, "assign")] = cc11001100_hook("n[n.AlgoWidget_4 = 78]", "AlgoWidget_4", "assign");
    n[n.AlgoWidget_5 = cc11001100_hook("n.AlgoWidget_5", 79, "assign")] = cc11001100_hook("n[n.AlgoWidget_5 = 79]", "AlgoWidget_5", "assign");
    n[n.AlgoWidget_6 = cc11001100_hook("n.AlgoWidget_6", 80, "assign")] = cc11001100_hook("n[n.AlgoWidget_6 = 80]", "AlgoWidget_6", "assign");
    n[n.AlgoWidget_7 = cc11001100_hook("n.AlgoWidget_7", 81, "assign")] = cc11001100_hook("n[n.AlgoWidget_7 = 81]", "AlgoWidget_7", "assign");
    n[n.AlgoWidget_8 = cc11001100_hook("n.AlgoWidget_8", 82, "assign")] = cc11001100_hook("n[n.AlgoWidget_8 = 82]", "AlgoWidget_8", "assign");
    n[n.AlgoWidget_9 = cc11001100_hook("n.AlgoWidget_9", 83, "assign")] = cc11001100_hook("n[n.AlgoWidget_9 = 83]", "AlgoWidget_9", "assign");
  })(e || (e = cc11001100_hook("e", {}, "assign"))), function (n) {
    n[n.wholepgtemp = cc11001100_hook("n.wholepgtemp", 1, "assign")] = cc11001100_hook("n[n.wholepgtemp = 1]", "wholepgtemp", "assign");
    n[n.financeWidget = cc11001100_hook("n.financeWidget", 2, "assign")] = cc11001100_hook("n[n.financeWidget = 2]", "financeWidget", "assign");
    n[n.lgRealEstate = cc11001100_hook("n.lgRealEstate", 3, "assign")] = cc11001100_hook("n[n.lgRealEstate = 3]", "lgRealEstate", "assign");
    n[n.lgRealEstateSA = cc11001100_hook("n.lgRealEstateSA", 4, "assign")] = cc11001100_hook("n[n.lgRealEstateSA = 4]", "lgRealEstateSA", "assign");
    n[n.lgREAds = cc11001100_hook("n.lgREAds", 5, "assign")] = cc11001100_hook("n[n.lgREAds = 5]", "lgREAds", "assign");
    n[n.lgAds = cc11001100_hook("n.lgAds", 6, "assign")] = cc11001100_hook("n[n.lgAds = 6]", "lgAds", "assign");
    n[n.lgTravelAds = cc11001100_hook("n.lgTravelAds", 7, "assign")] = cc11001100_hook("n[n.lgTravelAds = 7]", "lgTravelAds", "assign");
    n[n.HotelsLGWidget = cc11001100_hook("n.HotelsLGWidget", 8, "assign")] = cc11001100_hook("n[n.HotelsLGWidget = 8]", "HotelsLGWidget", "assign");
    n[n.textAdsWidget = cc11001100_hook("n.textAdsWidget", 9, "assign")] = cc11001100_hook("n[n.textAdsWidget = 9]", "textAdsWidget", "assign");
    n[n.productAdsFilterLGW = cc11001100_hook("n.productAdsFilterLGW", 10, "assign")] = cc11001100_hook("n[n.productAdsFilterLGW = 10]", "productAdsFilterLGW", "assign");
    n[n.RichDeveloperGutterWidget = cc11001100_hook("n.RichDeveloperGutterWidget", 11, "assign")] = cc11001100_hook("n[n.RichDeveloperGutterWidget = 11]", "RichDeveloperGutterWidget", "assign");
    n[n.textDeeplinksWidget = cc11001100_hook("n.textDeeplinksWidget", 12, "assign")] = cc11001100_hook("n[n.textDeeplinksWidget = 12]", "textDeeplinksWidget", "assign");
    n[n.shopWidget = cc11001100_hook("n.shopWidget", 13, "assign")] = cc11001100_hook("n[n.shopWidget = 13]", "shopWidget", "assign");
    n[n.nowCastIcon = cc11001100_hook("n.nowCastIcon", 14, "assign")] = cc11001100_hook("n[n.nowCastIcon = 14]", "nowCastIcon", "assign");
    n[n.destLGW = cc11001100_hook("n.destLGW", 15, "assign")] = cc11001100_hook("n[n.destLGW = 15]", "destLGW", "assign");
    n[n.XMOfferWidget = cc11001100_hook("n.XMOfferWidget", 16, "assign")] = cc11001100_hook("n[n.XMOfferWidget = 16]", "XMOfferWidget", "assign");
    n[n.GigServicesWidget = cc11001100_hook("n.GigServicesWidget", 17, "assign")] = cc11001100_hook("n[n.GigServicesWidget = 17]", "GigServicesWidget", "assign");
    n[n.AirlineWidget = cc11001100_hook("n.AirlineWidget", 18, "assign")] = cc11001100_hook("n[n.AirlineWidget = 18]", "AirlineWidget", "assign");
    n[n.FlightWidget = cc11001100_hook("n.FlightWidget", 19, "assign")] = cc11001100_hook("n[n.FlightWidget = 19]", "FlightWidget", "assign");
    n[n.HealthWidget = cc11001100_hook("n.HealthWidget", 20, "assign")] = cc11001100_hook("n[n.HealthWidget = 20]", "HealthWidget", "assign");
    n[n.TopicsLGWidget = cc11001100_hook("n.TopicsLGWidget", 21, "assign")] = cc11001100_hook("n[n.TopicsLGWidget = 21]", "TopicsLGWidget", "assign");
    n[n.PromotionalGutterWidget = cc11001100_hook("n.PromotionalGutterWidget", 22, "assign")] = cc11001100_hook("n[n.PromotionalGutterWidget = 22]", "PromotionalGutterWidget", "assign");
    n[n.AutosMarketplaceWidget = cc11001100_hook("n.AutosMarketplaceWidget", 23, "assign")] = cc11001100_hook("n[n.AutosMarketplaceWidget = 23]", "AutosMarketplaceWidget", "assign");
    n[n.StockGutterWidget = cc11001100_hook("n.StockGutterWidget", 24, "assign")] = cc11001100_hook("n[n.StockGutterWidget = 24]", "StockGutterWidget", "assign");
    n[n.localWidget = cc11001100_hook("n.localWidget", 25, "assign")] = cc11001100_hook("n[n.localWidget = 25]", "localWidget", "assign");
    n[n.wikiWidget = cc11001100_hook("n.wikiWidget", 26, "assign")] = cc11001100_hook("n[n.wikiWidget = 26]", "wikiWidget", "assign");
    n[n.wptMagazineWikiWidget = cc11001100_hook("n.wptMagazineWikiWidget", 27, "assign")] = cc11001100_hook("n[n.wptMagazineWikiWidget = 27]", "wptMagazineWikiWidget", "assign");
    n[n.lgWptNav = cc11001100_hook("n.lgWptNav", 28, "assign")] = cc11001100_hook("n[n.lgWptNav = 28]", "lgWptNav", "assign");
    n[n.lgGenSERP = cc11001100_hook("n.lgGenSERP", 29, "assign")] = cc11001100_hook("n[n.lgGenSERP = 29]", "lgGenSERP", "assign");
    n[n.newsWidget = cc11001100_hook("n.newsWidget", 30, "assign")] = cc11001100_hook("n[n.newsWidget = 30]", "newsWidget", "assign");
    n[n.richCalendarWidget = cc11001100_hook("n.richCalendarWidget", 31, "assign")] = cc11001100_hook("n[n.richCalendarWidget = 31]", "richCalendarWidget", "assign");
    n[n.richcardWidget = cc11001100_hook("n.richcardWidget", 32, "assign")] = cc11001100_hook("n[n.richcardWidget = 32]", "richcardWidget", "assign");
    n[n.lgImgAns = cc11001100_hook("n.lgImgAns", 33, "assign")] = cc11001100_hook("n[n.lgImgAns = 33]", "lgImgAns", "assign");
    n[n.lgVidAns = cc11001100_hook("n.lgVidAns", 34, "assign")] = cc11001100_hook("n[n.lgVidAns = 34]", "lgVidAns", "assign");
    n[n.lgAnsFeedbackMop = cc11001100_hook("n.lgAnsFeedbackMop", 35, "assign")] = cc11001100_hook("n[n.lgAnsFeedbackMop = 35]", "lgAnsFeedbackMop", "assign");
    n[n.lgAnsFeedbackTop = cc11001100_hook("n.lgAnsFeedbackTop", 36, "assign")] = cc11001100_hook("n[n.lgAnsFeedbackTop = 36]", "lgAnsFeedbackTop", "assign");
    n[n.segmentWidget = cc11001100_hook("n.segmentWidget", 37, "assign")] = cc11001100_hook("n[n.segmentWidget = 37]", "segmentWidget", "assign");
    n[n.SportsLGWidget = cc11001100_hook("n.SportsLGWidget", 38, "assign")] = cc11001100_hook("n[n.SportsLGWidget = 38]", "SportsLGWidget", "assign");
    n[n.flightTimeWidget = cc11001100_hook("n.flightTimeWidget", 39, "assign")] = cc11001100_hook("n[n.flightTimeWidget = 39]", "flightTimeWidget", "assign");
    n[n.sydneyLetsChatWidget = cc11001100_hook("n.sydneyLetsChatWidget", 40, "assign")] = cc11001100_hook("n[n.sydneyLetsChatWidget = 40]", "sydneyLetsChatWidget", "assign");
    n[n.lgWeather = cc11001100_hook("n.lgWeather", 41, "assign")] = cc11001100_hook("n[n.lgWeather = 41]", "lgWeather", "assign");
    n[n.whereToWatchWidget = cc11001100_hook("n.whereToWatchWidget", 42, "assign")] = cc11001100_hook("n[n.whereToWatchWidget = 42]", "whereToWatchWidget", "assign");
    n[n.lgShopFilter = cc11001100_hook("n.lgShopFilter", 43, "assign")] = cc11001100_hook("n[n.lgShopFilter = 43]", "lgShopFilter", "assign");
    n[n.lgWeatherAds = cc11001100_hook("n.lgWeatherAds", 44, "assign")] = cc11001100_hook("n[n.lgWeatherAds = 44]", "lgWeatherAds", "assign");
    n[n.lgCompUpsell = cc11001100_hook("n.lgCompUpsell", 45, "assign")] = cc11001100_hook("n[n.lgCompUpsell = 45]", "lgCompUpsell", "assign");
    n[n.listNavWidget = cc11001100_hook("n.listNavWidget", 46, "assign")] = cc11001100_hook("n[n.listNavWidget = 46]", "listNavWidget", "assign");
    n[n.listNavPAWidget = cc11001100_hook("n.listNavPAWidget", 47, "assign")] = cc11001100_hook("n[n.listNavPAWidget = 47]", "listNavPAWidget", "assign");
    n[n.savingsAnswerNav = cc11001100_hook("n.savingsAnswerNav", 48, "assign")] = cc11001100_hook("n[n.savingsAnswerNav = 48]", "savingsAnswerNav", "assign");
    n[n.ShoppingAnswerPALGFilter = cc11001100_hook("n.ShoppingAnswerPALGFilter", 49, "assign")] = cc11001100_hook("n[n.ShoppingAnswerPALGFilter = 49]", "ShoppingAnswerPALGFilter", "assign");
    n[n.ShoppingAnswerMALGFilter = cc11001100_hook("n.ShoppingAnswerMALGFilter", 50, "assign")] = cc11001100_hook("n[n.ShoppingAnswerMALGFilter = 50]", "ShoppingAnswerMALGFilter", "assign");
    n[n.ShoppingAnswerLGFilter = cc11001100_hook("n.ShoppingAnswerLGFilter", 51, "assign")] = cc11001100_hook("n[n.ShoppingAnswerLGFilter = 51]", "ShoppingAnswerLGFilter", "assign");
    n[n.lgCashback = cc11001100_hook("n.lgCashback", 52, "assign")] = cc11001100_hook("n[n.lgCashback = 52]", "lgCashback", "assign");
    n[n.brandUpSell = cc11001100_hook("n.brandUpSell", 53, "assign")] = cc11001100_hook("n[n.brandUpSell = 53]", "brandUpSell", "assign");
    n[n.sapphireUpsell = cc11001100_hook("n.sapphireUpsell", 54, "assign")] = cc11001100_hook("n[n.sapphireUpsell = 54]", "sapphireUpsell", "assign");
    n[n.lgJobListings = cc11001100_hook("n.lgJobListings", 55, "assign")] = cc11001100_hook("n[n.lgJobListings = 55]", "lgJobListings", "assign");
    n[n.LGCashbackEnrollWidget = cc11001100_hook("n.LGCashbackEnrollWidget", 56, "assign")] = cc11001100_hook("n[n.LGCashbackEnrollWidget = 56]", "LGCashbackEnrollWidget", "assign");
    n[n.AlgoWidget_0 = cc11001100_hook("n.AlgoWidget_0", 57, "assign")] = cc11001100_hook("n[n.AlgoWidget_0 = 57]", "AlgoWidget_0", "assign");
    n[n.AlgoWidget_1 = cc11001100_hook("n.AlgoWidget_1", 58, "assign")] = cc11001100_hook("n[n.AlgoWidget_1 = 58]", "AlgoWidget_1", "assign");
    n[n.AlgoWidget_2 = cc11001100_hook("n.AlgoWidget_2", 59, "assign")] = cc11001100_hook("n[n.AlgoWidget_2 = 59]", "AlgoWidget_2", "assign");
    n[n.AlgoWidget_3 = cc11001100_hook("n.AlgoWidget_3", 60, "assign")] = cc11001100_hook("n[n.AlgoWidget_3 = 60]", "AlgoWidget_3", "assign");
    n[n.AlgoWidget_4 = cc11001100_hook("n.AlgoWidget_4", 61, "assign")] = cc11001100_hook("n[n.AlgoWidget_4 = 61]", "AlgoWidget_4", "assign");
    n[n.AlgoWidget_5 = cc11001100_hook("n.AlgoWidget_5", 62, "assign")] = cc11001100_hook("n[n.AlgoWidget_5 = 62]", "AlgoWidget_5", "assign");
    n[n.AlgoWidget_6 = cc11001100_hook("n.AlgoWidget_6", 63, "assign")] = cc11001100_hook("n[n.AlgoWidget_6 = 63]", "AlgoWidget_6", "assign");
    n[n.AlgoWidget_7 = cc11001100_hook("n.AlgoWidget_7", 64, "assign")] = cc11001100_hook("n[n.AlgoWidget_7 = 64]", "AlgoWidget_7", "assign");
    n[n.AlgoWidget_8 = cc11001100_hook("n.AlgoWidget_8", 65, "assign")] = cc11001100_hook("n[n.AlgoWidget_8 = 65]", "AlgoWidget_8", "assign");
    n[n.AlgoWidget_9 = cc11001100_hook("n.AlgoWidget_9", 66, "assign")] = cc11001100_hook("n[n.AlgoWidget_9 = 66]", "AlgoWidget_9", "assign");
    n[n.lgLocalListing = cc11001100_hook("n.lgLocalListing", 67, "assign")] = cc11001100_hook("n[n.lgLocalListing = 67]", "lgLocalListing", "assign");
    n[n.UnifiedAnswerGutterWidget = cc11001100_hook("n.UnifiedAnswerGutterWidget", 68, "assign")] = cc11001100_hook("n[n.UnifiedAnswerGutterWidget = 68]", "UnifiedAnswerGutterWidget", "assign");
    n[n.lgHighBingAtWork = cc11001100_hook("n.lgHighBingAtWork", 69, "assign")] = cc11001100_hook("n[n.lgHighBingAtWork = 69]", "lgHighBingAtWork", "assign");
    n[n.lgMedBingAtWork = cc11001100_hook("n.lgMedBingAtWork", 70, "assign")] = cc11001100_hook("n[n.lgMedBingAtWork = 70]", "lgMedBingAtWork", "assign");
    n[n.lgLcgBingAtWork = cc11001100_hook("n.lgLcgBingAtWork", 71, "assign")] = cc11001100_hook("n[n.lgLcgBingAtWork = 71]", "lgLcgBingAtWork", "assign");
  }(o || (o = cc11001100_hook("o", {}, "assign"))), function (n) {
    n[n.lgCreator = cc11001100_hook("n.lgCreator", 1, "assign")] = cc11001100_hook("n[n.lgCreator = 1]", "lgCreator", "assign");
    n[n.EdgeWorkspacesWidget = cc11001100_hook("n.EdgeWorkspacesWidget", 2, "assign")] = cc11001100_hook("n[n.EdgeWorkspacesWidget = 2]", "EdgeWorkspacesWidget", "assign");
    n[n.lgDarkModeUpsell = cc11001100_hook("n.lgDarkModeUpsell", 3, "assign")] = cc11001100_hook("n[n.lgDarkModeUpsell = 3]", "lgDarkModeUpsell", "assign");
    n[n.AutosSerpWPFilters = cc11001100_hook("n.AutosSerpWPFilters", 4, "assign")] = cc11001100_hook("n[n.AutosSerpWPFilters = 4]", "AutosSerpWPFilters", "assign");
    n[n.shopWPFilters = cc11001100_hook("n.shopWPFilters", 5, "assign")] = cc11001100_hook("n[n.shopWPFilters = 5]", "shopWPFilters", "assign");
    n[n.shopFiltersWidget = cc11001100_hook("n.shopFiltersWidget", 6, "assign")] = cc11001100_hook("n[n.shopFiltersWidget = 6]", "shopFiltersWidget", "assign");
    n[n.lgWeatherUpsell = cc11001100_hook("n.lgWeatherUpsell", 7, "assign")] = cc11001100_hook("n[n.lgWeatherUpsell = 7]", "lgWeatherUpsell", "assign");
    n[n.lgRecipe = cc11001100_hook("n.lgRecipe", 8, "assign")] = cc11001100_hook("n[n.lgRecipe = 8]", "lgRecipe", "assign");
    n[n.LeftGutterDisambig = cc11001100_hook("n.LeftGutterDisambig", 9, "assign")] = cc11001100_hook("n[n.LeftGutterDisambig = 9]", "LeftGutterDisambig", "assign");
    n[n.LGPopDomains = cc11001100_hook("n.LGPopDomains", 10, "assign")] = cc11001100_hook("n[n.LGPopDomains = 10]", "LGPopDomains", "assign");
    n[n.shopPageWidget = cc11001100_hook("n.shopPageWidget", 11, "assign")] = cc11001100_hook("n[n.shopPageWidget = 11]", "shopPageWidget", "assign");
  }(s || (s = cc11001100_hook("s", {}, "assign"))), function (n) {
    n[n.shopFiltersWidget = cc11001100_hook("n.shopFiltersWidget", 1, "assign")] = cc11001100_hook("n[n.shopFiltersWidget = 1]", "shopFiltersWidget", "assign");
    n[n.AutosSerpWPFilters = cc11001100_hook("n.AutosSerpWPFilters", 2, "assign")] = cc11001100_hook("n[n.AutosSerpWPFilters = 2]", "AutosSerpWPFilters", "assign");
    n[n.shopWPFilters = cc11001100_hook("n.shopWPFilters", 3, "assign")] = cc11001100_hook("n[n.shopWPFilters = 3]", "shopWPFilters", "assign");
  }(it || (it = cc11001100_hook("it", {}, "assign"))), function (n) {
    n[n.destLGW = cc11001100_hook("n.destLGW", 1, "assign")] = cc11001100_hook("n[n.destLGW = 1]", "destLGW", "assign");
    n[n.lgDarkModeUpsell = cc11001100_hook("n.lgDarkModeUpsell", 2, "assign")] = cc11001100_hook("n[n.lgDarkModeUpsell = 2]", "lgDarkModeUpsell", "assign");
    n[n.FlightWidget = cc11001100_hook("n.FlightWidget", 3, "assign")] = cc11001100_hook("n[n.FlightWidget = 3]", "FlightWidget", "assign");
    n[n.AirlineWidget = cc11001100_hook("n.AirlineWidget", 4, "assign")] = cc11001100_hook("n[n.AirlineWidget = 4]", "AirlineWidget", "assign");
    n[n.wikiWidget = cc11001100_hook("n.wikiWidget", 5, "assign")] = cc11001100_hook("n[n.wikiWidget = 5]", "wikiWidget", "assign");
    n[n.HealthWidget = cc11001100_hook("n.HealthWidget", 6, "assign")] = cc11001100_hook("n[n.HealthWidget = 6]", "HealthWidget", "assign");
    n[n.TopicsLGWidget = cc11001100_hook("n.TopicsLGWidget", 7, "assign")] = cc11001100_hook("n[n.TopicsLGWidget = 7]", "TopicsLGWidget", "assign");
    n[n.wptMagazineWikiWidget = cc11001100_hook("n.wptMagazineWikiWidget", 8, "assign")] = cc11001100_hook("n[n.wptMagazineWikiWidget = 8]", "wptMagazineWikiWidget", "assign");
    n[n.lgWptNav = cc11001100_hook("n.lgWptNav", 9, "assign")] = cc11001100_hook("n[n.lgWptNav = 9]", "lgWptNav", "assign");
    n[n.lgGenSERP = cc11001100_hook("n.lgGenSERP", 10, "assign")] = cc11001100_hook("n[n.lgGenSERP = 10]", "lgGenSERP", "assign");
    n[n.RichDeveloperGutterWidget = cc11001100_hook("n.RichDeveloperGutterWidget", 11, "assign")] = cc11001100_hook("n[n.RichDeveloperGutterWidget = 11]", "RichDeveloperGutterWidget", "assign");
    n[n.segmentWidget = cc11001100_hook("n.segmentWidget", 12, "assign")] = cc11001100_hook("n[n.segmentWidget = 12]", "segmentWidget", "assign");
    n[n.XMOfferWidget = cc11001100_hook("n.XMOfferWidget", 13, "assign")] = cc11001100_hook("n[n.XMOfferWidget = 13]", "XMOfferWidget", "assign");
    n[n.textDeeplinksWidget = cc11001100_hook("n.textDeeplinksWidget", 14, "assign")] = cc11001100_hook("n[n.textDeeplinksWidget = 14]", "textDeeplinksWidget", "assign");
    n[n.lgCashback = cc11001100_hook("n.lgCashback", 15, "assign")] = cc11001100_hook("n[n.lgCashback = 15]", "lgCashback", "assign");
    n[n.UnifiedAnswerGutterWidget = cc11001100_hook("n.UnifiedAnswerGutterWidget", 16, "assign")] = cc11001100_hook("n[n.UnifiedAnswerGutterWidget = 16]", "UnifiedAnswerGutterWidget", "assign");
    n[n.HotelsLGWidget = cc11001100_hook("n.HotelsLGWidget", 17, "assign")] = cc11001100_hook("n[n.HotelsLGWidget = 17]", "HotelsLGWidget", "assign");
    n[n.GigServicesWidget = cc11001100_hook("n.GigServicesWidget", 18, "assign")] = cc11001100_hook("n[n.GigServicesWidget = 18]", "GigServicesWidget", "assign");
    n[n.richCalendarWidget = cc11001100_hook("n.richCalendarWidget", 19, "assign")] = cc11001100_hook("n[n.richCalendarWidget = 19]", "richCalendarWidget", "assign");
    n[n.lgImgAns = cc11001100_hook("n.lgImgAns", 20, "assign")] = cc11001100_hook("n[n.lgImgAns = 20]", "lgImgAns", "assign");
    n[n.lgVidAns = cc11001100_hook("n.lgVidAns", 21, "assign")] = cc11001100_hook("n[n.lgVidAns = 21]", "lgVidAns", "assign");
    n[n.lgLocalListing = cc11001100_hook("n.lgLocalListing", 22, "assign")] = cc11001100_hook("n[n.lgLocalListing = 22]", "lgLocalListing", "assign");
    n[n.AlgoWidget_0 = cc11001100_hook("n.AlgoWidget_0", 23, "assign")] = cc11001100_hook("n[n.AlgoWidget_0 = 23]", "AlgoWidget_0", "assign");
    n[n.AlgoWidget_1 = cc11001100_hook("n.AlgoWidget_1", 24, "assign")] = cc11001100_hook("n[n.AlgoWidget_1 = 24]", "AlgoWidget_1", "assign");
    n[n.AlgoWidget_2 = cc11001100_hook("n.AlgoWidget_2", 25, "assign")] = cc11001100_hook("n[n.AlgoWidget_2 = 25]", "AlgoWidget_2", "assign");
    n[n.AlgoWidget_3 = cc11001100_hook("n.AlgoWidget_3", 26, "assign")] = cc11001100_hook("n[n.AlgoWidget_3 = 26]", "AlgoWidget_3", "assign");
    n[n.AlgoWidget_4 = cc11001100_hook("n.AlgoWidget_4", 27, "assign")] = cc11001100_hook("n[n.AlgoWidget_4 = 27]", "AlgoWidget_4", "assign");
    n[n.AlgoWidget_5 = cc11001100_hook("n.AlgoWidget_5", 28, "assign")] = cc11001100_hook("n[n.AlgoWidget_5 = 28]", "AlgoWidget_5", "assign");
    n[n.AlgoWidget_6 = cc11001100_hook("n.AlgoWidget_6", 29, "assign")] = cc11001100_hook("n[n.AlgoWidget_6 = 29]", "AlgoWidget_6", "assign");
    n[n.AlgoWidget_7 = cc11001100_hook("n.AlgoWidget_7", 30, "assign")] = cc11001100_hook("n[n.AlgoWidget_7 = 30]", "AlgoWidget_7", "assign");
    n[n.AlgoWidget_8 = cc11001100_hook("n.AlgoWidget_8", 31, "assign")] = cc11001100_hook("n[n.AlgoWidget_8 = 31]", "AlgoWidget_8", "assign");
    n[n.AlgoWidget_9 = cc11001100_hook("n.AlgoWidget_9", 32, "assign")] = cc11001100_hook("n[n.AlgoWidget_9 = 32]", "AlgoWidget_9", "assign");
    n[n.lgLcgBingAtWork = cc11001100_hook("n.lgLcgBingAtWork", 33, "assign")] = cc11001100_hook("n[n.lgLcgBingAtWork = 33]", "lgLcgBingAtWork", "assign");
    n[n.textAdsWidget = cc11001100_hook("n.textAdsWidget", 34, "assign")] = cc11001100_hook("n[n.textAdsWidget = 34]", "textAdsWidget", "assign");
    n[n.lgHighBingAtWork = cc11001100_hook("n.lgHighBingAtWork", 35, "assign")] = cc11001100_hook("n[n.lgHighBingAtWork = 35]", "lgHighBingAtWork", "assign");
    n[n.lgMedBingAtWork = cc11001100_hook("n.lgMedBingAtWork", 36, "assign")] = cc11001100_hook("n[n.lgMedBingAtWork = 36]", "lgMedBingAtWork", "assign");
    n[n.savingsAnswerNav = cc11001100_hook("n.savingsAnswerNav", 37, "assign")] = cc11001100_hook("n[n.savingsAnswerNav = 37]", "savingsAnswerNav", "assign");
    n[n.lgRecipe = cc11001100_hook("n.lgRecipe", 38, "assign")] = cc11001100_hook("n[n.lgRecipe = 38]", "lgRecipe", "assign");
    n[n.lgJobListings = cc11001100_hook("n.lgJobListings", 39, "assign")] = cc11001100_hook("n[n.lgJobListings = 39]", "lgJobListings", "assign");
    n[n.lgRealEstate = cc11001100_hook("n.lgRealEstate", 40, "assign")] = cc11001100_hook("n[n.lgRealEstate = 40]", "lgRealEstate", "assign");
    n[n.lgRealEstateSA = cc11001100_hook("n.lgRealEstateSA", 41, "assign")] = cc11001100_hook("n[n.lgRealEstateSA = 41]", "lgRealEstateSA", "assign");
    n[n.shopWPFilters = cc11001100_hook("n.shopWPFilters", 42, "assign")] = cc11001100_hook("n[n.shopWPFilters = 42]", "shopWPFilters", "assign");
    n[n.ShoppingAnswerPALGFilter = cc11001100_hook("n.ShoppingAnswerPALGFilter", 43, "assign")] = cc11001100_hook("n[n.ShoppingAnswerPALGFilter = 43]", "ShoppingAnswerPALGFilter", "assign");
    n[n.ShoppingAnswerMALGFilter = cc11001100_hook("n.ShoppingAnswerMALGFilter", 44, "assign")] = cc11001100_hook("n[n.ShoppingAnswerMALGFilter = 44]", "ShoppingAnswerMALGFilter", "assign");
    n[n.ShoppingAnswerLGFilter = cc11001100_hook("n.ShoppingAnswerLGFilter", 45, "assign")] = cc11001100_hook("n[n.ShoppingAnswerLGFilter = 45]", "ShoppingAnswerLGFilter", "assign");
    n[n.AutosSerpWPFilters = cc11001100_hook("n.AutosSerpWPFilters", 46, "assign")] = cc11001100_hook("n[n.AutosSerpWPFilters = 46]", "AutosSerpWPFilters", "assign");
    n[n.EdgeWorkspacesWidget = cc11001100_hook("n.EdgeWorkspacesWidget", 47, "assign")] = cc11001100_hook("n[n.EdgeWorkspacesWidget = 47]", "EdgeWorkspacesWidget", "assign");
    n[n.SportsLGWidget = cc11001100_hook("n.SportsLGWidget", 48, "assign")] = cc11001100_hook("n[n.SportsLGWidget = 48]", "SportsLGWidget", "assign");
  }(rt || (rt = cc11001100_hook("rt", {}, "assign")));
  var ct = cc11001100_hook("ct", {
      wholepgtemp: cc11001100_hook("wholepgtemp", "wpt_hdrs", "object-key-init"),
      LeftGutterDisambig: cc11001100_hook("LeftGutterDisambig", "b_lgd", "object-key-init"),
      relatedSearches: cc11001100_hook("relatedSearches", "b_lgrs", "object-key-init"),
      miniSidebar: cc11001100_hook("miniSidebar", "mnbr_btnCtr", "object-key-init")
    }, "var-init"),
    t = cc11001100_hook("t", {
      imbeds: {},
      shared: {}
    }, "var-init"),
    v = cc11001100_hook("v", {
      EdgeWorkspacesWidget: cc11001100_hook("EdgeWorkspacesWidget", __assign({}, t), "object-key-init"),
      wholepgtemp: cc11001100_hook("wholepgtemp", __assign({}, t), "object-key-init"),
      textAdsWidget: cc11001100_hook("textAdsWidget", __assign({}, t), "object-key-init"),
      productAdsFilterLGW: cc11001100_hook("productAdsFilterLGW", __assign({}, t), "object-key-init"),
      textDeeplinksWidget: cc11001100_hook("textDeeplinksWidget", __assign({}, t), "object-key-init"),
      LGCashbackEnrollWidget: cc11001100_hook("LGCashbackEnrollWidget", __assign({}, t), "object-key-init"),
      financeWidget: cc11001100_hook("financeWidget", __assign({}, t), "object-key-init"),
      shopWidget: cc11001100_hook("shopWidget", __assign({}, t), "object-key-init"),
      shopPageWidget: cc11001100_hook("shopPageWidget", __assign({}, t), "object-key-init"),
      shopWPFilters: cc11001100_hook("shopWPFilters", __assign({}, t), "object-key-init"),
      AutosSerpWPFilters: cc11001100_hook("AutosSerpWPFilters", __assign({}, t), "object-key-init"),
      shopFiltersWidget: cc11001100_hook("shopFiltersWidget", __assign({}, t), "object-key-init"),
      lgRealEstate: cc11001100_hook("lgRealEstate", __assign({}, t), "object-key-init"),
      lgRealEstateSA: cc11001100_hook("lgRealEstateSA", __assign({}, t), "object-key-init"),
      lgREAds: cc11001100_hook("lgREAds", __assign({}, t), "object-key-init"),
      lgAds: cc11001100_hook("lgAds", __assign({}, t), "object-key-init"),
      lgTravelAds: cc11001100_hook("lgTravelAds", __assign({}, t), "object-key-init"),
      HotelsLGWidget: cc11001100_hook("HotelsLGWidget", __assign({}, t), "object-key-init"),
      nowCastIcon: cc11001100_hook("nowCastIcon", __assign({}, t), "object-key-init"),
      destLGW: cc11001100_hook("destLGW", __assign({}, t), "object-key-init"),
      XMOfferWidget: cc11001100_hook("XMOfferWidget", __assign({}, t), "object-key-init"),
      GigServicesWidget: cc11001100_hook("GigServicesWidget", __assign({}, t), "object-key-init"),
      FlightWidget: cc11001100_hook("FlightWidget", __assign({}, t), "object-key-init"),
      AirlineWidget: cc11001100_hook("AirlineWidget", __assign({}, t), "object-key-init"),
      HealthWidget: cc11001100_hook("HealthWidget", __assign({}, t), "object-key-init"),
      TopicsLGWidget: cc11001100_hook("TopicsLGWidget", __assign({}, t), "object-key-init"),
      localWidget: cc11001100_hook("localWidget", __assign({}, t), "object-key-init"),
      wikiWidget: cc11001100_hook("wikiWidget", __assign({}, t), "object-key-init"),
      wptMagazineWikiWidget: cc11001100_hook("wptMagazineWikiWidget", __assign({}, t), "object-key-init"),
      lgWptNav: cc11001100_hook("lgWptNav", __assign({}, t), "object-key-init"),
      lgGenSERP: cc11001100_hook("lgGenSERP", __assign({}, t), "object-key-init"),
      newsWidget: cc11001100_hook("newsWidget", __assign({}, t), "object-key-init"),
      richCalendarWidget: cc11001100_hook("richCalendarWidget", __assign({}, t), "object-key-init"),
      richcardWidget: cc11001100_hook("richcardWidget", __assign({}, t), "object-key-init"),
      lgImgAns: cc11001100_hook("lgImgAns", __assign({}, t), "object-key-init"),
      lgVidAns: cc11001100_hook("lgVidAns", __assign({}, t), "object-key-init"),
      lgAnsFeedbackTop: cc11001100_hook("lgAnsFeedbackTop", __assign({}, t), "object-key-init"),
      lgAnsFeedbackMop: cc11001100_hook("lgAnsFeedbackMop", __assign({}, t), "object-key-init"),
      PromotionalGutterWidget: cc11001100_hook("PromotionalGutterWidget", __assign({}, t), "object-key-init"),
      StockGutterWidget: cc11001100_hook("StockGutterWidget", __assign({}, t), "object-key-init"),
      AutosMarketplaceWidget: cc11001100_hook("AutosMarketplaceWidget", __assign({}, t), "object-key-init"),
      LeftGutterDisambig: cc11001100_hook("LeftGutterDisambig", __assign({}, t), "object-key-init"),
      LGPopDomains: cc11001100_hook("LGPopDomains", __assign({}, t), "object-key-init"),
      relatedSearches: cc11001100_hook("relatedSearches", __assign({}, t), "object-key-init"),
      miniSidebar: cc11001100_hook("miniSidebar", __assign({}, t), "object-key-init"),
      LGOlympicMedals: cc11001100_hook("LGOlympicMedals", __assign({}, t), "object-key-init"),
      segmentWidget: cc11001100_hook("segmentWidget", __assign({}, t), "object-key-init"),
      lgRecipe: cc11001100_hook("lgRecipe", __assign({}, t), "object-key-init"),
      SportsLGWidget: cc11001100_hook("SportsLGWidget", __assign({}, t), "object-key-init"),
      flightTimeWidget: cc11001100_hook("flightTimeWidget", __assign({}, t), "object-key-init"),
      sydneyLetsChatWidget: cc11001100_hook("sydneyLetsChatWidget", __assign({}, t), "object-key-init"),
      lgWeather: cc11001100_hook("lgWeather", __assign({}, t), "object-key-init"),
      lgWeatherUpsell: cc11001100_hook("lgWeatherUpsell", __assign({}, t), "object-key-init"),
      lgDarkModeUpsell: cc11001100_hook("lgDarkModeUpsell", __assign({}, t), "object-key-init"),
      whereToWatchWidget: cc11001100_hook("whereToWatchWidget", __assign({}, t), "object-key-init"),
      lgWeatherAds: cc11001100_hook("lgWeatherAds", __assign({}, t), "object-key-init"),
      lgCompUpsell: cc11001100_hook("lgCompUpsell", __assign({}, t), "object-key-init"),
      RichDeveloperGutterWidget: cc11001100_hook("RichDeveloperGutterWidget", __assign({}, t), "object-key-init"),
      listNavPAWidget: cc11001100_hook("listNavPAWidget", __assign({}, t), "object-key-init"),
      listNavWidget: cc11001100_hook("listNavWidget", __assign({}, t), "object-key-init"),
      lgShopFilter: cc11001100_hook("lgShopFilter", __assign({}, t), "object-key-init"),
      savingsAnswerNav: cc11001100_hook("savingsAnswerNav", __assign({}, t), "object-key-init"),
      brandUpSell: cc11001100_hook("brandUpSell", __assign({}, t), "object-key-init"),
      lgCreator: cc11001100_hook("lgCreator", __assign({}, t), "object-key-init"),
      sapphireUpsell: cc11001100_hook("sapphireUpsell", __assign({}, t), "object-key-init"),
      lgJobListings: cc11001100_hook("lgJobListings", __assign({}, t), "object-key-init"),
      lgCashback: cc11001100_hook("lgCashback", __assign({}, t), "object-key-init"),
      AlgoWidget_0: cc11001100_hook("AlgoWidget_0", __assign({}, t), "object-key-init"),
      AlgoWidget_1: cc11001100_hook("AlgoWidget_1", __assign({}, t), "object-key-init"),
      AlgoWidget_2: cc11001100_hook("AlgoWidget_2", __assign({}, t), "object-key-init"),
      AlgoWidget_3: cc11001100_hook("AlgoWidget_3", __assign({}, t), "object-key-init"),
      AlgoWidget_4: cc11001100_hook("AlgoWidget_4", __assign({}, t), "object-key-init"),
      AlgoWidget_5: cc11001100_hook("AlgoWidget_5", __assign({}, t), "object-key-init"),
      AlgoWidget_6: cc11001100_hook("AlgoWidget_6", __assign({}, t), "object-key-init"),
      AlgoWidget_7: cc11001100_hook("AlgoWidget_7", __assign({}, t), "object-key-init"),
      AlgoWidget_8: cc11001100_hook("AlgoWidget_8", __assign({}, t), "object-key-init"),
      AlgoWidget_9: cc11001100_hook("AlgoWidget_9", __assign({}, t), "object-key-init"),
      lgLocalListing: cc11001100_hook("lgLocalListing", __assign({}, t), "object-key-init"),
      UnifiedAnswerGutterWidget: cc11001100_hook("UnifiedAnswerGutterWidget", __assign({}, t), "object-key-init"),
      lgHighBingAtWork: cc11001100_hook("lgHighBingAtWork", __assign({}, t), "object-key-init"),
      lgMedBingAtWork: cc11001100_hook("lgMedBingAtWork", __assign({}, t), "object-key-init"),
      lgLcgBingAtWork: cc11001100_hook("lgLcgBingAtWork", __assign({}, t), "object-key-init"),
      ShoppingAnswerPALGFilter: cc11001100_hook("ShoppingAnswerPALGFilter", __assign({}, t), "object-key-init"),
      ShoppingAnswerMALGFilter: cc11001100_hook("ShoppingAnswerMALGFilter", __assign({}, t), "object-key-init"),
      ShoppingAnswerLGFilter: cc11001100_hook("ShoppingAnswerLGFilter", __assign({}, t), "object-key-init")
    }, "var-init"),
    lt = cc11001100_hook("lt", {}, "var-init"),
    u = cc11001100_hook("u", {}, "var-init"),
    i = cc11001100_hook("i", [], "var-init"),
    ti = cc11001100_hook("ti", "lgImbedEle", "var-init"),
    h = cc11001100_hook("h", "lgRender", "var-init"),
    ii = cc11001100_hook("ii", "lgUpdateRegisteredMap", "var-init"),
    ri = cc11001100_hook("ri", "SydAddCarousel", "var-init"),
    ui = cc11001100_hook("ui", 92, "var-init"),
    y = cc11001100_hook("y", 32, "var-init"),
    c = cc11001100_hook("c", {}, "var-init"),
    p = cc11001100_hook("p", {}, "var-init"),
    b = cc11001100_hook("b", {}, "var-init"),
    k = cc11001100_hook("k", _ge("b_header"), "var-init"),
    w = cc11001100_hook("w", _ge("b_pole"), "var-init"),
    ut = cc11001100_hook("ut", _ge("b_topw"), "var-init"),
    fi = cc11001100_hook("fi", !0, "var-init"),
    ft = cc11001100_hook("ft", {
      pole: {
        "class": cc11001100_hook("class", ".b_pole", "object-key-init")
      },
      top: {
        classes: cc11001100_hook("classes", [".b_top", ".b_adTop"], "object-key-init")
      },
      magazine: {
        "class": cc11001100_hook("class", ".b_wpt_container", "object-key-init")
      },
      magazineParent: {
        "class": cc11001100_hook("class", ".b_sharedTopWidget", "object-key-init")
      }
    }, "var-init"),
    d = cc11001100_hook("d", 1, "var-init"),
    l = cc11001100_hook("l", null, "var-init"),
    r = cc11001100_hook("r", null, "var-init"),
    a = cc11001100_hook("a", null, "var-init"),
    et = cc11001100_hook("et", !1, "var-init"),
    g = cc11001100_hook("g", !1, "var-init"),
    nt = cc11001100_hook("nt", [], "var-init"),
    at = cc11001100_hook("at", !1, "var-init");
  n.getContainerId = cc11001100_hook("n.getContainerId", f, "assign");
  n.getRegisteredAnsWidgets = cc11001100_hook("n.getRegisteredAnsWidgets", ai, "assign");
  n.alignPageWid = cc11001100_hook("n.alignPageWid", kt, "assign");
  n.setCallback = cc11001100_hook("n.setCallback", vi, "assign");
  n.hasSpaceBelow = cc11001100_hook("n.hasSpaceBelow", yi, "assign");
  n.getTopForPageWid = cc11001100_hook("n.getTopForPageWid", pi, "assign");
  n.getTopForAnsWid = cc11001100_hook("n.getTopForAnsWid", wi, "assign");
  n.registerFeature = cc11001100_hook("n.registerFeature", bi, "assign");
  n.isRenderFeature = cc11001100_hook("n.isRenderFeature", ki, "assign");
  n.isImbeddedFeature = cc11001100_hook("n.isImbeddedFeature", di, "assign");
  n.getImbeddedElement = cc11001100_hook("n.getImbeddedElement", gi, "assign");
  n.setImbeddedElement = cc11001100_hook("n.setImbeddedElement", nr, "assign");
  n.getInstVals = cc11001100_hook("n.getInstVals", tr, "assign");
  n.isShowSelectedAns = cc11001100_hook("n.isShowSelectedAns", dt, "assign");
  n.instLogError = cc11001100_hook("n.instLogError", ht, "assign");
  n.instLogClick = cc11001100_hook("n.instLogClick", ur, "assign");
  n.instLogHover = cc11001100_hook("n.instLogHover", fr, "assign");
  n.instLogRender = cc11001100_hook("n.instLogRender", er, "assign");
  n.instLog = cc11001100_hook("n.instLog", tt, "assign");
  n.removeWidget = cc11001100_hook("n.removeWidget", or, "assign");
  ei();
  sj_evt.fire("LGUtilityLoaded");
})(LGUtility || (LGUtility = cc11001100_hook("LGUtility", {}, "assign")));