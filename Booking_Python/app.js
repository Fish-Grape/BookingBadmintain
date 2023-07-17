const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const window = dom.window;

const n = {
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    d: (e, t) => {
        for (let a in t) {
            if (n.o(t, a) && !n.o(e, a)) {
                Object.defineProperty(e, a, {
                    enumerable: true,
                    get: t[a]
                });
            }
        }
    }
};

function O(e1, t1, n1, o1) {
    if ("string" === typeof t1) {
        const i = o1 === b.fo.Get ? encodeURIComponent(t1) : t1;
        if (null == n1 && (o1 === b.fo.Get || o1 === b.fo.Post))
            return void (e1[i] = "");
        if ("string" === typeof n1 || "boolean" === typeof n1 || "number" === typeof n1) {
            if (o1 === b.fo.PostJSON && Number.isNaN(n1))
                return;
            return o1 === b.fo.Post && "string" === typeof n1 ? void (e1[i] = encodeURIComponent(n1.replaceAll(/\n/g, "\r\n"))) : void (e1[i] = encodeURIComponent(n1.toString()));
        }
        if (o1 === b.fo.Post && Array.isArray(n1))
            return void (e1[i] = encodeURIComponent(n1.toString()));
        if (n1 instanceof File)
            return (e1[i] = (0, M.w)(n1));
        if (a().isMoment(n1) || n1 instanceof Date) {
            const t2 = n1.toISOString();
            e1[i] = o1 === b.fo.Get ? encodeURIComponent(t2) : t2;
        }
    }
    if (sp(n1)) {
        const i2 = null == t1 ? "" : `${t1}.`,
            r = Object.entries(n1);
        for (let n2 = 0; n2 < r.length; n2 += 1) {
            const [a, c] = r[n2];
            u(e1, t1 && o1 === b.fo.Get ? `${t1}[${a}]` : `${i2}${a}`, c, o1);
        }
    } else if (Array.isArray(n1)) {
        const i3 = null == t1 ? "" : t1;
        for (let t3 = 0; t3 < n1.length; t3 += 1)
            u(e1, `${i3}[${t3}]`, n1[t3], o1);
    }
}

function sp(e1) {
    var p = Object.prototype,
        a = "[object Object]",
        b = p.hasOwnProperty;

    function r(e) {
        return null != e && "object" == typeof e;
    }

    var i = function (e) {
        var t = r.call(e, c)
            , n = e[c];
        try {
            e[c] = void 0;
            var o = !0
        } catch (p) { }
        var i = a.call(e);
        return o && (t ? e[c] = n : delete e[c]),
            i
    }

    function o(e) {
        var o1 = window.Symbol,
            r1 = function (e) {
                return null != e && "object" == typeof e
            },
            a1 = "[object Null]",
            c1 = "[object Undefined]",
            p1 = o1 ? o1.toStringTag : void 0;
        return null == e ? void 0 === e ? c1 : a1 : p1 && p1 in Object(e) ? i(e) : r1(e);
    }

    if (!r(e1) || o(e1) != a)
        return !1;
    var t1 = i(e1);
    if (null === t1)
        return !0;
    var n1 = b.call(t1, "constructor") && t1.constructor;
    return "function" == typeof n1 && n1 instanceof n1 && s.call(n1) == M;
}


function u(e1, t1, n1, o1) {
    if ("string" === typeof t1) {
        const i = o1 === b.fo.Get ? encodeURIComponent(t1) : t1;
        if (null == n1 && (o1 === b.fo.Get || o1 === b.fo.Post))
            return void (e1[i] = "");
        if ("string" === typeof n1 || "boolean" === typeof n1 || "number" === typeof n1) {
            if (o1 === b.fo.PostJSON && Number.isNaN(n1))
                return;
            return o1 === b.fo.Post && "string" === typeof n1 ? void (e1[i] = encodeURIComponent(n1.replaceAll(/\n/g, "\r\n"))) : void (e1[i] = encodeURIComponent(n1.toString()));
        }
        if (o1 === b.fo.Post && Array.isArray(n1))
            return void (e1[i] = encodeURIComponent(n1.toString()));
        if (n1 instanceof File)
            return (e1[i] = (0, M.w)(n1));
        if (a().isMoment(n1) || n1 instanceof Date) {
            const t2 = n1.toISOString();
            e1[i] = o1 === b.fo.Get ? encodeURIComponent(t2) : t2;
        }
    }
    if (sp(n1)) {
        const i = null == t1 ? "" : `${t1}.`,
            r = Object.entries(n1);
        for (let a = 0; a < r.length; a += 1) {
            const [c, s] = r[a];
            u(e1, t1 && o1 === b.fo.Get ? `${t1}[${c}]` : `${i}${c}`, s, o1);
        }
    } else if (Array.isArray(n1)) {
        const i = null == t1 ? "" : t1;
        for (let t2 = 0; t2 < n1.length; t2 += 1)
            u(e1, `${i}[${t2}]`, n1[t2], o1);
    }
}



