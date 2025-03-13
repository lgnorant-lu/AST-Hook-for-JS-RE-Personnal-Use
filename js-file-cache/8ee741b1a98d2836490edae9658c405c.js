var ErrFuncs;
(function (n) {
  function i(n, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    t("Error", n, i, r);
  }
  function r(n, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    t("Warning", n, i, r);
  }
  function t(n, t, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var u, f;
    if (r ? (u = cc11001100_hook("u", r, "assign"), u.message += cc11001100_hook("u.message", " " + t, "assign")) : u = cc11001100_hook("u", new Error(t), "assign"), u.extra = cc11001100_hook("u.extra", "manualError", "assign"), i && (u.extra += cc11001100_hook("u.extra", " " + i, "assign")), u.severity = cc11001100_hook("u.severity", n, "assign"), f = cc11001100_hook("f", _w.jsErrorHandler, "assign"), f) f(u);else throw u;
  }
  n.LogError = cc11001100_hook("n.LogError", i, "assign");
  n.LogWarning = cc11001100_hook("n.LogWarning", r, "assign");
})(ErrFuncs || (ErrFuncs = cc11001100_hook("ErrFuncs", {}, "assign")));
JS = cc11001100_hook("JS", {
  LogError: cc11001100_hook("LogError", ErrFuncs.LogError, "object-key-init"),
  LogWarning: cc11001100_hook("LogWarning", ErrFuncs.LogWarning, "object-key-init")
}, "assign");
SharedLogHelper = cc11001100_hook("SharedLogHelper", {
  LogError: cc11001100_hook("LogError", ErrFuncs.LogError, "object-key-init"),
  LogWarning: cc11001100_hook("LogWarning", ErrFuncs.LogWarning, "object-key-init"),
  LogFatalError: function () {
    return null;
  },
  RegisterErrorFilter: function () {
    return null;
  }
}, "assign");