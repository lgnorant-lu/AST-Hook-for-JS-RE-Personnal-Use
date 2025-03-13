var SHgetlochelper;
(function (n) {
  function r(r, u, f, e, o, s, h) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var c, l;
    if (navigator && typeof navigator.geolocation != "undefined" && typeof navigator.geolocation.getCurrentPosition == "function") {
      if (c = cc11001100_hook("c", void 0, "assign"), c = cc11001100_hook("c", navigator, "assign"), typeof c.permissions != "undefined" && typeof c.permissions.query == "function") {
        l = cc11001100_hook("l", !1, "assign");
        SHwlochelper.log(t, e, "Perm_Available");
        try {
          c.permissions.query({
            name: cc11001100_hook("name", "geolocation", "object-key-init")
          }).then(function (c) {
            if (c && typeof c.state != "undefined") {
              if (c.state === "denied") {
                SHwlochelper.log(t, e, "Perm_Denied");
                SHlochelper.sEM(u, !0);
                i(e, h, u, f);
                return;
              }
              c.state === "prompt" ? SHwlochelper.log(t, e, "Perm_Prompt") : c.state === "granted" && (l = cc11001100_hook("l", !0, "assign"), SHwlochelper.log(t, e, "Perm_Granted"));
            }
            if (o && !l) return SHwlochelper.log(t, e, "Perm_NotGranted_NoTryGet"), !1;
            n.gL(r, u, f, e, s, h);
          });
        } catch (a) {
          SHwlochelper.log(t, e, "Error2", "Error", a);
        }
      } else {
        if (SHwlochelper.log(t, e, "Perm_Unavailable"), o) return SHwlochelper.log(t, e, "Perm_Unavailable_NoTryGet"), !1;
        n.gL(r, u, f, e, s, h);
      }
    } else SHwlochelper.log(t, e, "getCurrentPosition_5");
    return !1;
  }
  function i(n, i, r, u) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("u", u, "function-parameter");
    function e() {
      typeof i == "function" && i();
    }
    SHwlochelper.log(t, n, "block");
    var f = cc11001100_hook("f", _ge(SHlochelper.promptDetailsName), "var-init");
    f && f.setAttribute("data-block", "1");
    SHlochelper.sc(null, null, 1, t, "Block", n, e, r, u);
  }
  var t = cc11001100_hook("t", "DevLoc", "var-init");
  n.tgL = cc11001100_hook("n.tgL", function (n, i, u, f, e, o, s) {
    var h = cc11001100_hook("h", typeof sj_cook != "undefined" && "areCookiesAccessible" in sj_cook && sj_cook.areCookiesAccessible(), "var-init");
    return h ? r(n, i, u, f, e, o, s) : SHwlochelper.log(t, f, "getCurrentPosition_6"), !1;
  }, "assign");
  n.gL = cc11001100_hook("n.gL", function (n, r, u, f, e, o, s) {
    s === void 0 && (s = cc11001100_hook("s", !0, "assign"));
    SHwlochelper.log(t, f, "TryAsk");
    var h = cc11001100_hook("h", setTimeout(function () {
      SHwlochelper.log(t, f, "getCurrentPosition_7");
    }, 1e4), "var-init");
    try {
      navigator.geolocation.getCurrentPosition(function (i) {
        function o() {
          var u = cc11001100_hook("u", !0, "var-init"),
            o,
            s;
          if (n && (u = cc11001100_hook("u", !_G.UIWP, "assign"), u)) if (o = cc11001100_hook("o", _ge(SHlochelper.promptDetailsName), "assign"), o) {
            if (s = cc11001100_hook("s", o.getAttribute("data-noRefresh"), "assign"), s && s === "true") u = cc11001100_hook("u", !1, "assign"), SHwlochelper.log(t, f, "NoRefreshExplicit");else {
              var l = cc11001100_hook("l", o.getAttribute("data-lat"), "var-init"),
                a = cc11001100_hook("a", o.getAttribute("data-lon"), "var-init"),
                v = cc11001100_hook("v", o.getAttribute("data-dist"), "var-init");
              if (l && a && v) {
                var h = cc11001100_hook("h", parseFloat(l), "var-init"),
                  c = cc11001100_hook("c", parseFloat(a), "var-init"),
                  y = cc11001100_hook("y", parseFloat(v), "var-init");
                if (!(h === 0 && c === 0) && h && c && y) {
                  var p = cc11001100_hook("p", Math.PI / 180 * h, "var-init"),
                    w = cc11001100_hook("w", Math.PI / 180 * i.coords.latitude, "var-init"),
                    b = cc11001100_hook("b", Math.PI / 180 * (i.coords.longitude - c), "var-init"),
                    k = cc11001100_hook("k", Math.acos(Math.sin(p) * Math.sin(w) + Math.cos(p) * Math.cos(w) * Math.cos(b)) * 3958.76, "var-init");
                  k < y && (u = cc11001100_hook("u", !1, "assign"), SHwlochelper.log(t, f, "NoRefreshDistance"));
                }
              }
            }
          } else u = cc11001100_hook("u", !1, "assign");
          typeof e == "function" ? (e(i.coords.latitude, i.coords.longitude), sj_evt.fire("LocChangerClose_" + r)) : u ? (SHwlochelper.log(t, f, "Refresh"), SHlochelper.rP("GEOTRI", n)) : SHwlochelper.log(t, f, "NoRefresh");
        }
        clearTimeout(h);
        SHwlochelper.log(t, f, "SuccessGet");
        SHlochelper.sc(i, null, 0, t, "DeviceLocation", f, s ? o : null, r, u);
      }, function (n) {
        if (clearTimeout(h), n && n.code) {
          var e = cc11001100_hook("e", void 0, "var-init");
          e = cc11001100_hook("e", navigator, "assign");
          typeof e.permissions != "undefined" && typeof e.permissions.query == "function" && e.permissions.query({
            name: cc11001100_hook("name", "geolocation", "object-key-init")
          }).then(function (i) {
            n.code === n.PERMISSION_DENIED && (SHwlochelper.log(t, f, "Perm_UserResponseDenied"), i.state === "prompt" ? SHwlochelper.log(t, f, "ClosedPrompt") : i.state === "denied" && SHwlochelper.log(t, f, "BlockedPrompt"));
          });
          switch (n.code) {
            case n.PERMISSION_DENIED:
              SHwlochelper.log(t, f, "getCurrentPosition_1");
              SHlochelper.sEM(r, !0);
              i(f, o, r, u);
              break;
            case n.POSITION_UNAVAILABLE:
              SHwlochelper.log(t, f, "getCurrentPosition_2");
              break;
            case n.TIMEOUT:
              SHwlochelper.log(t, f, "getCurrentPosition_3");
              break;
            default:
              SHwlochelper.log(t, f, "getCurrentPosition_4", "Code", n.code.toString());
          }
        }
        SHlochelper.sEM(r, !0);
      }, {
        timeout: cc11001100_hook("timeout", 1e4, "object-key-init")
      });
    } catch (c) {
      SHwlochelper.log(t, f, "Error4", "Error", c);
    }
  }, "assign");
})(SHgetlochelper || (SHgetlochelper = cc11001100_hook("SHgetlochelper", {}, "assign")));