var SkipToContent;
(function () {
  function n(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    sj_log === null || sj_log === void 0 ? void 0 : sj_log("CI.".concat(r), n, t !== null && t !== void 0 ? t : "1");
  }
  function u(t) {
    cc11001100_hook("t", t, "function-parameter");
    t && t.key === "Tab" && i && (n("FirstAppear"), i = cc11001100_hook("i", !1, "assign"));
  }
  function f() {
    var r,
      u,
      f,
      e,
      o,
      s,
      h,
      c,
      l,
      a,
      v,
      y,
      n = cc11001100_hook("n", (u = cc11001100_hook("u", (r = cc11001100_hook("r", document.querySelector("cib-serp"), "assign")) === null || r === void 0 ? void 0 : r.shadowRoot, "assign")) === null || u === void 0 ? void 0 : u.querySelector("cib-conversation"), "var-init"),
      p = cc11001100_hook("p", (n === null || n === void 0 ? void 0 : n.getAttribute("chat-type")) === "consumer", "var-init"),
      w = cc11001100_hook("w", (o = cc11001100_hook("o", (e = cc11001100_hook("e", (f = cc11001100_hook("f", n === null || n === void 0 ? void 0 : n.shadowRoot, "assign")) === null || f === void 0 ? void 0 : f.querySelector("cib-welcome-container"), "assign")) === null || e === void 0 ? void 0 : e.shadowRoot, "assign")) === null || o === void 0 ? void 0 : o.querySelector(".legal-items a"), "var-init"),
      t,
      i;
    n && w && !p ? t = cc11001100_hook("t", w, "assign") : n && p && (i = cc11001100_hook("i", document.querySelector("cib-serp .b_ziCont"), "assign"), t = cc11001100_hook("t", i && i.style.display !== "none" ? i.querySelector(".slide[tabindex='0']") : (y = cc11001100_hook("y", (v = cc11001100_hook("v", (a = cc11001100_hook("a", (l = cc11001100_hook("l", (c = cc11001100_hook("c", (h = cc11001100_hook("h", (s = cc11001100_hook("s", n.shadowRoot, "assign")) === null || s === void 0 ? void 0 : s.querySelector("cib-chat-turn"), "assign")) === null || h === void 0 ? void 0 : h.shadowRoot, "assign")) === null || c === void 0 ? void 0 : c.querySelector("cib-message-group"), "assign")) === null || l === void 0 ? void 0 : l.shadowRoot, "assign")) === null || a === void 0 ? void 0 : a.querySelector("cib-message"), "assign")) === null || v === void 0 ? void 0 : v.shadowRoot, "assign")) === null || y === void 0 ? void 0 : y.querySelector("cib-shared .text-message-content"), "assign"));
    t && t.offsetParent && t.focus();
  }
  var r = cc11001100_hook("r", "SkipToContent", "var-init"),
    t = cc11001100_hook("t", document.getElementById("b_skip_to_content"), "var-init"),
    i;
  t && (t.onfocus = cc11001100_hook("t.onfocus", function () {
    n("Appear");
  }, "assign"), t.onblur = cc11001100_hook("t.onblur", function () {
    n("Disappear");
  }, "assign"), t.onclick = cc11001100_hook("t.onclick", function (t) {
    n("Click");
    t.preventDefault();
    var i = cc11001100_hook("i", document.body.classList.contains("b_sydConvMode"), "var-init");
    if (i) {
      f();
      return;
    }
    AccessibilityHelpers.focusFirstFocusableElementWithin(document.querySelector("#b_content"));
  }, "assign"));
  i = cc11001100_hook("i", !0, "assign");
  sj_be(_d.body, "keydown", u);
})(SkipToContent || (SkipToContent = cc11001100_hook("SkipToContent", {}, "assign")));