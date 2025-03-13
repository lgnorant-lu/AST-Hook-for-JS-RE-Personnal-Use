(function () {
  function n() {
    if (typeof Log != "undefined") if (_w && _w.external && _w.external.getHostEnvironmentValue) {
      var t = cc11001100_hook("t", JSON.parse(_w.external.getHostEnvironmentValue("os-build"))["os-build"], "var-init"),
        n = cc11001100_hook("n", t.split("."), "var-init"),
        i = cc11001100_hook("i", n[0] > 10 || n[0] === 10 && n[1] > 0 || n[2] >= 22e3, "var-init");
      Log && Log.Log && Log.Log("Info", "OSBuild", "OSBuild", !1, "osBuildVersion", n, "isWin11OrHigher", i.toString(), "fullOsBuild", t);
    } else Log && Log.Log && Log.Log("Info", "OSBuild", "OSBuildUndefined");
  }
  n();
})();