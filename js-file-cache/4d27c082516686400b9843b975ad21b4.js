!function (e) {
  var t = cc11001100_hook("t", {}, "var-init");
  function r(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (t[n]) return t[n].exports;
    var o = cc11001100_hook("o", t[n] = cc11001100_hook("t[n]", {
      i: cc11001100_hook("i", n, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return e[n].call(o.exports, o, o.exports, r), o.l = cc11001100_hook("o.l", !0, "assign"), o.exports;
  }
  r.m = cc11001100_hook("r.m", e, "assign"), r.c = cc11001100_hook("r.c", t, "assign"), r.d = cc11001100_hook("r.d", function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", n, "object-key-init")
    });
  }, "assign"), r.r = cc11001100_hook("r.r", function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(e, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), r.t = cc11001100_hook("r.t", function (e, t) {
    if (1 & t && (e = cc11001100_hook("e", r(e), "assign")), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = cc11001100_hook("n", Object.create(null), "var-init");
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", e, "object-key-init")
    }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));
    return n;
  }, "assign"), r.n = cc11001100_hook("r.n", function (e) {
    var t = cc11001100_hook("t", e && e.__esModule ? function t() {
      return e.default;
    } : function t() {
      return e;
    }, "var-init");
    return r.d(t, "a", t), t;
  }, "assign"), r.o = cc11001100_hook("r.o", function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, "assign"), r.p = cc11001100_hook("r.p", "/", "assign"), r(r.s = cc11001100_hook("r.s", 22, "assign"));
}([function (e, t) {
  e.exports = cc11001100_hook("e.exports", window.biu ? biu.require("react") : window.React, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(26)(), "var-init");
  e.exports = cc11001100_hook("e.exports", n, "assign");
  try {
    regeneratorRuntime = cc11001100_hook("regeneratorRuntime", n, "assign");
  } catch (e) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = cc11001100_hook("globalThis.regeneratorRuntime", n, "assign") : Function("r", "regeneratorRuntime = r")(n);
  }
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(18), "var-init");
  function o(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return (t = cc11001100_hook("t", n(t), "assign")) in e ? Object.defineProperty(e, t, {
      value: cc11001100_hook("value", r, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e, t, r, n, o, a, c) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      var i = cc11001100_hook("i", e[a](c), "var-init"),
        u = cc11001100_hook("u", i.value, "var-init");
    } catch (e) {
      return void r(e);
    }
    i.done ? t(u) : Promise.resolve(u).then(n, o);
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", arguments, "var-init");
      return new Promise(function (o, a) {
        var c = cc11001100_hook("c", e.apply(t, n), "var-init");
        function i(e) {
          cc11001100_hook("e", e, "function-parameter");
          r(c, o, a, i, u, "next", e);
        }
        function u(e) {
          cc11001100_hook("e", e, "function-parameter");
          r(c, o, a, i, u, "throw", e);
        }
        i(void 0);
      });
    };
  }
  e.exports = cc11001100_hook("e.exports", n, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(28), "var-init"),
    o = cc11001100_hook("o", r(29), "var-init"),
    a = cc11001100_hook("a", r(17), "var-init"),
    c = cc11001100_hook("c", r(30), "var-init");
  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return n(e) || o(e, t) || a(e, t) || c();
  }
  e.exports = cc11001100_hook("e.exports", i, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(t) {
    cc11001100_hook("t", t, "function-parameter");
    return e.exports = cc11001100_hook("e.exports", r = cc11001100_hook("r", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, "assign"), "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign"), r(t);
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(23), "var-init"),
    o = cc11001100_hook("o", r(24), "var-init"),
    a = cc11001100_hook("a", r(17), "var-init"),
    c = cc11001100_hook("c", r(25), "var-init");
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    return n(e) || o(e) || a(e) || c();
  }
  e.exports = cc11001100_hook("e.exports", i, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(18), "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
      var o = cc11001100_hook("o", t[r], "var-init");
      o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(e, n(o.key), o);
    }
  }
  function a(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, "prototype", {
      writable: cc11001100_hook("writable", !1, "object-key-init")
    }), e;
  }
  e.exports = cc11001100_hook("e.exports", a, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(t) {
    cc11001100_hook("t", t, "function-parameter");
    return e.exports = cc11001100_hook("e.exports", r = cc11001100_hook("r", Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, "assign"), "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign"), r(t);
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(5).default, "var-init"),
    o = cc11001100_hook("o", r(31), "var-init");
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t && ("object" == n(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return o(e);
  }
  e.exports = cc11001100_hook("e.exports", a, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(33), "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = cc11001100_hook("e.prototype", Object.create(t && t.prototype, {
      constructor: {
        value: cc11001100_hook("value", e, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }
    }), "assign"), Object.defineProperty(e, "prototype", {
      writable: cc11001100_hook("writable", !1, "object-key-init")
    }), t && n(e, t);
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(34), "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (null == e) return {};
    var r,
      o,
      a = cc11001100_hook("a", n(e, t), "var-init");
    if (Object.getOwnPropertySymbols) {
      var c = cc11001100_hook("c", Object.getOwnPropertySymbols(e), "var-init");
      for (o = cc11001100_hook("o", 0, "assign"); o < c.length; o++) r = cc11001100_hook("r", c[o], "assign"), t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (a[r] = cc11001100_hook("a[r]", e[r], "assign"));
    }
    return a;
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", window.biu ? biu.require("react-dom") : window.ReactDOM, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", window.https, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", window.http, "assign");
}, function (e, t) {
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));
    for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");
    return n;
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(16), "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e) {
      if ("string" == typeof e) return n(e, t);
      var r = cc11001100_hook("r", {}.toString.call(e).slice(8, -1), "var-init");
      return "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign")), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
    }
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(5).default, "var-init"),
    o = cc11001100_hook("o", r(27), "var-init");
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", o(e, "string"), "var-init");
    return "symbol" == n(t) ? t : t + "";
  }
  e.exports = cc11001100_hook("e.exports", a, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(32), "var-init");
  function o() {
    return e.exports = cc11001100_hook("e.exports", o = cc11001100_hook("o", "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var o = cc11001100_hook("o", n(e, t), "var-init");
      if (o) {
        var a = cc11001100_hook("a", Object.getOwnPropertyDescriptor(o, t), "var-init");
        return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
      }
    }, "assign"), "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign"), o.apply(null, arguments);
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  e.exports = cc11001100_hook("e.exports", o, "assign"), "undefined" != typeof window && (window.pathToRegex = cc11001100_hook("window.pathToRegex", o, "assign"));
  const r = cc11001100_hook("r", /([$.+*?=!:[\]{}(|)/\\])/g, "var-init");
  function n(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return void 0 !== e ? e : t;
  }
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return this.init(e, t), this;
  }
  o.prototype.init = cc11001100_hook("o.prototype.init", function (e = "/", t = {}) {
    this.options = cc11001100_hook("this.options", {
      case: cc11001100_hook("case", "boolean" != typeof t.case || t.case, "object-key-init"),
      separators: cc11001100_hook("separators", "string" == typeof t.separators ? t.separators : "/", "object-key-init"),
      fromStart: cc11001100_hook("fromStart", "boolean" != typeof t.fromStart || t.fromStart, "object-key-init"),
      toEnd: cc11001100_hook("toEnd", "boolean" != typeof t.toEnd || t.toEnd, "object-key-init")
    }, "assign"), this.options.separator = cc11001100_hook("this.options.separator", "[" + this.escape(this.options.separators) + "]", "assign"), e instanceof RegExp ? this.restructureRegExp(e) : "string" == typeof e && this.restructurePath(e);
  }, "assign"), o.prototype.restructureRegExp = cc11001100_hook("o.prototype.restructureRegExp", function (e) {
    e = cc11001100_hook("e", n(e, /.*/), "assign"), this.keys = cc11001100_hook("this.keys", [], "assign"), this.path = cc11001100_hook("this.path", void 0, "assign"), this.regstr = cc11001100_hook("this.regstr", "" + e, "assign"), this.regstr = cc11001100_hook("this.regstr", this.regstr.substr(1, this.regstr.length - 2), "assign"), this.regexp = cc11001100_hook("this.regexp", new RegExp(this.regstr, this.options.case ? "" : "i"), "assign");
  }, "assign"), o.prototype.restructurePath = cc11001100_hook("o.prototype.restructurePath", function (e) {
    e = cc11001100_hook("e", n(e, "/"), "assign"), this.keys = cc11001100_hook("this.keys", [], "assign"), this.path = cc11001100_hook("this.path", e, "assign"), this.regstr = cc11001100_hook("this.regstr", "", "assign");
    const t = cc11001100_hook("t", this.options.separator, "var-init"),
      r = cc11001100_hook("r", "[^" + this.escape(this.options.separators) + "]", "var-init");
    let o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", 0, "var-init");
    if ((e = cc11001100_hook("e", e.replace(new RegExp("^" + t + "*(.*?)" + t + "*$"), "$1"), "assign")).replace(/:([a-z]\w*)(\((.*?)\))?([\?\*\+])?/gi, (n, c, i, u, s, p, f) => {
      a++;
      const l = cc11001100_hook("l", "*" === s || "+" === s, "var-init"),
        d = cc11001100_hook("d", !!/^(\[[^\[\]]+\]|\([^\(\)]+\)|\.|\\.)[\+\*]$/.test(u), "var-init");
      let h = cc11001100_hook("h", "*" !== s && "?" !== s, "var-init");
      !s && u && /^(\[[^\[\]]+\]|\([^\(\)]+\)|\.|\\.)[\*\?]?$/.test(u) && (h = cc11001100_hook("h", !1, "assign"));
      const y = cc11001100_hook("y", s || "", "var-init"),
        v = cc11001100_hook("v", !p || this.separator(e.charAt(p - 1)), "var-init"),
        m = cc11001100_hook("m", p + n.length >= e.length || this.separator(e.charAt(p + n.length)), "var-init"),
        b = cc11001100_hook("b", v && m, "var-init");
      if (p > o) {
        const t = cc11001100_hook("t", e.substring(o, p), "var-init"),
          r = cc11001100_hook("r", this.escape(t), "var-init");
        this.regstr += cc11001100_hook("this.regstr", r, "assign");
      }
      b && p && (l && h || u && !d && (this.regstr += cc11001100_hook("this.regstr", "?", "assign")));
      const g = cc11001100_hook("g", u || r + "+", "var-init"),
        w = cc11001100_hook("w", l ? b ? d ? "((?:" + t + "?" + g + ")" + y + ")" : "((?:" + t + g + ")" + y + ")" : "((?:" + r + "*" + g + ")" + y + ")" : b && d ? "(" + g + "?)" + y : "(" + g + ")" + y, "var-init");
      this.regstr += cc11001100_hook("this.regstr", w, "assign");
      const O = cc11001100_hook("O", {
        key: cc11001100_hook("key", c, "object-key-init"),
        multiple: cc11001100_hook("multiple", l, "object-key-init"),
        required: cc11001100_hook("required", h, "object-key-init"),
        index: cc11001100_hook("index", a, "object-key-init"),
        pattern: cc11001100_hook("pattern", g, "object-key-init")
      }, "var-init");
      return l && (O.regexp = cc11001100_hook("O.regexp", new RegExp(g, this.options.case ? "g" : "gi"), "assign")), this.keys.push(O), o = cc11001100_hook("o", p + n.length, "assign"), n;
    }), o < e.length - 1) {
      const t = cc11001100_hook("t", e.substring(o), "var-init"),
        r = cc11001100_hook("r", this.escape(t), "var-init");
      this.regstr += cc11001100_hook("this.regstr", r, "assign");
    }
    this.regexp = cc11001100_hook("this.regexp", new RegExp((this.options.fromStart ? "^" : "") + t + "?" + this.regstr + (this.options.toEnd ? t + "?$" : "(" + t + "|" + t + "?$)"), this.options.case ? "" : "i"), "assign");
  }, "assign"), o.prototype.escape = cc11001100_hook("o.prototype.escape", function (e) {
    return e.replace(r, e => "\\" + e);
  }, "assign"), o.prototype.separator = cc11001100_hook("o.prototype.separator", function (e) {
    return !!(this.options.separators.indexOf(e) + 1);
  }, "assign"), o.prototype.match = cc11001100_hook("o.prototype.match", function (e) {
    if ("string" != typeof e) return;
    const t = cc11001100_hook("t", this.options.separator, "var-init"),
      r = cc11001100_hook("r", this.options.separators[0], "var-init"),
      n = cc11001100_hook("n", (e = cc11001100_hook("e", e.replace(new RegExp("^" + t + "*(.*?)" + t + "*$"), r + "$1" + r), "assign")).match(this.regexp), "var-init");
    if (!n) return;
    const o = cc11001100_hook("o", {}, "var-init");
    return this.keys.forEach(e => {
      let r = cc11001100_hook("r", !1, "var-init");
      o[e.key] && (r = cc11001100_hook("r", !0, "assign")), o[e.key] && !Array.isArray(o[e.key]) && (r = cc11001100_hook("r", !0, "assign"), o[e.key] = cc11001100_hook("o[e.key]", [o[e.key]], "assign")), e.multiple && !o[e.key] && (r = cc11001100_hook("r", !0, "assign"), o[e.key] = cc11001100_hook("o[e.key]", [], "assign"));
      let a = cc11001100_hook("a", n[e.index] ? n[e.index] : void 0, "var-init");
      r || e.multiple ? r && !e.multiple && n[e.index] ? o[e.key].push(a) : n[e.index] && n[e.index].replace(e.regexp, r => {
        r && o[e.key].push(r.replace(new RegExp(t + "*$"), ""));
      }) : o[e.key] = cc11001100_hook("o[e.key]", a, "assign");
    }), o;
  }, "assign");
},, function (e, t, r) {
  e.exports = cc11001100_hook("e.exports", r(35), "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(16), "var-init");
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (Array.isArray(e)) return n(e);
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(5).default, "var-init");
  function o() {
    "use strict";

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    e.exports = cc11001100_hook("e.exports", o = cc11001100_hook("o", function e() {
      return r;
    }, "assign"), "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
    var t,
      r = cc11001100_hook("r", {}, "var-init"),
      a = cc11001100_hook("a", Object.prototype, "var-init"),
      c = cc11001100_hook("c", a.hasOwnProperty, "var-init"),
      i = cc11001100_hook("i", Object.defineProperty || function (e, t, r) {
        e[t] = cc11001100_hook("e[t]", r.value, "assign");
      }, "var-init"),
      u = cc11001100_hook("u", "function" == typeof Symbol ? Symbol : {}, "var-init"),
      s = cc11001100_hook("s", u.iterator || "@@iterator", "var-init"),
      p = cc11001100_hook("p", u.asyncIterator || "@@asyncIterator", "var-init"),
      f = cc11001100_hook("f", u.toStringTag || "@@toStringTag", "var-init");
    function l(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }), e[t];
    }
    try {
      l({}, "");
    } catch (t) {
      l = cc11001100_hook("l", function e(t, r, n) {
        return t[r] = cc11001100_hook("t[r]", n, "assign");
      }, "assign");
    }
    function d(e, t, r, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var o = cc11001100_hook("o", t && t.prototype instanceof w ? t : w, "var-init"),
        a = cc11001100_hook("a", Object.create(o.prototype), "var-init"),
        c = cc11001100_hook("c", new I(n || []), "var-init");
      return i(a, "_invoke", {
        value: cc11001100_hook("value", C(e, r, c), "object-key-init")
      }), a;
    }
    function h(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      try {
        return {
          type: cc11001100_hook("type", "normal", "object-key-init"),
          arg: cc11001100_hook("arg", e.call(t, r), "object-key-init")
        };
      } catch (e) {
        return {
          type: cc11001100_hook("type", "throw", "object-key-init"),
          arg: cc11001100_hook("arg", e, "object-key-init")
        };
      }
    }
    r.wrap = cc11001100_hook("r.wrap", d, "assign");
    var y = cc11001100_hook("y", "suspendedStart", "var-init"),
      v = cc11001100_hook("v", "suspendedYield", "var-init"),
      m = cc11001100_hook("m", "executing", "var-init"),
      b = cc11001100_hook("b", "completed", "var-init"),
      g = cc11001100_hook("g", {}, "var-init");
    function w() {}
    function O() {}
    function j() {}
    var x = cc11001100_hook("x", {}, "var-init");
    l(x, s, function () {
      return this;
    });
    var E = cc11001100_hook("E", Object.getPrototypeOf, "var-init"),
      P = cc11001100_hook("P", E && E(E(N([]))), "var-init");
    P && P !== a && c.call(P, s) && (x = cc11001100_hook("x", P, "assign"));
    var _ = cc11001100_hook("_", j.prototype = cc11001100_hook("j.prototype", w.prototype = cc11001100_hook("w.prototype", Object.create(x), "assign"), "assign"), "var-init");
    function k(e) {
      cc11001100_hook("e", e, "function-parameter");
      ["next", "throw", "return"].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function S(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      function r(o, a, i, u) {
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("u", u, "function-parameter");
        var s = cc11001100_hook("s", h(e[o], e, a), "var-init");
        if ("throw" !== s.type) {
          var p = cc11001100_hook("p", s.arg, "var-init"),
            f = cc11001100_hook("f", p.value, "var-init");
          return f && "object" == n(f) && c.call(f, "__await") ? t.resolve(f.__await).then(function (e) {
            r("next", e, i, u);
          }, function (e) {
            r("throw", e, i, u);
          }) : t.resolve(f).then(function (e) {
            p.value = cc11001100_hook("p.value", e, "assign"), i(p);
          }, function (e) {
            return r("throw", e, i, u);
          });
        }
        u(s.arg);
      }
      var o;
      i(this, "_invoke", {
        value: function e(n, a) {
          function c() {
            return new t(function (e, t) {
              r(n, a, e, t);
            });
          }
          return o = cc11001100_hook("o", o ? o.then(c, c) : c(), "assign");
        }
      });
    }
    function C(e, r, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var o = cc11001100_hook("o", y, "var-init");
      return function (a, c) {
        if (o === m) throw Error("Generator is already running");
        if (o === b) {
          if ("throw" === a) throw c;
          return {
            value: cc11001100_hook("value", t, "object-key-init"),
            done: cc11001100_hook("done", !0, "object-key-init")
          };
        }
        for (n.method = cc11001100_hook("n.method", a, "assign"), n.arg = cc11001100_hook("n.arg", c, "assign");;) {
          var i = cc11001100_hook("i", n.delegate, "var-init");
          if (i) {
            var u = cc11001100_hook("u", T(i, n), "var-init");
            if (u) {
              if (u === g) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = cc11001100_hook("n.sent", n._sent = cc11001100_hook("n._sent", n.arg, "assign"), "assign");else if ("throw" === n.method) {
            if (o === y) throw o = cc11001100_hook("o", b, "assign"), n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = cc11001100_hook("o", m, "assign");
          var s = cc11001100_hook("s", h(e, r, n), "var-init");
          if ("normal" === s.type) {
            if (o = cc11001100_hook("o", n.done ? b : v, "assign"), s.arg === g) continue;
            return {
              value: cc11001100_hook("value", s.arg, "object-key-init"),
              done: cc11001100_hook("done", n.done, "object-key-init")
            };
          }
          "throw" === s.type && (o = cc11001100_hook("o", b, "assign"), n.method = cc11001100_hook("n.method", "throw", "assign"), n.arg = cc11001100_hook("n.arg", s.arg, "assign"));
        }
      };
    }
    function T(e, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var n = cc11001100_hook("n", r.method, "var-init"),
        o = cc11001100_hook("o", e.iterator[n], "var-init");
      if (o === t) return r.delegate = cc11001100_hook("r.delegate", null, "assign"), "throw" === n && e.iterator.return && (r.method = cc11001100_hook("r.method", "return", "assign"), r.arg = cc11001100_hook("r.arg", t, "assign"), T(e, r), "throw" === r.method) || "return" !== n && (r.method = cc11001100_hook("r.method", "throw", "assign"), r.arg = cc11001100_hook("r.arg", new TypeError("The iterator does not provide a '" + n + "' method"), "assign")), g;
      var a = cc11001100_hook("a", h(o, e.iterator, r.arg), "var-init");
      if ("throw" === a.type) return r.method = cc11001100_hook("r.method", "throw", "assign"), r.arg = cc11001100_hook("r.arg", a.arg, "assign"), r.delegate = cc11001100_hook("r.delegate", null, "assign"), g;
      var c = cc11001100_hook("c", a.arg, "var-init");
      return c ? c.done ? (r[e.resultName] = cc11001100_hook("r[e.resultName]", c.value, "assign"), r.next = cc11001100_hook("r.next", e.nextLoc, "assign"), "return" !== r.method && (r.method = cc11001100_hook("r.method", "next", "assign"), r.arg = cc11001100_hook("r.arg", t, "assign")), r.delegate = cc11001100_hook("r.delegate", null, "assign"), g) : c : (r.method = cc11001100_hook("r.method", "throw", "assign"), r.arg = cc11001100_hook("r.arg", new TypeError("iterator result is not an object"), "assign"), r.delegate = cc11001100_hook("r.delegate", null, "assign"), g);
    }
    function A(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", {
        tryLoc: cc11001100_hook("tryLoc", e[0], "object-key-init")
      }, "var-init");
      1 in e && (t.catchLoc = cc11001100_hook("t.catchLoc", e[1], "assign")), 2 in e && (t.finallyLoc = cc11001100_hook("t.finallyLoc", e[2], "assign"), t.afterLoc = cc11001100_hook("t.afterLoc", e[3], "assign")), this.tryEntries.push(t);
    }
    function D(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.completion || {}, "var-init");
      t.type = cc11001100_hook("t.type", "normal", "assign"), delete t.arg, e.completion = cc11001100_hook("e.completion", t, "assign");
    }
    function I(e) {
      cc11001100_hook("e", e, "function-parameter");
      this.tryEntries = cc11001100_hook("this.tryEntries", [{
        tryLoc: cc11001100_hook("tryLoc", "root", "object-key-init")
      }], "assign"), e.forEach(A, this), this.reset(!0);
    }
    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (e || "" === e) {
        var r = cc11001100_hook("r", e[s], "var-init");
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = cc11001100_hook("o", -1, "var-init"),
            a = function r() {
              for (; ++o < e.length;) if (c.call(e, o)) return r.value = cc11001100_hook("r.value", e[o], "assign"), r.done = cc11001100_hook("r.done", !1, "assign"), r;
              return r.value = cc11001100_hook("r.value", t, "assign"), r.done = cc11001100_hook("r.done", !0, "assign"), r;
            };
          return a.next = cc11001100_hook("a.next", a, "assign");
        }
      }
      throw new TypeError(n(e) + " is not iterable");
    }
    return O.prototype = cc11001100_hook("O.prototype", j, "assign"), i(_, "constructor", {
      value: cc11001100_hook("value", j, "object-key-init"),
      configurable: cc11001100_hook("configurable", !0, "object-key-init")
    }), i(j, "constructor", {
      value: cc11001100_hook("value", O, "object-key-init"),
      configurable: cc11001100_hook("configurable", !0, "object-key-init")
    }), O.displayName = cc11001100_hook("O.displayName", l(j, f, "GeneratorFunction"), "assign"), r.isGeneratorFunction = cc11001100_hook("r.isGeneratorFunction", function (e) {
      var t = cc11001100_hook("t", "function" == typeof e && e.constructor, "var-init");
      return !!t && (t === O || "GeneratorFunction" === (t.displayName || t.name));
    }, "assign"), r.mark = cc11001100_hook("r.mark", function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, j) : (e.__proto__ = cc11001100_hook("e.__proto__", j, "assign"), l(e, f, "GeneratorFunction")), e.prototype = cc11001100_hook("e.prototype", Object.create(_), "assign"), e;
    }, "assign"), r.awrap = cc11001100_hook("r.awrap", function (e) {
      return {
        __await: cc11001100_hook("__await", e, "object-key-init")
      };
    }, "assign"), k(S.prototype), l(S.prototype, p, function () {
      return this;
    }), r.AsyncIterator = cc11001100_hook("r.AsyncIterator", S, "assign"), r.async = cc11001100_hook("r.async", function (e, t, n, o, a) {
      void 0 === a && (a = cc11001100_hook("a", Promise, "assign"));
      var c = cc11001100_hook("c", new S(d(e, t, n, o), a), "var-init");
      return r.isGeneratorFunction(t) ? c : c.next().then(function (e) {
        return e.done ? e.value : c.next();
      });
    }, "assign"), k(_), l(_, f, "Generator"), l(_, s, function () {
      return this;
    }), l(_, "toString", function () {
      return "[object Generator]";
    }), r.keys = cc11001100_hook("r.keys", function (e) {
      var t = cc11001100_hook("t", Object(e), "var-init"),
        r = cc11001100_hook("r", [], "var-init");
      for (var n in t) r.push(n);
      return r.reverse(), function e() {
        for (; r.length;) {
          var n = cc11001100_hook("n", r.pop(), "var-init");
          if (n in t) return e.value = cc11001100_hook("e.value", n, "assign"), e.done = cc11001100_hook("e.done", !1, "assign"), e;
        }
        return e.done = cc11001100_hook("e.done", !0, "assign"), e;
      };
    }, "assign"), r.values = cc11001100_hook("r.values", N, "assign"), I.prototype = cc11001100_hook("I.prototype", {
      constructor: cc11001100_hook("constructor", I, "object-key-init"),
      reset: function e(r) {
        if (this.prev = cc11001100_hook("this.prev", 0, "assign"), this.next = cc11001100_hook("this.next", 0, "assign"), this.sent = cc11001100_hook("this.sent", this._sent = cc11001100_hook("this._sent", t, "assign"), "assign"), this.done = cc11001100_hook("this.done", !1, "assign"), this.delegate = cc11001100_hook("this.delegate", null, "assign"), this.method = cc11001100_hook("this.method", "next", "assign"), this.arg = cc11001100_hook("this.arg", t, "assign"), this.tryEntries.forEach(D), !r) for (var n in this) "t" === n.charAt(0) && c.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = cc11001100_hook("this[n]", t, "assign"));
      },
      stop: function e() {
        this.done = cc11001100_hook("this.done", !0, "assign");
        var t = cc11001100_hook("t", this.tryEntries[0].completion, "var-init");
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function e(r) {
        if (this.done) throw r;
        var n = cc11001100_hook("n", this, "var-init");
        function o(e, o) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          return u.type = cc11001100_hook("u.type", "throw", "assign"), u.arg = cc11001100_hook("u.arg", r, "assign"), n.next = cc11001100_hook("n.next", e, "assign"), o && (n.method = cc11001100_hook("n.method", "next", "assign"), n.arg = cc11001100_hook("n.arg", t, "assign")), !!o;
        }
        for (var a = cc11001100_hook("a", this.tryEntries.length - 1, "var-init"); a >= 0; --a) {
          var i = cc11001100_hook("i", this.tryEntries[a], "var-init"),
            u = cc11001100_hook("u", i.completion, "var-init");
          if ("root" === i.tryLoc) return o("end");
          if (i.tryLoc <= this.prev) {
            var s = cc11001100_hook("s", c.call(i, "catchLoc"), "var-init"),
              p = cc11001100_hook("p", c.call(i, "finallyLoc"), "var-init");
            if (s && p) {
              if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return o(i.finallyLoc);
            } else if (s) {
              if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
            } else {
              if (!p) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return o(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function e(t, r) {
        for (var n = cc11001100_hook("n", this.tryEntries.length - 1, "var-init"); n >= 0; --n) {
          var o = cc11001100_hook("o", this.tryEntries[n], "var-init");
          if (o.tryLoc <= this.prev && c.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var a = cc11001100_hook("a", o, "var-init");
            break;
          }
        }
        a && ("break" === t || "continue" === t) && a.tryLoc <= r && r <= a.finallyLoc && (a = cc11001100_hook("a", null, "assign"));
        var i = cc11001100_hook("i", a ? a.completion : {}, "var-init");
        return i.type = cc11001100_hook("i.type", t, "assign"), i.arg = cc11001100_hook("i.arg", r, "assign"), a ? (this.method = cc11001100_hook("this.method", "next", "assign"), this.next = cc11001100_hook("this.next", a.finallyLoc, "assign"), g) : this.complete(i);
      },
      complete: function e(t, r) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = cc11001100_hook("this.next", t.arg, "assign") : "return" === t.type ? (this.rval = cc11001100_hook("this.rval", this.arg = cc11001100_hook("this.arg", t.arg, "assign"), "assign"), this.method = cc11001100_hook("this.method", "return", "assign"), this.next = cc11001100_hook("this.next", "end", "assign")) : "normal" === t.type && r && (this.next = cc11001100_hook("this.next", r, "assign")), g;
      },
      finish: function e(t) {
        for (var r = cc11001100_hook("r", this.tryEntries.length - 1, "var-init"); r >= 0; --r) {
          var n = cc11001100_hook("n", this.tryEntries[r], "var-init");
          if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), D(n), g;
        }
      },
      catch: function e(t) {
        for (var r = cc11001100_hook("r", this.tryEntries.length - 1, "var-init"); r >= 0; --r) {
          var n = cc11001100_hook("n", this.tryEntries[r], "var-init");
          if (n.tryLoc === t) {
            var o = cc11001100_hook("o", n.completion, "var-init");
            if ("throw" === o.type) {
              var a = cc11001100_hook("a", o.arg, "var-init");
              D(n);
            }
            return a;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function e(r, n, o) {
        return this.delegate = cc11001100_hook("this.delegate", {
          iterator: cc11001100_hook("iterator", N(r), "object-key-init"),
          resultName: cc11001100_hook("resultName", n, "object-key-init"),
          nextLoc: cc11001100_hook("nextLoc", o, "object-key-init")
        }, "assign"), "next" === this.method && (this.arg = cc11001100_hook("this.arg", t, "assign")), g;
      }
    }, "assign"), r;
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(5).default, "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if ("object" != n(e) || !e) return e;
    var r = cc11001100_hook("r", e[Symbol.toPrimitive], "var-init");
    if (void 0 !== r) {
      var o = cc11001100_hook("o", r.call(e, t || "default"), "var-init");
      if ("object" != n(o)) return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (Array.isArray(e)) return e;
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"], "var-init");
    if (null != r) {
      var n,
        o,
        a,
        c,
        i = cc11001100_hook("i", [], "var-init"),
        u = cc11001100_hook("u", !0, "var-init"),
        s = cc11001100_hook("s", !1, "var-init");
      try {
        if (a = cc11001100_hook("a", (r = cc11001100_hook("r", r.call(e), "assign")).next, "assign"), 0 === t) {
          if (Object(r) !== r) return;
          u = cc11001100_hook("u", !1, "assign");
        } else for (; !(u = cc11001100_hook("u", (n = cc11001100_hook("n", a.call(r), "assign")).done, "assign")) && (i.push(n.value), i.length !== t); u = cc11001100_hook("u", !0, "assign"));
      } catch (e) {
        s = cc11001100_hook("s", !0, "assign"), o = cc11001100_hook("o", e, "assign");
      } finally {
        try {
          if (!u && null != r.return && (c = cc11001100_hook("c", r.return(), "assign"), Object(c) !== c)) return;
        } finally {
          if (s) throw o;
        }
      }
      return i;
    }
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  var n = cc11001100_hook("n", r(9), "var-init");
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (; !{}.hasOwnProperty.call(e, t) && null !== (e = cc11001100_hook("e", n(e), "assign")););
    return e;
  }
  e.exports = cc11001100_hook("e.exports", o, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(t, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return e.exports = cc11001100_hook("e.exports", r = cc11001100_hook("r", Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = cc11001100_hook("e.__proto__", t, "assign"), e;
    }, "assign"), "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign"), r(t, n);
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t) {
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (null == e) return {};
    var r = cc11001100_hook("r", {}, "var-init");
    for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
      if (t.includes(n)) continue;
      r[n] = cc11001100_hook("r[n]", e[n], "assign");
    }
    return r;
  }
  e.exports = cc11001100_hook("e.exports", r, "assign"), e.exports.__esModule = cc11001100_hook("e.exports.__esModule", !0, "assign"), e.exports.default = cc11001100_hook("e.exports.default", e.exports, "assign");
}, function (e, t, r) {
  "use strict";

  r.r(t);
  var n = cc11001100_hook("n", r(3), "var-init"),
    o = cc11001100_hook("o", r.n(n), "var-init"),
    a = cc11001100_hook("a", r(6), "var-init"),
    c = cc11001100_hook("c", r.n(a), "var-init"),
    i = cc11001100_hook("i", r(1), "var-init"),
    u = cc11001100_hook("u", r.n(i), "var-init"),
    s = cc11001100_hook("s", r(13), "var-init"),
    p = cc11001100_hook("p", r.n(s), "var-init"),
    f = cc11001100_hook("f", r(0), "var-init"),
    l = cc11001100_hook("l", r.n(f), "var-init"),
    d = cc11001100_hook("d", r(2), "var-init"),
    h = cc11001100_hook("h", r.n(d), "var-init"),
    y = cc11001100_hook("y", r(5), "var-init"),
    v = cc11001100_hook("v", r.n(y), "var-init");
  function m(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var g,
    w = cc11001100_hook("w", "function" != typeof fetch ? {
      get: function e(t) {
        var n = cc11001100_hook("n", arguments, "var-init");
        return o()(u.a.mark(function e() {
          var o, a;
          return u.a.wrap(function e(c) {
            for (;;) switch (c.prev = cc11001100_hook("c.prev", c.next, "assign")) {
              case 0:
                return o = cc11001100_hook("o", n.length > 1 && void 0 !== n[1] ? n[1] : {}, "assign"), a = cc11001100_hook("a", /^https:\/\//.test(t) ? r(14) : r(15), "assign"), c.abrupt("return", new Promise(function (e, r) {
                  function n(e, t) {
                    cc11001100_hook("e", e, "function-parameter");
                    cc11001100_hook("t", t, "function-parameter");
                    var r = cc11001100_hook("r", new URL(e), "var-init"),
                      n = cc11001100_hook("n", r.port || ("https:" === r.protocol ? "443" : "80"), "var-init"),
                      o = cc11001100_hook("o", {
                        hostname: cc11001100_hook("hostname", r.hostname, "object-key-init"),
                        port: cc11001100_hook("port", n, "object-key-init"),
                        path: cc11001100_hook("path", "".concat(r.pathname).concat(r.search).concat(r.hash), "object-key-init")
                      }, "var-init");
                    return t && (o.headers = cc11001100_hook("o.headers", t, "assign")), o;
                  }
                  var c = cc11001100_hook("c", t, "var-init");
                  null != o && o.headers && (c = cc11001100_hook("c", n(t, null == o ? void 0 : o.headers), "assign")), a.get(c, function (n) {
                    if (200 !== n.statusCode) return n.resume(), void r("\u8bf7\u6c42 ".concat(t, " statusCode: ").concat(n.statusCode));
                    n.setEncoding("utf8");
                    var a = cc11001100_hook("a", [], "var-init");
                    n.on("data", function (e) {
                      a.push(e);
                    }), n.on("end", function () {
                      var t = cc11001100_hook("t", a.join(""), "var-init");
                      if ("text" !== o.dataType) try {
                        var c = cc11001100_hook("c", JSON.parse(t), "var-init");
                        e({
                          status: cc11001100_hook("status", n.statusCode, "object-key-init"),
                          data: cc11001100_hook("data", c, "object-key-init")
                        });
                      } catch (e) {
                        r(e.message);
                      } else e({
                        status: cc11001100_hook("status", n.statusCode, "object-key-init"),
                        data: cc11001100_hook("data", t, "object-key-init")
                      });
                    });
                  }).on("error", function (e) {
                    r(e.message);
                  });
                }));
              case 3:
              case "end":
                return c.stop();
            }
          }, e);
        }))();
      },
      post: function e(t, n) {
        return o()(u.a.mark(function e() {
          var o;
          return u.a.wrap(function e(a) {
            for (;;) switch (a.prev = cc11001100_hook("a.prev", a.next, "assign")) {
              case 0:
                if (n && "object" === v()(n.body)) {
                  a.next = cc11001100_hook("a.next", 2, "assign");
                  break;
                }
                throw new Error("");
              case 2:
                return o = cc11001100_hook("o", /^https:\/\//.test(t) ? r(14) : r(15), "assign"), a.abrupt("return", new Promise(function (e, r) {
                  var a, c;
                  switch (n.contentType || "json") {
                    case "form":
                      a = cc11001100_hook("a", "application/x-www-form-urlencoded", "assign"), c = cc11001100_hook("c", Object.keys(n.body).map(function (e) {
                        var t = cc11001100_hook("t", n.body[e], "var-init");
                        return [e, encodeURIComponent(t)].join("=");
                      }).join("&"), "assign");
                      break;
                    case "json":
                      a = cc11001100_hook("a", "application/json", "assign"), c = cc11001100_hook("c", JSON.stringify(n.body), "assign");
                  }
                  o.request(t, {
                    method: cc11001100_hook("method", "POST", "object-key-init"),
                    headers: cc11001100_hook("headers", b(b({}, n.headers), {}, {
                      "content-type": cc11001100_hook("content-type", a, "object-key-init")
                    }), "object-key-init")
                  }, function (n) {
                    if (200 !== n.statusCode) return n.resume(), void r("\u8bf7\u6c42 ".concat(t, " statusCode: ").concat(n.statusCode));
                    n.setEncoding("utf8");
                    var o = cc11001100_hook("o", [], "var-init");
                    n.on("data", function (e) {
                      o.push(e);
                    }), n.on("end", function () {
                      try {
                        var t = cc11001100_hook("t", JSON.parse(o.join("")), "var-init");
                        e({
                          status: cc11001100_hook("status", 200, "object-key-init"),
                          data: cc11001100_hook("data", t, "object-key-init")
                        });
                      } catch (e) {
                        r(e.message);
                      }
                    });
                  }).on("error", function (e) {
                    r(e.message);
                  }).end(c);
                }));
              case 4:
              case "end":
                return a.stop();
            }
          }, e);
        }))();
      },
      head: function e(t, n) {
        return o()(u.a.mark(function e() {
          var n;
          return u.a.wrap(function e(o) {
            for (;;) switch (o.prev = cc11001100_hook("o.prev", o.next, "assign")) {
              case 0:
                return n = cc11001100_hook("n", /^https:\/\//.test(t) ? r(14) : r(15), "assign"), o.abrupt("return", new Promise(function (e, r) {
                  n.request(t, {
                    method: cc11001100_hook("method", "HEAD", "object-key-init")
                  }, function (t) {
                    e({
                      status: cc11001100_hook("status", t.statusCode, "object-key-init"),
                      data: cc11001100_hook("data", void 0, "object-key-init")
                    });
                  }).on("error", function (e) {
                    r(e.message);
                  }).end();
                }));
              case 2:
              case "end":
                return o.stop();
            }
          }, e);
        }))();
      }
    } : {
      get: function e(t, r) {
        return o()(u.a.mark(function e() {
          return u.a.wrap(function e(n) {
            for (;;) switch (n.prev = cc11001100_hook("n.prev", n.next, "assign")) {
              case 0:
                return n.abrupt("return", fetch(t, b(b({}, r), {
                  credentials: cc11001100_hook("credentials", null != r && r.includeCookie ? "include" : void 0, "object-key-init")
                })).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  return {
                    status: cc11001100_hook("status", 200, "object-key-init"),
                    data: cc11001100_hook("data", e, "object-key-init")
                  };
                }));
              case 1:
              case "end":
                return n.stop();
            }
          }, e);
        }))();
      },
      post: function e(t, r) {
        return o()(u.a.mark(function e() {
          var n, o;
          return u.a.wrap(function e(a) {
            for (;;) switch (a.prev = cc11001100_hook("a.prev", a.next, "assign")) {
              case 0:
                if (r && "object" === v()(r.body)) {
                  a.next = cc11001100_hook("a.next", 2, "assign");
                  break;
                }
                throw new Error("");
              case 2:
                a.t0 = cc11001100_hook("a.t0", r.contentType || "json", "assign"), a.next = cc11001100_hook("a.next", "form" === a.t0 ? 5 : "json" === a.t0 ? 8 : 11, "assign");
                break;
              case 5:
                return n = cc11001100_hook("n", "application/x-www-form-urlencoded", "assign"), o = cc11001100_hook("o", Object.keys(r.body).map(function (e) {
                  var t = cc11001100_hook("t", r.body[e], "var-init");
                  return [e, encodeURIComponent(t)].join("=");
                }).join("&"), "assign"), a.abrupt("break", 11);
              case 8:
                return n = cc11001100_hook("n", "application/json", "assign"), o = cc11001100_hook("o", JSON.stringify(r.body), "assign"), a.abrupt("break", 11);
              case 11:
                return a.abrupt("return", fetch(t, {
                  method: cc11001100_hook("method", "POST", "object-key-init"),
                  body: cc11001100_hook("body", o, "object-key-init"),
                  headers: cc11001100_hook("headers", b({
                    "content-type": cc11001100_hook("content-type", n, "object-key-init")
                  }, r.headers), "object-key-init"),
                  credentials: cc11001100_hook("credentials", r.includeCookie ? "include" : void 0, "object-key-init")
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  return {
                    status: cc11001100_hook("status", 200, "object-key-init"),
                    data: cc11001100_hook("data", e, "object-key-init")
                  };
                }));
              case 12:
              case "end":
                return a.stop();
            }
          }, e);
        }))();
      },
      head: function e(t, r) {
        return o()(u.a.mark(function e() {
          return u.a.wrap(function e(t) {
            for (;;) switch (t.prev = cc11001100_hook("t.prev", t.next, "assign")) {
              case 0:
                return t.abrupt("return", null);
              case 1:
              case "end":
                return t.stop();
            }
          }, e);
        }))();
      }
    }, "var-init"),
    O,
    j = cc11001100_hook("j", {
      get: function e(t) {
        var r = cc11001100_hook("r", arguments, "var-init"),
          n = cc11001100_hook("n", this, "var-init");
        return o()(u.a.mark(function e() {
          var o, a, c;
          return u.a.wrap(function e(i) {
            for (;;) switch (i.prev = cc11001100_hook("i.prev", i.next, "assign")) {
              case 0:
                return o = cc11001100_hook("o", r.length > 1 && void 0 !== r[1] ? r[1] : {}, "assign"), a = cc11001100_hook("a", n.middlewares.GET || [], "assign"), c = cc11001100_hook("c", a.reduce(function (e, t) {
                  return function (r, n) {
                    return t(r, n, e);
                  };
                }, w.get), "assign"), i.abrupt("return", c(t, o));
              case 4:
              case "end":
                return i.stop();
            }
          }, e);
        }))();
      },
      post: function e(t, r) {
        return o()(u.a.mark(function e() {
          return u.a.wrap(function e(n) {
            for (;;) switch (n.prev = cc11001100_hook("n.prev", n.next, "assign")) {
              case 0:
                return n.abrupt("return", w.post(t, r));
              case 1:
              case "end":
                return n.stop();
            }
          }, e);
        }))();
      },
      head: function e(t, r) {
        return o()(u.a.mark(function e() {
          return u.a.wrap(function e(n) {
            for (;;) switch (n.prev = cc11001100_hook("n.prev", n.next, "assign")) {
              case 0:
                return n.abrupt("return", w.head(t, r));
              case 1:
              case "end":
                return n.stop();
            }
          }, e);
        }))();
      },
      middlewares: {
        GET: cc11001100_hook("GET", [], "object-key-init")
      }
    }, "var-init"),
    x,
    E,
    P,
    _;
  function k(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? k(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  !function (e) {
    e.Daily = cc11001100_hook("e.Daily", "daily", "assign"), e.Pre = cc11001100_hook("e.Pre", "pre", "assign"), e.Grey = cc11001100_hook("e.Grey", "grey", "assign"), e.Prod = cc11001100_hook("e.Prod", "prod", "assign");
  }(x || (x = cc11001100_hook("x", {}, "assign"))), function (e) {
    e.zh_CN = cc11001100_hook("e.zh_CN", "zh_CN", "assign"), e.en_US = cc11001100_hook("e.en_US", "en_US", "assign");
  }(E || (E = cc11001100_hook("E", {}, "assign"))), function (e) {
    e[e.MODULE = cc11001100_hook("e.MODULE", 2, "assign")] = cc11001100_hook("e[e.MODULE = 2]", "MODULE", "assign"), e[e.SECTION = cc11001100_hook("e.SECTION", 3, "assign")] = cc11001100_hook("e[e.SECTION = 3]", "SECTION", "assign"), e[e.SOURCE = cc11001100_hook("e.SOURCE", 4, "assign")] = cc11001100_hook("e[e.SOURCE = 4]", "SOURCE", "assign"), e[e.FRAGMENT = cc11001100_hook("e.FRAGMENT", 6, "assign")] = cc11001100_hook("e[e.FRAGMENT = 6]", "FRAGMENT", "assign"), e[e.STATIC = cc11001100_hook("e.STATIC", 7, "assign")] = cc11001100_hook("e[e.STATIC = 7]", "STATIC", "assign"), e[e.TEMPLATE = cc11001100_hook("e.TEMPLATE", 8, "assign")] = cc11001100_hook("e[e.TEMPLATE = 8]", "TEMPLATE", "assign");
  }(P || (P = cc11001100_hook("P", {}, "assign"))), function (e) {
    e.Copy = cc11001100_hook("e.Copy", "copy", "assign"), e.Constraint = cc11001100_hook("e.Constraint", "constraint", "assign");
  }(_ || (_ = cc11001100_hook("_", {}, "assign")));
  var C = function (e) {
    return T.apply(this, arguments);
  };
  function T() {
    return (T = cc11001100_hook("T", o()(u.a.mark(function e(t) {
      var r,
        n,
        o,
        a,
        c,
        i = cc11001100_hook("i", arguments, "var-init");
      return u.a.wrap(function e(u) {
        for (;;) switch (u.prev = cc11001100_hook("u.prev", u.next, "assign")) {
          case 0:
            return r = cc11001100_hook("r", i.length > 1 && void 0 !== i[1] ? i[1] : x.Prod, "assign"), n = cc11001100_hook("n", i.length > 2 && void 0 !== i[2] ? i[2] : E.zh_CN, "assign"), o = cc11001100_hook("o", !(i.length > 3 && void 0 !== i[3]) || i[3], "assign"), a = cc11001100_hook("a", o ? "https://cloud-assets.alicdn.com/lowcode/model/timely-data?dataId=".concat(t, "&env=").concat(r, "&lang=").concat(n) : "https://query.aliyun.com/rest/homon.n1M_MCxtC.external-model-data-get?dataId=".concat(t, "&env=").concat(r, "&lang=").concat(n, "&QKEY_NAME=admin-key&QKEY_VALUE=2e0a9e9c-11d9-dbcd-0a40-e8804aa1e2ec"), "assign"), u.next = cc11001100_hook("u.next", 6, "assign"), j.get(a);
          case 6:
            if (200 !== (c = cc11001100_hook("c", u.sent, "assign")).status || !c.data.success) {
              u.next = cc11001100_hook("u.next", 11, "assign");
              break;
            }
            return u.abrupt("return", S(S({}, c.data.model.data), {}, {
              __scm: cc11001100_hook("__scm", c.data.model.scm, "object-key-init")
            }));
          case 11:
            throw console.log("\u6a21\u578b\u6570\u636e ".concat(t, " \u8bf7\u6c42\u5931\u8d25")), new Error(JSON.stringify({
              code: cc11001100_hook("code", c.data.errorCode, "object-key-init"),
              message: cc11001100_hook("message", c.data.errorMessage, "object-key-init")
            }));
          case 13:
          case "end":
            return u.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  var A = function (e) {
    return D.apply(this, arguments);
  };
  function D() {
    return (D = cc11001100_hook("D", o()(u.a.mark(function e(t) {
      var r,
        n,
        o,
        a,
        c,
        i = cc11001100_hook("i", arguments, "var-init");
      return u.a.wrap(function e(u) {
        for (;;) switch (u.prev = cc11001100_hook("u.prev", u.next, "assign")) {
          case 0:
            return r = cc11001100_hook("r", i.length > 1 && void 0 !== i[1] ? i[1] : x.Prod, "assign"), n = cc11001100_hook("n", i.length > 2 && void 0 !== i[2] ? i[2] : E.zh_CN, "assign"), o = cc11001100_hook("o", !(i.length > 3 && void 0 !== i[3]) || i[3], "assign"), a = cc11001100_hook("a", o ? "https://cloud-assets.alicdn.com/lowcode/model/timely-delivery-data?deliverInstanceId=".concat(t, "&env=").concat(r, "&lang=").concat(n) : "https://query.aliyun.com/rest/homon.n1M_MCxtC.external-deliver-get-v2?deliverInstanceId=".concat(t, "&env=").concat(r, "&lang=").concat(n, "&QKEY_NAME=admin-key&QKEY_VALUE=0d5a2c6f-d95e-3db9-3f62-49645764e709"), "assign"), u.next = cc11001100_hook("u.next", 6, "assign"), j.get(a);
          case 6:
            if (200 !== (c = cc11001100_hook("c", u.sent, "assign")).status || !c.data.success) {
              u.next = cc11001100_hook("u.next", 18, "assign");
              break;
            }
            c.data.model.deliverStructure || (c.data.model.deliverStructure = cc11001100_hook("c.data.model.deliverStructure", "List", "assign")), u.t0 = cc11001100_hook("u.t0", c.data.model.deliverStructure, "assign"), u.next = cc11001100_hook("u.next", "Single" === u.t0 ? 12 : "List" === u.t0 ? 13 : "Tree" === u.t0 ? 14 : "Trees" === u.t0 ? 15 : 16, "assign");
            break;
          case 12:
            return u.abrupt("return", {
              shape: cc11001100_hook("shape", "Single", "object-key-init"),
              data: cc11001100_hook("data", c.data.model.deliverData, "object-key-init")
            });
          case 13:
            return u.abrupt("return", {
              shape: cc11001100_hook("shape", "List", "object-key-init"),
              data: cc11001100_hook("data", c.data.model.deliverData, "object-key-init")
            });
          case 14:
            return u.abrupt("return", {
              shape: cc11001100_hook("shape", "Tree", "object-key-init"),
              data: cc11001100_hook("data", c.data.model.deliverData, "object-key-init")
            });
          case 15:
            return u.abrupt("break", 16);
          case 16:
            u.next = cc11001100_hook("u.next", 20, "assign");
            break;
          case 18:
            throw console.log("\u6295\u653e\u6570\u636e ".concat(t, " \u8bf7\u6c42\u5931\u8d25")), new Error(JSON.stringify({
              code: cc11001100_hook("code", c.data.errorCode, "object-key-init"),
              message: cc11001100_hook("message", c.data.errorMessage, "object-key-init")
            }));
          case 20:
          case "end":
            return u.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  var I = cc11001100_hook("I", /^[^\[]+/, "var-init"),
    N = cc11001100_hook("N", /\[(\*|\d+|\$\d+)\]/g, "var-init"),
    M = cc11001100_hook("M", {}, "var-init");
  function R(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (M[e]) return M[e];
    var t = cc11001100_hook("t", [], "var-init");
    return e.split(".").forEach(function (e) {
      var r;
      if (e = cc11001100_hook("e", e.trim(), "assign")) for (e = cc11001100_hook("e", e.replace(I, function (e) {
        return t.push({
          type: cc11001100_hook("type", "object", "object-key-init"),
          property: cc11001100_hook("property", e, "object-key-init")
        }), "";
      }), "assign"), N.lastIndex = cc11001100_hook("N.lastIndex", 0, "assign"); r = cc11001100_hook("r", N.exec(e), "assign");) {
        var n = cc11001100_hook("n", r[1].trim(), "var-init");
        "*" === n ? t.push({
          type: cc11001100_hook("type", "array", "object-key-init"),
          mode: cc11001100_hook("mode", "wildcard", "object-key-init")
        }) : /^\$\d+$/.test(n) ? t.push({
          type: cc11001100_hook("type", "array", "object-key-init"),
          mode: cc11001100_hook("mode", "match", "object-key-init"),
          index: cc11001100_hook("index", parseInt(n.replace("$", "")), "object-key-init")
        }) : /^\d+$/.test(n) && t.push({
          type: cc11001100_hook("type", "array", "object-key-init"),
          mode: cc11001100_hook("mode", "exact", "object-key-init"),
          index: cc11001100_hook("index", parseInt(n), "object-key-init")
        });
      }
    }), M[e] = cc11001100_hook("M[e]", t, "assign"), t;
  }
  function L(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"], "var-init");
    if (!r) {
      if (Array.isArray(e) || (r = cc11001100_hook("r", $(e), "assign")) || t && e && "number" == typeof e.length) {
        r && (e = cc11001100_hook("e", r, "assign"));
        var n = cc11001100_hook("n", 0, "var-init"),
          o = function e() {};
        return {
          s: cc11001100_hook("s", o, "object-key-init"),
          n: function t() {
            return n >= e.length ? {
              done: cc11001100_hook("done", !0, "object-key-init")
            } : {
              done: cc11001100_hook("done", !1, "object-key-init"),
              value: cc11001100_hook("value", e[n++], "object-key-init")
            };
          },
          e: function e(t) {
            throw t;
          },
          f: cc11001100_hook("f", o, "object-key-init")
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a,
      c = cc11001100_hook("c", !0, "var-init"),
      i = cc11001100_hook("i", !1, "var-init");
    return {
      s: function t() {
        r = cc11001100_hook("r", r.call(e), "assign");
      },
      n: function e() {
        var t = cc11001100_hook("t", r.next(), "var-init");
        return c = cc11001100_hook("c", t.done, "assign"), t;
      },
      e: function e(t) {
        i = cc11001100_hook("i", !0, "assign"), a = cc11001100_hook("a", t, "assign");
      },
      f: function e() {
        try {
          c || null == r.return || r.return();
        } finally {
          if (i) throw a;
        }
      }
    };
  }
  function $(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e) {
      if ("string" == typeof e) return U(e, t);
      var r = cc11001100_hook("r", {}.toString.call(e).slice(8, -1), "var-init");
      return "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign")), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? U(e, t) : void 0;
    }
  }
  function U(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));
    for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");
    return n;
  }
  function F(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r,
      n = cc11001100_hook("n", L("string" == typeof t ? R(t) : t), "var-init"),
      o;
    try {
      for (n.s(); !(o = cc11001100_hook("o", n.n(), "assign")).done;) {
        var a = cc11001100_hook("a", o.value, "var-init");
        switch (a.type) {
          case "object":
            if (!e || Array.isArray(e)) return;
            e = cc11001100_hook("e", e[a.property], "assign");
            break;
          case "array":
            if (!Array.isArray(e)) return;
            if ("wildcard" === a.mode) throw new Error("get \u65b9\u6cd5\u7684 path \u53c2\u6570\u4e0d\u652f\u6301 [*] \u8bed\u6cd5");
            if ("match" === a.mode) throw new Error("get \u65b9\u6cd5\u7684 path \u53c2\u6570\u4e0d\u652f\u6301 [$\u6570\u5b57] \u8bed\u6cd5");
            e = cc11001100_hook("e", e[a.index], "assign");
        }
      }
    } catch (e) {
      n.e(e);
    } finally {
      n.f();
    }
    return e;
  }
  function q(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var n = cc11001100_hook("n", e, "var-init"),
      o = cc11001100_hook("o", null, "var-init"),
      a = cc11001100_hook("a", "", "var-init"),
      c = cc11001100_hook("c", "string" == typeof t ? R(t) : t, "var-init"),
      i = cc11001100_hook("i", c.length - 1, "var-init");
    return c.forEach(function (t, c) {
      switch (t.type) {
        case "object":
          if (e || (o ? o[a] = cc11001100_hook("o[a]", e = cc11001100_hook("e", {}, "assign"), "assign") : n = cc11001100_hook("n", e = cc11001100_hook("e", {}, "assign"), "assign")), Array.isArray(e)) throw new Error("\u65e0\u6cd5\u7ed9\u6570\u7ec4\u7c7b\u578b\u8d4b\u503c\u5bf9\u8c61\u6210\u5458\u503c");
          c === i ? e[t.property] = cc11001100_hook("e[t.property]", r, "assign") : (o = cc11001100_hook("o", e, "assign"), a = cc11001100_hook("a", t.property, "assign"), e = cc11001100_hook("e", o[a], "assign"));
          break;
        case "array":
          if (e || (o ? o[a] = cc11001100_hook("o[a]", e = cc11001100_hook("e", [], "assign"), "assign") : n = cc11001100_hook("n", e = cc11001100_hook("e", [], "assign"), "assign")), !Array.isArray(e)) throw new Error("\u65e0\u6cd5\u7ed9\u5bf9\u8c61\u8d4b\u503c\u6570\u7ec4\u6210\u5458\u503c");
          if ("wildcard" === t.mode) throw new Error("set \u65b9\u6cd5\u7684 path \u53c2\u6570\u4e0d\u652f\u6301 [*] \u8bed\u6cd5");
          if ("match" === t.mode) throw new Error("set \u65b9\u6cd5\u7684 path \u53c2\u6570\u4e0d\u652f\u6301 [$\u6570\u5b57] \u8bed\u6cd5");
          c === i ? e[t.index] = cc11001100_hook("e[t.index]", r, "assign") : (o = cc11001100_hook("o", e, "assign"), a = cc11001100_hook("a", t.index, "assign"), e = cc11001100_hook("e", o[a], "assign"));
      }
    }), n;
  }
  function G(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r;
    return R(t).every(function (t) {
      switch (t.type) {
        case "object":
          return !(!e || Array.isArray(e)) && t.property in e && (e = cc11001100_hook("e", e[t.property], "assign"), !0);
        case "array":
          if (!Array.isArray(e)) return !1;
          if ("wildcard" === t.mode) throw new Error("has \u65b9\u6cd5\u7684 path \u53c2\u6570\u4e0d\u652f\u6301 [*] \u8bed\u6cd5");
          if ("match" === t.mode) throw new Error("has \u65b9\u6cd5\u7684 path \u53c2\u6570\u4e0d\u652f\u6301 [$\u6570\u5b57] \u8bed\u6cd5");
          return !(t.index >= e.length);
      }
    });
  }
  var J = cc11001100_hook("J", void 0, "var-init");
  function z(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, "var-init"),
      r = cc11001100_hook("r", Object.keys(t), "var-init");
    if (0 === r.length) return e;
    var n = cc11001100_hook("n", null, "var-init");
    return r.forEach(function (r) {
      var o = cc11001100_hook("o", t[r], "var-init"),
        a,
        c = cc11001100_hook("c", Y(R(o)), "var-init"),
        i;
      B(e, c).forEach(function (e) {
        var t = cc11001100_hook("t", e.matchs, "var-init"),
          a = cc11001100_hook("a", e.value, "var-init");
        if (void 0 !== a) {
          var c = cc11001100_hook("c", r.replace(/\[\$(\d+)\]/g, function (e, n) {
            var a = cc11001100_hook("a", t[n], "var-init");
            if ("number" == typeof a) return "[".concat(a, "]");
            throw new Error("\u8def\u5f84 ".concat(r, " \u7684 [$").concat(n, "] \u8d85\u51fa\u4e86\u76ee\u6807\u8def\u5f84 ").concat(o, " \u901a\u914d\u7d22\u5f15\u8303\u56f4"));
          }), "var-init");
          n = cc11001100_hook("n", q(n, c, a), "assign");
        }
      });
    }), n;
  }
  function B(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", t.shift(), "var-init");
    if (Array.isArray(r)) return e = cc11001100_hook("e", F(e, r), "assign"), t.length ? B(e, c()(t)) : [{
      matchs: cc11001100_hook("matchs", [], "object-key-init"),
      value: cc11001100_hook("value", e, "object-key-init")
    }];
    if (Array.isArray(e)) {
      var n = cc11001100_hook("n", [], "var-init");
      return e.forEach(function (e, r) {
        t.length ? B(e, c()(t)).forEach(function (e) {
          n.push({
            matchs: cc11001100_hook("matchs", [r].concat(c()(e.matchs)), "object-key-init"),
            value: cc11001100_hook("value", e.value, "object-key-init")
          });
        }) : n.push({
          matchs: cc11001100_hook("matchs", [r], "object-key-init"),
          value: cc11001100_hook("value", e, "object-key-init")
        });
      }), n;
    }
    return [];
  }
  function Y(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init"),
      r = cc11001100_hook("r", [], "var-init");
    return e.forEach(function (e) {
      switch (e.type) {
        case "object":
          r.push(e);
          break;
        case "array":
          switch (e.mode) {
            case "exact":
              r.push(e);
              break;
            case "match":
              throw new Error("\u6620\u5c04\u76ee\u6807\u5bf9\u8c61\u8def\u5f84\u65f6\uff0c\u65e0\u6cd5\u8fdb\u884c [$\u6570\u5b57] \u5339\u914d\u89c4\u5219");
            case "wildcard":
              r.length && (t.push(r), r = cc11001100_hook("r", [], "assign")), t.push(e);
          }
      }
    }), r.length && t.push(r), t;
  }
  function H(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? H(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Q = cc11001100_hook("Q", {}, "var-init");
  function K(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init");
    if (!1 !== r.checkUndefined) {
      if (void 0 === e) return t;
      if (void 0 === t) return e;
    }
    return e && "object" === v()(e) && t && "object" === v()(t) ? Array.isArray(e) ? !1 !== r.mergeArray && Array.isArray(t) ? X(e, t, r) : t : Array.isArray(t) ? t : W(e, t, r) : t;
  }
  function W(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init");
    if (t.__type) {
      var n = cc11001100_hook("n", (r.customTypeMerge || Q)[t.__type], "var-init");
      if (n) return n(e, t);
    }
    if (t.constructor && t.constructor.name && "Object" !== t.constructor.name) return console.log("skip deep merge object type: " + t.constructor.name), t;
    var o = cc11001100_hook("o", {}, "var-init");
    return Object.keys(V(V({}, e), t)).forEach(function (n) {
      if (n in t) {
        if (n in e) {
          var a = cc11001100_hook("a", e[n], "var-init"),
            c = cc11001100_hook("c", t[n], "var-init");
          o[n] = cc11001100_hook("o[n]", K(a, c, V(V({}, r), {}, {
            checkUndefined: cc11001100_hook("checkUndefined", !1, "object-key-init")
          })), "assign");
        } else o[n] = cc11001100_hook("o[n]", t[n], "assign");
      } else o[n] = cc11001100_hook("o[n]", e[n], "assign");
    }), o;
  }
  function X(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init"), n = cc11001100_hook("n", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", Math.max(e.length, t.length), "var-init"); o < a; o++) if (o in e) {
      if (o in t) {
        var c = cc11001100_hook("c", e[o], "var-init"),
          i = cc11001100_hook("i", t[o], "var-init");
        n[o] = cc11001100_hook("n[o]", K(c, i, V(V({}, r), {}, {
          checkUndefined: cc11001100_hook("checkUndefined", !1, "object-key-init")
        })), "assign");
      } else n[o] = cc11001100_hook("n[o]", e[o], "assign");
    } else o in t && (n[o] = cc11001100_hook("n[o]", t[o], "assign"));
    return n;
  }
  Q.model = cc11001100_hook("Q.model", Q.delivery = cc11001100_hook("Q.delivery", function (e, t) {
    return t;
  }, "assign"), "assign"), Q.slot = cc11001100_hook("Q.slot", function (e, t) {
    return e && "slot" === e.__type ? t.value ? t : e : t;
  }, "assign");
  var Z = cc11001100_hook("Z", {}, "var-init"),
    ee = cc11001100_hook("ee", {}, "var-init"),
    te = cc11001100_hook("te", {}, "var-init");
  function re() {
    return Z;
  }
  function ne() {
    Z = cc11001100_hook("Z", {}, "assign");
  }
  function oe(e) {
    cc11001100_hook("e", e, "function-parameter");
    Object.keys(e).forEach(function (t) {
      Z[t] = cc11001100_hook("Z[t]", e[t], "assign");
    });
  }
  var ae = function (e, t, r) {
      return function n(a, i) {
        var s = cc11001100_hook("s", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.Prod, "var-init"),
          p = cc11001100_hook("p", arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.zh_CN, "var-init"),
          f = cc11001100_hook("f", [], "var-init");
        Object.keys(i).some(function (e) {
          var t = cc11001100_hook("t", R(i[e])[0], "var-init");
          if (!t) throw new Error("");
          if ("array" === t.type) return !0;
          var r = cc11001100_hook("r", t.property, "var-init");
          -1 === f.indexOf(r) && f.push(r);
        });
        var l = cc11001100_hook("l", f.length > 0, "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", Z[a], "var-init");
        if (h) {
          if (!l) return t(h.data, i);
          if (0 === (d = cc11001100_hook("d", f.filter(function (e) {
            return -1 === h.properties.indexOf(e);
          }), "assign")).length) return t(h.data, i);
        } else d = cc11001100_hook("d", f, "assign");
        var y = cc11001100_hook("y", [], "var-init"),
          v = cc11001100_hook("v", ee[a], "var-init");
        if (v && v.length) {
          if (!l) return v[0].request.then(function () {
            return t(Z[a].data, i);
          });
          v.some(function (e) {
            var t = cc11001100_hook("t", d.filter(function (t) {
              return -1 === e.properties.indexOf(t);
            }), "var-init");
            if (t.length !== d.length && (y.push(e.request), 0 === (d = cc11001100_hook("d", t, "assign")).length)) return !0;
          });
        }
        if (d.length || !l) {
          if (!te[a]) {
            var m = cc11001100_hook("m", new Promise(function () {
              var t = cc11001100_hook("t", o()(u.a.mark(function t(n, o) {
                var i, f, l;
                return u.a.wrap(function t(u) {
                  for (;;) switch (u.prev = cc11001100_hook("u.prev", u.next, "assign")) {
                    case 0:
                      return u.next = cc11001100_hook("u.next", 2, "assign"), Promise.resolve();
                    case 2:
                      return i = cc11001100_hook("i", e(a, s, p), "assign"), ee[a] || (ee[a] = cc11001100_hook("ee[a]", [], "assign")), f = cc11001100_hook("f", {
                        properties: cc11001100_hook("properties", te[a].properties, "object-key-init"),
                        request: cc11001100_hook("request", i, "object-key-init")
                      }, "assign"), ee[a].push(f), delete te[a], u.prev = cc11001100_hook("u.prev", 7, "assign"), u.next = cc11001100_hook("u.next", 10, "assign"), i;
                    case 10:
                      l = cc11001100_hook("l", u.sent, "assign"), Z[a] ? Z[a] = cc11001100_hook("Z[a]", {
                        properties: cc11001100_hook("properties", [].concat(c()(Z[a].properties), c()(f.properties)), "object-key-init"),
                        data: cc11001100_hook("data", r(Z[a].data, l), "object-key-init")
                      }, "assign") : Z[a] = cc11001100_hook("Z[a]", {
                        properties: cc11001100_hook("properties", f.properties, "object-key-init"),
                        data: cc11001100_hook("data", l, "object-key-init")
                      }, "assign"), n(l), u.next = cc11001100_hook("u.next", 18, "assign");
                      break;
                    case 15:
                      u.prev = cc11001100_hook("u.prev", 15, "assign"), u.t0 = cc11001100_hook("u.t0", u.catch(7), "assign"), o(u.t0);
                    case 18:
                      ee[a] = cc11001100_hook("ee[a]", ee[a].filter(function (e) {
                        return e !== f;
                      }), "assign");
                    case 19:
                    case "end":
                      return u.stop();
                  }
                }, t, null, [[7, 15]]);
              })), "var-init");
              return function (e, r) {
                return t.apply(this, arguments);
              };
            }()), "var-init");
            te[a] = cc11001100_hook("te[a]", {
              properties: cc11001100_hook("properties", d, "object-key-init"),
              request: cc11001100_hook("request", m, "object-key-init")
            }, "assign");
          }
          var b = cc11001100_hook("b", te[a], "var-init");
          d.forEach(function (e) {
            -1 === b.properties.indexOf(e) && b.properties.push(e);
          }), y.push(b.request);
        }
        return Promise.all(y).then(function () {
          return t(Z[a].data, i);
        });
      };
    },
    ce;
  function ie(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function ue(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? ie(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function se(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.Prod, "var-init"),
      n = cc11001100_hook("n", arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.zh_CN, "var-init");
    return t.__scm = cc11001100_hook("t.__scm", "__scm", "assign"), ae(fe.nativeFetchExactData, z, function (e, t) {
      return ue(ue({}, e), t);
    })(e, t, r, n);
  }
  function pe(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var n = cc11001100_hook("n", arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x.Prod, "var-init"),
      o = cc11001100_hook("o", arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E.zh_CN, "var-init");
    return ae(fe.nativeFetchDeliveryData, function (e, t) {
      switch (e.shape) {
        case "Single":
          return z(e.data, t);
        case "List":
          return e.data.map(function (e) {
            return z(e.data, t);
          });
        case "Tree":
          return function e(n) {
            var o;
            return o = cc11001100_hook("o", n.children ? ue(ue({}, z(n.data, r || t)), {}, {
              children: cc11001100_hook("children", n.children.map(e), "object-key-init")
            }) : z(n.data, t), "assign"), n.scm && (o.__scm = cc11001100_hook("o.__scm", n.scm, "assign")), o;
          }(e.data);
      }
    }, function (e, t) {
      if (e.shape !== t.shape) throw new Error("");
      switch (e.shape) {
        case "Single":
          return {
            shape: cc11001100_hook("shape", "Single", "object-key-init"),
            data: cc11001100_hook("data", ue(ue({}, e.data), t.data), "object-key-init")
          };
        case "List":
          if (e.data.length !== t.data.length) throw new Error("");
          return {
            shape: cc11001100_hook("shape", "List", "object-key-init"),
            data: cc11001100_hook("data", e.data.map(function (e, r) {
              return ue(ue({}, e), t.data[r]);
            }), "object-key-init")
          };
        case "Tree":
          return t;
      }
    })(e, t, n, o);
  }
  function fe(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.propertyMap, "var-init"),
      r = cc11001100_hook("r", e.branchPropertyMap, "var-init"),
      n = cc11001100_hook("n", e.query, "var-init"),
      o = cc11001100_hook("o", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.Prod, "var-init"),
      a = cc11001100_hook("a", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.zh_CN, "var-init");
    switch (n.type) {
      case "exact":
        if (Array.isArray(n.params.ids)) {
          var c = cc11001100_hook("c", n.params.ids.map(function (e) {
            return se(e, t || {}, o, a);
          }), "var-init");
          return c.some(function (e) {
            return e instanceof Promise;
          }) ? Promise.all(c) : c;
        }
        return n.params.ids ? se(n.params.ids, t || {}, o, a) : void 0;
      case "delivery":
        return pe(n.params.id, t || {}, r, o, a);
    }
  }
  function le(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return de.apply(this, arguments);
  }
  function de() {
    return (de = cc11001100_hook("de", o()(u.a.mark(function e(t, r) {
      var n, o;
      return u.a.wrap(function e(a) {
        for (;;) switch (a.prev = cc11001100_hook("a.prev", a.next, "assign")) {
          case 0:
            if ("json" === t.type) {
              a.next = cc11001100_hook("a.next", 2, "assign");
              break;
            }
            throw new Error("\u6a21\u677f package \u5fc5\u987b\u662f json \u7c7b\u578b");
          case 2:
            return n = cc11001100_hook("n", t.url + (-1 === t.url.indexOf("?") ? "?" : "&") + "env=" + r, "assign"), a.prev = cc11001100_hook("a.prev", 3, "assign"), a.next = cc11001100_hook("a.next", 6, "assign"), j.get(n);
          case 6:
            return o = cc11001100_hook("o", a.sent, "assign"), a.abrupt("return", o.data);
          case 10:
            throw a.prev = cc11001100_hook("a.prev", 10, "assign"), a.t0 = cc11001100_hook("a.t0", a.catch(3), "assign"), new Error("\u52a0\u8f7d\u6a21\u677f ".concat(n, " \u5931\u8d25"));
          case 13:
          case "end":
            return a.stop();
        }
      }, e, null, [[3, 10]]);
    })), "assign")).apply(this, arguments);
  }
  function he(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function ye(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? he(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : he(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function ve(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, "var-init");
    if (!e) return t;
    var r = cc11001100_hook("r", {}, "var-init");
    return Object.keys(ye(ye({}, e), t)).forEach(function (n) {
      var o = cc11001100_hook("o", e[n], "var-init"),
        a = cc11001100_hook("a", t[n], "var-init");
      a ? o && a.isExport ? r[n] = cc11001100_hook("r[n]", {
        isRemove: cc11001100_hook("isRemove", "boolean" == typeof o.isRemove ? o.isRemove : a.isRemove, "object-key-init"),
        props: cc11001100_hook("props", K(a.props, o.props), "object-key-init"),
        slots: cc11001100_hook("slots", ye(ye({}, a.slots), o.slots), "object-key-init")
      }, "assign") : r[n] = cc11001100_hook("r[n]", a, "assign") : r[n] = cc11001100_hook("r[n]", o, "assign");
    }), r;
  }
  function me(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return be.apply(this, arguments);
  }
  function be() {
    return (be = cc11001100_hook("be", o()(u.a.mark(function e(t, r) {
      var n, o, a;
      return u.a.wrap(function e(i) {
        for (;;) switch (i.prev = cc11001100_hook("i.prev", i.next, "assign")) {
          case 0:
            return n = cc11001100_hook("n", c()(t.packages), "assign"), o = cc11001100_hook("o", c()(t.components), "assign"), a = cc11001100_hook("a", {}, "assign"), i.next = cc11001100_hook("i.next", 5, "assign"), ge(n, o, a, t, r);
          case 5:
            return i.abrupt("return", {
              packages: cc11001100_hook("packages", n, "object-key-init"),
              components: cc11001100_hook("components", o, "object-key-init"),
              schema: cc11001100_hook("schema", t.schema, "object-key-init")
            });
          case 6:
          case "end":
            return i.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  function ge(e, t, r, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return we.apply(this, arguments);
  }
  function we() {
    return (we = cc11001100_hook("we", o()(u.a.mark(function e(t, r, n, a) {
      var c,
        i,
        s = cc11001100_hook("s", arguments, "var-init");
      return u.a.wrap(function e(p) {
        for (;;) switch (p.prev = cc11001100_hook("p.prev", p.next, "assign")) {
          case 0:
            return c = cc11001100_hook("c", s.length > 4 && void 0 !== s[4] ? s[4] : ce.Prod, "assign"), i = cc11001100_hook("i", a.components.filter(function (e) {
              var t = cc11001100_hook("t", e.componentType, "var-init"),
                r = cc11001100_hook("r", e.componentName, "var-init");
              return "template" === t && !n[r];
            }).map(function () {
              var e = cc11001100_hook("e", o()(u.a.mark(function e(o) {
                var i, s, p, f, l, d;
                return u.a.wrap(function e(u) {
                  for (;;) switch (u.prev = cc11001100_hook("u.prev", u.next, "assign")) {
                    case 0:
                      if (i = cc11001100_hook("i", o.componentName, "assign"), s = cc11001100_hook("s", o.package, "assign"), p = cc11001100_hook("p", s.name, "assign"), f = cc11001100_hook("f", s.version, "assign"), !(l = cc11001100_hook("l", a.packages.find(function (e) {
                        return e.name === p && (!f || e.version === f);
                      }), "assign")) || "json" !== l.type) {
                        u.next = cc11001100_hook("u.next", 12, "assign");
                        break;
                      }
                      return u.next = cc11001100_hook("u.next", 6, "assign"), me.loadTemplate(l, c);
                    case 6:
                      return d = cc11001100_hook("d", u.sent, "assign"), n[i] = cc11001100_hook("n[i]", d.schema, "assign"), d.packages.forEach(function (e) {
                        t.find(function (t) {
                          var r = cc11001100_hook("r", t.name, "var-init"),
                            n = cc11001100_hook("n", t.version, "var-init");
                          return e.name === r && e.version === n;
                        }) || t.push(e);
                      }), d.components.forEach(function (e) {
                        r.find(function (t) {
                          var r = cc11001100_hook("r", t.componentName, "var-init");
                          return e.componentName === r;
                        }) || r.push(e);
                      }), u.next = cc11001100_hook("u.next", 12, "assign"), ge(t, r, n, d, c);
                    case 12:
                    case "end":
                      return u.stop();
                  }
                }, e);
              })), "var-init");
              return function (t) {
                return e.apply(this, arguments);
              };
            }()), "assign"), p.next = cc11001100_hook("p.next", 4, "assign"), Promise.all(i);
          case 4:
            Oe(a.schema, n);
          case 5:
          case "end":
            return p.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  function Oe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", t[e.componentName], "var-init"),
      n = cc11001100_hook("n", e.props || {}, "var-init");
    if (r) e.shadowChildren = cc11001100_hook("e.shadowChildren", [r], "assign"), Object.keys(n).forEach(function (e) {
      var r,
        o = cc11001100_hook("o", n[e], "var-init"),
        a,
        c,
        i;
      Array.isArray(null == o || null === (r = cc11001100_hook("r", o.slots, "assign")) || void 0 === r ? void 0 : r.default) && (null == o || null === (c = cc11001100_hook("c", o.slots, "assign")) || void 0 === c ? void 0 : c.default).forEach(function (e) {
        e.node && Oe(e.node, t);
      });
    });else {
      var o = cc11001100_hook("o", e.children, "var-init");
      o && Array.isArray(o) && o.forEach(function (e) {
        Oe(e, t);
      });
    }
  }
  fe.nativeFetchExactData = cc11001100_hook("fe.nativeFetchExactData", C, "assign"), fe.nativeFetchDeliveryData = cc11001100_hook("fe.nativeFetchDeliveryData", A, "assign"), function (e) {
    e.Prod = cc11001100_hook("e.Prod", "prod", "assign"), e.Grey = cc11001100_hook("e.Grey", "grey", "assign"), e.Pre = cc11001100_hook("e.Pre", "pre", "assign");
  }(ce || (ce = cc11001100_hook("ce", {}, "assign"))), me.loadTemplate = cc11001100_hook("me.loadTemplate", le, "assign");
  var je = cc11001100_hook("je", r(4), "var-init"),
    xe = cc11001100_hook("xe", r.n(je), "var-init"),
    Ee = function e(t) {
      var r = cc11001100_hook("r", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", "var-init");
      if (!r) return t;
      if (void 0 !== t[r]) return t[r];
      var n = cc11001100_hook("n", r.split("."), "var-init"),
        o = cc11001100_hook("o", xe()(n, 1), "var-init"),
        a = cc11001100_hook("a", o[0], "var-init"),
        c = cc11001100_hook("c", r.slice(a.length + 1), "var-init");
      return void 0 !== (null == t ? void 0 : t[a]) ? c ? Ee(t[a], c) : t[a] : void 0;
    },
    Pe = function e(t, r) {
      var n = cc11001100_hook("n", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", "var-init"),
        o = cc11001100_hook("o", {}, "var-init");
      return Object.keys(t).forEach(function (e) {
        var a = cc11001100_hook("a", n ? "".concat(n, ".").concat(e) : "".concat(e), "var-init"),
          c;
        if (!1 !== Ee(r, a)) {
          var i = cc11001100_hook("i", t[e], "var-init"),
            u;
          if ("Object" === function e(t) {
            return Object.prototype.toString.call(t).slice(8, -1);
          }(i)) {
            var s = cc11001100_hook("s", Pe(i, r, a), "var-init");
            o[e] = cc11001100_hook("o[e]", s, "assign");
          } else o[e] = cc11001100_hook("o[e]", i, "assign");
        }
      }), o;
    },
    _e = cc11001100_hook("_e", ["children", "__schema", "__renderComponent", "__renderChildren", "__onRef"], "var-init"),
    ke;
  function Se(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", {}, "var-init");
    if (e) {
      var n = cc11001100_hook("n", {
        schema: cc11001100_hook("schema", e.__schema, "object-key-init"),
        renderComponent: cc11001100_hook("renderComponent", e.__renderComponent, "object-key-init"),
        renderChildren: cc11001100_hook("renderChildren", e.__renderChildren, "object-key-init")
      }, "var-init");
      Object.keys(e).forEach(function (o) {
        if (-1 === _e.indexOf(o)) {
          var a = cc11001100_hook("a", Ce(e[o], o, t, n), "var-init");
          void 0 !== a && (r[o] = cc11001100_hook("r[o]", a, "assign"));
        } else r[o] = cc11001100_hook("r[o]", e[o], "assign");
      });
    }
    return r;
  }
  function Ce(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", "var-init"),
      r = cc11001100_hook("r", arguments.length > 2 ? arguments[2] : void 0, "var-init"),
      n = cc11001100_hook("n", arguments.length > 3 ? arguments[3] : void 0, "var-init");
    if (e) {
      if (Array.isArray(e)) return e.map(function (e, o) {
        return Ce(e, "".concat(t, "[").concat(o, "]"), r, n);
      });
      if ("object" === v()(e)) {
        if (e.__type) return r.add(t, e.__type, e.value, n);
        var o = cc11001100_hook("o", {}, "var-init");
        return Object.keys(e).forEach(function (a) {
          var c = cc11001100_hook("c", Ce(e[a], t ? t + "." + a : a, r, n), "var-init");
          void 0 !== c && (o[a] = cc11001100_hook("o[a]", c, "assign"));
        }), o;
      }
    }
    return e;
  }
  function Te(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function Ae(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? Te(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function De(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init");
    Ie(e, t, {}, r);
  }
  function Ie(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init"),
      n = cc11001100_hook("n", arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, "var-init");
    if ("template" === e.type) {
      n.containTemplateNode && t.enter(e);
      var o = cc11001100_hook("o", e.shadowChildren, "var-init"),
        a = cc11001100_hook("a", e.props, "var-init");
      if (a && Object.keys(a).forEach(function (e) {
        var o = cc11001100_hook("o", a[e], "var-init");
        o.slots && Object.keys(o.slots).forEach(function (e) {
          o.slots[e] = cc11001100_hook("o.slots[e]", o.slots[e].map(function (e) {
            if ("node" === e.type) {
              var o = cc11001100_hook("o", e.node, "var-init");
              if (o.exportId) {
                var a = cc11001100_hook("a", r.templateProps ? r.templateProps[o.exportId] : null, "var-init");
                a && (e = cc11001100_hook("e", {
                  type: cc11001100_hook("type", "node", "object-key-init"),
                  node: cc11001100_hook("node", Ae(Ae({}, o), {}, {
                    props: cc11001100_hook("props", K(o.props, a.props), "object-key-init")
                  }), "object-key-init")
                }, "assign"));
              }
              n.pathType === ke.PhysicalTree && (t.enter(e.node), Ie(e.node, t, r, n));
            }
            return e;
          }), "assign");
        }), o.props && n.pathType === ke.PhysicalTree && Object.keys(o.props).forEach(function (e) {
          Ne(o.props[e], t, r, n);
        });
      }), o && Array.isArray(o)) {
        var c = cc11001100_hook("c", ve(r.templateProps, a), "var-init");
        o.forEach(function (e) {
          Ie(e, t, {
            templateProps: cc11001100_hook("templateProps", c, "object-key-init")
          }, n);
        });
      }
    } else {
      var i = cc11001100_hook("i", e, "var-init"),
        u = cc11001100_hook("u", i.props, "var-init"),
        s = cc11001100_hook("s", i.children, "var-init"),
        p = cc11001100_hook("p", i.exportId, "var-init"),
        f = cc11001100_hook("f", r.templateProps && p ? r.templateProps[p] : null, "var-init");
      if (f) {
        if (null != f && f.isRemove) return;
        if (u = cc11001100_hook("u", K(u, f.props), "assign"), f.slots && f.slots.default && n.pathType !== ke.PhysicalTree) {
          var l = cc11001100_hook("l", {}, "var-init");
          s && Array.isArray(s) && s.forEach(function (e) {
            e.id && (l[e.id] = cc11001100_hook("l[e.id]", e, "assign"));
          }), s = cc11001100_hook("s", f.slots.default.map(function (e) {
            return "node" === e.type ? e.node : "placeholder" === e.type ? l[e.id] : void 0;
          }).filter(function (e) {
            return !!e;
          }), "assign");
        }
      }
      t.enter(Ae(Ae({}, i), {}, {
        props: cc11001100_hook("props", u, "object-key-init"),
        children: cc11001100_hook("children", s, "object-key-init")
      })), n.pathType === ke.PhysicalTree ? i.props && Object.keys(i.props).forEach(function (e) {
        Ne(i.props[e], t, r, n);
      }) : u && Object.keys(u).forEach(function (e) {
        Ne(u[e], t, r, n);
      }), s && Array.isArray(s) && s.forEach(function (e) {
        Ie(e, t, r, n);
      });
    }
  }
  function Ne(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init"),
      n = cc11001100_hook("n", arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, "var-init");
    Array.isArray(e) ? e.forEach(function (e) {
      Ne(e, t, r, n);
    }) : e && "object" === v()(e) && ("slot" === e.__type && e.value ? Array.isArray(e.value) ? e.value.forEach(function (e) {
      Ie(e, t, r, n);
    }) : Ie(e.value, t, r, n) : Object.keys(e).forEach(function (o) {
      Ne(e[o], t, r, n);
    }));
  }
  function Me(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return De(e, {
      enter: function e(r) {
        t = cc11001100_hook("t", [].concat(c()(t), c()(Re(r.props))), "assign");
      }
    }, {}), t;
  }
  function Re(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return Se(e, {
      add: function e(r, n, o) {
        "model" === n && t.push(o);
      }
    }), t;
  }
  !function (e) {
    e.LogicalTree = cc11001100_hook("e.LogicalTree", "logical-tree", "assign"), e.PhysicalTree = cc11001100_hook("e.PhysicalTree", "physical-tree", "assign");
  }(ke || (ke = cc11001100_hook("ke", {}, "assign")));
  var Le = function e(t) {
      return crypto.getRandomValues(new Uint8Array(t));
    },
    $e = function e(t, r, n) {
      var o = cc11001100_hook("o", (2 << Math.log(t.length - 1) / Math.LN2) - 1, "var-init"),
        a = cc11001100_hook("a", -~(1.6 * o * r / t.length), "var-init");
      return function () {
        for (var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r, "var-init"), c = cc11001100_hook("c", "", "var-init");;) for (var i = cc11001100_hook("i", n(a), "var-init"), u = cc11001100_hook("u", a, "var-init"); u--;) if ((c += cc11001100_hook("c", t[i[u] & o] || "", "assign")).length === e) return c;
      };
    },
    Ue = function e(t) {
      var r = cc11001100_hook("r", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21, "var-init");
      return $e(t, r, Le);
    },
    Fe = function e() {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21, "var-init");
      return crypto.getRandomValues(new Uint8Array(t)).reduce(function (e, t) {
        return e += cc11001100_hook("e", (t &= cc11001100_hook("t", 63, "assign")) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_", "assign");
      }, "");
    },
    qe;
  function Ge() {
    return qe || (qe = cc11001100_hook("qe", Fe(), "assign")), qe;
  }
  function Je(e) {
    cc11001100_hook("e", e, "function-parameter");
    return ze.apply(this, arguments);
  }
  function ze() {
    return (ze = cc11001100_hook("ze", o()(u.a.mark(function e(t) {
      var r, n, o, a, c;
      return u.a.wrap(function e(i) {
        for (;;) switch (i.prev = cc11001100_hook("i.prev", i.next, "assign")) {
          case 0:
            return r = cc11001100_hook("r", "https://www.aliyun.com/lowcode-static-service", "assign"), n = cc11001100_hook("n", !1, "assign"), "object" === ("undefined" == typeof location ? "undefined" : v()(location)) && (r = cc11001100_hook("r", location.href, "assign"), location.search && (o = cc11001100_hook("o", {}, "assign"), location.search.replace(/^\?/, "").split("&").forEach(function (e) {
              var t = cc11001100_hook("t", e.trim().split("="), "var-init"),
                r = cc11001100_hook("r", xe()(t, 2), "var-init"),
                n = cc11001100_hook("n", r[0], "var-init"),
                a = cc11001100_hook("a", r[1], "var-init");
              o[n] = cc11001100_hook("o[n]", a, "assign");
            }), o.isPreview && (n = cc11001100_hook("n", !0, "assign")))), i.next = cc11001100_hook("i.next", 5, "assign"), j.post("https://page.aliyun.com/delivery/plan/list?resourceId=".concat(t.map(function (e) {
              var t;
              return e.resourceId;
            }).join(",")), {
              contentType: cc11001100_hook("contentType", "form", "object-key-init"),
              headers: {
                Referer: cc11001100_hook("Referer", r, "object-key-init")
              },
              includeCookie: cc11001100_hook("includeCookie", !0, "object-key-init"),
              body: {
                adPlanQueryParam: cc11001100_hook("adPlanQueryParam", JSON.stringify({
                  adZone: {
                    positionList: cc11001100_hook("positionList", t.map(function (e) {
                      var t = cc11001100_hook("t", e.resourceId, "var-init"),
                        r = cc11001100_hook("r", e.maxCount, "var-init"),
                        o = cc11001100_hook("o", {
                          positionId: cc11001100_hook("positionId", t, "object-key-init")
                        }, "var-init");
                      return r && (o.contentCount = cc11001100_hook("o.contentCount", r, "assign")), n && (o.preview = cc11001100_hook("o.preview", !0, "assign")), o;
                    }), "object-key-init")
                  },
                  requestId: cc11001100_hook("requestId", Ge(), "object-key-init"),
                  referrer: cc11001100_hook("referrer", r, "object-key-init"),
                  returnAll: cc11001100_hook("returnAll", !1, "object-key-init")
                }), "object-key-init")
              }
            });
          case 5:
            if (200 !== (a = cc11001100_hook("a", i.sent, "assign")).status) {
              i.next = cc11001100_hook("i.next", 10, "assign");
              break;
            }
            if ("200" !== a.data.code || !a.data.data.success) {
              i.next = cc11001100_hook("i.next", 10, "assign");
              break;
            }
            return c = cc11001100_hook("c", a.data.data.positionPlanMap, "assign"), i.abrupt("return", t.map(function (e) {
              var t = cc11001100_hook("t", e.resourceId, "var-init"),
                r = cc11001100_hook("r", c[t], "var-init");
              return r ? at(r) : (console.error("\u8d44\u6e90\u4f4d ".concat(t, " \u6570\u636e\u83b7\u53d6\u5931\u8d25")), null);
            }));
          case 10:
            throw new Error(a.data.msg);
          case 11:
          case "end":
            return i.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  function Be(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function Ye(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? Be(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var He = cc11001100_hook("He", {}, "var-init");
  function Ve() {
    return He;
  }
  function Qe(e) {
    cc11001100_hook("e", e, "function-parameter");
    Object.keys(e).forEach(function (t) {
      He[t] = cc11001100_hook("He[t]", e[t], "assign");
    });
  }
  var Ke = cc11001100_hook("Ke", {}, "var-init");
  function We() {
    Ke = cc11001100_hook("Ke", {}, "assign");
  }
  var Xe = cc11001100_hook("Xe", new Map(), "var-init"),
    Ze = cc11001100_hook("Ze", null, "var-init");
  function et(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.resourceId, "var-init");
    return He[t];
  }
  function tt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return rt.apply(this, arguments);
  }
  function rt() {
    return (rt = cc11001100_hook("rt", o()(u.a.mark(function e(t) {
      var r,
        n = cc11001100_hook("n", arguments, "var-init");
      return u.a.wrap(function e(a) {
        for (;;) switch (a.prev = cc11001100_hook("a.prev", a.next, "assign")) {
          case 0:
            if (r = cc11001100_hook("r", !(n.length > 1 && void 0 !== n[1]) || n[1], "assign"), !Ke[t.resourceId]) {
              a.next = cc11001100_hook("a.next", 3, "assign");
              break;
            }
            return a.abrupt("return", Promise.resolve(Ke[t.resourceId]));
          case 3:
            if (!Xe.has(t.resourceId)) {
              a.next = cc11001100_hook("a.next", 7, "assign");
              break;
            }
            return a.next = cc11001100_hook("a.next", 6, "assign"), Xe.get(t.resourceId);
          case 6:
            return a.abrupt("return", Ke[t.resourceId]);
          case 7:
            return Ze ? Ze.queries.find(function (e) {
              var r = cc11001100_hook("r", e.resourceId, "var-init");
              return t.resourceId === r;
            }) || Ze.queries.push(t) : Ze = cc11001100_hook("Ze", {
              queries: cc11001100_hook("queries", [t], "object-key-init"),
              request: cc11001100_hook("request", o()(u.a.mark(function e() {
                var t, n, a;
                return u.a.wrap(function e(c) {
                  for (;;) switch (c.prev = cc11001100_hook("c.prev", c.next, "assign")) {
                    case 0:
                      return c.next = cc11001100_hook("c.next", 2, "assign"), Promise.resolve();
                    case 2:
                      if (Ze) {
                        c.next = cc11001100_hook("c.next", 4, "assign");
                        break;
                      }
                      throw new Error("");
                    case 4:
                      return t = cc11001100_hook("t", Ze.queries, "assign"), n = cc11001100_hook("n", t.map(function (e) {
                        var t = cc11001100_hook("t", e.resourceId, "var-init"),
                          r = cc11001100_hook("r", e.dataType, "var-init"),
                          n = cc11001100_hook("n", e.maxCount, "var-init"),
                          o = cc11001100_hook("o", {
                            resourceId: cc11001100_hook("resourceId", t, "object-key-init")
                          }, "var-init");
                        return "object" === r ? o.maxCount = cc11001100_hook("o.maxCount", 1, "assign") : "array" === r && n && (o.maxCount = cc11001100_hook("o.maxCount", n, "assign")), o;
                      }), "assign"), Ze = cc11001100_hook("Ze", null, "assign"), a = cc11001100_hook("a", o()(u.a.mark(function e() {
                        var a, c, i, s;
                        return u.a.wrap(function e(p) {
                          for (;;) switch (p.prev = cc11001100_hook("p.prev", p.next, "assign")) {
                            case 0:
                              return p.prev = cc11001100_hook("p.prev", 0, "assign"), p.next = cc11001100_hook("p.next", 3, "assign"), tt.nativeBatchFetchDeliveryData(n);
                            case 3:
                              if (a = cc11001100_hook("a", p.sent, "assign")) {
                                p.next = cc11001100_hook("p.next", 6, "assign");
                                break;
                              }
                              throw new Error("\u8bf7\u6c42\u8d44\u6e90\u4f4d ".concat(n.map(function (e) {
                                var t;
                                return e.resourceId;
                              }).join("\u3001"), " \u6570\u636e\u9519\u8bef"));
                            case 6:
                              if (!(c = cc11001100_hook("c", t.filter(function (e, t) {
                                var r = cc11001100_hook("r", a[t], "var-init");
                                if (r) Ke[e.resourceId] = cc11001100_hook("Ke[e.resourceId]", ct(r, e), "assign");else if (!e.supportOffline) return !0;
                                return !1;
                              }), "assign")).length) {
                                p.next = cc11001100_hook("p.next", 17, "assign");
                                break;
                              }
                              return i = cc11001100_hook("i", c.map(function () {
                                var e = cc11001100_hook("e", o()(u.a.mark(function e(t) {
                                  var r, n;
                                  return u.a.wrap(function e(o) {
                                    for (;;) switch (o.prev = cc11001100_hook("o.prev", o.next, "assign")) {
                                      case 0:
                                        return o.next = cc11001100_hook("o.next", 2, "assign"), nt(t.resourceId);
                                      case 2:
                                        r = cc11001100_hook("r", o.sent, "assign"), n = cc11001100_hook("n", at([r]), "assign"), Ke[t.resourceId] = cc11001100_hook("Ke[t.resourceId]", ct(n, t), "assign");
                                      case 5:
                                      case "end":
                                        return o.stop();
                                    }
                                  }, e);
                                })), "var-init");
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              }()), "assign"), p.prev = cc11001100_hook("p.prev", 9, "assign"), p.next = cc11001100_hook("p.next", 12, "assign"), Promise.all(i);
                            case 12:
                              p.next = cc11001100_hook("p.next", 17, "assign");
                              break;
                            case 14:
                              p.prev = cc11001100_hook("p.prev", 14, "assign"), p.t0 = cc11001100_hook("p.t0", p.catch(9), "assign"), console.log(p.t0);
                            case 17:
                              p.next = cc11001100_hook("p.next", 31, "assign");
                              break;
                            case 19:
                              if (p.prev = cc11001100_hook("p.prev", 19, "assign"), p.t1 = cc11001100_hook("p.t1", p.catch(0), "assign"), !r) {
                                p.next = cc11001100_hook("p.next", 31, "assign");
                                break;
                              }
                              return s = cc11001100_hook("s", t.map(function () {
                                var e = cc11001100_hook("e", o()(u.a.mark(function e(t) {
                                  var r, n;
                                  return u.a.wrap(function e(o) {
                                    for (;;) switch (o.prev = cc11001100_hook("o.prev", o.next, "assign")) {
                                      case 0:
                                        return o.next = cc11001100_hook("o.next", 2, "assign"), nt(t.resourceId);
                                      case 2:
                                        r = cc11001100_hook("r", o.sent, "assign"), n = cc11001100_hook("n", at([r]), "assign"), Ke[t.resourceId] = cc11001100_hook("Ke[t.resourceId]", ct(n, t), "assign");
                                      case 5:
                                      case "end":
                                        return o.stop();
                                    }
                                  }, e);
                                })), "var-init");
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              }()), "assign"), p.prev = cc11001100_hook("p.prev", 23, "assign"), p.next = cc11001100_hook("p.next", 26, "assign"), Promise.all(s);
                            case 26:
                              p.next = cc11001100_hook("p.next", 31, "assign");
                              break;
                            case 28:
                              p.prev = cc11001100_hook("p.prev", 28, "assign"), p.t2 = cc11001100_hook("p.t2", p.catch(23), "assign"), console.log(p.t2);
                            case 31:
                            case "end":
                              return p.stop();
                          }
                        }, e, null, [[0, 19], [9, 14], [23, 28]]);
                      }))(), "assign"), n.forEach(function (e) {
                        var t = cc11001100_hook("t", e.resourceId, "var-init");
                        Xe.set(t, a);
                      }), c.next = cc11001100_hook("c.next", 11, "assign"), a;
                    case 11:
                      n.forEach(function (e) {
                        var t = cc11001100_hook("t", e.resourceId, "var-init");
                        Xe.delete(t);
                      });
                    case 12:
                    case "end":
                      return c.stop();
                  }
                }, e);
              }))(), "object-key-init")
            }, "assign"), a.next = cc11001100_hook("a.next", 10, "assign"), Ze.request;
          case 10:
            return a.abrupt("return", Ke[t.resourceId]);
          case 11:
          case "end":
            return a.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  function nt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return ot.apply(this, arguments);
  }
  function ot() {
    return (ot = cc11001100_hook("ot", o()(u.a.mark(function e(t) {
      var r, n, o, a;
      return u.a.wrap(function e(c) {
        for (;;) switch (c.prev = cc11001100_hook("c.prev", c.next, "assign")) {
          case 0:
            return c.next = cc11001100_hook("c.next", 2, "assign"), j.get("https://alioth.alicdn.com/adPlan-default-position-".concat(t));
          case 2:
            if (200 !== (r = cc11001100_hook("r", c.sent, "assign")).status) {
              c.next = cc11001100_hook("c.next", 6, "assign");
              break;
            }
            return n = cc11001100_hook("n", r.data, "assign"), o = cc11001100_hook("o", n.planId, "assign"), a = cc11001100_hook("a", n.displayContent, "assign"), c.abrupt("return", {
              planId: cc11001100_hook("planId", o, "object-key-init"),
              defaultData: cc11001100_hook("defaultData", !0, "object-key-init"),
              priority: cc11001100_hook("priority", 0, "object-key-init"),
              displayContent: cc11001100_hook("displayContent", a, "object-key-init")
            });
          case 6:
            throw new Error("");
          case 7:
          case "end":
            return c.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  function at(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    return e.map(function (e) {
      var t = cc11001100_hook("t", e.planId, "var-init"),
        r = cc11001100_hook("r", e.defaultData, "var-init"),
        n = cc11001100_hook("n", e.priority, "var-init"),
        o = cc11001100_hook("o", e.displayContent, "var-init"),
        a;
      return {
        planId: cc11001100_hook("planId", t, "object-key-init"),
        isDefaultData: cc11001100_hook("isDefaultData", r, "object-key-init"),
        priority: cc11001100_hook("priority", n, "object-key-init"),
        infoList: cc11001100_hook("infoList", (("string" == typeof o ? JSON.parse(o) : o) || {}).infoList, "object-key-init")
      };
    });
  }
  function ct(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", t.dataType, "var-init"),
      n = cc11001100_hook("n", t.propertyMap, "var-init"),
      o;
    t.ignoreDefaultData && (e = cc11001100_hook("e", e.filter(function (e) {
      return !e.isDefaultData;
    }), "assign"));
    var a = cc11001100_hook("a", (e = cc11001100_hook("e", e.sort(function (e, t) {
      return t.priority - e.priority;
    }), "assign"))[0], "var-init");
    if (!a) return null;
    switch (r) {
      case "object":
        var c = cc11001100_hook("c", (a.infoList || [])[0], "var-init");
        if (!c) return;
        return Ye(Ye({}, z(c, n)), {}, {
          __scm: cc11001100_hook("__scm", c.scm, "object-key-init")
        });
      case "array":
        return (a.infoList || []).map(function (e) {
          return Ye(Ye({}, z(e, n)), {}, {
            __scm: cc11001100_hook("__scm", e.scm, "object-key-init")
          });
        });
    }
  }
  function it(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return De(e, {
      enter: function e(r) {
        t = cc11001100_hook("t", [].concat(c()(t), c()(ut(r.props))), "assign");
      }
    }, {}), t;
  }
  function ut(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return Se(e, {
      add: function e(r, n, o) {
        "delivery" === n && t.push(o);
      }
    }), t;
  }
  tt.nativeBatchFetchDeliveryData = cc11001100_hook("tt.nativeBatchFetchDeliveryData", Je, "assign");
  var st = cc11001100_hook("st", r(7), "var-init"),
    pt = cc11001100_hook("pt", r.n(st), "var-init"),
    ft = cc11001100_hook("ft", r(8), "var-init"),
    lt = cc11001100_hook("lt", r.n(ft), "var-init");
  function dt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"], "var-init");
    if (!r) {
      if (Array.isArray(e) || (r = cc11001100_hook("r", ht(e), "assign")) || t && e && "number" == typeof e.length) {
        r && (e = cc11001100_hook("e", r, "assign"));
        var n = cc11001100_hook("n", 0, "var-init"),
          o = function e() {};
        return {
          s: cc11001100_hook("s", o, "object-key-init"),
          n: function t() {
            return n >= e.length ? {
              done: cc11001100_hook("done", !0, "object-key-init")
            } : {
              done: cc11001100_hook("done", !1, "object-key-init"),
              value: cc11001100_hook("value", e[n++], "object-key-init")
            };
          },
          e: function e(t) {
            throw t;
          },
          f: cc11001100_hook("f", o, "object-key-init")
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a,
      c = cc11001100_hook("c", !0, "var-init"),
      i = cc11001100_hook("i", !1, "var-init");
    return {
      s: function t() {
        r = cc11001100_hook("r", r.call(e), "assign");
      },
      n: function e() {
        var t = cc11001100_hook("t", r.next(), "var-init");
        return c = cc11001100_hook("c", t.done, "assign"), t;
      },
      e: function e(t) {
        i = cc11001100_hook("i", !0, "assign"), a = cc11001100_hook("a", t, "assign");
      },
      f: function e() {
        try {
          c || null == r.return || r.return();
        } finally {
          if (i) throw a;
        }
      }
    };
  }
  function ht(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e) {
      if ("string" == typeof e) return yt(e, t);
      var r = cc11001100_hook("r", {}.toString.call(e).slice(8, -1), "var-init");
      return "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign")), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yt(e, t) : void 0;
    }
  }
  function yt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));
    for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");
    return n;
  }
  var vt,
    mt = cc11001100_hook("mt", new (function () {
      function e() {
        pt()(this, e), h()(this, "componentTypes", void 0), this.componentTypes = cc11001100_hook("this.componentTypes", [], "assign");
      }
      return lt()(e, [{
        key: cc11001100_hook("key", "register", "object-key-init"),
        value: function e(t) {
          this.componentTypes.push(t);
        }
      }, {
        key: cc11001100_hook("key", "getAssets", "object-key-init"),
        value: function e(t) {
          var r;
          return [];
        }
      }, {
        key: cc11001100_hook("key", "getProvider", "object-key-init"),
        value: function e(t) {
          var r = cc11001100_hook("r", this.componentTypes.map(function (e) {
            var t;
            return e.provider;
          }).filter(function (e) {
            return !!e;
          }), "var-init");
          return function (e) {
            var t = cc11001100_hook("t", e.children, "var-init"),
              n = cc11001100_hook("n", dt(r), "var-init"),
              o;
            try {
              for (n.s(); !(o = cc11001100_hook("o", n.n(), "assign")).done;) {
                var a = cc11001100_hook("a", o.value, "var-init");
                t = cc11001100_hook("t", Object(f.createElement)(a, null, t), "assign");
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }
            return t || null;
          };
        }
      }, {
        key: cc11001100_hook("key", "buildComponents", "object-key-init"),
        value: function e(t, r) {
          var n = cc11001100_hook("n", this, "var-init"),
            o = cc11001100_hook("o", {}, "var-init");
          return Object.keys(t).forEach(function (e) {
            var a = cc11001100_hook("a", t[e], "var-init"),
              c = cc11001100_hook("c", n.componentTypes.filter(function (e) {
                var t = cc11001100_hook("t", e.test, "var-init"),
                  r = cc11001100_hook("r", e.componentFactory, "var-init");
                return t(a) && r;
              }).map(function (e) {
                var t;
                return e.componentFactory;
              }), "var-init");
            if (c.length) o[e] = cc11001100_hook("o[e]", c.reduce(function (e, t) {
              return t(a, r, e);
            }, void 0), "assign");else {
              var i = cc11001100_hook("i", a.package.name, "var-init"),
                u = cc11001100_hook("u", r[i], "var-init"),
                s = cc11001100_hook("s", window[u], "var-init"),
                p;
              a.package.destructuring ? a.package.exportName && (p = cc11001100_hook("p", s[a.package.exportName], "assign")) : p = cc11001100_hook("p", s, "assign"), p && (a.package.subName ? o[e] = cc11001100_hook("o[e]", p[a.package.subName], "assign") : o[e] = cc11001100_hook("o[e]", p, "assign"));
            }
          }), o;
        }
      }]);
    }())(), "var-init"),
    bt,
    gt,
    wt,
    Ot;
  function jt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "i18n" === e.type;
  }
  function xt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "object" == typeof e;
  }
  function Et(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "package" in e;
  }
  function Pt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return !Et(e);
  }
  function _t(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "string" == typeof e;
  }
  function kt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && e.componentName;
  }
  function St(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && e.componentsTree;
  }
  function Ct(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("object" != typeof e) return !1;
    var t = cc11001100_hook("t", Object.getPrototypeOf(e), "var-init");
    return t === Object.prototype || null === t || null === Object.getPrototypeOf(t);
  }
  function Tt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Ct(e) && !jt(e);
  }
  function At(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "JSExpression" === e.type;
  }
  function Dt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "object" == typeof e && e && "JSFunction" === e.type;
  }
  function It(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "JSSlot" === e.type;
  }
  function Nt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "JSBlock" === e.type;
  }
  function Mt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && e.prototype && (e.prototype.isReactComponent || e.prototype instanceof f.Component);
  }
  function Rt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && (Mt(e) || "function" == typeof e);
  }
  function Lt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "object" == typeof e && "componentName" in e && !$t(e);
  }
  function $t(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && (Object(f.isValidElement)(e) || Rt(e));
  }
  function Ut(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && "function" == typeof e && !Mt(e);
  }
  !function (e) {
    e.Initial = cc11001100_hook("e.Initial", "init", "assign"), e.Loading = cc11001100_hook("e.Loading", "loading", "assign"), e.Loaded = cc11001100_hook("e.Loaded", "loaded", "assign"), e.Error = cc11001100_hook("e.Error", "error", "assign");
  }(bt || (bt = cc11001100_hook("bt", {}, "assign"))), function (e) {
    e.ADDED = cc11001100_hook("e.ADDED", "added", "assign"), e.DELETED = cc11001100_hook("e.DELETED", "deleted", "assign"), e.MODIFIED = cc11001100_hook("e.MODIFIED", "modified", "assign"), e.COMPOSITE = cc11001100_hook("e.COMPOSITE", "composite", "assign");
  }(gt || (gt = cc11001100_hook("gt", {}, "assign"))), function (e) {
    e.Render = cc11001100_hook("e.Render", "render", "assign"), e.Serilize = cc11001100_hook("e.Serilize", "serilize", "assign"), e.Save = cc11001100_hook("e.Save", "save", "assign"), e.Clone = cc11001100_hook("e.Clone", "clone", "assign"), e.Init = cc11001100_hook("e.Init", "init", "assign"), e.Upgrade = cc11001100_hook("e.Upgrade", "upgrade", "assign");
  }(wt || (wt = cc11001100_hook("wt", {}, "assign"))), function (e) {
    e[e.Environment = cc11001100_hook("e.Environment", 1, "assign")] = cc11001100_hook("e[e.Environment = 1]", "Environment", "assign"), e[e.Library = cc11001100_hook("e.Library", 2, "assign")] = cc11001100_hook("e[e.Library = 2]", "Library", "assign"), e[e.Theme = cc11001100_hook("e.Theme", 3, "assign")] = cc11001100_hook("e[e.Theme = 3]", "Theme", "assign"), e[e.Runtime = cc11001100_hook("e.Runtime", 4, "assign")] = cc11001100_hook("e[e.Runtime = 4]", "Runtime", "assign"), e[e.Components = cc11001100_hook("e.Components", 5, "assign")] = cc11001100_hook("e[e.Components = 5]", "Components", "assign"), e[e.App = cc11001100_hook("e.App", 6, "assign")] = cc11001100_hook("e[e.App = 6]", "App", "assign");
  }(Ot || (Ot = cc11001100_hook("Ot", {}, "assign")));
  var Ft = cc11001100_hook("Ft", [Ot.Environment, Ot.Library, Ot.Theme, Ot.Runtime, Ot.Components, Ot.App], "var-init"),
    qt;
  !function (e) {
    e.JSUrl = cc11001100_hook("e.JSUrl", "jsUrl", "assign"), e.CSSUrl = cc11001100_hook("e.CSSUrl", "cssUrl", "assign"), e.CSSText = cc11001100_hook("e.CSSText", "cssText", "assign"), e.JSText = cc11001100_hook("e.JSText", "jsText", "assign"), e.Bundle = cc11001100_hook("e.Bundle", "bundle", "assign");
  }(qt || (qt = cc11001100_hook("qt", {}, "assign")));
  var Gt = cc11001100_hook("Gt", "node.prop.change", "var-init"),
    Jt = cc11001100_hook("Jt", "node.innerProp.change", "var-init"),
    zt = cc11001100_hook("zt", "node.edit.rerender.time", "var-init"),
    Bt = cc11001100_hook("Bt", [{
      type: cc11001100_hook("type", qt.CSSUrl, "object-key-init"),
      content: cc11001100_hook("content", "https://at.alicdn.com/t/font_1175572_qt0ubitzjhl.css", "object-key-init"),
      level: cc11001100_hook("level", Ot.Library, "object-key-init")
    }, {
      type: cc11001100_hook("type", qt.JSText, "object-key-init"),
      content: cc11001100_hook("content", "\n        window.__ALIYUN_EXPERIENCE_REACT__ = window.React;\n        window.__ALIYUN_EXPERIENCE_REACT_DOM__ = window.ReactDOM;\n      ".trim(), "object-key-init"),
      level: cc11001100_hook("level", Ot.Library, "object-key-init")
    }, {
      type: cc11001100_hook("type", qt.JSUrl, "object-key-init"),
      content: cc11001100_hook("content", "https://g.alicdn.com/??dawn/polyfill/2.0.0/js/index.js,aliyun/util/1.2.30/index.js,dawn/ace-element/0.0.60/index.js,dawn/user-tracker/2.0.59/js/index.js", "object-key-init"),
      level: cc11001100_hook("level", Ot.Library, "object-key-init")
    }], "var-init"),
    Yt = cc11001100_hook("Yt", r(10), "var-init"),
    Ht = cc11001100_hook("Ht", r.n(Yt), "var-init"),
    Vt = cc11001100_hook("Vt", r(9), "var-init"),
    Qt = cc11001100_hook("Qt", r.n(Vt), "var-init"),
    Kt = cc11001100_hook("Kt", r(19), "var-init"),
    Wt = cc11001100_hook("Wt", r.n(Kt), "var-init"),
    Xt = cc11001100_hook("Xt", r(11), "var-init"),
    Zt = cc11001100_hook("Zt", r.n(Xt), "var-init"),
    er;
  function tr(e) {
    cc11001100_hook("e", e, "function-parameter");
    e = cc11001100_hook("e", e || Object.create(null), "assign");
    var t = cc11001100_hook("t", Object.create(null), "var-init");
    return {
      on: function r(n, o) {
        var a = cc11001100_hook("a", this, "var-init");
        (e[n] || (e[n] = cc11001100_hook("e[n]", [], "assign"))).push(o), t[n] && t[n].splice(0).forEach(function (e) {
          return a.emit(n, e);
        });
      },
      off: function t(r, n) {
        e[r] && e[r].splice(e[r].indexOf(n) >>> 0, 1);
      },
      cacheEmit: function e(r, n) {
        (t[r] || (t[r] = cc11001100_hook("t[r]", [], "assign"))).push(n);
      },
      emit: function t(r, n) {
        e[r] ? (e[r] || []).slice().map(function (e) {
          e(n);
        }) : this.cacheEmit(r, n), (e["*"] || []).slice().map(function (e) {
          e(r, n);
        });
      }
    };
  }
  function rr(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function nr(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? rr(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function or(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return t = cc11001100_hook("t", Qt()(t), "assign"), Ht()(e, ar() ? Reflect.construct(t, r || [], Qt()(e).constructor) : t.apply(e, r));
  }
  function ar() {
    try {
      var e = cc11001100_hook("e", !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), "var-init");
    } catch (e) {}
    return (ar = cc11001100_hook("ar", function t() {
      return !!e;
    }, "assign"))();
  }
  function cr(e, t, r, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", Wt()(Qt()(1 & n ? e.prototype : e), t, r), "var-init");
    return 2 & n && "function" == typeof o ? function (e) {
      return o.apply(r, e);
    } : o;
  }
  function ir(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && e.prototype && (e.prototype.isReactComponent || e.prototype instanceof l.a.Component);
  }
  function ur(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.package.exportName, "var-init"),
      r = cc11001100_hook("r", window.$ACE_COMPONENT[t], "var-init");
    if (!ir(r)) return r;
    var n = cc11001100_hook("n", window.$ACE_COMPONENT_SERVICES[t], "var-init");
    return pr({
      name: cc11001100_hook("name", e.componentName, "object-key-init"),
      Component: cc11001100_hook("Component", r, "object-key-init"),
      Service: cc11001100_hook("Service", n, "object-key-init")
    });
  }
  var sr = cc11001100_hook("sr", {
    event: cc11001100_hook("event", tr(), "object-key-init")
  }, "var-init");
  function pr(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.name, "var-init"),
      r = cc11001100_hook("r", e.Component, "var-init"),
      n = cc11001100_hook("n", e.Service, "var-init"),
      o = cc11001100_hook("o", lt()(function e() {
        pt()(this, e);
      }), "var-init");
    h()(o, "Account", window.$ACE.Account), h()(o, "URL", window.$ACE.URL), h()(o, "Risk", window.$ACE.Risk), h()(o, "Time", window.$ACE.Time), h()(o, "Client", window.$ACE.Client), h()(o, "Tracker", window.$ACE.Tracker), h()(o, "Logger", window.$ACE.Logger), h()(o, "Store", window.$ACE.Store);
    var a = cc11001100_hook("a", function (e) {
      function t(e) {
        cc11001100_hook("e", e, "function-parameter");
        var r;
        pt()(this, t), r = cc11001100_hook("r", or(this, t, [e]), "assign");
        var a = cc11001100_hook("a", nr(nr({}, sr), {}, {
          moduleInstance: {
            spm: cc11001100_hook("spm", "", "object-key-init")
          },
          pageSchema: {
            props: cc11001100_hook("props", e, "object-key-init")
          }
        }), "var-init");
        return r.app = cc11001100_hook("r.app", a, "assign"), n && (Object.assign(n.prototype, {
          get: cc11001100_hook("get", window.$ACE.get, "object-key-init"),
          app: cc11001100_hook("app", a, "object-key-init"),
          helper: cc11001100_hook("helper", o, "object-key-init"),
          logger: cc11001100_hook("logger", window.$ACE.Logger, "object-key-init"),
          request: cc11001100_hook("request", window.$ACE.Request, "object-key-init")
        }), r.services = cc11001100_hook("r.services", new n(), "assign")), r.helper = cc11001100_hook("r.helper", o, "assign"), r.logger = cc11001100_hook("r.logger", window.$ACE.Logger, "assign"), r.request = cc11001100_hook("r.request", window.$ACE.Request, "assign"), r;
      }
      return Zt()(t, e), lt()(t, [{
        key: cc11001100_hook("key", "render", "object-key-init"),
        value: function e() {
          return cr(t, "render", this, 3)([]) || null;
        }
      }]);
    }(r), "var-init");
    return h()(a, "displayName", t), function (e) {
      return l.a.createElement(a, nr({
        _theme: cc11001100_hook("_theme", fr, "object-key-init")
      }, e));
    };
  }
  var fr = cc11001100_hook("fr", {
      t1: cc11001100_hook("t1", "#fff", "object-key-init"),
      t2: cc11001100_hook("t2", "#f4f4f4", "object-key-init"),
      t3: cc11001100_hook("t3", "#ededed", "object-key-init"),
      t4: cc11001100_hook("t4", "#d8d8d8", "object-key-init"),
      t5: cc11001100_hook("t5", "#b3b3b3", "object-key-init"),
      t6: cc11001100_hook("t6", "#999", "object-key-init"),
      t7: cc11001100_hook("t7", "#666", "object-key-init"),
      t8: cc11001100_hook("t8", "#3d3d3d", "object-key-init"),
      t9: cc11001100_hook("t9", "#181818", "object-key-init"),
      title: cc11001100_hook("title", "\u963f\u91cc\u4e91\u5b98\u7f51\u767d\u6a59\u4e3b\u9898", "object-key-init"),
      mode: cc11001100_hook("mode", "light", "object-key-init"),
      scene: cc11001100_hook("scene", "channel", "object-key-init"),
      c1: cc11001100_hook("c1", "#ff6a00", "object-key-init"),
      l1: cc11001100_hook("l1", "#fff0e5", "object-key-init"),
      l2: cc11001100_hook("l2", "#ffe1cc", "object-key-init"),
      l3: cc11001100_hook("l3", "#ffb580", "object-key-init"),
      l4: cc11001100_hook("l4", "#ff8833", "object-key-init"),
      d1: cc11001100_hook("d1", "#cc5500", "object-key-init"),
      d2: cc11001100_hook("d2", "#994000", "object-key-init"),
      d3: cc11001100_hook("d3", "#662a00", "object-key-init"),
      d4: cc11001100_hook("d4", "#4d2000", "object-key-init")
    }, "var-init"),
    lr,
    dr = cc11001100_hook("dr", {
      test: function e(t) {
        return "homon" === t.componentType;
      },
      assets: cc11001100_hook("assets", Bt, "object-key-init"),
      componentFactory: cc11001100_hook("componentFactory", ur, "object-key-init")
    }, "var-init"),
    hr = cc11001100_hook("hr", r(12), "var-init"),
    yr = cc11001100_hook("yr", r.n(hr), "var-init"),
    vr = cc11001100_hook("vr", Object(f.createContext)({
      base: cc11001100_hook("base", "", "object-key-init")
    }), "var-init");
  function mr(e) {
    cc11001100_hook("e", e, "function-parameter");
    return l.a.createElement(vr.Provider, {
      value: {
        base: cc11001100_hook("base", e.basePath || window.$BASE_URL || "", "object-key-init")
      }
    }, e.children);
  }
  var br = cc11001100_hook("br", ["children"], "var-init");
  function gr(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function wr(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? gr(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function Or(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (!r) throw new Error("");
    var n = cc11001100_hook("n", Er(e.props), "var-init"),
      o;
    return n ? function (e) {
      var t = cc11001100_hook("t", e.children, "var-init"),
        a = cc11001100_hook("a", yr()(e, br), "var-init");
      return l.a.createElement(vr.Consumer, null, xr(function (e, c) {
        return l.a.createElement(r, wr({}, wr(wr({}, a), {}, h()(h()({}, n.name, n.map ? n.map[e || "$"] : e), "on".concat(n.name.replace(/^\w/, function (e) {
          return e.toUpperCase();
        }), "Change"), function e(t) {
          n.map ? (o || (o = cc11001100_hook("o", new Map(), "assign"), Object.keys(n.map).forEach(function (e) {
            o.set(n.map[e], "$" === e ? "" : e);
          })), c(o.get(t))) : c(t);
        }))), t);
      }));
    } : r;
  }
  function jr(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.base, "var-init"),
      r = cc11001100_hook("r", e.render, "var-init"),
      n = cc11001100_hook("n", Object(f.useState)(location.pathname.replace(t, "").replace(/^\/+/, "").split("/")[0]), "var-init"),
      o = cc11001100_hook("o", xe()(n, 2), "var-init"),
      a = cc11001100_hook("a", o[0], "var-init"),
      c = cc11001100_hook("c", o[1], "var-init");
    return Object(f.useEffect)(function () {
      var e = function e() {
        var r = cc11001100_hook("r", location.pathname.replace(t, "").replace(/^\/+/, "").split("/")[0], "var-init");
        c(r);
      };
      return window.addEventListener("popstate", e), function () {
        window.removeEventListener("popstate", e);
      };
    }, [t]), l.a.createElement(vr.Provider, {
      value: {
        base: cc11001100_hook("base", a ? (t + "/" + a).replace(/\/+/g, "/") : t, "object-key-init")
      }
    }, l.a.createElement("div", {
      "data-base-url": cc11001100_hook("data-base-url", JSON.stringify(t), "object-key-init")
    }, r(a, function (e) {
      history.pushState({}, "", e ? (t + "/" + e).replace(/\/+/g, "/") : t || "/"), c(e);
    })));
  }
  function xr(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t) {
      var r = cc11001100_hook("r", t.base, "var-init");
      return l.a.createElement(jr, {
        base: cc11001100_hook("base", r, "object-key-init"),
        render: cc11001100_hook("render", e, "object-key-init")
      });
    };
  }
  function Er(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e) return null;
    var t = cc11001100_hook("t", Object.keys(e).find(function (t) {
      var r;
      return "route" === e[t]["x-format"];
    }), "var-init");
    if (t) {
      var r = cc11001100_hook("r", e[t]["x-format-options"], "var-init"),
        n;
      return r && (n = cc11001100_hook("n", r.map, "assign")), {
        name: cc11001100_hook("name", t, "object-key-init"),
        map: cc11001100_hook("map", n, "object-key-init")
      };
    }
    return null;
  }
  var Pr,
    _r = cc11001100_hook("_r", {
      test: function e(t) {
        return Object.keys(t.props || {}).some(function (e) {
          var r;
          return "route" === t.props[e]["x-format"];
        });
      },
      componentFactory: cc11001100_hook("componentFactory", Or, "object-key-init")
    }, "var-init");
  function kr(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function Sr(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? kr(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Cr = cc11001100_hook("Cr", new Map(), "var-init"),
    Tr = cc11001100_hook("Tr", function () {
      function e() {
        pt()(this, e), h()(this, "dataTypeProcessorInfos", void 0), this.dataTypeProcessorInfos = cc11001100_hook("this.dataTypeProcessorInfos", [], "assign");
      }
      return lt()(e, [{
        key: cc11001100_hook("key", "add", "object-key-init"),
        value: function e(t, r, n, o) {
          if (Cr.has(r)) {
            var a = cc11001100_hook("a", Cr.get(r), "var-init");
            this.dataTypeProcessorInfos.push({
              type: cc11001100_hook("type", r, "object-key-init"),
              path: cc11001100_hook("path", t, "object-key-init"),
              HOC: cc11001100_hook("HOC", a, "object-key-init"),
              dataSchema: cc11001100_hook("dataSchema", n, "object-key-init"),
              context: cc11001100_hook("context", o, "object-key-init")
            });
          }
        }
      }], [{
        key: cc11001100_hook("key", "register", "object-key-init"),
        value: function e(t, r) {
          Cr.set(t, r);
        }
      }]);
    }(), "var-init"),
    Ar = cc11001100_hook("Ar", Object(f.createContext)({
      parsedDataTypePropMap: {}
    }), "var-init"),
    Dr = cc11001100_hook("Dr", function () {
      function e() {
        pt()(this, e), h()(this, "parsedDataTypePropMap", void 0), h()(this, "listeners", void 0), this.parsedDataTypePropMap = cc11001100_hook("this.parsedDataTypePropMap", {}, "assign"), this.listeners = cc11001100_hook("this.listeners", [], "assign");
      }
      return lt()(e, [{
        key: cc11001100_hook("key", "set", "object-key-init"),
        value: function e(t, r) {
          r !== this.parsedDataTypePropMap[t] && (this.parsedDataTypePropMap = cc11001100_hook("this.parsedDataTypePropMap", Sr(Sr({}, this.parsedDataTypePropMap), {}, h()({}, t, r)), "assign"), this.emit());
        }
      }, {
        key: cc11001100_hook("key", "on", "object-key-init"),
        value: function e(t) {
          this.listeners.push(t);
        }
      }, {
        key: cc11001100_hook("key", "off", "object-key-init"),
        value: function e(t) {
          var r = cc11001100_hook("r", this.listeners.indexOf(t), "var-init");
          -1 !== r && this.listeners.splice(r, 1);
        }
      }, {
        key: cc11001100_hook("key", "emit", "object-key-init"),
        value: function e() {
          this.listeners.forEach(function (e) {
            return e();
          });
        }
      }]);
    }(), "var-init"),
    Ir = function e(t) {
      var r = cc11001100_hook("r", t.parsedDataTypePropManager, "var-init"),
        n = cc11001100_hook("n", t.children, "var-init"),
        o = cc11001100_hook("o", Object(f.useState)(r.parsedDataTypePropMap), "var-init"),
        a = cc11001100_hook("a", xe()(o, 2), "var-init"),
        c = cc11001100_hook("c", a[0], "var-init"),
        i = cc11001100_hook("i", a[1], "var-init"),
        u = cc11001100_hook("u", Object(f.useState)(!0), "var-init"),
        s = cc11001100_hook("s", xe()(u, 2), "var-init"),
        p = cc11001100_hook("p", s[0], "var-init"),
        d = cc11001100_hook("d", s[1], "var-init");
      return Object(f.useEffect)(function () {
        p ? d(!1) : i(r.parsedDataTypePropMap);
        var e = function e() {
          i(r.parsedDataTypePropMap);
        };
        return r.on(e), function () {
          r.off(e);
        };
      }, [r]), l.a.createElement(Ar.Provider, {
        value: {
          parsedDataTypePropMap: cc11001100_hook("parsedDataTypePropMap", c, "object-key-init")
        }
      }, n);
    },
    Nr = cc11001100_hook("Nr", Object(f.memo)(function e(t) {
      var r = cc11001100_hook("r", t.dataTypeProcessorInfos, "var-init"),
        n = cc11001100_hook("n", t.children, "var-init"),
        o = cc11001100_hook("o", new Dr(), "var-init");
      return l.a.createElement(l.a.Fragment, null, r.map(function (e) {
        var t = cc11001100_hook("t", e.type, "var-init"),
          r = cc11001100_hook("r", e.path, "var-init"),
          n = cc11001100_hook("n", e.dataSchema, "var-init"),
          a = cc11001100_hook("a", e.HOC, "var-init"),
          c = cc11001100_hook("c", e.context, "var-init"),
          i = function e(t) {
            var n = cc11001100_hook("n", t.value, "var-init");
            return o.set(r, n), null;
          };
        return l.a.createElement(a, {
          key: cc11001100_hook("key", "".concat(t, ":").concat(r), "object-key-init"),
          dataSchema: cc11001100_hook("dataSchema", n, "object-key-init"),
          context: cc11001100_hook("context", Sr(Sr({}, c), {}, {
            path: cc11001100_hook("path", r, "object-key-init")
          }), "object-key-init"),
          Component: cc11001100_hook("Component", i, "object-key-init")
        });
      }), l.a.createElement(Ir, {
        parsedDataTypePropManager: cc11001100_hook("parsedDataTypePropManager", o, "object-key-init")
      }, n));
    }), "var-init");
  function Mr(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function Rr(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? Mr(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Lr = cc11001100_hook("Lr", Symbol("wrapped"), "var-init");
  function $r(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new Tr(), "var-init"),
      r;
    return {
      staticProps: cc11001100_hook("staticProps", Se(e, t), "object-key-init"),
      dataTypeProcessorInfos: cc11001100_hook("dataTypeProcessorInfos", t.dataTypeProcessorInfos, "object-key-init")
    };
  }
  var Ur = function (e) {
    if (e[Lr]) return e;
    var t = cc11001100_hook("t", Object(f.forwardRef)(function (t, r) {
      var n = cc11001100_hook("n", Object(f.useState)(function () {
          return $r(t);
        }), "var-init"),
        o = cc11001100_hook("o", xe()(n, 2), "var-init"),
        a = cc11001100_hook("a", o[0], "var-init"),
        c = cc11001100_hook("c", o[1], "var-init"),
        i = cc11001100_hook("i", Object(f.useState)(t), "var-init"),
        u = cc11001100_hook("u", xe()(i, 2), "var-init"),
        s = cc11001100_hook("s", u[0], "var-init"),
        p = cc11001100_hook("p", u[1], "var-init"),
        d;
      Object.keys(Rr(Rr({}, t), s)).some(function (e) {
        return t[e] !== s[e];
      }) && (p(t), c($r(t)));
      return l.a.createElement(Nr, {
        dataTypeProcessorInfos: cc11001100_hook("dataTypeProcessorInfos", a.dataTypeProcessorInfos, "object-key-init")
      }, l.a.createElement(Ar.Consumer, null, function (n) {
        var o = cc11001100_hook("o", n.parsedDataTypePropMap, "var-init"),
          c = cc11001100_hook("c", {}, "var-init");
        Object.keys(o).forEach(function (e) {
          q(c, e, o[e]);
        });
        var i = cc11001100_hook("i", K(a.staticProps, c), "var-init");
        return l.a.createElement(e, Rr(Rr({}, i), {}, {
          ref: cc11001100_hook("ref", r, "object-key-init")
        }), t.children);
      }));
    }), "var-init");
    return t[Lr] = cc11001100_hook("t[Lr]", !0, "assign"), t;
  };
  "object" === ("undefined" == typeof window ? "undefined" : v()(window)) && window.$MODEL_DATA && oe(window.$MODEL_DATA);
  var Fr = cc11001100_hook("Fr", Object(f.memo)(function (e) {
    var t = cc11001100_hook("t", e.dataSchema, "var-init"),
      r = cc11001100_hook("r", e.Component, "var-init"),
      n = cc11001100_hook("n", Object(f.useState)(function () {
        return fe(t);
      }), "var-init"),
      o = cc11001100_hook("o", xe()(n, 2), "var-init"),
      a = cc11001100_hook("a", o[0], "var-init"),
      c = cc11001100_hook("c", o[1], "var-init"),
      i = cc11001100_hook("i", Object(f.useState)(function () {
        return a instanceof Promise ? void 0 : a;
      }), "var-init"),
      u = cc11001100_hook("u", xe()(i, 2), "var-init"),
      s = cc11001100_hook("s", u[0], "var-init"),
      p = cc11001100_hook("p", u[1], "var-init");
    return Object(f.useEffect)(function () {
      var e = cc11001100_hook("e", fe(t), "var-init");
      e instanceof Promise ? c(e) : p(e);
    }, [t]), Object(f.useEffect)(function () {
      a instanceof Promise && a.then(function (e) {
        p(e);
      });
    }, [a]), l.a.createElement(r, {
      value: cc11001100_hook("value", s, "object-key-init")
    });
  }), "var-init");
  "object" === ("undefined" == typeof window ? "undefined" : v()(window)) && window.$DELIVERY_DATA && Qe(window.$DELIVERY_DATA);
  var qr,
    Gr = cc11001100_hook("Gr", new URLSearchParams(location.search).has("utm_content"), "var-init"),
    Jr = cc11001100_hook("Jr", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.Component, "var-init"),
        n = cc11001100_hook("n", Object(f.useState)(et(t)), "var-init"),
        o = cc11001100_hook("o", xe()(n, 2), "var-init"),
        a = cc11001100_hook("a", o[0], "var-init"),
        c = cc11001100_hook("c", o[1], "var-init");
      return Object(f.useEffect)(function () {
        var e = cc11001100_hook("e", null, "var-init"),
          r = cc11001100_hook("r", "", "var-init");
        window.biu && (e = cc11001100_hook("e", window.biu.require("@ali/aliyun-com-storage"), "assign"), r = cc11001100_hook("r", "delivery-resource:" + t.resourceId, "assign"));
        var n = cc11001100_hook("n", !1, "var-init");
        if (t.cache && e && !Gr) {
          var o = cc11001100_hook("o", e.get(r), "var-init");
          o && (n = cc11001100_hook("n", !0, "assign"), Promise.resolve().then(function () {
            c(o);
          }));
        }
        tt(t).then(function (o) {
          t.cache && e && e.set(r, o), n || c(o);
        });
      }, [t.resourceId]), l.a.createElement(r, {
        value: cc11001100_hook("value", a, "object-key-init")
      });
    }), "var-init");
  function zr(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return De(e, {
      enter: function e(r) {
        t = cc11001100_hook("t", [].concat(c()(t), c()(Br(r.props))), "assign");
      }
    }, {}), t;
  }
  function Br(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return Se(e, {
      add: function e(r, n, o) {
        "query" === n && t.push(o);
      }
    }), t;
  }
  var Yr = cc11001100_hook("Yr", function () {
      function e() {
        pt()(this, e), h()(this, "listeners", void 0), this.listeners = cc11001100_hook("this.listeners", {}, "assign");
      }
      return lt()(e, [{
        key: cc11001100_hook("key", "on", "object-key-init"),
        value: function e(t, r) {
          this.listeners[t] || (this.listeners[t] = cc11001100_hook("this.listeners[t]", [], "assign")), -1 === this.listeners[t].indexOf(r) && this.listeners[t].push(r);
        }
      }, {
        key: cc11001100_hook("key", "off", "object-key-init"),
        value: function e(t, r) {
          if (this.listeners[t]) {
            var n = cc11001100_hook("n", this.listeners[t].indexOf(r), "var-init");
            -1 !== n && this.listeners[t].splice(n, 1);
          }
        }
      }, {
        key: cc11001100_hook("key", "emit", "object-key-init"),
        value: function e(t, r) {
          var n = cc11001100_hook("n", this, "var-init");
          this.listeners[t] && this.listeners[t].forEach(function (e) {
            e.call(n, r);
          });
        }
      }, {
        key: cc11001100_hook("key", "push", "object-key-init"),
        value: function e(t) {}
      }, {
        key: cc11001100_hook("key", "replace", "object-key-init"),
        value: function e(t) {}
      }, {
        key: cc11001100_hook("key", "goBack", "object-key-init"),
        value: function e() {}
      }, {
        key: cc11001100_hook("key", "goForward", "object-key-init"),
        value: function e() {}
      }]);
    }(), "var-init"),
    Hr = cc11001100_hook("Hr", function () {
      function e() {
        pt()(this, e), h()(this, "listeners", void 0), this.listeners = cc11001100_hook("this.listeners", {}, "assign");
      }
      return lt()(e, [{
        key: cc11001100_hook("key", "on", "object-key-init"),
        value: function e(t, r) {
          this.listeners[t] || (this.listeners[t] = cc11001100_hook("this.listeners[t]", [], "assign")), -1 === this.listeners[t].indexOf(r) && this.listeners[t].push(r);
        }
      }, {
        key: cc11001100_hook("key", "off", "object-key-init"),
        value: function e(t, r) {
          if (this.listeners[t]) {
            var n = cc11001100_hook("n", this.listeners[t].indexOf(r), "var-init");
            -1 !== n && this.listeners[t].splice(n, 1);
          }
        }
      }, {
        key: cc11001100_hook("key", "emit", "object-key-init"),
        value: function e(t, r) {
          var n = cc11001100_hook("n", this, "var-init");
          this.listeners[t] && this.listeners[t].forEach(function (e) {
            e.call(n, r);
          });
        }
      }]);
    }(), "var-init"),
    Vr = cc11001100_hook("Vr", new Yr(), "var-init"),
    Qr = cc11001100_hook("Qr", new Hr(), "var-init"),
    Kr = cc11001100_hook("Kr", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.Component, "var-init"),
        n = cc11001100_hook("n", new URLSearchParams(location.search), "var-init"),
        o = cc11001100_hook("o", Object(f.useState)(n.get(t.name)), "var-init"),
        a = cc11001100_hook("a", xe()(o, 2), "var-init"),
        c = cc11001100_hook("c", a[0], "var-init"),
        i = cc11001100_hook("i", a[1], "var-init");
      return Object(f.useEffect)(function () {
        function e() {
          var e,
            r = cc11001100_hook("r", new URLSearchParams(location.search).get(t.name), "var-init");
          i(r);
        }
        return Qr.on("change", e), function () {
          Qr.off("change", e);
        };
      }, [t.name]), l.a.createElement(r, {
        value: cc11001100_hook("value", c, "object-key-init")
      });
    }), "var-init"),
    Wr = cc11001100_hook("Wr", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.context, "var-init"),
        n = cc11001100_hook("n", e.Component, "var-init");
      return l.a.createElement(n, {
        value: cc11001100_hook("value", r.renderComponent(t, {
          path: cc11001100_hook("path", r.path, "object-key-init")
        }), "object-key-init")
      });
    }), "var-init"),
    Xr = cc11001100_hook("Xr", {}, "var-init"),
    Zr = cc11001100_hook("Zr", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.Component, "var-init"),
        n = cc11001100_hook("n", Object(f.useState)(), "var-init"),
        a = cc11001100_hook("a", xe()(n, 2), "var-init"),
        c = cc11001100_hook("c", a[0], "var-init"),
        i = cc11001100_hook("i", a[1], "var-init");
      return Object(f.useEffect)(function () {
        Xr[t.id] || (Xr[t.id] = cc11001100_hook("Xr[t.id]", new Promise(function () {
          var e = cc11001100_hook("e", o()(u.a.mark(function e(r, n) {
            var o, a, c;
            return u.a.wrap(function e(n) {
              for (;;) switch (n.prev = cc11001100_hook("n.prev", n.next, "assign")) {
                case 0:
                  return n.next = cc11001100_hook("n.next", 2, "assign"), j.get("https://cloud-assets.alicdn.com/lowcode/chunk/".concat(t.id));
                case 2:
                  (o = cc11001100_hook("o", n.sent, "assign")).data.modelDatas && oe(o.data.modelDatas), a = cc11001100_hook("a", new Tr(), "assign"), c = cc11001100_hook("c", Se({
                    value: cc11001100_hook("value", o.data.props, "object-key-init")
                  }, a), "assign"), r({
                    staticProps: cc11001100_hook("staticProps", c, "object-key-init"),
                    dataTypeProcessorInfos: cc11001100_hook("dataTypeProcessorInfos", a.dataTypeProcessorInfos, "object-key-init")
                  });
                case 7:
                case "end":
                  return n.stop();
              }
            }, e);
          })), "var-init");
          return function (t, r) {
            return e.apply(this, arguments);
          };
        }()), "assign")), Xr[t.id].then(i);
      }, []), l.a.createElement(Nr, {
        dataTypeProcessorInfos: cc11001100_hook("dataTypeProcessorInfos", c ? c.dataTypeProcessorInfos : [], "object-key-init")
      }, l.a.createElement(Ar.Consumer, null, function (e) {
        var t = cc11001100_hook("t", e.parsedDataTypePropMap, "var-init");
        if (!c) return l.a.createElement(r, {
          value: cc11001100_hook("value", void 0, "object-key-init")
        });
        var n = cc11001100_hook("n", {}, "var-init");
        Object.keys(t).forEach(function (e) {
          q(n, e, t[e]);
        });
        var o = cc11001100_hook("o", K(c.staticProps, n), "var-init");
        return l.a.createElement(r, {
          value: cc11001100_hook("value", o.value, "object-key-init")
        });
      }));
    }), "var-init"),
    en = cc11001100_hook("en", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.Component, "var-init"),
        n = cc11001100_hook("n", Object(f.useState)(), "var-init"),
        o = cc11001100_hook("o", xe()(n, 2), "var-init"),
        a = cc11001100_hook("a", o[0], "var-init"),
        c = cc11001100_hook("c", o[1], "var-init");
      return Object(f.useEffect)(function () {
        var e = cc11001100_hook("e", {
            value: cc11001100_hook("value", t, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", new Tr(), "var-init"),
          n = cc11001100_hook("n", Se(e, r), "var-init");
        c({
          staticProps: cc11001100_hook("staticProps", n, "object-key-init"),
          dataTypeProcessorInfos: cc11001100_hook("dataTypeProcessorInfos", r.dataTypeProcessorInfos, "object-key-init")
        });
      }, [t]), l.a.createElement(Nr, {
        dataTypeProcessorInfos: cc11001100_hook("dataTypeProcessorInfos", a ? a.dataTypeProcessorInfos : [], "object-key-init")
      }, l.a.createElement(Ar.Consumer, null, function (e) {
        var t = cc11001100_hook("t", e.parsedDataTypePropMap, "var-init");
        if (!a) return l.a.createElement(r, {
          value: cc11001100_hook("value", void 0, "object-key-init")
        });
        var n = cc11001100_hook("n", {}, "var-init");
        Object.keys(t).forEach(function (e) {
          q(n, e, t[e]);
        });
        var o = cc11001100_hook("o", K(a.staticProps, n), "var-init");
        return l.a.createElement(r, {
          value: cc11001100_hook("value", o.value, "object-key-init")
        });
      }));
    }), "var-init"),
    tn = cc11001100_hook("tn", Object(f.createContext)({
      language: cc11001100_hook("language", E.zh_CN, "object-key-init")
    }), "var-init"),
    rn = cc11001100_hook("rn", tn.Provider, "var-init"),
    nn = cc11001100_hook("nn", Object(f.memo)(function e(t) {
      var r = cc11001100_hook("r", t.dataSchema, "var-init"),
        n = cc11001100_hook("n", t.Component, "var-init");
      return l.a.createElement(tn.Consumer, null, function (e) {
        var t = cc11001100_hook("t", e.language, "var-init"),
          o = cc11001100_hook("o", void 0 === t ? E.zh_CN : t, "var-init");
        return l.a.createElement(n, {
          value: cc11001100_hook("value", r ? r[o] : void 0, "object-key-init")
        });
      });
    }), "var-init"),
    on = cc11001100_hook("on", r(20), "var-init"),
    an = cc11001100_hook("an", r.n(on), "var-init");
  function cn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", e.method, "var-init"),
      n = cc11001100_hook("n", e.dataType, "var-init"),
      o = cc11001100_hook("o", e.contentType, "var-init"),
      a = cc11001100_hook("a", e.queries, "var-init"),
      c = cc11001100_hook("c", e.body, "var-init"),
      i = cc11001100_hook("i", e.headers, "var-init"),
      u = cc11001100_hook("u", e.needCookie, "var-init"),
      s = cc11001100_hook("s", e.uri, "var-init"),
      p = cc11001100_hook("p", {}, "var-init");
    if (u && (p.includeCookie = cc11001100_hook("p.includeCookie", u, "assign")), i && (p.headers = cc11001100_hook("p.headers", i, "assign")), n && (p.dataType = cc11001100_hook("p.dataType", n || "json", "assign")), "GET" === r) {
      if (a) {
        var f = cc11001100_hook("f", Object.keys(a), "var-init"),
          l = cc11001100_hook("l", [], "var-init");
        f.forEach(function (e) {
          "object" === v()(a[e]) && "pageQuery" == a[e].type ? t && t[e] ? l.push("".concat(e, "=").concat(t[e])) : l.push("".concat(e, "=").concat(a[e].value)) : l.push("".concat(e, "=").concat(a[e]));
        }), l.length > 0 && (s += cc11001100_hook("s", "?".concat(l.join("&")), "assign"));
      }
    } else if ("POST" === r) {
      var d;
      if (c) Object.keys(c).forEach(function (e) {
        "object" === v()(c[e]) && "pageQuery" == c[e].type && (t && t[e] ? c[e] = cc11001100_hook("c[e]", t[e], "assign") : c[e] = cc11001100_hook("c[e]", c[e].value, "assign"));
      });
      p.body = cc11001100_hook("p.body", c, "assign"), p.contentType = cc11001100_hook("p.contentType", o, "assign");
    }
    return {
      api: cc11001100_hook("api", s, "object-key-init"),
      params: cc11001100_hook("params", p, "object-key-init")
    };
  }
  function un(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r, n;
    return new an.a(e).match(t);
  }
  function sn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (Array.isArray(t)) {
      if (t.includes(e)) return !0;
    } else if ("string" == typeof t && t === e) return !0;
    return !1;
  }
  function pn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", e.response, "var-init"),
      n = cc11001100_hook("n", void 0 === r ? {} : r, "var-init"),
      o = cc11001100_hook("o", n.statusPropertyName, "var-init"),
      a = cc11001100_hook("a", n.successStatus, "var-init"),
      c = cc11001100_hook("c", n.emptyStatus, "var-init"),
      i = cc11001100_hook("i", n.map, "var-init"),
      u = cc11001100_hook("u", n.pageSEO, "var-init"),
      s = cc11001100_hook("s", n.requiredPropertyName, "var-init"),
      p,
      f,
      l,
      d;
    if (o && (p = cc11001100_hook("p", t[o], "assign")), !sn(p, a)) return !!s && {
      errorStatus: cc11001100_hook("errorStatus", 404, "object-key-init")
    };
    if (u) try {
      t && (f = cc11001100_hook("f", z(t, u), "assign"));
    } catch (e) {
      console.log(e);
    }
    return i ? "string" == typeof i ? l = cc11001100_hook("l", t[i], "assign") : i && "object" === v()(i) && (l = cc11001100_hook("l", z(t, i), "assign")) : l = cc11001100_hook("l", null == t ? void 0 : t.data, "assign"), c && c.includes(p) ? {
      errorStatus: cc11001100_hook("errorStatus", p, "object-key-init")
    } : s && !l[s] ? {
      errorStatus: cc11001100_hook("errorStatus", 404, "object-key-init")
    } : {
      data: cc11001100_hook("data", l, "object-key-init"),
      pageSEO: cc11001100_hook("pageSEO", f, "object-key-init")
    };
  }
  var fn = cc11001100_hook("fn", {}, "var-init");
  function ln(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e ? fn[hn(e, t)] : fn;
  }
  function dn(e) {
    cc11001100_hook("e", e, "function-parameter");
    Object.keys(e).forEach(function (t) {
      fn[t] = cc11001100_hook("fn[t]", e[t], "assign");
    });
  }
  function hn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", e.uri, "var-init"),
      n;
    "GET" === e.method ? n = cc11001100_hook("n", e.queries, "assign") : "POST" === e.method && (n = cc11001100_hook("n", e.body, "assign"));
    var o = cc11001100_hook("o", Object.keys(n).sort(), "var-init"),
      a = cc11001100_hook("a", [], "var-init");
    return o.forEach(function (e) {
      "string" == typeof n[e] ? a.push("".concat(e, "=").concat(n[e])) : "object" === v()(n[e]) && ("pageQuery" === n[e].type && t && t[e] ? a.push("".concat(e, "=").concat(t[e])) : a.push("".concat(e, "=").concat(n[e].value)));
    }), encodeURIComponent("".concat(r, "?").concat(a.join("&")));
  }
  function yn() {
    fn = cc11001100_hook("fn", {}, "assign");
  }
  function vn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", hn(e, t), "var-init");
    if (fn[r]) return Promise.resolve(fn[r]);
    var n = cc11001100_hook("n", e.method, "var-init");
    return new Promise(function () {
      var r = cc11001100_hook("r", o()(u.a.mark(function r(o, a) {
        var c, i, s, p, f, l;
        return u.a.wrap(function r(a) {
          for (;;) switch (a.prev = cc11001100_hook("a.prev", a.next, "assign")) {
            case 0:
              if (i = cc11001100_hook("i", cn(e, t), "assign"), s = cc11001100_hook("s", i.api, "assign"), p = cc11001100_hook("p", i.params, "assign"), "GET" !== n) {
                a.next = cc11001100_hook("a.next", 7, "assign");
                break;
              }
              return a.next = cc11001100_hook("a.next", 4, "assign"), j.get(s, p);
            case 4:
              f = cc11001100_hook("f", a.sent, "assign"), a.next = cc11001100_hook("a.next", 11, "assign");
              break;
            case 7:
              if ("POST" !== n) {
                a.next = cc11001100_hook("a.next", 11, "assign");
                break;
              }
              return a.next = cc11001100_hook("a.next", 10, "assign"), j.post(s, p);
            case 10:
              f = cc11001100_hook("f", a.sent, "assign");
            case 11:
              l = cc11001100_hook("l", pn(e, null === (c = cc11001100_hook("c", f, "assign")) || void 0 === c ? void 0 : c.data), "assign"), o(l);
            case 13:
            case "end":
              return a.stop();
          }
        }, r);
      })), "var-init");
      return function (e, t) {
        return r.apply(this, arguments);
      };
    }());
  }
  function mn(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return De(e, {
      enter: function e(r) {
        t = cc11001100_hook("t", [].concat(c()(t), c()(bn(r.props))), "assign");
      }
    }, {}), t;
  }
  function bn(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    return Se(e, {
      add: function e(r, n, o) {
        "http" === n && t.push(o);
      }
    }), t;
  }
  var gn = cc11001100_hook("gn", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.Component, "var-init"),
        n = cc11001100_hook("n", ln(), "var-init"),
        o = cc11001100_hook("o", null == n ? void 0 : n.spaRouteParams, "var-init"),
        a = cc11001100_hook("a", ln(t, o), "var-init"),
        c = cc11001100_hook("c", Object(f.useState)(null), "var-init"),
        i = cc11001100_hook("i", xe()(c, 2), "var-init"),
        u = cc11001100_hook("u", i[0], "var-init"),
        s = cc11001100_hook("s", i[1], "var-init"),
        p = cc11001100_hook("p", Object(f.useState)(a), "var-init"),
        d = cc11001100_hook("d", xe()(p, 2), "var-init"),
        h = cc11001100_hook("h", d[0], "var-init"),
        y = cc11001100_hook("y", d[1], "var-init");
      return Object(f.useEffect)(function () {
        if (!a) {
          var e = cc11001100_hook("e", vn(t, o), "var-init");
          e instanceof Promise ? s(e) : y(e);
        }
      }, [t.uri]), Object(f.useEffect)(function () {
        !a && u instanceof Promise && u.then(function (e) {
          y(null == e ? void 0 : e.data);
        });
      }, [u]), l.a.createElement(r, {
        value: cc11001100_hook("value", h, "object-key-init")
      });
    }), "var-init"),
    wn = cc11001100_hook("wn", Object(f.memo)(function (e) {
      var t = cc11001100_hook("t", e.dataSchema, "var-init"),
        r = cc11001100_hook("r", e.Component, "var-init"),
        n = cc11001100_hook("n", new URLSearchParams(location.search), "var-init"),
        o = cc11001100_hook("o", Object(f.useState)(n.get(t.name)), "var-init"),
        a = cc11001100_hook("a", xe()(o, 2), "var-init"),
        c = cc11001100_hook("c", a[0], "var-init"),
        i = cc11001100_hook("i", a[1], "var-init");
      return Object(f.useEffect)(function () {
        function e() {
          var e,
            r = cc11001100_hook("r", new URLSearchParams(location.search).get(t.name), "var-init");
          i(r);
        }
        return Qr.on("change", e), function () {
          Qr.off("change", e);
        };
      }, [t.name]), l.a.createElement(r, {
        value: cc11001100_hook("value", c, "object-key-init")
      });
    }), "var-init"),
    On = cc11001100_hook("On", ["__schema", "__renderChildren", "children"], "var-init");
  function jn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function xn(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? jn(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function En(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return t = cc11001100_hook("t", Qt()(t), "assign"), Ht()(e, Pn() ? Reflect.construct(t, r || [], Qt()(e).constructor) : t.apply(e, r));
  }
  function Pn() {
    try {
      var e = cc11001100_hook("e", !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), "var-init");
    } catch (e) {}
    return (Pn = cc11001100_hook("Pn", function t() {
      return !!e;
    }, "assign"))();
  }
  var _n = cc11001100_hook("_n", function (e) {
    function t() {
      var e;
      pt()(this, t);
      for (var r = cc11001100_hook("r", arguments.length, "var-init"), n = cc11001100_hook("n", new Array(r), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r; o++) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");
      return e = cc11001100_hook("e", En(this, t, [].concat(n)), "assign"), h()(e, "state", {
        isError: cc11001100_hook("isError", !1, "object-key-init")
      }), e;
    }
    return Zt()(t, e), lt()(t, [{
      key: cc11001100_hook("key", "componentDidCatch", "object-key-init"),
      value: function e(t, r) {
        console.error("\u7ec4\u4ef6 ".concat(this.props.schema.componentName, " \u6e32\u67d3\u62a5\u9519, props:"), this.props.schema), console.log(t, r), this.setState({
          isError: cc11001100_hook("isError", !0, "object-key-init")
        });
      }
    }, {
      key: cc11001100_hook("key", "render", "object-key-init"),
      value: function e() {
        return this.state.isError ? null : this.props.children;
      }
    }]);
  }(f.Component), "var-init");
  function kn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Object(f.forwardRef)(function (t, r) {
      var n = cc11001100_hook("n", t.__schema, "var-init"),
        o = cc11001100_hook("o", t.__renderChildren, "var-init"),
        a = cc11001100_hook("a", t.children, "var-init"),
        c = cc11001100_hook("c", yr()(t, On), "var-init");
      return l.a.createElement(_n, {
        schema: cc11001100_hook("schema", n, "object-key-init")
      }, l.a.createElement(e, xn(xn({}, c), {}, {
        ref: cc11001100_hook("ref", r, "object-key-init")
      }), a));
    });
  }
  var Sn = cc11001100_hook("Sn", ["__schema", "children"], "var-init");
  function Cn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function Tn(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? Cn(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function An(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Object(f.forwardRef)(function (t, r) {
      var n = cc11001100_hook("n", t.__schema, "var-init"),
        o = cc11001100_hook("o", t.children, "var-init"),
        a = cc11001100_hook("a", yr()(t, Sn), "var-init");
      return l.a.createElement(e, Tn(Tn({
        __schema: cc11001100_hook("__schema", n, "object-key-init")
      }, a), {}, {
        ref: cc11001100_hook("ref", o && f.Children.count(o) > 0 || !n.id ? r : function (e) {
          if (e) {
            var t = cc11001100_hook("t", Rn(e), "var-init");
            t && t.forEach(function (e) {
              e && e.nodeType === Node.ELEMENT_NODE && (e.setAttribute("data-homon-module", ""), e.setAttribute("data-module-id", n.id), e.setAttribute("data-module-name", n.componentName), e.setAttribute("data-spm", "J_".concat(n.id)));
            });
          }
          r && "function" == typeof r && r(e);
        }, "object-key-init")
      }), o);
    });
  }
  function Dn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return !!e && e.nodeType === Node.ELEMENT_NODE;
  }
  function In(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.nodeType && (e.nodeType === Node.ELEMENT_NODE || e.nodeType === Node.TEXT_NODE);
  }
  var Nn = cc11001100_hook("Nn", "_reactInternalFiber", "var-init");
  function Mn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e && (e.stateNode && In(e.stateNode) ? t.push(e.stateNode) : e.child && Mn(e.child, t), e.sibling && Mn(e.sibling, t));
  }
  function Rn(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e) return null;
    if (Dn(e)) return [e];
    var t = cc11001100_hook("t", [], "var-init"),
      r = cc11001100_hook("r", e[Nn], "var-init");
    if (Mn(null == r ? void 0 : r.child, t), t.length > 0) return t;
    try {
      return [Object(s.findDOMNode)(e)];
    } catch (e) {
      return null;
    }
  }
  function Ln(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return t = cc11001100_hook("t", Qt()(t), "assign"), Ht()(e, $n() ? Reflect.construct(t, r || [], Qt()(e).constructor) : t.apply(e, r));
  }
  function $n() {
    try {
      var e = cc11001100_hook("e", !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), "var-init");
    } catch (e) {}
    return ($n = cc11001100_hook("$n", function t() {
      return !!e;
    }, "assign"))();
  }
  var Un = cc11001100_hook("Un", "function" == typeof Symbol && Symbol.for, "var-init"),
    Fn = cc11001100_hook("Fn", Un ? Symbol.for("react.forward_ref") : 60112, "var-init"),
    qn = cc11001100_hook("qn", Un ? Symbol.for("react.memo") : 60115, "var-init");
  function Gn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && e.prototype && (e.prototype.isReactComponent || e.prototype instanceof f.Component);
  }
  function Jn(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    return (null == e || null === (t = cc11001100_hook("t", e.prototype, "assign")) || void 0 === t ? void 0 : t.isReactComponent) || e.$$typeof && e.$$typeof === Fn;
  }
  function zn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (null == e ? void 0 : e.$$typeof) && (null == e ? void 0 : e.$$typeof) === Fn;
  }
  function Bn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (null == e ? void 0 : e.$$typeof) && (null == e ? void 0 : e.$$typeof) === qn;
  }
  function Yn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e && (Gn(e) || "function" == typeof e || zn(e) || Bn(e));
  }
  var Hn = cc11001100_hook("Hn", ["$$typeof", "render", "defaultProps", "props", "length", "prototype", "name", "caller", "callee", "arguments"], "var-init");
  function Vn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r;
    return Object.keys(t).filter(function (e) {
      return !Hn.includes(e);
    }).forEach(function (r) {
      e[r] = cc11001100_hook("e[r]", t[r], "assign");
    }), e;
  }
  function Qn(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", function (t) {
      function r() {
        return pt()(this, r), Ln(this, r, arguments);
      }
      return Zt()(r, t), lt()(r, [{
        key: cc11001100_hook("key", "render", "object-key-init"),
        value: function t() {
          return Object(f.createElement)(e, this.props);
        }
      }]);
    }(f.Component), "var-init");
    return (t = cc11001100_hook("t", Vn(t, e), "assign")).displayName = cc11001100_hook("(t = Vn(t, e)).displayName", e.displayName, "assign"), t;
  }
  var Kn = function (e, t) {
    return Yn(e) ? Jn(e) ? e : Qn(e) : (console.error("\u7ec4\u4ef6 ".concat(t, " \u4e0d\u662f\u6709\u6548\u7684 React \u7ec4\u4ef6")), null);
  };
  function Wn(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", {}, "var-init");
    e.components.forEach(function (e) {
      t[e.componentName] = cc11001100_hook("t[e.componentName]", e, "assign");
    });
    var r = cc11001100_hook("r", {}, "var-init");
    e.packages.forEach(function (e) {
      e.type && "default" !== e.type || (r[e.name] = cc11001100_hook("r[e.name]", e.library, "assign"));
    });
    var n = cc11001100_hook("n", mt.buildComponents(t, r), "var-init");
    n.Page = cc11001100_hook("n.Page", mr, "assign"), n.Fragment = cc11001100_hook("n.Fragment", function (e) {
      var t;
      return e.children;
    }, "assign");
    var o = cc11001100_hook("o", {}, "var-init");
    return Object.keys(n).forEach(function (e) {
      o[e] = cc11001100_hook("o[e]", Kn(n[e], e), "assign");
    }), {
      components: cc11001100_hook("components", o, "object-key-init"),
      componentInfos: cc11001100_hook("componentInfos", t, "object-key-init")
    };
  }
  mt.register(dr), mt.register(_r), Tr.register("model", Fr), Tr.register("delivery", Jr), Tr.register("http", gn), Tr.register("query", Kr), Tr.register("slot", Wr), Tr.register("chunk", Zr), Tr.register("chunk-inline", en), Tr.register("i18n", nn), Tr.register("page-query", wn);
  var Xn = cc11001100_hook("Xn", [Ur, An, kn], "var-init");
  function Zn(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(e), "var-init");
    if (Object.getOwnPropertySymbols) {
      var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
      t && (n = cc11001100_hook("n", n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }), "assign")), r.push.apply(r, n);
    }
    return r;
  }
  function eo(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
      var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
      t % 2 ? Zn(Object(r), !0).forEach(function (t) {
        h()(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var to = function e(t) {
    var r = cc11001100_hook("r", t.schema, "var-init"),
      n = cc11001100_hook("n", t.components, "var-init"),
      o = cc11001100_hook("o", t.componentInfos, "var-init"),
      a = cc11001100_hook("a", t.containers, "var-init"),
      c = cc11001100_hook("c", void 0 === a ? [] : a, "var-init"),
      i = cc11001100_hook("i", t.componentWrappers, "var-init"),
      u = cc11001100_hook("u", t.language, "var-init"),
      s = cc11001100_hook("s", t.NotFoundComponent, "var-init"),
      p = cc11001100_hook("p", t.onRef, "var-init");
    return i && (i = cc11001100_hook("i", i.reverse(), "assign"), Object.keys(n).forEach(function (e) {
      n[e] = cc11001100_hook("n[e]", i.reduce(function (e, t) {
        return t(e);
      }, n[e]), "assign");
    })), c.reverse(), l.a.createElement(rn, {
      value: {
        language: cc11001100_hook("language", u || E.zh_CN, "object-key-init")
      }
    }, c.reduce(function (e, t) {
      return l.a.createElement(t, null, e);
    }, ro({
      schema: cc11001100_hook("schema", r, "object-key-init"),
      components: cc11001100_hook("components", n, "object-key-init"),
      componentInfos: cc11001100_hook("componentInfos", o, "object-key-init"),
      NotFoundComponent: cc11001100_hook("NotFoundComponent", s, "object-key-init"),
      onRef: cc11001100_hook("onRef", p, "object-key-init"),
      isShadowNode: cc11001100_hook("isShadowNode", !1, "object-key-init")
    })));
  };
  function ro(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      r = cc11001100_hook("r", e.schema, "var-init"),
      n = cc11001100_hook("n", e.components, "var-init"),
      o = cc11001100_hook("o", e.componentInfos, "var-init"),
      a = cc11001100_hook("a", e.NotFoundComponent, "var-init"),
      c = cc11001100_hook("c", e.onRef, "var-init"),
      i = cc11001100_hook("i", e.templateProps, "var-init"),
      u = cc11001100_hook("u", e.isShadowNode, "var-init");
    if ("template" === r.type) {
      var s = cc11001100_hook("s", r.props, "var-init");
      return l.a.createElement(l.a.Fragment, null, (r.shadowChildren || []).map(function (e) {
        var t = cc11001100_hook("t", ve(i, s || {}), "var-init");
        return ro({
          schema: cc11001100_hook("schema", e, "object-key-init"),
          components: cc11001100_hook("components", n, "object-key-init"),
          componentInfos: cc11001100_hook("componentInfos", o, "object-key-init"),
          NotFoundComponent: cc11001100_hook("NotFoundComponent", a, "object-key-init"),
          onRef: cc11001100_hook("onRef", c, "object-key-init"),
          templateProps: cc11001100_hook("templateProps", t, "object-key-init"),
          isShadowNode: cc11001100_hook("isShadowNode", !0, "object-key-init")
        });
      }));
    }
    var p = cc11001100_hook("p", r.props || {}, "var-init"),
      f = cc11001100_hook("f", r.exportId, "var-init"),
      d = cc11001100_hook("d", null == r || null === (t = cc11001100_hook("t", r.constraintRule, "assign")) || void 0 === t ? void 0 : t.props, "var-init");
    if (u && f && i) {
      var h = cc11001100_hook("h", i[f], "var-init");
      if (h) {
        if (h.isRemove) return null;
        if (h.props) {
          if (d) {
            var y = cc11001100_hook("y", Pe(h.props, d), "var-init");
            h.props = cc11001100_hook("h.props", y, "assign");
          }
          p = cc11001100_hook("p", K(p, h.props), "assign");
        }
      }
    }
    var v = cc11001100_hook("v", no({
        schema: cc11001100_hook("schema", r, "object-key-init"),
        components: cc11001100_hook("components", n, "object-key-init"),
        componentInfos: cc11001100_hook("componentInfos", o, "object-key-init"),
        NotFoundComponent: cc11001100_hook("NotFoundComponent", a, "object-key-init"),
        onRef: cc11001100_hook("onRef", c, "object-key-init"),
        templateProps: cc11001100_hook("templateProps", i, "object-key-init"),
        isShadowNode: cc11001100_hook("isShadowNode", u, "object-key-init")
      }), "var-init"),
      m = cc11001100_hook("m", r.componentName, "var-init"),
      b = cc11001100_hook("b", n[m] || a, "var-init");
    if (!b) throw new Error("\u7ec4\u4ef6 ".concat(m, " \u627e\u4e0d\u5230"));
    return l.a.createElement(b, eo(eo({
      key: cc11001100_hook("key", r.id, "object-key-init")
    }, p), {}, {
      __schema: cc11001100_hook("__schema", r, "object-key-init"),
      __onRef: cc11001100_hook("__onRef", c, "object-key-init"),
      __renderComponent: function e(t) {
        return t ? Array.isArray(t) ? t.map(function (e) {
          return ro({
            schema: cc11001100_hook("schema", e, "object-key-init"),
            components: cc11001100_hook("components", n, "object-key-init"),
            componentInfos: cc11001100_hook("componentInfos", o, "object-key-init"),
            NotFoundComponent: cc11001100_hook("NotFoundComponent", a, "object-key-init"),
            onRef: cc11001100_hook("onRef", c, "object-key-init"),
            templateProps: cc11001100_hook("templateProps", i, "object-key-init"),
            isShadowNode: cc11001100_hook("isShadowNode", u, "object-key-init")
          });
        }) : ro({
          schema: cc11001100_hook("schema", t, "object-key-init"),
          components: cc11001100_hook("components", n, "object-key-init"),
          componentInfos: cc11001100_hook("componentInfos", o, "object-key-init"),
          NotFoundComponent: cc11001100_hook("NotFoundComponent", a, "object-key-init"),
          onRef: cc11001100_hook("onRef", c, "object-key-init"),
          templateProps: cc11001100_hook("templateProps", i, "object-key-init"),
          isShadowNode: cc11001100_hook("isShadowNode", u, "object-key-init")
        }) : null;
      },
      __renderChildren: function e(t, r) {
        if (i && u && f) {
          i[f] || (i[f] = cc11001100_hook("i[f]", {}, "assign"));
          var s = cc11001100_hook("s", i[f], "var-init");
          s.slots = cc11001100_hook("s.slots", eo(eo({}, s.slots), r), "assign"), i[f] = cc11001100_hook("i[f]", s, "assign");
        }
        return no({
          schema: cc11001100_hook("schema", t, "object-key-init"),
          components: cc11001100_hook("components", n, "object-key-init"),
          componentInfos: cc11001100_hook("componentInfos", o, "object-key-init"),
          NotFoundComponent: cc11001100_hook("NotFoundComponent", a, "object-key-init"),
          onRef: cc11001100_hook("onRef", c, "object-key-init"),
          templateProps: cc11001100_hook("templateProps", i, "object-key-init"),
          isShadowNode: cc11001100_hook("isShadowNode", u, "object-key-init")
        });
      },
      ref: function e(t) {
        c && c(t, r);
      }
    }), v);
  }
  function no(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.schema, "var-init"),
      r = cc11001100_hook("r", e.components, "var-init"),
      n = cc11001100_hook("n", e.componentInfos, "var-init"),
      o = cc11001100_hook("o", e.NotFoundComponent, "var-init"),
      a = cc11001100_hook("a", e.onRef, "var-init"),
      c = cc11001100_hook("c", e.templateProps, "var-init"),
      i = cc11001100_hook("i", e.isShadowNode, "var-init"),
      u = cc11001100_hook("u", [], "var-init"),
      s = cc11001100_hook("s", !1, "var-init"),
      p = cc11001100_hook("p", t.exportId, "var-init");
    if (i && p && c) {
      var f = cc11001100_hook("f", c[p], "var-init");
      if (f && f.slots && f.slots.default) {
        s = cc11001100_hook("s", !0, "assign");
        var l = cc11001100_hook("l", {}, "var-init"),
          d = cc11001100_hook("d", t.children, "var-init");
        d && Array.isArray(d) && d.forEach(function (e) {
          e.id && (l[e.id] = cc11001100_hook("l[e.id]", e, "assign"));
        }), f.slots.default.forEach(function (e) {
          switch (e.type) {
            case "node":
              u.push(ro({
                schema: cc11001100_hook("schema", e.node, "object-key-init"),
                components: cc11001100_hook("components", r, "object-key-init"),
                componentInfos: cc11001100_hook("componentInfos", n, "object-key-init"),
                NotFoundComponent: cc11001100_hook("NotFoundComponent", o, "object-key-init"),
                onRef: cc11001100_hook("onRef", a, "object-key-init"),
                templateProps: cc11001100_hook("templateProps", c, "object-key-init"),
                isShadowNode: cc11001100_hook("isShadowNode", !0, "object-key-init")
              }));
              break;
            case "placeholder":
              var t = cc11001100_hook("t", l[e.id], "var-init");
              t && u.push(ro({
                schema: cc11001100_hook("schema", t, "object-key-init"),
                components: cc11001100_hook("components", r, "object-key-init"),
                componentInfos: cc11001100_hook("componentInfos", n, "object-key-init"),
                NotFoundComponent: cc11001100_hook("NotFoundComponent", o, "object-key-init"),
                onRef: cc11001100_hook("onRef", a, "object-key-init"),
                templateProps: cc11001100_hook("templateProps", c, "object-key-init"),
                isShadowNode: cc11001100_hook("isShadowNode", !0, "object-key-init")
              }));
          }
        });
      }
    }
    if (!s) {
      var h = cc11001100_hook("h", t.children, "var-init");
      h && Array.isArray(h) && (u = cc11001100_hook("u", h.map(function (e) {
        return ro({
          schema: cc11001100_hook("schema", e, "object-key-init"),
          components: cc11001100_hook("components", r, "object-key-init"),
          componentInfos: cc11001100_hook("componentInfos", n, "object-key-init"),
          NotFoundComponent: cc11001100_hook("NotFoundComponent", o, "object-key-init"),
          onRef: cc11001100_hook("onRef", a, "object-key-init"),
          templateProps: cc11001100_hook("templateProps", c, "object-key-init"),
          isShadowNode: cc11001100_hook("isShadowNode", i, "object-key-init")
        });
      }), "assign"));
    }
    return u.filter(function (e) {
      return !!e;
    });
  }
  var oo,
    ao = cc11001100_hook("ao", Object(f.forwardRef)(function (e, t) {
      var r = cc11001100_hook("r", e.__schema, "var-init");
      return console.error("\u627e\u4e0d\u5230\u7ec4\u4ef6 ".concat(r ? r.componentName : "undefined")), console.log(r), l.a.createElement("div", {
        ref: cc11001100_hook("ref", t, "object-key-init")
      });
    }), "var-init");
  function co(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.schema, "var-init"),
      r = cc11001100_hook("r", e.container, "var-init"),
      n = cc11001100_hook("n", e.modelDatas, "var-init"),
      o = cc11001100_hook("o", e.deliveryDatas, "var-init"),
      a = cc11001100_hook("a", e.language, "var-init"),
      i = cc11001100_hook("i", e.componentWrappers, "var-init"),
      u = cc11001100_hook("u", void 0 === i ? {} : i, "var-init"),
      s = cc11001100_hook("s", e.onMount, "var-init"),
      f = cc11001100_hook("f", e.httpDatas, "var-init");
    if (!r) throw new Error("\u6e32\u67d3\u65f6 container \u4e0d\u80fd\u4e3a\u7a7a");
    n && oe(n), o && Qe(o), f && dn(f);
    var d = cc11001100_hook("d", Wn(t), "var-init"),
      h = cc11001100_hook("h", d.components, "var-init"),
      y = cc11001100_hook("y", d.componentInfos, "var-init");
    p.a.hydrate(l.a.createElement(to, {
      schema: cc11001100_hook("schema", t.schema, "object-key-init"),
      components: cc11001100_hook("components", h, "object-key-init"),
      componentInfos: cc11001100_hook("componentInfos", y, "object-key-init"),
      NotFoundComponent: cc11001100_hook("NotFoundComponent", ao, "object-key-init"),
      language: cc11001100_hook("language", a, "object-key-init"),
      componentWrappers: cc11001100_hook("componentWrappers", [].concat(c()(u.pre || []), c()(Xn), c()(u.post || [])), "object-key-init")
    }), r, function () {
      s && s();
    });
  }
  window.biu && window.biu.define && window.biu.define({
    name: cc11001100_hook("name", "@ali/aliyun-com-lowcode-renderer", "object-key-init"),
    version: cc11001100_hook("version", "0.1.0-alpha.0", "object-key-init"),
    dependencies: {
      react: cc11001100_hook("react", "^16.8.1", "object-key-init"),
      "react-dom": cc11001100_hook("react-dom", "^16.8.1", "object-key-init")
    }
  }, function (e, t, r) {
    r.exports = cc11001100_hook("r.exports", co, "assign");
  });
  var io = cc11001100_hook("io", document.getElementById("root"), "var-init");
  function uo(e) {
    cc11001100_hook("e", e, "function-parameter");
    return so.apply(this, arguments);
  }
  function so() {
    return (so = cc11001100_hook("so", o()(u.a.mark(function e(t) {
      return u.a.wrap(function e(r) {
        for (;;) switch (r.prev = cc11001100_hook("r.prev", r.next, "assign")) {
          case 0:
            return r.next = cc11001100_hook("r.next", 2, "assign"), Promise.all(t.map(function (e) {
              return new Promise(function (t) {
                var r = cc11001100_hook("r", document.createElement("link"), "var-init");
                r.setAttribute("type", "text/css"), r.setAttribute("rel", "stylesheet"), r.setAttribute("href", e), document.head.appendChild(r), r.onload = cc11001100_hook("r.onload", function () {
                  t();
                }, "assign");
              });
            }));
          case 2:
          case "end":
            return r.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  function po(e) {
    cc11001100_hook("e", e, "function-parameter");
    return fo.apply(this, arguments);
  }
  function fo() {
    return (fo = cc11001100_hook("fo", o()(u.a.mark(function e(t) {
      return u.a.wrap(function e(r) {
        for (;;) switch (r.prev = cc11001100_hook("r.prev", r.next, "assign")) {
          case 0:
            return r.next = cc11001100_hook("r.next", 2, "assign"), Promise.all(t.map(function (e) {
              return new Promise(function (t) {
                var r = cc11001100_hook("r", document.getElementsByTagName("head")[0], "var-init"),
                  n = cc11001100_hook("n", document.createElement("script"), "var-init");
                n.setAttribute("type", "text/javascript"), n.setAttribute("src", e), document.body.appendChild(n), n.onload = cc11001100_hook("n.onload", function () {
                  t();
                }, "assign");
              });
            }));
          case 2:
          case "end":
            return r.stop();
        }
      }, e);
    })), "assign")).apply(this, arguments);
  }
  window.$PAGE_SCHEMA ? co({
    schema: cc11001100_hook("schema", window.$PAGE_SCHEMA, "object-key-init"),
    container: cc11001100_hook("container", io, "object-key-init"),
    modelDatas: cc11001100_hook("modelDatas", window.$MODEL_DATA, "object-key-init"),
    deliveryDatas: cc11001100_hook("deliveryDatas", window.$DELIVERY_DATA, "object-key-init"),
    onMount: function e() {
      window.$$SSR && (window.$PAGE_INIT_HTML = cc11001100_hook("window.$PAGE_INIT_HTML", null == io ? void 0 : io.innerHTML, "assign"));
    }
  }) : window.$SNAPSHOT_DATA_URL && fetch(window.$SNAPSHOT_DATA_URL).then(function (e) {
    return e.json();
  }).then(function () {
    var e = cc11001100_hook("e", o()(u.a.mark(function e(t) {
      return u.a.wrap(function e(r) {
        for (;;) switch (r.prev = cc11001100_hook("r.prev", r.next, "assign")) {
          case 0:
            return r.next = cc11001100_hook("r.next", 2, "assign"), Promise.all([uo(t.styles), po(t.scripts)]);
          case 2:
            co({
              schema: cc11001100_hook("schema", t.schema, "object-key-init"),
              container: cc11001100_hook("container", io, "object-key-init"),
              modelDatas: cc11001100_hook("modelDatas", t.modelDatas, "object-key-init"),
              deliveryDatas: cc11001100_hook("deliveryDatas", t.deliveryDatas, "object-key-init"),
              onMount: function e() {}
            });
          case 3:
          case "end":
            return r.stop();
        }
      }, e);
    })), "var-init");
    return function (t) {
      return e.apply(this, arguments);
    };
  }());
}]);