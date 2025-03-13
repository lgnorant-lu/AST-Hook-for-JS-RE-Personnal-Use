var Lib;
(function (n) {
  var t;
  (function (n) {
    function t(n) {
      cc11001100_hook("n", n, "function-parameter");
      return n && n.classList;
    }
    function i(n, i) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      t(n) && n.classList.add(i);
    }
    function r(n, i) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      t(n) && n.classList.remove(i);
    }
    function u(n, i) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      t(n) && n.classList.toggle(i);
    }
    function f(n, i) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      return t(n) && n.classList.contains(i);
    }
    function e(n, t) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return n.getElementsByClassName ? n.getElementsByClassName(t) : null;
    }
    function o(n) {
      cc11001100_hook("n", n, "function-parameter");
      return n instanceof SVGElement ? n.getAttribute("class") : n.className;
    }
    n.add = cc11001100_hook("n.add", i, "assign");
    n.remove = cc11001100_hook("n.remove", r, "assign");
    n.toggle = cc11001100_hook("n.toggle", u, "assign");
    n.contains = cc11001100_hook("n.contains", f, "assign");
    n.getElementByClassName = cc11001100_hook("n.getElementByClassName", e, "assign");
    n.getClassAttribute = cc11001100_hook("n.getClassAttribute", o, "assign");
  })(t = cc11001100_hook("t", n.CssClass || (n.CssClass = cc11001100_hook("n.CssClass", {}, "assign")), "assign"));
})(Lib || (Lib = cc11001100_hook("Lib", {}, "assign")));