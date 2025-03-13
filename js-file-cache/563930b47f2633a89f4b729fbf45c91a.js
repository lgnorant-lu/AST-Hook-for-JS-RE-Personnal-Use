var SwitchTabV2;
(function () {
  function c() {
    return typeof Log != "undefined" && Log !== null && typeof Log.Log != "undefined";
  }
  function l() {
    r = cc11001100_hook("r", "0", "assign");
    sj_cook.set(f, e, r, !1, "/");
    c() && Log.Log("DHTMLClick", "EnglishSearch_SwitchTab", "SwitchToChinese", !1);
    var n = cc11001100_hook("n", EnglishSearchShared.RemoveParameter(o), "var-init");
    n = cc11001100_hook("n", EnglishSearchShared.SetFormCode(n, s), "assign");
    _w.location.search = cc11001100_hook("_w.location.search", n, "assign");
  }
  function a() {
    r = cc11001100_hook("r", "1", "assign");
    sj_cook.set(f, e, r, !1, "/");
    c() && Log.Log("DHTMLClick", "EnglishSearch_SwitchTab", "SwitchToEnglish", !1);
    var n = cc11001100_hook("n", EnglishSearchShared.SetParameter(o, "1"), "var-init");
    n = cc11001100_hook("n", EnglishSearchShared.SetFormCode(n, s), "assign");
    _w.location.href = cc11001100_hook("_w.location.href", n, "assign");
  }
  function v() {
    n && t && Lib.CssClass.add(u, h);
  }
  function y() {
    n && t && Lib.CssClass.remove(u, h);
  }
  function p() {
    t = cc11001100_hook("t", _ge("est_en"), "assign");
    n = cc11001100_hook("n", _ge("est_cn"), "assign");
    u = cc11001100_hook("u", _ge("est_switch"), "assign");
    var r = cc11001100_hook("r", _ge("sb_form"), "var-init"),
      s = cc11001100_hook("s", r && Lib.CssClass.getElementByClassName(r, "b_searchboxForm"), "var-init");
    (i = cc11001100_hook("i", s.length > 0 ? s[0] : null, "assign"), typeof EnglishSearchShared != "undefined" && t && n) && (i && (sj_be(i, "mouseover", v), sj_be(i, "mouseout", y)), EnglishSearchShared.SetCookieByUrlParameter(o, f, e, !1), sj_be(t, "click", function () {
      a();
    }), sj_be(t, "keyup", function (n) {
      n.keyCode === 13 && a();
    }), sj_be(n, "click", function () {
      l();
    }), sj_be(n, "keyup", function (n) {
      n.keyCode === 13 && l();
    }));
  }
  var u,
    n,
    t,
    i,
    f = cc11001100_hook("f", "ENSEARCH", "var-init"),
    e = cc11001100_hook("e", "BENVER", "var-init"),
    r,
    o = cc11001100_hook("o", "ensearch", "var-init"),
    s = cc11001100_hook("s", "BESBTB", "var-init"),
    h = cc11001100_hook("h", "est_sb_hover", "var-init");
  p();
})(SwitchTabV2 || (SwitchTabV2 = cc11001100_hook("SwitchTabV2", {}, "assign")));