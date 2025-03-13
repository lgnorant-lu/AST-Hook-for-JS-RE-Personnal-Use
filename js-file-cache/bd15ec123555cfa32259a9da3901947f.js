var SHlochelper;
(function (n) {
  function t(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var u = cc11001100_hook("u", n.split("?"), "var-init"),
      f,
      i,
      r;
    if (u.length >= 2) {
      for (f = cc11001100_hook("f", encodeURIComponent(t) + "=", "assign"), i = cc11001100_hook("i", u[1].split(/[&]/g), "assign"), r = cc11001100_hook("r", i.length - 1, "assign"); r >= 0; r--) i[r].lastIndexOf(f, 0) !== -1 && i.splice(r, 1);
      return u[0] + (i.length > 0 ? "?" + i.join("&") : "");
    }
    return n;
  }
  function i(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (n) {
      for (var t = cc11001100_hook("t", _w, "var-init"), i = cc11001100_hook("i", n.split("."), "var-init"), u = cc11001100_hook("u", i.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"); t && r < u;) t = cc11001100_hook("t", t[i[r++]], "assign");
      return t;
    }
    return null;
  }
  n.promptDetailsName = cc11001100_hook("n.promptDetailsName", "PromptDetails", "assign");
  n.rLocPar = cc11001100_hook("n.rLocPar", function (n) {
    var i = cc11001100_hook("i", t(n, "location"), "var-init");
    return i = cc11001100_hook("i", t(i, "pivotEntityName"), "assign"), t(i, "ypid");
  }, "assign");
  n.ge_fcl = cc11001100_hook("n.ge_fcl", function (n, t) {
    var i = cc11001100_hook("i", ge_cl(n, t), "var-init");
    return i && i.length > 0 ? i[0] : null;
  }, "assign");
  n.sc = cc11001100_hook("n.sc", function (n, t, i, r, u, f, e, o, s) {
    function h() {
      o && sj_evt.fire("LocChangerClose_" + o);
    }
    if (i !== null) switch (i) {
      case 0:
        SHwlochelper.writeDeviceLocation(n, s, f, e, h);
        break;
      case 1:
        SHwlochelper.writeBlockLocation(s, f, e, h);
        break;
      default:
        SHwlochelper.setCookieHelper(t, r, u, f, e, h);
    }
  }, "assign");
  n.sEM = cc11001100_hook("n.sEM", function (t, i) {
    var r, u, s;
    if (t && (r = cc11001100_hook("r", _ge(t), "assign"), r)) {
      var e = cc11001100_hook("e", n.ge_fcl(r, "g_neg"), "var-init"),
        o = cc11001100_hook("o", n.ge_fcl(r, "g_pos"), "var-init"),
        f = cc11001100_hook("f", n.ge_fcl(r, "g_allow"), "var-init");
      e && o && f && (sa_cl(e, "b_hide", !1), sa_cl(o, "b_hide", !0), sa_cl(f, "dis", !0), u = cc11001100_hook("u", f.getElementsByTagName("input"), "assign"), u && u.length > 0 && (u[0].tabIndex = cc11001100_hook("u[0].tabIndex", -1, "assign")));
      s = cc11001100_hook("s", n.ge_fcl(r, "g_exp"), "assign");
      s.className.indexOf("rot") === -1 && sj_evt.fire("locChangerExpand_" + t, i);
    }
  }, "assign");
  n.rP = cc11001100_hook("n.rP", function (t, i) {
    var r = cc11001100_hook("r", UrlLib.AddParam(location.href, "isRef", "1"), "var-init");
    r = cc11001100_hook("r", UrlLib.AddParam(r, "showTw", "1"), "assign");
    i && (r = cc11001100_hook("r", UrlLib.AddParam(r, "isAutoP", "1"), "assign"));
    r = cc11001100_hook("r", n.rLocPar(r), "assign");
    t && (r = cc11001100_hook("r", UrlLib.AddParam(r, "form", t), "assign"));
    location.href = cc11001100_hook("location.href", r, "assign");
  }, "assign");
  n.parseFunction = cc11001100_hook("n.parseFunction", i, "assign");
})(SHlochelper || (SHlochelper = cc11001100_hook("SHlochelper", {}, "assign")));