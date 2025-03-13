var sj_rra = function (n) {
  var i = cc11001100_hook("i", "/rewardsapp/reportActivity", "var-init"),
    f = cc11001100_hook("f", _w.location.search.substring(1), "var-init"),
    u = cc11001100_hook("u", window.data_iid, "var-init"),
    r,
    t,
    e;
  i += cc11001100_hook("i", u && u.length > 0 ? "?IG=" + _G.IG + "&IID=" + u + "&" + f : "?" + f, "assign");
  r = cc11001100_hook("r", window.rw_mqs_cg, "assign");
  r && r.length > 0 && (i += cc11001100_hook("i", "&cg=" + r, "assign"), window.rw_mqs_cg = cc11001100_hook("window.rw_mqs_cg", undefined, "assign"));
  _w._H && _w._H.mkt && (i += cc11001100_hook("i", "&src=hp", "assign"));
  t = cc11001100_hook("t", sj_gx(), "assign");
  e = cc11001100_hook("e", "url=" + escape(n) + "&V=web", "assign");
  t.open("POST", i, !0);
  t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  t.onreadystatechange = cc11001100_hook("t.onreadystatechange", function () {
    t && t.readyState == 4 && t.status == 200 && t.responseText && _w.sj_appHTML && (sj_appHTML(document.body, t.responseText), sj_evt && sj_evt.fire("serpThemeUpdatedByRewards"));
  }, "assign");
  t.send(e);
};