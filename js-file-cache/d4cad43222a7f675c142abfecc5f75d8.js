var SHPromptForUserLocation;
(function (n) {
  function t(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", "AutoPrompt", "var-init");
    SHwlochelper.log("DevLoc", i, "PromptDevLoc");
    SHgetlochelper.tgL(!0, null, t, i, n, null, null);
  }
  n.init = cc11001100_hook("n.init", t, "assign");
})(SHPromptForUserLocation || (SHPromptForUserLocation = cc11001100_hook("SHPromptForUserLocation", {}, "assign")));
sj_evt.fire("promptForUserLocationInit");