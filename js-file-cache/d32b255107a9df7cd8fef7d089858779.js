try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "83c2e4fe-8801-458c-854a-77f9239da7da", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-83c2e4fe-8801-458c-854a-77f9239da7da", "assign"));
} catch (e) {}
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[9676], {
  95025: function (e, t, n) {
    Promise.resolve().then(n.bind(n, 77964)), Promise.resolve().then(n.bind(n, 90109)), Promise.resolve().then(n.bind(n, 34577));
  },
  57555: function (e, t, n) {
    "use strict";

    n.d(t, {
      Z: function () {
        return j;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(19606), "var-init"),
      s = cc11001100_hook("s", n(60444), "var-init"),
      i = cc11001100_hook("i", n(2265), "var-init"),
      l = cc11001100_hook("l", n(1068), "var-init"),
      r = cc11001100_hook("r", n(34577), "var-init"),
      c = cc11001100_hook("c", n(54544), "var-init"),
      _ = cc11001100_hook("_", n.n(c), "var-init"),
      d = function (e) {
        let {
          text: t,
          item: n,
          onClick: o
        } = cc11001100_hook("", e, "var-init");
        return (0, a.jsx)("div", {
          className: cc11001100_hook("className", "".concat(_().item_container, " custom_button"), "object-key-init"),
          onClick: cc11001100_hook("onClick", () => o(n), "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)("div", {
            className: cc11001100_hook("className", _().item_inctn, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsx)("div", {
              className: cc11001100_hook("className", _().inner_text, "object-key-init"),
              children: cc11001100_hook("children", t, "object-key-init")
            }), "object-key-init")
          }), "object-key-init")
        });
      },
      u = cc11001100_hook("u", n(13987), "var-init"),
      p = function (e) {
        let {
            suggestList: t,
            onClick: n
          } = cc11001100_hook("", e, "var-init"),
          [o, s] = cc11001100_hook("", (0, i.useState)(0), "var-init"),
          [c, p] = cc11001100_hook("", (0, i.useState)(!0), "var-init"),
          {
            track: m
          } = cc11001100_hook("", (0, r.useTrack)(), "var-init"),
          v = cc11001100_hook("v", (0, i.useCallback)(() => {
            p(!1), setTimeout(() => {
              let e = cc11001100_hook("e", o + 1, "var-init"),
                n = cc11001100_hook("n", Math.ceil(t.length / 6), "var-init");
              e > n && (e = cc11001100_hook("e", 0, "assign")), s(e), p(!0);
            });
          }, [o, s, t]), "var-init"),
          h = cc11001100_hook("h", (0, i.useMemo)(() => {
            let e = cc11001100_hook("e", [], "var-init"),
              n = cc11001100_hook("n", t.length, "var-init"),
              a = cc11001100_hook("a", 0, "var-init"),
              s = cc11001100_hook("s", 6 * o, "var-init");
            for (; n > 0 && a < 6;) s < n ? (e.push(t[s]), s++, a++) : s = cc11001100_hook("s", 0, "assign");
            return e;
          }, [o, t]), "var-init"),
          f = cc11001100_hook("f", (0, i.useCallback)((e, t) => {
            n({
              ...e,
              customAttrs: {
                input_way: cc11001100_hook("input_way", l.zY.INPUT_WAY.RECOMMEND, "object-key-init")
              }
            }), m("chat_recommend_question_click", {
              page: cc11001100_hook("page", l.fK.CHAT.key, "object-key-init"),
              area: cc11001100_hook("area", l.fK.CHAT.area.CHAT.key, "object-key-init"),
              id: cc11001100_hook("id", e.textId, "object-key-init"),
              index: cc11001100_hook("index", t, "object-key-init"),
              element: cc11001100_hook("element", l.fK.CHAT.area.CHAT.element.RECOMMEND, "object-key-init"),
              input_way: cc11001100_hook("input_way", l.zY.INPUT_WAY.RECOMMEND, "object-key-init"),
              bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init"),
              content: cc11001100_hook("content", e.textContent, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", "", "object-key-init")
            });
          }, [n, m]), "var-init");
        return (0, i.useEffect)(() => {
          for (let e = cc11001100_hook("e", 0, "var-init"); e < h.length; ++e) {
            let t = cc11001100_hook("t", h[e], "var-init");
            m("chat_recommend_question_exposure", {
              page: cc11001100_hook("page", l.fK.CHAT.key, "object-key-init"),
              area: cc11001100_hook("area", l.fK.CHAT.area.CHAT.key, "object-key-init"),
              id: cc11001100_hook("id", t.textId, "object-key-init"),
              index: cc11001100_hook("index", e, "object-key-init"),
              element: cc11001100_hook("element", l.fK.CHAT.area.CHAT.element.RECOMMEND, "object-key-init"),
              input_way: cc11001100_hook("input_way", l.zY.INPUT_WAY.RECOMMEND, "object-key-init"),
              bhv_type: cc11001100_hook("bhv_type", "exposure", "object-key-init"),
              content: cc11001100_hook("content", t.textContent, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", "", "object-key-init")
            });
          }
        }, [h, m]), (0, a.jsxs)("div", {
          style: {
            position: cc11001100_hook("position", "relative", "object-key-init")
          },
          children: cc11001100_hook("children", [(0, a.jsx)("div", {
            className: cc11001100_hook("className", _().suggest_section_c, "object-key-init"),
            children: cc11001100_hook("children", h.map((e, t) => (0, a.jsx)("div", {
              className: cc11001100_hook("className", _().item_wrap, "object-key-init"),
              children: cc11001100_hook("children", (0, a.jsx)(d, {
                item: cc11001100_hook("item", e, "object-key-init"),
                text: cc11001100_hook("text", e.textContent, "object-key-init"),
                onClick: cc11001100_hook("onClick", e => {
                  f(e, t);
                }, "object-key-init")
              }, e.textContent), "object-key-init")
            }, e.text)), "object-key-init")
          }, "1123"), (0, a.jsx)("div", {
            className: cc11001100_hook("className", _().refresh_con, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsxs)("div", {
              className: cc11001100_hook("className", "".concat(_().refresh_ctn, " custom_button"), "object-key-init"),
              onClick: cc11001100_hook("onClick", v, "object-key-init"),
              children: cc11001100_hook("children", [(0, a.jsx)(u.Z, {
                className: cc11001100_hook("className", _().refresh_btn, "object-key-init"),
                name: cc11001100_hook("name", "regenerate-g6eh8lca", "object-key-init")
              }), (0, a.jsx)("div", {
                children: cc11001100_hook("children", "换一批", "object-key-init")
              })], "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        });
      },
      m = cc11001100_hook("m", n(13772), "var-init"),
      v = cc11001100_hook("v", n.n(m), "var-init");
    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t, n, o, s, l;
      let {
          botInfo: r
        } = cc11001100_hook("", e, "var-init"),
        c = cc11001100_hook("c", (0, i.useMemo)(() => {
          var e;
          return !!(null == r ? void 0 : null === (e = cc11001100_hook("e", r.extra, "assign")) || void 0 === e ? void 0 : e.openingRemarks);
        }, [r]), "var-init");
      return c ? (0, a.jsx)("div", {
        className: cc11001100_hook("className", v().another_bot_info, "object-key-init"),
        children: cc11001100_hook("children", (0, a.jsx)("div", {
          className: cc11001100_hook("className", v().another_style, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsxs)("div", {
            className: cc11001100_hook("className", v().flex, "object-key-init"),
            children: cc11001100_hook("children", [(0, a.jsxs)("div", {
              className: cc11001100_hook("className", v().content_top, "object-key-init"),
              children: cc11001100_hook("children", [(0, a.jsxs)("div", {
                className: cc11001100_hook("className", v().bot_logo, "object-key-init"),
                children: cc11001100_hook("children", [(null == r ? void 0 : null === (t = cc11001100_hook("t", r.extra, "assign")) || void 0 === t ? void 0 : t.redPoint) && (0, a.jsx)("div", {
                  className: cc11001100_hook("className", v().bot_red_point, "object-key-init"),
                  style: {
                    backgroundColor: cc11001100_hook("backgroundColor", null == r ? void 0 : r.extra.redPoint.backgroundColor, "object-key-init"),
                    color: cc11001100_hook("color", null == r ? void 0 : r.extra.redPoint.textColor, "object-key-init")
                  },
                  children: cc11001100_hook("children", r.extra.redPoint.text, "object-key-init")
                }), (0, a.jsx)("img", {
                  className: cc11001100_hook("className", v().bot_avatar, "object-key-init"),
                  src: cc11001100_hook("src", null == r ? void 0 : r.avatar, "object-key-init"),
                  alt: cc11001100_hook("alt", "", "object-key-init")
                })], "object-key-init")
              }), (0, a.jsx)("div", {
                className: cc11001100_hook("className", v().bot_desc, "object-key-init"),
                children: cc11001100_hook("children", null == r ? void 0 : null === (o = cc11001100_hook("o", r.extra, "assign")) || void 0 === o ? void 0 : null === (n = cc11001100_hook("n", o.openingRemarks, "assign")) || void 0 === n ? void 0 : n.descWeb, "object-key-init")
              })], "object-key-init")
            }), (0, a.jsx)("div", {
              className: cc11001100_hook("className", v().bot_fulldesc, "object-key-init"),
              children: cc11001100_hook("children", null == r ? void 0 : null === (l = cc11001100_hook("l", r.extra, "assign")) || void 0 === l ? void 0 : null === (s = cc11001100_hook("s", l.openingRemarks, "assign")) || void 0 === s ? void 0 : s.fullDescWeb, "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        }), "object-key-init")
      }) : (0, a.jsx)("div", {
        className: cc11001100_hook("className", v().bot_info, "object-key-init"),
        children: cc11001100_hook("children", (0, a.jsx)("div", {
          className: cc11001100_hook("className", v().common_style, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsxs)("div", {
            className: cc11001100_hook("className", v().flex, "object-key-init"),
            children: cc11001100_hook("children", [(0, a.jsx)("div", {
              className: cc11001100_hook("className", v().bot_logo, "object-key-init"),
              children: cc11001100_hook("children", (0, a.jsx)("img", {
                className: cc11001100_hook("className", v().bot_avatar, "object-key-init"),
                src: cc11001100_hook("src", null == r ? void 0 : r.avatar, "object-key-init"),
                alt: cc11001100_hook("alt", "", "object-key-init")
              }), "object-key-init")
            }), (0, a.jsx)("div", {
              className: cc11001100_hook("className", v().bot_name, "object-key-init"),
              children: cc11001100_hook("children", null == r ? void 0 : r.name, "object-key-init")
            }), (0, a.jsx)("div", {
              className: cc11001100_hook("className", v().bot_opening_remarks, "object-key-init"),
              children: cc11001100_hook("children", null == r ? void 0 : r.openingRemarks, "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        }), "object-key-init")
      });
    }
    var f = cc11001100_hook("f", n(80170), "var-init"),
      b = cc11001100_hook("b", n.n(f), "var-init"),
      g = function (e) {
        let {
            handleClickLogo: t,
            handleClickSuggest: n,
            children: l,
            appConfig: r,
            botId: c,
            botInfo: _,
            recommend: d
          } = cc11001100_hook("", e, "var-init"),
          [u, m] = cc11001100_hook("", (0, i.useState)([]), "var-init"),
          [v, f] = cc11001100_hook("", (0, i.useState)(0), "var-init"),
          [g, x] = cc11001100_hook("", (0, i.useState)(!1), "var-init"),
          k = cc11001100_hook("k", (0, i.useMemo)(() => function (e) {
            for (let t = cc11001100_hook("t", e.length - 1, "var-init"); t > 0; t--) {
              let n = cc11001100_hook("n", Math.floor(Math.random() * (t + 1)), "var-init");
              [e[t], e[n]] = cc11001100_hook("", [e[n], e[t]], "assign");
            }
            return e;
          }((null == r ? void 0 : r.chatPageLargeTitle) || []), [r]), "var-init");
        (0, i.useEffect)(() => {
          let e = cc11001100_hook("e", setInterval(() => {
            let e = cc11001100_hook("e", (v + 1) % k.length, "var-init");
            f(e);
          }, 1e3), "var-init");
          return () => clearInterval(e);
        }, []);
        let C = cc11001100_hook("C", (0, i.useMemo)(() => d ? d.texts : u, [d, u]), "var-init"),
          y = cc11001100_hook("y", (0, i.useMemo)(() => (0, s.zL)({
            botId: cc11001100_hook("botId", c, "object-key-init"),
            appConfig: cc11001100_hook("appConfig", r, "object-key-init")
          }), [c, r]), "var-init");
        return (0, i.useEffect)(() => {
          let e = cc11001100_hook("e", async () => {
            let e = cc11001100_hook("e", await (0, o.Xh)(), "var-init");
            if ((null == e ? void 0 : e.code) === 0) {
              var t;
              m(null === (t = cc11001100_hook("t", e.data, "assign")) || void 0 === t ? void 0 : t.texts);
            }
          }, "var-init");
          d || e();
        }, []), (0, a.jsx)("div", {
          className: cc11001100_hook("className", b().main_content, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsxs)("div", {
            className: cc11001100_hook("className", b().main_inner, "object-key-init"),
            children: cc11001100_hook("children", [y ? (0, a.jsxs)("div", {
              className: cc11001100_hook("className", b().content_container, "object-key-init"),
              children: cc11001100_hook("children", [(0, a.jsx)("div", {
                className: cc11001100_hook("className", b().homepage_logo_newyear, "object-key-init")
              }), (0, a.jsx)("div", {
                className: cc11001100_hook("className", b().sug_ctn, "object-key-init"),
                children: cc11001100_hook("children", (0, a.jsx)(p, {
                  suggestList: cc11001100_hook("suggestList", C, "object-key-init"),
                  onClick: cc11001100_hook("onClick", n, "object-key-init")
                }), "object-key-init")
              })], "object-key-init")
            }) : (0, a.jsx)(h, {
              botInfo: cc11001100_hook("botInfo", _, "object-key-init")
            }), (0, a.jsx)("div", {
              className: cc11001100_hook("className", b().input_ctn, "object-key-init"),
              children: cc11001100_hook("children", l, "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        });
      },
      x = cc11001100_hook("x", n(36078), "var-init"),
      k = cc11001100_hook("k", n(25159), "var-init"),
      C = cc11001100_hook("C", n(67991), "var-init"),
      y = cc11001100_hook("y", n(24033), "var-init"),
      j = function (e) {
        let {
            className: t = "",
            botId: n,
            botInfo: o,
            children: s,
            appConfig: r,
            recommend: c,
            nextConvId: _,
            forceLogin: d
          } = cc11001100_hook("", e, "var-init"),
          {
            createNewConv: u,
            changeChatUrl: p,
            checkedMenuItems: m
          } = cc11001100_hook("", (0, k.useConver)(), "var-init");
        (0, y.useRouter)();
        let v = cc11001100_hook("v", (0, i.useRef)(null), "var-init"),
          h = cc11001100_hook("h", (0, i.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", v.current, "assign")) || void 0 === t || t.info(e);
          }, [v]), "var-init"),
          f = cc11001100_hook("f", (0, i.useCallback)(async e => {
            try {
              if (d) {
                let e = cc11001100_hook("e", await d(), "var-init");
                if (!e.token) return;
              }
              let {
                  textContent: t,
                  textId: a
                } = cc11001100_hook("", e, "var-init"),
                s = cc11001100_hook("s", await u({
                  botId: cc11001100_hook("botId", n, "object-key-init"),
                  conversationId: cc11001100_hook("conversationId", _, "object-key-init")
                }), "var-init");
              p(s), C.Z.sendMsgToBot({
                botId: cc11001100_hook("botId", n, "object-key-init"),
                botAlias: cc11001100_hook("botAlias", (null == o ? void 0 : o.alias) || "", "object-key-init"),
                contents: cc11001100_hook("contents", t, "object-key-init"),
                isNewConversation: cc11001100_hook("isNewConversation", !0, "object-key-init"),
                strategy: {
                  isRetry: cc11001100_hook("isRetry", !1, "object-key-init"),
                  breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
                },
                conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
                uuid: cc11001100_hook("uuid", s, "object-key-init"),
                capabilities: cc11001100_hook("capabilities", m || [], "object-key-init"),
                inputWay: cc11001100_hook("inputWay", l.zY.INPUT_WAY.RECOMMEND, "object-key-init"),
                customAttrs: {
                  input_way: cc11001100_hook("input_way", l.zY.INPUT_WAY.RECOMMEND, "object-key-init")
                }
              });
            } catch (t) {
              let e = cc11001100_hook("e", t ? t.msg : "网络开小差，请稍后重试", "var-init");
              h(e);
            }
          }, [u, n, null == o ? void 0 : o.alias, _, h, p, d, m]), "var-init");
        return (0, a.jsxs)(a.Fragment, {
          children: cc11001100_hook("children", [(0, a.jsx)(x.Z, {
            ref: cc11001100_hook("ref", v, "object-key-init")
          }), (0, a.jsx)("div", {
            style: {
              width: cc11001100_hook("width", "100%", "object-key-init"),
              margin: cc11001100_hook("margin", "0 auto", "object-key-init"),
              overflow: cc11001100_hook("overflow", "auto", "object-key-init"),
              flex: cc11001100_hook("flex", 1, "object-key-init")
            },
            className: cc11001100_hook("className", t, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsx)(g, {
              handleClickLogo: cc11001100_hook("handleClickLogo", () => {}, "object-key-init"),
              handleClickSuggest: cc11001100_hook("handleClickSuggest", f, "object-key-init"),
              appConfig: cc11001100_hook("appConfig", r, "object-key-init"),
              botId: cc11001100_hook("botId", n, "object-key-init"),
              botInfo: cc11001100_hook("botInfo", o, "object-key-init"),
              recommend: cc11001100_hook("recommend", c, "object-key-init"),
              children: cc11001100_hook("children", (0, a.jsxs)(a.Fragment, {
                children: cc11001100_hook("children", [s, "70" !== n && (0, a.jsx)("div", {
                  style: {
                    color: cc11001100_hook("color", "#B9B9B9", "object-key-init"),
                    fontSize: cc11001100_hook("fontSize", 12, "object-key-init"),
                    fontWeight: cc11001100_hook("fontWeight", 200, "object-key-init"),
                    textAlign: cc11001100_hook("textAlign", "center", "object-key-init"),
                    position: cc11001100_hook("position", "absolute", "object-key-init"),
                    bottom: cc11001100_hook("bottom", 16, "object-key-init"),
                    left: cc11001100_hook("left", 0, "object-key-init"),
                    right: cc11001100_hook("right", 0, "object-key-init")
                  },
                  children: cc11001100_hook("children", "AI生成的内容，仅供参考", "object-key-init")
                })], "object-key-init")
              }), "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        });
      };
  },
  98872: function (e, t, n) {
    "use strict";

    n.d(t, {
      Z: function () {
        return en;
      },
      V: function () {
        return et;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(36078), "var-init"),
      s = cc11001100_hook("s", n(1068), "var-init"),
      i = cc11001100_hook("i", n(25159), "var-init"),
      l = cc11001100_hook("l", n(61040), "var-init"),
      r = cc11001100_hook("r", n(58644), "var-init"),
      c = cc11001100_hook("c", n(34577), "var-init"),
      _ = cc11001100_hook("_", n(76570), "var-init"),
      d = cc11001100_hook("d", n(73168), "var-init"),
      u = cc11001100_hook("u", n(67991), "var-init"),
      p = cc11001100_hook("p", n(60444), "var-init"),
      m = cc11001100_hook("m", n(48004), "var-init"),
      v = cc11001100_hook("v", n.n(m), "var-init"),
      h = cc11001100_hook("h", n(24033), "var-init"),
      f = cc11001100_hook("f", n(2265), "var-init"),
      b = cc11001100_hook("b", n(28445), "var-init"),
      g = cc11001100_hook("g", n(42645), "var-init"),
      x = cc11001100_hook("x", n(13987), "var-init"),
      k = cc11001100_hook("k", (e, t, n) => {
        let a = cc11001100_hook("a", (0, f.useMemo)(() => s.Re[n], [n]), "var-init"),
          {
            mainConverItem: o
          } = cc11001100_hook("", (0, l.useConverMenuContext)(), "var-init"),
          i = cc11001100_hook("i", (0, f.useMemo)(() => {
            let e = cc11001100_hook("e", null == o ? void 0 : o.key, "var-init");
            return !e || s.x$.includes(e);
          }, [o]), "var-init");
        (0, f.useEffect)(() => {
          let o = cc11001100_hook("o", o => {
            if ("image" !== n || !t || !i) return;
            let s = cc11001100_hook("s", o.clipboardData || o.clipboardData, "var-init");
            if (!s) return;
            let l = cc11001100_hook("l", Array.from(s.items), "var-init");
            for (let t of l) {
              var r;
              if ("file" === t.kind && (null == a ? void 0 : null === (r = cc11001100_hook("r", a.acceptType, "assign")) || void 0 === r ? void 0 : r.includes(null == t ? void 0 : t.type))) {
                let n = cc11001100_hook("n", t.getAsFile(), "var-init");
                if (n) {
                  e(n), o.preventDefault();
                  break;
                }
              }
            }
          }, "var-init");
          return window.addEventListener("paste", o), () => {
            window.removeEventListener("paste", o);
          };
        }, [e, t, i, a]);
      }, "var-init"),
      C = cc11001100_hook("C", n(63846), "var-init"),
      y = cc11001100_hook("y", n.n(C), "var-init"),
      j = cc11001100_hook("j", e => {
        let {
            type: t,
            files: n,
            uploadFile: i,
            page: l,
            preUpload: r,
            preCheck: d,
            disabled: u,
            sendImmediately: p,
            focus: m
          } = cc11001100_hook("", e, "var-init"),
          v = cc11001100_hook("v", (0, f.useRef)(null), "var-init"),
          h = cc11001100_hook("h", (0, f.useRef)(null), "var-init"),
          {
            track: b
          } = cc11001100_hook("", (0, c.useTrack)(), "var-init"),
          C = cc11001100_hook("C", (0, f.useMemo)(() => s.Re[t] || s.Re.file, [t]), "var-init"),
          j = cc11001100_hook("j", (0, f.useMemo)(() => C.acceptType.join(" ,"), [C]), "var-init"),
          N = cc11001100_hook("N", (0, f.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", h.current, "assign")) || void 0 === t || t.info(e);
          }, [h]), "var-init"),
          I = cc11001100_hook("I", (0, f.useCallback)(async () => {
            if (u) return N(M), !1;
            let e = cc11001100_hook("e", n.filter(e => C.acceptType.includes(e.type)).length, "var-init");
            if (e >= C.lengthLimit) return N(C.exceedLengthMsg), !1;
            if (C.isForbidden({
              files: cc11001100_hook("files", n, "object-key-init")
            })) return N(C.forbiddenMsg), !1;
            try {
              if ("function" == typeof d && !(await d())) return !1;
              let e = cc11001100_hook("e", !0, "var-init");
              if (r && (e = cc11001100_hook("e", await r(), "assign")), !e) return !1;
            } catch (e) {
              return !1;
            }
            return !0;
          }, [d, r, v, u, N, n, C]), "var-init"),
          w = cc11001100_hook("w", (0, f.useCallback)(async () => {
            if (u) return;
            let e = cc11001100_hook("e", n.filter(e => C.acceptType.includes(e.type)).length, "var-init");
            if (e >= C.lengthLimit) return N(C.exceedLengthMsg);
            if (C.isForbidden({
              files: cc11001100_hook("files", n, "object-key-init")
            })) return N(C.forbiddenMsg);
            b("chat_tools_".concat(C.key, "_upload_click"), {
              bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init")
            });
            try {
              if ("function" == typeof d && !(await d())) return;
              let e = cc11001100_hook("e", !0, "var-init");
              if (r && (e = cc11001100_hook("e", await r(), "assign")), e) {
                var t;
                null === (t = cc11001100_hook("t", v.current, "assign")) || void 0 === t || t.click();
              }
            } catch (e) {}
          }, [b, d, r, v, u, N, n, C]), "var-init"),
          S = cc11001100_hook("S", (0, f.useCallback)((e, t) => {
            b("chat_file_upload_error", {
              status: cc11001100_hook("status", t, "object-key-init"),
              file: cc11001100_hook("file", e, "object-key-init")
            });
          }, [b]), "var-init"),
          T = cc11001100_hook("T", (0, f.useCallback)(e => {
            let t = cc11001100_hook("t", l || "chat", "var-init"),
              n = cc11001100_hook("n", e.map(e => ({
                name: cc11001100_hook("name", e.name, "object-key-init"),
                size: cc11001100_hook("size", e.size, "object-key-init"),
                type: cc11001100_hook("type", e.type, "object-key-init"),
                lastModified: cc11001100_hook("lastModified", e.lastModified, "object-key-init")
              })), "var-init");
            b("chat_file_upload", {
              page: cc11001100_hook("page", t, "object-key-init"),
              uplaod_type: cc11001100_hook("uplaod_type", "click", "object-key-init"),
              files: cc11001100_hook("files", n, "object-key-init")
            });
          }, [l, b]), "var-init"),
          E = cc11001100_hook("E", (0, f.useCallback)(async e => {
            let t = cc11001100_hook("t", Array.from(e.target.files || []), "var-init"),
              n = cc11001100_hook("n", t.filter(e => e.size > C.sizeLimit ? (N(C.exceedSizeMsg), S(e, _.UPLOAD_ERROR_TYPE.SIZE), !1) : !e.type || -1 !== j.indexOf(e.type) || (N(C.exceedAcceptTypeMsg), S(e, _.UPLOAD_ERROR_TYPE.TYPE), !1)), "var-init"),
              a = cc11001100_hook("a", await i(n), "var-init");
            a || N(C.exceedTotalLengthMsg), T(t);
          }, [j, C, N, S, i, T]), "var-init"),
          A = cc11001100_hook("A", (0, f.useCallback)(async e => {
            var t, n;
            null == e || null === (t = cc11001100_hook("t", e.preventDefault, "assign")) || void 0 === t || t.call(e), null == e || null === (n = cc11001100_hook("n", e.stopPropagation, "assign")) || void 0 === n || n.call(e), await E(e);
          }, [E]), "var-init"),
          M = cc11001100_hook("M", (0, f.useMemo)(() => u ? p ? "问题正在解答中，请完成之后再上传新的题目。" : "请先关闭联网搜索，再上传".concat(C.title) : C.buttonUploadTips, [u, C]), "var-init"),
          F = cc11001100_hook("F", (0, f.useCallback)(async e => {
            if ("image" === t) {
              let t = cc11001100_hook("t", await I(), "var-init");
              t && (null == E || E({
                target: {
                  files: cc11001100_hook("files", [e], "object-key-init")
                }
              }));
            }
          }, [E, u, M, t, n, I]), "var-init");
        return k(F, m, t, N), (0, a.jsxs)(a.Fragment, {
          children: cc11001100_hook("children", [(0, a.jsx)(o.Z, {
            ref: cc11001100_hook("ref", h, "object-key-init")
          }), (0, a.jsx)(g.Z, {
            title: cc11001100_hook("title", M, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsxs)("div", {
              onClick: cc11001100_hook("onClick", w, "object-key-init"),
              role: cc11001100_hook("role", "button", "object-key-init"),
              "aria-label": cc11001100_hook("aria-label", "点击上传文件", "object-key-init"),
              tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
              style: {
                opacity: cc11001100_hook("opacity", u ? "0.6" : "1", "object-key-init")
              },
              children: cc11001100_hook("children", [(0, a.jsx)(x.Z, {
                className: cc11001100_hook("className", "".concat(y().upload_icon, " ").concat(y()[t], " custom_button"), "object-key-init"),
                style: {
                  cursor: cc11001100_hook("cursor", u ? "not-allowed" : "", "object-key-init")
                },
                name: cc11001100_hook("name", {
                  image: cc11001100_hook("image", "input-image-l", "object-key-init"),
                  file: cc11001100_hook("file", "input-paperclip-l", "object-key-init")
                }[t], "object-key-init")
              }), (0, a.jsx)("input", {
                ref: cc11001100_hook("ref", v, "object-key-init"),
                type: cc11001100_hook("type", "file", "object-key-init"),
                onChange: cc11001100_hook("onChange", A, "object-key-init"),
                onClick: cc11001100_hook("onClick", e => e.stopPropagation(), "object-key-init"),
                id: cc11001100_hook("id", "file-input", "object-key-init"),
                accept: cc11001100_hook("accept", C.acceptType.join(" ,"), "object-key-init"),
                style: {
                  display: cc11001100_hook("display", "none", "object-key-init")
                },
                value: cc11001100_hook("value", "", "object-key-init"),
                multiple: cc11001100_hook("multiple", C.lengthLimit > 1, "object-key-init")
              })], "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        });
      }, "var-init"),
      N = cc11001100_hook("N", n(73469), "var-init"),
      I = cc11001100_hook("I", n(70746), "var-init"),
      w = cc11001100_hook("w", n(42744), "var-init"),
      S = cc11001100_hook("S", n.n(w), "var-init"),
      T = cc11001100_hook("T", n(80976), "var-init"),
      E = cc11001100_hook("E", n.n(T), "var-init");
    let A = cc11001100_hook("A", {
      200004: {
        able: cc11001100_hook("able", "调用模型 Deepseek-R1，解决推理问题", "object-key-init"),
        disable: cc11001100_hook("disable", "调用模型 Deepseek-R1，解决推理问题", "object-key-init")
      },
      200007: {
        able: cc11001100_hook("able", "按需搜索网页", "object-key-init"),
        disable: cc11001100_hook("disable", "请删除文件再开启联网搜索", "object-key-init")
      }
    }, "var-init");
    var M = cc11001100_hook("M", (0, f.memo)(e => {
        let {
            features: t = [],
            fStates: n = [],
            checkMenuItem: o,
            uncheckMenuItem: s
          } = cc11001100_hook("", e, "var-init"),
          i = cc11001100_hook("i", (0, f.useCallback)(e => {
            if (e.btnDisable) return;
            let t = cc11001100_hook("t", void 0 !== n.find(t => t._id === e._id), "var-init");
            t ? s(e) : o(e);
          }, [n, o, s]), "var-init");
        return (0, a.jsx)("div", {
          className: cc11001100_hook("className", E().feature_container, "object-key-init"),
          children: cc11001100_hook("children", t.map(e => {
            let t = cc11001100_hook("t", void 0 !== n.find(t => t._id === e._id), "var-init"),
              o = cc11001100_hook("o", A[e.botId], "var-init");
            return (0, a.jsx)(g.Z, {
              title: cc11001100_hook("title", t ? void 0 : e.btnDisable ? null == o ? void 0 : o.disable : null == o ? void 0 : o.able, "object-key-init"),
              children: cc11001100_hook("children", (0, a.jsxs)("div", {
                "data-key": cc11001100_hook("data-key", e.key, "object-key-init"),
                onClick: cc11001100_hook("onClick", () => i(e), "object-key-init"),
                className: cc11001100_hook("className", t ? E().btn_act : e.btnDisable ? E().dis_btn : E().btn, "object-key-init"),
                children: cc11001100_hook("children", [(0, a.jsxs)("div", {
                  className: cc11001100_hook("className", E().icon_ctn, "object-key-init"),
                  children: cc11001100_hook("children", [(0, a.jsx)("img", {
                    src: cc11001100_hook("src", e.icon, "object-key-init"),
                    className: cc11001100_hook("className", t ? E().icon_img : E().icon_img_vis, "object-key-init"),
                    alt: cc11001100_hook("alt", "", "object-key-init")
                  }), (0, a.jsx)("img", {
                    src: cc11001100_hook("src", e.selectedIcon, "object-key-init"),
                    className: cc11001100_hook("className", t ? E().icon_img_vis : E().icon_img, "object-key-init"),
                    alt: cc11001100_hook("alt", "", "object-key-init")
                  })], "object-key-init")
                }), (0, a.jsx)("div", {
                  className: cc11001100_hook("className", E().btn_msg, "object-key-init"),
                  children: cc11001100_hook("children", e.title, "object-key-init")
                })], "object-key-init")
              }), "object-key-init")
            }, e._id);
          }), "object-key-init")
        });
      }), "var-init"),
      F = cc11001100_hook("F", n(97663), "var-init"),
      P = cc11001100_hook("P", n.n(F), "var-init");
    let R = cc11001100_hook("R", () => {}, "var-init");
    var D = cc11001100_hook("D", (0, f.forwardRef)((e, t) => {
        var n;
        let {
            className: o = "",
            sendEnable: s,
            focus: i,
            handleClickNewConv: r,
            placeholder: c = "",
            inputEnable: _,
            inputValue: d,
            handleKeyUp: u,
            handleKeyDown: p,
            handleCompositionStart: m = R,
            handleCompositionEnd: v = R,
            handleInput: h,
            handleFocus: k,
            handleBlur: C,
            handleSendMsg: y,
            handleClickInput: w,
            handleStopTurn: T,
            stopBtnShow: E = !1,
            uploadFile: A,
            deleteFile: F,
            clearFiles: D,
            reUpload: U,
            files: Z,
            sendBtnMsg: B,
            fileInputCounts: O,
            page: L,
            loadFilePreCheck: H,
            extend: Y,
            showUploadBtn: V = !1,
            showImageUploadBtn: K = !1,
            contentClassName: q = "",
            features: z = [],
            featureStates: W = [],
            checkMenuItem: G,
            uncheckMenuItem: Q,
            uploadFileDisable: X,
            rightBottomMenuItems: J,
            fileEnable: $
          } = cc11001100_hook("", e, "var-init"),
          {
            isPicSolve: ee
          } = cc11001100_hook("", (0, l.useConverMenuContext)(), "var-init"),
          et = cc11001100_hook("et", (0, f.useRef)(null), "var-init");
        (0, f.useImperativeHandle)(t, () => ({
          focus: cc11001100_hook("focus", () => {
            let e = cc11001100_hook("e", et.current, "var-init");
            e && e.focus();
          }, "object-key-init")
        }));
        let en = cc11001100_hook("en", (0, f.useMemo)(() => ee && (E || !$), [ee, $, E]), "var-init");
        return (0, a.jsxs)("div", {
          className: cc11001100_hook("className", "\n      ".concat(P().container_wrapper, "\n      ").concat(i || Array.isArray(Z) && Z.length > 0 ? P().active : "", "\n      ").concat(o, "\n    "), "object-key-init"),
          children: cc11001100_hook("children", [Y, (0, a.jsx)("div", {
            className: cc11001100_hook("className", P().input_container, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsxs)("div", {
              className: cc11001100_hook("className", "".concat(P().input_content, " ").concat(q), "object-key-init"),
              children: cc11001100_hook("children", [Array.isArray(Z) && Z.length > 0 ? O < 1 ? (0, a.jsx)(a.Fragment, {
                children: cc11001100_hook("children", !ee && (0, a.jsx)("div", {
                  className: cc11001100_hook("className", P().file_list, "object-key-init"),
                  children: cc11001100_hook("children", Z.map(e => (0, a.jsx)(N.Z, {
                    ...e,
                    downloadUrl: "",
                    hasClose: !0,
                    deleteFile: F,
                    reUpload: U
                  }, "".concat(e.name, "_").concat(e.lastModified, "_").concat(e.uuid))), "object-key-init")
                }), "object-key-init")
              }) : (0, a.jsx)(I.Z, {
                files: cc11001100_hook("files", Z, "object-key-init"),
                clearFiles: cc11001100_hook("clearFiles", D, "object-key-init"),
                hasClose: cc11001100_hook("hasClose", !0, "object-key-init")
              }) : null, (0, a.jsxs)("div", {
                className: cc11001100_hook("className", z.length > 0 ? P().input_main : P().no_left, "object-key-init"),
                children: cc11001100_hook("children", [z.length > 0 ? (0, a.jsx)("div", {
                  className: cc11001100_hook("className", P().left_tools, "object-key-init"),
                  children: cc11001100_hook("children", (0, a.jsx)(M, {
                    features: cc11001100_hook("features", z, "object-key-init"),
                    fStates: cc11001100_hook("fStates", W, "object-key-init"),
                    checkMenuItem: cc11001100_hook("checkMenuItem", G, "object-key-init"),
                    uncheckMenuItem: cc11001100_hook("uncheckMenuItem", Q, "object-key-init")
                  }), "object-key-init")
                }) : null, (0, a.jsx)("div", {
                  className: cc11001100_hook("className", P().input_box, "object-key-init"),
                  children: cc11001100_hook("children", (0, a.jsx)(b.Z, {
                    ref: cc11001100_hook("ref", et, "object-key-init"),
                    inputEnable: cc11001100_hook("inputEnable", _, "object-key-init"),
                    value: cc11001100_hook("value", d, "object-key-init"),
                    onKeyUp: cc11001100_hook("onKeyUp", u, "object-key-init"),
                    onKeyDown: cc11001100_hook("onKeyDown", p, "object-key-init"),
                    onCompositionStart: cc11001100_hook("onCompositionStart", m, "object-key-init"),
                    onCompositionEnd: cc11001100_hook("onCompositionEnd", v, "object-key-init"),
                    onInput: cc11001100_hook("onInput", h, "object-key-init"),
                    sendMsg: cc11001100_hook("sendMsg", y, "object-key-init"),
                    handleFocus: cc11001100_hook("handleFocus", k, "object-key-init"),
                    handleBlur: cc11001100_hook("handleBlur", C, "object-key-init"),
                    lineHeight: cc11001100_hook("lineHeight", 22, "object-key-init"),
                    placeholder: cc11001100_hook("placeholder", c, "object-key-init"),
                    onClick: cc11001100_hook("onClick", w, "object-key-init"),
                    style: {
                      maxHeight: cc11001100_hook("maxHeight", 200, "object-key-init"),
                      background: cc11001100_hook("background", "transparent", "object-key-init")
                    },
                    containerStyle: {
                      border: cc11001100_hook("border", "0", "object-key-init"),
                      boxShadow: cc11001100_hook("boxShadow", "none", "object-key-init"),
                      paddingLeft: cc11001100_hook("paddingLeft", 0, "object-key-init"),
                      paddingRight: cc11001100_hook("paddingRight", 10, "object-key-init"),
                      background: cc11001100_hook("background", "transparent", "object-key-init")
                    },
                    inputClassName: cc11001100_hook("inputClassName", "".concat(P().input_textarea, " ").concat(z.length > 0 ? P().input_padding_bottom : ""), "object-key-init")
                  }), "object-key-init")
                }), (0, a.jsxs)("div", {
                  className: cc11001100_hook("className", P().right_tools, "object-key-init"),
                  children: cc11001100_hook("children", [null === (n = cc11001100_hook("n", J || [], "assign")) || void 0 === n ? void 0 : n.map((e, t) => (0, a.jsx)("div", {
                    className: cc11001100_hook("className", P().right_tools_item, "object-key-init"),
                    children: cc11001100_hook("children", (0, a.jsx)(j, {
                      type: cc11001100_hook("type", null == e ? void 0 : e.capability, "object-key-init"),
                      files: cc11001100_hook("files", Z, "object-key-init"),
                      uploadFile: cc11001100_hook("uploadFile", A, "object-key-init"),
                      page: cc11001100_hook("page", L, "object-key-init"),
                      preCheck: cc11001100_hook("preCheck", H, "object-key-init"),
                      disabled: cc11001100_hook("disabled", X || en, "object-key-init"),
                      sendImmediately: cc11001100_hook("sendImmediately", ee, "object-key-init"),
                      focus: cc11001100_hook("focus", i, "object-key-init")
                    }), "object-key-init")
                  }, "".concat(null == e ? void 0 : e.key, "-").concat(null == e ? void 0 : e.capability))), E ? (0, a.jsx)(g.Z, {
                    title: cc11001100_hook("title", "停止输入", "object-key-init"),
                    children: cc11001100_hook("children", (0, a.jsx)("div", {
                      className: cc11001100_hook("className", P().icon_container, "object-key-init"),
                      onClick: cc11001100_hook("onClick", T, "object-key-init"),
                      children: cc11001100_hook("children", (0, a.jsx)(x.Z, {
                        className: cc11001100_hook("className", P().stop_btn, "object-key-init"),
                        name: cc11001100_hook("name", "send-normal-stop", "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  }) : (0, a.jsx)(g.Z, {
                    title: cc11001100_hook("title", B, "object-key-init"),
                    children: cc11001100_hook("children", (0, a.jsx)("div", {
                      className: cc11001100_hook("className", S()(P().icon_container, s ? "" : P().disabled), "object-key-init"),
                      onClick: cc11001100_hook("onClick", y, "object-key-init"),
                      children: cc11001100_hook("children", (0, a.jsx)(x.Z, {
                        className: cc11001100_hook("className", s ? "".concat(P().send_btn_act, " custom_button") : P().send_btn, "object-key-init"),
                        name: cc11001100_hook("name", s ? "send-normal-active" : "send-normal-stroke", "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  })], "object-key-init")
                })], "object-key-init")
              })], "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        });
      }), "var-init"),
      U = cc11001100_hook("U", n(93086), "var-init"),
      Z = cc11001100_hook("Z", n(26163), "var-init"),
      B = cc11001100_hook("B", n.n(Z), "var-init");
    function O(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          menu: t,
          tipMsg: n,
          disabled: o,
          onClick: s
        } = cc11001100_hook("", e, "var-init"),
        i = cc11001100_hook("i", (0, f.useRef)(null), "var-init");
      return (0, a.jsx)(g.Z, {
        title: cc11001100_hook("title", n, "object-key-init"),
        children: cc11001100_hook("children", (0, a.jsxs)("div", {
          ref: cc11001100_hook("ref", i, "object-key-init"),
          className: cc11001100_hook("className", "".concat(B().menu_wrapper, " ").concat(o ? B().disabled : ""), "object-key-init"),
          onClick: cc11001100_hook("onClick", () => {
            if (o && i.current) {
              i.current.focus();
              return;
            }
            s();
          }, "object-key-init"),
          tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
          children: cc11001100_hook("children", [(0, a.jsx)("div", {
            className: cc11001100_hook("className", "".concat(B().menu_icon), "object-key-init"),
            style: {
              backgroundImage: cc11001100_hook("backgroundImage", "url(".concat(t.icon, ")"), "object-key-init")
            }
          }), (0, a.jsx)("div", {
            className: cc11001100_hook("className", B().menu_text, "object-key-init"),
            children: cc11001100_hook("children", t.title, "object-key-init")
          })], "object-key-init")
        }), "object-key-init")
      });
    }
    let L = cc11001100_hook("L", [{
      key: cc11001100_hook("key", "project", "object-key-init"),
      title: cc11001100_hook("title", "智能设计", "object-key-init"),
      icon: cc11001100_hook("icon", "https://wy-static.wenxiaobai.com/tuwen_image/5775c275082d1e78b3bffd10b2e522b6336d13b15e60034eb05dff0360885a23", "object-key-init"),
      label: cc11001100_hook("label", "敬请期待", "object-key-init")
    }, {
      key: cc11001100_hook("key", "video", "object-key-init"),
      title: cc11001100_hook("title", "视频生成", "object-key-init"),
      icon: cc11001100_hook("icon", "https://wy-static.wenxiaobai.com/tuwen_image/930cda0491dffa6f19a37109ed7e3e2c83a7caf218513c9b4c2e2b934cd83e96", "object-key-init"),
      label: cc11001100_hook("label", "敬请期待", "object-key-init")
    }], "var-init");
    function H() {
      let e = cc11001100_hook("e", (0, h.usePathname)(), "var-init");
      return (0, a.jsx)(a.Fragment, {
        children: cc11001100_hook("children", "/chat/200006" === e || "/chat/tourist" === e ? L.map(e => (0, a.jsx)(O, {
          menu: cc11001100_hook("menu", e, "object-key-init"),
          tipMsg: cc11001100_hook("tipMsg", "功能正在开发中，敬请期待", "object-key-init"),
          disabled: cc11001100_hook("disabled", !0, "object-key-init"),
          onClick: cc11001100_hook("onClick", () => {}, "object-key-init")
        }, "".concat(e.key))) : null, "object-key-init")
      });
    }
    let Y = cc11001100_hook("Y", ["imageGenerate", "ppt"], "var-init");
    function V(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          menuItems: t,
          uploadFileDisable: n,
          clearFiles: o,
          onInputValue: s,
          onInputFocus: i
        } = cc11001100_hook("", e, "var-init"),
        {
          needLogin: _,
          needRealLogin: d,
          setUserLoginModalShow: u
        } = cc11001100_hook("", (0, r.useGlobalExecuteState)(), "var-init"),
        {
          mainConverType: p,
          selectMainMenu: m
        } = cc11001100_hook("", (0, l.useConverMenuContext)(), "var-init"),
        {
          track: v
        } = cc11001100_hook("", (0, c.useTrack)(), "var-init"),
        h = cc11001100_hook("h", (0, f.useCallback)(async e => {
          if (n && (0, U.YP)(e)) return;
          if (v("chat_tools_".concat(e.key, "_click"), {
            bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init")
          }), d && Y.includes(e.key) || _) return u(!0);
          null == m || m(e);
          let {
            defaultQuery: t
          } = cc11001100_hook("", e, "var-init");
          s(t || ""), i(), o();
        }, [_, u, n, m, o, s, i, v]), "var-init"),
        b = cc11001100_hook("b", e => n && (0, U.YP)(e), "var-init");
      return Array.isArray(t) && t.length > 0 ? (0, a.jsxs)("div", {
        className: cc11001100_hook("className", "".concat(B().conversation_main_menu, " ").concat(p ? B().hidden : ""), "object-key-init"),
        children: cc11001100_hook("children", [t.map(e => (0, a.jsx)(O, {
          menu: cc11001100_hook("menu", e, "object-key-init"),
          tipMsg: cc11001100_hook("tipMsg", b(e) ? "联网搜索不支持上传图片" : "", "object-key-init"),
          disabled: cc11001100_hook("disabled", b(e), "object-key-init"),
          onClick: cc11001100_hook("onClick", () => h(e), "object-key-init")
        }, "".concat(e.icon, "_").concat(e.title))), (0, a.jsx)(H, {})], "object-key-init")
      }) : null;
    }
    var K = cc11001100_hook("K", n(39725), "var-init"),
      q = cc11001100_hook("q", n(65945), "var-init"),
      z = cc11001100_hook("z", n.n(q), "var-init"),
      W = cc11001100_hook("W", n(337), "var-init");
    function G(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          className: t = "",
          inputValue: n,
          subMenuItems: o,
          files: s,
          clearFiles: r,
          onInputValue: c,
          onInputFocus: _,
          isNewConversation: d,
          forceLogin: u
        } = cc11001100_hook("", e, "var-init"),
        {
          currentConversationId: p,
          nextConversationId: m
        } = cc11001100_hook("", (0, i.useConver)() || {}, "var-init"),
        {
          mainConverItem: v,
          subConverType: h,
          isUploadFileConverType: b,
          isUploadImageConverType: g,
          clearConverMenu: x,
          selectSubMenu: k
        } = cc11001100_hook("", (0, l.useConverMenuContext)(), "var-init"),
        C = cc11001100_hook("C", (0, f.useCallback)(async () => {
          let e = cc11001100_hook("e", await u(!1), "var-init");
          return !!e;
        }, [u]), "var-init"),
        y = cc11001100_hook("y", (0, f.useMemo)(() => (null == v ? void 0 : v.title) || "", [v]), "var-init"),
        j = cc11001100_hook("j", (0, f.useCallback)(() => {
          x(), r(), c(""), _();
        }, [x, r, c, _]), "var-init"),
        N = cc11001100_hook("N", e => {
          k(e);
        }, "var-init"),
        I = cc11001100_hook("I", (e, t) => {}, "var-init");
      return (0, f.useEffect)(() => {
        d || (c(""), _());
      }, []), (0, a.jsxs)("div", {
        className: cc11001100_hook("className", "".concat(z().conversation_sub_menu, " ").concat(t), "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsxs)("div", {
          className: cc11001100_hook("className", z().title_wrapper, "object-key-init"),
          children: cc11001100_hook("children", [(0, a.jsx)("div", {
            className: cc11001100_hook("className", z().title, "object-key-init"),
            children: cc11001100_hook("children", y, "object-key-init")
          }), (0, a.jsx)("div", {
            className: cc11001100_hook("className", z().close_icon, "object-key-init"),
            onClick: cc11001100_hook("onClick", () => {
              j();
            }, "object-key-init")
          }), (0, a.jsx)("div", {})], "object-key-init")
        }), (b || g) && 0 === s.length && (0, a.jsx)(K.Z, {
          disabled: cc11001100_hook("disabled", !0, "object-key-init"),
          visible: cc11001100_hook("visible", !0, "object-key-init"),
          conversationId: cc11001100_hook("conversationId", p, "object-key-init"),
          nextConversationId: cc11001100_hook("nextConversationId", m, "object-key-init"),
          preCheck: cc11001100_hook("preCheck", C, "object-key-init"),
          uploadType: cc11001100_hook("uploadType", g ? "image" : "file", "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)("div", {
            className: cc11001100_hook("className", z().drop_upload_zone, "object-key-init")
          }), "object-key-init")
        }), (0, a.jsx)("div", {
          className: cc11001100_hook("className", z().sub_menu_content, "object-key-init"),
          children: cc11001100_hook("children", o.length > 0 && (0, a.jsx)("div", {
            className: cc11001100_hook("className", z().sub_menu_list, "object-key-init"),
            children: cc11001100_hook("children", o.map((e, t) => (0, a.jsx)(W.vE, {
              className: cc11001100_hook("className", z().sub_menu_item, "object-key-init"),
              idx: cc11001100_hook("idx", t, "object-key-init"),
              inputValue: cc11001100_hook("inputValue", n, "object-key-init"),
              menu: cc11001100_hook("menu", e, "object-key-init"),
              activeKey: cc11001100_hook("activeKey", h, "object-key-init"),
              onInputValue: cc11001100_hook("onInputValue", c, "object-key-init"),
              onInputFocus: cc11001100_hook("onInputFocus", _, "object-key-init"),
              onClick: cc11001100_hook("onClick", N, "object-key-init"),
              onSelect: cc11001100_hook("onSelect", I, "object-key-init")
            }, e.key)), "object-key-init")
          }), "object-key-init")
        })], "object-key-init")
      });
    }
    var Q = cc11001100_hook("Q", n(69601), "var-init"),
      X = cc11001100_hook("X", n.n(Q), "var-init"),
      J = cc11001100_hook("J", n(35333), "var-init"),
      $ = cc11001100_hook("$", n.n(J), "var-init"),
      ee = cc11001100_hook("ee", e => (0, a.jsx)(a.Fragment, {
        children: cc11001100_hook("children", (0, a.jsx)("div", {
          className: cc11001100_hook("className", $().wrapper, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsxs)("div", {
            className: cc11001100_hook("className", S()($()["button-inner"], "custom-btn"), "object-key-init"),
            ...e,
            children: [(0, a.jsx)(x.Z, {
              style: {
                marginRight: cc11001100_hook("marginRight", "8px", "object-key-init")
              },
              size: cc11001100_hook("size", 11, "object-key-init"),
              name: cc11001100_hook("name", "Vector", "object-key-init")
            }), "开启新对话"]
          }), "object-key-init")
        }), "object-key-init")
      }), "var-init");
    function et(e) {
      cc11001100_hook("e", e, "function-parameter");
      return (Array.isArray(e) ? e.length : 0) === 1 ? "整理这个文件的核心内容" : "整理这些文件的核心内容";
    }
    var en = cc11001100_hook("en", (0, f.memo)((0, f.forwardRef)((e, t) => {
      var n;
      let {
          appConfig: m,
          botId: b,
          botInfo: g,
          conversationId: x,
          newConv: k,
          isNewConversation: C,
          forceLogin: y,
          showBottomMsg: j
        } = cc11001100_hook("", e, "var-init"),
        {
          needLogin: N,
          needRealLogin: I,
          setUserLoginModalShow: w
        } = cc11001100_hook("", (0, r.useGlobalExecuteState)() || {}, "var-init"),
        {
          needForceLogin: S
        } = cc11001100_hook("", (0, d._7)({
          botInfo: cc11001100_hook("botInfo", g, "object-key-init"),
          info: cc11001100_hook("info", () => {}, "object-key-init")
        }), "var-init"),
        T = cc11001100_hook("T", (0, f.useMemo)(() => (0, p.zL)({
          botId: cc11001100_hook("botId", b, "object-key-init"),
          appConfig: cc11001100_hook("appConfig", m, "object-key-init")
        }), [b, m]), "var-init"),
        [E, A] = cc11001100_hook("", (0, f.useState)(""), "var-init"),
        [M, F] = cc11001100_hook("", (0, f.useState)(!1), "var-init"),
        P = cc11001100_hook("P", (0, f.useRef)(!1), "var-init"),
        R = cc11001100_hook("R", (0, f.useRef)(null), "var-init"),
        {
          track: U
        } = cc11001100_hook("", (0, c.useTrack)(), "var-init"),
        Z = cc11001100_hook("Z", (0, f.useRef)(null), "var-init"),
        {
          createNewConv: B,
          conversations: O,
          changeChatUrl: L,
          nextConversationId: H,
          setCurrentBotId: Y,
          createMediaLoadingAction: K,
          clearMediaLoadingAction: q,
          sendLock: z,
          sendLockFalse: W,
          sendLockTrue: Q,
          newConverInputValue: J,
          setNewConverInputValue: $
        } = cc11001100_hook("", (0, i.useConver)() || {}, "var-init"),
        {
          mainConverType: en,
          mainConverItem: ea,
          subConverType: eo,
          subConverItem: es,
          isUploadFileConverType: ei,
          isUploadImageConverType: el,
          subMenuItems: er,
          bottomMenuItems: ec,
          checkedMenuItems: e_,
          checkMenuItem: ed,
          uncheckMenuItem: eu,
          rightBottomMenuItems: ep,
          topMenuItems: em,
          hasFileMenuItem: ev,
          hasImageMenuItem: eh,
          getChatCustomParams: ef,
          isPicSolve: eb
        } = cc11001100_hook("", (0, l.useConverMenuContext)(), "var-init"),
        eg = cc11001100_hook("eg", (0, f.useMemo)(() => {
          var e, t, n, a;
          if (null == ea ? void 0 : ea.defaultPlaceholder) return ea.defaultPlaceholder;
          if (null == g ? void 0 : null === (e = cc11001100_hook("e", g.operateExtra, "assign")) || void 0 === e ? void 0 : e.placeholder) {
            let e = cc11001100_hook("e", null == g ? void 0 : null === (t = cc11001100_hook("t", g.operateExtra, "assign")) || void 0 === t ? void 0 : t.placeholder.startTime, "var-init"),
              o = cc11001100_hook("o", null == g ? void 0 : null === (n = cc11001100_hook("n", g.operateExtra, "assign")) || void 0 === n ? void 0 : n.placeholder.endTime, "var-init");
            if (Date.now() > e && Date.now() < o) return null == g ? void 0 : null === (a = cc11001100_hook("a", g.operateExtra, "assign")) || void 0 === a ? void 0 : a.placeholder.text;
          }
          return "有问题问小白...";
        }, [g, ea]), "var-init"),
        {
          uploadFiles: ex,
          newFilesCtxMapRef: ek,
          fileInputCounts: eC,
          inputConvFiles: ey,
          deleteConvFiles: ej,
          clearConvFiles: eN,
          reParseFile: eI,
          reduceFileInputCounts: ew,
          clearAllUploadFiles: eS
        } = cc11001100_hook("", (0, _.useUploadFile)() || {}, "var-init"),
        eT = cc11001100_hook("eT", (0, f.useMemo)(() => {
          var e, t, n;
          let a = cc11001100_hook("a", null == O ? void 0 : null === (e = cc11001100_hook("e", O[x], "assign")) || void 0 === e ? void 0 : e.turnList, "var-init"),
            o = cc11001100_hook("o", (null === (n = cc11001100_hook("n", a || [], "assign")) || void 0 === n ? void 0 : null === (t = cc11001100_hook("t", n.filter(e => (null == e ? void 0 : e.turnId) !== "media-loading-id"), "assign")) || void 0 === t ? void 0 : t.length) <= 0, "var-init");
          return o;
        }, [O, x]), "var-init"),
        eE = cc11001100_hook("eE", (0, h.useRouter)(), "var-init"),
        eA = cc11001100_hook("eA", (0, f.useCallback)(e => {
          var t;
          null === (t = cc11001100_hook("t", Z.current, "assign")) || void 0 === t || t.info(e);
        }, [Z]), "var-init"),
        eM = cc11001100_hook("eM", (0, f.useMemo)(() => O ? O[x] : {}, [O, x]), "var-init"),
        eF = cc11001100_hook("eF", (0, f.useMemo)(() => {
          if (eM) {
            let {
              turnList: e
            } = cc11001100_hook("", eM, "var-init");
            if (Array.isArray(e)) {
              let t = cc11001100_hook("t", e[0], "var-init");
              if (t) {
                let {
                  turnId: e,
                  sentenceList: n
                } = cc11001100_hook("", t, "var-init");
                if (Array.isArray(n)) {
                  for (let t = cc11001100_hook("t", n.length - 1, "var-init"); t > -1; --t) if (n[t] && 1 !== n[t].direction) {
                    let a = cc11001100_hook("a", n[t], "var-init");
                    return {
                      turnId: cc11001100_hook("turnId", e, "object-key-init"),
                      answer: {
                        ...a,
                        voluntaryStop: !0
                      }
                    };
                  }
                }
              }
            }
          }
          return null;
        }, [eM]), "var-init"),
        {
          inputEnable: eP,
          stopBtnShow: eR
        } = cc11001100_hook("", (0, f.useMemo)(() => eM && eM.status && "close" !== eM.status && "error" !== eM.status && "needLogin" !== eM.status && "needBound" !== eM.status && "timeout" !== eM.status ? {
          inputEnable: cc11001100_hook("inputEnable", !0, "object-key-init"),
          stopBtnShow: cc11001100_hook("stopBtnShow", !0, "object-key-init")
        } : {
          inputEnable: cc11001100_hook("inputEnable", !0, "object-key-init"),
          stopBtnShow: cc11001100_hook("stopBtnShow", !1, "object-key-init")
        }, [eM]), "var-init"),
        eD = cc11001100_hook("eD", (0, f.useMemo)(() => ex && ex[x] ? ex[x] : [], [ex, x]), "var-init"),
        [eU, eZ] = cc11001100_hook("", (0, f.useState)(""), "var-init");
      (0, f.useEffect)(() => {
        let e = cc11001100_hook("e", eD[0], "var-init");
        if ((null == e ? void 0 : e.status) === 1 && e.isPicSolve && (null == e ? void 0 : e.stage) === 1 && eW().then(e => {
          e && (_.uploader.getParserParams(ea), K(null == e ? void 0 : e.convId, J || E), eZ(E));
        }), (null == e ? void 0 : e.status) === 2 && (null == e ? void 0 : e.isPicSolve)) {
          let e = cc11001100_hook("e", "", "var-init");
          E || (e = cc11001100_hook("e", et(eD), "assign"));
          let t = cc11001100_hook("t", [], "var-init");
          if (T) {
            let e = cc11001100_hook("e", E.match(/https?:\/\/[A-Za-z0-9./?=&%#*_-]+/g), "var-init");
            Array.isArray(e) && e.forEach(e => {
              t.push({
                url: cc11001100_hook("url", e, "object-key-init")
              });
            });
          }
          ez({
            rewriteQuery: cc11001100_hook("rewriteQuery", e, "object-key-init"),
            convId: cc11001100_hook("convId", x, "object-key-init"),
            urlInfoList: cc11001100_hook("urlInfoList", t, "object-key-init"),
            inputValue: cc11001100_hook("inputValue", J || eU, "object-key-init")
          }), q(x, E), eS(), $(""), Q();
        }
        (null == e ? void 0 : e.status) === -1 && (null == e ? void 0 : e.isPicSolve) && (Q(), q(x, E), eS(), $(""), eA("图片解析失败，可能存在敏感信息，请更换图片并截取一道题目内容之后重新上传")), e || (q(x, E), eS(), $(""));
      }, [null === (n = cc11001100_hook("n", eD[0], "assign")) || void 0 === n ? void 0 : n.status]);
      let eB = cc11001100_hook("eB", (0, f.useMemo)(() => eC && eC[x] ? eC[x] : 0, [eC, x]), "var-init"),
        eO = cc11001100_hook("eO", (0, f.useMemo)(() => ec.map(e => {
          let t = cc11001100_hook("t", Array.isArray(e.exclusiveCapabilities) && (eD.length > 0 || ei || el) && e.exclusiveCapabilities.some(e => ["file", "camera", "image"].includes(e)), "var-init");
          return {
            ...e,
            btnDisable: t
          };
        }), [eD, ec, ei, el]), "var-init"),
        eL = cc11001100_hook("eL", (0, f.useMemo)(() => {
          let e = cc11001100_hook("e", v()(e_, ec, "key"), "var-init");
          return (e || []).some(e => Array.isArray(e.exclusiveCapabilities) && e.exclusiveCapabilities.includes("file"));
        }, [e_, ec]), "var-init"),
        {
          sendEnable: eH,
          sendBtnMsg: eY,
          fileEnable: eV
        } = cc11001100_hook("", (0, f.useMemo)(() => {
          let e = cc11001100_hook("e", E.trim().length > 0, "var-init"),
            t = cc11001100_hook("t", "请输入您的问题", "var-init"),
            n = cc11001100_hook("n", !0, "var-init"),
            a = cc11001100_hook("a", e, "var-init");
          for (let e = cc11001100_hook("e", 0, "var-init"); e < eD.length; ++e) {
            let o = cc11001100_hook("o", eD[e], "var-init");
            if (o && -1 === o.status) {
              a = cc11001100_hook("a", !1, "assign"), n = cc11001100_hook("n", !1, "assign"), t = cc11001100_hook("t", "请删除异常文件再发送", "assign");
              break;
            }
            1 === o.stage && 1 === o.status ? (a = cc11001100_hook("a", !1, "assign"), n = cc11001100_hook("n", !1, "assign"), t = cc11001100_hook("t", "上传中", "assign")) : 2 === o.stage && 1 === o.status && (a = cc11001100_hook("a", !1, "assign"), n = cc11001100_hook("n", !1, "assign"), t = cc11001100_hook("t", "解析中", "assign"));
          }
          return a && (a = cc11001100_hook("a", eD.length > 0 && eB < 1 ? a : e, "assign")), {
            sendEnable: cc11001100_hook("sendEnable", a, "object-key-init"),
            sendBtnMsg: cc11001100_hook("sendBtnMsg", t, "object-key-init"),
            fileEnable: cc11001100_hook("fileEnable", n, "object-key-init")
          };
        }, [E, eD, eB]), "var-init"),
        eK = cc11001100_hook("eK", (0, f.useCallback)(async () => !N && (!I || !S) || (null == w || w(!0), !1), [N, I, S, w]), "var-init"),
        eq = cc11001100_hook("eq", (0, f.useCallback)(e => {
          let t = cc11001100_hook("t", e.target.value.length > 5e5 ? e.target.value.substring(0, 5e5) : e.target.value, "var-init");
          A(t), k && $(t);
        }, [A]), "var-init"),
        ez = cc11001100_hook("ez", e => {
          let {
              rewriteQuery: t,
              convId: n,
              urlInfoList: a,
              inputValue: o
            } = cc11001100_hook("", e, "var-init"),
            i = cc11001100_hook("i", (0, u.F)(), "var-init"),
            l = cc11001100_hook("l", ef(o), "var-init");
          i.sendMsgToBot({
            botId: cc11001100_hook("botId", b, "object-key-init"),
            botAlias: cc11001100_hook("botAlias", (null == g ? void 0 : g.alias) || "", "object-key-init"),
            contents: cc11001100_hook("contents", o, "object-key-init"),
            rewriteQuery: cc11001100_hook("rewriteQuery", t, "object-key-init"),
            isNewConversation: cc11001100_hook("isNewConversation", C || eT, "object-key-init"),
            strategy: {
              isRetry: cc11001100_hook("isRetry", !1, "object-key-init"),
              breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
            },
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", n, "object-key-init"),
            inputWay: cc11001100_hook("inputWay", s.zY.INPUT_WAY.PROACTIVE, "object-key-init"),
            mediaInfos: cc11001100_hook("mediaInfos", (null == ek ? void 0 : ek.current[n]) === !1 ? [] : eD, "object-key-init"),
            turnIndex: cc11001100_hook("turnIndex", eB || 0, "object-key-init"),
            attachmentInfo: {
              url: {
                infoList: cc11001100_hook("infoList", a, "object-key-init")
              }
            },
            customAttrs: {
              eventName: cc11001100_hook("eventName", "chat_input_send_btn_click", "object-key-init"),
              attrs: {
                page: cc11001100_hook("page", s.fK.CHAT.key, "object-key-init"),
                area: cc11001100_hook("area", s.fK.CHAT.area.INPUT.key, "object-key-init"),
                element: cc11001100_hook("element", s.fK.CHAT.area.INPUT.element.SEND_BTN, "object-key-init"),
                bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init"),
                input_way: cc11001100_hook("input_way", s.zY.INPUT_WAY.PROACTIVE, "object-key-init"),
                refer_page: cc11001100_hook("refer_page", "history", "object-key-init"),
                chat_main_type: cc11001100_hook("chat_main_type", ea.key ? "chat_tools_".concat(ea.key) : "", "object-key-init"),
                chat_sub_type: cc11001100_hook("chat_sub_type", es.key ? "chat_tools_sub_".concat(es.key) : "", "object-key-init")
              },
              input_way: cc11001100_hook("input_way", s.zY.INPUT_WAY.PROACTIVE, "object-key-init")
            },
            customParams: cc11001100_hook("customParams", l, "object-key-init")
          }), ek.current[n] = cc11001100_hook("ek.current[n]", !1, "assign"), A(""), $(""), ew(n);
        }, "var-init"),
        eW = cc11001100_hook("eW", (0, f.useCallback)(async () => {
          if ((eR || !eH) && !eb) return !1;
          if (y) {
            let e = cc11001100_hook("e", await y(), "var-init");
            if (!(null == e ? void 0 : e.token)) return !1;
          }
          let e = cc11001100_hook("e", x, "var-init");
          k && (e = cc11001100_hook("e", await B({
            botId: cc11001100_hook("botId", b, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", e, "object-key-init")
          }), "assign")), k && L(e);
          let t = cc11001100_hook("t", "", "var-init");
          E || (t = cc11001100_hook("t", et(eD), "assign"));
          let n = cc11001100_hook("n", [], "var-init");
          if (T) {
            let e = cc11001100_hook("e", E.match(/https?:\/\/[A-Za-z0-9./?=&%#*_-]+/g), "var-init");
            Array.isArray(e) && e.forEach(e => {
              n.push({
                url: cc11001100_hook("url", e, "object-key-init")
              });
            });
          }
          return {
            convId: cc11001100_hook("convId", e, "object-key-init"),
            rewriteQuery: cc11001100_hook("rewriteQuery", t, "object-key-init"),
            urlInfoList: cc11001100_hook("urlInfoList", n, "object-key-init")
          };
        }, [E, eH, b, null == g ? void 0 : g.alias, B, x, eR, k, eD, ek, eB, L, ew, y, C, ea, es, T, ef, ey, ex, x, J]), "var-init"),
        eG = cc11001100_hook("eG", (0, f.useCallback)(async () => {
          let e = cc11001100_hook("e", await eW(), "var-init");
          e && ez({
            ...e,
            inputValue: E
          });
        }, [eW, ez, E]), "var-init"),
        eQ = cc11001100_hook("eQ", (0, f.useCallback)(() => {
          eF && eF.status, u.Z.stopSse({
            botId: cc11001100_hook("botId", b, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", x, "object-key-init"),
            uuid: cc11001100_hook("uuid", x, "object-key-init"),
            defaultData: {
              conversationId: cc11001100_hook("conversationId", x, "object-key-init"),
              ...eF
            },
            callback: cc11001100_hook("callback", e => {
              var t, n, a;
              let {
                botId: o,
                conver: i,
                strategy: l,
                conversationId: r,
                uuid: c
              } = cc11001100_hook("", e, "var-init");
              U("chat_input_pause_btn_click", {
                page: cc11001100_hook("page", s.fK.CHAT.key, "object-key-init"),
                area: cc11001100_hook("area", s.fK.CHAT.area.INPUT.key, "object-key-init"),
                element: cc11001100_hook("element", s.fK.CHAT.area.INPUT.element.PAUSE, "object-key-init"),
                bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init"),
                conversation_id: cc11001100_hook("conversation_id", i.conversationId, "object-key-init"),
                turn_id: cc11001100_hook("turn_id", i.turnId, "object-key-init"),
                q_sentence_id: cc11001100_hook("q_sentence_id", null === (t = cc11001100_hook("t", i.question, "assign")) || void 0 === t ? void 0 : t.sentenceId, "object-key-init"),
                a_sentence_id: cc11001100_hook("a_sentence_id", null === (n = cc11001100_hook("n", i.answer, "assign")) || void 0 === n ? void 0 : n.sentenceId, "object-key-init"),
                content: cc11001100_hook("content", null === (a = cc11001100_hook("a", i.question, "assign")) || void 0 === a ? void 0 : a.contents, "object-key-init"),
                is_new_start: cc11001100_hook("is_new_start", 0, "object-key-init"),
                refer_page: cc11001100_hook("refer_page", "history", "object-key-init")
              });
            }, "object-key-init")
          });
        }, [x, b, U, eF]), "var-init"),
        eX = cc11001100_hook("eX", (0, f.useCallback)(() => {
          F(!0), document.body.classList.add("fixed-body");
        }, [F]), "var-init"),
        eJ = cc11001100_hook("eJ", (0, f.useCallback)(() => {
          F(!1), document.body.classList.remove("fixed-body");
        }, [F]), "var-init"),
        e$ = cc11001100_hook("e$", (0, f.useCallback)(async e => await ey(x, e), [x, ey]), "var-init"),
        e0 = cc11001100_hook("e0", (0, f.useCallback)(e => {
          ej(x, e);
        }, [x, ej]), "var-init"),
        e1 = cc11001100_hook("e1", (0, f.useCallback)(() => {
          eN(x);
        }, [eN, x]), "var-init"),
        e4 = cc11001100_hook("e4", (0, f.useCallback)(async e => {
          1 === e.stage ? (e0(e), await e$([e])) : eI(x, e);
        }, [e0, e$, eI, x]), "var-init");
      (0, f.useImperativeHandle)(t, () => ({
        focus: cc11001100_hook("focus", () => {
          R.current && R.current.focus();
        }, "object-key-init")
      }));
      let e6 = cc11001100_hook("e6", e => {
          A(e), k && $(e);
        }, "var-init"),
        e7 = cc11001100_hook("e7", () => {
          F(!0), R.current && R.current.focus();
        }, "var-init");
      return (0, f.useEffect)(() => {
        e6(""), e7(), q(x, E);
      }, [x]), (0, a.jsxs)(a.Fragment, {
        children: cc11001100_hook("children", [(0, a.jsx)(o.Z, {
          ref: cc11001100_hook("ref", Z, "object-key-init")
        }), (0, a.jsxs)("div", {
          style: {
            position: cc11001100_hook("position", "relative", "object-key-init"),
            maxWidth: cc11001100_hook("maxWidth", 832, "object-key-init"),
            width: cc11001100_hook("width", "100%", "object-key-init"),
            margin: cc11001100_hook("margin", "10px auto 18px auto", "object-key-init")
          },
          children: cc11001100_hook("children", [!C && "200006" === b && (0, a.jsx)(ee, {
            onClick: cc11001100_hook("onClick", () => {
              eE.push("/chat/".concat(g.id)), L("");
            }, "object-key-init")
          }), (0, a.jsx)(V, {
            menuItems: cc11001100_hook("menuItems", em, "object-key-init"),
            uploadFileDisable: cc11001100_hook("uploadFileDisable", eL, "object-key-init"),
            clearFiles: cc11001100_hook("clearFiles", e1, "object-key-init"),
            onInputValue: cc11001100_hook("onInputValue", e6, "object-key-init"),
            onInputFocus: cc11001100_hook("onInputFocus", e7, "object-key-init"),
            forceLogin: cc11001100_hook("forceLogin", y, "object-key-init")
          }), (0, a.jsx)(D, {
            ref: cc11001100_hook("ref", R, "object-key-init"),
            placeholder: cc11001100_hook("placeholder", eg, "object-key-init"),
            showUploadBtn: cc11001100_hook("showUploadBtn", ev && !en, "object-key-init"),
            showImageUploadBtn: cc11001100_hook("showImageUploadBtn", eh && !en, "object-key-init"),
            contentClassName: cc11001100_hook("contentClassName", en ? X().cancel_top_radius : "", "object-key-init"),
            handleSendMsg: cc11001100_hook("handleSendMsg", eG, "object-key-init"),
            handleStopTurn: cc11001100_hook("handleStopTurn", eQ, "object-key-init"),
            sendBtnMsg: cc11001100_hook("sendBtnMsg", eY, "object-key-init"),
            focus: cc11001100_hook("focus", M, "object-key-init"),
            inputEnable: cc11001100_hook("inputEnable", eP, "object-key-init"),
            inputValue: cc11001100_hook("inputValue", E, "object-key-init"),
            stopBtnShow: cc11001100_hook("stopBtnShow", eR, "object-key-init"),
            handleKeyUp: cc11001100_hook("handleKeyUp", e => {}, "object-key-init"),
            handleKeyDown: cc11001100_hook("handleKeyDown", e => {
              13 !== e.keyCode || e.shiftKey || e.metaKey || P.current || (e.preventDefault(), A(E.trim()), eH && eG());
            }, "object-key-init"),
            handleCompositionStart: cc11001100_hook("handleCompositionStart", () => {
              P.current = cc11001100_hook("P.current", !0, "assign");
            }, "object-key-init"),
            handleCompositionEnd: cc11001100_hook("handleCompositionEnd", () => {
              P.current = cc11001100_hook("P.current", !1, "assign");
            }, "object-key-init"),
            handleInput: cc11001100_hook("handleInput", eq, "object-key-init"),
            handleFocus: cc11001100_hook("handleFocus", eX, "object-key-init"),
            handleBlur: cc11001100_hook("handleBlur", eJ, "object-key-init"),
            sendEnable: cc11001100_hook("sendEnable", eH, "object-key-init"),
            fileEnable: cc11001100_hook("fileEnable", eV, "object-key-init"),
            uploadFile: cc11001100_hook("uploadFile", e$, "object-key-init"),
            deleteFile: cc11001100_hook("deleteFile", e0, "object-key-init"),
            clearFiles: cc11001100_hook("clearFiles", e1, "object-key-init"),
            reUpload: cc11001100_hook("reUpload", e4, "object-key-init"),
            files: cc11001100_hook("files", eD, "object-key-init"),
            uploadFileDisable: cc11001100_hook("uploadFileDisable", eL, "object-key-init"),
            fileInputCounts: cc11001100_hook("fileInputCounts", eB, "object-key-init"),
            loadFilePreCheck: cc11001100_hook("loadFilePreCheck", eK, "object-key-init"),
            features: cc11001100_hook("features", eO, "object-key-init"),
            featureStates: cc11001100_hook("featureStates", e_, "object-key-init"),
            checkMenuItem: cc11001100_hook("checkMenuItem", ed, "object-key-init"),
            uncheckMenuItem: cc11001100_hook("uncheckMenuItem", eu, "object-key-init"),
            rightBottomMenuItems: cc11001100_hook("rightBottomMenuItems", ep, "object-key-init"),
            mainConverType: cc11001100_hook("mainConverType", en, "object-key-init"),
            extend: cc11001100_hook("extend", (0, a.jsx)(G, {
              className: cc11001100_hook("className", en ? "" : X().hidden, "object-key-init"),
              subMenuItems: cc11001100_hook("subMenuItems", er, "object-key-init"),
              files: cc11001100_hook("files", eD, "object-key-init"),
              inputValue: cc11001100_hook("inputValue", E, "object-key-init"),
              clearFiles: cc11001100_hook("clearFiles", e1, "object-key-init"),
              onInputValue: cc11001100_hook("onInputValue", e6, "object-key-init"),
              onInputFocus: cc11001100_hook("onInputFocus", e7, "object-key-init"),
              isNewConversation: cc11001100_hook("isNewConversation", C, "object-key-init"),
              forceLogin: cc11001100_hook("forceLogin", y, "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        })], "object-key-init")
      });
    })), "var-init");
  },
  77964: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      default: function () {
        return e$;
      }
    });
    var a,
      o,
      s,
      i,
      l = cc11001100_hook("l", n(57437), "var-init"),
      r = cc11001100_hook("r", n(90427), "var-init"),
      c = cc11001100_hook("c", n(20297), "var-init"),
      _ = cc11001100_hook("_", n(9301), "var-init"),
      d = cc11001100_hook("d", n(39725), "var-init"),
      u = cc11001100_hook("u", n(25159), "var-init"),
      p = cc11001100_hook("p", n(58644), "var-init"),
      m = cc11001100_hook("m", n(34577), "var-init"),
      v = cc11001100_hook("v", n(61040), "var-init"),
      h = cc11001100_hook("h", n(73168), "var-init");
    (a = cc11001100_hook("a", s || (s = cc11001100_hook("s", {}, "assign")), "assign"))[a.ON_LINE = cc11001100_hook("a.ON_LINE", 0, "assign")] = cc11001100_hook("(a = s || (s = {}))[a.ON_LINE = 0]", "ON_LINE", "assign"), a[a.OFF_LINE = cc11001100_hook("a.OFF_LINE", 1, "assign")] = cc11001100_hook("a[a.OFF_LINE = 1]", "OFF_LINE", "assign");
    var f = cc11001100_hook("f", n(60444), "var-init"),
      b = cc11001100_hook("b", n(67559), "var-init"),
      g = cc11001100_hook("g", n(24033), "var-init"),
      x = cc11001100_hook("x", n(2265), "var-init"),
      k = cc11001100_hook("k", n(57555), "var-init"),
      C = cc11001100_hook("C", n(98872), "var-init"),
      y = cc11001100_hook("y", n(54952), "var-init"),
      j = cc11001100_hook("j", n(98720), "var-init"),
      N = cc11001100_hook("N", () => (0, l.jsx)(j.Z, {
        indicator: cc11001100_hook("indicator", (0, l.jsx)(y.Z, {
          style: {
            fontSize: cc11001100_hook("fontSize", 24, "object-key-init")
          },
          spin: cc11001100_hook("spin", !0, "object-key-init")
        }), "object-key-init")
      }), "var-init");
    n(62067);
    var I = cc11001100_hook("I", n(61109), "var-init"),
      w = cc11001100_hook("w", n(30411), "var-init"),
      S = cc11001100_hook("S", n.n(w), "var-init"),
      T = cc11001100_hook("T", n(13987), "var-init"),
      E = cc11001100_hook("E", n(42645), "var-init"),
      A = cc11001100_hook("A", n(73298), "var-init"),
      M = cc11001100_hook("M", n.n(A), "var-init");
    let F = cc11001100_hook("F", () => {}, "var-init");
    var P = cc11001100_hook("P", e => {
        let {
          className: t,
          onClick: n,
          loading: a,
          enable: o
        } = cc11001100_hook("", e, "var-init");
        return (0, l.jsx)(E.Z, {
          title: cc11001100_hook("title", "分享该对话", "object-key-init"),
          placement: cc11001100_hook("placement", "left", "object-key-init"),
          children: cc11001100_hook("children", (0, l.jsxs)("div", {
            className: cc11001100_hook("className", "".concat(M().share_btn_container, " custom_button ").concat(o ? "" : M().disabled), "object-key-init"),
            onClick: cc11001100_hook("onClick", o ? n : F, "object-key-init"),
            children: cc11001100_hook("children", [(0, l.jsx)(T.Z, {
              className: cc11001100_hook("className", M().share_icon, "object-key-init"),
              name: cc11001100_hook("name", "share", "object-key-init")
            }), (0, l.jsx)("div", {
              className: cc11001100_hook("className", M().share_text, "object-key-init"),
              children: cc11001100_hook("children", "分享", "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        });
      }, "var-init"),
      R = cc11001100_hook("R", n(19606), "var-init"),
      D = cc11001100_hook("D", n(2390), "var-init"),
      U = cc11001100_hook("U", n.n(D), "var-init"),
      Z = cc11001100_hook("Z", n(69494), "var-init"),
      B = cc11001100_hook("B", n(36078), "var-init"),
      O = cc11001100_hook("O", n(85694), "var-init"),
      L = cc11001100_hook("L", n(1068), "var-init"),
      H = cc11001100_hook("H", n(92432), "var-init"),
      Y = cc11001100_hook("Y", n(72613), "var-init"),
      V = cc11001100_hook("V", n.n(Y), "var-init"),
      K = cc11001100_hook("K", n(42744), "var-init"),
      q = cc11001100_hook("q", n.n(K), "var-init"),
      z = cc11001100_hook("z", n(4194), "var-init"),
      W = cc11001100_hook("W", n.n(z), "var-init"),
      G = cc11001100_hook("G", e => {
        let {
          loading: t,
          disabled: n,
          children: a,
          onClick: o,
          className: s
        } = cc11001100_hook("", e, "var-init");
        return (0, l.jsx)(l.Fragment, {
          children: cc11001100_hook("children", (0, l.jsx)("button", {
            className: cc11001100_hook("className", q()(null === W() || void 0 === W() ? void 0 : W().button, t || n ? W().disabled : "", s), "object-key-init"),
            disabled: cc11001100_hook("disabled", t || n, "object-key-init"),
            onClick: cc11001100_hook("onClick", o, "object-key-init"),
            children: cc11001100_hook("children", t ? (0, l.jsx)("span", {
              className: cc11001100_hook("className", W().loader, "object-key-init")
            }) : a, "object-key-init")
          }), "object-key-init")
        });
      }, "var-init"),
      Q = cc11001100_hook("Q", n(25266), "var-init"),
      X = cc11001100_hook("X", n(91963), "var-init");
    let J = cc11001100_hook("J", e => ({
        id: cc11001100_hook("id", null == e ? void 0 : e.id, "object-key-init"),
        taskId: cc11001100_hook("taskId", null == e ? void 0 : e.taskId, "object-key-init"),
        thumbnail: cc11001100_hook("thumbnail", null == e ? void 0 : e.coverUrl, "object-key-init")
      }), "var-init"),
      $ = cc11001100_hook("$", (e, t) => {
        if (t) window.open(null == e ? void 0 : e.url);else {
          let t = cc11001100_hook("t", document.createElement("a"), "var-init");
          t.href = cc11001100_hook("t.href", null == e ? void 0 : e.url, "assign"), t.download = cc11001100_hook("t.download", null == e ? void 0 : e.filename, "assign"), t.click(), t.remove();
        }
      }, "var-init"),
      ee = cc11001100_hook("ee", "67b2d4d155a29", "var-init"),
      et = cc11001100_hook("et", {
        fc_plate: cc11001100_hook("fc_plate", [2014, 1027, 2024], "object-key-init"),
        list: cc11001100_hook("list", ["generate", "editor"], "object-key-init")
      }, "var-init");
    var en = cc11001100_hook("en", n(67814), "var-init"),
      ea = cc11001100_hook("ea", n.n(en), "var-init");
    (o = cc11001100_hook("o", i || (i = cc11001100_hook("i", {}, "assign")), "assign")).PPT_Download = cc11001100_hook("(o = i || (i = {})).PPT_Download", "ppt_download", "assign"), o.PPT = cc11001100_hook("o.PPT", "ppt", "assign"), o.Hide = cc11001100_hook("o.Hide", "hide", "assign");
    var eo = cc11001100_hook("eo", x.memo(e => {
        let {
            contents: t,
            conversationId: n,
            turnId: a,
            sentenceId: o,
            status: s,
            extraInfo: r
          } = cc11001100_hook("", e, "var-init"),
          {
            updateAnswer: c
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          {
            track: _
          } = cc11001100_hook("", (0, m.useTrack)(), "var-init"),
          [d, p] = cc11001100_hook("", (0, x.useState)(i.Hide), "var-init"),
          [v, f] = cc11001100_hook("", (0, x.useState)({}), "var-init"),
          [b, g] = cc11001100_hook("", (0, x.useState)({}), "var-init"),
          {
            isDesktop: k
          } = cc11001100_hook("", (0, h.ky)(), "var-init");
        (0, x.useEffect)(() => {
          var e, n;
          let a = cc11001100_hook("a", () => {
            let e = cc11001100_hook("e", function (e) {
              let {
                  pptInfo: t,
                  contents: n
                } = cc11001100_hook("", e, "var-init"),
                a = cc11001100_hook("a", {
                  title: cc11001100_hook("title", "", "object-key-init"),
                  bref: cc11001100_hook("bref", "", "object-key-init"),
                  pptInfo: cc11001100_hook("pptInfo", t, "object-key-init")
                }, "var-init"),
                o = cc11001100_hook("o", n.split("```").filter(e => !!e), "var-init");
              if (o.length > 1) {
                let e = cc11001100_hook("e", o[o.length - 1].split("\n"), "var-init");
                if (e.length > 0) {
                  let t = cc11001100_hook("t", e.filter(e => !!e), "var-init");
                  t.length > 0 && (a.title = cc11001100_hook("a.title", t[0].includes("markdown") ? t[1] : t[0], "assign"), a.bref = cc11001100_hook("a.bref", t.join("\n"), "assign"));
                }
              }
              if (1 === o.length) {
                let e = cc11001100_hook("e", o[o.length - 1].split("\n"), "var-init"),
                  t = cc11001100_hook("t", e.filter(e => !!e), "var-init");
                t.length > 0 && (a.title = cc11001100_hook("a.title", t[0], "assign"), a.bref = cc11001100_hook("a.bref", t.join("\n"), "assign"));
              }
              return a;
            }({
              pptInfo: cc11001100_hook("pptInfo", null == r ? void 0 : r.pptInfo, "object-key-init"),
              contents: cc11001100_hook("contents", t, "object-key-init")
            }), "var-init");
            f(e);
          }, "var-init");
          (null == r ? void 0 : null === (e = cc11001100_hook("e", r.pptInfo, "assign")) || void 0 === e ? void 0 : e.code) ? (g(J(null == r ? void 0 : r.pptInfo)), p(i.PPT_Download)) : (null == r ? void 0 : r.pptInfo) && 0 === Object.keys(null == r ? void 0 : r.pptInfo).length ? (a(), p(i.PPT)) : p(i.Hide), "close" !== s || null == r || !r.pptInfo || (null == r ? void 0 : null === (n = cc11001100_hook("n", r.pptInfo, "assign")) || void 0 === n ? void 0 : n.code) || (a(), p(i.PPT));
        }, [s, null == r ? void 0 : r.pptInfo, t]), (0, x.useEffect)(() => {
          let e = cc11001100_hook("e", document.getElementById("aippt-iframe-btn"), "var-init");
          return e && (null == e || e.addEventListener("click", () => {
            (null == b ? void 0 : b.id) ? p(i.PPT_Download) : p(i.PPT);
          })), () => {
            null == e || e.removeEventListener("click", () => {});
          };
        }, [b]);
        let C = cc11001100_hook("C", (0, X.Z)(Q.ti, {
            manual: cc11001100_hook("manual", !0, "object-key-init"),
            onSuccess: cc11001100_hook("onSuccess", e => {
              e.code, L.n8.SUCCESS;
            }, "object-key-init"),
            onError: cc11001100_hook("onError", e => {}, "object-key-init")
          }), "var-init"),
          y = cc11001100_hook("y", (0, X.Z)(e => (0, Q.Un)(e), {
            manual: cc11001100_hook("manual", !0, "object-key-init")
          }), "var-init"),
          j = cc11001100_hook("j", (0, X.Z)(e => (0, Q.Un)(e), {
            manual: cc11001100_hook("manual", !0, "object-key-init")
          }), "var-init");
        async function N(e, t, s) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("s", s, "function-parameter");
          let l = cc11001100_hook("l", e || {
            fc_plate: cc11001100_hook("fc_plate", [2014, 1027, 2024], "object-key-init"),
            custom_generate: {
              title: cc11001100_hook("title", v.title, "object-key-init"),
              content: cc11001100_hook("content", v.bref, "object-key-init"),
              type: cc11001100_hook("type", 7, "object-key-init"),
              step: cc11001100_hook("step", 2, "object-key-init")
            }
          }, "var-init");
          try {
            if (!AipptIframe) return;
            await AipptIframe.show({
              appkey: cc11001100_hook("appkey", ee, "object-key-init"),
              channel: cc11001100_hook("channel", "", "object-key-init"),
              code: cc11001100_hook("code", (null == s ? void 0 : s.code) || "656b30d966cee00db2c269d2401e1b6e", "object-key-init"),
              editorModel: cc11001100_hook("editorModel", !0, "object-key-init"),
              onMessage(e, t) {
                "GENERATE_PPT_SUCCESS" === e && (p(i.PPT_Download), g({
                  ...b,
                  ...t,
                  id: t.id,
                  thumbnail: t.thumbnail
                }), c({
                  conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
                  sentenceId: cc11001100_hook("sentenceId", o, "object-key-init"),
                  turnId: cc11001100_hook("turnId", a, "object-key-init"),
                  info: {
                    pptInfo: {
                      ...b,
                      ...t,
                      id: t.id,
                      coverUrl: t.thumbnail,
                      code: (null == s ? void 0 : s.code) || ""
                    }
                  }
                }), (0, Q.rd)({
                  conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
                  turnId: cc11001100_hook("turnId", a, "object-key-init"),
                  sentenceId: cc11001100_hook("sentenceId", o, "object-key-init"),
                  pptInfo: {
                    id: cc11001100_hook("id", t.id, "object-key-init"),
                    taskId: cc11001100_hook("taskId", t.taskId, "object-key-init"),
                    coverUrl: cc11001100_hook("coverUrl", t.thumbnail, "object-key-init"),
                    code: cc11001100_hook("code", (null == s ? void 0 : s.code) || "", "object-key-init"),
                    key: cc11001100_hook("key", ee, "object-key-init")
                  }
                }));
              },
              options: l,
              routerOptions: t || {
                list: cc11001100_hook("list", ["generate", "editor"], "object-key-init"),
                generate: {
                  step: cc11001100_hook("step", 2, "object-key-init")
                }
              }
            });
          } catch (e) {}
        }
        let I = cc11001100_hook("I", async () => {
            try {
              let e = cc11001100_hook("e", await C.runAsync(), "var-init");
              N(!1, !1, {
                code: cc11001100_hook("code", e.code, "object-key-init"),
                token: cc11001100_hook("token", e.token, "object-key-init")
              }), _("chat_conversation_ppt_btn_click", {
                page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                element: cc11001100_hook("element", L.fK.CHAT.area.CONVERSATION.element.PPT_CREATE, "object-key-init"),
                bhv_type: cc11001100_hook("bhv_type", "ppt_create", "object-key-init"),
                conversation_id: cc11001100_hook("conversation_id", n, "object-key-init"),
                turn_id: cc11001100_hook("turn_id", a, "object-key-init"),
                a_sentence_id: cc11001100_hook("a_sentence_id", o, "object-key-init"),
                content: cc11001100_hook("content", t, "object-key-init"),
                is_new_start: cc11001100_hook("is_new_start", !1, "object-key-init")
              });
            } catch (e) {}
          }, "var-init"),
          w = cc11001100_hook("w", async () => {
            try {
              let e = cc11001100_hook("e", await C.runAsync(), "var-init"),
                t = cc11001100_hook("t", await y.runAsync({
                  format: cc11001100_hook("format", "ppt", "object-key-init"),
                  id: cc11001100_hook("id", (null == b ? void 0 : b.id) || "", "object-key-init"),
                  token: cc11001100_hook("token", e.token || "", "object-key-init")
                }), "var-init");
              if (t.code === L.n8.SUCCESS) {
                let e = cc11001100_hook("e", {
                  url: cc11001100_hook("url", t.data[0], "object-key-init"),
                  filename: cc11001100_hook("filename", "ppt", "object-key-init")
                }, "var-init");
                $(e, k);
              }
            } catch (e) {}
          }, "var-init"),
          S = cc11001100_hook("S", async () => {
            try {
              let e = cc11001100_hook("e", await C.runAsync(), "var-init"),
                t = cc11001100_hook("t", await j.runAsync({
                  format: cc11001100_hook("format", "pdf", "object-key-init"),
                  id: cc11001100_hook("id", (null == b ? void 0 : b.id) || "", "object-key-init"),
                  token: cc11001100_hook("token", e.token || "", "object-key-init")
                }), "var-init");
              if (t.code === L.n8.SUCCESS) {
                let e = cc11001100_hook("e", {
                  url: cc11001100_hook("url", t.data[0], "object-key-init"),
                  filename: cc11001100_hook("filename", "pdf", "object-key-init")
                }, "var-init");
                $(e, k);
              }
            } catch (e) {}
          }, "var-init"),
          E = cc11001100_hook("E", async () => {
            if (null != b && b.id) try {
              let e = cc11001100_hook("e", await C.runAsync(), "var-init");
              N({
                fc_plate: cc11001100_hook("fc_plate", et.fc_plate, "object-key-init")
              }, {
                list: cc11001100_hook("list", et.list, "object-key-init"),
                editor: {
                  id: cc11001100_hook("id", b.id, "object-key-init")
                }
              }, {
                code: cc11001100_hook("code", e.code, "object-key-init"),
                token: cc11001100_hook("token", e.token, "object-key-init")
              });
            } catch (e) {}
          }, "var-init");
        return (0, l.jsx)(l.Fragment, {
          children: cc11001100_hook("children", d !== i.Hide && (0, l.jsxs)("div", {
            className: cc11001100_hook("className", ea()["ai-ppt-block"], "object-key-init"),
            children: cc11001100_hook("children", [d === i.PPT && (0, l.jsxs)("div", {
              className: cc11001100_hook("className", ea().ai_ppt_one_key, "object-key-init"),
              onClick: cc11001100_hook("onClick", I, "object-key-init"),
              children: cc11001100_hook("children", [(0, l.jsx)(T.Z, {
                className: cc11001100_hook("className", ea().ppt_icon, "object-key-init"),
                name: cc11001100_hook("name", "Slideppt", "object-key-init")
              }), (0, l.jsx)("div", {
                children: cc11001100_hook("children", "一键生成PPT >", "object-key-init")
              })], "object-key-init")
            }), d === i.PPT_Download && (0, l.jsxs)("div", {
              children: cc11001100_hook("children", [(0, l.jsx)("img", {
                className: cc11001100_hook("className", ea().ppt_cover_url, "object-key-init"),
                src: cc11001100_hook("src", null == b ? void 0 : b.thumbnail, "object-key-init"),
                alt: cc11001100_hook("alt", "ppt封面图", "object-key-init")
              }), (0, l.jsxs)("div", {
                className: cc11001100_hook("className", ea().ppt_down, "object-key-init"),
                children: cc11001100_hook("children", [(0, l.jsx)(G, {
                  disabled: cc11001100_hook("disabled", y.loading, "object-key-init"),
                  loading: cc11001100_hook("loading", y.loading, "object-key-init"),
                  className: cc11001100_hook("className", ea().download_btn, "object-key-init"),
                  onClick: cc11001100_hook("onClick", w, "object-key-init"),
                  children: cc11001100_hook("children", "下载PPT", "object-key-init")
                }), (0, l.jsx)(G, {
                  disabled: cc11001100_hook("disabled", j.loading, "object-key-init"),
                  loading: cc11001100_hook("loading", j.loading, "object-key-init"),
                  className: cc11001100_hook("className", ea().download_btn, "object-key-init"),
                  onClick: cc11001100_hook("onClick", S, "object-key-init"),
                  children: cc11001100_hook("children", "下载PDF", "object-key-init")
                }), (0, l.jsx)(G, {
                  className: cc11001100_hook("className", ea().download_btn, "object-key-init"),
                  onClick: cc11001100_hook("onClick", E, "object-key-init"),
                  children: cc11001100_hook("children", "编辑PPT", "object-key-init")
                })], "object-key-init")
              })], "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        });
      }), "var-init"),
      es = cc11001100_hook("es", n(45873), "var-init"),
      ei = cc11001100_hook("ei", x.memo(e => {
        let {
            contents: t,
            loading: n,
            turnId: a,
            isLast: o,
            isBanned: s,
            sentenceId: i,
            outputType: r,
            extraInfo: c,
            privateStopVis: _,
            status: d,
            loadingEvent: u
          } = cc11001100_hook("", e, "var-init"),
          p = cc11001100_hook("p", (0, x.useMemo)(() => o && n && "step" === r, [o, n, r]), "var-init");
        return (0, l.jsx)(es.U, {
          content: cc11001100_hook("content", t, "object-key-init"),
          loading: cc11001100_hook("loading", n, "object-key-init"),
          linkComp: cc11001100_hook("linkComp", null, "object-key-init"),
          stepping: cc11001100_hook("stepping", p, "object-key-init"),
          sentenceId: cc11001100_hook("sentenceId", i, "object-key-init"),
          turnId: cc11001100_hook("turnId", a, "object-key-init"),
          extraInfo: cc11001100_hook("extraInfo", c, "object-key-init"),
          privateStopVis: cc11001100_hook("privateStopVis", _, "object-key-init"),
          status: cc11001100_hook("status", d, "object-key-init"),
          loadingEvent: cc11001100_hook("loadingEvent", u, "object-key-init")
        });
      }), "var-init"),
      el = cc11001100_hook("el", n(96567), "var-init"),
      er = cc11001100_hook("er", n.n(el), "var-init"),
      ec = cc11001100_hook("ec", e => {
        let {
          contents: t,
          loading: n,
          children: a,
          isLast: o,
          isBanned: s,
          privateStopVis: i,
          stepBeginCb: r,
          stepCompleteCb: c,
          outputType: _,
          sentenceId: d,
          turnId: u,
          extraInfo: p,
          status: m,
          loadingEvent: v
        } = cc11001100_hook("", e, "var-init");
        return (0, l.jsxs)("div", {
          style: {
            maxWidth: cc11001100_hook("maxWidth", "100%", "object-key-init"),
            width: cc11001100_hook("width", "100%", "object-key-init")
          },
          children: cc11001100_hook("children", [(0, l.jsxs)("div", {
            className: cc11001100_hook("className", "".concat(er().answer_content, "  ").concat(o ? er().answer_content_last : ""), "object-key-init"),
            children: cc11001100_hook("children", [(0, l.jsx)(ei, {
              contents: cc11001100_hook("contents", t, "object-key-init"),
              outputType: cc11001100_hook("outputType", _, "object-key-init"),
              loading: cc11001100_hook("loading", n, "object-key-init"),
              isLast: cc11001100_hook("isLast", o, "object-key-init"),
              isBanned: cc11001100_hook("isBanned", s, "object-key-init"),
              handleStepComplete: cc11001100_hook("handleStepComplete", c, "object-key-init"),
              handlleStepBegin: cc11001100_hook("handlleStepBegin", r, "object-key-init"),
              sentenceId: cc11001100_hook("sentenceId", d, "object-key-init"),
              turnId: cc11001100_hook("turnId", u, "object-key-init"),
              extraInfo: cc11001100_hook("extraInfo", p, "object-key-init"),
              privateStopVis: cc11001100_hook("privateStopVis", i, "object-key-init"),
              status: cc11001100_hook("status", m, "object-key-init"),
              loadingEvent: cc11001100_hook("loadingEvent", v, "object-key-init")
            }), i ? (0, l.jsx)("span", {
              className: cc11001100_hook("className", er().stop_message, "object-key-init"),
              children: cc11001100_hook("children", "（已停止）", "object-key-init")
            }) : null], "object-key-init")
          }), a], "object-key-init")
        });
      }, "var-init"),
      e_ = cc11001100_hook("e_", x.memo(e => {
        let {
            contents: t,
            loading: n,
            children: a,
            conversationId: o,
            botInfo: s,
            turnId: i,
            isLast: r,
            isBanned: c,
            voluntaryStop: _,
            likeReport: d,
            feedback: m,
            sentenceId: v,
            deleteTrace: h,
            handleDeleteTurn: b,
            hasOperation: g = !1,
            status: k,
            extraInfo: C,
            loadingEvent: y,
            setBotDrawerOpen: j
          } = cc11001100_hook("", e, "var-init"),
          N = cc11001100_hook("N", (0, x.useRef)(null), "var-init"),
          [I, w] = cc11001100_hook("", (0, x.useState)(!1), "var-init"),
          {
            confirmDeleteTurn: S,
            ansPrintStep: T
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          [A, M] = cc11001100_hook("", (0, x.useState)(!1), "var-init"),
          {
            setUserLoginModalShow: F,
            setPhoneBindModalShow: P
          } = cc11001100_hook("", (0, p.useGlobalExecuteState)(), "var-init"),
          R = cc11001100_hook("R", (0, x.useRef)(), "var-init"),
          {
            checkRealLogin: D
          } = cc11001100_hook("", (0, p.useGlobalExecuteState)(), "var-init"),
          Z = cc11001100_hook("Z", (0, x.useCallback)(() => {
            D() && d(1);
          }, [D, d]), "var-init"),
          O = cc11001100_hook("O", (0, x.useCallback)(async () => {
            D() && (await d(2), w(!1));
          }, [D, d, w]), "var-init"),
          L = cc11001100_hook("L", (0, x.useCallback)(e => {
            h({
              eventName: cc11001100_hook("eventName", e, "object-key-init"),
              bh: cc11001100_hook("bh", "exposure", "object-key-init"),
              aSentence: {
                contents: cc11001100_hook("contents", t, "object-key-init"),
                sentenceId: cc11001100_hook("sentenceId", v, "object-key-init")
              }
            });
          }, [t, h, v]), "var-init"),
          Y = cc11001100_hook("Y", (0, x.useCallback)(() => {
            b && b();
          }, [b]), "var-init");
        (0, x.useCallback)(e => {
          w(e), L("chat_delete_turn_exposure");
        }, [w, L]);
        let K = cc11001100_hook("K", (0, x.useCallback)(() => {
            "needBound" === k ? P(!0) : F(!0);
          }, [k, F, P]), "var-init"),
          q = cc11001100_hook("q", (0, x.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", N.current, "assign")) || void 0 === t || t.info(e);
          }, [N]), "var-init"),
          z = cc11001100_hook("z", (0, x.useCallback)(() => {
            let e = cc11001100_hook("e", t || "", "var-init"),
              n = cc11001100_hook("n", (0, f.l8)(e), "var-init");
            "" === n ? q("复制失败，当前对话没有正文信息") : (U()(n), q("复制成功"));
          }, [t, q]), "var-init"),
          W = cc11001100_hook("W", (0, x.useMemo)(() => _, [_]), "var-init"),
          G = cc11001100_hook("G", (0, x.useMemo)(() => !r && g && "needLogin" !== k && "needBound" !== k, [r, g, k]), "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {
            ref: cc11001100_hook("ref", N, "object-key-init")
          }), (0, l.jsxs)("div", {
            className: cc11001100_hook("className", er().answer_body_content, "object-key-init"),
            children: cc11001100_hook("children", [(null == s ? void 0 : s.avatar) && (0, l.jsx)("img", {
              className: cc11001100_hook("className", er().answer_bot_avatar, "object-key-init"),
              src: cc11001100_hook("src", null == s ? void 0 : s.avatar, "object-key-init"),
              alt: cc11001100_hook("alt", "", "object-key-init"),
              onClick: cc11001100_hook("onClick", () => j(!0), "object-key-init")
            }), (0, l.jsxs)("div", {
              className: cc11001100_hook("className", "".concat(er().answer_right_content, " ").concat((null == s ? void 0 : s.avatar) ? er().show_avatar : ""), "object-key-init"),
              children: cc11001100_hook("children", [C && C.webSearchDetail ? (0, l.jsx)(H.default, {
                title: cc11001100_hook("title", C.webSearchDetail.title, "object-key-init"),
                details: cc11001100_hook("details", C.webSearchDetail.details, "object-key-init")
              }) : null, (0, l.jsxs)("div", {
                ref: cc11001100_hook("ref", R, "object-key-init"),
                className: cc11001100_hook("className", er().answer_container, "object-key-init"),
                onMouseEnter: cc11001100_hook("onMouseEnter", () => {
                  M(!0);
                }, "object-key-init"),
                onMouseLeave: cc11001100_hook("onMouseLeave", () => {
                  M(!1);
                }, "object-key-init"),
                children: cc11001100_hook("children", [(0, l.jsxs)(ec, {
                  isLast: cc11001100_hook("isLast", r, "object-key-init"),
                  isBanned: cc11001100_hook("isBanned", c, "object-key-init"),
                  contents: cc11001100_hook("contents", t, "object-key-init"),
                  outputType: cc11001100_hook("outputType", "step", "object-key-init"),
                  loading: cc11001100_hook("loading", n, "object-key-init"),
                  sentenceId: cc11001100_hook("sentenceId", v, "object-key-init"),
                  turnId: cc11001100_hook("turnId", i, "object-key-init"),
                  privateStopVis: cc11001100_hook("privateStopVis", W, "object-key-init"),
                  extraInfo: cc11001100_hook("extraInfo", C, "object-key-init"),
                  status: cc11001100_hook("status", k, "object-key-init"),
                  loadingEvent: cc11001100_hook("loadingEvent", y, "object-key-init"),
                  children: cc11001100_hook("children", [a, "needLogin" === k || "needBound" === k ? (0, l.jsxs)("div", {
                    className: cc11001100_hook("className", er().login_btn, "object-key-init"),
                    onClick: cc11001100_hook("onClick", K, "object-key-init"),
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      className: cc11001100_hook("className", er().login_text, "object-key-init"),
                      children: cc11001100_hook("children", "needLogin" === k ? "去登录" : "去绑定", "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", er().login_icon, "object-key-init")
                    })], "object-key-init")
                  }) : null], "object-key-init")
                }), G ? (0, l.jsxs)("div", {
                  className: cc11001100_hook("className", "".concat(er().opt_container, " ").concat(A ? "" : er().opt_hide), "object-key-init"),
                  style: {
                    position: cc11001100_hook("position", "absolute", "object-key-init"),
                    bottom: cc11001100_hook("bottom", -26, "object-key-init"),
                    left: cc11001100_hook("left", 0, "object-key-init")
                  },
                  children: cc11001100_hook("children", [(0, l.jsx)(E.Z, {
                    title: cc11001100_hook("title", "复制", "object-key-init"),
                    children: cc11001100_hook("children", (0, l.jsx)("div", {
                      className: cc11001100_hook("className", er().opt_btn, "object-key-init"),
                      onClick: cc11001100_hook("onClick", z, "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)("div", {
                        className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().copy_icon), "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  }), (0, l.jsx)(E.Z, {
                    title: cc11001100_hook("title", "喜欢", "object-key-init"),
                    children: cc11001100_hook("children", (0, l.jsx)("div", {
                      className: cc11001100_hook("className", er().opt_btn, "object-key-init"),
                      onClick: cc11001100_hook("onClick", Z, "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)("div", {
                        className: cc11001100_hook("className", "".concat(V().opt_btn_icon, "\n                        ").concat(1 === m ? V().like_act : V().like), "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  }), (0, l.jsx)(E.Z, {
                    title: cc11001100_hook("title", "不喜欢", "object-key-init"),
                    children: cc11001100_hook("children", (0, l.jsx)("div", {
                      className: cc11001100_hook("className", er().opt_btn, "object-key-init"),
                      onClick: cc11001100_hook("onClick", O, "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)("div", {
                        className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " \n                        ").concat(2 === m ? V().dislike_act : V().dislike), "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  }), (0, l.jsx)(E.Z, {
                    title: cc11001100_hook("title", "删除", "object-key-init"),
                    children: cc11001100_hook("children", (0, l.jsx)("div", {
                      className: cc11001100_hook("className", er().opt_btn, "object-key-init"),
                      onClick: cc11001100_hook("onClick", Y, "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)("div", {
                        style: {
                          width: cc11001100_hook("width", 20, "object-key-init"),
                          height: cc11001100_hook("height", 20, "object-key-init")
                        },
                        className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().delete_icon), "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  })], "object-key-init")
                }) : null], "object-key-init")
              }), (0, l.jsx)(eo, {
                conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                turnId: cc11001100_hook("turnId", i, "object-key-init"),
                isLast: cc11001100_hook("isLast", !1, "object-key-init"),
                hasOperation: cc11001100_hook("hasOperation", g, "object-key-init"),
                likeReport: cc11001100_hook("likeReport", d, "object-key-init"),
                status: cc11001100_hook("status", k, "object-key-init"),
                contents: cc11001100_hook("contents", t, "object-key-init"),
                loading: cc11001100_hook("loading", n, "object-key-init"),
                sentenceId: cc11001100_hook("sentenceId", v, "object-key-init"),
                privateStopVis: cc11001100_hook("privateStopVis", W, "object-key-init"),
                extraInfo: cc11001100_hook("extraInfo", C, "object-key-init")
              })], "object-key-init")
            })], "object-key-init")
          })], "object-key-init")
        });
      }), "var-init"),
      ed = cc11001100_hook("ed", n(73469), "var-init"),
      eu = cc11001100_hook("eu", n(70746), "var-init"),
      ep = cc11001100_hook("ep", n(96404), "var-init"),
      em = cc11001100_hook("em", n(67991), "var-init"),
      ev = cc11001100_hook("ev", n(61352), "var-init"),
      eh = cc11001100_hook("eh", n.n(ev), "var-init"),
      ef = cc11001100_hook("ef", e => {
        let {} = cc11001100_hook("", e, "var-init");
        return (0, l.jsx)(l.Fragment, {
          children: cc11001100_hook("children", (0, l.jsx)("div", {
            className: cc11001100_hook("className", eh().image_loading, "object-key-init"),
            children: cc11001100_hook("children", (0, l.jsx)("div", {
              className: cc11001100_hook("className", eh().loader, "object-key-init")
            }), "object-key-init")
          }), "object-key-init")
        });
      }, "var-init"),
      eb = cc11001100_hook("eb", e => {
        let {
          contents: t,
          turnStateICon: n
        } = cc11001100_hook("", e, "var-init");
        return t ? (0, l.jsxs)("div", {
          className: cc11001100_hook("className", eh().question_container, "object-key-init"),
          children: cc11001100_hook("children", [n, (0, l.jsx)("div", {
            className: cc11001100_hook("className", eh().question_content, "object-key-init"),
            children: cc11001100_hook("children", (0, l.jsx)("pre", {
              className: cc11001100_hook("className", eh().question_content_pre, "object-key-init"),
              children: cc11001100_hook("children", t, "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        }) : null;
      }, "var-init"),
      eg = cc11001100_hook("eg", x.memo(e => {
        let {
            contents: t,
            children: n,
            status: a,
            botId: o,
            botInfo: s,
            conversationId: i,
            turnId: r,
            mediaInfos: c,
            turnIndex: _
          } = cc11001100_hook("", e, "var-init"),
          {
            deleteTurnFromConv: d,
            checkedMenuItems: p
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          m = cc11001100_hook("m", (0, x.useCallback)(async () => {
            await em.Z.stopSse({
              conversationId: cc11001100_hook("conversationId", i, "object-key-init"),
              uuid: cc11001100_hook("uuid", i, "object-key-init")
            }), /^newTurnId/.test(r) && d(i, r), (0, f.xn)(i, r), em.Z.sendMsgToBot({
              botId: cc11001100_hook("botId", o, "object-key-init"),
              botAlias: cc11001100_hook("botAlias", (null == s ? void 0 : s.alias) || "", "object-key-init"),
              conversationId: cc11001100_hook("conversationId", i, "object-key-init"),
              contents: cc11001100_hook("contents", t, "object-key-init"),
              mediaInfos: cc11001100_hook("mediaInfos", c, "object-key-init"),
              turnIndex: cc11001100_hook("turnIndex", _, "object-key-init"),
              strategy: {
                isRetry: cc11001100_hook("isRetry", !/^newTurnId/.test(r), "object-key-init"),
                breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
              },
              uuid: cc11001100_hook("uuid", i, "object-key-init"),
              turnId: cc11001100_hook("turnId", /^newTurnId/.test(r) ? "" : r, "object-key-init"),
              timeoutRetry: cc11001100_hook("timeoutRetry", !0, "object-key-init"),
              inputWay: cc11001100_hook("inputWay", L.zY.INPUT_WAY.PROACTIVE, "object-key-init"),
              capabilities: cc11001100_hook("capabilities", p || [], "object-key-init"),
              customAttrs: {
                input_way: cc11001100_hook("input_way", L.zY.INPUT_WAY.PROACTIVE, "object-key-init")
              }
            });
          }, [i, t, c, _, o, null == s ? void 0 : s.alias, r, d, p]), "var-init"),
          v = cc11001100_hook("v", (0, x.useMemo)(() => {
            switch (a) {
              case "loading":
                return (0, l.jsx)("div", {
                  className: cc11001100_hook("className", eh().question_loading, "object-key-init")
                });
              case "timeout":
                return (0, l.jsx)("div", {
                  onClick: cc11001100_hook("onClick", m, "object-key-init"),
                  className: cc11001100_hook("className", eh().question_timeout, "object-key-init")
                });
              default:
                return null;
            }
          }, [a, m]), "var-init");
        return (0, l.jsxs)("div", {
          children: cc11001100_hook("children", [_ > 0 && Array.isArray(c) && c.length > 0 && (0, l.jsx)(eu.Z, {
            hasClose: cc11001100_hook("hasClose", !1, "object-key-init"),
            files: cc11001100_hook("files", c, "object-key-init")
          }), (0, l.jsx)(eb, {
            turnStateICon: cc11001100_hook("turnStateICon", v, "object-key-init"),
            contents: cc11001100_hook("contents", t, "object-key-init")
          }), (0, l.jsx)("div", {
            className: cc11001100_hook("className", eh().media_list, "object-key-init"),
            children: cc11001100_hook("children", _ < 1 && Array.isArray(c) && c.map((e, t) => {
              let {
                thumb: n,
                downloadUrl: a,
                q_type: o
              } = cc11001100_hook("", e, "var-init");
              return (0, l.jsxs)(l.Fragment, {
                children: cc11001100_hook("children", ["loading" === o && (0, l.jsx)(ef, {}, o + "_" + t), "loading" !== o && (n ? (0, l.jsx)(ep.Z, {
                  thumb: cc11001100_hook("thumb", n, "object-key-init"),
                  downloadUrl: cc11001100_hook("downloadUrl", a || n, "object-key-init")
                }, "".concat(e.name, "_").concat(t)) : (0, l.jsx)(ed.Z, {
                  ...e,
                  hasClose: !1,
                  stage: 2,
                  status: 2
                }, "".concat(e.name, "_").concat(t)))], "object-key-init")
              });
            }), "object-key-init")
          })], "object-key-init")
        });
      }), "var-init");
    let ex = cc11001100_hook("ex", ["cancel", "like", "dislike"], "var-init");
    var ek = cc11001100_hook("ek", (0, x.memo)(e => {
        var t;
        let {
            sentenceList: n,
            conversationId: a,
            turnId: o,
            botId: s,
            auth: i,
            setTurnFeedback: r,
            status: c,
            hasOperation: _ = !0,
            specialAnsIdx: d
          } = cc11001100_hook("", e, "var-init"),
          p = cc11001100_hook("p", (0, g.useSearchParams)(), "var-init"),
          v = cc11001100_hook("v", p.get("inner_refer") || "history", "var-init"),
          {
            track: h
          } = cc11001100_hook("", (0, m.useTrack)(), "var-init"),
          {
            setSentenceFeedback: f,
            confirmDeleteTurn: b
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          k = cc11001100_hook("k", (0, x.useMemo)(() => n.filter(e => 1 === e.direction), [n]), "var-init"),
          C = cc11001100_hook("C", (0, x.useMemo)(() => n.filter(e => 1 !== e.direction), [n]), "var-init"),
          y = cc11001100_hook("y", (0, x.useMemo)(() => null == d ? C.length - 1 : d, [d, C]), "var-init"),
          j = cc11001100_hook("j", (0, x.useRef)(null), "var-init");
        (0, x.useCallback)(e => {
          var t;
          null === (t = cc11001100_hook("t", j.current, "assign")) || void 0 === t || t.info(e);
        }, [j]);
        let N = cc11001100_hook("N", (0, x.useCallback)(async e => {
            let t = cc11001100_hook("t", C[y], "var-init");
            if (t) {
              if (t.feedback === e && (e = cc11001100_hook("e", 0, "assign")), t) {
                let l = cc11001100_hook("l", await (0, R.dU)(t.userId || i.user.id, t.botId || s, {
                  userId: cc11001100_hook("userId", i.user.id, "object-key-init"),
                  turnId: cc11001100_hook("turnId", o, "object-key-init"),
                  conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
                  ...t
                }, ex[e], t.sentenceId, i.token), "var-init");
                if (l.code === L.n8.SUCCESS && f({
                  conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
                  turnId: cc11001100_hook("turnId", o, "object-key-init"),
                  sentenceId: cc11001100_hook("sentenceId", t.sentenceId, "object-key-init"),
                  feedback: cc11001100_hook("feedback", e, "object-key-init")
                }), "cancel" !== ex[e]) {
                  var n;
                  let s = cc11001100_hook("s", "chat_conversation_dislike_btn_click", "var-init"),
                    i = cc11001100_hook("i", "dislike", "var-init"),
                    l = cc11001100_hook("l", L.fK.CHAT.area.CONVERSATION.element.DISLIKE_BTN, "var-init");
                  "like" === ex[e] && (s = cc11001100_hook("s", "chat_conversation_praise_btn_click", "assign"), i = cc11001100_hook("i", "praise", "assign"), l = cc11001100_hook("l", L.fK.CHAT.area.CONVERSATION.element.PRAISE_BTN, "assign")), h(s, {
                    page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                    area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                    element: cc11001100_hook("element", l, "object-key-init"),
                    bhv_type: cc11001100_hook("bhv_type", i, "object-key-init"),
                    conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
                    turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
                    q_sentence_id: cc11001100_hook("q_sentence_id", null === (n = cc11001100_hook("n", k[0], "assign")) || void 0 === n ? void 0 : n.sentenceId, "object-key-init"),
                    a_sentence_id: cc11001100_hook("a_sentence_id", t.sentenceId, "object-key-init"),
                    content: cc11001100_hook("content", t.contents, "object-key-init"),
                    is_new_start: cc11001100_hook("is_new_start", !1, "object-key-init"),
                    refer_page: cc11001100_hook("refer_page", v, "object-key-init")
                  });
                }
              }
              "dislike" === ex[e] && r({
                turnId: cc11001100_hook("turnId", o, "object-key-init"),
                show: cc11001100_hook("show", !0, "object-key-init")
              });
            }
          }, [i, C, a, k, v, f, h, o, r, s]), "var-init"),
          I = cc11001100_hook("I", (0, x.useCallback)(e => {
            var t;
            let {
              eventName: n,
              bh: s,
              aSentence: i
            } = cc11001100_hook("", e, "var-init");
            h(n, {
              page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
              area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
              bhv_type: cc11001100_hook("bhv_type", s, "object-key-init"),
              conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
              q_sentence_id: cc11001100_hook("q_sentence_id", null === (t = cc11001100_hook("t", k[0], "assign")) || void 0 === t ? void 0 : t.sentenceId, "object-key-init"),
              a_sentence_id: cc11001100_hook("a_sentence_id", i.sentenceId, "object-key-init"),
              content: cc11001100_hook("content", i.contents, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", v, "object-key-init")
            });
          }, [h, a, o, v, k]), "var-init"),
          w = cc11001100_hook("w", (0, x.useCallback)(() => {
            var e;
            let t = cc11001100_hook("t", C[y], "var-init"),
              n = cc11001100_hook("n", {
                page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
                turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
                q_sentence_id: cc11001100_hook("q_sentence_id", null === (e = cc11001100_hook("e", k[0], "assign")) || void 0 === e ? void 0 : e.sentenceId, "object-key-init"),
                a_sentence_id: cc11001100_hook("a_sentence_id", t.sentenceId, "object-key-init"),
                content: cc11001100_hook("content", t.contents, "object-key-init")
              }, "var-init");
            b(a, o, !0, n);
          }, [b, C, k, a, o, y]), "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {
            ref: cc11001100_hook("ref", j, "object-key-init")
          }), (0, l.jsxs)("div", {
            className: cc11001100_hook("className", V().turn_container, "object-key-init"),
            children: cc11001100_hook("children", [k[0] ? (0, l.jsx)(eg, {
              conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
              turnId: cc11001100_hook("turnId", o, "object-key-init"),
              contents: cc11001100_hook("contents", k[0].contents, "object-key-init"),
              status: cc11001100_hook("status", c, "object-key-init"),
              botId: cc11001100_hook("botId", s, "object-key-init"),
              mediaInfos: cc11001100_hook("mediaInfos", k[0].mediaInfos, "object-key-init"),
              turnIndex: cc11001100_hook("turnIndex", k[0].turnIndex, "object-key-init")
            }) : null, C[y] && "timeout" !== c ? (0, l.jsx)(e_, {
              ...C[y],
              conversationId: a,
              turnId: o,
              isLast: !1,
              hasOperation: _,
              likeReport: N,
              status: c,
              contents: (null === (t = cc11001100_hook("t", C[y], "assign")) || void 0 === t ? void 0 : t.contents) || L.BK,
              handleDeleteTurn: w,
              deleteTrace: I
            }) : null], "object-key-init")
          })], "object-key-init")
        });
      }), "var-init"),
      eC = cc11001100_hook("eC", n(81589), "var-init"),
      ey = cc11001100_hook("ey", n.n(eC), "var-init"),
      ej = cc11001100_hook("ej", e => {
        let {
            children: t,
            className: n,
            type: a,
            disabled: o,
            onClick: s,
            show: i,
            loading: r,
            disable: c,
            handleCloseModal: _,
            conversation: d,
            conversationId: u,
            lasTurnAnsIdx: p
          } = cc11001100_hook("", e, "var-init"),
          m = cc11001100_hook("m", (0, x.useMemo)(() => d ? d.turnList : [], [d]), "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {}), (0, l.jsx)(O.Z, {
            transitionName: cc11001100_hook("transitionName", ey().trans, "object-key-init"),
            style: {
              pointerEvents: cc11001100_hook("pointerEvents", "auto", "object-key-init"),
              top: cc11001100_hook("top", "calc(50vh - 280px)", "object-key-init")
            },
            getContainer: cc11001100_hook("getContainer", !1, "object-key-init"),
            keyboard: cc11001100_hook("keyboard", !0, "object-key-init"),
            maskClosable: cc11001100_hook("maskClosable", !0, "object-key-init"),
            onCancel: cc11001100_hook("onCancel", _, "object-key-init"),
            onOk: cc11001100_hook("onOk", _, "object-key-init"),
            title: cc11001100_hook("title", "分享对话", "object-key-init"),
            content: cc11001100_hook("content", (0, l.jsxs)("div", {
              children: cc11001100_hook("children", [(0, l.jsx)("div", {
                className: cc11001100_hook("className", ey().share_chat_ctnt, "object-key-init"),
                children: cc11001100_hook("children", (0, l.jsx)("div", {
                  className: cc11001100_hook("className", ey().conv_list, "object-key-init"),
                  children: cc11001100_hook("children", m ? m.map((e, t) => e && "delete" !== e.status ? (0, l.jsx)(ek, {
                    ...e,
                    conversationId: "",
                    setTurnFeedback: () => {},
                    isLast: !1,
                    auth: {},
                    specialAnsIdx: 0 === t ? p : void 0,
                    hasOperation: !1,
                    botId: ""
                  }, "".concat(null == e ? void 0 : e.turnId)) : null) : null, "object-key-init")
                }), "object-key-init")
              }), (0, l.jsx)("div", {
                style: {
                  display: cc11001100_hook("display", "flex", "object-key-init"),
                  justifyContent: cc11001100_hook("justifyContent", "center", "object-key-init"),
                  marginTop: cc11001100_hook("marginTop", 40, "object-key-init")
                },
                children: cc11001100_hook("children", (0, l.jsx)(Z.Z, {
                  className: cc11001100_hook("className", ey().reback_btn, "object-key-init"),
                  type: cc11001100_hook("type", "primary", "object-key-init"),
                  loading: cc11001100_hook("loading", !1, "object-key-init"),
                  onClick: cc11001100_hook("onClick", s, "object-key-init"),
                  disabled: cc11001100_hook("disabled", !1, "object-key-init"),
                  children: cc11001100_hook("children", "复制分享链接", "object-key-init")
                }), "object-key-init")
              })], "object-key-init")
            }), "object-key-init"),
            open: cc11001100_hook("open", i, "object-key-init")
          })], "object-key-init")
        });
      }, "var-init"),
      eN = function (e) {
        let {
            conversationId: t,
            conversation: n
          } = cc11001100_hook("", e, "var-init"),
          [a, o] = cc11001100_hook("", (0, x.useState)(!1), "var-init"),
          [s, i] = cc11001100_hook("", (0, x.useState)(""), "var-init"),
          r = cc11001100_hook("r", (0, x.useRef)(null), "var-init"),
          {
            ansPrintStep: c,
            lasTurnAnsIdx: _
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          {
            needRealLogin: d,
            checkRealLogin: m
          } = cc11001100_hook("", (0, p.useGlobalExecuteState)(), "var-init"),
          v = cc11001100_hook("v", (0, x.useMemo)(() => _[t], [_, t]), "var-init"),
          {
            btnEnable: h
          } = cc11001100_hook("", (0, x.useMemo)(() => n && n.status && "close" !== n.status && "error" !== n.status && "timeout" !== n.status ? {
            btnEnable: cc11001100_hook("btnEnable", !0, "object-key-init")
          } : {
            btnEnable: cc11001100_hook("btnEnable", !1, "object-key-init")
          }, [n]), "var-init"),
          f = cc11001100_hook("f", (0, x.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", r.current, "assign")) || void 0 === t || t.info(e);
          }, [r]), "var-init"),
          b = cc11001100_hook("b", (0, x.useCallback)(async () => {
            o(!0);
            let e = cc11001100_hook("e", function (e, t) {
                let {
                    turnList: n
                  } = cc11001100_hook("", e, "var-init"),
                  a = cc11001100_hook("a", [], "var-init");
                return n && n.forEach((e, n) => {
                  var o, s, i;
                  let {
                      sentenceList: l
                    } = cc11001100_hook("", e, "var-init"),
                    r = cc11001100_hook("r", [], "var-init"),
                    c = cc11001100_hook("c", [], "var-init");
                  for (let e = cc11001100_hook("e", 0, "var-init"); e < l.length; ++e) {
                    let t = cc11001100_hook("t", l[e], "var-init");
                    1 === t.direction ? r.push(t) : c.push(t);
                  }
                  a.push(null === (o = cc11001100_hook("o", r[0], "assign")) || void 0 === o ? void 0 : o.sentenceId), 0 !== n || null == t ? a.push(null === (s = cc11001100_hook("s", c[c.length - 1], "assign")) || void 0 === s ? void 0 : s.sentenceId) : a.push(null === (i = cc11001100_hook("i", c[t], "assign")) || void 0 === i ? void 0 : i.sentenceId);
                }), a;
              }(n, v), "var-init"),
              a = cc11001100_hook("a", await (0, R.Zi)({
                conversationId: cc11001100_hook("conversationId", t, "object-key-init"),
                sentenceIdList: cc11001100_hook("sentenceIdList", e, "object-key-init")
              }), "var-init");
            if (0 === a.code) {
              let {
                baseUrl: e,
                shareId: t
              } = cc11001100_hook("", a.data, "var-init");
              i("".concat(e).concat(t));
            }
          }, [t, o, i, n, v]), "var-init"),
          g = cc11001100_hook("g", (0, x.useCallback)(() => {
            o(!1);
          }, [o]), "var-init"),
          k = cc11001100_hook("k", (0, x.useCallback)(() => {
            U()(s), f("对话链接已复制"), g();
          }, [s, g, f]), "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {
            ref: cc11001100_hook("ref", r, "object-key-init")
          }), (0, l.jsx)(ej, {
            conversation: cc11001100_hook("conversation", n, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", t, "object-key-init"),
            show: cc11001100_hook("show", a, "object-key-init"),
            handleCloseModal: cc11001100_hook("handleCloseModal", g, "object-key-init"),
            onClick: cc11001100_hook("onClick", k, "object-key-init"),
            lasTurnAnsIdx: cc11001100_hook("lasTurnAnsIdx", v, "object-key-init")
          }), !d && (0, l.jsx)(P, {
            onClick: cc11001100_hook("onClick", b, "object-key-init"),
            enable: cc11001100_hook("enable", !h, "object-key-init")
          })], "object-key-init")
        });
      },
      eI = cc11001100_hook("eI", n(8784), "var-init"),
      ew = cc11001100_hook("ew", n(33555), "var-init"),
      eS = cc11001100_hook("eS", n.n(ew), "var-init");
    let eT = cc11001100_hook("eT", {
        header: {
          borderBottom: cc11001100_hook("borderBottom", "none", "object-key-init"),
          padding: cc11001100_hook("padding", "24px 20px", "object-key-init"),
          background: cc11001100_hook("background", "var(--common-title-label-bg,#F6F5F7)", "object-key-init")
        },
        body: {
          background: cc11001100_hook("background", "var(--common-title-label-bg,#F6F5F7)", "object-key-init"),
          padding: cc11001100_hook("padding", "24px 60px", "object-key-init")
        }
      }, "var-init"),
      eE = cc11001100_hook("eE", () => {}, "var-init");
    function eA(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t, n, a, o;
      let {
          open: s = !1,
          botInfo: i,
          onClose: r = eE
        } = cc11001100_hook("", e, "var-init"),
        c = cc11001100_hook("c", (0, x.useRef)(null), "var-init"),
        _ = cc11001100_hook("_", (0, x.useCallback)(e => {
          var t;
          null === (t = cc11001100_hook("t", c.current, "assign")) || void 0 === t || t.info(e);
        }, [c]), "var-init"),
        d = cc11001100_hook("d", (0, x.useCallback)(async () => {
          let {
            id: e
          } = cc11001100_hook("", i, "var-init");
          if (!e) return;
          let t = cc11001100_hook("t", await (0, Q.$N)({
            botId: cc11001100_hook("botId", e, "object-key-init")
          }), "var-init");
          if (t.code === L.n8.SUCCESS) {
            let {
              baseUrl: e,
              shareId: n
            } = cc11001100_hook("", t.data, "var-init");
            U()("".concat(e).concat(n)), _("已复制链接，分享给朋友吧 \uD83C\uDF8A");
          } else _("分享失败，请稍后再试");
        }, [i, _]), "var-init"),
        u = cc11001100_hook("u", (0, x.useMemo)(() => {
          var e;
          return !!(null == i ? void 0 : null === (e = cc11001100_hook("e", i.extra, "assign")) || void 0 === e ? void 0 : e.openingRemarks);
        }, [i]), "var-init");
      return (0, l.jsxs)(l.Fragment, {
        children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {
          ref: cc11001100_hook("ref", c, "object-key-init")
        }), (0, l.jsx)(eI.Z, {
          styles: cc11001100_hook("styles", eT, "object-key-init"),
          open: cc11001100_hook("open", s, "object-key-init"),
          width: cc11001100_hook("width", 480, "object-key-init"),
          onClose: cc11001100_hook("onClose", () => r(), "object-key-init"),
          getContainer: cc11001100_hook("getContainer", e => (null == e ? void 0 : e.parentNode) || !1, "object-key-init"),
          closeIcon: cc11001100_hook("closeIcon", (0, l.jsx)(T.Z, {
            className: cc11001100_hook("className", eS().close_btn, "object-key-init"),
            name: cc11001100_hook("name", "close", "object-key-init")
          }), "object-key-init"),
          children: cc11001100_hook("children", (0, l.jsxs)("div", {
            className: cc11001100_hook("className", eS().bot_share_container, "object-key-init"),
            children: cc11001100_hook("children", [(0, l.jsx)("div", {
              className: cc11001100_hook("className", eS().bot_avatar_container, "object-key-init"),
              children: cc11001100_hook("children", (0, l.jsx)("img", {
                className: cc11001100_hook("className", eS().bot_avatar, "object-key-init"),
                src: cc11001100_hook("src", null == i ? void 0 : i.avatar, "object-key-init"),
                alt: cc11001100_hook("alt", "", "object-key-init")
              }), "object-key-init")
            }), (0, l.jsx)("div", {
              className: cc11001100_hook("className", eS().bot_name, "object-key-init"),
              children: cc11001100_hook("children", u ? null == i ? void 0 : null === (n = cc11001100_hook("n", i.extra, "assign")) || void 0 === n ? void 0 : null === (t = cc11001100_hook("t", n.openingRemarks, "assign")) || void 0 === t ? void 0 : t.descWeb : null == i ? void 0 : i.name, "object-key-init")
            }), (0, l.jsx)("div", {
              className: cc11001100_hook("className", eS().bot_desc, "object-key-init"),
              children: cc11001100_hook("children", u ? null == i ? void 0 : null === (o = cc11001100_hook("o", i.extra, "assign")) || void 0 === o ? void 0 : null === (a = cc11001100_hook("a", o.openingRemarks, "assign")) || void 0 === a ? void 0 : a.fullDescWeb : null == i ? void 0 : i.openingRemarks, "object-key-init")
            }), (0, l.jsxs)("div", {
              className: cc11001100_hook("className", "".concat(eS().btn_container, " custom_button"), "object-key-init"),
              onClick: cc11001100_hook("onClick", d, "object-key-init"),
              children: cc11001100_hook("children", [(0, l.jsx)("div", {
                className: cc11001100_hook("className", eS().backdrop, "object-key-init")
              }), (0, l.jsx)("div", {
                className: cc11001100_hook("className", eS().share_btn, "object-key-init"),
                children: cc11001100_hook("children", (0, l.jsx)("div", {
                  children: cc11001100_hook("children", "分享", "object-key-init")
                }), "object-key-init")
              })], "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        })], "object-key-init")
      });
    }
    var eM = cc11001100_hook("eM", n(28445), "var-init"),
      eF = cc11001100_hook("eF", n(67655), "var-init"),
      eP = cc11001100_hook("eP", n(75322), "var-init"),
      eR = cc11001100_hook("eR", n.n(eP), "var-init");
    let eD = cc11001100_hook("eD", {
      background: cc11001100_hook("background", "#FFFFFF", "object-key-init")
    }, "var-init");
    var eU = cc11001100_hook("eU", e => {
        let {
            closeModal: t,
            show: n,
            appConfig: a,
            turnId: o,
            botId: s
          } = cc11001100_hook("", e, "var-init"),
          [i, r] = cc11001100_hook("", (0, x.useState)(""), "var-init"),
          [c, _] = cc11001100_hook("", (0, x.useState)(-1), "var-init"),
          [d, u] = cc11001100_hook("", (0, x.useState)(120), "var-init"),
          [p, m] = cc11001100_hook("", eF.ZP.useMessage(), "var-init"),
          v = cc11001100_hook("v", (0, x.useRef)(null), "var-init"),
          h = cc11001100_hook("h", (0, x.useMemo)(() => i || -1 !== c, [i, c]), "var-init"),
          f = cc11001100_hook("f", e => {
            var t;
            null === (t = cc11001100_hook("t", v.current, "assign")) || void 0 === t || t.info(e);
          }, "var-init");
        (0, x.useEffect)(() => {
          let e = cc11001100_hook("e", window.matchMedia("(max-width: 879px)").matches, "var-init");
          e && u(100);
        }, []);
        let b = cc11001100_hook("b", () => {
            r(""), _(-1), t();
          }, "var-init"),
          g = cc11001100_hook("g", (0, x.useCallback)(e => {
            r(e.target.value);
          }, []), "var-init"),
          k = cc11001100_hook("k", async () => {
            if (!h) return;
            let e = cc11001100_hook("e", await (0, R.Od)({
              turnId: cc11001100_hook("turnId", o, "object-key-init"),
              botId: cc11001100_hook("botId", s, "object-key-init"),
              reportType: cc11001100_hook("reportType", c, "object-key-init"),
              reportInfo: cc11001100_hook("reportInfo", i, "object-key-init")
            }), "var-init");
            e.code === L.n8.SUCCESS ? f("感谢你的反馈") : f(e.msg), b();
          }, "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [m, (0, l.jsx)(B.Z, {
            ref: cc11001100_hook("ref", v, "object-key-init")
          }), (0, l.jsx)(O.Z, {
            transitionName: cc11001100_hook("transitionName", eR().trans, "object-key-init"),
            style: {
              pointerEvents: cc11001100_hook("pointerEvents", "auto", "object-key-init"),
              top: cc11001100_hook("top", "calc(50vh - 280px)", "object-key-init")
            },
            keyboard: cc11001100_hook("keyboard", !0, "object-key-init"),
            maskClosable: cc11001100_hook("maskClosable", !0, "object-key-init"),
            onCancel: cc11001100_hook("onCancel", b, "object-key-init"),
            onOk: cc11001100_hook("onOk", b, "object-key-init"),
            title: cc11001100_hook("title", "反馈", "object-key-init"),
            content: cc11001100_hook("content", (0, l.jsxs)("div", {
              className: cc11001100_hook("className", eR().report_modal, "object-key-init"),
              children: cc11001100_hook("children", [(0, l.jsx)("div", {
                className: cc11001100_hook("className", eR().feedback_container, "object-key-init"),
                children: cc11001100_hook("children", a && Array.isArray(a.feedbacks) ? a.feedbacks.map(e => (0, l.jsx)("div", {
                  onClick: cc11001100_hook("onClick", t => {
                    _(e.type);
                  }, "object-key-init"),
                  className: cc11001100_hook("className", eR().feed_item, "object-key-init"),
                  "data-act": cc11001100_hook("data-act", c === e.type, "object-key-init"),
                  dataKey: cc11001100_hook("dataKey", e.type, "object-key-init"),
                  children: cc11001100_hook("children", (0, l.jsx)("div", {
                    children: cc11001100_hook("children", e.content, "object-key-init")
                  }), "object-key-init")
                }, e.type)) : null, "object-key-init")
              }), (0, l.jsx)(eM.Z, {
                inputEnable: cc11001100_hook("inputEnable", !0, "object-key-init"),
                value: cc11001100_hook("value", i, "object-key-init"),
                onKeyUp: cc11001100_hook("onKeyUp", () => {}, "object-key-init"),
                onKeyDown: cc11001100_hook("onKeyDown", () => {}, "object-key-init"),
                onInput: cc11001100_hook("onInput", g, "object-key-init"),
                sendMsg: cc11001100_hook("sendMsg", () => {}, "object-key-init"),
                lineHeight: cc11001100_hook("lineHeight", () => {}, "object-key-init"),
                maxLength: cc11001100_hook("maxLength", 300, "object-key-init"),
                placeholder: cc11001100_hook("placeholder", "点击这里反馈内容", "object-key-init"),
                autoSize: cc11001100_hook("autoSize", !1, "object-key-init"),
                style: {
                  ...eD,
                  height: d
                }
              }), (0, l.jsx)(Z.Z, {
                className: cc11001100_hook("className", eR().reback_btn, "object-key-init"),
                type: cc11001100_hook("type", "primary", "object-key-init"),
                disabled: cc11001100_hook("disabled", !h, "object-key-init"),
                onClick: cc11001100_hook("onClick", k, "object-key-init"),
                children: cc11001100_hook("children", "提交", "object-key-init")
              })], "object-key-init")
            }), "object-key-init"),
            open: cc11001100_hook("open", n, "object-key-init")
          })], "object-key-init")
        });
      }, "var-init"),
      eZ = cc11001100_hook("eZ", n(68948), "var-init"),
      eB = cc11001100_hook("eB", n.n(eZ), "var-init"),
      eO = cc11001100_hook("eO", x.memo(e => {
        let {
          type: t
        } = cc11001100_hook("", e, "var-init");
        return (0, l.jsx)("span", {
          className: cc11001100_hook("className", eB().loader, "object-key-init")
        });
      }), "var-init");
    let eL = cc11001100_hook("eL", ["cancel", "like", "dislike"], "var-init");
    var eH = cc11001100_hook("eH", (0, x.memo)(e => {
        var t;
        let {
            sentenceList: n,
            conversationId: a,
            turnId: o,
            botId: s,
            botInfo: i,
            isLast: r,
            auth: c,
            setTurnFeedback: _,
            webSearch: d,
            lastedTurnIsNew: h,
            sseStatus: b,
            status: k,
            setBotDrawerOpen: y
          } = cc11001100_hook("", e, "var-init"),
          {
            checkRealLogin: j
          } = cc11001100_hook("", (0, p.useGlobalExecuteState)(), "var-init"),
          {
            getChatCustomParams: N
          } = cc11001100_hook("", (0, v.useConverMenuContext)(), "var-init"),
          I = cc11001100_hook("I", (0, x.useRef)(null), "var-init"),
          w = cc11001100_hook("w", (0, g.useSearchParams)(), "var-init"),
          S = cc11001100_hook("S", w.get("inner_refer") || "history", "var-init"),
          [T, A] = cc11001100_hook("", (0, x.useState)(!1), "var-init"),
          {
            track: M
          } = cc11001100_hook("", (0, m.useTrack)(), "var-init"),
          {
            setSentenceFeedback: F,
            confirmDeleteTurn: P,
            checkedMenuItems: D,
            changeConvLasTurnAnsIdx: Z
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          O = cc11001100_hook("O", (0, x.useMemo)(() => "before" === k ? "loading" : "timeout" === k ? "timeout" : "none", [k]), "var-init"),
          H = cc11001100_hook("H", (0, x.useMemo)(() => "before" === b || "open" === b || "webSearch" === b, [b]), "var-init"),
          Y = cc11001100_hook("Y", (0, x.useMemo)(() => n.filter(e => 1 === e.direction), [n]), "var-init"),
          K = cc11001100_hook("K", (0, x.useMemo)(() => n.filter(e => 1 !== e.direction), [n]), "var-init"),
          [q, z] = cc11001100_hook("", (0, x.useState)(K.length - 1 > -1 ? K.length - 1 : 0), "var-init"),
          W = cc11001100_hook("W", (0, x.useMemo)(() => r && !H && ("close" === b || !b), [H, r, b]), "var-init"),
          G = cc11001100_hook("G", (0, x.useCallback)(() => {
            A(!T);
          }, [T, A]), "var-init"),
          Q = cc11001100_hook("Q", (0, x.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", I.current, "assign")) || void 0 === t || t.info(e);
          }, [I]), "var-init"),
          X = cc11001100_hook("X", (0, x.useCallback)(async e => {
            let t = cc11001100_hook("t", K[q], "var-init");
            if (t) {
              if (t.feedback === e && (e = cc11001100_hook("e", 0, "assign")), t) {
                let i = cc11001100_hook("i", await (0, R.dU)(t.userId || c.user.id, t.botId || s, {
                  userId: cc11001100_hook("userId", c.user.id, "object-key-init"),
                  turnId: cc11001100_hook("turnId", o, "object-key-init"),
                  conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
                  ...t
                }, eL[e], t.sentenceId, c.token), "var-init");
                if (i.code === L.n8.SUCCESS && F({
                  conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
                  turnId: cc11001100_hook("turnId", o, "object-key-init"),
                  sentenceId: cc11001100_hook("sentenceId", t.sentenceId, "object-key-init"),
                  feedback: cc11001100_hook("feedback", e, "object-key-init")
                }), "cancel" !== eL[e]) {
                  var n;
                  let s = cc11001100_hook("s", "chat_conversation_dislike_btn_click", "var-init"),
                    i = cc11001100_hook("i", "dislike", "var-init"),
                    l = cc11001100_hook("l", L.fK.CHAT.area.CONVERSATION.element.DISLIKE_BTN, "var-init");
                  "like" === eL[e] && (s = cc11001100_hook("s", "chat_conversation_praise_btn_click(", "assign"), i = cc11001100_hook("i", "praise", "assign"), l = cc11001100_hook("l", L.fK.CHAT.area.CONVERSATION.element.PRAISE_BTN, "assign")), M(s, {
                    page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                    area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                    element: cc11001100_hook("element", l, "object-key-init"),
                    bhv_type: cc11001100_hook("bhv_type", i, "object-key-init"),
                    conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
                    turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
                    q_sentence_id: cc11001100_hook("q_sentence_id", null === (n = cc11001100_hook("n", Y[0], "assign")) || void 0 === n ? void 0 : n.sentenceId, "object-key-init"),
                    a_sentence_id: cc11001100_hook("a_sentence_id", t.sentenceId, "object-key-init"),
                    content: cc11001100_hook("content", t.contents, "object-key-init"),
                    is_new_start: cc11001100_hook("is_new_start", h, "object-key-init"),
                    refer_page: cc11001100_hook("refer_page", S, "object-key-init")
                  });
                }
              }
              "dislike" === eL[e] && _({
                turnId: cc11001100_hook("turnId", o, "object-key-init"),
                show: cc11001100_hook("show", !0, "object-key-init")
              });
            }
          }, [K, _, o, a, Y, q, s, c, F, M, S, h]), "var-init"),
          J = cc11001100_hook("J", (0, x.useCallback)(async () => {
            j() && X(1);
          }, [j, X]), "var-init"),
          $ = cc11001100_hook("$", (0, x.useCallback)(async () => {
            j() && X(2);
          }, [j, X]), "var-init"),
          ee = cc11001100_hook("ee", (0, x.useCallback)(() => {
            let e = cc11001100_hook("e", q > 0 ? q - 1 : 0, "var-init");
            z(e);
          }, [z, q]), "var-init"),
          et = cc11001100_hook("et", (0, x.useCallback)(() => {
            let e = cc11001100_hook("e", q < K.length - 1 ? q + 1 : K.length - 1, "var-init");
            z(e);
          }, [z, q, K]), "var-init"),
          en = cc11001100_hook("en", (0, x.useCallback)(() => {
            var e;
            let t = cc11001100_hook("t", K[q], "var-init"),
              n = cc11001100_hook("n", {
                page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
                turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
                q_sentence_id: cc11001100_hook("q_sentence_id", null === (e = cc11001100_hook("e", Y[0], "assign")) || void 0 === e ? void 0 : e.sentenceId, "object-key-init"),
                a_sentence_id: cc11001100_hook("a_sentence_id", t.sentenceId, "object-key-init"),
                content: cc11001100_hook("content", t.contents, "object-key-init")
              }, "var-init");
            P(a, o, !0, n);
          }, [P, q, K, Y, a, o]), "var-init");
        (0, x.useEffect)(() => {
          let e = cc11001100_hook("e", K.length - 1 > -1 ? K.length - 1 : 0, "var-init");
          z(e);
        }, [K]);
        let ea = cc11001100_hook("ea", (0, x.useMemo)(() => {
            let {
              visibility: e,
              searchMsg: t
            } = cc11001100_hook("", d || {}, "var-init");
            return e ? t ? t.content : "正在搜索" : "正在输入";
          }, [d]), "var-init"),
          eo = cc11001100_hook("eo", (0, x.useMemo)(() => {
            var e, t;
            return (null === (e = cc11001100_hook("e", K[q], "assign")) || void 0 === e ? void 0 : e.contents) || (("close" !== k || (null === (t = cc11001100_hook("t", K[q], "assign")) || void 0 === t ? void 0 : t.voluntaryStop)) && k ? "" : L.BK);
          }, [K, q, k]), "var-init"),
          es = cc11001100_hook("es", () => {
            if (!Y[0]) return;
            let e = cc11001100_hook("e", "", "var-init");
            Y[0].contents || (e = cc11001100_hook("e", (0, C.V)(Y[0].mediaInfos), "assign"));
            let t = cc11001100_hook("t", N(Y[0].contents || ""), "var-init");
            em.Z.sendMsgToBot({
              botId: cc11001100_hook("botId", s, "object-key-init"),
              botAlias: cc11001100_hook("botAlias", (null == i ? void 0 : i.alias) || "", "object-key-init"),
              contents: cc11001100_hook("contents", Y[0].contents, "object-key-init"),
              querySentenceId: cc11001100_hook("querySentenceId", Y[0].sentenceId, "object-key-init"),
              strategy: {
                isRetry: cc11001100_hook("isRetry", !0, "object-key-init"),
                breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
              },
              turnId: cc11001100_hook("turnId", o, "object-key-init"),
              mediaInfos: cc11001100_hook("mediaInfos", Y[0].mediaInfos, "object-key-init"),
              turnIndex: cc11001100_hook("turnIndex", Y[0].turnIndex, "object-key-init"),
              rewriteQuery: cc11001100_hook("rewriteQuery", e, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
              uuid: cc11001100_hook("uuid", a, "object-key-init"),
              inputWay: cc11001100_hook("inputWay", L.zY.INPUT_WAY.PROACTIVE, "object-key-init"),
              customAttrs: {
                eventName: cc11001100_hook("eventName", "chat_conversation_refresh_btn_click", "object-key-init"),
                attrs: {
                  bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init"),
                  page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                  area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                  element: cc11001100_hook("element", L.fK.CHAT.area.CONVERSATION.element.REFRESH_BTN, "object-key-init"),
                  refer_page: cc11001100_hook("refer_page", S, "object-key-init")
                },
                input_way: cc11001100_hook("input_way", L.zY.INPUT_WAY.PROACTIVE, "object-key-init")
              },
              customParams: cc11001100_hook("customParams", t, "object-key-init")
            });
          }, "var-init"),
          ei = cc11001100_hook("ei", (0, x.useCallback)(e => {
            var t;
            let {
              eventName: n,
              bh: s,
              aSentence: i
            } = cc11001100_hook("", e, "var-init");
            M(n, {
              page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
              area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
              bhv_type: cc11001100_hook("bhv_type", s, "object-key-init"),
              conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
              q_sentence_id: cc11001100_hook("q_sentence_id", null === (t = cc11001100_hook("t", Y[0], "assign")) || void 0 === t ? void 0 : t.sentenceId, "object-key-init"),
              a_sentence_id: cc11001100_hook("a_sentence_id", i.sentenceId, "object-key-init"),
              content: cc11001100_hook("content", i.contents, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", S, "object-key-init")
            });
          }, [M, a, o, S, Y]), "var-init"),
          el = cc11001100_hook("el", (0, x.useCallback)(() => {
            let e = cc11001100_hook("e", K[q], "var-init"),
              t = cc11001100_hook("t", e.contents || "", "var-init"),
              n = cc11001100_hook("n", (0, f.l8)(t), "var-init");
            "" === n ? Q("复制失败，当前对话没有正文信息") : (U()(n), Q("复制成功"));
          }, [K, q, Q]), "var-init");
        return (0, x.useEffect)(() => {
          Z({
            conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
            index: cc11001100_hook("index", q, "object-key-init")
          });
        }, [q, a]), (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {
            ref: cc11001100_hook("ref", I, "object-key-init")
          }), (0, l.jsxs)("div", {
            className: cc11001100_hook("className", V().turn_container, "object-key-init"),
            children: cc11001100_hook("children", [Y[0] ? (0, l.jsx)(eg, {
              conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
              turnId: cc11001100_hook("turnId", o, "object-key-init"),
              botId: cc11001100_hook("botId", s, "object-key-init"),
              botInfo: cc11001100_hook("botInfo", i, "object-key-init"),
              contents: cc11001100_hook("contents", Y[0].contents, "object-key-init"),
              status: cc11001100_hook("status", O, "object-key-init"),
              mediaInfos: cc11001100_hook("mediaInfos", Y[0].mediaInfos, "object-key-init"),
              turnIndex: cc11001100_hook("turnIndex", Y[0].turnIndex, "object-key-init")
            }) : null, r ? H ? (0, l.jsx)("div", {
              className: cc11001100_hook("className", V().answer_container, "object-key-init"),
              children: cc11001100_hook("children", (0, l.jsxs)("div", {
                className: cc11001100_hook("className", V().answer_content, "object-key-init"),
                style: {
                  alignItems: cc11001100_hook("alignItems", "center", "object-key-init")
                },
                children: cc11001100_hook("children", [(0, l.jsx)("div", {
                  style: {
                    marginRight: cc11001100_hook("marginRight", 10, "object-key-init"),
                    lineHeight: cc11001100_hook("lineHeight", 1.8, "object-key-init")
                  },
                  children: cc11001100_hook("children", ea, "object-key-init")
                }), (0, l.jsx)(eO, {
                  type: cc11001100_hook("type", "text", "object-key-init")
                })], "object-key-init")
              }), "object-key-init")
            }) : K[q] && "timeout" !== b ? (0, l.jsx)(e_, {
              ...K[q],
              conversationId: a,
              botInfo: i,
              turnId: o,
              isLast: r,
              status: k,
              contents: eo,
              deleteTrace: ei,
              setBotDrawerOpen: y,
              sseStatus: b,
              children: W && !K[q].loading && Y[0] ? (0, l.jsxs)("div", {
                className: cc11001100_hook("className", V().operation_l, "object-key-init"),
                children: cc11001100_hook("children", [(0, l.jsxs)("div", {
                  className: cc11001100_hook("className", V().left_opts, "object-key-init"),
                  children: cc11001100_hook("children", [(0, l.jsxs)("div", {
                    className: cc11001100_hook("className", V().opt_btn, "object-key-init"),
                    onClick: cc11001100_hook("onClick", el, "object-key-init"),
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().copy_icon), "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", V().opt_name, "object-key-init"),
                      children: cc11001100_hook("children", "复制", "object-key-init")
                    })], "object-key-init")
                  }), (0, l.jsxs)("div", {
                    className: cc11001100_hook("className", V().opt_btn, "object-key-init"),
                    onClick: cc11001100_hook("onClick", es, "object-key-init"),
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().reload_btn), "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", V().opt_name, "object-key-init"),
                      children: cc11001100_hook("children", "重新生成", "object-key-init")
                    })], "object-key-init")
                  }), K.length > 1 ? (0, l.jsxs)(l.Fragment, {
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      className: cc11001100_hook("className", "", "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)(E.Z, {
                        title: cc11001100_hook("title", "上一条", "object-key-init"),
                        children: cc11001100_hook("children", (0, l.jsxs)("div", {
                          className: cc11001100_hook("className", 0 !== q ? V().opt_btn : V().opt_btn_disable, "object-key-init"),
                          onClick: cc11001100_hook("onClick", ee, "object-key-init"),
                          children: cc11001100_hook("children", [(0, l.jsx)("div", {
                            className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().left_btn), "object-key-init")
                          }), (0, l.jsx)("div", {
                            className: cc11001100_hook("className", "".concat(V().page_text), "object-key-init"),
                            children: cc11001100_hook("children", q + 1, "object-key-init")
                          })], "object-key-init")
                        }), "object-key-init")
                      }), "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().page_text), "object-key-init"),
                      children: cc11001100_hook("children", "/", "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", "", "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)(E.Z, {
                        title: cc11001100_hook("title", "下一条", "object-key-init"),
                        children: cc11001100_hook("children", (0, l.jsxs)("div", {
                          className: cc11001100_hook("className", q !== K.length - 1 ? V().opt_btn : V().opt_btn_disable, "object-key-init"),
                          style: {
                            padding: cc11001100_hook("padding", "0 6px 0 10px", "object-key-init")
                          },
                          onClick: cc11001100_hook("onClick", et, "object-key-init"),
                          children: cc11001100_hook("children", [(0, l.jsx)("div", {
                            className: cc11001100_hook("className", "".concat(V().page_text), "object-key-init"),
                            children: cc11001100_hook("children", K.length, "object-key-init")
                          }), (0, l.jsx)("div", {
                            className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().right_btn), "object-key-init")
                          })], "object-key-init")
                        }), "object-key-init")
                      }), "object-key-init")
                    })], "object-key-init")
                  }) : null, (0, l.jsx)(E.Z, {
                    title: cc11001100_hook("title", "更多操作", "object-key-init"),
                    children: cc11001100_hook("children", (0, l.jsx)("div", {
                      className: cc11001100_hook("className", V().opt_btn, "object-key-init"),
                      style: {
                        padding: cc11001100_hook("padding", "0 6px", "object-key-init")
                      },
                      onClick: cc11001100_hook("onClick", G, "object-key-init"),
                      children: cc11001100_hook("children", (0, l.jsx)("div", {
                        className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().more_opts_btn), "object-key-init")
                      }), "object-key-init")
                    }), "object-key-init")
                  })], "object-key-init")
                }), (0, l.jsxs)("div", {
                  className: cc11001100_hook("className", "".concat(V().right_opts, " ").concat(T ? V().more_opts_show : ""), "object-key-init"),
                  children: cc11001100_hook("children", [(0, l.jsxs)("div", {
                    className: cc11001100_hook("className", V().opt_btn, "object-key-init"),
                    onClick: cc11001100_hook("onClick", J, "object-key-init"),
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(1 === K[q].feedback ? V().like_act : V().like), "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().opt_name, " ").concat(1 === K[q].feedback ? V().like_name_act : ""), "object-key-init"),
                      children: cc11001100_hook("children", "喜欢", "object-key-init")
                    })], "object-key-init")
                  }), (0, l.jsxs)("div", {
                    className: cc11001100_hook("className", V().opt_btn, "object-key-init"),
                    onClick: cc11001100_hook("onClick", $, "object-key-init"),
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(2 === K[q].feedback ? V().dislike_act : V().dislike), "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", "".concat(V().opt_name, " ").concat(2 === K[q].feedback ? V().dislike_name_act : ""), "object-key-init"),
                      children: cc11001100_hook("children", "不喜欢", "object-key-init")
                    })], "object-key-init")
                  }), (0, l.jsxs)("div", {
                    className: cc11001100_hook("className", V().opt_btn, "object-key-init"),
                    onClick: cc11001100_hook("onClick", en, "object-key-init"),
                    children: cc11001100_hook("children", [(0, l.jsx)("div", {
                      style: {
                        width: cc11001100_hook("width", 20, "object-key-init"),
                        height: cc11001100_hook("height", 20, "object-key-init")
                      },
                      className: cc11001100_hook("className", "".concat(V().opt_btn_icon, " ").concat(V().delete_icon), "object-key-init")
                    }), (0, l.jsx)("div", {
                      className: cc11001100_hook("className", V().opt_name, "object-key-init"),
                      children: cc11001100_hook("children", "删除", "object-key-init")
                    })], "object-key-init")
                  })], "object-key-init")
                })], "object-key-init")
              }) : null
            }) : null : K[q] && "timeout" !== k ? (0, l.jsx)(e_, {
              ...K[q],
              conversationId: a,
              botInfo: i,
              turnId: o,
              isLast: !1,
              likeReport: X,
              status: k,
              contents: (null === (t = cc11001100_hook("t", K[q], "assign")) || void 0 === t ? void 0 : t.contents) || L.BK,
              handleDeleteTurn: en,
              hasOperation: !0,
              deleteTrace: ei,
              setBotDrawerOpen: y,
              sseStatus: b
            }) : null], "object-key-init")
          })], "object-key-init")
        });
      }), "var-init"),
      eY = cc11001100_hook("eY", x.memo(e => {
        let {
            turnList: t,
            lastTurnId: n,
            conversationId: a,
            botId: o,
            botInfo: s,
            buildSse: i,
            auth: r,
            appConfig: c,
            isLastConversation: _,
            webSearch: d,
            lastedTurnIsNew: u,
            sseStatus: p
          } = cc11001100_hook("", e, "var-init"),
          [m, v] = cc11001100_hook("", (0, x.useState)(""), "var-init"),
          [h, f] = cc11001100_hook("", (0, x.useState)({
            turnId: cc11001100_hook("turnId", -1, "object-key-init"),
            show: cc11001100_hook("show", !1, "object-key-init")
          }), "var-init"),
          [b, g] = cc11001100_hook("", (0, x.useState)(!1), "var-init"),
          k = cc11001100_hook("k", (0, x.useCallback)(() => {
            f({
              turnId: cc11001100_hook("turnId", -1, "object-key-init"),
              show: cc11001100_hook("show", !1, "object-key-init")
            });
          }, [f]), "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [t ? t.map((e, t) => e && "delete" !== e.status ? (0, l.jsx)(eH, {
            ...e,
            conversationId: a,
            botId: o,
            botInfo: s,
            auth: r,
            buildSse: i,
            isLast: _ && 0 === t,
            editingTurnId: m,
            setEditingTurnId: v,
            appConfig: c,
            setTurnFeedback: f,
            webSearch: d,
            lastedTurnIsNew: u,
            sseStatus: p,
            setBotDrawerOpen: g
          }, "".concat(null == e ? void 0 : e.turnId)) : null) : null, (0, l.jsx)(eU, {
            show: cc11001100_hook("show", h.show, "object-key-init"),
            turnId: cc11001100_hook("turnId", h.turnId, "object-key-init"),
            botId: cc11001100_hook("botId", o, "object-key-init"),
            closeModal: cc11001100_hook("closeModal", k, "object-key-init"),
            appConfig: cc11001100_hook("appConfig", c, "object-key-init")
          }), (0, l.jsx)(eA, {
            open: cc11001100_hook("open", b, "object-key-init"),
            botInfo: cc11001100_hook("botInfo", s, "object-key-init"),
            onClose: cc11001100_hook("onClose", () => g(!1), "object-key-init")
          })], "object-key-init")
        });
      }), "var-init"),
      eV = cc11001100_hook("eV", n(90328), "var-init"),
      eK = cc11001100_hook("eK", n.n(eV), "var-init"),
      eq = cc11001100_hook("eq", e => {
        let {
            appConfig: t
          } = cc11001100_hook("", e, "var-init"),
          {
            deleteTurnFromConv: n,
            deleteTurnModalShow: a,
            setDeleteTurnModalShow: o,
            deleteTurnInfo: s,
            deleteSuggestByConversationId: i,
            currentConverTurns: r,
            changeChatUrl: _
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          {
            refreshChatList: d,
            deleteConv: p
          } = cc11001100_hook("", (0, c.useChat)(), "var-init"),
          {
            track: v
          } = cc11001100_hook("", (0, m.useTrack)(), "var-init"),
          [h, f] = cc11001100_hook("", (0, x.useState)(!1), "var-init"),
          b = cc11001100_hook("b", (0, g.useRouter)(), "var-init"),
          k = cc11001100_hook("k", (0, x.useRef)(null), "var-init"),
          C = cc11001100_hook("C", (0, x.useCallback)(e => {
            var t;
            null === (t = cc11001100_hook("t", k.current, "assign")) || void 0 === t || t.info(e);
          }, [k]), "var-init"),
          y = cc11001100_hook("y", (0, x.useCallback)(() => {
            let {
              trackParams: e
            } = cc11001100_hook("", s, "var-init");
            o(!1), v("chat_delete_turn_click", {
              ...e,
              bhv_type: "click",
              action: "cancel"
            });
          }, [o, s]), "var-init"),
          j = cc11001100_hook("j", (0, x.useCallback)(async () => {
            let {
              conversationId: e,
              turnId: a,
              isLastTurn: o,
              trackParams: l
            } = cc11001100_hook("", s, "var-init");
            if (!e || !a) return;
            f(!0), v("chat_delete_turn_click", {
              ...l,
              bhv_type: "click",
              action: "confirm"
            });
            let c = cc11001100_hook("c", await (0, R.oY)({
              conversationId: cc11001100_hook("conversationId", e, "object-key-init"),
              turnId: cc11001100_hook("turnId", a, "object-key-init")
            }), "var-init");
            if (f(!1), c.code === L.n8.SUCCESS) {
              let s = cc11001100_hook("s", r(e), "var-init");
              if (s < 2) {
                let n = cc11001100_hook("n", await (0, R.jS)(t.bot.id, e), "var-init");
                n.code === L.n8.SUCCESS && p(e), b.replace("/chat/".concat(t.bot.id)), _("");
              }
              d(), n(e, a), o && i(e), v("chat_delete_turn_result", {
                ...l,
                bhv_type: "click",
                result: !0
              });
            } else C("删除对话失败，请稍后重试。"), v("chat_delete_turn_result", {
              ...l,
              bhv_type: "click",
              result: !1
            });
            y();
          }, [s, i, n, d, p, b, t, r, C, y, f]), "var-init");
        return (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsx)(B.Z, {
            ref: cc11001100_hook("ref", k, "object-key-init")
          }), (0, l.jsx)(O.Z, {
            transitionName: cc11001100_hook("transitionName", eK().trans, "object-key-init"),
            style: {
              pointerEvents: cc11001100_hook("pointerEvents", "auto", "object-key-init"),
              top: cc11001100_hook("top", "calc(50vh - 280px)", "object-key-init")
            },
            keyboard: cc11001100_hook("keyboard", !0, "object-key-init"),
            maskClosable: cc11001100_hook("maskClosable", !0, "object-key-init"),
            onCancel: cc11001100_hook("onCancel", y, "object-key-init"),
            onOk: cc11001100_hook("onOk", j, "object-key-init"),
            title: cc11001100_hook("title", "是否删除这组消息", "object-key-init"),
            content: cc11001100_hook("content", (0, l.jsxs)("div", {
              className: cc11001100_hook("className", eK().modal, "object-key-init"),
              children: cc11001100_hook("children", [(0, l.jsx)("div", {
                className: cc11001100_hook("className", eK().modal_content, "object-key-init"),
                children: cc11001100_hook("children", "当前的回答和问题会一起被删除！", "object-key-init")
              }), (0, l.jsxs)("div", {
                className: cc11001100_hook("className", eK().btn_container, "object-key-init"),
                children: cc11001100_hook("children", [(0, l.jsx)(Z.Z, {
                  className: cc11001100_hook("className", eK().modal_cancel, "object-key-init"),
                  onClick: cc11001100_hook("onClick", y, "object-key-init"),
                  children: cc11001100_hook("children", "不删除", "object-key-init")
                }), (0, l.jsx)(Z.Z, {
                  type: cc11001100_hook("type", "primary", "object-key-init"),
                  loading: cc11001100_hook("loading", h, "object-key-init"),
                  className: cc11001100_hook("className", eK().modal_confirm, "object-key-init"),
                  onClick: cc11001100_hook("onClick", j, "object-key-init"),
                  children: cc11001100_hook("children", "删除", "object-key-init")
                })], "object-key-init")
              })], "object-key-init")
            }), "object-key-init"),
            open: cc11001100_hook("open", a, "object-key-init")
          })], "object-key-init")
        });
      }, "var-init"),
      ez = cc11001100_hook("ez", n(77064), "var-init"),
      eW = cc11001100_hook("eW", n.n(ez), "var-init"),
      eG = cc11001100_hook("eG", e => {
        let {
            data: t,
            show: n,
            botId: a,
            botInfo: o,
            lastedTurnIsNew: s,
            sseStatus: i,
            lastTurn: r
          } = cc11001100_hook("", e, "var-init"),
          {
            conversationId: c,
            turnId: _,
            contents: d,
            qSentenceId: p,
            aSentenceId: v,
            customAttrs: h
          } = cc11001100_hook("", t, "var-init"),
          f = cc11001100_hook("f", (0, x.useRef)(null), "var-init"),
          {
            track: b
          } = cc11001100_hook("", (0, m.useTrack)(), "var-init"),
          {
            checkedMenuItems: k
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          y = cc11001100_hook("y", (0, x.useMemo)(() => n && d && "close" === i, [n, d, _, v, i]), "var-init"),
          j = cc11001100_hook("j", (0, x.useMemo)(() => {
            let e = cc11001100_hook("e", "generateEnd" === i, "var-init");
            return e;
          }, [i, _, v]), "var-init"),
          N = cc11001100_hook("N", (0, g.useSearchParams)(), "var-init"),
          I = cc11001100_hook("I", N.get("inner_refer") || "history", "var-init"),
          w = cc11001100_hook("w", (0, x.useMemo)(() => {
            var e;
            return (null == r ? void 0 : null === (e = cc11001100_hook("e", r.sentenceList, "assign")) || void 0 === e ? void 0 : e.filter(e => 1 === e.direction)) || [];
          }, [r]), "var-init"),
          S = cc11001100_hook("S", e => e && e.capability, "var-init"),
          T = cc11001100_hook("T", (0, x.useCallback)((e, t) => {
            let n = cc11001100_hook("n", S(e), "var-init");
            if (n) {
              var i;
              let t = cc11001100_hook("t", k || [], "var-init"),
                n = cc11001100_hook("n", "", "var-init");
              w[0].contents || (n = cc11001100_hook("n", (0, C.V)(w[0].mediaInfos), "assign")), em.Z.sendMsgToBot({
                botId: cc11001100_hook("botId", a, "object-key-init"),
                botAlias: cc11001100_hook("botAlias", (null == o ? void 0 : o.alias) || "", "object-key-init"),
                rewriteQuery: cc11001100_hook("rewriteQuery", n, "object-key-init"),
                mediaInfos: cc11001100_hook("mediaInfos", w[0].mediaInfos, "object-key-init"),
                conversationId: cc11001100_hook("conversationId", c, "object-key-init"),
                contents: cc11001100_hook("contents", (null === (i = cc11001100_hook("i", w[0], "assign")) || void 0 === i ? void 0 : i.contents) || "", "object-key-init"),
                strategy: {
                  isRetry: cc11001100_hook("isRetry", !1, "object-key-init"),
                  breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
                },
                uuid: cc11001100_hook("uuid", c, "object-key-init"),
                inputWay: cc11001100_hook("inputWay", L.zY.INPUT_WAY.RELATIVED, "object-key-init"),
                capabilities: cc11001100_hook("capabilities", [...t, e], "object-key-init"),
                customAttrs: {
                  input_way: cc11001100_hook("input_way", L.zY.INPUT_WAY.RELATIVED, "object-key-init")
                }
              });
            } else em.Z.sendMsgToBot({
              botId: cc11001100_hook("botId", a, "object-key-init"),
              botAlias: cc11001100_hook("botAlias", (null == o ? void 0 : o.alias) || "", "object-key-init"),
              conversationId: cc11001100_hook("conversationId", c, "object-key-init"),
              contents: cc11001100_hook("contents", e, "object-key-init"),
              strategy: {
                isRetry: cc11001100_hook("isRetry", !1, "object-key-init"),
                breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
              },
              uuid: cc11001100_hook("uuid", c, "object-key-init"),
              inputWay: cc11001100_hook("inputWay", L.zY.INPUT_WAY.RELATIVED, "object-key-init"),
              capabilities: cc11001100_hook("capabilities", k || [], "object-key-init"),
              customAttrs: {
                input_way: cc11001100_hook("input_way", L.zY.INPUT_WAY.RELATIVED, "object-key-init")
              }
            });
            b("chat_conversation_related_question_click", {
              page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
              area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
              element: cc11001100_hook("element", L.fK.CHAT.area.CONVERSATION.element.RELATED_QUESTION, "object-key-init"),
              index: cc11001100_hook("index", "".concat(t), "object-key-init"),
              bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init"),
              conversation_id: cc11001100_hook("conversation_id", c, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", _, "object-key-init"),
              a_sentence_id: cc11001100_hook("a_sentence_id", v, "object-key-init"),
              q_sentence_id: cc11001100_hook("q_sentence_id", p, "object-key-init"),
              content: cc11001100_hook("content", e, "object-key-init"),
              input_way: cc11001100_hook("input_way", null == h ? void 0 : h.input_way, "object-key-init"),
              is_new_start: cc11001100_hook("is_new_start", s, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", I, "object-key-init")
            });
          }, [a, null == o ? void 0 : o.alias, h, w, b, c, _, v, p, s, I, k]), "var-init"),
          E = cc11001100_hook("E", (0, x.useCallback)((e, t) => {
            let n = cc11001100_hook("n", e[0].isIntersecting, "var-init");
            n && d.forEach((e, t) => {
              b("chat_conversation_related_question_exposure", {
                page: cc11001100_hook("page", L.fK.CHAT.key, "object-key-init"),
                area: cc11001100_hook("area", L.fK.CHAT.area.CONVERSATION.key, "object-key-init"),
                element: cc11001100_hook("element", L.fK.CHAT.area.CONVERSATION.element.RELATED_QUESTION, "object-key-init"),
                index: cc11001100_hook("index", "".concat(t), "object-key-init"),
                bhv_type: cc11001100_hook("bhv_type", "exposure", "object-key-init"),
                conversation_id: cc11001100_hook("conversation_id", c, "object-key-init"),
                turn_id: cc11001100_hook("turn_id", _, "object-key-init"),
                a_sentence_id: cc11001100_hook("a_sentence_id", v, "object-key-init"),
                q_sentence_id: cc11001100_hook("q_sentence_id", p, "object-key-init"),
                content: cc11001100_hook("content", e, "object-key-init"),
                input_way: cc11001100_hook("input_way", null == h ? void 0 : h.input_way, "object-key-init"),
                is_new_start: cc11001100_hook("is_new_start", s, "object-key-init"),
                refer_page: cc11001100_hook("refer_page", I, "object-key-init")
              });
            });
          }, [h, b, c, _, v, p, I, s, d]), "var-init");
        return (0, x.useEffect)(() => {
          let e = cc11001100_hook("e", new IntersectionObserver(E), "var-init");
          return f.current && e.observe(f.current), () => e.disconnect();
        }, [y, f, d]), (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [y ? (0, l.jsx)("div", {
            ref: cc11001100_hook("ref", f, "object-key-init"),
            className: cc11001100_hook("className", eW().container, "object-key-init"),
            children: cc11001100_hook("children", d.map((e, t) => (0, l.jsx)("div", {
              onClick: cc11001100_hook("onClick", () => {
                T(e, t);
              }, "object-key-init"),
              className: cc11001100_hook("className", "".concat(eW().suggested_q, " suggestion_itm"), "object-key-init"),
              children: cc11001100_hook("children", S(e) ? (0, l.jsxs)("div", {
                className: cc11001100_hook("className", eW().suggested_r1, "object-key-init"),
                children: cc11001100_hook("children", [(0, l.jsx)("img", {
                  className: cc11001100_hook("className", eW().icon, "object-key-init"),
                  src: cc11001100_hook("src", null == e ? void 0 : e.botIcon, "object-key-init"),
                  alt: cc11001100_hook("alt", "", "object-key-init")
                }), (0, l.jsx)("div", {
                  className: cc11001100_hook("className", eW().text, "object-key-init"),
                  children: cc11001100_hook("children", null == e ? void 0 : e.botDesc, "object-key-init")
                })], "object-key-init")
              }) : (0, l.jsx)(es.U, {
                content: cc11001100_hook("content", e, "object-key-init")
              }), "object-key-init")
            }, "".concat(e, "_").concat(t))), "object-key-init")
          }) : null, j ? (0, l.jsx)("div", {
            className: cc11001100_hook("className", eW().container, "object-key-init"),
            children: cc11001100_hook("children", (0, l.jsx)("div", {
              className: cc11001100_hook("className", eW().loading_container, "object-key-init"),
              children: cc11001100_hook("children", (0, l.jsx)(eO, {
                type: cc11001100_hook("type", "text", "object-key-init")
              }), "object-key-init")
            }), "object-key-init")
          }) : null], "object-key-init")
        });
      }, "var-init"),
      eQ = cc11001100_hook("eQ", x.memo((e, t) => {
        let {
            botId: n,
            botInfo: a,
            appConfig: o,
            auth: s,
            conversationId: i
          } = cc11001100_hook("", e, "var-init"),
          {
            suggestedQuestion: r,
            conversations: c,
            suggestedQuestionShow: _,
            webSearch: d,
            initOneConversation: p,
            noMore: m,
            getMoreHistoryConversation: v
          } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
          h = cc11001100_hook("h", (0, x.useMemo)(() => c[i], [c, i]), "var-init"),
          f = cc11001100_hook("f", (0, x.useMemo)(() => {
            if (!h) return {};
            {
              let {
                turnList: e
              } = cc11001100_hook("", h, "var-init");
              return e[0];
            }
          }, [h]), "var-init"),
          b = cc11001100_hook("b", (0, x.useMemo)(() => {
            if (!h) return "";
            {
              var e;
              let {
                turnList: t
              } = cc11001100_hook("", h, "var-init");
              return null === (e = cc11001100_hook("e", t[0], "assign")) || void 0 === e ? void 0 : e.turnId;
            }
          }, [h]), "var-init"),
          g = cc11001100_hook("g", (0, x.useMemo)(() => !m[i], [m, i]), "var-init"),
          k = cc11001100_hook("k", (0, x.useMemo)(() => {
            if (h) {
              let {
                turnList: e
              } = cc11001100_hook("", h, "var-init");
              return e.length;
            }
            return 0;
          }, [h]), "var-init"),
          C = cc11001100_hook("C", (0, x.useMemo)(() => {
            let e = cc11001100_hook("e", c[i], "var-init");
            return null == e ? void 0 : e.status;
          }, [c, i]), "var-init"),
          y = cc11001100_hook("y", (0, x.useMemo)(() => r[i] || {}, [i, r]), "var-init"),
          j = cc11001100_hook("j", (0, x.useMemo)(() => _[i], [i, _]), "var-init"),
          w = cc11001100_hook("w", (0, x.useMemo)(() => {
            if (h) {
              let {
                turnList: e
              } = cc11001100_hook("", h, "var-init");
              return e.length < 2;
            }
            return !0;
          }, [h]), "var-init"),
          T = cc11001100_hook("T", (0, x.useMemo)(() => d[i], [d, i]), "var-init"),
          E = cc11001100_hook("E", (0, x.useRef)(null), "var-init");
        (0, x.useEffect)(() => {
          h && "before" === h.status && setTimeout(M, 300);
        }, [h]);
        let A = cc11001100_hook("A", (0, x.useCallback)(async () => v({
            conversationId: cc11001100_hook("conversationId", i, "object-key-init"),
            botId: cc11001100_hook("botId", n, "object-key-init")
          }), [i, v, n]), "var-init"),
          M = cc11001100_hook("M", () => {
            E && E.current.scrollIntoView({
              behavior: cc11001100_hook("behavior", "smooth", "object-key-init"),
              block: cc11001100_hook("block", "nearest", "object-key-init"),
              inline: cc11001100_hook("inline", "start", "object-key-init")
            });
          }, "var-init");
        return (0, x.useEffect)(() => {
          (async function () {
            i && p({
              conversationId: cc11001100_hook("conversationId", i, "object-key-init"),
              botId: cc11001100_hook("botId", n, "object-key-init")
            });
          })();
        }, [n, i]), (0, l.jsxs)(l.Fragment, {
          children: cc11001100_hook("children", [(0, l.jsxs)("div", {
            id: cc11001100_hook("id", "scrollableChatContentDiv", "object-key-init"),
            style: {
              overflow: cc11001100_hook("overflow", "auto", "object-key-init"),
              display: cc11001100_hook("display", "flex", "object-key-init"),
              flexDirection: cc11001100_hook("flexDirection", "column-reverse", "object-key-init")
            },
            className: cc11001100_hook("className", S()["infinite-scroll-component"], "object-key-init"),
            children: cc11001100_hook("children", [(0, l.jsx)(eq, {
              appConfig: cc11001100_hook("appConfig", o, "object-key-init")
            }), (0, l.jsxs)(I.Z, {
              scrollableTarget: cc11001100_hook("scrollableTarget", "scrollableChatContentDiv", "object-key-init"),
              dataLength: cc11001100_hook("dataLength", k, "object-key-init"),
              next: cc11001100_hook("next", A, "object-key-init"),
              hasMore: cc11001100_hook("hasMore", g, "object-key-init"),
              loader: cc11001100_hook("loader", (0, l.jsx)("div", {
                style: {
                  margin: cc11001100_hook("margin", "20px", "object-key-init"),
                  display: cc11001100_hook("display", "flex", "object-key-init"),
                  justifyContent: cc11001100_hook("justifyContent", "center", "object-key-init")
                },
                children: cc11001100_hook("children", (0, l.jsx)(N, {}), "object-key-init")
              }), "object-key-init"),
              pullDownToRefreshThreshold: cc11001100_hook("pullDownToRefreshThreshold", 50, "object-key-init"),
              style: {
                display: cc11001100_hook("display", "flex", "object-key-init"),
                flexDirection: cc11001100_hook("flexDirection", "column-reverse", "object-key-init")
              },
              inverse: cc11001100_hook("inverse", !0, "object-key-init"),
              children: cc11001100_hook("children", [(0, l.jsx)("div", {
                ref: cc11001100_hook("ref", E, "object-key-init")
              }), h ? (0, l.jsxs)(l.Fragment, {
                children: cc11001100_hook("children", [(0, l.jsx)(eG, {
                  botId: cc11001100_hook("botId", n, "object-key-init"),
                  botInfo: cc11001100_hook("botInfo", a, "object-key-init"),
                  data: cc11001100_hook("data", y, "object-key-init"),
                  show: cc11001100_hook("show", j, "object-key-init"),
                  lastedTurnIsNew: cc11001100_hook("lastedTurnIsNew", w, "object-key-init"),
                  sseStatus: cc11001100_hook("sseStatus", C, "object-key-init"),
                  lastTurn: cc11001100_hook("lastTurn", f, "object-key-init")
                }), (0, l.jsx)(eY, {
                  ...h,
                  botId: n,
                  botInfo: a,
                  lastTurnId: b,
                  auth: s,
                  appConfig: o,
                  webSearch: T,
                  isLastConversation: !0,
                  sseStatus: C
                }, h.conversationId)], "object-key-init")
              }) : null], "object-key-init")
            })], "object-key-init")
          }), (0, l.jsx)(eN, {
            conversation: cc11001100_hook("conversation", h, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", i, "object-key-init")
          })], "object-key-init")
        });
      }), "var-init"),
      eX = cc11001100_hook("eX", n(69549), "var-init"),
      eJ = cc11001100_hook("eJ", n.n(eX), "var-init");
    function e$(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          auth: t,
          botId: n,
          botInfo: a,
          appConfig: o,
          recommend: i
        } = cc11001100_hook("", e, "var-init"),
        {
          chatBot: y,
          mergeBotInfo: j,
          botInfoMapRef: N
        } = cc11001100_hook("", (0, c.useChat)(), "var-init"),
        {
          setCommonData: I
        } = cc11001100_hook("", (0, m.useTrack)(), "var-init"),
        {
          showRightSide: w,
          setShowRightSide: S
        } = cc11001100_hook("", (0, _.useMobileTrans)(), "var-init"),
        {
          currentConversationId: T,
          nextConversationId: E,
          setCurrentBotId: A
        } = cc11001100_hook("", (0, u.useConver)(), "var-init"),
        {
          checkRealLogin: M
        } = cc11001100_hook("", (0, p.useGlobalExecuteState)(), "var-init"),
        F = cc11001100_hook("F", (0, x.useRef)(null), "var-init"),
        P = cc11001100_hook("P", (0, x.useMemo)(() => y ? y.name : "", [y]), "var-init"),
        {
          isDebug: R
        } = cc11001100_hook("", (0, h.qi)(), "var-init"),
        D = cc11001100_hook("D", (0, x.useMemo)(() => a || N.current[n] || (0, f.Nx)({
          id: cc11001100_hook("id", Number(n), "object-key-init"),
          state: cc11001100_hook("state", R ? s.ON_LINE : s.OFF_LINE, "object-key-init"),
          avatar: cc11001100_hook("avatar", "", "object-key-init")
        }), [n, N, a, R]), "var-init"),
        {
          initMenuItems: U,
          isUploadFileConverType: Z,
          isUploadImageConverType: B
        } = cc11001100_hook("", (0, v.useConverMenuContext)(), "var-init");
      (0, x.useEffect)(() => {
        var e;
        let t = cc11001100_hook("t", (null == D ? void 0 : null === (e = cc11001100_hook("e", D.extra, "assign")) || void 0 === e ? void 0 : e.multimodalCapabilities) || [], "var-init");
        U(t);
      }, [D, U]), (0, x.useEffect)(() => {
        A("".concat(D.id || ""));
      }, [D, A]);
      let O = cc11001100_hook("O", (0, x.useMemo)(() => (null == D ? void 0 : D.state) === 1, [D]), "var-init");
      (0, x.useEffect)(() => {
        let e = cc11001100_hook("e", a ? {
          [a.id]: cc11001100_hook(a.id, a, "object-key-init")
        } : {}, "var-init");
        j(e);
      }, [a, j]), (0, x.useEffect)(() => {
        I({
          bot_id: cc11001100_hook("bot_id", n, "object-key-init"),
          bot_name: cc11001100_hook("bot_name", D.name, "object-key-init")
        });
      }, [n, D, I]), (0, x.useEffect)(() => {
        if (S(), !T) {
          var e;
          null === (e = cc11001100_hook("e", F.current, "assign")) || void 0 === e || e.focus();
        }
      }, [T]);
      let L = cc11001100_hook("L", (0, g.useRouter)(), "var-init");
      return (0, l.jsxs)(b.V9, {
        hashPriority: cc11001100_hook("hashPriority", "high", "object-key-init"),
        transformers: cc11001100_hook("transformers", [b.IJ], "object-key-init"),
        children: cc11001100_hook("children", [(0, l.jsx)(l.Fragment, {
          children: cc11001100_hook("children", (0, l.jsx)("div", {
            className: cc11001100_hook("className", "".concat(eJ().inlet, " ").concat(T ? eJ().inlet_vis : ""), "object-key-init"),
            onClick: cc11001100_hook("onClick", e => {
              e.stopPropagation(), L.push("/chat/downloadPage");
            }, "object-key-init")
          }), "object-key-init")
        }), (0, l.jsx)(d.Z, {
          disabled: cc11001100_hook("disabled", !0, "object-key-init"),
          visible: cc11001100_hook("visible", !1, "object-key-init"),
          conversationId: cc11001100_hook("conversationId", T, "object-key-init"),
          nextConversationId: cc11001100_hook("nextConversationId", E, "object-key-init"),
          preCheck: cc11001100_hook("preCheck", M, "object-key-init"),
          uploadType: cc11001100_hook("uploadType", "file", "object-key-init"),
          children: cc11001100_hook("children", (0, l.jsxs)("div", {
            className: cc11001100_hook("className", eJ().page_container, "object-key-init"),
            "data-sidebarvisible": cc11001100_hook("data-sidebarvisible", w, "object-key-init"),
            children: cc11001100_hook("children", [O && (0, l.jsx)("div", {
              className: cc11001100_hook("className", eJ().bot_offline_mask, "object-key-init"),
              children: cc11001100_hook("children", (0, l.jsxs)("div", {
                className: cc11001100_hook("className", eJ().bot_offline_content, "object-key-init"),
                children: cc11001100_hook("children", [(0, l.jsx)("div", {
                  className: cc11001100_hook("className", eJ().bot_offline_tip, "object-key-init"),
                  children: cc11001100_hook("children", "当前智能体已下线，看看其它智能体吧", "object-key-init")
                }), (0, l.jsxs)("div", {
                  className: cc11001100_hook("className", "".concat(eJ().bot_offline_ctn, " custom_button"), "object-key-init"),
                  onClick: cc11001100_hook("onClick", () => {
                    L.push("/chat/bots");
                  }, "object-key-init"),
                  children: cc11001100_hook("children", [(0, l.jsx)("div", {
                    className: cc11001100_hook("className", eJ().backdrop, "object-key-init")
                  }), (0, l.jsx)("div", {
                    className: cc11001100_hook("className", eJ().footer_dwn_btn, "object-key-init"),
                    children: cc11001100_hook("children", (0, l.jsx)("div", {
                      children: cc11001100_hook("children", "查看全部智能体", "object-key-init")
                    }), "object-key-init")
                  })], "object-key-init")
                })], "object-key-init")
              }), "object-key-init")
            }), (0, l.jsx)(r.Z, {
              title: cc11001100_hook("title", P, "object-key-init")
            }), T ? (0, l.jsxs)(l.Fragment, {
              children: cc11001100_hook("children", [(0, l.jsx)(eQ, {
                botId: cc11001100_hook("botId", n, "object-key-init"),
                botInfo: cc11001100_hook("botInfo", D, "object-key-init"),
                appConfig: cc11001100_hook("appConfig", o, "object-key-init"),
                auth: cc11001100_hook("auth", t, "object-key-init"),
                conversationId: cc11001100_hook("conversationId", T, "object-key-init")
              }), (0, l.jsx)(C.Z, {
                conversationId: cc11001100_hook("conversationId", T, "object-key-init"),
                botId: cc11001100_hook("botId", n, "object-key-init"),
                botInfo: cc11001100_hook("botInfo", D, "object-key-init"),
                appConfig: cc11001100_hook("appConfig", o, "object-key-init"),
                isNewConversation: cc11001100_hook("isNewConversation", !1, "object-key-init"),
                auth: cc11001100_hook("auth", t, "object-key-init"),
                showBottomMsg: cc11001100_hook("showBottomMsg", !1, "object-key-init")
              })], "object-key-init")
            }) : (0, l.jsx)("div", {
              className: cc11001100_hook("className", "".concat(eJ().empty_content, " ").concat(eJ().empty_content_vis), "object-key-init"),
              children: cc11001100_hook("children", (0, l.jsx)(k.Z, {
                botId: cc11001100_hook("botId", n, "object-key-init"),
                botInfo: cc11001100_hook("botInfo", D, "object-key-init"),
                appConfig: cc11001100_hook("appConfig", o, "object-key-init"),
                recommend: cc11001100_hook("recommend", i, "object-key-init"),
                nextConvId: cc11001100_hook("nextConvId", E, "object-key-init"),
                children: cc11001100_hook("children", (0, l.jsx)(C.Z, {
                  ref: cc11001100_hook("ref", F, "object-key-init"),
                  conversationId: cc11001100_hook("conversationId", E, "object-key-init"),
                  newConv: cc11001100_hook("newConv", !0, "object-key-init"),
                  botId: cc11001100_hook("botId", n, "object-key-init"),
                  botInfo: cc11001100_hook("botInfo", D, "object-key-init"),
                  isNewConversation: cc11001100_hook("isNewConversation", !0, "object-key-init"),
                  appConfig: cc11001100_hook("appConfig", o, "object-key-init"),
                  auth: cc11001100_hook("auth", t, "object-key-init"),
                  showBottomMsg: cc11001100_hook("showBottomMsg", !0, "object-key-init")
                }), "object-key-init")
              }), "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        })], "object-key-init")
      });
    }
  },
  17894: function (e, t, n) {
    "use strict";

    n.d(t, {
      QO: function () {
        return c;
      },
      eM: function () {
        return _;
      },
      kQ: function () {
        return r;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(72467), "var-init"),
      s = cc11001100_hook("s", n.n(o), "var-init"),
      i = cc11001100_hook("i", n(7866), "var-init"),
      l = cc11001100_hook("l", n.n(i), "var-init");
    let r = cc11001100_hook("r", (0, a.jsxs)("div", {
        className: cc11001100_hook("className", s().code_container, "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsx)("div", {
          className: cc11001100_hook("className", s().ios_code, "object-key-init")
        }), (0, a.jsx)("div", {
          className: cc11001100_hook("className", s().code_msg, "object-key-init"),
          children: cc11001100_hook("children", "扫码下载 App", "object-key-init")
        })], "object-key-init")
      }), "var-init"),
      c = cc11001100_hook("c", () => (0, a.jsxs)("div", {
        className: cc11001100_hook("className", l().code_container, "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsx)("div", {
          className: cc11001100_hook("className", l().ios_code, "object-key-init")
        }), (0, a.jsx)("div", {
          className: cc11001100_hook("className", l().code_msg, "object-key-init"),
          children: cc11001100_hook("children", "扫码下载 App", "object-key-init")
        })], "object-key-init")
      }), "var-init"),
      _ = cc11001100_hook("_", () => (0, a.jsxs)("div", {
        className: cc11001100_hook("className", l().code_container, "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsx)("div", {
          className: cc11001100_hook("className", l().join_group, "object-key-init")
        }), (0, a.jsx)("div", {
          className: cc11001100_hook("className", l().code_msg, "object-key-init"),
          children: cc11001100_hook("children", "微信扫码加入社群", "object-key-init")
        })], "object-key-init")
      }), "var-init");
  },
  69494: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(52802), "var-init"),
      s = cc11001100_hook("s", n.n(o), "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
        children: t,
        className: n,
        type: o,
        disabled: i,
        onClick: l,
        loading: r
      } = cc11001100_hook("", e, "var-init");
      return (0, a.jsxs)("div", {
        className: cc11001100_hook("className", "".concat(s().btn, " ").concat("primary" === o ? i ? s().disabled : s().enable : "", " ").concat(n), "object-key-init"),
        onClick: cc11001100_hook("onClick", l, "object-key-init"),
        children: cc11001100_hook("children", [r ? (0, a.jsx)("span", {
          className: cc11001100_hook("className", s().btn_loading, "object-key-init")
        }) : null, t], "object-key-init")
      });
    }, "assign");
  },
  92432: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      default: function () {
        return j;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(13987), "var-init"),
      s = cc11001100_hook("s", n(8784), "var-init"),
      i = cc11001100_hook("i", n(2265), "var-init"),
      l = cc11001100_hook("l", n(26531), "var-init"),
      r = cc11001100_hook("r", n.n(l), "var-init"),
      c = cc11001100_hook("c", e => {
        let {
          children: t,
          className: n,
          width: i = 520,
          closable: l = !0,
          maskClosable: c = !0,
          mask: _ = !1,
          ...d
        } = cc11001100_hook("", e, "var-init");
        return (0, a.jsx)("div", {
          className: cc11001100_hook("className", r().drawer, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)(s.Z, {
            className: cc11001100_hook("className", "".concat(r().drawer_inner, " ").concat(n || ""), "object-key-init"),
            width: cc11001100_hook("width", i, "object-key-init"),
            closable: cc11001100_hook("closable", l, "object-key-init"),
            maskClosable: cc11001100_hook("maskClosable", c, "object-key-init"),
            mask: cc11001100_hook("mask", _, "object-key-init"),
            getContainer: cc11001100_hook("getContainer", e => (null == e ? void 0 : e.parentNode) || !1, "object-key-init"),
            closeIcon: cc11001100_hook("closeIcon", (0, a.jsx)(o.Z, {
              className: cc11001100_hook("className", r().close_btn, "object-key-init"),
              name: cc11001100_hook("name", "close", "object-key-init")
            }), "object-key-init"),
            ...d,
            children: t
          }), "object-key-init")
        });
      }, "var-init"),
      _ = cc11001100_hook("_", n(57159), "var-init"),
      d = cc11001100_hook("d", n(47964), "var-init"),
      u = cc11001100_hook("u", n(16691), "var-init"),
      p = cc11001100_hook("p", n.n(u), "var-init"),
      m = cc11001100_hook("m", n(10390), "var-init"),
      v = cc11001100_hook("v", n(93127), "var-init"),
      h = cc11001100_hook("h", n(51842), "var-init"),
      f = cc11001100_hook("f", n(20471), "var-init"),
      b = cc11001100_hook("b", n.n(f), "var-init");
    let g = cc11001100_hook("g", e => {
        let {
          hostLogo: t,
          hostName: n,
          title: o,
          url: s
        } = cc11001100_hook("", e, "var-init");
        return (0, a.jsx)(h.Z, {
          detail: cc11001100_hook("detail", e, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)("div", {
            className: cc11001100_hook("className", null === b() || void 0 === b() ? void 0 : b().card, "object-key-init"),
            onClick: cc11001100_hook("onClick", () => {
              window.open(s, "_blank");
            }, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsxs)("div", {
              className: cc11001100_hook("className", b().content, "object-key-init"),
              children: cc11001100_hook("children", [(0, a.jsx)(d.Z.Paragraph, {
                className: cc11001100_hook("className", b().title, "object-key-init"),
                ellipsis: {
                  rows: cc11001100_hook("rows", 2, "object-key-init")
                },
                children: cc11001100_hook("children", o, "object-key-init")
              }), (0, a.jsxs)("div", {
                className: cc11001100_hook("className", b().source, "object-key-init"),
                children: cc11001100_hook("children", [t ? (0, a.jsx)("img", {
                  src: cc11001100_hook("src", t, "object-key-init"),
                  alt: cc11001100_hook("alt", n || "website logo", "object-key-init"),
                  width: cc11001100_hook("width", 16, "object-key-init"),
                  height: cc11001100_hook("height", 16, "object-key-init")
                }) : (0, a.jsx)(p(), {
                  src: cc11001100_hook("src", _.Z, "object-key-init"),
                  alt: cc11001100_hook("alt", n || "website logo", "object-key-init"),
                  width: cc11001100_hook("width", 16, "object-key-init"),
                  height: cc11001100_hook("height", 16, "object-key-init")
                }), (0, a.jsx)("span", {
                  children: cc11001100_hook("children", (0, m.L)(e), "object-key-init")
                })], "object-key-init")
              })], "object-key-init")
            }), "object-key-init")
          }), "object-key-init")
        });
      }, "var-init"),
      x = cc11001100_hook("x", e => {
        let {
            links: t,
            onShowMore: n
          } = cc11001100_hook("", e, "var-init"),
          s = cc11001100_hook("s", t.slice(0, 3), "var-init"),
          i = cc11001100_hook("i", t.length > 3, "var-init");
        return (0, a.jsxs)("div", {
          className: cc11001100_hook("className", b().container, "object-key-init"),
          children: cc11001100_hook("children", [s.map(e => (0, a.jsx)(g, {
            ...e
          }, e.id)), i && (0, a.jsxs)("div", {
            className: cc11001100_hook("className", b().moreButton, "object-key-init"),
            onClick: cc11001100_hook("onClick", n, "object-key-init"),
            children: cc11001100_hook("children", [(0, a.jsxs)("div", {
              className: cc11001100_hook("className", b().moreCntent, "object-key-init"),
              children: cc11001100_hook("children", [(0, a.jsxs)("div", {
                children: cc11001100_hook("children", ["更多来源 +", t.length - 3], "object-key-init")
              }), (0, a.jsx)(o.Z, {
                name: cc11001100_hook("name", "settingnarrow", "object-key-init"),
                size: cc11001100_hook("size", 10, "object-key-init")
              })], "object-key-init")
            }), (0, a.jsx)("div", {
              className: cc11001100_hook("className", b().moreLogos, "object-key-init"),
              children: cc11001100_hook("children", (() => {
                let e = cc11001100_hook("e", t.slice(3), "var-init"),
                  n = cc11001100_hook("n", e.filter(e => e.hostLogo), "var-init"),
                  o = cc11001100_hook("o", [...n, ...e].slice(0, 4).filter((e, t, n) => t === n.findIndex(t => t.id === e.id)), "var-init");
                return o.map(e => (0, a.jsx)(v.Z, {
                  hostLogo: cc11001100_hook("hostLogo", e.hostLogo, "object-key-init"),
                  hostName: cc11001100_hook("hostName", e.hostName, "object-key-init")
                }, e.id));
              })(), "object-key-init")
            })], "object-key-init")
          })], "object-key-init")
        });
      }, "var-init");
    var k = cc11001100_hook("k", n(4032), "var-init"),
      C = cc11001100_hook("C", n(92667), "var-init"),
      y = cc11001100_hook("y", n.n(C), "var-init"),
      j = cc11001100_hook("j", e => {
        let {
            title: t,
            details: n
          } = cc11001100_hook("", e, "var-init"),
          [s, l] = cc11001100_hook("", (0, i.useState)(!0), "var-init"),
          [r, _] = cc11001100_hook("", (0, i.useState)(!1), "var-init"),
          d = cc11001100_hook("d", (0, i.useRef)(null), "var-init"),
          [u, p] = cc11001100_hook("", (0, i.useState)(null), "var-init");
        return (0, i.useEffect)(() => {
          let e = cc11001100_hook("e", () => {
            d.current && p(d.current.offsetWidth);
          }, "var-init");
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e);
          };
        }, [s]), (0, a.jsxs)(a.Fragment, {
          children: cc11001100_hook("children", [(0, a.jsxs)("div", {
            className: cc11001100_hook("className", y().container, "object-key-init"),
            children: cc11001100_hook("children", [(0, a.jsx)("div", {
              className: cc11001100_hook("className", y().header, "object-key-init"),
              onClick: cc11001100_hook("onClick", () => {
                l(!s);
              }, "object-key-init"),
              children: cc11001100_hook("children", (0, a.jsxs)("div", {
                className: cc11001100_hook("className", y().header_content, "object-key-init"),
                children: cc11001100_hook("children", [(0, a.jsx)(o.Z, {
                  className: cc11001100_hook("className", y().search_icon, "object-key-init"),
                  name: cc11001100_hook("name", "iconsearch", "object-key-init")
                }), (0, a.jsx)("span", {
                  children: cc11001100_hook("children", t, "object-key-init")
                }), (0, a.jsx)(o.Z, {
                  className: cc11001100_hook("className", "".concat(y().toggleButton, " ").concat(s ? y().expanded : ""), "object-key-init"),
                  name: cc11001100_hook("name", "iconsetting", "object-key-init")
                })], "object-key-init")
              }), "object-key-init")
            }), (0, a.jsx)("blockquote", {
              ref: cc11001100_hook("ref", d, "object-key-init"),
              className: cc11001100_hook("className", "".concat(y().details, " ").concat(s ? y().expanded : y().collapsed), "object-key-init"),
              children: cc11001100_hook("children", (0, a.jsx)("div", {
                className: cc11001100_hook("className", y().details_body, "object-key-init"),
                style: {
                  width: cc11001100_hook("width", u ? "".concat(u, "px") : "auto", "object-key-init")
                },
                children: cc11001100_hook("children", (0, a.jsx)(x, {
                  links: cc11001100_hook("links", n || [], "object-key-init"),
                  onShowMore: cc11001100_hook("onShowMore", () => {
                    _(!0);
                  }, "object-key-init")
                }), "object-key-init")
              }), "object-key-init")
            })], "object-key-init")
          }), (0, a.jsx)(c, {
            open: cc11001100_hook("open", r, "object-key-init"),
            onClose: cc11001100_hook("onClose", () => _(!1), "object-key-init"),
            title: cc11001100_hook("title", "网页搜索", "object-key-init"),
            width: cc11001100_hook("width", 390, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsx)(k.Z, {
              details: cc11001100_hook("details", n || [], "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        });
      }, "var-init");
  },
  90109: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      default: function () {
        return c;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(58644), "var-init"),
      s = cc11001100_hook("s", n(67559), "var-init"),
      i = cc11001100_hook("i", n(2265), "var-init"),
      l = cc11001100_hook("l", n(40471), "var-init"),
      r = cc11001100_hook("r", n.n(l), "var-init");
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          className: t = ""
        } = cc11001100_hook("", e, "var-init"),
        {
          setUserLoginModalShow: n,
          clearLoginSuccessCbs: l,
          clearLoginFailCbs: c,
          addLoginSuccessCb: _,
          addLoginFailCb: d
        } = cc11001100_hook("", (0, o.useGlobalExecuteState)() || {}, "var-init");
      return (0, i.useEffect)(() => {
        null == l || l(), null == _ || _(() => {
          window.location.reload();
        }), null == c || c(), null == d || d(() => {
          window.location.replace("/");
        }), null == n || n(!0);
      }, []), (0, a.jsx)(s.V9, {
        hashPriority: cc11001100_hook("hashPriority", "high", "object-key-init"),
        transformers: cc11001100_hook("transformers", [s.IJ], "object-key-init"),
        children: cc11001100_hook("children", (0, a.jsx)("div", {
          className: cc11001100_hook("className", "".concat(r().page_container, " ").concat(t), "object-key-init")
        }), "object-key-init")
      });
    }
  },
  39725: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(13987), "var-init"),
      s = cc11001100_hook("s", n(36078), "var-init"),
      i = cc11001100_hook("i", n(1068), "var-init"),
      l = cc11001100_hook("l", n(34577), "var-init"),
      r = cc11001100_hook("r", n(76570), "var-init"),
      c = cc11001100_hook("c", n(2265), "var-init"),
      _ = cc11001100_hook("_", n(63846), "var-init"),
      d = cc11001100_hook("d", n.n(_), "var-init");
    let u = cc11001100_hook("u", e => {
      null == e || e.preventDefault(), null == e || e.stopPropagation();
    }, "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
          conversationId: t,
          nextConversationId: n,
          children: _,
          preCheck: p,
          disabled: m = !1,
          visible: v = !1,
          uploadType: h = "file"
        } = cc11001100_hook("", e, "var-init"),
        {
          inputConvFiles: f
        } = cc11001100_hook("", (0, r.useUploadFile)() || {}, "var-init"),
        b = cc11001100_hook("b", (0, c.useRef)(null), "var-init"),
        g = cc11001100_hook("g", (0, c.useRef)(null), "var-init"),
        x = cc11001100_hook("x", (0, c.useRef)(null), "var-init"),
        [k, C] = cc11001100_hook("", (0, c.useState)(!1), "var-init"),
        y = cc11001100_hook("y", (0, c.useCallback)(e => {
          e.preventDefault(), e.stopPropagation(), C(!0);
        }, []), "var-init"),
        {
          track: j
        } = cc11001100_hook("", (0, l.useTrack)(), "var-init"),
        N = cc11001100_hook("N", (0, c.useCallback)(e => {
          var t;
          null === (t = cc11001100_hook("t", g.current, "assign")) || void 0 === t || t.info(e);
        }, [g]), "var-init"),
        I = cc11001100_hook("I", (0, c.useMemo)(() => i.Re[h] || i.Re.file, [h]), "var-init"),
        w = cc11001100_hook("w", (0, c.useMemo)(() => I.acceptType.join(" ,"), [I]), "var-init"),
        S = cc11001100_hook("S", (0, c.useMemo)(() => {
          let e = cc11001100_hook("e", "拖拽".concat(I.title, "到这里即可上传"), "var-init");
          return v && (e = cc11001100_hook("e", "点击这里或" + e, "assign")), e;
        }, [I, v]), "var-init"),
        T = cc11001100_hook("T", (0, c.useMemo)(() => I.dropUploadTips, [I]), "var-init"),
        E = cc11001100_hook("E", (0, c.useCallback)(async e => {
          let a = cc11001100_hook("a", t || n, "var-init"),
            o = cc11001100_hook("o", await f(a, e), "var-init");
          return o;
        }, [t, n, f]), "var-init"),
        A = cc11001100_hook("A", (0, c.useCallback)(e => {
          e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = cc11001100_hook("e.dataTransfer.dropEffect", "copy", "assign"), C(!0);
        }, []), "var-init"),
        M = cc11001100_hook("M", (0, c.useCallback)(e => {
          e.currentTarget.contains(e.relatedTarget) || (e.preventDefault(), e.stopPropagation(), C(!1));
        }, [C]), "var-init"),
        F = cc11001100_hook("F", (0, c.useCallback)(e => {
          let n = cc11001100_hook("n", t ? "chat" : "new_conv_guide", "var-init"),
            a = cc11001100_hook("a", e.map(e => ({
              name: cc11001100_hook("name", e.name, "object-key-init"),
              size: cc11001100_hook("size", e.size, "object-key-init"),
              type: cc11001100_hook("type", e.type, "object-key-init"),
              lastModified: cc11001100_hook("lastModified", e.lastModified, "object-key-init")
            })), "var-init");
          j("chat_file_upload", {
            page: cc11001100_hook("page", n, "object-key-init"),
            uplaod_type: cc11001100_hook("uplaod_type", "drop", "object-key-init"),
            files: cc11001100_hook("files", a, "object-key-init")
          });
        }, [t, j]), "var-init"),
        P = cc11001100_hook("P", (0, c.useCallback)((e, t) => {
          j("chat_file_upload_error", {
            status: cc11001100_hook("status", t, "object-key-init"),
            file: cc11001100_hook("file", e, "object-key-init")
          });
        }, [j]), "var-init"),
        R = cc11001100_hook("R", (0, c.useCallback)(async e => {
          let t = cc11001100_hook("t", Array.from(e.target.files || []).filter(e => e.size > I.sizeLimit ? (N(I.exceedSizeMsg), P(e, r.UPLOAD_ERROR_TYPE.SIZE), !1) : !e.type || -1 !== w.indexOf(e.type) || (N(I.exceedAcceptTypeMsg), P(e, r.UPLOAD_ERROR_TYPE.TYPE), !1)), "var-init"),
            n = cc11001100_hook("n", await E(t), "var-init");
          n || N(I.exceedTotalLengthMsg), F(orgfiles);
        }, [w, I, N, P, E, F]), "var-init"),
        D = cc11001100_hook("D", (0, c.useCallback)(async e => {
          e.preventDefault(), e.stopPropagation(), C(!1), ("function" != typeof p || p()) && R(e);
        }, [C, p, R]), "var-init"),
        U = cc11001100_hook("U", (0, c.useCallback)(async () => {
          try {
            var e;
            if ("function" == typeof p && !p()) return;
            null === (e = cc11001100_hook("e", x.current, "assign")) || void 0 === e || e.click();
          } catch (e) {}
        }, [p, x]), "var-init"),
        Z = cc11001100_hook("Z", (0, c.useCallback)(async e => {
          e.preventDefault(), e.stopPropagation(), R(e);
        }, [R]), "var-init");
      return (0, a.jsxs)(a.Fragment, {
        children: cc11001100_hook("children", [(0, a.jsx)(s.Z, {
          ref: cc11001100_hook("ref", g, "object-key-init")
        }), (0, a.jsxs)("div", {
          id: cc11001100_hook("id", "drop-zone", "object-key-init"),
          onDragEnter: cc11001100_hook("onDragEnter", m ? u : y, "object-key-init"),
          onDragOver: cc11001100_hook("onDragOver", m ? u : A, "object-key-init"),
          onDragLeave: cc11001100_hook("onDragLeave", m ? u : M, "object-key-init"),
          onDrop: cc11001100_hook("onDrop", m ? u : D, "object-key-init"),
          className: cc11001100_hook("className", d().drop_file, "object-key-init"),
          ref: cc11001100_hook("ref", b, "object-key-init"),
          role: cc11001100_hook("role", "button", "object-key-init"),
          "aria-label": cc11001100_hook("aria-label", "点击或拖放以上传文件", "object-key-init"),
          tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
          children: cc11001100_hook("children", [_, (0, a.jsx)("div", {
            className: cc11001100_hook("className", "\n            ".concat(v ? d().upload_mask_open : d().upload_mask, "\n            ").concat(v ? d().cursor : "", "\n            ").concat(k ? v ? d().upload_mask_blur : d().upload_mask_open : "", " \n          "), "object-key-init"),
            onClick: cc11001100_hook("onClick", v && !m ? U : u, "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsxs)("div", {
              className: cc11001100_hook("className", d().drop_content, "object-key-init"),
              children: cc11001100_hook("children", [(0, a.jsx)(o.Z, {
                name: cc11001100_hook("name", "trayandarrowupfill1", "object-key-init"),
                className: cc11001100_hook("className", d().drop_icon, "object-key-init")
              }), (0, a.jsx)("div", {
                className: cc11001100_hook("className", d().drop_title, "object-key-init"),
                children: cc11001100_hook("children", S, "object-key-init")
              }), (0, a.jsx)("div", {
                className: cc11001100_hook("className", d().drop_desc, "object-key-init"),
                children: cc11001100_hook("children", T, "object-key-init")
              })], "object-key-init")
            }), "object-key-init")
          }), (0, a.jsx)("input", {
            ref: cc11001100_hook("ref", x, "object-key-init"),
            type: cc11001100_hook("type", "file", "object-key-init"),
            onChange: cc11001100_hook("onChange", Z, "object-key-init"),
            id: cc11001100_hook("id", "drop-file-input", "object-key-init"),
            accept: cc11001100_hook("accept", w, "object-key-init"),
            style: {
              display: cc11001100_hook("display", "none", "object-key-init")
            },
            value: cc11001100_hook("value", "", "object-key-init"),
            multiple: cc11001100_hook("multiple", I.lengthLimit > 1, "object-key-init")
          })], "object-key-init")
        })], "object-key-init")
      });
    }, "assign");
  },
  73469: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(13987), "var-init"),
      s = cc11001100_hook("s", n(42645), "var-init"),
      i = cc11001100_hook("i", n(34577), "var-init"),
      l = cc11001100_hook("l", n(76570), "var-init"),
      r = cc11001100_hook("r", n(46071), "var-init"),
      c = cc11001100_hook("c", n(2265), "var-init"),
      _ = cc11001100_hook("_", n(63846), "var-init"),
      d = cc11001100_hook("d", n.n(_), "var-init");
    let u = cc11001100_hook("u", {
      "application/pdf": cc11001100_hook("application/pdf", "PDF", "object-key-init"),
      pdf: cc11001100_hook("pdf", "PDF", "object-key-init"),
      "text/plain": cc11001100_hook("text/plain", "TXT", "object-key-init"),
      txt: cc11001100_hook("txt", "TXT", "object-key-init"),
      text: cc11001100_hook("text", "TXT", "object-key-init"),
      doc: cc11001100_hook("doc", "DOC", "object-key-init"),
      "application/msword": cc11001100_hook("application/msword", "DOC", "object-key-init"),
      docx: cc11001100_hook("docx", "DOC", "object-key-init"),
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": cc11001100_hook("application/vnd.openxmlformats-officedocument.wordprocessingml.document", "DOC", "object-key-init"),
      md: cc11001100_hook("md", "MD", "object-key-init"),
      csv: cc11001100_hook("csv", "CSV", "object-key-init"),
      "text/csv": cc11001100_hook("text/csv", "CSV", "object-key-init"),
      "image/png": cc11001100_hook("image/png", "PNG", "object-key-init"),
      png: cc11001100_hook("png", "PNG", "object-key-init"),
      "image/jpg": cc11001100_hook("image/jpg", "JPG", "object-key-init"),
      jpg: cc11001100_hook("jpg", "JPG", "object-key-init"),
      jpeg: cc11001100_hook("jpeg", "JPEG", "object-key-init"),
      "image/jpeg": cc11001100_hook("image/jpeg", "JPEG", "object-key-init"),
      gif: cc11001100_hook("gif", "GIF", "object-key-init"),
      "image/gif": cc11001100_hook("image/gif", "GIF", "object-key-init"),
      bmp: cc11001100_hook("bmp", "BMP", "object-key-init"),
      "image/bmp": cc11001100_hook("image/bmp", "BMP", "object-key-init"),
      webp: cc11001100_hook("webp", "WEBP", "object-key-init"),
      "image/webp": cc11001100_hook("image/webp", "WEBP", "object-key-init")
    }, "var-init");
    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (0 === e) return "0 B";
      let t = cc11001100_hook("t", Math.floor(Math.log(e) / Math.log(1024)), "var-init");
      return parseFloat((e / Math.pow(1024, t)).toFixed(2)) + " " + ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t];
    }
    t.Z = cc11001100_hook("t.Z", e => {
      let {
          name: t,
          type: n,
          stage: _,
          status: m,
          size: v,
          processing: h,
          hasClose: f,
          deleteFile: b,
          reUpload: g,
          thumb: x = "",
          downloadUrl: k = ""
        } = cc11001100_hook("", e, "var-init"),
        {
          track: C
        } = cc11001100_hook("", (0, i.useTrack)(), "var-init"),
        y = cc11001100_hook("y", (0, c.useMemo)(() => {
          var e;
          let a = cc11001100_hook("a", null == t ? void 0 : null === (e = cc11001100_hook("e", t.split("."), "assign")) || void 0 === e ? void 0 : e.pop(), "var-init"),
            o = cc11001100_hook("o", u[n || a] ? u[n || a] : "", "var-init");
          return o;
        }, [t, n]), "var-init"),
        j = cc11001100_hook("j", (0, c.useCallback)(() => {
          f && "function" == typeof g && g(e);
        }, [g, e, f]), "var-init"),
        {
          msg: N,
          style: I,
          trackStatus: w,
          msgStyle: S
        } = cc11001100_hook("", (0, c.useMemo)(() => {
          let e = cc11001100_hook("e", {}, "var-init"),
            t = cc11001100_hook("t", {}, "var-init");
          return 1 === _ ? 1 === m ? (e = cc11001100_hook("e", {
            backgroundImage: cc11001100_hook("backgroundImage", "linear-gradient(to right, var(--label-bg-hover-color, #E0E0E1) ".concat(Math.floor(h), "%, var(--label-input-bg-color, #F9F9FA) ").concat(Math.floor(h), "%)"), "object-key-init")
          }, "assign"), {
            msg: cc11001100_hook("msg", "".concat(p(v), " 上传中").concat(Math.floor(h), "%"), "object-key-init"),
            style: cc11001100_hook("style", e, "object-key-init"),
            msgStyle: cc11001100_hook("msgStyle", t, "object-key-init"),
            trackStatus: cc11001100_hook("trackStatus", l.UPLOAD_ERROR_TYPE.UPLOADING, "object-key-init")
          }) : 2 === m ? {
            msg: cc11001100_hook("msg", "".concat(p(v), " 上传成功"), "object-key-init"),
            style: cc11001100_hook("style", e, "object-key-init"),
            msgStyle: cc11001100_hook("msgStyle", t, "object-key-init")
          } : {
            msg: cc11001100_hook("msg", "上传失败", "object-key-init"),
            style: cc11001100_hook("style", e, "object-key-init"),
            msgStyle: cc11001100_hook("msgStyle", t, "object-key-init"),
            trackStatus: cc11001100_hook("trackStatus", l.UPLOAD_ERROR_TYPE.UPLOAD, "object-key-init")
          } : 1 === m ? {
            msg: cc11001100_hook("msg", "文件解析中...", "object-key-init"),
            style: cc11001100_hook("style", e, "object-key-init"),
            msgStyle: cc11001100_hook("msgStyle", t = cc11001100_hook("t", {
              color: cc11001100_hook("color", "#FF0000", "object-key-init")
            }, "assign"), "object-key-init"),
            trackStatus: cc11001100_hook("trackStatus", l.UPLOAD_ERROR_TYPE.PARSING, "object-key-init")
          } : 2 === m ? {
            msg: cc11001100_hook("msg", "".concat(y, "  ").concat(p(v)), "object-key-init"),
            style: cc11001100_hook("style", e, "object-key-init"),
            msgStyle: cc11001100_hook("msgStyle", t, "object-key-init"),
            trackStatus: cc11001100_hook("trackStatus", l.UPLOAD_ERROR_TYPE.SUCCESS, "object-key-init")
          } : {
            msg: cc11001100_hook("msg", "解析失败", "object-key-init"),
            style: cc11001100_hook("style", e, "object-key-init"),
            trackStatus: cc11001100_hook("trackStatus", l.UPLOAD_ERROR_TYPE.PARSE, "object-key-init")
          };
        }, [_, m, v, y, h]), "var-init"),
        T = cc11001100_hook("T", (0, c.useCallback)(() => {
          b(e), C("chat_file_delete", {
            file: cc11001100_hook("file", e, "object-key-init"),
            status: cc11001100_hook("status", w, "object-key-init")
          });
        }, [b, e, w, C]), "var-init"),
        E = cc11001100_hook("E", (0, c.useMemo)(() => y ? "file_type_".concat(y.toLowerCase()) : "", [y]), "var-init");
      return (0, a.jsxs)("div", {
        className: cc11001100_hook("className", "".concat(d().file_ctn, " ").concat(-1 === m ? d().state_err : ""), "object-key-init"),
        style: cc11001100_hook("style", I, "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsx)("div", {
          className: cc11001100_hook("className", d().process, "object-key-init")
        }), x ? (0, a.jsx)("div", {
          className: cc11001100_hook("className", d().image_container, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)(r.Z, {
            style: {
              objectFit: cc11001100_hook("objectFit", "contain", "object-key-init"),
              objectPosition: cc11001100_hook("objectPosition", "center", "object-key-init")
            },
            src: cc11001100_hook("src", x, "object-key-init"),
            width: cc11001100_hook("width", "100%", "object-key-init"),
            height: cc11001100_hook("height", "100%", "object-key-init"),
            preview: cc11001100_hook("preview", !!k && {
              src: cc11001100_hook("src", k, "object-key-init"),
              mask: cc11001100_hook("mask", (0, a.jsx)("div", {}), "object-key-init")
            }, "object-key-init")
          }), "object-key-init")
        }) : (0, a.jsx)("div", {
          className: cc11001100_hook("className", "".concat(d().file_icon, " ").concat(d()[E]), "object-key-init")
        }), (0, a.jsxs)("div", {
          children: cc11001100_hook("children", [(0, a.jsx)("div", {
            className: cc11001100_hook("className", d().file_name, "object-key-init"),
            children: cc11001100_hook("children", t, "object-key-init")
          }), (0, a.jsx)("div", {
            onClick: cc11001100_hook("onClick", j, "object-key-init"),
            className: cc11001100_hook("className", "".concat(-1 === m ? d().msg_ctn : ""), "object-key-init"),
            children: cc11001100_hook("children", (0, a.jsx)("div", {
              style: cc11001100_hook("style", S, "object-key-init"),
              className: cc11001100_hook("className", "".concat(d().state_message, " ").concat(-1 === m ? d().state_err : ""), "object-key-init"),
              children: cc11001100_hook("children", N, "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        }), f ? (0, a.jsx)(s.Z, {
          title: cc11001100_hook("title", "不再围绕这个文件回答", "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)(o.Z, {
            className: cc11001100_hook("className", d().close_icon, "object-key-init"),
            onClick: cc11001100_hook("onClick", T, "object-key-init"),
            name: cc11001100_hook("name", "Group1942974484", "object-key-init")
          }), "object-key-init")
        }) : null], "object-key-init")
      });
    }, "assign");
  },
  70746: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(13987), "var-init"),
      s = cc11001100_hook("s", n(42645), "var-init"),
      i = cc11001100_hook("i", n(34577), "var-init"),
      l = cc11001100_hook("l", n(2265), "var-init"),
      r = cc11001100_hook("r", n(63846), "var-init"),
      c = cc11001100_hook("c", n.n(r), "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
          hasClose: t,
          clearFiles: n,
          files: r
        } = cc11001100_hook("", e, "var-init"),
        {
          track: _
        } = cc11001100_hook("", (0, i.useTrack)(), "var-init"),
        d = cc11001100_hook("d", (0, l.useCallback)(() => {
          n(), _("chat_file_reference_delete", {
            files: cc11001100_hook("files", r, "object-key-init")
          });
        }, [n, _, r]), "var-init"),
        u = cc11001100_hook("u", (0, l.useMemo)(() => {
          var e;
          let t = cc11001100_hook("t", (null === (e = cc11001100_hook("e", r[0], "assign")) || void 0 === e ? void 0 : e.name) || "", "var-init"),
            n = cc11001100_hook("n", r.length - 1 > 0 ? r.length - 1 : 0, "var-init");
          return "".concat(t, "  ").concat(n > 0 ? "和其它 " + n + " 个文件" : "");
        }, [r]), "var-init");
      return (0, a.jsxs)("div", {
        className: cc11001100_hook("className", "".concat(c().thumb_ctn, " ").concat(t ? c().thumb_ctn_hasclose : ""), "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsxs)("div", {
          className: cc11001100_hook("className", "".concat(c().thumb_container, " ").concat(t ? "" : c().thumb_container_no_close), "object-key-init"),
          children: cc11001100_hook("children", [(0, a.jsx)(o.Z, {
            className: cc11001100_hook("className", c().thumb_row_icon, "object-key-init"),
            name: cc11001100_hook("name", "arrowturndownright", "object-key-init")
          }), (0, a.jsx)(o.Z, {
            className: cc11001100_hook("className", c().thumb_file_icon, "object-key-init"),
            name: cc11001100_hook("name", "doctext2", "object-key-init")
          }), (0, a.jsx)("div", {
            children: cc11001100_hook("children", (0, a.jsx)("div", {
              className: cc11001100_hook("className", c().thumb_msg, "object-key-init"),
              children: cc11001100_hook("children", u, "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        }), t ? (0, a.jsxs)(s.Z, {
          title: cc11001100_hook("title", "不再围绕这个文件回答", "object-key-init"),
          children: cc11001100_hook("children", [(0, a.jsx)("div", {
            className: cc11001100_hook("className", c().thumb_close_icon, "object-key-init"),
            onClick: cc11001100_hook("onClick", d, "object-key-init")
          }), (0, a.jsx)(o.Z, {
            className: cc11001100_hook("className", c().thumb_close_icon, "object-key-init"),
            onClick: cc11001100_hook("onClick", d, "object-key-init"),
            name: cc11001100_hook("name", "Group1942974484", "object-key-init")
          })], "object-key-init")
        }) : null], "object-key-init")
      });
    }, "assign");
  },
  96404: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(46071), "var-init"),
      s = cc11001100_hook("s", n(63846), "var-init"),
      i = cc11001100_hook("i", n.n(s), "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
        thumb: t = "",
        downloadUrl: n = ""
      } = cc11001100_hook("", e, "var-init");
      return (0, a.jsx)("div", {
        className: cc11001100_hook("className", i().single_image_container, "object-key-init"),
        children: cc11001100_hook("children", (0, a.jsx)(o.Z, {
          style: {
            objectFit: cc11001100_hook("objectFit", "contain", "object-key-init"),
            objectPosition: cc11001100_hook("objectPosition", "center", "object-key-init")
          },
          src: cc11001100_hook("src", t, "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          preview: cc11001100_hook("preview", !!n && {
            src: cc11001100_hook("src", n, "object-key-init"),
            mask: cc11001100_hook("mask", (0, a.jsx)("div", {}), "object-key-init")
          }, "object-key-init")
        }), "object-key-init")
      });
    }, "assign");
  },
  85694: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(33746), "var-init");
    n(30467), n(2265);
    var s = cc11001100_hook("s", n(13987), "var-init"),
      i = cc11001100_hook("i", n(7444), "var-init"),
      l = cc11001100_hook("l", n.n(i), "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
        wrapClassName: t,
        containerClassName: n,
        style: i,
        getContainer: r,
        keyboard: c,
        closable: _ = !0,
        maskClosable: d,
        onCancel: u,
        onOk: p,
        title: m,
        content: v,
        open: h,
        CustomClose: f
      } = cc11001100_hook("", e, "var-init");
      return (0, a.jsx)(o.Z, {
        style: {
          ...i
        },
        getContainer: cc11001100_hook("getContainer", r, "object-key-init"),
        keyboard: cc11001100_hook("keyboard", c, "object-key-init"),
        maskClosable: cc11001100_hook("maskClosable", d, "object-key-init"),
        onClose: cc11001100_hook("onClose", u, "object-key-init"),
        visible: cc11001100_hook("visible", h, "object-key-init"),
        animation: cc11001100_hook("animation", "zoom", "object-key-init"),
        maskAnimation: cc11001100_hook("maskAnimation", "fade", "object-key-init"),
        className: cc11001100_hook("className", t, "object-key-init"),
        footer: cc11001100_hook("footer", null, "object-key-init"),
        title: cc11001100_hook("title", null, "object-key-init"),
        modalRender: cc11001100_hook("modalRender", () => (0, a.jsxs)("div", {
          className: cc11001100_hook("className", "".concat(l().modal_container, " ").concat(n), "object-key-init"),
          children: cc11001100_hook("children", [_ ? f || (0, a.jsx)(s.Z, {
            onClick: cc11001100_hook("onClick", u, "object-key-init"),
            className: cc11001100_hook("className", l().modal_close, "object-key-init"),
            name: cc11001100_hook("name", "close", "object-key-init")
          }) : null, (0, a.jsx)("div", {
            className: cc11001100_hook("className", l().modal_title, "object-key-init"),
            children: cc11001100_hook("children", m, "object-key-init")
          }), (0, a.jsx)("div", {
            children: cc11001100_hook("children", v, "object-key-init")
          })], "object-key-init")
        }), "object-key-init")
      });
    }, "assign");
  },
  90427: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(17894), "var-init"),
      s = cc11001100_hook("s", n(9301), "var-init"),
      i = cc11001100_hook("i", n(60444), "var-init"),
      l = cc11001100_hook("l", n(24033), "var-init"),
      r = cc11001100_hook("r", n(2265), "var-init"),
      c = cc11001100_hook("c", n(62565), "var-init"),
      _ = cc11001100_hook("_", n(437), "var-init"),
      d = cc11001100_hook("d", n.n(_), "var-init");
    t.Z = cc11001100_hook("t.Z", e => {
      let {
          title: t,
          onBackClick: n,
          backBtnUnVis: _
        } = cc11001100_hook("", e, "var-init"),
        {
          setShowLeftSide: u
        } = cc11001100_hook("", (0, s.useMobileTrans)() || {}, "var-init"),
        [p, m] = cc11001100_hook("", (0, r.useState)({}), "var-init"),
        v = cc11001100_hook("v", (0, l.useRouter)(), "var-init");
      (0, r.useEffect)(() => {
        let e = cc11001100_hook("e", (0, i.bJ)(), "var-init");
        m(e);
      }, [m]);
      let h = cc11001100_hook("h", (0, r.useCallback)(() => {
        "" !== p && v.replace("/down");
      }, [p]), "var-init");
      return (0, a.jsxs)("div", {
        className: cc11001100_hook("className", d().page_header, "object-key-init"),
        children: cc11001100_hook("children", [(0, a.jsx)("div", {
          className: cc11001100_hook("className", d().title, "object-key-init")
        }), (0, a.jsx)(c.Z, {
          theme: {
            token: {
              colorBgElevated: cc11001100_hook("colorBgElevated", "rgba(0,0,0,0)", "object-key-init"),
              boxShadowSecondary: cc11001100_hook("boxShadowSecondary", 0, "object-key-init"),
              width: cc11001100_hook("width", 0, "object-key-init")
            }
          },
          content: cc11001100_hook("content", (null == p ? void 0 : p.env) === "" ? o.kQ : null, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsxs)("div", {
            className: cc11001100_hook("className", d().download, "object-key-init"),
            onClick: cc11001100_hook("onClick", h, "object-key-init"),
            children: cc11001100_hook("children", [(0, a.jsx)("div", {
              className: cc11001100_hook("className", d().download_icon, "object-key-init")
            }), (0, a.jsx)("div", {
              className: cc11001100_hook("className", d().download_msg, "object-key-init"),
              children: cc11001100_hook("children", "下载App", "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        })], "object-key-init")
      });
    }, "assign");
  },
  28445: function (e, t, n) {
    "use strict";

    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(36078), "var-init"),
      s = cc11001100_hook("s", n(1068), "var-init"),
      i = cc11001100_hook("i", n(61040), "var-init"),
      l = cc11001100_hook("l", n(96329), "var-init"),
      r = cc11001100_hook("r", n(2265), "var-init"),
      c = cc11001100_hook("c", n(4046), "var-init"),
      _ = cc11001100_hook("_", n.n(c), "var-init");
    t.Z = cc11001100_hook("t.Z", (0, r.memo)((0, r.forwardRef)((e, t) => {
      let {
          lineHeight: n,
          onInput: c,
          onKeyUp: d,
          maxLength: u,
          handleFocus: p,
          handleBlur: m,
          value: v,
          inputEnable: h,
          style: f,
          inputClassName: b = "",
          containerStyle: g,
          autoSize: x = !0,
          ...k
        } = cc11001100_hook("", e, "var-init"),
        [C, y] = cc11001100_hook("", (0, r.useState)(!1), "var-init"),
        j = cc11001100_hook("j", (0, r.useRef)(null), "var-init"),
        {
          mainConverItem: N
        } = cc11001100_hook("", (0, i.useConverMenuContext)(), "var-init"),
        I = cc11001100_hook("I", (0, r.useRef)(null), "var-init"),
        w = cc11001100_hook("w", (0, r.useCallback)(e => {
          var t;
          null === (t = cc11001100_hook("t", I.current, "assign")) || void 0 === t || t.info(e);
        }, [I]), "var-init");
      (0, r.useImperativeHandle)(t, () => ({
        focus: cc11001100_hook("focus", () => {
          j.current && j.current.focus();
        }, "object-key-init")
      }));
      let S = cc11001100_hook("S", (0, r.useCallback)(e => {
          c(e);
        }, [c]), "var-init"),
        T = cc11001100_hook("T", (0, r.useCallback)(e => {
          y(!0), "function" == typeof p && p(e);
        }, [p]), "var-init"),
        E = cc11001100_hook("E", (0, r.useCallback)(e => {
          y(!1), "function" == typeof m && m(e);
        }, [m]), "var-init"),
        A = cc11001100_hook("A", (0, r.useCallback)(e => {
          j.current && h && j.current.focus();
        }, [h]), "var-init"),
        M = cc11001100_hook("M", (0, r.useCallback)(e => {
          var t;
          let n = cc11001100_hook("n", (null == e ? void 0 : e.clipboardData) || (null === (t = cc11001100_hook("t", window, "assign")) || void 0 === t ? void 0 : t.clipboardData), "var-init");
          for (let t = cc11001100_hook("t", 0, "var-init"); t < n.items.length; t++) {
            let a = cc11001100_hook("a", n.items[t], "var-init"),
              o = cc11001100_hook("o", null == N ? void 0 : N.key, "var-init"),
              i = cc11001100_hook("i", !(!o || s.x$.includes(o)) && -1 !== a.type.indexOf("image/"), "var-init");
            if (i) {
              e.preventDefault();
              return;
            }
          }
          let a = cc11001100_hook("a", n.getData("text"), "var-init");
          a.length > 2e4 && w("输入的字符超过限制，可改为文档上传更有利于阅读和理解");
        }, [N, w]), "var-init");
      return (0, a.jsxs)(a.Fragment, {
        children: cc11001100_hook("children", [(0, a.jsx)(o.Z, {
          ref: cc11001100_hook("ref", I, "object-key-init")
        }), (0, a.jsx)("div", {
          className: cc11001100_hook("className", C ? _().container_focus : _().container, "object-key-init"),
          style: cc11001100_hook("style", h ? {
            ...g
          } : {
            cursor: cc11001100_hook("cursor", "not-allowed", "object-key-init"),
            ...g
          }, "object-key-init"),
          onClick: cc11001100_hook("onClick", A, "object-key-init"),
          children: cc11001100_hook("children", (0, a.jsx)(l.Z, {
            ref: cc11001100_hook("ref", j, "object-key-init"),
            disabled: cc11001100_hook("disabled", !h, "object-key-init"),
            style: {
              border: cc11001100_hook("border", 0, "object-key-init"),
              outlineStyle: cc11001100_hook("outlineStyle", "none", "object-key-init"),
              lineHeight: cc11001100_hook("lineHeight", "".concat(n, "px "), "object-key-init"),
              ...f
            },
            type: cc11001100_hook("type", "tel", "object-key-init"),
            className: cc11001100_hook("className", "".concat(_().input, " ").concat(b), "object-key-init"),
            rows: cc11001100_hook("rows", 1, "object-key-init"),
            autoSize: cc11001100_hook("autoSize", x, "object-key-init"),
            value: cc11001100_hook("value", v, "object-key-init"),
            onKeyUp: cc11001100_hook("onKeyUp", d, "object-key-init"),
            maxLength: cc11001100_hook("maxLength", u, "object-key-init"),
            onChange: cc11001100_hook("onChange", S, "object-key-init"),
            onFocus: cc11001100_hook("onFocus", T, "object-key-init"),
            onBlur: cc11001100_hook("onBlur", E, "object-key-init"),
            onPaste: cc11001100_hook("onPaste", M, "object-key-init"),
            ...k
          }), "object-key-init")
        })], "object-key-init")
      });
    })), "assign");
  },
  20297: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      ChatProvider: function () {
        return r;
      },
      useChat: function () {
        return c;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(24033), "var-init"),
      s = cc11001100_hook("s", n(2265), "var-init");
    let i = cc11001100_hook("i", "chat_list_open_status", "var-init"),
      l = cc11001100_hook("l", (0, s.createContext)(null), "var-init");
    function r(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          children: t
        } = cc11001100_hook("", e, "var-init"),
        [n, r] = cc11001100_hook("", (0, s.useState)([]), "var-init"),
        [c, _] = cc11001100_hook("", (0, s.useState)({}), "var-init"),
        [d, u] = cc11001100_hook("", (0, s.useState)(0), "var-init"),
        [p, m] = cc11001100_hook("", (0, s.useState)(null), "var-init");
      (0, o.useRouter)();
      let v = cc11001100_hook("v", (0, s.useRef)({}), "var-init"),
        [h, f] = cc11001100_hook("", (0, s.useState)(!0), "var-init");
      (0, s.useEffect)(() => {
        let e = cc11001100_hook("e", localStorage.getItem(i), "var-init");
        e && "false" === e && f(!1);
      }, []);
      let b = cc11001100_hook("b", (0, s.useCallback)(e => {
          f(e), localStorage.setItem(i, e ? "true" : "false");
        }, []), "var-init"),
        g = cc11001100_hook("g", (0, s.useCallback)(e => {
          if (n.length < 1) r(e);else {
            let t = cc11001100_hook("t", [], "var-init");
            for (let a of e) n.some(e => e.conversationId === a.conversationId) || t.push(a);
            r([...n, ...t]);
          }
        }, [n, r]), "var-init"),
        x = cc11001100_hook("x", (0, s.useCallback)(e => {
          v.current = cc11001100_hook("v.current", {
            ...v.current,
            ...e
          }, "assign");
        }, []), "var-init"),
        k = cc11001100_hook("k", (0, s.useCallback)(async (e, t, a, o, s) => {
          let i = cc11001100_hook("i", -1, "var-init");
          for (let e = cc11001100_hook("e", 0, "var-init"); e < n.length; ++e) {
            var l;
            if ((null === (l = cc11001100_hook("l", n[e], "assign")) || void 0 === l ? void 0 : l.conversationId) === s.conversationId) {
              n[e], i = cc11001100_hook("i", e, "assign");
              break;
            }
          }
          let c = cc11001100_hook("c", {
              botId: cc11001100_hook("botId", e, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", s.conversationId, "object-key-init"),
              name: cc11001100_hook("name", t, "object-key-init")
            }, "var-init"),
            _ = cc11001100_hook("_", [...n], "var-init");
          -1 !== i && _.splice(i, 1), _.unshift(c), r(_);
        }, [n]), "var-init"),
        C = cc11001100_hook("C", (0, s.useCallback)(e => {
          let t = cc11001100_hook("t", {
            ...c
          }, "var-init");
          t[e.id] = cc11001100_hook("t[e.id]", e, "assign"), _(t), m(e);
        }, [c, _]), "var-init"),
        y = cc11001100_hook("y", (0, s.useCallback)(e => {
          let t = cc11001100_hook("t", -1, "var-init");
          for (let a = cc11001100_hook("a", 0, "var-init"); a < n.length; ++a) if (n[a].conversationId === e) {
            t = cc11001100_hook("t", a, "assign");
            break;
          }
          if (-1 !== t) {
            let e = cc11001100_hook("e", [...n], "var-init");
            e.splice(t, 1), r(e);
          }
        }, [n]), "var-init"),
        j = cc11001100_hook("j", (0, s.useCallback)(e => {
          let {
              conversationId: t,
              conversationName: a
            } = cc11001100_hook("", e, "var-init"),
            o = cc11001100_hook("o", n.findIndex(e => e.conversationId === t), "var-init");
          if (-1 !== o) {
            let e = cc11001100_hook("e", n[o], "var-init"),
              t = cc11001100_hook("t", [...n], "var-init");
            t.splice(o, 1, {
              ...e,
              name: a
            }), r(t);
          }
        }, [n]), "var-init"),
        N = cc11001100_hook("N", (0, s.useCallback)(() => {
          u(1);
        }, [u]), "var-init"),
        I = cc11001100_hook("I", (0, s.useCallback)(e => {
          e = cc11001100_hook("e", parseInt(e), "assign");
          for (let t = cc11001100_hook("t", 0, "var-init"); t < n.length; ++t) if (n[t].id === e) {
            m(n[t]);
            break;
          }
        }, [n]), "var-init");
      return (0, a.jsx)(l.Provider, {
        value: {
          chatList: cc11001100_hook("chatList", n, "object-key-init"),
          setRefreshChatList: cc11001100_hook("setRefreshChatList", u, "object-key-init"),
          refreshList: cc11001100_hook("refreshList", d, "object-key-init"),
          mergeChatList: cc11001100_hook("mergeChatList", g, "object-key-init"),
          setChatList: cc11001100_hook("setChatList", r, "object-key-init"),
          setChatContent: cc11001100_hook("setChatContent", k, "object-key-init"),
          discoveryBot: cc11001100_hook("discoveryBot", C, "object-key-init"),
          deleteConv: cc11001100_hook("deleteConv", y, "object-key-init"),
          setConvName: cc11001100_hook("setConvName", j, "object-key-init"),
          refreshChatList: cc11001100_hook("refreshChatList", N, "object-key-init"),
          chatBot: cc11001100_hook("chatBot", p, "object-key-init"),
          setChattingBot: cc11001100_hook("setChattingBot", I, "object-key-init"),
          botInfoMapRef: cc11001100_hook("botInfoMapRef", v, "object-key-init"),
          mergeBotInfo: cc11001100_hook("mergeBotInfo", x, "object-key-init"),
          chatListOpenStatus: cc11001100_hook("chatListOpenStatus", h, "object-key-init"),
          changeChatListOpenStatus: cc11001100_hook("changeChatListOpenStatus", b, "object-key-init")
        },
        children: cc11001100_hook("children", t, "object-key-init")
      });
    }
    function c() {
      return (0, s.useContext)(l);
    }
  },
  9301: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      MobileProvider: function () {
        return i;
      },
      useMobileTrans: function () {
        return l;
      }
    });
    var a = cc11001100_hook("a", n(57437), "var-init"),
      o = cc11001100_hook("o", n(2265), "var-init");
    let s = cc11001100_hook("s", (0, o.createContext)(null), "var-init");
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          children: t
        } = cc11001100_hook("", e, "var-init"),
        [n, i] = cc11001100_hook("", (0, o.useState)("left"), "var-init"),
        l = cc11001100_hook("l", (0, o.useCallback)(() => {
          i("left");
        }, [i]), "var-init"),
        r = cc11001100_hook("r", (0, o.useCallback)(() => {
          i("right");
        }, [i]), "var-init"),
        c = cc11001100_hook("c", (0, o.useMemo)(() => "left" === n, [n]), "var-init"),
        _ = cc11001100_hook("_", (0, o.useMemo)(() => "right" === n, [n]), "var-init");
      return (0, a.jsx)(s.Provider, {
        value: {
          setShowLeftSide: cc11001100_hook("setShowLeftSide", l, "object-key-init"),
          setShowRightSide: cc11001100_hook("setShowRightSide", r, "object-key-init"),
          showLeftSide: cc11001100_hook("showLeftSide", c, "object-key-init"),
          showRightSide: cc11001100_hook("showRightSide", _, "object-key-init")
        },
        children: cc11001100_hook("children", t, "object-key-init")
      });
    }
    function l() {
      return (0, o.useContext)(s);
    }
  },
  25266: function (e, t, n) {
    "use strict";

    n.d(t, {
      $N: function () {
        return _;
      },
      Pg: function () {
        return i;
      },
      Un: function () {
        return c;
      },
      rd: function () {
        return r;
      },
      ti: function () {
        return l;
      }
    });
    var a = cc11001100_hook("a", n(1068), "var-init"),
      o = cc11001100_hook("o", n(60444), "var-init"),
      s = cc11001100_hook("s", n(96), "var-init");
    async function i(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let n = cc11001100_hook("n", (0, o.oo)(), "var-init"),
        i = cc11001100_hook("i", {
          url: cc11001100_hook("url", "".concat((0, a.eD)(a.tW), "/bots/users/").concat(e), "object-key-init"),
          method: cc11001100_hook("method", "GET", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + t, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", n, "object-key-init")
          }
        }, "var-init");
      return (0, s.ZP)(i);
    }
    function l() {
      let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "", "object-key-init"),
          method: cc11001100_hook("method", "", "object-key-init"),
          headers: {}
        }, "var-init"),
        t = cc11001100_hook("t", (0, o.oo)(), "var-init");
      e.url = cc11001100_hook("e.url", "".concat((0, a.A6)(a.tW), "/aippt/tokens"), "assign"), e.method = cc11001100_hook("e.method", "GET", "assign");
      let n = cc11001100_hook("n", (0, o.yP)(), "var-init");
      return e.headers = cc11001100_hook("e.headers", {
        "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", t, "object-key-init"),
        "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer ".concat(null == n ? void 0 : n.token), "object-key-init")
      }, "assign"), (0, s.ZP)(e);
    }
    function r(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", (0, o.oo)(), "var-init"),
        n = cc11001100_hook("n", (0, o.yP)(), "var-init"),
        i = cc11001100_hook("i", {
          url: cc11001100_hook("url", "".concat((0, a.A6)(a.tW), "/conversations/conversation/ppt"), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", t, "object-key-init"),
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer ".concat(null == n ? void 0 : n.token), "object-key-init")
          },
          data: cc11001100_hook("data", e || {}, "object-key-init")
        }, "var-init");
      return (0, s.ZP)(i);
    }
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", (0, o.oo)(), "var-init"),
        n = cc11001100_hook("n", (0, o.yP)(), "var-init"),
        i = cc11001100_hook("i", {
          url: cc11001100_hook("url", "".concat((0, a.A6)(a.tW), "/aippt/download"), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "x-api-key": cc11001100_hook("x-api-key", "67b2d4d155a29", "object-key-init"),
            "x-token": cc11001100_hook("x-token", "".concat(e.token), "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", t, "object-key-init"),
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer ".concat(null == n ? void 0 : n.token), "object-key-init")
          },
          data: cc11001100_hook("data", e, "object-key-init")
        }, "var-init");
      return (0, s.ZP)(i);
    }
    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          botId: t
        } = cc11001100_hook("", e, "var-init"),
        n = cc11001100_hook("n", (0, o.oo)(), "var-init"),
        i = cc11001100_hook("i", (0, o.yP)(), "var-init");
      if (!i || !n) return Promise.reject();
      {
        let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "".concat((0, a.A6)(a.tW), "/share/bot"), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + i.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", n, "object-key-init")
          },
          data: {
            botId: cc11001100_hook("botId", t, "object-key-init")
          }
        }, "var-init");
        return (0, s.ZP)(e);
      }
    }
  },
  67814: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      "ai-ppt-block": cc11001100_hook("ai-ppt-block", "Aippt_ai-ppt-block__RPFmx", "object-key-init"),
      ppt_icon: cc11001100_hook("ppt_icon", "Aippt_ppt_icon__OGcWP", "object-key-init"),
      ppt_cover_url: cc11001100_hook("ppt_cover_url", "Aippt_ppt_cover_url__aQQ_Z", "object-key-init"),
      ai_ppt_one_key: cc11001100_hook("ai_ppt_one_key", "Aippt_ai_ppt_one_key__v4qTC", "object-key-init"),
      ppt_down: cc11001100_hook("ppt_down", "Aippt_ppt_down__VP6OY", "object-key-init"),
      download_btn: cc11001100_hook("download_btn", "Aippt_download_btn__XLER6", "object-key-init")
    }, "assign");
  },
  96567: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      answer_body_content: cc11001100_hook("answer_body_content", "Answser_answer_body_content__2ERjZ", "object-key-init"),
      answer_bot_avatar: cc11001100_hook("answer_bot_avatar", "Answser_answer_bot_avatar__U_mZB", "object-key-init"),
      answer_right_content: cc11001100_hook("answer_right_content", "Answser_answer_right_content__C234d", "object-key-init"),
      show_avatar: cc11001100_hook("show_avatar", "Answser_show_avatar__kreSH", "object-key-init"),
      answer_container: cc11001100_hook("answer_container", "Answser_answer_container__VI8rI", "object-key-init"),
      answer_content: cc11001100_hook("answer_content", "Answser_answer_content__uOOYl", "object-key-init"),
      answer_content_last: cc11001100_hook("answer_content_last", "Answser_answer_content_last__MAVKP", "object-key-init"),
      stop_message: cc11001100_hook("stop_message", "Answser_stop_message__pXBpy", "object-key-init"),
      opt_container: cc11001100_hook("opt_container", "Answser_opt_container__WHIfe", "object-key-init"),
      opt_hide: cc11001100_hook("opt_hide", "Answser_opt_hide__a1eTJ", "object-key-init"),
      opt_btn: cc11001100_hook("opt_btn", "Answser_opt_btn__Jrb30", "object-key-init"),
      opt_btn_disable: cc11001100_hook("opt_btn_disable", "Answser_opt_btn_disable__OXNar", "object-key-init"),
      login_btn: cc11001100_hook("login_btn", "Answser_login_btn__dmRYV", "object-key-init"),
      login_text: cc11001100_hook("login_text", "Answser_login_text__PHetn", "object-key-init"),
      login_icon: cc11001100_hook("login_icon", "Answser_login_icon__kcVVp", "object-key-init"),
      ppt_icon: cc11001100_hook("ppt_icon", "Answser_ppt_icon__9rU83", "object-key-init"),
      ppt_cover_url: cc11001100_hook("ppt_cover_url", "Answser_ppt_cover_url__w42of", "object-key-init"),
      ppt_down: cc11001100_hook("ppt_down", "Answser_ppt_down__vvGE3", "object-key-init"),
      ai_ppt_one_key: cc11001100_hook("ai_ppt_one_key", "Answser_ai_ppt_one_key__PQkvK", "object-key-init"),
      ppt_down_ppt: cc11001100_hook("ppt_down_ppt", "Answser_ppt_down_ppt__QttT1", "object-key-init"),
      ppt_down_pdf: cc11001100_hook("ppt_down_pdf", "Answser_ppt_down_pdf__zKbJj", "object-key-init"),
      pdf_edit_ppt: cc11001100_hook("pdf_edit_ppt", "Answser_pdf_edit_ppt__3fCwI", "object-key-init")
    }, "assign");
  },
  30411: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      divider: cc11001100_hook("divider", "ChatContent_divider__uC9Sd", "object-key-init"),
      line: cc11001100_hook("line", "ChatContent_line__vCiEH", "object-key-init"),
      text: cc11001100_hook("text", "ChatContent_text__IpyHk", "object-key-init")
    }, "assign");
  },
  81589: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      conv_list: cc11001100_hook("conv_list", "share_conv_list__P5hnD", "object-key-init"),
      share_chat_ctnt: cc11001100_hook("share_chat_ctnt", "share_share_chat_ctnt__J_y02", "object-key-init"),
      reback_btn: cc11001100_hook("reback_btn", "share_reback_btn__6zLPV", "object-key-init")
    }, "assign");
  },
  61352: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      question_container: cc11001100_hook("question_container", "Question_question_container__Do96r", "object-key-init"),
      question_content: cc11001100_hook("question_content", "Question_question_content__zwgZM", "object-key-init"),
      rewrite: cc11001100_hook("rewrite", "Question_rewrite__ja_u9", "object-key-init"),
      question_loading: cc11001100_hook("question_loading", "Question_question_loading__c7KHr", "object-key-init"),
      roll_loading: cc11001100_hook("roll_loading", "Question_roll_loading__M6iJ0", "object-key-init"),
      question_timeout: cc11001100_hook("question_timeout", "Question_question_timeout____iKH", "object-key-init"),
      media_list: cc11001100_hook("media_list", "Question_media_list__H0uvI", "object-key-init"),
      question_content_pre: cc11001100_hook("question_content_pre", "Question_question_content_pre__LzBmG", "object-key-init"),
      image_loading: cc11001100_hook("image_loading", "Question_image_loading__kNYEQ", "object-key-init"),
      loader: cc11001100_hook("loader", "Question_loader__Pt3lU", "object-key-init"),
      rotate: cc11001100_hook("rotate", "Question_rotate__Q_4bh", "object-key-init"),
      prixClipFix: cc11001100_hook("prixClipFix", "Question_prixClipFix__CRP3P", "object-key-init")
    }, "assign");
  },
  75322: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      report_modal: cc11001100_hook("report_modal", "ReportModal_report_modal__1toI1", "object-key-init"),
      feed_item: cc11001100_hook("feed_item", "ReportModal_feed_item__9gmea", "object-key-init"),
      feed_item_act: cc11001100_hook("feed_item_act", "ReportModal_feed_item_act__ofC1c", "object-key-init"),
      feedback_container: cc11001100_hook("feedback_container", "ReportModal_feedback_container__JRCEp", "object-key-init"),
      reback_btn: cc11001100_hook("reback_btn", "ReportModal_reback_btn__dCn5D", "object-key-init")
    }, "assign");
  },
  72613: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      operation_l: cc11001100_hook("operation_l", "TurnCard_operation_l__GHp1k", "object-key-init"),
      left_opts: cc11001100_hook("left_opts", "TurnCard_left_opts__iXG7K", "object-key-init"),
      right_opts: cc11001100_hook("right_opts", "TurnCard_right_opts__kIvEV", "object-key-init"),
      more_opts_show: cc11001100_hook("more_opts_show", "TurnCard_more_opts_show__qb7Z5", "object-key-init"),
      opt_name: cc11001100_hook("opt_name", "TurnCard_opt_name__33H73", "object-key-init"),
      opt_btn: cc11001100_hook("opt_btn", "TurnCard_opt_btn__vRKug", "object-key-init"),
      opt_btn_disable: cc11001100_hook("opt_btn_disable", "TurnCard_opt_btn_disable__gIAul", "object-key-init"),
      opt_btn_icon: cc11001100_hook("opt_btn_icon", "TurnCard_opt_btn_icon__EGcEv", "object-key-init"),
      copy_icon: cc11001100_hook("copy_icon", "TurnCard_copy_icon__vOgVt", "object-key-init"),
      more_opts_btn: cc11001100_hook("more_opts_btn", "TurnCard_more_opts_btn__HU8O0", "object-key-init"),
      like_act: cc11001100_hook("like_act", "TurnCard_like_act__Qz4bk", "object-key-init"),
      like_name_act: cc11001100_hook("like_name_act", "TurnCard_like_name_act__97uEt", "object-key-init"),
      like: cc11001100_hook("like", "TurnCard_like__xmB0k", "object-key-init"),
      dislike: cc11001100_hook("dislike", "TurnCard_dislike__YVqB8", "object-key-init"),
      dislike_act: cc11001100_hook("dislike_act", "TurnCard_dislike_act__SuULP", "object-key-init"),
      delete_icon: cc11001100_hook("delete_icon", "TurnCard_delete_icon__yHRqB", "object-key-init"),
      dislike_name_act: cc11001100_hook("dislike_name_act", "TurnCard_dislike_name_act__gfj1_", "object-key-init"),
      left_btn: cc11001100_hook("left_btn", "TurnCard_left_btn__wVuUd", "object-key-init"),
      right_btn: cc11001100_hook("right_btn", "TurnCard_right_btn__uxtYx", "object-key-init"),
      reload_btn: cc11001100_hook("reload_btn", "TurnCard_reload_btn__OcD0g", "object-key-init"),
      answer_container: cc11001100_hook("answer_container", "TurnCard_answer_container__r6ule", "object-key-init"),
      answer_content: cc11001100_hook("answer_content", "TurnCard_answer_content__SXjJX", "object-key-init"),
      opt_content: cc11001100_hook("opt_content", "TurnCard_opt_content__lCAEF", "object-key-init"),
      turn_container: cc11001100_hook("turn_container", "TurnCard_turn_container__6ntjV", "object-key-init"),
      page_text: cc11001100_hook("page_text", "TurnCard_page_text__L_rdn", "object-key-init")
    }, "assign");
  },
  77064: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      suggested_q: cc11001100_hook("suggested_q", "suggestedQuestion_suggested_q__FOqIJ", "object-key-init"),
      suggested_r1: cc11001100_hook("suggested_r1", "suggestedQuestion_suggested_r1__IaP1x", "object-key-init"),
      icon: cc11001100_hook("icon", "suggestedQuestion_icon__89M8C", "object-key-init"),
      text: cc11001100_hook("text", "suggestedQuestion_text__dfNTL", "object-key-init"),
      container: cc11001100_hook("container", "suggestedQuestion_container__lqi65", "object-key-init"),
      loading_container: cc11001100_hook("loading_container", "suggestedQuestion_loading_container__9k_lZ", "object-key-init"),
      enter: cc11001100_hook("enter", "suggestedQuestion_enter__1wghF", "object-key-init")
    }, "assign");
  },
  69549: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      page_loading: cc11001100_hook("page_loading", "page_page_loading__tjzwu", "object-key-init"),
      page_container: cc11001100_hook("page_container", "page_page_container__60oL4", "object-key-init"),
      bot_offline_mask: cc11001100_hook("bot_offline_mask", "page_bot_offline_mask___5n0U", "object-key-init"),
      bot_offline_content: cc11001100_hook("bot_offline_content", "page_bot_offline_content__DgLWj", "object-key-init"),
      bot_offline_tip: cc11001100_hook("bot_offline_tip", "page_bot_offline_tip__iuUG5", "object-key-init"),
      bot_offline_ctn: cc11001100_hook("bot_offline_ctn", "page_bot_offline_ctn___j8O3", "object-key-init"),
      backdrop: cc11001100_hook("backdrop", "page_backdrop__NGa5v", "object-key-init"),
      footer_dwn_btn: cc11001100_hook("footer_dwn_btn", "page_footer_dwn_btn__x2cgI", "object-key-init"),
      empty_content: cc11001100_hook("empty_content", "page_empty_content__0VwZc", "object-key-init"),
      empty_content_vis: cc11001100_hook("empty_content_vis", "page_empty_content_vis__Vs8xA", "object-key-init"),
      inlet: cc11001100_hook("inlet", "page_inlet__MuJ_r", "object-key-init"),
      inlet_vis: cc11001100_hook("inlet_vis", "page_inlet_vis__HhusV", "object-key-init")
    }, "assign");
  },
  72467: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      me_container: cc11001100_hook("me_container", "Footer_me_container__1q7fl", "object-key-init"),
      me_msg: cc11001100_hook("me_msg", "Footer_me_msg__YobzY", "object-key-init"),
      me_item: cc11001100_hook("me_item", "Footer_me_item__NYKOj", "object-key-init"),
      divider: cc11001100_hook("divider", "Footer_divider__gGV_k", "object-key-init"),
      me_detail: cc11001100_hook("me_detail", "Footer_me_detail__GcBMP", "object-key-init"),
      discovery_card: cc11001100_hook("discovery_card", "Footer_discovery_card__X0wgX", "object-key-init"),
      discovery_icon: cc11001100_hook("discovery_icon", "Footer_discovery_icon__p5_ft", "object-key-init"),
      discovery_icon_act: cc11001100_hook("discovery_icon_act", "Footer_discovery_icon_act__lPBkj", "object-key-init"),
      discovery_msg: cc11001100_hook("discovery_msg", "Footer_discovery_msg__i4Qee", "object-key-init"),
      discovery_msg_act: cc11001100_hook("discovery_msg_act", "Footer_discovery_msg_act__4kUfO", "object-key-init"),
      setting_icon: cc11001100_hook("setting_icon", "Footer_setting_icon__Qb48O", "object-key-init"),
      setting_card: cc11001100_hook("setting_card", "Footer_setting_card__v0kW1", "object-key-init"),
      setting: cc11001100_hook("setting", "Footer_setting__WB9NQ", "object-key-init"),
      setting_act: cc11001100_hook("setting_act", "Footer_setting_act__V_hv6", "object-key-init"),
      setting_msg: cc11001100_hook("setting_msg", "Footer_setting_msg__Bw1nR", "object-key-init"),
      setting_msg_act: cc11001100_hook("setting_msg_act", "Footer_setting_msg_act__OEj3w", "object-key-init"),
      qr_code: cc11001100_hook("qr_code", "Footer_qr_code__I_Lgl", "object-key-init"),
      qr_code_mob: cc11001100_hook("qr_code_mob", "Footer_qr_code_mob__CN8Ew", "object-key-init"),
      code_container: cc11001100_hook("code_container", "Footer_code_container__mSgM3", "object-key-init"),
      code: cc11001100_hook("code", "Footer_code__YNguE", "object-key-init"),
      code_msg: cc11001100_hook("code_msg", "Footer_code_msg__l0HI8", "object-key-init"),
      about_our: cc11001100_hook("about_our", "Footer_about_our__vB4Au", "object-key-init"),
      about_our_act: cc11001100_hook("about_our_act", "Footer_about_our_act__E_3Az", "object-key-init"),
      ios_code: cc11001100_hook("ios_code", "Footer_ios_code__Tm9kG", "object-key-init"),
      msg_icon: cc11001100_hook("msg_icon", "Footer_msg_icon__R_f0Q", "object-key-init"),
      user_icon: cc11001100_hook("user_icon", "Footer_user_icon__rUojk", "object-key-init"),
      private_icon: cc11001100_hook("private_icon", "Footer_private_icon__y8Gfr", "object-key-init"),
      aboutus_icon: cc11001100_hook("aboutus_icon", "Footer_aboutus_icon__bk9AR", "object-key-init"),
      download_buttons_container: cc11001100_hook("download_buttons_container", "Footer_download_buttons_container__8nbe9", "object-key-init"),
      download_button: cc11001100_hook("download_button", "Footer_download_button__k5kDg", "object-key-init"),
      icon: cc11001100_hook("icon", "Footer_icon__rdpi7", "object-key-init"),
      app_icon: cc11001100_hook("app_icon", "Footer_app_icon__7nFP4", "object-key-init"),
      pc_icon: cc11001100_hook("pc_icon", "Footer_pc_icon__R8tV6", "object-key-init"),
      jion_group_icon: cc11001100_hook("jion_group_icon", "Footer_jion_group_icon__DHID3", "object-key-init")
    }, "assign");
  },
  52802: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      btn: cc11001100_hook("btn", "Button_btn__bJHsP", "object-key-init"),
      disabled: cc11001100_hook("disabled", "Button_disabled__anlhz", "object-key-init"),
      enable: cc11001100_hook("enable", "Button_enable__jckq2", "object-key-init"),
      btn_loading: cc11001100_hook("btn_loading", "Button_btn_loading__W9LPe", "object-key-init"),
      roll_loading: cc11001100_hook("roll_loading", "Button_roll_loading__YttFX", "object-key-init")
    }, "assign");
  },
  80170: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      main_content: cc11001100_hook("main_content", "ChatEmpty_main_content__Fzvcc", "object-key-init"),
      fade_in: cc11001100_hook("fade_in", "ChatEmpty_fade_in___r_sx", "object-key-init"),
      main_inner: cc11001100_hook("main_inner", "ChatEmpty_main_inner__xx0gB", "object-key-init"),
      content_container: cc11001100_hook("content_container", "ChatEmpty_content_container__lL1Be", "object-key-init"),
      logo_container: cc11001100_hook("logo_container", "ChatEmpty_logo_container__lNt7g", "object-key-init"),
      homepage_logo: cc11001100_hook("homepage_logo", "ChatEmpty_homepage_logo__F_hzO", "object-key-init"),
      homepage_logo_halloween: cc11001100_hook("homepage_logo_halloween", "ChatEmpty_homepage_logo_halloween__ooH8G", "object-key-init"),
      homepage_logo_christmas: cc11001100_hook("homepage_logo_christmas", "ChatEmpty_homepage_logo_christmas__tHs_9", "object-key-init"),
      homepage_logo_newyear: cc11001100_hook("homepage_logo_newyear", "ChatEmpty_homepage_logo_newyear__It5ns", "object-key-init"),
      input_ctn: cc11001100_hook("input_ctn", "ChatEmpty_input_ctn__0prhL", "object-key-init"),
      sug_ctn: cc11001100_hook("sug_ctn", "ChatEmpty_sug_ctn__iVVWg", "object-key-init"),
      perspect: cc11001100_hook("perspect", "ChatEmpty_perspect__F_qan", "object-key-init"),
      item_container: cc11001100_hook("item_container", "ChatEmpty_item_container__isWXE", "object-key-init"),
      item: cc11001100_hook("item", "ChatEmpty_item__yV7Rs", "object-key-init"),
      active: cc11001100_hook("active", "ChatEmpty_active__ASmdD", "object-key-init"),
      "item-enter": cc11001100_hook("item-enter", "ChatEmpty_item-enter__qIfVP", "object-key-init"),
      "item-enter-active": cc11001100_hook("item-enter-active", "ChatEmpty_item-enter-active__p_3Zw", "object-key-init"),
      "item-exit": cc11001100_hook("item-exit", "ChatEmpty_item-exit__PtWXX", "object-key-init"),
      "item-exit-active": cc11001100_hook("item-exit-active", "ChatEmpty_item-exit-active__LFqwm", "object-key-init")
    }, "assign");
  },
  73298: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      share_btn_container: cc11001100_hook("share_btn_container", "ConverShare_share_btn_container__Gx0SN", "object-key-init"),
      disabled: cc11001100_hook("disabled", "ConverShare_disabled__5RjTw", "object-key-init"),
      share_icon: cc11001100_hook("share_icon", "ConverShare_share_icon__NiycO", "object-key-init"),
      share_text: cc11001100_hook("share_text", "ConverShare_share_text__wvsq0", "object-key-init")
    }, "assign");
  },
  63846: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      drop_file: cc11001100_hook("drop_file", "FileUpload_drop_file__muPw0", "object-key-init"),
      upload_mask: cc11001100_hook("upload_mask", "FileUpload_upload_mask__YlDo4", "object-key-init"),
      upload_mask_open: cc11001100_hook("upload_mask_open", "FileUpload_upload_mask_open__Jkxak", "object-key-init"),
      upload_mask_blur: cc11001100_hook("upload_mask_blur", "FileUpload_upload_mask_blur__cT6Jm", "object-key-init"),
      cursor: cc11001100_hook("cursor", "FileUpload_cursor__f8dTb", "object-key-init"),
      drop_content: cc11001100_hook("drop_content", "FileUpload_drop_content__2_KwI", "object-key-init"),
      drop_icon: cc11001100_hook("drop_icon", "FileUpload_drop_icon__w75Ti", "object-key-init"),
      drop_title: cc11001100_hook("drop_title", "FileUpload_drop_title__R_TS2", "object-key-init"),
      drop_desc: cc11001100_hook("drop_desc", "FileUpload_drop_desc__8HU7G", "object-key-init"),
      upload_icon: cc11001100_hook("upload_icon", "FileUpload_upload_icon__btXtf", "object-key-init"),
      file: cc11001100_hook("file", "FileUpload_file__K0YGt", "object-key-init"),
      image: cc11001100_hook("image", "FileUpload_image__16a09", "object-key-init"),
      file_ctn: cc11001100_hook("file_ctn", "FileUpload_file_ctn__L_taC", "object-key-init"),
      state_err: cc11001100_hook("state_err", "FileUpload_state_err__eKPyv", "object-key-init"),
      image_container: cc11001100_hook("image_container", "FileUpload_image_container__nEx_c", "object-key-init"),
      single_image_container: cc11001100_hook("single_image_container", "FileUpload_single_image_container__Vchd3", "object-key-init"),
      file_icon: cc11001100_hook("file_icon", "FileUpload_file_icon__wdYqZ", "object-key-init"),
      file_type_jpg: cc11001100_hook("file_type_jpg", "FileUpload_file_type_jpg__jDO94", "object-key-init"),
      file_type_png: cc11001100_hook("file_type_png", "FileUpload_file_type_png__n9YbR", "object-key-init"),
      file_type_jpeg: cc11001100_hook("file_type_jpeg", "FileUpload_file_type_jpeg__AoeQ1", "object-key-init"),
      file_type_gif: cc11001100_hook("file_type_gif", "FileUpload_file_type_gif__X0qjr", "object-key-init"),
      file_type_bmp: cc11001100_hook("file_type_bmp", "FileUpload_file_type_bmp___Lbrk", "object-key-init"),
      file_type_webp: cc11001100_hook("file_type_webp", "FileUpload_file_type_webp__W_5Ar", "object-key-init"),
      file_type_csv: cc11001100_hook("file_type_csv", "FileUpload_file_type_csv__wxFDW", "object-key-init"),
      file_type_doc: cc11001100_hook("file_type_doc", "FileUpload_file_type_doc__9p8Zp", "object-key-init"),
      file_type_pdf: cc11001100_hook("file_type_pdf", "FileUpload_file_type_pdf__3JNnk", "object-key-init"),
      file_type_ppt: cc11001100_hook("file_type_ppt", "FileUpload_file_type_ppt__ep4rw", "object-key-init"),
      file_type_pptx: cc11001100_hook("file_type_pptx", "FileUpload_file_type_pptx__zP_SR", "object-key-init"),
      file_type_txt: cc11001100_hook("file_type_txt", "FileUpload_file_type_txt__KiEyz", "object-key-init"),
      file_type_xlsx: cc11001100_hook("file_type_xlsx", "FileUpload_file_type_xlsx__zFMs8", "object-key-init"),
      file_name: cc11001100_hook("file_name", "FileUpload_file_name__RR3dN", "object-key-init"),
      state_message: cc11001100_hook("state_message", "FileUpload_state_message__ctX04", "object-key-init"),
      msg_ctn: cc11001100_hook("msg_ctn", "FileUpload_msg_ctn__3FNaf", "object-key-init"),
      process: cc11001100_hook("process", "FileUpload_process__tgZ6o", "object-key-init"),
      close_icon: cc11001100_hook("close_icon", "FileUpload_close_icon__kFPfe", "object-key-init"),
      sec_line: cc11001100_hook("sec_line", "FileUpload_sec_line__R1Dd2", "object-key-init"),
      thumb_ctn: cc11001100_hook("thumb_ctn", "FileUpload_thumb_ctn__mPEho", "object-key-init"),
      thumb_ctn_hasclose: cc11001100_hook("thumb_ctn_hasclose", "FileUpload_thumb_ctn_hasclose__uIJbE", "object-key-init"),
      thumb_msg: cc11001100_hook("thumb_msg", "FileUpload_thumb_msg__ShVe2", "object-key-init"),
      thumb_close_icon: cc11001100_hook("thumb_close_icon", "FileUpload_thumb_close_icon__U8umG", "object-key-init"),
      thumb_row_icon: cc11001100_hook("thumb_row_icon", "FileUpload_thumb_row_icon__TzqSU", "object-key-init"),
      thumb_file_icon: cc11001100_hook("thumb_file_icon", "FileUpload_thumb_file_icon__vk3Un", "object-key-init"),
      thumb_container: cc11001100_hook("thumb_container", "FileUpload_thumb_container__C7Gqn", "object-key-init"),
      thumb_container_no_close: cc11001100_hook("thumb_container_no_close", "FileUpload_thumb_container_no_close__o409m", "object-key-init")
    }, "assign");
  },
  68948: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      "dot-flashing": cc11001100_hook("dot-flashing", "style_dot-flashing___2Rko", "object-key-init"),
      text: cc11001100_hook("text", "style_text__n1uQ6", "object-key-init"),
      avatar: cc11001100_hook("avatar", "style_avatar__LQ52c", "object-key-init"),
      "dot-flashing-avatar": cc11001100_hook("dot-flashing-avatar", "style_dot-flashing-avatar__iPoFF", "object-key-init"),
      dot: cc11001100_hook("dot", "style_dot__j3A0W", "object-key-init"),
      loader: cc11001100_hook("loader", "style_loader__dT6gK", "object-key-init"),
      animloader: cc11001100_hook("animloader", "style_animloader__tWtW0", "object-key-init")
    }, "assign");
  },
  7444: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      modal_container: cc11001100_hook("modal_container", "Modal_modal_container__Wkym7", "object-key-init"),
      modal_title: cc11001100_hook("modal_title", "Modal_modal_title__oN0yt", "object-key-init"),
      modal_close: cc11001100_hook("modal_close", "Modal_modal_close__pl__X", "object-key-init")
    }, "assign");
  },
  437: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      page_header: cc11001100_hook("page_header", "PageHeader_page_header__hNSGv", "object-key-init"),
      back_btn: cc11001100_hook("back_btn", "PageHeader_back_btn__6NzaZ", "object-key-init"),
      title: cc11001100_hook("title", "PageHeader_title__Xz1zW", "object-key-init"),
      download: cc11001100_hook("download", "PageHeader_download__xcDlj", "object-key-init"),
      download_msg: cc11001100_hook("download_msg", "PageHeader_download_msg__JbkFi", "object-key-init"),
      download_icon: cc11001100_hook("download_icon", "PageHeader_download_icon__yCJvv", "object-key-init")
    }, "assign");
  },
  54544: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      item_container: cc11001100_hook("item_container", "SuggestSection_item_container__SUxBz", "object-key-init"),
      item_inctn: cc11001100_hook("item_inctn", "SuggestSection_item_inctn__UOPDK", "object-key-init"),
      inner_text: cc11001100_hook("inner_text", "SuggestSection_inner_text__bFm40", "object-key-init"),
      refresh_con: cc11001100_hook("refresh_con", "SuggestSection_refresh_con__eaD5Y", "object-key-init"),
      refresh_ctn: cc11001100_hook("refresh_ctn", "SuggestSection_refresh_ctn__oAO3p", "object-key-init"),
      refresh_btn: cc11001100_hook("refresh_btn", "SuggestSection_refresh_btn__8OQvH", "object-key-init"),
      suggest_section_c: cc11001100_hook("suggest_section_c", "SuggestSection_suggest_section_c__gAYPV", "object-key-init"),
      item_wrap: cc11001100_hook("item_wrap", "SuggestSection_item_wrap__8Wzje", "object-key-init")
    }, "assign");
  },
  4046: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      input: cc11001100_hook("input", "TextArea_input__oJeqJ", "object-key-init"),
      container: cc11001100_hook("container", "TextArea_container__U0Ely", "object-key-init"),
      container_focus: cc11001100_hook("container_focus", "TextArea_container_focus__GU7iP", "object-key-init")
    }, "assign");
  },
  90328: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      right: cc11001100_hook("right", "page_right__UMq_q", "object-key-init"),
      input_content: cc11001100_hook("input_content", "page_input_content__SNh9E", "object-key-init"),
      input_mask: cc11001100_hook("input_mask", "page_input_mask__VH_0c", "object-key-init"),
      inlet: cc11001100_hook("inlet", "page_inlet__18DL5", "object-key-init"),
      ellipsis_ctl: cc11001100_hook("ellipsis_ctl", "page_ellipsis_ctl__iEApr", "object-key-init"),
      ellipsis_icon: cc11001100_hook("ellipsis_icon", "page_ellipsis_icon__17gBR", "object-key-init"),
      term: cc11001100_hook("term", "page_term__AEJTs", "object-key-init"),
      term_content: cc11001100_hook("term_content", "page_term_content__5k1UP", "object-key-init"),
      check_cont: cc11001100_hook("check_cont", "page_check_cont__HuQ64", "object-key-init"),
      modal_cancel: cc11001100_hook("modal_cancel", "page_modal_cancel__E5e3Q", "object-key-init"),
      modal_confirm: cc11001100_hook("modal_confirm", "page_modal_confirm__y3Ano", "object-key-init"),
      modal_title: cc11001100_hook("modal_title", "page_modal_title__a4T_3", "object-key-init"),
      modal_content: cc11001100_hook("modal_content", "page_modal_content__s3GWi", "object-key-init"),
      modal_term: cc11001100_hook("modal_term", "page_modal_term___UGfX", "object-key-init"),
      modal: cc11001100_hook("modal", "page_modal__Zu_ho", "object-key-init"),
      clost_icon: cc11001100_hook("clost_icon", "page_clost_icon__KMwO3", "object-key-init"),
      btn_container: cc11001100_hook("btn_container", "page_btn_container__qs585", "object-key-init"),
      bot_glass: cc11001100_hook("bot_glass", "page_bot_glass__h_7q3", "object-key-init"),
      left: cc11001100_hook("left", "page_left__kiRJI", "object-key-init"),
      main_content: cc11001100_hook("main_content", "page_main_content__387OI", "object-key-init")
    }, "assign");
  },
  26163: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      conversation_main_menu: cc11001100_hook("conversation_main_menu", "ConverMenu_conversation_main_menu__Ot5YO", "object-key-init"),
      menu_wrapper: cc11001100_hook("menu_wrapper", "ConverMenu_menu_wrapper__HdRXK", "object-key-init"),
      disabled: cc11001100_hook("disabled", "ConverMenu_disabled__S3IWe", "object-key-init"),
      menu_icon: cc11001100_hook("menu_icon", "ConverMenu_menu_icon__GHRAS", "object-key-init"),
      menu_text: cc11001100_hook("menu_text", "ConverMenu_menu_text__5iEDR", "object-key-init"),
      menu_label: cc11001100_hook("menu_label", "ConverMenu_menu_label__0Ce_8", "object-key-init"),
      hidden: cc11001100_hook("hidden", "ConverMenu_hidden__X1GiQ", "object-key-init")
    }, "assign");
  },
  65945: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      conversation_sub_menu: cc11001100_hook("conversation_sub_menu", "ConverSubMenu_conversation_sub_menu__kLXOr", "object-key-init"),
      title_wrapper: cc11001100_hook("title_wrapper", "ConverSubMenu_title_wrapper__WVEN5", "object-key-init"),
      title: cc11001100_hook("title", "ConverSubMenu_title__UaaUZ", "object-key-init"),
      close_icon: cc11001100_hook("close_icon", "ConverSubMenu_close_icon__3ZTUQ", "object-key-init"),
      drop_upload_container: cc11001100_hook("drop_upload_container", "ConverSubMenu_drop_upload_container__uIzHV", "object-key-init"),
      drop_upload_zone: cc11001100_hook("drop_upload_zone", "ConverSubMenu_drop_upload_zone__DOCZ0", "object-key-init"),
      sub_menu_content: cc11001100_hook("sub_menu_content", "ConverSubMenu_sub_menu_content__Befkr", "object-key-init"),
      sub_menu_list: cc11001100_hook("sub_menu_list", "ConverSubMenu_sub_menu_list__nDMIk", "object-key-init"),
      sub_menu_item: cc11001100_hook("sub_menu_item", "ConverSubMenu_sub_menu_item__HYYwp", "object-key-init"),
      hidden: cc11001100_hook("hidden", "ConverSubMenu_hidden__RiGF_", "object-key-init")
    }, "assign");
  },
  69601: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      hidden: cc11001100_hook("hidden", "MsgInput_hidden__UDp8M", "object-key-init"),
      cancel_top_radius: cc11001100_hook("cancel_top_radius", "MsgInput_cancel_top_radius__yUm6O", "object-key-init")
    }, "assign");
  },
  35333: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      wrapper: cc11001100_hook("wrapper", "NewConversationButton_wrapper__atE_A", "object-key-init"),
      "button-inner": cc11001100_hook("button-inner", "NewConversationButton_button-inner__LDc9r", "object-key-init")
    }, "assign");
  },
  33555: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      bot_share_container: cc11001100_hook("bot_share_container", "BotShareDrawer_bot_share_container__3Qxo_", "object-key-init"),
      bot_avatar_container: cc11001100_hook("bot_avatar_container", "BotShareDrawer_bot_avatar_container__FG_rS", "object-key-init"),
      bot_avatar: cc11001100_hook("bot_avatar", "BotShareDrawer_bot_avatar__AjaCK", "object-key-init"),
      bot_name: cc11001100_hook("bot_name", "BotShareDrawer_bot_name___PVKL", "object-key-init"),
      bot_desc: cc11001100_hook("bot_desc", "BotShareDrawer_bot_desc__0qeIU", "object-key-init"),
      btn_container: cc11001100_hook("btn_container", "BotShareDrawer_btn_container__dzg0u", "object-key-init"),
      backdrop: cc11001100_hook("backdrop", "BotShareDrawer_backdrop__1ol7k", "object-key-init"),
      share_btn: cc11001100_hook("share_btn", "BotShareDrawer_share_btn___jCeI", "object-key-init"),
      close_btn: cc11001100_hook("close_btn", "BotShareDrawer_close_btn__fQRPN", "object-key-init")
    }, "assign");
  },
  7866: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      code_container: cc11001100_hook("code_container", "NaDownload_code_container__wlQLY", "object-key-init"),
      ios_code: cc11001100_hook("ios_code", "NaDownload_ios_code__7w_ss", "object-key-init"),
      code_msg: cc11001100_hook("code_msg", "NaDownload_code_msg__nrGzs", "object-key-init"),
      more_content: cc11001100_hook("more_content", "NaDownload_more_content__8nxuf", "object-key-init"),
      more_download_text: cc11001100_hook("more_download_text", "NaDownload_more_download_text__RZsDJ", "object-key-init"),
      more_download_arrow: cc11001100_hook("more_download_arrow", "NaDownload_more_download_arrow__Z9Cfz", "object-key-init"),
      join_group: cc11001100_hook("join_group", "NaDownload_join_group__mInnK", "object-key-init")
    }, "assign");
  },
  13772: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      bot_info: cc11001100_hook("bot_info", "BotIntro_bot_info__mR3La", "object-key-init"),
      common_style: cc11001100_hook("common_style", "BotIntro_common_style__MIr_4", "object-key-init"),
      bot_logo: cc11001100_hook("bot_logo", "BotIntro_bot_logo__DsOfC", "object-key-init"),
      bot_avatar: cc11001100_hook("bot_avatar", "BotIntro_bot_avatar__5Z8YS", "object-key-init"),
      bot_name: cc11001100_hook("bot_name", "BotIntro_bot_name__jxvqV", "object-key-init"),
      bot_opening_remarks: cc11001100_hook("bot_opening_remarks", "BotIntro_bot_opening_remarks__SripS", "object-key-init"),
      another_bot_info: cc11001100_hook("another_bot_info", "BotIntro_another_bot_info__w7CTJ", "object-key-init"),
      another_style: cc11001100_hook("another_style", "BotIntro_another_style__kM1qk", "object-key-init"),
      content_top: cc11001100_hook("content_top", "BotIntro_content_top__D92qh", "object-key-init"),
      bot_red_point: cc11001100_hook("bot_red_point", "BotIntro_bot_red_point___XRay", "object-key-init"),
      bot_desc: cc11001100_hook("bot_desc", "BotIntro_bot_desc__qK401", "object-key-init"),
      bot_fulldesc: cc11001100_hook("bot_fulldesc", "BotIntro_bot_fulldesc__rjLjd", "object-key-init")
    }, "assign");
  },
  80976: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      feature_container: cc11001100_hook("feature_container", "ModelFeatureBtn_feature_container__zKrBY", "object-key-init"),
      btn: cc11001100_hook("btn", "ModelFeatureBtn_btn__Z4jgB", "object-key-init"),
      btn_act: cc11001100_hook("btn_act", "ModelFeatureBtn_btn_act__nEqLt", "object-key-init"),
      dis_btn: cc11001100_hook("dis_btn", "ModelFeatureBtn_dis_btn__I9qkU", "object-key-init"),
      icon_ctn: cc11001100_hook("icon_ctn", "ModelFeatureBtn_icon_ctn__qjDsJ", "object-key-init"),
      icon_img: cc11001100_hook("icon_img", "ModelFeatureBtn_icon_img__cxdON", "object-key-init"),
      icon_img_vis: cc11001100_hook("icon_img_vis", "ModelFeatureBtn_icon_img_vis__1qN3j", "object-key-init"),
      btn_msg: cc11001100_hook("btn_msg", "ModelFeatureBtn_btn_msg__P_VpO", "object-key-init"),
      deepthink_icon: cc11001100_hook("deepthink_icon", "ModelFeatureBtn_deepthink_icon__pf5yS", "object-key-init")
    }, "assign");
  },
  97663: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      container_wrapper: cc11001100_hook("container_wrapper", "MsgInput_container_wrapper__XWLzJ", "object-key-init"),
      active: cc11001100_hook("active", "MsgInput_active__GJt3A", "object-key-init"),
      input_container: cc11001100_hook("input_container", "MsgInput_input_container__84ggG", "object-key-init"),
      input_content: cc11001100_hook("input_content", "MsgInput_input_content__ZDk11", "object-key-init"),
      cancel_radius: cc11001100_hook("cancel_radius", "MsgInput_cancel_radius__g7KJJ", "object-key-init"),
      input_main: cc11001100_hook("input_main", "MsgInput_input_main__NBiQb", "object-key-init"),
      no_left: cc11001100_hook("no_left", "MsgInput_no_left__b_rgy", "object-key-init"),
      left_tools: cc11001100_hook("left_tools", "MsgInput_left_tools__dHrYL", "object-key-init"),
      right_tools: cc11001100_hook("right_tools", "MsgInput_right_tools__9AXmW", "object-key-init"),
      right_tools_item: cc11001100_hook("right_tools_item", "MsgInput_right_tools_item__o7CIi", "object-key-init"),
      input_box: cc11001100_hook("input_box", "MsgInput_input_box__KcMBz", "object-key-init"),
      new_conver_disable: cc11001100_hook("new_conver_disable", "MsgInput_new_conver_disable__4DBHW", "object-key-init"),
      new_conver: cc11001100_hook("new_conver", "MsgInput_new_conver__RdLyD", "object-key-init"),
      icon_container: cc11001100_hook("icon_container", "MsgInput_icon_container__4burH", "object-key-init"),
      disabled: cc11001100_hook("disabled", "MsgInput_disabled__qJYGq", "object-key-init"),
      input_textarea: cc11001100_hook("input_textarea", "MsgInput_input_textarea__qCu6C", "object-key-init"),
      input_padding_bottom: cc11001100_hook("input_padding_bottom", "MsgInput_input_padding_bottom__RP_RY", "object-key-init"),
      input: cc11001100_hook("input", "MsgInput_input__mZpgf", "object-key-init"),
      send_btn: cc11001100_hook("send_btn", "MsgInput_send_btn__Zwtw1", "object-key-init"),
      send_btn_act: cc11001100_hook("send_btn_act", "MsgInput_send_btn_act__InY8H", "object-key-init"),
      init: cc11001100_hook("init", "MsgInput_init__BGumc", "object-key-init"),
      stop_btn: cc11001100_hook("stop_btn", "MsgInput_stop_btn__9oS6t", "object-key-init"),
      send_icon: cc11001100_hook("send_icon", "MsgInput_send_icon__zL__Y", "object-key-init"),
      file_list: cc11001100_hook("file_list", "MsgInput_file_list__Qb9eG", "object-key-init")
    }, "assign");
  },
  20471: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      container: cc11001100_hook("container", "LinkCard_container__CRYVh", "object-key-init"),
      card: cc11001100_hook("card", "LinkCard_card__5DMSB", "object-key-init"),
      content: cc11001100_hook("content", "LinkCard_content__KJXgN", "object-key-init"),
      title: cc11001100_hook("title", "LinkCard_title__FqRIc", "object-key-init"),
      source: cc11001100_hook("source", "LinkCard_source__VHJHG", "object-key-init"),
      moreButton: cc11001100_hook("moreButton", "LinkCard_moreButton__Xl30q", "object-key-init"),
      moreCntent: cc11001100_hook("moreCntent", "LinkCard_moreCntent__ApJbg", "object-key-init"),
      moreLogos: cc11001100_hook("moreLogos", "LinkCard_moreLogos__ptrlj", "object-key-init")
    }, "assign");
  },
  92667: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      container: cc11001100_hook("container", "WebSearchDetail_container__jiWZu", "object-key-init"),
      header: cc11001100_hook("header", "WebSearchDetail_header__pSX44", "object-key-init"),
      header_content: cc11001100_hook("header_content", "WebSearchDetail_header_content__Jbuie", "object-key-init"),
      search_icon: cc11001100_hook("search_icon", "WebSearchDetail_search_icon__wxF_V", "object-key-init"),
      toggleButton: cc11001100_hook("toggleButton", "WebSearchDetail_toggleButton__OBVZT", "object-key-init"),
      expanded: cc11001100_hook("expanded", "WebSearchDetail_expanded__0Qen_", "object-key-init"),
      details: cc11001100_hook("details", "WebSearchDetail_details__2DCpp", "object-key-init"),
      collapsed: cc11001100_hook("collapsed", "WebSearchDetail_collapsed__8mwX_", "object-key-init"),
      details_body: cc11001100_hook("details_body", "WebSearchDetail_details_body__4X68j", "object-key-init"),
      detailItem: cc11001100_hook("detailItem", "WebSearchDetail_detailItem__z0bJS", "object-key-init")
    }, "assign");
  },
  4194: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      button: cc11001100_hook("button", "Button_button__I3Qkf", "object-key-init"),
      disabled: cc11001100_hook("disabled", "Button_disabled__ZXSDx", "object-key-init"),
      loader: cc11001100_hook("loader", "Button_loader__RsSnD", "object-key-init"),
      rotate: cc11001100_hook("rotate", "Button_rotate__V_wwk", "object-key-init"),
      prixClipFix: cc11001100_hook("prixClipFix", "Button_prixClipFix__UBrcu", "object-key-init")
    }, "assign");
  },
  26531: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      drawer: cc11001100_hook("drawer", "Drawer_drawer__9EvYq", "object-key-init"),
      drawer_inner: cc11001100_hook("drawer_inner", "Drawer_drawer_inner__xoPCR", "object-key-init"),
      close_btn: cc11001100_hook("close_btn", "Drawer_close_btn__o7_oe", "object-key-init")
    }, "assign");
  },
  40471: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      page_container: cc11001100_hook("page_container", "EmptyLoginPage_page_container__9qet3", "object-key-init")
    }, "assign");
  }
}]);