function getGender(e, n, r, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  "3" == e && -1 != r.indexOf("性别") && (t.each(function (e) {
    var n;
    if (this.checked) return -1 < (n = cc11001100_hook("n", $(this.parentNode.parentNode).find(".label").html(), "assign")).indexOf("男") ? gender = cc11001100_hook("gender", 1, "assign") : -1 < n.indexOf("女") && (gender = cc11001100_hook("gender", 2, "assign")), !1;
  }), 0 < gender) && window.localStorage && window.localStorage.setItem("wjxge", gender);
}
function getMarriage(e, n, r, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  "3" != e || -1 == r.indexOf("婚姻") || marriage || (t.each(function (e) {
    var n;
    if (this.checked) return -1 < (n = cc11001100_hook("n", $(this.parentNode.parentNode).find(".label").html(), "assign")).indexOf("未婚") ? marriage = cc11001100_hook("marriage", 1, "assign") : (-1 < n.indexOf("已婚") || -1 < n.indexOf("离异")) && (marriage = cc11001100_hook("marriage", 2, "assign")), !1;
  }), 0 < marriage && window.localStorage && window.localStorage.setItem("wjxma", marriage));
}
function getEducation(e, n, r, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  "3" != e || (r = cc11001100_hook("r", (r = cc11001100_hook("r", (r = cc11001100_hook("r", r.replace("你", "您"), "assign")).replace("您目前", "您的").replace("您已取得", "您的").replace("您取得", "您的"), "assign")).replace("教育程度", "学历"), "assign"), education) || ((-1 < r.indexOf("您的") && -1 < r.indexOf("学历") || -1 < r.indexOf("您的文化") || -1 < r.indexOf("您的") && -1 < r.indexOf("受教育") || -1 < r.indexOf("您接受教育的水平") || -1 < r.indexOf("您的教育水平")) && t.each(function (e) {
    var n;
    if (this.checked) return -1 < (n = cc11001100_hook("n", $(this.parentNode.parentNode).find(".label").html(), "assign")).indexOf("硕士") || -1 < n.indexOf("博士") || -1 < n.indexOf("研究生") ? education = cc11001100_hook("education", 5, "assign") : -1 < n.indexOf("本科") ? education = cc11001100_hook("education", 4, "assign") : -1 < n.indexOf("大专") || -1 < n.indexOf("专科") ? education = cc11001100_hook("education", 3, "assign") : -1 < n.indexOf("高中") || -1 < n.indexOf("中专") || -1 < n.indexOf("职高") ? education = cc11001100_hook("education", 2, "assign") : (-1 < n.indexOf("初中") || -1 < n.indexOf("小学") || -1 < n.indexOf("没有") || -1 < n.indexOf("无") || -1 < n.indexOf("未上过学")) && (education = cc11001100_hook("education", 1, "assign")), !1;
  }), 0 < education && window.localStorage && window.localStorage.setItem("wjxed", education));
}
function getAge(e, n, r, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var a, o;
  "3" != e && "7" != e && "1" != e || -1 == r.indexOf("年龄") || (a = cc11001100_hook("a", "", "assign"), o = cc11001100_hook("o", 0, "assign"), 3 == e ? t.each(function (e) {
    if (this.checked) return a = cc11001100_hook("a", $(this.parentNode.parentNode).find(".label").html(), "assign"), o = cc11001100_hook("o", e, "assign"), !1;
  }) : 7 == e ? (r = cc11001100_hook("r", $("select", n)[0], "assign"), a = cc11001100_hook("a", r.options[r.selectedIndex].text, "assign"), o = cc11001100_hook("o", r.selectedIndex - 1, "assign")) : 1 == e && (t = cc11001100_hook("t", $("input", n), "assign")) && (a = cc11001100_hook("a", t.val(), "assign"), o = cc11001100_hook("o", 0, "assign")), !a) || !(r = cc11001100_hook("r", a.match(/[1-9][0-9]*/g), "assign")) || 0 == r.length || 2 < r.length || (2 == r.length ? (startAge = cc11001100_hook("startAge", r[0], "assign"), endAge = cc11001100_hook("endAge", r[1], "assign")) : 1 == r.length && (0 == o ? endAge = cc11001100_hook("endAge", r[0], "assign") : startAge = cc11001100_hook("startAge", r[0], "assign")), 0 < startAge && window.localStorage && window.localStorage.setItem("wjxsa", startAge), 0 < endAge && window.localStorage && window.localStorage.setItem("wjxea", endAge));
}
function getIncome(e, n, r, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  var a, o, s;
  "3" != e && "7" != e && "1" != e || -1 == r.indexOf("收入") || (a = cc11001100_hook("a", 2, "assign"), (-1 < r.indexOf("月总收入") || -1 < r.indexOf("月收入")) && (a = cc11001100_hook("a", 1, "assign")), o = cc11001100_hook("o", "", "assign"), s = cc11001100_hook("s", 0, "assign"), 3 == e ? t.each(function (e) {
    if (this.checked) return o = cc11001100_hook("o", $(this.parentNode.parentNode).find(".label").html(), "assign"), s = cc11001100_hook("s", e, "assign"), !1;
  }) : 7 == e ? (r = cc11001100_hook("r", $("select", n)[0], "assign"), o = cc11001100_hook("o", r.options[r.selectedIndex].text, "assign"), s = cc11001100_hook("s", r.selectedIndex - 1, "assign")) : 1 == e && (t = cc11001100_hook("t", $("input", n), "assign")) && (o = cc11001100_hook("o", t.val(), "assign"), s = cc11001100_hook("s", 0, "assign")), !o) || !(r = cc11001100_hook("r", o.match(/[1-9][0-9]*/g), "assign")) || 0 == r.length || 2 < r.length || (2 == r.length ? (startIncome = cc11001100_hook("startIncome", r[0], "assign"), endIncome = cc11001100_hook("endIncome", r[1], "assign")) : 1 == r.length && (0 == s ? endIncome = cc11001100_hook("endIncome", r[0], "assign") : startIncome = cc11001100_hook("startIncome", r[0], "assign")), 2 == a && (startIncome = cc11001100_hook("startIncome", parseInt(startIncome / 12), "assign"), endIncome = cc11001100_hook("endIncome", parseInt(endIncome / 12), "assign")));
}
function getFamiliy(e, n, r, t) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  "3" != e || -1 == r.indexOf("子女") || familiy || t.each(function (e) {
    var n;
    if (this.checked) return -1 < (n = cc11001100_hook("n", $(this.parentNode.parentNode).find(".label").html(), "assign")).indexOf("没有") ? familiy = cc11001100_hook("familiy", 1, "assign") : -1 < n.indexOf("一个") ? familiy = cc11001100_hook("familiy", 2, "assign") : -1 < n.indexOf("两个") ? familiy = cc11001100_hook("familiy", 3, "assign") : (-1 < n.indexOf("三个") || -1 < n.indexOf("以上")) && (familiy = cc11001100_hook("familiy", 4, "assign")), !1;
  });
}
var title = cc11001100_hook("title", "", "var-init"),
  desc = cc11001100_hook("desc", "", "var-init"),
  qusInfArray = cc11001100_hook("qusInfArray", new Array(), "var-init");
