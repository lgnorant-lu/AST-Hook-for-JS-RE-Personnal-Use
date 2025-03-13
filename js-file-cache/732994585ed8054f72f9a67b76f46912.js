try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "bee2173a-47b3-45e2-aab1-3c6f8d961749", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-bee2173a-47b3-45e2-aab1-3c6f8d961749", "assign"));
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[991], {
  45879: function (e, t, r) {
    let n, i, s, o, a, l;
    r.d(t, {
      G: function () {
        return rH;
      }
    });
    var c,
      u,
      d,
      h,
      p,
      f,
      m,
      y,
      g,
      _,
      S,
      v,
      w = cc11001100_hook("w", r(30641), "var-init"),
      b = cc11001100_hook("b", r(87249), "var-init"),
      E = cc11001100_hook("E", r(59702), "var-init"),
      k = cc11001100_hook("k", r(46848), "var-init"),
      M = cc11001100_hook("M", r(14430), "var-init"),
      I = cc11001100_hook("I", r(91905), "var-init"),
      C = cc11001100_hook("C", r(54996), "var-init"),
      T = cc11001100_hook("T", r(77237), "var-init"),
      R = cc11001100_hook("R", r(88808), "var-init"),
      x = cc11001100_hook("x", r(22473), "var-init"),
      D = cc11001100_hook("D", r(40600), "var-init"),
      O = cc11001100_hook("O", r(18887), "var-init"),
      N = cc11001100_hook("N", r(16802), "var-init"),
      A = cc11001100_hook("A", r(10489), "var-init"),
      L = cc11001100_hook("L", r(82314), "var-init"),
      P = cc11001100_hook("P", r(61591), "var-init"),
      F = cc11001100_hook("F", r(28552), "var-init"),
      U = cc11001100_hook("U", r(9831), "var-init"),
      B = cc11001100_hook("B", r(41653), "var-init"),
      W = cc11001100_hook("W", r(9804), "var-init"),
      z = cc11001100_hook("z", r(42880), "var-init"),
      j = cc11001100_hook("j", r(96519), "var-init"),
      $ = cc11001100_hook("$", r(22357), "var-init"),
      H = cc11001100_hook("H", r(46382), "var-init"),
      q = cc11001100_hook("q", r(21096), "var-init"),
      V = cc11001100_hook("V", r(95689), "var-init"),
      K = cc11001100_hook("K", r(77080), "var-init"),
      G = cc11001100_hook("G", r(73990), "var-init");
    let J = cc11001100_hook("J", w.GLOBAL_OBJ, "var-init"),
      Y = cc11001100_hook("Y", "sentryReplaySession", "var-init"),
      X = cc11001100_hook("X", "Unable to send Replay", "var-init");
    function Q(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e?.host, "var-init");
      return t?.shadowRoot === e;
    }
    function Z(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "[object ShadowRoot]" === Object.prototype.toString.call(e);
    }
    function ee(e) {
      cc11001100_hook("e", e, "function-parameter");
      try {
        var t;
        let r = cc11001100_hook("r", e.rules || e.cssRules, "var-init");
        return r ? ((t = cc11001100_hook("t", Array.from(r, et).join(""), "assign")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = cc11001100_hook("t", t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;"), "assign")), t) : null;
      } catch (e) {
        return null;
      }
    }
    function et(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t;
      if ("styleSheet" in e) try {
        t = cc11001100_hook("t", ee(e.styleSheet) || function (e) {
          let {
            cssText: t
          } = cc11001100_hook("", e, "var-init");
          if (t.split('"').length < 3) return t;
          let r = cc11001100_hook("r", ["@import", `url(${JSON.stringify(e.href)})`], "var-init");
          return "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`), e.supportsText && r.push(`supports(${e.supportsText})`), e.media.length && r.push(e.media.mediaText), r.join(" ") + ";";
        }(e), "assign");
      } catch (e) {} else if ("selectorText" in e) {
        let t = cc11001100_hook("t", e.cssText, "var-init"),
          r = cc11001100_hook("r", e.selectorText.includes(":"), "var-init"),
          n = cc11001100_hook("n", "string" == typeof e.style.all && e.style.all, "var-init");
        if (n && (t = cc11001100_hook("t", function (e) {
          let t = cc11001100_hook("t", "", "var-init");
          for (let r = cc11001100_hook("r", 0, "var-init"); r < e.style.length; r++) {
            let n = cc11001100_hook("n", e.style, "var-init"),
              i = cc11001100_hook("i", n[r], "var-init"),
              s = cc11001100_hook("s", n.getPropertyPriority(i), "var-init");
            t += cc11001100_hook("t", `${i}:${n.getPropertyValue(i)}${s ? " !important" : ""};`, "assign");
          }
          return `${e.selectorText} { ${t} }`;
        }(e), "assign")), r && (t = cc11001100_hook("t", t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2"), "assign")), r || n) return t;
      }
      return t || e.cssText;
    }
    (c = cc11001100_hook("c", g || (g = cc11001100_hook("g", {}, "assign")), "assign"))[c.Document = cc11001100_hook("c.Document", 0, "assign")] = cc11001100_hook("(c = g || (g = {}))[c.Document = 0]", "Document", "assign"), c[c.DocumentType = cc11001100_hook("c.DocumentType", 1, "assign")] = cc11001100_hook("c[c.DocumentType = 1]", "DocumentType", "assign"), c[c.Element = cc11001100_hook("c.Element", 2, "assign")] = cc11001100_hook("c[c.Element = 2]", "Element", "assign"), c[c.Text = cc11001100_hook("c.Text", 3, "assign")] = cc11001100_hook("c[c.Text = 3]", "Text", "assign"), c[c.CDATA = cc11001100_hook("c.CDATA", 4, "assign")] = cc11001100_hook("c[c.CDATA = 4]", "CDATA", "assign"), c[c.Comment = cc11001100_hook("c.Comment", 5, "assign")] = cc11001100_hook("c[c.Comment = 5]", "Comment", "assign");
    class er {
      constructor() {
        this.idNodeMap = cc11001100_hook("this.idNodeMap", new Map(), "assign"), this.nodeMetaMap = cc11001100_hook("this.nodeMetaMap", new WeakMap(), "assign");
      }
      getId(e) {
        if (!e) return -1;
        let t = cc11001100_hook("t", this.getMeta(e)?.id, "var-init");
        return t ?? -1;
      }
      getNode(e) {
        return this.idNodeMap.get(e) || null;
      }
      getIds() {
        return Array.from(this.idNodeMap.keys());
      }
      getMeta(e) {
        return this.nodeMetaMap.get(e) || null;
      }
      removeNodeFromMap(e) {
        let t = cc11001100_hook("t", this.getId(e), "var-init");
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e));
      }
      has(e) {
        return this.idNodeMap.has(e);
      }
      hasNode(e) {
        return this.nodeMetaMap.has(e);
      }
      add(e, t) {
        let r = cc11001100_hook("r", t.id, "var-init");
        this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t);
      }
      replace(e, t) {
        let r = cc11001100_hook("r", this.getNode(e), "var-init");
        if (r) {
          let e = cc11001100_hook("e", this.nodeMetaMap.get(r), "var-init");
          e && this.nodeMetaMap.set(t, e);
        }
        this.idNodeMap.set(e, t);
      }
      reset() {
        this.idNodeMap = cc11001100_hook("this.idNodeMap", new Map(), "assign"), this.nodeMetaMap = cc11001100_hook("this.nodeMetaMap", new WeakMap(), "assign");
      }
    }
    function en({
      maskInputOptions: e,
      tagName: t,
      type: r
    }) {
      return "OPTION" === t && (t = cc11001100_hook("t", "SELECT", "assign")), !!(e[t.toLowerCase()] || r && e[r] || "password" === r || "INPUT" === t && !r && e.text);
    }
    function ei({
      isMasked: e,
      element: t,
      value: r,
      maskInputFn: n
    }) {
      let i = cc11001100_hook("i", r || "", "var-init");
      return e ? (n && (i = cc11001100_hook("i", n(i, t), "assign")), "*".repeat(i.length)) : i;
    }
    function es(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.toLowerCase();
    }
    function eo(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.toUpperCase();
    }
    let ea = cc11001100_hook("ea", "__rrweb_original__", "var-init");
    function el(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.type, "var-init");
      return e.hasAttribute("data-rr-is-password") ? "password" : t ? es(t) : null;
    }
    function ec(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value;
    }
    function eu(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r;
      try {
        r = cc11001100_hook("r", new URL(e, t ?? window.location.href), "assign");
      } catch (e) {
        return null;
      }
      let n = cc11001100_hook("n", r.pathname.match(/\.([0-9a-z]+)(?:$)/i), "var-init");
      return n?.[1] ?? null;
    }
    let ed = cc11001100_hook("ed", {}, "var-init");
    function eh(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", ed[e], "var-init");
      if (t) return t;
      let r = cc11001100_hook("r", window.document, "var-init"),
        n = cc11001100_hook("n", window[e], "var-init");
      if (r && "function" == typeof r.createElement) try {
        let t = cc11001100_hook("t", r.createElement("iframe"), "var-init");
        t.hidden = cc11001100_hook("t.hidden", !0, "assign"), r.head.appendChild(t);
        let i = cc11001100_hook("i", t.contentWindow, "var-init");
        i && i[e] && (n = cc11001100_hook("n", i[e], "assign")), r.head.removeChild(t);
      } catch (e) {}
      return ed[e] = cc11001100_hook("ed[e]", n.bind(window), "assign");
    }
    function ep(...e) {
      return eh("setTimeout")(...e);
    }
    function ef(...e) {
      return eh("clearTimeout")(...e);
    }
    function em(e) {
      cc11001100_hook("e", e, "function-parameter");
      try {
        return e.contentDocument;
      } catch (e) {}
    }
    let ey = cc11001100_hook("ey", 1, "var-init"),
      eg = cc11001100_hook("eg", RegExp("[^a-z0-9-_:]"), "var-init");
    function e_() {
      return ey++;
    }
    let eS = cc11001100_hook("eS", /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, "var-init"),
      ev = cc11001100_hook("ev", /^(?:[a-z+]+:)?\/\//i, "var-init"),
      ew = cc11001100_hook("ew", /^www\..*/i, "var-init"),
      eb = cc11001100_hook("eb", /^(data:)([^,]*),(.*)/i, "var-init");
    function eE(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return (e || "").replace(eS, (e, r, n, i, s, o) => {
        let a = cc11001100_hook("a", n || s || o, "var-init"),
          l = cc11001100_hook("l", r || i || "", "var-init");
        if (!a) return e;
        if (ev.test(a) || ew.test(a) || eb.test(a)) return `url(${l}${a}${l})`;
        if ("/" === a[0]) return `url(${l}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + a}${l})`;
        let c = cc11001100_hook("c", t.split("/"), "var-init"),
          u = cc11001100_hook("u", a.split("/"), "var-init");
        for (let e of (c.pop(), u)) "." !== e && (".." === e ? c.pop() : c.push(e));
        return `url(${l}${c.join("/")}${l})`;
      });
    }
    let ek = cc11001100_hook("ek", /^[^ \t\n\r\u000c]+/, "var-init"),
      eM = cc11001100_hook("eM", /^[, \t\n\r\u000c]+/, "var-init"),
      eI = cc11001100_hook("eI", new WeakMap(), "var-init");
    function eC(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return t && "" !== t.trim() ? eT(e, t) : t;
    }
    function eT(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r = cc11001100_hook("r", eI.get(e), "var-init");
      if (r || (r = cc11001100_hook("r", e.createElement("a"), "assign"), eI.set(e, r)), t) {
        if (t.startsWith("blob:") || t.startsWith("data:")) return t;
      } else t = cc11001100_hook("t", "", "assign");
      return r.setAttribute("href", t), r.href;
    }
    function eR(e, t, r, n, i, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      return n ? "src" !== r && ("href" !== r || "use" === t && "#" === n[0]) && ("xlink:href" !== r || "#" === n[0]) && ("background" !== r || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === r ? function (e, t) {
        if ("" === t.trim()) return t;
        let r = cc11001100_hook("r", 0, "var-init");
        function n(e) {
          cc11001100_hook("e", e, "function-parameter");
          let n;
          let i = cc11001100_hook("i", e.exec(t.substring(r)), "var-init");
          return i ? (n = cc11001100_hook("n", i[0], "assign"), r += cc11001100_hook("r", n.length, "assign"), n) : "";
        }
        let i = cc11001100_hook("i", [], "var-init");
        for (; n(eM), !(r >= t.length);) {
          let s = cc11001100_hook("s", n(ek), "var-init");
          if ("," === s.slice(-1)) s = cc11001100_hook("s", eC(e, s.substring(0, s.length - 1)), "assign"), i.push(s);else {
            let n = cc11001100_hook("n", "", "var-init");
            s = cc11001100_hook("s", eC(e, s), "assign");
            let o = cc11001100_hook("o", !1, "var-init");
            for (;;) {
              let e = cc11001100_hook("e", t.charAt(r), "var-init");
              if ("" === e) {
                i.push((s + n).trim());
                break;
              }
              if (o) ")" === e && (o = cc11001100_hook("o", !1, "assign"));else {
                if ("," === e) {
                  r += cc11001100_hook("r", 1, "assign"), i.push((s + n).trim());
                  break;
                }
                "(" === e && (o = cc11001100_hook("o", !0, "assign"));
              }
              n += cc11001100_hook("n", e, "assign"), r += cc11001100_hook("r", 1, "assign");
            }
          }
        }
        return i.join(", ");
      }(e, n) : "style" === r ? eE(n, eT(e)) : "object" === t && "data" === r ? eC(e, n) : "function" == typeof s ? s(r, n, i) : n : eC(e, n) : n;
    }
    function ex(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return ("video" === e || "audio" === e) && "autoplay" === t;
    }
    function eD(e, t, r = 1 / 0, n = 0) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : eD(e.parentNode, t, r, n + 1);
    }
    function eO(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return r => {
        if (null === r) return !1;
        try {
          if (e) {
            if ("string" == typeof e) {
              if (r.matches(`.${e}`)) return !0;
            } else if (function (e, t) {
              for (let r = cc11001100_hook("r", e.classList.length, "var-init"); r--;) {
                let n = cc11001100_hook("n", e.classList[r], "var-init");
                if (t.test(n)) return !0;
              }
              return !1;
            }(r, e)) return !0;
          }
          if (t && r.matches(t)) return !0;
          return !1;
        } catch {
          return !1;
        }
      };
    }
    function eN(e, t, r, n, i, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      try {
        let o = cc11001100_hook("o", e.nodeType === e.ELEMENT_NODE ? e : e.parentElement, "var-init");
        if (null === o) return !1;
        if ("INPUT" === o.tagName) {
          let e = cc11001100_hook("e", o.getAttribute("autocomplete"), "var-init");
          if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0;
        }
        let a = cc11001100_hook("a", -1, "var-init"),
          l = cc11001100_hook("l", -1, "var-init");
        if (s) {
          if ((l = cc11001100_hook("l", eD(o, eO(n, i)), "assign")) < 0) return !0;
          a = cc11001100_hook("a", eD(o, eO(t, r), l >= 0 ? l : 1 / 0), "assign");
        } else {
          if ((a = cc11001100_hook("a", eD(o, eO(t, r)), "assign")) < 0) return !1;
          l = cc11001100_hook("l", eD(o, eO(n, i), a >= 0 ? a : 1 / 0), "assign");
        }
        return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s;
      } catch (e) {}
      return !!s;
    }
    function eA(e) {
      cc11001100_hook("e", e, "function-parameter");
      return null == e ? "" : e.toLowerCase();
    }
    function eL(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r;
      let {
          doc: s,
          mirror: o,
          blockClass: a,
          blockSelector: l,
          unblockSelector: c,
          maskAllText: u,
          maskTextClass: d,
          unmaskTextClass: h,
          maskTextSelector: p,
          unmaskTextSelector: f,
          skipChild: m = !1,
          inlineStylesheet: y = !0,
          maskInputOptions: _ = {},
          maskAttributeFn: S,
          maskTextFn: v,
          maskInputFn: w,
          slimDOMOptions: b,
          dataURLOptions: E = {},
          inlineImages: k = !1,
          recordCanvas: M = !1,
          onSerialize: I,
          onIframeLoad: C,
          iframeLoadTimeout: T = 5e3,
          onStylesheetLoad: R,
          stylesheetLoadTimeout: x = 5e3,
          keepIframeSrcFn: D = () => !1,
          newlyAddedElement: O = !1
        } = cc11001100_hook("", t, "var-init"),
        {
          preserveWhiteSpace: N = !0
        } = cc11001100_hook("", t, "var-init"),
        A = cc11001100_hook("A", function (e, t) {
          let {
              doc: r,
              mirror: s,
              blockClass: o,
              blockSelector: a,
              unblockSelector: l,
              maskAllText: c,
              maskAttributeFn: u,
              maskTextClass: d,
              unmaskTextClass: h,
              maskTextSelector: p,
              unmaskTextSelector: f,
              inlineStylesheet: m,
              maskInputOptions: y = {},
              maskTextFn: _,
              maskInputFn: S,
              dataURLOptions: v = {},
              inlineImages: w,
              recordCanvas: b,
              keepIframeSrcFn: E,
              newlyAddedElement: k = !1
            } = cc11001100_hook("", t, "var-init"),
            M = cc11001100_hook("M", function (e, t) {
              if (!t.hasNode(e)) return;
              let r = cc11001100_hook("r", t.getId(e), "var-init");
              return 1 === r ? void 0 : r;
            }(r, s), "var-init");
          switch (e.nodeType) {
            case e.DOCUMENT_NODE:
              if ("CSS1Compat" !== e.compatMode) return {
                type: cc11001100_hook("type", g.Document, "object-key-init"),
                childNodes: cc11001100_hook("childNodes", [], "object-key-init"),
                compatMode: cc11001100_hook("compatMode", e.compatMode, "object-key-init")
              };
              return {
                type: cc11001100_hook("type", g.Document, "object-key-init"),
                childNodes: cc11001100_hook("childNodes", [], "object-key-init")
              };
            case e.DOCUMENT_TYPE_NODE:
              return {
                type: cc11001100_hook("type", g.DocumentType, "object-key-init"),
                name: cc11001100_hook("name", e.name, "object-key-init"),
                publicId: cc11001100_hook("publicId", e.publicId, "object-key-init"),
                systemId: cc11001100_hook("systemId", e.systemId, "object-key-init"),
                rootId: cc11001100_hook("rootId", M, "object-key-init")
              };
            case e.ELEMENT_NODE:
              return function (e, t) {
                let r;
                let {
                    doc: s,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: l,
                    inlineStylesheet: c,
                    maskInputOptions: u = {},
                    maskAttributeFn: d,
                    maskInputFn: h,
                    dataURLOptions: p = {},
                    inlineImages: f,
                    recordCanvas: m,
                    keepIframeSrcFn: y,
                    newlyAddedElement: _ = !1,
                    rootId: S,
                    maskAllText: v,
                    maskTextClass: w,
                    unmaskTextClass: b,
                    maskTextSelector: E,
                    unmaskTextSelector: k
                  } = cc11001100_hook("", t, "var-init"),
                  M = cc11001100_hook("M", function (e, t, r, n) {
                    try {
                      if (n && e.matches(n)) return !1;
                      if ("string" == typeof t) {
                        if (e.classList.contains(t)) return !0;
                      } else for (let r = cc11001100_hook("r", e.classList.length, "var-init"); r--;) {
                        let n = cc11001100_hook("n", e.classList[r], "var-init");
                        if (t.test(n)) return !0;
                      }
                      if (r) return e.matches(r);
                    } catch (e) {}
                    return !1;
                  }(e, o, a, l), "var-init"),
                  I = cc11001100_hook("I", function (e) {
                    if (e instanceof HTMLFormElement) return "form";
                    let t = cc11001100_hook("t", es(e.tagName), "var-init");
                    return eg.test(t) ? "div" : t;
                  }(e), "var-init"),
                  C = cc11001100_hook("C", {}, "var-init"),
                  T = cc11001100_hook("T", e.attributes.length, "var-init");
                for (let t = cc11001100_hook("t", 0, "var-init"); t < T; t++) {
                  let r = cc11001100_hook("r", e.attributes[t], "var-init");
                  r.name && !ex(I, r.name, r.value) && (C[r.name] = cc11001100_hook("C[r.name]", eR(s, I, es(r.name), r.value, e, d), "assign"));
                }
                if ("link" === I && c) {
                  let t = cc11001100_hook("t", Array.from(s.styleSheets).find(t => t.href === e.href), "var-init"),
                    r = cc11001100_hook("r", null, "var-init");
                  t && (r = cc11001100_hook("r", ee(t), "assign")), r && (C.rel = cc11001100_hook("C.rel", null, "assign"), C.href = cc11001100_hook("C.href", null, "assign"), C.crossorigin = cc11001100_hook("C.crossorigin", null, "assign"), C._cssText = cc11001100_hook("C._cssText", eE(r, t.href), "assign"));
                }
                if ("style" === I && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                  let t = cc11001100_hook("t", ee(e.sheet), "var-init");
                  t && (C._cssText = cc11001100_hook("C._cssText", eE(t, eT(s)), "assign"));
                }
                if ("input" === I || "textarea" === I || "select" === I || "option" === I) {
                  let t = cc11001100_hook("t", el(e), "var-init"),
                    r = cc11001100_hook("r", ec(e, eo(I), t), "var-init"),
                    n = cc11001100_hook("n", e.checked, "var-init");
                  if ("submit" !== t && "button" !== t && r) {
                    let n = cc11001100_hook("n", eN(e, w, E, b, k, en({
                      type: cc11001100_hook("type", t, "object-key-init"),
                      tagName: cc11001100_hook("tagName", eo(I), "object-key-init"),
                      maskInputOptions: cc11001100_hook("maskInputOptions", u, "object-key-init")
                    })), "var-init");
                    C.value = cc11001100_hook("C.value", ei({
                      isMasked: cc11001100_hook("isMasked", n, "object-key-init"),
                      element: cc11001100_hook("element", e, "object-key-init"),
                      value: cc11001100_hook("value", r, "object-key-init"),
                      maskInputFn: cc11001100_hook("maskInputFn", h, "object-key-init")
                    }), "assign");
                  }
                  n && (C.checked = cc11001100_hook("C.checked", n, "assign"));
                }
                if ("option" === I && (e.selected && !u.select ? C.selected = cc11001100_hook("C.selected", !0, "assign") : delete C.selected), "canvas" === I && m) {
                  if ("2d" === e.__context) !function (e) {
                    let t = cc11001100_hook("t", e.getContext("2d"), "var-init");
                    if (!t) return !0;
                    for (let r = cc11001100_hook("r", 0, "var-init"); r < e.width; r += cc11001100_hook("r", 50, "assign")) for (let n = cc11001100_hook("n", 0, "var-init"); n < e.height; n += cc11001100_hook("n", 50, "assign")) {
                      let i = cc11001100_hook("i", t.getImageData, "var-init"),
                        s = cc11001100_hook("s", ea in i ? i[ea] : i, "var-init"),
                        o = cc11001100_hook("o", new Uint32Array(s.call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer), "var-init");
                      if (o.some(e => 0 !== e)) return !1;
                    }
                    return !0;
                  }(e) && (C.rr_dataURL = cc11001100_hook("C.rr_dataURL", e.toDataURL(p.type, p.quality), "assign"));else if (!("__context" in e)) {
                    let t = cc11001100_hook("t", e.toDataURL(p.type, p.quality), "var-init"),
                      r = cc11001100_hook("r", s.createElement("canvas"), "var-init");
                    r.width = cc11001100_hook("r.width", e.width, "assign"), r.height = cc11001100_hook("r.height", e.height, "assign");
                    let n = cc11001100_hook("n", r.toDataURL(p.type, p.quality), "var-init");
                    t !== n && (C.rr_dataURL = cc11001100_hook("C.rr_dataURL", t, "assign"));
                  }
                }
                if ("img" === I && f) {
                  n || (i = cc11001100_hook("i", (n = cc11001100_hook("n", s.createElement("canvas"), "assign")).getContext("2d"), "assign"));
                  let t = cc11001100_hook("t", e.currentSrc || e.getAttribute("src") || "<unknown-src>", "var-init"),
                    r = cc11001100_hook("r", e.crossOrigin, "var-init"),
                    o = cc11001100_hook("o", () => {
                      e.removeEventListener("load", o);
                      try {
                        n.width = cc11001100_hook("n.width", e.naturalWidth, "assign"), n.height = cc11001100_hook("n.height", e.naturalHeight, "assign"), i.drawImage(e, 0, 0), C.rr_dataURL = cc11001100_hook("C.rr_dataURL", n.toDataURL(p.type, p.quality), "assign");
                      } catch (r) {
                        if ("anonymous" !== e.crossOrigin) {
                          e.crossOrigin = cc11001100_hook("e.crossOrigin", "anonymous", "assign"), e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o);
                          return;
                        }
                        console.warn(`Cannot inline img src=${t}! Error: ${r}`);
                      }
                      "anonymous" === e.crossOrigin && (r ? C.crossOrigin = cc11001100_hook("C.crossOrigin", r, "assign") : e.removeAttribute("crossorigin"));
                    }, "var-init");
                  e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o);
                }
                if (("audio" === I || "video" === I) && (C.rr_mediaState = cc11001100_hook("C.rr_mediaState", e.paused ? "paused" : "played", "assign"), C.rr_mediaCurrentTime = cc11001100_hook("C.rr_mediaCurrentTime", e.currentTime, "assign")), !_ && (e.scrollLeft && (C.rr_scrollLeft = cc11001100_hook("C.rr_scrollLeft", e.scrollLeft, "assign")), e.scrollTop && (C.rr_scrollTop = cc11001100_hook("C.rr_scrollTop", e.scrollTop, "assign"))), M) {
                  let {
                    width: t,
                    height: r
                  } = cc11001100_hook("", e.getBoundingClientRect(), "var-init");
                  C = cc11001100_hook("C", {
                    class: cc11001100_hook("class", C.class, "object-key-init"),
                    rr_width: cc11001100_hook("rr_width", `${t}px`, "object-key-init"),
                    rr_height: cc11001100_hook("rr_height", `${r}px`, "object-key-init")
                  }, "assign");
                }
                "iframe" !== I || y(C.src) || (M || em(e) || (C.rr_src = cc11001100_hook("C.rr_src", C.src, "assign")), delete C.src);
                try {
                  customElements.get(I) && (r = cc11001100_hook("r", !0, "assign"));
                } catch (e) {}
                return {
                  type: cc11001100_hook("type", g.Element, "object-key-init"),
                  tagName: cc11001100_hook("tagName", I, "object-key-init"),
                  attributes: cc11001100_hook("attributes", C, "object-key-init"),
                  childNodes: cc11001100_hook("childNodes", [], "object-key-init"),
                  isSVG: cc11001100_hook("isSVG", !!("svg" === e.tagName || e.ownerSVGElement) || void 0, "object-key-init"),
                  needBlock: cc11001100_hook("needBlock", M, "object-key-init"),
                  rootId: cc11001100_hook("rootId", S, "object-key-init"),
                  isCustom: cc11001100_hook("isCustom", r, "object-key-init")
                };
              }(e, {
                doc: cc11001100_hook("doc", r, "object-key-init"),
                blockClass: cc11001100_hook("blockClass", o, "object-key-init"),
                blockSelector: cc11001100_hook("blockSelector", a, "object-key-init"),
                unblockSelector: cc11001100_hook("unblockSelector", l, "object-key-init"),
                inlineStylesheet: cc11001100_hook("inlineStylesheet", m, "object-key-init"),
                maskAttributeFn: cc11001100_hook("maskAttributeFn", u, "object-key-init"),
                maskInputOptions: cc11001100_hook("maskInputOptions", y, "object-key-init"),
                maskInputFn: cc11001100_hook("maskInputFn", S, "object-key-init"),
                dataURLOptions: cc11001100_hook("dataURLOptions", v, "object-key-init"),
                inlineImages: cc11001100_hook("inlineImages", w, "object-key-init"),
                recordCanvas: cc11001100_hook("recordCanvas", b, "object-key-init"),
                keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", E, "object-key-init"),
                newlyAddedElement: cc11001100_hook("newlyAddedElement", k, "object-key-init"),
                rootId: cc11001100_hook("rootId", M, "object-key-init"),
                maskAllText: cc11001100_hook("maskAllText", c, "object-key-init"),
                maskTextClass: cc11001100_hook("maskTextClass", d, "object-key-init"),
                unmaskTextClass: cc11001100_hook("unmaskTextClass", h, "object-key-init"),
                maskTextSelector: cc11001100_hook("maskTextSelector", p, "object-key-init"),
                unmaskTextSelector: cc11001100_hook("unmaskTextSelector", f, "object-key-init")
              });
            case e.TEXT_NODE:
              return function (e, t) {
                let {
                    maskAllText: r,
                    maskTextClass: n,
                    unmaskTextClass: i,
                    maskTextSelector: s,
                    unmaskTextSelector: o,
                    maskTextFn: a,
                    maskInputOptions: l,
                    maskInputFn: c,
                    rootId: u
                  } = cc11001100_hook("", t, "var-init"),
                  d = cc11001100_hook("d", e.parentNode && e.parentNode.tagName, "var-init"),
                  h = cc11001100_hook("h", e.textContent, "var-init"),
                  p = cc11001100_hook("p", "STYLE" === d || void 0, "var-init"),
                  f = cc11001100_hook("f", "SCRIPT" === d || void 0, "var-init"),
                  m = cc11001100_hook("m", "TEXTAREA" === d || void 0, "var-init");
                if (p && h) {
                  try {
                    e.nextSibling || e.previousSibling || e.parentNode.sheet?.cssRules && (h = cc11001100_hook("h", ee(e.parentNode.sheet), "assign"));
                  } catch (t) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                  }
                  h = cc11001100_hook("h", eE(h, eT(t.doc)), "assign");
                }
                f && (h = cc11001100_hook("h", "SCRIPT_PLACEHOLDER", "assign"));
                let y = cc11001100_hook("y", eN(e, n, s, i, o, r), "var-init");
                if (p || f || m || !h || !y || (h = cc11001100_hook("h", a ? a(h, e.parentElement) : h.replace(/[\S]/g, "*"), "assign")), m && h && (l.textarea || y) && (h = cc11001100_hook("h", c ? c(h, e.parentNode) : h.replace(/[\S]/g, "*"), "assign")), "OPTION" === d && h) {
                  let t = cc11001100_hook("t", en({
                    type: cc11001100_hook("type", null, "object-key-init"),
                    tagName: cc11001100_hook("tagName", d, "object-key-init"),
                    maskInputOptions: cc11001100_hook("maskInputOptions", l, "object-key-init")
                  }), "var-init");
                  h = cc11001100_hook("h", ei({
                    isMasked: cc11001100_hook("isMasked", eN(e, n, s, i, o, t), "object-key-init"),
                    element: cc11001100_hook("element", e, "object-key-init"),
                    value: cc11001100_hook("value", h, "object-key-init"),
                    maskInputFn: cc11001100_hook("maskInputFn", c, "object-key-init")
                  }), "assign");
                }
                return {
                  type: cc11001100_hook("type", g.Text, "object-key-init"),
                  textContent: cc11001100_hook("textContent", h || "", "object-key-init"),
                  isStyle: cc11001100_hook("isStyle", p, "object-key-init"),
                  rootId: cc11001100_hook("rootId", u, "object-key-init")
                };
              }(e, {
                doc: cc11001100_hook("doc", r, "object-key-init"),
                maskAllText: cc11001100_hook("maskAllText", c, "object-key-init"),
                maskTextClass: cc11001100_hook("maskTextClass", d, "object-key-init"),
                unmaskTextClass: cc11001100_hook("unmaskTextClass", h, "object-key-init"),
                maskTextSelector: cc11001100_hook("maskTextSelector", p, "object-key-init"),
                unmaskTextSelector: cc11001100_hook("unmaskTextSelector", f, "object-key-init"),
                maskTextFn: cc11001100_hook("maskTextFn", _, "object-key-init"),
                maskInputOptions: cc11001100_hook("maskInputOptions", y, "object-key-init"),
                maskInputFn: cc11001100_hook("maskInputFn", S, "object-key-init"),
                rootId: cc11001100_hook("rootId", M, "object-key-init")
              });
            case e.CDATA_SECTION_NODE:
              return {
                type: cc11001100_hook("type", g.CDATA, "object-key-init"),
                textContent: cc11001100_hook("textContent", "", "object-key-init"),
                rootId: cc11001100_hook("rootId", M, "object-key-init")
              };
            case e.COMMENT_NODE:
              return {
                type: cc11001100_hook("type", g.Comment, "object-key-init"),
                textContent: cc11001100_hook("textContent", e.textContent || "", "object-key-init"),
                rootId: cc11001100_hook("rootId", M, "object-key-init")
              };
            default:
              return !1;
          }
        }(e, {
          doc: cc11001100_hook("doc", s, "object-key-init"),
          mirror: cc11001100_hook("mirror", o, "object-key-init"),
          blockClass: cc11001100_hook("blockClass", a, "object-key-init"),
          blockSelector: cc11001100_hook("blockSelector", l, "object-key-init"),
          maskAllText: cc11001100_hook("maskAllText", u, "object-key-init"),
          unblockSelector: cc11001100_hook("unblockSelector", c, "object-key-init"),
          maskTextClass: cc11001100_hook("maskTextClass", d, "object-key-init"),
          unmaskTextClass: cc11001100_hook("unmaskTextClass", h, "object-key-init"),
          maskTextSelector: cc11001100_hook("maskTextSelector", p, "object-key-init"),
          unmaskTextSelector: cc11001100_hook("unmaskTextSelector", f, "object-key-init"),
          inlineStylesheet: cc11001100_hook("inlineStylesheet", y, "object-key-init"),
          maskInputOptions: cc11001100_hook("maskInputOptions", _, "object-key-init"),
          maskAttributeFn: cc11001100_hook("maskAttributeFn", S, "object-key-init"),
          maskTextFn: cc11001100_hook("maskTextFn", v, "object-key-init"),
          maskInputFn: cc11001100_hook("maskInputFn", w, "object-key-init"),
          dataURLOptions: cc11001100_hook("dataURLOptions", E, "object-key-init"),
          inlineImages: cc11001100_hook("inlineImages", k, "object-key-init"),
          recordCanvas: cc11001100_hook("recordCanvas", M, "object-key-init"),
          keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", D, "object-key-init"),
          newlyAddedElement: cc11001100_hook("newlyAddedElement", O, "object-key-init")
        }), "var-init");
      if (!A) return console.warn(e, "not serialized"), null;
      r = cc11001100_hook("r", o.hasNode(e) ? o.getId(e) : !function (e, t) {
        if (t.comment && e.type === g.Comment) return !0;
        if (e.type === g.Element) {
          if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === eu(e.attributes.href)) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (eA(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === eA(e.attributes.name) || "icon" === eA(e.attributes.rel) || "apple-touch-icon" === eA(e.attributes.rel) || "shortcut icon" === eA(e.attributes.rel)))) return !0;
          if ("meta" === e.tagName) {
            if (t.headMetaDescKeywords && eA(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (eA(e.attributes.property).match(/^(og|twitter|fb):/) || eA(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === eA(e.attributes.name))) return !0;
            if (t.headMetaRobots && ("robots" === eA(e.attributes.name) || "googlebot" === eA(e.attributes.name) || "bingbot" === eA(e.attributes.name))) return !0;
            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;else if (t.headMetaAuthorship && ("author" === eA(e.attributes.name) || "generator" === eA(e.attributes.name) || "framework" === eA(e.attributes.name) || "publisher" === eA(e.attributes.name) || "progid" === eA(e.attributes.name) || eA(e.attributes.property).match(/^article:/) || eA(e.attributes.property).match(/^product:/))) return !0;else if (t.headMetaVerification && ("google-site-verification" === eA(e.attributes.name) || "yandex-verification" === eA(e.attributes.name) || "csrf-token" === eA(e.attributes.name) || "p:domain_verify" === eA(e.attributes.name) || "verify-v1" === eA(e.attributes.name) || "verification" === eA(e.attributes.name) || "shopify-checkout-api-token" === eA(e.attributes.name))) return !0;
          }
        }
        return !1;
      }(A, b) && (N || A.type !== g.Text || A.isStyle || A.textContent.replace(/^\s+|\s+$/gm, "").length) ? e_() : -2, "assign");
      let L = cc11001100_hook("L", Object.assign(A, {
        id: cc11001100_hook("id", r, "object-key-init")
      }), "var-init");
      if (o.add(e, L), -2 === r) return null;
      I && I(e);
      let P = cc11001100_hook("P", !m, "var-init");
      if (L.type === g.Element) {
        P = cc11001100_hook("P", P && !L.needBlock, "assign"), delete L.needBlock;
        let t = cc11001100_hook("t", e.shadowRoot, "var-init");
        t && Z(t) && (L.isShadowHost = cc11001100_hook("L.isShadowHost", !0, "assign"));
      }
      if ((L.type === g.Document || L.type === g.Element) && P) {
        b.headWhitespace && L.type === g.Element && "head" === L.tagName && (N = cc11001100_hook("N", !1, "assign"));
        let t = cc11001100_hook("t", {
          doc: cc11001100_hook("doc", s, "object-key-init"),
          mirror: cc11001100_hook("mirror", o, "object-key-init"),
          blockClass: cc11001100_hook("blockClass", a, "object-key-init"),
          blockSelector: cc11001100_hook("blockSelector", l, "object-key-init"),
          maskAllText: cc11001100_hook("maskAllText", u, "object-key-init"),
          unblockSelector: cc11001100_hook("unblockSelector", c, "object-key-init"),
          maskTextClass: cc11001100_hook("maskTextClass", d, "object-key-init"),
          unmaskTextClass: cc11001100_hook("unmaskTextClass", h, "object-key-init"),
          maskTextSelector: cc11001100_hook("maskTextSelector", p, "object-key-init"),
          unmaskTextSelector: cc11001100_hook("unmaskTextSelector", f, "object-key-init"),
          skipChild: cc11001100_hook("skipChild", m, "object-key-init"),
          inlineStylesheet: cc11001100_hook("inlineStylesheet", y, "object-key-init"),
          maskInputOptions: cc11001100_hook("maskInputOptions", _, "object-key-init"),
          maskAttributeFn: cc11001100_hook("maskAttributeFn", S, "object-key-init"),
          maskTextFn: cc11001100_hook("maskTextFn", v, "object-key-init"),
          maskInputFn: cc11001100_hook("maskInputFn", w, "object-key-init"),
          slimDOMOptions: cc11001100_hook("slimDOMOptions", b, "object-key-init"),
          dataURLOptions: cc11001100_hook("dataURLOptions", E, "object-key-init"),
          inlineImages: cc11001100_hook("inlineImages", k, "object-key-init"),
          recordCanvas: cc11001100_hook("recordCanvas", M, "object-key-init"),
          preserveWhiteSpace: cc11001100_hook("preserveWhiteSpace", N, "object-key-init"),
          onSerialize: cc11001100_hook("onSerialize", I, "object-key-init"),
          onIframeLoad: cc11001100_hook("onIframeLoad", C, "object-key-init"),
          iframeLoadTimeout: cc11001100_hook("iframeLoadTimeout", T, "object-key-init"),
          onStylesheetLoad: cc11001100_hook("onStylesheetLoad", R, "object-key-init"),
          stylesheetLoadTimeout: cc11001100_hook("stylesheetLoadTimeout", x, "object-key-init"),
          keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", D, "object-key-init")
        }, "var-init");
        for (let r of Array.from(e.childNodes)) {
          let e = cc11001100_hook("e", eL(r, t), "var-init");
          e && L.childNodes.push(e);
        }
        if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot) for (let r of Array.from(e.shadowRoot.childNodes)) {
          let n = cc11001100_hook("n", eL(r, t), "var-init");
          n && (Z(e.shadowRoot) && (n.isShadow = cc11001100_hook("n.isShadow", !0, "assign")), L.childNodes.push(n));
        }
      }
      return e.parentNode && Q(e.parentNode) && Z(e.parentNode) && (L.isShadow = cc11001100_hook("L.isShadow", !0, "assign")), L.type === g.Element && "iframe" === L.tagName && function (e, t, r) {
        let n;
        let i = cc11001100_hook("i", e.contentWindow, "var-init");
        if (!i) return;
        let s = cc11001100_hook("s", !1, "var-init");
        try {
          n = cc11001100_hook("n", i.document.readyState, "assign");
        } catch (e) {
          return;
        }
        if ("complete" !== n) {
          let n = cc11001100_hook("n", ep(() => {
            s || (t(), s = cc11001100_hook("s", !0, "assign"));
          }, r), "var-init");
          e.addEventListener("load", () => {
            ef(n), s = cc11001100_hook("s", !0, "assign"), t();
          });
          return;
        }
        let o = cc11001100_hook("o", "about:blank", "var-init");
        if (i.location.href !== o || e.src === o || "" === e.src) return ep(t, 0), e.addEventListener("load", t);
        e.addEventListener("load", t);
      }(e, () => {
        let t = cc11001100_hook("t", em(e), "var-init");
        if (t && C) {
          let r = cc11001100_hook("r", eL(t, {
            doc: cc11001100_hook("doc", t, "object-key-init"),
            mirror: cc11001100_hook("mirror", o, "object-key-init"),
            blockClass: cc11001100_hook("blockClass", a, "object-key-init"),
            blockSelector: cc11001100_hook("blockSelector", l, "object-key-init"),
            unblockSelector: cc11001100_hook("unblockSelector", c, "object-key-init"),
            maskAllText: cc11001100_hook("maskAllText", u, "object-key-init"),
            maskTextClass: cc11001100_hook("maskTextClass", d, "object-key-init"),
            unmaskTextClass: cc11001100_hook("unmaskTextClass", h, "object-key-init"),
            maskTextSelector: cc11001100_hook("maskTextSelector", p, "object-key-init"),
            unmaskTextSelector: cc11001100_hook("unmaskTextSelector", f, "object-key-init"),
            skipChild: cc11001100_hook("skipChild", !1, "object-key-init"),
            inlineStylesheet: cc11001100_hook("inlineStylesheet", y, "object-key-init"),
            maskInputOptions: cc11001100_hook("maskInputOptions", _, "object-key-init"),
            maskAttributeFn: cc11001100_hook("maskAttributeFn", S, "object-key-init"),
            maskTextFn: cc11001100_hook("maskTextFn", v, "object-key-init"),
            maskInputFn: cc11001100_hook("maskInputFn", w, "object-key-init"),
            slimDOMOptions: cc11001100_hook("slimDOMOptions", b, "object-key-init"),
            dataURLOptions: cc11001100_hook("dataURLOptions", E, "object-key-init"),
            inlineImages: cc11001100_hook("inlineImages", k, "object-key-init"),
            recordCanvas: cc11001100_hook("recordCanvas", M, "object-key-init"),
            preserveWhiteSpace: cc11001100_hook("preserveWhiteSpace", N, "object-key-init"),
            onSerialize: cc11001100_hook("onSerialize", I, "object-key-init"),
            onIframeLoad: cc11001100_hook("onIframeLoad", C, "object-key-init"),
            iframeLoadTimeout: cc11001100_hook("iframeLoadTimeout", T, "object-key-init"),
            onStylesheetLoad: cc11001100_hook("onStylesheetLoad", R, "object-key-init"),
            stylesheetLoadTimeout: cc11001100_hook("stylesheetLoadTimeout", x, "object-key-init"),
            keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", D, "object-key-init")
          }), "var-init");
          r && C(e, r);
        }
      }, T), L.type === g.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === eu(L.attributes.href)) && function (e, t, r) {
        let n,
          i = cc11001100_hook("i", !1, "var-init");
        try {
          n = cc11001100_hook("n", e.sheet, "assign");
        } catch (e) {
          return;
        }
        if (n) return;
        let s = cc11001100_hook("s", ep(() => {
          i || (t(), i = cc11001100_hook("i", !0, "assign"));
        }, r), "var-init");
        e.addEventListener("load", () => {
          ef(s), i = cc11001100_hook("i", !0, "assign"), t();
        });
      }(e, () => {
        if (R) {
          let t = cc11001100_hook("t", eL(e, {
            doc: cc11001100_hook("doc", s, "object-key-init"),
            mirror: cc11001100_hook("mirror", o, "object-key-init"),
            blockClass: cc11001100_hook("blockClass", a, "object-key-init"),
            blockSelector: cc11001100_hook("blockSelector", l, "object-key-init"),
            unblockSelector: cc11001100_hook("unblockSelector", c, "object-key-init"),
            maskAllText: cc11001100_hook("maskAllText", u, "object-key-init"),
            maskTextClass: cc11001100_hook("maskTextClass", d, "object-key-init"),
            unmaskTextClass: cc11001100_hook("unmaskTextClass", h, "object-key-init"),
            maskTextSelector: cc11001100_hook("maskTextSelector", p, "object-key-init"),
            unmaskTextSelector: cc11001100_hook("unmaskTextSelector", f, "object-key-init"),
            skipChild: cc11001100_hook("skipChild", !1, "object-key-init"),
            inlineStylesheet: cc11001100_hook("inlineStylesheet", y, "object-key-init"),
            maskInputOptions: cc11001100_hook("maskInputOptions", _, "object-key-init"),
            maskAttributeFn: cc11001100_hook("maskAttributeFn", S, "object-key-init"),
            maskTextFn: cc11001100_hook("maskTextFn", v, "object-key-init"),
            maskInputFn: cc11001100_hook("maskInputFn", w, "object-key-init"),
            slimDOMOptions: cc11001100_hook("slimDOMOptions", b, "object-key-init"),
            dataURLOptions: cc11001100_hook("dataURLOptions", E, "object-key-init"),
            inlineImages: cc11001100_hook("inlineImages", k, "object-key-init"),
            recordCanvas: cc11001100_hook("recordCanvas", M, "object-key-init"),
            preserveWhiteSpace: cc11001100_hook("preserveWhiteSpace", N, "object-key-init"),
            onSerialize: cc11001100_hook("onSerialize", I, "object-key-init"),
            onIframeLoad: cc11001100_hook("onIframeLoad", C, "object-key-init"),
            iframeLoadTimeout: cc11001100_hook("iframeLoadTimeout", T, "object-key-init"),
            onStylesheetLoad: cc11001100_hook("onStylesheetLoad", R, "object-key-init"),
            stylesheetLoadTimeout: cc11001100_hook("stylesheetLoadTimeout", x, "object-key-init"),
            keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", D, "object-key-init")
          }), "var-init");
          t && R(e, t);
        }
      }, x), L;
    }
    function eP(e, t, r = document) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let n = cc11001100_hook("n", {
        capture: cc11001100_hook("capture", !0, "object-key-init"),
        passive: cc11001100_hook("passive", !0, "object-key-init")
      }, "var-init");
      return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
    }
    let eF = cc11001100_hook("eF", "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.", "var-init"),
      eU = cc11001100_hook("eU", {
        map: {},
        getId: cc11001100_hook("getId", () => (console.error(eF), -1), "object-key-init"),
        getNode: cc11001100_hook("getNode", () => (console.error(eF), null), "object-key-init"),
        removeNodeFromMap() {
          console.error(eF);
        },
        has: () => (console.error(eF), !1),
        reset() {
          console.error(eF);
        }
      }, "var-init");
    function eB(e, t, r = {}) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let n = cc11001100_hook("n", null, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      return function (...s) {
        let o = cc11001100_hook("o", Date.now(), "var-init");
        i || !1 !== r.leading || (i = cc11001100_hook("i", o, "assign"));
        let a = cc11001100_hook("a", t - (o - i), "var-init"),
          l = cc11001100_hook("l", this, "var-init");
        a <= 0 || a > t ? (n && (function (...e) {
          e2("clearTimeout")(...e);
        }(n), n = cc11001100_hook("n", null, "assign")), i = cc11001100_hook("i", o, "assign"), e.apply(l, s)) : n || !1 === r.trailing || (n = cc11001100_hook("n", e3(() => {
          i = cc11001100_hook("i", !1 === r.leading ? 0 : Date.now(), "assign"), n = cc11001100_hook("n", null, "assign"), e.apply(l, s);
        }, a), "assign"));
      };
    }
    function eW(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      try {
        if (!(t in e)) return () => {};
        let n = cc11001100_hook("n", e[t], "var-init"),
          i = cc11001100_hook("i", r(n), "var-init");
        return "function" == typeof i && (i.prototype = cc11001100_hook("i.prototype", i.prototype || {}, "assign"), Object.defineProperties(i, {
          __rrweb_original__: {
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            value: cc11001100_hook("value", n, "object-key-init")
          }
        })), e[t] = cc11001100_hook("e[t]", i, "assign"), () => {
          e[t] = cc11001100_hook("e[t]", n, "assign");
        };
      } catch {
        return () => {};
      }
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (eU = cc11001100_hook("eU", new Proxy(eU, {
      get: cc11001100_hook("get", (e, t, r) => ("map" === t && console.error(eF), Reflect.get(e, t, r)), "object-key-init")
    }), "assign"));
    let ez = cc11001100_hook("ez", Date.now, "var-init");
    function ej(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.document, "var-init");
      return {
        left: cc11001100_hook("left", t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : t?.documentElement.scrollLeft || t?.body?.parentElement?.scrollLeft || t?.body?.scrollLeft || 0, "object-key-init"),
        top: cc11001100_hook("top", t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : t?.documentElement.scrollTop || t?.body?.parentElement?.scrollTop || t?.body?.scrollTop || 0, "object-key-init")
      };
    }
    function e$() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
    }
    function eH() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
    }
    function eq(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (!e) return null;
      let t = cc11001100_hook("t", e.nodeType === e.ELEMENT_NODE ? e : e.parentElement, "var-init");
      return t;
    }
    function eV(e, t, r, n, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      if (!e) return !1;
      let s = cc11001100_hook("s", eq(e), "var-init");
      if (!s) return !1;
      let o = cc11001100_hook("o", eO(t, r), "var-init");
      if (!i) {
        let e = cc11001100_hook("e", n && s.matches(n), "var-init");
        return o(s) && !e;
      }
      let a = cc11001100_hook("a", eD(s, o), "var-init"),
        l = cc11001100_hook("l", -1, "var-init");
      return !(a < 0) && (n && (l = cc11001100_hook("l", eD(s, eO(null, n)), "assign")), a > -1 && l < 0 || a < l);
    }
    function eK(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return -2 === t.getId(e);
    }
    function eG(e) {
      cc11001100_hook("e", e, "function-parameter");
      return !!e.changedTouches;
    }
    function eJ(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return !!("IFRAME" === e.nodeName && t.getMeta(e));
    }
    function eY(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e));
    }
    function eX(e) {
      cc11001100_hook("e", e, "function-parameter");
      return !!e?.shadowRoot;
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (ez = cc11001100_hook("ez", () => new Date().getTime(), "assign"));
    class eQ {
      constructor() {
        this.id = cc11001100_hook("this.id", 1, "assign"), this.styleIDMap = cc11001100_hook("this.styleIDMap", new WeakMap(), "assign"), this.idStyleMap = cc11001100_hook("this.idStyleMap", new Map(), "assign");
      }
      getId(e) {
        return this.styleIDMap.get(e) ?? -1;
      }
      has(e) {
        return this.styleIDMap.has(e);
      }
      add(e, t) {
        let r;
        return this.has(e) ? this.getId(e) : (r = cc11001100_hook("r", void 0 === t ? this.id++ : t, "assign"), this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r);
      }
      getStyle(e) {
        return this.idStyleMap.get(e) || null;
      }
      reset() {
        this.styleIDMap = cc11001100_hook("this.styleIDMap", new WeakMap(), "assign"), this.idStyleMap = cc11001100_hook("this.idStyleMap", new Map(), "assign"), this.id = cc11001100_hook("this.id", 1, "assign");
      }
      generateId() {
        return this.id++;
      }
    }
    function eZ(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", null, "var-init");
      return e.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = cc11001100_hook("t", e.getRootNode().host, "assign")), t;
    }
    function e0(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.ownerDocument, "var-init");
      return !!t && (t.contains(e) || function (e) {
        let t = cc11001100_hook("t", e.ownerDocument, "var-init");
        if (!t) return !1;
        let r = cc11001100_hook("r", function (e) {
          let t,
            r = cc11001100_hook("r", e, "var-init");
          for (; t = cc11001100_hook("t", eZ(r), "assign");) r = cc11001100_hook("r", t, "assign");
          return r;
        }(e), "var-init");
        return t.contains(r);
      }(e));
    }
    let e1 = cc11001100_hook("e1", {}, "var-init");
    function e2(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e1[e], "var-init");
      if (t) return t;
      let r = cc11001100_hook("r", window.document, "var-init"),
        n = cc11001100_hook("n", window[e], "var-init");
      if (r && "function" == typeof r.createElement) try {
        let t = cc11001100_hook("t", r.createElement("iframe"), "var-init");
        t.hidden = cc11001100_hook("t.hidden", !0, "assign"), r.head.appendChild(t);
        let i = cc11001100_hook("i", t.contentWindow, "var-init");
        i && i[e] && (n = cc11001100_hook("n", i[e], "assign")), r.head.removeChild(t);
      } catch (e) {}
      return e1[e] = cc11001100_hook("e1[e]", n.bind(window), "assign");
    }
    function e3(...e) {
      return e2("setTimeout")(...e);
    }
    var e5 = cc11001100_hook("e5", ((u = cc11001100_hook("u", e5 || {}, "assign"))[u.DomContentLoaded = cc11001100_hook("u.DomContentLoaded", 0, "assign")] = cc11001100_hook("(u = e5 || {})[u.DomContentLoaded = 0]", "DomContentLoaded", "assign"), u[u.Load = cc11001100_hook("u.Load", 1, "assign")] = cc11001100_hook("u[u.Load = 1]", "Load", "assign"), u[u.FullSnapshot = cc11001100_hook("u.FullSnapshot", 2, "assign")] = cc11001100_hook("u[u.FullSnapshot = 2]", "FullSnapshot", "assign"), u[u.IncrementalSnapshot = cc11001100_hook("u.IncrementalSnapshot", 3, "assign")] = cc11001100_hook("u[u.IncrementalSnapshot = 3]", "IncrementalSnapshot", "assign"), u[u.Meta = cc11001100_hook("u.Meta", 4, "assign")] = cc11001100_hook("u[u.Meta = 4]", "Meta", "assign"), u[u.Custom = cc11001100_hook("u.Custom", 5, "assign")] = cc11001100_hook("u[u.Custom = 5]", "Custom", "assign"), u[u.Plugin = cc11001100_hook("u.Plugin", 6, "assign")] = cc11001100_hook("u[u.Plugin = 6]", "Plugin", "assign"), u), "var-init"),
      e8 = cc11001100_hook("e8", ((d = cc11001100_hook("d", e8 || {}, "assign"))[d.Mutation = cc11001100_hook("d.Mutation", 0, "assign")] = cc11001100_hook("(d = e8 || {})[d.Mutation = 0]", "Mutation", "assign"), d[d.MouseMove = cc11001100_hook("d.MouseMove", 1, "assign")] = cc11001100_hook("d[d.MouseMove = 1]", "MouseMove", "assign"), d[d.MouseInteraction = cc11001100_hook("d.MouseInteraction", 2, "assign")] = cc11001100_hook("d[d.MouseInteraction = 2]", "MouseInteraction", "assign"), d[d.Scroll = cc11001100_hook("d.Scroll", 3, "assign")] = cc11001100_hook("d[d.Scroll = 3]", "Scroll", "assign"), d[d.ViewportResize = cc11001100_hook("d.ViewportResize", 4, "assign")] = cc11001100_hook("d[d.ViewportResize = 4]", "ViewportResize", "assign"), d[d.Input = cc11001100_hook("d.Input", 5, "assign")] = cc11001100_hook("d[d.Input = 5]", "Input", "assign"), d[d.TouchMove = cc11001100_hook("d.TouchMove", 6, "assign")] = cc11001100_hook("d[d.TouchMove = 6]", "TouchMove", "assign"), d[d.MediaInteraction = cc11001100_hook("d.MediaInteraction", 7, "assign")] = cc11001100_hook("d[d.MediaInteraction = 7]", "MediaInteraction", "assign"), d[d.StyleSheetRule = cc11001100_hook("d.StyleSheetRule", 8, "assign")] = cc11001100_hook("d[d.StyleSheetRule = 8]", "StyleSheetRule", "assign"), d[d.CanvasMutation = cc11001100_hook("d.CanvasMutation", 9, "assign")] = cc11001100_hook("d[d.CanvasMutation = 9]", "CanvasMutation", "assign"), d[d.Font = cc11001100_hook("d.Font", 10, "assign")] = cc11001100_hook("d[d.Font = 10]", "Font", "assign"), d[d.Log = cc11001100_hook("d.Log", 11, "assign")] = cc11001100_hook("d[d.Log = 11]", "Log", "assign"), d[d.Drag = cc11001100_hook("d.Drag", 12, "assign")] = cc11001100_hook("d[d.Drag = 12]", "Drag", "assign"), d[d.StyleDeclaration = cc11001100_hook("d.StyleDeclaration", 13, "assign")] = cc11001100_hook("d[d.StyleDeclaration = 13]", "StyleDeclaration", "assign"), d[d.Selection = cc11001100_hook("d.Selection", 14, "assign")] = cc11001100_hook("d[d.Selection = 14]", "Selection", "assign"), d[d.AdoptedStyleSheet = cc11001100_hook("d.AdoptedStyleSheet", 15, "assign")] = cc11001100_hook("d[d.AdoptedStyleSheet = 15]", "AdoptedStyleSheet", "assign"), d[d.CustomElement = cc11001100_hook("d.CustomElement", 16, "assign")] = cc11001100_hook("d[d.CustomElement = 16]", "CustomElement", "assign"), d), "var-init"),
      e6 = cc11001100_hook("e6", ((h = cc11001100_hook("h", e6 || {}, "assign"))[h.MouseUp = cc11001100_hook("h.MouseUp", 0, "assign")] = cc11001100_hook("(h = e6 || {})[h.MouseUp = 0]", "MouseUp", "assign"), h[h.MouseDown = cc11001100_hook("h.MouseDown", 1, "assign")] = cc11001100_hook("h[h.MouseDown = 1]", "MouseDown", "assign"), h[h.Click = cc11001100_hook("h.Click", 2, "assign")] = cc11001100_hook("h[h.Click = 2]", "Click", "assign"), h[h.ContextMenu = cc11001100_hook("h.ContextMenu", 3, "assign")] = cc11001100_hook("h[h.ContextMenu = 3]", "ContextMenu", "assign"), h[h.DblClick = cc11001100_hook("h.DblClick", 4, "assign")] = cc11001100_hook("h[h.DblClick = 4]", "DblClick", "assign"), h[h.Focus = cc11001100_hook("h.Focus", 5, "assign")] = cc11001100_hook("h[h.Focus = 5]", "Focus", "assign"), h[h.Blur = cc11001100_hook("h.Blur", 6, "assign")] = cc11001100_hook("h[h.Blur = 6]", "Blur", "assign"), h[h.TouchStart = cc11001100_hook("h.TouchStart", 7, "assign")] = cc11001100_hook("h[h.TouchStart = 7]", "TouchStart", "assign"), h[h.TouchMove_Departed = cc11001100_hook("h.TouchMove_Departed", 8, "assign")] = cc11001100_hook("h[h.TouchMove_Departed = 8]", "TouchMove_Departed", "assign"), h[h.TouchEnd = cc11001100_hook("h.TouchEnd", 9, "assign")] = cc11001100_hook("h[h.TouchEnd = 9]", "TouchEnd", "assign"), h[h.TouchCancel = cc11001100_hook("h.TouchCancel", 10, "assign")] = cc11001100_hook("h[h.TouchCancel = 10]", "TouchCancel", "assign"), h), "var-init"),
      e4 = cc11001100_hook("e4", ((p = cc11001100_hook("p", e4 || {}, "assign"))[p.Mouse = cc11001100_hook("p.Mouse", 0, "assign")] = cc11001100_hook("(p = e4 || {})[p.Mouse = 0]", "Mouse", "assign"), p[p.Pen = cc11001100_hook("p.Pen", 1, "assign")] = cc11001100_hook("p[p.Pen = 1]", "Pen", "assign"), p[p.Touch = cc11001100_hook("p.Touch", 2, "assign")] = cc11001100_hook("p[p.Touch = 2]", "Touch", "assign"), p), "var-init");
    function e7(e) {
      cc11001100_hook("e", e, "function-parameter");
      try {
        return e.contentDocument;
      } catch (e) {}
    }
    (f = cc11001100_hook("f", _ || (_ = cc11001100_hook("_", {}, "assign")), "assign"))[f.Document = cc11001100_hook("f.Document", 0, "assign")] = cc11001100_hook("(f = _ || (_ = {}))[f.Document = 0]", "Document", "assign"), f[f.DocumentType = cc11001100_hook("f.DocumentType", 1, "assign")] = cc11001100_hook("f[f.DocumentType = 1]", "DocumentType", "assign"), f[f.Element = cc11001100_hook("f.Element", 2, "assign")] = cc11001100_hook("f[f.Element = 2]", "Element", "assign"), f[f.Text = cc11001100_hook("f.Text", 3, "assign")] = cc11001100_hook("f[f.Text = 3]", "Text", "assign"), f[f.CDATA = cc11001100_hook("f.CDATA", 4, "assign")] = cc11001100_hook("f[f.CDATA = 4]", "CDATA", "assign"), f[f.Comment = cc11001100_hook("f.Comment", 5, "assign")] = cc11001100_hook("f[f.Comment = 5]", "Comment", "assign"), (m = cc11001100_hook("m", S || (S = cc11001100_hook("S", {}, "assign")), "assign"))[m.PLACEHOLDER = cc11001100_hook("m.PLACEHOLDER", 0, "assign")] = cc11001100_hook("(m = S || (S = {}))[m.PLACEHOLDER = 0]", "PLACEHOLDER", "assign"), m[m.ELEMENT_NODE = cc11001100_hook("m.ELEMENT_NODE", 1, "assign")] = cc11001100_hook("m[m.ELEMENT_NODE = 1]", "ELEMENT_NODE", "assign"), m[m.ATTRIBUTE_NODE = cc11001100_hook("m.ATTRIBUTE_NODE", 2, "assign")] = cc11001100_hook("m[m.ATTRIBUTE_NODE = 2]", "ATTRIBUTE_NODE", "assign"), m[m.TEXT_NODE = cc11001100_hook("m.TEXT_NODE", 3, "assign")] = cc11001100_hook("m[m.TEXT_NODE = 3]", "TEXT_NODE", "assign"), m[m.CDATA_SECTION_NODE = cc11001100_hook("m.CDATA_SECTION_NODE", 4, "assign")] = cc11001100_hook("m[m.CDATA_SECTION_NODE = 4]", "CDATA_SECTION_NODE", "assign"), m[m.ENTITY_REFERENCE_NODE = cc11001100_hook("m.ENTITY_REFERENCE_NODE", 5, "assign")] = cc11001100_hook("m[m.ENTITY_REFERENCE_NODE = 5]", "ENTITY_REFERENCE_NODE", "assign"), m[m.ENTITY_NODE = cc11001100_hook("m.ENTITY_NODE", 6, "assign")] = cc11001100_hook("m[m.ENTITY_NODE = 6]", "ENTITY_NODE", "assign"), m[m.PROCESSING_INSTRUCTION_NODE = cc11001100_hook("m.PROCESSING_INSTRUCTION_NODE", 7, "assign")] = cc11001100_hook("m[m.PROCESSING_INSTRUCTION_NODE = 7]", "PROCESSING_INSTRUCTION_NODE", "assign"), m[m.COMMENT_NODE = cc11001100_hook("m.COMMENT_NODE", 8, "assign")] = cc11001100_hook("m[m.COMMENT_NODE = 8]", "COMMENT_NODE", "assign"), m[m.DOCUMENT_NODE = cc11001100_hook("m.DOCUMENT_NODE", 9, "assign")] = cc11001100_hook("m[m.DOCUMENT_NODE = 9]", "DOCUMENT_NODE", "assign"), m[m.DOCUMENT_TYPE_NODE = cc11001100_hook("m.DOCUMENT_TYPE_NODE", 10, "assign")] = cc11001100_hook("m[m.DOCUMENT_TYPE_NODE = 10]", "DOCUMENT_TYPE_NODE", "assign"), m[m.DOCUMENT_FRAGMENT_NODE = cc11001100_hook("m.DOCUMENT_FRAGMENT_NODE", 11, "assign")] = cc11001100_hook("m[m.DOCUMENT_FRAGMENT_NODE = 11]", "DOCUMENT_FRAGMENT_NODE", "assign");
    class e9 {
      constructor() {
        this.length = cc11001100_hook("this.length", 0, "assign"), this.head = cc11001100_hook("this.head", null, "assign"), this.tail = cc11001100_hook("this.tail", null, "assign");
      }
      get(e) {
        if (e >= this.length) throw Error("Position outside of list range");
        let t = cc11001100_hook("t", this.head, "var-init");
        for (let r = cc11001100_hook("r", 0, "var-init"); r < e; r++) t = cc11001100_hook("t", t?.next || null, "assign");
        return t;
      }
      addNode(e) {
        let t = cc11001100_hook("t", {
          value: cc11001100_hook("value", e, "object-key-init"),
          previous: cc11001100_hook("previous", null, "object-key-init"),
          next: cc11001100_hook("next", null, "object-key-init")
        }, "var-init");
        if (e.__ln = cc11001100_hook("e.__ln", t, "assign"), e.previousSibling && "__ln" in e.previousSibling) {
          let r = cc11001100_hook("r", e.previousSibling.__ln.next, "var-init");
          t.next = cc11001100_hook("t.next", r, "assign"), t.previous = cc11001100_hook("t.previous", e.previousSibling.__ln, "assign"), e.previousSibling.__ln.next = cc11001100_hook("e.previousSibling.__ln.next", t, "assign"), r && (r.previous = cc11001100_hook("r.previous", t, "assign"));
        } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
          let r = cc11001100_hook("r", e.nextSibling.__ln.previous, "var-init");
          t.previous = cc11001100_hook("t.previous", r, "assign"), t.next = cc11001100_hook("t.next", e.nextSibling.__ln, "assign"), e.nextSibling.__ln.previous = cc11001100_hook("e.nextSibling.__ln.previous", t, "assign"), r && (r.next = cc11001100_hook("r.next", t, "assign"));
        } else this.head && (this.head.previous = cc11001100_hook("this.head.previous", t, "assign")), t.next = cc11001100_hook("t.next", this.head, "assign"), this.head = cc11001100_hook("this.head", t, "assign");
        null === t.next && (this.tail = cc11001100_hook("this.tail", t, "assign")), this.length++;
      }
      removeNode(e) {
        let t = cc11001100_hook("t", e.__ln, "var-init");
        this.head && (t.previous ? (t.previous.next = cc11001100_hook("t.previous.next", t.next, "assign"), t.next ? t.next.previous = cc11001100_hook("t.next.previous", t.previous, "assign") : this.tail = cc11001100_hook("this.tail", t.previous, "assign")) : (this.head = cc11001100_hook("this.head", t.next, "assign"), this.head ? this.head.previous = cc11001100_hook("this.head.previous", null, "assign") : this.tail = cc11001100_hook("this.tail", null, "assign")), e.__ln && delete e.__ln, this.length--);
      }
    }
    let te = cc11001100_hook("te", (e, t) => `${e}@${t}`, "var-init");
    class tt {
      constructor() {
        this.frozen = cc11001100_hook("this.frozen", !1, "assign"), this.locked = cc11001100_hook("this.locked", !1, "assign"), this.texts = cc11001100_hook("this.texts", [], "assign"), this.attributes = cc11001100_hook("this.attributes", [], "assign"), this.attributeMap = cc11001100_hook("this.attributeMap", new WeakMap(), "assign"), this.removes = cc11001100_hook("this.removes", [], "assign"), this.mapRemoves = cc11001100_hook("this.mapRemoves", [], "assign"), this.movedMap = cc11001100_hook("this.movedMap", {}, "assign"), this.addedSet = cc11001100_hook("this.addedSet", new Set(), "assign"), this.movedSet = cc11001100_hook("this.movedSet", new Set(), "assign"), this.droppedSet = cc11001100_hook("this.droppedSet", new Set(), "assign"), this.processMutations = cc11001100_hook("this.processMutations", e => {
          e.forEach(this.processMutation), this.emit();
        }, "assign"), this.emit = cc11001100_hook("this.emit", () => {
          if (this.frozen || this.locked) return;
          let e = cc11001100_hook("e", [], "var-init"),
            t = cc11001100_hook("t", new Set(), "var-init"),
            r = cc11001100_hook("r", new e9(), "var-init"),
            n = cc11001100_hook("n", e => {
              let t = cc11001100_hook("t", e, "var-init"),
                r = cc11001100_hook("r", -2, "var-init");
              for (; -2 === r;) r = cc11001100_hook("r", (t = cc11001100_hook("t", t && t.nextSibling, "assign")) && this.mirror.getId(t), "assign");
              return r;
            }, "var-init"),
            i = cc11001100_hook("i", i => {
              if (!i.parentNode || !e0(i)) return;
              let s = cc11001100_hook("s", Q(i.parentNode) ? this.mirror.getId(eZ(i)) : this.mirror.getId(i.parentNode), "var-init"),
                o = cc11001100_hook("o", n(i), "var-init");
              if (-1 === s || -1 === o) return r.addNode(i);
              let a = cc11001100_hook("a", eL(i, {
                doc: cc11001100_hook("doc", this.doc, "object-key-init"),
                mirror: cc11001100_hook("mirror", this.mirror, "object-key-init"),
                blockClass: cc11001100_hook("blockClass", this.blockClass, "object-key-init"),
                blockSelector: cc11001100_hook("blockSelector", this.blockSelector, "object-key-init"),
                maskAllText: cc11001100_hook("maskAllText", this.maskAllText, "object-key-init"),
                unblockSelector: cc11001100_hook("unblockSelector", this.unblockSelector, "object-key-init"),
                maskTextClass: cc11001100_hook("maskTextClass", this.maskTextClass, "object-key-init"),
                unmaskTextClass: cc11001100_hook("unmaskTextClass", this.unmaskTextClass, "object-key-init"),
                maskTextSelector: cc11001100_hook("maskTextSelector", this.maskTextSelector, "object-key-init"),
                unmaskTextSelector: cc11001100_hook("unmaskTextSelector", this.unmaskTextSelector, "object-key-init"),
                skipChild: cc11001100_hook("skipChild", !0, "object-key-init"),
                newlyAddedElement: cc11001100_hook("newlyAddedElement", !0, "object-key-init"),
                inlineStylesheet: cc11001100_hook("inlineStylesheet", this.inlineStylesheet, "object-key-init"),
                maskInputOptions: cc11001100_hook("maskInputOptions", this.maskInputOptions, "object-key-init"),
                maskAttributeFn: cc11001100_hook("maskAttributeFn", this.maskAttributeFn, "object-key-init"),
                maskTextFn: cc11001100_hook("maskTextFn", this.maskTextFn, "object-key-init"),
                maskInputFn: cc11001100_hook("maskInputFn", this.maskInputFn, "object-key-init"),
                slimDOMOptions: cc11001100_hook("slimDOMOptions", this.slimDOMOptions, "object-key-init"),
                dataURLOptions: cc11001100_hook("dataURLOptions", this.dataURLOptions, "object-key-init"),
                recordCanvas: cc11001100_hook("recordCanvas", this.recordCanvas, "object-key-init"),
                inlineImages: cc11001100_hook("inlineImages", this.inlineImages, "object-key-init"),
                onSerialize: cc11001100_hook("onSerialize", e => {
                  eJ(e, this.mirror) && !eV(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), eY(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), eX(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc);
                }, "object-key-init"),
                onIframeLoad: cc11001100_hook("onIframeLoad", (e, t) => {
                  eV(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e));
                }, "object-key-init"),
                onStylesheetLoad: cc11001100_hook("onStylesheetLoad", (e, t) => {
                  this.stylesheetManager.attachLinkElement(e, t);
                }, "object-key-init")
              }), "var-init");
              a && (e.push({
                parentId: cc11001100_hook("parentId", s, "object-key-init"),
                nextId: cc11001100_hook("nextId", o, "object-key-init"),
                node: cc11001100_hook("node", a, "object-key-init")
              }), t.add(a.id));
            }, "var-init");
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (let e of this.movedSet) (!tn(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
          for (let e of this.addedSet) ti(this.droppedSet, e) || tn(this.removes, e, this.mirror) ? ti(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
          let s = cc11001100_hook("s", null, "var-init");
          for (; r.length;) {
            let e = cc11001100_hook("e", null, "var-init");
            if (s) {
              let t = cc11001100_hook("t", this.mirror.getId(s.value.parentNode), "var-init"),
                r = cc11001100_hook("r", n(s.value), "var-init");
              -1 !== t && -1 !== r && (e = cc11001100_hook("e", s, "assign"));
            }
            if (!e) {
              let t = cc11001100_hook("t", r.tail, "var-init");
              for (; t;) {
                let r = cc11001100_hook("r", t, "var-init");
                if (t = cc11001100_hook("t", t.previous, "assign"), r) {
                  let t = cc11001100_hook("t", this.mirror.getId(r.value.parentNode), "var-init"),
                    i = cc11001100_hook("i", n(r.value), "var-init");
                  if (-1 === i) continue;
                  if (-1 !== t) {
                    e = cc11001100_hook("e", r, "assign");
                    break;
                  }
                  {
                    let t = cc11001100_hook("t", r.value, "var-init");
                    if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      let n = cc11001100_hook("n", t.parentNode.host, "var-init"),
                        i = cc11001100_hook("i", this.mirror.getId(n), "var-init");
                      if (-1 !== i) {
                        e = cc11001100_hook("e", r, "assign");
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (!e) {
              for (; r.head;) r.removeNode(r.head.value);
              break;
            }
            s = cc11001100_hook("s", e.previous, "assign"), r.removeNode(e.value), i(e.value);
          }
          let o = cc11001100_hook("o", {
            texts: cc11001100_hook("texts", this.texts.map(e => ({
              id: cc11001100_hook("id", this.mirror.getId(e.node), "object-key-init"),
              value: cc11001100_hook("value", e.value, "object-key-init")
            })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)), "object-key-init"),
            attributes: cc11001100_hook("attributes", this.attributes.map(e => {
              let {
                attributes: t
              } = cc11001100_hook("", e, "var-init");
              if ("string" == typeof t.style) {
                let r = cc11001100_hook("r", JSON.stringify(e.styleDiff), "var-init"),
                  n = cc11001100_hook("n", JSON.stringify(e._unchangedStyles), "var-init");
                r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = cc11001100_hook("t.style", e.styleDiff, "assign"));
              }
              return {
                id: cc11001100_hook("id", this.mirror.getId(e.node), "object-key-init"),
                attributes: cc11001100_hook("attributes", t, "object-key-init")
              };
            }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)), "object-key-init"),
            removes: cc11001100_hook("removes", this.removes, "object-key-init"),
            adds: cc11001100_hook("adds", e, "object-key-init")
          }, "var-init");
          (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = cc11001100_hook("this.texts", [], "assign"), this.attributes = cc11001100_hook("this.attributes", [], "assign"), this.attributeMap = cc11001100_hook("this.attributeMap", new WeakMap(), "assign"), this.removes = cc11001100_hook("this.removes", [], "assign"), this.addedSet = cc11001100_hook("this.addedSet", new Set(), "assign"), this.movedSet = cc11001100_hook("this.movedSet", new Set(), "assign"), this.droppedSet = cc11001100_hook("this.droppedSet", new Set(), "assign"), this.movedMap = cc11001100_hook("this.movedMap", {}, "assign"), this.mutationCb(o));
        }, "assign"), this.processMutation = cc11001100_hook("this.processMutation", e => {
          if (!eK(e.target, this.mirror)) switch (e.type) {
            case "characterData":
              {
                let t = cc11001100_hook("t", e.target.textContent, "var-init");
                eV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                  value: cc11001100_hook("value", eN(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, eq(e.target)) : t.replace(/[\S]/g, "*") : t, "object-key-init"),
                  node: cc11001100_hook("node", e.target, "object-key-init")
                });
                break;
              }
            case "attributes":
              {
                let t = cc11001100_hook("t", e.target, "var-init"),
                  r = cc11001100_hook("r", e.attributeName, "var-init"),
                  n = cc11001100_hook("n", e.target.getAttribute(r), "var-init");
                if ("value" === r) {
                  let r = cc11001100_hook("r", el(t), "var-init"),
                    i = cc11001100_hook("i", t.tagName, "var-init");
                  n = cc11001100_hook("n", ec(t, i, r), "assign");
                  let s = cc11001100_hook("s", en({
                      maskInputOptions: cc11001100_hook("maskInputOptions", this.maskInputOptions, "object-key-init"),
                      tagName: cc11001100_hook("tagName", i, "object-key-init"),
                      type: cc11001100_hook("type", r, "object-key-init")
                    }), "var-init"),
                    o = cc11001100_hook("o", eN(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s), "var-init");
                  n = cc11001100_hook("n", ei({
                    isMasked: cc11001100_hook("isMasked", o, "object-key-init"),
                    element: cc11001100_hook("element", t, "object-key-init"),
                    value: cc11001100_hook("value", n, "object-key-init"),
                    maskInputFn: cc11001100_hook("maskInputFn", this.maskInputFn, "object-key-init")
                  }), "assign");
                }
                if (eV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || n === e.oldValue) return;
                let i = cc11001100_hook("i", this.attributeMap.get(e.target), "var-init");
                if ("IFRAME" === t.tagName && "src" === r && !this.keepIframeSrcFn(n)) {
                  let e = cc11001100_hook("e", e7(t), "var-init");
                  if (e) return;
                  r = cc11001100_hook("r", "rr_src", "assign");
                }
                if (i || (i = cc11001100_hook("i", {
                  node: cc11001100_hook("node", e.target, "object-key-init"),
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, "assign"), this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === r && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !ex(t.tagName, r) && (i.attributes[r] = cc11001100_hook("i.attributes[r]", eR(this.doc, es(t.tagName), es(r), n, t, this.maskAttributeFn), "assign"), "style" === r)) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = cc11001100_hook("this.unattachedDoc", document.implementation.createHTMLDocument(), "assign");
                  } catch (e) {
                    this.unattachedDoc = cc11001100_hook("this.unattachedDoc", this.doc, "assign");
                  }
                  let r = cc11001100_hook("r", this.unattachedDoc.createElement("span"), "var-init");
                  for (let n of (e.oldValue && r.setAttribute("style", e.oldValue), Array.from(t.style))) {
                    let e = cc11001100_hook("e", t.style.getPropertyValue(n), "var-init"),
                      s = cc11001100_hook("s", t.style.getPropertyPriority(n), "var-init");
                    e !== r.style.getPropertyValue(n) || s !== r.style.getPropertyPriority(n) ? "" === s ? i.styleDiff[n] = cc11001100_hook("i.styleDiff[n]", e, "assign") : i.styleDiff[n] = cc11001100_hook("i.styleDiff[n]", [e, s], "assign") : i._unchangedStyles[n] = cc11001100_hook("i._unchangedStyles[n]", [e, s], "assign");
                  }
                  for (let e of Array.from(r.style)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = cc11001100_hook("i.styleDiff[e]", !1, "assign"));
                }
                break;
              }
            case "childList":
              if (eV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
              e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                let r = cc11001100_hook("r", this.mirror.getId(t), "var-init"),
                  n = cc11001100_hook("n", Q(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target), "var-init");
                eV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eK(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (tr(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || function e(t, r) {
                  if (Q(t)) return !1;
                  let n = cc11001100_hook("n", r.getId(t), "var-init");
                  return !r.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r));
                }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[te(r, n)] ? tr(this.movedSet, t) : this.removes.push({
                  parentId: cc11001100_hook("parentId", n, "object-key-init"),
                  id: cc11001100_hook("id", r, "object-key-init"),
                  isShadow: cc11001100_hook("isShadow", !!(Q(e.target) && Z(e.target)) || void 0, "object-key-init")
                })), this.mapRemoves.push(t));
              });
          }
        }, "assign"), this.genAdds = cc11001100_hook("this.genAdds", (e, t) => {
          if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
            if (this.mirror.hasNode(e)) {
              if (eK(e, this.mirror)) return;
              this.movedSet.add(e);
              let r = cc11001100_hook("r", null, "var-init");
              t && this.mirror.hasNode(t) && (r = cc11001100_hook("r", this.mirror.getId(t), "assign")), r && -1 !== r && (this.movedMap[te(this.mirror.getId(e), r)] = cc11001100_hook("this.movedMap[te(this.mirror.getId(e), r)]", !0, "assign"));
            } else this.addedSet.add(e), this.droppedSet.delete(e);
            !eV(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), eX(e) && e.shadowRoot.childNodes.forEach(t => {
              this.processedNodeManager.add(t, this), this.genAdds(t, e);
            }));
          }
        }, "assign");
      }
      init(e) {
        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
          this[t] = cc11001100_hook("this[t]", e[t], "assign");
        });
      }
      freeze() {
        this.frozen = cc11001100_hook("this.frozen", !0, "assign"), this.canvasManager.freeze();
      }
      unfreeze() {
        this.frozen = cc11001100_hook("this.frozen", !1, "assign"), this.canvasManager.unfreeze(), this.emit();
      }
      isFrozen() {
        return this.frozen;
      }
      lock() {
        this.locked = cc11001100_hook("this.locked", !0, "assign"), this.canvasManager.lock();
      }
      unlock() {
        this.locked = cc11001100_hook("this.locked", !1, "assign"), this.canvasManager.unlock(), this.emit();
      }
      reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset();
      }
    }
    function tr(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      e.delete(t), t.childNodes.forEach(t => tr(e, t));
    }
    function tn(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return 0 !== e.length && function (e, t, r) {
        let n = cc11001100_hook("n", t.parentNode, "var-init");
        for (; n;) {
          let t = cc11001100_hook("t", r.getId(n), "var-init");
          if (e.some(e => e.id === t)) return !0;
          n = cc11001100_hook("n", n.parentNode, "assign");
        }
        return !1;
      }(e, t, r);
    }
    function ti(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return 0 !== e.size && function e(t, r) {
        let {
          parentNode: n
        } = cc11001100_hook("", r, "var-init");
        return !!n && (!!t.has(n) || e(t, n));
      }(e, t);
    }
    let ts = cc11001100_hook("ts", e => s ? (...t) => {
        try {
          return e(...t);
        } catch (e) {
          if (s && !0 === s(e)) return () => {};
          throw e;
        }
      } : e, "var-init"),
      to = cc11001100_hook("to", [], "var-init");
    function ta(e) {
      cc11001100_hook("e", e, "function-parameter");
      try {
        if ("composedPath" in e) {
          let t = cc11001100_hook("t", e.composedPath(), "var-init");
          if (t.length) return t[0];
        } else if ("path" in e && e.path.length) return e.path[0];
      } catch {}
      return e && e.target;
    }
    function tl(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r = cc11001100_hook("r", new tt(), "var-init");
      to.push(r), r.init(e);
      let n = cc11001100_hook("n", window.MutationObserver || window.__rrMutationObserver, "var-init"),
        i = cc11001100_hook("i", window?.Zone?.__symbol__?.("MutationObserver"), "var-init");
      i && window[i] && (n = cc11001100_hook("n", window[i], "assign"));
      let s = cc11001100_hook("s", new n(ts(t => {
        e.onMutation && !1 === e.onMutation(t) || r.processMutations.bind(r)(t);
      })), "var-init");
      return s.observe(t, {
        attributes: cc11001100_hook("attributes", !0, "object-key-init"),
        attributeOldValue: cc11001100_hook("attributeOldValue", !0, "object-key-init"),
        characterData: cc11001100_hook("characterData", !0, "object-key-init"),
        characterDataOldValue: cc11001100_hook("characterDataOldValue", !0, "object-key-init"),
        childList: cc11001100_hook("childList", !0, "object-key-init"),
        subtree: cc11001100_hook("subtree", !0, "object-key-init")
      }), s;
    }
    function tc({
      scrollCb: e,
      doc: t,
      mirror: r,
      blockClass: n,
      blockSelector: i,
      unblockSelector: s,
      sampling: o
    }) {
      let a = cc11001100_hook("a", ts(eB(ts(o => {
        let a = cc11001100_hook("a", ta(o), "var-init");
        if (!a || eV(a, n, i, s, !0)) return;
        let l = cc11001100_hook("l", r.getId(a), "var-init");
        if (a === t && t.defaultView) {
          let r = cc11001100_hook("r", ej(t.defaultView), "var-init");
          e({
            id: cc11001100_hook("id", l, "object-key-init"),
            x: cc11001100_hook("x", r.left, "object-key-init"),
            y: cc11001100_hook("y", r.top, "object-key-init")
          });
        } else e({
          id: cc11001100_hook("id", l, "object-key-init"),
          x: cc11001100_hook("x", a.scrollLeft, "object-key-init"),
          y: cc11001100_hook("y", a.scrollTop, "object-key-init")
        });
      }), o.scroll || 100)), "var-init");
      return eP("scroll", a, t);
    }
    let tu = cc11001100_hook("tu", ["INPUT", "TEXTAREA", "SELECT"], "var-init"),
      td = cc11001100_hook("td", new WeakMap(), "var-init");
    function th(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (e, t) {
        if (ty("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || ty("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || ty("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || ty("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
          let r = cc11001100_hook("r", Array.from(e.parentRule.cssRules), "var-init"),
            n = cc11001100_hook("n", r.indexOf(e), "var-init");
          t.unshift(n);
        } else if (e.parentStyleSheet) {
          let r = cc11001100_hook("r", Array.from(e.parentStyleSheet.cssRules), "var-init"),
            n = cc11001100_hook("n", r.indexOf(e), "var-init");
          t.unshift(n);
        }
        return t;
      }(e, []);
    }
    function tp(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      let n, i;
      return e ? (e.ownerNode ? n = cc11001100_hook("n", t.getId(e.ownerNode), "assign") : i = cc11001100_hook("i", r.getId(e), "assign"), {
        styleId: cc11001100_hook("styleId", i, "object-key-init"),
        id: cc11001100_hook("id", n, "object-key-init")
      }) : {};
    }
    function tf({
      mirror: e,
      stylesheetManager: t
    }, r) {
      cc11001100_hook("r", r, "function-parameter");
      let n = cc11001100_hook("n", null, "var-init");
      n = cc11001100_hook("n", "#document" === r.nodeName ? e.getId(r) : e.getId(r.host), "assign");
      let i = cc11001100_hook("i", "#document" === r.nodeName ? r.defaultView?.Document : r.ownerDocument?.defaultView?.ShadowRoot, "var-init"),
        s = cc11001100_hook("s", i?.prototype ? Object.getOwnPropertyDescriptor(i?.prototype, "adoptedStyleSheets") : void 0, "var-init");
      return null !== n && -1 !== n && i && s ? (Object.defineProperty(r, "adoptedStyleSheets", {
        configurable: cc11001100_hook("configurable", s.configurable, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", s.enumerable, "object-key-init"),
        get() {
          return s.get?.call(this);
        },
        set(e) {
          let r = cc11001100_hook("r", s.set?.call(this, e), "var-init");
          if (null !== n && -1 !== n) try {
            t.adoptStyleSheets(e, n);
          } catch (e) {}
          return r;
        }
      }), ts(() => {
        Object.defineProperty(r, "adoptedStyleSheets", {
          configurable: cc11001100_hook("configurable", s.configurable, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", s.enumerable, "object-key-init"),
          get: cc11001100_hook("get", s.get, "object-key-init"),
          set: cc11001100_hook("set", s.set, "object-key-init")
        });
      })) : () => {};
    }
    function tm(e, t = {}) {
      cc11001100_hook("e", e, "function-parameter");
      let r;
      let n = cc11001100_hook("n", e.doc.defaultView, "var-init");
      if (!n) return () => {};
      e.recordDOM && (r = cc11001100_hook("r", tl(e, e.doc), "assign"));
      let i = cc11001100_hook("i", function ({
          mousemoveCb: e,
          sampling: t,
          doc: r,
          mirror: n
        }) {
          let i;
          if (!1 === t.mousemove) return () => {};
          let s = cc11001100_hook("s", "number" == typeof t.mousemove ? t.mousemove : 50, "var-init"),
            o = cc11001100_hook("o", "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500, "var-init"),
            a = cc11001100_hook("a", [], "var-init"),
            l = cc11001100_hook("l", eB(ts(t => {
              let r = cc11001100_hook("r", Date.now() - i, "var-init");
              e(a.map(e => (e.timeOffset -= cc11001100_hook("e.timeOffset", r, "assign"), e)), t), a = cc11001100_hook("a", [], "assign"), i = cc11001100_hook("i", null, "assign");
            }), o), "var-init"),
            c = cc11001100_hook("c", ts(eB(ts(e => {
              let t = cc11001100_hook("t", ta(e), "var-init"),
                {
                  clientX: r,
                  clientY: s
                } = cc11001100_hook("", eG(e) ? e.changedTouches[0] : e, "var-init");
              i || (i = cc11001100_hook("i", ez(), "assign")), a.push({
                x: cc11001100_hook("x", r, "object-key-init"),
                y: cc11001100_hook("y", s, "object-key-init"),
                id: cc11001100_hook("id", n.getId(t), "object-key-init"),
                timeOffset: cc11001100_hook("timeOffset", ez() - i, "object-key-init")
              }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? e8.Drag : e instanceof MouseEvent ? e8.MouseMove : e8.TouchMove);
            }), s, {
              trailing: cc11001100_hook("trailing", !1, "object-key-init")
            })), "var-init"),
            u = cc11001100_hook("u", [eP("mousemove", c, r), eP("touchmove", c, r), eP("drag", c, r)], "var-init");
          return ts(() => {
            u.forEach(e => e());
          });
        }(e), "var-init"),
        s = cc11001100_hook("s", function ({
          mouseInteractionCb: e,
          doc: t,
          mirror: r,
          blockClass: n,
          blockSelector: i,
          unblockSelector: s,
          sampling: o
        }) {
          if (!1 === o.mouseInteraction) return () => {};
          let a = cc11001100_hook("a", !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction, "var-init"),
            l = cc11001100_hook("l", [], "var-init"),
            c = cc11001100_hook("c", null, "var-init"),
            u = cc11001100_hook("u", t => o => {
              let a = cc11001100_hook("a", ta(o), "var-init");
              if (eV(a, n, i, s, !0)) return;
              let l = cc11001100_hook("l", null, "var-init"),
                u = cc11001100_hook("u", t, "var-init");
              if ("pointerType" in o) {
                switch (o.pointerType) {
                  case "mouse":
                    l = cc11001100_hook("l", e4.Mouse, "assign");
                    break;
                  case "touch":
                    l = cc11001100_hook("l", e4.Touch, "assign");
                    break;
                  case "pen":
                    l = cc11001100_hook("l", e4.Pen, "assign");
                }
                l === e4.Touch ? e6[t] === e6.MouseDown ? u = cc11001100_hook("u", "TouchStart", "assign") : e6[t] === e6.MouseUp && (u = cc11001100_hook("u", "TouchEnd", "assign")) : e4.Pen;
              } else eG(o) && (l = cc11001100_hook("l", e4.Touch, "assign"));
              null !== l ? (c = cc11001100_hook("c", l, "assign"), (u.startsWith("Touch") && l === e4.Touch || u.startsWith("Mouse") && l === e4.Mouse) && (l = cc11001100_hook("l", null, "assign"))) : e6[t] === e6.Click && (l = cc11001100_hook("l", c, "assign"), c = cc11001100_hook("c", null, "assign"));
              let d = cc11001100_hook("d", eG(o) ? o.changedTouches[0] : o, "var-init");
              if (!d) return;
              let h = cc11001100_hook("h", r.getId(a), "var-init"),
                {
                  clientX: p,
                  clientY: f
                } = cc11001100_hook("", d, "var-init");
              ts(e)({
                type: cc11001100_hook("type", e6[u], "object-key-init"),
                id: cc11001100_hook("id", h, "object-key-init"),
                x: cc11001100_hook("x", p, "object-key-init"),
                y: cc11001100_hook("y", f, "object-key-init"),
                ...(null !== l && {
                  pointerType: cc11001100_hook("pointerType", l, "object-key-init")
                })
              });
            }, "var-init");
          return Object.keys(e6).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(e => {
            let r = cc11001100_hook("r", es(e), "var-init"),
              n = cc11001100_hook("n", u(e), "var-init");
            if (window.PointerEvent) switch (e6[e]) {
              case e6.MouseDown:
              case e6.MouseUp:
                r = cc11001100_hook("r", r.replace("mouse", "pointer"), "assign");
                break;
              case e6.TouchStart:
              case e6.TouchEnd:
                return;
            }
            l.push(eP(r, n, t));
          }), ts(() => {
            l.forEach(e => e());
          });
        }(e), "var-init"),
        o = cc11001100_hook("o", tc(e), "var-init"),
        a = cc11001100_hook("a", function ({
          viewportResizeCb: e
        }, {
          win: t
        }) {
          let r = cc11001100_hook("r", -1, "var-init"),
            n = cc11001100_hook("n", -1, "var-init"),
            i = cc11001100_hook("i", ts(eB(ts(() => {
              let t = cc11001100_hook("t", e$(), "var-init"),
                i = cc11001100_hook("i", eH(), "var-init");
              (r !== t || n !== i) && (e({
                width: cc11001100_hook("width", Number(i), "object-key-init"),
                height: cc11001100_hook("height", Number(t), "object-key-init")
              }), r = cc11001100_hook("r", t, "assign"), n = cc11001100_hook("n", i, "assign"));
            }), 200)), "var-init");
          return eP("resize", i, t);
        }(e, {
          win: cc11001100_hook("win", n, "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", function ({
          inputCb: e,
          doc: t,
          mirror: r,
          blockClass: n,
          blockSelector: i,
          unblockSelector: s,
          ignoreClass: o,
          ignoreSelector: a,
          maskInputOptions: l,
          maskInputFn: c,
          sampling: u,
          userTriggeredOnInput: d,
          maskTextClass: h,
          unmaskTextClass: p,
          maskTextSelector: f,
          unmaskTextSelector: m
        }) {
          function y(e) {
            cc11001100_hook("e", e, "function-parameter");
            let r = cc11001100_hook("r", ta(e), "var-init"),
              u = cc11001100_hook("u", e.isTrusted, "var-init"),
              y = cc11001100_hook("y", r && eo(r.tagName), "var-init");
            if ("OPTION" === y && (r = cc11001100_hook("r", r.parentElement, "assign")), !r || !y || 0 > tu.indexOf(y) || eV(r, n, i, s, !0)) return;
            let _ = cc11001100_hook("_", r, "var-init");
            if (_.classList.contains(o) || a && _.matches(a)) return;
            let S = cc11001100_hook("S", el(r), "var-init"),
              v = cc11001100_hook("v", ec(_, y, S), "var-init"),
              w = cc11001100_hook("w", !1, "var-init"),
              b = cc11001100_hook("b", en({
                maskInputOptions: cc11001100_hook("maskInputOptions", l, "object-key-init"),
                tagName: cc11001100_hook("tagName", y, "object-key-init"),
                type: cc11001100_hook("type", S, "object-key-init")
              }), "var-init"),
              E = cc11001100_hook("E", eN(r, h, f, p, m, b), "var-init");
            ("radio" === S || "checkbox" === S) && (w = cc11001100_hook("w", r.checked, "assign")), v = cc11001100_hook("v", ei({
              isMasked: cc11001100_hook("isMasked", E, "object-key-init"),
              element: cc11001100_hook("element", r, "object-key-init"),
              value: cc11001100_hook("value", v, "object-key-init"),
              maskInputFn: cc11001100_hook("maskInputFn", c, "object-key-init")
            }), "assign"), g(r, d ? {
              text: cc11001100_hook("text", v, "object-key-init"),
              isChecked: cc11001100_hook("isChecked", w, "object-key-init"),
              userTriggered: cc11001100_hook("userTriggered", u, "object-key-init")
            } : {
              text: cc11001100_hook("text", v, "object-key-init"),
              isChecked: cc11001100_hook("isChecked", w, "object-key-init")
            });
            let k = cc11001100_hook("k", r.name, "var-init");
            "radio" === S && k && w && t.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach(e => {
              if (e !== r) {
                let t = cc11001100_hook("t", ei({
                  isMasked: cc11001100_hook("isMasked", E, "object-key-init"),
                  element: cc11001100_hook("element", e, "object-key-init"),
                  value: cc11001100_hook("value", ec(e, y, S), "object-key-init"),
                  maskInputFn: cc11001100_hook("maskInputFn", c, "object-key-init")
                }), "var-init");
                g(e, d ? {
                  text: cc11001100_hook("text", t, "object-key-init"),
                  isChecked: cc11001100_hook("isChecked", !w, "object-key-init"),
                  userTriggered: cc11001100_hook("userTriggered", !1, "object-key-init")
                } : {
                  text: cc11001100_hook("text", t, "object-key-init"),
                  isChecked: cc11001100_hook("isChecked", !w, "object-key-init")
                });
              }
            });
          }
          function g(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            let i = cc11001100_hook("i", td.get(t), "var-init");
            if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
              td.set(t, n);
              let i = cc11001100_hook("i", r.getId(t), "var-init");
              ts(e)({
                ...n,
                id: i
              });
            }
          }
          let _ = cc11001100_hook("_", "last" === u.input ? ["change"] : ["input", "change"], "var-init"),
            S = cc11001100_hook("S", _.map(e => eP(e, ts(y), t)), "var-init"),
            v = cc11001100_hook("v", t.defaultView, "var-init");
          if (!v) return () => {
            S.forEach(e => e());
          };
          let w = cc11001100_hook("w", v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"), "var-init"),
            b = cc11001100_hook("b", [[v.HTMLInputElement.prototype, "value"], [v.HTMLInputElement.prototype, "checked"], [v.HTMLSelectElement.prototype, "value"], [v.HTMLTextAreaElement.prototype, "value"], [v.HTMLSelectElement.prototype, "selectedIndex"], [v.HTMLOptionElement.prototype, "selected"]], "var-init");
          return w && w.set && S.push(...b.map(e => function e(t, r, n, i, s = window) {
            let o = cc11001100_hook("o", s.Object.getOwnPropertyDescriptor(t, r), "var-init");
            return s.Object.defineProperty(t, r, i ? n : {
              set(e) {
                e3(() => {
                  n.set.call(this, e);
                }, 0), o && o.set && o.set.call(this, e);
              }
            }), () => e(t, r, o || {}, !0);
          }(e[0], e[1], {
            set() {
              ts(y)({
                target: cc11001100_hook("target", this, "object-key-init"),
                isTrusted: cc11001100_hook("isTrusted", !1, "object-key-init")
              });
            }
          }, !1, v))), ts(() => {
            S.forEach(e => e());
          });
        }(e), "var-init"),
        c = cc11001100_hook("c", function ({
          mediaInteractionCb: e,
          blockClass: t,
          blockSelector: r,
          unblockSelector: n,
          mirror: i,
          sampling: s,
          doc: o
        }) {
          let a = cc11001100_hook("a", ts(o => eB(ts(s => {
              let a = cc11001100_hook("a", ta(s), "var-init");
              if (!a || eV(a, t, r, n, !0)) return;
              let {
                currentTime: l,
                volume: c,
                muted: u,
                playbackRate: d
              } = cc11001100_hook("", a, "var-init");
              e({
                type: cc11001100_hook("type", o, "object-key-init"),
                id: cc11001100_hook("id", i.getId(a), "object-key-init"),
                currentTime: cc11001100_hook("currentTime", l, "object-key-init"),
                volume: cc11001100_hook("volume", c, "object-key-init"),
                muted: cc11001100_hook("muted", u, "object-key-init"),
                playbackRate: cc11001100_hook("playbackRate", d, "object-key-init")
              });
            }), s.media || 500)), "var-init"),
            l = cc11001100_hook("l", [eP("play", a(0), o), eP("pause", a(1), o), eP("seeked", a(2), o), eP("volumechange", a(3), o), eP("ratechange", a(4), o)], "var-init");
          return ts(() => {
            l.forEach(e => e());
          });
        }(e), "var-init"),
        u = cc11001100_hook("u", () => {}, "var-init"),
        d = cc11001100_hook("d", () => {}, "var-init"),
        h = cc11001100_hook("h", () => {}, "var-init"),
        p = cc11001100_hook("p", () => {}, "var-init");
      e.recordDOM && (u = cc11001100_hook("u", function ({
        styleSheetRuleCb: e,
        mirror: t,
        stylesheetManager: r
      }, {
        win: n
      }) {
        let i, s;
        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
        let o = cc11001100_hook("o", n.CSSStyleSheet.prototype.insertRule, "var-init");
        n.CSSStyleSheet.prototype.insertRule = cc11001100_hook("n.CSSStyleSheet.prototype.insertRule", new Proxy(o, {
          apply: cc11001100_hook("apply", ts((n, i, s) => {
            let [o, a] = cc11001100_hook("", s, "var-init"),
              {
                id: l,
                styleId: c
              } = cc11001100_hook("", tp(i, t, r.styleMirror), "var-init");
            return (l && -1 !== l || c && -1 !== c) && e({
              id: cc11001100_hook("id", l, "object-key-init"),
              styleId: cc11001100_hook("styleId", c, "object-key-init"),
              adds: cc11001100_hook("adds", [{
                rule: cc11001100_hook("rule", o, "object-key-init"),
                index: cc11001100_hook("index", a, "object-key-init")
              }], "object-key-init")
            }), n.apply(i, s);
          }), "object-key-init")
        }), "assign");
        let a = cc11001100_hook("a", n.CSSStyleSheet.prototype.deleteRule, "var-init");
        n.CSSStyleSheet.prototype.deleteRule = cc11001100_hook("n.CSSStyleSheet.prototype.deleteRule", new Proxy(a, {
          apply: cc11001100_hook("apply", ts((n, i, s) => {
            let [o] = cc11001100_hook("", s, "var-init"),
              {
                id: a,
                styleId: l
              } = cc11001100_hook("", tp(i, t, r.styleMirror), "var-init");
            return (a && -1 !== a || l && -1 !== l) && e({
              id: cc11001100_hook("id", a, "object-key-init"),
              styleId: cc11001100_hook("styleId", l, "object-key-init"),
              removes: cc11001100_hook("removes", [{
                index: cc11001100_hook("index", o, "object-key-init")
              }], "object-key-init")
            }), n.apply(i, s);
          }), "object-key-init")
        }), "assign"), n.CSSStyleSheet.prototype.replace && (i = cc11001100_hook("i", n.CSSStyleSheet.prototype.replace, "assign"), n.CSSStyleSheet.prototype.replace = cc11001100_hook("n.CSSStyleSheet.prototype.replace", new Proxy(i, {
          apply: cc11001100_hook("apply", ts((n, i, s) => {
            let [o] = cc11001100_hook("", s, "var-init"),
              {
                id: a,
                styleId: l
              } = cc11001100_hook("", tp(i, t, r.styleMirror), "var-init");
            return (a && -1 !== a || l && -1 !== l) && e({
              id: cc11001100_hook("id", a, "object-key-init"),
              styleId: cc11001100_hook("styleId", l, "object-key-init"),
              replace: cc11001100_hook("replace", o, "object-key-init")
            }), n.apply(i, s);
          }), "object-key-init")
        }), "assign")), n.CSSStyleSheet.prototype.replaceSync && (s = cc11001100_hook("s", n.CSSStyleSheet.prototype.replaceSync, "assign"), n.CSSStyleSheet.prototype.replaceSync = cc11001100_hook("n.CSSStyleSheet.prototype.replaceSync", new Proxy(s, {
          apply: cc11001100_hook("apply", ts((n, i, s) => {
            let [o] = cc11001100_hook("", s, "var-init"),
              {
                id: a,
                styleId: l
              } = cc11001100_hook("", tp(i, t, r.styleMirror), "var-init");
            return (a && -1 !== a || l && -1 !== l) && e({
              id: cc11001100_hook("id", a, "object-key-init"),
              styleId: cc11001100_hook("styleId", l, "object-key-init"),
              replaceSync: cc11001100_hook("replaceSync", o, "object-key-init")
            }), n.apply(i, s);
          }), "object-key-init")
        }), "assign"));
        let l = cc11001100_hook("l", {}, "var-init");
        tg("CSSGroupingRule") ? l.CSSGroupingRule = cc11001100_hook("l.CSSGroupingRule", n.CSSGroupingRule, "assign") : (tg("CSSMediaRule") && (l.CSSMediaRule = cc11001100_hook("l.CSSMediaRule", n.CSSMediaRule, "assign")), tg("CSSConditionRule") && (l.CSSConditionRule = cc11001100_hook("l.CSSConditionRule", n.CSSConditionRule, "assign")), tg("CSSSupportsRule") && (l.CSSSupportsRule = cc11001100_hook("l.CSSSupportsRule", n.CSSSupportsRule, "assign")));
        let c = cc11001100_hook("c", {}, "var-init");
        return Object.entries(l).forEach(([n, i]) => {
          c[n] = cc11001100_hook("c[n]", {
            insertRule: cc11001100_hook("insertRule", i.prototype.insertRule, "object-key-init"),
            deleteRule: cc11001100_hook("deleteRule", i.prototype.deleteRule, "object-key-init")
          }, "assign"), i.prototype.insertRule = cc11001100_hook("i.prototype.insertRule", new Proxy(c[n].insertRule, {
            apply: cc11001100_hook("apply", ts((n, i, s) => {
              let [o, a] = cc11001100_hook("", s, "var-init"),
                {
                  id: l,
                  styleId: c
                } = cc11001100_hook("", tp(i.parentStyleSheet, t, r.styleMirror), "var-init");
              return (l && -1 !== l || c && -1 !== c) && e({
                id: cc11001100_hook("id", l, "object-key-init"),
                styleId: cc11001100_hook("styleId", c, "object-key-init"),
                adds: cc11001100_hook("adds", [{
                  rule: cc11001100_hook("rule", o, "object-key-init"),
                  index: cc11001100_hook("index", [...th(i), a || 0], "object-key-init")
                }], "object-key-init")
              }), n.apply(i, s);
            }), "object-key-init")
          }), "assign"), i.prototype.deleteRule = cc11001100_hook("i.prototype.deleteRule", new Proxy(c[n].deleteRule, {
            apply: cc11001100_hook("apply", ts((n, i, s) => {
              let [o] = cc11001100_hook("", s, "var-init"),
                {
                  id: a,
                  styleId: l
                } = cc11001100_hook("", tp(i.parentStyleSheet, t, r.styleMirror), "var-init");
              return (a && -1 !== a || l && -1 !== l) && e({
                id: cc11001100_hook("id", a, "object-key-init"),
                styleId: cc11001100_hook("styleId", l, "object-key-init"),
                removes: cc11001100_hook("removes", [{
                  index: cc11001100_hook("index", [...th(i), o], "object-key-init")
                }], "object-key-init")
              }), n.apply(i, s);
            }), "object-key-init")
          }), "assign");
        }), ts(() => {
          n.CSSStyleSheet.prototype.insertRule = cc11001100_hook("n.CSSStyleSheet.prototype.insertRule", o, "assign"), n.CSSStyleSheet.prototype.deleteRule = cc11001100_hook("n.CSSStyleSheet.prototype.deleteRule", a, "assign"), i && (n.CSSStyleSheet.prototype.replace = cc11001100_hook("n.CSSStyleSheet.prototype.replace", i, "assign")), s && (n.CSSStyleSheet.prototype.replaceSync = cc11001100_hook("n.CSSStyleSheet.prototype.replaceSync", s, "assign")), Object.entries(l).forEach(([e, t]) => {
            t.prototype.insertRule = cc11001100_hook("t.prototype.insertRule", c[e].insertRule, "assign"), t.prototype.deleteRule = cc11001100_hook("t.prototype.deleteRule", c[e].deleteRule, "assign");
          });
        });
      }(e, {
        win: cc11001100_hook("win", n, "object-key-init")
      }), "assign"), d = cc11001100_hook("d", tf(e, e.doc), "assign"), h = cc11001100_hook("h", function ({
        styleDeclarationCb: e,
        mirror: t,
        ignoreCSSAttributes: r,
        stylesheetManager: n
      }, {
        win: i
      }) {
        let s = cc11001100_hook("s", i.CSSStyleDeclaration.prototype.setProperty, "var-init");
        i.CSSStyleDeclaration.prototype.setProperty = cc11001100_hook("i.CSSStyleDeclaration.prototype.setProperty", new Proxy(s, {
          apply: cc11001100_hook("apply", ts((i, o, a) => {
            let [l, c, u] = cc11001100_hook("", a, "var-init");
            if (r.has(l)) return s.apply(o, [l, c, u]);
            let {
              id: d,
              styleId: h
            } = cc11001100_hook("", tp(o.parentRule?.parentStyleSheet, t, n.styleMirror), "var-init");
            return (d && -1 !== d || h && -1 !== h) && e({
              id: cc11001100_hook("id", d, "object-key-init"),
              styleId: cc11001100_hook("styleId", h, "object-key-init"),
              set: {
                property: cc11001100_hook("property", l, "object-key-init"),
                value: cc11001100_hook("value", c, "object-key-init"),
                priority: cc11001100_hook("priority", u, "object-key-init")
              },
              index: cc11001100_hook("index", th(o.parentRule), "object-key-init")
            }), i.apply(o, a);
          }), "object-key-init")
        }), "assign");
        let o = cc11001100_hook("o", i.CSSStyleDeclaration.prototype.removeProperty, "var-init");
        return i.CSSStyleDeclaration.prototype.removeProperty = cc11001100_hook("i.CSSStyleDeclaration.prototype.removeProperty", new Proxy(o, {
          apply: cc11001100_hook("apply", ts((i, s, a) => {
            let [l] = cc11001100_hook("", a, "var-init");
            if (r.has(l)) return o.apply(s, [l]);
            let {
              id: c,
              styleId: u
            } = cc11001100_hook("", tp(s.parentRule?.parentStyleSheet, t, n.styleMirror), "var-init");
            return (c && -1 !== c || u && -1 !== u) && e({
              id: cc11001100_hook("id", c, "object-key-init"),
              styleId: cc11001100_hook("styleId", u, "object-key-init"),
              remove: {
                property: cc11001100_hook("property", l, "object-key-init")
              },
              index: cc11001100_hook("index", th(s.parentRule), "object-key-init")
            }), i.apply(s, a);
          }), "object-key-init")
        }), "assign"), ts(() => {
          i.CSSStyleDeclaration.prototype.setProperty = cc11001100_hook("i.CSSStyleDeclaration.prototype.setProperty", s, "assign"), i.CSSStyleDeclaration.prototype.removeProperty = cc11001100_hook("i.CSSStyleDeclaration.prototype.removeProperty", o, "assign");
        });
      }(e, {
        win: cc11001100_hook("win", n, "object-key-init")
      }), "assign"), e.collectFonts && (p = cc11001100_hook("p", function ({
        fontCb: e,
        doc: t
      }) {
        let r = cc11001100_hook("r", t.defaultView, "var-init");
        if (!r) return () => {};
        let n = cc11001100_hook("n", [], "var-init"),
          i = cc11001100_hook("i", new WeakMap(), "var-init"),
          s = cc11001100_hook("s", r.FontFace, "var-init");
        r.FontFace = cc11001100_hook("r.FontFace", function (e, t, r) {
          let n = cc11001100_hook("n", new s(e, t, r), "var-init");
          return i.set(n, {
            family: cc11001100_hook("family", e, "object-key-init"),
            buffer: cc11001100_hook("buffer", "string" != typeof t, "object-key-init"),
            descriptors: cc11001100_hook("descriptors", r, "object-key-init"),
            fontSource: cc11001100_hook("fontSource", "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))), "object-key-init")
          }), n;
        }, "assign");
        let o = cc11001100_hook("o", eW(t.fonts, "add", function (t) {
          return function (r) {
            return e3(ts(() => {
              let t = cc11001100_hook("t", i.get(r), "var-init");
              t && (e(t), i.delete(r));
            }), 0), t.apply(this, [r]);
          };
        }), "var-init");
        return n.push(() => {
          r.FontFace = cc11001100_hook("r.FontFace", s, "assign");
        }), n.push(o), ts(() => {
          n.forEach(e => e());
        });
      }(e), "assign")));
      let f = cc11001100_hook("f", function (e) {
          let {
              doc: t,
              mirror: r,
              blockClass: n,
              blockSelector: i,
              unblockSelector: s,
              selectionCb: o
            } = cc11001100_hook("", e, "var-init"),
            a = cc11001100_hook("a", !0, "var-init"),
            l = cc11001100_hook("l", ts(() => {
              let e = cc11001100_hook("e", t.getSelection(), "var-init");
              if (!e || a && e?.isCollapsed) return;
              a = cc11001100_hook("a", e.isCollapsed || !1, "assign");
              let l = cc11001100_hook("l", [], "var-init"),
                c = cc11001100_hook("c", e.rangeCount || 0, "var-init");
              for (let t = cc11001100_hook("t", 0, "var-init"); t < c; t++) {
                let o = cc11001100_hook("o", e.getRangeAt(t), "var-init"),
                  {
                    startContainer: a,
                    startOffset: c,
                    endContainer: u,
                    endOffset: d
                  } = cc11001100_hook("", o, "var-init"),
                  h = cc11001100_hook("h", eV(a, n, i, s, !0) || eV(u, n, i, s, !0), "var-init");
                h || l.push({
                  start: cc11001100_hook("start", r.getId(a), "object-key-init"),
                  startOffset: cc11001100_hook("startOffset", c, "object-key-init"),
                  end: cc11001100_hook("end", r.getId(u), "object-key-init"),
                  endOffset: cc11001100_hook("endOffset", d, "object-key-init")
                });
              }
              o({
                ranges: cc11001100_hook("ranges", l, "object-key-init")
              });
            }), "var-init");
          return l(), eP("selectionchange", l);
        }(e), "var-init"),
        m = cc11001100_hook("m", function ({
          doc: e,
          customElementCb: t
        }) {
          let r = cc11001100_hook("r", e.defaultView, "var-init");
          if (!r || !r.customElements) return () => {};
          let n = cc11001100_hook("n", eW(r.customElements, "define", function (e) {
            return function (r, n, i) {
              try {
                t({
                  define: {
                    name: cc11001100_hook("name", r, "object-key-init")
                  }
                });
              } catch (e) {}
              return e.apply(this, [r, n, i]);
            };
          }), "var-init");
          return n;
        }(e), "var-init"),
        y = cc11001100_hook("y", [], "var-init");
      for (let t of e.plugins) y.push(t.observer(t.callback, n, t.options));
      return ts(() => {
        to.forEach(e => e.reset()), r?.disconnect(), i(), s(), o(), a(), l(), c(), u(), d(), h(), p(), f(), m(), y.forEach(e => e());
      });
    }
    function ty(e) {
      cc11001100_hook("e", e, "function-parameter");
      return void 0 !== window[e];
    }
    function tg(e) {
      cc11001100_hook("e", e, "function-parameter");
      return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype);
    }
    class t_ {
      constructor(e) {
        this.generateIdFn = cc11001100_hook("this.generateIdFn", e, "assign"), this.iframeIdToRemoteIdMap = cc11001100_hook("this.iframeIdToRemoteIdMap", new WeakMap(), "assign"), this.iframeRemoteIdToIdMap = cc11001100_hook("this.iframeRemoteIdToIdMap", new WeakMap(), "assign");
      }
      getId(e, t, r, n) {
        let i = cc11001100_hook("i", r || this.getIdToRemoteIdMap(e), "var-init"),
          s = cc11001100_hook("s", n || this.getRemoteIdToIdMap(e), "var-init"),
          o = cc11001100_hook("o", i.get(t), "var-init");
        return o || (o = cc11001100_hook("o", this.generateIdFn(), "assign"), i.set(t, o), s.set(o, t)), o;
      }
      getIds(e, t) {
        let r = cc11001100_hook("r", this.getIdToRemoteIdMap(e), "var-init"),
          n = cc11001100_hook("n", this.getRemoteIdToIdMap(e), "var-init");
        return t.map(t => this.getId(e, t, r, n));
      }
      getRemoteId(e, t, r) {
        let n = cc11001100_hook("n", r || this.getRemoteIdToIdMap(e), "var-init");
        if ("number" != typeof t) return t;
        let i = cc11001100_hook("i", n.get(t), "var-init");
        return i || -1;
      }
      getRemoteIds(e, t) {
        let r = cc11001100_hook("r", this.getRemoteIdToIdMap(e), "var-init");
        return t.map(t => this.getRemoteId(e, t, r));
      }
      reset(e) {
        if (!e) {
          this.iframeIdToRemoteIdMap = cc11001100_hook("this.iframeIdToRemoteIdMap", new WeakMap(), "assign"), this.iframeRemoteIdToIdMap = cc11001100_hook("this.iframeRemoteIdToIdMap", new WeakMap(), "assign");
          return;
        }
        this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
      }
      getIdToRemoteIdMap(e) {
        let t = cc11001100_hook("t", this.iframeIdToRemoteIdMap.get(e), "var-init");
        return t || (t = cc11001100_hook("t", new Map(), "assign"), this.iframeIdToRemoteIdMap.set(e, t)), t;
      }
      getRemoteIdToIdMap(e) {
        let t = cc11001100_hook("t", this.iframeRemoteIdToIdMap.get(e), "var-init");
        return t || (t = cc11001100_hook("t", new Map(), "assign"), this.iframeRemoteIdToIdMap.set(e, t)), t;
      }
    }
    class tS {
      constructor() {
        this.crossOriginIframeMirror = cc11001100_hook("this.crossOriginIframeMirror", new t_(e_), "assign"), this.crossOriginIframeRootIdMap = cc11001100_hook("this.crossOriginIframeRootIdMap", new WeakMap(), "assign");
      }
      addIframe() {}
      addLoadListener() {}
      attachIframe() {}
    }
    class tv {
      constructor(e) {
        this.iframes = cc11001100_hook("this.iframes", new WeakMap(), "assign"), this.crossOriginIframeMap = cc11001100_hook("this.crossOriginIframeMap", new WeakMap(), "assign"), this.crossOriginIframeMirror = cc11001100_hook("this.crossOriginIframeMirror", new t_(e_), "assign"), this.crossOriginIframeRootIdMap = cc11001100_hook("this.crossOriginIframeRootIdMap", new WeakMap(), "assign"), this.mutationCb = cc11001100_hook("this.mutationCb", e.mutationCb, "assign"), this.wrappedEmit = cc11001100_hook("this.wrappedEmit", e.wrappedEmit, "assign"), this.stylesheetManager = cc11001100_hook("this.stylesheetManager", e.stylesheetManager, "assign"), this.recordCrossOriginIframes = cc11001100_hook("this.recordCrossOriginIframes", e.recordCrossOriginIframes, "assign"), this.crossOriginIframeStyleMirror = cc11001100_hook("this.crossOriginIframeStyleMirror", new t_(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), "assign"), this.mirror = cc11001100_hook("this.mirror", e.mirror, "assign"), this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
      }
      addIframe(e) {
        this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
      }
      addLoadListener(e) {
        this.loadListener = cc11001100_hook("this.loadListener", e, "assign");
      }
      attachIframe(e, t) {
        this.mutationCb({
          adds: cc11001100_hook("adds", [{
            parentId: cc11001100_hook("parentId", this.mirror.getId(e), "object-key-init"),
            nextId: cc11001100_hook("nextId", null, "object-key-init"),
            node: cc11001100_hook("node", t, "object-key-init")
          }], "object-key-init"),
          removes: cc11001100_hook("removes", [], "object-key-init"),
          texts: cc11001100_hook("texts", [], "object-key-init"),
          attributes: cc11001100_hook("attributes", [], "object-key-init"),
          isAttachIframe: cc11001100_hook("isAttachIframe", !0, "object-key-init")
        }), this.loadListener?.(e);
        let r = cc11001100_hook("r", e7(e), "var-init");
        r && r.adoptedStyleSheets && r.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(r.adoptedStyleSheets, this.mirror.getId(r));
      }
      handleMessage(e) {
        if ("rrweb" !== e.data.type || e.origin !== e.data.origin) return;
        let t = cc11001100_hook("t", e.source, "var-init");
        if (!t) return;
        let r = cc11001100_hook("r", this.crossOriginIframeMap.get(e.source), "var-init");
        if (!r) return;
        let n = cc11001100_hook("n", this.transformCrossOriginEvent(r, e.data.event), "var-init");
        n && this.wrappedEmit(n, e.data.isCheckout);
      }
      transformCrossOriginEvent(e, t) {
        switch (t.type) {
          case e5.FullSnapshot:
            {
              this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
              let r = cc11001100_hook("r", t.data.node.id, "var-init");
              return this.crossOriginIframeRootIdMap.set(e, r), this.patchRootIdOnNode(t.data.node, r), {
                timestamp: cc11001100_hook("timestamp", t.timestamp, "object-key-init"),
                type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
                data: {
                  source: cc11001100_hook("source", e8.Mutation, "object-key-init"),
                  adds: cc11001100_hook("adds", [{
                    parentId: cc11001100_hook("parentId", this.mirror.getId(e), "object-key-init"),
                    nextId: cc11001100_hook("nextId", null, "object-key-init"),
                    node: cc11001100_hook("node", t.data.node, "object-key-init")
                  }], "object-key-init"),
                  removes: cc11001100_hook("removes", [], "object-key-init"),
                  texts: cc11001100_hook("texts", [], "object-key-init"),
                  attributes: cc11001100_hook("attributes", [], "object-key-init"),
                  isAttachIframe: cc11001100_hook("isAttachIframe", !0, "object-key-init")
                }
              };
            }
          case e5.Meta:
          case e5.Load:
          case e5.DomContentLoaded:
            break;
          case e5.Plugin:
            return t;
          case e5.Custom:
            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
          case e5.IncrementalSnapshot:
            switch (t.data.source) {
              case e8.Mutation:
                return t.data.adds.forEach(t => {
                  this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                  let r = cc11001100_hook("r", this.crossOriginIframeRootIdMap.get(e), "var-init");
                  r && this.patchRootIdOnNode(t.node, r);
                }), t.data.removes.forEach(t => {
                  this.replaceIds(t, e, ["parentId", "id"]);
                }), t.data.attributes.forEach(t => {
                  this.replaceIds(t, e, ["id"]);
                }), t.data.texts.forEach(t => {
                  this.replaceIds(t, e, ["id"]);
                }), t;
              case e8.Drag:
              case e8.TouchMove:
              case e8.MouseMove:
                return t.data.positions.forEach(t => {
                  this.replaceIds(t, e, ["id"]);
                }), t;
              case e8.ViewportResize:
                return !1;
              case e8.MediaInteraction:
              case e8.MouseInteraction:
              case e8.Scroll:
              case e8.CanvasMutation:
              case e8.Input:
                return this.replaceIds(t.data, e, ["id"]), t;
              case e8.StyleSheetRule:
              case e8.StyleDeclaration:
                return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
              case e8.Font:
                return t;
              case e8.Selection:
                return t.data.ranges.forEach(t => {
                  this.replaceIds(t, e, ["start", "end"]);
                }), t;
              case e8.AdoptedStyleSheet:
                return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), t.data.styles?.forEach(t => {
                  this.replaceStyleIds(t, e, ["styleId"]);
                }), t;
            }
        }
        return !1;
      }
      replace(e, t, r, n) {
        for (let i of n) (Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = cc11001100_hook("t[i]", e.getIds(r, t[i]), "assign") : t[i] = cc11001100_hook("t[i]", e.getId(r, t[i]), "assign"));
        return t;
      }
      replaceIds(e, t, r) {
        return this.replace(this.crossOriginIframeMirror, e, t, r);
      }
      replaceStyleIds(e, t, r) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, r);
      }
      replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
          this.replaceIdOnNode(e, t);
        });
      }
      patchRootIdOnNode(e, t) {
        e.type === g.Document || e.rootId || (e.rootId = cc11001100_hook("e.rootId", t, "assign")), "childNodes" in e && e.childNodes.forEach(e => {
          this.patchRootIdOnNode(e, t);
        });
      }
    }
    class tw {
      init() {}
      addShadowRoot() {}
      observeAttachShadow() {}
      reset() {}
    }
    class tb {
      constructor(e) {
        this.shadowDoms = cc11001100_hook("this.shadowDoms", new WeakSet(), "assign"), this.restoreHandlers = cc11001100_hook("this.restoreHandlers", [], "assign"), this.mutationCb = cc11001100_hook("this.mutationCb", e.mutationCb, "assign"), this.scrollCb = cc11001100_hook("this.scrollCb", e.scrollCb, "assign"), this.bypassOptions = cc11001100_hook("this.bypassOptions", e.bypassOptions, "assign"), this.mirror = cc11001100_hook("this.mirror", e.mirror, "assign"), this.init();
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document);
      }
      addShadowRoot(e, t) {
        if (!Z(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let r = cc11001100_hook("r", tl({
          ...this.bypassOptions,
          doc: t,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, e), "var-init");
        this.restoreHandlers.push(() => r.disconnect()), this.restoreHandlers.push(tc({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: e,
          mirror: this.mirror
        })), e3(() => {
          e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(tf({
            mirror: cc11001100_hook("mirror", this.mirror, "object-key-init"),
            stylesheetManager: cc11001100_hook("stylesheetManager", this.bypassOptions.stylesheetManager, "object-key-init")
          }, e));
        }, 0);
      }
      observeAttachShadow(e) {
        let t = cc11001100_hook("t", e7(e), "var-init"),
          r = cc11001100_hook("r", function (e) {
            try {
              return e.contentWindow;
            } catch (e) {}
          }(e), "var-init");
        t && r && this.patchAttachShadow(r.Element, t);
      }
      patchAttachShadow(e, t) {
        let r = cc11001100_hook("r", this, "var-init");
        this.restoreHandlers.push(eW(e.prototype, "attachShadow", function (e) {
          return function (n) {
            let i = cc11001100_hook("i", e.call(this, n), "var-init");
            return this.shadowRoot && e0(this) && r.addShadowRoot(this.shadowRoot, t), i;
          };
        }));
      }
      reset() {
        this.restoreHandlers.forEach(e => {
          try {
            e();
          } catch (e) {}
        }), this.restoreHandlers = cc11001100_hook("this.restoreHandlers", [], "assign"), this.shadowDoms = cc11001100_hook("this.shadowDoms", new WeakSet(), "assign"), this.bypassOptions.canvasManager.resetShadowRoots();
      }
    }
    class tE {
      reset() {}
      freeze() {}
      unfreeze() {}
      lock() {}
      unlock() {}
      snapshot() {}
      addWindow() {}
      addShadowRoot() {}
      resetShadowRoots() {}
    }
    class tk {
      constructor(e) {
        this.trackedLinkElements = cc11001100_hook("this.trackedLinkElements", new WeakSet(), "assign"), this.styleMirror = cc11001100_hook("this.styleMirror", new eQ(), "assign"), this.mutationCb = cc11001100_hook("this.mutationCb", e.mutationCb, "assign"), this.adoptedStyleSheetCb = cc11001100_hook("this.adoptedStyleSheetCb", e.adoptedStyleSheetCb, "assign");
      }
      attachLinkElement(e, t) {
        "_cssText" in t.attributes && this.mutationCb({
          adds: cc11001100_hook("adds", [], "object-key-init"),
          removes: cc11001100_hook("removes", [], "object-key-init"),
          texts: cc11001100_hook("texts", [], "object-key-init"),
          attributes: cc11001100_hook("attributes", [{
            id: cc11001100_hook("id", t.id, "object-key-init"),
            attributes: cc11001100_hook("attributes", t.attributes, "object-key-init")
          }], "object-key-init")
        }), this.trackLinkElement(e);
      }
      trackLinkElement(e) {
        this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
      }
      adoptStyleSheets(e, t) {
        if (0 === e.length) return;
        let r = cc11001100_hook("r", {
            id: cc11001100_hook("id", t, "object-key-init"),
            styleIds: cc11001100_hook("styleIds", [], "object-key-init")
          }, "var-init"),
          n = cc11001100_hook("n", [], "var-init");
        for (let t of e) {
          let e;
          this.styleMirror.has(t) ? e = cc11001100_hook("e", this.styleMirror.getId(t), "assign") : (e = cc11001100_hook("e", this.styleMirror.add(t), "assign"), n.push({
            styleId: cc11001100_hook("styleId", e, "object-key-init"),
            rules: cc11001100_hook("rules", Array.from(t.rules || CSSRule, (e, t) => ({
              rule: cc11001100_hook("rule", et(e), "object-key-init"),
              index: cc11001100_hook("index", t, "object-key-init")
            })), "object-key-init")
          })), r.styleIds.push(e);
        }
        n.length > 0 && (r.styles = cc11001100_hook("r.styles", n, "assign")), this.adoptedStyleSheetCb(r);
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = cc11001100_hook("this.trackedLinkElements", new WeakSet(), "assign");
      }
      trackStylesheetInLinkElement(e) {}
    }
    class tM {
      constructor() {
        this.nodeMap = cc11001100_hook("this.nodeMap", new WeakMap(), "assign"), this.active = cc11001100_hook("this.active", !1, "assign");
      }
      inOtherBuffer(e, t) {
        let r = cc11001100_hook("r", this.nodeMap.get(e), "var-init");
        return r && Array.from(r).some(e => e !== t);
      }
      add(e, t) {
        this.active || (this.active = cc11001100_hook("this.active", !0, "assign"), function (...e) {
          e2("requestAnimationFrame")(...e);
        }(() => {
          this.nodeMap = cc11001100_hook("this.nodeMap", new WeakMap(), "assign"), this.active = cc11001100_hook("this.active", !1, "assign");
        })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
      }
      destroy() {}
    }
    try {
      if (2 !== Array.from([1], e => 2 * e)[0]) {
        let e = cc11001100_hook("e", document.createElement("iframe"), "var-init");
        document.body.appendChild(e), Array.from = cc11001100_hook("Array.from", e.contentWindow?.Array.from || Array.from, "assign"), document.body.removeChild(e);
      }
    } catch (e) {
      console.debug("Unable to override Array.from", e);
    }
    let tI = cc11001100_hook("tI", new er(), "var-init");
    function tC(e = {}) {
      let t;
      let {
        emit: r,
        checkoutEveryNms: n,
        checkoutEveryNth: i,
        blockClass: l = "rr-block",
        blockSelector: c = null,
        unblockSelector: u = null,
        ignoreClass: d = "rr-ignore",
        ignoreSelector: h = null,
        maskAllText: p = !1,
        maskTextClass: f = "rr-mask",
        unmaskTextClass: m = null,
        maskTextSelector: y = null,
        unmaskTextSelector: g = null,
        inlineStylesheet: _ = !0,
        maskAllInputs: S,
        maskInputOptions: v,
        slimDOMOptions: w,
        maskAttributeFn: b,
        maskInputFn: E,
        maskTextFn: k,
        maxCanvasSize: M = null,
        packFn: I,
        sampling: C = {},
        dataURLOptions: T = {},
        mousemoveWait: R,
        recordDOM: x = !0,
        recordCanvas: D = !1,
        recordCrossOriginIframes: O = !1,
        recordAfter: N = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
        userTriggeredOnInput: A = !1,
        collectFonts: L = !1,
        inlineImages: P = !1,
        plugins: F,
        keepIframeSrcFn: U = () => !1,
        ignoreCSSAttributes: B = new Set([]),
        errorHandler: W,
        onMutation: z,
        getCanvasManager: j
      } = cc11001100_hook("", e, "var-init");
      s = cc11001100_hook("s", W, "assign");
      let $ = cc11001100_hook("$", !O || window.parent === window, "var-init"),
        H = cc11001100_hook("H", !1, "var-init");
      if (!$) try {
        window.parent.document && (H = cc11001100_hook("H", !1, "assign"));
      } catch (e) {
        H = cc11001100_hook("H", !0, "assign");
      }
      if ($ && !r) throw Error("emit function is required");
      if (!$ && !H) return () => {};
      void 0 !== R && void 0 === C.mousemove && (C.mousemove = cc11001100_hook("C.mousemove", R, "assign")), tI.reset();
      let q = cc11001100_hook("q", !0 === S ? {
          color: cc11001100_hook("color", !0, "object-key-init"),
          date: cc11001100_hook("date", !0, "object-key-init"),
          "datetime-local": cc11001100_hook("datetime-local", !0, "object-key-init"),
          email: cc11001100_hook("email", !0, "object-key-init"),
          month: cc11001100_hook("month", !0, "object-key-init"),
          number: cc11001100_hook("number", !0, "object-key-init"),
          range: cc11001100_hook("range", !0, "object-key-init"),
          search: cc11001100_hook("search", !0, "object-key-init"),
          tel: cc11001100_hook("tel", !0, "object-key-init"),
          text: cc11001100_hook("text", !0, "object-key-init"),
          time: cc11001100_hook("time", !0, "object-key-init"),
          url: cc11001100_hook("url", !0, "object-key-init"),
          week: cc11001100_hook("week", !0, "object-key-init"),
          textarea: cc11001100_hook("textarea", !0, "object-key-init"),
          select: cc11001100_hook("select", !0, "object-key-init"),
          radio: cc11001100_hook("radio", !0, "object-key-init"),
          checkbox: cc11001100_hook("checkbox", !0, "object-key-init")
        } : void 0 !== v ? v : {}, "var-init"),
        V = cc11001100_hook("V", !0 === w || "all" === w ? {
          script: cc11001100_hook("script", !0, "object-key-init"),
          comment: cc11001100_hook("comment", !0, "object-key-init"),
          headFavicon: cc11001100_hook("headFavicon", !0, "object-key-init"),
          headWhitespace: cc11001100_hook("headWhitespace", !0, "object-key-init"),
          headMetaSocial: cc11001100_hook("headMetaSocial", !0, "object-key-init"),
          headMetaRobots: cc11001100_hook("headMetaRobots", !0, "object-key-init"),
          headMetaHttpEquiv: cc11001100_hook("headMetaHttpEquiv", !0, "object-key-init"),
          headMetaVerification: cc11001100_hook("headMetaVerification", !0, "object-key-init"),
          headMetaAuthorship: cc11001100_hook("headMetaAuthorship", "all" === w, "object-key-init"),
          headMetaDescKeywords: cc11001100_hook("headMetaDescKeywords", "all" === w, "object-key-init")
        } : w || {}, "var-init");
      !function (e = window) {
        "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = cc11001100_hook("e.NodeList.prototype.forEach", Array.prototype.forEach, "assign")), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = cc11001100_hook("e.DOMTokenList.prototype.forEach", Array.prototype.forEach, "assign")), Node.prototype.contains || (Node.prototype.contains = cc11001100_hook("Node.prototype.contains", (...e) => {
          let t = cc11001100_hook("t", e[0], "var-init");
          if (!(0 in e)) throw TypeError("1 argument is required");
          do if (this === t) return !0; while (t = cc11001100_hook("t", t && t.parentNode, "assign"));
          return !1;
        }, "assign"));
      }();
      let K = cc11001100_hook("K", 0, "var-init"),
        G = cc11001100_hook("G", e => {
          for (let t of F || []) t.eventProcessor && (e = cc11001100_hook("e", t.eventProcessor(e), "assign"));
          return I && !H && (e = cc11001100_hook("e", I(e), "assign")), e;
        }, "var-init");
      o = cc11001100_hook("o", (e, s) => {
        if (e.timestamp = cc11001100_hook("e.timestamp", ez(), "assign"), to[0]?.isFrozen() && e.type !== e5.FullSnapshot && !(e.type === e5.IncrementalSnapshot && e.data.source === e8.Mutation) && to.forEach(e => e.unfreeze()), $) r?.(G(e), s);else if (H) {
          let t = cc11001100_hook("t", {
            type: cc11001100_hook("type", "rrweb", "object-key-init"),
            event: cc11001100_hook("event", G(e), "object-key-init"),
            origin: cc11001100_hook("origin", window.location.origin, "object-key-init"),
            isCheckout: cc11001100_hook("isCheckout", s, "object-key-init")
          }, "var-init");
          window.parent.postMessage(t, "*");
        }
        if (e.type === e5.FullSnapshot) t = cc11001100_hook("t", e, "assign"), K = cc11001100_hook("K", 0, "assign");else if (e.type === e5.IncrementalSnapshot) {
          if (e.data.source === e8.Mutation && e.data.isAttachIframe) return;
          K++;
          let r = cc11001100_hook("r", i && K >= i, "var-init"),
            s = cc11001100_hook("s", n && t && e.timestamp - t.timestamp > n, "var-init");
          (r || s) && ei(!0);
        }
      }, "assign");
      let J = cc11001100_hook("J", e => {
          o({
            type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
            data: {
              source: cc11001100_hook("source", e8.Mutation, "object-key-init"),
              ...e
            }
          });
        }, "var-init"),
        Y = cc11001100_hook("Y", e => o({
          type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
          data: {
            source: cc11001100_hook("source", e8.Scroll, "object-key-init"),
            ...e
          }
        }), "var-init"),
        X = cc11001100_hook("X", e => o({
          type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
          data: {
            source: cc11001100_hook("source", e8.CanvasMutation, "object-key-init"),
            ...e
          }
        }), "var-init"),
        Q = cc11001100_hook("Q", new tk({
          mutationCb: cc11001100_hook("mutationCb", J, "object-key-init"),
          adoptedStyleSheetCb: cc11001100_hook("adoptedStyleSheetCb", e => o({
            type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
            data: {
              source: cc11001100_hook("source", e8.AdoptedStyleSheet, "object-key-init"),
              ...e
            }
          }), "object-key-init")
        }), "var-init"),
        Z = cc11001100_hook("Z", "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new tS() : new tv({
          mirror: cc11001100_hook("mirror", tI, "object-key-init"),
          mutationCb: cc11001100_hook("mutationCb", J, "object-key-init"),
          stylesheetManager: cc11001100_hook("stylesheetManager", Q, "object-key-init"),
          recordCrossOriginIframes: cc11001100_hook("recordCrossOriginIframes", O, "object-key-init"),
          wrappedEmit: cc11001100_hook("wrappedEmit", o, "object-key-init")
        }), "var-init");
      for (let e of F || []) e.getMirror && e.getMirror({
        nodeMirror: cc11001100_hook("nodeMirror", tI, "object-key-init"),
        crossOriginIframeMirror: cc11001100_hook("crossOriginIframeMirror", Z.crossOriginIframeMirror, "object-key-init"),
        crossOriginIframeStyleMirror: cc11001100_hook("crossOriginIframeStyleMirror", Z.crossOriginIframeStyleMirror, "object-key-init")
      });
      let ee = cc11001100_hook("ee", new tM(), "var-init"),
        et = cc11001100_hook("et", function (e, t) {
          try {
            return e ? e(t) : new tE();
          } catch {
            return console.warn("Unable to initialize CanvasManager"), new tE();
          }
        }(j, {
          mirror: cc11001100_hook("mirror", tI, "object-key-init"),
          win: cc11001100_hook("win", window, "object-key-init"),
          mutationCb: cc11001100_hook("mutationCb", e => o({
            type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
            data: {
              source: cc11001100_hook("source", e8.CanvasMutation, "object-key-init"),
              ...e
            }
          }), "object-key-init"),
          recordCanvas: cc11001100_hook("recordCanvas", D, "object-key-init"),
          blockClass: cc11001100_hook("blockClass", l, "object-key-init"),
          blockSelector: cc11001100_hook("blockSelector", c, "object-key-init"),
          unblockSelector: cc11001100_hook("unblockSelector", u, "object-key-init"),
          maxCanvasSize: cc11001100_hook("maxCanvasSize", M, "object-key-init"),
          sampling: cc11001100_hook("sampling", C.canvas, "object-key-init"),
          dataURLOptions: cc11001100_hook("dataURLOptions", T, "object-key-init"),
          errorHandler: cc11001100_hook("errorHandler", W, "object-key-init")
        }), "var-init"),
        en = cc11001100_hook("en", "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new tw() : new tb({
          mutationCb: cc11001100_hook("mutationCb", J, "object-key-init"),
          scrollCb: cc11001100_hook("scrollCb", Y, "object-key-init"),
          bypassOptions: {
            onMutation: cc11001100_hook("onMutation", z, "object-key-init"),
            blockClass: cc11001100_hook("blockClass", l, "object-key-init"),
            blockSelector: cc11001100_hook("blockSelector", c, "object-key-init"),
            unblockSelector: cc11001100_hook("unblockSelector", u, "object-key-init"),
            maskAllText: cc11001100_hook("maskAllText", p, "object-key-init"),
            maskTextClass: cc11001100_hook("maskTextClass", f, "object-key-init"),
            unmaskTextClass: cc11001100_hook("unmaskTextClass", m, "object-key-init"),
            maskTextSelector: cc11001100_hook("maskTextSelector", y, "object-key-init"),
            unmaskTextSelector: cc11001100_hook("unmaskTextSelector", g, "object-key-init"),
            inlineStylesheet: cc11001100_hook("inlineStylesheet", _, "object-key-init"),
            maskInputOptions: cc11001100_hook("maskInputOptions", q, "object-key-init"),
            dataURLOptions: cc11001100_hook("dataURLOptions", T, "object-key-init"),
            maskAttributeFn: cc11001100_hook("maskAttributeFn", b, "object-key-init"),
            maskTextFn: cc11001100_hook("maskTextFn", k, "object-key-init"),
            maskInputFn: cc11001100_hook("maskInputFn", E, "object-key-init"),
            recordCanvas: cc11001100_hook("recordCanvas", D, "object-key-init"),
            inlineImages: cc11001100_hook("inlineImages", P, "object-key-init"),
            sampling: cc11001100_hook("sampling", C, "object-key-init"),
            slimDOMOptions: cc11001100_hook("slimDOMOptions", V, "object-key-init"),
            iframeManager: cc11001100_hook("iframeManager", Z, "object-key-init"),
            stylesheetManager: cc11001100_hook("stylesheetManager", Q, "object-key-init"),
            canvasManager: cc11001100_hook("canvasManager", et, "object-key-init"),
            keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", U, "object-key-init"),
            processedNodeManager: cc11001100_hook("processedNodeManager", ee, "object-key-init")
          },
          mirror: cc11001100_hook("mirror", tI, "object-key-init")
        }), "var-init"),
        ei = cc11001100_hook("ei", (e = !1) => {
          if (!x) return;
          o({
            type: cc11001100_hook("type", e5.Meta, "object-key-init"),
            data: {
              href: cc11001100_hook("href", window.location.href, "object-key-init"),
              width: cc11001100_hook("width", eH(), "object-key-init"),
              height: cc11001100_hook("height", e$(), "object-key-init")
            }
          }, e), Q.reset(), en.init(), to.forEach(e => e.lock());
          let t = cc11001100_hook("t", function (e, t) {
            let {
              mirror: r = new er(),
              blockClass: n = "rr-block",
              blockSelector: i = null,
              unblockSelector: s = null,
              maskAllText: o = !1,
              maskTextClass: a = "rr-mask",
              unmaskTextClass: l = null,
              maskTextSelector: c = null,
              unmaskTextSelector: u = null,
              inlineStylesheet: d = !0,
              inlineImages: h = !1,
              recordCanvas: p = !1,
              maskAllInputs: f = !1,
              maskAttributeFn: m,
              maskTextFn: y,
              maskInputFn: g,
              slimDOM: _ = !1,
              dataURLOptions: S,
              preserveWhiteSpace: v,
              onSerialize: w,
              onIframeLoad: b,
              iframeLoadTimeout: E,
              onStylesheetLoad: k,
              stylesheetLoadTimeout: M,
              keepIframeSrcFn: I = () => !1
            } = cc11001100_hook("", t, "var-init");
            return eL(e, {
              doc: cc11001100_hook("doc", e, "object-key-init"),
              mirror: cc11001100_hook("mirror", r, "object-key-init"),
              blockClass: cc11001100_hook("blockClass", n, "object-key-init"),
              blockSelector: cc11001100_hook("blockSelector", i, "object-key-init"),
              unblockSelector: cc11001100_hook("unblockSelector", s, "object-key-init"),
              maskAllText: cc11001100_hook("maskAllText", o, "object-key-init"),
              maskTextClass: cc11001100_hook("maskTextClass", a, "object-key-init"),
              unmaskTextClass: cc11001100_hook("unmaskTextClass", l, "object-key-init"),
              maskTextSelector: cc11001100_hook("maskTextSelector", c, "object-key-init"),
              unmaskTextSelector: cc11001100_hook("unmaskTextSelector", u, "object-key-init"),
              skipChild: cc11001100_hook("skipChild", !1, "object-key-init"),
              inlineStylesheet: cc11001100_hook("inlineStylesheet", d, "object-key-init"),
              maskInputOptions: cc11001100_hook("maskInputOptions", !0 === f ? {
                color: cc11001100_hook("color", !0, "object-key-init"),
                date: cc11001100_hook("date", !0, "object-key-init"),
                "datetime-local": cc11001100_hook("datetime-local", !0, "object-key-init"),
                email: cc11001100_hook("email", !0, "object-key-init"),
                month: cc11001100_hook("month", !0, "object-key-init"),
                number: cc11001100_hook("number", !0, "object-key-init"),
                range: cc11001100_hook("range", !0, "object-key-init"),
                search: cc11001100_hook("search", !0, "object-key-init"),
                tel: cc11001100_hook("tel", !0, "object-key-init"),
                text: cc11001100_hook("text", !0, "object-key-init"),
                time: cc11001100_hook("time", !0, "object-key-init"),
                url: cc11001100_hook("url", !0, "object-key-init"),
                week: cc11001100_hook("week", !0, "object-key-init"),
                textarea: cc11001100_hook("textarea", !0, "object-key-init"),
                select: cc11001100_hook("select", !0, "object-key-init")
              } : !1 === f ? {} : f, "object-key-init"),
              maskAttributeFn: cc11001100_hook("maskAttributeFn", m, "object-key-init"),
              maskTextFn: cc11001100_hook("maskTextFn", y, "object-key-init"),
              maskInputFn: cc11001100_hook("maskInputFn", g, "object-key-init"),
              slimDOMOptions: cc11001100_hook("slimDOMOptions", !0 === _ || "all" === _ ? {
                script: cc11001100_hook("script", !0, "object-key-init"),
                comment: cc11001100_hook("comment", !0, "object-key-init"),
                headFavicon: cc11001100_hook("headFavicon", !0, "object-key-init"),
                headWhitespace: cc11001100_hook("headWhitespace", !0, "object-key-init"),
                headMetaDescKeywords: cc11001100_hook("headMetaDescKeywords", "all" === _, "object-key-init"),
                headMetaSocial: cc11001100_hook("headMetaSocial", !0, "object-key-init"),
                headMetaRobots: cc11001100_hook("headMetaRobots", !0, "object-key-init"),
                headMetaHttpEquiv: cc11001100_hook("headMetaHttpEquiv", !0, "object-key-init"),
                headMetaAuthorship: cc11001100_hook("headMetaAuthorship", !0, "object-key-init"),
                headMetaVerification: cc11001100_hook("headMetaVerification", !0, "object-key-init")
              } : !1 === _ ? {} : _, "object-key-init"),
              dataURLOptions: cc11001100_hook("dataURLOptions", S, "object-key-init"),
              inlineImages: cc11001100_hook("inlineImages", h, "object-key-init"),
              recordCanvas: cc11001100_hook("recordCanvas", p, "object-key-init"),
              preserveWhiteSpace: cc11001100_hook("preserveWhiteSpace", v, "object-key-init"),
              onSerialize: cc11001100_hook("onSerialize", w, "object-key-init"),
              onIframeLoad: cc11001100_hook("onIframeLoad", b, "object-key-init"),
              iframeLoadTimeout: cc11001100_hook("iframeLoadTimeout", E, "object-key-init"),
              onStylesheetLoad: cc11001100_hook("onStylesheetLoad", k, "object-key-init"),
              stylesheetLoadTimeout: cc11001100_hook("stylesheetLoadTimeout", M, "object-key-init"),
              keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", I, "object-key-init"),
              newlyAddedElement: cc11001100_hook("newlyAddedElement", !1, "object-key-init")
            });
          }(document, {
            mirror: cc11001100_hook("mirror", tI, "object-key-init"),
            blockClass: cc11001100_hook("blockClass", l, "object-key-init"),
            blockSelector: cc11001100_hook("blockSelector", c, "object-key-init"),
            unblockSelector: cc11001100_hook("unblockSelector", u, "object-key-init"),
            maskAllText: cc11001100_hook("maskAllText", p, "object-key-init"),
            maskTextClass: cc11001100_hook("maskTextClass", f, "object-key-init"),
            unmaskTextClass: cc11001100_hook("unmaskTextClass", m, "object-key-init"),
            maskTextSelector: cc11001100_hook("maskTextSelector", y, "object-key-init"),
            unmaskTextSelector: cc11001100_hook("unmaskTextSelector", g, "object-key-init"),
            inlineStylesheet: cc11001100_hook("inlineStylesheet", _, "object-key-init"),
            maskAllInputs: cc11001100_hook("maskAllInputs", q, "object-key-init"),
            maskAttributeFn: cc11001100_hook("maskAttributeFn", b, "object-key-init"),
            maskInputFn: cc11001100_hook("maskInputFn", E, "object-key-init"),
            maskTextFn: cc11001100_hook("maskTextFn", k, "object-key-init"),
            slimDOM: cc11001100_hook("slimDOM", V, "object-key-init"),
            dataURLOptions: cc11001100_hook("dataURLOptions", T, "object-key-init"),
            recordCanvas: cc11001100_hook("recordCanvas", D, "object-key-init"),
            inlineImages: cc11001100_hook("inlineImages", P, "object-key-init"),
            onSerialize: cc11001100_hook("onSerialize", e => {
              eJ(e, tI) && Z.addIframe(e), eY(e, tI) && Q.trackLinkElement(e), eX(e) && en.addShadowRoot(e.shadowRoot, document);
            }, "object-key-init"),
            onIframeLoad: cc11001100_hook("onIframeLoad", (e, t) => {
              Z.attachIframe(e, t), e.contentWindow && et.addWindow(e.contentWindow), en.observeAttachShadow(e);
            }, "object-key-init"),
            onStylesheetLoad: cc11001100_hook("onStylesheetLoad", (e, t) => {
              Q.attachLinkElement(e, t);
            }, "object-key-init"),
            keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", U, "object-key-init")
          }), "var-init");
          if (!t) return console.warn("Failed to snapshot the document");
          o({
            type: cc11001100_hook("type", e5.FullSnapshot, "object-key-init"),
            data: {
              node: cc11001100_hook("node", t, "object-key-init"),
              initialOffset: cc11001100_hook("initialOffset", ej(window), "object-key-init")
            }
          }), to.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Q.adoptStyleSheets(document.adoptedStyleSheets, tI.getId(document));
        }, "var-init");
      a = cc11001100_hook("a", ei, "assign");
      try {
        let e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", e => ts(tm)({
            onMutation: cc11001100_hook("onMutation", z, "object-key-init"),
            mutationCb: cc11001100_hook("mutationCb", J, "object-key-init"),
            mousemoveCb: cc11001100_hook("mousemoveCb", (e, t) => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", t, "object-key-init"),
                positions: cc11001100_hook("positions", e, "object-key-init")
              }
            }), "object-key-init"),
            mouseInteractionCb: cc11001100_hook("mouseInteractionCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.MouseInteraction, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            scrollCb: cc11001100_hook("scrollCb", Y, "object-key-init"),
            viewportResizeCb: cc11001100_hook("viewportResizeCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.ViewportResize, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            inputCb: cc11001100_hook("inputCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.Input, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            mediaInteractionCb: cc11001100_hook("mediaInteractionCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.MediaInteraction, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            styleSheetRuleCb: cc11001100_hook("styleSheetRuleCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.StyleSheetRule, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            styleDeclarationCb: cc11001100_hook("styleDeclarationCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.StyleDeclaration, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            canvasMutationCb: cc11001100_hook("canvasMutationCb", X, "object-key-init"),
            fontCb: cc11001100_hook("fontCb", e => o({
              type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
              data: {
                source: cc11001100_hook("source", e8.Font, "object-key-init"),
                ...e
              }
            }), "object-key-init"),
            selectionCb: cc11001100_hook("selectionCb", e => {
              o({
                type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
                data: {
                  source: cc11001100_hook("source", e8.Selection, "object-key-init"),
                  ...e
                }
              });
            }, "object-key-init"),
            customElementCb: cc11001100_hook("customElementCb", e => {
              o({
                type: cc11001100_hook("type", e5.IncrementalSnapshot, "object-key-init"),
                data: {
                  source: cc11001100_hook("source", e8.CustomElement, "object-key-init"),
                  ...e
                }
              });
            }, "object-key-init"),
            blockClass: cc11001100_hook("blockClass", l, "object-key-init"),
            ignoreClass: cc11001100_hook("ignoreClass", d, "object-key-init"),
            ignoreSelector: cc11001100_hook("ignoreSelector", h, "object-key-init"),
            maskAllText: cc11001100_hook("maskAllText", p, "object-key-init"),
            maskTextClass: cc11001100_hook("maskTextClass", f, "object-key-init"),
            unmaskTextClass: cc11001100_hook("unmaskTextClass", m, "object-key-init"),
            maskTextSelector: cc11001100_hook("maskTextSelector", y, "object-key-init"),
            unmaskTextSelector: cc11001100_hook("unmaskTextSelector", g, "object-key-init"),
            maskInputOptions: cc11001100_hook("maskInputOptions", q, "object-key-init"),
            inlineStylesheet: cc11001100_hook("inlineStylesheet", _, "object-key-init"),
            sampling: cc11001100_hook("sampling", C, "object-key-init"),
            recordDOM: cc11001100_hook("recordDOM", x, "object-key-init"),
            recordCanvas: cc11001100_hook("recordCanvas", D, "object-key-init"),
            inlineImages: cc11001100_hook("inlineImages", P, "object-key-init"),
            userTriggeredOnInput: cc11001100_hook("userTriggeredOnInput", A, "object-key-init"),
            collectFonts: cc11001100_hook("collectFonts", L, "object-key-init"),
            doc: cc11001100_hook("doc", e, "object-key-init"),
            maskAttributeFn: cc11001100_hook("maskAttributeFn", b, "object-key-init"),
            maskInputFn: cc11001100_hook("maskInputFn", E, "object-key-init"),
            maskTextFn: cc11001100_hook("maskTextFn", k, "object-key-init"),
            keepIframeSrcFn: cc11001100_hook("keepIframeSrcFn", U, "object-key-init"),
            blockSelector: cc11001100_hook("blockSelector", c, "object-key-init"),
            unblockSelector: cc11001100_hook("unblockSelector", u, "object-key-init"),
            slimDOMOptions: cc11001100_hook("slimDOMOptions", V, "object-key-init"),
            dataURLOptions: cc11001100_hook("dataURLOptions", T, "object-key-init"),
            mirror: cc11001100_hook("mirror", tI, "object-key-init"),
            iframeManager: cc11001100_hook("iframeManager", Z, "object-key-init"),
            stylesheetManager: cc11001100_hook("stylesheetManager", Q, "object-key-init"),
            shadowDomManager: cc11001100_hook("shadowDomManager", en, "object-key-init"),
            processedNodeManager: cc11001100_hook("processedNodeManager", ee, "object-key-init"),
            canvasManager: cc11001100_hook("canvasManager", et, "object-key-init"),
            ignoreCSSAttributes: cc11001100_hook("ignoreCSSAttributes", B, "object-key-init"),
            plugins: cc11001100_hook("plugins", F?.filter(e => e.observer)?.map(e => ({
              observer: cc11001100_hook("observer", e.observer, "object-key-init"),
              options: cc11001100_hook("options", e.options, "object-key-init"),
              callback: cc11001100_hook("callback", t => o({
                type: cc11001100_hook("type", e5.Plugin, "object-key-init"),
                data: {
                  plugin: cc11001100_hook("plugin", e.name, "object-key-init"),
                  payload: cc11001100_hook("payload", t, "object-key-init")
                }
              }), "object-key-init")
            })) || [], "object-key-init")
          }, {}), "var-init");
        Z.addLoadListener(r => {
          try {
            e.push(t(r.contentDocument));
          } catch (e) {
            console.warn(e);
          }
        });
        let r = cc11001100_hook("r", () => {
          ei(), e.push(t(document));
        }, "var-init");
        return "interactive" === document.readyState || "complete" === document.readyState ? r() : (e.push(eP("DOMContentLoaded", () => {
          o({
            type: cc11001100_hook("type", e5.DomContentLoaded, "object-key-init"),
            data: {}
          }), "DOMContentLoaded" === N && r();
        })), e.push(eP("load", () => {
          o({
            type: cc11001100_hook("type", e5.Load, "object-key-init"),
            data: {}
          }), "load" === N && r();
        }, window))), () => {
          e.forEach(e => e()), ee.destroy(), a = cc11001100_hook("a", void 0, "assign"), s = cc11001100_hook("s", void 0, "assign");
        };
      } catch (e) {
        console.warn(e);
      }
    }
    function tT(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e > 9999999999 ? e : 1e3 * e;
    }
    function tR(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e > 9999999999 ? e / 1e3 : e;
    }
    function tx(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
        type: cc11001100_hook("type", e5.Custom, "object-key-init"),
        timestamp: cc11001100_hook("timestamp", 1e3 * (t.timestamp || 0), "object-key-init"),
        data: {
          tag: cc11001100_hook("tag", "breadcrumb", "object-key-init"),
          payload: cc11001100_hook("payload", (0, b.Fv)(t, 10, 1e3), "object-key-init")
        }
      }), "console" === t.category)));
    }
    function tD(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.closest("button,a"), "var-init");
      return t || e;
    }
    function tO(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", tN(e), "var-init");
      return t && t instanceof Element ? tD(t) : t;
    }
    function tN(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "object" == typeof e && e && "target" in e ? e.target : e;
    }
    tC.mirror = cc11001100_hook("tC.mirror", tI, "assign"), tC.takeFullSnapshot = cc11001100_hook("tC.takeFullSnapshot", function (e) {
      if (!a) throw Error("please take full snapshot after start recording");
      a(e);
    }, "assign");
    let tA = cc11001100_hook("tA", new Set([e8.Mutation, e8.StyleSheetRule, e8.StyleDeclaration, e8.AdoptedStyleSheet, e8.CanvasMutation, e8.Selection, e8.MediaInteraction]), "var-init");
    class tL {
      constructor(e, t, r = tx) {
        this._lastMutation = cc11001100_hook("this._lastMutation", 0, "assign"), this._lastScroll = cc11001100_hook("this._lastScroll", 0, "assign"), this._clicks = cc11001100_hook("this._clicks", [], "assign"), this._timeout = cc11001100_hook("this._timeout", t.timeout / 1e3, "assign"), this._threshold = cc11001100_hook("this._threshold", t.threshold / 1e3, "assign"), this._scrollTimeout = cc11001100_hook("this._scrollTimeout", t.scrollTimeout / 1e3, "assign"), this._replay = cc11001100_hook("this._replay", e, "assign"), this._ignoreSelector = cc11001100_hook("this._ignoreSelector", t.ignoreSelector, "assign"), this._addBreadcrumbEvent = cc11001100_hook("this._addBreadcrumbEvent", r, "assign");
      }
      addListeners() {
        var e;
        let t = cc11001100_hook("t", (e = cc11001100_hook("e", () => {
          this._lastMutation = cc11001100_hook("this._lastMutation", tF(), "assign");
        }, "assign"), l || (l = cc11001100_hook("l", [], "assign"), (0, E.hl)(J, "open", function (e) {
          return function (...t) {
            if (l) try {
              l.forEach(e => e());
            } catch (e) {}
            return e.apply(J, t);
          };
        })), l.push(e), () => {
          let t = cc11001100_hook("t", l ? l.indexOf(e) : -1, "var-init");
          t > -1 && l.splice(t, 1);
        }), "var-init");
        this._teardown = cc11001100_hook("this._teardown", () => {
          t(), this._clicks = cc11001100_hook("this._clicks", [], "assign"), this._lastMutation = cc11001100_hook("this._lastMutation", 0, "assign"), this._lastScroll = cc11001100_hook("this._lastScroll", 0, "assign");
        }, "assign");
      }
      removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
      }
      handleClick(e, t) {
        var r;
        if (r = cc11001100_hook("r", this._ignoreSelector, "assign"), !tP.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || r && t.matches(r) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp)) return;
        let n = cc11001100_hook("n", {
          timestamp: cc11001100_hook("timestamp", tR(e.timestamp), "object-key-init"),
          clickBreadcrumb: cc11001100_hook("clickBreadcrumb", e, "object-key-init"),
          clickCount: cc11001100_hook("clickCount", 0, "object-key-init"),
          node: cc11001100_hook("node", t, "object-key-init")
        }, "var-init");
        this._clicks.some(e => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks());
      }
      registerMutation(e = Date.now()) {
        this._lastMutation = cc11001100_hook("this._lastMutation", tR(e), "assign");
      }
      registerScroll(e = Date.now()) {
        this._lastScroll = cc11001100_hook("this._lastScroll", tR(e), "assign");
      }
      registerClick(e) {
        let t = cc11001100_hook("t", tD(e), "var-init");
        this._handleMultiClick(t);
      }
      _handleMultiClick(e) {
        this._getClicks(e).forEach(e => {
          e.clickCount++;
        });
      }
      _getClicks(e) {
        return this._clicks.filter(t => t.node === e);
      }
      _checkClicks() {
        let e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", tF(), "var-init");
        for (let r of (this._clicks.forEach(r => {
          !r.mutationAfter && this._lastMutation && (r.mutationAfter = cc11001100_hook("r.mutationAfter", r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0, "assign")), !r.scrollAfter && this._lastScroll && (r.scrollAfter = cc11001100_hook("r.scrollAfter", r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0, "assign")), r.timestamp + this._timeout <= t && e.push(r);
        }), e)) {
          let e = cc11001100_hook("e", this._clicks.indexOf(r), "var-init");
          e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
      }
      _generateBreadcrumbs(e) {
        let t = cc11001100_hook("t", this._replay, "var-init"),
          r = cc11001100_hook("r", e.scrollAfter && e.scrollAfter <= this._scrollTimeout, "var-init"),
          n = cc11001100_hook("n", e.mutationAfter && e.mutationAfter <= this._threshold, "var-init"),
          {
            clickCount: i,
            clickBreadcrumb: s
          } = cc11001100_hook("", e, "var-init");
        if (!r && !n) {
          let r = cc11001100_hook("r", 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout), "var-init"),
            n = cc11001100_hook("n", r < 1e3 * this._timeout ? "mutation" : "timeout", "var-init"),
            o = cc11001100_hook("o", {
              type: cc11001100_hook("type", "default", "object-key-init"),
              message: cc11001100_hook("message", s.message, "object-key-init"),
              timestamp: cc11001100_hook("timestamp", s.timestamp, "object-key-init"),
              category: cc11001100_hook("category", "ui.slowClickDetected", "object-key-init"),
              data: {
                ...s.data,
                url: J.location.href,
                route: t.getCurrentRoute(),
                timeAfterClickMs: r,
                endReason: n,
                clickCount: i || 1
              }
            }, "var-init");
          this._addBreadcrumbEvent(t, o);
          return;
        }
        if (i > 1) {
          let e = cc11001100_hook("e", {
            type: cc11001100_hook("type", "default", "object-key-init"),
            message: cc11001100_hook("message", s.message, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", s.timestamp, "object-key-init"),
            category: cc11001100_hook("category", "ui.multiClick", "object-key-init"),
            data: {
              ...s.data,
              url: J.location.href,
              route: t.getCurrentRoute(),
              clickCount: i,
              metric: !0
            }
          }, "var-init");
          this._addBreadcrumbEvent(t, e);
        }
      }
      _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = cc11001100_hook("this._checkClickTimeout", (0, $.iK)(() => this._checkClicks(), 1e3), "assign");
      }
    }
    let tP = cc11001100_hook("tP", ["A", "BUTTON", "INPUT"], "var-init");
    function tF() {
      return Date.now() / 1e3;
    }
    function tU(e) {
      cc11001100_hook("e", e, "function-parameter");
      return {
        timestamp: cc11001100_hook("timestamp", Date.now() / 1e3, "object-key-init"),
        type: cc11001100_hook("type", "default", "object-key-init"),
        ...e
      };
    }
    (y = cc11001100_hook("y", v || (v = cc11001100_hook("v", {}, "assign")), "assign"))[y.Document = cc11001100_hook("y.Document", 0, "assign")] = cc11001100_hook("(y = v || (v = {}))[y.Document = 0]", "Document", "assign"), y[y.DocumentType = cc11001100_hook("y.DocumentType", 1, "assign")] = cc11001100_hook("y[y.DocumentType = 1]", "DocumentType", "assign"), y[y.Element = cc11001100_hook("y.Element", 2, "assign")] = cc11001100_hook("y[y.Element = 2]", "Element", "assign"), y[y.Text = cc11001100_hook("y.Text", 3, "assign")] = cc11001100_hook("y[y.Text = 3]", "Text", "assign"), y[y.CDATA = cc11001100_hook("y.CDATA", 4, "assign")] = cc11001100_hook("y[y.CDATA = 4]", "CDATA", "assign"), y[y.Comment = cc11001100_hook("y.Comment", 5, "assign")] = cc11001100_hook("y[y.Comment = 5]", "Comment", "assign");
    let tB = cc11001100_hook("tB", new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]), "var-init"),
      tW = cc11001100_hook("tW", e => t => {
        if (!e.isEnabled()) return;
        let r = cc11001100_hook("r", function (e) {
          let {
            target: t,
            message: r
          } = cc11001100_hook("", function (e) {
            let t;
            let r = cc11001100_hook("r", "click" === e.name, "var-init"),
              n = cc11001100_hook("n", null, "var-init");
            try {
              n = cc11001100_hook("n", r ? tO(e.event) : tN(e.event), "assign"), t = cc11001100_hook("t", (0, k.Rt)(n, {
                maxStringLength: cc11001100_hook("maxStringLength", 200, "object-key-init")
              }) || "<unknown>", "assign");
            } catch (e) {
              t = cc11001100_hook("t", "<unknown>", "assign");
            }
            return {
              target: cc11001100_hook("target", n, "object-key-init"),
              message: cc11001100_hook("message", t, "object-key-init")
            };
          }(e), "var-init");
          return tU({
            category: cc11001100_hook("category", `ui.${e.name}`, "object-key-init"),
            ...tz(t, r)
          });
        }(t), "var-init");
        if (!r) return;
        let n = cc11001100_hook("n", "click" === t.name, "var-init"),
          i = cc11001100_hook("i", n ? t.event : void 0, "var-init");
        n && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && function (e, t, r) {
          e.handleClick(t, r);
        }(e.clickDetector, r, tO(t.event)), tx(e, r);
      }, "var-init");
    function tz(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r = cc11001100_hook("r", tC.mirror.getId(e), "var-init"),
        n = cc11001100_hook("n", r && tC.mirror.getNode(r), "var-init"),
        i = cc11001100_hook("i", n && tC.mirror.getMeta(n), "var-init"),
        s = cc11001100_hook("s", i && i.type === v.Element ? i : null, "var-init");
      return {
        message: cc11001100_hook("message", t, "object-key-init"),
        data: cc11001100_hook("data", s ? {
          nodeId: cc11001100_hook("nodeId", r, "object-key-init"),
          node: {
            id: cc11001100_hook("id", r, "object-key-init"),
            tagName: cc11001100_hook("tagName", s.tagName, "object-key-init"),
            textContent: cc11001100_hook("textContent", Array.from(s.childNodes).map(e => e.type === v.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""), "object-key-init"),
            attributes: cc11001100_hook("attributes", function (e) {
              let t = cc11001100_hook("t", {}, "var-init");
              for (let r in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = cc11001100_hook("e[\"data-sentry-component\"]", e["data-sentry-element"], "assign")), e) if (tB.has(r)) {
                let n = cc11001100_hook("n", r, "var-init");
                ("data-testid" === r || "data-test-id" === r) && (n = cc11001100_hook("n", "testId", "assign")), t[n] = cc11001100_hook("t[n]", e[r], "assign");
              }
              return t;
            }(s.attributes), "object-key-init")
          }
        } : {}, "object-key-init")
      };
    }
    let tj = cc11001100_hook("tj", {
      resource: function (e) {
        let {
          entryType: t,
          initiatorType: r,
          name: n,
          responseEnd: i,
          startTime: s,
          decodedBodySize: o,
          encodedBodySize: a,
          responseStatus: l,
          transferSize: c
        } = cc11001100_hook("", e, "var-init");
        return ["fetch", "xmlhttprequest"].includes(r) ? null : {
          type: cc11001100_hook("type", `${t}.${r}`, "object-key-init"),
          start: cc11001100_hook("start", tq(s), "object-key-init"),
          end: cc11001100_hook("end", tq(i), "object-key-init"),
          name: cc11001100_hook("name", n, "object-key-init"),
          data: {
            size: cc11001100_hook("size", c, "object-key-init"),
            statusCode: cc11001100_hook("statusCode", l, "object-key-init"),
            decodedBodySize: cc11001100_hook("decodedBodySize", o, "object-key-init"),
            encodedBodySize: cc11001100_hook("encodedBodySize", a, "object-key-init")
          }
        };
      },
      paint: function (e) {
        let {
            duration: t,
            entryType: r,
            name: n,
            startTime: i
          } = cc11001100_hook("", e, "var-init"),
          s = cc11001100_hook("s", tq(i), "var-init");
        return {
          type: cc11001100_hook("type", r, "object-key-init"),
          name: cc11001100_hook("name", n, "object-key-init"),
          start: cc11001100_hook("start", s, "object-key-init"),
          end: cc11001100_hook("end", s + t, "object-key-init"),
          data: cc11001100_hook("data", void 0, "object-key-init")
        };
      },
      navigation: function (e) {
        let {
          entryType: t,
          name: r,
          decodedBodySize: n,
          duration: i,
          domComplete: s,
          encodedBodySize: o,
          domContentLoadedEventStart: a,
          domContentLoadedEventEnd: l,
          domInteractive: c,
          loadEventStart: u,
          loadEventEnd: d,
          redirectCount: h,
          startTime: p,
          transferSize: f,
          type: m
        } = cc11001100_hook("", e, "var-init");
        return 0 === i ? null : {
          type: cc11001100_hook("type", `${t}.${m}`, "object-key-init"),
          start: cc11001100_hook("start", tq(p), "object-key-init"),
          end: cc11001100_hook("end", tq(s), "object-key-init"),
          name: cc11001100_hook("name", r, "object-key-init"),
          data: {
            size: cc11001100_hook("size", f, "object-key-init"),
            decodedBodySize: cc11001100_hook("decodedBodySize", n, "object-key-init"),
            encodedBodySize: cc11001100_hook("encodedBodySize", o, "object-key-init"),
            duration: cc11001100_hook("duration", i, "object-key-init"),
            domInteractive: cc11001100_hook("domInteractive", c, "object-key-init"),
            domContentLoadedEventStart: cc11001100_hook("domContentLoadedEventStart", a, "object-key-init"),
            domContentLoadedEventEnd: cc11001100_hook("domContentLoadedEventEnd", l, "object-key-init"),
            loadEventStart: cc11001100_hook("loadEventStart", u, "object-key-init"),
            loadEventEnd: cc11001100_hook("loadEventEnd", d, "object-key-init"),
            domComplete: cc11001100_hook("domComplete", s, "object-key-init"),
            redirectCount: cc11001100_hook("redirectCount", h, "object-key-init")
          }
        };
      }
    }, "var-init");
    function t$(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return ({
        metric: r
      }) => void t.replayPerformanceEntries.push(e(r));
    }
    function tH(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", tj[e.entryType], "var-init");
      return t ? t(e) : null;
    }
    function tq(e) {
      cc11001100_hook("e", e, "function-parameter");
      return (((0, M.Z1)() || J.performance.timeOrigin) + e) / 1e3;
    }
    function tV(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.entries[e.entries.length - 1], "var-init"),
        r = cc11001100_hook("r", t?.element ? [t.element] : void 0, "var-init");
      return tY(e, "largest-contentful-paint", r);
    }
    function tK(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", [], "var-init"),
        r = cc11001100_hook("r", [], "var-init");
      for (let n of e.entries) if (void 0 !== n.sources) {
        let e = cc11001100_hook("e", [], "var-init");
        for (let t of n.sources) if (t.node) {
          r.push(t.node);
          let n = cc11001100_hook("n", tC.mirror.getId(t.node), "var-init");
          n && e.push(n);
        }
        t.push({
          value: cc11001100_hook("value", n.value, "object-key-init"),
          nodeIds: cc11001100_hook("nodeIds", e.length ? e : void 0, "object-key-init")
        });
      }
      return tY(e, "cumulative-layout-shift", r, t);
    }
    function tG(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.entries[e.entries.length - 1], "var-init"),
        r = cc11001100_hook("r", t?.target ? [t.target] : void 0, "var-init");
      return tY(e, "first-input-delay", r);
    }
    function tJ(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.entries[e.entries.length - 1], "var-init"),
        r = cc11001100_hook("r", t?.target ? [t.target] : void 0, "var-init");
      return tY(e, "interaction-to-next-paint", r);
    }
    function tY(e, t, r, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      let i = cc11001100_hook("i", e.value, "var-init"),
        s = cc11001100_hook("s", e.rating, "var-init"),
        o = cc11001100_hook("o", tq(i), "var-init");
      return {
        type: cc11001100_hook("type", "web-vital", "object-key-init"),
        name: cc11001100_hook("name", t, "object-key-init"),
        start: cc11001100_hook("start", o, "object-key-init"),
        end: cc11001100_hook("end", o, "object-key-init"),
        data: {
          value: cc11001100_hook("value", i, "object-key-init"),
          size: cc11001100_hook("size", i, "object-key-init"),
          rating: cc11001100_hook("rating", s, "object-key-init"),
          nodeIds: cc11001100_hook("nodeIds", r ? r.map(e => tC.mirror.getId(e)) : void 0, "object-key-init"),
          attributions: cc11001100_hook("attributions", n, "object-key-init")
        }
      };
    }
    let tX = cc11001100_hook("tX", "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, "var-init"),
      tQ = cc11001100_hook("tQ", ["info", "warn", "error", "log"], "var-init"),
      tZ = cc11001100_hook("tZ", "[Replay] ", "var-init");
    function t0(e, t = "info") {
      cc11001100_hook("e", e, "function-parameter");
      (0, I.n)({
        category: cc11001100_hook("category", "console", "object-key-init"),
        data: {
          logger: cc11001100_hook("logger", "replay", "object-key-init")
        },
        level: cc11001100_hook("level", t, "object-key-init"),
        message: cc11001100_hook("message", `${tZ}${e}`, "object-key-init")
      }, {
        level: cc11001100_hook("level", t, "object-key-init")
      });
    }
    let t1 = cc11001100_hook("t1", function () {
      let e = cc11001100_hook("e", !1, "var-init"),
        t = cc11001100_hook("t", !1, "var-init"),
        r = cc11001100_hook("r", {
          exception: cc11001100_hook("exception", () => void 0, "object-key-init"),
          infoTick: cc11001100_hook("infoTick", () => void 0, "object-key-init"),
          setConfig: cc11001100_hook("setConfig", r => {
            e = cc11001100_hook("e", !!r.captureExceptions, "assign"), t = cc11001100_hook("t", !!r.traceInternals, "assign");
          }, "object-key-init")
        }, "var-init");
      return tX ? (tQ.forEach(e => {
        r[e] = cc11001100_hook("r[e]", (...r) => {
          C.kg[e](tZ, ...r), t && t0(r.join(""), (0, T.V)(e));
        }, "assign");
      }), r.exception = cc11001100_hook("r.exception", (n, ...i) => {
        i.length && r.error && r.error(...i), C.kg.error(tZ, n), e ? (0, R.Tb)(n) : t && t0(n, "error");
      }, "assign"), r.infoTick = cc11001100_hook("r.infoTick", (...e) => {
        C.kg.info(tZ, ...e), t && setTimeout(() => t0(e[0]), 0);
      }, "assign")) : tQ.forEach(e => {
        r[e] = cc11001100_hook("r[e]", () => void 0, "assign");
      }), r;
    }(), "var-init");
    class t2 extends Error {
      constructor() {
        super("Event buffer exceeded maximum size of 20000000.");
      }
    }
    class t3 {
      constructor() {
        this.events = cc11001100_hook("this.events", [], "assign"), this._totalSize = cc11001100_hook("this._totalSize", 0, "assign"), this.hasCheckout = cc11001100_hook("this.hasCheckout", !1, "assign"), this.waitForCheckout = cc11001100_hook("this.waitForCheckout", !1, "assign");
      }
      get hasEvents() {
        return this.events.length > 0;
      }
      get type() {
        return "sync";
      }
      destroy() {
        this.events = cc11001100_hook("this.events", [], "assign");
      }
      async addEvent(e) {
        let t = cc11001100_hook("t", JSON.stringify(e).length, "var-init");
        if (this._totalSize += cc11001100_hook("this._totalSize", t, "assign"), this._totalSize > 2e7) throw new t2();
        this.events.push(e);
      }
      finish() {
        return new Promise(e => {
          let t = cc11001100_hook("t", this.events, "var-init");
          this.clear(), e(JSON.stringify(t));
        });
      }
      clear() {
        this.events = cc11001100_hook("this.events", [], "assign"), this._totalSize = cc11001100_hook("this._totalSize", 0, "assign"), this.hasCheckout = cc11001100_hook("this.hasCheckout", !1, "assign");
      }
      getEarliestTimestamp() {
        let e = cc11001100_hook("e", this.events.map(e => e.timestamp).sort()[0], "var-init");
        return e ? tT(e) : null;
      }
    }
    class t5 {
      constructor(e) {
        this._worker = cc11001100_hook("this._worker", e, "assign"), this._id = cc11001100_hook("this._id", 0, "assign");
      }
      ensureReady() {
        return this._ensureReadyPromise || (this._ensureReadyPromise = cc11001100_hook("this._ensureReadyPromise", new Promise((e, t) => {
          this._worker.addEventListener("message", ({
            data: r
          }) => {
            r.success ? e() : t();
          }, {
            once: cc11001100_hook("once", !0, "object-key-init")
          }), this._worker.addEventListener("error", e => {
            t(e);
          }, {
            once: cc11001100_hook("once", !0, "object-key-init")
          });
        }), "assign")), this._ensureReadyPromise;
      }
      destroy() {
        tX && t1.info("Destroying compression worker"), this._worker.terminate();
      }
      postMessage(e, t) {
        let r = cc11001100_hook("r", this._getAndIncrementId(), "var-init");
        return new Promise((n, i) => {
          let s = cc11001100_hook("s", ({
            data: t
          }) => {
            if (t.method === e && t.id === r) {
              if (this._worker.removeEventListener("message", s), !t.success) {
                tX && t1.error("Error in compression worker: ", t.response), i(Error("Error in compression worker"));
                return;
              }
              n(t.response);
            }
          }, "var-init");
          this._worker.addEventListener("message", s), this._worker.postMessage({
            id: cc11001100_hook("id", r, "object-key-init"),
            method: cc11001100_hook("method", e, "object-key-init"),
            arg: cc11001100_hook("arg", t, "object-key-init")
          });
        });
      }
      _getAndIncrementId() {
        return this._id++;
      }
    }
    class t8 {
      constructor(e) {
        this._worker = cc11001100_hook("this._worker", new t5(e), "assign"), this._earliestTimestamp = cc11001100_hook("this._earliestTimestamp", null, "assign"), this._totalSize = cc11001100_hook("this._totalSize", 0, "assign"), this.hasCheckout = cc11001100_hook("this.hasCheckout", !1, "assign"), this.waitForCheckout = cc11001100_hook("this.waitForCheckout", !1, "assign");
      }
      get hasEvents() {
        return !!this._earliestTimestamp;
      }
      get type() {
        return "worker";
      }
      ensureReady() {
        return this._worker.ensureReady();
      }
      destroy() {
        this._worker.destroy();
      }
      addEvent(e) {
        let t = cc11001100_hook("t", tT(e.timestamp), "var-init");
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = cc11001100_hook("this._earliestTimestamp", t, "assign"));
        let r = cc11001100_hook("r", JSON.stringify(e), "var-init");
        return (this._totalSize += cc11001100_hook("this._totalSize", r.length, "assign"), this._totalSize > 2e7) ? Promise.reject(new t2()) : this._sendEventToWorker(r);
      }
      finish() {
        return this._finishRequest();
      }
      clear() {
        this._earliestTimestamp = cc11001100_hook("this._earliestTimestamp", null, "assign"), this._totalSize = cc11001100_hook("this._totalSize", 0, "assign"), this.hasCheckout = cc11001100_hook("this.hasCheckout", !1, "assign"), this._worker.postMessage("clear").then(null, e => {
          tX && t1.exception(e, 'Sending "clear" message to worker failed', e);
        });
      }
      getEarliestTimestamp() {
        return this._earliestTimestamp;
      }
      _sendEventToWorker(e) {
        return this._worker.postMessage("addEvent", e);
      }
      async _finishRequest() {
        let e = cc11001100_hook("e", await this._worker.postMessage("finish"), "var-init");
        return this._earliestTimestamp = cc11001100_hook("this._earliestTimestamp", null, "assign"), this._totalSize = cc11001100_hook("this._totalSize", 0, "assign"), e;
      }
    }
    class t6 {
      constructor(e) {
        this._fallback = cc11001100_hook("this._fallback", new t3(), "assign"), this._compression = cc11001100_hook("this._compression", new t8(e), "assign"), this._used = cc11001100_hook("this._used", this._fallback, "assign"), this._ensureWorkerIsLoadedPromise = cc11001100_hook("this._ensureWorkerIsLoadedPromise", this._ensureWorkerIsLoaded(), "assign");
      }
      get waitForCheckout() {
        return this._used.waitForCheckout;
      }
      get type() {
        return this._used.type;
      }
      get hasEvents() {
        return this._used.hasEvents;
      }
      get hasCheckout() {
        return this._used.hasCheckout;
      }
      set hasCheckout(e) {
        this._used.hasCheckout = cc11001100_hook("this._used.hasCheckout", e, "assign");
      }
      set waitForCheckout(e) {
        this._used.waitForCheckout = cc11001100_hook("this._used.waitForCheckout", e, "assign");
      }
      destroy() {
        this._fallback.destroy(), this._compression.destroy();
      }
      clear() {
        return this._used.clear();
      }
      getEarliestTimestamp() {
        return this._used.getEarliestTimestamp();
      }
      addEvent(e) {
        return this._used.addEvent(e);
      }
      async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish();
      }
      ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise;
      }
      async _ensureWorkerIsLoaded() {
        try {
          await this._compression.ensureReady();
        } catch (e) {
          tX && t1.exception(e, "Failed to load the compression worker, falling back to simple buffer");
          return;
        }
        await this._switchToCompressionWorker();
      }
      async _switchToCompressionWorker() {
        let {
            events: e,
            hasCheckout: t,
            waitForCheckout: r
          } = cc11001100_hook("", this._fallback, "var-init"),
          n = cc11001100_hook("n", [], "var-init");
        for (let t of e) n.push(this._compression.addEvent(t));
        this._compression.hasCheckout = cc11001100_hook("this._compression.hasCheckout", t, "assign"), this._compression.waitForCheckout = cc11001100_hook("this._compression.waitForCheckout", r, "assign"), this._used = cc11001100_hook("this._used", this._compression, "assign");
        try {
          await Promise.all(n), this._fallback.clear();
        } catch (e) {
          tX && t1.exception(e, "Failed to add events when switching buffers.");
        }
      }
    }
    function t4() {
      try {
        return "sessionStorage" in J && !!J.sessionStorage;
      } catch {
        return !1;
      }
    }
    function t7(e) {
      cc11001100_hook("e", e, "function-parameter");
      return void 0 !== e && Math.random() < e;
    }
    function t9(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", Date.now(), "var-init"),
        r = cc11001100_hook("r", e.id || (0, x.DM)(), "var-init"),
        n = cc11001100_hook("n", e.started || t, "var-init"),
        i = cc11001100_hook("i", e.lastActivity || t, "var-init"),
        s = cc11001100_hook("s", e.segmentId || 0, "var-init"),
        o = cc11001100_hook("o", e.sampled, "var-init"),
        a = cc11001100_hook("a", e.previousSessionId, "var-init");
      return {
        id: cc11001100_hook("id", r, "object-key-init"),
        started: cc11001100_hook("started", n, "object-key-init"),
        lastActivity: cc11001100_hook("lastActivity", i, "object-key-init"),
        segmentId: cc11001100_hook("segmentId", s, "object-key-init"),
        sampled: cc11001100_hook("sampled", o, "object-key-init"),
        previousSessionId: cc11001100_hook("previousSessionId", a, "object-key-init")
      };
    }
    function re(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (t4()) try {
        J.sessionStorage.setItem(Y, JSON.stringify(e));
      } catch {}
    }
    function rt({
      sessionSampleRate: e,
      allowBuffering: t,
      stickySession: r = !1
    }, {
      previousSessionId: n
    } = {}) {
      let i = cc11001100_hook("i", t7(e) ? "session" : !!t && "buffer", "var-init"),
        s = cc11001100_hook("s", t9({
          sampled: cc11001100_hook("sampled", i, "object-key-init"),
          previousSessionId: cc11001100_hook("previousSessionId", n, "object-key-init")
        }), "var-init");
      return r && re(s), s;
    }
    function rr(e, t, r = +new Date()) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= r;
    }
    function rn(e, {
      maxReplayDuration: t,
      sessionIdleExpire: r,
      targetTime: n = Date.now()
    }) {
      cc11001100_hook("e", e, "function-parameter");
      return rr(e.started, t, n) || rr(e.lastActivity, r, n);
    }
    function ri(e, {
      sessionIdleExpire: t,
      maxReplayDuration: r
    }) {
      cc11001100_hook("e", e, "function-parameter");
      return !!rn(e, {
        sessionIdleExpire: cc11001100_hook("sessionIdleExpire", t, "object-key-init"),
        maxReplayDuration: cc11001100_hook("maxReplayDuration", r, "object-key-init")
      }) && ("buffer" !== e.sampled || 0 !== e.segmentId);
    }
    function rs({
      sessionIdleExpire: e,
      maxReplayDuration: t,
      previousSessionId: r
    }, n) {
      cc11001100_hook("n", n, "function-parameter");
      let i = cc11001100_hook("i", n.stickySession && function () {
        if (!t4()) return null;
        try {
          let e = cc11001100_hook("e", J.sessionStorage.getItem(Y), "var-init");
          if (!e) return null;
          let t = cc11001100_hook("t", JSON.parse(e), "var-init");
          return tX && t1.infoTick("Loading existing session"), t9(t);
        } catch {
          return null;
        }
      }(), "var-init");
      return i ? ri(i, {
        sessionIdleExpire: cc11001100_hook("sessionIdleExpire", e, "object-key-init"),
        maxReplayDuration: cc11001100_hook("maxReplayDuration", t, "object-key-init")
      }) ? (tX && t1.infoTick("Session in sessionStorage is expired, creating new one..."), rt(n, {
        previousSessionId: cc11001100_hook("previousSessionId", i.id, "object-key-init")
      })) : i : (tX && t1.infoTick("Creating new session"), rt(n, {
        previousSessionId: cc11001100_hook("previousSessionId", r, "object-key-init")
      }));
    }
    function ro(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return !!rl(e, t) && (ra(e, t, r), !0);
    }
    async function ra(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      let {
        eventBuffer: n
      } = cc11001100_hook("", e, "var-init");
      if (!n || n.waitForCheckout && !r) return null;
      let i = cc11001100_hook("i", "buffer" === e.recordingMode, "var-init");
      try {
        r && i && n.clear(), r && (n.hasCheckout = cc11001100_hook("n.hasCheckout", !0, "assign"), n.waitForCheckout = cc11001100_hook("n.waitForCheckout", !1, "assign"));
        let s = cc11001100_hook("s", e.getOptions(), "var-init"),
          o = cc11001100_hook("o", function (e, t) {
            try {
              if ("function" == typeof t && e.type === e5.Custom) return t(e);
            } catch (e) {
              return tX && t1.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null;
            }
            return e;
          }(t, s.beforeAddRecordingEvent), "var-init");
        if (!o) return;
        return await n.addEvent(o);
      } catch (s) {
        let t = cc11001100_hook("t", s && s instanceof t2, "var-init");
        if (t && i) return n.clear(), n.waitForCheckout = cc11001100_hook("n.waitForCheckout", !0, "assign"), null;
        e.handleException(s), await e.stop({
          reason: cc11001100_hook("reason", t ? "addEventSizeExceeded" : "addEvent", "object-key-init")
        });
        let r = cc11001100_hook("r", (0, D.s3)(), "var-init");
        r && r.recordDroppedEvent("internal_sdk_error", "replay");
      }
    }
    function rl(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
      let r = cc11001100_hook("r", tT(t.timestamp), "var-init");
      return !(r + e.timeouts.sessionIdlePause < Date.now()) && (!(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (tX && t1.infoTick(`Skipping event with timestamp ${r} because it is after maxReplayDuration`), !1));
    }
    function rc(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "transaction" === e.type;
    }
    function ru(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "feedback" === e.type;
    }
    function rd(e) {
      cc11001100_hook("e", e, "function-parameter");
      return !!e.category;
    }
    function rh() {
      let e = cc11001100_hook("e", (0, D.nZ)().getPropagationContext().dsc, "var-init");
      e && delete e.replay_id;
      let t = cc11001100_hook("t", (0, O.HN)(), "var-init");
      if (t) {
        let e = cc11001100_hook("e", (0, N.jC)(t), "var-init");
        delete e.replay_id;
      }
    }
    function rp(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return t.map(({
        type: t,
        start: r,
        end: n,
        name: i,
        data: s
      }) => {
        let o = cc11001100_hook("o", e.throttledAddEvent({
          type: cc11001100_hook("type", e5.Custom, "object-key-init"),
          timestamp: cc11001100_hook("timestamp", r, "object-key-init"),
          data: {
            tag: cc11001100_hook("tag", "performanceSpan", "object-key-init"),
            payload: {
              op: cc11001100_hook("op", t, "object-key-init"),
              description: cc11001100_hook("description", i, "object-key-init"),
              startTimestamp: cc11001100_hook("startTimestamp", r, "object-key-init"),
              endTimestamp: cc11001100_hook("endTimestamp", n, "object-key-init"),
              data: cc11001100_hook("data", s, "object-key-init")
            }
          }
        }), "var-init");
        return "string" == typeof o ? Promise.resolve(null) : o;
      });
    }
    function rf(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r;
      e.isEnabled() && null !== t && (r = cc11001100_hook("r", t.name, "assign"), (!tX || !e.getOptions()._experiments.traceInternals) && (0, A.W)(r, (0, D.s3)()) || e.addUpdate(() => (rp(e, [t]), !0)));
    }
    function rm(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (!e) return;
      let t = cc11001100_hook("t", new TextEncoder(), "var-init");
      try {
        if ("string" == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
          let r = cc11001100_hook("r", (0, q.UL)(e), "var-init");
          return t.encode(r).length;
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength;
      } catch {}
    }
    function ry(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (!e) return;
      let t = cc11001100_hook("t", parseInt(e, 10), "var-init");
      return isNaN(t) ? void 0 : t;
    }
    function rg(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (!e) return {
        headers: {},
        size: cc11001100_hook("size", void 0, "object-key-init"),
        _meta: {
          warnings: cc11001100_hook("warnings", [t], "object-key-init")
        }
      };
      let r = cc11001100_hook("r", {
          ...e._meta
        }, "var-init"),
        n = cc11001100_hook("n", r.warnings || [], "var-init");
      return r.warnings = cc11001100_hook("r.warnings", [...n, t], "assign"), e._meta = cc11001100_hook("e._meta", r, "assign"), e;
    }
    function r_(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (!t) return null;
      let {
          startTimestamp: r,
          endTimestamp: n,
          url: i,
          method: s,
          statusCode: o,
          request: a,
          response: l
        } = cc11001100_hook("", t, "var-init"),
        c = cc11001100_hook("c", {
          type: cc11001100_hook("type", e, "object-key-init"),
          start: cc11001100_hook("start", r / 1e3, "object-key-init"),
          end: cc11001100_hook("end", n / 1e3, "object-key-init"),
          name: cc11001100_hook("name", i, "object-key-init"),
          data: cc11001100_hook("data", (0, E.Jr)({
            method: cc11001100_hook("method", s, "object-key-init"),
            statusCode: cc11001100_hook("statusCode", o, "object-key-init"),
            request: cc11001100_hook("request", a, "object-key-init"),
            response: cc11001100_hook("response", l, "object-key-init")
          }), "object-key-init")
        }, "var-init");
      return c;
    }
    function rS(e) {
      cc11001100_hook("e", e, "function-parameter");
      return {
        headers: {},
        size: cc11001100_hook("size", e, "object-key-init"),
        _meta: {
          warnings: cc11001100_hook("warnings", ["URL_SKIPPED"], "object-key-init")
        }
      };
    }
    function rv(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      if (!t && 0 === Object.keys(e).length) return;
      if (!t) return {
        headers: cc11001100_hook("headers", e, "object-key-init")
      };
      if (!r) return {
        headers: cc11001100_hook("headers", e, "object-key-init"),
        size: cc11001100_hook("size", t, "object-key-init")
      };
      let n = cc11001100_hook("n", {
          headers: cc11001100_hook("headers", e, "object-key-init"),
          size: cc11001100_hook("size", t, "object-key-init")
        }, "var-init"),
        {
          body: i,
          warnings: s
        } = cc11001100_hook("", function (e) {
          if (!e || "string" != typeof e) return {
            body: cc11001100_hook("body", e, "object-key-init")
          };
          let t = cc11001100_hook("t", e.length > 15e4, "var-init"),
            r = cc11001100_hook("r", function (e) {
              let t = cc11001100_hook("t", e[0], "var-init"),
                r = cc11001100_hook("r", e[e.length - 1], "var-init");
              return "[" === t && "]" === r || "{" === t && "}" === r;
            }(e), "var-init");
          if (t) {
            let t = cc11001100_hook("t", e.slice(0, 15e4), "var-init");
            return r ? {
              body: cc11001100_hook("body", t, "object-key-init"),
              warnings: cc11001100_hook("warnings", ["MAYBE_JSON_TRUNCATED"], "object-key-init")
            } : {
              body: cc11001100_hook("body", `${t}…`, "object-key-init"),
              warnings: cc11001100_hook("warnings", ["TEXT_TRUNCATED"], "object-key-init")
            };
          }
          if (r) try {
            let t = cc11001100_hook("t", JSON.parse(e), "var-init");
            return {
              body: cc11001100_hook("body", t, "object-key-init")
            };
          } catch {}
          return {
            body: cc11001100_hook("body", e, "object-key-init")
          };
        }(r), "var-init");
      return n.body = cc11001100_hook("n.body", i, "assign"), s?.length && (n._meta = cc11001100_hook("n._meta", {
        warnings: cc11001100_hook("warnings", s, "object-key-init")
      }, "assign")), n;
    }
    function rw(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return Object.entries(e).reduce((r, [n, i]) => {
        let s = cc11001100_hook("s", n.toLowerCase(), "var-init");
        return t.includes(s) && e[n] && (r[s] = cc11001100_hook("r[s]", i, "assign")), r;
      }, {});
    }
    function rb(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r = cc11001100_hook("r", function (e, t = J.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(J.location.origin)) return e;
        let r = cc11001100_hook("r", new URL(e, t), "var-init");
        if (r.origin !== new URL(t).origin) return e;
        let n = cc11001100_hook("n", r.href, "var-init");
        return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n;
      }(e), "var-init");
      return (0, L.U0)(r, t);
    }
    async function rE(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      try {
        let n = cc11001100_hook("n", await rk(e, t, r), "var-init"),
          i = cc11001100_hook("i", r_("resource.fetch", n), "var-init");
        rf(r.replay, i);
      } catch (e) {
        tX && t1.exception(e, "Failed to capture fetch breadcrumb");
      }
    }
    async function rk(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      let n = cc11001100_hook("n", Date.now(), "var-init"),
        {
          startTimestamp: i = n,
          endTimestamp: s = n
        } = cc11001100_hook("", t, "var-init"),
        {
          url: o,
          method: a,
          status_code: l = 0,
          request_body_size: c,
          response_body_size: u
        } = cc11001100_hook("", e.data, "var-init"),
        d = cc11001100_hook("d", rb(o, r.networkDetailAllowUrls) && !rb(o, r.networkDetailDenyUrls), "var-init"),
        h = cc11001100_hook("h", d ? function ({
          networkCaptureBodies: e,
          networkRequestHeaders: t
        }, r, n) {
          let i = cc11001100_hook("i", r ? 1 === r.length && "string" != typeof r[0] ? rT(r[0], t) : 2 === r.length ? rT(r[1], t) : {} : {}, "var-init");
          if (!e) return rv(i, n, void 0);
          let s = cc11001100_hook("s", (0, q.dn)(r), "var-init"),
            [o, a] = cc11001100_hook("", (0, q.SI)(s, t1), "var-init"),
            l = cc11001100_hook("l", rv(i, n, o), "var-init");
          return a ? rg(l, a) : l;
        }(r, t.input, c) : rS(c), "var-init"),
        p = cc11001100_hook("p", await rM(d, r, t.response, u), "var-init");
      return {
        startTimestamp: cc11001100_hook("startTimestamp", i, "object-key-init"),
        endTimestamp: cc11001100_hook("endTimestamp", s, "object-key-init"),
        url: cc11001100_hook("url", o, "object-key-init"),
        method: cc11001100_hook("method", a, "object-key-init"),
        statusCode: cc11001100_hook("statusCode", l, "object-key-init"),
        request: cc11001100_hook("request", h, "object-key-init"),
        response: cc11001100_hook("response", p, "object-key-init")
      };
    }
    async function rM(e, {
      networkCaptureBodies: t,
      networkResponseHeaders: r
    }, n, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      if (!e && void 0 !== i) return rS(i);
      let s = cc11001100_hook("s", n ? rC(n.headers, r) : {}, "var-init");
      if (!n || !t && void 0 !== i) return rv(s, i, void 0);
      let [o, a] = cc11001100_hook("", await rI(n), "var-init"),
        l = cc11001100_hook("l", function (e, {
          networkCaptureBodies: t,
          responseBodySize: r,
          captureDetails: n,
          headers: i
        }) {
          try {
            let s = cc11001100_hook("s", e?.length && void 0 === r ? rm(e) : r, "var-init");
            if (!n) return rS(s);
            if (t) return rv(i, s, e);
            return rv(i, s, void 0);
          } catch (e) {
            return tX && t1.exception(e, "Failed to serialize response body"), rv(i, r, void 0);
          }
        }(o, {
          networkCaptureBodies: cc11001100_hook("networkCaptureBodies", t, "object-key-init"),
          responseBodySize: cc11001100_hook("responseBodySize", i, "object-key-init"),
          captureDetails: cc11001100_hook("captureDetails", e, "object-key-init"),
          headers: cc11001100_hook("headers", s, "object-key-init")
        }), "var-init");
      return a ? rg(l, a) : l;
    }
    async function rI(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", function (e) {
        try {
          return e.clone();
        } catch (e) {
          tX && t1.exception(e, "Failed to clone response body");
        }
      }(e), "var-init");
      if (!t) return [void 0, "BODY_PARSE_ERROR"];
      try {
        let e = cc11001100_hook("e", await new Promise((e, r) => {
          let n = cc11001100_hook("n", (0, $.iK)(() => r(Error("Timeout while trying to read response body")), 500), "var-init");
          rR(t).then(t => e(t), e => r(e)).finally(() => clearTimeout(n));
        }), "var-init");
        return [e];
      } catch (e) {
        if (e instanceof Error && e.message.indexOf("Timeout") > -1) return tX && t1.warn("Parsing text body from response timed out"), [void 0, "BODY_PARSE_TIMEOUT"];
        return tX && t1.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"];
      }
    }
    function rC(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let r = cc11001100_hook("r", {}, "var-init");
      return t.forEach(t => {
        e.get(t) && (r[t] = cc11001100_hook("r[t]", e.get(t), "assign"));
      }), r;
    }
    function rT(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (!e) return {};
      let r = cc11001100_hook("r", e.headers, "var-init");
      return r ? r instanceof Headers ? rC(r, t) : Array.isArray(r) ? {} : rw(r, t) : {};
    }
    async function rR(e) {
      cc11001100_hook("e", e, "function-parameter");
      return await e.text();
    }
    async function rx(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      try {
        let n = cc11001100_hook("n", function (e, t, r) {
            let n = cc11001100_hook("n", Date.now(), "var-init"),
              {
                startTimestamp: i = n,
                endTimestamp: s = n,
                input: o,
                xhr: a
              } = cc11001100_hook("", t, "var-init"),
              {
                url: l,
                method: c,
                status_code: u = 0,
                request_body_size: d,
                response_body_size: h
              } = cc11001100_hook("", e.data, "var-init");
            if (!l) return null;
            if (!a || !rb(l, r.networkDetailAllowUrls) || rb(l, r.networkDetailDenyUrls)) {
              let e = cc11001100_hook("e", rS(d), "var-init"),
                t = cc11001100_hook("t", rS(h), "var-init");
              return {
                startTimestamp: cc11001100_hook("startTimestamp", i, "object-key-init"),
                endTimestamp: cc11001100_hook("endTimestamp", s, "object-key-init"),
                url: cc11001100_hook("url", l, "object-key-init"),
                method: cc11001100_hook("method", c, "object-key-init"),
                statusCode: cc11001100_hook("statusCode", u, "object-key-init"),
                request: cc11001100_hook("request", e, "object-key-init"),
                response: cc11001100_hook("response", t, "object-key-init")
              };
            }
            let p = cc11001100_hook("p", a[V.xU], "var-init"),
              f = cc11001100_hook("f", p ? rw(p.request_headers, r.networkRequestHeaders) : {}, "var-init"),
              m = cc11001100_hook("m", rw(function (e) {
                let t = cc11001100_hook("t", e.getAllResponseHeaders(), "var-init");
                return t ? t.split("\r\n").reduce((e, t) => {
                  let [r, n] = cc11001100_hook("", t.split(": "), "var-init");
                  return n && (e[r.toLowerCase()] = cc11001100_hook("e[r.toLowerCase()]", n, "assign")), e;
                }, {}) : {};
              }(a), r.networkResponseHeaders), "var-init"),
              [y, g] = cc11001100_hook("", r.networkCaptureBodies ? (0, q.SI)(o, t1) : [void 0], "var-init"),
              [_, S] = cc11001100_hook("", r.networkCaptureBodies ? function (e) {
                let t = cc11001100_hook("t", [], "var-init");
                try {
                  return [e.responseText];
                } catch (e) {
                  t.push(e);
                }
                try {
                  return function (e, t) {
                    try {
                      if ("string" == typeof e) return [e];
                      if (e instanceof Document) return [e.body.outerHTML];
                      if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                      if (!e) return [void 0];
                    } catch (t) {
                      return tX && t1.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"];
                    }
                    return tX && t1.info("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"];
                  }(e.response, e.responseType);
                } catch (e) {
                  t.push(e);
                }
                return tX && t1.warn("Failed to get xhr response body", ...t), [void 0];
              }(a) : [void 0], "var-init"),
              v = cc11001100_hook("v", rv(f, d, y), "var-init"),
              w = cc11001100_hook("w", rv(m, h, _), "var-init");
            return {
              startTimestamp: cc11001100_hook("startTimestamp", i, "object-key-init"),
              endTimestamp: cc11001100_hook("endTimestamp", s, "object-key-init"),
              url: cc11001100_hook("url", l, "object-key-init"),
              method: cc11001100_hook("method", c, "object-key-init"),
              statusCode: cc11001100_hook("statusCode", u, "object-key-init"),
              request: cc11001100_hook("request", g ? rg(v, g) : v, "object-key-init"),
              response: cc11001100_hook("response", S ? rg(w, S) : w, "object-key-init")
            };
          }(e, t, r), "var-init"),
          i = cc11001100_hook("i", r_("resource.xhr", n), "var-init");
        rf(r.replay, i);
      } catch (e) {
        tX && t1.exception(e, "Failed to capture xhr breadcrumb");
      }
    }
    async function rD(e) {
      cc11001100_hook("e", e, "function-parameter");
      try {
        return Promise.all(rp(e, [function (e) {
          let {
              jsHeapSizeLimit: t,
              totalJSHeapSize: r,
              usedJSHeapSize: n
            } = cc11001100_hook("", e, "var-init"),
            i = cc11001100_hook("i", Date.now() / 1e3, "var-init");
          return {
            type: cc11001100_hook("type", "memory", "object-key-init"),
            name: cc11001100_hook("name", "memory", "object-key-init"),
            start: cc11001100_hook("start", i, "object-key-init"),
            end: cc11001100_hook("end", i, "object-key-init"),
            data: {
              memory: {
                jsHeapSizeLimit: cc11001100_hook("jsHeapSizeLimit", t, "object-key-init"),
                totalJSHeapSize: cc11001100_hook("totalJSHeapSize", r, "object-key-init"),
                usedJSHeapSize: cc11001100_hook("usedJSHeapSize", n, "object-key-init")
              }
            }
          };
        }(J.performance.memory)]));
      } catch (e) {
        return [];
      }
    }
    let rO = cc11001100_hook("rO", w.GLOBAL_OBJ.navigator, "var-init");
    async function rN({
      client: e,
      scope: t,
      replayId: r,
      event: n
    }) {
      let i = cc11001100_hook("i", "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations), "var-init"),
        s = cc11001100_hook("s", {
          event_id: cc11001100_hook("event_id", r, "object-key-init"),
          integrations: cc11001100_hook("integrations", i, "object-key-init")
        }, "var-init");
      e.emit("preprocessEvent", n, s);
      let o = cc11001100_hook("o", await (0, F.R)(e.getOptions(), n, s, t, e, (0, D.aF)()), "var-init");
      if (!o) return null;
      e.emit("postprocessEvent", o, s), o.platform = cc11001100_hook("o.platform", o.platform || "javascript", "assign");
      let a = cc11001100_hook("a", e.getSdkMetadata(), "var-init"),
        {
          name: l,
          version: c
        } = cc11001100_hook("", a?.sdk || {}, "var-init");
      return o.sdk = cc11001100_hook("o.sdk", {
        ...o.sdk,
        name: l || "sentry.javascript.unknown",
        version: c || "0.0.0"
      }, "assign"), o;
    }
    async function rA({
      recordingData: e,
      replayId: t,
      segmentId: r,
      eventContext: n,
      timestamp: i,
      session: s
    }) {
      var o;
      let a;
      let l = cc11001100_hook("l", function ({
          recordingData: e,
          headers: t
        }) {
          let r;
          let n = cc11001100_hook("n", `${JSON.stringify(t)}
`, "var-init");
          if ("string" == typeof e) r = cc11001100_hook("r", `${n}${e}`, "assign");else {
            let t = cc11001100_hook("t", new TextEncoder(), "var-init"),
              i = cc11001100_hook("i", t.encode(n), "var-init");
            (r = cc11001100_hook("r", new Uint8Array(i.length + e.length), "assign")).set(i), r.set(e, i.length);
          }
          return r;
        }({
          recordingData: cc11001100_hook("recordingData", e, "object-key-init"),
          headers: {
            segment_id: cc11001100_hook("segment_id", r, "object-key-init")
          }
        }), "var-init"),
        {
          urls: c,
          errorIds: u,
          traceIds: d,
          initialTimestamp: h
        } = cc11001100_hook("", n, "var-init"),
        p = cc11001100_hook("p", (0, D.s3)(), "var-init"),
        f = cc11001100_hook("f", (0, D.nZ)(), "var-init"),
        m = cc11001100_hook("m", p?.getTransport(), "var-init"),
        y = cc11001100_hook("y", p?.getDsn(), "var-init");
      if (!p || !m || !y || !s.sampled) return (0, U.WD)({});
      let g = cc11001100_hook("g", {
          type: cc11001100_hook("type", "replay_event", "object-key-init"),
          replay_start_timestamp: cc11001100_hook("replay_start_timestamp", h / 1e3, "object-key-init"),
          timestamp: cc11001100_hook("timestamp", i / 1e3, "object-key-init"),
          error_ids: cc11001100_hook("error_ids", u, "object-key-init"),
          trace_ids: cc11001100_hook("trace_ids", d, "object-key-init"),
          urls: cc11001100_hook("urls", c, "object-key-init"),
          replay_id: cc11001100_hook("replay_id", t, "object-key-init"),
          segment_id: cc11001100_hook("segment_id", r, "object-key-init"),
          replay_type: cc11001100_hook("replay_type", s.sampled, "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", await rN({
          scope: cc11001100_hook("scope", f, "object-key-init"),
          client: cc11001100_hook("client", p, "object-key-init"),
          replayId: cc11001100_hook("replayId", t, "object-key-init"),
          event: cc11001100_hook("event", g, "object-key-init")
        }), "var-init");
      if (!_) return p.recordDroppedEvent("event_processor", "replay"), tX && t1.info("An event processor returned `null`, will not send event."), (0, U.WD)({});
      delete _.sdkProcessingMetadata;
      let S = cc11001100_hook("S", (o = cc11001100_hook("o", p.getOptions().tunnel, "assign"), (0, P.Jd)((0, P.Cd)(_, (0, P.HY)(_), o, y), [[{
        type: cc11001100_hook("type", "replay_event", "object-key-init")
      }, _], [{
        type: cc11001100_hook("type", "replay_recording", "object-key-init"),
        length: cc11001100_hook("length", "string" == typeof l ? new TextEncoder().encode(l).length : l.length, "object-key-init")
      }, l]])), "var-init");
      try {
        a = cc11001100_hook("a", await m.send(S), "assign");
      } catch (t) {
        let e = cc11001100_hook("e", Error(X), "var-init");
        try {
          e.cause = cc11001100_hook("e.cause", t, "assign");
        } catch {}
        throw e;
      }
      if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new rL(a.statusCode);
      let v = cc11001100_hook("v", (0, B.WG)({}, a), "var-init");
      if ((0, B.Q)(v, "replay")) throw new rP(v);
      return a;
    }
    class rL extends Error {
      constructor(e) {
        super(`Transport returned status code ${e}`);
      }
    }
    class rP extends Error {
      constructor(e) {
        super("Rate limit hit"), this.rateLimits = cc11001100_hook("this.rateLimits", e, "assign");
      }
    }
    async function rF(e, t = {
      count: cc11001100_hook("count", 0, "object-key-init"),
      interval: cc11001100_hook("interval", 5e3, "object-key-init")
    }) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        recordingData: r,
        onError: n
      } = cc11001100_hook("", e, "var-init");
      if (r.length) try {
        return await rA(e), !0;
      } catch (r) {
        if (r instanceof rL || r instanceof rP) throw r;
        if ((0, R.v)("Replays", {
          _retryCount: cc11001100_hook("_retryCount", t.count, "object-key-init")
        }), n && n(r), t.count >= 3) {
          let e = cc11001100_hook("e", Error(`${X} - max retries exceeded`), "var-init");
          try {
            e.cause = cc11001100_hook("e.cause", r, "assign");
          } catch {}
          throw e;
        }
        return t.interval *= cc11001100_hook("t.interval", ++t.count, "assign"), new Promise((r, n) => {
          (0, $.iK)(async () => {
            try {
              await rF(e, t), r(!0);
            } catch (e) {
              n(e);
            }
          }, t.interval);
        });
      }
    }
    let rU = cc11001100_hook("rU", "__THROTTLED", "var-init");
    class rB {
      constructor({
        options: e,
        recordingOptions: t
      }) {
        this.eventBuffer = cc11001100_hook("this.eventBuffer", null, "assign"), this.performanceEntries = cc11001100_hook("this.performanceEntries", [], "assign"), this.replayPerformanceEntries = cc11001100_hook("this.replayPerformanceEntries", [], "assign"), this.recordingMode = cc11001100_hook("this.recordingMode", "session", "assign"), this.timeouts = cc11001100_hook("this.timeouts", {
          sessionIdlePause: cc11001100_hook("sessionIdlePause", 3e5, "object-key-init"),
          sessionIdleExpire: cc11001100_hook("sessionIdleExpire", 9e5, "object-key-init")
        }, "assign"), this._lastActivity = cc11001100_hook("this._lastActivity", Date.now(), "assign"), this._isEnabled = cc11001100_hook("this._isEnabled", !1, "assign"), this._isPaused = cc11001100_hook("this._isPaused", !1, "assign"), this._requiresManualStart = cc11001100_hook("this._requiresManualStart", !1, "assign"), this._hasInitializedCoreListeners = cc11001100_hook("this._hasInitializedCoreListeners", !1, "assign"), this._context = cc11001100_hook("this._context", {
          errorIds: cc11001100_hook("errorIds", new Set(), "object-key-init"),
          traceIds: cc11001100_hook("traceIds", new Set(), "object-key-init"),
          urls: cc11001100_hook("urls", [], "object-key-init"),
          initialTimestamp: cc11001100_hook("initialTimestamp", Date.now(), "object-key-init"),
          initialUrl: cc11001100_hook("initialUrl", "", "object-key-init")
        }, "assign"), this._recordingOptions = cc11001100_hook("this._recordingOptions", t, "assign"), this._options = cc11001100_hook("this._options", e, "assign"), this._debouncedFlush = cc11001100_hook("this._debouncedFlush", function (e, t, r) {
          let n, i, s;
          let o = cc11001100_hook("o", r?.maxWait ? Math.max(r.maxWait, t) : 0, "var-init");
          function a() {
            return l(), n = cc11001100_hook("n", e(), "assign");
          }
          function l() {
            void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = cc11001100_hook("i", s = cc11001100_hook("s", void 0, "assign"), "assign");
          }
          function c() {
            return i && clearTimeout(i), i = cc11001100_hook("i", (0, $.iK)(a, t), "assign"), o && void 0 === s && (s = cc11001100_hook("s", (0, $.iK)(a, o), "assign")), n;
          }
          return c.cancel = cc11001100_hook("c.cancel", l, "assign"), c.flush = cc11001100_hook("c.flush", function () {
            return void 0 !== i || void 0 !== s ? a() : n;
          }, "assign"), c;
        }(() => this._flush(), this._options.flushMinDelay, {
          maxWait: cc11001100_hook("maxWait", this._options.flushMaxDelay, "object-key-init")
        }), "assign"), this._throttledAddEvent = cc11001100_hook("this._throttledAddEvent", function (e, t, r) {
          let n = cc11001100_hook("n", new Map(), "var-init"),
            i = cc11001100_hook("i", e => {
              let t = cc11001100_hook("t", e - 5, "var-init");
              n.forEach((e, r) => {
                r < t && n.delete(r);
              });
            }, "var-init"),
            s = cc11001100_hook("s", () => [...n.values()].reduce((e, t) => e + t, 0), "var-init"),
            o = cc11001100_hook("o", !1, "var-init");
          return (...t) => {
            let r = cc11001100_hook("r", Math.floor(Date.now() / 1e3), "var-init");
            if (i(r), s() >= 300) {
              let e = cc11001100_hook("e", o, "var-init");
              return o = cc11001100_hook("o", !0, "assign"), e ? "__SKIPPED" : rU;
            }
            o = cc11001100_hook("o", !1, "assign");
            let a = cc11001100_hook("a", n.get(r) || 0, "var-init");
            return n.set(r, a + 1), e(...t);
          };
        }((e, t) => rl(this, e) ? ra(this, e, t) : Promise.resolve(null), 0, 0), "assign");
        let {
            slowClickTimeout: r,
            slowClickIgnoreSelectors: n
          } = cc11001100_hook("", this.getOptions(), "var-init"),
          i = cc11001100_hook("i", r ? {
            threshold: cc11001100_hook("threshold", Math.min(3e3, r), "object-key-init"),
            timeout: cc11001100_hook("timeout", r, "object-key-init"),
            scrollTimeout: cc11001100_hook("scrollTimeout", 300, "object-key-init"),
            ignoreSelector: cc11001100_hook("ignoreSelector", n ? n.join(",") : "", "object-key-init")
          } : void 0, "var-init");
        if (i && (this.clickDetector = cc11001100_hook("this.clickDetector", new tL(this, i), "assign")), tX) {
          let t = cc11001100_hook("t", e._experiments, "var-init");
          t1.setConfig({
            captureExceptions: cc11001100_hook("captureExceptions", !!t.captureExceptions, "object-key-init"),
            traceInternals: cc11001100_hook("traceInternals", !!t.traceInternals, "object-key-init")
          });
        }
        this._handleVisibilityChange = cc11001100_hook("this._handleVisibilityChange", () => {
          "visible" === J.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
        }, "assign"), this._handleWindowBlur = cc11001100_hook("this._handleWindowBlur", () => {
          let e = cc11001100_hook("e", tU({
            category: cc11001100_hook("category", "ui.blur", "object-key-init")
          }), "var-init");
          this._doChangeToBackgroundTasks(e);
        }, "assign"), this._handleWindowFocus = cc11001100_hook("this._handleWindowFocus", () => {
          let e = cc11001100_hook("e", tU({
            category: cc11001100_hook("category", "ui.focus", "object-key-init")
          }), "var-init");
          this._doChangeToForegroundTasks(e);
        }, "assign"), this._handleKeyboardEvent = cc11001100_hook("this._handleKeyboardEvent", e => {
          !function (e, t) {
            if (!e.isEnabled()) return;
            e.updateUserActivity();
            let r = cc11001100_hook("r", function (e) {
              var t;
              let {
                metaKey: r,
                shiftKey: n,
                ctrlKey: i,
                altKey: s,
                key: o,
                target: a
              } = cc11001100_hook("", e, "var-init");
              if (!a || "INPUT" === (t = cc11001100_hook("t", a, "assign")).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o) return null;
              let l = cc11001100_hook("l", r || i || s, "var-init"),
                c = cc11001100_hook("c", 1 === o.length, "var-init");
              if (!l && c) return null;
              let u = cc11001100_hook("u", (0, k.Rt)(a, {
                  maxStringLength: cc11001100_hook("maxStringLength", 200, "object-key-init")
                }) || "<unknown>", "var-init"),
                d = cc11001100_hook("d", tz(a, u), "var-init");
              return tU({
                category: cc11001100_hook("category", "ui.keyDown", "object-key-init"),
                message: cc11001100_hook("message", u, "object-key-init"),
                data: {
                  ...d.data,
                  metaKey: r,
                  shiftKey: n,
                  ctrlKey: i,
                  altKey: s,
                  key: o
                }
              });
            }(t), "var-init");
            r && tx(e, r);
          }(this, e);
        }, "assign");
      }
      getContext() {
        return this._context;
      }
      isEnabled() {
        return this._isEnabled;
      }
      isPaused() {
        return this._isPaused;
      }
      isRecordingCanvas() {
        return !!this._canvas;
      }
      getOptions() {
        return this._options;
      }
      handleException(e) {
        tX && t1.exception(e), this._options.onError && this._options.onError(e);
      }
      initializeSampling(e) {
        let {
            errorSampleRate: t,
            sessionSampleRate: r
          } = cc11001100_hook("", this._options, "var-init"),
          n = cc11001100_hook("n", t <= 0 && r <= 0, "var-init");
        if (this._requiresManualStart = cc11001100_hook("this._requiresManualStart", n, "assign"), !n) {
          if (this._initializeSessionForSampling(e), !this.session) {
            tX && t1.exception(Error("Unable to initialize and create session"));
            return;
          }
          !1 !== this.session.sampled && (this.recordingMode = cc11001100_hook("this.recordingMode", "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", "assign"), tX && t1.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording());
        }
      }
      start() {
        if (this._isEnabled && "session" === this.recordingMode) {
          tX && t1.info("Recording is already in progress");
          return;
        }
        if (this._isEnabled && "buffer" === this.recordingMode) {
          tX && t1.info("Buffering is in progress, call `flush()` to save the replay");
          return;
        }
        tX && t1.infoTick("Starting replay in session mode"), this._updateUserActivity();
        let e = cc11001100_hook("e", rs({
          maxReplayDuration: cc11001100_hook("maxReplayDuration", this._options.maxReplayDuration, "object-key-init"),
          sessionIdleExpire: cc11001100_hook("sessionIdleExpire", this.timeouts.sessionIdleExpire, "object-key-init")
        }, {
          stickySession: cc11001100_hook("stickySession", this._options.stickySession, "object-key-init"),
          sessionSampleRate: cc11001100_hook("sessionSampleRate", 1, "object-key-init"),
          allowBuffering: cc11001100_hook("allowBuffering", !1, "object-key-init")
        }), "var-init");
        this.session = cc11001100_hook("this.session", e, "assign"), this._initializeRecording();
      }
      startBuffering() {
        if (this._isEnabled) {
          tX && t1.info("Buffering is in progress, call `flush()` to save the replay");
          return;
        }
        tX && t1.infoTick("Starting replay in buffer mode");
        let e = cc11001100_hook("e", rs({
          sessionIdleExpire: cc11001100_hook("sessionIdleExpire", this.timeouts.sessionIdleExpire, "object-key-init"),
          maxReplayDuration: cc11001100_hook("maxReplayDuration", this._options.maxReplayDuration, "object-key-init")
        }, {
          stickySession: cc11001100_hook("stickySession", this._options.stickySession, "object-key-init"),
          sessionSampleRate: cc11001100_hook("sessionSampleRate", 0, "object-key-init"),
          allowBuffering: cc11001100_hook("allowBuffering", !0, "object-key-init")
        }), "var-init");
        this.session = cc11001100_hook("this.session", e, "assign"), this.recordingMode = cc11001100_hook("this.recordingMode", "buffer", "assign"), this._initializeRecording();
      }
      startRecording() {
        try {
          var e;
          let t;
          let r = cc11001100_hook("r", this._canvas, "var-init");
          this._stopRecording = cc11001100_hook("this._stopRecording", tC({
            ...this._recordingOptions,
            ...("buffer" === this.recordingMode ? {
              checkoutEveryNms: cc11001100_hook("checkoutEveryNms", 6e4, "object-key-init")
            } : this._options._experiments.continuousCheckout && {
              checkoutEveryNms: cc11001100_hook("checkoutEveryNms", Math.max(36e4, this._options._experiments.continuousCheckout), "object-key-init")
            }),
            emit: (e = cc11001100_hook("e", this, "assign"), t = cc11001100_hook("t", !1, "assign"), (r, n) => {
              if (!e.checkAndHandleExpiredSession()) {
                tX && t1.warn("Received replay event after session expired.");
                return;
              }
              let i = cc11001100_hook("i", n || !t, "var-init");
              t = cc11001100_hook("t", !0, "assign"), e.clickDetector && function (e, t) {
                try {
                  if (3 !== t.type) return;
                  let {
                    source: r
                  } = cc11001100_hook("", t.data, "var-init");
                  if (tA.has(r) && e.registerMutation(t.timestamp), r === e8.Scroll && e.registerScroll(t.timestamp), t.data.source === e8.MouseInteraction) {
                    let {
                        type: r,
                        id: n
                      } = cc11001100_hook("", t.data, "var-init"),
                      i = cc11001100_hook("i", tC.mirror.getNode(n), "var-init");
                    i instanceof HTMLElement && r === e6.Click && e.registerClick(i);
                  }
                } catch {}
              }(e.clickDetector, r), e.addUpdate(() => {
                if ("buffer" === e.recordingMode && i && e.setInitialState(), !ro(e, r, i)) return !0;
                if (!i) return !1;
                let t = cc11001100_hook("t", e.session, "var-init");
                if (i && e.session && 0 === e.session.segmentId && ro(e, function (e) {
                  let t = cc11001100_hook("t", e.getOptions(), "var-init");
                  return {
                    type: cc11001100_hook("type", e5.Custom, "object-key-init"),
                    timestamp: cc11001100_hook("timestamp", Date.now(), "object-key-init"),
                    data: {
                      tag: cc11001100_hook("tag", "options", "object-key-init"),
                      payload: {
                        shouldRecordCanvas: cc11001100_hook("shouldRecordCanvas", e.isRecordingCanvas(), "object-key-init"),
                        sessionSampleRate: cc11001100_hook("sessionSampleRate", t.sessionSampleRate, "object-key-init"),
                        errorSampleRate: cc11001100_hook("errorSampleRate", t.errorSampleRate, "object-key-init"),
                        useCompressionOption: cc11001100_hook("useCompressionOption", t.useCompression, "object-key-init"),
                        blockAllMedia: cc11001100_hook("blockAllMedia", t.blockAllMedia, "object-key-init"),
                        maskAllText: cc11001100_hook("maskAllText", t.maskAllText, "object-key-init"),
                        maskAllInputs: cc11001100_hook("maskAllInputs", t.maskAllInputs, "object-key-init"),
                        useCompression: cc11001100_hook("useCompression", !!e.eventBuffer && "worker" === e.eventBuffer.type, "object-key-init"),
                        networkDetailHasUrls: cc11001100_hook("networkDetailHasUrls", t.networkDetailAllowUrls.length > 0, "object-key-init"),
                        networkCaptureBodies: cc11001100_hook("networkCaptureBodies", t.networkCaptureBodies, "object-key-init"),
                        networkRequestHasHeaders: cc11001100_hook("networkRequestHasHeaders", t.networkRequestHeaders.length > 0, "object-key-init"),
                        networkResponseHasHeaders: cc11001100_hook("networkResponseHasHeaders", t.networkResponseHeaders.length > 0, "object-key-init")
                      }
                    }
                  };
                }(e), !1), "buffer" === e.recordingMode && t && e.eventBuffer) {
                  let r = cc11001100_hook("r", e.eventBuffer.getEarliestTimestamp(), "var-init");
                  r && (tX && t1.info(`Updating session start time to earliest event in buffer to ${new Date(r)}`), t.started = cc11001100_hook("t.started", r, "assign"), e.getOptions().stickySession && re(t));
                }
                return !!t?.previousSessionId || ("session" === e.recordingMode && e.flush(), !0);
              });
            }),
            ...(/iPhone|iPad|iPod/i.test(rO?.userAgent ?? "") || /Macintosh/i.test(rO?.userAgent ?? "") && rO?.maxTouchPoints && rO?.maxTouchPoints > 1 ? {
              sampling: {
                mousemove: cc11001100_hook("mousemove", !1, "object-key-init")
              }
            } : {}),
            onMutation: this._onMutationHandler.bind(this),
            ...(r ? {
              recordCanvas: cc11001100_hook("recordCanvas", r.recordCanvas, "object-key-init"),
              getCanvasManager: cc11001100_hook("getCanvasManager", r.getCanvasManager, "object-key-init"),
              sampling: cc11001100_hook("sampling", r.sampling, "object-key-init"),
              dataURLOptions: cc11001100_hook("dataURLOptions", r.dataURLOptions, "object-key-init")
            } : {})
          }), "assign");
        } catch (e) {
          this.handleException(e);
        }
      }
      stopRecording() {
        try {
          return this._stopRecording && (this._stopRecording(), this._stopRecording = cc11001100_hook("this._stopRecording", void 0, "assign")), !0;
        } catch (e) {
          return this.handleException(e), !1;
        }
      }
      async stop({
        forceFlush: e = !1,
        reason: t
      } = {}) {
        if (this._isEnabled) {
          this._isEnabled = cc11001100_hook("this._isEnabled", !1, "assign");
          try {
            tX && t1.info(`Stopping Replay${t ? ` triggered by ${t}` : ""}`), rh(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && (await this._flush({
              force: cc11001100_hook("force", !0, "object-key-init")
            })), this.eventBuffer?.destroy(), this.eventBuffer = cc11001100_hook("this.eventBuffer", null, "assign"), function () {
              if (t4()) try {
                J.sessionStorage.removeItem(Y);
              } catch {}
            }(), this.session = cc11001100_hook("this.session", void 0, "assign");
          } catch (e) {
            this.handleException(e);
          }
        }
      }
      pause() {
        !this._isPaused && (this._isPaused = cc11001100_hook("this._isPaused", !0, "assign"), this.stopRecording(), tX && t1.info("Pausing replay"));
      }
      resume() {
        this._isPaused && this._checkSession() && (this._isPaused = cc11001100_hook("this._isPaused", !1, "assign"), this.startRecording(), tX && t1.info("Resuming replay"));
      }
      async sendBufferedReplayOrFlush({
        continueRecording: e = !0
      } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let t = cc11001100_hook("t", Date.now(), "var-init");
        tX && t1.info("Converting buffer to session"), await this.flushImmediate();
        let r = cc11001100_hook("r", this.stopRecording(), "var-init");
        e && r && "session" !== this.recordingMode && (this.recordingMode = cc11001100_hook("this.recordingMode", "session", "assign"), this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording());
      }
      addUpdate(e) {
        let t = cc11001100_hook("t", e(), "var-init");
        "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush();
      }
      triggerUserActivity() {
        if (this._updateUserActivity(), !this._stopRecording) {
          if (!this._checkSession()) return;
          this.resume();
          return;
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity();
      }
      updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity();
      }
      conditionalFlush() {
        return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate();
      }
      flush() {
        return this._debouncedFlush();
      }
      flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush();
      }
      cancelFlush() {
        this._debouncedFlush.cancel();
      }
      getSessionId() {
        return this.session?.id;
      }
      checkAndHandleExpiredSession() {
        if (this._lastActivity && rr(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
          this.pause();
          return;
        }
        return !!this._checkSession();
      }
      setInitialState() {
        let e = cc11001100_hook("e", `${J.location.pathname}${J.location.hash}${J.location.search}`, "var-init"),
          t = cc11001100_hook("t", `${J.location.origin}${e}`, "var-init");
        this.performanceEntries = cc11001100_hook("this.performanceEntries", [], "assign"), this.replayPerformanceEntries = cc11001100_hook("this.replayPerformanceEntries", [], "assign"), this._clearContext(), this._context.initialUrl = cc11001100_hook("this._context.initialUrl", t, "assign"), this._context.initialTimestamp = cc11001100_hook("this._context.initialTimestamp", Date.now(), "assign"), this._context.urls.push(t);
      }
      throttledAddEvent(e, t) {
        let r = cc11001100_hook("r", this._throttledAddEvent(e, t), "var-init");
        if (r === rU) {
          let e = cc11001100_hook("e", tU({
            category: cc11001100_hook("category", "replay.throttled", "object-key-init")
          }), "var-init");
          this.addUpdate(() => !ro(this, {
            type: cc11001100_hook("type", 5, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", e.timestamp || 0, "object-key-init"),
            data: {
              tag: cc11001100_hook("tag", "breadcrumb", "object-key-init"),
              payload: cc11001100_hook("payload", e, "object-key-init"),
              metric: cc11001100_hook("metric", !0, "object-key-init")
            }
          }));
        }
        return r;
      }
      getCurrentRoute() {
        let e = cc11001100_hook("e", this.lastActiveSpan || (0, O.HN)(), "var-init"),
          t = cc11001100_hook("t", e && (0, O.Gx)(e), "var-init"),
          r = cc11001100_hook("r", t && (0, O.XU)(t).data || {}, "var-init"),
          n = cc11001100_hook("n", r[W.Zj], "var-init");
        if (t && n && ["route", "custom"].includes(n)) return (0, O.XU)(t).description;
      }
      _initializeRecording() {
        this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = cc11001100_hook("this.eventBuffer", function ({
          useCompression: e,
          workerUrl: t
        }) {
          if (e && window.Worker) {
            let e = cc11001100_hook("e", function (e) {
              try {
                let t = cc11001100_hook("t", e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function () {
                  let e = cc11001100_hook("e", new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort((function(t,n){return p[n.s]-p[t.s]||t.f-n.f}));s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){G.prototype.flush.call(this)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),s=i.length;return q(i,n),j(i,s-8,r.d()),j(i,s-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']), "var-init");
                  return URL.createObjectURL(e);
                }()), "var-init");
                if (!t) return;
                tX && t1.info(`Using compression worker${e ? ` from ${e}` : ""}`);
                let r = cc11001100_hook("r", new Worker(t), "var-init");
                return new t6(r);
              } catch (e) {
                tX && t1.exception(e, "Failed to create compression worker");
              }
            }(t), "var-init");
            if (e) return e;
          }
          return tX && t1.info("Using simple buffer"), new t3();
        }({
          useCompression: cc11001100_hook("useCompression", this._options.useCompression, "object-key-init"),
          workerUrl: cc11001100_hook("workerUrl", this._options.workerUrl, "object-key-init")
        }), "assign"), this._removeListeners(), this._addListeners(), this._isEnabled = cc11001100_hook("this._isEnabled", !0, "assign"), this._isPaused = cc11001100_hook("this._isPaused", !1, "assign"), this.startRecording();
      }
      _initializeSessionForSampling(e) {
        let t = cc11001100_hook("t", this._options.errorSampleRate > 0, "var-init"),
          r = cc11001100_hook("r", rs({
            sessionIdleExpire: cc11001100_hook("sessionIdleExpire", this.timeouts.sessionIdleExpire, "object-key-init"),
            maxReplayDuration: cc11001100_hook("maxReplayDuration", this._options.maxReplayDuration, "object-key-init"),
            previousSessionId: cc11001100_hook("previousSessionId", e, "object-key-init")
          }, {
            stickySession: cc11001100_hook("stickySession", this._options.stickySession, "object-key-init"),
            sessionSampleRate: cc11001100_hook("sessionSampleRate", this._options.sessionSampleRate, "object-key-init"),
            allowBuffering: cc11001100_hook("allowBuffering", t, "object-key-init")
          }), "var-init");
        this.session = cc11001100_hook("this.session", r, "assign");
      }
      _checkSession() {
        if (!this.session) return !1;
        let e = cc11001100_hook("e", this.session, "var-init");
        return !ri(e, {
          sessionIdleExpire: cc11001100_hook("sessionIdleExpire", this.timeouts.sessionIdleExpire, "object-key-init"),
          maxReplayDuration: cc11001100_hook("maxReplayDuration", this._options.maxReplayDuration, "object-key-init")
        }) || (this._refreshSession(e), !1);
      }
      async _refreshSession(e) {
        this._isEnabled && (await this.stop({
          reason: cc11001100_hook("reason", "refresh session", "object-key-init")
        }), this.initializeSampling(e.id));
      }
      _addListeners() {
        try {
          J.document.addEventListener("visibilitychange", this._handleVisibilityChange), J.addEventListener("blur", this._handleWindowBlur), J.addEventListener("focus", this._handleWindowFocus), J.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function (e, {
            autoFlushOnFeedback: t
          }) {
            let r = cc11001100_hook("r", (0, D.s3)(), "var-init");
            (0, K.O)(tW(e)), (0, G.a)(t => {
              if (!e.isEnabled()) return;
              let r = cc11001100_hook("r", function (e) {
                let {
                    from: t,
                    to: r
                  } = cc11001100_hook("", e, "var-init"),
                  n = cc11001100_hook("n", Date.now() / 1e3, "var-init");
                return {
                  type: cc11001100_hook("type", "navigation.push", "object-key-init"),
                  start: cc11001100_hook("start", n, "object-key-init"),
                  end: cc11001100_hook("end", n, "object-key-init"),
                  name: cc11001100_hook("name", r, "object-key-init"),
                  data: {
                    previous: cc11001100_hook("previous", t, "object-key-init")
                  }
                };
              }(t), "var-init");
              null !== r && (e.getContext().urls.push(r.name), e.triggerUserActivity(), e.addUpdate(() => (rp(e, [r]), !1)));
            }), function (e) {
              let t = cc11001100_hook("t", (0, D.s3)(), "var-init");
              t && t.on("beforeAddBreadcrumb", t => function (e, t) {
                if (!e.isEnabled() || !rd(t)) return;
                let r = cc11001100_hook("r", !rd(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function (e) {
                  let t = cc11001100_hook("t", e.data?.arguments, "var-init");
                  if (!Array.isArray(t) || 0 === t.length) return tU(e);
                  let r = cc11001100_hook("r", !1, "var-init"),
                    n = cc11001100_hook("n", t.map(e => {
                      if (!e) return e;
                      if ("string" == typeof e) return e.length > 5e3 ? (r = cc11001100_hook("r", !0, "assign"), `${e.slice(0, 5e3)}…`) : e;
                      if ("object" == typeof e) try {
                        let t = cc11001100_hook("t", (0, b.Fv)(e, 7), "var-init"),
                          n = cc11001100_hook("n", JSON.stringify(t), "var-init");
                        if (n.length > 5e3) return r = cc11001100_hook("r", !0, "assign"), `${JSON.stringify(t, null, 2).slice(0, 5e3)}…`;
                        return t;
                      } catch {}
                      return e;
                    }), "var-init");
                  return tU({
                    ...e,
                    data: {
                      ...e.data,
                      arguments: n,
                      ...(r ? {
                        _meta: {
                          warnings: cc11001100_hook("warnings", ["CONSOLE_ARG_TRUNCATED"], "object-key-init")
                        }
                      } : {})
                    }
                  });
                }(t) : tU(t), "var-init");
                r && tx(e, r);
              }(e, t));
            }(e), function (e) {
              let t = cc11001100_hook("t", (0, D.s3)(), "var-init");
              try {
                let {
                    networkDetailAllowUrls: r,
                    networkDetailDenyUrls: n,
                    networkCaptureBodies: i,
                    networkRequestHeaders: s,
                    networkResponseHeaders: o
                  } = cc11001100_hook("", e.getOptions(), "var-init"),
                  a = cc11001100_hook("a", {
                    replay: cc11001100_hook("replay", e, "object-key-init"),
                    networkDetailAllowUrls: cc11001100_hook("networkDetailAllowUrls", r, "object-key-init"),
                    networkDetailDenyUrls: cc11001100_hook("networkDetailDenyUrls", n, "object-key-init"),
                    networkCaptureBodies: cc11001100_hook("networkCaptureBodies", i, "object-key-init"),
                    networkRequestHeaders: cc11001100_hook("networkRequestHeaders", s, "object-key-init"),
                    networkResponseHeaders: cc11001100_hook("networkResponseHeaders", o, "object-key-init")
                  }, "var-init");
                t && t.on("beforeAddBreadcrumb", (e, t) => function (e, t, r) {
                  if (t.data) try {
                    "xhr" === t.category && r?.xhr && (function (e, t) {
                      let {
                        xhr: r,
                        input: n
                      } = cc11001100_hook("", t, "var-init");
                      if (!r) return;
                      let i = cc11001100_hook("i", rm(n), "var-init"),
                        s = cc11001100_hook("s", r.getResponseHeader("content-length") ? ry(r.getResponseHeader("content-length")) : function (e, t) {
                          try {
                            let r = cc11001100_hook("r", "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e, "var-init");
                            return rm(r);
                          } catch {
                            return;
                          }
                        }(r.response, r.responseType), "var-init");
                      void 0 !== i && (e.data.request_body_size = cc11001100_hook("e.data.request_body_size", i, "assign")), void 0 !== s && (e.data.response_body_size = cc11001100_hook("e.data.response_body_size", s, "assign"));
                    }(t, r), rx(t, r, e)), "fetch" === t.category && r?.response && (function (e, t) {
                      let {
                          input: r,
                          response: n
                        } = cc11001100_hook("", t, "var-init"),
                        i = cc11001100_hook("i", r ? (0, q.dn)(r) : void 0, "var-init"),
                        s = cc11001100_hook("s", rm(i), "var-init"),
                        o = cc11001100_hook("o", n ? ry(n.headers.get("content-length")) : void 0, "var-init");
                      void 0 !== s && (e.data.request_body_size = cc11001100_hook("e.data.request_body_size", s, "assign")), void 0 !== o && (e.data.response_body_size = cc11001100_hook("e.data.response_body_size", o, "assign"));
                    }(t, r), rE(t, r, e));
                  } catch (e) {
                    tX && t1.exception(e, "Error when enriching network breadcrumb");
                  }
                }(a, e, t));
              } catch {}
            }(e);
            let n = cc11001100_hook("n", Object.assign((t, r) => {
              if (!e.isEnabled() || e.isPaused()) return t;
              if ("replay_event" === t.type) return delete t.breadcrumbs, t;
              if (t.type && !rc(t) && !ru(t)) return t;
              let n = cc11001100_hook("n", e.checkAndHandleExpiredSession(), "var-init");
              if (!n) return rh(), t;
              if (ru(t)) return e.flush(), t.contexts.feedback.replay_id = cc11001100_hook("t.contexts.feedback.replay_id", e.getSessionId(), "assign"), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                type: cc11001100_hook("type", e5.Custom, "object-key-init"),
                timestamp: cc11001100_hook("timestamp", 1e3 * t.timestamp, "object-key-init"),
                data: {
                  tag: cc11001100_hook("tag", "breadcrumb", "object-key-init"),
                  payload: {
                    timestamp: cc11001100_hook("timestamp", t.timestamp, "object-key-init"),
                    type: cc11001100_hook("type", "default", "object-key-init"),
                    category: cc11001100_hook("category", "sentry.feedback", "object-key-init"),
                    data: {
                      feedbackId: cc11001100_hook("feedbackId", t.event_id, "object-key-init")
                    }
                  }
                }
              }), !1)), t;
              if (!t.type && t.exception && t.exception.values && t.exception.values.length && r.originalException?.__rrweb__ && !e.getOptions()._experiments.captureExceptions) return tX && t1.log("Ignoring error from rrweb internals", t), null;
              let i = cc11001100_hook("i", "buffer" === e.recordingMode && t.message !== X && !!t.exception && !t.type && t7(e.getOptions().errorSampleRate), "var-init"),
                s = cc11001100_hook("s", i || "session" === e.recordingMode, "var-init");
              return s && (t.tags = cc11001100_hook("t.tags", {
                ...t.tags,
                replayId: e.getSessionId()
              }, "assign")), t;
            }, {
              id: cc11001100_hook("id", "Replay", "object-key-init")
            }), "var-init");
            (0, R.Qy)(n), r && (r.on("beforeSendEvent", t => {
              e.isEnabled() && !t.type && function (e, t) {
                let r = cc11001100_hook("r", t.exception?.values?.[0]?.value, "var-init");
                if ("string" == typeof r && (r.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
                  let t = cc11001100_hook("t", tU({
                    category: cc11001100_hook("category", "replay.hydrate-error", "object-key-init"),
                    data: {
                      url: cc11001100_hook("url", (0, k.l4)(), "object-key-init")
                    }
                  }), "var-init");
                  tx(e, t);
                }
              }(e, t);
            }), r.on("afterSendEvent", (t, r) => {
              if (!e.isEnabled() || t.type && !rc(t)) return;
              let n = cc11001100_hook("n", r?.statusCode, "var-init");
              if (n && !(n < 200) && !(n >= 300)) {
                if (rc(t)) {
                  (function (e, t) {
                    let r = cc11001100_hook("r", e.getContext(), "var-init");
                    t.contexts?.trace?.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id);
                  })(e, t);
                  return;
                }
                (function (e, t) {
                  let r = cc11001100_hook("r", e.getContext(), "var-init");
                  if (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                  let {
                    beforeErrorSampling: n
                  } = cc11001100_hook("", e.getOptions(), "var-init");
                  ("function" != typeof n || n(t)) && (0, $.iK)(async () => {
                    try {
                      await e.sendBufferedReplayOrFlush();
                    } catch (t) {
                      e.handleException(t);
                    }
                  });
                })(e, t);
              }
            }), r.on("createDsc", t => {
              let r = cc11001100_hook("r", e.getSessionId(), "var-init");
              if (r && e.isEnabled() && "session" === e.recordingMode) {
                let n = cc11001100_hook("n", e.checkAndHandleExpiredSession(), "var-init");
                n && (t.replay_id = cc11001100_hook("t.replay_id", r, "assign"));
              }
            }), r.on("spanStart", t => {
              e.lastActiveSpan = cc11001100_hook("e.lastActiveSpan", t, "assign");
            }), r.on("spanEnd", t => {
              e.lastActiveSpan = cc11001100_hook("e.lastActiveSpan", t, "assign");
            }), r.on("beforeSendFeedback", async (r, n) => {
              let i = cc11001100_hook("i", e.getSessionId(), "var-init");
              n?.includeReplay && e.isEnabled() && i && r.contexts?.feedback && ("api" === r.contexts.feedback.source && t && (await e.flush()), r.contexts.feedback.replay_id = cc11001100_hook("r.contexts.feedback.replay_id", i, "assign"));
            }), t && r.on("openFeedbackWidget", async () => {
              await e.flush();
            }));
          }(this, {
            autoFlushOnFeedback: cc11001100_hook("autoFlushOnFeedback", this._options._experiments.autoFlushOnFeedback, "object-key-init")
          }), this._hasInitializedCoreListeners = cc11001100_hook("this._hasInitializedCoreListeners", !0, "assign"));
        } catch (e) {
          this.handleException(e);
        }
        this._performanceCleanupCallback = cc11001100_hook("this._performanceCleanupCallback", function (e) {
          function t(t) {
            cc11001100_hook("t", t, "function-parameter");
            e.performanceEntries.includes(t) || e.performanceEntries.push(t);
          }
          function r({
            entries: e
          }) {
            e.forEach(t);
          }
          let n = cc11001100_hook("n", [], "var-init");
          return ["navigation", "paint", "resource"].forEach(e => {
            n.push((0, H._j)(e, r));
          }), n.push((0, H.$A)(t$(tV, e)), (0, H.PR)(t$(tK, e)), (0, H.to)(t$(tG, e)), (0, H.YF)(t$(tJ, e))), () => {
            n.forEach(e => e());
          };
        }(this), "assign");
      }
      _removeListeners() {
        try {
          J.document.removeEventListener("visibilitychange", this._handleVisibilityChange), J.removeEventListener("blur", this._handleWindowBlur), J.removeEventListener("focus", this._handleWindowFocus), J.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (e) {
          this.handleException(e);
        }
      }
      _doChangeToBackgroundTasks(e) {
        if (!this.session) return;
        let t = cc11001100_hook("t", rn(this.session, {
          maxReplayDuration: cc11001100_hook("maxReplayDuration", this._options.maxReplayDuration, "object-key-init"),
          sessionIdleExpire: cc11001100_hook("sessionIdleExpire", this.timeouts.sessionIdleExpire, "object-key-init")
        }), "var-init");
        t || (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
      }
      _doChangeToForegroundTasks(e) {
        if (!this.session) return;
        let t = cc11001100_hook("t", this.checkAndHandleExpiredSession(), "var-init");
        if (!t) {
          tX && t1.info("Document has become active, but session has expired");
          return;
        }
        e && this._createCustomBreadcrumb(e);
      }
      _updateUserActivity(e = Date.now()) {
        this._lastActivity = cc11001100_hook("this._lastActivity", e, "assign");
      }
      _updateSessionActivity(e = Date.now()) {
        this.session && (this.session.lastActivity = cc11001100_hook("this.session.lastActivity", e, "assign"), this._maybeSaveSession());
      }
      _createCustomBreadcrumb(e) {
        this.addUpdate(() => {
          this.throttledAddEvent({
            type: cc11001100_hook("type", e5.Custom, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", e.timestamp || 0, "object-key-init"),
            data: {
              tag: cc11001100_hook("tag", "breadcrumb", "object-key-init"),
              payload: cc11001100_hook("payload", e, "object-key-init")
            }
          });
        });
      }
      _addPerformanceEntries() {
        let e = cc11001100_hook("e", this.performanceEntries.map(tH).filter(Boolean).concat(this.replayPerformanceEntries), "var-init");
        if (this.performanceEntries = cc11001100_hook("this.performanceEntries", [], "assign"), this.replayPerformanceEntries = cc11001100_hook("this.replayPerformanceEntries", [], "assign"), this._requiresManualStart) {
          let t = cc11001100_hook("t", this._context.initialTimestamp / 1e3, "var-init");
          e = cc11001100_hook("e", e.filter(e => e.start >= t), "assign");
        }
        return Promise.all(rp(this, e));
      }
      _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = cc11001100_hook("this._context.urls", [], "assign");
      }
      _updateInitialTimestampFromEventBuffer() {
        let {
          session: e,
          eventBuffer: t
        } = cc11001100_hook("", this, "var-init");
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        let r = cc11001100_hook("r", t.getEarliestTimestamp(), "var-init");
        r && r < this._context.initialTimestamp && (this._context.initialTimestamp = cc11001100_hook("this._context.initialTimestamp", r, "assign"));
      }
      _popEventContext() {
        let e = cc11001100_hook("e", {
          initialTimestamp: cc11001100_hook("initialTimestamp", this._context.initialTimestamp, "object-key-init"),
          initialUrl: cc11001100_hook("initialUrl", this._context.initialUrl, "object-key-init"),
          errorIds: cc11001100_hook("errorIds", Array.from(this._context.errorIds), "object-key-init"),
          traceIds: cc11001100_hook("traceIds", Array.from(this._context.traceIds), "object-key-init"),
          urls: cc11001100_hook("urls", this._context.urls, "object-key-init")
        }, "var-init");
        return this._clearContext(), e;
      }
      async _runFlush() {
        let e = cc11001100_hook("e", this.getSessionId(), "var-init");
        if (!this.session || !this.eventBuffer || !e) {
          tX && t1.error("No session or eventBuffer found to flush.");
          return;
        }
        if (await this._addPerformanceEntries(), this.eventBuffer?.hasEvents && (await rD(this), this.eventBuffer && e === this.getSessionId())) try {
          this._updateInitialTimestampFromEventBuffer();
          let t = cc11001100_hook("t", Date.now(), "var-init");
          if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw Error("Session is too long, not sending replay");
          let r = cc11001100_hook("r", this._popEventContext(), "var-init"),
            n = cc11001100_hook("n", this.session.segmentId++, "var-init");
          this._maybeSaveSession();
          let i = cc11001100_hook("i", await this.eventBuffer.finish(), "var-init");
          await rF({
            replayId: cc11001100_hook("replayId", e, "object-key-init"),
            recordingData: cc11001100_hook("recordingData", i, "object-key-init"),
            segmentId: cc11001100_hook("segmentId", n, "object-key-init"),
            eventContext: cc11001100_hook("eventContext", r, "object-key-init"),
            session: cc11001100_hook("session", this.session, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", t, "object-key-init"),
            onError: cc11001100_hook("onError", e => this.handleException(e), "object-key-init")
          });
        } catch (t) {
          this.handleException(t), this.stop({
            reason: cc11001100_hook("reason", "sendReplay", "object-key-init")
          });
          let e = cc11001100_hook("e", (0, D.s3)(), "var-init");
          e && e.recordDroppedEvent(t instanceof rP ? "ratelimit_backoff" : "send_error", "replay");
        }
      }
      async _flush({
        force: e = !1
      } = {}) {
        if (!this._isEnabled && !e) return;
        if (!this.checkAndHandleExpiredSession()) {
          tX && t1.error("Attempting to finish replay event after session expired.");
          return;
        }
        if (!this.session) return;
        let t = cc11001100_hook("t", this.session.started, "var-init"),
          r = cc11001100_hook("r", Date.now(), "var-init"),
          n = cc11001100_hook("n", r - t, "var-init");
        this._debouncedFlush.cancel();
        let i = cc11001100_hook("i", n < this._options.minReplayDuration, "var-init"),
          s = cc11001100_hook("s", n > this._options.maxReplayDuration + 5e3, "var-init");
        if (i || s) {
          tX && t1.info(`Session duration (${Math.floor(n / 1e3)}s) is too ${i ? "short" : "long"}, not sending replay.`), i && this._debouncedFlush();
          return;
        }
        let o = cc11001100_hook("o", this.eventBuffer, "var-init");
        o && 0 === this.session.segmentId && !o.hasCheckout && tX && t1.info("Flushing initial segment without checkout.");
        let a = cc11001100_hook("a", !!this._flushLock, "var-init");
        this._flushLock || (this._flushLock = cc11001100_hook("this._flushLock", this._runFlush(), "assign"));
        try {
          await this._flushLock;
        } catch (e) {
          this.handleException(e);
        } finally {
          this._flushLock = cc11001100_hook("this._flushLock", void 0, "assign"), a && this._debouncedFlush();
        }
      }
      _maybeSaveSession() {
        this.session && this._options.stickySession && re(this.session);
      }
      _onMutationHandler(e) {
        let t = cc11001100_hook("t", e.length, "var-init"),
          r = cc11001100_hook("r", this._options.mutationLimit, "var-init"),
          n = cc11001100_hook("n", this._options.mutationBreadcrumbLimit, "var-init"),
          i = cc11001100_hook("i", r && t > r, "var-init");
        if (t > n || i) {
          let e = cc11001100_hook("e", tU({
            category: cc11001100_hook("category", "replay.mutations", "object-key-init"),
            data: {
              count: cc11001100_hook("count", t, "object-key-init"),
              limit: cc11001100_hook("limit", i, "object-key-init")
            }
          }), "var-init");
          this._createCustomBreadcrumb(e);
        }
        return !i || (this.stop({
          reason: cc11001100_hook("reason", "mutationLimit", "object-key-init"),
          forceFlush: cc11001100_hook("forceFlush", "session" === this.recordingMode, "object-key-init")
        }), !1);
      }
    }
    function rW(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return [...e, ...t].join(",");
    }
    let rz = cc11001100_hook("rz", 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]', "var-init"),
      rj = cc11001100_hook("rj", ["content-length", "content-type", "accept"], "var-init"),
      r$ = cc11001100_hook("r$", !1, "var-init"),
      rH = cc11001100_hook("rH", e => new rq(e), "var-init");
    class rq {
      constructor({
        flushMinDelay: e = 5e3,
        flushMaxDelay: t = 5500,
        minReplayDuration: r = 4999,
        maxReplayDuration: n = 36e5,
        stickySession: i = !0,
        useCompression: s = !0,
        workerUrl: o,
        _experiments: a = {},
        maskAllText: l = !0,
        maskAllInputs: c = !0,
        blockAllMedia: u = !0,
        mutationBreadcrumbLimit: d = 750,
        mutationLimit: h = 1e4,
        slowClickTimeout: p = 7e3,
        slowClickIgnoreSelectors: f = [],
        networkDetailAllowUrls: m = [],
        networkDetailDenyUrls: y = [],
        networkCaptureBodies: g = !0,
        networkRequestHeaders: _ = [],
        networkResponseHeaders: S = [],
        mask: v = [],
        maskAttributes: w = ["title", "placeholder"],
        unmask: b = [],
        block: E = [],
        unblock: k = [],
        ignore: M = [],
        maskFn: I,
        beforeAddRecordingEvent: C,
        beforeErrorSampling: T,
        onError: R
      } = {}) {
        this.name = cc11001100_hook("this.name", "Replay", "assign");
        let x = cc11001100_hook("x", function ({
          mask: e,
          unmask: t,
          block: r,
          unblock: n,
          ignore: i
        }) {
          let s = cc11001100_hook("s", rW(e, [".sentry-mask", "[data-sentry-mask]"]), "var-init"),
            o = cc11001100_hook("o", rW(t, []), "var-init"),
            a = cc11001100_hook("a", {
              maskTextSelector: cc11001100_hook("maskTextSelector", s, "object-key-init"),
              unmaskTextSelector: cc11001100_hook("unmaskTextSelector", o, "object-key-init"),
              blockSelector: cc11001100_hook("blockSelector", rW(r, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]), "object-key-init"),
              unblockSelector: cc11001100_hook("unblockSelector", rW(n, []), "object-key-init"),
              ignoreSelector: cc11001100_hook("ignoreSelector", rW(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]']), "object-key-init")
            }, "var-init");
          return a;
        }({
          mask: cc11001100_hook("mask", v, "object-key-init"),
          unmask: cc11001100_hook("unmask", b, "object-key-init"),
          block: cc11001100_hook("block", E, "object-key-init"),
          unblock: cc11001100_hook("unblock", k, "object-key-init"),
          ignore: cc11001100_hook("ignore", M, "object-key-init")
        }), "var-init");
        if (this._recordingOptions = cc11001100_hook("this._recordingOptions", {
          maskAllInputs: cc11001100_hook("maskAllInputs", c, "object-key-init"),
          maskAllText: cc11001100_hook("maskAllText", l, "object-key-init"),
          maskInputOptions: {
            password: cc11001100_hook("password", !0, "object-key-init")
          },
          maskTextFn: cc11001100_hook("maskTextFn", I, "object-key-init"),
          maskInputFn: cc11001100_hook("maskInputFn", I, "object-key-init"),
          maskAttributeFn: cc11001100_hook("maskAttributeFn", (e, t, r) => function ({
            el: e,
            key: t,
            maskAttributes: r,
            maskAllText: n,
            privacyOptions: i,
            value: s
          }) {
            return !n || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? s : r.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s;
          }({
            maskAttributes: cc11001100_hook("maskAttributes", w, "object-key-init"),
            maskAllText: cc11001100_hook("maskAllText", l, "object-key-init"),
            privacyOptions: cc11001100_hook("privacyOptions", x, "object-key-init"),
            key: cc11001100_hook("key", e, "object-key-init"),
            value: cc11001100_hook("value", t, "object-key-init"),
            el: cc11001100_hook("el", r, "object-key-init")
          }), "object-key-init"),
          ...x,
          slimDOMOptions: "all",
          inlineStylesheet: !0,
          inlineImages: !1,
          collectFonts: !0,
          errorHandler: e => {
            try {
              e.__rrweb__ = cc11001100_hook("e.__rrweb__", !0, "assign");
            } catch (e) {}
          },
          recordCrossOriginIframes: !!a.recordCrossOriginIframes
        }, "assign"), this._initialOptions = cc11001100_hook("this._initialOptions", {
          flushMinDelay: cc11001100_hook("flushMinDelay", e, "object-key-init"),
          flushMaxDelay: cc11001100_hook("flushMaxDelay", t, "object-key-init"),
          minReplayDuration: cc11001100_hook("minReplayDuration", Math.min(r, 15e3), "object-key-init"),
          maxReplayDuration: cc11001100_hook("maxReplayDuration", Math.min(n, 36e5), "object-key-init"),
          stickySession: cc11001100_hook("stickySession", i, "object-key-init"),
          useCompression: cc11001100_hook("useCompression", s, "object-key-init"),
          workerUrl: cc11001100_hook("workerUrl", o, "object-key-init"),
          blockAllMedia: cc11001100_hook("blockAllMedia", u, "object-key-init"),
          maskAllInputs: cc11001100_hook("maskAllInputs", c, "object-key-init"),
          maskAllText: cc11001100_hook("maskAllText", l, "object-key-init"),
          mutationBreadcrumbLimit: cc11001100_hook("mutationBreadcrumbLimit", d, "object-key-init"),
          mutationLimit: cc11001100_hook("mutationLimit", h, "object-key-init"),
          slowClickTimeout: cc11001100_hook("slowClickTimeout", p, "object-key-init"),
          slowClickIgnoreSelectors: cc11001100_hook("slowClickIgnoreSelectors", f, "object-key-init"),
          networkDetailAllowUrls: cc11001100_hook("networkDetailAllowUrls", m, "object-key-init"),
          networkDetailDenyUrls: cc11001100_hook("networkDetailDenyUrls", y, "object-key-init"),
          networkCaptureBodies: cc11001100_hook("networkCaptureBodies", g, "object-key-init"),
          networkRequestHeaders: cc11001100_hook("networkRequestHeaders", rV(_), "object-key-init"),
          networkResponseHeaders: cc11001100_hook("networkResponseHeaders", rV(S), "object-key-init"),
          beforeAddRecordingEvent: cc11001100_hook("beforeAddRecordingEvent", C, "object-key-init"),
          beforeErrorSampling: cc11001100_hook("beforeErrorSampling", T, "object-key-init"),
          onError: cc11001100_hook("onError", R, "object-key-init"),
          _experiments: cc11001100_hook("_experiments", a, "object-key-init")
        }, "assign"), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = cc11001100_hook("this._recordingOptions.blockSelector", this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${rz}` : rz, "assign")), this._isInitialized && (0, z.j)()) throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = cc11001100_hook("this._isInitialized", !0, "assign");
      }
      get _isInitialized() {
        return r$;
      }
      set _isInitialized(e) {
        r$ = cc11001100_hook("r$", e, "assign");
      }
      afterAllSetup(e) {
        (0, z.j)() && !this._replay && (this._setup(e), this._initialize(e));
      }
      start() {
        this._replay && this._replay.start();
      }
      startBuffering() {
        this._replay && this._replay.startBuffering();
      }
      stop() {
        return this._replay ? this._replay.stop({
          forceFlush: cc11001100_hook("forceFlush", "session" === this._replay.recordingMode, "object-key-init")
        }) : Promise.resolve();
      }
      flush(e) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve();
      }
      getReplayId() {
        if (this._replay?.isEnabled()) return this._replay.getSessionId();
      }
      getRecordingMode() {
        if (this._replay?.isEnabled()) return this._replay.recordingMode;
      }
      _initialize(e) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling());
      }
      _setup(e) {
        let t = cc11001100_hook("t", function (e, t) {
          let r = cc11001100_hook("r", t.getOptions(), "var-init"),
            n = cc11001100_hook("n", {
              sessionSampleRate: cc11001100_hook("sessionSampleRate", 0, "object-key-init"),
              errorSampleRate: cc11001100_hook("errorSampleRate", 0, "object-key-init"),
              ...(0, E.Jr)(e)
            }, "var-init"),
            i = cc11001100_hook("i", (0, j.o)(r.replaysSessionSampleRate), "var-init"),
            s = cc11001100_hook("s", (0, j.o)(r.replaysOnErrorSampleRate), "var-init");
          return null == i && null == s && (0, C.Cf)(() => {
            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
          }), null != i && (n.sessionSampleRate = cc11001100_hook("n.sessionSampleRate", i, "assign")), null != s && (n.errorSampleRate = cc11001100_hook("n.errorSampleRate", s, "assign")), n;
        }(this._initialOptions, e), "var-init");
        this._replay = cc11001100_hook("this._replay", new rB({
          options: cc11001100_hook("options", t, "object-key-init"),
          recordingOptions: cc11001100_hook("recordingOptions", this._recordingOptions, "object-key-init")
        }), "assign");
      }
      _maybeLoadFromReplayCanvasIntegration(e) {
        try {
          let t = cc11001100_hook("t", e.getIntegrationByName("ReplayCanvas"), "var-init");
          if (!t) return;
          this._replay._canvas = cc11001100_hook("this._replay._canvas", t.getOptions(), "assign");
        } catch {}
      }
    }
    function rV(e) {
      cc11001100_hook("e", e, "function-parameter");
      return [...rj, ...e.map(e => e.toLowerCase())];
    }
  }
}]);