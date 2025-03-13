var SearchBox;
(function (n) {
  function u() {
    t = cc11001100_hook("t", _ge("b_header"), "assign");
    sj_be(_d.body, "click", i);
  }
  function i(n) {
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", sj_et(n), "var-init");
    i.id != "sb_form_q" && (t.className = cc11001100_hook("t.className", t.className.replace(r, ""), "assign"));
  }
  var r = cc11001100_hook("r", /(^|\s)b_focus(?!\S)/gi, "var-init"),
    t;
  n.removeFocusClass = cc11001100_hook("n.removeFocusClass", i, "assign");
  sj_evt.bind("onP1", u);
})(SearchBox || (SearchBox = cc11001100_hook("SearchBox", {}, "assign")));