function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
            n.push.apply(n, o)
    }
    return n
}


function r(e) {
    function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            o(e)
    }
    function i(e, t) {
        if ("object" !== o(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== o(i))
                return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
    var t = i(e, "string");
    return "symbol" === o(t) ? t : String(t)
}

var o = {
    Z: function (e, t, n) {
        return t = r(t),
            t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
    }
}

function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(n), !0).forEach((function (t) {
            (0,
                o.Z)(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}

var encode = function (arg) {
    var o = 0;
    function i(e) {
        return a(r(c(e)))
    }
    function r(e) {
        return s(b(p(e), 8 * e.length))
    }
    function a(e) {
        for (var t, n = o ? "0123456789ABCDEF" : "0123456789abcdef", i = "", r = 0; r < e.length; r++)
            t = e.charCodeAt(r),
                i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
        return i
    }
    function c(e) {
        var t, n, o = "", i = -1;
        while (++i < e.length)
            t = e.charCodeAt(i),
                n = i + 1 < e.length ? e.charCodeAt(i + 1) : 0,
                55296 <= t && t <= 56319 && 56320 <= n && n <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & n),
                    i++),
                t <= 127 ? o += String.fromCharCode(t) : t <= 2047 ? o += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? o += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (o += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
        return o
    }
    function p(e) {
        for (var t = Array(e.length >> 2), n = 0; n < t.length; n++)
            t[n] = 0;
        for (n = 0; n < 8 * e.length; n += 8)
            t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
        return t
    }
    function s(e) {
        for (var t = "", n = 0; n < 32 * e.length; n += 8)
            t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
        return t
    }
    function b(e, t) {
        e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
            var c = n
                , p = o
                , s = i
                , b = r;
            n = l(n, o, i, r, e[a + 0], 7, -680876936),
                r = l(r, n, o, i, e[a + 1], 12, -389564586),
                i = l(i, r, n, o, e[a + 2], 17, 606105819),
                o = l(o, i, r, n, e[a + 3], 22, -1044525330),
                n = l(n, o, i, r, e[a + 4], 7, -176418897),
                r = l(r, n, o, i, e[a + 5], 12, 1200080426),
                i = l(i, r, n, o, e[a + 6], 17, -1473231341),
                o = l(o, i, r, n, e[a + 7], 22, -45705983),
                n = l(n, o, i, r, e[a + 8], 7, 1770035416),
                r = l(r, n, o, i, e[a + 9], 12, -1958414417),
                i = l(i, r, n, o, e[a + 10], 17, -42063),
                o = l(o, i, r, n, e[a + 11], 22, -1990404162),
                n = l(n, o, i, r, e[a + 12], 7, 1804603682),
                r = l(r, n, o, i, e[a + 13], 12, -40341101),
                i = l(i, r, n, o, e[a + 14], 17, -1502002290),
                o = l(o, i, r, n, e[a + 15], 22, 1236535329),
                n = z(n, o, i, r, e[a + 1], 5, -165796510),
                r = z(r, n, o, i, e[a + 6], 9, -1069501632),
                i = z(i, r, n, o, e[a + 11], 14, 643717713),
                o = z(o, i, r, n, e[a + 0], 20, -373897302),
                n = z(n, o, i, r, e[a + 5], 5, -701558691),
                r = z(r, n, o, i, e[a + 10], 9, 38016083),
                i = z(i, r, n, o, e[a + 15], 14, -660478335),
                o = z(o, i, r, n, e[a + 4], 20, -405537848),
                n = z(n, o, i, r, e[a + 9], 5, 568446438),
                r = z(r, n, o, i, e[a + 14], 9, -1019803690),
                i = z(i, r, n, o, e[a + 3], 14, -187363961),
                o = z(o, i, r, n, e[a + 8], 20, 1163531501),
                n = z(n, o, i, r, e[a + 13], 5, -1444681467),
                r = z(r, n, o, i, e[a + 2], 9, -51403784),
                i = z(i, r, n, o, e[a + 7], 14, 1735328473),
                o = z(o, i, r, n, e[a + 12], 20, -1926607734),
                n = u(n, o, i, r, e[a + 5], 4, -378558),
                r = u(r, n, o, i, e[a + 8], 11, -2022574463),
                i = u(i, r, n, o, e[a + 11], 16, 1839030562),
                o = u(o, i, r, n, e[a + 14], 23, -35309556),
                n = u(n, o, i, r, e[a + 1], 4, -1530992060),
                r = u(r, n, o, i, e[a + 4], 11, 1272893353),
                i = u(i, r, n, o, e[a + 7], 16, -155497632),
                o = u(o, i, r, n, e[a + 10], 23, -1094730640),
                n = u(n, o, i, r, e[a + 13], 4, 681279174),
                r = u(r, n, o, i, e[a + 0], 11, -358537222),
                i = u(i, r, n, o, e[a + 3], 16, -722521979),
                o = u(o, i, r, n, e[a + 6], 23, 76029189),
                n = u(n, o, i, r, e[a + 9], 4, -640364487),
                r = u(r, n, o, i, e[a + 12], 11, -421815835),
                i = u(i, r, n, o, e[a + 15], 16, 530742520),
                o = u(o, i, r, n, e[a + 2], 23, -995338651),
                n = O(n, o, i, r, e[a + 0], 6, -198630844),
                r = O(r, n, o, i, e[a + 7], 10, 1126891415),
                i = O(i, r, n, o, e[a + 14], 15, -1416354905),
                o = O(o, i, r, n, e[a + 5], 21, -57434055),
                n = O(n, o, i, r, e[a + 12], 6, 1700485571),
                r = O(r, n, o, i, e[a + 3], 10, -1894986606),
                i = O(i, r, n, o, e[a + 10], 15, -1051523),
                o = O(o, i, r, n, e[a + 1], 21, -2054922799),
                n = O(n, o, i, r, e[a + 8], 6, 1873313359),
                r = O(r, n, o, i, e[a + 15], 10, -30611744),
                i = O(i, r, n, o, e[a + 6], 15, -1560198380),
                o = O(o, i, r, n, e[a + 13], 21, 1309151649),
                n = O(n, o, i, r, e[a + 4], 6, -145523070),
                r = O(r, n, o, i, e[a + 11], 10, -1120210379),
                i = O(i, r, n, o, e[a + 2], 15, 718787259),
                o = O(o, i, r, n, e[a + 9], 21, -343485551),
                n = d(n, c),
                o = d(o, p),
                i = d(i, s),
                r = d(r, b)
        }
        return Array(n, o, i, r)
    }
    function M(e, t, n, o, i, r) {
        return d(f(d(d(t, e), d(o, r)), i), n)
    }
    function l(e, t, n, o, i, r, a) {
        return M(t & n | ~t & o, e, t, i, r, a)
    }
    function z(e, t, n, o, i, r, a) {
        return M(t & o | n & ~o, e, t, i, r, a)
    }
    function u(e, t, n, o, i, r, a) {
        return M(t ^ n ^ o, e, t, i, r, a)
    }
    function O(e, t, n, o, i, r, a) {
        return M(n ^ (t | ~o), e, t, i, r, a)
    }
    function d(e, t) {
        var n = (65535 & e) + (65535 & t)
            , o = (e >> 16) + (t >> 16) + (n >> 16);
        return o << 16 | 65535 & n
    }
    function f(e, t) {
        return e << t | e >>> 32 - t
    }
    function A(e) {
        return i(e)
    }
    var code = A(arg);
    return code;
}

function d(e, t, n, o, i) {
    const r = z({}, e);
    u(r, null, t, o),
        n && (u(r, null, n, o));
    const a = Object.entries(r);
    a.sort(((e, t) => {
        let [n] = e
            , [o] = t;
        return n < o ? -1 : n > o ? 1 : 0
    }
    )),
        a.push(["_key", i]);
    const c = a.map((e => {
        let [t, n] = e;
        return `${t}=${n}`
    }
    )).join("&")
        , p = (0,
            encode)(c);
    return p
}

function h(e, t, n, o, i = 0) {
    if (o == null) return {};
    const r = (0, b.Vj)().replace(/-/g, "");
    const c = Date.now();
    const p = {
        nonce: r,
        timestamp: c + i
    };
    const s = d(p, e, t, n, o);
    var a = "nonce=" + r + "&timestamp=" + (c + i) + "&signature=" + s.toUpperCase();
    return a;
}

const b = {
    Vj: function de() {
        let e = Date.now();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            const n = Math.trunc((e + 16 * Math.random()) % 16);
            return (e = Math.floor(e / 16), ("x" === t ? n : (3 & n) | 8).toString(16));
        });
    }
};

function myFunction() {
    var arg1 = {
        _time: ''
    }
    var arg2 = undefined;
    var arg3 = 'get';
    const xn = "D_c_V_o_a_e_C_x_E_7_S_s_9_p_w_X_Z_G_l_H_w_t_C_y_p_7_S_F_2_l_G_K".split("_");
    var xssKey = xn.join("");
    const queryString = h(arg1, arg2, arg3, xssKey, -0);
    console.log(queryString);
}
myFunction();