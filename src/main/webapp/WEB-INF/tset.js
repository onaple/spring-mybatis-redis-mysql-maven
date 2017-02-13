/**
 * Created by onaple on 2017/2/6.
 */
o.dataset.seo = ""
):
(a.setAttribute("data-seo", i.getAttribute("data-seo")), o.setAttribute("data-seo", ""));
var s = i.dataset ? i.dataset.tid : i.getAttribute("data-tid");
$.ajax(addressUrlConfig.themeCity + "?feature=" + s, {
    cache: !0, onsuccess: function (t) {
        $("#themeCity").html(e(t.responseText)), $.mod.load("tab", "1.2", function () {
            n.find("ol").regMod("tab", "1.2", {
                options: {index: 0, tab: "span", panel: "#themeCity>div", trigger: "click"},
                style: {tab: ["hot_selected", ""], panel: {display: ["block", "none"]}}
            })
        })
    }
})
}}},
a = ($("#SelectFeature").regMod("dropBox", "1.0", i), $("#SelectCity")), n = $("#themeCity");
n.html(e(t)).offsetA(a, 7).css("display", "none").css("visibility", "").bind("click", function (t) {
    t = window.event || t;
    var e = t.srcElement || t.target;
    "A" != e.nodeName && (t.preventDefault ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1)
}), $.mod.load("tab", "1.2", function () {
    n.find("ol").regMod("tab", "1.2", {
        options: {index: 0, tab: "span", panel: "#themeCity>div", trigger: "click"},
        style: {tab: ["hot_selected", ""], panel: {display: ["block", "none"]}}
    })
});
var o = {
    options: {type: "drop", dropDom: n, trigger: ["mousedown"], stag: "a"},
    classNames: {checked: "checked"},
    listeners: {
        returnVal: function (t, e) {
            var i = document.getElementById("SelectCity");
            i.innerHTML = t, i.dataset ? i.dataset.seo = e.dataset.seo : i.setAttribute("data-seo", e.getAttribute("data-seo"))
        }
    }
};
a.regMod("dropBox", "1.0", o)
}),
$("#FeatureSumbit").bind("mousedown", function () {
    var t = document.getElementById("SelectFeature"), e = document.getElementById("SelectCity"), i = t.dataset ? t.dataset.seo : t.getAttribute("data-seo"), a = e.dataset ? e.dataset.seo : e.getAttribute("data-seo"), n = [];
    a && n.push(a), n.push(i || "quanbu"), this.href = "/special/" + n.join("-") + "/p1"
})
},
initBrand = function () {
    new scrollPicture({
        btnPrev: document.getElementById("btnPrev"),
        btnNext: document.getElementById("btnNext"),
        objBox: document.getElementById("brandListBox"),
        showLen: document.body.clientWidth <= 1250 ? 6 : 7,
        width: document.body.clientWidth <= 1250 ? 94.3 : 104
    })
}, initHotelSearch = function () {
    var t = $("#txtKeyword");
    restoreBackwardStatus(FIELDS_WITH_BACKWARD_STATUS), HotelSearch.init(), HotelSearch.setCity(param.cityId, param.cityName, param.cityPY, param), setKeywordJsonpUrl(MOD.a_keyword, param.cityId), $("#btnSearch").bind("click", function (e) {
        var i = document.getElementsByTagName("form")[0], a = $("#J_InnRadio")[0], n = $("#J_HotSaleRadio")[0];
        HotelSearch.submit(!1, !1, a.checked, n.checked) && (n.checked && (sendAjaxWithKeyword(), t.getMod("notice", "1.0") && t.getMod("notice", "1.0").method("isEmpty") && t.value("")), i.submit()), e.stop()
    }).get(0).className = "btn_search", $("#btnMapSearch").bind("click", function () {
        var t = document.getElementsByTagName("form")[0];
        return HotelSearch.submit(!0, !0) && (sendAjaxWithKeyword(), t.submit()), !1
    })
}, initHotCity = function () {
    var hotCityElements = $("#hotsold_city_list")[0].getElementsByTagName("li"), curcity, lastcity, processcity = function () {
        hotCityElements = $("#hotsold_city_list")[0].getElementsByTagName("li"), hotCityElements && hotCityElements.length > 1 && (curcity = hotCityElements[0], lastcity = hotCityElements[hotCityElements.length - 2], morecity = hotCityElements[hotCityElements.length - 1])
    };
    processcity();
    var hotCityParams = {
        method: cQuery.AJAX_METHOD_POST,
        context: {
            city: param.cityId,
            cityName: param.cityName,
            cityPY: param.cityPY,
            type: 0,
            cityip: ipcity,
            psid: window.ajaxBlurId && ajaxBlurId.PSID || ""
        },
        escape: !1,
        async: !0,
        cache: !0,
        onsuccess: function (response) {
            if (response.responseText.indexOf("hasListForInitHotHotel") <= 0)return void($("#hotsold_city_list")[0].getElementsByTagName("li")[0].className = "current");
            if ("" != response.responseText && "\r\n" != response.responseText && ($("#hot_list").html(response.responseText), document.getElementById("defaultcity") && (defaultCityJson = document.getElementById("defaultcity").innerHTML, defaultCityJson))) {
                defaultCityJson = eval("(" + defaultCityJson + ")");
                var Jsonindex = 0, firstcityindex = 0;
                if (defaultCityJson.each(function (t, e) {
                        var i = document.getElementById("hotsold_city_list"), a = document.getElementById("pop_box_city");
                        if (cityData[t.id])if (cityindex[t.id] <= 7) {
                            if (hotCityElements.length >= cityindex[t.id] && 1 != cityindex[t.id]) {
                                var n;
                                0 == firstcityindex && (firstcityindex = cityindex[t.id]), n = cityindex[t.id] > firstcityindex ? hotCityElements[cityindex[t.id] - 1] : hotCityElements[cityindex[t.id] - 1 + Jsonindex], i.removeChild(n), i.insertBefore(n, hotCityElements[0]), processcity(), Jsonindex++
                            }
                        } else {
                            Jsonindex++;
                            var n = $("#pop_box_city")[0].getElementsByTagName("a")[cityindex[t.id] - 7];
                            i.removeChild(lastcity);
                            var o = lastcity.getElementsByTagName("a")[0].getAttribute("data-id"), s = lastcity.getElementsByTagName("a")[0].getAttribute("data-py"), r = lastcity.getElementsByTagName("a")[0].href, c = lastcity.getElementsByTagName("a")[0].innerHTML;
                            i.insertBefore(lastcity, hotCityElements[0]);
                            var l = document.getElementById("hotsold_city_list").getElementsByTagName("a")[0];
                            l.setAttribute("data-id", n.getAttribute("data-id")), l.setAttribute("data-py", n.getAttribute("data-py")), l.href = n.href, l.innerHTML = n.innerHTML, n.setAttribute("data-id", o), n.setAttribute("data-py", s), n.href = r, n.innerHTML = c, processcity()
                        } else {
                            var d = "<li><i></i><a data-py=" + t.py + " data-id=" + t.id + " href='/hotel/" + t.py + t.id + "'>" + t.name + "</a></li>";
                            i.removeChild(lastcity), d += i.innerHTML, $("#hotsold_city_list").html(d);
                            var p = lastcity.getElementsByTagName("a")[0];
                            a.appendChild(p), $("#pop_box_city").html(a.innerHTML), processcity(), Jsonindex++
                        }
                    }), defaultCityJson.length >= 2) {
                    var swapcity = hotCityElements[1], hotsold_city_list = document.getElementById("hotsold_city_list");
                    hotsold_city_list.removeChild(hotCityElements[1]), hotsold_city_list.insertBefore(swapcity, hotCityElements[0])
                }
            }
            $("#hotsold_city_list")[0].getElementsByTagName("li")[0].className = "current", $(".J_trace_hotHotel").bind("click", function () {
                var t = $("#htl_internal_home_htl_hothotel"), e = $(this).attr("data-hotel"), i = "pageid=" + $("#page_id").value() + ";clicktime=" + (new Date).toFormatString("yyyy-MM-dd hh:mm:ss") + ";hotelid=" + e.split("|")[0] + ";hotelprice=" + e.split("|")[1] + ";others=";
                t.value(i), window.__bfi.push(["_tracklog", t.attr("data-key"), i])
            });
            var dataObj = new Function($("#HotHotelMaiDian").find("script").html())();
            window.__bfi.push(["_tracklog", dataObj.key, $.stringifyJSON(dataObj.value)])
        }
    };
    $.ajax(addressUrlConfig.hothotel, hotCityParams);
    var ajaxDataObject = {}, city_chosen = $("#city_chosen"), pop_box_city = $("#pop_box_city"), hotsold_city_list = $("#hotsold_city_list"), isChildOf = function (t, e, i) {
        if (t == e)return !0;
        if (t.contains)return t.contains(e);
        if (t.compareDocumentPosition)return !!(16 & t.compareDocumentPosition(e));
        for (var a = e.parentNode; a && a != i;) {
            if (a == t)return !0;
            a = a.parentNode
        }
        return !1
    }, hide = function (t) {
        t.target || (t.target = t.srcElement || document), null !== t.target && 3 === t.target.nodeType && (t.target = t.target.parentNode), t.target == city_chosen[0] || isChildOf(pop_box_city[0], t.target, pop_box_city[0]) || (pop_box_city[0].style.display = "none")
    };
    $(document).bind("click", hide);
    var chosencity = function (t) {
        t = t || window.event;
        var e = t.target || t.srcElement;
        if ($(e).hasClass("c_close"))return void $("#pop_box_city").css("display", "none");
        if ("A" == e.nodeName && "city_chosen" != e.id) {
            curcity.className = "", pop_box_city[0].style.display = "none";
            var i = {
                method: cQuery.AJAX_METHOD_POST,
                context: {
                    city: e.getAttribute("data-id"),
                    cityName: e.innerHTML,
                    cityPY: e.getAttribute("data-py"),
                    psid: window.ajaxBlurId && ajaxBlurId.PSID || ""
                },
                escape: !1,
                async: !0,
                cache: !0,
                onsuccess: function (t) {
                    "" != t.responseText ? document.getElementById("nohotcity").style.display = "none" : document.getElementById("nohotcity").style.display = "block", $("#hot_list").html(t.responseText);
                    var e = new Function($("#HotHotelMaiDian").find("script").html())();
                    e && e.key && e.value && window.__bfi.push(["_tracklog", e.key, $.stringifyJSON(e.value)])
                }
            };
            if ($.ajax(addressUrlConfig.hothotel, i), "pop_box_city" != e.parentNode.id) e.parentNode.className = "current", curcity = e.parentNode; else {
                curcity.className = "";
                var a = e.getAttribute("data-id"), n = e.getAttribute("data-py"), o = e.href, s = e.innerHTML, r = lastcity.getElementsByTagName("a")[0];
                e.setAttribute("data-id", r.getAttribute("data-id")), e.setAttribute("data-py", r.getAttribute("data-py")), e.href = r.href, e.innerHTML = r.innerHTML, r.setAttribute("data-id", a), r.setAttribute("data-py", n), r.href = o, r.innerHTML = s, lastcity.className = "current", curcity = lastcity
            }
        } else if ("A" == e.nodeName && "city_chosen" == e.id) {
            var c = pop_box_city[0], l = c.style.display;
            "none" != l ? c.style.display = "none" : c.style.display = ""
        }
        t.preventDefault ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1
    };
    pop_box_city.bind("click", chosencity), hotsold_city_list.bind("click", chosencity)
}, initNearbyMarkland = function () {
    new HotCityTab({
        hotsoldCityList: ".nearby_htl_box .hotsold_city_list",
        popBoxCity: "#nearbyPopCity",
        mainPanel: "#J-nearbyDetailContainer"
    })
}, initMail = function () {
    var t = $("#mailTxtId");
    t.length && (MOD.n_bookmail = t.regMod("notice", "1.0", {name: "mailTxtId", tips: noticeMessageConfig[3]}));
    var e = $("#mailSubmitId")[0];
    e.disabled = !1, $("#mailSubmitId").bind("click", function () {
        var t = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
        if (MOD.n_bookmail.method("isEmpty") || !t.test($("#mailTxtId").value()))return MOD.formValidator.method("show", {
            $obj: $("#mailTxtId"),
            data: validateMessageConfig.mail[0],
            removeErrorClass: !0,
            hideEvent: "blur",
            isFocus: !0,
            isScroll: !1
        }), e.disabled = !1, !1;
        e.disabled = !0;
        var i = escape($("#mailTxtId").value()), a = {
            method: cQuery.AJAX_METHOD_POST,
            context: {email: i},
            escape: !1,
            async: !0,
            cache: !1,
            onsuccess: function (t) {
                var i = t.responseText;
                "0" == i ? (e.parentNode.style.display = "none", $("#mail_state_sucess").css("display", "")) : "100" == i ? (MOD.formValidator.method("show", {
                            $obj: $("#mailTxtId"),
                            data: validateMessageConfig.mail[0],
                            removeErrorClass: !0,
                            hideEvent: "blur",
                            isFocus: !0,
                            isScroll: !1
                        }), e.disabled = !1) : (MOD.formValidator.method("show", {
                            $obj: $("#mailTxtId"),
                            data: validateMessageConfig.mail[1],
                            removeErrorClass: !0,
                            hideEvent: "blur",
                            isFocus: !0,
                            isScroll: !1
                        }), e.disabled = !1)
            }
        };
        $.ajax("/Domestic/Tool/AjaxBookEmail.ashx", a)
    }), $("#mail_state_sucess").bind("click", function () {
        e.parentNode.style.display = "", e.disabled = !1, $("#mail_state_sucess").css("display", "none"), MOD.n_bookmail.method("resetValue")
    })
}, initTraceCode = function () {
    $(document).bind("mousedown", function (t) {
        t = t || window.event;
        var e = t.target || t.srcElement;
        if ("A" != e.nodeName && (e = e.parentNode), e && e.nodeType && "A" == e.nodeName) {
            var i = e.dataset ? e.dataset.ctm : e.getAttribute("data-ctm");
            i && !/#ctm_ref=/.test(e.href) && (e.href += i)
        }
    })
}, initSearchBoxTab = function () {
    var t = $("#J_searchBox"), e = ($("#txtCity"), $("#cityPY"), $("#cityId")), i = e.value(), a = ($("#txtCheckIn"), $("#txtCheckOut"), $("#searchHotelLevelSelect").parentNode().parentNode()), n = $("#J_HotelRadio"), o = $("#J_InnRadio"), s = $("#J_HotSaleRadio"), r = $("#txtKeyword"), c = $("#btnSearch"), l = $("#J_HotelScene"), d = new Date, p = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(), $("#J_innActivityEntrance"));
    n[0].checked = !0, o[0].checked = !1, n.bind("click", function () {
        $("#J_searchBox .current").removeClass("current"), $(this).parentNode().addClass("current"), $("#J_SwitchSearch").css("display", ""), $("#jingForm").addClass("hidden"), $("#J_searchHistoryBox").css("display", ""), $("#txtCity").addClass("input_short_city");
        var t = $("#J_searchHistoryBox");
        t && t.removeClass("hidden");
        var s = $("input[name=HotelCityName]");
        t && s && s.addClass("input_short_city");
        var l, d = MOD.n_keyword, u = keywordMessageConfig.placeholder.hotel, h = keywordMessageConfig.searchButtonText.hotel;
        i = e.value() || i, a.css("display", ""), p.addClass("hidden"), n[0].checked = !0, o[0].checked = !1, searchOptions.isInn = !1, searchOptions.isHot = !1, setKeywordJsonpUrl(MOD.a_keyword, i, "Domestic"), setCityJsonpUrl(MOD.a_city, "Domestic"), c.value(h), r.attr("_cqnotice", u), d && (l = d.method("isEmpty"), d.set("tips", u), l && d.method("resetValue"))
    }), s.bind("click", function () {
        $("#J_searchBox .current").removeClass("current"), $(this).parentNode().addClass("current"), $("#J_SwitchSearch").css("display", ""), $("#jingForm").addClass("hidden"), $("#J_searchHistoryBox").css("display", "none"), $("#txtCity").removeClass("input_short_city"), a.css("display", ""), p.addClass("hidden");
        var t, l = MOD.n_keyword, d = keywordMessageConfig.placeholder.hotel, u = keywordMessageConfig.searchButtonText.hotHotel;
        i = e.value() || i, n[0].checked = !1, o[0].checked = !1, s[0].checked = !0, searchOptions.isInn = !1, searchOptions.isHot = !0, setKeywordJsonpUrl(MOD.a_keyword, i, "hotSale"), setCityJsonpUrl(MOD.a_city, "hotSale"), c.value(u), r.attr("_cqnotice", d), l && (t = l.method("isEmpty"), l.set("tips", d), t && l.method("resetValue"))
    }), o.bind("click", function () {
        $("#J_searchBox .current").removeClass("current"), $(this).parentNode().addClass("current"), $("#J_SwitchSearch").css("display", ""), $("#jingForm").addClass("hidden"), $("#J_searchHistoryBox").css("display", ""), $("#txtCity").addClass("input_short_city");
        var t = $("#J_searchHistoryBox");
        t && t.addClass("hidden");
        var s = $("input[name=HotelCityName]");
        s && s.removeClass("input_short_city");
        var l, d = MOD.n_keyword, u = keywordMessageConfig.placeholder.inn, h = keywordMessageConfig.searchButtonText.inn;
        i = e.value() || i, a.css("display", "none"), p.removeClass("hidden"), n[0].checked = !1, o[0].checked = !0, searchOptions.isInn = !0, searchOptions.isHot = !1, setKeywordJsonpUrl(MOD.a_keyword, i, "Inn"), setCityJsonpUrl(MOD.a_city, "Inn"), c.value(h), r.attr("_cqnotice", u), d && (l = d.method("isEmpty"), d.set("tips", u), l && d.method("resetValue"))
    }), l.bind("click", function () {
        $("#J_searchBox .current").removeClass("current"), $(this).parentNode().addClass("current"), $("#J_SwitchSearch").css("display", "none"), p.addClass("hidden"), $("#jingForm").removeClass("hidden")
    }), t.bind("keydown", function (t) {
        var e = t ? t.keyCode : window.event.which;
        13 === e && $("#btnSearch").trigger("click")
    })
}, SuportPadFeature = {
    init: function () {
        this.fixCharacteristicHotelClick()
    }, fixCharacteristicHotelClick: function () {
        $(".theme_htl_list").find(".pic").bind("touchstart", function (t) {
            window.open($(this).nextSibling().attr("href"), "_blank")
        })
    }
}, initPage = function () {
    var t = $.BizMod.SearchPanel;
    $("#cityId");
    initSearchBoxTab(), initMod(), getCookie(location.host.match(/big5\./) ? "BHotelCityID" : "HotelCityID", param), initNearbyMarkland(), initHotelSearch(), initMail(), initBrand(), t.initAdditionalInfo().init({
        getListUrl: addressUrlConfig.ajaxGetHotelAddtionalInfo,
        wrap: $("#visitedHistory"),
        removeUrl: "/Domestic/Tool/AjaxDeleteVistedB.aspx",
        hasLogin: hotelDomesticConfig.hasLogin,
        onRemove: function (t) {
            t.parentNode().remove()
        },
        oncomplete: function (t) {
            var e = t.VisitedHotelInfo;
            e && e.length && this.wrap.html($.tmpl.render($("#J_History").html(), e));
            var i = this.wrap, a = "bg_hover";
            i.find("li").bind("mouseover", function () {
                $(this).addClass(a)
            }), i.find("li").bind("mouseout", function () {
                $(this).removeClass(a)
            }), $(".J_trace_scanedHotel").bind("click", function () {
                var t = $("#htl_internal_home_htl_scanedhotel"), e = $(this).attr("data-hotel"), i = "pageid=" + $("#page_id").value() + ";clicktime=" + (new Date).toFormatString("yyyy-MM-dd hh:mm:ss") + ";hotelid=" + e.split("|")[0] + ";others=";
                t.value(i), window.__bfi.push(["_tracklog", t.attr("data-key"), i])
            })
        },
        deleteBtnCls: "delete"
    }).getList(), initHotCity(), initTraceCode(), $.browser.isIPad && SuportPadFeature.init(), "undefined" == typeof window.__bfi && (window.__bfi = [])
};
return {init: initPage}
}
(), sendpost = function (t) {
    t = t || window.event;
    var e = t.target || t.srcElement;
    if ("A" != e.nodeName && (e = e.parentNode), e && 1 == e.nodeType && "A" == e.nodeName) {
        var i = e.parentNode, a = e.dataset ? e.dataset.dopost : e.getAttribute("data-dopost");
        if (a) {
            var n;
            i && (n = i.parentNode) && ("J_locationItems" == n.getAttribute("id") || "hot_htl_city" == n.className) && setLocationHiddens(e.getAttribute("href"));
            var o = document.forms[0];
            o.action = e.href, e.target ? o.target = e.target : o.target = "_self", o.__VIEWSTATE && (o.__VIEWSTATE.name = "NOVIEWSTATE"), o.submit(), t.preventDefault ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }
    }
};
$(".hotel_name").bind("click", sendpost), $(".hotel_abbrpic").bind("click", sendpost), $(".search_hotel_zone").bind("click", sendpost), $(".search_hotel_location").bind("click", sendpost), $(".hotel_comment").bind("click", sendpost);
var initHotHotelPrice = function (t) {
};
!function (t, e) {
    function i(e) {
        this.titleAs = t(e.titleAs), this.picBoxs = t(e.picBoxs), this.init()
    }

    i.prototype = {
        constructor: i, init: function () {
            this._bindEvent()
        }, _bindEvent: function () {
            t.browser.isIPad ? this.titleAs.bind("click", this._tleMouCliPad.bind(this)) : this.titleAs.bind("mouseover", this._tleMouOverPc.bind(this))
        }, _tleMouOverPc: function (e) {
            var i = e.target;
            "A" === i.tagName.toUpperCase() && (i = i.parentNode), i = t(i), this._setActItem(i)
        }, _tleMouCliPad: function (e) {
            var i = e.target;
            "A" === i.tagName.toUpperCase() && (i = i.parentNode), i = t(i), i.hasClass("current") || (e.stop(), this._setActItem(i))
        }, _setActItem: function (t) {
            var e = t.find("a").attr("data-item");
            this.titleAs.removeClass("current"), t.addClass("current"), this.picBoxs.css({display: "none"}), this.picBoxs.filter(".J_specialpics[data-item=" + e + "]").css({display: "block"})
        }
    }
}(cQuery, window);
var checkForFoldYc = {key: !0};
$("#seo_more").bind("click", function () {
    checkForFoldYc.key ? ($(this).parentNode().parentNode().find(".seo_hot").addClass("sta_unfold"), checkForFoldYc.key = !1) : ($(this).parentNode().parentNode().find(".seo_hot").removeClass("sta_unfold"), checkForFoldYc.key = !0)
}), $(".seo_hot").removeClass("sta_unfold"), function () {
    var t, e = 5e3, i = 4, a = 0, n = $("#J_latestOrdered dd"), o = [].slice.call(n), s = o.length;
    o = o.concat(o), t = function () {
        $(o).css("display", "none"), $(o.slice(a % s, a % s + i)).css("display", ""), a += i
    }, t(), setInterval(t, e)
}(), function () {
    var t = $("#J_surrounding"), e = t.find(".st_title"), i = t.find(".st_start"), a = t.find(".st_list");
    e.removeClass("show_list"), a.removeClass("hidden"), $.mod.load("animate", "1.0", function () {
        $.browser.isIPad ? t.bind("click", function (t) {
                e.animate({"padding-top": "35px"}), i.animate({
                    bottom: "40px",
                    opacity: "0"
                }), a.animate({bottom: "0px"})
            }) : t.bind("mouseenter", function (t) {
                t.stop(), e.animate({"padding-top": "35px"}), i.animate({
                    bottom: "40px",
                    opacity: "0"
                }), a.animate({bottom: "0px"})
            }).bind("mouseleave", function (t) {
                t.stop(), e.animate({"padding-top": "60px"}), i.animate({
                    bottom: "0px",
                    opacity: "1"
                }), a.animate({bottom: "-90px"})
            })
    })
}(), function () {
    var t = {
        $container: !1,
        hoverStatus: !1,
        processing: !1,
        playInterval: 3e3,
        hoverTimeout: 300,
        slideshowSpeed: 100,
        animationSpeed: 400,
        init: function (t) {
            if (!t)return !1;
            var e = $(t);
            if (0 == e.length)return !1;
            if (this.$container = e, document.all && !window.setTimeout.isPolyfill) {
                var i = window.setTimeout;
                window.setTimeout = function (t, e) {
                    var a = Array.prototype.slice.call(arguments, 2);
                    return i(t instanceof Function ? function () {
                            t.apply(null, a)
                        } : t, e)
                }, window.setTimeout.isPolyfill = !0
            }
            return !0
        },
        start: function (t) {
            var e = this;
            this.init(t) && $.mod.load("animate", "1.0", function () {
                e.doDirection(), e.doInterval()
            })
        },
        pause: function () {
            this.hoverStatus = !0
        },
        recover: function () {
            this.hoverStatus = !1
        },
        doInterval: function () {
            var t = this;
            setInterval(function () {
                if (!t.hoverStatus) {
                    var e = t.$container.find(".J_specialtitle"), i = (t.$container.find(".htl_special_pics>a"), e.length), a = t.findCurrentIndex(), n = 1;
                    a < i && (n = parseInt(a) + 1), t.doSwitch(n)
                }
            }, t.playInterval)
        },
        doDirection: function () {
            var t = this, e = new Array(t.doHover, t.doHover), i = 0, a = 1, n = function (e) {
                var i = e || window.event;
                "mouseenter" == i.type ? t.pause && t.pause() : t.recover && t.recover()
            }, o = t.$container.get(0);
            navigator.userAgent.indexOf("MSIE") >= 0 ? (o.onmouseenter = n, o.onmouseleave = n) : (o.onmouseover = function (t) {
                    var e = t || window.event, i = e.relatedTarget;
                    i && (8 & i.compareDocumentPosition(this) || i === this) || n.call(this, e)
                }, o.onmouseout = function (t) {
                    var e = t || window.event, i = e.relatedTarget;
                    i && (8 & i.compareDocumentPosition(this) || i === this) || n.call(this, e)
                }), t.$container.find(".J_specialtitle").bind("mouseover", function (n) {
                var o = n.target;
                o && "A" == o.tagName && (a = parseInt($(o).attr("data-item") || "1"), t.pause && t.pause(), e[i] && setTimeout(function (e) {
                    e == a && t.hoverStatus && t.doHover(e, o)
                }, t.hoverTimeout, a), n.stopPropagation())
            })
        },
        doSwitch: function (t, e) {
            var i = this, a = i.$container.find(".J_specialtitle"), n = i.$container.find(".htl_special_pics"), o = n.find("a");
            i.processing = !0;
            var s = void 0;
            o.each(function (t) {
                if ("block" == t.css("display"))return s = t, !1
            });
            var r = o.filter("[data-item=" + t + "]");
            return s.attr("data-item") == r.attr("data-item") ? void(i.processing = !1) : void s.animate({opacity: .3}, i.animationSpeed, function () {
                    return e && !i.hoverStatus ? (i.processing = !1, void s.css({
                            display: "block",
                            opacity: 1
                        })) : (r.css({display: "block", opacity: .3}), s.css({
                            display: "none",
                            opacity: 1
                        }), r.animate({opacity: 1}, i.slideshowSpeed, function () {
                            i.processing = !1
                        }), void a.removeClass("current").filter(":has(a[data-item=" + t + "])").addClass("current"))
                })
        },
        doHover: function (t, e) {
            var i = this;
            i.$container.find(".J_specialtitle");
            return i.processing ? void setTimeout(i.doHover(t, e), 100) : (i.$container.find(".J_specialtitle").removeClass("current").filter(":eq(" + (t - 1) + ")").addClass("current"), void i.doSwitch(t, !0))
        },
        findCurrentIndex: function () {
            return this.$container.find("td.J_specialtitle.current a").attr("data-item")
        }
    };
    t.start("div.htl_specials")
}(), function () {
    $(".J_faxian_box a[data-tracekey]").bind("click", function (t) {
        var e = $(this).attr("data-tracekey"), i = $(this).attr("data-tracevalue");
        window.__bfi.push(["_tracklog", e, i])
    })
}(), function () {
    $("#txtCity").bind("blur", function () {
    })
}(), function (t, e) {
    var i = !1;
    t(e).bind("focus", function () {
        i = !0, setTimeout(function () {
            i = !1
        }, 200)
    }), setTimeout(function () {
        t("#txtCity, #txtCheckIn, #txtCheckOut").bind("focus", function () {
            i && t(this).trigger("blur")
        })
    }, 4e3)
}(cQuery, window);
