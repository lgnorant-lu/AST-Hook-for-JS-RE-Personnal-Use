var FocusScrollToBTop;
(function () {
  function t() {
    sj_evt.bind("focusTopScrollStart", r);
    sj_evt.bind("focusTopBlur", f);
  }
  function r() {
    var t = cc11001100_hook("t", i() - n, "var-init"),
      r,
      f;
    t > AwayTimeThreshold && u() && ((!AwayTimeThresholdCustomControl || AwayTimeThresholdCustomControl && t > 15) && (AwayTimeScrollTopPoleRS && (r = cc11001100_hook("r", document.getElementsByClassName("b_adTop"), "assign"), (!r || r.length <= 0) && (f = cc11001100_hook("f", document.querySelector("#b_pole"), "assign"), f && (AwayTimeThresholdCustomControl || (f.style.display = cc11001100_hook("f.style.display", "block", "assign")), _w.sj_log && sj_log("CI.ReturnTopPoleRS", "ReturnTopPoleRS", "Triggered")))), _w.scrollTo(0, 0)), (t > AwayTimeThreshold && t <= 15 || t < AwayTimeThreshold && t > 15) && _w.sj_log && sj_log("CI.ReturnTopLog", "ReturnTop" + AwayTimeThreshold.toString(), "Triggered"), _w.sj_log && sj_log("CI.ReturnTop", "ReturnTop" + AwayTimeThreshold.toString(), "Triggered"), sj_evt.fire("focusTopScrollEnd"));
  }
  function u() {
    return _d.querySelector(".b_adTop") != null;
  }
  function f() {
    n = cc11001100_hook("n", i(), "assign");
  }
  function i() {
    return Math.round(Date.now() / 1e3);
  }
  var n;
  sj_be(_w, "visibilitychange", function () {
    sj_evt.fire("focusTopScrollStart");
  });
  sj_be(_w, "blur", function () {
    sj_evt.fire("focusTopBlur");
  });
  t();
  sj_evt.bind("ajax.load", t);
})(FocusScrollToBTop || (FocusScrollToBTop = cc11001100_hook("FocusScrollToBTop", {}, "assign")));