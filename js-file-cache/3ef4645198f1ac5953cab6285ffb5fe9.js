var Microsoft;
(() => {
  "use strict";

  var e,
    t = cc11001100_hook("t", {
      d: cc11001100_hook("d", (e, n) => {
        for (var s in n) t.o(n, s) && !t.o(e, s) && Object.defineProperty(e, s, {
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          get: cc11001100_hook("get", n[s], "object-key-init")
        });
      }, "object-key-init"),
      o: cc11001100_hook("o", (e, t) => Object.prototype.hasOwnProperty.call(e, t), "object-key-init"),
      r: cc11001100_hook("r", e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: cc11001100_hook("value", "Module", "object-key-init")
        }), Object.defineProperty(e, "__esModule", {
          value: cc11001100_hook("value", !0, "object-key-init")
        });
      }, "object-key-init")
    }, "var-init"),
    n = cc11001100_hook("n", {}, "var-init");
  t.r(n), t.d(n, {
    Translator: cc11001100_hook("Translator", () => Ge, "object-key-init")
  }), function (e) {
    e[e.Off = cc11001100_hook("e.Off", 0, "assign")] = cc11001100_hook("e[e.Off = 0]", "Off", "assign"), e[e.Error = cc11001100_hook("e.Error", 1, "assign")] = cc11001100_hook("e[e.Error = 1]", "Error", "assign"), e[e.Warning = cc11001100_hook("e.Warning", 2, "assign")] = cc11001100_hook("e[e.Warning = 2]", "Warning", "assign"), e[e.Info = cc11001100_hook("e.Info", 4, "assign")] = cc11001100_hook("e[e.Info = 4]", "Info", "assign"), e[e.Debug = cc11001100_hook("e.Debug", 8, "assign")] = cc11001100_hook("e[e.Debug = 8]", "Debug", "assign"), e[e.Assert = cc11001100_hook("e.Assert", 16, "assign")] = cc11001100_hook("e[e.Assert = 16]", "Assert", "assign"), e[e.All = cc11001100_hook("e.All", 4294967295, "assign")] = cc11001100_hook("e[e.All = 4294967295]", "All", "assign");
  }(e || (e = cc11001100_hook("e", {}, "assign")));
  class s {
    constructor(e) {
      if (this.translationUrl = cc11001100_hook("this.translationUrl", e, "assign"), null == e || 0 === e.length) throw new Error("The URL can not be empty");
    }
    asyncFetchHelper(e, t, n, s, r) {
      if (null == t || 0 === t.length) return Promise.reject(new Ke("toLang cannot be null or empty"));
      if (null == n) return Promise.reject(new Ke("Must specify an array of text items to translate"));
      const o = cc11001100_hook("o", {
        from: cc11001100_hook("from", e || "", "object-key-init"),
        to: cc11001100_hook("to", t, "object-key-init")
      }, "var-init");
      let a,
        l = cc11001100_hook("l", 0, "var-init");
      for (a = cc11001100_hook("a", 0, "assign"); a < n.length; ++a) l += cc11001100_hook("l", n[a].length, "assign");
      return s({
        charactersToTranslateCount: cc11001100_hook("charactersToTranslateCount", l, "object-key-init"),
        isRetry: cc11001100_hook("isRetry", r, "object-key-init")
      }), u = cc11001100_hook("u", $e.POST, "assign"), h = cc11001100_hook("h", this.translationUrl, "assign"), d = cc11001100_hook("d", {
        query: cc11001100_hook("query", o, "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        body: cc11001100_hook("body", JSON.stringify(n), "object-key-init"),
        parser(t) {
          const n = cc11001100_hook("n", function (e, t) {
              let n;
              try {
                n = cc11001100_hook("n", JSON.parse(e.responseText), "assign");
              } catch (t) {
                throw new Ke(e.responseText);
              }
              if (ze(n) !== t) throw new Ke(Qe(n));
              return n;
            }(t, "array"), "var-init"),
            s = cc11001100_hook("s", [], "var-init");
          for (let t = cc11001100_hook("t", 0, "var-init"); n.length && t < n.length; t++) {
            const r = cc11001100_hook("r", n[t], "var-init");
            s.push({
              From: cc11001100_hook("From", e || r.detectedLanguage?.language, "object-key-init"),
              TranslatedText: cc11001100_hook("TranslatedText", r.translations[0].text, "object-key-init")
            });
          }
          return s;
        }
      }, "assign"), d = cc11001100_hook("d", d || {}, "assign"), null == u || null == h ? Promise.reject(new Ke("HTTP method or URL are not set")) : null != d.timeoutInMs && d.timeoutInMs < 0 ? Promise.reject(new Ke("Cannot have a negative timeout. Set to 0 to have no timeout")) : new Promise(function (e, t) {
        const n = cc11001100_hook("n", new XMLHttpRequest(), "var-init");
        !function (e, t, n, s) {
          if (s.query) {
            const e = cc11001100_hook("e", function (e) {
              let t = cc11001100_hook("t", "", "var-init"),
                n = cc11001100_hook("n", 0, "var-init");
              if (e) for (const s in e) n++ && (t += cc11001100_hook("t", "&", "assign")), t += cc11001100_hook("t", encodeURIComponent(s), "assign"), null != e[s] && (t += cc11001100_hook("t", "=" + encodeURIComponent(e[s]), "assign"));
              return t;
            }(s.query), "var-init");
            e.length > 0 && (t += cc11001100_hook("t", (t.indexOf("?") < 0 ? "?" : "&") + e, "assign"));
          }
          if (s.timeoutInMs && "number" === ze(s.timeoutInMs) && (e.timeout = cc11001100_hook("e.timeout", s.timeoutInMs, "assign")), e.open($e[n], t, !0), s.headers) for (const t in s.headers) e.setRequestHeader(t, s.headers[t]);
          s.contentType && e.setRequestHeader("Content-Type", s.contentType);
        }(n, h, u, d);
        let s = cc11001100_hook("s", null, "var-init");
        u != $e.GET && u != $e.HEAD && (s = cc11001100_hook("s", d.body, "assign")), n.send(s), n.onload = cc11001100_hook("n.onload", function () {
          if (n.status >= 200 && n.status < 300) {
            let s = cc11001100_hook("s", n.response, "var-init");
            if (d.parser) try {
              s = cc11001100_hook("s", d.parser(n), "assign");
            } catch (e) {
              return i.debug(e), void t(e);
            }
            e(s);
          } else t(new Ke(n.statusText, n.status, n));
        }, "assign"), n.onerror = cc11001100_hook("n.onerror", function () {
          const e = cc11001100_hook("e", n.statusText || "Failed to send the request", "var-init");
          t(new Ke(e, n.status, n));
        }, "assign"), n.ontimeout = cc11001100_hook("n.ontimeout", function () {
          t(new Ke("Timed out", -1, n));
        }, "assign");
      });
      var u, h, d;
    }
    translateAsync(e, t, n, r) {
      return this.translateAsyncHelper(e, t, n, s.NETWORK_ATTEMPTS, r, !1);
    }
    translateAsyncHelper(e, t, n, s, r, i) {
      return this.asyncFetchHelper(e, t, n, r, i).then(e => e).catch(i => 1 === s || 0 !== i.status ? Promise.reject(i) : this.translateAsyncHelper(e, t, n, s - 1, r, !0));
    }
  }
  s.NETWORK_ATTEMPTS = cc11001100_hook("s.NETWORK_ATTEMPTS", 5, "assign"), s.TEXT_CONTENT = cc11001100_hook("s.TEXT_CONTENT", "text/plain", "assign"), s.XML_CONTENT = cc11001100_hook("s.XML_CONTENT", "text/xml", "assign"), s.HTML_CONTENT = cc11001100_hook("s.HTML_CONTENT", "text/html", "assign");
  class r {
    translateAsync(e, t, n, s) {
      if (null == t || 0 === t.length) return Promise.reject(new Ke("toLang cannot be null or empty"));
      if (null == n) return Promise.reject(new Ke("Must specify an array of text items to translate"));
      "" == e && (e = cc11001100_hook("e", t, "assign"));
      let r = cc11001100_hook("r", 0, "var-init");
      n.forEach(e => {
        r += cc11001100_hook("r", e.length, "assign");
      }), s({
        charactersToTranslateCount: cc11001100_hook("charactersToTranslateCount", r, "object-key-init"),
        isRetry: cc11001100_hook("isRetry", !1, "object-key-init")
      });
      const o = cc11001100_hook("o", [], "var-init");
      for (const s of n) if (window.mockApiMap[s] && window.mockApiMap[s][t]) {
        const n = cc11001100_hook("n", window.mockApiMap[s][t], "var-init");
        o.push({
          TranslatedText: cc11001100_hook("TranslatedText", n, "object-key-init"),
          From: cc11001100_hook("From", e, "object-key-init")
        });
      } else i.error("Could not translate: " + s + " from " + e + " to " + t), o.push({
        From: cc11001100_hook("From", e, "object-key-init"),
        TranslatedText: cc11001100_hook("TranslatedText", "", "object-key-init")
      });
      return Promise.resolve(o);
    }
  }
  const i = cc11001100_hook("i", {
      info(...t) {
        o.logLevel & e.Info && console.info(...t);
      },
      warning(...t) {
        o.logLevel & e.Warning && console.warn(...t);
      },
      error(...t) {
        o.logLevel & e.Error && console.error(...t);
      },
      assert(t, ...n) {
        o.logLevel & e.Debug && (n.unshift(t), console.assert(t, ...n));
      },
      debug(...t) {
        o.logLevel & e.Debug && console.debug(...t);
      }
    }, "var-init"),
    o = cc11001100_hook("o", {
      logLevel: cc11001100_hook("logLevel", e.Error, "object-key-init"),
      debug: cc11001100_hook("debug", !1, "object-key-init")
    }, "var-init"),
    a = cc11001100_hook("a", {
      translationStartTime: cc11001100_hook("translationStartTime", 0, "object-key-init"),
      requestsInitiated: cc11001100_hook("requestsInitiated", !1, "object-key-init")
    }, "var-init");
  let l;
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    l = cc11001100_hook("l", e, "assign");
  }
  var h;
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    switch (e) {
      case h.AzureAPIV3:
        return i.debug("Using Translate V3 APIs"), new s("https://api.cognitive.microsofttranslator.com/translate");
      case h.TranslateTestAPI:
        return i.debug("Using Translate Test Client"), new r();
      case h.WebXtServerTranslateAPI:
        return i.debug("Using WebXt Server Translate API"), new s("https://edge.microsoft.com/translate/translatetext");
      default:
        return void i.debug("Incorrect translate version passed from CPP !");
    }
  }
  let c;
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Object.freeze(new Map(Object.entries(e)));
  }
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Object.freeze(e);
  }
  !function (e) {
    e[e.BingAPIV2 = cc11001100_hook("e.BingAPIV2", 1, "assign")] = cc11001100_hook("e[e.BingAPIV2 = 1]", "BingAPIV2", "assign"), e[e.AzureAPIV3 = cc11001100_hook("e.AzureAPIV3", 2, "assign")] = cc11001100_hook("e[e.AzureAPIV3 = 2]", "AzureAPIV3", "assign"), e[e.EdgeTranslateAPI = cc11001100_hook("e.EdgeTranslateAPI", 3, "assign")] = cc11001100_hook("e[e.EdgeTranslateAPI = 3]", "EdgeTranslateAPI", "assign"), e[e.TranslateTestAPI = cc11001100_hook("e.TranslateTestAPI", 4, "assign")] = cc11001100_hook("e[e.TranslateTestAPI = 4]", "TranslateTestAPI", "assign"), e[e.WebXtServerTranslateAPI = cc11001100_hook("e.WebXtServerTranslateAPI", 5, "assign")] = cc11001100_hook("e[e.WebXtServerTranslateAPI = 5]", "WebXtServerTranslateAPI", "assign");
  }(h || (h = cc11001100_hook("h", {}, "assign"))), c = cc11001100_hook("c", d(Number("$$VERSIONTOUSE")) ?? d(h.WebXtServerTranslateAPI), "assign");
  const g = cc11001100_hook("g", m({
      head: cc11001100_hook("head", 1, "object-key-init"),
      script: cc11001100_hook("script", 1, "object-key-init"),
      style: cc11001100_hook("style", 1, "object-key-init"),
      code: cc11001100_hook("code", 1, "object-key-init"),
      samp: cc11001100_hook("samp", 1, "object-key-init"),
      var: cc11001100_hook("var", 1, "object-key-init"),
      kbd: cc11001100_hook("kbd", 1, "object-key-init"),
      pre: cc11001100_hook("pre", 1, "object-key-init"),
      object: cc11001100_hook("object", 1, "object-key-init"),
      address: cc11001100_hook("address", 1, "object-key-init"),
      noscript: cc11001100_hook("noscript", 1, "object-key-init"),
      embed: cc11001100_hook("embed", 1, "object-key-init"),
      map: cc11001100_hook("map", 1, "object-key-init")
    }), "var-init"),
    p = cc11001100_hook("p", m({
      textarea: cc11001100_hook("textarea", 1, "object-key-init")
    }), "var-init");
  var T;
  !function (e) {
    e[e.Inherit = cc11001100_hook("e.Inherit", 0, "assign")] = cc11001100_hook("e[e.Inherit = 0]", "Inherit", "assign"), e[e.On = cc11001100_hook("e.On", 1, "assign")] = cc11001100_hook("e[e.On = 1]", "On", "assign"), e[e.Off = cc11001100_hook("e.Off", 2, "assign")] = cc11001100_hook("e[e.Off = 2]", "Off", "assign");
  }(T || (T = cc11001100_hook("T", {}, "assign")));
  const b = cc11001100_hook("b", Object.assign(m({
      hr: cc11001100_hook("hr", 1, "object-key-init"),
      input: cc11001100_hook("input", 1, "object-key-init"),
      title: cc11001100_hook("title", 1, "object-key-init"),
      br: cc11001100_hook("br", 1, "object-key-init"),
      frame: cc11001100_hook("frame", 1, "object-key-init"),
      iframe: cc11001100_hook("iframe", 1, "object-key-init"),
      textarea: cc11001100_hook("textarea", 1, "object-key-init")
    }), g), "var-init"),
    E = cc11001100_hook("E", () => !0, "var-init"),
    N = cc11001100_hook("N", m({
      INPUT: cc11001100_hook("INPUT", [{
        predicate: cc11001100_hook("predicate", e => ["button", "submit", "reset"].includes(e?.type), "object-key-init"),
        attributes: cc11001100_hook("attributes", ["value"], "object-key-init")
      }, {
        predicate: cc11001100_hook("predicate", e => ["image"].includes(e?.type), "object-key-init"),
        attributes: cc11001100_hook("attributes", ["alt"], "object-key-init")
      }, {
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["placeholder"], "object-key-init")
      }], "object-key-init"),
      TEXTAREA: cc11001100_hook("TEXTAREA", [{
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["placeholder"], "object-key-init")
      }], "object-key-init"),
      IMG: cc11001100_hook("IMG", [{
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["alt"], "object-key-init")
      }], "object-key-init"),
      AREA: cc11001100_hook("AREA", [{
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["alt"], "object-key-init")
      }], "object-key-init"),
      OPTION: cc11001100_hook("OPTION", [{
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["label"], "object-key-init")
      }], "object-key-init"),
      OPTGROUP: cc11001100_hook("OPTGROUP", [{
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["label"], "object-key-init")
      }], "object-key-init"),
      TRACK: cc11001100_hook("TRACK", [{
        predicate: cc11001100_hook("predicate", E, "object-key-init"),
        attributes: cc11001100_hook("attributes", ["label"], "object-key-init")
      }], "object-key-init")
    }), "var-init"),
    _ = cc11001100_hook("_", m({
      true: cc11001100_hook("true", T.On, "object-key-init"),
      yes: cc11001100_hook("yes", T.On, "object-key-init"),
      false: cc11001100_hook("false", T.Off, "object-key-init"),
      no: cc11001100_hook("no", T.Off, "object-key-init"),
      skip: cc11001100_hook("skip", T.Off, "object-key-init")
    }), "var-init"),
    y = cc11001100_hook("y", m({
      translate: cc11001100_hook("translate", _, "object-key-init")
    }), "var-init"),
    A = cc11001100_hook("A", m({
      skiptranslate: cc11001100_hook("skiptranslate", T.Off, "object-key-init"),
      notranslate: cc11001100_hook("notranslate", T.Off, "object-key-init")
    }), "var-init"),
    v = cc11001100_hook("v", "_mstHidden", "var-init"),
    C = cc11001100_hook("C", "_mstVisible", "var-init"),
    S = cc11001100_hook("S", f(["_mstTextHash", "_msthash", v, C, ...new Set(Object.values(N).flat().map(e => e.attributes).flat().map(e => "_mst" + e))]), "var-init"),
    w = cc11001100_hook("w", f(["style", "class"]), "var-init");
  var O;
  function x(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e.nodeType != Node.ELEMENT_NODE) return "";
    const n = cc11001100_hook("n", window.getComputedStyle(e), "var-init");
    return n && n[t = cc11001100_hook("t", t.replace(/([A-Z])/g, "-$1").toLowerCase(), "assign")] || "";
  }
  function k(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e ? encodeURIComponent(e).replace(/%\w\w/g, " ").length : 0;
  }
  function M(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.nodeType === Node.ELEMENT_NODE ? e.getAttribute(t) || e[t] : null;
  }
  function D(e, ...t) {
    cc11001100_hook("e", e, "function-parameter");
    Promise.resolve().then(() => e(...t));
  }
  !function (e) {
    e[e.Auto = cc11001100_hook("e.Auto", 0, "assign")] = cc11001100_hook("e[e.Auto = 0]", "Auto", "assign"), e[e.Scrolled = cc11001100_hook("e.Scrolled", 1, "assign")] = cc11001100_hook("e[e.Scrolled = 1]", "Scrolled", "assign"), e[e.Mutation = cc11001100_hook("e.Mutation", 2, "assign")] = cc11001100_hook("e[e.Mutation = 2]", "Mutation", "assign"), e[e.VisibilityChange = cc11001100_hook("e.VisibilityChange", 3, "assign")] = cc11001100_hook("e[e.VisibilityChange = 3]", "VisibilityChange", "assign");
  }(O || (O = cc11001100_hook("O", {}, "assign")));
  const L = cc11001100_hook("L", window, "var-init");
  let R, I;
  function P(e) {
    cc11001100_hook("e", e, "function-parameter");
    V(), R = cc11001100_hook("R", new AbortController(), "assign"), L.addEventListener("scroll", e, {
      capture: cc11001100_hook("capture", !0, "object-key-init"),
      once: cc11001100_hook("once", !0, "object-key-init"),
      signal: cc11001100_hook("signal", R.signal, "object-key-init")
    });
  }
  function V() {
    R?.abort(), R = cc11001100_hook("R", void 0, "assign");
  }
  function F() {
    I?.abort(), I = cc11001100_hook("I", void 0, "assign");
  }
  function H(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      let t = cc11001100_hook("t", 0, "var-init"),
        n = cc11001100_hook("n", e.contentWindow, "var-init");
      for (; n && n != top;) t++, n = cc11001100_hook("n", n.parent, "assign");
      return t;
    } catch (e) {
      return i.debug(e), 11;
    }
  }
  function j(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      return e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement && e.contentWindow.document.body && H(e) <= 10;
    } catch (e) {}
    return !1;
  }
  function B(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      return e && e.contentWindow && e.contentWindow.document || !1;
    } catch (e) {}
    return !1;
  }
  const q = cc11001100_hook("q", {
    ar: cc11001100_hook("ar", !0, "object-key-init"),
    fa: cc11001100_hook("fa", !0, "object-key-init"),
    he: cc11001100_hook("he", !0, "object-key-init"),
    ku: cc11001100_hook("ku", !0, "object-key-init"),
    ps: cc11001100_hook("ps", !0, "object-key-init"),
    ur: cc11001100_hook("ur", !0, "object-key-init")
  }, "var-init");
  class J {
    constructor(e, t) {
      this.name = cc11001100_hook("this.name", t, "assign"), this.code = cc11001100_hook("this.code", J.normalizeCode(e), "assign");
    }
    toString() {
      return `${this.code}: ${this.name}`;
    }
    static isRtl(e) {
      return (e = cc11001100_hook("e", J.normalizeCode(e), "assign")).toLowerCase() in q;
    }
    static equals(e, t) {
      return null != e && null != t && e.code === t.code;
    }
    static normalizeCode(e) {
      let t = cc11001100_hook("t", "", "var-init"),
        n = cc11001100_hook("n", "", "var-init"),
        s = cc11001100_hook("s", "", "var-init");
      const r = cc11001100_hook("r", e.split("-"), "var-init");
      t = cc11001100_hook("t", r[0].toLowerCase(), "assign");
      for (let e = cc11001100_hook("e", 1, "var-init"); e < r.length && !s && !n; e++) 2 === r[e].length ? (n = cc11001100_hook("n", r[e].toUpperCase(), "assign"), "zh" === t && "CN" === n ? s = cc11001100_hook("s", "Hans", "assign") : "zh" == t && "TW" === n && (s = cc11001100_hook("s", "Hant", "assign"))) : 3 !== r[e].length || n ? 4 !== r[e].length || n || (s = cc11001100_hook("s", r[e][0].toUpperCase() + r[e].substring(1).toLowerCase(), "assign")) : "CHS" === r[e].toUpperCase() ? s = cc11001100_hook("s", "Hans", "assign") : "CHT" === r[e] && (s = cc11001100_hook("s", "Hant", "assign"));
      "nb" === t ? t = cc11001100_hook("t", "no", "assign") : "und" === t && (t = cc11001100_hook("t", "", "assign"));
      let i = cc11001100_hook("i", t, "var-init");
      return s && (i += cc11001100_hook("i", "-" + s, "assign")), i;
    }
  }
  const U = cc11001100_hook("U", /[^\S\r\n]+/g, "var-init"),
    z = cc11001100_hook("z", /&/g, "var-init"),
    W = cc11001100_hook("W", /</g, "var-init"),
    X = cc11001100_hook("X", />/g, "var-init"),
    Q = cc11001100_hook("Q", /<\s*(\/)?\s*(\w+)\s*(\d*)\s*>/g, "var-init"),
    $ = cc11001100_hook("$", /&amp;/gi, "var-init"),
    G = cc11001100_hook("G", /&lt;/gi, "var-init"),
    K = cc11001100_hook("K", /&gt;/gi, "var-init"),
    Y = cc11001100_hook("Y", /<\/?\w+>/g, "var-init"),
    Z = cc11001100_hook("Z", /<(?!\/?b\d+>)[^>]*>/g, "var-init"),
    ee = cc11001100_hook("ee", new Set(), "var-init");
  function te(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e || "string" != typeof e.nodeName) return [];
    const t = cc11001100_hook("t", new Set(), "var-init"),
      n = cc11001100_hook("n", N.get(e.nodeName), "var-init");
    for (let s = cc11001100_hook("s", 0, "var-init"); n && s < n.length; s++) if (!0 === n[s].predicate(e)) for (let r = cc11001100_hook("r", 0, "var-init"); r < n[s].attributes.length; r++) {
      const i = cc11001100_hook("i", e.getAttribute(n[s].attributes[r]), "var-init");
      i && i.length > 0 && i.trim().length > 0 && t.add(n[s].attributes[r]);
    }
    if (e.hasAttribute("aria-label")) {
      const n = cc11001100_hook("n", e.getAttribute("aria-label"), "var-init");
      n && n.length > 0 && t.add("aria-label");
    }
    return [...t];
  }
  function ne(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e.nodeType == Node.TEXT_NODE || e.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !0;
    if (e.nodeType != Node.ELEMENT_NODE) return !1;
    const t = cc11001100_hook("t", e, "var-init");
    return !!(j(t) || t.hasChildNodes() || t.nodeName in N) && !g.has(t.nodeName.toLowerCase()) && se(t) != T.Off && (!!j(t) || function (e, t) {
      if (!e || !e.children && !e.shadowRoot) return !1;
      const n = cc11001100_hook("n", [0], "var-init");
      for (; n.length > 0 && e;) {
        if (n.length >= 5) return !0;
        const t = cc11001100_hook("t", n.length - 1, "var-init");
        if (e.shadowRoot) return !0;
        if (!e.children || n[t] >= e.children.length) {
          if (n.pop(), 0 === n.length) break;
          e = cc11001100_hook("e", e.parentNode, "assign");
        } else {
          if (j(e.children[n[t]])) return !0;
          if (te(e.children[n[t]]).length > 0) return !0;
          e = cc11001100_hook("e", e.children[n[t]], "assign"), n[t] = cc11001100_hook("n[t]", n[t] + 1, "assign"), n.push(0);
        }
      }
      const s = cc11001100_hook("s", e?.textContent, "var-init");
      return !!s && ie(s);
    }(t));
  }
  function se(e) {
    cc11001100_hook("e", e, "function-parameter");
    let t = cc11001100_hook("t", T.Inherit, "var-init");
    if (!e || e.nodeType != Node.ELEMENT_NODE) return t;
    for (const n of y.keys()) {
      const s = cc11001100_hook("s", M(e, n), "var-init");
      if (null != s) {
        const e = cc11001100_hook("e", y.get(n), "var-init");
        if (t = cc11001100_hook("t", e && e.get(s.toString().toLowerCase()) || t, "assign"), t == T.Off) return t;
      }
    }
    const n = cc11001100_hook("n", M(e, "class") || M(e, "className"), "var-init");
    if (null != n) {
      const e = cc11001100_hook("e", n.toString().split(" "), "var-init");
      for (let n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
        const s = cc11001100_hook("s", e[n], "var-init");
        if (t = cc11001100_hook("t", A.get(s.toLowerCase()) || t, "assign"), t == T.Off) return t;
      }
    }
    return t;
  }
  function re(e) {
    cc11001100_hook("e", e, "function-parameter");
    return ee.forEach(t => {
      if (t.contains(e)) return !0;
    }), !1;
  }
  function ie(e) {
    cc11001100_hook("e", e, "function-parameter");
    return new RegExp("[a-zA-Z0-9\\?!" + String.fromCodePoint(191) + String.fromCodePoint(161) + ".,:\\|" + String.fromCodePoint(192) + "-" + String.fromCodePoint(65535) + "]").test(e);
  }
  function oe(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.nodeType == Node.TEXT_NODE || !(!e.nodeName || !b.has(e.nodeName.toLowerCase())) || e.nodeType == Node.ELEMENT_NODE && !e._mstChunk && "inline" == x(e, "display").toLowerCase() && "static" == x(e, "position").toLowerCase() && ![...e.childNodes].some(e => !oe(e));
  }
  function ae(e, t, n = 1) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (n > 9) return "";
    const s = cc11001100_hook("s", [], "var-init");
    let r = cc11001100_hook("r", 0, "var-init");
    for (let i = cc11001100_hook("i", 0, "var-init"); i < e.childNodes.length; ++i) switch (e.childNodes[i].nodeType) {
      case Node.ELEMENT_NODE:
        {
          const o = cc11001100_hook("o", t + n.toString() + r.toString(), "var-init"),
            a = cc11001100_hook("a", se(e.childNodes[i]), "var-init"),
            l = cc11001100_hook("l", e.childNodes[i].previousSibling, "var-init"),
            u = cc11001100_hook("u", e.childNodes[i].nextSibling, "var-init");
          a == T.Off && l && l.nodeType == Node.ELEMENT_NODE ? l._mstSkipNext = cc11001100_hook("l._mstSkipNext", r, "assign") : a == T.Off && u && u.nodeType == Node.ELEMENT_NODE ? u._mstSkipPrev = cc11001100_hook("u._mstSkipPrev", r, "assign") : (s.push("<"), s.push(o), s.push(">"), a != T.Off && s.push(ae(e.childNodes[i], t, n + 1)), s.push("</"), s.push(o), s.push(">")), ++r;
          break;
        }
      case Node.TEXT_NODE:
        {
          const t = cc11001100_hook("t", e.childNodes[i].nodeValue, "var-init");
          t && s.push(le(t));
          break;
        }
    }
    return s.join("");
  }
  function le(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e) return e;
    const t = cc11001100_hook("t", e.replace(z, "&amp;").replace(W, "&lt;").replace(X, "&gt;").replace(U, " "), "var-init"),
      n = cc11001100_hook("n", /^\s/.test(t), "var-init"),
      s = cc11001100_hook("s", /\s$/.test(t), "var-init");
    return (n ? " " : "") + t.trim() + (s ? " " : "");
  }
  function ue(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e?.replace(Z, function (e) {
      return e.replace(z, "&amp;").replace(W, "&lt;").replace(X, "&gt;");
    });
  }
  function he(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) {
      if (e.shadowRoot) for (const t of e.shadowRoot.children) he(t);
      if ("frame" == e.nodeName.toLowerCase() || "iframe" == e.nodeName.toLowerCase()) {
        const t = cc11001100_hook("t", e.contentWindow?.document.documentElement, "var-init");
        try {
          t && he(t);
        } catch (e) {}
      } else {
        if (e._mstStyle) for (const t in e._mstStyle) try {
          e.style[t] = cc11001100_hook("e.style[t]", e._mstStyle[t], "assign");
        } catch (e) {
          i.error(e);
        }
        if (e._mstStyle = cc11001100_hook("e._mstStyle", null, "assign"), e._mstSrcAttribute) for (const t in e._mstSrcAttribute) de(e, t, e._mstSrcAttribute[t]);
        if (S.forEach(t => e.removeAttribute?.(t)), e._mstSrcHtml && e._mstSrcHtml.childNodes.length > 0) {
          for (; e.childNodes.length > 0 && e.lastChild;) e.removeChild(e.lastChild);
          for (; e._mstSrcHtml.childNodes.length > 0;) e.appendChild(e._mstSrcHtml.childNodes[0]);
          e._mstSrcHtml = cc11001100_hook("e._mstSrcHtml", void 0, "assign");
        } else for (let t = cc11001100_hook("t", 0, "var-init"); t < e.childNodes.length; ++t) try {
          const n = cc11001100_hook("n", e.childNodes[t], "var-init");
          n.nodeType == Node.ELEMENT_NODE && he(n);
        } catch (e) {}
      }
    }
  }
  function de(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    switch (t) {
      case "aria-label":
        e.setAttribute("aria-label", n);
        break;
      case "value":
        e.setAttribute("value", n);
        break;
      case "alt":
        e.setAttribute("alt", n);
        break;
      case "placeholder":
        e.setAttribute("placeholder", n);
        break;
      case "label":
        e.setAttribute("label", n);
        break;
      case "_mstvalue":
        e.setAttribute("_mstvalue", n);
        break;
      case "_mstalt":
        e.setAttribute("_mstalt", n);
        break;
      case "_mstplaceholder":
        e.setAttribute("_mstplaceholder", n);
        break;
      case "_mstaria-label":
        e.setAttribute("_mstaria-label", n);
        break;
      case "_mstlabel":
        e.setAttribute("_mstlabel", n);
    }
  }
  function ce(e, t, n = 1) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!(n > 9)) for (const s of e.childNodes) s.nodeType == Node.ELEMENT_NODE && (t(s), ce(s, t, n + 1));
  }
  let me = cc11001100_hook("me", 0, "var-init");
  const fe = cc11001100_hook("fe", /[\s\xA0]/g, "var-init");
  function ge(e) {
    cc11001100_hook("e", e, "function-parameter");
    let t = cc11001100_hook("t", 0, "var-init");
    if (e) {
      e = cc11001100_hook("e", e.replace(fe, ""), "assign");
      for (let n = cc11001100_hook("n", 0, "var-init"); n < e.length; ++n) t += cc11001100_hook("t", 13 * e.charCodeAt(n) * (n + 7), "assign");
    }
    return t.toString();
  }
  function pe(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.getAttribute("_mstHash");
  }
  class Te {
    constructor(e, t, n, s, r, i, o = !1) {
      this._sFrom = cc11001100_hook("this._sFrom", e, "assign"), this._sTo = cc11001100_hook("this._sTo", t, "assign"), this._aTextArray = cc11001100_hook("this._aTextArray", n, "assign"), this._oJobData = cc11001100_hook("this._oJobData", s, "assign"), this._fOnSuccess = cc11001100_hook("this._fOnSuccess", r, "assign"), this._fOnError = cc11001100_hook("this._fOnError", i, "assign"), this._bBuffered = cc11001100_hook("this._bBuffered", o, "assign");
    }
    isBufferedRequest() {
      return this._bBuffered;
    }
    onSuccess(e) {
      this._fOnSuccess && this._fOnSuccess(this._oJobData, e);
    }
    onError(e) {
      this._fOnError && this._fOnError(this._oJobData, e);
    }
  }
  const be = cc11001100_hook("be", new Map(), "var-init");
  let Ee = cc11001100_hook("Ee", null, "var-init"),
    Ne = cc11001100_hook("Ne", 0, "var-init");
  function _e(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (be.set(e, t), Ne += cc11001100_hook("Ne", e.length + t.TranslatedText.length, "assign"); !(be.size <= 1e3 && Ne <= 4e5);) {
      const e = cc11001100_hook("e", be.keys().next().value, "var-init");
      Ne -= cc11001100_hook("Ne", e.length + be.get(e)?.TranslatedText.length, "assign"), be.delete(e);
    }
  }
  function ye(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (null == Ee || Ee != e) && (Ee = cc11001100_hook("Ee", e, "assign"), be.clear(), !0);
  }
  const Ae = cc11001100_hook("Ae", 3500, "var-init"),
    ve = cc11001100_hook("ve", 4e3, "var-init");
  let Ce = cc11001100_hook("Ce", [], "var-init"),
    Se = cc11001100_hook("Se", 0, "var-init");
  const we = cc11001100_hook("we", new Map(), "var-init");
  let Oe;
  const xe = cc11001100_hook("xe", new class {
    constructor(e, t, n) {
      this._iMaxParallelJobs = cc11001100_hook("this._iMaxParallelJobs", e, "assign"), this._iMaxChunkSize = cc11001100_hook("this._iMaxChunkSize", t, "assign"), this._fOnTranslateApiCalled = cc11001100_hook("this._fOnTranslateApiCalled", n, "assign"), this._aJobs = cc11001100_hook("this._aJobs", [], "assign"), this._iActiveJobs = cc11001100_hook("this._iActiveJobs", 0, "assign"), this._iTotalTriggeredJobs = cc11001100_hook("this._iTotalTriggeredJobs", 0, "assign");
    }
    purgeQueue() {
      this._aJobs = cc11001100_hook("this._aJobs", [], "assign"), i.debug("Purging jobQueue. Having", this._iActiveJobs, "active jobs currently.");
    }
    addJob(e) {
      this._aJobs.push(e), i.debug("Adding job to jobQueue. Active Jobs: ", this._iActiveJobs, ", Remaining Jobs: ", this._aJobs.length), this.startProcessing();
    }
    startProcessing() {
      if (this._aJobs.length > 0 && this._iActiveJobs < this._iMaxParallelJobs) {
        const e = cc11001100_hook("e", this._aJobs.shift(), "var-init");
        if (e.isBufferedRequest()) return void this.processBufferedRequest(e);
        c.translateAsync(e._sFrom, e._sTo, e._aTextArray, this._fOnTranslateApiCalled).then(t => {
          this._iActiveJobs -= cc11001100_hook("this._iActiveJobs", 1, "assign"), e.onSuccess(t), this.startProcessing();
        }, t => {
          this._iActiveJobs -= cc11001100_hook("this._iActiveJobs", 1, "assign"), e.onError(t), this.startProcessing();
        }), this._iActiveJobs += cc11001100_hook("this._iActiveJobs", 1, "assign"), this._iTotalTriggeredJobs += cc11001100_hook("this._iTotalTriggeredJobs", 1, "assign"), this.optimizeParallelRequestsAmount();
      }
    }
    processBufferedRequest(e) {
      const t = cc11001100_hook("t", function (e, t) {
          const n = cc11001100_hook("n", [], "var-init");
          for (; e.length > t;) n.push(e.substr(0, t)), e = cc11001100_hook("e", e.substr(t), "assign");
          return 0 == e.length && 0 != n.length || n.push(e), n;
        }(e._aTextArray[0], this._iMaxChunkSize), "var-init"),
        n = cc11001100_hook("n", {}, "var-init");
      let s = cc11001100_hook("s", !1, "var-init");
      t.forEach((r, i) => {
        const o = cc11001100_hook("o", new Te(e._sFrom, e._sTo, [r], i, (r, i) => {
          if (n[r] = cc11001100_hook("n[r]", i, "assign"), !s && Object.keys(n).length == t.length) {
            const s = cc11001100_hook("s", [{
              From: cc11001100_hook("From", "", "object-key-init"),
              TranslatedText: cc11001100_hook("TranslatedText", "", "object-key-init")
            }], "var-init");
            for (let e = cc11001100_hook("e", 0, "var-init"); e < t.length; e++) {
              const t = cc11001100_hook("t", n[e][0], "var-init");
              s[0].From = cc11001100_hook("s[0].From", t.From, "assign"), s[0].TranslatedText += cc11001100_hook("s[0].TranslatedText", t.TranslatedText, "assign");
            }
            e.onSuccess(s);
          }
        }, (t, n) => {
          s = cc11001100_hook("s", !0, "assign"), e.onError(n), this.startProcessing();
        }), "var-init");
        this.addJob(o);
      });
    }
    numOfTotalJobsInQueue() {
      return this._aJobs.length + this._iActiveJobs;
    }
    optimizeParallelRequestsAmount() {
      this._iTotalTriggeredJobs > 33 ? this._iMaxParallelJobs = cc11001100_hook("this._iMaxParallelJobs", 2, "assign") : this._iMaxParallelJobs > 3 && this._iTotalTriggeredJobs % 10 == 0 && (this._iMaxParallelJobs = cc11001100_hook("this._iMaxParallelJobs", this._iMaxParallelJobs - this._iMaxParallelJobs / 3, "assign"));
    }
  }(4, Ae, (...e) => Oe && Oe(...e)), "var-init");
  function ke(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (const n of e) we.get(n.originalText)?.reject(t), we.delete(n.originalText);
  }
  function Me(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t.TranslatedText = cc11001100_hook("t.TranslatedText", ue(t.TranslatedText), "assign"), _e(e.originalText, it(t));
    const n = cc11001100_hook("n", we.get(e.originalText), "var-init");
    n ? n.resolve(t) : i.error("Promise does not exist for the provided text."), we.delete(e.originalText);
  }
  function De() {
    return xe.numOfTotalJobsInQueue();
  }
  class Le {
    constructor(e = []) {
      this.pop = cc11001100_hook("this.pop", () => this.items.pop(), "assign"), this.shift = cc11001100_hook("this.shift", () => this.items.shift(), "assign"), this.push = cc11001100_hook("this.push", e => this.items.push(e), "assign"), this.items = cc11001100_hook("this.items", [...e], "assign");
    }
    get first() {
      return 0 == this.length ? void 0 : this.items[0];
    }
    get top() {
      return 0 == this.length ? void 0 : this.items[this.length - 1];
    }
    get length() {
      return this.items.length;
    }
    *[Symbol.iterator]() {
      for (const e of this.items) yield e;
    }
    get(e) {
      return this.length <= e ? void 0 : this.items[e];
    }
    clear() {
      this.items.length = cc11001100_hook("this.items.length", 0, "assign");
    }
    isEmpty() {
      return 0 == this.items.length;
    }
  }
  const Re = cc11001100_hook("Re", Object.freeze({
    outsideView: cc11001100_hook("outsideView", 1, "object-key-init"),
    insideView: cc11001100_hook("insideView", 2, "object-key-init"),
    hidden: cc11001100_hook("hidden", 4, "object-key-init"),
    unknown: cc11001100_hook("unknown", 64, "object-key-init")
  }), "var-init");
  function Ie(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      const t = cc11001100_hook("t", (e = cc11001100_hook("e", function (e) {
        return e && e.nodeType == Node.ELEMENT_NODE && ["option", "optgroup"].includes(e.nodeName.toLowerCase()) && (e = cc11001100_hook("e", e.closest("select"), "assign")), e;
      }(e), "assign")).nodeType === Node.ELEMENT_NODE ? e : e.parentElement, "var-init");
      let n;
      if (!["title"].includes(e.nodeName.toLowerCase()) && t && t.nodeType === Node.ELEMENT_NODE && (n = cc11001100_hook("n", t.getBoundingClientRect(), "assign"))) {
        if (0 === n.height || 0 === n.width) return Re.hidden;
        const e = cc11001100_hook("e", window.innerHeight || document.documentElement.clientHeight, "var-init");
        return n.top >= 0 && n.top <= e + 1e3 || n.bottom >= 0 && n.bottom <= e + 1e3 ? Re.insideView : Re.outsideView;
      }
      return Re.insideView;
    } catch (e) {
      return Re.insideView;
    }
  }
  function Pe(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Ie(e) == Re.insideView;
  }
  function Ve(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    e & Re.unknown || (n.items[n.length - 1]++, e & Re.hidden && t.items[t.length - 1]++);
  }
  function Fe(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    t.top && t.top > 0 && t.top === n.top && e.length > 0 && e.top?.nodeType == Node.ELEMENT_NODE && e.top.setAttribute(v, t.top.toString());
    let s = cc11001100_hook("s", t.pop(), "var-init");
    t.length > 0 && (t.items[t.length - 1] += cc11001100_hook("t.items[t.length - 1]", s, "assign")), s = cc11001100_hook("s", n.pop(), "assign"), n.length > 0 && (n.items[n.length - 1] += cc11001100_hook("n.items[n.length - 1]", s, "assign"));
  }
  function He(e, t, n, s) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    const r = cc11001100_hook("r", new Le(), "var-init");
    r.push({
      node: cc11001100_hook("node", e, "object-key-init"),
      depth: cc11001100_hook("depth", 0, "object-key-init")
    });
    let o = cc11001100_hook("o", 0, "var-init");
    for (; !r.isEmpty();) {
      const e = cc11001100_hook("e", r.pop(), "var-init");
      if (e.node.hasAttribute(C)) continue;
      e.node.setAttribute(C, e.depth.toString()), e.node.removeAttribute(v);
      const a = cc11001100_hook("a", s.getElementChunk(e.node), "var-init");
      if (s.removeElementChunk(e.node), a) {
        for (const n of a.getAllAttributes()) t(e.node, n, a.getAttribute(n));
        o++;
      }
      if (a && a.elementText) n(e.node, a.elementText), o++;else {
        if (e.node.shadowRoot) for (const t of e.node.shadowRoot.children) r.push({
          node: cc11001100_hook("node", t, "object-key-init"),
          depth: cc11001100_hook("depth", e.depth + 1, "object-key-init")
        });
        for (let t = cc11001100_hook("t", 0, "var-init"); t < e.node.children.length; t++) {
          const n = cc11001100_hook("n", e.depth + 1, "var-init");
          n > 5 && i.debug("Element contains children deeper than threshold while marking visible. Depth: " + n), r.push({
            node: cc11001100_hook("node", e.node.children[t], "object-key-init"),
            depth: cc11001100_hook("depth", n, "object-key-init")
          });
        }
      }
    }
    return o;
  }
  var je;
  !function (e) {
    e[e.ELEMENT_REQUEST = cc11001100_hook("e.ELEMENT_REQUEST", 0, "assign")] = cc11001100_hook("e[e.ELEMENT_REQUEST = 0]", "ELEMENT_REQUEST", "assign"), e[e.ATTRIBUTE_REQUEST = cc11001100_hook("e.ATTRIBUTE_REQUEST", 1, "assign")] = cc11001100_hook("e[e.ATTRIBUTE_REQUEST = 1]", "ATTRIBUTE_REQUEST", "assign");
  }(je || (je = cc11001100_hook("je", {}, "assign")));
  class Be {
    constructor(e) {
      this.element = cc11001100_hook("this.element", e, "assign"), this.text = cc11001100_hook("this.text", null, "assign"), this.attributes = cc11001100_hook("this.attributes", new Map(), "assign"), this.numBytes = cc11001100_hook("this.numBytes", 0, "assign");
    }
    getAllAttributes() {
      return this.attributes.keys();
    }
    get elementText() {
      return this.text;
    }
    set elementText(e) {
      this.numBytes -= cc11001100_hook("this.numBytes", k(this.text), "assign"), this.text = cc11001100_hook("this.text", e, "assign"), this.numBytes += cc11001100_hook("this.numBytes", k(e), "assign");
    }
    addAttribute(e, t) {
      this.numBytes -= cc11001100_hook("this.numBytes", k(this.getAttribute(e)), "assign"), this.attributes.set(e, t), this.numBytes += cc11001100_hook("this.numBytes", k(t), "assign");
    }
    removeAttribute(e) {
      this.numBytes -= cc11001100_hook("this.numBytes", k(this.getAttribute(e)), "assign"), this.attributes.delete(e);
    }
    getAttribute(e) {
      return this.attributes.get(e);
    }
    getStringBytes() {
      return this.numBytes;
    }
    getNextAttribute() {
      const e = cc11001100_hook("e", this.getAllAttributes().next(), "var-init");
      return e.done ? null : e.value;
    }
    removeNextAttribute() {
      const e = cc11001100_hook("e", this.getNextAttribute(), "var-init");
      e && this.removeAttribute(e);
    }
    isEmpty() {
      return !this.text && 0 == this.attributes.size;
    }
    removeElementText() {
      this.numBytes -= cc11001100_hook("this.numBytes", k(this.text), "assign"), this.text = cc11001100_hook("this.text", null, "assign");
    }
  }
  class qe {
    constructor() {
      this.elementChunkMap = cc11001100_hook("this.elementChunkMap", new Map(), "assign");
    }
    ensureElementChunk(e) {
      const t = cc11001100_hook("t", function (e) {
        let t = cc11001100_hook("t", pe(e), "var-init");
        return null == t && (t = cc11001100_hook("t", (me++).toString(), "assign"), e.setAttribute("_mstHash", t)), t;
      }(e), "var-init");
      let n = cc11001100_hook("n", this.elementChunkMap.get(t), "var-init");
      return null == n && (n = cc11001100_hook("n", new Be(e), "assign"), this.elementChunkMap.set(t, n)), n;
    }
    addElementText(e, t) {
      this.ensureElementChunk(e).elementText = cc11001100_hook("this.ensureElementChunk(e).elementText", t, "assign");
    }
    addElementAttributes(e, t, n) {
      this.ensureElementChunk(e).addAttribute(t, n);
    }
    removeElementChunk(e) {
      const t = cc11001100_hook("t", pe(e), "var-init");
      t && this.elementChunkMap.delete(t);
    }
    getElementChunk(e) {
      let t;
      const n = cc11001100_hook("n", pe(e), "var-init");
      return n && (t = cc11001100_hook("t", this.elementChunkMap.get(n), "assign")), t;
    }
    getNextElementChunk() {
      const e = cc11001100_hook("e", this.getAllElementChunks().next(), "var-init");
      return e.done ? null : e.value;
    }
    getAllElementChunks() {
      return this.elementChunkMap.values();
    }
    get size() {
      return this.elementChunkMap.size;
    }
  }
  class Je {
    constructor(e, t, n, s, r, o, a, l, u) {
      var h, d, c, m;
      this._allDetectedLanguages = cc11001100_hook("this._allDetectedLanguages", {}, "assign"), this.bTranslateSelectedTextOnly = cc11001100_hook("this.bTranslateSelectedTextOnly", !1, "assign"), this.bTranslateFullPageInOneGo = cc11001100_hook("this.bTranslateFullPageInOneGo", !1, "assign"), this.iScrolledElementsTranslated = cc11001100_hook("this.iScrolledElementsTranslated", 0, "assign"), this.iHiddenElementsTranslated = cc11001100_hook("this.iHiddenElementsTranslated", 0, "assign"), this.bOnIntermediateCompleteCalled = cc11001100_hook("this.bOnIntermediateCompleteCalled", !1, "assign"), this.bAutoTraversalCompleted = cc11001100_hook("this.bAutoTraversalCompleted", !1, "assign"), this._oMObservers = cc11001100_hook("this._oMObservers", [], "assign"), this.oTranslateMutationTask = cc11001100_hook("this.oTranslateMutationTask", null, "assign"), this._maxIframeDepthSupported = cc11001100_hook("this._maxIframeDepthSupported", 10, "assign"), this._maxTraversalIterations = cc11001100_hook("this._maxTraversalIterations", 1e4, "assign"), this._aTranslatedNodes = cc11001100_hook("this._aTranslatedNodes", [], "assign"), this.bFlushedStartTerminalNode = cc11001100_hook("this.bFlushedStartTerminalNode", !1, "assign"), this.isTraverseDOMActive = cc11001100_hook("this.isTraverseDOMActive", !1, "assign"), this.bSentTranslationComplete = cc11001100_hook("this.bSentTranslationComplete", !1, "assign"), this.bSentTranslationError = cc11001100_hook("this.bSentTranslationError", !1, "assign"), this._iVisibleTxtLength = cc11001100_hook("this._iVisibleTxtLength", 0, "assign"), this._bAborted = cc11001100_hook("this._bAborted", !1, "assign"), this.outsideElementChunks = cc11001100_hook("this.outsideElementChunks", new qe(), "assign"), this.visibleElementChunks = cc11001100_hook("this.visibleElementChunks", new qe(), "assign"), this.hiddenElementChunks = cc11001100_hook("this.hiddenElementChunks", new qe(), "assign"), this._bScrollingStopped = cc11001100_hook("this._bScrollingStopped", !1, "assign"), this._bTxtChunksFlushed = cc11001100_hook("this._bTxtChunksFlushed", !1, "assign"), this.fontMutation = cc11001100_hook("this.fontMutation", new Map(), "assign"), this.translateMutation = cc11001100_hook("this.translateMutation", new Map(), "assign"), this.attributeMutation = cc11001100_hook("this.attributeMutation", new Map(), "assign"), this.traverseDOMRecursive = cc11001100_hook("this.traverseDOMRecursive", (e, t, n) => {
        const s = cc11001100_hook("s", e.domStack, "var-init"),
          r = cc11001100_hook("r", e.properties, "var-init"),
          i = cc11001100_hook("i", e.offsetFromStart, "var-init"),
          o = cc11001100_hook("o", e.hidden, "var-init"),
          a = cc11001100_hook("a", e.elements, "var-init"),
          l = cc11001100_hook("l", e => {
            Ve(this.flushChunk([e], !0), o, a);
          }, "var-init");
        let u = cc11001100_hook("u", 0, "var-init");
        for (; u < this._maxTraversalIterations && s.length > 0 && (this._iVisibleTxtLength < Ae || n.length);) {
          s.top.shadowRoot && this.traverseDOM(this.getTraversalStack(s.top.shadowRoot), t);
          const h = cc11001100_hook("h", ne(s.top), "var-init");
          if (h || se(s.top) == T.Off && ee.add(s.top), j(s.top) && h) {
            const e = cc11001100_hook("e", s.top, "var-init");
            s.push(e.contentWindow.document.body), r.push({
              isRoot: cc11001100_hook("isRoot", !1, "object-key-init"),
              traverseTerminalOnly: cc11001100_hook("traverseTerminalOnly", r.top.traverseTerminalOnly, "object-key-init")
            }), i.push(0), this.flush(n, o, a), o.push(0), a.push(0);
          } else if (!s.top.firstChild || !r.top.isRoot && r.top.traverseTerminalOnly || oe(s.top) || !h) {
            for (; s.length && s.top && r.top && !0 !== r.top.isRoot && !s.top.nextSibling && (1 != s.top.nodeType || !s.top.nextElementSibling);) s.pop(), r.pop(), i.pop(), this.flush(n, o, a), Fe(s, o, a);
            !1 === r.top.isRoot ? (s.push(s.pop().nextSibling), oe(s.top) ? ce(s.top, l) : l(s.top)) : (s.pop(), r.pop(), i.pop(), this.flush(n, o, a), Fe(s, o, a));
          } else s.push(s.top.firstChild), r.push({
            isRoot: cc11001100_hook("isRoot", !1, "object-key-init"),
            traverseTerminalOnly: cc11001100_hook("traverseTerminalOnly", r.top.traverseTerminalOnly, "object-key-init")
          }), i.push(0), this.flush(n, o, a), o.push(0), a.push(0), oe(s.top) ? ce(s.top, l) : l(s.top);
          if (s.length) {
            const e = cc11001100_hook("e", (s.top.nodeName || "").toLowerCase(), "var-init");
            oe(s.top) && !g.has(e) && "iframe" != e && "frame" != e && (++i.items[i.length - 1], n.push(s.top));
          }
          if (0 === n.length && !s.isEmpty() && B(s.top)) {
            if (window.requestAnimationFrame(() => {
              D(this.traverseDOMRecursive, e, t, n);
            }), this._bScrollingStopped) break;
            return;
          }
          u++;
        }
        if (u != this._maxTraversalIterations) {
          if (this.isTranslationPaused() || this.migrateOutsideChunksToVisible(), this.visibleElementChunks.size > 0 || this._bTxtChunksFlushed || this._bScrollingStopped) this._bTxtChunksFlushed = cc11001100_hook("this._bTxtChunksFlushed", !1, "assign"), this._bScrollingStopped = cc11001100_hook("this._bScrollingStopped", !1, "assign"), this.translate(e, t);else {
            if (this.bAutoTraversalCompleted = cc11001100_hook("this.bAutoTraversalCompleted", this.bAutoTraversalCompleted || t === O.Auto && 0 === s.length, "assign"), De() > 0) return;
            this.isTraverseDOMActive = cc11001100_hook("this.isTraverseDOMActive", !1, "assign"), this.bAutoTraversalCompleted && this.translationComplete();
          }
        } else this.traverseDOMRecursive(e, t, n);
      }, "assign"), this.traverseDOM = cc11001100_hook("this.traverseDOM", (e, t) => {
        try {
          const n = cc11001100_hook("n", [], "var-init");
          this._eDomRoot && oe(this._eDomRoot) && !this.bFlushedStartTerminalNode && (this.bFlushedStartTerminalNode = cc11001100_hook("this.bFlushedStartTerminalNode", !0, "assign"), this.flushChunk([this._eDomRoot])), D(this.traverseDOMRecursive, e, t, n);
        } catch (e) {
          i.error("Unknown error in traverseDom.", e);
        }
      }, "assign"), this._sFrom = cc11001100_hook("this._sFrom", t, "assign"), this._sTo = cc11001100_hook("this._sTo", n, "assign"), this._eDomRoot = cc11001100_hook("this._eDomRoot", e, "assign"), this._fComplete = cc11001100_hook("this._fComplete", s, "assign"), this._fVisibleComplete = cc11001100_hook("this._fVisibleComplete", l, "assign"), this._fTranslateCallbacks = cc11001100_hook("this._fTranslateCallbacks", u, "assign"), this._fError = cc11001100_hook("this._fError", function (e) {
        if ("function" == typeof r) try {
          r(Qe(e));
        } catch (e) {
          i.error("Encountered exception while calling error handler", e);
        }
      }, "assign"), this.bTranslateSelectedTextOnly = cc11001100_hook("this.bTranslateSelectedTextOnly", !0 === o, "assign"), this.bTranslateFullPageInOneGo = cc11001100_hook("this.bTranslateFullPageInOneGo", !0 === a, "assign"), h = cc11001100_hook("h", u.onTranslateApiCalled, "assign"), Oe = cc11001100_hook("Oe", h, "assign"), this._oApplyStyle = cc11001100_hook("this._oApplyStyle", (d = cc11001100_hook("d", this._sFrom, "assign"), c = cc11001100_hook("c", this._sTo, "assign"), J.isRtl(d) === J.isRtl(c) ? null : (m = cc11001100_hook("m", c, "assign"), J.isRtl(m) ? {
        direction: cc11001100_hook("direction", "rtl", "object-key-init"),
        textAlign: cc11001100_hook("textAlign", "right", "object-key-init")
      } : {
        direction: cc11001100_hook("direction", "ltr", "object-key-init"),
        textAlign: cc11001100_hook("textAlign", "left", "object-key-init")
      })), "assign");
    }
    getFromLanguage() {
      return this._sFrom;
    }
    getToLanguage() {
      return this._sTo;
    }
    translationComplete() {
      if (a.requestsInitiated && (i.info("Took " + (performance.now() - a.translationStartTime) + " ms to translate"), a.translationStartTime = cc11001100_hook("a.translationStartTime", performance.now(), "assign"), a.requestsInitiated = cc11001100_hook("a.requestsInitiated", !1, "assign")), !this.bSentTranslationComplete) {
        if (this.bSentTranslationComplete = cc11001100_hook("this.bSentTranslationComplete", !0, "assign"), this._eDomRoot && this.bTranslateSelectedTextOnly && this._aTranslatedNodes.length) {
          !function (e, t) {
            if (!e || !t || !t.length) return;
            const n = cc11001100_hook("n", new rt(), "var-init");
            let s = cc11001100_hook("s", 0, "var-init");
            for (n.push(0); s < t.length && n.length && e;) {
              const r = cc11001100_hook("r", t.indexOf(e), "var-init");
              if (r >= 0) {
                const i = cc11001100_hook("i", t[s], "var-init");
                t[s] = cc11001100_hook("t[s]", t[r], "assign"), t[r] = cc11001100_hook("t[r]", i, "assign"), s++, e = cc11001100_hook("e", e.parentNode, "assign"), n.pop();
              } else n.top < e.childNodes.length ? (e = cc11001100_hook("e", e.childNodes[n.top], "assign"), n.top++, n.push(0)) : (e = cc11001100_hook("e", e.parentNode, "assign"), n.pop());
            }
            for (; s < t.length;) t.pop();
          }(this._eDomRoot, this._aTranslatedNodes);
          const e = cc11001100_hook("e", this._eDomRoot.ownerDocument.createRange(), "var-init");
          e.setStartBefore(this._aTranslatedNodes[0]), e.setEndAfter(this._aTranslatedNodes[this._aTranslatedNodes.length - 1]);
          const t = cc11001100_hook("t", this._eDomRoot.ownerDocument.defaultView?.getSelection(), "var-init");
          t?.removeAllRanges(), t?.addRange(e);
        }
        this.bSentTranslationError || this.bOnIntermediateCompleteCalled || (this.bOnIntermediateCompleteCalled = cc11001100_hook("this.bOnIntermediateCompleteCalled", !0, "assign"), this._fVisibleComplete(!0)), this.bSentTranslationError || this._fComplete();
      }
    }
    getTraversalStack(e) {
      return e ? {
        domStack: cc11001100_hook("domStack", new Le([e]), "object-key-init"),
        properties: cc11001100_hook("properties", new Le([{
          isRoot: cc11001100_hook("isRoot", !0, "object-key-init"),
          traverseTerminalOnly: cc11001100_hook("traverseTerminalOnly", !1, "object-key-init")
        }]), "object-key-init"),
        offsetFromStart: cc11001100_hook("offsetFromStart", new Le([0]), "object-key-init"),
        hidden: cc11001100_hook("hidden", new Le([0]), "object-key-init"),
        elements: cc11001100_hook("elements", new Le([0]), "object-key-init")
      } : {
        domStack: cc11001100_hook("domStack", new Le(), "object-key-init"),
        properties: cc11001100_hook("properties", new Le(), "object-key-init"),
        offsetFromStart: cc11001100_hook("offsetFromStart", new Le(), "object-key-init"),
        hidden: cc11001100_hook("hidden", new Le(), "object-key-init"),
        elements: cc11001100_hook("elements", new Le(), "object-key-init")
      };
    }
    addVisibleElementText(e, t) {
      const n = cc11001100_hook("n", this.visibleElementChunks.getElementChunk(e)?.getStringBytes() ?? 0, "var-init");
      this.visibleElementChunks.addElementText(e, t);
      const s = cc11001100_hook("s", this.visibleElementChunks.getElementChunk(e).getStringBytes(), "var-init");
      this._iVisibleTxtLength += cc11001100_hook("this._iVisibleTxtLength", s - n, "assign");
    }
    addVisibleElementAttribute(e, t, n) {
      const s = cc11001100_hook("s", this.visibleElementChunks.getElementChunk(e)?.getStringBytes() ?? 0, "var-init");
      this.visibleElementChunks.addElementAttributes(e, t, n);
      const r = cc11001100_hook("r", this.visibleElementChunks.getElementChunk(e).getStringBytes(), "var-init");
      this._iVisibleTxtLength += cc11001100_hook("this._iVisibleTxtLength", r - s, "assign");
    }
    markNodesAsVisible(e) {
      return He(e, (e, t, n) => {
        this.addVisibleElementAttribute(e, t, n);
      }, (e, t) => {
        this.addVisibleElementText(e, t);
      }, this.hiddenElementChunks);
    }
    markNodesAsOutsideView(e) {
      return He(e, (e, t, n) => {
        this.outsideElementChunks.addElementAttributes(e, t, n);
      }, (e, t) => {
        this.outsideElementChunks.addElementText(e, t);
      }, this.hiddenElementChunks);
    }
    pushIntoTraversalStack(e, t, n) {
      e.domStack.push(t), e.properties.push({
        isRoot: cc11001100_hook("isRoot", !0, "object-key-init"),
        traverseTerminalOnly: cc11001100_hook("traverseTerminalOnly", n, "object-key-init")
      }), e.offsetFromStart.push(0), e.hidden.push(0), e.elements.push(0), this.flushChunk([t], !0);
    }
    updateAddedIframe(e) {
      H(e) > this._maxIframeDepthSupported || (e.contentWindow.document.body ? this.updateAddedIframeBody(e) : e.contentWindow.onload = cc11001100_hook("e.contentWindow.onload", () => this.updateAddedIframeBody(e), "assign"));
    }
    updateAddedIframeBody(e) {
      "complete" == e.contentWindow?.document.readyState ? this.addIframeForTranslation(e) : e.contentWindow.document.body.onload = cc11001100_hook("e.contentWindow.document.body.onload", () => this.addIframeForTranslation(e), "assign");
    }
    addIframeForTranslation(e) {
      const t = cc11001100_hook("t", this.getTraversalStack(), "var-init");
      this.pushIntoTraversalStack(t, e, !1), this.isTraverseDOMActive || (this.isTraverseDOMActive = cc11001100_hook("this.isTraverseDOMActive", !0, "assign"), a.translationStartTime = cc11001100_hook("a.translationStartTime", performance.now(), "assign")), D(this.traverseDOM, t, O.Mutation), this.setMutationObserversForDocument(e.contentWindow);
    }
    addMutationObserver(e) {
      const t = cc11001100_hook("t", new Map(), "var-init"),
        n = cc11001100_hook("n", new Map(), "var-init");
      this._oMObservers.push(new MutationObserver(s => {
        let r = cc11001100_hook("r", !1, "var-init");
        t.clear(), n.clear(), s.forEach(s => {
          switch (s.type) {
            case "characterData":
              {
                if (this.translateMutation.has(s.target)) {
                  const e = cc11001100_hook("e", this.translateMutation.get(s.target), "var-init");
                  1 === e ? this.translateMutation.delete(s.target) : this.translateMutation.set(s.target, e - 1);
                  break;
                }
                if (re(s.target)) break;
                let e = cc11001100_hook("e", !0, "var-init"),
                  i = cc11001100_hook("i", s.target, "var-init");
                for (; oe(i);) {
                  if (null === i.parentNode || void 0 === i.parentNode) {
                    e = cc11001100_hook("e", !1, "assign");
                    break;
                  }
                  i = cc11001100_hook("i", i.parentNode, "assign");
                }
                if (!e) {
                  r = cc11001100_hook("r", !0, "assign"), this.flushChunk([s.target]);
                  break;
                }
                const o = cc11001100_hook("o", i, "var-init");
                if (i.nodeType === Node.ELEMENT_NODE && i.hasAttribute("_mstHash")) {
                  o.hasAttribute("_mstTextHash") && o.getAttribute("_mstTextHash") == ge(i.textContent) || (r = cc11001100_hook("r", !0, "assign"), this.flushChunk([s.target]));
                  break;
                }
                t.has(i) || n.has(i) || (r = cc11001100_hook("r", !0, "assign"), t.set(i, 1));
                break;
              }
            case "attributes":
              if (w.some(e => e === s.attributeName)) {
                const t = cc11001100_hook("t", s.target, "var-init");
                if (s.target.nodeType == Node.ELEMENT_NODE && t.getAttribute(v)) {
                  const n = cc11001100_hook("n", Ie(t), "var-init");
                  let s = cc11001100_hook("s", 0, "var-init");
                  if (n & Re.insideView) {
                    if (e.hidden) {
                      this.markNodesAsOutsideView(t);
                      break;
                    }
                    s = cc11001100_hook("s", this.markNodesAsVisible(t), "assign"), 0 === s ? i.debug("A previously marked hidden chunk became visible but could not be located.") : this.oTranslateMutationTask = cc11001100_hook("this.oTranslateMutationTask", (o = cc11001100_hook("o", () => {
                      this.translate(this.getTraversalStack(), O.VisibilityChange);
                    }, "assign"), (a = cc11001100_hook("a", this.oTranslateMutationTask, "assign")) && !a.isCompleted || (a = cc11001100_hook("a", {
                      rafRequestId: cc11001100_hook("rafRequestId", null, "object-key-init"),
                      isCompleted: cc11001100_hook("isCompleted", !1, "object-key-init")
                    }, "assign")), null !== a.rafRequestId && cancelAnimationFrame(a.rafRequestId), a.rafRequestId = cc11001100_hook("a.rafRequestId", requestAnimationFrame(function () {
                      D(o), a.isCompleted = cc11001100_hook("a.isCompleted", !0, "assign");
                    }), "assign"), a), "assign");
                  } else n & Re.outsideView && (s = cc11001100_hook("s", this.markNodesAsOutsideView(t), "assign"), 0 === s && i.debug("A previously marked hidden chunk became un-hidden but could not be located."));
                }
                break;
              }
              if (this.attributeMutation.has(s.target)) {
                const e = cc11001100_hook("e", this.attributeMutation.get(s.target), "var-init"),
                  t = cc11001100_hook("t", s.attributeName, "var-init");
                if (t && t in e) {
                  1 === e[t] ? delete e[t] : e[t] -= cc11001100_hook("e[t]", 1, "assign");
                  break;
                }
              }
              if (re(s.target)) break;
              r = cc11001100_hook("r", !0, "assign"), this.flushChunk([s.target], !0);
              break;
            case "childList":
              for (let e = cc11001100_hook("e", 0, "var-init"); e < s.addedNodes.length; e++) {
                const i = cc11001100_hook("i", s.addedNodes[e], "var-init");
                if (i.nodeType === Node.ELEMENT_NODE && (i.hasAttribute("_isTranslated") || i.hasAttribute("_mstMutation"))) continue;
                if (this.fontMutation.has(i)) {
                  this.fontMutation.delete(i);
                  continue;
                }
                if (this.translateMutation.has(i)) {
                  const e = cc11001100_hook("e", this.translateMutation.get(i), "var-init");
                  1 === e ? this.translateMutation.delete(i) : this.translateMutation.set(i, e - 1);
                  continue;
                }
                if (re(i)) continue;
                if (!oe(i)) {
                  n.has(i) || i.nodeType !== Node.ELEMENT_NODE || i.hasAttribute("_mstHash") && i.hasAttribute("_mstTextHash") && i.getAttribute("_mstTextHash") == ge(i.textContent) || (r = cc11001100_hook("r", !0, "assign"), n.set(i, 1), t.has(i) && t.delete(i));
                  continue;
                }
                if (B(i)) {
                  const e = cc11001100_hook("e", i, "var-init");
                  e.hasAttribute("_mstHash") && e.hasAttribute("_mstTextHash") && e.getAttribute("_mstTextHash") == ge(i.textContent) || this.updateAddedIframe(e);
                  continue;
                }
                let o = cc11001100_hook("o", !0, "var-init"),
                  a = cc11001100_hook("a", i, "var-init");
                for (; oe(a);) {
                  if (null === a.parentNode || void 0 === a.parentNode) {
                    o = cc11001100_hook("o", !1, "assign");
                    break;
                  }
                  a = cc11001100_hook("a", a.parentNode, "assign");
                }
                if (o) {
                  if (a.nodeType === Node.ELEMENT_NODE && a.hasAttribute("_mstHash")) {
                    if ("select" === a.nodeName.toLowerCase()) continue;
                    a.hasAttribute("_mstTextHash") && a.getAttribute("_mstTextHash") == ge(a.textContent) || (r = cc11001100_hook("r", !0, "assign"), this.flushChunk([i]));
                  } else t.has(a) || n.has(a) || (r = cc11001100_hook("r", !0, "assign"), t.set(a, 1));
                } else r = cc11001100_hook("r", !0, "assign"), this.flushChunk([i]);
              }
          }
          var o, a;
        });
        const o = cc11001100_hook("o", this.getTraversalStack(), "var-init");
        Array.from(t.keys()).forEach(e => {
          this.pushIntoTraversalStack(o, e, !0);
        }), Array.from(n.keys()).forEach(e => {
          this.pushIntoTraversalStack(o, e, !1);
        }), r && (r = cc11001100_hook("r", !1, "assign"), this.isTraverseDOMActive || (this.isTraverseDOMActive = cc11001100_hook("this.isTraverseDOMActive", !0, "assign"), a.translationStartTime = cc11001100_hook("a.translationStartTime", performance.now(), "assign")), D(this.traverseDOM, o, O.Mutation));
      })), this._oMObservers[this._oMObservers.length - 1].observe(e.body, {
        childList: cc11001100_hook("childList", !0, "object-key-init"),
        subtree: cc11001100_hook("subtree", !0, "object-key-init"),
        attributes: cc11001100_hook("attributes", !0, "object-key-init"),
        characterData: cc11001100_hook("characterData", !0, "object-key-init"),
        attributeOldValue: cc11001100_hook("attributeOldValue", !0, "object-key-init"),
        characterDataOldValue: cc11001100_hook("characterDataOldValue", !0, "object-key-init"),
        attributeFilter: cc11001100_hook("attributeFilter", ["value", "placeholder", "aria-label", ...w], "object-key-init")
      });
    }
    triggerTraverseDom(e) {
      this._bScrollingStopped = cc11001100_hook("this._bScrollingStopped", !0, "assign"), this.isTraverseDOMActive || (this.isTraverseDOMActive = cc11001100_hook("this.isTraverseDOMActive", !0, "assign"), a.translationStartTime = cc11001100_hook("a.translationStartTime", performance.now(), "assign")), this.traverseDOM(this.getTraversalStack(), e);
    }
    setMutationObserversForDocument(e) {
      if ("MutationObserver" in e && !this.bTranslateSelectedTextOnly && !this.bTranslateFullPageInOneGo) {
        const t = cc11001100_hook("t", e.document, "var-init");
        this.addMutationObserver(t);
        const n = cc11001100_hook("n", t.querySelectorAll("iframe"), "var-init");
        for (let e = cc11001100_hook("e", 0, "var-init"); e < n.length; e++) n[e] && j(n[e]) && this.setMutationObserversForDocument(n[e].contentWindow);
      }
    }
    deRegisterEventListeners() {
      this._oMObservers.forEach(e => e.disconnect()), V(), F();
    }
    onDocumentVisibilityChange() {
      document.hidden || this._bAborted || this.triggerTraverseDom(O.Scrolled);
    }
    cancel() {
      const e = cc11001100_hook("e", performance.now(), "var-init");
      this.deRegisterEventListeners(), this._eDomRoot && (this._bAborted = cc11001100_hook("this._bAborted", !0, "assign"), Ce = cc11001100_hook("Ce", [], "assign"), Se = cc11001100_hook("Se", 0, "assign"), we.clear(), function () {
        const e = cc11001100_hook("e", document.querySelector("head > title"), "var-init");
        e && he(e);
      }(), this.bTranslateSelectedTextOnly ? he(document.body) : he(this._eDomRoot), this._eDomRoot = cc11001100_hook("this._eDomRoot", null, "assign"), i.info("Took " + (performance.now() - e) + " ms to untranslate."));
    }
    getDetectedLanguage() {
      return this._detectedLanguage;
    }
    getAllDetectedLanguages() {
      return this._allDetectedLanguages;
    }
    isTranslationPaused() {
      return this.bOnIntermediateCompleteCalled && document.hidden;
    }
    migrateOutsideChunksToVisible() {
      const e = cc11001100_hook("e", () => !(this._iVisibleTxtLength < Ae || this._bScrollingStopped), "var-init"),
        t = cc11001100_hook("t", this.outsideElementChunks.getAllElementChunks(), "var-init");
      for (const n of t) {
        if (e()) break;
        const t = cc11001100_hook("t", n.element, "var-init");
        if (Pe(t)) {
          n.elementText && (this.addVisibleElementText(t, n.elementText), n.removeElementText());
          for (const s of n.getAllAttributes()) {
            if (e()) break;
            this.addVisibleElementAttribute(t, s, n.getAttribute(s)), n.removeAttribute(s);
          }
          n.isEmpty() && this.outsideElementChunks.removeElementChunk(t);
        }
      }
    }
    getChunkStoreBasedOnVisibility(e) {
      let t = cc11001100_hook("t", this.visibleElementChunks, "var-init");
      return e & Re.hidden ? t = cc11001100_hook("t", this.hiddenElementChunks, "assign") : (e & Re.outsideView || e & Re.unknown) && (t = cc11001100_hook("t", this.outsideElementChunks, "assign")), t;
    }
    flushChunk(e, t = !1) {
      let n = cc11001100_hook("n", Re.unknown, "var-init");
      for (const t of e) {
        if (t.nodeType == Node.TEXT_NODE || t.nodeType != Node.ELEMENT_NODE) continue;
        const e = cc11001100_hook("e", t, "var-init"),
          s = cc11001100_hook("s", te(e), "var-init");
        s.length > 0 && (n = cc11001100_hook("n", Ie(e), "assign"), n & Re.hidden && e.setAttribute(v, "A"));
        for (const t of s) {
          const s = cc11001100_hook("s", le(e.getAttribute(t)), "var-init");
          if (!s) continue;
          const r = cc11001100_hook("r", ge(s), "var-init"),
            i = cc11001100_hook("i", "_mst" + t, "var-init");
          if (e.hasAttribute(i) && e.getAttribute(i) == r) continue;
          de(e, i, r);
          const o = cc11001100_hook("o", this.getChunkStoreBasedOnVisibility(n), "var-init");
          o == this.visibleElementChunks ? document.hidden ? this.outsideElementChunks.addElementAttributes(e, t, s) : this.addVisibleElementAttribute(e, t, s) : o.addElementAttributes(e, t, s), this._bTxtChunksFlushed = cc11001100_hook("this._bTxtChunksFlushed", !0, "assign");
        }
      }
      if (t) return n;
      if (e[0] && e[0].parentNode && e[0].parentNode.nodeType == Node.ELEMENT_NODE && e[0].parentNode.hasAttribute("_mstTextHash") && e[0].parentNode.getAttribute("_mstTextHash") == ge(e[0].parentNode.textContent)) return e.length = cc11001100_hook("e.length", 0, "assign"), n;
      if (this.trimChunk(e), 0 === e.length) return n;
      const s = cc11001100_hook("s", this.chunkify(e), "var-init");
      if ((r = cc11001100_hook("r", s, "assign")).nodeName && p.has(r.nodeName.toLowerCase())) return n;
      var r;
      const i = cc11001100_hook("i", s.textContent, "var-init"),
        o = cc11001100_hook("o", ge(i), "var-init");
      if (s.hasAttribute("_mstTextHash") && s.getAttribute("_mstTextHash") == o) return n;
      if (s && ne(s)) {
        const e = cc11001100_hook("e", ae(s, "b"), "var-init");
        if (ie(e)) {
          i && !i.isBlank() && s.setAttribute("_mstTextHash", o), n = cc11001100_hook("n", Ie(s), "assign");
          let t = cc11001100_hook("t", this.visibleElementChunks, "var-init");
          this.bTranslateFullPageInOneGo || this.bTranslateSelectedTextOnly || (t = cc11001100_hook("t", this.getChunkStoreBasedOnVisibility(n), "assign")), t == this.hiddenElementChunks && s.setAttribute(v, "1"), t == this.visibleElementChunks ? document.hidden ? this.outsideElementChunks.addElementText(s, e) : this.addVisibleElementText(s, e) : t.addElementText(s, e), this._bTxtChunksFlushed = cc11001100_hook("this._bTxtChunksFlushed", !0, "assign"), this.bTranslateSelectedTextOnly && this._aTranslatedNodes.push(s);
        }
      }
      return n;
    }
    flush(e, t, n) {
      if (e.length) try {
        Ve(this.flushChunk(e), t, n);
      } catch (e) {
        i.error(e);
      }
    }
    identifySingleTranslatableElementNode(e, t = 1) {
      if (e.nodeType != Node.ELEMENT_NODE || t > 9) return e;
      const n = cc11001100_hook("n", Array.from(e.childNodes), "var-init");
      for (; n.length > 1 && this.canTrimNode(n[n.length - 1]);) n.pop();
      for (; n.length > 1 && this.canTrimNode(n[0]);) n.shift();
      return 1 == n.length && n[0].nodeType == Node.ELEMENT_NODE ? this.identifySingleTranslatableElementNode(n[0], t + 1) : e;
    }
    chunkify(e) {
      let t = cc11001100_hook("t", null, "var-init");
      if (e.length > 0) {
        let n = cc11001100_hook("n", e[0], "var-init");
        if (1 == e.length && n.nodeType == Node.ELEMENT_NODE) t = cc11001100_hook("t", this.identifySingleTranslatableElementNode(e.pop()), "assign");else if (n.parentNode && e.length == n.parentNode.childNodes.length) t = cc11001100_hook("t", e.pop().parentNode, "assign"), e.length = cc11001100_hook("e.length", 0, "assign");else for (t = cc11001100_hook("t", n.ownerDocument.createElement("font"), "assign"), t.setAttribute("_mstMutation", "1"), t._mstChunk = cc11001100_hook("t._mstChunk", !0, "assign"), n.parentNode && n.parentNode.insertBefore(t, n); e.length > 0;) n = cc11001100_hook("n", e[0], "assign"), n.nodeType == Node.ELEMENT_NODE && n.setAttribute("_mstMutation", "1"), n.nodeType == Node.TEXT_NODE && this.fontMutation.set(n, 1), t.appendChild(e.shift());
      }
      return t;
    }
    trimChunk(e) {
      let t = cc11001100_hook("t", !0, "var-init");
      for (; t;) {
        if (t = cc11001100_hook("t", !1, "assign"), 1 == e.length && !ne(e[0])) return;
        if (1 == e.length && e[0].nodeType == Node.ELEMENT_NODE && !oe(e[0]) && e[0].childNodes.length > 0) {
          const n = cc11001100_hook("n", e.pop(), "var-init");
          for (let t = cc11001100_hook("t", 0, "var-init"); t < n.childNodes.length; t++) e.push(n.childNodes[t]);
          t = cc11001100_hook("t", !0, "assign");
        }
        e.length > 0 && (this.canTrimNode(e[0]) ? (e.shift(), t = cc11001100_hook("t", !0, "assign")) : this.canTrimNode(e[e.length - 1]) && (e.pop(), t = cc11001100_hook("t", !0, "assign")));
      }
      1 == e.length && this.canTrimNode(e[0]) && e.pop();
    }
    canTrimNode(e) {
      if (this._eDomRoot && this.bTranslateSelectedTextOnly) {
        if (e.nodeType === Node.TEXT_NODE && !this._eDomRoot.ownerDocument.defaultView?.getSelection()?.containsNode(e, !1)) return !0;
        if (e.nodeType === Node.ELEMENT_NODE && !this._eDomRoot.ownerDocument.defaultView?.getSelection()?.containsNode(e, !0)) return !0;
      }
      let t = cc11001100_hook("t", "", "var-init");
      switch (e.nodeType) {
        case Node.ELEMENT_NODE:
          t = cc11001100_hook("t", e.textContent || "", "assign");
          break;
        case Node.TEXT_NODE:
          t = cc11001100_hook("t", e.nodeValue || "", "assign");
          break;
        default:
          return !0;
      }
      return !ie(t);
    }
    denormalizeElementRecursive(e, t, n, s) {
      if (!e || !t || "string" != typeof n || "number" != typeof s) return;
      if (s > 9) return;
      let r = cc11001100_hook("r", 0, "var-init");
      const o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", [], "var-init");
      for (let t = cc11001100_hook("t", 0, "var-init"); t < e.childNodes.length; t++) {
        const n = cc11001100_hook("n", e.childNodes[t], "var-init");
        n.nodeType === Node.ELEMENT_NODE ? o.push(n) : n.nodeType === Node.TEXT_NODE && a.push(n);
      }
      for (let l = cc11001100_hook("l", 0, "var-init"); l < t.childNodes.length; l++) {
        const u = cc11001100_hook("u", t.childNodes[l], "var-init");
        let h = cc11001100_hook("h", null, "var-init");
        if (u.nodeType === Node.TEXT_NODE) {
          if (a.length > 0) {
            h = cc11001100_hook("h", a.shift(), "assign");
            const e = cc11001100_hook("e", this.translateMutation.has(h) ? this.translateMutation.get(h) + 1 : 1, "var-init");
            this.translateMutation.set(h, e), h.nodeValue = cc11001100_hook("h.nodeValue", u.nodeValue, "assign");
          } else h = cc11001100_hook("h", document.createTextNode(u.nodeValue), "assign");
          if (this.bTranslateSelectedTextOnly && this._detectedLanguage && J.isRtl(this._detectedLanguage) !== J.isRtl(this._sTo)) {
            const e = cc11001100_hook("e", J.isRtl(this._sTo) ? String.fromCodePoint(8207) : String.fromCodePoint(8206), "var-init");
            h.nodeValue = cc11001100_hook("h.nodeValue", e + h.nodeValue + e, "assign");
          }
        } else if (u.nodeType === Node.ELEMENT_NODE) {
          const e = cc11001100_hook("e", u.nodeName, "var-init");
          if (e.length < n.length + 2 || e.substring(0, n.length) !== n) i.error(`Encountered an unexpected node in the returned translated HTML. Expected ${n}${s}X but got ${e}`);else {
            const t = cc11001100_hook("t", n.length, "var-init"),
              r = cc11001100_hook("r", parseInt(e.substring(t, t + 1)), "var-init"),
              a = cc11001100_hook("a", parseInt(e.substring(t + 1)), "var-init");
            r !== s ? i.error(`Encountered a node at the wrong level. Expected level ${s} but got ${e}`) : a >= 0 && a < o.length ? (h = cc11001100_hook("h", o[a], "assign"), h.hasAttribute("_isTranslated") || h.setAttribute("_isTranslated", "1"), this.denormalizeElementRecursive(h, u, n, s + 1)) : i.error(`Encountered a node at with an invalid element index. There are ${o.length} nodes at level ${s} but got ${e}`);
          }
        }
        if (h) {
          if (e.childNodes[r] !== h) {
            if (h.nodeType === Node.TEXT_NODE) {
              const e = cc11001100_hook("e", this.translateMutation.has(h) ? this.translateMutation.get(h) + 1 : 1, "var-init");
              this.translateMutation.set(h, e);
            }
            e.insertBefore(h, e.childNodes[r]);
          }
          r++;
        }
      }
      for (; r < e.childNodes.length;) e.removeChild(e.lastChild);
    }
    denormalizeElement(e, t, n) {
      if (!e || !e.childNodes || "string" != typeof t || 0 === t.length || "string" != typeof n || 0 === n.length) return;
      n = cc11001100_hook("n", n.toUpperCase(), "assign");
      const s = cc11001100_hook("s", document.createElement("div"), "var-init");
      (function (e, t) {
        e.innerHTML = cc11001100_hook("e.innerHTML", t.replace(Q, "<$1$2$3>"), "assign");
      })(s, t), this.denormalizeElementRecursive(e, s, n, 1);
    }
    checkForVisibleTranslationCompletion(e) {
      this.bOnIntermediateCompleteCalled || this.bTranslateFullPageInOneGo || (e.requestType == je.ATTRIBUTE_REQUEST || function (e) {
        let t = cc11001100_hook("t", !0, "var-init");
        const n = cc11001100_hook("n", performance.now(), "var-init");
        try {
          const s = cc11001100_hook("s", e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement, "var-init");
          let r;
          if (s && (r = cc11001100_hook("r", s.getBoundingClientRect(), "assign"))) if (0 === r.height || 0 === r.width) t = cc11001100_hook("t", !0, "assign"), s._mstScrolledData = cc11001100_hook("s._mstScrolledData", !0, "assign"), s._mstScrolledTime = cc11001100_hook("s._mstScrolledTime", n, "assign");else {
            const e = cc11001100_hook("e", window.innerHeight || document.documentElement.clientHeight, "var-init");
            t = cc11001100_hook("t", r.top <= e || r.bottom <= e, "assign");
          }
        } catch (e) {}
        return t;
      }(e.element) ? this.iScrolledElementsTranslated++ : this.iScrolledElementsTranslated > 0 && this.iHiddenElementsTranslated++, this.iHiddenElementsTranslated > 0 && (this.bOnIntermediateCompleteCalled = cc11001100_hook("this.bOnIntermediateCompleteCalled", !0, "assign"), this._fVisibleComplete(!1)));
    }
    processTranslateRequest(e) {
      (function (e) {
        const t = cc11001100_hook("t", k(e), "var-init");
        if (t > ve) return function (e) {
          if (!l) return Promise.reject();
          const t = cc11001100_hook("t", Ue(), "var-init");
          return xe.addJob(new Te(l.getFromLanguage(), l.getToLanguage(), [e], [e], (e, n) => {
            e.length != n.length && (i.error("Invalid results from Translate Service"), t.reject(e));
            const s = cc11001100_hook("s", n[0], "var-init");
            s.TranslatedText = cc11001100_hook("s.TranslatedText", ue(s.TranslatedText), "assign"), t.resolve(s);
          }, (e, n) => {
            t.reject(n);
          }, !0)), t.promise;
        }(e);
        const n = cc11001100_hook("n", function (e) {
          const t = cc11001100_hook("t", be.get(e), "var-init");
          return null != t && (be.delete(e), be.set(e, t)), t;
        }(e), "var-init");
        if (n) return n.ServedFromCache = cc11001100_hook("n.ServedFromCache", !0, "assign"), Promise.resolve(n);
        let s = cc11001100_hook("s", we.get(e), "var-init");
        return s || (Ce.push({
          originalText: cc11001100_hook("originalText", e, "object-key-init")
        }), Se += cc11001100_hook("Se", t, "assign"), s = cc11001100_hook("s", Ue(), "assign"), we.set(e, s)), s.promise;
      })(e.text).then(t => {
        if (this._bAborted) return;
        this.checkForVisibleTranslationCompletion(e), this._fTranslateCallbacks.incrementTotalCharacterTranslated(e.text.length), this.updateDetectedLanguage(t), this._oApplyStyle && function (e, t, n, s) {
          try {
            if (t) return;
            if (e && "x-mst-element" in e && (e = cc11001100_hook("e", e["x-mst-element"], "assign"), s = cc11001100_hook("s", !0, "assign")), !n || !e || !e.getAttribute) return;
            if (e.adjustAlign = cc11001100_hook("e.adjustAlign", e.getAttribute("adjustalign") && "false" != e.getAttribute("adjustalign").toLowerCase(), "assign"), null == e.adjustAlign && e.parentNode && (e.adjustAlign = cc11001100_hook("e.adjustAlign", e.parentNode.adjustAlign, "assign")), null != e.adjustAlign && null != e.adjustAlign || (e.adjustAlign = cc11001100_hook("e.adjustAlign", !0, "assign")), e.style && (s || ne(e)) && e.adjustAlign) {
              for (; !s && "inline" === x(e, "display");) e = cc11001100_hook("e", e.parentNode, "assign");
              for (const t in n) if (t in n) try {
                const s = cc11001100_hook("s", x(e, t), "var-init");
                if (s != n[t]) {
                  if ("textAlign" == t && (s && -1 != s.toLowerCase().indexOf("center") || e.tagName && "center" == e.tagName.toLowerCase())) continue;
                  e._mstStyle || (e._mstStyle = cc11001100_hook("e._mstStyle", {}, "assign")), e.style && e.style[t] ? e._mstStyle[t] = cc11001100_hook("e._mstStyle[t]", e.style[t], "assign") : e._mstStyle[t] = cc11001100_hook("e._mstStyle[t]", s, "assign"), e.style && (e.style[t] = cc11001100_hook("e.style[t]", n[t], "assign"));
                }
              } catch (e) {
                i.error(e);
              }
            }
          } catch (e) {
            i.error(e);
          }
        }(e.element, this.bTranslateSelectedTextOnly, this._oApplyStyle, e.requestType == je.ATTRIBUTE_REQUEST);
        const n = cc11001100_hook("n", e.text, "var-init");
        this._fTranslateCallbacks.onElementTextTranslated({
          originalText: cc11001100_hook("originalText", n, "object-key-init"),
          translatedText: cc11001100_hook("translatedText", t.TranslatedText, "object-key-init")
        }), e.requestType == je.ATTRIBUTE_REQUEST ? this.translateElementAttributes(e.element, e.attributeName, e.text, t.TranslatedText) : this.translateElement(e.element, e.text, t.TranslatedText);
      });
    }
    translate(e, t) {
      const n = cc11001100_hook("n", () => {
        const e = cc11001100_hook("e", this.visibleElementChunks.getNextElementChunk(), "var-init");
        if (!e) return null;
        if (e.elementText) return {
          element: cc11001100_hook("element", e.element, "object-key-init"),
          requestType: cc11001100_hook("requestType", je.ELEMENT_REQUEST, "object-key-init"),
          text: cc11001100_hook("text", e.elementText, "object-key-init")
        };
        const t = cc11001100_hook("t", e.getNextAttribute(), "var-init");
        return t ? {
          element: cc11001100_hook("element", e.element, "object-key-init"),
          requestType: cc11001100_hook("requestType", je.ATTRIBUTE_REQUEST, "object-key-init"),
          text: cc11001100_hook("text", e.getAttribute(t), "object-key-init"),
          attributeName: cc11001100_hook("attributeName", t, "object-key-init")
        } : null;
      }, "var-init");
      let s = cc11001100_hook("s", n(), "var-init"),
        r = cc11001100_hook("r", k(s?.text), "var-init");
      do {
        if (!s) break;
        this._iVisibleTxtLength -= cc11001100_hook("this._iVisibleTxtLength", r, "assign");
        const e = cc11001100_hook("e", this.visibleElementChunks.getElementChunk(s.element), "var-init");
        e && s.requestType == je.ATTRIBUTE_REQUEST ? e.removeNextAttribute() : e && s.requestType == je.ELEMENT_REQUEST && e.removeElementText(), e?.isEmpty() && this.visibleElementChunks.removeElementChunk(s.element), this.processTranslateRequest(s), s = cc11001100_hook("s", n(), "assign"), r = cc11001100_hook("r", k(s?.text), "assign");
      } while (s && Se + r < ve && Ce.length < 100);
      (function () {
        if (!l) return Promise.reject();
        if (0 == Ce.length) return Promise.resolve();
        const e = cc11001100_hook("e", Ce, "var-init"),
          t = cc11001100_hook("t", Se, "var-init");
        Ce = cc11001100_hook("Ce", [], "assign"), Se = cc11001100_hook("Se", 0, "assign");
        const n = cc11001100_hook("n", Ue(), "var-init");
        return xe.addJob(new Te(l.getFromLanguage(), l.getToLanguage(), e.map(e => e.originalText), e, (e, t) => {
          e.length != t.length && (i.error("Invalid results from Translate Service"), ke(e, "Inconsistent Data"));
          for (let n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) Me(e[n], t[n]);
          n.resolve();
        }, (e, t) => {
          ke(e, t), n.reject(t);
        }, t > ve)), n.promise;
      })().then(() => {
        this.onNetworkRequestCompletion(e, t);
      }).catch(e => {
        this.onNetworkRequestFailure(e);
      }), 0 == De() && D(this.traverseDOM, e, t);
    }
    updateDetectedLanguage(e) {
      const t = cc11001100_hook("t", e.From, "var-init");
      null == t || t.isBlank() || (this._allDetectedLanguages[t] = cc11001100_hook("this._allDetectedLanguages[t]", (this._allDetectedLanguages[t] || 0) + 1, "assign"), (null == this._detectedLanguage || this._detectedLanguage.isBlank() || this._allDetectedLanguages[t] > this._allDetectedLanguages[this._detectedLanguage]) && (this._detectedLanguage = cc11001100_hook("this._detectedLanguage", t, "assign")));
    }
    onNetworkRequestCompletion(e, t) {
      this._bAborted || (a.requestsInitiated = cc11001100_hook("a.requestsInitiated", !0, "assign"), D(this.traverseDOM, e, t));
    }
    onNetworkRequestFailure(e) {
      try {
        if (a.requestsInitiated = cc11001100_hook("a.requestsInitiated", !0, "assign"), this.bSentTranslationError || this._bAborted) return;
        this._fError && this._fError(e), this.bSentTranslationError = cc11001100_hook("this.bSentTranslationError", !0, "assign");
      } catch (e) {
        i.error("Error in translateError. ", e);
      }
      this.bSentTranslationComplete || this.bOnIntermediateCompleteCalled || this.cancel();
    }
    translateElementAttributes(e, t, n, s) {
      if (n === s) return;
      if (void 0 === e._mstSrcAttribute && (e._mstSrcAttribute = cc11001100_hook("e._mstSrcAttribute", {}, "assign")), e._mstSrcAttribute[t] = cc11001100_hook("e._mstSrcAttribute[t]", e.getAttribute(t), "assign"), this.attributeMutation.has(e)) {
        const n = cc11001100_hook("n", this.attributeMutation.get(e), "var-init");
        t in n ? n[t] += cc11001100_hook("n[t]", 1, "assign") : n[t] = cc11001100_hook("n[t]", 1, "assign");
      } else {
        const n = cc11001100_hook("n", {
          [t]: cc11001100_hook("t", 1, "object-key-init")
        }, "var-init");
        this.attributeMutation.set(e, n);
      }
      const r = cc11001100_hook("r", "_mst" + t, "var-init");
      n.isBlank() || de(e, r, ge(n)), de(e, t, s.replace(Y, "").replace(K, ">").replace(G, "<").replace($, "&"));
    }
    translateElement(e, t, n) {
      if (t !== n) if (e._mstSrcHtml = cc11001100_hook("e._mstSrcHtml", e.cloneNode(!0), "assign"), "option" != e.nodeName.toLowerCase()) try {
        this.denormalizeElement(e, n, "b");
        const t = cc11001100_hook("t", e.textContent, "var-init");
        t && !t.isBlank() && e.setAttribute("_mstTextHash", ge(t));
      } catch (e) {} else this.denormalizeElement(e, n, "b");
    }
    executeTranslation() {
      if (this._eDomRoot?.nodeType !== Node.ELEMENT_NODE) throw new Error("Invalid input type");
      const e = cc11001100_hook("e", se(document.documentElement), "var-init");
      if (this._sFrom === this._sTo || !this._eDomRoot.hasChildNodes() || e == T.Off) return this.translationComplete(), this;
      if (u(this), this.bTranslateSelectedTextOnly || this.bTranslateFullPageInOneGo || function (e) {
        const t = cc11001100_hook("t", () => {
          let n = cc11001100_hook("n", window.scrollX, "var-init"),
            s = cc11001100_hook("s", window.scrollY, "var-init"),
            r = cc11001100_hook("r", 0, "var-init");
          const o = cc11001100_hook("o", () => {
            const a = cc11001100_hook("a", window.scrollX, "var-init"),
              l = cc11001100_hook("l", window.scrollY, "var-init");
            n == a && s == l ? r++ : (n = cc11001100_hook("n", a, "assign"), s = cc11001100_hook("s", l, "assign"), r = cc11001100_hook("r", 0, "assign")), r >= 6 ? (i.debug("Scrolling has stopped."), P(t), D(e)) : L.requestAnimationFrame(o);
          }, "var-init");
          L.requestAnimationFrame(o);
        }, "var-init");
        P(t);
      }(() => {
        0 == De() && this.triggerTraverseDom(O.Scrolled);
      }), this.setMutationObserversForDocument(window), function (e, t) {
        F(), I = cc11001100_hook("I", new AbortController(), "assign"), e.addEventListener("visibilitychange", t, {
          signal: cc11001100_hook("signal", I.signal, "object-key-init")
        });
      }(document, () => this.onDocumentVisibilityChange()), !this.bTranslateSelectedTextOnly) {
        const e = cc11001100_hook("e", document.querySelector("head > title"), "var-init");
        e && this.flushChunk([e]);
      }
      return this.isTraverseDOMActive = cc11001100_hook("this.isTraverseDOMActive", !0, "assign"), this.traverseDOM(this.getTraversalStack(this._eDomRoot), O.Auto), this;
    }
  }
  const Ue = cc11001100_hook("Ue", () => {
    let e, t;
    const n = cc11001100_hook("n", new Promise((n, s) => {
      e = cc11001100_hook("e", n, "assign"), t = cc11001100_hook("t", s, "assign");
    }), "var-init");
    return {
      resolve: cc11001100_hook("resolve", e, "object-key-init"),
      reject: cc11001100_hook("reject", t, "object-key-init"),
      promise: cc11001100_hook("promise", n, "object-key-init")
    };
  }, "var-init");
  function ze(e) {
    cc11001100_hook("e", e, "function-parameter");
    let t = cc11001100_hook("t", typeof e, "var-init");
    return "object" === t && (e ? "[object Array]" == Object.prototype.toString.call(e) && (t = cc11001100_hook("t", "array", "assign")) : t = cc11001100_hook("t", "null", "assign")), t;
  }
  String.prototype.isBlank = cc11001100_hook("String.prototype.isBlank", String.prototype.isBlank || function () {
    return null == this || "string" != typeof this || 0 === this.trim().length;
  }, "assign"), String.prototype.htmlEscape = cc11001100_hook("String.prototype.htmlEscape", String.prototype.htmlEscape || function () {
    if (!this) return "";
    const e = cc11001100_hook("e", document.createElement("span"), "var-init");
    return e.innerText = cc11001100_hook("e.innerText", this, "assign"), e.innerHTML;
  }, "assign");
  let We,
    Xe = cc11001100_hook("Xe", null, "var-init");
  function Qe(e) {
    cc11001100_hook("e", e, "function-parameter");
    switch (ze(e)) {
      case "object":
      case "array":
        return JSON.stringify(e);
      case "null":
        return "null";
      case "undefined":
        return "undefined";
      default:
        return e.toString();
    }
  }
  var $e, Ge;
  !function (e) {
    e[e.GET = cc11001100_hook("e.GET", 0, "assign")] = cc11001100_hook("e[e.GET = 0]", "GET", "assign"), e[e.POST = cc11001100_hook("e.POST", 1, "assign")] = cc11001100_hook("e[e.POST = 1]", "POST", "assign"), e[e.HEAD = cc11001100_hook("e.HEAD", 2, "assign")] = cc11001100_hook("e[e.HEAD = 2]", "HEAD", "assign"), e[e.PUT = cc11001100_hook("e.PUT", 3, "assign")] = cc11001100_hook("e[e.PUT = 3]", "PUT", "assign"), e[e.DELETE = cc11001100_hook("e.DELETE", 4, "assign")] = cc11001100_hook("e[e.DELETE = 4]", "DELETE", "assign");
  }($e || ($e = cc11001100_hook("$e", {}, "assign")));
  class Ke {
    constructor(e, t = 0, n = null) {
      this.message = cc11001100_hook("this.message", e, "assign"), this.status = cc11001100_hook("this.status", t, "assign"), this.details = cc11001100_hook("this.details", n, "assign");
    }
    get isHttpError() {
      return !0;
    }
    get isBadRequest() {
      return null != this.status && this.status >= 400 && this.status < 500;
    }
    get isServerError() {
      return null != this.status && this.status >= 500 && this.status < 600;
    }
    get isServiceUnavailable() {
      return 503 === this.status;
    }
    get isOverQuota() {
      return 429 === this.status;
    }
  }
  function Ye(e) {
    cc11001100_hook("e", e, "function-parameter");
    We = cc11001100_hook("We", e, "assign");
  }
  function Ze(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (ye(t)) try {
      const t = cc11001100_hook("t", JSON.parse(e), "var-init");
      for (const e in t) _e(String(e), {
        TranslatedText: cc11001100_hook("TranslatedText", t[e], "object-key-init")
      });
    } catch (e) {
      n && n();
    }
  }
  function et(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    function n() {
      Xe && clearTimeout(Xe);
    }
    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      n(), tt().then(() => {
        t.onError(e);
      });
    }
    Xe && clearTimeout(Xe), e.translateFullPageInOneGo || (Xe = cc11001100_hook("Xe", window.setTimeout(() => {
      i.error("20000ms completed now. Translation timed out."), s(JSON.stringify({
        status: cc11001100_hook("status", -2, "object-key-init")
      }));
    }, 2e4), "assign")), i.info("Beginning page translation..."), tt().then(() => function (e, t, n, s) {
      const r = cc11001100_hook("r", e => {
          i.debug("Intermidiate complete called with " + e), t && t();
        }, "var-init"),
        o = cc11001100_hook("o", e => {
          i.error("Error occurred while translating. Details: " + e), u(null), s && s(e);
        }, "var-init");
      return c.translateServiceSubscriptionKey = cc11001100_hook("c.translateServiceSubscriptionKey", We, "assign"), a.translationStartTime = cc11001100_hook("a.translationStartTime", performance.now(), "assign"), new Promise(function (t) {
        u(new Je(document.body, e.fromLang, e.toLang, t, o, !1, e.translateFullPageInOneGo, r, n)), l.executeTranslation();
      }).then(function () {
        i.info("Successfully completed translation.");
      }).catch(function (e) {
        i.error("Failed to translate the page", e), s && s(e);
      });
    }(e, () => {
      n(), t.onComplete();
    }, t, e => {
      n(), t.onError(e);
    })).catch(e => {
      i.error("Failed to translate page."), s(e);
    });
  }
  function tt() {
    return null == l ? Promise.resolve() : new Promise(e => {
      l?.cancel(), u(null), i.info("Successfully completed untranslation."), e();
    });
  }
  function nt(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e) return null;
    const t = cc11001100_hook("t", e.getSelection(), "var-init");
    let n;
    const s = cc11001100_hook("s", e.document.activeElement, "var-init");
    if (s && t && s.nodeType === Node.ELEMENT_NODE && "A" === s.nodeName && !t.containsNode(s, !0)) return n = cc11001100_hook("n", e.document.createRange(), "assign"), n.selectNode(s), t.removeAllRanges(), t.addRange(n), s;
    if (!t || t.isCollapsed || t.rangeCount < 1) return null;
    n = cc11001100_hook("n", t.getRangeAt(0), "assign");
    const r = cc11001100_hook("r", n.startContainer, "var-init"),
      i = cc11001100_hook("i", n.endContainer, "var-init"),
      o = cc11001100_hook("o", n.startOffset, "var-init");
    let a = cc11001100_hook("a", n.endOffset, "var-init");
    return r.nodeType === Node.TEXT_NODE && 0 !== o && r.parentNode && r.nodeValue && (r.parentNode.insertBefore(document.createTextNode(r.nodeValue.substring(0, o)), r), r.nodeValue = cc11001100_hook("r.nodeValue", r.nodeValue.substring(o), "assign"), n.setStart(r, 0), r === i && (a -= cc11001100_hook("a", o, "assign"))), i.nodeType === Node.TEXT_NODE && i.nodeValue && a !== i.nodeValue.length && (i.parentNode?.insertBefore(document.createTextNode(i.nodeValue.substring(a)), i.nextSibling), i.nodeValue = cc11001100_hook("i.nodeValue", i.nodeValue.substring(0, a), "assign"), n.setEnd(i, i.nodeValue.length)), t.removeAllRanges(), t.addRange(n), n.commonAncestorContainer.nodeType === Node.TEXT_NODE ? n.commonAncestorContainer.parentNode : n.commonAncestorContainer;
  }
  function st(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    c.translateServiceSubscriptionKey = cc11001100_hook("c.translateServiceSubscriptionKey", We, "assign"), a.translationStartTime = cc11001100_hook("a.translationStartTime", performance.now(), "assign");
    const n = cc11001100_hook("n", [], "var-init");
    let s = cc11001100_hook("s", nt(window), "var-init");
    s && n.push(s);
    const r = cc11001100_hook("r", document.querySelectorAll("iframe"), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < r.length; e++) try {
      s = cc11001100_hook("s", nt(r[e].contentWindow), "assign"), s && n.push(s);
    } catch (e) {}
    const o = cc11001100_hook("o", e => {
      i.error("Error occurred while translating selection. Details: " + e), u(null), "function" == typeof t.onError && t.onError(e);
    }, "var-init");
    function h(n) {
      cc11001100_hook("n", n, "function-parameter");
      return new Promise(function (s, r) {
        u(new Je(n, "", e.toLang, s, function (e) {
          o(e), r(e);
        }, !0, !1, t.onComplete, t)), l.executeTranslation();
      });
    }
    let d = cc11001100_hook("d", Promise.resolve(null), "var-init");
    for (let e = cc11001100_hook("e", 0, "var-init"); e < n.length; e++) d = cc11001100_hook("d", d.then(h.bind(null, n[e])), "assign");
    return d.catch(function (e) {
      i.error("Failed to translate the text selection(s)", e), o(e), Promise.reject(e);
    });
  }
  class rt extends Array {
    get top() {
      return this[this.length - 1];
    }
    set top(e) {
      this[this.length - 1] = cc11001100_hook("this[this.length - 1]", e, "assign");
    }
  }
  function it(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (null == e || "object" != typeof e) return e;
    if (e instanceof Date) {
      const t = cc11001100_hook("t", new Date(), "var-init");
      return t.setTime(e.getTime()), t;
    }
    if (e instanceof Array) {
      const t = cc11001100_hook("t", [], "var-init");
      for (let n = cc11001100_hook("n", 0, "var-init"), s = cc11001100_hook("s", e.length, "var-init"); n < s; n++) t[n] = cc11001100_hook("t[n]", it(e[n]), "assign");
      return t;
    }
    if (e instanceof Object) {
      const t = cc11001100_hook("t", {}, "var-init");
      for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = cc11001100_hook("t[n]", it(e[n]), "assign"));
      return t;
    }
    return e;
  }
  function ot() {
    return l && l.getAllDetectedLanguages();
  }
  function at() {
    return l && l.getDetectedLanguage();
  }
  !function (e) {
    e.startPageTranslation = cc11001100_hook("e.startPageTranslation", et, "assign"), e.startSelectionTranslation = cc11001100_hook("e.startSelectionTranslation", st, "assign"), e.stopPageTranslation = cc11001100_hook("e.stopPageTranslation", tt, "assign"), e.setTranslateServiceSubscriptionKey = cc11001100_hook("e.setTranslateServiceSubscriptionKey", Ye, "assign"), e.setTranslateCacheData = cc11001100_hook("e.setTranslateCacheData", Ze, "assign"), e.getAllDetectedLanguages = cc11001100_hook("e.getAllDetectedLanguages", ot, "assign"), e.getDetectedLanguage = cc11001100_hook("e.getDetectedLanguage", at, "assign");
  }(Ge || (Ge = cc11001100_hook("Ge", {}, "assign"))), Microsoft = cc11001100_hook("Microsoft", n, "assign");
})();