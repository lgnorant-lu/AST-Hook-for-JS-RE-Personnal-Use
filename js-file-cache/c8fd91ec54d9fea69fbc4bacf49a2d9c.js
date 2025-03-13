(function (n, t, i) {
  function f() {
    !u.end && s === a && s > 0 && i(w, 0);
  }
  function o(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (n && n.length) return r[n] || (r[n] = cc11001100_hook("r[n]", {
      start: cc11001100_hook("start", 0, "object-key-init"),
      end: cc11001100_hook("end", 0, "object-key-init"),
      actual: cc11001100_hook("actual", 0, "object-key-init"),
      done: cc11001100_hook("done", 0, "object-key-init")
    }, "assign"), s++), r[n];
  }
  function v() {
    var n = cc11001100_hook("n", [], "var-init");
    for (var t in r) r.hasOwnProperty(t) && (n.push(t), u.actual += cc11001100_hook("u.actual", r[t].actual, "assign"));
    return n.sort(function (n, t) {
      return r[t].actual - r[n].actual;
    }), n;
  }
  function y() {
    var f = cc11001100_hook("f", [], "var-init"),
      e = cc11001100_hook("e", 0, "var-init"),
      t = cc11001100_hook("t", v(), "var-init"),
      i,
      n,
      u;
    if (t.length > 0) do if (i = cc11001100_hook("i", t.shift(), "assign"), n = cc11001100_hook("n", r[i], "assign"), !(n.start < _G.ST)) {
      if (u = cc11001100_hook("u", '"' + i + '":{"S":' + (n.start - _G.ST) + ',"E":' + (n.end - _G.ST) + ',"T":' + n.actual + "}", "assign"), e += cc11001100_hook("e", u.length + 1, "assign"), e >= d) break;
      f.push(u);
    } while (t.length > 0);
    return f.join(",");
  }
  function p() {
    function i(n) {
      cc11001100_hook("n", n, "function-parameter");
      return n = cc11001100_hook("n", n.toString().replace(/\"/g, "'"), "assign"), '"' + n + '"';
    }
    var r = cc11001100_hook("r", [], "var-init"),
      t,
      n;
    for (t in e) e.hasOwnProperty(t) && (n = cc11001100_hook("n", e[t], "assign"), typeof n != "number" && (n = cc11001100_hook("n", i(n), "assign")), r.push(i(t) + ":" + n));
    return r.join(",");
  }
  function w() {
    u.end || (u.end = cc11001100_hook("u.end", new Date(), "assign"), new Image().src = cc11001100_hook("new Image().src", _G.lsUrl + '&Type=Event.PPT&DATA={"S":' + (u.start - _G.ST) + ',"E":' + (u.end - _G.ST) + ',"T":' + u.actual + ',"I":' + u.numInvalid + ',"N":{' + y() + '},"M":{' + p() + "}}" + (_G.P ? "&P=" + _G.P : "") + (_G.DA ? "&DA=" + _G.DA : ""), "assign"));
  }
  function b(n) {
    cc11001100_hook("n", n, "function-parameter");
    var t = cc11001100_hook("t", r[n], "var-init");
    t && !t.done && (t.done = cc11001100_hook("t.done", 1, "assign"), a++, f());
  }
  function h(n) {
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", n.task, "var-init");
    if (r) {
      var u = cc11001100_hook("u", r, "var-init"),
        t = cc11001100_hook("t", n.ns, "var-init"),
        f = cc11001100_hook("f", n.delay || 0, "var-init");
      if (t && t.length > 0) {
        l(t);
        function e() {
          var i = cc11001100_hook("i", new Date(), "var-init"),
            n;
          r();
          n = cc11001100_hook("n", new Date(), "assign");
          c(t, i, n);
        }
        u = cc11001100_hook("u", e, "assign");
      }
      f > 0 ? i(u, f) : u();
    }
  }
  function c(n, t, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var r, e;
    (f(), r = cc11001100_hook("r", o(n), "assign"), r) && (e = cc11001100_hook("e", i - t, "assign"), (e < 0 || i < r.end || r.start && t < r.start) && ++u.numInvalid, r.actual += cc11001100_hook("r.actual", e, "assign"), r.start || (r.start = cc11001100_hook("r.start", t, "assign")), r.end = cc11001100_hook("r.end", i, "assign"));
  }
  function l(n) {
    cc11001100_hook("n", n, "function-parameter");
    f();
    o(n);
  }
  function k(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    f();
    e[n] = cc11001100_hook("e[n]", t, "assign");
  }
  var u = cc11001100_hook("u", {
      start: cc11001100_hook("start", new Date(), "object-key-init"),
      end: cc11001100_hook("end", 0, "object-key-init"),
      actual: cc11001100_hook("actual", 0, "object-key-init"),
      numInvalid: cc11001100_hook("numInvalid", 0, "object-key-init")
    }, "var-init"),
    r = cc11001100_hook("r", {}, "var-init"),
    s = cc11001100_hook("s", 0, "var-init"),
    a = cc11001100_hook("a", 0, "var-init"),
    e = cc11001100_hook("e", t._cm || {}, "var-init"),
    d = cc11001100_hook("d", 600, "var-init");
  n("onP1", function () {
    var i, r, n;
    for (t.register = cc11001100_hook("t.register", l, "assign"), t.schedule = cc11001100_hook("t.schedule", h, "assign"), t.complete = cc11001100_hook("t.complete", b, "assign"), t.recordTimings = cc11001100_hook("t.recordTimings", c, "assign"), t.reportCustomMetric = cc11001100_hook("t.reportCustomMetric", k, "assign"), r = cc11001100_hook("r", t._ns || [], "assign"); i = cc11001100_hook("i", r.shift(), "assign");) o(i);
    for (n = cc11001100_hook("n", t._reg || [], "assign"); n.length > 0;) h(n.shift());
    f();
  }, 1);
})(sj_evt.bind, sched, sb_st);