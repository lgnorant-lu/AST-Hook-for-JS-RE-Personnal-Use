var UrlLib;
(function (n) {
  function t(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var e = cc11001100_hook("e", n.toLowerCase(), "var-init"),
      o = cc11001100_hook("o", t.toLowerCase(), "var-init"),
      u = cc11001100_hook("u", "&" + o + "=", "var-init"),
      r = cc11001100_hook("r", e.indexOf(u, 0), "var-init"),
      f;
    return (r < 0 && (u = cc11001100_hook("u", "?" + o + "=", "assign"), r = cc11001100_hook("r", e.indexOf(u, 0), "assign")), r >= 0) ? (f = cc11001100_hook("f", n.indexOf("&", r + 1), "assign"), f == -1 && (f = cc11001100_hook("f", n.length, "assign")), n.replace(n.substring(r + u.length, f), i)) : _w.location.hash ? n.substring(0, n.indexOf(_w.location.hash)).concat(n.indexOf("?") < 0 ? "?" : "&", t, "=", i) + _w.location.hash : n.concat(n.indexOf("?") < 0 ? "?" : "&", t, "=", i);
  }
  n.AddParam = cc11001100_hook("n.AddParam", t, "assign");
})(UrlLib || (UrlLib = cc11001100_hook("UrlLib", {}, "assign")));