!function () {
  "use strict";

  var t,
    e,
    u = cc11001100_hook("u", new RegExp(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/), "var-init"),
    n = cc11001100_hook("n", navigator.userAgent.match(/MSIE (\d+)|Trident[^\)]+rv:(\d+)/i), "var-init"),
    r = cc11001100_hook("r", n ? Number(n[1] || n[2]) : NaN, "var-init"),
    n = function () {
      var e = cc11001100_hook("e", document.getElementsByTagName("script"), "var-init");
      if (e.length) for (var t = cc11001100_hook("t", e.length - 1, "var-init"); 0 <= t; t--) if ("LA-DATA-WIDGET" === e[t].getAttribute("id")) return e[t];
      return null;
    },
    v = function (e, t) {
      return t = cc11001100_hook("t", t || null, "assign"), o(document.createElement(e), t);
    },
    o = function (e, t) {
      if (t = cc11001100_hook("t", t || null, "assign"), "function" == typeof e.style.setProperty && 9 !== r) {
        if (e.style.setProperty("box-sizing", "border-box", "important"), e.style.setProperty("margin", "0", "important"), e.style.setProperty("margin-top", "0", "important"), e.style.setProperty("margin-left", "0", "important"), e.style.setProperty("margin-bottom", "0", "important"), e.style.setProperty("margin-right", "0", "important"), e.style.setProperty("font-size", "12px", "important"), e.style.setProperty("line-height", "1.71428em", "important"), e.style.setProperty("color", "#333", "important"), t) for (var n in t) e.style.setProperty(n.replace(/([A-Z])/g, "-$1").toLowerCase(), String(t[n]), "important");
      } else if (e.style.boxSizing = cc11001100_hook("e.style.boxSizing", "border-box", "assign"), e.style.margin = cc11001100_hook("e.style.margin", "0 0 0 0", "assign"), e.style.marginTop = cc11001100_hook("e.style.marginTop", "0", "assign"), e.style.marginLeft = cc11001100_hook("e.style.marginLeft", "0", "assign"), e.style.marginBottom = cc11001100_hook("e.style.marginBottom", "0", "assign"), e.style.marginRight = cc11001100_hook("e.style.marginRight", "0", "assign"), e.style.fontSize = cc11001100_hook("e.style.fontSize", "12px", "assign"), e.style.lineHeight = cc11001100_hook("e.style.lineHeight", "1.71428em", "assign"), e.style.color = cc11001100_hook("e.style.color", "#333", "assign"), t) for (var o in t) e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
      return e;
    },
    x = cc11001100_hook("x", {
      isNaN: cc11001100_hook("isNaN", (t = cc11001100_hook("t", function (e) {
        return Number.isNaN ? Number.isNaN(e) : isNaN(e);
      }, "assign"), a.toString = cc11001100_hook("a.toString", function () {
        return t.toString();
      }, "assign"), a), "object-key-init")
    }, "var-init"),
    z = function (e) {
      if (void 0 === e) return 0;
      e = cc11001100_hook("e", String(e).split("."), "assign");
      return 1e8 <= parseInt(e[0], 10) ? "".concat((e[0] / 1e8).toFixed(2), "亿") : "".concat(String(e[0]).replace(/\d{1,3}(?=(\d{3})+$)/g, function (e) {
        return "".concat(e, ",");
      })).concat(e[1] ? "." : "").concat(e[1] ? "".concat(e[1]).substring(0, 2) : "");
    },
    i = cc11001100_hook("i", String("true"), "var-init"),
    b = cc11001100_hook("b", [["ol"], ["t", "u"], ["t", "p"], ["y", "u"], ["y", "p"], ["m", "p"], ["tl", "p"]], "var-init"),
    N = cc11001100_hook("N", {
      ol: cc11001100_hook("ol", "最近活跃访客", "object-key-init"),
      t: cc11001100_hook("t", "今日", "object-key-init"),
      y: cc11001100_hook("y", "昨日", "object-key-init"),
      m: cc11001100_hook("m", "本月", "object-key-init"),
      tl: cc11001100_hook("tl", "总", "object-key-init"),
      i: cc11001100_hook("i", "访问人数", "object-key-init"),
      p: cc11001100_hook("p", "访问量", "object-key-init"),
      u: cc11001100_hook("u", "访问人数", "object-key-init"),
      tt: cc11001100_hook("tt", "网站数据概况", "object-key-init")
    }, "var-init"),
    y = cc11001100_hook("y", {
      themeColor: cc11001100_hook("themeColor", ["#1690FF", "#FD6591", "#33D279", "#FFA233", "#B880F5"], "object-key-init"),
      titleColor: cc11001100_hook("titleColor", "#333", "object-key-init"),
      color: cc11001100_hook("color", "#999", "object-key-init"),
      numberColor: cc11001100_hook("numberColor", "#333", "object-key-init"),
      backgroundColor: cc11001100_hook("backgroundColor", "#fff", "object-key-init"),
      fontSize: cc11001100_hook("fontSize", 12, "object-key-init")
    }, "var-init"),
    S = cc11001100_hook("S", ["borderColor", "titleColor", "color", "numberColor", "backgroundColor", "iconColor", "fontSize"], "var-init"),
    C = cc11001100_hook("C", ['<svg width="70" height="13" viewBox="0 0 70 15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n<path d="M54.794 4.286l.385 4.5 3.99-4.5h4.375l-8.75 10.5H52.64V4.903H51.43v-.617h3.365zm12.748 0c.95 0 1.649.206 2.098.618.45.412.484 1.101.103 2.068h-2.418l.043-.107c.092-.234.093-.412.003-.534a.524.524 0 0 0-.37-.214.109.109 0 0 0-.052-.015h-.116a.191.191 0 0 0-.064.015c-.196.02-.402.102-.618.244a1.261 1.261 0 0 0-.481.61l-.603 1.527c.285-.163.612-.298.98-.405.367-.106.722-.16 1.065-.16.044 0 .09.003.137.008.048.005.099.008.154.008.495.06.866.323 1.114.785.247.464.155 1.244-.28 2.343l-.084.214c-.418 1.058-1 1.905-1.748 2.54-.748.637-1.701.955-2.86.955-.077 0-.15-.003-.22-.008a3.042 3.042 0 0 0-.22-.008c-.683-.06-1.236-.297-1.658-.71-.422-.411-.434-1.12-.037-2.128l1.916-4.853c.382-.967.962-1.674 1.74-2.122a4.89 4.89 0 0 1 2.476-.671zm-1.99 4.772c-.279 0-.506.17-.681.506-.176.337-.344.79-.504 1.36-.17.604-.265 1.067-.282 1.386-.019.32.081.509.298.567a.988.988 0 0 0 .756-.34c.208-.227.431-.764.67-1.613.16-.57.242-1.023.248-1.36.005-.337-.164-.506-.505-.506z" id="a" fill="${color}"/>\n</defs>\n<g>\n<path d="M21.842 12.002c-.842 0-1.524.67-1.524 1.499 0 .828.682 1.499 1.524 1.499s1.524-.671 1.524-1.5c0-.827-.682-1.498-1.524-1.498zM28.439 0H25.39v14.992h7.944l1.17-2.998H28.44V0zm14.456.61c-.323-.813-1.492-.813-1.815 0l-5.7 14.382h3.285l3.322-8.38 3.322 8.38h3.287L42.895.61zM15.242 14.992h3.048V0h-3.048v14.992zM12.193 0H0v2.998h10.983L12.193 0zM8.151 4.997H0v2.999h8.15c1.121 0 2.033.896 2.033 1.999 0 1.102-.912 1.999-2.032 1.999H1.195L0 14.992h8.15c2.803 0 5.082-2.242 5.082-4.997 0-2.756-2.28-4.998-5.081-4.998z" fill="${color}"/><use xlink:href="#a" fill="${color}"/>\n</g>\n</svg>', '<svg width="72" height="13" viewBox="0 0 70 15" xmlns="http://www.w3.org/2000/svg">\n<g fill="none" fill-rule="evenodd">\n<path d="M21.842 12.002c-.842 0-1.524.67-1.524 1.499 0 .828.682 1.499 1.524 1.499s1.524-.671 1.524-1.5c0-.827-.682-1.498-1.524-1.498zM28.439 0H25.39v14.992h7.944l1.17-2.998H28.44V0zm14.456.61c-.323-.813-1.492-.813-1.815 0l-5.7 14.382h3.285l3.322-8.38 3.322 8.38h3.287L42.895.61zM15.242 14.992h3.048V0h-3.048v14.992zM12.193 0H0v2.998h10.983L12.193 0zM8.151 4.997H0v2.999h8.15c1.121 0 2.033.896 2.033 1.999 0 1.102-.912 1.999-2.032 1.999H1.195L0 14.992h8.15c2.803 0 5.082-2.242 5.082-4.997 0-2.756-2.28-4.998-5.081-4.998zM54 0h13a5 5 0 0 1 0 10H50V4a4 4 0 0 1 4-4z" fill="${color}"/>\n<path d="M55.875 2c-.746 0-1.317.252-1.712.757v-.603H53V10h1.251V7.048c.46.615 1.032.933 1.69.933.812 0 1.46-.297 1.92-.89.428-.548.648-1.24.648-2.073 0-.878-.22-1.58-.659-2.13C57.368 2.297 56.71 2 55.875 2zm-.186 1.01c.548 0 .954.197 1.218.592.208.33.318.801.318 1.416 0 .614-.12 1.086-.351 1.415-.264.352-.68.538-1.23.538-.405 0-.735-.164-.998-.494-.296-.362-.439-.845-.439-1.437v-.088c0-.57.11-1.02.351-1.36.264-.396.637-.582 1.13-.582zM62.284 2c-.351 0-.648.099-.9.307-.208.154-.384.373-.538.659v-.812h-1.24v5.673h1.24V4.82c0-.483.143-.867.45-1.163.264-.263.56-.384.89-.384a2.7 2.7 0 0 1 .811.12v-1.25A1.592 1.592 0 0 0 62.284 2zm4.06 0c-.867 0-1.558.274-2.074.845-.527.56-.779 1.273-.779 2.15 0 .868.252 1.581.768 2.13.527.57 1.218.856 2.085.856.856 0 1.559-.286 2.085-.856.505-.549.769-1.262.769-2.13 0-.877-.264-1.59-.78-2.15C67.892 2.275 67.2 2 66.344 2zm0 1.02c.516 0 .922.198 1.207.615.242.351.374.812.374 1.36 0 .539-.132.989-.374 1.35-.285.407-.69.615-1.207.615-.526 0-.922-.208-1.207-.614-.241-.351-.362-.801-.362-1.35s.12-1.01.362-1.36c.285-.418.68-.615 1.207-.615z" fill="#FFF"/>\n</g>\n</svg>'], "var-init"),
    w = function (e) {
      return N[String(e)] || e;
    };
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    return t.apply(this, arguments);
  }
  !function () {
    if (!i || "false" === i || "0" === i) return 1;
    var e = cc11001100_hook("e", "*.spiderbox.cn".split(","), "var-init");
    if (e.length) for (var t = cc11001100_hook("t", e.length - 1, "var-init"); 0 <= t; t--) if (function (e) {
      if (e === (location && location.host || "")) return !0;
      var t = cc11001100_hook("t", function () {
        try {
          var e = cc11001100_hook("e", "mh_".concat(Math.random()), "var-init"),
            t = cc11001100_hook("t", new RegExp("(^|;)\\s*".concat(e, "=12345")), "var-init"),
            n = cc11001100_hook("n", new Date(0), "var-init"),
            o = cc11001100_hook("o", document.domain.split("."), "var-init"),
            r = cc11001100_hook("r", [], "var-init");
          for (r.unshift(o.pop()); o.length;) {
            r.unshift(o.pop());
            var i = cc11001100_hook("i", r.join("."), "var-init"),
              a = cc11001100_hook("a", "".concat(e, "=", 12345, ";domain=.").concat(i), "var-init");
            if (document.cookie = cc11001100_hook("document.cookie", a, "assign"), t.test(document.cookie)) return document.cookie = cc11001100_hook("document.cookie", "".concat(a, ";expires=").concat(n), "assign"), i;
          }
        } catch (e) {
          return null;
        }
      }(), "var-init");
      return !!(t && -1 < e.indexOf(t)) || !/([\w.]+\/?)\S*/.test(e);
    }(e[t])) return 1;
  }() ? (e = cc11001100_hook("e", n(), "assign")) && e.parentNode && e.parentNode.removeChild(e) : (e = cc11001100_hook("e", n(), "assign")) ? function (e, t) {
    var n = cc11001100_hook("n", t = cc11001100_hook("t", t || null, "assign"), "var-init"),
      o = cc11001100_hook("o", n.col, "var-init"),
      n = cc11001100_hook("n", n.insert, "var-init");
    if ((e = cc11001100_hook("e", e || null, "assign")) && e.parentNode) {
      var r = cc11001100_hook("r", document.createElement("div"), "var-init");
      if (r.innerHTML = cc11001100_hook("r.innerHTML", "<p>网站数据概况</p><p><span>0</span><span>15</span></p><p><span>1</span><span>56</span></p><p><span>2</span><span>87</span></p><p><span>3</span><span>86</span></p><p><span>4</span><span>144</span></p><p><span>5</span><span>2284</span></p><p><span>6</span><span>93412</span></p>", "assign"), o) {
        var i = cc11001100_hook("i", v("div", {
          backgroundColor: cc11001100_hook("backgroundColor", t && t.theme.backgroundColor || "#fff", "object-key-init"),
          padding: cc11001100_hook("padding", "16px 20px", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          border: cc11001100_hook("border", "1px solid ".concat(t && t.theme.borderColor || "#1690ff"), "object-key-init"),
          height: cc11001100_hook("height", t && t.h ? "".concat(t.h, "px") : "auto", "object-key-init")
        }), "var-init");
        i.setAttribute("class", "la-widget la-data-widget__container"), t.display[0] && ((s = cc11001100_hook("s", v("p", {
          fontWeight: cc11001100_hook("fontWeight", "bold", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1em", "object-key-init"),
          marginBottom: cc11001100_hook("marginBottom", "6px", "object-key-init"),
          color: cc11001100_hook("color", t && t.theme.titleColor || "#333", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          textAlign: cc11001100_hook("textAlign", "left", "object-key-init")
        }), "assign")).innerText = cc11001100_hook("(s = v(\"p\", {\n  fontWeight: \"bold\",\n  lineHeight: \"1em\",\n  marginBottom: \"6px\",\n  color: t && t.theme.titleColor || \"#333\",\n  fontSize: t && t.theme.fontSize ? \"\".concat(t.theme.fontSize) : \"12px\",\n  textAlign: \"left\"\n})).innerText", N.tt, "assign"), i.appendChild(s));
        for (var a, l, c, p, s, h = cc11001100_hook("h", 1, "var-init"); h < t.display.length; h++) t.display[h] && (a = cc11001100_hook("a", r.childNodes[h], "assign"), l = cc11001100_hook("l", v("p", {
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          textAlign: cc11001100_hook("textAlign", "left", "object-key-init")
        }), "assign"), c = cc11001100_hook("c", v("span", {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          color: cc11001100_hook("color", t && t.theme.color || "#999", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init")
        }), "assign"), p = cc11001100_hook("p", parseInt(a.childNodes[0].innerText), "assign"), c.innerText = cc11001100_hook("c.innerText", w(1 < b[p].length ? "".concat(w(b[p][0])).concat(w(b[p][1])) : w(b[p][0])), "assign"), (p = cc11001100_hook("p", v("span", {
          fontWeight: cc11001100_hook("fontWeight", "bold", "object-key-init"),
          color: cc11001100_hook("color", t && t.theme.numberColor || "#333", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          "float": cc11001100_hook("float", "right", "object-key-init")
        }), "assign")).innerText = cc11001100_hook("(p = v(\"span\", {\n  fontWeight: \"bold\",\n  color: t && t.theme.numberColor || \"#333\",\n  fontSize: t && t.theme.fontSize ? \"\".concat(t.theme.fontSize) : \"12px\",\n  \"float\": \"right\"\n})).innerText", z(a.childNodes[1].innerText), "assign"), l.appendChild(p), l.appendChild(c), i.appendChild(l));
        t && t.badge && (o = cc11001100_hook("o", v("hr", {
          height: cc11001100_hook("height", "1px", "object-key-init"),
          border: cc11001100_hook("border", "none", "object-key-init"),
          borderTop: cc11001100_hook("borderTop", "1px solid ".concat(t.theme.borderColor), "object-key-init"),
          marginTop: cc11001100_hook("marginTop", "6px", "object-key-init"),
          marginBottom: cc11001100_hook("marginBottom", "12px", "object-key-init")
        }), "assign"), i.appendChild(o), s = cc11001100_hook("s", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, "assign"), d = cc11001100_hook("d", v("p", {
          textAlign: cc11001100_hook("textAlign", -1 !== t.badge.indexOf("icon") && t.icon || "text" === t.badge && t.text || "left", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1em", "object-key-init"),
          color: cc11001100_hook("color", t.theme.iconColor, "object-key-init")
        }), "assign"), (o = cc11001100_hook("o", v("a", {
          width: cc11001100_hook("width", "auto", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1em", "object-key-init"),
          color: cc11001100_hook("color", t.theme.iconColor, "object-key-init"),
          textDecoration: cc11001100_hook("textDecoration", "none", "object-key-init")
        }), "assign")).setAttribute("target", "_blank"), o.setAttribute("href", "https://v6.51.la/"), o.setAttribute("title", "「我要啦」网站流量统计"), s && -1 !== t.badge.indexOf("icon") ? (s = cc11001100_hook("s", C[parseInt(t.badge.replace("icon_", ""), 10)] || C[0], "assign"), o.innerHTML = cc11001100_hook("o.innerHTML", s.replace(/\$\{color\}/g, t.theme.iconColor), "assign")) : o.innerText = cc11001100_hook("o.innerText", "51LA网站统计", "assign"), d.appendChild(o), i.appendChild(d)), n ? e.parentNode.insertBefore(i, e.parentNode.childNodes[0]) : e.parentNode.appendChild(i);
      } else {
        var d,
          f = cc11001100_hook("f", v("span", {
            lineHeight: cc11001100_hook("lineHeight", "1.71428em", "object-key-init")
          }), "var-init");
        f.setAttribute("class", "la-widget la-data-widget__container"), t.display[0] && ((d = cc11001100_hook("d", v("span", {
          fontWeight: cc11001100_hook("fontWeight", "bold", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1.71428em", "object-key-init"),
          color: cc11001100_hook("color", t && t.theme.titleColor || "#333", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init")
        }), "assign")).innerText = cc11001100_hook("(d = v(\"span\", {\n  fontWeight: \"bold\",\n  lineHeight: \"1.71428em\",\n  color: t && t.theme.titleColor || \"#333\",\n  fontSize: t && t.theme.fontSize ? \"\".concat(t.theme.fontSize) : \"12px\"\n})).innerText", "".concat(N.tt, "  - "), "assign"), f.appendChild(d));
        for (var m, g, u, x, y = cc11001100_hook("y", 1, "var-init"); y < t.display.length; y++) t.display[y] && (m = cc11001100_hook("m", r.childNodes[y], "assign"), g = cc11001100_hook("g", v("span", {
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          borderLeft: cc11001100_hook("borderLeft", f.childNodes.length < 1 || t.display[0] && 1 === f.childNodes.length ? "none" : "1px solid ".concat(t.theme.borderColor), "object-key-init"),
          marginLeft: cc11001100_hook("marginLeft", f.childNodes.length < 1 || t.display[0] && 1 === f.childNodes.length ? "0" : "6px", "object-key-init"),
          paddingLeft: cc11001100_hook("paddingLeft", f.childNodes.length < 1 || t.display[0] && 1 === f.childNodes.length ? "0" : "6px", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1.71428em", "object-key-init")
        }), "assign"), u = cc11001100_hook("u", v("span", {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          color: cc11001100_hook("color", t && t.theme.color || "#999", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1.71428em", "object-key-init")
        }), "assign"), x = cc11001100_hook("x", parseInt(m.childNodes[0].innerText), "assign"), u.innerText = cc11001100_hook("u.innerText", w(1 < b[x].length ? "".concat(w(b[x][0])).concat(w(b[x][1])) : w(b[x][0])), "assign"), (x = cc11001100_hook("x", v("span", {
          fontWeight: cc11001100_hook("fontWeight", "bold", "object-key-init"),
          color: cc11001100_hook("color", t && t.theme.numberColor || "#333", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", "object-key-init"),
          marginLeft: cc11001100_hook("marginLeft", "6px", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "1.71428em", "object-key-init")
        }), "assign")).innerText = cc11001100_hook("(x = v(\"span\", {\n  fontWeight: \"bold\",\n  color: t && t.theme.numberColor || \"#333\",\n  fontSize: t && t.theme.fontSize ? \"\".concat(t.theme.fontSize) : \"12px\",\n  marginLeft: \"6px\",\n  lineHeight: \"1.71428em\"\n})).innerText", z(m.childNodes[1].innerText), "assign"), g.appendChild(u), g.appendChild(x), f.appendChild(g));
        n ? e.parentNode.insertBefore(f, e.parentNode.childNodes[0]) : e.parentNode.appendChild(f);
      }
    }
  }(e, function (e) {
    var t = cc11001100_hook("t", "", "var-init");
    if (!(-1 < e.indexOf("?"))) return null;
    var n = cc11001100_hook("n", {}, "var-init");
    if (-1 != (t = cc11001100_hook("t", "?".concat(e.split("?")[1]), "assign")).indexOf("?")) for (var o = cc11001100_hook("o", t.substr(1).split("&"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < o.length; r++) {
      var i = cc11001100_hook("i", o[r].split("=")[0], "var-init"),
        a = cc11001100_hook("a", decodeURIComponent(o[r].split("=")[1]), "var-init");
      n[i] = cc11001100_hook("n[i]", "true" === a || "false" !== a && a, "assign");
    }
    var l = cc11001100_hook("l", n.theme, "var-init"),
      e = cc11001100_hook("e", n.display, "var-init"),
      t = cc11001100_hook("t", n.f, "var-init");
    t && !x.isNaN(Number(t)) && (y.fontSize = cc11001100_hook("y.fontSize", t, "assign"));
    for (var c = cc11001100_hook("c", l ? l.split(",") : [], "var-init"), p = cc11001100_hook("p", e ? e.split(",") : [], "var-init"), s = cc11001100_hook("s", {}, "var-init"), h = cc11001100_hook("h", [], "var-init"), d = cc11001100_hook("d", x.isNaN(parseInt(c[0])) || 4 < parseInt(c[0]) ? 0 : parseInt(c[0]), "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < S.length; f++) {
      var m = cc11001100_hook("m", "fontSize" === S[f] ? "".concat(c[f] || y[S[f]], "px") : u.test(c[f]) ? c[f] : y[S[f]] || y.themeColor[d], "var-init");
      s[S[f]] = cc11001100_hook("s[S[f]]", m, "assign");
    }
    if (p.length) for (var g = cc11001100_hook("g", 0, "var-init"); g <= 7; g++) h.push(!p[g] || "true" !== p[g] && "1" !== p[g] ? 0 : 1);else h = cc11001100_hook("h", [1, 1, 1, 1, 1, 1, 1, 1], "assign");
    return n.display = cc11001100_hook("n.display", h, "assign"), n.theme = cc11001100_hook("n.theme", s, "assign"), n;
  }(function (e) {
    if (e = cc11001100_hook("e", e || null, "assign")) return document.querySelector ? e.src : e.getAttribute("src");
    var t = cc11001100_hook("t", document.getElementsByTagName("script"), "var-init"),
      n = cc11001100_hook("n", [], "var-init");
    if (t.length) {
      for (var o = cc11001100_hook("o", t.length - 1, "var-init"); 0 <= o; o--) if ("LA-DATA-WIDGET" === t[o].getAttribute("id")) {
        n.push(t[o].getAttribute("src"));
        break;
      }
      if (n.length) return n[0];
    }
    var r = cc11001100_hook("r", "", "var-init");
    try {
      throw Error("获取JS路径有误");
    } catch (e) {
      e.fileName ? r = cc11001100_hook("r", e.fileName, "assign") : e.sourceURL ? r = cc11001100_hook("r", e.sourceURL, "assign") : e.stack && (r = cc11001100_hook("r", (e.stack.match(/at\s+(.*?):\d+:\d+/) || ["", ""])[1], "assign"));
    }
    return r || void 0;
  }(e))) : console.error("can not found this script element");
}();