try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "af50797d-37a1-4905-b597-97046644fb05", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-af50797d-37a1-4905-b597-97046644fb05", "assign"));
} catch (e) {}
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[3643], {
  55660: function (e, t, a) {
    "use strict";

    a.d(t, {
      EH: function () {
        return s;
      },
      mK: function () {
        return i;
      },
      vq: function () {
        return n;
      }
    });
    let n = cc11001100_hook("n", {
        universal: {
          host: cc11001100_hook("host", "apple-tech.wenxiaobai.com/app", "object-key-init")
        },
        scheme: {
          protocol: cc11001100_hook("protocol", "wxb", "object-key-init"),
          host: cc11001100_hook("host", "app", "object-key-init")
        },
        appstore: cc11001100_hook("appstore", "https://apps.apple.com/cn/app/%E9%97%AE%E5%B0%8F%E7%99%BD/id6471236144", "object-key-init"),
        yingyongbao: cc11001100_hook("yingyongbao", "//sj.qq.com/appdetail/com.yuanshi.wenxiaobai?appName=wenxiaobai", "object-key-init"),
        fallback: cc11001100_hook("fallback", "https://www.wenxiaobai.com/down", "object-key-init")
      }, "var-init"),
      i = cc11001100_hook("i", "test_wxb_key", "var-init"),
      s = cc11001100_hook("s", "test_wxb_value", "var-init");
  },
  9925: function (e, t, a) {
    "use strict";

    a.d(t, {
      H: function () {
        return n;
      }
    });
    let n = cc11001100_hook("n", {
      ios: cc11001100_hook("ios", "https://apps.apple.com/cn/app/%E9%97%AE%E5%B0%8F%E7%99%BD/id6471236144", "object-key-init"),
      kuaishou: cc11001100_hook("kuaishou", "https://wy-andorid-dwn.wenxiaobai.com/wenxiaobai/release-3.3.6-7030306-202503041957/app-release-v3.3.6-7030306-kuaishou.apk", "object-key-init"),
      android: cc11001100_hook("android", "https://wy-andorid-dwn.wenxiaobai.com/wenxiaobai/release-3.3.6-7030306-202503041957/app-release-v3.3.6-7030306-main.apk", "object-key-init"),
      baidu: cc11001100_hook("baidu", "https://wy-andorid-dwn.wenxiaobai.com/wenxiaobai/release-3.3.6-7030306-202503041957/app-release-v3.3.6-7030306-baidu.apk", "object-key-init"),
      douyin: cc11001100_hook("douyin", "https://wy-andorid-dwn.wenxiaobai.com/wenxiaobai/release-3.3.6-7030306-202503041957/app-release-v3.3.6-7030306-douyin.apk", "object-key-init"),
      wangyi: cc11001100_hook("wangyi", "https://wy-andorid-dwn.wenxiaobai.com/wenxiaobai/release-3.3.6-7030306-202503041957/app-release-v3.3.6-7030306-wangyi.apk", "object-key-init"),
      windows: cc11001100_hook("windows", "https://wy-static.wenxiaobai.com/wenxiaobai-web/desktop/windows/wenxiaobai_1733680859994_0.1.0_x64-setup.exe", "object-key-init"),
      macos: cc11001100_hook("macos", "https://wy-static.wenxiaobai.com/wenxiaobai-web/desktop/darwin/wenxiaobai_1733680898456_0.1.0_universal.dmg", "object-key-init")
    }, "var-init");
  },
  337: function (e, t, a) {
    "use strict";

    a.d(t, {
      vE: function () {
        return f;
      },
      bP: function () {
        return u;
      }
    });
    var n = cc11001100_hook("n", a(57437), "var-init"),
      i = cc11001100_hook("i", a(61040), "var-init"),
      s = cc11001100_hook("s", a(2265), "var-init"),
      l = cc11001100_hook("l", a(75563), "var-init"),
      r = cc11001100_hook("r", a.n(l), "var-init"),
      o = cc11001100_hook("o", a(62565), "var-init");
    let c = cc11001100_hook("c", (e, t) => {
        let {
            prompt: a = "",
            title: n = ""
          } = cc11001100_hook("", e, "var-init"),
          {
            prompt: i = ""
          } = cc11001100_hook("", t, "var-init"),
          s = cc11001100_hook("s", "".concat(a || n, "「").concat(i, "」"), "var-init");
        return s;
      }, "var-init"),
      u = cc11001100_hook("u", (e, t) => {
        let {
            prompt: a = "",
            title: n = ""
          } = cc11001100_hook("", t, "var-init"),
          i = cc11001100_hook("i", RegExp("".concat(a || n, "(：?)「(.*?)」"), "g"), "var-init"),
          s = cc11001100_hook("s", i.exec(e), "var-init"),
          l = cc11001100_hook("l", "", "var-init"),
          r = cc11001100_hook("r", "", "var-init");
        return null !== s && (l = cc11001100_hook("l", s[0], "assign"), r = cc11001100_hook("r", s[2], "assign")), {
          isMatch: cc11001100_hook("isMatch", !!s, "object-key-init"),
          allMatchContent: cc11001100_hook("allMatchContent", l, "object-key-init"),
          matchContent: cc11001100_hook("matchContent", r, "object-key-init")
        };
      }, "var-init");
    var d = cc11001100_hook("d", a(13987), "var-init"),
      p = cc11001100_hook("p", a(72511), "var-init"),
      h = cc11001100_hook("h", a(49654), "var-init"),
      m = cc11001100_hook("m", a.n(h), "var-init");
    let E = cc11001100_hook("E", {
      click: cc11001100_hook("click", e => {
        let {
            className: t = "",
            idx: a,
            menu: l,
            activeKey: o,
            inputValue: c,
            onInputValue: u,
            onInputFocus: d,
            onClick: p
          } = cc11001100_hook("", e, "var-init"),
          {
            mainConverItem: h
          } = cc11001100_hook("", (0, i.useConverMenuContext)(), "var-init"),
          m = cc11001100_hook("m", (0, s.useCallback)(e => {
            let {
              prompt: t
            } = cc11001100_hook("", e, "var-init");
            u(t), d(), p(e);
          }, [u, d, p]), "var-init");
        return (0, s.useEffect)(() => {
          0 !== a || o || m(l);
        }, [h]), (0, n.jsx)("div", {
          className: cc11001100_hook("className", "\n        ".concat(r().click_menu_item, "\n        ").concat(o === l.key ? r().active : "", "\n        ").concat(t, "\n      "), "object-key-init"),
          onClick: cc11001100_hook("onClick", () => m(l), "object-key-init"),
          children: cc11001100_hook("children", l.title, "object-key-init")
        });
      }, "object-key-init"),
      select: cc11001100_hook("select", e => {
        let {
            className: t = "",
            idx: a,
            menu: i,
            activeKey: l,
            inputValue: r,
            onInputValue: h,
            onInputFocus: E,
            onSelect: f
          } = cc11001100_hook("", e, "var-init"),
          {
            containerId: _
          } = cc11001100_hook("", (0, p.useViewConfigState)(), "var-init"),
          [b, v] = cc11001100_hook("", (0, s.useState)(!1), "var-init"),
          g = cc11001100_hook("g", (0, s.useMemo)(() => {
            var e;
            return (null == i ? void 0 : null === (e = cc11001100_hook("e", i.extraInfo, "assign")) || void 0 === e ? void 0 : e.iconSize) || 20;
          }, [i]), "var-init"),
          y = cc11001100_hook("y", (0, s.useMemo)(() => {
            var e;
            return (null == i ? void 0 : null === (e = cc11001100_hook("e", i.extraInfo, "assign")) || void 0 === e ? void 0 : e.options) || [];
          }, [i]), "var-init"),
          S = cc11001100_hook("S", e => {
            let t = cc11001100_hook("t", c(i, e), "var-init"),
              {
                prompt: n = ""
              } = cc11001100_hook("", e, "var-init"),
              {
                isMatch: s,
                matchContent: l
              } = cc11001100_hook("", u(r, i), "var-init");
            if (s) h(r.replace(l, n));else {
              let e = cc11001100_hook("e", r ? "，" : "", "var-init");
              0 === a ? h("".concat(t).concat(e).concat(r)) : h("".concat(r).concat(e).concat(t));
            }
            E(), w(), f(i, e);
          }, "var-init"),
          w = cc11001100_hook("w", () => {
            v(!1);
          }, "var-init");
        return (0, n.jsx)(o.Z, {
          trigger: cc11001100_hook("trigger", "hover", "object-key-init"),
          placement: cc11001100_hook("placement", "top", "object-key-init"),
          theme: {
            token: {
              colorBgElevated: cc11001100_hook("colorBgElevated", "var(--common-select-bg-color, rgba(255, 255, 255, 1))", "object-key-init"),
              boxShadowSecondary: cc11001100_hook("boxShadowSecondary", "0px 2px 16px 0px rgba(0, 0, 0, 0.1)", "object-key-init"),
              width: cc11001100_hook("width", 0, "object-key-init")
            }
          },
          mouseEnterDelay: cc11001100_hook("mouseEnterDelay", .2, "object-key-init"),
          content: cc11001100_hook("content", (0, n.jsx)("div", {
            className: cc11001100_hook("className", m().option_item_list, "object-key-init"),
            children: cc11001100_hook("children", y.map((e, t) => {
              let {
                icon: a,
                text: i,
                prompt: s
              } = cc11001100_hook("", e, "var-init");
              return (0, n.jsxs)("div", {
                className: cc11001100_hook("className", m().option_item, "object-key-init"),
                onClick: cc11001100_hook("onClick", () => S(e), "object-key-init"),
                children: cc11001100_hook("children", [(0, n.jsx)("img", {
                  className: cc11001100_hook("className", m().option_icon, "object-key-init"),
                  src: cc11001100_hook("src", a, "object-key-init"),
                  alt: cc11001100_hook("alt", "", "object-key-init"),
                  width: cc11001100_hook("width", g, "object-key-init"),
                  height: cc11001100_hook("height", g, "object-key-init")
                }), (0, n.jsx)("span", {
                  className: cc11001100_hook("className", m().option_text, "object-key-init"),
                  children: cc11001100_hook("children", i, "object-key-init")
                }), (0, n.jsx)("div", {
                  className: cc11001100_hook("className", "".concat(m().option_selected, " ").concat(l === s ? "" : m().hidden), "object-key-init")
                })], "object-key-init")
              }, "".concat(t, "_").concat(i, "_").concat(s));
            }), "object-key-init")
          }), "object-key-init"),
          open: cc11001100_hook("open", b, "object-key-init"),
          onOpenChange: cc11001100_hook("onOpenChange", e => {
            v(e);
          }, "object-key-init"),
          getPopupContainer: cc11001100_hook("getPopupContainer", () => document.getElementById(_), "object-key-init"),
          children: cc11001100_hook("children", (0, n.jsxs)("div", {
            className: cc11001100_hook("className", "".concat(m().select_menu_item, " ").concat(t), "object-key-init"),
            children: cc11001100_hook("children", [(0, n.jsx)("span", {
              className: cc11001100_hook("className", m().title, "object-key-init"),
              children: cc11001100_hook("children", i.title, "object-key-init")
            }), (0, n.jsx)(d.Z, {
              className: cc11001100_hook("className", m().arrowdown_btn, "object-key-init"),
              name: cc11001100_hook("name", "arrowdown", "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        });
      }, "object-key-init")
    }, "var-init");
    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          className: t = "",
          idx: a,
          menu: i,
          activeKey: s,
          inputValue: l,
          onInputValue: r,
          onInputFocus: o,
          onClick: c,
          onSelect: u
        } = cc11001100_hook("", e, "var-init"),
        d = cc11001100_hook("d", i.action || "click", "var-init"),
        p = cc11001100_hook("p", E[d], "var-init");
      return (0, n.jsx)(p, {
        className: cc11001100_hook("className", t, "object-key-init"),
        idx: cc11001100_hook("idx", a, "object-key-init"),
        menu: cc11001100_hook("menu", i, "object-key-init"),
        activeKey: cc11001100_hook("activeKey", s, "object-key-init"),
        inputValue: cc11001100_hook("inputValue", l, "object-key-init"),
        onInputValue: cc11001100_hook("onInputValue", r, "object-key-init"),
        onInputFocus: cc11001100_hook("onInputFocus", o, "object-key-init"),
        onClick: cc11001100_hook("onClick", e => c(e), "object-key-init"),
        onSelect: cc11001100_hook("onSelect", (e, t) => u(e, t), "object-key-init")
      });
    }
  },
  13987: function (e, t, a) {
    "use strict";

    var n = cc11001100_hook("n", a(57437), "var-init"),
      i = cc11001100_hook("i", a(42744), "var-init"),
      s = cc11001100_hook("s", a.n(i), "var-init");
    a(2265), t.Z = cc11001100_hook("t.Z", e => (0, n.jsx)("svg", {
      "aria-hidden": cc11001100_hook("aria-hidden", "true", "object-key-init"),
      fontSize: cc11001100_hook("fontSize", e.size, "object-key-init"),
      color: cc11001100_hook("color", e.color, "object-key-init"),
      fill: cc11001100_hook("fill", e.color, "object-key-init"),
      ...e,
      className: s()("icon-font-svg", e.className),
      children: (0, n.jsx)("use", {
        href: cc11001100_hook("href", "#" + e.name, "object-key-init")
      })
    }), "assign");
  },
  36078: function (e, t, a) {
    "use strict";

    a.d(t, {
      Z: function () {
        return o;
      }
    });
    var n = cc11001100_hook("n", a(57437), "var-init"),
      i = cc11001100_hook("i", a(28169), "var-init"),
      s = cc11001100_hook("s", a(67655), "var-init"),
      l = cc11001100_hook("l", a(2265), "var-init"),
      r = cc11001100_hook("r", {
        components: {
          Message: {
            contentBg: cc11001100_hook("contentBg", "rgba(0, 0, 0, 0.95)", "object-key-init"),
            paddingXS: cc11001100_hook("paddingXS", "0 62px", "object-key-init"),
            fontSize: cc11001100_hook("fontSize", 28, "object-key-init"),
            fontWeight: cc11001100_hook("fontWeight", 500, "object-key-init"),
            colorText: cc11001100_hook("colorText", "#FFFFF", "object-key-init"),
            colorInfo: cc11001100_hook("colorInfo", "#FFFFF", "object-key-init"),
            borderRadiusLG: cc11001100_hook("borderRadiusLG", 1200, "object-key-init"),
            boxShadow: cc11001100_hook("boxShadow", "0px 4px 40px 0px rgba(0, 0, 0, 0.20)", "object-key-init")
          }
        }
      }, "var-init"),
      o = cc11001100_hook("o", (0, l.forwardRef)((e, t) => {
        let [a, o] = cc11001100_hook("", s.ZP.useMessage(), "var-init");
        (0, l.useImperativeHandle)(t, () => ({
          info: cc11001100_hook("info", c, "object-key-init")
        }));
        let c = cc11001100_hook("c", e => {
          a.open({
            icon: cc11001100_hook("icon", null, "object-key-init"),
            content: cc11001100_hook("content", (0, n.jsx)("div", {
              style: {
                padding: cc11001100_hook("padding", "14px 37px", "object-key-init")
              },
              children: cc11001100_hook("children", e, "object-key-init")
            }), "object-key-init"),
            duration: cc11001100_hook("duration", 3, "object-key-init"),
            style: {
              color: cc11001100_hook("color", "#FFFFFF", "object-key-init"),
              fontSize: cc11001100_hook("fontSize", 16, "object-key-init"),
              fontWeight: cc11001100_hook("fontWeight", 500, "object-key-init")
            }
          });
        }, "var-init");
        return (0, n.jsx)(i.ZP, {
          theme: cc11001100_hook("theme", r, "object-key-init"),
          children: cc11001100_hook("children", o, "object-key-init")
        });
      }), "var-init");
  },
  61040: function (e, t, a) {
    "use strict";

    a.r(t), a.d(t, {
      ConverMenuProvider: function () {
        return _;
      },
      useConverMenuContext: function () {
        return b;
      }
    });
    var n = cc11001100_hook("n", a(57437), "var-init"),
      i = cc11001100_hook("i", a(337), "var-init"),
      s = cc11001100_hook("s", a(1068), "var-init"),
      l = cc11001100_hook("l", a(93086), "var-init"),
      r = cc11001100_hook("r", a(19606), "var-init"),
      o = cc11001100_hook("o", a(60444), "var-init"),
      c = cc11001100_hook("c", a(24033), "var-init"),
      u = cc11001100_hook("u", a(2265), "var-init"),
      d = cc11001100_hook("d", a(88915), "var-init"),
      p = cc11001100_hook("p", a.n(d), "var-init"),
      h = cc11001100_hook("h", a(25159), "var-init");
    let m = cc11001100_hook("m", "checked_menu_items_v2", "var-init"),
      E = cc11001100_hook("E", e => e.filter(e => !!e.capability && l.Lg.includes(e.capability)).map(e => ({
        ...e,
        _id: e.key
      })), "var-init"),
      f = cc11001100_hook("f", (0, u.createContext)({
        mainConverType: cc11001100_hook("mainConverType", "", "object-key-init"),
        mainConverItem: {},
        subConverType: cc11001100_hook("subConverType", "", "object-key-init"),
        subConverItem: {},
        converType: cc11001100_hook("converType", "", "object-key-init"),
        isUploadFileConverType: cc11001100_hook("isUploadFileConverType", !1, "object-key-init"),
        isUploadImageConverType: cc11001100_hook("isUploadImageConverType", !1, "object-key-init"),
        isWebReadConverType: cc11001100_hook("isWebReadConverType", !1, "object-key-init"),
        checkedMenuItems: cc11001100_hook("checkedMenuItems", [], "object-key-init"),
        checkMenuItem: cc11001100_hook("checkMenuItem", () => {}, "object-key-init"),
        uncheckMenuItem: cc11001100_hook("uncheckMenuItem", () => {}, "object-key-init"),
        selectMainMenu: cc11001100_hook("selectMainMenu", e => {}, "object-key-init"),
        selectSubMenu: cc11001100_hook("selectSubMenu", e => {}, "object-key-init"),
        backToMainMenu: cc11001100_hook("backToMainMenu", () => {}, "object-key-init"),
        clearConverMenu: cc11001100_hook("clearConverMenu", () => {}, "object-key-init"),
        clearMenuItems: cc11001100_hook("clearMenuItems", () => {}, "object-key-init"),
        topMenuItems: cc11001100_hook("topMenuItems", [], "object-key-init"),
        bottomMenuItems: cc11001100_hook("bottomMenuItems", [], "object-key-init"),
        hasFileMenuItem: cc11001100_hook("hasFileMenuItem", [], "object-key-init"),
        hasImageMenuItem: cc11001100_hook("hasImageMenuItem", [], "object-key-init"),
        subMenuItems: cc11001100_hook("subMenuItems", [], "object-key-init"),
        initMenuItems: cc11001100_hook("initMenuItems", e => {}, "object-key-init"),
        getChatCustomParams: cc11001100_hook("getChatCustomParams", e => ({}), "object-key-init"),
        rightBottomMenuItems: cc11001100_hook("rightBottomMenuItems", [], "object-key-init"),
        isPicSolve: cc11001100_hook("isPicSolve", !1, "object-key-init")
      }), "var-init");
    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          children: t
        } = cc11001100_hook("", e, "var-init"),
        a = cc11001100_hook("a", (0, c.usePathname)(), "var-init"),
        {
          curChatBotId: d,
          currentConversationId: _,
          nextConversationId: b
        } = cc11001100_hook("", (0, h.useConver)(), "var-init"),
        [v, g] = cc11001100_hook("", (0, u.useState)([]), "var-init"),
        [y, S] = cc11001100_hook("", (0, u.useState)(l.bv.NONE), "var-init"),
        [w, I] = cc11001100_hook("", (0, u.useState)({}), "var-init"),
        [k, C] = cc11001100_hook("", (0, u.useState)(""), "var-init"),
        [P, T] = cc11001100_hook("", (0, u.useState)({}), "var-init"),
        [L, x, M] = cc11001100_hook("", p()({}), "var-init"),
        A = cc11001100_hook("A", (0, u.useMemo)(() => (0, l.Qr)({
          mainType: cc11001100_hook("mainType", y, "object-key-init"),
          subType: cc11001100_hook("subType", k, "object-key-init")
        }), [y, k]), "var-init"),
        O = cc11001100_hook("O", (0, u.useMemo)(() => l.fW.includes(y), [y]), "var-init"),
        F = cc11001100_hook("F", (0, u.useMemo)(() => l.SV.includes(y), [y]), "var-init"),
        R = cc11001100_hook("R", (0, u.useMemo)(() => y === l.bv.WEBPAGE, [y]), "var-init"),
        N = cc11001100_hook("N", (0, u.useCallback)(() => {
          I({}), S(l.bv.NONE), C(""), T({});
        }, []), "var-init"),
        B = cc11001100_hook("B", (0, u.useCallback)(e => {
          I(e);
          let {
            capability: t
          } = cc11001100_hook("", e, "var-init");
          S(t);
        }, []), "var-init"),
        D = cc11001100_hook("D", (0, u.useCallback)(e => {
          let {
            key: t
          } = cc11001100_hook("", e, "var-init");
          T(e), C(t);
        }, []), "var-init"),
        U = cc11001100_hook("U", (0, u.useCallback)(() => {
          I({}), S(l.bv.NONE), C(""), T({});
        }, []), "var-init"),
        Y = cc11001100_hook("Y", (0, u.useCallback)((e, t) => {
          let a = cc11001100_hook("a", M.current[e] || [], "var-init"),
            n = cc11001100_hook("n", !a.find(e => (null == e ? void 0 : e._id) === (null == t ? void 0 : t._id)), "var-init");
          n && x(n => ({
            ...n,
            [e]: [...a, t]
          }));
        }, [M, x]), "var-init"),
        W = cc11001100_hook("W", (0, u.useCallback)((e, t) => {
          let a = cc11001100_hook("a", M.current[e] || [], "var-init"),
            n = cc11001100_hook("n", a.find(e => (null == e ? void 0 : e._id) === t._id), "var-init");
          if (n) {
            let n = cc11001100_hook("n", a.filter(e => e._id !== (null == t ? void 0 : t._id)), "var-init");
            x(t => ({
              ...t,
              [e]: n
            }));
          }
        }, [M, x]), "var-init"),
        H = cc11001100_hook("H", (0, u.useCallback)(e => {
          x(t => ({
            ...t,
            [e]: []
          }));
        }, [x]), "var-init"),
        j = cc11001100_hook("j", (0, u.useMemo)(() => L[d] ? L[d] : [], [d, L]), "var-init"),
        G = cc11001100_hook("G", (0, u.useCallback)(e => {
          d && Y(d, e);
        }, [d, Y]), "var-init"),
        V = cc11001100_hook("V", (0, u.useCallback)(e => {
          d && W(d, e);
        }, [d, W]), "var-init"),
        z = cc11001100_hook("z", (0, u.useCallback)(e => {
          H(e);
        }, [H]), "var-init"),
        Z = cc11001100_hook("Z", (0, u.useMemo)(() => E(v || []), [v]), "var-init");
      (0, u.useEffect)(() => {}, [Z]);
      let X = cc11001100_hook("X", (0, u.useMemo)(() => Z.filter(e => !([l.bv.FILE, l.bv.IMAGE].includes(e.capability) || e.capability === l.bv.OTHER_BOT && ["deep_think", "deep_search"].includes(e.key))), [Z]), "var-init"),
        q = cc11001100_hook("q", (0, u.useMemo)(() => {
          let e = cc11001100_hook("e", Z.filter(e => e.capability === l.bv.OTHER_BOT && ["deep_think", "deep_search"].includes(e.key)), "var-init"),
            t = cc11001100_hook("t", w.exclusiveCapabilities, "var-init");
          return t && Array.isArray(t) ? e.filter(e => !t.includes(e.key)) : e;
        }, [Z, w]), "var-init"),
        J = cc11001100_hook("J", (0, u.useMemo)(() => Z.find(e => e.capability === l.bv.FILE), [Z]), "var-init"),
        $ = cc11001100_hook("$", (0, u.useMemo)(() => Z.find(e => e.capability === l.bv.IMAGE), [Z]), "var-init"),
        K = cc11001100_hook("K", (0, u.useMemo)(() => {
          let e = cc11001100_hook("e", (Z || []).filter(e => [l.bv.FILE, l.bv.IMAGE].includes(e.capability)), "var-init"),
            t = cc11001100_hook("t", null == w ? void 0 : w.exclusiveCapabilities, "var-init"),
            a = cc11001100_hook("a", (e || []).filter(e => !(null == t ? void 0 : t.includes(e.key))), "var-init");
          return a;
        }, [w, Z]), "var-init"),
        Q = cc11001100_hook("Q", (0, u.useMemo)(() => (null == w ? void 0 : w.key) == "cameraSolve", [w]), "var-init"),
        [ee, et] = cc11001100_hook("", (0, u.useState)({}), "var-init");
      (0, u.useEffect)(() => {
        let e = cc11001100_hook("e", async () => {
          let e = cc11001100_hook("e", (X || []).filter(e => e.capability === l.bv.OTHER_BOT && !0 === e.promptMenu).map(e => e.key || ""), "var-init");
          if (e.length > 0) {
            let t = cc11001100_hook("t", await (0, r.n8)({
                keys: cc11001100_hook("keys", e, "object-key-init")
              }), "var-init"),
              {
                data: a,
                code: n
              } = cc11001100_hook("", t, "var-init");
            n === s.n8.SUCCESS && et(e => ({
              ...e,
              ...a
            }));
          }
        }, "var-init");
        e();
      }, [X]);
      let ea = cc11001100_hook("ea", (0, u.useMemo)(() => {
          var e;
          let {
            key: t = ""
          } = cc11001100_hook("", w, "var-init");
          return t && (null == ee ? void 0 : null === (e = cc11001100_hook("e", ee[t], "assign")) || void 0 === e ? void 0 : e.basic) || [];
        }, [w, ee]), "var-init"),
        en = cc11001100_hook("en", (0, u.useCallback)(e => {
          g(e);
        }, []), "var-init"),
        ei = cc11001100_hook("ei", (0, u.useCallback)(e => {
          let t = cc11001100_hook("t", {}, "var-init"),
            a = cc11001100_hook("a", "", "var-init"),
            {
              key: n
            } = cc11001100_hook("", w, "var-init");
          ea.forEach(s => {
            let {
              action: l,
              key: r,
              extraInfo: o
            } = cc11001100_hook("", s, "var-init");
            if ("select" === l) {
              let {
                isMatch: l,
                matchContent: c,
                allMatchContent: u
              } = cc11001100_hook("", (0, i.bP)(e, s), "var-init");
              l && (t[n] || (t[n] = cc11001100_hook("t[n]", {}, "assign")), t[n][r] = cc11001100_hook("t[n][r]", c, "assign"), (null == o ? void 0 : o.isFilter) && (a = cc11001100_hook("a", e.replace(u, ""), "assign")));
            }
          });
          let s = cc11001100_hook("s", (0, o.t$)(q, j, "key"), "var-init"),
            r = cc11001100_hook("r", w.capability === l.bv.OTHER_BOT ? [...s, w] : [...s], "var-init");
          return {
            capabilities: cc11001100_hook("capabilities", r, "object-key-init"),
            pureQuery: cc11001100_hook("pureQuery", a, "object-key-init"),
            ...t
          };
        }, [q, j, w, ea]), "var-init");
      return (0, u.useEffect)(() => {
        d && !M.current[d] && Array.isArray(q) && q.length > 0 && q.forEach(e => Y(d, e));
      }, [d]), (0, u.useEffect)(() => {
        let e = cc11001100_hook("e", localStorage.getItem(m), "var-init");
        try {
          let t = cc11001100_hook("t", JSON.parse(e), "var-init");
          if (null == t) return;
          x(t);
        } catch (e) {}
      }, []), (0, u.useEffect)(() => {
        localStorage.setItem(m, JSON.stringify(L));
      }, [L]), (0, u.useEffect)(() => {
        N();
      }, [a]), (0, u.useEffect)(() => {
        N();
      }, [d]), (0, u.useEffect)(() => {
        _ !== b && N();
      }, [_]), (0, n.jsx)(f.Provider, {
        value: {
          mainConverType: cc11001100_hook("mainConverType", y, "object-key-init"),
          mainConverItem: cc11001100_hook("mainConverItem", w, "object-key-init"),
          subConverType: cc11001100_hook("subConverType", k, "object-key-init"),
          subConverItem: cc11001100_hook("subConverItem", P, "object-key-init"),
          converType: cc11001100_hook("converType", A, "object-key-init"),
          checkedMenuItems: cc11001100_hook("checkedMenuItems", j, "object-key-init"),
          isUploadFileConverType: cc11001100_hook("isUploadFileConverType", O, "object-key-init"),
          isUploadImageConverType: cc11001100_hook("isUploadImageConverType", F, "object-key-init"),
          isWebReadConverType: cc11001100_hook("isWebReadConverType", R, "object-key-init"),
          checkMenuItem: cc11001100_hook("checkMenuItem", G, "object-key-init"),
          uncheckMenuItem: cc11001100_hook("uncheckMenuItem", V, "object-key-init"),
          selectMainMenu: cc11001100_hook("selectMainMenu", B, "object-key-init"),
          selectSubMenu: cc11001100_hook("selectSubMenu", D, "object-key-init"),
          backToMainMenu: cc11001100_hook("backToMainMenu", U, "object-key-init"),
          clearConverMenu: cc11001100_hook("clearConverMenu", N, "object-key-init"),
          clearMenuItems: cc11001100_hook("clearMenuItems", z, "object-key-init"),
          topMenuItems: cc11001100_hook("topMenuItems", X, "object-key-init"),
          bottomMenuItems: cc11001100_hook("bottomMenuItems", q, "object-key-init"),
          hasFileMenuItem: cc11001100_hook("hasFileMenuItem", J, "object-key-init"),
          hasImageMenuItem: cc11001100_hook("hasImageMenuItem", $, "object-key-init"),
          subMenuItems: cc11001100_hook("subMenuItems", ea, "object-key-init"),
          initMenuItems: cc11001100_hook("initMenuItems", en, "object-key-init"),
          getChatCustomParams: cc11001100_hook("getChatCustomParams", ei, "object-key-init"),
          rightBottomMenuItems: cc11001100_hook("rightBottomMenuItems", K, "object-key-init"),
          isPicSolve: cc11001100_hook("isPicSolve", Q, "object-key-init")
        },
        children: cc11001100_hook("children", t, "object-key-init")
      });
    }
    function b() {
      return (0, u.useContext)(f);
    }
  },
  76570: function (e, t, a) {
    "use strict";

    a.r(t), a.d(t, {
      UPLOAD_ERROR_TYPE: function () {
        return m;
      },
      UploadFileProvider: function () {
        return g;
      },
      uploader: function () {
        return v;
      },
      useUploadFile: function () {
        return y;
      }
    });
    var n = cc11001100_hook("n", a(57437), "var-init"),
      i = cc11001100_hook("i", a(1068), "var-init"),
      s = cc11001100_hook("s", a(60444), "var-init"),
      l = cc11001100_hook("l", a(34098), "var-init"),
      r = cc11001100_hook("r", a.n(l), "var-init"),
      o = cc11001100_hook("o", a(96), "var-init");
    class c {
      push(e, t, a) {
        this.inputList.push({
          uuid: cc11001100_hook("uuid", e, "object-key-init"),
          file: cc11001100_hook("file", t, "object-key-init"),
          isPicSolve: cc11001100_hook("isPicSolve", a, "object-key-init")
        }), this.trigger();
      }
      getParserParams(e) {
        this.parserParams = cc11001100_hook("this.parserParams", r()(e), "assign");
      }
      bind(e, t) {
        let a = cc11001100_hook("a", this.callBacks[e], "var-init");
        return Array.isArray(a) ? a.push(t) : this.callBacks[e] = cc11001100_hook("this.callBacks[e]", [t], "assign"), () => {
          let a = cc11001100_hook("a", this.callBacks[e], "var-init");
          if (Array.isArray(a)) for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length; ++e) a[e] === t && a.splice(e, 1);
        };
      }
      trigger() {
        if (!this.timeHandler) {
          if (this.inputList.length > 0) {
            let e = cc11001100_hook("e", this.inputList.shift(), "var-init");
            this.line(e.uuid, e.file, e.isPicSolve), this.timeHandler = cc11001100_hook("this.timeHandler", setTimeout(() => {
              this.timeHandler = cc11001100_hook("this.timeHandler", null, "assign"), this.trigger.call(this);
            }, 0), "assign");
          } else this.timeHandler = cc11001100_hook("this.timeHandler", null, "assign");
        }
      }
      async line(e, t, a) {
        let n = cc11001100_hook("n", await function (e) {
          let t = cc11001100_hook("t", (0, s.oo)(), "var-init"),
            a = cc11001100_hook("a", (0, s.yP)(), "var-init");
          if (a) {
            let n = cc11001100_hook("n", {
              url: cc11001100_hook("url", "".concat((0, i.qm)(i.tW), "/pre-sign"), "object-key-init"),
              method: cc11001100_hook("method", "POST", "object-key-init"),
              headers: {
                "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + a.token, "object-key-init"),
                "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", t, "object-key-init")
              },
              data: {
                fileName: cc11001100_hook("fileName", e, "object-key-init")
              }
            }, "var-init");
            return (0, o.ZP)(n);
          }
          return Promise.resolve({
            code: cc11001100_hook("code", -1, "object-key-init")
          });
        }(t.name), "var-init");
        if (0 === n.code) {
          let {
              data: i
            } = cc11001100_hook("", n, "var-init"),
            s = cc11001100_hook("s", this.callBacks.urlSuccess, "var-init");
          s.forEach(t => t(e, i, a));
          let l = cc11001100_hook("l", await this.realUpload(i.preSignUrl, e, t, a), "var-init");
          200 === l.status && this.getParseStatus(i.fileId, e, 60);
        } else {
          let t = cc11001100_hook("t", this.callBacks.urlError, "var-init");
          t.forEach(t => t(e));
        }
      }
      realUpload(e, t, a, n) {
        let i = cc11001100_hook("i", this, "var-init");
        return new Promise((s, l) => {
          let r = cc11001100_hook("r", new XMLHttpRequest(), "var-init");
          r.open("PUT", e, !0), r.onload = cc11001100_hook("r.onload", function (e) {
            let a = cc11001100_hook("a", i.callBacks.uploadSuccess, "var-init");
            return a.forEach(e => e(t, n)), s({
              status: cc11001100_hook("status", r.status, "object-key-init"),
              statusText: cc11001100_hook("statusText", r.statusText, "object-key-init")
            });
          }, "assign"), r.onerror = cc11001100_hook("r.onerror", function (e) {
            let a = cc11001100_hook("a", i.callBacks.uploadError, "var-init");
            return a.forEach(e => e(t, n)), s({
              status: cc11001100_hook("status", r.status, "object-key-init"),
              statusText: cc11001100_hook("statusText", r.statusText, "object-key-init")
            });
          }, "assign"), r.upload.onprogress = cc11001100_hook("r.upload.onprogress", function (e) {
            let a = cc11001100_hook("a", Math.round(e.loaded / e.total * 1e4) / 100, "var-init"),
              s = cc11001100_hook("s", i.callBacks.porcessing, "var-init");
            s.forEach(e => e(t, a, n));
          }, "assign"), r.send(a.org);
        });
      }
      reParseFile(e, t) {
        this.getParseStatus(e, t, 60);
      }
      async getParseStatus(e, t, a) {
        if (a < 0) {
          let e = cc11001100_hook("e", this.callBacks.parseError, "var-init");
          e.forEach(e => e(t));
          return;
        }
        let n = cc11001100_hook("n", await function (e, t) {
          let a = cc11001100_hook("a", (0, s.oo)(), "var-init"),
            n = cc11001100_hook("n", (0, s.yP)(), "var-init");
          if (n) {
            let s = cc11001100_hook("s", {
              url: cc11001100_hook("url", "".concat((0, i.qm)(i.tW), "/parse"), "object-key-init"),
              method: cc11001100_hook("method", "POST", "object-key-init"),
              headers: {
                "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + n.token, "object-key-init"),
                "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", a, "object-key-init")
              },
              data: {
                fileId: cc11001100_hook("fileId", e, "object-key-init"),
                multimodalCapability: cc11001100_hook("multimodalCapability", t, "object-key-init"),
                capability: cc11001100_hook("capability", t.capability, "object-key-init")
              }
            }, "var-init");
            return (0, o.ZP)(s);
          }
          return Promise.resolve({
            code: cc11001100_hook("code", -1, "object-key-init")
          });
        }(e, this.parserParams), "var-init");
        if (0 === n.code) switch (n.data.parseState) {
          case 0:
          case 1:
            setTimeout(this.getParseStatus.bind(this, e, t, a - 5), 5e3);
            break;
          case 2:
            let l = cc11001100_hook("l", this.callBacks.parseSuccess, "var-init");
            l.forEach(e => e(t, n.data));
            break;
          case 3:
            let r = cc11001100_hook("r", this.callBacks.parseError, "var-init");
            r.forEach(e => e(t));
        } else {
          let e = cc11001100_hook("e", this.callBacks.parseError, "var-init");
          e.forEach(e => e(t));
        }
      }
      constructor() {
        this.inputList = cc11001100_hook("this.inputList", [], "assign"), this.taskList = cc11001100_hook("this.taskList", {}, "assign"), this.callBacks = cc11001100_hook("this.callBacks", {}, "assign"), this.timeHandler = cc11001100_hook("this.timeHandler", null, "assign"), this.parserParams = cc11001100_hook("this.parserParams", {}, "assign");
      }
    }
    var u = cc11001100_hook("u", a(2265), "var-init"),
      d = cc11001100_hook("d", a(61040), "var-init"),
      p = cc11001100_hook("p", a(34577), "var-init");
    let h = cc11001100_hook("h", (0, u.createContext)(null), "var-init"),
      m = cc11001100_hook("m", {
        SIZE: cc11001100_hook("SIZE", "size_exceeds", "object-key-init"),
        TYPE: cc11001100_hook("TYPE", "unsupported_type", "object-key-init"),
        TOTAL: cc11001100_hook("TOTAL", "total_size_exceeds", "object-key-init"),
        PRE: cc11001100_hook("PRE", "pre_sign_error", "object-key-init"),
        UPLOAD: cc11001100_hook("UPLOAD", "upload_error", "object-key-init"),
        UPLOADING: cc11001100_hook("UPLOADING", "uploading", "object-key-init"),
        PARSE: cc11001100_hook("PARSE", "parse_error", "object-key-init"),
        PARSING: cc11001100_hook("PARSING", "parsing", "object-key-init"),
        SUCCESS: cc11001100_hook("SUCCESS", "success", "object-key-init")
      }, "var-init");
    class E {
      setProps(e, t) {
        this[e] = cc11001100_hook("this[e]", t, "assign");
      }
      copy(e) {
        let t = cc11001100_hook("t", Object.getOwnPropertyNames(e), "var-init");
        for (let a = cc11001100_hook("a", 0, "var-init"); a < t.length; ++a) {
          let n = cc11001100_hook("n", t[a], "var-init");
          this[n] = cc11001100_hook("this[n]", e[n], "assign");
        }
      }
      constructor(e) {
        this.lastModified = cc11001100_hook("this.lastModified", (null == e ? void 0 : e.lastModified) || 0, "assign"), this.name = cc11001100_hook("this.name", (null == e ? void 0 : e.name) || "", "assign"), this.status = cc11001100_hook("this.status", (null == e ? void 0 : e.status) || 1, "assign"), this.stage = cc11001100_hook("this.stage", (null == e ? void 0 : e.stage) || 0, "assign"), this.processing = cc11001100_hook("this.processing", (null == e ? void 0 : e.processing) || 0, "assign"), this.type = cc11001100_hook("this.type", (null == e ? void 0 : e.type) || "", "assign"), this.size = cc11001100_hook("this.size", (null == e ? void 0 : e.size) || 0, "assign"), this.uuid = cc11001100_hook("this.uuid", (null == e ? void 0 : e.uuid) || "", "assign"), this.org = cc11001100_hook("this.org", (null == e ? void 0 : e.org) || null, "assign"), this.timestamp = cc11001100_hook("this.timestamp", (null == e ? void 0 : e.timestamp) || 0, "assign"), this.thumb = cc11001100_hook("this.thumb", (null == e ? void 0 : e.thumb) || "", "assign"), this.downloadUrl = cc11001100_hook("this.downloadUrl", (null == e ? void 0 : e.downloadUrl) || "", "assign"), this.isPicSolve = cc11001100_hook("this.isPicSolve", (null == e ? void 0 : e.isPicSolve) || !1, "assign");
      }
    }
    let f = cc11001100_hook("f", {
        CONCAT_FILES: cc11001100_hook("CONCAT_FILES", "CONCAT_FILES", "object-key-init"),
        RESET_FILES: cc11001100_hook("RESET_FILES", "RESET_FILES", "object-key-init"),
        CLEAR_ALL_FILES: cc11001100_hook("CLEAR_ALL_FILES", "CLEAR_ALL_FILES", "object-key-init"),
        CLEAR_CONV_FILES: cc11001100_hook("CLEAR_CONV_FILES", "CLEAR_CONV_FILES", "object-key-init"),
        UPDATE_FILE_PROPERTY: cc11001100_hook("UPDATE_FILE_PROPERTY", "UPDATE_FILE_PROPERTY", "object-key-init"),
        DELETE_FILE: cc11001100_hook("DELETE_FILE", "DELETE_FILE", "object-key-init")
      }, "var-init"),
      _ = cc11001100_hook("_", {}, "var-init");
    function b(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      switch (t.type) {
        case f.CONCAT_FILES:
          {
            let {
                convId: a,
                fileList: n
              } = cc11001100_hook("", t.payload, "var-init"),
              i = cc11001100_hook("i", Array.isArray(e[a]) ? [...e[a]] : [], "var-init");
            i = cc11001100_hook("i", i.concat(n), "assign");
            let s = cc11001100_hook("s", {
              ...e,
              [a]: i
            }, "var-init");
            return s;
          }
        case f.RESET_FILES:
          {
            let {
                convId: a,
                fileList: n
              } = cc11001100_hook("", t.payload, "var-init"),
              i = cc11001100_hook("i", {
                ...e,
                [a]: n
              }, "var-init");
            return i;
          }
        case f.CLEAR_ALL_FILES:
          return {};
        case f.CLEAR_CONV_FILES:
          {
            let a = cc11001100_hook("a", t.payload, "var-init");
            return {
              ...e,
              [a]: []
            };
          }
        case f.UPDATE_FILE_PROPERTY:
          {
            let {
                uuid: a,
                data: n,
                props: i
              } = cc11001100_hook("", t.payload, "var-init"),
              s = cc11001100_hook("s", a.split("$"), "var-init"),
              l = cc11001100_hook("l", s[0], "var-init"),
              r = cc11001100_hook("r", s[1], "var-init"),
              o = cc11001100_hook("o", e[l] ? [...e[l]] : [], "var-init"),
              {
                newFile: c,
                index: u
              } = cc11001100_hook("", function (e, t, a) {
                if (e) for (let n = cc11001100_hook("n", 0, "var-init"); n < e.length; ++n) {
                  let i = cc11001100_hook("i", e[n], "var-init");
                  if (i.uuid === t) {
                    let e = cc11001100_hook("e", new E({}), "var-init");
                    e.copy(i);
                    let t = cc11001100_hook("t", Object.getOwnPropertyNames(a), "var-init");
                    for (let n = cc11001100_hook("n", 0, "var-init"); n < t.length; ++n) {
                      let i = cc11001100_hook("i", t[n], "var-init");
                      e.setProps(i, a[i]);
                    }
                    return {
                      newFile: cc11001100_hook("newFile", e, "object-key-init"),
                      index: cc11001100_hook("index", n, "object-key-init")
                    };
                  }
                }
              }(o, r, n) || {}, "var-init");
            if (c) {
              let t = cc11001100_hook("t", Object.getOwnPropertyNames(i), "var-init");
              for (let e = cc11001100_hook("e", 0, "var-init"); e < t.length; ++e) {
                let a = cc11001100_hook("a", t[e], "var-init");
                c.setProps(a, i[a]);
              }
              o.splice(u, 1, c);
              let a = cc11001100_hook("a", {
                ...e,
                [l]: o
              }, "var-init");
              return a;
            }
            return e;
          }
        case f.DELETE_FILE:
          {
            let {
                convId: a,
                file: n
              } = cc11001100_hook("", t.payload, "var-init"),
              i = cc11001100_hook("i", e[a], "var-init");
            if (i) {
              for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) {
                let t = cc11001100_hook("t", i[e], "var-init");
                t.uuid === n.uuid && i.splice(e, 1);
              }
              let t = cc11001100_hook("t", [...i], "var-init"),
                s = cc11001100_hook("s", {
                  ...e,
                  [a]: t
                }, "var-init");
              return s;
            }
            return e;
          }
      }
    }
    let v = cc11001100_hook("v", new c(), "var-init");
    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          children: t
        } = cc11001100_hook("", e, "var-init"),
        [a, l] = cc11001100_hook("", (0, u.useReducer)(b, _), "var-init"),
        [r, o] = cc11001100_hook("", (0, u.useState)({}), "var-init"),
        c = cc11001100_hook("c", (0, u.useRef)({}), "var-init"),
        {
          track: g
        } = cc11001100_hook("", (0, p.useTrack)(), "var-init"),
        {
          isPicSolve: y
        } = cc11001100_hook("", (0, d.useConverMenuContext)(), "var-init"),
        S = cc11001100_hook("S", (0, u.useCallback)(() => {
          l({
            type: cc11001100_hook("type", f.CLEAR_ALL_FILES, "object-key-init")
          });
        }, [l]), "var-init"),
        w = cc11001100_hook("w", (0, u.useCallback)(e => {
          l({
            type: cc11001100_hook("type", f.CLEAR_CONV_FILES, "object-key-init"),
            payload: cc11001100_hook("payload", e, "object-key-init")
          });
        }, [l]), "var-init"),
        I = cc11001100_hook("I", (0, u.useCallback)((e, t) => {
          let n = cc11001100_hook("n", e.split("$"), "var-init"),
            i = cc11001100_hook("i", n[0], "var-init"),
            s = cc11001100_hook("s", n[1], "var-init"),
            l = cc11001100_hook("l", a[i] || [], "var-init"),
            r = cc11001100_hook("r", null, "var-init");
          for (let e = cc11001100_hook("e", 0, "var-init"); e < l.length; ++e) l[e].uuid === s && (r = cc11001100_hook("r", l[e], "assign"));
          g("chat_file_upload_error", {
            file: cc11001100_hook("file", r, "object-key-init"),
            status: cc11001100_hook("status", t, "object-key-init")
          });
        }, [g, a]), "var-init"),
        k = cc11001100_hook("k", (0, u.useCallback)(e => {
          let t = cc11001100_hook("t", e.split("$"), "var-init"),
            n = cc11001100_hook("n", t[0], "var-init"),
            i = cc11001100_hook("i", t[1], "var-init"),
            s = cc11001100_hook("s", a[n] || [], "var-init"),
            l = cc11001100_hook("l", null, "var-init");
          for (let e = cc11001100_hook("e", 0, "var-init"); e < s.length; ++e) s[e].uuid === i && (l = cc11001100_hook("l", s[e], "assign"));
          g("chat_file_upload_success", {
            file: cc11001100_hook("file", l, "object-key-init"),
            fileId: cc11001100_hook("fileId", (null == l ? void 0 : l.fileId) || "", "object-key-init"),
            fileMd5: cc11001100_hook("fileMd5", null == l ? void 0 : l.fileMd5, "object-key-init")
          });
        }, [g, a]), "var-init"),
        C = cc11001100_hook("C", (0, u.useCallback)(e => {
          let t = cc11001100_hook("t", {
              ...r
            }, "var-init"),
            a = cc11001100_hook("a", t[e] || 0, "var-init");
          a++, t[e] = cc11001100_hook("t[e]", a, "assign"), o(t);
        }, [r, o]), "var-init"),
        P = cc11001100_hook("P", (0, u.useCallback)(e => {
          let t = cc11001100_hook("t", {
            ...r
          }, "var-init");
          t[e] = cc11001100_hook("t[e]", 0, "assign"), o(t);
        }, [r, o]), "var-init"),
        T = cc11001100_hook("T", (0, u.useCallback)((e, t) => {
          let a = cc11001100_hook("a", r[e] || 0, "var-init"),
            n = cc11001100_hook("n", f.CONCAT_FILES, "var-init");
          a > 0 && (n = cc11001100_hook("n", f.RESET_FILES, "assign")), l({
            type: cc11001100_hook("type", n, "object-key-init"),
            payload: {
              convId: cc11001100_hook("convId", e, "object-key-init"),
              fileList: cc11001100_hook("fileList", t, "object-key-init")
            }
          }), P(e);
        }, [l, r, P]), "var-init"),
        L = cc11001100_hook("L", (0, u.useCallback)((e, t, a) => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: cc11001100_hook("data", t, "object-key-init"),
              props: {
                isPicSolve: cc11001100_hook("isPicSolve", a, "object-key-init")
              }
            }
          });
        }, [l]), "var-init"),
        x = cc11001100_hook("x", (0, u.useCallback)(e => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: {},
              props: {
                status: cc11001100_hook("status", -1, "object-key-init")
              }
            }
          }), I(e, m.PRE);
        }, [l]), "var-init"),
        M = cc11001100_hook("M", (0, u.useCallback)((e, t, a) => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: {},
              props: {
                processing: cc11001100_hook("processing", t, "object-key-init"),
                isPicSolve: cc11001100_hook("isPicSolve", a, "object-key-init")
              }
            }
          });
        }, [l]), "var-init"),
        A = cc11001100_hook("A", (0, u.useCallback)(e => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: {},
              props: {
                status: cc11001100_hook("status", -1, "object-key-init")
              }
            }
          }), I(e, m.UPLOAD);
        }, [l]), "var-init"),
        O = cc11001100_hook("O", (0, u.useCallback)((e, t) => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: {},
              props: {
                status: cc11001100_hook("status", 1, "object-key-init"),
                stage: cc11001100_hook("stage", 2, "object-key-init"),
                isPicSolve: cc11001100_hook("isPicSolve", t, "object-key-init")
              }
            }
          });
        }, [l]), "var-init"),
        F = cc11001100_hook("F", (0, u.useCallback)((e, t) => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: cc11001100_hook("data", t, "object-key-init"),
              props: {
                status: cc11001100_hook("status", 2, "object-key-init")
              }
            }
          }), k(e);
        }, [l, k]), "var-init"),
        R = cc11001100_hook("R", (0, u.useCallback)(e => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", e, "object-key-init"),
              data: {},
              props: {
                status: cc11001100_hook("status", -1, "object-key-init")
              }
            }
          }), I(e, m.PARSE);
        }, [l, k]), "var-init");
      (0, u.useEffect)(() => {
        let e = cc11001100_hook("e", [], "var-init");
        return e.push(v.bind("urlSuccess", L)), e.push(v.bind("urlError", x)), e.push(v.bind("porcessing", M)), e.push(v.bind("uploadError", A)), e.push(v.bind("uploadSuccess", O)), e.push(v.bind("parseSuccess", F)), e.push(v.bind("parseError", R)), () => {
          e.forEach(e => {
            e();
          });
        };
      }, [L, x, M, A, O, F, R]);
      let N = cc11001100_hook("N", (0, u.useCallback)(async (e, t) => {
          c.current[e] = cc11001100_hook("c.current[e]", !0, "assign");
          let n = cc11001100_hook("n", [], "var-init"),
            l = cc11001100_hook("l", !0, "var-init"),
            r = cc11001100_hook("r", a[e] || [], "var-init"),
            o = cc11001100_hook("o", i.sp - r.length, "var-init");
          t.length > o && (l = cc11001100_hook("l", !1, "assign"));
          for (let a = cc11001100_hook("a", 0, "var-init"); a < o && a < t.length; ++a) {
            let l = cc11001100_hook("l", t[a], "var-init"),
              r = cc11001100_hook("r", "", "var-init");
            if (i.oO.includes(l.type)) try {
              r = cc11001100_hook("r", await (0, s.y3)(l), "assign");
            } catch (e) {
              r = cc11001100_hook("r", "", "assign");
            }
            let o = cc11001100_hook("o", Date.now(), "var-init"),
              c = cc11001100_hook("c", new E({
                lastModified: cc11001100_hook("lastModified", l.lastModified, "object-key-init"),
                name: cc11001100_hook("name", l.name, "object-key-init"),
                status: cc11001100_hook("status", 1, "object-key-init"),
                stage: cc11001100_hook("stage", 1, "object-key-init"),
                processing: cc11001100_hook("processing", 0, "object-key-init"),
                type: cc11001100_hook("type", l.type, "object-key-init"),
                size: cc11001100_hook("size", l.size, "object-key-init"),
                org: cc11001100_hook("org", l, "object-key-init"),
                timestamp: cc11001100_hook("timestamp", o, "object-key-init"),
                uuid: cc11001100_hook("uuid", "".concat(l.name, "_").concat(o), "object-key-init"),
                thumb: cc11001100_hook("thumb", r, "object-key-init"),
                downloadUrl: cc11001100_hook("downloadUrl", r, "object-key-init"),
                isPicSolve: cc11001100_hook("isPicSolve", y, "object-key-init")
              }), "var-init");
            v.push("".concat(e, "$").concat(c.uuid), c, y), n.push(c);
          }
          return T(e, n), l;
        }, [a, T]), "var-init"),
        B = cc11001100_hook("B", (0, u.useCallback)((e, t) => {
          l({
            type: cc11001100_hook("type", f.DELETE_FILE, "object-key-init"),
            payload: {
              convId: cc11001100_hook("convId", e, "object-key-init"),
              file: cc11001100_hook("file", t, "object-key-init")
            }
          });
        }, [l]), "var-init"),
        D = cc11001100_hook("D", (0, u.useCallback)((e, t) => {
          l({
            type: cc11001100_hook("type", f.UPDATE_FILE_PROPERTY, "object-key-init"),
            payload: {
              uuid: cc11001100_hook("uuid", "".concat(e, "$").concat(t.uuid), "object-key-init"),
              data: {},
              props: {
                status: cc11001100_hook("status", 1, "object-key-init"),
                stage: cc11001100_hook("stage", 2, "object-key-init")
              }
            }
          }), v.reParseFile(t.fileId, "".concat(e, "$").concat(t.uuid));
        }, [l]), "var-init");
      return (0, n.jsx)(h.Provider, {
        value: {
          clearAllUploadFiles: cc11001100_hook("clearAllUploadFiles", S, "object-key-init"),
          clearConvFiles: cc11001100_hook("clearConvFiles", w, "object-key-init"),
          updateConvUploadFiles: cc11001100_hook("updateConvUploadFiles", T, "object-key-init"),
          uploadFiles: cc11001100_hook("uploadFiles", a, "object-key-init"),
          newFilesCtxMapRef: cc11001100_hook("newFilesCtxMapRef", c, "object-key-init"),
          inputConvFiles: cc11001100_hook("inputConvFiles", N, "object-key-init"),
          deleteConvFiles: cc11001100_hook("deleteConvFiles", B, "object-key-init"),
          reParseFile: cc11001100_hook("reParseFile", D, "object-key-init"),
          fileInputCounts: cc11001100_hook("fileInputCounts", r, "object-key-init"),
          reduceFileInputCounts: cc11001100_hook("reduceFileInputCounts", C, "object-key-init"),
          resetFileInputCounts: cc11001100_hook("resetFileInputCounts", P, "object-key-init")
        },
        children: cc11001100_hook("children", t, "object-key-init")
      });
    }
    function y() {
      return (0, u.useContext)(h);
    }
  },
  72511: function (e, t, a) {
    "use strict";

    a.r(t), a.d(t, {
      ViewConfigProvider: function () {
        return c;
      },
      useViewConfigState: function () {
        return u;
      }
    });
    var n = cc11001100_hook("n", a(57437), "var-init");
    let i = cc11001100_hook("i", "system-theme-mode", "var-init");
    var s = cc11001100_hook("s", a(49335), "var-init"),
      l = cc11001100_hook("l", a(2265), "var-init"),
      r = cc11001100_hook("r", () => {
        let [e, t] = cc11001100_hook("", (0, l.useState)(s.F.System), "var-init"),
          [a, n] = cc11001100_hook("", (0, l.useState)(s.B.Light), "var-init");
        (0, l.useEffect)(() => {
          let e = cc11001100_hook("e", localStorage.getItem(i) || s.F.System, "var-init");
          t(e);
        }, []), (0, l.useEffect)(() => {
          let t = cc11001100_hook("t", window.matchMedia("(prefers-color-scheme: dark)"), "var-init"),
            a = cc11001100_hook("a", t => {
              if (e === s.F.System) {
                let e = cc11001100_hook("e", t.matches, "var-init"),
                  a = cc11001100_hook("a", e ? s.B.Dark : s.B.Light, "var-init");
                n(a);
              }
            }, "var-init");
          if (t.addEventListener("change", a), e === s.F.System) {
            let e = cc11001100_hook("e", t.matches, "var-init"),
              a = cc11001100_hook("a", e ? s.B.Dark : s.B.Light, "var-init");
            n(a);
          } else e === s.F.Light ? n(s.B.Light) : e === s.F.Dark && n(s.B.Dark);
          return () => {
            t.removeEventListener("change", a);
          };
        }, [e]);
        let r = cc11001100_hook("r", (0, l.useMemo)(() => "".concat("root-system-theme-mode-").concat(a), [a]), "var-init"),
          o = cc11001100_hook("o", (0, l.useCallback)(() => {
            let e = cc11001100_hook("e", a === s.B.Light ? s.B.Dark : s.B.Light, "var-init");
            e === s.B.Dark ? (t(s.F.Dark), localStorage.setItem(i, s.F.Dark)) : e === s.B.Light && (t(s.F.Light), localStorage.setItem(i, s.F.Light));
          }, [a]), "var-init"),
          c = cc11001100_hook("c", (0, l.useMemo)(() => a === s.B.Light, [a]), "var-init"),
          u = cc11001100_hook("u", (0, l.useMemo)(() => a === s.B.Dark, [a]), "var-init");
        return {
          containerId: cc11001100_hook("containerId", "dark-mode-container", "object-key-init"),
          theme: cc11001100_hook("theme", a, "object-key-init"),
          themeMode: cc11001100_hook("themeMode", e, "object-key-init"),
          themeClassName: cc11001100_hook("themeClassName", r, "object-key-init"),
          isLightMode: cc11001100_hook("isLightMode", c, "object-key-init"),
          isDarkMode: cc11001100_hook("isDarkMode", u, "object-key-init"),
          changeThemeMode: cc11001100_hook("changeThemeMode", e => {
            t(e), localStorage.setItem(i, e);
          }, "object-key-init"),
          toggleTheme: cc11001100_hook("toggleTheme", o, "object-key-init")
        };
      }, "var-init");
    let o = cc11001100_hook("o", (0, l.createContext)({
        containerId: cc11001100_hook("containerId", "", "object-key-init"),
        themeClassName: cc11001100_hook("themeClassName", "", "object-key-init"),
        changeThemeMode: cc11001100_hook("changeThemeMode", () => {}, "object-key-init"),
        toggleTheme: cc11001100_hook("toggleTheme", () => {}, "object-key-init"),
        theme: cc11001100_hook("theme", s.B.Light, "object-key-init"),
        themeMode: cc11001100_hook("themeMode", s.F.System, "object-key-init"),
        isLightMode: cc11001100_hook("isLightMode", !0, "object-key-init"),
        isDarkMode: cc11001100_hook("isDarkMode", !1, "object-key-init")
      }), "var-init"),
      c = cc11001100_hook("c", e => {
        let {
          containerId: t,
          themeClassName: a,
          changeThemeMode: i,
          toggleTheme: s,
          theme: l,
          themeMode: c,
          isLightMode: u,
          isDarkMode: d
        } = cc11001100_hook("", r(), "var-init");
        return (0, n.jsx)(n.Fragment, {
          children: cc11001100_hook("children", (0, n.jsx)(o.Provider, {
            value: {
              containerId: cc11001100_hook("containerId", t, "object-key-init"),
              themeClassName: cc11001100_hook("themeClassName", a, "object-key-init"),
              changeThemeMode: cc11001100_hook("changeThemeMode", i, "object-key-init"),
              toggleTheme: cc11001100_hook("toggleTheme", s, "object-key-init"),
              theme: cc11001100_hook("theme", l, "object-key-init"),
              themeMode: cc11001100_hook("themeMode", c, "object-key-init"),
              isLightMode: cc11001100_hook("isLightMode", u, "object-key-init"),
              isDarkMode: cc11001100_hook("isDarkMode", d, "object-key-init")
            },
            children: cc11001100_hook("children", e.children, "object-key-init")
          }), "object-key-init")
        });
      }, "var-init");
    function u() {
      return (0, l.useContext)(o);
    }
  },
  73168: function (e, t, a) {
    "use strict";

    a.d(t, {
      _6: function () {
        return l;
      },
      qi: function () {
        return o;
      },
      x3: function () {
        return d;
      },
      _7: function () {
        return f;
      },
      bK: function () {
        return _;
      },
      ky: function () {
        return b.Z;
      }
    });
    var n = cc11001100_hook("n", a(55660), "var-init"),
      i = cc11001100_hook("i", a(2265), "var-init");
    let s = cc11001100_hook("s", null, "var-init");
    function l() {
      (0, i.useEffect)(() => {
        let e = cc11001100_hook("e", async () => {
          s || (s = cc11001100_hook("s", (await a.e(9130).then(a.t.bind(a, 79130, 23))).default, "assign"));
        }, "var-init");
        e();
      }, []);
      let e = cc11001100_hook("e", (0, i.useCallback)(e => {
        if (!s) return;
        let t = cc11001100_hook("t", JSON.parse(JSON.stringify(n.vq)), "var-init");
        t.scheme.host = cc11001100_hook("t.scheme.host", e || "app", "assign"), t.universal.host = cc11001100_hook("t.universal.host", "".concat(t.universal.host, "/").concat(e || ""), "assign");
        let a = cc11001100_hook("a", new s(t), "var-init");
        a.open({
          path: cc11001100_hook("path", "", "object-key-init")
        });
      }, []), "var-init");
      return {
        openApp: cc11001100_hook("openApp", e, "object-key-init")
      };
    }
    a(93086);
    var r = cc11001100_hook("r", a(24033), "var-init");
    function o() {
      let e = cc11001100_hook("e", (0, r.useSearchParams)(), "var-init"),
        t = cc11001100_hook("t", e.get("debug"), "var-init"),
        [a, n] = cc11001100_hook("", (0, i.useState)(() => !1), "var-init");
      return (0, i.useEffect)(() => {
        n(!1);
      }, [t]), {
        isDebug: cc11001100_hook("isDebug", a, "object-key-init")
      };
    }
    var c = cc11001100_hook("c", a(9925), "var-init"),
      u = cc11001100_hook("u", a(60444), "var-init"),
      d = cc11001100_hook("d", () => {
        let e = cc11001100_hook("e", (0, r.useRouter)(), "var-init"),
          {
            inMobile: t
          } = cc11001100_hook("", _(), "var-init"),
          {
            isDesktop: a
          } = cc11001100_hook("", (0, b.Z)(), "var-init"),
          n = cc11001100_hook("n", c.H, "var-init"),
          s = cc11001100_hook("s", (0, i.useCallback)(() => {
            e.push("/chat/downloadPage");
          }, [e]), "var-init"),
          l = cc11001100_hook("l", (0, i.useCallback)(() => {
            let e = cc11001100_hook("e", window.navigator.userAgent, "var-init"),
              i = cc11001100_hook("i", (0, u.fV)(e), "var-init");
            if (a || t) {
              s();
              return;
            }
            switch (i) {
              case "Android":
              case "iOS":
                s();
                break;
              case "macOS":
                window.open(n.macos);
                break;
              case "Windows":
                window.open(n.windows);
            }
          }, [s, t, a, n.macos, n.windows]), "var-init");
        return {
          handleDownloadDesktop: cc11001100_hook("handleDownloadDesktop", l, "object-key-init")
        };
      }, "var-init"),
      p = cc11001100_hook("p", a(1068), "var-init"),
      h = cc11001100_hook("h", a(58644), "var-init"),
      m = cc11001100_hook("m", a(89142), "var-init"),
      E = cc11001100_hook("E", a(67991), "var-init");
    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          botInfo: t,
          info: a
        } = cc11001100_hook("", e, "var-init"),
        n = cc11001100_hook("n", (0, r.useSearchParams)(), "var-init"),
        s = cc11001100_hook("s", (0, r.useRouter)(), "var-init"),
        {
          auth: l,
          setAuth: o,
          userLoginModalShow: c,
          setUserLoginModalShow: d,
          needRealLogin: f
        } = cc11001100_hook("", (0, h.useGlobalExecuteState)() || {}, "var-init"),
        [_, b] = cc11001100_hook("", (0, i.useState)(!1), "var-init"),
        v = cc11001100_hook("v", (0, i.useRef)(l), "var-init"),
        g = cc11001100_hook("g", (0, i.useRef)(c), "var-init");
      (0, i.useEffect)(() => {
        v.current = cc11001100_hook("v.current", l, "assign"), g.current = cc11001100_hook("g.current", c, "assign");
      }, [l, c]), (0, i.useEffect)(() => {
        let e = cc11001100_hook("e", window.location.hostname, "var-init"),
          t = cc11001100_hook("t", "true" === n.get("forceLogin") || !!p.Fg[e], "var-init");
        b(t);
      }, [n]);
      let y = cc11001100_hook("y", (0, i.useCallback)(async function () {
          let e = cc11001100_hook("e", !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], "var-init"),
            i = cc11001100_hook("i", await (0, m.QJ)(), "var-init"),
            l = cc11001100_hook("l", await (0, u.OP)(), "var-init");
          if (i.code !== p.n8.SUCCESS) return a(i.msg), Promise.resolve({});
          if ((0, u.d8)("login", encodeURIComponent(JSON.stringify(i.data)), 90), (0, u.d8)("visitorId", l, 90), (0, u.d8)(p.eW.touristFst, Date.now(), 90), e) {
            let e = cc11001100_hook("e", "/chat/".concat(t.id, "?").concat(n), "var-init");
            s.replace(e);
          }
          return E.Z.setAuth(i.data), null == o || o(i.data), Promise.resolve(i.data);
        }, [s, o, n, t, a]), "var-init"),
        S = cc11001100_hook("S", (0, i.useCallback)(() => (null == d || d(!0), new Promise((e, t) => {
          let a = cc11001100_hook("a", setInterval(() => {
            var t;
            (null === (t = cc11001100_hook("t", v.current, "assign")) || void 0 === t ? void 0 : t.token) ? (clearInterval(a), e(v.current)) : g.current || (clearInterval(a), e({}));
          }, 100), "var-init");
        })), [d]), "var-init"),
        w = cc11001100_hook("w", (0, i.useCallback)(() => (null == d || d(!0), new Promise((e, t) => {
          let a = cc11001100_hook("a", setInterval(() => {
            var t, n;
            (null === (t = cc11001100_hook("t", v.current, "assign")) || void 0 === t ? void 0 : t.user) && !(null === (n = cc11001100_hook("n", v.current.user, "assign")) || void 0 === n ? void 0 : n.isTourist) ? (clearInterval(a), e(v.current)) : g.current || (clearInterval(a), e({}));
          }, 100), "var-init");
        })), [d]), "var-init"),
        I = cc11001100_hook("I", (0, i.useMemo)(() => _ ? S : y, [S, y, _]), "var-init"),
        k = cc11001100_hook("k", (0, i.useCallback)(() => !!f && !!_ && (null == d || d(!0), !0), [f, _, d]), "var-init");
      return {
        needForceLogin: cc11001100_hook("needForceLogin", _, "object-key-init"),
        waitForAuth: cc11001100_hook("waitForAuth", S, "object-key-init"),
        waitForTrueAuth: cc11001100_hook("waitForTrueAuth", w, "object-key-init"),
        checkForceLogin: cc11001100_hook("checkForceLogin", k, "object-key-init"),
        touristLoginAction: cc11001100_hook("touristLoginAction", y, "object-key-init"),
        diffLoginAction: cc11001100_hook("diffLoginAction", I, "object-key-init")
      };
    }
    function _() {
      let [e, t] = cc11001100_hook("", (0, i.useState)(!1), "var-init");
      return (0, i.useEffect)(() => {
        let e = cc11001100_hook("e", () => {
          t(window.matchMedia("(max-width: 879px)").matches);
        }, "var-init");
        return e(), window.addEventListener("resize", e), () => {
          window.removeEventListener("resize", e);
        };
      }, []), {
        inMobile: cc11001100_hook("inMobile", e, "object-key-init")
      };
    }
    var b = cc11001100_hook("b", a(45027), "var-init");
  },
  93086: function (e, t, a) {
    "use strict";

    var n, i, s, l, r, o;
    a.d(t, {
      Lg: function () {
        return c;
      },
      bv: function () {
        return n;
      },
      fW: function () {
        return u;
      },
      SV: function () {
        return d;
      },
      Qr: function () {
        return p;
      },
      YP: function () {
        return h;
      }
    }), a(2265), a(88915), (l = cc11001100_hook("l", n || (n = cc11001100_hook("n", {}, "assign")), "assign")).NONE = cc11001100_hook("(l = n || (n = {})).NONE", "", "assign"), l.OTHER_BOT = cc11001100_hook("l.OTHER_BOT", "otherBot", "assign"), l.IMAGE = cc11001100_hook("l.IMAGE", "image", "assign"), l.WEBPAGE = cc11001100_hook("l.WEBPAGE", "webPage", "assign"), l.FILE = cc11001100_hook("l.FILE", "file", "assign"), (r = cc11001100_hook("r", i || (i = cc11001100_hook("i", {}, "assign")), "assign")).NONE = cc11001100_hook("(r = i || (i = {})).NONE", "", "assign"), r.ARTICLE = cc11001100_hook("r.ARTICLE", "help_me_write_article", "assign"), r.ESSAY = cc11001100_hook("r.ESSAY", "help_me_write_essay", "assign"), r.NOVEL = cc11001100_hook("r.NOVEL", "help_me_write_novel", "assign"), r.STORY = cc11001100_hook("r.STORY", "help_me_write_story", "assign"), r.XIAO_HONG_SHU = cc11001100_hook("r.XIAO_HONG_SHU", "help_me_write_xiaohongshu", "assign"), r.WECHAT_MOMENTS = cc11001100_hook("r.WECHAT_MOMENTS", "help_me_write_wechatmoments", "assign"), (o = cc11001100_hook("o", s || (s = cc11001100_hook("s", {}, "assign")), "assign")).NONE = cc11001100_hook("(o = s || (s = {})).NONE", "", "assign"), o.STYLE = cc11001100_hook("o.STYLE", "style", "assign"), o.SIZE = cc11001100_hook("o.SIZE", "size", "assign");
    let c = cc11001100_hook("c", Object.values(n), "var-init");
    n.WRITE, n.IMAGE, n.WEBPAGE, n.FILE, n.WRITE, i.ARTICLE, i.ESSAY, i.NOVEL, i.STORY, i.XIAO_HONG_SHU, i.WECHAT_MOMENTS, n.WRITE, i.WECHAT_MOMENTS, i.ARTICLE, i.ESSAY, i.NOVEL, i.XIAO_HONG_SHU, n.PROMPT_MENU, s.STYLE, s.SIZE;
    let u = cc11001100_hook("u", [n.FILE], "var-init"),
      d = cc11001100_hook("d", [n.IMAGE], "var-init");
    n.WEBPAGE, n.FILE, n.IMAGE, "".concat(n.WRITE, "-").concat(i.WECHAT_MOMENTS), "".concat(n.WRITE, "-").concat(i.ARTICLE), "".concat(n.WRITE, "-").concat(i.ESSAY), "".concat(n.WRITE, "-").concat(i.NOVEL), "".concat(n.WRITE, "-").concat(i.STORY), "".concat(n.WRITE, "-").concat(i.XIAO_HONG_SHU);
    let p = cc11001100_hook("p", e => {
        let {
          mainType: t,
          subType: a
        } = cc11001100_hook("", e, "var-init");
        return t ? a ? "".concat(t, "-").concat(a) : t : "";
      }, "var-init"),
      h = cc11001100_hook("h", e => [n.FILE, n.IMAGE].includes(e.capability), "var-init");
  },
  45027: function (e, t, a) {
    "use strict";

    a.d(t, {
      Z: function () {
        return i;
      }
    });
    var n = cc11001100_hook("n", a(2265), "var-init");
    function i() {
      let [e, t] = cc11001100_hook("", (0, n.useState)(!1), "var-init"),
        [a, i] = cc11001100_hook("", (0, n.useState)(!1), "var-init"),
        [s, l] = cc11001100_hook("", (0, n.useState)(!1), "var-init");
      return (0, n.useEffect)(() => {
        let e = cc11001100_hook("e", window.navigator.userAgent, "var-init"),
          a = cc11001100_hook("a", /wenxiaobai_desktop/.test(e), "var-init"),
          n = cc11001100_hook("n", /Windows NT 10.0; Win64; x64; wenxiaobai_desktop/.test(e), "var-init"),
          s = cc11001100_hook("s", /Macintosh; Intel Mac OS X 10_15_7; wenxiaobai_desktop/.test(e), "var-init");
        t(a), i(n), l(s);
      }, []), {
        isDesktop: cc11001100_hook("isDesktop", e, "object-key-init"),
        isWinDesktop: cc11001100_hook("isWinDesktop", a, "object-key-init"),
        isMacDesktop: cc11001100_hook("isMacDesktop", s, "object-key-init")
      };
    }
  },
  49335: function (e, t, a) {
    "use strict";

    var n, i, s, l;
    a.d(t, {
      B: function () {
        return n;
      },
      F: function () {
        return i;
      }
    }), (s = cc11001100_hook("s", n || (n = cc11001100_hook("n", {}, "assign")), "assign")).Light = cc11001100_hook("(s = n || (n = {})).Light", "light", "assign"), s.Dark = cc11001100_hook("s.Dark", "dark", "assign"), (l = cc11001100_hook("l", i || (i = cc11001100_hook("i", {}, "assign")), "assign")).Light = cc11001100_hook("(l = i || (i = {})).Light", "light", "assign"), l.Dark = cc11001100_hook("l.Dark", "dark", "assign"), l.System = cc11001100_hook("l.System", "system", "assign");
  },
  75563: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      click_menu_item: cc11001100_hook("click_menu_item", "ClickMenuItem_click_menu_item__azUCC", "object-key-init"),
      active: cc11001100_hook("active", "ClickMenuItem_active__i2Kua", "object-key-init")
    }, "assign");
  },
  49654: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      select_menu_item: cc11001100_hook("select_menu_item", "SelectMenuItem_select_menu_item__Bkbvf", "object-key-init"),
      title: cc11001100_hook("title", "SelectMenuItem_title__YaCoe", "object-key-init"),
      arrowdown_btn: cc11001100_hook("arrowdown_btn", "SelectMenuItem_arrowdown_btn__qTpB_", "object-key-init"),
      option_item_list: cc11001100_hook("option_item_list", "SelectMenuItem_option_item_list__fVJ5n", "object-key-init"),
      option_item: cc11001100_hook("option_item", "SelectMenuItem_option_item__rTq6e", "object-key-init"),
      option_icon: cc11001100_hook("option_icon", "SelectMenuItem_option_icon__2Cniy", "object-key-init"),
      option_text: cc11001100_hook("option_text", "SelectMenuItem_option_text___ARpt", "object-key-init"),
      option_selected: cc11001100_hook("option_selected", "SelectMenuItem_option_selected__aMVXY", "object-key-init"),
      hidden: cc11001100_hook("hidden", "SelectMenuItem_hidden__ewQq8", "object-key-init")
    }, "assign");
  }
}]);