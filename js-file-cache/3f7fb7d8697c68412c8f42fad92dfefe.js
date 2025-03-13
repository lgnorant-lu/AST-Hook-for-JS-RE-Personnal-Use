try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    t = cc11001100_hook("t", new e.Error().stack, "var-init");
  t && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[t] = cc11001100_hook("e._sentryDebugIds[t]", "3125dc2d-eeb4-4bff-a796-6f8ac4fc5355", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-3125dc2d-eeb4-4bff-a796-6f8ac4fc5355", "assign"));
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[3018], {
  39858: function (e, t, s) {
    async function n(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let s;
      let n = cc11001100_hook("n", e.getReader(), "var-init");
      for (; !(s = cc11001100_hook("s", await n.read(), "assign")).done;) t(s.value);
    }
    function r() {
      return {
        data: cc11001100_hook("data", "", "object-key-init"),
        event: cc11001100_hook("event", "", "object-key-init"),
        id: cc11001100_hook("id", "", "object-key-init"),
        retry: cc11001100_hook("retry", void 0, "object-key-init")
      };
    }
    s.r(t), s.d(t, {
      EventStreamContentType: function () {
        return i;
      },
      fetchEventSource: function () {
        return c;
      }
    });
    var a = function (e, t) {
      var s = cc11001100_hook("s", {}, "var-init");
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (s[n] = cc11001100_hook("s[n]", e[n], "assign"));
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init"); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = cc11001100_hook("s[n[r]]", e[n[r]], "assign"));
      return s;
    };
    let i = cc11001100_hook("i", "text/event-stream", "var-init"),
      o = cc11001100_hook("o", "last-event-id", "var-init");
    function c(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var {
          signal: s,
          headers: c,
          onopen: h,
          onmessage: d,
          onclose: u,
          onerror: f,
          openWhenHidden: v,
          fetch: g
        } = cc11001100_hook("", t, "var-init"),
        y = cc11001100_hook("y", a(t, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]), "var-init");
      return new Promise((t, a) => {
        let p;
        let b = cc11001100_hook("b", Object.assign({}, c), "var-init");
        function _() {
          p.abort(), document.hidden || I();
        }
        b.accept || (b.accept = cc11001100_hook("b.accept", i, "assign")), v || document.addEventListener("visibilitychange", _);
        let m = cc11001100_hook("m", 1e3, "var-init"),
          w = cc11001100_hook("w", 0, "var-init");
        function E() {
          document.removeEventListener("visibilitychange", _), window.clearTimeout(w), p.abort();
        }
        null == s || s.addEventListener("abort", () => {
          E(), t();
        });
        let S = cc11001100_hook("S", null != g ? g : window.fetch, "var-init"),
          O = cc11001100_hook("O", null != h ? h : l, "var-init");
        async function I() {
          var s, i;
          p = cc11001100_hook("p", new AbortController(), "assign");
          try {
            let s, a, c, l;
            let h = cc11001100_hook("h", await S(e, Object.assign(Object.assign({}, y), {
              headers: cc11001100_hook("headers", b, "object-key-init"),
              signal: cc11001100_hook("signal", p.signal, "object-key-init")
            })), "var-init");
            await O(h), await n(h.body, (i = cc11001100_hook("i", function (e, t, s) {
              let n = cc11001100_hook("n", r(), "var-init"),
                a = cc11001100_hook("a", new TextDecoder(), "var-init");
              return function (i, o) {
                if (0 === i.length) null == s || s(n), n = cc11001100_hook("n", r(), "assign");else if (o > 0) {
                  let s = cc11001100_hook("s", a.decode(i.subarray(0, o)), "var-init"),
                    r = cc11001100_hook("r", o + (32 === i[o + 1] ? 2 : 1), "var-init"),
                    c = cc11001100_hook("c", a.decode(i.subarray(r)), "var-init");
                  switch (s) {
                    case "data":
                      n.data = cc11001100_hook("n.data", n.data ? n.data + "\n" + c : c, "assign");
                      break;
                    case "event":
                      n.event = cc11001100_hook("n.event", c, "assign");
                      break;
                    case "id":
                      e(n.id = cc11001100_hook("n.id", c, "assign"));
                      break;
                    case "retry":
                      let l = cc11001100_hook("l", parseInt(c, 10), "var-init");
                      isNaN(l) || t(n.retry = cc11001100_hook("n.retry", l, "assign"));
                  }
                }
              };
            }(e => {
              e ? b[o] = cc11001100_hook("b[o]", e, "assign") : delete b[o];
            }, e => {
              m = cc11001100_hook("m", e, "assign");
            }, d), "assign"), l = cc11001100_hook("l", !1, "assign"), function (e) {
              void 0 === s ? (s = cc11001100_hook("s", e, "assign"), a = cc11001100_hook("a", 0, "assign"), c = cc11001100_hook("c", -1, "assign")) : s = cc11001100_hook("s", function (e, t) {
                let s = cc11001100_hook("s", new Uint8Array(e.length + t.length), "var-init");
                return s.set(e), s.set(t, e.length), s;
              }(s, e), "assign");
              let t = cc11001100_hook("t", s.length, "var-init"),
                n = cc11001100_hook("n", 0, "var-init");
              for (; a < t;) {
                l && (10 === s[a] && (n = cc11001100_hook("n", ++a, "assign")), l = cc11001100_hook("l", !1, "assign"));
                let e = cc11001100_hook("e", -1, "var-init");
                for (; a < t && -1 === e; ++a) switch (s[a]) {
                  case 58:
                    -1 === c && (c = cc11001100_hook("c", a - n, "assign"));
                    break;
                  case 13:
                    l = cc11001100_hook("l", !0, "assign");
                  case 10:
                    e = cc11001100_hook("e", a, "assign");
                }
                if (-1 === e) break;
                i(s.subarray(n, e), c), n = cc11001100_hook("n", a, "assign"), c = cc11001100_hook("c", -1, "assign");
              }
              n === t ? s = cc11001100_hook("s", void 0, "assign") : 0 !== n && (s = cc11001100_hook("s", s.subarray(n), "assign"), a -= cc11001100_hook("a", n, "assign"));
            })), null == u || u(), E(), t();
          } catch (e) {
            if (!p.signal.aborted) try {
              let t = cc11001100_hook("t", null !== (s = cc11001100_hook("s", null == f ? void 0 : f(e), "assign")) && void 0 !== s ? s : m, "var-init");
              window.clearTimeout(w), w = cc11001100_hook("w", window.setTimeout(I, t), "assign");
            } catch (e) {
              E(), a(e);
            }
          }
        }
        I();
      });
    }
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.headers.get("content-type"), "var-init");
      if (!(null == t ? void 0 : t.startsWith(i))) throw Error(`Expected content-type to be ${i}, Actual: ${t}`);
    }
  },
  33018: function (e, t, s) {
    var n = cc11001100_hook("n", this && this.__createBinding || (Object.create ? function (e, t, s, n) {
        void 0 === n && (n = cc11001100_hook("n", s, "assign"));
        var r = cc11001100_hook("r", Object.getOwnPropertyDescriptor(t, s), "var-init");
        (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = cc11001100_hook("r", {
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          get: function () {
            return t[s];
          }
        }, "assign")), Object.defineProperty(e, n, r);
      } : function (e, t, s, n) {
        void 0 === n && (n = cc11001100_hook("n", s, "assign")), e[n] = cc11001100_hook("e[n]", t[s], "assign");
      }), "var-init"),
      r = cc11001100_hook("r", this && this.__setModuleDefault || (Object.create ? function (e, t) {
        Object.defineProperty(e, "default", {
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          value: cc11001100_hook("value", t, "object-key-init")
        });
      } : function (e, t) {
        e.default = cc11001100_hook("e.default", t, "assign");
      }), "var-init"),
      a = cc11001100_hook("a", this && this.__importStar || function (e) {
        if (e && e.__esModule) return e;
        var t = cc11001100_hook("t", {}, "var-init");
        if (null != e) for (var s in e) "default" !== s && Object.prototype.hasOwnProperty.call(e, s) && n(t, e, s);
        return r(t, e), t;
      }, "var-init");
    Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), t.SseController = cc11001100_hook("t.SseController", t.NEW_SENTENCE_ID = cc11001100_hook("t.NEW_SENTENCE_ID", void 0, "assign"), "assign");
    let i = cc11001100_hook("i", a(s(5532)), "var-init");
    t.SseController = cc11001100_hook("t.SseController", i.default, "assign"), Object.defineProperty(t, "NEW_SENTENCE_ID", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: function () {
        return i.NEW_SENTENCE_ID;
      }
    });
  },
  5532: function (e, t, s) {
    var n = cc11001100_hook("n", this && this.__awaiter || function (e, t, s, n) {
      return new (s || (s = cc11001100_hook("s", Promise, "assign")))(function (r, a) {
        function i(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            c(n.next(e));
          } catch (e) {
            a(e);
          }
        }
        function o(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            c(n.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function c(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t;
          e.done ? r(e.value) : ((t = cc11001100_hook("t", e.value, "assign")) instanceof s ? t : new s(function (e) {
            e(t);
          })).then(i, o);
        }
        c((n = cc11001100_hook("n", n.apply(e, t || []), "assign")).next());
      });
    }, "var-init");
    Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), t.NEW_SENTENCE_ID = cc11001100_hook("t.NEW_SENTENCE_ID", t.DEFAULT_CONVERSATION_ID = cc11001100_hook("t.DEFAULT_CONVERSATION_ID", void 0, "assign"), "assign");
    let r = cc11001100_hook("r", s(39858), "var-init"),
      a = cc11001100_hook("a", s(34559), "var-init"),
      i = cc11001100_hook("i", s(73661), "var-init"),
      o = cc11001100_hook("o", {
        content: {
          botId: cc11001100_hook("botId", -1, "object-key-init"),
          breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init"),
          contents: cc11001100_hook("contents", "", "object-key-init"),
          conversationId: cc11001100_hook("conversationId", "", "object-key-init"),
          isBanned: cc11001100_hook("isBanned", !1, "object-key-init"),
          isRetry: cc11001100_hook("isRetry", "retry", "object-key-init"),
          sentenceId: cc11001100_hook("sentenceId", "", "object-key-init"),
          turnId: cc11001100_hook("turnId", "", "object-key-init"),
          userId: cc11001100_hook("userId", -1, "object-key-init")
        },
        type: cc11001100_hook("type", "message", "object-key-init")
      }, "var-init");
    t.DEFAULT_CONVERSATION_ID = cc11001100_hook("t.DEFAULT_CONVERSATION_ID", "00000000-0000-0000-0000-000000000000", "assign");
    let c = cc11001100_hook("c", "抱歉，网络开小差了，请再问我一次。", "var-init"),
      l = cc11001100_hook("l", {
        SUCCESS: cc11001100_hook("SUCCESS", "0", "object-key-init")
      }, "var-init");
    t.NEW_SENTENCE_ID = cc11001100_hook("t.NEW_SENTENCE_ID", "NEW_SENTENCE_ID", "assign");
    class h {
      constructor({
        auth: e,
        visitorId: t,
        baseUrl: s,
        commonHeaders: n,
        timeout: r,
        eventSource: i,
        control: o
      }) {
        if (!s) throw Error();
        this.auth = cc11001100_hook("this.auth", e, "assign"), this.visitorId = cc11001100_hook("this.visitorId", t, "assign"), this.baseUrl = cc11001100_hook("this.baseUrl", s, "assign"), this.timeout = cc11001100_hook("this.timeout", r || 30, "assign"), this.addComHeaders = cc11001100_hook("this.addComHeaders", (0, a.addCommonHeaders)(n), "assign"), this.sseGather = cc11001100_hook("this.sseGather", {}, "assign"), this.callBacks = cc11001100_hook("this.callBacks", {}, "assign"), this.conversationGather = cc11001100_hook("this.conversationGather", {}, "assign"), this.eventSource = cc11001100_hook("this.eventSource", i, "assign"), this.control = cc11001100_hook("this.control", o, "assign");
      }
      setAuth(e) {
        this.auth = cc11001100_hook("this.auth", e, "assign");
      }
      setVisitorId(e) {
        this.visitorId = cc11001100_hook("this.visitorId", e, "assign");
      }
      bind(e, t) {
        let s = cc11001100_hook("s", this.callBacks[e], "var-init");
        return Array.isArray(s) ? s.push(t) : this.callBacks[e] = cc11001100_hook("this.callBacks[e]", [t], "assign"), () => {
          let s = cc11001100_hook("s", this.callBacks[e], "var-init");
          if (Array.isArray(s)) for (let e = cc11001100_hook("e", 0, "var-init"); e < s.length; ++e) s[e] === t && s.splice(e, 1);
        };
      }
      sseUrl() {
        let {
          baseUrl: e
        } = cc11001100_hook("", this, "var-init");
        return `${e}/conversation/chat/v1`;
      }
      sendMsgToBot(e) {
        return n(this, void 0, void 0, function* () {
          yield this._beforeOpen(e), yield this.buildSSe(e);
        });
      }
      buildSSe({
        botId: e,
        botAlias: t,
        contents: s,
        strategy: a,
        conversationId: o,
        uuid: l,
        turnId: h,
        querySentenceId: d,
        attachments: u,
        attachmentInfo: f,
        inputWay: v,
        mediaInfos: g,
        turnIndex: y,
        rewriteQuery: p,
        isNewConversation: b = !1,
        capabilities: _,
        customParams: m = {}
      }) {
        return new Promise((d, w) => {
          let E = cc11001100_hook("E", this.sseGather[l], "var-init");
          if (!E) {
            let {
                breakingStrategy: d,
                isRetry: w
              } = cc11001100_hook("", a, "var-init"),
              E = cc11001100_hook("E", this.sseUrl(), "var-init"),
              S = cc11001100_hook("S", Array.isArray(g) ? g.map(e => ({
                fileMd5: cc11001100_hook("fileMd5", e.fileMd5, "object-key-init"),
                fileId: cc11001100_hook("fileId", e.fileId, "object-key-init")
              })) : [], "var-init"),
              {
                visitorId: O
              } = cc11001100_hook("", this, "var-init"),
              {
                token: I,
                user: A
              } = cc11001100_hook("", this.auth, "var-init"),
              G = cc11001100_hook("G", this.control ? new this.control() : new AbortController(), "var-init"),
              N = cc11001100_hook("N", {
                method: cc11001100_hook("method", "POST", "object-key-init"),
                headers: {
                  "X-Yuanshi-Authorization": cc11001100_hook("X-Yuanshi-Authorization", `Bearer ${I}`, "object-key-init"),
                  "X-Yuanshi-DeviceId": cc11001100_hook("X-Yuanshi-DeviceId", O, "object-key-init"),
                  "Content-type": cc11001100_hook("Content-type", "application/json", "object-key-init"),
                  Accept: cc11001100_hook("Accept", "text/event-stream", "object-key-init"),
                  Connection: cc11001100_hook("Connection", "keep-alive", "object-key-init")
                },
                data: {
                  userId: cc11001100_hook("userId", null == A ? void 0 : A.id, "object-key-init"),
                  botId: cc11001100_hook("botId", e, "object-key-init"),
                  botAlias: cc11001100_hook("botAlias", t, "object-key-init"),
                  query: cc11001100_hook("query", s, "object-key-init"),
                  isRetry: cc11001100_hook("isRetry", w, "object-key-init"),
                  breakingStrategy: cc11001100_hook("breakingStrategy", d, "object-key-init"),
                  isNewConversation: cc11001100_hook("isNewConversation", b, "object-key-init"),
                  mediaInfos: cc11001100_hook("mediaInfos", S, "object-key-init"),
                  turnIndex: cc11001100_hook("turnIndex", y, "object-key-init"),
                  rewriteQuery: cc11001100_hook("rewriteQuery", p, "object-key-init"),
                  conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                  capabilities: cc11001100_hook("capabilities", _, "object-key-init")
                }
              }, "var-init"),
              D = cc11001100_hook("D", setTimeout(this.handleTimeout.bind(this, {
                conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                uuid: cc11001100_hook("uuid", o, "object-key-init"),
                botId: cc11001100_hook("botId", e, "object-key-init")
              }), 1e3 * this.timeout), "var-init");
            u && (N.data.attachments = cc11001100_hook("N.data.attachments", u, "assign")), f && (N.data.attachmentInfo = cc11001100_hook("N.data.attachmentInfo", f, "assign")), v && (N.data.inputWay = cc11001100_hook("N.data.inputWay", v, "assign")), w && (N.data.turnId = cc11001100_hook("N.data.turnId", h, "assign")), N.data = cc11001100_hook("N.data", Object.assign(Object.assign({}, N.data), m), "assign"), this.addComHeaders(N), (0, i.signFn)(N);
            let k = cc11001100_hook("k", this.eventSource || r.fetchEventSource, "var-init"),
              C = cc11001100_hook("C", k(E, {
                openWhenHidden: cc11001100_hook("openWhenHidden", !0, "object-key-init"),
                method: cc11001100_hook("method", N.method, "object-key-init"),
                headers: cc11001100_hook("headers", N.headers, "object-key-init"),
                signal: cc11001100_hook("signal", G.signal, "object-key-init"),
                body: cc11001100_hook("body", JSON.stringify(N.data), "object-key-init"),
                onopen: cc11001100_hook("onopen", t => n(this, void 0, void 0, function* () {
                  if (!t.ok || "text/event-stream" !== t.headers.get("content-type")) {
                    if (t.status >= 400 && t.status < 500 && 429 !== t.status) {
                      this._onError({
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        event: {
                          event: cc11001100_hook("event", "error", "object-key-init"),
                          data: cc11001100_hook("data", JSON.stringify({
                            code: cc11001100_hook("code", t.status, "object-key-init"),
                            content: cc11001100_hook("content", c, "object-key-init")
                          }), "object-key-init")
                        },
                        contents: cc11001100_hook("contents", s, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      }), G.abort();
                      return;
                    }
                    this._onError({
                      botId: cc11001100_hook("botId", e, "object-key-init"),
                      strategy: cc11001100_hook("strategy", a, "object-key-init"),
                      event: {
                        event: cc11001100_hook("event", "error", "object-key-init"),
                        data: cc11001100_hook("data", JSON.stringify({
                          code: cc11001100_hook("code", t.status, "object-key-init"),
                          content: cc11001100_hook("content", c, "object-key-init")
                        }), "object-key-init")
                      },
                      contents: cc11001100_hook("contents", s, "object-key-init"),
                      conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                      uuid: cc11001100_hook("uuid", l, "object-key-init")
                    }), G.abort();
                  }
                }), "object-key-init"),
                onmessage: cc11001100_hook("onmessage", t => n(this, void 0, void 0, function* () {
                  var n;
                  if (!this.sseGather[l]) return;
                  switch (Array.isArray(this.sseGather[l].timestamp[t.event]) ? this.sseGather[l].timestamp[t.event].push(Date.now()) : this.sseGather[l].timestamp[t.event] = cc11001100_hook("this.sseGather[l].timestamp[t.event]", Date.now(), "assign"), t.event) {
                    case "opened":
                      clearTimeout(D), this._onOpen({
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        event: cc11001100_hook("event", t, "object-key-init"),
                        contents: cc11001100_hook("contents", s, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "loading":
                      this._onLoading({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "message":
                      this._onMessage({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "generateEnd":
                      this._generateEnd({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "suggestedQuestions":
                    case "suggestionR1":
                      this._onSuggested({
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        event: cc11001100_hook("event", t, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "webSearch":
                      this._onWebSearch({
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        event: cc11001100_hook("event", t, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "webSearchDetail":
                      this._onWebSearchDetail({
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        event: cc11001100_hook("event", t, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "error":
                      yield this._onError({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "banned":
                      this._onBanned({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "close":
                      yield this._onMsgEnd({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      break;
                    case "cards":
                      this._onCards({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      return;
                    case "ppt":
                      this._onPpt({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        botId: cc11001100_hook("botId", e, "object-key-init"),
                        strategy: cc11001100_hook("strategy", a, "object-key-init"),
                        conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                        uuid: cc11001100_hook("uuid", l, "object-key-init")
                      });
                      return;
                  }
                  let r = cc11001100_hook("r", this.callBacks.trunk, "var-init"),
                    i = cc11001100_hook("i", this.conversationGather[l], "var-init");
                  if (Array.isArray(r)) for (let s = cc11001100_hook("s", 0, "var-init"); s < r.length; ++s) r[s]({
                    event: cc11001100_hook("event", t, "object-key-init"),
                    botId: cc11001100_hook("botId", e, "object-key-init"),
                    strategy: cc11001100_hook("strategy", a, "object-key-init"),
                    conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                    conver: cc11001100_hook("conver", i, "object-key-init"),
                    timestamp: cc11001100_hook("timestamp", null === (n = cc11001100_hook("n", this.sseGather[l], "assign")) || void 0 === n ? void 0 : n.timestamp, "object-key-init"),
                    uuid: cc11001100_hook("uuid", l, "object-key-init")
                  });
                  ("close" === t.event || "error" === t.event) && this._distroySse({
                    botId: cc11001100_hook("botId", e, "object-key-init"),
                    conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                    uuid: cc11001100_hook("uuid", l, "object-key-init")
                  });
                }), "object-key-init"),
                onclose() {},
                onerror: t => {
                  throw console.log(t), this._onError({
                    botId: cc11001100_hook("botId", e, "object-key-init"),
                    strategy: cc11001100_hook("strategy", a, "object-key-init"),
                    event: {
                      event: cc11001100_hook("event", "error", "object-key-init"),
                      data: cc11001100_hook("data", JSON.stringify({
                        code: cc11001100_hook("code", -999, "object-key-init"),
                        content: cc11001100_hook("content", c, "object-key-init")
                      }), "object-key-init")
                    },
                    contents: cc11001100_hook("contents", s, "object-key-init"),
                    conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                    uuid: cc11001100_hook("uuid", l, "object-key-init")
                  }), this._distroySse({
                    botId: cc11001100_hook("botId", e, "object-key-init"),
                    conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
                    uuid: cc11001100_hook("uuid", l, "object-key-init")
                  }), t;
                }
              }), "var-init");
            this.sseGather[l] = cc11001100_hook("this.sseGather[l]", {
              source: cc11001100_hook("source", C, "object-key-init"),
              botId: cc11001100_hook("botId", e, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", o, "object-key-init"),
              strategy: cc11001100_hook("strategy", a, "object-key-init"),
              contents: cc11001100_hook("contents", s, "object-key-init"),
              uuid: cc11001100_hook("uuid", l, "object-key-init"),
              ctrl: cc11001100_hook("ctrl", G, "object-key-init"),
              timestamp: {
                build: cc11001100_hook("build", Date.now(), "object-key-init"),
                message: cc11001100_hook("message", [], "object-key-init"),
                suggestedQuestions: cc11001100_hook("suggestedQuestions", [], "object-key-init")
              },
              state: cc11001100_hook("state", 0, "object-key-init"),
              sseRetryCount: cc11001100_hook("sseRetryCount", 2, "object-key-init")
            }, "assign");
          }
        });
      }
      stopSse({
        botId: e,
        conversationId: s,
        uuid: r,
        callback: a,
        fail: i,
        defaultData: c
      }) {
        return n(this, void 0, void 0, function* () {
          let n = cc11001100_hook("n", this.sseGather[r], "var-init");
          if (n) {
            let i = cc11001100_hook("i", this.conversationGather[r], "var-init"),
              {
                strategy: c,
                contents: l
              } = cc11001100_hook("", n, "var-init");
            0 === this.sseGather[r].state && (this.sseGather[r].state = cc11001100_hook("this.sseGather[r].state", -1, "assign"));
            let h = cc11001100_hook("h", i.answer ? Object.assign(Object.assign({}, i.answer), {
              voluntaryStop: cc11001100_hook("voluntaryStop", !0, "object-key-init")
            }) : {
              conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
              answerSentenceId: cc11001100_hook("answerSentenceId", `${t.NEW_SENTENCE_ID}_${Date.now()}`, "object-key-init"),
              turnId: cc11001100_hook("turnId", i.turnId, "object-key-init"),
              content: cc11001100_hook("content", "", "object-key-init"),
              voluntaryStop: cc11001100_hook("voluntaryStop", !0, "object-key-init")
            }, "var-init");
            this._insertAnswer({
              responseData: cc11001100_hook("responseData", h, "object-key-init"),
              botId: cc11001100_hook("botId", e, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
              uuid: cc11001100_hook("uuid", r, "object-key-init")
            }), yield this._onMsgEnd({
              event: {
                data: cc11001100_hook("data", Object.assign(Object.assign({}, o), {
                  conversationId: cc11001100_hook("conversationId", s, "object-key-init")
                }), "object-key-init")
              },
              botId: cc11001100_hook("botId", e, "object-key-init"),
              strategy: cc11001100_hook("strategy", c, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
              uuid: cc11001100_hook("uuid", r, "object-key-init")
            }), this._distroySse({
              botId: cc11001100_hook("botId", e, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
              uuid: cc11001100_hook("uuid", r, "object-key-init")
            }), a && a({
              botId: cc11001100_hook("botId", e, "object-key-init"),
              conver: cc11001100_hook("conver", i, "object-key-init"),
              strategy: cc11001100_hook("strategy", c, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
              uuid: cc11001100_hook("uuid", r, "object-key-init")
            });
          } else i ? i() : a && a({
            botId: cc11001100_hook("botId", e, "object-key-init"),
            conver: cc11001100_hook("conver", c, "object-key-init"),
            strategy: {
              isRetry: cc11001100_hook("isRetry", !1, "object-key-init"),
              breakingStrategy: cc11001100_hook("breakingStrategy", 0, "object-key-init")
            },
            conversationId: cc11001100_hook("conversationId", s, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
        });
      }
      handleTimeout({
        botId: e,
        conversationId: t,
        uuid: s,
        callback: r
      }) {
        return n(this, void 0, void 0, function* () {
          let n = cc11001100_hook("n", this.sseGather[s], "var-init");
          if (n) {
            this.conversationGather[s];
            let {
              botId: e,
              strategy: r,
              contents: a
            } = cc11001100_hook("", n, "var-init");
            this._onError({
              botId: cc11001100_hook("botId", e, "object-key-init"),
              strategy: cc11001100_hook("strategy", r, "object-key-init"),
              event: {
                event: cc11001100_hook("event", "error", "object-key-init"),
                data: cc11001100_hook("data", JSON.stringify({
                  code: cc11001100_hook("code", -999, "object-key-init"),
                  content: cc11001100_hook("content", c, "object-key-init")
                }), "object-key-init")
              },
              contents: cc11001100_hook("contents", a, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", t, "object-key-init"),
              uuid: cc11001100_hook("uuid", s, "object-key-init")
            });
          }
          this._distroySse({
            botId: cc11001100_hook("botId", e, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", t, "object-key-init"),
            uuid: cc11001100_hook("uuid", s, "object-key-init")
          });
        });
      }
      _insertAnswer({
        botId: e,
        responseData: s,
        strategy: n,
        conversationId: r,
        uuid: a
      }) {
        let i = cc11001100_hook("i", this.conversationGather[a], "var-init"),
          {
            content: o,
            answerSentenceId: c,
            voluntaryStop: l
          } = cc11001100_hook("", s, "var-init");
        if (i) {
          if (i.answer && i.answer.isBanned) return;
          if (i.answer && i.answer.sentenceId !== t.NEW_SENTENCE_ID) {
            let e = cc11001100_hook("e", i.answer.contents + o, "var-init");
            i.answer = cc11001100_hook("i.answer", Object.assign(Object.assign({}, i.answer), {
              contents: cc11001100_hook("contents", e, "object-key-init"),
              voluntaryStop: cc11001100_hook("voluntaryStop", l, "object-key-init")
            }), "assign");
          } else i.answer = cc11001100_hook("i.answer", {
            conversationId: cc11001100_hook("conversationId", s.conversationId || r, "object-key-init"),
            sentenceId: cc11001100_hook("sentenceId", c, "object-key-init"),
            contents: cc11001100_hook("contents", o, "object-key-init"),
            turnId: cc11001100_hook("turnId", s.turnId || i.turnId, "object-key-init"),
            voluntaryStop: cc11001100_hook("voluntaryStop", l, "object-key-init")
          }, "assign");
        }
      }
      _replaceAnswer({
        botId: e,
        responseData: t,
        conversationId: s,
        uuid: n
      }) {
        let r = cc11001100_hook("r", this.conversationGather[n], "var-init"),
          {
            content: a
          } = cc11001100_hook("", t, "var-init");
        r && (r.answer ? r.answer = cc11001100_hook("r.answer", Object.assign(Object.assign({}, r.answer), {
          contents: cc11001100_hook("contents", a, "object-key-init")
        }), "assign") : a.conversationId ? r.answer = cc11001100_hook("r.answer", a, "assign") : r.answer = cc11001100_hook("r.answer", Object.assign(Object.assign({}, r.question), {
          contents: cc11001100_hook("contents", a, "object-key-init")
        }), "assign"));
      }
      _insertQuestion({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let {
            isRetry: a,
            breakingStrategy: i
          } = cc11001100_hook("", s, "var-init"),
          o = cc11001100_hook("o", this.conversationGather[r], "var-init");
        o && (o.conversationId = cc11001100_hook("o.conversationId", t.conversationId || n, "assign"), o.turnId = cc11001100_hook("o.turnId", t.turnId, "assign"), a || (o.question.sentenceId = cc11001100_hook("o.question.sentenceId", t.querySentenceId, "assign")));
      }
      _insertSuggested({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && (Array.isArray(a.suggested) ? a.suggested.push(t.content) : a.suggested = cc11001100_hook("a.suggested", [t.content], "assign"));
      }
      _insertLoading({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && (a.loadingEvent = cc11001100_hook("a.loadingEvent", {
          status: cc11001100_hook("status", !0, "object-key-init"),
          content: cc11001100_hook("content", t.content, "object-key-init")
        }, "assign"), a.answer && (a.answer = cc11001100_hook("a.answer", Object.assign(Object.assign({}, a.answer), {
          loadingEvent: {
            status: cc11001100_hook("status", !0, "object-key-init"),
            content: cc11001100_hook("content", t.content, "object-key-init")
          }
        }), "assign")));
      }
      _closeLoading({
        botId: e,
        conversationId: t,
        uuid: s
      }) {
        let n = cc11001100_hook("n", this.conversationGather[s], "var-init");
        n && n.loadingEvent && (n.loadingEvent.status = cc11001100_hook("n.loadingEvent.status", !1, "assign"), n.answer && n.answer.loadingEvent && (n.answer.loadingEvent.status = cc11001100_hook("n.answer.loadingEvent.status", !1, "assign")));
      }
      _insertWebSearch({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && (a.webSearch = cc11001100_hook("a.webSearch", t, "assign"));
      }
      _insertWebSearchDetail({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && (a.webSearchDetail = cc11001100_hook("a.webSearchDetail", t, "assign"));
      }
      _insertCards({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && (a.cards = cc11001100_hook("a.cards", t, "assign"));
      }
      _insertBanned({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && a.answer && (a.answer.isBanned = cc11001100_hook("a.answer.isBanned", !0, "assign"));
      }
      _insertPpt({
        botId: e,
        responseData: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        let a = cc11001100_hook("a", this.conversationGather[r], "var-init");
        a && (a.ppt = cc11001100_hook("a.ppt", t, "assign"));
      }
      _beforeOpen(e) {
        return n(this, void 0, void 0, function* () {
          let {
              botId: s,
              conversationId: n,
              contents: r,
              strategy: a,
              uuid: i,
              turnId: o,
              querySentenceId: c,
              customAttrs: l,
              timeoutRetry: h,
              mediaInfos: d,
              turnIndex: u,
              rewriteQuery: f,
              isNewConversation: v = !1
            } = cc11001100_hook("", e, "var-init"),
            g = cc11001100_hook("g", this.conversationGather[i], "var-init");
          if (!g) {
            let e = cc11001100_hook("e", new Date(), "var-init"),
              f = cc11001100_hook("f", o || `newTurnId_${Date.now()}`, "var-init");
            this.conversationGather[i] = cc11001100_hook("this.conversationGather[i]", {
              conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
              turnId: cc11001100_hook("turnId", f, "object-key-init"),
              question: {
                contents: cc11001100_hook("contents", r, "object-key-init"),
                direction: cc11001100_hook("direction", 1, "object-key-init"),
                sentTime: cc11001100_hook("sentTime", e, "object-key-init"),
                sentenceId: cc11001100_hook("sentenceId", c || t.NEW_SENTENCE_ID, "object-key-init"),
                state: cc11001100_hook("state", 0, "object-key-init"),
                mediaInfos: cc11001100_hook("mediaInfos", d, "object-key-init"),
                turnIndex: cc11001100_hook("turnIndex", u, "object-key-init")
              },
              timeoutRetry: cc11001100_hook("timeoutRetry", h, "object-key-init"),
              customAttrs: cc11001100_hook("customAttrs", l, "object-key-init"),
              isNewConversation: cc11001100_hook("isNewConversation", v, "object-key-init")
            }, "assign"), this.conversationGather[i].answer = cc11001100_hook("this.conversationGather[i].answer", {
              conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
              turnId: cc11001100_hook("turnId", f, "object-key-init"),
              direction: cc11001100_hook("direction", 2, "object-key-init"),
              sentenceId: cc11001100_hook("sentenceId", t.NEW_SENTENCE_ID, "object-key-init"),
              state: cc11001100_hook("state", 0, "object-key-init"),
              contents: cc11001100_hook("contents", "", "object-key-init")
            }, "assign");
            let g = cc11001100_hook("g", this.callBacks.beforeOpen, "var-init");
            if (Array.isArray(g)) {
              let e = cc11001100_hook("e", g.map(e => new Promise(t => {
                e({
                  botId: cc11001100_hook("botId", s, "object-key-init"),
                  conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
                  conver: cc11001100_hook("conver", this.conversationGather[i], "object-key-init"),
                  strategy: cc11001100_hook("strategy", a, "object-key-init"),
                  onComplete: cc11001100_hook("onComplete", t, "object-key-init"),
                  uuid: cc11001100_hook("uuid", i, "object-key-init")
                });
              })), "var-init");
              yield Promise.all(e);
            }
          }
        });
      }
      _onOpen({
        event: e,
        botId: t,
        strategy: s,
        contents: n,
        conversationId: r,
        uuid: a
      }) {
        try {
          let n = cc11001100_hook("n", JSON.parse(e.data), "var-init");
          n.content = cc11001100_hook("n.content", "", "assign"), this._insertQuestion({
            responseData: cc11001100_hook("responseData", n, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
            uuid: cc11001100_hook("uuid", a, "object-key-init")
          }), this._insertAnswer({
            responseData: cc11001100_hook("responseData", n, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
            uuid: cc11001100_hook("uuid", a, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.open, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[a], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
            uuid: cc11001100_hook("uuid", a, "object-key-init")
          });
        } catch (e) {}
      }
      _onLoading({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let a = cc11001100_hook("a", JSON.parse(e.data), "var-init");
          this._insertLoading({
            responseData: cc11001100_hook("responseData", a, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.loading, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[r], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _onMessage({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let a = cc11001100_hook("a", JSON.parse(e.data), "var-init");
          this._insertAnswer({
            responseData: cc11001100_hook("responseData", a, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          }), this._closeLoading({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.message, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[r], "var-init"),
            c = cc11001100_hook("c", this.sseGather[r], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", c.timestamp, "object-key-init"),
            state: cc11001100_hook("state", c.state, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _generateEnd({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let e = cc11001100_hook("e", this.conversationGather[r], "var-init");
          e && e.answer && (e.answer.end = cc11001100_hook("e.answer.end", !0, "assign"));
          let a = cc11001100_hook("a", this.callBacks.generateEnd, "var-init"),
            i = cc11001100_hook("i", this.sseGather[r], "var-init");
          if (Array.isArray(a)) for (let o = cc11001100_hook("o", 0, "var-init"); o < a.length; ++o) a[o]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", e, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", i.timestamp, "object-key-init"),
            state: cc11001100_hook("state", i.state, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _onMsgEnd({
        event: e,
        botId: t,
        strategy: s,
        conversationId: r,
        uuid: a
      }) {
        return n(this, void 0, void 0, function* () {
          try {
            let e = cc11001100_hook("e", this.conversationGather[a], "var-init"),
              n = cc11001100_hook("n", this.sseGather[a], "var-init");
            if (!e || !n) return;
            0 === n.state && (n.state = cc11001100_hook("n.state", l.SUCCESS, "assign"));
            let i = cc11001100_hook("i", this.callBacks.end, "var-init");
            if (Array.isArray(i)) for (let o = cc11001100_hook("o", 0, "var-init"); o < i.length; ++o) i[o]({
              botId: cc11001100_hook("botId", t, "object-key-init"),
              conver: cc11001100_hook("conver", e, "object-key-init"),
              strategy: cc11001100_hook("strategy", s, "object-key-init"),
              conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
              uuid: cc11001100_hook("uuid", a, "object-key-init"),
              timestamp: cc11001100_hook("timestamp", n.timestamp, "object-key-init"),
              state: cc11001100_hook("state", n.state, "object-key-init")
            });
          } catch (e) {
            console.error(e);
          }
        });
      }
      _onCards({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let a = cc11001100_hook("a", JSON.parse(e.data), "var-init");
          this._insertCards({
            responseData: cc11001100_hook("responseData", a, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.cards, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[r], "var-init"),
            c = cc11001100_hook("c", this.sseGather[r], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", c.timestamp, "object-key-init"),
            state: cc11001100_hook("state", c.state, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _onPpt({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let a = cc11001100_hook("a", JSON.parse(e.data), "var-init");
          this._insertPpt({
            responseData: cc11001100_hook("responseData", a, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.ppt, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[r], "var-init"),
            c = cc11001100_hook("c", this.sseGather[r], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", c.timestamp, "object-key-init"),
            state: cc11001100_hook("state", c.state, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _onBanned({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        var a;
        try {
          let i = cc11001100_hook("i", JSON.parse(e.data), "var-init");
          this.sseGather[r].state = cc11001100_hook("this.sseGather[r].state", i.code, "assign"), this._replaceAnswer({
            responseData: cc11001100_hook("responseData", i, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          }), this._insertBanned({
            responseData: cc11001100_hook("responseData", i, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let o = cc11001100_hook("o", this.callBacks.banned, "var-init"),
            c = cc11001100_hook("c", this.sseGather[r], "var-init"),
            l = cc11001100_hook("l", this.conversationGather[r], "var-init");
          if (Array.isArray(o)) for (let e = cc11001100_hook("e", 0, "var-init"); e < o.length; ++e) o[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", l, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init"),
            timestamp: cc11001100_hook("timestamp", c.timestamp, "object-key-init"),
            state: cc11001100_hook("state", c.state, "object-key-init")
          });
          c && (null === (a = cc11001100_hook("a", c.ctrl, "assign")) || void 0 === a || a.abort());
        } catch (e) {
          console.error(e);
        }
      }
      _onError({
        event: e,
        botId: t,
        strategy: s,
        conversationId: r,
        uuid: a
      }) {
        return n(this, void 0, void 0, function* () {
          let n = cc11001100_hook("n", {}, "var-init");
          try {
            n = cc11001100_hook("n", JSON.parse(e.data), "assign");
          } catch (e) {
            n = cc11001100_hook("n", {
              code: cc11001100_hook("code", -999, "object-key-init"),
              message: cc11001100_hook("message", (null == e ? void 0 : e.message) || "未知错误", "object-key-init")
            }, "assign"), console.error(e);
          }
          -999 !== n.code && (n.message ? n.content = cc11001100_hook("n.content", n.message, "assign") : n.content = cc11001100_hook("n.content", c, "assign"), this._replaceAnswer({
            responseData: cc11001100_hook("responseData", n, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
            uuid: cc11001100_hook("uuid", a, "object-key-init")
          })), this.sseGather[a].state = cc11001100_hook("this.sseGather[a].state", n.code, "assign");
          let i = cc11001100_hook("i", this.conversationGather[a], "var-init"),
            o = cc11001100_hook("o", this.sseGather[a], "var-init"),
            l = cc11001100_hook("l", this.callBacks.error, "var-init");
          if (Array.isArray(l)) {
            let e = cc11001100_hook("e", l.map(e => new Promise(n => {
              e({
                botId: cc11001100_hook("botId", t, "object-key-init"),
                conver: cc11001100_hook("conver", i, "object-key-init"),
                strategy: cc11001100_hook("strategy", s, "object-key-init"),
                conversationId: cc11001100_hook("conversationId", r, "object-key-init"),
                onComplete: cc11001100_hook("onComplete", n, "object-key-init"),
                uuid: cc11001100_hook("uuid", a, "object-key-init"),
                timestamp: cc11001100_hook("timestamp", o.timestamp, "object-key-init"),
                state: cc11001100_hook("state", o.state, "object-key-init")
              });
            })), "var-init");
            yield Promise.all(e);
          }
        });
      }
      _onSuggested({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let a = cc11001100_hook("a", JSON.parse(e.data), "var-init");
          this._insertSuggested({
            responseData: cc11001100_hook("responseData", a, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.suggestedQuestions, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[r], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            conversationId: cc11001100_hook("conversationId", n, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _onWebSearch({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let n = cc11001100_hook("n", JSON.parse(e.data), "var-init");
          this._insertWebSearch({
            responseData: cc11001100_hook("responseData", n, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let a = cc11001100_hook("a", this.callBacks.webSearch, "var-init"),
            i = cc11001100_hook("i", this.conversationGather[r], "var-init");
          if (Array.isArray(a)) for (let e = cc11001100_hook("e", 0, "var-init"); e < a.length; ++e) a[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", i, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _onWebSearchDetail({
        event: e,
        botId: t,
        strategy: s,
        conversationId: n,
        uuid: r
      }) {
        try {
          let n = cc11001100_hook("n", JSON.parse(e.data), "var-init"),
            {
              content: a
            } = cc11001100_hook("", n, "var-init");
          this._insertWebSearchDetail({
            responseData: cc11001100_hook("responseData", a, "object-key-init"),
            botId: cc11001100_hook("botId", t, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
          let i = cc11001100_hook("i", this.callBacks.webSearchDetail, "var-init"),
            o = cc11001100_hook("o", this.conversationGather[r], "var-init");
          if (Array.isArray(i)) for (let e = cc11001100_hook("e", 0, "var-init"); e < i.length; ++e) i[e]({
            botId: cc11001100_hook("botId", t, "object-key-init"),
            conver: cc11001100_hook("conver", o, "object-key-init"),
            strategy: cc11001100_hook("strategy", s, "object-key-init"),
            uuid: cc11001100_hook("uuid", r, "object-key-init")
          });
        } catch (e) {
          console.error(e);
        }
      }
      _distroySse({
        botId: e,
        conversationId: t,
        uuid: s
      }) {
        this.conversationGather[s] = cc11001100_hook("this.conversationGather[s]", null, "assign");
        let n = cc11001100_hook("n", this.sseGather[s], "var-init");
        if (n) {
          let {
            ctrl: e
          } = cc11001100_hook("", n, "var-init");
          e.abort();
        }
        this.sseGather[s] = cc11001100_hook("this.sseGather[s]", null, "assign");
      }
    }
    t.default = cc11001100_hook("t.default", h, "assign");
  }
}]);