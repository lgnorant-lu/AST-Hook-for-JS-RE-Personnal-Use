try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "59309db9-7965-45d0-89e5-f893029d02cc", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-59309db9-7965-45d0-89e5-f893029d02cc", "assign"));
} catch (e) {}
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[6279], {
  62565: function (e, t, n) {
    "use strict";

    n.d(t, {
      Z: function () {
        return c;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(28169), "var-init"),
      o = cc11001100_hook("o", n(14074), "var-init");
    n(2265);
    var s = cc11001100_hook("s", n(84516), "var-init"),
      i = cc11001100_hook("i", n.n(s), "var-init");
    let u = cc11001100_hook("u", {
      components: {
        Popover: {
          sizePopupArrow: cc11001100_hook("sizePopupArrow", 0, "object-key-init")
        }
      },
      token: {
        sizePopupArrow: cc11001100_hook("sizePopupArrow", 0, "object-key-init"),
        borderRadiusLG: cc11001100_hook("borderRadiusLG", 100, "object-key-init"),
        borderRadiusXS: cc11001100_hook("borderRadiusXS", 100, "object-key-init"),
        padding: cc11001100_hook("padding", 16, "object-key-init")
      }
    }, "var-init");
    var c = cc11001100_hook("c", e => {
      let {
        className: t = "",
        children: n,
        content: s,
        trigger: c = "hover",
        placement: l,
        theme: d,
        open: I,
        getPopupContainer: v,
        onOpenChange: E = e => {},
        overlayStyle: _,
        overlayInnerStyle: p,
        overlayClassName: h,
        align: f,
        mouseEnterDelay: T,
        arrow: N = !1
      } = cc11001100_hook("", e, "var-init");
      return (0, r.jsx)(a.ZP, {
        theme: {
          ...u,
          ...d
        },
        children: cc11001100_hook("children", (0, r.jsx)(o.Z, {
          visible: cc11001100_hook("visible", I, "object-key-init"),
          open: cc11001100_hook("open", I, "object-key-init"),
          className: cc11001100_hook("className", "".concat(i().popover, " ").concat(t), "object-key-init"),
          content: cc11001100_hook("content", s, "object-key-init"),
          trigger: cc11001100_hook("trigger", c, "object-key-init"),
          placement: cc11001100_hook("placement", l, "object-key-init"),
          onOpenChange: cc11001100_hook("onOpenChange", E, "object-key-init"),
          getPopupContainer: cc11001100_hook("getPopupContainer", v, "object-key-init"),
          overlayClassName: cc11001100_hook("overlayClassName", h, "object-key-init"),
          overlayStyle: cc11001100_hook("overlayStyle", _, "object-key-init"),
          overlayInnerStyle: cc11001100_hook("overlayInnerStyle", p, "object-key-init"),
          align: cc11001100_hook("align", f, "object-key-init"),
          mouseEnterDelay: cc11001100_hook("mouseEnterDelay", T, "object-key-init"),
          arrow: cc11001100_hook("arrow", N, "object-key-init"),
          children: cc11001100_hook("children", n, "object-key-init")
        }), "object-key-init")
      });
    }, "var-init");
  },
  25159: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      ConverProvider: function () {
        return Y;
      },
      useConver: function () {
        return W;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(1068), "var-init"),
      o = cc11001100_hook("o", n(19606), "var-init"),
      s = cc11001100_hook("s", n(67991), "var-init"),
      i = cc11001100_hook("i", n(60444), "var-init"),
      u = cc11001100_hook("u", n(33018), "var-init"),
      c = cc11001100_hook("c", n(4966), "var-init"),
      l = cc11001100_hook("l", n(34098), "var-init"),
      d = cc11001100_hook("d", n.n(l), "var-init"),
      I = cc11001100_hook("I", n(62067), "var-init"),
      v = cc11001100_hook("v", n.n(I), "var-init"),
      E = cc11001100_hook("E", n(24033), "var-init"),
      _ = cc11001100_hook("_", n(2265), "var-init"),
      p = cc11001100_hook("p", n(34577), "var-init");
    let h = cc11001100_hook("h", (0, _.createContext)(null), "var-init"),
      f = cc11001100_hook("f", e => {
        let t = cc11001100_hook("t", "", "var-init");
        if (e) {
          let {
              turnList: n
            } = cc11001100_hook("", e, "var-init"),
            r = cc11001100_hook("r", n[n.length - 1], "var-init");
          if (r) {
            let e = cc11001100_hook("e", r.sentenceList[0], "var-init");
            e && (t = cc11001100_hook("t", e.sentTime, "assign"));
          }
        }
        return t;
      }, "var-init"),
      T = cc11001100_hook("T", (e, t) => {
        let {
            conversationId: n,
            turnId: r,
            sentenceId: a,
            feedback: o
          } = cc11001100_hook("", e, "var-init"),
          s = cc11001100_hook("s", t[n], "var-init");
        if (s) {
          let e = cc11001100_hook("e", {
            ...s
          }, "var-init");
          for (let t = cc11001100_hook("t", 0, "var-init"); t < e.turnList.length; ++t) if (e.turnList[t].turnId === r) {
            let n = cc11001100_hook("n", {
              ...e.turnList[t]
            }, "var-init");
            for (let r = cc11001100_hook("r", 0, "var-init"); r < n.sentenceList.length; ++r) if (n.sentenceList[r].sentenceId === a) {
              let a = cc11001100_hook("a", {
                ...n.sentenceList[r],
                feedback: o
              }, "var-init");
              return n.sentenceList = cc11001100_hook("n.sentenceList", [...n.sentenceList], "assign"), n.sentenceList[r] = cc11001100_hook("n.sentenceList[r]", a, "assign"), e.turnList = cc11001100_hook("e.turnList", [...e.turnList], "assign"), e.turnList[t] = cc11001100_hook("e.turnList[t]", n, "assign"), e;
            }
          }
        }
        return null;
      }, "var-init"),
      N = cc11001100_hook("N", (e, t) => {
        let {
            conversationId: n,
            turnId: r
          } = cc11001100_hook("", e, "var-init"),
          a = cc11001100_hook("a", t[n], "var-init");
        if (a) {
          let e = cc11001100_hook("e", [...a.turnList], "var-init");
          for (let t = cc11001100_hook("t", 0, "var-init"); t < e.length; ++t) if (e[t].turnId === r) {
            let n = cc11001100_hook("n", {
              ...e[t]
            }, "var-init");
            n.status = cc11001100_hook("n.status", "delete", "assign"), n.turnId = cc11001100_hook("n.turnId", "delete_".concat(r), "assign"), e[t] = cc11001100_hook("e[t]", n, "assign");
            break;
          }
          return a.turnList = cc11001100_hook("a.turnList", e, "assign"), a;
        }
        return null;
      }, "var-init"),
      y = cc11001100_hook("y", (e, t) => {
        let n;
        let {
            answer: r,
            conversationId: a,
            state: o,
            appConfig: s
          } = cc11001100_hook("", e, "var-init"),
          i = cc11001100_hook("i", {
            ...t[a]
          }, "var-init"),
          u = cc11001100_hook("u", [...i.turnList], "var-init"),
          c = cc11001100_hook("c", 0, "var-init");
        for (; c < u.length; ++c) if (u[c].turnId === r.turnId) {
          n = cc11001100_hook("n", {
            ...u[c]
          }, "assign");
          break;
        }
        if (n) {
          let e = cc11001100_hook("e", !0, "var-init");
          n.loading = cc11001100_hook("n.loading", !1, "assign");
          for (let t = cc11001100_hook("t", 0, "var-init"); t < n.sentenceList.length; ++t) {
            let a = cc11001100_hook("a", {
              ...n.sentenceList[t]
            }, "var-init");
            if (a.sentenceId === r.sentenceId) {
              if ("close" !== o && (a.breakingStrategy = cc11001100_hook("a.breakingStrategy", r.breakingStrategy, "assign"), a.isBanned = cc11001100_hook("a.isBanned", r.isBanned, "assign"), a.isRetry = cc11001100_hook("a.isRetry", r.isRetry, "assign"), a.loadingEvent = cc11001100_hook("a.loadingEvent", r.loadingEvent, "assign"), r.isBanned ? a.contents = cc11001100_hook("a.contents", r.contents || s.bannedResponse, "assign") : a.contents = cc11001100_hook("a.contents", r.contents || "", "assign"), a.loading = cc11001100_hook("a.loading", !0, "assign")), ("webSearchDetail" === o || "ppt" === o) && r.extraInfo) {
                let e = cc11001100_hook("e", a.extraInfo || {}, "var-init");
                a.extraInfo = cc11001100_hook("a.extraInfo", {
                  ...e,
                  ...r.extraInfo
                }, "assign");
              }
              ("close" === o || "error" === o || "generateEnd" === o || "needLogin" === o || "needBound" === o) && (a.loading = cc11001100_hook("a.loading", !1, "assign")), r.voluntaryStop, a.voluntaryStop = cc11001100_hook("a.voluntaryStop", r.voluntaryStop || !1, "assign"), e = cc11001100_hook("e", !1, "assign");
              let i = cc11001100_hook("i", [...n.sentenceList], "var-init");
              i[t] = cc11001100_hook("i[t]", a, "assign"), n.sentenceList = cc11001100_hook("n.sentenceList", i, "assign");
              break;
            }
          }
          if (e) {
            let e = cc11001100_hook("e", r.isBanned ? s.bannedResponse : r.contents, "var-init"),
              t = cc11001100_hook("t", {
                ...r,
                contents: e,
                sentenceId: r.sentenceId,
                direction: 2,
                loading: "before" === o || "message" === o,
                voluntaryStop: r.voluntaryStop || !1
              }, "var-init"),
              a = cc11001100_hook("a", [...n.sentenceList], "var-init");
            a.push(t), n.sentenceList = cc11001100_hook("n.sentenceList", a, "assign");
          }
        }
        return n.status = cc11001100_hook("n.status", o, "assign"), u[c] = cc11001100_hook("u[c]", n, "assign"), i.turnList = cc11001100_hook("i.turnList", u, "assign"), i;
      }, "var-init"),
      b = cc11001100_hook("b", (e, t) => {
        let {
            conver: n,
            strategy: r,
            auth: a
          } = cc11001100_hook("", e, "var-init"),
          o = cc11001100_hook("o", t[n.conversationId], "var-init");
        if (!o) {
          var s;
          o = cc11001100_hook("o", {
            conversationId: cc11001100_hook("conversationId", n.conversationId, "object-key-init"),
            botId: cc11001100_hook("botId", e.botId, "object-key-init"),
            userId: cc11001100_hook("userId", null === (s = cc11001100_hook("s", a.user, "assign")) || void 0 === s ? void 0 : s.id, "object-key-init"),
            turnList: cc11001100_hook("turnList", [], "object-key-init")
          }, "assign");
        }
        let i = cc11001100_hook("i", [...o.turnList], "var-init");
        if (!r.isRetry) {
          let e = cc11001100_hook("e", {
            turnId: cc11001100_hook("turnId", n.turnId, "object-key-init"),
            sentenceList: cc11001100_hook("sentenceList", [], "object-key-init")
          }, "var-init");
          0 === r.breakingStrategy && e.sentenceList.push(n.question), i.unshift(e);
        }
        i[0].status = cc11001100_hook("i[0].status", "before", "assign");
        let u = cc11001100_hook("u", [...i[0].sentenceList], "var-init");
        return u.push(n.answer), i[0].sentenceList = cc11001100_hook("i[0].sentenceList", u, "assign"), o.turnList = cc11001100_hook("o.turnList", i, "assign"), o;
      }, "var-init"),
      A = cc11001100_hook("A", (e, t) => {
        let {
            conver: n,
            strategy: r
          } = cc11001100_hook("", e, "var-init"),
          a = cc11001100_hook("a", t[n.conversationId], "var-init");
        if (a) {
          a.conversationId = cc11001100_hook("a.conversationId", n.conversationId, "assign"), "timeout" === a.status && (0, i.CZ)(a.conversationId);
          let e = cc11001100_hook("e", [...a.turnList], "var-init");
          if (e[0] && e[0].sentenceList) {
            e[0].turnId = cc11001100_hook("e[0].turnId", n.turnId, "assign");
            let t = cc11001100_hook("t", [...e[0].sentenceList], "var-init");
            for (let e = cc11001100_hook("e", 0, "var-init"); e < t.length; ++e) 1 === t[e].direction && 0 === r.breakingStrategy ? t[e] = cc11001100_hook("t[e]", n.question, "assign") : 2 === t[e].direction && t[e].sentenceId === u.NEW_SENTENCE_ID && (t[e] = cc11001100_hook("t[e]", n.answer, "assign"));
            e[0].status = cc11001100_hook("e[0].status", "open", "assign"), e[0].sentenceList = cc11001100_hook("e[0].sentenceList", t, "assign");
          }
          a.turnList = cc11001100_hook("a.turnList", e, "assign");
        }
        return a;
      }, "var-init"),
      S = cc11001100_hook("S", (e, t) => {
        let {
            conver: n,
            strategy: r
          } = cc11001100_hook("", e, "var-init"),
          a = cc11001100_hook("a", t[n.conversationId], "var-init");
        if (a) {
          a.conversationId = cc11001100_hook("a.conversationId", n.conversationId, "assign");
          let e = cc11001100_hook("e", [...a.turnList], "var-init");
          e[0] && (e[0].turnId = cc11001100_hook("e[0].turnId", n.turnId, "assign"), e[0].status = cc11001100_hook("e[0].status", "timeout", "assign")), a.turnList = cc11001100_hook("a.turnList", e, "assign");
        }
        return {
          ...a,
          dirty: !0,
          status: "timeout"
        };
      }, "var-init"),
      C = cc11001100_hook("C", {
        before: cc11001100_hook("before", 0, "object-key-init"),
        timeout: cc11001100_hook("timeout", 0, "object-key-init"),
        open: cc11001100_hook("open", 1, "object-key-init"),
        webSearch: cc11001100_hook("webSearch", 2, "object-key-init"),
        webSearchDetail: cc11001100_hook("webSearchDetail", 3, "object-key-init"),
        message: cc11001100_hook("message", 4, "object-key-init"),
        generateEnd: cc11001100_hook("generateEnd", 5, "object-key-init"),
        suggested: cc11001100_hook("suggested", 6, "object-key-init"),
        close: cc11001100_hook("close", 7, "object-key-init"),
        error: cc11001100_hook("error", 7, "object-key-init"),
        needLogin: cc11001100_hook("needLogin", 7, "object-key-init"),
        ppt: cc11001100_hook("ppt", 6, "object-key-init"),
        needBound: cc11001100_hook("needBound", 8, "object-key-init"),
        banned: cc11001100_hook("banned", 9, "object-key-init")
      }, "var-init"),
      L = function (e, t) {
        let n = cc11001100_hook("n", C[null == t ? void 0 : t.status], "var-init"),
          r = cc11001100_hook("r", C[e], "var-init");
        return r > n ? e : null == t ? void 0 : t.status;
      },
      P = cc11001100_hook("P", {}, "var-init"),
      g = cc11001100_hook("g", {
        INITIAL_CONVERSATION: cc11001100_hook("INITIAL_CONVERSATION", "INITIAL_CONVERSATION", "object-key-init"),
        MORE_CONVERSATION: cc11001100_hook("MORE_CONVERSATION", "MORE_CONVERSATION", "object-key-init"),
        SET_SENTENCE_FEEDBACK: cc11001100_hook("SET_SENTENCE_FEEDBACK", "SET_SENTENCE_FEEDBACK", "object-key-init"),
        INSERT_NEW_CONVERSATION: cc11001100_hook("INSERT_NEW_CONVERSATION", "INSERT_NEW_CONVERSATION", "object-key-init"),
        DELETE_TURN_FROM_CONVERSATION: cc11001100_hook("DELETE_TURN_FROM_CONVERSATION", "DELETE_TURN_FROM_CONVERSATION", "object-key-init"),
        APPEND_ANSWER: cc11001100_hook("APPEND_ANSWER", "APPEND_ANSWER", "object-key-init"),
        UPDATE_ANSWER: cc11001100_hook("UPDATE_ANSWER", "UPDATE_ANSWER", "object-key-init"),
        DELETE_CONVERSATION: cc11001100_hook("DELETE_CONVERSATION", "DELETE_CONVERSATION", "object-key-init"),
        INSERT_NEW_TURN: cc11001100_hook("INSERT_NEW_TURN", "INSERT_NEW_TURN", "object-key-init"),
        UPDATE_TURN_TO_OPEN: cc11001100_hook("UPDATE_TURN_TO_OPEN", "UPDATE_TURN_TO_OPEN", "object-key-init"),
        UPDATE_TURN_TO_TIMEOUT: cc11001100_hook("UPDATE_TURN_TO_TIMEOUT", "UPDATE_TURN_TO_TIMEOUT", "object-key-init"),
        CREATE_MEDIA_LOADING: cc11001100_hook("CREATE_MEDIA_LOADING", "CREATE_MEDIA_LOADING", "object-key-init"),
        CLEAR_MEDIA_LOADING: cc11001100_hook("CLEAR_MEDIA_LOADING", "CLEAR_MEDIA_LOADING", "object-key-init")
      }, "var-init"),
      m = cc11001100_hook("m", {
        5013: cc11001100_hook(5013, "needLogin", "object-key-init"),
        5014: cc11001100_hook(5014, "needBound", "object-key-init")
      }, "var-init");
    function D(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      switch (t.type) {
        case g.INITIAL_CONVERSATION:
          {
            let {
              conversationId: n,
              data: r
            } = cc11001100_hook("", t.payload, "var-init");
            return {
              ...e,
              [n]: r
            };
          }
        case g.MORE_CONVERSATION:
          {
            let {
              conversationId: n,
              data: r
            } = cc11001100_hook("", t.payload, "var-init");
            return {
              ...e,
              [n]: {
                ...e[n],
                ...r
              }
            };
          }
        case g.SET_SENTENCE_FEEDBACK:
          {
            let {
                conversationId: n
              } = cc11001100_hook("", t.payload, "var-init"),
              r = cc11001100_hook("r", T(t.payload, e), "var-init");
            return null == r ? e : {
              ...e,
              [n]: r
            };
          }
        case g.INSERT_NEW_CONVERSATION:
          {
            let {
              conversationId: n,
              data: r
            } = cc11001100_hook("", t.payload, "var-init");
            return {
              ...e,
              [n]: r
            };
          }
        case g.DELETE_TURN_FROM_CONVERSATION:
          {
            let {
                conversationId: n
              } = cc11001100_hook("", t.payload, "var-init"),
              r = cc11001100_hook("r", N(t.payload, e), "var-init");
            return null == r ? e : {
              ...e,
              [n]: {
                ...r,
                dirty: !0
              }
            };
          }
        case g.APPEND_ANSWER:
          {
            let {
                conversationId: n
              } = cc11001100_hook("", t.payload, "var-init"),
              r = cc11001100_hook("r", L(t.payload.state, e[n]), "var-init"),
              a = cc11001100_hook("a", y({
                ...t.payload,
                state: r
              }, e), "var-init");
            return {
              ...e,
              [n]: {
                ...a,
                dirty: !0,
                status: r
              }
            };
          }
        case g.UPDATE_ANSWER:
          {
            let {
              conversationId: n,
              sentenceId: r,
              turnId: a,
              info: o
            } = cc11001100_hook("", t.payload, "var-init");
            return {
              ...function (e, t, n, r, a) {
                var o, s;
                let i = cc11001100_hook("i", JSON.parse(JSON.stringify(e)), "var-init"),
                  u = cc11001100_hook("u", i[t], "var-init");
                if (!u) return i;
                let c = cc11001100_hook("c", null === (o = cc11001100_hook("o", u.turnList, "assign")) || void 0 === o ? void 0 : o.find(e => e.turnId === n), "var-init");
                if (!c) return i;
                let l = cc11001100_hook("l", null === (s = cc11001100_hook("s", c.sentenceList, "assign")) || void 0 === s ? void 0 : s.find(e => e.sentenceId === r), "var-init");
                return l && (l.extraInfo = cc11001100_hook("l.extraInfo", {
                  ...(l.extraInfo || {}),
                  ...a
                }, "assign"), i[t].dirty = cc11001100_hook("i[t].dirty", !0, "assign")), i;
              }(e, n, a, r, o)
            };
          }
        case g.DELETE_CONVERSATION:
          {
            let {
              conversationId: n
            } = cc11001100_hook("", t.payload, "var-init");
            return {
              ...e,
              [n]: {}
            };
          }
        case g.INSERT_NEW_TURN:
          {
            var n;
            let {
                conversationId: r
              } = cc11001100_hook("", t.payload.conver, "var-init"),
              a = cc11001100_hook("a", b(t.payload, e), "var-init");
            return {
              ...e,
              [r]: {
                ...a,
                dirty: !0,
                status: (null == t ? void 0 : null === (n = cc11001100_hook("n", t.payload, "assign")) || void 0 === n ? void 0 : n.status) || "before"
              }
            };
          }
        case g.UPDATE_TURN_TO_OPEN:
          {
            let {
                conversationId: n
              } = cc11001100_hook("", t.payload, "var-init"),
              r = cc11001100_hook("r", A(t.payload, e), "var-init");
            return {
              ...e,
              [n]: {
                ...r,
                dirty: !0,
                status: "open"
              }
            };
          }
        case g.UPDATE_TURN_TO_TIMEOUT:
          {
            let {
                conversationId: n
              } = cc11001100_hook("", t.payload, "var-init"),
              r = cc11001100_hook("r", S(t.payload, e), "var-init");
            return {
              ...e,
              [n]: r
            };
          }
        case g.CREATE_MEDIA_LOADING:
          {
            let {
                conversationId: n,
                inputValue: r
              } = cc11001100_hook("", t.payload, "var-init"),
              a = cc11001100_hook("a", R({
                state: cc11001100_hook("state", e, "object-key-init"),
                conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
                inputValue: cc11001100_hook("inputValue", r, "object-key-init")
              }), "var-init");
            return {
              ...a
            };
          }
        case g.CLEAR_MEDIA_LOADING:
          {
            let {
                conversationId: n
              } = cc11001100_hook("", t.payload, "var-init"),
              r = cc11001100_hook("r", O({
                state: cc11001100_hook("state", e, "object-key-init"),
                conversationId: cc11001100_hook("conversationId", n, "object-key-init")
              }), "var-init");
            return {
              ...r
            };
          }
        default:
          throw Error("Unhandled action type");
      }
    }
    let R = cc11001100_hook("R", e => {
        var t;
        let {
            state: n,
            conversationId: r,
            inputValue: a
          } = cc11001100_hook("", e, "var-init"),
          o = cc11001100_hook("o", d()(null === (t = cc11001100_hook("t", n[r], "assign")) || void 0 === t ? void 0 : t.turnList), "var-init");
        return null == o || o.unshift({
          turnId: cc11001100_hook("turnId", "media-loading-id", "object-key-init"),
          sentenceList: cc11001100_hook("sentenceList", [{
            contents: cc11001100_hook("contents", a, "object-key-init"),
            mediaInfos: cc11001100_hook("mediaInfos", [{
              q_type: cc11001100_hook("q_type", "loading", "object-key-init")
            }], "object-key-init"),
            turnIndex: cc11001100_hook("turnIndex", 0, "object-key-init"),
            direction: cc11001100_hook("direction", 1, "object-key-init")
          }], "object-key-init"),
          status: cc11001100_hook("status", "open", "object-key-init")
        }), {
          ...n,
          [r]: {
            ...n[r],
            turnList: o
          }
        };
      }, "var-init"),
      O = cc11001100_hook("O", e => {
        var t;
        let {
            state: n,
            conversationId: r
          } = cc11001100_hook("", e, "var-init"),
          a = cc11001100_hook("a", d()(null === (t = cc11001100_hook("t", n[r], "assign")) || void 0 === t ? void 0 : t.turnList), "var-init");
        return a = cc11001100_hook("a", (a || []).filter(e => (null == e ? void 0 : e.turnId) !== "media-loading-id"), "assign"), {
          ...n,
          [r]: {
            ...n[r],
            turnList: a
          }
        };
      }, "var-init"),
      w = cc11001100_hook("w", {
        UPDATE_STEP: cc11001100_hook("UPDATE_STEP", "UPDATE_STEP", "object-key-init"),
        UPDATE_STATE: cc11001100_hook("UPDATE_STATE", "UPDATE_STATE", "object-key-init"),
        UPDATE_ACT: cc11001100_hook("UPDATE_ACT", "UPDATE_ACT", "object-key-init"),
        CLEAR_SENTENCE: cc11001100_hook("CLEAR_SENTENCE", "CLEAR_SENTENCE", "object-key-init")
      }, "var-init"),
      k = cc11001100_hook("k", {}, "var-init");
    function U(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      switch (t.type) {
        case w.UPDATE_STEP:
          {
            let {
                uuid: n,
                turnId: r,
                sentenceId: a,
                contents: o
              } = cc11001100_hook("", t.payload, "var-init"),
              s = cc11001100_hook("s", n || "".concat(r, "_").concat(a), "var-init"),
              i = cc11001100_hook("i", e[s] ? {
                ...e[s],
                step: t.payload.step,
                status: !0,
                contents: o
              } : {
                step: cc11001100_hook("step", t.payload.step, "object-key-init"),
                status: cc11001100_hook("status", !0, "object-key-init"),
                contents: cc11001100_hook("contents", o, "object-key-init")
              }, "var-init");
            return {
              ...e,
              [s]: i
            };
          }
        case w.UPDATE_STATE:
          {
            let {
                turnId: n,
                sentenceId: r,
                status: a,
                uuid: o
              } = cc11001100_hook("", t.payload, "var-init"),
              s = cc11001100_hook("s", o || "".concat(n, "_").concat(r), "var-init"),
              i = cc11001100_hook("i", e[s] ? {
                ...e[s],
                status: a
              } : {
                status: cc11001100_hook("status", a, "object-key-init")
              }, "var-init");
            return {
              ...e,
              [s]: i
            };
          }
        case w.UPDATE_ACT:
          {
            let {
                turnId: n,
                sentenceId: r,
                actStatus: a
              } = cc11001100_hook("", t.payload, "var-init"),
              o = cc11001100_hook("o", "".concat(n, "_").concat(r), "var-init"),
              s = cc11001100_hook("s", e[o] ? {
                ...e[o],
                actStatus: a
              } : {
                actStatus: cc11001100_hook("actStatus", a, "object-key-init")
              }, "var-init");
            return {
              ...e,
              [o]: s
            };
          }
        case w.CLEAR_SENTENCE:
          {
            let {
                turnId: n,
                sentenceId: r
              } = cc11001100_hook("", t.payload, "var-init"),
              a = cc11001100_hook("a", "".concat(n, "_").concat(r), "var-init");
            return {
              ...e,
              [a]: null
            };
          }
      }
    }
    function Y(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        appConfig: n,
        auth: u
      } = cc11001100_hook("", e, "var-init");
      (0, E.useParams)(), (0, E.useSearchParams)(), (0, E.usePathname)();
      let [l, d] = cc11001100_hook("", (0, _.useState)(""), "var-init"),
        I = cc11001100_hook("I", (0, _.useRef)(""), "var-init"),
        [T, N] = cc11001100_hook("", (0, _.useState)({}), "var-init"),
        [y, b] = cc11001100_hook("", (0, _.useState)({}), "var-init"),
        [A, S] = cc11001100_hook("", (0, _.useState)({}), "var-init"),
        [C, L] = cc11001100_hook("", (0, _.useState)({}), "var-init"),
        [R, O] = cc11001100_hook("", (0, _.useState)(!1), "var-init"),
        [w, Y] = cc11001100_hook("", (0, _.useState)({}), "var-init"),
        [W, Z] = cc11001100_hook("", (0, _.useState)(""), "var-init"),
        [M, X] = cc11001100_hook("", (0, _.useState)(""), "var-init"),
        [B, x] = cc11001100_hook("", (0, _.useState)({}), "var-init"),
        [V, q] = cc11001100_hook("", (0, _.useState)((null == n ? void 0 : n.deepSeekStopText) || "思考已停止"), "var-init"),
        [z, j] = cc11001100_hook("", (0, _.useState)(""), "var-init"),
        [G, F] = cc11001100_hook("", (0, _.useState)(""), "var-init"),
        {
          track: K
        } = cc11001100_hook("", (0, p.useTrack)(), "var-init"),
        [H, J] = cc11001100_hook("", (0, _.useReducer)(D, P), "var-init"),
        [Q, $] = cc11001100_hook("", (0, _.useReducer)(U, k), "var-init"),
        [ee, {
          setTrue: et,
          setFalse: en
        }] = cc11001100_hook("", (0, c.Z)(!0), "var-init"),
        er = cc11001100_hook("er", "history", "var-init"),
        ea = cc11001100_hook("ea", (0, _.useCallback)(e => {
          Z(e);
        }, [Z]), "var-init"),
        eo = cc11001100_hook("eo", (0, _.useCallback)(e => {
          let {
            conversationId: t,
            index: n
          } = cc11001100_hook("", e, "var-init");
          x({
            ...B,
            [t]: n
          });
        }, [B]), "var-init"),
        es = cc11001100_hook("es", (0, _.useCallback)(e => {
          let {
            turnId: t,
            answer: n,
            end: r,
            forceStop: a = !1
          } = cc11001100_hook("", e, "var-init");
        }, [$]), "var-init"),
        ei = cc11001100_hook("ei", (0, _.useCallback)(e => {
          J({
            type: cc11001100_hook("type", g.SET_SENTENCE_FEEDBACK, "object-key-init"),
            payload: cc11001100_hook("payload", e, "object-key-init")
          });
        }, [J]), "var-init"),
        eu = cc11001100_hook("eu", (0, _.useCallback)(async e => {
          if (!H[e.conversationId]) try {
            let t = cc11001100_hook("t", new Date(), "var-init");
            t = cc11001100_hook("t", v().utc(t).subtract(1, "seconds").clone().add(8, "hours").format("YYYY-MM-DDTHH:mm:ss"), "assign");
            let n = cc11001100_hook("n", await (0, o.A7)({
              ...e,
              startTime: t
            }), "var-init");
            if (n.code === a.n8.SUCCESS) {
              let t = cc11001100_hook("t", n.data[0], "var-init");
              t.turnList.reverse();
              let r = cc11001100_hook("r", (0, i.TD)(), "var-init"),
                a = cc11001100_hook("a", r && r[e.conversationId] && r[e.conversationId].turnList && r[e.conversationId].turnList.length > 0, "var-init");
              if (a) {
                let n = cc11001100_hook("n", r[e.conversationId].turnList, "var-init");
                for (let e = cc11001100_hook("e", 0, "var-init"); e < n.length; ++e) t.turnList.unshift(n[e]);
              }
              J({
                type: cc11001100_hook("type", g.INITIAL_CONVERSATION, "object-key-init"),
                payload: {
                  conversationId: cc11001100_hook("conversationId", t.conversationId, "object-key-init"),
                  data: {
                    ...t,
                    dirty: !1,
                    status: a ? "timeout" : ""
                  }
                }
              });
            }
          } catch (e) {}
        }, [H, J]), "var-init"),
        ec = cc11001100_hook("ec", (0, _.useCallback)(async e => {
          let {
              conversationId: t
            } = cc11001100_hook("", e, "var-init"),
            n = cc11001100_hook("n", H[t], "var-init"),
            r = cc11001100_hook("r", f(n), "var-init");
          r || (r = cc11001100_hook("r", new Date(), "assign")), r = cc11001100_hook("r", v()(r).subtract(1, "s").format("YYYY-MM-DDTHH:mm:ss"), "assign");
          let a = cc11001100_hook("a", await (0, o.A7)({
            ...e,
            startTime: r
          }), "var-init");
          if (a && a.data.length < 1) {
            L(e => {
              let n = cc11001100_hook("n", {
                ...e
              }, "var-init");
              return n[t] = cc11001100_hook("n[t]", !0, "assign"), n;
            });
            return;
          }
          let s = cc11001100_hook("s", H[t], "var-init"),
            i = cc11001100_hook("i", s ? {
              ...s
            } : {}, "var-init"),
            u = cc11001100_hook("u", a.data[0], "var-init");
          return u.turnList.reverse(), u.conversationId === (null == s ? void 0 : s.conversationId) ? i.turnList = cc11001100_hook("i.turnList", [...i.turnList, ...u.turnList], "assign") : i.turnList = cc11001100_hook("i.turnList", u.turnList, "assign"), J({
            type: cc11001100_hook("type", g.MORE_CONVERSATION, "object-key-init"),
            payload: {
              conversationId: cc11001100_hook("conversationId", i.conversationId, "object-key-init"),
              data: cc11001100_hook("data", i, "object-key-init")
            }
          }), Promise.resolve(i);
        }, [H, J, L]), "var-init"),
        el = cc11001100_hook("el", (0, _.useCallback)(async e => {
          let {
              botId: t,
              conversationId: n
            } = cc11001100_hook("", e, "var-init"),
            r = cc11001100_hook("r", n ? {
              code: cc11001100_hook("code", 0, "object-key-init"),
              data: cc11001100_hook("data", n, "object-key-init")
            } : await (0, o.Ki)(t), "var-init");
          if (r.code !== a.n8.SUCCESS) return Promise.reject(r);
          {
            let e = cc11001100_hook("e", function (e, t) {
              let n = cc11001100_hook("n", (0, i.yP)(), "var-init");
              if (n && n.user) return {
                botId: cc11001100_hook("botId", e, "object-key-init"),
                userId: cc11001100_hook("userId", n.user.id, "object-key-init"),
                turnList: cc11001100_hook("turnList", [], "object-key-init"),
                conversationId: cc11001100_hook("conversationId", t, "object-key-init")
              };
            }(t, r.data), "var-init");
            return J({
              type: cc11001100_hook("type", g.INSERT_NEW_CONVERSATION, "object-key-init"),
              payload: {
                conversationId: cc11001100_hook("conversationId", r.data, "object-key-init"),
                data: {
                  ...e,
                  dirty: !1
                }
              }
            }), K("chat_input_new_start_btn_click", {
              page: cc11001100_hook("page", a.fK.CHAT.key, "object-key-init"),
              area: cc11001100_hook("area", a.fK.CHAT.area.INPUT.key, "object-key-init"),
              element: cc11001100_hook("element", a.fK.CHAT.area.INPUT.element.NEW_START_BTN, "object-key-init"),
              bhv_type: cc11001100_hook("bhv_type", "click", "object-key-init"),
              is_new_start: cc11001100_hook("is_new_start", 1, "object-key-init"),
              conversation_id: cc11001100_hook("conversation_id", r.data, "object-key-init"),
              is_active_new_start: cc11001100_hook("is_active_new_start", 1, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", er, "object-key-init")
            }), Promise.resolve(r.data);
          }
        }, [K, J]), "var-init"),
        ed = cc11001100_hook("ed", (0, _.useCallback)((e, t) => {
          J({
            type: cc11001100_hook("type", g.DELETE_TURN_FROM_CONVERSATION, "object-key-init"),
            payload: {
              conversationId: cc11001100_hook("conversationId", e, "object-key-init"),
              turnId: cc11001100_hook("turnId", t, "object-key-init")
            }
          });
        }, [J]), "var-init"),
        eI = cc11001100_hook("eI", (0, _.useCallback)(e => {
          let t = cc11001100_hook("t", H[e], "var-init"),
            n = cc11001100_hook("n", 0, "var-init");
          if (t) {
            let {
              turnList: e
            } = cc11001100_hook("", t, "var-init");
            for (let t = cc11001100_hook("t", 0, "var-init"); t < e.length; ++t) e[t] && "delete" !== e[t].status && ++n;
          }
          return n;
        }, [H]), "var-init"),
        ev = cc11001100_hook("ev", (0, _.useCallback)(e => {
          N(t => {
            let n = cc11001100_hook("n", {
              ...t
            }, "var-init");
            return n[e] = cc11001100_hook("n[e]", [], "assign"), n;
          }), b(t => {
            let n = cc11001100_hook("n", {
              ...t
            }, "var-init");
            return n[e] = cc11001100_hook("n[e]", !1, "assign"), n;
          });
        }, [N, b]), "var-init"),
        eE = cc11001100_hook("eE", (0, _.useCallback)(() => {}, []), "var-init"),
        e_ = cc11001100_hook("e_", (0, _.useCallback)(() => {}, []), "var-init"),
        ep = cc11001100_hook("ep", (0, _.useCallback)(e => {
          let {
            answer: t,
            conversationId: r,
            state: a
          } = cc11001100_hook("", e, "var-init");
          null != t && J({
            type: cc11001100_hook("type", g.APPEND_ANSWER, "object-key-init"),
            payload: {
              answer: cc11001100_hook("answer", t, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
              state: cc11001100_hook("state", a, "object-key-init"),
              appConfig: cc11001100_hook("appConfig", n, "object-key-init")
            }
          });
        }, [n, J]), "var-init"),
        eh = cc11001100_hook("eh", (0, _.useCallback)(e => {
          J({
            type: cc11001100_hook("type", g.UPDATE_ANSWER, "object-key-init"),
            payload: {
              ...e,
              appConfig: n
            }
          });
        }, [n, J]), "var-init"),
        ef = cc11001100_hook("ef", (0, _.useCallback)((e, t) => {
          J({
            type: cc11001100_hook("type", g.CREATE_MEDIA_LOADING, "object-key-init"),
            payload: {
              conversationId: cc11001100_hook("conversationId", e, "object-key-init"),
              inputValue: cc11001100_hook("inputValue", t, "object-key-init")
            }
          });
        }, [J]), "var-init"),
        eT = cc11001100_hook("eT", (0, _.useCallback)(e => {
          J({
            type: cc11001100_hook("type", g.CLEAR_MEDIA_LOADING, "object-key-init"),
            payload: {
              conversationId: cc11001100_hook("conversationId", e, "object-key-init")
            }
          });
        }, [J]), "var-init"),
        eN = cc11001100_hook("eN", (0, _.useCallback)(e => {
          J({
            type: cc11001100_hook("type", g.DELETE_CONVERSATION, "object-key-init"),
            payload: {
              conversationId: cc11001100_hook("conversationId", e, "object-key-init")
            }
          });
        }, [J]), "var-init"),
        ey = cc11001100_hook("ey", (0, _.useCallback)((e, t, n) => {
          "message" === e && n.message.length > 1 || null == t || K("chat_sse_event", {
            conversation_id: cc11001100_hook("conversation_id", t.conversationId, "object-key-init"),
            turn_id: cc11001100_hook("turn_id", t.turnId, "object-key-init"),
            q_sentence_id: cc11001100_hook("q_sentence_id", t.question && "newSentenceId" !== t.question.sentenceId ? t.question.sentenceId : "", "object-key-init"),
            a_sentence_id: cc11001100_hook("a_sentence_id", t.answer && "newSentenceId" !== t.answer.sentenceId ? t.answer.sentenceId : "", "object-key-init"),
            content: cc11001100_hook("content", t.question.contents, "object-key-init"),
            sse_event: cc11001100_hook("sse_event", e, "object-key-init"),
            refer_page: cc11001100_hook("refer_page", er, "object-key-init")
          });
        }, [K, er]), "var-init"),
        eb = cc11001100_hook("eb", (0, _.useCallback)(async e => {
          let {
            conver: t,
            strategy: n
          } = cc11001100_hook("", e, "var-init");
          J({
            type: cc11001100_hook("type", g.INSERT_NEW_TURN, "object-key-init"),
            payload: {
              conver: cc11001100_hook("conver", t, "object-key-init"),
              strategy: cc11001100_hook("strategy", n, "object-key-init"),
              auth: cc11001100_hook("auth", u, "object-key-init")
            }
          }), N(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", [], "assign"), n;
          }), b(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", !1, "assign"), n;
          }), e.onComplete(), ey("begin", t, {});
        }, [u, J, ey]), "var-init"),
        eA = cc11001100_hook("eA", (0, _.useCallback)(e => {
          let {
            conver: t,
            strategy: n
          } = cc11001100_hook("", e, "var-init");
          J({
            type: cc11001100_hook("type", g.UPDATE_TURN_TO_OPEN, "object-key-init"),
            payload: {
              conver: cc11001100_hook("conver", t, "object-key-init"),
              strategy: cc11001100_hook("strategy", n, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", e.conversationId, "object-key-init")
            }
          });
          let {
            customAttrs: r,
            conversationId: a,
            turnId: o,
            answer: s,
            question: i
          } = cc11001100_hook("", t, "var-init");
          N(e => {
            let t = cc11001100_hook("t", {
              ...e
            }, "var-init");
            return t[a] = cc11001100_hook("t[a]", {
              conversationId: cc11001100_hook("conversationId", a, "object-key-init"),
              turnId: cc11001100_hook("turnId", o, "object-key-init"),
              qSentenceId: cc11001100_hook("qSentenceId", i.sentenceId, "object-key-init"),
              aSentenceId: cc11001100_hook("aSentenceId", s.sentenceId, "object-key-init"),
              contents: cc11001100_hook("contents", "", "object-key-init")
            }, "assign"), t;
          });
          let u = cc11001100_hook("u", H[a], "var-init");
          r && r.eventName && K(r.eventName, {
            conversation_id: cc11001100_hook("conversation_id", a, "object-key-init"),
            turn_id: cc11001100_hook("turn_id", o, "object-key-init"),
            q_sentence_id: cc11001100_hook("q_sentence_id", i.sentenceId, "object-key-init"),
            a_sentence_id: cc11001100_hook("a_sentence_id", s.sentenceId, "object-key-init"),
            content: cc11001100_hook("content", i.contents, "object-key-init"),
            is_new_start: cc11001100_hook("is_new_start", u.turnList.length < 1 ? 1 : 0, "object-key-init"),
            ...r.attrs
          });
        }, [K, H, J]), "var-init"),
        eS = cc11001100_hook("eS", (0, _.useCallback)(e => {
          var t;
          let {
              botId: n,
              conver: r
            } = cc11001100_hook("", e, "var-init"),
            {
              webSearchDetail: a
            } = cc11001100_hook("", r, "var-init"),
            o = cc11001100_hook("o", (null === (t = cc11001100_hook("t", r.answer, "assign")) || void 0 === t ? void 0 : t.extraInfo) || {}, "var-init");
          ep({
            answer: {
              ...r.answer,
              extraInfo: {
                ...o,
                webSearchDetail: a
              }
            },
            conversationId: cc11001100_hook("conversationId", r.conversationId, "object-key-init"),
            state: cc11001100_hook("state", "webSearchDetail", "object-key-init")
          }), S(e => {
            let t = cc11001100_hook("t", {
              ...e
            }, "var-init");
            return t[r.conversationId] = cc11001100_hook("t[r.conversationId]", {
              ...t[r.conversationId],
              visibility: !1
            }, "assign"), t;
          });
        }, [S, ep]), "var-init"),
        eC = cc11001100_hook("eC", (0, _.useCallback)(e => {
          var t;
          let {
              botId: n,
              conver: r
            } = cc11001100_hook("", e, "var-init"),
            {
              ppt: a,
              answer: o
            } = cc11001100_hook("", r, "var-init"),
            s = cc11001100_hook("s", (null === (t = cc11001100_hook("t", r.answer, "assign")) || void 0 === t ? void 0 : t.extraInfo) || {}, "var-init");
          ep({
            answer: {
              ...o,
              extraInfo: {
                ...s,
                pptInfo: null == a ? void 0 : a.content
              }
            },
            conversationId: cc11001100_hook("conversationId", r.conversationId, "object-key-init"),
            state: cc11001100_hook("state", "ppt", "object-key-init")
          });
        }, [ep]), "var-init"),
        eL = cc11001100_hook("eL", (0, _.useCallback)(e => {
          let {
            botId: t,
            conver: n
          } = cc11001100_hook("", e, "var-init");
          ep({
            answer: cc11001100_hook("answer", n.answer, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n.conversationId, "object-key-init"),
            state: cc11001100_hook("state", "message", "object-key-init")
          });
        }, [ep]), "var-init"),
        eP = cc11001100_hook("eP", (0, _.useCallback)(e => {
          let {
            botId: t,
            conver: n
          } = cc11001100_hook("", e, "var-init");
          ep({
            answer: cc11001100_hook("answer", n.answer, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n.conversationId, "object-key-init"),
            state: cc11001100_hook("state", "message", "object-key-init")
          }), S(e => {
            let t = cc11001100_hook("t", {
              ...e
            }, "var-init");
            return t[n.conversationId] = cc11001100_hook("t[n.conversationId]", {
              ...t[n.conversationId],
              visibility: !1
            }, "assign"), t;
          });
        }, [ep, S]), "var-init"),
        eg = cc11001100_hook("eg", (0, _.useCallback)(e => {
          let {
            botId: t,
            conver: n
          } = cc11001100_hook("", e, "var-init");
          ep({
            conversationId: cc11001100_hook("conversationId", n.conversationId, "object-key-init"),
            answer: cc11001100_hook("answer", n.answer, "object-key-init"),
            state: cc11001100_hook("state", "message", "object-key-init")
          }), S(e => {
            let t = cc11001100_hook("t", {
              ...e
            }, "var-init");
            return t[n.conversationId] = cc11001100_hook("t[n.conversationId]", {
              ...t[n.conversationId],
              visibility: !1
            }, "assign"), t;
          }), s.Z && s.Z.stopSse({
            conversationId: cc11001100_hook("conversationId", n.conversationId, "object-key-init"),
            uuid: cc11001100_hook("uuid", n.conversationId, "object-key-init")
          });
        }, [ep, S]), "var-init"),
        em = cc11001100_hook("em", (0, _.useCallback)(e => {
          let {
            botId: t,
            conver: n
          } = cc11001100_hook("", e, "var-init");
          ep({
            answer: cc11001100_hook("answer", n.answer, "object-key-init"),
            state: cc11001100_hook("state", "generateEnd", "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n.conversationId, "object-key-init")
          });
        }, [ep]), "var-init"),
        eD = cc11001100_hook("eD", (0, _.useCallback)(e => {
          let {
            conver: t,
            timestamp: n,
            state: r
          } = cc11001100_hook("", e, "var-init");
          ep({
            answer: cc11001100_hook("answer", t.answer, "object-key-init"),
            state: cc11001100_hook("state", "close", "object-key-init"),
            conversationId: cc11001100_hook("conversationId", t.conversationId, "object-key-init")
          }), b(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", !0, "assign"), n;
          }), S(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", !1, "assign"), n[t.conversationId] = cc11001100_hook("n[t.conversationId]", {
              ...n[t.conversationId],
              visibility: !1
            }, "assign"), n;
          });
          try {
            let e = cc11001100_hook("e", n.message[0] - n.build, "var-init"),
              a = cc11001100_hook("a", n.close - n.build, "var-init");
            K("chat_sse_time_consumption", {
              conversation_id: cc11001100_hook("conversation_id", t.conversationId, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", t.turnId, "object-key-init"),
              a_sentence_id: cc11001100_hook("a_sentence_id", t.answer.sentenceId, "object-key-init"),
              q_sentence_id: cc11001100_hook("q_sentence_id", t.question.sentenceId, "object-key-init"),
              ft_resp_duration: cc11001100_hook("ft_resp_duration", e, "object-key-init"),
              comp_resp_duration: cc11001100_hook("comp_resp_duration", a, "object-key-init"),
              sse_status: cc11001100_hook("sse_status", r, "object-key-init"),
              content: cc11001100_hook("content", t.question.contents, "object-key-init"),
              answer_length: cc11001100_hook("answer_length", t.answer.contents.length, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", er, "object-key-init"),
              images_count: cc11001100_hook("images_count", (0, i.Co)(t.answer.contents), "object-key-init")
            });
          } catch (e) {}
        }, [ep, K, S]), "var-init"),
        eR = cc11001100_hook("eR", (0, _.useCallback)(e => {
          let {
            conver: t,
            strategy: n
          } = cc11001100_hook("", e, "var-init");
          J({
            type: cc11001100_hook("type", g.UPDATE_TURN_TO_TIMEOUT, "object-key-init"),
            payload: cc11001100_hook("payload", e, "object-key-init")
          }), (0, i.E1)(t.conversationId, {
            turnId: cc11001100_hook("turnId", t.turnId, "object-key-init"),
            status: cc11001100_hook("status", "timeout", "object-key-init"),
            sentenceList: cc11001100_hook("sentenceList", [t.question, t.answer], "object-key-init")
          });
        }, [J]), "var-init"),
        eO = cc11001100_hook("eO", (0, _.useCallback)(e => {
          let {
            conver: t,
            timestamp: n,
            state: r,
            onComplete: a
          } = cc11001100_hook("", e, "var-init");
          if (-999 === r) eR(e);else {
            let e = cc11001100_hook("e", m["".concat(r)] || "error", "var-init");
            ep({
              answer: cc11001100_hook("answer", t.answer, "object-key-init"),
              state: cc11001100_hook("state", e, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", t.conversationId, "object-key-init")
            });
          }
          b(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", !0, "assign"), n;
          }), a && a(), S(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", {
              ...n[t.conversationId],
              visibility: !1
            }, "assign"), n;
          });
          try {
            var o, s, u, c;
            let e = cc11001100_hook("e", n.message[0] - n.build, "var-init"),
              a = cc11001100_hook("a", n.error - n.build, "var-init");
            K("chat_sse_time_consumption", {
              conversation_id: cc11001100_hook("conversation_id", t.conversationId, "object-key-init"),
              turn_id: cc11001100_hook("turn_id", t.turnId, "object-key-init"),
              a_sentence_id: cc11001100_hook("a_sentence_id", null === (o = cc11001100_hook("o", t.answer, "assign")) || void 0 === o ? void 0 : o.sentenceId, "object-key-init"),
              q_sentence_id: cc11001100_hook("q_sentence_id", null === (s = cc11001100_hook("s", t.question, "assign")) || void 0 === s ? void 0 : s.sentenceId, "object-key-init"),
              ft_resp_duration: cc11001100_hook("ft_resp_duration", e, "object-key-init"),
              comp_resp_duration: cc11001100_hook("comp_resp_duration", a, "object-key-init"),
              sse_status: cc11001100_hook("sse_status", r, "object-key-init"),
              content: cc11001100_hook("content", null === (u = cc11001100_hook("u", t.question, "assign")) || void 0 === u ? void 0 : u.contents, "object-key-init"),
              answer_length: cc11001100_hook("answer_length", null === (c = cc11001100_hook("c", t.answer, "assign")) || void 0 === c ? void 0 : c.contents.length, "object-key-init"),
              refer_page: cc11001100_hook("refer_page", er, "object-key-init"),
              images_count: cc11001100_hook("images_count", (0, i.Co)(t.answer.contents), "object-key-init")
            });
          } catch (e) {}
        }, [ep, S, K, eR]), "var-init"),
        ew = cc11001100_hook("ew", (0, _.useCallback)(e => {
          let {
            suggested: t,
            conversationId: n,
            turnId: r,
            question: a,
            answer: o,
            customAttrs: s
          } = cc11001100_hook("", e.conver, "var-init");
          if (t) try {
            N(e => {
              let i = cc11001100_hook("i", {
                ...e
              }, "var-init");
              return i[n] = cc11001100_hook("i[n]", {
                conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
                turnId: cc11001100_hook("turnId", r, "object-key-init"),
                qSentenceId: cc11001100_hook("qSentenceId", a.sentenceId, "object-key-init"),
                aSentenceId: cc11001100_hook("aSentenceId", o.sentenceId, "object-key-init"),
                customAttrs: cc11001100_hook("customAttrs", s, "object-key-init"),
                contents: cc11001100_hook("contents", t, "object-key-init")
              }, "assign"), i;
            }), S(e => {
              let t = cc11001100_hook("t", {
                ...e
              }, "var-init");
              return t[n] = cc11001100_hook("t[n]", {
                ...t[n],
                visibility: !1
              }, "assign"), t;
            });
          } catch (e) {}
        }, [S]), "var-init"),
        ek = cc11001100_hook("ek", (0, _.useCallback)(e => {
          let {
              conver: t,
              botId: n
            } = cc11001100_hook("", e, "var-init"),
            {
              webSearch: r
            } = cc11001100_hook("", t, "var-init");
          ep({
            answer: cc11001100_hook("answer", t.answer, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", t.conversationId, "object-key-init"),
            state: cc11001100_hook("state", "webSearch", "object-key-init")
          }), S(e => {
            let n = cc11001100_hook("n", {
              ...e
            }, "var-init");
            return n[t.conversationId] = cc11001100_hook("n[t.conversationId]", {
              searchMsg: cc11001100_hook("searchMsg", r, "object-key-init"),
              visibility: cc11001100_hook("visibility", !n[t.conversationId] || !!n[t.conversationId].visibility, "object-key-init")
            }, "assign"), n;
          });
        }, [S, ep]), "var-init"),
        eU = cc11001100_hook("eU", (0, _.useCallback)(e => {
          let {
            event: t,
            botId: n,
            strategy: r,
            conversationId: a,
            uuid: o,
            conver: s,
            timestamp: i
          } = cc11001100_hook("", e, "var-init");
          try {
            ey(t.event, s, i), t.data ? JSON.parse(t.data) : t.data;
          } catch (e) {}
        }, [ey]), "var-init");
      (0, _.useEffect)(() => {
        let e = cc11001100_hook("e", [], "var-init");
        return e.push(s.Z.bind("beforeOpen", eb)), e.push(s.Z.bind("open", eA)), e.push(s.Z.bind("loading", eL)), e.push(s.Z.bind("message", eP)), e.push(s.Z.bind("generateEnd", em)), e.push(s.Z.bind("banned", eg)), e.push(s.Z.bind("end", eD)), e.push(s.Z.bind("error", eO)), e.push(s.Z.bind("suggestedQuestions", ew)), e.push(s.Z.bind("webSearch", ek)), e.push(s.Z.bind("trunk", eU)), e.push(s.Z.bind("webSearchDetail", eS)), e.push(s.Z.bind("ppt", eC)), () => {
          e.forEach(e => {
            e();
          });
        };
      }, [eb, eg, eA, em, eU, ek, eL, eP, eD, eO, eS, ew]), (0, _.useEffect)(() => {
        let e = cc11001100_hook("e", async () => {
          if (!W && !M || W === M || l && !isNaN(Number(l)) && l !== I.current) {
            var e;
            let t = cc11001100_hook("t", l && !isNaN(Number(l)) ? l : (null == n ? void 0 : null === (e = cc11001100_hook("e", n.bot, "assign")) || void 0 === e ? void 0 : e.id) || "70", "var-init");
            try {
              let e = cc11001100_hook("e", await (0, o.Ki)(t), "var-init");
              0 === e.code && X(e.data);
            } catch (e) {}
          }
        }, "var-init");
        e();
      }, [W, l]), (0, _.useEffect)(() => {
        I.current = cc11001100_hook("I.current", l, "assign");
      }, [l]);
      let eY = cc11001100_hook("eY", (0, _.useCallback)((e, t, n, r) => {
        O(!0), Y({
          conversationId: cc11001100_hook("conversationId", e, "object-key-init"),
          turnId: cc11001100_hook("turnId", t, "object-key-init"),
          isLastTurn: cc11001100_hook("isLastTurn", n, "object-key-init"),
          trackParams: cc11001100_hook("trackParams", r, "object-key-init")
        });
      }, [Y, O]), "var-init");
      return (0, r.jsx)(h.Provider, {
        value: {
          suggestedQuestion: cc11001100_hook("suggestedQuestion", T, "object-key-init"),
          conversations: cc11001100_hook("conversations", H, "object-key-init"),
          suggestedQuestionShow: cc11001100_hook("suggestedQuestionShow", y, "object-key-init"),
          webSearch: cc11001100_hook("webSearch", A, "object-key-init"),
          noMore: cc11001100_hook("noMore", C, "object-key-init"),
          initOneConversation: cc11001100_hook("initOneConversation", eu, "object-key-init"),
          createNewConv: cc11001100_hook("createNewConv", el, "object-key-init"),
          createTurn: cc11001100_hook("createTurn", eE, "object-key-init"),
          createSection: cc11001100_hook("createSection", e_, "object-key-init"),
          getMoreHistoryConversation: cc11001100_hook("getMoreHistoryConversation", ec, "object-key-init"),
          clearBotConv: cc11001100_hook("clearBotConv", eN, "object-key-init"),
          setSentenceFeedback: cc11001100_hook("setSentenceFeedback", ei, "object-key-init"),
          deleteTurnFromConv: cc11001100_hook("deleteTurnFromConv", ed, "object-key-init"),
          confirmDeleteTurn: cc11001100_hook("confirmDeleteTurn", eY, "object-key-init"),
          deleteTurnModalShow: cc11001100_hook("deleteTurnModalShow", R, "object-key-init"),
          setDeleteTurnModalShow: cc11001100_hook("setDeleteTurnModalShow", O, "object-key-init"),
          deleteTurnInfo: cc11001100_hook("deleteTurnInfo", w, "object-key-init"),
          setDeleteTurnInfo: cc11001100_hook("setDeleteTurnInfo", Y, "object-key-init"),
          deleteSuggestByConversationId: cc11001100_hook("deleteSuggestByConversationId", ev, "object-key-init"),
          currentConverTurns: cc11001100_hook("currentConverTurns", eI, "object-key-init"),
          updateAnswer: cc11001100_hook("updateAnswer", eh, "object-key-init"),
          autoIncAnsPrintStep: cc11001100_hook("autoIncAnsPrintStep", es, "object-key-init"),
          ansPrintStep: cc11001100_hook("ansPrintStep", Q, "object-key-init"),
          currentConversationId: cc11001100_hook("currentConversationId", W, "object-key-init"),
          nextConversationId: cc11001100_hook("nextConversationId", M, "object-key-init"),
          changeChatUrl: cc11001100_hook("changeChatUrl", ea, "object-key-init"),
          changeConvLasTurnAnsIdx: cc11001100_hook("changeConvLasTurnAnsIdx", eo, "object-key-init"),
          lasTurnAnsIdx: cc11001100_hook("lasTurnAnsIdx", B, "object-key-init"),
          deepSeekStopText: cc11001100_hook("deepSeekStopText", V, "object-key-init"),
          curChatBotId: cc11001100_hook("curChatBotId", l, "object-key-init"),
          setCurrentBotId: cc11001100_hook("setCurrentBotId", d, "object-key-init"),
          createMediaLoadingAction: cc11001100_hook("createMediaLoadingAction", ef, "object-key-init"),
          clearMediaLoadingAction: cc11001100_hook("clearMediaLoadingAction", eT, "object-key-init"),
          sendLock: cc11001100_hook("sendLock", ee, "object-key-init"),
          sendLockFalse: cc11001100_hook("sendLockFalse", en, "object-key-init"),
          sendLockTrue: cc11001100_hook("sendLockTrue", et, "object-key-init"),
          inputValue: cc11001100_hook("inputValue", z, "object-key-init"),
          setInputValue: cc11001100_hook("setInputValue", j, "object-key-init"),
          newConverInputValue: cc11001100_hook("newConverInputValue", G, "object-key-init"),
          setNewConverInputValue: cc11001100_hook("setNewConverInputValue", F, "object-key-init")
        },
        children: cc11001100_hook("children", t, "object-key-init")
      });
    }
    function W() {
      return (0, _.useContext)(h);
    }
  },
  58644: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      GlobalExecuteStateProvider: function () {
        return d;
      },
      useGlobalExecuteState: function () {
        return I;
      }
    });
    var r = cc11001100_hook("r", n(57437), "var-init"),
      a = cc11001100_hook("a", n(1068), "var-init"),
      o = cc11001100_hook("o", n(89142), "var-init"),
      s = cc11001100_hook("s", n(60444), "var-init"),
      i = cc11001100_hook("i", n(2265), "var-init"),
      u = cc11001100_hook("u", n(88915), "var-init"),
      c = cc11001100_hook("c", n.n(u), "var-init");
    let l = cc11001100_hook("l", (0, i.createContext)({
      userLoginModalShow: cc11001100_hook("userLoginModalShow", !1, "object-key-init"),
      userLoginModalShowRef: {
        current: cc11001100_hook("current", !1, "object-key-init")
      },
      setUserLoginModalShow: cc11001100_hook("setUserLoginModalShow", () => {}, "object-key-init"),
      phoneBindModalShow: cc11001100_hook("phoneBindModalShow", !1, "object-key-init"),
      setPhoneBindModalShow: cc11001100_hook("setPhoneBindModalShow", () => {}, "object-key-init"),
      auth: cc11001100_hook("auth", null, "object-key-init"),
      hasPhoneNumber: cc11001100_hook("hasPhoneNumber", !1, "object-key-init"),
      needLogin: cc11001100_hook("needLogin", !1, "object-key-init"),
      needRealLogin: cc11001100_hook("needRealLogin", !1, "object-key-init"),
      setAuth: cc11001100_hook("setAuth", () => {}, "object-key-init"),
      checkRealLogin: cc11001100_hook("checkRealLogin", () => !1, "object-key-init"),
      addLoginSuccessCb: cc11001100_hook("addLoginSuccessCb", () => {}, "object-key-init"),
      addLoginFailCb: cc11001100_hook("addLoginFailCb", () => {}, "object-key-init"),
      clearLoginSuccessCbs: cc11001100_hook("clearLoginSuccessCbs", () => {}, "object-key-init"),
      clearLoginFailCbs: cc11001100_hook("clearLoginFailCbs", () => {}, "object-key-init"),
      execLoginSuccessCbs: cc11001100_hook("execLoginSuccessCbs", () => {}, "object-key-init"),
      execLoginFailCbs: cc11001100_hook("execLoginFailCbs", () => {}, "object-key-init")
    }), "var-init");
    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          children: t
        } = cc11001100_hook("", e, "var-init"),
        [n, u] = cc11001100_hook("", (0, i.useState)((0, s.yP)()), "var-init"),
        d = cc11001100_hook("d", (0, i.useMemo)(() => n && n.user && n.user.phone && "" !== n.user.phone, [n]), "var-init");
      (0, i.useEffect)(() => {}, [n, d]);
      let [I, v, E] = cc11001100_hook("", c()(!1), "var-init"),
        [_, p] = cc11001100_hook("", (0, i.useState)(!1), "var-init"),
        h = cc11001100_hook("h", (0, i.useRef)([]), "var-init"),
        f = cc11001100_hook("f", (0, i.useRef)([]), "var-init"),
        T = cc11001100_hook("T", (0, i.useCallback)(e => {
          h.current.push(e);
        }, []), "var-init"),
        N = cc11001100_hook("N", (0, i.useCallback)(e => {
          f.current.push(e);
        }, []), "var-init"),
        y = cc11001100_hook("y", (0, i.useCallback)(() => {
          h.current = cc11001100_hook("h.current", [], "assign");
        }, []), "var-init"),
        b = cc11001100_hook("b", (0, i.useCallback)(() => {
          f.current = cc11001100_hook("f.current", [], "assign");
        }, []), "var-init"),
        A = cc11001100_hook("A", (0, i.useCallback)(() => {
          let e = cc11001100_hook("e", h.current, "var-init");
          y(), e.forEach(e => e());
        }, []), "var-init"),
        S = cc11001100_hook("S", (0, i.useCallback)(() => {
          let e = cc11001100_hook("e", f.current, "var-init");
          b(), e.forEach(e => e());
        }, []), "var-init"),
        C = cc11001100_hook("C", (0, i.useMemo)(() => !n || !n.user || n.user.isTourist, [n]), "var-init"),
        L = cc11001100_hook("L", (0, i.useMemo)(() => !n || !n.user || !n.token, [n]), "var-init"),
        P = cc11001100_hook("P", (0, i.useCallback)(() => !C || (v(!0), !1), [C]), "var-init");
      return (0, i.useEffect)(() => {
        let e = cc11001100_hook("e", async () => {
          try {
            let e = cc11001100_hook("e", (0, s.yP)(), "var-init");
            if (e && e.token) {
              let t = cc11001100_hook("t", await (0, o.QB)(), "var-init");
              if (t.code === a.n8.SUCCESS && t.data.token && t.data.token !== e.token) {
                let n = cc11001100_hook("n", {
                  ...e,
                  token: t.data.token
                }, "var-init");
                (0, s.d8)("login", encodeURIComponent(JSON.stringify(n)), 90), null == u || u(n);
              }
            }
          } catch (e) {}
        }, "var-init");
        window.top === window.self && e();
      }, []), (0, r.jsx)(l.Provider, {
        value: {
          userLoginModalShow: cc11001100_hook("userLoginModalShow", I, "object-key-init"),
          userLoginModalShowRef: cc11001100_hook("userLoginModalShowRef", E, "object-key-init"),
          setUserLoginModalShow: cc11001100_hook("setUserLoginModalShow", v, "object-key-init"),
          phoneBindModalShow: cc11001100_hook("phoneBindModalShow", _, "object-key-init"),
          setPhoneBindModalShow: cc11001100_hook("setPhoneBindModalShow", p, "object-key-init"),
          auth: cc11001100_hook("auth", n, "object-key-init"),
          hasPhoneNumber: cc11001100_hook("hasPhoneNumber", d, "object-key-init"),
          needRealLogin: cc11001100_hook("needRealLogin", C, "object-key-init"),
          needLogin: cc11001100_hook("needLogin", L, "object-key-init"),
          setAuth: cc11001100_hook("setAuth", u, "object-key-init"),
          checkRealLogin: cc11001100_hook("checkRealLogin", P, "object-key-init"),
          addLoginSuccessCb: cc11001100_hook("addLoginSuccessCb", T, "object-key-init"),
          addLoginFailCb: cc11001100_hook("addLoginFailCb", N, "object-key-init"),
          clearLoginSuccessCbs: cc11001100_hook("clearLoginSuccessCbs", y, "object-key-init"),
          clearLoginFailCbs: cc11001100_hook("clearLoginFailCbs", b, "object-key-init"),
          execLoginSuccessCbs: cc11001100_hook("execLoginSuccessCbs", A, "object-key-init"),
          execLoginFailCbs: cc11001100_hook("execLoginFailCbs", S, "object-key-init")
        },
        children: cc11001100_hook("children", t, "object-key-init")
      });
    }
    function I() {
      return (0, i.useContext)(l);
    }
  },
  19606: function (e, t, n) {
    "use strict";

    n.d(t, {
      $Q: function () {
        return N;
      },
      A7: function () {
        return c;
      },
      Bn: function () {
        return I;
      },
      Ki: function () {
        return l;
      },
      N: function () {
        return v;
      },
      Ni: function () {
        return i;
      },
      Od: function () {
        return p;
      },
      W: function () {
        return s;
      },
      Xh: function () {
        return f;
      },
      Y3: function () {
        return u;
      },
      Zi: function () {
        return h;
      },
      dU: function () {
        return d;
      },
      jS: function () {
        return E;
      },
      n8: function () {
        return T;
      },
      oY: function () {
        return _;
      }
    });
    var r = cc11001100_hook("r", n(1068), "var-init"),
      a = cc11001100_hook("a", n(60444), "var-init"),
      o = cc11001100_hook("o", n(96), "var-init");
    async function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          tag: t = 0,
          lastIdx: n = 0,
          token: s = ""
        } = cc11001100_hook("", e, "var-init"),
        i = cc11001100_hook("i", (0, a.oo)(), "var-init"),
        u = cc11001100_hook("u", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/bot/list?tag=").concat(t, "&botIndex=").concat(n), "object-key-init"),
          method: cc11001100_hook("method", "GET", "object-key-init"),
          headers: {
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", i, "object-key-init"),
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + s, "object-key-init")
          }
        }, "var-init");
      return (0, o.ZP)(u);
    }
    (0, r.A6)(r.tW);
    let i = cc11001100_hook("i", {
      url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/names"), "object-key-init"),
      method: cc11001100_hook("method", "GET", "object-key-init"),
      heraders: {}
    }, "var-init");
    function u(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          url: t,
          userId: n,
          botId: r,
          token: s,
          startTime: i
        } = cc11001100_hook("", e, "var-init"),
        u = cc11001100_hook("u", (0, a.oo)(), "var-init");
      return e.url = cc11001100_hook("e.url", "".concat(t, "?startTime=").concat(i, "&botId=").concat(r), "assign"), e.headers = cc11001100_hook("e.headers", {
        "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", u, "object-key-init"),
        "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer ".concat(s), "object-key-init")
      }, "assign"), (0, o.ZP)(e);
    }
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          botId: t,
          conversationId: n,
          turnCount: s = 20,
          startTime: i = ""
        } = cc11001100_hook("", e, "var-init"),
        u = cc11001100_hook("u", (0, a.oo)(), "var-init"),
        c = cc11001100_hook("c", (0, a.yP)(), "var-init");
      if (!c || !u) return Promise.reject();
      {
        let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/xb/users/").concat(c.user.id, "/bots/").concat(t, "/conversation/").concat(n), "object-key-init"),
          method: cc11001100_hook("method", "GET", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + c.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", u, "object-key-init")
          },
          params: {
            turnCount: cc11001100_hook("turnCount", s, "object-key-init"),
            startTime: cc11001100_hook("startTime", i, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(e);
      }
    }
    async function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", (0, a.oo)(), "var-init"),
        n = cc11001100_hook("n", (0, a.yP)(), "var-init");
      if (!n || !t) return Promise.reject();
      {
        let a = cc11001100_hook("a", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/users/").concat(n.user.id, "/bots/").concat(e, "/conversation"), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + n.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", t, "object-key-init")
          },
          data: {
            visitorId: cc11001100_hook("visitorId", t, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(a);
      }
    }
    async function d(e, t, n, s, i, u) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("u", u, "function-parameter");
      let c = cc11001100_hook("c", (0, a.oo)(), "var-init"),
        l = cc11001100_hook("l", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/users/").concat(e, "/bots/").concat(t, "/turns/").concat(i, "?actions=").concat(s), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + u, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", c, "object-key-init")
          },
          data: {
            messageVo: cc11001100_hook("messageVo", n, "object-key-init")
          }
        }, "var-init");
      return (0, o.ZP)(l);
    }
    async function I(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let n = cc11001100_hook("n", (0, a.oo)(), "var-init"),
        s = cc11001100_hook("s", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/users/").concat(e, "/bots"), "object-key-init"),
          method: cc11001100_hook("method", "DELETE", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + t, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", n, "object-key-init")
          }
        }, "var-init");
      return (0, o.ZP)(s);
    }
    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", (0, a.oo)(), "var-init"),
        n = cc11001100_hook("n", (0, a.yP)(), "var-init");
      if (!n || !t) return Promise.reject();
      {
        let a = cc11001100_hook("a", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/users/").concat(n.user.id, "/bots/").concat(e), "object-key-init"),
          method: cc11001100_hook("method", "DELETE", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + n.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", t, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(a);
      }
    }
    function E(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let n = cc11001100_hook("n", (0, a.oo)(), "var-init"),
        s = cc11001100_hook("s", (0, a.yP)(), "var-init");
      if (!s || !n) return Promise.reject();
      {
        let a = cc11001100_hook("a", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/conversation?conversationId=").concat(t, "&botId=").concat(e), "object-key-init"),
          method: cc11001100_hook("method", "DELETE", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + s.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", n, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(a);
      }
    }
    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          conversationId: t,
          turnId: n
        } = cc11001100_hook("", e, "var-init"),
        s = cc11001100_hook("s", (0, a.oo)(), "var-init"),
        i = cc11001100_hook("i", (0, a.yP)(), "var-init");
      if (!i || !s) return Promise.reject();
      {
        let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/").concat(t, "/turns/").concat(n), "object-key-init"),
          method: cc11001100_hook("method", "DELETE", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + i.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", s, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(e);
      }
    }
    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          botId: t,
          turnId: n,
          reportType: s,
          reportInfo: i
        } = cc11001100_hook("", e, "var-init"),
        u = cc11001100_hook("u", (0, a.oo)(), "var-init"),
        c = cc11001100_hook("c", (0, a.yP)(), "var-init");
      if (!c || !u) return Promise.reject();
      {
        let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/users/").concat(c.user.id, "/bots/").concat(t, "/turns/").concat(n, "/report"), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + c.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", u, "object-key-init")
          },
          data: {
            userId: cc11001100_hook("userId", c.user.id, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            turnId: cc11001100_hook("turnId", n, "object-key-init"),
            reportType: cc11001100_hook("reportType", -1 == s ? [] : [s], "object-key-init"),
            reportInfo: cc11001100_hook("reportInfo", i, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(e);
      }
    }
    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          conversationId: t,
          sentenceIdList: n
        } = cc11001100_hook("", e, "var-init"),
        s = cc11001100_hook("s", (0, a.oo)(), "var-init"),
        i = cc11001100_hook("i", (0, a.yP)(), "var-init");
      if (!i || !s) return Promise.reject();
      {
        let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/share/chat"), "object-key-init"),
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + i.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", s, "object-key-init")
          },
          data: {
            conversationId: cc11001100_hook("conversationId", t, "object-key-init"),
            sentenceIds: cc11001100_hook("sentenceIds", n, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(e);
      }
    }
    function f() {
      let e = cc11001100_hook("e", (0, a.oo)(), "var-init"),
        t = cc11001100_hook("t", (0, a.yP)(), "var-init");
      if (!t || !e) return Promise.reject();
      {
        let n = cc11001100_hook("n", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/recommend/icebreaking"), "object-key-init"),
          method: cc11001100_hook("method", "GET", "object-key-init"),
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + t.token, "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", e, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(n);
      }
    }
    function T(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          keys: t = []
        } = cc11001100_hook("", e, "var-init"),
        n = cc11001100_hook("n", (0, a.oo)(), "var-init"),
        s = cc11001100_hook("s", (0, a.yP)(), "var-init"),
        i = cc11001100_hook("i", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/operate/prompt"), "object-key-init"),
          data: {
            keys: cc11001100_hook("keys", t, "object-key-init")
          },
          method: cc11001100_hook("method", "POST", "object-key-init"),
          headers: {
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", n, "object-key-init"),
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + ((null == s ? void 0 : s.token) || ""), "object-key-init")
          }
        }, "var-init");
      return (0, o.ZP)(i);
    }
    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
          conversationId: t,
          name: n,
          botId: s
        } = cc11001100_hook("", e, "var-init"),
        i = cc11001100_hook("i", (0, a.oo)(), "var-init"),
        u = cc11001100_hook("u", (0, a.yP)(), "var-init");
      if (!u || !i) return Promise.reject();
      {
        let e = cc11001100_hook("e", {
          url: cc11001100_hook("url", "".concat((0, r.A6)(r.tW), "/conversations/conversation/name"), "object-key-init"),
          method: cc11001100_hook("method", "PUT", "object-key-init"),
          data: {
            conversationId: cc11001100_hook("conversationId", t, "object-key-init"),
            name: cc11001100_hook("name", n, "object-key-init"),
            botId: cc11001100_hook("botId", s, "object-key-init")
          },
          headers: {
            "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", "Bearer " + (null == u ? void 0 : u.token), "object-key-init"),
            "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", i, "object-key-init")
          }
        }, "var-init");
        return (0, o.ZP)(e);
      }
    }
  },
  67991: function (e, t, n) {
    "use strict";

    n.d(t, {
      F: function () {
        return i;
      }
    });
    var r = cc11001100_hook("r", n(1068), "var-init"),
      a = cc11001100_hook("a", n(60444), "var-init"),
      o = cc11001100_hook("o", n(33018), "var-init");
    let s = cc11001100_hook("s", null, "var-init");
    function i() {
      return s || (s = cc11001100_hook("s", new o.SseController({
        auth: cc11001100_hook("auth", (0, a.yP)(), "object-key-init"),
        visitorId: cc11001100_hook("visitorId", (0, a.oo)(), "object-key-init"),
        baseUrl: cc11001100_hook("baseUrl", (0, r.A6)(r.tW), "object-key-init")
      }), "assign")), s;
    }
    s = cc11001100_hook("s", new o.SseController({
      auth: cc11001100_hook("auth", (0, a.yP)(), "object-key-init"),
      visitorId: cc11001100_hook("visitorId", (0, a.oo)(), "object-key-init"),
      baseUrl: cc11001100_hook("baseUrl", (0, r.A6)(r.tW), "object-key-init"),
      commonHeaders: {
        appName: cc11001100_hook("appName", "wenxiaobai", "object-key-init"),
        appVersion: cc11001100_hook("appVersion", "3.1.0", "object-key-init")
      }
    }), "assign"), t.Z = cc11001100_hook("t.Z", s, "assign");
  },
  84516: function (e) {
    e.exports = cc11001100_hook("e.exports", {
      popover: cc11001100_hook("popover", "popover_popover__isANO", "object-key-init"),
      "ant-popover-arrow": cc11001100_hook("ant-popover-arrow", "popover_ant-popover-arrow__blv_a", "object-key-init"),
      "ant-popover": cc11001100_hook("ant-popover", "popover_ant-popover__Vu0qs", "object-key-init"),
      "ant-popover-inner": cc11001100_hook("ant-popover-inner", "popover_ant-popover-inner__UXpwO", "object-key-init")
    }, "assign");
  }
}]);