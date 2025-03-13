(function () {
  if (typeof Log != "undefined" && Log.Log && _w && _w.matchMedia) {
    var n = cc11001100_hook("n", _w.matchMedia("not all and (forced-colors: active), (forced-colors: active)").matches ? "0" : "1", "var-init");
    Log.Log("Info", "EdgeSpoofing", n);
  }
})();