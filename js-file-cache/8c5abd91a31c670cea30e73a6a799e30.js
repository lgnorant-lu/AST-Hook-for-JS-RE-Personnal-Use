(function () {
  function i() {
    var t = cc11001100_hook("t", _ge("b_header"), "var-init");
    t && (t.classList.add("b_focus"), sj_evt.fire("sb_focus"));
    n && (typeof Log != "undefined" && Log && Log.Log && Log.Log("SpSbInteract", "AS", "PerfInst", !1), n = cc11001100_hook("n", !1, "assign"));
  }
  function r(n) {
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", _qs("#b_header .b_searchboxForm"), "var-init"),
      t = cc11001100_hook("t", sb_ie ? n ? n.srcElement : null : n.target, "var-init"),
      i;
    t && t instanceof HTMLElement && t.id != "sb_form_q" && !(r && r.contains(t)) && (i = cc11001100_hook("i", _ge("b_header"), "assign"), i && (i.classList.remove("b_focus"), sj_evt.fire("sb_blur")));
  }
  var t = cc11001100_hook("t", _ge("sb_form_q"), "var-init"),
    n = cc11001100_hook("n", !0, "var-init");
  sj_be(t, "focus", i);
  sj_be(_d.body, "click", r);
})();