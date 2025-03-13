!function () {
  "use strict";

  var a = cc11001100_hook("a", location, "var-init"),
    o = cc11001100_hook("o", document, "var-init"),
    c = function (c, m, t, i) {
      (void 0 === m && (m = cc11001100_hook("m", 1, "assign")), void 0 === t && (t = cc11001100_hook("t", .1, "assign")), void 0 === i && (i = cc11001100_hook("i", "baxia-fast", "assign")), 0 >= t || Math.random() < t) && function (a, o) {
        var c = cc11001100_hook("c", [], "var-init");
        for (var m in a) c.push(m + "=" + encodeURIComponent(a[m]));
        new Image().src = cc11001100_hook("new Image().src", o + c.join("&"), "assign");
      }({
        code: cc11001100_hook("code", m, "object-key-init"),
        msg: cc11001100_hook("msg", c + "", "object-key-init"),
        pid: cc11001100_hook("pid", i, "object-key-init"),
        page: cc11001100_hook("page", a.href.split(/[#?]/)[0], "object-key-init"),
        query: cc11001100_hook("query", a.search.substr(1), "object-key-init"),
        hash: cc11001100_hook("hash", a.hash, "object-key-init"),
        referrer: cc11001100_hook("referrer", o.referrer, "object-key-init"),
        title: cc11001100_hook("title", o.title, "object-key-init"),
        ua: cc11001100_hook("ua", navigator.userAgent, "object-key-init")
      }, "//gm.mmstat.com/fsp.1.1?");
    };
  var m = cc11001100_hook("m", ["alires", "pha_pageheader", "pha_header", "/punish", "fourier.taobao.com/assist", "fourier.alibaba.com/assist", "market.m.taobao.com/app/tbhome/common/index.html", ".sm.cn", ".sm-tc.cn", ".alipay.com", ".aliyun.com", "error.taobao.com", "sialiagames", "vntth", "qookkagames", "mobijoygames"], "var-init");
  var t = cc11001100_hook("t", document, "var-init"),
    i = cc11001100_hook("i", window, "var-init"),
    e = cc11001100_hook("e", "https://bdc.alibabachengdun.com/wcfg.json", "var-init");
  location.hostname && location.hostname.indexOf("taobao.com") > -1 ? e = cc11001100_hook("e", "https://umdc.taobao.com/wcfg.json", "assign") : location.hostname && location.hostname.indexOf("tmall.com") > -1 && (e = cc11001100_hook("e", "https://umdc.tmall.com/wcfg.json", "assign"));
  var n = function (a) {
      for (var o = cc11001100_hook("o", t.cookie.split(";"), "var-init"), c = cc11001100_hook("c", 0, "var-init"); o.length > c; c++) {
        var m = cc11001100_hook("m", o[c].split("="), "var-init");
        if (a.trim() === m[0].trim()) try {
          return decodeURIComponent(m[1]);
        } catch (i) {
          return m[1];
        }
      }
      return null;
    },
    l = function (a) {
      "fireye" === (a = cc11001100_hook("a", a || {}, "assign")).name && i.AWSC && i.AWSC.configFYEx ? i.AWSC.configFYEx(function (o) {
        o && o.fyObj && o.fyObj.UBInit && o.fyObj.UBInit(a.params || {});
      }) : a.url && function (a, o, m, i) {
        if (!a) return o();
        var e = cc11001100_hook("e", t.getElementsByTagName("script")[0], "var-init"),
          n = cc11001100_hook("n", t.createElement("script"), "var-init");
        if (n.async = cc11001100_hook("n.async", !0, "assign"), n.src = cc11001100_hook("n.src", a, "assign"), i && (n.bxOriginUrl = cc11001100_hook("n.bxOriginUrl", i, "assign")), a.indexOf("alicdn") > -1 && (n.crossOrigin = cc11001100_hook("n.crossOrigin", !0, "assign")), n.onerror = cc11001100_hook("n.onerror", function (o) {
          c("function:loadJS web_behavior_sample error. msg:" + a + "load error。props：" + JSON.stringify(m)), n.onerror = cc11001100_hook("n.onerror", null, "assign");
        }, "assign"), o) {
          var l = cc11001100_hook("l", !1, "var-init");
          n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
            l || n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), "assign"), l = cc11001100_hook("l", !0, "assign"), o());
          }, "assign"), "assign");
        }
        e.parentNode.insertBefore(n, e);
      }(a.url, function () {
        c("function:web_behavior_sample request success", 12, .01, "spl");
      });
    },
    r = cc11001100_hook("r", document, "var-init"),
    s = cc11001100_hook("s", 1, "var-init"),
    b = function (a, o, m) {
      if (!a) return o();
      var t = cc11001100_hook("t", r.getElementsByTagName("script")[0], "var-init"),
        i = cc11001100_hook("i", r.createElement("script"), "var-init");
      if (i.async = cc11001100_hook("i.async", !0, "assign"), i.src = cc11001100_hook("i.src", a, "assign"), (a.indexOf("alicdn") > -1 || a.indexOf("lazcdn") > -1 || a.indexOf("lzd-g.slatic.net") > -1) && (i.crossOrigin = cc11001100_hook("i.crossOrigin", !0, "assign")), i.onerror = cc11001100_hook("i.onerror", function (t) {
        5 > s ? (s++, b(a, o, m)) : (i.onerror = cc11001100_hook("i.onerror", null, "assign"), c("function:loadJS. msg:" + a + "load error。props：" + JSON.stringify(m)));
      }, "assign"), o) {
        var e = cc11001100_hook("e", !1, "var-init");
        i.onload = cc11001100_hook("i.onload", i.onreadystatechange = cc11001100_hook("i.onreadystatechange", function () {
          e || i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = cc11001100_hook("i.onload", i.onreadystatechange = cc11001100_hook("i.onreadystatechange", null, "assign"), "assign"), e = cc11001100_hook("e", !0, "assign"), o());
        }, "assign"), "assign");
      }
      t.parentNode.insertBefore(i, t);
    },
    u = function (a, o) {
      return !!a && a.indexOf(o) > -1;
    },
    d = function () {
      if (document.currentScript) return document.currentScript;
      var a = cc11001100_hook("a", null, "var-init"),
        o = cc11001100_hook("o", document.getElementsByTagName("script"), "var-init"),
        c = cc11001100_hook("c", null, "var-init");
      try {
        throw Error();
      } catch (i) {
        var m,
          t = cc11001100_hook("t", (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack) || [!1])[1], "var-init");
        for (m in o) if ((c = cc11001100_hook("c", o[m], "assign")).src == t || "interactive" == c.readyState) return a = cc11001100_hook("a", o[m], "assign"), o[m];
      }
      return a;
    },
    p = cc11001100_hook("p", window, "var-init"),
    h = function (a, o) {
      var c = cc11001100_hook("c", p.__baxia__ || {}, "var-init");
      return a ? c[a] || o : c;
    },
    w = function (a, o) {
      p.__baxia__ = cc11001100_hook("p.__baxia__", p.__baxia__ || {}, "assign"), p.__baxia__[a] = cc11001100_hook("p.__baxia__[a]", o, "assign");
    },
    g = cc11001100_hook("g", {
      "post.alibaba.com": cc11001100_hook("post.alibaba.com", ["/product/publish.htm"], "object-key-init")
    }, "var-init");
  function f(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a) {
      var o = cc11001100_hook("o", a.paramsType, "var-init");
      !1 !== a.enableFireye && (!o || o.indexOf("uab") > -1 || o.indexOf("umid") > -1 || o.indexOf("pip") > -1) && (a.enableFireye = cc11001100_hook("a.enableFireye", !0, "assign"));
    }
    a && a.enableFireye && a.checkApiPath && function () {
      if (!h("loadFireye")) {
        var a = cc11001100_hook("a", d(), "var-init"),
          o = cc11001100_hook("o", a && a.src ? a.src.match(/https\:\/\/([^&]+).alicdn/) : [, "g"], "var-init"),
          m = cc11001100_hook("m", o && o[1], "var-init"),
          t = cc11001100_hook("t", "", "var-init");
        -1 === ["laz-g-cdn", "aeis", "assets"].indexOf(m) && (m = cc11001100_hook("m", "g", "assign")), t = cc11001100_hook("t", "https://" + m + ".alicdn.com/", "assign"), "assets" === m && (t += cc11001100_hook("t", "g/", "assign")), w("loadFireye", !0), b(t + "AWSC/fireyejs/1.231.11/fireyejs.js", function () {
          c("msg: load awsc success 1.231.11", "loadFireye", .01);
        }, null);
      }
    }();
  }
  var y = cc11001100_hook("y", ["agi.taobao.com", "h5.aligenie.com", "alicrm.alibaba.com", "c2mbc.service.xixikf.cn", "cart.lazada.com.ph", "cheng.xin", "cnpassport.youku.com", "databank.tmall.com", "detail.i56.taobao.com", "detail.taobao.com", "detail.tmall.hk", "insight.tmall.com", "insights.alibaba.com", "item.manager.tmall.com", "jibu.taobao.com", "ltao.seller.taobao.com", "m.amap.com", "m.tb.cn", "mcn.guanghe.taobao.com", "mi.aliyun.com", "mltsm.tmall.com", "mos.miaostreet.com", "new.m.taobao.com", "orderwebs.yzcsoft.com", "play.tudou.com", "pre-www.aliyun.com", "qianniu.xiangqing.taobao.com", "qianwen-mobile.aliyun.com", "rate.taobao.com", "refund.m.taobao.com", "s.click.1688.com", "search.1688.com", "sf-item.taobao.com", "shop35699486.taobao.com", "sme.aliyun.com", "subway.simba.taobao.com", "susong-item.taobao.com", "tadget.taobao.com", "tao.1688.com", "we.taobao.com", "www.aliwork.com", "www.fliggy.com", "www.google.com", "www.jiaoyimao.com", "www.lazada.co.id", "www.youku.com", "x56.1688.com", "xinxiangyin.m.tmall.com", "xldesk.cainiao.com", "yeyingweishi.m.tmall.com", "zc-item.taobao.com", "zc-paimai.taobao.com", "acs.m.taobao.com", "aliance.1688.com", "b.cainiao.com", "detailskip.taobao.com", "dianxiaomi.taobao.com", "en.jiagle.com", "erp.yslcloud.com", "go.1688.com", "guide-acs.m.taobao.com", "h5api.m.1688.com", "h5api.m.taobao.com", "h5api.m.tmall.com", "healthcenter.taobao.com", "holmes.taobao.com", "hot.taobao.com", "item.publish.taobao.com", "kb-render.chuangyi.taobao.com", "kf.topchitu.com", "laputa.1688.com", "login.1688.com", "login.dingtalk.com", "m.baidu.com", "m.biubiu001.com", "market.aliyun.com", "one.alimama.com", "onetalk.alibaba.com", "page.sto.cn", "pages.lazada.co.th", "pages.lazada.com.ph", "pc.pay.youku.com", "piao.bjry.com", "render.alipay.com", "scenario-front.taobao.com", "search.damai.cn", "sellercenter.lazada.com.my", "sellercenter.lazada.sg", "share.biubiu001.com", "shop513049706.m.taobao.com", "shopsearch.taobao.com", "strategy.tmall.com", "stream-upload.taobao.com", "t.youku.com", "tb.ele.me", "tgc.tmall.com", "trade2.m.1688.com", "travelsearch.fliggy.com", "web.56xiniao.com", "www.alimama.com", "www.dataoke.com", "www.dingtalk.com", "www.en-sjgle.com", "www.iqiyi.com", "www.jiagle.com", "wwww.taobao.com", "xiangqing.wangpu.taobao.com", "acs.m.tmall.com", "ad.alimama.com", "ai.taobao.com", "bigsale.tmall.com", "boce.aliyun.com", "chuangyi.taobao.com", "creator.guanghe.taobao.com", "dashi.aliyun.com", "desk.cainiao.com", "developer.amap.com", "einvoice.taobao.com", "fly.cainiao.com", "fuwu.alimama.com", "gushi-gifts.en.alibaba.com", "h5api.m.goofish.com", "hzmy.alibaba.com", "ipassport.damai.cn", "item.manager.taobao.com", "item.upload.tmall.com", "kns.cnki.net", "lbs.amap.com", "list.tmall.com", "loginmyseller.taobao.com", "m.1688.com", "m.cphi.cn", "m.intl.taobao.com", "main.m.taobao.com", "mdskip.taobao.com", "member1.taobao.com", "pages.ltao.com", "profile.alibaba.com", "pub.alimama.com", "rd6.zhaopin.com", "saas.flight.fliggy.com", "sell.publish.tmall.com", "sell.taobao.com", "shop.m.taobao.com", "shop507234291.taobao.com", "shop588437233.taobao.com", "sourcing.alibaba.com", "stream-xiangqing.taobao.com", "stream.xiangqing.taobao.com", "studio.iot.aliyun.com", "tm.aliyun.com", "tradearchive.taobao.com", "translate.alibaba.com", "tuopaijl.m.tmall.com", "wuliu2.taobao.com", "www.cphi.cn", "www.goofish.com", "www.lazada.com.my", "www.taoguba.com.cn", "www.yicai.com", "yds.taobao.com", "ythxjzyy.maitix.com", "account-lingxi.aligames.com", "detail.tmall.com", "account.alibabacloud.com", "buyertrade.taobao.com", "fwzl-tickets.sto.cn", "refund2.taobao.com", "trade.taobao.com", "wuliu.taobao.com", "tbskip.taobao.com", "www.1688.com", "cart.taobao.com", "login.taobao.com", "m.jiaoyimao.com", "havanalogin.taobao.com", "hotel.fliggy.com", "m.p4psearch.1688.com", "myseller.taobao.com", "refund2.tmall.com", "upload.taobao.com", "www.baidu.com", "csplatform-ccs.aliyun.com", "item.upload.taobao.com", "router.publish.taobao.com", "shoucang.taobao.com", "v.youku.com", "account.aliyun.com", "2.taobao.com", "tongyi.aliyun.com", ".taobao.com", "1bp.taobao.com", "acs-m.lazada.co.id", "acs-m.lazada.co.th", "acs-m.lazada.com.ph", "acs.m.goofish.com", "adidas.tmall.com", "ai.alimebot.taobao.com", "ai.m.taobao.com", "ai.world.taobao.com", "air.tb.ele.me", "alihealth.service.xixikf.cn", "alipm.sale.tmall.com", "alisite-mobile.alibaba.com", "alsc-buy2.ele.me", "amap.com", "anta.tmall.com", "api.gj.dangxun.com", "arabic.alibaba.com", "auth.wms.cainiao.com", "baike.taobao.com", "baxia.dingtalk.com", "baxia.f09qgja1.com", "biaoju.cainiao.com", "biz.alibaba.com", "bosideng.tmall.com", "branding.alimama.com", "branding.taobao.com", "buy.m.tmall.com", "c.lazada.co.th", "c.lazada.com.ph", "cart.1688.com", "cart.lazada.co.th", "cashier.alibaba.com", "chaoshi.detail.tmall.com", "chinese.alibaba.com", "cn.bing.com", "common-buy.aliyun.com", "crm-martini.alibaba-inc.com", "crm.alibaba.com", "crm.aliyun-inc.com", "data.alibaba.com", "dayin.cainiao.com", "dc.console.aliyun.com", "decathlon.tmall.com", "detail.1688.com", "detail.damai.cn", "devata.aliyun-inc.com", "dispute.1688.com", "ditu.amap.com", "ditu.gaode.com", "dljjy.maitix.com", "dnss.cainiao.com", "domain.aliyun.com", "e.tb.cn", "ecrm.taobao.com", "edu.aliyun.com", "error.alibaba.com", "everyhelp.taobao.com", "ff.edongwang.com", "fila.tmall.com", "fn-tanx-src.1688.com", "french.alibaba.com", "fwzl-ticketsfront.sto.cn", "g-acs.m.goofish.com", "gaode.com", "german.alibaba.com", "gongxiao.tmall.com", "guanjia.1688.com", "h5.ele.me", "hao.360.com", "huaweistore.tmall.com", "hz-productposting.alibaba.com", "i.alibaba.com", "i.taobao.com", "inventorymanage.taobao.com", "inventorymanage.tmall.com", "item.taobao.com", "japanese.alibaba.com", "jscpa.maitix.com", "korean.alibaba.com", "ku.m.taobao.com", "l.facebook.com", "live.taobao.com", "login.alibaba.com", "login.mashangfangxin.com", "lshmy.tmall.com", "luban.taobao.com", "m.damai.cn", "m.facebook.com", "m.sm.cn", "m.sogou.com", "m.wandoujia.com", "mail-passport.aliyun.com", "maizuo.maitix.com", "melody.shop.ele.me", "member.jiaoyimao.com", "member1.tmall.com", "message.alibaba.com", "meta.m.taobao.com", "mind.1688.com", "mini.shyhhema.com", "miniapp-metadata.taobao.com", "mo.m.taobao.com", "mobiledesign.1688.com", "mos.m.taobao.com", "mp.youku.com", "mtop.damai.cn", "my.lazada.co.th", "nextone-fbt.alibaba-inc.com", "nextoneqn.m.taobao.com", "nike.tmall.com", "ntp.msn.cn", "offer.1688.com", "offer.alibaba.com", "p4p.1688.com", "p4psearch.1688.com", "page.sm.cn", "paimai.taobao.com", "passport.1688.com", "passport.alibabacloud.com", "passport.alipan.com", "passport.aliyun.com", "passport.cainiao.com", "passport.goofish.com", "passport.taobao.com", "peiqi.p.hemajs.com", "pinpai.1688.com", "pm123.taobao.com", "portal-h5.hemayx.cn", "portuguese.alibaba.com", "ppxk.tmall.com", "purchase.1688.com", "qianji.alibaba-inc.com", "qinquan.taobao.com", "qn.taobao.com", "qr.1688.com", "quark.sm.cn", "quick.taobao.com", "re.1688.com", "reg.taobao.com", "rfqposting.alibaba.com", "rights.taobao.com", "rongzi.1688.com", "rsc-api.ele.me", "rulechannel.alibaba.com", "russian.alibaba.com", "s.1688.com", "s.lazada.co.th", "s.lazada.com.ph", "s.taobao.com", "sale.1688.com", "sale.alibaba.com", "sale.taobao.com", "scan.quark.cn", "scp.tmall.com", "scportal.taobao.com", "sf.taobao.com", "shell.mkt.taobao.com", "shop239494884.taobao.com", "shop465965982.taobao.com", "show.1688.com", "show.re.taobao.com", "signin.aliyun.com", "sijipiao.fliggy.com", "site.sto.cn", "sjipiao.fliggy.com", "so.m.sm.cn", "spanish.alibaba.com", "superseckill.sale.tmall.com", "sycm.taobao.com", "t.taopiaopiao.com", "taobao.service.xixikf.cn", "taocaicai.m.taobao.com", "taolive.taobao.com", "tbzb.taobao.com", "tdi.tmall.com", "tmc.1688.com", "tongyi-passport.aliyun.com", "trade-acs.m.taobao.com", "trade.1688.com", "tu.taobao.com", "tui.taobao.com", "turkish.alibaba.com", "txd.m.taobao.com", "uf.alibaba.com", "ufuwu.1688.com", "ulifep.taobao.com", "unidesk.taobao.com", "uniqlo.tmall.com", "vt.quark.cn", "waimai-guide.ele.me", "waybill.wuliu.taobao.com", "wbh5.p.hemajs.com", "webview", "wia.amap.com", "widget.1688.com", "wm.m.sm.cn", "work.1688.com", "work.alibaba-inc.com", "world.taobao.com", "wp.m.1688.com", "wuliu.1688.com", "www.360.com", "www.91taohuo.com", "www.aliprice.com", "www.amap.com", "www.b2bcaigou.com", "www.daraz.com.bd", "www.daraz.com.np", "www.daraz.lk", "www.daraz.pk", "www.dianxiaomi.com", "www.hhczy.com", "www.iconfont.cn", "www.kdocs.cn", "www.lazada.co.th", "www.so.com", "www.sogou.com", "www2.alibaba.com", "xiaoer.alibaba-inc.com", "xiaomi.tmall.com", "youku.com", "youtube.com", "yuanshimuyu.tmall.com", "yz.m.sm.cn", "z.cainiao.com", "zhaoshang.tmall.com"], "var-init");
  var v = cc11001100_hook("v", location.href || "", "var-init"),
    x = cc11001100_hook("x", location.host || "", "var-init"),
    k = cc11001100_hook("k", !1, "var-init");
  v.indexOf("loadBaxiaNewFun") > -1 && (k = cc11001100_hook("k", !0, "assign"));
  try {
    !function () {
      var a = cc11001100_hook("a", location.host || "", "var-init");
      try {
        0 > y.indexOf(a) && b("https://g.alicdn.com/secdev/sufei_data/3.9.14/index.js", null, null);
      } catch (o) {
        c("sufei load error:  " + o.message || o);
      }
    }(), k && b("https://g.alicdn.com/AWSC/et/1.82.8/et_f.js", function () {
      c("msg: load et success 1.82.8", "loadEt", .01);
    }, null), k || !window.AWSC && function () {
      var a = cc11001100_hook("a", location.host || location.hostname, "var-init"),
        o = cc11001100_hook("o", g[a], "var-init");
      o && o.indexOf(location.pathname) > -1 || b("https://g.alicdn.com/AWSC/AWSC/awsc.js", function () {
        c("msg: load awsc success", "loadAwsc", .01);
      }, null);
    }(), function () {
      var a,
        o,
        t,
        i = cc11001100_hook("i", (Math.random() + "").replace("0.", ""), "var-init");
      try {
        var e = cc11001100_hook("e", document.cookie.match(/cna=([^;]+)/), "var-init"),
          n = cc11001100_hook("n", location.href || "", "var-init"),
          l = cc11001100_hook("l", "https://fourier.taobao.com/rp?ext=51&data=jm_" + (e && e[1]) + "&random=" + i + "&href=" + encodeURIComponent(n) + "&protocol=" + location.protocol + "&callback=jsonpCallback", "var-init");
        (function () {
          for (var a = cc11001100_hook("a", location.href || "", "var-init"), o = cc11001100_hook("o", 0, "var-init"); m.length > o; o++) if (a.indexOf(m[o]) > -1) return !0;
          return !1;
        })() || document.cookie.indexOf("xlly") > -1 || (a = cc11001100_hook("a", l, "assign"), o = cc11001100_hook("o", document.createElement("script"), "assign"), t = cc11001100_hook("t", document.getElementsByTagName("head")[0], "assign"), o.type = cc11001100_hook("o.type", "text/javascript", "assign"), o.charset = cc11001100_hook("o.charset", "UTF-8", "assign"), o.src = cc11001100_hook("o.src", a, "assign"), t.appendChild(o));
      } catch (r) {
        c(r.message + "random=" + i, 12, 1, "spl");
      }
    }();
    try {
      !function () {
        if (function (a) {
          return {
            "www.taobao.com": cc11001100_hook("www.taobao.com", !0, "object-key-init"),
            "www.tmall.com": cc11001100_hook("www.tmall.com", !0, "object-key-init"),
            "s.taobao.com": cc11001100_hook("s.taobao.com", !0, "object-key-init"),
            "detail.tmall.com": cc11001100_hook("detail.tmall.com", !0, "object-key-init"),
            "item.taobao.com": cc11001100_hook("item.taobao.com", !0, "object-key-init"),
            "chaoshi.tmall.com": cc11001100_hook("chaoshi.tmall.com", !0, "object-key-init")
          }[a] || /^shop[a-zA-Z0-9-]*\.taobao\.com$/.test(a);
        }(window.location.host)) {
          var a = cc11001100_hook("a", window.etSign && window.etSign(), "var-init");
          a || (a = cc11001100_hook("a", n("tfstk"), "assign"));
          var o = cc11001100_hook("o", n("cookie2"), "var-init"),
            m = cc11001100_hook("m", n("unb"), "var-init"),
            t = cc11001100_hook("t", n("sgcookie"), "var-init"),
            r = cc11001100_hook("r", n("cna"), "var-init"),
            s = cc11001100_hook("s", window.location.href, "var-init");
          s && s.length > 512 && (s = cc11001100_hook("s", s.substring(0, 512), "assign"));
          try {
            var b = cc11001100_hook("b", +new Date(), "var-init"),
              u = cc11001100_hook("u", localStorage.getItem("web_behavior_time"), "var-init"),
              d = cc11001100_hook("d", localStorage.getItem("web_behavior_jsArr_conf"), "var-init");
            if (u && +u >= b) {
              if (!d) return;
              return d && "string" == typeof d && (d = cc11001100_hook("d", JSON.parse(d), "assign")), void (d && d.length && setTimeout(function () {
                l(d[0]);
              }, 300));
            }
          } catch (h) {
            c("function:web_behavior_sample local init error", 12, 1, "spl");
          }
          var p = cc11001100_hook("p", {
            ver: cc11001100_hook("ver", 2, "object-key-init")
          }, "var-init");
          a && (p.bx_et = cc11001100_hook("p.bx_et", a, "assign")), o && (p.cookie2 = cc11001100_hook("p.cookie2", o, "assign")), t && (p.sgcookie = cc11001100_hook("p.sgcookie", t, "assign")), m && (p.unb = cc11001100_hook("p.unb", m, "assign")), r && (p.cna = cc11001100_hook("p.cna", r, "assign")), s && (p.href = cc11001100_hook("p.href", s, "assign")), function (a) {
            a = cc11001100_hook("a", a || {}, "assign");
            var o = cc11001100_hook("o", [], "var-init");
            for (var c in a.data) o.push(encodeURIComponent(c) + "=" + encodeURIComponent(a.data[c]));
            o.push(("v=" + Math.random()).replace(".", ""));
            var m = cc11001100_hook("m", o.join("&"), "var-init"),
              t = cc11001100_hook("t", new XMLHttpRequest(), "var-init");
            t.onreadystatechange = cc11001100_hook("t.onreadystatechange", function () {
              if (4 === t.readyState) {
                var o = cc11001100_hook("o", t.status, "var-init");
                o >= 200 && 300 > o ? a.success && a.success(t.responseText, t.responseXML) : a.error && a.error(o);
              }
            }, "assign"), t.withCredentials = cc11001100_hook("t.withCredentials", !0, "assign"), "GET" === a.type ? (t.open("GET", a.url + "?" + m, !0), t.send(null)) : "POST" === a.type && (t.open("POST", a.url, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(m));
          }({
            url: cc11001100_hook("url", e, "object-key-init"),
            type: cc11001100_hook("type", "GET", "object-key-init"),
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            data: cc11001100_hook("data", p, "object-key-init"),
            success: function (a) {
              try {
                if (a && "string" == typeof a && (a = cc11001100_hook("a", JSON.parse(a), "assign")), a && a.succ) {
                  var o = cc11001100_hook("o", a.dt, "var-init"),
                    m = cc11001100_hook("m", o.cacheAge, "var-init"),
                    t = cc11001100_hook("t", o.jsList, "var-init");
                  m && i.localStorage && (m = cc11001100_hook("m", +m, "assign"), localStorage.setItem("web_behavior_time", +new Date() + 1e3 * m), t && t instanceof Array && (localStorage.setItem("web_behavior_jsArr_conf", JSON.stringify(t)), l(t[0])));
                }
              } catch (h) {
                c("function:web_behavior_sample request error", 12, 1, "spl");
              }
            },
            error: function (a) {
              c("function:web_behavior_sample request net error", 12, 1, "spl");
            }
          });
        }
      }();
    } catch (E) {
      c("behaviorSample init error" + E.message, 12, 1, "spl");
    }
    try {
      if (k) var _ = cc11001100_hook("_", setInterval(function () {
          var a = cc11001100_hook("a", h("options"), "var-init");
          a && (clearInterval(_), f(a));
        }, 30), "var-init"),
        j = cc11001100_hook("j", setTimeout(function () {
          clearTimeout(j), clearInterval(_);
        }, 5e3), "var-init");
    } catch (E) {
      c("init fireye error" + E.message, 12, 1, "spl");
    }
    var z = cc11001100_hook("z", !1, "var-init");
    if (v.indexOf("loadbaxiajs") > -1 || document.cookie.indexOf("loadbaxiajs") > -1) {
      var O = cc11001100_hook("O", null, "var-init");
      if (v.indexOf("_set_bx_v_") > -1) {
        var S = cc11001100_hook("S", v.match(/_set_bx_v_=([^&]+)/), "var-init");
        O = cc11001100_hook("O", encodeURIComponent(S && S[1]), "assign");
      }
      A(1, O), z = cc11001100_hook("z", !0, "assign");
    }
    var q = cc11001100_hook("q", [], "var-init");
    q.push("crm.simba.taobao.com"), q.push("7.alibaba-inc.com"), q.push("chaoshi.service.xixikf.cn"), q.push("taobao.service.xixikf.cn"), q.push("tongyi.aliyun.com/chat");
    for (var C = cc11001100_hook("C", 0, "var-init"); q.length > C; C++) u(v, q[C]) && (z = cc11001100_hook("z", !0, "assign"));
    if (!self.baxiaCommon && !z) {
      c("init", "aplus_js_load", .01);
      var I = cc11001100_hook("I", [], "var-init");
      I.push({
        path: cc11001100_hook("path", ".", "object-key-init"),
        ratio: cc11001100_hook("ratio", 1, "object-key-init"),
        jsv: cc11001100_hook("jsv", "2.5.28", "object-key-init")
      });
      for (C = cc11001100_hook("C", 0, "assign"); I.length > C; C++) u(v, I[C].path) && A(I[C].ratio, I[C].jsv);
    }
  } catch (E) {
    c("err" + E.message, "aplus_js_baxia_err", 1);
  }
  var T = cc11001100_hook("T", !1, "var-init");
  function A(a, o) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    if (void 0 === o && (o = cc11001100_hook("o", "2.5.28", "assign")), a >= Math.random() && !T) {
      k && (o = cc11001100_hook("o", "2.5.29", "assign")), T = cc11001100_hook("T", !0, "assign"), c("baxiajs", "aplus_js_load", .01);
      var m = cc11001100_hook("m", "//g.alicdn.com", "var-init"),
        t = cc11001100_hook("t", self.goldlog, "var-init");
      if (t && t.getCdnPath && (m = cc11001100_hook("m", t.getCdnPath(), "assign")), x && x.indexOf("www.miravia.") > -1 && (m = cc11001100_hook("m", "//g.mdvcdn.com", "assign")), v.indexOf("_set_bx_v_") > -1) {
        var i = cc11001100_hook("i", v.match(/_set_bx_v_=([^&]+)/), "var-init");
        o = cc11001100_hook("o", encodeURIComponent(i && i[1]), "assign");
      }
      c("/sd/baxia/" + o + "/baxiaCommon.js", 13, .01), m = cc11001100_hook("m", m + "/sd/baxia/" + o + "/baxiaCommon.js", "assign"), v.indexOf("_set_bx_v_=debug") > -1 && (m = cc11001100_hook("m", "http://localhost:8064/build/baxiaCommon.js", "assign")), b(m, null, null);
    }
  }
}();