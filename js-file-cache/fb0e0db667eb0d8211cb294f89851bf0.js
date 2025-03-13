var Feedback;
(function (n) {
  var t;
  (function (t) {
    function u(t, r, u, f, e, o) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("u", u, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      t = cc11001100_hook("t", typeof t === i ? !1 : t, "assign");
      t && scrollTo(0, 0);
      u = cc11001100_hook("u", typeof u === i ? !0 : u, "assign");
      n.PackageLoad.Load(r, u, f, e, o);
    }
    function o(n, t) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", null, "var-init"); n && n.getAttribute && (!(t >= 1) || r < t);) {
        if (i = cc11001100_hook("i", n.getAttribute("data-fbhlsel"), "assign"), i != null) break;
        r++;
        n = cc11001100_hook("n", n.parentNode, "assign");
      }
      return i;
    }
    function l(t, l, a, v, y, p, w, b, k) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("l", l, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      cc11001100_hook("y", y, "function-parameter");
      cc11001100_hook("p", p, "function-parameter");
      cc11001100_hook("w", w, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("k", k, "function-parameter");
      function tt(t) {
        cc11001100_hook("t", t, "function-parameter");
        var r = cc11001100_hook("r", null, "var-init"),
          i;
        return t && (i = cc11001100_hook("i", new h(), "assign"), n.fel("ajax.feedback.collectsettings", "gsf", i), r = cc11001100_hook("r", i.findSettings(t), "assign")), r;
      }
      var d, g, nt;
      (typeof sj_log != "undefined" && sj_log("CI.FeedbackInit", "Feedback", !l || l.length === 0 ? "invalid" : l), d = cc11001100_hook("d", _ge(l), "assign"), d && d.classList && d.classList.contains(s)) || (g = cc11001100_hook("g", o(d, 3), "assign"), e !== "sb_feedback" && (e = cc11001100_hook("e", l, "assign"), typeof sj_evt !== i && (r && sj_evt.unbind(f, r), r = cc11001100_hook("r", function (n) {
        var f = cc11001100_hook("f", null, "var-init"),
          i = cc11001100_hook("i", null, "var-init"),
          e = cc11001100_hook("e", null, "var-init"),
          s,
          r,
          h;
        n && n.length > 1 && (r = cc11001100_hook("r", n[1], "assign"), r.tagName !== undefined && r.nodeType !== undefined ? (f = cc11001100_hook("f", r, "assign"), i = cc11001100_hook("i", tt(f), "assign")) : i = cc11001100_hook("i", r, "assign"), s = cc11001100_hook("s", i && i.elementToHighlight || f, "assign"), e = cc11001100_hook("e", o(s), "assign"));
        h = cc11001100_hook("h", i && i.linkId || l, "assign");
        u(v, t, a, h, e, i);
      }, "assign"), sj_evt.bind(f, r, 1)), typeof SearchAppWrapper !== i && SearchAppWrapper.CortanaApp && SearchAppWrapper.CortanaApp.addEventListener && SearchAppWrapper.CortanaApp.addEventListener(f, function (n) {
        (typeof n !== i && n !== null && (n.isHandled = cc11001100_hook("n.isHandled", !0, "assign")), l === e) && _ge("fbpgdg") === null && u(v, t, a, l);
      })), d !== null ? (nt = cc11001100_hook("nt", function (i) {
        if (!(i instanceof KeyboardEvent) || i.keyCode === 13) {
          try {
            sessionStorage.setItem("fdbk.triggerElementId", l);
          } catch (i) {
            n.le("Feedback: accessibility storage failed", i);
          }
          var f = cc11001100_hook("f", null, "var-init"),
            r = cc11001100_hook("r", null, "var-init"),
            e = cc11001100_hook("e", null, "var-init"),
            s;
          k && sj_evt.fire("feedback.dialog.defaultcheckedradio", k);
          sj_pd(i);
          sj_sp(i);
          f = cc11001100_hook("f", sj_et(i), "assign");
          r = cc11001100_hook("r", tt(f), "assign");
          s = cc11001100_hook("s", r && r.elementToHighlight || f, "assign");
          e = cc11001100_hook("e", o(s), "assign");
          u(v, t, a, l, e || g, r || b);
        }
      }, "assign"), sj_be(d, "click", nt), sj_be(d, "keydown", nt), d.classList && d.classList.add(s)) : (w = cc11001100_hook("w", typeof w === i ? !1 : w, "assign"), w && u(v, t, a, l, g)), typeof sj_evt !== i && sj_evt.fire(c));
    }
    var f = cc11001100_hook("f", "feedbackformrequested", "var-init"),
      c = cc11001100_hook("c", "feedbackInitialized", "var-init"),
      r,
      e = cc11001100_hook("e", "", "var-init"),
      s = cc11001100_hook("s", "feedback-binded", "var-init"),
      i = cc11001100_hook("i", "undefined", "var-init"),
      h;
    t.InitializeFeedback = cc11001100_hook("t.InitializeFeedback", l, "assign");
    n.le = cc11001100_hook("n.le", function (n, t) {
      SharedLogHelper && SharedLogHelper.LogError && SharedLogHelper.LogError("Feedback: ".concat(n), null, t);
    }, "assign");
    n.leh = cc11001100_hook("n.leh", function (t, i, r) {
      n.le("Feedback: ".concat(t, " handler failed in ").concat(i), r);
    }, "assign");
    n.fel = cc11001100_hook("n.fel", function (t, i) {
      for (var u = cc11001100_hook("u", [], "var-init"), r = cc11001100_hook("r", 2, "var-init"); r < arguments.length; r++) u[r - 2] = cc11001100_hook("u[r - 2]", arguments[r], "assign");
      try {
        u.unshift(t);
        sj_evt.fire.apply(null, u);
      } catch (f) {
        n.leh(t, i, f);
        throw f;
      }
    }, "assign");
    h = cc11001100_hook("h", function () {
      function n() {
        this.settingsList = cc11001100_hook("this.settingsList", [], "assign");
      }
      return n.prototype.setStartSettings = cc11001100_hook("n.prototype.setStartSettings", function (n, t) {
        n && t && this.settingsList.push({
          c: cc11001100_hook("c", n, "object-key-init"),
          s: cc11001100_hook("s", t, "object-key-init")
        });
      }, "assign"), n.prototype.findSettings = cc11001100_hook("n.prototype.findSettings", function (n) {
        var t = cc11001100_hook("t", null, "var-init");
        return this.settingsList.forEach(function (i) {
          sj_we(n, i.c) && (t = cc11001100_hook("t", i.s, "assign"));
        }), t;
      }, "assign"), n;
    }(), "assign");
    sj_evt.fire("fdbkbtstrp_init");
  })(t = cc11001100_hook("t", n.Bootstrap || (n.Bootstrap = cc11001100_hook("n.Bootstrap", {}, "assign")), "assign"));
})(Feedback || (Feedback = cc11001100_hook("Feedback", {}, "assign"))), function (n) {
  var t;
  (function (t) {
    "use strict";

    function f(n) {
      cc11001100_hook("n", n, "function-parameter");
      return typeof n == "object" && n !== null;
    }
    function e(n) {
      cc11001100_hook("n", n, "function-parameter");
      return n == null ? n === undefined ? "[object Undefined]" : "[object Null]" : toString.call(n);
    }
    function o(n) {
      cc11001100_hook("n", n, "function-parameter");
      if (!f(n) || e(n) != "[object Object]") return !1;
      if (Object.getPrototypeOf(n) === null) return !0;
      for (var t = cc11001100_hook("t", n, "var-init"); Object.getPrototypeOf(t) !== null;) t = cc11001100_hook("t", Object.getPrototypeOf(t), "assign");
      return Object.getPrototypeOf(n) === t;
    }
    function s(f, e, s, h) {
      cc11001100_hook("f", f, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("h", h, "function-parameter");
      var g = cc11001100_hook("g", _G.IG, "var-init"),
        nt = cc11001100_hook("nt", typeof _G.V === i ? _G.P : _G.V, "var-init"),
        c,
        p,
        l,
        v,
        b,
        y,
        d;
      n.fel("onFeedbackStarting", "lp");
      t.staticConfig = cc11001100_hook("t.staticConfig", {
        linkId: cc11001100_hook("linkId", e, "object-key-init"),
        activeElement: cc11001100_hook("activeElement", _d.activeElement, "object-key-init")
      }, "assign");
      var a = cc11001100_hook("a", "?ig=" + g + "&p=" + nt, "var-init"),
        k = cc11001100_hook("k", n.RouteProvider.Provide(f), "var-init"),
        w = cc11001100_hook("w", encodeURIComponent, "var-init");
      if (h) {
        if (h.formConfig && (k = cc11001100_hook("k", f === "page" ? "sdk/form" : f, "assign"), a += cc11001100_hook("a", "&formconfig=" + h.formConfig, "assign")), h.service && (t.staticConfig.service = cc11001100_hook("t.staticConfig.service", h.service, "assign")), h.scenario && (t.staticConfig.scenario = cc11001100_hook("t.staticConfig.scenario", h.scenario, "assign")), h.structuredData) try {
          o(h.structuredData) && (t.staticConfig.structuredData = cc11001100_hook("t.staticConfig.structuredData", h.structuredData, "assign"));
        } catch (tt) {}
        if (l = cc11001100_hook("l", h.context, "assign"), l) for (v in l) l.hasOwnProperty(v) && (a += cc11001100_hook("a", "&" + w(v) + "=" + w(l[v]), "assign"));
        h.pos && (t.staticConfig.pos = cc11001100_hook("t.staticConfig.pos", h.pos, "assign"), a += cc11001100_hook("a", "&pos=1", "assign"));
      }
      for (c = cc11001100_hook("c", "/feedback/" + k + a, "assign"), typeof fbsrc !== i && (c += cc11001100_hook("c", "&src=" + w(fbsrc), "assign")), typeof fbpkgiid !== i && fbpkgiid[f] && (c += cc11001100_hook("c", "&iid=" + fbpkgiid[f], "assign")), b = cc11001100_hook("b", ["addloginsource", "client", "clientip", "corpnet", "features", "hose", "hoseassistant", "logjserror", "msamock", "setvar", "testhooks", "theme", "uncrunched", "ptn"], "assign"), y = cc11001100_hook("y", 0, "assign"); y < b.length; y++) (p = cc11001100_hook("p", location.href.match(new RegExp("[?&]" + b[y] + "=[^?&#]*", "i")), "assign")) && p[0] && (c += cc11001100_hook("c", "&" + p[0].substring(1), "assign"));
      d = cc11001100_hook("d", typeof sj_ajaxCSP == "function" ? sj_ajaxCSP : sj_ajax, "assign");
      d(c, {
        callback: function (t, i) {
          var r, f;
          if (t && i) try {
            u && u.removeAttribute("clicked");
            r = cc11001100_hook("r", h && _ge(h.feedbackContainerId), "assign");
            (h === null || h === void 0 ? void 0 : h.appendFeedbackDialogAfterEvent) ? (f = cc11001100_hook("f", function () {
              i.appendTo(r || _d.body);
              sj_evt.unbind(h.appendFeedbackDialogAfterEvent, f);
            }, "assign"), sj_evt.bind(h.appendFeedbackDialogAfterEvent, f, 1)) : i.appendTo(r || _d.body);
            n.fel("onFeedbackShow", "lp");
            n.fel("clarity.trigger", "lp", "BingFeedback");
            n.Highlight && s && n.Highlight.HighlightElements(s);
            (e.indexOf("fdbtext_") > -1 || e.indexOf("thumb_t") > -1 || e.indexOf("thumb_f") > -1 || e.indexOf("thumb_tum") > -1) && sj_evt.fire("HightLightScreenShotById", e, "li", ["b_results", "b_context"], "ol");
          } catch (o) {
            n.le("Package load callback failed", o);
            throw o;
          }
        }
      });
      r[f] = cc11001100_hook("r[f]", !0, "assign");
    }
    function h() {
      r = cc11001100_hook("r", {}, "assign");
      t.staticConfig = cc11001100_hook("t.staticConfig", {}, "assign");
    }
    var r = cc11001100_hook("r", {}, "var-init"),
      i = cc11001100_hook("i", "undefined", "var-init"),
      u;
    t.staticConfig = cc11001100_hook("t.staticConfig", {}, "assign");
    n.PackageLoad.GetHTML = cc11001100_hook("n.PackageLoad.GetHTML", function () {
      return _d.documentElement.outerHTML;
    }, "assign");
    n.PackageLoad.Load = cc11001100_hook("n.PackageLoad.Load", function (n, t, f, e, o) {
      var h, c;
      t = cc11001100_hook("t", typeof t === i ? !0 : t, "assign");
      f = cc11001100_hook("f", typeof f === i ? "" : f, "assign");
      c = cc11001100_hook("c", typeof o != i && o && o.feedbackContainerId, "assign");
      u = cc11001100_hook("u", _ge(f), "assign");
      for (h in n) n.hasOwnProperty(h) && (!t || c || typeof r[h] === i) && s(h, f, e, o);
    }, "assign");
    sj_evt.bind("ajax.feedback.cleanup", h);
  })(t = cc11001100_hook("t", n.PackageLoad || (n.PackageLoad = cc11001100_hook("n.PackageLoad", {}, "assign")), "assign"));
}(Feedback || (Feedback = cc11001100_hook("Feedback", {}, "assign"))), function (n) {
  var t;
  (function () {
    "use strict";

    n.RouteProvider.Provide = cc11001100_hook("n.RouteProvider.Provide", function (n) {
      return n === "page" ? "sdk/form" : n;
    }, "assign");
  })(t = cc11001100_hook("t", n.RouteProvider || (n.RouteProvider = cc11001100_hook("n.RouteProvider", {}, "assign")), "assign"));
}(Feedback || (Feedback = cc11001100_hook("Feedback", {}, "assign"))), function (n) {
  var t;
  (function (n) {
    "use strict";

    n.submit = cc11001100_hook("n.submit", {
      registered: {},
      use: function (n, t) {
        this.registered[n] = cc11001100_hook("this.registered[n]", t, "assign");
      },
      clear: function () {
        this.registered = cc11001100_hook("this.registered", {}, "assign");
      }
    }, "assign");
  })(t = cc11001100_hook("t", n.Hooks || (n.Hooks = cc11001100_hook("n.Hooks", {}, "assign")), "assign"));
}(Feedback || (Feedback = cc11001100_hook("Feedback", {}, "assign")));