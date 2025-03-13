var Feedback;
(function (n) {
  var t;
  (function () {
    "use strict";

    function e(t, i) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var r = cc11001100_hook("r", t.getAttribute("id"), "var-init"),
        u;
      r || (r = cc11001100_hook("r", "genId" + n.length, "assign"), t.setAttribute("id", r));
      u = cc11001100_hook("u", new f(r, i, t.getAttribute(i)), "assign");
      n.push(u);
    }
    function i(n, t, i) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      i === null ? n.removeAttribute(t) : n.setAttribute(t, i);
    }
    function t(n, t, r, u) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("u", u, "function-parameter");
      for (var f, s = cc11001100_hook("s", _d.querySelectorAll(r), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < s.length; o++) (f = cc11001100_hook("f", s[o], "assign"), u && f.id && u[f.id]) || (e(f, n), i(f, n, t));
    }
    function o(n) {
      cc11001100_hook("n", n, "function-parameter");
      for (var u = cc11001100_hook("u", _d.querySelectorAll(n), "var-init"), e = cc11001100_hook("e", 1, "var-init"), f = cc11001100_hook("f", {}, "var-init"), t, i, r = cc11001100_hook("r", 0, "var-init"); r < u.length; ++r) {
        if (t = cc11001100_hook("t", u[r], "assign"), !t.id) {
          for (;;) if (i = cc11001100_hook("i", "fbpgdgelem".concat(e++), "assign"), !_ge(i)) break;
          t.id = cc11001100_hook("t.id", i, "assign");
        }
        f[t.id] = cc11001100_hook("f[t.id]", t, "assign");
      }
      return f;
    }
    function r() {
      var i = cc11001100_hook("i", "tabindex", "var-init"),
        r = cc11001100_hook("r", "-1", "var-init"),
        n = cc11001100_hook("n", o("#fbpgdg, #fbpgdg *"), "var-init");
      t(i, r, "div", n);
      t(i, r, "svg", n);
      t(i, r, "a", n);
      t(i, r, "li", n);
      t(i, r, "input", n);
      t(i, r, "select", n);
      t("aria-hidden", "true", "body :not(script):not(style)", n);
    }
    function u() {
      var t, f;
      for (sj_evt.unbind("ajax.feedback.init", r), sj_evt.unbind("ajax.feedback.cleanup", u), t = cc11001100_hook("t", 0, "assign"); t < n.length; t++) f = cc11001100_hook("f", _d.getElementById(n[t].id), "assign"), f && i(f, n[t].attributeName, n[t].originalAttributeValue);
      n.length = cc11001100_hook("n.length", 0, "assign");
    }
    var n = cc11001100_hook("n", [], "var-init"),
      f = cc11001100_hook("f", function () {
        function n(n, t, i) {
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          this.id = cc11001100_hook("this.id", n, "assign");
          this.attributeName = cc11001100_hook("this.attributeName", t, "assign");
          this.originalAttributeValue = cc11001100_hook("this.originalAttributeValue", i, "assign");
        }
        return n;
      }(), "var-init");
    sj_evt.bind("ajax.feedback.init", r);
    sj_evt.bind("ajax.feedback.cleanup", u);
  })(t = cc11001100_hook("t", n.Accessibility || (n.Accessibility = cc11001100_hook("n.Accessibility", {}, "assign")), "assign"));
})(Feedback || (Feedback = cc11001100_hook("Feedback", {}, "assign")));