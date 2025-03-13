try {
  let e = cc11001100_hook("e", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, "var-init"),
    n = cc11001100_hook("n", new e.Error().stack, "var-init");
  n && (e._sentryDebugIds = cc11001100_hook("e._sentryDebugIds", e._sentryDebugIds || {}, "assign"), e._sentryDebugIds[n] = cc11001100_hook("e._sentryDebugIds[n]", "9598418d-1eb0-439d-9a71-7b63528858f2", "assign"), e._sentryDebugIdIdentifier = cc11001100_hook("e._sentryDebugIdIdentifier", "sentry-dbid-9598418d-1eb0-439d-9a71-7b63528858f2", "assign"));
} catch (e) {}
(self.webpackChunk_N_E = cc11001100_hook("self.webpackChunk_N_E", self.webpackChunk_N_E || [], "assign")).push([[1744], {
  72431: function () {},
  19089: function (e, n, t) {
    Promise.resolve().then(t.t.bind(t, 33728, 23)), Promise.resolve().then(t.t.bind(t, 29928, 23)), Promise.resolve().then(t.t.bind(t, 56954, 23)), Promise.resolve().then(t.t.bind(t, 3170, 23)), Promise.resolve().then(t.t.bind(t, 7264, 23)), Promise.resolve().then(t.t.bind(t, 48297, 23));
  },
  32981: function (e, n, t) {
    "use strict";

    var s = cc11001100_hook("s", t(6444), "var-init"),
      i = cc11001100_hook("i", t(78719), "var-init"),
      r = cc11001100_hook("r", t(45879), "var-init"),
      o = cc11001100_hook("o", t(25566), "var-init");
    globalThis._sentryRewritesTunnelPath = cc11001100_hook("globalThis._sentryRewritesTunnelPath", void 0, "assign"), globalThis.SENTRY_RELEASE = cc11001100_hook("globalThis.SENTRY_RELEASE", void 0, "assign"), globalThis._sentryBasePath = cc11001100_hook("globalThis._sentryBasePath", void 0, "assign"), globalThis._sentryRewriteFramesAssetPrefixPath = cc11001100_hook("globalThis._sentryRewriteFramesAssetPrefixPath", "", "assign"), globalThis._sentryAssetPrefix = cc11001100_hook("globalThis._sentryAssetPrefix", void 0, "assign"), globalThis._sentryExperimentalThirdPartyOriginStackFrames = cc11001100_hook("globalThis._sentryExperimentalThirdPartyOriginStackFrames", void 0, "assign"), s.S1({
      dsn: cc11001100_hook("dsn", "https://ab37fbdcfabc65f94ebbb48d3692f0a4@sentry.wenxiaobai.com/3", "object-key-init"),
      tracesSampleRate: cc11001100_hook("tracesSampleRate", .1, "object-key-init"),
      integrations: cc11001100_hook("integrations", [i.E({}), r.G()], "object-key-init"),
      environment: cc11001100_hook("environment", "prod" === o.env.API ? "production" : "development", "object-key-init"),
      release: cc11001100_hook("release", "3.1.1", "object-key-init")
    });
  }
}, function (e) {
  var n = function (n) {
    return e(e.s = cc11001100_hook("e.s", n, "assign"));
  };
  e.O(0, [991, 2971, 1530], function () {
    return n(32981), n(62019), n(19089);
  }), _N_E = cc11001100_hook("_N_E", e.O(), "assign");
}]);