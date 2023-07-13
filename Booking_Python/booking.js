var self={
}
self.webpackChunkydmap_web_portal =[];

(self["webpackChunkydmap_web_portal"] = self["webpackChunkydmap_web_portal"] || []).push([[4998], {
    48534: (e,t,n)=>{
        "use strict";
        function o(e, t, n, o, i, r, a) {
            try {
                var c = e[r](a)
                  , p = c.value
            } catch (s) {
                return void n(s)
            }
            c.done ? t(p) : Promise.resolve(p).then(o, i)
        }
        function i(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, r) {
                    var a = e.apply(t, n);
                    function c(e) {
                        o(a, i, r, c, p, "next", e)
                    }
                    function p(e) {
                        o(a, i, r, c, p, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
        }
        n.d(t, {
            Z: ()=>i
        })
    }
}]);
//
//var i = n[48534]();
//
//function h() {
//            return h = (0,
//            i.Z)((function*(e, t, n, o) {
//                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
//                if (null == o)
//                    return {};
//                const r = (0,
//                b.Vj)()
//                  , a = r.replace(/-/g, "")
//                  , c = Date.now()
//                  , p = {
//                    nonce: a,
//                    timestamp: c + (i || 0)
//                }
//                  , s = yield d(p, e, t, n, o);
//                return Object.assign(p, {
//                    signature: s.toUpperCase()
//                }),
//                p
//            }
//            )),
//            h.apply(this, arguments)
//        }
//
//console.log(h());
//{
//    "nonce": "7840d589c17844ab80b337bbf909a6e7",
//    "timestamp": 1689232802306,
//    "signature": "0059A1FACAB0C35CC6BD84BE348FCA52"
//}



