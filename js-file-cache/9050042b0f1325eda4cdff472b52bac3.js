(function () {
  function e() {
    r = cc11001100_hook("r", !1, "assign");
    u = cc11001100_hook("u", !1, "assign");
    var e = cc11001100_hook("e", _ge("scope_tools_wrapper"), "var-init"),
      o = cc11001100_hook("o", _ge("b_tween_searchResults"), "var-init"),
      h = cc11001100_hook("h", _ge("b_tween_searchTools"), "var-init"),
      s = cc11001100_hook("s", _ge("b_tween"), "var-init"),
      c = cc11001100_hook("c", _ge("b_topw"), "var-init");
    e && h && s && (u = cc11001100_hook("u", Lib.CssClass.contains(s, i), "assign"), Lib.CssClass.contains(h, "b_hide") || (n(e, "active"), r = cc11001100_hook("r", !0, "assign")), t(e, "b_hide"), sj_be(e, "click", function () {
      r ? (!o && c && n(s, i), _w.sj_log && sj_log(f, "hideTools", "1"), t(e, "active"), n(h, "b_hide"), o && t(o, "b_hide"), u && n(s, i)) : (!o && c && t(s, i), _w.sj_log && sj_log(f, "showTools", "1"), n(e, "active"), t(h, "b_hide"), o && n(o, "b_hide"), u && t(s, i));
      r = cc11001100_hook("r", !r, "assign");
    }));
  }
  var i = cc11001100_hook("i", "b_hidetoggletween", "var-init"),
    f = cc11001100_hook("f", "CI.tweenToggle", "var-init"),
    n = cc11001100_hook("n", Lib.CssClass.add, "var-init"),
    t = cc11001100_hook("t", Lib.CssClass.remove, "var-init"),
    r,
    u;
  e();
  sj_evt.bind("ajax.load", e);
})();