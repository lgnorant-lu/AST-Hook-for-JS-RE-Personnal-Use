(function () {
  function a() {
    Log.LogFilterFlare(["hovorig"]);
  }
  function s(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var t = cc11001100_hook("t", sj_et(n), "var-init"), i, r; t != null && t.tagName != null;) {
      if (t.tagName.toLowerCase() == "a") {
        if (Lib.CssClass.contains(t, "b_hovlink")) return;
        if (i = cc11001100_hook("i", t.getAttribute("href"), "assign"), !i || i.indexOf(".bing.com/ck") < 0 && i.indexOf(".bing.com/ac") < 0 && i.indexOf(".bing.com/clk") < 0) return;
        if (r = cc11001100_hook("r", "", "assign"), !t.hasAttribute("hover-url") && (r = cc11001100_hook("r", w(i), "assign"), r != i)) {
          Log.LogFilterFlare(["hovorig"]);
          return;
        }
        break;
      }
      t = cc11001100_hook("t", t.parentNode, "assign");
    }
  }
  function w(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", b(n, "u"), "var-init");
    if (!t) return n;
    try {
      return t.startsWith("a1") && (t = cc11001100_hook("t", t.substring(2), "assign")), t = cc11001100_hook("t", t.replace(/_/g, "/").replace(/-/g, "+"), "assign"), t = cc11001100_hook("t", decodeURIComponent(atob(t)), "assign");
    } catch (i) {
      return Log.Log("EnLink", n, t, !1), n;
    }
  }
  function b(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", new RegExp("[?&]{1}" + t + "=([^&]+)([\\/\\\\][^?#]*)?([?#].*)?", "i"), "var-init"),
      i = cc11001100_hook("i", n.match(r), "var-init");
    return i ? i[1] : "";
  }
  for (var i, r, u, f, e, o, t = cc11001100_hook("t", _d.getElementsByTagName("a"), "var-init"), v = cc11001100_hook("v", ((i = cc11001100_hook("i", _G === null || _G === void 0 ? void 0 : _G.EF, "assign")) === null || i === void 0 ? void 0 : i.hoverlinkoriginal) === 1, "var-init"), y = cc11001100_hook("y", ((r = cc11001100_hook("r", _G === null || _G === void 0 ? void 0 : _G.EF, "assign")) === null || r === void 0 ? void 0 : r.copylinkoriginal) === 1, "var-init"), h = cc11001100_hook("h", ((u = cc11001100_hook("u", _G === null || _G === void 0 ? void 0 : _G.EF, "assign")) === null || u === void 0 ? void 0 : u.nobackonright) === 1, "var-init"), c = cc11001100_hook("c", ((f = cc11001100_hook("f", _G === null || _G === void 0 ? void 0 : _G.EF, "assign")) === null || f === void 0 ? void 0 : f.algonobackonright) === 1, "var-init"), l = cc11001100_hook("l", ((e = cc11001100_hook("e", _G === null || _G === void 0 ? void 0 : _G.EF, "assign")) === null || e === void 0 ? void 0 : e.nobackonmiddle) === 1, "var-init"), p = cc11001100_hook("p", ((o = cc11001100_hook("o", _G === null || _G === void 0 ? void 0 : _G.EF, "assign")) === null || o === void 0 ? void 0 : o.algonobackonmiddle) === 1, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) typeof t[n] != "undefined" && t[n].hasAttribute("href") && (t[n].getAttribute("href").indexOf(".bing.com/ck") >= 0 || t[n].getAttribute("href").indexOf(".bing.com/ac") >= 0 || t[n].getAttribute("href").indexOf(".bing.com/clk") >= 0) && (v && sj_be(t[n], "mouseenter", s), y && (t[n].getAttribute("href").indexOf(".bing.com/ck/a") >= 0 ? ((p || c) && sj_be(t[n], "mousedown", function (n) {
    n.button == 1 && s(n);
  }), c && sj_be(t[n], "contextmenu", s)) : (l || h) && (h && sj_be(t[n], "contextmenu", a), l && sj_be(t[n], "mousedown", function (n) {
    n.button == 1 && a(n);
  }))));
})();