/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (n) {
  "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = cc11001100_hook("module.exports", function (e, t) {
    return void 0 === t && (t = cc11001100_hook("t", "undefined" != typeof window ? require("jquery") : require("jquery")(e), "assign")), n(t), t;
  }, "assign") : n(jQuery);
}(function (u) {
  var e = cc11001100_hook("e", function () {
      if (u && u.fn && u.fn.select2 && u.fn.select2.amd) var e = cc11001100_hook("e", u.fn.select2.amd, "var-init");
      var t, n, r, h, o, s, f, g, m, v, y, _, i, a, b;
      function w(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return i.call(e, t);
      }
      function l(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n,
          r,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          h = cc11001100_hook("h", t && t.split("/"), "var-init"),
          f = cc11001100_hook("f", y.map, "var-init"),
          g = cc11001100_hook("g", f && f["*"] || {}, "var-init");
        if (e) {
          for (s = cc11001100_hook("s", (e = cc11001100_hook("e", e.split("/"), "assign")).length - 1, "assign"), y.nodeIdCompat && b.test(e[s]) && (e[s] = cc11001100_hook("e[s]", e[s].replace(b, ""), "assign")), "." === e[0].charAt(0) && h && (e = cc11001100_hook("e", h.slice(0, h.length - 1).concat(e), "assign")), u = cc11001100_hook("u", 0, "assign"); u < e.length; u++) if ("." === (p = cc11001100_hook("p", e[u], "assign"))) e.splice(u, 1), --u;else if (".." === p) {
            if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
            0 < u && (e.splice(u - 1, 2), u -= cc11001100_hook("u", 2, "assign"));
          }
          e = cc11001100_hook("e", e.join("/"), "assign");
        }
        if ((h || g) && f) {
          for (u = cc11001100_hook("u", (n = cc11001100_hook("n", e.split("/"), "assign")).length, "assign"); 0 < u; --u) {
            if (r = cc11001100_hook("r", n.slice(0, u).join("/"), "assign"), h) for (d = cc11001100_hook("d", h.length, "assign"); 0 < d; --d) if (i = cc11001100_hook("i", (i = cc11001100_hook("i", f[h.slice(0, d).join("/")], "assign")) && i[r], "assign")) {
              o = cc11001100_hook("o", i, "assign"), a = cc11001100_hook("a", u, "assign");
              break;
            }
            if (o) break;
            !l && g && g[r] && (l = cc11001100_hook("l", g[r], "assign"), c = cc11001100_hook("c", u, "assign"));
          }
          !o && l && (o = cc11001100_hook("o", l, "assign"), a = cc11001100_hook("a", c, "assign")), o && (n.splice(0, a, o), e = cc11001100_hook("e", n.join("/"), "assign"));
        }
        return e;
      }
      function A(t, n) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        return function () {
          var e = cc11001100_hook("e", a.call(arguments, 0), "var-init");
          return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(h, e.concat([t, n]));
        };
      }
      function x(t) {
        cc11001100_hook("t", t, "function-parameter");
        return function (e) {
          m[t] = cc11001100_hook("m[t]", e, "assign");
        };
      }
      function D(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (w(v, e)) {
          var t = cc11001100_hook("t", v[e], "var-init");
          delete v[e], _[e] = cc11001100_hook("_[e]", !0, "assign"), o.apply(h, t);
        }
        if (!w(m, e) && !w(_, e)) throw new Error("No " + e);
        return m[e];
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t,
          n = cc11001100_hook("n", e ? e.indexOf("!") : -1, "var-init");
        return -1 < n && (t = cc11001100_hook("t", e.substring(0, n), "assign"), e = cc11001100_hook("e", e.substring(n + 1, e.length), "assign")), [t, e];
      }
      function S(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e ? c(e) : [];
      }
      return e && e.requirejs || (e ? n = cc11001100_hook("n", e, "assign") : e = cc11001100_hook("e", {}, "assign"), m = cc11001100_hook("m", {}, "assign"), v = cc11001100_hook("v", {}, "assign"), y = cc11001100_hook("y", {}, "assign"), _ = cc11001100_hook("_", {}, "assign"), i = cc11001100_hook("i", Object.prototype.hasOwnProperty, "assign"), a = cc11001100_hook("a", [].slice, "assign"), b = cc11001100_hook("b", /\.js$/, "assign"), f = cc11001100_hook("f", function (e, t) {
        var n,
          r,
          i = cc11001100_hook("i", c(e), "var-init"),
          o = cc11001100_hook("o", i[0], "var-init"),
          s = cc11001100_hook("s", t[1], "var-init");
        return e = cc11001100_hook("e", i[1], "assign"), o && (n = cc11001100_hook("n", D(o = cc11001100_hook("o", l(o, s), "assign")), "assign")), o ? e = cc11001100_hook("e", n && n.normalize ? n.normalize(e, (r = cc11001100_hook("r", s, "assign"), function (e) {
          return l(e, r);
        })) : l(e, s), "assign") : (o = cc11001100_hook("o", (i = cc11001100_hook("i", c(e = cc11001100_hook("e", l(e, s), "assign")), "assign"))[0], "assign"), e = cc11001100_hook("e", i[1], "assign"), o && (n = cc11001100_hook("n", D(o), "assign"))), {
          f: cc11001100_hook("f", o ? o + "!" + e : e, "object-key-init"),
          n: cc11001100_hook("n", e, "object-key-init"),
          pr: cc11001100_hook("pr", o, "object-key-init"),
          p: cc11001100_hook("p", n, "object-key-init")
        };
      }, "assign"), g = cc11001100_hook("g", {
        require: function (e) {
          return A(e);
        },
        exports: function (e) {
          var t = cc11001100_hook("t", m[e], "var-init");
          return void 0 !== t ? t : m[e] = cc11001100_hook("m[e]", {}, "assign");
        },
        module: function (e) {
          return {
            id: cc11001100_hook("id", e, "object-key-init"),
            uri: cc11001100_hook("uri", "", "object-key-init"),
            exports: cc11001100_hook("exports", m[e], "object-key-init"),
            config: cc11001100_hook("config", (t = cc11001100_hook("t", e, "assign"), function () {
              return y && y.config && y.config[t] || {};
            }), "object-key-init")
          };
          var t;
        }
      }, "assign"), o = cc11001100_hook("o", function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          l,
          c,
          u,
          d = cc11001100_hook("d", [], "var-init"),
          p = cc11001100_hook("p", typeof n, "var-init");
        if (c = cc11001100_hook("c", S(r = cc11001100_hook("r", r || e, "assign")), "assign"), "undefined" == p || "function" == p) {
          for (t = cc11001100_hook("t", !t.length && n.length ? ["require", "exports", "module"] : t, "assign"), l = cc11001100_hook("l", 0, "assign"); l < t.length; l += cc11001100_hook("l", 1, "assign")) if ("require" === (o = cc11001100_hook("o", (a = cc11001100_hook("a", f(t[l], c), "assign")).f, "assign"))) d[l] = cc11001100_hook("d[l]", g.require(e), "assign");else if ("exports" === o) d[l] = cc11001100_hook("d[l]", g.exports(e), "assign"), u = cc11001100_hook("u", !0, "assign");else if ("module" === o) i = cc11001100_hook("i", d[l] = cc11001100_hook("d[l]", g.module(e), "assign"), "assign");else if (w(m, o) || w(v, o) || w(_, o)) d[l] = cc11001100_hook("d[l]", D(o), "assign");else {
            if (!a.p) throw new Error(e + " missing " + o);
            a.p.load(a.n, A(r, !0), x(o), {}), d[l] = cc11001100_hook("d[l]", m[o], "assign");
          }
          s = cc11001100_hook("s", n ? n.apply(m[e], d) : void 0, "assign"), e && (i && i.exports !== h && i.exports !== m[e] ? m[e] = cc11001100_hook("m[e]", i.exports, "assign") : s === h && u || (m[e] = cc11001100_hook("m[e]", s, "assign")));
        } else e && (m[e] = cc11001100_hook("m[e]", n, "assign"));
      }, "assign"), t = cc11001100_hook("t", n = cc11001100_hook("n", s = cc11001100_hook("s", function (e, t, n, r, i) {
        if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);
        if (!e.splice) {
          if ((y = cc11001100_hook("y", e, "assign")).deps && s(y.deps, y.callback), !t) return;
          t.splice ? (e = cc11001100_hook("e", t, "assign"), t = cc11001100_hook("t", n, "assign"), n = cc11001100_hook("n", null, "assign")) : e = cc11001100_hook("e", h, "assign");
        }
        return t = cc11001100_hook("t", t || function () {}, "assign"), "function" == typeof n && (n = cc11001100_hook("n", r, "assign"), r = cc11001100_hook("r", i, "assign")), r ? o(h, e, t, n) : setTimeout(function () {
          o(h, e, t, n);
        }, 4), s;
      }, "assign"), "assign"), "assign"), s.config = cc11001100_hook("s.config", function (e) {
        return s(e);
      }, "assign"), t._defined = cc11001100_hook("t._defined", m, "assign"), (r = cc11001100_hook("r", function (e, t, n) {
        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", [], "assign")), w(m, e) || w(v, e) || (v[e] = cc11001100_hook("v[e]", [e, t, n], "assign"));
      }, "assign")).amd = cc11001100_hook("(r = function (e, t, n) {\n  if (\"string\" != typeof e) throw new Error(\"See almond README: incorrect module build, no module name\");\n  t.splice || (n = t, t = []), w(m, e) || w(v, e) || (v[e] = [e, t, n]);\n}).amd", {
        jQuery: cc11001100_hook("jQuery", !0, "object-key-init")
      }, "assign"), e.requirejs = cc11001100_hook("e.requirejs", t, "assign"), e.require = cc11001100_hook("e.require", n, "assign"), e.define = cc11001100_hook("e.define", r, "assign")), e.define("almond", function () {}), e.define("jquery", [], function () {
        var e = cc11001100_hook("e", u || $, "var-init");
        return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
      }), e.define("select2/utils", ["jquery"], function (o) {
        var i = cc11001100_hook("i", {}, "var-init");
        function u(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t = cc11001100_hook("t", e.prototype, "var-init"),
            n = cc11001100_hook("n", [], "var-init");
          for (var r in t) {
            "function" == typeof t[r] && "constructor" !== r && n.push(r);
          }
          return n;
        }
        i.Extend = cc11001100_hook("i.Extend", function (e, t) {
          var n = cc11001100_hook("n", {}.hasOwnProperty, "var-init");
          function r() {
            this.constructor = cc11001100_hook("this.constructor", e, "assign");
          }
          for (var i in t) n.call(t, i) && (e[i] = cc11001100_hook("e[i]", t[i], "assign"));
          return r.prototype = cc11001100_hook("r.prototype", t.prototype, "assign"), e.prototype = cc11001100_hook("e.prototype", new r(), "assign"), e.__super__ = cc11001100_hook("e.__super__", t.prototype, "assign"), e;
        }, "assign"), i.Decorate = cc11001100_hook("i.Decorate", function (r, i) {
          var e = cc11001100_hook("e", u(i), "var-init"),
            t = cc11001100_hook("t", u(r), "var-init");
          function o() {
            var e = cc11001100_hook("e", Array.prototype.unshift, "var-init"),
              t = cc11001100_hook("t", i.prototype.constructor.length, "var-init"),
              n = cc11001100_hook("n", r.prototype.constructor, "var-init");
            0 < t && (e.call(arguments, r.prototype.constructor), n = cc11001100_hook("n", i.prototype.constructor, "assign")), n.apply(this, arguments);
          }
          i.displayName = cc11001100_hook("i.displayName", r.displayName, "assign"), o.prototype = cc11001100_hook("o.prototype", new function () {
            this.constructor = cc11001100_hook("this.constructor", o, "assign");
          }(), "assign");
          for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
            var s = cc11001100_hook("s", t[n], "var-init");
            o.prototype[s] = cc11001100_hook("o.prototype[s]", r.prototype[s], "assign");
          }
          function a(e) {
            cc11001100_hook("e", e, "function-parameter");
            var t = function () {};
            e in o.prototype && (t = cc11001100_hook("t", o.prototype[e], "assign"));
            var n = cc11001100_hook("n", i.prototype[e], "var-init");
            return function () {
              return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
            };
          }
          for (var l = cc11001100_hook("l", 0, "var-init"); l < e.length; l++) {
            var c = cc11001100_hook("c", e[l], "var-init");
            o.prototype[c] = cc11001100_hook("o.prototype[c]", a(c), "assign");
          }
          return o;
        }, "assign");
        function e() {
          this.listeners = cc11001100_hook("this.listeners", {}, "assign");
        }
        e.prototype.on = cc11001100_hook("e.prototype.on", function (e, t) {
          this.listeners = cc11001100_hook("this.listeners", this.listeners || {}, "assign"), e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = cc11001100_hook("this.listeners[e]", [t], "assign");
        }, "assign"), e.prototype.trigger = cc11001100_hook("e.prototype.trigger", function (e) {
          var t = cc11001100_hook("t", Array.prototype.slice, "var-init"),
            n = cc11001100_hook("n", t.call(arguments, 1), "var-init");
          this.listeners = cc11001100_hook("this.listeners", this.listeners || {}, "assign"), null == n && (n = cc11001100_hook("n", [], "assign")), 0 === n.length && n.push({}), (n[0]._type = cc11001100_hook("n[0]._type", e, "assign")) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, "assign"), e.prototype.invoke = cc11001100_hook("e.prototype.invoke", function (e, t) {
          for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) e[n].apply(this, t);
        }, "assign"), i.Observable = cc11001100_hook("i.Observable", e, "assign"), i.generateChars = cc11001100_hook("i.generateChars", function (e) {
          for (var t = cc11001100_hook("t", "", "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) {
            t += cc11001100_hook("t", Math.floor(36 * Math.random()).toString(36), "assign");
          }
          return t;
        }, "assign"), i.bind = cc11001100_hook("i.bind", function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }, "assign"), i._convertData = cc11001100_hook("i._convertData", function (e) {
          for (var t in e) {
            var n = cc11001100_hook("n", t.split("-"), "var-init"),
              r = cc11001100_hook("r", e, "var-init");
            if (1 !== n.length) {
              for (var i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
                var o = cc11001100_hook("o", n[i], "var-init");
                (o = cc11001100_hook("o", o.substring(0, 1).toLowerCase() + o.substring(1), "assign")) in r || (r[o] = cc11001100_hook("r[o]", {}, "assign")), i == n.length - 1 && (r[o] = cc11001100_hook("r[o]", e[t], "assign")), r = cc11001100_hook("r", r[o], "assign");
              }
              delete e[t];
            }
          }
          return e;
        }, "assign"), i.hasScroll = cc11001100_hook("i.hasScroll", function (e, t) {
          var n = cc11001100_hook("n", o(t), "var-init"),
            r = cc11001100_hook("r", t.style.overflowX, "var-init"),
            i = cc11001100_hook("i", t.style.overflowY, "var-init");
          return (r !== i || "hidden" !== i && "visible" !== i) && ("scroll" === r || "scroll" === i || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
        }, "assign"), i.escapeMarkup = cc11001100_hook("i.escapeMarkup", function (e) {
          var t = cc11001100_hook("t", {
            "\\": cc11001100_hook("\\", "&#92;", "object-key-init"),
            "&": cc11001100_hook("&", "&amp;", "object-key-init"),
            "<": cc11001100_hook("<", "&lt;", "object-key-init"),
            ">": cc11001100_hook(">", "&gt;", "object-key-init"),
            '"': cc11001100_hook('"', "&quot;", "object-key-init"),
            "'": cc11001100_hook("'", "&#39;", "object-key-init"),
            "/": cc11001100_hook("/", "&#47;", "object-key-init")
          }, "var-init");
          return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e];
          });
        }, "assign"), i.appendMany = cc11001100_hook("i.appendMany", function (e, t) {
          if ("1.7" === o.fn.jquery.substr(0, 3)) {
            var n = cc11001100_hook("n", o(), "var-init");
            o.map(t, function (e) {
              n = cc11001100_hook("n", n.add(e), "assign");
            }), t = cc11001100_hook("t", n, "assign");
          }
          e.append(t);
        }, "assign"), i.__cache = cc11001100_hook("i.__cache", {}, "assign");
        var n = cc11001100_hook("n", 0, "var-init");
        return i.GetUniqueElementId = cc11001100_hook("i.GetUniqueElementId", function (e) {
          var t = cc11001100_hook("t", e.getAttribute("data-select2-id"), "var-init");
          return null == t && (e.id ? (t = cc11001100_hook("t", e.id, "assign"), e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = cc11001100_hook("t", n.toString(), "assign"))), t;
        }, "assign"), i.StoreData = cc11001100_hook("i.StoreData", function (e, t, n) {
          var r = cc11001100_hook("r", i.GetUniqueElementId(e), "var-init");
          i.__cache[r] || (i.__cache[r] = cc11001100_hook("i.__cache[r]", {}, "assign")), i.__cache[r][t] = cc11001100_hook("i.__cache[r][t]", n, "assign");
        }, "assign"), i.GetData = cc11001100_hook("i.GetData", function (e, t) {
          var n = cc11001100_hook("n", i.GetUniqueElementId(e), "var-init");
          return t ? i.__cache[n] && null != i.__cache[n][t] ? i.__cache[n][t] : o(e).data(t) : i.__cache[n];
        }, "assign"), i.RemoveData = cc11001100_hook("i.RemoveData", function (e) {
          var t = cc11001100_hook("t", i.GetUniqueElementId(e), "var-init");
          null != i.__cache[t] && delete i.__cache[t], e.removeAttribute("data-select2-id");
        }, "assign"), i;
      }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
        function r(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          this.$element = cc11001100_hook("this.$element", e, "assign"), this.data = cc11001100_hook("this.data", n, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), r.__super__.constructor.call(this);
        }
        return f.Extend(r, f.Observable), r.prototype.render = cc11001100_hook("r.prototype.render", function () {
          var e = cc11001100_hook("e", h('<ul class="select2-results__options" role="listbox"></ul>'), "var-init");
          return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = cc11001100_hook("this.$results", e, "assign");
        }, "assign"), r.prototype.clear = cc11001100_hook("r.prototype.clear", function () {
          this.$results.empty();
        }, "assign"), r.prototype.displayMessage = cc11001100_hook("r.prototype.displayMessage", function (e) {
          var t = cc11001100_hook("t", this.options.get("escapeMarkup"), "var-init");
          this.clear(), this.hideLoading();
          var n = cc11001100_hook("n", h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'), "var-init"),
            r = cc11001100_hook("r", this.options.get("translations").get(e.message), "var-init");
          n.append(t(r(e.args))), n[0].className += cc11001100_hook("n[0].className", " select2-results__message", "assign"), this.$results.append(n);
        }, "assign"), r.prototype.hideMessages = cc11001100_hook("r.prototype.hideMessages", function () {
          this.$results.find(".select2-results__message").remove();
        }, "assign"), r.prototype.append = cc11001100_hook("r.prototype.append", function (e) {
          this.hideLoading();
          var t = cc11001100_hook("t", [], "var-init");
          if (null != e.results && 0 !== e.results.length) {
            e.results = cc11001100_hook("e.results", this.sort(e.results), "assign");
            for (var n = cc11001100_hook("n", 0, "var-init"); n < e.results.length; n++) {
              var r = cc11001100_hook("r", e.results[n], "var-init"),
                i = cc11001100_hook("i", this.option(r), "var-init");
              t.push(i);
            }
            this.$results.append(t);
          } else 0 === this.$results.children().length && this.trigger("results:message", {
            message: cc11001100_hook("message", "noResults", "object-key-init")
          });
        }, "assign"), r.prototype.position = cc11001100_hook("r.prototype.position", function (e, t) {
          t.find(".select2-results").append(e);
        }, "assign"), r.prototype.sort = cc11001100_hook("r.prototype.sort", function (e) {
          return this.options.get("sorter")(e);
        }, "assign"), r.prototype.highlightFirstItem = cc11001100_hook("r.prototype.highlightFirstItem", function () {
          var e = cc11001100_hook("e", this.$results.find(".select2-results__option[aria-selected]"), "var-init"),
            t = cc11001100_hook("t", e.filter("[aria-selected=true]"), "var-init");
          0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, "assign"), r.prototype.setClasses = cc11001100_hook("r.prototype.setClasses", function () {
          var t = cc11001100_hook("t", this, "var-init");
          this.data.current(function (e) {
            var r = cc11001100_hook("r", h.map(e, function (e) {
              return e.id.toString();
            }), "var-init");
            t.$results.find(".select2-results__option[aria-selected]").each(function () {
              var e = cc11001100_hook("e", h(this), "var-init"),
                t = cc11001100_hook("t", f.GetData(this, "data"), "var-init"),
                n = cc11001100_hook("n", "" + t.id, "var-init");
              null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, r) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false");
            });
          });
        }, "assign"), r.prototype.showLoading = cc11001100_hook("r.prototype.showLoading", function (e) {
          this.hideLoading();
          var t = cc11001100_hook("t", {
              disabled: cc11001100_hook("disabled", !0, "object-key-init"),
              loading: cc11001100_hook("loading", !0, "object-key-init"),
              text: cc11001100_hook("text", this.options.get("translations").get("searching")(e), "object-key-init")
            }, "var-init"),
            n = cc11001100_hook("n", this.option(t), "var-init");
          n.className += cc11001100_hook("n.className", " loading-results", "assign"), this.$results.prepend(n);
        }, "assign"), r.prototype.hideLoading = cc11001100_hook("r.prototype.hideLoading", function () {
          this.$results.find(".loading-results").remove();
        }, "assign"), r.prototype.option = cc11001100_hook("r.prototype.option", function (e) {
          var t = cc11001100_hook("t", document.createElement("li"), "var-init");
          t.className = cc11001100_hook("t.className", "select2-results__option", "assign");
          var n = cc11001100_hook("n", {
              role: cc11001100_hook("role", "option", "object-key-init"),
              "aria-selected": cc11001100_hook("aria-selected", "false", "object-key-init")
            }, "var-init"),
            r = cc11001100_hook("r", window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector, "var-init");
          for (var i in (null != e.element && r.call(e.element, ":disabled") || null == e.element && e.disabled) && (delete n["aria-selected"], n["aria-disabled"] = cc11001100_hook("n[\"aria-disabled\"]", "true", "assign")), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = cc11001100_hook("t.id", e._resultId, "assign")), e.title && (t.title = cc11001100_hook("t.title", e.title, "assign")), e.children && (n.role = cc11001100_hook("n.role", "group", "assign"), n["aria-label"] = cc11001100_hook("n[\"aria-label\"]", e.text, "assign"), delete n["aria-selected"]), n) {
            var o = cc11001100_hook("o", n[i], "var-init");
            t.setAttribute(i, o);
          }
          if (e.children) {
            var s = cc11001100_hook("s", h(t), "var-init"),
              a = cc11001100_hook("a", document.createElement("strong"), "var-init");
            a.className = cc11001100_hook("a.className", "select2-results__group", "assign");
            h(a);
            this.template(e, a);
            for (var l = cc11001100_hook("l", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < e.children.length; c++) {
              var u = cc11001100_hook("u", e.children[c], "var-init"),
                d = cc11001100_hook("d", this.option(u), "var-init");
              l.push(d);
            }
            var p = cc11001100_hook("p", h("<ul></ul>", {
              class: cc11001100_hook("class", "select2-results__options select2-results__options--nested", "object-key-init")
            }), "var-init");
            p.append(l), s.append(a), s.append(p);
          } else this.template(e, t);
          return f.StoreData(t, "data", e), t;
        }, "assign"), r.prototype.bind = cc11001100_hook("r.prototype.bind", function (t, e) {
          var l = cc11001100_hook("l", this, "var-init"),
            n = cc11001100_hook("n", t.id + "-results", "var-init");
          this.$results.attr("id", n), t.on("results:all", function (e) {
            l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
          }), t.on("results:append", function (e) {
            l.append(e.data), t.isOpen() && l.setClasses();
          }), t.on("query", function (e) {
            l.hideMessages(), l.showLoading(e);
          }), t.on("select", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("unselect", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("open", function () {
            l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
          }), t.on("close", function () {
            l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
          }), t.on("results:toggle", function () {
            var e = cc11001100_hook("e", l.getHighlightedResults(), "var-init");
            0 !== e.length && e.trigger("mouseup");
          }), t.on("results:select", function () {
            var e = cc11001100_hook("e", l.getHighlightedResults(), "var-init");
            if (0 !== e.length) {
              var t = cc11001100_hook("t", f.GetData(e[0], "data"), "var-init");
              "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                data: cc11001100_hook("data", t, "object-key-init")
              });
            }
          }), t.on("results:previous", function () {
            var e = cc11001100_hook("e", l.getHighlightedResults(), "var-init"),
              t = cc11001100_hook("t", l.$results.find("[aria-selected]"), "var-init"),
              n = cc11001100_hook("n", t.index(e), "var-init");
            if (!(n <= 0)) {
              var r = cc11001100_hook("r", n - 1, "var-init");
              0 === e.length && (r = cc11001100_hook("r", 0, "assign"));
              var i = cc11001100_hook("i", t.eq(r), "var-init");
              i.trigger("mouseenter");
              var o = cc11001100_hook("o", l.$results.offset().top, "var-init"),
                s = cc11001100_hook("s", i.offset().top, "var-init"),
                a = cc11001100_hook("a", l.$results.scrollTop() + (s - o), "var-init");
              0 === r ? l.$results.scrollTop(0) : s - o < 0 && l.$results.scrollTop(a);
            }
          }), t.on("results:next", function () {
            var e = cc11001100_hook("e", l.getHighlightedResults(), "var-init"),
              t = cc11001100_hook("t", l.$results.find("[aria-selected]"), "var-init"),
              n = cc11001100_hook("n", t.index(e) + 1, "var-init");
            if (!(n >= t.length)) {
              var r = cc11001100_hook("r", t.eq(n), "var-init");
              r.trigger("mouseenter");
              var i = cc11001100_hook("i", l.$results.offset().top + l.$results.outerHeight(!1), "var-init"),
                o = cc11001100_hook("o", r.offset().top + r.outerHeight(!1), "var-init"),
                s = cc11001100_hook("s", l.$results.scrollTop() + o - i, "var-init");
              0 === n ? l.$results.scrollTop(0) : i < o && l.$results.scrollTop(s);
            }
          }), t.on("results:focus", function (e) {
            e.element.addClass("select2-results__option--highlighted");
          }), t.on("results:message", function (e) {
            l.displayMessage(e);
          }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
            var t = cc11001100_hook("t", l.$results.scrollTop(), "var-init"),
              n = cc11001100_hook("n", l.$results.get(0).scrollHeight - t + e.deltaY, "var-init"),
              r = cc11001100_hook("r", 0 < e.deltaY && t - e.deltaY <= 0, "var-init"),
              i = cc11001100_hook("i", e.deltaY < 0 && n <= l.$results.height(), "var-init");
            r ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : i && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
            var t = cc11001100_hook("t", h(this), "var-init"),
              n = cc11001100_hook("n", f.GetData(this, "data"), "var-init");
            "true" !== t.attr("aria-selected") ? l.trigger("select", {
              originalEvent: cc11001100_hook("originalEvent", e, "object-key-init"),
              data: cc11001100_hook("data", n, "object-key-init")
            }) : l.options.get("multiple") ? l.trigger("unselect", {
              originalEvent: cc11001100_hook("originalEvent", e, "object-key-init"),
              data: cc11001100_hook("data", n, "object-key-init")
            }) : l.trigger("close", {});
          }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
            var t = cc11001100_hook("t", f.GetData(this, "data"), "var-init");
            l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
              data: cc11001100_hook("data", t, "object-key-init"),
              element: cc11001100_hook("element", h(this), "object-key-init")
            });
          });
        }, "assign"), r.prototype.getHighlightedResults = cc11001100_hook("r.prototype.getHighlightedResults", function () {
          return this.$results.find(".select2-results__option--highlighted");
        }, "assign"), r.prototype.destroy = cc11001100_hook("r.prototype.destroy", function () {
          this.$results.remove();
        }, "assign"), r.prototype.ensureHighlightVisible = cc11001100_hook("r.prototype.ensureHighlightVisible", function () {
          var e = cc11001100_hook("e", this.getHighlightedResults(), "var-init");
          if (0 !== e.length) {
            var t = cc11001100_hook("t", this.$results.find("[aria-selected]").index(e), "var-init"),
              n = cc11001100_hook("n", this.$results.offset().top, "var-init"),
              r = cc11001100_hook("r", e.offset().top, "var-init"),
              i = cc11001100_hook("i", this.$results.scrollTop() + (r - n), "var-init"),
              o = cc11001100_hook("o", r - n, "var-init");
            i -= cc11001100_hook("i", 2 * e.outerHeight(!1), "assign"), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(i);
          }
        }, "assign"), r.prototype.template = cc11001100_hook("r.prototype.template", function (e, t) {
          var n = cc11001100_hook("n", this.options.get("templateResult"), "var-init"),
            r = cc11001100_hook("r", this.options.get("escapeMarkup"), "var-init"),
            i = cc11001100_hook("i", n(e, t), "var-init");
          null == i ? t.style.display = cc11001100_hook("t.style.display", "none", "assign") : "string" == typeof i ? t.innerHTML = cc11001100_hook("t.innerHTML", r(i), "assign") : h(t).append(i);
        }, "assign"), r;
      }), e.define("select2/keys", [], function () {
        return {
          BACKSPACE: cc11001100_hook("BACKSPACE", 8, "object-key-init"),
          TAB: cc11001100_hook("TAB", 9, "object-key-init"),
          ENTER: cc11001100_hook("ENTER", 13, "object-key-init"),
          SHIFT: cc11001100_hook("SHIFT", 16, "object-key-init"),
          CTRL: cc11001100_hook("CTRL", 17, "object-key-init"),
          ALT: cc11001100_hook("ALT", 18, "object-key-init"),
          ESC: cc11001100_hook("ESC", 27, "object-key-init"),
          SPACE: cc11001100_hook("SPACE", 32, "object-key-init"),
          PAGE_UP: cc11001100_hook("PAGE_UP", 33, "object-key-init"),
          PAGE_DOWN: cc11001100_hook("PAGE_DOWN", 34, "object-key-init"),
          END: cc11001100_hook("END", 35, "object-key-init"),
          HOME: cc11001100_hook("HOME", 36, "object-key-init"),
          LEFT: cc11001100_hook("LEFT", 37, "object-key-init"),
          UP: cc11001100_hook("UP", 38, "object-key-init"),
          RIGHT: cc11001100_hook("RIGHT", 39, "object-key-init"),
          DOWN: cc11001100_hook("DOWN", 40, "object-key-init"),
          DELETE: cc11001100_hook("DELETE", 46, "object-key-init")
        };
      }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, r, i) {
        function o(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          this.$element = cc11001100_hook("this.$element", e, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), o.__super__.constructor.call(this);
        }
        return r.Extend(o, r.Observable), o.prototype.render = cc11001100_hook("o.prototype.render", function () {
          var e = cc11001100_hook("e", n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'), "var-init");
          return this._tabindex = cc11001100_hook("this._tabindex", 0, "assign"), null != r.GetData(this.$element[0], "old-tabindex") ? this._tabindex = cc11001100_hook("this._tabindex", r.GetData(this.$element[0], "old-tabindex"), "assign") : null != this.$element.attr("tabindex") && (this._tabindex = cc11001100_hook("this._tabindex", this.$element.attr("tabindex"), "assign")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = cc11001100_hook("this.$selection", e, "assign");
        }, "assign"), o.prototype.bind = cc11001100_hook("o.prototype.bind", function (e, t) {
          var n = cc11001100_hook("n", this, "var-init"),
            r = cc11001100_hook("r", e.id + "-results", "var-init");
          this.container = cc11001100_hook("this.container", e, "assign"), this.$selection.on("focus", function (e) {
            n.trigger("focus", e);
          }), this.$selection.on("blur", function (e) {
            n._handleBlur(e);
          }), this.$selection.on("keydown", function (e) {
            n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault();
          }), e.on("results:focus", function (e) {
            n.$selection.attr("aria-activedescendant", e.data._resultId);
          }), e.on("selection:update", function (e) {
            n.update(e.data);
          }), e.on("open", function () {
            n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", r), n._attachCloseHandler(e);
          }), e.on("close", function () {
            n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
          }), e.on("enable", function () {
            n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
          }), e.on("disable", function () {
            n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
          });
        }, "assign"), o.prototype._handleBlur = cc11001100_hook("o.prototype._handleBlur", function (e) {
          var t = cc11001100_hook("t", this, "var-init");
          window.setTimeout(function () {
            document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
          }, 1);
        }, "assign"), o.prototype._attachCloseHandler = cc11001100_hook("o.prototype._attachCloseHandler", function (e) {
          n(document.body).on("mousedown.select2." + e.id, function (e) {
            var t = cc11001100_hook("t", n(e.target).closest(".select2"), "var-init");
            n(".select2.select2-container--open").each(function () {
              this != t[0] && r.GetData(this, "element").select2("close");
            });
          });
        }, "assign"), o.prototype._detachCloseHandler = cc11001100_hook("o.prototype._detachCloseHandler", function (e) {
          n(document.body).off("mousedown.select2." + e.id);
        }, "assign"), o.prototype.position = cc11001100_hook("o.prototype.position", function (e, t) {
          t.find(".selection").append(e);
        }, "assign"), o.prototype.destroy = cc11001100_hook("o.prototype.destroy", function () {
          this._detachCloseHandler(this.container);
        }, "assign"), o.prototype.update = cc11001100_hook("o.prototype.update", function (e) {
          throw new Error("The `update` method must be defined in child classes.");
        }, "assign"), o.prototype.isEnabled = cc11001100_hook("o.prototype.isEnabled", function () {
          return !this.isDisabled();
        }, "assign"), o.prototype.isDisabled = cc11001100_hook("o.prototype.isDisabled", function () {
          return this.options.get("disabled");
        }, "assign"), o;
      }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, r) {
        function i() {
          i.__super__.constructor.apply(this, arguments);
        }
        return n.Extend(i, t), i.prototype.render = cc11001100_hook("i.prototype.render", function () {
          var e = cc11001100_hook("e", i.__super__.render.call(this), "var-init");
          return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
        }, "assign"), i.prototype.bind = cc11001100_hook("i.prototype.bind", function (t, e) {
          var n = cc11001100_hook("n", this, "var-init");
          i.__super__.bind.apply(this, arguments);
          var r = cc11001100_hook("r", t.id + "-container", "var-init");
          this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", r), this.$selection.on("mousedown", function (e) {
            1 === e.which && n.trigger("toggle", {
              originalEvent: cc11001100_hook("originalEvent", e, "object-key-init")
            });
          }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
            t.isOpen() || n.$selection.trigger("focus");
          });
        }, "assign"), i.prototype.clear = cc11001100_hook("i.prototype.clear", function () {
          var e = cc11001100_hook("e", this.$selection.find(".select2-selection__rendered"), "var-init");
          e.empty(), e.removeAttr("title");
        }, "assign"), i.prototype.display = cc11001100_hook("i.prototype.display", function (e, t) {
          var n = cc11001100_hook("n", this.options.get("templateSelection"), "var-init");
          return this.options.get("escapeMarkup")(n(e, t));
        }, "assign"), i.prototype.selectionContainer = cc11001100_hook("i.prototype.selectionContainer", function () {
          return e("<span></span>");
        }, "assign"), i.prototype.update = cc11001100_hook("i.prototype.update", function (e) {
          if (0 !== e.length) {
            var t = cc11001100_hook("t", e[0], "var-init"),
              n = cc11001100_hook("n", this.$selection.find(".select2-selection__rendered"), "var-init"),
              r = cc11001100_hook("r", this.display(t, n), "var-init");
            n.empty().append(r);
            var i = cc11001100_hook("i", t.title || t.text, "var-init");
            i ? n.attr("title", i) : n.removeAttr("title");
          } else this.clear();
        }, "assign"), i;
      }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, l) {
        function n(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          n.__super__.constructor.apply(this, arguments);
        }
        return l.Extend(n, e), n.prototype.render = cc11001100_hook("n.prototype.render", function () {
          var e = cc11001100_hook("e", n.__super__.render.call(this), "var-init");
          return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
        }, "assign"), n.prototype.bind = cc11001100_hook("n.prototype.bind", function (e, t) {
          var r = cc11001100_hook("r", this, "var-init");
          n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
            r.trigger("toggle", {
              originalEvent: cc11001100_hook("originalEvent", e, "object-key-init")
            });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
            if (!r.isDisabled()) {
              var t = cc11001100_hook("t", i(this).parent(), "var-init"),
                n = cc11001100_hook("n", l.GetData(t[0], "data"), "var-init");
              r.trigger("unselect", {
                originalEvent: cc11001100_hook("originalEvent", e, "object-key-init"),
                data: cc11001100_hook("data", n, "object-key-init")
              });
            }
          });
        }, "assign"), n.prototype.clear = cc11001100_hook("n.prototype.clear", function () {
          var e = cc11001100_hook("e", this.$selection.find(".select2-selection__rendered"), "var-init");
          e.empty(), e.removeAttr("title");
        }, "assign"), n.prototype.display = cc11001100_hook("n.prototype.display", function (e, t) {
          var n = cc11001100_hook("n", this.options.get("templateSelection"), "var-init");
          return this.options.get("escapeMarkup")(n(e, t));
        }, "assign"), n.prototype.selectionContainer = cc11001100_hook("n.prototype.selectionContainer", function () {
          return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        }, "assign"), n.prototype.update = cc11001100_hook("n.prototype.update", function (e) {
          if (this.clear(), 0 !== e.length) {
            for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
              var r = cc11001100_hook("r", e[n], "var-init"),
                i = cc11001100_hook("i", this.selectionContainer(), "var-init"),
                o = cc11001100_hook("o", this.display(r, i), "var-init");
              i.append(o);
              var s = cc11001100_hook("s", r.title || r.text, "var-init");
              s && i.attr("title", s), l.StoreData(i[0], "data", r), t.push(i);
            }
            var a = cc11001100_hook("a", this.$selection.find(".select2-selection__rendered"), "var-init");
            l.appendMany(a, t);
          }
        }, "assign"), n;
      }), e.define("select2/selection/placeholder", ["../utils"], function (e) {
        function t(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          this.placeholder = cc11001100_hook("this.placeholder", this.normalizePlaceholder(n.get("placeholder")), "assign"), e.call(this, t, n);
        }
        return t.prototype.normalizePlaceholder = cc11001100_hook("t.prototype.normalizePlaceholder", function (e, t) {
          return "string" == typeof t && (t = cc11001100_hook("t", {
            id: cc11001100_hook("id", "", "object-key-init"),
            text: cc11001100_hook("text", t, "object-key-init")
          }, "assign")), t;
        }, "assign"), t.prototype.createPlaceholder = cc11001100_hook("t.prototype.createPlaceholder", function (e, t) {
          var n = cc11001100_hook("n", this.selectionContainer(), "var-init");
          return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
        }, "assign"), t.prototype.update = cc11001100_hook("t.prototype.update", function (e, t) {
          var n = cc11001100_hook("n", 1 == t.length && t[0].id != this.placeholder.id, "var-init");
          if (1 < t.length || n) return e.call(this, t);
          this.clear();
          var r = cc11001100_hook("r", this.createPlaceholder(this.placeholder), "var-init");
          this.$selection.find(".select2-selection__rendered").append(r);
        }, "assign"), t;
      }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (i, r, a) {
        function e() {}
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
            r._handleClear(e);
          }), t.on("keypress", function (e) {
            r._handleKeyboardClear(e, t);
          });
        }, "assign"), e.prototype._handleClear = cc11001100_hook("e.prototype._handleClear", function (e, t) {
          if (!this.isDisabled()) {
            var n = cc11001100_hook("n", this.$selection.find(".select2-selection__clear"), "var-init");
            if (0 !== n.length) {
              t.stopPropagation();
              var r = cc11001100_hook("r", a.GetData(n[0], "data"), "var-init"),
                i = cc11001100_hook("i", this.$element.val(), "var-init");
              this.$element.val(this.placeholder.id);
              var o = cc11001100_hook("o", {
                data: cc11001100_hook("data", r, "object-key-init")
              }, "var-init");
              if (this.trigger("clear", o), o.prevented) this.$element.val(i);else {
                for (var s = cc11001100_hook("s", 0, "var-init"); s < r.length; s++) if (o = cc11001100_hook("o", {
                  data: cc11001100_hook("data", r[s], "object-key-init")
                }, "assign"), this.trigger("unselect", o), o.prevented) return void this.$element.val(i);
                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, "assign"), e.prototype._handleKeyboardClear = cc11001100_hook("e.prototype._handleKeyboardClear", function (e, t, n) {
          n.isOpen() || t.which != r.DELETE && t.which != r.BACKSPACE || this._handleClear(t);
        }, "assign"), e.prototype.update = cc11001100_hook("e.prototype.update", function (e, t) {
          if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
            var n = cc11001100_hook("n", this.options.get("translations").get("removeAllItems"), "var-init"),
              r = cc11001100_hook("r", i('<span class="select2-selection__clear" title="' + n() + '">&times;</span>'), "var-init");
            a.StoreData(r[0], "data", t), this.$selection.find(".select2-selection__rendered").prepend(r);
          }
        }, "assign"), e;
      }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (r, a, l) {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          e.call(this, t, n);
        }
        return e.prototype.render = cc11001100_hook("e.prototype.render", function (e) {
          var t = cc11001100_hook("t", r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'), "var-init");
          this.$searchContainer = cc11001100_hook("this.$searchContainer", t, "assign"), this.$search = cc11001100_hook("this.$search", t.find("input"), "assign");
          var n = cc11001100_hook("n", e.call(this), "var-init");
          return this._transferTabIndex(), n;
        }, "assign"), e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init"),
            i = cc11001100_hook("i", t.id + "-results", "var-init");
          e.call(this, t, n), t.on("open", function () {
            r.$search.attr("aria-controls", i), r.$search.trigger("focus");
          }), t.on("close", function () {
            r.$search.val(""), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus");
          }), t.on("enable", function () {
            r.$search.prop("disabled", !1), r._transferTabIndex();
          }), t.on("disable", function () {
            r.$search.prop("disabled", !0);
          }), t.on("focus", function (e) {
            r.$search.trigger("focus");
          }), t.on("results:focus", function (e) {
            e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
            r.trigger("focus", e);
          }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
            r._handleBlur(e);
          }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
            if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = cc11001100_hook("r._keyUpPrevented", e.isDefaultPrevented(), "assign"), e.which === l.BACKSPACE && "" === r.$search.val()) {
              var t = cc11001100_hook("t", r.$searchContainer.prev(".select2-selection__choice"), "var-init");
              if (0 < t.length) {
                var n = cc11001100_hook("n", a.GetData(t[0], "data"), "var-init");
                r.searchRemoveChoice(n), e.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function (e) {
            r.$search.val() && e.stopPropagation();
          });
          var o = cc11001100_hook("o", document.documentMode, "var-init"),
            s = cc11001100_hook("s", o && o <= 11, "var-init");
          this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
            s ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
            if (s && "input" === e.type) r.$selection.off("input.search input.searchcheck");else {
              var t = cc11001100_hook("t", e.which, "var-init");
              t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && r.handleSearch(e);
            }
          });
        }, "assign"), e.prototype._transferTabIndex = cc11001100_hook("e.prototype._transferTabIndex", function (e) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, "assign"), e.prototype.createPlaceholder = cc11001100_hook("e.prototype.createPlaceholder", function (e, t) {
          this.$search.attr("placeholder", t.text);
        }, "assign"), e.prototype.update = cc11001100_hook("e.prototype.update", function (e, t) {
          var n = cc11001100_hook("n", this.$search[0] == document.activeElement, "var-init");
          this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus");
        }, "assign"), e.prototype.handleSearch = cc11001100_hook("e.prototype.handleSearch", function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e = cc11001100_hook("e", this.$search.val(), "var-init");
            this.trigger("query", {
              term: cc11001100_hook("term", e, "object-key-init")
            });
          }
          this._keyUpPrevented = cc11001100_hook("this._keyUpPrevented", !1, "assign");
        }, "assign"), e.prototype.searchRemoveChoice = cc11001100_hook("e.prototype.searchRemoveChoice", function (e, t) {
          this.trigger("unselect", {
            data: cc11001100_hook("data", t, "object-key-init")
          }), this.$search.val(t.text), this.handleSearch();
        }, "assign"), e.prototype.resizeSearch = cc11001100_hook("e.prototype.resizeSearch", function () {
          this.$search.css("width", "25px");
          var e = cc11001100_hook("e", "", "var-init");
          "" !== this.$search.attr("placeholder") ? e = cc11001100_hook("e", this.$selection.find(".select2-selection__rendered").width(), "assign") : e = cc11001100_hook("e", .75 * (this.$search.val().length + 1) + "em", "assign");
          this.$search.css("width", e);
        }, "assign"), e;
      }), e.define("select2/selection/eventRelay", ["jquery"], function (s) {
        function e() {}
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init"),
            i = cc11001100_hook("i", ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"], "var-init"),
            o = cc11001100_hook("o", ["opening", "closing", "selecting", "unselecting", "clearing"], "var-init");
          e.call(this, t, n), t.on("*", function (e, t) {
            if (-1 !== s.inArray(e, i)) {
              t = cc11001100_hook("t", t || {}, "assign");
              var n = cc11001100_hook("n", s.Event("select2:" + e, {
                params: cc11001100_hook("params", t, "object-key-init")
              }), "var-init");
              r.$element.trigger(n), -1 !== s.inArray(e, o) && (t.prevented = cc11001100_hook("t.prevented", n.isDefaultPrevented(), "assign"));
            }
          });
        }, "assign"), e;
      }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
        function r(e) {
          cc11001100_hook("e", e, "function-parameter");
          this.dict = cc11001100_hook("this.dict", e || {}, "assign");
        }
        return r.prototype.all = cc11001100_hook("r.prototype.all", function () {
          return this.dict;
        }, "assign"), r.prototype.get = cc11001100_hook("r.prototype.get", function (e) {
          return this.dict[e];
        }, "assign"), r.prototype.extend = cc11001100_hook("r.prototype.extend", function (e) {
          this.dict = cc11001100_hook("this.dict", t.extend({}, e.all(), this.dict), "assign");
        }, "assign"), r._cache = cc11001100_hook("r._cache", {}, "assign"), r.loadPath = cc11001100_hook("r.loadPath", function (e) {
          if (!(e in r._cache)) {
            var t = cc11001100_hook("t", n(e), "var-init");
            r._cache[e] = cc11001100_hook("r._cache[e]", t, "assign");
          }
          return new r(r._cache[e]);
        }, "assign"), r;
      }), e.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": cc11001100_hook("Ⓐ", "A", "object-key-init"),
          "Ａ": cc11001100_hook("Ａ", "A", "object-key-init"),
          "À": cc11001100_hook("À", "A", "object-key-init"),
          "Á": cc11001100_hook("Á", "A", "object-key-init"),
          "Â": cc11001100_hook("Â", "A", "object-key-init"),
          "Ầ": cc11001100_hook("Ầ", "A", "object-key-init"),
          "Ấ": cc11001100_hook("Ấ", "A", "object-key-init"),
          "Ẫ": cc11001100_hook("Ẫ", "A", "object-key-init"),
          "Ẩ": cc11001100_hook("Ẩ", "A", "object-key-init"),
          "Ã": cc11001100_hook("Ã", "A", "object-key-init"),
          "Ā": cc11001100_hook("Ā", "A", "object-key-init"),
          "Ă": cc11001100_hook("Ă", "A", "object-key-init"),
          "Ằ": cc11001100_hook("Ằ", "A", "object-key-init"),
          "Ắ": cc11001100_hook("Ắ", "A", "object-key-init"),
          "Ẵ": cc11001100_hook("Ẵ", "A", "object-key-init"),
          "Ẳ": cc11001100_hook("Ẳ", "A", "object-key-init"),
          "Ȧ": cc11001100_hook("Ȧ", "A", "object-key-init"),
          "Ǡ": cc11001100_hook("Ǡ", "A", "object-key-init"),
          "Ä": cc11001100_hook("Ä", "A", "object-key-init"),
          "Ǟ": cc11001100_hook("Ǟ", "A", "object-key-init"),
          "Ả": cc11001100_hook("Ả", "A", "object-key-init"),
          "Å": cc11001100_hook("Å", "A", "object-key-init"),
          "Ǻ": cc11001100_hook("Ǻ", "A", "object-key-init"),
          "Ǎ": cc11001100_hook("Ǎ", "A", "object-key-init"),
          "Ȁ": cc11001100_hook("Ȁ", "A", "object-key-init"),
          "Ȃ": cc11001100_hook("Ȃ", "A", "object-key-init"),
          "Ạ": cc11001100_hook("Ạ", "A", "object-key-init"),
          "Ậ": cc11001100_hook("Ậ", "A", "object-key-init"),
          "Ặ": cc11001100_hook("Ặ", "A", "object-key-init"),
          "Ḁ": cc11001100_hook("Ḁ", "A", "object-key-init"),
          "Ą": cc11001100_hook("Ą", "A", "object-key-init"),
          "Ⱥ": cc11001100_hook("Ⱥ", "A", "object-key-init"),
          "Ɐ": cc11001100_hook("Ɐ", "A", "object-key-init"),
          "Ꜳ": cc11001100_hook("Ꜳ", "AA", "object-key-init"),
          "Æ": cc11001100_hook("Æ", "AE", "object-key-init"),
          "Ǽ": cc11001100_hook("Ǽ", "AE", "object-key-init"),
          "Ǣ": cc11001100_hook("Ǣ", "AE", "object-key-init"),
          "Ꜵ": cc11001100_hook("Ꜵ", "AO", "object-key-init"),
          "Ꜷ": cc11001100_hook("Ꜷ", "AU", "object-key-init"),
          "Ꜹ": cc11001100_hook("Ꜹ", "AV", "object-key-init"),
          "Ꜻ": cc11001100_hook("Ꜻ", "AV", "object-key-init"),
          "Ꜽ": cc11001100_hook("Ꜽ", "AY", "object-key-init"),
          "Ⓑ": cc11001100_hook("Ⓑ", "B", "object-key-init"),
          "Ｂ": cc11001100_hook("Ｂ", "B", "object-key-init"),
          "Ḃ": cc11001100_hook("Ḃ", "B", "object-key-init"),
          "Ḅ": cc11001100_hook("Ḅ", "B", "object-key-init"),
          "Ḇ": cc11001100_hook("Ḇ", "B", "object-key-init"),
          "Ƀ": cc11001100_hook("Ƀ", "B", "object-key-init"),
          "Ƃ": cc11001100_hook("Ƃ", "B", "object-key-init"),
          "Ɓ": cc11001100_hook("Ɓ", "B", "object-key-init"),
          "Ⓒ": cc11001100_hook("Ⓒ", "C", "object-key-init"),
          "Ｃ": cc11001100_hook("Ｃ", "C", "object-key-init"),
          "Ć": cc11001100_hook("Ć", "C", "object-key-init"),
          "Ĉ": cc11001100_hook("Ĉ", "C", "object-key-init"),
          "Ċ": cc11001100_hook("Ċ", "C", "object-key-init"),
          "Č": cc11001100_hook("Č", "C", "object-key-init"),
          "Ç": cc11001100_hook("Ç", "C", "object-key-init"),
          "Ḉ": cc11001100_hook("Ḉ", "C", "object-key-init"),
          "Ƈ": cc11001100_hook("Ƈ", "C", "object-key-init"),
          "Ȼ": cc11001100_hook("Ȼ", "C", "object-key-init"),
          "Ꜿ": cc11001100_hook("Ꜿ", "C", "object-key-init"),
          "Ⓓ": cc11001100_hook("Ⓓ", "D", "object-key-init"),
          "Ｄ": cc11001100_hook("Ｄ", "D", "object-key-init"),
          "Ḋ": cc11001100_hook("Ḋ", "D", "object-key-init"),
          "Ď": cc11001100_hook("Ď", "D", "object-key-init"),
          "Ḍ": cc11001100_hook("Ḍ", "D", "object-key-init"),
          "Ḑ": cc11001100_hook("Ḑ", "D", "object-key-init"),
          "Ḓ": cc11001100_hook("Ḓ", "D", "object-key-init"),
          "Ḏ": cc11001100_hook("Ḏ", "D", "object-key-init"),
          "Đ": cc11001100_hook("Đ", "D", "object-key-init"),
          "Ƌ": cc11001100_hook("Ƌ", "D", "object-key-init"),
          "Ɗ": cc11001100_hook("Ɗ", "D", "object-key-init"),
          "Ɖ": cc11001100_hook("Ɖ", "D", "object-key-init"),
          "Ꝺ": cc11001100_hook("Ꝺ", "D", "object-key-init"),
          "Ǳ": cc11001100_hook("Ǳ", "DZ", "object-key-init"),
          "Ǆ": cc11001100_hook("Ǆ", "DZ", "object-key-init"),
          "ǲ": cc11001100_hook("ǲ", "Dz", "object-key-init"),
          "ǅ": cc11001100_hook("ǅ", "Dz", "object-key-init"),
          "Ⓔ": cc11001100_hook("Ⓔ", "E", "object-key-init"),
          "Ｅ": cc11001100_hook("Ｅ", "E", "object-key-init"),
          "È": cc11001100_hook("È", "E", "object-key-init"),
          "É": cc11001100_hook("É", "E", "object-key-init"),
          "Ê": cc11001100_hook("Ê", "E", "object-key-init"),
          "Ề": cc11001100_hook("Ề", "E", "object-key-init"),
          "Ế": cc11001100_hook("Ế", "E", "object-key-init"),
          "Ễ": cc11001100_hook("Ễ", "E", "object-key-init"),
          "Ể": cc11001100_hook("Ể", "E", "object-key-init"),
          "Ẽ": cc11001100_hook("Ẽ", "E", "object-key-init"),
          "Ē": cc11001100_hook("Ē", "E", "object-key-init"),
          "Ḕ": cc11001100_hook("Ḕ", "E", "object-key-init"),
          "Ḗ": cc11001100_hook("Ḗ", "E", "object-key-init"),
          "Ĕ": cc11001100_hook("Ĕ", "E", "object-key-init"),
          "Ė": cc11001100_hook("Ė", "E", "object-key-init"),
          "Ë": cc11001100_hook("Ë", "E", "object-key-init"),
          "Ẻ": cc11001100_hook("Ẻ", "E", "object-key-init"),
          "Ě": cc11001100_hook("Ě", "E", "object-key-init"),
          "Ȅ": cc11001100_hook("Ȅ", "E", "object-key-init"),
          "Ȇ": cc11001100_hook("Ȇ", "E", "object-key-init"),
          "Ẹ": cc11001100_hook("Ẹ", "E", "object-key-init"),
          "Ệ": cc11001100_hook("Ệ", "E", "object-key-init"),
          "Ȩ": cc11001100_hook("Ȩ", "E", "object-key-init"),
          "Ḝ": cc11001100_hook("Ḝ", "E", "object-key-init"),
          "Ę": cc11001100_hook("Ę", "E", "object-key-init"),
          "Ḙ": cc11001100_hook("Ḙ", "E", "object-key-init"),
          "Ḛ": cc11001100_hook("Ḛ", "E", "object-key-init"),
          "Ɛ": cc11001100_hook("Ɛ", "E", "object-key-init"),
          "Ǝ": cc11001100_hook("Ǝ", "E", "object-key-init"),
          "Ⓕ": cc11001100_hook("Ⓕ", "F", "object-key-init"),
          "Ｆ": cc11001100_hook("Ｆ", "F", "object-key-init"),
          "Ḟ": cc11001100_hook("Ḟ", "F", "object-key-init"),
          "Ƒ": cc11001100_hook("Ƒ", "F", "object-key-init"),
          "Ꝼ": cc11001100_hook("Ꝼ", "F", "object-key-init"),
          "Ⓖ": cc11001100_hook("Ⓖ", "G", "object-key-init"),
          "Ｇ": cc11001100_hook("Ｇ", "G", "object-key-init"),
          "Ǵ": cc11001100_hook("Ǵ", "G", "object-key-init"),
          "Ĝ": cc11001100_hook("Ĝ", "G", "object-key-init"),
          "Ḡ": cc11001100_hook("Ḡ", "G", "object-key-init"),
          "Ğ": cc11001100_hook("Ğ", "G", "object-key-init"),
          "Ġ": cc11001100_hook("Ġ", "G", "object-key-init"),
          "Ǧ": cc11001100_hook("Ǧ", "G", "object-key-init"),
          "Ģ": cc11001100_hook("Ģ", "G", "object-key-init"),
          "Ǥ": cc11001100_hook("Ǥ", "G", "object-key-init"),
          "Ɠ": cc11001100_hook("Ɠ", "G", "object-key-init"),
          "Ꞡ": cc11001100_hook("Ꞡ", "G", "object-key-init"),
          "Ᵹ": cc11001100_hook("Ᵹ", "G", "object-key-init"),
          "Ꝿ": cc11001100_hook("Ꝿ", "G", "object-key-init"),
          "Ⓗ": cc11001100_hook("Ⓗ", "H", "object-key-init"),
          "Ｈ": cc11001100_hook("Ｈ", "H", "object-key-init"),
          "Ĥ": cc11001100_hook("Ĥ", "H", "object-key-init"),
          "Ḣ": cc11001100_hook("Ḣ", "H", "object-key-init"),
          "Ḧ": cc11001100_hook("Ḧ", "H", "object-key-init"),
          "Ȟ": cc11001100_hook("Ȟ", "H", "object-key-init"),
          "Ḥ": cc11001100_hook("Ḥ", "H", "object-key-init"),
          "Ḩ": cc11001100_hook("Ḩ", "H", "object-key-init"),
          "Ḫ": cc11001100_hook("Ḫ", "H", "object-key-init"),
          "Ħ": cc11001100_hook("Ħ", "H", "object-key-init"),
          "Ⱨ": cc11001100_hook("Ⱨ", "H", "object-key-init"),
          "Ⱶ": cc11001100_hook("Ⱶ", "H", "object-key-init"),
          "Ɥ": cc11001100_hook("Ɥ", "H", "object-key-init"),
          "Ⓘ": cc11001100_hook("Ⓘ", "I", "object-key-init"),
          "Ｉ": cc11001100_hook("Ｉ", "I", "object-key-init"),
          "Ì": cc11001100_hook("Ì", "I", "object-key-init"),
          "Í": cc11001100_hook("Í", "I", "object-key-init"),
          "Î": cc11001100_hook("Î", "I", "object-key-init"),
          "Ĩ": cc11001100_hook("Ĩ", "I", "object-key-init"),
          "Ī": cc11001100_hook("Ī", "I", "object-key-init"),
          "Ĭ": cc11001100_hook("Ĭ", "I", "object-key-init"),
          "İ": cc11001100_hook("İ", "I", "object-key-init"),
          "Ï": cc11001100_hook("Ï", "I", "object-key-init"),
          "Ḯ": cc11001100_hook("Ḯ", "I", "object-key-init"),
          "Ỉ": cc11001100_hook("Ỉ", "I", "object-key-init"),
          "Ǐ": cc11001100_hook("Ǐ", "I", "object-key-init"),
          "Ȉ": cc11001100_hook("Ȉ", "I", "object-key-init"),
          "Ȋ": cc11001100_hook("Ȋ", "I", "object-key-init"),
          "Ị": cc11001100_hook("Ị", "I", "object-key-init"),
          "Į": cc11001100_hook("Į", "I", "object-key-init"),
          "Ḭ": cc11001100_hook("Ḭ", "I", "object-key-init"),
          "Ɨ": cc11001100_hook("Ɨ", "I", "object-key-init"),
          "Ⓙ": cc11001100_hook("Ⓙ", "J", "object-key-init"),
          "Ｊ": cc11001100_hook("Ｊ", "J", "object-key-init"),
          "Ĵ": cc11001100_hook("Ĵ", "J", "object-key-init"),
          "Ɉ": cc11001100_hook("Ɉ", "J", "object-key-init"),
          "Ⓚ": cc11001100_hook("Ⓚ", "K", "object-key-init"),
          "Ｋ": cc11001100_hook("Ｋ", "K", "object-key-init"),
          "Ḱ": cc11001100_hook("Ḱ", "K", "object-key-init"),
          "Ǩ": cc11001100_hook("Ǩ", "K", "object-key-init"),
          "Ḳ": cc11001100_hook("Ḳ", "K", "object-key-init"),
          "Ķ": cc11001100_hook("Ķ", "K", "object-key-init"),
          "Ḵ": cc11001100_hook("Ḵ", "K", "object-key-init"),
          "Ƙ": cc11001100_hook("Ƙ", "K", "object-key-init"),
          "Ⱪ": cc11001100_hook("Ⱪ", "K", "object-key-init"),
          "Ꝁ": cc11001100_hook("Ꝁ", "K", "object-key-init"),
          "Ꝃ": cc11001100_hook("Ꝃ", "K", "object-key-init"),
          "Ꝅ": cc11001100_hook("Ꝅ", "K", "object-key-init"),
          "Ꞣ": cc11001100_hook("Ꞣ", "K", "object-key-init"),
          "Ⓛ": cc11001100_hook("Ⓛ", "L", "object-key-init"),
          "Ｌ": cc11001100_hook("Ｌ", "L", "object-key-init"),
          "Ŀ": cc11001100_hook("Ŀ", "L", "object-key-init"),
          "Ĺ": cc11001100_hook("Ĺ", "L", "object-key-init"),
          "Ľ": cc11001100_hook("Ľ", "L", "object-key-init"),
          "Ḷ": cc11001100_hook("Ḷ", "L", "object-key-init"),
          "Ḹ": cc11001100_hook("Ḹ", "L", "object-key-init"),
          "Ļ": cc11001100_hook("Ļ", "L", "object-key-init"),
          "Ḽ": cc11001100_hook("Ḽ", "L", "object-key-init"),
          "Ḻ": cc11001100_hook("Ḻ", "L", "object-key-init"),
          "Ł": cc11001100_hook("Ł", "L", "object-key-init"),
          "Ƚ": cc11001100_hook("Ƚ", "L", "object-key-init"),
          "Ɫ": cc11001100_hook("Ɫ", "L", "object-key-init"),
          "Ⱡ": cc11001100_hook("Ⱡ", "L", "object-key-init"),
          "Ꝉ": cc11001100_hook("Ꝉ", "L", "object-key-init"),
          "Ꝇ": cc11001100_hook("Ꝇ", "L", "object-key-init"),
          "Ꞁ": cc11001100_hook("Ꞁ", "L", "object-key-init"),
          "Ǉ": cc11001100_hook("Ǉ", "LJ", "object-key-init"),
          "ǈ": cc11001100_hook("ǈ", "Lj", "object-key-init"),
          "Ⓜ": cc11001100_hook("Ⓜ", "M", "object-key-init"),
          "Ｍ": cc11001100_hook("Ｍ", "M", "object-key-init"),
          "Ḿ": cc11001100_hook("Ḿ", "M", "object-key-init"),
          "Ṁ": cc11001100_hook("Ṁ", "M", "object-key-init"),
          "Ṃ": cc11001100_hook("Ṃ", "M", "object-key-init"),
          "Ɱ": cc11001100_hook("Ɱ", "M", "object-key-init"),
          "Ɯ": cc11001100_hook("Ɯ", "M", "object-key-init"),
          "Ⓝ": cc11001100_hook("Ⓝ", "N", "object-key-init"),
          "Ｎ": cc11001100_hook("Ｎ", "N", "object-key-init"),
          "Ǹ": cc11001100_hook("Ǹ", "N", "object-key-init"),
          "Ń": cc11001100_hook("Ń", "N", "object-key-init"),
          "Ñ": cc11001100_hook("Ñ", "N", "object-key-init"),
          "Ṅ": cc11001100_hook("Ṅ", "N", "object-key-init"),
          "Ň": cc11001100_hook("Ň", "N", "object-key-init"),
          "Ṇ": cc11001100_hook("Ṇ", "N", "object-key-init"),
          "Ņ": cc11001100_hook("Ņ", "N", "object-key-init"),
          "Ṋ": cc11001100_hook("Ṋ", "N", "object-key-init"),
          "Ṉ": cc11001100_hook("Ṉ", "N", "object-key-init"),
          "Ƞ": cc11001100_hook("Ƞ", "N", "object-key-init"),
          "Ɲ": cc11001100_hook("Ɲ", "N", "object-key-init"),
          "Ꞑ": cc11001100_hook("Ꞑ", "N", "object-key-init"),
          "Ꞥ": cc11001100_hook("Ꞥ", "N", "object-key-init"),
          "Ǌ": cc11001100_hook("Ǌ", "NJ", "object-key-init"),
          "ǋ": cc11001100_hook("ǋ", "Nj", "object-key-init"),
          "Ⓞ": cc11001100_hook("Ⓞ", "O", "object-key-init"),
          "Ｏ": cc11001100_hook("Ｏ", "O", "object-key-init"),
          "Ò": cc11001100_hook("Ò", "O", "object-key-init"),
          "Ó": cc11001100_hook("Ó", "O", "object-key-init"),
          "Ô": cc11001100_hook("Ô", "O", "object-key-init"),
          "Ồ": cc11001100_hook("Ồ", "O", "object-key-init"),
          "Ố": cc11001100_hook("Ố", "O", "object-key-init"),
          "Ỗ": cc11001100_hook("Ỗ", "O", "object-key-init"),
          "Ổ": cc11001100_hook("Ổ", "O", "object-key-init"),
          "Õ": cc11001100_hook("Õ", "O", "object-key-init"),
          "Ṍ": cc11001100_hook("Ṍ", "O", "object-key-init"),
          "Ȭ": cc11001100_hook("Ȭ", "O", "object-key-init"),
          "Ṏ": cc11001100_hook("Ṏ", "O", "object-key-init"),
          "Ō": cc11001100_hook("Ō", "O", "object-key-init"),
          "Ṑ": cc11001100_hook("Ṑ", "O", "object-key-init"),
          "Ṓ": cc11001100_hook("Ṓ", "O", "object-key-init"),
          "Ŏ": cc11001100_hook("Ŏ", "O", "object-key-init"),
          "Ȯ": cc11001100_hook("Ȯ", "O", "object-key-init"),
          "Ȱ": cc11001100_hook("Ȱ", "O", "object-key-init"),
          "Ö": cc11001100_hook("Ö", "O", "object-key-init"),
          "Ȫ": cc11001100_hook("Ȫ", "O", "object-key-init"),
          "Ỏ": cc11001100_hook("Ỏ", "O", "object-key-init"),
          "Ő": cc11001100_hook("Ő", "O", "object-key-init"),
          "Ǒ": cc11001100_hook("Ǒ", "O", "object-key-init"),
          "Ȍ": cc11001100_hook("Ȍ", "O", "object-key-init"),
          "Ȏ": cc11001100_hook("Ȏ", "O", "object-key-init"),
          "Ơ": cc11001100_hook("Ơ", "O", "object-key-init"),
          "Ờ": cc11001100_hook("Ờ", "O", "object-key-init"),
          "Ớ": cc11001100_hook("Ớ", "O", "object-key-init"),
          "Ỡ": cc11001100_hook("Ỡ", "O", "object-key-init"),
          "Ở": cc11001100_hook("Ở", "O", "object-key-init"),
          "Ợ": cc11001100_hook("Ợ", "O", "object-key-init"),
          "Ọ": cc11001100_hook("Ọ", "O", "object-key-init"),
          "Ộ": cc11001100_hook("Ộ", "O", "object-key-init"),
          "Ǫ": cc11001100_hook("Ǫ", "O", "object-key-init"),
          "Ǭ": cc11001100_hook("Ǭ", "O", "object-key-init"),
          "Ø": cc11001100_hook("Ø", "O", "object-key-init"),
          "Ǿ": cc11001100_hook("Ǿ", "O", "object-key-init"),
          "Ɔ": cc11001100_hook("Ɔ", "O", "object-key-init"),
          "Ɵ": cc11001100_hook("Ɵ", "O", "object-key-init"),
          "Ꝋ": cc11001100_hook("Ꝋ", "O", "object-key-init"),
          "Ꝍ": cc11001100_hook("Ꝍ", "O", "object-key-init"),
          "Œ": cc11001100_hook("Œ", "OE", "object-key-init"),
          "Ƣ": cc11001100_hook("Ƣ", "OI", "object-key-init"),
          "Ꝏ": cc11001100_hook("Ꝏ", "OO", "object-key-init"),
          "Ȣ": cc11001100_hook("Ȣ", "OU", "object-key-init"),
          "Ⓟ": cc11001100_hook("Ⓟ", "P", "object-key-init"),
          "Ｐ": cc11001100_hook("Ｐ", "P", "object-key-init"),
          "Ṕ": cc11001100_hook("Ṕ", "P", "object-key-init"),
          "Ṗ": cc11001100_hook("Ṗ", "P", "object-key-init"),
          "Ƥ": cc11001100_hook("Ƥ", "P", "object-key-init"),
          "Ᵽ": cc11001100_hook("Ᵽ", "P", "object-key-init"),
          "Ꝑ": cc11001100_hook("Ꝑ", "P", "object-key-init"),
          "Ꝓ": cc11001100_hook("Ꝓ", "P", "object-key-init"),
          "Ꝕ": cc11001100_hook("Ꝕ", "P", "object-key-init"),
          "Ⓠ": cc11001100_hook("Ⓠ", "Q", "object-key-init"),
          "Ｑ": cc11001100_hook("Ｑ", "Q", "object-key-init"),
          "Ꝗ": cc11001100_hook("Ꝗ", "Q", "object-key-init"),
          "Ꝙ": cc11001100_hook("Ꝙ", "Q", "object-key-init"),
          "Ɋ": cc11001100_hook("Ɋ", "Q", "object-key-init"),
          "Ⓡ": cc11001100_hook("Ⓡ", "R", "object-key-init"),
          "Ｒ": cc11001100_hook("Ｒ", "R", "object-key-init"),
          "Ŕ": cc11001100_hook("Ŕ", "R", "object-key-init"),
          "Ṙ": cc11001100_hook("Ṙ", "R", "object-key-init"),
          "Ř": cc11001100_hook("Ř", "R", "object-key-init"),
          "Ȑ": cc11001100_hook("Ȑ", "R", "object-key-init"),
          "Ȓ": cc11001100_hook("Ȓ", "R", "object-key-init"),
          "Ṛ": cc11001100_hook("Ṛ", "R", "object-key-init"),
          "Ṝ": cc11001100_hook("Ṝ", "R", "object-key-init"),
          "Ŗ": cc11001100_hook("Ŗ", "R", "object-key-init"),
          "Ṟ": cc11001100_hook("Ṟ", "R", "object-key-init"),
          "Ɍ": cc11001100_hook("Ɍ", "R", "object-key-init"),
          "Ɽ": cc11001100_hook("Ɽ", "R", "object-key-init"),
          "Ꝛ": cc11001100_hook("Ꝛ", "R", "object-key-init"),
          "Ꞧ": cc11001100_hook("Ꞧ", "R", "object-key-init"),
          "Ꞃ": cc11001100_hook("Ꞃ", "R", "object-key-init"),
          "Ⓢ": cc11001100_hook("Ⓢ", "S", "object-key-init"),
          "Ｓ": cc11001100_hook("Ｓ", "S", "object-key-init"),
          "ẞ": cc11001100_hook("ẞ", "S", "object-key-init"),
          "Ś": cc11001100_hook("Ś", "S", "object-key-init"),
          "Ṥ": cc11001100_hook("Ṥ", "S", "object-key-init"),
          "Ŝ": cc11001100_hook("Ŝ", "S", "object-key-init"),
          "Ṡ": cc11001100_hook("Ṡ", "S", "object-key-init"),
          "Š": cc11001100_hook("Š", "S", "object-key-init"),
          "Ṧ": cc11001100_hook("Ṧ", "S", "object-key-init"),
          "Ṣ": cc11001100_hook("Ṣ", "S", "object-key-init"),
          "Ṩ": cc11001100_hook("Ṩ", "S", "object-key-init"),
          "Ș": cc11001100_hook("Ș", "S", "object-key-init"),
          "Ş": cc11001100_hook("Ş", "S", "object-key-init"),
          "Ȿ": cc11001100_hook("Ȿ", "S", "object-key-init"),
          "Ꞩ": cc11001100_hook("Ꞩ", "S", "object-key-init"),
          "Ꞅ": cc11001100_hook("Ꞅ", "S", "object-key-init"),
          "Ⓣ": cc11001100_hook("Ⓣ", "T", "object-key-init"),
          "Ｔ": cc11001100_hook("Ｔ", "T", "object-key-init"),
          "Ṫ": cc11001100_hook("Ṫ", "T", "object-key-init"),
          "Ť": cc11001100_hook("Ť", "T", "object-key-init"),
          "Ṭ": cc11001100_hook("Ṭ", "T", "object-key-init"),
          "Ț": cc11001100_hook("Ț", "T", "object-key-init"),
          "Ţ": cc11001100_hook("Ţ", "T", "object-key-init"),
          "Ṱ": cc11001100_hook("Ṱ", "T", "object-key-init"),
          "Ṯ": cc11001100_hook("Ṯ", "T", "object-key-init"),
          "Ŧ": cc11001100_hook("Ŧ", "T", "object-key-init"),
          "Ƭ": cc11001100_hook("Ƭ", "T", "object-key-init"),
          "Ʈ": cc11001100_hook("Ʈ", "T", "object-key-init"),
          "Ⱦ": cc11001100_hook("Ⱦ", "T", "object-key-init"),
          "Ꞇ": cc11001100_hook("Ꞇ", "T", "object-key-init"),
          "Ꜩ": cc11001100_hook("Ꜩ", "TZ", "object-key-init"),
          "Ⓤ": cc11001100_hook("Ⓤ", "U", "object-key-init"),
          "Ｕ": cc11001100_hook("Ｕ", "U", "object-key-init"),
          "Ù": cc11001100_hook("Ù", "U", "object-key-init"),
          "Ú": cc11001100_hook("Ú", "U", "object-key-init"),
          "Û": cc11001100_hook("Û", "U", "object-key-init"),
          "Ũ": cc11001100_hook("Ũ", "U", "object-key-init"),
          "Ṹ": cc11001100_hook("Ṹ", "U", "object-key-init"),
          "Ū": cc11001100_hook("Ū", "U", "object-key-init"),
          "Ṻ": cc11001100_hook("Ṻ", "U", "object-key-init"),
          "Ŭ": cc11001100_hook("Ŭ", "U", "object-key-init"),
          "Ü": cc11001100_hook("Ü", "U", "object-key-init"),
          "Ǜ": cc11001100_hook("Ǜ", "U", "object-key-init"),
          "Ǘ": cc11001100_hook("Ǘ", "U", "object-key-init"),
          "Ǖ": cc11001100_hook("Ǖ", "U", "object-key-init"),
          "Ǚ": cc11001100_hook("Ǚ", "U", "object-key-init"),
          "Ủ": cc11001100_hook("Ủ", "U", "object-key-init"),
          "Ů": cc11001100_hook("Ů", "U", "object-key-init"),
          "Ű": cc11001100_hook("Ű", "U", "object-key-init"),
          "Ǔ": cc11001100_hook("Ǔ", "U", "object-key-init"),
          "Ȕ": cc11001100_hook("Ȕ", "U", "object-key-init"),
          "Ȗ": cc11001100_hook("Ȗ", "U", "object-key-init"),
          "Ư": cc11001100_hook("Ư", "U", "object-key-init"),
          "Ừ": cc11001100_hook("Ừ", "U", "object-key-init"),
          "Ứ": cc11001100_hook("Ứ", "U", "object-key-init"),
          "Ữ": cc11001100_hook("Ữ", "U", "object-key-init"),
          "Ử": cc11001100_hook("Ử", "U", "object-key-init"),
          "Ự": cc11001100_hook("Ự", "U", "object-key-init"),
          "Ụ": cc11001100_hook("Ụ", "U", "object-key-init"),
          "Ṳ": cc11001100_hook("Ṳ", "U", "object-key-init"),
          "Ų": cc11001100_hook("Ų", "U", "object-key-init"),
          "Ṷ": cc11001100_hook("Ṷ", "U", "object-key-init"),
          "Ṵ": cc11001100_hook("Ṵ", "U", "object-key-init"),
          "Ʉ": cc11001100_hook("Ʉ", "U", "object-key-init"),
          "Ⓥ": cc11001100_hook("Ⓥ", "V", "object-key-init"),
          "Ｖ": cc11001100_hook("Ｖ", "V", "object-key-init"),
          "Ṽ": cc11001100_hook("Ṽ", "V", "object-key-init"),
          "Ṿ": cc11001100_hook("Ṿ", "V", "object-key-init"),
          "Ʋ": cc11001100_hook("Ʋ", "V", "object-key-init"),
          "Ꝟ": cc11001100_hook("Ꝟ", "V", "object-key-init"),
          "Ʌ": cc11001100_hook("Ʌ", "V", "object-key-init"),
          "Ꝡ": cc11001100_hook("Ꝡ", "VY", "object-key-init"),
          "Ⓦ": cc11001100_hook("Ⓦ", "W", "object-key-init"),
          "Ｗ": cc11001100_hook("Ｗ", "W", "object-key-init"),
          "Ẁ": cc11001100_hook("Ẁ", "W", "object-key-init"),
          "Ẃ": cc11001100_hook("Ẃ", "W", "object-key-init"),
          "Ŵ": cc11001100_hook("Ŵ", "W", "object-key-init"),
          "Ẇ": cc11001100_hook("Ẇ", "W", "object-key-init"),
          "Ẅ": cc11001100_hook("Ẅ", "W", "object-key-init"),
          "Ẉ": cc11001100_hook("Ẉ", "W", "object-key-init"),
          "Ⱳ": cc11001100_hook("Ⱳ", "W", "object-key-init"),
          "Ⓧ": cc11001100_hook("Ⓧ", "X", "object-key-init"),
          "Ｘ": cc11001100_hook("Ｘ", "X", "object-key-init"),
          "Ẋ": cc11001100_hook("Ẋ", "X", "object-key-init"),
          "Ẍ": cc11001100_hook("Ẍ", "X", "object-key-init"),
          "Ⓨ": cc11001100_hook("Ⓨ", "Y", "object-key-init"),
          "Ｙ": cc11001100_hook("Ｙ", "Y", "object-key-init"),
          "Ỳ": cc11001100_hook("Ỳ", "Y", "object-key-init"),
          "Ý": cc11001100_hook("Ý", "Y", "object-key-init"),
          "Ŷ": cc11001100_hook("Ŷ", "Y", "object-key-init"),
          "Ỹ": cc11001100_hook("Ỹ", "Y", "object-key-init"),
          "Ȳ": cc11001100_hook("Ȳ", "Y", "object-key-init"),
          "Ẏ": cc11001100_hook("Ẏ", "Y", "object-key-init"),
          "Ÿ": cc11001100_hook("Ÿ", "Y", "object-key-init"),
          "Ỷ": cc11001100_hook("Ỷ", "Y", "object-key-init"),
          "Ỵ": cc11001100_hook("Ỵ", "Y", "object-key-init"),
          "Ƴ": cc11001100_hook("Ƴ", "Y", "object-key-init"),
          "Ɏ": cc11001100_hook("Ɏ", "Y", "object-key-init"),
          "Ỿ": cc11001100_hook("Ỿ", "Y", "object-key-init"),
          "Ⓩ": cc11001100_hook("Ⓩ", "Z", "object-key-init"),
          "Ｚ": cc11001100_hook("Ｚ", "Z", "object-key-init"),
          "Ź": cc11001100_hook("Ź", "Z", "object-key-init"),
          "Ẑ": cc11001100_hook("Ẑ", "Z", "object-key-init"),
          "Ż": cc11001100_hook("Ż", "Z", "object-key-init"),
          "Ž": cc11001100_hook("Ž", "Z", "object-key-init"),
          "Ẓ": cc11001100_hook("Ẓ", "Z", "object-key-init"),
          "Ẕ": cc11001100_hook("Ẕ", "Z", "object-key-init"),
          "Ƶ": cc11001100_hook("Ƶ", "Z", "object-key-init"),
          "Ȥ": cc11001100_hook("Ȥ", "Z", "object-key-init"),
          "Ɀ": cc11001100_hook("Ɀ", "Z", "object-key-init"),
          "Ⱬ": cc11001100_hook("Ⱬ", "Z", "object-key-init"),
          "Ꝣ": cc11001100_hook("Ꝣ", "Z", "object-key-init"),
          "ⓐ": cc11001100_hook("ⓐ", "a", "object-key-init"),
          "ａ": cc11001100_hook("ａ", "a", "object-key-init"),
          "ẚ": cc11001100_hook("ẚ", "a", "object-key-init"),
          "à": cc11001100_hook("à", "a", "object-key-init"),
          "á": cc11001100_hook("á", "a", "object-key-init"),
          "â": cc11001100_hook("â", "a", "object-key-init"),
          "ầ": cc11001100_hook("ầ", "a", "object-key-init"),
          "ấ": cc11001100_hook("ấ", "a", "object-key-init"),
          "ẫ": cc11001100_hook("ẫ", "a", "object-key-init"),
          "ẩ": cc11001100_hook("ẩ", "a", "object-key-init"),
          "ã": cc11001100_hook("ã", "a", "object-key-init"),
          "ā": cc11001100_hook("ā", "a", "object-key-init"),
          "ă": cc11001100_hook("ă", "a", "object-key-init"),
          "ằ": cc11001100_hook("ằ", "a", "object-key-init"),
          "ắ": cc11001100_hook("ắ", "a", "object-key-init"),
          "ẵ": cc11001100_hook("ẵ", "a", "object-key-init"),
          "ẳ": cc11001100_hook("ẳ", "a", "object-key-init"),
          "ȧ": cc11001100_hook("ȧ", "a", "object-key-init"),
          "ǡ": cc11001100_hook("ǡ", "a", "object-key-init"),
          "ä": cc11001100_hook("ä", "a", "object-key-init"),
          "ǟ": cc11001100_hook("ǟ", "a", "object-key-init"),
          "ả": cc11001100_hook("ả", "a", "object-key-init"),
          "å": cc11001100_hook("å", "a", "object-key-init"),
          "ǻ": cc11001100_hook("ǻ", "a", "object-key-init"),
          "ǎ": cc11001100_hook("ǎ", "a", "object-key-init"),
          "ȁ": cc11001100_hook("ȁ", "a", "object-key-init"),
          "ȃ": cc11001100_hook("ȃ", "a", "object-key-init"),
          "ạ": cc11001100_hook("ạ", "a", "object-key-init"),
          "ậ": cc11001100_hook("ậ", "a", "object-key-init"),
          "ặ": cc11001100_hook("ặ", "a", "object-key-init"),
          "ḁ": cc11001100_hook("ḁ", "a", "object-key-init"),
          "ą": cc11001100_hook("ą", "a", "object-key-init"),
          "ⱥ": cc11001100_hook("ⱥ", "a", "object-key-init"),
          "ɐ": cc11001100_hook("ɐ", "a", "object-key-init"),
          "ꜳ": cc11001100_hook("ꜳ", "aa", "object-key-init"),
          "æ": cc11001100_hook("æ", "ae", "object-key-init"),
          "ǽ": cc11001100_hook("ǽ", "ae", "object-key-init"),
          "ǣ": cc11001100_hook("ǣ", "ae", "object-key-init"),
          "ꜵ": cc11001100_hook("ꜵ", "ao", "object-key-init"),
          "ꜷ": cc11001100_hook("ꜷ", "au", "object-key-init"),
          "ꜹ": cc11001100_hook("ꜹ", "av", "object-key-init"),
          "ꜻ": cc11001100_hook("ꜻ", "av", "object-key-init"),
          "ꜽ": cc11001100_hook("ꜽ", "ay", "object-key-init"),
          "ⓑ": cc11001100_hook("ⓑ", "b", "object-key-init"),
          "ｂ": cc11001100_hook("ｂ", "b", "object-key-init"),
          "ḃ": cc11001100_hook("ḃ", "b", "object-key-init"),
          "ḅ": cc11001100_hook("ḅ", "b", "object-key-init"),
          "ḇ": cc11001100_hook("ḇ", "b", "object-key-init"),
          "ƀ": cc11001100_hook("ƀ", "b", "object-key-init"),
          "ƃ": cc11001100_hook("ƃ", "b", "object-key-init"),
          "ɓ": cc11001100_hook("ɓ", "b", "object-key-init"),
          "ⓒ": cc11001100_hook("ⓒ", "c", "object-key-init"),
          "ｃ": cc11001100_hook("ｃ", "c", "object-key-init"),
          "ć": cc11001100_hook("ć", "c", "object-key-init"),
          "ĉ": cc11001100_hook("ĉ", "c", "object-key-init"),
          "ċ": cc11001100_hook("ċ", "c", "object-key-init"),
          "č": cc11001100_hook("č", "c", "object-key-init"),
          "ç": cc11001100_hook("ç", "c", "object-key-init"),
          "ḉ": cc11001100_hook("ḉ", "c", "object-key-init"),
          "ƈ": cc11001100_hook("ƈ", "c", "object-key-init"),
          "ȼ": cc11001100_hook("ȼ", "c", "object-key-init"),
          "ꜿ": cc11001100_hook("ꜿ", "c", "object-key-init"),
          "ↄ": cc11001100_hook("ↄ", "c", "object-key-init"),
          "ⓓ": cc11001100_hook("ⓓ", "d", "object-key-init"),
          "ｄ": cc11001100_hook("ｄ", "d", "object-key-init"),
          "ḋ": cc11001100_hook("ḋ", "d", "object-key-init"),
          "ď": cc11001100_hook("ď", "d", "object-key-init"),
          "ḍ": cc11001100_hook("ḍ", "d", "object-key-init"),
          "ḑ": cc11001100_hook("ḑ", "d", "object-key-init"),
          "ḓ": cc11001100_hook("ḓ", "d", "object-key-init"),
          "ḏ": cc11001100_hook("ḏ", "d", "object-key-init"),
          "đ": cc11001100_hook("đ", "d", "object-key-init"),
          "ƌ": cc11001100_hook("ƌ", "d", "object-key-init"),
          "ɖ": cc11001100_hook("ɖ", "d", "object-key-init"),
          "ɗ": cc11001100_hook("ɗ", "d", "object-key-init"),
          "ꝺ": cc11001100_hook("ꝺ", "d", "object-key-init"),
          "ǳ": cc11001100_hook("ǳ", "dz", "object-key-init"),
          "ǆ": cc11001100_hook("ǆ", "dz", "object-key-init"),
          "ⓔ": cc11001100_hook("ⓔ", "e", "object-key-init"),
          "ｅ": cc11001100_hook("ｅ", "e", "object-key-init"),
          "è": cc11001100_hook("è", "e", "object-key-init"),
          "é": cc11001100_hook("é", "e", "object-key-init"),
          "ê": cc11001100_hook("ê", "e", "object-key-init"),
          "ề": cc11001100_hook("ề", "e", "object-key-init"),
          "ế": cc11001100_hook("ế", "e", "object-key-init"),
          "ễ": cc11001100_hook("ễ", "e", "object-key-init"),
          "ể": cc11001100_hook("ể", "e", "object-key-init"),
          "ẽ": cc11001100_hook("ẽ", "e", "object-key-init"),
          "ē": cc11001100_hook("ē", "e", "object-key-init"),
          "ḕ": cc11001100_hook("ḕ", "e", "object-key-init"),
          "ḗ": cc11001100_hook("ḗ", "e", "object-key-init"),
          "ĕ": cc11001100_hook("ĕ", "e", "object-key-init"),
          "ė": cc11001100_hook("ė", "e", "object-key-init"),
          "ë": cc11001100_hook("ë", "e", "object-key-init"),
          "ẻ": cc11001100_hook("ẻ", "e", "object-key-init"),
          "ě": cc11001100_hook("ě", "e", "object-key-init"),
          "ȅ": cc11001100_hook("ȅ", "e", "object-key-init"),
          "ȇ": cc11001100_hook("ȇ", "e", "object-key-init"),
          "ẹ": cc11001100_hook("ẹ", "e", "object-key-init"),
          "ệ": cc11001100_hook("ệ", "e", "object-key-init"),
          "ȩ": cc11001100_hook("ȩ", "e", "object-key-init"),
          "ḝ": cc11001100_hook("ḝ", "e", "object-key-init"),
          "ę": cc11001100_hook("ę", "e", "object-key-init"),
          "ḙ": cc11001100_hook("ḙ", "e", "object-key-init"),
          "ḛ": cc11001100_hook("ḛ", "e", "object-key-init"),
          "ɇ": cc11001100_hook("ɇ", "e", "object-key-init"),
          "ɛ": cc11001100_hook("ɛ", "e", "object-key-init"),
          "ǝ": cc11001100_hook("ǝ", "e", "object-key-init"),
          "ⓕ": cc11001100_hook("ⓕ", "f", "object-key-init"),
          "ｆ": cc11001100_hook("ｆ", "f", "object-key-init"),
          "ḟ": cc11001100_hook("ḟ", "f", "object-key-init"),
          "ƒ": cc11001100_hook("ƒ", "f", "object-key-init"),
          "ꝼ": cc11001100_hook("ꝼ", "f", "object-key-init"),
          "ⓖ": cc11001100_hook("ⓖ", "g", "object-key-init"),
          "ｇ": cc11001100_hook("ｇ", "g", "object-key-init"),
          "ǵ": cc11001100_hook("ǵ", "g", "object-key-init"),
          "ĝ": cc11001100_hook("ĝ", "g", "object-key-init"),
          "ḡ": cc11001100_hook("ḡ", "g", "object-key-init"),
          "ğ": cc11001100_hook("ğ", "g", "object-key-init"),
          "ġ": cc11001100_hook("ġ", "g", "object-key-init"),
          "ǧ": cc11001100_hook("ǧ", "g", "object-key-init"),
          "ģ": cc11001100_hook("ģ", "g", "object-key-init"),
          "ǥ": cc11001100_hook("ǥ", "g", "object-key-init"),
          "ɠ": cc11001100_hook("ɠ", "g", "object-key-init"),
          "ꞡ": cc11001100_hook("ꞡ", "g", "object-key-init"),
          "ᵹ": cc11001100_hook("ᵹ", "g", "object-key-init"),
          "ꝿ": cc11001100_hook("ꝿ", "g", "object-key-init"),
          "ⓗ": cc11001100_hook("ⓗ", "h", "object-key-init"),
          "ｈ": cc11001100_hook("ｈ", "h", "object-key-init"),
          "ĥ": cc11001100_hook("ĥ", "h", "object-key-init"),
          "ḣ": cc11001100_hook("ḣ", "h", "object-key-init"),
          "ḧ": cc11001100_hook("ḧ", "h", "object-key-init"),
          "ȟ": cc11001100_hook("ȟ", "h", "object-key-init"),
          "ḥ": cc11001100_hook("ḥ", "h", "object-key-init"),
          "ḩ": cc11001100_hook("ḩ", "h", "object-key-init"),
          "ḫ": cc11001100_hook("ḫ", "h", "object-key-init"),
          "ẖ": cc11001100_hook("ẖ", "h", "object-key-init"),
          "ħ": cc11001100_hook("ħ", "h", "object-key-init"),
          "ⱨ": cc11001100_hook("ⱨ", "h", "object-key-init"),
          "ⱶ": cc11001100_hook("ⱶ", "h", "object-key-init"),
          "ɥ": cc11001100_hook("ɥ", "h", "object-key-init"),
          "ƕ": cc11001100_hook("ƕ", "hv", "object-key-init"),
          "ⓘ": cc11001100_hook("ⓘ", "i", "object-key-init"),
          "ｉ": cc11001100_hook("ｉ", "i", "object-key-init"),
          "ì": cc11001100_hook("ì", "i", "object-key-init"),
          "í": cc11001100_hook("í", "i", "object-key-init"),
          "î": cc11001100_hook("î", "i", "object-key-init"),
          "ĩ": cc11001100_hook("ĩ", "i", "object-key-init"),
          "ī": cc11001100_hook("ī", "i", "object-key-init"),
          "ĭ": cc11001100_hook("ĭ", "i", "object-key-init"),
          "ï": cc11001100_hook("ï", "i", "object-key-init"),
          "ḯ": cc11001100_hook("ḯ", "i", "object-key-init"),
          "ỉ": cc11001100_hook("ỉ", "i", "object-key-init"),
          "ǐ": cc11001100_hook("ǐ", "i", "object-key-init"),
          "ȉ": cc11001100_hook("ȉ", "i", "object-key-init"),
          "ȋ": cc11001100_hook("ȋ", "i", "object-key-init"),
          "ị": cc11001100_hook("ị", "i", "object-key-init"),
          "į": cc11001100_hook("į", "i", "object-key-init"),
          "ḭ": cc11001100_hook("ḭ", "i", "object-key-init"),
          "ɨ": cc11001100_hook("ɨ", "i", "object-key-init"),
          "ı": cc11001100_hook("ı", "i", "object-key-init"),
          "ⓙ": cc11001100_hook("ⓙ", "j", "object-key-init"),
          "ｊ": cc11001100_hook("ｊ", "j", "object-key-init"),
          "ĵ": cc11001100_hook("ĵ", "j", "object-key-init"),
          "ǰ": cc11001100_hook("ǰ", "j", "object-key-init"),
          "ɉ": cc11001100_hook("ɉ", "j", "object-key-init"),
          "ⓚ": cc11001100_hook("ⓚ", "k", "object-key-init"),
          "ｋ": cc11001100_hook("ｋ", "k", "object-key-init"),
          "ḱ": cc11001100_hook("ḱ", "k", "object-key-init"),
          "ǩ": cc11001100_hook("ǩ", "k", "object-key-init"),
          "ḳ": cc11001100_hook("ḳ", "k", "object-key-init"),
          "ķ": cc11001100_hook("ķ", "k", "object-key-init"),
          "ḵ": cc11001100_hook("ḵ", "k", "object-key-init"),
          "ƙ": cc11001100_hook("ƙ", "k", "object-key-init"),
          "ⱪ": cc11001100_hook("ⱪ", "k", "object-key-init"),
          "ꝁ": cc11001100_hook("ꝁ", "k", "object-key-init"),
          "ꝃ": cc11001100_hook("ꝃ", "k", "object-key-init"),
          "ꝅ": cc11001100_hook("ꝅ", "k", "object-key-init"),
          "ꞣ": cc11001100_hook("ꞣ", "k", "object-key-init"),
          "ⓛ": cc11001100_hook("ⓛ", "l", "object-key-init"),
          "ｌ": cc11001100_hook("ｌ", "l", "object-key-init"),
          "ŀ": cc11001100_hook("ŀ", "l", "object-key-init"),
          "ĺ": cc11001100_hook("ĺ", "l", "object-key-init"),
          "ľ": cc11001100_hook("ľ", "l", "object-key-init"),
          "ḷ": cc11001100_hook("ḷ", "l", "object-key-init"),
          "ḹ": cc11001100_hook("ḹ", "l", "object-key-init"),
          "ļ": cc11001100_hook("ļ", "l", "object-key-init"),
          "ḽ": cc11001100_hook("ḽ", "l", "object-key-init"),
          "ḻ": cc11001100_hook("ḻ", "l", "object-key-init"),
          "ſ": cc11001100_hook("ſ", "l", "object-key-init"),
          "ł": cc11001100_hook("ł", "l", "object-key-init"),
          "ƚ": cc11001100_hook("ƚ", "l", "object-key-init"),
          "ɫ": cc11001100_hook("ɫ", "l", "object-key-init"),
          "ⱡ": cc11001100_hook("ⱡ", "l", "object-key-init"),
          "ꝉ": cc11001100_hook("ꝉ", "l", "object-key-init"),
          "ꞁ": cc11001100_hook("ꞁ", "l", "object-key-init"),
          "ꝇ": cc11001100_hook("ꝇ", "l", "object-key-init"),
          "ǉ": cc11001100_hook("ǉ", "lj", "object-key-init"),
          "ⓜ": cc11001100_hook("ⓜ", "m", "object-key-init"),
          "ｍ": cc11001100_hook("ｍ", "m", "object-key-init"),
          "ḿ": cc11001100_hook("ḿ", "m", "object-key-init"),
          "ṁ": cc11001100_hook("ṁ", "m", "object-key-init"),
          "ṃ": cc11001100_hook("ṃ", "m", "object-key-init"),
          "ɱ": cc11001100_hook("ɱ", "m", "object-key-init"),
          "ɯ": cc11001100_hook("ɯ", "m", "object-key-init"),
          "ⓝ": cc11001100_hook("ⓝ", "n", "object-key-init"),
          "ｎ": cc11001100_hook("ｎ", "n", "object-key-init"),
          "ǹ": cc11001100_hook("ǹ", "n", "object-key-init"),
          "ń": cc11001100_hook("ń", "n", "object-key-init"),
          "ñ": cc11001100_hook("ñ", "n", "object-key-init"),
          "ṅ": cc11001100_hook("ṅ", "n", "object-key-init"),
          "ň": cc11001100_hook("ň", "n", "object-key-init"),
          "ṇ": cc11001100_hook("ṇ", "n", "object-key-init"),
          "ņ": cc11001100_hook("ņ", "n", "object-key-init"),
          "ṋ": cc11001100_hook("ṋ", "n", "object-key-init"),
          "ṉ": cc11001100_hook("ṉ", "n", "object-key-init"),
          "ƞ": cc11001100_hook("ƞ", "n", "object-key-init"),
          "ɲ": cc11001100_hook("ɲ", "n", "object-key-init"),
          "ŉ": cc11001100_hook("ŉ", "n", "object-key-init"),
          "ꞑ": cc11001100_hook("ꞑ", "n", "object-key-init"),
          "ꞥ": cc11001100_hook("ꞥ", "n", "object-key-init"),
          "ǌ": cc11001100_hook("ǌ", "nj", "object-key-init"),
          "ⓞ": cc11001100_hook("ⓞ", "o", "object-key-init"),
          "ｏ": cc11001100_hook("ｏ", "o", "object-key-init"),
          "ò": cc11001100_hook("ò", "o", "object-key-init"),
          "ó": cc11001100_hook("ó", "o", "object-key-init"),
          "ô": cc11001100_hook("ô", "o", "object-key-init"),
          "ồ": cc11001100_hook("ồ", "o", "object-key-init"),
          "ố": cc11001100_hook("ố", "o", "object-key-init"),
          "ỗ": cc11001100_hook("ỗ", "o", "object-key-init"),
          "ổ": cc11001100_hook("ổ", "o", "object-key-init"),
          "õ": cc11001100_hook("õ", "o", "object-key-init"),
          "ṍ": cc11001100_hook("ṍ", "o", "object-key-init"),
          "ȭ": cc11001100_hook("ȭ", "o", "object-key-init"),
          "ṏ": cc11001100_hook("ṏ", "o", "object-key-init"),
          "ō": cc11001100_hook("ō", "o", "object-key-init"),
          "ṑ": cc11001100_hook("ṑ", "o", "object-key-init"),
          "ṓ": cc11001100_hook("ṓ", "o", "object-key-init"),
          "ŏ": cc11001100_hook("ŏ", "o", "object-key-init"),
          "ȯ": cc11001100_hook("ȯ", "o", "object-key-init"),
          "ȱ": cc11001100_hook("ȱ", "o", "object-key-init"),
          "ö": cc11001100_hook("ö", "o", "object-key-init"),
          "ȫ": cc11001100_hook("ȫ", "o", "object-key-init"),
          "ỏ": cc11001100_hook("ỏ", "o", "object-key-init"),
          "ő": cc11001100_hook("ő", "o", "object-key-init"),
          "ǒ": cc11001100_hook("ǒ", "o", "object-key-init"),
          "ȍ": cc11001100_hook("ȍ", "o", "object-key-init"),
          "ȏ": cc11001100_hook("ȏ", "o", "object-key-init"),
          "ơ": cc11001100_hook("ơ", "o", "object-key-init"),
          "ờ": cc11001100_hook("ờ", "o", "object-key-init"),
          "ớ": cc11001100_hook("ớ", "o", "object-key-init"),
          "ỡ": cc11001100_hook("ỡ", "o", "object-key-init"),
          "ở": cc11001100_hook("ở", "o", "object-key-init"),
          "ợ": cc11001100_hook("ợ", "o", "object-key-init"),
          "ọ": cc11001100_hook("ọ", "o", "object-key-init"),
          "ộ": cc11001100_hook("ộ", "o", "object-key-init"),
          "ǫ": cc11001100_hook("ǫ", "o", "object-key-init"),
          "ǭ": cc11001100_hook("ǭ", "o", "object-key-init"),
          "ø": cc11001100_hook("ø", "o", "object-key-init"),
          "ǿ": cc11001100_hook("ǿ", "o", "object-key-init"),
          "ɔ": cc11001100_hook("ɔ", "o", "object-key-init"),
          "ꝋ": cc11001100_hook("ꝋ", "o", "object-key-init"),
          "ꝍ": cc11001100_hook("ꝍ", "o", "object-key-init"),
          "ɵ": cc11001100_hook("ɵ", "o", "object-key-init"),
          "œ": cc11001100_hook("œ", "oe", "object-key-init"),
          "ƣ": cc11001100_hook("ƣ", "oi", "object-key-init"),
          "ȣ": cc11001100_hook("ȣ", "ou", "object-key-init"),
          "ꝏ": cc11001100_hook("ꝏ", "oo", "object-key-init"),
          "ⓟ": cc11001100_hook("ⓟ", "p", "object-key-init"),
          "ｐ": cc11001100_hook("ｐ", "p", "object-key-init"),
          "ṕ": cc11001100_hook("ṕ", "p", "object-key-init"),
          "ṗ": cc11001100_hook("ṗ", "p", "object-key-init"),
          "ƥ": cc11001100_hook("ƥ", "p", "object-key-init"),
          "ᵽ": cc11001100_hook("ᵽ", "p", "object-key-init"),
          "ꝑ": cc11001100_hook("ꝑ", "p", "object-key-init"),
          "ꝓ": cc11001100_hook("ꝓ", "p", "object-key-init"),
          "ꝕ": cc11001100_hook("ꝕ", "p", "object-key-init"),
          "ⓠ": cc11001100_hook("ⓠ", "q", "object-key-init"),
          "ｑ": cc11001100_hook("ｑ", "q", "object-key-init"),
          "ɋ": cc11001100_hook("ɋ", "q", "object-key-init"),
          "ꝗ": cc11001100_hook("ꝗ", "q", "object-key-init"),
          "ꝙ": cc11001100_hook("ꝙ", "q", "object-key-init"),
          "ⓡ": cc11001100_hook("ⓡ", "r", "object-key-init"),
          "ｒ": cc11001100_hook("ｒ", "r", "object-key-init"),
          "ŕ": cc11001100_hook("ŕ", "r", "object-key-init"),
          "ṙ": cc11001100_hook("ṙ", "r", "object-key-init"),
          "ř": cc11001100_hook("ř", "r", "object-key-init"),
          "ȑ": cc11001100_hook("ȑ", "r", "object-key-init"),
          "ȓ": cc11001100_hook("ȓ", "r", "object-key-init"),
          "ṛ": cc11001100_hook("ṛ", "r", "object-key-init"),
          "ṝ": cc11001100_hook("ṝ", "r", "object-key-init"),
          "ŗ": cc11001100_hook("ŗ", "r", "object-key-init"),
          "ṟ": cc11001100_hook("ṟ", "r", "object-key-init"),
          "ɍ": cc11001100_hook("ɍ", "r", "object-key-init"),
          "ɽ": cc11001100_hook("ɽ", "r", "object-key-init"),
          "ꝛ": cc11001100_hook("ꝛ", "r", "object-key-init"),
          "ꞧ": cc11001100_hook("ꞧ", "r", "object-key-init"),
          "ꞃ": cc11001100_hook("ꞃ", "r", "object-key-init"),
          "ⓢ": cc11001100_hook("ⓢ", "s", "object-key-init"),
          "ｓ": cc11001100_hook("ｓ", "s", "object-key-init"),
          "ß": cc11001100_hook("ß", "s", "object-key-init"),
          "ś": cc11001100_hook("ś", "s", "object-key-init"),
          "ṥ": cc11001100_hook("ṥ", "s", "object-key-init"),
          "ŝ": cc11001100_hook("ŝ", "s", "object-key-init"),
          "ṡ": cc11001100_hook("ṡ", "s", "object-key-init"),
          "š": cc11001100_hook("š", "s", "object-key-init"),
          "ṧ": cc11001100_hook("ṧ", "s", "object-key-init"),
          "ṣ": cc11001100_hook("ṣ", "s", "object-key-init"),
          "ṩ": cc11001100_hook("ṩ", "s", "object-key-init"),
          "ș": cc11001100_hook("ș", "s", "object-key-init"),
          "ş": cc11001100_hook("ş", "s", "object-key-init"),
          "ȿ": cc11001100_hook("ȿ", "s", "object-key-init"),
          "ꞩ": cc11001100_hook("ꞩ", "s", "object-key-init"),
          "ꞅ": cc11001100_hook("ꞅ", "s", "object-key-init"),
          "ẛ": cc11001100_hook("ẛ", "s", "object-key-init"),
          "ⓣ": cc11001100_hook("ⓣ", "t", "object-key-init"),
          "ｔ": cc11001100_hook("ｔ", "t", "object-key-init"),
          "ṫ": cc11001100_hook("ṫ", "t", "object-key-init"),
          "ẗ": cc11001100_hook("ẗ", "t", "object-key-init"),
          "ť": cc11001100_hook("ť", "t", "object-key-init"),
          "ṭ": cc11001100_hook("ṭ", "t", "object-key-init"),
          "ț": cc11001100_hook("ț", "t", "object-key-init"),
          "ţ": cc11001100_hook("ţ", "t", "object-key-init"),
          "ṱ": cc11001100_hook("ṱ", "t", "object-key-init"),
          "ṯ": cc11001100_hook("ṯ", "t", "object-key-init"),
          "ŧ": cc11001100_hook("ŧ", "t", "object-key-init"),
          "ƭ": cc11001100_hook("ƭ", "t", "object-key-init"),
          "ʈ": cc11001100_hook("ʈ", "t", "object-key-init"),
          "ⱦ": cc11001100_hook("ⱦ", "t", "object-key-init"),
          "ꞇ": cc11001100_hook("ꞇ", "t", "object-key-init"),
          "ꜩ": cc11001100_hook("ꜩ", "tz", "object-key-init"),
          "ⓤ": cc11001100_hook("ⓤ", "u", "object-key-init"),
          "ｕ": cc11001100_hook("ｕ", "u", "object-key-init"),
          "ù": cc11001100_hook("ù", "u", "object-key-init"),
          "ú": cc11001100_hook("ú", "u", "object-key-init"),
          "û": cc11001100_hook("û", "u", "object-key-init"),
          "ũ": cc11001100_hook("ũ", "u", "object-key-init"),
          "ṹ": cc11001100_hook("ṹ", "u", "object-key-init"),
          "ū": cc11001100_hook("ū", "u", "object-key-init"),
          "ṻ": cc11001100_hook("ṻ", "u", "object-key-init"),
          "ŭ": cc11001100_hook("ŭ", "u", "object-key-init"),
          "ü": cc11001100_hook("ü", "u", "object-key-init"),
          "ǜ": cc11001100_hook("ǜ", "u", "object-key-init"),
          "ǘ": cc11001100_hook("ǘ", "u", "object-key-init"),
          "ǖ": cc11001100_hook("ǖ", "u", "object-key-init"),
          "ǚ": cc11001100_hook("ǚ", "u", "object-key-init"),
          "ủ": cc11001100_hook("ủ", "u", "object-key-init"),
          "ů": cc11001100_hook("ů", "u", "object-key-init"),
          "ű": cc11001100_hook("ű", "u", "object-key-init"),
          "ǔ": cc11001100_hook("ǔ", "u", "object-key-init"),
          "ȕ": cc11001100_hook("ȕ", "u", "object-key-init"),
          "ȗ": cc11001100_hook("ȗ", "u", "object-key-init"),
          "ư": cc11001100_hook("ư", "u", "object-key-init"),
          "ừ": cc11001100_hook("ừ", "u", "object-key-init"),
          "ứ": cc11001100_hook("ứ", "u", "object-key-init"),
          "ữ": cc11001100_hook("ữ", "u", "object-key-init"),
          "ử": cc11001100_hook("ử", "u", "object-key-init"),
          "ự": cc11001100_hook("ự", "u", "object-key-init"),
          "ụ": cc11001100_hook("ụ", "u", "object-key-init"),
          "ṳ": cc11001100_hook("ṳ", "u", "object-key-init"),
          "ų": cc11001100_hook("ų", "u", "object-key-init"),
          "ṷ": cc11001100_hook("ṷ", "u", "object-key-init"),
          "ṵ": cc11001100_hook("ṵ", "u", "object-key-init"),
          "ʉ": cc11001100_hook("ʉ", "u", "object-key-init"),
          "ⓥ": cc11001100_hook("ⓥ", "v", "object-key-init"),
          "ｖ": cc11001100_hook("ｖ", "v", "object-key-init"),
          "ṽ": cc11001100_hook("ṽ", "v", "object-key-init"),
          "ṿ": cc11001100_hook("ṿ", "v", "object-key-init"),
          "ʋ": cc11001100_hook("ʋ", "v", "object-key-init"),
          "ꝟ": cc11001100_hook("ꝟ", "v", "object-key-init"),
          "ʌ": cc11001100_hook("ʌ", "v", "object-key-init"),
          "ꝡ": cc11001100_hook("ꝡ", "vy", "object-key-init"),
          "ⓦ": cc11001100_hook("ⓦ", "w", "object-key-init"),
          "ｗ": cc11001100_hook("ｗ", "w", "object-key-init"),
          "ẁ": cc11001100_hook("ẁ", "w", "object-key-init"),
          "ẃ": cc11001100_hook("ẃ", "w", "object-key-init"),
          "ŵ": cc11001100_hook("ŵ", "w", "object-key-init"),
          "ẇ": cc11001100_hook("ẇ", "w", "object-key-init"),
          "ẅ": cc11001100_hook("ẅ", "w", "object-key-init"),
          "ẘ": cc11001100_hook("ẘ", "w", "object-key-init"),
          "ẉ": cc11001100_hook("ẉ", "w", "object-key-init"),
          "ⱳ": cc11001100_hook("ⱳ", "w", "object-key-init"),
          "ⓧ": cc11001100_hook("ⓧ", "x", "object-key-init"),
          "ｘ": cc11001100_hook("ｘ", "x", "object-key-init"),
          "ẋ": cc11001100_hook("ẋ", "x", "object-key-init"),
          "ẍ": cc11001100_hook("ẍ", "x", "object-key-init"),
          "ⓨ": cc11001100_hook("ⓨ", "y", "object-key-init"),
          "ｙ": cc11001100_hook("ｙ", "y", "object-key-init"),
          "ỳ": cc11001100_hook("ỳ", "y", "object-key-init"),
          "ý": cc11001100_hook("ý", "y", "object-key-init"),
          "ŷ": cc11001100_hook("ŷ", "y", "object-key-init"),
          "ỹ": cc11001100_hook("ỹ", "y", "object-key-init"),
          "ȳ": cc11001100_hook("ȳ", "y", "object-key-init"),
          "ẏ": cc11001100_hook("ẏ", "y", "object-key-init"),
          "ÿ": cc11001100_hook("ÿ", "y", "object-key-init"),
          "ỷ": cc11001100_hook("ỷ", "y", "object-key-init"),
          "ẙ": cc11001100_hook("ẙ", "y", "object-key-init"),
          "ỵ": cc11001100_hook("ỵ", "y", "object-key-init"),
          "ƴ": cc11001100_hook("ƴ", "y", "object-key-init"),
          "ɏ": cc11001100_hook("ɏ", "y", "object-key-init"),
          "ỿ": cc11001100_hook("ỿ", "y", "object-key-init"),
          "ⓩ": cc11001100_hook("ⓩ", "z", "object-key-init"),
          "ｚ": cc11001100_hook("ｚ", "z", "object-key-init"),
          "ź": cc11001100_hook("ź", "z", "object-key-init"),
          "ẑ": cc11001100_hook("ẑ", "z", "object-key-init"),
          "ż": cc11001100_hook("ż", "z", "object-key-init"),
          "ž": cc11001100_hook("ž", "z", "object-key-init"),
          "ẓ": cc11001100_hook("ẓ", "z", "object-key-init"),
          "ẕ": cc11001100_hook("ẕ", "z", "object-key-init"),
          "ƶ": cc11001100_hook("ƶ", "z", "object-key-init"),
          "ȥ": cc11001100_hook("ȥ", "z", "object-key-init"),
          "ɀ": cc11001100_hook("ɀ", "z", "object-key-init"),
          "ⱬ": cc11001100_hook("ⱬ", "z", "object-key-init"),
          "ꝣ": cc11001100_hook("ꝣ", "z", "object-key-init"),
          "Ά": cc11001100_hook("Ά", "Α", "object-key-init"),
          "Έ": cc11001100_hook("Έ", "Ε", "object-key-init"),
          "Ή": cc11001100_hook("Ή", "Η", "object-key-init"),
          "Ί": cc11001100_hook("Ί", "Ι", "object-key-init"),
          "Ϊ": cc11001100_hook("Ϊ", "Ι", "object-key-init"),
          "Ό": cc11001100_hook("Ό", "Ο", "object-key-init"),
          "Ύ": cc11001100_hook("Ύ", "Υ", "object-key-init"),
          "Ϋ": cc11001100_hook("Ϋ", "Υ", "object-key-init"),
          "Ώ": cc11001100_hook("Ώ", "Ω", "object-key-init"),
          "ά": cc11001100_hook("ά", "α", "object-key-init"),
          "έ": cc11001100_hook("έ", "ε", "object-key-init"),
          "ή": cc11001100_hook("ή", "η", "object-key-init"),
          "ί": cc11001100_hook("ί", "ι", "object-key-init"),
          "ϊ": cc11001100_hook("ϊ", "ι", "object-key-init"),
          "ΐ": cc11001100_hook("ΐ", "ι", "object-key-init"),
          "ό": cc11001100_hook("ό", "ο", "object-key-init"),
          "ύ": cc11001100_hook("ύ", "υ", "object-key-init"),
          "ϋ": cc11001100_hook("ϋ", "υ", "object-key-init"),
          "ΰ": cc11001100_hook("ΰ", "υ", "object-key-init"),
          "ώ": cc11001100_hook("ώ", "ω", "object-key-init"),
          "ς": cc11001100_hook("ς", "σ", "object-key-init"),
          "’": cc11001100_hook("’", "'", "object-key-init")
        };
      }), e.define("select2/data/base", ["../utils"], function (r) {
        function n(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          n.__super__.constructor.call(this);
        }
        return r.Extend(n, r.Observable), n.prototype.current = cc11001100_hook("n.prototype.current", function (e) {
          throw new Error("The `current` method must be defined in child classes.");
        }, "assign"), n.prototype.query = cc11001100_hook("n.prototype.query", function (e, t) {
          throw new Error("The `query` method must be defined in child classes.");
        }, "assign"), n.prototype.bind = cc11001100_hook("n.prototype.bind", function (e, t) {}, "assign"), n.prototype.destroy = cc11001100_hook("n.prototype.destroy", function () {}, "assign"), n.prototype.generateResultId = cc11001100_hook("n.prototype.generateResultId", function (e, t) {
          var n = cc11001100_hook("n", e.id + "-result-", "var-init");
          return n += cc11001100_hook("n", r.generateChars(4), "assign"), null != t.id ? n += cc11001100_hook("n", "-" + t.id.toString(), "assign") : n += cc11001100_hook("n", "-" + r.generateChars(4), "assign"), n;
        }, "assign"), n;
      }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) {
        function n(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          this.$element = cc11001100_hook("this.$element", e, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), n.__super__.constructor.call(this);
        }
        return a.Extend(n, e), n.prototype.current = cc11001100_hook("n.prototype.current", function (e) {
          var n = cc11001100_hook("n", [], "var-init"),
            r = cc11001100_hook("r", this, "var-init");
          this.$element.find(":selected").each(function () {
            var e = cc11001100_hook("e", l(this), "var-init"),
              t = cc11001100_hook("t", r.item(e), "var-init");
            n.push(t);
          }), e(n);
        }, "assign"), n.prototype.select = cc11001100_hook("n.prototype.select", function (i) {
          var o = cc11001100_hook("o", this, "var-init");
          if (i.selected = cc11001100_hook("i.selected", !0, "assign"), l(i.element).is("option")) return i.element.selected = cc11001100_hook("i.element.selected", !0, "assign"), void this.$element.trigger("input").trigger("change");
          if (this.$element.prop("multiple")) this.current(function (e) {
            var t = cc11001100_hook("t", [], "var-init");
            (i = cc11001100_hook("i", [i], "assign")).push.apply(i, e);
            for (var n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) {
              var r = cc11001100_hook("r", i[n].id, "var-init");
              -1 === l.inArray(r, t) && t.push(r);
            }
            o.$element.val(t), o.$element.trigger("input").trigger("change");
          });else {
            var e = cc11001100_hook("e", i.id, "var-init");
            this.$element.val(e), this.$element.trigger("input").trigger("change");
          }
        }, "assign"), n.prototype.unselect = cc11001100_hook("n.prototype.unselect", function (i) {
          var o = cc11001100_hook("o", this, "var-init");
          if (this.$element.prop("multiple")) {
            if (i.selected = cc11001100_hook("i.selected", !1, "assign"), l(i.element).is("option")) return i.element.selected = cc11001100_hook("i.element.selected", !1, "assign"), void this.$element.trigger("input").trigger("change");
            this.current(function (e) {
              for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
                var r = cc11001100_hook("r", e[n].id, "var-init");
                r !== i.id && -1 === l.inArray(r, t) && t.push(r);
              }
              o.$element.val(t), o.$element.trigger("input").trigger("change");
            });
          }
        }, "assign"), n.prototype.bind = cc11001100_hook("n.prototype.bind", function (e, t) {
          var n = cc11001100_hook("n", this, "var-init");
          (this.container = cc11001100_hook("this.container", e, "assign")).on("select", function (e) {
            n.select(e.data);
          }), e.on("unselect", function (e) {
            n.unselect(e.data);
          });
        }, "assign"), n.prototype.destroy = cc11001100_hook("n.prototype.destroy", function () {
          this.$element.find("*").each(function () {
            a.RemoveData(this);
          });
        }, "assign"), n.prototype.query = cc11001100_hook("n.prototype.query", function (r, e) {
          var i = cc11001100_hook("i", [], "var-init"),
            o = cc11001100_hook("o", this, "var-init");
          this.$element.children().each(function () {
            var e = cc11001100_hook("e", l(this), "var-init");
            if (e.is("option") || e.is("optgroup")) {
              var t = cc11001100_hook("t", o.item(e), "var-init"),
                n = cc11001100_hook("n", o.matches(r, t), "var-init");
              null !== n && i.push(n);
            }
          }), e({
            results: cc11001100_hook("results", i, "object-key-init")
          });
        }, "assign"), n.prototype.addOptions = cc11001100_hook("n.prototype.addOptions", function (e) {
          a.appendMany(this.$element, e);
        }, "assign"), n.prototype.option = cc11001100_hook("n.prototype.option", function (e) {
          var t;
          e.children ? (t = cc11001100_hook("t", document.createElement("optgroup"), "assign")).label = cc11001100_hook("(t = document.createElement(\"optgroup\")).label", e.text, "assign") : void 0 !== (t = cc11001100_hook("t", document.createElement("option"), "assign")).textContent ? t.textContent = cc11001100_hook("t.textContent", e.text, "assign") : t.innerText = cc11001100_hook("t.innerText", e.text, "assign"), void 0 !== e.id && (t.value = cc11001100_hook("t.value", e.id, "assign")), e.disabled && (t.disabled = cc11001100_hook("t.disabled", !0, "assign")), e.selected && (t.selected = cc11001100_hook("t.selected", !0, "assign")), e.title && (t.title = cc11001100_hook("t.title", e.title, "assign"));
          var n = cc11001100_hook("n", l(t), "var-init"),
            r = cc11001100_hook("r", this._normalizeItem(e), "var-init");
          return r.element = cc11001100_hook("r.element", t, "assign"), a.StoreData(t, "data", r), n;
        }, "assign"), n.prototype.item = cc11001100_hook("n.prototype.item", function (e) {
          var t = cc11001100_hook("t", {}, "var-init");
          if (null != (t = cc11001100_hook("t", a.GetData(e[0], "data"), "assign"))) return t;
          if (e.is("option")) t = cc11001100_hook("t", {
            id: cc11001100_hook("id", e.val(), "object-key-init"),
            text: cc11001100_hook("text", e.text(), "object-key-init"),
            disabled: cc11001100_hook("disabled", e.prop("disabled"), "object-key-init"),
            selected: cc11001100_hook("selected", e.prop("selected"), "object-key-init"),
            title: cc11001100_hook("title", e.prop("title"), "object-key-init")
          }, "assign");else if (e.is("optgroup")) {
            t = cc11001100_hook("t", {
              text: cc11001100_hook("text", e.prop("label"), "object-key-init"),
              children: cc11001100_hook("children", [], "object-key-init"),
              title: cc11001100_hook("title", e.prop("title"), "object-key-init")
            }, "assign");
            for (var n = cc11001100_hook("n", e.children("option"), "var-init"), r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
              var o = cc11001100_hook("o", l(n[i]), "var-init"),
                s = cc11001100_hook("s", this.item(o), "var-init");
              r.push(s);
            }
            t.children = cc11001100_hook("t.children", r, "assign");
          }
          return (t = cc11001100_hook("t", this._normalizeItem(t), "assign")).element = cc11001100_hook("(t = this._normalizeItem(t)).element", e[0], "assign"), a.StoreData(e[0], "data", t), t;
        }, "assign"), n.prototype._normalizeItem = cc11001100_hook("n.prototype._normalizeItem", function (e) {
          e !== Object(e) && (e = cc11001100_hook("e", {
            id: cc11001100_hook("id", e, "object-key-init"),
            text: cc11001100_hook("text", e, "object-key-init")
          }, "assign"));
          return null != (e = cc11001100_hook("e", l.extend({}, {
            text: cc11001100_hook("text", "", "object-key-init")
          }, e), "assign")).id && (e.id = cc11001100_hook("e.id", e.id.toString(), "assign")), null != e.text && (e.text = cc11001100_hook("e.text", e.text.toString(), "assign")), null == e._resultId && e.id && null != this.container && (e._resultId = cc11001100_hook("e._resultId", this.generateResultId(this.container, e), "assign")), l.extend({}, {
            selected: cc11001100_hook("selected", !1, "object-key-init"),
            disabled: cc11001100_hook("disabled", !1, "object-key-init")
          }, e);
        }, "assign"), n.prototype.matches = cc11001100_hook("n.prototype.matches", function (e, t) {
          return this.options.get("matcher")(e, t);
        }, "assign"), n;
      }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, f, g) {
        function r(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          this._dataToConvert = cc11001100_hook("this._dataToConvert", t.get("data") || [], "assign"), r.__super__.constructor.call(this, e, t);
        }
        return f.Extend(r, e), r.prototype.bind = cc11001100_hook("r.prototype.bind", function (e, t) {
          r.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, "assign"), r.prototype.select = cc11001100_hook("r.prototype.select", function (n) {
          var e = cc11001100_hook("e", this.$element.find("option").filter(function (e, t) {
            return t.value == n.id.toString();
          }), "var-init");
          0 === e.length && (e = cc11001100_hook("e", this.option(n), "assign"), this.addOptions(e)), r.__super__.select.call(this, n);
        }, "assign"), r.prototype.convertToOptions = cc11001100_hook("r.prototype.convertToOptions", function (e) {
          var t = cc11001100_hook("t", this, "var-init"),
            n = cc11001100_hook("n", this.$element.find("option"), "var-init"),
            r = cc11001100_hook("r", n.map(function () {
              return t.item(g(this)).id;
            }).get(), "var-init"),
            i = cc11001100_hook("i", [], "var-init");
          function o(e) {
            cc11001100_hook("e", e, "function-parameter");
            return function () {
              return g(this).val() == e.id;
            };
          }
          for (var s = cc11001100_hook("s", 0, "var-init"); s < e.length; s++) {
            var a = cc11001100_hook("a", this._normalizeItem(e[s]), "var-init");
            if (0 <= g.inArray(a.id, r)) {
              var l = cc11001100_hook("l", n.filter(o(a)), "var-init"),
                c = cc11001100_hook("c", this.item(l), "var-init"),
                u = cc11001100_hook("u", g.extend(!0, {}, a, c), "var-init"),
                d = cc11001100_hook("d", this.option(u), "var-init");
              l.replaceWith(d);
            } else {
              var p = cc11001100_hook("p", this.option(a), "var-init");
              if (a.children) {
                var h = cc11001100_hook("h", this.convertToOptions(a.children), "var-init");
                f.appendMany(p, h);
              }
              i.push(p);
            }
          }
          return i;
        }, "assign"), r;
      }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, o) {
        function n(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          this.ajaxOptions = cc11001100_hook("this.ajaxOptions", this._applyDefaults(t.get("ajax")), "assign"), null != this.ajaxOptions.processResults && (this.processResults = cc11001100_hook("this.processResults", this.ajaxOptions.processResults, "assign")), n.__super__.constructor.call(this, e, t);
        }
        return t.Extend(n, e), n.prototype._applyDefaults = cc11001100_hook("n.prototype._applyDefaults", function (e) {
          var t = cc11001100_hook("t", {
            data: function (e) {
              return o.extend({}, e, {
                q: cc11001100_hook("q", e.term, "object-key-init")
              });
            },
            transport: function (e, t, n) {
              var r = cc11001100_hook("r", o.ajax(e), "var-init");
              return r.then(t), r.fail(n), r;
            }
          }, "var-init");
          return o.extend({}, t, e, !0);
        }, "assign"), n.prototype.processResults = cc11001100_hook("n.prototype.processResults", function (e) {
          return e;
        }, "assign"), n.prototype.query = cc11001100_hook("n.prototype.query", function (n, r) {
          var i = cc11001100_hook("i", this, "var-init");
          null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = cc11001100_hook("this._request", null, "assign"));
          var t = cc11001100_hook("t", o.extend({
            type: cc11001100_hook("type", "GET", "object-key-init")
          }, this.ajaxOptions), "var-init");
          function e() {
            var e = cc11001100_hook("e", t.transport(t, function (e) {
              var t = cc11001100_hook("t", i.processResults(e, n), "var-init");
              i.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), r(t);
            }, function () {
              "status" in e && (0 === e.status || "0" === e.status) || i.trigger("results:message", {
                message: cc11001100_hook("message", "errorLoading", "object-key-init")
              });
            }), "var-init");
            i._request = cc11001100_hook("i._request", e, "assign");
          }
          "function" == typeof t.url && (t.url = cc11001100_hook("t.url", t.url.call(this.$element, n), "assign")), "function" == typeof t.data && (t.data = cc11001100_hook("t.data", t.data.call(this.$element, n), "assign")), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = cc11001100_hook("this._queryTimeout", window.setTimeout(e, this.ajaxOptions.delay), "assign")) : e();
        }, "assign"), n;
      }), e.define("select2/data/tags", ["jquery"], function (u) {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          var r = cc11001100_hook("r", n.get("tags"), "var-init"),
            i = cc11001100_hook("i", n.get("createTag"), "var-init");
          void 0 !== i && (this.createTag = cc11001100_hook("this.createTag", i, "assign"));
          var o = cc11001100_hook("o", n.get("insertTag"), "var-init");
          if (void 0 !== o && (this.insertTag = cc11001100_hook("this.insertTag", o, "assign")), e.call(this, t, n), u.isArray(r)) for (var s = cc11001100_hook("s", 0, "var-init"); s < r.length; s++) {
            var a = cc11001100_hook("a", r[s], "var-init"),
              l = cc11001100_hook("l", this._normalizeItem(a), "var-init"),
              c = cc11001100_hook("c", this.option(l), "var-init");
            this.$element.append(c);
          }
        }
        return e.prototype.query = cc11001100_hook("e.prototype.query", function (e, c, u) {
          var d = cc11001100_hook("d", this, "var-init");
          this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
            for (var r = cc11001100_hook("r", t.results, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
              var o = cc11001100_hook("o", r[i], "var-init"),
                s = cc11001100_hook("s", null != o.children && !e({
                  results: cc11001100_hook("results", o.children, "object-key-init")
                }, !0), "var-init");
              if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = cc11001100_hook("t.data", r, "assign"), void u(t));
            }
            if (n) return !0;
            var a = cc11001100_hook("a", d.createTag(c), "var-init");
            if (null != a) {
              var l = cc11001100_hook("l", d.option(a), "var-init");
              l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(r, a);
            }
            t.results = cc11001100_hook("t.results", r, "assign"), u(t);
          }) : e.call(this, c, u);
        }, "assign"), e.prototype.createTag = cc11001100_hook("e.prototype.createTag", function (e, t) {
          var n = cc11001100_hook("n", u.trim(t.term), "var-init");
          return "" === n ? null : {
            id: cc11001100_hook("id", n, "object-key-init"),
            text: cc11001100_hook("text", n, "object-key-init")
          };
        }, "assign"), e.prototype.insertTag = cc11001100_hook("e.prototype.insertTag", function (e, t, n) {
          t.unshift(n);
        }, "assign"), e.prototype._removeOldTags = cc11001100_hook("e.prototype._removeOldTags", function (e) {
          this.$element.find("option[data-select2-tag]").each(function () {
            this.selected || u(this).remove();
          });
        }, "assign"), e;
      }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          var r = cc11001100_hook("r", n.get("tokenizer"), "var-init");
          void 0 !== r && (this.tokenizer = cc11001100_hook("this.tokenizer", r, "assign")), e.call(this, t, n);
        }
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          e.call(this, t, n), this.$search = cc11001100_hook("this.$search", t.dropdown.$search || t.selection.$search || n.find(".select2-search__field"), "assign");
        }, "assign"), e.prototype.query = cc11001100_hook("e.prototype.query", function (e, t, n) {
          var i = cc11001100_hook("i", this, "var-init");
          t.term = cc11001100_hook("t.term", t.term || "", "assign");
          var r = cc11001100_hook("r", this.tokenizer(t, this.options, function (e) {
            var t,
              n = cc11001100_hook("n", i._normalizeItem(e), "var-init");
            if (!i.$element.find("option").filter(function () {
              return d(this).val() === n.id;
            }).length) {
              var r = cc11001100_hook("r", i.option(n), "var-init");
              r.attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([r]);
            }
            t = cc11001100_hook("t", n, "assign"), i.trigger("select", {
              data: cc11001100_hook("data", t, "object-key-init")
            });
          }), "var-init");
          r.term !== t.term && (this.$search.length && (this.$search.val(r.term), this.$search.trigger("focus")), t.term = cc11001100_hook("t.term", r.term, "assign")), e.call(this, t, n);
        }, "assign"), e.prototype.tokenizer = cc11001100_hook("e.prototype.tokenizer", function (e, t, n, r) {
          for (var i = cc11001100_hook("i", n.get("tokenSeparators") || [], "var-init"), o = cc11001100_hook("o", t.term, "var-init"), s = cc11001100_hook("s", 0, "var-init"), a = cc11001100_hook("a", this.createTag || function (e) {
              return {
                id: cc11001100_hook("id", e.term, "object-key-init"),
                text: cc11001100_hook("text", e.term, "object-key-init")
              };
            }, "var-init"); s < o.length;) {
            var l = cc11001100_hook("l", o[s], "var-init");
            if (-1 !== d.inArray(l, i)) {
              var c = cc11001100_hook("c", o.substr(0, s), "var-init"),
                u = cc11001100_hook("u", a(d.extend({}, t, {
                  term: cc11001100_hook("term", c, "object-key-init")
                })), "var-init");
              null != u ? (r(u), o = cc11001100_hook("o", o.substr(s + 1) || "", "assign"), s = cc11001100_hook("s", 0, "assign")) : s++;
            } else s++;
          }
          return {
            term: cc11001100_hook("term", o, "object-key-init")
          };
        }, "assign"), e;
      }), e.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          this.minimumInputLength = cc11001100_hook("this.minimumInputLength", n.get("minimumInputLength"), "assign"), e.call(this, t, n);
        }
        return e.prototype.query = cc11001100_hook("e.prototype.query", function (e, t, n) {
          t.term = cc11001100_hook("t.term", t.term || "", "assign"), t.term.length < this.minimumInputLength ? this.trigger("results:message", {
            message: cc11001100_hook("message", "inputTooShort", "object-key-init"),
            args: {
              minimum: cc11001100_hook("minimum", this.minimumInputLength, "object-key-init"),
              input: cc11001100_hook("input", t.term, "object-key-init"),
              params: cc11001100_hook("params", t, "object-key-init")
            }
          }) : e.call(this, t, n);
        }, "assign"), e;
      }), e.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          this.maximumInputLength = cc11001100_hook("this.maximumInputLength", n.get("maximumInputLength"), "assign"), e.call(this, t, n);
        }
        return e.prototype.query = cc11001100_hook("e.prototype.query", function (e, t, n) {
          t.term = cc11001100_hook("t.term", t.term || "", "assign"), 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
            message: cc11001100_hook("message", "inputTooLong", "object-key-init"),
            args: {
              maximum: cc11001100_hook("maximum", this.maximumInputLength, "object-key-init"),
              input: cc11001100_hook("input", t.term, "object-key-init"),
              params: cc11001100_hook("params", t, "object-key-init")
            }
          }) : e.call(this, t, n);
        }, "assign"), e;
      }), e.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          this.maximumSelectionLength = cc11001100_hook("this.maximumSelectionLength", n.get("maximumSelectionLength"), "assign"), e.call(this, t, n);
        }
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          e.call(this, t, n), t.on("select", function () {
            r._checkIfMaximumSelected();
          });
        }, "assign"), e.prototype.query = cc11001100_hook("e.prototype.query", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          this._checkIfMaximumSelected(function () {
            e.call(r, t, n);
          });
        }, "assign"), e.prototype._checkIfMaximumSelected = cc11001100_hook("e.prototype._checkIfMaximumSelected", function (e, n) {
          var r = cc11001100_hook("r", this, "var-init");
          this.current(function (e) {
            var t = cc11001100_hook("t", null != e ? e.length : 0, "var-init");
            0 < r.maximumSelectionLength && t >= r.maximumSelectionLength ? r.trigger("results:message", {
              message: cc11001100_hook("message", "maximumSelected", "object-key-init"),
              args: {
                maximum: cc11001100_hook("maximum", r.maximumSelectionLength, "object-key-init")
              }
            }) : n && n();
          });
        }, "assign"), e;
      }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          this.$element = cc11001100_hook("this.$element", e, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), n.__super__.constructor.call(this);
        }
        return e.Extend(n, e.Observable), n.prototype.render = cc11001100_hook("n.prototype.render", function () {
          var e = cc11001100_hook("e", t('<span class="select2-dropdown"><span class="select2-results"></span></span>'), "var-init");
          return e.attr("dir", this.options.get("dir")), this.$dropdown = cc11001100_hook("this.$dropdown", e, "assign");
        }, "assign"), n.prototype.bind = cc11001100_hook("n.prototype.bind", function () {}, "assign"), n.prototype.position = cc11001100_hook("n.prototype.position", function (e, t) {}, "assign"), n.prototype.destroy = cc11001100_hook("n.prototype.destroy", function () {
          this.$dropdown.remove();
        }, "assign"), n;
      }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
        function t() {}
        return t.prototype.render = cc11001100_hook("t.prototype.render", function (e) {
          var t = cc11001100_hook("t", e.call(this), "var-init"),
            n = cc11001100_hook("n", o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'), "var-init");
          return this.$searchContainer = cc11001100_hook("this.$searchContainer", n, "assign"), this.$search = cc11001100_hook("this.$search", n.find("input"), "assign"), t.prepend(n), t;
        }, "assign"), t.prototype.bind = cc11001100_hook("t.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init"),
            i = cc11001100_hook("i", t.id + "-results", "var-init");
          e.call(this, t, n), this.$search.on("keydown", function (e) {
            r.trigger("keypress", e), r._keyUpPrevented = cc11001100_hook("r._keyUpPrevented", e.isDefaultPrevented(), "assign");
          }), this.$search.on("input", function (e) {
            o(this).off("keyup");
          }), this.$search.on("keyup input", function (e) {
            r.handleSearch(e);
          }), t.on("open", function () {
            r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", i), r.$search.trigger("focus"), window.setTimeout(function () {
              r.$search.trigger("focus");
            }, 0);
          }), t.on("close", function () {
            r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur");
          }), t.on("focus", function () {
            t.isOpen() || r.$search.trigger("focus");
          }), t.on("results:all", function (e) {
            null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"));
          }), t.on("results:focus", function (e) {
            e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
          });
        }, "assign"), t.prototype.handleSearch = cc11001100_hook("t.prototype.handleSearch", function (e) {
          if (!this._keyUpPrevented) {
            var t = cc11001100_hook("t", this.$search.val(), "var-init");
            this.trigger("query", {
              term: cc11001100_hook("term", t, "object-key-init")
            });
          }
          this._keyUpPrevented = cc11001100_hook("this._keyUpPrevented", !1, "assign");
        }, "assign"), t.prototype.showSearch = cc11001100_hook("t.prototype.showSearch", function (e, t) {
          return !0;
        }, "assign"), t;
      }), e.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, r) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          this.placeholder = cc11001100_hook("this.placeholder", this.normalizePlaceholder(n.get("placeholder")), "assign"), e.call(this, t, n, r);
        }
        return e.prototype.append = cc11001100_hook("e.prototype.append", function (e, t) {
          t.results = cc11001100_hook("t.results", this.removePlaceholder(t.results), "assign"), e.call(this, t);
        }, "assign"), e.prototype.normalizePlaceholder = cc11001100_hook("e.prototype.normalizePlaceholder", function (e, t) {
          return "string" == typeof t && (t = cc11001100_hook("t", {
            id: cc11001100_hook("id", "", "object-key-init"),
            text: cc11001100_hook("text", t, "object-key-init")
          }, "assign")), t;
        }, "assign"), e.prototype.removePlaceholder = cc11001100_hook("e.prototype.removePlaceholder", function (e, t) {
          for (var n = cc11001100_hook("n", t.slice(0), "var-init"), r = cc11001100_hook("r", t.length - 1, "var-init"); 0 <= r; r--) {
            var i = cc11001100_hook("i", t[r], "var-init");
            this.placeholder.id === i.id && n.splice(r, 1);
          }
          return n;
        }, "assign"), e;
      }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, r) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          this.lastParams = cc11001100_hook("this.lastParams", {}, "assign"), e.call(this, t, n, r), this.$loadingMore = cc11001100_hook("this.$loadingMore", this.createLoadingMore(), "assign"), this.loading = cc11001100_hook("this.loading", !1, "assign");
        }
        return e.prototype.append = cc11001100_hook("e.prototype.append", function (e, t) {
          this.$loadingMore.remove(), this.loading = cc11001100_hook("this.loading", !1, "assign"), e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, "assign"), e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          e.call(this, t, n), t.on("query", function (e) {
            r.lastParams = cc11001100_hook("r.lastParams", e, "assign"), r.loading = cc11001100_hook("r.loading", !0, "assign");
          }), t.on("query:append", function (e) {
            r.lastParams = cc11001100_hook("r.lastParams", e, "assign"), r.loading = cc11001100_hook("r.loading", !0, "assign");
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, "assign"), e.prototype.loadMoreIfNeeded = cc11001100_hook("e.prototype.loadMoreIfNeeded", function () {
          var e = cc11001100_hook("e", n.contains(document.documentElement, this.$loadingMore[0]), "var-init");
          if (!this.loading && e) {
            var t = cc11001100_hook("t", this.$results.offset().top + this.$results.outerHeight(!1), "var-init");
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore();
          }
        }, "assign"), e.prototype.loadMore = cc11001100_hook("e.prototype.loadMore", function () {
          this.loading = cc11001100_hook("this.loading", !0, "assign");
          var e = cc11001100_hook("e", n.extend({}, {
            page: cc11001100_hook("page", 1, "object-key-init")
          }, this.lastParams), "var-init");
          e.page++, this.trigger("query:append", e);
        }, "assign"), e.prototype.showLoadingMore = cc11001100_hook("e.prototype.showLoadingMore", function (e, t) {
          return t.pagination && t.pagination.more;
        }, "assign"), e.prototype.createLoadingMore = cc11001100_hook("e.prototype.createLoadingMore", function () {
          var e = cc11001100_hook("e", n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'), "var-init"),
            t = cc11001100_hook("t", this.options.get("translations").get("loadingMore"), "var-init");
          return e.html(t(this.lastParams)), e;
        }, "assign"), e;
      }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
        function e(e, t, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          this.$dropdownParent = cc11001100_hook("this.$dropdownParent", f(n.get("dropdownParent") || document.body), "assign"), e.call(this, t, n);
        }
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          e.call(this, t, n), t.on("open", function () {
            r._showDropdown(), r._attachPositioningHandler(t), r._bindContainerResultHandlers(t);
          }), t.on("close", function () {
            r._hideDropdown(), r._detachPositioningHandler(t);
          }), this.$dropdownContainer.on("mousedown", function (e) {
            e.stopPropagation();
          });
        }, "assign"), e.prototype.destroy = cc11001100_hook("e.prototype.destroy", function (e) {
          e.call(this), this.$dropdownContainer.remove();
        }, "assign"), e.prototype.position = cc11001100_hook("e.prototype.position", function (e, t, n) {
          t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
            position: cc11001100_hook("position", "absolute", "object-key-init"),
            top: cc11001100_hook("top", -999999, "object-key-init")
          }), this.$container = cc11001100_hook("this.$container", n, "assign");
        }, "assign"), e.prototype.render = cc11001100_hook("e.prototype.render", function (e) {
          var t = cc11001100_hook("t", f("<span></span>"), "var-init"),
            n = cc11001100_hook("n", e.call(this), "var-init");
          return t.append(n), this.$dropdownContainer = cc11001100_hook("this.$dropdownContainer", t, "assign");
        }, "assign"), e.prototype._hideDropdown = cc11001100_hook("e.prototype._hideDropdown", function (e) {
          this.$dropdownContainer.detach();
        }, "assign"), e.prototype._bindContainerResultHandlers = cc11001100_hook("e.prototype._bindContainerResultHandlers", function (e, t) {
          if (!this._containerResultsHandlersBound) {
            var n = cc11001100_hook("n", this, "var-init");
            t.on("results:all", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:append", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:message", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("select", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("unselect", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), this._containerResultsHandlersBound = cc11001100_hook("this._containerResultsHandlersBound", !0, "assign");
          }
        }, "assign"), e.prototype._attachPositioningHandler = cc11001100_hook("e.prototype._attachPositioningHandler", function (e, t) {
          var n = cc11001100_hook("n", this, "var-init"),
            r = cc11001100_hook("r", "scroll.select2." + t.id, "var-init"),
            i = cc11001100_hook("i", "resize.select2." + t.id, "var-init"),
            o = cc11001100_hook("o", "orientationchange.select2." + t.id, "var-init"),
            s = cc11001100_hook("s", this.$container.parents().filter(a.hasScroll), "var-init");
          s.each(function () {
            a.StoreData(this, "select2-scroll-position", {
              x: cc11001100_hook("x", f(this).scrollLeft(), "object-key-init"),
              y: cc11001100_hook("y", f(this).scrollTop(), "object-key-init")
            });
          }), s.on(r, function (e) {
            var t = cc11001100_hook("t", a.GetData(this, "select2-scroll-position"), "var-init");
            f(this).scrollTop(t.y);
          }), f(window).on(r + " " + i + " " + o, function (e) {
            n._positionDropdown(), n._resizeDropdown();
          });
        }, "assign"), e.prototype._detachPositioningHandler = cc11001100_hook("e.prototype._detachPositioningHandler", function (e, t) {
          var n = cc11001100_hook("n", "scroll.select2." + t.id, "var-init"),
            r = cc11001100_hook("r", "resize.select2." + t.id, "var-init"),
            i = cc11001100_hook("i", "orientationchange.select2." + t.id, "var-init");
          this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + r + " " + i);
        }, "assign"), e.prototype._positionDropdown = cc11001100_hook("e.prototype._positionDropdown", function () {
          var e = cc11001100_hook("e", f(window), "var-init"),
            t = cc11001100_hook("t", this.$dropdown.hasClass("select2-dropdown--above"), "var-init"),
            n = cc11001100_hook("n", this.$dropdown.hasClass("select2-dropdown--below"), "var-init"),
            r = cc11001100_hook("r", null, "var-init"),
            i = cc11001100_hook("i", this.$container.offset(), "var-init");
          i.bottom = cc11001100_hook("i.bottom", i.top + this.$container.outerHeight(!1), "assign");
          var o = cc11001100_hook("o", {
            height: cc11001100_hook("height", this.$container.outerHeight(!1), "object-key-init")
          }, "var-init");
          o.top = cc11001100_hook("o.top", i.top, "assign"), o.bottom = cc11001100_hook("o.bottom", i.top + o.height, "assign");
          var s = cc11001100_hook("s", this.$dropdown.outerHeight(!1), "var-init"),
            a = cc11001100_hook("a", e.scrollTop(), "var-init"),
            l = cc11001100_hook("l", e.scrollTop() + e.height(), "var-init"),
            c = cc11001100_hook("c", a < i.top - s, "var-init"),
            u = cc11001100_hook("u", l > i.bottom + s, "var-init"),
            d = cc11001100_hook("d", {
              left: cc11001100_hook("left", i.left, "object-key-init"),
              top: cc11001100_hook("top", o.bottom, "object-key-init")
            }, "var-init"),
            p = cc11001100_hook("p", this.$dropdownParent, "var-init");
          "static" === p.css("position") && (p = cc11001100_hook("p", p.offsetParent(), "assign"));
          var h = cc11001100_hook("h", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init");
          (f.contains(document.body, p[0]) || p[0].isConnected) && (h = cc11001100_hook("h", p.offset(), "assign")), d.top -= cc11001100_hook("d.top", h.top, "assign"), d.left -= cc11001100_hook("d.left", h.left, "assign"), t || n || (r = cc11001100_hook("r", "below", "assign")), u || !c || t ? !c && u && t && (r = cc11001100_hook("r", "below", "assign")) : r = cc11001100_hook("r", "above", "assign"), ("above" == r || t && "below" !== r) && (d.top = cc11001100_hook("d.top", o.top - h.top - s, "assign")), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d);
        }, "assign"), e.prototype._resizeDropdown = cc11001100_hook("e.prototype._resizeDropdown", function () {
          var e = cc11001100_hook("e", {
            width: cc11001100_hook("width", this.$container.outerWidth(!1) + "px", "object-key-init")
          }, "var-init");
          this.options.get("dropdownAutoWidth") && (e.minWidth = cc11001100_hook("e.minWidth", e.width, "assign"), e.position = cc11001100_hook("e.position", "relative", "assign"), e.width = cc11001100_hook("e.width", "auto", "assign")), this.$dropdown.css(e);
        }, "assign"), e.prototype._showDropdown = cc11001100_hook("e.prototype._showDropdown", function (e) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, "assign"), e;
      }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, r) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          this.minimumResultsForSearch = cc11001100_hook("this.minimumResultsForSearch", n.get("minimumResultsForSearch"), "assign"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = cc11001100_hook("this.minimumResultsForSearch", 1 / 0, "assign")), e.call(this, t, n, r);
        }
        return e.prototype.showSearch = cc11001100_hook("e.prototype.showSearch", function (e, t) {
          return !(function e(t) {
            for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
              var i = cc11001100_hook("i", t[r], "var-init");
              i.children ? n += cc11001100_hook("n", e(i.children), "assign") : n++;
            }
            return n;
          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, "assign"), e;
      }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
        function e() {}
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          e.call(this, t, n), t.on("close", function (e) {
            r._handleSelectOnClose(e);
          });
        }, "assign"), e.prototype._handleSelectOnClose = cc11001100_hook("e.prototype._handleSelectOnClose", function (e, t) {
          if (t && null != t.originalSelect2Event) {
            var n = cc11001100_hook("n", t.originalSelect2Event, "var-init");
            if ("select" === n._type || "unselect" === n._type) return;
          }
          var r = cc11001100_hook("r", this.getHighlightedResults(), "var-init");
          if (!(r.length < 1)) {
            var i = cc11001100_hook("i", o.GetData(r[0], "data"), "var-init");
            null != i.element && i.element.selected || null == i.element && i.selected || this.trigger("select", {
              data: cc11001100_hook("data", i, "object-key-init")
            });
          }
        }, "assign"), e;
      }), e.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return e.prototype.bind = cc11001100_hook("e.prototype.bind", function (e, t, n) {
          var r = cc11001100_hook("r", this, "var-init");
          e.call(this, t, n), t.on("select", function (e) {
            r._selectTriggered(e);
          }), t.on("unselect", function (e) {
            r._selectTriggered(e);
          });
        }, "assign"), e.prototype._selectTriggered = cc11001100_hook("e.prototype._selectTriggered", function (e, t) {
          var n = cc11001100_hook("n", t.originalEvent, "var-init");
          n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
            originalEvent: cc11001100_hook("originalEvent", n, "object-key-init"),
            originalSelect2Event: cc11001100_hook("originalSelect2Event", t, "object-key-init")
          });
        }, "assign"), e;
      }), e.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded.";
          },
          inputTooLong: function (e) {
            var t = cc11001100_hook("t", e.input.length - e.maximum, "var-init"),
              n = cc11001100_hook("n", "Please delete " + t + " character", "var-init");
            return 1 != t && (n += cc11001100_hook("n", "s", "assign")), n;
          },
          inputTooShort: function (e) {
            return "Please enter " + (e.minimum - e.input.length) + " or more characters";
          },
          loadingMore: function () {
            return "Loading more results…";
          },
          maximumSelected: function (e) {
            var t = cc11001100_hook("t", "You can only select " + e.maximum + " item", "var-init");
            return 1 != e.maximum && (t += cc11001100_hook("t", "s", "assign")), t;
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searching…";
          },
          removeAllItems: function () {
            return "Remove all items";
          }
        };
      }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (c, u, d, p, h, f, g, m, v, y, s, t, _, $, b, w, A, x, D, S, E, C, O, T, q, L, I, j, e) {
        function n() {
          this.reset();
        }
        return n.prototype.apply = cc11001100_hook("n.prototype.apply", function (e) {
          if (null == (e = cc11001100_hook("e", c.extend(!0, {}, this.defaults, e), "assign")).dataAdapter) {
            if (null != e.ajax ? e.dataAdapter = cc11001100_hook("e.dataAdapter", b, "assign") : null != e.data ? e.dataAdapter = cc11001100_hook("e.dataAdapter", $, "assign") : e.dataAdapter = cc11001100_hook("e.dataAdapter", _, "assign"), 0 < e.minimumInputLength && (e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, x), "assign")), 0 < e.maximumInputLength && (e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, D), "assign")), 0 < e.maximumSelectionLength && (e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, S), "assign")), e.tags && (e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, w), "assign")), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, A), "assign")), null != e.query) {
              var t = cc11001100_hook("t", u(e.amdBase + "compat/query"), "var-init");
              e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, t), "assign");
            }
            if (null != e.initSelection) {
              var n = cc11001100_hook("n", u(e.amdBase + "compat/initSelection"), "var-init");
              e.dataAdapter = cc11001100_hook("e.dataAdapter", y.Decorate(e.dataAdapter, n), "assign");
            }
          }
          if (null == e.resultsAdapter && (e.resultsAdapter = cc11001100_hook("e.resultsAdapter", d, "assign"), null != e.ajax && (e.resultsAdapter = cc11001100_hook("e.resultsAdapter", y.Decorate(e.resultsAdapter, T), "assign")), null != e.placeholder && (e.resultsAdapter = cc11001100_hook("e.resultsAdapter", y.Decorate(e.resultsAdapter, O), "assign")), e.selectOnClose && (e.resultsAdapter = cc11001100_hook("e.resultsAdapter", y.Decorate(e.resultsAdapter, I), "assign"))), null == e.dropdownAdapter) {
            if (e.multiple) e.dropdownAdapter = cc11001100_hook("e.dropdownAdapter", E, "assign");else {
              var r = cc11001100_hook("r", y.Decorate(E, C), "var-init");
              e.dropdownAdapter = cc11001100_hook("e.dropdownAdapter", r, "assign");
            }
            if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = cc11001100_hook("e.dropdownAdapter", y.Decorate(e.dropdownAdapter, L), "assign")), e.closeOnSelect && (e.dropdownAdapter = cc11001100_hook("e.dropdownAdapter", y.Decorate(e.dropdownAdapter, j), "assign")), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
              var i = cc11001100_hook("i", u(e.amdBase + "compat/dropdownCss"), "var-init");
              e.dropdownAdapter = cc11001100_hook("e.dropdownAdapter", y.Decorate(e.dropdownAdapter, i), "assign");
            }
            e.dropdownAdapter = cc11001100_hook("e.dropdownAdapter", y.Decorate(e.dropdownAdapter, q), "assign");
          }
          if (null == e.selectionAdapter) {
            if (e.multiple ? e.selectionAdapter = cc11001100_hook("e.selectionAdapter", h, "assign") : e.selectionAdapter = cc11001100_hook("e.selectionAdapter", p, "assign"), null != e.placeholder && (e.selectionAdapter = cc11001100_hook("e.selectionAdapter", y.Decorate(e.selectionAdapter, f), "assign")), e.allowClear && (e.selectionAdapter = cc11001100_hook("e.selectionAdapter", y.Decorate(e.selectionAdapter, g), "assign")), e.multiple && (e.selectionAdapter = cc11001100_hook("e.selectionAdapter", y.Decorate(e.selectionAdapter, m), "assign")), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
              var o = cc11001100_hook("o", u(e.amdBase + "compat/containerCss"), "var-init");
              e.selectionAdapter = cc11001100_hook("e.selectionAdapter", y.Decorate(e.selectionAdapter, o), "assign");
            }
            e.selectionAdapter = cc11001100_hook("e.selectionAdapter", y.Decorate(e.selectionAdapter, v), "assign");
          }
          e.language = cc11001100_hook("e.language", this._resolveLanguage(e.language), "assign"), e.language.push("en");
          for (var s = cc11001100_hook("s", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e.language.length; a++) {
            var l = cc11001100_hook("l", e.language[a], "var-init");
            -1 === s.indexOf(l) && s.push(l);
          }
          return e.language = cc11001100_hook("e.language", s, "assign"), e.translations = cc11001100_hook("e.translations", this._processTranslations(e.language, e.debug), "assign"), e;
        }, "assign"), n.prototype.reset = cc11001100_hook("n.prototype.reset", function () {
          function a(e) {
            cc11001100_hook("e", e, "function-parameter");
            return e.replace(/[^\u0000-\u007E]/g, function (e) {
              return t[e] || e;
            });
          }
          this.defaults = cc11001100_hook("this.defaults", {
            amdBase: cc11001100_hook("amdBase", "./", "object-key-init"),
            amdLanguageBase: cc11001100_hook("amdLanguageBase", "./i18n/", "object-key-init"),
            closeOnSelect: cc11001100_hook("closeOnSelect", !0, "object-key-init"),
            debug: cc11001100_hook("debug", !1, "object-key-init"),
            dropdownAutoWidth: cc11001100_hook("dropdownAutoWidth", !1, "object-key-init"),
            escapeMarkup: cc11001100_hook("escapeMarkup", y.escapeMarkup, "object-key-init"),
            language: {},
            matcher: function e(t, n) {
              if ("" === c.trim(t.term)) return n;
              if (n.children && 0 < n.children.length) {
                for (var r = cc11001100_hook("r", c.extend(!0, {}, n), "var-init"), i = cc11001100_hook("i", n.children.length - 1, "var-init"); 0 <= i; i--) null == e(t, n.children[i]) && r.children.splice(i, 1);
                return 0 < r.children.length ? r : e(t, r);
              }
              var o = cc11001100_hook("o", a(n.text).toUpperCase(), "var-init"),
                s = cc11001100_hook("s", a(t.term).toUpperCase(), "var-init");
              return -1 < o.indexOf(s) ? n : null;
            },
            minimumInputLength: cc11001100_hook("minimumInputLength", 0, "object-key-init"),
            maximumInputLength: cc11001100_hook("maximumInputLength", 0, "object-key-init"),
            maximumSelectionLength: cc11001100_hook("maximumSelectionLength", 0, "object-key-init"),
            minimumResultsForSearch: cc11001100_hook("minimumResultsForSearch", 0, "object-key-init"),
            selectOnClose: cc11001100_hook("selectOnClose", !1, "object-key-init"),
            scrollAfterSelect: cc11001100_hook("scrollAfterSelect", !1, "object-key-init"),
            sorter: function (e) {
              return e;
            },
            templateResult: function (e) {
              return e.text;
            },
            templateSelection: function (e) {
              return e.text;
            },
            theme: cc11001100_hook("theme", "default", "object-key-init"),
            width: cc11001100_hook("width", "resolve", "object-key-init")
          }, "assign");
        }, "assign"), n.prototype.applyFromElement = cc11001100_hook("n.prototype.applyFromElement", function (e, t) {
          var n = cc11001100_hook("n", e.language, "var-init"),
            r = cc11001100_hook("r", this.defaults.language, "var-init"),
            i = cc11001100_hook("i", t.prop("lang"), "var-init"),
            o = cc11001100_hook("o", t.closest("[lang]").prop("lang"), "var-init"),
            s = cc11001100_hook("s", Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(r), this._resolveLanguage(o)), "var-init");
          return e.language = cc11001100_hook("e.language", s, "assign"), e;
        }, "assign"), n.prototype._resolveLanguage = cc11001100_hook("n.prototype._resolveLanguage", function (e) {
          if (!e) return [];
          if (c.isEmptyObject(e)) return [];
          if (c.isPlainObject(e)) return [e];
          var t;
          t = cc11001100_hook("t", c.isArray(e) ? e : [e], "assign");
          for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) if (n.push(t[r]), "string" == typeof t[r] && 0 < t[r].indexOf("-")) {
            var i = cc11001100_hook("i", t[r].split("-")[0], "var-init");
            n.push(i);
          }
          return n;
        }, "assign"), n.prototype._processTranslations = cc11001100_hook("n.prototype._processTranslations", function (e, t) {
          for (var n = cc11001100_hook("n", new s(), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) {
            var i = cc11001100_hook("i", new s(), "var-init"),
              o = cc11001100_hook("o", e[r], "var-init");
            if ("string" == typeof o) try {
              i = cc11001100_hook("i", s.loadPath(o), "assign");
            } catch (e) {
              try {
                o = cc11001100_hook("o", this.defaults.amdLanguageBase + o, "assign"), i = cc11001100_hook("i", s.loadPath(o), "assign");
              } catch (e) {
                t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.');
              }
            } else i = cc11001100_hook("i", c.isPlainObject(o) ? new s(o) : o, "assign");
            n.extend(i);
          }
          return n;
        }, "assign"), n.prototype.set = cc11001100_hook("n.prototype.set", function (e, t) {
          var n = cc11001100_hook("n", {}, "var-init");
          n[c.camelCase(e)] = cc11001100_hook("n[c.camelCase(e)]", t, "assign");
          var r = cc11001100_hook("r", y._convertData(n), "var-init");
          c.extend(!0, this.defaults, r);
        }, "assign"), new n();
      }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (r, d, i, p) {
        function e(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          if (this.options = cc11001100_hook("this.options", e, "assign"), null != t && this.fromElement(t), null != t && (this.options = cc11001100_hook("this.options", i.applyFromElement(this.options, t), "assign")), this.options = cc11001100_hook("this.options", i.apply(this.options), "assign"), t && t.is("input")) {
            var n = cc11001100_hook("n", r(this.get("amdBase") + "compat/inputData"), "var-init");
            this.options.dataAdapter = cc11001100_hook("this.options.dataAdapter", p.Decorate(this.options.dataAdapter, n), "assign");
          }
        }
        return e.prototype.fromElement = cc11001100_hook("e.prototype.fromElement", function (e) {
          var t = cc11001100_hook("t", ["select2"], "var-init");
          null == this.options.multiple && (this.options.multiple = cc11001100_hook("this.options.multiple", e.prop("multiple"), "assign")), null == this.options.disabled && (this.options.disabled = cc11001100_hook("this.options.disabled", e.prop("disabled"), "assign")), null == this.options.dir && (e.prop("dir") ? this.options.dir = cc11001100_hook("this.options.dir", e.prop("dir"), "assign") : e.closest("[dir]").prop("dir") ? this.options.dir = cc11001100_hook("this.options.dir", e.closest("[dir]").prop("dir"), "assign") : this.options.dir = cc11001100_hook("this.options.dir", "ltr", "assign")), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
          var n = cc11001100_hook("n", {}, "var-init");
          function r(e, t) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("t", t, "function-parameter");
            return t.toUpperCase();
          }
          for (var i = cc11001100_hook("i", 0, "var-init"); i < e[0].attributes.length; i++) {
            var o = cc11001100_hook("o", e[0].attributes[i].name, "var-init"),
              s = cc11001100_hook("s", "data-", "var-init");
            if (o.substr(0, s.length) == s) {
              var a = cc11001100_hook("a", o.substring(s.length), "var-init"),
                l = cc11001100_hook("l", p.GetData(e[0], a), "var-init");
              n[a.replace(/-([a-z])/g, r)] = cc11001100_hook("n[a.replace(/-([a-z])/g, r)]", l, "assign");
            }
          }
          d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = cc11001100_hook("n", d.extend(!0, {}, e[0].dataset, n), "assign"));
          var c = cc11001100_hook("c", d.extend(!0, {}, p.GetData(e[0]), n), "var-init");
          for (var u in c = cc11001100_hook("c", p._convertData(c), "assign")) -1 < d.inArray(u, t) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = cc11001100_hook("this.options[u]", c[u], "assign"));
          return this;
        }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function (e) {
          return this.options[e];
        }, "assign"), e.prototype.set = cc11001100_hook("e.prototype.set", function (e, t) {
          this.options[e] = cc11001100_hook("this.options[e]", t, "assign");
        }, "assign"), e;
      }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (o, c, u, r) {
        var d = function (e, t) {
          null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = cc11001100_hook("this.$element", e, "assign"), this.id = cc11001100_hook("this.id", this._generateId(e), "assign"), t = cc11001100_hook("t", t || {}, "assign"), this.options = cc11001100_hook("this.options", new c(t, e), "assign"), d.__super__.constructor.call(this);
          var n = cc11001100_hook("n", e.attr("tabindex") || 0, "var-init");
          u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
          var r = cc11001100_hook("r", this.options.get("dataAdapter"), "var-init");
          this.dataAdapter = cc11001100_hook("this.dataAdapter", new r(e, this.options), "assign");
          var i = cc11001100_hook("i", this.render(), "var-init");
          this._placeContainer(i);
          var o = cc11001100_hook("o", this.options.get("selectionAdapter"), "var-init");
          this.selection = cc11001100_hook("this.selection", new o(e, this.options), "assign"), this.$selection = cc11001100_hook("this.$selection", this.selection.render(), "assign"), this.selection.position(this.$selection, i);
          var s = cc11001100_hook("s", this.options.get("dropdownAdapter"), "var-init");
          this.dropdown = cc11001100_hook("this.dropdown", new s(e, this.options), "assign"), this.$dropdown = cc11001100_hook("this.$dropdown", this.dropdown.render(), "assign"), this.dropdown.position(this.$dropdown, i);
          var a = cc11001100_hook("a", this.options.get("resultsAdapter"), "var-init");
          this.results = cc11001100_hook("this.results", new a(e, this.options, this.dataAdapter), "assign"), this.$results = cc11001100_hook("this.$results", this.results.render(), "assign"), this.results.position(this.$results, this.$dropdown);
          var l = cc11001100_hook("l", this, "var-init");
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
            l.trigger("selection:update", {
              data: cc11001100_hook("data", e, "object-key-init")
            });
          }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this);
        };
        return u.Extend(d, u.Observable), d.prototype._generateId = cc11001100_hook("d.prototype._generateId", function (e) {
          return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, "assign"), d.prototype._placeContainer = cc11001100_hook("d.prototype._placeContainer", function (e) {
          e.insertAfter(this.$element);
          var t = cc11001100_hook("t", this._resolveWidth(this.$element, this.options.get("width")), "var-init");
          null != t && e.css("width", t);
        }, "assign"), d.prototype._resolveWidth = cc11001100_hook("d.prototype._resolveWidth", function (e, t) {
          var n = cc11001100_hook("n", /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i, "var-init");
          if ("resolve" == t) {
            var r = cc11001100_hook("r", this._resolveWidth(e, "style"), "var-init");
            return null != r ? r : this._resolveWidth(e, "element");
          }
          if ("element" == t) {
            var i = cc11001100_hook("i", e.outerWidth(!1), "var-init");
            return i <= 0 ? "auto" : i + "px";
          }
          if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
          var o = cc11001100_hook("o", e.attr("style"), "var-init");
          if ("string" != typeof o) return null;
          for (var s = cc11001100_hook("s", o.split(";"), "var-init"), a = cc11001100_hook("a", 0, "var-init"), l = cc11001100_hook("l", s.length, "var-init"); a < l; a += cc11001100_hook("a", 1, "assign")) {
            var c = cc11001100_hook("c", s[a].replace(/\s/g, "").match(n), "var-init");
            if (null !== c && 1 <= c.length) return c[1];
          }
          return null;
        }, "assign"), d.prototype._bindAdapters = cc11001100_hook("d.prototype._bindAdapters", function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, "assign"), d.prototype._registerDomEvents = cc11001100_hook("d.prototype._registerDomEvents", function () {
          var t = cc11001100_hook("t", this, "var-init");
          this.$element.on("change.select2", function () {
            t.dataAdapter.current(function (e) {
              t.trigger("selection:update", {
                data: cc11001100_hook("data", e, "object-key-init")
              });
            });
          }), this.$element.on("focus.select2", function (e) {
            t.trigger("focus", e);
          }), this._syncA = cc11001100_hook("this._syncA", u.bind(this._syncAttributes, this), "assign"), this._syncS = cc11001100_hook("this._syncS", u.bind(this._syncSubtree, this), "assign"), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
          var e = cc11001100_hook("e", window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, "var-init");
          null != e ? (this._observer = cc11001100_hook("this._observer", new e(function (e) {
            t._syncA(), t._syncS(null, e);
          }), "assign"), this._observer.observe(this.$element[0], {
            attributes: cc11001100_hook("attributes", !0, "object-key-init"),
            childList: cc11001100_hook("childList", !0, "object-key-init"),
            subtree: cc11001100_hook("subtree", !1, "object-key-init")
          })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
        }, "assign"), d.prototype._registerDataEvents = cc11001100_hook("d.prototype._registerDataEvents", function () {
          var n = cc11001100_hook("n", this, "var-init");
          this.dataAdapter.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, "assign"), d.prototype._registerSelectionEvents = cc11001100_hook("d.prototype._registerSelectionEvents", function () {
          var n = cc11001100_hook("n", this, "var-init"),
            r = cc11001100_hook("r", ["toggle", "focus"], "var-init");
          this.selection.on("toggle", function () {
            n.toggleDropdown();
          }), this.selection.on("focus", function (e) {
            n.focus(e);
          }), this.selection.on("*", function (e, t) {
            -1 === o.inArray(e, r) && n.trigger(e, t);
          });
        }, "assign"), d.prototype._registerDropdownEvents = cc11001100_hook("d.prototype._registerDropdownEvents", function () {
          var n = cc11001100_hook("n", this, "var-init");
          this.dropdown.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, "assign"), d.prototype._registerResultsEvents = cc11001100_hook("d.prototype._registerResultsEvents", function () {
          var n = cc11001100_hook("n", this, "var-init");
          this.results.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, "assign"), d.prototype._registerEvents = cc11001100_hook("d.prototype._registerEvents", function () {
          var n = cc11001100_hook("n", this, "var-init");
          this.on("open", function () {
            n.$container.addClass("select2-container--open");
          }), this.on("close", function () {
            n.$container.removeClass("select2-container--open");
          }), this.on("enable", function () {
            n.$container.removeClass("select2-container--disabled");
          }), this.on("disable", function () {
            n.$container.addClass("select2-container--disabled");
          }), this.on("blur", function () {
            n.$container.removeClass("select2-container--focus");
          }), this.on("query", function (t) {
            n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
              n.trigger("results:all", {
                data: cc11001100_hook("data", e, "object-key-init"),
                query: cc11001100_hook("query", t, "object-key-init")
              });
            });
          }), this.on("query:append", function (t) {
            this.dataAdapter.query(t, function (e) {
              n.trigger("results:append", {
                data: cc11001100_hook("data", e, "object-key-init"),
                query: cc11001100_hook("query", t, "object-key-init")
              });
            });
          }), this.on("keypress", function (e) {
            var t = cc11001100_hook("t", e.which, "var-init");
            n.isOpen() ? t === r.ESC || t === r.TAB || t === r.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === r.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === r.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === r.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === r.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === r.ENTER || t === r.SPACE || t === r.DOWN && e.altKey) && (n.open(), e.preventDefault());
          });
        }, "assign"), d.prototype._syncAttributes = cc11001100_hook("d.prototype._syncAttributes", function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, "assign"), d.prototype._isChangeMutation = cc11001100_hook("d.prototype._isChangeMutation", function (e, t) {
          var n = cc11001100_hook("n", !1, "var-init"),
            r = cc11001100_hook("r", this, "var-init");
          if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
            if (t) {
              if (t.addedNodes && 0 < t.addedNodes.length) for (var i = cc11001100_hook("i", 0, "var-init"); i < t.addedNodes.length; i++) {
                t.addedNodes[i].selected && (n = cc11001100_hook("n", !0, "assign"));
              } else t.removedNodes && 0 < t.removedNodes.length ? n = cc11001100_hook("n", !0, "assign") : o.isArray(t) && o.each(t, function (e, t) {
                if (r._isChangeMutation(e, t)) return !(n = cc11001100_hook("n", !0, "assign"));
              });
            } else n = cc11001100_hook("n", !0, "assign");
            return n;
          }
        }, "assign"), d.prototype._syncSubtree = cc11001100_hook("d.prototype._syncSubtree", function (e, t) {
          var n = cc11001100_hook("n", this._isChangeMutation(e, t), "var-init"),
            r = cc11001100_hook("r", this, "var-init");
          n && this.dataAdapter.current(function (e) {
            r.trigger("selection:update", {
              data: cc11001100_hook("data", e, "object-key-init")
            });
          });
        }, "assign"), d.prototype.trigger = cc11001100_hook("d.prototype.trigger", function (e, t) {
          var n = cc11001100_hook("n", d.__super__.trigger, "var-init"),
            r = cc11001100_hook("r", {
              open: cc11001100_hook("open", "opening", "object-key-init"),
              close: cc11001100_hook("close", "closing", "object-key-init"),
              select: cc11001100_hook("select", "selecting", "object-key-init"),
              unselect: cc11001100_hook("unselect", "unselecting", "object-key-init"),
              clear: cc11001100_hook("clear", "clearing", "object-key-init")
            }, "var-init");
          if (void 0 === t && (t = cc11001100_hook("t", {}, "assign")), e in r) {
            var i = cc11001100_hook("i", r[e], "var-init"),
              o = cc11001100_hook("o", {
                prevented: cc11001100_hook("prevented", !1, "object-key-init"),
                name: cc11001100_hook("name", e, "object-key-init"),
                args: cc11001100_hook("args", t, "object-key-init")
              }, "var-init");
            if (n.call(this, i, o), o.prevented) return void (t.prevented = cc11001100_hook("t.prevented", !0, "assign"));
          }
          n.call(this, e, t);
        }, "assign"), d.prototype.toggleDropdown = cc11001100_hook("d.prototype.toggleDropdown", function () {
          this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, "assign"), d.prototype.open = cc11001100_hook("d.prototype.open", function () {
          this.isOpen() || this.isDisabled() || this.trigger("query", {});
        }, "assign"), d.prototype.close = cc11001100_hook("d.prototype.close", function (e) {
          this.isOpen() && this.trigger("close", {
            originalEvent: cc11001100_hook("originalEvent", e, "object-key-init")
          });
        }, "assign"), d.prototype.isEnabled = cc11001100_hook("d.prototype.isEnabled", function () {
          return !this.isDisabled();
        }, "assign"), d.prototype.isDisabled = cc11001100_hook("d.prototype.isDisabled", function () {
          return this.options.get("disabled");
        }, "assign"), d.prototype.isOpen = cc11001100_hook("d.prototype.isOpen", function () {
          return this.$container.hasClass("select2-container--open");
        }, "assign"), d.prototype.hasFocus = cc11001100_hook("d.prototype.hasFocus", function () {
          return this.$container.hasClass("select2-container--focus");
        }, "assign"), d.prototype.focus = cc11001100_hook("d.prototype.focus", function (e) {
          this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
        }, "assign"), d.prototype.enable = cc11001100_hook("d.prototype.enable", function (e) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = cc11001100_hook("e", [!0], "assign"));
          var t = cc11001100_hook("t", !e[0], "var-init");
          this.$element.prop("disabled", t);
        }, "assign"), d.prototype.data = cc11001100_hook("d.prototype.data", function () {
          this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var t = cc11001100_hook("t", [], "var-init");
          return this.dataAdapter.current(function (e) {
            t = cc11001100_hook("t", e, "assign");
          }), t;
        }, "assign"), d.prototype.val = cc11001100_hook("d.prototype.val", function (e) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
          var t = cc11001100_hook("t", e[0], "var-init");
          o.isArray(t) && (t = cc11001100_hook("t", o.map(t, function (e) {
            return e.toString();
          }), "assign")), this.$element.val(t).trigger("input").trigger("change");
        }, "assign"), d.prototype.destroy = cc11001100_hook("d.prototype.destroy", function () {
          this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = cc11001100_hook("this._observer", null, "assign")) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = cc11001100_hook("this._syncA", null, "assign"), this._syncS = cc11001100_hook("this._syncS", null, "assign"), this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = cc11001100_hook("this.dataAdapter", null, "assign"), this.selection = cc11001100_hook("this.selection", null, "assign"), this.dropdown = cc11001100_hook("this.dropdown", null, "assign"), this.results = cc11001100_hook("this.results", null, "assign");
        }, "assign"), d.prototype.render = cc11001100_hook("d.prototype.render", function () {
          var e = cc11001100_hook("e", o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'), "var-init");
          return e.attr("dir", this.options.get("dir")), this.$container = cc11001100_hook("this.$container", e, "assign"), this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e;
        }, "assign"), d;
      }), e.define("jquery-mousewheel", ["jquery"], function (e) {
        return e;
      }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (i, e, o, t, s) {
        if (null == i.fn.select2) {
          var a = cc11001100_hook("a", ["open", "close", "destroy"], "var-init");
          i.fn.select2 = cc11001100_hook("i.fn.select2", function (t) {
            if ("object" == typeof (t = cc11001100_hook("t", t || {}, "assign"))) return this.each(function () {
              var e = cc11001100_hook("e", i.extend(!0, {}, t), "var-init");
              new o(i(this), e);
            }), this;
            if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
            var n,
              r = cc11001100_hook("r", Array.prototype.slice.call(arguments, 1), "var-init");
            return this.each(function () {
              var e = cc11001100_hook("e", s.GetData(this, "select2"), "var-init");
              null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = cc11001100_hook("n", e[t].apply(e, r), "assign");
            }), -1 < i.inArray(t, a) ? this : n;
          }, "assign");
        }
        return null == i.fn.select2.defaults && (i.fn.select2.defaults = cc11001100_hook("i.fn.select2.defaults", t, "assign")), o;
      }), {
        define: cc11001100_hook("define", e.define, "object-key-init"),
        require: cc11001100_hook("require", e.require, "object-key-init")
      };
    }(), "var-init"),
    t = cc11001100_hook("t", e.require("jquery.select2"), "var-init");
  return u.fn.select2.amd = cc11001100_hook("u.fn.select2.amd", e, "assign"), t;
});