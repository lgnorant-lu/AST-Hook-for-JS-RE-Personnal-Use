try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "a35e3497-a57a-4b84-b63d-b4e6edf95c83", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-a35e3497-a57a-4b84-b63d-b4e6edf95c83", "assign"));
} catch (e) {}
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[2416], {
  94224: function (e, t, n) {
    "use strict";

    n.d(t, {
      Z: function () {
        return l;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(62565), "var-init"),
      s = cc11001100_hook("s", n(2265), "var-init"),
      c = cc11001100_hook("c", n(39610), "var-init"),
      i = cc11001100_hook("i", n.n(c), "var-init");
    let o = cc11001100_hook("o", () => {}, "var-init");
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          className: t = "",
          botInfo: n,
          onShow: c = o,
          onClick: l = o
        } = cc11001100_hook("", e, "var-init"),
        d = cc11001100_hook("d", (0, s.useRef)(null), "var-init"),
        [u, _] = cc11001100_hook("", (0, s.useState)(0), "var-init");
      return (0, s.useEffect)(() => {
        _(d.current ? d.current.offsetWidth : 0);
      }, []), (0, s.useEffect)(() => {
        c(n);
      }, []), (0, r.jsx)(a.Z, {
        placement: cc11001100_hook("placement", "top", "object-key-init"),
        theme: {
          token: {
            colorBgElevated: cc11001100_hook("colorBgElevated", "rgba(0, 0, 0, 0.8)", "object-key-init"),
            boxShadowSecondary: cc11001100_hook("boxShadowSecondary", 0, "object-key-init"),
            width: cc11001100_hook("width", 0, "object-key-init")
          }
        },
        mouseEnterDelay: cc11001100_hook("mouseEnterDelay", 1, "object-key-init"),
        content: cc11001100_hook("content", n.openingRemarks ? (0, r.jsx)("div", {
          className: cc11001100_hook("className", i().desc_popover, "object-key-init"),
          style: {
            maxWidth: cc11001100_hook("maxWidth", u, "object-key-init")
          },
          children: cc11001100_hook("children", n.openingRemarks, "object-key-init")
        }) : null, "object-key-init"),
        children: cc11001100_hook("children", (0, r.jsxs)("div", {
          ref: cc11001100_hook("ref", d, "object-key-init"),
          className: cc11001100_hook("className", "".concat(i().bot_item, " custom_button ").concat(t), "object-key-init"),
          onClick: cc11001100_hook("onClick", () => l(n), "object-key-init"),
          children: cc11001100_hook("children", [(0, r.jsx)("div", {
            className: cc11001100_hook("className", i().bot_avatar_wrapper, "object-key-init"),
            children: cc11001100_hook("children", (0, r.jsx)("img", {
              className: cc11001100_hook("className", i().bot_avatar, "object-key-init"),
              src: cc11001100_hook("src", n.avatar, "object-key-init"),
              alt: cc11001100_hook("alt", "", "object-key-init")
            }), "object-key-init")
          }), (0, r.jsxs)("div", {
            className: cc11001100_hook("className", i().bot_content, "object-key-init"),
            children: cc11001100_hook("children", [(0, r.jsx)("div", {
              className: cc11001100_hook("className", i().bot_name, "object-key-init"),
              children: cc11001100_hook("children", n.name, "object-key-init")
            }), (0, r.jsx)("div", {
              className: cc11001100_hook("className", i().bot_desc, "object-key-init"),
              children: cc11001100_hook("children", n.fullDesc, "object-key-init")
            })], "object-key-init")
          })], "object-key-init")
        }), "object-key-init")
      });
    }
  },
  4032: function (e, t, n) {
    "use strict";

    n.d(t, {
      D: function () {
        return u;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(47964), "var-init"),
      s = cc11001100_hook("s", n(42744), "var-init"),
      c = cc11001100_hook("c", n.n(s), "var-init");
    n(2265);
    var i = cc11001100_hook("i", n(10390), "var-init"),
      o = cc11001100_hook("o", n(93127), "var-init"),
      l = cc11001100_hook("l", n(781), "var-init"),
      d = cc11001100_hook("d", n.n(l), "var-init");
    let u = cc11001100_hook("u", e => {
      let {
        detail: t,
        noHover: n = !1
      } = cc11001100_hook("", e, "var-init");
      return (0, r.jsxs)("div", {
        className: cc11001100_hook("className", c()(d().card, !n && d().card_hover), "object-key-init"),
        children: cc11001100_hook("children", [(0, r.jsxs)("div", {
          children: cc11001100_hook("children", [(0, r.jsx)("div", {
            className: cc11001100_hook("className", d().card_header_inner, "object-key-init"),
            children: cc11001100_hook("children", (0, r.jsxs)("div", {
              className: cc11001100_hook("className", d().card_header, "object-key-init"),
              children: cc11001100_hook("children", [(0, r.jsx)(o.Z, {
                hostLogo: cc11001100_hook("hostLogo", t.hostLogo, "object-key-init"),
                hostName: cc11001100_hook("hostName", t.hostName, "object-key-init")
              }), (0, i.L)(t), (0, r.jsx)("span", {
                children: cc11001100_hook("children", "\xb7", "object-key-init")
              }), t.index], "object-key-init")
            }), "object-key-init")
          }), (0, r.jsx)(a.Z.Paragraph, {
            ellipsis: {
              rows: cc11001100_hook("rows", 2, "object-key-init")
            },
            className: cc11001100_hook("className", d().card_title, "object-key-init"),
            children: cc11001100_hook("children", null == t ? void 0 : t.title, "object-key-init")
          })], "object-key-init")
        }), (0, r.jsx)(a.Z.Paragraph, {
          ellipsis: {
            rows: cc11001100_hook("rows", 3, "object-key-init")
          },
          className: cc11001100_hook("className", d().card_content, "object-key-init"),
          children: cc11001100_hook("children", null == t ? void 0 : t.summary, "object-key-init")
        })], "object-key-init")
      });
    }, "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
          details: t
        } = cc11001100_hook("", e, "var-init"),
        n = cc11001100_hook("n", e => {
          e && window.open(e, "_blank");
        }, "var-init");
      return (0, r.jsx)("div", {
        className: cc11001100_hook("className", d().container, "object-key-init"),
        children: cc11001100_hook("children", t.map(e => (0, r.jsx)("div", {
          onClick: cc11001100_hook("onClick", () => n(e.url), "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsx)(u, {
            detail: cc11001100_hook("detail", e, "object-key-init")
          }), "object-key-init")
        }, e.id)), "object-key-init")
      });
    }, "assign");
  },
  10390: function (e, t, n) {
    "use strict";

    n.d(t, {
      L: function () {
        return r;
      }
    });
    let r = cc11001100_hook("r", e => {
      if (e.hostName) return e.hostName;
      try {
        let t = cc11001100_hook("t", new URL(e.url), "var-init");
        return t.hostname;
      } catch (e) {
        return "未知来源";
      }
    }, "var-init");
  },
  93127: function (e, t, n) {
    "use strict";

    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(57159), "var-init"),
      s = cc11001100_hook("s", n(16691), "var-init"),
      c = cc11001100_hook("c", n.n(s), "var-init");
    n(2265), t.Z = cc11001100_hook("t.Z", e => {
      let {
        hostLogo: t,
        hostName: n
      } = cc11001100_hook("", e, "var-init");
      return (0, r.jsx)(c(), {
        src: cc11001100_hook("src", t || a.Z, "object-key-init"),
        alt: cc11001100_hook("alt", n || "website logo", "object-key-init"),
        width: cc11001100_hook("width", 16, "object-key-init"),
        height: cc11001100_hook("height", 16, "object-key-init")
      });
    }, "assign");
  },
  51842: function (e, t, n) {
    "use strict";

    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(4032), "var-init"),
      s = cc11001100_hook("s", n(69082), "var-init"),
      c = cc11001100_hook("c", n(2265), "var-init"),
      i = cc11001100_hook("i", n(56892), "var-init"),
      o = cc11001100_hook("o", n.n(i), "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
          detail: t,
          children: n,
          ...i
        } = cc11001100_hook("", e, "var-init"),
        [l, d] = cc11001100_hook("", (0, c.useState)(0), "var-init"),
        [u, _] = cc11001100_hook("", (0, c.useState)("hover"), "var-init");
      (0, c.useEffect)(() => {
        let e = cc11001100_hook("e", window.matchMedia("(max-width: 879px)").matches, "var-init");
        e && _ && _("focus");
      }, []), (0, c.useEffect)(() => {
        d(window.innerWidth);
      }, []);
      let h = cc11001100_hook("h", (0, c.useCallback)(e => {
        let {
          url: t
        } = cc11001100_hook("", e, "var-init");
        window.open(t, "_blank");
      }, []), "var-init");
      return (0, r.jsx)(s.Z, {
        overlayClassName: cc11001100_hook("overlayClassName", o().link_tooltip_inner, "object-key-init"),
        getPopupContainer: cc11001100_hook("getPopupContainer", e => document.getElementById("dark-mode-container"), "object-key-init"),
        overlayStyle: {
          maxWidth: cc11001100_hook("maxWidth", l < 768 ? "100vw" : "385px", "object-key-init")
        },
        trigger: cc11001100_hook("trigger", u || "hover", "object-key-init"),
        title: cc11001100_hook("title", (0, r.jsx)("div", {
          className: cc11001100_hook("className", o().link_tooltip, "object-key-init"),
          onClick: cc11001100_hook("onClick", h.bind(null, t), "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsx)(a.D, {
            noHover: cc11001100_hook("noHover", !0, "object-key-init"),
            detail: cc11001100_hook("detail", t, "object-key-init")
          }), "object-key-init")
        }), "object-key-init"),
        placement: cc11001100_hook("placement", i.placement || "bottom", "object-key-init"),
        ...i,
        children: n
      });
    }, "assign");
  },
  4863: function (e, t, n) {
    "use strict";

    n.r(t);
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(94224), "var-init"),
      s = cc11001100_hook("s", n(55660), "var-init"),
      c = cc11001100_hook("c", n(25159), "var-init"),
      i = cc11001100_hook("i", n(34577), "var-init"),
      o = cc11001100_hook("o", n(73168), "var-init"),
      l = cc11001100_hook("l", n(24033), "var-init"),
      d = cc11001100_hook("d", n(2265), "var-init"),
      u = cc11001100_hook("u", n(78073), "var-init"),
      _ = cc11001100_hook("_", n(89193), "var-init"),
      h = cc11001100_hook("h", n(19720), "var-init"),
      m = cc11001100_hook("m", n.n(h), "var-init");
    t.default = cc11001100_hook("t.default", e => {
      let {
          markdownChunk: t
        } = cc11001100_hook("", e, "var-init"),
        n = cc11001100_hook("n", (0, l.useRouter)(), "var-init"),
        h = cc11001100_hook("h", (0, l.usePathname)(), "var-init"),
        {
          changeChatUrl: p
        } = cc11001100_hook("", (0, c.useConver)() || {}, "var-init"),
        {
          inMobile: f
        } = cc11001100_hook("", (0, o.bK)(), "var-init"),
        {
          openApp: g
        } = cc11001100_hook("", (0, o._6)(), "var-init"),
        {
          track: x
        } = cc11001100_hook("", (0, i.useTrack)() || {}, "var-init"),
        [b, y] = cc11001100_hook("", (0, d.useState)([]), "var-init"),
        k = cc11001100_hook("k", (0, d.useRef)(new _.P5()), "var-init"),
        v = cc11001100_hook("v", (0, d.useRef)(""), "var-init");
      (0, d.useEffect)(() => {
        t && t !== v.current && (k.current.parseChunk(t), y(k.current.getBotArray()), v.current = cc11001100_hook("v.current", t, "assign"));
      }, [t]);
      let j = cc11001100_hook("j", (0, d.useCallback)(e => {
          let {
            id: t
          } = cc11001100_hook("", e, "var-init");
          null == x || x("bot_card_click", {
            agent_id: cc11001100_hook("agent_id", t, "object-key-init")
          }), u.M.test(h) ? (n.push("/chat/".concat(t)), null == p || p("")) : u.r.test(h) && (f ? g("chat?botId=".concat(t, "&").concat(s.mK, "=").concat(s.EH)) : n.push("/chat/downloadPage"));
        }, [h, f, g, p, n, x]), "var-init"),
        w = cc11001100_hook("w", (0, d.useCallback)(e => {
          let {
            id: t
          } = cc11001100_hook("", e, "var-init");
          null == x || x("bot_card_show", {
            agent_id: cc11001100_hook("agent_id", t, "object-key-init")
          });
        }, [x]), "var-init");
      return (0, r.jsx)("div", {
        className: cc11001100_hook("className", m().bot_gallery, "object-key-init"),
        children: cc11001100_hook("children", b.map(e => (0, r.jsx)(a.Z, {
          className: cc11001100_hook("className", m().bot_item_container, "object-key-init"),
          botInfo: cc11001100_hook("botInfo", e, "object-key-init"),
          onClick: cc11001100_hook("onClick", j, "object-key-init"),
          onShow: cc11001100_hook("onShow", w, "object-key-init")
        }, e.id)), "object-key-init")
      });
    }, "assign");
  },
  89271: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      default: function () {
        return v;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(62565), "var-init"),
      s = cc11001100_hook("s", n(2265), "var-init"),
      c = cc11001100_hook("c", n(41792), "var-init"),
      i = cc11001100_hook("i", n.n(c), "var-init");
    let o = cc11001100_hook("o", () => {}, "var-init");
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          className: t = "",
          cardInfo: n,
          onClick: c = o,
          onShow: l = o
        } = cc11001100_hook("", e, "var-init"),
        {
          title: d = "",
          coverImages: u = []
        } = cc11001100_hook("", n, "var-init"),
        _ = cc11001100_hook("_", (0, s.useMemo)(() => Array.isArray(u) && u.length > 0 ? u[0] : "", [u]), "var-init");
      return (0, s.useEffect)(() => {
        l(n);
      }, []), (0, r.jsx)(a.Z, {
        placement: cc11001100_hook("placement", "top", "object-key-init"),
        theme: {
          token: {
            colorBgElevated: cc11001100_hook("colorBgElevated", "rgba(0, 0, 0, 0.8)", "object-key-init"),
            boxShadowSecondary: cc11001100_hook("boxShadowSecondary", 0, "object-key-init"),
            width: cc11001100_hook("width", 0, "object-key-init")
          }
        },
        content: cc11001100_hook("content", (0, r.jsx)("div", {
          className: cc11001100_hook("className", i().desc_popover, "object-key-init"),
          children: cc11001100_hook("children", n.title, "object-key-init")
        }), "object-key-init"),
        children: cc11001100_hook("children", (0, r.jsxs)("div", {
          className: cc11001100_hook("className", "".concat(i().card_item, " ").concat(t), "object-key-init"),
          onClick: cc11001100_hook("onClick", () => c(n), "object-key-init"),
          children: cc11001100_hook("children", [(0, r.jsx)("img", {
            className: cc11001100_hook("className", i().card_cover, "object-key-init"),
            src: cc11001100_hook("src", _, "object-key-init"),
            alt: cc11001100_hook("alt", "", "object-key-init")
          }), (0, r.jsx)("div", {
            className: cc11001100_hook("className", i().card_content, "object-key-init"),
            children: cc11001100_hook("children", (0, r.jsx)("div", {
              className: cc11001100_hook("className", i().card_title, "object-key-init"),
              children: cc11001100_hook("children", d, "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        }), "object-key-init")
      });
    }
    var d = cc11001100_hook("d", n(36078), "var-init"),
      u = cc11001100_hook("u", n(55660), "var-init"),
      _ = cc11001100_hook("_", n(1068), "var-init"),
      h = cc11001100_hook("h", n(34577), "var-init"),
      m = cc11001100_hook("m", n(73168), "var-init"),
      p = cc11001100_hook("p", n(60444), "var-init"),
      f = cc11001100_hook("f", n(96), "var-init"),
      g = cc11001100_hook("g", n(24033), "var-init"),
      x = cc11001100_hook("x", n(78073), "var-init"),
      b = cc11001100_hook("b", n(89193), "var-init"),
      y = cc11001100_hook("y", n(42806), "var-init"),
      k = cc11001100_hook("k", n.n(y), "var-init"),
      v = cc11001100_hook("v", e => {
        let {
            markdownChunk: t,
            turnId: n
          } = cc11001100_hook("", e, "var-init"),
          a = cc11001100_hook("a", (0, g.useRouter)(), "var-init"),
          c = cc11001100_hook("c", (0, g.usePathname)(), "var-init"),
          {
            inMobile: i
          } = cc11001100_hook("", (0, m.bK)(), "var-init"),
          {
            openApp: o
          } = cc11001100_hook("", (0, m._6)(), "var-init"),
          {
            track: y
          } = cc11001100_hook("", (0, h.useTrack)() || {}, "var-init"),
          [v, j] = cc11001100_hook("", (0, s.useState)([]), "var-init"),
          w = cc11001100_hook("w", (0, s.useRef)(new b.kb()), "var-init"),
          C = cc11001100_hook("C", (0, s.useRef)(""), "var-init"),
          N = cc11001100_hook("N", (0, s.useRef)(null), "var-init"),
          S = cc11001100_hook("S", (0, s.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", N.current, "assign")) || void 0 === t || t.info(e);
          }, [N]), "var-init");
        (0, s.useEffect)(() => {
          t && t !== C.current && (w.current.parseChunk(t), j(w.current.getCardArray()), C.current = cc11001100_hook("C.current", t, "assign"));
        }, [t]);
        let A = cc11001100_hook("A", (0, s.useCallback)(async e => {
            let {
              cardId: t
            } = cc11001100_hook("", e, "var-init");
            if (null == y || y("incontent_card_click", {
              card_id: cc11001100_hook("card_id", t, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", n, "object-key-init")
            }), x.M.test(c)) {
              let e = cc11001100_hook("e", await function (e) {
                let {
                    cardId: t
                  } = cc11001100_hook("", e, "var-init"),
                  n = cc11001100_hook("n", (0, p.oo)(), "var-init"),
                  r = cc11001100_hook("r", (0, p.yP)(), "var-init");
                if (!r || !n) return Promise.reject();
                {
                  let e = cc11001100_hook("e", {
                    url: cc11001100_hook("url", "".concat((0, _.A6)(_.tW), "/share/card"), "object-key-init"),
                    method: cc11001100_hook("method", "POST", "object-key-init"),
                    headers: {
                      "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + r.token, "object-key-init"),
                      "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", n, "object-key-init")
                    },
                    data: {
                      cardId: cc11001100_hook("cardId", t, "object-key-init")
                    }
                  }, "var-init");
                  return (0, f.ZP)(e);
                }
              }({
                cardId: cc11001100_hook("cardId", t, "object-key-init")
              }), "var-init");
              if (e.code === _.n8.SUCCESS) {
                let {
                  baseUrl: t,
                  shareId: n
                } = cc11001100_hook("", e.data, "var-init");
                window.open("".concat(t).concat(n), "_blank");
              } else S("获取数据失败，请稍后再试");
            } else x.r.test(c) && (i ? o("cardDetail?cardId=".concat(t, "&from=share&").concat(u.mK, "=").concat(u.EH)) : a.push("/chat/downloadPage"));
          }, [c, i, o, a, S, y, n]), "var-init"),
          I = cc11001100_hook("I", (0, s.useCallback)(e => {
            let {
              cardId: t
            } = cc11001100_hook("", e, "var-init");
            null == y || y("incontent_card_exposure", {
              card_id: cc11001100_hook("card_id", t, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", n, "object-key-init")
            });
          }, []), "var-init");
        return (0, r.jsxs)(r.Fragment, {
          children: cc11001100_hook("children", [(0, r.jsx)(d.Z, {
            ref: cc11001100_hook("ref", N, "object-key-init")
          }), (0, r.jsx)("div", {
            className: cc11001100_hook("className", k().card_gallery, "object-key-init"),
            children: cc11001100_hook("children", v.map(e => (0, r.jsx)(l, {
              className: cc11001100_hook("className", k().card_item_container, "object-key-init"),
              cardInfo: cc11001100_hook("cardInfo", e, "object-key-init"),
              onClick: cc11001100_hook("onClick", A, "object-key-init"),
              onShow: cc11001100_hook("onShow", I, "object-key-init")
            }, e.cardId)), "object-key-init")
          })], "object-key-init")
        });
      }, "var-init");
  },
  35232: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      default: function () {
        return h;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(34577), "var-init"),
      s = cc11001100_hook("s", n(60444), "var-init"),
      c = cc11001100_hook("c", n(2265), "var-init"),
      i = cc11001100_hook("i", n(45027), "var-init"),
      o = cc11001100_hook("o", e => {
        let {
            isDesktop: t
          } = cc11001100_hook("", (0, i.Z)(), "var-init"),
          n = cc11001100_hook("n", (0, c.useMemo)(() => {
            let t = cc11001100_hook("t", (0, s.t5)(e), "var-init");
            return t && ["jpg", "png"].includes(t);
          }, [e]), "var-init"),
          r = cc11001100_hook("r", (0, c.useCallback)(() => {
            (0, s.GN)(e);
          }, [e]), "var-init");
        return {
          showDownload: cc11001100_hook("showDownload", n && !t, "object-key-init"),
          downloadAction: cc11001100_hook("downloadAction", r, "object-key-init")
        };
      }, "var-init"),
      l = cc11001100_hook("l", n(46071), "var-init"),
      d = cc11001100_hook("d", n(91465), "var-init"),
      u = cc11001100_hook("u", n.n(d), "var-init"),
      _ = cc11001100_hook("_", n(89193), "var-init");
    let Image = cc11001100_hook("Image", e => {
      let {
          src: t,
          aspectRatio: n,
          alt: s,
          onClick: i,
          turnId: d,
          sentenceId: _
        } = cc11001100_hook("", e, "var-init"),
        {
          track: h
        } = cc11001100_hook("", (0, a.useTrack)(), "var-init"),
        {
          showDownload: m,
          downloadAction: p
        } = cc11001100_hook("", o(t), "var-init"),
        f = cc11001100_hook("f", (0, c.useMemo)(() => {
          let e = cc11001100_hook("e", {
            width: cc11001100_hook("width", "100%", "object-key-init"),
            aspectRatio: cc11001100_hook("aspectRatio", n, "object-key-init")
          }, "var-init");
          return n > 1 ? {
            ...e,
            maxWidth: 400
          } : {
            ...e,
            maxWidth: 400 * n
          };
        }, [n]), "var-init");
      return (0, r.jsxs)("div", {
        className: cc11001100_hook("className", "".concat(u().image_content_container), "object-key-init"),
        style: cc11001100_hook("style", f, "object-key-init"),
        onClick: cc11001100_hook("onClick", i, "object-key-init"),
        children: cc11001100_hook("children", [(0, r.jsx)(l.Z, {
          className: cc11001100_hook("className", u().image_content, "object-key-init"),
          src: cc11001100_hook("src", t, "object-key-init"),
          alt: cc11001100_hook("alt", s, "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          placeholder: cc11001100_hook("placeholder", (0, r.jsx)("div", {
            className: cc11001100_hook("className", u().image_placeholder, "object-key-init")
          }), "object-key-init"),
          preview: {
            mask: cc11001100_hook("mask", (0, r.jsx)("div", {}), "object-key-init"),
            onVisibleChange: cc11001100_hook("onVisibleChange", e => {
              e && h("chat_image_click", {
                turnId: cc11001100_hook("turnId", d, "object-key-init"),
                sentenceId: cc11001100_hook("sentenceId", _, "object-key-init"),
                imageUrl: cc11001100_hook("imageUrl", t, "object-key-init")
              });
            }, "object-key-init")
          }
        }), m && (0, r.jsx)("div", {
          className: cc11001100_hook("className", u().hover_tool_group, "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsxs)("div", {
            className: cc11001100_hook("className", u().download_tool, "object-key-init"),
            onClick: cc11001100_hook("onClick", p, "object-key-init"),
            children: cc11001100_hook("children", [(0, r.jsx)("div", {
              className: cc11001100_hook("className", u().download_icon, "object-key-init")
            }), (0, r.jsx)("div", {
              className: cc11001100_hook("className", u().download_text, "object-key-init"),
              children: cc11001100_hook("children", "下载原图", "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        })], "object-key-init")
      });
    }, "var-init");
    var h = cc11001100_hook("h", e => {
      let {
          markdownChunk: t,
          turnId: n,
          sentenceId: a
        } = cc11001100_hook("", e, "var-init"),
        [s, i] = cc11001100_hook("", (0, c.useState)([]), "var-init"),
        [o, l] = cc11001100_hook("", (0, c.useState)(0), "var-init"),
        d = cc11001100_hook("d", (0, c.useRef)(new _.FB()), "var-init"),
        h = cc11001100_hook("h", (0, c.useRef)(""), "var-init");
      return (0, c.useEffect)(() => {
        t && t !== h.current && (d.current.parseChunk(t), i(d.current.getImgArray()), l(d.current.getHeaderCount()), h.current = cc11001100_hook("h.current", t, "assign"));
      }, [t]), (0, r.jsx)("div", {
        className: cc11001100_hook("className", "".concat(u().image_gallery, " ").concat((() => {
          switch (s.length) {
            case 1:
              return u().single;
            case 2:
              return u().double;
            default:
              return u().multiple;
          }
        })()), "object-key-init"),
        children: cc11001100_hook("children", s.map((e, t) => {
          let {
            url: s,
            aspectRatio: c
          } = cc11001100_hook("", e, "var-init");
          return (0, r.jsx)(Image, {
            src: cc11001100_hook("src", s, "object-key-init"),
            alt: cc11001100_hook("alt", "Image ".concat(t + 1), "object-key-init"),
            onClick: cc11001100_hook("onClick", () => {}, "object-key-init"),
            aspectRatio: cc11001100_hook("aspectRatio", c, "object-key-init"),
            turnId: cc11001100_hook("turnId", n, "object-key-init"),
            sentenceId: cc11001100_hook("sentenceId", a, "object-key-init")
          }, s);
        }), "object-key-init")
      });
    }, "var-init");
  },
  9049: function (e, t, n) {
    "use strict";

    n.r(t);
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(13987), "var-init"),
      s = cc11001100_hook("s", n(45873), "var-init"),
      c = cc11001100_hook("c", n(25159), "var-init"),
      i = cc11001100_hook("i", n(2265), "var-init"),
      o = cc11001100_hook("o", n(21372), "var-init"),
      l = cc11001100_hook("l", n.n(o), "var-init"),
      d = cc11001100_hook("d", n(89193), "var-init");
    let u = cc11001100_hook("u", {}, "var-init");
    t.default = cc11001100_hook("t.default", e => {
      let {
          markdownChunk: t,
          turnId: n,
          sentenceId: o,
          privateStopVis: _,
          status: h
        } = cc11001100_hook("", e, "var-init"),
        {
          deepSeekStopText: m
        } = cc11001100_hook("", (0, c.useConver)() || {}, "var-init"),
        [p, f] = cc11001100_hook("", (0, i.useState)(""), "var-init"),
        [g, x] = cc11001100_hook("", (0, i.useState)(""), "var-init"),
        [b, y] = cc11001100_hook("", (0, i.useState)(""), "var-init"),
        [k, v] = cc11001100_hook("", (0, i.useState)(""), "var-init"),
        j = cc11001100_hook("j", (0, i.useRef)(new d.k3()), "var-init"),
        w = cc11001100_hook("w", (0, i.useRef)(""), "var-init"),
        [C, N] = cc11001100_hook("", (0, i.useState)(!u[o]), "var-init"),
        S = cc11001100_hook("S", (0, i.useMemo)(() => m || "思考已停止", [m]), "var-init"),
        A = cc11001100_hook("A", (0, i.useMemo)(() => b || (_ || void 0 === h || "close" === h ? S : g), [h, _, g, b, S]), "var-init");
      return (0, i.useEffect)(() => {
        t && t !== w.current && (j.current.parseChunk(t), f(j.current.getIcon()), x(j.current.getStartText()), y(j.current.getEndText()), v(j.current.getBody()), w.current = cc11001100_hook("w.current", t, "assign"));
      }, [t]), (0, r.jsxs)("div", {
        className: cc11001100_hook("className", l().deep_think_block, "object-key-init"),
        children: cc11001100_hook("children", [(0, r.jsx)("div", {
          className: cc11001100_hook("className", l().header, "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsxs)("div", {
            className: cc11001100_hook("className", l().content, "object-key-init"),
            onClick: cc11001100_hook("onClick", () => {
              u[o] = cc11001100_hook("u[o]", C, "assign"), N(!C);
            }, "object-key-init"),
            children: cc11001100_hook("children", [p && (0, r.jsx)("img", {
              className: cc11001100_hook("className", l().icon, "object-key-init"),
              src: cc11001100_hook("src", p, "object-key-init"),
              alt: cc11001100_hook("alt", "", "object-key-init")
            }), (0, r.jsx)("span", {
              className: cc11001100_hook("className", l().text, "object-key-init"),
              children: cc11001100_hook("children", A, "object-key-init")
            }), (0, r.jsx)(a.Z, {
              className: cc11001100_hook("className", "".concat(l().toggleButton, " ").concat(C ? l().expanded : ""), "object-key-init"),
              name: cc11001100_hook("name", "iconsetting", "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        }), (0, r.jsx)("div", {
          className: cc11001100_hook("className", "".concat(l().body, " ").concat(C ? l().expanded : l().collapsed), "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsx)("div", {
            className: cc11001100_hook("className", l().think_blockquote, "object-key-init"),
            children: cc11001100_hook("children", (0, r.jsx)(s.U, {
              className: cc11001100_hook("className", l().custom_markdown_body, "object-key-init"),
              content: cc11001100_hook("content", k, "object-key-init"),
              stepping: cc11001100_hook("stepping", !1, "object-key-init"),
              ignoreMdStyle: cc11001100_hook("ignoreMdStyle", !0, "object-key-init")
            }), "object-key-init")
          }), "object-key-init")
        })], "object-key-init")
      });
    }, "assign");
  },
  78073: function (e, t, n) {
    "use strict";

    n.d(t, {
      M: function () {
        return r;
      },
      r: function () {
        return a;
      }
    });
    let r = cc11001100_hook("r", /^\/chat\/[0-9]+/, "var-init"),
      a = cc11001100_hook("a", /^\/share\/chat\/[a-zA-Z0-9]+/, "var-init");
  },
  89193: function (e, t, n) {
    "use strict";

    n.d(t, {
      FB: function () {
        return r;
      },
      P5: function () {
        return s;
      },
      k3: function () {
        return i;
      },
      kb: function () {
        return a;
      }
    });
    class r {
      parseLine(e) {
        if (e.startsWith("header ")) {
          let [, t, n] = cc11001100_hook("", e.split(" "), "var-init");
          "count" === t && (this.headerCount = cc11001100_hook("this.headerCount", parseInt(n, 10), "assign"));
        } else if (e.startsWith("wh ")) {
          let [, t] = cc11001100_hook("", e.split(" "), "var-init"),
            n = cc11001100_hook("n", t.split(","), "var-init");
          (n || []).forEach(e => {
            let [t, n] = cc11001100_hook("", e.split("x"), "var-init");
            this.whArray.push([parseInt(t), parseInt(n)]);
          });
        } else if (e.startsWith("content image_url ")) {
          let [,, t] = cc11001100_hook("", e.split(" "), "var-init");
          t && t.trim() && this.imgArray.push(t.trim());
        }
      }
      parseChunk(e) {
        this.buffer = cc11001100_hook("this.buffer", e, "assign"), this.imgArray = cc11001100_hook("this.imgArray", [], "assign"), this.headerCount = cc11001100_hook("this.headerCount", 0, "assign");
        let t = cc11001100_hook("t", this.buffer.split("\n"), "var-init");
        for (; t.length > 1;) {
          var n;
          let e = cc11001100_hook("e", null == t ? void 0 : null === (n = cc11001100_hook("n", t.shift(), "assign")) || void 0 === n ? void 0 : n.trim(), "var-init");
          e && !e.startsWith("```") && this.parseLine(e);
        }
      }
      getHeaderCount() {
        return this.headerCount;
      }
      getImgArray() {
        return this.imgArray.map((e, t) => {
          let n = cc11001100_hook("n", this.whArray[t], "var-init"),
            r = cc11001100_hook("r", 1, "var-init");
          if (n) {
            let [e, t] = cc11001100_hook("", n, "var-init"),
              a = cc11001100_hook("a", e / t, "var-init");
            r = cc11001100_hook("r", Number.isNaN(a) ? 1 : a, "assign");
          }
          return {
            url: cc11001100_hook("url", e, "object-key-init"),
            aspectRatio: cc11001100_hook("aspectRatio", r, "object-key-init")
          };
        });
      }
      constructor() {
        this.headerCount = cc11001100_hook("this.headerCount", 0, "assign"), this.imgArray = cc11001100_hook("this.imgArray", [], "assign"), this.whArray = cc11001100_hook("this.whArray", [], "assign"), this.buffer = cc11001100_hook("this.buffer", "", "assign");
      }
    }
    class a {
      parseChunk(e) {
        this.buffer = cc11001100_hook("this.buffer", e, "assign"), this.cardArray = cc11001100_hook("this.cardArray", [], "assign");
        try {
          let e = cc11001100_hook("e", JSON.parse(this.buffer), "var-init"),
            {
              cards: t = []
            } = cc11001100_hook("", e, "var-init");
          this.cardArray = cc11001100_hook("this.cardArray", t, "assign");
        } catch (e) {
          this.cardArray = cc11001100_hook("this.cardArray", [], "assign");
        }
      }
      getCardArray() {
        return this.cardArray;
      }
      constructor() {
        this.cardArray = cc11001100_hook("this.cardArray", [], "assign"), this.buffer = cc11001100_hook("this.buffer", "", "assign");
      }
    }
    class s {
      parseChunk(e) {
        this.buffer = cc11001100_hook("this.buffer", e, "assign"), this.botArray = cc11001100_hook("this.botArray", [], "assign");
        try {
          let e = cc11001100_hook("e", JSON.parse(this.buffer), "var-init"),
            {
              bots: t = []
            } = cc11001100_hook("", e, "var-init");
          this.botArray = cc11001100_hook("this.botArray", t, "assign");
        } catch (e) {
          this.botArray = cc11001100_hook("this.botArray", [], "assign");
        }
      }
      getBotArray() {
        return this.botArray;
      }
      constructor() {
        this.botArray = cc11001100_hook("this.botArray", [], "assign"), this.buffer = cc11001100_hook("this.buffer", "", "assign");
      }
    }
    let c = cc11001100_hook("c", {
      icon: cc11001100_hook("icon", "", "object-key-init"),
      startText: cc11001100_hook("startText", "", "object-key-init"),
      body: cc11001100_hook("body", [], "object-key-init"),
      endText: cc11001100_hook("endText", "", "object-key-init")
    }, "var-init");
    class i {
      parseLine(e) {
        let t = cc11001100_hook("t", e.match(this.regExps.icon), "var-init"),
          n = cc11001100_hook("n", e.match(this.regExps.startText), "var-init"),
          r = cc11001100_hook("r", e.match(this.regExps.endText), "var-init");
        t ? this.content.icon = cc11001100_hook("this.content.icon", t[1], "assign") : n ? this.content.startText = cc11001100_hook("this.content.startText", n[1], "assign") : r ? this.content.endText = cc11001100_hook("this.content.endText", r[1], "assign") : this.content.body.push(e);
      }
      parseChunk(e) {
        this.buffer = cc11001100_hook("this.buffer", e, "assign");
        let t = cc11001100_hook("t", this.buffer.split("\n"), "var-init");
        for (this.content = cc11001100_hook("this.content", JSON.parse(JSON.stringify(c)), "assign"); t.length > 1;) {
          let e = cc11001100_hook("e", t.shift().trim(), "var-init");
          e && !e.startsWith("```") && this.parseLine(e);
        }
      }
      getIcon() {
        return this.content.icon;
      }
      getStartText() {
        return this.content.startText;
      }
      getBody() {
        return this.content.body.join("\n");
      }
      getEndText() {
        return this.content.endText;
      }
      constructor() {
        this.content = cc11001100_hook("this.content", JSON.parse(JSON.stringify(c)), "assign"), this.buffer = cc11001100_hook("this.buffer", "", "assign"), this.regExps = cc11001100_hook("this.regExps", {
          icon: cc11001100_hook("icon", /<icon>(.*?)<\/icon>/, "object-key-init"),
          startText: cc11001100_hook("startText", /<start>(.*?)<\/start>/, "object-key-init"),
          endText: cc11001100_hook("endText", /<end>(.*?)<\/end>/, "object-key-init")
        }, "assign"), this.listeners = cc11001100_hook("this.listeners", {}, "assign");
      }
    }
  },
  21248: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      CustomLi: function () {
        return o;
      },
      CustomOl: function () {
        return d;
      },
      CustomUl: function () {
        return l;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(2265), "var-init"),
      s = cc11001100_hook("s", n(59441), "var-init"),
      c = cc11001100_hook("c", n(44805), "var-init"),
      i = cc11001100_hook("i", n.n(c), "var-init");
    let o = cc11001100_hook("o", (0, a.memo)(function (e) {
        let {
            children: t,
            ...n
          } = cc11001100_hook("", e, "var-init"),
          c = cc11001100_hook("c", (0, a.useRef)([]), "var-init"),
          o = cc11001100_hook("o", (0, a.useRef)(""), "var-init"),
          l = cc11001100_hook("l", (0, a.useRef)(0), "var-init"),
          d = cc11001100_hook("d", (0, a.useMemo)(() => {
            if (o.current === n["data-sourcepos"]) return c.current;
            {
              !function (e) {
                let t = cc11001100_hook("t", a.Children.toArray(e), "var-init"),
                  n = cc11001100_hook("n", t.length >= 3 && "string" == typeof t[0] && "string" == typeof t[t.length - 1] && a.isValidElement(t[1]), "var-init");
                return n;
              }(t) ? l.current = cc11001100_hook("l.current", 1, "assign") : 1 === l.current && (l.current = cc11001100_hook("l.current", 2, "assign"));
              let e = cc11001100_hook("e", Array.isArray(t) ? t.map((e, t) => "string" == typeof e && e.trim().length > 0 ? (0, r.jsx)(s.AnimatedSpan, {
                text: cc11001100_hook("text", e, "object-key-init")
              }, t) : e) : [], "var-init");
              return c.current = cc11001100_hook("c.current", {
                children: cc11001100_hook("children", e, "object-key-init"),
                props: cc11001100_hook("props", n, "object-key-init"),
                renderStep: cc11001100_hook("renderStep", l.current, "object-key-init")
              }, "assign"), o.current = cc11001100_hook("o.current", n["data-sourcepos"], "assign"), {
                children: cc11001100_hook("children", e, "object-key-init"),
                props: cc11001100_hook("props", n, "object-key-init"),
                renderStep: cc11001100_hook("renderStep", l.current, "object-key-init")
              };
            }
          }, [t, n]), "var-init");
        return (0, r.jsx)("li", {
          className: cc11001100_hook("className", 2 === d.renderStep ? i().complete : "", "object-key-init"),
          ...d.props,
          children: d.children
        });
      }), "var-init"),
      l = cc11001100_hook("l", (0, a.memo)(function (e) {
        let {
            children: t,
            ...n
          } = cc11001100_hook("", e, "var-init"),
          s = cc11001100_hook("s", (0, a.useRef)([]), "var-init"),
          c = cc11001100_hook("c", (0, a.useRef)(""), "var-init"),
          i = cc11001100_hook("i", (0, a.useMemo)(() => {
            let e = cc11001100_hook("e", [], "var-init");
            if (!Array.isArray(t)) return e;
            if (c.current === n["data-sourcepos"]) return s.current;
            for (let n = cc11001100_hook("n", 0, "var-init"); n < t.length; ++n) e.push(t[n]);
            return s.current = cc11001100_hook("s.current", e, "assign"), c.current = cc11001100_hook("c.current", n["data-sourcepos"], "assign"), e;
          }, [t]), "var-init");
        return (0, r.jsx)("ul", {
          ...n,
          children: i
        });
      }), "var-init"),
      d = cc11001100_hook("d", (0, a.memo)(function (e) {
        let {
            children: t,
            ...n
          } = cc11001100_hook("", e, "var-init"),
          s = cc11001100_hook("s", (0, a.useRef)([]), "var-init"),
          c = cc11001100_hook("c", (0, a.useRef)(""), "var-init"),
          i = cc11001100_hook("i", (0, a.useMemo)(() => {
            let e = cc11001100_hook("e", [], "var-init");
            if (!Array.isArray(t)) return e;
            if (c.current === n["data-sourcepos"]) return s.current;
            for (let n = cc11001100_hook("n", 0, "var-init"); n < t.length; ++n) e.push(t[n]);
            return s.current = cc11001100_hook("s.current", e, "assign"), c.current = cc11001100_hook("c.current", n["data-sourcepos"], "assign"), e;
          }, [t]), "var-init");
        return (0, r.jsxs)(r.Fragment, {
          children: cc11001100_hook("children", [(0, r.jsx)("ol", {
            ...n,
            children: i
          }), (0, r.jsx)("br", {
            style: {
              display: cc11001100_hook("display", "none", "object-key-init")
            }
          })], "object-key-init")
        });
      }), "var-init");
  },
  4295: function (e, t, n) {
    "use strict";

    n.r(t);
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(73168), "var-init"),
      s = cc11001100_hook("s", n(2265), "var-init"),
      c = cc11001100_hook("c", n(51842), "var-init"),
      i = cc11001100_hook("i", n(73705), "var-init"),
      o = cc11001100_hook("o", n.n(i), "var-init");
    t.default = cc11001100_hook("t.default", e => {
      let {
          node: t,
          inline: n,
          className: i,
          children: l,
          ...d
        } = cc11001100_hook("", e, "var-init"),
        {
          isDesktop: u
        } = cc11001100_hook("", (0, a.ky)(), "var-init"),
        _ = cc11001100_hook("_", (0, s.useRef)(null), "var-init"),
        [h, m] = cc11001100_hook("", (0, s.useState)(0), "var-init"),
        {
          title: p
        } = cc11001100_hook("", d, "var-init"),
        f = cc11001100_hook("f", /^[0-9]*$/.test(l), "var-init");
      (0, s.useEffect)(() => {
        m(window.innerWidth);
      }, []);
      let g = cc11001100_hook("g", (0, s.useCallback)(e => {
        let {
          url: t
        } = cc11001100_hook("", e, "var-init");
        window.open(t, "_blank");
      }, []), "var-init");
      if (f && "@ref" === d.href) {
        let e = cc11001100_hook("e", /\d+/g.exec(l)[0], "var-init"),
          t = cc11001100_hook("t", parseInt(e), "var-init"),
          n = cc11001100_hook("n", d.webSearchDetail, "var-init"),
          a = cc11001100_hook("a", null == n ? void 0 : n.details[t - 1], "var-init");
        return a ? (0, r.jsx)(c.Z, {
          detail: cc11001100_hook("detail", a, "object-key-init"),
          placement: cc11001100_hook("placement", "top", "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsx)("div", {
            className: cc11001100_hook("className", o().annotation_num_inner, "object-key-init"),
            children: cc11001100_hook("children", (0, r.jsx)("div", {
              ref: cc11001100_hook("ref", _, "object-key-init"),
              className: cc11001100_hook("className", o().annotation_num, "object-key-init"),
              onClick: cc11001100_hook("onClick", g.bind(null, a), "object-key-init"),
              children: cc11001100_hook("children", e, "object-key-init")
            }), "object-key-init")
          }), "object-key-init")
        }) : (0, r.jsx)("div", {
          className: cc11001100_hook("className", o().annotation_num_inner, "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsx)("div", {
            ref: cc11001100_hook("ref", _, "object-key-init"),
            className: cc11001100_hook("className", o().annotation_num, "object-key-init"),
            children: cc11001100_hook("children", e, "object-key-init")
          }), "object-key-init")
        });
      }
      return (0, r.jsx)("a", {
        href: cc11001100_hook("href", d.href, "object-key-init"),
        target: cc11001100_hook("target", u ? "_blank" : d.target, "object-key-init"),
        children: cc11001100_hook("children", l, "object-key-init")
      });
    }, "assign");
  },
  59441: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      AnimatedSpan: function () {
        return i;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(2265), "var-init"),
      s = cc11001100_hook("s", n(44805), "var-init"),
      c = cc11001100_hook("c", n.n(s), "var-init");
    let i = cc11001100_hook("i", (0, a.memo)(function (e) {
        let {
            text: t
          } = cc11001100_hook("", e, "var-init"),
          n = cc11001100_hook("n", (0, a.useRef)(""), "var-init"),
          s = cc11001100_hook("s", (0, a.useRef)([]), "var-init"),
          i = cc11001100_hook("i", (0, a.useMemo)(() => {
            let e = cc11001100_hook("e", [...s.current], "var-init"),
              a = cc11001100_hook("a", n.current.length, "var-init"),
              i = cc11001100_hook("i", t.slice(a), "var-init");
            if (a > t.length) return n.current = cc11001100_hook("n.current", t, "assign"), s.current = cc11001100_hook("s.current", t, "assign"), t;
            let o = cc11001100_hook("o", [], "var-init"),
              l = cc11001100_hook("l", 0, "var-init"),
              d = cc11001100_hook("d", RegExp("(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|\\b\\w+\\b|\\s+|\\S)", "gu"), "var-init");
            return [...i.matchAll(d)].forEach(e => {
              let [t] = cc11001100_hook("", e, "var-init");
              /^\s+$/.test(t) ? o.push((0, r.jsx)("span", {
                className: cc11001100_hook("className", c().animated_char, "object-key-init"),
                style: {
                  animationDelay: cc11001100_hook("animationDelay", "".concat(10 * l, "ms"), "object-key-init")
                },
                children: cc11001100_hook("children", "\xa0".repeat(t.length), "object-key-init")
              }, "".concat(a, "_").concat(l++))) : o.push((0, r.jsx)("span", {
                className: cc11001100_hook("className", c().animated_char, "object-key-init"),
                style: {
                  animationDelay: cc11001100_hook("animationDelay", "".concat(10 * l, "ms"), "object-key-init")
                },
                children: cc11001100_hook("children", t, "object-key-init")
              }, "".concat(a, "_").concat(l++)));
            }), e.push((0, r.jsx)(r.Fragment, {
              children: cc11001100_hook("children", o, "object-key-init")
            })), n.current = cc11001100_hook("n.current", t, "assign"), s.current = cc11001100_hook("s.current", e, "assign"), e;
          }, [t]), "var-init");
        return (0, r.jsx)(r.Fragment, {
          children: cc11001100_hook("children", i, "object-key-init")
        });
      }), "var-init"),
      o = cc11001100_hook("o", (0, a.memo)(function (e) {
        let {
            children: t,
            ...n
          } = cc11001100_hook("", e, "var-init"),
          [s, c] = cc11001100_hook("", (0, a.useState)([]), "var-init"),
          o = cc11001100_hook("o", (0, a.useRef)([]), "var-init"),
          l = cc11001100_hook("l", (0, a.useMemo)(() => {
            let e = cc11001100_hook("e", [], "var-init");
            if (!Array.isArray(t)) return e;
            for (let n = cc11001100_hook("n", 0, "var-init"); n < t.length; ++n) "string" == typeof t[n] ? e.push((0, r.jsx)(i, {
              text: cc11001100_hook("text", t[n], "object-key-init")
            }, n)) : e.push(t[n]);
            return o.current = cc11001100_hook("o.current", e, "assign"), e;
          }, [t]), "var-init");
        return (0, r.jsx)("p", {
          ...n,
          children: l
        });
      }), "var-init");
    t.default = cc11001100_hook("t.default", o, "assign");
  },
  45873: function (e, t, n) {
    "use strict";

    n.d(t, {
      U: function () {
        return T;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init");
    n(9792);
    var a = cc11001100_hook("a", n(2265), "var-init"),
      s = cc11001100_hook("s", n(28492), "var-init"),
      c = cc11001100_hook("c", n(77254), "var-init"),
      i = cc11001100_hook("i", n(93776), "var-init"),
      o = cc11001100_hook("o", n(78662), "var-init"),
      l = cc11001100_hook("l", n(32472), "var-init"),
      d = cc11001100_hook("d", n(75781), "var-init"),
      u = cc11001100_hook("u", n(14234), "var-init"),
      _ = cc11001100_hook("_", n(78835), "var-init"),
      h = cc11001100_hook("h", n(68144), "var-init"),
      m = cc11001100_hook("m", n.n(h), "var-init"),
      p = cc11001100_hook("p", n(4863), "var-init"),
      f = cc11001100_hook("f", n(89271), "var-init"),
      g = cc11001100_hook("g", n(35232), "var-init"),
      x = cc11001100_hook("x", n(9049), "var-init");
    let b = cc11001100_hook("b", {
        sql: cc11001100_hook("sql", "SQL", "object-key-init"),
        javascript: cc11001100_hook("javascript", "JavaScript", "object-key-init"),
        java: cc11001100_hook("java", "Java", "object-key-init"),
        typescript: cc11001100_hook("typescript", "TypeScript", "object-key-init"),
        vbscript: cc11001100_hook("vbscript", "VBScript", "object-key-init"),
        css: cc11001100_hook("css", "CSS", "object-key-init"),
        html: cc11001100_hook("html", "HTML", "object-key-init"),
        xml: cc11001100_hook("xml", "XML", "object-key-init"),
        php: cc11001100_hook("php", "PHP", "object-key-init"),
        python: cc11001100_hook("python", "Python", "object-key-init"),
        yaml: cc11001100_hook("yaml", "Yaml", "object-key-init"),
        mermaid: cc11001100_hook("mermaid", "Mermaid", "object-key-init"),
        markdown: cc11001100_hook("markdown", "MarkDown", "object-key-init"),
        makefile: cc11001100_hook("makefile", "MakeFile", "object-key-init")
      }, "var-init"),
      y = cc11001100_hook("y", e => e ? e in b ? b[e] : e.charAt(0).toUpperCase() + e.substring(1) : "Plain", "var-init");
    var k = function (e) {
        let {
            node: t,
            inline: n,
            className: a,
            children: s,
            privateStopVis: c,
            status: i,
            ...o
          } = cc11001100_hook("", e, "var-init"),
          l = cc11001100_hook("l", /language-(\w+)/.exec(a || ""), "var-init"),
          h = cc11001100_hook("h", null == l ? void 0 : l[1], "var-init"),
          b = cc11001100_hook("b", y(h || ""), "var-init");
        return "ys_imgs" === h ? s && s[0] ? (0, r.jsx)(g.default, {
          markdownChunk: cc11001100_hook("markdownChunk", s[0], "object-key-init"),
          turnId: cc11001100_hook("turnId", o.turnId, "object-key-init"),
          sentenceId: cc11001100_hook("sentenceId", o.sentenceId, "object-key-init")
        }) : null : "ys_bot" === h ? s && s[0] ? (0, r.jsx)(p.default, {
          markdownChunk: cc11001100_hook("markdownChunk", s[0], "object-key-init"),
          turnId: cc11001100_hook("turnId", o.turnId, "object-key-init"),
          sentenceId: cc11001100_hook("sentenceId", o.sentenceId, "object-key-init")
        }) : null : "ys_card" === h ? s && s[0] ? (0, r.jsx)(f.default, {
          markdownChunk: cc11001100_hook("markdownChunk", s[0], "object-key-init"),
          turnId: cc11001100_hook("turnId", o.turnId, "object-key-init"),
          sentenceId: cc11001100_hook("sentenceId", o.sentenceId, "object-key-init")
        }) : null : "ys_think" === h ? s && s[0] ? (0, r.jsx)(x.default, {
          markdownChunk: cc11001100_hook("markdownChunk", s[0], "object-key-init"),
          turnId: cc11001100_hook("turnId", o.turnId, "object-key-init"),
          sentenceId: cc11001100_hook("sentenceId", o.sentenceId, "object-key-init"),
          privateStopVis: cc11001100_hook("privateStopVis", c, "object-key-init"),
          status: cc11001100_hook("status", i, "object-key-init")
        }) : null : !n && l ? (0, r.jsxs)("div", {
          children: cc11001100_hook("children", [(0, r.jsxs)("div", {
            className: cc11001100_hook("className", m().block_header, "object-key-init"),
            style: {
              borderColor: cc11001100_hook("borderColor", "rgba(0, 0, 0, 0.05)", "object-key-init")
            },
            children: cc11001100_hook("children", [(0, r.jsx)("div", {
              className: cc11001100_hook("className", m().language, "object-key-init"),
              children: cc11001100_hook("children", b, "object-key-init")
            }), (0, r.jsx)("div", {
              style: {
                display: cc11001100_hook("display", "flex", "object-key-init")
              },
              children: cc11001100_hook("children", (0, r.jsx)(d.default, {
                className: cc11001100_hook("className", m().copyBtn, "object-key-init"),
                value: cc11001100_hook("value", String(s).replace(/\n$/, ""), "object-key-init"),
                isPlain: cc11001100_hook("isPlain", !0, "object-key-init")
              }), "object-key-init")
            })], "object-key-init")
          }), "mermaid" === h ? null : (0, r.jsx)(u.Z, {
            ...o,
            style: _.Z,
            customStyle: {
              paddingLeft: cc11001100_hook("paddingLeft", 12, "object-key-init"),
              backgroundColor: cc11001100_hook("backgroundColor", "#000 !important", "object-key-init"),
              padding: cc11001100_hook("padding", "12px 16px 16px 16px", "object-key-init"),
              borderBottomRightRadius: cc11001100_hook("borderBottomRightRadius", 16, "object-key-init"),
              borderBottomLeftRadius: cc11001100_hook("borderBottomLeftRadius", 16, "object-key-init"),
              color: cc11001100_hook("color", "rgb(255, 255, 255)", "object-key-init"),
              margin: cc11001100_hook("margin", 0, "object-key-init")
            },
            language: l[1],
            showLineNumbers: !1,
            PreTag: "div",
            children: String(s).replace(/\n$/, "")
          })], "object-key-init")
        }) : n ? (0, r.jsx)("code", {
          ...o,
          style: {
            whiteSpace: cc11001100_hook("whiteSpace", "pre-line", "object-key-init")
          },
          className: a,
          children: s
        }) : (0, r.jsxs)("div", {
          children: cc11001100_hook("children", [(0, r.jsxs)("div", {
            className: cc11001100_hook("className", m().block_header, "object-key-init"),
            style: {
              borderColor: cc11001100_hook("borderColor", "rgba(0, 0, 0, 0.05)", "object-key-init")
            },
            children: cc11001100_hook("children", [(0, r.jsx)("div", {
              className: cc11001100_hook("className", m().language, "object-key-init"),
              children: cc11001100_hook("children", "", "object-key-init")
            }), (0, r.jsx)("div", {
              style: {
                display: cc11001100_hook("display", "flex", "object-key-init")
              },
              children: cc11001100_hook("children", (0, r.jsx)(d.default, {
                className: cc11001100_hook("className", m().copyBtn, "object-key-init"),
                value: cc11001100_hook("value", String(s).replace(/\n$/, ""), "object-key-init"),
                isPlain: cc11001100_hook("isPlain", !0, "object-key-init")
              }), "object-key-init")
            })], "object-key-init")
          }), (0, r.jsxs)("div", {
            style: {
              paddingLeft: cc11001100_hook("paddingLeft", 12, "object-key-init"),
              backgroundColor: cc11001100_hook("backgroundColor", "#000", "object-key-init"),
              padding: cc11001100_hook("padding", "12px 16px 16px 16px", "object-key-init"),
              borderBottomRightRadius: cc11001100_hook("borderBottomRightRadius", 16, "object-key-init"),
              borderBottomLeftRadius: cc11001100_hook("borderBottomLeftRadius", 16, "object-key-init"),
              color: cc11001100_hook("color", "rgb(105, 93, 105)", "object-key-init"),
              overflow: cc11001100_hook("overflow", "auto", "object-key-init")
            },
            children: cc11001100_hook("children", [" ", String(s).replace(/\n$/, "")], "object-key-init")
          })], "object-key-init")
        });
      },
      v = cc11001100_hook("v", n(21248), "var-init"),
      j = cc11001100_hook("j", n(4295), "var-init"),
      w = cc11001100_hook("w", n(59441), "var-init");
    let C = cc11001100_hook("C", e => {
        let {
          children: t
        } = cc11001100_hook("", e, "var-init");
        return (0, r.jsx)("div", {
          style: {
            width: cc11001100_hook("width", "100%", "object-key-init"),
            overflowX: cc11001100_hook("overflowX", "auto", "object-key-init")
          },
          children: cc11001100_hook("children", (0, r.jsx)("table", {
            children: cc11001100_hook("children", t, "object-key-init")
          }), "object-key-init")
        });
      }, "var-init"),
      N = cc11001100_hook("N", e => {
        let {
          children: t
        } = cc11001100_hook("", e, "var-init");
        return (0, r.jsx)("thead", {
          children: cc11001100_hook("children", t, "object-key-init")
        });
      }, "var-init"),
      S = cc11001100_hook("S", e => {
        let {
          children: t
        } = cc11001100_hook("", e, "var-init");
        return (0, r.jsx)("tbody", {
          children: cc11001100_hook("children", t, "object-key-init")
        });
      }, "var-init"),
      A = cc11001100_hook("A", e => {
        let {
          children: t
        } = cc11001100_hook("", e, "var-init");
        return (0, r.jsx)("tr", {
          children: cc11001100_hook("children", t, "object-key-init")
        });
      }, "var-init"),
      I = cc11001100_hook("I", e => {
        let {
          children: t
        } = cc11001100_hook("", e, "var-init");
        return (0, r.jsx)("th", {
          children: cc11001100_hook("children", a.Children.map(t, e => "string" == typeof e ? e.split("<br>").map((e, t, n) => (0, r.jsxs)(a.Fragment, {
            children: cc11001100_hook("children", [e, t < n.length - 1 && (0, r.jsx)("br", {})], "object-key-init")
          }, t)) : e), "object-key-init")
        });
      }, "var-init"),
      R = cc11001100_hook("R", e => {
        let {
          children: t
        } = cc11001100_hook("", e, "var-init");
        return (0, r.jsx)("td", {
          children: cc11001100_hook("children", a.Children.map(t, e => "string" == typeof e ? e.split("<br>").map((e, t, n) => (0, r.jsxs)(a.Fragment, {
            children: cc11001100_hook("children", [e, t < n.length - 1 && (0, r.jsx)("br", {})], "object-key-init")
          }, t)) : e), "object-key-init")
        });
      }, "var-init"),
      B = cc11001100_hook("B", e => "string" != typeof e ? e : e.replace(RegExp("\\\\\\[(.*?)\\\\\\]", "gs"), (e, t) => "$$".concat(t, "$$")).replace(RegExp("\\\\\\((.*?)\\\\\\)", "gs"), (e, t) => "$$".concat(t, "$$")).replace(RegExp("(^|[^\\\\])\\$(.+?)\\$", "gs"), (e, t, n) => "".concat(t, "$").concat(n, "$")), "var-init");
    function T(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          className: t = "",
          loading: n,
          sentenceId: d,
          turnId: u,
          stepping: _,
          extraInfo: h,
          privateStopVis: p,
          status: f,
          loadingEvent: g,
          ignoreMdStyle: x
        } = cc11001100_hook("", e, "var-init"),
        {
          webSearchDetail: b
        } = cc11001100_hook("", h || {}, "var-init"),
        y = cc11001100_hook("y", (0, a.useCallback)(e => (0, r.jsx)(j.default, {
          ...e,
          webSearchDetail: b,
          children: e.children
        }), [b]), "var-init"),
        T = cc11001100_hook("T", (0, a.useCallback)(e => {
          let {
            node: t,
            inline: n,
            className: a,
            children: s,
            ...c
          } = cc11001100_hook("", e, "var-init");
          return (0, r.jsx)(k, {
            node: cc11001100_hook("node", t, "object-key-init"),
            inline: cc11001100_hook("inline", n, "object-key-init"),
            className: cc11001100_hook("className", a, "object-key-init"),
            turnId: cc11001100_hook("turnId", u, "object-key-init"),
            sentenceId: cc11001100_hook("sentenceId", d, "object-key-init"),
            privateStopVis: cc11001100_hook("privateStopVis", p, "object-key-init"),
            status: cc11001100_hook("status", f, "object-key-init"),
            ...c,
            children: s
          });
        }, [u, d, p, f]), "var-init"),
        E = cc11001100_hook("E", B(e.content), "var-init"),
        D = cc11001100_hook("D", E.replace(/\$([^\$\n]+?)\$|\\\(([^\)]+?)\\\)/g, (e, t, n) => e.replace(/\n/g, " ")).replace(/(\n?)((?:\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\begin\{[^}]+\}[\s\S]+?\\end\{[^}]+\}))(\n?)/g, (e, t, n, r) => {
          let a = cc11001100_hook("a", /\\begin\{|\\end\{|\\\\|\\newline|\\displaystyle/.test(n), "var-init");
          if (!a) return (t || "") + n.replace(/\n/g, " ") + (r || "");
          {
            let e = cc11001100_hook("e", n.trim(), "var-init");
            return e.startsWith("$$") && !e.startsWith("$$\n") && (e = cc11001100_hook("e", "$$\n" + e.slice(2), "assign")), e.endsWith("$$") && !e.endsWith("\n$$") && (e = cc11001100_hook("e", e.slice(0, -2) + "\n$$", "assign")), e.startsWith("\\[") && !e.startsWith("\\[\n") && (e = cc11001100_hook("e", e.replace(/^\\\[/, "\\[\n"), "assign")), e.endsWith("\\]") && !e.endsWith("\n\\]") && (e = cc11001100_hook("e", e.replace(/\\\]$/, "\n\\]"), "assign")), "".concat(t || "\n").concat(e).concat(r || "\n");
          }
        }), "var-init");
      return D = cc11001100_hook("D", D.replace(/\[(\d+)\]\((@ref)\)/g, " $&"), "assign"), (0, r.jsxs)("div", {
        className: cc11001100_hook("className", "\n      ".concat(n ? "".concat(m().markdown_body_loading, " ").concat(x ? "" : "markdown-body") : "".concat(x ? "" : "markdown-body"), "\n      ").concat(t, "\n    "), "object-key-init"),
        style: {},
        children: cc11001100_hook("children", [(0, r.jsx)(s.D, {
          remarkPlugins: cc11001100_hook("remarkPlugins", [[l.Z, {
            singleDollarTextMath: cc11001100_hook("singleDollarTextMath", !0, "object-key-init")
          }], o.Z, i.Z], "object-key-init"),
          sourcePos: cc11001100_hook("sourcePos", !0, "object-key-init"),
          rawSourcePos: cc11001100_hook("rawSourcePos", !0, "object-key-init"),
          rehypePlugins: cc11001100_hook("rehypePlugins", [[c.Z, {
            displayMode: cc11001100_hook("displayMode", !0, "object-key-init"),
            tags: cc11001100_hook("tags", "all", "object-key-init")
          }]], "object-key-init"),
          components: {
            table: cc11001100_hook("table", C, "object-key-init"),
            thead: cc11001100_hook("thead", N, "object-key-init"),
            tbody: cc11001100_hook("tbody", S, "object-key-init"),
            tr: cc11001100_hook("tr", A, "object-key-init"),
            th: cc11001100_hook("th", I, "object-key-init"),
            td: cc11001100_hook("td", R, "object-key-init"),
            code: cc11001100_hook("code", T, "object-key-init"),
            a: cc11001100_hook("a", y, "object-key-init"),
            p: cc11001100_hook("p", _ ? w.default : e => {
              let {
                children: t,
                ...n
              } = cc11001100_hook("", e, "var-init");
              return (0, r.jsx)("p", {
                ...n,
                children: t
              });
            }, "object-key-init"),
            li: cc11001100_hook("li", _ ? v.CustomLi : e => {
              let {
                children: t,
                ...n
              } = cc11001100_hook("", e, "var-init");
              return (0, r.jsx)("li", {
                ...n,
                children: t
              });
            }, "object-key-init"),
            ul: cc11001100_hook("ul", _ ? v.CustomUl : function (e) {
              let {
                node: t,
                inline: n,
                className: a,
                children: s,
                ...c
              } = cc11001100_hook("", e, "var-init");
              return (0, r.jsxs)(r.Fragment, {
                children: cc11001100_hook("children", [(0, r.jsx)("ul", {
                  ...c,
                  children: s
                }), (0, r.jsx)("br", {
                  style: {
                    display: cc11001100_hook("display", "none", "object-key-init")
                  }
                })], "object-key-init")
              });
            }, "object-key-init"),
            ol: cc11001100_hook("ol", _ ? v.CustomOl : function (e) {
              let {
                node: t,
                inline: n,
                className: a,
                children: s,
                ...c
              } = cc11001100_hook("", e, "var-init");
              return (0, r.jsxs)(r.Fragment, {
                children: cc11001100_hook("children", [(0, r.jsx)("ol", {
                  ...c,
                  children: s
                }), (0, r.jsx)("br", {
                  style: {
                    display: cc11001100_hook("display", "none", "object-key-init")
                  }
                })], "object-key-init")
              });
            }, "object-key-init")
          },
          linkTarget: cc11001100_hook("linkTarget", "_blank", "object-key-init"),
          children: cc11001100_hook("children", D, "object-key-init")
        }), (null == g ? void 0 : g.status) && (0, r.jsxs)("div", {
          className: cc11001100_hook("className", m().loading_event, "object-key-init"),
          children: cc11001100_hook("children", [(null == g ? void 0 : g.content) || "正在加载中，请稍后", (0, r.jsx)("span", {
            className: cc11001100_hook("className", m().dot, "object-key-init"),
            children: cc11001100_hook("children", ".", "object-key-init")
          }), (0, r.jsx)("span", {
            className: cc11001100_hook("className", m().dot, "object-key-init"),
            children: cc11001100_hook("children", ".", "object-key-init")
          }), (0, r.jsx)("span", {
            className: cc11001100_hook("className", m().dot, "object-key-init"),
            children: cc11001100_hook("children", ".", "object-key-init")
          })], "object-key-init")
        })], "object-key-init")
      });
    }
  },
  42645: function (e, t, n) {
    "use strict";

    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(69082), "var-init"),
      s = cc11001100_hook("s", n(2265), "var-init");
    t.Z = cc11001100_hook("t.Z", function (e) {
      let {
          title: t,
          children: n,
          placement: c
        } = cc11001100_hook("", e, "var-init"),
        [i, o] = cc11001100_hook("", (0, s.useState)("hover"), "var-init");
      return (0, s.useEffect)(() => {
        let e = cc11001100_hook("e", window.matchMedia("(max-width: 879px)").matches, "var-init");
        e && o && o("focus");
      }, []), (0, r.jsx)(a.Z, {
        trigger: cc11001100_hook("trigger", i, "object-key-init"),
        title: cc11001100_hook("title", t, "object-key-init"),
        placement: cc11001100_hook("placement", c, "object-key-init"),
        children: cc11001100_hook("children", n, "object-key-init")
      });
    }, "assign");
  },
  75781: function (e, t, n) {
    "use strict";

    n.r(t);
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(42645), "var-init"),
      s = cc11001100_hook("s", n(60444), "var-init"),
      c = cc11001100_hook("c", n(2390), "var-init"),
      i = cc11001100_hook("i", n.n(c), "var-init"),
      o = cc11001100_hook("o", n(2265), "var-init"),
      l = cc11001100_hook("l", n(11762), "var-init"),
      d = cc11001100_hook("d", n.n(l), "var-init");
    t.default = cc11001100_hook("t.default", e => {
      let {
          value: t,
          className: n,
          isPlain: c
        } = cc11001100_hook("", e, "var-init"),
        [l, u] = cc11001100_hook("", (0, o.useState)(!1), "var-init");
      return (0, o.useRef)("copy-tooltip-".concat((0, s.O1)(4))), (0, o.useEffect)(() => {
        l && setTimeout(() => {
          u(!1);
        }, 3e3);
      }, [l]), (0, r.jsx)("div", {
        className: cc11001100_hook("className", "".concat(n), "object-key-init"),
        children: cc11001100_hook("children", (0, r.jsx)(a.Z, {
          title: cc11001100_hook("title", "复制", "object-key-init"),
          children: cc11001100_hook("children", (0, r.jsx)("div", {
            className: cc11001100_hook("className", d().container, "object-key-init"),
            style: cc11001100_hook("style", c ? {} : {
              boxShadow: cc11001100_hook("boxShadow", "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)", "object-key-init")
            }, "object-key-init"),
            onClick: cc11001100_hook("onClick", () => {
              i()(t), u(!0);
            }, "object-key-init"),
            children: cc11001100_hook("children", (0, r.jsx)("div", {
              className: cc11001100_hook("className", l ? d().copied : d().copyIcon, "object-key-init")
            }), "object-key-init")
          }), "object-key-init")
        }), "object-key-init")
      });
    }, "assign");
  },
  44805: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      animated_text: cc11001100_hook("animated_text", "CustomP_animated_text__AExiN", "object-key-init"),
      animated_char: cc11001100_hook("animated_char", "CustomP_animated_char__m3r9w", "object-key-init"),
      fadeIn: cc11001100_hook("fadeIn", "CustomP_fadeIn__sAFMJ", "object-key-init"),
      complete: cc11001100_hook("complete", "CustomP_complete__WL03L", "object-key-init")
    }, "assign");
  },
  68144: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      markdown_body_loading: cc11001100_hook("markdown_body_loading", "MarkDown_markdown_body_loading__Rc3FL", "object-key-init"),
      "dot-flashing": cc11001100_hook("dot-flashing", "MarkDown_dot-flashing__Eckjf", "object-key-init"),
      block_header: cc11001100_hook("block_header", "MarkDown_block_header__Jpkhb", "object-key-init"),
      language: cc11001100_hook("language", "MarkDown_language__DItCk", "object-key-init"),
      copyBtn: cc11001100_hook("copyBtn", "MarkDown_copyBtn__6Wmrp", "object-key-init"),
      loading_event: cc11001100_hook("loading_event", "MarkDown_loading_event__58ujj", "object-key-init"),
      dot: cc11001100_hook("dot", "MarkDown_dot__YPo0Q", "object-key-init"),
      dotloading: cc11001100_hook("dotloading", "MarkDown_dotloading__G_WrX", "object-key-init")
    }, "assign");
  },
  11762: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      copyIcon: cc11001100_hook("copyIcon", "style_copyIcon__w3b6v", "object-key-init"),
      copied: cc11001100_hook("copied", "style_copied__Gpk9P", "object-key-init"),
      container: cc11001100_hook("container", "style_container__s7Iv8", "object-key-init")
    }, "assign");
  },
  39610: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      desc_popover: cc11001100_hook("desc_popover", "BotItem_desc_popover__c8zgb", "object-key-init"),
      bot_item: cc11001100_hook("bot_item", "BotItem_bot_item__21cZ6", "object-key-init"),
      bot_avatar_wrapper: cc11001100_hook("bot_avatar_wrapper", "BotItem_bot_avatar_wrapper__9kpYl", "object-key-init"),
      bot_avatar: cc11001100_hook("bot_avatar", "BotItem_bot_avatar__RFx8n", "object-key-init"),
      bot_content: cc11001100_hook("bot_content", "BotItem_bot_content__muOq4", "object-key-init"),
      bot_name: cc11001100_hook("bot_name", "BotItem_bot_name__aAvHN", "object-key-init"),
      bot_desc: cc11001100_hook("bot_desc", "BotItem_bot_desc__OJLo9", "object-key-init")
    }, "assign");
  },
  41792: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      desc_popover: cc11001100_hook("desc_popover", "CardItem_desc_popover__svFys", "object-key-init"),
      card_item: cc11001100_hook("card_item", "CardItem_card_item__LSm_j", "object-key-init"),
      card_cover: cc11001100_hook("card_cover", "CardItem_card_cover__YeOrZ", "object-key-init"),
      card_content: cc11001100_hook("card_content", "CardItem_card_content__Jl_QF", "object-key-init"),
      card_title: cc11001100_hook("card_title", "CardItem_card_title__KUVL1", "object-key-init")
    }, "assign");
  },
  781: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      container: cc11001100_hook("container", "SearchDetailCards_container__pJmRS", "object-key-init"),
      card: cc11001100_hook("card", "SearchDetailCards_card__BIW_7", "object-key-init"),
      card_hover: cc11001100_hook("card_hover", "SearchDetailCards_card_hover__f1_i8", "object-key-init"),
      card_header_inner: cc11001100_hook("card_header_inner", "SearchDetailCards_card_header_inner__W6XHx", "object-key-init"),
      card_header: cc11001100_hook("card_header", "SearchDetailCards_card_header__NeGLK", "object-key-init"),
      card_link: cc11001100_hook("card_link", "SearchDetailCards_card_link__EmVPo", "object-key-init"),
      show_more: cc11001100_hook("show_more", "SearchDetailCards_show_more__O_ZrC", "object-key-init"),
      card_title: cc11001100_hook("card_title", "SearchDetailCards_card_title__dye7r", "object-key-init"),
      card_content: cc11001100_hook("card_content", "SearchDetailCards_card_content__eQdPm", "object-key-init")
    }, "assign");
  },
  56892: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      link_tooltip: cc11001100_hook("link_tooltip", "SearchToolTip_link_tooltip__6GZhV", "object-key-init"),
      link_tooltip_inner: cc11001100_hook("link_tooltip_inner", "SearchToolTip_link_tooltip_inner__Tb5JS", "object-key-init")
    }, "assign");
  },
  19720: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      bot_gallery: cc11001100_hook("bot_gallery", "YsBots_bot_gallery__U_Zw_", "object-key-init"),
      bot_item_container: cc11001100_hook("bot_item_container", "YsBots_bot_item_container__HacZU", "object-key-init"),
      bot_item: cc11001100_hook("bot_item", "YsBots_bot_item__xFtut", "object-key-init"),
      bot_avatar_wrapper: cc11001100_hook("bot_avatar_wrapper", "YsBots_bot_avatar_wrapper__16mY5", "object-key-init"),
      bot_avatar: cc11001100_hook("bot_avatar", "YsBots_bot_avatar__NhCqv", "object-key-init"),
      bot_content: cc11001100_hook("bot_content", "YsBots_bot_content__B7upa", "object-key-init"),
      bot_name: cc11001100_hook("bot_name", "YsBots_bot_name__iDL3n", "object-key-init"),
      bot_desc: cc11001100_hook("bot_desc", "YsBots_bot_desc__didnH", "object-key-init")
    }, "assign");
  },
  42806: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      card_gallery: cc11001100_hook("card_gallery", "YsCards_card_gallery__4s8HN", "object-key-init"),
      card_item_container: cc11001100_hook("card_item_container", "YsCards_card_item_container__bTCUR", "object-key-init")
    }, "assign");
  },
  91465: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      image_gallery: cc11001100_hook("image_gallery", "YsImgs_image_gallery__fd4Z8", "object-key-init"),
      image_content_container: cc11001100_hook("image_content_container", "YsImgs_image_content_container__fz0BK", "object-key-init"),
      image_placeholder: cc11001100_hook("image_placeholder", "YsImgs_image_placeholder__Gug16", "object-key-init"),
      hover_tool_group: cc11001100_hook("hover_tool_group", "YsImgs_hover_tool_group__P4KYH", "object-key-init"),
      download_tool: cc11001100_hook("download_tool", "YsImgs_download_tool__hIpre", "object-key-init"),
      download_icon: cc11001100_hook("download_icon", "YsImgs_download_icon__uFG0B", "object-key-init"),
      download_text: cc11001100_hook("download_text", "YsImgs_download_text__44CnR", "object-key-init")
    }, "assign");
  },
  21372: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      deep_think_block: cc11001100_hook("deep_think_block", "YsThink_deep_think_block__RhiAW", "object-key-init"),
      header: cc11001100_hook("header", "YsThink_header__vl_Qk", "object-key-init"),
      content: cc11001100_hook("content", "YsThink_content__5nbS4", "object-key-init"),
      icon: cc11001100_hook("icon", "YsThink_icon__Du_1R", "object-key-init"),
      text: cc11001100_hook("text", "YsThink_text__tuy9C", "object-key-init"),
      toggleButton: cc11001100_hook("toggleButton", "YsThink_toggleButton__ChM97", "object-key-init"),
      expanded: cc11001100_hook("expanded", "YsThink_expanded__RIH2l", "object-key-init"),
      body: cc11001100_hook("body", "YsThink_body__W3KGT", "object-key-init"),
      collapsed: cc11001100_hook("collapsed", "YsThink_collapsed__b54r_", "object-key-init"),
      think_blockquote: cc11001100_hook("think_blockquote", "YsThink_think_blockquote__a1NmQ", "object-key-init"),
      custom_markdown_body: cc11001100_hook("custom_markdown_body", "YsThink_custom_markdown_body__CVSFL", "object-key-init")
    }, "assign");
  },
  73705: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      annotation_num_inner: cc11001100_hook("annotation_num_inner", "CustomLink_annotation_num_inner__BdyUD", "object-key-init"),
      annotation_num: cc11001100_hook("annotation_num", "CustomLink_annotation_num__rTbRp", "object-key-init"),
      link_tooltip: cc11001100_hook("link_tooltip", "CustomLink_link_tooltip__vDKba", "object-key-init"),
      link_icon: cc11001100_hook("link_icon", "CustomLink_link_icon__1mDAg", "object-key-init"),
      link_msg: cc11001100_hook("link_msg", "CustomLink_link_msg__QOWYZ", "object-key-init"),
      link_tooltip_inner: cc11001100_hook("link_tooltip_inner", "CustomLink_link_tooltip_inner__WmlFE", "object-key-init")
    }, "assign");
  },
  57159: function (e, t) {
    "use strict";

    t.Z = cc11001100_hook("t.Z", {
      src: cc11001100_hook("src", "/_next/static/media/xiaobai-host-logo.d4925f18.png", "object-key-init"),
      height: cc11001100_hook("height", 48, "object-key-init"),
      width: cc11001100_hook("width", 48, "object-key-init"),
      blurDataURL: cc11001100_hook("blurDataURL", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAY0lEQVR42i2Nyw3AIAxDsw7d/07pV0IdAAdm4A4XN9AqsqXYkp+IwMGj2wUs9mLRmpmpQxVONCReLfAwT1QvpUde3HmbR5ZuwWPtydX0jEA9GNvsG6jBGN9omaM/B9vEejiRF5ovZCpQJmV/AAAAAElFTkSuQmCC", "object-key-init"),
      blurWidth: cc11001100_hook("blurWidth", 8, "object-key-init"),
      blurHeight: cc11001100_hook("blurHeight", 8, "object-key-init")
    }, "assign");
  }
}]);