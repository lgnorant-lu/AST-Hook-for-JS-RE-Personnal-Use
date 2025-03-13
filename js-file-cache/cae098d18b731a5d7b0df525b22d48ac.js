var __spreadArray = cc11001100_hook("__spreadArray", this && this.__spreadArray || function (n, t, i) {
    if (i || arguments.length === 2) for (var r = cc11001100_hook("r", 0, "var-init"), f = cc11001100_hook("f", t.length, "var-init"), u; r < f; r++) !u && r in t || (u || (u = cc11001100_hook("u", Array.prototype.slice.call(t, 0, r), "assign")), u[r] = cc11001100_hook("u[r]", t[r], "assign"));
    return n.concat(u || Array.prototype.slice.call(t));
  }, "var-init"),
  SHwlochelper;
(function (n) {
  function e(n, t, i, u, f) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    r(n.coords.latitude, n.coords.longitude, n.coords.accuracy, t, i, u, f);
  }
  function r(t, r, u, e, o, s, h) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var c = cc11001100_hook("c", n.sF(f, t, r, u), "var-init");
    c += cc11001100_hook("c", "&sid=" + e, "assign");
    i(c, n.logEventTypeDev, "DeviceLocation", o, s, h);
  }
  function o(t, r, f, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var o = cc11001100_hook("o", u + "&sid=" + t, "var-init");
    i(o, n.logEventTypeDev, "Block", r, f, e);
  }
  function i(n, i, r, u, f, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    n += cc11001100_hook("n", "&clientsid=" + _G.SID, "assign");
    var o = cc11001100_hook("o", sj_gx(), "var-init");
    o.open("GET", n, !0);
    t(i, u, "try" + r);
    o.onreadystatechange = cc11001100_hook("o.onreadystatechange", function () {
      var n, s;
      o.readyState === 4 && (o.status === 200 ? (o.responseText && (s = cc11001100_hook("s", (n = cc11001100_hook("n", _ge("PromptDetails"), "assign")) !== null && n !== void 0 ? n : _d.body, "assign"), s && (sj_appHTML(s, o.responseText), _w.rms && _w.rms.start())), t(i, u, r + "Success"), typeof f == "function" && f()) : (t(i, u, r + "Failure"), typeof e == "function" && e()));
    }, "assign");
    o.send();
  }
  function t(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var u = cc11001100_hook("u", [], "var-init"), r = cc11001100_hook("r", 3, "var-init"); r < arguments.length; r++) u[r - 3] = cc11001100_hook("u[r - 3]", arguments[r], "assign");
    Log && Log.Log && Log.Log.apply(Log, __spreadArray([n, t, i, !0], u, !1));
  }
  n.logEventTypeDev = cc11001100_hook("n.logEventTypeDev", "DevLoc", "assign");
  var u = cc11001100_hook("u", "/geolocation/write?isBlocked=true", "var-init"),
    f = cc11001100_hook("f", "/geolocation/write?isDevLoc=true&lat={0}&lon={1}&acc={2}", "var-init");
  n.writeDeviceLocation = cc11001100_hook("n.writeDeviceLocation", e, "assign");
  n.writeDeviceLocationValues = cc11001100_hook("n.writeDeviceLocationValues", r, "assign");
  n.writeBlockLocation = cc11001100_hook("n.writeBlockLocation", o, "assign");
  n.setCookieHelper = cc11001100_hook("n.setCookieHelper", i, "assign");
  n.sF = cc11001100_hook("n.sF", function (n) {
    for (var i = cc11001100_hook("i", [], "var-init"), t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) i[t - 1] = cc11001100_hook("i[t - 1]", arguments[t], "assign");
    return n.replace(/{(\d+)}/g, function (n, t) {
      return typeof i[t] != "undefined" ? i[t] : n;
    });
  }, "assign");
  n.log = cc11001100_hook("n.log", t, "assign");
})(SHwlochelper || (SHwlochelper = cc11001100_hook("SHwlochelper", {}, "assign")));