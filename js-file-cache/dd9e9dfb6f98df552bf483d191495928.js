function wpc_Inst(n, t, i) {
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var r = cc11001100_hook("r", sj_evt.bind, "var-init"),
    u = cc11001100_hook("u", 0, "var-init"),
    f = cc11001100_hook("f", 0, "var-init");
  r && n && t && i && (r("RMS.ImgAOLInit", function () {
    n.register(i);
  }, 1), r("RMS.ImgAOLCompleted", function () {
    n.schedule({
      task: function () {
        n.recordTimings(i, u, f);
        n.complete(i);
      }
    });
  }, 1), r("RMS.ImgAOLLoaded", function (n) {
    var i, e, r;
    n.length < 2 || (i = cc11001100_hook("i", n[1], "assign"), i && i.state === "success") && (e = cc11001100_hook("e", i.image, "assign"), e && sj_we(e, t)) && (r = cc11001100_hook("r", i.timeStamp, "assign"), u === 0 && (u = cc11001100_hook("u", r, "assign")), r > f && (f = cc11001100_hook("f", r, "assign")));
  }, 1));
}