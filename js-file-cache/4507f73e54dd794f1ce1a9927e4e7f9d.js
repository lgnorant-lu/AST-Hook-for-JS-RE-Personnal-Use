var EnglishSearchShared;
(function (n) {
  function r(n, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var e = cc11001100_hook("e", !1, "var-init"),
      o = cc11001100_hook("o", _w.location.href.split("?"), "var-init"),
      r,
      u,
      f,
      s,
      h;
    if (o.length == 1 || o[1] == "") return t(_w.location.href, n, "1");
    if (r = cc11001100_hook("r", _w.location.search.replace("?", ""), "assign"), u = cc11001100_hook("u", r.split("&"), "assign"), u) {
      for (r = cc11001100_hook("r", o[0] + "?", "assign"), f = cc11001100_hook("f", 0, "assign"); f < u.length; f++) if (s = cc11001100_hook("s", u[f], "assign"), s.split("=")[0].toLowerCase() === n) {
        if (e) continue;
        r = cc11001100_hook("r", r + n + "=" + i + "&", "assign");
        e = cc11001100_hook("e", !0, "assign");
      } else r = cc11001100_hook("r", r + s + "&", "assign");
      h = cc11001100_hook("h", r.substring(r.length - 1), "assign");
      h == "&" && (r = cc11001100_hook("r", r.substring(0, r.length - 1), "assign"));
    }
    return e ? r : t(_w.location.href, n, "1");
  }
  function t(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var u = cc11001100_hook("u", n.substring(n.length - 1), "var-init"),
      r = cc11001100_hook("r", t + "=" + i, "var-init");
    return n.indexOf("?") < 0 ? n + "?" + r : u == "?" ? n + r : n + "&" + r;
  }
  function u(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", _w.location.search.replace("?", ""), "var-init"),
      r = cc11001100_hook("r", t.split("&"), "var-init"),
      i,
      u,
      f;
    if (r) {
      for (t = cc11001100_hook("t", "?", "assign"), i = cc11001100_hook("i", 0, "assign"); i < r.length; i++) u = cc11001100_hook("u", r[i], "assign"), u.split("=")[0].toLowerCase() !== n && (t = cc11001100_hook("t", t + u + "&", "assign"));
      return f = cc11001100_hook("f", t.substring(t.length - 1), "assign"), f == "&" && (t = cc11001100_hook("t", t.substring(0, t.length - 1), "assign")), t;
    }
    return "";
  }
  function i(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var f = cc11001100_hook("f", null, "var-init"),
      e = cc11001100_hook("e", n.replace("?", ""), "var-init"),
      r = cc11001100_hook("r", e.split("&"), "var-init"),
      i,
      u;
    if (r) for (i = cc11001100_hook("i", 0, "assign"); i < r.length; i++) if (u = cc11001100_hook("u", r[i], "assign"), u.split("=")[0].toLowerCase() === t.toLowerCase()) {
      f = cc11001100_hook("f", u.split("=")[1], "assign");
      break;
    }
    return f;
  }
  function f(n, t, r, u) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    var e = cc11001100_hook("e", i(_w.location.search, n), "var-init"),
      f = cc11001100_hook("f", "", "var-init");
    e == "1" ? (f = cc11001100_hook("f", "1", "assign"), sj_cook.set(t, r, f, u, "/")) : e != null && (f = cc11001100_hook("f", "0", "assign"), sj_cook.set(t, r, f, u, "/"));
  }
  function e(n, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (_w.location.search.match(/form=/i)) {
      var u = cc11001100_hook("u", i(_w.location.search, "form"), "var-init"),
        f = cc11001100_hook("f", new RegExp("form=" + u, "gi"), "var-init");
      return n.replace(f, "FORM=" + r);
    }
    return t(n, "FORM", r);
  }
  n.SetParameter = cc11001100_hook("n.SetParameter", r, "assign");
  n.RemoveParameter = cc11001100_hook("n.RemoveParameter", u, "assign");
  n.SetCookieByUrlParameter = cc11001100_hook("n.SetCookieByUrlParameter", f, "assign");
  n.SetFormCode = cc11001100_hook("n.SetFormCode", e, "assign");
})(EnglishSearchShared || (EnglishSearchShared = cc11001100_hook("EnglishSearchShared", {}, "assign")));