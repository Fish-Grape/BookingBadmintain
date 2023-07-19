(self["webpackChunkydmap_web_portal"] = self["webpackChunkydmap_web_portal"] || []).push([[7822], {
    51529: (e,t,s)=>{
        "use strict";
        s.d(t, {
            Z: ()=>u
        });
        var r = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", e._g({
                staticClass: "fixed-circle-btn",
                class: e.cls,
                style: e.styleObj
            }, e.$listeners), [e._t("default")], 2)
        }
          , i = []
          , o = s(22648);
        const n = {
            props: {
                href: String,
                left: Number,
                top: Number,
                right: Number,
                bottom: Number,
                cls: String
            },
            computed: {
                styleObj() {
                    const e = {};
                    return (0,
                    o.hj)(this.left) && (e.left = `${this.left}px`),
                    (0,
                    o.hj)(this.top) && (e.top = `${this.top}px`),
                    (0,
                    o.hj)(this.right) && (e.right = `${this.right}px`),
                    (0,
                    o.hj)(this.bottom) && (e.bottom = `${this.bottom}px`),
                    e
                }
            }
        }
          , l = n;
        var a = s(1001)
          , c = (0,
        a.Z)(l, r, i, !1, null, "f98011fe", null);
        const u = c.exports
    }
    ,
    67765: (e,t,s)=>{
        "use strict";
        s.d(t, {
            Z: ()=>u
        });
        var r = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("MovableNav", {
                attrs: {
                    href: "/",
                    bottom: e.bottom || 90
                }
            }, [s("img", {
                staticClass: "img-max",
                attrs: {
                    src: e.CDN_STATIC_HOST + "/images/portal/movable-nav/f-home.png"
                }
            })])
        }
          , i = []
          , o = s(26970);
        const n = {
            components: {
                MovableNav: o.Z
            },
            props: {
                bottom: Number
            }
        }
          , l = n;
        var a = s(1001)
          , c = (0,
        a.Z)(l, r, i, !1, null, null, null);
        const u = c.exports
    }
    ,
    98134: (e,t,s)=>{
        "use strict";
        s.d(t, {
            Z: ()=>c
        });
        var r = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.marquee || e.useTipText ? s("div", {
                ref: "marqueeBox",
                staticClass: "marquee-box calc-box"
            }, [s("div", {
                ref: "marqueeTip",
                staticClass: "marquee-tip",
                class: {
                    "marquee-tip-txt": e.useTipText
                }
            }, [s("div", {
                staticClass: "text-overflow marquee-tip-txt-inner"
            }, [s("i", {
                staticClass: "icon-pt-notice"
            }), e._v(" " + e._s(e.useTipText) + " ")])]), s("div", {
                staticClass: "marquee-scroll"
            }, [s("div", {
                ref: "marquee",
                staticClass: "marquee",
                style: {
                    left: e.marqueeLeft + "px"
                }
            }, [e._v(" " + e._s(e.text) + " ")])])]) : e._e()
        }
          , i = [];
        const o = {
            props: {
                text: String,
                tipText: String
            },
            data() {
                return {
                    animationFrame: null,
                    marqueeLeft: 0,
                    marqueeWidth: 0
                }
            },
            computed: {
                marquee() {
                    var e;
                    return (null === (e = this.text) || void 0 === e ? void 0 : e.trim().length) > 0
                },
                useTipText() {
                    var e;
                    return null === (e = this.tipText) || void 0 === e ? void 0 : e.trim()
                }
            },
            watch: {
                text: {
                    handler() {
                        this.marqueeLeft = 0,
                        this.$nextTick((()=>{
                            const e = this.$refs.marquee;
                            this.marqueeWidth = e ? Math.max(e.offsetWidth, e.clientWidth) : 0,
                            this.animationFrame && window.clearTimeout(this.animationFrame),
                            this.mq()
                        }
                        ))
                    },
                    immediate: !0
                }
            },
            methods: {
                mq() {
                    if (this.marquee) {
                        const {marqueeBox: e, marqueeTip: t} = this.$refs
                          , s = e ? Math.max(e.offsetWidth, e.clientWidth) : 0
                          , r = t ? Math.max(t.offsetWidth, t.clientWidth) : 0
                          , i = s - r;
                        this.marqueeWidth > i && (this.marqueeLeft < -this.marqueeWidth && (this.marqueeLeft = i + 10),
                        this.marqueeLeft = this.marqueeLeft - 1),
                        this.animationFrame = window.setTimeout(this.mq, 20)
                    } else
                        this.marqueeLeft = 0
                }
            }
        }
          , n = o;
        var l = s(1001)
          , a = (0,
        l.Z)(n, r, i, !1, null, "4e3b306d", null);
        const c = a.exports
    }
    ,
    26970: (e,t,s)=>{
        "use strict";
        s.d(t, {
            Z: ()=>u
        });
        var r = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                directives: [{
                    name: "drag",
                    rawName: "v-drag"
                }],
                ref: "nav",
                staticClass: "abs-nav",
                style: e.styleObj,
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.click.apply(null, arguments)
                    }
                }
            }, [e._t("default")], 2)
        }
          , i = []
          , o = (s(57658),
        s(22648));
        const n = {
            props: {
                href: String,
                left: Number,
                top: Number,
                right: Number,
                bottom: Number
            },
            computed: {
                styleObj() {
                    const e = {};
                    return (0,
                    o.hj)(this.left) && (e.left = `${this.left}px`),
                    (0,
                    o.hj)(this.top) && (e.top = `${this.top}px`),
                    (0,
                    o.hj)(this.right) && (e.right = `${this.right}px`),
                    e
                }
            },
            watch: {
                bottom() {
                    this.flushCss()
                }
            },
            mounted() {
                this.flushCss()
            },
            methods: {
                flushCss() {
                    if ((0,
                    o.hj)(this.bottom)) {
                        const e = `${this.bottom}px`;
                        this.$refs.nav.setAttribute("style", `\n          bottom: ${e};\n          bottom: calc(var(--body-padding-offset-bottom) + ${e});\n          bottom: calc(var(--body-padding-offset-bottom) + ${e} + constant(safe-area-inset-bottom));\n          bottom: calc(var(--body-padding-offset-bottom) + ${e} + env(safe-area-inset-bottom, 0px));\n          `)
                    } else
                        this.$refs.nav.setAttribute("style", "")
                },
                click() {
                    this.href && this.$router.push(this.href),
                    this.$emit("click")
                }
            }
        }
          , l = n;
        var a = s(1001)
          , c = (0,
        a.Z)(l, r, i, !1, null, "69035440", null);
        const u = c.exports
    }
    ,
    4476: (e,t,s)=>{
        "use strict";
        s.r(t),
        s.d(t, {
            default: ()=>de
        });
        var r = {};
        s.r(r),
        s.d(r, {
            PlatformDealTypes: ()=>A
        });
        var i = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("section", {
                directives: [{
                    name: "bodycls",
                    rawName: "v-bodycls",
                    value: ["bd-bg"],
                    expression: "['bd-bg']"
                }]
            }, [e.collectShow ? s("router-view") : e._e(), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.ready && !e.collectShow,
                    expression: "ready && !collectShow"
                }],
                staticClass: "container"
            }, [s("MarqueeBox", {
                ref: "marqueeBox",
                attrs: {
                    text: e.flushData.marqueeText,
                    "tip-text": e.entranceRequire
                }
            }), e.ready ? s("div", {
                ref: "others",
                staticClass: "bg-white sticky top-0 z-2"
            }, [s("Slider", {
                attrs: {
                    "data-list": e.serverData.itemDataList,
                    idkey: "salesItemId",
                    label: "salesItemName",
                    type: "item"
                },
                on: {
                    groupChange: e.onGroupChange
                },
                model: {
                    value: e.salesItemId,
                    callback: function(t) {
                        e.salesItemId = t
                    },
                    expression: "salesItemId"
                }
            }), e.serverData.dateDataList ? s("Slider", {
                attrs: {
                    "data-list": e.serverData.dateDataList,
                    idkey: "day",
                    label: "dayName",
                    label2: "weekName",
                    type: "datetime",
                    "item-bg-color": "#f9f9f9",
                    "item-cls": "rounded-4px"
                },
                on: {
                    reload: e.onDateTimeReload
                },
                model: {
                    value: e.curDate,
                    callback: function(t) {
                        e.curDate = t
                    },
                    expression: "curDate"
                }
            }) : e._e(), e.isTicket && e.useCounterTemplate && e.flushData.timeSlotList && e.flushData.timeSlotList.length > 0 ? s("Slider", {
                attrs: {
                    "data-list": e.flushData.timeSlotList,
                    "check-disable": e.checkSlotTimeDisable,
                    idkey: "startTime",
                    label: "startTime"
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [s("span", {
                            staticClass: "inline-block leading-34px px-8px rounded-17px border border-solid border-[#f0f0f0] cust-item"
                        }, [e._v(" " + e._s(e.formatHM(t.data.startTime)) + "-" + e._s(e.formatHMCsvt(t.data.endTime)) + " ")])]
                    }
                }], null, !1, 3397776608),
                model: {
                    value: e.selectedSlotStartTime,
                    callback: function(t) {
                        e.selectedSlotStartTime = t
                    },
                    expression: "selectedSlotStartTime"
                }
            }) : s("div", {
                staticClass: "h-4px"
            })], 1) : e._e(), s("ScheduleTable", {
                ref: "scheduleTable",
                attrs: {
                    params: e.scheduleTableParams,
                    "max-height": e.tableMaxHeight
                },
                on: {
                    dataReload: e.onDataReload,
                    selectedReload: e.onSelectedReload,
                    gotoNext: e.sure,
                    hourFun: e.onHourFun
                }
            }), e.flushData.allIsOffline ? e._e() : s("div", {
                ref: "operation",
                staticClass: "fixed-bt basic-fixed-bt"
            }, [!e.isTicket || e.useCounterTemplate ? s("div", {
                staticClass: "wrapper-left"
            }, [s("div", {
                staticClass: "money text-left"
            }, [e._v(" 共计 "), s("span", {
                staticClass: "total"
            }, [e._v(e._s(e.formatMoney(e.totalPrice)) + " ")]), e._v(" 元 ")]), s("div", {
                staticClass: "time-left"
            }, [e._v(" " + e._s([e.hourObj.openTime > 0 && e.formatHM(e.hourObj.openTime) + "开放预定", null != e.hourObj.hourCancel && null != e.hourObj.hourCancelType && "" + e.formatModel(e.HourCancelTypes, e.hourObj.hourCancelType) + e.formatTimeDuration(e.hourObj.hourCancel, 0, !0) + "可退"].filter(Boolean).join(", ")) + " ")])]) : e._e(), s("div", {
                staticClass: "wrapper-right"
            }, [e.serverData.bookingType === e.SalesBookingTypes.CallAppointment.key && e.serverData.salesTelList && e.serverData.salesTelList.length > 0 ? s("a", {
                attrs: {
                    href: "tel:" + e.serverData.salesTelList[0].salesTel
                }
            }, [s("el-button", {
                staticClass: "full-width primary-button",
                attrs: {
                    type: "text"
                }
            }, [e._v(" " + e._s(e.nextBtnDisText) + " ")])], 1) : s("el-button", {
                staticClass: "full-width primary-button",
                attrs: {
                    type: "text",
                    disabled: !e.canNext
                },
                on: {
                    click: e.sure
                }
            }, [e._v(" " + e._s(e.nextBtnDisText || "下一步") + " ")])], 1)]), s("NeVerify", {
                ref: "verifyComp",
                attrs: {
                    "only-picture": ""
                },
                on: {
                    confirm: e.onTicketVerifyConfirm
                }
            }), e.itemAgreementId > 0 ? s("FixedCircleButton", {
                attrs: {
                    bottom: 131
                },
                on: {
                    click: e.onAgreementTentacle
                }
            }, [s("div", {
                staticClass: "leading-14px"
            }, [e._v("订场")]), s("div", {
                staticClass: "leading-14px"
            }, [e._v("须知")])]) : e._e(), s("HomePageNav", {
                attrs: {
                    bottom: 185
                }
            })], 1)], 1)
        }
          , o = []
          , n = (s(74916),
        s(85827),
        s(57658),
        s(44592))
          , l = s(20144)
          , a = s(67765)
          , c = s(49227)
          , u = s(98134)
          , d = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", [e.isTicket && e.params.useCounterTemplate ? s("div", {
                ref: "body-wrapper",
                staticClass: "schedule__body-wrapper",
                style: e.bodyStyle
            }, [s("div", {
                staticClass: "px-8px mt-8px"
            }, [e._l(e.viewRows, (function(t) {
                return [e._l(t, (function(t) {
                    return [e.ifCounterShowCol(t) ? s("SpTicketCell", {
                        key: t.key,
                        attrs: {
                            value: t.orderInfo ? e.form[t.platformInfo.venueId][t.orderInfo.venueTicketId].value : 0,
                            cls: "ticket-cell",
                            data: t,
                            max: e.maxNum,
                            highlight: !!t.orderInfo && e.form[t.platformInfo.venueId][t.orderInfo.venueTicketId].value > 0,
                            disabled: e.ifCounterDisableCol(t),
                            text: e.params.salesItem ? e.params.salesItem.salesItemName : null
                        },
                        on: {
                            change: function(s) {
                                return e.onTicketChange(t, s)
                            },
                            popup: e.popupFun
                        }
                    }, [s("template", {
                        slot: "msg"
                    }, [s("ScheduleColMsg", {
                        attrs: {
                            col: t,
                            nyott: e.notYetOpenTimeText,
                            "is-ticket": e.isTicket,
                            "is-reservation": e.isReservation,
                            "is-no-book": e.isNoBook,
                            "is-ticket-disabled": e.isTicketDisabled,
                            "is-schedule-data-first": e.isScheduleDataFirst,
                            "server-data": e.serverData
                        }
                    })], 1)], 2) : e._e()]
                }
                ))]
            }
            )), null == e.params.selectedSlotStartTime || null == e.serverData.timeSlotList || 0 === e.serverData.timeSlotList.length ? s("Card", {
                attrs: {
                    invisible: ""
                }
            }, [s("div", {
                staticClass: "list-empty text-center"
            }, [e._v("暂无可选场次")])]) : e._e()], 2)]) : s("div", {
                staticClass: "schedule-table text-center",
                class: {
                    "schedule-table-compact": 1 === e.columns.level1.length && e.columns.level2.length < 2
                }
            }, [s("div", {
                ref: "hiddenColumns",
                staticClass: "schedule-table__hidden-columns"
            }), s("div", {
                ref: "header-wrapper",
                staticClass: "schedule-table__header-wrapper"
            }, [s("table", {
                staticClass: "schedule-table__header",
                style: {
                    width: e.tableWidth ? e.tableWidth + "px" : "100%"
                },
                attrs: {
                    cellspacing: "0",
                    cellpadding: "0",
                    border: "0"
                }
            }, [s("colgroup", e._l(e.columns.level1, (function(t, r) {
                return s("col", {
                    key: t.venueId,
                    attrs: {
                        span: t.subCount || 1,
                        width: e.colWidth,
                        name: "schedule-table_column_" + (r + 1)
                    }
                })
            }
            )), 0), s("thead", e._l(e.columns, (function(t, r, i) {
                return s("tr", {
                    key: r
                }, e._l(t, (function(t, r) {
                    return s("th", {
                        key: t.venueId,
                        class: "schedule-table_column_" + (r + 1),
                        attrs: {
                            colspan: t.subCount || 1,
                            rowspan: 0 == i && 0 == t.subCount && e.columns.level2 && e.columns.level2.length > 0 ? 2 : 1,
                            "data-platform-id": t.venueId
                        }
                    }, [s("div", {
                        staticClass: "tablecell"
                    }, [e._v(e._s(t.venueName))])])
                }
                )), 0)
            }
            )), 0)])]), s("div", {
                ref: "body-wrapper",
                staticClass: "schedule__body-wrapper",
                style: e.bodyStyle
            }, [s("table", {
                staticClass: "schedule-table__body",
                style: {
                    width: e.tableWidth ? e.tableWidth + "px" : "100%"
                },
                attrs: {
                    cellspacing: "0",
                    cellpadding: "0",
                    border: "0"
                }
            }, [s("colgroup", e._l(e.columns.level1, (function(t, r) {
                return s("col", {
                    key: t.venueId,
                    attrs: {
                        span: t.subCount || 1,
                        width: e.colWidth,
                        name: "schedule-table_column_" + (r + 1)
                    }
                })
            }
            )), 0), s("tbody", [e._l(e.viewRows, (function(t, r) {
                return s("tr", {
                    key: r
                }, [e._l(t, (function(t, r) {
                    var i;
                    return [t ? s("td", {
                        key: t.key,
                        class: (i = {},
                        i["schedule-table_column_" + (r + 1)] = !0,
                        i[t.className] = !0,
                        i[e.getFightClass(t)] = !0,
                        i.expired = t.expired,
                        i.noOnline = t.platformInfo.onlineBooking !== e.OnlineBookingTypes.Open.key,
                        i.noBook = e.isNoBook(t) || null == t.priceBean,
                        i.noOpen = !(e.isScheduleDataFirst && t.className) && e.notYetOpenTimeText,
                        i.selected = e.selectedCols.includes(t),
                        i),
                        attrs: {
                            colspan: t.colspan || 1,
                            rowspan: t.rowspan || 1,
                            "data-platform-id": t.venueId
                        },
                        on: {
                            click: function(s) {
                                return e.onSelect(t)
                            }
                        }
                    }, [s("div", {
                        staticClass: "tablecell"
                    }, [t.startTimeText || t.endTimeText ? [e._v(" " + e._s(t.startTimeText) + "-" + e._s(t.endTimeText) + " ")] : e._e(), s("ScheduleColMsg", {
                        attrs: {
                            col: t,
                            nyott: e.notYetOpenTimeText,
                            "is-ticket": e.isTicket,
                            "is-reservation": e.isReservation,
                            "is-no-book": e.isNoBook,
                            "is-ticket-disabled": e.isTicketDisabled,
                            "is-schedule-data-first": e.isScheduleDataFirst,
                            "server-data": e.serverData
                        }
                    }, [t.orderInfo && 1 === t.orderInfo.isFightDeal ? s("template", {
                        slot: "fight"
                    }, [s("div", {
                        staticClass: "fight-request-ing"
                    }, [s("i", {
                        staticClass: "icon-pt-team-fight"
                    }), e._v(" 约战中 ")]), s("div", {
                        staticClass: "fight-request"
                    }, [e._v("已约战")]), s("div", {
                        staticClass: "fight-respond"
                    }, [e._v("已应战")])]) : e._e()], 2)], 2)]) : e._e()]
                }
                ))], 2)
            }
            )), (null == e.viewRows || 0 === e.viewRows.length) && e.columns.level1.length > 0 ? s("tr", [s("td", {
                staticClass: "text-center schedule-table__empty-text",
                attrs: {
                    colspan: e.colLength
                }
            }, [e._v(" " + e._s(e.loading ? "加载中..." : e.serverData.platformCloseAlert || "此时段暂不开放") + " ")])]) : e._e()], 2)])]), s("van-dialog", {
                attrs: {
                    "show-cancel-button": "",
                    "cancel-button-text": "关闭",
                    "show-confirm-button": e.fightDialogState === e.fightStates.requestIng,
                    "confirm-button-text": "我要应战"
                },
                on: {
                    confirm: e.respondFight
                },
                model: {
                    value: e.fightDialogShow,
                    callback: function(t) {
                        e.fightDialogShow = t
                    },
                    expression: "fightDialogShow"
                }
            }, [e.fightDialogCol ? s("div", {
                staticClass: "text-left"
            }, [s("img", {
                staticClass: "img-max",
                attrs: {
                    src: e.CDN_STATIC_HOST + "/images/portal/fight/fight-bg.jpg"
                }
            }), s("Card", [s("div", {
                staticClass: "inner-card",
                class: {
                    vs: e.fightDialogState === e.fightStates.request || e.fightDialogState === e.fightStates.respond
                }
            }, [s("el-row", [s("el-col", {
                staticClass: "text-right",
                attrs: {
                    span: 8
                }
            }, [e._v(" " + e._s(e.fightDialogState === e.fightStates.respond ? "应战" : "约战") + "队伍： ")]), s("el-col", {
                attrs: {
                    span: 16
                }
            }, [e._v(e._s(e.fightDialogCol.orderInfo.sportTeamName))])], 1), s("el-row", [s("el-col", {
                staticClass: "text-right",
                attrs: {
                    span: 8
                }
            }, [e._v(" 队服颜色： ")]), s("el-col", {
                attrs: {
                    span: 16
                }
            }, [e.fightDialogCol.orderInfo.sportTeamColorRgb ? s("span", {
                staticClass: "fight-color-wrapper"
            }, [e._v(" " + e._s(e.fightDialogCol.orderInfo.sportTeamColorValue) + " "), s("span", {
                style: {
                    background: e.fightDialogCol.orderInfo.sportTeamColorRgb,
                    borderColor: e.getFightBorderColor(e.fightDialogCol.orderInfo.sportTeamColorRgb)
                }
            }, [e._v("   ")])]) : e._e()])], 1), s("el-row", [s("el-col", {
                staticClass: "text-right",
                attrs: {
                    span: 8
                }
            }, [e._v(" " + e._s(e.fightDialogState === e.fightStates.respond ? "应战" : "约战") + "留言： ")]), s("el-col", {
                attrs: {
                    span: 16
                }
            }, [e._v(" " + e._s(e.fightDialogCol.orderInfo.fightDeclaration) + " ")])], 1), s("div", {
                staticClass: "gap-row"
            }, e._l(e.fightDialogUserCareerMapping, (function(t, r) {
                return s("el-row", {
                    key: r
                }, [s("el-col", {
                    staticClass: "text-right",
                    attrs: {
                        span: 8
                    }
                }, [e._v(" " + e._s(e.formatCareer(+r)) + "： ")]), s("el-col", {
                    attrs: {
                        span: 16
                    }
                }, [e._v(" " + e._s(t.map((function(e) {
                    return e.realName
                }
                )).join(", ")) + " ")])], 1)
            }
            )), 1), e.fightDialogBroCol ? [s("el-row", [s("el-col", {
                staticClass: "text-right",
                attrs: {
                    span: 8
                }
            }, [e._v(" " + e._s(e.getFightState(e.fightDialogBroCol) === e.fightStates.respond ? "应战" : "约战") + "队伍： ")]), s("el-col", {
                attrs: {
                    span: 16
                }
            }, [e._v(e._s(e.fightDialogBroCol.orderInfo.sportTeamName))])], 1), s("el-row", [s("el-col", {
                staticClass: "text-right",
                attrs: {
                    span: 8
                }
            }, [e._v(" 队服颜色： ")]), s("el-col", {
                attrs: {
                    span: 16
                }
            }, [e.fightDialogBroCol.orderInfo.sportTeamColorRgb ? s("span", {
                staticClass: "fight-color-wrapper"
            }, [e._v(" " + e._s(e.fightDialogBroCol.orderInfo.sportTeamColorValue) + " "), s("span", {
                style: {
                    background: e.fightDialogBroCol.orderInfo.sportTeamColorRgb,
                    borderColor: e.getFightBorderColor(e.fightDialogBroCol.orderInfo.sportTeamColorRgb)
                }
            }, [e._v("   ")])]) : e._e()])], 1), s("el-row", [s("el-col", {
                staticClass: "text-right",
                attrs: {
                    span: 8
                }
            }, [e._v(" " + e._s(e.getFightState(e.fightDialogBroCol) === e.fightStates.respond ? "应战" : "约战") + "留言： ")]), s("el-col", {
                attrs: {
                    span: 16
                }
            }, [e._v(" " + e._s(e.fightDialogBroCol.orderInfo.fightDeclaration) + " ")])], 1)] : e._e()], 2)])], 1) : e._e()])], 1)])
        }
          , h = []
          , m = (s(26699),
        s(33948),
        s(30541),
        s(2707),
        s(72156))
          , f = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.col ? s("span", [e.col.platformInfo.onlineBooking !== e.OnlineBookingTypes.Open.key ? [s("div", [e._v(" " + e._s(e.closeMsg) + " ")])] : e.isScheduleDataFirst && e.col.className || !e.nyott ? e.col.orderInfo && !e.isTicket ? [1 === e.col.orderInfo.dealState ? [s("div", [e._v("预订中")])] : 2 === e.col.orderInfo.dealState || 88 == e.col.orderInfo.dealState ? [s("div", [e._v(e._s(e.sellerMessage || "已预订"))])] : e.col.orderInfo.lockId ? [s("div", [e._v(e._s(e.sellerMessage))])] : e._e(), e.col.orderInfo.dealServiceUserList ? [e.col.orderInfo.dealServiceUserList.some((function(t) {
                return t.careerId == e.Careers.SPORTS_TEACH.key
            }
            )) ? s("div", [e._v(" 教练：" + e._s(e.col.orderInfo.dealServiceUserList.filter((function(t) {
                return t.careerId == e.Careers.SPORTS_TEACH.key
            }
            )).map((function(e) {
                return e.realName
            }
            )).join(",")) + " ")]) : e._e(), e.col.orderInfo.dealServiceUserList.some((function(t) {
                return t.careerId == e.Careers.SPORTS_TRAINER.key
            }
            )) ? s("div", [e._v(" 裁判：" + e._s(e.col.orderInfo.dealServiceUserList.filter((function(t) {
                return t.careerId == e.Careers.SPORTS_TRAINER.key
            }
            )).map((function(e) {
                return e.realName
            }
            )).join(",")) + " ")]) : e._e()] : e._e(), e._t("fight")] : e.col.expired && !e.isTicket ? [s("div", [e._v("已过期")])] : e.isNoBook(e.col) ? [s("div", [e._v("已占用")])] : e.isTicketDisabled(e.col.orderInfo) ? [s("div", [e._v(e._s(e.sellerMessage || e.closeMsg))])] : [s("div", [e.isReservation ? [e.isTicket ? [e._v(" " + e._s(e.col.orderInfo && e.col.orderInfo.surplusNum > 0 ? [e.showCanSell && "可约" + e.col.orderInfo.surplusNum, e.showSelled && "已约" + (e.col.orderInfo.salesNum || 0)].filter(Boolean).join("/") : "已约满") + " ")] : [e._v(" 可约 ")]] : [e._v(" " + e._s([e.showPrice && e.col.priceBean && (e.col.priceBean.price > 0 ? e.formatMoney(e.col.priceBean.price) + "元" : "免费")].concat(e.isTicket ? [e.col.orderInfo && e.showCanSell && "可售" + (e.col.orderInfo.surplusNum || 0), e.col.orderInfo && e.showSelled && "已售" + (e.col.orderInfo.salesNum || 0), !e.col.orderInfo && "无票"] : []).filter(Boolean).join("/")) + " ")]], 2), e.sellerMessage ? s("div", [e._v(" " + e._s(e.sellerMessage) + " ")]) : e._e()] : [s("div", [e._v(e._s(e.nyott) + "开放预订")])]], 2) : e._e()
        }
          , p = []
          , v = s(81318);
        const {Careers: g, OnlineBookingTypes: T} = v
          , I = {
            props: {
                col: Object,
                serverData: {
                    type: Object,
                    default() {
                        return {}
                    }
                },
                nyott: String,
                isTicket: Boolean,
                isReservation: Boolean,
                isScheduleDataFirst: Boolean,
                isNoBook: Function,
                isTicketDisabled: Function
            },
            data() {
                return {
                    Careers: g,
                    OnlineBookingTypes: T
                }
            },
            computed: {
                showPrice() {
                    var e;
                    return null === (e = this.serverData.viewShow) || void 0 === e ? void 0 : e.includes(1)
                },
                showCanSell() {
                    var e;
                    return null === (e = this.serverData.viewShow) || void 0 === e ? void 0 : e.includes(2)
                },
                showSelled() {
                    var e;
                    return null === (e = this.serverData.viewShow) || void 0 === e ? void 0 : e.includes(3)
                },
                sellerMessage() {
                    var e;
                    return null === (e = this.col) || void 0 === e || null === (e = e.orderInfo) || void 0 === e ? void 0 : e.sellerMessage
                },
                closeMsg() {
                    return null == this.col ? null : this.col.platformInfo.platformCloseAlert || "仅支持线下预订"
                }
            }
        }
          , b = I;
        var C = s(1001)
          , y = (0,
        C.Z)(b, f, p, !1, null, null, null);
        const k = y.exports;
        var S = s(47576)
          , w = s(22648)
          , x = s(45868)
          , F = s(4209)
          , D = s(12750)
          , _ = (s(21703),
        s(30381))
          , B = s.n(_)
          , L = s(3133);
        const A = {
            Platform: {
                key: 0,
                value: "场地"
            },
            ForeverRange: {
                key: 1,
                value: "固定场"
            },
            Course: {
                key: 2,
                value: "课程占场"
            },
            Locked: {
                key: 3,
                value: "锁场"
            }
        };
        var E = s(71994);
        const {ProfessionalTypes: N, SalesStates: $, OnlineBookingTypes: O, HourCancelTypes: j} = v
          , {PlatformDealTypes: P} = r;
        function q(e, t) {
            if (null != e && (e.push(t),
            t && t.colspan > 1))
                for (let s = 1; s < t.colspan; s++)
                    e.push(null)
        }
        const M = "Locked-"
          , R = {
            1: "col-inprocess",
            2: "col-scheduled",
            88: "col-completed"
        }
          , H = {
            mixins: [L.Z],
            data() {
                return {
                    atomic: 1,
                    loading: !1,
                    serverData: {
                        sportPlatformList: [],
                        sportPlatformPriceList: [],
                        sportPlatformHotBookingTimeList: [],
                        timeSlotList: [],
                        orderInfoList: []
                    },
                    selectedCols: []
                }
            },
            computed: {
                scheduleLoadFlag() {
                    const {salesId: e, venueGroupId: t, dateTime: s, salesItem: r} = this.params
                      , {salesItemId: i} = r || {};
                    return `${e || 0}-${i || 0}-${t || 0}-${s || 0}-${this.atomic}`
                },
                isTicket() {
                    const {salesItem: e} = this.params;
                    return (null === e || void 0 === e ? void 0 : e.itemType) === N.Ticket.key
                },
                columns() {
                    let e = [];
                    const t = {
                        level1: [],
                        level2: []
                    }
                      , {sportPlatformList: s} = this.serverData
                      , r = s || [];
                    return r.forEach((s=>{
                        0 === s.parentId ? t.level1.push(s) : e.push(s)
                    }
                    )),
                    t.level1.forEach((s=>{
                        const r = [];
                        s.subCount = 0,
                        e.forEach((function(e) {
                            e.parentId === s.venueId ? (e.parentVenueName = s.venueName,
                            s.subCount++,
                            t.level2.push(e)) : r.push(e)
                        }
                        )),
                        e = r
                    }
                    )),
                    t
                },
                platformInColumns() {
                    const e = [];
                    let t = 0;
                    return this.columns.level1.forEach((s=>{
                        if (0 === s.subCount) {
                            const {parentId: t, subCount: r, ...i} = s;
                            e.push({
                                ...i,
                                parentId: t,
                                brother: 1
                            })
                        } else
                            for (let r = 0; r < s.subCount; r++) {
                                const {parentId: r, subCount: i, ...o} = this.columns.level2[t++];
                                e.push({
                                    ...o,
                                    parentId: r,
                                    parentVenueName: s.venueName,
                                    parentVenuePriceId: s.venuePriceId,
                                    brother: s.subCount
                                })
                            }
                    }
                    )),
                    e
                },
                rows() {
                    const {orderInfoList: e, timeSlotList: t} = this.serverData
                      , s = t || []
                      , r = e || []
                      , i = [];
                    return s.forEach(((e,t)=>{
                        const o = []
                          , n = r.filter((t=>t.startTime <= e.startTime && t.endTime >= e.endTime));
                        this.columns.level1.forEach((e=>{
                            const r = n.filter((t=>{
                                if (t.venueId === e.venueId)
                                    return !0;
                                const s = this.filterPlatformSubIds(t.platformSubIds);
                                return (null == s || 0 === s.length) && this.columns.level2.some((s=>s.parentId === e.venueId && s.venueId === t.venueId))
                            }
                            ));
                            if (e.subCount > 0) {
                                const n = [];
                                this.columns.level2.filter((t=>t.parentId === e.venueId)).forEach((e=>{
                                    if (n.includes(e.venueId.toString()))
                                        return;
                                    const l = r.find((t=>{
                                        if (t.venueId === e.venueId)
                                            return !0;
                                        if (this.isTicket)
                                            return !0;
                                        const s = this.filterPlatformSubIds(t.platformSubIds);
                                        return !!s && s.includes(e.venueId.toString())
                                    }
                                    ))
                                      , a = n.length;
                                    if (l) {
                                        const e = this.filterPlatformSubIds(l.platformSubIds);
                                        e && e.length > 0 ? n.push(...e) : n.push(l.venueId.toString())
                                    }
                                    const c = n.length - a;
                                    q(o, this.buildCol(i, l, s, t, o.length, Math.max(c, 1)))
                                }
                                ))
                            } else
                                q(o, this.buildCol(i, r[0], s, t, o.length))
                        }
                        )),
                        i.push(o)
                    }
                    )),
                    i
                },
                viewRows() {
                    const {timeSlotList: e, sessionEnd: t} = this.serverData
                      , s = e || []
                      , r = this.currentServerTime;
                    return this.rows.map(((e,i)=>e.map(((e,o)=>{
                        const n = this.platformInColumns[o];
                        return n.onlineBooking !== O.Open.key || this.notYetOpenTimeText && !this.isScheduleDataFirst ? this.buildCol(null, null, s, i, o) : (e && (e.expired = e.endTime <= r || t > 0 && e.endTime - t <= r),
                        e)
                    }
                    ))))
                },
                notYetOpenTimeText() {
                    const {bookStartTime: e} = this.serverData;
                    if (e) {
                        const t = this.currentServerTime;
                        if (t && e > t) {
                            const t = B()(e);
                            return t.format("MM/DD HH:mm")
                        }
                    }
                    return null
                }
            },
            watch: {
                rows() {
                    this.selectedCols.splice(0, this.selectedCols.length)
                }
            },
            methods: {
                initReload() {
                    this.atomic++
                },
                async loadSchaduleServerData() {
                    this.serverData = {};
                    const {venueGroupId: e, dateTime: t, salesItem: s} = this.params
                      , {salesItemId: r} = s || {};
                    if (!t || !r)
                        return;
                    const i = {
                        salesItemId: r,
                        curDate: t,
                        venueGroupId: e
                    };
                    let o;
                    this.loading = !0;
                    try {
                        o = await Promise.all([this.$http.get("/pub/sport/venue/getSportVenueConfig", i), this.isTicket ? this.$http.get("/pub/sport/venue/getVenueTicketList", i) : this.$http.get("/pub/sport/venue/getVenueOrderList", i)])
                    } finally {
                        this.loading = !1
                    }
                    const n = o[0] || {}
                      , {venueTimeSlotResponses: l, venueResponses: a, venueHotBookingTimeResponses: c, venuePriceResponses: u, ...d} = n
                      , h = {
                        ...d,
                        timeSlotList: l,
                        sportPlatformList: a,
                        sportPlatformHotBookingTimeList: c,
                        sportPlatformPriceList: u
                    }
                      , m = o[1] || [];
                    if (this.isTicket)
                        h.orderInfoList = m;
                    else {
                        var f;
                        const e = Object.keys(R)
                          , t = null === (f = h.sportPlatformList) || void 0 === f ? void 0 : f.filter((e=>e.onlineBooking !== O.Open.key && (e.parentId > 0 || !h.sportPlatformList.some((t=>t.parentId === e.venueId)))));
                        h.orderInfoList = m.reduce(((s,r)=>{
                            if (!(r.dealPlatformType === P.Locked.key || r.dealState && e.includes(r.dealState.toString())))
                                return s;
                            if (r.dealPlatformType === P.Locked.key && (r.dealId = `${M}${r.lockId}`),
                            (null === t || void 0 === t ? void 0 : t.length) > 0) {
                                var i;
                                if (t.some((e=>e.venueId === r.venueId)))
                                    return s;
                                const e = null === (i = r.platformSubIds) || void 0 === i ? void 0 : i.split(",").map((e=>+e)).filter(Boolean);
                                if ((null === e || void 0 === e ? void 0 : e.length) > 0) {
                                    const i = t.filter((t=>null === e || void 0 === e ? void 0 : e.includes(t.venueId)));
                                    if (i.length > 0) {
                                        e.sort(((e,t)=>{
                                            const s = h.sportPlatformList.findIndex((t=>t.venueId === e))
                                              , r = h.sportPlatformList.findIndex((e=>e.venueId === t));
                                            return s - r || 0
                                        }
                                        ));
                                        const t = i.map((t=>e.indexOf(t.venueId)))
                                          , o = [];
                                        let n = 0;
                                        for (let s = 0; s < e.length; s++) {
                                            const i = t[0];
                                            if (s === i || null == i) {
                                                const s = e.slice(n, i);
                                                s.length > 0 && o.push({
                                                    ...r,
                                                    platformSubIds: s.join(",")
                                                }),
                                                n = i + 1,
                                                t.shift()
                                            }
                                        }
                                        return [...s, ...o]
                                    }
                                }
                            }
                            return [...s, r]
                        }
                        ), [])
                    }
                    this.serverData = h || {},
                    this.$emit("hourFun", h)
                },
                async check() {
                    if (this.notYetOpenTimeText)
                        throw S.Z.alert("未到开放预订"),
                        new Error("check failed.");
                    if (0 === this.selectedCols.length)
                        throw S.Z.alert("请先选择场地."),
                        new Error("check failed.");
                    const {ticketOrderBuyNum: e, maxBookingPiece: t, maxBookTime: s, singleMinBookTime: r, ticketDayMaxBuyNum: i, ticketOrderMaxBuyNum: o} = this.serverData
                      , {hourCancel: n, cancelBooking: l, hourCancelType: a} = this.params.salesItem || {};
                    if (this.isTicket) {
                        if (e > 0 && this.selectedCols.length > e)
                            throw S.Z.alert(`最大可预订 ${e} 张票，请取消部分后再试`),
                            new Error("check failed.");
                        const t = i > 0 && o > 0 ? Math.min(i, o) : Math.max(i || 0, o || 0, 0);
                        if (t > 0 && this.selectedCols.length > t)
                            throw S.Z.alert(`每单限购 ${t}张票`),
                            new Error("check failed.")
                    }
                    const c = new Set
                      , u = new Set;
                    if (this.selectedCols.forEach((e=>{
                        const {platformInfo: {venueId: t, remark: s}} = e;
                        t && u.has(t) || (u.add(t),
                        s && c.add(s))
                    }
                    )),
                    t > 0 && u.size > t)
                        throw S.Z.alert(`最大可预订场地数量 ${t}，请取消部分后再试`),
                        new Error("check failed.");
                    if (s) {
                        const e = []
                          , t = this.selectedCols.reduce(((t,s)=>{
                            const {platformInfo: {parentId: r, brother: i}, rowIndex: o, endTime: n, startTime: l} = s;
                            if (e.some((({parentId: e, rowIndex: t})=>e === r && t === o)))
                                return t;
                            if (i > 1) {
                                const t = this.selectedCols.filter((({platformInfo: {parentId: e}, rowIndex: t})=>r === e && t === o));
                                t.length === i && e.push(...t.map((({platformInfo: {parentId: e}, rowIndex: t})=>({
                                    parentId: e,
                                    rowIndex: t
                                }))))
                            }
                            return t + (n - l)
                        }
                        ), 0);
                        if (t > s)
                            throw S.Z.alert(`您选择的时段，已超过最大可预订（${this.formatTimeDuration(s)}）限制，请取消部分后再试;`),
                            new Error("check failed.")
                    }
                    if (this.selectedCols.filter((e=>e.hotTimeBean && e.hotTimeBean.vaildMinBookingTime)).some((e=>{
                        const t = this.isUnBrokenHotTime(e);
                        if (!t) {
                            const t = this.getHotTimeSeriesCols(e)
                              , {hotTimeBean: {singleMinBookTime: s, startTime: r, endTime: i}, platformInfo: {parentVenueName: o, venueName: n}} = e;
                            if (t.reduce(((e,t)=>this.selectedCols.includes(t) ? e + (t.endTime - t.startTime) : e), 0) < s)
                                return S.Z.alert(`${o || ""}${o ? "-" : ""}${n}此时段 ${this.formatHM(r)}-${this.formatHM(i)}起步预订需要 ${(0,
                                D.hi)(s, 6e4)}分钟`),
                                !0
                        }
                        return !1
                    }
                    )))
                        throw new Error("check failed.");
                    if (r) {
                        const e = [...this.selectedCols].sort(((e,t)=>e.colIndex < t.colIndex ? -1 : e.colIndex > t.colIndex ? 1 : e.rowIndex - t.rowIndex));
                        let t = 0;
                        if (e.some(((s,i)=>{
                            t += s.endTime - s.startTime;
                            const o = e[i + 1];
                            if (null == o || o.colIndex !== s.colIndex || o.startTime !== s.endTime) {
                                if (t < r) {
                                    const t = s;
                                    let o = t
                                      , n = i;
                                    do {
                                        const s = e[n - 1];
                                        if (null == s || s.colIndex !== t.colIndex || s.endTime !== o.startTime)
                                            break;
                                        o = s,
                                        n--
                                    } while (1);
                                    if (o && this.isAvailable((this.rows[o.rowIndex - 1] || [])[o.colIndex], o) || t && this.isAvailable((this.rows[t.rowIndex + 1] || [])[t.colIndex], t)) {
                                        const {platformInfo: {parentVenueName: e, venueName: s}} = t;
                                        return S.Z.alert(`${e || ""}${e ? "-" : ""}${s}单个场地每个已选的连续时间段起步预订需要 ${(0,
                                        D.hi)(r, 6e4)}分钟`),
                                        !0
                                    }
                                }
                                t = 0
                            }
                            return !1
                        }
                        )))
                            throw new Error("check failed.")
                    }
                    l || await S.Z.confirm("您选择场地下单成功后不可退、换，请谨慎下单！确认继续？");
                    const d = this.selectedCols.sort(((e,t)=>e.startTime - t.startTime))[0]
                      , h = d.startTime - this.currentServerTime;
                    h < 0 && await S.Z.confirm("您选择的场次时段已开场，若下单成功后，不可退、换，请谨慎下单！确认继续？");
                    const m = a === j.Start.key
                      , f = m ? h : d.endTime - this.currentServerTime;
                    if (f > 0 && f < n) {
                        const e = this.formatTimeDuration(n)
                          , t = `您选择的场次时段，离 ${m ? "开场" : "结束"}时间已不足 ${e}，若下单成功，不可退、换、更改，请谨慎下单！确认继续？`;
                        await S.Z.confirm(t)
                    }
                    if (c.size > 0)
                        for (const p of c)
                            await S.Z.confirm(p)
                },
                isTicketDisabled(e) {
                    return this.isTicket && (null == e || e.salesState !== $.Unlimit.key)
                },
                isNoBook(e) {
                    if (e.noBook)
                        return !0;
                    const t = e.platformInfo.platformShareIds;
                    return !!(Array.isArray(t) && t.length > 0) && this.selectedCols.some((({rowIndex: s, platformInfo: {venueId: r}})=>s === e.rowIndex && t.includes(r)))
                },
                getHotTimeSeriesCols(e) {
                    if (null == e)
                        return null;
                    const {hotTimeBean: t, colIndex: s} = e;
                    if (null == t)
                        return null;
                    const {timeSlotList: r} = this.serverData
                      , i = r || [];
                    let o = -1
                      , n = -1;
                    const l = [];
                    return i.some(((e,s)=>(o < 0 && e.startTime === t.startTime && (o = s),
                    n < 0 && e.endTime === t.endTime && (n = s),
                    o >= 0 && l.push(this.rows[s]),
                    n >= 0))),
                    l.map((e=>e[s]))
                },
                isUnBrokenHotTime(e) {
                    if (this.isTicket)
                        return !1;
                    const t = this.getHotTimeSeriesCols(e);
                    return null != t && 0 !== t.length && t.every((e=>!(null == e || e.platformInfo.onlineBooking !== O.Open.key || this.notYetOpenTimeText || e.className || e.rowspan > 1 || e.colspan > 1)))
                },
                isAvailableStatic(e) {
                    return !(null == e || e.expired || null == e.priceBean || this.isNoBook(e) || e.platformInfo.onlineBooking !== O.Open.key || this.notYetOpenTimeText || e.className || e.freeRange || e.rowspan > 1 || e.colspan > 1)
                },
                isAvailable(e, t) {
                    if (!this.isAvailableStatic(e) || this.selectedCols.includes(e))
                        return !1;
                    if (this.isUnBrokenHotTime(e)) {
                        if (this.isUnBrokenHotTime(t)) {
                            const s = this.getHotTimeSeriesCols(t);
                            return s.includes(e)
                        }
                        return !1
                    }
                    return !0
                },
                getHotTime(e, t) {
                    if (null == e || null == t || !(t.hotTimeId > 0))
                        return null;
                    const {sportPlatformHotBookingTimeList: s} = this.serverData
                      , r = s || [];
                    return r.find((s=>s.hotId === t.hotTimeId && s.startTime <= e.startTime && s.endTime >= e.endTime))
                },
                getPriceConfig(e, t) {
                    if (null == e || null == t)
                        return {};
                    const {venuePriceId: s, parentVenuePriceId: r} = t
                      , {sportPlatformPriceList: i} = this.serverData
                      , o = i || [];
                    let n, l;
                    return o.some((t=>(t.startTime <= e.startTime && t.endTime >= e.endTime && (t.priceId === s ? n = t : t.priceId === r && (l = t)),
                    !(!n || !l)))),
                    n ? {
                        priceBean: n,
                        parentPriceBean: l
                    } : {}
                },
                filterPlatformSubIds(e) {
                    const {sportPlatformList: t} = this.serverData
                      , s = t || []
                      , r = null === e || void 0 === e ? void 0 : e.split(",").filter((e=>{
                        const t = +e;
                        return t > 0 && s.some((e=>e.venueId === t))
                    }
                    ));
                    return r
                },
                buildCol(e, t, s, r, i, o=1) {
                    var n;
                    let l = 1;
                    if (e) {
                        const n = e.filter(((e,t)=>t < r)).some(((e,t)=>{
                            const s = e[i];
                            return null != s && s.rowspan + t - r > 0
                        }
                        ));
                        if (n)
                            return null;
                        if (o < 2 && t) {
                            let e = r;
                            while (1) {
                                const r = s[e + 1];
                                if (null == r)
                                    break;
                                r.endTime <= t.endTime && l++,
                                e++
                            }
                        }
                    }
                    const a = s[r]
                      , c = this.platformInColumns[i]
                      , {priceBean: u, parentPriceBean: d} = this.getPriceConfig(a, c)
                      , h = this.getHotTime(a, c)
                      , m = this.isTicketDisabled(t)
                      , f = !m && t && t.surplusNum <= 0
                      , p = []
                      , v = [];
                    if ((null === (n = this.columns.level2) || void 0 === n ? void 0 : n.length) > 0 && this.columns.level2.forEach(((e,t)=>{
                        e.parentId === c.parentId && e.venueId !== c.venueId && v.push(t)
                    }
                    )),
                    t) {
                        const e = R[t.dealState];
                        e && p.push(e),
                        t.dealPlatformType === P.Locked.key && p.push("col-locked")
                    }
                    m && p.push("col-ticket-disabled"),
                    f && p.push("col-ticket-empty");
                    const {dateTime: g} = this.params
                      , {startTime: T, endTime: I, viewType: b, shareIds: C} = a;
                    let y = T
                      , k = I;
                    return t && (y = t.startTime,
                    k = t.endTime),
                    {
                        key: `${r}-${i}`,
                        rowIndex: r,
                        colIndex: i,
                        _startTime: y,
                        _endTime: k,
                        startTime: (0,
                        w.tA)(g, y),
                        endTime: (0,
                        w.tA)(g, k, !0),
                        startTimeText: (0,
                        E.Uk)(y),
                        endTimeText: (0,
                        E.m3)(k),
                        priceBean: u,
                        parentPriceBean: d,
                        hotTimeBean: h,
                        colspan: o,
                        rowspan: l,
                        freeRange: 2 === b,
                        platformInfo: c,
                        orderInfo: t,
                        className: p.join(" "),
                        noBook: null === C || void 0 === C ? void 0 : C.includes(c.venueId),
                        broColIdxList: v
                    }
                }
            }
        };
        var Z = s(79205);
        const {Careers: V, BookingTypes: U, OpenTimeShowTypes: W, SalesStates: z, OnlineBookingTypes: G} = v
          , Y = "select-cols-cache"
          , K = {
            components: {
                Card: Z.Z,
                SpTicketCell: m.Z,
                ScheduleColMsg: k
            },
            mixins: [H],
            props: {
                params: {
                    type: Object,
                    required: !0
                },
                maxHeight: Number
            },
            data() {
                const e = x.U.get(Y);
                return {
                    Careers: V,
                    SalesStates: z,
                    OnlineBookingTypes: G,
                    colWidth: 100,
                    selectedColsCache: e,
                    fightStates: {
                        request: 1,
                        requestIng: 2,
                        respond: 3
                    },
                    fightDialogShow: !1,
                    fightDialogCol: null,
                    form: {}
                }
            },
            computed: {
                fightDialogUserCareerMapping() {
                    if (null == this.fightDialogCol)
                        return null;
                    const e = this.fightDialogCol.orderInfo.dealServiceUserList || []
                      , t = {};
                    return e.forEach((e=>{
                        null == t[e.careerId] && (t[e.careerId] = []),
                        t[e.careerId].push(e)
                    }
                    )),
                    t
                },
                fightDialogBroCol() {
                    if (this.fightDialogState === this.fightStates.request || this.fightDialogState === this.fightStates.respond) {
                        const e = this.getFightBroCols(this.fightDialogCol);
                        return null === e || void 0 === e ? void 0 : e[0]
                    }
                    return null
                },
                fightDialogState() {
                    return this.getFightState(this.fightDialogCol)
                },
                isScheduleDataFirst() {
                    var e;
                    return (null === (e = this.params.salesItem) || void 0 === e ? void 0 : e.openTimeShowData) === W.ShowOccupyData.key
                },
                isReservation() {
                    var e;
                    return (null === (e = this.params.salesItem) || void 0 === e ? void 0 : e.bookingType) === U.Reservation.key
                },
                colLength() {
                    return this.platformInColumns.length
                },
                tableWidth() {
                    return this.colLength <= 3 ? null : this.colLength * this.colWidth
                },
                bodyStyle() {
                    return {
                        "max-height": this.maxHeight > 0 && this.maxHeight + "px"
                    }
                },
                maxNum() {
                    const {ticketDayMaxBuyNum: e, ticketOrderMaxBuyNum: t} = this.serverData;
                    return e > 0 && t > 0 ? Math.min(e, t) : Math.max(e || 0, t || 0, 0)
                }
            },
            watch: {
                scheduleLoadFlag() {
                    this.loadSchaduleServerData().then(this.emitTableReload)
                },
                selectedCols() {
                    this.emitSelected();
                    const {salesId: e, venueGroupId: t, dateTime: s, salesItem: r, useCounterTemplate: i} = this.params;
                    this.isTicket;
                    const {itemId: o, salesItemId: n} = r || {};
                    x.U.put(Y, {
                        itemId: o,
                        salesId: e,
                        salesItemId: n,
                        venueGroupId: t,
                        dateTime: s,
                        cols: this.selectedCols
                    })
                },
                "params.selectedSlotStartTime"() {
                    this.selectedCols = [],
                    this.resetForm();
                    const e = this.$refs["body-wrapper"];
                    e && (e.scrollTop = 0)
                },
                viewRows(e, t) {
                    (null === e || void 0 === e ? void 0 : e.length) > 0 && !((null === t || void 0 === t ? void 0 : t.length) > 0) && this.resetForm()
                }
            },
            mounted() {
                this.$nextTick((()=>{
                    const e = this.$refs["body-wrapper"];
                    e && e.addEventListener("scroll", this.tableScrollFn)
                }
                ))
            },
            destroyed() {
                if (this.tableScrollFn) {
                    const e = this.$refs["body-wrapper"];
                    e && e.removeEventListener("scroll", this.tableScrollFn)
                }
            },
            methods: {
                emitSelected() {
                    const {useCounterTemplate: e} = this.params
                      , t = []
                      , s = this.selectedCols.reduce(((s,r)=>{
                        const {platformInfo: i, priceBean: o, parentPriceBean: n, rowIndex: l, orderInfo: a} = r;
                        if (this.isTicket && e) {
                            const {venueId: e} = i
                              , {venueTicketId: t} = a
                              , {price: r} = o
                              , {value: n} = this.form[e][t] || {};
                            return (0,
                            D.IH)(s, (0,
                            D.dC)(n || 0, r))
                        }
                        if (t.includes(r))
                            return s;
                        if (i.brother > 1 && n) {
                            const e = this.selectedCols.filter((e=>e.platformInfo.parentId === i.parentId && l === e.rowIndex));
                            if (e.length === i.brother)
                                return t.push(...e),
                                (0,
                                D.IH)(s, n.price || 0)
                        }
                        return (0,
                        D.IH)(s, (null === o || void 0 === o ? void 0 : o.price) || 0)
                    }
                    ), 0);
                    this.$emit("selectedReload", this.selectedCols.length, s)
                },
                throttleScrollLeft: (0,
                n.throttle)(5, (function() {
                    const e = this.$refs["header-wrapper"];
                    if (!e)
                        return;
                    const t = this.$refs["body-wrapper"];
                    e.scrollLeft = t.scrollLeft
                }
                )),
                tableScrollFn() {
                    window.requestAnimationFrame(this.throttleScrollLeft)
                },
                resetForm() {
                    var e;
                    const t = {};
                    null === (e = this.viewRows) || void 0 === e || e.forEach((e=>{
                        null === e || void 0 === e || e.forEach((e=>{
                            if (!e)
                                return;
                            const {orderInfo: s, platformInfo: r} = e;
                            if (s) {
                                const i = this.ifCounterShowCol(e) && !this.ifCounterDisableCol(e)
                                  , {venueId: o} = r;
                                t[o] = t[o] || {};
                                const n = i && 1 === this.viewRows[0].length ? 1 : 0;
                                t[o][s.venueTicketId] = {
                                    value: n,
                                    col: e
                                },
                                n > 0 && i && this.onSelect(e)
                            }
                        }
                        ))
                    }
                    )),
                    this.form = t
                },
                emitTableReload() {
                    const {salesId: e, venueGroupId: t, dateTime: s, salesItem: r, useCounterTemplate: i} = this.params
                      , {itemId: o, salesItemId: n} = r || {}
                      , l = this.currentServerTime
                      , a = this.$refs["header-wrapper"]
                      , {sportPlatformList: c, timeSlotList: u, salesName: d, bookAlert: h, verificationCode: m} = this.serverData
                      , f = c || [];
                    this.$nextTick((()=>{
                        this.$emit("dataReload", {
                            salesName: d,
                            marqueeText: h,
                            headerHeight: a ? Math.max(a.offsetHeight, a.clientHeight) : 0,
                            ifVerification: m,
                            timeSlotList: u,
                            allIsOffline: f.length > 0 && f.every((e=>e.onlineBooking !== G.Open.key))
                        });
                        const r = this.selectedColsCache;
                        if (r && r.cols.length > 0 && r.salesId === e && r.itemId === o && r.salesItemId === n && r.venueGroupId === t && r.dateTime === s) {
                            const e = [];
                            r.cols.forEach((t=>{
                                var s;
                                const {rowIndex: r, colIndex: i, startTime: o, endTime: n, hotTimeBean: l} = t
                                  , a = null === (s = this.rows[r]) || void 0 === s ? void 0 : s[i];
                                null != a ? this.isAvailableStatic(a) && o === a.startTime && n === a.endTime ? null == l && null != a.hotTimeBean || null != l && null == a.hotTimeBean ? console.log("热门时段变化1, 丢弃") : !l || !a.hotTimeBean || l.hotId === a.hotTimeBean.hotId && l.startTime === a.hotTimeBean.startTime && l.endTime === a.hotTimeBean.endTime ? this.checkAllFightColsAvailable(a) ? e.push(a) : console.log("不符合应战需要的整体，丢弃") : console.log("热门时段变化2, 丢弃") : console.log("不可用了，或者时间不对了, 丢弃") : console.log("nCol == null, 丢弃")
                            }
                            )),
                            this.selectedCols = e
                        }
                        const c = this.$refs["body-wrapper"];
                        if ((!this.isTicket || !i) && (0,
                        w.KC)(s, l)) {
                            const e = l
                              , t = this.rows.findIndex((t=>{
                                const s = t[0];
                                return null != s && (s.startTime >= e || s.startTime <= e && s.endTime > e)
                            }
                            ));
                            if (t > -1) {
                                const e = [...c.querySelectorAll("tbody tr")];
                                return void setTimeout((()=>{
                                    c.scrollTop = e[t].offsetTop
                                }
                                ), 0)
                            }
                        }
                        c && (c.scrollTop = 0)
                    }
                    ))
                },
                checkAllFightColsAvailable(e) {
                    const t = this.getFightBroCols(e);
                    if ((null === t || void 0 === t ? void 0 : t.length) > 0) {
                        const e = this.getFightBroCols(t[0]);
                        return e.length === t[0].rowspan && e.every((e=>this.isAvailableStatic(e)))
                    }
                    return !0
                },
                ifCounterShowCol(e) {
                    const t = !(null == e || e.expired);
                    return !!t && this.params.selectedSlotStartTime === e._startTime
                },
                ifCounterDisableCol(e) {
                    const t = !!(null == e || null == e.priceBean || this.isNoBook(e) || e.platformInfo.onlineBooking !== G.Open.key || this.notYetOpenTimeText || e.className);
                    return t
                },
                onTicketChange(e, t) {
                    this.form[e.platformInfo.venueId][e.orderInfo.venueTicketId].value = t;
                    const s = this.selectedCols.indexOf(e);
                    t > 0 ? s < 0 && this.onSelect(e) : s >= 0 && this.onSelect(e),
                    this.emitSelected()
                },
                onSelect(e, t) {
                    const s = e.expired || e.platformInfo.onlineBooking !== G.Open.key || null == e.priceBean || this.notYetOpenTimeText || this.isNoBook(e);
                    if ((s || e.className) && !t)
                        return void (s || !e.orderInfo || 1 !== e.orderInfo.isFightDeal || e.colspan > 1 || (this.fightDialogCol = e,
                        this.fightDialogShow = !0));
                    const r = this.selectedCols.includes(e);
                    if (!r && !this.checkAllFightColsAvailable(e))
                        return S.Z.alert("不满足应战规则，请联系服务人员下单"),
                        1;
                    const i = [];
                    if (this.getLinkageCols(e, r, i, e))
                        return;
                    if (r)
                        return void i.forEach((e=>{
                            const t = this.selectedCols.indexOf(e);
                            t >= 0 && this.selectedCols.splice(t, 1)
                        }
                        ));
                    let o = 0;
                    i.forEach((e=>{
                        this.selectedCols.includes(e) || (this.selectedCols.push(e),
                        o += e.endTime - e.startTime)
                    }
                    ));
                    const n = this.isUnBrokenHotTime(e);
                    if (this.isTicket || e.freeRange && !n)
                        return;
                    const l = this.serverData.everyAddTime;
                    if (l) {
                        let t = 1
                          , s = i[i.length - 1];
                        while (o < l) {
                            const r = this.isUnBrokenHotTime(s)
                              , n = this.rows[s.rowIndex + t];
                            let l = null;
                            if (null == n || (()=>{
                                if (l = n[e.colIndex],
                                !this.isAvailableStatic(l) || this.selectedCols.includes(l))
                                    return !0;
                                if (this.isUnBrokenHotTime(l)) {
                                    if (r) {
                                        const e = this.getHotTimeSeriesCols(s);
                                        return !e.includes(l)
                                    }
                                    return !0
                                }
                                const t = this.getFightBroCols(l);
                                return (null === t || void 0 === t ? void 0 : t.length) > 0
                            }
                            )()) {
                                if (t < 0)
                                    break;
                                t = -1,
                                s = i[0]
                            } else
                                o += l.endTime - l.startTime,
                                this.selectedCols.push(l),
                                s = l
                        }
                    }
                },
                checkOneInListMatchFight(e, t, s, r) {
                    const i = this.getFightBroCols(e);
                    if ((null === i || void 0 === i ? void 0 : i.length) > 0) {
                        if (!this.checkAllFightColsAvailable(e))
                            return S.Z.alert("无法选中，本时段与对战规则冲突"),
                            !0;
                        const o = this.getFightBroCols(i[0])
                          , n = o.find((e=>!s.includes(e)));
                        if (n) {
                            s.push(n);
                            const e = this.getLinkageCols(n, t, s, r);
                            if (e)
                                return !0
                        }
                    }
                },
                getLinkageCols(e, t, s, r) {
                    if (null == s)
                        return !0;
                    if (this.checkOneInListMatchFight(e, t, s, r))
                        return !0;
                    const i = this.isUnBrokenHotTime(e);
                    let o = [e];
                    if (i) {
                        const i = t ? [...s, ...this.selectedCols] : s
                          , {singleMinBookTime: n} = e.hotTimeBean
                          , l = this.getHotTimeSeriesCols(e).filter((e=>!e.expired))
                          , a = i.filter((e=>l.includes(e)))
                          , c = l.indexOf(e)
                          , u = l.indexOf(r)
                          , d = l[u - 1]
                          , h = l[u + 1];
                        if (t) {
                            if (d && i.includes(d) && h && i.includes(h))
                                return S.Z.alert("无法取消选中，本时段内预订不可间隔，请从上下边缘逐个取消选中"),
                                !0
                        } else if (a.length > 0 && !(d && i.includes(d) || h && i.includes(h)))
                            return S.Z.alert("无法选中，本时段内预订不可间隔"),
                            !0;
                        if (n) {
                            const s = a.reduce(((e,{endTime: t, startTime: s})=>e + (t - s)), 0);
                            if (t && s - (e.endTime - e.startTime) <= n)
                                o = a;
                            else {
                                const e = [];
                                let t = s
                                  , r = 1
                                  , i = c;
                                do {
                                    const s = l[i];
                                    r > 0 ? e.push(s) : e.unshift(s);
                                    const {endTime: o, startTime: n} = s;
                                    if (t += o - n,
                                    i += r,
                                    r > 0 && i > l.length - 1 && (r = -1,
                                    i = c - 1),
                                    r < 0 && i < 0)
                                        break
                                } while (t < n);
                                o = e
                            }
                        } else
                            o = l
                    }
                    return o.forEach((e=>{
                        s.includes(e) || s.push(e)
                    }
                    )),
                    !!o.some((e=>this.checkOneInListMatchFight(e, t, s, r)))
                },
                cache() {
                    const e = []
                      , {salesId: t, dateTime: s, salesItem: r, useCounterTemplate: i} = this.params
                      , {salesItemId: o} = r || {}
                      , n = (e,r,o)=>{
                        const {platformInfo: {venueId: n, parentId: l, parentVenueName: a, venueName: c, brother: u, selectPubStudy: d, validPubStudy: h, faceValidMode: m}, _startTime: f, _endTime: p, priceBean: v, colIndex: g, rowIndex: T, orderInfo: I} = e;
                        if (this.isTicket) {
                            const {venueTicketId: e} = I || {};
                            return {
                                venueId: n,
                                venueTicketId: e,
                                orderDate: s,
                                startTime: (0,
                                w.tA)(s, f),
                                endTime: (0,
                                w.tA)(s, p, !0),
                                priceBean: v,
                                platformInfo: {
                                    parentId: l,
                                    parentVenueName: a,
                                    venueName: c
                                },
                                maxBuyNum: this.maxNum,
                                buyNum: i ? this.form[n][e].value : null,
                                orderInfo: I,
                                selectPubStudy: d,
                                validPubStudy: h,
                                faceValidMode: m
                            }
                        }
                        return {
                            salesId: t,
                            parentId: r ? 0 : l,
                            venueId: r ? l : n,
                            orderDate: s,
                            startTime: f,
                            endTime: p,
                            colspan: r ? u : 1,
                            rowspan: 1,
                            colIndex: g,
                            rowIndex: T,
                            selectPubStudy: d,
                            validPubStudy: h,
                            faceValidMode: m,
                            matchDealPlatformId: o
                        }
                    }
                    ;
                    return this.isTicket ? this.selectedCols.forEach((t=>{
                        e.push(n(t))
                    }
                    )) : this.selectedCols.sort(((e,t)=>e.rowIndex < t.rowIndex || e.colIndex < t.colIndex ? -1 : 1)).forEach((t=>{
                        var s;
                        const {parentId: r, venueId: i, brother: o} = t.platformInfo
                          , l = this.getFightBroCols(t)
                          , a = null === l || void 0 === l || null === (s = l[0]) || void 0 === s || null === (s = s.orderInfo) || void 0 === s ? void 0 : s.dealId
                          , c = this.selectedCols.filter((e=>e.platformInfo.parentId === r && t.rowIndex === e.rowIndex));
                        if (0 === r || c.length < o) {
                            if (0 === t.rowIndex)
                                return void e.push(n(t, !1, a));
                            const s = e.filter((e=>e.venueId === i && e.colIndex === t.colIndex && e.rowIndex < t.rowIndex));
                            if (0 === s.length)
                                return void e.push(n(t, !1, a));
                            const r = s[s.length - 1];
                            if (r.rowIndex + 1 === t.rowIndex && r.endTime === t._startTime && r.matchDealPlatformId === a)
                                return r.endTime = t._endTime,
                                r.rowspan++,
                                void r.rowIndex++;
                            e.push(n(t, !1, a))
                        } else
                            e.some((e=>0 === e.parentId && e.venueId === r && e.rowIndex === t.rowIndex)) || e.push(n(t, o > 1))
                    }
                    )),
                    {
                        bookStartTime: this.serverData.bookStartTime || 0,
                        ifVerification: this.serverData.verificationCode,
                        list: e,
                        selectSysUser: this.serverData.selectSysUser,
                        salesId: t,
                        salesItemId: o
                    }
                },
                getFightBorderColor(e) {
                    return "white" === e || "#fff" === e || "#ffffff" === e ? F.m9.black : null
                },
                getFightBroCols(e) {
                    var t;
                    if (null == e)
                        return null;
                    const {broColIdxList: s, rowIndex: r, rowspan: i, orderInfo: o, platformInfo: n} = e;
                    if (0 === (null === s || void 0 === s ? void 0 : s.length))
                        return null;
                    if (o && (null === (t = o.platformSubIds) || void 0 === t ? void 0 : t.split(",").length) === n.brother)
                        return null;
                    if (o && 1 !== o.isFightDeal)
                        return null;
                    if (o) {
                        const e = s.reduce(((e,t)=>{
                            for (let o = r; o - r < i; o++) {
                                var s;
                                const r = null === (s = this.rows[o]) || void 0 === s ? void 0 : s[t];
                                r && e.push(r)
                            }
                            return e
                        }
                        ), []);
                        return e
                    }
                    const l = s.reduce(((e,t)=>{
                        const s = this.rows[r][t];
                        var i;
                        if (s)
                            return null == s.orderInfo || 1 === (null === (i = s.orderInfo) || void 0 === i ? void 0 : i.isFightDeal) && e.push(s),
                            e;
                        for (let l = r - 1; l >= 0; l--) {
                            var o;
                            const s = null === (o = this.rows[l]) || void 0 === o ? void 0 : o[t];
                            if (s) {
                                var n;
                                if (null == s.orderInfo)
                                    return e;
                                if (1 === (null === (n = s.orderInfo) || void 0 === n ? void 0 : n.isFightDeal))
                                    return e.push(s),
                                    e
                            }
                        }
                        return e
                    }
                    ), []);
                    return l
                },
                respondFight() {
                    if (this.fightDialogState !== this.fightStates.requestIng)
                        return;
                    const e = this.getFightBroCols(this.fightDialogCol);
                    if (null == e || 0 === e.length)
                        return void S.Z.alert("不可应战");
                    this.selectedCols = [];
                    const t = this.onSelect(e[0], !0);
                    1 !== t && this.$emit("gotoNext")
                },
                getFightClass(e) {
                    const t = this.getFightState(e);
                    switch (t) {
                    case this.fightStates.request:
                        return "col-fight-request";
                    case this.fightStates.respond:
                        return "col-fight-respond";
                    case this.fightStates.requestIng:
                        return "col-fight-ing";
                    default:
                    }
                    return ""
                },
                getFightState(e) {
                    var t;
                    if (null == e)
                        return;
                    const {broColIdxList: s, orderInfo: r, platformInfo: i, rowIndex: o} = e;
                    if (0 === (null === s || void 0 === s ? void 0 : s.length))
                        return;
                    if (null == r || 1 !== r.isFightDeal)
                        return;
                    if ((null === (t = r.platformSubIds) || void 0 === t ? void 0 : t.split(",").length) === i.brother)
                        return;
                    const n = s.reduce(((e,t)=>{
                        for (let r = o; r >= 0; r--) {
                            var s;
                            const i = null === (s = this.rows[r]) || void 0 === s ? void 0 : s[t];
                            if (i) {
                                e.push(i);
                                break
                            }
                        }
                        return e
                    }
                    ), [])
                      , l = n.find((e=>null != e && null != e.orderInfo));
                    return l ? l.orderInfo.createTime > r.createTime ? this.fightStates.request : this.fightStates.respond : this.fightStates.requestIng
                },
                popupFun() {
                    S.Z.alert("超出最大限购数")
                }
            }
        }
          , J = K;
        var Q = (0,
        C.Z)(J, d, h, !1, null, "595a400c", null);
        const X = Q.exports;
        var ee = s(51529)
          , te = s(86560)
          , se = s(39259)
          , re = s(43378);
        const {SalesBookingTypes: ie, ProfessionalTypes: oe, BookingTempTypes: ne, HourCancelTypes: le} = v
          , ae = {
            components: {
                Slider: c.Z,
                ScheduleTable: X,
                MarqueeBox: u.Z,
                FixedCircleButton: ee.Z,
                HomePageNav: a.Z,
                NeVerify: te.Z
            },
            mixins: [L.Z, se.Z],
            validate({params: e}) {
                return /^\d+$/.test(e.id)
            },
            data() {
                return {
                    SalesBookingTypes: ie,
                    HourCancelTypes: le,
                    tableMaxHeight: 0,
                    totalPrice: 0,
                    colLength: 0,
                    flushData: {},
                    serverData: {
                        bookingType: null,
                        templateType: null,
                        salesTelList: [],
                        itemDataList: [],
                        dateDataList: []
                    },
                    salesId: +this.$route.params.id || null,
                    salesItemId: null,
                    curDate: null,
                    venueGroupId: null,
                    selectedSlotStartTime: null,
                    ready: !1,
                    hourObj: {}
                }
            },
            head() {
                const e = {
                    title: this.flushData.salesName || "预订"
                };
                return e
            },
            computed: {
                nextBtnDisText() {
                    const {bookingType: e} = this.serverData;
                    if (null == e)
                        return "无数据";
                    switch (e) {
                    case ie.Booking.key:
                    case ie.Reservation.key:
                    case ie.FreeBooking.key:
                        return null;
                    default:
                    }
                    return this.formatModel(ie, e)
                },
                canNext() {
                    return !this.nextBtnDisText && this.colLength > 0
                },
                isTicket() {
                    var e;
                    return (null === (e = this.item) || void 0 === e ? void 0 : e.itemType) === oe.Ticket.key
                },
                itemAgreementId() {
                    var e;
                    return null === (e = this.item) || void 0 === e ? void 0 : e.agreement
                },
                entranceRequire() {
                    var e;
                    return null === (e = this.item) || void 0 === e ? void 0 : e.entranceRequire
                },
                item() {
                    var e;
                    return null === (e = this.serverData.itemDataList) || void 0 === e ? void 0 : e.find((e=>e.salesItemId === this.salesItemId))
                },
                useCounterTemplate() {
                    const {templateType: e} = this.serverData;
                    return e === ne.Counter.key
                },
                scheduleTableParams() {
                    return {
                        salesId: this.salesId,
                        dateTime: this.curDate,
                        venueGroupId: this.venueGroupId,
                        salesItem: this.item,
                        useCounterTemplate: this.useCounterTemplate,
                        selectedSlotStartTime: this.selectedSlotStartTime
                    }
                },
                saveSupportInfo() {
                    const {ifVerification: e} = this.flushData || {};
                    return {
                        salesItemId: this.salesItemId,
                        salesId: this.salesId,
                        orderDate: this.curDate,
                        ifVerification: e
                    }
                }
            },
            watch: {
                salesItemId() {
                    this.onSwitchItem()
                },
                selectedSlotStartTime() {
                    this.adjustSlotStartTime()
                },
                curDate() {
                    this.adjustSlotStartTime()
                }
            },
            mounted() {
                this.$http.get("/pub/sport/venue/getSalesItemList", {
                    salesId: this.salesId
                }).then((e=>{
                    const {bookingType: t, templateType: s, salesItemVOList: r, salesTelVOList: i} = e || {};
                    Object.assign(this.serverData, {
                        itemDataList: r || [],
                        bookingType: t,
                        templateType: s,
                        salesTelList: null === i || void 0 === i ? void 0 : i.filter((e=>e.salesTel))
                    });
                    const o = +this.$route.query.itemid
                      , n = +this.$route.query.salesItemId;
                    if (n) {
                        const e = this.serverData.itemDataList.find((e=>e.salesItemId === n));
                        e && (this.salesItemId = e.salesItemId)
                    } else if (o) {
                        const e = this.serverData.itemDataList.find((e=>e.itemId === o));
                        e && (this.salesItemId = e.salesItemId)
                    }
                    this.ready = !0
                }
                )),
                window.addEventListener("resize", this.windowResizeListener)
            },
            destroyed() {
                this.windowResizeListener && window.removeEventListener("resize", this.windowResizeListener)
            },
            methods: {
                adjustSlotStartTime() {
                    if (null == this.flushData.timeSlotList || null == this.selectedSlotStartTime)
                        return;
                    const e = this.flushData.timeSlotList.findIndex((e=>e.startTime === this.selectedSlotStartTime));
                    if (e < 0)
                        return;
                    const t = this.flushData.timeSlotList[e];
                    this.checkSlotTimeDisable(t) && this.$nextTick((()=>{
                        if (e < this.flushData.timeSlotList.length - 1)
                            for (let t = e + 1; t < this.flushData.timeSlotList.length; t++) {
                                const e = this.flushData.timeSlotList[t];
                                if (!this.checkSlotTimeDisable(e))
                                    return void (this.selectedSlotStartTime = e.startTime)
                            }
                        this.selectedSlotStartTime = null
                    }
                    ))
                },
                checkSlotTimeDisable(e) {
                    const t = this.currentServerTime;
                    if ((0,
                    w.KC)(t, this.curDate)) {
                        const s = (0,
                        w.tA)(t, e.endTime, !0);
                        return s <= t
                    }
                    return !1
                },
                onGroupChange(e) {
                    this.venueGroupId = e
                },
                windowResizeListener: (0,
                n.throttle)(50, (function() {
                    setTimeout((()=>{
                        this.recalculateMaxHeight()
                    }
                    ), (0,
                    w.Tt)() && (0,
                    w.qW)() ? 500 : 0)
                }
                )),
                recalculateMaxHeight() {
                    this.tableMaxHeight = (0,
                    w.rg)().height - (this.flushData.headerHeight || 0) - (["operation", "others", "marqueeBox"].map((e=>this.$refs[e])).filter((e=>!!e)).reduce(((e,t)=>(t instanceof l["default"] && (t = t.$el),
                    e + (Math.max(t.offsetHeight, t.clientHeight) || 0))), 0) || 0) - 8
                },
                onDateTimeReload() {
                    const e = this.$refs.scheduleTable;
                    e.initReload()
                },
                onDataReload(e) {
                    e = e || {},
                    this.flushData = e,
                    this.$nextTick((()=>{
                        this.recalculateMaxHeight()
                    }
                    ))
                },
                onSelectedReload(e, t) {
                    this.colLength = e,
                    this.totalPrice = t
                },
                onAgreementTentacle() {
                    S.Z.messageByNewsId(this.itemAgreementId)
                },
                sure() {
                    this.nextClick()
                },
                async nextClick() {
                    const e = this.$refs.scheduleTable;
                    try {
                        await e.check()
                    } catch (l) {
                        return
                    }
                    const t = e.cacheKey || (0,
                    w.oF)((0,
                    w.Vj)())
                      , {agreementRead: s, agreementTime: r, salesItemId: i} = this.item || {};
                    this.itemAgreementId > 0 && await S.Z.confirmByNewsId(this.itemAgreementId, {
                        title: "订场须知",
                        mustRead: s,
                        readTime: r
                    });
                    const o = e.cache()
                      , {list: n} = o;
                    if (this.isTicket) {
                        if (this.useCounterTemplate) {
                            const e = n.map((({venueId: e, venueTicketId: t, buyNum: s, selectPubStudy: r, validPubStudy: i, faceValidMode: o})=>({
                                venueId: e,
                                venueTicketId: t,
                                buyNum: s,
                                selectPubStudy: r,
                                validPubStudy: i,
                                faceValidMode: o
                            })));
                            return void this.ticketSave(e)
                        }
                    } else {
                        const e = await this.$http.get("/pubUser/isLogin.do");
                        e && await this.$http.postJSON("/sport/venueOrder/verifyVenue", {
                            orderDate: this.curDate,
                            salesId: this.salesId,
                            salesItemId: i,
                            sportPlatformList: n.map((({venueId: e, startTime: t, endTime: s})=>({
                                venueId: e,
                                startTime: t,
                                endTime: s
                            })))
                        })
                    }
                    (0,
                    re.fv)(t, o).then((()=>{
                        const e = `/booking/${this.isTicket ? "ticket" : "service"}/${this.salesId}`
                          , s = ()=>{
                            this.$router.push({
                                path: e,
                                query: {
                                    salesItemId: i,
                                    key: t
                                }
                            })
                        }
                        ;
                        s()
                    }
                    ))
                },
                onSwitchItem() {
                    if (this.item) {
                        const {salesItemId: e} = this.item;
                        window.history.replaceState({}, null, `?salesItemId=${e}`),
                        this.serverData.dateDataList = null,
                        this.curDate = null,
                        this.$nextTick((()=>{
                            this.$http.get("/pub/sport/venue/getVenueCalendarList", {
                                salesItemId: e
                            }).then((e=>{
                                Object.assign(this.serverData, {
                                    dateDataList: (e || []).map((e=>({
                                        ...e,
                                        dayName: this.formatMD(e.day)
                                    })))
                                })
                            }
                            ))
                        }
                        ))
                    }
                },
                onHourFun(e) {
                    const {openTime: t, hourCancel: s, hourCancelType: r} = e;
                    this.hourObj = {
                        hourCancelType: r,
                        hourCancel: s,
                        openTime: t
                    }
                }
            }
        }
          , ce = ae;
        var ue = (0,
        C.Z)(ce, i, o, !1, null, "5583a655", null);
        const de = ue.exports
    }
    ,
    18552: (e,t,s)=>{
        var r = s(10852)
          , i = s(55639)
          , o = r(i, "DataView");
        e.exports = o
    }
    ,
    53818: (e,t,s)=>{
        var r = s(10852)
          , i = s(55639)
          , o = r(i, "Promise");
        e.exports = o
    }
    ,
    46384: (e,t,s)=>{
        var r = s(38407)
          , i = s(37465)
          , o = s(63779)
          , n = s(67599)
          , l = s(44758)
          , a = s(34309);
        function c(e) {
            var t = this.__data__ = new r(e);
            this.size = t.size
        }
        c.prototype.clear = i,
        c.prototype["delete"] = o,
        c.prototype.get = n,
        c.prototype.has = l,
        c.prototype.set = a,
        e.exports = c
    }
    ,
    11149: (e,t,s)=>{
        var r = s(55639)
          , i = r.Uint8Array;
        e.exports = i
    }
    ,
    70577: (e,t,s)=>{
        var r = s(10852)
          , i = s(55639)
          , o = r(i, "WeakMap");
        e.exports = o
    }
    ,
    34963: e=>{
        function t(e, t) {
            var s = -1
              , r = null == e ? 0 : e.length
              , i = 0
              , o = [];
            while (++s < r) {
                var n = e[s];
                t(n, s, e) && (o[i++] = n)
            }
            return o
        }
        e.exports = t
    }
    ,
    14636: (e,t,s)=>{
        var r = s(22545)
          , i = s(35694)
          , o = s(1469)
          , n = s(44144)
          , l = s(65776)
          , a = s(36719)
          , c = Object.prototype
          , u = c.hasOwnProperty;
        function d(e, t) {
            var s = o(e)
              , c = !s && i(e)
              , d = !s && !c && n(e)
              , h = !s && !c && !d && a(e)
              , m = s || c || d || h
              , f = m ? r(e.length, String) : []
              , p = f.length;
            for (var v in e)
                !t && !u.call(e, v) || m && ("length" == v || d && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || l(v, p)) || f.push(v);
            return f
        }
        e.exports = d
    }
    ,
    68866: (e,t,s)=>{
        var r = s(62488)
          , i = s(1469);
        function o(e, t, s) {
            var o = t(e);
            return i(e) ? o : r(o, s(e))
        }
        e.exports = o
    }
    ,
    38749: (e,t,s)=>{
        var r = s(44239)
          , i = s(41780)
          , o = s(37005)
          , n = "[object Arguments]"
          , l = "[object Array]"
          , a = "[object Boolean]"
          , c = "[object Date]"
          , u = "[object Error]"
          , d = "[object Function]"
          , h = "[object Map]"
          , m = "[object Number]"
          , f = "[object Object]"
          , p = "[object RegExp]"
          , v = "[object Set]"
          , g = "[object String]"
          , T = "[object WeakMap]"
          , I = "[object ArrayBuffer]"
          , b = "[object DataView]"
          , C = "[object Float32Array]"
          , y = "[object Float64Array]"
          , k = "[object Int8Array]"
          , S = "[object Int16Array]"
          , w = "[object Int32Array]"
          , x = "[object Uint8Array]"
          , F = "[object Uint8ClampedArray]"
          , D = "[object Uint16Array]"
          , _ = "[object Uint32Array]"
          , B = {};
        function L(e) {
            return o(e) && i(e.length) && !!B[r(e)]
        }
        B[C] = B[y] = B[k] = B[S] = B[w] = B[x] = B[F] = B[D] = B[_] = !0,
        B[n] = B[l] = B[I] = B[a] = B[b] = B[c] = B[u] = B[d] = B[h] = B[m] = B[f] = B[p] = B[v] = B[g] = B[T] = !1,
        e.exports = L
    }
    ,
    280: (e,t,s)=>{
        var r = s(25726)
          , i = s(86916)
          , o = Object.prototype
          , n = o.hasOwnProperty;
        function l(e) {
            if (!r(e))
                return i(e);
            var t = [];
            for (var s in Object(e))
                n.call(e, s) && "constructor" != s && t.push(s);
            return t
        }
        e.exports = l
    }
    ,
    22545: e=>{
        function t(e, t) {
            var s = -1
              , r = Array(e);
            while (++s < e)
                r[s] = t(s);
            return r
        }
        e.exports = t
    }
    ,
    7518: e=>{
        function t(e) {
            return function(t) {
                return e(t)
            }
        }
        e.exports = t
    }
    ,
    58234: (e,t,s)=>{
        var r = s(68866)
          , i = s(99551)
          , o = s(3674);
        function n(e) {
            return r(e, o, i)
        }
        e.exports = n
    }
    ,
    99551: (e,t,s)=>{
        var r = s(34963)
          , i = s(70479)
          , o = Object.prototype
          , n = o.propertyIsEnumerable
          , l = Object.getOwnPropertySymbols
          , a = l ? function(e) {
            return null == e ? [] : (e = Object(e),
            r(l(e), (function(t) {
                return n.call(e, t)
            }
            )))
        }
        : i;
        e.exports = a
    }
    ,
    64160: (e,t,s)=>{
        var r = s(18552)
          , i = s(57071)
          , o = s(53818)
          , n = s(58525)
          , l = s(70577)
          , a = s(44239)
          , c = s(80346)
          , u = "[object Map]"
          , d = "[object Object]"
          , h = "[object Promise]"
          , m = "[object Set]"
          , f = "[object WeakMap]"
          , p = "[object DataView]"
          , v = c(r)
          , g = c(i)
          , T = c(o)
          , I = c(n)
          , b = c(l)
          , C = a;
        (r && C(new r(new ArrayBuffer(1))) != p || i && C(new i) != u || o && C(o.resolve()) != h || n && C(new n) != m || l && C(new l) != f) && (C = function(e) {
            var t = a(e)
              , s = t == d ? e.constructor : void 0
              , r = s ? c(s) : "";
            if (r)
                switch (r) {
                case v:
                    return p;
                case g:
                    return u;
                case T:
                    return h;
                case I:
                    return m;
                case b:
                    return f
                }
            return t
        }
        ),
        e.exports = C
    }
    ,
    65776: e=>{
        var t = 9007199254740991
          , s = /^(?:0|[1-9]\d*)$/;
        function r(e, r) {
            var i = typeof e;
            return r = null == r ? t : r,
            !!r && ("number" == i || "symbol" != i && s.test(e)) && e > -1 && e % 1 == 0 && e < r
        }
        e.exports = r
    }
    ,
    25726: e=>{
        var t = Object.prototype;
        function s(e) {
            var s = e && e.constructor
              , r = "function" == typeof s && s.prototype || t;
            return e === r
        }
        e.exports = s
    }
    ,
    86916: (e,t,s)=>{
        var r = s(5569)
          , i = r(Object.keys, Object);
        e.exports = i
    }
    ,
    31167: (e,t,s)=>{
        e = s.nmd(e);
        var r = s(31957)
          , i = t && !t.nodeType && t
          , o = i && e && !e.nodeType && e
          , n = o && o.exports === i
          , l = n && r.process
          , a = function() {
            try {
                var e = o && o.require && o.require("util").types;
                return e || l && l.binding && l.binding("util")
            } catch (t) {}
        }();
        e.exports = a
    }
    ,
    37465: (e,t,s)=>{
        var r = s(38407);
        function i() {
            this.__data__ = new r,
            this.size = 0
        }
        e.exports = i
    }
    ,
    63779: e=>{
        function t(e) {
            var t = this.__data__
              , s = t["delete"](e);
            return this.size = t.size,
            s
        }
        e.exports = t
    }
    ,
    67599: e=>{
        function t(e) {
            return this.__data__.get(e)
        }
        e.exports = t
    }
    ,
    44758: e=>{
        function t(e) {
            return this.__data__.has(e)
        }
        e.exports = t
    }
    ,
    34309: (e,t,s)=>{
        var r = s(38407)
          , i = s(57071)
          , o = s(83369)
          , n = 200;
        function l(e, t) {
            var s = this.__data__;
            if (s instanceof r) {
                var l = s.__data__;
                if (!i || l.length < n - 1)
                    return l.push([e, t]),
                    this.size = ++s.size,
                    this;
                s = this.__data__ = new o(l)
            }
            return s.set(e, t),
            this.size = s.size,
            this
        }
        e.exports = l
    }
    ,
    44144: (e,t,s)=>{
        e = s.nmd(e);
        var r = s(55639)
          , i = s(95062)
          , o = t && !t.nodeType && t
          , n = o && e && !e.nodeType && e
          , l = n && n.exports === o
          , a = l ? r.Buffer : void 0
          , c = a ? a.isBuffer : void 0
          , u = c || i;
        e.exports = u
    }
    ,
    36719: (e,t,s)=>{
        var r = s(38749)
          , i = s(7518)
          , o = s(31167)
          , n = o && o.isTypedArray
          , l = n ? i(n) : r;
        e.exports = l
    }
    ,
    3674: (e,t,s)=>{
        var r = s(14636)
          , i = s(280)
          , o = s(98612);
        function n(e) {
            return o(e) ? r(e) : i(e)
        }
        e.exports = n
    }
    ,
    70479: e=>{
        function t() {
            return []
        }
        e.exports = t
    }
    ,
    95062: e=>{
        function t() {
            return !1
        }
        e.exports = t
    }
    ,
    4209: (e,t,s)=>{
        "use strict";
        s.d(t, {
            m9: ()=>r,
            tG: ()=>a
        });
        s(74916),
        s(57658),
        s(15306),
        s(73210);
        const r = {
            lightpink: "#FFB6C1",
            pink: "#FFC0CB",
            crimson: "#DC143C",
            lavenderblush: "#FFF0F5",
            palevioletred: "#DB7093",
            hotpink: "#FF69B4",
            deeppink: "#FF1493",
            mediumvioletred: "#C71585",
            orchid: "#DA70D6",
            thistle: "#D8BFD8",
            plum: "#DDA0DD",
            violet: "#EE82EE",
            magenta: "#FF00FF",
            fuchsia: "#FF00FF",
            darkmagenta: "#8B008B",
            purple: "#800080",
            mediumorchid: "#BA55D3",
            darkvoilet: "#9400D3",
            darkorchid: "#9932CC",
            indigo: "#4B0082",
            blueviolet: "#8A2BE2",
            mediumpurple: "#9370DB",
            mediumslateblue: "#7B68EE",
            slateblue: "#6A5ACD",
            darkslateblue: "#483D8B",
            lavender: "#E6E6FA",
            ghostwhite: "#F8F8FF",
            blue: "#0000FF",
            mediumblue: "#0000CD",
            midnightblue: "#191970",
            darkblue: "#00008B",
            navy: "#000080",
            royalblue: "#4169E1",
            cornflowerblue: "#6495ED",
            lightsteelblue: "#B0C4DE",
            lightslategray: "#778899",
            slategray: "#708090",
            doderblue: "#1E90FF",
            aliceblue: "#F0F8FF",
            steelblue: "#4682B4",
            lightskyblue: "#87CEFA",
            skyblue: "#87CEEB",
            deepskyblue: "#00BFFF",
            lightblue: "#ADD8E6",
            powderblue: "#B0E0E6",
            cadetblue: "#5F9EA0",
            azure: "#F0FFFF",
            lightcyan: "#E1FFFF",
            paleturquoise: "#AFEEEE",
            cyan: "#00FFFF",
            aqua: "#00FFFF",
            darkturquoise: "#00CED1",
            darkslategray: "#2F4F4F",
            darkcyan: "#008B8B",
            teal: "#008080",
            mediumturquoise: "#48D1CC",
            lightseagreen: "#20B2AA",
            turquoise: "#40E0D0",
            babygreen: "#7FFFAA",
            mediumaquamarine: "#00FA9A",
            mediumspringgreen: "#F5FFFA",
            mintcream: "#00FF7F",
            springgreen: "#3CB371",
            seagreen: "#2E8B57",
            honeydew: "#F0FFF0",
            lightgreen: "#90EE90",
            palegreen: "#98FB98",
            darkseagreen: "#8FBC8F",
            limegreen: "#32CD32",
            lime: "#00FF00",
            forestgreen: "#228B22",
            green: "#008000",
            darkgreen: "#006400",
            chartreuse: "#7FFF00",
            lawngreen: "#7CFC00",
            greenyellow: "#ADFF2F",
            olivedrab: "#556B2F",
            beige: "#6B8E23",
            lightgoldenrodyellow: "#FAFAD2",
            ivory: "#FFFFF0",
            lightyellow: "#FFFFE0",
            yellow: "#FFFF00",
            olive: "#808000",
            darkkhaki: "#BDB76B",
            lemonchiffon: "#FFFACD",
            palegodenrod: "#EEE8AA",
            khaki: "#F0E68C",
            gold: "#FFD700",
            cornislk: "#FFF8DC",
            goldenrod: "#DAA520",
            floralwhite: "#FFFAF0",
            oldlace: "#FDF5E6",
            wheat: "#F5DEB3",
            moccasin: "#FFE4B5",
            orange: "#FFA500",
            papayawhip: "#FFEFD5",
            blanchedalmond: "#FFEBCD",
            navajowhite: "#FFDEAD",
            antiquewhite: "#FAEBD7",
            tan: "#D2B48C",
            brulywood: "#DEB887",
            bisque: "#FFE4C4",
            darkorange: "#FF8C00",
            linen: "#FAF0E6",
            peru: "#CD853F",
            peachpuff: "#FFDAB9",
            sandybrown: "#F4A460",
            chocolate: "#D2691E",
            saddlebrown: "#8B4513",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            lightsalmon: "#FFA07A",
            coral: "#FF7F50",
            orangered: "#FF4500",
            darksalmon: "#E9967A",
            tomato: "#FF6347",
            mistyrose: "#FFE4E1",
            salmon: "#FA8072",
            snow: "#FFFAFA",
            lightcoral: "#F08080",
            rosybrown: "#BC8F8F",
            indianred: "#CD5C5C",
            red: "#FF0000",
            brown: "#A52A2A",
            firebrick: "#B22222",
            darkred: "#8B0000",
            maroon: "#800000",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            gainsboro: "#DCDCDC",
            lightgrey: "#D3D3D3",
            silver: "#C0C0C0",
            darkgray: "#A9A9A9",
            gray: "#808080",
            dimgray: "#696969",
            black: "#000000"
        }
          , i = /^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/;
        function o(e) {
            let t = e;
            if (null == t)
                return null;
            if (t = t.trim().toLowerCase(),
            t.startsWith("#"))
                return t;
            if (t.startsWith("rgb")) {
                const e = t.split(",")
                  , s = Number.parseInt(e[0].split("(")[1], 10)
                  , r = Number.parseInt(e[1], 10)
                  , i = Number.parseInt(e[2].split(")")[0], 10);
                return `#${((1 << 24) + (s << 16) + (r << 8) + i).toString(16).slice(1)}`
            }
            return r[t]
        }
        function n(e, t) {
            let s = e;
            if (null == s)
                return null;
            if (s = s.trim().toLowerCase(),
            s.startsWith("rgb"))
                return s;
            let r = o(s);
            if (r && i.test(r)) {
                if (4 === r.length) {
                    let e = "#";
                    for (let t = 1; t < 4; t += 1)
                        e += r.slice(t, t + 1) + r.slice(t, t + 1);
                    r = e
                }
                const e = [];
                for (let t = 1; t < 7; t += 2)
                    e.push(Number.parseInt(r.slice(t, t + 2), 16));
                const s = e.join(",");
                return t ? `rgba(${s}, ${t})` : `rgb(${s})`
            }
            return r
        }
        function l(e) {
            const t = n(e);
            if (t) {
                const e = t.replace("rgb(", "").replace(")", "").split(",")
                  , s = .299 * e[0] + .587 * e[1] + .114 * e[2];
                return s
            }
            return 0
        }
        function a(e, t) {
            const {level: s, compareColor: i, darkColor: o, lightColor: n} = t || {}
              , a = l(e);
            if (a > 0) {
                const t = l(i);
                if (t > 0 && a > t)
                    return e;
                if (a > (s || 192))
                    return o || r.black
            }
            return n || r.white
        }
    }
    ,
    3133: (e,t,s)=>{
        "use strict";
        s.d(t, {
            Z: ()=>n
        });
        var r = s(20629)
          , i = s(22648);
        const {mapGetters: o} = (0,
        r._p)("global")
          , n = {
            data() {
                const e = Date.now();
                return {
                    ST_serverTimeInfo: {
                        nowTime: e,
                        timer: null
                    }
                }
            },
            computed: {
                ...o(["getCurrentServerTimeDuration"]),
                currentServerTime() {
                    const e = this.getCurrentServerTimeDuration()
                      , {nowTime: t} = this.ST_serverTimeInfo
                      , s = t - e;
                    console.log('CurrentServerTimeDuration:' + e);
                    return s
                }
            },
            watch: {
                currentServerTime(e, t) {
                    var s;
                    (0,
                    i.KC)(e, t) || null === (s = this.tickToNewDay) || void 0 === s || s.call(this)
                }
            },
            mounted() {
                this.ST_selfTimeUpdater()
            },
            destroyed() {
                this.ST_serverTimeInfo.timer && clearTimeout(this.ST_serverTimeInfo.timer)
            },
            methods: {
                ST_selfTimeUpdater() {
                    const e = Date.now();
                    Math.abs(e - this.ST_serverTimeInfo.nowTime) > 1e4 && this.$http.get("/querySrvInfo.do", null, {
                        silent: !0
                    }).then((e=>{
                        this.$store.commit("global/setServerTime", e)
                    }
                    )),
                    this.ST_serverTimeInfo.nowTime = e,
                    this.ST_serverTimeInfo.timer = setTimeout(this.ST_selfTimeUpdater, 1e3)
                }
            }
        }
    }
}]);
