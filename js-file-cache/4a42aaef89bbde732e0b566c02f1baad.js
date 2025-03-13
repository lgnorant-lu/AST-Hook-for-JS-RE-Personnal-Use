/*!DisableJavascriptProfiler*/
var BM = cc11001100_hook("BM", BM || {}, "var-init");
BM.config = cc11001100_hook("BM.config", {
  B: {
    timeout: cc11001100_hook("timeout", 250, "object-key-init"),
    delay: cc11001100_hook("delay", 750, "object-key-init"),
    maxUrlLength: cc11001100_hook("maxUrlLength", 300, "object-key-init"),
    sendlimit: cc11001100_hook("sendlimit", 20, "object-key-init"),
    maxPayloadSize: cc11001100_hook("maxPayloadSize", 7e3, "object-key-init")
  },
  V: {
    distance: cc11001100_hook("distance", 20, "object-key-init")
  },
  N: {
    maxUrlLength: cc11001100_hook("maxUrlLength", 300, "object-key-init")
  },
  E: {
    buffer: cc11001100_hook("buffer", 30, "object-key-init"),
    timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
    maxUrlLength: cc11001100_hook("maxUrlLength", 300, "object-key-init")
  },
  C: {
    distance: cc11001100_hook("distance", 50, "object-key-init")
  },
  BD: {
    basic: cc11001100_hook("basic", 1, "object-key-init")
  }
}, "assign"), function (n) {
  function vt() {
    if (!document.querySelector || !document.querySelectorAll) {
      k({
        FN: cc11001100_hook("FN", "init", "object-key-init"),
        S: cc11001100_hook("S", "QuerySelector", "object-key-init")
      });
      return;
    }
    w = cc11001100_hook("w", {}, "assign");
    e = cc11001100_hook("e", [], "assign");
    ft = cc11001100_hook("ft", 1, "assign");
    ut = cc11001100_hook("ut", 0, "assign");
    rt = cc11001100_hook("rt", 0, "assign");
    o = cc11001100_hook("o", [], "assign");
    s = cc11001100_hook("s", 0, "assign");
    h = cc11001100_hook("h", !1, "assign");
    var n = cc11001100_hook("n", Math.floor(Math.random() * 1e4).toString(36), "var-init");
    t = cc11001100_hook("t", {
      P: {
        C: cc11001100_hook("C", 0, "object-key-init"),
        N: cc11001100_hook("N", 0, "object-key-init"),
        I: cc11001100_hook("I", n, "object-key-init"),
        S: cc11001100_hook("S", ei, "object-key-init"),
        M: cc11001100_hook("M", r, "object-key-init"),
        T: cc11001100_hook("T", 0, "object-key-init"),
        K: cc11001100_hook("K", r, "object-key-init"),
        F: cc11001100_hook("F", 0, "object-key-init")
      }
    }, "assign");
    pi();
  }
  function oi(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", {}, "var-init");
    for (var i in n) i.indexOf("_") !== 0 && (i in t && (n[i] !== t[i] || i === "i") ? (r[i] = cc11001100_hook("r[i]", t[i], "assign"), n[i] = cc11001100_hook("n[i]", t[i], "assign")) : r[i] = cc11001100_hook("r[i]", null, "assign"));
    return r;
  }
  function si(n) {
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", {}, "var-init");
    for (var t in n) n.hasOwnProperty(t) && (i[t] = cc11001100_hook("i[t]", n[t], "assign"));
    return i;
  }
  function b(n, t, r, u) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    if (!h) {
      k({
        FN: cc11001100_hook("FN", "snapshot", "object-key-init"),
        S: cc11001100_hook("S", n, "object-key-init")
      });
      return;
    }
    r = cc11001100_hook("r", r || ni, "assign");
    t = cc11001100_hook("t", t || !1, "assign");
    var f = cc11001100_hook("f", g() + r, "var-init");
    ot(o, n) === -1 && o.push(n);
    t ? (yt(), pt(t, u)) : f > s && (yt(), rt = cc11001100_hook("rt", sb_st(pt, r), "assign"), s = cc11001100_hook("s", f, "assign"));
  }
  function k(n) {
    cc11001100_hook("n", n, "function-parameter");
    var u = cc11001100_hook("u", {
        T: cc11001100_hook("T", "CI.BoxModelError", "object-key-init"),
        FID: cc11001100_hook("FID", "CI", "object-key-init"),
        Name: cc11001100_hook("Name", ht, "object-key-init"),
        SV: cc11001100_hook("SV", ct, "object-key-init"),
        P: cc11001100_hook("P", t && "P" in t ? d(t.P) : r, "object-key-init"),
        TS: cc11001100_hook("TS", f(), "object-key-init"),
        ST: cc11001100_hook("ST", v, "object-key-init")
      }, "var-init"),
      i,
      e;
    for (i in n) u[i] = cc11001100_hook("u[i]", n[i], "assign");
    e = cc11001100_hook("e", d(u), "assign");
    wt(e);
  }
  function yt() {
    s > 0 && (sb_ct(rt), s = cc11001100_hook("s", 0, "assign"));
  }
  function pt(n, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var r, u;
    if (!h) {
      k({
        FN: cc11001100_hook("FN", "send", "object-key-init"),
        S: cc11001100_hook("S", o.join(a[1]), "object-key-init")
      });
      return;
    }
    (ft <= ii || n) && (t.P.S = cc11001100_hook("t.P.S", o.join(a[1]), "assign"), t.P.F = cc11001100_hook("t.P.F", n ? 1 : 0, "assign"), t.P.M = cc11001100_hook("t.P.M", wi(), "assign"), r = cc11001100_hook("r", f(), "assign"), hi(), t.P.T = cc11001100_hook("t.P.T", f(), "assign"), t.P.N = cc11001100_hook("t.P.N", ft++, "assign"), t.P.C += cc11001100_hook("t.P.C", f() - r, "assign"), u = cc11001100_hook("u", li(t), "assign"), t.P.C = cc11001100_hook("t.P.C", 0, "assign"), wt(u, i), o = cc11001100_hook("o", [], "assign"), s = cc11001100_hook("s", 0, "assign"));
  }
  function hi() {
    h && st("compute");
  }
  function wt(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var s, r;
    if (kt(window, "Log2") && Log2.LogEvent && JSON) Log2.LogEvent("ClientInst", JSON.parse(n), null, null, null, null, null, null), t && t.force === !0 && Log2.ForceFlush(!0, t);else {
      var f = cc11001100_hook("f", "/fd/ls/lsp.aspx", "var-init"),
        e = cc11001100_hook("e", g(), "var-init"),
        h = cc11001100_hook("h", "<E><T>Event.ClientInst<\/T><IG>" + _G.IG + "<\/IG><TS>" + e + "<\/TS><D><![CDATA[[" + n.replace("]\]>", "]]]\]><![CDATA[>") + "]]\]><\/D><\/E>", "var-init"),
        u = cc11001100_hook("u", "<ClientInstRequest><Events>" + h + "<\/Events><STS>" + e + "<\/STS><\/ClientInstRequest>", "var-init"),
        o = cc11001100_hook("o", !1, "var-init");
      ci(t, u.length) && (s = cc11001100_hook("s", new Blob([u], {
        type: cc11001100_hook("type", "text/plain", "object-key-init")
      }), "assign"), o = cc11001100_hook("o", navigator[lt](f, s), "assign"));
      o || (r = cc11001100_hook("r", sj_gx(), "assign"), r.open("POST", f, !0), r.setRequestHeader("Content-Type", "text/xml"), r.send(u));
    }
    sj_evt.fire("BM", n);
  }
  function ci(n) {
    cc11001100_hook("n", n, "function-parameter");
    return !ui || !n || !n.useSendBeacon ? !1 : !0;
  }
  function d(n) {
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", r, "var-init"),
      u,
      t;
    for (u in n) if (t = cc11001100_hook("t", n[u], "assign"), t !== r) {
      var o = cc11001100_hook("o", typeof t == "number", "var-init"),
        f = cc11001100_hook("f", '"', "var-init"),
        e = cc11001100_hook("e", o || t.indexOf("{") === 0 ? r : f, "var-init");
      i += cc11001100_hook("i", f + u + f + ":" + e + t + e + ",", "assign");
    }
    return "{" + (i.length > 0 ? i.substr(0, i.length - 1) : r) + "}";
  }
  function li(n) {
    cc11001100_hook("n", n, "function-parameter");
    function k(n, t) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      function v(n) {
        cc11001100_hook("n", n, "function-parameter");
        return n.replace(fi, encodeURIComponent);
      }
      var h = cc11001100_hook("h", !0, "var-init"),
        f = cc11001100_hook("f", [], "var-init"),
        u,
        i,
        e,
        s,
        o,
        c,
        l;
      if (t = cc11001100_hook("t", t || 1, "assign"), !("_c" in n) || t <= 1) {
        for (u in n) if (i = cc11001100_hook("i", n[u], "assign"), s = cc11001100_hook("s", u.charCodeAt(0) >= 65 && u.charCodeAt(0) <= 90, "assign"), s && f.push(u), u.indexOf("_") === 0) continue;else typeof i == "number" ? (e = cc11001100_hook("e", parseInt(i.toString()).toString(36), "assign"), f.push(e), g(e)) : typeof i == "string" ? (e = cc11001100_hook("e", v(i), "assign"), f.push(e), g(e)) : i == null ? f.push(r) : typeof i == "object" && (o = cc11001100_hook("o", k(i, t + 1, u), "assign"), (o && o.length > 0 || s) && f.push(o), h = cc11001100_hook("h", !1, "assign"));
        h && (n._c = cc11001100_hook("n._c", !0, "assign"));
      }
      return c = cc11001100_hook("c", a[t], "assign"), l = cc11001100_hook("l", f.join(p + c + p), "assign"), l;
    }
    function g(n) {
      cc11001100_hook("n", n, "function-parameter");
      n.length > 2 && (n in v && ot(e, n) === -1 ? e.push(n) : v[n] = cc11001100_hook("v[n]", 1, "assign"));
    }
    var nt = cc11001100_hook("nt", f(), "var-init"),
      v = cc11001100_hook("v", {}, "var-init"),
      o = cc11001100_hook("o", {
        T: cc11001100_hook("T", "CI.BoxModel", "object-key-init"),
        FID: cc11001100_hook("FID", "CI", "object-key-init"),
        Name: cc11001100_hook("Name", ht, "object-key-init"),
        SV: cc11001100_hook("SV", ct, "object-key-init"),
        P: cc11001100_hook("P", r, "object-key-init")
      }, "var-init"),
      u,
      h,
      y,
      i,
      s,
      b,
      c,
      l;
    _G.RGUID && (o.RGUID = cc11001100_hook("o.RGUID", _G.RGUID, "assign"), _G.NARGUID && (o.NARGUID = cc11001100_hook("o.NARGUID", 1, "assign")));
    u = cc11001100_hook("u", {}, "assign");
    for (i in n) i !== "P" && (h = cc11001100_hook("h", k(n[i]), "assign"), h && h.length > 0 && (u[i] = cc11001100_hook("u[i]", h.split(p), "assign")));
    y = cc11001100_hook("y", e.slice(ut).join(a[1]), "assign");
    ut = cc11001100_hook("ut", e.length, "assign");
    t.P.K = cc11001100_hook("t.P.K", y, "assign");
    for (i in u) {
      if (i !== "M") for (s = cc11001100_hook("s", 0, "assign"); s < u[i].length; s++) b = cc11001100_hook("b", u[i][s], "assign"), c = cc11001100_hook("c", ot(e, b), "assign"), c >= 0 && (u[i][s] = cc11001100_hook("u[i][s]", p + c.toString(36), "assign"));
      l = cc11001100_hook("l", u[i].join(r), "assign");
      i in w && w[i] === l || (o[i] = cc11001100_hook("o[i]", w[i] = cc11001100_hook("w[i]", l, "assign"), "assign"));
    }
    return t.P.C += cc11001100_hook("t.P.C", f() - nt, "assign"), o.P = cc11001100_hook("o.P", d(t.P), "assign"), d(o);
  }
  function ot(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) if (n[i] === t) return i;
    return -1;
  }
  function f(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n == null ? bt(g()) : n - ai();
  }
  function ai() {
    return c ? tt ? c - performance.timing.navigationStart : c - window.si_ST : 0;
  }
  function vi() {
    return c ? c : tt ? dt(performance.timing.navigationStart) : window.si_ST.getTime();
  }
  function bt(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n - vi();
  }
  function g() {
    return tt ? dt(performance.now() + performance.timing.navigationStart) : new Date().getTime();
  }
  function kt(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return typeof n[t] != "undefined";
  }
  function dt(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n < -1 ? -1 : parseInt(n);
  }
  function yi() {
    function n() {
      c = cc11001100_hook("c", typeof _w.ajaxNavT == "number" ? _w.ajaxNavT : t, "assign");
      sj_evt.unbind("ajax.load", n);
    }
    var t = cc11001100_hook("t", g(), "var-init");
    sj_evt.bind("ajax.load", n, !1);
  }
  function pi() {
    v = cc11001100_hook("v", 1, "assign");
    et = cc11001100_hook("et", f(), "assign");
    h = cc11001100_hook("h", !0, "assign");
    st("load");
    ri ? b("T", !0, undefined, {
      force: cc11001100_hook("force", !0, "object-key-init"),
      useSendBeacon: cc11001100_hook("useSendBeacon", !0, "object-key-init")
    }) : b("T", !1, ti);
    t.P.C += cc11001100_hook("t.P.C", f() - et, "assign");
    at = cc11001100_hook("at", undefined, "assign");
    (!it || sb_ie) && sj_be(window, "beforeunload", l, !1);
    sj_evt.bind("unload", l);
    sj_evt.bind("BMU", l);
    v = cc11001100_hook("v", 2, "assign");
  }
  function l(n) {
    cc11001100_hook("n", n, "function-parameter");
    v = cc11001100_hook("v", 3, "assign");
    (!it || sb_ie) && sj_ue(window, "beforeunload", l, !1);
    sj_evt.unbind("unload", l);
    sj_evt.unbind("BMU", l);
    var t = cc11001100_hook("t", it ? {
      force: cc11001100_hook("force", !0, "object-key-init"),
      useSendBeacon: cc11001100_hook("useSendBeacon", !0, "object-key-init"),
      visibilityState: cc11001100_hook("visibilityState", document.visibilityState, "object-key-init"),
      eventName: cc11001100_hook("eventName", n && typeof n == "string" ? n : n && n.type, "object-key-init")
    } : {}, "var-init");
    b("U", !0, undefined, t);
    h = cc11001100_hook("h", !1, "assign");
    st("unload");
    v = cc11001100_hook("v", 4, "assign");
  }
  function st(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var r = cc11001100_hook("r", 0, "var-init"); r < u.length; r++) u[r][n](t);
  }
  function wi() {
    for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < u.length; n++) t.push(u[n].id);
    return t.join(a[1]);
  }
  function gt(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < u.length; t++) if (u[t].id === n) return !0;
    return !1;
  }
  function bi(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", !1, "var-init");
    return gt(n.id) || (u.push(n), t = cc11001100_hook("t", !0, "assign")), t;
  }
  function ki(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", !1, "var-init");
    return !gt(n.id) && n.check() && (u.push(n), t = cc11001100_hook("t", !0, "assign")), t;
  }
  function di() {
    sj_evt.bind("onP1", vt, !0);
    sj_evt.bind("ajax.unload", yi, !0);
    typeof n.resetQueue == "function" && sj_evt.bind("ajax.unload", n.resetQueue, !0);
    sj_evt.bind("ajax.postload", vt, !0);
  }
  if (!_w.BM || !n.register) {
    var i = cc11001100_hook("i", "boxmodel", "var-init"),
      ht = cc11001100_hook("ht", "v2.8.3", "var-init"),
      ct = cc11001100_hook("ct", "", "var-init"),
      r = cc11001100_hook("r", "", "var-init"),
      nt = cc11001100_hook("nt", n.config["B"], "var-init"),
      ni = cc11001100_hook("ni", nt.delay, "var-init"),
      ti = cc11001100_hook("ti", nt.timeout, "var-init"),
      ii = cc11001100_hook("ii", nt.sendlimit, "var-init"),
      tt = cc11001100_hook("tt", _w.performance && performance.now && performance.timing, "var-init"),
      y = cc11001100_hook("y", _G && _G.EF, "var-init"),
      it = cc11001100_hook("it", y && y.bmcov === 1, "var-init"),
      ri = cc11001100_hook("ri", y && y.bmecov === 1, "var-init"),
      lt = cc11001100_hook("lt", "sendBeacon", "var-init"),
      ui = cc11001100_hook("ui", navigator && navigator[lt], "var-init"),
      p = cc11001100_hook("p", "@", "var-init"),
      a = cc11001100_hook("a", ["$", "+", "/", ":", ";"], "var-init"),
      fi = cc11001100_hook("fi", /([%$+\/\\:;"])/g, "var-init"),
      e,
      t,
      u = cc11001100_hook("u", [], "var-init"),
      w,
      o,
      s,
      rt,
      ut,
      ft,
      h,
      ei = cc11001100_hook("ei", "T", "var-init"),
      c,
      et,
      at,
      v = cc11001100_hook("v", 0, "var-init");
    sb_st(di, 0);
    n.extend = cc11001100_hook("n.extend", bi, "assign");
    n.register = cc11001100_hook("n.register", ki, "assign");
    n.snapshot = cc11001100_hook("n.snapshot", b, "assign");
    n.delta = cc11001100_hook("n.delta", oi, "assign");
    n.clone = cc11001100_hook("n.clone", si, "assign");
    n.exists = cc11001100_hook("n.exists", kt, "assign");
    n.time = cc11001100_hook("n.time", f, "assign");
    n.error = cc11001100_hook("n.error", k, "assign");
  }
}(BM), function (n) {
  function it(p) {
    cc11001100_hook("p", p, "function-parameter");
    var rt, tt, ft, g, it;
    p[t] = cc11001100_hook("p[t]", [], "assign");
    i = cc11001100_hook("i", {}, "assign");
    i[t] = cc11001100_hook("i[t]", {}, "assign");
    u = cc11001100_hook("u", [], "assign");
    r = cc11001100_hook("r", document.documentElement, "assign");
    a = cc11001100_hook("a", document.body, "assign");
    s = cc11001100_hook("s", nt + s, "assign");
    e = cc11001100_hook("e", n.exists(window, "getComputedStyle") ? parseInt(window.getComputedStyle(document.body)["font-size"]) : -1, "assign");
    e = cc11001100_hook("e", e > 0 ? e : -1, "assign");
    var et = cc11001100_hook("et", "innerWidth" in window ? window.innerWidth : r.clientWidth, "var-init"),
      ot = cc11001100_hook("ot", "innerHeight" in window ? window.innerHeight : r.clientHeight, "var-init"),
      st = cc11001100_hook("st", window.pageXOffset || r.scrollLeft, "var-init"),
      ht = cc11001100_hook("ht", window.pageYOffset || r.scrollTop, "var-init"),
      ct = cc11001100_hook("ct", h in document ? document[h] : v, "var-init");
    for (s = cc11001100_hook("s", n.exists(window, "devicePixelRatio") ? window.devicePixelRatio : -1, "assign"), rt = cc11001100_hook("rt", {
      t: cc11001100_hook("t", n.time(), "object-key-init"),
      x: cc11001100_hook("x", st, "object-key-init"),
      y: cc11001100_hook("y", ht, "object-key-init"),
      w: cc11001100_hook("w", et, "object-key-init"),
      h: cc11001100_hook("h", ot, "object-key-init"),
      dw: cc11001100_hook("dw", a.clientWidth, "object-key-init"),
      dh: cc11001100_hook("dh", a.clientHeight, "object-key-init"),
      d: cc11001100_hook("d", s, "object-key-init"),
      s: cc11001100_hook("s", e, "object-key-init"),
      v: cc11001100_hook("v", ct, "object-key-init"),
      e: cc11001100_hook("e", v, "object-key-init")
    }, "assign"), tt = cc11001100_hook("tt", n.dequeue("V"), "assign"), tt.push({
      t: cc11001100_hook("t", rt.t, "object-key-init"),
      i: cc11001100_hook("i", rt, "object-key-init")
    }), ft = cc11001100_hook("ft", 0, "assign"); ft < tt.length; ft++) g = cc11001100_hook("g", tt[ft], "assign"), it = cc11001100_hook("it", {
      t: cc11001100_hook("t", g.t, "object-key-init"),
      x: cc11001100_hook("x", g.i.x, "object-key-init"),
      y: cc11001100_hook("y", g.i.y, "object-key-init"),
      w: cc11001100_hook("w", g.i.w, "object-key-init"),
      h: cc11001100_hook("h", g.i.h, "object-key-init"),
      dw: cc11001100_hook("dw", g.i.dw, "object-key-init"),
      dh: cc11001100_hook("dh", g.i.dh, "object-key-init"),
      d: cc11001100_hook("d", s, "object-key-init"),
      s: cc11001100_hook("s", e, "object-key-init"),
      v: cc11001100_hook("v", g.i.v, "object-key-init"),
      e: cc11001100_hook("e", v, "object-key-init")
    }, "assign"), p[t].length == 0 ? (i[t] = cc11001100_hook("i[t]", n.clone(it), "assign"), p[t].push(it)) : ut(it) && p[t].push(n.delta(i[t], it));
    i[t] = cc11001100_hook("i[t]", n.clone(rt), "assign");
    tt = cc11001100_hook("tt", [], "assign");
    y = cc11001100_hook("y", 0, "assign");
    l = cc11001100_hook("l", !0, "assign");
    sj_be(window, "scroll", w);
    sj_be(window, "resize", b);
    sj_be(window, "pageshow", o);
    sj_be(window, "pagehide", o, f);
    h in document && (sj_be(document, "visibilitychange", o, f), sj_evt.bind("visibility", k), sj_evt.bind("peekexpand", d));
  }
  function rt() {
    if (i != null && t in i) return i[t];
    n.error({
      FN: cc11001100_hook("FN", "viewport", "object-key-init"),
      S: cc11001100_hook("S", "current", "object-key-init")
    });
  }
  function ut(n) {
    cc11001100_hook("n", n, "function-parameter");
    var u = cc11001100_hook("u", i[t], "var-init");
    for (var r in u) if (r !== "t" && r in n && u[r] !== n[r]) return !0;
    return !1;
  }
  function w() {
    var f = cc11001100_hook("f", n.clone(i[t]), "var-init");
    return f.t = cc11001100_hook("f.t", n.time(), "assign"), f.x = cc11001100_hook("f.x", window.pageXOffset || r.scrollLeft, "assign"), f.y = cc11001100_hook("f.y", window.pageYOffset || r.scrollTop, "assign"), f.e = cc11001100_hook("f.e", "scroll", "assign"), u.push(f), n.snapshot(t), !0;
  }
  function b() {
    var f = cc11001100_hook("f", n.clone(i[t]), "var-init");
    return f.t = cc11001100_hook("f.t", n.time(), "assign"), f.w = cc11001100_hook("f.w", "innerWidth" in window ? window.innerWidth : r.clientWidth, "assign"), f.h = cc11001100_hook("f.h", "innerHeight" in window ? window.innerHeight : r.clientHeight, "assign"), f.e = cc11001100_hook("f.e", "resize", "assign"), u.push(f), n.snapshot(t), !0;
  }
  function o(r) {
    cc11001100_hook("r", r, "function-parameter");
    var o, e, s, a, v, y;
    (l || !f) && (o = cc11001100_hook("o", document[h], "assign"), e = cc11001100_hook("e", r ? r.type : "visibility", "assign"), r.persisted && (e += cc11001100_hook("e", "-cached", "assign")), s = cc11001100_hook("s", n.clone(i[t]), "assign"), s.t = cc11001100_hook("s.t", n.time(), "assign"), s.v = cc11001100_hook("s.v", o, "assign"), s.e = cc11001100_hook("s.e", e, "assign"), u.push(s), a = cc11001100_hook("a", !1, "assign"), v = cc11001100_hook("v", {}, "assign"), f ? (y = cc11001100_hook("y", e === "visibilitychange" && o === "hidden" || e === "pagehide" || e === "pagehide-cached" || o === "unloaded", "assign"), y && (a = cc11001100_hook("a", !0, "assign"), v = cc11001100_hook("v", {
      force: cc11001100_hook("force", !0, "object-key-init"),
      useSendBeacon: cc11001100_hook("useSendBeacon", !0, "object-key-init"),
      visibilityState: cc11001100_hook("visibilityState", o, "object-key-init"),
      eventName: cc11001100_hook("eventName", e, "object-key-init")
    }, "assign"))) : o === "unloaded" && (a = cc11001100_hook("a", !0, "assign")), n.snapshot(t, a, undefined, v));
  }
  function k(r) {
    cc11001100_hook("r", r, "function-parameter");
    var f, e;
    if (r.length > 1) {
      if (f = cc11001100_hook("f", r[1] ? "visible" : "hidden", "assign"), r.length > 2) switch (r[2]) {
        case 0:
          f = cc11001100_hook("f", "apphidden", "assign");
          break;
        case 1:
          f = cc11001100_hook("f", "appvisible", "assign");
          break;
        case 2:
          f = cc11001100_hook("f", "webvisible", "assign");
      }
      e = cc11001100_hook("e", n.clone(i[t]), "assign");
      e.t = cc11001100_hook("e.t", n.time(), "assign");
      e.v = cc11001100_hook("e.v", f, "assign");
      e.e = cc11001100_hook("e.e", "cortana", "assign");
      u.push(e);
      n.snapshot(t, f === "hidden");
    }
  }
  function d() {
    var f = cc11001100_hook("f", n.clone(i[t]), "var-init");
    f.t = cc11001100_hook("f.t", n.time(), "assign");
    f.w = cc11001100_hook("f.w", "innerWidth" in window ? window.innerWidth : r.clientWidth, "assign");
    f.h = cc11001100_hook("f.h", "innerHeight" in window ? window.innerHeight : r.clientHeight, "assign");
    f.v = cc11001100_hook("f.v", "peekexpand", "assign");
    f.e = cc11001100_hook("f.e", "cortana", "assign");
    u.push(f);
    n.snapshot(t);
  }
  function g(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", n.x - t.x, "var-init"),
      r = cc11001100_hook("r", n.y - t.y, "var-init");
    return Math.sqrt(i * i + r * r);
  }
  function ft(r) {
    cc11001100_hook("r", r, "function-parameter");
    for (var f, o, s = cc11001100_hook("s", u.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < s; e++) f = cc11001100_hook("f", u[e], "assign"), (e === 0 || e === s - 1 || f.e !== "scroll" || g(f, o) > tt) && (e === 0 ? n.metric(1, f.t) : y += cc11001100_hook("y", g(f, o), "assign"), r[t].push(n.delta(i[t], f)), o = cc11001100_hook("o", f, "assign"));
    n.metric(8, parseInt(y));
    u = cc11001100_hook("u", [], "assign");
  }
  function et() {
    l = cc11001100_hook("l", !1, "assign");
    sj_ue(window, "scroll", w);
    sj_ue(window, "resize", b);
    sj_ue(window, "pageshow", o);
    sj_ue(window, "pagehide", o, f);
    h in document && (sj_ue(document, "visibilitychange", o, f), sj_evt.unbind("visibility", k), sj_evt.unbind("peekexpand", d));
    u = cc11001100_hook("u", [], "assign");
  }
  var c = cc11001100_hook("c", "boxmodel", "var-init"),
    t = cc11001100_hook("t", "V", "var-init"),
    s,
    e,
    a,
    nt = cc11001100_hook("nt", "", "var-init"),
    v = cc11001100_hook("v", "default", "var-init"),
    h = cc11001100_hook("h", "visibilityState", "var-init"),
    i,
    u = cc11001100_hook("u", [], "var-init"),
    tt = cc11001100_hook("tt", n.config[t].distance, "var-init"),
    r,
    y,
    l,
    p = cc11001100_hook("p", _G && _G.EF, "var-init"),
    f = cc11001100_hook("f", p && p.bmcov === 1, "var-init"),
    ot = cc11001100_hook("ot", n.extend({
      id: cc11001100_hook("id", t, "object-key-init"),
      load: cc11001100_hook("load", it, "object-key-init"),
      compute: cc11001100_hook("compute", ft, "object-key-init"),
      unload: cc11001100_hook("unload", et, "object-key-init")
    }), "var-init");
  ot && (n.viewport = cc11001100_hook("n.viewport", rt, "assign"));
}(BM), function (n) {
  function d(r) {
    cc11001100_hook("r", r, "function-parameter");
    r[t] = cc11001100_hook("r[t]", [], "assign");
    f = cc11001100_hook("f", r, "assign");
    h = cc11001100_hook("h", document.body, "assign");
    i = cc11001100_hook("i", {}, "assign");
    i[t] = cc11001100_hook("i[t]", [], "assign");
    u = cc11001100_hook("u", n.dequeue("L"), "assign");
    a(document, n.time());
    u = cc11001100_hook("u", [], "assign");
  }
  function g() {
    return i[t];
  }
  function a(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var u, f, i, o;
    if (n.querySelectorAll) for (u in c) {
      var e = cc11001100_hook("e", c[u], "var-init"),
        s = cc11001100_hook("s", e[0], "var-init"),
        h = cc11001100_hook("h", e[1], "var-init");
      for (u += cc11001100_hook("u", !e[2] ? r : " >*", "assign"), f = cc11001100_hook("f", n.querySelectorAll(u), "assign"), i = cc11001100_hook("i", 0, "assign"); i < f.length; i++) (o = cc11001100_hook("o", f[i], "assign"), typeof _w.SVGElement != "undefined" && o instanceof SVGElement) || v(f[i], t, "T", s, h);
    }
  }
  function v(r, u, e, s, h) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var c = cc11001100_hook("c", w(r, e, u), "var-init"),
      l;
    if (!(c.x < 0) && !(c.y < 0)) return s && (c._ex = cc11001100_hook("c._ex", s, "assign")), h && (c._ey = cc11001100_hook("c._ey", h, "assign")), (r.tagName === "IMG" || r.tagName === "IFRAME") && (c._s = cc11001100_hook("c._s", it(r), "assign")), c.i = cc11001100_hook("c.i", i[t].length, "assign"), r.setAttribute("data-bm", c.i), l = cc11001100_hook("l", nt(c), "assign"), l ? o(i[t][c.i], c, c.t) : (f[t].push(c), i[t].push(n.clone(c))), c.i;
  }
  function nt(r) {
    cc11001100_hook("r", r, "function-parameter");
    for (var a, y, c, s, e, v, l = cc11001100_hook("l", 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < u.length; h++) for (a = cc11001100_hook("a", u[h], "assign"), y = cc11001100_hook("y", u[h].t, "assign"), c = cc11001100_hook("c", 0, "assign"); c < a.i.length; c++) if (s = cc11001100_hook("s", a.i[c], "assign"), s.t = cc11001100_hook("s.t", y, "assign"), s._e === r._e) {
      e = cc11001100_hook("e", n.clone(r), "assign");
      for (v in s) e[v] = cc11001100_hook("e[v]", s[v], "assign");
      l === 0 ? (f[t].push(e), i[t].push(n.clone(e))) : o(i[t][r.i], e, e.t);
      l++;
    }
    return l > 0;
  }
  function y(n) {
    cc11001100_hook("n", n, "function-parameter");
    while (n && n.hasAttribute && n !== document.body) {
      if (n.hasAttribute("data-bm")) return parseInt(n.getAttribute("data-bm"));
      n = cc11001100_hook("n", n.parentElement, "assign");
    }
    return null;
  }
  function tt(n, r, u, f) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var o, e;
    if (n) {
      for (o = cc11001100_hook("o", i[t], "assign"), e = cc11001100_hook("e", 0, "assign"); e < o.length; e++) if (n === o[e]._e) return o[e].i;
      return f && a(n, r), v(n, r, u);
    }
    return null;
  }
  function o(i, r, u) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    for (var o, h, c = cc11001100_hook("c", ["x", "y", "w", "h", "z"], "var-init"), e = cc11001100_hook("e", {}, "var-init"), l = cc11001100_hook("l", !1, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < c.length; s++) o = cc11001100_hook("o", c[s], "assign"), i[o] !== r[o] && (l = cc11001100_hook("l", !0, "assign"), e[o] = cc11001100_hook("e[o]", r[o], "assign"));
    l && (e.i = cc11001100_hook("e.i", i.i, "assign"), e.e = cc11001100_hook("e.e", r.e, "assign"), e.t = cc11001100_hook("e.t", u, "assign"), h = cc11001100_hook("h", n.delta(i, e), "assign"), h.e = cc11001100_hook("h.e", r.e, "assign"), f[t].push(h));
  }
  function p(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n.tagName + (n.id ? "#" + n.id : n.className ? "." + n.className : r);
  }
  function w(t, i, u) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    var s,
      c = cc11001100_hook("c", Number(t.getAttribute("data-bm")), "var-init"),
      e,
      f,
      o;
    !isNaN(c) && c > -1 ? (e = cc11001100_hook("e", n.layout()[c], "assign"), s = cc11001100_hook("s", e && e._e === t ? e.p : b(t), "assign")) : s = cc11001100_hook("s", b(t), "assign");
    f = cc11001100_hook("f", {
      t: cc11001100_hook("t", u, "object-key-init"),
      i: cc11001100_hook("i", null, "object-key-init"),
      s: cc11001100_hook("s", p(t), "object-key-init"),
      k: cc11001100_hook("k", ut(t), "object-key-init"),
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init"),
      w: cc11001100_hook("w", t.offsetWidth, "object-key-init"),
      h: cc11001100_hook("h", t.offsetHeight, "object-key-init"),
      z: cc11001100_hook("z", 0, "object-key-init"),
      e: cc11001100_hook("e", i, "object-key-init"),
      p: cc11001100_hook("p", s, "object-key-init"),
      _e: cc11001100_hook("_e", t, "object-key-init"),
      _s: cc11001100_hook("_s", r, "object-key-init"),
      _ex: cc11001100_hook("_ex", -1, "object-key-init"),
      _ey: cc11001100_hook("_ey", -1, "object-key-init")
    }, "assign");
    o = cc11001100_hook("o", t, "assign");
    try {
      if (t.offsetParent) do f.x += cc11001100_hook("f.x", t.offsetLeft, "assign"), f.y += cc11001100_hook("f.y", t.offsetTop, "assign"); while (t = cc11001100_hook("t", t.offsetParent, "assign"));
    } catch (l) {
      f.x = cc11001100_hook("f.x", null, "assign");
      f.y = cc11001100_hook("f.y", null, "assign");
    }
    while (o !== h && (o = cc11001100_hook("o", o.parentElement, "assign"))) f.z++;
    return f;
  }
  function it(t) {
    cc11001100_hook("t", t, "function-parameter");
    try {
      if (n.exists(t, "src") && t.src.indexOf("data:") !== 0) return t.src ? t.src : r;
    } catch (i) {}
    return r;
  }
  function b(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", Number(n.getAttribute(e + k)) || Number(n.getAttribute(e + l)) || -1, "var-init"); (n = cc11001100_hook("n", n.parentElement, "assign")) && t === -1;) t = cc11001100_hook("t", Number(n.getAttribute(e + l)) || t, "assign");
    return t;
  }
  function rt(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (n) {
      var t = cc11001100_hook("t", n.className, "var-init");
      if (t) {
        if (typeof t == "string") return t;
        if (typeof t == "object" && "baseVal" in t) return t.baseVal;
      }
    }
    return "";
  }
  function ut(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t, u;
    if (rt(n).split(" ").indexOf("b_ans") > -1 && n.hasAttribute("h")) return s(n.getAttribute("h"));
    if (n.tagName === "IMG" || p(n).indexOf("rms_img") >= 0) {
      if (t = cc11001100_hook("t", y(n), "assign"), t != null && t < i.L.length) return s(i.L[t].k);
    } else if (u = cc11001100_hook("u", n.querySelector("a[h]"), "assign"), u) return s(u.getAttribute("h"));
    return r;
  }
  function s(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", n, "var-init");
    return t = cc11001100_hook("t", t ? t.substr(t.indexOf("=") + 1) : r, "assign"), t && t.indexOf("javascript") >= 0 ? r : t;
  }
  function ft() {
    for (var u, s, f = cc11001100_hook("f", i[t], "var-init"), e = cc11001100_hook("e", n.time(), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < f.length; r++) u = cc11001100_hook("u", f[r], "assign"), s = cc11001100_hook("s", w(u._e, "R", e), "assign"), o(u, s, e);
  }
  function et() {}
  var t = cc11001100_hook("t", "L", "var-init"),
    i,
    f,
    h,
    r = cc11001100_hook("r", "", "var-init"),
    c = cc11001100_hook("c", n.rules, "var-init"),
    u,
    e = cc11001100_hook("e", "data-", "var-init"),
    l = cc11001100_hook("l", "priority", "var-init"),
    k = cc11001100_hook("k", "fixedpriority", "var-init"),
    ot = cc11001100_hook("ot", n.extend({
      id: cc11001100_hook("id", t, "object-key-init"),
      load: cc11001100_hook("load", d, "object-key-init"),
      compute: cc11001100_hook("compute", ft, "object-key-init"),
      unload: cc11001100_hook("unload", et, "object-key-init")
    }), "var-init");
  ot && (n.observe = cc11001100_hook("n.observe", tt, "assign"), n.match = cc11001100_hook("n.match", y, "assign"), n.layout = cc11001100_hook("n.layout", g, "assign"));
}(BM), function (n) {
  function e(n) {
    cc11001100_hook("n", n, "function-parameter");
    n[i] = cc11001100_hook("n[i]", [], "assign");
    u();
  }
  function u(n) {
    cc11001100_hook("n", n, "function-parameter");
    n || (t = cc11001100_hook("t", [], "assign"));
    for (var i = cc11001100_hook("i", 0, "var-init"); i < 11; i++) t.push(r);
  }
  function o(r) {
    cc11001100_hook("r", r, "function-parameter");
    r.P.F && (n.metric(3, n.time()), r[i] = cc11001100_hook("r[i]", t, "assign"));
  }
  function s() {
    f || u(!0);
  }
  function h(n, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (t) switch (n) {
      case 0:
        t[n] = cc11001100_hook("t[n]", t[n] !== r ? Math.max(t[n], i) : i, "assign");
        break;
      case 1:
        t[n] = cc11001100_hook("t[n]", t[n] !== r ? Math.min(t[n], i) : i, "assign");
        break;
      default:
        t[n] = cc11001100_hook("t[n]", i, "assign");
    }
  }
  var i = cc11001100_hook("i", "M", "var-init"),
    t,
    r = cc11001100_hook("r", "", "var-init"),
    f = cc11001100_hook("f", _G !== undefined && _G.EF !== undefined && _G.EF.bmcov === 1, "var-init"),
    c = cc11001100_hook("c", n.extend({
      id: cc11001100_hook("id", i, "object-key-init"),
      load: cc11001100_hook("load", e, "object-key-init"),
      compute: cc11001100_hook("compute", o, "object-key-init"),
      unload: cc11001100_hook("unload", s, "object-key-init")
    }), "var-init");
  c && (n.metric = cc11001100_hook("n.metric", h, "assign"));
}(BM), function (n) {
  function e() {
    return typeof MutationObserver != "undefined";
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    f = cc11001100_hook("f", t, "assign");
    var i = cc11001100_hook("i", new MutationObserver(s), "var-init");
    u = cc11001100_hook("u", n.viewport(), "assign");
    i && i.observe(document.body, {
      childList: cc11001100_hook("childList", !0, "object-key-init"),
      subtree: cc11001100_hook("subtree", !0, "object-key-init")
    });
  }
  function s(f) {
    cc11001100_hook("f", f, "function-parameter");
    var s, a, e, c, o, v, l;
    if (t !== null) {
      for (s = cc11001100_hook("s", [], "assign"), a = cc11001100_hook("a", n.time(), "assign"), e = cc11001100_hook("e", 0, "assign"); e < f.length; e++) for (c = cc11001100_hook("c", 0, "assign"); c < f[e].addedNodes.length; c++) o = cc11001100_hook("o", f[e].addedNodes[c], "assign"), v = cc11001100_hook("v", o.tagName, "assign"), h(o) && (l = cc11001100_hook("l", n.observe(o, a, i, !0), "assign"), l && l.x < u.w && l.y < u.h && n.metric(0, a), s.push(o.parentNode));
      s.length > 0 && (r = cc11001100_hook("r", s, "assign"), n.snapshot(i));
    }
  }
  function h(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (typeof _w.SVGElement != "undefined" && n instanceof SVGElement) return !1;
    var t = cc11001100_hook("t", n.offsetWidth >= 20 || n.offsetHeight >= 20, "var-init"),
      i = cc11001100_hook("i", r.indexOf(n.parentNode) >= 0, "var-init");
    return t && !i;
  }
  function c() {}
  function l() {
    t && t.disconnect();
    t = cc11001100_hook("t", null, "assign");
    r = cc11001100_hook("r", [], "assign");
  }
  var i = cc11001100_hook("i", "MT", "var-init"),
    r = cc11001100_hook("r", [], "var-init"),
    t,
    u,
    f;
  n.register({
    id: cc11001100_hook("id", i, "object-key-init"),
    check: cc11001100_hook("check", e, "object-key-init"),
    load: cc11001100_hook("load", o, "object-key-init"),
    compute: cc11001100_hook("compute", c, "object-key-init"),
    unload: cc11001100_hook("unload", l, "object-key-init")
  });
}(BM), function (n) {
  function tt() {
    return !0;
  }
  function it(n) {
    cc11001100_hook("n", n, "function-parameter");
    n[u] = cc11001100_hook("n[u]", [], "assign");
    g = cc11001100_hook("g", n, "assign");
    l = cc11001100_hook("l", 0, "assign");
    e = cc11001100_hook("e", 0, "assign");
    s = cc11001100_hook("s", !0, "assign");
  }
  function rt(i) {
    cc11001100_hook("i", i, "function-parameter");
    for (var k, nt, c, tt, it = cc11001100_hook("it", n.viewport().w, "var-init"), g = cc11001100_hook("g", n.layout(), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < g.length; b++) {
      var o = cc11001100_hook("o", g[b], "var-init"),
        r = cc11001100_hook("r", o._e, "var-init"),
        s = cc11001100_hook("s", o._ex, "var-init"),
        d = cc11001100_hook("d", o._ey, "var-init"),
        v = cc11001100_hook("v", f, "var-init");
      o.i === b && (s = cc11001100_hook("s", _G.RTL && s >= 0 ? it - s - r.offsetWidth : s, "assign"), s >= 0 && !w(o.x, s) && (v = cc11001100_hook("v", o.k.length === 0 ? p(r) : v, "assign"), i[u].push({
        t: cc11001100_hook("t", n.time(), "object-key-init"),
        l: cc11001100_hook("l", o.i, "object-key-init"),
        e: cc11001100_hook("e", "X", "object-key-init"),
        v: cc11001100_hook("v", Math.abs(o.x - s), "object-key-init"),
        m: cc11001100_hook("m", v, "object-key-init")
      }), e++), d >= 0 && !w(o.y, d) && (v = cc11001100_hook("v", o.k.length === 0 ? p(r) : v, "assign"), i[u].push({
        t: cc11001100_hook("t", n.time(), "object-key-init"),
        l: cc11001100_hook("l", o.i, "object-key-init"),
        e: cc11001100_hook("e", "Y", "object-key-init"),
        v: cc11001100_hook("v", Math.abs(o.y - d), "object-key-init"),
        m: cc11001100_hook("m", v, "object-key-init")
      }), e++), r.tagName !== "IMG" || o.i in t || (c = cc11001100_hook("c", ut(r), "assign"), c && (k = cc11001100_hook("k", n.exists(r, k) ? r[k] : !0, "assign"), nt = cc11001100_hook("nt", n.exists(r, h) ? r[h] > 0 : !0, "assign"), k ? nt || (t[o.i] = cc11001100_hook("t[o.i]", {
        _e: cc11001100_hook("_e", r, "object-key-init"),
        _s: cc11001100_hook("_s", c, "object-key-init"),
        _d: cc11001100_hook("_d", !0, "object-key-init"),
        _b: cc11001100_hook("_b", !1, "object-key-init")
      }, "assign"), y(b, c)) : (t[o.i] = cc11001100_hook("t[o.i]", {
        _e: cc11001100_hook("_e", r, "object-key-init"),
        _s: cc11001100_hook("_s", c, "object-key-init"),
        _d: cc11001100_hook("_d", !1, "object-key-init"),
        _b: cc11001100_hook("_b", !0, "object-key-init")
      }, "assign"), a(r, !0)))), r.tagName !== "DIV" || !r.hasAttribute("data-src") || o.i in t || (c = cc11001100_hook("c", r.getAttribute("data-src"), "assign"), tt = cc11001100_hook("tt", r.style.backgroundImage, "assign"), tt || (t[o.i] = cc11001100_hook("t[o.i]", {
        _e: cc11001100_hook("_e", r, "object-key-init"),
        _s: cc11001100_hook("_s", c, "object-key-init"),
        _d: cc11001100_hook("_d", !1, "object-key-init"),
        _b: cc11001100_hook("_b", !1, "object-key-init")
      }, "assign"), a(r, !1))));
    }
    n.metric(5, e);
    n.metric(6, l);
  }
  function ut(t) {
    cc11001100_hook("t", t, "function-parameter");
    try {
      if (n.exists(t, "src")) return t.src ? t.src : f;
    } catch (i) {}
    return f;
  }
  function a(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t && (sj_be(n, "load", r), sj_be(n, "error", r));
    i || (i = cc11001100_hook("i", sb_st(v, d), "assign"));
  }
  function r(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (!nt || s) {
      var t = cc11001100_hook("t", window.event || n, "var-init"),
        i = cc11001100_hook("i", sj_et(n), "var-init");
      return v(t.type, i);
    }
  }
  function v(u, f) {
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var s = cc11001100_hook("s", 0, "var-init"),
      e,
      o,
      h;
    for (e in t) if (!t[e]._d && (!f || t[e]._e === f) && (o = cc11001100_hook("o", t[e]._e, "assign"), h = cc11001100_hook("h", o.tagName === "IMG" ? !o[b] || u && u === "error" : !o.style.backgroundImage, "assign"), t[e]._b && (sj_ue(o, "load", r), sj_ue(o, "error", r)), h && (y(e, t[e]._s), s++), t[e]._d = cc11001100_hook("t[e]._d", !0, "assign"), f)) return;
    s > 0 && n.snapshot("E");
    i = cc11001100_hook("i", 0, "assign");
  }
  function y() {}
  function p(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", n.querySelector("a"), "var-init");
    return t && t.href ? t.href.substr(0, k) : f;
  }
  function w(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return n >= t - c && n <= t + c;
  }
  function ft() {
    var u, n;
    for (u in t) n = cc11001100_hook("n", t[u], "assign"), n._b && !n._d && (sj_ue(n._e, "load", r), sj_ue(n._e, "error", r));
    s = cc11001100_hook("s", !1, "assign");
    i && (sb_ct(i), i = cc11001100_hook("i", 0, "assign"));
    t = cc11001100_hook("t", {}, "assign");
  }
  var u = cc11001100_hook("u", "E", "var-init"),
    f = cc11001100_hook("f", "", "var-init"),
    b = cc11001100_hook("b", "complete", "var-init"),
    h = cc11001100_hook("h", "naturalWidth", "var-init"),
    o = cc11001100_hook("o", n.config[u], "var-init"),
    c = cc11001100_hook("c", o.buffer, "var-init"),
    k = cc11001100_hook("k", o.maxUrlLength, "var-init"),
    d = cc11001100_hook("d", o.timeout, "var-init"),
    i = cc11001100_hook("i", 0, "var-init"),
    l,
    e,
    t = cc11001100_hook("t", {}, "var-init"),
    g,
    s,
    nt = cc11001100_hook("nt", _G !== undefined && _G.EF !== undefined && _G.EF.bmcov === 1, "var-init");
  n.register({
    id: cc11001100_hook("id", u, "object-key-init"),
    check: cc11001100_hook("check", tt, "object-key-init"),
    load: cc11001100_hook("load", it, "object-key-init"),
    compute: cc11001100_hook("compute", rt, "object-key-init"),
    unload: cc11001100_hook("unload", ft, "object-key-init")
  });
}(BM), function (n) {
  function k() {
    return Boolean(_w.performance) && Boolean(performance.now) && Boolean(performance.getEntries);
  }
  function d(t) {
    cc11001100_hook("t", t, "function-parameter");
    t[r] = cc11001100_hook("t[r]", [], "assign");
    a[r] = cc11001100_hook("a[r]", [], "assign");
    f = cc11001100_hook("f", performance.timing.loadEventEnd - performance.timing.navigationStart, "assign");
    c = cc11001100_hook("c", n.viewport(), "assign");
    l = cc11001100_hook("l", 0, "assign");
    nt();
  }
  function g(u) {
    cc11001100_hook("u", u, "function-parameter");
    var k, it, d, h, nt, rt;
    if (r in a) {
      var ct = cc11001100_hook("ct", u[r], "var-init"),
        y = cc11001100_hook("y", a[r], "var-init"),
        kt = cc11001100_hook("kt", performance.timing, "var-init"),
        ut = cc11001100_hook("ut", performance.getEntries(), "var-init");
      for (h = cc11001100_hook("h", 0, "assign"); h < y.length; h++) k = cc11001100_hook("k", y[h]._r, "assign"), y[h].i == h && k && s(k.duration) !== y[h].d && u.N.push(n.delta(y[h], {
        i: cc11001100_hook("i", y[h].i, "object-key-init"),
        t: cc11001100_hook("t", n.time(), "object-key-init"),
        d: cc11001100_hook("d", s(k.duration), "object-key-init")
      }));
      for (it = cc11001100_hook("it", ut.length, "assign"), d = cc11001100_hook("d", v, "assign"); d < it; d++) {
        var o = cc11001100_hook("o", ut[d], "var-init"),
          g = cc11001100_hook("g", o.name, "var-init"),
          w = cc11001100_hook("w", tt(g), "var-init"),
          ft = cc11001100_hook("ft", !0, "var-init");
        for (g.indexOf("format=snrjson") >= 0 && g.indexOf("progrender=1") === -1 && (i = cc11001100_hook("i", o.startTime, "assign"), f = cc11001100_hook("f", o.duration, "assign")), h = cc11001100_hook("h", 0, "assign"); h < p.length; h++) if (w[1].indexOf(p[h]) >= 0 || w[1] === e) {
          ft = cc11001100_hook("ft", !1, "assign");
          break;
        }
        ft && l++;
        var et = cc11001100_hook("et", t(o.startTime, i), "var-init"),
          lt = cc11001100_hook("lt", s(o.duration), "var-init"),
          at = cc11001100_hook("at", t(o.connectStart, i), "var-init"),
          vt = cc11001100_hook("vt", o.secureConnectionStart === 0 ? 0 : t(o.secureConnectionStart, i), "var-init"),
          yt = cc11001100_hook("yt", t(o.connectEnd, i), "var-init"),
          pt = cc11001100_hook("pt", t(o.requestStart, i), "var-init"),
          wt = cc11001100_hook("wt", t(o.responseStart, i), "var-init"),
          bt = cc11001100_hook("bt", t(o.responseEnd, i), "var-init"),
          ot = cc11001100_hook("ot", null, "var-init"),
          st = cc11001100_hook("st", n.layout(), "var-init");
        for (nt = cc11001100_hook("nt", 0, "assign"); nt < st.length; nt++) {
          var b = cc11001100_hook("b", st[nt], "var-init"),
            dt = cc11001100_hook("dt", b._e, "var-init"),
            ht = cc11001100_hook("ht", b._s, "var-init");
          if (ht && g === ht) {
            ot = cc11001100_hook("ot", b.i, "assign");
            b.x < c.w && b.y < c.h && (f = cc11001100_hook("f", et, "assign"));
            break;
          }
        }
        rt = cc11001100_hook("rt", {
          _r: cc11001100_hook("_r", o, "object-key-init"),
          t: cc11001100_hook("t", et, "object-key-init"),
          i: cc11001100_hook("i", y.length, "object-key-init"),
          l: cc11001100_hook("l", ot, "object-key-init"),
          h: cc11001100_hook("h", w[1], "object-key-init"),
          p: cc11001100_hook("p", w[2].length === 0 ? w[3] : w[2], "object-key-init"),
          s: cc11001100_hook("s", o.initiatorType, "object-key-init"),
          d: cc11001100_hook("d", lt, "object-key-init"),
          pc: cc11001100_hook("pc", w[0], "object-key-init"),
          cs: cc11001100_hook("cs", at, "object-key-init"),
          sc: cc11001100_hook("sc", vt, "object-key-init"),
          ce: cc11001100_hook("ce", yt, "object-key-init"),
          rs: cc11001100_hook("rs", pt, "object-key-init"),
          rt: cc11001100_hook("rt", wt, "object-key-init"),
          re: cc11001100_hook("re", bt, "object-key-init")
        }, "assign");
        ct.push(rt);
        y.push(n.clone(rt));
      }
      v = cc11001100_hook("v", it, "assign");
      n.metric(0, f);
      n.metric(4, y.length);
      n.metric(7, l);
    }
  }
  function nt() {
    var r = cc11001100_hook("r", -1, "var-init"),
      u = cc11001100_hook("u", performance.timing.navigationStart, "var-init"),
      i;
    performance.timing && performance.timing.msFirstPaint ? r = cc11001100_hook("r", t(performance.timing.msFirstPaint, u), "assign") : _w.chrome && _w.chrome.loadTimes && (i = cc11001100_hook("i", _w.chrome.loadTimes(), "assign"), i && "firstPaintAfterLoadTime" in i && (r = cc11001100_hook("r", t(i.firstPaintAfterLoadTime * 1e3, u), "assign")));
    n.metric(2, r);
  }
  function tt(n) {
    cc11001100_hook("n", n, "function-parameter");
    var r, v, s;
    u.href = cc11001100_hook("u.href", n, "assign");
    var h,
      c,
      i,
      f = cc11001100_hook("f", u.protocol, "var-init"),
      l = cc11001100_hook("l", u.hostname, "var-init"),
      t = cc11001100_hook("t", u.pathname, "var-init"),
      a = cc11001100_hook("a", f.indexOf(w), "var-init");
    return f = cc11001100_hook("f", a >= 0 ? f.substr(0, a) : f, "assign"), t = cc11001100_hook("t", t.indexOf(o) === 0 ? t.substr(1) : t, "assign"), r = cc11001100_hook("r", u.search.toLowerCase(), "assign"), v = cc11001100_hook("v", l.length > 0 ? t.substr(0, y) : n.substr(0, y), "assign"), r.length > 0 && (h = cc11001100_hook("h", r.indexOf("event."), "assign")) > 0 && (c = cc11001100_hook("c", r.indexOf("&data"), "assign")) > 0 ? (t = cc11001100_hook("t", r.substr(h, c - h).replace("event.", e), "assign"), t === "clientinst" && (s = cc11001100_hook("s", b.exec(r.replace(/%22/g, '"')), "assign"), s != null && s.length > 1 && (t = cc11001100_hook("t", s[1], "assign")))) : t.indexOf("rms/") === 0 && (i = cc11001100_hook("i", t.split(o), "assign")) && i.length > 1 ? t = cc11001100_hook("t", i[1].replace("rms%20answers%20", e).replace(".source", e), "assign") : (i = cc11001100_hook("i", t.split(o), "assign")) && i.length >= 2 && (t = cc11001100_hook("t", i[i.length - 2] + o + i[i.length - 1], "assign")), [f, l, t, v];
  }
  function t(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return n && n > 0 ? s(n - t) : -1;
  }
  function s(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n < -1 ? -1 : parseInt(n);
  }
  function it() {}
  var h,
    r = cc11001100_hook("r", "N", "var-init"),
    v = cc11001100_hook("v", 0, "var-init"),
    i = cc11001100_hook("i", 0, "var-init"),
    f,
    c,
    l,
    y = cc11001100_hook("y", n.config.N.maxUrlLength, "var-init"),
    u = cc11001100_hook("u", document.createElement("A"), "var-init"),
    e = cc11001100_hook("e", "", "var-init"),
    o = cc11001100_hook("o", "/", "var-init"),
    w = cc11001100_hook("w", ":", "var-init"),
    b = cc11001100_hook("b", /"name":"(.*?)"/, "var-init"),
    a = cc11001100_hook("a", (h = cc11001100_hook("h", {}, "assign"), h[r] = cc11001100_hook("h[r]", [], "assign"), h), "var-init"),
    p = cc11001100_hook("p", [location.hostname, "live.com", "virtualearth.net", "bing.net", "msedge.net", "skype.com", "microsofttranslator.com", "footprintdns.com", "testanalytics.net", "footprintpredict.com", "msftstatic.com"], "var-init");
  n.register({
    id: cc11001100_hook("id", r, "object-key-init"),
    check: cc11001100_hook("check", k, "object-key-init"),
    load: cc11001100_hook("load", d, "object-key-init"),
    compute: cc11001100_hook("compute", g, "object-key-init"),
    unload: cc11001100_hook("unload", it, "object-key-init")
  });
}(BM), function (n) {
  function w() {
    return !0;
  }
  function b(n) {
    cc11001100_hook("n", n, "function-parameter");
    r = cc11001100_hook("r", 1, "assign");
    n[t] = cc11001100_hook("n[t]", [], "assign");
    y = cc11001100_hook("y", n, "assign");
    s = cc11001100_hook("s", document.documentElement, "assign");
    u = cc11001100_hook("u", [], "assign");
    o = cc11001100_hook("o", 0, "assign");
    f = cc11001100_hook("f", {}, "assign");
    l(sj_be, h);
    k();
    r = cc11001100_hook("r", 2, "assign");
  }
  function l(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var o, f, r, u = cc11001100_hook("u", 0, "var-init"); u < e.length; u++) if (o = cc11001100_hook("o", e[u], "assign"), f = cc11001100_hook("f", window.navigator.pointerEnabled ? o.replace("mouse", "pointer") : o, "assign"), n(document, f, t, !1), n === sj_be) i.push(f);else if (n === sj_ue) for (r = cc11001100_hook("r", i.length - 1, "assign"); r >= 0; r--) i[r] === f && i.splice(r, 1);
  }
  function k() {
    for (var r, i = cc11001100_hook("i", n.dequeue("EVT"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < i.length; t++) r = cc11001100_hook("r", i[t].i, "assign"), d(r.type) && h(r, i[t].t);
  }
  function d(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) if (e[t] === n.replace("pointer", "mouse")) return !0;
  }
  function h(f, e) {
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    f = cc11001100_hook("f", f || _w.event, "assign");
    var o = cc11001100_hook("o", f.touches && f.touches.length > 0 ? f.touches[0] : null, "var-init"),
      h = cc11001100_hook("h", f.pointerType || f.type.indexOf("touch") == 0 && "touch" || "mouse", "var-init"),
      l = cc11001100_hook("l", {
        _e: cc11001100_hook("_e", f.target, "object-key-init"),
        t: cc11001100_hook("t", e || n.time(), "object-key-init"),
        l: cc11001100_hook("l", null, "object-key-init"),
        e: cc11001100_hook("e", f.type, "object-key-init"),
        p: cc11001100_hook("p", h, "object-key-init"),
        b: cc11001100_hook("b", n.exists(f, "button") ? f.button : null, "object-key-init"),
        x: cc11001100_hook("x", o ? o.pageX : "pageX" in f ? f.pageX : "clientX" in f ? f.clientX + s.scrollLeft : null, "object-key-init"),
        y: cc11001100_hook("y", o ? o.pageY : "pageY" in f ? f.pageY : "clientY" in f ? f.clientY + s.scrollTop : null, "object-key-init"),
        s: cc11001100_hook("s", n.exists(f, "buttons") ? f.buttons : null, "object-key-init"),
        et: cc11001100_hook("et", n.time(f.timeStamp), "object-key-init")
      }, "var-init");
    return u.push(l), r === 2 || r === 1 ? n.snapshot(t) : !c && (!p || i && i.length > 0) && (n.error({
      FN: cc11001100_hook("FN", "enqueue", "object-key-init"),
      S: cc11001100_hook("S", "C", "object-key-init"),
      ET: cc11001100_hook("ET", f.type, "object-key-init"),
      EVTS: cc11001100_hook("EVTS", i.join("+"), "object-key-init")
    }), c = cc11001100_hook("c", !0, "assign")), !0;
  }
  function a(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", n.x - t.x, "var-init"),
      r = cc11001100_hook("r", n.y - t.y, "var-init");
    return Math.sqrt(i * i + r * r);
  }
  function g(i) {
    cc11001100_hook("i", i, "function-parameter");
    var h = cc11001100_hook("h", u.length, "var-init"),
      e,
      s,
      r;
    if (h > 0) {
      for (e = cc11001100_hook("e", t in f ? f[t] : null, "assign"), s = cc11001100_hook("s", 0, "assign"); s < h; s++) r = cc11001100_hook("r", u[s], "assign"), (s === 0 || s === h - 1 || r.e.indexOf("move") < 0 || a(r, e) > v) && (r.l = cc11001100_hook("r.l", n.match(r._e), "assign"), e === null ? (n.metric(1, r.t), e = cc11001100_hook("e", f[t] = cc11001100_hook("f[t]", n.clone(r), "assign"), "assign"), i[t].push(r)) : (o += cc11001100_hook("o", a(r, e), "assign"), i[t].push(n.delta(e, r))));
      u = cc11001100_hook("u", [], "assign");
    }
    n.metric(9, parseInt(o));
  }
  function nt() {
    r = cc11001100_hook("r", 3, "assign");
    l(sj_ue, h);
    r = cc11001100_hook("r", 4, "assign");
  }
  var t = cc11001100_hook("t", "C", "var-init"),
    u = cc11001100_hook("u", [], "var-init"),
    f = cc11001100_hook("f", {}, "var-init"),
    v = cc11001100_hook("v", n.config[t].distance, "var-init"),
    e = cc11001100_hook("e", ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"], "var-init"),
    o,
    s,
    y,
    c = cc11001100_hook("c", !1, "var-init"),
    r = cc11001100_hook("r", 0, "var-init"),
    i = cc11001100_hook("i", [], "var-init"),
    p = cc11001100_hook("p", _G !== undefined && _G.EF !== undefined && _G.EF.bmcov === 1, "var-init");
  n.register({
    id: cc11001100_hook("id", t, "object-key-init"),
    check: cc11001100_hook("check", w, "object-key-init"),
    load: cc11001100_hook("load", b, "object-key-init"),
    compute: cc11001100_hook("compute", g, "object-key-init"),
    unload: cc11001100_hook("unload", nt, "object-key-init")
  });
}(BM), function (n) {
  function e() {
    return !0;
  }
  function o(n) {
    cc11001100_hook("n", n, "function-parameter");
    n[t] = cc11001100_hook("n[t]", [], "assign");
    u = cc11001100_hook("u", n, "assign");
    f(sj_be, i);
    s();
  }
  function f(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var u, i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) u = cc11001100_hook("u", r[i], "assign"), n(document, u, t, !1);
  }
  function s() {
    for (var u, r = cc11001100_hook("r", n.dequeue("EVT"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < r.length; t++) u = cc11001100_hook("u", r[t].i, "assign"), u.type === "keydown" && i(u, r[t].t);
  }
  function i(i, r) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return i = cc11001100_hook("i", i || _w.event, "assign"), r = cc11001100_hook("r", r || n.time(), "assign"), u[t].push({
      t: cc11001100_hook("t", r, "object-key-init"),
      l: cc11001100_hook("l", n.observe(i.target, r, t), "object-key-init"),
      e: cc11001100_hook("e", i.type, "object-key-init"),
      m: cc11001100_hook("m", i.shiftKey << 1 | i.ctrlKey << 2 | i.altKey << 3 | i.metaKey << 4 | (i.repeat || 0) << 5 | (i.isComposing || 0) << 6 | (i.location || 0) << 16, "object-key-init"),
      et: cc11001100_hook("et", n.time(i.timeStamp), "object-key-init")
    }), n.snapshot(t), !0;
  }
  function h() {}
  function c() {
    f(sj_ue, i);
  }
  var t = cc11001100_hook("t", "K", "var-init"),
    r = cc11001100_hook("r", ["keydown", "keypress"], "var-init"),
    u;
  n.register({
    id: cc11001100_hook("id", t, "object-key-init"),
    check: cc11001100_hook("check", e, "object-key-init"),
    load: cc11001100_hook("load", o, "object-key-init"),
    compute: cc11001100_hook("compute", h, "object-key-init"),
    unload: cc11001100_hook("unload", c, "object-key-init")
  });
}(BM), function (n) {
  function l() {
    return !0;
  }
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    var f, y, o, l, a;
    typeof sj_cook != "undefined" && (f = cc11001100_hook("f", sj_cook.get("_SS", "fldcp"), "assign"), f && f == "1") || (t[i] = cc11001100_hook("t[i]", [], "assign"), s = cc11001100_hook("s", t, "assign"), n.metric(10, 0), e(sj_be, u), r = cc11001100_hook("r", !0, "assign"), v(), h && (h = cc11001100_hook("h", !1, "assign"), y = cc11001100_hook("y", c ? "HVE" : "HV", "assign"), o = cc11001100_hook("o", sj_cook.get("SRCHHPGUSR", y), "assign"), o && o.length > 0 && location.href.indexOf("&rdr=1") === -1 && location.href.indexOf("?") > 0 ? (l = cc11001100_hook("l", location.href + "&rdr=1" + (_G && _G.IG ? "&rdrig=" + _G.IG : ""), "assign"), typeof sj_lc != "undefined" ? window.sj_lc(l) : location.href = cc11001100_hook("location.href", l, "assign")) : (a = cc11001100_hook("a", document.getElementById("b_content"), "assign"), a && (a.style.visibility = cc11001100_hook("a.style.visibility", "visible", "assign")))));
  }
  function e(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r, i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) r = cc11001100_hook("r", o[i], "assign"), n(r === "resize" ? window : document, window.navigator.pointerEnabled ? r.replace("mouse", "pointer") : r, t, !1);
  }
  function v() {
    if (n.dequeue) {
      var t = cc11001100_hook("t", n.dequeue("EVT"), "var-init");
      t && t.length > 0 && u(t[0].i, t[0].t);
    }
  }
  function u(t, f) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (r) {
      t = cc11001100_hook("t", t || _w.event, "assign");
      var o = cc11001100_hook("o", "" + Math.round(new Date().getTime() / 1e3), "var-init"),
        h = cc11001100_hook("h", (_G === null || _G === void 0 ? void 0 : _G.Salt) || "notFound", "var-init");
      s[i].push({
        t: cc11001100_hook("t", f || n.time(), "object-key-init"),
        e: cc11001100_hook("e", t.type, "object-key-init"),
        s: cc11001100_hook("s", o, "object-key-init")
      });
      sj_cook.set("SRCHHPGUSR", "HV", o, !0, "/");
      sj_cook.set("SRCHHPGUSR", "HVE", h, !0, "/");
      r = cc11001100_hook("r", !1, "assign");
      e(sj_ue, u);
      n.metric(10, 1);
      n.snapshot(i);
    }
    return !0;
  }
  function y() {}
  function p() {
    r && (e(sj_ue, u), r = cc11001100_hook("r", !1, "assign"));
  }
  var f,
    i = cc11001100_hook("i", "BD", "var-init"),
    o = cc11001100_hook("o", ["click", "mousedown", "mouseup", "touchstart", "touchend", "mousemove", "touchmove", "scroll", "keydown", "resize"], "var-init"),
    s,
    r = cc11001100_hook("r", !1, "var-init"),
    t = cc11001100_hook("t", n.config[i], "var-init"),
    h = cc11001100_hook("h", t && t.basic ? t.basic : !1, "var-init"),
    c = cc11001100_hook("c", (f = cc11001100_hook("f", t === null || t === void 0 ? void 0 : t.e, "assign")) !== null && f !== void 0 ? f : !1, "var-init");
  n.register({
    id: cc11001100_hook("id", i, "object-key-init"),
    check: cc11001100_hook("check", l, "object-key-init"),
    load: cc11001100_hook("load", a, "object-key-init"),
    compute: cc11001100_hook("compute", y, "object-key-init"),
    unload: cc11001100_hook("unload", p, "object-key-init")
  });
}(BM), function (n) {
  function o() {
    return !0;
  }
  function s(o) {
    cc11001100_hook("o", o, "function-parameter");
    f = cc11001100_hook("f", o, "assign");
    f[r] = cc11001100_hook("f[r]", [], "assign");
    try {
      if (typeof navigator != "object") {
        o[r].push({
          a: cc11001100_hook("a", i, "object-key-init"),
          h: cc11001100_hook("h", u, "object-key-init"),
          pf: cc11001100_hook("pf", undefined, "object-key-init"),
          ps: cc11001100_hook("ps", undefined, "object-key-init"),
          ch: cc11001100_hook("ch", undefined, "object-key-init"),
          os: cc11001100_hook("os", undefined, "object-key-init"),
          cc: cc11001100_hook("cc", undefined, "object-key-init"),
          op: cc11001100_hook("op", undefined, "object-key-init"),
          br: cc11001100_hook("br", undefined, "object-key-init")
        });
        return;
      }
      navigator.webdriver && (i = cc11001100_hook("i", 1, "assign"));
      document.__selenium_unwrapped || document.__webdriver_evaluate || document.__driver_evaluate ? i = cc11001100_hook("i", 2, "assign") : typeof document.$cdc_asdjflasutopfhvcZLmcfl_ != "undefined" ? i = cc11001100_hook("i", 3, "assign") : typeof process == "object" && window.process.type === "renderer" ? i = cc11001100_hook("i", 4, "assign") : typeof process == "object" && typeof window.process.versions == "object" && window.process.versions.hasOwnProperty("electron") ? i = cc11001100_hook("i", 4, "assign") : window.__nightmare ? i = cc11001100_hook("i", 6, "assign") : (window.callPhantom || window._phantom || window.phantom) && (i = cc11001100_hook("i", 7, "assign"));
      (navigator.userAgent && navigator.userAgent.search("headless") != -1 || navigator.appVersion && navigator.appVersion.search("headless") != -1) && (u = cc11001100_hook("u", 1, "assign"));
      t.platform = cc11001100_hook("t.platform", navigator.platform, "assign");
      t.productSub = cc11001100_hook("t.productSub", navigator.productSub, "assign");
      t.chrome = cc11001100_hook("t.chrome", typeof chrome != "undefined" ? 1 : undefined, "assign");
      t.oscpu = cc11001100_hook("t.oscpu", typeof navigator.oscpu != "undefined" ? 1 : undefined, "assign");
      t.cpuClass = cc11001100_hook("t.cpuClass", typeof navigator.cpuClass != "undefined" ? 1 : undefined, "assign");
      t.opera = cc11001100_hook("t.opera", typeof opera != "undefined" ? 1 : undefined, "assign");
      t.brave = cc11001100_hook("t.brave", typeof opera != "undefined" ? 1 : undefined, "assign");
      o[r].push({
        a: cc11001100_hook("a", i, "object-key-init"),
        h: cc11001100_hook("h", u, "object-key-init"),
        pf: cc11001100_hook("pf", t.platform, "object-key-init"),
        ps: cc11001100_hook("ps", t.productSub, "object-key-init"),
        ch: cc11001100_hook("ch", t.chrome, "object-key-init"),
        os: cc11001100_hook("os", t.oscpu, "object-key-init"),
        cc: cc11001100_hook("cc", t.cpuClass, "object-key-init"),
        op: cc11001100_hook("op", t.opera, "object-key-init"),
        br: cc11001100_hook("br", t.brave, "object-key-init")
      });
      n.snapshot(r);
    } catch (s) {}
  }
  function h() {}
  function c() {}
  var r = cc11001100_hook("r", "BF", "var-init"),
    e = cc11001100_hook("e", "boxmodel", "var-init"),
    i = cc11001100_hook("i", 0, "var-init"),
    u = cc11001100_hook("u", 0, "var-init"),
    t = cc11001100_hook("t", {}, "var-init"),
    f;
  n.register({
    id: cc11001100_hook("id", r, "object-key-init"),
    check: cc11001100_hook("check", o, "object-key-init"),
    load: cc11001100_hook("load", s, "object-key-init"),
    compute: cc11001100_hook("compute", c, "object-key-init"),
    unload: cc11001100_hook("unload", h, "object-key-init")
  });
}(BM);