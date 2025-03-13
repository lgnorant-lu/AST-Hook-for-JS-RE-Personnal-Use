var __spreadArray = cc11001100_hook("__spreadArray", this && this.__spreadArray || function (n, t, i) {
    if (i || arguments.length === 2) for (var r = cc11001100_hook("r", 0, "var-init"), f = cc11001100_hook("f", t.length, "var-init"), u; r < f; r++) !u && r in t || (u || (u = cc11001100_hook("u", Array.prototype.slice.call(t, 0, r), "assign")), u[r] = cc11001100_hook("u[r]", t[r], "assign"));
    return n.concat(u || Array.prototype.slice.call(t));
  }, "var-init"),
  LightLogger;
(function (n) {
  function i(n, t, i, r, u) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    var e, f;
    if (u = cc11001100_hook("u", u || {}, "assign"), u.FID = cc11001100_hook("u.FID", "ModernRewardsFlyout", "assign"), u.EventName = cc11001100_hook("u.EventName", i, "assign"), _w && _w.Log2 && Log2.LogEvent && _G.XLS) Log2.LogEvent("ClientInst", u, t), Log2.ForceFlush && r && Log2.ForceFlush(!0);else if (_w && _w.Log && Log.Log) {
      if (e = cc11001100_hook("e", ["Fallback", "1"], "assign"), u && u.hasOwnProperty) for (f in u) u.hasOwnProperty(f) && (e.push(f ? f.toString() : ""), e.push(u[f] ? u[f].toString() : ""));
      Log.Log.apply(Log, __spreadArray([t, "ModernRewardsFlyout", i, r], e, !1));
    }
  }
  var t;
  (function (n) {
    n.Click = cc11001100_hook("n.Click", "Click", "assign");
    n.Init = cc11001100_hook("n.Init", "Init", "assign");
    n.Load = cc11001100_hook("n.Load", "Load", "assign");
    n.Success = cc11001100_hook("n.Success", "Success", "assign");
    n.Error = cc11001100_hook("n.Error", "Error", "assign");
  })(t = cc11001100_hook("t", n.InstrumentationEventType || (n.InstrumentationEventType = cc11001100_hook("n.InstrumentationEventType", {}, "assign")), "assign"));
  n.logInstrumentationV2 = cc11001100_hook("n.logInstrumentationV2", i, "assign");
})(LightLogger || (LightLogger = cc11001100_hook("LightLogger", {}, "assign")));