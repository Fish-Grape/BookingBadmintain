"use strict";
(()=>{
    if (!window.location.port)
        try {
            t()
        } catch (t) {}
    function t() {
        setInterval(()=>{
            e = 100;
            var t, e = (t = 0) <= t && 0 <= e ? e <= t ? e : Math.floor(Math.random() * (e - t)) + t : 0;
            !function() {
                return !1
            }
            .constructor("\n          // 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫 禁止调试 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫\n          ".concat(Array.from({
                length: e
            }).fill("\n          ").join(""), "\n                  \n        ")).call()
        }
        , 50)
    }
}
)(),
function(t) {
    t = window;
    var e, y = 1e6, l = "[big.js] ", c = l + "Invalid ", b = c + "decimal places", r = c + "rounding mode", _ = l + "Division by zero", n = {}, T = void 0, d = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    function S(t, e, n, i) {
        var a = t.c;
        if (0 !== (n = n === T ? t.constructor.RM : n) && 1 !== n && 2 !== n && 3 !== n)
            throw Error(r);
        if (e < 1)
            i = 3 === n && (i || !!a[0]) || 0 === e && (1 === n && 5 <= a[0] || 2 === n && (5 < a[0] || 5 === a[0] && (i || a[1] !== T))),
            a.length = 1,
            i ? (t.e = t.e - e + 1,
            a[0] = 1) : a[0] = t.e = 0;
        else if (e < a.length) {
            if (i = 1 === n && 5 <= a[e] || 2 === n && (5 < a[e] || 5 === a[e] && (i || a[e + 1] !== T || 1 & a[e - 1])) || 3 === n && (i || !!a[0]),
            a.length = e,
            i)
                for (; 9 < ++a[--e]; )
                    if ((a[e] = 0) === e) {
                        ++t.e,
                        a.unshift(1);
                        break
                    }
            for (e = a.length; !a[--e]; )
                a.pop()
        }
        return t
    }
    function o(t, e, n) {
        var i = t.e
          , a = t.c.join("")
          , r = a.length;
        if (e)
            a = a.charAt(0) + (1 < r ? "." + a.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
        else if (i < 0) {
            for (; ++i; )
                a = "0" + a;
            a = "0." + a
        } else if (0 < i)
            if (++i > r)
                for (i -= r; i--; )
                    a += "0";
            else
                i < r && (a = a.slice(0, i) + "." + a.slice(i));
        else
            1 < r && (a = a.charAt(0) + "." + a.slice(1));
        return t.s < 0 && n ? "-" + a : a
    }
    n.abs = function() {
        var t = new this.constructor(this);
        return t.s = 1,
        t
    }
    ,
    n.cmp = function(t) {
        var e, n = this, i = n.c, a = (t = new n.constructor(t)).c, r = n.s, o = t.s, n = n.e, t = t.e;
        if (!i[0] || !a[0])
            return i[0] ? r : a[0] ? -o : 0;
        if (r != o)
            return r;
        if (e = r < 0,
        n != t)
            return t < n ^ e ? 1 : -1;
        for (o = (n = i.length) < (t = a.length) ? n : t,
        r = -1; ++r < o; )
            if (i[r] != a[r])
                return i[r] > a[r] ^ e ? 1 : -1;
        return n == t ? 0 : t < n ^ e ? 1 : -1
    }
    ,
    n.div = function(t) {
        var e = this.constructor
          , n = this.c
          , i = (t = new e(t)).c
          , a = this.s == t.s ? 1 : -1
          , r = e.DP;
        if (r !== ~~r || r < 0 || y < r)
            throw Error(b);
        if (!i[0])
            throw Error(_);
        if (!n[0])
            return t.s = a,
            t.c = [t.e = 0],
            t;
        var o, s, l, c, d, u = i.slice(), h = o = i.length, p = n.length, f = n.slice(0, o), m = f.length, g = t, v = g.c = [], w = 0, r = r + (g.e = this.e - t.e) + 1;
        for (g.s = a,
        a = r < 0 ? 0 : r,
        u.unshift(0); m++ < o; )
            f.push(0);
        do {
            for (l = 0; l < 10; l++) {
                if (o != (m = f.length))
                    c = m < o ? 1 : -1;
                else
                    for (d = -1,
                    c = 0; ++d < o; )
                        if (i[d] != f[d]) {
                            c = i[d] > f[d] ? 1 : -1;
                            break
                        }
                if (!(c < 0))
                    break;
                for (s = m == o ? i : u; m; ) {
                    if (f[--m] < s[m]) {
                        for (d = m; d && !f[--d]; )
                            f[d] = 9;
                        --f[d],
                        f[m] += 10
                    }
                    f[m] -= s[m]
                }
                for (; !f[0]; )
                    f.shift()
            }
        } while (v[w++] = c ? l : ++l,
        f[0] && c ? f[m] = n[h] || 0 : f = [n[h]],
        (h++ < p || f[0] !== T) && a--);
        return v[0] || 1 == w || (v.shift(),
        g.e--,
        r--),
        r < w && S(g, r, e.RM, f[0] !== T),
        g
    }
    ,
    n.eq = function(t) {
        return 0 === this.cmp(t)
    }
    ,
    n.gt = function(t) {
        return 0 < this.cmp(t)
    }
    ,
    n.gte = function(t) {
        return -1 < this.cmp(t)
    }
    ,
    n.lt = function(t) {
        return this.cmp(t) < 0
    }
    ,
    n.lte = function(t) {
        return this.cmp(t) < 1
    }
    ,
    n.minus = n.sub = function(t) {
        var e, n, i, a, r = this, o = r.constructor, s = r.s, l = (t = new o(t)).s;
        if (s != l)
            return t.s = -l,
            r.plus(t);
        var c = r.c.slice()
          , d = r.e
          , u = t.c
          , h = t.e;
        if (c[0] && u[0]) {
            if (s = d - h) {
                for ((i = (a = s < 0) ? (s = -s,
                c) : (h = d,
                u)).reverse(),
                l = s; l--; )
                    i.push(0);
                i.reverse()
            } else
                for (n = ((a = c.length < u.length) ? c : u).length,
                s = l = 0; l < n; l++)
                    if (c[l] != u[l]) {
                        a = c[l] < u[l];
                        break
                    }
            if (a && (i = c,
            c = u,
            u = i,
            t.s = -t.s),
            0 < (l = (n = u.length) - (e = c.length)))
                for (; l--; )
                    c[e++] = 0;
            for (l = e; s < n; ) {
                if (c[--n] < u[n]) {
                    for (e = n; e && !c[--e]; )
                        c[e] = 9;
                    --c[e],
                    c[n] += 10
                }
                c[n] -= u[n]
            }
            for (; 0 === c[--l]; )
                c.pop();
            for (; 0 === c[0]; )
                c.shift(),
                --h;
            c[0] || (t.s = 1,
            c = [h = 0]),
            t.c = c,
            t.e = h
        } else
            u[0] ? t.s = -l : c[0] ? t = new o(r) : t.s = 1;
        return t
    }
    ,
    n.mod = function(t) {
        var e, n = this, i = n.constructor, a = n.s, r = (t = new i(t)).s;
        if (t.c[0])
            return e = (n.s = t.s = 1) == t.cmp(n),
            n.s = a,
            t.s = r,
            e ? new i(n) : (a = i.DP,
            r = i.RM,
            i.DP = i.RM = 0,
            n = n.div(t),
            i.DP = a,
            i.RM = r,
            this.minus(n.times(t)));
        throw Error(_)
    }
    ,
    n.neg = function() {
        var t = new this.constructor(this);
        return t.s = -t.s,
        t
    }
    ,
    n.plus = n.add = function(t) {
        var e, n, i, a = this, r = a.constructor;
        if (t = new r(t),
        a.s != t.s)
            return t.s = -t.s,
            a.minus(t);
        var o = a.e
          , s = a.c
          , l = t.e
          , c = t.c;
        if (s[0] && c[0]) {
            if (s = s.slice(),
            e = o - l) {
                for ((i = 0 < e ? (l = o,
                c) : (e = -e,
                s)).reverse(); e--; )
                    i.push(0);
                i.reverse()
            }
            for (s.length - c.length < 0 && (i = c,
            c = s,
            s = i),
            e = c.length,
            n = 0; e; s[e] %= 10)
                n = (s[--e] = s[e] + c[e] + n) / 10 | 0;
            for (n && (s.unshift(n),
            ++l),
            e = s.length; 0 === s[--e]; )
                s.pop();
            t.c = s,
            t.e = l
        } else
            c[0] || (s[0] ? t = new r(a) : t.s = a.s);
        return t
    }
    ,
    n.pow = function(t) {
        var e = this
          , n = new e.constructor("1")
          , i = n
          , a = t < 0;
        if (t !== ~~t || t < -1e6 || 1e6 < t)
            throw Error(c + "exponent");
        for (a && (t = -t); 1 & t && (i = i.times(e)),
        t >>= 1; )
            e = e.times(e);
        return a ? n.div(i) : i
    }
    ,
    n.prec = function(t, e) {
        if (t !== ~~t || t < 1 || y < t)
            throw Error(c + "precision");
        return S(new this.constructor(this), t, e)
    }
    ,
    n.round = function(t, e) {
        if (t === T)
            t = 0;
        else if (t !== ~~t || t < -y || y < t)
            throw Error(b);
        return S(new this.constructor(this), t + this.e + 1, e)
    }
    ,
    n.sqrt = function() {
        var t, e, n, i = this, a = i.constructor, r = i.s, o = i.e, s = new a("0.5");
        if (!i.c[0])
            return new a(i);
        if (r < 0)
            throw Error(l + "No square root");
        for (o = (t = 0 === (r = Math.sqrt(i + "")) || r === 1 / 0 ? ((e = i.c.join("")).length + o & 1 || (e += "0"),
        o = ((o + 1) / 2 | 0) - (o < 0 || 1 & o),
        new a(((r = Math.sqrt(e)) == 1 / 0 ? "5e" : (r = r.toExponential()).slice(0, r.indexOf("e") + 1)) + o)) : new a(r + "")).e + (a.DP += 4); n = t,
        t = s.times(n.plus(i.div(n))),
        n.c.slice(0, o).join("") !== t.c.slice(0, o).join(""); )
            ;
        return S(t, (a.DP -= 4) + t.e + 1, a.RM)
    }
    ,
    n.times = n.mul = function(t) {
        var e, n = this.constructor, i = this.c, a = (t = new n(t)).c, r = i.length, o = a.length, s = this.e, l = t.e;
        if (t.s = this.s == t.s ? 1 : -1,
        i[0] && a[0]) {
            for (t.e = s + l,
            r < o && (e = i,
            i = a,
            a = e,
            l = r,
            r = o,
            o = l),
            e = new Array(l = r + o); l--; )
                e[l] = 0;
            for (s = o; s--; ) {
                for (o = 0,
                l = r + s; s < l; )
                    o = e[l] + a[s] * i[l - s - 1] + o,
                    e[l--] = o % 10,
                    o = o / 10 | 0;
                e[l] = o
            }
            for (o ? ++t.e : e.shift(),
            s = e.length; !e[--s]; )
                e.pop();
            t.c = e
        } else
            t.c = [t.e = 0];
        return t
    }
    ,
    n.toExponential = function(t, e) {
        var n = this
          , i = n.c[0];
        if (t !== T) {
            if (t !== ~~t || t < 0 || y < t)
                throw Error(b);
            for (n = S(new n.constructor(n), ++t, e); n.c.length < t; )
                n.c.push(0)
        }
        return o(n, !0, !!i)
    }
    ,
    n.toFixed = function(t, e) {
        var n = this
          , i = n.c[0];
        if (t !== T) {
            if (t !== ~~t || t < 0 || y < t)
                throw Error(b);
            for (t = t + (n = S(new n.constructor(n), t + n.e + 1, e)).e + 1; n.c.length < t; )
                n.c.push(0)
        }
        return o(n, !1, !!i)
    }
    ,
    n.toJSON = n.toString = function() {
        var t = this
          , e = t.constructor;
        return o(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0])
    }
    ,
    n.toNumber = function() {
        var t = Number(o(this, !0, !0));
        if (!0 !== this.constructor.strict || this.eq(t.toString()))
            return t;
        throw Error(l + "Imprecise conversion")
    }
    ,
    n.toPrecision = function(t, e) {
        var n = this
          , i = n.constructor
          , a = n.c[0];
        if (t !== T) {
            if (t !== ~~t || t < 1 || y < t)
                throw Error(c + "precision");
            for (n = S(new i(n), t, e); n.c.length < t; )
                n.c.push(0)
        }
        return o(n, t <= n.e || n.e <= i.NE || n.e >= i.PE, !!a)
    }
    ,
    n.valueOf = function() {
        var t = this.constructor;
        if (!0 === t.strict)
            throw Error(l + "valueOf disallowed");
        return o(this, this.e <= t.NE || this.e >= t.PE, !0)
    }
    ,
    (e = function s() {
        function l(t) {
            var e = this;
            if (!(e instanceof l))
                return t === T ? s() : new l(t);
            if (t instanceof l)
                e.s = t.s,
                e.e = t.e,
                e.c = t.c.slice();
            else {
                if ("string" != typeof t) {
                    if (!0 === l.strict && "bigint" != typeof t)
                        throw TypeError(c + "value");
                    t = 0 === t && 1 / t < 0 ? "-0" : String(t)
                }
                var n, i, a, r = e, o = t;
                if (!d.test(o))
                    throw Error(c + "number");
                for (r.s = "-" == o.charAt(0) ? (o = o.slice(1),
                -1) : 1,
                -1 < (n = o.indexOf(".")) && (o = o.replace(".", "")),
                0 < (i = o.search(/e/i)) ? (n < 0 && (n = i),
                n += +o.slice(i + 1),
                o = o.substring(0, i)) : n < 0 && (n = o.length),
                a = o.length,
                i = 0; i < a && "0" == o.charAt(i); )
                    ++i;
                if (i == a)
                    r.c = [r.e = 0];
                else {
                    for (; 0 < a && "0" == o.charAt(--a); )
                        ;
                    for (r.e = n - i - 1,
                    r.c = [],
                    n = 0; i <= a; )
                        r.c[n++] = +o.charAt(i++)
                }
            }
            e.constructor = l
        }
        return l.prototype = n,
        l.DP = 20,
        l.RM = 1,
        l.NE = -7,
        l.PE = 21,
        l.strict = !1,
        l.roundDown = 0,
        l.roundHalfUp = 1,
        l.roundHalfEven = 2,
        l.roundUp = 3,
        l
    }()).default = e.Big = e,
    "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : t.Big = e
}(void 0);
const _excluded = ["longitude", "latitude"];
function _objectWithoutProperties(t, e) {
    if (null == t)
        return {};
    var n, i = _objectWithoutPropertiesLoose(t, e);
    if (Object.getOwnPropertySymbols)
        for (var a = Object.getOwnPropertySymbols(t), r = 0; r < a.length; r++)
            n = a[r],
            0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
    return i
}
function _objectWithoutPropertiesLoose(t, e) {
    if (null == t)
        return {};
    for (var n, i = {}, a = Object.keys(t), r = 0; r < a.length; r++)
        n = a[r],
        0 <= e.indexOf(n) || (i[n] = t[n]);
    return i
}
function ownKeys(e, t) {
    var n, i = Object.keys(e);
    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e),
    t && (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    })),
    i.push.apply(i, n)),
    i
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
            _defineProperty(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
function _defineProperty(t, e, n) {
    return (e = _toPropertyKey(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == typeof t ? t : String(t)
}
function _toPrimitive(t, e) {
    if ("object" != typeof t || null === t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 === n)
        return ("string" === e ? String : Number)(t);
    n = n.call(t, e || "default");
    if ("object" != typeof n)
        return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}
function ownKeys(e, t) {
    var n, i = Object.keys(e);
    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e),
    t && (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    })),
    i.push.apply(i, n)),
    i
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
            _defineProperty(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
function _defineProperty(t, e, n) {
    return (e = _toPropertyKey(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == typeof t ? t : String(t)
}
function _toPrimitive(t, e) {
    if ("object" != typeof t || null === t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 === n)
        return ("string" === e ? String : Number)(t);
    n = n.call(t, e || "default");
    if ("object" != typeof n)
        return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}
!function() {
    const o = window.jQuery
      , s = window.jWeixin
      , t = navigator.userAgent.toLowerCase() || ""
      , a = (Number.isNaN = Number.isNaN || function(t) {
        return "number" == typeof t && window.isNaN(t)
    }
    ,
    window.Big);
    function r(t) {
        return Number.isFinite(t) || t instanceof a
    }
    function n() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return function(e, t) {
            let n = arguments.length <= 1 ? void 0 : t;
            for (let t = 1; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                var i = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                if (!r(n) || !r(i) || "div" === e && 0 === i)
                    return Number.NaN;
                n = new a(n)[e](new a(i))
            }
            return n instanceof a ? n.toNumber() : n
        }("div", ...e)
    }
    const l = {
        $IMG_HOST: "//image.ydmap.cn",
        $CDN_STATIC_HOST: "//cdnstatic.ydmap.cn",
        LOCATION_URL_BASE: "".concat(location.protocol, "//").concat(location.host),
        isStartsWithProtocol: function(t) {
            return /^((http|https|ws|wss):)?\/\/([\w.]+\/?)\S*/.test(t)
        },
        $getAccessToken: function() {
            try {
                return JSON.parse(window.localStorage.getItem("Access-Token"))
            } catch (t) {
                console.warn(t)
            }
            return null
        },
        $getOpenIdToken: function() {
            try {
                return JSON.parse(window.localStorage.getItem("Openid-Token"))
            } catch (t) {
                console.warn(t)
            }
            return null
        }
    };
    function e() {
        if (!window.selfSC) {
            const n = window.sc;
            var t;
            null == n ? console.warn("找不到sc") : (console.warn("准备代理sc"),
            t = {
                gps(t, e) {
                    l.isSZMC() ? n.gps(e) : l.isSZSMT() && n.gps(t, e)
                },
                verify(t, e) {
                    t = (t || {}).infoType;
                    n.verify({
                        infoType: t
                    }, e)
                },
                userAuth(t, e) {
                    t = (t || {}).appId;
                    n.userAuth({
                        appId: t
                    }, e)
                },
                mapProvider() {
                    return l.isSZMC() ? (n.navigation(...arguments),
                    !1) : n.mapProvider(...arguments)
                },
                isSZSMT() {
                    return !l.isSZMC() && n.isSZSMT()
                }
            },
            null == window.Proxy ? window.selfSC = n : window.selfSC = new window.Proxy(t,{
                get(t, e) {
                    return (e in t ? t : n)[e]
                }
            }))
        }
    }
    function c(t, e) {
        if (null == t)
            return null;
        var e = e || window
          , n = t.indexOf(".");
        if (0 === n)
            throw new Error("变量不能以.开头");
        n = t.slice(0, Math.max(0, 0 < n ? n : t.length)),
        e = e[n];
        return null == e ? null : 0 === (t = t.slice(n.length + 1)).length ? e : c(t, e)
    }
    l.isMiniProgram = function() {
        return !!/miniprogram/.test(t)
    }
    ,
    l.isWeiXin = function() {
        return !l.isMiniProgram() && !!/micromessenger/.test(t)
    }
    ,
    l.isISZ = function() {
        return !!/szsmt/.test(t)
    }
    ,
    l.isWeLink = function() {
        return !(!/welink/.test(t) && !/anyoffice/.test(t))
    }
    ,
    l.isSZSMT = function() {
        var t = window.selfSC;
        return l.isISZ() && t && t.isSZSMT()
    }
    ,
    l.isSZMC = function() {
        return !1
    }
    ,
    l.isPASCSMT = function() {
        return l.isISZ() || l.isSZMC()
    }
    ,
    l.isAndorid = function() {
        var t = navigator.userAgent || "";
        return t.includes("Android") || t.includes("Adr")
    }
    ,
    l.isiOS = function() {
        var t = navigator.userAgent || "";
        return !!/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(t)
    }
    ,
    l.isWechatMMBrowser = function() {
        return !!l.isWeiXin() && /xweb/.test(t) && /mmwebsdk/.test(t)
    }
    ,
    l.isAndroidMsgPushEntry = function() {
        return !!l.isAndorid() && !l.isWechatMMBrowser()
    }
    ,
    l.throttle = function(i, a, r, o) {
        let s, l = 0;
        "boolean" != typeof a && (o = r,
        r = a,
        a = void 0);
        return function() {
            var t = Date.now() - l;
            const e = arguments;
            function n() {
                l = Date.now(),
                r.apply(this, e)
            }
            o && !s && n(),
            s && clearTimeout(s),
            void 0 === o && i < t ? n() : !0 !== a && (s = setTimeout(o ? function() {
                s = void 0
            }
            : n, void 0 === o ? i - t : i))
        }
    }
    ,
    l.copyToClipboard = function(t) {
        const n = document.createElement("textarea");
        return n.value = t,
        n.style.position = "fixed",
        n.style.left = "-999999px",
        n.style.top = "-999999px",
        document.body.append(n),
        n.focus(),
        n.select(),
        new Promise((t,e)=>{
            document.execCommand("copy") ? t() : e(new Error("copyToClipboard err")),
            n.remove()
        }
        )
    }
    ,
    l.asyncInjectScript = function(o, s) {
        return new Promise((e,n)=>{
            if (null == o)
                n(new Error("'url' params is required"));
            else {
                if (s) {
                    var i = c(s);
                    if (i)
                        return void e(i)
                }
                let t = document.querySelector('script[src="'.concat(o, '"]'));
                if (t && null == s)
                    e();
                else {
                    null == t && ((t = document.createElement("script")).setAttribute("charset", "utf-8"),
                    null == s && ("onload"in t ? t.addEventListener("load", function() {
                        e()
                    }) : t.readyState && (t.onreadystatechange = function() {
                        "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null,
                        e())
                    }
                    )),
                    t.setAttribute("src", o),
                    document.querySelectorAll("body")[0].append(t));
                    const a = Date.now()
                      , r = function() {
                        var t = c(s);
                        t ? e(t) : 5e3 < Date.now() - a ? ((t = new Error("".concat(s, ": Inject failed"))).name = "ScriptInitializationFailed",
                        n(t)) : setTimeout(r, 50)
                    };
                    setTimeout(r, 0)
                }
            }
        }
        )
    }
    ;
    const i = {
        welink: "https://open-doc.welink.huaweicloud.com/docs/jsapi/2.0.7/hwh5-cloudonline.js",
        isz: "https://isz-open.sz.gov.cn/lib/jpasc-0.4.0.js",
        szmc: "https://szmc-intweb.shenzhenmc.com/app/lib/jpasc-0.4.0.js"
    }
      , d = (l.injectSdk = function() {
        return l.isSZMC() ? l.asyncInjectScript(i.szmc).then(t=>(e(),
        t)) : l.isISZ() ? l.asyncInjectScript(i.isz).then(t=>(e(),
        t)) : l.isWeLink() ? l.asyncInjectScript(i.welink) : Promise.resolve()
    }
    ,
    {
        title: document.title || window.location.href,
        link: window.location.href,
        img: "https:".concat(l.$CDN_STATIC_HOST, "/themes/mobile/blue/images/ydmap.png"),
        desc: window.location.href
    });
    l.pullUpShareDirectlyIfSupport = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        if (!l.isPASCSMT())
            return !1;
        var {title: t, link: e, img: n, desc: i} = _objectSpread(_objectSpread({}, d), t);
        const a = {
            title: t || document.title,
            image: n,
            shareUrl: (n = (t = e) || window.location.href,
            l.isPASCSMT() ? l.mergeUrlQuery("https://isz-web.sz.gov.cn/sz/app/jimu/10593/", {
                url: l.mergeUrlQuery("".concat(l.LOCATION_URL_BASE, "/access/isz"), {
                    redirect: t || window.location.href
                })
            }) : n),
            content: i,
            shareTypes: [{
                platformID: 1
            }, {
                platformID: 2
            }]
        };
        return console.log(a),
        l.injectSdk().then(()=>{
            window.selfSC.share(a, ()=>{}
            )
        }
        ),
        !0
    }
    ;
    let u;
    l.$wechatSdkConfig = function(a) {
        return new Promise((n,i)=>{
            l.isWeiXin() && s && o.getJSON("/wechat/getConfig.do", {
                url: location.href.split("#")[0]
            }).done(t=>{
                (t.code < 200 || 300 <= t.code) && i(new Error("获取微信配置出错"));
                const e = null == t ? null : t.data;
                null == e && (console.warn("当前业务微信配置为空"),
                i(new Error("获取微信配置出错"))),
                s.config({
                    debug: !1,
                    appId: e.appId,
                    timestamp: e.timestamp,
                    nonceStr: e.nonStr,
                    signature: e.signature,
                    jsApiList: a || [],
                    openTagList: ["wx-open-launch-weapp", "wx-open-launch-app"]
                }),
                s.error(function(t) {
                    alert(t.errMsg),
                    i(new Error(t.errMsg))
                }),
                s.ready(function() {
                    n(e)
                })
            }
            )
        }
        )
    }
    ,
    l.$pascsmtSDKConfig = function() {
        return new Promise((i,a)=>{
            if (u)
                i(u);
            else {
                if (!l.isPASCSMT())
                    return Promise.reject(new Error("非smt平台"));
                const r = window.selfSC;
                (l.isSZMC() ? o.getJSON("/szMetro/getInitCode.do") : o.post("/pub/openapi/isz/init")).then(t=>{
                    const e = t.data || {};
                    var {appId: t, initCode: n} = e;
                    r.config({
                        debug: !1,
                        appId: t,
                        initCode: n
                    }),
                    r.ready(()=>{
                        u = e,
                        i(u)
                    }
                    ),
                    r.error(t=>{
                        t = new Error("i深圳: ".concat(t.message || t.code));
                        a(t)
                    }
                    )
                }
                )
            }
        }
        )
    }
    ,
    l.$sdkConfig = function() {
        return l.isWeiXin() ? l.$wechatSdkConfig(...arguments) : l.isPASCSMT() ? l.$pascsmtSDKConfig(...arguments) : Promise.resolve()
    }
    ,
    l.prevDateBy = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
        return t instanceof Date ? new Date(t.getTime() - 864e5 * e) : null
    }
    ,
    l.nextDateBy = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
        return t instanceof Date ? new Date(t.getTime() + 864e5 * e) : null
    }
    ,
    l.getDayLength = function(t) {
        return t instanceof Date ? ((t = new Date(t.getTime())).setDate(1),
        t.setMonth(t.getMonth() + 1),
        t.setDate(0),
        t.getDate()) : 0
    }
    ,
    l.prevMonthDateBy = function(n) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
          , a = 2 < arguments.length ? arguments[2] : void 0;
        if (n instanceof Date) {
            var r = l.getDayLength(n)
              , o = n.getFullYear()
              , s = i % 12;
            let t = Math.floor(i / 12)
              , e = n.getMonth() - s;
            e < 0 && (t += 1,
            e = 12 - Math.abs(e));
            i = new Date(o - t,e,1),
            s = l.getDayLength(i);
            return i.setDate(Math.min(s, r, a || n.getDate())),
            i
        }
        return null
    }
    ,
    l.nextMonthDateBy = function(n) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
          , a = 2 < arguments.length ? arguments[2] : void 0;
        if (n instanceof Date) {
            var r = l.getDayLength(n)
              , o = n.getFullYear()
              , s = i % 12;
            let t = Math.floor(i / 12)
              , e = n.getMonth() + s;
            11 < e && (t += 1,
            e -= 11);
            i = new Date(o + t,e,1),
            s = l.getDayLength(i);
            return i.setDate(Math.min(s, r, a || n.getDate())),
            i
        }
        return null
    }
    ,
    l.isSameMonth = function(t, e) {
        return t instanceof Date && e instanceof Date && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()
    }
    ,
    l.isSameWeek = function(t, e) {
        return t instanceof Date && e instanceof Date && (t = l.prevDateBy(t, t.getDay()),
        e = l.prevDateBy(e, e.getDay()),
        l.isSameDay(t, e))
    }
    ,
    l.isSameDay = function(t, e) {
        return t instanceof Date && e instanceof Date && l.isSameMonth(t, e) && t.getDate() === e.getDate()
    }
    ,
    l.clearHMS = function(t) {
        var e;
        return t instanceof Date ? ((e = new Date(t.getTime())).setMilliseconds(0),
        e.setSeconds(0),
        e.setMinutes(0),
        e.setHours(0),
        e) : t
    }
    ,
    l.formatPadZero = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2
          , n = t < 0;
        let i = Math.abs(t).toString();
        var t = i.indexOf(".")
          , a = e - (t < 0 ? i.length : t);
        if (0 < a)
            for (let t = 0; t < a; t++)
                i = "0".concat(i);
        return "".concat(n ? "-" : "").concat(i)
    }
    ,
    l.isNumber = function(t) {
        return "number" == typeof t && Number.isFinite(t)
    }
    ,
    l.formatDate = function(t) {
        var e;
        return null == t ? "" : (t = l.isNumber(t) ? new Date(t) : t)instanceof Date ? (e = l.formatPadZero,
        "".concat(t.getFullYear(), "-").concat(e(t.getMonth() + 1), "-").concat(e(t.getDate()))) : t
    }
    ,
    l.formatYearMonth = function(t) {
        var e;
        return null == t ? "" : (t = l.isNumber(t) ? new Date(t) : t)instanceof Date ? (e = l.formatPadZero,
        "".concat(t.getFullYear(), "-").concat(e(t.getMonth() + 1))) : t
    }
    ,
    l.formatShortDateHM = function(t) {
        var e, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-";
        return null == t ? "" : (t = l.isNumber(t) ? new Date(t) : t,
        e = l.formatPadZero,
        t instanceof Date ? "".concat(e(t.getMonth() + 1)).concat(n).concat(e(t.getDate()), " ").concat(e(t.getHours()), ":").concat(e(t.getMinutes())) : t)
    }
    ,
    l.formatDateHM = function(t) {
        var e;
        return null == t ? "" : (t = l.isNumber(t) ? new Date(t) : t,
        e = l.formatPadZero,
        t instanceof Date ? "".concat(t.getFullYear(), "-").concat(e(t.getMonth() + 1), "-").concat(e(t.getDate()), " ").concat(e(t.getHours()), ":").concat(e(t.getMinutes())) : t)
    }
    ,
    l.formatTimeDuration = function(t) {
        var t = +t || 0
          , e = t < 0
          , t = Math.abs(t - (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0))
          , n = []
          , i = Math.floor(t / 36e5)
          , a = (t %= 36e5,
        Math.floor(t / 6e4))
          , r = (t %= 6e4,
        Math.floor(t / 1e3))
          , t = t %= 1e3
          , i = (i && n.push(l.formatPadZero(i)),
        n.push(l.formatPadZero(a)),
        n.push(l.formatPadZero(r)),
        0 === n.length && 0 < t && n.push(l.formatPadZero(t, 3)),
        n.join(":"));
        return e && 0 < n.length ? "-".concat(i) : i
    }
    ;
    const h = /@!\w+/
      , p = (l.formatImageUrl = function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "".concat(l.$IMG_HOST, "/default_file/default_load_img.jpg@!img_small_200X200_prew");
        return null != t && 0 !== t.length && (n = t.replace(h, ""),
        e) ? "".concat(n, "@!").concat(e) : n
    }
    ,
    l.removeHTMLSpacing = function() {
        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").replace(/ *[\n\r|] */gm, "")
    }
    ,
    l.uuid = function() {
        let n = Date.now();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = Math.trunc((n + 16 * Math.random()) % 16);
            return n = Math.floor(n / 16),
            ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }
    ,
    new Set);
    let f = 0, m;
    l.loading = function(t) {
        f += 1,
        t && p.add(t),
        console.log("loading:", f, "loadingId:", t);
        t = document.querySelector(".pt-loading-mask");
        if (t)
            return t.getAttribute("id");
        t = "_".concat(l.uuid().replace(/-/g, ""));
        const e = o(document.createElement("div"));
        return e.addClass("pt-loading-mask"),
        e.attr("id", t),
        o(document.body).append(e),
        m = setTimeout(()=>{
            var t = o(document.createElement("div"));
            t.addClass("pt-loading-msg"),
            t.html("加载中..."),
            e.addClass("pt-loading-mask__show").append(t),
            o(document.body).addClass("no-scroll")
        }
        , 200),
        t
    }
    ,
    l.loadingClose = function(t) {
        if (t) {
            if (!p.has(t))
                return void console.log("loadingClose:", f, "loadingId:", t, "重复loadingClose");
            p.delete(t)
        }
        --f,
        console.log("loadingClose:", f, "loadingId:", t),
        0 < f || (f = 0,
        m && clearTimeout(m),
        o(".pt-loading-mask").remove(),
        o(document.body).removeClass("no-scroll"))
    }
    ,
    l.iframeAdjust = function(t) {
        return t ? new Promise(n=>{
            setTimeout(()=>{
                const e = t instanceof Element ? t : document.getElementById(t);
                e.onload = function() {
                    var t = document.createElement("link");
                    t.href = "/css/iframe.css",
                    t.rel = "stylesheet",
                    t.type = "text/css",
                    e.contentDocument.head.append(t),
                    e.contentDocument.body.innerHTML.trim() ? t.onload = function() {
                        setTimeout(()=>{
                            var t = e.contentDocument.documentElement.clientHeight || e.contentDocument.body.clientHeight;
                            e.setAttribute("height", "".concat(t, "px")),
                            n(e)
                        }
                        , 0)
                    }
                    : (e.setAttribute("height", 0),
                    n(e))
                }
            }
            , 0)
        }
        ) : Promise.reject(new Error("iframeId 不可用"))
    }
    ,
    l.message = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "标题"
          , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "内容";
        if (null == o)
            return Promise.reject(new Error("请先引入Jquery"));
        const n = o('<div class="popup-msg-bg"></div>')
          , i = o("\n    <div class='popup-msg-box'>\n      <div class='popup-box-title'>".concat(t, "</div>\n      <div class='popup-box-body'>").concat(e, "</div>\n      <div class='popup-box-footer'>确认</div>\n    </div>\n  "));
        return new Promise((t,e)=>{
            try {
                n.append(i),
                0 < n.length ? n.show() : o(document.body).append(n),
                o(".box-footer").click(()=>{
                    n.empty().hide(),
                    t("close")
                }
                )
            } catch (t) {
                e(new Error("添加dom出错"))
            }
        }
        )
    }
    ,
    l.confirm = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "标题"
          , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "内容";
        if (null == o)
            return Promise.reject(new Error("请先引入Jquery"));
        const n = o('<div class="popup-confirm-bg"></div>')
          , i = o("\n      <div class='popup-msg-box'>\n        <div class='popup-box-title'>".concat(t, "</div>\n        <div class='popup-box-body'>").concat(e, "</div>\n        <div class='popup-box-confirm-footer'>\n          <div class='popup-confirm-cancel'>取消</div>\n          <div class='popup-confirm-sure'>确定</div>\n        </div>\n      </div>\n    "));
        return new Promise((t,e)=>{
            try {
                n.append(i),
                0 < n.length ? n.show() : o(document.body).append(n),
                o(".confirm-sure").click(()=>{
                    n.empty().hide(),
                    t("sure")
                }
                ),
                o(".confirm-cancel").click(()=>{
                    n.empty().hide(),
                    t("cancel")
                }
                )
            } catch (t) {
                e(new Error("添加dom出错"))
            }
        }
        )
    }
    ;
    const g = .006693421622965943;
    l.decodeMoney = function(t) {
        let e = t;
        return null == e && (e = 0),
        Number.isFinite(e) ? n(e, 100) : e
    }
    ,
    l.formatMoney = function(t, e, n) {
        let i = t;
        return null == i && (i = 0),
        Number.isFinite(i) ? (t = l.decodeMoney(i).toString(),
        0 < i && n ? "+".concat(t) : t) : ""
    }
    ,
    l.wgs84ToGcj02 = function(t, e) {
        var e = +e
          , t = +t
          , n = (a = 2 * (n = +(n = t - 105)) - 100 + 3 * (i = +(i = e - 35)) + .2 * i * i + .1 * n * i + .2 * Math.sqrt(Math.abs(n)),
        (a += 2 * (20 * Math.sin(6 * n * Math.PI) + 20 * Math.sin(2 * n * Math.PI)) / 3) + 2 * (20 * Math.sin(i * Math.PI) + 40 * Math.sin(i / 3 * Math.PI)) / 3 + 2 * (160 * Math.sin(i / 12 * Math.PI) + 320 * Math.sin(i * Math.PI / 30)) / 3)
          , i = (i = 300 + (a = +(a = t - 105)) + 2 * (i = +(i = e - 35)) + .1 * a * a + .1 * a * i + .1 * Math.sqrt(Math.abs(a)),
        (i += 2 * (20 * Math.sin(6 * a * Math.PI) + 20 * Math.sin(2 * a * Math.PI)) / 3) + 2 * (20 * Math.sin(a * Math.PI) + 40 * Math.sin(a / 3 * Math.PI)) / 3 + 2 * (150 * Math.sin(a / 12 * Math.PI) + 300 * Math.sin(a / 30 * Math.PI)) / 3)
          , a = e / 180 * Math.PI
          , r = Math.sin(a)
          , r = 1 - g * r * r
          , o = Math.sqrt(r)
          , n = 180 * n / (6378137 * (1 - g) / (r * o) * Math.PI);
        return {
            lng: t + 180 * i / (6378137 / o * Math.cos(a) * Math.PI),
            lat: e + n
        }
    }
    ,
    l.getUserLocation = ()=>{
        if (null == o)
            return Promise.reject(new Error("请先引入Jquery"));
        const t = window.selfSC;
        return new Promise((r,o)=>{
            l.$sdkConfig(["getLocation"]).then(()=>{
                l.isWeiXin() && s && s.getLocation({
                    type: "gcj02",
                    success(t) {
                        r({
                            lng: t.longitude,
                            lat: t.latitude
                        })
                    }
                }),
                l.isPASCSMT() && t ? t.gps({
                    type: 1
                }, t=>{
                    var e, n, {code: t, message: i, data: a} = t;
                    0 === t ? ({longitude: e, latitude: n} = a = a || {},
                    a = _objectWithoutProperties(a, _excluded),
                    r(_objectSpread({
                        lng: e,
                        lat: n
                    }, a))) : o(new Error(i || t))
                }
                ) : null == navigator.geolocation ? o(new Error("您的设备不支持定位功能")) : navigator.geolocation.getCurrentPosition(t=>{
                    r(l.wgs84ToGcj02(t.coords.longitude, t.coords.latitude))
                }
                , t=>{
                    let e;
                    switch (t.code) {
                    case t.PERMISSION_DENIED:
                        e = "未在https安全域名下使用或者用户拒绝了地理定位请求";
                        break;
                    case t.POSITION_UNAVAILABLE:
                        e = "位置信息不可用";
                        break;
                    case t.TIMEOUT:
                        e = "获取用户位置的请求超时";
                        break;
                    case t.UNKNOWN_ERROR:
                        e = "定位时出现未知错误";
                        break;
                    default:
                        return void o(t)
                    }
                    o(new Error(e))
                }
                )
            }
            ).catch(o)
        }
        )
    }
    ,
    l.getDistance = (t,e)=>{
        var n, i, a;
        return t.lat || t.lng || e.lat || e.lng ? (i = (n = function(t) {
            return t * Math.PI / 180
        }
        )(t.lat),
        a = n(e.lat),
        t = n(t.lng) - n(e.lng),
        6378.137 * (2 * Math.asin(Math.sqrt(Math.pow(Math.sin((i - a) / 2), 2) + Math.cos(i) * Math.cos(a) * Math.pow(Math.sin(t / 2), 2)))) * 1e3) : new Error("请传入2个经纬度")
    }
    ,
    l.formatKilometer = t=>l.isNumber(t) ? t < 1e3 ? "".concat(t.toFixed(0), "m") : "".concat((t / 1e3).toFixed(1), "km") : "",
    l.getPageQuery = function(t) {
        var t = (t || window.location.href).split("#")[0].split("?")[1]
          , e = null == t ? [] : t.split("&")
          , n = {};
        for (let t = 0; t < e.length; t++) {
            var i = e[t].split("=");
            n[i[0]] = null == i[1] ? "" : decodeURIComponent(i[1])
        }
        return n
    }
    ,
    l.mergeUrlQuery = function(t, e, n, i) {
        if (null == o)
            return alert("jQuery 不可用"),
            t;
        var t = (t || "").split("#")
          , i = i || t[1]
          , [t] = t
          , a = l.getPageQuery(t);
        const r = Object.assign(a, e);
        Array.isArray(n) && n.forEach(t=>{
            delete r[t]
        }
        );
        a = o.param(r);
        return "".concat(t.split("?")[0]).concat(0 < a.length ? "?".concat(a) : "").concat(i ? "#".concat(i) : "")
    }
    ,
    l.posList = function(e, r) {
        l.getUserLocation().then(a=>{
            o.ajax({
                url: "/commonSales/getSalesListByPage.do?page=1&pageSize=".concat(r.pageSize, "&amapLocation=").concat(a.lng, "%2C").concat(a.lat, "&mapIds[0]=").concat(e.dataset.mapid)
            }).then(t=>{
                let i = "";
                t.data.rows.forEach(t=>{
                    var e = t.amapLocation.split(",")
                      , e = {
                        lng: e[0],
                        lat: e[1]
                    };
                    let n = "";
                    t.salesItems.forEach(t=>{
                        n += '<i class="licon_'.concat(t, '"></i>')
                    }
                    ),
                    i += '<li>\n          <a href="/venue/'.concat(t.id, '">\n            <div class="iso-left">\n              <img src="').concat(t.imageUrl, "@!").concat(r.imgExtend, '"></img>\n            </div>\n            <div class="flex">\n            <div class="flex-l">\n              <h3>').concat(t.salesName, "</h3>\n              <h5>").concat(t.salesAddress, "  <span>tel:").concat(t.commonSalesTels[0].salesTel, "</span></h5>\n              ").concat(n, '\n            </div>\n            <div class="flex-r">\n              <span class="addressIcon"></span>').concat(l.formatKilometer(l.getDistance(a, e)), "\n            </div>\n            </div>\n\n            </a>\n          </li>")
                }
                ),
                e.innerHTML = i
            }
            )
        }
        )
    }
    ,
    window.$Portal = l,
    o(()=>{
        [[l.isWeiXin, "wechat"], [l.isAndorid, "android"], [l.isiOS, "ios"], [l.isMiniProgram, "mini-webview"], [l.isISZ, "isz"], [l.isSZMC, "szmc"]].forEach(t=>{
            var [t,e] = t;
            e && null != t && t() && document.body.classList.add(e)
        }
        );
        const t = document.querySelector("head title");
        function e() {
            l.injectSdk().then(()=>{
                window.selfSC.setNavigationBarTitle(t.textContent || "", t=>{
                    0 !== t.code && alert("i深圳: ".concat(t.message || t.code))
                }
                )
            }
            )
        }
        l.getPageQuery().__debug && l.asyncInjectScript("".concat(l.$CDN_STATIC_HOST, "/static/vconsole/3.15.1/dist/vconsole.min.js"), "VConsole").then(t=>{
            t = new t;
            console.log("vConsole 初始化:", t)
        }
        ),
        l.isPASCSMT() && (l.isAndorid() && null != window.MutationObserver && (new window.MutationObserver(function() {
            e()
        }
        ).observe(t, {
            subtree: !0,
            characterData: !0,
            childList: !0
        }),
        e()),
        l.isiOS()) && window.addEventListener("pageshow", function() {
            e()
        })
    }
    )
}(),
function(t) {
    function u(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function s(t, e, n, i, a, r) {
        return u((e = u(u(e, t), u(i, r))) << a | e >>> 32 - a, n)
    }
    function h(t, e, n, i, a, r, o) {
        return s(e & n | ~e & i, t, e, a, r, o)
    }
    function p(t, e, n, i, a, r, o) {
        return s(e & i | n & ~i, t, e, a, r, o)
    }
    function f(t, e, n, i, a, r, o) {
        return s(e ^ n ^ i, t, e, a, r, o)
    }
    function m(t, e, n, i, a, r, o) {
        return s(n ^ (e | ~i), t, e, a, r, o)
    }
    function o(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var n, i, a, r, o = 1732584193, s = -271733879, l = -1732584194, c = 271733878, d = 0; d < t.length; d += 16)
            o = h(n = o, i = s, a = l, r = c, t[d], 7, -680876936),
            c = h(c, o, s, l, t[d + 1], 12, -389564586),
            l = h(l, c, o, s, t[d + 2], 17, 606105819),
            s = h(s, l, c, o, t[d + 3], 22, -1044525330),
            o = h(o, s, l, c, t[d + 4], 7, -176418897),
            c = h(c, o, s, l, t[d + 5], 12, 1200080426),
            l = h(l, c, o, s, t[d + 6], 17, -1473231341),
            s = h(s, l, c, o, t[d + 7], 22, -45705983),
            o = h(o, s, l, c, t[d + 8], 7, 1770035416),
            c = h(c, o, s, l, t[d + 9], 12, -1958414417),
            l = h(l, c, o, s, t[d + 10], 17, -42063),
            s = h(s, l, c, o, t[d + 11], 22, -1990404162),
            o = h(o, s, l, c, t[d + 12], 7, 1804603682),
            c = h(c, o, s, l, t[d + 13], 12, -40341101),
            l = h(l, c, o, s, t[d + 14], 17, -1502002290),
            o = p(o, s = h(s, l, c, o, t[d + 15], 22, 1236535329), l, c, t[d + 1], 5, -165796510),
            c = p(c, o, s, l, t[d + 6], 9, -1069501632),
            l = p(l, c, o, s, t[d + 11], 14, 643717713),
            s = p(s, l, c, o, t[d], 20, -373897302),
            o = p(o, s, l, c, t[d + 5], 5, -701558691),
            c = p(c, o, s, l, t[d + 10], 9, 38016083),
            l = p(l, c, o, s, t[d + 15], 14, -660478335),
            s = p(s, l, c, o, t[d + 4], 20, -405537848),
            o = p(o, s, l, c, t[d + 9], 5, 568446438),
            c = p(c, o, s, l, t[d + 14], 9, -1019803690),
            l = p(l, c, o, s, t[d + 3], 14, -187363961),
            s = p(s, l, c, o, t[d + 8], 20, 1163531501),
            o = p(o, s, l, c, t[d + 13], 5, -1444681467),
            c = p(c, o, s, l, t[d + 2], 9, -51403784),
            l = p(l, c, o, s, t[d + 7], 14, 1735328473),
            o = f(o, s = p(s, l, c, o, t[d + 12], 20, -1926607734), l, c, t[d + 5], 4, -378558),
            c = f(c, o, s, l, t[d + 8], 11, -2022574463),
            l = f(l, c, o, s, t[d + 11], 16, 1839030562),
            s = f(s, l, c, o, t[d + 14], 23, -35309556),
            o = f(o, s, l, c, t[d + 1], 4, -1530992060),
            c = f(c, o, s, l, t[d + 4], 11, 1272893353),
            l = f(l, c, o, s, t[d + 7], 16, -155497632),
            s = f(s, l, c, o, t[d + 10], 23, -1094730640),
            o = f(o, s, l, c, t[d + 13], 4, 681279174),
            c = f(c, o, s, l, t[d], 11, -358537222),
            l = f(l, c, o, s, t[d + 3], 16, -722521979),
            s = f(s, l, c, o, t[d + 6], 23, 76029189),
            o = f(o, s, l, c, t[d + 9], 4, -640364487),
            c = f(c, o, s, l, t[d + 12], 11, -421815835),
            l = f(l, c, o, s, t[d + 15], 16, 530742520),
            o = m(o, s = f(s, l, c, o, t[d + 2], 23, -995338651), l, c, t[d], 6, -198630844),
            c = m(c, o, s, l, t[d + 7], 10, 1126891415),
            l = m(l, c, o, s, t[d + 14], 15, -1416354905),
            s = m(s, l, c, o, t[d + 5], 21, -57434055),
            o = m(o, s, l, c, t[d + 12], 6, 1700485571),
            c = m(c, o, s, l, t[d + 3], 10, -1894986606),
            l = m(l, c, o, s, t[d + 10], 15, -1051523),
            s = m(s, l, c, o, t[d + 1], 21, -2054922799),
            o = m(o, s, l, c, t[d + 8], 6, 1873313359),
            c = m(c, o, s, l, t[d + 15], 10, -30611744),
            l = m(l, c, o, s, t[d + 6], 15, -1560198380),
            s = m(s, l, c, o, t[d + 13], 21, 1309151649),
            o = m(o, s, l, c, t[d + 4], 6, -145523070),
            c = m(c, o, s, l, t[d + 11], 10, -1120210379),
            l = m(l, c, o, s, t[d + 2], 15, 718787259),
            s = m(s, l, c, o, t[d + 9], 21, -343485551),
            o = u(o, n),
            s = u(s, i),
            l = u(l, a),
            c = u(c, r);
        return [o, s, l, c]
    }
    function l(t) {
        for (var e = "", n = 32 * t.length, i = 0; i < n; i += 8)
            e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
        return e
    }
    function c(t) {
        var e = [];
        for (e[(t.length >> 2) - 1] = void 0,
        i = 0; i < e.length; i += 1)
            e[i] = 0;
        for (var n = 8 * t.length, i = 0; i < n; i += 8)
            e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
        return e
    }
    function i(t) {
        for (var e, n = "0123456789abcdef", i = "", a = 0; a < t.length; a += 1)
            e = t.charCodeAt(a),
            i += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
        return i
    }
    function d(t) {
        return unescape(encodeURIComponent(t))
    }
    function a(t) {
        return l(o(c(t = d(t)), 8 * t.length))
    }
    function r(t, e) {
        var n, t = d(t), e = d(e), i = c(t), a = [], r = [];
        for (a[15] = r[15] = void 0,
        16 < i.length && (i = o(i, 8 * t.length)),
        n = 0; n < 16; n += 1)
            a[n] = 909522486 ^ i[n],
            r[n] = 1549556828 ^ i[n];
        return t = o(a.concat(c(e)), 512 + 8 * e.length),
        l(o(r.concat(t), 640))
    }
    function e(t, e, n) {
        return e ? n ? r(e, t) : i(r(e, t)) : n ? a(t) : i(a(t))
    }
    "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : t.MD5 = e
}(window.$Portal),
function(t) {
    let i;
    function e(t) {
        this.mode = a.MODE_8BIT_BYTE,
        this.data = t,
        this.parsedData = [];
        for (let t = 0, e = this.data.length; t < e; t++) {
            var n = []
              , i = this.data.charCodeAt(t);
            65536 < i ? (n[0] = 240 | (1835008 & i) >>> 18,
            n[1] = 128 | (258048 & i) >>> 12,
            n[2] = 128 | (4032 & i) >>> 6,
            n[3] = 128 | 63 & i) : 2048 < i ? (n[0] = 224 | (61440 & i) >>> 12,
            n[1] = 128 | (4032 & i) >>> 6,
            n[2] = 128 | 63 & i) : 128 < i ? (n[0] = 192 | (1984 & i) >>> 6,
            n[1] = 128 | 63 & i) : n[0] = i,
            this.parsedData.push(n)
        }
        this.parsedData = this.parsedData.flat(),
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
        this.parsedData.unshift(187),
        this.parsedData.unshift(239))
    }
    function l(t, e) {
        this.typeNumber = t,
        this.errorCorrectLevel = e,
        this.modules = null,
        this.moduleCount = 0,
        this.dataCache = null,
        this.dataList = []
    }
    e.prototype = {
        getLength(t) {
            return this.parsedData.length
        },
        write(n) {
            for (let t = 0, e = this.parsedData.length; t < e; t++)
                n.put(this.parsedData[t], 8)
        }
    },
    l.prototype = {
        addData(t) {
            t = new e(t);
            this.dataList.push(t),
            this.dataCache = null
        },
        isDark(t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                throw new Error(t + "," + e);
            return this.modules[t][e]
        },
        getModuleCount() {
            return this.moduleCount
        },
        make() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl(t, e) {
            this.moduleCount = 4 * this.typeNumber + 17,
            this.modules = new Array(this.moduleCount);
            for (let e = 0; e < this.moduleCount; e++) {
                this.modules[e] = new Array(this.moduleCount);
                for (let t = 0; t < this.moduleCount; t++)
                    this.modules[e][t] = null
            }
            this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(t, e),
            7 <= this.typeNumber && this.setupTypeNumber(t),
            null == this.dataCache && (this.dataCache = l.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, e)
        },
        setupPositionProbePattern(n, i) {
            for (let e = -1; e <= 7; e++)
                if (!(n + e <= -1 || this.moduleCount <= n + e))
                    for (let t = -1; t <= 7; t++)
                        i + t <= -1 || this.moduleCount <= i + t || (0 <= e && e <= 6 && (0 == t || 6 == t) || 0 <= t && t <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= t && t <= 4 ? this.modules[n + e][i + t] = !0 : this.modules[n + e][i + t] = !1)
        },
        getBestMaskPattern() {
            let e = 0
              , n = 0;
            for (let t = 0; t < 8; t++) {
                this.makeImpl(!0, t);
                var i = g.getLostPoint(this);
                (0 == t || e > i) && (e = i,
                n = t)
            }
            return n
        },
        createMovieClip(t, e, n) {
            var i = t.createEmptyMovieClip(e, n);
            this.make();
            for (let e = 0; e < this.modules.length; e++) {
                var a = +e;
                for (let t = 0; t < this.modules[e].length; t++) {
                    var r = +t;
                    this.modules[e][t] && (i.beginFill(0, 100),
                    i.moveTo(r, a),
                    i.lineTo(1 + r, a),
                    i.lineTo(1 + r, 1 + a),
                    i.lineTo(r, 1 + a),
                    i.endFill())
                }
            }
            return i
        },
        setupTimingPattern() {
            for (let t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (let t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
        },
        setupPositionAdjustPattern() {
            var n = g.getPatternPosition(this.typeNumber);
            for (let e = 0; e < n.length; e++)
                for (let t = 0; t < n.length; t++) {
                    var i = n[e]
                      , a = n[t];
                    if (null == this.modules[i][a])
                        for (let e = -2; e <= 2; e++)
                            for (let t = -2; t <= 2; t++)
                                -2 == e || 2 == e || -2 == t || 2 == t || 0 == e && 0 == t ? this.modules[i + e][a + t] = !0 : this.modules[i + e][a + t] = !1
                }
        },
        setupTypeNumber(t) {
            for (var e = g.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                var i = !t && 1 == (e >> n & 1);
                this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
            }
            for (n = 0; n < 18; n++) {
                i = !t && 1 == (e >> n & 1);
                this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
            }
        },
        setupTypeInfo(t, e) {
            for (var e = this.errorCorrectLevel << 3 | e, n = g.getBCHTypeInfo(e), i = 0; i < 15; i++) {
                var a = !t && 1 == (n >> i & 1);
                i < 6 ? this.modules[i][8] = a : i < 8 ? this.modules[i + 1][8] = a : this.modules[this.moduleCount - 15 + i][8] = a
            }
            for (i = 0; i < 15; i++) {
                a = !t && 1 == (n >> i & 1);
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = a : i < 9 ? this.modules[8][15 - i - 1 + 1] = a : this.modules[8][15 - i - 1] = a
            }
            this.modules[this.moduleCount - 8][8] = !t
        },
        mapData(i, a) {
            let t = -1
              , r = this.moduleCount - 1
              , o = 7
              , s = 0;
            for (let n = this.moduleCount - 1; 0 < n; n -= 2)
                for (6 == n && n--; ; ) {
                    for (let e = 0; e < 2; e++)
                        if (null == this.modules[r][n - e]) {
                            let t = !1;
                            s < i.length && (t = 1 == (i[s] >>> o & 1)),
                            g.getMask(a, r, n - e) && (t = !t),
                            this.modules[r][n - e] = t,
                            -1 == --o && (s++,
                            o = 7)
                        }
                    if ((r += t) < 0 || this.moduleCount <= r) {
                        r -= t,
                        t = -t;
                        break
                    }
                }
        }
    },
    l.PAD0 = 236,
    l.PAD1 = 17,
    l.createData = function(t, e, n) {
        for (var i = c.getRSBlocks(t, e), a = new d, r = 0; r < n.length; r++) {
            var o = n[r];
            a.put(o.mode, 4),
            a.put(o.getLength(), g.getLengthInBits(o.mode, t)),
            o.write(a)
        }
        let s = 0;
        for (r = 0; r < i.length; r++)
            s += i[r].dataCount;
        if (a.getLengthInBits() > 8 * s)
            throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * s + ")");
        for (a.getLengthInBits() + 4 <= 8 * s && a.put(0, 4); a.getLengthInBits() % 8 != 0; )
            a.putBit(!1);
        for (; ; ) {
            if (a.getLengthInBits() >= 8 * s)
                break;
            if (a.put(l.PAD0, 8),
            a.getLengthInBits() >= 8 * s)
                break;
            a.put(l.PAD1, 8)
        }
        return l.createBytes(a, i)
    }
    ,
    l.createBytes = function(t, e) {
        let n = 0
          , i = 0
          , a = 0;
        for (var r = new Array(e.length), o = new Array(e.length), s = 0; s < e.length; s++) {
            var l = e[s].dataCount
              , c = e[s].totalCount - l;
            i = Math.max(i, l),
            a = Math.max(a, c),
            r[s] = new Array(l);
            for (var d = 0; d < r[s].length; d++)
                r[s][d] = 255 & t.buffer[d + n];
            n += l;
            var l = g.getErrorCorrectPolynomial(c)
              , u = new v(r[s],l.getLength() - 1).mod(l);
            o[s] = new Array(l.getLength() - 1);
            for (d = 0; d < o[s].length; d++) {
                var h = d + u.getLength() - o[s].length;
                o[s][d] = 0 <= h ? u.get(h) : 0
            }
        }
        let p = 0;
        for (d = 0; d < e.length; d++)
            p += e[d].totalCount;
        var f = new Array(p);
        let m = 0;
        for (d = 0; d < i; d++)
            for (s = 0; s < e.length; s++)
                d < r[s].length && (f[m++] = r[s][d]);
        for (d = 0; d < a; d++)
            for (s = 0; s < e.length; s++)
                d < o[s].length && (f[m++] = o[s][d]);
        return f
    }
    ;
    var a = {
        MODE_NUMBER: Math.trunc(1),
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    };
    const r = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }
      , o = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    for (var g = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1334 | Math.trunc(1),
        G18: 7972 | Math.trunc(1),
        G15_MASK: 21522,
        getBCHTypeInfo(t) {
            let e = t << 10;
            for (; 0 <= g.getBCHDigit(e) - g.getBCHDigit(g.G15); )
                e ^= g.G15 << g.getBCHDigit(e) - g.getBCHDigit(g.G15);
            return (t << 10 | e) ^ g.G15_MASK
        },
        getBCHTypeNumber(t) {
            let e = t << 12;
            for (; 0 <= g.getBCHDigit(e) - g.getBCHDigit(g.G18); )
                e ^= g.G18 << g.getBCHDigit(e) - g.getBCHDigit(g.G18);
            return t << 12 | e
        },
        getBCHDigit(t) {
            let e = 0;
            for (; 0 != t; )
                e++,
                t >>>= 1;
            return e
        },
        getPatternPosition(t) {
            return g.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask(t, e, n) {
            switch (t) {
            case o.PATTERN000:
                return (e + n) % 2 == 0;
            case o.PATTERN001:
                return e % 2 == 0;
            case o.PATTERN010:
                return n % 3 == 0;
            case o.PATTERN011:
                return (e + n) % 3 == 0;
            case o.PATTERN100:
                return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
            case o.PATTERN101:
                return e * n % 2 + e * n % 3 == 0;
            case o.PATTERN110:
                return (e * n % 2 + e * n % 3) % 2 == 0;
            case o.PATTERN111:
                return (e * n % 3 + (e + n) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + t)
            }
        },
        getErrorCorrectPolynomial(e) {
            let n = new v([1],0);
            for (let t = 0; t < e; t++)
                n = n.multiply(new v([1, s.gexp(t)],0));
            return n
        },
        getLengthInBits(t, e) {
            if (1 <= e && e < 10)
                switch (t) {
                case a.MODE_NUMBER:
                    return 10;
                case a.MODE_ALPHA_NUM:
                    return 9;
                case a.MODE_8BIT_BYTE:
                case a.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + t)
                }
            else if (e < 27)
                switch (t) {
                case a.MODE_NUMBER:
                    return 12;
                case a.MODE_ALPHA_NUM:
                    return 11;
                case a.MODE_8BIT_BYTE:
                    return 16;
                case a.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + t)
                }
            else {
                if (!(e < 41))
                    throw new Error("type:" + e);
                switch (t) {
                case a.MODE_NUMBER:
                    return 14;
                case a.MODE_ALPHA_NUM:
                    return 13;
                case a.MODE_8BIT_BYTE:
                    return 16;
                case a.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + t)
                }
            }
        },
        getLostPoint(i) {
            var a = i.getModuleCount();
            let e = 0;
            for (var r = 0; r < a; r++)
                for (var o = 0; o < a; o++) {
                    let n = 0;
                    var s = i.isDark(r, o);
                    for (let e = -1; e <= 1; e++)
                        if (!(r + e < 0 || a <= r + e))
                            for (let t = -1; t <= 1; t++)
                                o + t < 0 || a <= o + t || 0 == e && 0 == t || s == i.isDark(r + e, o + t) && n++;
                    5 < n && (e += 3 + n - 5)
                }
            for (r = 0; r < a - 1; r++)
                for (o = 0; o < a - 1; o++) {
                    let t = 0;
                    i.isDark(r, o) && t++,
                    i.isDark(r + 1, o) && t++,
                    i.isDark(r, o + 1) && t++,
                    i.isDark(r + 1, o + 1) && t++,
                    0 != t && 4 != t || (e += 3)
                }
            for (r = 0; r < a; r++)
                for (o = 0; o < a - 6; o++)
                    i.isDark(r, o) && !i.isDark(r, o + 1) && i.isDark(r, o + 2) && i.isDark(r, o + 3) && i.isDark(r, o + 4) && !i.isDark(r, o + 5) && i.isDark(r, o + 6) && (e += 40);
            for (o = 0; o < a; o++)
                for (r = 0; r < a - 6; r++)
                    i.isDark(r, o) && !i.isDark(r + 1, o) && i.isDark(r + 2, o) && i.isDark(r + 3, o) && i.isDark(r + 4, o) && !i.isDark(r + 5, o) && i.isDark(r + 6, o) && (e += 40);
            let t = 0;
            for (o = 0; o < a; o++)
                for (r = 0; r < a; r++)
                    i.isDark(r, o) && t++;
            var n = Math.abs(100 * t / a / a - 50) / 5;
            return e += 10 * n
        }
    }, s = {
        glog(t) {
            if (t < 1)
                throw new Error("glog(" + t + ")");
            return s.LOG_TABLE[t]
        },
        gexp(t) {
            for (; t < 0; )
                t += 255;
            for (; 256 <= t; )
                t -= 255;
            return s.EXP_TABLE[t]
        },
        EXP_TABLE: Array.from({
            length: 256
        }),
        LOG_TABLE: Array.from({
            length: 256
        })
    }, n = 0; n < 8; n++)
        s.EXP_TABLE[n] = 1 << n;
    for (n = 8; n < 256; n++)
        s.EXP_TABLE[n] = s.EXP_TABLE[n - 4] ^ s.EXP_TABLE[n - 5] ^ s.EXP_TABLE[n - 6] ^ s.EXP_TABLE[n - 8];
    for (n = 0; n < 255; n++)
        s.LOG_TABLE[s.EXP_TABLE[n]] = n;
    function v(e, t) {
        if (null == e.length)
            throw new Error(e.length + "/" + t);
        let n = 0;
        for (; n < e.length && 0 == e[n]; )
            n++;
        this.num = new Array(e.length - n + t);
        for (let t = 0; t < e.length - n; t++)
            this.num[t] = e[t + n]
    }
    function c(t, e) {
        this.totalCount = t,
        this.dataCount = e
    }
    function d() {
        this.buffer = [],
        this.length = 0
    }
    v.prototype = {
        get(t) {
            return this.num[t]
        },
        getLength() {
            return this.num.length
        },
        multiply(n) {
            var i = new Array(this.getLength() + n.getLength() - 1);
            for (let e = 0; e < this.getLength(); e++)
                for (let t = 0; t < n.getLength(); t++)
                    i[e + t] ^= s.gexp(s.glog(this.get(e)) + s.glog(n.get(t)));
            return new v(i,0)
        },
        mod(t) {
            if (this.getLength() - t.getLength() < 0)
                return this;
            for (var e = s.glog(this.get(0)) - s.glog(t.get(0)), n = new Array(this.getLength()), i = 0; i < this.getLength(); i++)
                n[i] = this.get(i);
            for (i = 0; i < t.getLength(); i++)
                n[i] ^= s.gexp(s.glog(t.get(i)) + e);
            return new v(n,0).mod(t)
        }
    },
    c.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
    c.getRSBlocks = function(t, e) {
        var n = c.getRsBlockTable(t, e);
        if (null == n)
            throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        var i = n.length / 3
          , a = [];
        for (let t = 0; t < i; t++) {
            var r = n[3 * t + 0]
              , o = n[3 * t + 1]
              , s = n[3 * t + 2];
            for (let t = 0; t < r; t++)
                a.push(new c(o,s))
        }
        return a
    }
    ,
    c.getRsBlockTable = function(t, e) {
        switch (e) {
        case r.L:
            return c.RS_BLOCK_TABLE[4 * (t - 1) + 0];
        case r.M:
            return c.RS_BLOCK_TABLE[4 * (t - 1) + 1];
        case r.Q:
            return c.RS_BLOCK_TABLE[4 * (t - 1) + 2];
        case r.H:
            return c.RS_BLOCK_TABLE[4 * (t - 1) + 3]
        }
    }
    ,
    d.prototype = {
        get(t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        },
        put(e, n) {
            for (let t = 0; t < n; t++)
                this.putBit(1 == (e >>> n - t - 1 & 1))
        },
        getLengthInBits() {
            return this.length
        },
        putBit(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++
        }
    };
    const u = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
    function h() {
        let t = !1;
        var e = navigator.userAgent;
        return t = /android/i.test(e) && (t = !0,
        e = e.toString().match(/android (\d\.\d)/i)) && e[1] ? Number.parseFloat(e[1]) : t
    }
    f.prototype.draw = function(n) {
        var t = this._htOption
          , e = this._el
          , i = n.getModuleCount();
        Math.floor(t.width / i),
        Math.floor(t.height / i);
        function a(t, e) {
            var n = document.createElementNS("http://www.w3.org/2000/svg", t);
            for (const i in e)
                e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
            return n
        }
        this.clear();
        var r, o = a("svg", {
            viewBox: "0 0 " + String(i) + " " + String(i),
            width: "100%",
            height: "100%",
            fill: t.colorLight
        });
        o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        e.appendChild(o),
        o.appendChild(a("rect", {
            fill: t.colorLight,
            width: "100%",
            height: "100%"
        })),
        o.appendChild(a("rect", {
            fill: t.colorDark,
            width: "1",
            height: "1",
            id: "template"
        }));
        for (let e = 0; e < i; e++)
            for (let t = 0; t < i; t++)
                n.isDark(e, t) && ((r = a("use", {
                    x: String(t),
                    y: String(e)
                })).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"),
                o.appendChild(r))
    }
    ,
    f.prototype.clear = function() {
        for (; this._el.hasChildNodes(); )
            this._el.removeChild(this._el.lastChild)
    }
    ;
    const p = f;
    function f(t, e) {
        this._el = t,
        this._htOption = e
    }
    let m = "svg" === document.documentElement.tagName.toLowerCase() ? p : "undefined" == typeof CanvasRenderingContext2D ? (w.prototype.draw = function(n) {
        var i = this._htOption
          , t = this._el
          , a = n.getModuleCount()
          , r = Math.floor(i.width / a)
          , o = Math.floor(i.height / a)
          , s = ['<table style="border:0;border-collapse:collapse;">'];
        for (let e = 0; e < a; e++) {
            s.push("<tr>");
            for (let t = 0; t < a; t++)
                s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + o + "px;background-color:" + (n.isDark(e, t) ? i.colorDark : i.colorLight) + ';"></td>');
            s.push("</tr>")
        }
        s.push("</table>"),
        t.innerHTML = s.join("");
        var t = t.childNodes[0]
          , e = (i.width - t.offsetWidth) / 2
          , l = (i.height - t.offsetHeight) / 2;
        0 < e && 0 < l && (t.style.margin = l + "px " + e + "px")
    }
    ,
    w.prototype.clear = function() {
        this._el.innerHTML = ""
    }
    ,
    w) : function() {
        function t() {
            this._elImage.src = this._elCanvas.toDataURL("image/png"),
            this._elImage.style.display = "block",
            this._elCanvas.style.display = "none"
        }
        if (i && i <= 2.1) {
            const c = 1 / window.devicePixelRatio
              , d = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(t, e, n, i, a, r, o, s, l) {
                if ("nodeName"in t && /img/i.test(t.nodeName))
                    for (let t = arguments.length - 1; 1 <= t; t--)
                        arguments[t] = arguments[t] * c;
                else
                    void 0 === s && (arguments[1] *= c,
                    arguments[2] *= c,
                    arguments[3] *= c,
                    arguments[4] *= c);
                d.apply(this, arguments)
            }
        }
        function e(t, e) {
            this._bIsPainted = !1,
            i = h(),
            this._htOption = e,
            this._elCanvas = document.createElement("canvas"),
            this._elCanvas.width = e.width,
            this._elCanvas.height = e.height,
            t.appendChild(this._elCanvas),
            this._el = t,
            this._oContext = this._elCanvas.getContext("2d"),
            this._bIsPainted = !1,
            this._elImage = document.createElement("img"),
            this._elImage.alt = "Scan me!",
            this._elImage.style.display = "none",
            this._el.appendChild(this._elImage),
            this._bSupportDataURI = null
        }
        return e.prototype.draw = function(n) {
            var t = this._elImage
              , i = this._oContext
              , a = this._htOption
              , r = n.getModuleCount()
              , o = a.width / r
              , s = a.height / r
              , l = Math.round(o)
              , c = Math.round(s);
            t.style.display = "none",
            this.clear();
            for (let e = 0; e < r; e++)
                for (let t = 0; t < r; t++) {
                    var d = n.isDark(e, t)
                      , u = t * o
                      , h = e * s;
                    i.strokeStyle = d ? a.colorDark : a.colorLight,
                    i.lineWidth = 1,
                    i.fillStyle = d ? a.colorDark : a.colorLight,
                    i.fillRect(u, h, o, s),
                    i.strokeRect(Math.floor(u) + .5, Math.floor(h) + .5, l, c),
                    i.strokeRect(Math.ceil(u) - .5, Math.ceil(h) - .5, l, c)
                }
            this._bIsPainted = !0
        }
        ,
        e.prototype.makeImage = function() {
            this._bIsPainted && !function(t, e) {
                const n = this;
                n._fFail = e,
                n._fSuccess = t,
                null === n._bSupportDataURI ? ((e = document.createElement("img")).addEventListener("abort", t = function() {
                    n._bSupportDataURI = !1,
                    n._fFail && n._fFail.call(n)
                }
                ),
                e.addEventListener("error", t),
                e.addEventListener("load", function() {
                    n._bSupportDataURI = !0,
                    n._fSuccess && n._fSuccess.call(n)
                }),
                e.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==") : !0 === n._bSupportDataURI && n._fSuccess ? n._fSuccess.call(n) : !1 === n._bSupportDataURI && n._fFail && n._fFail.call(n)
            }
            .call(this, t)
        }
        ,
        e.prototype.isPainted = function() {
            return this._bIsPainted
        }
        ,
        e.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
            this._bIsPainted = !1
        }
        ,
        e.prototype.round = function(t) {
            return t && Math.floor(1e3 * t) / 1e3
        }
        ,
        e
    }();
    function w(t, e) {
        this._el = t,
        this._htOption = e
    }
    function y(t, n) {
        let i = 1;
        t = t;
        var e, a = (e = encodeURI(t).toString().replace(/%[\dA-Fa-f]{2}/g, "a")).length + (e.length != t ? 3 : 0);
        for (let e = 0, t = u.length; e <= t; e++) {
            let t = 0;
            switch (n) {
            case r.L:
                t = u[e][0];
                break;
            case r.M:
                t = u[e][1];
                break;
            case r.Q:
                t = u[e][2];
                break;
            case r.H:
                t = u[e][3]
            }
            if (a <= t)
                break;
            i++
        }
        if (i > u.length)
            throw new Error("Too long data");
        return i
    }
    (t = function(t, e) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: r.H
        },
        e = "string" == typeof e ? {
            text: e
        } : e)
            for (const n in e)
                this._htOption[n] = e[n];
        "string" == typeof t && (t = document.querySelector(t)),
        this._htOption.useSVG && (m = p),
        i = h(),
        this._el = t,
        this._oQRCode = null,
        this._oDrawing = new m(this._el,this._htOption),
        this._htOption.text && this.makeCode(this._htOption.text)
    }
    ).prototype.makeCode = function(t) {
        this._oQRCode = new l(y(t, this._htOption.correctLevel),this._htOption.correctLevel),
        this._oQRCode.addData(t),
        this._oQRCode.make(),
        this._el.title = t,
        this._oDrawing.draw(this._oQRCode),
        this.makeImage()
    }
    ,
    t.prototype.makeImage = function() {
        "function" == typeof this._oDrawing.makeImage && (!this.isAndroid || 3 <= this.isAndroid) && this._oDrawing.makeImage()
    }
    ,
    t.prototype.clear = function() {
        this._oDrawing.clear()
    }
    ,
    t.CorrectLevel = r,
    window.QRCode = t
}(),
function(t) {
    const c = window.jQuery;
    if (null != c) {
        const m = {
            ECONNABORTED: "服务器繁忙，请稍后再试",
            NaN: "未知错误",
            0: "服务器通信失败，请检查网络",
            400: "发出的请求有错误，服务器没有进行任何操作",
            401: "请登录后再操作",
            403: "您未授权访问请求的页面或资源，请联系相关人员后再试",
            404: "发出请求的页面或资源不存在，服务器没有进行操作",
            406: "请求的格式无法获得",
            410: "请求的资源被永久删除，且不会再得到的",
            422: "当创建一个对象时，发生一个验证错误",
            500: "操作异常，请联系管理员",
            502: "网关错误",
            503: "服务不可用，服务器暂时过载或维护中",
            504: "网关超时"
        }
          , {LOCATION_URL_BASE: g, $CDN_STATIC_HOST: v, $getAccessToken: w, $getOpenIdToken: y, isStartsWithProtocol: b, uuid: _, MD5: s, getPageQuery: T, mergeUrlQuery: S, loading: C, loadingClose: D, isAndroidMsgPushEntry: M, isNumber: o} = t
          , i = c.ajax
          , l = (c.ajax = function(t, e) {
            return c.isPlainObject(t) && (t = (e = t).url,
            delete e.url),
            n(e, "complete", t),
            n(e, "error", t),
            n(e, "success", t),
            i.call(this, t, e)
        }
        ,
        "D_c_V_o_a_e_C_x_E_7_S_s_9_p_w_X_Z_G_l_H_w_t_C_y_p_7_S_F_2_l_G_K".split("_"))
          , x = {
            Get: "get",
            Post: "post",
            PostJSON: "postJSON"
        };
        let d = 0
          , u = 200;
        const k = {
            493: "/user/authenticate",
            498: "/exam/binding",
            499: "/exam/choose-class",
            4001: "/",
            4002: "/user/complate"
        };
        c.ajaxSetup({
            beforeSend(t, e) {
                t.dataType = e.dataType,
                e.loadingId = _(),
                C(e.loadingId);
                var n = e.type.toUpperCase()
                  , i = ("GET" === n && (e.url = S(e.url, {
                    _time: Date.now()
                })),
                e.url.split("?")[0]);
                b(i) || (i.endsWith(".do") ? i.startsWith("/v2/") || (e.url = "/v2".concat(e.url)) : e.url = "/srv".concat(u, "/api").concat(e.url)),
                t.requestURL = e.url.split("?")[0],
                t.setRequestHeader("Access-Token", w() || "Access-Token"),
                t.setRequestHeader("Openid-Token", y() || "Openid-Token"),
                t.setRequestHeader("Entry-Tag", M() ? 1 : "");
                let a = null
                  , r = null;
                if ("GET" === n)
                    a = x.Get,
                    r = T(e.url);
                else if ("POST" === n)
                    if ("application/json" === e.contentType) {
                        a = x.PostJSON;
                        try {
                            r = JSON.parse(e.data)
                        } catch (t) {
                            console.warn("JSON.parse error: "),
                            console.warn(t)
                        }
                    } else
                        a = x.Post,
                        r = e.data ? T("?" + e.data) : {};
                if (null != a) {
                    i = e.url,
                    n = r,
                    e = a,
                    o = {
                        nonce: _().replace(/-/g, ""),
                        timestamp: Date.now() - d
                    },
                    i = /^\/srv\d+\/api/.test(i) ? p(i, o, n, e) : h(o, n, e),
                    o.signature = i.toUpperCase();
                    var o, s = o;
                    for (const c in s) {
                        var l = s[c];
                        t.setRequestHeader(c, null == l ? "" : l)
                    }
                }
            },
            dataFilter(e, n) {
                if ("json" === n) {
                    let t;
                    try {
                        t = JSON.parse(e)
                    } catch (t) {}
                    if (t) {
                        var {code: n, msg: i} = t;
                        if (null != n && 0 !== n && 200 !== n)
                            throw D(this.loadingId),
                            i = new Error(i || n),
                            alert(i.message),
                            i
                    }
                }
                return e
            },
            complete(e) {
                if (D(this.loadingId),
                null != e.status) {
                    let t = {
                        code: -1,
                        msg: 0 === e.status ? "网络异常，请重试" : "[" + e.status + "] " + (e.responseJSON ? e.responseJSON.msg : e.statusText)
                    };
                    if (200 <= e.status && e.status < 300) {
                        if (null != (t = f(e)) && null != t.code && 0 !== t.code && 200 !== t.code)
                            switch (t.code) {
                            case 493:
                            case 498:
                            case 499:
                            case 4001:
                            case 4002:
                                var n = k[t.code];
                                null == n ? alert("扩展的路径转发特征码未正确配置") : (o = T(),
                                location.href = "".concat(n, "?redirectURL=").concat(encodeURIComponent(o.redirectURL || location.href)));
                                break;
                            case 4402:
                            case 4403:
                            case 4405:
                                var i, a, r, {appId: n, srvId: o, memberId: s, authUrl: l, hash: c, redirectUrl: d, responseType: u, scope: h, state: p} = t.data || {};
                                l.startsWith("https://open.weixin.qq.com") ? (i = "/get-open-id.html",
                                r = d.indexOf("//"),
                                a = d.slice(r + 2, d.indexOf(i)),
                                d = "".concat(d.slice(0, r), "//").concat(a).concat(location.port ? ":".concat(location.port) : "").concat(i),
                                r = {
                                    redirectURL: location.href,
                                    appId: n,
                                    srvId: o,
                                    memberId: s,
                                    caseCode: t.code
                                },
                                location.href = S(l, {
                                    appid: n,
                                    scope: h,
                                    state: p,
                                    response_type: u,
                                    redirect_uri: S(d, r)
                                }, [], c)) : alert("微信平台链接异常");
                                break;
                            case 4302:
                                location.replace(S(t.data, {
                                    home: g
                                }));
                                break;
                            case 4404:
                                location.href = "/follow.html?redirectURL=".concat(encodeURIComponent(location.href));
                                break;
                            case 429:
                            case 100001:
                                location.href = "".concat(v, "/busy.html");
                                break;
                            default:
                                alert(e.requestURL + " 调用异常: " + (null == t.msg ? "" : t.msg) + ". 请检查...")
                            }
                    } else
                        switch (e.status) {
                        case 401:
                            window.top === window ? location.href = S("/access/auto", {
                                redirect: S("/user/login", {
                                    redirectURL: location.href,
                                    fromSHTML: 1
                                })
                            }) : window.top.location.href = "".concat(g, "/user/login?redirectURL=").concat(encodeURIComponent(window.top.location.href));
                            break;
                        case 500:
                            t = f(e) || {},
                            alert("调用异常:" + e.status + " " + (m[e.status] || e.responseText) + ", 错误码:" + t.requestId);
                            break;
                        default:
                            alert(e.requestURL + " 调用异常:" + e.status + " - " + (m[e.status] || e.responseText))
                        }
                }
            }
        }),
        c.ajax({
            dataType: "script",
            url: S("/pub/tool/sysDate", {
                _time: Date.now()
            }),
            async: !1
        });
        var t = Date.now()
          , e = window.$ServerTime || t;
        function n(t, e, n) {
            if (null != t) {
                const i = t[e];
                "function" == typeof i && (t[e] = function() {
                    return console.log("%c拦截 $.ajax[".concat(n, "] 的 ").concat(e, " 配置，追加 loadingClose()"), "background: #222; color: red;"),
                    D(this.loadingId),
                    i.apply(this, arguments)
                }
                )
            }
        }
        function h(t, e, n) {
            var i = c.extend({}, t)
              , a = (!function e(n, t, i, a) {
                if ("string" == typeof t) {
                    var r = a === x.Get ? encodeURIComponent(t) : t;
                    if (null == i && (a === x.Get || a === x.Post))
                        return void (n[r] = "");
                    if ("string" == typeof i || "boolean" == typeof i || "number" == typeof i)
                        return a === x.PostJSON && Number.isNaN(i) ? void 0 : void (n[r] = encodeURIComponent(i.toString()));
                    if (a === x.Post && Array.isArray(i))
                        return void (n[r] = encodeURIComponent(i.toString()))
                }
                if (c.isPlainObject(i)) {
                    var o = null == t ? "" : t + ".";
                    for (const l in i)
                        e(n, t && a === x.Get ? o + "[" + l + "]" : o + l, i[l], a)
                } else if (Array.isArray(i)) {
                    var s = null == t ? "" : t;
                    for (let t = 0; t < i.length; t++)
                        e(n, s + "[" + t + "]", i[t], a)
                }
            }(i, null, e, n),
            []);
            for (const o in i)
                a.push(o);
            a.sort((t,e)=>t < e ? -1 : e < t ? 1 : 0),
            a.push("_key"),
            i._key = l.join("");
            var r = [];
            for (let t = 0; t < a.length; t++)
                r.push(a[t] + "=" + i[a[t]]);
            t = r.join("&");
            return s(t)
        }
        function r(i) {
            if (null == i)
                return null;
            const a = [];
            return Object.keys(i).sort((t,e)=>t < e ? -1 : e < t ? 1 : 0).forEach(t=>{
                var e, n = i[t];
                (e = n)instanceof Element || e instanceof File || (null == n ? a.push("".concat(t, "=")) : o(n) || "string" == typeof n ? a.push("".concat(t, "=").concat(n)) : Array.isArray(n) ? a.push("".concat(t, "=").concat(n.join(","))) : a.push("".concat(t, "=").concat(n.toString())))
            }
            ),
            a.join("&")
        }
        function p(t, e, n, i) {
            var e = function(t) {
                var {nonce: t, timestamp: e} = t;
                return ["_key=".concat(l.join("")), "_timestamp=".concat(e), "_nonce=".concat(t)].join("&")
            }(e)
              , a = i === x.PostJSON ? JSON.stringify(n) : null
              , t = null == t || null == (t = t.split("?")[1]) ? void 0 : t.split("#")[0]
              , e = [e, t ? decodeURIComponent(t) : null, i === x.Post ? r(n) : null, null, a].map(t=>null != t ? t : "").join(",");
            return s(e)
        }
        function f(t) {
            if (null == t)
                return null;
            if (t.responseJSON)
                return t.responseJSON;
            if ("script" !== t.dataType)
                try {
                    return JSON.parse(t.responseText)
                } catch (t) {
                    console.warn("JSON.parse error: "),
                    console.warn(t)
                }
        }
        d = t - e,
        window.$SrvId && (u = window.$SrvId),
        delete window.$ServerTime,
        delete window.$SrvId
    }
}(window.$Portal),
function(p) {
    const l = window.jWeixin;
    if (null == l)
        p.$createShareBtn = function() {}
        ;
    else {
        const _ = window.jQuery;
        if (null != _) {
            let i = null;
            const T = p.isWeiXin()
              , S = p.isPASCSMT()
              , C = p.$CDN_STATIC_HOST;
            let a, r, o;
            const D = Date.now()
              , M = "guide-box"
              , x = {
                title: document.title || location.href,
                link: location.href,
                img: "https:".concat(p.$IMG_HOST, "/default_file/default_load_img.jpg@!img_small_200X200_prew"),
                desc: location.href
            };
            let s;
            function c(t) {
                return null == t || "number" == typeof t || "string" == typeof t ? t : t.toString()
            }
            function e() {
                return _("img:not(.".concat(M, " img)")).not(_("#img-box-".concat(D, "-img"))).filter(function() {
                    return 0 === this.src.indexOf("http") || 0 === this.src.indexOf("//")
                })
            }
            function f() {
                var t = _("img.special-share-img");
                return 0 < t.length ? [t.attr("src")] : (t = e().map(function() {
                    return {
                        src: this.src,
                        width: this.naturalWidth || 0
                    }
                }).sort(function(t, e) {
                    return e.width - t.width
                }),
                Array.from(t).map(t=>t.src))
            }
            function d() {
                var t = _("span.special-share-desc");
                return (1 === t.length ? t : _(document.body).clone().find("style, script,.".concat(M)).remove().end()).text().replace(/\s+/g, "")
            }
            function m() {
                var t = _("span.special-share-title");
                return 1 === t.length ? t.text().replace(/\s+/g, "") : null
            }
            function g(n) {
                return new Promise(t=>{
                    var e = new Image;
                    e.crossOrigin = "anonymous",
                    e.addEventListener("load", function() {
                        t(this)
                    }),
                    e.src = "".concat(n, "?").concat(Date.now())
                }
                )
            }
            function v(n, i, t) {
                return new Promise(e=>{
                    g(t).then(t=>{
                        n.fillStyle = "#fff",
                        n.fillRect(.69 * i, 420, 90, 90),
                        n.drawImage(t, .7 * i, 420, 80, 80),
                        e(n)
                    }
                    )
                }
                )
            }
            function w(t, e, n) {
                t.fillStyle = "#fff",
                t.fillRect(40, 420, .5 * n, 80),
                t.font = "16px normal",
                t.fillStyle = "#666",
                function(n, t, i, a, r, o) {
                    var s = 5 < arguments.length && void 0 !== o ? o : 14;
                    if ("string" == typeof t && "number" == typeof i && "number" == typeof a) {
                        var o = n["canvas"]
                          , l = (void 0 === r && (r = o && o.width || 300),
                        [...t]);
                        let e = "";
                        for (let t = 0; t < l.length; t += 1) {
                            var c = e + l[t];
                            r < n.measureText(c).width && 0 < t ? (n.fillText(e, i, s + a),
                            e = l[t],
                            a += s) : e = c
                        }
                        n.fillText(e, i, s + a)
                    }
                }(t, e, 50, 420, .4 * n)
            }
            function y(t, e, n) {
                !T || s && n || (e && (s = e),
                null != _ && ((n = t || m()) && (x.title = n),
                t = e || f(),
                x.img = Array.isArray(t) ? t[0] : t,
                (n = d()) && (x.desc = n),
                (i = null == i ? _.getJSON("/wechat/getConfig.do", {
                    url: location.href.split("#")[0]
                }) : i).done(function(t) {
                    t.code < 200 || 300 <= t.code || (null == (t = null == t ? null : t.data) ? (console.warn("当前业务微信配置为空, 准备的配置信息是 ⬇️:"),
                    console.log(x)) : (l.config({
                        debug: !1,
                        appId: t.appId,
                        timestamp: t.timestamp,
                        nonceStr: t.nonStr,
                        signature: t.signature,
                        jsApiList: ["updateTimelineShareData", "updateAppMessageShareData", "onMenuShareAppMessage", "onMenuShareTimeline"],
                        openTagList: ["wx-open-launch-weapp", "wx-open-launch-app"]
                    }),
                    l.error(function(t) {
                        alert(t.errMsg)
                    }),
                    l.ready(function() {
                        l.updateTimelineShareData({
                            title: x.title,
                            link: x.link,
                            imgUrl: x.img,
                            success() {}
                        }),
                        l.updateAppMessageShareData({
                            title: x.title,
                            desc: x.desc,
                            link: x.link,
                            imgUrl: x.img,
                            success() {}
                        })
                    })))
                })))
            }
            function b(t) {
                t.preventDefault()
            }
            p.$createShareBtn = function(t, e, n) {
                if (!T && !S)
                    return;
                var i = "portal-backward-compatible-share-" + D;
                let u = _("#" + i);
                if (0 < u.length)
                    return u;
                t && e && n && (a = c(t),
                r = c(e),
                o = c(n)),
                u = _(document.createElement("div")).attr("id", i).addClass("share-btn").on("click", function() {
                    _.ajax({
                        dataType: "json",
                        url: "/pubUser/isLogin.do"
                    }).done(function(t) {
                        var e;
                        null != t && t.data && a && r && o && _.ajax({
                            dataType: "json",
                            url: "/wechat/shareAddFee.do",
                            method: "POST",
                            data: {
                                dataId: a,
                                relType: r,
                                feeType: o
                            }
                        }),
                        S ? (t = f(),
                        e = {},
                        (t = Array.isArray(t) ? t[0] : t) && (e.img = t),
                        (t = m()) && (e.title = t),
                        (t = d()) && (e.desc = t),
                        p.pullUpShareDirectlyIfSupport(e)) : (h.show(),
                        document.body.classList.add("no-scroll"))
                    })
                });
                const h = _("\n      <div class='".concat(M, "'>\n        <div id='headWrapper'>\n            <canvas id='headerCanvas'></canvas>\n            <div id='qr'></div>\n            <div id='inputContainer' contenteditable=\"true\" >\n            </div>\n            <img id='img-box-").concat(D, "-img' class='canvas-img' alt='分享图' />\n        </div>\n        <div id='btnWrapper'>\n            <div class='copy'>\n                复制链接\n            </div>\n            <div class='save'>\n                长按保存\n            </div>\n        </div>\n        <div id='imgList'>\n            <div>请选择一张素材图作为封面</div>\n            <div></div>\n        </div>\n        <div class=\"link\">\n            ").concat(x.link, "\n        </div>\n        <div id='close'>\n          <div>返回</div>\n        </div>\n      </div>\n    ")).attr("id", "guide-box-" + D);
                return _(".link").text("".concat(x.link)),
                _(h.children("#close")).on("click", ()=>{
                    h.hide(),
                    document.body.classList.remove("no-scroll")
                }
                ),
                _(function() {
                    _(document.body).append(h).append(u);
                    const t = f();
                    var e = _("#companyName").text();
                    let i = 0;
                    _("#btnWrapper .copy").on("click", ()=>{
                        var t = document.querySelector(".link");
                        p.copyToClipboard(t.innerHTML.trim()).then(()=>{
                            alert("复制成功")
                        }
                        ).catch(t=>{
                            console.warn(t)
                        }
                        )
                    }
                    );
                    const a = _("#headerCanvas")[0].getContext("2d");
                    var n = document.querySelector("#qr")
                      , n = new QRCode(n,{
                        text: x.link,
                        width: 200,
                        height: 200
                    });
                    const r = _("#headWrapper").width();
                    var o = _("#headWrapper").height()
                      , o = (_("#headerCanvas")[0].width = r,
                    _("#headerCanvas")[0].height = o,
                    a.fillStyle = "#fff",
                    a.fillRect(0, 0, r, o),
                    !function(n, i, a, t) {
                        let r = 3 < arguments.length && void 0 !== t ? t : "";
                        return new Promise(e=>{
                            g("https:".concat(C, "/images/portal/share-bg.png")).then(t=>{
                                n.drawImage(t, 0, 0, i, 250),
                                g("https:".concat(C, "/images/portal/wechat.png")).then(t=>{
                                    n.drawImage(t, i / 2 - 30, 20, 60, 60),
                                    n.font = "18px normal",
                                    n.fillStyle = "#fff",
                                    n.fillText(r, i / 2 - 9 * r.length, 110),
                                    n.fillRect(i / 2 - 110, 140, 220, 220),
                                    n.drawImage(a, i / 2 - 100, 150, 200, 200),
                                    n.fillStyle = "#000",
                                    n.font = "14px normal",
                                    n.fillText("长按图片识别二维码进入", i / 2 - 80, 380),
                                    n.fillStyle = "#f0f0f0",
                                    n.fillRect(i / 2 - .4 * i, 400, .8 * i, 2),
                                    e(n)
                                }
                                )
                            }
                            )
                        }
                        )
                    }(a, r, n._oDrawing._elImage, e).then(e=>{
                        v(e, r, t[i]).then(()=>{
                            w(e, x.title, r);
                            var t = _("#headerCanvas")[0].toDataURL();
                            _(".canvas-img").attr("src", t)
                        }
                        )
                    }
                    ),
                    _("#inputContainer").text(x.title),
                    p.throttle(500, t=>{
                        25 < t.target.textContent.trim().length || (y(t.target.textContent.trim()),
                        w(a, t.target.textContent.trim(), r),
                        t = _("#headerCanvas")[0].toDataURL(),
                        _(".canvas-img").attr("src", t))
                    }
                    ));
                    if (_("#inputContainer").on("input", o),
                    Array.isArray(t)) {
                        let n = "";
                        t.forEach((t,e)=>{
                            n += '<div class="imgWrapper">\n              <img src="'.concat(t, '"/>\n              <i style="opacity: ').concat(e === i ? 1 : 0, ';"></i>\n            </div>')
                        }
                        ),
                        _("#imgList").children().eq(1).html(n),
                        _(".imgWrapper").on("click", function() {
                            i = _(this).index(),
                            y(_("#inputContainer").text(), _(this).children("img").attr("src")),
                            _("#imgList i").each(t=>{
                                t === i ? _("#imgList i").eq(t).css({
                                    opacity: "1"
                                }) : _("#imgList i").eq(t).css({
                                    opacity: "0"
                                })
                            }
                            ),
                            v(a, r, t[i]).then(()=>{
                                var t = _("#headerCanvas")[0].toDataURL();
                                _(".canvas-img").attr("src", t)
                            }
                            )
                        })
                    } else
                        _("#imgList").css({
                            opacity: 0
                        });
                    const s = _(window).width() - u.width()
                      , l = _(window).height() - u.height();
                    let c, d;
                    u.on("touchstart", function(t) {
                        var t = t || window.event
                          , t = (t.targetTouches || t.originalEvent.targetTouches)[0]
                          , e = u.offset();
                        c = t.clientX - e.left,
                        d = t.clientY - e.top,
                        document.addEventListener("touchmove", b, {
                            passive: !1
                        })
                    }).on("touchmove", function(t) {
                        t = t || window.event,
                        t = (t.targetTouches || t.originalEvent.targetTouches)[0];
                        let e = t.clientX - c
                          , n = t.clientY - d;
                        e < 0 ? e = 0 : e >= s && (e = s),
                        n < 0 ? n = 0 : n >= l && (n = l),
                        u.css({
                            left: e,
                            top: n
                        })
                    }).on("touchend", function() {
                        document.removeEventListener("touchmove", b)
                    })
                }),
                u
            }
            ,
            _(function() {
                y(),
                e().each(function() {
                    this.complete || this.addEventListener("load", function() {
                        y(null, null, !0)
                    })
                })
            })
        }
    }
}(window.$Portal),
function() {
    const e = window.jQuery;
    null != e && e(function() {
        var t = e(document.createElement("div"));
        t.addClass("bottom-safe-area-block"),
        e(document.body).append(t),
        console.log("bottom-safe-area-block added.")
    })
}(window.$Portal),
function(t) {
    const i = window.jQuery;
    if (null != i) {
        const {$CDN_STATIC_HOST: a, uuid: r} = t
          , s = "https:".concat(a)
          , l = {}
          , c = "central.getInitViewHTML";
        function e(e) {
            if (e.source !== window && (e.origin === s || e.origin === window.location.origin)) {
                var n, i, {type: a, viewId: r, payload: o} = JSON.parse(e.data) || {};
                let t = document.querySelector("#".concat(r));
                if (!t || r === t.id) {
                    if (null == t) {
                        if (a === c)
                            return;
                        t = e.source.frameElement
                    }
                    switch (a) {
                    case c:
                        n = t,
                        i = {
                            type: "ck-view.setViewHTML",
                            payload: l[r]
                        },
                        n.contentWindow.postMessage(JSON.stringify(_objectSpread(_objectSpread({}, i), {}, {
                            viewId: n.id
                        })), s);
                        break;
                    case "central.viewHeightChange":
                        t.style.height = "".concat(o + 2, "px");
                        break;
                    default:
                        console.warn("central 收到未识别的消息通知：".concat(a, ", 可能并不是发给 central 处理的."))
                    }
                }
            }
        }
        i(function() {
            window.addEventListener("message", e),
            i(".ck-content").each(function() {
                var t = i(this)
                  , e = "_".concat(r().replace(/-/g, ""))
                  , n = t.html();
                n && 0 !== n.trim().length && (l[e] = n,
                t.after('<iframe id="'.concat(e, '" src="https:').concat(a, "/static/ckeditor/37.1.0-wps/build/ckeditor-view.html?viewId=").concat(e, '" frameborder="0" border="0" width="100%"/>')))
            })
        })
    }
}(window.$Portal),
function(p) {
    null != p && (p.dom = function(t) {
        return "string" != typeof t ? t instanceof Array || t[0] && t.length ? [].slice.call(t) : [t] : (p.__create_dom_div__ || (p.__create_dom_div__ = document.createElement("div")),
        p.__create_dom_div__.innerHTML = t,
        [].slice.call(p.__create_dom_div__.childNodes))
    }
    ,
    p.fn.listpicker = function(t) {
        return this.each(function(a, i) {
            var s, t, r, o, e, n, l, c, d, u, h;
            i.__listpicker_inited || (i.__listpicker_inited = !0,
            s = p(".mui-listpicker-inner", i)[0],
            p.os.ios && s.classList.add("mui-listpicker-inner-ios"),
            t = i.offsetHeight,
            r = p("ul", s)[0],
            e = p("li", r)[0],
            o = 0,
            e ? o = e.offsetHeight : (r.innerHTML = "<li>...</li>",
            e = p("li", r)[0],
            o = e.offsetHeight,
            r.innerHTML = ""),
            r.style.paddingTop = r.style.paddingBottom = t / 2 - o / 2 + "px",
            (e = p.dom('<div class="mui-listpicker-rule"> </div>')[0]).style.height = o + "px",
            e.style.marginTop = -o / 2 + "px",
            i.appendChild(e),
            n = !1,
            u = d = !(c = function(t) {
                var e, n = parseInt((s.scrollTop / o).toFixed(0)), i = p("li", r);
                for (e in i) {
                    var a = i[e];
                    a && a.classList && (e == n ? a.classList.add("mui-listpicker-highlight") : a.classList.remove("mui-listpicker-highlight"))
                }
            }
            ),
            s.addEventListener("scroll", function(t) {
                n || (u = !0,
                s.scrollTimer && clearTimeout(s.scrollTimer),
                c(),
                s.scrollTimer = setTimeout(function() {
                    u = !1,
                    d && mui.os.ios || l()
                }, 100))
            }, !(l = function(t) {
                var e;
                n || (n = !0,
                e = parseInt((s.scrollTop / o).toFixed(0)),
                setTimeout(function() {
                    i.setSelectedIndex(e),
                    p.trigger(i, "change", {
                        index: i.getSelectedIndex(),
                        value: i.getSelectedValue(),
                        text: i.getSelectedText(),
                        item: i.getSelectedItem(),
                        element: i.getSelectedElement()
                    }),
                    c(),
                    n = !1
                }, 0))
            }
            )),
            mui.os.ios && (s.addEventListener("touchstart", function(t) {
                d = !0
            }, !1),
            s.addEventListener("touchend", function(t) {
                d = !1,
                u || setTimeout(function() {
                    l()
                }, 0)
            }, !1)),
            p(s).on("tap", "li", function(t) {
                var e, n = [].slice.call(p("li", r));
                for (e in n)
                    if (n[e] == this)
                        return void i.setSelectedIndex(e)
            }),
            i.getSelectedIndex = function() {
                return parseInt(s.scrollTop / o)
            }
            ,
            h = function(t, e, n, i, a, r) {
                var o = n * a;
                s.scrollTop = t + o,
                n < i ? (n++,
                setTimeout(function() {
                    h(t, e, n, i, a)
                }, 13)) : (s.scrollTop = e,
                r && r())
            }
            ,
            i.setSelectedIndex = function(t) {
                var e, n, i, a, r;
                t = parseInt(t || 0),
                e = s.scrollTop,
                r = ((n = o * t) - e) / (a = 100 / 13),
                setTimeout(function() {
                    h(e, n, 0, a, r, i)
                }, 13)
            }
            ,
            i.getSelectedElement = function() {
                var t = i.getSelectedIndex();
                return p("li", r)[t]
            }
            ,
            i.getSelectedItem = function() {
                var t, e = i.getSelectedElement();
                return e ? (t = e.getAttribute("data-item")) ? JSON.parse(t) : {
                    text: e.innerText,
                    value: e.getAttribute("data-value")
                } : null
            }
            ,
            i.setItems = function(t) {
                var e = [];
                for (a in t) {
                    var n = t[a] || {
                        text: "null",
                        value: "null" + a
                    }
                      , i = JSON.stringify(n);
                    e.push("<li data-value='" + n.value + "' data-item='" + i + "'>" + n.text + "</li>")
                }
                r.innerHTML = e.join(""),
                l()
            }
            ,
            i.getItems = function() {
                var t = []
                  , e = p("li", r);
                for (a in e) {
                    var n = e[a]
                      , i = n.getAttribute("data-item");
                    t.push(i ? JSON.parse(i) : {
                        text: n.innerText,
                        value: n.getAttribute("data-value")
                    })
                }
                return t
            }
            ,
            i.getSelectedValue = function() {
                var t = i.getSelectedItem();
                return t ? t.value : null
            }
            ,
            i.getSelectedText = function() {
                var t = i.getSelectedItem();
                return t ? t.text : null
            }
            ,
            i.setSelectedValue = function(t) {
                var e = p("li", r);
                for (a in e) {
                    var n = e[a];
                    if (n && n.getAttribute && n.getAttribute("data-value") == t)
                        return void i.setSelectedIndex(a)
                }
            }
            )
        })
    }
    ,
    p.ready(function() {
        p(".mui-listpicker").listpicker()
    }))
}(window.mui),
function(i) {
    null != i && (i.DtPicker = i.Class.extend({
        init: function(t) {
            var e = this
              , n = i.dom('<div class="mui-dtpicker es-calendar-dtpicker" data-type="datetime">\t\t<div class="mui-dtpicker-header">\t\t\t<button data-id="btn-cancel" class="mui-btn">取消</button>\t\t\t<button data-id="btn-ok" class="mui-btn mui-btn-blue">确定</button>\t\t</div>\t\t<div class="mui-dtpicker-title"><h5 data-id="title-y">年</h5><h5 data-id="title-m">月</h5><h5 data-id="title-d">日</h5><h5 data-id="title-h">时</h5><h5 data-id="title-i">分</h5></div>\t\t<div class="mui-dtpicker-body">\t\t\t<div data-id="picker-y" class="mui-listpicker">\t\t\t\t<div class="mui-listpicker-inner">\t\t\t\t\t<ul>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t</div>\t\t\t<div data-id="picker-m" class="mui-listpicker">\t\t\t\t<div class="mui-listpicker-inner">\t\t\t\t\t<ul>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t</div>\t\t\t<div data-id="picker-d" class="mui-listpicker">\t\t\t\t<div class="mui-listpicker-inner">\t\t\t\t\t<ul>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t</div>\t\t\t<div data-id="picker-h" class="mui-listpicker">\t\t\t\t<div class="mui-listpicker-inner">\t\t\t\t\t<ul>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t</div>\t\t\t<div data-id="picker-i" class="mui-listpicker">\t\t\t\t<div class="mui-listpicker-inner">\t\t\t\t\t<ul>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t</div>\t\t</div>\t</div>')[0]
              , n = (document.body.appendChild(n),
            i('[data-id*="picker"]', n).listpicker(),
            e.ui = {
                picker: n,
                mask: i.createMask(),
                ok: i('[data-id="btn-ok"]', n)[0],
                cancel: i('[data-id="btn-cancel"]', n)[0],
                y: i('[data-id="picker-y"]', n)[0],
                m: i('[data-id="picker-m"]', n)[0],
                d: i('[data-id="picker-d"]', n)[0],
                h: i('[data-id="picker-h"]', n)[0],
                i: i('[data-id="picker-i"]', n)[0],
                labels: i('[data-id*="title-"]', n)
            });
            n.cancel.addEventListener("tap", function() {
                e.hide()
            }, !1),
            n.ok.addEventListener("tap", function() {
                e.hide(),
                e.callback(e.getSelected())
            }, !1),
            n.y.addEventListener("change", function() {
                e._createDay()
            }, !1),
            n.m.addEventListener("change", function() {
                e._createDay()
            }, !1),
            n.mask[0].addEventListener("tap", function() {
                e.hide()
            }, !1),
            e._create(t)
        },
        getSelected: function() {
            var t = this.ui
              , e = this.options.type
              , n = {
                type: e,
                y: t.y.getSelectedItem(),
                m: t.m.getSelectedItem(),
                d: t.d.getSelectedItem(),
                h: t.h.getSelectedItem(),
                i: t.i.getSelectedItem(),
                toString: function() {
                    return this.value
                }
            };
            switch (e) {
            case "datetime":
                n.value = n.y.value + "-" + n.m.value + "-" + n.d.value + " " + n.h.value + ":" + n.i.value,
                n.text = n.y.text + "-" + n.m.text + "-" + n.d.text + " " + n.h.text + ":" + n.i.text;
                break;
            case "date":
                n.value = n.y.value + "-" + n.m.value + "-" + n.d.value,
                n.text = n.y.text + "-" + n.m.text + "-" + n.d.text;
                break;
            case "time":
                n.value = n.h.value + ":" + n.i.value,
                n.text = n.h.text + ":" + n.i.text;
                break;
            case "month":
                n.value = n.y.value + "-" + n.m.value,
                n.text = n.y.text + "-" + n.m.text;
                break;
            case "hour":
                n.value = n.y.value + "-" + n.m.value + "-" + n.d.value + " " + n.h.value,
                n.text = n.y.text + "-" + n.m.text + "-" + n.d.text + " " + n.h.text
            }
            return n
        },
        isLeapYear: function(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        },
        _inArray: function(t, e) {
            for (var n in t)
                if (t[n] === e)
                    return !0;
            return !1
        },
        getDayNum: function(t, e) {
            return this._inArray([1, 3, 5, 7, 8, 10, 12], e) ? 31 : this._inArray([4, 6, 9, 11], e) ? 30 : this.isLeapYear(t) ? 29 : 28
        },
        _fill: function(t) {
            return t = (t = t.toString()).length < 2 ? 0 + t : t
        },
        _createYear: function(t) {
            var e = this.options
              , n = this.ui
              , i = [];
            if (e.customData.y)
                i = e.customData.y;
            else
                for (var a = e.beginYear, r = e.endYear, o = a; o <= r; o++)
                    i.push({
                        text: o + "",
                        value: o
                    });
            n.y.setItems(i)
        },
        _createMonth: function(t) {
            var e = this.options
              , n = this.ui
              , i = [];
            if (e.customData.m)
                i = e.customData.m;
            else
                for (var a = 1; a <= 12; a++) {
                    var r = this._fill(a);
                    i.push({
                        text: r,
                        value: r
                    })
                }
            n.m.setItems(i)
        },
        _createDay: function(t) {
            var e = this.options
              , n = this.ui
              , i = [];
            if (e.customData.d)
                i = e.customData.d;
            else
                for (var a = this.getDayNum(parseInt(n.y.getSelectedValue()), parseInt(n.m.getSelectedValue())), r = 1; r <= a; r++) {
                    var o = this._fill(r);
                    i.push({
                        text: o,
                        value: o
                    })
                }
            n.d.setItems(i),
            t || n.d.getSelectedValue()
        },
        _createHours: function(t) {
            var e = this.options
              , n = this.ui
              , i = [];
            if (e.customData.h)
                i = e.customData.h;
            else
                for (var a = 0; a <= 23; a++) {
                    var r = this._fill(a);
                    i.push({
                        text: r,
                        value: r
                    })
                }
            n.h.setItems(i)
        },
        _createMinutes: function(t) {
            var e = this.options
              , n = this.ui
              , i = [];
            if (e.customData.i)
                i = e.customData.i;
            else
                for (var a = 0; a <= 59; a++) {
                    var r = this._fill(a);
                    i.push({
                        text: r,
                        value: r
                    })
                }
            n.i.setItems(i)
        },
        _setLabels: function() {
            var n = this.options;
            this.ui.labels.each(function(t, e) {
                e.innerText = n.labels[t]
            })
        },
        _setButtons: function() {
            var t = this.options
              , e = this.ui;
            e.cancel.innerText = t.buttons[0],
            e.ok.innerText = t.buttons[1]
        },
        _getInitValue: function() {
            var t = this.options
              , e = {};
            return t.value ? (t = t.value.replace(":", "-").replace(" ", "-").split("-"),
            e.y = t[0],
            e.m = t[1],
            e.d = t[2],
            e.h = t[3],
            e.i = t[4]) : (t = new Date,
            e.y = t.getFullYear(),
            e.m = t.getMonth() + 1,
            e.d = t.getDate(),
            e.h = t.getHours(),
            e.i = t.getMinutes()),
            e
        },
        _create: function(t) {
            var e = this
              , n = ((t = t || {}).labels = t.labels || ["年", "月", "日", "时", "分"],
            t.buttons = t.buttons || ["取消", "确定"],
            t.type = t.type || "datetime",
            t.customData = t.customData || {},
            e.options = t,
            new Date)
              , i = (t.beginYear = t.beginYear || n.getFullYear() - 10,
            t.endYear = t.endYear || n.getFullYear() + 10,
            e._getInitValue())
              , a = e.ui;
            e._setLabels(),
            e._setButtons(),
            a.picker.setAttribute("data-type", t.type),
            e._createYear(),
            e._createMonth(),
            e._createDay(),
            e._createHours(),
            e._createMinutes(),
            setTimeout(function() {
                a.y.setSelectedValue(i.y),
                a.m.setSelectedValue(i.m),
                a.d.setSelectedValue(i.d),
                a.h.setSelectedValue(i.h),
                a.i.setSelectedValue(i.i)
            }, 160)
        },
        show: function(t) {
            var e = this.ui;
            this.callback = t || i.noop,
            e.mask.show(),
            e.picker.style.webkitTransform = "translateY(0px)"
        },
        hide: function() {
            var t = this.ui;
            t.picker.style.webkitTransform = "translateY(300px)",
            t.mask.close()
        }
    }))
}(window.mui),
function(t) {
    const m = window.jQuery;
    if (null != m) {
        const s = window.mui;
        if (null == s)
            console.error("城市文化菜单日历组件初始化失败，请在mui之后加载本js文件。");
        else {
            const {$CDN_STATIC_HOST: l, $IMG_HOST: n, removeHTMLSpacing: d, isSameDay: g, isSameMonth: v, isSameWeek: u, getDayLength: i, clearHMS: w, prevMonthDateBy: h, nextMonthDateBy: p, prevDateBy: y, nextDateBy: b, formatDate: f, formatShortDateHM: a, formatYearMonth: r, formatImageUrl: _, $EventScheduleCalendar: T} = t;
            if ("function" == typeof T && T.prototype.constructor === T)
                console.error("城市文化菜单日历组件已经加载, 勿重复加载, 组件表现可能异常。请检查js引用的正确性!");
            else {
                const S = {
                    Day: 1,
                    Week: 2,
                    Month: 3,
                    Today: 4
                }
                  , C = {
                    More: 1,
                    Empty: 2,
                    Ending: 3
                };
                function c(t) {
                    this.options = t || {},
                    this.init()
                }
                function o(t, e) {
                    this.dom = t;
                    t = new Date;
                    this.date = new Date(t.getFullYear(),t.getMonth(),t.getDate()),
                    this.options = e || {},
                    this.showFullMonth = !1,
                    this.init()
                }
                function e(t, e) {
                    t = m(t);
                    if (t.data("instance"))
                        throw new Error("请勿重复初始化");
                    if (this.options = e || {},
                    this.options.mapType = this.options.mapType || 94,
                    null == this.options.mapId)
                        throw new Error("mapId无效");
                    if (null == this.options.pageId)
                        throw new Error("pageId无效");
                    (this.dom = t).data("instance", 1),
                    this.init()
                }
                Object.assign(c.prototype, {
                    constructor: c,
                    init() {
                        var {date: t, isDuplicate: e, isHead: n} = this.options;
                        m.extend(this, {
                            date: t,
                            isDuplicate: e
                        }),
                        this.dom = n ? m('\n          <div class="calender-box">\n            <div class="thead">\n              <div class="row">\n                <div class="cell">周一</div>\n                <div class="cell">周二</div>\n                <div class="cell">周三</div>\n                <div class="cell">周四</div>\n                <div class="cell">周五</div>\n                <div class="cell">周六</div>\n                <div class="cell">周日</div>\n              </div>\n            </div>\n          </div>\n        ') : m('\n          <div class="calender-box">\n            <div class="tbody">\n            </div>\n          </div>\n        '),
                        this.render()
                    },
                    render() {
                        var {date: e, showFullMonth: t, isHead: n, getCurrentModeType: i} = this.options;
                        if (!n) {
                            var a = new Date(e.getFullYear(),e.getMonth(),1)
                              , r = []
                              , o = []
                              , s = e.getDay() || 7;
                            for (let t = 0; t < s - 1; t++)
                                o.unshift(y(e, t + 1));
                            o.push(e);
                            for (let t = o.length; t < 7; t++)
                                o.push(b(o[o.length - 1]));
                            if (r.push(o),
                            t) {
                                let t = [];
                                for (; ; ) {
                                    7 === t.length && (r.unshift(t),
                                    t = []);
                                    var l = (0 === t.length ? r[0] : t)[0]
                                      , l = y(l);
                                    if (0 === t.length && l.getMonth() !== a.getMonth())
                                        break;
                                    t.unshift(l)
                                }
                                for (; ; ) {
                                    if (7 === t.length) {
                                        r.push(t);
                                        var c = t[t.length - 1];
                                        if (t = [],
                                        6 === r.length && b(c).getMonth() !== a.getMonth())
                                            break
                                    }
                                    c = 0 === t.length ? r[r.length - 1][6] : t[t.length - 1];
                                    t.push(b(c))
                                }
                            }
                            var n = this.dom.find(".tbody")
                              , d = []
                              , u = w(new Date)
                              , h = i();
                            for (let t = 0; t < r.length; t++) {
                                var p = r[t]
                                  , f = p[0];
                                d.push('<div class="'.concat(["row"].join(" "), '" data-date="').concat(f.getTime(), '">'));
                                for (let t = 0; t < p.length; t++) {
                                    var m = p[t];
                                    d.push('<div class="cell">'),
                                    d.push('<div class="cell-inner">'),
                                    d.push('<div class="'.concat(["cell-inner-body", m.getTime() < u.getTime() ? "cell-inner-body_before-today" : "", v(m, e) ? "" : "cell-inner-body_othermonth", g(m, u) ? "cell-inner-body_today" : "", h !== S.Day && h !== S.Today || !g(m, e) ? "" : "cell-inner-body_selectday"].join(" "), '" data-date="').concat(m.getTime(), '">')),
                                    d.push(m.getDate()),
                                    d.push('<div class="cell-inner-body_dataflag"></div>'),
                                    d.push("</div>"),
                                    d.push("</div>"),
                                    d.push("</div>")
                                }
                                d.push("</div>")
                            }
                            n.html(d.join(""))
                        }
                    },
                    destroy() {
                        this.dom.remove()
                    }
                }),
                Object.assign(o.prototype, {
                    constructor: o,
                    init() {
                        this.slideLength = 7,
                        this.slideHalfLength = Math.floor(this.slideLength / 2),
                        this.currentSlideIndex = this.slideHalfLength,
                        this.dom.html(d('\n          <div class="mui-slider es-calendar-slider">\n            <div class="mui-slider-group mui-slider-loop">\n            </div>\n          </div>\n        ')),
                        this.dateCalendarHead = new c({
                            isHead: !0
                        }),
                        this.dateCalendarItemList = [],
                        this.dtPicker = new s.DtPicker({
                            type: "month"
                        });
                        const e = this.options["dateClick"];
                        document.querySelector(".mui-slider").addEventListener("slide", t=>{
                            t = t.detail.slideNumber;
                            this.onSlide(t)
                        }
                        ),
                        this.dom.on("click", ".cell-inner-body", t=>{
                            t = m(t.currentTarget).data("date"),
                            t = new Date(t);
                            this.date = t,
                            e(),
                            this.highlight()
                        }
                        ),
                        this.reBuildCalendar()
                    },
                    onSlide(t) {
                        var e = this.options["afterSlide"]
                          , n = this.currentSlideIndex
                          , i = n === this.slideLength - 1
                          , a = t === this.slideLength - 1;
                        const r = 0 === n && a
                          , o = i && 0 === t;
                        this.currentSlideIndex = t;
                        let s = this.date;
                        r || o ? setTimeout(()=>{
                            var t;
                            r ? (t = this.dateCalendarItemList[0].date,
                            this.date = t,
                            this.reBuildCalendar(null, !1, !0)) : o && (t = this.dateCalendarItemList[this.dateCalendarItemList.length - 1].date,
                            this.date = t,
                            this.reBuildCalendar(null, !1, !0))
                        }
                        , 0) : (a = n < t,
                        s = this.showFullMonth ? (a ? p : h)(s) : (a ? b : y)(s, 7),
                        this.date = s,
                        e())
                    },
                    showDtPicker() {
                        this.dtPicker.show(t=>{
                            var {y: t, m: e} = t
                              , t = new Date(t.value,+e.value - 1,1);
                            t.setDate(Math.min(this.date.getDate(), i(t))),
                            this.date = t,
                            this.sliderGoto(this.slideHalfLength),
                            this.showFullMonth = !0,
                            this.reBuildCalendar(S.Month)
                        }
                        )
                    },
                    sliderGoto(t) {
                        this.currentSlideIndex = t,
                        this.sliderObj.gotoItem(this.currentSlideIndex)
                    },
                    render(t, e, n) {
                        this.dom.prepend(this.dateCalendarHead.dom);
                        for (let t = 0; t < this.dateCalendarItemList.length; t++) {
                            var i = this.dateCalendarItemList[t]
                              , a = m('\n          <div data-refer-date="'.concat(f(i.date), '"\n            class="').concat(["mui-slider-item", this.showFullMonth && v(i.date, this.date) || !this.showFullMonth && u(i.date, this.date) ? "mui-active" : "", i.isDuplicate ? "mui-slider-item-duplicate" : ""].join(" "), '">\n          </div>\n        '));
                            a.html(i.dom),
                            this.dom.find(".mui-slider-group").append(a)
                        }
                        const r = this.options["afterRender"];
                        setTimeout(()=>{
                            null == this.sliderObj && (this.sliderObj = s(".es-calendar-slider").slider()),
                            r(t, e, n)
                        }
                        , 0)
                    },
                    reRender(t, e, n) {
                        this.dom.children().filter(".thead").parent().remove(),
                        this.dom.find(".mui-slider-group").empty(),
                        this.render(t, e, n)
                    },
                    buildCalendar(t, e, n) {
                        var i = this.date.getDay() || 7
                          , a = y(this.date, i % 7 - 1)
                          , r = this.slideLength + 2
                          , o = this.currentSlideIndex + 1
                          , s = this.options["getCurrentModeType"]
                          , l = [];
                        for (let e = 0; e < r; e++) {
                            let t;
                            t = this.showFullMonth ? e < o ? h(this.date, o - e) : p(this.date, e - o) : e < o ? y(a, 7 * (o - e)) : b(this.date, 7 * (e - o)),
                            l.push(new c({
                                showFullMonth: this.showFullMonth,
                                date: t,
                                isDuplicate: 0 === e || e === r - 1,
                                getCurrentModeType: s
                            }))
                        }
                        this.dateCalendarItemList = l,
                        this.reRender(t, e, n)
                    },
                    reBuildCalendar(t, e, n) {
                        for (let t = 0; t < this.dateCalendarItemList.length; t++)
                            this.dateCalendarItemList[t].destroy();
                        this.dateCalendarItemList = [],
                        this.buildCalendar(t, e, n)
                    },
                    isReferWeek(t) {
                        var e = this.date
                          , n = e.getDay() || 7
                          , e = y(e, n % 7 - 1)
                          , n = b(e, 7)
                          , t = t.getTime();
                        return t >= e.getTime() && t < n.getTime()
                    },
                    switcherToggle(t) {
                        this.showFullMonth = null == t ? !this.showFullMonth : t,
                        this.reBuildCalendar(this.showFullMonth ? S.Month : S.Week, !0)
                    },
                    setDateToToday() {
                        var t = new Date
                          , t = new Date(t.getFullYear(),t.getMonth(),t.getDate());
                        this.date = t,
                        this.sliderGoto(this.slideHalfLength),
                        this.reBuildCalendar(S.Today)
                    },
                    highlight() {
                        this.highlightDate(),
                        this.highlightDateFlag()
                    },
                    highlightDate() {
                        var t = this.options["getCurrentModeType"]
                          , e = this.dom.find(".cell-inner-body");
                        e.removeClass("cell-inner-body_today"),
                        e.removeClass("cell-inner-body_selectday");
                        const i = new Date
                          , a = this.date
                          , r = t();
                        e.filter(function(t, e) {
                            var e = m(e)
                              , n = e.data("date")
                              , n = new Date(n);
                            return g(n, i) && e.addClass("cell-inner-body_today"),
                            r !== S.Day && r !== S.Today || !g(n, a) || e.addClass("cell-inner-body_selectday"),
                            !1
                        })
                    },
                    highlightDateFlag() {
                        const i = this.options["hasData"];
                        var t = this.dom.find(".cell-inner-body");
                        t.removeClass("cell-inner-body_data"),
                        t.filter(function(t, e) {
                            var e = m(e)
                              , n = e.data("date");
                            return i(new Date(n)) && e.addClass("cell-inner-body_data"),
                            !1
                        })
                    }
                }),
                Object.assign(e.prototype, {
                    constructor: e,
                    init() {
                        const {headerImgType: t, mapId: e, pageId: n, mapType: i, title: a="城市文化菜单日历", iconColr: r} = this.options;
                        this.contentTemp1 = '\n          <div class="tab-item-temp1">\n            <div class="tab-item-temp1_title" title="{{title}}">{{title}}</div>\n            <div class="tab-item-temp1_time" title="{{startTime}} - {{endTime}}">{{startTime}}<span>-</span>{{endTime}}</div>\n            <div class="tab-item-temp1_address" title="{{address}}">{{address}}</div>\n          </div>\n        ',
                        this.contentTemp2 = '\n        <div class="tab-item-temp2">\n          <img src="{{imgUrl}}" />\n          <div class="tab-item-temp1">\n            <div class="tab-item-temp1_title" title="{{title}}">{{title}}</div>\n            <div class="tab-item-temp1_time" title="{{startTime}} - {{endTime}}">{{startTime}}<span>-</span>{{endTime}}</div>\n            <div class="tab-item-temp1_address" title="{{address}}">{{address}}</div>\n          </div>\n        </div>\n      ',
                        this.defaultTempName = "contentTemp2",
                        this.dom.addClass("pt-border-box es-calendar"),
                        this.dom.html(d('\n          <div class="es-calendar-header '.concat(null == t ? "" : "es-calendar-header_".concat(t), '">\n            <div class="es-calendar-header__left text-overflow">\n              <div>').concat(a, '</div>\n              <div class="es-calendar-header__picker">\n                <span class="es-calendar-header__month"></span>\n                <img src="').concat(l, '/images/portal/es-calendar/icon-down.png" />\n              </div>\n            </div>\n            <div class="es-calendar-header__right">\n              <div class="view-btn view-type-btn today-btn hidden" data-mode="').concat(S.Today, '"></div>\n              <div class="view-btn view-type-btn week-btn hidden" data-mode="').concat(S.Week, '"></div>\n              <div class="view-btn view-type-btn month-btn hidden" data-mode="').concat(S.Month, '"></div>\n              <div class="view-btn view-temp-btn content-imgtext-btn hidden" data-temp-from="contentTemp1" data-temp-to="contentTemp2"></div>\n              <div class="view-btn view-temp-btn content-text-btn hidden" data-temp-from="contentTemp2" data-temp-to="contentTemp1"></div>\n            </div>\n          </div>\n          <div class="es-calendar-body">\n            <div class="es-calendar-calender"></div>\n            <div class="es-calendar-switcher">\n              <div class="es-calendar-switcher_line">\n              <div class="es-calendar-switcher_realline"></div>\n              </div>\n              <div class="es-calendar-switcher_imgbox">\n                \x3c!-- 大小控制在pages.scss里 --\x3e\n                <img style="filter: drop-shadow(1000px 0 0 ').concat(r, '); transform: translate(-1000px);"  src="').concat(l, '/images/portal/es-calendar/up.svg alt="图标" />\n              </div>\n            </div>\n            <div class="es-calendar-content">\n              <div class="es-calendar-content__tabs-header hidden"></div>\n              <div class="es-calendar-content__tabs-body hidden"></div>\n              <div class="es-calendar-content__loading">加载中...</div>\n              <div class="es-calendar-content__empty hidden">～暂无数据～</div>\n              <div class="es-calendar-content__nomore hidden">～没有更多～</div>\n              <div class="es-calendar-content__loadmore hidden">\n                加载更多\n              </div>\n            </div>\n          </div>\n        '))),
                        this.dateCalendar = new o(this.dom.find(".es-calendar-calender"),{
                            getCurrentModeType: ()=>this.viewMode,
                            dateClick: ()=>{
                                this.switchViewMode({
                                    mode: S.Day
                                })
                            }
                            ,
                            afterSlide: ()=>{
                                this.renderMonthText(),
                                this.loadMonthDateFlag();
                                var t = this.dateCalendar.showFullMonth ? S.Month : S.Week;
                                this.viewMode !== t ? this.switchViewMode({
                                    mode: t,
                                    resetTab: !0
                                }) : (this.resetDataAndState(),
                                this.loadTabData(+Object.keys(this.reqDataMapping)[0]))
                            }
                            ,
                            afterRender: (t,e,n)=>{
                                t && this.switchViewMode({
                                    mode: t,
                                    fromAfterRender: !0,
                                    onlySwitch: e,
                                    resetTab: !0
                                }),
                                this.dateCalendar.highlight(),
                                this.renderMonthText(),
                                e || this.loadMonthDateFlag(),
                                n && this.loadTabData(+Object.keys(this.reqDataMapping)[0])
                            }
                            ,
                            hasData: t=>{
                                return null != this.dataFlagMapping && (t = f(t),
                                this.dataFlagMapping[t])
                            }
                        }),
                        this.dom.on("click", ".es-calendar-switcher", t=>{
                            this.dateCalendar.showFullMonth ? m(t.currentTarget).removeClass("es-calendar-switcher__turn") : m(t.currentTarget).addClass("es-calendar-switcher__turn"),
                            this.dateCalendar.switcherToggle()
                        }
                        ),
                        this.dom.on("click", ".es-calendar-header__picker", ()=>{
                            this.dateCalendar.showDtPicker()
                        }
                        ),
                        this.dom.on("click", ".es-calendar-content__tabs-header > div", t=>{
                            t = m(t.currentTarget).data("mapId");
                            this.loadTabData(t, !0)
                        }
                        ),
                        this.dom.on("click", ".es-calendar-content__tab > div", t=>{
                            t = m(t.currentTarget).data("mapId");
                            t && (location.href = "/page.shtml?id=".concat(n, "&dataId=").concat(t, "&dataType=").concat(i))
                        }
                        ),
                        this.dom.on("click", ".es-calendar-content__loadmore", ()=>{
                            this.loadTabData()
                        }
                        ),
                        this.dom.on("click", ".view-temp-btn", t=>{
                            t = m(t.currentTarget).data("temp-to");
                            this.switchContentType(t)
                        }
                        ),
                        this.dom.on("click", ".view-type-btn", t=>{
                            t = m(t.currentTarget).data("mode");
                            this.switchViewMode({
                                mode: t,
                                resetTab: !0
                            })
                        }
                        ),
                        this.currentMapId = e,
                        this.switchViewMode({
                            mode: S.Week,
                            first: !0
                        }),
                        this.switchContentType(),
                        this.loadTabs()
                    },
                    loadMonthDateFlag() {
                        var t, e, n, i = this.getAllSubMapIds();
                        0 !== i.length && (n = this.dateCalendar.date,
                        t = this.options["mapType"],
                        e = h(n, 1, 1),
                        n = p(n, 2, 1),
                        m.getJSON("/pageConfig/queryCalendarData.do", {
                            mapId: i.join(","),
                            mapType: t,
                            startDate: e.getTime(),
                            endDate: n.getTime()
                        }).then(t=>{
                            this.dataFlagMapping = (null == t ? void 0 : t.data) || {},
                            this.dateCalendar.highlightDateFlag()
                        }
                        ))
                    },
                    renderMonthText() {
                        this.dom.find(".es-calendar-header__month").text("".concat(r(this.dateCalendar.date)))
                    },
                    hide(t) {
                        t.addClass("hidden")
                    },
                    show(t) {
                        t.removeClass("hidden")
                    },
                    reqDataMapping: {},
                    switchViewMode() {
                        var {mode: t, first: e, fromAfterRender: n, onlySwitch: i, resetTab: a} = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        if (t === S.Month || this.viewMode !== t || !n) {
                            this.viewMode = t;
                            var r = this.dom.find(".view-type-btn");
                            switch (this.viewMode) {
                            case S.Today:
                                this.hide(r.filter(".today-btn")),
                                this.dateCalendar.setDateToToday();
                                break;
                            case S.Day:
                                var o = new Date
                                  , s = r.filter(".today-btn");
                                g(this.dateCalendar.date, o) ? this.hide(s) : this.show(s);
                                break;
                            case S.Week:
                                this.hide(r),
                                this.show(r.not(".week-btn")),
                                n || e || this.dateCalendar.switcherToggle(!1);
                                break;
                            case S.Month:
                                this.hide(r),
                                this.show(r.not(".month-btn")),
                                n || e || this.dateCalendar.switcherToggle(!0)
                            }
                            i || (this.resetDataAndState(),
                            e) || this.loadTabData(a ? +Object.keys(this.reqDataMapping)[0] : void 0)
                        }
                    },
                    resetDataAndState() {
                        var e = Object.keys(this.reqDataMapping);
                        for (let t = 0; t < e.length; t++)
                            this.reqDataMapping[e[t]].list = [],
                            this.reqDataMapping[e[t]].state = C.More
                    },
                    switchContentType() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.defaultTempName
                          , n = (this.currentContentTemp = this[e],
                        this.dom.find(".view-temp-btn"));
                        this.hide(n);
                        for (let t = 0; t < n.length; t++) {
                            var i = m(n[t]);
                            i.data("temp-from") === e && this.show(i)
                        }
                        var a = this.dom.find(".es-calendar-content").find(".es-calendar-content__tabs-body").children();
                        for (let t = 0; t < a.length; t++) {
                            var r = m(a[t])
                              , o = r.data("mapId")
                              , s = (r.empty(),
                            this.reqDataMapping[o]);
                            for (let t = 0; t < s.list.length; t++)
                                r.append(this.renderTemp(s.list[t]))
                        }
                    },
                    loadTabs() {
                        var t = this.dom.find(".es-calendar-content");
                        const a = t.find(".es-calendar-content__tabs-header")
                          , r = t.find(".es-calendar-content__tabs-body");
                        a.empty(),
                        r.empty();
                        var {mapId: t, mapType: e} = this.options;
                        m.getJSON("/pageConfig/queryMap.do", {
                            mapId: t,
                            mapType: e
                        }).then(t=>{
                            var e = (null == t ? void 0 : t.data) || [];
                            for (let t = 0; t < e.length; t++) {
                                var n, i = e[t];
                                this.reqDataMapping[i.mapId] || (this.reqDataMapping[i.mapId] = {
                                    mapInfo: i,
                                    state: C.More,
                                    list: []
                                },
                                (n = m('<div class="'.concat(0 === t ? "selected" : "", '">').concat(i.showName, "</div>"))).data("mapId", i.mapId),
                                a.append(n),
                                (n = m(document.createElement("div")).addClass("es-calendar-content__tab hidden")).data("mapId", i.mapId),
                                r.append(n))
                            }
                            this.loadMonthDateFlag(),
                            this.loadTabData(+Object.keys(this.reqDataMapping)[0])
                        }
                        )
                    },
                    getAllSubMapIds() {
                        var e = Object.keys(this.reqDataMapping)
                          , n = this.options["mapId"]
                          , i = [];
                        for (let t = 0; t < e.length; t++) {
                            var a = +e[t];
                            a !== n && i.push(a)
                        }
                        return i
                    },
                    renderTabDataFlagDom(t) {
                        var e = this.dom.find(".es-calendar-content")
                          , n = e.find(".es-calendar-content__empty")
                          , i = e.find(".es-calendar-content__loadmore")
                          , a = e.find(".es-calendar-content__nomore");
                        switch (this.hide(a),
                        this.hide(n),
                        this.hide(i),
                        t.state) {
                        case C.Empty:
                            this.show(n);
                            break;
                        case C.Ending:
                            this.show(a);
                            break;
                        case C.More:
                            this.show(i)
                        }
                    },
                    loadTabData() {
                        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.currentMapId
                          , i = 1 < arguments.length ? arguments[1] : void 0
                          , a = this.dom.find(".es-calendar-content");
                        const r = a.find(".es-calendar-content__loading")
                          , o = a.find(".es-calendar-content__tabs-header")
                          , s = a.find(".es-calendar-content__tabs-body");
                        var a = s.children()
                          , l = o.children()
                          , n = (this.currentMapId = n,
                        l.filter((t,e)=>{
                            return m(e).data("mapId") === this.currentMapId
                        }
                        ));
                        const c = a.filter((t,e)=>{
                            return m(e).data("mapId") === this.currentMapId
                        }
                        )
                          , d = (l.not(n).removeClass("selected"),
                        this.hide(a.not(c)),
                        n.addClass("selected"),
                        this.show(c),
                        this.reqDataMapping[this.currentMapId]);
                        if (this.renderTabDataFlagDom(d),
                        !(i && 0 < d.list.length)) {
                            var {mapId: l, mapType: a, firstPageSize: n, pageSize: i} = this.options
                              , u = this.getAllSubMapIds();
                            const f = 0 < d.list.length ? i || 10 : n || 4;
                            this.show(r);
                            let t, e;
                            var h = this.dateCalendar.date;
                            switch (this.viewMode) {
                            case S.Today:
                            case S.Day:
                                t = h,
                                e = new Date(h.getTime() + 864e5);
                                break;
                            case S.Week:
                                var p = h.getDay() || 7
                                  , p = y(h, p % 7 - 1);
                                t = p,
                                e = b(p, 7);
                                break;
                            case S.Month:
                                t = new Date(h.getFullYear(),h.getMonth(),1),
                                e = new Date(h.getFullYear(),h.getMonth() + 1,1)
                            }
                            i = d.list.length;
                            0 === i && c.empty(),
                            this.currentMapId === l && 0 === u.length && console.warn("无子分类"),
                            m.getJSON("/pageConfig/queryExercise.do", {
                                startDate: t.getTime(),
                                endDate: e.getTime(),
                                mapId: this.currentMapId === l ? u.join(",") : this.currentMapId,
                                mapType: a,
                                pageStart: i,
                                pageSize: f
                            }).then(t=>{
                                var e = (null == t ? void 0 : t.data) || [];
                                this.hide(r),
                                this.show(o),
                                this.show(s);
                                for (let t = 0; t < e.length; t++)
                                    c.append(this.renderTemp(e[t]));
                                e.length < f ? d.state = C.Ending : e.length >= f && (d.state = C.More),
                                d.list = [...d.list, ...e],
                                0 === d.list.length && (d.state = C.Empty),
                                this.renderTabDataFlagDom(d)
                            }
                            )
                        }
                    },
                    renderTemp(t) {
                        var {exerciseList: t, url: e} = t
                          , e = m(this.currentContentTemp.replace(/{{imgUrl}}/gm, _(e, "img_exerciseList_prew", "".concat(n, "/default_file/default_load_img.jpg@!img_exerciseList_prew"))).replace(/{{title}}/gm, null == t ? void 0 : t.exerciseName).replace(/{{startTime}}/gm, a(null == t ? void 0 : t.startDate, "/")).replace(/{{endTime}}/gm, a(null == t ? void 0 : t.endDate, "/")).replace(/{{address}}/gm, null == t ? void 0 : t.exerciseAddress));
                        return e.data("mapId", null == t ? void 0 : t.id),
                        e
                    }
                }),
                t.$EventScheduleCalendar = e
            }
        }
    }
}(window.$Portal),
function(t) {
    const i = window.jQuery;
    if (null != i) {
        const n = t["formatTimeDuration"]
          , a = [1, 1.25, 1.5, 2]
          , o = (Object.assign(e.prototype, {
            constructor: e,
            init() {},
            setItems(t) {
                this.items = t
            },
            switchPlayState(n) {
                var {dataId: t, dataUrl: e, isCard: i} = n.options;
                (t || e) && (i || this.items.each((t,e)=>{
                    e.sound !== n && e.sound.playing && e.sound.pause()
                }
                ),
                n.playing ? n.pause() : n.play())
            }
        }),
        new e);
        function e() {
            this.init()
        }
        function r(t, e) {
            t = i(t);
            if (t.data("instance"))
                throw new Error("请勿重复初始化");
            this.options = e || {},
            (this.dom = t).data("instance", 1),
            this.init()
        }
        Object.assign(r.prototype, {
            constructor: r,
            init() {
                this.dom.on("click", ".pt-sound-btn", this, function(t) {
                    t = t.data;
                    o.switchPlayState(t)
                });
                var t = this.options["isCard"];
                t ? (this.initCard(),
                this.creatContext(),
                this.loadContext().then(t=>{
                    var {voiceInfo: t, trackSource: e} = t
                      , t = t["voiceContent"];
                    this.duration = e.buffer.duration,
                    this.dom.find(".pt-sound-card__name").html(t || "..."),
                    this.dom.find(".pt-sound-card__total").html(n(1e3 * this.duration)),
                    this.audioCtx.close(),
                    this.ready = !0
                }
                ),
                this.dom.find(".pt-sound-btn").html('\n          <svg\n            version="1.1"\n            id="图层_1"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink"\n            x="0px"\n            y="0px"\n            viewBox="0 0 1024 1024"\n            xml:space="preserve"\n            class="play-svg"\n          >\n            <g>\n              <path\n                d="M512,0C229.23,0,0,229.23,0,512s229.23,512,512,512s512-229.23,512-512S794.77,0,512,0z M512,992\n              C247.33,992,32,776.67,32,512S247.33,32,512,32s480,215.33,480,480S776.67,992,512,992z"\n              />\n              <path\n                d="M433.75,289.16c-21.27-14.18-49.75,1.07-49.75,26.63v392.41c0,25.56,28.48,40.8,49.75,26.62l294.31-196.21\n              c19-12.67,19-40.59,0-53.25L433.75,289.16z"\n              />\n            </g>\n          </svg>\n          <svg\n            version="1.1"\n            id="图层_1"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink"\n            x="0px"\n            y="0px"\n            viewBox="0 0 1024 1024"\n            xml:space="preserve"\n            class="pause-svg"\n          >\n            <g>\n              <path\n                d="M512,0C229.12,0,0,229.12,0,512s229.12,512,512,512s512-229.12,512-512S794.88,0,512,0z M512,992\n          C247.04,992,32,776.96,32,512S247.04,32,512,32s480,215.04,480,480S776.96,992,512,992z"\n              />\n              <path\n                d="M384,288c-17.92,0-32,14.08-32,32v384c0,17.92,14.08,32,32,32s32-14.08,32-32V320C416,302.08,401.92,288,384,288z"\n              />\n              <path\n                d="M640,288c-17.92,0-32,14.08-32,32v384c0,17.92,14.08,32,32,32s32-14.08,32-32V320C672,302.08,657.92,288,640,288z"\n              />\n            </g>\n          </svg>\n        ')) : this.ready = !0,
                this.setPlayState()
            },
            initCard() {
                this.dom.html('\n        <div class="pt-sound-card__inner">\n          <div class="pt-sound-card__name text-overflow">...</div>\n          <div class="pt-sound-card__body">\n            <div class="pt-sound-card__control">\n              <div class="pt-sound-card__opr">\n                <div class="pt-sound-card__progress_wrp">\n                  <div class="pt-sound-card__progress"></div>\n                  <div class="pt-sound-card__progress_left"></div>\n                  <div class="pt-sound-card__progress_handle">\n                    <div class="pt-sound-card__progress_handlecore"></div>\n                  </div>\n                </div>\n              </div>\n              <div class="pt-sound-card__tips">\n                <span class="pt-sound-card__current">00:00</span>\n                <span class="pt-sound-card__total">...</span>\n              </div>\n            </div>\n            <div class="pt-sound-card__btn">\n              <div class="pt-sound-btn"></div>\n            </div>\n          </div>\n          <div class="pt-sound-card__tools">\n            <button class="pt-sound-card__leftbtn">\n              <span>回退15秒</span>\n            </button>\n            <button class="pt-sound-card__ratebtn" data-index="0">\n              倍速\n            </button>\n            <button class="pt-sound-card__rightbtn">\n              <span>前进15秒</span>\n            </button>\n          </div>\n        </div>\n      '),
                this.dom.on("click", ".pt-sound-card__progress_wrp", this, function(t) {
                    var e = t.data
                      , n = i(this).width()
                      , t = t.offsetX / n;
                    e.movePlay(e.duration * t)
                }),
                this.dom.on("click", ".pt-sound-card__leftbtn,.pt-sound-card__rightbtn", this, function(t) {
                    var t = t.data
                      , e = i(this).is(".pt-sound-card__leftbtn") ? -15 : 15
                      , n = t.dom.find(".pt-sound-card__progress_left")[0].style.width
                      , n = Number.parseFloat(n) / 100
                      , n = Math.max(t.duration * n + e, 0);
                    n >= t.duration ? t.ended() : t.movePlay(n)
                }),
                this.dom.on("click", ".pt-sound-card__ratebtn", this, function(t) {
                    var t = t.data
                      , e = +this.dataset.index
                      , e = e < a.length - 1 ? 1 + e : 0
                      , n = a[e];
                    n && (t.changeRate(n),
                    this.dataset.index = e,
                    this.innerHTML = "".concat(1 === n ? "" : n, "倍速"))
                })
            },
            creatContext() {
                var t;
                null != this.audioCtx && "closed" !== this.audioCtx.state || (t = window.AudioContext || window.webkitAudioContext,
                this.audioCtx = new t)
            },
            startTimer() {
                this.flushState()
            },
            stopTimer() {
                this.timer && clearTimeout(this.timer)
            },
            getCurrentTime() {
                var t = this.oldCurrentTime || 0
                  , e = this.audioCtx.trackSource.playbackRate.value || 1;
                return (this.startFrom || 0) + (this.audioCtx.currentTime - t) * e
            },
            flushState() {
                this.flushStateDom(),
                this.timer = setTimeout(()=>{
                    this.flushState()
                }
                , 250)
            },
            flushStateDom(t) {
                var t = t ? 0 : this.getCurrentTime()
                  , e = t / this.duration * 100;
                this.dom.find(".pt-sound-card__current").html(n(1e3 * Math.floor(t))),
                this.dom.find(".pt-sound-card__progress_left").width("".concat(e, "%")),
                this.dom.find(".pt-sound-card__progress_handle").css({
                    left: "".concat(e, "%")
                })
            },
            play(e) {
                var t;
                this.ready && (this.audioCtx && "suspended" === this.audioCtx.state ? this.audioCtx.resume().then(()=>{
                    this.setPauseState()
                }
                ) : (t = null == (t = this.audioCtx) || null == (t = t.trackSource) ? void 0 : t.playbackRate.value,
                this.creatContext(),
                this.setPauseState(),
                this.loadContext(t).then(t=>{
                    t = t.trackSource;
                    this.audioCtx.trackSource = t,
                    this.startFrom = e || 0,
                    this.oldCurrentTime = 0,
                    this.audioCtx.trackSource.start(0, this.startFrom),
                    this.startTimer()
                }
                )))
            },
            movePlay(t) {
                this.ready && "closed" !== this.audioCtx.state && ("suspended" === this.audioCtx.state ? Promise.resolve() : this.audioCtx.suspend()).then(()=>{
                    this.audioCtx.close(),
                    this.stopTimer(),
                    this.play(t)
                }
                )
            },
            changeRate(t) {
                this.startFrom = this.getCurrentTime(),
                this.oldCurrentTime = this.audioCtx.currentTime,
                this.audioCtx.trackSource.playbackRate.value = t
            },
            pause() {
                null != this.audioCtx && "running" === this.audioCtx.state && this.audioCtx.suspend().then(()=>{
                    this.setPlayState(!0)
                }
                )
            },
            fetchVoiceInfo() {
                const {dataId: n, dataUrl: t, dataName: e} = this.options;
                return t ? Promise.resolve({
                    voiceUrl: t,
                    voiceContent: e || t
                }) : new Promise((e,t)=>{
                    i.getJSON("/commonVoice/getListByIds.do", {
                        ids: n
                    }).then(t=>{
                        e(null == t || null == (t = t.data) ? void 0 : t[0])
                    }
                    ).catch(t)
                }
                )
            },
            loadContext(a) {
                return null == this.voiceInfoPromise && (this.voiceInfoPromise = this.fetchVoiceInfo().then(t=>t || {})),
                this.voiceInfoPromise.then(i=>{
                    if (null == window.fetch)
                        throw alert("未兼容的浏览器版本"),
                        this.setPlayState(),
                        new Error("未兼容的浏览器版本");
                    var t = i["voiceUrl"];
                    return fetch(t, {
                        responseType: "arraybuffer"
                    }).then(t=>t.arrayBuffer()).then(t=>{
                        const e = this.audioCtx
                          , n = e.createBufferSource();
                        return n.addEventListener("ended", ()=>{
                            this.ended()
                        }
                        ),
                        e.decodeAudioData(t).then(t=>(n.buffer = t,
                        n.connect(e.destination),
                        n.playbackRate.value = a || 1,
                        {
                            voiceInfo: i,
                            trackSource: n
                        }))
                    }
                    )
                }
                )
            },
            setPlayState(t) {
                this.playing = !1,
                this.dom.removeClass("pt-sound-playing"),
                t && this.dom.addClass("pt-sound-pause")
            },
            setPauseState() {
                this.playing = !0,
                this.dom.removeClass("pt-sound-pause"),
                this.dom.addClass("pt-sound-playing")
            },
            ended() {
                this.audioCtx.close(),
                this.setPlayState(),
                this.stopTimer(),
                this.startFrom = 0,
                this.oldCurrentTime = 0,
                this.flushStateDom(!0)
            }
        }),
        i.fn.sound = function() {
            return this.each(function(t, e) {
                var n, i;
                e.sound || (n = e.dataset.id,
                i = e.dataset.url,
                e.sound = new r(e,{
                    dataId: +n || null,
                    dataUrl: null != i && i.startsWith("http") ? i : null
                }))
            })
        }
        ,
        i.fn.soundCard = function() {
            return this.each(function(t, e) {
                var n, i, a;
                e.sound || (n = e.dataset.id,
                i = e.dataset.url,
                a = e.dataset.name,
                e.sound = new r(e,{
                    dataId: +n || null,
                    dataUrl: null != i && i.startsWith("http") ? i : null,
                    dataName: a,
                    isCard: !0
                }))
            })
        }
        ,
        i(function() {
            var t = i(".pt-sound-item").sound();
            o.setItems(t.filter(function(t, e) {
                return e.sound instanceof r
            })),
            i(".pt-sound-card").soundCard()
        })
    }
}(window.$Portal);
