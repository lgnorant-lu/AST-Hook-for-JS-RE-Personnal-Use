var curField = cc11001100_hook("curField", null, "var-init"),
  relationQs = cc11001100_hook("relationQs", new Object(), "var-init"),
  ItemrelationQs = cc11001100_hook("ItemrelationQs", new Object(), "var-init"),
  relationBindTopic = cc11001100_hook("relationBindTopic", new Object(), "var-init"),
  itemRelationBindTopic = cc11001100_hook("itemRelationBindTopic", new Object(), "var-init"),
  relationNotDisplayQ = cc11001100_hook("relationNotDisplayQ", new Object(), "var-init"),
  relationItemNotDisplayQ = cc11001100_hook("relationItemNotDisplayQ", new Object(), "var-init"),
  HasSetItemrelationList = cc11001100_hook("HasSetItemrelationList", new Object(), "var-init"),
  verifymob = cc11001100_hook("verifymob", "", "var-init"),
  verifyControl = cc11001100_hook("verifyControl", null, "var-init"),
  hasQingJing = cc11001100_hook("hasQingJing", !1, "var-init"),
  waitconfirm = cc11001100_hook("waitconfirm", window.reachMaxCheatCount = cc11001100_hook("window.reachMaxCheatCount", !1, "assign"), "var-init"),
  isMatchTitle = cc11001100_hook("isMatchTitle", 0, "var-init"),
  loadStylerArr = cc11001100_hook("loadStylerArr", [], "var-init"),
  assoData = cc11001100_hook("assoData", [], "var-init"),
  scoreTotal360 = cc11001100_hook("scoreTotal360", {}, "var-init"),
  nfjoinid = cc11001100_hook("nfjoinid", "", "var-init"),
  pz = cc11001100_hook("pz", "", "var-init"),
  catiSubmit = cc11001100_hook("catiSubmit", !1, "var-init"),
  topichtmlclass = cc11001100_hook("topichtmlclass", ".topichtml", "var-init"),
  validateProStr = cc11001100_hook("validateProStr", "", "var-init"),
  wjxlangkeyarr = cc11001100_hook("wjxlangkeyarr", ["type_radio_down", "type_check_limit5", "defaultOtherText", "validate_email", "validate_phone", "validate_mobile", "validate_mo_phone", "validate_reticulation", "validate_chinese", "validate_english", "validate_englishdigit", "validate_idcardNum", "validate_num", "validate_decnum", "validate_car", "validate_num1", "validate_num2", "validate_date", "validate_qq", "validate_only", "validate_textbox", "validate_info", "validate_info_wd1", "validate_info_q1", "validate_info_c1", "validate_info_f1", "validate_info_wd3", "validate_info_wd4", "validate_info_check4", "validate_info_check5", "validate_info_submit_title2", "type_radio_clear", "sum_warn", "sum_total", "sum_left", "minTimeTip", "WAIT_UPLOAD_FILE", "WAIT_UPLOAD_FILE_OPERATION_DEL", "SPACE_USED_UP", "CONTACT_PUBLISHER", "NO_MORE_THAN", "SINGLE_NO_MORE_THAN", "CONTINUE", "UPLOAD_FILE_FAIL", "CN_TYPE", "UPLOAD_LODING", "SUCCESS_DELETED", "UPLOAD_SUCCESS", "UPLOAD_FILE_SUCCESS"], "var-init");
function Initlanguage() {
  if (window.wjxuserlang) for (var e in wjxuserlang) wjxlang[e] = cc11001100_hook("wjxlang[e]", wjxuserlang[e], "assign");
  for (var t = cc11001100_hook("t", 0, "var-init"); t < wjxlangkeyarr.length; t++) {
    var i = cc11001100_hook("i", wjxlangkeyarr[t], "var-init");
    window[i] || (window[i] = cc11001100_hook("window[i]", wjxlang[i] || "", "assign"));
  }
}
function loadStyle(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t;
  -1 < loadStylerArr.indexOf(e) || (loadStylerArr.push(e), (t = cc11001100_hook("t", document.createElement("link"), "assign")).setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(t));
}
function loasCaptchaJs() {
  2 == window.captchaType ? $.ajax({
    type: cc11001100_hook("type", "GET", "object-key-init"),
    url: cc11001100_hook("url", "https://o.alicdn.com/captcha-frontend/aliyunCaptcha/AliyunCaptcha.js", "object-key-init"),
    success: function () {
      window.useAliVerify && loadSmartCaptcha();
    },
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init")
  }) : $.ajax({
    type: cc11001100_hook("type", "GET", "object-key-init"),
    url: cc11001100_hook("url", "https://g.alicdn.com/sd/smartCaptcha/0.0.4/index.js", "object-key-init"),
    success: function () {
      $.ajax({
        type: cc11001100_hook("type", "GET", "object-key-init"),
        url: cc11001100_hook("url", "https://g.alicdn.com/sd/nvc/1.1.112/guide.js", "object-key-init"),
        success: function () {
          window.useAliVerify && loadSmartCaptcha();
        },
        dataType: cc11001100_hook("dataType", "script", "object-key-init"),
        cache: cc11001100_hook("cache", !0, "object-key-init")
      });
    },
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init")
  });
}
function setCookie(e, t, i, a, n, r) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  document.cookie = cc11001100_hook("document.cookie", e + "=" + encodeURIComponent(t) + (i ? "; expires=" + i : "") + (a ? "; path=" + a : "") + (n ? "; domain=" + n : "") + (r ? "; secure" : ""), "assign");
}
Initlanguage(), $(function () {
  window.needLoadAliVerify && loasCaptchaJs();
});
var spChars = cc11001100_hook("spChars", ["$", "}", "^", "|", "!", "<"], "var-init"),
  spToChars = cc11001100_hook("spToChars", ["ξ", "｝", "ˆ", "¦", "！", "＜"], "var-init"),
  prevInputControl = cc11001100_hook("prevInputControl", null, "var-init"),
  isLoadingAnswer = cc11001100_hook("isLoadingAnswer", !1, "var-init"),
  lastCostTime = cc11001100_hook("lastCostTime", 0, "var-init"),
  hasClickQ = cc11001100_hook("hasClickQ", !1, "var-init"),
  needGoOut = cc11001100_hook("needGoOut", !1, "var-init"),
  hasShowTip = cc11001100_hook("hasShowTip", !1, "var-init"),
  keywordarray = cc11001100_hook("keywordarray", "", "var-init"),
  keywordObj = cc11001100_hook("keywordObj", null, "var-init"),
  quarray = cc11001100_hook("quarray", "", "var-init"),
  hlv = cc11001100_hook("hlv", "1", "var-init"),
  jpmarr = cc11001100_hook("jpmarr", new Array(), "var-init"),
  jpmObj = cc11001100_hook("jpmObj", new Object(), "var-init"),
  jqParam = cc11001100_hook("jqParam", "", "var-init"),
  isLoadQues = cc11001100_hook("isLoadQues", !1, "var-init"),
  scrFormHeightDif = cc11001100_hook("scrFormHeightDif", 0, "var-init");
function replace_specialChar(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (!e) return e;
  for (var t = cc11001100_hook("t", 0, "var-init"); t < spChars.length; t++) {
    var i = cc11001100_hook("i", new RegExp("(\\" + spChars[t] + ")", "g"), "var-init");
    e = cc11001100_hook("e", e.replace(i, spToChars[t]), "assign");
  }
  return e = cc11001100_hook("e", (e = cc11001100_hook("e", /^[A-Za-z\s\.,]+$/.test(e) ? e.replace(/[ \t\f]+/g, " ") : e, "assign")).replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\ud800-\udfff\u10000-\u10FFFF]/gi, ""), "assign"), $.trim(e);
}
function getKsAnswer(e) {
  cc11001100_hook("e", e, "function-parameter");
  return e ? (e = cc11001100_hook("e", e.dbc2sbc(), "assign")).replace(/\</g, "＜").replace(/\>/g, "＞").replace(/\&/g, "＆").replace(/\!/g, "！").replace(/\^/g, "＾").replace(/\$/g, "＄").replace(/\}/g, "｝") : "";
}
String.prototype.dbc2sbc = cc11001100_hook("String.prototype.dbc2sbc", function () {
  return this.replace(/[\uff01-\uff5e]/g, function (e) {
    return String.fromCharCode(e.charCodeAt(0) - 65248);
  }).replace(/\u3000/g, " ");
}, "assign");
var curPageIndex = cc11001100_hook("curPageIndex", 0, "var-init");
function pushHistory(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (!window.showCoverNoEnd && ("miniprogram" !== window.__wxjs_environment || window.isJieLong) && !window.IsPar && window == window.top) {
    e = cc11001100_hook("e", {
      page: cc11001100_hook("page", curPageIndex = cc11001100_hook("curPageIndex", e || 1, "assign"), "object-key-init")
    }, "assign");
    window.history.pushState(e, "title", "#" + curPageIndex);
    try {
      window.wxReady && wxReady();
    } catch (e) {}
  }
}
function clickJp(e) {
  cc11001100_hook("e", e, "function-parameter");
  e = cc11001100_hook("e", e.getAttribute("vhref"), "assign");
  return window.location = cc11001100_hook("window.location", e, "assign"), !0;
}
function show_zhezhao_tip(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t, i;
  e ? window.carKeyboardLayerIndex ? (layer.close(carKeyboardLayerIndex), window.carKeyboardLayerIndex = cc11001100_hook("window.carKeyboardLayerIndex", 0, "assign")) : $("#zhezhaotip")[0] || (i = cc11001100_hook("i", e = cc11001100_hook("e", "", "assign"), "assign"), "miniprogram" === window.__wxjs_environment && (i = cc11001100_hook("i", "&minip=1", "assign")), e = cc11001100_hook("e", "<div style='width: 100%;height:67px;text-align: center;'><a href='javascript:' onclick='return clickJp(this);' vhref='/newsojiang/mobile/getaward.aspx?sType=3&activity=" + activityId + i + "' style='font-size: 14px;color: #ff7b8f;display:block;'><div style='text-align: center;padding-top:10px' ><img src='//image.wjx.com/images/mobile/liwu.png' alt='' height='16px' width='16px' style='top: 2px;position: relative;margin-right:4px;' />" + getlang("getAward") + "</div><div style='font-size: 12px;color: #adadad;margin-top:4px;'>" + getlang("nextcomplete") + "</div></a></div>", "assign"), i = cc11001100_hook("i", "border-bottom: 1px solid #D9E4FF;height:126px;", "assign"), t = cc11001100_hook("t", "300px", "assign"), window.canAward && window.allowAward || (e = cc11001100_hook("e", "", "assign"), i = cc11001100_hook("i", "height:126px;", "assign"), t = cc11001100_hook("t", "250px", "assign")), t = cc11001100_hook("t", "<div class='popuptip' style='width:300px;background:#fff;border-radius: 10px;margin: auto;position: absolute; z-index: 9999;overflow: hidden;height:" + t + ";'>" + ("<div style='width:100%;'><div class='mainBgColor' style='background:#3064DB;height:80px;color:#fff;text-align:center;padding-top:30px;'>" + (window.hasTouPiao ? getlang("isquitTp") : getlang("isquitTx")) + "</div><div style='" + i + "'><div class='mainBgColor' style='margin:30px auto 0; background-color: #1D66F0; font-size: 16px; color: #fff; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='show_zhezhao_tip(false);'>" + (window.hasTouPiao ? getlang("keeponTp") : getlang("keeponTx")) + "</div><div style='margin:16px auto 0; background-color: #EBF2FF; font-size: 16px; color: #C0C0C0; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='closeTipWindow(true);'>" + getlang("surequit") + "</div></div></div>") + e + "</div>", "assign"), $("body").append('<div style="z-index:10000000;top: 0px;left: 0px;position: fixed;width: 100%;height: 100%;" id="zhezhaotip"><div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;opacity: 0.5;background-color: #000;"></div>' + t + "</div>"), i = cc11001100_hook("i", 100, "assign"), i = cc11001100_hook("i", (e = cc11001100_hook("e", $("html").height(), "assign")) < (t = cc11001100_hook("t", $(window).height(), "assign")) ? t : e, "assign"), $("#zhezhaotip").height(i), $(".popuptip").css("left", ($(window).width() - $(".popuptip").width()) / 2), $(".popuptip").css("top", ($(window).height() - $(".popuptip").height()) / 2), setLastPop(), hasShowTip = cc11001100_hook("hasShowTip", !0, "assign")) : $("#zhezhaotip").remove();
}
function closeTipWindow(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", getlang("isleave"), "var-init");
  window.WeixinJSBridge ? (t = cc11001100_hook("t", document.referrer && !window.isactivity && document.referrer != window.location.href.split("#")[0] && !window.access_token && -1 == document.referrer.indexOf("VerifyPasswordMobile2.aspx"), "assign"), e ? t ? history.go(-2) : (WeixinJSBridge.call("closeWindow"), wx.closeWindow()) : confirmnew(i, function () {
    t ? history.go(-2) : (WeixinJSBridge.call("closeWindow"), wx.closeWindow());
  })) : (show_zhezhao_tip(!(needGoOut = cc11001100_hook("needGoOut", !0, "assign"))), window.close && window.close(), window.history.back());
}
function setLastPop() {}
function checkCanPop() {
  return !!window.localStorage && !localStorage.wjxuserpub && !(-1 < window.location.href.indexOf("?pvw=1") || -1 < window.location.href.indexOf("&pvw=1") || window.isVip || 1 == langVer || !window.canAward);
}
var isPageRun = cc11001100_hook("isPageRun", !1, "var-init"),
  UPLOAD_FILE_SUCCESS = cc11001100_hook("UPLOAD_FILE_SUCCESS", "", "var-init"),
  curfilediv = cc11001100_hook("curfilediv", ($(function () {
    UPLOAD_FILE_SUCCESS = cc11001100_hook("UPLOAD_FILE_SUCCESS", getlang("upload_success"), "assign"), window.addEventListener && (window.IsPar || window != window.top ? window == window.top || window.IsPar || $("#divPowerBy").css({
      background: cc11001100_hook("background", "#fff", "object-key-init")
    }) : window.touPiaoItemIndex || window.addEventListener("load", function () {
      setTimeout(function () {
        window.addEventListener("popstate", function (e) {
          window.mobilePeoBack && mobilePeoBack() || (2 == curPageIndex ? ($("#toplogo,#toptitle,#divContent,#divPowerBy").hide(), $("#jielongDiv").show(), $("#form1").css("margin", "0px"), curPageIndex = cc11001100_hook("curPageIndex", 0, "assign")) : hasClickQ && !window.touPiaoItemIndex && (needGoOut ? window.history.back() : !isWeiXin || 0 != langVer || window.noquitalert || window.OneaTime || (pushHistory(), show_zhezhao_tip(!0))));
        }, !1);
      }, 500);
    }));
  }), String.prototype.format = cc11001100_hook("String.prototype.format", function () {
    var i = cc11001100_hook("i", arguments, "var-init");
    return this.replace(/\{(\d+)\}/g, function (e, t) {
      return i[t];
    });
  }, "assign"), null), "var-init"),
  isUploadingFile = cc11001100_hook("isUploadingFile", !1, "var-init"),
  cur_page = cc11001100_hook("cur_page", 0, "var-init"),
  hasSkipPage = cc11001100_hook("hasSkipPage", !1, "var-init"),
  prevControl = cc11001100_hook("prevControl", null, "var-init"),
  pageHolder = cc11001100_hook("pageHolder", null, "var-init"),
  trapHolder = cc11001100_hook("trapHolder", new Array(), "var-init"),
  curMatrixFill = cc11001100_hook("curMatrixFill", null, "var-init"),
  curMatrixError = cc11001100_hook("curMatrixError", null, "var-init"),
  questionsObject = cc11001100_hook("questionsObject", new Object(), "var-init"),
  allQArray = cc11001100_hook("allQArray", null, "var-init"),
  shopArray = cc11001100_hook("shopArray", new Array(), "var-init");
function setMatrixFill() {
  curMatrixError && !curMatrixFill.fillvalue || $("#divMatrixRel").hide();
}
function setChoice(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t;
  -1 != e.selectedIndex && ($(e).closest(".ui-select").hasClass("initStyle") && $(e).closest(".ui-select").removeClass("initStyle"), (t = cc11001100_hook("t", $(e.parentNode).prev("input"), "assign"))[0] && (t[0].value = cc11001100_hook("t[0].value", e.value, "assign")), t.blur(), initTableSelectInput(e));
}
function chooseHalfEntire(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t;
  $("#divMatrixHeader").data("referElement") && (t = cc11001100_hook("t", $("#divMatrixHeader").data("referElement"), "assign"), -1 < e.className.indexOf("entireone") ? t.trigger("click") : ((t = cc11001100_hook("t", $("#divMatrixHeader").data("referElement").parent().prev().find("a"), "assign")).trigger("click"), t.hasClass("rate-on") && ($("#divMatrixHeader").data("referElement").parent().find(".ishalf").hide(), $("#divMatrixHeader").data("referElement").parent().find(".ishalf").show())), $("#divMatrixHeader").hide(), setTimeout(function () {
    $(t).attr("needfill") && !isLoadingAnswer && showMatrixFill(t[0]);
  }));
}
function showMatrixHeader(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  if (("6" == $(t).attr("type") || "5" == $(t).attr("type")) && !$(e).parent().hasClass("aloneAnsItemDiv") && (!window.IsPar || 0 < $(e).find(".ishalf").length && $(e).attr("halfbar"))) {
    var i = cc11001100_hook("i", $(e).offset(), "var-init"),
      a = cc11001100_hook("a", i.top - 9, "var-init"),
      n = cc11001100_hook("n", i.left, "var-init"),
      r = cc11001100_hook("r", $(e).width(), "var-init"),
      o = cc11001100_hook("o", !1, "var-init");
    if (!(0 < $(e).find(".ishalf").length) || $(e).attr("halfbar")) {
      if ("6" == $(t).attr("type")) {
        var s = cc11001100_hook("s", "true" == $(t).attr("daozhi"), "var-init");
        if ("6" == $(e).attr("mode")) return;
        var a = cc11001100_hook("a", i.top - 9, "var-init"),
          l = cc11001100_hook("l", ($(window).width(), $(e).closest("tr").children("td").index($(e).closest("td"))), "var-init"),
          l = cc11001100_hook("l", $("table.matrix-rating", t)[0].rows[0].cells[l], "var-init"),
          l = cc11001100_hook("l", $(l).text(), "var-init"),
          n = cc11001100_hook("n", ((l = cc11001100_hook("l", s ? $(e).closest("tr").prev(".rowtitle").children("td").text().trim() : l, "assign")).length, $(e).width(), i.left + r / 2), "var-init");
        (o = cc11001100_hook("o", 0 < $(e).find(".ishalf").length && $(e).attr("halfbar"), "assign")) && (l = cc11001100_hook("l", $(e).attr("halfbar"), "assign"));
      } else o = cc11001100_hook("o", 0 < $(e).find(".ishalf").length && $(e).attr("halfbar"), "assign"), n = cc11001100_hook("n", (a = cc11001100_hook("a", $(e).attr("mode") && ("2" == $(e).attr("mode") || "3" == $(e).attr("mode") || "4" == $(e).attr("mode")) || $(e).attr("mode") && "6" == $(e).attr("mode") ? ($(window).width(), (i = cc11001100_hook("i", $(e).offset(), "assign")).top - 9) : ($(e).height(), i.top - 9), "assign"), 12 * (l = cc11001100_hook("l", $(e).attr("title"), "assign")).length, i.left + r / 2), "assign"), o && (l = cc11001100_hook("l", $(e).attr("halfbar"), "assign"));
      $("#divMatrixHeader").html(l), a -= cc11001100_hook("a", $("#divMatrixHeader").outerHeight(), "assign"), n -= cc11001100_hook("n", $("#divMatrixHeader").outerWidth() / 2, "assign"), $("#divMatrixHeader")[0].referTopic = cc11001100_hook("$(\"#divMatrixHeader\")[0].referTopic", getTopic($(t)), "assign"), $("#divMatrixHeader").css("top", a + "px").css("left", n + "px").show(), $("#divMatrixHeader").data("referElement", $(e)), window.matrixheaderTimeout && clearTimeout(matrixheaderTimeout), window.matrixheaderTimeout = cc11001100_hook("window.matrixheaderTimeout", window.setTimeout(function () {
        $("#divMatrixHeader").hide(), $("#divMatrixHeader").removeData("referElement");
      }, o ? 1e4 : 2e3), "assign");
    }
  }
}
function aloneAnswerToItem(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i,
    a,
    n = cc11001100_hook("n", $(e).closest(".aloneAnswer"), "var-init");
  0 < n.length && $(e).is(":hidden") && (i = cc11001100_hook("i", n.find("tr.rowtitle"), "assign"), a = cc11001100_hook("a", (i = cc11001100_hook("i", (i = cc11001100_hook("i", t ? n.find(".select_title") : i, "assign")).filter(function () {
    return "none" != this.style.display;
  }).toArray(), "assign")).indexOf($(e).closest("tr").prev()[0]) + 1, "assign"), 0 <= (a = cc11001100_hook("a", t ? i.indexOf($(e).closest(".mdivtable").prev()[0]) + 1 : a, "assign"))) && (n[0].rowsIndex = cc11001100_hook("n[0].rowsIndex", a, "assign"), n[0].showrow) && n[0].showrow(!0, !0);
}
function showMatrixFill(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  if (aloneAnswerToItem(e), t) {
    if (curMatrixError) return;
    curMatrixError = cc11001100_hook("curMatrixError", e, "assign");
  }
  (curMatrixFill = cc11001100_hook("curMatrixFill", e, "assign")) && $("#matrixinput").attr("gsid", "");
  var t = cc11001100_hook("t", e.fillvalue || "", "var-init"),
    t = cc11001100_hook("t", ($("#matrixinput")[0].value = cc11001100_hook("$(\"#matrixinput\")[0].value", t, "assign"), $(e).attr("req"), getlang("tit_specify")), "var-init"),
    i = cc11001100_hook("i", $(e).attr("tph"), "var-init");
  i && (t = cc11001100_hook("t", decodeURIComponent(i.replace(/\+/g, " ")), "assign"));
  e.getAttribute("req") && (t += cc11001100_hook("t", " * ", "assign")), $("#matrixinput").attr("placeholder", t);
  var i = cc11001100_hook("i", e, "var-init"),
    t = cc11001100_hook("t", ($(e).closest("td")[0] && "none" == $(e).closest("td")[0].style.display && (i = cc11001100_hook("i", $(e).closest("td").next().find("a"), "assign")), $(i).offset()), "var-init"),
    e = cc11001100_hook("e", t.top + $(i).outerHeight(), "var-init");
  "relative" == $("#divContent").css("position") && (e -= cc11001100_hook("e", $("#divContent").offset().top, "assign")), $("#divMatrixRel").css("top", e + "px").css("left", "0").css("z-index", "10000").show(), 800 <= $(window).width() && (i = cc11001100_hook("i", t.left, "assign"), "relative" == $("#divContent").css("position") && (i -= cc11001100_hook("i", $("#divContent").offset().left, "assign")), $("#divMatrixRel").css({
    width: cc11001100_hook("width", "500px", "object-key-init"),
    left: cc11001100_hook("left", "50%", "object-key-init"),
    "margin-left": cc11001100_hook("margin-left", "-250px", "object-key-init")
  }), i + 500 < $(window).width() ? $("#divMatrixRel").css({
    left: cc11001100_hook("left", i + "px", "object-key-init"),
    "margin-left": cc11001100_hook("margin-left", "0px", "object-key-init")
  }) : 100 < i - 460 && $("#divMatrixRel").css({
    left: cc11001100_hook("left", i - 460 + "px", "object-key-init"),
    "margin-left": cc11001100_hook("margin-left", "0px", "object-key-init")
  }));
}
function refresh_validate(e) {
  cc11001100_hook("e", e, "function-parameter");
  2 == window.captchaType && (window.captchaSubmit = cc11001100_hook("window.captchaSubmit", !0, "assign"), isCaptchaValid = cc11001100_hook("isCaptchaValid", !1, "assign")), !window.useAliVerify && e ? (useAliVerify = cc11001100_hook("useAliVerify", 1, "assign"), captchaOjb ? 2 == window.captchaType && captcha2 && captcha2.$button.click() : loadSmartCaptcha(function () {
    2 == window.captchaType && captcha2.$button.click();
  }), $("#captcha").show()) : window.useAliVerify && (isCaptchaValid = cc11001100_hook("isCaptchaValid", !1, "assign"), captchaOjb) && captchaOjb.reload();
}
function showCaptcha() {
  captchaOjb || loadSmartCaptcha(), voteData();
}
var captchaVerifyParam,
  captcha2,
  isCaptchaValid = cc11001100_hook("isCaptchaValid", !1, "var-init"),
  nc_csessionid = cc11001100_hook("nc_csessionid", "", "var-init"),
  nc_sig = cc11001100_hook("nc_sig", "", "var-init"),
  nc_token = cc11001100_hook("nc_token", ["FFFF00000000016770EE", new Date().getTime(), Math.random()].join(":"), "var-init"),
  captchaOjb = cc11001100_hook("captchaOjb", null, "var-init"),
  hasSubmitTimes = cc11001100_hook("hasSubmitTimes", 0, "var-init");
function loadSmartCaptcha(t) {
  cc11001100_hook("t", t, "function-parameter");
  var e;
  2 == window.captchaType ? (e = cc11001100_hook("e", ["cn", "en", "tw", "ja", "ko", "ar", "fr", "de", "es", "pt", "it", "ru", "th", "tr", "in", "vi"][langVer] || "en", "assign"), initAliyunCaptcha({
    SceneId: cc11001100_hook("SceneId", "1v4kh2q3", "object-key-init"),
    prefix: cc11001100_hook("prefix", "s5fgoo", "object-key-init"),
    mode: cc11001100_hook("mode", "popup", "object-key-init"),
    element: cc11001100_hook("element", "#captcha", "object-key-init"),
    button: cc11001100_hook("button", "#captchabtn", "object-key-init"),
    getInstance: function (e) {
      (captchaOjb = cc11001100_hook("captchaOjb", captcha2 = cc11001100_hook("captcha2", e, "assign"), "assign")).reload = cc11001100_hook("(captchaOjb = captcha2 = e).reload", function () {
        captcha2.$button.click();
      }, "assign"), t && t();
    },
    upLang: {
      POPUP_TITLE: cc11001100_hook("POPUP_TITLE", smdefaultTxt, "object-key-init"),
      SUCCESS: cc11001100_hook("SUCCESS", smsuccessTxt, "object-key-init"),
      SLIDE_FAIL: cc11001100_hook("SLIDE_FAIL", smscaningTxt, "object-key-init")
    },
    captchaVerifyCallback: function (e) {
      if (window.captchaSubmit) return window.captchaSubmit = cc11001100_hook("window.captchaSubmit", !1, "assign"), window.repeatCaptch = cc11001100_hook("window.repeatCaptch", !0, "assign"), hasSubmitTimes = cc11001100_hook("hasSubmitTimes", 0, "assign"), {
        captchaResult: cc11001100_hook("captchaResult", !1, "object-key-init")
      };
      if (!isCaptchaValid && (isCaptchaValid = cc11001100_hook("isCaptchaValid", !0, "assign"), captchaVerifyParam = cc11001100_hook("captchaVerifyParam", e, "assign"), verifyControl ? (verifyControl.sendActivitySms(1), $("#captcha").hide(), $("#captchaOut").hide()) : 0 == hasSubmitTimes && (hasSubmitTimes++, $("#ctlNext").trigger("click")), window.repeatCaptch)) return window.repeatCaptch = cc11001100_hook("window.repeatCaptch", !1, "assign"), {
        captchaResult: cc11001100_hook("captchaResult", !0, "object-key-init")
      };
    },
    slideStyle: {
      width: cc11001100_hook("width", 360, "object-key-init"),
      height: cc11001100_hook("height", 40, "object-key-init")
    },
    language: cc11001100_hook("language", e, "object-key-init"),
    immediate: cc11001100_hook("immediate", !0, "object-key-init")
  })) : (captchaOjb = cc11001100_hook("captchaOjb", new smartCaptcha({
    renderTo: cc11001100_hook("renderTo", "#captcha", "object-key-init"),
    default_txt: cc11001100_hook("default_txt", smdefaultTxt, "object-key-init"),
    success_txt: cc11001100_hook("success_txt", smsuccessTxt, "object-key-init"),
    scaning_txt: cc11001100_hook("scaning_txt", smscaningTxt, "object-key-init"),
    success: function (e) {
      isCaptchaValid || (isCaptchaValid = cc11001100_hook("isCaptchaValid", !0, "assign"), nc_token = cc11001100_hook("nc_token", NVC_Opt.token, "assign"), nc_csessionid = cc11001100_hook("nc_csessionid", e.sessionId, "assign"), nc_sig = cc11001100_hook("nc_sig", e.sig, "assign"), verifyControl ? (verifyControl.sendActivitySms(1), $("#captcha").hide(), $("#captchaOut").hide()) : 0 == hasSubmitTimes && (hasSubmitTimes++, $("#ctlNext").trigger("click")));
    }
  }), "assign"), t && t(), captchaOjb.init(), $("#captcha").hide());
}
function processRadioInput(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  e.prevRadio && e.prevRadio.itemText && e.prevRadio != t && (e.prevRadio.itemText.pvalue = cc11001100_hook("e.prevRadio.itemText.pvalue", e.prevRadio.itemText.value, "assign"), e.prevRadio.itemText.value = cc11001100_hook("e.prevRadio.itemText.value", "", "assign")), t.itemText && t != e.prevRadio && (t.itemText.value = cc11001100_hook("t.itemText.value", t.itemText.pvalue || "", "assign")), e.prevRadio = cc11001100_hook("e.prevRadio", t, "assign");
}
function addClearHref(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", $(e).attr("contactsuser"), "var-init");
  i || "" === i || window.isKaoShi && "1" != $(e).attr("nc") || window.isinterview || ($(e)[0].hasClearHref ? $(e)[0].clearHref.style.display = cc11001100_hook("$(e)[0].clearHref.style.display", "", "assign") : (i = cc11001100_hook("i", "1" == $(e).attr("maxdiff"), "assign"), "1" != $(e).attr("conjoint") && ((t = cc11001100_hook("t", document.createElement("a"), "assign")).title = cc11001100_hook("(t = document.createElement(\"a\")).title", validate_info_submit_title2, "assign"), t.className = cc11001100_hook("t.className", "clearchoice", "assign"), t.style.color = cc11001100_hook("t.style.color", "#999999", "assign"), t.style.marginLeft = cc11001100_hook("t.style.marginLeft", "16px", "assign"), t.innerHTML = cc11001100_hook("t.innerHTML", "[" + type_radio_clear + "]", "assign"), i && (t.innerHTML = cc11001100_hook("t.innerHTML", getlang("rechiose"), "assign")), t.href = cc11001100_hook("t.href", "javascript:void(0);", "assign"), $(e)[0].hasClearHref = cc11001100_hook("$(e)[0].hasClearHref", !0, "assign"), $(e)[0].clearHref = cc11001100_hook("$(e)[0].clearHref", t, "assign"), (i ? (t.className = cc11001100_hook("t.className", "clearchoice mdrechioce", "assign"), $(e).find(".mdpageWrap")) : $(e).find(topichtmlclass)).append(t), t.onclick = cc11001100_hook("t.onclick", function () {
    clearFieldValue(e, !0), clearGsDsiable($(e)), displayRelationByType(e), window.TotalValBoxInit && TotalValBoxInit(), referTitle(e), jumpAny(!(this.style.display = cc11001100_hook("this.style.display", "none", "assign")), e), saveAnswer(e);
  }, "assign"))));
}
function clearGsDsiable(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", e.attr("type"), "var-init"),
    i = cc11001100_hook("i", e.find(".gs-disable-click"), "var-init"),
    a = cc11001100_hook("a", e.find(".gs-tips"), "var-init");
  if (3 == t || 4 == t || 5 == t || 6 == t || 1 == t) {
    if (window.defaultGsMap || window.GSDATA) {
      var n,
        r = cc11001100_hook("r", window.GsOld ? window.gsSaveValueMap : window.PROXYOBJ, "var-init"),
        o = cc11001100_hook("o", ($("#divMatrixHeader").text(""), "q" + e.attr("id").replace(/[^0-9]/gi, "")), "var-init");
      for (n in r) if (-1 < (n = cc11001100_hook("n", GsReturnId(n), "assign")).indexOf(o)) {
        if (window.GsOld) return r[n] = cc11001100_hook("r[n]", "", "assign"), void GsModifyDataMap.call({
          id: cc11001100_hook("id", n, "object-key-init"),
          type: cc11001100_hook("type", "radio", "object-key-init"),
          val: cc11001100_hook("val", "", "object-key-init")
        });
        r[n] = cc11001100_hook("r[n]", "clearAnswer", "assign");
      }
    }
    i.length && (a.remove(), a.removeClass("gs-tips"));
  }
}
function addQTypeTip(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i,
    a = cc11001100_hook("a", e.find(".qtypetip"), "var-init"),
    n = cc11001100_hook("n", (window.IsOneQuestionPerPage && (a = cc11001100_hook("a", $("#qtypetipWrap"), "assign")), e.attr("minvalue")), "var-init"),
    r = cc11001100_hook("r", e.attr("maxvalue"), "var-init");
  a.length && (n || r) && (i = cc11001100_hook("i", t = cc11001100_hook("t", "", "assign"), "assign"), n && (t = cc11001100_hook("t", getlang("type_check_atLeastItem"), "assign"), i = cc11001100_hook("i", n, "assign")), r && (t = cc11001100_hook("t", getlang("type_check_atMostItem"), "assign"), i = cc11001100_hook("i", r, "assign")), n && r && (t = cc11001100_hook("t", getlang("type_check_itemLenth"), "assign"), i = cc11001100_hook("i", n + "-" + r, "assign"), n == r) && (i = cc11001100_hook("i", n, "assign")), r = cc11001100_hook("r", e.find("input:checked").length, "assign"), n = cc11001100_hook("n", t.replace("{0}", i).replace("{1}", r), "assign"), window.IsOneQuestionPerPage && (n = cc11001100_hook("n", n && n.replace("【", "").replace("】", ""), "assign")), 0 < window.langVer && "2" != window.langVer && (n = cc11001100_hook("n", n && n.replace("【", "[").replace("】", "]"), "assign")), a.html(n));
}
function referTitle(n, e) {
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  if ($(n)[0]._titleTopic) {
    "9" == $(n).attr("type") && (t = cc11001100_hook("t", "", "assign"), i = cc11001100_hook("i", $("input:not(.file input[type=file]), .file,textarea", n), "assign"), $(i).each(function () {
      if (window.hasReferClient && "1" != $(n).attr("gapfill")) {
        var e = cc11001100_hook("e", $(this).closest("tr"), "var-init");
        if (e[0] && "none" == e[0].style.display) return !0;
      }
      if (!this.value) return !0;
      t && (t += cc11001100_hook("t", " ", "assign")), t += cc11001100_hook("t", this.value, "assign");
    }), e = cc11001100_hook("e", t, "assign"));
    var t,
      i,
      r = cc11001100_hook("r", "", "var-init");
    null == e ? (i = cc11001100_hook("i", "input:checked", "assign"), "11" == $(n).attr("type") && (i = cc11001100_hook("i", "span.sortnum-sel", "assign")), $(i, n).each(function (e) {
      var t = cc11001100_hook("t", $(this).parent().next(), "var-init"),
        i = cc11001100_hook("i", t.html(), "var-init"),
        a = cc11001100_hook("a", (0 < t.children(".peiecontent").length && ((a = cc11001100_hook("a", t.clone(), "assign")).children(".peiecontent").remove(), i = cc11001100_hook("i", a.html(), "assign")), "11" != $(n).attr("type") && $(t).attr("for") || (i = cc11001100_hook("i", t.text(), "assign")), r && (r += cc11001100_hook("r", "&nbsp;", "assign")), r += cc11001100_hook("r", i, "assign"), $(this).attr("rel")), "var-init");
      a && (t = cc11001100_hook("t", document.getElementById(a), "assign")) && (i = cc11001100_hook("i", t.value, "assign")) && i != defaultOtherText && (r += cc11001100_hook("r", "[" + i + "]", "assign"));
    })) : r = cc11001100_hook("r", e, "assign");
    for (var a = cc11001100_hook("a", 0, "var-init"); a < $(n)[0]._titleTopic.length; a++) {
      var o = cc11001100_hook("o", $(n)[0]._titleTopic[a], "var-init"),
        s = cc11001100_hook("s", $(n)[0].getAttribute("topic"), "var-init"),
        l = cc11001100_hook("l", $(".spanTitleTopic" + o + "_" + s), "var-init");
      if (l[0]) for (var d = cc11001100_hook("d", 0, "var-init"); d < l.length; d++) l[d].innerHTML = cc11001100_hook("l[d].innerHTML", r, "assign");
    }
  }
}
var hasPeiEFull = cc11001100_hook("hasPeiEFull", !1, "var-init");
function emptyTitle() {}
function checkPeiE(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", "1" == e.attr("istrap"), "var-init");
  if (!i) {
    i = cc11001100_hook("i", t && "1" == e.attr("req") && "1" == e.attr("peie") && "" == e[0].style.display, "assign");
    if (i && $(t, e).each(function () {
      this.disabled && "-2" != this.value && $(this).closest("div").css("background", "#f9f9f9");
    }), !hasPeiEFull) {
      var n,
        a = cc11001100_hook("a", "", "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      if (i) {
        var o = cc11001100_hook("o", !0, "var-init");
        if ($(t, e).each(function () {
          if (!this.disabled && "-2" != this.value) return o = cc11001100_hook("o", !1, "assign");
        }), o) {
          hasPeiEFull = cc11001100_hook("hasPeiEFull", !0, "assign");
          var s = cc11001100_hook("s", e.attr("id").replace("div", ""), "var-init");
          if (window.cityPeiEQues) for (var l = cc11001100_hook("l", cityPeiEQues.split(";"), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < l.length; d++) {
            var c = cc11001100_hook("c", l[d].split("|"), "var-init");
            if (3 == c.length && s == c[0]) {
              r = cc11001100_hook("r", c[2], "assign"), a = cc11001100_hook("a", c[1], "assign");
              break;
            }
          }
        }
      }
      t && "1" == e.attr("req") && "1" == e.attr("haspeie") && "" == e[0].style.display && (o = cc11001100_hook("o", !0, "assign"), n = cc11001100_hook("n", e.attr("id"), "assign"), $(t, e).each(function () {
        var e = cc11001100_hook("e", $(this).attr("attrpeie"), "var-init");
        if (!e) return o = cc11001100_hook("o", !1, "assign");
        var e = cc11001100_hook("e", e.split(";"), "var-init"),
          t = cc11001100_hook("t", "div" + e[0].split("|")[0], "var-init");
        if (n == t) {
          if (!this.disabled && "-2" != this.value) return o = cc11001100_hook("o", !1, "assign");
        } else {
          var i = cc11001100_hook("i", $("#" + t + " input[type='radio']"), "var-init"),
            a = cc11001100_hook("a", (i = cc11001100_hook("i", 0 == (i = cc11001100_hook("i", 0 == i.length ? $("#" + t + " input[type='checkbox']") : i, "assign")).length ? $("#" + t + " input[type='hidden']") : i, "assign")).length, "var-init");
          if (0 == a && (a = cc11001100_hook("a", 0 < (i = cc11001100_hook("i", $("#" + t + " option"), "assign")).length ? i.length - 1 : i.length, "assign")), e.length < a) return o = cc11001100_hook("o", !1, "assign");
        }
      }), o) && (hasPeiEFull = cc11001100_hook("hasPeiEFull", !0, "assign"));
      i = cc11001100_hook("i", 0, "assign");
      "1" == e.attr("qingjing") && "" == e[0].style.display && "1" == e.attr("full") && (hasPeiEFull = cc11001100_hook("hasPeiEFull", !0, "assign"), i = cc11001100_hook("i", 1, "assign")), hasPeiEFull && (t = cc11001100_hook("t", getlang("peiemessage"), "assign"), window.isPromoteing && (e = cc11001100_hook("e", e.attr("id").replace("div", ""), "assign"), e = cc11001100_hook("e", "/handler/endwjxactivitypromote.ashx?ActivityId=" + activityId + "&sjts=" + prsjts + "&sjsign=" + prsjsign + "&city=" + a + "&ruletype=" + r + "&quid=" + e, "assign"), window.cityPeiEQues && (e += cc11001100_hook("e", "&citypeie=" + encodeURIComponent(window.cityPeiEQues), "assign")), $.ajax({
        type: cc11001100_hook("type", "GET", "object-key-init"),
        url: cc11001100_hook("url", e, "object-key-init"),
        async: cc11001100_hook("async", !1, "object-key-init"),
        success: function (e) {}
      })), i && (t = cc11001100_hook("t", getlang("peiemessage_qingjing"), "assign")), $(divTip).html(t).show());
    }
  }
}
function iosNumberKey(e) {
  cc11001100_hook("e", e, "function-parameter");
  isIosSystem() && e.each(function (e, t) {
    "number" == $(t).attr("type") && ($(t).on("focus", function (e) {
      e.preventDefault(), $(this).attr("type", "text");
      try {
        var t = cc11001100_hook("t", this.value.length, "var-init");
        this.focus(), this.setSelectionRange(t, t);
      } catch (e) {}
    }), $(t).on("input", function (e) {
      e.preventDefault();
      e = cc11001100_hook("e", this.value, "assign");
      /\-|^(\-|\+)?\d+(\.\d+)?$/.test(e) || (this.value = cc11001100_hook("this.value", "", "assign"));
    }), $(t).on("blur", function (e) {
      e.preventDefault(), $(this).attr("type", "number");
    }));
  });
}
function sortAnimate(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a, n, r, o;
  isLoadingAnswer ? 0 == t.length ? e.parent().prepend(e) : t.after(e) : (window.moveanimate = cc11001100_hook("window.moveanimate", !0, "assign"), a = cc11001100_hook("a", e.parent(), "assign"), 0 == t.length ? (o = cc11001100_hook("o", e.prevAll(".ui-li-static"), "assign"), n = cc11001100_hook("n", e.offset().top - e.parent().offset().top, "assign"), o.animate({
    top: cc11001100_hook("top", e.outerHeight() + "px", "object-key-init")
  }, 300), e.animate({
    top: cc11001100_hook("top", -n + "px", "object-key-init")
  }, 300), setTimeout(function () {
    a.find(".ui-li-static").css({
      top: cc11001100_hook("top", "0px", "object-key-init")
    }), a.prepend(e), window.moveanimate = cc11001100_hook("window.moveanimate", !1, "assign"), i && i.focus();
  }, 400)) : (n = cc11001100_hook("n", e.offset().top - t.offset().top, "assign"), r = cc11001100_hook("r", e.outerHeight(), "assign"), 0 == n ? (window.moveanimate = cc11001100_hook("window.moveanimate", !1, "assign"), i && i.focus()) : (o = cc11001100_hook("o", n < 0 ? (r = cc11001100_hook("r", -e.outerHeight(), "assign"), 0 < t.next().length ? e.nextUntil(t.next()) : e.nextAll()) : (n -= cc11001100_hook("n", t.outerHeight(), "assign"), e.prevUntil(t)), "assign"), e.animate({
    top: cc11001100_hook("top", -n + "px", "object-key-init")
  }, 300), o.animate({
    top: cc11001100_hook("top", r + "px", "object-key-init")
  }, 300), setTimeout(function () {
    window.moveanimate = cc11001100_hook("window.moveanimate", !1, "assign"), a.find(".ui-li-static").css({
      top: cc11001100_hook("top", "0px", "object-key-init")
    }), t.after(e), i && i.focus();
  }, 400))));
}
function sortQ(e, a, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  var e = cc11001100_hook("e", e.find("li.ui-li-static").get(), "var-init"),
    r = cc11001100_hook("r", "1" == $(a).attr("check"), "var-init"),
    o = cc11001100_hook("o", null, "var-init");
  $.each(e, function (e, t) {
    var i = cc11001100_hook("i", $.trim($(t).find(".sortnum").html()), "var-init");
    if (r && !i) return sortAnimate($(a), $(t).prev(".ui-li-static"), n), !1;
    i && (o = cc11001100_hook("o", t, "assign"));
  }), !r && o && sortAnimate($(a), $(o), n);
}
function sortEvt(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  displayRelationByType(e), verifyCheckMinMax(e, !1, !0, t), jump(e, t), displaypeie(e, "li.ui-li-static", 3), window.createItem && createItem(e, !0), referTitle(e), saveAnswer(e), i && i.preventDefault();
}
function sortClear(e) {
  cc11001100_hook("e", e, "function-parameter");
  $(e).find("span.sortnum").html("").removeClass("sortnum-sel"), $(e).attr("check", ""), $(e).removeClass("check"), $(e).find(".icon_lookBigpic").show(), $(e).find(".aftercheck").remove();
}
function sortNumDisp(e) {
  cc11001100_hook("e", e, "function-parameter");
  $(e).find(".ui-li-static.check").each(function (e) {
    $(this).find(".sortnum").html(e + 1);
  });
}
function stopScroll(e) {
  cc11001100_hook("e", e, "function-parameter");
  e.preventDefault();
}
function sortDrage(i) {
  cc11001100_hook("i", i, "function-parameter");
  var a,
    n,
    r = cc11001100_hook("r", {
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init")
    }, "var-init"),
    o = cc11001100_hook("o", {
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init"),
      x1: cc11001100_hook("x1", 0, "object-key-init"),
      y1: cc11001100_hook("y1", 0, "object-key-init")
    }, "var-init"),
    s = cc11001100_hook("s", {
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init"),
      x1: cc11001100_hook("x1", 0, "object-key-init"),
      y1: cc11001100_hook("y1", 0, "object-key-init")
    }, "var-init"),
    l = cc11001100_hook("l", null, "var-init"),
    d = cc11001100_hook("d", !1, "var-init"),
    c = cc11001100_hook("c", 0, "var-init"),
    p = cc11001100_hook("p", 0, "var-init"),
    u = cc11001100_hook("u", (tarFirstY = cc11001100_hook("tarFirstY", 0, "assign"), null), "var-init");
  $(i).on("mousedown touchstart", ".ui-li-static .aftercheck", function (e) {
    e.target.classList.contains("icon_lookBigpic") || "input" == e.target.tagName.toLowerCase() || (l = cc11001100_hook("l", $(this).closest(".ui-li-static"), "assign"), r.x = cc11001100_hook("r.x", e.pageX || (e.originalEvent.targetTouches && e.originalEvent.targetTouches[0].pageX) - l.offset().left, "assign"), r.y = cc11001100_hook("r.y", e.pageY || (e.originalEvent.targetTouches && e.originalEvent.targetTouches[0].pageY) - l.offset().top, "assign"), l.index(), c = cc11001100_hook("c", l.outerHeight(), "assign"), p = cc11001100_hook("p", c / 5, "assign"), d = cc11001100_hook("d", !0, "assign"), o.x = cc11001100_hook("o.x", e.pageX || (e.originalEvent.targetTouches && e.originalEvent.targetTouches[0].pageX) - r.x, "assign"), o.y = cc11001100_hook("o.y", e.pageY || (e.originalEvent.targetTouches && e.originalEvent.targetTouches[0].pageY) - r.y, "assign"), o.y1 = cc11001100_hook("o.y1", o.y + c, "assign"), l.css({
      left: cc11001100_hook("left", l.offset().left + "px", "object-key-init"),
      top: cc11001100_hook("top", o.y - $(window).scrollTop() + "px", "object-key-init"),
      width: cc11001100_hook("width", l.parent().width() + "px", "object-key-init")
    }), l.addClass("maindash-sort"), (n = cc11001100_hook("n", $("<li class='dash-sort'></div>"), "assign")).css("height", c), n.insertBefore(l), document.body.addEventListener("touchmove", stopScroll, {
      passive: cc11001100_hook("passive", !1, "object-key-init")
    }));
  }), $(document).on("mousemove touchmove", function (e) {
    var t;
    d && (o.x = cc11001100_hook("o.x", e.pageX || (e.originalEvent.targetTouches && e.originalEvent.targetTouches[0].pageX) - r.x, "assign"), o.y = cc11001100_hook("o.y", e.pageY || (e.originalEvent.targetTouches && e.originalEvent.targetTouches[0].pageY) - r.y, "assign"), o.y < $(window).scrollTop() + 10 && (o.y = cc11001100_hook("o.y", $(window).scrollTop() + 10, "assign")), o.y1 = cc11001100_hook("o.y1", o.y + c, "assign"), e = cc11001100_hook("e", o.y <= l.parent().offset().top - 10 ? l.parent().offset().top - 10 : o.y >= l.siblings(".check").last().offset().top + l.siblings(".check").last().outerHeight() + 10 ? l.siblings(".check").last().offset().top + l.siblings(".check").last().outerHeight() + 10 : o.y, "assign"), e -= cc11001100_hook("e", $(window).scrollTop(), "assign"), l.css({
      left: cc11001100_hook("left", l.offset().left + "px", "object-key-init"),
      top: cc11001100_hook("top", e + "px", "object-key-init"),
      width: cc11001100_hook("width", l.parent().width() + "px", "object-key-init")
    }), (t = cc11001100_hook("t", $(i).find(".ui-li-static.check").not(".maindash-sort"), "assign")).each(function () {
      if (u = cc11001100_hook("u", $(this), "assign"), s.x = cc11001100_hook("s.x", u.offset().left, "assign"), s.y = cc11001100_hook("s.y", u.offset().top, "assign"), s.y1 = cc11001100_hook("s.y1", s.y + u.outerHeight() / 2, "assign"), s.y + u.outerHeight() < $(window).scrollTop()) return !0;
      a = cc11001100_hook("a", t.eq(0), "assign"), tarFirstY = cc11001100_hook("tarFirstY", a.offset().top + p, "assign"), o.y <= tarFirstY && n.insertBefore(a), s.y - p <= o.y && s.y1 <= o.y1 && n.insertAfter(u);
    }));
  }).on("mouseup touchend", function (e) {
    n && (l.insertBefore(n), l.removeClass("maindash-sort"), l.attr("style", "cursor:pointer"), $(".dash-sort").remove(), d = cc11001100_hook("d", !1, "assign"), n = cc11001100_hook("n", null, "assign"), sortNumDisp(i), sortEvt(i, l[0]), document.body.removeEventListener("touchmove", stopScroll, {
      passive: cc11001100_hook("passive", !1, "object-key-init")
    }), e) && e.preventDefault();
  });
}
function groupMutual(e) {
  cc11001100_hook("e", e, "function-parameter");
  e = cc11001100_hook("e", $(e).hasClass("ui-checkbox") ? e : $(e).closest(".ui-checkbox")[0], "assign");
  ($(e).parent().children().eq(0).hasClass("divlabel") || $(e).parent().prev().eq(0).hasClass("divlabel")) && $(e).siblings().each(function (e, t) {
    $(t).find("input[type='checkbox']").prop("checked") && (t.gmclick = cc11001100_hook("t.gmclick", !0, "assign"), $(t).click(), t.gmclick = cc11001100_hook("t.gmclick", null, "assign"));
  });
}
function getTpDetailUrl(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", $(window).scrollTop(), "var-init"),
    a = cc11001100_hook("a", window.location.pathname, "var-init");
  return window.relusername ? (t = cc11001100_hook("t", window.tpScrollTop || 0, "assign"), a = cc11001100_hook("a", location.href.replace("&ptfpar=1&tptop=" + t, ""), "assign"), a += cc11001100_hook("a", "&tpii=" + e + "&ftppar=1&tptop=" + i, "assign")) : a += cc11001100_hook("a", "?tpii=" + e + "&ftppar=1&tptop=" + i, "assign"), window.IsPar && (a += cc11001100_hook("a", "&par=1", "assign")), window.sojumpParm && (a += cc11001100_hook("a", "&sojumpparm=" + encodeURIComponent(sojumpParm), "assign"), window.parmsign && (a += cc11001100_hook("a", "&parmsign=" + encodeURIComponent(parmsign), "assign")), window.endTs && (a += cc11001100_hook("a", "&endts=" + endTs, "assign")), window.isEdit) && (a += cc11001100_hook("a", "&isedit=" + isEdit, "assign")), window.guid && (a += cc11001100_hook("a", "&guid=" + window.guid, "assign")), getQueryVariable("m") && (a += cc11001100_hook("a", "&m=" + getQueryVariable("m"), "assign")), window.udsid && (a += cc11001100_hook("a", "&udsid=" + window.udsid, "assign")), -1 < location.href.indexOf("wg=1") && (a += cc11001100_hook("a", "&wg=1", "assign")), -1 < location.href.indexOf("&ismob=1") && (a += cc11001100_hook("a", "&ismob=1", "assign")), a;
}
function setSkipfmStorage() {
  window.divFengMian && window.sessionStorage && (sessionStorage.skipfm || sessionStorage.setItem("skipfm", "1"));
}
function gotorank() {
  setSkipfmStorage();
  var e = cc11001100_hook("e", "/wjx/join/tpresult.aspx?activity=" + activityId, "var-init");
  return IsPar && (e += cc11001100_hook("e", "&par=1", "assign")), window.location.href = cc11001100_hook("window.location.href", e, "assign"), !1;
}
function viewTpDetail(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  if (!window.isSubmiting) return setSkipfmStorage(), e = cc11001100_hook("e", window.event || e, "assign"), location.href = cc11001100_hook("location.href", getTpDetailUrl(t), "assign"), e.preventDefault(), e.stopPropagation(), !1;
}
function voteMul(e) {
  cc11001100_hook("e", e, "function-parameter");
  confirmnew(getlang("mtit_tp"), function () {
    e ? voteData() : groupAnswer(1);
  }, function () {});
}
function voteSin(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", getlang("mtit_istp"), "var-init"),
    i = cc11001100_hook("i", $("#voteMes .vote_dec").text(), "var-init");
  i && (t = cc11001100_hook("t", getlang("mtit_istp_to").replace("{0}", i), "assign")), confirmnew(t, function () {
    e ? voteData() : groupAnswer(1);
  }, function () {});
}
function voteData() {
  var e = cc11001100_hook("e", ($(window).height() - 60) / 2 + 0, "var-init"),
    t = cc11001100_hook("t", ($(window).width() - 300) / 2, "var-init");
  t < 0 && (t = cc11001100_hook("t", 0, "assign")), $("#captchaWrap").css({
    left: cc11001100_hook("left", t + "px", "object-key-init"),
    top: cc11001100_hook("top", e + "px", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init")
  }), $("#captchaOut").css({
    left: cc11001100_hook("left", "0px", "object-key-init"),
    top: cc11001100_hook("top", "0px", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    height: cc11001100_hook("height", "100%", "object-key-init"),
    width: cc11001100_hook("width", "100%", "object-key-init"),
    "z-index": cc11001100_hook("z-index", 1e4, "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init"),
    background: cc11001100_hook("background", "rgba(0,0,0,0.8)", "object-key-init")
  }), $("#captcha").fadeIn("fast").css({
    "padding-left": cc11001100_hook("padding-left", 0, "object-key-init"),
    display: cc11001100_hook("display", "flex", "object-key-init"),
    "justify-content": cc11001100_hook("justify-content", "center", "object-key-init"),
    width: cc11001100_hook("width", "100%", "object-key-init")
  }), $("#captchaTit").show(), $("#captchaOut").unbind("click"), $("#captchaWrap").click(function (e) {
    e.stopPropagation();
  }), $("#captchaOut").click(function (e) {
    e.stopPropagation(), $(this).hide();
  });
}
function isIosSystem() {
  var e = cc11001100_hook("e", navigator.userAgent, "var-init");
  navigator.appVersion;
  if (!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) return !0;
}
function isYoukuVideo(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (-1 < (e = cc11001100_hook("e", e.toLowerCase(), "assign")).indexOf("player.youku.com") || -1 < e.indexOf("v.qq.com") || -1 < e.indexOf("/wjx/join/")) return !0;
}
function iosIframeVideoHack() {
  if (isIosSystem()) for (var e = cc11001100_hook("e", document.getElementsByTagName("iframe"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) if (isYoukuVideo(e[t].src)) return !0;
  return !1;
}
function adjustVideoHeightEle(e) {
  cc11001100_hook("e", e, "function-parameter");
  e.style.width = cc11001100_hook("e.style.width", "100%", "assign");
  var t,
    i = cc11001100_hook("i", e.clientWidth, "var-init");
  0 == i && (i = cc11001100_hook("i", Math.min($(window).width(), 400) - 50, "assign")), "2" == e.getAttribute("video") ? 15 < (t = cc11001100_hook("t", parseInt(i) / 640 * parseInt(e.height) + 15, "assign")) && e.setAttribute("style", "height:" + parseInt(t) + "px !important") : "1" == e.getAttribute("video") && (i = cc11001100_hook("i", 16 * parseInt(i / 16), "assign"), e.style.height = cc11001100_hook("e.style.height", (t = cc11001100_hook("t", 9 * i / 16, "assign")) + "px", "assign"), e.style.width = cc11001100_hook("e.style.width", i + "px", "assign"));
}
function adjustVideoHeight(i) {
  cc11001100_hook("i", i, "function-parameter");
  setTimeout(function () {
    if (!i.hasAdjust && $(i).is(":visible")) {
      i.hasAdjust = cc11001100_hook("i.hasAdjust", !0, "assign");
      for (var e = cc11001100_hook("e", i.getElementsByTagName("iframe"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) adjustVideoHeightEle(e[t]);
    }
  }, 100);
}
function adjustVideoSrc(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  for (var i = cc11001100_hook("i", e.getElementsByTagName("iframe"), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) {
    i[a].xsrc || (i[a].xsrc = cc11001100_hook("i[a].xsrc", i[a].src, "assign"));
    var n = cc11001100_hook("n", i[a].xsrc, "var-init");
    n && "1" == i[a].getAttribute("video") && (i[a].src = cc11001100_hook("i[a].src", t ? "/wjx/join/blank.html" : n, "assign"));
  }
}
function replaceImg(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", "http://pubimageqiniu.paperol.cn", "var-init"),
    i = cc11001100_hook("i", "//pubnewfr.paperol.cn", "var-init");
  0 == e.src.indexOf("http://pubssl.sojump.com") || 0 == e.src.indexOf("https://pubssl.sojump.com") || 0 == e.src.indexOf("http://pubimage.sojump.com") || 0 == e.src.indexOf("http://pubimage.sojump.cn") || 0 == e.src.indexOf("http://pubssl.sojump.cn") ? e.src = cc11001100_hook("e.src", e.src.replace("http://pubssl.sojump.com", t).replace("https://pubssl.sojump.com", t).replace("http://pubimage.sojump.com", t).replace("http://pubimage.sojump.cn", t).replace("http://pubssl.sojump.cn", t), "assign") : 0 == e.src.indexOf("http://pubalifr.sojump.com") || 0 == e.src.indexOf("https://pubalifr.sojump.com") || 0 == e.src.indexOf("https://pubali.sojump.com") || 0 == e.src.indexOf("http://pubali.sojump.com") || 0 == e.src.indexOf("http://pubali.sojump.cn") || 0 == e.src.indexOf("http://pubalifr.sojump.cn") || 0 == e.src.indexOf("https://pubali.sojump.cn") || 0 == e.src.indexOf("https://pubalifr.sojump.cn") ? e.src = cc11001100_hook("e.src", e.src.replace("http://pubalifr.sojump.com", i).replace("https://pubalifr.sojump.com", i).replace("http://pubali.sojump.com", i).replace("https://pubali.sojump.com", i).replace("http://pubali.sojump.cn", i).replace("https://pubali.sojump.cn", i).replace("http://pubalifr.sojump.cn", i).replace("https://pubalifr.sojump.cn", i), "assign") : -1 < e.src.indexOf(".gif") && -1 < e.src.indexOf("?x-oss-process") && (e.src = cc11001100_hook("e.src", e.src.split("?x-oss-process")[0], "assign"));
}
function GetlocalStorageaVal() {
  if (!window.localStorage) return null;
  var e,
    t = cc11001100_hook("t", wjxdata.get().wjxanswerdata, "var-init");
  if (t && !window.randomMode) return !(e = cc11001100_hook("e", t.wjxtempanswer, "assign")) || !(t = cc11001100_hook("t", t.wjxtempanswerdat, "assign")) || t - (window.qBeginDate || 0) < 0 ? null : e;
}
function restoreAnswer() {
  var e = cc11001100_hook("e", null, "var-init");
  if (window.joinIdnew && window.answertext) e = cc11001100_hook("e", window.answertext, "assign");else if (null == (e = cc11001100_hook("e", GetlocalStorageaVal(), "assign"))) {
    if (!window.hasRelationAns || !window.answertext) return null;
    e = cc11001100_hook("e", window.answertext, "assign");
  }
  for (var t = cc11001100_hook("t", e.split(spChars[1]), "var-init"), i = cc11001100_hook("i", new Array(), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) {
    var n,
      r = cc11001100_hook("r", t[a].split(spChars[0]), "var-init");
    r[0] && ((n = cc11001100_hook("n", new Object(), "assign"))._value = cc11001100_hook("(n = new Object())._value", r[1], "assign"), n._topic = cc11001100_hook("n._topic", r[0], "assign"), i.push(n));
  }
  return i;
}
$(function () {
  "hidden" != $("#toptitle").css("visibility") || window.isJieLong || (document.title = cc11001100_hook("document.title", "", "assign"));
  var a = cc11001100_hook("a", document.title, "var-init"),
    B = cc11001100_hook("B", ($(window).scroll(function (e) {
      var t = cc11001100_hook("t", $("#toptitle").offset().top + 48, "var-init"),
        i = cc11001100_hook("i", $(this).scrollTop(), "var-init");
      t < i ? $("title").text() && "" != $("title").text() || $("title").text(a) : emptyTitle(), window.isJieLong && !isMobile && (80 < i ? $(".jielonglistheader").addClass("jielongheadertopmax") : $(".jielonglistheader").removeClass("jielongheadertopmax")), 0 < scrFormHeightDif || (window.buttonfooter || (window.buttonfooter = cc11001100_hook("window.buttonfooter", $("#deepButton"), "assign")), (scrFormHeightDif < -20 && 50 < i || -20 < scrFormHeightDif) && window.buttonfooter.hasClass("button-list-fixed-deep") && window.buttonfooter.removeClass("button-list-fixed-deep"), i <= 50 && (window.buttonfooter.hasClass("button-list-fixed-deep") || window.buttonfooter.addClass("button-list-fixed-deep")));
    }), emptyTitle(), isMobile && $(".laddericonfontwrap").on("click", function () {
      this.title && alertNew(this.title);
    }), pageHolder = cc11001100_hook("pageHolder", $("fieldset.fieldset"), "assign"), iosIframeVideoHack() ? " touchend" : ""), "var-init");
  B && $("#divNext a").bind("touchend", function (e) {
    show_next_page(), e.preventDefault();
  });
  for (var e = cc11001100_hook("e", 0, "var-init"); e < pageHolder.length; e++) {
    "true" == $(pageHolder[e]).attr("skip") && (pageHolder[e].skipPage = cc11001100_hook("pageHolder[e].skipPage", !0, "assign"), hasSkipPage = cc11001100_hook("hasSkipPage", !0, "assign"));
    for (var t = cc11001100_hook("t", $(".field", pageHolder[e]), "var-init"), i = cc11001100_hook("i", (pageHolder[e].questions = cc11001100_hook("pageHolder[e].questions", t, "assign"), 0), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) "1" == t[n].getAttribute("istrap") && (t[n].isTrap = cc11001100_hook("t[n].isTrap", !0, "assign"), trapHolder.push(t[n]), t[n].pageIndex = cc11001100_hook("t[n].pageIndex", e, "assign"), $(pageHolder[e]).attr("iszhenbie", "true")), t[n].indexInPage = cc11001100_hook("t[n].indexInPage", i, "assign"), t[n].pageIndex = cc11001100_hook("t[n].pageIndex", e, "assign"), hasSkipPage && (t[n].pageParent = cc11001100_hook("t[n].pageParent", pageHolder[e], "assign")), i++;
  }
  $("#divMatrixRel").bind("click", function (e) {
    e.stopPropagation();
  }), $(document).bind("click", function () {
    setMatrixFill(), postHeight(), $(".fileMore").hide();
  }), $("#matrixinput").on("keyup blur focus", function (e) {
    var t, i;
    curMatrixFill && (t = cc11001100_hook("t", this.value, "assign"), curMatrixFill.fillvalue = cc11001100_hook("curMatrixFill.fillvalue", t, "assign"), "blur" != e.type && "keyup" != e.type || !curMatrixFill.fillvalue || (t = cc11001100_hook("t", $(curMatrixFill).closest(".field")[0], "assign")).removeError && t.removeError(), i = cc11001100_hook("i", (t = cc11001100_hook("t", $(curMatrixFill).closest(".field"), "assign")).attr("ischeck"), "assign"), saveMatrixFill(curMatrixFill, i), saveAnswer(t, "blur" !== e.type));
  }), $("#matrixinput").keydown(function (e) {
    if (13 == e.keyCode) return !1;
  }), keywordarray = cc11001100_hook("keywordarray", (window.awardkeylist || "").split("┋"), "assign"), window.qukeylist && (quarray = cc11001100_hook("quarray", qukeylist.split("|"), "assign")), window.checkTitleDescMatch && checkTitleDescMatch();
  var F = cc11001100_hook("F", new Array(), "var-init"),
    Q = cc11001100_hook("Q", !1, "var-init");
  if ((allQArray = cc11001100_hook("allQArray", $(".field"), "assign")).each(function () {
    var g = cc11001100_hook("g", $(this), "var-init"),
      a = cc11001100_hook("a", (this.onmouseover = cc11001100_hook("this.onmouseover", function () {
        ktimes++;
      }, "assign"), g.attr("type")), "var-init"),
      n = cc11001100_hook("n", (g.bind("click" + B, function (e) {
        "1" != a && "2" != a && "9" != a && ("10" != a || g.attr("select")) && this.removeError && this.removeError(), "10" == a && g.attr("select") && $(this).find(".mdivtable").each(function () {
          var e = cc11001100_hook("e", $(this), "var-init");
          e[0].removeError && e[0].removeError(!0);
        });
        var t = cc11001100_hook("t", navigator.userAgent && -1 < navigator.userAgent.indexOf("wxwork"), "var-init");
        hasClickQ || !isWeiXin || window.corpId && "3" == window.cqType || 0 != langVer || window.isJieLong || t || window.noquitalert || pushHistory(), window.showCoverNoEnd || (hasClickQ = cc11001100_hook("hasClickQ", !0, "assign"));
        try {
          checkJpMatch(a, this);
          var i = cc11001100_hook("i", "10", "var-init");
          "10" == a && $("#divMatrixHeader").data("referElement") && (i = cc11001100_hook("i", $("#divMatrixHeader").data("referElement").closest(".ui-field-contain").attr("type"), "assign")), "5" != a && "6" != a && "10" == i && $("#divMatrixHeader").hide();
        } catch (e) {}
        window.loadGeetest && window.loadGeetest(), window.scrollup && scrollup.Stop();
      }), getTopic(g)), "var-init"),
      e = cc11001100_hook("e", ((questionsObject[n] = cc11001100_hook("questionsObject[n]", g, "assign")).attr("isshop") && shopArray.push(this), g.attr("relation")), "var-init"),
      t = cc11001100_hook("t", g.attr("hasitemrelation"), "var-init"),
      i = cc11001100_hook("i", "", "var-init");
    if (e && "0" != e) {
      var i = cc11001100_hook("i", -1 != e.indexOf("|") ? "|" : "$", "var-init"),
        R = cc11001100_hook("R", e.split(i), "var-init");
      for (p in R) if ((w = cc11001100_hook("w", R[p], "assign")) && -1 != w.indexOf(",")) {
        var r = cc11001100_hook("r", w.split(",")[0], "var-init");
        if (relationQs[r] || (relationQs[r] = cc11001100_hook("relationQs[r]", new Array(), "assign")), relationQs[r].push(this), relationBindTopic[n] || (relationBindTopic[n] = cc11001100_hook("relationBindTopic[n]", new Array(), "assign")), relationBindTopic[r]) for (var o = cc11001100_hook("o", 0, "var-init"); o < relationBindTopic[r].length; o++) {
          for (var s = cc11001100_hook("s", relationBindTopic[r][o], "var-init"), l = cc11001100_hook("l", !1, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < relationBindTopic[n].length; d++) relationBindTopic[n][d] == s && (l = cc11001100_hook("l", !0, "assign"));
          l || relationBindTopic[n].push(s);
        }
        relationBindTopic[n].push(r);
      }
      relationNotDisplayQ[n] = cc11001100_hook("relationNotDisplayQ[n]", "1", "assign");
    } else "0" == e && (relationNotDisplayQ[n] = cc11001100_hook("relationNotDisplayQ[n]", "1", "assign"));
    if ("1" == t) {
      Q = cc11001100_hook("Q", !0, "assign");
      0 == (f = cc11001100_hook("f", 0 == (f = cc11001100_hook("f", 0 == (f = cc11001100_hook("f", $("input[type='radio']", g), "assign")).length ? $("input[type='checkbox']", g) : f, "assign")).length ? $("input[type='hidden']", g) : f, "assign")).length && (f = cc11001100_hook("f", $("select option", g), "assign"));
      for (var c = cc11001100_hook("c", "none", "var-init"), L = cc11001100_hook("L", !1, "var-init"), p = cc11001100_hook("p", 0, "var-init"); p < f.length; p++) if (7 != g.attr("type") || -2 != f.eq(p).val()) {
        var u = cc11001100_hook("u", f.eq(p).attr("itemrelation"), "var-init");
        if (u && "" != u) {
          i = cc11001100_hook("i", -1 != u.indexOf("|") ? "|" : "$", "assign");
          var q = cc11001100_hook("q", f.eq(p).attr("id"), "var-init"),
            V = cc11001100_hook("V", u.split(i), "var-init");
          HasSetItemrelationList[q] = cc11001100_hook("HasSetItemrelationList[q]", u, "assign");
          for (var w, h = cc11001100_hook("h", 0, "var-init"); h < V.length; h++) if ((w = cc11001100_hook("w", V[h], "assign")) && -1 != w.indexOf(",")) {
            r = cc11001100_hook("r", w.split(",")[0], "assign");
            if (ItemrelationQs[r] || (ItemrelationQs[r] = cc11001100_hook("ItemrelationQs[r]", new Array(), "assign")), ItemrelationQs[r].push(q), itemRelationBindTopic[n] || (itemRelationBindTopic[n] = cc11001100_hook("itemRelationBindTopic[n]", new Array(), "assign")), itemRelationBindTopic[r]) for (o = cc11001100_hook("o", 0, "assign"); o < itemRelationBindTopic[r].length; o++) {
              for (s = cc11001100_hook("s", itemRelationBindTopic[r][o], "assign"), l = cc11001100_hook("l", !1, "assign"), d = cc11001100_hook("d", 0, "assign"); d < itemRelationBindTopic[n].length; d++) itemRelationBindTopic[n][d] == s && (l = cc11001100_hook("l", !0, "assign"));
              l || itemRelationBindTopic[n].push(s);
            }
            itemRelationBindTopic[n].push(r);
          }
        } else L = cc11001100_hook("L", !0, "assign"), "none" != c || relationNotDisplayQ[n] || (c = cc11001100_hook("c", "", "assign"));
      }
      "none" != (g[0].style.display = cc11001100_hook("g[0].style.display", c, "assign")) || relationItemNotDisplayQ[n] || L || (relationItemNotDisplayQ[n] = cc11001100_hook("relationItemNotDisplayQ[n]", "1", "assign"));
    }
    var f,
      m,
      v,
      x,
      y,
      b,
      C,
      I,
      _,
      k,
      j,
      T,
      A,
      U,
      S,
      N,
      e = cc11001100_hook("e", g.attr("titletopic"), "var-init");
    if (e) for (var O = cc11001100_hook("O", e.split(","), "var-init"), E = cc11001100_hook("E", 0, "var-init"); E < O.length; E++) {
      var P,
        M,
        D,
        H = cc11001100_hook("H", questionsObject[O[E]], "var-init");
      H && (H[0]._titleTopic || (H[0]._titleTopic = cc11001100_hook("H[0]._titleTopic", new Array(), "assign")), H[0]._titleTopic.push(n), 0 < (P = cc11001100_hook("P", 0 == (P = cc11001100_hook("P", $("input.OtherRadioText", H), "assign")).length ? $("input.OtherText", H) : P, "assign")).length && P.bind("blur keyup", function (e) {
        referTitle(H);
      }), M = cc11001100_hook("M", g.find(topichtmlclass)[0], "assign"), D = cc11001100_hook("D", new RegExp("\\[[qQ]" + O[E] + "\\]", "g"), "assign"), M && (M.innerHTML = cc11001100_hook("M.innerHTML", M.innerHTML.replace(D, "<span class='titleRefer spanTitleTopic" + n + "_" + O[E] + "' style='text-decoration:underline;'></span>"), "assign")), "6" != a && "9" != a && "10" != a || g.find(".itemTitleSpan").each(function () {
        this.innerHTML = cc11001100_hook("this.innerHTML", this.innerHTML.replace(D, "<span class='titleRefer spanTitleTopic" + n + "_" + O[E] + "' style='text-decoration:underline;'></span>"), "assign");
      }));
    }
    if ("1" == g.attr("hrq")) return !0;
    "1" == a ? ((f = cc11001100_hook("f", $("input", g), "assign"))[1] && (f[0].confirmPwd = cc11001100_hook("f[0].confirmPwd", f[1], "assign"), f[1].firstPwd = cc11001100_hook("f[1].firstPwd", f[0], "assign"), $(f[1]).on("keyup", function () {
      this.firstPwd.needCheckConfirm = cc11001100_hook("this.firstPwd.needCheckConfirm", !0, "assign"), verifyTxt(g, $(this));
    }), f = cc11001100_hook("f", $(f[0]), "assign")), isWeiXin && window.executeJsSdk && executeJsSdk(f), f.on("keyup blur click", function (e) {
      verifyTxt(g, $(this)), prevInputControl = cc11001100_hook("prevInputControl", this, "assign"), window.hasAnswer = cc11001100_hook("window.hasAnswer", !0, "assign"), jump(g, this), referTitle(g, this.value), saveAnswer(g, "blur" !== e.type), window.showAnswer && showAnswer(g, $(this), !0);
    }), isMobile || "number" != f.attr("type") || (f[0].onwheel = cc11001100_hook("f[0].onwheel", function (e) {
      e.target.blur();
    }, "assign")), iosNumberKey(f), window.needSaveJoin && f.change(function () {
      saveAnswer(g);
    }), f.blur(function () {
      g.find(".errorMessage").html() || g.find(".errorMessage").height("auto"), checkOnly(g, f), lastFixedObj && $(lastFixedObj).addClass("btn_fixedstyle");
    }), f.focus(function () {
      lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle");
    }), (x = cc11001100_hook("x", $(".code-part-box", g), "assign")).length && ((t = cc11001100_hook("t", x[0], "assign")).par = cc11001100_hook("(t = x[0]).par", g[0], "assign"), g[0].needsms = cc11001100_hook("g[0].needsms", !0, "assign"), g[0].mobileinput = cc11001100_hook("g[0].mobileinput", f[0], "assign"), g[0].prevbtn = cc11001100_hook("g[0].prevbtn", t, "assign"), window.joinIdnew && (f.disabled = cc11001100_hook("f.disabled", !0, "assign"), t.disabled = cc11001100_hook("t.disabled", !0, "assign")), bindVerification(t, g))) : "2" == a ? (f = cc11001100_hook("f", $("textarea", g), "assign"), isWeiXin && window.executeJsSdk && executeJsSdk(f), f.on("keyup blur click", function (e) {
      verifyTxt(g, f), prevInputControl = cc11001100_hook("prevInputControl", this, "assign"), window.hasAnswer = cc11001100_hook("window.hasAnswer", !0, "assign"), jump(g, this), referTitle(g, this.value), window.showAnswer && showAnswer(g, f, !0), saveAnswer(g, "blur" !== e.type);
    }), f.change(function () {
      "AIHCI" == $(this).attr("verify") && (this.hasChangeAiRes = cc11001100_hook("this.hasChangeAiRes", !0, "assign"));
    }), f.blur(function () {
      checkOnly(g, f), lastFixedObj && $(lastFixedObj).addClass("btn_fixedstyle");
    }), f.focus(function () {
      lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle");
    })) : "9" == a || "34" == a ? (m = cc11001100_hook("m", "input,textarea", "assign"), v = cc11001100_hook("v", $(m, g), "assign"), x = cc11001100_hook("x", $(".code-part-box", g), "assign"), validationNumber(g, "negative"), isWeiXin && window.executeJsSdk && v.each(function (e, t) {
      ($(t).attr("qrcode") || $(t).attr("qrcodeonly") || $(t).attr("voice")) && executeJsSdk($(t));
    }), v.on("input blur", function () {
      changeHeight(this);
    }), v.on("keyup blur change", function (e) {
      prevInputControl = cc11001100_hook("prevInputControl", this, "assign"), msg = cc11001100_hook("msg", verifyTxt(g, $(this), !0), "assign"), jump(g, this), referTitle(g, this.value), window.count360Val && count360Val(), saveAnswer(g, "blur" !== e.type), "9" == a && window.showAnswer && showAnswer(g, v, !0), fixBottom();
    }), v.blur(function () {
      checkOnly(g, $(this)), lastFixedObj && $(lastFixedObj).addClass("btn_fixedstyle");
    }), v.focus(function () {
      lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle");
    }), iosNumberKey(v), (e = cc11001100_hook("e", $(".textEdit .textCont", g), "assign")).unbind("click"), e.click(function (e) {
      e.stopPropagation();
      var e = cc11001100_hook("e", $(this).parent(".textEdit").attr("verify"), "var-init");
      return "城市单选" == e || "城市多选" == e || "省市区" == e || "高校" == e || "地图" == e || "日期" == e || "生日" == e || "入学时间" == e || "国家及地区" == e || "年月" == e || "日期与时间" == e ? ((e = cc11001100_hook("e", (e = cc11001100_hook("e", $(this).parent().prev(), "assign")).hasClass("ui-input-text") ? e : $(this).parent().prev().prev(), "assign")).trigger("click"), $(this).blur().attr("contenteditable", !1)) : ($(this).text().trim() ? $(this).css({
        width: cc11001100_hook("width", "auto", "object-key-init")
      }) : $(this).css({
        width: cc11001100_hook("width", 24, "object-key-init")
      }), $(this).parent().removeClass("initStyle")), !1;
    }), y = cc11001100_hook("y", isIosSystem(), "assign"), e.blur(function () {
      y && ">" == $(this).html().split("<br")[1] && $(this).html($(this).html().split("<br")[0]), "" == $(this).text().trim() && $(this).css({
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        width: cc11001100_hook("width", 72, "object-key-init")
      }).parent(".textEdit").addClass("initStyle");
      var e = cc11001100_hook("e", $(this).parent(".textEdit").prev(), "var-init");
      (e = cc11001100_hook("e", e.hasClass("ui-input-text") ? e : $(this).parent(".textEdit").prev().prev(), "assign"))[0] && (e[0].value = cc11001100_hook("e[0].value", $(this).text().trim(), "assign")), e.trigger("blur");
    }), e.on("keydown input", function (e) {
      if (13 == (e = cc11001100_hook("e", e || window.event, "assign")).keyCode) return !1;
      if (!$(this).attr("contenteditable")) return !1;
      "" != $(this).text().trim() && $(this).css({
        display: cc11001100_hook("display", "inline", "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init")
      }).parent().removeClass("initStyle"), y && ">" == $(this).html().split("<br")[1] && $(this).html($(this).html().split("<br")[0]), "" == $(this).text().trim() && $(this).css({
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        width: cc11001100_hook("width", 72, "object-key-init")
      }).parent(".textEdit").addClass("initStyle");
      e = cc11001100_hook("e", $(this).parent(".textEdit").prev(), "assign");
      (e = cc11001100_hook("e", e.hasClass("ui-input-text") ? e : $(this).parent(".textEdit").prev().prev(), "assign"))[0] && (e[0].value = cc11001100_hook("e[0].value", $(this).text().trim(), "assign")), e.trigger("keyup");
    }), x.length && x.each(function (e, t) {
      var e = cc11001100_hook("e", x[e], "var-init"),
        i = cc11001100_hook("i", t.closest("tr"), "var-init");
      (e.par = cc11001100_hook("e.par", i, "assign")).needsms = cc11001100_hook("(e.par = i).needsms", !0, "assign"), i.mobileinput = cc11001100_hook("i.mobileinput", $(m, i)[0], "assign"), i.prevbtn = cc11001100_hook("i.prevbtn", e, "assign"), window.joinIdnew && (i.mobileinput.disabled = cc11001100_hook("i.mobileinput.disabled", !0, "assign"), e.disabled = cc11001100_hook("e.disabled", !0, "assign")), bindVerification(t, g);
    })) : "8" == a ? (validationNumber(g, "negative"), $("input", g).change(function () {
      jump(g, this), saveAnswer(g);
    })) : "12" == a ? (validationNumber(g, "positive"), $("input", g).change(function () {
      var e,
        i = cc11001100_hook("i", null, "var-init"),
        t = cc11001100_hook("t", $(g).attr("total"), "var-init"),
        a = cc11001100_hook("a", $("input:visible", g), "var-init"),
        n = cc11001100_hook("n", count = cc11001100_hook("count", a.length, "assign"), "var-init"),
        r = cc11001100_hook("r", t, "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        s = cc11001100_hook("s", (a.each(function (e) {
          var t;
          this.value ? (t = cc11001100_hook("t", "" == this.value ? 0 : parseFloat(this.value), "assign"), /^\d*\.?\d{0,2}$/.test(t) || (t = cc11001100_hook("t", t.toFixed(2), "assign"), this.value = cc11001100_hook("this.value", t, "assign")), count--, r = cc11001100_hook("r", parseFloat((r - t).toFixed(2)), "assign")) : o != this && (i = cc11001100_hook("i", this, "assign"));
        }), i || a.each(function (e) {
          if (e == n - 1) return i = cc11001100_hook("i", this, "assign"), !1;
        }), 1 == count && i && 0 < r && (i.value = cc11001100_hook("i.value", r, "assign"), $(i).change(), r = cc11001100_hook("r", 0, "assign")), msg = cc11001100_hook("msg", "", "assign"), 0), "var-init");
      0 != r && 0 == count && (e = cc11001100_hook("e", 0, "assign"), i && (s = cc11001100_hook("s", "" == i.value ? 0 : parseFloat(i.value), "assign"), e = cc11001100_hook("e", parseFloat((s + r).toFixed(2)), "assign")), 0 <= e ? i != this ? (i && (i.value = cc11001100_hook("i.value", e, "assign")), $(i).change(), r = cc11001100_hook("r", 0, "assign")) : 2 == a.length && (e = cc11001100_hook("e", parseFloat((t - s).toFixed(2)), "assign"), a[0].value = cc11001100_hook("a[0].value", e, "assign"), $(a[0]).change(), r = cc11001100_hook("r", 0, "assign")) : msg = cc11001100_hook("msg", "，<span style='color:red;'>" + sum_warn + "</span>", "assign")), 0 == r && a.each(function (e) {
        this.value || (this.value = cc11001100_hook("this.value", "0", "assign"), $(this).change());
      }), $(".relsum", g).html(sum_total + "<b>" + t + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + parseFloat((t - r).toFixed(2)) + "</span>" + msg), jump(g, this), saveAnswer(g);
    })) : "13" != a && ("3" == a ? ((b = cc11001100_hook("b", $("div.ui-radio", g), "assign")).each(function () {
      var e, t, i;
      window.hasTouPiao && (i = cc11001100_hook("i", this.getAttribute("htp"), "assign")) && (i = cc11001100_hook("i", document.getElementById("spanPiao" + n + "_" + i), "assign")) && !i.needHide && i.innerHTML && (i.style.display = cc11001100_hook("i.style.display", "", "assign")), "1" == this.getAttribute("isdefault") && (e = cc11001100_hook("e", $(this), "assign"), (t = cc11001100_hook("t", e.find("input[type='radio']")[0], "assign")).checked = cc11001100_hook("(t = e.find(\"input[type='radio']\")[0]).checked", !0, "assign"), (i = cc11001100_hook("i", e.find("input.OtherRadioText")[0], "assign")) && (t.itemText = cc11001100_hook("t.itemText", i, "assign")), displaypeie(g, "input[type=radio]", 1), setTimeout(function () {
        initCusomSelect(e[0], t, g[0]), referTitle(g);
      }, 100), g.attr("hasdefault", "1"));
    }), "1" != g.attr("qingjing") && checkPeiE(g, "input[type='radio']"), b.bind("click", function (e) {
      try {
        if (0 == e.target.href.indexOf("http")) return !0;
      } catch (e) {}
      try {
        if (-1 < e.target.className.indexOf("layer")) return !0;
      } catch (e) {}
      var t,
        i,
        a,
        n = cc11001100_hook("n", $(this), "var-init");
      g[0] && g[0].hasConfirm || (t = cc11001100_hook("t", n.find("input[type='radio']")[0], "assign")).disabled || (a = cc11001100_hook("a", t.checked, "assign"), i = cc11001100_hook("i", "1" == $(g).attr("req"), "assign"), a && !i && $(g)[0].clearHref ? $(g)[0].clearHref.onclick() : window.isRadioAutonext && window.IsOneQuestionPerPage && (window.lxnextclick || window.isSubmiting) && e && 0 < e.pageX || (window.hasAnswer = cc11001100_hook("window.hasAnswer", !0, "assign"), $(g).find("div.ui-radio").each(function () {
        var e = cc11001100_hook("e", $(this), "var-init");
        e.find("input[type='radio']")[0].checked = cc11001100_hook("e.find(\"input[type='radio']\")[0].checked", !1, "assign"), e.removeClass("checked").find("a.jqradio").removeClass("jqchecked");
      }), t.checked = cc11001100_hook("t.checked", !0, "assign"), n.addClass("checked").find("a.jqradio").addClass("jqchecked"), (a = cc11001100_hook("a", n.find("input.OtherRadioText")[0], "assign")) && (t.itemText = cc11001100_hook("t.itemText", a, "assign")), processRadioInput(g[0], t), displayRelationByType(g), referTitle(g), jump(g, t), displaypeie(g, "input[type=radio]", 1), "1" != g.attr("req") && addClearHref(g), window.showAnswer && showAnswer(g, b, !0), 2 == window.isChuangGuan && "1" == g.attr("ceshi") && canNext(g, b), saveAnswer(g), 1 != n.attr("desc") && e.preventDefault(), initCusomSelect(this, t, g[0], e)));
    }), g.attr("qingjing") && (F.push(g), hasQingJing = cc11001100_hook("hasQingJing", !0, "assign")), (P = cc11001100_hook("P", $("input.OtherRadioText", g), "assign")).bind("click", function (e) {
      e.stopPropagation(), e.preventDefault();
    }), P.bind("blur keyup", function (e) {
      otherTextEvent(this, g), "blur" == e.type && saveAnswer(g, "blur" !== e.type);
    })) : "7" == a ? ((t = cc11001100_hook("t", $("select", g), "assign")).each(function () {
      for (var e, t = cc11001100_hook("t", 0, "var-init"); t < this.options.length; t++) "1" == this.options[t].getAttribute("isdefault") && (e = cc11001100_hook("e", this.options[t].text, "assign"), -2 == this.value && (e = cc11001100_hook("e", "", "assign")), setTimeout(function () {
        referTitle(g, e);
      }, 100), g.attr("hasdefault", "1"));
    }), t.bind("change", function (e) {
      displayRelationByType(g), jump(g, this.options[this.selectedIndex]);
      var t = cc11001100_hook("t", this.options[this.selectedIndex].text, "var-init");
      -2 == this.value && (t = cc11001100_hook("t", "", "assign")), referTitle(g, t), saveAnswer(g), displaypeie(g, "option", 5), e.preventDefault();
    }), checkPeiE(g, "option"), 0 < t[0].selectedIndex && $("span", t[0].parentNode).html(t[0].options[t[0].selectedIndex].text)) : "10" == a ? (e = cc11001100_hook("e", "1" == g.attr("select"), "assign"), C = cc11001100_hook("C", g.attr("zizeng"), "assign"), I = cc11001100_hook("I", g.attr("maxvalue"), "assign"), _ = cc11001100_hook("_", g.attr("minvalue"), "assign"), k = cc11001100_hook("k", "<div class='errorMessage'></div>", "assign"), j = cc11001100_hook("j", "", "assign"), t = cc11001100_hook("t", g.find(".mdivtable"), "assign"), A = cc11001100_hook("A", g.attr("fixedslider"), "assign"), !isVip && window.isNewQ && (alertNew("提示：此问卷使用了表格题，发布者非企业版用户，无法使用！"), $("#ctlNext").hide()), C && !A ? (S = cc11001100_hook("S", g.find(".select_title"), "assign"), N = cc11001100_hook("N", g.find(".mdivtable:last"), "assign"), t.each(function (e) {
      _ <= e && $(this).hide(), j = cc11001100_hook("j", "<div style='display: none;' class='delete-icon'></div>" + k, "assign"), $(this).addClass("zizeng").append(j);
    }), S.each(function (e) {
      _ <= e && $(this).hide();
    }), S = cc11001100_hook("S", getlang("add"), "assign"), N.after("<div class='increase-btn'><i class='increase-icon iconfontNew'>&#xe68b;</i><span>" + S + "</span></div>"), t.find(".delete-icon").on("click", function () {
      var e = cc11001100_hook("e", $(this).parent(".mdivtable"), "var-init"),
        t = cc11001100_hook("t", e.attr("rowid"), "var-init");
      t == I && $(this).closest(".field").find(".increase-btn").removeClass("disable-style"), e.hide().prev().hide(), 1 < t - _ && e.prev().prev().find(".delete-icon").show(), triggerOnlyWrite($(this).closest(".field")), fixBottom();
    }), $(".increase-btn", g).on("click", function () {
      var e;
      $(this).hasClass("disable-style") || ((e = cc11001100_hook("e", (e = cc11001100_hook("e", g.find(".mdivtable:visible"), "assign")).eq(e.length - 1), "assign")).next().show().next().show(), e = cc11001100_hook("e", e.next().next(), "assign"), window.bindUploadMultipleFn && bindUploadMultipleFn(e), e.find(".delete-icon").show().parent().prev().prev().find(".delete-icon").hide(), e.attr("rowid") == I && $(this).addClass("disable-style"), fixBottom());
    })) : A ? (A = cc11001100_hook("A", (N = cc11001100_hook("N", g.find(".ui-slider-table"), "assign")).find(".ui-table-scroll .ui-table-body"), "assign"), T = cc11001100_hook("T", N.find(".ui-scroll-shadow"), "assign"), setFixedSliderTableHandler(g), A.on("scroll", function () {
      var e = cc11001100_hook("e", $(this), "var-init"),
        t = cc11001100_hook("t", e.parent().next(), "var-init");
      return 0 != e.scrollLeft() ? t.removeClass("ui-table-position") : t.addClass("ui-table-position"), e.scrollLeft() + e.width() === e.children().outerWidth() || e[0].scrollwidth <= e[0].clientWidth ? T.hide() : T.show(), !1;
    }), A.trigger("scroll"), A.find(".ui-table-tbody tr").on("DOMNodeInserted", function () {
      var e = cc11001100_hook("e", $(this), "var-init");
      setFixedSliderTableHandler(g, e);
    }), C && ((N = cc11001100_hook("N", g.find(".ui-table-fixed-rowTitle"), "assign")).each(function (e) {
      $(this).addClass("zizeng").append("<div style='display: none;' class='delete-icon'></div>");
    }), S = cc11001100_hook("S", getlang("add"), "assign"), g.find(".ui-slider-table").after("<div class='increase-btn'><i class='increase-icon iconfontNew'>&#xe68b;</i><span>" + S + "</span></div>"), N.find(".delete-icon").on("click", function () {
      var e = cc11001100_hook("e", $(this).closest("tr"), "var-init"),
        t = cc11001100_hook("t", e.attr("rowid"), "var-init");
      t == I && $(this).closest(".field").find(".increase-btn").removeClass("disable-style"), e.hide(), $(this).closest(".field").find(".ui-slider-table .ui-table-frame tr[rowid='" + t + "']").hide(), 1 < t - _ && e.prev().find(".delete-icon").show(), $(".increase-btn", g).show(), setFixedSliderTableHandler(g), triggerOnlyWrite(g), fixBottom();
    }), $(".increase-btn", g).on("click", function () {
      var e = cc11001100_hook("e", g.find(".ui-table-scroll .ui-table-frame tr").filter(function (e, t) {
          return "none" == t.style.display;
        }), "var-init"),
        e = cc11001100_hook("e", (1 == e.length && $(this).hide(), e.eq(0)), "var-init"),
        t = cc11001100_hook("t", e.attr("rowid"), "var-init");
      e.show(), window.bindUploadMultipleFn && bindUploadMultipleFn(e), g.find(".ui-table-fixed .ui-table-tbody tr .delete-icon").hide(), g.find(".ui-table-fixed .ui-table-tbody tr[rowid='" + t + "']").show().find(".delete-icon").show(), setFixedSliderTableHandler(g), fixBottom();
    }))) : t.each(function (e) {
      j = cc11001100_hook("j", k, "assign"), $(this).append(j);
    }), e && $("select", g).bind("change", function () {
      initTableSelectInput(this), jump(g, this), saveAnswer(g), window.count360Val && count360Val();
    }), A = cc11001100_hook("A", $("input,textarea", g), "assign"), isWeiXin && window.executeJsSdk && A.each(function (e, t) {
      ($(t).attr("qrcode") || $(t).attr("qrcodeonly") || $(t).attr("voice")) && executeJsSdk($(t));
    }), A.bind("paste", function () {
      var s = cc11001100_hook("s", this, "var-init");
      setTimeout(function () {
        var e = cc11001100_hook("e", $(s).closest("td"), "var-init"),
          n = cc11001100_hook("n", e.index(), "var-init"),
          t = cc11001100_hook("t", s.value, "var-init"),
          i = cc11001100_hook("i", e.nextAll().add(e), "var-init"),
          r = cc11001100_hook("r", e.parent().nextAll().add(e.parent()), "var-init");
        if (document.getElementById("divRef" + getTopic(g))) {
          for (var a = cc11001100_hook("a", new Array(), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r.length; o++) "none" != r.eq(o).css("display") && a.push(r[o]);
          r = cc11001100_hook("r", a, "assign");
        }
        t && 0 < t.split(" ").length && 1 < t.split(" ")[0].split("\t").length && t.split(" ")[0].split("\t").length <= i.length && t.split(" ").forEach(function (e, a) {
          e.split("\t").forEach(function (e, t) {
            var i = cc11001100_hook("i", $(r[a]), "var-init");
            C && "none" == i.css("display") && r.closest(".field").find(".increase-btn").click(), 0 < i.find("td").eq(n + t).find(".ui-select select").length && 0 < i.find("td").eq(n + t).find(".ui-select option[value='" + e + "']").length ? i.find("td").eq(n + t).find(".ui-select select").val(e).change() : i.find("td").eq(n + t).find(".ui-input-text input").val(e).blur();
          });
        });
      });
    }), A.bind("focus", function () {
      lastFixedObj && $(lastFixedObj).removeClass("btn_fixedstyle");
    }).bind("keyup change blur", function (e) {
      prevInputControl = cc11001100_hook("prevInputControl", this, "assign"), msg = cc11001100_hook("msg", verifyTxt(g, $(this), !0), "assign"), window.count360Val && count360Val(), jump(g, this), saveAnswer(g, "blur" !== e.type);
    }), iosNumberKey(A)) : "5" == a ? initRate(g) : "6" == a ? initRate(g, !0) : "4" == a ? ((U = cc11001100_hook("U", $("div.ui-checkbox", g), "assign")).each(function () {
      var e, t;
      window.hasTouPiao && (e = cc11001100_hook("e", this.getAttribute("htp"), "assign")) && (e = cc11001100_hook("e", document.getElementById("spanPiao" + n + "_" + e), "assign")) && e.innerHTML && (e.style.display = cc11001100_hook("e.style.display", "", "assign")), "1" == this.getAttribute("isdefault") && ((e = cc11001100_hook("e", $(this).find("input[type='checkbox']")[0], "assign")).checked = cc11001100_hook("(e = $(this).find(\"input[type='checkbox']\")[0]).checked", !0, "assign"), (t = cc11001100_hook("t", $(this).find("input.OtherRadioText")[0], "assign")) && (e.itemText = cc11001100_hook("e.itemText", t, "assign")), displaypeie(g, "input[type=checkbox]", 2), initCusomSelect(this, e, g[0]), setTimeout(function () {
        referTitle(g);
      }, 100), g.attr("hasdefault", "1"));
    }), addQTypeTip(g), "1" != g.attr("qingjing") && checkPeiE(g, "input[type='checkbox']"), U.bind("click", function (e) {
      try {
        if (0 == e.target.href.indexOf("http")) return !0;
      } catch (e) {}
      try {
        if (-1 < e.target.className.indexOf("layer")) return !0;
      } catch (e) {}
      var t,
        i = cc11001100_hook("i", $(this), "var-init");
      g[0] && g[0].hasConfirm || (t = cc11001100_hook("t", i.find("input[type='checkbox']")[0], "assign")).disabled || (t.checked = cc11001100_hook("t.checked", !t.checked, "assign"), window.hasAnswer = cc11001100_hook("window.hasAnswer", !0, "assign"), t.checked ? i.addClass("checked").find("a.jqcheck").addClass("jqchecked") : i.removeClass("checked").find("a.jqcheck").removeClass("jqchecked"), 1 != g.attr("gm") || this.gmclick || groupMutual(this), checkHuChi(g, this), displayRelationByType(g), verifyCheckMinMax(g, !1, !1, this, !t.checked), jump(g, t), displaypeie(g, "input[type=checkbox]", 2), window.createItem && createItem(g), 11 == cqType && updateTopicNumber(), (i = cc11001100_hook("i", i.find("input.OtherText")[0], "assign")) && (t.checked ? i.value = cc11001100_hook("i.value", i.pvalue || "", "assign") : (i.pvalue = cc11001100_hook("i.pvalue", i.value, "assign"), i.value = cc11001100_hook("i.value", "", "assign"))), referTitle(g), window.showAnswer && showAnswer(g, U), saveAnswer(g), initCusomSelect(this, t, g[0], e), window.TotalValBoxInit && TotalValBoxInit(), window.initDetailList && initDetailList(), addQTypeTip(g), e.preventDefault());
    }), g.attr("qingjing") && (F.push(g), hasQingJing = cc11001100_hook("hasQingJing", !0, "assign")), (S = cc11001100_hook("S", $("input.OtherText", g), "assign")).bind("click", function (e) {
      e.stopPropagation(), e.preventDefault();
    }), S.bind("blur keyup", function (e) {
      otherTextEvent(this, g), "blur" == e.type && saveAnswer(g, "blur" !== e.type);
    })) : "21" == a ? $(".shop-item", g).each(function () {
      var u = cc11001100_hook("u", $(".itemnum", this), "var-init"),
        w = cc11001100_hook("w", $(".item_left", this), "var-init"),
        h = cc11001100_hook("h", $(".item_detail", this), "var-init"),
        f = cc11001100_hook("f", g.attr("maxvalue") || 0, "var-init"),
        f = cc11001100_hook("f", parseInt(f), "var-init");
      $(".add", this).bind("click", function (e) {
        var t,
          i,
          a = cc11001100_hook("a", !1, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", !0, "var-init"),
          o = cc11001100_hook("o", (w[0] && (a = cc11001100_hook("a", !0, "assign"), n = cc11001100_hook("n", parseInt(w.attr("num")), "assign")), t = cc11001100_hook("t", parseInt(h.attr("minnum")), "assign"), i = cc11001100_hook("i", parseInt(h.attr("maxnum")), "assign"), parseInt(u[0].value)), "var-init"),
          s = cc11001100_hook("s", "", "var-init"),
          l = cc11001100_hook("l", 0, "var-init");
        if (f) for (var d = cc11001100_hook("d", $(".itemnum", g), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < d.length; c++) {
          var p = cc11001100_hook("p", d.eq(c), "var-init");
          if (p && p[0] && 0 < parseInt(p[0].value) && d.index(u) != c && l++, f <= l) return alertNew(getlang("shop_maxnum").replace("{0}", f)), u[0].value = cc11001100_hook("u[0].value", 0, "assign"), void e.preventDefault();
        }
        0 < t && o < parseInt(t) && (u[0].value = cc11001100_hook("u[0].value", t, "assign"), r = cc11001100_hook("r", !1, "assign")), 0 < i && o >= parseInt(i) && (s = cc11001100_hook("s", getlang("shop_limit_num").replace("{0}", i), "assign"), u[0].value = cc11001100_hook("u[0].value", i, "assign"), r = cc11001100_hook("r", !1, "assign")), a && n <= o && (!(0 < i && i < n) || n < t) && (s = cc11001100_hook("s", getlang("shop_period").replace("{0}", n), "assign"), n <= 0 && (s = cc11001100_hook("s", getlang("shop_outstock"), "assign")), u[0].value = cc11001100_hook("u[0].value", n, "assign"), r = cc11001100_hook("r", !1, "assign")), r && (u[0].value = cc11001100_hook("u[0].value", o + 1, "assign")), updateCart(g), "" != s && alertNew(s), e.preventDefault();
      }), u.bind("focus", function (e) {
        "0" == u[0].value && (u[0].value = cc11001100_hook("u[0].value", "", "assign"));
      }), u.bind("blur change", function (e) {
        u[0].value || (u[0].value = cc11001100_hook("u[0].value", "0", "assign"));
        /^[0-9]+$/.test(u[0].value) || (u[0].value = cc11001100_hook("u[0].value", "0", "assign"));
        var t = cc11001100_hook("t", 0, "var-init");
        if (f) for (var i = cc11001100_hook("i", $(".itemnum", g), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) {
          var n = cc11001100_hook("n", i.eq(a), "var-init");
          if (n && n[0] && n[0].value && 0 < parseInt(n[0].value) && i.index(u) != a && t++, f <= t) return alertNew(getlang("shop_maxnum").replace("{0}", f)), u[0].value = cc11001100_hook("u[0].value", 0, "assign"), void e.preventDefault();
        }
        var r,
          o,
          s = cc11001100_hook("s", parseInt(u[0].value), "var-init"),
          l = cc11001100_hook("l", "", "var-init"),
          d = cc11001100_hook("d", !1, "var-init"),
          c = cc11001100_hook("c", 0, "var-init");
        w[0] && (d = cc11001100_hook("d", !0, "assign"), c = cc11001100_hook("c", parseInt(w.attr("num")), "assign")), r = cc11001100_hook("r", parseInt(h.attr("minnum")), "assign"), o = cc11001100_hook("o", parseInt(h.attr("maxnum")), "assign"), !s || s < 0 ? (u[0].value = cc11001100_hook("u[0].value", 0 != s && 0 < r && s <= r ? c < r ? c : r : "0", "assign"), updateCart(g)) : (0 < r && s < r && (u[0].value = cc11001100_hook("u[0].value", r, "assign")), 0 < o && o <= s && (l = cc11001100_hook("l", getlang("shop_limit_num").replace("{0}", o), "assign"), u[0].value = cc11001100_hook("u[0].value", o, "assign")), d && c <= s && (!(0 < o && o < c) || c < r) && (l = cc11001100_hook("l", getlang("shop_period").replace("{0}", c), "assign"), d = cc11001100_hook("d", c, "assign"), u[0].value = cc11001100_hook("u[0].value", d = cc11001100_hook("d", d < 0 ? 0 : d, "assign"), "assign")), updateCart(g), "" != l && alertNew(l), e.preventDefault());
      }), $(".remove", this).bind("click", function (e) {
        var t,
          i = cc11001100_hook("i", parseInt(u[0].value), "var-init");
        (t = cc11001100_hook("t", parseInt(h.attr("minnum")), "assign")) && 0 < parseInt(t) && i <= parseInt(t) ? (u[0].value = cc11001100_hook("u[0].value", 0, "assign"), updateCart(g)) : (0 < i && (u[0].value = cc11001100_hook("u[0].value", i - 1, "assign"), updateCart(g)), e.preventDefault());
      });
    }) : "11" == a && ($("li.ui-li-static", g).bind("click", function (e) {
      var t = cc11001100_hook("t", g.attr("maxvalue"), "var-init"),
        i = cc11001100_hook("i", $("li.ui-li-static[check='1']", g).length, "var-init");
      !$(this).attr("check") && t <= i ? alertNew(getlang("check_duoxuan").replace("{0}", t)) : window.moveanimate || (g[0].hasDrag || (g[0].hasDrag = cc11001100_hook("g[0].hasDrag", !0, "assign"), sortDrage(g)), i = cc11001100_hook("i", $(this).find("input.OtherText")[0], "assign"), $(this).attr("check") ? (sortClear(this), sortNumDisp(g), i && (i.pvalue = cc11001100_hook("i.pvalue", i.value, "assign"), i.value = cc11001100_hook("i.value", "", "assign"), $(i).parent().hide())) : ($(this).find("span.sortnum").addClass("sortnum-sel"), $(this).attr("check", "1"), $(this).addClass("check"), $(this).find(".icon_lookBigpic").hide(), $(this).append("<div class='aftercheck'></div>"), sortNumDisp(g), i && (i.value = cc11001100_hook("i.value", i.pvalue || "", "assign"), $(i).parent().show())), 1 < (t = cc11001100_hook("t", $(g).find(".aftercheck"), "assign")).length ? t.show() : t.hide(), sortQ(g, this), isLoadingAnswer) || sortEvt(g, this, e);
    }), (N = cc11001100_hook("N", $("input.OtherText", g), "assign")).bind("click", function (e) {
      e.stopPropagation(), e.preventDefault();
    }), N.bind("blur keyup", function (e) {
      otherTextEvent(this, g), "blur" == e.type && saveAnswer(g, "blur" !== e.type);
    }))), g.attr("hasjump") && clearFieldValue(g);
  }), !window.isVip && Q && window.isNewQ && (alertNew("提示：此问卷使用了选项关联功能，发布者非企业版用户，无法使用！"), $("#ctlNext").hide()), 0 != allQArray.length || window.isSingleVote && window.touPiaoItemIndex || ($("#ctlNext").hide(), $("#lxNextBtn").hide(), $("#ytyyNextBtn").hide()), window.totalCut && 0 < window.totalCut) for (n = cc11001100_hook("n", 0, "assign"); n < window.totalCut; n++) {
    var r = cc11001100_hook("r", $("#" + ("divCut" + (n + 1))), "var-init"),
      o = cc11001100_hook("o", r.attr("relation"), "var-init"),
      s = cc11001100_hook("s", "", "var-init");
    r.text();
    if (o && "0" != o) {
      var s = cc11001100_hook("s", -1 != o.indexOf("|") ? "|" : "$", "var-init"),
        l = cc11001100_hook("l", o.split(s), "var-init");
      for (e in l) {
        var d = cc11001100_hook("d", l[e], "var-init");
        d && -1 != d.indexOf(",") && (d = cc11001100_hook("d", d.split(",")[0], "assign"), relationQs[d] || (relationQs[d] = cc11001100_hook("relationQs[d]", new Array(), "assign")), relationQs[d].push(r[0]));
      }
    }
    o = cc11001100_hook("o", r.attr("titletopic"), "assign");
    if (o) for (var c = cc11001100_hook("c", o.split(","), "var-init"), p = cc11001100_hook("p", 0, "var-init"); p < c.length; p++) {
      var u,
        w = cc11001100_hook("w", questionsObject[c[p]], "var-init");
      w && (w[0]._titleTopic || (w[0]._titleTopic = cc11001100_hook("w[0]._titleTopic", new Array(), "assign")), f = cc11001100_hook("f", r.attr("topic"), "assign"), w[0]._titleTopic.push(f), w = cc11001100_hook("w", r[0].childNodes[0], "assign")) && (u = cc11001100_hook("u", new RegExp("\\[q" + c[p] + "\\]", "g"), "assign"), w.innerHTML = cc11001100_hook("w.innerHTML", w.innerHTML.replace(u, "<span  class='spanTitleTopic" + f + "_" + c[p] + "' style='text-decoration:underline;'></span>"), "assign"));
    }
  }
  isLoadQues = cc11001100_hook("isLoadQues", !0, "assign");
  for (var h = cc11001100_hook("h", 0, "var-init"); h < pageHolder.length; h++) for (t = cc11001100_hook("t", pageHolder[h].questions, "assign"), n = cc11001100_hook("n", 0, "assign"); n < t.length; n++) {
    var f = cc11001100_hook("f", getTopic(t[n]), "var-init");
    relationQs[f] && relationJoin(t[n]), ItemrelationQs[f] && relationItemJoin(t[n]), $(t[n]).attr("refered") && window.createItem && createItem(t[n]);
  }
  isLoadQues = cc11001100_hook("isLoadQues", !1, "assign");
  for (var g = cc11001100_hook("g", 0, "var-init"); g < F.length; g++) {
    var m = cc11001100_hook("m", F[g], "var-init");
    "1" != $(m).attr("refer") && window.checkQj && checkQj($(m));
  }
  for (h = cc11001100_hook("h", 0, "assign"); h < pageHolder.length; h++) for (t = cc11001100_hook("t", pageHolder[h].questions, "assign"), n = cc11001100_hook("n", 0, "assign"); n < t.length; n++) checkPeiE($(t[n]));
  if ($("#hrefPreview").on("click", function () {
    window.hasHeatMap && !pageHolder[cur_page].hasGetHeatmapdata ? getHeatmapAns(function () {
      pageHolder[cur_page].hasGetHeatmapdata = cc11001100_hook("pageHolder[cur_page].hasGetHeatmapdata", !0, "assign"), $("#hrefPreview").click();
    }) : validate($(this).parent()) && (window.hasSplicing && !pageHolder[cur_page].hasGetSplicingdata ? getSplicingAns(function () {
      pageHolder[cur_page].hasGetSplicingdata = cc11001100_hook("pageHolder[cur_page].hasGetSplicingdata", !0, "assign"), $("#hrefPreview").click();
    }) : (window.lastLabel && lastLabel.hide(), $("#divMatrixHeader").hide(), groupAnswer(6)));
  }), null != $("#ctlNext") && $("#ctlNext").on("click", function () {
    try {
      var e;
      if (debugLog("准备提交答卷"), !window.isSingleVote || !window.isSubmiting) if (!this.disabled) if (window.ishydj && !window.canEditAnswer) alertNew("提示：您只能查看此答卷，不能对答卷进行编辑");else if (!window.isLoadingAnswer) if (window.IsPar) (e = cc11001100_hook("e", window.parent.document.getElementById("skin-peeler-panel"), "assign")) && (e.style.display = cc11001100_hook("e.style.display", "none", "assign")), alertNew("此问卷为预览状态，不能提交", function () {
        e && (e.style.display = cc11001100_hook("e.style.display", "block", "assign"));
      });else if (needTip()) $("#ValError").html($(divTip).text()), alertNew($(divTip).text());else if (!window.compaire360Score || compaire360Score()) if (window.needLoadReSetPeo && 0 == $("#div1").find(".jqchecked").length) alertNew("未选择评价对象，无法提交！");else {
        $("#action").val("1"), window.buttonfooter && window.buttonfooter.hide();
        var t = cc11001100_hook("t", this, "var-init");
        if (window.hasHeatMap && !pageHolder[cur_page].hasGetHeatmapdata) t.disabled = cc11001100_hook("t.disabled", !0, "assign"), getHeatmapAns(function () {
          t.disabled = cc11001100_hook("t.disabled", !1, "assign"), pageHolder[cur_page].hasGetHeatmapdata = cc11001100_hook("pageHolder[cur_page].hasGetHeatmapdata", !0, "assign"), $("#ctlNext").click();
        });else if (debugLog("验证提交数据"), validate($(this).parent()) || window.isInterview2) if (window.hasSplicing && !pageHolder[cur_page].hasGetSplicingdata) t.disabled = cc11001100_hook("t.disabled", !0, "assign"), window.maxTimer && clearInterval(maxTimer), getSplicingAns(function () {
          t.disabled = cc11001100_hook("t.disabled", !1, "assign"), pageHolder[cur_page].hasGetSplicingdata = cc11001100_hook("pageHolder[cur_page].hasGetSplicingdata", !0, "assign"), $("#ctlNext").click();
        });else {
          if (window.isSingleVote && !window.isMultipleChoice || this.scrollIntoView(), setTimeout(function () {
            fixBottom();
          }, 50), debugLog("判断是否需要验证码"), window.useAliVerify) {
            if (!isCaptchaValid) return !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex ? $("#captcha").fadeIn("fast") : window.isMultipleChoice && window.ftppar ? voteMul(!0) : window.touPiaoItemIndex && !window.isMultipleChoice ? voteSin(!0) : voteData(), void (2 == window.captchaType && $("#captchabtn").click());
          } else if (window.isSingleVote && (!window.isMultipleChoice || window.touPiaoItemIndex)) {
            if (window.isMultipleChoice && window.ftppar) return void voteMul();
            if (window.touPiaoItemIndex && !window.isMultipleChoice) return void voteSin();
          }
          window.maxTimer && clearInterval(maxTimer), window.minTimer && clearInterval(minTimer), debugLog("进入提交函数"), clockRecordTime(!0), window.LeaveRecord && LeaveRecord(), $("#spanPower").unbind("click"), $("#spanPower a").attr("href", "javascript:;").attr("target", ""), $(".footer").show(), window.needLoadReSetPeo && $("#div1").show(), catiSubmit = cc11001100_hook("catiSubmit", !1, "assign"), groupAnswer(1);
        }
      }
    } catch (e) {
      throw alert(e), e;
    }
  }), initSlider(), matrixFixedTitle(), 1 < totalPage ? ($("#divSubmit").hide(), $("#divNext")[0].style.display = cc11001100_hook("$(\"#divNext\")[0].style.display", "", "assign"), showProgress()) : $("#divSubmit").show(), 2 == window.isChuangGuan && ($("#divSubmit").hide(), window.divFengMian || startChuangGuan(!1)), !window.isSingleVote || window.isMultipleChoice || window.touPiaoItemIndex || window.hasEyeMode ? window.touPiaoItemIndex && ($("#divAwardNotify").hide(), $("#ValError").hide()) : ($("#ctlNext").hide(), $("#spanPreview").hide()), fixBottom(), $(window).on("load", function () {
    fixBottom();
  }), window.cepingCandidate) {
    for (var v = cc11001100_hook("v", cepingCandidate.split("&nbsp;&nbsp;&nbsp;"), "var-init"), x = cc11001100_hook("x", new Object(), "var-init"), y = cc11001100_hook("y", 0, "var-init"); y < v.length; y++) {
      var b = cc11001100_hook("b", v[y].replace(/(\s*)/g, "").replace(/&/g, "").replace(/\\/g, "").replace(/&nbsp;/g, "").toLowerCase(), "var-init");
      x[b] = cc11001100_hook("x[b]", "1", "assign");
    }
    var C,
      I = cc11001100_hook("I", $("#div1"), "var-init");
    window.allowPart ? (C = cc11001100_hook("C", 0, "assign"), $("input[type=checkbox]", I).each(function () {
      var e,
        t = cc11001100_hook("t", $(this).parent().parent(), "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      if (window.isZhuanYiName) {
        if (e = cc11001100_hook("e", t.find("ww-open-data")[0], "assign")) i = cc11001100_hook("i", e.getAttribute("openid"), "assign");else {
          if (!(e = cc11001100_hook("e", t.find(".label")[0], "assign"))) return t.css("display", "none"), !0;
          i = cc11001100_hook("i", e.innerHTML, "assign");
        }
      } else {
        if (!(e = cc11001100_hook("e", t.find(".label")[0], "assign"))) return !0;
        i = cc11001100_hook("i", e.innerHTML, "assign");
      }
      i = cc11001100_hook("i", i.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace(/&nbsp;/g, "").toLowerCase(), "assign"), x[i] ? window.OneaTime && 0 == C ? (t.trigger("click"), C++) : (window.oneDept || window.oneLevel) && t.trigger("click") : t.css("display", "none");
    }), I[0] && (I[0].style.display = cc11001100_hook("I[0].style.display", "", "assign")), (window.OneaTime || window.oneDept || window.oneLevel) && ($("#div1 div.field-label").css("display", "none"), $("#div1 div.ui-controlgroup ").css("display", "none"))) : ($("input[type=checkbox]", I).each(function () {
      var e = cc11001100_hook("e", $(this).parent().parent().find(".label")[0], "var-init");
      if (!e) return !0;
      e = cc11001100_hook("e", (e = cc11001100_hook("e", e.innerHTML, "assign")).replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace(/&nbsp;/g, "").toLowerCase(), "assign");
      x[e] && (this.checked = cc11001100_hook("this.checked", !0, "assign"));
    }), I[0] && (createItem(I, !1), I[0].style.display = cc11001100_hook("I[0].style.display", "none", "assign"), I[0].isCepingQ = cc11001100_hook("I[0].isCepingQ", "1", "assign")));
  }
  processAward();
  try {
    checkAnswer(), -1 < navigator.userAgent.indexOf("MiniProgramEnv/Windows") && $("a").attr("target", "");
  } catch (e) {
    console.log(e);
  }
  loadMinMaxTime();
  for (var _ = cc11001100_hook("_", document.getElementsByTagName("img"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < _.length; n++) _[n].onerror = cc11001100_hook("_[n].onerror", function () {
    this.onerror = cc11001100_hook("this.onerror", null, "assign"), replaceImg(this);
  }, "assign"), replaceImg(_[n]);
  processSearch();
  var k,
    I = cc11001100_hook("I", document.getElementById("divContent"), "var-init");
  pageHolder[0] && I && "none" != I.style.display ? adjustVideoHeight(pageHolder[0]) : window.touPiaoItemIndex && I && adjustVideoHeight(I), !window.showContent && document.getElementById("divDesc") && 0 < document.getElementById("divDesc").getElementsByTagName("iframe").length && adjustVideoHeight(document.getElementById("divDesc")), $("#ctlNext").on("mouseover", function () {
    ktimes++;
  }), !I && needTip() && ($("body").removeClass("lxbg"), $("img", divTip)[0] ? $("#toptitle,#hrefPreview").hide() : ($("#divWorkError").show(), $("#divMultiPage").hide(), $("#divWorkError").css({
    "z-index": cc11001100_hook("z-index", 2e3, "object-key-init")
  }), -1 == location.search.indexOf("iswebinner") && $("body").css({
    "min-height": cc11001100_hook("min-height", "667px", "object-key-init")
  }), I = cc11001100_hook("I", '<div style="padding-top:60px; text-align: center;"><div style="margin-bottom: 20px;"><i style="width: 85px; height: 85px;display: inline-block;position: static;background-image: url(//image.wjx.com/images/weixin/new-mobile/failure@2x.png?v=1); background-size: 85px 85px;"></i></div><div style="padding:0 20px 25px;"><h2 style="margin-bottom:15px; font-weight: 400; font-size: 20px;">' + getlang("message") + '</h2><p style="font-size: 14px; color: #999999;">' + window.divTip.innerHTML + "</p></div></div>", "assign"), $("#classicsCoverContent")[0] && ($("#classicsCoverContent").prepend("<div class='coverContentItem coverTip'>" + window.divTip.innerHTML + "</div>"), $("#classicsCoverContent .coverTip #countdownHtml").remove(), (k = cc11001100_hook("k", $("#classicsCoverContent .coverTip .viewResultWrap"), "assign")).hide(), k[0]) && $("#slideChunk .slideChunkWord").text(k.text()), checkCanPop() && window.divTip && -1 < divTip.innerHTML.indexOf("被停止") && (k = cc11001100_hook("k", "", "assign"), "miniprogram" === window.__wxjs_environment && (k = cc11001100_hook("k", "&minip=1", "assign")), I += cc11001100_hook("I", "<div style='margin:40px 20px 0 20px;border-top: dashed 1px #dadcdd;'><div style='font-size: 14px;font-weight: 400;color: #F64141;line-height: 40px;margin: 14px auto;text-align: center;'>恭喜您获得1次抽奖机会！</div><div style='text-align: center;margin-top:20px;'> <a href='/newsojiang/mobile/getaward.aspx?stype=1&activity=" + activityId + k + "' style='width:140px; background:linear-gradient(180deg,rgba(255,149,104,1) 0%,rgba(255,100,34,1) 100%); border-radius:5px;font-size:16px;color:#ffffff;padding:10px 36px 10px 36px'>立即抽奖</a></div></div>", "assign")), $("#divWorkError").html(I), $("#divWorkError")[0].style.position = cc11001100_hook("$(\"#divWorkError\")[0].style.position", "static", "assign"), $("#divTip").hide(), $("#divMob").hide(), $("#toptitle").hide(), $("#hrefPreview").hide(), window.isMobile || !window.divTip || -1 == divTip.innerHTML.indexOf("开放，") && -1 == divTip.innerHTML.indexOf("结束，") && -1 == divTip.innerHTML.indexOf("迟到，") || ($("#divWorkError div").eq(0).css({
    "padding-top": cc11001100_hook("padding-top", "50px", "object-key-init")
  }), $("#divWorkError").prepend("<div id='toptitle'><div class='htitle'>" + decodeURIComponent(originalSurveyTitle.replace(/\+/g, " ")).replace(/\\n/g, "<br>") + "</div></div>")), window.isMobile || window.isytyy || $("#reportfooter").css({
    width: cc11001100_hook("width", "800px", "object-key-init"),
    margin: cc11001100_hook("margin", "0 auto", "object-key-init")
  }), window.isytyy && $("body").css("overflow", "hidden"), window.isytyy && window.ytyyframe && ($("#pageDiv").height($("#pageDiv").height() + 50), $("#reportfooter").css({
    marginTop: cc11001100_hook("marginTop", "-50px", "object-key-init"),
    background: cc11001100_hook("background", "#FFF", "object-key-init")
  })), (k = cc11001100_hook("k", document.getElementById("divSaveBtn"), "assign")) && $("#divWorkError").append("<div style='text-align:center;'><a href='/resultquery.aspx?activity=" + activityId + "&query=1' target='_blank' style='font-size:16px;color:#0095ff;text-decoration: underline;'>" + k.innerHTML + "</a></div>"))), addtoVisitLog(), $("#divS,#loadbox").hide();
});
var lastloadansque,
  t_img,
  canSaveAnswerData = cc11001100_hook("canSaveAnswerData", !0, "var-init");
function saveAnswer(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i;
  if (window.CreateAihci && !t && (clearTimeout(i), i = cc11001100_hook("i", setTimeout(function () {
    window.CreateAihci();
  }, 100), "assign")), window.setCriculeteAns && "1" == $(e).attr("csetq") && setCriculeteAns(e), !(8e4 < $(e).attr("topic")) && (!window.isinterview || window.isInterview2) && (showProgressBar(e), window.isNeedAnsCard && 2 != window.isChuangGuan && anscardOpen(2, e), canSaveAnswerData) && window.localStorage && !hasQingJing && (window.needSaveJoin || !window.isKaoShi) && !(window.zunxiangParas && window.zunxiangParas["q" + getTopic(e)] || window.cepingCandidate && (1 == window.OneaTime || 1 == window.oneDept || window.oneLevel) || 2 == window.isChuangGuan || window.joinIdnew && window.ishydj || window.randomMode || isLoadingAnswer)) try {
    localStorage.wjxtempanswer;
    for (var a = cc11001100_hook("a", restoreAnswer(), "var-init"), n = cc11001100_hook("n", (null == a && (a = cc11001100_hook("a", new Array(), "assign")), getTopic(e)), "var-init"), r = cc11001100_hook("r", new Object(), "var-init"), o = cc11001100_hook("o", $(e).attr("type"), "var-init"), s = cc11001100_hook("s", (r._topic = cc11001100_hook("r._topic", n, "assign"), r._value = cc11001100_hook("r._value", "", "assign"), getAnswer(e, r, o, !0), !1), "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < a.length; l++) if (a[l]._topic == r._topic) {
      s = cc11001100_hook("s", !0, "assign"), a[l]._value = cc11001100_hook("a[l]._value", r._value, "assign");
      break;
    }
    n && !s && a.push(r), $("body")[0].informedimgdata && a.push({
      _topic: cc11001100_hook("_topic", -1, "object-key-init"),
      _value: cc11001100_hook("_value", encodeURIComponent($("body")[0].informedimgdata), "object-key-init")
    }), a.sort(function (e, t) {
      return e._topic - t._topic;
    });
    for (var d = cc11001100_hook("d", "", "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < a.length; l++) 0 < l && (d += cc11001100_hook("d", spChars[1], "assign")), d = cc11001100_hook("d", (d = cc11001100_hook("d", (d += cc11001100_hook("d", a[l]._topic, "assign")) + spChars[0], "assign")) + a[l]._value, "assign");
    saveSubmitAnswer(d), localStorage.wjxnextuse && localStorage.removeItem("wjxnextuse");
  } catch (e) {
    console.log(e);
  }
}
function saveSubmitAnswer(e) {
  cc11001100_hook("e", e, "function-parameter");
  window.localStorage && (e = cc11001100_hook("e", {
    wjxtempanswer: cc11001100_hook("wjxtempanswer", e, "object-key-init"),
    wjxtempanswerid: cc11001100_hook("wjxtempanswerid", activityId, "object-key-init"),
    wjxtempanswerdat: cc11001100_hook("wjxtempanswerdat", new Date().getTime(), "object-key-init"),
    wjxsavepage: cc11001100_hook("wjxsavepage", cur_page, "object-key-init"),
    wjxfirstloadtime: cc11001100_hook("wjxfirstloadtime", fisrtLoadTime, "object-key-init")
  }, "assign"), wjxdata.set(e));
}
function clearAnswer(e) {
  cc11001100_hook("e", e, "function-parameter");
  try {
    var t;
    window.setCookieNew && 0 == window.informedShowTimes && setCookieNew("ain" + activityId, 0, 0), window.localStorage && (localStorage.removeItem("wjxlastanswer" + activityId), t = cc11001100_hook("t", needSaveTmp(), "assign"), e || !t ? (canSaveAnswerData = cc11001100_hook("canSaveAnswerData", !1, "assign"), wjxdata.clear(), localStorage.removeItem("wjxnextuse")) : (localStorage.setItem("wjxnextuse", activityId), !window.preserveAnswer || window.cepingCandidate || wjxdata.get().wjxanswerdata && wjxdata.get().wjxanswerdata.wjxfirstAnswerTime || wjxdata.updata("wjxfirstAnswerTime", new Date().getTime() - fisrtLoadTime)), wjxdata.clear("wjxfirstloadtime,wjxlastcosttime"));
  } catch (e) {
    console.log(e);
  }
}
function isNullAnswer(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", !1, "var-init");
  switch (e) {
    case "21":
      -2 == t && (i = cc11001100_hook("i", !0, "assign"));
      break;
    case "12":
      for (var a = cc11001100_hook("a", t.split(spChars[2]), "var-init"), i = cc11001100_hook("i", !0, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) 0 < a[n].split(spChars[4])[1] && (i = cc11001100_hook("i", !1, "assign"));
      break;
    default:
      i = cc11001100_hook("i", !1, "assign");
  }
  return i;
}
function loadAnswer() {
  if (!window.isinterview && !window.isInterview2) {
    var e = cc11001100_hook("e", restoreAnswer(), "var-init");
    if (null != e) {
      var t = cc11001100_hook("t", null, "var-init"),
        i = cc11001100_hook("i", (ktimes++, window.needLoadReSetPeo && $("#div1").show(), wjxdata.get().wjxanswerdata), "var-init");
      if (i) {
        var a = cc11001100_hook("a", i.wjxfirstloadtime, "var-init"),
          n = cc11001100_hook("n", i.wjxtempanswerdat, "var-init"),
          r = cc11001100_hook("r", i.wjxlastcosttime, "var-init");
        a && !window.submitShareData ? (lastCostTime = cc11001100_hook("lastCostTime", n - a, "assign"), r && (lastCostTime += cc11001100_hook("lastCostTime", parseInt(r), "assign")), wjxdata.updata("wjxlastcosttime", lastCostTime)) : window.preserveAnswer && !window.cepingCandidate && i.wjxfirstAnswerTime && (lastCostTime = cc11001100_hook("lastCostTime", i.wjxfirstAnswerTime, "assign"));
        try {
          window.JSON && JSON.stringify && (t = cc11001100_hook("t", JSON.stringify(i), "assign"));
        } catch (e) {}
      }
      t && addtoactivitysave(t), isLoadingAnswer = cc11001100_hook("isLoadingAnswer", !0, "assign");
      for (var n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", (window.joinIdnew || (n = cc11001100_hook("n", wjxdata.get().wjxanswerdata && wjxdata.get().wjxanswerdata.wjxsavepage, "assign")), !1), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < e.length; s++) {
        window.isytyy && s < (l = cc11001100_hook("l", (l = cc11001100_hook("l", e.length, "assign")) > (d = cc11001100_hook("d", $('.fieldset:not([skip="true"])').find('.field:not([verify="clock"],[verify="recording"],[csetq="1"],[nhide="1"])').filter(function () {
          return parseInt($(this).attr("topic")) < 5e4 || -1 < $(this).attr("topic").indexOf("c");
        }), "assign")).length ? d.length : l, "assign")) - 1 && setTimeout(function () {
          $("#ytyyNextBtn").trigger("click");
        }, 300);
        var l,
          d = cc11001100_hook("d", e[s]._topic, "var-init"),
          c = cc11001100_hook("c", e[s]._value, "var-init");
        if (-1 == d && c) $("body")[0].informedimgdata = cc11001100_hook("$(\"body\")[0].informedimgdata", decodeURIComponent(c), "assign");else if (c) {
          var p = cc11001100_hook("p", $("#div" + d), "var-init");
          if ((p = cc11001100_hook("p", window.partPages || window.activityCommonInfo ? $(".field[topic='" + d + "']") : p, "assign"))[0] && !("none" == p[0].style.display && "-1" != p.attr("relation") || window.zunxiangParas && window.zunxiangParas["q" + d])) {
            var u = cc11001100_hook("u", $(p).attr("type"), "var-init");
            if (!isNullAnswer(u, c)) switch (cur_page = cc11001100_hook("cur_page", p[0].pageIndex || 0, "assign"), 3 != window.isChuangGuan && 4 != window.isChuangGuan && !window.IsOneQuestionPerPage || $(p).attr("skip", "1"), lastloadansque = cc11001100_hook("lastloadansque", p[0], "assign"), u) {
              case "1":
                var w = cc11001100_hook("w", $("input", p), "var-init");
                w[0].value = cc11001100_hook("w[0].value", c, "assign"), 1 != p.attr("req") && addClearHref(p[0]), "1" == w.attr("datelimittype") && c && 3 == c.split("-").length && (h = cc11001100_hook("h", c.split("-")[0] + "-" + c.split("-")[1], "assign"), w[0].value = cc11001100_hook("w[0].value", h, "assign")), "1" == w.attr("voiceonly") && c && -1 < c.indexOf("┊") && (w[0].value = cc11001100_hook("w[0].value", c.split("┊")[0], "assign"), w[0].serverId = cc11001100_hook("w[0].serverId", c.split("┊")[1], "assign"), $(p).find(".audiowrap").html("已录音！").css("color", "#F8334D").css("margin", "0 0 10px")), window.joinIdnew && 1 != w.attr("hasgs") ? window.joinIdnew && referTitle(p, c) : w.trigger("blur"), w.parent().hasClass("getLocalBtn") && (!("1" == w.attr("needonly")) && !matchDayTitle() || window.joinIdnew ? w.parent().prev().text(c).show() : w[0].value = cc11001100_hook("w[0].value", "", "assign"));
                break;
              case "2":
                c = cc11001100_hook("c", c.split("<br/>").join("\n"), "assign");
                var h = cc11001100_hook("h", $("textarea", p), "var-init");
                if ("1" == h.attr("voiceonly") && c && -1 < c.indexOf("┊")) h[0].value = cc11001100_hook("h[0].value", c.split("┊")[0], "assign"), h.trigger("blur"), h[0].serverId = cc11001100_hook("h[0].serverId", c.split("┊")[1], "assign"), $(p).find(".audiowrap").html("已录音！").css("color", "#F8334D").css("margin", "0 0 10px");else {
                  if (h[0].value = cc11001100_hook("h[0].value", c, "assign"), "AI" == h.attr("verify") && c) {
                    for (var f = cc11001100_hook("f", (h[0].aival = cc11001100_hook("h[0].aival", c, "assign")).split("┋"), "var-init"), R = cc11001100_hook("R", "", "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) R += cc11001100_hook("R", g % 2 != 0 ? "Q：" + f[g] + "\n" : "A：" + f[g] + "\n", "assign");
                    h[0].value = cc11001100_hook("h[0].value", R, "assign");
                  }
                  c && "AIHCI" == h.attr("verify") && !h[0].disabled && (h[0].hasChangeAiRes = cc11001100_hook("h[0].hasChangeAiRes", !0, "assign")), h.trigger("blur");
                }
                break;
              case "3":
                var m = cc11001100_hook("m", c.split(spChars[2]), "var-init");
                $("input", p).each(function () {
                  var e;
                  "radio" == this.type && this.value == m[0] && "none" == this.parentNode.parentNode.style.display || this.value == m[0] && this.disabled ? o = cc11001100_hook("o", !0, "assign") : "radio" != this.type || this.value != m[0] || this.disabled || (m[1] && (e = cc11001100_hook("e", $(this).attr("rel"), "assign")) && $("#" + e)[0] && ($("#" + e)[0].value = cc11001100_hook("$(\"#\" + e)[0].value", m[1], "assign")), p[0].prevRadio = cc11001100_hook("p[0].prevRadio", this, "assign"), $(this).closest(".ui-radio").trigger("click"));
                });
                break;
              case "4":
                var v = cc11001100_hook("v", c.split(spChars[3]), "var-init");
                $("input", p).each(function () {
                  if ("checkbox" != this.type) return !0;
                  if (window.cepingCandidate && "none" == this.parentNode.parentNode.style.display) return !0;
                  for (var e = cc11001100_hook("e", this.value, "var-init"), t = cc11001100_hook("t", this.checked, "var-init"), i = cc11001100_hook("i", !1, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < v.length; a++) {
                    var n,
                      r = cc11001100_hook("r", v[a].split(spChars[2]), "var-init");
                    if (r[0] == e && !this.disabled) {
                      r[1] && (n = cc11001100_hook("n", $(this).attr("rel"), "assign")) && $("#" + n)[0] && ($("#" + n)[0].value = cc11001100_hook("$(\"#\" + n)[0].value", r[1], "assign"), $("#" + n)[0].pvalue = cc11001100_hook("$(\"#\" + n)[0].pvalue", r[1], "assign")), t || $(this).closest(".ui-checkbox").trigger("click"), i = cc11001100_hook("i", !0, "assign");
                      break;
                    }
                  }
                  t && !i && $(this).closest(".ui-checkbox").trigger("click");
                });
                break;
              case "5":
                var x = cc11001100_hook("x", [], "var-init"),
                  y = cc11001100_hook("y", c, "var-init");
                if (1 == p.attr("pj") && c && 2 == (w = cc11001100_hook("w", c.split(spChars[2]), "assign")).length && (x = cc11001100_hook("x", w[1].split("、"), "assign"), y = cc11001100_hook("y", w[0], "assign")), $(".rate-off", p).each(function () {
                  this.getAttribute("val") == y && $(this).parent().trigger("click");
                }), 1 == p.attr("pj") && 0 < x.length) {
                  for (var b = cc11001100_hook("b", p.find(".evaluateTagDiv").eq(y - 1), "var-init"), L = cc11001100_hook("L", x[x.length - 1], "var-init"), q = cc11001100_hook("q", !1, "var-init"), V = cc11001100_hook("V", $(".evaluateTagItem", b), "var-init"), U = cc11001100_hook("U", 0, "var-init"); U < x.length; U++) V.each(function () {
                    var e = cc11001100_hook("e", $(this).text(), "var-init");
                    e == x[U] && $(this).trigger("click"), e == L && (q = cc11001100_hook("q", !0, "assign"));
                  });
                  if (!q) {
                    $(".writeRvaluate", b).trigger("click");
                    var C = cc11001100_hook("C", $(".wjxui_limit_box", b).show().find("textarea"), "var-init");
                    if (1 < C.length) for (var D = cc11001100_hook("D", x.length, "var-init"), I = cc11001100_hook("I", 0, "var-init"), g = cc11001100_hook("g", 2, "var-init"); 0 < g; g--) C[I] && x[D - g] && (C[I].value = cc11001100_hook("C[I].value", x[D - g], "assign"), $(C[I]).trigger("blur")), I++;else C[0] && (C[0].value = cc11001100_hook("C[0].value", L, "assign")), C.trigger("blur");
                  }
                }
                break;
              case "7":
                $("option", p).each(function () {
                  if (this.value == c && !this.disabled) {
                    try {
                      $("select", p)[0].value = cc11001100_hook("$(\"select\", p)[0].value", c, "assign"), $("select", p).trigger("change");
                    } catch (e) {
                      console.log(e.message);
                    }
                    return !1;
                  }
                });
                break;
              case "11":
                for (var v = cc11001100_hook("v", c.split(","), "var-init"), _ = cc11001100_hook("_", $("li.ui-li-static", p), "var-init"), B = cc11001100_hook("B", -1, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < v.length; g++) if ("-2" != v[g]) for (var F = cc11001100_hook("F", v[g].split("^"), "var-init"), I = cc11001100_hook("I", 0, "var-init"); I < _.length; I++) if ((c = cc11001100_hook("c", $(_[I]).find("input:hidden")[0].value, "assign")) == F[0]) {
                  $(_[I]).trigger("click");
                  var B = cc11001100_hook("B", I, "var-init"),
                    Q = cc11001100_hook("Q", $(_[I]).find("input.OtherText"), "var-init");
                  F[1] && Q[0] && (Q[0].value = cc11001100_hook("Q[0].value", F[1], "assign"));
                  break;
                }
                -1 < B && sortEvt(p, _[B]);
                break;
              case "8":
                b = cc11001100_hook("b", $("input", p), "assign");
                b[0].value = cc11001100_hook("b[0].value", c, "assign"), "1" == b.attr("hasgs") && b.blur(), $(b).trigger("change");
                break;
              case "21":
                for (var z = cc11001100_hook("z", "1" == $(p).attr("isshelf"), "var-init"), G = cc11001100_hook("G", z && "1" == $(p).attr("mode"), "var-init"), W = cc11001100_hook("W", c.split(spChars[3]), "var-init"), J = cc11001100_hook("J", (G && (W = cc11001100_hook("W", c.split(","), "assign")), $("input", p)), "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < W.length; k++) {
                  var X,
                    K = cc11001100_hook("K", W[k].split(spChars[2]), "var-init"),
                    j = cc11001100_hook("j", parseInt(K[0]) - 1, "var-init");
                  j < 0 || (z ? ((X = cc11001100_hook("X", $(p).find(".shelfwrap")[0], "assign")).shoparr[j].selected = cc11001100_hook("(X = $(p).find(\".shelfwrap\")[0]).shoparr[j].selected", !0, "assign"), X.shoparr[j].sortindex = cc11001100_hook("X.shoparr[j].sortindex", ++shelftSortindex, "assign")) : J[j].value = cc11001100_hook("J[j].value", K[1], "assign"));
                }
                (z ? shelfsetans : updateCart)(p);
                break;
              case "12":
              case "33":
              case "34":
              case "9":
                for (var T = cc11001100_hook("T", c.split(spChars[2]), "var-init"), A = cc11001100_hook("A", new Object(), "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < T.length; k++) 2 == (H = cc11001100_hook("H", T[k].split(spChars[4]), "assign")).length && (A[H[0]] = cc11001100_hook("A[H[0]]", H[1], "assign"));
                var Z = cc11001100_hook("Z", p.attr("hasjump"), "var-init"),
                  Y = cc11001100_hook("Y", !1, "var-init");
                $("9" == u ? "input:not(.file input[type=file]), .file,textarea" : "34" == u ? "textarea" : "33" == u ? ".file" : "input", p).each(function (e) {
                  var t = cc11001100_hook("t", $(this), "var-init");
                  if ("1" == t.attr("fuzzyquery") && (Y = cc11001100_hook("Y", !0, "assign")), "12" == u && window.hasReferClient) {
                    var i = cc11001100_hook("i", this.parentNode.parentNode.parentNode, "var-init");
                    if (i && "none" == i.style.display) return !0;
                  }
                  var a,
                    i = cc11001100_hook("i", -1 < this.className.indexOf("file"), "var-init"),
                    n = cc11001100_hook("n", "33" == u || i ? /_(\d+)$/.exec(t[0].parentNode.parentNode.getAttribute("id"))[1] : t.attr("rowid"), "var-init");
                  "33" == u || i ? A[n] && "(空)" != A[n] && "(跳过)" != A[n] && (t[0].parentNode.fileName = cc11001100_hook("t[0].parentNode.fileName", A[n] || "", "assign"), window.mapfileName && (t[0].parentNode.fileName = cc11001100_hook("t[0].parentNode.fileName", mapfileName(t[0].parentNode.fileName), "assign")), window.previewQNFile ? previewQNFile(t[0].parentNode, t[0].parentNode.fileName) : t.siblings(".uploadmsg").html(UPLOAD_FILE_SUCCESS)) : (n ? A[n] && (a = cc11001100_hook("a", A[n], "assign")) : a = cc11001100_hook("a", T[e], "assign"), (a = cc11001100_hook("a", (a = cc11001100_hook("a", "Ⅳ" == a ? "" : a, "assign")) && a.replace(/\<br\/\>/g, "\n"), "assign")) && (this.value = cc11001100_hook("this.value", a, "assign"), t.trigger("change"))), Y && a && ((i = cc11001100_hook("i", t.closest("tr"), "assign")).show(), i.closest("table").hasClass("scaletablewrap ") || i.prev().show(), 0 < e) && t.prop("disabled", !0), t.next().hasClass("textEdit") && a && (t.next().removeClass("initStyle").children(".textCont").html(a).css({
                    display: cc11001100_hook("display", "inline", "object-key-init"),
                    width: cc11001100_hook("width", "auto", "object-key-init")
                  }), 1 == t.attr("hasgs")) && t.next().removeClass("initStyle").children(".textCont").blur(), "指定选项" == t.attr("verify") && (n = cc11001100_hook("n", t.next().find("select")[0], "assign"), this.value) && n && (n.value = cc11001100_hook("n.value", this.value, "assign"), n.value || loadAnsTableSelectInput(n, this.value), $(n).trigger("change")), "12" == u ? $(t).trigger("change").trigger("blur") : !a && 9 == u || $(t).trigger("blur");
                });
                break;
              case "13":
                "(空)" != c && (!p.attr("splicing") || window.joinIdnew || window.isChuangGuan) && (p[0].fileName = cc11001100_hook("p[0].fileName", c || "", "assign"), window.mapfileName && (p[0].fileName = cc11001100_hook("p[0].fileName", mapfileName(p[0].fileName), "assign")), c) && (window.previewQNFile && !p.attr("splicing") && "1" != p.attr("heatmap") ? previewQNFile(p[0], p[0].fileName) : window.previewQNFile && window.joinIdnew && "1" != p.attr("heatmap") ? (p[0].isloadanswer = cc11001100_hook("p[0].isloadanswer", !0, "assign"), previewQNFile(p[0], p[0].fileName)) : $(".uploadmsg", p).html(UPLOAD_FILE_SUCCESS), "1" == p.attr("heatmap") && -1 < c.indexOf("┋") && (p[0].fileName = cc11001100_hook("p[0].fileName", c.split("┋")[1], "assign"), p[0].heatmapAnsStr = cc11001100_hook("p[0].heatmapAnsStr", c.split("┋")[0], "assign"), loadheatmapans(p), $(".uploadmsg", p).html("")), p.attr("hasjump")) && jump(p, "");
                break;
              case "10":
                for (T = cc11001100_hook("T", c.split(spChars[2]), "assign"), A = cc11001100_hook("A", new Object(), "assign"), k = cc11001100_hook("k", 0, "assign"); k < T.length; k++) 2 == (H = cc11001100_hook("H", T[k].split(spChars[4]), "assign")).length && (A[H[0]] = cc11001100_hook("A[H[0]]", H[1], "assign"));
                var ee = cc11001100_hook("ee", "input:not(.file input[type=file]), .file,textarea", "var-init"),
                  S = cc11001100_hook("S", !1, "var-init"),
                  Z = cc11001100_hook("Z", ("1" == p.attr("select") && (ee = cc11001100_hook("ee", "select", "assign"), S = cc11001100_hook("S", !0, "assign")), p.attr("hasjump")), "var-init"),
                  G = cc11001100_hook("G", "table", "var-init"),
                  te = cc11001100_hook("te", !1, "var-init");
                (te = cc11001100_hook("te", "1" == p.attr("fixedslider") ? !0 : te, "assign")) && (G = cc11001100_hook("G", ".ui-table-scroll .ui-table-tbody tr[rowid]", "assign")), $(G, p).each(function (o) {
                  var s = cc11001100_hook("s", this.parentNode, "var-init"),
                    e = cc11001100_hook("e", (s = cc11001100_hook("s", te ? this : s, "assign")).getAttribute("rowid"), "var-init"),
                    e = cc11001100_hook("e", A[e], "var-init");
                  if (!e) return !0;
                  var l = cc11001100_hook("l", e.split(spChars[3]), "var-init");
                  if ((window.hasReferClient || p.attr("zizeng")) && s && "none" == s.style.display) {
                    if ("Ⅳ" == l[0]) return !0;
                    $(".increase-btn", p).click();
                  }
                  var d = cc11001100_hook("d", 0, "var-init");
                  $(ee, this).each(function () {
                    var e = cc11001100_hook("e", -1 < this.className.indexOf("file"), "var-init"),
                      t = cc11001100_hook("t", this.childNodes[0], "var-init");
                    if (e = cc11001100_hook("e", e && t && t.getAttribute("splicing") ? !1 : e, "assign")) l[d] && "(空)" != l[d] && "(跳过)" != l[d] && (this.parentNode.fileName = cc11001100_hook("this.parentNode.fileName", l[d] || "", "assign"), window.mapfileName && (this.parentNode.fileName = cc11001100_hook("this.parentNode.fileName", mapfileName(this.parentNode.fileName), "assign")), window.previewQNFile ? previewQNFile(this.parentNode, this.parentNode.fileName) : $(this).siblings(".uploadmsg").html(UPLOAD_FILE_SUCCESS).show());else if (this.value = cc11001100_hook("this.value", l[d] || "", "assign"), S && l[d] && -1 < l[d].indexOf("‖")) {
                      var i = cc11001100_hook("i", l[d].split("‖"), "var-init");
                      if (999 == i[0]) for (var a = cc11001100_hook("a", this.options, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) {
                        var r = cc11001100_hook("r", a[n].text, "var-init");
                        if (-1 < r.indexOf("请注明") || 0 == r.indexOf("▼")) {
                          this.value = cc11001100_hook("this.value", a[n].value, "assign"), a[n].text = cc11001100_hook("a[n].text", i[1], "assign"), a[n].sinput = cc11001100_hook("a[n].sinput", !0, "assign");
                          break;
                        }
                      } else this.value = cc11001100_hook("this.value", i[0], "assign"), this.options[this.selectedIndex].text = cc11001100_hook("this.options[this.selectedIndex].text", i[1], "assign"), this.options[this.selectedIndex].sinput = cc11001100_hook("this.options[this.selectedIndex].sinput", !0, "assign");
                      this.noprompt = cc11001100_hook("this.noprompt", !0, "assign");
                    }
                    "Ⅳ" == this.value && (this.value = cc11001100_hook("this.value", "", "assign")), o >= p.attr("minvalue") && this.value && "none" == s.style.display && (s.style.display = cc11001100_hook("s.style.display", s.previousElementSibling.style.display = cc11001100_hook("s.previousElementSibling.style.display", "", "assign"), "assign")), "多行文本" == $(this).attr("verify") && (this.value = cc11001100_hook("this.value", this.value.replace(/\<br\/\>/g, "\n"), "assign")), S || (t = cc11001100_hook("t", $(this), "assign"), this.value && $(this).attr("hasgs") && $(this).blur(), "指定选项" == t.attr("verify") && (e = cc11001100_hook("e", t.next().find("select")[0], "assign"), t = cc11001100_hook("t", this.value, "assign"), this.value) && e && (e.value = cc11001100_hook("e.value", t, "assign"), e.value || loadAnsTableSelectInput(e, t), $(e).trigger("change"))), (S || Z) && $(this).trigger("change"), d++;
                  });
                });
                break;
              case "6":
                for (T = cc11001100_hook("T", c.split(","), "assign"), A = cc11001100_hook("A", new Object(), "assign"), k = cc11001100_hook("k", 0, "assign"); k < T.length; k++) 2 == (H = cc11001100_hook("H", T[k].split(spChars[4]), "assign")).length && (A[H[0]] = cc11001100_hook("A[H[0]]", H[1], "assign"));
                if ("1" == $(p).attr("texthighlights")) $(p).find(".highligntsitem").each(function (e, t) {
                  e = cc11001100_hook("e", A[e + 1].split(spChars[2]), "assign");
                  e[0] && 0 <= e[0] && ($(t).attr("value", e[0]), setTextHighlights(t), "1" != $(p).attr("req")) && addClearHref(p);
                }), displayRelationByType(p);else {
                  var ie = cc11001100_hook("ie", $(p).attr("ischeck"), "var-init"),
                    ae = cc11001100_hook("ae", $("table.matrix-rating", p), "var-init"),
                    ne = cc11001100_hook("ne", ae[0].rows, "var-init"),
                    re = cc11001100_hook("re", "true" == $(p).attr("daozhi"), "var-init"),
                    oe = cc11001100_hook("oe", ($(p).attr("alone"), ae.parent().hasClass("scaletablewrap")), "var-init");
                  if ($(".isTendencyQADiv", p).length) {
                    var se,
                      N = cc11001100_hook("N", $(".isTendencyQADiv", p)[0], "var-init"),
                      O = cc11001100_hook("O", N.tendencytrObjArr, "var-init");
                    for (se in A) {
                      var le,
                        de = cc11001100_hook("de", A[se].replace(/\^/g, ""), "var-init");
                      0 < de && ((le = cc11001100_hook("le", O.find(function (e) {
                        return Number(e.rowindex) + 1 == se;
                      }), "assign")).initSelect = cc11001100_hook("(le = O.find(function (e) {\n  return Number(e.rowindex) + 1 == se;\n})).initSelect", !0, "assign"), saveMatrixFill($("[dval=" + de + "]", le.dom).toggleClass("rate-on")));
                    }
                    O[0].initSelect && O[O.length - 1].initSelect ? ($("table", N).addClass("disabled"), N.rowsIndex = cc11001100_hook("N.rowsIndex", O.length, "assign"), N.showrow()) : O[0].initSelect && !O[O.length - 1].initSelect ? (O.find(function (e, t) {
                      t += cc11001100_hook("t", 1, "assign");
                      return t > O.length && (t = cc11001100_hook("t", O.length, "assign")), N.rowsIndex = cc11001100_hook("N.rowsIndex", t, "assign"), !e.initSelect;
                    }), N.climate = cc11001100_hook("N.climate", 5, "assign"), N.showrow()) : !O[0].initSelect && O[O.length - 1].initSelect && (O.find(function (e, t) {
                      return N.rowsIndex = cc11001100_hook("N.rowsIndex", t, "assign"), e.initSelect;
                    }), N.climate = cc11001100_hook("N.climate", 1, "assign"), N.showrow(!0)), saveLikert(p), displayRelationByType(p), saveAnswer(p);
                  } else for (var ce = cc11001100_hook("ce", oe ? 1 : 0, "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < ne.length; k++) {
                    var E,
                      P = cc11001100_hook("P", ne[k], "var-init"),
                      pe = cc11001100_hook("pe", P.getAttribute("tp"), "var-init");
                    if ("d" == pe) {
                      if (re) {
                        for (var ue = cc11001100_hook("ue", $(P).children(), "var-init"), M = cc11001100_hook("M", ce, "var-init"); M < ue.length; M++) {
                          var H = cc11001100_hook("H", T[M], "var-init"),
                            we = cc11001100_hook("we", (oe && (H = cc11001100_hook("H", T[M - 1], "assign")), $(ue[M]).attr("fid")), "var-init"),
                            we = cc11001100_hook("we", ae.find("td[fid='" + we + "']"), "var-init"),
                            he = cc11001100_hook("he", oe ? M : M + 1, "var-init");
                          $(".rate-off", we).each(function () {
                            var e = cc11001100_hook("e", $(this).attr("dval"), "var-init");
                            if (A[he]) if (ie) for (var t = cc11001100_hook("t", A[he].split(";"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
                              var a = cc11001100_hook("a", t[i].split(spChars[2]), "var-init");
                              e == a[0] && (a[1] && (this.fillvalue = cc11001100_hook("this.fillvalue", a[1], "assign")), $(this).trigger("click"));
                            } else e == (t = cc11001100_hook("t", A[he].split(spChars[2]), "assign"))[0] && (t[1] && (this.fillvalue = cc11001100_hook("this.fillvalue", t[1], "assign")), $(this).trigger("click"));
                          });
                        }
                        break;
                      }
                      window.hasReferClient && "none" == P.style.display || (E = cc11001100_hook("E", parseInt(P.getAttribute("rowindex")) + 1, "assign"), H = cc11001100_hook("H", T[E], "assign"), $(".rate-off", P).each(function () {
                        var e = cc11001100_hook("e", $(this).attr("dval"), "var-init");
                        if (A[E]) if (ie) for (var t = cc11001100_hook("t", A[E].split(";"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
                          var a = cc11001100_hook("a", t[i].split(spChars[2]), "var-init");
                          e == a[0] && (a[1] && (this.fillvalue = cc11001100_hook("this.fillvalue", a[1], "assign")), $(this).trigger("click"), aloneAnswerToItem(this));
                        } else e == (t = cc11001100_hook("t", A[E].split(spChars[2]), "assign"))[0] && (t[1] && (this.fillvalue = cc11001100_hook("this.fillvalue", t[1], "assign")), $(this).trigger("click"));
                      }));
                    }
                  }
                }
            }
          }
        }
      }
      if (lastloadansque && lastloadansque.scrollIntoView(), cur_page = cc11001100_hook("cur_page", 0, "assign"), 3 != window.isChuangGuan && 4 != window.isChuangGuan && !window.IsOneQuestionPerPage || (o = cc11001100_hook("o", !0, "assign"), cur_page = cc11001100_hook("cur_page", 0, "assign")), n && 1 <= n && !o && ((a = cc11001100_hook("a", 0, "assign")) < (a = cc11001100_hook("a", (r = cc11001100_hook("r", $(".field[circulate='1']")[0], "assign")) && 0 == r.pageIndex ? 0 : r && 0 < r.pageIndex && n >= r.pageIndex ? r.pageIndex : n, "assign")) && (pageHolder[0].style.display = cc11001100_hook("pageHolder[0].style.display", "none", "assign"), cur_page = cc11001100_hook("cur_page", a - 1, "assign"), show_next_page(!0)), wjxdata.updata("wjxsavepage", n)), isLoadingAnswer = cc11001100_hook("isLoadingAnswer", !1, "assign"), window.zunxiangAutoClick && 0 < cur_page) for (g = cc11001100_hook("g", 0, "assign"); g < cur_page; g++) zunxiangAutoClick(g);
      window.count360Val && count360Val(), window.previewAllFiles && previewAllFiles(), window.initDetailList && initDetailList();
    }
  }
}
function needTip() {
  if (window.divTip && "" == divTip.style.display) {
    if ($("img", divTip)[0]) return divTip.style.background = cc11001100_hook("divTip.style.background", "none", "assign"), divTip.style.color = cc11001100_hook("divTip.style.color", "#333", "assign"), !0;
    if ($.trim($(divTip).text())) return !0;
  }
  return !1;
}
function loadMinMaxTime() {
  !window.hasPageTime || window.waitconfirm || window.waitfenmian || window.waitytyy || window.waitinformed || processMinMax();
}
function hasAnswerData(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (e) for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) if (-1 == e[t]._topic && e[t]._value) $("body")[0].informedimgdata = cc11001100_hook("$(\"body\")[0].informedimgdata", decodeURIComponent(e[t]._value), "assign");else if (e[t]._value && "(空)" != e[t]._value) return !0;
  return !1;
}
function checkAnswer() {
  var e, t;
  window.waitfenmian || window.waitinformed || window.hasrecordtit || !window.localStorage || window.ytyyauto || window.haszhezhaotips || (e = cc11001100_hook("e", window.maxSurveyTime || 0 < $("fieldset[maxtime]").length, "assign"), t = cc11001100_hook("t", window.isSingleVote && window.isMultipleChoice && !window.touPiaoItemIndex, "assign"), !(localStorage.wjxnextuse == activityId) || window.joinIdnew || t || window.isSingleVote || needTip() ? !window.touPiaoItemIndex && (window.needSaveJoin || t || window.joinIdnew || window.hasRelationAns) ? (window.gsdata && gsdata.length && window.GsOld && getNewGsList("isNeedSave"), window.gsdata && gsdata.length && !window.GsOld && GsStart(), aloneAnswer(), loadAnswer()) : !window.localStorage || window.isSingleVote || window.isJieLong || needTip() || window.isKaoShi || window.needLogin || e || window.notLoadAnswer || window.isinterview || window != window.top || hasAnswerData(restoreAnswer()) && (t = cc11001100_hook("t", getlang("load_answer"), "assign"), waitconfirm = cc11001100_hook("waitconfirm", !0, "assign"), confirmnew(t, function () {
    $("#loadbox").show(), setTimeout(function () {
      waitconfirm = cc11001100_hook("waitconfirm", !1, "assign"), loadAnswer(), loadMinMaxTime(), $("#loadbox").hide();
    }, 100);
  }, function () {
    clearAnswer(!(waitconfirm = cc11001100_hook("waitconfirm", !1, "assign"))), canSaveAnswerData = cc11001100_hook("canSaveAnswerData", !0, "assign"), loadMinMaxTime(), window.GsOld && window.ipGsList && ipGsList.length && ipGsList.forEach(function (e) {
      dealQuestionTypeIP(e);
    }), !window.GsOld && window.GsRestorAns && window.GsRestorAns();
  }, function () {
    !window.GsOld && window.GsRestorAns && window.GsRestorAns();
  })) : (hasAnswerData(restoreAnswer()) && (waitconfirm = cc11001100_hook("waitconfirm", !0, "assign")), confirmnew(getlang("tit_loaddate"), function () {
    $("#loadbox").show(), setTimeout(function () {
      waitconfirm = cc11001100_hook("waitconfirm", !1, "assign"), loadAnswer(), loadMinMaxTime(), $("#loadbox").hide();
    }, 100);
  }, function () {
    clearAnswer(!(waitconfirm = cc11001100_hook("waitconfirm", !1, "assign"))), canSaveAnswerData = cc11001100_hook("canSaveAnswerData", !0, "assign"), loadMinMaxTime();
  })));
}
function hideAward() {
  confirmnew("确认不再领取吗？", function () {
    removeAwardSt(), 3 == window.isChuangGuan || 4 == window.isChuangGuan || window.IsOneQuestionPerPage ? $(".fmWrap").prev().hide() : ($("#divContent").show().prev().hide(), initSlider());
  });
}
function removeAwardSt() {
  window.localStorage && (vkey = cc11001100_hook("vkey", "award_" + activityId, "assign"), localStorage.removeItem(vkey), localStorage.removeItem(vkey + "name"), localStorage.removeItem(vkey + "tip"), localStorage.removeItem(vkey + "tme"));
}
function processAward() {
  var e, t, i, a, n;
  window.isChuangGuan || window.ytyyframe || (a = cc11001100_hook("a", "award_" + activityId, "assign"), t = cc11001100_hook("t", e = cc11001100_hook("e", "", "assign"), "assign"), window.localStorage && (e = cc11001100_hook("e", localStorage[a], "assign"), t = cc11001100_hook("t", localStorage[a + "name"] || "", "assign"), i = cc11001100_hook("i", localStorage[a + "tme"] || 0, "assign"), n = cc11001100_hook("n", new Date().getTime(), "assign"), 15 < (i ? (n - i) / 864e5 : 0)) && (e = cc11001100_hook("e", "", "assign"), removeAwardSt()), e && 0 == e.indexOf("http") && (i = cc11001100_hook("i", (n = cc11001100_hook("n", localStorage[a + "tip"], "assign")) ? " onclick='alert(\"" + n + "\");return true;' " : "", "assign"), a = cc11001100_hook("a", $(".reportto").attr("href"), "assign"), (n = cc11001100_hook("n", $("#reportfooter a.reportto"), "assign"))[0] && t && (n[0].href += cc11001100_hook("n[0].href", "&q5=" + encodeURIComponent(t.replace("(", "").replace(")", "")), "assign"), a = cc11001100_hook("a", n[0].href, "assign")), n = cc11001100_hook("n", "<div id='awardReceiveDiv' style='margin:10px auto;width:90%;max-width:360px;padding-bottom:20px;'><div style='margin-bottom:30px;text-align:center;'>您的答卷已经成功提交，感谢参与！</div>您上次参与抽中了" + t + "，如已领取请忽略！<div style='text-align:center;width:200px;margin:15px auto 0;'><a href='" + e + "'" + i + " class='button white' target='_blank' style='color:#fff; background:#FF9600;border:none;'>立即领取</a></div><div style='width: 200px;margin: 18px auto;text-align:center;'><a href='javascript:' onclick='hideAward();' style='color:#666;font-size:14px;background:#efefef;' class='button'>不领取，再次参与问卷</a></div>", "assign"), a && (n += cc11001100_hook("n", "<div style='margin-top:18px;text-align:center;'><a href='" + a + "' target='_blank' style='color:#005eff;text-decoration:underline;'>投诉</a></div>", "assign"), addreportlog(t)), n += cc11001100_hook("n", "</div>", "assign"), $("#divContent").before(n), $("#divContent").hide()));
}
var t_isLoad = cc11001100_hook("t_isLoad", !0, "var-init");
function isImgLoad(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  e.each(function () {
    if (0 === this.height) return t_isLoad = cc11001100_hook("t_isLoad", !1, "assign");
  }), t_isLoad ? (clearTimeout(t_img), t()) : (t_isLoad = cc11001100_hook("t_isLoad", !0, "assign"), t_img = cc11001100_hook("t_img", setTimeout(function () {
    isImgLoad(e, t);
  }, 100), "assign"));
}
function postHeight() {
  if (window != window.top) try {
    var e,
      t = cc11001100_hook("t", parent.postMessage ? parent : parent.document.postMessage ? parent.document : null, "var-init");
    if (null != t) {
      if (window.hasBackground && !IsPar && $("#divBackgroundWrap").css({
        "background-size": cc11001100_hook("background-size", "100%", "object-key-init"),
        "background-repeat": cc11001100_hook("background-repeat", "repeat-y", "object-key-init")
      }), !(window.divTip && "" == divTip.style.display && 0 < $("#divTip img").length)) return e = cc11001100_hook("e", $("#pageDiv").outerHeight(), "assign"), $(".layui-layer").length && $(".layui-layer").outerHeight() > $("#pageDiv").outerHeight() && (e = cc11001100_hook("e", $(".layui-layer").outerHeight(), "assign")), t.postMessage("heightChanged," + e, "*");
      $("#divTip").css("position", "static"), isImgLoad($("#divTip img"), function () {
        return e = cc11001100_hook("e", $("#pageDiv").outerHeight(), "assign"), $(".layui-layer").length && $(".layui-layer").outerHeight() > $("#pageDiv").outerHeight() && (e = cc11001100_hook("e", $(".layui-layer").outerHeight(), "assign")), t.postMessage("heightChanged," + e, "*");
      });
    }
  } catch (e) {}
}
function saveMatrixFill(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i,
    a = cc11001100_hook("a", "true" == $(e).closest(".field").attr("daozhi"), "var-init"),
    n = cc11001100_hook("n", $(e).closest("tr")[0], "var-init"),
    r = cc11001100_hook("r", n.getAttribute("fid"), "var-init");
  (r = cc11001100_hook("r", a ? $(e).closest("td").attr("fid") : r, "assign")) && (i = cc11001100_hook("i", "", "assign"), t ? (t = cc11001100_hook("t", $(".rate-on", n), "assign"), (t = cc11001100_hook("t", a ? $(e).closest("table").find("td[fid='" + r + "']").find(".rate-on") : t, "assign")).each(function () {
    var e;
    i && (i += cc11001100_hook("i", ";", "assign")), i += cc11001100_hook("i", $(this).attr("dval"), "assign"), this.fillvalue && (e = cc11001100_hook("e", replace_specialChar(this.fillvalue).replace(/;/g, "；").replace(/,/g, "，"), "assign"), i += cc11001100_hook("i", spChars[2] + e, "assign"));
  })) : (i = cc11001100_hook("i", $(e).attr("dval"), "assign"), e.fillvalue && (n = cc11001100_hook("n", replace_specialChar(e.fillvalue).replace(/;/g, "；").replace(/,/g, "，"), "assign"), i += cc11001100_hook("i", spChars[2] + n, "assign"))), a = cc11001100_hook("a", document.getElementById(r), "assign")) && (a.value = cc11001100_hook("a.value", i, "assign"));
}
function saveLikert(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", $("a.rate-on", e), "var-init"),
    i = cc11001100_hook("i", "", "var-init");
  if (0 == t.length) for (var a = cc11001100_hook("a", $("input:hidden", e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) a[n].value = cc11001100_hook("a[n].value", "", "assign");else {
    var i = cc11001100_hook("i", $(t[t.length - 1]).attr("title"), "var-init"),
      r = cc11001100_hook("r", $(t[t.length - 1]).attr("val"), "var-init");
    "1" == $(e).attr("csetq") && $(t[t.length - 1]).attr("htitle") && (r = cc11001100_hook("r", $(t[t.length - 1]).attr("htitle"), "assign")), $("input:hidden", e)[0].value = cc11001100_hook("$(\"input:hidden\", e)[0].value", r, "assign");
  }
  referTitle(e, i);
}
function debounceHandler(t, i, a) {
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  var n = cc11001100_hook("n", null, "var-init");
  return function () {
    var e = cc11001100_hook("e", this, "var-init");
    n && clearTimeout(n), n = cc11001100_hook("n", a ? (n || t.apply(e), setTimeout(function () {
      n = cc11001100_hook("n", null, "assign");
    }, i)) : setTimeout(function () {
      t.apply(e);
    }, i), "assign");
  };
}
function initRate(x, y) {
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("y", y, "function-parameter");
  var i,
    a,
    b = cc11001100_hook("b", "true" == $(x).attr("daozhi"), "var-init"),
    C = cc11001100_hook("C", $(x).attr("ischeck"), "var-init"),
    e = cc11001100_hook("e", $(".rate-off", x).parent(), "var-init"),
    n = cc11001100_hook("n", (e.hasClass("aloneAnsItemDiv") && (e = cc11001100_hook("e", $(".rate-off", x), "assign")), $(".isTendencyQADiv", x)), "var-init");
  n.length && (i = cc11001100_hook("i", [], "assign"), $(".tendencytr", n).each(function (e) {
    var t = cc11001100_hook("t", $(this), "var-init"),
      t = cc11001100_hook("t", {
        fid: cc11001100_hook("fid", t.attr("fid"), "object-key-init"),
        tp: cc11001100_hook("tp", t.attr("tp"), "object-key-init"),
        id: cc11001100_hook("id", t.attr("id"), "object-key-init"),
        rowindex: cc11001100_hook("rowindex", t.attr("rowindex"), "object-key-init"),
        rowtitle: cc11001100_hook("rowtitle", t.attr("rowtitle"), "object-key-init"),
        dom: cc11001100_hook("dom", t, "object-key-init"),
        titledom: cc11001100_hook("titledom", t.prev(), "object-key-init")
      }, "var-init");
    0 == e && (t.Initial = cc11001100_hook("t.Initial", !0, "assign")), i.push(t);
  }), i.sort(function (e, t) {
    return Number(e.rowtitle) > Number(t.rowtitle) ? 1 : -1;
  }), a = cc11001100_hook("a", document.createDocumentFragment(), "assign"), a = cc11001100_hook("a", $(a), "assign"), i.forEach(function (e, t) {
    e.Initial && (n[0].rowsIndex = cc11001100_hook("n[0].rowsIndex", t + 1, "assign")), a.append(e.titledom).append(e.dom);
  }), n[0].tendencytrObjArr = cc11001100_hook("n[0].tendencytrObjArr", i, "assign"), $(".trlabel", x).last().after(a)), e.bind("click", function (e) {
    var r = cc11001100_hook("r", $("a", this)[0], "var-init"),
      t = cc11001100_hook("t", ($(this).hasClass("rate-off") && (r = cc11001100_hook("r", this, "assign")), !1), "var-init"),
      i = cc11001100_hook("i", (0 < $(this).find(".ishalf").length && (t = cc11001100_hook("t", !0, "assign")), !0), "var-init");
    if (C) CheckMax(r, y, b, C) && (n = cc11001100_hook("n", !0, "assign"), (n = cc11001100_hook("n", (p = cc11001100_hook("p", $(x).attr("maxvalue"), "assign")) && !$(r).hasClass("rate-on") && (a = cc11001100_hook("a", $("a.rate-on", this.parentNode), "assign"), b && (v = cc11001100_hook("v", $(this).attr("fid"), "assign"), a = cc11001100_hook("a", $(this).closest("table").find("td[fid='" + v + "']").find("a.rate-on"), "assign")), p - a.length <= 0) ? !1 : n, "assign")) ? ($(r).toggleClass("rate-on"), $(r).toggleClass("rate-onchk"), $(r).trigger("change")) : alertNew(getlang("check_duoxuan").replace("{0}", p)));else {
      var a = cc11001100_hook("a", $(r).hasClass("rate-on"), "var-init"),
        n = cc11001100_hook("n", 0 < $("div.field-label", x).find("a.clearchoice").length, "var-init");
      if (t && !$("#divMatrixHeader").is(":visible") && !isLoadingAnswer) return void (e.pageX && showMatrixHeader(r, x));
      if (!(a && n && 6 != $(x).attr("type") || CheckMax(r, y, b))) return void (i = cc11001100_hook("i", !1, "assign"));
      var o,
        s,
        l,
        d,
        c,
        p = cc11001100_hook("p", $(this.parentNode).find("a.rate-off"), "var-init"),
        u = cc11001100_hook("u", (b && (v = cc11001100_hook("v", $(this).attr("fid"), "assign"), p = cc11001100_hook("p", $(this).closest("table").find("td[fid='" + v + "']").find("a.rate-off"), "assign")), "1" == $(x).attr("req")), "var-init");
      function w() {
        $("table", l[0]).addClass("disabled"), alertmsg(getlang("finish"), 1e3, l[0]);
      }
      p.removeClass("rate-on"), p.removeClass("rate-ontxt"), (g = cc11001100_hook("g", $(r).attr("mode"), "assign")) ? (p.removeClass("rate-on" + g), o = cc11001100_hook("o", r, "assign"), 0 < $(o).find(".ishalf").length && ($(o).parent().parent().find(".ishalf").hide(), $(o).is(":visible") || $(o).parent().next().find(".ishalf").show()), p.each(function () {
        if ($(this).toggleClass("rate-on"), $(this).toggleClass("rate-on" + g), this == o) return !1;
      })) : (!u || n && a) && (u || a) || ($(r).toggleClass("rate-on"), $(r).text() && $(r).toggleClass("rate-ontxt")), window.count360Val && count360Val(), $(r).trigger("change"), $(r).closest("table").parent().hasClass("aloneAnswer") && !$(r).attr("needfill") && 0 == $(r).find(".ishalf").length && (s = cc11001100_hook("s", $(r).closest("table").parent().hasClass("isTendencyQADiv"), "assign"), l = cc11001100_hook("l", $(".isTendencyQADiv", x), "assign"), d = cc11001100_hook("d", $(r).closest(".tendencytr").attr("rowtitle"), "assign"), t = cc11001100_hook("t", l[0] && l[0].climate, "assign"), p = cc11001100_hook("p", l[0] && l[0].tendencytrObjArr, "assign"), n = cc11001100_hook("n", $(r).attr("iv"), "assign"), s && (t ? t != n && (1 == n ? (c = cc11001100_hook("c", 2, "assign"), p.forEach(function (e) {
        Number(e.rowtitle) > Number(d) && saveMatrixFill($("[iv=1]", e.dom).toggleClass("rate-on"));
      })) : 5 == n && (c = cc11001100_hook("c", 1, "assign"), p.forEach(function (e) {
        Number(e.rowtitle) < Number(d) && saveMatrixFill($("[iv=5]", e.dom).toggleClass("rate-on"));
      }))) : 1 == (l[0].climate = cc11001100_hook("l[0].climate", n, "assign")) ? p.forEach(function (e) {
        Number(e.rowtitle) > Number(d) && saveMatrixFill($("[iv=1]", e.dom).toggleClass("rate-on"));
      }) : 5 == n && p.forEach(function (e) {
        Number(e.rowtitle) < Number(d) && saveMatrixFill($("[iv=5]", e.dom).toggleClass("rate-on"));
      })), window.isLoadingAnswer ? s ? c ? w() : 1 == $(r).attr("iv") ? $(r).closest("table").next(".apageWrap").children(".apageprev").hasClass("disabled") ? w() : (--l[0].rowsIndex, l[0].showrow()) : 5 == $(r).attr("iv") && ($(r).closest("table").next(".apageWrap").children(".apagenext").hasClass("disabled") ? w() : (l[0].rowsIndex += cc11001100_hook("l[0].rowsIndex", 1, "assign"), l[0].showrow(!0))) : $(r).closest(".aloneAnswer").hasClass("autonext") && $(r).closest("table").next(".apageWrap").children(".apagenext").click() : window.hasclickalonenext || (window.hasclickalonenext = cc11001100_hook("window.hasclickalonenext", !0, "assign"), setTimeout(function () {
        window.hasclickalonenext = cc11001100_hook("window.hasclickalonenext", !1, "assign"), s ? c ? w() : 1 == $(r).attr("iv") ? $(r).closest("table").next(".apageWrap").children(".apageprev").hasClass("disabled") ? w() : (--l[0].rowsIndex, l[0].showrow()) : 5 == $(r).attr("iv") && ($(r).closest("table").next(".apageWrap").children(".apagenext").hasClass("disabled") ? w() : (l[0].rowsIndex += cc11001100_hook("l[0].rowsIndex", 1, "assign"), l[0].showrow(!0))) : $(r).closest(".aloneAnswer").hasClass("autonext") && $(r).closest("table").next(".apageWrap").children(".apagenext").click();
      }, 100)));
    }
    var h,
      f,
      g,
      m,
      v,
      a = cc11001100_hook("a", $(this).closest("tr"), "var-init"),
      p = cc11001100_hook("p", ($(this).closest("table").find(".huchi").length && $(r).hasClass("rate-on") && (h = cc11001100_hook("h", function (e) {
        var t = cc11001100_hook("t", $(r).closest("td").is(".huchi") && e != r, "var-init"),
          i = cc11001100_hook("i", !$(r).closest("td").is(".huchi") && $(e).closest("td").is(".huchi"), "var-init"),
          a = cc11001100_hook("a", $(r).is(".huchi") && e != r, "var-init"),
          n = cc11001100_hook("n", !$(r).is(".huchi") && $(e).is(".huchi"), "var-init");
        (t || i || a || n) && ($(e).toggleClass("rate-on"), $(e).toggleClass("rate-onchk"), $(e).trigger("change"));
      }, "assign"), b ? (f = cc11001100_hook("f", $(r).closest("td").index(), "assign"), x.find("tr[rowindex]").each(function (e, t) {
        t = cc11001100_hook("t", $(t).find("td").eq(f).find("a.rate-on"), "assign");
        h(t[0]);
      })) : a.find("a.rate-on").each(function (e, t) {
        h(t);
      })), $(r).hasClass("rate-on") ? (g = cc11001100_hook("g", $(r).attr("mode"), "assign"), t = cc11001100_hook("t", $(r).attr("needfill"), "assign"), n = cc11001100_hook("n", $(r).attr("halfbar"), "assign"), !t || isLoadingAnswer || n || (showMatrixFill(r), e.stopPropagation()), !t && curMatrixError && curMatrixError != r && (curMatrixError = cc11001100_hook("curMatrixError", null, "assign")), e.pageX && showMatrixHeader(r, x)) : curMatrixError && curMatrixError == r && (curMatrixError = cc11001100_hook("curMatrixError", null, "assign")), showEvaluate(r, x), !1), "var-init");
    !(p = cc11001100_hook("p", y && (a = cc11001100_hook("a", $(r).attr("dval"), "assign"), "tbody" == (n = cc11001100_hook("n", $(r).closest("tbody"), "assign"))[0].tagName.toLocaleLowerCase()) && (m = cc11001100_hook("m", n.find("tr.trlabel").eq(0).find("th"), "assign")).eq(a - 1) && ((t = cc11001100_hook("t", m.eq(a - 1).attr("itemmax"), "assign")) && window.cepingCandidate && "-1" != t.indexOf("%") && (n = cc11001100_hook("n", parseInt(t.replace("%", "")), "assign"), a = cc11001100_hook("a", cepingCandidate.split("&nbsp;&nbsp;&nbsp;"), "assign"), t = cc11001100_hook("t", Math.ceil(a.length * n / 100), "assign")), t) && 0 < t ? !0 : p, "assign")) && "1" == x.attr("req") || C || addClearHref(x), $("span.error", x).is(":visible") && validateQ(x), y ? (saveMatrixFill(r, C), C || u || $(r).hasClass("rate-on") || (v = cc11001100_hook("v", (m = cc11001100_hook("m", $(r).closest("tr")[0], "assign")).getAttribute("fid"), "assign"), (v = cc11001100_hook("v", b ? $(r).closest("td").attr("fid") : v, "assign")) && $("#" + v)[0] && ($("#" + v)[0].value = cc11001100_hook("$(\"#\" + v)[0].value", "", "assign")))) : saveLikert(x, this), "6" != x.attr("type") && "5" != x.attr("type") || displayRelationByType(x), jump(x, r), i && saveAnswer(x), ("6" == x.attr("type") && !C && 0 == popUpindex || "5" == x.attr("type") && 0 == itempopUpindex) && processSamecount(x, this), e.preventDefault();
  });
}
var itempopUpindex = cc11001100_hook("itempopUpindex", 0, "var-init"),
  popUpindex = cc11001100_hook("popUpindex", 0, "var-init");
function processSamecount(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  if (window.IsSampleService) {
    t = cc11001100_hook("t", $("a.rate-off", t), "assign");
    if ("6" == e.attr("type")) {
      for (var i = cc11001100_hook("i", t.eq(0).attr("dval"), "var-init"), a = cc11001100_hook("a", $("a.rate-off", e), "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < a.length; r++) if (a.eq(r).attr("dval") == i && a.eq(r).hasClass("rate-on") && n++, 4 < n) {
        popUpindex++, alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
        break;
      }
    } else if ("5" == e.attr("type")) for (i = cc11001100_hook("i", t.eq(0).attr("val"), "assign"), n = cc11001100_hook("n", 0, "assign"), r = cc11001100_hook("r", parseInt(e.attr("id").replace("div", "")) - 1, "assign"); 1 <= r; r--) {
      var o = cc11001100_hook("o", $("#div" + r), "var-init");
      if ("5" != o.attr("type")) break;
      if ((a = cc11001100_hook("a", $("a.rate-off", o), "assign")).eq(i - 1).attr("val") == i && a.eq(i - 1).hasClass("rate-on") && n++, 3 < n) {
        itempopUpindex++, alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
        break;
      }
    }
  }
}
var totalMoney = cc11001100_hook("totalMoney", 0, "var-init");
function updateCart(e) {
  cc11001100_hook("e", e, "function-parameter");
  var n,
    r,
    t = cc11001100_hook("t", $("#divQuestion"), "var-init"),
    o = cc11001100_hook("o", "", "var-init"),
    s = cc11001100_hook("s", totalMoney = cc11001100_hook("totalMoney", 0, "assign"), "var-init"),
    i = cc11001100_hook("i", null, "var-init");
  if (0 < shopArray.length) {
    for (var a, l = cc11001100_hook("l", "", "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < shopArray.length; d++) "none" != shopArray[d].style.display && (l && (l += cc11001100_hook("l", ",", "assign")), l += cc11001100_hook("l", "#" + $(shopArray[d]).attr("id"), "assign"));
    l && (a = cc11001100_hook("a", $(l), "assign"), i = cc11001100_hook("i", $(".shop-item", a), "assign"));
  } else i = cc11001100_hook("i", $(".shop-item", t), "assign");
  i ? (i.each(function (e, t) {
    var i = cc11001100_hook("i", $(".itemnum", this), "var-init"),
      i = cc11001100_hook("i", parseInt(i[0].value), "var-init");
    if (0 == i) return !0;
    var a = cc11001100_hook("a", $(".item_name", this).html(), "var-init"),
      n = cc11001100_hook("n", $(".item_price", this).attr("price"), "var-init"),
      n = cc11001100_hook("n", i * parseFloat(n), "var-init"),
      a = cc11001100_hook("a", '<li class="productitem"><span class="fpname">' + a + '</span><span class="fpnum">x' + i + '</span><span class="fpprice">￥' + toFixed0d(n) + "</span></li>", "var-init");
    o += cc11001100_hook("o", a, "assign"), totalMoney += cc11001100_hook("totalMoney", n, "assign"), s += cc11001100_hook("s", i, "assign");
  }), n = cc11001100_hook("n", 0, "assign"), a = cc11001100_hook("a", $(e).find(".shop-item"), "assign"), r = cc11001100_hook("r", a.length, "assign"), a.each(function (e, t) {
    var i = cc11001100_hook("i", $(".itemnum", this), "var-init"),
      i = cc11001100_hook("i", parseInt(i[0].value), "var-init"),
      a = cc11001100_hook("a", ($(".item_name", this).html(), $(".item_price", this).attr("price")), "var-init"),
      i = cc11001100_hook("i", i * parseFloat(a), "var-init");
    $(".item_price", this).html("￥" + toFixed0d(i)), $(".item_price", this).attr("hasgs") && $(".item_price", this).trigger("blur"), n += cc11001100_hook("n", i, "assign"), r == e + 1 && (a = cc11001100_hook("a", $(this).nextAll(".li_price").find(".theTotalPrice"), "assign"), i = cc11001100_hook("i", toFixed0d(n), "assign"), a.html("￥" + i), a.attr("hasgs")) && a.trigger("blur");
  }), o = cc11001100_hook("o", "<ul class='productslist'><li><span class='fpname' style='font-weight:bold; font-size:14px; padding-bottom:16px;'>" + getlang("settlelist") + "</span></li>" + o + '<li class="productitem"><span class="fpname"></span><span class="fpnum" style="color:#333">x' + s + '</span><span class="fpprice" style="color:#de6752;font-size:17px">￥' + toFixed0d(totalMoney) + "</span></li></ul>", "assign"), $("#shopcart").html(o), 0 < totalMoney ? $("#shopcart").show() : $("#shopcart").hide(), fixBottom(), saveAnswer(e)) : $("#shopcart").hide();
}
function toFixed0d(e) {
  cc11001100_hook("e", e, "function-parameter");
  return e.toFixed(2).replace(".00", "");
}
function fixBottom() {
  var t = cc11001100_hook("t", "fixedbottom", "var-init"),
    i = cc11001100_hook("i", !window.IsPar && self != top, "var-init"),
    a = cc11001100_hook("a", (i && $("#spanPower a").attr("href", "javascript:;").removeAttr("target"), i || ($("#spanPower").unbind("click"), $("#spanPower").click(function () {
      window.ytyyframe || (window.location.href = cc11001100_hook("window.location.href", "https://www.wjx.cn/", "assign"));
    })), $("#reportfooter")), "var-init");
  window.isSingleVote && window.touPiaoItemIndex ? a.addClass(t) : (window.isMobile || window.isChuangGuan || window.IsOneQuestionPerPage) && (postHeight(), setTimeout(function () {
    var e = cc11001100_hook("e", a.height(), "var-init");
    a.hasClass(t) || (e = cc11001100_hook("e", 0, "assign")), document.getElementById("pageDiv").scrollHeight + e + 20 < document.documentElement.clientHeight && !i ? a.addClass(t) : a.removeClass(t);
  }, 20));
}
var firstError = cc11001100_hook("firstError", null, "var-init"),
  firstMatrixError = cc11001100_hook("firstMatrixError", null, "var-init"),
  needSubmitNotValid = cc11001100_hook("needSubmitNotValid", !1, "var-init"),
  lastFixedObj = cc11001100_hook("lastFixedObj", null, "var-init"),
  isValidating = cc11001100_hook("isValidating", !1, "var-init");
function validate(a) {
  cc11001100_hook("a", a, "function-parameter");
  var n,
    r,
    o,
    e,
    t,
    i,
    s,
    l,
    d = cc11001100_hook("d", !0, "var-init");
  if (isValidating = cc11001100_hook("isValidating", !(curMatrixError = cc11001100_hook("curMatrixError", firstMatrixError = cc11001100_hook("firstMatrixError", firstError = cc11001100_hook("firstError", null, "assign"), "assign"), "assign")), "assign"), -1 == validateProStr.indexOf("->0") && (validateProStr += cc11001100_hook("validateProStr", "->0", "assign")), $(".field:visible").each(function () {
    var e;
    return 1 == $(this).attr("csetq") || !!pageHolder[cur_page].hasExceedTime || (e = cc11001100_hook("e", $(this), "assign"), -1 == validateProStr.indexOf("->1") && (validateProStr += cc11001100_hook("validateProStr", "->1", "assign")), void (validateQ(e) || (d = cc11001100_hook("d", !1, "assign"))));
  }), d ? ($(a).removeClass("btn_fixedstyle"), $(window).unbind("scroll"), lastFixedObj = cc11001100_hook("lastFixedObj", null, "assign")) : firstError && (i = cc11001100_hook("i", $(firstError).offset().top, "assign"), t = cc11001100_hook("t", "1" == $(firstError).attr("maxdiff"), "assign"), e = cc11001100_hook("e", "1" == $(firstError).attr("conjoint"), "assign"), !firstError.errorControl || t || e || (i = cc11001100_hook("i", $(getErrorControl(firstError.errorControl)).offset().top, "assign"), t = cc11001100_hook("t", $(firstError).attr("type"), "assign"), 50 < i && ("6" == t || "9" == t || "10" == t || "12" == t) && (i -= cc11001100_hook("i", 50, "assign"))), $("html, body").animate({
    scrollTop: cc11001100_hook("scrollTop", i, "object-key-init")
  }, 600), n = cc11001100_hook("n", function () {
    var e, t, i;
    window.islandscape || (e = cc11001100_hook("e", $(this).scrollTop(), "assign"), t = cc11001100_hook("t", $(document).height(), "assign"), i = cc11001100_hook("i", $(this).height(), "assign"), t - 100 < parseInt(e) + parseInt(i)) ? $(a).removeClass("btn_fixedstyle") : "spanPreview" != $(a).attr("id") && $(a).addClass("btn_fixedstyle");
  }, "assign"), r = cc11001100_hook("r", 300, "assign"), e = cc11001100_hook("e", function (e) {
    var t = cc11001100_hook("t", this, "var-init"),
      i = cc11001100_hook("i", arguments, "var-init");
    clearTimeout(o), o = cc11001100_hook("o", setTimeout(function () {
      n.apply(t, i);
    }, r), "assign");
  }, "assign"), $("#pageDiv").height() > $(window).height() + 100 && ($(window).on("scroll", e), "spanPreview" != $(a).attr("id")) && (lastFixedObj = cc11001100_hook("lastFixedObj", a, "assign")), window != window.top) && ($(firstError)[0].scrollIntoView(), 8 < (t = cc11001100_hook("t", $(firstError).text().replace("*", ""), "assign")).length && (t = cc11001100_hook("t", t.substring(0, 8) + "...", "assign")), i = cc11001100_hook("i", getlang("validate_answer_error").replace("{0}", t), "assign"), $("#ValError").html(i)), window.isJieLong && d) if (isQywx && !window.isdingtalkFreeUser) {
    if (window.joinIdnew) return d;
    $('#ulUserJoin li[did="' + wxUserId + '"]').size() <= 0 && (alertNew("您不在接龙预设名单内"), d = cc11001100_hook("d", !1, "assign"));
  } else 0 < $("#pJoinCountArea").attr("ncount") && (e = cc11001100_hook("e", "", "assign"), xingmingIdx && (e = cc11001100_hook("e", $.trim($("input", xingmingIdx)[0].value), "assign")), xuehaoIdx && (t = cc11001100_hook("t", $.trim($("input", xuehaoIdx)[0].value), "assign")) && (e && 0 < e.length ? e += cc11001100_hook("e", "┋" + t, "assign") : e = cc11001100_hook("e", t, "assign")), window.fenzuIdx && (i = cc11001100_hook("i", $.trim($("input", fenzuIdx)[0].value), "assign")) && (e = cc11001100_hook("e", i + "┋" + e, "assign")), _jlNeedLogin ? ((t = cc11001100_hook("t", $("#divJielongAuthArea").attr("did"), "assign")) || window._jlAuthUser && (i = cc11001100_hook("i", window._jlAuthUser.split("┋"), "assign"), window.fenzuIdx ? (l = cc11001100_hook("l", i[0], "assign"), 0 < (s = cc11001100_hook("s", i[1], "assign")).length && 0 < l.length && (t = cc11001100_hook("t", l + "┋" + s, "assign"), 3 == i.length) && "" != i[2] && (t = cc11001100_hook("t", t + "┋" + i[2], "assign"))) : 2 == i.length && (s = cc11001100_hook("s", i[0], "assign"), l = cc11001100_hook("l", i[1], "assign"), 0 < s.length && 0 < l.length ? t = cc11001100_hook("t", s + "┋" + l, "assign") : 0 < s.length ? t = cc11001100_hook("t", s, "assign") : 0 < l.length && (t = cc11001100_hook("t", l, "assign")))), t != e && (alertNew("您填写的人员与授权的人员不一致"), d = cc11001100_hook("d", !1, "assign"))) : $('#ulUserJoin li[did="' + e + '"]').size() <= 0 && (alertNew("您填写的人员不在接龙预设名单内"), d = cc11001100_hook("d", !1, "assign")));
  return isValidating = cc11001100_hook("isValidating", !1, "assign"), d;
}
var txtCurCity = cc11001100_hook("txtCurCity", null, "var-init"),
  prevScrollTop = cc11001100_hook("prevScrollTop", 0, "var-init"),
  obj_offectTop = cc11001100_hook("obj_offectTop", 0, "var-init"),
  MIN_CLICK_DELAY_TIME = cc11001100_hook("MIN_CLICK_DELAY_TIME", 500, "var-init"),
  lastClickTime = cc11001100_hook("lastClickTime", 0, "var-init"),
  cityBoxIndex = cc11001100_hook("cityBoxIndex", 0, "var-init");
function openCityBox(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  var n = cc11001100_hook("n", new Date().getTime(), "var-init");
  if (!(MIN_CLICK_DELAY_TIME < n - lastClickTime)) return !1;
  lastClickTime = cc11001100_hook("lastClickTime", n, "assign"), txtCurCity = cc11001100_hook("txtCurCity", e, "assign");
  var r,
    o,
    s,
    l = cc11001100_hook("l", "", "var-init"),
    n = cc11001100_hook("n", (obj_offectTop = cc11001100_hook("obj_offectTop", $(e).closest(".field").offset().top, "assign"), 400), "var-init"),
    d = cc11001100_hook("d", 500, "var-init");
  isMobile && (n = cc11001100_hook("n", $(window).width() - 40, "assign"), d = cc11001100_hook("d", $(window).height() - 100, "assign"), self == top || IsPar || (n = cc11001100_hook("n", 320, "assign"), d = cc11001100_hook("d", 510, "assign"))), -1 < location.search.indexOf("iswebinner") && $("body").css({
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init")
  }), 3 == t ? (r = cc11001100_hook("r", "", "assign"), (s = cc11001100_hook("s", e.getAttribute("province"), "assign")) && (r = cc11001100_hook("r", "&pv=" + encodeURIComponent(s), "assign")), s && (r = cc11001100_hook("r", -1 < s.indexOf("┊") ? "&isnew=1&pv=" + encodeURIComponent(s.split("┊")[0]) : "&pv=" + encodeURIComponent(s), "assign")), l = cc11001100_hook("l", "/joinnew/setcitycountymobonew.aspx?activityid=" + activityId + "&ct=" + t + r + "&pos=" + a, "assign"), d = cc11001100_hook("d", 320, "assign"), $.ajax({
    url: cc11001100_hook("url", CDNDomain + "/joinnew/js/pcasunzipmobonew.js?v=" + JsVersion, "object-key-init"),
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init"),
    success: function () {
      countyInit(l);
    }
  })) : 4 == t ? (o = cc11001100_hook("o", r = cc11001100_hook("r", "", "assign"), "assign"), (s = cc11001100_hook("s", e.getAttribute("province"), "assign")) && (r = cc11001100_hook("r", "&pv=" + encodeURIComponent(s), "assign")), e.value && (o = cc11001100_hook("o", "&sh=" + encodeURIComponent(e.value), "assign")), l = cc11001100_hook("l", "/joinnew/schoolnew2.aspx?activityid=" + activityId + "&ct=" + t + r + "&pos=" + a + o, "assign"), $.ajax({
    url: cc11001100_hook("url", CDNDomain + "/joinnew/js/schoolnew.js?v=" + JsVersion, "object-key-init"),
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init"),
    success: function () {
      schoolInit(l);
    }
  })) : 5 == t || 7 == t || 10 == t ? (l = cc11001100_hook("l", "/joinnew/setmenuselnew.aspx?activityid=" + activityId + "&ct=" + t + "&pos=" + a, "assign"), $(e).attr("cid") && (l += cc11001100_hook("l", "&cid=" + $(e).attr("cid"), "assign")), window.autoLangv && (l += cc11001100_hook("l", "&langv=" + autoLangv, "assign")), $.ajax({
    url: cc11001100_hook("url", CDNDomain + "/joinnew/js/setmenuselnew.js?v=" + JsVersion, "object-key-init"),
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init"),
    success: function () {
      menuselInit(l, t);
    }
  })) : -777 != t && (6 == t ? (l = cc11001100_hook("l", "/wjx/join/amap.aspx?activityid=" + activityId + "&ct=" + t + "&pos=" + a, "assign"), window.needLocSearch && (l += cc11001100_hook("l", "&search=1", "assign")), window.useGoogleMap && (l = cc11001100_hook("l", l.replace("/amap.aspx", "/amapgoogle.aspx"), "assign")), "1" == $(e).attr("needonly") && (l += cc11001100_hook("l", "&nc=1", "assign"), e.value) || (window.ytyyframe ? (d = cc11001100_hook("d", 280, "assign"), l += cc11001100_hook("l", "&ytyyframe=1", "assign")) : d = cc11001100_hook("d", window.ishydj ? (n = cc11001100_hook("n", 650, "assign"), 380) : isMobile ? 380 : (n = cc11001100_hook("n", 800, "assign"), 530), "assign"), PDF_launch(l, n, d, function () {
    autoBody();
  }, "", {
    scrollbar: cc11001100_hook("scrollbar", !1, "object-key-init")
  }))) : 8 == t ? (l = cc11001100_hook("l", "/joinnew/setcountrymobonew.aspx?activityid=" + activityId + "&ct=" + t + "&pos=" + a, "assign"), $.ajax({
    url: cc11001100_hook("url", CDNDomain + "/joinnew/js/countrymobonew.js?v=" + JsVersion, "object-key-init"),
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init"),
    success: function (e) {
      regionInit(l);
    }
  })) : 9 == t ? (s = cc11001100_hook("s", $(e).attr("haschoose") || "", "assign"), l = cc11001100_hook("l", "/joinnew/setlocationselector.aspx?activityid=" + activityId + "&ct=" + t + "&pos=" + a + "&haschoose=" + s, "assign"), cityBoxIndex = cc11001100_hook("cityBoxIndex", PDF_launch(l, n, d, function () {
    autoBody();
  }, "", {
    scrollbar: cc11001100_hook("scrollbar", !1, "object-key-init")
  }), "assign")) : (l = cc11001100_hook("l", "/joinnew/setcitymobonew.aspx?activityid=" + activityId + "&ct=" + t + "&pos=" + a, "assign"), $.ajax({
    url: cc11001100_hook("url", CDNDomain + "/joinnew/js/areamobonew.js?v=" + JsVersion, "object-key-init"),
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init"),
    success: function () {
      cityInit(l);
    }
  })));
}
function autoBody() {
  postHeight(), -1 < location.search.indexOf("iswebinner") && $("body").css({
    overflow: cc11001100_hook("overflow", "auto", "object-key-init")
  });
}
function openlink(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  e = cc11001100_hook("e", e.getAttribute("data-url") || e.getAttribute("href"), "assign"), 0 == e.indexOf("http") && (PDF_close(), openDialogByIframe(320, 400, e, !0)), e = cc11001100_hook("e", window.event || t, "assign");
  return e && e.stopPropagation && e.stopPropagation(), !1;
}
function showItemDesc(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  var n,
    r = cc11001100_hook("r", document.getElementById(i), "var-init"),
    o = cc11001100_hook("o", $.trim(r.innerHTML), "var-init");
  0 == o.indexOf("http") ? openDialogByIframe(e, t, o, !0) : (e = cc11001100_hook("e", 500, "assign"), isMobile && (e = cc11001100_hook("e", $(window).width() - 40, "assign")), r.style.display = cc11001100_hook("r.style.display", "", "assign"), r.style.width = cc11001100_hook("r.style.width", e + "px", "assign"), r.style.padding = cc11001100_hook("r.style.padding", "0 20px 20px", "assign"), (o = cc11001100_hook("o", r.getElementsByTagName("iframe")[0], "assign")) && (n = cc11001100_hook("n", o.getAttribute("xsrc"), "assign")) && o.setAttribute("src", n), $("body").append($(r)), o = cc11001100_hook("o", r.offsetHeight + 20, "assign"), r.style.display = cc11001100_hook("r.style.display", "none", "assign"), t = cc11001100_hook("t", (n = cc11001100_hook("n", $(window).height() - 100, "assign")) < o ? n : o, "assign"), r.style.width = cc11001100_hook("r.style.width", "auto", "assign"), openDialogByIframe(e, t, i));
}
function setCityBox(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  txtCurCity.value = cc11001100_hook("txtCurCity.value", e, "assign"), $(txtCurCity).next().hasClass("textEdit") && "1" == $(txtCurCity).attr("hasgs") && window.selectTrueOption && selectTrueOption.call({
    val: cc11001100_hook("val", e, "object-key-init"),
    id: cc11001100_hook("id", $(txtCurCity).attr("id"), "object-key-init"),
    type: cc11001100_hook("type", "radio", "object-key-init")
  }), $(txtCurCity).next().hasClass("textEdit") && e && $(txtCurCity).next().removeClass("initStyle").children(".textCont").css({
    display: cc11001100_hook("display", "inline", "object-key-init"),
    width: cc11001100_hook("width", "auto", "object-key-init")
  }).html(e), txtCurCity.relValue = cc11001100_hook("txtCurCity.relValue", i, "assign"), a && (txtCurCity.originResult = cc11001100_hook("txtCurCity.originResult", a, "assign")), t && e && $(txtCurCity).parent().hasClass("getLocalBtn") && $(txtCurCity).parent().prev().text(e).show(), PDF_close();
  i = cc11001100_hook("i", $(txtCurCity).closest(".field"), "assign");
  saveAnswer(i), "1" != i.attr("req") && addClearHref(i), $(txtCurCity).trigger("blur"), $(txtCurCity).attr("haschoose", "1"), window.isinterview && ("9" !== (a = cc11001100_hook("a", $(i).attr("type"), "assign")) && showMyAnswer(i), window.isInterview2 && "9" !== a && showInterviewtip(i), $(".interview_input").find(".iv_input").show(), $(".interview_input").find(".iv_chioseFile").hide()), window.GsGetLocaltion && window.GsGetLocaltion(txtCurCity);
}
var startAge = cc11001100_hook("startAge", 0, "var-init"),
  endAge = cc11001100_hook("endAge", 0, "var-init"),
  rName = cc11001100_hook("rName", "", "var-init"),
  gender = cc11001100_hook("gender", 0, "var-init"),
  marriage = cc11001100_hook("marriage", 0, "var-init"),
  education = cc11001100_hook("education", "", "var-init"),
  familiy = cc11001100_hook("familiy", "", "var-init"),
  startIncome = cc11001100_hook("startIncome", 0, "var-init"),
  endIncome = cc11001100_hook("endIncome", 0, "var-init"),
  IsWIFI = cc11001100_hook("IsWIFI", 0, "var-init"),
  modata = cc11001100_hook("modata", "", "var-init"),
  hasMatchName = cc11001100_hook("hasMatchName", !1, "var-init"),
  verifyName = cc11001100_hook("verifyName", "", "var-init"),
  emaildata = cc11001100_hook("emaildata", "", "var-init"),
  jpMatchId = cc11001100_hook("jpMatchId", 0, "var-init"),
  needImport = cc11001100_hook("needImport", 0, "var-init"),
  quesMatchId = cc11001100_hook("quesMatchId", 0, "var-init"),
  jpWayText = cc11001100_hook("jpWayText", 0, "var-init");
function getRname(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  if (!(rName && hasMatchName && verifyName)) {
    if (!verifyName) {
      var a = cc11001100_hook("a", $(t).find("textarea[verify='姓名'],input[verify='姓名']"), "var-init");
      if (rName && hasMatchName && !a[0]) return;
      if (a[0] && a[0].value) return rName = cc11001100_hook("rName", verifyName = cc11001100_hook("verifyName", a[0].value, "assign"), "assign"), void (hasMatchName = cc11001100_hook("hasMatchName", !0, "assign"));
    }
    if (!$(t).attr("ceshi")) if ("9" == e) {
      var n = cc11001100_hook("n", t[0].getElementsByTagName("td"), "var-init");
      if (0 < n.length) {
        for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) if (-1 < n[r].innerHTML.indexOf("姓名") || -1 < n[r].innerHTML.indexOf("名前") || -1 < n[r].innerHTML.indexOf("名字") || -1 < n[r].innerHTML.indexOf("姓") && -1 < n[r].innerHTML.indexOf("名")) {
          var o = cc11001100_hook("o", n[r].parentNode.id, "var-init"),
            s = cc11001100_hook("s", null, "var-init");
          (s = cc11001100_hook("s", ("t" == o.charAt(o.length - 1) ? $(n[r].parentNode).next() : $(n[r].parentNode)).find("input,textarea"), "assign"))[0] && s[0].value && (rName = cc11001100_hook("rName", s[0].value, "assign"), hasMatchName = cc11001100_hook("hasMatchName", !0, "assign"));
          break;
        }
      } else {
        var l = cc11001100_hook("l", t[0].innerHTML.indexOf("姓名"), "var-init"),
          a = cc11001100_hook("a", t[0].innerHTML.indexOf("姓"), "var-init"),
          d = cc11001100_hook("d", t[0].innerHTML.indexOf("名"), "var-init");
        if (-1 < l || -1 < t[0].innerHTML.indexOf("名前") || -1 < a && -1 < d) {
          -1 == l && (l = cc11001100_hook("l", d, "assign"));
          for (var c = cc11001100_hook("c", $(t).find("input,textarea"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < c.length; r++) {
            var p = cc11001100_hook("p", c[r].id, "var-init");
            if (l < t[0].innerHTML.indexOf(p) && c[r].value) {
              rName = cc11001100_hook("rName", c[r].value, "assign"), hasMatchName = cc11001100_hook("hasMatchName", !0, "assign");
              break;
            }
          }
        }
      }
    } else {
      a = cc11001100_hook("a", null, "assign");
      "1" == e ? a = cc11001100_hook("a", $("input", t), "assign") : "2" == e && (a = cc11001100_hook("a", $("textarea", t), "assign")), a && a[0] && ((-1 < i.indexOf("姓名") || -1 < i.indexOf("名字") || -1 < i.indexOf("名前")) && (hasMatchName = cc11001100_hook("hasMatchName", !0, "assign")), "姓名" != a.attr("verify") && !hasMatchName || (rName = cc11001100_hook("rName", "1" == e && a[0].value || "2" == e && i.length <= 5 && a[0].value ? a[0].value : rName, "assign")) || (hasMatchName = cc11001100_hook("hasMatchName", !1, "assign")));
    }
  }
}
var birthday = cc11001100_hook("birthday", "", "var-init");
function getBirthday(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  "1" != e || -1 == i.indexOf("出生") && -1 == i.indexOf("生日") || (e = cc11001100_hook("e", $("input", t), "assign")) && e[0] && "datebox" == e.attr("data-role") && Date.parse(e[0].value) && (birthday = cc11001100_hook("birthday", e[0].value, "assign"));
}
function getRefUsername(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i, a;
  null == refUsername || $(t).attr("ceshi") || ("9" == e ? (i = cc11001100_hook("i", refUsername - 1e4 * $(t).attr("topic") - 1, "assign"), (a = cc11001100_hook("a", $(t).find("input,textarea"), "assign"))[i] && (refUsernameVal = cc11001100_hook("refUsernameVal", a[i].value, "assign"))) : (a = cc11001100_hook("a", null, "assign"), "1" == e ? a = cc11001100_hook("a", $("input", t), "assign") : "2" == e && (a = cc11001100_hook("a", $("textarea", t), "assign")), a && a[0] && ("1" != e && "2" != e || (refUsernameVal = cc11001100_hook("refUsernameVal", a[0].value, "assign")))));
}
function getRefUserId(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i, a;
  null == refUserId || $(t).attr("ceshi") || ("9" == e ? (i = cc11001100_hook("i", refUserId - 1e4 * $(t).attr("topic") - 1, "assign"), (a = cc11001100_hook("a", $(t).find("input,textarea"), "assign"))[i] && (refUserIdVal = cc11001100_hook("refUserIdVal", a[i].value, "assign"))) : (a = cc11001100_hook("a", null, "assign"), "1" == e ? a = cc11001100_hook("a", $("input", t), "assign") : "2" == e && (a = cc11001100_hook("a", $("textarea", t), "assign")), a && a[0] && ("1" != e && "2" != e || (refUserIdVal = cc11001100_hook("refUserIdVal", a[0].value, "assign")))));
}
function getRefDepartment(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i;
  if (null != refDepartment && !$(t).attr("ceshi")) if ("9" == e) r = cc11001100_hook("r", refDepartment - 1e4 * $(t).attr("topic") - 1, "assign"), (i = cc11001100_hook("i", $(t).find("input,textarea"), "assign"))[r] && (refDepartmentVal = cc11001100_hook("refDepartmentVal", i[r].value, "assign"));else if ("3" == e) {
    for (var a = cc11001100_hook("a", $("input[type='radio']", t), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) if (a[n].checked) {
      refDepartmentVal = cc11001100_hook("refDepartmentVal", $(a[n]).parent().next().text(), "assign");
      break;
    }
  } else {
    "7" == e && (i = cc11001100_hook("i", t[0].getElementsByTagName("select"), "assign")) && (refDepartmentVal = cc11001100_hook("refDepartmentVal", i[0].options[i[0].selectedIndex].text, "assign"));
    var r = cc11001100_hook("r", null, "var-init");
    "1" == e ? r = cc11001100_hook("r", $("input", t), "assign") : "2" == e && (r = cc11001100_hook("r", $("textarea", t), "assign")), r && r[0] && ("1" != e && "2" != e || (refDepartmentVal = cc11001100_hook("refDepartmentVal", r[0].value, "assign")));
  }
}
function getM(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  if (!modata) {
    var a = cc11001100_hook("a", /^1[3456789]\d{9}$/, "var-init");
    if ("9" == e) {
      for (var n = cc11001100_hook("n", $(t).find("input,textarea"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) if ("手机" == n[r].getAttribute("verify") && a.exec($.trim(n[r].value))) return void (modata = cc11001100_hook("modata", n[r].value, "assign"));
    } else "1" == e && ("手机" == (e = cc11001100_hook("e", $("input", t), "assign")).attr("verify") || -1 != i.indexOf("手机") || -1 != i.indexOf("联系方式")) && (t = cc11001100_hook("t", e[0].value, "assign"), modata = cc11001100_hook("modata", $.trim(a.exec(t)) ? t : modata, "assign")) && window.localStorage && window.localStorage.setItem("wjxmo", modata.substring(0, 3));
  }
}
function getEmail(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a;
  "1" == e && "Email" == (e = cc11001100_hook("e", $("input", t), "assign")).attr("verify") && (a = cc11001100_hook("a", e[0].value, "assign"), $.trim(a)) && (emaildata = cc11001100_hook("emaildata", a, "assign"));
}
var quResult = cc11001100_hook("quResult", new Array(), "var-init");
function checkJpMatch(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  if (!t.hasCheck) {
    t.hasCheck = cc11001100_hook("t.hasCheck", !0, "assign");
    var i = cc11001100_hook("i", $("div.field-label", t).text(), "var-init");
    if (("1" == e || "2" == e) && quarray) for (var a = cc11001100_hook("a", 0, "var-init"); a < quarray.length; a++) if (-1 < i.indexOf(quarray[a])) {
      quResult.push(t);
      break;
    }
    0 == newAward && checkQuesMatch(i, t, e);
  }
}
function getAnswer(d, c, a, p, u, w) {
  cc11001100_hook("d", d, "function-parameter");
  cc11001100_hook("c", c, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("p", p, "function-parameter");
  cc11001100_hook("u", u, "function-parameter");
  cc11001100_hook("w", w, "function-parameter");
  var e,
    t,
    i,
    h = cc11001100_hook("h", 0, "var-init"),
    n = cc11001100_hook("n", !1, "var-init");
  switch (("3" == a || "4" == a || "11" == a) && (e = cc11001100_hook("e", getTopic(d), "assign"), randomMode && (e = cc11001100_hook("e", d.attr("id").replace("div", ""), "assign")), e = cc11001100_hook("e", document.getElementById("divRef" + e), "assign"), t = cc11001100_hook("t", "1" == $(d).attr("qingjing"), "assign"), e && "" == e.style.display || t && "none" == $(".ui-controlgroup", d)[0].style.display) && (n = cc11001100_hook("n", !0, "assign")), a) {
    case "1":
      p ? (s = cc11001100_hook("s", (l = cc11001100_hook("l", $("input", d), "assign"))[0].value, "assign"), s = cc11001100_hook("s", ("多级下拉" == l.attr("verify") && l[0].relValue && (s = cc11001100_hook("s", l[0].relValue, "assign")), $.trim(s)), "assign"), "1" == l.attr("datelimittype") && s && 2 == s.split("-").length && (s += cc11001100_hook("s", "-01", "assign")), (s = cc11001100_hook("s", !s && "1" == d.attr("req") && l[0] && l[0].svalue ? l[0].svalue : s, "assign")) || "1" != d.attr("aset") || ((g = cc11001100_hook("g", $(".iinputtext", d), "assign"))[0] && (s = cc11001100_hook("s", $.trim(g.text()), "assign")), l[0].val && addreportlog(l[0].val, "clearanswer")), s && l[0].lnglat && (s = cc11001100_hook("s", s + "[" + l[0].lnglat + "]", "assign")), "1" == d.attr("ceshi") && (s = cc11001100_hook("s", getKsAnswer(s), "assign")), c._value = cc11001100_hook("c._value", replace_specialChar(s = cc11001100_hook("s", u ? "(空)" : s, "assign")), "assign"), "1" == l.attr("voiceonly") && l[0].serverId && c._value && (c._value += cc11001100_hook("c._value", "┊" + l[0].serverId, "assign"))) : (c._value = cc11001100_hook("c._value", "(跳过)", "assign"), "1" == d.attr("hrq") && (c._value = cc11001100_hook("c._value", "Ⅳ", "assign")));
      break;
    case "2":
      p ? (l = cc11001100_hook("l", $("textarea", d), "assign"), (s = cc11001100_hook("s", !(s = cc11001100_hook("s", $.trim(l[0].value), "assign")) && "1" == d.attr("req") && l[0] && l[0].svalue ? l[0].svalue : s, "assign")) && l[0].lnglat && (s = cc11001100_hook("s", s + "[" + l[0].lnglat + "]", "assign")), "AI" == l.attr("verify") && (s = cc11001100_hook("s", l[0].aival || "", "assign")), c._value = cc11001100_hook("c._value", replace_specialChar(s = cc11001100_hook("s", u ? "(空)" : s, "assign")), "assign"), "1" == l.attr("voiceonly") && l[0].serverId && c._value && (c._value += cc11001100_hook("c._value", "┊" + l[0].serverId, "assign"))) : (c._value = cc11001100_hook("c._value", "(跳过)", "assign"), "1" == d.attr("hrq") && (c._value = cc11001100_hook("c._value", "Ⅳ", "assign")));
      break;
    case "3":
      !p || n ? (c._value = cc11001100_hook("c._value", "-3", "assign"), "1" == d.attr("hrq") && (c._value = cc11001100_hook("c._value", "-4", "assign"))) : u ? c._value = cc11001100_hook("c._value", "-2", "assign") : $("input[type='radio']:checked", d).each(function (e) {
        c._value = cc11001100_hook("c._value", this.value, "assign");
        var t = cc11001100_hook("t", $(this).attr("rel"), "var-init");
        return t && $("#" + t)[0] && 0 < $("#" + t)[0].value.length && (c._value += cc11001100_hook("c._value", spChars[2] + replace_specialChar($("#" + t)[0].value.substring(0, 3e3)), "assign")), !1;
      });
      break;
    case "4":
      !p || n ? (c._value = cc11001100_hook("c._value", "-3", "assign"), "1" == d.attr("hrq") && (c._value = cc11001100_hook("c._value", "-4", "assign"))) : !u && (i = cc11001100_hook("i", 0, "assign"), $("input:checked", d).each(function () {
        var e;
        "none" != this.parentNode.parentNode.style.display && (0 < i && (c._value += cc11001100_hook("c._value", spChars[3], "assign")), c._value += cc11001100_hook("c._value", this.value, "assign"), (e = cc11001100_hook("e", $(this).attr("rel"), "assign")) && $("#" + e)[0] && 0 < $("#" + e)[0].value.length && (c._value += cc11001100_hook("c._value", spChars[2] + replace_specialChar($("#" + e)[0].value.substring(0, 3e3)), "assign")), i++);
      }), 0 != i) || (c._value = cc11001100_hook("c._value", "-2", "assign"));
      break;
    case "21":
      p ? u ? c._value = cc11001100_hook("c._value", "-2", "assign") : 1 == $(d).attr("isshelf") ? (g = cc11001100_hook("g", getshelfanswer(d) || -2, "assign"), c._value = cc11001100_hook("c._value", g, "assign")) : (i = cc11001100_hook("i", 0, "assign"), $(".shop-item .itemnum", d).each(function (e) {
        var t = cc11001100_hook("t", this.value, "var-init");
        "0" != t && (0 < i && (c._value += cc11001100_hook("c._value", spChars[3], "assign")), c._value += cc11001100_hook("c._value", e + 1, "assign"), c._value += cc11001100_hook("c._value", spChars[2] + t, "assign"), i++);
      }), 0 == i && (c._value = cc11001100_hook("c._value", "-2", "assign"))) : c._value = cc11001100_hook("c._value", "-3", "assign");
      break;
    case "11":
      var r = cc11001100_hook("r", new Array(), "var-init");
      $("li.ui-li-static", d).each(function () {
        var e = cc11001100_hook("e", $(this).find("span.sortnum").html(), "var-init"),
          t = cc11001100_hook("t", ("none" == this.style.display && (e = cc11001100_hook("e", "", "assign")), new Object()), "var-init"),
          i = cc11001100_hook("i", (t.sIndex = cc11001100_hook("t.sIndex", e, "assign"), $(this).find("input:hidden")[0].value), "var-init"),
          a = cc11001100_hook("a", $(this).find("input.OtherText"), "var-init");
        0 < a.length && 0 < a[0].value.length && (i += cc11001100_hook("i", spChars[2] + replace_specialChar(a[0].value.substring(0, 3e3)), "assign")), !p || n ? i = cc11001100_hook("i", "-3", "assign") : e && !u || (i = cc11001100_hook("i", "-2", "assign")), t.val = cc11001100_hook("t.val", i, "assign"), t.sIndex || (t.sIndex = cc11001100_hook("t.sIndex", 1e4, "assign")), r.push(t);
      }), r.sort(function (e, t) {
        return e.sIndex - t.sIndex;
      });
      for (var o = cc11001100_hook("o", 0, "var-init"); o < r.length; o++) 0 < o && (c._value += cc11001100_hook("c._value", ",", "assign")), c._value += cc11001100_hook("c._value", r[o].val, "assign");
      break;
    case "5":
      if (p) {
        if (u) c._value = cc11001100_hook("c._value", "-2", "assign");else {
          c._value = cc11001100_hook("c._value", $("input:hidden", d)[0].value, "assign");
          var s = cc11001100_hook("s", parseInt(c._value), "var-init");
          if (1 == $(d).attr("pj") && 0 < s) {
            var l = cc11001100_hook("l", $(d).find(".evaluateTagDiv").eq(s - 1), "var-init"),
              f = cc11001100_hook("f", "", "var-init"),
              g = cc11001100_hook("g", ($(l).find(".writeRvaluate").siblings(".clicked").each(function (e, t) {
                f += cc11001100_hook("f", (0 == e ? "" : "、") + $.trim($(t).html()), "assign");
              }), f ? "、" : ""), "var-init"),
              m = cc11001100_hook("m", $(l).find("textarea"), "var-init"),
              v = cc11001100_hook("v", "", "var-init");
            if (1 < m.length) for (var x = cc11001100_hook("x", 0, "var-init"); x < m.length; x++) 0 == x ? v = cc11001100_hook("v", m[x].value.replace(/、/gi, "､"), "assign") : v += cc11001100_hook("v", "、" + m[x].value.replace(/、/gi, "､"), "assign");else v = cc11001100_hook("v", m[0].value.replace(/、/gi, "､"), "assign");
            v && l.find(".writeRvaluate").hasClass("clicked") && (f += cc11001100_hook("f", g + v, "assign")), f && (c._value += cc11001100_hook("c._value", spChars[2] + replace_specialChar($.trim(f.substring(0, 3e3))), "assign"));
          }
        }
      } else c._value = cc11001100_hook("c._value", "-3", "assign");
      break;
    case "6":
      if (1 == d.attr("level") && !d.attr("req") || catiSubmit) {
        var y = cc11001100_hook("y", d.find("input[type='text']"), "var-init"),
          b = cc11001100_hook("b", !1, "var-init");
        if (y.each(function () {
          if (!this.value) return !(b = cc11001100_hook("b", !0, "assign"));
        }), b) break;
      }
      var h = cc11001100_hook("h", 0, "var-init"),
        C = cc11001100_hook("C", "true" == $(d).attr("daozhi"), "var-init"),
        I = cc11001100_hook("I", "1" == $(d).attr("texthighlights"), "var-init");
      $("input[type='text']", d).each(function (e) {
        0 < h && (c._value += cc11001100_hook("c._value", ",", "assign"));
        var t,
          i,
          a = cc11001100_hook("a", !1, "var-init"),
          n = cc11001100_hook("n", e + 1, "var-init");
        if (window.hasReferClient && !C && !I && (t = cc11001100_hook("t", $(d).attr("id"), "assign"), i = cc11001100_hook("i", c._topic, "assign"), t && (t = cc11001100_hook("t", t.replace("div", ""), "assign"), parseInt(t) == t) && i != t && (i = cc11001100_hook("i", t, "assign")), t = cc11001100_hook("t", document.getElementById("divRefTab" + i), "assign"), l = cc11001100_hook("l", $(t).hasClass("isRandomRow"), "assign"), i = cc11001100_hook("i", document.getElementById("drv" + i + "_" + (e + 1)), "assign"), (i = cc11001100_hook("i", l ? $(t).find("tr[rowindex='" + e + "']")[0] : i, "assign")) && "none" == i.style.display || !i && questionsObject[c._topic]) && (a = cc11001100_hook("a", !0, "assign")), c._value += cc11001100_hook("c._value", n + spChars[4], "assign"), p) {
          if (u) c._value += cc11001100_hook("c._value", "-2", "assign");else {
            var r,
              o,
              s,
              l = cc11001100_hook("l", this.value, "var-init");
            if (!l) {
              try {
                C || 1 != w || "none" == d[0].style.display || amt || (r = cc11001100_hook("r", this.id, "assign"), (o = cc11001100_hook("o", d.find("tr[fid='" + r + "']"), "assign")) && o[0] && "none" != o[0].style.display && (l = cc11001100_hook("l", (s = cc11001100_hook("s", 1 < (s = cc11001100_hook("s", o.find(".rate-on"), "assign")).length ? s.eq(s.length - 1) : s, "assign")).attr("dval"), "assign"), "1" != d.attr("req") || d[0].logmatrixnull || (d[0].logmatrixnull = cc11001100_hook("d[0].logmatrixnull", !0, "assign"), addreportlog(d.attr("topic") + ":" + r + ",value:" + this.value + ",rate:" + l + ",v:" + this.getAttribute("v") + "," + validateProStr, "logmatrixnull"))));
              } catch (e) {}
              l = cc11001100_hook("l", l || "-2", "assign");
            }
            c._value += cc11001100_hook("c._value", l = cc11001100_hook("l", a ? "-4" : l, "assign"), "assign");
          }
        } else c._value += cc11001100_hook("c._value", "-3", "assign");
        h++;
      });
      break;
    case "7":
      p ? c._value = cc11001100_hook("c._value", u ? "-2" : $("select", d)[0].value, "assign") : c._value = cc11001100_hook("c._value", "-3", "assign");
      break;
    case "8":
      p ? c._value = cc11001100_hook("c._value", u ? "(空)" : $("input.ui-slider-input", d)[0].value, "assign") : c._value = cc11001100_hook("c._value", "(跳过)", "assign");
      break;
    case "33":
    case "34":
    case "9":
      var _,
        k,
        j = cc11001100_hook("j", "34" == a ? "textarea" : "33" == a ? ".file" : "input", "var-init");
      d = cc11001100_hook("d", $(d), "assign"), "9" == a && (j = cc11001100_hook("j", "input:not(.file input[type=file]), .file,textarea", "assign")), h = cc11001100_hook("h", 0, "assign"), p || "1" != d.attr("hrq") ? !p && window.cepingCandidate ? c._value = cc11001100_hook("c._value", "Ⅳ", "assign") : (s = cc11001100_hook("s", $(j, d), "assign"), "1" == d.attr("randomrow") && (_ = cc11001100_hook("_", d.attr("topic"), "assign"), s = cc11001100_hook("s", s.toArray().sort(function (e, t) {
        var i;
        return e = cc11001100_hook("e", ".file" == j ? (i = cc11001100_hook("i", $(e).children(":first").attr("id").replace("fileUploadq" + _ + "_", ""), "assign"), $(t).children(":first").attr("id").replace("fileUploadq" + _ + "_", "")) : (i = cc11001100_hook("i", $(e).attr("id").replace("q" + _ + "_", ""), "assign"), $(t).attr("id").replace("q" + _ + "_", "")), "assign"), i - e;
      }), "assign")), k = cc11001100_hook("k", "1" == d.attr("ceshi"), "assign"), $(s).each(function () {
        0 < h && (c._value += cc11001100_hook("c._value", spChars[2], "assign"));
        var e,
          t = cc11001100_hook("t", -1 < this.className.indexOf("file"), "var-init"),
          i = cc11001100_hook("i", "33" == a || t ? /_(\d+)$/.exec(this.parentNode.parentNode.getAttribute("id"))[1] : this.getAttribute("rowid"), "var-init"),
          i = cc11001100_hook("i", (i && (c._value += cc11001100_hook("c._value", i + spChars[4], "assign")), "33" == a || t ? e = cc11001100_hook("e", this.parentNode.fileName || "", "assign") : (e = cc11001100_hook("e", $.trim(this.value), "assign"), "1" == $(this).attr("datelimittype") && e && 2 == e.split("-").length && (e += cc11001100_hook("e", "-01", "assign"))), !e && "1" == d.attr("req") && this.svalue && (e = cc11001100_hook("e", this.svalue, "assign")), !1), "var-init");
        if (window.hasReferClient && "1" != d.attr("gapfill") && (t = cc11001100_hook("t", $(this).closest("tr"), "assign"))[0] && "none" == t[0].style.display && (i = cc11001100_hook("i", !0, "assign")), p ? u ? e = cc11001100_hook("e", "(空)", "assign") : i && (e = cc11001100_hook("e", "Ⅳ", "assign")) : e = cc11001100_hook("e", "(跳过)", "assign"), e && this.lnglat && (e = cc11001100_hook("e", e + "[" + this.lnglat + "]", "assign")), k) {
          e = cc11001100_hook("e", getKsAnswer(e), "assign");
          try {
            0 < d[0].getElementsByTagName("select").length || "33" == a || (e = cc11001100_hook("e", e.replace(/,/g, "，"), "assign"));
          } catch (e) {}
        }
        c._value += cc11001100_hook("c._value", replace_specialChar(e), "assign"), h++;
      })) : c._value = cc11001100_hook("c._value", "Ⅳ", "assign");
      break;
    case "12":
      h = cc11001100_hook("h", 0, "assign"), $("input", d).each(function () {
        0 < h && (c._value += cc11001100_hook("c._value", spChars[2], "assign"));
        var e = cc11001100_hook("e", !1, "var-init"),
          t = cc11001100_hook("t", (window.hasReferClient && (t = cc11001100_hook("t", this.parentNode.parentNode.parentNode, "assign")) && "none" == t.style.display && (e = cc11001100_hook("e", !0, "assign")), this.getAttribute("rowid")), "var-init"),
          t = cc11001100_hook("t", (t && (c._value += cc11001100_hook("c._value", t + spChars[4], "assign")), this.value), "var-init");
        p ? e ? t = cc11001100_hook("t", "Ⅳ", "assign") : u && (t = cc11001100_hook("t", "(空)", "assign")) : t = cc11001100_hook("t", "(跳过)", "assign"), c._value += cc11001100_hook("c._value", t, "assign"), h++;
      });
      break;
    case "13":
      p ? "1" == $(d).attr("heatmap") ? c._value = cc11001100_hook("c._value", $(d)[0].heatmapAnsStr + "┋" + ($(d)[0].fileName || ""), "assign") : c._value = cc11001100_hook("c._value", $(d)[0].fileName || "", "assign") : c._value = cc11001100_hook("c._value", "(跳过)", "assign");
      break;
    case "10":
      if ("1" == (d = cc11001100_hook("d", $(d), "assign")).attr("circulate")) c._value = cc11001100_hook("c._value", getcirculateanswer(d, u), "assign");else {
        h = cc11001100_hook("h", 0, "assign");
        var T = cc11001100_hook("T", "input:not(.file input[type=file]), .file,textarea", "var-init"),
          A = cc11001100_hook("A", "(跳过)", "var-init"),
          l = cc11001100_hook("l", ("1" == d.attr("select") && (T = cc11001100_hook("T", "select", "assign"), A = cc11001100_hook("A", "-3", "assign")), "table"), "var-init"),
          S = cc11001100_hook("S", !1, "var-init"),
          g = cc11001100_hook("g", ((S = cc11001100_hook("S", "1" == d.attr("fixedslider") ? !0 : S, "assign")) && (l = cc11001100_hook("l", ".ui-table-scroll .ui-table-tbody tr[rowid]", "assign")), 1 == d.attr("maxdiff") && !d.attr("req")), "var-init"),
          s = cc11001100_hook("s", 1 == d.attr("conjoint") && !d.attr("req"), "var-init");
        if (g || s || catiSubmit) {
          y = cc11001100_hook("y", d.find("input"), "assign"), b = cc11001100_hook("b", !1, "assign");
          if (y.each(function () {
            if (!this.value) return !(b = cc11001100_hook("b", !0, "assign"));
          }), b) break;
        }
        !p && window.cepingCandidate ? c._value = cc11001100_hook("c._value", "Ⅳ", "assign") : $(l, d).each(function () {
          if ($(this).hasClass("conjointTable")) return !0;
          0 < h && (c._value += cc11001100_hook("c._value", spChars[2], "assign"));
          var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", !1, "var-init"),
            e = cc11001100_hook("e", this.parentNode, "var-init"),
            t = cc11001100_hook("t", (S && (e = cc11001100_hook("e", this, "assign")), "1" == d.attr("maxdiff")), "var-init"),
            i = cc11001100_hook("i", "1" == d.attr("conjoint"), "var-init"),
            t = cc11001100_hook("t", (!window.hasReferClient && !d.attr("zizeng") || !e || "none" != e.style.display || t || i || (r = cc11001100_hook("r", !0, "assign")), e.getAttribute("rowid")), "var-init");
          t && (c._value += cc11001100_hook("c._value", t + spChars[4], "assign")), $(T, this).each(function () {
            var e,
              t,
              i = cc11001100_hook("i", -1 < this.className.indexOf("file"), "var-init"),
              a = cc11001100_hook("a", (0 < n && (c._value += cc11001100_hook("c._value", spChars[3], "assign")), this), "var-init");
            i ? e = cc11001100_hook("e", this.parentNode.fileName || "", "assign") : (t = cc11001100_hook("t", a.value, "assign"), "select" == T && null === t && (t = cc11001100_hook("t", $(a).find("option:checked").val(), "assign")), e = cc11001100_hook("e", $.trim(t), "assign"), "1" == $(this).attr("datelimittype") && e && 2 == e.split("-").length && (e += cc11001100_hook("e", "-01", "assign"))), e = cc11001100_hook("e", replace_specialChar(e), "assign"), !i && "select" == T && -1 != a.selectedIndex && a.options[a.selectedIndex].sinput && (e += cc11001100_hook("e", "‖" + replace_specialChar(a.options[a.selectedIndex].text), "assign")), p ? r ? e = cc11001100_hook("e", "Ⅳ", "assign") : u && (e = cc11001100_hook("e", "(空)", "assign")) : e = cc11001100_hook("e", A, "assign"), e && a.lnglat && (e = cc11001100_hook("e", e + "[" + a.lnglat + "]", "assign")), c._value += cc11001100_hook("c._value", e, "assign"), n++;
          }), h++;
        });
      }
  }
}
function debugLog(e) {
  cc11001100_hook("e", e, "function-parameter");
  window.VConsole && console.log(e);
}
var clientAnswerSend = cc11001100_hook("clientAnswerSend", "", "var-init");
function groupAnswer(s, t, i, a) {
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  var l = cc11001100_hook("l", new Array(), "var-init"),
    d = cc11001100_hook("d", 0, "var-init"),
    c = cc11001100_hook("c", new Object(), "var-init"),
    p = cc11001100_hook("p", 1, "var-init");
  try {
    if (1 == s) {
      for (var e = cc11001100_hook("e", 0, "var-init"); e < quResult.length; e++) {
        var n,
          r,
          o = cc11001100_hook("o", null, "var-init"),
          u = cc11001100_hook("u", $(quResult[e]).attr("type"), "var-init"),
          w = cc11001100_hook("w", ("1" == u ? o = cc11001100_hook("o", $("input", quResult[e]), "assign") : "2" == u && (o = cc11001100_hook("o", $("textarea", quResult[e]), "assign")), $.trim(o[0].value)), "var-init");
        !w || w.length < 2 || (n = cc11001100_hook("n", document.createElement("img"), "assign"), r = cc11001100_hook("r", $("div.field-label", quResult[e]).text(), "assign"), n.src = cc11001100_hook("n.src", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitynlp/track.gif?APIVersion=0.6.0&activity=" + activityId + "&title=" + encodeURIComponent(document.title) + "&qtitle=" + encodeURIComponent(r) + "&q=" + getTopic(quResult[e]) + "&text=" + encodeURIComponent(w) + "&jointimes=" + (window.currJT || 0), "assign"));
      }
      hasAutoSubmit = cc11001100_hook("hasAutoSubmit", !0, "assign");
    }
  } catch (e) {}
  if (6 == s) previewopen();else if (debugLog("获取题目答案"), allQArray.each(function () {
    var e = cc11001100_hook("e", $(this), "var-init");
    if (1 == e.attr("istrap")) return !0;
    var t = cc11001100_hook("t", new Object(), "var-init"),
      i = cc11001100_hook("i", e.attr("type"), "var-init"),
      a = cc11001100_hook("a", "none" != this.style.display || "-1" == e.attr("relation"), "var-init");
    if (a && hasSkipPage && this.pageParent && this.pageParent.skipPage && (a = cc11001100_hook("a", !1, "assign")), this.isCepingQ && (a = cc11001100_hook("a", !0, "assign")), this.isChuangGuanQ && (a = cc11001100_hook("a", !0, "assign")), t._value = cc11001100_hook("t._value", "", "assign"), t._topic = cc11001100_hook("t._topic", getTopic(e), "assign"), 8e4 < t._topic) return !0;
    if (window.isKaoShi && window.randomMode && "1" != e.attr("nc") && "NaN" !== parseInt(t._topic).toString() && (c[t._topic] = cc11001100_hook("c[t._topic]", p, "assign"), p++), l[d++] = cc11001100_hook("l[d++]", t, "assign"), window.isKaoShi || window.ishydj || 1 != e.find(".ccwb").length || sessionStorage.removeItem(activityId + "_" + t._topic), 1 == s) try {
      var n = cc11001100_hook("n", $("div.field-label", e).text(), "var-init");
      1 == window.newAward && checkQuesMatch(n, e, i), "3" != i && "7" != i && "1" != i || (o = cc11001100_hook("o", null, "assign"), "3" == i && (o = cc11001100_hook("o", $("input[type='radio']", e), "assign")), window.getAge && getAge(i, e, n, o), window.getIncome && getIncome(i, e, n, o), "3" == i && (window.getGender && getGender(i, e, n, o), window.getMarriage && getMarriage(i, e, n, o), window.getEducation && getEducation(i, e, n, o), window.getFamiliy) && getFamiliy(i, e, n, o)), "3" != i && "4" != i || !e.is("[contactsuser]") || getUTags(e, e.attr("contactsuser")), window.refUsername ? 1e4 * t._topic == refUsername - refUsername % 1e4 && (getRefUsername(i, e), rName = cc11001100_hook("rName", refUsernameVal, "assign")) : (getRname(i, e, n), 30 < rName.length && (rName = cc11001100_hook("rName", "", "assign"))), window.refUserId && 1e4 * t._topic == refUserId - refUserId % 1e4 && getRefUserId(i, e), window.refDepartment && 1e4 * t._topic == refDepartment - refDepartment % 1e4 && getRefDepartment(i, e), getM(i, e, n), getBirthday(i, e, n), getEmail(i, e, n);
    } catch (e) {
      console.log(e);
    }
    var r,
      o = cc11001100_hook("o", !1, "var-init");
    window.isInterview2 && (r = cc11001100_hook("r", getTopic(e), "assign"), o = cc11001100_hook("o", !!window.validQlist.filter(function (e) {
      return e == r;
    }).length, "assign")), getAnswer(e, t, i, a, o, s);
  }), window.isSingleVote && window.touPiaoItemIndex && ((f = cc11001100_hook("f", new Object(), "assign"))._topic = cc11001100_hook("(f = new Object())._topic", "1", "assign"), f._value = cc11001100_hook("f._value", touPiaoItemIndex + "", "assign"), l.push(f)), $("body")[0].informedimgdata && (f = cc11001100_hook("f", encodeURIComponent($("body")[0].informedimgdata), "assign")) && l.push({
    _topic: cc11001100_hook("_topic", -1, "object-key-init"),
    _value: cc11001100_hook("_value", f, "object-key-init")
  }), 0 == l.length) alertNew(getlang("tit_noquestion"));else {
    window.needLoadReSetPeo && $("#div1").hide(), l.sort(function (e, t) {
      return e._topic - t._topic;
    });
    var h = cc11001100_hook("h", "", "var-init");
    if ((window.isInterview2 || window.ytyyauto) && t) var f = cc11001100_hook("f", l.filter(function (e) {
        return e._topic == t;
      }), "var-init"),
      h = cc11001100_hook("h", f.length ? (h = cc11001100_hook("h", (h += cc11001100_hook("h", f[0]._topic, "assign")) + spChars[0], "assign")) + f[0]._value : h + t + spChars[0], "var-init");else for (e = cc11001100_hook("e", 0, "assign"); e < l.length; e++) 0 < e && (h += cc11001100_hook("h", spChars[1], "assign")), h = cc11001100_hook("h", (h = cc11001100_hook("h", (h += cc11001100_hook("h", l[e]._topic, "assign")) + spChars[0], "assign")) + l[e]._value, "assign");
    debugLog("获取提交参数");
    try {
      if (window.isKaoShi && window.randomMode && c && window.localStorage && window.JSON && "1" != getQueryVariable("ctj")) {
        var g = cc11001100_hook("g", localStorage.getItem("sortactivity"), "var-init"),
          m = cc11001100_hook("m", (g ? g += cc11001100_hook("g", "," + activityId, "assign") : g = cc11001100_hook("g", activityId, "assign"), (g += cc11001100_hook("g", "", "assign")).split(",")), "var-init");
        if (2 < m.length) {
          for (var v = cc11001100_hook("v", m.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < v - 2; e++) {
            var x = cc11001100_hook("x", m[0], "var-init");
            m.splice(0, 1), localStorage.removeItem("sortorder_" + x);
          }
          g = cc11001100_hook("g", m.join(","), "assign");
        }
        localStorage.setItem("sortactivity", g);
        var y = cc11001100_hook("y", "sortorder_" + activityId, "var-init"),
          b = cc11001100_hook("b", JSON.stringify(c), "var-init");
        localStorage.setItem(y, b);
      }
    } catch (e) {}
    f = cc11001100_hook("f", $("#form1").attr("action"), "assign"), g = cc11001100_hook("g", (0 == (f = cc11001100_hook("f", -1 < f.indexOf("aliyun.wjx.cn") || -1 < f.indexOf("temp.wjx.cn") ? f.replace("aliyun.wjx.cn", window.location.host).replace("temp.wjx.cn", window.location.host) : f, "assign")).indexOf("http://") && "https:" == document.location.protocol ? f = cc11001100_hook("f", f.replace("http://", "https://"), "assign") : 0 == f.indexOf("https://") && "http:" == document.location.protocol && (f = cc11001100_hook("f", f.replace("https://", "http://"), "assign")), f + "&starttime=" + encodeURIComponent($("#starttime").val())), "assign"), y = cc11001100_hook("y", window.sojumpParm, "assign");
    if (window.hasEncode || (y = cc11001100_hook("y", encodeURIComponent(y), "assign")), window.sojumpParm && (g += cc11001100_hook("g", "&sojumpparm=" + y, "assign")), window.hasMaxdiff && (g += cc11001100_hook("g", "&maxdiff=1", "assign")), window.recordType && 0 < window.recordType && (g += cc11001100_hook("g", "&recordType=" + recordType, "assign")), window.hasConjoint && (g += cc11001100_hook("g", "&conjoint=1", "assign")), window.parmsign && (g += cc11001100_hook("g", "&parmsign=" + encodeURIComponent(parmsign), "assign"), window.isEdit) && (g += cc11001100_hook("g", "&isedit=" + isEdit, "assign")), window.endTs && (g += cc11001100_hook("g", "&endts=" + endTs, "assign")), window.autoLangv && (g += cc11001100_hook("g", "&langv=" + autoLangv, "assign")), window.qdataList && 0 < qdataList.length && (g += cc11001100_hook("g", "&aqsj=" + encodeURIComponent(qdataList.join("")), "assign")), window.customerpara && (g += cc11001100_hook("g", window.customerpara, "assign")), window.tparam && (g += cc11001100_hook("g", "&tparam=1&sojumpparmext=" + encodeURIComponent(window.sojumpparmext), "assign")), window.Password && (g += cc11001100_hook("g", "&psd=" + encodeURIComponent(Password), "assign")), window.PasswordExt && (g += cc11001100_hook("g", "&pwdext=" + encodeURIComponent(PasswordExt), "assign")), window.hasMaxtime && (g += cc11001100_hook("g", "&hmt=1", "assign")), window.amt && (g += cc11001100_hook("g", "&amt=" + amt, "assign")), window.initMaxSurveyTime && (g += cc11001100_hook("g", "&mst=" + window.initMaxSurveyTime, "assign")), g += cc11001100_hook("g", "&cst=" + new Date().getTime(), "assign"), window.isVip && (g += cc11001100_hook("g", "&vpsiu=1", "assign")), window.useAliVerify && 2 != window.captchaType && (g += cc11001100_hook("g", "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene, "assign")), verifymob && (g += cc11001100_hook("g", "&verifymob=" + verifymob, "assign")), window.cpid && (g += cc11001100_hook("g", "&cpid=" + cpid, "assign")), window.guid && (g += cc11001100_hook("g", "&emailguid=" + guid, "assign")), window.udsid && (g += cc11001100_hook("g", "&udsid=" + window.udsid, "assign")), window.fromsour && (g += cc11001100_hook("g", "&fromsour=" + window.fromsour, "assign")), nvvv && (g += cc11001100_hook("g", "&nvvv=1", "assign")), window.sjUser && (g += cc11001100_hook("g", "&sjUser=" + encodeURIComponent(sjUser), "assign")), window.sjts && (g += cc11001100_hook("g", "&sjts=" + sjts, "assign")), window.sjsign && (g += cc11001100_hook("g", "&sjsign=" + encodeURIComponent(sjsign), "assign")), window.FromSj && (g += cc11001100_hook("g", "&fromsj=1", "assign")), window.sourcelink && window.outuser && (g += cc11001100_hook("g", window.sourcelink, "assign"), window.outsign) && (g += cc11001100_hook("g", "&outsign=" + encodeURIComponent(outsign), "assign")), window.sourceurl ? g += cc11001100_hook("g", "&source=" + encodeURIComponent(sourceurl), "assign") : window.isMobile && (g += cc11001100_hook("g", "&source=directphone", "assign")), window.top != window && (g += cc11001100_hook("g", "&isiframe=1", "assign")), window.SJBack && (g += cc11001100_hook("g", "&sjback=1", "assign")), window.jiFen && 0 < jiFen && (g += cc11001100_hook("g", "&jf=" + jiFen, "assign")), window.joinIdnew && window.answertext && 3 != s && (g += cc11001100_hook("g", "&nfjoinid=" + window.joinIdnew, "assign"), s = cc11001100_hook("s", 6, "assign")), (window.isInterview2 || window.ytyyauto) && !i && 1 == s) {
      if (!nfjoinid) return alertNew("网络异常，无法提交答案!"), void $("#form1").hide();
      g = cc11001100_hook("g", g + ("&nfjoinid=" + nfjoinid) + ("&pz=" + pz), "assign");
    }
    s && (g += cc11001100_hook("g", "&submittype=" + s, "assign")), 3 == s && (g += cc11001100_hook("g", "&zbp=" + (cur_page + 1), "assign"), needSubmitNotValid) && (g += cc11001100_hook("g", "&nsnv=1", "assign")), window.hasInformed && (g += cc11001100_hook("g", "&infw=" + (window.infwSubmit ? "0" : "1"), "assign")), 2 == window.isChuangGuan && 1 == s && (hasChuGuanSuc || -1 != g.indexOf("&hmt=1") || (g += cc11001100_hook("g", "&hmt=1", "assign")), g += cc11001100_hook("g", "&icg=1&tuti=" + (totalUseTime = cc11001100_hook("totalUseTime", 0 == window.totalUseTime && window.firstCgCounterDate ? parseInt((new Date() - firstCgCounterDate) / 1e3) : totalUseTime, "assign")), "assign")), g += cc11001100_hook("g", "&ktimes=" + ktimes, "assign"), window.rndnum && (g += cc11001100_hook("g", "&rn=" + encodeURIComponent(rndnum), "assign")), window.inviteid && (g += cc11001100_hook("g", "&inviteid=" + encodeURIComponent(inviteid), "assign")), window.access_token && window.openid ? (g += cc11001100_hook("g", "&access_token=" + encodeURIComponent(access_token), "assign"), window.isQQLogin ? g += cc11001100_hook("g", "&qqopenid=" + encodeURIComponent(openid), "assign") : g += cc11001100_hook("g", "&openid=" + encodeURIComponent(openid), "assign"), window.unionId && (g += cc11001100_hook("g", "&unionId=" + encodeURIComponent(unionId), "assign")), window.wxtokenappid && (g += cc11001100_hook("g", "&wxappid=" + encodeURIComponent(wxtokenappid), "assign"))) : window.isJieLong && window.openid && (g += cc11001100_hook("g", "&openid=" + encodeURIComponent(openid), "assign")), 0 < navigator.userAgent.indexOf("DingTalk") && (g += cc11001100_hook("g", "&openid=" + encodeURIComponent(openid), "assign"), window.ddgroupid) && (g += cc11001100_hook("g", "&ddgroupid=" + encodeURIComponent(ddgroupid), "assign")), window.meetingInfo && window.meetUserInfo && window.meetUserInfo.openId && (g += cc11001100_hook("g", "&openid=" + encodeURIComponent(window.meetUserInfo.openId), "assign")), window.wxUserId && (g += cc11001100_hook("g", "&wxUserId=" + window.wxUserId, "assign")), 0 < window.location.href.indexOf("isexternal=1") && (g += cc11001100_hook("g", "&isexternal=1", "assign"), getQueryVariable("wxappid") && (g += cc11001100_hook("g", "&wxappid=" + getQueryVariable("wxappid"), "assign")), getQueryVariable("wjpushid") && (g += cc11001100_hook("g", "&wjpushid=" + getQueryVariable("wjpushid"), "assign")), getQueryVariable("pushsign")) && (g += cc11001100_hook("g", "&pushsign=" + encodeURIComponent(getQueryVariable("pushsign")), "assign")), window.cats && (g += cc11001100_hook("g", "&cats=" + cats + "&casign=" + encodeURIComponent(casign), "assign")), window.wxthird && (g += cc11001100_hook("g", "&wxthird=1", "assign")), window.parterts && (g += cc11001100_hook("g", "&parterts=" + parterts, "assign")), window.parterjoiner && (g += cc11001100_hook("g", "&parterjoiner=" + encodeURIComponent(parterjoiner), "assign")), window.partersign && (g += cc11001100_hook("g", "&partersign=" + encodeURIComponent(partersign), "assign")), window.parterrealname && (g += cc11001100_hook("g", "&parterrealname=" + encodeURIComponent(parterrealname), "assign")), window.parterextf && (g += cc11001100_hook("g", "&parterextf=" + encodeURIComponent(parterextf), "assign")), window.parterdept && (g += cc11001100_hook("g", "&parterdept=" + encodeURIComponent(parterdept), "assign")), window.parterpuser && (g += cc11001100_hook("g", "&parterpuser=" + encodeURIComponent(parterpuser), "assign")), window.formopen && (g += cc11001100_hook("g", "&formopen=" + encodeURIComponent(formopen) + "&formsign=" + encodeURIComponent(formsign) + "&formts=" + formts + "&formnick=" + formnick, "assign")), getQueryVariable("vurl") && (g += cc11001100_hook("g", "&vurl=" + getQueryVariable("vurl"), "assign"));
    b = cc11001100_hook("b", new Date(), "assign");
    if (b.setTime(b.getTime() + 18e5), rName && (f = cc11001100_hook("f", rName.replace("(", "（").replace(")", "）").trim(), "assign"), setCookie("jcn" + activityId, f, b.toUTCString(), "/", "", null), g += cc11001100_hook("g", "&jcn=" + encodeURIComponent(dataenc(f)), "assign")), window.refDepartment && (g += cc11001100_hook("g", "&rdept=" + encodeURIComponent(window.refDepartmentVal), "assign")), window.refUserId ? ("1" === getQueryVariable("ctj") && (window.refUserIdVal = cc11001100_hook("window.refUserIdVal", decodeURIComponent(getQueryVariable("reluserid")), "assign"), window.refUserIdVal) && (g += cc11001100_hook("g", "&ctj=1", "assign")), g += cc11001100_hook("g", "&ruserid=" + encodeURIComponent(window.refUserIdVal), "assign")) : window.openid && window.enableCtj ? (window.refUserIdVal = cc11001100_hook("window.refUserIdVal", window.openid, "assign"), "1" === getQueryVariable("ctj") && (g += cc11001100_hook("g", "&ctj=1", "assign")), g += cc11001100_hook("g", "&ruserid=" + encodeURIComponent(window.openid), "assign")) : window.relusername && window.enableCtj && (window.refUserIdVal = cc11001100_hook("window.refUserIdVal", window.relusername, "assign"), "1" === getQueryVariable("ctj") && (g += cc11001100_hook("g", "&ctj=1", "assign")), g += cc11001100_hook("g", "&ruserid=" + encodeURIComponent(window.relusername), "assign")), window.relts && (g += cc11001100_hook("g", "&relts=" + relts, "assign")), window.relusername && (g += cc11001100_hook("g", "&relusername=" + encodeURIComponent(relusername), "assign")), window.relsign && (g += cc11001100_hook("g", "&relsign=" + encodeURIComponent(relsign), "assign")), window.relrealname && (g += cc11001100_hook("g", "&relrealname=" + encodeURIComponent(relrealname), "assign")), window.reldept && (g += cc11001100_hook("g", "&reldept=" + reldept, "assign")), window.relext && (g += cc11001100_hook("g", "&relext=" + relext, "assign")), window.writeuser && (g += cc11001100_hook("g", "&writeuser=" + writeuser, "assign")), window.corpId && (g += cc11001100_hook("g", "&corpId=" + encodeURIComponent(corpId), "assign")), window.GetJpMatch && GetJpMatch(), window.newAward ? (window.newAward && (g += cc11001100_hook("g", "&nw=" + encodeURIComponent(window.newAward), "assign")), jpWayText && (g += cc11001100_hook("g", "&jwt=" + encodeURIComponent(jpWayText), "assign")), jpMatchId && (g += cc11001100_hook("g", "&jpm=" + jpMatchId, "assign")), needImport && (g += cc11001100_hook("g", "&nip=" + needImport, "assign"))) : jpMatchId && (g += cc11001100_hook("g", "&jpm=" + jpMatchId + "&isMtitle=" + isMatchTitle, "assign")), lastCostTime && lastCostTime / 1e3 && (g += cc11001100_hook("g", "&lct=" + parseInt(lastCostTime / 1e3), "assign")), 1 == window.isJielongAdminHelp && (g += cc11001100_hook("g", "&hjl=1", "assign")), catiSubmit && (g += cc11001100_hook("g", "&iscati=1", "assign")), 2 == window.captchaType && (g += cc11001100_hook("g", "&capt=2", "assign")), (window.isWeiXin || window.isdingtalkFreeUser) && (g += cc11001100_hook("g", "&iwx=1", "assign")), g += cc11001100_hook("g", "&t=" + new Date().valueOf(), "assign"), 0 < totalMoney && (g += cc11001100_hook("g", "&ishop=1", "assign")), modata && setCookie("jcm" + activityId, modata, b.toUTCString(), "/", "", null), window.cProvince) {
      g += cc11001100_hook("g", "&cp=" + encodeURIComponent(cProvince.replace("'", "")) + "&cc=" + encodeURIComponent(cCity.replace("'", "")) + "&ci=" + escape(cIp), "assign");
      y = cc11001100_hook("y", cProvince + "," + cCity, "assign");
      window.location.host;
      try {
        setCookie("ip_" + cIp, y, null, "/", "", null);
      } catch (e) {}
    }
    window.shareGuid && (g += cc11001100_hook("g", "&shareGuid=" + window.shareGuid, "assign")), getQueryVariable("creativeid") && getQueryVariable("clickid") ? g += cc11001100_hook("g", "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid"), "assign") : getQueryVariable("callback") ? g += cc11001100_hook("g", "&callback=" + encodeURIComponent(getQueryVariable("callback")), "assign") : getQueryVariable("trackid") ? g += cc11001100_hook("g", "&trackid=" + getQueryVariable("trackid"), "assign") : getQueryVariable("click_id") ? g += cc11001100_hook("g", "&click_id=" + getQueryVariable("click_id"), "assign") : getQueryVariable("bd_vid") ? (g += cc11001100_hook("g", "&bd_vid=" + getQueryVariable("bd_vid"), "assign"), (b = cc11001100_hook("b", new Date(), "assign")).setTime(b.getTime() + 18e5), setCookie("baidulink_" + activityId, window.location.href, b.toUTCString(), "/", "", null)) : getQueryVariable("jdParams") && (g += cc11001100_hook("g", "&jdParams=" + getQueryVariable("jdParams"), "assign")), window.meetingInfo && window.meetUserInfo && (g += cc11001100_hook("g", "&meetingInfo=" + encodeURI(meetingInfo.meetingSubject.replace(/,/g, "，")) + "," + meetingInfo.meetingCode + "," + meetingInfo.meetingId + "&meetUserInfo=" + encodeURI(meetUserInfo.nickname.replace(/,/g, "，")) + "," + meetUserInfo.openId, "assign")), getQueryVariable("formextsign") && (g += cc11001100_hook("g", "&formextsign=" + getQueryVariable("formextsign"), "assign")), window.wxnewfs && (g += cc11001100_hook("g", "&wxfs=" + wxnewfs, "assign")), debugLog("准备提交到服务器"), !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex || ($("#voteBack").hide(), $("#helpVote").hide()), $("#ctlNext").hide(), $("#lxNextBtn").hide(), catiSubmit && ($("#catiDiv").hide(), window.isMobile) && $(".cati_mask").hide(), window.isytyy && a && $("#ytyyNextBtn").hide(), window.isinterview && !window.isInterview2 && (window.hasFanishInterview = cc11001100_hook("window.hasFanishInterview", !0, "assign"), $(".interviewSubmitBtn,.interview_input").hide(), $("#divQuestion").addClass("interviewOver")), $("#spanPreview").hide();
    f = cc11001100_hook("f", '<img src = "//image.wjx.cn/images/wjxMobile/wait.gif" alt="">', "assign");
    $("#ValError").html(f), $("#captchaTit").html(f), 3 == s && (f = cc11001100_hook("f", getlang("tit_validata"), "assign"), $("#ValError").html(f), $("#captchaTit").html(f)), window.ZHUIWENANSWER && (h = cc11001100_hook("h", window.ZHUIWENANSWER, "assign"), window.ZHUIWENANSWER = cc11001100_hook("window.ZHUIWENANSWER", "", "assign")), clientAnswerSend = cc11001100_hook("clientAnswerSend", h, "assign"), window.jqnonce && (g += cc11001100_hook("g", "&jqnonce=" + encodeURIComponent(window.jqnonce), "assign"), y = cc11001100_hook("y", dataenc(window.jqnonce), "assign"), g += cc11001100_hook("g", "&jqsign=" + encodeURIComponent(y), "assign"));
    for (var b = cc11001100_hook("b", {
        submitdata: cc11001100_hook("submitdata", h, "object-key-init")
      }, "var-init"), C = cc11001100_hook("C", (2 == window.captchaType && (b.captchaVerifyParam = cc11001100_hook("b.captchaVerifyParam", captchaVerifyParam, "assign")), window.partPages && (b.partpages = cc11001100_hook("b.partpages", partPages, "assign")), !1), "var-init"), I = cc11001100_hook("I", "", "var-init"), _ = cc11001100_hook("_", "", "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < trapHolder.length; k++) {
      for (var I = cc11001100_hook("I", "", "var-init"), j = cc11001100_hook("j", $(trapHolder[k]).find("input").toArray(), "var-init"), T = cc11001100_hook("T", new Array(), "var-init"), A = cc11001100_hook("A", 0, "var-init"); A < j.length; A++) j[A].checked && T.push(j[A].value);
      T.sort(function (e, t) {
        return e - t;
      });
      for (A = cc11001100_hook("A", 0, "assign"); A < T.length; A++) I += cc11001100_hook("I", T[A] + ",", "assign");
      var S = cc11001100_hook("S", trapHolder[k].getAttribute("trapanswer"), "var-init");
      if (I && S && -1 == I.indexOf(S)) {
        C = cc11001100_hook("C", !0, "assign"), _ = cc11001100_hook("_", trapHolder[k].getAttribute("tikuindex"), "assign");
        break;
      }
    }
    C && (g += cc11001100_hook("g", "&ite=1&ics=" + encodeURIComponent(_ + ";" + I), "assign"));
    var f = cc11001100_hook("f", !1, "var-init"),
      y = cc11001100_hook("y", window.getMaxWidth || 1800, "var-init"),
      N = cc11001100_hook("N", encodeURIComponent(h), "var-init"),
      O = cc11001100_hook("O", (window.submitWithGet && N.length <= y && (f = cc11001100_hook("f", !0, "assign")), debugLog("开始提交"), f ? (g += cc11001100_hook("g", "&submitdata=" + N, "assign"), window.partPages && (g += cc11001100_hook("g", "&partpages=" + encodeURIComponent(partPages), "assign")), g += cc11001100_hook("g", "&useget=1", "assign")) : window.submitWithGet && (window.postIframe = cc11001100_hook("window.postIframe", 1, "assign")), getlang("networkerr")), "var-init");
    debugLog("提交数据：" + h), addpostlog(h), window.postIframe ? (debugLog("postIframe"), postWithIframe(g, h)) : (window.isSubmiting = cc11001100_hook("window.isSubmiting", !0, "assign"), f ? (debugLog("ajaxget"), $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", g, "object-key-init"),
      success: function (e) {
        window.isSubmiting = cc11001100_hook("window.isSubmiting", !1, "assign"), 0 == e.indexOf("<html><script>") && 0 < e.indexOf("aliyunwaf") ? ($("#ValError").html(O + "(waf rule block)"), $("#captchaTit").html(O + "(waf rule block)"), $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show(), debugLog(e)) : (afterSubmit(e, s, a), (window.isInterview2 || window.ytyyauto) && i && "10" == e.split("〒")[0] && (e = cc11001100_hook("e", e.split("&"), "assign"), nfjoinid = cc11001100_hook("nfjoinid", e[1].split("=")[1], "assign"), (e = cc11001100_hook("e", e.filter(function (e) {
          return -1 < e.indexOf("pz=");
        }), "assign")).length) && (pz = cc11001100_hook("pz", e[0].split("=")[1], "assign")));
      },
      error: function (e) {
        window.isSubmiting = cc11001100_hook("window.isSubmiting", !1, "assign"), $("#ValError").html(O), $("#captchaTit").html(O), $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show(), debugLog(JSON.stringify(e));
      }
    })) : (debugLog("ajaxpost"), debugLog(g), debugLog(b), $.ajax({
      type: cc11001100_hook("type", "POST", "object-key-init"),
      url: cc11001100_hook("url", g, "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init"),
      dataType: cc11001100_hook("dataType", "text", "object-key-init"),
      success: function (e) {
        window.isSubmiting = cc11001100_hook("window.isSubmiting", !1, "assign"), 0 == e.indexOf("<html><script>") && 0 < e.indexOf("aliyunwaf") ? ($("#ValError").html(O + "(waf rule block)"), $("#captchaTit").html(O + "(waf rule block)"), $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show(), debugLog(e)) : (afterSubmit(e, s, a), (window.isInterview2 || window.ytyyauto) && i && "10" == e.split("〒")[0] && (e = cc11001100_hook("e", e.split("&"), "assign"), nfjoinid = cc11001100_hook("nfjoinid", e[1].split("=")[1], "assign"), (e = cc11001100_hook("e", e.filter(function (e) {
          return -1 < e.indexOf("pz=");
        }), "assign")).length) && (pz = cc11001100_hook("pz", e[0].split("=")[1], "assign")));
      },
      error: function (e) {
        window.isSubmiting = cc11001100_hook("window.isSubmiting", !1, "assign"), $("#ValError").html(O), $("#captchaTit").html(O), debugLog(JSON.stringify(e)), $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show();
      }
    })));
  }
}
function postWithIframe(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", document.createElement("div"), "var-init"),
    i = cc11001100_hook("i", (i.style.display = cc11001100_hook("i.style.display", "none", "assign"), i.innerHTML = cc11001100_hook("i.innerHTML", "<iframe id='mainframe' name='mainframe' style='display:none;' > </iframe><form target='mainframe' data-ajax='false' id='frameform' action='' method='post' enctype='application/x-www-form-urlencoded'><input  value='' id='submitdata' name='submitdata' type='hidden'><input  value='' id='partpages' name='partpages' type='hidden'><input type='submit' value='提交' ></form>", "assign"), document.body.appendChild(i), document.getElementById("submitdata").value = cc11001100_hook("document.getElementById(\"submitdata\").value", t, "assign"), window.partPages && (document.getElementById("partpages").value = cc11001100_hook("document.getElementById(\"partpages\").value", partPages, "assign")), document.getElementById("frameform")), "var-init");
  i.action = cc11001100_hook("i.action", e + "&iframe=1", "assign"), i.submit();
}
var havereturn = cc11001100_hook("havereturn", !1, "var-init"),
  timeoutTimer = cc11001100_hook("timeoutTimer", null, "var-init");
function processError(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  havereturn || (havereturn = cc11001100_hook("havereturn", !0, "assign"), $("#ValError").html(getlang("submit_timeout")), $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show()), timeoutTimer && clearTimeout(timeoutTimer);
}
var nvvv = cc11001100_hook("nvvv", 0, "var-init"),
  hasaddtolog = cc11001100_hook("hasaddtolog", !1, "var-init");
function addtolog(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", document.createElement("img"), "var-init"),
    i = cc11001100_hook("i", window.isWeiXin ? 1 : 0, "var-init"),
    a = cc11001100_hook("a", window.isVip || 0, "var-init"),
    n = cc11001100_hook("n", (!a && window.needAddList && (a = cc11001100_hook("a", 11, "assign")), window.isQywx ? 1 : 0), "var-init"),
    r = cc11001100_hook("r", window.emUserName || "", "var-init"),
    o = cc11001100_hook("o", window.isJieLong ? "&jl=1" : "", "var-init"),
    i = cc11001100_hook("i", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityfinish/track.gif?APIVersion=0.6.0&activity=" + activityId + "&source=1&weixin=" + i + "&vip=" + a + "&qtype=" + cqType + "&qw=" + n + "&name=" + encodeURIComponent(r) + o, "var-init");
  window.needLogCompanyId && (i += cc11001100_hook("i", "&cid=" + needLogCompanyId, "assign")), t.onload = cc11001100_hook("t.onload", t.onerror = cc11001100_hook("t.onerror", function () {
    hasaddtolog = cc11001100_hook("hasaddtolog", !0, "assign");
  }, "assign"), "assign"), t.src = cc11001100_hook("t.src", i, "assign"), window.addtoSyncExternalUserLog ? window.needSyncExternalUser && addtoSyncExternalUserLog() : addtosampledata();
}
var hasaddpost = cc11001100_hook("hasaddpost", !1, "var-init");
function addpostlog(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", document.createElement("img"), "var-init"),
    e = cc11001100_hook("e", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitypostdata/track.gif?APIVersion=0.6.0&a=" + activityId + "&pd=" + encodeURIComponent(e || "") + "&ua=" + encodeURIComponent(navigator.userAgent), "var-init");
  t && (e += cc11001100_hook("e", "&type=" + t, "assign")), 2 == t && (i.onload = cc11001100_hook("i.onload", i.onerror = cc11001100_hook("i.onerror", function () {
    hasaddpost = cc11001100_hook("hasaddpost", !0, "assign");
  }, "assign"), "assign")), i.src = cc11001100_hook("i.src", e, "assign");
}
function addreportlog(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", document.createElement("img"), "var-init"),
    a = cc11001100_hook("a", (t = cc11001100_hook("t", t || "tousu", "assign"), window.location.href), "var-init");
  "wxbigfontsize" == t && (a = cc11001100_hook("a", e, "assign"), e = cc11001100_hook("e", "", "assign")), i.src = cc11001100_hook("i.src", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/applog/track.gif?APIVersion=0.6.0&activity=" + activityId + "&action=" + t + "&url=" + encodeURIComponent(a) + "&ua=" + encodeURIComponent(navigator.userAgent) + "&ip=" + encodeURIComponent(e), "assign");
}
function addtoactivitysave(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", document.createElement("img"), "var-init"),
    e = cc11001100_hook("e", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitysave/track.gif?APIVersion=0.6.0&activity=" + activityId + "&data=" + encodeURIComponent(e) + "&ua=" + encodeURIComponent(navigator.userAgent) + "&lc=" + lastCostTime, "var-init");
  window.shareGuid && (e += cc11001100_hook("e", "&sg=" + shareGuid, "assign")), t.src = cc11001100_hook("t.src", e, "assign");
}
function addtoVisitLog() {
  addtoForein();
}
var needLogGender = cc11001100_hook("needLogGender", !1, "var-init");
function getGenderLoc() {
  return window.gender ? gender : window.localStorage ? (gender = cc11001100_hook("gender", localStorage.getItem("wjxge") || "", "assign"), needLogGender = cc11001100_hook("needLogGender", !0, "assign"), gender) : "";
}
function getSALoc() {
  return window.startAge ? startAge : window.localStorage ? (startAge = cc11001100_hook("startAge", localStorage.getItem("wjxsa") || "", "assign"), needLogGender = cc11001100_hook("needLogGender", !0, "assign"), startAge) : "";
}
function getEALoc() {
  return window.endAge ? endAge : window.localStorage ? (endAge = cc11001100_hook("endAge", localStorage.getItem("wjxea") || "", "assign"), needLogGender = cc11001100_hook("needLogGender", !0, "assign"), endAge) : "";
}
function getMarrLoc() {
  return window.marriage ? marriage : window.localStorage ? (marriage = cc11001100_hook("marriage", localStorage.getItem("wjxma") || "", "assign"), needLogGender = cc11001100_hook("needLogGender", !0, "assign"), marriage) : "";
}
function getEduLoc() {
  return window.education ? education : window.localStorage ? (education = cc11001100_hook("education", localStorage.getItem("wjxed") || "", "assign"), needLogGender = cc11001100_hook("needLogGender", !0, "assign"), education) : "";
}
function logsampledata() {
  var e;
  window.localStorage && needLogGender && allowAward && (e = cc11001100_hook("e", [], "assign"), localStorage.getItem("wjxge") && e.push("gender:" + localStorage.getItem("wjxge")), localStorage.getItem("wjxsa") && e.push("startage:" + localStorage.getItem("wjxsa")), localStorage.getItem("wjxea") && e.push("endage:" + localStorage.getItem("wjxea")), localStorage.getItem("wjxma") && e.push("marriage:" + localStorage.getItem("wjxma")), localStorage.getItem("wjxed") && e.push("education:" + localStorage.getItem("wjxed")), localStorage.getItem("wjxmo") && e.push("mobs:" + localStorage.getItem("wjxmo")), 0 != e.length) && addpostlog(e.join(), 1);
}
function addtosampledata() {
  try {
    var e,
      t,
      i,
      a = cc11001100_hook("a", openid || wxUserId || "", "var-init");
    window.saveContact && ((e = cc11001100_hook("e", new Date(), "assign")).setTime(e.getTime() + 6e5), modata && setCookie("mob_" + activityId, modata, e.toUTCString(), "/", "", null), emaildata && setCookie("em_" + activityId, emaildata, e.toUTCString(), "/", "", null), rName && setCookie("rn_" + activityId, rName, e.toUTCString(), "/", "", null), birthday) && setCookie("bir_" + activityId, birthday, e.toUTCString(), "/", "", null), (window.wxappId && a || modata) && (t = cc11001100_hook("t", document.createElement("img"), "assign"), i = cc11001100_hook("i", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/sampledata/track.gif?APIVersion=0.6.0&activity=" + activityId + "&appid=" + encodeURIComponent(wxappId) + "&openid=" + encodeURIComponent(a), "assign"), unionId && (i += cc11001100_hook("i", "&unionid=" + encodeURIComponent(unionId), "assign")), window.corpId && (i += cc11001100_hook("i", "&corp=" + corpId, "assign")), window.marriage && (i += cc11001100_hook("i", "&marriage=" + marriage, "assign")), window.gender && (i += cc11001100_hook("i", "&gender=" + gender, "assign")), window.education && (i += cc11001100_hook("i", "&education=" + education, "assign")), window.familiy && (i += cc11001100_hook("i", "&familiy=" + familiy, "assign")), window.curProvince && (i += cc11001100_hook("i", "&province=" + encodeURIComponent(curProvince), "assign")), window.curCity && (i += cc11001100_hook("i", "&city=" + encodeURIComponent(curCity), "assign")), modata && (i += cc11001100_hook("i", "&mob=" + modata, "assign")), emaildata && (i += cc11001100_hook("i", "&email=" + encodeURIComponent(emaildata), "assign")), rName && (i += cc11001100_hook("i", "&name=" + encodeURIComponent(rName), "assign")), birthday && (i += cc11001100_hook("i", "&birthday=" + encodeURIComponent(birthday), "assign")), t.src = cc11001100_hook("t.src", i, "assign"));
  } catch (e) {}
}
function addtoForein() {
  var e, t;
  !window.curProvince || "国外" != curProvince && "香港" != curProvince && "台湾" != curProvince && "澳门" != curProvince || document.getElementById("divContent") && (e = cc11001100_hook("e", document.createElement("img"), "assign"), window.LogStoreLocal, t = cc11001100_hook("t", $.trim($("#htitle").text() || document.title), "assign"), e.src = cc11001100_hook("e.src", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/foreinvisit/track.gif?APIVersion=0.6.0&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(t) + "&p=" + encodeURIComponent(curProvince) + "&c=" + encodeURIComponent(curCity) + "&ip=" + encodeURIComponent(curIp) + "&m=1&fh=" + (window.curFuHe || 0) + "&cr=" + (window.curCheckResult || 0), "assign"));
}
function putWebTracking(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  var n = cc11001100_hook("n", "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitypost/track", "var-init"),
    r = cc11001100_hook("r", t.indexOf("큐"), "var-init"),
    r = cc11001100_hook("r", (0 < r && "jpn" == (t = cc11001100_hook("t", t.substr(r + 1), "assign")).substr(0, r) && (n = cc11001100_hook("n", "//wjx-jpn.ap-northeast-1.log.aliyuncs.com/logstores/activitypost/track", "assign")), JSON.stringify({
      __logs__: cc11001100_hook("__logs__", [{
        activity: cc11001100_hook("activity", activityId.toString(), "object-key-init"),
        index: cc11001100_hook("index", a, "object-key-init"),
        url: cc11001100_hook("url", e, "object-key-init"),
        content: cc11001100_hook("content", t, "object-key-init"),
        status: cc11001100_hook("status", "success" == i ? "成功" : "失败", "object-key-init"),
        message: cc11001100_hook("message", i, "object-key-init"),
        source: cc11001100_hook("source", "WebAjax", "object-key-init")
      }], "object-key-init")
    })), "var-init");
  $.ajax({
    url: cc11001100_hook("url", n, "object-key-init"),
    type: cc11001100_hook("type", "POST", "object-key-init"),
    headers: {
      "x-log-apiversion": cc11001100_hook("x-log-apiversion", "0.6.0", "object-key-init"),
      "x-log-bodyrawsize": cc11001100_hook("x-log-bodyrawsize", r.length, "object-key-init"),
      "Content-Type": cc11001100_hook("Content-Type", "application/json", "object-key-init")
    },
    data: cc11001100_hook("data", r, "object-key-init"),
    timeout: cc11001100_hook("timeout", 2e3, "object-key-init"),
    async: cc11001100_hook("async", !1, "object-key-init"),
    success: function (e, t, i) {
      i = cc11001100_hook("i", i.getResponseHeader("x-log-requestid"), "assign");
      console.log(i);
    },
    error: function (e, t, i) {
      console.log(t);
    }
  });
}
function addtoActivityPost(e, t, i, a, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  "success" != i && t && addtoActivityPostFailed(a, n), putWebTracking(e, t, i, a);
}
function addtoActivityPostFailed(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  $.ajax({
    url: cc11001100_hook("url", "/joinnew/afterajaxfailed.ashx", "object-key-init"),
    type: cc11001100_hook("type", "POST", "object-key-init"),
    data: {
      vid: cc11001100_hook("vid", activityId, "object-key-init"),
      index: cc11001100_hook("index", e, "object-key-init"),
      i: cc11001100_hook("i", t, "object-key-init")
    },
    timeout: cc11001100_hook("timeout", 3e3, "object-key-init"),
    success: function (e) {}
  });
}
function matchDayTitle() {
  var e = cc11001100_hook("e", $.trim($("#htitle").text() || document.title), "var-init");
  return !!e && (-1 != e.indexOf("每天") || -1 != e.indexOf("每日") || -1 != e.indexOf("每周"));
}
function needSaveTmp() {
  return !(1 != window.needSaveJoin || window.cepingCandidate || !window.preserveAnswer && (!matchDayTitle() || !allQArray || 100 < allQArray.length));
}
function needAdjustVideo() {
  return !!window.adjustVideo || !!(allQArray && allQArray.length <= 50);
}
function transLang(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", e, "var-init");
  return t = cc11001100_hook("t", "很抱歉，您填写的次数已到最大限制！" == e && getlang("ansmaxtimes") ? getlang("ansmaxtimes") : t, "assign");
}
function afterSubmit(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  $("#ValError").html(""), $("#captchaTit").html(""), havereturn = cc11001100_hook("havereturn", !0, "assign"), debugLog("提交成功"), hasaddpost = cc11001100_hook("hasaddpost", !1, "assign"), addpostlog(e, 2), window.userBehavior_logJournal && userBehavior_logJournal("submitted", "", {}, "submit", new Date().getTime());
  var a = cc11001100_hook("a", e.split("〒"), "var-init"),
    n = cc11001100_hook("n", a[0], "var-init"),
    r = cc11001100_hook("r", transLang(a[1] || getlang("submit_err").replace("{0}", a[0])), "var-init");
  if (clientAnswerSend && 10 != n && 11 != n && 3 != t) try {
    saveSubmitAnswer(clientAnswerSend);
  } catch (e) {}
  if (jqnonce = cc11001100_hook("jqnonce", activityId + "" + new Date().getTime(), "assign"), window.isinterview && -1 < e.indexOf("&valid=0")) window.isInterview2 || reportSend(getlang("tit_submit_interviewfail"));else if (window.sensorsLog && sensorsLog(n), 10 == n) {
    if (window.isSubmiting = cc11001100_hook("window.isSubmiting", !0, "assign"), window.joinIdnew && 0 < window.joinIdnew || window.isQywxAnswerChangeUrl) return o = cc11001100_hook("o", "/resultquery.aspx?activity=" + activityId, "assign"), window.hasJoinPermit && (o += cc11001100_hook("o", "&query=1", "assign")), window.isQywxAnswerChangeUrl ? o = cc11001100_hook("o", window.isQywxAnswerChangeUrl, "assign") : window.isJielongYHTXEdit && window.activityShortUrl && 0 < window.activityShortUrl.length ? o = cc11001100_hook("o", window.activityShortUrl, "assign") : (window.isJielongAdminEdit && window.jlViewJoinPageUrl && 0 < window.jlViewJoinPageUrl.length && (o = cc11001100_hook("o", jlViewJoinPageUrl, "assign")), (window.isWxLogin || window.isJielongQywxEdit) && (o = cc11001100_hook("o", "/user/resultquery.aspx?activity=" + activityId, "assign")), window.isActivityRel && (o = cc11001100_hook("o", "/user/joinrelquery.aspx?activity=" + activityId, "assign")), window.sojumpParm && window.parmsign && (l = cc11001100_hook("l", window.parmkey || "sojumpparm", "assign"), o = cc11001100_hook("o", "/user/resultquery.aspx?activity=" + activityId + "&" + l + "=" + encodeURIComponent(sojumpParm) + "&parmsign=" + encodeURIComponent(parmsign) + "&endts=" + endTs + "&isedit=" + (window.isEdit || ""), "assign")), window.isFromFlow && (o = cc11001100_hook("o", "/flow/newsdetails.aspx?activity=" + activityId + "&joinid=" + window.joinIdnew, "assign"), window.isHandle ? o = cc11001100_hook("o", o + "&uid=" + window.uid, "assign") : o += cc11001100_hook("o", "&isEdit=1", "assign"), 1 == window.isFromAdmin && (o += cc11001100_hook("o", "&ia=1", "assign")), window.user_token) && (o = cc11001100_hook("o", o + "&user_token=" + encodeURIComponent(user_token), "assign")), window.isFromWarn && (o = cc11001100_hook("o", "/warn/newsdetails.aspx?activity=" + activityId + "&joinid=" + window.joinIdnew, "assign"))), l = cc11001100_hook("l", getlang("tit_submit_success"), "assign"), l = cc11001100_hook("l", 2 != window.isChuangGuan || window.hasChuGuanSuc ? '<div class="submit_tip_color" style="width: 106px;height: 40px;line-height:40px;background: #FFFFFF;box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);border-radius: 4px;font-size: 14px;font-weight: 500;margin:0 auto;text-align:center;"><i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + l + "</div>" : getlang("chuanguang_fail"), "assign"), $(".footer").show(), $("#ValError").html(l), $("#captchaTit").html(l), clearAnswer(), window.ishydj ? void $("#ctlNext").show() : void setTimeout(function () {
      locationReplace(o);
    }, 1500);
    0 < maxCheatTimes && ((f = cc11001100_hook("f", new Date(), "assign")).setTime(f.getTime() - 864e5), setCookie(activityId + "_cheatTimes", 0, f.toUTCString(), "/", "", null), localStorage.removeItem("preventcheat_" + activityId));
    var o,
      s = cc11001100_hook("s", (o = cc11001100_hook("o", a[1], "assign")).replace("complete.aspx", "completemobile2.aspx").replace("?q=", "?activity=").replace("&joinid=", "&joinactivity=").replace("&JoinID=", "&joinactivity="), "var-init");
    window.isYdb && (s += cc11001100_hook("s", "&ydb=1", "assign")), window.isPvw && (s += cc11001100_hook("s", "&pvw=1", "assign")), window.isQywx && (s += cc11001100_hook("s", "&qw=1", "assign")), "miniprogram" === window.__wxjs_environment && (s += cc11001100_hook("s", "&minip=1", "assign")), document.referrer && document.referrer && !window.isactivity && document.referrer != window.location.href.split("#")[0] && !window.access_token && -1 == document.referrer.indexOf("VerifyPasswordMobile2.aspx") && (s += cc11001100_hook("s", "&rfrr=1", "assign")), window.touPiaoCount && (s += cc11001100_hook("s", "&tpcnt=" + touPiaoCount, "assign")), window.corpId && (s += cc11001100_hook("s", "&corpId=" + encodeURIComponent(corpId), "assign")), window.udsid && (s += cc11001100_hook("s", "&udsid=" + window.udsid, "assign")), window.autoLangv && (s += cc11001100_hook("s", "&langv=" + autoLangv, "assign")), window.flist && (s += cc11001100_hook("s", "&flist=1", "assign")), 2 == window.isChuangGuan && (window.hasChuGuanSuc ? s += cc11001100_hook("s", "&hcgs=1&newres=1", "assign") : s += cc11001100_hook("s", "&hcgs=0&newres=1", "assign")), window.canOpenWxTag && (s += cc11001100_hook("s", "&owxt=1", "assign")), (!window.completeResultType || 3 == window.completeResultType) && 2 < window.isChuangGuan && (s += cc11001100_hook("s", "&newres=1", "assign")), (startAge || getSALoc()) && (s += cc11001100_hook("s", "&sa=" + encodeURIComponent(startAge), "assign")), (endAge || getEALoc()) && (s += cc11001100_hook("s", "&ea=" + encodeURIComponent(endAge), "assign")), (gender || getGenderLoc()) && (s += cc11001100_hook("s", "&ge=" + gender, "assign")), (marriage || getMarrLoc()) && (s += cc11001100_hook("s", "&marr=" + marriage, "assign")), (education || getEduLoc()) && (s += cc11001100_hook("s", "&educ=" + education, "assign")), window.wxnewfs && (s += cc11001100_hook("s", "&wxfs=" + wxnewfs, "assign")), familiy && (s += cc11001100_hook("s", "&fami=" + familiy, "assign")), startIncome && (s += cc11001100_hook("s", "&si=" + encodeURIComponent(startIncome), "assign")), endIncome && (s += cc11001100_hook("s", "&ei=" + encodeURIComponent(endIncome), "assign")), window.newAward && (s += cc11001100_hook("s", "&nw=" + encodeURIComponent(window.newAward), "assign")), logsampledata();
    (f = cc11001100_hook("f", new Date(), "assign")).setTime(f.getTime() + 18e5), jpMatchId && (s += cc11001100_hook("s", "&jpm=" + jpMatchId, "assign")), window.refDepartment && (s += cc11001100_hook("s", "&rdept=" + encodeURIComponent(window.refDepartmentVal), "assign")), window.refUserId && (s += cc11001100_hook("s", "&ruserid=" + encodeURIComponent(window.refUserIdVal), "assign")), window.openid && window.enableCtj && (window.refUserIdVal = cc11001100_hook("window.refUserIdVal", window.openid, "assign"), s += cc11001100_hook("s", "&ruserid=" + encodeURIComponent(window.refUserIdVal), "assign")), window.relusername && window.enableCtj && (window.refUserIdVal = cc11001100_hook("window.refUserIdVal", window.relusername, "assign"), s += cc11001100_hook("s", "&ruserid=" + encodeURIComponent(window.refUserIdVal), "assign")), window.parterrealname && (s += cc11001100_hook("s", "&parterrealname=" + encodeURIComponent(window.parterrealname), "assign")), window.parterdept && (s += cc11001100_hook("s", "&parterdept=" + encodeURIComponent(parterdept), "assign")), window.parterpuser && (s += cc11001100_hook("s", "&parterpuser=" + encodeURIComponent(parterpuser), "assign")), window.parterextf && (s += cc11001100_hook("s", "&parterextf=" + encodeURIComponent(parterextf), "assign")), window.wxUserId && (($("#hrefGoBack2")[0] || 0 < window.location.href.indexOf("isexternal=1")) && (s += cc11001100_hook("s", "&wxuserid=" + encodeURIComponent(window.wxUserId), "assign")), getQueryVariable("previd") && (s += cc11001100_hook("s", "&previd=" + getQueryVariable("previd"), "assign")), getQueryVariable("pushsign")) && (s += cc11001100_hook("s", "&pushsign=" + encodeURIComponent(getQueryVariable("pushsign")), "assign")), window.sojumpParm && (s += cc11001100_hook("s", "&sojumpparm=" + encodeURIComponent(sojumpParm), "assign")), inviteid && (s += cc11001100_hook("s", "&inviteid=" + encodeURIComponent(inviteid), "assign")), window.jbkid && (s += cc11001100_hook("s", "&jbkid=" + jbkid, "assign")), window.sourceurl && (s += cc11001100_hook("s", "&source=" + encodeURIComponent(sourceurl), "assign")), window.sjUser && (s += cc11001100_hook("s", "&sjUser=" + encodeURIComponent(sjUser), "assign")), window.sjts && (s += cc11001100_hook("s", "&sjts=" + sjts, "assign")), window.sjsign && (s += cc11001100_hook("s", "&sjsign=" + encodeURIComponent(sjsign), "assign")), window.FromSj && (s += cc11001100_hook("s", "&fromsj=1", "assign")), window.parterjoiner && (s += cc11001100_hook("s", "&parterjoiner=" + encodeURIComponent(parterjoiner), "assign")), window.needHideShare && (s += cc11001100_hook("s", "&nhs=1", "assign")), !window.isSimple && window.top == window || (s += cc11001100_hook("s", "&s=t", "assign"), window.top == window) || (s += cc11001100_hook("s", "&iframe=1", "assign")), window.sourcename && (s += cc11001100_hook("s", "&souname=" + encodeURIComponent(sourcename), "assign")), window.touPiaoItemIndex && (s += cc11001100_hook("s", "&tpii=" + touPiaoItemIndex, "assign")), window.user_token && (s += cc11001100_hook("s", "&user_token=" + encodeURIComponent(window.user_token), "assign")), window.nbk && (s += cc11001100_hook("s", "&nbk=1", "assign")), !window.wxthird && window.access_token && window.hashb && (s += cc11001100_hook("s", "&access_token=" + encodeURIComponent(access_token) + "&openid=" + encodeURIComponent(openid), "assign")), setCookie("join_" + activityId, "1", f.toUTCString(), "/", "", null), 0 < totalMoney && (s += cc11001100_hook("s", "&ishop=1", "assign")), getQueryVariable("creativeid") && getQueryVariable("clickid") ? s += cc11001100_hook("s", "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid"), "assign") : getQueryVariable("callback") ? s += cc11001100_hook("s", "&callback=" + encodeURIComponent(getQueryVariable("callback")), "assign") : getQueryVariable("bd_vid") ? s += cc11001100_hook("s", "&bd_vid=" + getQueryVariable("bd_vid"), "assign") : getQueryVariable("trackid") ? s += cc11001100_hook("s", "&trackid=" + getQueryVariable("trackid"), "assign") : getQueryVariable("click_id") ? s += cc11001100_hook("s", "&click_id=" + getQueryVariable("click_id"), "assign") : getQueryVariable("jdParams") && (s += cc11001100_hook("s", "&jdParams=" + getQueryVariable("jdParams"), "assign")), (getQueryVariable("callback") || getQueryVariable("uniqueKey")) && _ks_trace.push({
      event: cc11001100_hook("event", "form", "object-key-init"),
      convertId: cc11001100_hook("convertId", 505382, "object-key-init"),
      cb: function () {
        alert(convert_id);
      }
    }), window.userBehavior_logJournal && ((!(f = cc11001100_hook("f", getQueryVariable("joinactivity", s), "assign")) || f <= 0) && (f = cc11001100_hook("f", getQueryVariable("joinid", s), "assign")), userBehavior_logJournal("submitted", "", {
      joinid: cc11001100_hook("joinid", f, "object-key-init")
    }, "submit", new Date().getTime())), clearAnswer(), hasaddtolog = cc11001100_hook("hasaddtolog", !1, "assign"), addtolog(s);
    var l = cc11001100_hook("l", getlang("tit_submit_success"), "var-init");
    (l = cc11001100_hook("l", 2 != window.isChuangGuan || window.hasChuGuanSuc ? '<div class="submit_tip_color" style="height: 40px;line-height:40px;background: #FFFFFF;box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);border-radius: 4px;font-size: 14px;font-weight: 500;margin:0 auto;text-align:center;color:#262626;display:inline-block;padding: 0 20px;"><i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + l + "</div>" : getlang("chuanguang_fail"), "assign"), window.isinterview || (window.isytyy ? i && ($("#divPrev").hide(), $("#divNext").hide(), $(".footer").show(), $("#ValError").html(l), $("#captchaTit").html(l)) : ($(".footer").show(), $("#ValError").html(l), $("#captchaTit").html(l))), window.oneneedcontcp) ? process360Jump(s) : (m = cc11001100_hook("m", 1400, "assign"), a[3] && doAjaxPost(a[3] || "", a[4] || "", s.match(/&sojumpindex=(\d*)&/)[1]), -1 < window.location.href.indexOf("wjxmp=1") && (s += cc11001100_hook("s", "&wjxmp=1", "assign")), p = cc11001100_hook("p", m / (c = cc11001100_hook("c", 200, "assign")), "assign"), u = cc11001100_hook("u", 1, "assign"), w = cc11001100_hook("w", setInterval(function () {
      if (!(u < p) || (u++, hasaddpost && hasaddtolog)) {
        if (clearInterval(w), 1 == window.hasprize && 2 != cqType) s += cc11001100_hook("s", "&cj=1", "assign");else if (window.isinterview && 2 != cqType) return window.maxTimer && clearInterval(maxTimer), void (window.isInterview2 || reportSend($("#thinkText").html()));
        -1 < window.location.href.indexOf("wjxmp=1") && -1 < s.indexOf("completemobile2") && (1 == cqType || 7 == cqType) && 1 == window.jumpOrgMinPro && !window.isJieLong ? wx.miniProgram.redirectTo({
          url: cc11001100_hook("url", "/pages/completemobile/completemobile?tloc=" + encodeURIComponent(s), "object-key-init")
        }) : window.ytyyauto && !i || locationReplace(s);
      }
    }, c), "assign"));
  } else if (11 == n) {
    window.isSubmiting = cc11001100_hook("window.isSubmiting", !0, "assign");
    var d,
      c,
      p,
      u,
      w,
      h = cc11001100_hook("h", a[1], "var-init"),
      f = cc11001100_hook("f", (h ? -1 == h.toLowerCase().indexOf("http://") && -1 == h.toLowerCase().indexOf("https://") && -1 == h.toLowerCase().indexOf("hap://") && -1 == h.toLowerCase().indexOf("dingtalk://") && (h = cc11001100_hook("h", "http://" + h, "assign")) : h = cc11001100_hook("h", window.location.href, "assign"), a[3] || ""), "var-init"),
      g = cc11001100_hook("g", (a[4], a[5] || ""), "var-init"),
      l = cc11001100_hook("l", (window.wxthird && window.openid && (-1 < h.indexOf("?") ? h += cc11001100_hook("h", "&", "assign") : h += cc11001100_hook("h", "?", "assign"), h += cc11001100_hook("h", "openid=" + encodeURIComponent(openid), "assign")), window.access_token && window.openid && -1 < h.toLowerCase().indexOf("ksres.aspx") && (d = cc11001100_hook("d", "sojumpindex=" + (l = cc11001100_hook("l", f.split(","), "assign"))[0], "assign"), d = cc11001100_hook("d", -1 < h.indexOf("?") ? "&" + d : "?" + d, "assign"), l[1] && (d += cc11001100_hook("d", "&totalvalue=" + l[1], "assign")), l[2] && (d += cc11001100_hook("d", "&valuesign=" + encodeURIComponent(l[2]), "assign")), d = cc11001100_hook("d", (d += cc11001100_hook("d", "&access_token=" + encodeURIComponent(access_token), "assign")) + "&openid=" + encodeURIComponent(openid), "assign"), h += cc11001100_hook("h", d, "assign")), window.parterjoiner && (-1 < h.indexOf("?") ? h += cc11001100_hook("h", "&", "assign") : h += cc11001100_hook("h", "?", "assign"), h += cc11001100_hook("h", "parterjoiner=" + encodeURIComponent(parterjoiner), "assign")), a[2]), "var-init"),
      m = cc11001100_hook("m", 1e3, "var-init");
    (l && 0 == window.jiFenBao && "不提示" != l && ($("#ValError").html(l), m = cc11001100_hook("m", 1600, "assign")), debugLog(l), clearAnswer(), hasaddtolog = cc11001100_hook("hasaddtolog", !1, "assign"), addtolog(h), window.oneneedcontcp) ? process360Jump(h) : (a[6] && doAjaxPost(a[6] || "", a[5] || "", f = cc11001100_hook("f", a[3] || "", "assign")), p = cc11001100_hook("p", m / (c = cc11001100_hook("c", 200, "assign")), "assign"), u = cc11001100_hook("u", 1, "assign"), w = cc11001100_hook("w", setInterval(function () {
      u < p && (u++, !hasaddpost || !hasaddtolog) || (clearInterval(w), -1 == h.toLowerCase().indexOf("hap://") && g ? openPostWindow(h, g, "_self") : location.replace(h));
    }, c), "assign"));
  } else {
    if (3 == t) {
      if (12 == n) return to_next_page(), $("#ctlNext").show(), $("#lxNextBtn").show(), void $("#ytyyNextBtn").show();
      if (13 == n) return d = cc11001100_hook("d", a[1], "assign"), l = cc11001100_hook("l", a[2] || "0", "assign"), window.infwSubmit && window.informeNoBtnJumplink ? void location.replace(informeNoBtnJumplink) : (o = cc11001100_hook("o", "/wjx/join/completemobile2.aspx?activity=" + activityId + "&joinactivity=" + d, "assign"), o += cc11001100_hook("o", "&v=" + l, "assign"), window.infwSubmit && (o += cc11001100_hook("o", "&infw=0", "assign")), window.isytyy && (o += cc11001100_hook("o", "&isytyy=1", "assign")), window.ytyyframe && (o += cc11001100_hook("o", "&iframe=1", "assign")), !window.isSimple && window.top == window || (o += cc11001100_hook("o", "&s=t", "assign")), setCookie("join_" + activityId, "1", null, "/", "", null), window.sjUser && (o += cc11001100_hook("o", "&sjUser=" + encodeURIComponent(sjUser), "assign")), window.sjts && (o += cc11001100_hook("o", "&sjts=" + sjts, "assign")), window.sjsign && (o += cc11001100_hook("o", "&sjsign=" + encodeURIComponent(sjsign), "assign")), window.FromSj && (o += cc11001100_hook("o", "&fromsj=1", "assign")), window.sourceurl && (o += cc11001100_hook("o", "&source=" + encodeURIComponent(sourceurl), "assign")), window.sojumpParm && (o += cc11001100_hook("o", "&sojumpparm=" + encodeURIComponent(sojumpParm), "assign")), window.u && (o += cc11001100_hook("o", "&u=" + encodeURIComponent(window.u), "assign")), window.userSystem && (o += cc11001100_hook("o", "&userSystem=" + encodeURIComponent(window.userSystem), "assign")), window.systemId && (o += cc11001100_hook("o", "&systemId=" + encodeURIComponent(window.systemId), "assign")), window.newAward && (o += cc11001100_hook("o", "&nw=" + encodeURIComponent(window.newAward), "assign")), window.autoLangv && (o += cc11001100_hook("o", "&langv=" + autoLangv, "assign")), a[3] && (o += cc11001100_hook("o", "&comsign=" + encodeURIComponent(a[3]), "assign")), getQueryVariable("creativeid") && getQueryVariable("clickid") ? o += cc11001100_hook("o", "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid"), "assign") : getQueryVariable("callback") ? o += cc11001100_hook("o", "&callback=" + encodeURIComponent(getQueryVariable("callback")), "assign") : getQueryVariable("bd_vid") ? o += cc11001100_hook("o", "&bd_vid=" + getQueryVariable("bd_vid"), "assign") : getQueryVariable("jdParams") ? o += cc11001100_hook("o", "&jdParams=" + getQueryVariable("jdParams"), "assign") : getQueryVariable("trackid") ? o += cc11001100_hook("o", "&trackid=" + encodeURIComponent(getQueryVariable("trackid")), "assign") : getQueryVariable("click_id") && (o += cc11001100_hook("o", "&click_id=" + encodeURIComponent(getQueryVariable("click_id")), "assign")), clearAnswer(!0), void location.replace(o));
      if (11 == n) return;
      if (5 == n) return void alertNew(r);
      if (a[2]) return alertNew(a[2]), void $("#divNext").show();
    } else if (9 == n || 16 == n || 23 == n) {
      9 == n && (rName = cc11001100_hook("rName", "", "assign"), hasMatchName = cc11001100_hook("hasMatchName", !1, "assign"));
      var v = cc11001100_hook("v", (y = cc11001100_hook("y", parseInt(a[1]), "assign")) + 1 + "", "var-init"),
        f = cc11001100_hook("f", a[2] || getlang("submit_error"), "var-init");
      if (alertNew(f = cc11001100_hook("f", -1 < f.indexOf("您提交的答案不符合要求") && getlang("submit_error") ? getlang("submit_error") : f, "assign")), 23 != n || -1 != y) {
        if (questionsObject[v]) {
          for (var x = cc11001100_hook("x", -1, "var-init"), y = cc11001100_hook("y", 0, "var-init"); y < pageHolder.length; y++) {
            for (var b = cc11001100_hook("b", pageHolder[y].questions, "var-init"), C = cc11001100_hook("C", !1, "var-init"), I = cc11001100_hook("I", 0, "var-init"); I < b.length; I++) if ($(b[I]).attr("id") == $(questionsObject[v]).attr("id")) {
              x = cc11001100_hook("x", y, "assign"), C = cc11001100_hook("C", !0, "assign");
              break;
            }
            if (C) break;
          }
          if (-1 < x && x != cur_page) for (;;) {
            if (show_prev_page(), x == cur_page) break;
            if (0 == cur_page) break;
          }
          writeError(questionsObject[v], f, 3e3), window.kslxshowqs && kslxshowqs(questionsObject[v]), $(questionsObject[v])[0].scrollIntoView(), window.bindUploadMultipleFn && bindUploadMultipleFn($(questionsObject[v])[0]);
        }
        window.isinterview && ($(".interviewOver").removeClass("interviewOver"), window.hasFanishInterview = cc11001100_hook("window.hasFanishInterview", !1, "assign"), $(questionsObject[v]).find(".interview_reanswer").click()), $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show();
      }
    } else {
      if (2 == n || 21 == n) alertNew(r), window.submitWithGet = cc11001100_hook("window.submitWithGet", 1, "assign");else {
        if (4 == n) return alertNew(r), $("#ctlNext").show(), $("#lxNextBtn").show(), void $("#ytyyNextBtn").show();
        if (19 == n || 5 == n) return $("#ValError").html(r), window != window.top && !window.isytyy || alertNew(r), void (window.isytyy && $("#ytyyNextBtn").hide());
        if (17 == n || 34 == n) return void alertNew(getlang("submit_password_repeat"));
        if (22 == n) return window.smartCaptcha || window.initAliyunCaptcha || loasCaptchaJs(), alertNew(2 == window.captchaType ? getlang("submit_need_validate2") : getlang("submit_need_validate"), function () {
          refresh_validate(!0);
        }), nvvv = cc11001100_hook("nvvv", 1, "assign"), $("#ctlNext").show(), $("#lxNextBtn").show(), void $("#ytyyNextBtn").show();
        if (7 == n) return window.smartCaptcha || window.initAliyunCaptcha || loasCaptchaJs(), alertNew(r, function () {
          refresh_validate(!0);
        }), $("#ctlNext").show(), $("#lxNextBtn").show(), void $("#ytyyNextBtn").show();
        if (35 == n) return alertNew("问卷不能使用数字链接"), void $("#ValError").html("问卷不能使用数字链接");
        if (14 == n && "1" == getQueryVariable("ctj")) return void showcjdfinish(a[1], a[2], "/wjx/join/completemobile2.aspx?activityid=" + window.location.pathname.replace("/vm/", "").replace(".aspx", "") + "&ctj=1&ruserid=" + encodeURIComponent(window.refUserIdVal));
        18 == n && clearAnswer(!0), alertNew(a[1] || e);
      }
      $("#ctlNext").show(), $("#lxNextBtn").show(), $("#ytyyNextBtn").show();
    }
    refresh_validate();
  }
}
function doAjaxPost(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  if (e) {
    e = cc11001100_hook("e", e.split("§"), "assign");
    for (var o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) !function (a, n, r) {
      $.ajax({
        url: cc11001100_hook("url", a, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        data: {
          content: cc11001100_hook("content", n, "object-key-init")
        },
        timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
        async: cc11001100_hook("async", !1, "object-key-init"),
        success: function (e, t, i) {
          addtoActivityPost(a, n, t, r, o);
        },
        error: function (e, t, i) {
          addtoActivityPost(a, n, t, r, o);
        }
      });
    }(e[o], t, i);
  }
}
function openPostWindow(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a = cc11001100_hook("a", document.createElement("form"), "var-init"),
    e = cc11001100_hook("e", (a.id = cc11001100_hook("a.id", "tempForm1", "assign"), a.method = cc11001100_hook("a.method", "post", "assign"), a.action = cc11001100_hook("a.action", e, "assign"), a.target = cc11001100_hook("a.target", i, "assign"), document.createElement("input")), "var-init");
  e.type = cc11001100_hook("e.type", "hidden", "assign"), e.name = cc11001100_hook("e.name", "content", "assign"), e.value = cc11001100_hook("e.value", t, "assign"), a.appendChild(e), document.body.appendChild(a), $(a).submit(), document.body.removeChild(a);
}
function process360Jump(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t, i;
  window.oneneedcontcp && (t = cc11001100_hook("t", (t = cc11001100_hook("t", window.location.href, "assign")).split("#")[0], "assign"), window.isWeiXin && (-1 != t.indexOf("?") ? t += cc11001100_hook("t", "&t=" + Date.parse(new Date()), "assign") : t += cc11001100_hook("t", "?t=" + Date.parse(new Date()), "assign")), getQueryVariable("corpId") || -1 != t.indexOf("cpid=") || (-1 != t.indexOf("?") ? t += cc11001100_hook("t", "&cpid=" + window.cpid, "assign") : t += cc11001100_hook("t", "?cpid=" + window.cpid, "assign")), i = cc11001100_hook("i", getlang("tit_360people"), "assign"), 1 == window.oneDept ? i = cc11001100_hook("i", getlang("tit_360depart"), "assign") : window.oneLevel && (i = cc11001100_hook("i", getlang("tit_360Level"), "assign")), confirmnew(i, function () {
    window.location.href = cc11001100_hook("window.location.href", t, "assign");
  }, function () {
    location.replace(e);
  }));
}
function clearFieldValue(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", $(e), "var-init"),
    a = cc11001100_hook("a", i.attr("type"), "var-init");
  if (!isLoadingAnswer || "3" != a && "4" != a && "7" != a || "1" == i.attr("hasdefault")) {
    var n = cc11001100_hook("n", getTopic(i), "var-init"),
      r = cc11001100_hook("r", i.attr("hasjump"), "var-init"),
      o = cc11001100_hook("o", i.attr("refered"), "var-init"),
      s = cc11001100_hook("s", i.attr("csetq"), "var-init"),
      l = cc11001100_hook("l", i.attr("hasitemrelation"), "var-init");
    if (!(t || ItemrelationQs[n] || relationQs[n] || r || o || "11" == a || l || s)) return !1;
    if ("-1" != i.attr("relation")) {
      if ("1" != i.attr("aset")) {
        var d,
          c = cc11001100_hook("c", !1, "var-init");
        if ("3" == a) {
          if ("1" == i.attr("qingjing")) return !1;
          $("input[type='radio']:checked", i).each(function () {
            c = cc11001100_hook("c", !0, "assign"), this.checked = cc11001100_hook("this.checked", !1, "assign"), $(this).parent().parent().removeClass("checked").find("a.jqradio").removeClass("jqchecked");
          }), $("input.OtherRadioText", i).each(function () {
            this.pvalue = cc11001100_hook("this.pvalue", "", "assign"), $(this).parent().hide(), this.value && (this.value = cc11001100_hook("this.value", "", "assign"), $(this).blur(), $(this).siblings(".secondarytagwrap").find(".selected").removeClass("selected")), $(this).hasClass("cusomSelect") && ($(this).siblings("select")[0] && ($(this).siblings("select")[0].value = cc11001100_hook("$(this).siblings(\"select\")[0].value", "", "assign")), $(this).siblings("select").change());
          }), c && displaypeie(i, "input[type=radio]", 1);
        } else if ("4" == a) {
          if ("1" == i.attr("qingjing")) return !1;
          t = cc11001100_hook("t", i.attr("hasjump"), "assign");
          "1" != i.attr("hasitemrelationchecked") || t ? ($("input:checked", i).each(function () {
            c = cc11001100_hook("c", !0, "assign"), this.checked = cc11001100_hook("this.checked", !1, "assign"), $(this).parent().parent().removeClass("checked").find("a.jqcheck").removeClass("jqchecked");
          }), $("input.OtherText", i).each(function () {
            this.pvalue = cc11001100_hook("this.pvalue", "", "assign"), this.value && (this.value = cc11001100_hook("this.value", "", "assign"), $(this).blur().parent().hide(), $(this).siblings(".secondarytagwrap").find(".selected").removeClass("selected"), $(this).parent().siblings(".othericon").remove()), $(this).hasClass("cusomSelect") && ($(this).siblings("select")[0] && ($(this).siblings("select")[0].value = cc11001100_hook("$(this).siblings(\"select\")[0].value", "", "assign")), $(this).siblings("select").change());
          })) : (c = cc11001100_hook("c", !0, "assign"), $("input", i).each(function () {
            var e,
              t = cc11001100_hook("t", $(this).attr("id"), "var-init");
            HasSetItemrelationList[t] && (t = cc11001100_hook("t", "none" != (t = cc11001100_hook("t", -1 == (t = cc11001100_hook("t", $(this).parent().parent()[0], "assign")).className.indexOf("ui-checkbox") ? $(this).parent().parent().parent().parent()[0] : t, "assign")).style.display, "assign"), (this.checked = cc11001100_hook("this.checked", t, "assign")) ? $(this).parent().parent().addClass("checked").find("a.jqcheck").addClass("jqchecked") : $(this).parent().parent().removeClass("checked").find("a.jqcheck").removeClass("jqchecked"), e = cc11001100_hook("e", $(this).parent().parent().find(".ui-text"), "assign")) && (t ? e.show() : e.hide());
          })), c && displaypeie(i, "input[type=checkbox]", 2);
        } else "6" == a || "5" == a ? ("1" == i.attr("texthighlights") && (0 < i.find(".thl_hasval").length && (c = cc11001100_hook("c", !0, "assign")), i.find(".highligntsitem").removeClass("thl_hasval").find(".thl_resicon").remove()), $("a.rate-off", i).each(function () {
          $(this).hasClass("rate-on") && (c = cc11001100_hook("c", !0, "assign")), $(this).removeClass("rate-on"), $(this).find(".ishalf").hide();
          var e = cc11001100_hook("e", $(this).attr("mode"), "var-init");
          e ? $(this).removeClass("rate-on" + e) : $(this).removeClass("rate-ontxt");
        }), $("#divMatrixHeader")[0].referTopic == n && $("#divMatrixHeader").hide(), saveLikert(e), 1 == i.attr("pj") && (i.find(".evaluateTagDiv").hide(), i.find(".evaluateTagItem").removeClass("clicked"), i.find(".wjxui_limit_box").hide().find("textarea").each(function () {
          this.value = cc11001100_hook("this.value", "", "assign");
        })), 1 == i.attr("alone") && ((r = cc11001100_hook("r", i.find(".aloneAnswer")[0], "assign")).rowsIndex = cc11001100_hook("(r = i.find(\".aloneAnswer\")[0]).rowsIndex", 1, "assign"), r.showrow) && r.showrow()) : "7" == a ? ("-2" != $("select", i)[0].value && ($("select", i)[0].value = cc11001100_hook("$(\"select\", i)[0].value", "-2", "assign"), $("select", i).trigger("change"), c = cc11001100_hook("c", !0, "assign")), c && displaypeie(i, "option", 5)) : "8" == a ? (d = cc11001100_hook("d", $("input", i), "assign"))[0].value && (c = cc11001100_hook("c", !0, "assign"), d[0].value = cc11001100_hook("d[0].value", "", "assign"), d.change(), d[0].value = cc11001100_hook("d[0].value", "", "assign")) : "9" == a ? ($("input.ui-slider-input", i).each(function () {
          this.value && (this.value = cc11001100_hook("this.value", "", "assign"), $(this).change(), this.value = cc11001100_hook("this.value", "", "assign"), c = cc11001100_hook("c", !0, "assign"));
        }), $(".textCont", i).text("").css({
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          width: cc11001100_hook("width", 72, "object-key-init")
        }).parent(".textEdit").addClass("initStyle"), $("input,textarea", i).each(function () {
          0 < this.value.length && (c = cc11001100_hook("c", !0, "assign"), this.value = cc11001100_hook("this.value", "", "assign"), $(this).change());
        }), $("select", i).each(function () {
          var e = cc11001100_hook("e", this.value, "var-init");
          e && -2 != e && (c = cc11001100_hook("c", !0, "assign"), 1 == $(this).find("option[value='-2']").length ? this.value = cc11001100_hook("this.value", "-2", "assign") : this.value = cc11001100_hook("this.value", "", "assign"), $(this).change());
        })) : "11" == a ? ($("li.ui-li-static", i).each(function () {
          $(this).find("span.sortnum").hasClass("sortnum-sel") && (c = cc11001100_hook("c", !0, "assign")), sortClear(this);
        }), c && displaypeie(i, "li.ui-li-static", 3)) : "13" == a ? (i[0].fileName && "" != i[0].fileName && (c = cc11001100_hook("c", !0, "assign")), i.find(".deleteuploadNew-icon").click(), l = cc11001100_hook("l", i.find("iframe").attr("src"), "assign"), i.find("iframe").attr("src", l).show(), i[0].fileName = cc11001100_hook("i[0].fileName", "", "assign"), i.find(".uploadmsg").html(""), jump && i[0].fileName && "" != i[0].fileName && jump(e, "")) : "1" == a || "2" == a ? (d = cc11001100_hook("d", $("input", i), "assign"), "2" == a && (d = cc11001100_hook("d", $("textarea", i), "assign")), 0 < i.find(".get_Local").length && (d[0].lnglat = cc11001100_hook("d[0].lnglat", "", "assign"), i.find(".res_local").hide()), d[0] && d[0].relValue && (d[0].relValue = cc11001100_hook("d[0].relValue", "", "assign")), d[0] && d[0].value && "AIHCI" != d.attr("verify") && (c = cc11001100_hook("c", !0, "assign"), d[0].value = cc11001100_hook("d[0].value", "", "assign"), d.change(), "datebox" == d.attr("data-role")) && "1" == i.attr("haspeie") && dateQuota($(d).get(0), i)) : "10" == a ? ("1" == i.attr("maxdiff") && setTimeout(function () {
          i.find(".maxdiffWrap .md_attrcont").removeClass("pkChecked pktextChecked"), i.find(".maxdiffWrap .jqchecked").removeClass("jqchecked"), i.find(".maxdiffWrap .maxdifftab").css({
            display: cc11001100_hook("display", "none", "object-key-init"),
            left: cc11001100_hook("left", "0px", "object-key-init")
          }), i.find(".maxdiffWrap .maxdifftab").eq(0).show(), i.find(".maxdiffWrap .curmdsetindex").html(1), i.find("input[type='text']").each(function () {
            this.value = cc11001100_hook("this.value", "", "assign");
          });
        }, 500), $("select", i).each(function () {
          var e = cc11001100_hook("e", this.value, "var-init");
          e && -2 != e && (c = cc11001100_hook("c", !0, "assign"), 1 == $(this).find("option[value='-2']").length ? this.value = cc11001100_hook("this.value", "-2", "assign") : this.value = cc11001100_hook("this.value", "", "assign"), $(this).change());
        }), $("input,textarea", i).each(function () {
          0 < this.value.length && (c = cc11001100_hook("c", !0, "assign"), this.value = cc11001100_hook("this.value", "", "assign"), $(this).change());
        })) : "12" == a && ($("input", i).each(function () {
          this.value && (c = cc11001100_hook("c", !0, "assign"), this.value = cc11001100_hook("this.value", "0", "assign"), $(this).change(), this.value = cc11001100_hook("this.value", "0", "assign"));
        }), $(".relsum", i).html(""));
        return c && saveAnswer(i), !c || "3" != a && "4" != a && "11" != a && "5" != a && "6" != a || (o && ("11" == a ? createItem(e, !0) : createItem(e)), GetRelationAnsewer(getTopic(e), !0)), "1" == i.attr("hasgs") && clickClearAsnwer(i.attr("topic")), c;
      }
      addreportlog(n, "clearanswer");
    }
  }
}
var ktimes = cc11001100_hook("ktimes", 0, "var-init");
function validateQ(o, r) {
  cc11001100_hook("o", o, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  var s,
    l,
    d,
    t,
    i,
    c = cc11001100_hook("c", "", "var-init"),
    p = cc11001100_hook("p", $(o).attr("req"), "var-init"),
    u = cc11001100_hook("u", $(o).attr("type"), "var-init"),
    w = cc11001100_hook("w", !0, "var-init"),
    e = cc11001100_hook("e", "1" == $(o).attr("csetq"), "var-init"),
    a = cc11001100_hook("a", $(o)[0], "var-init"),
    h = cc11001100_hook("h", "", "var-init");
  $(o).attr("hasjump");
  if ("1" == u) {
    var n = cc11001100_hook("n", (g = cc11001100_hook("g", $("input", $(o)), "assign"))[0].value, "var-init");
    if ("多级下拉" == $(g[0]).attr("verify") && g[0].relValue && (n = cc11001100_hook("n", g[0].relValue, "assign")), 0 < (n = cc11001100_hook("n", replace_specialChar($.trim(n)), "assign")).length - 3e3) return h = cc11001100_hook("h", getlang("tips_overtextnum"), "assign"), writeError(o, h, 3e3), !1;
    if (h = cc11001100_hook("h", checkOnly(o, g), "assign")) return !1;
    w = cc11001100_hook("w", 0 != n.length, "assign"), "密码" == $(g[0]).attr("verify") && (g[0].needCheckConfirm = cc11001100_hook("g[0].needCheckConfirm", !0, "assign")), (h = cc11001100_hook("h", verifyTxt(o, g), "assign")) || !n || e || (g[0].svalue = cc11001100_hook("g[0].svalue", n, "assign")), g[0].gserror && (w = cc11001100_hook("w", !1, "assign"), c = cc11001100_hook("c", "验证失败：" + g[0].gserror, "assign"));
  } else if ("21" == u) {
    var f,
      e = cc11001100_hook("e", 1 == $(o).attr("isshelf"), "var-init");
    "1" == p && (e ? getshelfanswer(o) || (w = cc11001100_hook("w", !1, "assign")) : (f = cc11001100_hook("f", 0, "assign"), $(".shop-item .itemnum", o).each(function (e) {
      var t = cc11001100_hook("t", this.value, "var-init");
      t && "0" != t && f++;
    }), 0 == f && (w = cc11001100_hook("w", !1, "assign")))), h = cc11001100_hook("h", verifyCheckMinMax($(o), !1, !1), "assign");
  } else if ("2" == u) {
    var g = cc11001100_hook("g", $("textarea", $(o)), "var-init");
    if (0 < (n = cc11001100_hook("n", replace_specialChar($.trim(g[0].value)), "assign")).length - 3e3) return h = cc11001100_hook("h", getlang("tips_overtextnum"), "assign"), writeError(o, h, 3e3), !1;
    if ("AIHCI" == g.attr("verify")) {
      if (g[0].ishandle) return writeError(o, h = cc11001100_hook("h", "AI交互数据分析中，请稍后再试！", "assign"), 3e3), !1;
      if (0 == n.length && window.CreateAihci) return CreateAihci(), !(g[0].value = cc11001100_hook("g[0].value", "未进行数据处理", "assign"));
    }
    if (h = cc11001100_hook("h", checkOnly(o, g), "assign")) return !1;
    w = cc11001100_hook("w", 0 != n.length, "assign"), !(h = cc11001100_hook("h", verifyTxt(o, g), "assign")) && n && (g[0].svalue = cc11001100_hook("g[0].svalue", n, "assign")), g[0].gserror && (w = cc11001100_hook("w", !1, "assign"), c = cc11001100_hook("c", "验证失败：" + g[0].gserror, "assign"));
  } else if ("3" == u) w = cc11001100_hook("w", !1, "assign"), $(o).find("input:checked").each(function () {
    w = cc11001100_hook("w", !0, "assign"), isVip && -1 == this.getAttribute("jumpto") && (needSubmitNotValid = cc11001100_hook("needSubmitNotValid", !0, "assign"));
    var e = cc11001100_hook("e", $(this).attr("rel"), "var-init");
    if (e) {
      e = cc11001100_hook("e", $("#" + e), "assign");
      if (e.attr("required") && 0 == e[0].value.trim().length) return $(o).hasClass("optiontag") && e.parent(".ui-text").prev(".label").addClass("errorbg"), h = cc11001100_hook("h", validate_textbox, "assign"), e.hasClass("cusomSelect") && (h = cc11001100_hook("h", getlang("heatmap_empty"), "assign")), writeError(o, h, 3e3), !1;
    }
  });else if ("4" == u) {
    var w = cc11001100_hook("w", !1, "var-init"),
      m = cc11001100_hook("m", !1, "var-init");
    isVip && "1" == $(o).attr("checkjump") && (needSubmitNotValid = cc11001100_hook("needSubmitNotValid", !0, "assign")), $(o).find("input:checked").each(function () {
      w = cc11001100_hook("w", !0, "assign");
      var e = cc11001100_hook("e", $(this).attr("rel"), "var-init");
      if (e) {
        e = cc11001100_hook("e", $("#" + e), "assign");
        if (e.attr("required") && 0 == e[0].value.trim().length) return $(o).hasClass("optiontag") && e.parent(".ui-text").prev(".label").addClass("errorbg"), h = cc11001100_hook("h", validate_textbox, "assign"), e.hasClass("cusomSelect") && (h = cc11001100_hook("h", getlang("heatmap_empty"), "assign")), e.focus(), writeError(o, h, 3e3), !(m = cc11001100_hook("m", !0, "assign"));
      }
    }), m || (h = cc11001100_hook("h", verifyCheckMinMax($(o), !0), "assign"));
  } else if ("11" == u) {
    w = cc11001100_hook("w", 0 != $("li.ui-li-static[check='1']", $(o)).length, "assign"), isVip && "1" == $(o).attr("checkjump") && (needSubmitNotValid = cc11001100_hook("needSubmitNotValid", !0, "assign"));
    m = cc11001100_hook("m", !1, "assign");
    $("li.ui-li-static[check='1']", $(o)).each(function () {
      w = cc11001100_hook("w", !0, "assign");
      var e = cc11001100_hook("e", $("input[type='hidden']", $(this)).eq(0).attr("id"), "var-init");
      if (e) {
        e = cc11001100_hook("e", $("#tq" + e), "assign");
        if (e.attr("required") && 0 == e[0].value.trim().length) return h = cc11001100_hook("h", validate_textbox, "assign"), e.focus(), writeError(o, h, 3e3), !(m = cc11001100_hook("m", !0, "assign"));
      }
    }), m || (h = cc11001100_hook("h", verifyCheckMinMax($(o), !0, !0), "assign"));
  } else if ("5" == u) w = cc11001100_hook("w", validateScaleRating($(o)), "assign");else if ("6" == u) {
    if (h = cc11001100_hook("h", validateMatrix($(o), p), "assign")) return writeError(o, h, 1e3), !1;
  } else if ("7" == u) {
    e = cc11001100_hook("e", $("select", $(o))[0], "assign");
    (w = cc11001100_hook("w", 0 != e.selectedIndex, "assign")) && e.options[e.selectedIndex] && -1 == e.options[e.selectedIndex].getAttribute("jumpto") && (needSubmitNotValid = cc11001100_hook("needSubmitNotValid", !0, "assign"));
  } else if ("8" == u) w = cc11001100_hook("w", 0 != $("input", $(o))[0].value.length, "assign");else if ("9" == u || "33" == u || "34" == u) {
    var n = cc11001100_hook("n", "9" == u ? "input:not(.file input[type=file]), .file,textarea" : "34" == u ? "textarea" : "33" == u ? ".file" : "input", "var-init");
    if ($(o)[0].isVlookUp && $(o)[0].needVLookUpVerify) return $($(o)[0].vlookUpInput).trigger("blur"), !1;
    $(n, $(o)).each(function () {
      var t,
        i,
        a,
        n,
        e = cc11001100_hook("e", $(this), "var-init");
      if (window.hasReferClient && "1" != $(o).attr("gapfill") && "1" != $(o).attr("fuzzy")) {
        var r = cc11001100_hook("r", e.closest("tr"), "var-init");
        if (r[0] && "none" == r[0].style.display) return !0;
      }
      if ("33" == u || "9" == u && -1 < e[0].className.indexOf("file")) {
        if (!e.parent()[0].fileName && "0" != e.find(".file-style").attr("isrequir")) return w = cc11001100_hook("w", !1, "assign"), o[0].errorControl = cc11001100_hook("o[0].errorControl", this, "assign"), !1;
      } else {
        var r = cc11001100_hook("r", replace_specialChar($.trim(this.value)), "var-init");
        if (0 == r.length) {
          if (w = cc11001100_hook("w", !1, "assign"), "0" != e.attr("isrequir")) return $(this).attr("ispsm") || (o[0].errorControl = cc11001100_hook("o[0].errorControl", this, "assign")), !1;
          w = cc11001100_hook("w", !0, "assign");
        }
        if (h = cc11001100_hook("h", verifyTxt(o, e, !0), "assign")) return !1;
        if (h = cc11001100_hook("h", checkOnly(o, e), "assign")) return !1;
        e[0].svalue = cc11001100_hook("e[0].svalue", r, "assign"), e[0].gserror && (w = cc11001100_hook("w", !1, "assign"), c = cc11001100_hook("c", getlang("gserror") + e[0].gserror, "assign"));
      }
      "9" == u && $(this).attr("ispsm") && (t = cc11001100_hook("t", $(this).parents("table[ispsm=true]")[0], "assign"), $(this).parents("tr").index(), r = cc11001100_hook("r", $(t).find("input[ispsm=true]"), "assign"), e = cc11001100_hook("e", Object.keys(t.psmsliderData), "assign"), n = cc11001100_hook("n", a = cc11001100_hook("a", i = cc11001100_hook("i", "", "assign"), "assign"), "assign"), e.forEach(function (e) {
        i || (t.psmsliderData[e - 1] && t.psmsliderData[e - 1] >= t.psmsliderData[e] && (n = cc11001100_hook("n", t.psmsliderData[e - 1], "assign"), i += cc11001100_hook("i", getlang("psmpricelittle") + n, "assign")), t.psmsliderData[e + 1] && t.psmsliderData[e + 1] <= t.psmsliderData[e] && (n = cc11001100_hook("n", t.psmsliderData[e + 1], "assign"), i += cc11001100_hook("i", getlang("psmpricemoretran") + n, "assign")), a = cc11001100_hook("a", e, "assign"));
      }), i) && (o[0].errorControl = cc11001100_hook("o[0].errorControl", r.eq(a)[0], "assign"), c = cc11001100_hook("c", i, "assign"));
    });
  } else if ("12" == u) {
    var g = cc11001100_hook("g", $(o).attr("total"), "var-init"),
      v = cc11001100_hook("v", g, "var-init");
    if ($("input", $(o)).each(function () {
      $(this);
      if (window.hasReferClient) {
        var e = cc11001100_hook("e", this.parentNode.parentNode.parentNode, "var-init");
        if (e && "none" == e.style.display) return !0;
      }
      e = cc11001100_hook("e", this.value, "assign");
      0 == e.length && (w = cc11001100_hook("w", !1, "assign")), e && (v = cc11001100_hook("v", parseFloat((v - e).toFixed(2)), "assign"));
    }), 0 != v) if (!(v != g || p ? !1 : !0)) return writeError(o, getlang("validate_info_wd1"), 3e3), !1;
  } else "13" == u ? ($(o)[0].fileName || (w = cc11001100_hook("w", !1, "assign")), "1" == $(o).attr("heatmap") && $(o)[0].isHeaterr && !$(o)[0].fileName && (c = cc11001100_hook("c", $(o)[0].isHeaterr, "assign"), w = cc11001100_hook("w", !1, "assign"))) : "10" == u && (s = cc11001100_hook("s", "input:not(.file input[type=file]),.file,textarea", "assign"), "1" == $(o).attr("select") && (s = cc11001100_hook("s", "select", "assign")), l = cc11001100_hook("l", !0, "assign"), d = cc11001100_hook("d", !(e = cc11001100_hook("e", "table", "assign")), "assign"), (d = cc11001100_hook("d", "1" == $(o).attr("fixedslider") ? !0 : d, "assign")) && (e = cc11001100_hook("e", ".ui-table-scroll table", "assign")), $(o)[0].errorControl = cc11001100_hook("$(o)[0].errorControl", null, "assign"), t = cc11001100_hook("t", "1" == $(o).attr("maxdiff"), "assign"), i = cc11001100_hook("i", "1" == $(o).attr("conjoint"), "assign"), n = cc11001100_hook("n", "1" == $(o).attr("circulate"), "assign"), g = cc11001100_hook("g", "1" == $(o).attr("bpto"), "assign"), n ? w = cc11001100_hook("w", checkCirculate(o), "assign") : g ? w = cc11001100_hook("w", $(o)[0].bptodata.minvalue ? $(o)[0].bptodata.currowindex > $(o)[0].bptodata.minvalue : $(o)[0].bptodata.currowindex > $(o)[0].bptodata.maxvalue, "assign") : $(e, $(o)).each(function () {
    var n = cc11001100_hook("n", $(this), "var-init");
    if (window.hasReferClient || $(o).attr("zizeng")) {
      var e = cc11001100_hook("e", this.parentNode, "var-init");
      if (e && "none" == e.style.display && !t && !i) return !0;
    }
    if ($(s, n).each(function () {
      var e = cc11001100_hook("e", $(this), "var-init"),
        t = cc11001100_hook("t", this.value, "var-init"),
        i = cc11001100_hook("i", $.trim(t), "var-init"),
        a = cc11001100_hook("a", this.parentNode.parentNode, "var-init");
      if ((a = cc11001100_hook("a", d ? $(this).closest("tr")[0] : a, "assign")) && "none" != a.style.display) {
        if (-1 < e[0].className.indexOf("file")) {
          if (!e.parent()[0].fileName && "0" != e.find(".file-style").attr("isrequir")) return w = cc11001100_hook("w", !1, "assign"), n.parent()[0].errorControl = cc11001100_hook("n.parent()[0].errorControl", this, "assign"), $(o)[0].errorControl || ($(o)[0].errorControl = cc11001100_hook("$(o)[0].errorControl", this, "assign")), !1;
        } else {
          if (!(i = cc11001100_hook("i", "select" == s && null === t ? e.find("option:checked").val() : i, "assign")) || 0 == i.length || "select" == s && "-2" == i) if ("0" != e.attr("isrequir") || $(o)[0].errorControl) {
            if ("1" == p && !r) return w = cc11001100_hook("w", !1, "assign"), "0" != e.attr("isrequir") && (n.parent()[0].errorControl = cc11001100_hook("n.parent()[0].errorControl", this, "assign")), $(o)[0].errorControl || ($(o)[0].errorControl = cc11001100_hook("$(o)[0].errorControl", this, "assign")), !1;
          } else w = cc11001100_hook("w", !0, "assign");
          h = cc11001100_hook("h", verifyTxt(o, e, !0), "assign");
        }
        if (e[0].gserror && (w = cc11001100_hook("w", !1, "assign"), c = cc11001100_hook("c", "验证失败：" + e[0].gserror, "assign")), h || c) return n.parent()[0].errorControl = cc11001100_hook("n.parent()[0].errorControl", this, "assign"), o[0].errorControl = cc11001100_hook("o[0].errorControl", this, "assign"), l = cc11001100_hook("l", !1, "assign");
      }
    }), !l) return !1;
  }));
  return "3" != u && "4" != u && "11" != u || (n = cc11001100_hook("n", getTopic(o), "assign"), randomMode && (n = cc11001100_hook("n", $(o).attr("id").replace("div", ""), "assign")), (g = cc11001100_hook("g", document.getElementById("divRef" + n), "assign")) && "" == g.style.display && (w = cc11001100_hook("w", !0, "assign"))), $(o)[0].gserror && (w = cc11001100_hook("w", !1, "assign"), c = cc11001100_hook("c", "验证失败：" + $(o)[0].gserror, "assign")), !w && "1" == p || r || c ? (h || (h = cc11001100_hook("h", validate_info_wd1, "assign"), "1" == u || "2" == u ? h = cc11001100_hook("h", validate_info_q1, "assign") : "3" == u || "4" == u || "7" == u ? h = cc11001100_hook("h", validate_info_c1, "assign") : "13" == u ? h = cc11001100_hook("h", validate_info_f1, "assign") : "21" == u && (h = cc11001100_hook("h", type_radio_down, "assign")), "6" == u && $(o)[0].isMatrixFillError && (h = cc11001100_hook("h", getlang("tit_way"), "assign"))), c && (h = cc11001100_hook("h", c, "assign")), "10" != u || $(o).attr("fixedslider") || "1" == $(o).attr("specialque") || "1" == $(o).attr("circulate") ? writeError(o[0], h, 1e3) : $(".mdivtable", $(o)).each(function () {
    this.errorControl && writeError(o[0], h, 1e3, this);
  })) : h && "21" == u ? (h = cc11001100_hook("h", h.replace(/项/g, "种商品"), "assign"), writeError(o[0], h, 1e3)) : ($("span.error", $(o)).hide(), $("div.field-label", $(o)).css("background", "")), h ? ("1" == $(o).attr("alone") && "10" == u && aloneAnswerToItem($(o)[0].errorControl, !0), !1) : (a.removeError && a.removeError(), !0);
}
function dataenc(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t = cc11001100_hook("t", ktimes % 10, "var-init"), i = cc11001100_hook("i", (0 == t && (t = cc11001100_hook("t", 1, "assign")), []), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) {
    var n = cc11001100_hook("n", e.charCodeAt(a) ^ t, "var-init");
    i.push(String.fromCharCode(n));
  }
  return i.join("");
}
function show_prev_page() {
  if (0 < cur_page && pageHolder[cur_page - 1].hasExceedTime) alertNew(getlang("tit_prevpage_timeup"));else {
    var e = cc11001100_hook("e", $("#divNext")[0], "var-init"),
      t = cc11001100_hook("t", $("#divPrev")[0], "var-init");
    if (!t || !t.disabled || isLoadingAnswer || isAutoSubmit) {
      pageHolder[cur_page].style.display = cc11001100_hook("pageHolder[cur_page].style.display", "none", "assign"), stopMediaPlay(), e.style.display = cc11001100_hook("e.style.display", "", "assign"), $("#divSubmit").hide(), $("#divMatrixHeader").hide();
      for (var i = cc11001100_hook("i", --cur_page, "var-init"); 0 <= i && pageHolder[i].skipPage; i--) cur_page--;
      window.isKaoShi;
      for (i = cc11001100_hook("i", cur_page, "assign"); 0 <= i; i--) {
        for (var a = cc11001100_hook("a", pageHolder[i].questions, "var-init"), n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < a.length; r++) if ("none" != a[r].style.display) {
          n = cc11001100_hook("n", !0, "assign");
          break;
        }
        var o = cc11001100_hook("o", !1, "var-init");
        if (!n && pageHolder[i].childNodes && 0 < pageHolder[i].childNodes.length) for (var s = cc11001100_hook("s", (s = cc11001100_hook("s", pageHolder[i].cuts, "assign")) || (pageHolder[i].cuts = cc11001100_hook("pageHolder[i].cuts", $(".cutfield", pageHolder[i]), "assign")), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < s.length; r++) if ("none" != s[r].style.display) {
          o = cc11001100_hook("o", !0, "assign");
          break;
        }
        if (n || o || !(0 < cur_page)) break;
        cur_page--;
      }
      clockRecordTime(), window.lastLabel && lastLabel.hide(), 0 == cur_page && (t.style.display = cc11001100_hook("t.style.display", "none", "assign"), $("#divDesc").show(), $("#toptitle").show(), $("#divPromote").show(), window.isChuangGuan || window.isytyy || window.IsOneQuestionPerPage || $("#divContent").css("padding-top", "0"), window.isMobile || $("#divMob").show()), t.style.marginRight = cc11001100_hook("t.style.marginRight", "14px", "assign"), t.style.width = cc11001100_hook("t.style.width", "140px", "assign"), window.islandscape && (t.style.width = cc11001100_hook("t.style.width", "200px", "assign")), pageHolder[cur_page].style.display = cc11001100_hook("pageHolder[cur_page].style.display", "", "assign"), pageHolder[cur_page].scrollIntoView(), window.bindUploadMultipleFn && bindUploadMultipleFn(pageHolder[cur_page]), window.initSingleVote && $(pageHolder[cur_page]).find("div[topiao]").length && initSingleVote(), $("#ValError").html(""), fixBottom(), initSlider(), showProgress(), initSelelct2(), curPageHeatmapInit(), window.TotalValBoxInit && TotalValBoxInit(), adjustVideoSrc(pageHolder[cur_page], !1), pageHolder[cur_page + 1] && adjustVideoSrc(pageHolder[cur_page + 1], !0);
    }
  }
}
function show_next_page(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", $("#divNext a")[0], "var-init");
  t && t.disabled && !isLoadingAnswer && !isAutoSubmit || (window.buttonfooter && window.buttonfooter.hide(), t = cc11001100_hook("t", "true" == $(pageHolder[cur_page]).attr("iszhenbie"), "assign"), window.hasHeatMap && !pageHolder[cur_page].hasGetHeatmapdata ? getHeatmapAns(function () {
    pageHolder[cur_page].hasGetHeatmapdata = cc11001100_hook("pageHolder[cur_page].hasGetHeatmapdata", !0, "assign"), show_next_page(e);
  }) : (window.showAllPageQues || validate($("#divNext"))) && (window.hasSplicing && !pageHolder[cur_page].hasGetSplicingdata ? getSplicingAns(function () {
    pageHolder[cur_page].hasGetSplicingdata = cc11001100_hook("pageHolder[cur_page].hasGetSplicingdata", !0, "assign"), show_next_page(e);
  }) : (needSubmitNotValid && window.isRunning && 1 != e || t && window.isRunning && !isAutoSubmit && 1 != e ? ($("#divNext").hide(), groupAnswer(3)) : to_next_page(), window.isNeedAnsCard && window.needjycardpage && anscardOpen(2, null, 1), 2 == window.isChuangGuan && ($(".lxtitle").hide(), $("#divContent").css("margin", "80px 10px 60px")), langBtnWidthInit(!0))));
}
function to_next_page() {
  window.lastLabel && lastLabel.hide(), layer.closeAll(), $("#divMatrixHeader").hide();
  var e = cc11001100_hook("e", $("#divNext")[0], "var-init"),
    t = cc11001100_hook("t", $("#divPrev")[0], "var-init");
  t && (t.style.display = cc11001100_hook("t.style.display", displayPrevPage, "assign")), clockRecordTime(!0), window.isinterview || (pageHolder[cur_page].style.display = cc11001100_hook("pageHolder[cur_page].style.display", "none", "assign")), stopMediaPlay(), 1 <= ++cur_page && ($("#toptitle").hide(), $("#divDesc").hide(), $("#divPromote").hide(), window.isChuangGuan || window.IsOneQuestionPerPage || $("#divContent").css("padding-top", "20px"), window.isMobile || ($("#divMob").hide(), window.isChuangGuan) || window.IsOneQuestionPerPage || $("#divContent").css("padding-top", "30px"));
  for (var i = cc11001100_hook("i", cur_page, "var-init"); i < pageHolder.length && pageHolder[i].skipPage; i++) cur_page++;
  window.isKaoShi;
  for (i = cc11001100_hook("i", cur_page, "assign"); i < pageHolder.length; i++) {
    for (var a = cc11001100_hook("a", pageHolder[i].questions, "var-init"), n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", !1, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < a.length; o++) {
      var s = cc11001100_hook("s", a[o], "var-init");
      if ("-1" == $(a[o]).attr("relation") && (r = cc11001100_hook("r", !0, "assign")), "none" != s.style.display) {
        n = cc11001100_hook("n", !0, "assign");
        break;
      }
    }
    !n && r && window.zunxiangAutoClick && window.zunxiangAutoClick(cur_page);
    var l = cc11001100_hook("l", !1, "var-init");
    if (!n && pageHolder[i].childNodes && 0 < pageHolder[i].childNodes.length) for (var d = cc11001100_hook("d", (d = cc11001100_hook("d", pageHolder[i].cuts, "assign")) || (pageHolder[i].cuts = cc11001100_hook("pageHolder[i].cuts", $(".cutfield", pageHolder[i]), "assign")), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < d.length; o++) if ("none" != d[o].style.display) {
      l = cc11001100_hook("l", !0, "assign");
      break;
    }
    if (n || l || !(cur_page < pageHolder.length - 1)) break;
    cur_page++;
  }
  for (var c = cc11001100_hook("c", !0, "var-init"), i = cc11001100_hook("i", cur_page + 1, "var-init"); i < pageHolder.length; i++) pageHolder[i].skipPage || (c = cc11001100_hook("c", !1, "assign"));
  e && (cur_page >= pageHolder.length - 1 || c ? (e.style.display = cc11001100_hook("e.style.display", "none", "assign"), t && (t.style.marginRight = cc11001100_hook("t.style.marginRight", "0px", "assign"), t.style.width = cc11001100_hook("t.style.width", "100%", "assign"), window.islandscape) && (t.style.width = cc11001100_hook("t.style.width", "200px", "assign")), $("#divSubmit").show()) : cur_page < pageHolder.length - 1 && (e.style.display = cc11001100_hook("e.style.display", "", "assign"), t) && (t.style.marginRight = cc11001100_hook("t.style.marginRight", "14px", "assign"), t.style.width = cc11001100_hook("t.style.width", "140px", "assign"), window.islandscape) && (t.style.width = cc11001100_hook("t.style.width", "200px", "assign"))), cur_page >= pageHolder.length && (cur_page = cc11001100_hook("cur_page", 0, "assign")), pageHolder[cur_page].style.display = cc11001100_hook("pageHolder[cur_page].style.display", "", "assign"), showProgressBar(), clockRecordTime(), window.lastLabel && lastLabel.hide(), window.initSingleVote && ($(pageHolder[cur_page]).find("div[topiao]").length || c) && initSingleVote(), hideTip(), window.bindUploadMultipleFn && bindUploadMultipleFn(pageHolder[cur_page]);
  for (i = cc11001100_hook("i", 0, "assign"); i < pageHolder[cur_page].questions.length; i++) setFixedSliderTableHandler($(pageHolder[cur_page].questions[i]));
  window.zunxiangAutoClick && window.zunxiangAutoClick(), initSlider(), matrixFixedTitle();
  e = cc11001100_hook("e", document.getElementById("divMaxTime"), "assign");
  window.isinterview || window.showAllPageQues || (e && "" == e.style.display ? $("body,html").animate({
    scrollTop: cc11001100_hook("scrollTop", 0, "object-key-init")
  }, 100) : pageHolder[cur_page].scrollIntoView()), showProgress(), (cur_page >= pageHolder.length - 1 || c) && 0 == $(pageHolder[cur_page]).children().length && "none" == window.displayPrevPage && autoSubmit(null, !0, !0), window.hasPageTime && processMinMax(), 2 == window.isChuangGuan && ($("#divSubmit").hide(), 0 < $("fieldset:visible").children("[ceshi='1']").length && !$("fieldset:visible").children().eq(0).hasClass("cutfield") && timeLimit(), $("fieldset:visible").children().eq(0).hasClass("cutfield")) && $("fieldset:visible").children().eq(0).show(), fixBottom(), $("#divMatrixHeader").hide(), adjustVideoHeight(pageHolder[cur_page]), initDescImg(), initSelelct2(), curPageHeatmapInit(), window.TotalValBoxInit && TotalValBoxInit(), adjustVideoSrc(pageHolder[cur_page], !1), 1 <= cur_page && adjustVideoSrc(pageHolder[cur_page - 1], !0), window.initTest && initTest();
}
function processSearch() {
  var e, t;
  document.referrer && (e = cc11001100_hook("e", !1, "assign"), e = cc11001100_hook("e", !(!(t = cc11001100_hook("t", document.referrer, "assign")) || !(-1 < t.indexOf("www.baidu.com") || -1 < t.indexOf("google.com") || -1 < t.indexOf("so.360.cn") || -1 < t.indexOf(".so.com") || -1 < t.indexOf(".sogou.com") || -1 < t.indexOf(".soso.com") || -1 < t.indexOf(".haoso.com") || -1 < t.indexOf(".sm.cn"))) || e, "assign")) && (t = cc11001100_hook("t", "<a href='https://www.wjx.cn/mobile/publicsurveys.aspx' style='color:#66beff;'>搜索更多相关问卷模板</a>", "assign"), window.isMobile || (t = cc11001100_hook("t", t.replace("/mobile/publicsurveys.aspx", "/newwjx/mysojump/newselecttemplete.aspx"), "assign")), document.title && (-1 < document.title.indexOf("员工满意度") ? t = cc11001100_hook("t", "<a href='https://www.wjx.cn/mobile/app/mydreport.aspx' style='color:#66beff;'>员工满意度典型应用</a>", "assign") : -1 < document.title.indexOf("员工敬业度") && (t = cc11001100_hook("t", "<a href='https://www.wjx.cn/mobile/app/jydreport.aspx' style='color:#66beff;'>员工敬业度典型应用</a>", "assign")), window.isMobile || (t = cc11001100_hook("t", t.replace("/mobile/app/", "/app/"), "assign"))), $("#divSearch").show().html(t));
}
function initSlider() {
  var n;
  window.hasSlider && null != cur_page && pageHolder[cur_page] && (n = cc11001100_hook("n", new Array(), "assign"), $(pageHolder[cur_page].questions).each(function () {
    var e = cc11001100_hook("e", $(this), "var-init"),
      t = cc11001100_hook("t", e.attr("type"), "var-init");
    if ("8" == t || "12" == t || "9" == t || "10" == t) {
      t = cc11001100_hook("t", getTopic(e), "assign"), t = cc11001100_hook("t", (randomMode && (t = cc11001100_hook("t", e.attr("id").replace("div", ""), "assign")), document.getElementById("divRef" + t)), "assign");
      if (!(t && "" == t.style.display)) for (var i = cc11001100_hook("i", $("input.ui-slider-input:visible", e), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) n.push(i[a]);
    }
  }), bindSlider(0, n));
}
function initSelelct2() {
  var e;
  window.hasDropDown && pageHolder[cur_page] && !pageHolder[cur_page].initSelelct2 && (pageHolder[cur_page].initSelelct2 = cc11001100_hook("pageHolder[cur_page].initSelelct2", !0, "assign"), e = cc11001100_hook("e", $(pageHolder[cur_page]).find("select").length, "assign"), pageHolder[cur_page].selectLen = cc11001100_hook("pageHolder[cur_page].selectLen", e, "assign"), $(pageHolder[cur_page].questions).each(function () {
    "none" != this.style.display && initEleSelect2(this);
  }));
}
function browserIsIe() {
  return -1 < window.navigator.userAgent.toLowerCase().indexOf("edge") || !!(window.ActiveXObject || "ActiveXObject" in window);
}
function initEleSelect2(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t, i;
  "none" != $(e)[0].style.display && window.hasDropDown && pageHolder[cur_page] && (i = cc11001100_hook("i", $(e).attr("type"), "assign"), "1" == $(e).attr("conjoint") || 7 != i && 9 != i && 10 != i || e.hasInitSelect2 || (e.hasInitSelect2 = cc11001100_hook("e.hasInitSelect2", !0, "assign"), 0 != (t = cc11001100_hook("t", $(e).find("select"), "assign")).length && (browserIsIe() && 10 == i || !t.select2 || window.useRawSelect || 100 < t.length || 300 < pageHolder[cur_page].selectLen || isSmallerIos12() && self != top || "1" == $(e).attr("bpto") ? (t.show(), adjustIosInput(t), setFixedSliderTableHandler($(e)), e.useSelect = cc11001100_hook("e.useSelect", !0, "assign")) : (i = cc11001100_hook("i", "zh-CN", "assign"), 1 == langVer ? i = cc11001100_hook("i", "", "assign") : 2 == langVer && (i = cc11001100_hook("i", "zh-TW", "assign")), e = cc11001100_hook("e", 10, "assign"), window.isinterview && (e = cc11001100_hook("e", 1e3, "assign")), t.select2({
    language: cc11001100_hook("language", i, "object-key-init"),
    width: cc11001100_hook("width", "off", "object-key-init"),
    minimumResultsForSearch: cc11001100_hook("minimumResultsForSearch", e, "object-key-init"),
    matcher: function (e, t) {
      return (!t.element || "none" != t.element.style.display) && ("" === $.trim(e.term) || (e = cc11001100_hook("e", e.term.toLowerCase(), "assign"), -1 < t.text.toLowerCase().indexOf(e))) ? t : null;
    },
    templateResult: function (e, t) {
      return e.element && $(e.element).attr("class") && ($(t).addClass($(e.element).attr("class")), e.element.selected || (e.element.disabled = cc11001100_hook("e.element.disabled", !0, "assign"))), e.text;
    }
  }), t.on("select2:open", function (e) {
    try {
      $(".select2-search input").prop("focus", !1).prop("type", "text");
      for (var t = cc11001100_hook("t", e.currentTarget.options.length - 1, "var-init"), i = cc11001100_hook("i", e.currentTarget.options, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) "none" == i[a].style.display && -1 == i[a].className.indexOf("optInvisible") && t--;
      t -= cc11001100_hook("t", $(e.currentTarget).find("option.optInvisible").length, "assign"), 1 != langVer && $(".select2-search input").prop("placeholder", getlang("total_item").replace("{0}", t)), adjustIosInput(".select2-search__field");
    } catch (e) {}
  }), t.on("select2:close", function (e) {
    try {
      window.count360Val && count360Val();
    } catch (e) {}
  })))));
}
var lastLabel = cc11001100_hook("lastLabel", null, "var-init");
function matrixFixedTitle() {
  var e,
    i = cc11001100_hook("i", new Array(), "var-init");
  0 == pageHolder.length || window.showAllPageQues || ($(pageHolder[cur_page].questions).each(function () {
    var e = cc11001100_hook("e", $(this), "var-init");
    if (8e4 < e.attr("topic")) return !0;
    var t = cc11001100_hook("t", e.attr("type"), "var-init");
    "3" != t && "4" != t && "6" != t && "9" != t && "10" != t || ("1" == e.attr("circulate") ? i.push(e) : "3" == t || "4" == t ? (t = cc11001100_hook("t", $(e).children(".ui-controlgroup").children().length, "assign"), $(e).children(".ui-controlgroup").hasClass("column2") && (t /= cc11001100_hook("t", 2, "assign")), (8 <= t || $(pageHolder[cur_page].questions).length < 50 && $(e).height() - $(e).children(".field-label").height() > $(window).height() + 50) && i.push(e)) : 8 <= e.find(".rowtitle").length && i.push(e));
  }), 0 != i.length && (e = cc11001100_hook("e", $(window), "assign"), (e = cc11001100_hook("e", 1 == window.IsPar ? $("body") : e, "assign")).unbind("scroll", fixTitleScrollevent), e.bind("scroll", {
    fieldarr: cc11001100_hook("fieldarr", i, "object-key-init"),
    scrollWrap: cc11001100_hook("scrollWrap", e, "object-key-init")
  }, fixTitleScrollevent)));
}
function fixTitleScrollevent(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t = cc11001100_hook("t", e.data.fieldarr, "var-init"), i = cc11001100_hook("i", e.data.scrollWrap.scrollTop(), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) if (!($(t[a]).is(":hidden") || 0 < $(t[a]).children(".refer-style").length)) {
    var n = cc11001100_hook("n", 1 == $(t[a]).attr("circulate"), "var-init"),
      r = cc11001100_hook("r", $(t[a]), "var-init");
    if (0 != r.length) {
      var o = cc11001100_hook("o", r.offset().top, "var-init"),
        s = cc11001100_hook("s", (1 == window.IsPar && (o = cc11001100_hook("o", r.offset().top + i, "assign")), $(t[a]).find(".field-label").outerHeight()), "var-init");
      if (o + (s = cc11001100_hook("s", n ? 0 : s, "assign")) + 8 < i && i < o + r.outerHeight()) {
        s = cc11001100_hook("s", $(t[a]).find(".topichtml"), "assign"), o = cc11001100_hook("o", s, "assign"), r = cc11001100_hook("r", (window.hasHideLabel && (o = cc11001100_hook("o", s.clone(), "assign")).find(".qtypetip").remove(), o.text().replace("[清除选择]", "").replace("*", "")), "assign"), s = cc11001100_hook("s", (n && (r = cc11001100_hook("r", $(t[a]).find(".cprojectItemHead:visible").find("img")[0] && $(t[a]).find(".cprojectItemHead:visible").find("img")[0].outerHTML || "", "assign"), r += cc11001100_hook("r", $(t[a]).find(".cprojectItemHead:visible").find("dl").eq(0).find("dt").text(), "assign")), lastLabel ? (lastLabel.show(), lastLabel.html() != r && lastLabel.html(r)) : ((lastLabel = cc11001100_hook("lastLabel", $("<div class='toptitlediv'></div>"), "assign")).html(r), $("body").append(lastLabel)), 0 < lastLabel.find("img").length && 50 < lastLabel.find("img").width() && !lastLabel.find("img")[0].hasinitview && (loadViewer(function () {
          viewerImg(lastLabel.find("img"));
        }), lastLabel.find("img")[0].hasinitview = cc11001100_hook("lastLabel.find(\"img\")[0].hasinitview", !0, "assign")), n ? lastLabel.addClass("circulateTitle") : lastLabel.removeClass("circulateTitle"), lastLabel.css("top", "0"), document.getElementById("divMaxTime")), "assign");
        s && "" == s.style.display && lastLabel.css("top", $(s).outerHeight() + "px");
        break;
      }
      lastLabel && lastLabel.hide();
    }
  }
}
function bindSlider(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", t.length, "var-init");
  e < i && setTimeout(function () {
    $(t[e]).closest(".field").is(":visible") && $(t[e]).rangeslider({
      polyfill: cc11001100_hook("polyfill", !1, "object-key-init")
    }), bindSlider(e + 1, t);
  }, 10);
}
function initqSlider(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t;
  !window.hasSlider || "8" != (t = cc11001100_hook("t", $(e).attr("type"), "assign")) && "12" != t && "9" != t && "10" != t || initEleSlider(e);
}
function initEleSlider(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t;
  !e || e.hasInitSlider && !window.haschangeorientation || (t = cc11001100_hook("t", $("input.ui-slider-input:visible", e), "assign")).rangeslider && 0 != t.length && (t.rangeslider({
    polyfill: cc11001100_hook("polyfill", !1, "object-key-init")
  }), window.haschangeorientation && t.rangeslider("update", !0), e.hasInitSlider = cc11001100_hook("e.hasInitSlider", !0, "assign"));
}
function showProgress() {
  var e, t, i;
  1 != totalPage && (i = cc11001100_hook("i", (e = cc11001100_hook("e", (e = cc11001100_hook("e", cur_page + 1, "assign")) > totalPage ? totalPage : e, "assign")) + "/" + totalPage, "assign"), t = cc11001100_hook("t", "页", "assign"), (1 == langVer || 2 < langVer) && (t = cc11001100_hook("t", " Page", "assign")), $(".pagepercent").html(i + t), i = cc11001100_hook("i", 100 * e / totalPage, "assign"), $(".pagebar").width(i + "%"));
}
function verifyCheckMinMax(e, t, i, a, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  var r = cc11001100_hook("r", e.attr("minvalue"), "var-init"),
    o = cc11001100_hook("o", e.attr("maxvalue"), "var-init");
  if ("1" != e.attr("qingjing")) {
    var s = cc11001100_hook("s", e[0], "var-init");
    if (0 == r && 0 == o) return "";
    var l = cc11001100_hook("l", 0, "var-init");
    if (i ? l = cc11001100_hook("l", $("li.ui-li-static[check='1']", e).length, "assign") : 21 == e.attr("type") && (r || o) ? "1" == e.attr("isshelf") ? l = cc11001100_hook("l", e.find(".shopli").length, "assign") : $("input.itemnum", e).each(function () {
      0 < parseInt(this.value) && l++;
    }) : l = cc11001100_hook("l", $("input[type='checkbox']:checked", e).length, "assign"), 0 != l || e.attr("req")) {
      var d = cc11001100_hook("d", "", "var-init"),
        c = cc11001100_hook("c", (0 == langVer && (d = cc11001100_hook("d", getlang("check_haschoice").replace("{0}", l), "assign")), !0), "var-init");
      if (0 < o && o < l) {
        if (a && !n) return alertNew(getlang("check_duoxuan").replace("{0}", o)), (11 == e.attr("type") && "text" == $(a)[0].type ? $(a).parent().parent() : $(a)).trigger("click"), "";
        d = cc11001100_hook("d", getlang("validate_check_duoxuan").replace("{0}", o).replace("{1}", l - o), "assign"), c = cc11001100_hook("c", !1, "assign");
      } else 0 < r && l < r && (d = cc11001100_hook("d", getlang("validate_check_shaoxuan").replace("{0}", r).replace("{1}", r - l), "assign"), c = cc11001100_hook("c", !1, "assign"), !i) && 1 == l && $("input:checked", e).closest(".ui-checkbox").hasClass("huchi") && (c = cc11001100_hook("c", !0, "assign"));
      return (s.errorMessage || (s.errorMessage = cc11001100_hook("s.errorMessage", $(".errorMessage", e)[0], "assign")), s.isMinMaxValid = cc11001100_hook("s.isMinMaxValid", c, "assign")) ? (s.errorMessage.innerHTML = cc11001100_hook("s.errorMessage.innerHTML", "", "assign"), s.errorMessage.style.display = cc11001100_hook("s.errorMessage.style.display", "none", "assign"), 10 <= l && (s.errorMessage.innerHTML = cc11001100_hook("s.errorMessage.innerHTML", "<span style='color:#333;'>" + d + "</span>", "assign")), "") : (t ? writeError(e[0], d, 3e3) : s.errorMessage.innerHTML = cc11001100_hook("s.errorMessage.innerHTML", d, "assign"), d);
    }
  }
}
function checkOnly(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a,
    n,
    r,
    o,
    s,
    t = cc11001100_hook("t", $(t), "var-init"),
    l = cc11001100_hook("l", t[0], "var-init");
  return !t.attr("needonly") || "地图" == t.attr("verify") || $(e)[0].needsms || !(a = cc11001100_hook("a", t[0].value, "assign")) || 50 < a.length ? "" : (n = cc11001100_hook("n", getTopic(e), "assign"), (r = cc11001100_hook("r", t.attr("rowid"), "assign")) ? n = cc11001100_hook("n", 1e4 * parseInt(n) + parseInt(r), "assign") : (r = cc11001100_hook("r", t.attr("gapindex"), "assign")) && (n = cc11001100_hook("n", 1e4 * parseInt(n) + parseInt(r), "assign")), t = cc11001100_hook("t", "/joinnew/AnswerOnlyHandler.ashx?q=" + (i = cc11001100_hook("i", i || activityId, "assign")) + "&at=" + encodeURIComponent(a) + "&qI=" + n + "&o=true&t=" + new Date().valueOf(), "assign"), window.joinIdnew && (t += cc11001100_hook("t", "&joinid=" + window.joinIdnew, "assign")), o = cc11001100_hook("o", $(e)[0], "assign"), s = cc11001100_hook("s", "", "assign"), l.errorOnly || (l.errorOnly = cc11001100_hook("l.errorOnly", new Object(), "assign")), o.hasonlyerror = cc11001100_hook("o.hasonlyerror", !1, "assign"), l.errorOnly[a] ? (s = cc11001100_hook("s", validate_only, "assign"), !o.errorControl && 0 < n - 1e4 && (o.errorControl = cc11001100_hook("o.errorControl", l, "assign")), writeError(o, s, 3e3), o.hasonlyerror = cc11001100_hook("o.hasonlyerror", !0, "assign"), s) : ($.ajax({
    type: cc11001100_hook("type", "GET", "object-key-init"),
    url: cc11001100_hook("url", t, "object-key-init"),
    async: cc11001100_hook("async", !1, "object-key-init"),
    success: function (e) {
      return "false1" == e ? (s = cc11001100_hook("s", validate_only, "assign"), l.errorOnly[a] = cc11001100_hook("l.errorOnly[a]", 1, "assign"), !o.errorControl && 0 < n - 1e4 && (o.errorControl = cc11001100_hook("o.errorControl", l, "assign")), writeError(o, s, 3e3), o.hasonlyerror = cc11001100_hook("o.hasonlyerror", !0, "assign"), s) : "";
    }
  }), void (o.errorMessage && -1 < o.errorMessage.innerHTML.indexOf(validate_only) && (o.hasonlyerror || o.removeError && o.removeError()))));
}
function verifyTxt(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a,
    n,
    r = cc11001100_hook("r", $.trim($(t)[0].value), "var-init"),
    o = cc11001100_hook("o", $(t).attr("verify"), "var-init"),
    s = cc11001100_hook("s", $(t).attr("minword"), "var-init"),
    l = cc11001100_hook("l", $(t).attr("maxword"), "var-init"),
    d = cc11001100_hook("d", $(t).attr("onlywrite"), "var-init"),
    c = cc11001100_hook("c", $(e)[0], "var-init"),
    p = cc11001100_hook("p", "", "var-init");
  return !r || window.joinIdnew && "(空)" == r || (("9" == e.attr("type") || "8" == e.attr("type") || i && "10" == e.attr("type")) && (a = cc11001100_hook("a", $(t).attr("isdigit"), "assign")) && ("1" == a ? o = cc11001100_hook("o", "数字", "assign") : "2" == a && (o = cc11001100_hook("o", "小数", "assign")), (a = cc11001100_hook("a", $(t).attr("min"), "assign")) && (s = cc11001100_hook("s", a, "assign")), a = cc11001100_hook("a", $(t).attr("max"), "assign")) && (l = cc11001100_hook("l", a, "assign")), n = cc11001100_hook("n", a = cc11001100_hook("a", null, "assign"), "assign"), (a = cc11001100_hook("a", "10" == e.attr("type") ? 0 < $(t).closest(".mdivtable").length : a, "assign")) && (n = cc11001100_hook("n", $(t).closest(".mdivtable")[0], "assign")), (p = cc11001100_hook("p", !(p = cc11001100_hook("p", (p = cc11001100_hook("p", verifyMinMax(r, o, s, l), "assign")) || verifydata(r, o, $(t)[0]), "assign")) && d ? verifyOnlyWrite(r, $(t)[0]) : p, "assign")) ? (i && (c.errorControl = cc11001100_hook("c.errorControl", $(t)[0], "assign")), a && (n.errorControl = cc11001100_hook("n.errorControl", $(t)[0], "assign")), writeError(c, p, 3e3, n)) : (a ? n.removeError && !c.hasonlyerror && n.removeError(!0) : c.removeError && !c.hasonlyerror && c.removeError(), e = cc11001100_hook("e", !p && c.needsms && !c.issmsvalid && !window.joinIdnew, "assign"), (e = cc11001100_hook("e", i ? (s = cc11001100_hook("s", $(t).closest("tr")[0], "assign")) && !p && s.needsms && !s.issmsvalid && !window.joinIdnew : e, "assign")) && (c.errorControl = cc11001100_hook("c.errorControl", $(t)[0], "assign"), p = cc11001100_hook("p", "提示：手机号码没有通过验证，请先验证", "assign"), writeError(c, p = cc11001100_hook("p", c.prevbtn && null == c.prevbtn.isSending ? "提示：手机号码暂未验证，请先获取验证码" : p, "assign"), 3e3)))), p;
}
function validateMatrix(t, e) {
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  var i = cc11001100_hook("i", $("table.matrix-rating", $(t)), "var-init"),
    a = cc11001100_hook("a", "", "var-init"),
    n = cc11001100_hook("n", ($(t)[0].isMatrixFillError = cc11001100_hook("$(t)[0].isMatrixFillError", !1, "assign"), "true" == $(t).attr("daozhi")), "var-init"),
    r = cc11001100_hook("r", $(t).attr("ischeck"), "var-init"),
    o = cc11001100_hook("o", "1" == $(t).attr("texthighlights"), "var-init"),
    s = cc11001100_hook("s", i.parent().hasClass("scaletablewrap"), "var-init");
  if (o) {
    if ("1" == e) for (var l = cc11001100_hook("l", $(t).find("input[type='text']"), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < l.length; d++) if (!l[d].value) {
      a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(t).find(".highligntsitem").eq(d)[0], "assign");
      break;
    }
  } else if (n) {
    var c = cc11001100_hook("c", $(t).find("tr[tp='d']")[0], "var-init"),
      p = cc11001100_hook("p", $(c).children(), "var-init"),
      o = cc11001100_hook("o", s ? 1 : 0, "var-init");
    if (r) for (var u = cc11001100_hook("u", $(t).attr("minvalue"), "var-init"), w = cc11001100_hook("w", $(t).attr("maxvalue"), "var-init"), d = cc11001100_hook("d", o, "var-init"); d < p.length; d++) {
      var h = cc11001100_hook("h", $(p[d]).attr("fid"), "var-init");
      if (0 == (v = cc11001100_hook("v", $(c).closest("table").find("td[fid='" + h + "']").find("a.rate-on"), "assign")).length) {
        if ($("#" + h, $(t))[0] && ($("#" + h, $(t))[0].value = cc11001100_hook("$(\"#\" + h, $(t))[0].value", "", "assign")), "1" == e) {
          a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).closest("table").find(".trlabel").children()[d], "assign");
          break;
        }
      } else {
        if (u && v.length - u < 0) {
          a = cc11001100_hook("a", validate_info + validate_info_check5 + u + type_check_limit5, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).closest("table").find(".trlabel").children()[d], "assign");
          break;
        }
        if (w && 0 < v.length - w) {
          a = cc11001100_hook("a", validate_info + validate_info_check4 + w + type_check_limit5, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).prev("tr")[0], "assign");
          break;
        }
        var f = cc11001100_hook("f", !0, "var-init");
        if ($(v).each(function () {
          if ($(this).attr("needfill")) {
            var e = cc11001100_hook("e", this.fillvalue || "", "var-init");
            if ($(this).attr("req") && !e) return a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].isMatrixFillError = cc11001100_hook("$(t)[0].isMatrixFillError", !0, "assign"), showMatrixFill(this, 1), f = cc11001100_hook("f", !1, "assign");
          }
        }), !f) break;
      }
    } else for (d = cc11001100_hook("d", o, "assign"); d < p.length; d++) {
      h = cc11001100_hook("h", $(p[d]).attr("fid"), "assign");
      if (0 == (v = cc11001100_hook("v", $(c).closest("table").find("td[fid='" + h + "']").find("a.rate-on"), "assign")).length) {
        if ($("#" + h, $(t))[0] && ($("#" + h, $(t))[0].value = cc11001100_hook("$(\"#\" + h, $(t))[0].value", "", "assign")), "1" == e) {
          a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).closest("table").find(".trlabel").children()[d], "assign");
          break;
        }
      } else $(v).each(function () {
        if ($(this).attr("needfill")) {
          var e = cc11001100_hook("e", this.fillvalue || "", "var-init");
          if ($(this).attr("req") && !e) return a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].isMatrixFillError = cc11001100_hook("$(t)[0].isMatrixFillError", !0, "assign"), showMatrixFill(this, 1), f = cc11001100_hook("f", !1, "assign");
        }
      });
    }
  } else {
    -1 == validateProStr.indexOf("->2") && (validateProStr += cc11001100_hook("validateProStr", "->2", "assign"));
    for (var g = cc11001100_hook("g", i[0].rows, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < g.length; d++) {
      var m = cc11001100_hook("m", (c = cc11001100_hook("c", g[d], "assign")).getAttribute("tp"), "var-init");
      if ("d" == m && (!window.hasReferClient || "none" != c.style.display)) {
        var h = cc11001100_hook("h", $(c).attr("fid"), "var-init"),
          v = cc11001100_hook("v", $("a.rate-on", $(c)), "var-init");
        if (x = cc11001100_hook("x", "", "assign"), -1 == validateProStr.indexOf("->3") && (validateProStr += cc11001100_hook("validateProStr", "->3d:" + v.length, "assign")), 0 == v.length) {
          if (document.getElementById(h) && (document.getElementById(h).value = cc11001100_hook("document.getElementById(h).value", "", "assign")), "1" == e) {
            a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).prev("tr")[0], "assign"), $(c).children(".scalerowtitletd")[0] && ($(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).children(".scalerowtitletd")[0], "assign")), aloneAnswerToItem($("a.rate-off", $(c))[0]);
            break;
          }
        } else {
          if (x = cc11001100_hook("x", $(v[v.length - 1]).attr("dval"), "assign"), r) {
            var x = cc11001100_hook("x", "", "var-init"),
              u = cc11001100_hook("u", $(t).attr("minvalue"), "var-init"),
              w = cc11001100_hook("w", $(t).attr("maxvalue"), "var-init");
            if (u && v.length - u < 0) {
              a = cc11001100_hook("a", validate_info + validate_info_check5 + u + type_check_limit5, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).prev("tr")[0], "assign"), aloneAnswerToItem($(v[v.length - 1])[0]);
              break;
            }
            if (w && 0 < v.length - w) {
              a = cc11001100_hook("a", validate_info + validate_info_check4 + w + type_check_limit5, "assign"), $(t)[0].errorControl = cc11001100_hook("$(t)[0].errorControl", $(c).prev("tr")[0], "assign"), aloneAnswerToItem($(v[v.length - 1])[0]);
              break;
            }
            f = cc11001100_hook("f", !0, "assign");
            if ($(v).each(function () {
              if (x && (x += cc11001100_hook("x", ";", "assign")), x += cc11001100_hook("x", $(this).attr("dval"), "assign"), $(this).attr("needfill")) {
                var e = cc11001100_hook("e", replace_specialChar(this.fillvalue || "").replace(/;/g, "；").replace(/,/g, "，"), "var-init");
                if (x += cc11001100_hook("x", spChars[2] + e, "assign"), $(this).attr("req") && !e) return a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].isMatrixFillError = cc11001100_hook("$(t)[0].isMatrixFillError", !0, "assign"), showMatrixFill(this, 1), f = cc11001100_hook("f", !1, "assign");
              }
            }), !f) break;
          } else {
            $(v[v.length - 1]).attr("mode");
            if ($(v[v.length - 1]).attr("needfill")) {
              var m = cc11001100_hook("m", replace_specialChar(v[v.length - 1].fillvalue || "").replace(/;/g, "；").replace(/,/g, "，"), "var-init");
              if (x += cc11001100_hook("x", spChars[2] + m, "assign"), $(v[v.length - 1]).attr("req") && !m) {
                a = cc11001100_hook("a", validate_info_wd1, "assign"), $(t)[0].isMatrixFillError = cc11001100_hook("$(t)[0].isMatrixFillError", !0, "assign"), showMatrixFill(v[v.length - 1], 1);
                break;
              }
            }
          }
          x && ((m = cc11001100_hook("m", document.getElementById(h), "assign")) && (m.value = cc11001100_hook("m.value", x, "assign")), $("#" + h, $(t)).attr("v", x));
        }
      }
    }
  }
  return a;
}
function validateScaleRating(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", !0, "var-init"),
    i = cc11001100_hook("i", $(".scale-rating", $(e)), "var-init");
  return 0 == (i = cc11001100_hook("i", $("a.rate-on", i), "assign")).length ? (t = cc11001100_hook("t", !1, "assign"), $("input:hidden", $(e))[0].value = cc11001100_hook("$(\"input:hidden\", $(e))[0].value", "", "assign")) : ($("input:hidden", $(e))[0].value = cc11001100_hook("$(\"input:hidden\", $(e))[0].value", $(i[i.length - 1]).attr("val"), "assign"), -1 == $(i[i.length - 1]).attr("jumpto") && (needSubmitNotValid = cc11001100_hook("needSubmitNotValid", !0, "assign"))), t;
}
function jump(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i,
    a = cc11001100_hook("a", $(e), "var-init");
  a.attr("hasjump") && (i = cc11001100_hook("i", a.attr("type"), "assign"), 0 < (a = cc11001100_hook("a", a.attr("anyjump"), "assign")) || 0 == a && "3" != i && "5" != i && "7" != i && "4" != i ? jumpAnyChoice(e) : jumpByChoice(e, t)), updateTopicNumber();
}
function jumpAnyChoice(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", $(e), "var-init"),
    a = cc11001100_hook("a", i.attr("type"), "var-init"),
    n = cc11001100_hook("n", !1, "var-init");
  "1" == a ? n = cc11001100_hook("n", 0 < $("input", i)[0].value.length, "assign") : "2" == a ? n = cc11001100_hook("n", 0 < $("textarea", i)[0].value.length, "assign") : "3" == a ? n = cc11001100_hook("n", 0 < $("input[type='radio']:checked", i).length, "assign") : "4" == a ? n = cc11001100_hook("n", 0 < $("input[type='checkbox']:checked", i).length, "assign") : "5" == a || "6" == a ? n = cc11001100_hook("n", 0 < $("a.rate-on", i).length, "assign") : "7" == a ? n = cc11001100_hook("n", -2 != $("select", i)[0].value, "assign") : "8" == a ? n = cc11001100_hook("n", 0 < $("input", i)[0].value.length, "assign") : "9" == a || "12" == a ? $("input,textarea", i).each(function () {
    var e = cc11001100_hook("e", this.value, "var-init");
    ("9" == a && 0 < e.length || "12" == a && 0 < e.length && parseInt(e[0])) && (n = cc11001100_hook("n", !0, "assign"));
  }) : "10" == a ? "1" == i.attr("select") ? $("select", i).each(function () {
    -2 != this.value && (n = cc11001100_hook("n", !0, "assign"));
  }) : $("input,textarea", i).each(function () {
    0 < this.value.length && (n = cc11001100_hook("n", !0, "assign"));
  }) : "11" == a ? n = cc11001100_hook("n", 0 < $("li[check='1']", i).length, "assign") : "13" == a && (n = cc11001100_hook("n", !!i[0].fileName, "assign")), jumpAny(n, e, t);
}
function jumpByChoice(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i,
    a = cc11001100_hook("a", $(e).attr("type"), "var-init"),
    n = cc11001100_hook("n", $(e)[0], "var-init");
  "-2" == t.value || "-1" == t.value || "" == t.value ? processJ(+n.indexInPage, 0, !1, n.pageIndex, $(e)) : "3" != a && "5" != a && "7" != a && "4" != a && "11" != a || (i = cc11001100_hook("i", t.value || $(t).attr("val"), "assign"), parseInt(i) == i && (-1 == (t = cc11001100_hook("t", +(i = cc11001100_hook("i", (i = cc11001100_hook("i", $(t).attr("jumpto"), "assign")) || 0, "assign")), "assign")) && !isVip && window.isNewQ && alertNew("提示：跳转到无效是企业版功能，请升级！"), "4" != a && "11" != a || (t = cc11001100_hook("t", i, "assign")), processJ(+n.indexInPage, t, !1, n.pageIndex, $(e))));
}
function jumpAny(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var t = cc11001100_hook("t", $(t), "var-init"),
    a = cc11001100_hook("a", (t.attr("type"), t.attr("hasjump")), "var-init"),
    n = cc11001100_hook("n", +t.attr("anyjump"), "var-init"),
    r = cc11001100_hook("r", t[0], "var-init");
  a && (e ? processJ(+r.indexInPage, n, i, r.pageIndex, t) : processJ(+r.indexInPage, 0, i, r.pageIndex, t, !0));
}
function checktypejump(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i,
    a = cc11001100_hook("a", [], "var-init"),
    n = cc11001100_hook("n", [], "var-init"),
    r = cc11001100_hook("r", 11 == t.attr("type"), "var-init"),
    o = cc11001100_hook("o", !0, "var-init");
  return (e = cc11001100_hook("e", e && "0" != e ? e : $(t).find(".ui-checkbox input[jumpto],.custom[jumpto]").eq(0).attr("jumpto"), "assign")) && "0" != e && (a = cc11001100_hook("a", $(t).find(".ui-checkbox input[jumpto='" + e + "']"), "assign"), n = cc11001100_hook("n", $(t).find(".ui-checkbox.checked input[jumpto='" + e + "']"), "assign"), r && (a = cc11001100_hook("a", $(t).find("input.custom[jumpto='" + e + "']"), "assign"), n = cc11001100_hook("n", $(t).find(".check input.custom[jumpto='" + e + "']"), "assign")), i = cc11001100_hook("i", !0, "assign"), r = cc11001100_hook("r", 0 < n.length, "assign"), a.each(function (e, t) {
    n.is(t) || (i = cc11001100_hook("i", !1, "assign"));
  }), o = cc11001100_hook("o", i ? !(0 == e.indexOf("-") && -1 < e.indexOf(".") || 0 == e.indexOf("-") && -1 < e.indexOf(";") && r) : !(0 != e.indexOf("-") && -1 < e.indexOf(".")) && (0 == e.indexOf("-") && -1 < e.indexOf(".") || !r && 0 == e.indexOf("-") && -1 < e.indexOf(";") || 0 != e.indexOf("-") && -1 < e.indexOf(";") && r), "assign"), e = cc11001100_hook("e", -1 < e.indexOf("-1") ? "-1" : e.replace(/[;.-]/g, ""), "assign"), o && "-1" == e ? t.attr("checkjump", "1") : t.attr("checkjump", "0")), [e, o];
}
function processJ(e, t, i, a, n, r) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  for (var o = cc11001100_hook("o", !0, "var-init"), s = cc11001100_hook("s", (4 == n.attr("type") || 11 == n.attr("type")) && (/[;.-]/g.test(t) || !t || "0" == t), "var-init"), l = cc11001100_hook("l", (s && !r ? (t = cc11001100_hook("t", (r = cc11001100_hook("r", checktypejump(t, n), "assign"))[0], "assign"), o = cc11001100_hook("o", r[1], "assign"), t = cc11001100_hook("t", Number(t), "assign")) : s && n.attr("checkjump", "0"), e + 1), "var-init"), d = cc11001100_hook("d", 1 == t || -1 == t, "var-init"), c = cc11001100_hook("c", 0, "var-init"), p = cc11001100_hook("p", a, "var-init"); p < pageHolder.length; p++) {
    for (var u = cc11001100_hook("u", pageHolder[p].questions, "var-init"), w = cc11001100_hook("w", (d && 0, u[e] && 1 == $(u[e]).attr("csetq")), "var-init"), h = cc11001100_hook("h", 8e4 < (c = cc11001100_hook("c", !c && u[e] ? parseInt(getTopic(u[e])) : c, "assign")), "var-init"), f = cc11001100_hook("f", l, "var-init"); f < u.length; f++) {
      var g = cc11001100_hook("g", u[f] && 1 == $(u[f]).attr("csetq"), "var-init");
      w && g && u[e].parentNode != u[f].parentNode || (m = cc11001100_hook("m", getTopic(u[f]), "assign"), h && m < 8e4) || !h && 8e4 < m || ((m == t || d) && o && 0, "1" != $(u[f]).attr("nhide") && ((+m < +t || d) && o ? (u[f].style.display = cc11001100_hook("u[f].style.display", "none", "assign"), window.showAllPageQues && $(u[f]).addClass("cannot_ans"), clearFieldValue(u[f]), (relationQs[m] || ItemrelationQs[m]) && displayRelationByType(u[f])) : (relationNotDisplayQ[m] || relationItemNotDisplayQ[m] ? 0 : (u[f].style.display = cc11001100_hook("u[f].style.display", "", "assign"), window.showAllPageQues && $(u[f]).removeClass("cannot_ans"), "1" == u[f].getAttribute("isshop") && updateCart($(u[f])), initEleSelect2(u[f]), window.hasHeatMap && heatMapInit(u[f]), window.bindUploadMultipleFn && bindUploadMultipleFn(u[f])), $(u[f]).attr("hasjump") && !i && clearFieldValue(u[f]), "1" == $(u[f]).attr("qingjing") && displayRelationByType(u[f]))));
    }
    pageHolder[p].cuts || (pageHolder[p].cuts = cc11001100_hook("pageHolder[p].cuts", $(".cutfield", pageHolder[p]), "assign"));
    for (f = cc11001100_hook("f", 0, "assign"); f < pageHolder[p].cuts.length; f++) {
      var m,
        v,
        x = cc11001100_hook("x", pageHolder[p].cuts[f], "var-init");
      !(m = cc11001100_hook("m", x.getAttribute("qtopic"), "assign")) || c && m <= c || m <= l || ((m < t || d) && o ? (x.style.display = cc11001100_hook("x.style.display", "none", "assign"), window.showAllPageQues && $(x).addClass("cannot_ans")) : (v = cc11001100_hook("v", x.getAttribute("topic"), "assign"), relationNotDisplayQ[v] ? 0 : (x.style.display = cc11001100_hook("x.style.display", "", "assign"), window.showAllPageQues && $(x).removeClass("cannot_ans"))));
    }
    l = cc11001100_hook("l", 0, "assign");
  }
  fixBottom();
}
function GetBacktoServer() {
  str = cc11001100_hook("str", window.location.pathname, "assign"), index = cc11001100_hook("index", str.lastIndexOf("/"), "assign"), page = cc11001100_hook("page", str.substr(index + 1, str.length - index), "assign"), null != (data = cc11001100_hook("data", readCookie("history"), "assign")) && data.toLowerCase() != page.toLowerCase() && (window.location.href = cc11001100_hook("window.location.href", window.location.href, "assign"));
}
function readCookie(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t = cc11001100_hook("t", e + "=", "var-init"), i = cc11001100_hook("i", document.cookie.split(";"), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) {
    for (var n = cc11001100_hook("n", i[a], "var-init"); " " == n.charAt(0);) n = cc11001100_hook("n", n.substring(1, n.length), "assign");
    if (0 == n.indexOf(t)) return n.substring(t.length, n.length);
  }
  return null;
}
function getErrorControl(e) {
  cc11001100_hook("e", e, "function-parameter");
  return "none" == e.style.display && "指定选项" == e.getAttribute("verify") || "select2-hidden-accessible" == e.className ? e.parentNode : "none" == e.style.display && $(e).next().hasClass("textEdit") ? $(e).next(".textEdit")[0] : e;
}
function removeError(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (0 != this.isMinMaxValid && this.errorMessage) {
    if ($(this.errorMessage).hide(), this.errorMessage.innerHTML = cc11001100_hook("this.errorMessage.innerHTML", "", "assign"), window != window.top && $("#ValError").html(""), this.removeError = cc11001100_hook("this.removeError", null, "assign"), 2 != window.isChuangGuan && (e ? $(this).closest(".field")[0].style.border = cc11001100_hook("$(this).closest(\".field\")[0].style.border", "solid 1px transparent", "assign") : this.style.border = cc11001100_hook("this.style.border", "solid 1px transparent", "assign")), this.errorControl) {
      if ($(this.errorControl).attr("ispsm")) return void $(this.errorControl).parents("tr").removeClass("error-psm");
      e = cc11001100_hook("e", getErrorControl(this.errorControl), "assign");
      $(e).attr("onlywrite") || (e.style.background = cc11001100_hook("e.style.background", "", "assign")), this.errorControl = cc11001100_hook("this.errorControl", null, "assign");
    }
    fixBottom();
  }
}
function writeError(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  e = cc11001100_hook("e", $(e)[0], "assign"), 2 != window.isChuangGuan && (e.style.border = cc11001100_hook("e.style.border", "dashed 1px #FF4040", "assign"));
  var n = cc11001100_hook("n", "1" == $(e).attr("maxdiff"), "var-init"),
    r = cc11001100_hook("r", "1" == $(e).attr("conjoint"), "var-init"),
    o = cc11001100_hook("o", "1" == $(e).attr("circulate"), "var-init");
  return objErrorInfo(!a || n || r || o ? e : a, t, i), firstError = cc11001100_hook("firstError", firstError || e, "assign"), fixBottom(), !1;
}
function objErrorInfo(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a;
  e.errorMessage || (a = cc11001100_hook("a", $(e).find(".errorMessage").last(), "assign"), e.errorMessage = cc11001100_hook("e.errorMessage", a[0], "assign"), !firstError && isValidating && (a.css("left", "50%"), a.animate({
    left: cc11001100_hook("left", 0, "object-key-init")
  }, 200))), (e.errorMessage.innerHTML = cc11001100_hook("e.errorMessage.innerHTML", t, "assign")) && $(e.errorMessage).show(), e.removeError = cc11001100_hook("e.removeError", removeError, "assign"), e.errorControl && ($(e.errorControl).attr("ispsm") ? $(e.errorControl).parents("tr").addClass("error-psm") : getErrorControl(e.errorControl).style.background = cc11001100_hook("getErrorControl(e.errorControl).style.background", "#FBD5B5", "assign"));
}
function verifydata(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  if (t) {
    var a,
      n = cc11001100_hook("n", null, "var-init");
    if ("email" == t.toLowerCase() || "msn" == t.toLowerCase()) return (n = cc11001100_hook("n", /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, "assign")).exec(e) ? "" : validate_email;
    if ("日期" != t && "生日" != t && "入学时间" != t) {
      if ("固话" == t) return n = cc11001100_hook("n", /^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$/, "assign"), (n = cc11001100_hook("n", 0 < window.langVer ? /^((\d{4}-\d{7})|(\d{3,4}-\d{7,8}))(-\d{1,4})?$/ : n, "assign")).exec(e) ? "" : validate_phone.replace("，请注意使用英文字符格式", "");
      if ("手机" == t || "手机验证" == t) return (n = cc11001100_hook("n", /^1[3456789]\d{9}$/, "assign")).exec(e) ? "" : validate_mobile.replace("，请注意使用英文字符格式", "");
      if ("密码" == t) return checkPassword(e, i);
      if ("确认密码" == t) {
        if (i && i.firstPwd && i.firstPwd.value != e) return getlang("validate_password");
      } else {
        if ("电话" == t) return (n = cc11001100_hook("n", /(^\d{11}$)|(^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$)/, "assign")).exec(e) ? "" : validate_mo_phone.replace("，请注意使用英文字符格式", "");
        if ("汉字" == t) return (n = cc11001100_hook("n", /^[\u4e00-\u9fa5·]+$/, "assign")).exec(e) ? "" : validate_chinese;
        if ("姓名" == t && (0 == langVer || 2 == langVer)) return (n = cc11001100_hook("n", /^[\u9FA6-\u9FCB\u3400-\u4DB5\u4E00-\u9FA5·]{2,15}$/, "assign")).exec(e) ? "" : "姓名必须为2到15个汉字";
        if ("英文" == t) return (n = cc11001100_hook("n", /^[A-Za-z\s]+$/, "assign")).exec(e) ? "" : validate_english;
        if ("英文数字" == t) return (n = cc11001100_hook("n", /^[A-Za-z\d]+$/, "assign")).exec(e) ? "" : validate_englishdigit;
        if ("学信网验证" == t) return a = cc11001100_hook("a", /^[A-Za-z\d]{12}$/, "assign"), (n = cc11001100_hook("n", /^[A-Za-z\d]{16}$/, "assign")).exec(e) || a.exec(e) ? "" : "请正确输入学信网验证码";
        if ("网址" == t || "公司网址" == t) return a = cc11001100_hook("a", /^www.[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, "assign"), (n = cc11001100_hook("n", /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, "assign")).exec(e) || a.exec(e) ? "" : validate_reticulation;
        if ("身份证号" == t) return n = cc11001100_hook("n", /^\d{15}(\d{2}[A-Za-z0-9])?$/, "assign"), 18 == e.length && checkIDCard(e) ? "" : validate_idcardNum;
        if ("学号" == t) {
          if (!(n = cc11001100_hook("n", /^\d+$/, "assign")).exec(e)) return validate_num.replace("，请注意使用英文字符格式", "");
        } else if ("数字" == t) {
          if (!(n = cc11001100_hook("n", /^(\-)?\d+$/, "assign")).exec(e)) return validate_num.replace("，请注意使用英文字符格式", "");
        } else if ("小数" == t) {
          if (!(n = cc11001100_hook("n", /^(\-)?\d+(\.\d+)?$/, "assign")).exec(e)) return validate_decnum;
        } else if ("车牌号" == t) {
          if (!/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([A-HJ-K][A-HJ-NP-Z0-9][0-9]{4}$))/.exec(e) && !/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.exec(e)) return validate_car;
        } else if ("qq" == t.toLowerCase()) return a = cc11001100_hook("a", /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/, "assign"), (n = cc11001100_hook("n", /^\d+$/, "assign")).exec(e) || a.exec(e) ? "" : validate_qq;
      }
    }
  }
  return "";
}
function checkIDCard(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t = cc11001100_hook("t", [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], "var-init"), i = cc11001100_hook("i", e + "", "var-init"), a = cc11001100_hook("a", e[17], "var-init"), n = cc11001100_hook("n", i.substring(0, 17).split(""), "var-init"), r = cc11001100_hook("r", n.length, "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < r; s++) o += cc11001100_hook("o", n[s] * t[s], "assign");
  i = cc11001100_hook("i", ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][o % 11], "assign"), e = cc11001100_hook("e", /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1|2|3][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X]|[x])$/.test(e), "assign");
  try {
    return !(a.toLowerCase() != i.toLowerCase() || !e);
  } catch (e) {
    return !1;
  }
}
function checkPassword(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i = cc11001100_hook("i", /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,20}/, "var-init"),
    a = cc11001100_hook("a", /[a-zA-Z]+/, "var-init"),
    n = cc11001100_hook("n", /[0-9]+/, "var-init");
  if (t && t.confirmPwd && t.needCheckConfirm && t.confirmPwd.value != e) return getlang("validate_password");
  return i.test(e) && a.test(e) && n.test(e) ? "" : i.test(e) ? a.test(e) ? n.test(e) ? "" : getlang("validate_pass_number") : getlang("validate_pass_zm") : getlang("validate_pass_long");
}
function verifyMinMax(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  if ("数字" == t || "小数" == t) {
    if (!("小数" == t ? /^(\-)?\d+(\.\d+)?$/ : /^(\-)?\d+$/).exec(e)) return "小数" == t ? validate_decnum : validate_num.replace("，请注意使用英文字符格式", "");
    if (0 != e && (e = cc11001100_hook("e", e.replace(/^0+(?=\d)/, ""), "assign")), "" != i) {
      if ("数字" == t && parseInt(e) - parseInt(i) < 0) return validate_num2 + i + "(" + e + ")";
      if ("小数" == t && parseFloat(e) - parseFloat(i) < 0) return validate_num2 + i + "(" + e + ")";
    }
    if ("" != a) {
      if ("数字" == t && 0 < parseInt(e) - parseInt(a)) return validate_num1 + a + "(" + e + ")";
      if ("小数" == t && 0 < parseFloat(e) - parseFloat(a)) return validate_num1 + a + "(" + e + ")";
    }
  } else {
    if ("" != a && 0 < e.length - a) return validate_info_wd3.format(a, e.length);
    if ("" != i && e.length - i < 0) return validate_info_wd4.format(i, e.length);
  }
  return "";
}
function verifyOnlyWrite(i, e) {
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  var a,
    n,
    t,
    r,
    o,
    s = cc11001100_hook("s", e.closest("td"), "var-init");
  return s ? (a = cc11001100_hook("a", "", "assign"), n = cc11001100_hook("n", e.closest("tr"), "assign"), t = cc11001100_hook("t", $(n).closest("div.field"), "assign"), $(e).css("background", ""), r = cc11001100_hook("r", function (e) {
    var t = cc11001100_hook("t", e.val(), "var-init");
    if (e.css("background", ""), t == i) return a = cc11001100_hook("a", getlang("validate_column_only_write"), "assign"), !0;
  }, "assign"), "1" == t.attr("alone") || window.isMobile && "1" != t.attr("fixedslider") ? (o = cc11001100_hook("o", $(n).index(), "assign"), t.find("table").each(function (e, t) {
    "none" != t.style.display && t != n.closest("table") && r($(t).find("tr").eq(o).find("input,textarea"));
  })) : (o = cc11001100_hook("o", $(s).index(), "assign"), $(n).siblings("tr:visible").each(function (e, t) {
    r($(t).find("td").eq(o).find("input,textarea"));
  })), a) : "";
}
function triggerOnlyWrite(e) {
  cc11001100_hook("e", e, "function-parameter");
  e.find("tr:visible input[onlywrite=true]").each(function (e, t) {
    $(t).change();
  });
}
function getTopic(e) {
  cc11001100_hook("e", e, "function-parameter");
  return $(e).attr("topic");
}
function relationItemJoin(e) {
  cc11001100_hook("e", e, "function-parameter");
  "none" == e.style.display && "-1" != $(e).attr("relation") || displayRelationByType($(e));
}
function relationJoin(e) {
  cc11001100_hook("e", e, "function-parameter");
  "none" == e.style.display && "-1" != $(e).attr("relation") || displayRelationByType($(e));
}
function loopHideItemRelation(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t, i;
  isLoadQues || 2 == (i = cc11001100_hook("i", e.split("_"), "assign")).length && (i = cc11001100_hook("i", i[0].replace("q", ""), "assign"), t = cc11001100_hook("t", questionsObject[i], "assign"), clearItemOption(e)) && t && (t.quesAnswer = cc11001100_hook("t.quesAnswer", GetRelationAnsewer(i), "assign"), i = cc11001100_hook("i", $("#" + e), "assign")) && jump(t, i[0]);
}
function clearItemOption(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", !1, "var-init"),
    i = cc11001100_hook("i", $("#" + e), "var-init");
  if (!i) return !1;
  var a,
    n,
    r = cc11001100_hook("r", i.attr("type"), "var-init"),
    e = cc11001100_hook("e", e.split("_")[0].replace("q", ""), "var-init"),
    o = cc11001100_hook("o", $("#div" + e), "var-init"),
    s = cc11001100_hook("s", $(o).attr("type"), "var-init"),
    l = cc11001100_hook("l", $(o).attr("hasjump"), "var-init"),
    d = cc11001100_hook("d", $(o).attr("refered"), "var-init"),
    c = cc11001100_hook("c", $(o).attr("hasitemrelation"), "var-init"),
    p = cc11001100_hook("p", "1" == $(o).attr("haspeie"), "var-init");
  if (!(ItemrelationQs[e] || relationQs[e] || l || d || "11" == s || c || p)) return !1;
  if ("hidden" == r && "11" == s) {
    if (!i.parent().find("span.sortnum").hasClass("sortnum-sel")) return !1;
  } else {
    if ("7" == s) return i.parent().val() == i.val() && i.parent().val("-2").change(), !1;
    if (!i[0].checked) return !1;
  }
  return "radio" == r || "checkbox" == r ? (a = cc11001100_hook("a", 1, "assign"), n = cc11001100_hook("n", "input[type=radio]", "assign"), "radio" == r ? (i[0].checked = cc11001100_hook("i[0].checked", !1, "assign"), i.parent().parent().removeClass("checked").find("a.jqradio").removeClass("jqchecked")) : "checkbox" == r && (a = cc11001100_hook("a", 2, "assign"), i[0].checked = cc11001100_hook("i[0].checked", !(n = cc11001100_hook("n", "input[type=checkbox]", "assign")), "assign"), i.parent().parent().removeClass("checked").find("a.jqcheck").removeClass("jqchecked")), displayRelationByType(o), (d = cc11001100_hook("d", o.attr("refered"), "assign")) && createItem("#div" + e), displaypeie(o, n, a), saveAnswer($(o)), !0) : ("hidden" == r && "11" == s && (l = cc11001100_hook("l", i.parent().parent().parent().parent(), "assign"), $("li.ui-li-static", l).each(function () {
    $(this).find("span.sortnum").hasClass("sortnum-sel") && (t = cc11001100_hook("t", !0, "assign")), sortClear(this);
  }), a = cc11001100_hook("a", 3, "assign"), n = cc11001100_hook("n", "li.ui-li-static", "assign"), saveAnswer($(o)), displayRelationByType(o), d = cc11001100_hook("d", o.attr("refered"), "assign")) && createItem("#div" + e), t);
}
function checkDisplayques(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a = cc11001100_hook("a", $("#" + e), "var-init"),
    n = cc11001100_hook("n", $("#" + e)[0].parentNode.parentNode, "var-init");
  if (7 == $(i).attr("type") ? (n = cc11001100_hook("n", a[0], "assign"), "none" == t ? a.addClass("optInvisible") : (a.removeClass("optInvisible"), a.attr("isdefault") && (a.checked = cc11001100_hook("a.checked", !0, "assign")))) : -1 == n.className.indexOf("ui-radio") && -1 == n.className.indexOf("ui-checkbox") && -1 == n.className.indexOf("ui-li-static") && (n = cc11001100_hook("n", $("#" + e)[0].parentNode.parentNode.parentNode.parentNode, "assign")), n.style.display != t) {
    n.style.display = cc11001100_hook("n.style.display", t, "assign"), window.freshCannotAnsState && freshCannotAnsState(1, n, t);
    i = cc11001100_hook("i", e.replace("q", "").split("_"), "assign");
    if (2 == i.length) {
      var r = cc11001100_hook("r", $("#div" + i[0]), "var-init");
      if (r) {
        var o = cc11001100_hook("o", r.attr("hasjump"), "var-init"),
          a = cc11001100_hook("a", ("1" != r.attr("hasitemrelationchecked") || o || (HasSetItemrelationList[e] && (o = cc11001100_hook("o", "none" != n.style.display, "assign"), (a[0].checked = cc11001100_hook("a[0].checked", o, "assign")) ? $(n).addClass("checked").find("a.jqcheck").addClass("jqchecked") : $(n).removeClass("checked").find("a.jqcheck").removeClass("jqchecked"), e = cc11001100_hook("e", $(n).find(".ui-text"), "assign")) && (o ? e.show() : e.hide()), window.createItem && createItem(r), referTitle(r)), i[0]), "var-init");
        if (randomMode && (a = cc11001100_hook("a", getTopic(r), "assign")), "" == t) "1" == relationItemNotDisplayQ[a] && (relationItemNotDisplayQ[a] = cc11001100_hook("relationItemNotDisplayQ[a]", "", "assign")), "none" == r[0].style.display && "1" != relationNotDisplayQ[a] && (r[0].style.display = cc11001100_hook("r[0].style.display", "", "assign"), "7" != r.attr("type") || r[0].hasInitSelect2 || initEleSelect2(r[0]), window.freshCannotAnsState) && freshCannotAnsState(2, r[0], "");else {
          for (var n = cc11001100_hook("n", r.attr("type"), "var-init"), o = cc11001100_hook("o", "div.ui-radio", "var-init"), s = cc11001100_hook("s", ("4" == n ? o = cc11001100_hook("o", "div.ui-checkbox", "assign") : "11" == n ? o = cc11001100_hook("o", "li.ui-li-static", "assign") : "7" == n && (o = cc11001100_hook("o", ".ui-select option", "assign")), "none"), "var-init"), l = cc11001100_hook("l", $("#div" + i[0] + " " + o), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < l.length; d++) if ("" == l[d].style.display) {
            s = cc11001100_hook("s", "", "assign");
            break;
          }
          "1" != relationNotDisplayQ[a] && (r[0].style.display = cc11001100_hook("r[0].style.display", s, "assign"), window.freshCannotAnsState) && freshCannotAnsState(2, r, s), "none" == s && (relationItemNotDisplayQ[a] || (relationItemNotDisplayQ[a] = cc11001100_hook("relationItemNotDisplayQ[a]", "1", "assign")), jumpAny(!1, r));
        }
      }
    }
  }
}
function displayRelationByType(e) {
  cc11001100_hook("e", e, "function-parameter");
  e = cc11001100_hook("e", getTopic(e), "assign");
  (ItemrelationQs[e] || relationQs[e]) && (GetRelationAnsewer(e, !0), handleItemRelation(e), updateTopicNumber(), fixBottom());
}
function handleItemRelation(k) {
  cc11001100_hook("k", k, "function-parameter");
  var e = cc11001100_hook("e", allQArray, "var-init"),
    j = cc11001100_hook("j", (8e4 < k && (e = cc11001100_hook("e", $(".field[topic='" + k + "'][csetq='1']").parent().children(), "assign")), k), "var-init");
  if (e.each(function () {
    var c = cc11001100_hook("c", $(this), "var-init"),
      e = cc11001100_hook("e", getTopic(c), "var-init"),
      p = cc11001100_hook("p", e, "var-init");
    if (randomMode && (j = cc11001100_hook("j", $(questionsObject[k]).attr("id").replace("div", ""), "assign"), p = cc11001100_hook("p", c.attr("id").replace("div", ""), "assign")), parseInt(p) <= parseInt(j)) return !0;
    var t = cc11001100_hook("t", c.attr("relation"), "var-init");
    if (t) {
      var i = cc11001100_hook("i", -1 != t.indexOf("|") ? "|" : "$", "var-init"),
        a = cc11001100_hook("a", t.split(i), "var-init"),
        n = cc11001100_hook("n", !1, "var-init");
      "|" == i && (n = cc11001100_hook("n", !0, "assign"));
      for (var r = cc11001100_hook("r", 0, "var-init"); r < a.length; r++) {
        var o = cc11001100_hook("o", displayRelationLogic(a[r]), "var-init");
        if ("$" == i) {
          if (o) {
            n = cc11001100_hook("n", !0, "assign");
            break;
          }
        } else if (!o) {
          n = cc11001100_hook("n", !1, "assign");
          break;
        }
      }
      var s = cc11001100_hook("s", n ? "" : "none", "var-init"),
        l = cc11001100_hook("l", !0, "var-init");
      if (c[0].style.display == s && (l = cc11001100_hook("l", !1, "assign")), checkDisplayItemques(c[0], s), n) {
        var d = cc11001100_hook("d", !1, "var-init");
        if (relationBindTopic[e]) for (var u = cc11001100_hook("u", relationBindTopic[e], "var-init"), w = cc11001100_hook("w", 0, "var-init"); w < u.length; w++) if (parseInt(u[w]) == parseInt(k)) {
          var h,
            f,
            d = cc11001100_hook("d", !0, "var-init"),
            g = cc11001100_hook("g", t.split(",")[0], "var-init");
          -1 == t.indexOf("$") && -1 == t.indexOf("|") && g && "1" == $("#div" + g).attr("qingjing") && (f = cc11001100_hook("f", t.split(",")[1], "assign")) && -1 == f.indexOf(";") && (f = cc11001100_hook("f", "#q" + g + "_" + f, "assign"), h = cc11001100_hook("h", parseInt($("#div" + g).attr("limit")), "assign"), f = cc11001100_hook("f", $(f)[0], "assign")) && !f.hasSetQj && 1 < h && (f.hasSetQj = cc11001100_hook("f.hasSetQj", !0, "assign"), h = cc11001100_hook("h", getqjdesc(f, $("#div" + g)), "assign")) && (f = cc11001100_hook("f", "color:" + pageColor, "assign"), $(c).prepend("<div style='margin-bottom:45px;" + f + "'>" + h + "</div>"));
          break;
        }
        if (!d && itemRelationBindTopic[e]) for (u = cc11001100_hook("u", itemRelationBindTopic[e], "assign"), w = cc11001100_hook("w", 0, "assign"); w < u.length; w++) if (parseInt(u[w]) == parseInt(k)) {
          d = cc11001100_hook("d", !0, "assign");
          break;
        }
        d && l && ($(c).attr("hasjump") || $(c).attr("refered") || relationQs[e] || ItemrelationQs[e]) ? (loopHideRelation(c), initqSlider(c[0])) : (loopShowRelation(c), initqSlider(c[0]), c[0].hasInitSelect2 = cc11001100_hook("c[0].hasInitSelect2", !1, "assign")), initEleSelect2(c[0]), window.hasHeatMap && heatMapInit(c[0]), needAdjustVideo() && adjustVideoHeight(c[0]);
      } else loopHideRelation(c);
      window.referTitle && referTitle(c[0]);
    }
    if (c.attr("hasitemrelation")) {
      var s = cc11001100_hook("s", "", "var-init"),
        l = cc11001100_hook("l", "", "var-init"),
        m = cc11001100_hook("m", c[0].getAttribute("type"), "var-init"),
        v = cc11001100_hook("v", ("3" == m ? (s = cc11001100_hook("s", "input[type=radio]", "assign"), l = cc11001100_hook("l", ".ui-radio", "assign")) : "4" == m ? (s = cc11001100_hook("s", "input[type=checkbox]", "assign"), l = cc11001100_hook("l", ".ui-checkbox", "assign")) : "11" == m ? (s = cc11001100_hook("s", "li.ui-li-static", "assign"), l = cc11001100_hook("l", ".ui-li-static", "assign")) : "7" == m && (s = cc11001100_hook("s", "div.ui-select option", "assign"), l = cc11001100_hook("l", ".ui-select option", "assign")), !!document.getElementById("lbl" + p + "_1")), "var-init"),
        x = cc11001100_hook("x", [], "var-init"),
        y = cc11001100_hook("y", new Object(), "var-init"),
        b = cc11001100_hook("b", $(l, c), "var-init");
      if ($(s, c[0]).each(function (e) {
        var t = cc11001100_hook("t", !1, "var-init"),
          i = cc11001100_hook("i", this.value, "var-init"),
          a = cc11001100_hook("a", ("11" == m && (i = cc11001100_hook("i", $(this).find("input:hidden")[0].value, "assign")), "q" + p + "_" + i), "var-init"),
          i = cc11001100_hook("i", i - 1, "var-init");
        if (HasSetItemrelationList[a]) {
          var n = cc11001100_hook("n", HasSetItemrelationList[a], "var-init"),
            r = cc11001100_hook("r", -1 != n.indexOf("|") ? "|" : "$", "var-init"),
            o = cc11001100_hook("o", n.split(r), "var-init");
          "|" == r && (t = cc11001100_hook("t", !0, "assign"));
          for (var s, l = cc11001100_hook("l", 0, "var-init"); l < o.length; l++) {
            var d = cc11001100_hook("d", displayRelationLogic(o[l]), "var-init");
            if ("$" == r) {
              if (d) {
                t = cc11001100_hook("t", !0, "assign");
                break;
              }
            } else if (!d) {
              t = cc11001100_hook("t", !1, "assign");
              break;
            }
          }
          checkDisplayques(a, t ? "" : "none", c), t || loopHideItemRelation(a), v && ($("#" + a), -1 == (n = cc11001100_hook("n", $("#" + a)[0].parentNode.parentNode, "assign")).className.indexOf("ui-radio") && -1 == n.className.indexOf("ui-checkbox") && -1 == n.className.indexOf("ui-li-static") && (n = cc11001100_hook("n", $("#" + a)[0].parentNode.parentNode.parentNode.parentNode, "assign")), (s = cc11001100_hook("s", $(n).attr("group"), "assign")) && -1 == x.indexOf(s) && x.push(s), s) && t && !y[s] && (y[s] = cc11001100_hook("y[s]", "1", "assign"));
        } else v && (s = cc11001100_hook("s", $(b[i]).attr("group"), "assign")) && !y[s] && (y[s] = cc11001100_hook("y[s]", "1", "assign"));
      }), v) for (var C = cc11001100_hook("C", 0, "var-init"); C < x.length; C++) {
        var I = cc11001100_hook("I", x[C], "var-init"),
          _ = cc11001100_hook("_", y[I], "var-init"),
          I = cc11001100_hook("I", "lbl" + p + "_" + I, "var-init"),
          I = cc11001100_hook("I", document.getElementById(I), "var-init");
        I && (I.style.display = cc11001100_hook("I.style.display", _ ? "" : "none", "assign"), I.parentNode) && -1 < I.parentNode.className.indexOf("ui-controlgroup") && (I.parentNode.style.display = cc11001100_hook("I.parentNode.style.display", _ ? "" : "none", "assign"));
      }
    }
  }), window.totalCut && 0 < window.totalCut) for (var t = cc11001100_hook("t", 0, "var-init"); t < window.totalCut; t++) {
    var i = cc11001100_hook("i", $("#" + ("divCut" + (t + 1))), "var-init"),
      a = cc11001100_hook("a", i.attr("relation"), "var-init");
    if (a) {
      var n = cc11001100_hook("n", -1 != a.indexOf("|") ? "|" : "$", "var-init"),
        r = cc11001100_hook("r", a.split(n), "var-init"),
        o = cc11001100_hook("o", !1, "var-init");
      "|" == n && (o = cc11001100_hook("o", !0, "assign"));
      for (var s = cc11001100_hook("s", 0, "var-init"); s < r.length; s++) {
        var l = cc11001100_hook("l", displayRelationLogic(r[s]), "var-init");
        if ("$" == n) {
          if (l) {
            o = cc11001100_hook("o", !0, "assign");
            break;
          }
        } else if (!l) {
          o = cc11001100_hook("o", !1, "assign");
          break;
        }
      }
      a = cc11001100_hook("a", "c" + (t + 1), "assign");
      i[0].style.display = cc11001100_hook("i[0].style.display", o ? "" : "none", "assign"), adjustVideoHeight(i[0]), relationNotDisplayQ[a] = cc11001100_hook("relationNotDisplayQ[a]", o ? "" : "1", "assign");
    }
  }
}
function displayRelationLogic(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", !1, "var-init");
  if (!e) return !0;
  var i = cc11001100_hook("i", e.split(","), "var-init");
  if (!(i.length < 2)) {
    var a = cc11001100_hook("a", -1 == e.indexOf("."), "var-init"),
      e = cc11001100_hook("e", GetRelationAnsewer(i[0]), "var-init");
    if (!e || "" == e || "-3" == e) return !1;
    if ("6" == questionsObject[i[0]].attr("type")) {
      for (var n = cc11001100_hook("n", new Array(), "var-init"), r = cc11001100_hook("r", e.split(","), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r.length; o++) {
        var s = cc11001100_hook("s", r[o].split("!"), "var-init");
        if (s.length < 2) return t;
        var l = cc11001100_hook("l", new Object(), "var-init");
        l.sIndex = cc11001100_hook("l.sIndex", s[0], "assign"), l.val = cc11001100_hook("l.val", s[1], "assign"), n.push(l);
      }
      var d = cc11001100_hook("d", i[1].split("^"), "var-init");
      if (d.length < 2) return !1;
      for (var c = cc11001100_hook("c", a ? d[1].split(";") : d[1].split("."), "var-init"), p = cc11001100_hook("p", !1, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < n.length && (d[0] == n[u].sIndex && (p = cc11001100_hook("p", !0, "assign"), t = cc11001100_hook("t", checkRelationDisplayLogic(a, i, c, w = cc11001100_hook("w", n[u].val.split(";"), "assign")), "assign")), !p); u++);
    } else {
      var w = cc11001100_hook("w", e.split(","), "var-init"),
        c = cc11001100_hook("c", a ? i[1].split(";") : i[1].split("."), "var-init");
      t = cc11001100_hook("t", checkRelationDisplayLogic(a, i, c, w), "assign");
    }
  }
  return t;
}
function checkRelationDisplayLogic(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  if (-1 != t[1].indexOf("-")) {
    if (e) for (r = cc11001100_hook("r", 0, "assign"); r < i.length; r++) {
      for (n = cc11001100_hook("n", !0, "assign"), o = cc11001100_hook("o", i[r].replace("-", ""), "assign"), l = cc11001100_hook("l", 0, "assign"); l < a.length; l++) if (o == a[l]) {
        n = cc11001100_hook("n", !1, "assign");
        break;
      }
      if (!n) break;
    } else for (var n = cc11001100_hook("n", !1, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < i.length; r++) {
      for (var o = cc11001100_hook("o", i[r].replace("-", ""), "var-init"), s = cc11001100_hook("s", !0, "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < a.length; l++) if (o == a[l]) {
        s = cc11001100_hook("s", !1, "assign");
        break;
      }
      if (s) {
        n = cc11001100_hook("n", !0, "assign");
        break;
      }
    }
  } else if (e) for (r = cc11001100_hook("r", 0, "assign"); r < i.length; r++) {
    for (n = cc11001100_hook("n", !1, "assign"), o = cc11001100_hook("o", i[r].replace("-", ""), "assign"), l = cc11001100_hook("l", 0, "assign"); l < a.length; l++) if (o == a[l]) {
      n = cc11001100_hook("n", !0, "assign");
      break;
    }
    if (n) break;
  } else for (var n = cc11001100_hook("n", !0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < i.length; r++) {
    for (var s = cc11001100_hook("s", !1, "var-init"), o = cc11001100_hook("o", i[r].replace("-", ""), "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < a.length; l++) if (o == a[l]) {
      s = cc11001100_hook("s", !0, "assign");
      break;
    }
    if (!s) {
      n = cc11001100_hook("n", !1, "assign");
      break;
    }
  }
  return n;
}
function GetRelationAnsewer(s, e) {
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  var l = cc11001100_hook("l", questionsObject[s], "var-init"),
    t = cc11001100_hook("t", l.attr("type"), "var-init"),
    d = cc11001100_hook("d", "", "var-init"),
    i = cc11001100_hook("i", "none" != l[0].style.display || "-1" == $(l[0]).attr("relation"), "var-init");
  if (!(e = cc11001100_hook("e", (!i || "1" != l.attr("qingjing") || "-3" != l.quesAnswer && "" != l.quesAnswer) && "1" != l.attr("hasitemrelationchecked") ? e : !0, "assign")) && l.quesAnswer && "" != l.quesAnswer) return d = cc11001100_hook("d", "-3" == (d = cc11001100_hook("d", l.quesAnswer, "assign")) ? "" : d, "assign");
  if ("3" == t || "4" == t || "21" == t || "11" == t || "5" == t || "6" == t || "7" == t) {
    if (i) switch (d = cc11001100_hook("d", "-3", "assign"), t) {
      case "3":
        $("input[type='radio']:checked", l).each(function (e) {
          return d = cc11001100_hook("d", this.value, "assign"), !1;
        });
        break;
      case "4":
        var a = cc11001100_hook("a", 0, "var-init");
        $("input:checked", l).each(function () {
          "none" != this.parentNode.parentNode.style.display && (0 < a ? d += cc11001100_hook("d", ",", "assign") : d = cc11001100_hook("d", "", "assign"), d += cc11001100_hook("d", this.value, "assign"), a++);
        });
        break;
      case "21":
        1 == $(l).attr("isshelf") ? d = cc11001100_hook("d", getshelfanswer(l, !0) || "", "assign") : (a = cc11001100_hook("a", 0, "assign"), $(".shop-item .itemnum", l).each(function (e) {
          "0" != this.value && (0 < a ? d += cc11001100_hook("d", ",", "assign") : d = cc11001100_hook("d", "", "assign"), d += cc11001100_hook("d", e + 1, "assign"), a++);
        }));
        break;
      case "11":
        a = cc11001100_hook("a", 0, "assign");
        $("li.ui-li-static", l).each(function () {
          var e,
            t = cc11001100_hook("t", $(this).find("span.sortnum").html(), "var-init");
          "none" != this.style.display && (e = cc11001100_hook("e", $(this).find("input:hidden")[0].value, "assign"), i) && t && (0 < a ? d += cc11001100_hook("d", ",", "assign") : d = cc11001100_hook("d", "", "assign"), d += cc11001100_hook("d", e, "assign"), a++);
        });
        break;
      case "5":
        d = cc11001100_hook("d", $("input:hidden", l)[0].value, "assign");
        break;
      case "6":
        mIndex = cc11001100_hook("mIndex", 0, "assign");
        var c = cc11001100_hook("c", "true" == $(l).attr("daozhi"), "var-init"),
          p = cc11001100_hook("p", "1" == $(l).attr("texthighlights"), "var-init");
        $("input:hidden", l).each(function (e) {
          0 < mIndex ? d += cc11001100_hook("d", ",", "assign") : d = cc11001100_hook("d", "", "assign");
          var t,
            i,
            a,
            n = cc11001100_hook("n", !1, "var-init"),
            r = cc11001100_hook("r", e + 1, "var-init"),
            o = cc11001100_hook("o", (window.hasReferClient && !c && !p && (i = cc11001100_hook("i", $(l).attr("id"), "assign"), t = cc11001100_hook("t", s, "assign"), i && (i = cc11001100_hook("i", i.replace("div", ""), "assign"), parseInt(i) == i) && t != i && (t = cc11001100_hook("t", i, "assign")), i = cc11001100_hook("i", document.getElementById("divRefTab" + t), "assign"), o = cc11001100_hook("o", $(i).hasClass("isRandomRow"), "assign"), a = cc11001100_hook("a", document.getElementById("drv" + t + "_" + (e + 1)), "assign"), (a = cc11001100_hook("a", o ? $(i).find("tr[rowindex='" + e + "']")[0] : a, "assign")) && "none" == a.style.display || !a && questionsObject[t]) && (n = cc11001100_hook("n", !0, "assign")), d += cc11001100_hook("d", r + spChars[4], "assign"), this.value), "var-init");
          o ? -1 < o.indexOf(spChars[2]) && (o = cc11001100_hook("o", o.split(spChars[2])[0], "assign")) : o = cc11001100_hook("o", "-2", "assign"), d += cc11001100_hook("d", o = cc11001100_hook("o", n ? "-4" : o, "assign"), "assign"), mIndex++;
        });
        break;
      case "7":
        d = cc11001100_hook("d", $("select", l)[0].value || $("select", l).find("option:checked").val(), "assign");
    } else d = cc11001100_hook("d", "-3", "assign");
    l.quesAnswer = cc11001100_hook("l.quesAnswer", d, "assign");
  }
  return d;
}
function checkDisplay(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", !1, "var-init");
  for (t in e) for (var a = cc11001100_hook("a", 0, "var-init"); a < e[t].length; a++) {
    var n = cc11001100_hook("n", e[t][a].replace("-", ""), "var-init"),
      r = cc11001100_hook("r", e[t][a].replace("q", "").split("_"), "var-init"),
      n = cc11001100_hook("n", document.getElementById(n), "var-init"),
      o = cc11001100_hook("o", document.getElementById("q" + r[0]), "var-init"),
      s = cc11001100_hook("s", document.getElementById("div" + r[0]), "var-init"),
      l = cc11001100_hook("l", $(s).attr("type"), "var-init");
    if (1 == $(s).attr("qingjing")) {
      if ("" == s.style.display && n && n.checked) {
        i = cc11001100_hook("i", !0, "assign");
        break;
      }
    } else {
      var d = cc11001100_hook("d", !1, "var-init");
      if (n && "11" == l && (d = cc11001100_hook("d", "1" == n.parentNode.parentNode.getAttribute("check"), "assign")), n && "11" != l && 0 < r[1] == n.checked) {
        i = cc11001100_hook("i", !0, "assign");
        break;
      }
      if (n && "11" == l && 0 < r[1] == d) {
        i = cc11001100_hook("i", !0, "assign");
        break;
      }
      if (n || 5 != l) {
        if (!n && o && r[1] == o.value) {
          i = cc11001100_hook("i", !0, "assign");
          break;
        }
      } else {
        d = cc11001100_hook("d", $("a.rate-on", s), "assign"), l = cc11001100_hook("l", "", "assign");
        if (0 < d.length && (l = cc11001100_hook("l", $(d[d.length - 1]).attr("val"), "assign")), r[1] == l) {
          i = cc11001100_hook("i", !0, "assign");
          break;
        }
      }
    }
  }
  return i;
}
function loopShowRelation(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", getTopic(e), "var-init");
  "1" == $(e).attr("isshop") && updateCart($(e)), "1" == $(e).attr("qingjing") && (relationQs[t] || ItemrelationQs[t]) && GetRelationAnsewer(t, !0);
}
function loopHideRelation(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (!isLoadQues) {
    getTopic(e);
    if ("1" == $(e).attr("isshop") && updateCart($(e)), !clearFieldValue(e)) return !1;
    jumpAny(!1, e);
  }
}
function checkDisplayItemques(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  e.getAttribute("id").replace("div", "");
  var n = cc11001100_hook("n", getTopic(e), "var-init");
  relationNotDisplayQ[n] = cc11001100_hook("relationNotDisplayQ[n]", "none" == t ? "1" : "", "assign"), window.freshCannotAnsState && freshCannotAnsState(2, e, t), e.style.display != t && ("1" == relationItemNotDisplayQ[n] ? e.style.display = cc11001100_hook("e.style.display", "none", "assign") : e.style.display = cc11001100_hook("e.style.display", t, "assign"), "" == t && (setFixedSliderTableHandler($(e)), e.uploader ? e.uploader.refresh() : "33" == e.getAttribute("type") || "9" == e.getAttribute("type") || "10" == e.getAttribute("type") ? $(e).find(".file").each(function (e, t) {
    t.parentNode.uploader && t.parentNode.uploader.refresh();
  }) : "10" == e.getAttribute("type") && dispatchEvent(e.querySelector(".ui-table-scroll .ui-table-body"), "scroll")), "1" == e.getAttribute("qingjing")) && (relationQs[n] || ItemrelationQs[n]) && GetRelationAnsewer(n, !0);
}
function dispatchEvent(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  try {
    var i;
    e.dispatchEvent && ((i = cc11001100_hook("i", document.createEvent("Event"), "assign")).initEvent(t, !0, !0), e.dispatchEvent(i));
  } catch (e) {}
}
function checkHuChi(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var i, a;
  $(".huchi", e)[0] && (i = cc11001100_hook("i", $(t), "assign"), $("input:checked", i)[0]) && (e = cc11001100_hook("e", $(".ui-checkbox", e), "assign"), a = cc11001100_hook("a", i.hasClass("huchi"), "assign"), e.each(function () {
    var e;
    return this == t || (e = cc11001100_hook("e", $(this), "assign"), !$("input:checked", e)[0]) || void ((a || e.hasClass("huchi")) && e.trigger("click"));
  }));
}
var isAutoSubmit = cc11001100_hook("isAutoSubmit", !1, "var-init"),
  hasAutoSubmit = cc11001100_hook("hasAutoSubmit", !1, "var-init"),
  amt = cc11001100_hook("amt", 0, "var-init"),
  hasSetmsg = cc11001100_hook("hasSetmsg", !1, "var-init");
function autoSubmit(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  if (isAutoSubmit = cc11001100_hook("isAutoSubmit", !0, "assign"), needTip()) alertNew($(divTip).text());else {
    var a = cc11001100_hook("a", $("#divNext a")[0], "var-init");
    if (a && (a.disabled = cc11001100_hook("a.disabled", !1, "assign")), window.hasSurveyTime) {
      var n = cc11001100_hook("n", $(pageHolder[cur_page]).attr("maxtime"), "var-init"),
        r = cc11001100_hook("r", !1, "var-init");
      if (n && window.initMaxSurveyTime && 0 <= n - initMaxSurveyTime && (r = cc11001100_hook("r", !0, "assign")), !n || r || maxSurveyTime <= 1 || reachMaxCheatCount) {
        var o = cc11001100_hook("o", 0, "var-init");
        for (window.needSkipPageTime = cc11001100_hook("window.needSkipPageTime", !0, "assign"); cur_page < totalPage - 1 && (pageHolder[cur_page].hasExceedTime = cc11001100_hook("pageHolder[cur_page].hasExceedTime", !0, "assign"), window.isinterview ? showNextInterview(!0, !0) : 3 == isChuangGuan || 4 == isChuangGuan || window.IsOneQuestionPerPage ? showNextField(!1, !0, !0) : window.isytyy ? showYtyyNextField(!0) : show_next_page(), !(++o > totalPage)););
      }
    }
    if (ktimes++, divMaxTime.style.display = cc11001100_hook("divMaxTime.style.display", "none", "assign"), $("body").css("padding-top", "0px"), (pageHolder = cc11001100_hook("pageHolder", pageHolder || $("fieldset.fieldset"), "assign"))[cur_page].hasExceedTime = cc11001100_hook("(pageHolder = pageHolder || $(\"fieldset.fieldset\"))[cur_page].hasExceedTime", !0, "assign"), cur_page < totalPage - 1) window.isinterview ? showNextInterview(!0, !0) : 3 == isChuangGuan || 4 == isChuangGuan || window.IsOneQuestionPerPage ? showNextField(!1, !0, !0) : window.isytyy ? showYtyyNextField(!0) : show_next_page(), isAutoSubmit = cc11001100_hook("isAutoSubmit", !1, "assign");else {
      if (window.lastLabel && lastLabel.hide(), layer.closeAll(), window.isinterview || (pageHolder[cur_page].style.display = cc11001100_hook("pageHolder[cur_page].style.display", "none", "assign")), a && a.initVal && (a.innerHTML = cc11001100_hook("a.innerHTML", a.initVal, "assign")), !window.hasSurveyTime && 2 != window.isChuangGuan && 1 != totalPage || window.useAliVerify || !window.hasAnswer || e || hasAutoSubmit || i) {
        n = cc11001100_hook("n", getlang("tit_time_up"), "assign");
        window.tojumppage && (window.tojumppage = cc11001100_hook("window.tojumppage", !1, "assign")), 2 == window.isChuangGuan && (window.useAliVerify && ($("#divSubmit").show().css("padding-top", "30px").parent().css("margin", "0 2px"), $("#SubmitBtnGroup").show(), $("body").append($("#SubmitBtnGroup")), $("#divQuestion").css("border", "none").css("margin", "0 2px").css("border-radius", "0")), n = cc11001100_hook("n", hasChuGuanSuc ? getlang("chuanguang_success_tit") : getlang("chuanguang_fail"), "assign")), e && (n = cc11001100_hook("n", e, "assign")), hasSetmsg || i || (window.isinterview && !window.isInterview2 ? reportSend(n) : (window.isytyy && ($("#ytyyNum").hide(), $(".ytyybtnWrap").hide(), $(".footer").show()), $("#ValError").html(n)), hasSetmsg = cc11001100_hook("hasSetmsg", !0, "assign")), i && (window.isinterview && !window.isInterview2 ? reportSend(n) : $("#ValError").html(getlang("nomsgtext"))), window.isinterview && interViewfinish(), (3 == window.isChuangGuan || 4 == window.isChuangGuan || window.IsOneQuestionPerPage) && ($("#divContentHeader").hide(), window.IsOneQuestionPerPage && $(".footer").addClass("fillheight"), $("#lxPrevBtn,#lxNextBtn").hide(), $(".fmWrap").hide(), $("#divContent").show(), t) && (window.islxsubmit = cc11001100_hook("window.islxsubmit", !0, "assign"), $("#lxNextBtn").text(getlang("submit")).show());
      } else {
        if (-1 < window.location.href.indexOf("/pm/")) return void alertNew("预览模式不能提交成功");
        hasAutoSubmit = cc11001100_hook("hasAutoSubmit", !(isAutoSubmit = cc11001100_hook("isAutoSubmit", !(hlv = cc11001100_hook("hlv", "1", "assign")), "assign")), "assign"), groupAnswer(1), 3 != window.isChuangGuan && 4 != window.isChuangGuan && !window.IsOneQuestionPerPages || $("#lxPrevBtn,#lxNextBtn").hide();
      }
      $("#divPrev").hide();
    }
    isAutoSubmit = cc11001100_hook("isAutoSubmit", !1, "assign");
  }
}
function ksCountdown() {
  var e, t, i, a;
  window.isKaoShi && (avoidPaste(), window.maxOpTime) && window.divContent && !window.IsPar && !window.isInterview2 && (e = cc11001100_hook("e", !1, "assign"), window.localStorage && (t = cc11001100_hook("t", localStorage["wjxlastanswer" + activityId], "assign")) && (new Date().getTime() - t) / 6e4 < 10 && (e = cc11001100_hook("e", !0, "assign"), setTimeOpup(), $("#divSubmit").hide(), 3 != window.isChuangGuan && 4 != window.isChuangGuan && !window.IsOneQuestionPerPage || $("#lxPrevBtn,#lxNextBtn").hide()), e || (document.onclick = cc11001100_hook("document.onclick", document.onkeyup = cc11001100_hook("document.onkeyup", document.onscroll = cc11001100_hook("document.onscroll", document.onmousemove = cc11001100_hook("document.onmousemove", function (e) {
    i = cc11001100_hook("i", new Date(), "assign");
  }, "assign"), "assign"), "assign"), "assign"), i = cc11001100_hook("i", new Date(), "assign"), a = cc11001100_hook("a", setInterval(function () {
    var e = cc11001100_hook("e", new Date(), "var-init"),
      e = cc11001100_hook("e", parseInt((e - i) / 1e3), "var-init"),
      e = cc11001100_hook("e", maxOpTime + 5 - e, "var-init");
    e <= 0 ? (clearInterval(a), setLastOp(), setTimeOpup(!0), closeAlert()) : e <= 5 && alertNew(getlang("tit_leavetime").replace("{0}", e));
  }, 1e3), "assign")));
}
function avoidPaste() {
  $(".textCont,input,textarea").on({
    paste: function () {
      return !1;
    },
    contextmenu: function (e) {
      return e.preventDefault(), !1;
    },
    dragover: function (e) {
      e.preventDefault();
    },
    drop: function (e) {
      e.preventDefault();
    }
  });
}
function avoidCopy(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (e = cc11001100_hook("e", window.event || e, "assign"), window.iscropper) return !0;
  if (!isKaoShi) {
    var t;
    if (e && (e.target ? t = cc11001100_hook("t", e.target, "assign") : e.srcElement && (t = cc11001100_hook("t", e.srcElement, "assign")), "INPUT" == (t = cc11001100_hook("t", 3 == t.nodeType ? t.parentNode : t, "assign")).tagName || "TEXTAREA" == t.tagName || "SELECT" == t.tagName || "textCont" == t.className || "viewer-move" == t.className)) return !0;
    document.selection && document.selection.empty && document.selection.empty();
  }
  return !1;
}
function setLastOp() {
  window.localStorage && localStorage.setItem("wjxlastanswer" + activityId, new Date().getTime());
}
function setTimeOpup(e) {
  cc11001100_hook("e", e, "function-parameter");
  hasSurveyTime = cc11001100_hook("hasSurveyTime", !0, "assign"), hasMaxtime = cc11001100_hook("hasMaxtime", !0, "assign");
  var t = cc11001100_hook("t", document.getElementById("yz_popdivData"), "var-init"),
    t = cc11001100_hook("t", (t && "none" != t.style.display && PDF_close(), window.amt = cc11001100_hook("window.amt", 2, "assign"), window.hasChuGuanSuc = cc11001100_hook("window.hasChuGuanSuc", !1, "assign"), getlang("tit_maxOpTime").replace("{0}", maxOpTime)), "var-init"),
    i = cc11001100_hook("i", getlang("tit_needsubmit"), "var-init");
  autoSubmit(t + (i = cc11001100_hook("i", e ? i : "", "assign")), e);
}
function forbidBackSpace(e) {
  cc11001100_hook("e", e, "function-parameter");
  var e = cc11001100_hook("e", e || window.event, "var-init"),
    t = cc11001100_hook("t", e.target || e.srcElement, "var-init"),
    i = cc11001100_hook("i", t.type || t.getAttribute("type"), "var-init");
  if (8 == e.keyCode && "search" != i && "number" != i && "tel" != i && "password" != i && "text" != i && "textarea" != i && "textCont" != t.className) return !1;
}
function loadViewer(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", window.CDNDomain || "", "var-init"),
    a = cc11001100_hook("a", window.JsVersion || "", "var-init");
  window.Viewer ? e && e() : (t = cc11001100_hook("t", $("<link>", {
    rel: cc11001100_hook("rel", "stylesheet", "object-key-init"),
    type: cc11001100_hook("type", "text/css", "object-key-init"),
    href: cc11001100_hook("href", i + "/css/viewer.css?v=" + a, "object-key-init")
  }), "assign"), $("head").append(t), $.ajax({
    type: cc11001100_hook("type", "GET", "object-key-init"),
    url: cc11001100_hook("url", i + "/js/plugin/jquery-viewer.js?v=" + a, "object-key-init"),
    success: function () {
      e && e();
    },
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init")
  }));
}
function CheckMax(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  if (t) {
    var n = cc11001100_hook("n", $(e).attr("dval"), "var-init"),
      r = cc11001100_hook("r", $(e).closest("tbody"), "var-init");
    if ("tbody" == r[0].tagName.toLocaleLowerCase()) {
      t = cc11001100_hook("t", r.find("tr.trlabel").eq(0).find("th"), "assign");
      if (i) return !((d = cc11001100_hook("d", $(e).closest("tr").attr("itemmax"), "assign")) && !$(e).hasClass("rate-on") && (d = cc11001100_hook("d", parseInt(d), "assign")) <= (o = cc11001100_hook("o", $(e).closest("tr").find(".rate-on").length, "assign")) && (c = cc11001100_hook("c", $(e).closest("tr").prev(".rowtitle").children(".title").text(), "assign"), alertNew(getlang("tit_item_max").replace("{0}", "").replace("{1}", c).replace("{2}", d)), 1));
      var o,
        i = cc11001100_hook("i", $(e).closest("table"), "var-init"),
        s = cc11001100_hook("s", i.parent().hasClass("scaletablewrap"), "var-init"),
        l = cc11001100_hook("l", n - 1, "var-init"),
        d = cc11001100_hook("d", t.eq(l = cc11001100_hook("l", s ? n : l, "assign")).attr("itemmax"), "var-init");
      if (t.eq(l)[0]) {
        if (a && d && 0 < d) return s = cc11001100_hook("s", $(e).closest("td").index(), "assign"), o = cc11001100_hook("o", i.find("tr").children("td:nth-child(" + (s + 1) + ")").find(".rate-on").length, "assign"), i.parent().hasClass("isAloneTdDiv") && (s = cc11001100_hook("s", $(e).index(), "assign"), o = cc11001100_hook("o", i.find(".aloneAnsItemDiv").children(".rate-off:nth-child(" + (s + 1) + ")").filter(function () {
          return $(this).hasClass("rate-on");
        }).length, "assign")), !(d <= o && !$(e).hasClass("rate-on") && (c = cc11001100_hook("c", i.find(".trlabel th").eq(s).text(), "assign"), alertNew(getlang("tit_item_max").replace("{0}", "").replace("{1}", c).replace("{2}", d)), 1));
        if (d && window.cepingCandidate && "-1" != d.indexOf("%") && (a = cc11001100_hook("a", parseInt(d.replace("%", "")), "assign"), o = cc11001100_hook("o", cepingCandidate.split("&nbsp;&nbsp;&nbsp;"), "assign"), d = cc11001100_hook("d", Math.ceil(o.length * a / 100), "assign")), d && 0 < d) {
          for (var c, p = cc11001100_hook("p", 0, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < r[0].rows.length; u++) {
            for (var w = cc11001100_hook("w", $(r[0].rows[u]).find("a.rate-off"), "var-init"), h = cc11001100_hook("h", null, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < w.length; f++) w.eq(f).hasClass("rate-on") && (h = cc11001100_hook("h", w.eq(f), "assign"));
            h && h.attr("dval") == n && p++;
          }
          if (d <= p) return c = cc11001100_hook("c", t.eq(l).text(), "assign"), alertNew(getlang("tit_item_max").replace("{0}", "").replace("{1}", c).replace("{2}", d)), !1;
        }
      }
    }
  }
  return !0;
}
function elagerImg(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  (e = cc11001100_hook("e", e || window.event, "assign")).stopPropagation && e.stopPropagation();
  e = cc11001100_hook("e", $(t).parent().find("img"), "assign");
  1 == e.attr("viewer") && e[0].viewer.show();
}
function enlargeImg(e) {
  cc11001100_hook("e", e, "function-parameter");
  initDescImg();
  var t = cc11001100_hook("t", e || $("#divQuestion img,#divDesc img,#divVote img"), "var-init");
  0 != t.length && loadViewer(function () {
    t.viewer({
      filter: function (e) {
        return $(e).hasClass("itemSrcImg") || $(e).hasClass("tableItemSrcImg") ? ($(e).removeAttr("loading").removeAttr("decoding"), $(e).attr("viewer", "1"), window.isMobile || $(e).attr("title", "点击放大查看"), !0) : !("a" == e.parentNode.tagName.toLowerCase() || 5 < $(e).width() && $(e).width() < 50 && $(e).height() < 50 || $(e).parent().hasClass("heatmapContainer") || "0" == $(e).attr("viewer") || ($(e).removeAttr("loading").removeAttr("decoding"), $(e).attr("viewer", "1"), 0));
      },
      url: function (e) {
        var t = cc11001100_hook("t", e.src, "var-init");
        return $(e).parent().attr("pimg") && (t = cc11001100_hook("t", $(e).parent().attr("pimg"), "assign")), $(e).attr("originalsrc") && (t = cc11001100_hook("t", $(e).attr("originalsrc"), "assign")), $(e).removeAttr("loading").removeAttr("decoding"), t = cc11001100_hook("t", t && -1 < (t = cc11001100_hook("t", 2 == (e = cc11001100_hook("e", 1 == (e = cc11001100_hook("e", (t = cc11001100_hook("t", 2 == (e = cc11001100_hook("e", t.split(",w_"), "assign")).length ? 1200 < parseInt(e[1]) ? e[0] + ",w_" + e[1] : e[0] + ",w_1200" : t, "assign")).split(",h_200"), "assign")).length ? t.split(",h_400") : e, "assign")).length ? e[0] + e[1] : t, "assign")).indexOf(".gif") && -1 < t.indexOf("?x-oss-process") ? t.split("?x-oss-process")[0] : t, "assign");
      }
    });
  });
}
function openDialogByIframe(e, t, i, a, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  a && (e = cc11001100_hook("e", $(window).width() - 40, "assign"), t = cc11001100_hook("t", $(window).height() - 100, "assign"), isMobile || (e = cc11001100_hook("e", 800 < e ? 800 : e, "assign"))), PDF_launch(i, e, t, function () {
    autoBody();
  }, n);
}
function closeAlert() {
  layer.closeAll("dialog");
}
function alertmsg(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a = cc11001100_hook("a", $("#alertmsg_box")[0], "var-init"),
    e = cc11001100_hook("e", (a || ($("<div id='alertmsg_box' style='position:absolute;padding: 10px 20px;background-color: rgba(0, 0, 0, 0.75);z-index: 19921010;top: 50%;left: 50%;transform: translateX(-50%);color: #fff;border-radius: 4px;'>").appendTo("body"), a = cc11001100_hook("a", $("#alertmsg_box")[0], "assign")), $("#alertmsg_box").html(e), "50%"), "var-init"),
    n = cc11001100_hook("n", "absolute", "var-init");
  i ? e = cc11001100_hook("e", i.offsetTop + i.offsetHeight / 2 - 20 + "px", "assign") : n = cc11001100_hook("n", "fixed", "assign"), a.style.position = cc11001100_hook("a.style.position", n, "assign"), a.style.top = cc11001100_hook("a.style.top", e, "assign"), t = cc11001100_hook("t", t || 2e3, "assign"), $(a).show().delay(t).hide(0);
}
function alertNew(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a;
  self == top || window.IsPar ? (a = cc11001100_hook("a", {
    title: cc11001100_hook("title", " ", "object-key-init"),
    maxWidth: cc11001100_hook("maxWidth", 340, "object-key-init"),
    btn: cc11001100_hook("btn", [getlang("ensure")], "object-key-init")
  }, "assign"), isMobile && (a = cc11001100_hook("a", {
    title: cc11001100_hook("title", "", "object-key-init"),
    closeBtn: cc11001100_hook("closeBtn", 0, "object-key-init"),
    anim: cc11001100_hook("anim", 0, "object-key-init"),
    maxWidth: cc11001100_hook("maxWidth", 320 < $(window).width() ? 320 : $(window).width() - 20, "object-key-init"),
    isOutAnim: cc11001100_hook("isOutAnim", 0, "object-key-init"),
    btn: cc11001100_hook("btn", [getlang("ensure")], "object-key-init")
  }, "assign")), a = cc11001100_hook("a", jQuery.extend(a, i), "assign"), layer.alert(e, a, function (e) {
    t && t(), layer.close(e);
  })) : (alert(e.replace(/<[^<>]+>/g, "")), t && t());
}
function displaypeie(e, t, l) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("l", l, "function-parameter");
  "1" == e.attr("haspeie") && ($(t, e).each(function (e) {
    var t = cc11001100_hook("t", $(this).attr("attrpeie"), "var-init");
    if (t) {
      var i = cc11001100_hook("i", !1, "var-init");
      if (3 == l ? (val = cc11001100_hook("val", $(this).find("input[type=hidden]").eq(0).attr("value"), "assign"), $(this).attr("check") && (i = cc11001100_hook("i", !0, "assign"))) : 4 == l ? (-1 == selIndex && $(this).hasClass("rate-on") || e == selIndex) && (i = cc11001100_hook("i", !0, "assign")) : ((1 == l || 2 == l) && this.checked || 5 == l && this.selected) && (i = cc11001100_hook("i", !0, "assign")), !i) for (var a = cc11001100_hook("a", t.split(";"), "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
        var n,
          r,
          o,
          s = cc11001100_hook("s", a[e].split("|"), "var-init");
        3 == s.length && (n = cc11001100_hook("n", "q" + s[0] + "_" + s[1], "assign"), (r = cc11001100_hook("r", document.getElementById(n), "assign")) ? $(this).attr("id") != n && (r.disabled = cc11001100_hook("r.disabled", !1, "assign"), n = cc11001100_hook("n", -1 == (o = cc11001100_hook("o", (n = cc11001100_hook("n", r.parentNode.parentNode, "assign")).className, "assign")).indexOf("ui-radio") && -1 == o.indexOf("ui-checkbox") && -1 == o.indexOf("ui-li-static") ? r.parentNode.parentNode.parentNode.parentNode : n, "assign")) && 0 < (o = cc11001100_hook("o", $(n).find(".label"), "assign")).length && (r = cc11001100_hook("r", o[o.length - 1], "assign"), 0 < (o = cc11001100_hook("o", $(r).find(".peiefull"), "assign")).length) && (r.removeChild(o[0]), $(n).removeClass("disabled"), window.recordPeieList) && recordPeieList.length && gschangePeie(t) : (r = cc11001100_hook("r", document.getElementById("div" + s[0]).getElementsByTagName("option"), "assign")) && 0 != r.length && r.length > s[1] && $(this).context != r[s[1]] && (r[s[1]].disabled = cc11001100_hook("r[s[1]].disabled", !1, "assign"), o = cc11001100_hook("o", "（" + s[2] + ")", "assign"), -1 != r[s[1]].innerHTML.indexOf(o)) && (r[s[1]].innerHTML = cc11001100_hook("r[s[1]].innerHTML", r[s[1]].innerHTML.replace(o, ""), "assign"), initEleSelect2("#div" + s[0])));
      }
    }
  }), $(t, e).each(function (e) {
    var t = cc11001100_hook("t", $(this).attr("attrpeie"), "var-init");
    if (t) {
      var i = cc11001100_hook("i", !1, "var-init");
      if (3 == l ? (val = cc11001100_hook("val", $(this).find("input[type=hidden]").eq(0).attr("value"), "assign"), $(this).attr("check") && (i = cc11001100_hook("i", !0, "assign"))) : 4 == l ? (-1 == selIndex && $(this).hasClass("rate-on") || e == selIndex) && (i = cc11001100_hook("i", !0, "assign")) : ((1 == l || 2 == l) && this.checked || 5 == l && this.selected) && (i = cc11001100_hook("i", !0, "assign")), i) for (var a = cc11001100_hook("a", t.split(";"), "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) {
        var n,
          r,
          o,
          s = cc11001100_hook("s", a[e].split("|"), "var-init");
        3 == s.length && (r = cc11001100_hook("r", "q" + s[0] + "_" + s[1], "assign"), (n = cc11001100_hook("n", document.getElementById(r), "assign")) ? $(this).attr("id") != r && (n.disabled = cc11001100_hook("n.disabled", !0, "assign"), r = cc11001100_hook("r", (o = cc11001100_hook("o", (r = cc11001100_hook("r", n.parentNode.parentNode, "assign")).className, "assign")) && -1 == o.indexOf("ui-radio") && -1 == o.indexOf("ui-checkbox") && -1 == o.indexOf("ui-li-static") ? n.parentNode.parentNode.parentNode.parentNode : r, "assign")) && 0 < (o = cc11001100_hook("o", $(r).find(".label"), "assign")).length && (n = cc11001100_hook("n", o[o.length - 1], "assign"), o = cc11001100_hook("o", $(n).find(".peiefull"), "assign"), $(r).addClass("disabled"), 0 == o.length) && $(n.childNodes[0]).after($("<span class='peiefull'>（" + s[2] + "）</span>")) : (r = cc11001100_hook("r", document.getElementById("div" + s[0]).getElementsByTagName("option"), "assign")) && 0 != r.length && $(this).context != r[s[1]] && (r[s[1]].disabled = cc11001100_hook("r[s[1]].disabled", !0, "assign"), r.length > s[1]) && (o = cc11001100_hook("o", "（" + s[2] + ")", "assign"), -1 == r[s[1]].innerHTML.indexOf(o)) && (r[s[1]].innerHTML = cc11001100_hook("r[s[1]].innerHTML", r[s[1]].innerHTML + o, "assign"), initEleSelect2("#div" + s[0])));
      }
    }
  }));
}
function dateQuota(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  if ("1" == $(t).attr("haspeie")) {
    var i = cc11001100_hook("i", $(e).attr("datept"), "var-init");
    if (i) {
      var a = cc11001100_hook("a", e, "var-init");
      if (a && "" != a.value) {
        for (var n = cc11001100_hook("n", getTopic(t), "var-init"), r = cc11001100_hook("r", i.split(","), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r.length; o++) {
          var s = cc11001100_hook("s", r[o].split("|"), "var-init");
          if (4 == s.length && s[0] != a.value) {
            var l = cc11001100_hook("l", "q" + s[1] + "_" + s[2], "var-init");
            if (Number(s[1]) < Number(n)) if (!(w = cc11001100_hook("w", document.getElementById("div" + s[1]).pageIndex == $(t)[0].pageIndex, "assign"))) continue;
            (u = cc11001100_hook("u", document.getElementById(l), "assign")) ? (u.disabled = cc11001100_hook("u.disabled", !1, "assign"), f = cc11001100_hook("f", $(u.parentNode.parentNode).find(".label"), "assign"), h = cc11001100_hook("h", $(f).find(".classpeie"), "assign"), $(u.parentNode.parentNode).css("background", "none"), 0 < h.length && f[0].removeChild(h[0])) : 0 != (c = cc11001100_hook("c", document.getElementById("div" + s[1]).getElementsByTagName("option"), "assign")).length && c && c.length > s[2] && (c[s[2]].disabled = cc11001100_hook("c[s[2]].disabled", !1, "assign"), p = cc11001100_hook("p", "（" + s[3] + ")", "assign"), -1 != c[s[2]].innerHTML.indexOf(p)) && (c[s[2]].innerHTML = cc11001100_hook("c[s[2]].innerHTML", c[s[2]].innerHTML.replace(p, ""), "assign"), initEleSelect2("#div" + s[1]));
          }
        }
        for (var d = cc11001100_hook("d", 0, "var-init"); d < r.length; d++) {
          s = cc11001100_hook("s", r[d].split("|"), "assign");
          if (4 == s.length && (s[0] == a.value || "D" == s[0])) {
            var c,
              p,
              l = cc11001100_hook("l", "q" + s[1] + "_" + s[2], "var-init"),
              u = cc11001100_hook("u", document.getElementById(l), "var-init"),
              w = cc11001100_hook("w", document.getElementById("div" + s[1]).pageIndex == $(t)[0].pageIndex, "var-init");
            if (u) {
              var h,
                f = cc11001100_hook("f", $(u.parentNode.parentNode).find(".label")[0], "var-init");
              if (Number(s[1]) < Number(n) && !w && u.checked) {
                alertNew(a.value + "日 " + $(f).text() + " 配额已满"), a.value = cc11001100_hook("a.value", "", "assign"), saveAnswer(t);
                break;
              }
              u.checked = cc11001100_hook("u.checked", !1, "assign"), $(u).attr("disabled", "disabled"), $(u).closest("div").css("background", "#f9f9f9"), $(u).next().removeClass("jqchecked"), 0 == (h = cc11001100_hook("h", $(f).find(".classpeie"), "assign")).length && (f.innerHTML = cc11001100_hook("f.innerHTML", f.innerHTML + "<span class='classpeie'>（" + s[3] + "）</span>", "assign"));
            } else if ((c = cc11001100_hook("c", document.getElementById("div" + s[1]).getElementsByTagName("option"), "assign")) && c.length > s[2]) {
              if (Number(s[1]) < Number(n) && !w && c[s[2]].selected) {
                var g = cc11001100_hook("g", c[s[2]].innerText, "var-init");
                alertNew(a.value + "日 " + g + " 配额已满"), a.value = cc11001100_hook("a.value", "", "assign"), saveAnswer(t);
                break;
              }
              c[s[2]].disabled = cc11001100_hook("c[s[2]].disabled", !0, "assign"), c[s[2]].selected = cc11001100_hook("c[s[2]].selected", "", "assign"), c && c.length > s[2] && (p = cc11001100_hook("p", "（" + s[3] + ")", "assign"), -1 == c[s[2]].innerHTML.indexOf(p)) && (c[s[2]].innerHTML = cc11001100_hook("c[s[2]].innerHTML", c[s[2]].innerHTML + p, "assign"), initEleSelect2("#div" + s[1]));
            }
          }
        }
        window.GSDealDatePeie && GSDealDatePeie();
      }
    }
  }
}
function isOrChooseLogic(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  for (var i = cc11001100_hook("i", !0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) if (e[a].split(",")[0] == t) {
    var n = cc11001100_hook("n", e[a].split(",")[1], "var-init"),
      i = cc11001100_hook("i", -1 != n.indexOf("-") ? -1 != n.indexOf(".") : -1 == n.indexOf("."), "var-init");
    break;
  }
  return i;
}
function otherTextEvent(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  e = cc11001100_hook("e", $(e), "assign");
  e[0] && (e[0].value.trim() && t[0].removeError && t[0].removeError(), referTitle(t));
}
function showHomePageFixedSlider(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t = cc11001100_hook("t", e.questions, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) setFixedSliderTableHandler($(t[i]));
}
function setFixedSliderTableHandler(e, r) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  var o, s, l, d, c;
  "1" != e.attr("fixedslider") || "none" == $(e)[0].style.display || (o = cc11001100_hook("o", e.find(".ui-slider-table"), "assign")).is(":hidden") || (e = cc11001100_hook("e", o.find(".ui-table-scroll"), "assign"), s = cc11001100_hook("s", o.find(".ui-table-fixed"), "assign"), l = cc11001100_hook("l", e.find(".ui-table-thead"), "assign"), d = cc11001100_hook("d", e.find(".ui-table-tbody tr"), "assign"), c = cc11001100_hook("c", s.find(".ui-table-tbody tr"), "assign"), dispatchEvent(e.find(".ui-table-tbody")[0], "scroll"), setTimeout(function () {
    var e,
      t = cc11001100_hook("t", l.height(), "var-init"),
      t = cc11001100_hook("t", (s.find(".ui-table-thead").children().height(t), o.find("th").eq(0)), "var-init"),
      i = cc11001100_hook("i", t.outerWidth(), "var-init");
    if (20 < i && s.outerWidth(i + 1), t.attr("width") && (i = cc11001100_hook("i", parseInt(t.attr("width")), "assign"), i = cc11001100_hook("i", o.outerWidth() * i / 100, "assign"), e = cc11001100_hook("e", 2 * parseInt(t.css("padding-left")), "assign"), t.find(".widthdiv").outerWidth(i - e - 3), s.outerWidth(i)), r && 0 < r.length) for (var a, n = cc11001100_hook("n", 0, "var-init"); n < r.length; n++) "none" != r[n].style.display && 0 != r[n].getBoundingClientRect().height && (a = cc11001100_hook("a", d.index($(r[n])), "assign"), c.eq(a).height(r[n].getBoundingClientRect().height));else d.each(function () {
      if ("none" == this.style.display) return !0;
      var e = cc11001100_hook("e", $(this), "var-init"),
        t = cc11001100_hook("t", e.index(), "var-init");
      c.eq(t).height(e[0].getBoundingClientRect().height);
    });
  }, 100));
}
function uploadFinish(e, t, i, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  var n,
    r = cc11001100_hook("r", $(".field[topic='" + e + "']")[0], "var-init"),
    e = cc11001100_hook("e", (a || (r.fileName = cc11001100_hook("r.fileName", t, "assign")), $(r).find(".uploadmsg")), "var-init");
  t && (r.removeError && r.removeError(), $(r).find(".signWrap").hide(), (n = cc11001100_hook("n", $("<div style='margin-top:6px;border:1px solid #EDEDED;border-radius:4px;'></div>"), "assign")).html("<img style='max-width:90%;max-height:45px;' src=" + i + " /></div>"), (a = cc11001100_hook("a", $('<a href="javascript:void(0)" style="float: right;margin: 11px 10px 0 0;" class="icon deleteuploadNew-icon iconfontNew">&#xe6b6;</a>'), "assign")).click(function () {
    var e;
    window.isinterview ? ($(r).find(".signWrap").show(), $(r).find(".clearSign").click(), r.fileName = cc11001100_hook("r.fileName", "", "assign"), r.filelink = cc11001100_hook("r.filelink", "", "assign"), $(r).find(".uploadmsg").html(""), (e = cc11001100_hook("e", $(r).find(".saveSign")[0], "assign")) && $(e).html(e.originText), saveAnswer && saveAnswer(r), jump && jump(r, "")) : confirmnew(getlang("tit_sign_del"), function () {
      $(r).find(".signWrap").show(), $(r).find(".clearSign").click(), r.fileName = cc11001100_hook("r.fileName", "", "assign"), r.filelink = cc11001100_hook("r.filelink", "", "assign"), $(r).find(".uploadmsg").html("");
      var e = cc11001100_hook("e", $(r).find(".saveSign")[0], "var-init");
      e && $(e).html(e.originText), saveAnswer && saveAnswer(r), jump && jump(r, "");
    });
  }), n.append(a), e.html(""), i && e.append(n), jump && jump(r, ""), loadViewer(function () {
    n.find("img").viewer();
  })), saveAnswer && saveAnswer(r), window.isinterview && (showMyAnswer($(r)), window.isInterview2 && showInterviewtip($(r)), $(".interview_input").find(".iv_input").show(), $(".interview_input").find(".iv_chioseFile").hide(), $(r).find(".interview_cont img").attr("src", i));
}
function locationReplace(t) {
  cc11001100_hook("t", t, "function-parameter");
  if (history.replaceState) try {
    history.replaceState(null, document.title, t), history.go(0), $("#form1").hide(), $(window).scrollTop(0);
  } catch (e) {
    location.replace(t);
  } else location.replace(t);
}
function adjustIosInput(e) {
  cc11001100_hook("e", e, "function-parameter");
  e = cc11001100_hook("e", e || "input[type='text'],textarea", "assign"), !navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || self == top || ("input[type='text'],textarea" != e && $(e).unbind("blur"), $(e).blur(function () {
    setTimeout(function () {
      try {
        var e = cc11001100_hook("e", window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop || 0, "var-init");
        window.parent.scrollTo(0, Math.max(e, 0));
      } catch (e) {}
    }, 100);
  }));
}
function initDescImg() {
  if (pageHolder[cur_page]) {
    if (pageHolder[cur_page].initDescImg) return;
    pageHolder[cur_page].initDescImg = cc11001100_hook("pageHolder[cur_page].initDescImg", !0, "assign");
  }
  $(pageHolder[cur_page]).find(".div_item_desc img").not(".swiper img").each(function (e, t) {
    var i;
    0 == $(t).width() ? ((i = cc11001100_hook("i", document.createElement("img"), "assign")).onload = cc11001100_hook("(i = document.createElement(\"img\")).onload", function () {
      100 < this.width && ($(t).wrap("<div style='position: relative;display:inline-block;' class='descImgBox'></div>"), $(t).before($('<i class="icon_lookBigpic" onclick="elagerImg(event, this);"></i>')));
    }, "assign"), i.src = cc11001100_hook("i.src", t.src, "assign")) : 100 < $(t).width() && ($(t).wrap("<div style='position: relative;display:inline-block;' class='descImgBox'></div>"), $(t).before($('<i class="icon_lookBigpic" onclick="elagerImg(event, this);"></i>')));
  });
}
function stopMediaPlay() {
  var e = cc11001100_hook("e", $(pageHolder[cur_page]).find("iframe"), "var-init");
  0 != e.length && (e.filter(function (e) {
    return -1 < $(this).attr("src").indexOf(".mp3") || -1 < $(this).attr("src").indexOf(".wav") || -1 < $(this).attr("src").indexOf(".mp4");
  }), e.each(function (e, t) {
    $(t).attr("src", $(t).attr("src"));
  }));
}
function showEvaluate(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  1 == t.attr("pj") && (e = cc11001100_hook("e", $(e).attr("val"), "assign"), t.find(".evaluateTagWrap").show(), t.find(".evaluateTagDiv").eq(e - 1).show().siblings(".evaluateTagDiv").hide());
}
function checkedtag(i) {
  cc11001100_hook("i", i, "function-parameter");
  var e;
  $(i).toggleClass("clicked"), $(i).hasClass("writeRvaluate") && ($(i).next(".wjxui_limit_box").toggle(), (e = cc11001100_hook("e", $(i).next(".wjxui_limit_box").find("textarea"), "assign"))[0]) && !e[0].bindevent && (e[0].bindevent = cc11001100_hook("e[0].bindevent", !0, "assign"), e.on("input blur keydown", function () {
    var e = cc11001100_hook("e", this.value.trim().length, "var-init"),
      t = cc11001100_hook("t", $(this).attr("limit"), "var-init");
    t < e && (this.value = cc11001100_hook("this.value", this.value.substring(0, t), "assign"), e = cc11001100_hook("e", t, "assign")), $(this).closest(".wjxui_limit_box").find(".limit").text(e + "/" + t), saveAnswer($(i).closest(".field"));
  })), fixBottom(), saveAnswer($(i).closest(".field"));
}
function initCusomSelect(i, t, a, e) {
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  var n,
    r,
    o,
    s,
    l = cc11001100_hook("l", $(i).find("input[type='text']"), "var-init"),
    d = cc11001100_hook("d", t.checked, "var-init"),
    c = cc11001100_hook("c", "radio" == t.type, "var-init"),
    p = cc11001100_hook("p", l.attr("cusom"), "var-init"),
    u = cc11001100_hook("u", $(a).hasClass("optiontag"), "var-init"),
    w = cc11001100_hook("w", $(i).find(".ui-text"), "var-init"),
    h = cc11001100_hook("h", window.self != window.top && !window.IsPar, "var-init"),
    f = cc11001100_hook("f", (w.prev(".label").removeClass("errorbg"), c && d && window.isRadioAutonext && window.IsOneQuestionPerPage), "var-init");
  if (!window.lxnextclick && !window.isSubmiting && f && !w[0] && e && 0 < e.pageX && (window.lxnextclick = cc11001100_hook("window.lxnextclick", !0, "assign"), setTimeout(function () {
    $(".lxNextBtn").trigger("click"), window.lxnextclick = cc11001100_hook("window.lxnextclick", !1, "assign");
  }, 500)), p && !l[0].hasInitCusom) if (p = cc11001100_hook("p", p.replace(/\\u0026/g, "&"), "assign"), l.hide(), u) {
    for (var g = cc11001100_hook("g", $("<ul class='secondarytagwrap'></ul>"), "var-init"), m = cc11001100_hook("m", p.split(","), "var-init"), v = cc11001100_hook("v", l[0].value, "var-init"), x = cc11001100_hook("x", l[0].disabled, "var-init"), y = cc11001100_hook("y", 0, "var-init"); y < m.length; y++) {
      var b = cc11001100_hook("b", m[y] == v ? "selected" : "", "var-init"),
        C = cc11001100_hook("C", $("<li class=" + b + ">" + m[y] + "</li>"), "var-init");
      g.append(C);
    }
    g.click(function () {
      return !1;
    }), g.find("li").click(function (e) {
      e.stopPropagation(), $(this).addClass("selected").siblings().removeClass("selected");
      e = cc11001100_hook("e", $(this).text(), "assign");
      return l[0].value = cc11001100_hook("l[0].value", e, "assign"), f && $(".lxNextBtn").trigger("click"), l.blur(), _(), layer.close(window.curtaglayerindex), !1;
    }), l.before(g), x && g.prop("disabled", !0), l[0].hasInitCusom = cc11001100_hook("l[0].hasInitCusom", !0, "assign");
  } else {
    var I = cc11001100_hook("I", $("<select></select>"), "var-init"),
      m = cc11001100_hook("m", p.split(","), "var-init"),
      v = cc11001100_hook("v", l[0].pvalue || l[0].value, "var-init"),
      x = cc11001100_hook("x", l[0].disabled, "var-init");
    I.append($('<option value="">' + getlang("chioce") + "</option>"));
    for (y = cc11001100_hook("y", 0, "assign"); y < m.length; y++) {
      b = cc11001100_hook("b", replace_specialChar(m[y]) == v ? "selected" : "", "assign");
      (C = cc11001100_hook("C", $("<option " + b + "></option>"), "assign")).attr("value", m[y]), C.text(m[y]), I.append(C);
    }
    I.change(function (e) {
      e.stopPropagation();
      e = cc11001100_hook("e", this.value, "assign");
      return l[0].pvalue = cc11001100_hook("l[0].pvalue", e, "assign"), l[0].value = cc11001100_hook("l[0].value", e, "assign"), l.blur(), f && $(".lxNextBtn").trigger("click"), !1;
    }), l.before(I).parent().css({
      border: cc11001100_hook("border", "none", "object-key-init"),
      "margin-bottom": cc11001100_hook("margin-bottom", "10px", "object-key-init")
    }), x && I.prop("disabled", !0), l[0].hasInitCusom = cc11001100_hook("l[0].hasInitCusom", !0, "assign");
    var p = cc11001100_hook("p", "zh-CN", "var-init");
    1 == langVer ? p = cc11001100_hook("p", "", "assign") : 2 == langVer && (p = cc11001100_hook("p", "zh-TW", "assign")), I.select2({
      language: cc11001100_hook("language", p, "object-key-init"),
      width: cc11001100_hook("width", "off", "object-key-init"),
      minimumResultsForSearch: cc11001100_hook("minimumResultsForSearch", 10, "object-key-init")
    }), I.click(function (e) {
      e.stopPropagation();
    }), I.next(".select2").click(function (e) {
      e.stopPropagation();
    }).parent().addClass("ui-select");
  }
  function _() {
    var e;
    0 != $(i).children(".othericon").length || c || ((e = cc11001100_hook("e", $("<span class='othericon comIcon'>&#xe623;</span>"), "assign")).click(function (e) {
      return initCusomSelect(i, t, a, e), !1;
    }), $(i).append(e));
  }
  u && w[0] ? (d || $(i).find(".othericon").remove(), d && e && !e.pageX && l[0].value && _(), d && e && e.pageX && (x = cc11001100_hook("x", $(i).find(".label").text(), "assign"), p = cc11001100_hook("p", "700px", "assign"), u = cc11001100_hook("u", $(i).outerHeight() - $(window).scrollTop(), "assign"), e = cc11001100_hook("e", -($(i).offset().left - $(i).parent().offset().left), "assign"), r = cc11001100_hook("r", "", "assign"), o = cc11001100_hook("o", !(n = cc11001100_hook("n", -1, "assign")), "assign"), window.ishydj && (p = cc11001100_hook("p", "650px", "assign")), l.attr("required") || (o = cc11001100_hook("o", !0, "assign")), 0 == w.find(".secondarytagwrap").length && (r = cc11001100_hook("r", [getlang("ensure")], "assign"), w.find(".OtherText,.OtherRadioText").attr("placeholder") || w.find(".OtherText,.OtherRadioText").attr("placeholder", getlang("validate_info_q1")), isMobile || (p = cc11001100_hook("p", "350px", "assign"), e += cc11001100_hook("e", 175, "assign"))), s = cc11001100_hook("s", !(e = cc11001100_hook("e", [u + "px", e + "px"], "assign")), "assign"), isMobile && (p = cc11001100_hook("p", $(window).width() - 40 + "px", "assign"), e = cc11001100_hook("e", [u + "px", "20px"], "assign"), (window.IsOneQuestionPerPage || window.isinterview) && (e = cc11001100_hook("e", "auto", "assign"), s = cc11001100_hook("s", !0, "assign")), h || window.IsOneQuestionPerPage || window.isinterview || (p = cc11001100_hook("p", $(window).width() + "px", "assign"), e = cc11001100_hook("e", "b", "assign"), n = cc11001100_hook("n", 2, "assign"), s = cc11001100_hook("s", !0, "assign"))), u = cc11001100_hook("u", l.attr("required") ? 0 : 1, "assign"), window.curtaglayerindex = cc11001100_hook("window.curtaglayerindex", layer.open({
    title: cc11001100_hook("title", x, "object-key-init"),
    type: cc11001100_hook("type", 1, "object-key-init"),
    content: cc11001100_hook("content", w, "object-key-init"),
    area: cc11001100_hook("area", [p, "auto"], "object-key-init"),
    offset: cc11001100_hook("offset", e, "object-key-init"),
    closeBtn: cc11001100_hook("closeBtn", u, "object-key-init"),
    anim: cc11001100_hook("anim", n, "object-key-init"),
    btn: cc11001100_hook("btn", r, "object-key-init"),
    fixed: cc11001100_hook("fixed", s, "object-key-init"),
    isOutAnim: cc11001100_hook("isOutAnim", !1, "object-key-init"),
    shade: cc11001100_hook("shade", .3, "object-key-init"),
    shadeClose: cc11001100_hook("shadeClose", o, "object-key-init"),
    yes: function (e, t) {
      "required" != l.attr("required") || l[0].value ? (l[0].value ? _() : $(i).find(".othericon").remove(), layer.close(e), f && $(".lxNextBtn").trigger("click")) : layer.msg(getlang("validate_info_q1"));
    }
  }), "assign"))) : c ? ($(i).siblings().add($(i)).each(function () {
    $(this).find(".ui-text").hide();
  }), d && w.show()) : d ? w.show() : w.hide();
}
function hasJoinCusomInit() {
  2 == window.hasDropDown && $(".ui-controlgroup input[type='radio']:checked,.ui-controlgroup input[type='checkbox']:checked").each(function (e, t) {
    var i = cc11001100_hook("i", $(t).closest(".field")[0], "var-init"),
      a = cc11001100_hook("a", (3 == $(i).attr("type") ? $(t).closest(".ui-radio") : $(t).closest(".ui-checkbox"))[0], "var-init");
    initCusomSelect(a, t, i);
  });
}
function isSmallerIos12() {
  try {
    var e;
    return 0 < navigator.userAgent.toLowerCase().indexOf("like mac os x") && !!((e = cc11001100_hook("e", (navigator.userAgent.toLowerCase().match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."), "assign")) && e.split(".")[0] <= 12);
  } catch (e) {
    return !1;
  }
}
function curPageHeatmapInit() {
  window.waitfenmian || window.hasHeatMap && ((!isVip || isVip < 2) && window.isNewQ && (alertNew("提示：此问卷使用了热力图题，发布者非尊享版用户，无法使用！"), $("#ctlNext").hide()), !pageHolder[cur_page] || pageHolder[cur_page].initHeatmap && !window.isytyy || (pageHolder[cur_page].initHeatmap = cc11001100_hook("pageHolder[cur_page].initHeatmap", !0, "assign"), setTimeout(function () {
    $(pageHolder[cur_page]).find(".heatmapWrap").each(function () {
      "none" != $(this).closest(".field")[0].style.display && heatMapInit(this);
    });
  }, 200)));
}
function forbidEdit(e) {
  cc11001100_hook("e", e, "function-parameter");
  if (e) for (var t = cc11001100_hook("t", (e += cc11001100_hook("e", "", "assign")).split(";"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) $("#div" + t[i]).addClass("forbidClick"), $("#div" + t[i]).append("<div class='forbidClickLayer'></div>");
}
function orientationUpdate() {
  setTimeout(function () {
    pageHolder[cur_page] && $(pageHolder[cur_page].questions).each(function () {
      if ("none" == this.style.display) return !0;
      setFixedSliderTableHandler($(this));
      var e,
        t = cc11001100_hook("t", this.getAttribute("type"), "var-init");
      "8" != t && "12" != t && "9" != t && "10" != t || ($(this).find(".ruler").width(20), e = cc11001100_hook("e", parseInt($(".rangeslider").width() - 20), "assign"), $(this).find(".ruler").width(e), initqSlider(this)), this.uploader ? this.uploader.refresh() : "33" == t || "9" == t || "10" == t ? this.querySelectorAll(".file").forEach(function (e) {
        e.parentNode.uploader && e.parentNode.uploader.refresh();
      }) : "10" == t && dispatchEvent(this.querySelector(".ui-table-scroll .ui-table-body"), "scroll");
    });
  }, 500);
}
function loadAnsTableSelectInput(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  for (var i = cc11001100_hook("i", e.options, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) {
    var n = cc11001100_hook("n", i[a].text, "var-init");
    if (-1 < n.indexOf("请注明") || 0 == n.indexOf("▼")) {
      i[a].text = cc11001100_hook("i[a].text", t, "assign"), i[a].value = cc11001100_hook("i[a].value", t, "assign"), e.value = cc11001100_hook("e.value", t, "assign"), i[a].sinput = cc11001100_hook("i[a].sinput", !0, "assign");
      break;
    }
  }
}
function initTableSelectInput(a) {
  cc11001100_hook("a", a, "function-parameter");
  var e,
    t,
    i,
    n = cc11001100_hook("n", a.options[a.selectedIndex], "var-init");
  n && !isLoadingAnswer && (a.noprompt ? a.noprompt = cc11001100_hook("a.noprompt", null, "assign") : ((t = cc11001100_hook("t", -1 < (e = cc11001100_hook("e", n.text, "assign")).indexOf("请注明") || 0 == e.indexOf("▼"), "assign")) || n.sinput) && (i = cc11001100_hook("i", a.value, "assign"), a.value = cc11001100_hook("a.value", "", "assign"), a.value = cc11001100_hook("a.value", i, "assign"), n.sinput = cc11001100_hook("n.sinput", !0, "assign"), layer.prompt({
    value: cc11001100_hook("value", t ? "" : e, "object-key-init"),
    btn: cc11001100_hook("btn", [getlang("ensure"), getlang("cancel")], "object-key-init"),
    title: cc11001100_hook("title", getlang("tit_specify"), "object-key-init"),
    end: function () {
      var e = cc11001100_hook("e", n.text, "var-init");
      (-1 < e.indexOf("请注明") || 0 == e.indexOf("▼")) && (e = cc11001100_hook("e", a.options[0].value, "assign"), a.value = cc11001100_hook("a.value", e, "assign"), $(a).trigger("change"));
    }
  }, function (e, t, i) {
    (e = cc11001100_hook("e", $.trim(e), "assign")) && (n.text = cc11001100_hook("n.text", e, "assign"), "1" == $(a).attr("iscv") && (n.value = cc11001100_hook("n.value", e, "assign")), $(a).hasClass("select2-hidden-accessible") && (e = cc11001100_hook("e", "zh-CN", "assign"), 1 == langVer ? e = cc11001100_hook("e", "", "assign") : 2 == langVer && (e = cc11001100_hook("e", "zh-TW", "assign")), $(a).select2("destroy"), $(a).select2({
      language: cc11001100_hook("language", e, "object-key-init"),
      width: cc11001100_hook("width", "off", "object-key-init"),
      minimumResultsForSearch: cc11001100_hook("minimumResultsForSearch", 10, "object-key-init")
    })), a.noprompt = cc11001100_hook("a.noprompt", !0, "assign"), $(a).trigger("change"), layer.close(t));
  })));
}
function clockRecordTime(e) {
  cc11001100_hook("e", e, "function-parameter");
  try {
    var t,
      i,
      a,
      n,
      r = cc11001100_hook("r", $(pageHolder[cur_page]).find("input[verify='clock']"), "var-init");
    0 != r.length && (!isVip && window.isNewQ && (alertNew("提示：此问卷使用了分页计时器功能，发布者非企业版用户，无法使用！"), $("#ctlNext").hide()), e ? (t = cc11001100_hook("t", pageHolder[cur_page].openTime, "assign")) && (i = cc11001100_hook("i", new Date().getTime(), "assign"), a = cc11001100_hook("a", r[0].value, "assign"), n = cc11001100_hook("n", i - t, "assign"), a && $.isNumeric(a) && (n += cc11001100_hook("n", parseInt(a), "assign")), r[0].value = cc11001100_hook("r[0].value", n, "assign"), r.blur()) : pageHolder[cur_page].openTime = cc11001100_hook("pageHolder[cur_page].openTime", new Date().getTime(), "assign"));
  } catch (e) {}
}
function perDetailIntro(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  t && (t.preventDefault(), t.stopPropagation()), 0 == $("#selfMadeDialog").length && $("body").append('<div class="self_made_dialog" id="selfMadeDialog" style="display: none;"><p class="perTitle" style="   font-size: 18px;font-weight: 600;color: #262626;line-height: 20px;margin:0 0 0 20px;"></p><div class="self_made_content" style="font-size: 14px;color: #262626;margin:26px 30px 0;word-break: break-all;"></div></div>');
  var t = cc11001100_hook("t", $(e).attr("introtext") || "", "var-init"),
    e = cc11001100_hook("e", $(e).attr("nametext") || "", "var-init"),
    i = cc11001100_hook("i", window.introtxt || "详细介绍", "var-init");
  $("#selfMadeDialog .perTitle").html(e + "的" + i), $("#selfMadeDialog .self_made_content").html(decodeURIComponent(t)), openDialogByIframe(600 < $(window).width() ? 600 : $(window).width() - 20, 450, "selfMadeDialog");
}
function clickClearAsnwer(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t in dataMap) t.split("_")[0] == "q" + e && (dataMap[t] = cc11001100_hook("dataMap[t]", "", "assign"), dealId(t));
}
function getQueryVariable(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  for (var i = cc11001100_hook("i", (t = cc11001100_hook("t", t || window.location.search, "assign")).substring(1).split("&"), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) {
    var n = cc11001100_hook("n", i[a].split("="), "var-init");
    if (n[0] == e) return n[1];
  }
  return !1;
}
$(function () {
  isMobile || (window.testEnv || (document.oncontextmenu = cc11001100_hook("document.oncontextmenu", avoidCopy, "assign")), document.onkeydown = cc11001100_hook("document.onkeydown", forbidBackSpace, "assign")), (window.ActiveXObject || "ActiveXObject" in window) && (document.onselectstart = cc11001100_hook("document.onselectstart", avoidCopy, "assign")), 3 != window.isChuangGuan && 4 != window.isChuangGuan && ksCountdown(), window.IsSampleService && avoidPaste();
  0 < $("#divQuestion img,#divDesc img,#divVote img").length && loadViewer(enlargeImg);
  var e = cc11001100_hook("e", -1 < window.location.href.indexOf("code") && -1 < $("#divTip").text().indexOf("code been used") && !isIosSystem(), "var-init"),
    t = cc11001100_hook("t", window.history && window.history.length, "var-init");
  e && t && window.history.go(-(t - 1));
}), window.confirmnew = cc11001100_hook("window.confirmnew", function (e, t, i, a) {
  var n = cc11001100_hook("n", {
    title: cc11001100_hook("title", " ", "object-key-init"),
    maxWidth: cc11001100_hook("maxWidth", 340, "object-key-init"),
    resize: cc11001100_hook("resize", !1, "object-key-init"),
    btn: cc11001100_hook("btn", [getlang("ensure"), getlang("cancel")], "object-key-init"),
    cancel: function () {
      a && a();
    }
  }, "var-init");
  isMobile && (n = cc11001100_hook("n", {
    title: cc11001100_hook("title", "", "object-key-init"),
    closeBtn: cc11001100_hook("closeBtn", 0, "object-key-init"),
    shadeClose: cc11001100_hook("shadeClose", !1, "object-key-init"),
    anim: cc11001100_hook("anim", 0, "object-key-init"),
    maxWidth: cc11001100_hook("maxWidth", 320 < $(window).width() ? 320 : $(window).width() - 20, "object-key-init"),
    isOutAnim: cc11001100_hook("isOutAnim", 0, "object-key-init"),
    btn: cc11001100_hook("btn", [getlang("ensure"), getlang("cancel")], "object-key-init")
  }, "assign")), layer.confirm(e, n, function (e) {
    t && t(), layer.close(e);
  }, function (e) {
    i && i(), layer.close(e);
  });
}, "assign"), $(function () {
  clockRecordTime(), initSelelct2(), window.isJieLong || curPageHeatmapInit(), adjustIosInput(), hasJoinCusomInit(), window.forbidEditStr && forbidEdit(forbidEditStr), window.TotalValBoxInit && TotalValBoxInit(), window.initDetailList && initDetailList(1);
}), window.onorientationchange = cc11001100_hook("window.onorientationchange", function () {
  window.haschangeorientation = cc11001100_hook("window.haschangeorientation", !0, "assign"), setTimeout(function () {
    orientationUpdate(), window.haschangeorientation = cc11001100_hook("window.haschangeorientation", !1, "assign");
  }, 200);
}, "assign"), $(function () {
  window.progressBarType && window.progressBarType < 3 && !window.joinIdnew && $("#answerProcess").show();
  var e,
    t,
    i,
    a,
    n = cc11001100_hook("n", $("#deepButton"), "var-init");
  window.buttonfooter = cc11001100_hook("window.buttonfooter", n, "assign"), window.IsPar || window.divFengMian || "4" == window.isChuangGuan || window.isinterview || -1 < location.href.indexOf("tpii") ? n.hide() : (e = cc11001100_hook("e", $("body #form1").outerHeight(), "assign"), t = cc11001100_hook("t", document.documentElement.clientHeight, "assign"), i = cc11001100_hook("i", 100, "assign"), 0 !== $("#divPowerBy").length && $("#divPowerBy").is(":visible") || (i = cc11001100_hook("i", 50, "assign")), 0 < (scrFormHeightDif = cc11001100_hook("scrFormHeightDif", t + i - e, "assign")) ? n.addClass("button-list-fixed") : scrFormHeightDif < 0 && n.addClass("button-list-fixed-deep"), a = cc11001100_hook("a", window.innerHeight, "assign"), $(window).resize(function () {
    200 < a - window.innerHeight ? (window.keyboardUp = cc11001100_hook("window.keyboardUp", !0, "assign"), n.hide(), $("#divPowerBy").hide()) : (window.keyboardUp = cc11001100_hook("window.keyboardUp", !1, "assign"), n.show(), $("#divPowerBy").show(), fixBottom());
  }));
});
var answeredobj = cc11001100_hook("answeredobj", {}, "var-init");
function showProgressBar(e) {
  cc11001100_hook("e", e, "function-parameter");
  try {
    if (1 != $(e).attr("csetq")) if (window.progressBarType || !window.joinIdnew) if (2 == window.progressBarType) d = cc11001100_hook("d", $("fieldset").length, "assign"), l = cc11001100_hook("l", cur_page + 1, "assign"), p = cc11001100_hook("p", parseInt(l / d * 100), "assign"), $("#answerProcess .processInner").css("width", p + "%");else if ($(e)[0]) {
      var t,
        i,
        a = cc11001100_hook("a", getTopic(e), "var-init"),
        n = cc11001100_hook("n", new Object(), "var-init"),
        r = cc11001100_hook("r", $(e).attr("type"), "var-init"),
        o = cc11001100_hook("o", (n._topic = cc11001100_hook("n._topic", a, "assign"), n._value = cc11001100_hook("n._value", "", "assign"), "none" != $(e)[0].style.display || "-1" == $(e).attr("relation")), "var-init"),
        s = cc11001100_hook("s", (getAnswer(e, n, r, o), "" == n._value || null == n._value || null == n._value || 4 == r && -2 == n._value || isNullAnswer(r, n._value)), "var-init"),
        l = cc11001100_hook("l", (answeredobj[a] || s || ((t = cc11001100_hook("t", {}, "assign")).value = cc11001100_hook("(t = {}).value", n._value, "assign"), t.div = cc11001100_hook("t.div", e, "assign"), answeredobj[a] = cc11001100_hook("answeredobj[a]", t, "assign")), answeredobj[a] && s && delete answeredobj[a], Object.keys(answeredobj).length), "var-init"),
        d = cc11001100_hook("d", $(".field").filter(function (e) {
          return "none" != this.style.display && "1" != this.getAttribute("qingjing") && !$(this).hasClass("cutfield") && parseInt($(this).attr("topic")) < 5e4;
        }).length, "var-init"),
        l = cc11001100_hook("l", 0, "var-init");
      for (i in answeredobj) {
        var c = cc11001100_hook("c", answeredobj[i].div, "var-init");
        c && "none" != $(c)[0].style.display && l++;
      }
      var p = cc11001100_hook("p", parseInt(l / d * 100), "var-init");
      $("#answerProcess .processInner").css("width", p + "%");
    }
  } catch (e) {}
}
var tipNode = cc11001100_hook("tipNode", document.getElementById("tip-box"), "var-init");
function hideTip(e) {
  cc11001100_hook("e", e, "function-parameter");
  tipNode && (tipNode.innerHTML = cc11001100_hook("tipNode.innerHTML", "", "assign"), tipNode.style.display = cc11001100_hook("tipNode.style.display", "none", "assign"));
}
function getTop(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var t = cc11001100_hook("t", e.offsetLeft, "var-init"), i = cc11001100_hook("i", e.offsetTop, "var-init"); e = cc11001100_hook("e", e.offsetParent, "assign");) t += cc11001100_hook("t", e.offsetLeft, "assign"), i += cc11001100_hook("i", e.offsetTop, "assign");
  return {
    x: cc11001100_hook("x", t, "object-key-init"),
    y: cc11001100_hook("y", i, "object-key-init")
  };
}
function limitWordFn(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", 200, "var-init");
  return window.isMobile && (t = cc11001100_hook("t", 100, "assign")), e = cc11001100_hook("e", e.length > t ? e.substr(0, t) + "..." : e, "assign");
}
function setTip(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", 0, "var-init"),
    i = cc11001100_hook("i", $(e).closest(".ui-table-body")[0], "var-init"),
    i = cc11001100_hook("i", (i && (t = cc11001100_hook("t", i.scrollLeft, "assign")), tipNode || ((tipNode = cc11001100_hook("tipNode", document.createElement("div"), "assign")).id = cc11001100_hook("(tipNode = document.createElement(\"div\")).id", "tip-box", "assign"), tipNode.className = cc11001100_hook("tipNode.className", "tip-style", "assign"), tipNode.style.display = cc11001100_hook("tipNode.style.display", "none", "assign"), tipNode.style.position = cc11001100_hook("tipNode.style.position", "absolute", "assign"), document.body.appendChild(tipNode)), tipNode.style.left = cc11001100_hook("tipNode.style.left", getTop(e).x - t + "px", "assign"), tipNode.style.width = cc11001100_hook("tipNode.style.width", e.clientWidth + 2 + "px", "assign"), limitWordFn(e.value)), "var-init");
  $(tipNode).text(i), e.value && e.scrollWidth > e.offsetWidth ? (tipNode.style.display = cc11001100_hook("tipNode.style.display", "", "assign"), tipNode.style.top = cc11001100_hook("tipNode.style.top", getTop(e).y - $(tipNode).height() - 14 + "px", "assign")) : tipNode.style.display = cc11001100_hook("tipNode.style.display", "none", "assign");
}
function aloneAnswer() {
  var e, i, a;
  window.hasinitaloneanswer || (window.hasinitaloneanswer = cc11001100_hook("window.hasinitaloneanswer", !0, "assign"), e = cc11001100_hook("e", $(".aloneAnswer"), "assign"), i = cc11001100_hook("i", '<div class="apageWrap"><a class="apageprev mainColor" href="javascript:;">' + getlang("prev") + '</a><span class="aAProgramWrap"><span class="curaAindex">1</span>/<span class="totalaAset">1</span></span><a class="apagenext mainColor" href="javascript:;">' + getlang("next") + "</a></div>", "assign"), a = cc11001100_hook("a", '<div class="apageWrap"><a class="apageprev mainColor" href="javascript:;">' + getlang("prev") + '</a><span class="aAProgramWrap"><span class="curaAindex">1</span>/<span class="totalaAset">1</span></span><a class="apagenext mainColor" href="javascript:;">' + getlang("next") + '</a><a class="apagereset mainColor" href="javascript:;">重新选择</a></div>', "assign"), e.each(function () {
    var e = cc11001100_hook("e", $(this).find("tr.rowtitle"), "var-init"),
      t = cc11001100_hook("t", $(this).find("isTendencyQADiv"), "var-init"),
      s = cc11001100_hook("s", "10" == $(this).closest(".field").attr("type"), "var-init"),
      l = cc11001100_hook("l", (this.totalrows = cc11001100_hook("this.totalrows", e.length, "assign"), this.isTendencyQADiv = cc11001100_hook("this.isTendencyQADiv", t, "assign"), this.rowsIndex || (this.rowsIndex = cc11001100_hook("this.rowsIndex", 1, "assign")), this), "var-init");
    t ? $(this).append($(a)) : $(this).append($(i)), this.showrow = cc11001100_hook("this.showrow", function (e, t) {
      var i = cc11001100_hook("i", $(l).find("tr.rowtitle"), "var-init"),
        i = cc11001100_hook("i", (i = cc11001100_hook("i", s ? $(l).find(".select_title") : i, "assign")).filter(function () {
          return "none" != this.style.display;
        }), "var-init"),
        a = cc11001100_hook("a", (0 == i.length ? $(l).find(".apageWrap").hide() : $(l).find(".apageWrap").show(), (s ? ($(l).find(".divlabel").addClass("nhide"), $(l).find(".mdivtable,.select_title")) : $(l).find("tr")).addClass("nhide"), i.eq(l.rowsIndex - 1)), "var-init");
      if (a.removeClass("nhide"), a.next().removeClass("nhide"), 1 == $(l).closest(".field").attr("level") && leveltranslatetitle(a.find(".itemTitleSpan")), !t) {
        t = cc11001100_hook("t", isMobile ? "-300px" : "-650px", "assign");
        if (e && (t = cc11001100_hook("t", isMobile ? "300px" : "650px", "assign")), s) {
          if (a.css({
            position: cc11001100_hook("position", "relative", "object-key-init"),
            right: cc11001100_hook("right", t, "object-key-init")
          }), a.animate({
            right: cc11001100_hook("right", "0px", "object-key-init")
          }, 300), a.next().css({
            position: cc11001100_hook("position", "relative", "object-key-init"),
            right: cc11001100_hook("right", t, "object-key-init")
          }), a.next().animate({
            right: cc11001100_hook("right", "0px", "object-key-init")
          }, 300), !e && a.next()[0] && !a.next()[0].hasinitwidth) for (var e = cc11001100_hook("e", parseInt(a.next().find(".rangeslider").width() - 20), "var-init"), n = cc11001100_hook("n", (a.next().find(".ruler").width(e), a.next()[0].hasinitwidth = cc11001100_hook("a.next()[0].hasinitwidth", !0, "assign"), initEleSlider(a.next()[0]), a.next().find(".file").toArray()), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
            var o = cc11001100_hook("o", n[r], "var-init");
            o.parentNode.uploader && o.parentNode.uploader.refresh();
          }
        } else a.children().css({
          position: cc11001100_hook("position", "relative", "object-key-init"),
          right: cc11001100_hook("right", t, "object-key-init")
        }), a.children().animate({
          right: cc11001100_hook("right", "0px", "object-key-init")
        }, 300), a.next().children().css({
          position: cc11001100_hook("position", "relative", "object-key-init"),
          right: cc11001100_hook("right", t, "object-key-init")
        }), a.next().children().animate({
          right: cc11001100_hook("right", "0px", "object-key-init")
        }, 300);
      }
      0 < a.prevAll(".tr_label").length && a.prevAll(".tr_label").eq(0).removeClass("nhide"), 0 < a.prevAll(".divlabel").length && a.prevAll(".divlabel").eq(0).removeClass("nhide");
      e = cc11001100_hook("e", $(l).find(".curaAindex"), "assign"), t = cc11001100_hook("t", $(l).find(".totalaAset"), "assign"), a = cc11001100_hook("a", i.length, "assign");
      e.text(l.rowsIndex), t.text(a), 1 == l.rowsIndex ? $(l).find(".apageprev").addClass("disabled") : $(l).find(".apageprev").removeClass("disabled"), l.rowsIndex == a ? $(l).find(".apagenext").addClass("disabled") : $(l).find(".apagenext").removeClass("disabled");
    }, "assign"), $(this).find(".apagenext").click(function () {
      $(this).hasClass("disabled") ? 1 < l.rowsIndex && !window.ishydj && !window.isLoadingAnswer && alertmsg(getlang("finish"), 1e3, l) : ($("#divMatrixHeader,#divMatrixRel").hide(), l.rowsIndex += cc11001100_hook("l.rowsIndex", 1, "assign"), l.showrow());
    }), $(this).find(".apageprev").click(function () {
      $(this).hasClass("disabled") || ($("#divMatrixHeader,#divMatrixRel").hide(), --l.rowsIndex, l.showrow(!0));
    }), $(this).find(".apagereset").click(function () {
      var e, t, i;
      $(this).hasClass("disabled") || (e = cc11001100_hook("e", $(l).parents(".ui-field-contain"), "assign"), i = cc11001100_hook("i", (t = cc11001100_hook("t", $(l).find(".rate-on"), "assign")).attr("mode"), "assign"), t.removeClass("rate-on"), i && t.removeClass("rate-on" + i), $("#divMatrixHeader,#divMatrixRel").hide(), $(".isRandomRow", l).length ? l.rowsIndex = cc11001100_hook("l.rowsIndex", Math.ceil(Math.random() * l.tendencytrObjArr.length), "assign") : l.rowsIndex = cc11001100_hook("l.rowsIndex", 1, "assign"), l.climate = cc11001100_hook("l.climate", null, "assign"), l.showrow(!0), $("table", l).removeClass("disabled"), saveLikert(e), displayRelationByType(e), saveAnswer(e));
    }), this.showrow(!1, !0);
  }));
}
function landscapeFun() {
  180 !== window.orientation && 0 !== window.orientation || ($("body").removeClass("landscape"), $("meta[name='viewport']").attr("content", "width=device-width, minimum-scale=1, maximum-scale=1,user-scalable=no,viewport-fit=cover"), window.islandscape = cc11001100_hook("window.islandscape", !1, "assign")), 90 !== window.orientation && -90 !== window.orientation || ($("body").addClass("landscape"), $("meta[name='viewport']").attr("content", "width=device-width, minimum-scale=1, maximum-scale=1,user-scalable=no"), window.islandscape = cc11001100_hook("window.islandscape", !0, "assign")), fixBottom();
}
function leveltranslatetitle(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", $(e).html(), "var-init");
  -1 < i.indexOf("vs") && (t = cc11001100_hook("t", i.split("vs"), "assign"), i = cc11001100_hook("i", getlang("levelcont").replace(/\{0\}/g, t[0]).replace(/\{1\}/g, t[1]), "assign")), $(e).html(i);
}
function langBtnWidthInit(e) {
  cc11001100_hook("e", e, "function-parameter");
  (1 == langVer || 2 < langVer) && (e && $("#divPrev")[0] ? $("#divPrev").width() < (e = cc11001100_hook("e", $("#divPrev")[0].scrollWidth, "assign")) && $("#divPrev").css({
    width: cc11001100_hook("width", e + 28, "object-key-init"),
    "max-width": cc11001100_hook("max-width", e + 28, "object-key-init")
  }) : $("#divNext")[0] && setTimeout(function () {
    var e = cc11001100_hook("e", $("#divNext").width(), "var-init"),
      t = cc11001100_hook("t", $("#divNext")[0].scrollWidth, "var-init");
    e < t && $("#divNext").css({
      width: cc11001100_hook("width", t + 28, "object-key-init"),
      "max-width": cc11001100_hook("max-width", t + 28, "object-key-init")
    });
  }, 200));
}
$(function () {
  aloneAnswer(), window.hasBackground && !document.getElementById("divPowerBy") && ($("#divBackgroundWrap").css("bottom", "0"), $("#divContent").css("margin-bottom", "40px")), $(".tableWrap").scroll(function () {
    var i = cc11001100_hook("i", $(this).scrollLeft(), "var-init"),
      a = cc11001100_hook("a", this, "var-init");
    $(this).find(".rowtitle").each(function () {
      var e = cc11001100_hook("e", $(this).children(".title").eq(0), "var-init"),
        t = cc11001100_hook("t", e.children().eq(0), "var-init"),
        e = cc11001100_hook("e", ($(e).children(".itemSrcImg").width() || 0) + ($(e).children(".itemTitleSpan").width() || 0), "var-init");
      return "none" == this.style.display || e > $(a).width() - 100 || (e - i < $(a).width() - 100 ? t.css("margin-left", i + "px") : t.css("margin-left", "0px"), void $("#divMatrixHeader").hide());
    }), $(this).hasClass("aloneAnswer") && $(this).children(".apageWrap").width() + i <= $(this).children("table").width() && $(this).children(".apageWrap").css("left", i + "px");
  });
  try {
    langBtnWidthInit(), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", landscapeFun, !1), landscapeFun(), browserIsIe() && document.body.addEventListener && document.body.addEventListener("mousewheel", function () {
      event.preventDefault();
      var e = cc11001100_hook("e", event.wheelDelta, "var-init"),
        t = cc11001100_hook("t", window.pageYOffset, "var-init");
      window.scrollTo(0, t - e);
    });
  } catch (e) {}
});
var layerCallBack = cc11001100_hook("layerCallBack", null, "var-init");
function getArgumentsList(e) {
  cc11001100_hook("e", e, "function-parameter");
  e = cc11001100_hook("e", e.toString(), "assign");
  if (/function\s*\w*\(([\s\S]*?)\)/.test(e)) {
    for (var t = cc11001100_hook("t", RegExp.$1.split(","), "var-init"), i = cc11001100_hook("i", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) {
      var n = cc11001100_hook("n", t[a].replace(/\s/g, ""), "var-init");
      n && i.push(n);
    }
    return i;
  }
  return [];
}
function validationNumber(e, a) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  $("input[inputmode='decimal']", e).on("keyup paste input", function () {
    var e = cc11001100_hook("e", "1" == $(this).attr("issum"), "var-init"),
      t = cc11001100_hook("t", $(this).attr("isdigit") || 2, "var-init"),
      i = cc11001100_hook("i", "negative" == a ? /^-?\d+(\.\d+)?$|^-?\d+\.$|^-$/ : /^[0-9]+\.?[0-9]*$/, "var-init");
    1 == t && (i = cc11001100_hook("i", /^[0-9]+$/, "assign"), "negative" == a) && (i = cc11001100_hook("i", /^-?\d+$/, "assign")), "" == this.value || i.test(this.value) || (i = cc11001100_hook("i", parseFloat(this.value), "assign"), !e && 1 != t || (i = cc11001100_hook("i", parseInt(this.value), "assign")), i = cc11001100_hook("i", isNaN(i) ? "" : i, "assign"), this.value = cc11001100_hook("this.value", i, "assign"), $(this).blur(), this.focus());
  });
}
function PDF_launch(e, t, i, a, n, r, o) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("o", o, "function-parameter");
  a && 0 < getArgumentsList(a).length && (layerCallBack = cc11001100_hook("layerCallBack", a, "assign"), a = cc11001100_hook("a", null, "assign"));
  var s = cc11001100_hook("s", -1 < e.indexOf(".") ? 2 : 1, "var-init"),
    l = cc11001100_hook("l", (e = cc11001100_hook("e", -1 < e.indexOf(".") ? e : jQuery("#" + e), "assign"), n ? (-1 != n.indexOf("&=") && (n = cc11001100_hook("n", helpLink(n), "assign")), i && (i += cc11001100_hook("i", 54, "assign"))) : i && (i += cc11001100_hook("i", 30, "assign")), !i || i >= document.documentElement.clientHeight), "var-init"),
    t = cc11001100_hook("t", t ? t + "px" : "auto", "var-init"),
    d = cc11001100_hook("d", i ? i + "px" : "auto", "var-init"),
    c = cc11001100_hook("c", l && i ? "50px" : "auto", "var-init"),
    o = cc11001100_hook("o", (self == top || window.IsPar || (c = cc11001100_hook("c", obj_offectTop + 50 + i <= $(window).height() ? obj_offectTop + 50 + "px" : $(window).height() - i - 20, "assign")), !1 !== o && 1), "var-init"),
    l = cc11001100_hook("l", {
      zIndex: cc11001100_hook("zIndex", 1e6, "object-key-init"),
      fixed: cc11001100_hook("fixed", !l, "object-key-init"),
      anim: cc11001100_hook("anim", -1, "object-key-init"),
      offset: cc11001100_hook("offset", c = cc11001100_hook("c", window.ytyyframe ? i && i > $("#pageDiv").outerHeight() ? "0px" : "auto" : c, "assign"), "object-key-init"),
      resize: cc11001100_hook("resize", !1, "object-key-init"),
      scrollbar: cc11001100_hook("scrollbar", !0, "object-key-init"),
      content: cc11001100_hook("content", e, "object-key-init"),
      shade: cc11001100_hook("shade", .65, "object-key-init"),
      area: cc11001100_hook("area", [t, d], "object-key-init"),
      title: cc11001100_hook("title", n || " ", "object-key-init"),
      type: cc11001100_hook("type", s, "object-key-init"),
      shadeClose: cc11001100_hook("shadeClose", !!window.isMobile, "object-key-init"),
      isOutAnim: cc11001100_hook("isOutAnim", !1, "object-key-init"),
      closeBtn: cc11001100_hook("closeBtn", o, "object-key-init"),
      end: cc11001100_hook("end", a, "object-key-init"),
      success: function () {
        setTimeout(function () {
          $(".layui-layer-shade").length > $(".layui-layer").length && $(".layui-layer-shade:last-child").remove(), postHeight();
        }, 200);
      }
    }, "var-init"),
    i = cc11001100_hook("i", $.extend(l, r), "var-init");
  return layer.open(i);
}
var PDF_close = function (e) {
  layer.closeAll("iframe"), layer.closeAll("page"), window.layerCallBack && layerCallBack(e);
};
function loadSwiper(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t;
  window.Swiper ? e() : ((t = cc11001100_hook("t", document.createElement("link"), "assign")).setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", ExternalCdnDomain + "/Swiper/9.2.2/swiper-bundle.min.css"), document.head.appendChild(t), $.ajax({
    type: cc11001100_hook("type", "GET", "object-key-init"),
    url: cc11001100_hook("url", ExternalCdnDomain + "/Swiper/9.2.2/swiper-bundle.min.js", "object-key-init"),
    success: function () {
      e();
    },
    dataType: cc11001100_hook("dataType", "script", "object-key-init"),
    cache: cc11001100_hook("cache", !0, "object-key-init")
  }));
}
var swiperindex = cc11001100_hook("swiperindex", 0, "var-init");
function initSwiperQue(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t, i;
  window.waitfenmian || (t = cc11001100_hook("t", $("img[spurls]"), "assign"), i = cc11001100_hook("i", (t = cc11001100_hook("t", 0 < $(e).length ? $(e).find("img[spurls]") : t, "assign")).toArray(), "assign"), $(".cutfield").each(function () {
    -1 < $(this).text().indexOf("swiper") && i.push($(this));
  }), 0 != i.length && loadSwiper(function () {
    $(i).each(function (e, t) {
      var i = cc11001100_hook("i", $(this).hasClass("cutfield"), "var-init");
      if (!i) {
        if ($(this).next().hasClass("swiper")) return !0;
        $(this).hide();
      }
      for (var a, n = cc11001100_hook("n", "swiper" + swiperindex, "var-init"), n = cc11001100_hook("n", (swiperindex++, a = cc11001100_hook("a", i ? $(this).text().split("swiper") : $(this).attr("spurls").split("|"), "assign"), $('<div class="swiper ' + n + '"></div>')), "var-init"), r = cc11001100_hook("r", '<div class="swiper-wrapper">', "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < a.length; o++) a[o] && (r += cc11001100_hook("r", '<div class="swiper-slide"><img src=' + a[o] + " /></div>", "assign"));
      n.html(r += cc11001100_hook("r", '</div><div class="swiper-pagination"></div>', "assign")), i ? $(this).html(n) : $(this).after(n), new Swiper(n[0], {
        loop: cc11001100_hook("loop", !0, "object-key-init"),
        pagination: {
          el: cc11001100_hook("el", ".swiper-pagination", "object-key-init")
        },
        autoplay: {
          delay: cc11001100_hook("delay", 2500, "object-key-init"),
          stopOnLastSlide: cc11001100_hook("stopOnLastSlide", !1, "object-key-init"),
          disableOnInteraction: cc11001100_hook("disableOnInteraction", !1, "object-key-init")
        }
      }), enlargeImg(n.find("img"));
    });
  }));
}
function changeHeight(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t,
    i = cc11001100_hook("i", parseInt(e.style.height), "var-init");
  i && (e.initHeight || (e.initHeight = cc11001100_hook("e.initHeight", i, "assign")), 10 <= (t = cc11001100_hook("t", 100 < (t = cc11001100_hook("t", 40 < (t = cc11001100_hook("t", e.scrollHeight, "assign")) ? t + 2 : 40, "assign")) ? 100 : t, "assign")) - i && (e.style.height = cc11001100_hook("e.style.height", t + "px", "assign")), !e.value || e.value.length < 10 && -1 == e.value.indexOf("\n")) && (e.style.height = cc11001100_hook("e.style.height", e.initHeight + "px", "assign"));
}
function showcjdfinish(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", "<div style='padding:80px 0;display:flex;align-items:center;flex-direction:column;' class='showcjdfinish'><i class='comIcon' style='font-size:48px;color:#01AD56;'>&#xe699;</i><p style='font-size:16px;line-height:24px;font-weight:600;margin:24px 0 8px 0;'>本次练习完成，答对", "assign")) + ("<span style='color:#01AD56;padding:0 4px;font-size:16px;'>" + e + "</span>题，答错") + ("<span style='color:#FF4040;padding:0 4px;font-size:16px;'>" + t + "</span>题</span></p>"), "assign")) + "<span style='color:#8C8C8C;font-size:14px;line-height:22px;'>返回错题集查看练习错题吧~</span>" + ("<a href='" + i + "' class='wjxui-btn' style='font-size:14px;border-radius: 2px;background: #0095FF;height: 32px;padding:0 16px;line-height:32px;display:inline-block;color:#fff;margin-top:24px;'>返回错题集</a>"), "var-init");
  $("#divContent").after(a), $(".showcjdfinish").siblings().hide();
}
$(function () {
  initSwiperQue(), window.initAmapPositon && !window.waitfenmian && initAmapPositon(), -1 < location.href.indexOf("ctj=1") && $(".ui-field-contain").each(function () {
    $(this).attr("req", 0), $(this).find(".req").hide();
  });
});
var wjxdata = cc11001100_hook("wjxdata", {
  amount: cc11001100_hook("amount", 5, "object-key-init"),
  isolduser: function () {
    return !1;
  },
  clear: function (e) {
    if (e) {
      var t = cc11001100_hook("t", wjxdata.get().wjxanswerdata, "var-init");
      if (t) {
        for (var i = cc11001100_hook("i", e.split(","), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < i.length; a++) delete t[i[a]];
        wjxdata.set(t, !0);
      }
    } else wjxdata.set(!1);
  },
  updata: function (e, t) {
    var i = cc11001100_hook("i", wjxdata.get().wjxanswerdata, "var-init");
    i[e] = cc11001100_hook("i[e]", t, "assign"), wjxdata.set(i);
  },
  set: function (e, t) {
    try {
      var i = cc11001100_hook("i", window.localStorage, "var-init");
      if (i) {
        if (a = cc11001100_hook("a", i.getItem("wjxanswerdata"), "assign")) {
          for (var a = cc11001100_hook("a", JSON.parse(a), "var-init"), n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", null, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < a.length; o++) if (a[o].wjxtempanswerid == activityId) {
            r = cc11001100_hook("r", a[n = cc11001100_hook("n", o, "assign")], "assign");
            break;
          }
          if (0 <= n) e ? a[n] = cc11001100_hook("a[n]", t ? e : $.extend(r, e), "assign") : a.splice(n, 1);else {
            if (!e) return;
            a.length >= wjxdata.amount && a.shift(), a.push(e);
          }
        } else (a = cc11001100_hook("a", new Array(), "assign")).push(e);
        i.setItem("wjxanswerdata", JSON.stringify(a)), wjxdata.hasdata = cc11001100_hook("wjxdata.hasdata", null, "assign");
      }
    } catch (e) {}
  },
  get: function () {
    var e = cc11001100_hook("e", wjxdata.defaultreturn, "var-init"),
      t = cc11001100_hook("t", window.localStorage, "var-init");
    if (!t) return e;
    if (wjxdata.hasdata) return wjxdata.hasdata;
    var i = cc11001100_hook("i", -1, "var-init"),
      a = cc11001100_hook("a", null, "var-init");
    if (!(n = cc11001100_hook("n", t.getItem("wjxanswerdata"), "assign")) || 0 == n.length) return e;
    for (var n = cc11001100_hook("n", JSON.parse(n), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) if (n[r].wjxtempanswerid == activityId) {
      a = cc11001100_hook("a", n[i = cc11001100_hook("i", r, "assign")], "assign");
      break;
    }
    t = cc11001100_hook("t", {
      wjxanswerdataindex: cc11001100_hook("wjxanswerdataindex", i, "object-key-init"),
      wjxanswerdata: cc11001100_hook("wjxanswerdata", a, "object-key-init")
    }, "assign");
    return wjxdata.hasdata = cc11001100_hook("wjxdata.hasdata", t, "assign");
  },
  defaultreturn: {
    wjxanswerdataindex: cc11001100_hook("wjxanswerdataindex", -1, "object-key-init"),
    wjxanswerdata: cc11001100_hook("wjxanswerdata", null, "object-key-init")
  }
}, "var-init");
function previewPDF(e, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  e.stopPropagation();
  var e = cc11001100_hook("e", $(t).attr("pdf"), "var-init"),
    t = cc11001100_hook("t", $(window).height() - 40, "var-init"),
    i = cc11001100_hook("i", 1280, "var-init");
  return $(window).width() < i && (i = cc11001100_hook("i", $(window).width() - 20, "assign")), layer.open({
    shadeClose: cc11001100_hook("shadeClose", !0, "object-key-init"),
    title: cc11001100_hook("title", " ", "object-key-init"),
    type: cc11001100_hook("type", 2, "object-key-init"),
    content: cc11001100_hook("content", e + "&v=1", "object-key-init"),
    anim: cc11001100_hook("anim", -1, "object-key-init"),
    area: cc11001100_hook("area", [i + "px", t + "px"], "object-key-init")
  }), !1;
}
function getlang(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", void 0 !== wjxlang[e] ? wjxlang[e] : "", "var-init");
  return 0 < location.href.indexOf("skey=1") ? t = cc11001100_hook("t", "@_" + e + ":" + t, "assign") : window.isTestEnv && "" == t && (t = cc11001100_hook("t", "@_" + e, "assign")), t;
}
var wxnewfs = cc11001100_hook("wxnewfs", "", "var-init"),
  wxoldfs = cc11001100_hook("wxoldfs", 100, "var-init");
function SetTextSizeAdjust() {
  (-1 < navigator.userAgent.indexOf("Android") || -1 < navigator.userAgent.indexOf("Adr")) && ("object" == typeof WeixinJSBridge && "function" == typeof WeixinJSBridge.invoke ? (handleFontSize(), setTimeout(function () {
    for (var e = cc11001100_hook("e", 0, "var-init"); e < pageHolder[cur_page].questions.length; e++) setFixedSliderTableHandler($(pageHolder[cur_page].questions[e]));
  }, 500)) : document.addEventListener("WeixinJSBridgeReady", handleFontSize, !1));
}
function handleFontSize() {
  WeixinJSBridge.invoke("setFontSizeCallback", {
    fontSize: cc11001100_hook("fontSize", 0, "object-key-init")
  }), WeixinJSBridge.on("menu:setfont", function (e) {
    e && 2 == e.fontSize || WeixinJSBridge.invoke("setFontSizeCallback", {
      fontSize: cc11001100_hook("fontSize", 0, "object-key-init")
    });
  });
}
function updateTopicNumber() {
  var e;
  window.isKaoShi || window.showAllPageQues || 0 != $(".topicnumber").length && (e = cc11001100_hook("e", 1, "assign"), $(".field").each(function () {
    return "none" == this.style.display || "true" == $(this).parent().attr("skip") || 5e4 <= $(this).attr("topic") || 0 == $(this).find(".topicnumber").length || ($(this).find(".topicnumber").eq(0).html(e + "."), void e++);
  }));
}
function foldopen(e) {
  cc11001100_hook("e", e, "function-parameter");
  $(e).toggleClass("open").next().toggle();
}
function AddPrivacyPolicy() {
  var e, t, i;
  $("#divPowerBy")[0] && $("#spanPower")[0] && (e = cc11001100_hook("e", window.isEnglish ? "Privacy Policy" : "隐私政策", "assign"), e = cc11001100_hook("e", $("<a href='javascript:;' class='policyLink'>" + e + "</a>"), "assign"), t = cc11001100_hook("t", 900, "assign"), i = cc11001100_hook("i", 700, "assign"), window.isMobile || window.isytyy ? (t = cc11001100_hook("t", $(window).width() - 20, "assign"), i = cc11001100_hook("i", $(window).height() - 60, "assign")) : (i > $(window).height() - 100 && (i = cc11001100_hook("i", $(window).height() - 100, "assign")), t > $(window).width() - 20 && (i = cc11001100_hook("i", $(window).width() - 20, "assign"))), e.click(function () {
    PDF_launch("/wjx/license.aspx?type=2", t, i);
  }), $("#divPowerBy").before(e));
}
$(function () {
  setTimeout(function () {
    wxnewfs = cc11001100_hook("wxnewfs", parseInt($("#fontWrap").css("font-size")), "assign"), SetTextSizeAdjust();
  }, 1500), updateTopicNumber(), AddPrivacyPolicy();
});