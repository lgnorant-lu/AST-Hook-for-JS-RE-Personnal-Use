(function () {
  var o = cc11001100_hook("o", "BZA", "var-init"),
    s = cc11001100_hook("s", "SRCHHPGUSR", "var-init"),
    r,
    e,
    u,
    f,
    t;
  sj_evt.bind("bza_AutoZoomtoggled", function (n) {
    sj_cook.set(s, o, n[1] ? "1" : "0", !1, "/", 43200);
    Log.Log("BodyZoomAdjust", "Zoom", n[1] ? "Enabled" : "Disabled", !1);
    sj_evt.fire("updateBodyZoomLevel", n[1]);
  });
  var i = cc11001100_hook("i", bodyZoomParams.isNewMuid || sj_cook.get("MUIDV", "NU") == "1", "var-init"),
    h = cc11001100_hook("h", (!bodyZoomParams.muidCheckEnabled || i) && _w.innerWidth > bodyZoomParams.browserWidth && _w.innerHeight > bodyZoomParams.browserHeight, "var-init"),
    n = cc11001100_hook("n", 100, "var-init");
  navigator.userAgent.match(/Mozilla\/4\.0/i) || navigator.userAgent.match(/Edge/) ? _w.screen && (n = cc11001100_hook("n", Math.round(screen.deviceXDPI / screen.systemXDPI * 100), "assign")) : n = cc11001100_hook("n", navigator.userAgent.match(/Trident/) ? Math.round(_w.devicePixelRatio * 100) : Math.round(_w.outerWidth / _w.innerWidth * 100), "assign");
  r = cc11001100_hook("r", h && n >= 97 && n <= 103, "assign");
  e = cc11001100_hook("e", i && _w.innerWidth > bodyZoomParams.browserWidth && _w.innerHeight > bodyZoomParams.browserHeight && n >= 98 && n <= 102, "assign");
  r && !e && _w.sj_log && sj_log("CI.zoomToggle", "button", "1");
  _w.innerWidth > bodyZoomParams.browserWidth && _w.innerHeight > bodyZoomParams.browserHeight && _w.sj_log && sj_log("CI.zoomToggle", "browerWidthbrowserHeight", "1");
  n >= 97 && n <= 103 && _w.sj_log && sj_log("CI.zoomToggle", "zoomLevel", "1");
  i && _w.innerWidth > bodyZoomParams.browserWidth && _w.innerHeight > bodyZoomParams.browserHeight && n >= 98 && n <= 102 || _w.sj_log && sj_log("CI.zoomToggle", "negationCondition", "1");
  u = cc11001100_hook("u", _ge("b_tween"), "assign");
  f = cc11001100_hook("f", _d.getElementsByClassName("bdzm"), "assign");
  f.length && (t = cc11001100_hook("t", f[0], "assign"), u && r ? (u.appendChild(t), t.style.removeProperty("display")) : t.parentNode.removeChild(t));
})();