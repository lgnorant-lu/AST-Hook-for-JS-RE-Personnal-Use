var MsnShared;
(function (n) {
  function f(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var f, u, r;
    if (i == null) return null;
    if (i.getElementsByClassName) return i.getElementsByClassName(n);
    for (f = cc11001100_hook("f", [], "assign"), t == null && (t = cc11001100_hook("t", "*", "assign")), u = cc11001100_hook("u", i.getElementsByTagName(t), "assign"), r = cc11001100_hook("r", 0, "assign"); r < u.length; r++) (" " + u[r].className + " ").indexOf(" " + n + " ") > -1 && f.push(u[r]);
    return f;
  }
  function t(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", n.classList, "var-init");
    return i ? i.contains(t) : (" " + n.className + " ").indexOf(" " + t + " ") >= 0;
  }
  function i(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (n != null) {
      var i = cc11001100_hook("i", n.classList, "var-init");
      i ? i.remove(t) : n.className = cc11001100_hook("n.className", n.className.replace(t, ""), "assign");
    }
  }
  function r(n, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (n != null) {
      var r = cc11001100_hook("r", n.classList, "var-init");
      r ? r.add(i) : t(n, i) || (n.className += cc11001100_hook("n.className", " " + i, "assign"));
    }
  }
  function e(n) {
    cc11001100_hook("n", n, "function-parameter");
    r(n, "b_hide");
  }
  function o(n) {
    cc11001100_hook("n", n, "function-parameter");
    i(n, "b_hide");
  }
  function s() {
    return Math.max(sb_de.scrollTop, _d.body.scrollTop);
  }
  function h(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var r = cc11001100_hook("r", n && n.style, "var-init");
    r && r[t] !== i && (r[t] = cc11001100_hook("r[t]", i, "assign"));
  }
  function u(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", null, "var-init");
    return n && (t = cc11001100_hook("t", _w.getComputedStyle ? _w.getComputedStyle(n, null) : n.currentStyle, "assign")), t;
  }
  function c(n) {
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", 0, "var-init"),
      t;
    if (n && (t = cc11001100_hook("t", u(n), "assign"), t)) {
      var r = cc11001100_hook("r", parseInt(t.height), "var-init"),
        f = cc11001100_hook("f", parseInt(t.marginTop), "var-init"),
        e = cc11001100_hook("e", parseInt(t.marginBottom), "var-init");
      i = cc11001100_hook("i", isNaN(r) ? 0 : r, "assign");
      i += cc11001100_hook("i", isNaN(f) ? 0 : f, "assign");
      i += cc11001100_hook("i", isNaN(e) ? 0 : e, "assign");
    }
    return i;
  }
  function l(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var r = cc11001100_hook("r", null, "var-init");
    return n && n.parentNode && t && n.parentNode !== t && (r = cc11001100_hook("r", i ? sj_ce("span", null, i) : sj_ce("span"), "assign"), n.parentNode.replaceChild(r, n), t.appendChild(n)), r;
  }
  function a(n, i, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (n != null && i != null && r > 0) {
      for (var u = cc11001100_hook("u", n, "var-init"); u != null && !t(u, i) && r > 0;) u = cc11001100_hook("u", u.parentNode, "assign"), r--;
      if (r > 0) return u;
    }
    return null;
  }
  n.getElementsByClassName = cc11001100_hook("n.getElementsByClassName", f, "assign");
  n.hasClass = cc11001100_hook("n.hasClass", t, "assign");
  n.removeClass = cc11001100_hook("n.removeClass", i, "assign");
  n.addClass = cc11001100_hook("n.addClass", r, "assign");
  n.hide = cc11001100_hook("n.hide", e, "assign");
  n.show = cc11001100_hook("n.show", o, "assign");
  n.getScrollTop = cc11001100_hook("n.getScrollTop", s, "assign");
  n.setStyle = cc11001100_hook("n.setStyle", h, "assign");
  n.getComputedStyle = cc11001100_hook("n.getComputedStyle", u, "assign");
  n.getCssHeight = cc11001100_hook("n.getCssHeight", c, "assign");
  n.moveToNewParent = cc11001100_hook("n.moveToNewParent", l, "assign");
  n.FindParentNode = cc11001100_hook("n.FindParentNode", a, "assign");
})(MsnShared || (MsnShared = cc11001100_hook("MsnShared", {}, "assign")));