function checkTitleDescMatch() {
  title = cc11001100_hook("title", changeEachWays(title = cc11001100_hook("title", $("#htitle").text() || "", "assign"), changeTitleObj), "assign"), desc = cc11001100_hook("desc", changeEachWays($("#divDesc").text(), changeDescObj), "assign");
  for (var e = cc11001100_hook("e", 0, "var-init"); e < pageHolder.length; e++) for (var n = cc11001100_hook("n", (n = cc11001100_hook("n", pageHolder[e].cuts, "assign")) || (pageHolder[e].cuts = cc11001100_hook("pageHolder[e].cuts", $(".cutfield", pageHolder[e]), "assign")), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) desc += cc11001100_hook("desc", "|" + changeEachWays(n[r].innerText, changeDescObj), "assign");
}
var anIndex = cc11001100_hook("anIndex", 0, "var-init"),
  changeTitleObj = cc11001100_hook("changeTitleObj", new Array(), "var-init"),
  changeDescObj = cc11001100_hook("changeDescObj", new Array(), "var-init"),
  changeQuesObj = cc11001100_hook("changeQuesObj", new Array(), "var-init"),
  changeChooseObj = cc11001100_hook("changeChooseObj", new Array(), "var-init"),
  changeAnswerObj = cc11001100_hook("changeAnswerObj", new Array(), "var-init"),
  hasloadGetChange = cc11001100_hook("hasloadGetChange", !1, "var-init");
function inintGetChange() {
  for (var e = cc11001100_hook("e", (window.keyWordChange || "").split("┋"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
    var r = cc11001100_hook("r", e[n].split("|"), "var-init");
    if (!(r.length < 3)) {
      var t = cc11001100_hook("t", new Object(), "var-init"),
        a = cc11001100_hook("a", r[1].split(","), "var-init");
      for (t.keyWord = cc11001100_hook("t.keyWord", r[0], "assign"), t.wordList = cc11001100_hook("t.wordList", r[2], "assign"), j = cc11001100_hook("j", 0, "assign"); j < a.length; j++) {
        if (1 == a[j]) {
          changeTitleObj.push(t), changeDescObj.push(t), changeQuesObj.push(t), changeChooseObj.push(t), changeAnswerObj.push(t);
          break;
        }
        2 == a[j] ? changeTitleObj.push(t) : 3 == a[j] ? changeDescObj.push(t) : 4 == a[j] ? changeQuesObj.push(t) : 5 == a[j] ? changeChooseObj.push(t) : 6 == a[j] && changeAnswerObj.push(t);
      }
    }
  }
}
function checkQuesMatch(e, n, r) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  0 != changeTitleObj.length || hasloadGetChange || (inintGetChange(), hasloadGetChange = cc11001100_hook("hasloadGetChange", !0, "assign"));
  try {
    if ("none" != $(n)[0].style.display) {
      var t = cc11001100_hook("t", new Object(), "var-init"),
        a = cc11001100_hook("a", e.split("<span"), "var-init"),
        o = cc11001100_hook("o", (a[0] = cc11001100_hook("a[0]", a[0].replace(/^\s*\d+[\.、]|\(?\d+\)|（?\d+）/g, "").replace(/\s*\*$/g, "").replace(" ", ""), "assign"), $(n).find(".qinsert") && (a[0] += cc11001100_hook("a[0]", $(n).find(".qinsert").text(), "assign")), t._topic = cc11001100_hook("t._topic", changeEachWays(a[0], changeQuesObj), "assign"), t._orgtopic = cc11001100_hook("t._orgtopic", changeEachWays(a[0], changeQuesObj), "assign"), t._answer = cc11001100_hook("t._answer", "", "assign"), t._choose = cc11001100_hook("t._choose", "", "assign")), "var-init"),
        s = cc11001100_hook("s", "", "var-init");
      if ("3" == r || "4" == r) {
        var i,
          c = cc11001100_hook("c", $("div.label", n), "var-init");
        (c = cc11001100_hook("c", window.hasTouPiao && $("span.selTitle", n)[0] ? $("span.selTitle", n) : c, "assign")).each(function (e) {
          var n = cc11001100_hook("n", this.innerHTML, "var-init");
          o += cc11001100_hook("o", changeEachWays(n, changeChooseObj) + "|", "assign");
        }), "3" == r ? $("input[type='radio']", n).each(function (e) {
          this.checked && (s = cc11001100_hook("s", $(this.parentNode.parentNode).find(".label").html(), "assign"));
        }) : "4" == r && (i = cc11001100_hook("i", !1, "assign"), $("input[type='checkbox']", n).each(function (e) {
          this.checked && (i ? s = cc11001100_hook("s", "", "assign") : (s = cc11001100_hook("s", $(this.parentNode.parentNode).find(".label").html(), "assign"), i = cc11001100_hook("i", !0, "assign")));
        }));
      } else if ("7" == r) {
        for (var h = cc11001100_hook("h", $("select", n)[0].options, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < h.length; d++) {
          var l = cc11001100_hook("l", h[d].text, "var-init");
          o += cc11001100_hook("o", changeEachWays(l, changeChooseObj) + "|", "assign");
        }
        var f = cc11001100_hook("f", $("select", n)[0], "var-init"),
          s = cc11001100_hook("s", f.options[f.selectedIndex].text, "var-init");
      } else if ("1" == r) {
        var g = cc11001100_hook("g", $("input", n), "var-init");
        g && (s = cc11001100_hook("s", g.val(), "assign"));
      } else if ("11" == r) (c = cc11001100_hook("c", $("input.custom", n), "assign")).each(function (e) {
        var n = cc11001100_hook("n", $(this).parent().next().text(), "var-init");
        o += cc11001100_hook("o", changeEachWays(n, changeChooseObj) + "|", "assign");
      });else {
        if ("6" == r) {
          var y = cc11001100_hook("y", $("table", n), "var-init"),
            p = cc11001100_hook("p", $("tr.trlabel th", n), "var-init"),
            u = cc11001100_hook("u", new Array(), "var-init");
          if (p) for (d = cc11001100_hook("d", 0, "assign"); d < p.length; d++) u.push(p[d].innerText);
          var w = cc11001100_hook("w", $("tr.rowtitle", n), "var-init"),
            O = cc11001100_hook("O", new Array(), "var-init");
          if (w) for (d = cc11001100_hook("d", 0, "assign"); d < w.length; d++) O.push(w[d].innerText);
          for (var j = cc11001100_hook("j", 0, "var-init"), b = cc11001100_hook("b", "", "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < y[0].rows.length; d++) {
            var W = cc11001100_hook("W", $(y[0].rows[d]).find("a.rate-off"), "var-init");
            if (W && !(W.length < 1)) {
              for (var k = cc11001100_hook("k", null, "var-init"), x = cc11001100_hook("x", 0, "var-init"); x < W.length; x++) W.eq(x).hasClass("rate-on") && (k = cc11001100_hook("k", W.eq(x), "assign"));
              var A,
                I = cc11001100_hook("I", "", "var-init"),
                K = cc11001100_hook("K", (k && k.attr("dval") && (A = cc11001100_hook("A", k.attr("dval") - 1, "assign"), I = cc11001100_hook("I", u.length > A ? u[A] : "", "assign")), t = cc11001100_hook("t", new Object(), "assign"), changeEachWays(O.length > j ? O[j] : "", changeQuesObj)), "var-init");
              t._topic = cc11001100_hook("t._topic", K, "assign"), b += cc11001100_hook("b", K + "|", "assign"), t._orgtopic = cc11001100_hook("t._orgtopic", b, "assign"), t._choose = cc11001100_hook("t._choose", u.join("|"), "assign"), t._answer = cc11001100_hook("t._answer", changeEachWays(s.changeAnswerObj), "assign"), qusInfArray.push(t), j++;
            }
          }
          return;
        }
        if ("9" == r) {
          b = cc11001100_hook("b", "", "assign");
          if ((y = cc11001100_hook("y", $("table", n), "assign"))[0]) {
            w = cc11001100_hook("w", $("td.title", n), "assign"), O = cc11001100_hook("O", new Array(), "assign");
            if (w) for (d = cc11001100_hook("d", 0, "assign"); d < w.length; d++) O.push(w[d].innerText);
            for (j = cc11001100_hook("j", 0, "assign"), d = cc11001100_hook("d", 0, "assign"); d < y[0].rows.length; d++) {
              W = cc11001100_hook("W", $(y[0].rows[d]).find("input,textarea"), "assign");
              if (W && !(W.length < 1)) {
                for (var I = cc11001100_hook("I", "", "var-init"), v = cc11001100_hook("v", 0, "var-init"); v < W.length; v++) I += cc11001100_hook("I", W[v].value, "assign");
                for (K = cc11001100_hook("K", "", "assign"), v = cc11001100_hook("v", 0, "assign"); v < O.length; v++) K += cc11001100_hook("K", O[v], "assign");
                t = cc11001100_hook("t", new Object(), "assign"), K = cc11001100_hook("K", changeEachWays(K, changeQuesObj), "assign");
                t._topic = cc11001100_hook("t._topic", K, "assign"), b += cc11001100_hook("b", K + "|", "assign"), t._orgtopic = cc11001100_hook("t._orgtopic", b, "assign"), t._choose = cc11001100_hook("t._choose", "", "assign"), t._answer = cc11001100_hook("t._answer", changeEachWays(I, changeAnswerObj), "assign"), qusInfArray.push(t), j++;
              }
            }
          } else {
            var m = cc11001100_hook("m", "", "var-init");
            $(".topictext", n)[0].childNodes.forEach(function (e) {
              var n;
              "#text" == e.nodeName ? m += cc11001100_hook("m", e.nodeValue, "assign") : m += cc11001100_hook("m", $(e).text(), "assign"), "INPUT" == e.tagName && (t = cc11001100_hook("t", new Object(), "assign"), n = cc11001100_hook("n", changeEachWays(m, changeQuesObj), "assign"), t._topic = cc11001100_hook("t._topic", n, "assign"), b += cc11001100_hook("b", n + "|", "assign"), t._orgtopic = cc11001100_hook("t._orgtopic", b, "assign"), t._choose = cc11001100_hook("t._choose", "", "assign"), t._answer = cc11001100_hook("t._answer", changeEachWays(e.value, changeAnswerObj), "assign"), qusInfArray.push(t), m = cc11001100_hook("m", "", "assign"));
            });
          }
          return;
        }
      }
      t._answer = cc11001100_hook("t._answer", changeEachWays(s, changeAnswerObj), "assign"), t._choose = cc11001100_hook("t._choose", o, "assign"), qusInfArray.push(t);
    }
  } catch (e) {}
}
function GetJpMatch() {
  checkTitleDescMatch(), changeKeyWords(), jpmarr = cc11001100_hook("jpmarr", matchJp(0), "assign");
  var e = cc11001100_hook("e", matchJp(1), "var-init");
  if (0 < jpmarr.length) for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", new Array(), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < jpmarr.length; t++) {
    var a = cc11001100_hook("a", !1, "var-init");
    for (jj = cc11001100_hook("jj", 0, "assign"); jj < r.length; jj++) if (r[jj] == jpmarr[t].PopulationsId) {
      a = cc11001100_hook("a", !0, "assign");
      break;
    }
    a || (jpMatchId = cc11001100_hook("jpMatchId", 0 < n ? (jpMatchId += cc11001100_hook("jpMatchId", ",", "assign")) + jpmarr[t].PopulationsId : jpmarr[t].PopulationsId, "assign"), r.push(jpMatchId), n++);
  }
  if (0 < e.length) for (n = cc11001100_hook("n", 0, "assign"), r = cc11001100_hook("r", new Array(), "assign"), t = cc11001100_hook("t", 0, "assign"); t < e.length; t++) {
    var o,
      a = cc11001100_hook("a", !1, "var-init");
    for (jj = cc11001100_hook("jj", 0, "assign"); jj < r.length; jj++) if (r[jj] == e[t].PopulationsId) {
      a = cc11001100_hook("a", !0, "assign");
      break;
    }
    a || ((o = cc11001100_hook("o", 0, "assign")) < e[t].TopicKeyWords.length && "" != e[t].TopicKeyWords[0] && (o += cc11001100_hook("o", 16, "assign")), 0 < e[t].DescKeyWords.length && "" != e[t].DescKeyWords[0] && (o += cc11001100_hook("o", 8, "assign")), 0 < e[t].QuesKeyWords.length && "" != e[t].QuesKeyWords[0] && (o += cc11001100_hook("o", 4, "assign")), 0 < e[t].ChooseKeyWords.length && "" != e[t].ChooseKeyWords[0] && (o += cc11001100_hook("o", 2, "assign")), 0 < e[t].AnswerKeyWords.length && "" != e[t].AnswerKeyWords[0] && (o += cc11001100_hook("o", 1, "assign")), a) || (jpWayText = cc11001100_hook("jpWayText", 0 < n ? (quesMatchId = cc11001100_hook("quesMatchId", (quesMatchId += cc11001100_hook("quesMatchId", ",", "assign")) + e[t].PopulationsId, "assign"), jpWayText + "," + o) : (quesMatchId = cc11001100_hook("quesMatchId", e[t].PopulationsId, "assign"), o), "assign"));
  }
}
function matchJp(e) {
  cc11001100_hook("e", e, "function-parameter");
  for (var n = cc11001100_hook("n", new Array(), "var-init"), r = cc11001100_hook("r", new Array(), "var-init"), t = cc11001100_hook("t", (keywordObj = cc11001100_hook("keywordObj", new Array(), "assign"), (window.awardkeyNoMatch || "").split("┋")), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) (d = cc11001100_hook("d", t[a].split("§"), "assign")).length < 8 || ((l = cc11001100_hook("l", new Object(), "assign")).id = cc11001100_hook("(l = new Object()).id", d[0], "assign"), l.PopulationsId = cc11001100_hook("l.PopulationsId", d[1], "assign"), l.TopicKeyWords = cc11001100_hook("l.TopicKeyWords", d[2].replace(/\，/g, ",").split(","), "assign"), l.DescKeyWords = cc11001100_hook("l.DescKeyWords", d[3].replace(/\，/g, ",").split(","), "assign"), l.QuesKeyWords = cc11001100_hook("l.QuesKeyWords", d[4].replace(/\，/g, ",").split(","), "assign"), l.ChooseKeyWords = cc11001100_hook("l.ChooseKeyWords", d[5].replace(/\，/g, ",").split(","), "assign"), l.AnswerKeyWords = cc11001100_hook("l.AnswerKeyWords", d[6].replace(/\，/g, ",").split(","), "assign"), l.Weight = cc11001100_hook("l.Weight", d[7], "assign"), keywordObj.push(l));
  for (a = cc11001100_hook("a", 0, "assign"); a < keywordObj.length; a++) {
    if (-1 < keywordObj[a].TopicKeyWords.indexOf("--设备大字体--") && 0 < window.wxnewfs - 139) ;else {
      if (0 < keywordObj[a].TopicKeyWords.length && "" != keywordObj[a].TopicKeyWords[0]) if (!matchkeyList(title, keywordObj[a].TopicKeyWords, title)) continue;
      if (0 < keywordObj[a].DescKeyWords.length && "" != keywordObj[a].DescKeyWords[0]) if (!matchkeyList(desc, keywordObj[a].DescKeyWords, desc)) continue;
      if (0 < keywordObj[a].QuesKeyWords.length && "" != keywordObj[a].QuesKeyWords[0] || 0 < keywordObj[a].ChooseKeyWords.length && "" != keywordObj[a].ChooseKeyWords[0] || 0 < keywordObj[a].AnswerKeyWords.length && "" != keywordObj[a].AnswerKeyWords[0]) {
        for (var o = cc11001100_hook("o", !1, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < qusInfArray.length; s++) {
          if (0 < keywordObj[a].QuesKeyWords.length && "" != keywordObj[a].QuesKeyWords[0]) if (!matchkeyList(qusInfArray[s]._topic, keywordObj[a].QuesKeyWords, qusInfArray[s]._orgtopic)) continue;
          if (0 < keywordObj[a].ChooseKeyWords.length && "" != keywordObj[a].ChooseKeyWords[0]) if (!matchkeyList(qusInfArray[s]._choose, keywordObj[a].ChooseKeyWords, qusInfArray[s]._choose)) continue;
          if (0 < keywordObj[a].AnswerKeyWords.length && "" != keywordObj[a].AnswerKeyWords[0]) {
            if (1 == e) continue;
            if (!matchkeyList(qusInfArray[s]._answer, keywordObj[a].AnswerKeyWords, qusInfArray[s]._answer)) continue;
          }
          if (o = cc11001100_hook("o", !0, "assign")) break;
        }
        if (!o) continue;
      }
    }
    r.push(keywordObj[a]);
  }
  for (var i = cc11001100_hook("i", 0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < r.length; c++) i = cc11001100_hook("i", parseFloat(r[c].Weight) > i ? parseFloat(r[c].Weight) : i, "assign");
  for (var h = cc11001100_hook("h", 0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < r.length; c++) i == r[c].Weight && r[c].PopulationsId != h && (h = cc11001100_hook("h", r[c].PopulationsId, "assign"), n.push(r[c]));
  if (1 == n.length) {
    for (var d, l, f = cc11001100_hook("f", n[0].PopulationsId, "var-init"), g = cc11001100_hook("g", (keywordObj = cc11001100_hook("keywordObj", new Array(), "assign"), (window.awardkeyMatch || "").split("┋")), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < g.length; a++) (d = cc11001100_hook("d", g[a].split("§"), "assign")).length < 9 || ((l = cc11001100_hook("l", new Object(), "assign")).id = cc11001100_hook("(l = new Object()).id", d[0], "assign"), l.PopulationsId = cc11001100_hook("l.PopulationsId", d[1], "assign"), l.TopicKeyWords = cc11001100_hook("l.TopicKeyWords", d[2].replace(/\，/g, ",").split(","), "assign"), l.DescKeyWords = cc11001100_hook("l.DescKeyWords", d[3].replace(/\，/g, ",").split(","), "assign"), l.QuesKeyWords = cc11001100_hook("l.QuesKeyWords", d[4].replace(/\，/g, ",").split(","), "assign"), l.ChooseKeyWords = cc11001100_hook("l.ChooseKeyWords", d[5].replace(/\，/g, ",").split(","), "assign"), l.AnswerKeyWords = cc11001100_hook("l.AnswerKeyWords", d[6].replace(/\，/g, ",").split(","), "assign"), l.Weight = cc11001100_hook("l.Weight", d[7], "assign"), l.parentIds = cc11001100_hook("l.parentIds", d[8].split(","), "assign"), keywordObj.push(l));
    for (r = cc11001100_hook("r", new Array(), "assign"), a = cc11001100_hook("a", 0, "assign"); a < keywordObj.length; a++) {
      var y = cc11001100_hook("y", !1, "var-init");
      if (0 < keywordObj[a].parentIds.length) for (s = cc11001100_hook("s", 0, "assign"); s < keywordObj[a].parentIds.length; s++) if (f == keywordObj[a].parentIds[s]) {
        y = cc11001100_hook("y", !0, "assign");
        break;
      }
      if (y) {
        if (0 < keywordObj[a].TopicKeyWords.length && "" != keywordObj[a].TopicKeyWords[0]) if (!matchkeyList(title, keywordObj[a].TopicKeyWords, title)) continue;
        if (0 < keywordObj[a].DescKeyWords.length && "" != keywordObj[a].DescKeyWords[0]) if (!matchkeyList(desc, keywordObj[a].DescKeyWords, desc)) continue;
        if (0 < keywordObj[a].QuesKeyWords.length && "" != keywordObj[a].QuesKeyWords[0] || 0 < keywordObj[a].ChooseKeyWords.length && "" != keywordObj[a].ChooseKeyWords[0] || 0 < keywordObj[a].AnswerKeyWords.length && "" != keywordObj[a].AnswerKeyWords[0]) {
          for (o = cc11001100_hook("o", !1, "assign"), s = cc11001100_hook("s", 0, "assign"); s < qusInfArray.length; s++) {
            if (0 < keywordObj[a].QuesKeyWords.length && "" != keywordObj[a].QuesKeyWords[0]) if (!matchkeyList(qusInfArray[s]._topic, keywordObj[a].QuesKeyWords, qusInfArray[s]._orgtopic)) continue;
            if (0 < keywordObj[a].ChooseKeyWords.length && "" != keywordObj[a].ChooseKeyWords[0]) if (!matchkeyList(qusInfArray[s]._choose, keywordObj[a].ChooseKeyWords, qusInfArray[s]._choose)) continue;
            if (0 < keywordObj[a].AnswerKeyWords.length && "" != keywordObj[a].AnswerKeyWords[0]) {
              if (1 == e) continue;
              if (!matchkeyList(qusInfArray[s]._answer, keywordObj[a].AnswerKeyWords, qusInfArray[s]._answer)) continue;
            }
            if (o = cc11001100_hook("o", !0, "assign")) break;
          }
          if (!o) continue;
        }
        r.push(keywordObj[a]);
      }
    }
    if (0 < r.length) {
      for (i = cc11001100_hook("i", 0, "assign"), n = cc11001100_hook("n", new Array(), "assign"), c = cc11001100_hook("c", 0, "assign"); c < r.length; c++) i = cc11001100_hook("i", parseFloat(r[c].Weight) > i ? parseFloat(r[c].Weight) : i, "assign");
      for (h = cc11001100_hook("h", 0, "assign"), c = cc11001100_hook("c", 0, "assign"); c < r.length; c++) i == r[c].Weight && r[c].PopulationsId != h && (h = cc11001100_hook("h", r[c].PopulationsId, "assign"), n.push(r[c]));
    }
  }
  return window.needImportWeight && 0 != i && i < parseFloat(window.needImportWeight) && (needImport = cc11001100_hook("needImport", 1, "assign")), n;
}
function matchkeyList(e, n, r) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  cc11001100_hook("r", r, "function-parameter");
  for (var t = cc11001100_hook("t", !1, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < n.length; a++) {
    var o = cc11001100_hook("o", n[a], "var-init");
    if (e && "#" == o.substr(0, 1)) {
      for (var s = cc11001100_hook("s", o.replace("#", ""), "var-init"), i = cc11001100_hook("i", e.split("|"), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < i.length; c++) if (i[c] == s) return t = cc11001100_hook("t", !0, "assign");
    } else if (r && -1 < o.indexOf("&&")) {
      for (var h = cc11001100_hook("h", o.split("&&"), "var-init"), d = cc11001100_hook("d", !0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < h.length; c++) {
        if (r.indexOf(h[c]) <= -1) {
          d = cc11001100_hook("d", !1, "assign");
          break;
        }
        r = cc11001100_hook("r", r.replace(h[c], ""), "assign");
      }
      if (d) return t = cc11001100_hook("t", !0, "assign");
    } else if (e && -1 < o.indexOf("&")) for (var h = cc11001100_hook("h", o.split("&"), "var-init"), l = cc11001100_hook("l", e.split("|"), "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < l.length; f++) {
      for (var g = cc11001100_hook("g", l[f], "var-init"), d = cc11001100_hook("d", !0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < h.length; c++) {
        if (g.indexOf(h[c]) <= -1) {
          d = cc11001100_hook("d", !1, "assign");
          break;
        }
        g = cc11001100_hook("g", g.replace(h[c], ""), "assign");
      }
      if (d) return t = cc11001100_hook("t", !0, "assign");
    } else if (e && o && -1 < e.indexOf(o)) return t = cc11001100_hook("t", !0, "assign");
  }
  return t;
}
function changeKeyWords() {
  0 < changeTitleObj.length && "" != title && (title = cc11001100_hook("title", changeWays(title, changeTitleObj), "assign")), 0 < changeDescObj.length && "" != desc && (desc = cc11001100_hook("desc", changeWays(desc, changeDescObj), "assign"));
  for (var e = cc11001100_hook("e", 0, "var-init"); e < qusInfArray.length; e++) 0 < changeQuesObj.length && "" != qusInfArray[e]._topic && (qusInfArray[e]._topic = cc11001100_hook("qusInfArray[e]._topic", changeWays(qusInfArray[e]._topic, changeQuesObj), "assign")), 0 < changeChooseObj.length && "" != qusInfArray[e]._choose && (qusInfArray[e]._choose = cc11001100_hook("qusInfArray[e]._choose", changeWays(qusInfArray[e]._choose, changeChooseObj), "assign")), 0 < changeAnswerObj.length && "" != qusInfArray[e]._answer && (qusInfArray[e]._answer = cc11001100_hook("qusInfArray[e]._answer", changeWays(qusInfArray[e]._answer, changeAnswerObj), "assign"));
}
function changeWays(e, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) for (var t = cc11001100_hook("t", n[r].wordList.split(","), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) {
    var o = cc11001100_hook("o", t[a], "var-init"),
      s = cc11001100_hook("s", !1, "var-init");
    if (e && -1 < o.indexOf("&&")) {
      for (var i = cc11001100_hook("i", o.split("&&"), "var-init"), c = cc11001100_hook("c", !0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < i.length; h++) if (e.indexOf(i[h]) <= -1) {
        c = cc11001100_hook("c", !1, "assign");
        break;
      }
      if (s = cc11001100_hook("s", c ? !0 : s, "assign")) for (h = cc11001100_hook("h", 0, "assign"); h < i.length; h++) e = cc11001100_hook("e", 0 == h ? e.replace(i[h], n[r].keyWord) : e.replace(i[h], ""), "assign");
    } else e && o && -1 < e.indexOf(o) && (s = cc11001100_hook("s", !0, "assign")) && (e = cc11001100_hook("e", e.replace(o, n[r].keyWord), "assign"));
  }
  return e;
}
function changeEachWays(e, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  if (!e) return "";
  for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) for (var t = cc11001100_hook("t", n[r].wordList.split(","), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) {
    var o = cc11001100_hook("o", t[a], "var-init"),
      s = cc11001100_hook("s", !1, "var-init");
    if (e && o.indexOf("&&") <= -1 && -1 < o.indexOf("&")) {
      for (var i = cc11001100_hook("i", o.split("&"), "var-init"), c = cc11001100_hook("c", !0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < i.length; h++) if (e && e.indexOf(i[h]) <= -1) {
        c = cc11001100_hook("c", !1, "assign");
        break;
      }
      if (s = cc11001100_hook("s", c ? !0 : s, "assign")) for (h = cc11001100_hook("h", 0, "assign"); h < i.length; h++) e = cc11001100_hook("e", 0 == h ? e.replace(i[h], n[r].keyWord) : e.replace(i[h], ""), "assign");
    }
  }
  return e;
}