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

const r = {
    Vj: function de() {
        let e = Date.now();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            const n = Math.trunc((e + 16 * Math.random()) % 16);
            return (e = Math.floor(e / 16), ("x" === t ? n : (3 & n) | 8).toString(16));
        });
    },
    fo: {
        "Get": "get",
        "Post": "post",
        "PostJSON": "postJSON"
    }
};

var we = function(e) {
    this.value = e,
    this.dep = new de,
    this.vmCount = 0,
    U(e, "__ob__", this),
    Array.isArray(e) ? (K ? Ce(e, Re) : Te(e, Re, _e),
    this.observeArray(e)) : this.walk(e)
};

function GetSignature(e, t, n, o) {
    function s(e, t) {
        const {nonce: n, timestamp: o} = e;
        return [`_key=${t}`, `_timestamp=${o}`, `_nonce=${n}`].join("&")
    }
        var a;
        let c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (null == o)
            return {};
        const p = (0,
        r.Vj)()
          , b = p.replace(/-/g, "")
          , z = Date.now()
          , u = {
            nonce: b,
            timestamp: z + (c || 0)
        }
          , O = s(u, o)
          , d = "postJSON" === n ? JSON.stringify(t) : null
          , f = null === e || void 0 === e || null === (a = e.split("?")[1]) || void 0 === a ? void 0 : a.split("#")[0]
          , A = f ? decodeURIComponent(f) : null
          , h = null
          , q = null
          , m = [O, A, h, q, d].map((e=>null !== e && void 0 !== e ? e : "")).join(",")
          , v = encode(m);
        Object.assign(u, {
            signature: v.toUpperCase()
        })
        var result = "nonce=" + u.nonce + "&timestamp=" + u.timestamp + "&signature=" + u.signature;
        return result
}

function Start(now,duration) {
    const xn = "D_c_V_o_a_e_C_x_E_7_S_s_9_p_w_X_Z_G_l_H_w_t_C_y_p_7_S_F_2_l_G_K".split("_");
    var xssKey = xn.join("");
    var e='/srv100455/api/pub/sport/venue/getSalesItemList?salesId=103909&_time=' + now
    ,t=undefined
    ,n='get'
    ,o=xssKey
    var result = GetSignature(e, t, n, o, duration);
    return result;
}