try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "ddd2ebf2-db40-48d8-9843-d7fe7ae675a2", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-ddd2ebf2-db40-48d8-9843-d7fe7ae675a2", "assign"));
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[8326], {
  64549: function (e, t, n) {
    function r(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return !1;
    }
    Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), Object.defineProperty(t, "getDomainLocale", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return r;
      }
    }), n(43997), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), Object.assign(t.default, t), e.exports = cc11001100_hook("e.exports", t.default, "assign"));
  },
  68326: function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), Object.defineProperty(t, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return m;
      }
    });
    let r = cc11001100_hook("r", n(21024), "var-init"),
      l = cc11001100_hook("l", r._(n(2265)), "var-init"),
      o = cc11001100_hook("o", n(99121), "var-init"),
      u = cc11001100_hook("u", n(68664), "var-init"),
      f = cc11001100_hook("f", n(98130), "var-init"),
      a = cc11001100_hook("a", n(36681), "var-init"),
      i = cc11001100_hook("i", n(19524), "var-init"),
      c = cc11001100_hook("c", n(36304), "var-init"),
      d = cc11001100_hook("d", n(76313), "var-init"),
      s = cc11001100_hook("s", n(71581), "var-init"),
      p = cc11001100_hook("p", n(64549), "var-init"),
      b = cc11001100_hook("b", n(89872), "var-init"),
      y = cc11001100_hook("y", n(73814), "var-init"),
      h = cc11001100_hook("h", new Set(), "var-init");
    function g(e, t, n, r, l, o) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("l", l, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      if (!o && !(0, u.isLocalURL)(t)) return;
      if (!r.bypassPrefetchedCheck) {
        let l = cc11001100_hook("l", void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0, "var-init"),
          o = cc11001100_hook("o", t + "%" + n + "%" + l, "var-init");
        if (h.has(o)) return;
        h.add(o);
      }
      let f = cc11001100_hook("f", o ? e.prefetch(t, l) : e.prefetch(t, n, r), "var-init");
      Promise.resolve(f).catch(e => {});
    }
    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "string" == typeof e ? e : (0, f.formatUrl)(e);
    }
    let _ = cc11001100_hook("_", l.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: f,
          as: h,
          children: _,
          prefetch: m = null,
          passHref: k,
          replace: C,
          shallow: M,
          scroll: P,
          locale: j,
          onClick: E,
          onMouseEnter: O,
          onTouchStart: w,
          legacyBehavior: I = !1,
          ...L
        } = cc11001100_hook("", e, "var-init");
        n = cc11001100_hook("n", _, "assign"), I && ("string" == typeof n || "number" == typeof n) && (n = cc11001100_hook("n", l.default.createElement("a", null, n), "assign"));
        let T = cc11001100_hook("T", l.default.useContext(c.RouterContext), "var-init"),
          x = cc11001100_hook("x", l.default.useContext(d.AppRouterContext), "var-init"),
          R = cc11001100_hook("R", null != T ? T : x, "var-init"),
          D = cc11001100_hook("D", !T, "var-init"),
          S = cc11001100_hook("S", !1 !== m, "var-init"),
          U = cc11001100_hook("U", null === m ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL, "var-init"),
          {
            href: K,
            as: A
          } = cc11001100_hook("", l.default.useMemo(() => {
            if (!T) {
              let e = cc11001100_hook("e", v(f), "var-init");
              return {
                href: cc11001100_hook("href", e, "object-key-init"),
                as: cc11001100_hook("as", h ? v(h) : e, "object-key-init")
              };
            }
            let [e, t] = cc11001100_hook("", (0, o.resolveHref)(T, f, !0), "var-init");
            return {
              href: cc11001100_hook("href", e, "object-key-init"),
              as: cc11001100_hook("as", h ? (0, o.resolveHref)(T, h) : t || e, "object-key-init")
            };
          }, [T, f, h]), "var-init"),
          N = cc11001100_hook("N", l.default.useRef(K), "var-init"),
          H = cc11001100_hook("H", l.default.useRef(A), "var-init");
        I && (r = cc11001100_hook("r", l.default.Children.only(n), "assign"));
        let q = cc11001100_hook("q", I ? r && "object" == typeof r && r.ref : t, "var-init"),
          [z, B, F] = cc11001100_hook("", (0, s.useIntersection)({
            rootMargin: cc11001100_hook("rootMargin", "200px", "object-key-init")
          }), "var-init"),
          G = cc11001100_hook("G", l.default.useCallback(e => {
            (H.current !== A || N.current !== K) && (F(), H.current = cc11001100_hook("H.current", A, "assign"), N.current = cc11001100_hook("N.current", K, "assign")), z(e), q && ("function" == typeof q ? q(e) : "object" == typeof q && (q.current = cc11001100_hook("q.current", e, "assign")));
          }, [A, q, K, F, z]), "var-init");
        l.default.useEffect(() => {
          R && B && S && g(R, K, A, {
            locale: cc11001100_hook("locale", j, "object-key-init")
          }, {
            kind: cc11001100_hook("kind", U, "object-key-init")
          }, D);
        }, [A, K, B, j, S, null == T ? void 0 : T.locale, R, D, U]);
        let J = cc11001100_hook("J", {
          ref: cc11001100_hook("ref", G, "object-key-init"),
          onClick(e) {
            I || "function" != typeof E || E(e), I && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), R && !e.defaultPrevented && function (e, t, n, r, o, f, a, i, c) {
              let {
                  nodeName: d
                } = cc11001100_hook("", e.currentTarget, "var-init"),
                s = cc11001100_hook("s", "A" === d.toUpperCase(), "var-init");
              if (s && (function (e) {
                let t = cc11001100_hook("t", e.currentTarget, "var-init"),
                  n = cc11001100_hook("n", t.getAttribute("target"), "var-init");
                return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which;
              }(e) || !c && !(0, u.isLocalURL)(n))) return;
              e.preventDefault();
              let p = cc11001100_hook("p", () => {
                let e = cc11001100_hook("e", null == a || a, "var-init");
                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                  shallow: cc11001100_hook("shallow", f, "object-key-init"),
                  locale: cc11001100_hook("locale", i, "object-key-init"),
                  scroll: cc11001100_hook("scroll", e, "object-key-init")
                }) : t[o ? "replace" : "push"](r || n, {
                  scroll: cc11001100_hook("scroll", e, "object-key-init")
                });
              }, "var-init");
              c ? l.default.startTransition(p) : p();
            }(e, R, K, A, C, M, P, j, D);
          },
          onMouseEnter(e) {
            I || "function" != typeof O || O(e), I && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), R && (S || !D) && g(R, K, A, {
              locale: cc11001100_hook("locale", j, "object-key-init"),
              priority: cc11001100_hook("priority", !0, "object-key-init"),
              bypassPrefetchedCheck: cc11001100_hook("bypassPrefetchedCheck", !0, "object-key-init")
            }, {
              kind: cc11001100_hook("kind", U, "object-key-init")
            }, D);
          },
          onTouchStart(e) {
            I || "function" != typeof w || w(e), I && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), R && (S || !D) && g(R, K, A, {
              locale: cc11001100_hook("locale", j, "object-key-init"),
              priority: cc11001100_hook("priority", !0, "object-key-init"),
              bypassPrefetchedCheck: cc11001100_hook("bypassPrefetchedCheck", !0, "object-key-init")
            }, {
              kind: cc11001100_hook("kind", U, "object-key-init")
            }, D);
          }
        }, "var-init");
        if ((0, a.isAbsoluteUrl)(A)) J.href = cc11001100_hook("J.href", A, "assign");else if (!I || k || "a" === r.type && !("href" in r.props)) {
          let e = cc11001100_hook("e", void 0 !== j ? j : null == T ? void 0 : T.locale, "var-init"),
            t = cc11001100_hook("t", (null == T ? void 0 : T.isLocaleDomain) && (0, p.getDomainLocale)(A, e, null == T ? void 0 : T.locales, null == T ? void 0 : T.domainLocales), "var-init");
          J.href = cc11001100_hook("J.href", t || (0, b.addBasePath)((0, i.addLocale)(A, e, null == T ? void 0 : T.defaultLocale)), "assign");
        }
        return I ? l.default.cloneElement(r, J) : l.default.createElement("a", {
          ...L,
          ...J
        }, n);
      }), "var-init"),
      m = cc11001100_hook("m", _, "var-init");
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), Object.assign(t.default, t), e.exports = cc11001100_hook("e.exports", t.default, "assign"));
  },
  71581: function (e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), Object.defineProperty(t, "useIntersection", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return a;
      }
    });
    let r = cc11001100_hook("r", n(2265), "var-init"),
      l = cc11001100_hook("l", n(62389), "var-init"),
      o = cc11001100_hook("o", "function" == typeof IntersectionObserver, "var-init"),
      u = cc11001100_hook("u", new Map(), "var-init"),
      f = cc11001100_hook("f", [], "var-init");
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          rootRef: t,
          rootMargin: n,
          disabled: a
        } = cc11001100_hook("", e, "var-init"),
        i = cc11001100_hook("i", a || !o, "var-init"),
        [c, d] = cc11001100_hook("", (0, r.useState)(!1), "var-init"),
        s = cc11001100_hook("s", (0, r.useRef)(null), "var-init"),
        p = cc11001100_hook("p", (0, r.useCallback)(e => {
          s.current = cc11001100_hook("s.current", e, "assign");
        }, []), "var-init");
      (0, r.useEffect)(() => {
        if (o) {
          if (i || c) return;
          let e = cc11001100_hook("e", s.current, "var-init");
          if (e && e.tagName) {
            let r = cc11001100_hook("r", function (e, t, n) {
              let {
                id: r,
                observer: l,
                elements: o
              } = cc11001100_hook("", function (e) {
                let t;
                let n = cc11001100_hook("n", {
                    root: cc11001100_hook("root", e.root || null, "object-key-init"),
                    margin: cc11001100_hook("margin", e.rootMargin || "", "object-key-init")
                  }, "var-init"),
                  r = cc11001100_hook("r", f.find(e => e.root === n.root && e.margin === n.margin), "var-init");
                if (r && (t = cc11001100_hook("t", u.get(r), "assign"))) return t;
                let l = cc11001100_hook("l", new Map(), "var-init"),
                  o = cc11001100_hook("o", new IntersectionObserver(e => {
                    e.forEach(e => {
                      let t = cc11001100_hook("t", l.get(e.target), "var-init"),
                        n = cc11001100_hook("n", e.isIntersecting || e.intersectionRatio > 0, "var-init");
                      t && n && t(n);
                    });
                  }, e), "var-init");
                return t = cc11001100_hook("t", {
                  id: cc11001100_hook("id", n, "object-key-init"),
                  observer: cc11001100_hook("observer", o, "object-key-init"),
                  elements: cc11001100_hook("elements", l, "object-key-init")
                }, "assign"), f.push(n), u.set(n, t), t;
              }(n), "var-init");
              return o.set(e, t), l.observe(e), function () {
                if (o.delete(e), l.unobserve(e), 0 === o.size) {
                  l.disconnect(), u.delete(r);
                  let e = cc11001100_hook("e", f.findIndex(e => e.root === r.root && e.margin === r.margin), "var-init");
                  e > -1 && f.splice(e, 1);
                }
              };
            }(e, e => e && d(e), {
              root: cc11001100_hook("root", null == t ? void 0 : t.current, "object-key-init"),
              rootMargin: cc11001100_hook("rootMargin", n, "object-key-init")
            }), "var-init");
            return r;
          }
        } else if (!c) {
          let e = cc11001100_hook("e", (0, l.requestIdleCallback)(() => d(!0)), "var-init");
          return () => (0, l.cancelIdleCallback)(e);
        }
      }, [i, n, t, c, s.current]);
      let b = cc11001100_hook("b", (0, r.useCallback)(() => {
        d(!1);
      }, []), "var-init");
      return [p, c, b];
    }
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), Object.assign(t.default, t), e.exports = cc11001100_hook("e.exports", t.default, "assign"));
  }
}]);