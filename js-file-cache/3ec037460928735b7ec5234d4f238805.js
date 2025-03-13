var sj_appHTML = function (n, t) {
  var f, e, o, r, i, s, h;
  if (t && n) {
    var c = cc11001100_hook("c", "innerHTML", "var-init"),
      l = cc11001100_hook("l", "script", "var-init"),
      a = cc11001100_hook("a", "appendChild", "var-init"),
      v = cc11001100_hook("v", "length", "var-init"),
      y = cc11001100_hook("y", "src", "var-init"),
      p = cc11001100_hook("p", sj_ce, "var-init"),
      u = cc11001100_hook("u", p("div"), "var-init");
    if (u[c] = cc11001100_hook("u[c]", "<br>" + t, "assign"), f = cc11001100_hook("f", u.childNodes, "assign"), u.removeChild(f[0]), e = cc11001100_hook("e", u.getElementsByTagName(l), "assign"), e) for (o = cc11001100_hook("o", 0, "assign"); o < e[v]; o++) r = cc11001100_hook("r", p(l), "assign"), i = cc11001100_hook("i", e[o], "assign"), i && (r.type = cc11001100_hook("r.type", i.type == "module" || i.type == "importmap" ? i.type : "text/javascript", "assign"), s = cc11001100_hook("s", i.getAttribute(y), "assign"), s ? (r.setAttribute(y, s), r.setAttribute("crossorigin", "anonymous")) : (r.text = cc11001100_hook("r.text", i[c], "assign"), r.setAttribute("data-bing-script", "1")), i.parentNode.replaceChild(r, i));
    for (h = cc11001100_hook("h", _d.createDocumentFragment(), "assign"); f[v];) h[a](f[0]);
    n[a](h);
  }
};