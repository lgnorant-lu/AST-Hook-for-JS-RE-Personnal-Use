!function (e, t) {
  var n = cc11001100_hook("n", 1e4, "var-init");
  e.location.hostname && !/^(?:[\w-]+\.)*(taobao|tmall)\.com$/.test(e.location.hostname) && (window.AWSC_SPECIFY_ETMODULE_ADDRESSES = cc11001100_hook("window.AWSC_SPECIFY_ETMODULE_ADDRESSES", {
    normalAddresses: cc11001100_hook("normalAddresses", ["https://g.alicdn.com/AWSC/et/1.82.2/et_f.js"], "object-key-init")
  }, "assign"));
  var g_moduleConfig = cc11001100_hook("g_moduleConfig", {
      uabModule: {
        grey: cc11001100_hook("grey", ["AWSC/uab/1.140.0/collina.js"], "object-key-init"),
        stable: cc11001100_hook("stable", ["AWSC/uab/1.140.0/collina.js"], "object-key-init"),
        greyBr: cc11001100_hook("greyBr", ["AWSC-br/uab/1.140.0/collina.js"], "object-key-init"),
        stableBr: cc11001100_hook("stableBr", ["AWSC-br/uab/1.140.0/collina.js"], "object-key-init"),
        ratio: cc11001100_hook("ratio", 1e4, "object-key-init"),
        greyConfig: {},
        stableConfig: {}
      },
      fyModule: {
        grey: cc11001100_hook("grey", ["AWSC/fireyejs/1.231.13/fireyejs.js"], "object-key-init"),
        stable: cc11001100_hook("stable", ["AWSC/fireyejs/1.231.13/fireyejs.js"], "object-key-init"),
        greyBr: cc11001100_hook("greyBr", ["AWSC-br/fireyejs/1.227.0/fireyejs.js"], "object-key-init"),
        stableBr: cc11001100_hook("stableBr", ["AWSC-br/fireyejs/1.227.0/fireyejs.js"], "object-key-init"),
        ratio: cc11001100_hook("ratio", 1e4, "object-key-init"),
        greyConfig: {},
        stableConfig: {}
      },
      nsModule: {
        grey: cc11001100_hook("grey", ["js/nc/60.js"], "object-key-init"),
        stable: cc11001100_hook("stable", ["js/nc/60.js"], "object-key-init"),
        ratio: cc11001100_hook("ratio", 1e4, "object-key-init"),
        greyConfig: {},
        stableConfig: {}
      },
      umidPCModule: {
        grey: cc11001100_hook("grey", ["AWSC/WebUMID/1.93.0/um.js"], "object-key-init"),
        stable: cc11001100_hook("stable", ["AWSC/WebUMID/1.93.0/um.js"], "object-key-init"),
        greyBr: cc11001100_hook("greyBr", ["AWSC-br/WebUMID/1.93.0/um.js"], "object-key-init"),
        stableBr: cc11001100_hook("stableBr", ["AWSC-br/WebUMID/1.93.0/um.js"], "object-key-init"),
        ratio: cc11001100_hook("ratio", 1e4, "object-key-init"),
        greyConfig: {},
        stableConfig: {}
      },
      etModule: {
        grey: cc11001100_hook("grey", ["AWSC/et/1.83.8/et_f.js", "AWSC/et/1.83.8/et_f.js"], "object-key-init"),
        stable: cc11001100_hook("stable", ["AWSC/et/1.82.2/et_f.js", "AWSC/et/1.82.2/et_n.js"], "object-key-init"),
        greyBr: cc11001100_hook("greyBr", ["AWSC-br/et/1.80.0/et_f.js", "AWSC-br/et/1.80.1/et_n.js"], "object-key-init"),
        stableBr: cc11001100_hook("stableBr", ["AWSC-br/et/1.80.0/et_f.js", "AWSC-br/et/1.80.1/et_n.js"], "object-key-init"),
        ratio: cc11001100_hook("ratio", 1e3, "object-key-init"),
        greyConfig: {
          whitelist: cc11001100_hook("whitelist", ["*"], "object-key-init")
        },
        stableConfig: {
          whitelist: cc11001100_hook("whitelist", ["*"], "object-key-init")
        }
      },
      ncModule: {
        grey: cc11001100_hook("grey", ["AWSC/nc/1.97.0/nc.js"], "object-key-init"),
        stable: cc11001100_hook("stable", ["AWSC/nc/1.97.0/nc.js"], "object-key-init"),
        ratio: cc11001100_hook("ratio", 1e4, "object-key-init"),
        greyConfig: {},
        stableConfig: {}
      }
    }, "var-init"),
    o = cc11001100_hook("o", [{
      name: cc11001100_hook("name", "umidPCModule", "object-key-init"),
      features: cc11001100_hook("features", ["umpc", "um", "umh5"], "object-key-init"),
      depends: cc11001100_hook("depends", [], "object-key-init"),
      sync: cc11001100_hook("sync", !1, "object-key-init")
    }, {
      name: cc11001100_hook("name", "uabModule", "object-key-init"),
      features: cc11001100_hook("features", ["uab"], "object-key-init"),
      depends: cc11001100_hook("depends", [], "object-key-init"),
      sync: cc11001100_hook("sync", !1, "object-key-init")
    }, {
      name: cc11001100_hook("name", "fyModule", "object-key-init"),
      features: cc11001100_hook("features", ["fy"], "object-key-init"),
      depends: cc11001100_hook("depends", [], "object-key-init"),
      sync: cc11001100_hook("sync", !1, "object-key-init")
    }, {
      name: cc11001100_hook("name", "nsModule", "object-key-init"),
      features: cc11001100_hook("features", ["ns"], "object-key-init"),
      depends: cc11001100_hook("depends", [], "object-key-init"),
      sync: cc11001100_hook("sync", !1, "object-key-init")
    }, {
      name: cc11001100_hook("name", "etModule", "object-key-init"),
      features: cc11001100_hook("features", ["et"], "object-key-init"),
      depends: cc11001100_hook("depends", [], "object-key-init"),
      sync: cc11001100_hook("sync", !1, "object-key-init")
    }, {
      name: cc11001100_hook("name", "ncModule", "object-key-init"),
      features: cc11001100_hook("features", ["nc", "nvc", "ic"], "object-key-init"),
      depends: cc11001100_hook("depends", ["fy"], "object-key-init"),
      sync: cc11001100_hook("sync", !1, "object-key-init")
    }], "var-init"),
    r = cc11001100_hook("r", navigator.userAgent, "var-init"),
    a = cc11001100_hook("a", r.match(/Chrome\/(\d*)/), "var-init");
  a && (a = cc11001100_hook("a", +a[1], "assign"));
  var s = cc11001100_hook("s", r.match(/Edge\/([\d]*)/), "var-init"),
    i = cc11001100_hook("i", r.match(/Safari\/([\d]*)/), "var-init"),
    c = cc11001100_hook("c", r.match(/Firefox\/([\d]*)/), "var-init"),
    d = cc11001100_hook("d", r.match(/MSIE|Trident/), "var-init");
  function l() {
    var e = cc11001100_hook("e", "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D", "var-init");
    return "WebkitAppearance" in document.documentElement.style && escape(navigator.javaEnabled.toString()) === e ? !0 : !1;
  }
  function u(t, o) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var r = cc11001100_hook("r", "AWSC_SPECIFY_" + t.toUpperCase() + "_ADDRESSES", "var-init");
    if (e[r]) return e[r];
    var u = cc11001100_hook("u", {
      normalAddresses: cc11001100_hook("normalAddresses", [], "object-key-init"),
      brAddresses: cc11001100_hook("brAddresses", [], "object-key-init")
    }, "var-init");
    for (var f in g_moduleConfig) if (g_moduleConfig.hasOwnProperty(f) && f === t) {
      var m = cc11001100_hook("m", g_moduleConfig[f], "var-init"),
        g = cc11001100_hook("g", Math.ceil(Math.random() * n) <= m.ratio, "var-init");
      u.normalAddresses = cc11001100_hook("u.normalAddresses", g ? m.grey.slice() : m.stable.slice(), "assign"), m.stableBr && m.greyBr && (u.brAddresses = cc11001100_hook("u.brAddresses", g ? m.greyBr.slice() : m.stableBr.slice(), "assign")), "etModule" === t && (s ? (u.normalAddresses.pop(), u.brAddresses.pop()) : a ? (u.normalAddresses.pop(), u.brAddresses.pop()) : i || c || d ? (u.normalAddresses.shift(), u.brAddresses.shift()) : l() ? (u.normalAddresses.pop(), u.brAddresses.pop()) : (u.normalAddresses.shift(), u.brAddresses.shift()));
      for (var p = cc11001100_hook("p", 0, "var-init"); p < u.normalAddresses.length; p++) {
        var b = cc11001100_hook("b", o ? "https://" + o + "/" : v, "var-init");
        ("https://assets.alicdn.com/" === b || "https://lzd-g.slatic.net/" === b || "https://g.lazcdn.com/" === b) && (b += cc11001100_hook("b", "g/", "assign")), u.normalAddresses[p] = cc11001100_hook("u.normalAddresses[p]", b + u.normalAddresses[p], "assign"), u.brAddresses[p] && (u.brAddresses[p] = cc11001100_hook("u.brAddresses[p]", b + u.brAddresses[p], "assign"));
      }
      return u;
    }
  }
  var f = cc11001100_hook("f", [], "var-init"),
    m = cc11001100_hook("m", "loading", "var-init"),
    g = cc11001100_hook("g", "loaded", "var-init"),
    p = cc11001100_hook("p", "timeout", "var-init"),
    b = cc11001100_hook("b", "unexpected", "var-init"),
    h = cc11001100_hook("h", "no such feature", "var-init"),
    A = cc11001100_hook("A", new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"), "var-init"),
    v = cc11001100_hook("v", y(C()), "var-init");
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "https://g.alicdn.com/", "var-init");
    if (!e) return t;
    if (/aliexpress/.test(location.href)) return "https://aeis.alicdn.com/";
    var n = cc11001100_hook("n", A.exec(e), "var-init");
    return n ? "https://" + n[3] + (n[4] ? ":" + n[4] : "") + "/" : t;
  }
  function C() {
    for (var e = cc11001100_hook("e", document.getElementsByTagName("script"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
      var n = cc11001100_hook("n", e[t], "var-init"),
        o = cc11001100_hook("o", n.hasAttribute ? n.src : n.getAttribute("src", 4), "var-init");
      if (/\/awsc\.js/.test(o)) return o;
    }
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", void 0, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < o.length; n++) {
      for (var r = cc11001100_hook("r", o[n], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.features.length; a++) if (r.features[a] === e) {
        t = cc11001100_hook("t", r, "assign");
        break;
      }
      if (t) break;
    }
    return t;
  }
  function j(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < f.length; t++) {
      var n = cc11001100_hook("n", f[t], "var-init");
      if (n.name === e) return n;
    }
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", void 0, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < o.length; n++) {
      var r = cc11001100_hook("r", o[n], "var-init");
      if (r.name === e) {
        t = cc11001100_hook("t", r, "assign");
        break;
      }
      if (t) break;
    }
    return t;
  }
  function _(e, n, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    if (o) for (var r = cc11001100_hook("r", 0, "var-init"); r < e.normalAddresses.length; r++) {
      var a = cc11001100_hook("a", e.normalAddresses[r], "var-init");
      t.write("<script src=" + a + "></script>");
    } else {
      function s(e, o, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        for (var a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) {
          var s = cc11001100_hook("s", e[a], "var-init"),
            i = cc11001100_hook("i", t.createElement("script"), "var-init");
          i.async = cc11001100_hook("i.async", !1, "assign"), i.src = cc11001100_hook("i.src", s, "assign"), i.id = cc11001100_hook("i.id", n, "assign");
          var c = cc11001100_hook("c", new Date().getTime(), "var-init");
          i.onerror = cc11001100_hook("i.onerror", o || function () {}, "assign");
          var d = cc11001100_hook("d", window.awscrprtrt || .001, "var-init");
          Math.random() < d ? i.onload = cc11001100_hook("i.onload", r || function () {
            W("loadtime", "loadid=" + n + "&time=" + (new Date().getTime() - c), "awsc_load");
          }, "assign") : i.onload = cc11001100_hook("i.onload", r || function () {}, "assign");
          var l = cc11001100_hook("l", t.getElementsByTagName("script")[0], "var-init");
          l && l.parentNode ? l.parentNode.insertBefore(i, l) : (l = cc11001100_hook("l", t.body || t.head, "assign"), l && l.appendChild(i));
        }
      }
      s(e.normalAddresses);
    }
  }
  function W(t, n, o) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var r = cc11001100_hook("r", "https://acjs.aliyun.com/error?v=" + t + "&e=" + encodeURIComponent(n) + "&stack=" + encodeURIComponent(o) + "&version=1.0.0&log=awsc&href=" + encodeURIComponent(location.href), "var-init"),
      a = cc11001100_hook("a", new Image(), "var-init"),
      s = cc11001100_hook("s", "_awsc_img_" + Math.floor(1e6 * Math.random()), "var-init");
    e[s] = cc11001100_hook("e[s]", a, "assign"), a.onload = cc11001100_hook("a.onload", a.onerror = cc11001100_hook("a.onerror", function () {
      try {
        delete e[s];
      } catch (t) {
        e[s] = cc11001100_hook("e[s]", null, "assign");
      }
    }, "assign"), "assign"), a.src = cc11001100_hook("a.src", r, "assign");
  }
  function T(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    Math.random() < 1e-4 && W("awsc_state", "feature=" + e.name + "&state=" + e.state + "&href=" + encodeURIComponent(location.href));
    for (var n = cc11001100_hook("n", void 0, "var-init"); n = cc11001100_hook("n", e.callbacks.shift(), "assign");) try {
      if ("function" == typeof n) n(e.state, e.exportObj);else if ("object" == typeof n) {
        var o = cc11001100_hook("o", e.exportObj, "var-init");
        o && "function" == typeof o.init && o.init(n);
      }
    } catch (r) {
      if (t) throw r;
      W(e.name, r.message, r.stack);
    }
  }
  function k(e, t, n, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var r = cc11001100_hook("r", S(e), "var-init");
    if (!r) return "function" == typeof t && t(h), void 0;
    var a = cc11001100_hook("a", n && n.cdn, "var-init"),
      s = cc11001100_hook("s", n && n.sync, "var-init"),
      i = cc11001100_hook("i", n && n.timeout || 5e3, "var-init");
    if (0 !== r.depends.length) for (var c = cc11001100_hook("c", 0, "var-init"); c < r.depends.length; c++) {
      var d = cc11001100_hook("d", r.depends[c], "var-init");
      n && (delete n.sync, delete n.timeout, delete n.cdn), M(d, void 0, n);
    }
    var l = cc11001100_hook("l", o || {}, "var-init");
    l.module = cc11001100_hook("l.module", r, "assign"), l.name = cc11001100_hook("l.name", e, "assign"), l.state = cc11001100_hook("l.state", m, "assign"), l.callbacks = cc11001100_hook("l.callbacks", l.callbacks || [], "assign"), l.options = cc11001100_hook("l.options", n, "assign"), t && l.callbacks.push(t), l.timeoutTimer = cc11001100_hook("l.timeoutTimer", setTimeout(function () {
      l.state = cc11001100_hook("l.state", p, "assign"), T(l, n && n.throwExceptionInCallback);
    }, i), "assign"), o || f.push(l);
    var g = cc11001100_hook("g", r.sync, "var-init");
    s && (g = cc11001100_hook("g", s, "assign"));
    var b = cc11001100_hook("b", u(r.name, a), "var-init");
    _(b, "AWSC_" + r.name, g);
  }
  function M(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", j(e), "var-init");
    if (o) {
      if (o.state === p) k(e, t, n, o);else if (o.state === g) {
        if ("function" == typeof t) t(o.state, o.exportObj);else if ("object" == typeof t) {
          var r = cc11001100_hook("r", o.exportObj, "var-init");
          r && "function" == typeof r.init && r.init(t);
        }
      } else o.state === m ? t && o.callbacks.push(t) : void 0;
    } else k(e, t, n);
  }
  function D(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", !1, "var-init");
    try {
      var r = cc11001100_hook("r", w(e), "var-init");
      r || void 0, r.moduleLoadStatus = cc11001100_hook("r.moduleLoadStatus", g, "assign");
      for (var a = cc11001100_hook("a", void 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < f.length; s++) {
        var i = cc11001100_hook("i", f[s], "var-init");
        i.module === r && i.name === t && (o = cc11001100_hook("o", i.options && i.options.throwExceptionInCallback, "assign"), a = cc11001100_hook("a", i, "assign"), clearTimeout(a.timeoutTimer), delete a.timeoutTimer, a.exportObj = cc11001100_hook("a.exportObj", n, "assign"), i.state === m || i.state === p ? (a.state = cc11001100_hook("a.state", g, "assign"), setTimeout(function () {
          T(a, o);
        }, 0)) : void 0);
      }
      a || (a = cc11001100_hook("a", {}, "assign"), a.module = cc11001100_hook("a.module", r, "assign"), a.name = cc11001100_hook("a.name", t, "assign"), a.state = cc11001100_hook("a.state", g, "assign"), a.exportObj = cc11001100_hook("a.exportObj", n, "assign"), a.callbacks = cc11001100_hook("a.callbacks", [], "assign"), f.push(a));
    } catch (c) {
      if (o) throw c;
      W("awsc_error", c.message, c.stack);
    }
  }
  function E(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.AWSCFY = cc11001100_hook("e.AWSCFY", function () {}, "assign"), e.AWSC.configFY = cc11001100_hook("e.AWSC.configFY", function (e, n, o, r) {
      return t(e, n, o, r);
    }, "assign"), e.AWSC.configFYSync = cc11001100_hook("e.AWSC.configFYSync", function (e, n) {
      return t(null, e, n);
    }, "assign");
    function t(t, n, o, r) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var a = cc11001100_hook("a", location.protocol + "//" + location.host + location.pathname, "var-init"),
        s = cc11001100_hook("s", new e.AWSCFY(), "var-init");
      e._umopt_npfp = cc11001100_hook("e._umopt_npfp", 0, "assign");
      var i = cc11001100_hook("i", !1, "var-init");
      s.umidToken = cc11001100_hook("s.umidToken", "defaultToken1_um_not_loaded@@" + a + "@@" + new Date().getTime(), "assign"), e.AWSC.use("um", function (e, t) {
        "loaded" === e ? (s.umidToken = cc11001100_hook("s.umidToken", "defaultToken3_init_callback_not_called@@" + a + "@@" + new Date().getTime(), "assign"), t.init(n, function (e, t) {
          "success" === e ? s.umidToken = cc11001100_hook("s.umidToken", t.tn, "assign") : s.umidToken = cc11001100_hook("s.umidToken", "defaultToken4_init_failed with " + e + "@@" + a + "@@" + new Date().getTime(), "assign"), i = cc11001100_hook("i", !0, "assign"), l();
        })) : (s.umidToken = cc11001100_hook("s.umidToken", "defaultToken2_load_failed with " + e + "@@" + a + "@@" + new Date().getTime(), "assign"), i = cc11001100_hook("i", !0, "assign"), l());
      });
      var c = cc11001100_hook("c", !1, "var-init");
      if (s.getUA = cc11001100_hook("s.getUA", function () {
        return "defaultUA1_uab_not_loaded@@" + a + "@@" + new Date().getTime();
      }, "assign"), e.AWSC.use("uab", function (e, t) {
        c = cc11001100_hook("c", !0, "assign"), "loaded" === e ? (s.uabModule = cc11001100_hook("s.uabModule", t, "assign"), s.uabConfig = cc11001100_hook("s.uabConfig", o, "assign"), s.getUA = cc11001100_hook("s.getUA", function () {
          return this.uabModule.getUA(this.uabConfig);
        }, "assign")) : s.getUA = cc11001100_hook("s.getUA", function () {
          return "defaultUA2_load_failed with " + e + "@@" + a + "@@" + new Date().getTime();
        }, "assign"), l();
      }), null != t) var d = cc11001100_hook("d", e.setTimeout(function () {
        l(!0);
      }, r ? r : 2e3), "var-init");
      function l(n) {
        cc11001100_hook("n", n, "function-parameter");
        null != t && (c && i || n) && (t(s), e.clearTimeout(d));
      }
      return null == t ? s : void 0;
    }
  }
  function U(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = function () {};
    e.AWSC.configFYEx = cc11001100_hook("e.AWSC.configFYEx", function (e, t, o) {
      return n(e, t, o);
    }, "assign"), e.AWSC.configFYSyncEx = cc11001100_hook("e.AWSC.configFYSyncEx", function (e) {
      return n(null, e);
    }, "assign");
    function n(n, o, r) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var a = cc11001100_hook("a", (location.protocol + "//" + location.host + location.pathname).substr(0, 128), "var-init"),
        s = cc11001100_hook("s", new t(), "var-init");
      if (r = cc11001100_hook("r", r || 5e3, "assign"), "function" == typeof n) var i = cc11001100_hook("i", e.setTimeout(function () {
        c();
      }, r), "var-init");
      function c() {
        "function" == typeof n && (n(s), e.clearTimeout(i));
      }
      return s.getFYToken = cc11001100_hook("s.getFYToken", s.getUidToken = cc11001100_hook("s.getUidToken", function () {
        return "defaultFY1_fyjs_not_loaded@@" + a + "@@" + new Date().getTime();
      }, "assign"), "assign"), e.fyglobalopt = cc11001100_hook("e.fyglobalopt", o, "assign"), e.AWSC.use("fy", function (e, t) {
        "loaded" === e ? (s.getFYToken = cc11001100_hook("s.getFYToken", s.getUidToken = cc11001100_hook("s.getUidToken", function () {
          return "defaultFY3_fyjs_not_initialized@@" + a + "@@" + new Date().getTime();
        }, "assign"), "assign"), s.fyObj = cc11001100_hook("s.fyObj", t, "assign"), t.init(o, function (e) {
          s.getFYToken = cc11001100_hook("s.getFYToken", function (e) {
            return o.reqUrl = cc11001100_hook("o.reqUrl", e, "assign"), this.fyObj.getFYToken(o);
          }, "assign"), s.getUidToken = cc11001100_hook("s.getUidToken", function () {
            return this.fyObj.getUidToken(o);
          }, "assign"), c();
        })) : (s.getFYToken = cc11001100_hook("s.getFYToken", s.getUidToken = cc11001100_hook("s.getUidToken", function () {
          return "defaultFY2_load_failed with " + e + "@@" + a + "@@" + new Date().getTime();
        }, "assign"), "assign"), c());
      }, {
        timeout: cc11001100_hook("timeout", r, "object-key-init")
      }), "function" == typeof n ? void 0 : s;
    }
  }
  function B(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", g_moduleConfig.etModule, "var-init"),
      o = cc11001100_hook("o", Math.ceil(Math.random() * n) <= t.ratio, "var-init"),
      r = cc11001100_hook("r", o ? t.greyConfig.whitelist : t.stableConfig.whitelist, "var-init"),
      a = cc11001100_hook("a", new RegExp(("^" + r.join("$|^") + "$").replace(/\*/g, ".*")), "var-init");
    a.test(location.host + location.pathname) && (window.etrprtrt = cc11001100_hook("window.etrprtrt", .01, "assign"), e.__etModule || e.AWSC.use("et"));
  }
  var F = cc11001100_hook("F", window.awscrprtrt || .01, "var-init");
  Math.random() < F && W("init", "report", "awsc");
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.AWSC || (e.AWSC = cc11001100_hook("e.AWSC", {}, "assign"), e.AWSC.use = cc11001100_hook("e.AWSC.use", M, "assign"), e.AWSCInner = cc11001100_hook("e.AWSCInner", {}, "assign"), e.AWSCInner.register = cc11001100_hook("e.AWSCInner.register", D, "assign"), E(e), U(e), B(e));
  }
  x(e);
}(window, document);