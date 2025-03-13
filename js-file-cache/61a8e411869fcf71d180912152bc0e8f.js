(function (n, t) {
  onload = cc11001100_hook("onload", function () {
    _G.BPT = cc11001100_hook("_G.BPT", new Date(), "assign");
    n && n();
    !_w.sb_ppCPL && t && sb_st(function () {
      t(new Date());
    }, 0);
  }, "assign");
})(_w.onload, _w.si_PP);