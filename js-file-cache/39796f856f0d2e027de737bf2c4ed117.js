var sj_ajax = function (n, t) {
  function c() {
    i[u] = cc11001100_hook("i[u]", h, "assign");
    i.abort && i.abort();
  }
  function s(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    typeof n == "function" && n(t, {
      request: cc11001100_hook("request", i, "object-key-init"),
      appendTo: function (n) {
        i && sj_appHTML(n, i.responseText);
      }
    });
  }
  var r,
    i = cc11001100_hook("i", sj_gx(), "var-init"),
    u = cc11001100_hook("u", "onreadystatechange", "var-init"),
    f,
    e = cc11001100_hook("e", null, "var-init"),
    o,
    l = cc11001100_hook("l", sb_st, "var-init"),
    a = cc11001100_hook("a", sb_ct, "var-init"),
    h = function () {};
  if (!n || !i) {
    s(r, !1);
    return;
  }
  i.open("get", n, !0);
  t && (r = cc11001100_hook("r", t.callback, "assign"), f = cc11001100_hook("f", t.timeout, "assign"), o = cc11001100_hook("o", t.headers, "assign"), Object.keys(o || {}).forEach(function (n) {
    i.setRequestHeader(n, o[n]);
  }), t.withCredentials !== undefined && (i.withCredentials = cc11001100_hook("i.withCredentials", t.withCredentials, "assign")));
  i[u] = cc11001100_hook("i[u]", function () {
    if (i.readyState === 4) {
      var n = cc11001100_hook("n", !1, "var-init");
      e !== null && a(e);
      i.status === 200 && (n = cc11001100_hook("n", !0, "assign"), i[u] = cc11001100_hook("i[u]", h, "assign"));
      s(r, n);
    }
  }, "assign");
  sj_evt.bind("ajax.unload", c);
  i.send();
  f > 0 && (e = cc11001100_hook("e", l(function () {
    c();
    s(r, !1);
  }, f), "assign"));
};