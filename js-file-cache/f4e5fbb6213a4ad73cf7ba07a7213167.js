try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    n = cc11001100_hook("n", new e.Error().stack, "var-init");
  n && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[n] = cc11001100_hook("e._sentryDebugIds[n]", "2bb38201-0c6c-497d-8cfd-b1ef89a977fe", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-2bb38201-0c6c-497d-8cfd-b1ef89a977fe", "assign"));
} catch (e) {}
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[3317], {
  79145: function (e, n, o) {
    Promise.resolve().then(o.bind(o, 92707)), Promise.resolve().then(o.bind(o, 92972)), Promise.resolve().then(o.bind(o, 20278)), Promise.resolve().then(o.bind(o, 5354)), Promise.resolve().then(o.bind(o, 91511)), Promise.resolve().then(o.bind(o, 20297)), Promise.resolve().then(o.bind(o, 25159)), Promise.resolve().then(o.bind(o, 61040)), Promise.resolve().then(o.bind(o, 9301)), Promise.resolve().then(o.bind(o, 34577)), Promise.resolve().then(o.bind(o, 76570));
  },
  92972: function (e, n, o) {
    "use strict";

    o.r(n), o.d(n, {
      default: function () {
        return A;
      }
    });
    var i = cc11001100_hook("i", o(57437), "var-init"),
      s = cc11001100_hook("s", o(72511), "var-init"),
      d = cc11001100_hook("d", o(42744), "var-init"),
      l = cc11001100_hook("l", o.n(d), "var-init"),
      r = cc11001100_hook("r", o(13987), "var-init"),
      a = cc11001100_hook("a", o(11140), "var-init"),
      c = cc11001100_hook("c", o(2265), "var-init"),
      t = cc11001100_hook("t", o(52559), "var-init"),
      h = cc11001100_hook("h", o.n(t), "var-init"),
      b = cc11001100_hook("b", e => {
        let {
            descArr: n = ["扫码下载APP", "随时随地问小白"]
          } = cc11001100_hook("", e, "var-init"),
          [s, {
            toggle: d,
            setLeft: l,
            setRight: t
          }] = cc11001100_hook("", (0, a.Z)(!1), "var-init");
        (0, c.useEffect)(() => {
          "false" === window.localStorage.getItem("codeModalShow") ? l() : t();
        }, []);
        let b = cc11001100_hook("b", () => {
          window.localStorage.setItem("codeModalShow", "false"), d();
        }, "var-init");
        return (0, i.jsx)(i.Fragment, {
          children: cc11001100_hook("children", s && (0, i.jsxs)("div", {
            className: cc11001100_hook("className", null === h() || void 0 === h() ? void 0 : h().wrapper, "object-key-init"),
            children: cc11001100_hook("children", [(0, i.jsxs)("div", {
              className: cc11001100_hook("className", h()["code-inner"], "object-key-init"),
              children: cc11001100_hook("children", [(0, i.jsx)("div", {
                className: cc11001100_hook("className", h().code, "object-key-init"),
                children: cc11001100_hook("children", (0, i.jsx)("img", {
                  src: cc11001100_hook("src", o(70108).Z.src, "object-key-init"),
                  alt: cc11001100_hook("alt", "", "object-key-init")
                }), "object-key-init")
              }), (0, i.jsx)("div", {
                className: cc11001100_hook("className", h()["code-desc"], "object-key-init"),
                children: cc11001100_hook("children", n.map((e, n) => (0, i.jsx)("p", {
                  children: cc11001100_hook("children", e, "object-key-init")
                }, n)), "object-key-init")
              })], "object-key-init")
            }), (0, i.jsx)("div", {
              className: cc11001100_hook("className", h().close, "object-key-init"),
              onClick: cc11001100_hook("onClick", () => b(), "object-key-init"),
              children: cc11001100_hook("children", (0, i.jsx)(r.Z, {
                className: cc11001100_hook("className", h().icon, "object-key-init"),
                size: cc11001100_hook("size", 20, "object-key-init"),
                name: cc11001100_hook("name", "Group1942974484", "object-key-init")
              }), "object-key-init")
            })], "object-key-init")
          }), "object-key-init")
        });
      }, "var-init"),
      u = cc11001100_hook("u", o(30124), "var-init"),
      f = cc11001100_hook("f", o.n(u), "var-init"),
      A = cc11001100_hook("A", e => {
        let {
          themeClassName: n,
          containerId: o
        } = cc11001100_hook("", (0, s.useViewConfigState)(), "var-init");
        return (0, i.jsx)(i.Fragment, {
          children: cc11001100_hook("children", (0, i.jsxs)("div", {
            id: cc11001100_hook("id", o, "object-key-init"),
            className: cc11001100_hook("className", l()(n, f()["page-container"]), "object-key-init"),
            children: cc11001100_hook("children", [(0, i.jsx)(b, {}), null == e ? void 0 : e.children], "object-key-init")
          }), "object-key-init")
        });
      }, "var-init");
  },
  52559: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      wrapper: cc11001100_hook("wrapper", "CodeModal_wrapper__lIpE2", "object-key-init"),
      "code-inner": cc11001100_hook("code-inner", "CodeModal_code-inner__86PTw", "object-key-init"),
      code: cc11001100_hook("code", "CodeModal_code__UbRsG", "object-key-init"),
      "code-desc": cc11001100_hook("code-desc", "CodeModal_code-desc__57ZRt", "object-key-init"),
      close: cc11001100_hook("close", "CodeModal_close__xlcui", "object-key-init"),
      icon: cc11001100_hook("icon", "CodeModal_icon__szq0Y", "object-key-init")
    }, "assign");
  },
  30124: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      "page-container": cc11001100_hook("page-container", "CommonPageContainer_page-container__TXlwM", "object-key-init")
    }, "assign");
  },
  70108: function (e, n) {
    "use strict";

    n.Z = cc11001100_hook("n.Z", {
      src: cc11001100_hook("src", "/_next/static/media/wenxiaobai.down.e93aff87.png", "object-key-init"),
      height: cc11001100_hook("height", 1500, "object-key-init"),
      width: cc11001100_hook("width", 1500, "object-key-init"),
      blurDataURL: cc11001100_hook("blurDataURL", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAtElEQVR42g2OywqDMBBF8/9/4abWR6MpxYARKlTa5qlURRIf4EYEN35CZzPMcOdyDpqmSUp5HIe1tm3bvu/hnOcZGWPSNK3rWnCRZTRnOSFEa42WZamqinOuG5MzCn/QgIkgTJKEZI/13Rj6+8hv+SwhQ9u2+f41xoFV64s5bQSlVAiBAA6b53l+eLnhIAqjOI67rkNKKaAVRcFyBnxyJxhjcEFgBqjzPJ1z4ziC8TAM+77/AalGlZfigyLaAAAAAElFTkSuQmCC", "object-key-init"),
      blurWidth: cc11001100_hook("blurWidth", 8, "object-key-init"),
      blurHeight: cc11001100_hook("blurHeight", 8, "object-key-init")
    }, "assign");
  }
}, function (e) {
  e.O(0, [6990, 5580, 5368, 6817, 2329, 4576, 4074, 7655, 3018, 1409, 7775, 6126, 413, 4220, 8326, 6052, 3288, 3305, 6201, 6279, 3643, 1089, 6721, 991, 2971, 1530, 1744], function () {
    return e(e.s = cc11001100_hook("e.s", 79145, "assign"));
  }), _N_E = cc11001100_hook("_N_E", e.O(), "assign");
}]);