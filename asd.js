(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        l(o);
    new MutationObserver(o => {
        for (const u of o)
            if (u.type === "childList")
                for (const h of u.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && l(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(o) {
        const u = {};
        return o.integrity && (u.integrity = o.integrity),
            o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? u.credentials = "include" : o.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
            u
    }
    function l(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const u = i(o);
        fetch(o.href, u)
    }
}
)();
var sh = {
    exports: {}
}
    , Yl = {};
var G_;
function l1() {
    if (G_)
        return Yl;
    G_ = 1;
    var s = Symbol.for("react.transitional.element")
        , t = Symbol.for("react.fragment");
    function i(l, o, u) {
        var h = null;
        if (u !== void 0 && (h = "" + u),
            o.key !== void 0 && (h = "" + o.key),
            "key" in o) {
            u = {};
            for (var d in o)
                d !== "key" && (u[d] = o[d])
        } else
            u = o;
        return o = u.ref,
        {
            $$typeof: s,
            type: l,
            key: h,
            ref: o !== void 0 ? o : null,
            props: u
        }
    }
    return Yl.Fragment = t,
        Yl.jsx = i,
        Yl.jsxs = i,
        Yl
}
var F_;
function r1() {
    return F_ || (F_ = 1,
        sh.exports = l1()),
        sh.exports
}
var _ = r1()
    , ah = {
        exports: {}
    }
    , fe = {};
var Y_;
function o1() {
    if (Y_)
        return fe;
    Y_ = 1;
    var s = Symbol.for("react.transitional.element")
        , t = Symbol.for("react.portal")
        , i = Symbol.for("react.fragment")
        , l = Symbol.for("react.strict_mode")
        , o = Symbol.for("react.profiler")
        , u = Symbol.for("react.consumer")
        , h = Symbol.for("react.context")
        , d = Symbol.for("react.forward_ref")
        , p = Symbol.for("react.suspense")
        , g = Symbol.for("react.memo")
        , S = Symbol.for("react.lazy")
        , v = Symbol.for("react.activity")
        , E = Symbol.iterator;
    function D(T) {
        return T === null || typeof T != "object" ? null : (T = E && T[E] || T["@@iterator"],
            typeof T == "function" ? T : null)
    }
    var I = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    }
        , P = Object.assign
        , M = {};
    function Q(T, z, K) {
        this.props = T,
            this.context = z,
            this.refs = M,
            this.updater = K || I
    }
    Q.prototype.isReactComponent = {},
        Q.prototype.setState = function (T, z) {
            if (typeof T != "object" && typeof T != "function" && T != null)
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, T, z, "setState")
        }
        ,
        Q.prototype.forceUpdate = function (T) {
            this.updater.enqueueForceUpdate(this, T, "forceUpdate")
        }
        ;
    function B() { }
    B.prototype = Q.prototype;
    function q(T, z, K) {
        this.props = T,
            this.context = z,
            this.refs = M,
            this.updater = K || I
    }
    var re = q.prototype = new B;
    re.constructor = q,
        P(re, Q.prototype),
        re.isPureReactComponent = !0;
    var de = Array.isArray;
    function ve() { }
    var J = {
        H: null,
        A: null,
        T: null,
        S: null
    }
        , we = Object.prototype.hasOwnProperty;
    function Ge(T, z, K) {
        var X = K.ref;
        return {
            $$typeof: s,
            type: T,
            key: z,
            ref: X !== void 0 ? X : null,
            props: K
        }
    }
    function ke(T, z) {
        return Ge(T.type, z, T.props)
    }
    function $e(T) {
        return typeof T == "object" && T !== null && T.$$typeof === s
    }
    function We(T) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function (K) {
            return z[K]
        })
    }
    var G = /\/+/g;
    function se(T, z) {
        return typeof T == "object" && T !== null && T.key != null ? We("" + T.key) : z.toString(36)
    }
    function ge(T) {
        switch (T.status) {
            case "fulfilled":
                return T.value;
            case "rejected":
                throw T.reason;
            default:
                switch (typeof T.status == "string" ? T.then(ve, ve) : (T.status = "pending",
                    T.then(function (z) {
                        T.status === "pending" && (T.status = "fulfilled",
                            T.value = z)
                    }, function (z) {
                        T.status === "pending" && (T.status = "rejected",
                            T.reason = z)
                    })),
                T.status) {
                    case "fulfilled":
                        return T.value;
                    case "rejected":
                        throw T.reason
                }
        }
        throw T
    }
    function k(T, z, K, X, ce) {
        var he = typeof T;
        (he === "undefined" || he === "boolean") && (T = null);
        var Ne = !1;
        if (T === null)
            Ne = !0;
        else
            switch (he) {
                case "bigint":
                case "string":
                case "number":
                    Ne = !0;
                    break;
                case "object":
                    switch (T.$$typeof) {
                        case s:
                        case t:
                            Ne = !0;
                            break;
                        case S:
                            return Ne = T._init,
                                k(Ne(T._payload), z, K, X, ce)
                    }
            }
        if (Ne)
            return ce = ce(T),
                Ne = X === "" ? "." + se(T, 0) : X,
                de(ce) ? (K = "",
                    Ne != null && (K = Ne.replace(G, "$&/") + "/"),
                    k(ce, z, K, "", function (pn) {
                        return pn
                    })) : ce != null && ($e(ce) && (ce = ke(ce, K + (ce.key == null || T && T.key === ce.key ? "" : ("" + ce.key).replace(G, "$&/") + "/") + Ne)),
                        z.push(ce)),
                1;
        Ne = 0;
        var it = X === "" ? "." : X + ":";
        if (de(T))
            for (var Fe = 0; Fe < T.length; Fe++)
                X = T[Fe],
                    he = it + se(X, Fe),
                    Ne += k(X, z, K, he, ce);
        else if (Fe = D(T),
            typeof Fe == "function")
            for (T = Fe.call(T),
                Fe = 0; !(X = T.next()).done;)
                X = X.value,
                    he = it + se(X, Fe++),
                    Ne += k(X, z, K, he, ce);
        else if (he === "object") {
            if (typeof T.then == "function")
                return k(ge(T), z, K, X, ce);
            throw z = String(T),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Ne
    }
    function F(T, z, K) {
        if (T == null)
            return T;
        var X = []
            , ce = 0;
        return k(T, X, "", "", function (he) {
            return z.call(K, he, ce++)
        }),
            X
    }
    function ne(T) {
        if (T._status === -1) {
            var z = T._result;
            z = z(),
                z.then(function (K) {
                    (T._status === 0 || T._status === -1) && (T._status = 1,
                        T._result = K)
                }, function (K) {
                    (T._status === 0 || T._status === -1) && (T._status = 2,
                        T._result = K)
                }),
                T._status === -1 && (T._status = 0,
                    T._result = z)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var Ae = typeof reportError == "function" ? reportError : function (T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(z))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    }
        , Re = {
            map: F,
            forEach: function (T, z, K) {
                F(T, function () {
                    z.apply(this, arguments)
                }, K)
            },
            count: function (T) {
                var z = 0;
                return F(T, function () {
                    z++
                }),
                    z
            },
            toArray: function (T) {
                return F(T, function (z) {
                    return z
                }) || []
            },
            only: function (T) {
                if (!$e(T))
                    throw Error("React.Children.only expected to receive a single React element child.");
                return T
            }
        };
    return fe.Activity = v,
        fe.Children = Re,
        fe.Component = Q,
        fe.Fragment = i,
        fe.Profiler = o,
        fe.PureComponent = q,
        fe.StrictMode = l,
        fe.Suspense = p,
        fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J,
        fe.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (T) {
                return J.H.useMemoCache(T)
            }
        },
        fe.cache = function (T) {
            return function () {
                return T.apply(null, arguments)
            }
        }
        ,
        fe.cacheSignal = function () {
            return null
        }
        ,
        fe.cloneElement = function (T, z, K) {
            if (T == null)
                throw Error("The argument must be a React element, but you passed " + T + ".");
            var X = P({}, T.props)
                , ce = T.key;
            if (z != null)
                for (he in z.key !== void 0 && (ce = "" + z.key),
                    z)
                    !we.call(z, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && z.ref === void 0 || (X[he] = z[he]);
            var he = arguments.length - 2;
            if (he === 1)
                X.children = K;
            else if (1 < he) {
                for (var Ne = Array(he), it = 0; it < he; it++)
                    Ne[it] = arguments[it + 2];
                X.children = Ne
            }
            return Ge(T.type, ce, X)
        }
        ,
        fe.createContext = function (T) {
            return T = {
                $$typeof: h,
                _currentValue: T,
                _currentValue2: T,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            },
                T.Provider = T,
                T.Consumer = {
                    $$typeof: u,
                    _context: T
                },
                T
        }
        ,
        fe.createElement = function (T, z, K) {
            var X, ce = {}, he = null;
            if (z != null)
                for (X in z.key !== void 0 && (he = "" + z.key),
                    z)
                    we.call(z, X) && X !== "key" && X !== "__self" && X !== "__source" && (ce[X] = z[X]);
            var Ne = arguments.length - 2;
            if (Ne === 1)
                ce.children = K;
            else if (1 < Ne) {
                for (var it = Array(Ne), Fe = 0; Fe < Ne; Fe++)
                    it[Fe] = arguments[Fe + 2];
                ce.children = it
            }
            if (T && T.defaultProps)
                for (X in Ne = T.defaultProps,
                    Ne)
                    ce[X] === void 0 && (ce[X] = Ne[X]);
            return Ge(T, he, ce)
        }
        ,
        fe.createRef = function () {
            return {
                current: null
            }
        }
        ,
        fe.forwardRef = function (T) {
            return {
                $$typeof: d,
                render: T
            }
        }
        ,
        fe.isValidElement = $e,
        fe.lazy = function (T) {
            return {
                $$typeof: S,
                _payload: {
                    _status: -1,
                    _result: T
                },
                _init: ne
            }
        }
        ,
        fe.memo = function (T, z) {
            return {
                $$typeof: g,
                type: T,
                compare: z === void 0 ? null : z
            }
        }
        ,
        fe.startTransition = function (T) {
            var z = J.T
                , K = {};
            J.T = K;
            try {
                var X = T()
                    , ce = J.S;
                ce !== null && ce(K, X),
                    typeof X == "object" && X !== null && typeof X.then == "function" && X.then(ve, Ae)
            } catch (he) {
                Ae(he)
            } finally {
                z !== null && K.types !== null && (z.types = K.types),
                    J.T = z
            }
        }
        ,
        fe.unstable_useCacheRefresh = function () {
            return J.H.useCacheRefresh()
        }
        ,
        fe.use = function (T) {
            return J.H.use(T)
        }
        ,
        fe.useActionState = function (T, z, K) {
            return J.H.useActionState(T, z, K)
        }
        ,
        fe.useCallback = function (T, z) {
            return J.H.useCallback(T, z)
        }
        ,
        fe.useContext = function (T) {
            return J.H.useContext(T)
        }
        ,
        fe.useDebugValue = function () { }
        ,
        fe.useDeferredValue = function (T, z) {
            return J.H.useDeferredValue(T, z)
        }
        ,
        fe.useEffect = function (T, z) {
            return J.H.useEffect(T, z)
        }
        ,
        fe.useEffectEvent = function (T) {
            return J.H.useEffectEvent(T)
        }
        ,
        fe.useId = function () {
            return J.H.useId()
        }
        ,
        fe.useImperativeHandle = function (T, z, K) {
            return J.H.useImperativeHandle(T, z, K)
        }
        ,
        fe.useInsertionEffect = function (T, z) {
            return J.H.useInsertionEffect(T, z)
        }
        ,
        fe.useLayoutEffect = function (T, z) {
            return J.H.useLayoutEffect(T, z)
        }
        ,
        fe.useMemo = function (T, z) {
            return J.H.useMemo(T, z)
        }
        ,
        fe.useOptimistic = function (T, z) {
            return J.H.useOptimistic(T, z)
        }
        ,
        fe.useReducer = function (T, z, K) {
            return J.H.useReducer(T, z, K)
        }
        ,
        fe.useRef = function (T) {
            return J.H.useRef(T)
        }
        ,
        fe.useState = function (T) {
            return J.H.useState(T)
        }
        ,
        fe.useSyncExternalStore = function (T, z, K) {
            return J.H.useSyncExternalStore(T, z, K)
        }
        ,
        fe.useTransition = function () {
            return J.H.useTransition()
        }
        ,
        fe.version = "19.2.4",
        fe
}
var Q_;
function Zh() {
    return Q_ || (Q_ = 1,
        ah.exports = o1()),
        ah.exports
}
var x = Zh()
    , lh = {
        exports: {}
    }
    , Ql = {}
    , rh = {
        exports: {}
    }
    , oh = {};
var K_;
function c1() {
    return K_ || (K_ = 1,
        (function (s) {
            function t(k, F) {
                var ne = k.length;
                k.push(F);
                e: for (; 0 < ne;) {
                    var Ae = ne - 1 >>> 1
                        , Re = k[Ae];
                    if (0 < o(Re, F))
                        k[Ae] = F,
                            k[ne] = Re,
                            ne = Ae;
                    else
                        break e
                }
            }
            function i(k) {
                return k.length === 0 ? null : k[0]
            }
            function l(k) {
                if (k.length === 0)
                    return null;
                var F = k[0]
                    , ne = k.pop();
                if (ne !== F) {
                    k[0] = ne;
                    e: for (var Ae = 0, Re = k.length, T = Re >>> 1; Ae < T;) {
                        var z = 2 * (Ae + 1) - 1
                            , K = k[z]
                            , X = z + 1
                            , ce = k[X];
                        if (0 > o(K, ne))
                            X < Re && 0 > o(ce, K) ? (k[Ae] = ce,
                                k[X] = ne,
                                Ae = X) : (k[Ae] = K,
                                    k[z] = ne,
                                    Ae = z);
                        else if (X < Re && 0 > o(ce, ne))
                            k[Ae] = ce,
                                k[X] = ne,
                                Ae = X;
                        else
                            break e
                    }
                }
                return F
            }
            function o(k, F) {
                var ne = k.sortIndex - F.sortIndex;
                return ne !== 0 ? ne : k.id - F.id
            }
            if (s.unstable_now = void 0,
                typeof performance == "object" && typeof performance.now == "function") {
                var u = performance;
                s.unstable_now = function () {
                    return u.now()
                }
            } else {
                var h = Date
                    , d = h.now();
                s.unstable_now = function () {
                    return h.now() - d
                }
            }
            var p = []
                , g = []
                , S = 1
                , v = null
                , E = 3
                , D = !1
                , I = !1
                , P = !1
                , M = !1
                , Q = typeof setTimeout == "function" ? setTimeout : null
                , B = typeof clearTimeout == "function" ? clearTimeout : null
                , q = typeof setImmediate < "u" ? setImmediate : null;
            function re(k) {
                for (var F = i(g); F !== null;) {
                    if (F.callback === null)
                        l(g);
                    else if (F.startTime <= k)
                        l(g),
                            F.sortIndex = F.expirationTime,
                            t(p, F);
                    else
                        break;
                    F = i(g)
                }
            }
            function de(k) {
                if (P = !1,
                    re(k),
                    !I)
                    if (i(p) !== null)
                        I = !0,
                            ve || (ve = !0,
                                We());
                    else {
                        var F = i(g);
                        F !== null && ge(de, F.startTime - k)
                    }
            }
            var ve = !1
                , J = -1
                , we = 5
                , Ge = -1;
            function ke() {
                return M ? !0 : !(s.unstable_now() - Ge < we)
            }
            function $e() {
                if (M = !1,
                    ve) {
                    var k = s.unstable_now();
                    Ge = k;
                    var F = !0;
                    try {
                        e: {
                            I = !1,
                                P && (P = !1,
                                    B(J),
                                    J = -1),
                                D = !0;
                            var ne = E;
                            try {
                                t: {
                                    for (re(k),
                                        v = i(p); v !== null && !(v.expirationTime > k && ke());) {
                                        var Ae = v.callback;
                                        if (typeof Ae == "function") {
                                            v.callback = null,
                                                E = v.priorityLevel;
                                            var Re = Ae(v.expirationTime <= k);
                                            if (k = s.unstable_now(),
                                                typeof Re == "function") {
                                                v.callback = Re,
                                                    re(k),
                                                    F = !0;
                                                break t
                                            }
                                            v === i(p) && l(p),
                                                re(k)
                                        } else
                                            l(p);
                                        v = i(p)
                                    }
                                    if (v !== null)
                                        F = !0;
                                    else {
                                        var T = i(g);
                                        T !== null && ge(de, T.startTime - k),
                                            F = !1
                                    }
                                }
                                break e
                            } finally {
                                v = null,
                                    E = ne,
                                    D = !1
                            }
                            F = void 0
                        }
                    } finally {
                        F ? We() : ve = !1
                    }
                }
            }
            var We;
            if (typeof q == "function")
                We = function () {
                    q($e)
                }
                    ;
            else if (typeof MessageChannel < "u") {
                var G = new MessageChannel
                    , se = G.port2;
                G.port1.onmessage = $e,
                    We = function () {
                        se.postMessage(null)
                    }
            } else
                We = function () {
                    Q($e, 0)
                }
                    ;
            function ge(k, F) {
                J = Q(function () {
                    k(s.unstable_now())
                }, F)
            }
            s.unstable_IdlePriority = 5,
                s.unstable_ImmediatePriority = 1,
                s.unstable_LowPriority = 4,
                s.unstable_NormalPriority = 3,
                s.unstable_Profiling = null,
                s.unstable_UserBlockingPriority = 2,
                s.unstable_cancelCallback = function (k) {
                    k.callback = null
                }
                ,
                s.unstable_forceFrameRate = function (k) {
                    0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < k ? Math.floor(1e3 / k) : 5
                }
                ,
                s.unstable_getCurrentPriorityLevel = function () {
                    return E
                }
                ,
                s.unstable_next = function (k) {
                    switch (E) {
                        case 1:
                        case 2:
                        case 3:
                            var F = 3;
                            break;
                        default:
                            F = E
                    }
                    var ne = E;
                    E = F;
                    try {
                        return k()
                    } finally {
                        E = ne
                    }
                }
                ,
                s.unstable_requestPaint = function () {
                    M = !0
                }
                ,
                s.unstable_runWithPriority = function (k, F) {
                    switch (k) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            k = 3
                    }
                    var ne = E;
                    E = k;
                    try {
                        return F()
                    } finally {
                        E = ne
                    }
                }
                ,
                s.unstable_scheduleCallback = function (k, F, ne) {
                    var Ae = s.unstable_now();
                    switch (typeof ne == "object" && ne !== null ? (ne = ne.delay,
                        ne = typeof ne == "number" && 0 < ne ? Ae + ne : Ae) : ne = Ae,
                    k) {
                        case 1:
                            var Re = -1;
                            break;
                        case 2:
                            Re = 250;
                            break;
                        case 5:
                            Re = 1073741823;
                            break;
                        case 4:
                            Re = 1e4;
                            break;
                        default:
                            Re = 5e3
                    }
                    return Re = ne + Re,
                        k = {
                            id: S++,
                            callback: F,
                            priorityLevel: k,
                            startTime: ne,
                            expirationTime: Re,
                            sortIndex: -1
                        },
                        ne > Ae ? (k.sortIndex = ne,
                            t(g, k),
                            i(p) === null && k === i(g) && (P ? (B(J),
                                J = -1) : P = !0,
                                ge(de, ne - Ae))) : (k.sortIndex = Re,
                                    t(p, k),
                                    I || D || (I = !0,
                                        ve || (ve = !0,
                                            We()))),
                        k
                }
                ,
                s.unstable_shouldYield = ke,
                s.unstable_wrapCallback = function (k) {
                    var F = E;
                    return function () {
                        var ne = E;
                        E = F;
                        try {
                            return k.apply(this, arguments)
                        } finally {
                            E = ne
                        }
                    }
                }
        }
        )(oh)),
        oh
}
var X_;
function u1() {
    return X_ || (X_ = 1,
        rh.exports = c1()),
        rh.exports
}
var ch = {
    exports: {}
}
    , Nt = {};
var W_;
function f1() {
    if (W_)
        return Nt;
    W_ = 1;
    var s = Zh();
    function t(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++)
                g += "&args[]=" + encodeURIComponent(arguments[S])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function i() { }
    var l = {
        d: {
            f: i,
            r: function () {
                throw Error(t(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
        , o = Symbol.for("react.portal");
    function u(p, g, S) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: v == null ? null : "" + v,
            children: p,
            containerInfo: g,
            implementation: S
        }
    }
    var h = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(p, g) {
        if (p === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l,
        Nt.createPortal = function (p, g) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
                throw Error(t(299));
            return u(p, g, null, S)
        }
        ,
        Nt.flushSync = function (p) {
            var g = h.T
                , S = l.p;
            try {
                if (h.T = null,
                    l.p = 2,
                    p)
                    return p()
            } finally {
                h.T = g,
                    l.p = S,
                    l.d.f()
            }
        }
        ,
        Nt.preconnect = function (p, g) {
            typeof p == "string" && (g ? (g = g.crossOrigin,
                g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
                l.d.C(p, g))
        }
        ,
        Nt.prefetchDNS = function (p) {
            typeof p == "string" && l.d.D(p)
        }
        ,
        Nt.preinit = function (p, g) {
            if (typeof p == "string" && g && typeof g.as == "string") {
                var S = g.as
                    , v = d(S, g.crossOrigin)
                    , E = typeof g.integrity == "string" ? g.integrity : void 0
                    , D = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
                S === "style" ? l.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                    crossOrigin: v,
                    integrity: E,
                    fetchPriority: D
                }) : S === "script" && l.d.X(p, {
                    crossOrigin: v,
                    integrity: E,
                    fetchPriority: D,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0
                })
            }
        }
        ,
        Nt.preinitModule = function (p, g) {
            if (typeof p == "string")
                if (typeof g == "object" && g !== null) {
                    if (g.as == null || g.as === "script") {
                        var S = d(g.as, g.crossOrigin);
                        l.d.M(p, {
                            crossOrigin: S,
                            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                            nonce: typeof g.nonce == "string" ? g.nonce : void 0
                        })
                    }
                } else
                    g == null && l.d.M(p)
        }
        ,
        Nt.preload = function (p, g) {
            if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
                var S = g.as
                    , v = d(S, g.crossOrigin);
                l.d.L(p, S, {
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                    type: typeof g.type == "string" ? g.type : void 0,
                    fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                    referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                    imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                    imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                    media: typeof g.media == "string" ? g.media : void 0
                })
            }
        }
        ,
        Nt.preloadModule = function (p, g) {
            if (typeof p == "string")
                if (g) {
                    var S = d(g.as, g.crossOrigin);
                    l.d.m(p, {
                        as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                        crossOrigin: S,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0
                    })
                } else
                    l.d.m(p)
        }
        ,
        Nt.requestFormReset = function (p) {
            l.d.r(p)
        }
        ,
        Nt.unstable_batchedUpdates = function (p, g) {
            return p(g)
        }
        ,
        Nt.useFormState = function (p, g, S) {
            return h.H.useFormState(p, g, S)
        }
        ,
        Nt.useFormStatus = function () {
            return h.H.useHostTransitionStatus()
        }
        ,
        Nt.version = "19.2.4",
        Nt
}
var Z_;
function h1() {
    if (Z_)
        return ch.exports;
    Z_ = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (t) {
                console.error(t)
            }
    }
    return s(),
        ch.exports = f1(),
        ch.exports
}
var J_;
function d1() {
    if (J_)
        return Ql;
    J_ = 1;
    var s = u1()
        , t = Zh()
        , i = h1();
    function l(e) {
        var n = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                n += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function u(e) {
        var n = e
            , a = e;
        if (e.alternate)
            for (; n.return;)
                n = n.return;
        else {
            e = n;
            do
                n = e,
                    (n.flags & 4098) !== 0 && (a = n.return),
                    e = n.return;
            while (e)
        }
        return n.tag === 3 ? a : null
    }
    function h(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate,
                e !== null && (n = e.memoizedState)),
                n !== null)
                return n.dehydrated
        }
        return null
    }
    function d(e) {
        if (e.tag === 31) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate,
                e !== null && (n = e.memoizedState)),
                n !== null)
                return n.dehydrated
        }
        return null
    }
    function p(e) {
        if (u(e) !== e)
            throw Error(l(188))
    }
    function g(e) {
        var n = e.alternate;
        if (!n) {
            if (n = u(e),
                n === null)
                throw Error(l(188));
            return n !== e ? null : e
        }
        for (var a = e, r = n; ;) {
            var c = a.return;
            if (c === null)
                break;
            var f = c.alternate;
            if (f === null) {
                if (r = c.return,
                    r !== null) {
                    a = r;
                    continue
                }
                break
            }
            if (c.child === f.child) {
                for (f = c.child; f;) {
                    if (f === a)
                        return p(c),
                            e;
                    if (f === r)
                        return p(c),
                            n;
                    f = f.sibling
                }
                throw Error(l(188))
            }
            if (a.return !== r.return)
                a = c,
                    r = f;
            else {
                for (var m = !1, y = c.child; y;) {
                    if (y === a) {
                        m = !0,
                            a = c,
                            r = f;
                        break
                    }
                    if (y === r) {
                        m = !0,
                            r = c,
                            a = f;
                        break
                    }
                    y = y.sibling
                }
                if (!m) {
                    for (y = f.child; y;) {
                        if (y === a) {
                            m = !0,
                                a = f,
                                r = c;
                            break
                        }
                        if (y === r) {
                            m = !0,
                                r = f,
                                a = c;
                            break
                        }
                        y = y.sibling
                    }
                    if (!m)
                        throw Error(l(189))
                }
            }
            if (a.alternate !== r)
                throw Error(l(190))
        }
        if (a.tag !== 3)
            throw Error(l(188));
        return a.stateNode.current === a ? e : n
    }
    function S(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return e;
        for (e = e.child; e !== null;) {
            if (n = S(e),
                n !== null)
                return n;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign
        , E = Symbol.for("react.element")
        , D = Symbol.for("react.transitional.element")
        , I = Symbol.for("react.portal")
        , P = Symbol.for("react.fragment")
        , M = Symbol.for("react.strict_mode")
        , Q = Symbol.for("react.profiler")
        , B = Symbol.for("react.consumer")
        , q = Symbol.for("react.context")
        , re = Symbol.for("react.forward_ref")
        , de = Symbol.for("react.suspense")
        , ve = Symbol.for("react.suspense_list")
        , J = Symbol.for("react.memo")
        , we = Symbol.for("react.lazy")
        , Ge = Symbol.for("react.activity")
        , ke = Symbol.for("react.memo_cache_sentinel")
        , $e = Symbol.iterator;
    function We(e) {
        return e === null || typeof e != "object" ? null : (e = $e && e[$e] || e["@@iterator"],
            typeof e == "function" ? e : null)
    }
    var G = Symbol.for("react.client.reference");
    function se(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === G ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
            case P:
                return "Fragment";
            case Q:
                return "Profiler";
            case M:
                return "StrictMode";
            case de:
                return "Suspense";
            case ve:
                return "SuspenseList";
            case Ge:
                return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case I:
                    return "Portal";
                case q:
                    return e.displayName || "Context";
                case B:
                    return (e._context.displayName || "Context") + ".Consumer";
                case re:
                    var n = e.render;
                    return e = e.displayName,
                        e || (e = n.displayName || n.name || "",
                            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                case J:
                    return n = e.displayName || null,
                        n !== null ? n : se(e.type) || "Memo";
                case we:
                    n = e._payload,
                        e = e._init;
                    try {
                        return se(e(n))
                    } catch { }
            }
        return null
    }
    var ge = Array.isArray
        , k = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , F = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , ne = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }
        , Ae = []
        , Re = -1;
    function T(e) {
        return {
            current: e
        }
    }
    function z(e) {
        0 > Re || (e.current = Ae[Re],
            Ae[Re] = null,
            Re--)
    }
    function K(e, n) {
        Re++,
            Ae[Re] = e.current,
            e.current = n
    }
    var X = T(null)
        , ce = T(null)
        , he = T(null)
        , Ne = T(null);
    function it(e, n) {
        switch (K(he, n),
        K(ce, e),
        K(X, null),
        n.nodeType) {
            case 9:
            case 11:
                e = (e = n.documentElement) && (e = e.namespaceURI) ? d_(e) : 0;
                break;
            default:
                if (e = n.tagName,
                    n = n.namespaceURI)
                    n = d_(n),
                        e = m_(n, e);
                else
                    switch (e) {
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0
                    }
        }
        z(X),
            K(X, e)
    }
    function Fe() {
        z(X),
            z(ce),
            z(he)
    }
    function pn(e) {
        e.memoizedState !== null && K(Ne, e);
        var n = X.current
            , a = m_(n, e.type);
        n !== a && (K(ce, e),
            K(X, a))
    }
    function yi(e) {
        ce.current === e && (z(X),
            z(ce)),
            Ne.current === e && (z(Ne),
                ql._currentValue = ne)
    }
    var gt, Bs;
    function Dt(e) {
        if (gt === void 0)
            try {
                throw Error()
            } catch (a) {
                var n = a.stack.trim().match(/\n( *(at )?)/);
                gt = n && n[1] || "",
                    Bs = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + gt + e + Bs
    }
    var rs = !1;
    function Hn(e, n) {
        if (!e || rs)
            return "";
        rs = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (n) {
                            var H = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(H.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }),
                                typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(H, [])
                                } catch (O) {
                                    var A = O
                                }
                                Reflect.construct(e, [], H)
                            } else {
                                try {
                                    H.call()
                                } catch (O) {
                                    A = O
                                }
                                e.call(H.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (O) {
                                A = O
                            }
                            (H = e()) && typeof H.catch == "function" && H.catch(function () { })
                        }
                    } catch (O) {
                        if (O && A && typeof O.stack == "string")
                            return [O.stack, A.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var c = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            c && c.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = r.DetermineComponentFrameRoot()
                , m = f[0]
                , y = f[1];
            if (m && y) {
                var b = m.split(`
`)
                    , N = y.split(`
`);
                for (c = r = 0; r < b.length && !b[r].includes("DetermineComponentFrameRoot");)
                    r++;
                for (; c < N.length && !N[c].includes("DetermineComponentFrameRoot");)
                    c++;
                if (r === b.length || c === N.length)
                    for (r = b.length - 1,
                        c = N.length - 1; 1 <= r && 0 <= c && b[r] !== N[c];)
                        c--;
                for (; 1 <= r && 0 <= c; r--,
                    c--)
                    if (b[r] !== N[c]) {
                        if (r !== 1 || c !== 1)
                            do
                                if (r--,
                                    c--,
                                    0 > c || b[r] !== N[c]) {
                                    var L = `
` + b[r].replace(" at new ", " at ");
                                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)),
                                        L
                                }
                            while (1 <= r && 0 <= c);
                        break
                    }
            }
        } finally {
            rs = !1,
                Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? Dt(a) : ""
    }
    function Za(e, n) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Dt(e.type);
            case 16:
                return Dt("Lazy");
            case 13:
                return e.child !== n && n !== null ? Dt("Suspense Fallback") : Dt("Suspense");
            case 19:
                return Dt("SuspenseList");
            case 0:
            case 15:
                return Hn(e.type, !1);
            case 11:
                return Hn(e.type.render, !1);
            case 1:
                return Hn(e.type, !0);
            case 31:
                return Dt("Activity");
            default:
                return ""
        }
    }
    function os(e) {
        try {
            var n = ""
                , a = null;
            do
                n += Za(e, a),
                    a = e,
                    e = e.return;
            while (e);
            return n
        } catch (r) {
            return `
Error generating stack: ` + r.message + `
` + r.stack
        }
    }
    var tn = Object.prototype.hasOwnProperty
        , vi = s.unstable_scheduleCallback
        , cs = s.unstable_cancelCallback
        , Ja = s.unstable_shouldYield
        , $a = s.unstable_requestPaint
        , bt = s.unstable_now
        , Ps = s.unstable_getCurrentPriorityLevel
        , Bn = s.unstable_ImmediatePriority
        , Nn = s.unstable_UserBlockingPriority
        , Ot = s.unstable_NormalPriority
        , Si = s.unstable_LowPriority
        , us = s.unstable_IdlePriority
        , qs = s.log
        , V = s.unstable_setDisableYieldValue
        , ae = null
        , ie = null;
    function Ye(e) {
        if (typeof qs == "function" && V(e),
            ie && typeof ie.setStrictMode == "function")
            try {
                ie.setStrictMode(ae, e)
            } catch { }
    }
    var st = Math.clz32 ? Math.clz32 : el
        , fs = Math.log
        , Ft = Math.LN2;
    function el(e) {
        return e >>>= 0,
            e === 0 ? 32 : 31 - (fs(e) / Ft | 0) | 0
    }
    var gn = 256
        , U = 262144
        , $ = 4194304;
    function ee(e) {
        var n = e & 42;
        if (n !== 0)
            return n;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }
    function rt(e, n, a) {
        var r = e.pendingLanes;
        if (r === 0)
            return 0;
        var c = 0
            , f = e.suspendedLanes
            , m = e.pingedLanes;
        e = e.warmLanes;
        var y = r & 134217727;
        return y !== 0 ? (r = y & ~f,
            r !== 0 ? c = ee(r) : (m &= y,
                m !== 0 ? c = ee(m) : a || (a = y & ~e,
                    a !== 0 && (c = ee(a))))) : (y = r & ~f,
                        y !== 0 ? c = ee(y) : m !== 0 ? c = ee(m) : a || (a = r & ~e,
                            a !== 0 && (c = ee(a)))),
            c === 0 ? 0 : n !== 0 && n !== c && (n & f) === 0 && (f = c & -c,
                a = n & -n,
                f >= a || f === 32 && (a & 4194048) !== 0) ? n : c
    }
    function _n(e, n) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0
    }
    function tl(e, n) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return n + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }
    function An() {
        var e = $;
        return $ <<= 1,
            ($ & 62914560) === 0 && ($ = 4194304),
            e
    }
    function Fc(e) {
        for (var n = [], a = 0; 31 > a; a++)
            n.push(e);
        return n
    }
    function nl(e, n) {
        e.pendingLanes |= n,
            n !== 268435456 && (e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0)
    }
    function KE(e, n, a, r, c, f) {
        var m = e.pendingLanes;
        e.pendingLanes = a,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0,
            e.expiredLanes &= a,
            e.entangledLanes &= a,
            e.errorRecoveryDisabledLanes &= a,
            e.shellSuspendCounter = 0;
        var y = e.entanglements
            , b = e.expirationTimes
            , N = e.hiddenUpdates;
        for (a = m & ~a; 0 < a;) {
            var L = 31 - st(a)
                , H = 1 << L;
            y[L] = 0,
                b[L] = -1;
            var A = N[L];
            if (A !== null)
                for (N[L] = null,
                    L = 0; L < A.length; L++) {
                    var O = A[L];
                    O !== null && (O.lane &= -536870913)
                }
            a &= ~H
        }
        r !== 0 && Xd(e, r, 0),
            f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(m & ~n))
    }
    function Xd(e, n, a) {
        e.pendingLanes |= n,
            e.suspendedLanes &= ~n;
        var r = 31 - st(n);
        e.entangledLanes |= n,
            e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 261930
    }
    function Wd(e, n) {
        var a = e.entangledLanes |= n;
        for (e = e.entanglements; a;) {
            var r = 31 - st(a)
                , c = 1 << r;
            c & n | e[r] & n && (e[r] |= n),
                a &= ~c
        }
    }
    function Zd(e, n) {
        var a = n & -n;
        return a = (a & 42) !== 0 ? 1 : Yc(a),
            (a & (e.suspendedLanes | n)) !== 0 ? 0 : a
    }
    function Yc(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }
    function Qc(e) {
        return e &= -e,
            2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Jd() {
        var e = F.p;
        return e !== 0 ? e : (e = window.event,
            e === void 0 ? 32 : j_(e.type))
    }
    function $d(e, n) {
        var a = F.p;
        try {
            return F.p = e,
                n()
        } finally {
            F.p = a
        }
    }
    var Ei = Math.random().toString(36).slice(2)
        , Ct = "__reactFiber$" + Ei
        , Lt = "__reactProps$" + Ei
        , Vs = "__reactContainer$" + Ei
        , Kc = "__reactEvents$" + Ei
        , XE = "__reactListeners$" + Ei
        , WE = "__reactHandles$" + Ei
        , em = "__reactResources$" + Ei
        , il = "__reactMarker$" + Ei;
    function Xc(e) {
        delete e[Ct],
            delete e[Lt],
            delete e[Kc],
            delete e[XE],
            delete e[WE]
    }
    function Gs(e) {
        var n = e[Ct];
        if (n)
            return n;
        for (var a = e.parentNode; a;) {
            if (n = a[Vs] || a[Ct]) {
                if (a = n.alternate,
                    n.child !== null || a !== null && a.child !== null)
                    for (e = E_(e); e !== null;) {
                        if (a = e[Ct])
                            return a;
                        e = E_(e)
                    }
                return n
            }
            e = a,
                a = e.parentNode
        }
        return null
    }
    function Fs(e) {
        if (e = e[Ct] || e[Vs]) {
            var n = e.tag;
            if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
                return e
        }
        return null
    }
    function sl(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return e.stateNode;
        throw Error(l(33))
    }
    function Ys(e) {
        var n = e[em];
        return n || (n = e[em] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
            n
    }
    function _t(e) {
        e[il] = !0
    }
    var tm = new Set
        , nm = {};
    function hs(e, n) {
        Qs(e, n),
            Qs(e + "Capture", n)
    }
    function Qs(e, n) {
        for (nm[e] = n,
            e = 0; e < n.length; e++)
            tm.add(n[e])
    }
    var ZE = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
        , im = {}
        , sm = {};
    function JE(e) {
        return tn.call(sm, e) ? !0 : tn.call(im, e) ? !1 : ZE.test(e) ? sm[e] = !0 : (im[e] = !0,
            !1)
    }
    function Or(e, n, a) {
        if (JE(n))
            if (a === null)
                e.removeAttribute(n);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(n);
                        return;
                    case "boolean":
                        var r = n.toLowerCase().slice(0, 5);
                        if (r !== "data-" && r !== "aria-") {
                            e.removeAttribute(n);
                            return
                        }
                }
                e.setAttribute(n, "" + a)
            }
    }
    function Ir(e, n, a) {
        if (a === null)
            e.removeAttribute(n);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttribute(n, "" + a)
        }
    }
    function Pn(e, n, a, r) {
        if (r === null)
            e.removeAttribute(a);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return
            }
            e.setAttributeNS(n, a, "" + r)
        }
    }
    function nn(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }
    function am(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }
    function $E(e, n, a) {
        var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
        if (!e.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var c = r.get
                , f = r.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                    return c.call(this)
                },
                set: function (m) {
                    a = "" + m,
                        f.call(this, m)
                }
            }),
                Object.defineProperty(e, n, {
                    enumerable: r.enumerable
                }),
            {
                getValue: function () {
                    return a
                },
                setValue: function (m) {
                    a = "" + m
                },
                stopTracking: function () {
                    e._valueTracker = null,
                        delete e[n]
                }
            }
        }
    }
    function Wc(e) {
        if (!e._valueTracker) {
            var n = am(e) ? "checked" : "value";
            e._valueTracker = $E(e, n, "" + e[n])
        }
    }
    function lm(e) {
        if (!e)
            return !1;
        var n = e._valueTracker;
        if (!n)
            return !0;
        var a = n.getValue()
            , r = "";
        return e && (r = am(e) ? e.checked ? "true" : "false" : e.value),
            e = r,
            e !== a ? (n.setValue(e),
                !0) : !1
    }
    function Mr(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
            typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var e0 = /[\n"\\]/g;
    function sn(e) {
        return e.replace(e0, function (n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }
    function Zc(e, n, a, r, c, f, m, y) {
        e.name = "",
            m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"),
            n != null ? m === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + nn(n)) : e.value !== "" + nn(n) && (e.value = "" + nn(n)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"),
            n != null ? Jc(e, m, nn(n)) : a != null ? Jc(e, m, nn(a)) : r != null && e.removeAttribute("value"),
            c == null && f != null && (e.defaultChecked = !!f),
            c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"),
            y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + nn(y) : e.removeAttribute("name")
    }
    function rm(e, n, a, r, c, f, m, y) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f),
            n != null || a != null) {
            if (!(f !== "submit" && f !== "reset" || n != null)) {
                Wc(e);
                return
            }
            a = a != null ? "" + nn(a) : "",
                n = n != null ? "" + nn(n) : a,
                y || n === e.value || (e.value = n),
                e.defaultValue = n
        }
        r = r ?? c,
            r = typeof r != "function" && typeof r != "symbol" && !!r,
            e.checked = y ? e.checked : !!r,
            e.defaultChecked = !!r,
            m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m),
            Wc(e)
    }
    function Jc(e, n, a) {
        n === "number" && Mr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function Ks(e, n, a, r) {
        if (e = e.options,
            n) {
            n = {};
            for (var c = 0; c < a.length; c++)
                n["$" + a[c]] = !0;
            for (a = 0; a < e.length; a++)
                c = n.hasOwnProperty("$" + e[a].value),
                    e[a].selected !== c && (e[a].selected = c),
                    c && r && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + nn(a),
                n = null,
                c = 0; c < e.length; c++) {
                if (e[c].value === a) {
                    e[c].selected = !0,
                        r && (e[c].defaultSelected = !0);
                    return
                }
                n !== null || e[c].disabled || (n = e[c])
            }
            n !== null && (n.selected = !0)
        }
    }
    function om(e, n, a) {
        if (n != null && (n = "" + nn(n),
            n !== e.value && (e.value = n),
            a == null)) {
            e.defaultValue !== n && (e.defaultValue = n);
            return
        }
        e.defaultValue = a != null ? "" + nn(a) : ""
    }
    function cm(e, n, a, r) {
        if (n == null) {
            if (r != null) {
                if (a != null)
                    throw Error(l(92));
                if (ge(r)) {
                    if (1 < r.length)
                        throw Error(l(93));
                    r = r[0]
                }
                a = r
            }
            a == null && (a = ""),
                n = a
        }
        a = nn(n),
            e.defaultValue = a,
            r = e.textContent,
            r === a && r !== "" && r !== null && (e.value = r),
            Wc(e)
    }
    function Xs(e, n) {
        if (n) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = n;
                return
            }
        }
        e.textContent = n
    }
    var t0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function um(e, n, a) {
        var r = n.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : r ? e.setProperty(n, a) : typeof a != "number" || a === 0 || t0.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px"
    }
    function fm(e, n, a) {
        if (n != null && typeof n != "object")
            throw Error(l(62));
        if (e = e.style,
            a != null) {
            for (var r in a)
                !a.hasOwnProperty(r) || n != null && n.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
            for (var c in n)
                r = n[c],
                    n.hasOwnProperty(c) && a[c] !== r && um(e, c, r)
        } else
            for (var f in n)
                n.hasOwnProperty(f) && um(e, f, n[f])
    }
    function $c(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var n0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
        , i0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function kr(e) {
        return i0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function qn() { }
    var eu = null;
    function tu(e) {
        return e = e.target || e.srcElement || window,
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    }
    var Ws = null
        , Zs = null;
    function hm(e) {
        var n = Fs(e);
        if (n && (e = n.stateNode)) {
            var a = e[Lt] || null;
            e: switch (e = n.stateNode,
            n.type) {
                case "input":
                    if (Zc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                        n = a.name,
                        a.type === "radio" && n != null) {
                        for (a = e; a.parentNode;)
                            a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + sn("" + n) + '"][type="radio"]'),
                            n = 0; n < a.length; n++) {
                            var r = a[n];
                            if (r !== e && r.form === e.form) {
                                var c = r[Lt] || null;
                                if (!c)
                                    throw Error(l(90));
                                Zc(r, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                            }
                        }
                        for (n = 0; n < a.length; n++)
                            r = a[n],
                                r.form === e.form && lm(r)
                    }
                    break e;
                case "textarea":
                    om(e, a.value, a.defaultValue);
                    break e;
                case "select":
                    n = a.value,
                        n != null && Ks(e, !!a.multiple, n, !1)
            }
        }
    }
    var nu = !1;
    function dm(e, n, a) {
        if (nu)
            return e(n, a);
        nu = !0;
        try {
            var r = e(n);
            return r
        } finally {
            if (nu = !1,
                (Ws !== null || Zs !== null) && (bo(),
                    Ws && (n = Ws,
                        e = Zs,
                        Zs = Ws = null,
                        hm(n),
                        e)))
                for (n = 0; n < e.length; n++)
                    hm(e[n])
        }
    }
    function al(e, n) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var r = a[Lt] || null;
        if (r === null)
            return null;
        a = r[n];
        e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type,
                    r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                    e = !r;
                break e;
            default:
                e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(l(231, n, typeof a));
        return a
    }
    var Vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
        , iu = !1;
    if (Vn)
        try {
            var ll = {};
            Object.defineProperty(ll, "passive", {
                get: function () {
                    iu = !0
                }
            }),
                window.addEventListener("test", ll, ll),
                window.removeEventListener("test", ll, ll)
        } catch {
            iu = !1
        }
    var bi = null
        , su = null
        , Lr = null;
    function mm() {
        if (Lr)
            return Lr;
        var e, n = su, a = n.length, r, c = "value" in bi ? bi.value : bi.textContent, f = c.length;
        for (e = 0; e < a && n[e] === c[e]; e++)
            ;
        var m = a - e;
        for (r = 1; r <= m && n[a - r] === c[f - r]; r++)
            ;
        return Lr = c.slice(e, 1 < r ? 1 - r : void 0)
    }
    function Ur(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
            e === 0 && n === 13 && (e = 13)) : e = n,
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    }
    function jr() {
        return !0
    }
    function pm() {
        return !1
    }
    function Ut(e) {
        function n(a, r, c, f, m) {
            this._reactName = a,
                this._targetInst = c,
                this.type = r,
                this.nativeEvent = f,
                this.target = m,
                this.currentTarget = null;
            for (var y in e)
                e.hasOwnProperty(y) && (a = e[y],
                    this[y] = a ? a(f) : f[y]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? jr : pm,
                this.isPropagationStopped = pm,
                this
        }
        return v(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                    this.isDefaultPrevented = jr)
            },
            stopPropagation: function () {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                    this.isPropagationStopped = jr)
            },
            persist: function () { },
            isPersistent: jr
        }),
            n
    }
    var ds = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, zr = Ut(ds), rl = v({}, ds, {
        view: 0,
        detail: 0
    }), s0 = Ut(rl), au, lu, ol, Hr = v({}, rl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ou,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== ol && (ol && e.type === "mousemove" ? (au = e.screenX - ol.screenX,
                lu = e.screenY - ol.screenY) : lu = au = 0,
                ol = e),
                au)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : lu
        }
    }), gm = Ut(Hr), a0 = v({}, Hr, {
        dataTransfer: 0
    }), l0 = Ut(a0), r0 = v({}, rl, {
        relatedTarget: 0
    }), ru = Ut(r0), o0 = v({}, ds, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), c0 = Ut(o0), u0 = v({}, ds, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), f0 = Ut(u0), h0 = v({}, ds, {
        data: 0
    }), _m = Ut(h0), d0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, m0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, p0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function g0(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = p0[e]) ? !!n[e] : !1
    }
    function ou() {
        return g0
    }
    var _0 = v({}, rl, {
        key: function (e) {
            if (e.key) {
                var n = d0[e.key] || e.key;
                if (n !== "Unidentified")
                    return n
            }
            return e.type === "keypress" ? (e = Ur(e),
                e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? m0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ou,
        charCode: function (e) {
            return e.type === "keypress" ? Ur(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
        , y0 = Ut(_0)
        , v0 = v({}, Hr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })
        , ym = Ut(v0)
        , S0 = v({}, rl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ou
        })
        , E0 = Ut(S0)
        , b0 = v({}, ds, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })
        , C0 = Ut(b0)
        , T0 = v({}, Hr, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })
        , x0 = Ut(T0)
        , w0 = v({}, ds, {
            newState: 0,
            oldState: 0
        })
        , R0 = Ut(w0)
        , N0 = [9, 13, 27, 32]
        , cu = Vn && "CompositionEvent" in window
        , cl = null;
    Vn && "documentMode" in document && (cl = document.documentMode);
    var A0 = Vn && "TextEvent" in window && !cl
        , vm = Vn && (!cu || cl && 8 < cl && 11 >= cl)
        , Sm = " "
        , Em = !1;
    function bm(e, n) {
        switch (e) {
            case "keyup":
                return N0.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }
    function Cm(e) {
        return e = e.detail,
            typeof e == "object" && "data" in e ? e.data : null
    }
    var Js = !1;
    function D0(e, n) {
        switch (e) {
            case "compositionend":
                return Cm(n);
            case "keypress":
                return n.which !== 32 ? null : (Em = !0,
                    Sm);
            case "textInput":
                return e = n.data,
                    e === Sm && Em ? null : e;
            default:
                return null
        }
    }
    function O0(e, n) {
        if (Js)
            return e === "compositionend" || !cu && bm(e, n) ? (e = mm(),
                Lr = su = bi = null,
                Js = !1,
                e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length)
                        return n.char;
                    if (n.which)
                        return String.fromCharCode(n.which)
                }
                return null;
            case "compositionend":
                return vm && n.locale !== "ko" ? null : n.data;
            default:
                return null
        }
    }
    var I0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Tm(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!I0[e.type] : n === "textarea"
    }
    function xm(e, n, a, r) {
        Ws ? Zs ? Zs.push(r) : Zs = [r] : Ws = r,
            n = Ao(n, "onChange"),
            0 < n.length && (a = new zr("onChange", "change", null, a, r),
                e.push({
                    event: a,
                    listeners: n
                }))
    }
    var ul = null
        , fl = null;
    function M0(e) {
        r_(e, 0)
    }
    function Br(e) {
        var n = sl(e);
        if (lm(n))
            return e
    }
    function wm(e, n) {
        if (e === "change")
            return n
    }
    var Rm = !1;
    if (Vn) {
        var uu;
        if (Vn) {
            var fu = "oninput" in document;
            if (!fu) {
                var Nm = document.createElement("div");
                Nm.setAttribute("oninput", "return;"),
                    fu = typeof Nm.oninput == "function"
            }
            uu = fu
        } else
            uu = !1;
        Rm = uu && (!document.documentMode || 9 < document.documentMode)
    }
    function Am() {
        ul && (ul.detachEvent("onpropertychange", Dm),
            fl = ul = null)
    }
    function Dm(e) {
        if (e.propertyName === "value" && Br(fl)) {
            var n = [];
            xm(n, fl, e, tu(e)),
                dm(M0, n)
        }
    }
    function k0(e, n, a) {
        e === "focusin" ? (Am(),
            ul = n,
            fl = a,
            ul.attachEvent("onpropertychange", Dm)) : e === "focusout" && Am()
    }
    function L0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Br(fl)
    }
    function U0(e, n) {
        if (e === "click")
            return Br(n)
    }
    function j0(e, n) {
        if (e === "input" || e === "change")
            return Br(n)
    }
    function z0(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
    }
    var Yt = typeof Object.is == "function" ? Object.is : z0;
    function hl(e, n) {
        if (Yt(e, n))
            return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null)
            return !1;
        var a = Object.keys(e)
            , r = Object.keys(n);
        if (a.length !== r.length)
            return !1;
        for (r = 0; r < a.length; r++) {
            var c = a[r];
            if (!tn.call(n, c) || !Yt(e[c], n[c]))
                return !1
        }
        return !0
    }
    function Om(e) {
        for (; e && e.firstChild;)
            e = e.firstChild;
        return e
    }
    function Im(e, n) {
        var a = Om(e);
        e = 0;
        for (var r; a;) {
            if (a.nodeType === 3) {
                if (r = e + a.textContent.length,
                    e <= n && r >= n)
                    return {
                        node: a,
                        offset: n - e
                    };
                e = r
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Om(a)
        }
    }
    function Mm(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Mm(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
    }
    function km(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var n = Mr(e.document); n instanceof e.HTMLIFrameElement;) {
            try {
                var a = typeof n.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = n.contentWindow;
            else
                break;
            n = Mr(e.document)
        }
        return n
    }
    function hu(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
    }
    var H0 = Vn && "documentMode" in document && 11 >= document.documentMode
        , $s = null
        , du = null
        , dl = null
        , mu = !1;
    function Lm(e, n, a) {
        var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        mu || $s == null || $s !== Mr(r) || (r = $s,
            "selectionStart" in r && hu(r) ? r = {
                start: r.selectionStart,
                end: r.selectionEnd
            } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
                r = {
                    anchorNode: r.anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }),
            dl && hl(dl, r) || (dl = r,
                r = Ao(du, "onSelect"),
                0 < r.length && (n = new zr("onSelect", "select", null, n, a),
                    e.push({
                        event: n,
                        listeners: r
                    }),
                    n.target = $s)))
    }
    function ms(e, n) {
        var a = {};
        return a[e.toLowerCase()] = n.toLowerCase(),
            a["Webkit" + e] = "webkit" + n,
            a["Moz" + e] = "moz" + n,
            a
    }
    var ea = {
        animationend: ms("Animation", "AnimationEnd"),
        animationiteration: ms("Animation", "AnimationIteration"),
        animationstart: ms("Animation", "AnimationStart"),
        transitionrun: ms("Transition", "TransitionRun"),
        transitionstart: ms("Transition", "TransitionStart"),
        transitioncancel: ms("Transition", "TransitionCancel"),
        transitionend: ms("Transition", "TransitionEnd")
    }
        , pu = {}
        , Um = {};
    Vn && (Um = document.createElement("div").style,
        "AnimationEvent" in window || (delete ea.animationend.animation,
            delete ea.animationiteration.animation,
            delete ea.animationstart.animation),
        "TransitionEvent" in window || delete ea.transitionend.transition);
    function ps(e) {
        if (pu[e])
            return pu[e];
        if (!ea[e])
            return e;
        var n = ea[e], a;
        for (a in n)
            if (n.hasOwnProperty(a) && a in Um)
                return pu[e] = n[a];
        return e
    }
    var jm = ps("animationend")
        , zm = ps("animationiteration")
        , Hm = ps("animationstart")
        , B0 = ps("transitionrun")
        , P0 = ps("transitionstart")
        , q0 = ps("transitioncancel")
        , Bm = ps("transitionend")
        , Pm = new Map
        , gu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    gu.push("scrollEnd");
    function yn(e, n) {
        Pm.set(e, n),
            hs(n, [e])
    }
    var Pr = typeof reportError == "function" ? reportError : function (e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(n))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
        , an = []
        , ta = 0
        , _u = 0;
    function qr() {
        for (var e = ta, n = _u = ta = 0; n < e;) {
            var a = an[n];
            an[n++] = null;
            var r = an[n];
            an[n++] = null;
            var c = an[n];
            an[n++] = null;
            var f = an[n];
            if (an[n++] = null,
                r !== null && c !== null) {
                var m = r.pending;
                m === null ? c.next = c : (c.next = m.next,
                    m.next = c),
                    r.pending = c
            }
            f !== 0 && qm(a, c, f)
        }
    }
    function Vr(e, n, a, r) {
        an[ta++] = e,
            an[ta++] = n,
            an[ta++] = a,
            an[ta++] = r,
            _u |= r,
            e.lanes |= r,
            e = e.alternate,
            e !== null && (e.lanes |= r)
    }
    function yu(e, n, a, r) {
        return Vr(e, n, a, r),
            Gr(e)
    }
    function gs(e, n) {
        return Vr(e, null, null, n),
            Gr(e)
    }
    function qm(e, n, a) {
        e.lanes |= a;
        var r = e.alternate;
        r !== null && (r.lanes |= a);
        for (var c = !1, f = e.return; f !== null;)
            f.childLanes |= a,
                r = f.alternate,
                r !== null && (r.childLanes |= a),
                f.tag === 22 && (e = f.stateNode,
                    e === null || e._visibility & 1 || (c = !0)),
                e = f,
                f = f.return;
        return e.tag === 3 ? (f = e.stateNode,
            c && n !== null && (c = 31 - st(a),
                e = f.hiddenUpdates,
                r = e[c],
                r === null ? e[c] = [n] : r.push(n),
                n.lane = a | 536870912),
            f) : null
    }
    function Gr(e) {
        if (50 < Ll)
            throw Ll = 0,
            Nf = null,
            Error(l(185));
        for (var n = e.return; n !== null;)
            e = n,
                n = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var na = {};
    function V0(e, n, a, r) {
        this.tag = e,
            this.key = a,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = n,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = r,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
    }
    function Qt(e, n, a, r) {
        return new V0(e, n, a, r)
    }
    function vu(e) {
        return e = e.prototype,
            !(!e || !e.isReactComponent)
    }
    function Gn(e, n) {
        var a = e.alternate;
        return a === null ? (a = Qt(e.tag, n, e.key, e.mode),
            a.elementType = e.elementType,
            a.type = e.type,
            a.stateNode = e.stateNode,
            a.alternate = e,
            e.alternate = a) : (a.pendingProps = n,
                a.type = e.type,
                a.flags = 0,
                a.subtreeFlags = 0,
                a.deletions = null),
            a.flags = e.flags & 65011712,
            a.childLanes = e.childLanes,
            a.lanes = e.lanes,
            a.child = e.child,
            a.memoizedProps = e.memoizedProps,
            a.memoizedState = e.memoizedState,
            a.updateQueue = e.updateQueue,
            n = e.dependencies,
            a.dependencies = n === null ? null : {
                lanes: n.lanes,
                firstContext: n.firstContext
            },
            a.sibling = e.sibling,
            a.index = e.index,
            a.ref = e.ref,
            a.refCleanup = e.refCleanup,
            a
    }
    function Vm(e, n) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
            e.lanes = n,
            e.child = null,
            e.subtreeFlags = 0,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null) : (e.childLanes = a.childLanes,
                e.lanes = a.lanes,
                e.child = a.child,
                e.subtreeFlags = 0,
                e.deletions = null,
                e.memoizedProps = a.memoizedProps,
                e.memoizedState = a.memoizedState,
                e.updateQueue = a.updateQueue,
                e.type = a.type,
                n = a.dependencies,
                e.dependencies = n === null ? null : {
                    lanes: n.lanes,
                    firstContext: n.firstContext
                }),
            e
    }
    function Fr(e, n, a, r, c, f) {
        var m = 0;
        if (r = e,
            typeof e == "function")
            vu(e) && (m = 1);
        else if (typeof e == "string")
            m = Kb(e, a, X.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
                case Ge:
                    return e = Qt(31, a, n, c),
                        e.elementType = Ge,
                        e.lanes = f,
                        e;
                case P:
                    return _s(a.children, c, f, n);
                case M:
                    m = 8,
                        c |= 24;
                    break;
                case Q:
                    return e = Qt(12, a, n, c | 2),
                        e.elementType = Q,
                        e.lanes = f,
                        e;
                case de:
                    return e = Qt(13, a, n, c),
                        e.elementType = de,
                        e.lanes = f,
                        e;
                case ve:
                    return e = Qt(19, a, n, c),
                        e.elementType = ve,
                        e.lanes = f,
                        e;
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case q:
                                m = 10;
                                break e;
                            case B:
                                m = 9;
                                break e;
                            case re:
                                m = 11;
                                break e;
                            case J:
                                m = 14;
                                break e;
                            case we:
                                m = 16,
                                    r = null;
                                break e
                        }
                    m = 29,
                        a = Error(l(130, e === null ? "null" : typeof e, "")),
                        r = null
            }
        return n = Qt(m, a, n, c),
            n.elementType = e,
            n.type = r,
            n.lanes = f,
            n
    }
    function _s(e, n, a, r) {
        return e = Qt(7, e, r, n),
            e.lanes = a,
            e
    }
    function Su(e, n, a) {
        return e = Qt(6, e, null, n),
            e.lanes = a,
            e
    }
    function Gm(e) {
        var n = Qt(18, null, null, 0);
        return n.stateNode = e,
            n
    }
    function Eu(e, n, a) {
        return n = Qt(4, e.children !== null ? e.children : [], e.key, n),
            n.lanes = a,
            n.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            n
    }
    var Fm = new WeakMap;
    function ln(e, n) {
        if (typeof e == "object" && e !== null) {
            var a = Fm.get(e);
            return a !== void 0 ? a : (n = {
                value: e,
                source: n,
                stack: os(n)
            },
                Fm.set(e, n),
                n)
        }
        return {
            value: e,
            source: n,
            stack: os(n)
        }
    }
    var ia = []
        , sa = 0
        , Yr = null
        , ml = 0
        , rn = []
        , on = 0
        , Ci = null
        , Dn = 1
        , On = "";
    function Fn(e, n) {
        ia[sa++] = ml,
            ia[sa++] = Yr,
            Yr = e,
            ml = n
    }
    function Ym(e, n, a) {
        rn[on++] = Dn,
            rn[on++] = On,
            rn[on++] = Ci,
            Ci = e;
        var r = Dn;
        e = On;
        var c = 32 - st(r) - 1;
        r &= ~(1 << c),
            a += 1;
        var f = 32 - st(n) + c;
        if (30 < f) {
            var m = c - c % 5;
            f = (r & (1 << m) - 1).toString(32),
                r >>= m,
                c -= m,
                Dn = 1 << 32 - st(n) + c | a << c | r,
                On = f + e
        } else
            Dn = 1 << f | a << c | r,
                On = e
    }
    function bu(e) {
        e.return !== null && (Fn(e, 1),
            Ym(e, 1, 0))
    }
    function Cu(e) {
        for (; e === Yr;)
            Yr = ia[--sa],
                ia[sa] = null,
                ml = ia[--sa],
                ia[sa] = null;
        for (; e === Ci;)
            Ci = rn[--on],
                rn[on] = null,
                On = rn[--on],
                rn[on] = null,
                Dn = rn[--on],
                rn[on] = null
    }
    function Qm(e, n) {
        rn[on++] = Dn,
            rn[on++] = On,
            rn[on++] = Ci,
            Dn = n.id,
            On = n.overflow,
            Ci = e
    }
    var Tt = null
        , Qe = null
        , xe = !1
        , Ti = null
        , cn = !1
        , Tu = Error(l(519));
    function xi(e) {
        var n = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw pl(ln(n, e)),
        Tu
    }
    function Km(e) {
        var n = e.stateNode
            , a = e.type
            , r = e.memoizedProps;
        switch (n[Ct] = e,
        n[Lt] = r,
        a) {
            case "dialog":
                Ee("cancel", n),
                    Ee("close", n);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ee("load", n);
                break;
            case "video":
            case "audio":
                for (a = 0; a < jl.length; a++)
                    Ee(jl[a], n);
                break;
            case "source":
                Ee("error", n);
                break;
            case "img":
            case "image":
            case "link":
                Ee("error", n),
                    Ee("load", n);
                break;
            case "details":
                Ee("toggle", n);
                break;
            case "input":
                Ee("invalid", n),
                    rm(n, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                break;
            case "select":
                Ee("invalid", n);
                break;
            case "textarea":
                Ee("invalid", n),
                    cm(n, r.value, r.defaultValue, r.children)
        }
        a = r.children,
            typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || r.suppressHydrationWarning === !0 || f_(n.textContent, a) ? (r.popover != null && (Ee("beforetoggle", n),
                Ee("toggle", n)),
                r.onScroll != null && Ee("scroll", n),
                r.onScrollEnd != null && Ee("scrollend", n),
                r.onClick != null && (n.onclick = qn),
                n = !0) : n = !1,
            n || xi(e, !0)
    }
    function Xm(e) {
        for (Tt = e.return; Tt;)
            switch (Tt.tag) {
                case 5:
                case 31:
                case 13:
                    cn = !1;
                    return;
                case 27:
                case 3:
                    cn = !0;
                    return;
                default:
                    Tt = Tt.return
            }
    }
    function aa(e) {
        if (e !== Tt)
            return !1;
        if (!xe)
            return Xm(e),
                xe = !0,
                !1;
        var n = e.tag, a;
        if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type,
            a = !(a !== "form" && a !== "button") || Vf(e.type, e.memoizedProps)),
            a = !a),
            a && Qe && xi(e),
            Xm(e),
            n === 13) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(l(317));
            Qe = S_(e)
        } else if (n === 31) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(l(317));
            Qe = S_(e)
        } else
            n === 27 ? (n = Qe,
                Hi(e.type) ? (e = Kf,
                    Kf = null,
                    Qe = e) : Qe = n) : Qe = Tt ? fn(e.stateNode.nextSibling) : null;
        return !0
    }
    function ys() {
        Qe = Tt = null,
            xe = !1
    }
    function xu() {
        var e = Ti;
        return e !== null && (Bt === null ? Bt = e : Bt.push.apply(Bt, e),
            Ti = null),
            e
    }
    function pl(e) {
        Ti === null ? Ti = [e] : Ti.push(e)
    }
    var wu = T(null)
        , vs = null
        , Yn = null;
    function wi(e, n, a) {
        K(wu, n._currentValue),
            n._currentValue = a
    }
    function Qn(e) {
        e._currentValue = wu.current,
            z(wu)
    }
    function Ru(e, n, a) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & n) !== n ? (e.childLanes |= n,
                r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
                e === a)
                break;
            e = e.return
        }
    }
    function Nu(e, n, a, r) {
        var c = e.child;
        for (c !== null && (c.return = e); c !== null;) {
            var f = c.dependencies;
            if (f !== null) {
                var m = c.child;
                f = f.firstContext;
                e: for (; f !== null;) {
                    var y = f;
                    f = c;
                    for (var b = 0; b < n.length; b++)
                        if (y.context === n[b]) {
                            f.lanes |= a,
                                y = f.alternate,
                                y !== null && (y.lanes |= a),
                                Ru(f.return, a, e),
                                r || (m = null);
                            break e
                        }
                    f = y.next
                }
            } else if (c.tag === 18) {
                if (m = c.return,
                    m === null)
                    throw Error(l(341));
                m.lanes |= a,
                    f = m.alternate,
                    f !== null && (f.lanes |= a),
                    Ru(m, a, e),
                    m = null
            } else
                m = c.child;
            if (m !== null)
                m.return = c;
            else
                for (m = c; m !== null;) {
                    if (m === e) {
                        m = null;
                        break
                    }
                    if (c = m.sibling,
                        c !== null) {
                        c.return = m.return,
                            m = c;
                        break
                    }
                    m = m.return
                }
            c = m
        }
    }
    function la(e, n, a, r) {
        e = null;
        for (var c = n, f = !1; c !== null;) {
            if (!f) {
                if ((c.flags & 524288) !== 0)
                    f = !0;
                else if ((c.flags & 262144) !== 0)
                    break
            }
            if (c.tag === 10) {
                var m = c.alternate;
                if (m === null)
                    throw Error(l(387));
                if (m = m.memoizedProps,
                    m !== null) {
                    var y = c.type;
                    Yt(c.pendingProps.value, m.value) || (e !== null ? e.push(y) : e = [y])
                }
            } else if (c === Ne.current) {
                if (m = c.alternate,
                    m === null)
                    throw Error(l(387));
                m.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ql) : e = [ql])
            }
            c = c.return
        }
        e !== null && Nu(n, e, a, r),
            n.flags |= 262144
    }
    function Qr(e) {
        for (e = e.firstContext; e !== null;) {
            if (!Yt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ss(e) {
        vs = e,
            Yn = null,
            e = e.dependencies,
            e !== null && (e.firstContext = null)
    }
    function xt(e) {
        return Wm(vs, e)
    }
    function Kr(e, n) {
        return vs === null && Ss(e),
            Wm(e, n)
    }
    function Wm(e, n) {
        var a = n._currentValue;
        if (n = {
            context: n,
            memoizedValue: a,
            next: null
        },
            Yn === null) {
            if (e === null)
                throw Error(l(308));
            Yn = n,
                e.dependencies = {
                    lanes: 0,
                    firstContext: n
                },
                e.flags |= 524288
        } else
            Yn = Yn.next = n;
        return a
    }
    var G0 = typeof AbortController < "u" ? AbortController : function () {
        var e = []
            , n = this.signal = {
                aborted: !1,
                addEventListener: function (a, r) {
                    e.push(r)
                }
            };
        this.abort = function () {
            n.aborted = !0,
                e.forEach(function (a) {
                    return a()
                })
        }
    }
        , F0 = s.unstable_scheduleCallback
        , Y0 = s.unstable_NormalPriority
        , ot = {
            $$typeof: q,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
    function Au() {
        return {
            controller: new G0,
            data: new Map,
            refCount: 0
        }
    }
    function gl(e) {
        e.refCount--,
            e.refCount === 0 && F0(Y0, function () {
                e.controller.abort()
            })
    }
    var _l = null
        , Du = 0
        , ra = 0
        , oa = null;
    function Q0(e, n) {
        if (_l === null) {
            var a = _l = [];
            Du = 0,
                ra = kf(),
                oa = {
                    status: "pending",
                    value: void 0,
                    then: function (r) {
                        a.push(r)
                    }
                }
        }
        return Du++,
            n.then(Zm, Zm),
            n
    }
    function Zm() {
        if (--Du === 0 && _l !== null) {
            oa !== null && (oa.status = "fulfilled");
            var e = _l;
            _l = null,
                ra = 0,
                oa = null;
            for (var n = 0; n < e.length; n++)
                (0,
                    e[n])()
        }
    }
    function K0(e, n) {
        var a = []
            , r = {
                status: "pending",
                value: null,
                reason: null,
                then: function (c) {
                    a.push(c)
                }
            };
        return e.then(function () {
            r.status = "fulfilled",
                r.value = n;
            for (var c = 0; c < a.length; c++)
                (0,
                    a[c])(n)
        }, function (c) {
            for (r.status = "rejected",
                r.reason = c,
                c = 0; c < a.length; c++)
                (0,
                    a[c])(void 0)
        }),
            r
    }
    var Jm = k.S;
    k.S = function (e, n) {
        Lg = bt(),
            typeof n == "object" && n !== null && typeof n.then == "function" && Q0(e, n),
            Jm !== null && Jm(e, n)
    }
        ;
    var Es = T(null);
    function Ou() {
        var e = Es.current;
        return e !== null ? e : Pe.pooledCache
    }
    function Xr(e, n) {
        n === null ? K(Es, Es.current) : K(Es, n.pool)
    }
    function $m() {
        var e = Ou();
        return e === null ? null : {
            parent: ot._currentValue,
            pool: e
        }
    }
    var ca = Error(l(460))
        , Iu = Error(l(474))
        , Wr = Error(l(542))
        , Zr = {
            then: function () { }
        };
    function ep(e) {
        return e = e.status,
            e === "fulfilled" || e === "rejected"
    }
    function tp(e, n, a) {
        switch (a = e[a],
        a === void 0 ? e.push(n) : a !== n && (n.then(qn, qn),
            n = a),
        n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw e = n.reason,
                ip(e),
                e;
            default:
                if (typeof n.status == "string")
                    n.then(qn, qn);
                else {
                    if (e = Pe,
                        e !== null && 100 < e.shellSuspendCounter)
                        throw Error(l(482));
                    e = n,
                        e.status = "pending",
                        e.then(function (r) {
                            if (n.status === "pending") {
                                var c = n;
                                c.status = "fulfilled",
                                    c.value = r
                            }
                        }, function (r) {
                            if (n.status === "pending") {
                                var c = n;
                                c.status = "rejected",
                                    c.reason = r
                            }
                        })
                }
                switch (n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw e = n.reason,
                        ip(e),
                        e
                }
                throw Cs = n,
                ca
        }
    }
    function bs(e) {
        try {
            var n = e._init;
            return n(e._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Cs = a,
                ca) : a
        }
    }
    var Cs = null;
    function np() {
        if (Cs === null)
            throw Error(l(459));
        var e = Cs;
        return Cs = null,
            e
    }
    function ip(e) {
        if (e === ca || e === Wr)
            throw Error(l(483))
    }
    var ua = null
        , yl = 0;
    function Jr(e) {
        var n = yl;
        return yl += 1,
            ua === null && (ua = []),
            tp(ua, e, n)
    }
    function vl(e, n) {
        n = n.props.ref,
            e.ref = n !== void 0 ? n : null
    }
    function $r(e, n) {
        throw n.$$typeof === E ? Error(l(525)) : (e = Object.prototype.toString.call(n),
            Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
    }
    function sp(e) {
        function n(w, C) {
            if (e) {
                var R = w.deletions;
                R === null ? (w.deletions = [C],
                    w.flags |= 16) : R.push(C)
            }
        }
        function a(w, C) {
            if (!e)
                return null;
            for (; C !== null;)
                n(w, C),
                    C = C.sibling;
            return null
        }
        function r(w) {
            for (var C = new Map; w !== null;)
                w.key !== null ? C.set(w.key, w) : C.set(w.index, w),
                    w = w.sibling;
            return C
        }
        function c(w, C) {
            return w = Gn(w, C),
                w.index = 0,
                w.sibling = null,
                w
        }
        function f(w, C, R) {
            return w.index = R,
                e ? (R = w.alternate,
                    R !== null ? (R = R.index,
                        R < C ? (w.flags |= 67108866,
                            C) : R) : (w.flags |= 67108866,
                                C)) : (w.flags |= 1048576,
                                    C)
        }
        function m(w) {
            return e && w.alternate === null && (w.flags |= 67108866),
                w
        }
        function y(w, C, R, j) {
            return C === null || C.tag !== 6 ? (C = Su(R, w.mode, j),
                C.return = w,
                C) : (C = c(C, R),
                    C.return = w,
                    C)
        }
        function b(w, C, R, j) {
            var te = R.type;
            return te === P ? L(w, C, R.props.children, j, R.key) : C !== null && (C.elementType === te || typeof te == "object" && te !== null && te.$$typeof === we && bs(te) === C.type) ? (C = c(C, R.props),
                vl(C, R),
                C.return = w,
                C) : (C = Fr(R.type, R.key, R.props, null, w.mode, j),
                    vl(C, R),
                    C.return = w,
                    C)
        }
        function N(w, C, R, j) {
            return C === null || C.tag !== 4 || C.stateNode.containerInfo !== R.containerInfo || C.stateNode.implementation !== R.implementation ? (C = Eu(R, w.mode, j),
                C.return = w,
                C) : (C = c(C, R.children || []),
                    C.return = w,
                    C)
        }
        function L(w, C, R, j, te) {
            return C === null || C.tag !== 7 ? (C = _s(R, w.mode, j, te),
                C.return = w,
                C) : (C = c(C, R),
                    C.return = w,
                    C)
        }
        function H(w, C, R) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return C = Su("" + C, w.mode, R),
                    C.return = w,
                    C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case D:
                        return R = Fr(C.type, C.key, C.props, null, w.mode, R),
                            vl(R, C),
                            R.return = w,
                            R;
                    case I:
                        return C = Eu(C, w.mode, R),
                            C.return = w,
                            C;
                    case we:
                        return C = bs(C),
                            H(w, C, R)
                }
                if (ge(C) || We(C))
                    return C = _s(C, w.mode, R, null),
                        C.return = w,
                        C;
                if (typeof C.then == "function")
                    return H(w, Jr(C), R);
                if (C.$$typeof === q)
                    return H(w, Kr(w, C), R);
                $r(w, C)
            }
            return null
        }
        function A(w, C, R, j) {
            var te = C !== null ? C.key : null;
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return te !== null ? null : y(w, C, "" + R, j);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case D:
                        return R.key === te ? b(w, C, R, j) : null;
                    case I:
                        return R.key === te ? N(w, C, R, j) : null;
                    case we:
                        return R = bs(R),
                            A(w, C, R, j)
                }
                if (ge(R) || We(R))
                    return te !== null ? null : L(w, C, R, j, null);
                if (typeof R.then == "function")
                    return A(w, C, Jr(R), j);
                if (R.$$typeof === q)
                    return A(w, C, Kr(w, R), j);
                $r(w, R)
            }
            return null
        }
        function O(w, C, R, j, te) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return w = w.get(R) || null,
                    y(C, w, "" + j, te);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case D:
                        return w = w.get(j.key === null ? R : j.key) || null,
                            b(C, w, j, te);
                    case I:
                        return w = w.get(j.key === null ? R : j.key) || null,
                            N(C, w, j, te);
                    case we:
                        return j = bs(j),
                            O(w, C, R, j, te)
                }
                if (ge(j) || We(j))
                    return w = w.get(R) || null,
                        L(C, w, j, te, null);
                if (typeof j.then == "function")
                    return O(w, C, R, Jr(j), te);
                if (j.$$typeof === q)
                    return O(w, C, R, Kr(C, j), te);
                $r(C, j)
            }
            return null
        }
        function W(w, C, R, j) {
            for (var te = null, De = null, Z = C, pe = C = 0, Te = null; Z !== null && pe < R.length; pe++) {
                Z.index > pe ? (Te = Z,
                    Z = null) : Te = Z.sibling;
                var Oe = A(w, Z, R[pe], j);
                if (Oe === null) {
                    Z === null && (Z = Te);
                    break
                }
                e && Z && Oe.alternate === null && n(w, Z),
                    C = f(Oe, C, pe),
                    De === null ? te = Oe : De.sibling = Oe,
                    De = Oe,
                    Z = Te
            }
            if (pe === R.length)
                return a(w, Z),
                    xe && Fn(w, pe),
                    te;
            if (Z === null) {
                for (; pe < R.length; pe++)
                    Z = H(w, R[pe], j),
                        Z !== null && (C = f(Z, C, pe),
                            De === null ? te = Z : De.sibling = Z,
                            De = Z);
                return xe && Fn(w, pe),
                    te
            }
            for (Z = r(Z); pe < R.length; pe++)
                Te = O(Z, w, pe, R[pe], j),
                    Te !== null && (e && Te.alternate !== null && Z.delete(Te.key === null ? pe : Te.key),
                        C = f(Te, C, pe),
                        De === null ? te = Te : De.sibling = Te,
                        De = Te);
            return e && Z.forEach(function (Gi) {
                return n(w, Gi)
            }),
                xe && Fn(w, pe),
                te
        }
        function le(w, C, R, j) {
            if (R == null)
                throw Error(l(151));
            for (var te = null, De = null, Z = C, pe = C = 0, Te = null, Oe = R.next(); Z !== null && !Oe.done; pe++,
                Oe = R.next()) {
                Z.index > pe ? (Te = Z,
                    Z = null) : Te = Z.sibling;
                var Gi = A(w, Z, Oe.value, j);
                if (Gi === null) {
                    Z === null && (Z = Te);
                    break
                }
                e && Z && Gi.alternate === null && n(w, Z),
                    C = f(Gi, C, pe),
                    De === null ? te = Gi : De.sibling = Gi,
                    De = Gi,
                    Z = Te
            }
            if (Oe.done)
                return a(w, Z),
                    xe && Fn(w, pe),
                    te;
            if (Z === null) {
                for (; !Oe.done; pe++,
                    Oe = R.next())
                    Oe = H(w, Oe.value, j),
                        Oe !== null && (C = f(Oe, C, pe),
                            De === null ? te = Oe : De.sibling = Oe,
                            De = Oe);
                return xe && Fn(w, pe),
                    te
            }
            for (Z = r(Z); !Oe.done; pe++,
                Oe = R.next())
                Oe = O(Z, w, pe, Oe.value, j),
                    Oe !== null && (e && Oe.alternate !== null && Z.delete(Oe.key === null ? pe : Oe.key),
                        C = f(Oe, C, pe),
                        De === null ? te = Oe : De.sibling = Oe,
                        De = Oe);
            return e && Z.forEach(function (a1) {
                return n(w, a1)
            }),
                xe && Fn(w, pe),
                te
        }
        function He(w, C, R, j) {
            if (typeof R == "object" && R !== null && R.type === P && R.key === null && (R = R.props.children),
                typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case D:
                        e: {
                            for (var te = R.key; C !== null;) {
                                if (C.key === te) {
                                    if (te = R.type,
                                        te === P) {
                                        if (C.tag === 7) {
                                            a(w, C.sibling),
                                                j = c(C, R.props.children),
                                                j.return = w,
                                                w = j;
                                            break e
                                        }
                                    } else if (C.elementType === te || typeof te == "object" && te !== null && te.$$typeof === we && bs(te) === C.type) {
                                        a(w, C.sibling),
                                            j = c(C, R.props),
                                            vl(j, R),
                                            j.return = w,
                                            w = j;
                                        break e
                                    }
                                    a(w, C);
                                    break
                                } else
                                    n(w, C);
                                C = C.sibling
                            }
                            R.type === P ? (j = _s(R.props.children, w.mode, j, R.key),
                                j.return = w,
                                w = j) : (j = Fr(R.type, R.key, R.props, null, w.mode, j),
                                    vl(j, R),
                                    j.return = w,
                                    w = j)
                        }
                        return m(w);
                    case I:
                        e: {
                            for (te = R.key; C !== null;) {
                                if (C.key === te)
                                    if (C.tag === 4 && C.stateNode.containerInfo === R.containerInfo && C.stateNode.implementation === R.implementation) {
                                        a(w, C.sibling),
                                            j = c(C, R.children || []),
                                            j.return = w,
                                            w = j;
                                        break e
                                    } else {
                                        a(w, C);
                                        break
                                    }
                                else
                                    n(w, C);
                                C = C.sibling
                            }
                            j = Eu(R, w.mode, j),
                                j.return = w,
                                w = j
                        }
                        return m(w);
                    case we:
                        return R = bs(R),
                            He(w, C, R, j)
                }
                if (ge(R))
                    return W(w, C, R, j);
                if (We(R)) {
                    if (te = We(R),
                        typeof te != "function")
                        throw Error(l(150));
                    return R = te.call(R),
                        le(w, C, R, j)
                }
                if (typeof R.then == "function")
                    return He(w, C, Jr(R), j);
                if (R.$$typeof === q)
                    return He(w, C, Kr(w, R), j);
                $r(w, R)
            }
            return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R,
                C !== null && C.tag === 6 ? (a(w, C.sibling),
                    j = c(C, R),
                    j.return = w,
                    w = j) : (a(w, C),
                        j = Su(R, w.mode, j),
                        j.return = w,
                        w = j),
                m(w)) : a(w, C)
        }
        return function (w, C, R, j) {
            try {
                yl = 0;
                var te = He(w, C, R, j);
                return ua = null,
                    te
            } catch (Z) {
                if (Z === ca || Z === Wr)
                    throw Z;
                var De = Qt(29, Z, null, w.mode);
                return De.lanes = j,
                    De.return = w,
                    De
            }
        }
    }
    var Ts = sp(!0)
        , ap = sp(!1)
        , Ri = !1;
    function Mu(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ku(e, n) {
        e = e.updateQueue,
            n.updateQueue === e && (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
    }
    function Ni(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ai(e, n, a) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
            (Me & 2) !== 0) {
            var c = r.pending;
            return c === null ? n.next = n : (n.next = c.next,
                c.next = n),
                r.pending = n,
                n = Gr(e),
                qm(e, null, a),
                n
        }
        return Vr(e, r, n, a),
            Gr(e)
    }
    function Sl(e, n, a) {
        if (n = n.updateQueue,
            n !== null && (n = n.shared,
                (a & 4194048) !== 0)) {
            var r = n.lanes;
            r &= e.pendingLanes,
                a |= r,
                n.lanes = a,
                Wd(e, a)
        }
    }
    function Lu(e, n) {
        var a = e.updateQueue
            , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
            a === r)) {
            var c = null
                , f = null;
            if (a = a.firstBaseUpdate,
                a !== null) {
                do {
                    var m = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? c = f = m : f = f.next = m,
                        a = a.next
                } while (a !== null);
                f === null ? c = f = n : f = f.next = n
            } else
                c = f = n;
            a = {
                baseState: r.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: f,
                shared: r.shared,
                callbacks: r.callbacks
            },
                e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
            e === null ? a.firstBaseUpdate = n : e.next = n,
            a.lastBaseUpdate = n
    }
    var Uu = !1;
    function El() {
        if (Uu) {
            var e = oa;
            if (e !== null)
                throw e
        }
    }
    function bl(e, n, a, r) {
        Uu = !1;
        var c = e.updateQueue;
        Ri = !1;
        var f = c.firstBaseUpdate
            , m = c.lastBaseUpdate
            , y = c.shared.pending;
        if (y !== null) {
            c.shared.pending = null;
            var b = y
                , N = b.next;
            b.next = null,
                m === null ? f = N : m.next = N,
                m = b;
            var L = e.alternate;
            L !== null && (L = L.updateQueue,
                y = L.lastBaseUpdate,
                y !== m && (y === null ? L.firstBaseUpdate = N : y.next = N,
                    L.lastBaseUpdate = b))
        }
        if (f !== null) {
            var H = c.baseState;
            m = 0,
                L = N = b = null,
                y = f;
            do {
                var A = y.lane & -536870913
                    , O = A !== y.lane;
                if (O ? (Ce & A) === A : (r & A) === A) {
                    A !== 0 && A === ra && (Uu = !0),
                        L !== null && (L = L.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                    e: {
                        var W = e
                            , le = y;
                        A = n;
                        var He = a;
                        switch (le.tag) {
                            case 1:
                                if (W = le.payload,
                                    typeof W == "function") {
                                    H = W.call(He, H, A);
                                    break e
                                }
                                H = W;
                                break e;
                            case 3:
                                W.flags = W.flags & -65537 | 128;
                            case 0:
                                if (W = le.payload,
                                    A = typeof W == "function" ? W.call(He, H, A) : W,
                                    A == null)
                                    break e;
                                H = v({}, H, A);
                                break e;
                            case 2:
                                Ri = !0
                        }
                    }
                    A = y.callback,
                        A !== null && (e.flags |= 64,
                            O && (e.flags |= 8192),
                            O = c.callbacks,
                            O === null ? c.callbacks = [A] : O.push(A))
                } else
                    O = {
                        lane: A,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    },
                        L === null ? (N = L = O,
                            b = H) : L = L.next = O,
                        m |= A;
                if (y = y.next,
                    y === null) {
                    if (y = c.shared.pending,
                        y === null)
                        break;
                    O = y,
                        y = O.next,
                        O.next = null,
                        c.lastBaseUpdate = O,
                        c.shared.pending = null
                }
            } while (!0);
            L === null && (b = H),
                c.baseState = b,
                c.firstBaseUpdate = N,
                c.lastBaseUpdate = L,
                f === null && (c.shared.lanes = 0),
                ki |= m,
                e.lanes = m,
                e.memoizedState = H
        }
    }
    function lp(e, n) {
        if (typeof e != "function")
            throw Error(l(191, e));
        e.call(n)
    }
    function rp(e, n) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
                e = 0; e < a.length; e++)
                lp(a[e], n)
    }
    var fa = T(null)
        , eo = T(0);
    function op(e, n) {
        e = ni,
            K(eo, e),
            K(fa, n),
            ni = e | n.baseLanes
    }
    function ju() {
        K(eo, ni),
            K(fa, fa.current)
    }
    function zu() {
        ni = eo.current,
            z(fa),
            z(eo)
    }
    var Kt = T(null)
        , un = null;
    function Di(e) {
        var n = e.alternate;
        K(at, at.current & 1),
            K(Kt, e),
            un === null && (n === null || fa.current !== null || n.memoizedState !== null) && (un = e)
    }
    function Hu(e) {
        K(at, at.current),
            K(Kt, e),
            un === null && (un = e)
    }
    function cp(e) {
        e.tag === 22 ? (K(at, at.current),
            K(Kt, e),
            un === null && (un = e)) : Oi()
    }
    function Oi() {
        K(at, at.current),
            K(Kt, Kt.current)
    }
    function Xt(e) {
        z(Kt),
            un === e && (un = null),
            z(at)
    }
    var at = T(0);
    function to(e) {
        for (var n = e; n !== null;) {
            if (n.tag === 13) {
                var a = n.memoizedState;
                if (a !== null && (a = a.dehydrated,
                    a === null || Yf(a) || Qf(a)))
                    return n
            } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
                if ((n.flags & 128) !== 0)
                    return n
            } else if (n.child !== null) {
                n.child.return = n,
                    n = n.child;
                continue
            }
            if (n === e)
                break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e)
                    return null;
                n = n.return
            }
            n.sibling.return = n.return,
                n = n.sibling
        }
        return null
    }
    var Kn = 0
        , me = null
        , je = null
        , ct = null
        , no = !1
        , ha = !1
        , xs = !1
        , io = 0
        , Cl = 0
        , da = null
        , X0 = 0;
    function et() {
        throw Error(l(321))
    }
    function Bu(e, n) {
        if (n === null)
            return !1;
        for (var a = 0; a < n.length && a < e.length; a++)
            if (!Yt(e[a], n[a]))
                return !1;
        return !0
    }
    function Pu(e, n, a, r, c, f) {
        return Kn = f,
            me = n,
            n.memoizedState = null,
            n.updateQueue = null,
            n.lanes = 0,
            k.H = e === null || e.memoizedState === null ? Yp : nf,
            xs = !1,
            f = a(r, c),
            xs = !1,
            ha && (f = fp(n, a, r, c)),
            up(e),
            f
    }
    function up(e) {
        k.H = wl;
        var n = je !== null && je.next !== null;
        if (Kn = 0,
            ct = je = me = null,
            no = !1,
            Cl = 0,
            da = null,
            n)
            throw Error(l(300));
        e === null || ut || (e = e.dependencies,
            e !== null && Qr(e) && (ut = !0))
    }
    function fp(e, n, a, r) {
        me = e;
        var c = 0;
        do {
            if (ha && (da = null),
                Cl = 0,
                ha = !1,
                25 <= c)
                throw Error(l(301));
            if (c += 1,
                ct = je = null,
                e.updateQueue != null) {
                var f = e.updateQueue;
                f.lastEffect = null,
                    f.events = null,
                    f.stores = null,
                    f.memoCache != null && (f.memoCache.index = 0)
            }
            k.H = Qp,
                f = n(a, r)
        } while (ha);
        return f
    }
    function W0() {
        var e = k.H
            , n = e.useState()[0];
        return n = typeof n.then == "function" ? Tl(n) : n,
            e = e.useState()[0],
            (je !== null ? je.memoizedState : null) !== e && (me.flags |= 1024),
            n
    }
    function qu() {
        var e = io !== 0;
        return io = 0,
            e
    }
    function Vu(e, n, a) {
        n.updateQueue = e.updateQueue,
            n.flags &= -2053,
            e.lanes &= ~a
    }
    function Gu(e) {
        if (no) {
            for (e = e.memoizedState; e !== null;) {
                var n = e.queue;
                n !== null && (n.pending = null),
                    e = e.next
            }
            no = !1
        }
        Kn = 0,
            ct = je = me = null,
            ha = !1,
            Cl = io = 0,
            da = null
    }
    function It() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ct === null ? me.memoizedState = ct = e : ct = ct.next = e,
            ct
    }
    function lt() {
        if (je === null) {
            var e = me.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = je.next;
        var n = ct === null ? me.memoizedState : ct.next;
        if (n !== null)
            ct = n,
                je = e;
        else {
            if (e === null)
                throw me.alternate === null ? Error(l(467)) : Error(l(310));
            je = e,
                e = {
                    memoizedState: je.memoizedState,
                    baseState: je.baseState,
                    baseQueue: je.baseQueue,
                    queue: je.queue,
                    next: null
                },
                ct === null ? me.memoizedState = ct = e : ct = ct.next = e
        }
        return ct
    }
    function so() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Tl(e) {
        var n = Cl;
        return Cl += 1,
            da === null && (da = []),
            e = tp(da, e, n),
            n = me,
            (ct === null ? n.memoizedState : ct.next) === null && (n = n.alternate,
                k.H = n === null || n.memoizedState === null ? Yp : nf),
            e
    }
    function ao(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Tl(e);
            if (e.$$typeof === q)
                return xt(e)
        }
        throw Error(l(438, String(e)))
    }
    function Fu(e) {
        var n = null
            , a = me.updateQueue;
        if (a !== null && (n = a.memoCache),
            n == null) {
            var r = me.alternate;
            r !== null && (r = r.updateQueue,
                r !== null && (r = r.memoCache,
                    r != null && (n = {
                        data: r.data.map(function (c) {
                            return c.slice()
                        }),
                        index: 0
                    })))
        }
        if (n == null && (n = {
            data: [],
            index: 0
        }),
            a === null && (a = so(),
                me.updateQueue = a),
            a.memoCache = n,
            a = n.data[n.index],
            a === void 0)
            for (a = n.data[n.index] = Array(e),
                r = 0; r < e; r++)
                a[r] = ke;
        return n.index++,
            a
    }
    function Xn(e, n) {
        return typeof n == "function" ? n(e) : n
    }
    function lo(e) {
        var n = lt();
        return Yu(n, je, e)
    }
    function Yu(e, n, a) {
        var r = e.queue;
        if (r === null)
            throw Error(l(311));
        r.lastRenderedReducer = a;
        var c = e.baseQueue
            , f = r.pending;
        if (f !== null) {
            if (c !== null) {
                var m = c.next;
                c.next = f.next,
                    f.next = m
            }
            n.baseQueue = c = f,
                r.pending = null
        }
        if (f = e.baseState,
            c === null)
            e.memoizedState = f;
        else {
            n = c.next;
            var y = m = null
                , b = null
                , N = n
                , L = !1;
            do {
                var H = N.lane & -536870913;
                if (H !== N.lane ? (Ce & H) === H : (Kn & H) === H) {
                    var A = N.revertLane;
                    if (A === 0)
                        b !== null && (b = b.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }),
                            H === ra && (L = !0);
                    else if ((Kn & A) === A) {
                        N = N.next,
                            A === ra && (L = !0);
                        continue
                    } else
                        H = {
                            lane: 0,
                            revertLane: N.revertLane,
                            gesture: null,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        },
                            b === null ? (y = b = H,
                                m = f) : b = b.next = H,
                            me.lanes |= A,
                            ki |= A;
                    H = N.action,
                        xs && a(f, H),
                        f = N.hasEagerState ? N.eagerState : a(f, H)
                } else
                    A = {
                        lane: H,
                        revertLane: N.revertLane,
                        gesture: N.gesture,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    },
                        b === null ? (y = b = A,
                            m = f) : b = b.next = A,
                        me.lanes |= H,
                        ki |= H;
                N = N.next
            } while (N !== null && N !== n);
            if (b === null ? m = f : b.next = y,
                !Yt(f, e.memoizedState) && (ut = !0,
                    L && (a = oa,
                        a !== null)))
                throw a;
            e.memoizedState = f,
                e.baseState = m,
                e.baseQueue = b,
                r.lastRenderedState = f
        }
        return c === null && (r.lanes = 0),
            [e.memoizedState, r.dispatch]
    }
    function Qu(e) {
        var n = lt()
            , a = n.queue;
        if (a === null)
            throw Error(l(311));
        a.lastRenderedReducer = e;
        var r = a.dispatch
            , c = a.pending
            , f = n.memoizedState;
        if (c !== null) {
            a.pending = null;
            var m = c = c.next;
            do
                f = e(f, m.action),
                    m = m.next;
            while (m !== c);
            Yt(f, n.memoizedState) || (ut = !0),
                n.memoizedState = f,
                n.baseQueue === null && (n.baseState = f),
                a.lastRenderedState = f
        }
        return [f, r]
    }
    function hp(e, n, a) {
        var r = me
            , c = lt()
            , f = xe;
        if (f) {
            if (a === void 0)
                throw Error(l(407));
            a = a()
        } else
            a = n();
        var m = !Yt((je || c).memoizedState, a);
        if (m && (c.memoizedState = a,
            ut = !0),
            c = c.queue,
            Wu(pp.bind(null, r, c, e), [e]),
            c.getSnapshot !== n || m || ct !== null && ct.memoizedState.tag & 1) {
            if (r.flags |= 2048,
                ma(9, {
                    destroy: void 0
                }, mp.bind(null, r, c, a, n), null),
                Pe === null)
                throw Error(l(349));
            f || (Kn & 127) !== 0 || dp(r, n, a)
        }
        return a
    }
    function dp(e, n, a) {
        e.flags |= 16384,
            e = {
                getSnapshot: n,
                value: a
            },
            n = me.updateQueue,
            n === null ? (n = so(),
                me.updateQueue = n,
                n.stores = [e]) : (a = n.stores,
                    a === null ? n.stores = [e] : a.push(e))
    }
    function mp(e, n, a, r) {
        n.value = a,
            n.getSnapshot = r,
            gp(n) && _p(e)
    }
    function pp(e, n, a) {
        return a(function () {
            gp(n) && _p(e)
        })
    }
    function gp(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
            var a = n();
            return !Yt(e, a)
        } catch {
            return !0
        }
    }
    function _p(e) {
        var n = gs(e, 2);
        n !== null && Pt(n, e, 2)
    }
    function Ku(e) {
        var n = It();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
                xs) {
                Ye(!0);
                try {
                    a()
                } finally {
                    Ye(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = e,
            n.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xn,
                lastRenderedState: e
            },
            n
    }
    function yp(e, n, a, r) {
        return e.baseState = a,
            Yu(e, je, typeof r == "function" ? r : Xn)
    }
    function Z0(e, n, a, r, c) {
        if (co(e))
            throw Error(l(485));
        if (e = n.action,
            e !== null) {
            var f = {
                payload: c,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (m) {
                    f.listeners.push(m)
                }
            };
            k.T !== null ? a(!0) : f.isTransition = !1,
                r(f),
                a = n.pending,
                a === null ? (f.next = n.pending = f,
                    vp(n, f)) : (f.next = a.next,
                        n.pending = a.next = f)
        }
    }
    function vp(e, n) {
        var a = n.action
            , r = n.payload
            , c = e.state;
        if (n.isTransition) {
            var f = k.T
                , m = {};
            k.T = m;
            try {
                var y = a(c, r)
                    , b = k.S;
                b !== null && b(m, y),
                    Sp(e, n, y)
            } catch (N) {
                Xu(e, n, N)
            } finally {
                f !== null && m.types !== null && (f.types = m.types),
                    k.T = f
            }
        } else
            try {
                f = a(c, r),
                    Sp(e, n, f)
            } catch (N) {
                Xu(e, n, N)
            }
    }
    function Sp(e, n, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (r) {
            Ep(e, n, r)
        }, function (r) {
            return Xu(e, n, r)
        }) : Ep(e, n, a)
    }
    function Ep(e, n, a) {
        n.status = "fulfilled",
            n.value = a,
            bp(n),
            e.state = a,
            n = e.pending,
            n !== null && (a = n.next,
                a === n ? e.pending = null : (a = a.next,
                    n.next = a,
                    vp(e, a)))
    }
    function Xu(e, n, a) {
        var r = e.pending;
        if (e.pending = null,
            r !== null) {
            r = r.next;
            do
                n.status = "rejected",
                    n.reason = a,
                    bp(n),
                    n = n.next;
            while (n !== r)
        }
        e.action = null
    }
    function bp(e) {
        e = e.listeners;
        for (var n = 0; n < e.length; n++)
            (0,
                e[n])()
    }
    function Cp(e, n) {
        return n
    }
    function Tp(e, n) {
        if (xe) {
            var a = Pe.formState;
            if (a !== null) {
                e: {
                    var r = me;
                    if (xe) {
                        if (Qe) {
                            t: {
                                for (var c = Qe, f = cn; c.nodeType !== 8;) {
                                    if (!f) {
                                        c = null;
                                        break t
                                    }
                                    if (c = fn(c.nextSibling),
                                        c === null) {
                                        c = null;
                                        break t
                                    }
                                }
                                f = c.data,
                                    c = f === "F!" || f === "F" ? c : null
                            }
                            if (c) {
                                Qe = fn(c.nextSibling),
                                    r = c.data === "F!";
                                break e
                            }
                        }
                        xi(r)
                    }
                    r = !1
                }
                r && (n = a[0])
            }
        }
        return a = It(),
            a.memoizedState = a.baseState = n,
            r = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Cp,
                lastRenderedState: n
            },
            a.queue = r,
            a = Vp.bind(null, me, r),
            r.dispatch = a,
            r = Ku(!1),
            f = tf.bind(null, me, !1, r.queue),
            r = It(),
            c = {
                state: n,
                dispatch: null,
                action: e,
                pending: null
            },
            r.queue = c,
            a = Z0.bind(null, me, c, f, a),
            c.dispatch = a,
            r.memoizedState = e,
            [n, a, !1]
    }
    function xp(e) {
        var n = lt();
        return wp(n, je, e)
    }
    function wp(e, n, a) {
        if (n = Yu(e, n, Cp)[0],
            e = lo(Xn)[0],
            typeof n == "object" && n !== null && typeof n.then == "function")
            try {
                var r = Tl(n)
            } catch (m) {
                throw m === ca ? Wr : m
            }
        else
            r = n;
        n = lt();
        var c = n.queue
            , f = c.dispatch;
        return a !== n.memoizedState && (me.flags |= 2048,
            ma(9, {
                destroy: void 0
            }, J0.bind(null, c, a), null)),
            [r, f, e]
    }
    function J0(e, n) {
        e.action = n
    }
    function Rp(e) {
        var n = lt()
            , a = je;
        if (a !== null)
            return wp(n, a, e);
        lt(),
            n = n.memoizedState,
            a = lt();
        var r = a.queue.dispatch;
        return a.memoizedState = e,
            [n, r, !1]
    }
    function ma(e, n, a, r) {
        return e = {
            tag: e,
            create: a,
            deps: r,
            inst: n,
            next: null
        },
            n = me.updateQueue,
            n === null && (n = so(),
                me.updateQueue = n),
            a = n.lastEffect,
            a === null ? n.lastEffect = e.next = e : (r = a.next,
                a.next = e,
                e.next = r,
                n.lastEffect = e),
            e
    }
    function Np() {
        return lt().memoizedState
    }
    function ro(e, n, a, r) {
        var c = It();
        me.flags |= e,
            c.memoizedState = ma(1 | n, {
                destroy: void 0
            }, a, r === void 0 ? null : r)
    }
    function oo(e, n, a, r) {
        var c = lt();
        r = r === void 0 ? null : r;
        var f = c.memoizedState.inst;
        je !== null && r !== null && Bu(r, je.memoizedState.deps) ? c.memoizedState = ma(n, f, a, r) : (me.flags |= e,
            c.memoizedState = ma(1 | n, f, a, r))
    }
    function Ap(e, n) {
        ro(8390656, 8, e, n)
    }
    function Wu(e, n) {
        oo(2048, 8, e, n)
    }
    function $0(e) {
        me.flags |= 4;
        var n = me.updateQueue;
        if (n === null)
            n = so(),
                me.updateQueue = n,
                n.events = [e];
        else {
            var a = n.events;
            a === null ? n.events = [e] : a.push(e)
        }
    }
    function Dp(e) {
        var n = lt().memoizedState;
        return $0({
            ref: n,
            nextImpl: e
        }),
            function () {
                if ((Me & 2) !== 0)
                    throw Error(l(440));
                return n.impl.apply(void 0, arguments)
            }
    }
    function Op(e, n) {
        return oo(4, 2, e, n)
    }
    function Ip(e, n) {
        return oo(4, 4, e, n)
    }
    function Mp(e, n) {
        if (typeof n == "function") {
            e = e();
            var a = n(e);
            return function () {
                typeof a == "function" ? a() : n(null)
            }
        }
        if (n != null)
            return e = e(),
                n.current = e,
                function () {
                    n.current = null
                }
    }
    function kp(e, n, a) {
        a = a != null ? a.concat([e]) : null,
            oo(4, 4, Mp.bind(null, n, e), a)
    }
    function Zu() { }
    function Lp(e, n) {
        var a = lt();
        n = n === void 0 ? null : n;
        var r = a.memoizedState;
        return n !== null && Bu(n, r[1]) ? r[0] : (a.memoizedState = [e, n],
            e)
    }
    function Up(e, n) {
        var a = lt();
        n = n === void 0 ? null : n;
        var r = a.memoizedState;
        if (n !== null && Bu(n, r[1]))
            return r[0];
        if (r = e(),
            xs) {
            Ye(!0);
            try {
                e()
            } finally {
                Ye(!1)
            }
        }
        return a.memoizedState = [r, n],
            r
    }
    function Ju(e, n, a) {
        return a === void 0 || (Kn & 1073741824) !== 0 && (Ce & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = a,
            e = jg(),
            me.lanes |= e,
            ki |= e,
            a)
    }
    function jp(e, n, a, r) {
        return Yt(a, n) ? a : fa.current !== null ? (e = Ju(e, a, r),
            Yt(e, n) || (ut = !0),
            e) : (Kn & 42) === 0 || (Kn & 1073741824) !== 0 && (Ce & 261930) === 0 ? (ut = !0,
                e.memoizedState = a) : (e = jg(),
                    me.lanes |= e,
                    ki |= e,
                    n)
    }
    function zp(e, n, a, r, c) {
        var f = F.p;
        F.p = f !== 0 && 8 > f ? f : 8;
        var m = k.T
            , y = {};
        k.T = y,
            tf(e, !1, n, a);
        try {
            var b = c()
                , N = k.S;
            if (N !== null && N(y, b),
                b !== null && typeof b == "object" && typeof b.then == "function") {
                var L = K0(b, r);
                xl(e, n, L, Jt(e))
            } else
                xl(e, n, r, Jt(e))
        } catch (H) {
            xl(e, n, {
                then: function () { },
                status: "rejected",
                reason: H
            }, Jt())
        } finally {
            F.p = f,
                m !== null && y.types !== null && (m.types = y.types),
                k.T = m
        }
    }
    function eb() { }
    function $u(e, n, a, r) {
        if (e.tag !== 5)
            throw Error(l(476));
        var c = Hp(e).queue;
        zp(e, c, n, ne, a === null ? eb : function () {
            return Bp(e),
                a(r)
        }
        )
    }
    function Hp(e) {
        var n = e.memoizedState;
        if (n !== null)
            return n;
        n = {
            memoizedState: ne,
            baseState: ne,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xn,
                lastRenderedState: ne
            },
            next: null
        };
        var a = {};
        return n.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xn,
                lastRenderedState: a
            },
            next: null
        },
            e.memoizedState = n,
            e = e.alternate,
            e !== null && (e.memoizedState = n),
            n
    }
    function Bp(e) {
        var n = Hp(e);
        n.next === null && (n = e.alternate.memoizedState),
            xl(e, n.next.queue, {}, Jt())
    }
    function ef() {
        return xt(ql)
    }
    function Pp() {
        return lt().memoizedState
    }
    function qp() {
        return lt().memoizedState
    }
    function tb(e) {
        for (var n = e.return; n !== null;) {
            switch (n.tag) {
                case 24:
                case 3:
                    var a = Jt();
                    e = Ni(a);
                    var r = Ai(n, e, a);
                    r !== null && (Pt(r, n, a),
                        Sl(r, n, a)),
                        n = {
                            cache: Au()
                        },
                        e.payload = n;
                    return
            }
            n = n.return
        }
    }
    function nb(e, n, a) {
        var r = Jt();
        a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            co(e) ? Gp(n, a) : (a = yu(e, n, a, r),
                a !== null && (Pt(a, e, r),
                    Fp(a, n, r)))
    }
    function Vp(e, n, a) {
        var r = Jt();
        xl(e, n, a, r)
    }
    function xl(e, n, a, r) {
        var c = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (co(e))
            Gp(n, c);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer,
                f !== null))
                try {
                    var m = n.lastRenderedState
                        , y = f(m, a);
                    if (c.hasEagerState = !0,
                        c.eagerState = y,
                        Yt(y, m))
                        return Vr(e, n, c, 0),
                            Pe === null && qr(),
                            !1
                } catch { }
            if (a = yu(e, n, c, r),
                a !== null)
                return Pt(a, e, r),
                    Fp(a, n, r),
                    !0
        }
        return !1
    }
    function tf(e, n, a, r) {
        if (r = {
            lane: 2,
            revertLane: kf(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            co(e)) {
            if (n)
                throw Error(l(479))
        } else
            n = yu(e, a, r, 2),
                n !== null && Pt(n, e, 2)
    }
    function co(e) {
        var n = e.alternate;
        return e === me || n !== null && n === me
    }
    function Gp(e, n) {
        ha = no = !0;
        var a = e.pending;
        a === null ? n.next = n : (n.next = a.next,
            a.next = n),
            e.pending = n
    }
    function Fp(e, n, a) {
        if ((a & 4194048) !== 0) {
            var r = n.lanes;
            r &= e.pendingLanes,
                a |= r,
                n.lanes = a,
                Wd(e, a)
        }
    }
    var wl = {
        readContext: xt,
        use: ao,
        useCallback: et,
        useContext: et,
        useEffect: et,
        useImperativeHandle: et,
        useLayoutEffect: et,
        useInsertionEffect: et,
        useMemo: et,
        useReducer: et,
        useRef: et,
        useState: et,
        useDebugValue: et,
        useDeferredValue: et,
        useTransition: et,
        useSyncExternalStore: et,
        useId: et,
        useHostTransitionStatus: et,
        useFormState: et,
        useActionState: et,
        useOptimistic: et,
        useMemoCache: et,
        useCacheRefresh: et
    };
    wl.useEffectEvent = et;
    var Yp = {
        readContext: xt,
        use: ao,
        useCallback: function (e, n) {
            return It().memoizedState = [e, n === void 0 ? null : n],
                e
        },
        useContext: xt,
        useEffect: Ap,
        useImperativeHandle: function (e, n, a) {
            a = a != null ? a.concat([e]) : null,
                ro(4194308, 4, Mp.bind(null, n, e), a)
        },
        useLayoutEffect: function (e, n) {
            return ro(4194308, 4, e, n)
        },
        useInsertionEffect: function (e, n) {
            ro(4, 2, e, n)
        },
        useMemo: function (e, n) {
            var a = It();
            n = n === void 0 ? null : n;
            var r = e();
            if (xs) {
                Ye(!0);
                try {
                    e()
                } finally {
                    Ye(!1)
                }
            }
            return a.memoizedState = [r, n],
                r
        },
        useReducer: function (e, n, a) {
            var r = It();
            if (a !== void 0) {
                var c = a(n);
                if (xs) {
                    Ye(!0);
                    try {
                        a(n)
                    } finally {
                        Ye(!1)
                    }
                }
            } else
                c = n;
            return r.memoizedState = r.baseState = c,
                e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: c
                },
                r.queue = e,
                e = e.dispatch = nb.bind(null, me, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var n = It();
            return e = {
                current: e
            },
                n.memoizedState = e
        },
        useState: function (e) {
            e = Ku(e);
            var n = e.queue
                , a = Vp.bind(null, me, n);
            return n.dispatch = a,
                [e.memoizedState, a]
        },
        useDebugValue: Zu,
        useDeferredValue: function (e, n) {
            var a = It();
            return Ju(a, e, n)
        },
        useTransition: function () {
            var e = Ku(!1);
            return e = zp.bind(null, me, e.queue, !0, !1),
                It().memoizedState = e,
                [!1, e]
        },
        useSyncExternalStore: function (e, n, a) {
            var r = me
                , c = It();
            if (xe) {
                if (a === void 0)
                    throw Error(l(407));
                a = a()
            } else {
                if (a = n(),
                    Pe === null)
                    throw Error(l(349));
                (Ce & 127) !== 0 || dp(r, n, a)
            }
            c.memoizedState = a;
            var f = {
                value: a,
                getSnapshot: n
            };
            return c.queue = f,
                Ap(pp.bind(null, r, f, e), [e]),
                r.flags |= 2048,
                ma(9, {
                    destroy: void 0
                }, mp.bind(null, r, f, a, n), null),
                a
        },
        useId: function () {
            var e = It()
                , n = Pe.identifierPrefix;
            if (xe) {
                var a = On
                    , r = Dn;
                a = (r & ~(1 << 32 - st(r) - 1)).toString(32) + a,
                    n = "_" + n + "R_" + a,
                    a = io++,
                    0 < a && (n += "H" + a.toString(32)),
                    n += "_"
            } else
                a = X0++,
                    n = "_" + n + "r_" + a.toString(32) + "_";
            return e.memoizedState = n
        },
        useHostTransitionStatus: ef,
        useFormState: Tp,
        useActionState: Tp,
        useOptimistic: function (e) {
            var n = It();
            n.memoizedState = n.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return n.queue = a,
                n = tf.bind(null, me, !0, a),
                a.dispatch = n,
                [e, n]
        },
        useMemoCache: Fu,
        useCacheRefresh: function () {
            return It().memoizedState = tb.bind(null, me)
        },
        useEffectEvent: function (e) {
            var n = It()
                , a = {
                    impl: e
                };
            return n.memoizedState = a,
                function () {
                    if ((Me & 2) !== 0)
                        throw Error(l(440));
                    return a.impl.apply(void 0, arguments)
                }
        }
    }
        , nf = {
            readContext: xt,
            use: ao,
            useCallback: Lp,
            useContext: xt,
            useEffect: Wu,
            useImperativeHandle: kp,
            useInsertionEffect: Op,
            useLayoutEffect: Ip,
            useMemo: Up,
            useReducer: lo,
            useRef: Np,
            useState: function () {
                return lo(Xn)
            },
            useDebugValue: Zu,
            useDeferredValue: function (e, n) {
                var a = lt();
                return jp(a, je.memoizedState, e, n)
            },
            useTransition: function () {
                var e = lo(Xn)[0]
                    , n = lt().memoizedState;
                return [typeof e == "boolean" ? e : Tl(e), n]
            },
            useSyncExternalStore: hp,
            useId: Pp,
            useHostTransitionStatus: ef,
            useFormState: xp,
            useActionState: xp,
            useOptimistic: function (e, n) {
                var a = lt();
                return yp(a, je, e, n)
            },
            useMemoCache: Fu,
            useCacheRefresh: qp
        };
    nf.useEffectEvent = Dp;
    var Qp = {
        readContext: xt,
        use: ao,
        useCallback: Lp,
        useContext: xt,
        useEffect: Wu,
        useImperativeHandle: kp,
        useInsertionEffect: Op,
        useLayoutEffect: Ip,
        useMemo: Up,
        useReducer: Qu,
        useRef: Np,
        useState: function () {
            return Qu(Xn)
        },
        useDebugValue: Zu,
        useDeferredValue: function (e, n) {
            var a = lt();
            return je === null ? Ju(a, e, n) : jp(a, je.memoizedState, e, n)
        },
        useTransition: function () {
            var e = Qu(Xn)[0]
                , n = lt().memoizedState;
            return [typeof e == "boolean" ? e : Tl(e), n]
        },
        useSyncExternalStore: hp,
        useId: Pp,
        useHostTransitionStatus: ef,
        useFormState: Rp,
        useActionState: Rp,
        useOptimistic: function (e, n) {
            var a = lt();
            return je !== null ? yp(a, je, e, n) : (a.baseState = e,
                [e, a.queue.dispatch])
        },
        useMemoCache: Fu,
        useCacheRefresh: qp
    };
    Qp.useEffectEvent = Dp;
    function sf(e, n, a, r) {
        n = e.memoizedState,
            a = a(r, n),
            a = a == null ? n : v({}, n, a),
            e.memoizedState = a,
            e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var af = {
        enqueueSetState: function (e, n, a) {
            e = e._reactInternals;
            var r = Jt()
                , c = Ni(r);
            c.payload = n,
                a != null && (c.callback = a),
                n = Ai(e, c, r),
                n !== null && (Pt(n, e, r),
                    Sl(n, e, r))
        },
        enqueueReplaceState: function (e, n, a) {
            e = e._reactInternals;
            var r = Jt()
                , c = Ni(r);
            c.tag = 1,
                c.payload = n,
                a != null && (c.callback = a),
                n = Ai(e, c, r),
                n !== null && (Pt(n, e, r),
                    Sl(n, e, r))
        },
        enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var a = Jt()
                , r = Ni(a);
            r.tag = 2,
                n != null && (r.callback = n),
                n = Ai(e, r, a),
                n !== null && (Pt(n, e, a),
                    Sl(n, e, a))
        }
    };
    function Kp(e, n, a, r, c, f, m) {
        return e = e.stateNode,
            typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, f, m) : n.prototype && n.prototype.isPureReactComponent ? !hl(a, r) || !hl(c, f) : !0
    }
    function Xp(e, n, a, r) {
        e = n.state,
            typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, r),
            typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, r),
            n.state !== e && af.enqueueReplaceState(n, n.state, null)
    }
    function ws(e, n) {
        var a = n;
        if ("ref" in n) {
            a = {};
            for (var r in n)
                r !== "ref" && (a[r] = n[r])
        }
        if (e = e.defaultProps) {
            a === n && (a = v({}, a));
            for (var c in e)
                a[c] === void 0 && (a[c] = e[c])
        }
        return a
    }
    function Wp(e) {
        Pr(e)
    }
    function Zp(e) {
        console.error(e)
    }
    function Jp(e) {
        Pr(e)
    }
    function uo(e, n) {
        try {
            var a = e.onUncaughtError;
            a(n.value, {
                componentStack: n.stack
            })
        } catch (r) {
            setTimeout(function () {
                throw r
            })
        }
    }
    function $p(e, n, a) {
        try {
            var r = e.onCaughtError;
            r(a.value, {
                componentStack: a.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (c) {
            setTimeout(function () {
                throw c
            })
        }
    }
    function lf(e, n, a) {
        return a = Ni(a),
            a.tag = 3,
            a.payload = {
                element: null
            },
            a.callback = function () {
                uo(e, n)
            }
            ,
            a
    }
    function eg(e) {
        return e = Ni(e),
            e.tag = 3,
            e
    }
    function tg(e, n, a, r) {
        var c = a.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = r.value;
            e.payload = function () {
                return c(f)
            }
                ,
                e.callback = function () {
                    $p(n, a, r)
                }
        }
        var m = a.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (e.callback = function () {
            $p(n, a, r),
                typeof c != "function" && (Li === null ? Li = new Set([this]) : Li.add(this));
            var y = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: y !== null ? y : ""
            })
        }
        )
    }
    function ib(e, n, a, r, c) {
        if (a.flags |= 32768,
            r !== null && typeof r == "object" && typeof r.then == "function") {
            if (n = a.alternate,
                n !== null && la(n, a, c, !0),
                a = Kt.current,
                a !== null) {
                switch (a.tag) {
                    case 31:
                    case 13:
                        return un === null ? Co() : a.alternate === null && tt === 0 && (tt = 3),
                            a.flags &= -257,
                            a.flags |= 65536,
                            a.lanes = c,
                            r === Zr ? a.flags |= 16384 : (n = a.updateQueue,
                                n === null ? a.updateQueue = new Set([r]) : n.add(r),
                                Of(e, r, c)),
                            !1;
                    case 22:
                        return a.flags |= 65536,
                            r === Zr ? a.flags |= 16384 : (n = a.updateQueue,
                                n === null ? (n = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r])
                                },
                                    a.updateQueue = n) : (a = n.retryQueue,
                                        a === null ? n.retryQueue = new Set([r]) : a.add(r)),
                                Of(e, r, c)),
                            !1
                }
                throw Error(l(435, a.tag))
            }
            return Of(e, r, c),
                Co(),
                !1
        }
        if (xe)
            return n = Kt.current,
                n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256),
                    n.flags |= 65536,
                    n.lanes = c,
                    r !== Tu && (e = Error(l(422), {
                        cause: r
                    }),
                        pl(ln(e, a)))) : (r !== Tu && (n = Error(l(423), {
                            cause: r
                        }),
                            pl(ln(n, a))),
                            e = e.current.alternate,
                            e.flags |= 65536,
                            c &= -c,
                            e.lanes |= c,
                            r = ln(r, a),
                            c = lf(e.stateNode, r, c),
                            Lu(e, c),
                            tt !== 4 && (tt = 2)),
                !1;
        var f = Error(l(520), {
            cause: r
        });
        if (f = ln(f, a),
            kl === null ? kl = [f] : kl.push(f),
            tt !== 4 && (tt = 2),
            n === null)
            return !0;
        r = ln(r, a),
            a = n;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536,
                        e = c & -c,
                        a.lanes |= e,
                        e = lf(a.stateNode, r, e),
                        Lu(a, e),
                        !1;
                case 1:
                    if (n = a.type,
                        f = a.stateNode,
                        (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Li === null || !Li.has(f))))
                        return a.flags |= 65536,
                            c &= -c,
                            a.lanes |= c,
                            c = eg(c),
                            tg(c, e, a, r),
                            Lu(a, c),
                            !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var rf = Error(l(461))
        , ut = !1;
    function wt(e, n, a, r) {
        n.child = e === null ? ap(n, null, a, r) : Ts(n, e.child, a, r)
    }
    function ng(e, n, a, r, c) {
        a = a.render;
        var f = n.ref;
        if ("ref" in r) {
            var m = {};
            for (var y in r)
                y !== "ref" && (m[y] = r[y])
        } else
            m = r;
        return Ss(n),
            r = Pu(e, n, a, m, f, c),
            y = qu(),
            e !== null && !ut ? (Vu(e, n, c),
                Wn(e, n, c)) : (xe && y && bu(n),
                    n.flags |= 1,
                    wt(e, n, r, c),
                    n.child)
    }
    function ig(e, n, a, r, c) {
        if (e === null) {
            var f = a.type;
            return typeof f == "function" && !vu(f) && f.defaultProps === void 0 && a.compare === null ? (n.tag = 15,
                n.type = f,
                sg(e, n, f, r, c)) : (e = Fr(a.type, null, r, n, n.mode, c),
                    e.ref = n.ref,
                    e.return = n,
                    n.child = e)
        }
        if (f = e.child,
            !pf(e, c)) {
            var m = f.memoizedProps;
            if (a = a.compare,
                a = a !== null ? a : hl,
                a(m, r) && e.ref === n.ref)
                return Wn(e, n, c)
        }
        return n.flags |= 1,
            e = Gn(f, r),
            e.ref = n.ref,
            e.return = n,
            n.child = e
    }
    function sg(e, n, a, r, c) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (hl(f, r) && e.ref === n.ref)
                if (ut = !1,
                    n.pendingProps = r = f,
                    pf(e, c))
                    (e.flags & 131072) !== 0 && (ut = !0);
                else
                    return n.lanes = e.lanes,
                        Wn(e, n, c)
        }
        return of(e, n, a, r, c)
    }
    function ag(e, n, a, r) {
        var c = r.children
            , f = e !== null ? e.memoizedState : null;
        if (e === null && n.stateNode === null && (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
            r.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (f = f !== null ? f.baseLanes | a : a,
                    e !== null) {
                    for (r = n.child = e.child,
                        c = 0; r !== null;)
                        c = c | r.lanes | r.childLanes,
                            r = r.sibling;
                    r = c & ~f
                } else
                    r = 0,
                        n.child = null;
                return lg(e, n, f, a, r)
            }
            if ((a & 536870912) !== 0)
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                    e !== null && Xr(n, f !== null ? f.cachePool : null),
                    f !== null ? op(n, f) : ju(),
                    cp(n);
            else
                return r = n.lanes = 536870912,
                    lg(e, n, f !== null ? f.baseLanes | a : a, a, r)
        } else
            f !== null ? (Xr(n, f.cachePool),
                op(n, f),
                Oi(),
                n.memoizedState = null) : (e !== null && Xr(n, null),
                    ju(),
                    Oi());
        return wt(e, n, c, a),
            n.child
    }
    function Rl(e, n) {
        return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
            n.sibling
    }
    function lg(e, n, a, r, c) {
        var f = Ou();
        return f = f === null ? null : {
            parent: ot._currentValue,
            pool: f
        },
            n.memoizedState = {
                baseLanes: a,
                cachePool: f
            },
            e !== null && Xr(n, null),
            ju(),
            cp(n),
            e !== null && la(e, n, r, !0),
            n.childLanes = c,
            null
    }
    function fo(e, n) {
        return n = mo({
            mode: n.mode,
            children: n.children
        }, e.mode),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            n
    }
    function rg(e, n, a) {
        return Ts(n, e.child, null, a),
            e = fo(n, n.pendingProps),
            e.flags |= 2,
            Xt(n),
            n.memoizedState = null,
            e
    }
    function sb(e, n, a) {
        var r = n.pendingProps
            , c = (n.flags & 128) !== 0;
        if (n.flags &= -129,
            e === null) {
            if (xe) {
                if (r.mode === "hidden")
                    return e = fo(n, r),
                        n.lanes = 536870912,
                        Rl(null, e);
                if (Hu(n),
                    (e = Qe) ? (e = v_(e, cn),
                        e = e !== null && e.data === "&" ? e : null,
                        e !== null && (n.memoizedState = {
                            dehydrated: e,
                            treeContext: Ci !== null ? {
                                id: Dn,
                                overflow: On
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                            a = Gm(e),
                            a.return = n,
                            n.child = a,
                            Tt = n,
                            Qe = null)) : e = null,
                    e === null)
                    throw xi(n);
                return n.lanes = 536870912,
                    null
            }
            return fo(n, r)
        }
        var f = e.memoizedState;
        if (f !== null) {
            var m = f.dehydrated;
            if (Hu(n),
                c)
                if (n.flags & 256)
                    n.flags &= -257,
                        n = rg(e, n, a);
                else if (n.memoizedState !== null)
                    n.child = e.child,
                        n.flags |= 128,
                        n = null;
                else
                    throw Error(l(558));
            else if (ut || la(e, n, a, !1),
                c = (a & e.childLanes) !== 0,
                ut || c) {
                if (r = Pe,
                    r !== null && (m = Zd(r, a),
                        m !== 0 && m !== f.retryLane))
                    throw f.retryLane = m,
                    gs(e, m),
                    Pt(r, e, m),
                    rf;
                Co(),
                    n = rg(e, n, a)
            } else
                e = f.treeContext,
                    Qe = fn(m.nextSibling),
                    Tt = n,
                    xe = !0,
                    Ti = null,
                    cn = !1,
                    e !== null && Qm(n, e),
                    n = fo(n, r),
                    n.flags |= 4096;
            return n
        }
        return e = Gn(e.child, {
            mode: r.mode,
            children: r.children
        }),
            e.ref = n.ref,
            n.child = e,
            e.return = n,
            e
    }
    function ho(e, n) {
        var a = n.ref;
        if (a === null)
            e !== null && e.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(l(284));
            (e === null || e.ref !== a) && (n.flags |= 4194816)
        }
    }
    function of(e, n, a, r, c) {
        return Ss(n),
            a = Pu(e, n, a, r, void 0, c),
            r = qu(),
            e !== null && !ut ? (Vu(e, n, c),
                Wn(e, n, c)) : (xe && r && bu(n),
                    n.flags |= 1,
                    wt(e, n, a, c),
                    n.child)
    }
    function og(e, n, a, r, c, f) {
        return Ss(n),
            n.updateQueue = null,
            a = fp(n, r, a, c),
            up(e),
            r = qu(),
            e !== null && !ut ? (Vu(e, n, f),
                Wn(e, n, f)) : (xe && r && bu(n),
                    n.flags |= 1,
                    wt(e, n, a, f),
                    n.child)
    }
    function cg(e, n, a, r, c) {
        if (Ss(n),
            n.stateNode === null) {
            var f = na
                , m = a.contextType;
            typeof m == "object" && m !== null && (f = xt(m)),
                f = new a(r, f),
                n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
                f.updater = af,
                n.stateNode = f,
                f._reactInternals = n,
                f = n.stateNode,
                f.props = r,
                f.state = n.memoizedState,
                f.refs = {},
                Mu(n),
                m = a.contextType,
                f.context = typeof m == "object" && m !== null ? xt(m) : na,
                f.state = n.memoizedState,
                m = a.getDerivedStateFromProps,
                typeof m == "function" && (sf(n, a, m, r),
                    f.state = n.memoizedState),
                typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (m = f.state,
                    typeof f.componentWillMount == "function" && f.componentWillMount(),
                    typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
                    m !== f.state && af.enqueueReplaceState(f, f.state, null),
                    bl(n, r, f, c),
                    El(),
                    f.state = n.memoizedState),
                typeof f.componentDidMount == "function" && (n.flags |= 4194308),
                r = !0
        } else if (e === null) {
            f = n.stateNode;
            var y = n.memoizedProps
                , b = ws(a, y);
            f.props = b;
            var N = f.context
                , L = a.contextType;
            m = na,
                typeof L == "object" && L !== null && (m = xt(L));
            var H = a.getDerivedStateFromProps;
            L = typeof H == "function" || typeof f.getSnapshotBeforeUpdate == "function",
                y = n.pendingProps !== y,
                L || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y || N !== m) && Xp(n, f, r, m),
                Ri = !1;
            var A = n.memoizedState;
            f.state = A,
                bl(n, r, f, c),
                El(),
                N = n.memoizedState,
                y || A !== N || Ri ? (typeof H == "function" && (sf(n, a, H, r),
                    N = n.memoizedState),
                    (b = Ri || Kp(n, a, b, r, A, N, m)) ? (L || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
                        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
                        typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
                            n.memoizedProps = r,
                            n.memoizedState = N),
                    f.props = r,
                    f.state = N,
                    f.context = m,
                    r = b) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
                        r = !1)
        } else {
            f = n.stateNode,
                ku(e, n),
                m = n.memoizedProps,
                L = ws(a, m),
                f.props = L,
                H = n.pendingProps,
                A = f.context,
                N = a.contextType,
                b = na,
                typeof N == "object" && N !== null && (b = xt(N)),
                y = a.getDerivedStateFromProps,
                (N = typeof y == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (m !== H || A !== b) && Xp(n, f, r, b),
                Ri = !1,
                A = n.memoizedState,
                f.state = A,
                bl(n, r, f, c),
                El();
            var O = n.memoizedState;
            m !== H || A !== O || Ri || e !== null && e.dependencies !== null && Qr(e.dependencies) ? (typeof y == "function" && (sf(n, a, y, r),
                O = n.memoizedState),
                (L = Ri || Kp(n, a, L, r, A, O, b) || e !== null && e.dependencies !== null && Qr(e.dependencies)) ? (N || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, O, b),
                    typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, O, b)),
                    typeof f.componentDidUpdate == "function" && (n.flags |= 4),
                    typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && A === e.memoizedState || (n.flags |= 4),
                        typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && A === e.memoizedState || (n.flags |= 1024),
                        n.memoizedProps = r,
                        n.memoizedState = O),
                f.props = r,
                f.state = O,
                f.context = b,
                r = L) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && A === e.memoizedState || (n.flags |= 4),
                    typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && A === e.memoizedState || (n.flags |= 1024),
                    r = !1)
        }
        return f = r,
            ho(e, n),
            r = (n.flags & 128) !== 0,
            f || r ? (f = n.stateNode,
                a = r && typeof a.getDerivedStateFromError != "function" ? null : f.render(),
                n.flags |= 1,
                e !== null && r ? (n.child = Ts(n, e.child, null, c),
                    n.child = Ts(n, null, a, c)) : wt(e, n, a, c),
                n.memoizedState = f.state,
                e = n.child) : e = Wn(e, n, c),
            e
    }
    function ug(e, n, a, r) {
        return ys(),
            n.flags |= 256,
            wt(e, n, a, r),
            n.child
    }
    var cf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function uf(e) {
        return {
            baseLanes: e,
            cachePool: $m()
        }
    }
    function ff(e, n, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
            n && (e |= Zt),
            e
    }
    function fg(e, n, a) {
        var r = n.pendingProps, c = !1, f = (n.flags & 128) !== 0, m;
        if ((m = f) || (m = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0),
            m && (c = !0,
                n.flags &= -129),
            m = (n.flags & 32) !== 0,
            n.flags &= -33,
            e === null) {
            if (xe) {
                if (c ? Di(n) : Oi(),
                    (e = Qe) ? (e = v_(e, cn),
                        e = e !== null && e.data !== "&" ? e : null,
                        e !== null && (n.memoizedState = {
                            dehydrated: e,
                            treeContext: Ci !== null ? {
                                id: Dn,
                                overflow: On
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                            a = Gm(e),
                            a.return = n,
                            n.child = a,
                            Tt = n,
                            Qe = null)) : e = null,
                    e === null)
                    throw xi(n);
                return Qf(e) ? n.lanes = 32 : n.lanes = 536870912,
                    null
            }
            var y = r.children;
            return r = r.fallback,
                c ? (Oi(),
                    c = n.mode,
                    y = mo({
                        mode: "hidden",
                        children: y
                    }, c),
                    r = _s(r, c, a, null),
                    y.return = n,
                    r.return = n,
                    y.sibling = r,
                    n.child = y,
                    r = n.child,
                    r.memoizedState = uf(a),
                    r.childLanes = ff(e, m, a),
                    n.memoizedState = cf,
                    Rl(null, r)) : (Di(n),
                        hf(n, y))
        }
        var b = e.memoizedState;
        if (b !== null && (y = b.dehydrated,
            y !== null)) {
            if (f)
                n.flags & 256 ? (Di(n),
                    n.flags &= -257,
                    n = df(e, n, a)) : n.memoizedState !== null ? (Oi(),
                        n.child = e.child,
                        n.flags |= 128,
                        n = null) : (Oi(),
                            y = r.fallback,
                            c = n.mode,
                            r = mo({
                                mode: "visible",
                                children: r.children
                            }, c),
                            y = _s(y, c, a, null),
                            y.flags |= 2,
                            r.return = n,
                            y.return = n,
                            r.sibling = y,
                            n.child = r,
                            Ts(n, e.child, null, a),
                            r = n.child,
                            r.memoizedState = uf(a),
                            r.childLanes = ff(e, m, a),
                            n.memoizedState = cf,
                            n = Rl(null, r));
            else if (Di(n),
                Qf(y)) {
                if (m = y.nextSibling && y.nextSibling.dataset,
                    m)
                    var N = m.dgst;
                m = N,
                    r = Error(l(419)),
                    r.stack = "",
                    r.digest = m,
                    pl({
                        value: r,
                        source: null,
                        stack: null
                    }),
                    n = df(e, n, a)
            } else if (ut || la(e, n, a, !1),
                m = (a & e.childLanes) !== 0,
                ut || m) {
                if (m = Pe,
                    m !== null && (r = Zd(m, a),
                        r !== 0 && r !== b.retryLane))
                    throw b.retryLane = r,
                    gs(e, r),
                    Pt(m, e, r),
                    rf;
                Yf(y) || Co(),
                    n = df(e, n, a)
            } else
                Yf(y) ? (n.flags |= 192,
                    n.child = e.child,
                    n = null) : (e = b.treeContext,
                        Qe = fn(y.nextSibling),
                        Tt = n,
                        xe = !0,
                        Ti = null,
                        cn = !1,
                        e !== null && Qm(n, e),
                        n = hf(n, r.children),
                        n.flags |= 4096);
            return n
        }
        return c ? (Oi(),
            y = r.fallback,
            c = n.mode,
            b = e.child,
            N = b.sibling,
            r = Gn(b, {
                mode: "hidden",
                children: r.children
            }),
            r.subtreeFlags = b.subtreeFlags & 65011712,
            N !== null ? y = Gn(N, y) : (y = _s(y, c, a, null),
                y.flags |= 2),
            y.return = n,
            r.return = n,
            r.sibling = y,
            n.child = r,
            Rl(null, r),
            r = n.child,
            y = e.child.memoizedState,
            y === null ? y = uf(a) : (c = y.cachePool,
                c !== null ? (b = ot._currentValue,
                    c = c.parent !== b ? {
                        parent: b,
                        pool: b
                    } : c) : c = $m(),
                y = {
                    baseLanes: y.baseLanes | a,
                    cachePool: c
                }),
            r.memoizedState = y,
            r.childLanes = ff(e, m, a),
            n.memoizedState = cf,
            Rl(e.child, r)) : (Di(n),
                a = e.child,
                e = a.sibling,
                a = Gn(a, {
                    mode: "visible",
                    children: r.children
                }),
                a.return = n,
                a.sibling = null,
                e !== null && (m = n.deletions,
                    m === null ? (n.deletions = [e],
                        n.flags |= 16) : m.push(e)),
                n.child = a,
                n.memoizedState = null,
                a)
    }
    function hf(e, n) {
        return n = mo({
            mode: "visible",
            children: n
        }, e.mode),
            n.return = e,
            e.child = n
    }
    function mo(e, n) {
        return e = Qt(22, e, null, n),
            e.lanes = 0,
            e
    }
    function df(e, n, a) {
        return Ts(n, e.child, null, a),
            e = hf(n, n.pendingProps.children),
            e.flags |= 2,
            n.memoizedState = null,
            e
    }
    function hg(e, n, a) {
        e.lanes |= n;
        var r = e.alternate;
        r !== null && (r.lanes |= n),
            Ru(e.return, n, a)
    }
    function mf(e, n, a, r, c, f) {
        var m = e.memoizedState;
        m === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: a,
            tailMode: c,
            treeForkCount: f
        } : (m.isBackwards = n,
            m.rendering = null,
            m.renderingStartTime = 0,
            m.last = r,
            m.tail = a,
            m.tailMode = c,
            m.treeForkCount = f)
    }
    function dg(e, n, a) {
        var r = n.pendingProps
            , c = r.revealOrder
            , f = r.tail;
        r = r.children;
        var m = at.current
            , y = (m & 2) !== 0;
        if (y ? (m = m & 1 | 2,
            n.flags |= 128) : m &= 1,
            K(at, m),
            wt(e, n, r, a),
            r = xe ? ml : 0,
            !y && e !== null && (e.flags & 128) !== 0)
            e: for (e = n.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && hg(e, a, n);
                else if (e.tag === 19)
                    hg(e, a, n);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === n)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === n)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        switch (c) {
            case "forwards":
                for (a = n.child,
                    c = null; a !== null;)
                    e = a.alternate,
                        e !== null && to(e) === null && (c = a),
                        a = a.sibling;
                a = c,
                    a === null ? (c = n.child,
                        n.child = null) : (c = a.sibling,
                            a.sibling = null),
                    mf(n, !1, c, a, f, r);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (a = null,
                    c = n.child,
                    n.child = null; c !== null;) {
                    if (e = c.alternate,
                        e !== null && to(e) === null) {
                        n.child = c;
                        break
                    }
                    e = c.sibling,
                        c.sibling = a,
                        a = c,
                        c = e
                }
                mf(n, !0, a, null, f, r);
                break;
            case "together":
                mf(n, !1, null, null, void 0, r);
                break;
            default:
                n.memoizedState = null
        }
        return n.child
    }
    function Wn(e, n, a) {
        if (e !== null && (n.dependencies = e.dependencies),
            ki |= n.lanes,
            (a & n.childLanes) === 0)
            if (e !== null) {
                if (la(e, n, a, !1),
                    (a & n.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && n.child !== e.child)
            throw Error(l(153));
        if (n.child !== null) {
            for (e = n.child,
                a = Gn(e, e.pendingProps),
                n.child = a,
                a.return = n; e.sibling !== null;)
                e = e.sibling,
                    a = a.sibling = Gn(e, e.pendingProps),
                    a.return = n;
            a.sibling = null
        }
        return n.child
    }
    function pf(e, n) {
        return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies,
            !!(e !== null && Qr(e)))
    }
    function ab(e, n, a) {
        switch (n.tag) {
            case 3:
                it(n, n.stateNode.containerInfo),
                    wi(n, ot, e.memoizedState.cache),
                    ys();
                break;
            case 27:
            case 5:
                pn(n);
                break;
            case 4:
                it(n, n.stateNode.containerInfo);
                break;
            case 10:
                wi(n, n.type, n.memoizedProps.value);
                break;
            case 31:
                if (n.memoizedState !== null)
                    return n.flags |= 128,
                        Hu(n),
                        null;
                break;
            case 13:
                var r = n.memoizedState;
                if (r !== null)
                    return r.dehydrated !== null ? (Di(n),
                        n.flags |= 128,
                        null) : (a & n.child.childLanes) !== 0 ? fg(e, n, a) : (Di(n),
                            e = Wn(e, n, a),
                            e !== null ? e.sibling : null);
                Di(n);
                break;
            case 19:
                var c = (e.flags & 128) !== 0;
                if (r = (a & n.childLanes) !== 0,
                    r || (la(e, n, a, !1),
                        r = (a & n.childLanes) !== 0),
                    c) {
                    if (r)
                        return dg(e, n, a);
                    n.flags |= 128
                }
                if (c = n.memoizedState,
                    c !== null && (c.rendering = null,
                        c.tail = null,
                        c.lastEffect = null),
                    K(at, at.current),
                    r)
                    break;
                return null;
            case 22:
                return n.lanes = 0,
                    ag(e, n, a, n.pendingProps);
            case 24:
                wi(n, ot, e.memoizedState.cache)
        }
        return Wn(e, n, a)
    }
    function mg(e, n, a) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps)
                ut = !0;
            else {
                if (!pf(e, a) && (n.flags & 128) === 0)
                    return ut = !1,
                        ab(e, n, a);
                ut = (e.flags & 131072) !== 0
            }
        else
            ut = !1,
                xe && (n.flags & 1048576) !== 0 && Ym(n, ml, n.index);
        switch (n.lanes = 0,
        n.tag) {
            case 16:
                e: {
                    var r = n.pendingProps;
                    if (e = bs(n.elementType),
                        n.type = e,
                        typeof e == "function")
                        vu(e) ? (r = ws(e, r),
                            n.tag = 1,
                            n = cg(null, n, e, r, a)) : (n.tag = 0,
                                n = of(null, n, e, r, a));
                    else {
                        if (e != null) {
                            var c = e.$$typeof;
                            if (c === re) {
                                n.tag = 11,
                                    n = ng(null, n, e, r, a);
                                break e
                            } else if (c === J) {
                                n.tag = 14,
                                    n = ig(null, n, e, r, a);
                                break e
                            }
                        }
                        throw n = se(e) || e,
                        Error(l(306, n, ""))
                    }
                }
                return n;
            case 0:
                return of(e, n, n.type, n.pendingProps, a);
            case 1:
                return r = n.type,
                    c = ws(r, n.pendingProps),
                    cg(e, n, r, c, a);
            case 3:
                e: {
                    if (it(n, n.stateNode.containerInfo),
                        e === null)
                        throw Error(l(387));
                    r = n.pendingProps;
                    var f = n.memoizedState;
                    c = f.element,
                        ku(e, n),
                        bl(n, r, null, a);
                    var m = n.memoizedState;
                    if (r = m.cache,
                        wi(n, ot, r),
                        r !== f.cache && Nu(n, [ot], a, !0),
                        El(),
                        r = m.element,
                        f.isDehydrated)
                        if (f = {
                            element: r,
                            isDehydrated: !1,
                            cache: m.cache
                        },
                            n.updateQueue.baseState = f,
                            n.memoizedState = f,
                            n.flags & 256) {
                            n = ug(e, n, r, a);
                            break e
                        } else if (r !== c) {
                            c = ln(Error(l(424)), n),
                                pl(c),
                                n = ug(e, n, r, a);
                            break e
                        } else
                            for (e = n.stateNode.containerInfo,
                                e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                                Qe = fn(e.firstChild),
                                Tt = n,
                                xe = !0,
                                Ti = null,
                                cn = !0,
                                a = ap(n, null, r, a),
                                n.child = a; a;)
                                a.flags = a.flags & -3 | 4096,
                                    a = a.sibling;
                    else {
                        if (ys(),
                            r === c) {
                            n = Wn(e, n, a);
                            break e
                        }
                        wt(e, n, r, a)
                    }
                    n = n.child
                }
                return n;
            case 26:
                return ho(e, n),
                    e === null ? (a = x_(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : xe || (a = n.type,
                        e = n.pendingProps,
                        r = Do(he.current).createElement(a),
                        r[Ct] = n,
                        r[Lt] = e,
                        Rt(r, a, e),
                        _t(r),
                        n.stateNode = r) : n.memoizedState = x_(n.type, e.memoizedProps, n.pendingProps, e.memoizedState),
                    null;
            case 27:
                return pn(n),
                    e === null && xe && (r = n.stateNode = b_(n.type, n.pendingProps, he.current),
                        Tt = n,
                        cn = !0,
                        c = Qe,
                        Hi(n.type) ? (Kf = c,
                            Qe = fn(r.firstChild)) : Qe = c),
                    wt(e, n, n.pendingProps.children, a),
                    ho(e, n),
                    e === null && (n.flags |= 4194304),
                    n.child;
            case 5:
                return e === null && xe && ((c = r = Qe) && (r = Lb(r, n.type, n.pendingProps, cn),
                    r !== null ? (n.stateNode = r,
                        Tt = n,
                        Qe = fn(r.firstChild),
                        cn = !1,
                        c = !0) : c = !1),
                    c || xi(n)),
                    pn(n),
                    c = n.type,
                    f = n.pendingProps,
                    m = e !== null ? e.memoizedProps : null,
                    r = f.children,
                    Vf(c, f) ? r = null : m !== null && Vf(c, m) && (n.flags |= 32),
                    n.memoizedState !== null && (c = Pu(e, n, W0, null, null, a),
                        ql._currentValue = c),
                    ho(e, n),
                    wt(e, n, r, a),
                    n.child;
            case 6:
                return e === null && xe && ((e = a = Qe) && (a = Ub(a, n.pendingProps, cn),
                    a !== null ? (n.stateNode = a,
                        Tt = n,
                        Qe = null,
                        e = !0) : e = !1),
                    e || xi(n)),
                    null;
            case 13:
                return fg(e, n, a);
            case 4:
                return it(n, n.stateNode.containerInfo),
                    r = n.pendingProps,
                    e === null ? n.child = Ts(n, null, r, a) : wt(e, n, r, a),
                    n.child;
            case 11:
                return ng(e, n, n.type, n.pendingProps, a);
            case 7:
                return wt(e, n, n.pendingProps, a),
                    n.child;
            case 8:
                return wt(e, n, n.pendingProps.children, a),
                    n.child;
            case 12:
                return wt(e, n, n.pendingProps.children, a),
                    n.child;
            case 10:
                return r = n.pendingProps,
                    wi(n, n.type, r.value),
                    wt(e, n, r.children, a),
                    n.child;
            case 9:
                return c = n.type._context,
                    r = n.pendingProps.children,
                    Ss(n),
                    c = xt(c),
                    r = r(c),
                    n.flags |= 1,
                    wt(e, n, r, a),
                    n.child;
            case 14:
                return ig(e, n, n.type, n.pendingProps, a);
            case 15:
                return sg(e, n, n.type, n.pendingProps, a);
            case 19:
                return dg(e, n, a);
            case 31:
                return sb(e, n, a);
            case 22:
                return ag(e, n, a, n.pendingProps);
            case 24:
                return Ss(n),
                    r = xt(ot),
                    e === null ? (c = Ou(),
                        c === null && (c = Pe,
                            f = Au(),
                            c.pooledCache = f,
                            f.refCount++,
                            f !== null && (c.pooledCacheLanes |= a),
                            c = f),
                        n.memoizedState = {
                            parent: r,
                            cache: c
                        },
                        Mu(n),
                        wi(n, ot, c)) : ((e.lanes & a) !== 0 && (ku(e, n),
                            bl(n, null, null, a),
                            El()),
                            c = e.memoizedState,
                            f = n.memoizedState,
                            c.parent !== r ? (c = {
                                parent: r,
                                cache: r
                            },
                                n.memoizedState = c,
                                n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c),
                                wi(n, ot, r)) : (r = f.cache,
                                    wi(n, ot, r),
                                    r !== c.cache && Nu(n, [ot], a, !0))),
                    wt(e, n, n.pendingProps.children, a),
                    n.child;
            case 29:
                throw n.pendingProps
        }
        throw Error(l(156, n.tag))
    }
    function Zn(e) {
        e.flags |= 4
    }
    function gf(e, n, a, r, c) {
        if ((n = (e.mode & 32) !== 0) && (n = !1),
            n) {
            if (e.flags |= 16777216,
                (c & 335544128) === c)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Pg())
                    e.flags |= 8192;
                else
                    throw Cs = Zr,
                    Iu
        } else
            e.flags &= -16777217
    }
    function pg(e, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
            !D_(n))
            if (Pg())
                e.flags |= 8192;
            else
                throw Cs = Zr,
                Iu
    }
    function po(e, n) {
        n !== null && (e.flags |= 4),
            e.flags & 16384 && (n = e.tag !== 22 ? An() : 536870912,
                e.lanes |= n,
                ya |= n)
    }
    function Nl(e, n) {
        if (!xe)
            switch (e.tailMode) {
                case "hidden":
                    n = e.tail;
                    for (var a = null; n !== null;)
                        n.alternate !== null && (a = n),
                            n = n.sibling;
                    a === null ? e.tail = null : a.sibling = null;
                    break;
                case "collapsed":
                    a = e.tail;
                    for (var r = null; a !== null;)
                        a.alternate !== null && (r = a),
                            a = a.sibling;
                    r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function Ke(e) {
        var n = e.alternate !== null && e.alternate.child === e.child
            , a = 0
            , r = 0;
        if (n)
            for (var c = e.child; c !== null;)
                a |= c.lanes | c.childLanes,
                    r |= c.subtreeFlags & 65011712,
                    r |= c.flags & 65011712,
                    c.return = e,
                    c = c.sibling;
        else
            for (c = e.child; c !== null;)
                a |= c.lanes | c.childLanes,
                    r |= c.subtreeFlags,
                    r |= c.flags,
                    c.return = e,
                    c = c.sibling;
        return e.subtreeFlags |= r,
            e.childLanes = a,
            n
    }
    function lb(e, n, a) {
        var r = n.pendingProps;
        switch (Cu(n),
        n.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ke(n),
                    null;
            case 1:
                return Ke(n),
                    null;
            case 3:
                return a = n.stateNode,
                    r = null,
                    e !== null && (r = e.memoizedState.cache),
                    n.memoizedState.cache !== r && (n.flags |= 2048),
                    Qn(ot),
                    Fe(),
                    a.pendingContext && (a.context = a.pendingContext,
                        a.pendingContext = null),
                    (e === null || e.child === null) && (aa(n) ? Zn(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
                        xu())),
                    Ke(n),
                    null;
            case 26:
                var c = n.type
                    , f = n.memoizedState;
                return e === null ? (Zn(n),
                    f !== null ? (Ke(n),
                        pg(n, f)) : (Ke(n),
                            gf(n, c, null, r, a))) : f ? f !== e.memoizedState ? (Zn(n),
                                Ke(n),
                                pg(n, f)) : (Ke(n),
                                    n.flags &= -16777217) : (e = e.memoizedProps,
                                        e !== r && Zn(n),
                                        Ke(n),
                                        gf(n, c, e, r, a)),
                    null;
            case 27:
                if (yi(n),
                    a = he.current,
                    c = n.type,
                    e !== null && n.stateNode != null)
                    e.memoizedProps !== r && Zn(n);
                else {
                    if (!r) {
                        if (n.stateNode === null)
                            throw Error(l(166));
                        return Ke(n),
                            null
                    }
                    e = X.current,
                        aa(n) ? Km(n) : (e = b_(c, r, a),
                            n.stateNode = e,
                            Zn(n))
                }
                return Ke(n),
                    null;
            case 5:
                if (yi(n),
                    c = n.type,
                    e !== null && n.stateNode != null)
                    e.memoizedProps !== r && Zn(n);
                else {
                    if (!r) {
                        if (n.stateNode === null)
                            throw Error(l(166));
                        return Ke(n),
                            null
                    }
                    if (f = X.current,
                        aa(n))
                        Km(n);
                    else {
                        var m = Do(he.current);
                        switch (f) {
                            case 1:
                                f = m.createElementNS("http://www.w3.org/2000/svg", c);
                                break;
                            case 2:
                                f = m.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                break;
                            default:
                                switch (c) {
                                    case "svg":
                                        f = m.createElementNS("http://www.w3.org/2000/svg", c);
                                        break;
                                    case "math":
                                        f = m.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                        break;
                                    case "script":
                                        f = m.createElement("div"),
                                            f.innerHTML = "<script><\/script>",
                                            f = f.removeChild(f.firstChild);
                                        break;
                                    case "select":
                                        f = typeof r.is == "string" ? m.createElement("select", {
                                            is: r.is
                                        }) : m.createElement("select"),
                                            r.multiple ? f.multiple = !0 : r.size && (f.size = r.size);
                                        break;
                                    default:
                                        f = typeof r.is == "string" ? m.createElement(c, {
                                            is: r.is
                                        }) : m.createElement(c)
                                }
                        }
                        f[Ct] = n,
                            f[Lt] = r;
                        e: for (m = n.child; m !== null;) {
                            if (m.tag === 5 || m.tag === 6)
                                f.appendChild(m.stateNode);
                            else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                                m.child.return = m,
                                    m = m.child;
                                continue
                            }
                            if (m === n)
                                break e;
                            for (; m.sibling === null;) {
                                if (m.return === null || m.return === n)
                                    break e;
                                m = m.return
                            }
                            m.sibling.return = m.return,
                                m = m.sibling
                        }
                        n.stateNode = f;
                        e: switch (Rt(f, c, r),
                        c) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                        r && Zn(n)
                    }
                }
                return Ke(n),
                    gf(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, a),
                    null;
            case 6:
                if (e && n.stateNode != null)
                    e.memoizedProps !== r && Zn(n);
                else {
                    if (typeof r != "string" && n.stateNode === null)
                        throw Error(l(166));
                    if (e = he.current,
                        aa(n)) {
                        if (e = n.stateNode,
                            a = n.memoizedProps,
                            r = null,
                            c = Tt,
                            c !== null)
                            switch (c.tag) {
                                case 27:
                                case 5:
                                    r = c.memoizedProps
                            }
                        e[Ct] = n,
                            e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || f_(e.nodeValue, a)),
                            e || xi(n, !0)
                    } else
                        e = Do(e).createTextNode(r),
                            e[Ct] = n,
                            n.stateNode = e
                }
                return Ke(n),
                    null;
            case 31:
                if (a = n.memoizedState,
                    e === null || e.memoizedState !== null) {
                    if (r = aa(n),
                        a !== null) {
                        if (e === null) {
                            if (!r)
                                throw Error(l(318));
                            if (e = n.memoizedState,
                                e = e !== null ? e.dehydrated : null,
                                !e)
                                throw Error(l(557));
                            e[Ct] = n
                        } else
                            ys(),
                                (n.flags & 128) === 0 && (n.memoizedState = null),
                                n.flags |= 4;
                        Ke(n),
                            e = !1
                    } else
                        a = xu(),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                            e = !0;
                    if (!e)
                        return n.flags & 256 ? (Xt(n),
                            n) : (Xt(n),
                                null);
                    if ((n.flags & 128) !== 0)
                        throw Error(l(558))
                }
                return Ke(n),
                    null;
            case 13:
                if (r = n.memoizedState,
                    e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (c = aa(n),
                        r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!c)
                                throw Error(l(318));
                            if (c = n.memoizedState,
                                c = c !== null ? c.dehydrated : null,
                                !c)
                                throw Error(l(317));
                            c[Ct] = n
                        } else
                            ys(),
                                (n.flags & 128) === 0 && (n.memoizedState = null),
                                n.flags |= 4;
                        Ke(n),
                            c = !1
                    } else
                        c = xu(),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
                            c = !0;
                    if (!c)
                        return n.flags & 256 ? (Xt(n),
                            n) : (Xt(n),
                                null)
                }
                return Xt(n),
                    (n.flags & 128) !== 0 ? (n.lanes = a,
                        n) : (a = r !== null,
                            e = e !== null && e.memoizedState !== null,
                            a && (r = n.child,
                                c = null,
                                r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (c = r.alternate.memoizedState.cachePool.pool),
                                f = null,
                                r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool),
                                f !== c && (r.flags |= 2048)),
                            a !== e && a && (n.child.flags |= 8192),
                            po(n, n.updateQueue),
                            Ke(n),
                            null);
            case 4:
                return Fe(),
                    e === null && zf(n.stateNode.containerInfo),
                    Ke(n),
                    null;
            case 10:
                return Qn(n.type),
                    Ke(n),
                    null;
            case 19:
                if (z(at),
                    r = n.memoizedState,
                    r === null)
                    return Ke(n),
                        null;
                if (c = (n.flags & 128) !== 0,
                    f = r.rendering,
                    f === null)
                    if (c)
                        Nl(r, !1);
                    else {
                        if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = n.child; e !== null;) {
                                if (f = to(e),
                                    f !== null) {
                                    for (n.flags |= 128,
                                        Nl(r, !1),
                                        e = f.updateQueue,
                                        n.updateQueue = e,
                                        po(n, e),
                                        n.subtreeFlags = 0,
                                        e = a,
                                        a = n.child; a !== null;)
                                        Vm(a, e),
                                            a = a.sibling;
                                    return K(at, at.current & 1 | 2),
                                        xe && Fn(n, r.treeForkCount),
                                        n.child
                                }
                                e = e.sibling
                            }
                        r.tail !== null && bt() > So && (n.flags |= 128,
                            c = !0,
                            Nl(r, !1),
                            n.lanes = 4194304)
                    }
                else {
                    if (!c)
                        if (e = to(f),
                            e !== null) {
                            if (n.flags |= 128,
                                c = !0,
                                e = e.updateQueue,
                                n.updateQueue = e,
                                po(n, e),
                                Nl(r, !0),
                                r.tail === null && r.tailMode === "hidden" && !f.alternate && !xe)
                                return Ke(n),
                                    null
                        } else
                            2 * bt() - r.renderingStartTime > So && a !== 536870912 && (n.flags |= 128,
                                c = !0,
                                Nl(r, !1),
                                n.lanes = 4194304);
                    r.isBackwards ? (f.sibling = n.child,
                        n.child = f) : (e = r.last,
                            e !== null ? e.sibling = f : n.child = f,
                            r.last = f)
                }
                return r.tail !== null ? (e = r.tail,
                    r.rendering = e,
                    r.tail = e.sibling,
                    r.renderingStartTime = bt(),
                    e.sibling = null,
                    a = at.current,
                    K(at, c ? a & 1 | 2 : a & 1),
                    xe && Fn(n, r.treeForkCount),
                    e) : (Ke(n),
                        null);
            case 22:
            case 23:
                return Xt(n),
                    zu(),
                    r = n.memoizedState !== null,
                    e !== null ? e.memoizedState !== null !== r && (n.flags |= 8192) : r && (n.flags |= 8192),
                    r ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (Ke(n),
                        n.subtreeFlags & 6 && (n.flags |= 8192)) : Ke(n),
                    a = n.updateQueue,
                    a !== null && po(n, a.retryQueue),
                    a = null,
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
                    r = null,
                    n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool),
                    r !== a && (n.flags |= 2048),
                    e !== null && z(Es),
                    null;
            case 24:
                return a = null,
                    e !== null && (a = e.memoizedState.cache),
                    n.memoizedState.cache !== a && (n.flags |= 2048),
                    Qn(ot),
                    Ke(n),
                    null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(l(156, n.tag))
    }
    function rb(e, n) {
        switch (Cu(n),
        n.tag) {
            case 1:
                return e = n.flags,
                    e & 65536 ? (n.flags = e & -65537 | 128,
                        n) : null;
            case 3:
                return Qn(ot),
                    Fe(),
                    e = n.flags,
                    (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128,
                        n) : null;
            case 26:
            case 27:
            case 5:
                return yi(n),
                    null;
            case 31:
                if (n.memoizedState !== null) {
                    if (Xt(n),
                        n.alternate === null)
                        throw Error(l(340));
                    ys()
                }
                return e = n.flags,
                    e & 65536 ? (n.flags = e & -65537 | 128,
                        n) : null;
            case 13:
                if (Xt(n),
                    e = n.memoizedState,
                    e !== null && e.dehydrated !== null) {
                    if (n.alternate === null)
                        throw Error(l(340));
                    ys()
                }
                return e = n.flags,
                    e & 65536 ? (n.flags = e & -65537 | 128,
                        n) : null;
            case 19:
                return z(at),
                    null;
            case 4:
                return Fe(),
                    null;
            case 10:
                return Qn(n.type),
                    null;
            case 22:
            case 23:
                return Xt(n),
                    zu(),
                    e !== null && z(Es),
                    e = n.flags,
                    e & 65536 ? (n.flags = e & -65537 | 128,
                        n) : null;
            case 24:
                return Qn(ot),
                    null;
            case 25:
                return null;
            default:
                return null
        }
    }
    function gg(e, n) {
        switch (Cu(n),
        n.tag) {
            case 3:
                Qn(ot),
                    Fe();
                break;
            case 26:
            case 27:
            case 5:
                yi(n);
                break;
            case 4:
                Fe();
                break;
            case 31:
                n.memoizedState !== null && Xt(n);
                break;
            case 13:
                Xt(n);
                break;
            case 19:
                z(at);
                break;
            case 10:
                Qn(n.type);
                break;
            case 22:
            case 23:
                Xt(n),
                    zu(),
                    e !== null && z(Es);
                break;
            case 24:
                Qn(ot)
        }
    }
    function Al(e, n) {
        try {
            var a = n.updateQueue
                , r = a !== null ? a.lastEffect : null;
            if (r !== null) {
                var c = r.next;
                a = c;
                do {
                    if ((a.tag & e) === e) {
                        r = void 0;
                        var f = a.create
                            , m = a.inst;
                        r = f(),
                            m.destroy = r
                    }
                    a = a.next
                } while (a !== c)
            }
        } catch (y) {
            Ue(n, n.return, y)
        }
    }
    function Ii(e, n, a) {
        try {
            var r = n.updateQueue
                , c = r !== null ? r.lastEffect : null;
            if (c !== null) {
                var f = c.next;
                r = f;
                do {
                    if ((r.tag & e) === e) {
                        var m = r.inst
                            , y = m.destroy;
                        if (y !== void 0) {
                            m.destroy = void 0,
                                c = n;
                            var b = a
                                , N = y;
                            try {
                                N()
                            } catch (L) {
                                Ue(c, b, L)
                            }
                        }
                    }
                    r = r.next
                } while (r !== f)
            }
        } catch (L) {
            Ue(n, n.return, L)
        }
    }
    function _g(e) {
        var n = e.updateQueue;
        if (n !== null) {
            var a = e.stateNode;
            try {
                rp(n, a)
            } catch (r) {
                Ue(e, e.return, r)
            }
        }
    }
    function yg(e, n, a) {
        a.props = ws(e.type, e.memoizedProps),
            a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (r) {
            Ue(e, n, r)
        }
    }
    function Dl(e, n) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    case 30:
                        r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(r) : a.current = r
            }
        } catch (c) {
            Ue(e, n, c)
        }
    }
    function In(e, n) {
        var a = e.ref
            , r = e.refCleanup;
        if (a !== null)
            if (typeof r == "function")
                try {
                    r()
                } catch (c) {
                    Ue(e, n, c)
                } finally {
                    e.refCleanup = null,
                        e = e.alternate,
                        e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (c) {
                    Ue(e, n, c)
                }
            else
                a.current = null
    }
    function vg(e) {
        var n = e.type
            , a = e.memoizedProps
            , r = e.stateNode;
        try {
            e: switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && r.focus();
                    break e;
                case "img":
                    a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet)
            }
        } catch (c) {
            Ue(e, e.return, c)
        }
    }
    function _f(e, n, a) {
        try {
            var r = e.stateNode;
            Ab(r, e.type, a, n),
                r[Lt] = n
        } catch (c) {
            Ue(e, e.return, c)
        }
    }
    function Sg(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hi(e.type) || e.tag === 4
    }
    function yf(e) {
        e: for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || Sg(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
                e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Hi(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                    e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function vf(e, n, a) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
                n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
                    n.appendChild(e),
                    a = a._reactRootContainer,
                    a != null || n.onclick !== null || (n.onclick = qn));
        else if (r !== 4 && (r === 27 && Hi(e.type) && (a = e.stateNode,
            n = null),
            e = e.child,
            e !== null))
            for (vf(e, n, a),
                e = e.sibling; e !== null;)
                vf(e, n, a),
                    e = e.sibling
    }
    function go(e, n, a) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
                n ? a.insertBefore(e, n) : a.appendChild(e);
        else if (r !== 4 && (r === 27 && Hi(e.type) && (a = e.stateNode),
            e = e.child,
            e !== null))
            for (go(e, n, a),
                e = e.sibling; e !== null;)
                go(e, n, a),
                    e = e.sibling
    }
    function Eg(e) {
        var n = e.stateNode
            , a = e.memoizedProps;
        try {
            for (var r = e.type, c = n.attributes; c.length;)
                n.removeAttributeNode(c[0]);
            Rt(n, r, a),
                n[Ct] = e,
                n[Lt] = a
        } catch (f) {
            Ue(e, e.return, f)
        }
    }
    var Jn = !1
        , ft = !1
        , Sf = !1
        , bg = typeof WeakSet == "function" ? WeakSet : Set
        , yt = null;
    function ob(e, n) {
        if (e = e.containerInfo,
            Pf = jo,
            e = km(e),
            hu(e)) {
            if ("selectionStart" in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var r = a.getSelection && a.getSelection();
                    if (r && r.rangeCount !== 0) {
                        a = r.anchorNode;
                        var c = r.anchorOffset
                            , f = r.focusNode;
                        r = r.focusOffset;
                        try {
                            a.nodeType,
                                f.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var m = 0
                            , y = -1
                            , b = -1
                            , N = 0
                            , L = 0
                            , H = e
                            , A = null;
                        t: for (; ;) {
                            for (var O; H !== a || c !== 0 && H.nodeType !== 3 || (y = m + c),
                                H !== f || r !== 0 && H.nodeType !== 3 || (b = m + r),
                                H.nodeType === 3 && (m += H.nodeValue.length),
                                (O = H.firstChild) !== null;)
                                A = H,
                                    H = O;
                            for (; ;) {
                                if (H === e)
                                    break t;
                                if (A === a && ++N === c && (y = m),
                                    A === f && ++L === r && (b = m),
                                    (O = H.nextSibling) !== null)
                                    break;
                                H = A,
                                    A = H.parentNode
                            }
                            H = O
                        }
                        a = y === -1 || b === -1 ? null : {
                            start: y,
                            end: b
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (qf = {
            focusedElem: e,
            selectionRange: a
        },
            jo = !1,
            yt = n; yt !== null;)
            if (n = yt,
                e = n.child,
                (n.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = n,
                    yt = e;
            else
                for (; yt !== null;) {
                    switch (n = yt,
                    f = n.alternate,
                    e = n.flags,
                    n.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = n.updateQueue,
                                e = e !== null ? e.events : null,
                                e !== null))
                                for (a = 0; a < e.length; a++)
                                    c = e[a],
                                        c.ref.impl = c.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && f !== null) {
                                e = void 0,
                                    a = n,
                                    c = f.memoizedProps,
                                    f = f.memoizedState,
                                    r = a.stateNode;
                                try {
                                    var W = ws(a.type, c);
                                    e = r.getSnapshotBeforeUpdate(W, f),
                                        r.__reactInternalSnapshotBeforeUpdate = e
                                } catch (le) {
                                    Ue(a, a.return, le)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = n.stateNode.containerInfo,
                                    a = e.nodeType,
                                    a === 9)
                                    Ff(e);
                                else if (a === 1)
                                    switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            Ff(e);
                                            break;
                                        default:
                                            e.textContent = ""
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0)
                                throw Error(l(163))
                    }
                    if (e = n.sibling,
                        e !== null) {
                        e.return = n.return,
                            yt = e;
                        break
                    }
                    yt = n.return
                }
    }
    function Cg(e, n, a) {
        var r = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ei(e, a),
                    r & 4 && Al(5, a);
                break;
            case 1:
                if (ei(e, a),
                    r & 4)
                    if (e = a.stateNode,
                        n === null)
                        try {
                            e.componentDidMount()
                        } catch (m) {
                            Ue(a, a.return, m)
                        }
                    else {
                        var c = ws(a.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (m) {
                            Ue(a, a.return, m)
                        }
                    }
                r & 64 && _g(a),
                    r & 512 && Dl(a, a.return);
                break;
            case 3:
                if (ei(e, a),
                    r & 64 && (e = a.updateQueue,
                        e !== null)) {
                    if (n = null,
                        a.child !== null)
                        switch (a.child.tag) {
                            case 27:
                            case 5:
                                n = a.child.stateNode;
                                break;
                            case 1:
                                n = a.child.stateNode
                        }
                    try {
                        rp(e, n)
                    } catch (m) {
                        Ue(a, a.return, m)
                    }
                }
                break;
            case 27:
                n === null && r & 4 && Eg(a);
            case 26:
            case 5:
                ei(e, a),
                    n === null && r & 4 && vg(a),
                    r & 512 && Dl(a, a.return);
                break;
            case 12:
                ei(e, a);
                break;
            case 31:
                ei(e, a),
                    r & 4 && wg(e, a);
                break;
            case 13:
                ei(e, a),
                    r & 4 && Rg(e, a),
                    r & 64 && (e = a.memoizedState,
                        e !== null && (e = e.dehydrated,
                            e !== null && (a = _b.bind(null, a),
                                jb(e, a))));
                break;
            case 22:
                if (r = a.memoizedState !== null || Jn,
                    !r) {
                    n = n !== null && n.memoizedState !== null || ft,
                        c = Jn;
                    var f = ft;
                    Jn = r,
                        (ft = n) && !f ? ti(e, a, (a.subtreeFlags & 8772) !== 0) : ei(e, a),
                        Jn = c,
                        ft = f
                }
                break;
            case 30:
                break;
            default:
                ei(e, a)
        }
    }
    function Tg(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null,
            Tg(n)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (n = e.stateNode,
                n !== null && Xc(n)),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
    }
    var Ze = null
        , jt = !1;
    function $n(e, n, a) {
        for (a = a.child; a !== null;)
            xg(e, n, a),
                a = a.sibling
    }
    function xg(e, n, a) {
        if (ie && typeof ie.onCommitFiberUnmount == "function")
            try {
                ie.onCommitFiberUnmount(ae, a)
            } catch { }
        switch (a.tag) {
            case 26:
                ft || In(a, n),
                    $n(e, n, a),
                    a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
                        a.parentNode.removeChild(a));
                break;
            case 27:
                ft || In(a, n);
                var r = Ze
                    , c = jt;
                Hi(a.type) && (Ze = a.stateNode,
                    jt = !1),
                    $n(e, n, a),
                    Hl(a.stateNode),
                    Ze = r,
                    jt = c;
                break;
            case 5:
                ft || In(a, n);
            case 6:
                if (r = Ze,
                    c = jt,
                    Ze = null,
                    $n(e, n, a),
                    Ze = r,
                    jt = c,
                    Ze !== null)
                    if (jt)
                        try {
                            (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(a.stateNode)
                        } catch (f) {
                            Ue(a, n, f)
                        }
                    else
                        try {
                            Ze.removeChild(a.stateNode)
                        } catch (f) {
                            Ue(a, n, f)
                        }
                break;
            case 18:
                Ze !== null && (jt ? (e = Ze,
                    __(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
                    wa(e)) : __(Ze, a.stateNode));
                break;
            case 4:
                r = Ze,
                    c = jt,
                    Ze = a.stateNode.containerInfo,
                    jt = !0,
                    $n(e, n, a),
                    Ze = r,
                    jt = c;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ii(2, a, n),
                    ft || Ii(4, a, n),
                    $n(e, n, a);
                break;
            case 1:
                ft || (In(a, n),
                    r = a.stateNode,
                    typeof r.componentWillUnmount == "function" && yg(a, n, r)),
                    $n(e, n, a);
                break;
            case 21:
                $n(e, n, a);
                break;
            case 22:
                ft = (r = ft) || a.memoizedState !== null,
                    $n(e, n, a),
                    ft = r;
                break;
            default:
                $n(e, n, a)
        }
    }
    function wg(e, n) {
        if (n.memoizedState === null && (e = n.alternate,
            e !== null && (e = e.memoizedState,
                e !== null))) {
            e = e.dehydrated;
            try {
                wa(e)
            } catch (a) {
                Ue(n, n.return, a)
            }
        }
    }
    function Rg(e, n) {
        if (n.memoizedState === null && (e = n.alternate,
            e !== null && (e = e.memoizedState,
                e !== null && (e = e.dehydrated,
                    e !== null))))
            try {
                wa(e)
            } catch (a) {
                Ue(n, n.return, a)
            }
    }
    function cb(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var n = e.stateNode;
                return n === null && (n = e.stateNode = new bg),
                    n;
            case 22:
                return e = e.stateNode,
                    n = e._retryCache,
                    n === null && (n = e._retryCache = new bg),
                    n;
            default:
                throw Error(l(435, e.tag))
        }
    }
    function _o(e, n) {
        var a = cb(e);
        n.forEach(function (r) {
            if (!a.has(r)) {
                a.add(r);
                var c = yb.bind(null, e, r);
                r.then(c, c)
            }
        })
    }
    function zt(e, n) {
        var a = n.deletions;
        if (a !== null)
            for (var r = 0; r < a.length; r++) {
                var c = a[r]
                    , f = e
                    , m = n
                    , y = m;
                e: for (; y !== null;) {
                    switch (y.tag) {
                        case 27:
                            if (Hi(y.type)) {
                                Ze = y.stateNode,
                                    jt = !1;
                                break e
                            }
                            break;
                        case 5:
                            Ze = y.stateNode,
                                jt = !1;
                            break e;
                        case 3:
                        case 4:
                            Ze = y.stateNode.containerInfo,
                                jt = !0;
                            break e
                    }
                    y = y.return
                }
                if (Ze === null)
                    throw Error(l(160));
                xg(f, m, c),
                    Ze = null,
                    jt = !1,
                    f = c.alternate,
                    f !== null && (f.return = null),
                    c.return = null
            }
        if (n.subtreeFlags & 13886)
            for (n = n.child; n !== null;)
                Ng(n, e),
                    n = n.sibling
    }
    var vn = null;
    function Ng(e, n) {
        var a = e.alternate
            , r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                zt(n, e),
                    Ht(e),
                    r & 4 && (Ii(3, e, e.return),
                        Al(3, e),
                        Ii(5, e, e.return));
                break;
            case 1:
                zt(n, e),
                    Ht(e),
                    r & 512 && (ft || a === null || In(a, a.return)),
                    r & 64 && Jn && (e = e.updateQueue,
                        e !== null && (r = e.callbacks,
                            r !== null && (a = e.shared.hiddenCallbacks,
                                e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
                break;
            case 26:
                var c = vn;
                if (zt(n, e),
                    Ht(e),
                    r & 512 && (ft || a === null || In(a, a.return)),
                    r & 4) {
                    var f = a !== null ? a.memoizedState : null;
                    if (r = e.memoizedState,
                        a === null)
                        if (r === null)
                            if (e.stateNode === null) {
                                e: {
                                    r = e.type,
                                        a = e.memoizedProps,
                                        c = c.ownerDocument || c;
                                    t: switch (r) {
                                        case "title":
                                            f = c.getElementsByTagName("title")[0],
                                                (!f || f[il] || f[Ct] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(r),
                                                    c.head.insertBefore(f, c.querySelector("head > title"))),
                                                Rt(f, r, a),
                                                f[Ct] = e,
                                                _t(f),
                                                r = f;
                                            break e;
                                        case "link":
                                            var m = N_("link", "href", c).get(r + (a.href || ""));
                                            if (m) {
                                                for (var y = 0; y < m.length; y++)
                                                    if (f = m[y],
                                                        f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        m.splice(y, 1);
                                                        break t
                                                    }
                                            }
                                            f = c.createElement(r),
                                                Rt(f, r, a),
                                                c.head.appendChild(f);
                                            break;
                                        case "meta":
                                            if (m = N_("meta", "content", c).get(r + (a.content || ""))) {
                                                for (y = 0; y < m.length; y++)
                                                    if (f = m[y],
                                                        f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        m.splice(y, 1);
                                                        break t
                                                    }
                                            }
                                            f = c.createElement(r),
                                                Rt(f, r, a),
                                                c.head.appendChild(f);
                                            break;
                                        default:
                                            throw Error(l(468, r))
                                    }
                                    f[Ct] = e,
                                        _t(f),
                                        r = f
                                }
                                e.stateNode = r
                            } else
                                A_(c, e.type, e.stateNode);
                        else
                            e.stateNode = R_(c, r, e.memoizedProps);
                    else
                        f !== r ? (f === null ? a.stateNode !== null && (a = a.stateNode,
                            a.parentNode.removeChild(a)) : f.count--,
                            r === null ? A_(c, e.type, e.stateNode) : R_(c, r, e.memoizedProps)) : r === null && e.stateNode !== null && _f(e, e.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                zt(n, e),
                    Ht(e),
                    r & 512 && (ft || a === null || In(a, a.return)),
                    a !== null && r & 4 && _f(e, e.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (zt(n, e),
                    Ht(e),
                    r & 512 && (ft || a === null || In(a, a.return)),
                    e.flags & 32) {
                    c = e.stateNode;
                    try {
                        Xs(c, "")
                    } catch (W) {
                        Ue(e, e.return, W)
                    }
                }
                r & 4 && e.stateNode != null && (c = e.memoizedProps,
                    _f(e, c, a !== null ? a.memoizedProps : c)),
                    r & 1024 && (Sf = !0);
                break;
            case 6:
                if (zt(n, e),
                    Ht(e),
                    r & 4) {
                    if (e.stateNode === null)
                        throw Error(l(162));
                    r = e.memoizedProps,
                        a = e.stateNode;
                    try {
                        a.nodeValue = r
                    } catch (W) {
                        Ue(e, e.return, W)
                    }
                }
                break;
            case 3:
                if (Mo = null,
                    c = vn,
                    vn = Oo(n.containerInfo),
                    zt(n, e),
                    vn = c,
                    Ht(e),
                    r & 4 && a !== null && a.memoizedState.isDehydrated)
                    try {
                        wa(n.containerInfo)
                    } catch (W) {
                        Ue(e, e.return, W)
                    }
                Sf && (Sf = !1,
                    Ag(e));
                break;
            case 4:
                r = vn,
                    vn = Oo(e.stateNode.containerInfo),
                    zt(n, e),
                    Ht(e),
                    vn = r;
                break;
            case 12:
                zt(n, e),
                    Ht(e);
                break;
            case 31:
                zt(n, e),
                    Ht(e),
                    r & 4 && (r = e.updateQueue,
                        r !== null && (e.updateQueue = null,
                            _o(e, r)));
                break;
            case 13:
                zt(n, e),
                    Ht(e),
                    e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (vo = bt()),
                    r & 4 && (r = e.updateQueue,
                        r !== null && (e.updateQueue = null,
                            _o(e, r)));
                break;
            case 22:
                c = e.memoizedState !== null;
                var b = a !== null && a.memoizedState !== null
                    , N = Jn
                    , L = ft;
                if (Jn = N || c,
                    ft = L || b,
                    zt(n, e),
                    ft = L,
                    Jn = N,
                    Ht(e),
                    r & 8192)
                    e: for (n = e.stateNode,
                        n._visibility = c ? n._visibility & -2 : n._visibility | 1,
                        c && (a === null || b || Jn || ft || Rs(e)),
                        a = null,
                        n = e; ;) {
                        if (n.tag === 5 || n.tag === 26) {
                            if (a === null) {
                                b = a = n;
                                try {
                                    if (f = b.stateNode,
                                        c)
                                        m = f.style,
                                            typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                    else {
                                        y = b.stateNode;
                                        var H = b.memoizedProps.style
                                            , A = H != null && H.hasOwnProperty("display") ? H.display : null;
                                        y.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim()
                                    }
                                } catch (W) {
                                    Ue(b, b.return, W)
                                }
                            }
                        } else if (n.tag === 6) {
                            if (a === null) {
                                b = n;
                                try {
                                    b.stateNode.nodeValue = c ? "" : b.memoizedProps
                                } catch (W) {
                                    Ue(b, b.return, W)
                                }
                            }
                        } else if (n.tag === 18) {
                            if (a === null) {
                                b = n;
                                try {
                                    var O = b.stateNode;
                                    c ? y_(O, !0) : y_(b.stateNode, !1)
                                } catch (W) {
                                    Ue(b, b.return, W)
                                }
                            }
                        } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                            n.child.return = n,
                                n = n.child;
                            continue
                        }
                        if (n === e)
                            break e;
                        for (; n.sibling === null;) {
                            if (n.return === null || n.return === e)
                                break e;
                            a === n && (a = null),
                                n = n.return
                        }
                        a === n && (a = null),
                            n.sibling.return = n.return,
                            n = n.sibling
                    }
                r & 4 && (r = e.updateQueue,
                    r !== null && (a = r.retryQueue,
                        a !== null && (r.retryQueue = null,
                            _o(e, a))));
                break;
            case 19:
                zt(n, e),
                    Ht(e),
                    r & 4 && (r = e.updateQueue,
                        r !== null && (e.updateQueue = null,
                            _o(e, r)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                zt(n, e),
                    Ht(e)
        }
    }
    function Ht(e) {
        var n = e.flags;
        if (n & 2) {
            try {
                for (var a, r = e.return; r !== null;) {
                    if (Sg(r)) {
                        a = r;
                        break
                    }
                    r = r.return
                }
                if (a == null)
                    throw Error(l(160));
                switch (a.tag) {
                    case 27:
                        var c = a.stateNode
                            , f = yf(e);
                        go(e, f, c);
                        break;
                    case 5:
                        var m = a.stateNode;
                        a.flags & 32 && (Xs(m, ""),
                            a.flags &= -33);
                        var y = yf(e);
                        go(e, y, m);
                        break;
                    case 3:
                    case 4:
                        var b = a.stateNode.containerInfo
                            , N = yf(e);
                        vf(e, N, b);
                        break;
                    default:
                        throw Error(l(161))
                }
            } catch (L) {
                Ue(e, e.return, L)
            }
            e.flags &= -3
        }
        n & 4096 && (e.flags &= -4097)
    }
    function Ag(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var n = e;
                Ag(n),
                    n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
                    e = e.sibling
            }
    }
    function ei(e, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null;)
                Cg(e, n.alternate, n),
                    n = n.sibling
    }
    function Rs(e) {
        for (e = e.child; e !== null;) {
            var n = e;
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Ii(4, n, n.return),
                        Rs(n);
                    break;
                case 1:
                    In(n, n.return);
                    var a = n.stateNode;
                    typeof a.componentWillUnmount == "function" && yg(n, n.return, a),
                        Rs(n);
                    break;
                case 27:
                    Hl(n.stateNode);
                case 26:
                case 5:
                    In(n, n.return),
                        Rs(n);
                    break;
                case 22:
                    n.memoizedState === null && Rs(n);
                    break;
                case 30:
                    Rs(n);
                    break;
                default:
                    Rs(n)
            }
            e = e.sibling
        }
    }
    function ti(e, n, a) {
        for (a = a && (n.subtreeFlags & 8772) !== 0,
            n = n.child; n !== null;) {
            var r = n.alternate
                , c = e
                , f = n
                , m = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    ti(c, f, a),
                        Al(4, f);
                    break;
                case 1:
                    if (ti(c, f, a),
                        r = f,
                        c = r.stateNode,
                        typeof c.componentDidMount == "function")
                        try {
                            c.componentDidMount()
                        } catch (N) {
                            Ue(r, r.return, N)
                        }
                    if (r = f,
                        c = r.updateQueue,
                        c !== null) {
                        var y = r.stateNode;
                        try {
                            var b = c.shared.hiddenCallbacks;
                            if (b !== null)
                                for (c.shared.hiddenCallbacks = null,
                                    c = 0; c < b.length; c++)
                                    lp(b[c], y)
                        } catch (N) {
                            Ue(r, r.return, N)
                        }
                    }
                    a && m & 64 && _g(f),
                        Dl(f, f.return);
                    break;
                case 27:
                    Eg(f);
                case 26:
                case 5:
                    ti(c, f, a),
                        a && r === null && m & 4 && vg(f),
                        Dl(f, f.return);
                    break;
                case 12:
                    ti(c, f, a);
                    break;
                case 31:
                    ti(c, f, a),
                        a && m & 4 && wg(c, f);
                    break;
                case 13:
                    ti(c, f, a),
                        a && m & 4 && Rg(c, f);
                    break;
                case 22:
                    f.memoizedState === null && ti(c, f, a),
                        Dl(f, f.return);
                    break;
                case 30:
                    break;
                default:
                    ti(c, f, a)
            }
            n = n.sibling
        }
    }
    function Ef(e, n) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            e = null,
            n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool),
            e !== a && (e != null && e.refCount++,
                a != null && gl(a))
    }
    function bf(e, n) {
        e = null,
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            n = n.memoizedState.cache,
            n !== e && (n.refCount++,
                e != null && gl(e))
    }
    function Sn(e, n, a, r) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;)
                Dg(e, n, a, r),
                    n = n.sibling
    }
    function Dg(e, n, a, r) {
        var c = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Sn(e, n, a, r),
                    c & 2048 && Al(9, n);
                break;
            case 1:
                Sn(e, n, a, r);
                break;
            case 3:
                Sn(e, n, a, r),
                    c & 2048 && (e = null,
                        n.alternate !== null && (e = n.alternate.memoizedState.cache),
                        n = n.memoizedState.cache,
                        n !== e && (n.refCount++,
                            e != null && gl(e)));
                break;
            case 12:
                if (c & 2048) {
                    Sn(e, n, a, r),
                        e = n.stateNode;
                    try {
                        var f = n.memoizedProps
                            , m = f.id
                            , y = f.onPostCommit;
                        typeof y == "function" && y(m, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (b) {
                        Ue(n, n.return, b)
                    }
                } else
                    Sn(e, n, a, r);
                break;
            case 31:
                Sn(e, n, a, r);
                break;
            case 13:
                Sn(e, n, a, r);
                break;
            case 23:
                break;
            case 22:
                f = n.stateNode,
                    m = n.alternate,
                    n.memoizedState !== null ? f._visibility & 2 ? Sn(e, n, a, r) : Ol(e, n) : f._visibility & 2 ? Sn(e, n, a, r) : (f._visibility |= 2,
                        pa(e, n, a, r, (n.subtreeFlags & 10256) !== 0 || !1)),
                    c & 2048 && Ef(m, n);
                break;
            case 24:
                Sn(e, n, a, r),
                    c & 2048 && bf(n.alternate, n);
                break;
            default:
                Sn(e, n, a, r)
        }
    }
    function pa(e, n, a, r, c) {
        for (c = c && ((n.subtreeFlags & 10256) !== 0 || !1),
            n = n.child; n !== null;) {
            var f = e
                , m = n
                , y = a
                , b = r
                , N = m.flags;
            switch (m.tag) {
                case 0:
                case 11:
                case 15:
                    pa(f, m, y, b, c),
                        Al(8, m);
                    break;
                case 23:
                    break;
                case 22:
                    var L = m.stateNode;
                    m.memoizedState !== null ? L._visibility & 2 ? pa(f, m, y, b, c) : Ol(f, m) : (L._visibility |= 2,
                        pa(f, m, y, b, c)),
                        c && N & 2048 && Ef(m.alternate, m);
                    break;
                case 24:
                    pa(f, m, y, b, c),
                        c && N & 2048 && bf(m.alternate, m);
                    break;
                default:
                    pa(f, m, y, b, c)
            }
            n = n.sibling
        }
    }
    function Ol(e, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) {
                var a = e
                    , r = n
                    , c = r.flags;
                switch (r.tag) {
                    case 22:
                        Ol(a, r),
                            c & 2048 && Ef(r.alternate, r);
                        break;
                    case 24:
                        Ol(a, r),
                            c & 2048 && bf(r.alternate, r);
                        break;
                    default:
                        Ol(a, r)
                }
                n = n.sibling
            }
    }
    var Il = 8192;
    function ga(e, n, a) {
        if (e.subtreeFlags & Il)
            for (e = e.child; e !== null;)
                Og(e, n, a),
                    e = e.sibling
    }
    function Og(e, n, a) {
        switch (e.tag) {
            case 26:
                ga(e, n, a),
                    e.flags & Il && e.memoizedState !== null && Xb(a, vn, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                ga(e, n, a);
                break;
            case 3:
            case 4:
                var r = vn;
                vn = Oo(e.stateNode.containerInfo),
                    ga(e, n, a),
                    vn = r;
                break;
            case 22:
                e.memoizedState === null && (r = e.alternate,
                    r !== null && r.memoizedState !== null ? (r = Il,
                        Il = 16777216,
                        ga(e, n, a),
                        Il = r) : ga(e, n, a));
                break;
            default:
                ga(e, n, a)
        }
    }
    function Ig(e) {
        var n = e.alternate;
        if (n !== null && (e = n.child,
            e !== null)) {
            n.child = null;
            do
                n = e.sibling,
                    e.sibling = null,
                    e = n;
            while (e !== null)
        }
    }
    function Ml(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (n !== null)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a];
                    yt = r,
                        kg(r, e)
                }
            Ig(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;)
                Mg(e),
                    e = e.sibling
    }
    function Mg(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ml(e),
                    e.flags & 2048 && Ii(9, e, e.return);
                break;
            case 3:
                Ml(e);
                break;
            case 12:
                Ml(e);
                break;
            case 22:
                var n = e.stateNode;
                e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3,
                    yo(e)) : Ml(e);
                break;
            default:
                Ml(e)
        }
    }
    function yo(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (n !== null)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a];
                    yt = r,
                        kg(r, e)
                }
            Ig(e)
        }
        for (e = e.child; e !== null;) {
            switch (n = e,
            n.tag) {
                case 0:
                case 11:
                case 15:
                    Ii(8, n, n.return),
                        yo(n);
                    break;
                case 22:
                    a = n.stateNode,
                        a._visibility & 2 && (a._visibility &= -3,
                            yo(n));
                    break;
                default:
                    yo(n)
            }
            e = e.sibling
        }
    }
    function kg(e, n) {
        for (; yt !== null;) {
            var a = yt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Ii(8, a, n);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var r = a.memoizedState.cachePool.pool;
                        r != null && r.refCount++
                    }
                    break;
                case 24:
                    gl(a.memoizedState.cache)
            }
            if (r = a.child,
                r !== null)
                r.return = a,
                    yt = r;
            else
                e: for (a = e; yt !== null;) {
                    r = yt;
                    var c = r.sibling
                        , f = r.return;
                    if (Tg(r),
                        r === a) {
                        yt = null;
                        break e
                    }
                    if (c !== null) {
                        c.return = f,
                            yt = c;
                        break e
                    }
                    yt = f
                }
        }
    }
    var ub = {
        getCacheForType: function (e) {
            var n = xt(ot)
                , a = n.data.get(e);
            return a === void 0 && (a = e(),
                n.data.set(e, a)),
                a
        },
        cacheSignal: function () {
            return xt(ot).controller.signal
        }
    }
        , fb = typeof WeakMap == "function" ? WeakMap : Map
        , Me = 0
        , Pe = null
        , Se = null
        , Ce = 0
        , Le = 0
        , Wt = null
        , Mi = !1
        , _a = !1
        , Cf = !1
        , ni = 0
        , tt = 0
        , ki = 0
        , Ns = 0
        , Tf = 0
        , Zt = 0
        , ya = 0
        , kl = null
        , Bt = null
        , xf = !1
        , vo = 0
        , Lg = 0
        , So = 1 / 0
        , Eo = null
        , Li = null
        , ht = 0
        , Ui = null
        , va = null
        , ii = 0
        , wf = 0
        , Rf = null
        , Ug = null
        , Ll = 0
        , Nf = null;
    function Jt() {
        return (Me & 2) !== 0 && Ce !== 0 ? Ce & -Ce : k.T !== null ? kf() : Jd()
    }
    function jg() {
        if (Zt === 0)
            if ((Ce & 536870912) === 0 || xe) {
                var e = U;
                U <<= 1,
                    (U & 3932160) === 0 && (U = 262144),
                    Zt = e
            } else
                Zt = 536870912;
        return e = Kt.current,
            e !== null && (e.flags |= 32),
            Zt
    }
    function Pt(e, n, a) {
        (e === Pe && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null) && (Sa(e, 0),
            ji(e, Ce, Zt, !1)),
            nl(e, a),
            ((Me & 2) === 0 || e !== Pe) && (e === Pe && ((Me & 2) === 0 && (Ns |= a),
                tt === 4 && ji(e, Ce, Zt, !1)),
                Mn(e))
    }
    function zg(e, n, a) {
        if ((Me & 6) !== 0)
            throw Error(l(327));
        var r = !a && (n & 127) === 0 && (n & e.expiredLanes) === 0 || _n(e, n)
            , c = r ? mb(e, n) : Df(e, n, !0)
            , f = r;
        do {
            if (c === 0) {
                _a && !r && ji(e, n, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                    f && !hb(a)) {
                    c = Df(e, n, !1),
                        f = !1;
                    continue
                }
                if (c === 2) {
                    if (f = n,
                        e.errorRecoveryDisabledLanes & f)
                        var m = 0;
                    else
                        m = e.pendingLanes & -536870913,
                            m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        n = m;
                        e: {
                            var y = e;
                            c = kl;
                            var b = y.current.memoizedState.isDehydrated;
                            if (b && (Sa(y, m).flags |= 256),
                                m = Df(y, m, !1),
                                m !== 2) {
                                if (Cf && !b) {
                                    y.errorRecoveryDisabledLanes |= f,
                                        Ns |= f,
                                        c = 4;
                                    break e
                                }
                                f = Bt,
                                    Bt = c,
                                    f !== null && (Bt === null ? Bt = f : Bt.push.apply(Bt, f))
                            }
                            c = m
                        }
                        if (f = !1,
                            c !== 2)
                            continue
                    }
                }
                if (c === 1) {
                    Sa(e, 0),
                        ji(e, n, 0, !0);
                    break
                }
                e: {
                    switch (r = e,
                    f = c,
                    f) {
                        case 0:
                        case 1:
                            throw Error(l(345));
                        case 4:
                            if ((n & 4194048) !== n)
                                break;
                        case 6:
                            ji(r, n, Zt, !Mi);
                            break e;
                        case 2:
                            Bt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(l(329))
                    }
                    if ((n & 62914560) === n && (c = vo + 300 - bt(),
                        10 < c)) {
                        if (ji(r, n, Zt, !Mi),
                            rt(r, 0, !0) !== 0)
                            break e;
                        ii = n,
                            r.timeoutHandle = p_(Hg.bind(null, r, a, Bt, Eo, xf, n, Zt, Ns, ya, Mi, f, "Throttled", -0, 0), c);
                        break e
                    }
                    Hg(r, a, Bt, Eo, xf, n, Zt, Ns, ya, Mi, f, null, -0, 0)
                }
            }
            break
        } while (!0);
        Mn(e)
    }
    function Hg(e, n, a, r, c, f, m, y, b, N, L, H, A, O) {
        if (e.timeoutHandle = -1,
            H = n.subtreeFlags,
            H & 8192 || (H & 16785408) === 16785408) {
            H = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: qn
            },
                Og(n, f, H);
            var W = (f & 62914560) === f ? vo - bt() : (f & 4194048) === f ? Lg - bt() : 0;
            if (W = Wb(H, W),
                W !== null) {
                ii = f,
                    e.cancelPendingCommit = W(Qg.bind(null, e, n, f, a, r, c, m, y, b, L, H, null, A, O)),
                    ji(e, f, m, !N);
                return
            }
        }
        Qg(e, n, f, a, r, c, m, y, b)
    }
    function hb(e) {
        for (var n = e; ;) {
            var a = n.tag;
            if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue,
                a !== null && (a = a.stores,
                    a !== null)))
                for (var r = 0; r < a.length; r++) {
                    var c = a[r]
                        , f = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!Yt(f(), c))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = n.child,
                n.subtreeFlags & 16384 && a !== null)
                a.return = n,
                    n = a;
            else {
                if (n === e)
                    break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === e)
                        return !0;
                    n = n.return
                }
                n.sibling.return = n.return,
                    n = n.sibling
            }
        }
        return !0
    }
    function ji(e, n, a, r) {
        n &= ~Tf,
            n &= ~Ns,
            e.suspendedLanes |= n,
            e.pingedLanes &= ~n,
            r && (e.warmLanes |= n),
            r = e.expirationTimes;
        for (var c = n; 0 < c;) {
            var f = 31 - st(c)
                , m = 1 << f;
            r[f] = -1,
                c &= ~m
        }
        a !== 0 && Xd(e, a, n)
    }
    function bo() {
        return (Me & 6) === 0 ? (Ul(0),
            !1) : !0
    }
    function Af() {
        if (Se !== null) {
            if (Le === 0)
                var e = Se.return;
            else
                e = Se,
                    Yn = vs = null,
                    Gu(e),
                    ua = null,
                    yl = 0,
                    e = Se;
            for (; e !== null;)
                gg(e.alternate, e),
                    e = e.return;
            Se = null
        }
    }
    function Sa(e, n) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
            Ib(a)),
            a = e.cancelPendingCommit,
            a !== null && (e.cancelPendingCommit = null,
                a()),
            ii = 0,
            Af(),
            Pe = e,
            Se = a = Gn(e.current, null),
            Ce = n,
            Le = 0,
            Wt = null,
            Mi = !1,
            _a = _n(e, n),
            Cf = !1,
            ya = Zt = Tf = Ns = ki = tt = 0,
            Bt = kl = null,
            xf = !1,
            (n & 8) !== 0 && (n |= n & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements,
                r &= n; 0 < r;) {
                var c = 31 - st(r)
                    , f = 1 << c;
                n |= e[c],
                    r &= ~f
            }
        return ni = n,
            qr(),
            a
    }
    function Bg(e, n) {
        me = null,
            k.H = wl,
            n === ca || n === Wr ? (n = np(),
                Le = 3) : n === Iu ? (n = np(),
                    Le = 4) : Le = n === rf ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1,
            Wt = n,
            Se === null && (tt = 1,
                uo(e, ln(n, e.current)))
    }
    function Pg() {
        var e = Kt.current;
        return e === null ? !0 : (Ce & 4194048) === Ce ? un === null : (Ce & 62914560) === Ce || (Ce & 536870912) !== 0 ? e === un : !1
    }
    function qg() {
        var e = k.H;
        return k.H = wl,
            e === null ? wl : e
    }
    function Vg() {
        var e = k.A;
        return k.A = ub,
            e
    }
    function Co() {
        tt = 4,
            Mi || (Ce & 4194048) !== Ce && Kt.current !== null || (_a = !0),
            (ki & 134217727) === 0 && (Ns & 134217727) === 0 || Pe === null || ji(Pe, Ce, Zt, !1)
    }
    function Df(e, n, a) {
        var r = Me;
        Me |= 2;
        var c = qg()
            , f = Vg();
        (Pe !== e || Ce !== n) && (Eo = null,
            Sa(e, n)),
            n = !1;
        var m = tt;
        e: do
            try {
                if (Le !== 0 && Se !== null) {
                    var y = Se
                        , b = Wt;
                    switch (Le) {
                        case 8:
                            Af(),
                                m = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Kt.current === null && (n = !0);
                            var N = Le;
                            if (Le = 0,
                                Wt = null,
                                Ea(e, y, b, N),
                                a && _a) {
                                m = 0;
                                break e
                            }
                            break;
                        default:
                            N = Le,
                                Le = 0,
                                Wt = null,
                                Ea(e, y, b, N)
                    }
                }
                db(),
                    m = tt;
                break
            } catch (L) {
                Bg(e, L)
            }
        while (!0);
        return n && e.shellSuspendCounter++,
            Yn = vs = null,
            Me = r,
            k.H = c,
            k.A = f,
            Se === null && (Pe = null,
                Ce = 0,
                qr()),
            m
    }
    function db() {
        for (; Se !== null;)
            Gg(Se)
    }
    function mb(e, n) {
        var a = Me;
        Me |= 2;
        var r = qg()
            , c = Vg();
        Pe !== e || Ce !== n ? (Eo = null,
            So = bt() + 500,
            Sa(e, n)) : _a = _n(e, n);
        e: do
            try {
                if (Le !== 0 && Se !== null) {
                    n = Se;
                    var f = Wt;
                    t: switch (Le) {
                        case 1:
                            Le = 0,
                                Wt = null,
                                Ea(e, n, f, 1);
                            break;
                        case 2:
                        case 9:
                            if (ep(f)) {
                                Le = 0,
                                    Wt = null,
                                    Fg(n);
                                break
                            }
                            n = function () {
                                Le !== 2 && Le !== 9 || Pe !== e || (Le = 7),
                                    Mn(e)
                            }
                                ,
                                f.then(n, n);
                            break e;
                        case 3:
                            Le = 7;
                            break e;
                        case 4:
                            Le = 5;
                            break e;
                        case 7:
                            ep(f) ? (Le = 0,
                                Wt = null,
                                Fg(n)) : (Le = 0,
                                    Wt = null,
                                    Ea(e, n, f, 7));
                            break;
                        case 5:
                            var m = null;
                            switch (Se.tag) {
                                case 26:
                                    m = Se.memoizedState;
                                case 5:
                                case 27:
                                    var y = Se;
                                    if (m ? D_(m) : y.stateNode.complete) {
                                        Le = 0,
                                            Wt = null;
                                        var b = y.sibling;
                                        if (b !== null)
                                            Se = b;
                                        else {
                                            var N = y.return;
                                            N !== null ? (Se = N,
                                                To(N)) : Se = null
                                        }
                                        break t
                                    }
                            }
                            Le = 0,
                                Wt = null,
                                Ea(e, n, f, 5);
                            break;
                        case 6:
                            Le = 0,
                                Wt = null,
                                Ea(e, n, f, 6);
                            break;
                        case 8:
                            Af(),
                                tt = 6;
                            break e;
                        default:
                            throw Error(l(462))
                    }
                }
                pb();
                break
            } catch (L) {
                Bg(e, L)
            }
        while (!0);
        return Yn = vs = null,
            k.H = r,
            k.A = c,
            Me = a,
            Se !== null ? 0 : (Pe = null,
                Ce = 0,
                qr(),
                tt)
    }
    function pb() {
        for (; Se !== null && !Ja();)
            Gg(Se)
    }
    function Gg(e) {
        var n = mg(e.alternate, e, ni);
        e.memoizedProps = e.pendingProps,
            n === null ? To(e) : Se = n
    }
    function Fg(e) {
        var n = e
            , a = n.alternate;
        switch (n.tag) {
            case 15:
            case 0:
                n = og(a, n, n.pendingProps, n.type, void 0, Ce);
                break;
            case 11:
                n = og(a, n, n.pendingProps, n.type.render, n.ref, Ce);
                break;
            case 5:
                Gu(n);
            default:
                gg(a, n),
                    n = Se = Vm(n, ni),
                    n = mg(a, n, ni)
        }
        e.memoizedProps = e.pendingProps,
            n === null ? To(e) : Se = n
    }
    function Ea(e, n, a, r) {
        Yn = vs = null,
            Gu(n),
            ua = null,
            yl = 0;
        var c = n.return;
        try {
            if (ib(e, c, n, a, Ce)) {
                tt = 1,
                    uo(e, ln(a, e.current)),
                    Se = null;
                return
            }
        } catch (f) {
            if (c !== null)
                throw Se = c,
                f;
            tt = 1,
                uo(e, ln(a, e.current)),
                Se = null;
            return
        }
        n.flags & 32768 ? (xe || r === 1 ? e = !0 : _a || (Ce & 536870912) !== 0 ? e = !1 : (Mi = e = !0,
            (r === 2 || r === 9 || r === 3 || r === 6) && (r = Kt.current,
                r !== null && r.tag === 13 && (r.flags |= 16384))),
            Yg(n, e)) : To(n)
    }
    function To(e) {
        var n = e;
        do {
            if ((n.flags & 32768) !== 0) {
                Yg(n, Mi);
                return
            }
            e = n.return;
            var a = lb(n.alternate, n, ni);
            if (a !== null) {
                Se = a;
                return
            }
            if (n = n.sibling,
                n !== null) {
                Se = n;
                return
            }
            Se = n = e
        } while (n !== null);
        tt === 0 && (tt = 5)
    }
    function Yg(e, n) {
        do {
            var a = rb(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                    Se = a;
                return
            }
            if (a = e.return,
                a !== null && (a.flags |= 32768,
                    a.subtreeFlags = 0,
                    a.deletions = null),
                !n && (e = e.sibling,
                    e !== null)) {
                Se = e;
                return
            }
            Se = e = a
        } while (e !== null);
        tt = 6,
            Se = null
    }
    function Qg(e, n, a, r, c, f, m, y, b) {
        e.cancelPendingCommit = null;
        do
            xo();
        while (ht !== 0);
        if ((Me & 6) !== 0)
            throw Error(l(327));
        if (n !== null) {
            if (n === e.current)
                throw Error(l(177));
            if (f = n.lanes | n.childLanes,
                f |= _u,
                KE(e, a, f, m, y, b),
                e === Pe && (Se = Pe = null,
                    Ce = 0),
                va = n,
                Ui = e,
                ii = a,
                wf = f,
                Rf = c,
                Ug = r,
                (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null,
                    e.callbackPriority = 0,
                    vb(Ot, function () {
                        return Jg(),
                            null
                    })) : (e.callbackNode = null,
                        e.callbackPriority = 0),
                r = (n.flags & 13878) !== 0,
                (n.subtreeFlags & 13878) !== 0 || r) {
                r = k.T,
                    k.T = null,
                    c = F.p,
                    F.p = 2,
                    m = Me,
                    Me |= 4;
                try {
                    ob(e, n, a)
                } finally {
                    Me = m,
                        F.p = c,
                        k.T = r
                }
            }
            ht = 1,
                Kg(),
                Xg(),
                Wg()
        }
    }
    function Kg() {
        if (ht === 1) {
            ht = 0;
            var e = Ui
                , n = va
                , a = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || a) {
                a = k.T,
                    k.T = null;
                var r = F.p;
                F.p = 2;
                var c = Me;
                Me |= 4;
                try {
                    Ng(n, e);
                    var f = qf
                        , m = km(e.containerInfo)
                        , y = f.focusedElem
                        , b = f.selectionRange;
                    if (m !== y && y && y.ownerDocument && Mm(y.ownerDocument.documentElement, y)) {
                        if (b !== null && hu(y)) {
                            var N = b.start
                                , L = b.end;
                            if (L === void 0 && (L = N),
                                "selectionStart" in y)
                                y.selectionStart = N,
                                    y.selectionEnd = Math.min(L, y.value.length);
                            else {
                                var H = y.ownerDocument || document
                                    , A = H && H.defaultView || window;
                                if (A.getSelection) {
                                    var O = A.getSelection()
                                        , W = y.textContent.length
                                        , le = Math.min(b.start, W)
                                        , He = b.end === void 0 ? le : Math.min(b.end, W);
                                    !O.extend && le > He && (m = He,
                                        He = le,
                                        le = m);
                                    var w = Im(y, le)
                                        , C = Im(y, He);
                                    if (w && C && (O.rangeCount !== 1 || O.anchorNode !== w.node || O.anchorOffset !== w.offset || O.focusNode !== C.node || O.focusOffset !== C.offset)) {
                                        var R = H.createRange();
                                        R.setStart(w.node, w.offset),
                                            O.removeAllRanges(),
                                            le > He ? (O.addRange(R),
                                                O.extend(C.node, C.offset)) : (R.setEnd(C.node, C.offset),
                                                    O.addRange(R))
                                    }
                                }
                            }
                        }
                        for (H = [],
                            O = y; O = O.parentNode;)
                            O.nodeType === 1 && H.push({
                                element: O,
                                left: O.scrollLeft,
                                top: O.scrollTop
                            });
                        for (typeof y.focus == "function" && y.focus(),
                            y = 0; y < H.length; y++) {
                            var j = H[y];
                            j.element.scrollLeft = j.left,
                                j.element.scrollTop = j.top
                        }
                    }
                    jo = !!Pf,
                        qf = Pf = null
                } finally {
                    Me = c,
                        F.p = r,
                        k.T = a
                }
            }
            e.current = n,
                ht = 2
        }
    }
    function Xg() {
        if (ht === 2) {
            ht = 0;
            var e = Ui
                , n = va
                , a = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || a) {
                a = k.T,
                    k.T = null;
                var r = F.p;
                F.p = 2;
                var c = Me;
                Me |= 4;
                try {
                    Cg(e, n.alternate, n)
                } finally {
                    Me = c,
                        F.p = r,
                        k.T = a
                }
            }
            ht = 3
        }
    }
    function Wg() {
        if (ht === 4 || ht === 3) {
            ht = 0,
                $a();
            var e = Ui
                , n = va
                , a = ii
                , r = Ug;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ht = 5 : (ht = 0,
                va = Ui = null,
                Zg(e, e.pendingLanes));
            var c = e.pendingLanes;
            if (c === 0 && (Li = null),
                Qc(a),
                n = n.stateNode,
                ie && typeof ie.onCommitFiberRoot == "function")
                try {
                    ie.onCommitFiberRoot(ae, n, void 0, (n.current.flags & 128) === 128)
                } catch { }
            if (r !== null) {
                n = k.T,
                    c = F.p,
                    F.p = 2,
                    k.T = null;
                try {
                    for (var f = e.onRecoverableError, m = 0; m < r.length; m++) {
                        var y = r[m];
                        f(y.value, {
                            componentStack: y.stack
                        })
                    }
                } finally {
                    k.T = n,
                        F.p = c
                }
            }
            (ii & 3) !== 0 && xo(),
                Mn(e),
                c = e.pendingLanes,
                (a & 261930) !== 0 && (c & 42) !== 0 ? e === Nf ? Ll++ : (Ll = 0,
                    Nf = e) : Ll = 0,
                Ul(0)
        }
    }
    function Zg(e, n) {
        (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache,
            n != null && (e.pooledCache = null,
                gl(n)))
    }
    function xo() {
        return Kg(),
            Xg(),
            Wg(),
            Jg()
    }
    function Jg() {
        if (ht !== 5)
            return !1;
        var e = Ui
            , n = wf;
        wf = 0;
        var a = Qc(ii)
            , r = k.T
            , c = F.p;
        try {
            F.p = 32 > a ? 32 : a,
                k.T = null,
                a = Rf,
                Rf = null;
            var f = Ui
                , m = ii;
            if (ht = 0,
                va = Ui = null,
                ii = 0,
                (Me & 6) !== 0)
                throw Error(l(331));
            var y = Me;
            if (Me |= 4,
                Mg(f.current),
                Dg(f, f.current, m, a),
                Me = y,
                Ul(0, !1),
                ie && typeof ie.onPostCommitFiberRoot == "function")
                try {
                    ie.onPostCommitFiberRoot(ae, f)
                } catch { }
            return !0
        } finally {
            F.p = c,
                k.T = r,
                Zg(e, n)
        }
    }
    function $g(e, n, a) {
        n = ln(a, n),
            n = lf(e.stateNode, n, 2),
            e = Ai(e, n, 2),
            e !== null && (nl(e, 2),
                Mn(e))
    }
    function Ue(e, n, a) {
        if (e.tag === 3)
            $g(e, e, a);
        else
            for (; n !== null;) {
                if (n.tag === 3) {
                    $g(n, e, a);
                    break
                } else if (n.tag === 1) {
                    var r = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Li === null || !Li.has(r))) {
                        e = ln(a, e),
                            a = eg(2),
                            r = Ai(n, a, 2),
                            r !== null && (tg(a, r, n, e),
                                nl(r, 2),
                                Mn(r));
                        break
                    }
                }
                n = n.return
            }
    }
    function Of(e, n, a) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new fb;
            var c = new Set;
            r.set(n, c)
        } else
            c = r.get(n),
                c === void 0 && (c = new Set,
                    r.set(n, c));
        c.has(a) || (Cf = !0,
            c.add(a),
            e = gb.bind(null, e, n, a),
            n.then(e, e))
    }
    function gb(e, n, a) {
        var r = e.pingCache;
        r !== null && r.delete(n),
            e.pingedLanes |= e.suspendedLanes & a,
            e.warmLanes &= ~a,
            Pe === e && (Ce & a) === a && (tt === 4 || tt === 3 && (Ce & 62914560) === Ce && 300 > bt() - vo ? (Me & 2) === 0 && Sa(e, 0) : Tf |= a,
                ya === Ce && (ya = 0)),
            Mn(e)
    }
    function e_(e, n) {
        n === 0 && (n = An()),
            e = gs(e, n),
            e !== null && (nl(e, n),
                Mn(e))
    }
    function _b(e) {
        var n = e.memoizedState
            , a = 0;
        n !== null && (a = n.retryLane),
            e_(e, a)
    }
    function yb(e, n) {
        var a = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var r = e.stateNode
                    , c = e.memoizedState;
                c !== null && (a = c.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            case 22:
                r = e.stateNode._retryCache;
                break;
            default:
                throw Error(l(314))
        }
        r !== null && r.delete(n),
            e_(e, a)
    }
    function vb(e, n) {
        return vi(e, n)
    }
    var wo = null
        , ba = null
        , If = !1
        , Ro = !1
        , Mf = !1
        , zi = 0;
    function Mn(e) {
        e !== ba && e.next === null && (ba === null ? wo = ba = e : ba = ba.next = e),
            Ro = !0,
            If || (If = !0,
                Eb())
    }
    function Ul(e, n) {
        if (!Mf && Ro) {
            Mf = !0;
            do
                for (var a = !1, r = wo; r !== null;) {
                    if (e !== 0) {
                        var c = r.pendingLanes;
                        if (c === 0)
                            var f = 0;
                        else {
                            var m = r.suspendedLanes
                                , y = r.pingedLanes;
                            f = (1 << 31 - st(42 | e) + 1) - 1,
                                f &= c & ~(m & ~y),
                                f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (a = !0,
                            s_(r, f))
                    } else
                        f = Ce,
                            f = rt(r, r === Pe ? f : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                            (f & 3) === 0 || _n(r, f) || (a = !0,
                                s_(r, f));
                    r = r.next
                }
            while (a);
            Mf = !1
        }
    }
    function Sb() {
        t_()
    }
    function t_() {
        Ro = If = !1;
        var e = 0;
        zi !== 0 && Ob() && (e = zi);
        for (var n = bt(), a = null, r = wo; r !== null;) {
            var c = r.next
                , f = n_(r, n);
            f === 0 ? (r.next = null,
                a === null ? wo = c : a.next = c,
                c === null && (ba = a)) : (a = r,
                    (e !== 0 || (f & 3) !== 0) && (Ro = !0)),
                r = c
        }
        ht !== 0 && ht !== 5 || Ul(e),
            zi !== 0 && (zi = 0)
    }
    function n_(e, n) {
        for (var a = e.suspendedLanes, r = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f;) {
            var m = 31 - st(f)
                , y = 1 << m
                , b = c[m];
            b === -1 ? ((y & a) === 0 || (y & r) !== 0) && (c[m] = tl(y, n)) : b <= n && (e.expiredLanes |= y),
                f &= ~y
        }
        if (n = Pe,
            a = Ce,
            a = rt(e, e === n ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
            r = e.callbackNode,
            a === 0 || e === n && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null)
            return r !== null && r !== null && cs(r),
                e.callbackNode = null,
                e.callbackPriority = 0;
        if ((a & 3) === 0 || _n(e, a)) {
            if (n = a & -a,
                n === e.callbackPriority)
                return n;
            switch (r !== null && cs(r),
            Qc(a)) {
                case 2:
                case 8:
                    a = Nn;
                    break;
                case 32:
                    a = Ot;
                    break;
                case 268435456:
                    a = us;
                    break;
                default:
                    a = Ot
            }
            return r = i_.bind(null, e),
                a = vi(a, r),
                e.callbackPriority = n,
                e.callbackNode = a,
                n
        }
        return r !== null && r !== null && cs(r),
            e.callbackPriority = 2,
            e.callbackNode = null,
            2
    }
    function i_(e, n) {
        if (ht !== 0 && ht !== 5)
            return e.callbackNode = null,
                e.callbackPriority = 0,
                null;
        var a = e.callbackNode;
        if (xo() && e.callbackNode !== a)
            return null;
        var r = Ce;
        return r = rt(e, e === Pe ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
            r === 0 ? null : (zg(e, r, n),
                n_(e, bt()),
                e.callbackNode != null && e.callbackNode === a ? i_.bind(null, e) : null)
    }
    function s_(e, n) {
        if (xo())
            return null;
        zg(e, n, !0)
    }
    function Eb() {
        Mb(function () {
            (Me & 6) !== 0 ? vi(Bn, Sb) : t_()
        })
    }
    function kf() {
        if (zi === 0) {
            var e = ra;
            e === 0 && (e = gn,
                gn <<= 1,
                (gn & 261888) === 0 && (gn = 256)),
                zi = e
        }
        return zi
    }
    function a_(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : kr("" + e)
    }
    function l_(e, n) {
        var a = n.ownerDocument.createElement("input");
        return a.name = n.name,
            a.value = n.value,
            e.id && a.setAttribute("form", e.id),
            n.parentNode.insertBefore(a, n),
            e = new FormData(e),
            a.parentNode.removeChild(a),
            e
    }
    function bb(e, n, a, r, c) {
        if (n === "submit" && a && a.stateNode === c) {
            var f = a_((c[Lt] || null).action)
                , m = r.submitter;
            m && (n = (n = m[Lt] || null) ? a_(n.formAction) : m.getAttribute("formAction"),
                n !== null && (f = n,
                    m = null));
            var y = new zr("action", "action", null, r, c);
            e.push({
                event: y,
                listeners: [{
                    instance: null,
                    listener: function () {
                        if (r.defaultPrevented) {
                            if (zi !== 0) {
                                var b = m ? l_(c, m) : new FormData(c);
                                $u(a, {
                                    pending: !0,
                                    data: b,
                                    method: c.method,
                                    action: f
                                }, null, b)
                            }
                        } else
                            typeof f == "function" && (y.preventDefault(),
                                b = m ? l_(c, m) : new FormData(c),
                                $u(a, {
                                    pending: !0,
                                    data: b,
                                    method: c.method,
                                    action: f
                                }, f, b))
                    },
                    currentTarget: c
                }]
            })
        }
    }
    for (var Lf = 0; Lf < gu.length; Lf++) {
        var Uf = gu[Lf]
            , Cb = Uf.toLowerCase()
            , Tb = Uf[0].toUpperCase() + Uf.slice(1);
        yn(Cb, "on" + Tb)
    }
    yn(jm, "onAnimationEnd"),
        yn(zm, "onAnimationIteration"),
        yn(Hm, "onAnimationStart"),
        yn("dblclick", "onDoubleClick"),
        yn("focusin", "onFocus"),
        yn("focusout", "onBlur"),
        yn(B0, "onTransitionRun"),
        yn(P0, "onTransitionStart"),
        yn(q0, "onTransitionCancel"),
        yn(Bm, "onTransitionEnd"),
        Qs("onMouseEnter", ["mouseout", "mouseover"]),
        Qs("onMouseLeave", ["mouseout", "mouseover"]),
        Qs("onPointerEnter", ["pointerout", "pointerover"]),
        Qs("onPointerLeave", ["pointerout", "pointerover"]),
        hs("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        hs("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
        hs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        hs("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        hs("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        hs("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var jl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
        , xb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));
    function r_(e, n) {
        n = (n & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var r = e[a]
                , c = r.event;
            r = r.listeners;
            e: {
                var f = void 0;
                if (n)
                    for (var m = r.length - 1; 0 <= m; m--) {
                        var y = r[m]
                            , b = y.instance
                            , N = y.currentTarget;
                        if (y = y.listener,
                            b !== f && c.isPropagationStopped())
                            break e;
                        f = y,
                            c.currentTarget = N;
                        try {
                            f(c)
                        } catch (L) {
                            Pr(L)
                        }
                        c.currentTarget = null,
                            f = b
                    }
                else
                    for (m = 0; m < r.length; m++) {
                        if (y = r[m],
                            b = y.instance,
                            N = y.currentTarget,
                            y = y.listener,
                            b !== f && c.isPropagationStopped())
                            break e;
                        f = y,
                            c.currentTarget = N;
                        try {
                            f(c)
                        } catch (L) {
                            Pr(L)
                        }
                        c.currentTarget = null,
                            f = b
                    }
            }
        }
    }
    function Ee(e, n) {
        var a = n[Kc];
        a === void 0 && (a = n[Kc] = new Set);
        var r = e + "__bubble";
        a.has(r) || (o_(n, e, 2, !1),
            a.add(r))
    }
    function jf(e, n, a) {
        var r = 0;
        n && (r |= 4),
            o_(a, e, r, n)
    }
    var No = "_reactListening" + Math.random().toString(36).slice(2);
    function zf(e) {
        if (!e[No]) {
            e[No] = !0,
                tm.forEach(function (a) {
                    a !== "selectionchange" && (xb.has(a) || jf(a, !1, e),
                        jf(a, !0, e))
                });
            var n = e.nodeType === 9 ? e : e.ownerDocument;
            n === null || n[No] || (n[No] = !0,
                jf("selectionchange", !1, n))
        }
    }
    function o_(e, n, a, r) {
        switch (j_(n)) {
            case 2:
                var c = $b;
                break;
            case 8:
                c = e1;
                break;
            default:
                c = $f
        }
        a = c.bind(null, n, a, e),
            c = void 0,
            !iu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0),
            r ? c !== void 0 ? e.addEventListener(n, a, {
                capture: !0,
                passive: c
            }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
                passive: c
            }) : e.addEventListener(n, a, !1)
    }
    function Hf(e, n, a, r, c) {
        var f = r;
        if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
            e: for (; ;) {
                if (r === null)
                    return;
                var m = r.tag;
                if (m === 3 || m === 4) {
                    var y = r.stateNode.containerInfo;
                    if (y === c)
                        break;
                    if (m === 4)
                        for (m = r.return; m !== null;) {
                            var b = m.tag;
                            if ((b === 3 || b === 4) && m.stateNode.containerInfo === c)
                                return;
                            m = m.return
                        }
                    for (; y !== null;) {
                        if (m = Gs(y),
                            m === null)
                            return;
                        if (b = m.tag,
                            b === 5 || b === 6 || b === 26 || b === 27) {
                            r = f = m;
                            continue e
                        }
                        y = y.parentNode
                    }
                }
                r = r.return
            }
        dm(function () {
            var N = f
                , L = tu(a)
                , H = [];
            e: {
                var A = Pm.get(e);
                if (A !== void 0) {
                    var O = zr
                        , W = e;
                    switch (e) {
                        case "keypress":
                            if (Ur(a) === 0)
                                break e;
                        case "keydown":
                        case "keyup":
                            O = y0;
                            break;
                        case "focusin":
                            W = "focus",
                                O = ru;
                            break;
                        case "focusout":
                            W = "blur",
                                O = ru;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            O = ru;
                            break;
                        case "click":
                            if (a.button === 2)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            O = gm;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            O = l0;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            O = E0;
                            break;
                        case jm:
                        case zm:
                        case Hm:
                            O = c0;
                            break;
                        case Bm:
                            O = C0;
                            break;
                        case "scroll":
                        case "scrollend":
                            O = s0;
                            break;
                        case "wheel":
                            O = x0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            O = f0;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            O = ym;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            O = R0
                    }
                    var le = (n & 4) !== 0
                        , He = !le && (e === "scroll" || e === "scrollend")
                        , w = le ? A !== null ? A + "Capture" : null : A;
                    le = [];
                    for (var C = N, R; C !== null;) {
                        var j = C;
                        if (R = j.stateNode,
                            j = j.tag,
                            j !== 5 && j !== 26 && j !== 27 || R === null || w === null || (j = al(C, w),
                                j != null && le.push(zl(C, j, R))),
                            He)
                            break;
                        C = C.return
                    }
                    0 < le.length && (A = new O(A, W, null, a, L),
                        H.push({
                            event: A,
                            listeners: le
                        }))
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (A = e === "mouseover" || e === "pointerover",
                        O = e === "mouseout" || e === "pointerout",
                        A && a !== eu && (W = a.relatedTarget || a.fromElement) && (Gs(W) || W[Vs]))
                        break e;
                    if ((O || A) && (A = L.window === L ? L : (A = L.ownerDocument) ? A.defaultView || A.parentWindow : window,
                        O ? (W = a.relatedTarget || a.toElement,
                            O = N,
                            W = W ? Gs(W) : null,
                            W !== null && (He = u(W),
                                le = W.tag,
                                W !== He || le !== 5 && le !== 27 && le !== 6) && (W = null)) : (O = null,
                                    W = N),
                        O !== W)) {
                        if (le = gm,
                            j = "onMouseLeave",
                            w = "onMouseEnter",
                            C = "mouse",
                            (e === "pointerout" || e === "pointerover") && (le = ym,
                                j = "onPointerLeave",
                                w = "onPointerEnter",
                                C = "pointer"),
                            He = O == null ? A : sl(O),
                            R = W == null ? A : sl(W),
                            A = new le(j, C + "leave", O, a, L),
                            A.target = He,
                            A.relatedTarget = R,
                            j = null,
                            Gs(L) === N && (le = new le(w, C + "enter", W, a, L),
                                le.target = R,
                                le.relatedTarget = He,
                                j = le),
                            He = j,
                            O && W)
                            t: {
                                for (le = wb,
                                    w = O,
                                    C = W,
                                    R = 0,
                                    j = w; j; j = le(j))
                                    R++;
                                j = 0;
                                for (var te = C; te; te = le(te))
                                    j++;
                                for (; 0 < R - j;)
                                    w = le(w),
                                        R--;
                                for (; 0 < j - R;)
                                    C = le(C),
                                        j--;
                                for (; R--;) {
                                    if (w === C || C !== null && w === C.alternate) {
                                        le = w;
                                        break t
                                    }
                                    w = le(w),
                                        C = le(C)
                                }
                                le = null
                            }
                        else
                            le = null;
                        O !== null && c_(H, A, O, le, !1),
                            W !== null && He !== null && c_(H, He, W, le, !0)
                    }
                }
                e: {
                    if (A = N ? sl(N) : window,
                        O = A.nodeName && A.nodeName.toLowerCase(),
                        O === "select" || O === "input" && A.type === "file")
                        var De = wm;
                    else if (Tm(A))
                        if (Rm)
                            De = j0;
                        else {
                            De = L0;
                            var Z = k0
                        }
                    else
                        O = A.nodeName,
                            !O || O.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? N && $c(N.elementType) && (De = wm) : De = U0;
                    if (De && (De = De(e, N))) {
                        xm(H, De, a, L);
                        break e
                    }
                    Z && Z(e, A, N),
                        e === "focusout" && N && A.type === "number" && N.memoizedProps.value != null && Jc(A, "number", A.value)
                }
                switch (Z = N ? sl(N) : window,
                e) {
                    case "focusin":
                        (Tm(Z) || Z.contentEditable === "true") && ($s = Z,
                            du = N,
                            dl = null);
                        break;
                    case "focusout":
                        dl = du = $s = null;
                        break;
                    case "mousedown":
                        mu = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        mu = !1,
                            Lm(H, a, L);
                        break;
                    case "selectionchange":
                        if (H0)
                            break;
                    case "keydown":
                    case "keyup":
                        Lm(H, a, L)
                }
                var pe;
                if (cu)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var Te = "onCompositionStart";
                                break e;
                            case "compositionend":
                                Te = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                Te = "onCompositionUpdate";
                                break e
                        }
                        Te = void 0
                    }
                else
                    Js ? bm(e, a) && (Te = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Te = "onCompositionStart");
                Te && (vm && a.locale !== "ko" && (Js || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Js && (pe = mm()) : (bi = L,
                    su = "value" in bi ? bi.value : bi.textContent,
                    Js = !0)),
                    Z = Ao(N, Te),
                    0 < Z.length && (Te = new _m(Te, e, null, a, L),
                        H.push({
                            event: Te,
                            listeners: Z
                        }),
                        pe ? Te.data = pe : (pe = Cm(a),
                            pe !== null && (Te.data = pe)))),
                    (pe = A0 ? D0(e, a) : O0(e, a)) && (Te = Ao(N, "onBeforeInput"),
                        0 < Te.length && (Z = new _m("onBeforeInput", "beforeinput", null, a, L),
                            H.push({
                                event: Z,
                                listeners: Te
                            }),
                            Z.data = pe)),
                    bb(H, e, N, a, L)
            }
            r_(H, n)
        })
    }
    function zl(e, n, a) {
        return {
            instance: e,
            listener: n,
            currentTarget: a
        }
    }
    function Ao(e, n) {
        for (var a = n + "Capture", r = []; e !== null;) {
            var c = e
                , f = c.stateNode;
            if (c = c.tag,
                c !== 5 && c !== 26 && c !== 27 || f === null || (c = al(e, a),
                    c != null && r.unshift(zl(e, c, f)),
                    c = al(e, n),
                    c != null && r.push(zl(e, c, f))),
                e.tag === 3)
                return r;
            e = e.return
        }
        return []
    }
    function wb(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function c_(e, n, a, r, c) {
        for (var f = n._reactName, m = []; a !== null && a !== r;) {
            var y = a
                , b = y.alternate
                , N = y.stateNode;
            if (y = y.tag,
                b !== null && b === r)
                break;
            y !== 5 && y !== 26 && y !== 27 || N === null || (b = N,
                c ? (N = al(a, f),
                    N != null && m.unshift(zl(a, N, b))) : c || (N = al(a, f),
                        N != null && m.push(zl(a, N, b)))),
                a = a.return
        }
        m.length !== 0 && e.push({
            event: n,
            listeners: m
        })
    }
    var Rb = /\r\n?/g
        , Nb = /\u0000|\uFFFD/g;
    function u_(e) {
        return (typeof e == "string" ? e : "" + e).replace(Rb, `
`).replace(Nb, "")
    }
    function f_(e, n) {
        return n = u_(n),
            u_(e) === n
    }
    function ze(e, n, a, r, c, f) {
        switch (a) {
            case "children":
                typeof r == "string" ? n === "body" || n === "textarea" && r === "" || Xs(e, r) : (typeof r == "number" || typeof r == "bigint") && n !== "body" && Xs(e, "" + r);
                break;
            case "className":
                Ir(e, "class", r);
                break;
            case "tabIndex":
                Ir(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ir(e, a, r);
                break;
            case "style":
                fm(e, r, f);
                break;
            case "data":
                if (n !== "object") {
                    Ir(e, "data", r);
                    break
                }
            case "src":
            case "href":
                if (r === "" && (n !== "a" || a !== "href")) {
                    e.removeAttribute(a);
                    break
                }
                if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                r = kr("" + r),
                    e.setAttribute(a, r);
                break;
            case "action":
            case "formAction":
                if (typeof r == "function") {
                    e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else
                    typeof f == "function" && (a === "formAction" ? (n !== "input" && ze(e, n, "name", c.name, c, null),
                        ze(e, n, "formEncType", c.formEncType, c, null),
                        ze(e, n, "formMethod", c.formMethod, c, null),
                        ze(e, n, "formTarget", c.formTarget, c, null)) : (ze(e, n, "encType", c.encType, c, null),
                            ze(e, n, "method", c.method, c, null),
                            ze(e, n, "target", c.target, c, null)));
                if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                r = kr("" + r),
                    e.setAttribute(a, r);
                break;
            case "onClick":
                r != null && (e.onclick = qn);
                break;
            case "onScroll":
                r != null && Ee("scroll", e);
                break;
            case "onScrollEnd":
                r != null && Ee("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r))
                        throw Error(l(61));
                    if (a = r.__html,
                        a != null) {
                        if (c.children != null)
                            throw Error(l(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "multiple":
                e.multiple = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "muted":
                e.muted = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                a = kr("" + r),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                break;
            case "capture":
            case "download":
                r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
                break;
            case "popover":
                Ee("beforetoggle", e),
                    Ee("toggle", e),
                    Or(e, "popover", r);
                break;
            case "xlinkActuate":
                Pn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                Pn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                Pn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                Pn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                Pn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                Pn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                Pn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                Pn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                Pn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                Or(e, "is", r);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = n0.get(a) || a,
                    Or(e, a, r))
        }
    }
    function Bf(e, n, a, r, c, f) {
        switch (a) {
            case "style":
                fm(e, r, f);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r))
                        throw Error(l(61));
                    if (a = r.__html,
                        a != null) {
                        if (c.children != null)
                            throw Error(l(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof r == "string" ? Xs(e, r) : (typeof r == "number" || typeof r == "bigint") && Xs(e, "" + r);
                break;
            case "onScroll":
                r != null && Ee("scroll", e);
                break;
            case "onScrollEnd":
                r != null && Ee("scrollend", e);
                break;
            case "onClick":
                r != null && (e.onclick = qn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!nm.hasOwnProperty(a))
                    e: {
                        if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"),
                            n = a.slice(2, c ? a.length - 7 : void 0),
                            f = e[Lt] || null,
                            f = f != null ? f[a] : null,
                            typeof f == "function" && e.removeEventListener(n, f, c),
                            typeof r == "function")) {
                            typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                                e.addEventListener(n, r, c);
                            break e
                        }
                        a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : Or(e, a, r)
                    }
        }
    }
    function Rt(e, n, a) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Ee("error", e),
                    Ee("load", e);
                var r = !1, c = !1, f;
                for (f in a)
                    if (a.hasOwnProperty(f)) {
                        var m = a[f];
                        if (m != null)
                            switch (f) {
                                case "src":
                                    r = !0;
                                    break;
                                case "srcSet":
                                    c = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(l(137, n));
                                default:
                                    ze(e, n, f, m, a, null)
                            }
                    }
                c && ze(e, n, "srcSet", a.srcSet, a, null),
                    r && ze(e, n, "src", a.src, a, null);
                return;
            case "input":
                Ee("invalid", e);
                var y = f = m = c = null
                    , b = null
                    , N = null;
                for (r in a)
                    if (a.hasOwnProperty(r)) {
                        var L = a[r];
                        if (L != null)
                            switch (r) {
                                case "name":
                                    c = L;
                                    break;
                                case "type":
                                    m = L;
                                    break;
                                case "checked":
                                    b = L;
                                    break;
                                case "defaultChecked":
                                    N = L;
                                    break;
                                case "value":
                                    f = L;
                                    break;
                                case "defaultValue":
                                    y = L;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (L != null)
                                        throw Error(l(137, n));
                                    break;
                                default:
                                    ze(e, n, r, L, a, null)
                            }
                    }
                rm(e, f, y, b, N, m, c, !1);
                return;
            case "select":
                Ee("invalid", e),
                    r = m = f = null;
                for (c in a)
                    if (a.hasOwnProperty(c) && (y = a[c],
                        y != null))
                        switch (c) {
                            case "value":
                                f = y;
                                break;
                            case "defaultValue":
                                m = y;
                                break;
                            case "multiple":
                                r = y;
                            default:
                                ze(e, n, c, y, a, null)
                        }
                n = f,
                    a = m,
                    e.multiple = !!r,
                    n != null ? Ks(e, !!r, n, !1) : a != null && Ks(e, !!r, a, !0);
                return;
            case "textarea":
                Ee("invalid", e),
                    f = c = r = null;
                for (m in a)
                    if (a.hasOwnProperty(m) && (y = a[m],
                        y != null))
                        switch (m) {
                            case "value":
                                r = y;
                                break;
                            case "defaultValue":
                                c = y;
                                break;
                            case "children":
                                f = y;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (y != null)
                                    throw Error(l(91));
                                break;
                            default:
                                ze(e, n, m, y, a, null)
                        }
                cm(e, r, c, f);
                return;
            case "option":
                for (b in a)
                    a.hasOwnProperty(b) && (r = a[b],
                        r != null) && (b === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : ze(e, n, b, r, a, null));
                return;
            case "dialog":
                Ee("beforetoggle", e),
                    Ee("toggle", e),
                    Ee("cancel", e),
                    Ee("close", e);
                break;
            case "iframe":
            case "object":
                Ee("load", e);
                break;
            case "video":
            case "audio":
                for (r = 0; r < jl.length; r++)
                    Ee(jl[r], e);
                break;
            case "image":
                Ee("error", e),
                    Ee("load", e);
                break;
            case "details":
                Ee("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Ee("error", e),
                    Ee("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (N in a)
                    if (a.hasOwnProperty(N) && (r = a[N],
                        r != null))
                        switch (N) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(l(137, n));
                            default:
                                ze(e, n, N, r, a, null)
                        }
                return;
            default:
                if ($c(n)) {
                    for (L in a)
                        a.hasOwnProperty(L) && (r = a[L],
                            r !== void 0 && Bf(e, n, L, r, a, void 0));
                    return
                }
        }
        for (y in a)
            a.hasOwnProperty(y) && (r = a[y],
                r != null && ze(e, n, y, r, a, null))
    }
    function Ab(e, n, a, r) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var c = null
                    , f = null
                    , m = null
                    , y = null
                    , b = null
                    , N = null
                    , L = null;
                for (O in a) {
                    var H = a[O];
                    if (a.hasOwnProperty(O) && H != null)
                        switch (O) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                b = H;
                            default:
                                r.hasOwnProperty(O) || ze(e, n, O, null, r, H)
                        }
                }
                for (var A in r) {
                    var O = r[A];
                    if (H = a[A],
                        r.hasOwnProperty(A) && (O != null || H != null))
                        switch (A) {
                            case "type":
                                f = O;
                                break;
                            case "name":
                                c = O;
                                break;
                            case "checked":
                                N = O;
                                break;
                            case "defaultChecked":
                                L = O;
                                break;
                            case "value":
                                m = O;
                                break;
                            case "defaultValue":
                                y = O;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (O != null)
                                    throw Error(l(137, n));
                                break;
                            default:
                                O !== H && ze(e, n, A, O, r, H)
                        }
                }
                Zc(e, m, y, b, N, L, f, c);
                return;
            case "select":
                O = m = y = A = null;
                for (f in a)
                    if (b = a[f],
                        a.hasOwnProperty(f) && b != null)
                        switch (f) {
                            case "value":
                                break;
                            case "multiple":
                                O = b;
                            default:
                                r.hasOwnProperty(f) || ze(e, n, f, null, r, b)
                        }
                for (c in r)
                    if (f = r[c],
                        b = a[c],
                        r.hasOwnProperty(c) && (f != null || b != null))
                        switch (c) {
                            case "value":
                                A = f;
                                break;
                            case "defaultValue":
                                y = f;
                                break;
                            case "multiple":
                                m = f;
                            default:
                                f !== b && ze(e, n, c, f, r, b)
                        }
                n = y,
                    a = m,
                    r = O,
                    A != null ? Ks(e, !!a, A, !1) : !!r != !!a && (n != null ? Ks(e, !!a, n, !0) : Ks(e, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                O = A = null;
                for (y in a)
                    if (c = a[y],
                        a.hasOwnProperty(y) && c != null && !r.hasOwnProperty(y))
                        switch (y) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                ze(e, n, y, null, r, c)
                        }
                for (m in r)
                    if (c = r[m],
                        f = a[m],
                        r.hasOwnProperty(m) && (c != null || f != null))
                        switch (m) {
                            case "value":
                                A = c;
                                break;
                            case "defaultValue":
                                O = c;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (c != null)
                                    throw Error(l(91));
                                break;
                            default:
                                c !== f && ze(e, n, m, c, r, f)
                        }
                om(e, A, O);
                return;
            case "option":
                for (var W in a)
                    A = a[W],
                        a.hasOwnProperty(W) && A != null && !r.hasOwnProperty(W) && (W === "selected" ? e.selected = !1 : ze(e, n, W, null, r, A));
                for (b in r)
                    A = r[b],
                        O = a[b],
                        r.hasOwnProperty(b) && A !== O && (A != null || O != null) && (b === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : ze(e, n, b, A, r, O));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var le in a)
                    A = a[le],
                        a.hasOwnProperty(le) && A != null && !r.hasOwnProperty(le) && ze(e, n, le, null, r, A);
                for (N in r)
                    if (A = r[N],
                        O = a[N],
                        r.hasOwnProperty(N) && A !== O && (A != null || O != null))
                        switch (N) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (A != null)
                                    throw Error(l(137, n));
                                break;
                            default:
                                ze(e, n, N, A, r, O)
                        }
                return;
            default:
                if ($c(n)) {
                    for (var He in a)
                        A = a[He],
                            a.hasOwnProperty(He) && A !== void 0 && !r.hasOwnProperty(He) && Bf(e, n, He, void 0, r, A);
                    for (L in r)
                        A = r[L],
                            O = a[L],
                            !r.hasOwnProperty(L) || A === O || A === void 0 && O === void 0 || Bf(e, n, L, A, r, O);
                    return
                }
        }
        for (var w in a)
            A = a[w],
                a.hasOwnProperty(w) && A != null && !r.hasOwnProperty(w) && ze(e, n, w, null, r, A);
        for (H in r)
            A = r[H],
                O = a[H],
                !r.hasOwnProperty(H) || A === O || A == null && O == null || ze(e, n, H, A, r, O)
    }
    function h_(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }
    function Db() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, n = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
                var c = a[r]
                    , f = c.transferSize
                    , m = c.initiatorType
                    , y = c.duration;
                if (f && y && h_(m)) {
                    for (m = 0,
                        y = c.responseEnd,
                        r += 1; r < a.length; r++) {
                        var b = a[r]
                            , N = b.startTime;
                        if (N > y)
                            break;
                        var L = b.transferSize
                            , H = b.initiatorType;
                        L && h_(H) && (b = b.responseEnd,
                            m += L * (b < y ? 1 : (y - N) / (b - N)))
                    }
                    if (--r,
                        n += 8 * (f + m) / (c.duration / 1e3),
                        e++,
                        10 < e)
                        break
                }
            }
            if (0 < e)
                return n / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
            typeof e == "number") ? e : 5
    }
    var Pf = null
        , qf = null;
    function Do(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function d_(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }
    function m_(e, n) {
        if (e === 0)
            switch (n) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
            }
        return e === 1 && n === "foreignObject" ? 0 : e
    }
    function Vf(e, n) {
        return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var Gf = null;
    function Ob() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Gf ? !1 : (Gf = e,
            !0) : (Gf = null,
                !1)
    }
    var p_ = typeof setTimeout == "function" ? setTimeout : void 0
        , Ib = typeof clearTimeout == "function" ? clearTimeout : void 0
        , g_ = typeof Promise == "function" ? Promise : void 0
        , Mb = typeof queueMicrotask == "function" ? queueMicrotask : typeof g_ < "u" ? function (e) {
            return g_.resolve(null).then(e).catch(kb)
        }
            : p_;
    function kb(e) {
        setTimeout(function () {
            throw e
        })
    }
    function Hi(e) {
        return e === "head"
    }
    function __(e, n) {
        var a = n
            , r = 0;
        do {
            var c = a.nextSibling;
            if (e.removeChild(a),
                c && c.nodeType === 8)
                if (a = c.data,
                    a === "/$" || a === "/&") {
                    if (r === 0) {
                        e.removeChild(c),
                            wa(n);
                        return
                    }
                    r--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    r++;
                else if (a === "html")
                    Hl(e.ownerDocument.documentElement);
                else if (a === "head") {
                    a = e.ownerDocument.head,
                        Hl(a);
                    for (var f = a.firstChild; f;) {
                        var m = f.nextSibling
                            , y = f.nodeName;
                        f[il] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f),
                            f = m
                    }
                } else
                    a === "body" && Hl(e.ownerDocument.body);
            a = c
        } while (a);
        wa(n)
    }
    function y_(e, n) {
        var a = e;
        e = 0;
        do {
            var r = a.nextSibling;
            if (a.nodeType === 1 ? n ? (a._stashedDisplay = a.style.display,
                a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
                    a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (n ? (a._stashedText = a.nodeValue,
                        a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
                r && r.nodeType === 8)
                if (a = r.data,
                    a === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
            a = r
        } while (a)
    }
    function Ff(e) {
        var n = e.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
            var a = n;
            switch (n = n.nextSibling,
            a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Ff(a),
                        Xc(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet")
                        continue
            }
            e.removeChild(a)
        }
    }
    function Lb(e, n, a, r) {
        for (; e.nodeType === 1;) {
            var c = a;
            if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (r) {
                if (!e[il])
                    switch (n) {
                        case "meta":
                            if (!e.hasAttribute("itemprop"))
                                break;
                            return e;
                        case "link":
                            if (f = e.getAttribute("rel"),
                                f === "stylesheet" && e.hasAttribute("data-precedence"))
                                break;
                            if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                                break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence"))
                                break;
                            return e;
                        case "script":
                            if (f = e.getAttribute("src"),
                                (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                break;
                            return e;
                        default:
                            return e
                    }
            } else if (n === "input" && e.type === "hidden") {
                var f = c.name == null ? null : "" + c.name;
                if (c.type === "hidden" && e.getAttribute("name") === f)
                    return e
            } else
                return e;
            if (e = fn(e.nextSibling),
                e === null)
                break
        }
        return null
    }
    function Ub(e, n, a) {
        if (n === "")
            return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = fn(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function v_(e, n) {
        for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = fn(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function Yf(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Qf(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function jb(e, n) {
        var a = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = n;
        else if (e.data !== "$?" || a.readyState !== "loading")
            n();
        else {
            var r = function () {
                n(),
                    a.removeEventListener("DOMContentLoaded", r)
            };
            a.addEventListener("DOMContentLoaded", r),
                e._reactRetry = r
        }
    }
    function fn(e) {
        for (; e != null; e = e.nextSibling) {
            var n = e.nodeType;
            if (n === 1 || n === 3)
                break;
            if (n === 8) {
                if (n = e.data,
                    n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
                    break;
                if (n === "/$" || n === "/&")
                    return null
            }
        }
        return e
    }
    var Kf = null;
    function S_(e) {
        e = e.nextSibling;
        for (var n = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "/$" || a === "/&") {
                    if (n === 0)
                        return fn(e.nextSibling);
                    n--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || n++
            }
            e = e.nextSibling
        }
        return null
    }
    function E_(e) {
        e = e.previousSibling;
        for (var n = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (n === 0)
                        return e;
                    n--
                } else
                    a !== "/$" && a !== "/&" || n++
            }
            e = e.previousSibling
        }
        return null
    }
    function b_(e, n, a) {
        switch (n = Do(a),
        e) {
            case "html":
                if (e = n.documentElement,
                    !e)
                    throw Error(l(452));
                return e;
            case "head":
                if (e = n.head,
                    !e)
                    throw Error(l(453));
                return e;
            case "body":
                if (e = n.body,
                    !e)
                    throw Error(l(454));
                return e;
            default:
                throw Error(l(451))
        }
    }
    function Hl(e) {
        for (var n = e.attributes; n.length;)
            e.removeAttributeNode(n[0]);
        Xc(e)
    }
    var hn = new Map
        , C_ = new Set;
    function Oo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var si = F.d;
    F.d = {
        f: zb,
        r: Hb,
        D: Bb,
        C: Pb,
        L: qb,
        m: Vb,
        X: Fb,
        S: Gb,
        M: Yb
    };
    function zb() {
        var e = si.f()
            , n = bo();
        return e || n
    }
    function Hb(e) {
        var n = Fs(e);
        n !== null && n.tag === 5 && n.type === "form" ? Bp(n) : si.r(e)
    }
    var Ca = typeof document > "u" ? null : document;
    function T_(e, n, a) {
        var r = Ca;
        if (r && typeof n == "string" && n) {
            var c = sn(n);
            c = 'link[rel="' + e + '"][href="' + c + '"]',
                typeof a == "string" && (c += '[crossorigin="' + a + '"]'),
                C_.has(c) || (C_.add(c),
                    e = {
                        rel: e,
                        crossOrigin: a,
                        href: n
                    },
                    r.querySelector(c) === null && (n = r.createElement("link"),
                        Rt(n, "link", e),
                        _t(n),
                        r.head.appendChild(n)))
        }
    }
    function Bb(e) {
        si.D(e),
            T_("dns-prefetch", e, null)
    }
    function Pb(e, n) {
        si.C(e, n),
            T_("preconnect", e, n)
    }
    function qb(e, n, a) {
        si.L(e, n, a);
        var r = Ca;
        if (r && e && n) {
            var c = 'link[rel="preload"][as="' + sn(n) + '"]';
            n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + sn(a.imageSrcSet) + '"]',
                typeof a.imageSizes == "string" && (c += '[imagesizes="' + sn(a.imageSizes) + '"]')) : c += '[href="' + sn(e) + '"]';
            var f = c;
            switch (n) {
                case "style":
                    f = Ta(e);
                    break;
                case "script":
                    f = xa(e)
            }
            hn.has(f) || (e = v({
                rel: "preload",
                href: n === "image" && a && a.imageSrcSet ? void 0 : e,
                as: n
            }, a),
                hn.set(f, e),
                r.querySelector(c) !== null || n === "style" && r.querySelector(Bl(f)) || n === "script" && r.querySelector(Pl(f)) || (n = r.createElement("link"),
                    Rt(n, "link", e),
                    _t(n),
                    r.head.appendChild(n)))
        }
    }
    function Vb(e, n) {
        si.m(e, n);
        var a = Ca;
        if (a && e) {
            var r = n && typeof n.as == "string" ? n.as : "script"
                , c = 'link[rel="modulepreload"][as="' + sn(r) + '"][href="' + sn(e) + '"]'
                , f = c;
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    f = xa(e)
            }
            if (!hn.has(f) && (e = v({
                rel: "modulepreload",
                href: e
            }, n),
                hn.set(f, e),
                a.querySelector(c) === null)) {
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(Pl(f)))
                            return
                }
                r = a.createElement("link"),
                    Rt(r, "link", e),
                    _t(r),
                    a.head.appendChild(r)
            }
        }
    }
    function Gb(e, n, a) {
        si.S(e, n, a);
        var r = Ca;
        if (r && e) {
            var c = Ys(r).hoistableStyles
                , f = Ta(e);
            n = n || "default";
            var m = c.get(f);
            if (!m) {
                var y = {
                    loading: 0,
                    preload: null
                };
                if (m = r.querySelector(Bl(f)))
                    y.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": n
                    }, a),
                        (a = hn.get(f)) && Xf(e, a);
                    var b = m = r.createElement("link");
                    _t(b),
                        Rt(b, "link", e),
                        b._p = new Promise(function (N, L) {
                            b.onload = N,
                                b.onerror = L
                        }
                        ),
                        b.addEventListener("load", function () {
                            y.loading |= 1
                        }),
                        b.addEventListener("error", function () {
                            y.loading |= 2
                        }),
                        y.loading |= 4,
                        Io(m, n, r)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: y
                },
                    c.set(f, m)
            }
        }
    }
    function Fb(e, n) {
        si.X(e, n);
        var a = Ca;
        if (a && e) {
            var r = Ys(a).hoistableScripts
                , c = xa(e)
                , f = r.get(c);
            f || (f = a.querySelector(Pl(c)),
                f || (e = v({
                    src: e,
                    async: !0
                }, n),
                    (n = hn.get(c)) && Wf(e, n),
                    f = a.createElement("script"),
                    _t(f),
                    Rt(f, "link", e),
                    a.head.appendChild(f)),
                f = {
                    type: "script",
                    instance: f,
                    count: 1,
                    state: null
                },
                r.set(c, f))
        }
    }
    function Yb(e, n) {
        si.M(e, n);
        var a = Ca;
        if (a && e) {
            var r = Ys(a).hoistableScripts
                , c = xa(e)
                , f = r.get(c);
            f || (f = a.querySelector(Pl(c)),
                f || (e = v({
                    src: e,
                    async: !0,
                    type: "module"
                }, n),
                    (n = hn.get(c)) && Wf(e, n),
                    f = a.createElement("script"),
                    _t(f),
                    Rt(f, "link", e),
                    a.head.appendChild(f)),
                f = {
                    type: "script",
                    instance: f,
                    count: 1,
                    state: null
                },
                r.set(c, f))
        }
    }
    function x_(e, n, a, r) {
        var c = (c = he.current) ? Oo(c) : null;
        if (!c)
            throw Error(l(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ta(a.href),
                    a = Ys(c).hoistableStyles,
                    r = a.get(n),
                    r || (r = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    },
                        a.set(n, r)),
                    r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    e = Ta(a.href);
                    var f = Ys(c).hoistableStyles
                        , m = f.get(e);
                    if (m || (c = c.ownerDocument || c,
                        m = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        },
                        f.set(e, m),
                        (f = c.querySelector(Bl(e))) && !f._p && (m.instance = f,
                            m.state.loading = 5),
                        hn.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        },
                            hn.set(e, a),
                            f || Qb(c, e, a, m.state))),
                        n && r === null)
                        throw Error(l(528, ""));
                    return m
                }
                if (n && r !== null)
                    throw Error(l(529, ""));
                return null;
            case "script":
                return n = a.async,
                    a = a.src,
                    typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = xa(a),
                        a = Ys(c).hoistableScripts,
                        r = a.get(n),
                        r || (r = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        },
                            a.set(n, r)),
                        r) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
            default:
                throw Error(l(444, e))
        }
    }
    function Ta(e) {
        return 'href="' + sn(e) + '"'
    }
    function Bl(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function w_(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Qb(e, n, a, r) {
        e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? r.loading = 1 : (n = e.createElement("link"),
            r.preload = n,
            n.addEventListener("load", function () {
                return r.loading |= 1
            }),
            n.addEventListener("error", function () {
                return r.loading |= 2
            }),
            Rt(n, "link", a),
            _t(n),
            e.head.appendChild(n))
    }
    function xa(e) {
        return '[src="' + sn(e) + '"]'
    }
    function Pl(e) {
        return "script[async]" + e
    }
    function R_(e, n, a) {
        if (n.count++,
            n.instance === null)
            switch (n.type) {
                case "style":
                    var r = e.querySelector('style[data-href~="' + sn(a.href) + '"]');
                    if (r)
                        return n.instance = r,
                            _t(r),
                            r;
                    var c = v({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return r = (e.ownerDocument || e).createElement("style"),
                        _t(r),
                        Rt(r, "style", c),
                        Io(r, a.precedence, e),
                        n.instance = r;
                case "stylesheet":
                    c = Ta(a.href);
                    var f = e.querySelector(Bl(c));
                    if (f)
                        return n.state.loading |= 4,
                            n.instance = f,
                            _t(f),
                            f;
                    r = w_(a),
                        (c = hn.get(c)) && Xf(r, c),
                        f = (e.ownerDocument || e).createElement("link"),
                        _t(f);
                    var m = f;
                    return m._p = new Promise(function (y, b) {
                        m.onload = y,
                            m.onerror = b
                    }
                    ),
                        Rt(f, "link", r),
                        n.state.loading |= 4,
                        Io(f, a.precedence, e),
                        n.instance = f;
                case "script":
                    return f = xa(a.src),
                        (c = e.querySelector(Pl(f))) ? (n.instance = c,
                            _t(c),
                            c) : (r = a,
                                (c = hn.get(f)) && (r = v({}, a),
                                    Wf(r, c)),
                                e = e.ownerDocument || e,
                                c = e.createElement("script"),
                                _t(c),
                                Rt(c, "link", r),
                                e.head.appendChild(c),
                                n.instance = c);
                case "void":
                    return null;
                default:
                    throw Error(l(443, n.type))
            }
        else
            n.type === "stylesheet" && (n.state.loading & 4) === 0 && (r = n.instance,
                n.state.loading |= 4,
                Io(r, a.precedence, e));
        return n.instance
    }
    function Io(e, n, a) {
        for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = r.length ? r[r.length - 1] : null, f = c, m = 0; m < r.length; m++) {
            var y = r[m];
            if (y.dataset.precedence === n)
                f = y;
            else if (f !== c)
                break
        }
        f ? f.parentNode.insertBefore(e, f.nextSibling) : (n = a.nodeType === 9 ? a.head : a,
            n.insertBefore(e, n.firstChild))
    }
    function Xf(e, n) {
        e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
            e.title == null && (e.title = n.title)
    }
    function Wf(e, n) {
        e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
            e.integrity == null && (e.integrity = n.integrity)
    }
    var Mo = null;
    function N_(e, n, a) {
        if (Mo === null) {
            var r = new Map
                , c = Mo = new Map;
            c.set(a, r)
        } else
            c = Mo,
                r = c.get(a),
                r || (r = new Map,
                    c.set(a, r));
        if (r.has(e))
            return r;
        for (r.set(e, null),
            a = a.getElementsByTagName(e),
            c = 0; c < a.length; c++) {
            var f = a[c];
            if (!(f[il] || f[Ct] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = f.getAttribute(n) || "";
                m = e + m;
                var y = r.get(m);
                y ? y.push(f) : r.set(m, [f])
            }
        }
        return r
    }
    function A_(e, n, a) {
        e = e.ownerDocument || e,
            e.head.insertBefore(a, n === "title" ? e.querySelector("head > title") : null)
    }
    function Kb(e, n, a) {
        if (a === 1 || n.itemProp != null)
            return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
                    break;
                return !0;
            case "link":
                if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
                    break;
                return n.rel === "stylesheet" ? (e = n.disabled,
                    typeof n.precedence == "string" && e == null) : !0;
            case "script":
                if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
                    return !0
        }
        return !1
    }
    function D_(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Xb(e, n, a, r) {
        if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var c = Ta(r.href)
                    , f = n.querySelector(Bl(c));
                if (f) {
                    n = f._p,
                        n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++,
                            e = ko.bind(e),
                            n.then(e, e)),
                        a.state.loading |= 4,
                        a.instance = f,
                        _t(f);
                    return
                }
                f = n.ownerDocument || n,
                    r = w_(r),
                    (c = hn.get(c)) && Xf(r, c),
                    f = f.createElement("link"),
                    _t(f);
                var m = f;
                m._p = new Promise(function (y, b) {
                    m.onload = y,
                        m.onerror = b
                }
                ),
                    Rt(f, "link", r),
                    a.instance = f
            }
            e.stylesheets === null && (e.stylesheets = new Map),
                e.stylesheets.set(a, n),
                (n = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++,
                    a = ko.bind(e),
                    n.addEventListener("load", a),
                    n.addEventListener("error", a))
        }
    }
    var Zf = 0;
    function Wb(e, n) {
        return e.stylesheets && e.count === 0 && Uo(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount ? function (a) {
                var r = setTimeout(function () {
                    if (e.stylesheets && Uo(e, e.stylesheets),
                        e.unsuspend) {
                        var f = e.unsuspend;
                        e.unsuspend = null,
                            f()
                    }
                }, 6e4 + n);
                0 < e.imgBytes && Zf === 0 && (Zf = 62500 * Db());
                var c = setTimeout(function () {
                    if (e.waitingForImages = !1,
                        e.count === 0 && (e.stylesheets && Uo(e, e.stylesheets),
                            e.unsuspend)) {
                        var f = e.unsuspend;
                        e.unsuspend = null,
                            f()
                    }
                }, (e.imgBytes > Zf ? 50 : 800) + n);
                return e.unsuspend = a,
                    function () {
                        e.unsuspend = null,
                            clearTimeout(r),
                            clearTimeout(c)
                    }
            }
                : null
    }
    function ko() {
        if (this.count--,
            this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Uo(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                    e()
            }
        }
    }
    var Lo = null;
    function Uo(e, n) {
        e.stylesheets = null,
            e.unsuspend !== null && (e.count++,
                Lo = new Map,
                n.forEach(Zb, e),
                Lo = null,
                ko.call(e))
    }
    function Zb(e, n) {
        if (!(n.state.loading & 4)) {
            var a = Lo.get(e);
            if (a)
                var r = a.get(null);
            else {
                a = new Map,
                    Lo.set(e, a);
                for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
                    var m = c[f];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m),
                        r = m)
                }
                r && a.set(null, r)
            }
            c = n.instance,
                m = c.getAttribute("data-precedence"),
                f = a.get(m) || r,
                f === r && a.set(null, c),
                a.set(m, c),
                this.count++,
                r = ko.bind(this),
                c.addEventListener("load", r),
                c.addEventListener("error", r),
                f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
                    e.insertBefore(c, e.firstChild)),
                n.state.loading |= 4
        }
    }
    var ql = {
        $$typeof: q,
        Provider: null,
        Consumer: null,
        _currentValue: ne,
        _currentValue2: ne,
        _threadCount: 0
    };
    function Jb(e, n, a, r, c, f, m, y, b) {
        this.tag = 1,
            this.containerInfo = e,
            this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = Fc(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = Fc(0),
            this.hiddenUpdates = Fc(null),
            this.identifierPrefix = r,
            this.onUncaughtError = c,
            this.onCaughtError = f,
            this.onRecoverableError = m,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = b,
            this.incompleteTransitions = new Map
    }
    function O_(e, n, a, r, c, f, m, y, b, N, L, H) {
        return e = new Jb(e, n, a, m, b, N, L, H, y),
            n = 1,
            f === !0 && (n |= 24),
            f = Qt(3, null, null, n),
            e.current = f,
            f.stateNode = e,
            n = Au(),
            n.refCount++,
            e.pooledCache = n,
            n.refCount++,
            f.memoizedState = {
                element: r,
                isDehydrated: a,
                cache: n
            },
            Mu(f),
            e
    }
    function I_(e) {
        return e ? (e = na,
            e) : na
    }
    function M_(e, n, a, r, c, f) {
        c = I_(c),
            r.context === null ? r.context = c : r.pendingContext = c,
            r = Ni(n),
            r.payload = {
                element: a
            },
            f = f === void 0 ? null : f,
            f !== null && (r.callback = f),
            a = Ai(e, r, n),
            a !== null && (Pt(a, e, n),
                Sl(a, e, n))
    }
    function k_(e, n) {
        if (e = e.memoizedState,
            e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < n ? a : n
        }
    }
    function Jf(e, n) {
        k_(e, n),
            (e = e.alternate) && k_(e, n)
    }
    function L_(e) {
        if (e.tag === 13 || e.tag === 31) {
            var n = gs(e, 67108864);
            n !== null && Pt(n, e, 67108864),
                Jf(e, 67108864)
        }
    }
    function U_(e) {
        if (e.tag === 13 || e.tag === 31) {
            var n = Jt();
            n = Yc(n);
            var a = gs(e, n);
            a !== null && Pt(a, e, n),
                Jf(e, n)
        }
    }
    var jo = !0;
    function $b(e, n, a, r) {
        var c = k.T;
        k.T = null;
        var f = F.p;
        try {
            F.p = 2,
                $f(e, n, a, r)
        } finally {
            F.p = f,
                k.T = c
        }
    }
    function e1(e, n, a, r) {
        var c = k.T;
        k.T = null;
        var f = F.p;
        try {
            F.p = 8,
                $f(e, n, a, r)
        } finally {
            F.p = f,
                k.T = c
        }
    }
    function $f(e, n, a, r) {
        if (jo) {
            var c = eh(r);
            if (c === null)
                Hf(e, n, r, zo, a),
                    z_(e, r);
            else if (n1(c, e, n, a, r))
                r.stopPropagation();
            else if (z_(e, r),
                n & 4 && -1 < t1.indexOf(e)) {
                for (; c !== null;) {
                    var f = Fs(c);
                    if (f !== null)
                        switch (f.tag) {
                            case 3:
                                if (f = f.stateNode,
                                    f.current.memoizedState.isDehydrated) {
                                    var m = ee(f.pendingLanes);
                                    if (m !== 0) {
                                        var y = f;
                                        for (y.pendingLanes |= 2,
                                            y.entangledLanes |= 2; m;) {
                                            var b = 1 << 31 - st(m);
                                            y.entanglements[1] |= b,
                                                m &= ~b
                                        }
                                        Mn(f),
                                            (Me & 6) === 0 && (So = bt() + 500,
                                                Ul(0))
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                y = gs(f, 2),
                                    y !== null && Pt(y, f, 2),
                                    bo(),
                                    Jf(f, 2)
                        }
                    if (f = eh(r),
                        f === null && Hf(e, n, r, zo, a),
                        f === c)
                        break;
                    c = f
                }
                c !== null && r.stopPropagation()
            } else
                Hf(e, n, r, null, a)
        }
    }
    function eh(e) {
        return e = tu(e),
            th(e)
    }
    var zo = null;
    function th(e) {
        if (zo = null,
            e = Gs(e),
            e !== null) {
            var n = u(e);
            if (n === null)
                e = null;
            else {
                var a = n.tag;
                if (a === 13) {
                    if (e = h(n),
                        e !== null)
                        return e;
                    e = null
                } else if (a === 31) {
                    if (e = d(n),
                        e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated)
                        return n.tag === 3 ? n.stateNode.containerInfo : null;
                    e = null
                } else
                    n !== e && (e = null)
            }
        }
        return zo = e,
            null
    }
    function j_(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Ps()) {
                    case Bn:
                        return 2;
                    case Nn:
                        return 8;
                    case Ot:
                    case Si:
                        return 32;
                    case us:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var nh = !1
        , Bi = null
        , Pi = null
        , qi = null
        , Vl = new Map
        , Gl = new Map
        , Vi = []
        , t1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function z_(e, n) {
        switch (e) {
            case "focusin":
            case "focusout":
                Bi = null;
                break;
            case "dragenter":
            case "dragleave":
                Pi = null;
                break;
            case "mouseover":
            case "mouseout":
                qi = null;
                break;
            case "pointerover":
            case "pointerout":
                Vl.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Gl.delete(n.pointerId)
        }
    }
    function Fl(e, n, a, r, c, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: n,
            domEventName: a,
            eventSystemFlags: r,
            nativeEvent: f,
            targetContainers: [c]
        },
            n !== null && (n = Fs(n),
                n !== null && L_(n)),
            e) : (e.eventSystemFlags |= r,
                n = e.targetContainers,
                c !== null && n.indexOf(c) === -1 && n.push(c),
                e)
    }
    function n1(e, n, a, r, c) {
        switch (n) {
            case "focusin":
                return Bi = Fl(Bi, e, n, a, r, c),
                    !0;
            case "dragenter":
                return Pi = Fl(Pi, e, n, a, r, c),
                    !0;
            case "mouseover":
                return qi = Fl(qi, e, n, a, r, c),
                    !0;
            case "pointerover":
                var f = c.pointerId;
                return Vl.set(f, Fl(Vl.get(f) || null, e, n, a, r, c)),
                    !0;
            case "gotpointercapture":
                return f = c.pointerId,
                    Gl.set(f, Fl(Gl.get(f) || null, e, n, a, r, c)),
                    !0
        }
        return !1
    }
    function H_(e) {
        var n = Gs(e.target);
        if (n !== null) {
            var a = u(n);
            if (a !== null) {
                if (n = a.tag,
                    n === 13) {
                    if (n = h(a),
                        n !== null) {
                        e.blockedOn = n,
                            $d(e.priority, function () {
                                U_(a)
                            });
                        return
                    }
                } else if (n === 31) {
                    if (n = d(a),
                        n !== null) {
                        e.blockedOn = n,
                            $d(e.priority, function () {
                                U_(a)
                            });
                        return
                    }
                } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ho(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var n = e.targetContainers; 0 < n.length;) {
            var a = eh(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var r = new a.constructor(a.type, a);
                eu = r,
                    a.target.dispatchEvent(r),
                    eu = null
            } else
                return n = Fs(a),
                    n !== null && L_(n),
                    e.blockedOn = a,
                    !1;
            n.shift()
        }
        return !0
    }
    function B_(e, n, a) {
        Ho(e) && a.delete(n)
    }
    function i1() {
        nh = !1,
            Bi !== null && Ho(Bi) && (Bi = null),
            Pi !== null && Ho(Pi) && (Pi = null),
            qi !== null && Ho(qi) && (qi = null),
            Vl.forEach(B_),
            Gl.forEach(B_)
    }
    function Bo(e, n) {
        e.blockedOn === n && (e.blockedOn = null,
            nh || (nh = !0,
                s.unstable_scheduleCallback(s.unstable_NormalPriority, i1)))
    }
    var Po = null;
    function P_(e) {
        Po !== e && (Po = e,
            s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
                Po === e && (Po = null);
                for (var n = 0; n < e.length; n += 3) {
                    var a = e[n]
                        , r = e[n + 1]
                        , c = e[n + 2];
                    if (typeof r != "function") {
                        if (th(r || a) === null)
                            continue;
                        break
                    }
                    var f = Fs(a);
                    f !== null && (e.splice(n, 3),
                        n -= 3,
                        $u(f, {
                            pending: !0,
                            data: c,
                            method: a.method,
                            action: r
                        }, r, c))
                }
            }))
    }
    function wa(e) {
        function n(b) {
            return Bo(b, e)
        }
        Bi !== null && Bo(Bi, e),
            Pi !== null && Bo(Pi, e),
            qi !== null && Bo(qi, e),
            Vl.forEach(n),
            Gl.forEach(n);
        for (var a = 0; a < Vi.length; a++) {
            var r = Vi[a];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < Vi.length && (a = Vi[0],
            a.blockedOn === null);)
            H_(a),
                a.blockedOn === null && Vi.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
            a != null)
            for (r = 0; r < a.length; r += 3) {
                var c = a[r]
                    , f = a[r + 1]
                    , m = c[Lt] || null;
                if (typeof f == "function")
                    m || P_(a);
                else if (m) {
                    var y = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (c = f,
                            m = f[Lt] || null)
                            y = m.formAction;
                        else if (th(c) !== null)
                            continue
                    } else
                        y = m.action;
                    typeof y == "function" ? a[r + 1] = y : (a.splice(r, 3),
                        r -= 3),
                        P_(a)
                }
            }
    }
    function q_() {
        function e(f) {
            f.canIntercept && f.info === "react-transition" && f.intercept({
                handler: function () {
                    return new Promise(function (m) {
                        return c = m
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function n() {
            c !== null && (c(),
                c = null),
                r || setTimeout(a, 20)
        }
        function a() {
            if (!r && !navigation.transition) {
                var f = navigation.currentEntry;
                f && f.url != null && navigation.navigate(f.url, {
                    state: f.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var r = !1
                , c = null;
            return navigation.addEventListener("navigate", e),
                navigation.addEventListener("navigatesuccess", n),
                navigation.addEventListener("navigateerror", n),
                setTimeout(a, 100),
                function () {
                    r = !0,
                        navigation.removeEventListener("navigate", e),
                        navigation.removeEventListener("navigatesuccess", n),
                        navigation.removeEventListener("navigateerror", n),
                        c !== null && (c(),
                            c = null)
                }
        }
    }
    function ih(e) {
        this._internalRoot = e
    }
    qo.prototype.render = ih.prototype.render = function (e) {
        var n = this._internalRoot;
        if (n === null)
            throw Error(l(409));
        var a = n.current
            , r = Jt();
        M_(a, r, e, n, null, null)
    }
        ,
        qo.prototype.unmount = ih.prototype.unmount = function () {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var n = e.containerInfo;
                M_(e.current, 2, null, e, null, null),
                    bo(),
                    n[Vs] = null
            }
        }
        ;
    function qo(e) {
        this._internalRoot = e
    }
    qo.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var n = Jd();
            e = {
                blockedOn: null,
                target: e,
                priority: n
            };
            for (var a = 0; a < Vi.length && n !== 0 && n < Vi[a].priority; a++)
                ;
            Vi.splice(a, 0, e),
                a === 0 && H_(e)
        }
    }
        ;
    var V_ = t.version;
    if (V_ !== "19.2.4")
        throw Error(l(527, V_, "19.2.4"));
    F.findDOMNode = function (e) {
        var n = e._reactInternals;
        if (n === void 0)
            throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","),
                Error(l(268, e)));
        return e = g(n),
            e = e !== null ? S(e) : null,
            e = e === null ? null : e.stateNode,
            e
    }
        ;
    var s1 = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: k,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Vo.isDisabled && Vo.supportsFiber)
            try {
                ae = Vo.inject(s1),
                    ie = Vo
            } catch { }
    }
    return Ql.createRoot = function (e, n) {
        if (!o(e))
            throw Error(l(299));
        var a = !1
            , r = ""
            , c = Wp
            , f = Zp
            , m = Jp;
        return n != null && (n.unstable_strictMode === !0 && (a = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
            n.onCaughtError !== void 0 && (f = n.onCaughtError),
            n.onRecoverableError !== void 0 && (m = n.onRecoverableError)),
            n = O_(e, 1, !1, null, null, a, r, null, c, f, m, q_),
            e[Vs] = n.current,
            zf(e),
            new ih(n)
    }
        ,
        Ql.hydrateRoot = function (e, n, a) {
            if (!o(e))
                throw Error(l(299));
            var r = !1
                , c = ""
                , f = Wp
                , m = Zp
                , y = Jp
                , b = null;
            return a != null && (a.unstable_strictMode === !0 && (r = !0),
                a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
                a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
                a.onCaughtError !== void 0 && (m = a.onCaughtError),
                a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
                a.formState !== void 0 && (b = a.formState)),
                n = O_(e, 1, !0, n, a ?? null, r, c, b, f, m, y, q_),
                n.context = I_(null),
                a = n.current,
                r = Jt(),
                r = Yc(r),
                c = Ni(r),
                c.callback = null,
                Ai(a, c, r),
                a = r,
                n.current.lanes = a,
                nl(n, a),
                Mn(n),
                e[Vs] = n.current,
                zf(e),
                new qo(n)
        }
        ,
        Ql.version = "19.2.4",
        Ql
}
var $_;
function m1() {
    if ($_)
        return lh.exports;
    $_ = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (t) {
                console.error(t)
            }
    }
    return s(),
        lh.exports = d1(),
        lh.exports
}
var p1 = m1();
var ey = "popstate";
function ty(s) {
    return typeof s == "object" && s != null && "pathname" in s && "search" in s && "hash" in s && "state" in s && "key" in s
}
function g1(s = {}) {
    function t(l, o) {
        let u = o.state?.masked
            , { pathname: h, search: d, hash: p } = u || l.location;
        return Nh("", {
            pathname: h,
            search: d,
            hash: p
        }, o.state && o.state.usr || null, o.state && o.state.key || "default", u ? {
            pathname: l.location.pathname,
            search: l.location.search,
            hash: l.location.hash
        } : void 0)
    }
    function i(l, o) {
        return typeof o == "string" ? o : lr(o)
    }
    return y1(t, i, null, s)
}
function Je(s, t) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(t)
}
function Rn(s, t) {
    if (!s) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function _1() {
    return Math.random().toString(36).substring(2, 10)
}
function ny(s, t) {
    return {
        usr: s.state,
        key: s.key,
        idx: t,
        masked: s.unstable_mask ? {
            pathname: s.pathname,
            search: s.search,
            hash: s.hash
        } : void 0
    }
}
function Nh(s, t, i = null, l, o) {
    return {
        pathname: typeof s == "string" ? s : s.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? Pa(t) : t,
        state: i,
        key: t && t.key || l || _1(),
        unstable_mask: o
    }
}
function lr({ pathname: s = "/", search: t = "", hash: i = "" }) {
    return t && t !== "?" && (s += t.charAt(0) === "?" ? t : "?" + t),
        i && i !== "#" && (s += i.charAt(0) === "#" ? i : "#" + i),
        s
}
function Pa(s) {
    let t = {};
    if (s) {
        let i = s.indexOf("#");
        i >= 0 && (t.hash = s.substring(i),
            s = s.substring(0, i));
        let l = s.indexOf("?");
        l >= 0 && (t.search = s.substring(l),
            s = s.substring(0, l)),
            s && (t.pathname = s)
    }
    return t
}
function y1(s, t, i, l = {}) {
    let { window: o = document.defaultView, v5Compat: u = !1 } = l
        , h = o.history
        , d = "POP"
        , p = null
        , g = S();
    g == null && (g = 0,
        h.replaceState({
            ...h.state,
            idx: g
        }, ""));
    function S() {
        return (h.state || {
            idx: null
        }).idx
    }
    function v() {
        d = "POP";
        let M = S()
            , Q = M == null ? null : M - g;
        g = M,
            p && p({
                action: d,
                location: P.location,
                delta: Q
            })
    }
    function E(M, Q) {
        d = "PUSH";
        let B = ty(M) ? M : Nh(P.location, M, Q);
        g = S() + 1;
        let q = ny(B, g)
            , re = P.createHref(B.unstable_mask || B);
        try {
            h.pushState(q, "", re)
        } catch (de) {
            if (de instanceof DOMException && de.name === "DataCloneError")
                throw de;
            o.location.assign(re)
        }
        u && p && p({
            action: d,
            location: P.location,
            delta: 1
        })
    }
    function D(M, Q) {
        d = "REPLACE";
        let B = ty(M) ? M : Nh(P.location, M, Q);
        g = S();
        let q = ny(B, g)
            , re = P.createHref(B.unstable_mask || B);
        h.replaceState(q, "", re),
            u && p && p({
                action: d,
                location: P.location,
                delta: 0
            })
    }
    function I(M) {
        return v1(M)
    }
    let P = {
        get action() {
            return d
        },
        get location() {
            return s(o, h)
        },
        listen(M) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(ey, v),
                p = M,
                () => {
                    o.removeEventListener(ey, v),
                        p = null
                }
        },
        createHref(M) {
            return t(o, M)
        },
        createURL: I,
        encodeLocation(M) {
            let Q = I(M);
            return {
                pathname: Q.pathname,
                search: Q.search,
                hash: Q.hash
            }
        },
        push: E,
        replace: D,
        go(M) {
            return h.go(M)
        }
    };
    return P
}
function v1(s, t = !1) {
    let i = "http://localhost";
    typeof window < "u" && (i = window.location.origin !== "null" ? window.location.origin : window.location.href),
        Je(i, "No window.location.(origin|href) available to create URL");
    let l = typeof s == "string" ? s : lr(s);
    return l = l.replace(/ $/, "%20"),
        !t && l.startsWith("//") && (l = i + l),
        new URL(l, i)
}
function gv(s, t, i = "/") {
    return S1(s, t, i, !1)
}
function S1(s, t, i, l) {
    let o = typeof t == "string" ? Pa(t) : t
        , u = ci(o.pathname || "/", i);
    if (u == null)
        return null;
    let h = _v(s);
    E1(h);
    let d = null;
    for (let p = 0; d == null && p < h.length; ++p) {
        let g = I1(u);
        d = D1(h[p], g, l)
    }
    return d
}
function _v(s, t = [], i = [], l = "", o = !1) {
    let u = (h, d, p = o, g) => {
        let S = {
            relativePath: g === void 0 ? h.path || "" : g,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: d,
            route: h
        };
        if (S.relativePath.startsWith("/")) {
            if (!S.relativePath.startsWith(l) && p)
                return;
            Je(S.relativePath.startsWith(l), `Absolute route path "${S.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
                S.relativePath = S.relativePath.slice(l.length)
        }
        let v = Ln([l, S.relativePath])
            , E = i.concat(S);
        h.children && h.children.length > 0 && (Je(h.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`),
            _v(h.children, t, E, v, p)),
            !(h.path == null && !h.index) && t.push({
                path: v,
                score: N1(v, h.index),
                routesMeta: E
            })
    }
        ;
    return s.forEach((h, d) => {
        if (h.path === "" || !h.path?.includes("?"))
            u(h, d);
        else
            for (let p of yv(h.path))
                u(h, d, !0, p)
    }
    ),
        t
}
function yv(s) {
    let t = s.split("/");
    if (t.length === 0)
        return [];
    let [i, ...l] = t
        , o = i.endsWith("?")
        , u = i.replace(/\?$/, "");
    if (l.length === 0)
        return o ? [u, ""] : [u];
    let h = yv(l.join("/"))
        , d = [];
    return d.push(...h.map(p => p === "" ? u : [u, p].join("/"))),
        o && d.push(...h),
        d.map(p => s.startsWith("/") && p === "" ? "/" : p)
}
function E1(s) {
    s.sort((t, i) => t.score !== i.score ? i.score - t.score : A1(t.routesMeta.map(l => l.childrenIndex), i.routesMeta.map(l => l.childrenIndex)))
}
var b1 = /^:[\w-]+$/
    , C1 = 3
    , T1 = 2
    , x1 = 1
    , w1 = 10
    , R1 = -2
    , iy = s => s === "*";
function N1(s, t) {
    let i = s.split("/")
        , l = i.length;
    return i.some(iy) && (l += R1),
        t && (l += T1),
        i.filter(o => !iy(o)).reduce((o, u) => o + (b1.test(u) ? C1 : u === "" ? x1 : w1), l)
}
function A1(s, t) {
    return s.length === t.length && s.slice(0, -1).every((l, o) => l === t[o]) ? s[s.length - 1] - t[t.length - 1] : 0
}
function D1(s, t, i = !1) {
    let { routesMeta: l } = s
        , o = {}
        , u = "/"
        , h = [];
    for (let d = 0; d < l.length; ++d) {
        let p = l[d]
            , g = d === l.length - 1
            , S = u === "/" ? t : t.slice(u.length) || "/"
            , v = nc({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: g
            }, S)
            , E = p.route;
        if (!v && g && i && !l[l.length - 1].route.index && (v = nc({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: !1
        }, S)),
            !v)
            return null;
        Object.assign(o, v.params),
            h.push({
                params: o,
                pathname: Ln([u, v.pathname]),
                pathnameBase: U1(Ln([u, v.pathnameBase])),
                route: E
            }),
            v.pathnameBase !== "/" && (u = Ln([u, v.pathnameBase]))
    }
    return h
}
function nc(s, t) {
    typeof s == "string" && (s = {
        path: s,
        caseSensitive: !1,
        end: !0
    });
    let [i, l] = O1(s.path, s.caseSensitive, s.end)
        , o = t.match(i);
    if (!o)
        return null;
    let u = o[0]
        , h = u.replace(/(.)\/+$/, "$1")
        , d = o.slice(1);
    return {
        params: l.reduce((g, { paramName: S, isOptional: v }, E) => {
            if (S === "*") {
                let I = d[E] || "";
                h = u.slice(0, u.length - I.length).replace(/(.)\/+$/, "$1")
            }
            const D = d[E];
            return v && !D ? g[S] = void 0 : g[S] = (D || "").replace(/%2F/g, "/"),
                g
        }
            , {}),
        pathname: u,
        pathnameBase: h,
        pattern: s
    }
}
function O1(s, t = !1, i = !0) {
    Rn(s === "*" || !s.endsWith("*") || s.endsWith("/*"), `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, "/*")}".`);
    let l = []
        , o = "^" + s.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, d, p, g, S) => {
            if (l.push({
                paramName: d,
                isOptional: p != null
            }),
                p) {
                let v = S.charAt(g + h.length);
                return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?"
            }
            return "/([^\\/]+)"
        }
        ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return s.endsWith("*") ? (l.push({
        paramName: "*"
    }),
        o += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? o += "\\/*$" : s !== "" && s !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), l]
}
function I1(s) {
    try {
        return s.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Rn(!1, `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
            s
    }
}
function ci(s, t) {
    if (t === "/")
        return s;
    if (!s.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let i = t.endsWith("/") ? t.length - 1 : t.length
        , l = s.charAt(i);
    return l && l !== "/" ? null : s.slice(i) || "/"
}
var M1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function k1(s, t = "/") {
    let { pathname: i, search: l = "", hash: o = "" } = typeof s == "string" ? Pa(s) : s, u;
    return i ? (i = i.replace(/\/\/+/g, "/"),
        i.startsWith("/") ? u = sy(i.substring(1), "/") : u = sy(i, t)) : u = t,
    {
        pathname: u,
        search: j1(l),
        hash: z1(o)
    }
}
function sy(s, t) {
    let i = t.replace(/\/+$/, "").split("/");
    return s.split("/").forEach(o => {
        o === ".." ? i.length > 1 && i.pop() : o !== "." && i.push(o)
    }
    ),
        i.length > 1 ? i.join("/") : "/"
}
function uh(s, t, i, l) {
    return `Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function L1(s) {
    return s.filter((t, i) => i === 0 || t.route.path && t.route.path.length > 0)
}
function vv(s) {
    let t = L1(s);
    return t.map((i, l) => l === t.length - 1 ? i.pathname : i.pathnameBase)
}
function Jh(s, t, i, l = !1) {
    let o;
    typeof s == "string" ? o = Pa(s) : (o = {
        ...s
    },
        Je(!o.pathname || !o.pathname.includes("?"), uh("?", "pathname", "search", o)),
        Je(!o.pathname || !o.pathname.includes("#"), uh("#", "pathname", "hash", o)),
        Je(!o.search || !o.search.includes("#"), uh("#", "search", "hash", o)));
    let u = s === "" || o.pathname === "", h = u ? "/" : o.pathname, d;
    if (h == null)
        d = i;
    else {
        let v = t.length - 1;
        if (!l && h.startsWith("..")) {
            let E = h.split("/");
            for (; E[0] === "..";)
                E.shift(),
                    v -= 1;
            o.pathname = E.join("/")
        }
        d = v >= 0 ? t[v] : "/"
    }
    let p = k1(o, d)
        , g = h && h !== "/" && h.endsWith("/")
        , S = (u || h === ".") && i.endsWith("/");
    return !p.pathname.endsWith("/") && (g || S) && (p.pathname += "/"),
        p
}
var Ln = s => s.join("/").replace(/\/\/+/g, "/")
    , U1 = s => s.replace(/\/+$/, "").replace(/^\/*/, "/")
    , j1 = s => !s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s
    , z1 = s => !s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s
    , H1 = class {
        constructor(s, t, i, l = !1) {
            this.status = s,
                this.statusText = t || "",
                this.internal = l,
                i instanceof Error ? (this.data = i.toString(),
                    this.error = i) : this.data = i
        }
    }
    ;
function B1(s) {
    return s != null && typeof s.status == "number" && typeof s.statusText == "string" && typeof s.internal == "boolean" && "data" in s
}
function P1(s) {
    return s.map(t => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var Sv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ev(s, t) {
    let i = s;
    if (typeof i != "string" || !M1.test(i))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: i
        };
    let l = i
        , o = !1;
    if (Sv)
        try {
            let u = new URL(window.location.href)
                , h = i.startsWith("//") ? new URL(u.protocol + i) : new URL(i)
                , d = ci(h.pathname, t);
            h.origin === u.origin && d != null ? i = d + h.search + h.hash : o = !0
        } catch {
            Rn(!1, `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: l,
        isExternal: o,
        to: i
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var bv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(bv);
var q1 = ["GET", ...bv];
new Set(q1);
var qa = x.createContext(null);
qa.displayName = "DataRouter";
var Rc = x.createContext(null);
Rc.displayName = "DataRouterState";
var V1 = x.createContext(!1)
    , Cv = x.createContext({
        isTransitioning: !1
    });
Cv.displayName = "ViewTransition";
var G1 = x.createContext(new Map);
G1.displayName = "Fetchers";
var F1 = x.createContext(null);
F1.displayName = "Await";
var dn = x.createContext(null);
dn.displayName = "Navigation";
var yr = x.createContext(null);
yr.displayName = "Location";
var mi = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
mi.displayName = "Route";
var $h = x.createContext(null);
$h.displayName = "RouteError";
var Tv = "REACT_ROUTER_ERROR"
    , Y1 = "REDIRECT"
    , Q1 = "ROUTE_ERROR_RESPONSE";
function K1(s) {
    if (s.startsWith(`${Tv}:${Y1}:{`))
        try {
            let t = JSON.parse(s.slice(28));
            if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
                return t
        } catch { }
}
function X1(s) {
    if (s.startsWith(`${Tv}:${Q1}:{`))
        try {
            let t = JSON.parse(s.slice(40));
            if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
                return new H1(t.status, t.statusText, t.data)
        } catch { }
}
function W1(s, { relative: t } = {}) {
    Je(vr(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: i, navigator: l } = x.useContext(dn)
        , { hash: o, pathname: u, search: h } = Sr(s, {
            relative: t
        })
        , d = u;
    return i !== "/" && (d = u === "/" ? i : Ln([i, u])),
        l.createHref({
            pathname: d,
            search: h,
            hash: o
        })
}
function vr() {
    return x.useContext(yr) != null
}
function pi() {
    return Je(vr(), "useLocation() may be used only in the context of a <Router> component."),
        x.useContext(yr).location
}
var xv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function wv(s) {
    x.useContext(dn).static || x.useLayoutEffect(s)
}
function ed() {
    let { isDataRoute: s } = x.useContext(mi);
    return s ? cC() : Z1()
}
function Z1() {
    Je(vr(), "useNavigate() may be used only in the context of a <Router> component.");
    let s = x.useContext(qa)
        , { basename: t, navigator: i } = x.useContext(dn)
        , { matches: l } = x.useContext(mi)
        , { pathname: o } = pi()
        , u = JSON.stringify(vv(l))
        , h = x.useRef(!1);
    return wv(() => {
        h.current = !0
    }
    ),
        x.useCallback((p, g = {}) => {
            if (Rn(h.current, xv),
                !h.current)
                return;
            if (typeof p == "number") {
                i.go(p);
                return
            }
            let S = Jh(p, JSON.parse(u), o, g.relative === "path");
            s == null && t !== "/" && (S.pathname = S.pathname === "/" ? t : Ln([t, S.pathname])),
                (g.replace ? i.replace : i.push)(S, g.state, g)
        }
            , [t, i, u, o, s])
}
x.createContext(null);
function Sr(s, { relative: t } = {}) {
    let { matches: i } = x.useContext(mi)
        , { pathname: l } = pi()
        , o = JSON.stringify(vv(i));
    return x.useMemo(() => Jh(s, JSON.parse(o), l, t === "path"), [s, o, l, t])
}
function J1(s, t) {
    return Rv(s, t)
}
function Rv(s, t, i) {
    Je(vr(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: l } = x.useContext(dn)
        , { matches: o } = x.useContext(mi)
        , u = o[o.length - 1]
        , h = u ? u.params : {}
        , d = u ? u.pathname : "/"
        , p = u ? u.pathnameBase : "/"
        , g = u && u.route;
    {
        let M = g && g.path || "";
        Av(d, !g || M.endsWith("*") || M.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`)
    }
    let S = pi(), v;
    if (t) {
        let M = typeof t == "string" ? Pa(t) : t;
        Je(p === "/" || M.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${M.pathname}" was given in the \`location\` prop.`),
            v = M
    } else
        v = S;
    let E = v.pathname || "/"
        , D = E;
    if (p !== "/") {
        let M = p.replace(/^\//, "").split("/");
        D = "/" + E.replace(/^\//, "").split("/").slice(M.length).join("/")
    }
    let I = gv(s, {
        pathname: D
    });
    Rn(g || I != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
        Rn(I == null || I[I.length - 1].route.element !== void 0 || I[I.length - 1].route.Component !== void 0 || I[I.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let P = iC(I && I.map(M => Object.assign({}, M, {
        params: Object.assign({}, h, M.params),
        pathname: Ln([p, l.encodeLocation ? l.encodeLocation(M.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : M.pathname]),
        pathnameBase: M.pathnameBase === "/" ? p : Ln([p, l.encodeLocation ? l.encodeLocation(M.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : M.pathnameBase])
    })), o, i);
    return t && P ? x.createElement(yr.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                unstable_mask: void 0,
                ...v
            },
            navigationType: "POP"
        }
    }, P) : P
}
function $1() {
    let s = oC()
        , t = B1(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s)
        , i = s instanceof Error ? s.stack : null
        , l = "rgba(200,200,200, 0.5)"
        , o = {
            padding: "0.5rem",
            backgroundColor: l
        }
        , u = {
            padding: "2px 4px",
            backgroundColor: l
        }
        , h = null;
    return console.error("Error handled by React Router default ErrorBoundary:", s),
        h = x.createElement(x.Fragment, null, x.createElement("p", null, "💿 Hey developer 👋"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", {
            style: u
        }, "ErrorBoundary"), " or", " ", x.createElement("code", {
            style: u
        }, "errorElement"), " prop on your route.")),
        x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), i ? x.createElement("pre", {
            style: o
        }, i) : null, h)
}
var eC = x.createElement($1, null)
    , Nv = class extends x.Component {
        constructor(s) {
            super(s),
                this.state = {
                    location: s.location,
                    revalidation: s.revalidation,
                    error: s.error
                }
        }
        static getDerivedStateFromError(s) {
            return {
                error: s
            }
        }
        static getDerivedStateFromProps(s, t) {
            return t.location !== s.location || t.revalidation !== "idle" && s.revalidation === "idle" ? {
                error: s.error,
                location: s.location,
                revalidation: s.revalidation
            } : {
                error: s.error !== void 0 ? s.error : t.error,
                location: t.location,
                revalidation: s.revalidation || t.revalidation
            }
        }
        componentDidCatch(s, t) {
            this.props.onError ? this.props.onError(s, t) : console.error("React Router caught the following error during render", s)
        }
        render() {
            let s = this.state.error;
            if (this.context && typeof s == "object" && s && "digest" in s && typeof s.digest == "string") {
                const i = X1(s.digest);
                i && (s = i)
            }
            let t = s !== void 0 ? x.createElement(mi.Provider, {
                value: this.props.routeContext
            }, x.createElement($h.Provider, {
                value: s,
                children: this.props.component
            })) : this.props.children;
            return this.context ? x.createElement(tC, {
                error: s
            }, t) : t
        }
    }
    ;
Nv.contextType = V1;
var fh = new WeakMap;
function tC({ children: s, error: t }) {
    let { basename: i } = x.useContext(dn);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
        let l = K1(t.digest);
        if (l) {
            let o = fh.get(t);
            if (o)
                throw o;
            let u = Ev(l.location, i);
            if (Sv && !fh.get(t))
                if (u.isExternal || l.reloadDocument)
                    window.location.href = u.absoluteURL || u.to;
                else {
                    const h = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {
                        replace: l.replace
                    }));
                    throw fh.set(t, h),
                    h
                }
            return x.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${u.absoluteURL || u.to}`
            })
        }
    }
    return s
}
function nC({ routeContext: s, match: t, children: i }) {
    let l = x.useContext(qa);
    return l && l.static && l.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = t.route.id),
        x.createElement(mi.Provider, {
            value: s
        }, i)
}
function iC(s, t = [], i) {
    let l = i?.state;
    if (s == null) {
        if (!l)
            return null;
        if (l.errors)
            s = l.matches;
        else if (t.length === 0 && !l.initialized && l.matches.length > 0)
            s = l.matches;
        else
            return null
    }
    let o = s
        , u = l?.errors;
    if (u != null) {
        let S = o.findIndex(v => v.route.id && u?.[v.route.id] !== void 0);
        Je(S >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),
            o = o.slice(0, Math.min(o.length, S + 1))
    }
    let h = !1
        , d = -1;
    if (i && l) {
        h = l.renderFallback;
        for (let S = 0; S < o.length; S++) {
            let v = o[S];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = S),
                v.route.id) {
                let { loaderData: E, errors: D } = l
                    , I = v.route.loader && !E.hasOwnProperty(v.route.id) && (!D || D[v.route.id] === void 0);
                if (v.route.lazy || I) {
                    i.isStatic && (h = !0),
                        d >= 0 ? o = o.slice(0, d + 1) : o = [o[0]];
                    break
                }
            }
        }
    }
    let p = i?.onError
        , g = l && p ? (S, v) => {
            p(S, {
                location: l.location,
                params: l.matches?.[0]?.params ?? {},
                unstable_pattern: P1(l.matches),
                errorInfo: v
            })
        }
            : void 0;
    return o.reduceRight((S, v, E) => {
        let D, I = !1, P = null, M = null;
        l && (D = u && v.route.id ? u[v.route.id] : void 0,
            P = v.route.errorElement || eC,
            h && (d < 0 && E === 0 ? (Av("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
                I = !0,
                M = null) : d === E && (I = !0,
                    M = v.route.hydrateFallbackElement || null)));
        let Q = t.concat(o.slice(0, E + 1))
            , B = () => {
                let q;
                return D ? q = P : I ? q = M : v.route.Component ? q = x.createElement(v.route.Component, null) : v.route.element ? q = v.route.element : q = S,
                    x.createElement(nC, {
                        match: v,
                        routeContext: {
                            outlet: S,
                            matches: Q,
                            isDataRoute: l != null
                        },
                        children: q
                    })
            }
            ;
        return l && (v.route.ErrorBoundary || v.route.errorElement || E === 0) ? x.createElement(Nv, {
            location: l.location,
            revalidation: l.revalidation,
            component: P,
            error: D,
            children: B(),
            routeContext: {
                outlet: null,
                matches: Q,
                isDataRoute: !0
            },
            onError: g
        }) : B()
    }
        , null)
}
function td(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function sC(s) {
    let t = x.useContext(qa);
    return Je(t, td(s)),
        t
}
function aC(s) {
    let t = x.useContext(Rc);
    return Je(t, td(s)),
        t
}
function lC(s) {
    let t = x.useContext(mi);
    return Je(t, td(s)),
        t
}
function nd(s) {
    let t = lC(s)
        , i = t.matches[t.matches.length - 1];
    return Je(i.route.id, `${s} can only be used on routes that contain a unique "id"`),
        i.route.id
}
function rC() {
    return nd("useRouteId")
}
function oC() {
    let s = x.useContext($h)
        , t = aC("useRouteError")
        , i = nd("useRouteError");
    return s !== void 0 ? s : t.errors?.[i]
}
function cC() {
    let { router: s } = sC("useNavigate")
        , t = nd("useNavigate")
        , i = x.useRef(!1);
    return wv(() => {
        i.current = !0
    }
    ),
        x.useCallback(async (o, u = {}) => {
            Rn(i.current, xv),
                i.current && (typeof o == "number" ? await s.navigate(o) : await s.navigate(o, {
                    fromRouteId: t,
                    ...u
                }))
        }
            , [s, t])
}
var ay = {};
function Av(s, t, i) {
    !t && !ay[s] && (ay[s] = !0,
        Rn(!1, i))
}
x.memo(uC);
function uC({ routes: s, future: t, state: i, isStatic: l, onError: o }) {
    return Rv(s, void 0, {
        state: i,
        isStatic: l,
        onError: o
    })
}
function Na(s) {
    Je(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function fC({ basename: s = "/", children: t = null, location: i, navigationType: l = "POP", navigator: o, static: u = !1, unstable_useTransitions: h }) {
    Je(!vr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = s.replace(/^\/*/, "/")
        , p = x.useMemo(() => ({
            basename: d,
            navigator: o,
            static: u,
            unstable_useTransitions: h,
            future: {}
        }), [d, o, u, h]);
    typeof i == "string" && (i = Pa(i));
    let { pathname: g = "/", search: S = "", hash: v = "", state: E = null, key: D = "default", unstable_mask: I } = i
        , P = x.useMemo(() => {
            let M = ci(g, d);
            return M == null ? null : {
                location: {
                    pathname: M,
                    search: S,
                    hash: v,
                    state: E,
                    key: D,
                    unstable_mask: I
                },
                navigationType: l
            }
        }
            , [d, g, S, v, E, D, l, I]);
    return Rn(P != null, `<Router basename="${d}"> is not able to match the URL "${g}${S}${v}" because it does not start with the basename, so the <Router> won't render anything.`),
        P == null ? null : x.createElement(dn.Provider, {
            value: p
        }, x.createElement(yr.Provider, {
            children: t,
            value: P
        }))
}
function hC({ children: s, location: t }) {
    return J1(Ah(s), t)
}
function Ah(s, t = []) {
    let i = [];
    return x.Children.forEach(s, (l, o) => {
        if (!x.isValidElement(l))
            return;
        let u = [...t, o];
        if (l.type === x.Fragment) {
            i.push.apply(i, Ah(l.props.children, u));
            return
        }
        Je(l.type === Na, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
            Je(!l.props.index || !l.props.children, "An index route cannot have child routes.");
        let h = {
            id: l.props.id || u.join("-"),
            caseSensitive: l.props.caseSensitive,
            element: l.props.element,
            Component: l.props.Component,
            index: l.props.index,
            path: l.props.path,
            middleware: l.props.middleware,
            loader: l.props.loader,
            action: l.props.action,
            hydrateFallbackElement: l.props.hydrateFallbackElement,
            HydrateFallback: l.props.HydrateFallback,
            errorElement: l.props.errorElement,
            ErrorBoundary: l.props.ErrorBoundary,
            hasErrorBoundary: l.props.hasErrorBoundary === !0 || l.props.ErrorBoundary != null || l.props.errorElement != null,
            shouldRevalidate: l.props.shouldRevalidate,
            handle: l.props.handle,
            lazy: l.props.lazy
        };
        l.props.children && (h.children = Ah(l.props.children, u)),
            i.push(h)
    }
    ),
        i
}
var Xo = "get"
    , Wo = "application/x-www-form-urlencoded";
function Nc(s) {
    return typeof HTMLElement < "u" && s instanceof HTMLElement
}
function dC(s) {
    return Nc(s) && s.tagName.toLowerCase() === "button"
}
function mC(s) {
    return Nc(s) && s.tagName.toLowerCase() === "form"
}
function pC(s) {
    return Nc(s) && s.tagName.toLowerCase() === "input"
}
function gC(s) {
    return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey)
}
function _C(s, t) {
    return s.button === 0 && (!t || t === "_self") && !gC(s)
}
function Dh(s = "") {
    return new URLSearchParams(typeof s == "string" || Array.isArray(s) || s instanceof URLSearchParams ? s : Object.keys(s).reduce((t, i) => {
        let l = s[i];
        return t.concat(Array.isArray(l) ? l.map(o => [i, o]) : [[i, l]])
    }
        , []))
}
function yC(s, t) {
    let i = Dh(s);
    return t && t.forEach((l, o) => {
        i.has(o) || t.getAll(o).forEach(u => {
            i.append(o, u)
        }
        )
    }
    ),
        i
}
var Go = null;
function vC() {
    if (Go === null)
        try {
            new FormData(document.createElement("form"), 0),
                Go = !1
        } catch {
            Go = !0
        }
    return Go
}
var SC = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function hh(s) {
    return s != null && !SC.has(s) ? (Rn(!1, `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wo}"`),
        null) : s
}
function EC(s, t) {
    let i, l, o, u, h;
    if (mC(s)) {
        let d = s.getAttribute("action");
        l = d ? ci(d, t) : null,
            i = s.getAttribute("method") || Xo,
            o = hh(s.getAttribute("enctype")) || Wo,
            u = new FormData(s)
    } else if (dC(s) || pC(s) && (s.type === "submit" || s.type === "image")) {
        let d = s.form;
        if (d == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = s.getAttribute("formaction") || d.getAttribute("action");
        if (l = p ? ci(p, t) : null,
            i = s.getAttribute("formmethod") || d.getAttribute("method") || Xo,
            o = hh(s.getAttribute("formenctype")) || hh(d.getAttribute("enctype")) || Wo,
            u = new FormData(d, s),
            !vC()) {
            let { name: g, type: S, value: v } = s;
            if (S === "image") {
                let E = g ? `${g}.` : "";
                u.append(`${E}x`, "0"),
                    u.append(`${E}y`, "0")
            } else
                g && u.append(g, v)
        }
    } else {
        if (Nc(s))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        i = Xo,
            l = null,
            o = Wo,
            h = s
    }
    return u && o === "text/plain" && (h = u,
        u = void 0),
    {
        action: l,
        method: i.toLowerCase(),
        encType: o,
        formData: u,
        body: h
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function id(s, t) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(t)
}
function bC(s, t, i, l) {
    let o = typeof s == "string" ? new URL(s, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : s;
    return i ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${l}` : o.pathname = `${o.pathname}.${l}` : o.pathname === "/" ? o.pathname = `_root.${l}` : t && ci(o.pathname, t) === "/" ? o.pathname = `${t.replace(/\/$/, "")}/_root.${l}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${l}`,
        o
}
async function CC(s, t) {
    if (s.id in t)
        return t[s.id];
    try {
        let i = await import(s.module);
        return t[s.id] = i,
            i
    } catch (i) {
        return console.error(`Error loading route module \`${s.module}\`, reloading page...`),
            console.error(i),
            window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
            window.location.reload(),
            new Promise(() => { }
            )
    }
}
function TC(s) {
    return s == null ? !1 : s.href == null ? s.rel === "preload" && typeof s.imageSrcSet == "string" && typeof s.imageSizes == "string" : typeof s.rel == "string" && typeof s.href == "string"
}
async function xC(s, t, i) {
    let l = await Promise.all(s.map(async o => {
        let u = t.routes[o.route.id];
        if (u) {
            let h = await CC(u, i);
            return h.links ? h.links() : []
        }
        return []
    }
    ));
    return AC(l.flat(1).filter(TC).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function ly(s, t, i, l, o, u) {
    let h = (p, g) => i[g] ? p.route.id !== i[g].route.id : !0
        , d = (p, g) => i[g].pathname !== p.pathname || i[g].route.path?.endsWith("*") && i[g].params["*"] !== p.params["*"];
    return u === "assets" ? t.filter((p, g) => h(p, g) || d(p, g)) : u === "data" ? t.filter((p, g) => {
        let S = l.routes[p.route.id];
        if (!S || !S.hasLoader)
            return !1;
        if (h(p, g) || d(p, g))
            return !0;
        if (p.route.shouldRevalidate) {
            let v = p.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                currentParams: i[0]?.params || {},
                nextUrl: new URL(s, window.origin),
                nextParams: p.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function wC(s, t, { includeHydrateFallback: i } = {}) {
    return RC(s.map(l => {
        let o = t.routes[l.route.id];
        if (!o)
            return [];
        let u = [o.module];
        return o.clientActionModule && (u = u.concat(o.clientActionModule)),
            o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
            i && o.hydrateFallbackModule && (u = u.concat(o.hydrateFallbackModule)),
            o.imports && (u = u.concat(o.imports)),
            u
    }
    ).flat(1))
}
function RC(s) {
    return [...new Set(s)]
}
function NC(s) {
    let t = {}
        , i = Object.keys(s).sort();
    for (let l of i)
        t[l] = s[l];
    return t
}
function AC(s, t) {
    let i = new Set;
    return new Set(t),
        s.reduce((l, o) => {
            let u = JSON.stringify(NC(o));
            return i.has(u) || (i.add(u),
                l.push({
                    key: u,
                    link: o
                })),
                l
        }
            , [])
}
function Dv() {
    let s = x.useContext(qa);
    return id(s, "You must render this element inside a <DataRouterContext.Provider> element"),
        s
}
function DC() {
    let s = x.useContext(Rc);
    return id(s, "You must render this element inside a <DataRouterStateContext.Provider> element"),
        s
}
var sd = x.createContext(void 0);
sd.displayName = "FrameworkContext";
function Ov() {
    let s = x.useContext(sd);
    return id(s, "You must render this element inside a <HydratedRouter> element"),
        s
}
function OC(s, t) {
    let i = x.useContext(sd)
        , [l, o] = x.useState(!1)
        , [u, h] = x.useState(!1)
        , { onFocus: d, onBlur: p, onMouseEnter: g, onMouseLeave: S, onTouchStart: v } = t
        , E = x.useRef(null);
    x.useEffect(() => {
        if (s === "render" && h(!0),
            s === "viewport") {
            let P = Q => {
                Q.forEach(B => {
                    h(B.isIntersecting)
                }
                )
            }
                , M = new IntersectionObserver(P, {
                    threshold: .5
                });
            return E.current && M.observe(E.current),
                () => {
                    M.disconnect()
                }
        }
    }
        , [s]),
        x.useEffect(() => {
            if (l) {
                let P = setTimeout(() => {
                    h(!0)
                }
                    , 100);
                return () => {
                    clearTimeout(P)
                }
            }
        }
            , [l]);
    let D = () => {
        o(!0)
    }
        , I = () => {
            o(!1),
                h(!1)
        }
        ;
    return i ? s !== "intent" ? [u, E, {}] : [u, E, {
        onFocus: Kl(d, D),
        onBlur: Kl(p, I),
        onMouseEnter: Kl(g, D),
        onMouseLeave: Kl(S, I),
        onTouchStart: Kl(v, D)
    }] : [!1, E, {}]
}
function Kl(s, t) {
    return i => {
        s && s(i),
            i.defaultPrevented || t(i)
    }
}
function IC({ page: s, ...t }) {
    let { router: i } = Dv()
        , l = x.useMemo(() => gv(i.routes, s, i.basename), [i.routes, s, i.basename]);
    return l ? x.createElement(kC, {
        page: s,
        matches: l,
        ...t
    }) : null
}
function MC(s) {
    let { manifest: t, routeModules: i } = Ov()
        , [l, o] = x.useState([]);
    return x.useEffect(() => {
        let u = !1;
        return xC(s, t, i).then(h => {
            u || o(h)
        }
        ),
            () => {
                u = !0
            }
    }
        , [s, t, i]),
        l
}
function kC({ page: s, matches: t, ...i }) {
    let l = pi()
        , { future: o, manifest: u, routeModules: h } = Ov()
        , { basename: d } = Dv()
        , { loaderData: p, matches: g } = DC()
        , S = x.useMemo(() => ly(s, t, g, u, l, "data"), [s, t, g, u, l])
        , v = x.useMemo(() => ly(s, t, g, u, l, "assets"), [s, t, g, u, l])
        , E = x.useMemo(() => {
            if (s === l.pathname + l.search + l.hash)
                return [];
            let P = new Set
                , M = !1;
            if (t.forEach(B => {
                let q = u.routes[B.route.id];
                !q || !q.hasLoader || (!S.some(re => re.route.id === B.route.id) && B.route.id in p && h[B.route.id]?.shouldRevalidate || q.hasClientLoader ? M = !0 : P.add(B.route.id))
            }
            ),
                P.size === 0)
                return [];
            let Q = bC(s, d, o.unstable_trailingSlashAwareDataRequests, "data");
            return M && P.size > 0 && Q.searchParams.set("_routes", t.filter(B => P.has(B.route.id)).map(B => B.route.id).join(",")),
                [Q.pathname + Q.search]
        }
            , [d, o.unstable_trailingSlashAwareDataRequests, p, l, u, S, t, s, h])
        , D = x.useMemo(() => wC(v, u), [v, u])
        , I = MC(v);
    return x.createElement(x.Fragment, null, E.map(P => x.createElement("link", {
        key: P,
        rel: "prefetch",
        as: "fetch",
        href: P,
        ...i
    })), D.map(P => x.createElement("link", {
        key: P,
        rel: "modulepreload",
        href: P,
        ...i
    })), I.map(({ key: P, link: M }) => x.createElement("link", {
        key: P,
        nonce: i.nonce,
        ...M,
        crossOrigin: M.crossOrigin ?? i.crossOrigin
    })))
}
function LC(...s) {
    return t => {
        s.forEach(i => {
            typeof i == "function" ? i(t) : i != null && (i.current = t)
        }
        )
    }
}
var UC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    UC && (window.__reactRouterVersion = "7.13.1")
} catch { }
function jC({ basename: s, children: t, unstable_useTransitions: i, window: l }) {
    let o = x.useRef();
    o.current == null && (o.current = g1({
        window: l,
        v5Compat: !0
    }));
    let u = o.current
        , [h, d] = x.useState({
            action: u.action,
            location: u.location
        })
        , p = x.useCallback(g => {
            i === !1 ? d(g) : x.startTransition(() => d(g))
        }
            , [i]);
    return x.useLayoutEffect(() => u.listen(p), [u, p]),
        x.createElement(fC, {
            basename: s,
            children: t,
            location: h.location,
            navigationType: h.action,
            navigator: u,
            unstable_useTransitions: i
        })
}
var Iv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , Mv = x.forwardRef(function ({ onClick: t, discover: i = "render", prefetch: l = "none", relative: o, reloadDocument: u, replace: h, unstable_mask: d, state: p, target: g, to: S, preventScrollReset: v, viewTransition: E, unstable_defaultShouldRevalidate: D, ...I }, P) {
        let { basename: M, navigator: Q, unstable_useTransitions: B } = x.useContext(dn)
            , q = typeof S == "string" && Iv.test(S)
            , re = Ev(S, M);
        S = re.to;
        let de = W1(S, {
            relative: o
        })
            , ve = pi()
            , J = null;
        if (d) {
            let ge = Jh(d, [], ve.unstable_mask ? ve.unstable_mask.pathname : "/", !0);
            M !== "/" && (ge.pathname = ge.pathname === "/" ? M : Ln([M, ge.pathname])),
                J = Q.createHref(ge)
        }
        let [we, Ge, ke] = OC(l, I)
            , $e = PC(S, {
                replace: h,
                unstable_mask: d,
                state: p,
                target: g,
                preventScrollReset: v,
                relative: o,
                viewTransition: E,
                unstable_defaultShouldRevalidate: D,
                unstable_useTransitions: B
            });
        function We(ge) {
            t && t(ge),
                ge.defaultPrevented || $e(ge)
        }
        let G = !(re.isExternal || u)
            , se = x.createElement("a", {
                ...I,
                ...ke,
                href: (G ? J : void 0) || re.absoluteURL || de,
                onClick: G ? We : t,
                ref: LC(P, Ge),
                target: g,
                "data-discover": !q && i === "render" ? "true" : void 0
            });
        return we && !q ? x.createElement(x.Fragment, null, se, x.createElement(IC, {
            page: de
        })) : se
    });
Mv.displayName = "Link";
var zC = x.forwardRef(function ({ "aria-current": t = "page", caseSensitive: i = !1, className: l = "", end: o = !1, style: u, to: h, viewTransition: d, children: p, ...g }, S) {
    let v = Sr(h, {
        relative: g.relative
    })
        , E = pi()
        , D = x.useContext(Rc)
        , { navigator: I, basename: P } = x.useContext(dn)
        , M = D != null && QC(v) && d === !0
        , Q = I.encodeLocation ? I.encodeLocation(v).pathname : v.pathname
        , B = E.pathname
        , q = D && D.navigation && D.navigation.location ? D.navigation.location.pathname : null;
    i || (B = B.toLowerCase(),
        q = q ? q.toLowerCase() : null,
        Q = Q.toLowerCase()),
        q && P && (q = ci(q, P) || q);
    const re = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let de = B === Q || !o && B.startsWith(Q) && B.charAt(re) === "/", ve = q != null && (q === Q || !o && q.startsWith(Q) && q.charAt(Q.length) === "/"), J = {
        isActive: de,
        isPending: ve,
        isTransitioning: M
    }, we = de ? t : void 0, Ge;
    typeof l == "function" ? Ge = l(J) : Ge = [l, de ? "active" : null, ve ? "pending" : null, M ? "transitioning" : null].filter(Boolean).join(" ");
    let ke = typeof u == "function" ? u(J) : u;
    return x.createElement(Mv, {
        ...g,
        "aria-current": we,
        className: Ge,
        ref: S,
        style: ke,
        to: h,
        viewTransition: d
    }, typeof p == "function" ? p(J) : p)
});
zC.displayName = "NavLink";
var HC = x.forwardRef(({ discover: s = "render", fetcherKey: t, navigate: i, reloadDocument: l, replace: o, state: u, method: h = Xo, action: d, onSubmit: p, relative: g, preventScrollReset: S, viewTransition: v, unstable_defaultShouldRevalidate: E, ...D }, I) => {
    let { unstable_useTransitions: P } = x.useContext(dn)
        , M = FC()
        , Q = YC(d, {
            relative: g
        })
        , B = h.toLowerCase() === "get" ? "get" : "post"
        , q = typeof d == "string" && Iv.test(d)
        , re = de => {
            if (p && p(de),
                de.defaultPrevented)
                return;
            de.preventDefault();
            let ve = de.nativeEvent.submitter
                , J = ve?.getAttribute("formmethod") || h
                , we = () => M(ve || de.currentTarget, {
                    fetcherKey: t,
                    method: J,
                    navigate: i,
                    replace: o,
                    state: u,
                    relative: g,
                    preventScrollReset: S,
                    viewTransition: v,
                    unstable_defaultShouldRevalidate: E
                });
            P && i !== !1 ? x.startTransition(() => we()) : we()
        }
        ;
    return x.createElement("form", {
        ref: I,
        method: B,
        action: Q,
        onSubmit: l ? p : re,
        ...D,
        "data-discover": !q && s === "render" ? "true" : void 0
    })
}
);
HC.displayName = "Form";
function BC(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function kv(s) {
    let t = x.useContext(qa);
    return Je(t, BC(s)),
        t
}
function PC(s, { target: t, replace: i, unstable_mask: l, state: o, preventScrollReset: u, relative: h, viewTransition: d, unstable_defaultShouldRevalidate: p, unstable_useTransitions: g } = {}) {
    let S = ed()
        , v = pi()
        , E = Sr(s, {
            relative: h
        });
    return x.useCallback(D => {
        if (_C(D, t)) {
            D.preventDefault();
            let I = i !== void 0 ? i : lr(v) === lr(E)
                , P = () => S(s, {
                    replace: I,
                    unstable_mask: l,
                    state: o,
                    preventScrollReset: u,
                    relative: h,
                    viewTransition: d,
                    unstable_defaultShouldRevalidate: p
                });
            g ? x.startTransition(() => P()) : P()
        }
    }
        , [v, S, E, i, l, o, t, s, u, h, d, p, g])
}
function qC(s) {
    Rn(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = x.useRef(Dh(s))
        , i = x.useRef(!1)
        , l = pi()
        , o = x.useMemo(() => yC(l.search, i.current ? null : t.current), [l.search])
        , u = ed()
        , h = x.useCallback((d, p) => {
            const g = Dh(typeof d == "function" ? d(new URLSearchParams(o)) : d);
            i.current = !0,
                u("?" + g, p)
        }
            , [u, o]);
    return [o, h]
}
var VC = 0
    , GC = () => `__${String(++VC)}__`;
function FC() {
    let { router: s } = kv("useSubmit")
        , { basename: t } = x.useContext(dn)
        , i = rC()
        , l = s.fetch
        , o = s.navigate;
    return x.useCallback(async (u, h = {}) => {
        let { action: d, method: p, encType: g, formData: S, body: v } = EC(u, t);
        if (h.navigate === !1) {
            let E = h.fetcherKey || GC();
            await l(E, i, h.action || d, {
                unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
                preventScrollReset: h.preventScrollReset,
                formData: S,
                body: v,
                formMethod: h.method || p,
                formEncType: h.encType || g,
                flushSync: h.flushSync
            })
        } else
            await o(h.action || d, {
                unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
                preventScrollReset: h.preventScrollReset,
                formData: S,
                body: v,
                formMethod: h.method || p,
                formEncType: h.encType || g,
                replace: h.replace,
                state: h.state,
                fromRouteId: i,
                flushSync: h.flushSync,
                viewTransition: h.viewTransition
            })
    }
        , [l, o, t, i])
}
function YC(s, { relative: t } = {}) {
    let { basename: i } = x.useContext(dn)
        , l = x.useContext(mi);
    Je(l, "useFormAction must be used inside a RouteContext");
    let [o] = l.matches.slice(-1)
        , u = {
            ...Sr(s || ".", {
                relative: t
            })
        }
        , h = pi();
    if (s == null) {
        u.search = h.search;
        let d = new URLSearchParams(u.search)
            , p = d.getAll("index");
        if (p.some(S => S === "")) {
            d.delete("index"),
                p.filter(v => v).forEach(v => d.append("index", v));
            let S = d.toString();
            u.search = S ? `?${S}` : ""
        }
    }
    return (!s || s === ".") && o.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
        i !== "/" && (u.pathname = u.pathname === "/" ? i : Ln([i, u.pathname])),
        lr(u)
}
function QC(s, { relative: t } = {}) {
    let i = x.useContext(Cv);
    Je(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: l } = kv("useViewTransitionState")
        , o = Sr(s, {
            relative: t
        });
    if (!i.isTransitioning)
        return !1;
    let u = ci(i.currentLocation.pathname, l) || i.currentLocation.pathname
        , h = ci(i.nextLocation.pathname, l) || i.nextLocation.pathname;
    return nc(o.pathname, h) != null || nc(o.pathname, u) != null
}
const KC = () => { }
    ;
var ry = {};
const Lv = {
    NODE_ADMIN: !1,
    SDK_VERSION: "${JSCORE_VERSION}"
};
const Y = function (s, t) {
    if (!s)
        throw Va(t)
}
    , Va = function (s) {
        return new Error("Firebase Database (" + Lv.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + s)
    };
const Uv = function (s) {
    const t = [];
    let i = 0;
    for (let l = 0; l < s.length; l++) {
        let o = s.charCodeAt(l);
        o < 128 ? t[i++] = o : o < 2048 ? (t[i++] = o >> 6 | 192,
            t[i++] = o & 63 | 128) : (o & 64512) === 55296 && l + 1 < s.length && (s.charCodeAt(l + 1) & 64512) === 56320 ? (o = 65536 + ((o & 1023) << 10) + (s.charCodeAt(++l) & 1023),
                t[i++] = o >> 18 | 240,
                t[i++] = o >> 12 & 63 | 128,
                t[i++] = o >> 6 & 63 | 128,
                t[i++] = o & 63 | 128) : (t[i++] = o >> 12 | 224,
                    t[i++] = o >> 6 & 63 | 128,
                    t[i++] = o & 63 | 128)
    }
    return t
}
    , XC = function (s) {
        const t = [];
        let i = 0
            , l = 0;
        for (; i < s.length;) {
            const o = s[i++];
            if (o < 128)
                t[l++] = String.fromCharCode(o);
            else if (o > 191 && o < 224) {
                const u = s[i++];
                t[l++] = String.fromCharCode((o & 31) << 6 | u & 63)
            } else if (o > 239 && o < 365) {
                const u = s[i++]
                    , h = s[i++]
                    , d = s[i++]
                    , p = ((o & 7) << 18 | (u & 63) << 12 | (h & 63) << 6 | d & 63) - 65536;
                t[l++] = String.fromCharCode(55296 + (p >> 10)),
                    t[l++] = String.fromCharCode(56320 + (p & 1023))
            } else {
                const u = s[i++]
                    , h = s[i++];
                t[l++] = String.fromCharCode((o & 15) << 12 | (u & 63) << 6 | h & 63)
            }
        }
        return t.join("")
    }
    , ad = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(s, t) {
            if (!Array.isArray(s))
                throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const i = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
                , l = [];
            for (let o = 0; o < s.length; o += 3) {
                const u = s[o]
                    , h = o + 1 < s.length
                    , d = h ? s[o + 1] : 0
                    , p = o + 2 < s.length
                    , g = p ? s[o + 2] : 0
                    , S = u >> 2
                    , v = (u & 3) << 4 | d >> 4;
                let E = (d & 15) << 2 | g >> 6
                    , D = g & 63;
                p || (D = 64,
                    h || (E = 64)),
                    l.push(i[S], i[v], i[E], i[D])
            }
            return l.join("")
        },
        encodeString(s, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(s) : this.encodeByteArray(Uv(s), t)
        },
        decodeString(s, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(s) : XC(this.decodeStringToByteArray(s, t))
        },
        decodeStringToByteArray(s, t) {
            this.init_();
            const i = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
                , l = [];
            for (let o = 0; o < s.length;) {
                const u = i[s.charAt(o++)]
                    , d = o < s.length ? i[s.charAt(o)] : 0;
                ++o;
                const g = o < s.length ? i[s.charAt(o)] : 64;
                ++o;
                const v = o < s.length ? i[s.charAt(o)] : 64;
                if (++o,
                    u == null || d == null || g == null || v == null)
                    throw new WC;
                const E = u << 2 | d >> 4;
                if (l.push(E),
                    g !== 64) {
                    const D = d << 4 & 240 | g >> 2;
                    if (l.push(D),
                        v !== 64) {
                        const I = g << 6 & 192 | v;
                        l.push(I)
                    }
                }
            }
            return l
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                for (let s = 0; s < this.ENCODED_VALS.length; s++)
                    this.byteToCharMap_[s] = this.ENCODED_VALS.charAt(s),
                        this.charToByteMap_[this.byteToCharMap_[s]] = s,
                        this.byteToCharMapWebSafe_[s] = this.ENCODED_VALS_WEBSAFE.charAt(s),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]] = s,
                        s >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)] = s,
                            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)] = s)
            }
        }
    };
class WC extends Error {
    constructor() {
        super(...arguments),
            this.name = "DecodeBase64StringError"
    }
}
const jv = function (s) {
    const t = Uv(s);
    return ad.encodeByteArray(t, !0)
}
    , ic = function (s) {
        return jv(s).replace(/\./g, "")
    }
    , sc = function (s) {
        try {
            return ad.decodeString(s, !0)
        } catch (t) {
            console.error("base64Decode failed: ", t)
        }
        return null
    };
function ZC(s) {
    return zv(void 0, s)
}
function zv(s, t) {
    if (!(t instanceof Object))
        return t;
    switch (t.constructor) {
        case Date:
            const i = t;
            return new Date(i.getTime());
        case Object:
            s === void 0 && (s = {});
            break;
        case Array:
            s = [];
            break;
        default:
            return t
    }
    for (const i in t)
        !t.hasOwnProperty(i) || !JC(i) || (s[i] = zv(s[i], t[i]));
    return s
}
function JC(s) {
    return s !== "__proto__"
}
function $C() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
const eT = () => $C().__FIREBASE_DEFAULTS__
    , tT = () => {
        if (typeof process > "u" || typeof ry > "u")
            return;
        const s = ry.__FIREBASE_DEFAULTS__;
        if (s)
            return JSON.parse(s)
    }
    , nT = () => {
        if (typeof document > "u")
            return;
        let s;
        try {
            s = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const t = s && sc(s[1]);
        return t && JSON.parse(t)
    }
    , ld = () => {
        try {
            return KC() || eT() || tT() || nT()
        } catch (s) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);
            return
        }
    }
    , Hv = s => ld()?.emulatorHosts?.[s]
    , iT = s => {
        const t = Hv(s);
        if (!t)
            return;
        const i = t.lastIndexOf(":");
        if (i <= 0 || i + 1 === t.length)
            throw new Error(`Invalid host ${t} with no separate hostname and port!`);
        const l = parseInt(t.substring(i + 1), 10);
        return t[0] === "[" ? [t.substring(1, i - 1), l] : [t.substring(0, i), l]
    }
    , Bv = () => ld()?.config
    , Pv = s => ld()?.[`_${s}`];
class Ac {
    constructor() {
        this.reject = () => { }
            ,
            this.resolve = () => { }
            ,
            this.promise = new Promise((t, i) => {
                this.resolve = t,
                    this.reject = i
            }
            )
    }
    wrapCallback(t) {
        return (i, l) => {
            i ? this.reject(i) : this.resolve(l),
                typeof t == "function" && (this.promise.catch(() => { }
                ),
                    t.length === 1 ? t(i) : t(i, l))
        }
    }
}
function Ga(s) {
    try {
        return (s.startsWith("http://") || s.startsWith("https://") ? new URL(s).hostname : s).endsWith(".cloudworkstations.dev")
    } catch {
        return !1
    }
}
async function qv(s) {
    return (await fetch(s, {
        credentials: "include"
    })).ok
}
function sT(s, t) {
    if (s.uid)
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    const i = {
        alg: "none",
        type: "JWT"
    }
        , l = t || "demo-project"
        , o = s.iat || 0
        , u = s.sub || s.user_id;
    if (!u)
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const h = {
        iss: `https://securetoken.google.com/${l}`,
        aud: l,
        iat: o,
        exp: o + 3600,
        auth_time: o,
        sub: u,
        user_id: u,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        },
        ...s
    };
    return [ic(JSON.stringify(i)), ic(JSON.stringify(h)), ""].join(".")
}
const $l = {};
function aT() {
    const s = {
        prod: [],
        emulator: []
    };
    for (const t of Object.keys($l))
        $l[t] ? s.emulator.push(t) : s.prod.push(t);
    return s
}
function lT(s) {
    let t = document.getElementById(s)
        , i = !1;
    return t || (t = document.createElement("div"),
        t.setAttribute("id", s),
        i = !0),
    {
        created: i,
        element: t
    }
}
let oy = !1;
function Vv(s, t) {
    if (typeof window > "u" || typeof document > "u" || !Ga(window.location.host) || $l[s] === t || $l[s] || oy)
        return;
    $l[s] = t;
    function i(E) {
        return `__firebase__banner__${E}`
    }
    const l = "__firebase__banner"
        , u = aT().prod.length > 0;
    function h() {
        const E = document.getElementById(l);
        E && E.remove()
    }
    function d(E) {
        E.style.display = "flex",
            E.style.background = "#7faaf0",
            E.style.position = "fixed",
            E.style.bottom = "5px",
            E.style.left = "5px",
            E.style.padding = ".5em",
            E.style.borderRadius = "5px",
            E.style.alignItems = "center"
    }
    function p(E, D) {
        E.setAttribute("width", "24"),
            E.setAttribute("id", D),
            E.setAttribute("height", "24"),
            E.setAttribute("viewBox", "0 0 24 24"),
            E.setAttribute("fill", "none"),
            E.style.marginLeft = "-6px"
    }
    function g() {
        const E = document.createElement("span");
        return E.style.cursor = "pointer",
            E.style.marginLeft = "16px",
            E.style.fontSize = "24px",
            E.innerHTML = " &times;",
            E.onclick = () => {
                oy = !0,
                    h()
            }
            ,
            E
    }
    function S(E, D) {
        E.setAttribute("id", D),
            E.innerText = "Learn more",
            E.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend",
            E.setAttribute("target", "__blank"),
            E.style.paddingLeft = "5px",
            E.style.textDecoration = "underline"
    }
    function v() {
        const E = lT(l)
            , D = i("text")
            , I = document.getElementById(D) || document.createElement("span")
            , P = i("learnmore")
            , M = document.getElementById(P) || document.createElement("a")
            , Q = i("preprendIcon")
            , B = document.getElementById(Q) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (E.created) {
            const q = E.element;
            d(q),
                S(M, P);
            const re = g();
            p(B, Q),
                q.append(B, I, M, re),
                document.body.appendChild(q)
        }
        u ? (I.innerText = "Preview backend disconnected.",
            B.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (B.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,
            I.innerText = "Preview backend running in this workspace."),
            I.setAttribute("id", D)
    }
    document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", v) : v()
}
function kt() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function rd() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())
}
function rT() {
    return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"
}
function oT() {
    const s = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof s == "object" && s.id !== void 0
}
function Gv() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function cT() {
    const s = kt();
    return s.indexOf("MSIE ") >= 0 || s.indexOf("Trident/") >= 0
}
function uT() {
    return Lv.NODE_ADMIN === !0
}
function fT() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function hT() {
    return new Promise((s, t) => {
        try {
            let i = !0;
            const l = "validate-browser-context-for-indexeddb-analytics-module"
                , o = self.indexedDB.open(l);
            o.onsuccess = () => {
                o.result.close(),
                    i || self.indexedDB.deleteDatabase(l),
                    s(!0)
            }
                ,
                o.onupgradeneeded = () => {
                    i = !1
                }
                ,
                o.onerror = () => {
                    t(o.error?.message || "")
                }
        } catch (i) {
            t(i)
        }
    }
    )
}
const dT = "FirebaseError";
class ls extends Error {
    constructor(t, i, l) {
        super(i),
            this.code = t,
            this.customData = l,
            this.name = dT,
            Object.setPrototypeOf(this, ls.prototype),
            Error.captureStackTrace && Error.captureStackTrace(this, Er.prototype.create)
    }
}
class Er {
    constructor(t, i, l) {
        this.service = t,
            this.serviceName = i,
            this.errors = l
    }
    create(t, ...i) {
        const l = i[0] || {}
            , o = `${this.service}/${t}`
            , u = this.errors[t]
            , h = u ? mT(u, l) : "Error"
            , d = `${this.serviceName}: ${h} (${o}).`;
        return new ls(o, d, l)
    }
}
function mT(s, t) {
    return s.replace(pT, (i, l) => {
        const o = t[l];
        return o != null ? String(o) : `<${l}?>`
    }
    )
}
const pT = /\{\$([^}]+)}/g;
function rr(s) {
    return JSON.parse(s)
}
function mt(s) {
    return JSON.stringify(s)
}
const Fv = function (s) {
    let t = {}
        , i = {}
        , l = {}
        , o = "";
    try {
        const u = s.split(".");
        t = rr(sc(u[0]) || ""),
            i = rr(sc(u[1]) || ""),
            o = u[2],
            l = i.d || {},
            delete i.d
    } catch { }
    return {
        header: t,
        claims: i,
        data: l,
        signature: o
    }
}
    , gT = function (s) {
        const t = Fv(s)
            , i = t.claims;
        return !!i && typeof i == "object" && i.hasOwnProperty("iat")
    }
    , _T = function (s) {
        const t = Fv(s).claims;
        return typeof t == "object" && t.admin === !0
    };
function gi(s, t) {
    return Object.prototype.hasOwnProperty.call(s, t)
}
function Ua(s, t) {
    if (Object.prototype.hasOwnProperty.call(s, t))
        return s[t]
}
function Oh(s) {
    for (const t in s)
        if (Object.prototype.hasOwnProperty.call(s, t))
            return !1;
    return !0
}
function ac(s, t, i) {
    const l = {};
    for (const o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (l[o] = t.call(i, s[o], o, s));
    return l
}
function Ms(s, t) {
    if (s === t)
        return !0;
    const i = Object.keys(s)
        , l = Object.keys(t);
    for (const o of i) {
        if (!l.includes(o))
            return !1;
        const u = s[o]
            , h = t[o];
        if (cy(u) && cy(h)) {
            if (!Ms(u, h))
                return !1
        } else if (u !== h)
            return !1
    }
    for (const o of l)
        if (!i.includes(o))
            return !1;
    return !0
}
function cy(s) {
    return s !== null && typeof s == "object"
}
function Fa(s) {
    const t = [];
    for (const [i, l] of Object.entries(s))
        Array.isArray(l) ? l.forEach(o => {
            t.push(encodeURIComponent(i) + "=" + encodeURIComponent(o))
        }
        ) : t.push(encodeURIComponent(i) + "=" + encodeURIComponent(l));
    return t.length ? "&" + t.join("&") : ""
}
class yT {
    constructor() {
        this.chain_ = [],
            this.buf_ = [],
            this.W_ = [],
            this.pad_ = [],
            this.inbuf_ = 0,
            this.total_ = 0,
            this.blockSize = 512 / 8,
            this.pad_[0] = 128;
        for (let t = 1; t < this.blockSize; ++t)
            this.pad_[t] = 0;
        this.reset()
    }
    reset() {
        this.chain_[0] = 1732584193,
            this.chain_[1] = 4023233417,
            this.chain_[2] = 2562383102,
            this.chain_[3] = 271733878,
            this.chain_[4] = 3285377520,
            this.inbuf_ = 0,
            this.total_ = 0
    }
    compress_(t, i) {
        i || (i = 0);
        const l = this.W_;
        if (typeof t == "string")
            for (let v = 0; v < 16; v++)
                l[v] = t.charCodeAt(i) << 24 | t.charCodeAt(i + 1) << 16 | t.charCodeAt(i + 2) << 8 | t.charCodeAt(i + 3),
                    i += 4;
        else
            for (let v = 0; v < 16; v++)
                l[v] = t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3],
                    i += 4;
        for (let v = 16; v < 80; v++) {
            const E = l[v - 3] ^ l[v - 8] ^ l[v - 14] ^ l[v - 16];
            l[v] = (E << 1 | E >>> 31) & 4294967295
        }
        let o = this.chain_[0], u = this.chain_[1], h = this.chain_[2], d = this.chain_[3], p = this.chain_[4], g, S;
        for (let v = 0; v < 80; v++) {
            v < 40 ? v < 20 ? (g = d ^ u & (h ^ d),
                S = 1518500249) : (g = u ^ h ^ d,
                    S = 1859775393) : v < 60 ? (g = u & h | d & (u | h),
                        S = 2400959708) : (g = u ^ h ^ d,
                            S = 3395469782);
            const E = (o << 5 | o >>> 27) + g + p + S + l[v] & 4294967295;
            p = d,
                d = h,
                h = (u << 30 | u >>> 2) & 4294967295,
                u = o,
                o = E
        }
        this.chain_[0] = this.chain_[0] + o & 4294967295,
            this.chain_[1] = this.chain_[1] + u & 4294967295,
            this.chain_[2] = this.chain_[2] + h & 4294967295,
            this.chain_[3] = this.chain_[3] + d & 4294967295,
            this.chain_[4] = this.chain_[4] + p & 4294967295
    }
    update(t, i) {
        if (t == null)
            return;
        i === void 0 && (i = t.length);
        const l = i - this.blockSize;
        let o = 0;
        const u = this.buf_;
        let h = this.inbuf_;
        for (; o < i;) {
            if (h === 0)
                for (; o <= l;)
                    this.compress_(t, o),
                        o += this.blockSize;
            if (typeof t == "string") {
                for (; o < i;)
                    if (u[h] = t.charCodeAt(o),
                        ++h,
                        ++o,
                        h === this.blockSize) {
                        this.compress_(u),
                            h = 0;
                        break
                    }
            } else
                for (; o < i;)
                    if (u[h] = t[o],
                        ++h,
                        ++o,
                        h === this.blockSize) {
                        this.compress_(u),
                            h = 0;
                        break
                    }
        }
        this.inbuf_ = h,
            this.total_ += i
    }
    digest() {
        const t = [];
        let i = this.total_ * 8;
        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        for (let o = this.blockSize - 1; o >= 56; o--)
            this.buf_[o] = i & 255,
                i /= 256;
        this.compress_(this.buf_);
        let l = 0;
        for (let o = 0; o < 5; o++)
            for (let u = 24; u >= 0; u -= 8)
                t[l] = this.chain_[o] >> u & 255,
                    ++l;
        return t
    }
}
function vT(s, t) {
    const i = new ST(s, t);
    return i.subscribe.bind(i)
}
class ST {
    constructor(t, i) {
        this.observers = [],
            this.unsubscribes = [],
            this.observerCount = 0,
            this.task = Promise.resolve(),
            this.finalized = !1,
            this.onNoObservers = i,
            this.task.then(() => {
                t(this)
            }
            ).catch(l => {
                this.error(l)
            }
            )
    }
    next(t) {
        this.forEachObserver(i => {
            i.next(t)
        }
        )
    }
    error(t) {
        this.forEachObserver(i => {
            i.error(t)
        }
        ),
            this.close(t)
    }
    complete() {
        this.forEachObserver(t => {
            t.complete()
        }
        ),
            this.close()
    }
    subscribe(t, i, l) {
        let o;
        if (t === void 0 && i === void 0 && l === void 0)
            throw new Error("Missing Observer.");
        ET(t, ["next", "error", "complete"]) ? o = t : o = {
            next: t,
            error: i,
            complete: l
        },
            o.next === void 0 && (o.next = dh),
            o.error === void 0 && (o.error = dh),
            o.complete === void 0 && (o.complete = dh);
        const u = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? o.error(this.finalError) : o.complete()
            } catch { }
        }
        ),
            this.observers.push(o),
            u
    }
    unsubscribeOne(t) {
        this.observers === void 0 || this.observers[t] === void 0 || (delete this.observers[t],
            this.observerCount -= 1,
            this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(t) {
        if (!this.finalized)
            for (let i = 0; i < this.observers.length; i++)
                this.sendOne(i, t)
    }
    sendOne(t, i) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[t] !== void 0)
                try {
                    i(this.observers[t])
                } catch (l) {
                    typeof console < "u" && console.error && console.error(l)
                }
        }
        )
    }
    close(t) {
        this.finalized || (this.finalized = !0,
            t !== void 0 && (this.finalError = t),
            this.task.then(() => {
                this.observers = void 0,
                    this.onNoObservers = void 0
            }
            ))
    }
}
function ET(s, t) {
    if (typeof s != "object" || s === null)
        return !1;
    for (const i of t)
        if (i in s && typeof s[i] == "function")
            return !0;
    return !1
}
function dh() { }
function od(s, t) {
    return `${s} failed: ${t} argument `
}
const bT = function (s) {
    const t = [];
    let i = 0;
    for (let l = 0; l < s.length; l++) {
        let o = s.charCodeAt(l);
        if (o >= 55296 && o <= 56319) {
            const u = o - 55296;
            l++,
                Y(l < s.length, "Surrogate pair missing trail surrogate.");
            const h = s.charCodeAt(l) - 56320;
            o = 65536 + (u << 10) + h
        }
        o < 128 ? t[i++] = o : o < 2048 ? (t[i++] = o >> 6 | 192,
            t[i++] = o & 63 | 128) : o < 65536 ? (t[i++] = o >> 12 | 224,
                t[i++] = o >> 6 & 63 | 128,
                t[i++] = o & 63 | 128) : (t[i++] = o >> 18 | 240,
                    t[i++] = o >> 12 & 63 | 128,
                    t[i++] = o >> 6 & 63 | 128,
                    t[i++] = o & 63 | 128)
    }
    return t
}
    , Dc = function (s) {
        let t = 0;
        for (let i = 0; i < s.length; i++) {
            const l = s.charCodeAt(i);
            l < 128 ? t++ : l < 2048 ? t += 2 : l >= 55296 && l <= 56319 ? (t += 4,
                i++) : t += 3
        }
        return t
    };
function mn(s) {
    return s && s._delegate ? s._delegate : s
}
class ks {
    constructor(t, i, l) {
        this.name = t,
            this.instanceFactory = i,
            this.type = l,
            this.multipleInstances = !1,
            this.serviceProps = {},
            this.instantiationMode = "LAZY",
            this.onInstanceCreated = null
    }
    setInstantiationMode(t) {
        return this.instantiationMode = t,
            this
    }
    setMultipleInstances(t) {
        return this.multipleInstances = t,
            this
    }
    setServiceProps(t) {
        return this.serviceProps = t,
            this
    }
    setInstanceCreatedCallback(t) {
        return this.onInstanceCreated = t,
            this
    }
}
const As = "[DEFAULT]";
class CT {
    constructor(t, i) {
        this.name = t,
            this.container = i,
            this.component = null,
            this.instances = new Map,
            this.instancesDeferred = new Map,
            this.instancesOptions = new Map,
            this.onInitCallbacks = new Map
    }
    get(t) {
        const i = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(i)) {
            const l = new Ac;
            if (this.instancesDeferred.set(i, l),
                this.isInitialized(i) || this.shouldAutoInitialize())
                try {
                    const o = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    o && l.resolve(o)
                } catch { }
        }
        return this.instancesDeferred.get(i).promise
    }
    getImmediate(t) {
        const i = this.normalizeInstanceIdentifier(t?.identifier)
            , l = t?.optional ?? !1;
        if (this.isInitialized(i) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: i
                })
            } catch (o) {
                if (l)
                    return null;
                throw o
            }
        else {
            if (l)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(t) {
        if (t.name !== this.name)
            throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = t,
            !!this.shouldAutoInitialize()) {
            if (xT(t))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: As
                    })
                } catch { }
            for (const [i, l] of this.instancesDeferred.entries()) {
                const o = this.normalizeInstanceIdentifier(i);
                try {
                    const u = this.getOrInitializeService({
                        instanceIdentifier: o
                    });
                    l.resolve(u)
                } catch { }
            }
        }
    }
    clearInstance(t = As) {
        this.instancesDeferred.delete(t),
            this.instancesOptions.delete(t),
            this.instances.delete(t)
    }
    async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([...t.filter(i => "INTERNAL" in i).map(i => i.INTERNAL.delete()), ...t.filter(i => "_delete" in i).map(i => i._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(t = As) {
        return this.instances.has(t)
    }
    getOptions(t = As) {
        return this.instancesOptions.get(t) || {}
    }
    initialize(t = {}) {
        const { options: i = {} } = t
            , l = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(l))
            throw Error(`${this.name}(${l}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const o = this.getOrInitializeService({
            instanceIdentifier: l,
            options: i
        });
        for (const [u, h] of this.instancesDeferred.entries()) {
            const d = this.normalizeInstanceIdentifier(u);
            l === d && h.resolve(o)
        }
        return o
    }
    onInit(t, i) {
        const l = this.normalizeInstanceIdentifier(i)
            , o = this.onInitCallbacks.get(l) ?? new Set;
        o.add(t),
            this.onInitCallbacks.set(l, o);
        const u = this.instances.get(l);
        return u && t(u, l),
            () => {
                o.delete(t)
            }
    }
    invokeOnInitCallbacks(t, i) {
        const l = this.onInitCallbacks.get(i);
        if (l)
            for (const o of l)
                try {
                    o(t, i)
                } catch { }
    }
    getOrInitializeService({ instanceIdentifier: t, options: i = {} }) {
        let l = this.instances.get(t);
        if (!l && this.component && (l = this.component.instanceFactory(this.container, {
            instanceIdentifier: TT(t),
            options: i
        }),
            this.instances.set(t, l),
            this.instancesOptions.set(t, i),
            this.invokeOnInitCallbacks(l, t),
            this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, t, l)
            } catch { }
        return l || null
    }
    normalizeInstanceIdentifier(t = As) {
        return this.component ? this.component.multipleInstances ? t : As : t
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function TT(s) {
    return s === As ? void 0 : s
}
function xT(s) {
    return s.instantiationMode === "EAGER"
}
class wT {
    constructor(t) {
        this.name = t,
            this.providers = new Map
    }
    addComponent(t) {
        const i = this.getProvider(t.name);
        if (i.isComponentSet())
            throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        i.setComponent(t)
    }
    addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
            this.addComponent(t)
    }
    getProvider(t) {
        if (this.providers.has(t))
            return this.providers.get(t);
        const i = new CT(t, this);
        return this.providers.set(t, i),
            i
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
var Be;
(function (s) {
    s[s.DEBUG = 0] = "DEBUG",
        s[s.VERBOSE = 1] = "VERBOSE",
        s[s.INFO = 2] = "INFO",
        s[s.WARN = 3] = "WARN",
        s[s.ERROR = 4] = "ERROR",
        s[s.SILENT = 5] = "SILENT"
}
)(Be || (Be = {}));
const RT = {
    debug: Be.DEBUG,
    verbose: Be.VERBOSE,
    info: Be.INFO,
    warn: Be.WARN,
    error: Be.ERROR,
    silent: Be.SILENT
}
    , NT = Be.INFO
    , AT = {
        [Be.DEBUG]: "log",
        [Be.VERBOSE]: "log",
        [Be.INFO]: "info",
        [Be.WARN]: "warn",
        [Be.ERROR]: "error"
    }
    , DT = (s, t, ...i) => {
        if (t < s.logLevel)
            return;
        const l = new Date().toISOString()
            , o = AT[t];
        if (o)
            console[o](`[${l}]  ${s.name}:`, ...i);
        else
            throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
    }
    ;
class cd {
    constructor(t) {
        this.name = t,
            this._logLevel = NT,
            this._logHandler = DT,
            this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(t) {
        if (!(t in Be))
            throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this._logLevel = t
    }
    setLogLevel(t) {
        this._logLevel = typeof t == "string" ? RT[t] : t
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(t) {
        if (typeof t != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = t
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(t) {
        this._userLogHandler = t
    }
    debug(...t) {
        this._userLogHandler && this._userLogHandler(this, Be.DEBUG, ...t),
            this._logHandler(this, Be.DEBUG, ...t)
    }
    log(...t) {
        this._userLogHandler && this._userLogHandler(this, Be.VERBOSE, ...t),
            this._logHandler(this, Be.VERBOSE, ...t)
    }
    info(...t) {
        this._userLogHandler && this._userLogHandler(this, Be.INFO, ...t),
            this._logHandler(this, Be.INFO, ...t)
    }
    warn(...t) {
        this._userLogHandler && this._userLogHandler(this, Be.WARN, ...t),
            this._logHandler(this, Be.WARN, ...t)
    }
    error(...t) {
        this._userLogHandler && this._userLogHandler(this, Be.ERROR, ...t),
            this._logHandler(this, Be.ERROR, ...t)
    }
}
const OT = (s, t) => t.some(i => s instanceof i);
let uy, fy;
function IT() {
    return uy || (uy = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function MT() {
    return fy || (fy = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Yv = new WeakMap
    , Ih = new WeakMap
    , Qv = new WeakMap
    , mh = new WeakMap
    , ud = new WeakMap;
function kT(s) {
    const t = new Promise((i, l) => {
        const o = () => {
            s.removeEventListener("success", u),
                s.removeEventListener("error", h)
        }
            , u = () => {
                i(Wi(s.result)),
                    o()
            }
            , h = () => {
                l(s.error),
                    o()
            }
            ;
        s.addEventListener("success", u),
            s.addEventListener("error", h)
    }
    );
    return t.then(i => {
        i instanceof IDBCursor && Yv.set(i, s)
    }
    ).catch(() => { }
    ),
        ud.set(t, s),
        t
}
function LT(s) {
    if (Ih.has(s))
        return;
    const t = new Promise((i, l) => {
        const o = () => {
            s.removeEventListener("complete", u),
                s.removeEventListener("error", h),
                s.removeEventListener("abort", h)
        }
            , u = () => {
                i(),
                    o()
            }
            , h = () => {
                l(s.error || new DOMException("AbortError", "AbortError")),
                    o()
            }
            ;
        s.addEventListener("complete", u),
            s.addEventListener("error", h),
            s.addEventListener("abort", h)
    }
    );
    Ih.set(s, t)
}
let Mh = {
    get(s, t, i) {
        if (s instanceof IDBTransaction) {
            if (t === "done")
                return Ih.get(s);
            if (t === "objectStoreNames")
                return s.objectStoreNames || Qv.get(s);
            if (t === "store")
                return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0])
        }
        return Wi(s[t])
    },
    set(s, t, i) {
        return s[t] = i,
            !0
    },
    has(s, t) {
        return s instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in s
    }
};
function UT(s) {
    Mh = s(Mh)
}
function jT(s) {
    return s === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (t, ...i) {
        const l = s.call(ph(this), t, ...i);
        return Qv.set(l, t.sort ? t.sort() : [t]),
            Wi(l)
    }
        : MT().includes(s) ? function (...t) {
            return s.apply(ph(this), t),
                Wi(Yv.get(this))
        }
            : function (...t) {
                return Wi(s.apply(ph(this), t))
            }
}
function zT(s) {
    return typeof s == "function" ? jT(s) : (s instanceof IDBTransaction && LT(s),
        OT(s, IT()) ? new Proxy(s, Mh) : s)
}
function Wi(s) {
    if (s instanceof IDBRequest)
        return kT(s);
    if (mh.has(s))
        return mh.get(s);
    const t = zT(s);
    return t !== s && (mh.set(s, t),
        ud.set(t, s)),
        t
}
const ph = s => ud.get(s);
function HT(s, t, { blocked: i, upgrade: l, blocking: o, terminated: u } = {}) {
    const h = indexedDB.open(s, t)
        , d = Wi(h);
    return l && h.addEventListener("upgradeneeded", p => {
        l(Wi(h.result), p.oldVersion, p.newVersion, Wi(h.transaction), p)
    }
    ),
        i && h.addEventListener("blocked", p => i(p.oldVersion, p.newVersion, p)),
        d.then(p => {
            u && p.addEventListener("close", () => u()),
                o && p.addEventListener("versionchange", g => o(g.oldVersion, g.newVersion, g))
        }
        ).catch(() => { }
        ),
        d
}
const BT = ["get", "getKey", "getAll", "getAllKeys", "count"]
    , PT = ["put", "add", "delete", "clear"]
    , gh = new Map;
function hy(s, t) {
    if (!(s instanceof IDBDatabase && !(t in s) && typeof t == "string"))
        return;
    if (gh.get(t))
        return gh.get(t);
    const i = t.replace(/FromIndex$/, "")
        , l = t !== i
        , o = PT.includes(i);
    if (!(i in (l ? IDBIndex : IDBObjectStore).prototype) || !(o || BT.includes(i)))
        return;
    const u = async function (h, ...d) {
        const p = this.transaction(h, o ? "readwrite" : "readonly");
        let g = p.store;
        return l && (g = g.index(d.shift())),
            (await Promise.all([g[i](...d), o && p.done]))[0]
    };
    return gh.set(t, u),
        u
}
UT(s => ({
    ...s,
    get: (t, i, l) => hy(t, i) || s.get(t, i, l),
    has: (t, i) => !!hy(t, i) || s.has(t, i)
}));
class qT {
    constructor(t) {
        this.container = t
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(i => {
            if (VT(i)) {
                const l = i.getImmediate();
                return `${l.library}/${l.version}`
            } else
                return null
        }
        ).filter(i => i).join(" ")
    }
}
function VT(s) {
    return s.getComponent()?.type === "VERSION"
}
const kh = "@firebase/app"
    , dy = "0.14.9";
const ui = new cd("@firebase/app")
    , GT = "@firebase/app-compat"
    , FT = "@firebase/analytics-compat"
    , YT = "@firebase/analytics"
    , QT = "@firebase/app-check-compat"
    , KT = "@firebase/app-check"
    , XT = "@firebase/auth"
    , WT = "@firebase/auth-compat"
    , ZT = "@firebase/database"
    , JT = "@firebase/data-connect"
    , $T = "@firebase/database-compat"
    , ex = "@firebase/functions"
    , tx = "@firebase/functions-compat"
    , nx = "@firebase/installations"
    , ix = "@firebase/installations-compat"
    , sx = "@firebase/messaging"
    , ax = "@firebase/messaging-compat"
    , lx = "@firebase/performance"
    , rx = "@firebase/performance-compat"
    , ox = "@firebase/remote-config"
    , cx = "@firebase/remote-config-compat"
    , ux = "@firebase/storage"
    , fx = "@firebase/storage-compat"
    , hx = "@firebase/firestore"
    , dx = "@firebase/ai"
    , mx = "@firebase/firestore-compat"
    , px = "firebase"
    , gx = "12.10.0";
const Lh = "[DEFAULT]"
    , _x = {
        [kh]: "fire-core",
        [GT]: "fire-core-compat",
        [YT]: "fire-analytics",
        [FT]: "fire-analytics-compat",
        [KT]: "fire-app-check",
        [QT]: "fire-app-check-compat",
        [XT]: "fire-auth",
        [WT]: "fire-auth-compat",
        [ZT]: "fire-rtdb",
        [JT]: "fire-data-connect",
        [$T]: "fire-rtdb-compat",
        [ex]: "fire-fn",
        [tx]: "fire-fn-compat",
        [nx]: "fire-iid",
        [ix]: "fire-iid-compat",
        [sx]: "fire-fcm",
        [ax]: "fire-fcm-compat",
        [lx]: "fire-perf",
        [rx]: "fire-perf-compat",
        [ox]: "fire-rc",
        [cx]: "fire-rc-compat",
        [ux]: "fire-gcs",
        [fx]: "fire-gcs-compat",
        [hx]: "fire-fst",
        [mx]: "fire-fst-compat",
        [dx]: "fire-vertex",
        "fire-js": "fire-js",
        [px]: "fire-js-all"
    };
const lc = new Map
    , yx = new Map
    , Uh = new Map;
function my(s, t) {
    try {
        s.container.addComponent(t)
    } catch (i) {
        ui.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`, i)
    }
}
function ja(s) {
    const t = s.name;
    if (Uh.has(t))
        return ui.debug(`There were multiple attempts to register component ${t}.`),
            !1;
    Uh.set(t, s);
    for (const i of lc.values())
        my(i, s);
    for (const i of yx.values())
        my(i, s);
    return !0
}
function fd(s, t) {
    const i = s.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return i && i.triggerHeartbeat(),
        s.container.getProvider(t)
}
function En(s) {
    return s == null ? !1 : s.settings !== void 0
}
const vx = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}
    , Zi = new Er("app", "Firebase", vx);
class Sx {
    constructor(t, i, l) {
        this._isDeleted = !1,
            this._options = {
                ...t
            },
            this._config = {
                ...i
            },
            this._name = i.name,
            this._automaticDataCollectionEnabled = i.automaticDataCollectionEnabled,
            this._container = l,
            this.container.addComponent(new ks("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
            this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(),
            this._automaticDataCollectionEnabled = t
    }
    get name() {
        return this.checkDestroyed(),
            this._name
    }
    get options() {
        return this.checkDestroyed(),
            this._options
    }
    get config() {
        return this.checkDestroyed(),
            this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(t) {
        this._isDeleted = t
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw Zi.create("app-deleted", {
                appName: this._name
            })
    }
}
const Ya = gx;
function Kv(s, t = {}) {
    let i = s;
    typeof t != "object" && (t = {
        name: t
    });
    const l = {
        name: Lh,
        automaticDataCollectionEnabled: !0,
        ...t
    }
        , o = l.name;
    if (typeof o != "string" || !o)
        throw Zi.create("bad-app-name", {
            appName: String(o)
        });
    if (i || (i = Bv()),
        !i)
        throw Zi.create("no-options");
    const u = lc.get(o);
    if (u) {
        if (Ms(i, u.options) && Ms(l, u.config))
            return u;
        throw Zi.create("duplicate-app", {
            appName: o
        })
    }
    const h = new wT(o);
    for (const p of Uh.values())
        h.addComponent(p);
    const d = new Sx(i, l, h);
    return lc.set(o, d),
        d
}
function Xv(s = Lh) {
    const t = lc.get(s);
    if (!t && s === Lh && Bv())
        return Kv();
    if (!t)
        throw Zi.create("no-app", {
            appName: s
        });
    return t
}
function Ji(s, t, i) {
    let l = _x[s] ?? s;
    i && (l += `-${i}`);
    const o = l.match(/\s|\//)
        , u = t.match(/\s|\//);
    if (o || u) {
        const h = [`Unable to register library "${l}" with version "${t}":`];
        o && h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),
            o && u && h.push("and"),
            u && h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
            ui.warn(h.join(" "));
        return
    }
    ja(new ks(`${l}-version`, () => ({
        library: l,
        version: t
    }), "VERSION"))
}
const Ex = "firebase-heartbeat-database"
    , bx = 1
    , or = "firebase-heartbeat-store";
let _h = null;
function Wv() {
    return _h || (_h = HT(Ex, bx, {
        upgrade: (s, t) => {
            switch (t) {
                case 0:
                    try {
                        s.createObjectStore(or)
                    } catch (i) {
                        console.warn(i)
                    }
            }
        }
    }).catch(s => {
        throw Zi.create("idb-open", {
            originalErrorMessage: s.message
        })
    }
    )),
        _h
}
async function Cx(s) {
    try {
        const i = (await Wv()).transaction(or)
            , l = await i.objectStore(or).get(Zv(s));
        return await i.done,
            l
    } catch (t) {
        if (t instanceof ls)
            ui.warn(t.message);
        else {
            const i = Zi.create("idb-get", {
                originalErrorMessage: t?.message
            });
            ui.warn(i.message)
        }
    }
}
async function py(s, t) {
    try {
        const l = (await Wv()).transaction(or, "readwrite");
        await l.objectStore(or).put(t, Zv(s)),
            await l.done
    } catch (i) {
        if (i instanceof ls)
            ui.warn(i.message);
        else {
            const l = Zi.create("idb-set", {
                originalErrorMessage: i?.message
            });
            ui.warn(l.message)
        }
    }
}
function Zv(s) {
    return `${s.name}!${s.options.appId}`
}
const Tx = 1024
    , xx = 30;
class wx {
    constructor(t) {
        this.container = t,
            this._heartbeatsCache = null;
        const i = this.container.getProvider("app").getImmediate();
        this._storage = new Nx(i),
            this._heartbeatsCachePromise = this._storage.read().then(l => (this._heartbeatsCache = l,
                l))
    }
    async triggerHeartbeat() {
        try {
            const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
                , l = gy();
            if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise,
                this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === l || this._heartbeatsCache.heartbeats.some(o => o.date === l))
                return;
            if (this._heartbeatsCache.heartbeats.push({
                date: l,
                agent: i
            }),
                this._heartbeatsCache.heartbeats.length > xx) {
                const o = Ax(this._heartbeatsCache.heartbeats);
                this._heartbeatsCache.heartbeats.splice(o, 1)
            }
            return this._storage.overwrite(this._heartbeatsCache)
        } catch (t) {
            ui.warn(t)
        }
    }
    async getHeartbeatsHeader() {
        try {
            if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
                this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0)
                return "";
            const t = gy()
                , { heartbeatsToSend: i, unsentEntries: l } = Rx(this._heartbeatsCache.heartbeats)
                , o = ic(JSON.stringify({
                    version: 2,
                    heartbeats: i
                }));
            return this._heartbeatsCache.lastSentHeartbeatDate = t,
                l.length > 0 ? (this._heartbeatsCache.heartbeats = l,
                    await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
                        this._storage.overwrite(this._heartbeatsCache)),
                o
        } catch (t) {
            return ui.warn(t),
                ""
        }
    }
}
function gy() {
    return new Date().toISOString().substring(0, 10)
}
function Rx(s, t = Tx) {
    const i = [];
    let l = s.slice();
    for (const o of s) {
        const u = i.find(h => h.agent === o.agent);
        if (u) {
            if (u.dates.push(o.date),
                _y(i) > t) {
                u.dates.pop();
                break
            }
        } else if (i.push({
            agent: o.agent,
            dates: [o.date]
        }),
            _y(i) > t) {
            i.pop();
            break
        }
        l = l.slice(1)
    }
    return {
        heartbeatsToSend: i,
        unsentEntries: l
    }
}
class Nx {
    constructor(t) {
        this.app = t,
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return fT() ? hT().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const i = await Cx(this.app);
            return i?.heartbeats ? i : {
                heartbeats: []
            }
        } else
            return {
                heartbeats: []
            }
    }
    async overwrite(t) {
        if (await this._canUseIndexedDBPromise) {
            const l = await this.read();
            return py(this.app, {
                lastSentHeartbeatDate: t.lastSentHeartbeatDate ?? l.lastSentHeartbeatDate,
                heartbeats: t.heartbeats
            })
        } else
            return
    }
    async add(t) {
        if (await this._canUseIndexedDBPromise) {
            const l = await this.read();
            return py(this.app, {
                lastSentHeartbeatDate: t.lastSentHeartbeatDate ?? l.lastSentHeartbeatDate,
                heartbeats: [...l.heartbeats, ...t.heartbeats]
            })
        } else
            return
    }
}
function _y(s) {
    return ic(JSON.stringify({
        version: 2,
        heartbeats: s
    })).length
}
function Ax(s) {
    if (s.length === 0)
        return -1;
    let t = 0
        , i = s[0].date;
    for (let l = 1; l < s.length; l++)
        s[l].date < i && (i = s[l].date,
            t = l);
    return t
}
function Dx(s) {
    ja(new ks("platform-logger", t => new qT(t), "PRIVATE")),
        ja(new ks("heartbeat", t => new wx(t), "PRIVATE")),
        Ji(kh, dy, s),
        Ji(kh, dy, "esm2020"),
        Ji("fire-js", "")
}
Dx("");
var yy = {};
const vy = "@firebase/database"
    , Sy = "1.1.1";
let Jv = "";
function Ox(s) {
    Jv = s
}
class Ix {
    constructor(t) {
        this.domStorage_ = t,
            this.prefix_ = "firebase:"
    }
    set(t, i) {
        i == null ? this.domStorage_.removeItem(this.prefixedName_(t)) : this.domStorage_.setItem(this.prefixedName_(t), mt(i))
    }
    get(t) {
        const i = this.domStorage_.getItem(this.prefixedName_(t));
        return i == null ? null : rr(i)
    }
    remove(t) {
        this.domStorage_.removeItem(this.prefixedName_(t))
    }
    prefixedName_(t) {
        return this.prefix_ + t
    }
    toString() {
        return this.domStorage_.toString()
    }
}
class Mx {
    constructor() {
        this.cache_ = {},
            this.isInMemoryStorage = !0
    }
    set(t, i) {
        i == null ? delete this.cache_[t] : this.cache_[t] = i
    }
    get(t) {
        return gi(this.cache_, t) ? this.cache_[t] : null
    }
    remove(t) {
        delete this.cache_[t]
    }
}
const $v = function (s) {
    try {
        if (typeof window < "u" && typeof window[s] < "u") {
            const t = window[s];
            return t.setItem("firebase:sentinel", "cache"),
                t.removeItem("firebase:sentinel"),
                new Ix(t)
        }
    } catch { }
    return new Mx
}
    , Os = $v("localStorage")
    , kx = $v("sessionStorage");
const Oa = new cd("@firebase/database")
    , Lx = (function () {
        let s = 1;
        return function () {
            return s++
        }
    }
    )()
    , eS = function (s) {
        const t = bT(s)
            , i = new yT;
        i.update(t);
        const l = i.digest();
        return ad.encodeByteArray(l)
    }
    , br = function (...s) {
        let t = "";
        for (let i = 0; i < s.length; i++) {
            const l = s[i];
            Array.isArray(l) || l && typeof l == "object" && typeof l.length == "number" ? t += br.apply(null, l) : typeof l == "object" ? t += mt(l) : t += l,
                t += " "
        }
        return t
    };
let er = null
    , Ey = !0;
const Ux = function (s, t) {
    Y(!0, "Can't turn on custom loggers persistently."),
        Oa.logLevel = Be.VERBOSE,
        er = Oa.log.bind(Oa)
}
    , At = function (...s) {
        if (Ey === !0 && (Ey = !1,
            er === null && kx.get("logging_enabled") === !0 && Ux()),
            er) {
            const t = br.apply(null, s);
            er(t)
        }
    }
    , Cr = function (s) {
        return function (...t) {
            At(s, ...t)
        }
    }
    , jh = function (...s) {
        const t = "FIREBASE INTERNAL ERROR: " + br(...s);
        Oa.error(t)
    }
    , fi = function (...s) {
        const t = `FIREBASE FATAL ERROR: ${br(...s)}`;
        throw Oa.error(t),
        new Error(t)
    }
    , Vt = function (...s) {
        const t = "FIREBASE WARNING: " + br(...s);
        Oa.warn(t)
    }
    , jx = function () {
        typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
    }
    , tS = function (s) {
        return typeof s == "number" && (s !== s || s === Number.POSITIVE_INFINITY || s === Number.NEGATIVE_INFINITY)
    }
    , zx = function (s) {
        if (document.readyState === "complete")
            s();
        else {
            let t = !1;
            const i = function () {
                if (!document.body) {
                    setTimeout(i, Math.floor(10));
                    return
                }
                t || (t = !0,
                    s())
            };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", i, !1),
                window.addEventListener("load", i, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", () => {
                    document.readyState === "complete" && i()
                }
                ),
                    window.attachEvent("onload", i))
        }
    }
    , za = "[MIN_NAME]"
    , Ls = "[MAX_NAME]"
    , Qa = function (s, t) {
        if (s === t)
            return 0;
        if (s === za || t === Ls)
            return -1;
        if (t === za || s === Ls)
            return 1;
        {
            const i = by(s)
                , l = by(t);
            return i !== null ? l !== null ? i - l === 0 ? s.length - t.length : i - l : -1 : l !== null ? 1 : s < t ? -1 : 1
        }
    }
    , Hx = function (s, t) {
        return s === t ? 0 : s < t ? -1 : 1
    }
    , Xl = function (s, t) {
        if (t && s in t)
            return t[s];
        throw new Error("Missing required key (" + s + ") in object: " + mt(t))
    }
    , hd = function (s) {
        if (typeof s != "object" || s === null)
            return mt(s);
        const t = [];
        for (const l in s)
            t.push(l);
        t.sort();
        let i = "{";
        for (let l = 0; l < t.length; l++)
            l !== 0 && (i += ","),
                i += mt(t[l]),
                i += ":",
                i += hd(s[t[l]]);
        return i += "}",
            i
    }
    , nS = function (s, t) {
        const i = s.length;
        if (i <= t)
            return [s];
        const l = [];
        for (let o = 0; o < i; o += t)
            o + t > i ? l.push(s.substring(o, i)) : l.push(s.substring(o, o + t));
        return l
    };
function Gt(s, t) {
    for (const i in s)
        s.hasOwnProperty(i) && t(i, s[i])
}
const iS = function (s) {
    Y(!tS(s), "Invalid JSON number");
    const t = 11
        , i = 52
        , l = (1 << t - 1) - 1;
    let o, u, h, d, p;
    s === 0 ? (u = 0,
        h = 0,
        o = 1 / s === -1 / 0 ? 1 : 0) : (o = s < 0,
            s = Math.abs(s),
            s >= Math.pow(2, 1 - l) ? (d = Math.min(Math.floor(Math.log(s) / Math.LN2), l),
                u = d + l,
                h = Math.round(s * Math.pow(2, i - d) - Math.pow(2, i))) : (u = 0,
                    h = Math.round(s / Math.pow(2, 1 - l - i))));
    const g = [];
    for (p = i; p; p -= 1)
        g.push(h % 2 ? 1 : 0),
            h = Math.floor(h / 2);
    for (p = t; p; p -= 1)
        g.push(u % 2 ? 1 : 0),
            u = Math.floor(u / 2);
    g.push(o ? 1 : 0),
        g.reverse();
    const S = g.join("");
    let v = "";
    for (p = 0; p < 64; p += 8) {
        let E = parseInt(S.substr(p, 8), 2).toString(16);
        E.length === 1 && (E = "0" + E),
            v = v + E
    }
    return v.toLowerCase()
}
    , Bx = function () {
        return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href))
    }
    , Px = function () {
        return typeof Windows == "object" && typeof Windows.UI == "object"
    };
function qx(s, t) {
    let i = "Unknown Error";
    s === "too_big" ? i = "The data requested exceeds the maximum size that can be accessed with a single request." : s === "permission_denied" ? i = "Client doesn't have permission to access the desired data." : s === "unavailable" && (i = "The service is unavailable");
    const l = new Error(s + " at " + t._path.toString() + ": " + i);
    return l.code = s.toUpperCase(),
        l
}
const Vx = new RegExp("^-?(0*)\\d{1,10}$")
    , Gx = -2147483648
    , Fx = 2147483647
    , by = function (s) {
        if (Vx.test(s)) {
            const t = Number(s);
            if (t >= Gx && t <= Fx)
                return t
        }
        return null
    }
    , Ka = function (s) {
        try {
            s()
        } catch (t) {
            setTimeout(() => {
                const i = t.stack || "";
                throw Vt("Exception was thrown by user callback.", i),
                t
            }
                , Math.floor(0))
        }
    }
    , Yx = function () {
        return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
    }
    , tr = function (s, t) {
        const i = setTimeout(s, t);
        return typeof i == "number" && typeof Deno < "u" && Deno.unrefTimer ? Deno.unrefTimer(i) : typeof i == "object" && i.unref && i.unref(),
            i
    };
class Qx {
    constructor(t, i) {
        this.appCheckProvider = i,
            this.appName = t.name,
            En(t) && t.settings.appCheckToken && (this.serverAppAppCheckToken = t.settings.appCheckToken),
            this.appCheck = i?.getImmediate({
                optional: !0
            }),
            this.appCheck || i?.get().then(l => this.appCheck = l)
    }
    getToken(t) {
        if (this.serverAppAppCheckToken) {
            if (t)
                throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
            return Promise.resolve({
                token: this.serverAppAppCheckToken
            })
        }
        return this.appCheck ? this.appCheck.getToken(t) : new Promise((i, l) => {
            setTimeout(() => {
                this.appCheck ? this.getToken(t).then(i, l) : i(null)
            }
                , 0)
        }
        )
    }
    addTokenChangeListener(t) {
        this.appCheckProvider?.get().then(i => i.addTokenListener(t))
    }
    notifyForInvalidToken() {
        Vt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)
    }
}
class Kx {
    constructor(t, i, l) {
        this.appName_ = t,
            this.firebaseOptions_ = i,
            this.authProvider_ = l,
            this.auth_ = null,
            this.auth_ = l.getImmediate({
                optional: !0
            }),
            this.auth_ || l.onInit(o => this.auth_ = o)
    }
    getToken(t) {
        return this.auth_ ? this.auth_.getToken(t).catch(i => i && i.code === "auth/token-not-initialized" ? (At("Got auth/token-not-initialized error.  Treating as null token."),
            null) : Promise.reject(i)) : new Promise((i, l) => {
                setTimeout(() => {
                    this.auth_ ? this.getToken(t).then(i, l) : i(null)
                }
                    , 0)
            }
            )
    }
    addTokenChangeListener(t) {
        this.auth_ ? this.auth_.addAuthTokenListener(t) : this.authProvider_.get().then(i => i.addAuthTokenListener(t))
    }
    removeTokenChangeListener(t) {
        this.authProvider_.get().then(i => i.removeAuthTokenListener(t))
    }
    notifyForInvalidToken() {
        let t = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
        "credential" in this.firebaseOptions_ ? t += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? t += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : t += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',
            Vt(t)
    }
}
class Zo {
    constructor(t) {
        this.accessToken = t
    }
    getToken(t) {
        return Promise.resolve({
            accessToken: this.accessToken
        })
    }
    addTokenChangeListener(t) {
        t(this.accessToken)
    }
    removeTokenChangeListener(t) { }
    notifyForInvalidToken() { }
}
Zo.OWNER = "owner";
const dd = "5"
    , sS = "v"
    , aS = "s"
    , lS = "r"
    , rS = "f"
    , oS = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/
    , cS = "ls"
    , uS = "p"
    , zh = "ac"
    , fS = "websocket"
    , hS = "long_polling";
class dS {
    constructor(t, i, l, o, u = !1, h = "", d = !1, p = !1, g = null) {
        this.secure = i,
            this.namespace = l,
            this.webSocketOnly = o,
            this.nodeAdmin = u,
            this.persistenceKey = h,
            this.includeNamespaceInQueryParams = d,
            this.isUsingEmulator = p,
            this.emulatorOptions = g,
            this._host = t.toLowerCase(),
            this._domain = this._host.substr(this._host.indexOf(".") + 1),
            this.internalHost = Os.get("host:" + t) || this._host
    }
    isCacheableHost() {
        return this.internalHost.substr(0, 2) === "s-"
    }
    isCustomHost() {
        return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com"
    }
    get host() {
        return this._host
    }
    set host(t) {
        t !== this.internalHost && (this.internalHost = t,
            this.isCacheableHost() && Os.set("host:" + this._host, this.internalHost))
    }
    toString() {
        let t = this.toURLString();
        return this.persistenceKey && (t += "<" + this.persistenceKey + ">"),
            t
    }
    toURLString() {
        const t = this.secure ? "https://" : "http://"
            , i = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
        return `${t}${this.host}/${i}`
    }
}
function Xx(s) {
    return s.host !== s.internalHost || s.isCustomHost() || s.includeNamespaceInQueryParams
}
function mS(s, t, i) {
    Y(typeof t == "string", "typeof type must == string"),
        Y(typeof i == "object", "typeof params must == object");
    let l;
    if (t === fS)
        l = (s.secure ? "wss://" : "ws://") + s.internalHost + "/.ws?";
    else if (t === hS)
        l = (s.secure ? "https://" : "http://") + s.internalHost + "/.lp?";
    else
        throw new Error("Unknown connection type: " + t);
    Xx(s) && (i.ns = s.namespace);
    const o = [];
    return Gt(i, (u, h) => {
        o.push(u + "=" + h)
    }
    ),
        l + o.join("&")
}
class Wx {
    constructor() {
        this.counters_ = {}
    }
    incrementCounter(t, i = 1) {
        gi(this.counters_, t) || (this.counters_[t] = 0),
            this.counters_[t] += i
    }
    get() {
        return ZC(this.counters_)
    }
}
const yh = {}
    , vh = {};
function md(s) {
    const t = s.toString();
    return yh[t] || (yh[t] = new Wx),
        yh[t]
}
function Zx(s, t) {
    const i = s.toString();
    return vh[i] || (vh[i] = t()),
        vh[i]
}
class Jx {
    constructor(t) {
        this.onMessage_ = t,
            this.pendingResponses = [],
            this.currentResponseNum = 0,
            this.closeAfterResponse = -1,
            this.onClose = null
    }
    closeAfter(t, i) {
        this.closeAfterResponse = t,
            this.onClose = i,
            this.closeAfterResponse < this.currentResponseNum && (this.onClose(),
                this.onClose = null)
    }
    handleResponse(t, i) {
        for (this.pendingResponses[t] = i; this.pendingResponses[this.currentResponseNum];) {
            const l = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for (let o = 0; o < l.length; ++o)
                l[o] && Ka(() => {
                    this.onMessage_(l[o])
                }
                );
            if (this.currentResponseNum === this.closeAfterResponse) {
                this.onClose && (this.onClose(),
                    this.onClose = null);
                break
            }
            this.currentResponseNum++
        }
    }
}
const Cy = "start"
    , $x = "close"
    , ew = "pLPCommand"
    , tw = "pRTLPCB"
    , pS = "id"
    , gS = "pw"
    , _S = "ser"
    , nw = "cb"
    , iw = "seg"
    , sw = "ts"
    , aw = "d"
    , lw = "dframe"
    , yS = 1870
    , vS = 30
    , rw = yS - vS
    , ow = 25e3
    , cw = 3e4;
class Aa {
    constructor(t, i, l, o, u, h, d) {
        this.connId = t,
            this.repoInfo = i,
            this.applicationId = l,
            this.appCheckToken = o,
            this.authToken = u,
            this.transportSessionId = h,
            this.lastSessionId = d,
            this.bytesSent = 0,
            this.bytesReceived = 0,
            this.everConnected_ = !1,
            this.log_ = Cr(t),
            this.stats_ = md(i),
            this.urlFn = p => (this.appCheckToken && (p[zh] = this.appCheckToken),
                mS(i, hS, p))
    }
    open(t, i) {
        this.curSegmentNum = 0,
            this.onDisconnect_ = i,
            this.myPacketOrderer = new Jx(t),
            this.isClosed_ = !1,
            this.connectTimeoutTimer_ = setTimeout(() => {
                this.log_("Timed out trying to connect."),
                    this.onClosed_(),
                    this.connectTimeoutTimer_ = null
            }
                , Math.floor(cw)),
            zx(() => {
                if (this.isClosed_)
                    return;
                this.scriptTagHolder = new pd((...u) => {
                    const [h, d, p, g, S] = u;
                    if (this.incrementIncomingBytes_(u),
                        !!this.scriptTagHolder)
                        if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
                            this.connectTimeoutTimer_ = null),
                            this.everConnected_ = !0,
                            h === Cy)
                            this.id = d,
                                this.password = p;
                        else if (h === $x)
                            d ? (this.scriptTagHolder.sendNewPolls = !1,
                                this.myPacketOrderer.closeAfter(d, () => {
                                    this.onClosed_()
                                }
                                )) : this.onClosed_();
                        else
                            throw new Error("Unrecognized command received: " + h)
                }
                    , (...u) => {
                        const [h, d] = u;
                        this.incrementIncomingBytes_(u),
                            this.myPacketOrderer.handleResponse(h, d)
                    }
                    , () => {
                        this.onClosed_()
                    }
                    , this.urlFn);
                const l = {};
                l[Cy] = "t",
                    l[_S] = Math.floor(Math.random() * 1e8),
                    this.scriptTagHolder.uniqueCallbackIdentifier && (l[nw] = this.scriptTagHolder.uniqueCallbackIdentifier),
                    l[sS] = dd,
                    this.transportSessionId && (l[aS] = this.transportSessionId),
                    this.lastSessionId && (l[cS] = this.lastSessionId),
                    this.applicationId && (l[uS] = this.applicationId),
                    this.appCheckToken && (l[zh] = this.appCheckToken),
                    typeof location < "u" && location.hostname && oS.test(location.hostname) && (l[lS] = rS);
                const o = this.urlFn(l);
                this.log_("Connecting via long-poll to " + o),
                    this.scriptTagHolder.addTag(o, () => { }
                    )
            }
            )
    }
    start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password),
            this.addDisconnectPingFrame(this.id, this.password)
    }
    static forceAllow() {
        Aa.forceAllow_ = !0
    }
    static forceDisallow() {
        Aa.forceDisallow_ = !0
    }
    static isAvailable() {
        return Aa.forceAllow_ ? !0 : !Aa.forceDisallow_ && typeof document < "u" && document.createElement != null && !Bx() && !Px()
    }
    markConnectionHealthy() { }
    shutdown_() {
        this.isClosed_ = !0,
            this.scriptTagHolder && (this.scriptTagHolder.close(),
                this.scriptTagHolder = null),
            this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame),
                this.myDisconnFrame = null),
            this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
                this.connectTimeoutTimer_ = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("Longpoll is closing itself"),
            this.shutdown_(),
            this.onDisconnect_ && (this.onDisconnect_(this.everConnected_),
                this.onDisconnect_ = null))
    }
    close() {
        this.isClosed_ || (this.log_("Longpoll is being closed."),
            this.shutdown_())
    }
    send(t) {
        const i = mt(t);
        this.bytesSent += i.length,
            this.stats_.incrementCounter("bytes_sent", i.length);
        const l = jv(i)
            , o = nS(l, rw);
        for (let u = 0; u < o.length; u++)
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, o.length, o[u]),
                this.curSegmentNum++
    }
    addDisconnectPingFrame(t, i) {
        this.myDisconnFrame = document.createElement("iframe");
        const l = {};
        l[lw] = "t",
            l[pS] = t,
            l[gS] = i,
            this.myDisconnFrame.src = this.urlFn(l),
            this.myDisconnFrame.style.display = "none",
            document.body.appendChild(this.myDisconnFrame)
    }
    incrementIncomingBytes_(t) {
        const i = mt(t).length;
        this.bytesReceived += i,
            this.stats_.incrementCounter("bytes_received", i)
    }
}
class pd {
    constructor(t, i, l, o) {
        this.onDisconnect = l,
            this.urlFn = o,
            this.outstandingRequests = new Set,
            this.pendingSegs = [],
            this.currentSerial = Math.floor(Math.random() * 1e8),
            this.sendNewPolls = !0;
        {
            this.uniqueCallbackIdentifier = Lx(),
                window[ew + this.uniqueCallbackIdentifier] = t,
                window[tw + this.uniqueCallbackIdentifier] = i,
                this.myIFrame = pd.createIFrame_();
            let u = "";
            this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (u = '<script>document.domain="' + document.domain + '";<\/script>');
            const h = "<html><body>" + u + "</body></html>";
            try {
                this.myIFrame.doc.open(),
                    this.myIFrame.doc.write(h),
                    this.myIFrame.doc.close()
            } catch (d) {
                At("frame writing exception"),
                    d.stack && At(d.stack),
                    At(d)
            }
        }
    }
    static createIFrame_() {
        const t = document.createElement("iframe");
        if (t.style.display = "none",
            document.body) {
            document.body.appendChild(t);
            try {
                t.contentWindow.document || At("No IE domain setting required")
            } catch {
                const l = document.domain;
                t.src = "javascript:void((function(){document.open();document.domain='" + l + "';document.close();})())"
            }
        } else
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        return t.contentDocument ? t.doc = t.contentDocument : t.contentWindow ? t.doc = t.contentWindow.document : t.document && (t.doc = t.document),
            t
    }
    close() {
        this.alive = !1,
            this.myIFrame && (this.myIFrame.doc.body.textContent = "",
                setTimeout(() => {
                    this.myIFrame !== null && (document.body.removeChild(this.myIFrame),
                        this.myIFrame = null)
                }
                    , Math.floor(0)));
        const t = this.onDisconnect;
        t && (this.onDisconnect = null,
            t())
    }
    startLongPoll(t, i) {
        for (this.myID = t,
            this.myPW = i,
            this.alive = !0; this.newRequest_();)
            ;
    }
    newRequest_() {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            const t = {};
            t[pS] = this.myID,
                t[gS] = this.myPW,
                t[_S] = this.currentSerial;
            let i = this.urlFn(t)
                , l = ""
                , o = 0;
            for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + vS + l.length <= yS;) {
                const h = this.pendingSegs.shift();
                l = l + "&" + iw + o + "=" + h.seg + "&" + sw + o + "=" + h.ts + "&" + aw + o + "=" + h.d,
                    o++
            }
            return i = i + l,
                this.addLongPollTag_(i, this.currentSerial),
                !0
        } else
            return !1
    }
    enqueueSegment(t, i, l) {
        this.pendingSegs.push({
            seg: t,
            ts: i,
            d: l
        }),
            this.alive && this.newRequest_()
    }
    addLongPollTag_(t, i) {
        this.outstandingRequests.add(i);
        const l = () => {
            this.outstandingRequests.delete(i),
                this.newRequest_()
        }
            , o = setTimeout(l, Math.floor(ow))
            , u = () => {
                clearTimeout(o),
                    l()
            }
            ;
        this.addTag(t, u)
    }
    addTag(t, i) {
        setTimeout(() => {
            try {
                if (!this.sendNewPolls)
                    return;
                const l = this.myIFrame.doc.createElement("script");
                l.type = "text/javascript",
                    l.async = !0,
                    l.src = t,
                    l.onload = l.onreadystatechange = function () {
                        const o = l.readyState;
                        (!o || o === "loaded" || o === "complete") && (l.onload = l.onreadystatechange = null,
                            l.parentNode && l.parentNode.removeChild(l),
                            i())
                    }
                    ,
                    l.onerror = () => {
                        At("Long-poll script failed to load: " + t),
                            this.sendNewPolls = !1,
                            this.close()
                    }
                    ,
                    this.myIFrame.doc.body.appendChild(l)
            } catch { }
        }
            , Math.floor(1))
    }
}
const uw = 16384
    , fw = 45e3;
let rc = null;
typeof MozWebSocket < "u" ? rc = MozWebSocket : typeof WebSocket < "u" && (rc = WebSocket);
class bn {
    constructor(t, i, l, o, u, h, d) {
        this.connId = t,
            this.applicationId = l,
            this.appCheckToken = o,
            this.authToken = u,
            this.keepaliveTimer = null,
            this.frames = null,
            this.totalFrames = 0,
            this.bytesSent = 0,
            this.bytesReceived = 0,
            this.log_ = Cr(this.connId),
            this.stats_ = md(i),
            this.connURL = bn.connectionURL_(i, h, d, o, l),
            this.nodeAdmin = i.nodeAdmin
    }
    static connectionURL_(t, i, l, o, u) {
        const h = {};
        return h[sS] = dd,
            typeof location < "u" && location.hostname && oS.test(location.hostname) && (h[lS] = rS),
            i && (h[aS] = i),
            l && (h[cS] = l),
            o && (h[zh] = o),
            u && (h[uS] = u),
            mS(t, fS, h)
    }
    open(t, i) {
        this.onDisconnect = i,
            this.onMessage = t,
            this.log_("Websocket connecting to " + this.connURL),
            this.everConnected_ = !1,
            Os.set("previous_websocket_failure", !0);
        try {
            let l;
            uT(),
                this.mySock = new rc(this.connURL, [], l)
        } catch (l) {
            this.log_("Error instantiating WebSocket.");
            const o = l.message || l.data;
            o && this.log_(o),
                this.onClosed_();
            return
        }
        this.mySock.onopen = () => {
            this.log_("Websocket connected."),
                this.everConnected_ = !0
        }
            ,
            this.mySock.onclose = () => {
                this.log_("Websocket connection was disconnected."),
                    this.mySock = null,
                    this.onClosed_()
            }
            ,
            this.mySock.onmessage = l => {
                this.handleIncomingFrame(l)
            }
            ,
            this.mySock.onerror = l => {
                this.log_("WebSocket error.  Closing connection.");
                const o = l.message || l.data;
                o && this.log_(o),
                    this.onClosed_()
            }
    }
    start() { }
    static forceDisallow() {
        bn.forceDisallow_ = !0
    }
    static isAvailable() {
        let t = !1;
        if (typeof navigator < "u" && navigator.userAgent) {
            const i = /Android ([0-9]{0,}\.[0-9]{0,})/
                , l = navigator.userAgent.match(i);
            l && l.length > 1 && parseFloat(l[1]) < 4.4 && (t = !0)
        }
        return !t && rc !== null && !bn.forceDisallow_
    }
    static previouslyFailed() {
        return Os.isInMemoryStorage || Os.get("previous_websocket_failure") === !0
    }
    markConnectionHealthy() {
        Os.remove("previous_websocket_failure")
    }
    appendFrame_(t) {
        if (this.frames.push(t),
            this.frames.length === this.totalFrames) {
            const i = this.frames.join("");
            this.frames = null;
            const l = rr(i);
            this.onMessage(l)
        }
    }
    handleNewFrameCount_(t) {
        this.totalFrames = t,
            this.frames = []
    }
    extractFrameCount_(t) {
        if (Y(this.frames === null, "We already have a frame buffer"),
            t.length <= 6) {
            const i = Number(t);
            if (!isNaN(i))
                return this.handleNewFrameCount_(i),
                    null
        }
        return this.handleNewFrameCount_(1),
            t
    }
    handleIncomingFrame(t) {
        if (this.mySock === null)
            return;
        const i = t.data;
        if (this.bytesReceived += i.length,
            this.stats_.incrementCounter("bytes_received", i.length),
            this.resetKeepAlive(),
            this.frames !== null)
            this.appendFrame_(i);
        else {
            const l = this.extractFrameCount_(i);
            l !== null && this.appendFrame_(l)
        }
    }
    send(t) {
        this.resetKeepAlive();
        const i = mt(t);
        this.bytesSent += i.length,
            this.stats_.incrementCounter("bytes_sent", i.length);
        const l = nS(i, uw);
        l.length > 1 && this.sendString_(String(l.length));
        for (let o = 0; o < l.length; o++)
            this.sendString_(l[o])
    }
    shutdown_() {
        this.isClosed_ = !0,
            this.keepaliveTimer && (clearInterval(this.keepaliveTimer),
                this.keepaliveTimer = null),
            this.mySock && (this.mySock.close(),
                this.mySock = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("WebSocket is closing itself"),
            this.shutdown_(),
            this.onDisconnect && (this.onDisconnect(this.everConnected_),
                this.onDisconnect = null))
    }
    close() {
        this.isClosed_ || (this.log_("WebSocket is being closed"),
            this.shutdown_())
    }
    resetKeepAlive() {
        clearInterval(this.keepaliveTimer),
            this.keepaliveTimer = setInterval(() => {
                this.mySock && this.sendString_("0"),
                    this.resetKeepAlive()
            }
                , Math.floor(fw))
    }
    sendString_(t) {
        try {
            this.mySock.send(t)
        } catch (i) {
            this.log_("Exception thrown from WebSocket.send():", i.message || i.data, "Closing connection."),
                setTimeout(this.onClosed_.bind(this), 0)
        }
    }
}
bn.responsesRequiredToBeHealthy = 2;
bn.healthyTimeout = 3e4;
class cr {
    static get ALL_TRANSPORTS() {
        return [Aa, bn]
    }
    static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_
    }
    constructor(t) {
        this.initTransports_(t)
    }
    initTransports_(t) {
        const i = bn && bn.isAvailable();
        let l = i && !bn.previouslyFailed();
        if (t.webSocketOnly && (i || Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),
            l = !0),
            l)
            this.transports_ = [bn];
        else {
            const o = this.transports_ = [];
            for (const u of cr.ALL_TRANSPORTS)
                u && u.isAvailable() && o.push(u);
            cr.globalTransportInitialized_ = !0
        }
    }
    initialTransport() {
        if (this.transports_.length > 0)
            return this.transports_[0];
        throw new Error("No transports available")
    }
    upgradeTransport() {
        return this.transports_.length > 1 ? this.transports_[1] : null
    }
}
cr.globalTransportInitialized_ = !1;
const hw = 6e4
    , dw = 5e3
    , mw = 10 * 1024
    , pw = 100 * 1024
    , Sh = "t"
    , Ty = "d"
    , gw = "s"
    , xy = "r"
    , _w = "e"
    , wy = "o"
    , Ry = "a"
    , Ny = "n"
    , Ay = "p"
    , yw = "h";
class vw {
    constructor(t, i, l, o, u, h, d, p, g, S) {
        this.id = t,
            this.repoInfo_ = i,
            this.applicationId_ = l,
            this.appCheckToken_ = o,
            this.authToken_ = u,
            this.onMessage_ = h,
            this.onReady_ = d,
            this.onDisconnect_ = p,
            this.onKill_ = g,
            this.lastSessionId = S,
            this.connectionCount = 0,
            this.pendingDataMessages = [],
            this.state_ = 0,
            this.log_ = Cr("c:" + this.id + ":"),
            this.transportManager_ = new cr(i),
            this.log_("Connection created"),
            this.start_()
    }
    start_() {
        const t = this.transportManager_.initialTransport();
        this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId),
            this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
        const i = this.connReceiver_(this.conn_)
            , l = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_,
            this.rx_ = this.conn_,
            this.secondaryConn_ = null,
            this.isHealthy_ = !1,
            setTimeout(() => {
                this.conn_ && this.conn_.open(i, l)
            }
                , Math.floor(0));
        const o = t.healthyTimeout || 0;
        o > 0 && (this.healthyTimeout_ = tr(() => {
            this.healthyTimeout_ = null,
                this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > pw ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."),
                    this.isHealthy_ = !0,
                    this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > mw ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."),
                        this.close()))
        }
            , Math.floor(o)))
    }
    nextTransportId_() {
        return "c:" + this.id + ":" + this.connectionCount++
    }
    disconnReceiver_(t) {
        return i => {
            t === this.conn_ ? this.onConnectionLost_(i) : t === this.secondaryConn_ ? (this.log_("Secondary connection lost."),
                this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
        }
    }
    connReceiver_(t) {
        return i => {
            this.state_ !== 2 && (t === this.rx_ ? this.onPrimaryMessageReceived_(i) : t === this.secondaryConn_ ? this.onSecondaryMessageReceived_(i) : this.log_("message on old connection"))
        }
    }
    sendRequest(t) {
        const i = {
            t: "d",
            d: t
        };
        this.sendData_(i)
    }
    tryCleanupConnection() {
        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId),
            this.conn_ = this.secondaryConn_,
            this.secondaryConn_ = null)
    }
    onSecondaryControl_(t) {
        if (Sh in t) {
            const i = t[Sh];
            i === Ry ? this.upgradeIfSecondaryHealthy_() : i === xy ? (this.log_("Got a reset on secondary, closing it"),
                this.secondaryConn_.close(),
                (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : i === wy && (this.log_("got pong on secondary."),
                    this.secondaryResponsesRequired_--,
                    this.upgradeIfSecondaryHealthy_())
        }
    }
    onSecondaryMessageReceived_(t) {
        const i = Xl("t", t)
            , l = Xl("d", t);
        if (i === "c")
            this.onSecondaryControl_(l);
        else if (i === "d")
            this.pendingDataMessages.push(l);
        else
            throw new Error("Unknown protocol layer: " + i)
    }
    upgradeIfSecondaryHealthy_() {
        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."),
            this.isHealthy_ = !0,
            this.secondaryConn_.markConnectionHealthy(),
            this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."),
                this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: Ay,
                        d: {}
                    }
                }))
    }
    proceedWithUpgrade_() {
        this.secondaryConn_.start(),
            this.log_("sending client ack on secondary"),
            this.secondaryConn_.send({
                t: "c",
                d: {
                    t: Ry,
                    d: {}
                }
            }),
            this.log_("Ending transmission on primary"),
            this.conn_.send({
                t: "c",
                d: {
                    t: Ny,
                    d: {}
                }
            }),
            this.tx_ = this.secondaryConn_,
            this.tryCleanupConnection()
    }
    onPrimaryMessageReceived_(t) {
        const i = Xl("t", t)
            , l = Xl("d", t);
        i === "c" ? this.onControl_(l) : i === "d" && this.onDataMessage_(l)
    }
    onDataMessage_(t) {
        this.onPrimaryResponse_(),
            this.onMessage_(t)
    }
    onPrimaryResponse_() {
        this.isHealthy_ || (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."),
                this.isHealthy_ = !0,
                this.conn_.markConnectionHealthy()))
    }
    onControl_(t) {
        const i = Xl(Sh, t);
        if (Ty in t) {
            const l = t[Ty];
            if (i === yw) {
                const o = {
                    ...l
                };
                this.repoInfo_.isUsingEmulator && (o.h = this.repoInfo_.host),
                    this.onHandshake_(o)
            } else if (i === Ny) {
                this.log_("recvd end transmission on primary"),
                    this.rx_ = this.secondaryConn_;
                for (let o = 0; o < this.pendingDataMessages.length; ++o)
                    this.onDataMessage_(this.pendingDataMessages[o]);
                this.pendingDataMessages = [],
                    this.tryCleanupConnection()
            } else
                i === gw ? this.onConnectionShutdown_(l) : i === xy ? this.onReset_(l) : i === _w ? jh("Server Error: " + l) : i === wy ? (this.log_("got pong on primary."),
                    this.onPrimaryResponse_(),
                    this.sendPingOnPrimaryIfNecessary_()) : jh("Unknown control packet command: " + i)
        }
    }
    onHandshake_(t) {
        const i = t.ts
            , l = t.v
            , o = t.h;
        this.sessionId = t.s,
            this.repoInfo_.host = o,
            this.state_ === 0 && (this.conn_.start(),
                this.onConnectionEstablished_(this.conn_, i),
                dd !== l && Vt("Protocol version mismatch detected"),
                this.tryStartUpgrade_())
    }
    tryStartUpgrade_() {
        const t = this.transportManager_.upgradeTransport();
        t && this.startUpgrade_(t)
    }
    startUpgrade_(t) {
        this.secondaryConn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId),
            this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
        const i = this.connReceiver_(this.secondaryConn_)
            , l = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(i, l),
            tr(() => {
                this.secondaryConn_ && (this.log_("Timed out trying to upgrade."),
                    this.secondaryConn_.close())
            }
                , Math.floor(hw))
    }
    onReset_(t) {
        this.log_("Reset packet received.  New host: " + t),
            this.repoInfo_.host = t,
            this.state_ === 1 ? this.close() : (this.closeConnections_(),
                this.start_())
    }
    onConnectionEstablished_(t, i) {
        this.log_("Realtime connection established."),
            this.conn_ = t,
            this.state_ = 1,
            this.onReady_ && (this.onReady_(i, this.sessionId),
                this.onReady_ = null),
            this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."),
                this.isHealthy_ = !0) : tr(() => {
                    this.sendPingOnPrimaryIfNecessary_()
                }
                    , Math.floor(dw))
    }
    sendPingOnPrimaryIfNecessary_() {
        !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."),
            this.sendData_({
                t: "c",
                d: {
                    t: Ay,
                    d: {}
                }
            }))
    }
    onSecondaryConnectionLost_() {
        const t = this.secondaryConn_;
        this.secondaryConn_ = null,
            (this.tx_ === t || this.rx_ === t) && this.close()
    }
    onConnectionLost_(t) {
        this.conn_ = null,
            !t && this.state_ === 0 ? (this.log_("Realtime connection failed."),
                this.repoInfo_.isCacheableHost() && (Os.remove("host:" + this.repoInfo_.host),
                    this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."),
            this.close()
    }
    onConnectionShutdown_(t) {
        this.log_("Connection shutdown command received. Shutting down..."),
            this.onKill_ && (this.onKill_(t),
                this.onKill_ = null),
            this.onDisconnect_ = null,
            this.close()
    }
    sendData_(t) {
        if (this.state_ !== 1)
            throw "Connection is not connected";
        this.tx_.send(t)
    }
    close() {
        this.state_ !== 2 && (this.log_("Closing realtime connection."),
            this.state_ = 2,
            this.closeConnections_(),
            this.onDisconnect_ && (this.onDisconnect_(),
                this.onDisconnect_ = null))
    }
    closeConnections_() {
        this.log_("Shutting down all connections"),
            this.conn_ && (this.conn_.close(),
                this.conn_ = null),
            this.secondaryConn_ && (this.secondaryConn_.close(),
                this.secondaryConn_ = null),
            this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_),
                this.healthyTimeout_ = null)
    }
}
class SS {
    put(t, i, l, o) { }
    merge(t, i, l, o) { }
    refreshAuthToken(t) { }
    refreshAppCheckToken(t) { }
    onDisconnectPut(t, i, l) { }
    onDisconnectMerge(t, i, l) { }
    onDisconnectCancel(t, i) { }
    reportStats(t) { }
}
class ES {
    constructor(t) {
        this.allowedEvents_ = t,
            this.listeners_ = {},
            Y(Array.isArray(t) && t.length > 0, "Requires a non-empty array")
    }
    trigger(t, ...i) {
        if (Array.isArray(this.listeners_[t])) {
            const l = [...this.listeners_[t]];
            for (let o = 0; o < l.length; o++)
                l[o].callback.apply(l[o].context, i)
        }
    }
    on(t, i, l) {
        this.validateEventType_(t),
            this.listeners_[t] = this.listeners_[t] || [],
            this.listeners_[t].push({
                callback: i,
                context: l
            });
        const o = this.getInitialEvent(t);
        o && i.apply(l, o)
    }
    off(t, i, l) {
        this.validateEventType_(t);
        const o = this.listeners_[t] || [];
        for (let u = 0; u < o.length; u++)
            if (o[u].callback === i && (!l || l === o[u].context)) {
                o.splice(u, 1);
                return
            }
    }
    validateEventType_(t) {
        Y(this.allowedEvents_.find(i => i === t), "Unknown event: " + t)
    }
}
class oc extends ES {
    static getInstance() {
        return new oc
    }
    constructor() {
        super(["online"]),
            this.online_ = !0,
            typeof window < "u" && typeof window.addEventListener < "u" && !rd() && (window.addEventListener("online", () => {
                this.online_ || (this.online_ = !0,
                    this.trigger("online", !0))
            }
                , !1),
                window.addEventListener("offline", () => {
                    this.online_ && (this.online_ = !1,
                        this.trigger("online", !1))
                }
                    , !1))
    }
    getInitialEvent(t) {
        return Y(t === "online", "Unknown event type: " + t),
            [this.online_]
    }
    currentlyOnline() {
        return this.online_
    }
}
const Dy = 32
    , Oy = 768;
class qe {
    constructor(t, i) {
        if (i === void 0) {
            this.pieces_ = t.split("/");
            let l = 0;
            for (let o = 0; o < this.pieces_.length; o++)
                this.pieces_[o].length > 0 && (this.pieces_[l] = this.pieces_[o],
                    l++);
            this.pieces_.length = l,
                this.pieceNum_ = 0
        } else
            this.pieces_ = t,
                this.pieceNum_ = i
    }
    toString() {
        let t = "";
        for (let i = this.pieceNum_; i < this.pieces_.length; i++)
            this.pieces_[i] !== "" && (t += "/" + this.pieces_[i]);
        return t || "/"
    }
}
function Ie() {
    return new qe("")
}
function _e(s) {
    return s.pieceNum_ >= s.pieces_.length ? null : s.pieces_[s.pieceNum_]
}
function ns(s) {
    return s.pieces_.length - s.pieceNum_
}
function Ve(s) {
    let t = s.pieceNum_;
    return t < s.pieces_.length && t++,
        new qe(s.pieces_, t)
}
function bS(s) {
    return s.pieceNum_ < s.pieces_.length ? s.pieces_[s.pieces_.length - 1] : null
}
function Sw(s) {
    let t = "";
    for (let i = s.pieceNum_; i < s.pieces_.length; i++)
        s.pieces_[i] !== "" && (t += "/" + encodeURIComponent(String(s.pieces_[i])));
    return t || "/"
}
function CS(s, t = 0) {
    return s.pieces_.slice(s.pieceNum_ + t)
}
function TS(s) {
    if (s.pieceNum_ >= s.pieces_.length)
        return null;
    const t = [];
    for (let i = s.pieceNum_; i < s.pieces_.length - 1; i++)
        t.push(s.pieces_[i]);
    return new qe(t, 0)
}
function pt(s, t) {
    const i = [];
    for (let l = s.pieceNum_; l < s.pieces_.length; l++)
        i.push(s.pieces_[l]);
    if (t instanceof qe)
        for (let l = t.pieceNum_; l < t.pieces_.length; l++)
            i.push(t.pieces_[l]);
    else {
        const l = t.split("/");
        for (let o = 0; o < l.length; o++)
            l[o].length > 0 && i.push(l[o])
    }
    return new qe(i, 0)
}
function be(s) {
    return s.pieceNum_ >= s.pieces_.length
}
function Mt(s, t) {
    const i = _e(s)
        , l = _e(t);
    if (i === null)
        return t;
    if (i === l)
        return Mt(Ve(s), Ve(t));
    throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + s + ")")
}
function gd(s, t) {
    if (ns(s) !== ns(t))
        return !1;
    for (let i = s.pieceNum_, l = t.pieceNum_; i <= s.pieces_.length; i++,
        l++)
        if (s.pieces_[i] !== t.pieces_[l])
            return !1;
    return !0
}
function Cn(s, t) {
    let i = s.pieceNum_
        , l = t.pieceNum_;
    if (ns(s) > ns(t))
        return !1;
    for (; i < s.pieces_.length;) {
        if (s.pieces_[i] !== t.pieces_[l])
            return !1;
        ++i,
            ++l
    }
    return !0
}
class Ew {
    constructor(t, i) {
        this.errorPrefix_ = i,
            this.parts_ = CS(t, 0),
            this.byteLength_ = Math.max(1, this.parts_.length);
        for (let l = 0; l < this.parts_.length; l++)
            this.byteLength_ += Dc(this.parts_[l]);
        xS(this)
    }
}
function bw(s, t) {
    s.parts_.length > 0 && (s.byteLength_ += 1),
        s.parts_.push(t),
        s.byteLength_ += Dc(t),
        xS(s)
}
function Cw(s) {
    const t = s.parts_.pop();
    s.byteLength_ -= Dc(t),
        s.parts_.length > 0 && (s.byteLength_ -= 1)
}
function xS(s) {
    if (s.byteLength_ > Oy)
        throw new Error(s.errorPrefix_ + "has a key path longer than " + Oy + " bytes (" + s.byteLength_ + ").");
    if (s.parts_.length > Dy)
        throw new Error(s.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Dy + ") or object contains a cycle " + Ds(s))
}
function Ds(s) {
    return s.parts_.length === 0 ? "" : "in property '" + s.parts_.join(".") + "'"
}
class _d extends ES {
    static getInstance() {
        return new _d
    }
    constructor() {
        super(["visible"]);
        let t, i;
        typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (i = "visibilitychange",
            t = "hidden") : typeof document.mozHidden < "u" ? (i = "mozvisibilitychange",
                t = "mozHidden") : typeof document.msHidden < "u" ? (i = "msvisibilitychange",
                    t = "msHidden") : typeof document.webkitHidden < "u" && (i = "webkitvisibilitychange",
                        t = "webkitHidden")),
            this.visible_ = !0,
            i && document.addEventListener(i, () => {
                const l = !document[t];
                l !== this.visible_ && (this.visible_ = l,
                    this.trigger("visible", l))
            }
                , !1)
    }
    getInitialEvent(t) {
        return Y(t === "visible", "Unknown event type: " + t),
            [this.visible_]
    }
}
const Wl = 1e3
    , Tw = 300 * 1e3
    , Iy = 30 * 1e3
    , xw = 1.3
    , ww = 3e4
    , Rw = "server_kill"
    , My = 3;
class oi extends SS {
    constructor(t, i, l, o, u, h, d, p) {
        if (super(),
            this.repoInfo_ = t,
            this.applicationId_ = i,
            this.onDataUpdate_ = l,
            this.onConnectStatus_ = o,
            this.onServerInfoUpdate_ = u,
            this.authTokenProvider_ = h,
            this.appCheckTokenProvider_ = d,
            this.authOverride_ = p,
            this.id = oi.nextPersistentConnectionId_++,
            this.log_ = Cr("p:" + this.id + ":"),
            this.interruptReasons_ = {},
            this.listens = new Map,
            this.outstandingPuts_ = [],
            this.outstandingGets_ = [],
            this.outstandingPutCount_ = 0,
            this.outstandingGetCount_ = 0,
            this.onDisconnectRequestQueue_ = [],
            this.connected_ = !1,
            this.reconnectDelay_ = Wl,
            this.maxReconnectDelay_ = Tw,
            this.securityDebugCallback_ = null,
            this.lastSessionId = null,
            this.establishConnectionTimer_ = null,
            this.visible_ = !1,
            this.requestCBHash_ = {},
            this.requestNumber_ = 0,
            this.realtime_ = null,
            this.authToken_ = null,
            this.appCheckToken_ = null,
            this.forceTokenRefresh_ = !1,
            this.invalidAuthTokenCount_ = 0,
            this.invalidAppCheckTokenCount_ = 0,
            this.firstConnection_ = !0,
            this.lastConnectionAttemptTime_ = null,
            this.lastConnectionEstablishedTime_ = null,
            p)
            throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        _d.getInstance().on("visible", this.onVisible_, this),
            t.host.indexOf("fblocal") === -1 && oc.getInstance().on("online", this.onOnline_, this)
    }
    sendRequest(t, i, l) {
        const o = ++this.requestNumber_
            , u = {
                r: o,
                a: t,
                b: i
            };
        this.log_(mt(u)),
            Y(this.connected_, "sendRequest call when we're not connected not allowed."),
            this.realtime_.sendRequest(u),
            l && (this.requestCBHash_[o] = l)
    }
    get(t) {
        this.initConnection_();
        const i = new Ac
            , o = {
                action: "g",
                request: {
                    p: t._path.toString(),
                    q: t._queryObject
                },
                onComplete: h => {
                    const d = h.d;
                    h.s === "ok" ? i.resolve(d) : i.reject(d)
                }
            };
        this.outstandingGets_.push(o),
            this.outstandingGetCount_++;
        const u = this.outstandingGets_.length - 1;
        return this.connected_ && this.sendGet_(u),
            i.promise
    }
    listen(t, i, l, o) {
        this.initConnection_();
        const u = t._queryIdentifier
            , h = t._path.toString();
        this.log_("Listen called for " + h + " " + u),
            this.listens.has(h) || this.listens.set(h, new Map),
            Y(t._queryParams.isDefault() || !t._queryParams.loadsAllData(), "listen() called for non-default but complete query"),
            Y(!this.listens.get(h).has(u), "listen() called twice for same path/queryId.");
        const d = {
            onComplete: o,
            hashFn: i,
            query: t,
            tag: l
        };
        this.listens.get(h).set(u, d),
            this.connected_ && this.sendListen_(d)
    }
    sendGet_(t) {
        const i = this.outstandingGets_[t];
        this.sendRequest("g", i.request, l => {
            delete this.outstandingGets_[t],
                this.outstandingGetCount_--,
                this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
                i.onComplete && i.onComplete(l)
        }
        )
    }
    sendListen_(t) {
        const i = t.query
            , l = i._path.toString()
            , o = i._queryIdentifier;
        this.log_("Listen on " + l + " for " + o);
        const u = {
            p: l
        }
            , h = "q";
        t.tag && (u.q = i._queryObject,
            u.t = t.tag),
            u.h = t.hashFn(),
            this.sendRequest(h, u, d => {
                const p = d.d
                    , g = d.s;
                oi.warnOnListenWarnings_(p, i),
                    (this.listens.get(l) && this.listens.get(l).get(o)) === t && (this.log_("listen response", d),
                        g !== "ok" && this.removeListen_(l, o),
                        t.onComplete && t.onComplete(g, p))
            }
            )
    }
    static warnOnListenWarnings_(t, i) {
        if (t && typeof t == "object" && gi(t, "w")) {
            const l = Ua(t, "w");
            if (Array.isArray(l) && ~l.indexOf("no_index")) {
                const o = '".indexOn": "' + i._queryParams.getIndex().toString() + '"'
                    , u = i._path.toString();
                Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)
            }
        }
    }
    refreshAuthToken(t) {
        this.authToken_ = t,
            this.log_("Auth token refreshed"),
            this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => { }
            ),
            this.reduceReconnectDelayIfAdminCredential_(t)
    }
    reduceReconnectDelayIfAdminCredential_(t) {
        (t && t.length === 40 || _T(t)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."),
            this.maxReconnectDelay_ = Iy)
    }
    refreshAppCheckToken(t) {
        this.appCheckToken_ = t,
            this.log_("App check token refreshed"),
            this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, () => { }
            )
    }
    tryAuth() {
        if (this.connected_ && this.authToken_) {
            const t = this.authToken_
                , i = gT(t) ? "auth" : "gauth"
                , l = {
                    cred: t
                };
            this.authOverride_ === null ? l.noauth = !0 : typeof this.authOverride_ == "object" && (l.authvar = this.authOverride_),
                this.sendRequest(i, l, o => {
                    const u = o.s
                        , h = o.d || "error";
                    this.authToken_ === t && (u === "ok" ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(u, h))
                }
                )
        }
    }
    tryAppCheck() {
        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
            token: this.appCheckToken_
        }, t => {
            const i = t.s
                , l = t.d || "error";
            i === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(i, l)
        }
        )
    }
    unlisten(t, i) {
        const l = t._path.toString()
            , o = t._queryIdentifier;
        this.log_("Unlisten called for " + l + " " + o),
            Y(t._queryParams.isDefault() || !t._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"),
            this.removeListen_(l, o) && this.connected_ && this.sendUnlisten_(l, o, t._queryObject, i)
    }
    sendUnlisten_(t, i, l, o) {
        this.log_("Unlisten on " + t + " for " + i);
        const u = {
            p: t
        }
            , h = "n";
        o && (u.q = l,
            u.t = o),
            this.sendRequest(h, u)
    }
    onDisconnectPut(t, i, l) {
        this.initConnection_(),
            this.connected_ ? this.sendOnDisconnect_("o", t, i, l) : this.onDisconnectRequestQueue_.push({
                pathString: t,
                action: "o",
                data: i,
                onComplete: l
            })
    }
    onDisconnectMerge(t, i, l) {
        this.initConnection_(),
            this.connected_ ? this.sendOnDisconnect_("om", t, i, l) : this.onDisconnectRequestQueue_.push({
                pathString: t,
                action: "om",
                data: i,
                onComplete: l
            })
    }
    onDisconnectCancel(t, i) {
        this.initConnection_(),
            this.connected_ ? this.sendOnDisconnect_("oc", t, null, i) : this.onDisconnectRequestQueue_.push({
                pathString: t,
                action: "oc",
                data: null,
                onComplete: i
            })
    }
    sendOnDisconnect_(t, i, l, o) {
        const u = {
            p: i,
            d: l
        };
        this.log_("onDisconnect " + t, u),
            this.sendRequest(t, u, h => {
                o && setTimeout(() => {
                    o(h.s, h.d)
                }
                    , Math.floor(0))
            }
            )
    }
    put(t, i, l, o) {
        this.putInternal("p", t, i, l, o)
    }
    merge(t, i, l, o) {
        this.putInternal("m", t, i, l, o)
    }
    putInternal(t, i, l, o, u) {
        this.initConnection_();
        const h = {
            p: i,
            d: l
        };
        u !== void 0 && (h.h = u),
            this.outstandingPuts_.push({
                action: t,
                request: h,
                onComplete: o
            }),
            this.outstandingPutCount_++;
        const d = this.outstandingPuts_.length - 1;
        this.connected_ ? this.sendPut_(d) : this.log_("Buffering put: " + i)
    }
    sendPut_(t) {
        const i = this.outstandingPuts_[t].action
            , l = this.outstandingPuts_[t].request
            , o = this.outstandingPuts_[t].onComplete;
        this.outstandingPuts_[t].queued = this.connected_,
            this.sendRequest(i, l, u => {
                this.log_(i + " response", u),
                    delete this.outstandingPuts_[t],
                    this.outstandingPutCount_--,
                    this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
                    o && o(u.s, u.d)
            }
            )
    }
    reportStats(t) {
        if (this.connected_) {
            const i = {
                c: t
            };
            this.log_("reportStats", i),
                this.sendRequest("s", i, l => {
                    if (l.s !== "ok") {
                        const u = l.d;
                        this.log_("reportStats", "Error sending stats: " + u)
                    }
                }
                )
        }
    }
    onDataMessage_(t) {
        if ("r" in t) {
            this.log_("from server: " + mt(t));
            const i = t.r
                , l = this.requestCBHash_[i];
            l && (delete this.requestCBHash_[i],
                l(t.b))
        } else {
            if ("error" in t)
                throw "A server-side error has occurred: " + t.error;
            "a" in t && this.onDataPush_(t.a, t.b)
        }
    }
    onDataPush_(t, i) {
        this.log_("handleServerMessage", t, i),
            t === "d" ? this.onDataUpdate_(i.p, i.d, !1, i.t) : t === "m" ? this.onDataUpdate_(i.p, i.d, !0, i.t) : t === "c" ? this.onListenRevoked_(i.p, i.q) : t === "ac" ? this.onAuthRevoked_(i.s, i.d) : t === "apc" ? this.onAppCheckRevoked_(i.s, i.d) : t === "sd" ? this.onSecurityDebugPacket_(i) : jh("Unrecognized action received from server: " + mt(t) + `
Are you using the latest client?`)
    }
    onReady_(t, i) {
        this.log_("connection ready"),
            this.connected_ = !0,
            this.lastConnectionEstablishedTime_ = new Date().getTime(),
            this.handleTimestamp_(t),
            this.lastSessionId = i,
            this.firstConnection_ && this.sendConnectStats_(),
            this.restoreState_(),
            this.firstConnection_ = !1,
            this.onConnectStatus_(!0)
    }
    scheduleConnect_(t) {
        Y(!this.realtime_, "Scheduling a connect when we're already connected/ing?"),
            this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_),
            this.establishConnectionTimer_ = setTimeout(() => {
                this.establishConnectionTimer_ = null,
                    this.establishConnection_()
            }
                , Math.floor(t))
    }
    initConnection_() {
        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
    }
    onVisible_(t) {
        t && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."),
            this.reconnectDelay_ = Wl,
            this.realtime_ || this.scheduleConnect_(0)),
            this.visible_ = t
    }
    onOnline_(t) {
        t ? (this.log_("Browser went online."),
            this.reconnectDelay_ = Wl,
            this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."),
                this.realtime_ && this.realtime_.close())
    }
    onRealtimeDisconnect_() {
        if (this.log_("data client disconnected"),
            this.connected_ = !1,
            this.realtime_ = null,
            this.cancelSentTransactions_(),
            this.requestCBHash_ = {},
            this.shouldReconnect_()) {
            this.visible_ ? this.lastConnectionEstablishedTime_ && (new Date().getTime() - this.lastConnectionEstablishedTime_ > ww && (this.reconnectDelay_ = Wl),
                this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."),
                    this.reconnectDelay_ = this.maxReconnectDelay_,
                    this.lastConnectionAttemptTime_ = new Date().getTime());
            const t = Math.max(0, new Date().getTime() - this.lastConnectionAttemptTime_);
            let i = Math.max(0, this.reconnectDelay_ - t);
            i = Math.random() * i,
                this.log_("Trying to reconnect in " + i + "ms"),
                this.scheduleConnect_(i),
                this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * xw)
        }
        this.onConnectStatus_(!1)
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt"),
                this.lastConnectionAttemptTime_ = new Date().getTime(),
                this.lastConnectionEstablishedTime_ = null;
            const t = this.onDataMessage_.bind(this)
                , i = this.onReady_.bind(this)
                , l = this.onRealtimeDisconnect_.bind(this)
                , o = this.id + ":" + oi.nextConnectionId_++
                , u = this.lastSessionId;
            let h = !1
                , d = null;
            const p = function () {
                d ? d.close() : (h = !0,
                    l())
            }
                , g = function (v) {
                    Y(d, "sendRequest call when we're not connected not allowed."),
                        d.sendRequest(v)
                };
            this.realtime_ = {
                close: p,
                sendRequest: g
            };
            const S = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = !1;
            try {
                const [v, E] = await Promise.all([this.authTokenProvider_.getToken(S), this.appCheckTokenProvider_.getToken(S)]);
                h ? At("getToken() completed but was canceled") : (At("getToken() completed. Creating connection."),
                    this.authToken_ = v && v.accessToken,
                    this.appCheckToken_ = E && E.token,
                    d = new vw(o, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, t, i, l, D => {
                        Vt(D + " (" + this.repoInfo_.toString() + ")"),
                            this.interrupt(Rw)
                    }
                        , u))
            } catch (v) {
                this.log_("Failed to get token: " + v),
                    h || (this.repoInfo_.nodeAdmin && Vt(v),
                        p())
            }
        }
    }
    interrupt(t) {
        At("Interrupting connection for reason: " + t),
            this.interruptReasons_[t] = !0,
            this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_),
                this.establishConnectionTimer_ = null),
                this.connected_ && this.onRealtimeDisconnect_())
    }
    resume(t) {
        At("Resuming connection for reason: " + t),
            delete this.interruptReasons_[t],
            Oh(this.interruptReasons_) && (this.reconnectDelay_ = Wl,
                this.realtime_ || this.scheduleConnect_(0))
    }
    handleTimestamp_(t) {
        const i = t - new Date().getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: i
        })
    }
    cancelSentTransactions_() {
        for (let t = 0; t < this.outstandingPuts_.length; t++) {
            const i = this.outstandingPuts_[t];
            i && "h" in i.request && i.queued && (i.onComplete && i.onComplete("disconnect"),
                delete this.outstandingPuts_[t],
                this.outstandingPutCount_--)
        }
        this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = [])
    }
    onListenRevoked_(t, i) {
        let l;
        i ? l = i.map(u => hd(u)).join("$") : l = "default";
        const o = this.removeListen_(t, l);
        o && o.onComplete && o.onComplete("permission_denied")
    }
    removeListen_(t, i) {
        const l = new qe(t).toString();
        let o;
        if (this.listens.has(l)) {
            const u = this.listens.get(l);
            o = u.get(i),
                u.delete(i),
                u.size === 0 && this.listens.delete(l)
        } else
            o = void 0;
        return o
    }
    onAuthRevoked_(t, i) {
        At("Auth token revoked: " + t + "/" + i),
            this.authToken_ = null,
            this.forceTokenRefresh_ = !0,
            this.realtime_.close(),
            (t === "invalid_token" || t === "permission_denied") && (this.invalidAuthTokenCount_++,
                this.invalidAuthTokenCount_ >= My && (this.reconnectDelay_ = Iy,
                    this.authTokenProvider_.notifyForInvalidToken()))
    }
    onAppCheckRevoked_(t, i) {
        At("App check token revoked: " + t + "/" + i),
            this.appCheckToken_ = null,
            this.forceTokenRefresh_ = !0,
            (t === "invalid_token" || t === "permission_denied") && (this.invalidAppCheckTokenCount_++,
                this.invalidAppCheckTokenCount_ >= My && this.appCheckTokenProvider_.notifyForInvalidToken())
    }
    onSecurityDebugPacket_(t) {
        this.securityDebugCallback_ ? this.securityDebugCallback_(t) : "msg" in t && console.log("FIREBASE: " + t.msg.replace(`
`, `
FIREBASE: `))
    }
    restoreState_() {
        this.tryAuth(),
            this.tryAppCheck();
        for (const t of this.listens.values())
            for (const i of t.values())
                this.sendListen_(i);
        for (let t = 0; t < this.outstandingPuts_.length; t++)
            this.outstandingPuts_[t] && this.sendPut_(t);
        for (; this.onDisconnectRequestQueue_.length;) {
            const t = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(t.action, t.pathString, t.data, t.onComplete)
        }
        for (let t = 0; t < this.outstandingGets_.length; t++)
            this.outstandingGets_[t] && this.sendGet_(t)
    }
    sendConnectStats_() {
        const t = {};
        let i = "js";
        t["sdk." + i + "." + Jv.replace(/\./g, "-")] = 1,
            rd() ? t["framework.cordova"] = 1 : Gv() && (t["framework.reactnative"] = 1),
            this.reportStats(t)
    }
    shouldReconnect_() {
        const t = oc.getInstance().currentlyOnline();
        return Oh(this.interruptReasons_) && t
    }
}
oi.nextPersistentConnectionId_ = 0;
oi.nextConnectionId_ = 0;
class ye {
    constructor(t, i) {
        this.name = t,
            this.node = i
    }
    static Wrap(t, i) {
        return new ye(t, i)
    }
}
class Oc {
    getCompare() {
        return this.compare.bind(this)
    }
    indexedValueChanged(t, i) {
        const l = new ye(za, t)
            , o = new ye(za, i);
        return this.compare(l, o) !== 0
    }
    minPost() {
        return ye.MIN
    }
}
let Fo;
class wS extends Oc {
    static get __EMPTY_NODE() {
        return Fo
    }
    static set __EMPTY_NODE(t) {
        Fo = t
    }
    compare(t, i) {
        return Qa(t.name, i.name)
    }
    isDefinedOn(t) {
        throw Va("KeyIndex.isDefinedOn not expected to be called.")
    }
    indexedValueChanged(t, i) {
        return !1
    }
    minPost() {
        return ye.MIN
    }
    maxPost() {
        return new ye(Ls, Fo)
    }
    makePost(t, i) {
        return Y(typeof t == "string", "KeyIndex indexValue must always be a string."),
            new ye(t, Fo)
    }
    toString() {
        return ".key"
    }
}
const Ia = new wS;
class Yo {
    constructor(t, i, l, o, u = null) {
        this.isReverse_ = o,
            this.resultGenerator_ = u,
            this.nodeStack_ = [];
        let h = 1;
        for (; !t.isEmpty();)
            if (t = t,
                h = i ? l(t.key, i) : 1,
                o && (h *= -1),
                h < 0)
                this.isReverse_ ? t = t.left : t = t.right;
            else if (h === 0) {
                this.nodeStack_.push(t);
                break
            } else
                this.nodeStack_.push(t),
                    this.isReverse_ ? t = t.right : t = t.left
    }
    getNext() {
        if (this.nodeStack_.length === 0)
            return null;
        let t = this.nodeStack_.pop(), i;
        if (this.resultGenerator_ ? i = this.resultGenerator_(t.key, t.value) : i = {
            key: t.key,
            value: t.value
        },
            this.isReverse_)
            for (t = t.left; !t.isEmpty();)
                this.nodeStack_.push(t),
                    t = t.right;
        else
            for (t = t.right; !t.isEmpty();)
                this.nodeStack_.push(t),
                    t = t.left;
        return i
    }
    hasNext() {
        return this.nodeStack_.length > 0
    }
    peek() {
        if (this.nodeStack_.length === 0)
            return null;
        const t = this.nodeStack_[this.nodeStack_.length - 1];
        return this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
            key: t.key,
            value: t.value
        }
    }
}
class St {
    constructor(t, i, l, o, u) {
        this.key = t,
            this.value = i,
            this.color = l ?? St.RED,
            this.left = o ?? qt.EMPTY_NODE,
            this.right = u ?? qt.EMPTY_NODE
    }
    copy(t, i, l, o, u) {
        return new St(t ?? this.key, i ?? this.value, l ?? this.color, o ?? this.left, u ?? this.right)
    }
    count() {
        return this.left.count() + 1 + this.right.count()
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(t) {
        return this.left.inorderTraversal(t) || !!t(this.key, this.value) || this.right.inorderTraversal(t)
    }
    reverseTraversal(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
    }
    min_() {
        return this.left.isEmpty() ? this : this.left.min_()
    }
    minKey() {
        return this.min_().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(t, i, l) {
        let o = this;
        const u = l(t, o.key);
        return u < 0 ? o = o.copy(null, null, null, o.left.insert(t, i, l), null) : u === 0 ? o = o.copy(null, i, null, null, null) : o = o.copy(null, null, null, null, o.right.insert(t, i, l)),
            o.fixUp_()
    }
    removeMin_() {
        if (this.left.isEmpty())
            return qt.EMPTY_NODE;
        let t = this;
        return !t.left.isRed_() && !t.left.left.isRed_() && (t = t.moveRedLeft_()),
            t = t.copy(null, null, null, t.left.removeMin_(), null),
            t.fixUp_()
    }
    remove(t, i) {
        let l, o;
        if (l = this,
            i(t, l.key) < 0)
            !l.left.isEmpty() && !l.left.isRed_() && !l.left.left.isRed_() && (l = l.moveRedLeft_()),
                l = l.copy(null, null, null, l.left.remove(t, i), null);
        else {
            if (l.left.isRed_() && (l = l.rotateRight_()),
                !l.right.isEmpty() && !l.right.isRed_() && !l.right.left.isRed_() && (l = l.moveRedRight_()),
                i(t, l.key) === 0) {
                if (l.right.isEmpty())
                    return qt.EMPTY_NODE;
                o = l.right.min_(),
                    l = l.copy(o.key, o.value, null, null, l.right.removeMin_())
            }
            l = l.copy(null, null, null, null, l.right.remove(t, i))
        }
        return l.fixUp_()
    }
    isRed_() {
        return this.color
    }
    fixUp_() {
        let t = this;
        return t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
            t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()),
            t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
            t
    }
    moveRedLeft_() {
        let t = this.colorFlip_();
        return t.right.left.isRed_() && (t = t.copy(null, null, null, null, t.right.rotateRight_()),
            t = t.rotateLeft_(),
            t = t.colorFlip_()),
            t
    }
    moveRedRight_() {
        let t = this.colorFlip_();
        return t.left.left.isRed_() && (t = t.rotateRight_(),
            t = t.colorFlip_()),
            t
    }
    rotateLeft_() {
        const t = this.copy(null, null, St.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null)
    }
    rotateRight_() {
        const t = this.copy(null, null, St.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t)
    }
    colorFlip_() {
        const t = this.left.copy(null, null, !this.left.color, null, null)
            , i = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, i)
    }
    checkMaxDepth_() {
        const t = this.check_();
        return Math.pow(2, t) <= this.count() + 1
    }
    check_() {
        if (this.isRed_() && this.left.isRed_())
            throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_())
            throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        const t = this.left.check_();
        if (t !== this.right.check_())
            throw new Error("Black depths differ");
        return t + (this.isRed_() ? 0 : 1)
    }
}
St.RED = !0;
St.BLACK = !1;
class Nw {
    copy(t, i, l, o, u) {
        return this
    }
    insert(t, i, l) {
        return new St(t, i, null)
    }
    remove(t, i) {
        return this
    }
    count() {
        return 0
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(t) {
        return !1
    }
    reverseTraversal(t) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    check_() {
        return 0
    }
    isRed_() {
        return !1
    }
}
class qt {
    constructor(t, i = qt.EMPTY_NODE) {
        this.comparator_ = t,
            this.root_ = i
    }
    insert(t, i) {
        return new qt(this.comparator_, this.root_.insert(t, i, this.comparator_).copy(null, null, St.BLACK, null, null))
    }
    remove(t) {
        return new qt(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, St.BLACK, null, null))
    }
    get(t) {
        let i, l = this.root_;
        for (; !l.isEmpty();) {
            if (i = this.comparator_(t, l.key),
                i === 0)
                return l.value;
            i < 0 ? l = l.left : i > 0 && (l = l.right)
        }
        return null
    }
    getPredecessorKey(t) {
        let i, l = this.root_, o = null;
        for (; !l.isEmpty();)
            if (i = this.comparator_(t, l.key),
                i === 0) {
                if (l.left.isEmpty())
                    return o ? o.key : null;
                for (l = l.left; !l.right.isEmpty();)
                    l = l.right;
                return l.key
            } else
                i < 0 ? l = l.left : i > 0 && (o = l,
                    l = l.right);
        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
    }
    isEmpty() {
        return this.root_.isEmpty()
    }
    count() {
        return this.root_.count()
    }
    minKey() {
        return this.root_.minKey()
    }
    maxKey() {
        return this.root_.maxKey()
    }
    inorderTraversal(t) {
        return this.root_.inorderTraversal(t)
    }
    reverseTraversal(t) {
        return this.root_.reverseTraversal(t)
    }
    getIterator(t) {
        return new Yo(this.root_, null, this.comparator_, !1, t)
    }
    getIteratorFrom(t, i) {
        return new Yo(this.root_, t, this.comparator_, !1, i)
    }
    getReverseIteratorFrom(t, i) {
        return new Yo(this.root_, t, this.comparator_, !0, i)
    }
    getReverseIterator(t) {
        return new Yo(this.root_, null, this.comparator_, !0, t)
    }
}
qt.EMPTY_NODE = new Nw;
function Aw(s, t) {
    return Qa(s.name, t.name)
}
function yd(s, t) {
    return Qa(s, t)
}
let Hh;
function Dw(s) {
    Hh = s
}
const RS = function (s) {
    return typeof s == "number" ? "number:" + iS(s) : "string:" + s
}
    , NS = function (s) {
        if (s.isLeafNode()) {
            const t = s.val();
            Y(typeof t == "string" || typeof t == "number" || typeof t == "object" && gi(t, ".sv"), "Priority must be a string or number.")
        } else
            Y(s === Hh || s.isEmpty(), "priority of unexpected type.");
        Y(s === Hh || s.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
    };
let ky;
class vt {
    static set __childrenNodeConstructor(t) {
        ky = t
    }
    static get __childrenNodeConstructor() {
        return ky
    }
    constructor(t, i = vt.__childrenNodeConstructor.EMPTY_NODE) {
        this.value_ = t,
            this.priorityNode_ = i,
            this.lazyHash_ = null,
            Y(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."),
            NS(this.priorityNode_)
    }
    isLeafNode() {
        return !0
    }
    getPriority() {
        return this.priorityNode_
    }
    updatePriority(t) {
        return new vt(this.value_, t)
    }
    getImmediateChild(t) {
        return t === ".priority" ? this.priorityNode_ : vt.__childrenNodeConstructor.EMPTY_NODE
    }
    getChild(t) {
        return be(t) ? this : _e(t) === ".priority" ? this.priorityNode_ : vt.__childrenNodeConstructor.EMPTY_NODE
    }
    hasChild() {
        return !1
    }
    getPredecessorChildName(t, i) {
        return null
    }
    updateImmediateChild(t, i) {
        return t === ".priority" ? this.updatePriority(i) : i.isEmpty() && t !== ".priority" ? this : vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, i).updatePriority(this.priorityNode_)
    }
    updateChild(t, i) {
        const l = _e(t);
        return l === null ? i : i.isEmpty() && l !== ".priority" ? this : (Y(l !== ".priority" || ns(t) === 1, ".priority must be the last token in a path"),
            this.updateImmediateChild(l, vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(t), i)))
    }
    isEmpty() {
        return !1
    }
    numChildren() {
        return 0
    }
    forEachChild(t, i) {
        return !1
    }
    val(t) {
        return t && !this.getPriority().isEmpty() ? {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
        } : this.getValue()
    }
    hash() {
        if (this.lazyHash_ === null) {
            let t = "";
            this.priorityNode_.isEmpty() || (t += "priority:" + RS(this.priorityNode_.val()) + ":");
            const i = typeof this.value_;
            t += i + ":",
                i === "number" ? t += iS(this.value_) : t += this.value_,
                this.lazyHash_ = eS(t)
        }
        return this.lazyHash_
    }
    getValue() {
        return this.value_
    }
    compareTo(t) {
        return t === vt.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof vt.__childrenNodeConstructor ? -1 : (Y(t.isLeafNode(), "Unknown node type"),
            this.compareToLeafNode_(t))
    }
    compareToLeafNode_(t) {
        const i = typeof t.value_
            , l = typeof this.value_
            , o = vt.VALUE_TYPE_ORDER.indexOf(i)
            , u = vt.VALUE_TYPE_ORDER.indexOf(l);
        return Y(o >= 0, "Unknown leaf type: " + i),
            Y(u >= 0, "Unknown leaf type: " + l),
            o === u ? l === "object" ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : u - o
    }
    withIndex() {
        return this
    }
    isIndexed() {
        return !0
    }
    equals(t) {
        if (t === this)
            return !0;
        if (t.isLeafNode()) {
            const i = t;
            return this.value_ === i.value_ && this.priorityNode_.equals(i.priorityNode_)
        } else
            return !1
    }
}
vt.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
let AS, DS;
function Ow(s) {
    AS = s
}
function Iw(s) {
    DS = s
}
class Mw extends Oc {
    compare(t, i) {
        const l = t.node.getPriority()
            , o = i.node.getPriority()
            , u = l.compareTo(o);
        return u === 0 ? Qa(t.name, i.name) : u
    }
    isDefinedOn(t) {
        return !t.getPriority().isEmpty()
    }
    indexedValueChanged(t, i) {
        return !t.getPriority().equals(i.getPriority())
    }
    minPost() {
        return ye.MIN
    }
    maxPost() {
        return new ye(Ls, new vt("[PRIORITY-POST]", DS))
    }
    makePost(t, i) {
        const l = AS(t);
        return new ye(i, new vt("[PRIORITY-POST]", l))
    }
    toString() {
        return ".priority"
    }
}
const nt = new Mw;
const kw = Math.log(2);
class Lw {
    constructor(t) {
        const i = u => parseInt(Math.log(u) / kw, 10)
            , l = u => parseInt(Array(u + 1).join("1"), 2);
        this.count = i(t + 1),
            this.current_ = this.count - 1;
        const o = l(this.count);
        this.bits_ = t + 1 & o
    }
    nextBitIsOne() {
        const t = !(this.bits_ & 1 << this.current_);
        return this.current_--,
            t
    }
}
const cc = function (s, t, i, l) {
    s.sort(t);
    const o = function (p, g) {
        const S = g - p;
        let v, E;
        if (S === 0)
            return null;
        if (S === 1)
            return v = s[p],
                E = i ? i(v) : v,
                new St(E, v.node, St.BLACK, null, null);
        {
            const D = parseInt(S / 2, 10) + p
                , I = o(p, D)
                , P = o(D + 1, g);
            return v = s[D],
                E = i ? i(v) : v,
                new St(E, v.node, St.BLACK, I, P)
        }
    }
        , u = function (p) {
            let g = null
                , S = null
                , v = s.length;
            const E = function (I, P) {
                const M = v - I
                    , Q = v;
                v -= I;
                const B = o(M + 1, Q)
                    , q = s[M]
                    , re = i ? i(q) : q;
                D(new St(re, q.node, P, null, B))
            }
                , D = function (I) {
                    g ? (g.left = I,
                        g = I) : (S = I,
                            g = I)
                };
            for (let I = 0; I < p.count; ++I) {
                const P = p.nextBitIsOne()
                    , M = Math.pow(2, p.count - (I + 1));
                P ? E(M, St.BLACK) : (E(M, St.BLACK),
                    E(M, St.RED))
            }
            return S
        }
        , h = new Lw(s.length)
        , d = u(h);
    return new qt(l || t, d)
};
let Eh;
const Ra = {};
class ai {
    static get Default() {
        return Y(Ra && nt, "ChildrenNode.ts has not been loaded"),
            Eh = Eh || new ai({
                ".priority": Ra
            }, {
                ".priority": nt
            }),
            Eh
    }
    constructor(t, i) {
        this.indexes_ = t,
            this.indexSet_ = i
    }
    get(t) {
        const i = Ua(this.indexes_, t);
        if (!i)
            throw new Error("No index defined for " + t);
        return i instanceof qt ? i : null
    }
    hasIndex(t) {
        return gi(this.indexSet_, t.toString())
    }
    addIndex(t, i) {
        Y(t !== Ia, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const l = [];
        let o = !1;
        const u = i.getIterator(ye.Wrap);
        let h = u.getNext();
        for (; h;)
            o = o || t.isDefinedOn(h.node),
                l.push(h),
                h = u.getNext();
        let d;
        o ? d = cc(l, t.getCompare()) : d = Ra;
        const p = t.toString()
            , g = {
                ...this.indexSet_
            };
        g[p] = t;
        const S = {
            ...this.indexes_
        };
        return S[p] = d,
            new ai(S, g)
    }
    addToIndexes(t, i) {
        const l = ac(this.indexes_, (o, u) => {
            const h = Ua(this.indexSet_, u);
            if (Y(h, "Missing index implementation for " + u),
                o === Ra)
                if (h.isDefinedOn(t.node)) {
                    const d = []
                        , p = i.getIterator(ye.Wrap);
                    let g = p.getNext();
                    for (; g;)
                        g.name !== t.name && d.push(g),
                            g = p.getNext();
                    return d.push(t),
                        cc(d, h.getCompare())
                } else
                    return Ra;
            else {
                const d = i.get(t.name);
                let p = o;
                return d && (p = p.remove(new ye(t.name, d))),
                    p.insert(t, t.node)
            }
        }
        );
        return new ai(l, this.indexSet_)
    }
    removeFromIndexes(t, i) {
        const l = ac(this.indexes_, o => {
            if (o === Ra)
                return o;
            {
                const u = i.get(t.name);
                return u ? o.remove(new ye(t.name, u)) : o
            }
        }
        );
        return new ai(l, this.indexSet_)
    }
}
let Zl;
class oe {
    static get EMPTY_NODE() {
        return Zl || (Zl = new oe(new qt(yd), null, ai.Default))
    }
    constructor(t, i, l) {
        this.children_ = t,
            this.priorityNode_ = i,
            this.indexMap_ = l,
            this.lazyHash_ = null,
            this.priorityNode_ && NS(this.priorityNode_),
            this.children_.isEmpty() && Y(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
    }
    isLeafNode() {
        return !1
    }
    getPriority() {
        return this.priorityNode_ || Zl
    }
    updatePriority(t) {
        return this.children_.isEmpty() ? this : new oe(this.children_, t, this.indexMap_)
    }
    getImmediateChild(t) {
        if (t === ".priority")
            return this.getPriority();
        {
            const i = this.children_.get(t);
            return i === null ? Zl : i
        }
    }
    getChild(t) {
        const i = _e(t);
        return i === null ? this : this.getImmediateChild(i).getChild(Ve(t))
    }
    hasChild(t) {
        return this.children_.get(t) !== null
    }
    updateImmediateChild(t, i) {
        if (Y(i, "We should always be passing snapshot nodes"),
            t === ".priority")
            return this.updatePriority(i);
        {
            const l = new ye(t, i);
            let o, u;
            i.isEmpty() ? (o = this.children_.remove(t),
                u = this.indexMap_.removeFromIndexes(l, this.children_)) : (o = this.children_.insert(t, i),
                    u = this.indexMap_.addToIndexes(l, this.children_));
            const h = o.isEmpty() ? Zl : this.priorityNode_;
            return new oe(o, h, u)
        }
    }
    updateChild(t, i) {
        const l = _e(t);
        if (l === null)
            return i;
        {
            Y(_e(t) !== ".priority" || ns(t) === 1, ".priority must be the last token in a path");
            const o = this.getImmediateChild(l).updateChild(Ve(t), i);
            return this.updateImmediateChild(l, o)
        }
    }
    isEmpty() {
        return this.children_.isEmpty()
    }
    numChildren() {
        return this.children_.count()
    }
    val(t) {
        if (this.isEmpty())
            return null;
        const i = {};
        let l = 0
            , o = 0
            , u = !0;
        if (this.forEachChild(nt, (h, d) => {
            i[h] = d.val(t),
                l++,
                u && oe.INTEGER_REGEXP_.test(h) ? o = Math.max(o, Number(h)) : u = !1
        }
        ),
            !t && u && o < 2 * l) {
            const h = [];
            for (const d in i)
                h[d] = i[d];
            return h
        } else
            return t && !this.getPriority().isEmpty() && (i[".priority"] = this.getPriority().val()),
                i
    }
    hash() {
        if (this.lazyHash_ === null) {
            let t = "";
            this.getPriority().isEmpty() || (t += "priority:" + RS(this.getPriority().val()) + ":"),
                this.forEachChild(nt, (i, l) => {
                    const o = l.hash();
                    o !== "" && (t += ":" + i + ":" + o)
                }
                ),
                this.lazyHash_ = t === "" ? "" : eS(t)
        }
        return this.lazyHash_
    }
    getPredecessorChildName(t, i, l) {
        const o = this.resolveIndex_(l);
        if (o) {
            const u = o.getPredecessorKey(new ye(t, i));
            return u ? u.name : null
        } else
            return this.children_.getPredecessorKey(t)
    }
    getFirstChildName(t) {
        const i = this.resolveIndex_(t);
        if (i) {
            const l = i.minKey();
            return l && l.name
        } else
            return this.children_.minKey()
    }
    getFirstChild(t) {
        const i = this.getFirstChildName(t);
        return i ? new ye(i, this.children_.get(i)) : null
    }
    getLastChildName(t) {
        const i = this.resolveIndex_(t);
        if (i) {
            const l = i.maxKey();
            return l && l.name
        } else
            return this.children_.maxKey()
    }
    getLastChild(t) {
        const i = this.getLastChildName(t);
        return i ? new ye(i, this.children_.get(i)) : null
    }
    forEachChild(t, i) {
        const l = this.resolveIndex_(t);
        return l ? l.inorderTraversal(o => i(o.name, o.node)) : this.children_.inorderTraversal(i)
    }
    getIterator(t) {
        return this.getIteratorFrom(t.minPost(), t)
    }
    getIteratorFrom(t, i) {
        const l = this.resolveIndex_(i);
        if (l)
            return l.getIteratorFrom(t, o => o);
        {
            const o = this.children_.getIteratorFrom(t.name, ye.Wrap);
            let u = o.peek();
            for (; u != null && i.compare(u, t) < 0;)
                o.getNext(),
                    u = o.peek();
            return o
        }
    }
    getReverseIterator(t) {
        return this.getReverseIteratorFrom(t.maxPost(), t)
    }
    getReverseIteratorFrom(t, i) {
        const l = this.resolveIndex_(i);
        if (l)
            return l.getReverseIteratorFrom(t, o => o);
        {
            const o = this.children_.getReverseIteratorFrom(t.name, ye.Wrap);
            let u = o.peek();
            for (; u != null && i.compare(u, t) > 0;)
                o.getNext(),
                    u = o.peek();
            return o
        }
    }
    compareTo(t) {
        return this.isEmpty() ? t.isEmpty() ? 0 : -1 : t.isLeafNode() || t.isEmpty() ? 1 : t === Tr ? -1 : 0
    }
    withIndex(t) {
        if (t === Ia || this.indexMap_.hasIndex(t))
            return this;
        {
            const i = this.indexMap_.addIndex(t, this.children_);
            return new oe(this.children_, this.priorityNode_, i)
        }
    }
    isIndexed(t) {
        return t === Ia || this.indexMap_.hasIndex(t)
    }
    equals(t) {
        if (t === this)
            return !0;
        if (t.isLeafNode())
            return !1;
        {
            const i = t;
            if (this.getPriority().equals(i.getPriority()))
                if (this.children_.count() === i.children_.count()) {
                    const l = this.getIterator(nt)
                        , o = i.getIterator(nt);
                    let u = l.getNext()
                        , h = o.getNext();
                    for (; u && h;) {
                        if (u.name !== h.name || !u.node.equals(h.node))
                            return !1;
                        u = l.getNext(),
                            h = o.getNext()
                    }
                    return u === null && h === null
                } else
                    return !1;
            else
                return !1
        }
    }
    resolveIndex_(t) {
        return t === Ia ? null : this.indexMap_.get(t.toString())
    }
}
oe.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class Uw extends oe {
    constructor() {
        super(new qt(yd), oe.EMPTY_NODE, ai.Default)
    }
    compareTo(t) {
        return t === this ? 0 : 1
    }
    equals(t) {
        return t === this
    }
    getPriority() {
        return this
    }
    getImmediateChild(t) {
        return oe.EMPTY_NODE
    }
    isEmpty() {
        return !1
    }
}
const Tr = new Uw;
Object.defineProperties(ye, {
    MIN: {
        value: new ye(za, oe.EMPTY_NODE)
    },
    MAX: {
        value: new ye(Ls, Tr)
    }
});
wS.__EMPTY_NODE = oe.EMPTY_NODE;
vt.__childrenNodeConstructor = oe;
Dw(Tr);
Iw(Tr);
const jw = !0;
function Et(s, t = null) {
    if (s === null)
        return oe.EMPTY_NODE;
    if (typeof s == "object" && ".priority" in s && (t = s[".priority"]),
        Y(t === null || typeof t == "string" || typeof t == "number" || typeof t == "object" && ".sv" in t, "Invalid priority type found: " + typeof t),
        typeof s == "object" && ".value" in s && s[".value"] !== null && (s = s[".value"]),
        typeof s != "object" || ".sv" in s) {
        const i = s;
        return new vt(i, Et(t))
    }
    if (!(s instanceof Array) && jw) {
        const i = [];
        let l = !1;
        if (Gt(s, (h, d) => {
            if (h.substring(0, 1) !== ".") {
                const p = Et(d);
                p.isEmpty() || (l = l || !p.getPriority().isEmpty(),
                    i.push(new ye(h, p)))
            }
        }
        ),
            i.length === 0)
            return oe.EMPTY_NODE;
        const u = cc(i, Aw, h => h.name, yd);
        if (l) {
            const h = cc(i, nt.getCompare());
            return new oe(u, Et(t), new ai({
                ".priority": h
            }, {
                ".priority": nt
            }))
        } else
            return new oe(u, Et(t), ai.Default)
    } else {
        let i = oe.EMPTY_NODE;
        return Gt(s, (l, o) => {
            if (gi(s, l) && l.substring(0, 1) !== ".") {
                const u = Et(o);
                (u.isLeafNode() || !u.isEmpty()) && (i = i.updateImmediateChild(l, u))
            }
        }
        ),
            i.updatePriority(Et(t))
    }
}
Ow(Et);
class zw extends Oc {
    constructor(t) {
        super(),
            this.indexPath_ = t,
            Y(!be(t) && _e(t) !== ".priority", "Can't create PathIndex with empty path or .priority key")
    }
    extractChild(t) {
        return t.getChild(this.indexPath_)
    }
    isDefinedOn(t) {
        return !t.getChild(this.indexPath_).isEmpty()
    }
    compare(t, i) {
        const l = this.extractChild(t.node)
            , o = this.extractChild(i.node)
            , u = l.compareTo(o);
        return u === 0 ? Qa(t.name, i.name) : u
    }
    makePost(t, i) {
        const l = Et(t)
            , o = oe.EMPTY_NODE.updateChild(this.indexPath_, l);
        return new ye(i, o)
    }
    maxPost() {
        const t = oe.EMPTY_NODE.updateChild(this.indexPath_, Tr);
        return new ye(Ls, t)
    }
    toString() {
        return CS(this.indexPath_, 0).join("/")
    }
}
class Hw extends Oc {
    compare(t, i) {
        const l = t.node.compareTo(i.node);
        return l === 0 ? Qa(t.name, i.name) : l
    }
    isDefinedOn(t) {
        return !0
    }
    indexedValueChanged(t, i) {
        return !t.equals(i)
    }
    minPost() {
        return ye.MIN
    }
    maxPost() {
        return ye.MAX
    }
    makePost(t, i) {
        const l = Et(t);
        return new ye(i, l)
    }
    toString() {
        return ".value"
    }
}
const Bw = new Hw;
function OS(s) {
    return {
        type: "value",
        snapshotNode: s
    }
}
function Ha(s, t) {
    return {
        type: "child_added",
        snapshotNode: t,
        childName: s
    }
}
function ur(s, t) {
    return {
        type: "child_removed",
        snapshotNode: t,
        childName: s
    }
}
function fr(s, t, i) {
    return {
        type: "child_changed",
        snapshotNode: t,
        childName: s,
        oldSnap: i
    }
}
function Pw(s, t) {
    return {
        type: "child_moved",
        snapshotNode: t,
        childName: s
    }
}
class vd {
    constructor(t) {
        this.index_ = t
    }
    updateChild(t, i, l, o, u, h) {
        Y(t.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        const d = t.getImmediateChild(i);
        return d.getChild(o).equals(l.getChild(o)) && d.isEmpty() === l.isEmpty() || (h != null && (l.isEmpty() ? t.hasChild(i) ? h.trackChildChange(ur(i, d)) : Y(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : d.isEmpty() ? h.trackChildChange(Ha(i, l)) : h.trackChildChange(fr(i, l, d))),
            t.isLeafNode() && l.isEmpty()) ? t : t.updateImmediateChild(i, l).withIndex(this.index_)
    }
    updateFullNode(t, i, l) {
        return l != null && (t.isLeafNode() || t.forEachChild(nt, (o, u) => {
            i.hasChild(o) || l.trackChildChange(ur(o, u))
        }
        ),
            i.isLeafNode() || i.forEachChild(nt, (o, u) => {
                if (t.hasChild(o)) {
                    const h = t.getImmediateChild(o);
                    h.equals(u) || l.trackChildChange(fr(o, u, h))
                } else
                    l.trackChildChange(Ha(o, u))
            }
            )),
            i.withIndex(this.index_)
    }
    updatePriority(t, i) {
        return t.isEmpty() ? oe.EMPTY_NODE : t.updatePriority(i)
    }
    filtersNodes() {
        return !1
    }
    getIndexedFilter() {
        return this
    }
    getIndex() {
        return this.index_
    }
}
class hr {
    constructor(t) {
        this.indexedFilter_ = new vd(t.getIndex()),
            this.index_ = t.getIndex(),
            this.startPost_ = hr.getStartPost_(t),
            this.endPost_ = hr.getEndPost_(t),
            this.startIsInclusive_ = !t.startAfterSet_,
            this.endIsInclusive_ = !t.endBeforeSet_
    }
    getStartPost() {
        return this.startPost_
    }
    getEndPost() {
        return this.endPost_
    }
    matches(t) {
        const i = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), t) <= 0 : this.index_.compare(this.getStartPost(), t) < 0
            , l = this.endIsInclusive_ ? this.index_.compare(t, this.getEndPost()) <= 0 : this.index_.compare(t, this.getEndPost()) < 0;
        return i && l
    }
    updateChild(t, i, l, o, u, h) {
        return this.matches(new ye(i, l)) || (l = oe.EMPTY_NODE),
            this.indexedFilter_.updateChild(t, i, l, o, u, h)
    }
    updateFullNode(t, i, l) {
        i.isLeafNode() && (i = oe.EMPTY_NODE);
        let o = i.withIndex(this.index_);
        o = o.updatePriority(oe.EMPTY_NODE);
        const u = this;
        return i.forEachChild(nt, (h, d) => {
            u.matches(new ye(h, d)) || (o = o.updateImmediateChild(h, oe.EMPTY_NODE))
        }
        ),
            this.indexedFilter_.updateFullNode(t, o, l)
    }
    updatePriority(t, i) {
        return t
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.indexedFilter_
    }
    getIndex() {
        return this.index_
    }
    static getStartPost_(t) {
        if (t.hasStart()) {
            const i = t.getIndexStartName();
            return t.getIndex().makePost(t.getIndexStartValue(), i)
        } else
            return t.getIndex().minPost()
    }
    static getEndPost_(t) {
        if (t.hasEnd()) {
            const i = t.getIndexEndName();
            return t.getIndex().makePost(t.getIndexEndValue(), i)
        } else
            return t.getIndex().maxPost()
    }
}
class qw {
    constructor(t) {
        this.withinDirectionalStart = i => this.reverse_ ? this.withinEndPost(i) : this.withinStartPost(i),
            this.withinDirectionalEnd = i => this.reverse_ ? this.withinStartPost(i) : this.withinEndPost(i),
            this.withinStartPost = i => {
                const l = this.index_.compare(this.rangedFilter_.getStartPost(), i);
                return this.startIsInclusive_ ? l <= 0 : l < 0
            }
            ,
            this.withinEndPost = i => {
                const l = this.index_.compare(i, this.rangedFilter_.getEndPost());
                return this.endIsInclusive_ ? l <= 0 : l < 0
            }
            ,
            this.rangedFilter_ = new hr(t),
            this.index_ = t.getIndex(),
            this.limit_ = t.getLimit(),
            this.reverse_ = !t.isViewFromLeft(),
            this.startIsInclusive_ = !t.startAfterSet_,
            this.endIsInclusive_ = !t.endBeforeSet_
    }
    updateChild(t, i, l, o, u, h) {
        return this.rangedFilter_.matches(new ye(i, l)) || (l = oe.EMPTY_NODE),
            t.getImmediateChild(i).equals(l) ? t : t.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(t, i, l, o, u, h) : this.fullLimitUpdateChild_(t, i, l, u, h)
    }
    updateFullNode(t, i, l) {
        let o;
        if (i.isLeafNode() || i.isEmpty())
            o = oe.EMPTY_NODE.withIndex(this.index_);
        else if (this.limit_ * 2 < i.numChildren() && i.isIndexed(this.index_)) {
            o = oe.EMPTY_NODE.withIndex(this.index_);
            let u;
            this.reverse_ ? u = i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : u = i.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let h = 0;
            for (; u.hasNext() && h < this.limit_;) {
                const d = u.getNext();
                if (this.withinDirectionalStart(d))
                    if (this.withinDirectionalEnd(d))
                        o = o.updateImmediateChild(d.name, d.node),
                            h++;
                    else
                        break;
                else
                    continue
            }
        } else {
            o = i.withIndex(this.index_),
                o = o.updatePriority(oe.EMPTY_NODE);
            let u;
            this.reverse_ ? u = o.getReverseIterator(this.index_) : u = o.getIterator(this.index_);
            let h = 0;
            for (; u.hasNext();) {
                const d = u.getNext();
                h < this.limit_ && this.withinDirectionalStart(d) && this.withinDirectionalEnd(d) ? h++ : o = o.updateImmediateChild(d.name, oe.EMPTY_NODE)
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(t, o, l)
    }
    updatePriority(t, i) {
        return t
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter()
    }
    getIndex() {
        return this.index_
    }
    fullLimitUpdateChild_(t, i, l, o, u) {
        let h;
        if (this.reverse_) {
            const v = this.index_.getCompare();
            h = (E, D) => v(D, E)
        } else
            h = this.index_.getCompare();
        const d = t;
        Y(d.numChildren() === this.limit_, "");
        const p = new ye(i, l)
            , g = this.reverse_ ? d.getFirstChild(this.index_) : d.getLastChild(this.index_)
            , S = this.rangedFilter_.matches(p);
        if (d.hasChild(i)) {
            const v = d.getImmediateChild(i);
            let E = o.getChildAfterChild(this.index_, g, this.reverse_);
            for (; E != null && (E.name === i || d.hasChild(E.name));)
                E = o.getChildAfterChild(this.index_, E, this.reverse_);
            const D = E == null ? 1 : h(E, p);
            if (S && !l.isEmpty() && D >= 0)
                return u?.trackChildChange(fr(i, l, v)),
                    d.updateImmediateChild(i, l);
            {
                u?.trackChildChange(ur(i, v));
                const P = d.updateImmediateChild(i, oe.EMPTY_NODE);
                return E != null && this.rangedFilter_.matches(E) ? (u?.trackChildChange(Ha(E.name, E.node)),
                    P.updateImmediateChild(E.name, E.node)) : P
            }
        } else
            return l.isEmpty() ? t : S && h(g, p) >= 0 ? (u != null && (u.trackChildChange(ur(g.name, g.node)),
                u.trackChildChange(Ha(i, l))),
                d.updateImmediateChild(i, l).updateImmediateChild(g.name, oe.EMPTY_NODE)) : t
    }
}
class Sd {
    constructor() {
        this.limitSet_ = !1,
            this.startSet_ = !1,
            this.startNameSet_ = !1,
            this.startAfterSet_ = !1,
            this.endSet_ = !1,
            this.endNameSet_ = !1,
            this.endBeforeSet_ = !1,
            this.limit_ = 0,
            this.viewFrom_ = "",
            this.indexStartValue_ = null,
            this.indexStartName_ = "",
            this.indexEndValue_ = null,
            this.indexEndName_ = "",
            this.index_ = nt
    }
    hasStart() {
        return this.startSet_
    }
    isViewFromLeft() {
        return this.viewFrom_ === "" ? this.startSet_ : this.viewFrom_ === "l"
    }
    getIndexStartValue() {
        return Y(this.startSet_, "Only valid if start has been set"),
            this.indexStartValue_
    }
    getIndexStartName() {
        return Y(this.startSet_, "Only valid if start has been set"),
            this.startNameSet_ ? this.indexStartName_ : za
    }
    hasEnd() {
        return this.endSet_
    }
    getIndexEndValue() {
        return Y(this.endSet_, "Only valid if end has been set"),
            this.indexEndValue_
    }
    getIndexEndName() {
        return Y(this.endSet_, "Only valid if end has been set"),
            this.endNameSet_ ? this.indexEndName_ : Ls
    }
    hasLimit() {
        return this.limitSet_
    }
    hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== ""
    }
    getLimit() {
        return Y(this.limitSet_, "Only valid if limit has been set"),
            this.limit_
    }
    getIndex() {
        return this.index_
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_)
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === nt
    }
    copy() {
        const t = new Sd;
        return t.limitSet_ = this.limitSet_,
            t.limit_ = this.limit_,
            t.startSet_ = this.startSet_,
            t.startAfterSet_ = this.startAfterSet_,
            t.indexStartValue_ = this.indexStartValue_,
            t.startNameSet_ = this.startNameSet_,
            t.indexStartName_ = this.indexStartName_,
            t.endSet_ = this.endSet_,
            t.endBeforeSet_ = this.endBeforeSet_,
            t.indexEndValue_ = this.indexEndValue_,
            t.endNameSet_ = this.endNameSet_,
            t.indexEndName_ = this.indexEndName_,
            t.index_ = this.index_,
            t.viewFrom_ = this.viewFrom_,
            t
    }
}
function Vw(s) {
    return s.loadsAllData() ? new vd(s.getIndex()) : s.hasLimit() ? new qw(s) : new hr(s)
}
function Ly(s) {
    const t = {};
    if (s.isDefault())
        return t;
    let i;
    if (s.index_ === nt ? i = "$priority" : s.index_ === Bw ? i = "$value" : s.index_ === Ia ? i = "$key" : (Y(s.index_ instanceof zw, "Unrecognized index type!"),
        i = s.index_.toString()),
        t.orderBy = mt(i),
        s.startSet_) {
        const l = s.startAfterSet_ ? "startAfter" : "startAt";
        t[l] = mt(s.indexStartValue_),
            s.startNameSet_ && (t[l] += "," + mt(s.indexStartName_))
    }
    if (s.endSet_) {
        const l = s.endBeforeSet_ ? "endBefore" : "endAt";
        t[l] = mt(s.indexEndValue_),
            s.endNameSet_ && (t[l] += "," + mt(s.indexEndName_))
    }
    return s.limitSet_ && (s.isViewFromLeft() ? t.limitToFirst = s.limit_ : t.limitToLast = s.limit_),
        t
}
function Uy(s) {
    const t = {};
    if (s.startSet_ && (t.sp = s.indexStartValue_,
        s.startNameSet_ && (t.sn = s.indexStartName_),
        t.sin = !s.startAfterSet_),
        s.endSet_ && (t.ep = s.indexEndValue_,
            s.endNameSet_ && (t.en = s.indexEndName_),
            t.ein = !s.endBeforeSet_),
        s.limitSet_) {
        t.l = s.limit_;
        let i = s.viewFrom_;
        i === "" && (s.isViewFromLeft() ? i = "l" : i = "r"),
            t.vf = i
    }
    return s.index_ !== nt && (t.i = s.index_.toString()),
        t
}
class uc extends SS {
    reportStats(t) {
        throw new Error("Method not implemented.")
    }
    static getListenId_(t, i) {
        return i !== void 0 ? "tag$" + i : (Y(t._queryParams.isDefault(), "should have a tag if it's not a default query."),
            t._path.toString())
    }
    constructor(t, i, l, o) {
        super(),
            this.repoInfo_ = t,
            this.onDataUpdate_ = i,
            this.authTokenProvider_ = l,
            this.appCheckTokenProvider_ = o,
            this.log_ = Cr("p:rest:"),
            this.listens_ = {}
    }
    listen(t, i, l, o) {
        const u = t._path.toString();
        this.log_("Listen called for " + u + " " + t._queryIdentifier);
        const h = uc.getListenId_(t, l)
            , d = {};
        this.listens_[h] = d;
        const p = Ly(t._queryParams);
        this.restRequest_(u + ".json", p, (g, S) => {
            let v = S;
            if (g === 404 && (v = null,
                g = null),
                g === null && this.onDataUpdate_(u, v, !1, l),
                Ua(this.listens_, h) === d) {
                let E;
                g ? g === 401 ? E = "permission_denied" : E = "rest_error:" + g : E = "ok",
                    o(E, null)
            }
        }
        )
    }
    unlisten(t, i) {
        const l = uc.getListenId_(t, i);
        delete this.listens_[l]
    }
    get(t) {
        const i = Ly(t._queryParams)
            , l = t._path.toString()
            , o = new Ac;
        return this.restRequest_(l + ".json", i, (u, h) => {
            let d = h;
            u === 404 && (d = null,
                u = null),
                u === null ? (this.onDataUpdate_(l, d, !1, null),
                    o.resolve(d)) : o.reject(new Error(d))
        }
        ),
            o.promise
    }
    refreshAuthToken(t) { }
    restRequest_(t, i = {}, l) {
        return i.format = "export",
            Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then(([o, u]) => {
                o && o.accessToken && (i.auth = o.accessToken),
                    u && u.token && (i.ac = u.token);
                const h = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + t + "?ns=" + this.repoInfo_.namespace + Fa(i);
                this.log_("Sending REST request for " + h);
                const d = new XMLHttpRequest;
                d.onreadystatechange = () => {
                    if (l && d.readyState === 4) {
                        this.log_("REST Response for " + h + " received. status:", d.status, "response:", d.responseText);
                        let p = null;
                        if (d.status >= 200 && d.status < 300) {
                            try {
                                p = rr(d.responseText)
                            } catch {
                                Vt("Failed to parse JSON response for " + h + ": " + d.responseText)
                            }
                            l(null, p)
                        } else
                            d.status !== 401 && d.status !== 404 && Vt("Got unsuccessful REST response for " + h + " Status: " + d.status),
                                l(d.status);
                        l = null
                    }
                }
                    ,
                    d.open("GET", h, !0),
                    d.send()
            }
            )
    }
}
class Gw {
    constructor() {
        this.rootNode_ = oe.EMPTY_NODE
    }
    getNode(t) {
        return this.rootNode_.getChild(t)
    }
    updateSnapshot(t, i) {
        this.rootNode_ = this.rootNode_.updateChild(t, i)
    }
}
function fc() {
    return {
        value: null,
        children: new Map
    }
}
function IS(s, t, i) {
    if (be(t))
        s.value = i,
            s.children.clear();
    else if (s.value !== null)
        s.value = s.value.updateChild(t, i);
    else {
        const l = _e(t);
        s.children.has(l) || s.children.set(l, fc());
        const o = s.children.get(l);
        t = Ve(t),
            IS(o, t, i)
    }
}
function Bh(s, t, i) {
    s.value !== null ? i(t, s.value) : Fw(s, (l, o) => {
        const u = new qe(t.toString() + "/" + l);
        Bh(o, u, i)
    }
    )
}
function Fw(s, t) {
    s.children.forEach((i, l) => {
        t(l, i)
    }
    )
}
class Yw {
    constructor(t) {
        this.collection_ = t,
            this.last_ = null
    }
    get() {
        const t = this.collection_.get()
            , i = {
                ...t
            };
        return this.last_ && Gt(this.last_, (l, o) => {
            i[l] = i[l] - o
        }
        ),
            this.last_ = t,
            i
    }
}
const jy = 10 * 1e3
    , Qw = 30 * 1e3
    , Kw = 300 * 1e3;
class Xw {
    constructor(t, i) {
        this.server_ = i,
            this.statsToReport_ = {},
            this.statsListener_ = new Yw(t);
        const l = jy + (Qw - jy) * Math.random();
        tr(this.reportStats_.bind(this), Math.floor(l))
    }
    reportStats_() {
        const t = this.statsListener_.get()
            , i = {};
        let l = !1;
        Gt(t, (o, u) => {
            u > 0 && gi(this.statsToReport_, o) && (i[o] = u,
                l = !0)
        }
        ),
            l && this.server_.reportStats(i),
            tr(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * Kw))
    }
}
var Tn;
(function (s) {
    s[s.OVERWRITE = 0] = "OVERWRITE",
        s[s.MERGE = 1] = "MERGE",
        s[s.ACK_USER_WRITE = 2] = "ACK_USER_WRITE",
        s[s.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
}
)(Tn || (Tn = {}));
function MS() {
    return {
        fromUser: !0,
        fromServer: !1,
        queryId: null,
        tagged: !1
    }
}
function Ed() {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: null,
        tagged: !1
    }
}
function bd(s) {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: s,
        tagged: !0
    }
}
class hc {
    constructor(t, i, l) {
        this.path = t,
            this.affectedTree = i,
            this.revert = l,
            this.type = Tn.ACK_USER_WRITE,
            this.source = MS()
    }
    operationForChild(t) {
        if (be(this.path)) {
            if (this.affectedTree.value != null)
                return Y(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."),
                    this;
            {
                const i = this.affectedTree.subtree(new qe(t));
                return new hc(Ie(), i, this.revert)
            }
        } else
            return Y(_e(this.path) === t, "operationForChild called for unrelated child."),
                new hc(Ve(this.path), this.affectedTree, this.revert)
    }
}
class dr {
    constructor(t, i) {
        this.source = t,
            this.path = i,
            this.type = Tn.LISTEN_COMPLETE
    }
    operationForChild(t) {
        return be(this.path) ? new dr(this.source, Ie()) : new dr(this.source, Ve(this.path))
    }
}
class Us {
    constructor(t, i, l) {
        this.source = t,
            this.path = i,
            this.snap = l,
            this.type = Tn.OVERWRITE
    }
    operationForChild(t) {
        return be(this.path) ? new Us(this.source, Ie(), this.snap.getImmediateChild(t)) : new Us(this.source, Ve(this.path), this.snap)
    }
}
class mr {
    constructor(t, i, l) {
        this.source = t,
            this.path = i,
            this.children = l,
            this.type = Tn.MERGE
    }
    operationForChild(t) {
        if (be(this.path)) {
            const i = this.children.subtree(new qe(t));
            return i.isEmpty() ? null : i.value ? new Us(this.source, Ie(), i.value) : new mr(this.source, Ie(), i)
        } else
            return Y(_e(this.path) === t, "Can't get a merge for a child not on the path of the operation"),
                new mr(this.source, Ve(this.path), this.children)
    }
    toString() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    }
}
class is {
    constructor(t, i, l) {
        this.node_ = t,
            this.fullyInitialized_ = i,
            this.filtered_ = l
    }
    isFullyInitialized() {
        return this.fullyInitialized_
    }
    isFiltered() {
        return this.filtered_
    }
    isCompleteForPath(t) {
        if (be(t))
            return this.isFullyInitialized() && !this.filtered_;
        const i = _e(t);
        return this.isCompleteForChild(i)
    }
    isCompleteForChild(t) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(t)
    }
    getNode() {
        return this.node_
    }
}
class Ww {
    constructor(t) {
        this.query_ = t,
            this.index_ = this.query_._queryParams.getIndex()
    }
}
function Zw(s, t, i, l) {
    const o = []
        , u = [];
    return t.forEach(h => {
        h.type === "child_changed" && s.index_.indexedValueChanged(h.oldSnap, h.snapshotNode) && u.push(Pw(h.childName, h.snapshotNode))
    }
    ),
        Jl(s, o, "child_removed", t, l, i),
        Jl(s, o, "child_added", t, l, i),
        Jl(s, o, "child_moved", u, l, i),
        Jl(s, o, "child_changed", t, l, i),
        Jl(s, o, "value", t, l, i),
        o
}
function Jl(s, t, i, l, o, u) {
    const h = l.filter(d => d.type === i);
    h.sort((d, p) => $w(s, d, p)),
        h.forEach(d => {
            const p = Jw(s, d, u);
            o.forEach(g => {
                g.respondsTo(d.type) && t.push(g.createEvent(p, s.query_))
            }
            )
        }
        )
}
function Jw(s, t, i) {
    return t.type === "value" || t.type === "child_removed" || (t.prevName = i.getPredecessorChildName(t.childName, t.snapshotNode, s.index_)),
        t
}
function $w(s, t, i) {
    if (t.childName == null || i.childName == null)
        throw Va("Should only compare child_ events.");
    const l = new ye(t.childName, t.snapshotNode)
        , o = new ye(i.childName, i.snapshotNode);
    return s.index_.compare(l, o)
}
function Ic(s, t) {
    return {
        eventCache: s,
        serverCache: t
    }
}
function nr(s, t, i, l) {
    return Ic(new is(t, i, l), s.serverCache)
}
function kS(s, t, i, l) {
    return Ic(s.eventCache, new is(t, i, l))
}
function dc(s) {
    return s.eventCache.isFullyInitialized() ? s.eventCache.getNode() : null
}
function js(s) {
    return s.serverCache.isFullyInitialized() ? s.serverCache.getNode() : null
}
let bh;
const eR = () => (bh || (bh = new qt(Hx)),
    bh);
class Xe {
    static fromObject(t) {
        let i = new Xe(null);
        return Gt(t, (l, o) => {
            i = i.set(new qe(l), o)
        }
        ),
            i
    }
    constructor(t, i = eR()) {
        this.value = t,
            this.children = i
    }
    isEmpty() {
        return this.value === null && this.children.isEmpty()
    }
    findRootMostMatchingPathAndValue(t, i) {
        if (this.value != null && i(this.value))
            return {
                path: Ie(),
                value: this.value
            };
        if (be(t))
            return null;
        {
            const l = _e(t)
                , o = this.children.get(l);
            if (o !== null) {
                const u = o.findRootMostMatchingPathAndValue(Ve(t), i);
                return u != null ? {
                    path: pt(new qe(l), u.path),
                    value: u.value
                } : null
            } else
                return null
        }
    }
    findRootMostValueAndPath(t) {
        return this.findRootMostMatchingPathAndValue(t, () => !0)
    }
    subtree(t) {
        if (be(t))
            return this;
        {
            const i = _e(t)
                , l = this.children.get(i);
            return l !== null ? l.subtree(Ve(t)) : new Xe(null)
        }
    }
    set(t, i) {
        if (be(t))
            return new Xe(i, this.children);
        {
            const l = _e(t)
                , u = (this.children.get(l) || new Xe(null)).set(Ve(t), i)
                , h = this.children.insert(l, u);
            return new Xe(this.value, h)
        }
    }
    remove(t) {
        if (be(t))
            return this.children.isEmpty() ? new Xe(null) : new Xe(null, this.children);
        {
            const i = _e(t)
                , l = this.children.get(i);
            if (l) {
                const o = l.remove(Ve(t));
                let u;
                return o.isEmpty() ? u = this.children.remove(i) : u = this.children.insert(i, o),
                    this.value === null && u.isEmpty() ? new Xe(null) : new Xe(this.value, u)
            } else
                return this
        }
    }
    get(t) {
        if (be(t))
            return this.value;
        {
            const i = _e(t)
                , l = this.children.get(i);
            return l ? l.get(Ve(t)) : null
        }
    }
    setTree(t, i) {
        if (be(t))
            return i;
        {
            const l = _e(t)
                , u = (this.children.get(l) || new Xe(null)).setTree(Ve(t), i);
            let h;
            return u.isEmpty() ? h = this.children.remove(l) : h = this.children.insert(l, u),
                new Xe(this.value, h)
        }
    }
    fold(t) {
        return this.fold_(Ie(), t)
    }
    fold_(t, i) {
        const l = {};
        return this.children.inorderTraversal((o, u) => {
            l[o] = u.fold_(pt(t, o), i)
        }
        ),
            i(t, this.value, l)
    }
    findOnPath(t, i) {
        return this.findOnPath_(t, Ie(), i)
    }
    findOnPath_(t, i, l) {
        const o = this.value ? l(i, this.value) : !1;
        if (o)
            return o;
        if (be(t))
            return null;
        {
            const u = _e(t)
                , h = this.children.get(u);
            return h ? h.findOnPath_(Ve(t), pt(i, u), l) : null
        }
    }
    foreachOnPath(t, i) {
        return this.foreachOnPath_(t, Ie(), i)
    }
    foreachOnPath_(t, i, l) {
        if (be(t))
            return this;
        {
            this.value && l(i, this.value);
            const o = _e(t)
                , u = this.children.get(o);
            return u ? u.foreachOnPath_(Ve(t), pt(i, o), l) : new Xe(null)
        }
    }
    foreach(t) {
        this.foreach_(Ie(), t)
    }
    foreach_(t, i) {
        this.children.inorderTraversal((l, o) => {
            o.foreach_(pt(t, l), i)
        }
        ),
            this.value && i(t, this.value)
    }
    foreachChild(t) {
        this.children.inorderTraversal((i, l) => {
            l.value && t(i, l.value)
        }
        )
    }
}
class wn {
    constructor(t) {
        this.writeTree_ = t
    }
    static empty() {
        return new wn(new Xe(null))
    }
}
function ir(s, t, i) {
    if (be(t))
        return new wn(new Xe(i));
    {
        const l = s.writeTree_.findRootMostValueAndPath(t);
        if (l != null) {
            const o = l.path;
            let u = l.value;
            const h = Mt(o, t);
            return u = u.updateChild(h, i),
                new wn(s.writeTree_.set(o, u))
        } else {
            const o = new Xe(i)
                , u = s.writeTree_.setTree(t, o);
            return new wn(u)
        }
    }
}
function zy(s, t, i) {
    let l = s;
    return Gt(i, (o, u) => {
        l = ir(l, pt(t, o), u)
    }
    ),
        l
}
function Hy(s, t) {
    if (be(t))
        return wn.empty();
    {
        const i = s.writeTree_.setTree(t, new Xe(null));
        return new wn(i)
    }
}
function Ph(s, t) {
    return Hs(s, t) != null
}
function Hs(s, t) {
    const i = s.writeTree_.findRootMostValueAndPath(t);
    return i != null ? s.writeTree_.get(i.path).getChild(Mt(i.path, t)) : null
}
function By(s) {
    const t = []
        , i = s.writeTree_.value;
    return i != null ? i.isLeafNode() || i.forEachChild(nt, (l, o) => {
        t.push(new ye(l, o))
    }
    ) : s.writeTree_.children.inorderTraversal((l, o) => {
        o.value != null && t.push(new ye(l, o.value))
    }
    ),
        t
}
function $i(s, t) {
    if (be(t))
        return s;
    {
        const i = Hs(s, t);
        return i != null ? new wn(new Xe(i)) : new wn(s.writeTree_.subtree(t))
    }
}
function qh(s) {
    return s.writeTree_.isEmpty()
}
function Ba(s, t) {
    return LS(Ie(), s.writeTree_, t)
}
function LS(s, t, i) {
    if (t.value != null)
        return i.updateChild(s, t.value);
    {
        let l = null;
        return t.children.inorderTraversal((o, u) => {
            o === ".priority" ? (Y(u.value !== null, "Priority writes must always be leaf nodes"),
                l = u.value) : i = LS(pt(s, o), u, i)
        }
        ),
            !i.getChild(s).isEmpty() && l !== null && (i = i.updateChild(pt(s, ".priority"), l)),
            i
    }
}
function Mc(s, t) {
    return HS(t, s)
}
function tR(s, t, i, l, o) {
    Y(l > s.lastWriteId, "Stacking an older write on top of newer ones"),
        o === void 0 && (o = !0),
        s.allWrites.push({
            path: t,
            snap: i,
            writeId: l,
            visible: o
        }),
        o && (s.visibleWrites = ir(s.visibleWrites, t, i)),
        s.lastWriteId = l
}
function nR(s, t) {
    for (let i = 0; i < s.allWrites.length; i++) {
        const l = s.allWrites[i];
        if (l.writeId === t)
            return l
    }
    return null
}
function iR(s, t) {
    const i = s.allWrites.findIndex(d => d.writeId === t);
    Y(i >= 0, "removeWrite called with nonexistent writeId.");
    const l = s.allWrites[i];
    s.allWrites.splice(i, 1);
    let o = l.visible
        , u = !1
        , h = s.allWrites.length - 1;
    for (; o && h >= 0;) {
        const d = s.allWrites[h];
        d.visible && (h >= i && sR(d, l.path) ? o = !1 : Cn(l.path, d.path) && (u = !0)),
            h--
    }
    if (o) {
        if (u)
            return aR(s),
                !0;
        if (l.snap)
            s.visibleWrites = Hy(s.visibleWrites, l.path);
        else {
            const d = l.children;
            Gt(d, p => {
                s.visibleWrites = Hy(s.visibleWrites, pt(l.path, p))
            }
            )
        }
        return !0
    } else
        return !1
}
function sR(s, t) {
    if (s.snap)
        return Cn(s.path, t);
    for (const i in s.children)
        if (s.children.hasOwnProperty(i) && Cn(pt(s.path, i), t))
            return !0;
    return !1
}
function aR(s) {
    s.visibleWrites = US(s.allWrites, lR, Ie()),
        s.allWrites.length > 0 ? s.lastWriteId = s.allWrites[s.allWrites.length - 1].writeId : s.lastWriteId = -1
}
function lR(s) {
    return s.visible
}
function US(s, t, i) {
    let l = wn.empty();
    for (let o = 0; o < s.length; ++o) {
        const u = s[o];
        if (t(u)) {
            const h = u.path;
            let d;
            if (u.snap)
                Cn(i, h) ? (d = Mt(i, h),
                    l = ir(l, d, u.snap)) : Cn(h, i) && (d = Mt(h, i),
                        l = ir(l, Ie(), u.snap.getChild(d)));
            else if (u.children) {
                if (Cn(i, h))
                    d = Mt(i, h),
                        l = zy(l, d, u.children);
                else if (Cn(h, i))
                    if (d = Mt(h, i),
                        be(d))
                        l = zy(l, Ie(), u.children);
                    else {
                        const p = Ua(u.children, _e(d));
                        if (p) {
                            const g = p.getChild(Ve(d));
                            l = ir(l, Ie(), g)
                        }
                    }
            } else
                throw Va("WriteRecord should have .snap or .children")
        }
    }
    return l
}
function jS(s, t, i, l, o) {
    if (!l && !o) {
        const u = Hs(s.visibleWrites, t);
        if (u != null)
            return u;
        {
            const h = $i(s.visibleWrites, t);
            if (qh(h))
                return i;
            if (i == null && !Ph(h, Ie()))
                return null;
            {
                const d = i || oe.EMPTY_NODE;
                return Ba(h, d)
            }
        }
    } else {
        const u = $i(s.visibleWrites, t);
        if (!o && qh(u))
            return i;
        if (!o && i == null && !Ph(u, Ie()))
            return null;
        {
            const h = function (g) {
                return (g.visible || o) && (!l || !~l.indexOf(g.writeId)) && (Cn(g.path, t) || Cn(t, g.path))
            }
                , d = US(s.allWrites, h, t)
                , p = i || oe.EMPTY_NODE;
            return Ba(d, p)
        }
    }
}
function rR(s, t, i) {
    let l = oe.EMPTY_NODE;
    const o = Hs(s.visibleWrites, t);
    if (o)
        return o.isLeafNode() || o.forEachChild(nt, (u, h) => {
            l = l.updateImmediateChild(u, h)
        }
        ),
            l;
    if (i) {
        const u = $i(s.visibleWrites, t);
        return i.forEachChild(nt, (h, d) => {
            const p = Ba($i(u, new qe(h)), d);
            l = l.updateImmediateChild(h, p)
        }
        ),
            By(u).forEach(h => {
                l = l.updateImmediateChild(h.name, h.node)
            }
            ),
            l
    } else {
        const u = $i(s.visibleWrites, t);
        return By(u).forEach(h => {
            l = l.updateImmediateChild(h.name, h.node)
        }
        ),
            l
    }
}
function oR(s, t, i, l, o) {
    Y(l || o, "Either existingEventSnap or existingServerSnap must exist");
    const u = pt(t, i);
    if (Ph(s.visibleWrites, u))
        return null;
    {
        const h = $i(s.visibleWrites, u);
        return qh(h) ? o.getChild(i) : Ba(h, o.getChild(i))
    }
}
function cR(s, t, i, l) {
    const o = pt(t, i)
        , u = Hs(s.visibleWrites, o);
    if (u != null)
        return u;
    if (l.isCompleteForChild(i)) {
        const h = $i(s.visibleWrites, o);
        return Ba(h, l.getNode().getImmediateChild(i))
    } else
        return null
}
function uR(s, t) {
    return Hs(s.visibleWrites, t)
}
function fR(s, t, i, l, o, u, h) {
    let d;
    const p = $i(s.visibleWrites, t)
        , g = Hs(p, Ie());
    if (g != null)
        d = g;
    else if (i != null)
        d = Ba(p, i);
    else
        return [];
    if (d = d.withIndex(h),
        !d.isEmpty() && !d.isLeafNode()) {
        const S = []
            , v = h.getCompare()
            , E = u ? d.getReverseIteratorFrom(l, h) : d.getIteratorFrom(l, h);
        let D = E.getNext();
        for (; D && S.length < o;)
            v(D, l) !== 0 && S.push(D),
                D = E.getNext();
        return S
    } else
        return []
}
function hR() {
    return {
        visibleWrites: wn.empty(),
        allWrites: [],
        lastWriteId: -1
    }
}
function mc(s, t, i, l) {
    return jS(s.writeTree, s.treePath, t, i, l)
}
function Cd(s, t) {
    return rR(s.writeTree, s.treePath, t)
}
function Py(s, t, i, l) {
    return oR(s.writeTree, s.treePath, t, i, l)
}
function pc(s, t) {
    return uR(s.writeTree, pt(s.treePath, t))
}
function dR(s, t, i, l, o, u) {
    return fR(s.writeTree, s.treePath, t, i, l, o, u)
}
function Td(s, t, i) {
    return cR(s.writeTree, s.treePath, t, i)
}
function zS(s, t) {
    return HS(pt(s.treePath, t), s.writeTree)
}
function HS(s, t) {
    return {
        treePath: s,
        writeTree: t
    }
}
class mR {
    constructor() {
        this.changeMap = new Map
    }
    trackChildChange(t) {
        const i = t.type
            , l = t.childName;
        Y(i === "child_added" || i === "child_changed" || i === "child_removed", "Only child changes supported for tracking"),
            Y(l !== ".priority", "Only non-priority child changes can be tracked.");
        const o = this.changeMap.get(l);
        if (o) {
            const u = o.type;
            if (i === "child_added" && u === "child_removed")
                this.changeMap.set(l, fr(l, t.snapshotNode, o.snapshotNode));
            else if (i === "child_removed" && u === "child_added")
                this.changeMap.delete(l);
            else if (i === "child_removed" && u === "child_changed")
                this.changeMap.set(l, ur(l, o.oldSnap));
            else if (i === "child_changed" && u === "child_added")
                this.changeMap.set(l, Ha(l, t.snapshotNode));
            else if (i === "child_changed" && u === "child_changed")
                this.changeMap.set(l, fr(l, t.snapshotNode, o.oldSnap));
            else
                throw Va("Illegal combination of changes: " + t + " occurred after " + o)
        } else
            this.changeMap.set(l, t)
    }
    getChanges() {
        return Array.from(this.changeMap.values())
    }
}
class pR {
    getCompleteChild(t) {
        return null
    }
    getChildAfterChild(t, i, l) {
        return null
    }
}
const BS = new pR;
class xd {
    constructor(t, i, l = null) {
        this.writes_ = t,
            this.viewCache_ = i,
            this.optCompleteServerCache_ = l
    }
    getCompleteChild(t) {
        const i = this.viewCache_.eventCache;
        if (i.isCompleteForChild(t))
            return i.getNode().getImmediateChild(t);
        {
            const l = this.optCompleteServerCache_ != null ? new is(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
            return Td(this.writes_, t, l)
        }
    }
    getChildAfterChild(t, i, l) {
        const o = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : js(this.viewCache_)
            , u = dR(this.writes_, o, i, 1, l, t);
        return u.length === 0 ? null : u[0]
    }
}
function gR(s) {
    return {
        filter: s
    }
}
function _R(s, t) {
    Y(t.eventCache.getNode().isIndexed(s.filter.getIndex()), "Event snap not indexed"),
        Y(t.serverCache.getNode().isIndexed(s.filter.getIndex()), "Server snap not indexed")
}
function yR(s, t, i, l, o) {
    const u = new mR;
    let h, d;
    if (i.type === Tn.OVERWRITE) {
        const g = i;
        g.source.fromUser ? h = Vh(s, t, g.path, g.snap, l, o, u) : (Y(g.source.fromServer, "Unknown source."),
            d = g.source.tagged || t.serverCache.isFiltered() && !be(g.path),
            h = gc(s, t, g.path, g.snap, l, o, d, u))
    } else if (i.type === Tn.MERGE) {
        const g = i;
        g.source.fromUser ? h = SR(s, t, g.path, g.children, l, o, u) : (Y(g.source.fromServer, "Unknown source."),
            d = g.source.tagged || t.serverCache.isFiltered(),
            h = Gh(s, t, g.path, g.children, l, o, d, u))
    } else if (i.type === Tn.ACK_USER_WRITE) {
        const g = i;
        g.revert ? h = CR(s, t, g.path, l, o, u) : h = ER(s, t, g.path, g.affectedTree, l, o, u)
    } else if (i.type === Tn.LISTEN_COMPLETE)
        h = bR(s, t, i.path, l, u);
    else
        throw Va("Unknown operation type: " + i.type);
    const p = u.getChanges();
    return vR(t, h, p),
    {
        viewCache: h,
        changes: p
    }
}
function vR(s, t, i) {
    const l = t.eventCache;
    if (l.isFullyInitialized()) {
        const o = l.getNode().isLeafNode() || l.getNode().isEmpty()
            , u = dc(s);
        (i.length > 0 || !s.eventCache.isFullyInitialized() || o && !l.getNode().equals(u) || !l.getNode().getPriority().equals(u.getPriority())) && i.push(OS(dc(t)))
    }
}
function PS(s, t, i, l, o, u) {
    const h = t.eventCache;
    if (pc(l, i) != null)
        return t;
    {
        let d, p;
        if (be(i))
            if (Y(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"),
                t.serverCache.isFiltered()) {
                const g = js(t)
                    , S = g instanceof oe ? g : oe.EMPTY_NODE
                    , v = Cd(l, S);
                d = s.filter.updateFullNode(t.eventCache.getNode(), v, u)
            } else {
                const g = mc(l, js(t));
                d = s.filter.updateFullNode(t.eventCache.getNode(), g, u)
            }
        else {
            const g = _e(i);
            if (g === ".priority") {
                Y(ns(i) === 1, "Can't have a priority with additional path components");
                const S = h.getNode();
                p = t.serverCache.getNode();
                const v = Py(l, i, S, p);
                v != null ? d = s.filter.updatePriority(S, v) : d = h.getNode()
            } else {
                const S = Ve(i);
                let v;
                if (h.isCompleteForChild(g)) {
                    p = t.serverCache.getNode();
                    const E = Py(l, i, h.getNode(), p);
                    E != null ? v = h.getNode().getImmediateChild(g).updateChild(S, E) : v = h.getNode().getImmediateChild(g)
                } else
                    v = Td(l, g, t.serverCache);
                v != null ? d = s.filter.updateChild(h.getNode(), g, v, S, o, u) : d = h.getNode()
            }
        }
        return nr(t, d, h.isFullyInitialized() || be(i), s.filter.filtersNodes())
    }
}
function gc(s, t, i, l, o, u, h, d) {
    const p = t.serverCache;
    let g;
    const S = h ? s.filter : s.filter.getIndexedFilter();
    if (be(i))
        g = S.updateFullNode(p.getNode(), l, null);
    else if (S.filtersNodes() && !p.isFiltered()) {
        const D = p.getNode().updateChild(i, l);
        g = S.updateFullNode(p.getNode(), D, null)
    } else {
        const D = _e(i);
        if (!p.isCompleteForPath(i) && ns(i) > 1)
            return t;
        const I = Ve(i)
            , M = p.getNode().getImmediateChild(D).updateChild(I, l);
        D === ".priority" ? g = S.updatePriority(p.getNode(), M) : g = S.updateChild(p.getNode(), D, M, I, BS, null)
    }
    const v = kS(t, g, p.isFullyInitialized() || be(i), S.filtersNodes())
        , E = new xd(o, v, u);
    return PS(s, v, i, o, E, d)
}
function Vh(s, t, i, l, o, u, h) {
    const d = t.eventCache;
    let p, g;
    const S = new xd(o, t, u);
    if (be(i))
        g = s.filter.updateFullNode(t.eventCache.getNode(), l, h),
            p = nr(t, g, !0, s.filter.filtersNodes());
    else {
        const v = _e(i);
        if (v === ".priority")
            g = s.filter.updatePriority(t.eventCache.getNode(), l),
                p = nr(t, g, d.isFullyInitialized(), d.isFiltered());
        else {
            const E = Ve(i)
                , D = d.getNode().getImmediateChild(v);
            let I;
            if (be(E))
                I = l;
            else {
                const P = S.getCompleteChild(v);
                P != null ? bS(E) === ".priority" && P.getChild(TS(E)).isEmpty() ? I = P : I = P.updateChild(E, l) : I = oe.EMPTY_NODE
            }
            if (D.equals(I))
                p = t;
            else {
                const P = s.filter.updateChild(d.getNode(), v, I, E, S, h);
                p = nr(t, P, d.isFullyInitialized(), s.filter.filtersNodes())
            }
        }
    }
    return p
}
function qy(s, t) {
    return s.eventCache.isCompleteForChild(t)
}
function SR(s, t, i, l, o, u, h) {
    let d = t;
    return l.foreach((p, g) => {
        const S = pt(i, p);
        qy(t, _e(S)) && (d = Vh(s, d, S, g, o, u, h))
    }
    ),
        l.foreach((p, g) => {
            const S = pt(i, p);
            qy(t, _e(S)) || (d = Vh(s, d, S, g, o, u, h))
        }
        ),
        d
}
function Vy(s, t, i) {
    return i.foreach((l, o) => {
        t = t.updateChild(l, o)
    }
    ),
        t
}
function Gh(s, t, i, l, o, u, h, d) {
    if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized())
        return t;
    let p = t, g;
    be(i) ? g = l : g = new Xe(null).setTree(i, l);
    const S = t.serverCache.getNode();
    return g.children.inorderTraversal((v, E) => {
        if (S.hasChild(v)) {
            const D = t.serverCache.getNode().getImmediateChild(v)
                , I = Vy(s, D, E);
            p = gc(s, p, new qe(v), I, o, u, h, d)
        }
    }
    ),
        g.children.inorderTraversal((v, E) => {
            const D = !t.serverCache.isCompleteForChild(v) && E.value === null;
            if (!S.hasChild(v) && !D) {
                const I = t.serverCache.getNode().getImmediateChild(v)
                    , P = Vy(s, I, E);
                p = gc(s, p, new qe(v), P, o, u, h, d)
            }
        }
        ),
        p
}
function ER(s, t, i, l, o, u, h) {
    if (pc(o, i) != null)
        return t;
    const d = t.serverCache.isFiltered()
        , p = t.serverCache;
    if (l.value != null) {
        if (be(i) && p.isFullyInitialized() || p.isCompleteForPath(i))
            return gc(s, t, i, p.getNode().getChild(i), o, u, d, h);
        if (be(i)) {
            let g = new Xe(null);
            return p.getNode().forEachChild(Ia, (S, v) => {
                g = g.set(new qe(S), v)
            }
            ),
                Gh(s, t, i, g, o, u, d, h)
        } else
            return t
    } else {
        let g = new Xe(null);
        return l.foreach((S, v) => {
            const E = pt(i, S);
            p.isCompleteForPath(E) && (g = g.set(S, p.getNode().getChild(E)))
        }
        ),
            Gh(s, t, i, g, o, u, d, h)
    }
}
function bR(s, t, i, l, o) {
    const u = t.serverCache
        , h = kS(t, u.getNode(), u.isFullyInitialized() || be(i), u.isFiltered());
    return PS(s, h, i, l, BS, o)
}
function CR(s, t, i, l, o, u) {
    let h;
    if (pc(l, i) != null)
        return t;
    {
        const d = new xd(l, t, o)
            , p = t.eventCache.getNode();
        let g;
        if (be(i) || _e(i) === ".priority") {
            let S;
            if (t.serverCache.isFullyInitialized())
                S = mc(l, js(t));
            else {
                const v = t.serverCache.getNode();
                Y(v instanceof oe, "serverChildren would be complete if leaf node"),
                    S = Cd(l, v)
            }
            S = S,
                g = s.filter.updateFullNode(p, S, u)
        } else {
            const S = _e(i);
            let v = Td(l, S, t.serverCache);
            v == null && t.serverCache.isCompleteForChild(S) && (v = p.getImmediateChild(S)),
                v != null ? g = s.filter.updateChild(p, S, v, Ve(i), d, u) : t.eventCache.getNode().hasChild(S) ? g = s.filter.updateChild(p, S, oe.EMPTY_NODE, Ve(i), d, u) : g = p,
                g.isEmpty() && t.serverCache.isFullyInitialized() && (h = mc(l, js(t)),
                    h.isLeafNode() && (g = s.filter.updateFullNode(g, h, u)))
        }
        return h = t.serverCache.isFullyInitialized() || pc(l, Ie()) != null,
            nr(t, g, h, s.filter.filtersNodes())
    }
}
class TR {
    constructor(t, i) {
        this.query_ = t,
            this.eventRegistrations_ = [];
        const l = this.query_._queryParams
            , o = new vd(l.getIndex())
            , u = Vw(l);
        this.processor_ = gR(u);
        const h = i.serverCache
            , d = i.eventCache
            , p = o.updateFullNode(oe.EMPTY_NODE, h.getNode(), null)
            , g = u.updateFullNode(oe.EMPTY_NODE, d.getNode(), null)
            , S = new is(p, h.isFullyInitialized(), o.filtersNodes())
            , v = new is(g, d.isFullyInitialized(), u.filtersNodes());
        this.viewCache_ = Ic(v, S),
            this.eventGenerator_ = new Ww(this.query_)
    }
    get query() {
        return this.query_
    }
}
function xR(s) {
    return s.viewCache_.serverCache.getNode()
}
function wR(s) {
    return dc(s.viewCache_)
}
function RR(s, t) {
    const i = js(s.viewCache_);
    return i && (s.query._queryParams.loadsAllData() || !be(t) && !i.getImmediateChild(_e(t)).isEmpty()) ? i.getChild(t) : null
}
function Gy(s) {
    return s.eventRegistrations_.length === 0
}
function NR(s, t) {
    s.eventRegistrations_.push(t)
}
function Fy(s, t, i) {
    const l = [];
    if (i) {
        Y(t == null, "A cancel should cancel all event registrations.");
        const o = s.query._path;
        s.eventRegistrations_.forEach(u => {
            const h = u.createCancelEvent(i, o);
            h && l.push(h)
        }
        )
    }
    if (t) {
        let o = [];
        for (let u = 0; u < s.eventRegistrations_.length; ++u) {
            const h = s.eventRegistrations_[u];
            if (!h.matches(t))
                o.push(h);
            else if (t.hasAnyCallback()) {
                o = o.concat(s.eventRegistrations_.slice(u + 1));
                break
            }
        }
        s.eventRegistrations_ = o
    } else
        s.eventRegistrations_ = [];
    return l
}
function Yy(s, t, i, l) {
    t.type === Tn.MERGE && t.source.queryId !== null && (Y(js(s.viewCache_), "We should always have a full cache before handling merges"),
        Y(dc(s.viewCache_), "Missing event cache, even though we have a server cache"));
    const o = s.viewCache_
        , u = yR(s.processor_, o, t, i, l);
    return _R(s.processor_, u.viewCache),
        Y(u.viewCache.serverCache.isFullyInitialized() || !o.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"),
        s.viewCache_ = u.viewCache,
        qS(s, u.changes, u.viewCache.eventCache.getNode(), null)
}
function AR(s, t) {
    const i = s.viewCache_.eventCache
        , l = [];
    return i.getNode().isLeafNode() || i.getNode().forEachChild(nt, (u, h) => {
        l.push(Ha(u, h))
    }
    ),
        i.isFullyInitialized() && l.push(OS(i.getNode())),
        qS(s, l, i.getNode(), t)
}
function qS(s, t, i, l) {
    const o = l ? [l] : s.eventRegistrations_;
    return Zw(s.eventGenerator_, t, i, o)
}
let _c;
class VS {
    constructor() {
        this.views = new Map
    }
}
function DR(s) {
    Y(!_c, "__referenceConstructor has already been defined"),
        _c = s
}
function OR() {
    return Y(_c, "Reference.ts has not been loaded"),
        _c
}
function IR(s) {
    return s.views.size === 0
}
function wd(s, t, i, l) {
    const o = t.source.queryId;
    if (o !== null) {
        const u = s.views.get(o);
        return Y(u != null, "SyncTree gave us an op for an invalid query."),
            Yy(u, t, i, l)
    } else {
        let u = [];
        for (const h of s.views.values())
            u = u.concat(Yy(h, t, i, l));
        return u
    }
}
function GS(s, t, i, l, o) {
    const u = t._queryIdentifier
        , h = s.views.get(u);
    if (!h) {
        let d = mc(i, o ? l : null)
            , p = !1;
        d ? p = !0 : l instanceof oe ? (d = Cd(i, l),
            p = !1) : (d = oe.EMPTY_NODE,
                p = !1);
        const g = Ic(new is(d, p, !1), new is(l, o, !1));
        return new TR(t, g)
    }
    return h
}
function MR(s, t, i, l, o, u) {
    const h = GS(s, t, l, o, u);
    return s.views.has(t._queryIdentifier) || s.views.set(t._queryIdentifier, h),
        NR(h, i),
        AR(h, i)
}
function kR(s, t, i, l) {
    const o = t._queryIdentifier
        , u = [];
    let h = [];
    const d = ss(s);
    if (o === "default")
        for (const [p, g] of s.views.entries())
            h = h.concat(Fy(g, i, l)),
                Gy(g) && (s.views.delete(p),
                    g.query._queryParams.loadsAllData() || u.push(g.query));
    else {
        const p = s.views.get(o);
        p && (h = h.concat(Fy(p, i, l)),
            Gy(p) && (s.views.delete(o),
                p.query._queryParams.loadsAllData() || u.push(p.query)))
    }
    return d && !ss(s) && u.push(new (OR())(t._repo, t._path)),
    {
        removed: u,
        events: h
    }
}
function FS(s) {
    const t = [];
    for (const i of s.views.values())
        i.query._queryParams.loadsAllData() || t.push(i);
    return t
}
function es(s, t) {
    let i = null;
    for (const l of s.views.values())
        i = i || RR(l, t);
    return i
}
function YS(s, t) {
    if (t._queryParams.loadsAllData())
        return kc(s);
    {
        const l = t._queryIdentifier;
        return s.views.get(l)
    }
}
function QS(s, t) {
    return YS(s, t) != null
}
function ss(s) {
    return kc(s) != null
}
function kc(s) {
    for (const t of s.views.values())
        if (t.query._queryParams.loadsAllData())
            return t;
    return null
}
let yc;
function LR(s) {
    Y(!yc, "__referenceConstructor has already been defined"),
        yc = s
}
function UR() {
    return Y(yc, "Reference.ts has not been loaded"),
        yc
}
let jR = 1;
class Qy {
    constructor(t) {
        this.listenProvider_ = t,
            this.syncPointTree_ = new Xe(null),
            this.pendingWriteTree_ = hR(),
            this.tagToQueryMap = new Map,
            this.queryToTagMap = new Map
    }
}
function KS(s, t, i, l, o) {
    return tR(s.pendingWriteTree_, t, i, l, o),
        o ? wr(s, new Us(MS(), t, i)) : []
}
function Is(s, t, i = !1) {
    const l = nR(s.pendingWriteTree_, t);
    if (iR(s.pendingWriteTree_, t)) {
        let u = new Xe(null);
        return l.snap != null ? u = u.set(Ie(), !0) : Gt(l.children, h => {
            u = u.set(new qe(h), !0)
        }
        ),
            wr(s, new hc(l.path, u, i))
    } else
        return []
}
function xr(s, t, i) {
    return wr(s, new Us(Ed(), t, i))
}
function zR(s, t, i) {
    const l = Xe.fromObject(i);
    return wr(s, new mr(Ed(), t, l))
}
function HR(s, t) {
    return wr(s, new dr(Ed(), t))
}
function BR(s, t, i) {
    const l = Nd(s, i);
    if (l) {
        const o = Ad(l)
            , u = o.path
            , h = o.queryId
            , d = Mt(u, t)
            , p = new dr(bd(h), d);
        return Dd(s, u, p)
    } else
        return []
}
function vc(s, t, i, l, o = !1) {
    const u = t._path
        , h = s.syncPointTree_.get(u);
    let d = [];
    if (h && (t._queryIdentifier === "default" || QS(h, t))) {
        const p = kR(h, t, i, l);
        IR(h) && (s.syncPointTree_ = s.syncPointTree_.remove(u));
        const g = p.removed;
        if (d = p.events,
            !o) {
            const S = g.findIndex(E => E._queryParams.loadsAllData()) !== -1
                , v = s.syncPointTree_.findOnPath(u, (E, D) => ss(D));
            if (S && !v) {
                const E = s.syncPointTree_.subtree(u);
                if (!E.isEmpty()) {
                    const D = VR(E);
                    for (let I = 0; I < D.length; ++I) {
                        const P = D[I]
                            , M = P.query
                            , Q = JS(s, P);
                        s.listenProvider_.startListening(sr(M), pr(s, M), Q.hashFn, Q.onComplete)
                    }
                }
            }
            !v && g.length > 0 && !l && (S ? s.listenProvider_.stopListening(sr(t), null) : g.forEach(E => {
                const D = s.queryToTagMap.get(Lc(E));
                s.listenProvider_.stopListening(sr(E), D)
            }
            ))
        }
        GR(s, g)
    }
    return d
}
function XS(s, t, i, l) {
    const o = Nd(s, l);
    if (o != null) {
        const u = Ad(o)
            , h = u.path
            , d = u.queryId
            , p = Mt(h, t)
            , g = new Us(bd(d), p, i);
        return Dd(s, h, g)
    } else
        return []
}
function PR(s, t, i, l) {
    const o = Nd(s, l);
    if (o) {
        const u = Ad(o)
            , h = u.path
            , d = u.queryId
            , p = Mt(h, t)
            , g = Xe.fromObject(i)
            , S = new mr(bd(d), p, g);
        return Dd(s, h, S)
    } else
        return []
}
function Fh(s, t, i, l = !1) {
    const o = t._path;
    let u = null
        , h = !1;
    s.syncPointTree_.foreachOnPath(o, (E, D) => {
        const I = Mt(E, o);
        u = u || es(D, I),
            h = h || ss(D)
    }
    );
    let d = s.syncPointTree_.get(o);
    d ? (h = h || ss(d),
        u = u || es(d, Ie())) : (d = new VS,
            s.syncPointTree_ = s.syncPointTree_.set(o, d));
    let p;
    u != null ? p = !0 : (p = !1,
        u = oe.EMPTY_NODE,
        s.syncPointTree_.subtree(o).foreachChild((D, I) => {
            const P = es(I, Ie());
            P && (u = u.updateImmediateChild(D, P))
        }
        ));
    const g = QS(d, t);
    if (!g && !t._queryParams.loadsAllData()) {
        const E = Lc(t);
        Y(!s.queryToTagMap.has(E), "View does not exist, but we have a tag");
        const D = FR();
        s.queryToTagMap.set(E, D),
            s.tagToQueryMap.set(D, E)
    }
    const S = Mc(s.pendingWriteTree_, o);
    let v = MR(d, t, i, S, u, p);
    if (!g && !h && !l) {
        const E = YS(d, t);
        v = v.concat(YR(s, t, E))
    }
    return v
}
function Rd(s, t, i) {
    const o = s.pendingWriteTree_
        , u = s.syncPointTree_.findOnPath(t, (h, d) => {
            const p = Mt(h, t)
                , g = es(d, p);
            if (g)
                return g
        }
        );
    return jS(o, t, u, i, !0)
}
function qR(s, t) {
    const i = t._path;
    let l = null;
    s.syncPointTree_.foreachOnPath(i, (g, S) => {
        const v = Mt(g, i);
        l = l || es(S, v)
    }
    );
    let o = s.syncPointTree_.get(i);
    o ? l = l || es(o, Ie()) : (o = new VS,
        s.syncPointTree_ = s.syncPointTree_.set(i, o));
    const u = l != null
        , h = u ? new is(l, !0, !1) : null
        , d = Mc(s.pendingWriteTree_, t._path)
        , p = GS(o, t, d, u ? h.getNode() : oe.EMPTY_NODE, u);
    return wR(p)
}
function wr(s, t) {
    return WS(t, s.syncPointTree_, null, Mc(s.pendingWriteTree_, Ie()))
}
function WS(s, t, i, l) {
    if (be(s.path))
        return ZS(s, t, i, l);
    {
        const o = t.get(Ie());
        i == null && o != null && (i = es(o, Ie()));
        let u = [];
        const h = _e(s.path)
            , d = s.operationForChild(h)
            , p = t.children.get(h);
        if (p && d) {
            const g = i ? i.getImmediateChild(h) : null
                , S = zS(l, h);
            u = u.concat(WS(d, p, g, S))
        }
        return o && (u = u.concat(wd(o, s, l, i))),
            u
    }
}
function ZS(s, t, i, l) {
    const o = t.get(Ie());
    i == null && o != null && (i = es(o, Ie()));
    let u = [];
    return t.children.inorderTraversal((h, d) => {
        const p = i ? i.getImmediateChild(h) : null
            , g = zS(l, h)
            , S = s.operationForChild(h);
        S && (u = u.concat(ZS(S, d, p, g)))
    }
    ),
        o && (u = u.concat(wd(o, s, l, i))),
        u
}
function JS(s, t) {
    const i = t.query
        , l = pr(s, i);
    return {
        hashFn: () => (xR(t) || oe.EMPTY_NODE).hash(),
        onComplete: o => {
            if (o === "ok")
                return l ? BR(s, i._path, l) : HR(s, i._path);
            {
                const u = qx(o, i);
                return vc(s, i, null, u)
            }
        }
    }
}
function pr(s, t) {
    const i = Lc(t);
    return s.queryToTagMap.get(i)
}
function Lc(s) {
    return s._path.toString() + "$" + s._queryIdentifier
}
function Nd(s, t) {
    return s.tagToQueryMap.get(t)
}
function Ad(s) {
    const t = s.indexOf("$");
    return Y(t !== -1 && t < s.length - 1, "Bad queryKey."),
    {
        queryId: s.substr(t + 1),
        path: new qe(s.substr(0, t))
    }
}
function Dd(s, t, i) {
    const l = s.syncPointTree_.get(t);
    Y(l, "Missing sync point for query tag that we're tracking");
    const o = Mc(s.pendingWriteTree_, t);
    return wd(l, i, o, null)
}
function VR(s) {
    return s.fold((t, i, l) => {
        if (i && ss(i))
            return [kc(i)];
        {
            let o = [];
            return i && (o = FS(i)),
                Gt(l, (u, h) => {
                    o = o.concat(h)
                }
                ),
                o
        }
    }
    )
}
function sr(s) {
    return s._queryParams.loadsAllData() && !s._queryParams.isDefault() ? new (UR())(s._repo, s._path) : s
}
function GR(s, t) {
    for (let i = 0; i < t.length; ++i) {
        const l = t[i];
        if (!l._queryParams.loadsAllData()) {
            const o = Lc(l)
                , u = s.queryToTagMap.get(o);
            s.queryToTagMap.delete(o),
                s.tagToQueryMap.delete(u)
        }
    }
}
function FR() {
    return jR++
}
function YR(s, t, i) {
    const l = t._path
        , o = pr(s, t)
        , u = JS(s, i)
        , h = s.listenProvider_.startListening(sr(t), o, u.hashFn, u.onComplete)
        , d = s.syncPointTree_.subtree(l);
    if (o)
        Y(!ss(d.value), "If we're adding a query, it shouldn't be shadowed");
    else {
        const p = d.fold((g, S, v) => {
            if (!be(g) && S && ss(S))
                return [kc(S).query];
            {
                let E = [];
                return S && (E = E.concat(FS(S).map(D => D.query))),
                    Gt(v, (D, I) => {
                        E = E.concat(I)
                    }
                    ),
                    E
            }
        }
        );
        for (let g = 0; g < p.length; ++g) {
            const S = p[g];
            s.listenProvider_.stopListening(sr(S), pr(s, S))
        }
    }
    return h
}
class Od {
    constructor(t) {
        this.node_ = t
    }
    getImmediateChild(t) {
        const i = this.node_.getImmediateChild(t);
        return new Od(i)
    }
    node() {
        return this.node_
    }
}
class Id {
    constructor(t, i) {
        this.syncTree_ = t,
            this.path_ = i
    }
    getImmediateChild(t) {
        const i = pt(this.path_, t);
        return new Id(this.syncTree_, i)
    }
    node() {
        return Rd(this.syncTree_, this.path_)
    }
}
const QR = function (s) {
    return s = s || {},
        s.timestamp = s.timestamp || new Date().getTime(),
        s
}
    , Ky = function (s, t, i) {
        if (!s || typeof s != "object")
            return s;
        if (Y(".sv" in s, "Unexpected leaf node or priority contents"),
            typeof s[".sv"] == "string")
            return KR(s[".sv"], t, i);
        if (typeof s[".sv"] == "object")
            return XR(s[".sv"], t);
        Y(!1, "Unexpected server value: " + JSON.stringify(s, null, 2))
    }
    , KR = function (s, t, i) {
        if (s === "timestamp")
            return i.timestamp;
        Y(!1, "Unexpected server value: " + s)
    }
    , XR = function (s, t, i) {
        s.hasOwnProperty("increment") || Y(!1, "Unexpected server value: " + JSON.stringify(s, null, 2));
        const l = s.increment;
        typeof l != "number" && Y(!1, "Unexpected increment value: " + l);
        const o = t.node();
        if (Y(o !== null && typeof o < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"),
            !o.isLeafNode())
            return l;
        const h = o.getValue();
        return typeof h != "number" ? l : h + l
    }
    , WR = function (s, t, i, l) {
        return Md(t, new Id(i, s), l)
    }
    , $S = function (s, t, i) {
        return Md(s, new Od(t), i)
    };
function Md(s, t, i) {
    const l = s.getPriority().val()
        , o = Ky(l, t.getImmediateChild(".priority"), i);
    let u;
    if (s.isLeafNode()) {
        const h = s
            , d = Ky(h.getValue(), t, i);
        return d !== h.getValue() || o !== h.getPriority().val() ? new vt(d, Et(o)) : s
    } else {
        const h = s;
        return u = h,
            o !== h.getPriority().val() && (u = u.updatePriority(new vt(o))),
            h.forEachChild(nt, (d, p) => {
                const g = Md(p, t.getImmediateChild(d), i);
                g !== p && (u = u.updateImmediateChild(d, g))
            }
            ),
            u
    }
}
class kd {
    constructor(t = "", i = null, l = {
        children: {},
        childCount: 0
    }) {
        this.name = t,
            this.parent = i,
            this.node = l
    }
}
function Ld(s, t) {
    let i = t instanceof qe ? t : new qe(t)
        , l = s
        , o = _e(i);
    for (; o !== null;) {
        const u = Ua(l.node.children, o) || {
            children: {},
            childCount: 0
        };
        l = new kd(o, l, u),
            i = Ve(i),
            o = _e(i)
    }
    return l
}
function Xa(s) {
    return s.node.value
}
function eE(s, t) {
    s.node.value = t,
        Yh(s)
}
function tE(s) {
    return s.node.childCount > 0
}
function ZR(s) {
    return Xa(s) === void 0 && !tE(s)
}
function Uc(s, t) {
    Gt(s.node.children, (i, l) => {
        t(new kd(i, s, l))
    }
    )
}
function nE(s, t, i, l) {
    i && t(s),
        Uc(s, o => {
            nE(o, t, !0)
        }
        )
}
function JR(s, t, i) {
    let l = s.parent;
    for (; l !== null;) {
        if (t(l))
            return !0;
        l = l.parent
    }
    return !1
}
function Rr(s) {
    return new qe(s.parent === null ? s.name : Rr(s.parent) + "/" + s.name)
}
function Yh(s) {
    s.parent !== null && $R(s.parent, s.name, s)
}
function $R(s, t, i) {
    const l = ZR(i)
        , o = gi(s.node.children, t);
    l && o ? (delete s.node.children[t],
        s.node.childCount--,
        Yh(s)) : !l && !o && (s.node.children[t] = i.node,
            s.node.childCount++,
            Yh(s))
}
const eN = /[\[\].#$\/\u0000-\u001F\u007F]/
    , tN = /[\[\].#$\u0000-\u001F\u007F]/
    , Ch = 10 * 1024 * 1024
    , iE = function (s) {
        return typeof s == "string" && s.length !== 0 && !eN.test(s)
    }
    , sE = function (s) {
        return typeof s == "string" && s.length !== 0 && !tN.test(s)
    }
    , nN = function (s) {
        return s && (s = s.replace(/^\/*\.info(\/|$)/, "/")),
            sE(s)
    }
    , iN = function (s, t, i, l) {
        Ud(od(s, "value"), t, i)
    }
    , Ud = function (s, t, i) {
        const l = i instanceof qe ? new Ew(i, s) : i;
        if (t === void 0)
            throw new Error(s + "contains undefined " + Ds(l));
        if (typeof t == "function")
            throw new Error(s + "contains a function " + Ds(l) + " with contents = " + t.toString());
        if (tS(t))
            throw new Error(s + "contains " + t.toString() + " " + Ds(l));
        if (typeof t == "string" && t.length > Ch / 3 && Dc(t) > Ch)
            throw new Error(s + "contains a string greater than " + Ch + " utf8 bytes " + Ds(l) + " ('" + t.substring(0, 50) + "...')");
        if (t && typeof t == "object") {
            let o = !1
                , u = !1;
            if (Gt(t, (h, d) => {
                if (h === ".value")
                    o = !0;
                else if (h !== ".priority" && h !== ".sv" && (u = !0,
                    !iE(h)))
                    throw new Error(s + " contains an invalid key (" + h + ") " + Ds(l) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
                bw(l, h),
                    Ud(s, d, l),
                    Cw(l)
            }
            ),
                o && u)
                throw new Error(s + ' contains ".value" child ' + Ds(l) + " in addition to actual children.")
        }
    }
    , aE = function (s, t, i, l) {
        if (!sE(i))
            throw new Error(od(s, t) + 'was an invalid path = "' + i + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)
    }
    , sN = function (s, t, i, l) {
        i && (i = i.replace(/^\/*\.info(\/|$)/, "/")),
            aE(s, t, i)
    }
    , lE = function (s, t) {
        if (_e(t) === ".info")
            throw new Error(s + " failed = Can't modify data under /.info/")
    }
    , aN = function (s, t) {
        const i = t.path.toString();
        if (typeof t.repoInfo.host != "string" || t.repoInfo.host.length === 0 || !iE(t.repoInfo.namespace) && t.repoInfo.host.split(":")[0] !== "localhost" || i.length !== 0 && !nN(i))
            throw new Error(od(s, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)
    };
class lN {
    constructor() {
        this.eventLists_ = [],
            this.recursionDepth_ = 0
    }
}
function jd(s, t) {
    let i = null;
    for (let l = 0; l < t.length; l++) {
        const o = t[l]
            , u = o.getPath();
        i !== null && !gd(u, i.path) && (s.eventLists_.push(i),
            i = null),
            i === null && (i = {
                events: [],
                path: u
            }),
            i.events.push(o)
    }
    i && s.eventLists_.push(i)
}
function rE(s, t, i) {
    jd(s, i),
        oE(s, l => gd(l, t))
}
function zn(s, t, i) {
    jd(s, i),
        oE(s, l => Cn(l, t) || Cn(t, l))
}
function oE(s, t) {
    s.recursionDepth_++;
    let i = !0;
    for (let l = 0; l < s.eventLists_.length; l++) {
        const o = s.eventLists_[l];
        if (o) {
            const u = o.path;
            t(u) ? (rN(s.eventLists_[l]),
                s.eventLists_[l] = null) : i = !1
        }
    }
    i && (s.eventLists_ = []),
        s.recursionDepth_--
}
function rN(s) {
    for (let t = 0; t < s.events.length; t++) {
        const i = s.events[t];
        if (i !== null) {
            s.events[t] = null;
            const l = i.getEventRunner();
            er && At("event: " + i.toString()),
                Ka(l)
        }
    }
}
const oN = "repo_interrupt"
    , cN = 25;
class uN {
    constructor(t, i, l, o) {
        this.repoInfo_ = t,
            this.forceRestClient_ = i,
            this.authTokenProvider_ = l,
            this.appCheckProvider_ = o,
            this.dataUpdateCount = 0,
            this.statsListener_ = null,
            this.eventQueue_ = new lN,
            this.nextWriteId_ = 1,
            this.interceptServerDataCallback_ = null,
            this.onDisconnect_ = fc(),
            this.transactionQueueTree_ = new kd,
            this.persistentConnection_ = null,
            this.key = this.repoInfo_.toURLString()
    }
    toString() {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
    }
}
function fN(s, t, i) {
    if (s.stats_ = md(s.repoInfo_),
        s.forceRestClient_ || Yx())
        s.server_ = new uc(s.repoInfo_, (l, o, u, h) => {
            Xy(s, l, o, u, h)
        }
            , s.authTokenProvider_, s.appCheckProvider_),
            setTimeout(() => Wy(s, !0), 0);
    else {
        if (typeof i < "u" && i !== null) {
            if (typeof i != "object")
                throw new Error("Only objects are supported for option databaseAuthVariableOverride");
            try {
                mt(i)
            } catch (l) {
                throw new Error("Invalid authOverride provided: " + l)
            }
        }
        s.persistentConnection_ = new oi(s.repoInfo_, t, (l, o, u, h) => {
            Xy(s, l, o, u, h)
        }
            , l => {
                Wy(s, l)
            }
            , l => {
                dN(s, l)
            }
            , s.authTokenProvider_, s.appCheckProvider_, i),
            s.server_ = s.persistentConnection_
    }
    s.authTokenProvider_.addTokenChangeListener(l => {
        s.server_.refreshAuthToken(l)
    }
    ),
        s.appCheckProvider_.addTokenChangeListener(l => {
            s.server_.refreshAppCheckToken(l.token)
        }
        ),
        s.statsReporter_ = Zx(s.repoInfo_, () => new Xw(s.stats_, s.server_)),
        s.infoData_ = new Gw,
        s.infoSyncTree_ = new Qy({
            startListening: (l, o, u, h) => {
                let d = [];
                const p = s.infoData_.getNode(l._path);
                return p.isEmpty() || (d = xr(s.infoSyncTree_, l._path, p),
                    setTimeout(() => {
                        h("ok")
                    }
                        , 0)),
                    d
            }
            ,
            stopListening: () => { }
        }),
        Hd(s, "connected", !1),
        s.serverSyncTree_ = new Qy({
            startListening: (l, o, u, h) => (s.server_.listen(l, u, o, (d, p) => {
                const g = h(d, p);
                zn(s.eventQueue_, l._path, g)
            }
            ),
                []),
            stopListening: (l, o) => {
                s.server_.unlisten(l, o)
            }
        })
}
function hN(s) {
    const i = s.infoData_.getNode(new qe(".info/serverTimeOffset")).val() || 0;
    return new Date().getTime() + i
}
function zd(s) {
    return QR({
        timestamp: hN(s)
    })
}
function Xy(s, t, i, l, o) {
    s.dataUpdateCount++;
    const u = new qe(t);
    i = s.interceptServerDataCallback_ ? s.interceptServerDataCallback_(t, i) : i;
    let h = [];
    if (o)
        if (l) {
            const p = ac(i, g => Et(g));
            h = PR(s.serverSyncTree_, u, p, o)
        } else {
            const p = Et(i);
            h = XS(s.serverSyncTree_, u, p, o)
        }
    else if (l) {
        const p = ac(i, g => Et(g));
        h = zR(s.serverSyncTree_, u, p)
    } else {
        const p = Et(i);
        h = xr(s.serverSyncTree_, u, p)
    }
    let d = u;
    h.length > 0 && (d = zc(s, u)),
        zn(s.eventQueue_, d, h)
}
function Wy(s, t) {
    Hd(s, "connected", t),
        t === !1 && gN(s)
}
function dN(s, t) {
    Gt(t, (i, l) => {
        Hd(s, i, l)
    }
    )
}
function Hd(s, t, i) {
    const l = new qe("/.info/" + t)
        , o = Et(i);
    s.infoData_.updateSnapshot(l, o);
    const u = xr(s.infoSyncTree_, l, o);
    zn(s.eventQueue_, l, u)
}
function cE(s) {
    return s.nextWriteId_++
}
function mN(s, t, i) {
    const l = qR(s.serverSyncTree_, t);
    return l != null ? Promise.resolve(l) : s.server_.get(t).then(o => {
        const u = Et(o).withIndex(t._queryParams.getIndex());
        Fh(s.serverSyncTree_, t, i, !0);
        let h;
        if (t._queryParams.loadsAllData())
            h = xr(s.serverSyncTree_, t._path, u);
        else {
            const d = pr(s.serverSyncTree_, t);
            h = XS(s.serverSyncTree_, t._path, u, d)
        }
        return zn(s.eventQueue_, t._path, h),
            vc(s.serverSyncTree_, t, i, null, !0),
            u
    }
        , o => (jc(s, "get for query " + mt(t) + " failed: " + o),
            Promise.reject(new Error(o))))
}
function pN(s, t, i, l, o) {
    jc(s, "set", {
        path: t.toString(),
        value: i,
        priority: l
    });
    const u = zd(s)
        , h = Et(i, l)
        , d = Rd(s.serverSyncTree_, t)
        , p = $S(h, d, u)
        , g = cE(s)
        , S = KS(s.serverSyncTree_, t, p, g, !0);
    jd(s.eventQueue_, S),
        s.server_.put(t.toString(), h.val(!0), (E, D) => {
            const I = E === "ok";
            I || Vt("set at " + t + " failed: " + E);
            const P = Is(s.serverSyncTree_, g, !I);
            zn(s.eventQueue_, t, P),
                vN(s, o, E, D)
        }
        );
    const v = mE(s, t);
    zc(s, v),
        zn(s.eventQueue_, v, [])
}
function gN(s) {
    jc(s, "onDisconnectEvents");
    const t = zd(s)
        , i = fc();
    Bh(s.onDisconnect_, Ie(), (o, u) => {
        const h = WR(o, u, s.serverSyncTree_, t);
        IS(i, o, h)
    }
    );
    let l = [];
    Bh(i, Ie(), (o, u) => {
        l = l.concat(xr(s.serverSyncTree_, o, u));
        const h = mE(s, o);
        zc(s, h)
    }
    ),
        s.onDisconnect_ = fc(),
        zn(s.eventQueue_, Ie(), l)
}
function _N(s, t, i) {
    let l;
    _e(t._path) === ".info" ? l = Fh(s.infoSyncTree_, t, i) : l = Fh(s.serverSyncTree_, t, i),
        rE(s.eventQueue_, t._path, l)
}
function Zy(s, t, i) {
    let l;
    _e(t._path) === ".info" ? l = vc(s.infoSyncTree_, t, i) : l = vc(s.serverSyncTree_, t, i),
        rE(s.eventQueue_, t._path, l)
}
function yN(s) {
    s.persistentConnection_ && s.persistentConnection_.interrupt(oN)
}
function jc(s, ...t) {
    let i = "";
    s.persistentConnection_ && (i = s.persistentConnection_.id + ":"),
        At(i, ...t)
}
function vN(s, t, i, l) {
    t && Ka(() => {
        if (i === "ok")
            t(null);
        else {
            const o = (i || "error").toUpperCase();
            let u = o;
            l && (u += ": " + l);
            const h = new Error(u);
            h.code = o,
                t(h)
        }
    }
    )
}
function uE(s, t, i) {
    return Rd(s.serverSyncTree_, t, i) || oe.EMPTY_NODE
}
function Bd(s, t = s.transactionQueueTree_) {
    if (t || Hc(s, t),
        Xa(t)) {
        const i = hE(s, t);
        Y(i.length > 0, "Sending zero length transaction queue"),
            i.every(o => o.status === 0) && SN(s, Rr(t), i)
    } else
        tE(t) && Uc(t, i => {
            Bd(s, i)
        }
        )
}
function SN(s, t, i) {
    const l = i.map(g => g.currentWriteId)
        , o = uE(s, t, l);
    let u = o;
    const h = o.hash();
    for (let g = 0; g < i.length; g++) {
        const S = i[g];
        Y(S.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."),
            S.status = 1,
            S.retryCount++;
        const v = Mt(t, S.path);
        u = u.updateChild(v, S.currentOutputSnapshotRaw)
    }
    const d = u.val(!0)
        , p = t;
    s.server_.put(p.toString(), d, g => {
        jc(s, "transaction put response", {
            path: p.toString(),
            status: g
        });
        let S = [];
        if (g === "ok") {
            const v = [];
            for (let E = 0; E < i.length; E++)
                i[E].status = 2,
                    S = S.concat(Is(s.serverSyncTree_, i[E].currentWriteId)),
                    i[E].onComplete && v.push(() => i[E].onComplete(null, !0, i[E].currentOutputSnapshotResolved)),
                    i[E].unwatcher();
            Hc(s, Ld(s.transactionQueueTree_, t)),
                Bd(s, s.transactionQueueTree_),
                zn(s.eventQueue_, t, S);
            for (let E = 0; E < v.length; E++)
                Ka(v[E])
        } else {
            if (g === "datastale")
                for (let v = 0; v < i.length; v++)
                    i[v].status === 3 ? i[v].status = 4 : i[v].status = 0;
            else {
                Vt("transaction at " + p.toString() + " failed: " + g);
                for (let v = 0; v < i.length; v++)
                    i[v].status = 4,
                        i[v].abortReason = g
            }
            zc(s, t)
        }
    }
        , h)
}
function zc(s, t) {
    const i = fE(s, t)
        , l = Rr(i)
        , o = hE(s, i);
    return EN(s, o, l),
        l
}
function EN(s, t, i) {
    if (t.length === 0)
        return;
    const l = [];
    let o = [];
    const h = t.filter(d => d.status === 0).map(d => d.currentWriteId);
    for (let d = 0; d < t.length; d++) {
        const p = t[d]
            , g = Mt(i, p.path);
        let S = !1, v;
        if (Y(g !== null, "rerunTransactionsUnderNode_: relativePath should not be null."),
            p.status === 4)
            S = !0,
                v = p.abortReason,
                o = o.concat(Is(s.serverSyncTree_, p.currentWriteId, !0));
        else if (p.status === 0)
            if (p.retryCount >= cN)
                S = !0,
                    v = "maxretry",
                    o = o.concat(Is(s.serverSyncTree_, p.currentWriteId, !0));
            else {
                const E = uE(s, p.path, h);
                p.currentInputSnapshot = E;
                const D = t[d].update(E.val());
                if (D !== void 0) {
                    Ud("transaction failed: Data returned ", D, p.path);
                    let I = Et(D);
                    typeof D == "object" && D != null && gi(D, ".priority") || (I = I.updatePriority(E.getPriority()));
                    const M = p.currentWriteId
                        , Q = zd(s)
                        , B = $S(I, E, Q);
                    p.currentOutputSnapshotRaw = I,
                        p.currentOutputSnapshotResolved = B,
                        p.currentWriteId = cE(s),
                        h.splice(h.indexOf(M), 1),
                        o = o.concat(KS(s.serverSyncTree_, p.path, B, p.currentWriteId, p.applyLocally)),
                        o = o.concat(Is(s.serverSyncTree_, M, !0))
                } else
                    S = !0,
                        v = "nodata",
                        o = o.concat(Is(s.serverSyncTree_, p.currentWriteId, !0))
            }
        zn(s.eventQueue_, i, o),
            o = [],
            S && (t[d].status = 2,
                (function (E) {
                    setTimeout(E, Math.floor(0))
                }
                )(t[d].unwatcher),
                t[d].onComplete && (v === "nodata" ? l.push(() => t[d].onComplete(null, !1, t[d].currentInputSnapshot)) : l.push(() => t[d].onComplete(new Error(v), !1, null))))
    }
    Hc(s, s.transactionQueueTree_);
    for (let d = 0; d < l.length; d++)
        Ka(l[d]);
    Bd(s, s.transactionQueueTree_)
}
function fE(s, t) {
    let i, l = s.transactionQueueTree_;
    for (i = _e(t); i !== null && Xa(l) === void 0;)
        l = Ld(l, i),
            t = Ve(t),
            i = _e(t);
    return l
}
function hE(s, t) {
    const i = [];
    return dE(s, t, i),
        i.sort((l, o) => l.order - o.order),
        i
}
function dE(s, t, i) {
    const l = Xa(t);
    if (l)
        for (let o = 0; o < l.length; o++)
            i.push(l[o]);
    Uc(t, o => {
        dE(s, o, i)
    }
    )
}
function Hc(s, t) {
    const i = Xa(t);
    if (i) {
        let l = 0;
        for (let o = 0; o < i.length; o++)
            i[o].status !== 2 && (i[l] = i[o],
                l++);
        i.length = l,
            eE(t, i.length > 0 ? i : void 0)
    }
    Uc(t, l => {
        Hc(s, l)
    }
    )
}
function mE(s, t) {
    const i = Rr(fE(s, t))
        , l = Ld(s.transactionQueueTree_, t);
    return JR(l, o => {
        Th(s, o)
    }
    ),
        Th(s, l),
        nE(l, o => {
            Th(s, o)
        }
        ),
        i
}
function Th(s, t) {
    const i = Xa(t);
    if (i) {
        const l = [];
        let o = []
            , u = -1;
        for (let h = 0; h < i.length; h++)
            i[h].status === 3 || (i[h].status === 1 ? (Y(u === h - 1, "All SENT items should be at beginning of queue."),
                u = h,
                i[h].status = 3,
                i[h].abortReason = "set") : (Y(i[h].status === 0, "Unexpected transaction status in abort"),
                    i[h].unwatcher(),
                    o = o.concat(Is(s.serverSyncTree_, i[h].currentWriteId, !0)),
                    i[h].onComplete && l.push(i[h].onComplete.bind(null, new Error("set"), !1, null))));
        u === -1 ? eE(t, void 0) : i.length = u + 1,
            zn(s.eventQueue_, Rr(t), o);
        for (let h = 0; h < l.length; h++)
            Ka(l[h])
    }
}
function bN(s) {
    let t = "";
    const i = s.split("/");
    for (let l = 0; l < i.length; l++)
        if (i[l].length > 0) {
            let o = i[l];
            try {
                o = decodeURIComponent(o.replace(/\+/g, " "))
            } catch { }
            t += "/" + o
        }
    return t
}
function CN(s) {
    const t = {};
    s.charAt(0) === "?" && (s = s.substring(1));
    for (const i of s.split("&")) {
        if (i.length === 0)
            continue;
        const l = i.split("=");
        l.length === 2 ? t[decodeURIComponent(l[0])] = decodeURIComponent(l[1]) : Vt(`Invalid query segment '${i}' in query '${s}'`)
    }
    return t
}
const Jy = function (s, t) {
    const i = TN(s)
        , l = i.namespace;
    i.domain === "firebase.com" && fi(i.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),
        (!l || l === "undefined") && i.domain !== "localhost" && fi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),
        i.secure || jx();
    const o = i.scheme === "ws" || i.scheme === "wss";
    return {
        repoInfo: new dS(i.host, i.secure, l, o, t, "", l !== i.subdomain),
        path: new qe(i.pathString)
    }
}
    , TN = function (s) {
        let t = ""
            , i = ""
            , l = ""
            , o = ""
            , u = ""
            , h = !0
            , d = "https"
            , p = 443;
        if (typeof s == "string") {
            let g = s.indexOf("//");
            g >= 0 && (d = s.substring(0, g - 1),
                s = s.substring(g + 2));
            let S = s.indexOf("/");
            S === -1 && (S = s.length);
            let v = s.indexOf("?");
            v === -1 && (v = s.length),
                t = s.substring(0, Math.min(S, v)),
                S < v && (o = bN(s.substring(S, v)));
            const E = CN(s.substring(Math.min(s.length, v)));
            g = t.indexOf(":"),
                g >= 0 ? (h = d === "https" || d === "wss",
                    p = parseInt(t.substring(g + 1), 10)) : g = t.length;
            const D = t.slice(0, g);
            if (D.toLowerCase() === "localhost")
                i = "localhost";
            else if (D.split(".").length <= 2)
                i = D;
            else {
                const I = t.indexOf(".");
                l = t.substring(0, I).toLowerCase(),
                    i = t.substring(I + 1),
                    u = l
            }
            "ns" in E && (u = E.ns)
        }
        return {
            host: t,
            port: p,
            domain: i,
            subdomain: l,
            secure: h,
            scheme: d,
            pathString: o,
            namespace: u
        }
    };
class xN {
    constructor(t, i, l, o) {
        this.eventType = t,
            this.eventRegistration = i,
            this.snapshot = l,
            this.prevName = o
    }
    getPath() {
        const t = this.snapshot.ref;
        return this.eventType === "value" ? t._path : t.parent._path
    }
    getEventType() {
        return this.eventType
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.getPath().toString() + ":" + this.eventType + ":" + mt(this.snapshot.exportVal())
    }
}
class wN {
    constructor(t, i, l) {
        this.eventRegistration = t,
            this.error = i,
            this.path = l
    }
    getPath() {
        return this.path
    }
    getEventType() {
        return "cancel"
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.path.toString() + ":cancel"
    }
}
class pE {
    constructor(t, i) {
        this.snapshotCallback = t,
            this.cancelCallback = i
    }
    onValue(t, i) {
        this.snapshotCallback.call(null, t, i)
    }
    onCancel(t) {
        return Y(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"),
            this.cancelCallback.call(null, t)
    }
    get hasCancelCallback() {
        return !!this.cancelCallback
    }
    matches(t) {
        return this.snapshotCallback === t.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === t.snapshotCallback.userCallback && this.snapshotCallback.context === t.snapshotCallback.context
    }
}
class Pd {
    constructor(t, i, l, o) {
        this._repo = t,
            this._path = i,
            this._queryParams = l,
            this._orderByCalled = o
    }
    get key() {
        return be(this._path) ? null : bS(this._path)
    }
    get ref() {
        return new _i(this._repo, this._path)
    }
    get _queryIdentifier() {
        const t = Uy(this._queryParams)
            , i = hd(t);
        return i === "{}" ? "default" : i
    }
    get _queryObject() {
        return Uy(this._queryParams)
    }
    isEqual(t) {
        if (t = mn(t),
            !(t instanceof Pd))
            return !1;
        const i = this._repo === t._repo
            , l = gd(this._path, t._path)
            , o = this._queryIdentifier === t._queryIdentifier;
        return i && l && o
    }
    toJSON() {
        return this.toString()
    }
    toString() {
        return this._repo.toString() + Sw(this._path)
    }
}
class _i extends Pd {
    constructor(t, i) {
        super(t, i, new Sd, !1)
    }
    get parent() {
        const t = TS(this._path);
        return t === null ? null : new _i(this._repo, t)
    }
    get root() {
        let t = this;
        for (; t.parent !== null;)
            t = t.parent;
        return t
    }
}
class gr {
    constructor(t, i, l) {
        this._node = t,
            this.ref = i,
            this._index = l
    }
    get priority() {
        return this._node.getPriority().val()
    }
    get key() {
        return this.ref.key
    }
    get size() {
        return this._node.numChildren()
    }
    child(t) {
        const i = new qe(t)
            , l = Sc(this.ref, t);
        return new gr(this._node.getChild(i), l, nt)
    }
    exists() {
        return !this._node.isEmpty()
    }
    exportVal() {
        return this._node.val(!0)
    }
    forEach(t) {
        return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (l, o) => t(new gr(o, Sc(this.ref, l), nt)))
    }
    hasChild(t) {
        const i = new qe(t);
        return !this._node.getChild(i).isEmpty()
    }
    hasChildren() {
        return this._node.isLeafNode() ? !1 : !this._node.isEmpty()
    }
    toJSON() {
        return this.exportVal()
    }
    val() {
        return this._node.val()
    }
}
function $t(s, t) {
    return s = mn(s),
        s._checkNotDeleted("ref"),
        t !== void 0 ? Sc(s._root, t) : s._root
}
function Sc(s, t) {
    return s = mn(s),
        _e(s._path) === null ? sN("child", "path", t) : aE("child", "path", t),
        new _i(s._repo, pt(s._path, t))
}
function RN(s) {
    return lE("remove", s._path),
        kn(s, null)
}
function kn(s, t) {
    s = mn(s),
        lE("set", s._path),
        iN("set", t, s._path);
    const i = new Ac;
    return pN(s._repo, s._path, t, null, i.wrapCallback(() => { }
    )),
        i.promise
}
function NN(s) {
    s = mn(s);
    const t = new pE(() => { }
    )
        , i = new Bc(t);
    return mN(s._repo, s, i).then(l => new gr(l, new _i(s._repo, s._path), s._queryParams.getIndex()))
}
class Bc {
    constructor(t) {
        this.callbackContext = t
    }
    respondsTo(t) {
        return t === "value"
    }
    createEvent(t, i) {
        const l = i._queryParams.getIndex();
        return new xN("value", this, new gr(t.snapshotNode, new _i(i._repo, i._path), l))
    }
    getEventRunner(t) {
        return t.getEventType() === "cancel" ? () => this.callbackContext.onCancel(t.error) : () => this.callbackContext.onValue(t.snapshot, null)
    }
    createCancelEvent(t, i) {
        return this.callbackContext.hasCancelCallback ? new wN(this, t, i) : null
    }
    matches(t) {
        return t instanceof Bc ? !t.callbackContext || !this.callbackContext ? !0 : t.callbackContext.matches(this.callbackContext) : !1
    }
    hasAnyCallback() {
        return this.callbackContext !== null
    }
}
function AN(s, t, i, l, o) {
    let u;
    if (typeof l == "object" && (u = void 0,
        o = l),
        typeof l == "function" && (u = l),
        o && o.onlyOnce) {
        const p = i
            , g = (S, v) => {
                Zy(s._repo, s, d),
                    p(S, v)
            }
            ;
        g.userCallback = i.userCallback,
            g.context = i.context,
            i = g
    }
    const h = new pE(i, u || void 0)
        , d = new Bc(h);
    return _N(s._repo, s, d),
        () => Zy(s._repo, s, d)
}
function Qo(s, t, i, l) {
    return AN(s, "value", t, i, l)
}
DR(_i);
LR(_i);
const DN = "FIREBASE_DATABASE_EMULATOR_HOST"
    , Qh = {};
let ON = !1;
function IN(s, t, i, l) {
    const o = t.lastIndexOf(":")
        , u = t.substring(0, o)
        , h = Ga(u);
    s.repoInfo_ = new dS(t, h, s.repoInfo_.namespace, s.repoInfo_.webSocketOnly, s.repoInfo_.nodeAdmin, s.repoInfo_.persistenceKey, s.repoInfo_.includeNamespaceInQueryParams, !0, i),
        l && (s.authTokenProvider_ = l)
}
function MN(s, t, i, l, o) {
    let u = l || s.options.databaseURL;
    u === void 0 && (s.options.projectId || fi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),
        At("Using default host for project ", s.options.projectId),
        u = `${s.options.projectId}-default-rtdb.firebaseio.com`);
    let h = Jy(u, o), d = h.repoInfo, p;
    typeof process < "u" && yy && (p = yy[DN]),
        p ? (u = `http://${p}?ns=${d.namespace}`,
            h = Jy(u, o),
            d = h.repoInfo) : h.repoInfo.secure;
    const g = new Kx(s.name, s.options, t);
    aN("Invalid Firebase Database URL", h),
        be(h.path) || fi("Database URL must point to the root of a Firebase Database (not including a child path).");
    const S = LN(d, s, g, new Qx(s, i));
    return new UN(S, s)
}
function kN(s, t) {
    const i = Qh[t];
    (!i || i[s.key] !== s) && fi(`Database ${t}(${s.repoInfo_}) has already been deleted.`),
        yN(s),
        delete i[s.key]
}
function LN(s, t, i, l) {
    let o = Qh[t.name];
    o || (o = {},
        Qh[t.name] = o);
    let u = o[s.toURLString()];
    return u && fi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),
        u = new uN(s, ON, i, l),
        o[s.toURLString()] = u,
        u
}
class UN {
    constructor(t, i) {
        this._repoInternal = t,
            this.app = i,
            this.type = "database",
            this._instanceStarted = !1
    }
    get _repo() {
        return this._instanceStarted || (fN(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride),
            this._instanceStarted = !0),
            this._repoInternal
    }
    get _root() {
        return this._rootInternal || (this._rootInternal = new _i(this._repo, Ie())),
            this._rootInternal
    }
    _delete() {
        return this._rootInternal !== null && (kN(this._repo, this.app.name),
            this._repoInternal = null,
            this._rootInternal = null),
            Promise.resolve()
    }
    _checkNotDeleted(t) {
        this._rootInternal === null && fi("Cannot call " + t + " on a deleted database.")
    }
}
function jN(s = Xv(), t) {
    const i = fd(s, "database").getImmediate({
        identifier: t
    });
    if (!i._instanceStarted) {
        const l = iT("database");
        l && zN(i, ...l)
    }
    return i
}
function zN(s, t, i, l = {}) {
    s = mn(s),
        s._checkNotDeleted("useEmulator");
    const o = `${t}:${i}`
        , u = s._repoInternal;
    if (s._instanceStarted) {
        if (o === s._repoInternal.repoInfo_.host && Ms(l, u.repoInfo_.emulatorOptions))
            return;
        fi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")
    }
    let h;
    if (u.repoInfo_.nodeAdmin)
        l.mockUserToken && fi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),
            h = new Zo(Zo.OWNER);
    else if (l.mockUserToken) {
        const d = typeof l.mockUserToken == "string" ? l.mockUserToken : sT(l.mockUserToken, s.app.options.projectId);
        h = new Zo(d)
    }
    Ga(t) && (qv(t),
        Vv("Database", !0)),
        IN(u, o, l, h)
}
function HN(s) {
    Ox(Ya),
        ja(new ks("database", (t, { instanceIdentifier: i }) => {
            const l = t.getProvider("app").getImmediate()
                , o = t.getProvider("auth-internal")
                , u = t.getProvider("app-check-internal");
            return MN(l, o, u, i)
        }
            , "PUBLIC").setMultipleInstances(!0)),
        Ji(vy, Sy, s),
        Ji(vy, Sy, "esm2020")
}
oi.prototype.simpleListen = function (s, t) {
    this.sendRequest("q", {
        p: s
    }, t)
}
    ;
oi.prototype.echo = function (s, t) {
    this.sendRequest("echo", {
        d: s
    }, t)
}
    ;
HN();
var BN = "firebase"
    , PN = "12.10.0";
Ji(BN, PN, "app");
const qN = {
    apiKey: "AIzaSyCJ6ecQJGcpf4K4AeiFW4YYpsDZoIaac_Y",
    authDomain: "giocaitoiyeu-a87f8.firebaseapp.com",
    databaseURL: "https://giocaitoiyeu-a87f8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "giocaitoiyeu-a87f8",
    storageBucket: "giocaitoiyeu-a87f8.firebasestorage.app",
    messagingSenderId: "21198947731",
    appId: "1:21198947731:web:e218f03fde5c89f15b9466",
    measurementId: "G-T7HKQMF8HE"
}
    , VN = Kv(qN)
    , en = jN(VN);
function GN() {
    const s = ed()
        , [t, i] = x.useState(null)
        , [l, o] = x.useState("")
        , [u, h] = x.useState("")
        , [d, p] = x.useState(!1)
        , [g, S] = x.useState("")
        , [v, E] = x.useState(!1)
        , D = 5
        , I = JSON.parse(localStorage.getItem("draftLogin"))
        , P = I && I.date === new Date().toDateString() && I.attempts >= D
        , M = () => {
            const q = Date.now().toString(36) + Math.random().toString(36).substring(2, 8)
                , re = `${window.location.origin}/draft?room=${q}&team1=${l}&team2=${u}&role=host`
                , de = `${window.location.origin}/draft?room=${q}&team1=${l}&team2=${u}&role=team1`
                , ve = `${window.location.origin}/draft?room=${q}&team1=${l}&team2=${u}&role=team2`;
            kn($t(en, "rooms/" + q), {
                draft: [],
                team1Name: l,
                team2Name: u,
                createdAt: Date.now()
            }),
                i({
                    host: re,
                    team1: de,
                    team2: ve
                })
        }
        , Q = async () => {
            const q = new Date().toDateString();
            let re = 0;
            const de = JSON.parse(localStorage.getItem("draftLogin"));
            if (de && de.date === q && (re = de.attempts),
                re >= D) {
                alert("Bạn đã nhập sai quá 5 lần hôm nay");
                return
            }
            try {
                const J = (await NN(Sc($t(en), "config/draftPassword"))).val();
                if (g !== J) {
                    re++,
                        localStorage.setItem("draftLogin", JSON.stringify({
                            date: q,
                            attempts: re
                        })),
                        re >= D ? alert("Sai mật khẩu (5/5) - Đã bị khóa hôm nay") : alert(`Sai mật khẩu (${re}/5)`);
                    return
                }
                p(!0)
            } catch {
                alert("Không thể kết nối Firebase")
            }
        }
        , B = q => {
            navigator.clipboard.writeText(q),
                alert("Copied!")
        }
        ;
    return _.jsx("div", {
        style: dt.page,
        children: _.jsxs("div", {
            style: dt.card,
            children: [_.jsx("h1", {
                style: dt.title,
                children: "HSR Draft Tool"
            }), !d && !t && _.jsxs("div", {
                style: dt.section,
                children: [!v && _.jsx("button", {
                    style: dt.button,
                    onClick: () => E(!0),
                    children: "Start Draft"
                }), v && _.jsxs(_.Fragment, {
                    children: [_.jsx("input", {
                        type: "password",
                        placeholder: "Enter password",
                        value: g,
                        disabled: P,
                        onChange: q => S(q.target.value),
                        onKeyDown: q => {
                            q.key === "Enter" && !P && Q()
                        }
                        ,
                        style: dt.input
                    }), _.jsx("button", {
                        style: dt.button,
                        onClick: Q,
                        disabled: P,
                        children: P ? "Locked Today" : "Confirm"
                    })]
                }), _.jsx("button", {
                    className: "start-btn",
                    onClick: () => s("/data"),
                    style: dt.button,
                    children: "View Data"
                }), _.jsx("button", {
                    className: "custom-btn",
                    onClick: () => s("/demo"),
                    style: dt.button,
                    children: "Demo Draft"
                }), _.jsx("button", {
                    className: "home-btn",
                    onClick: () => s("/calculator"),
                    style: dt.button,
                    children: "Calculator"
                })]
            }), d && !t && _.jsxs("div", {
                style: dt.section,
                children: [_.jsx("input", {
                    placeholder: "Team 1 Name",
                    value: l,
                    onChange: q => o(q.target.value),
                    style: dt.input
                }), _.jsx("input", {
                    placeholder: "Team 2 Name",
                    value: u,
                    onChange: q => h(q.target.value),
                    style: dt.input
                }), _.jsx("button", {
                    style: dt.button,
                    onClick: M,
                    children: "Create Room"
                })]
            }), t && _.jsxs("div", {
                style: dt.linksBox,
                children: [_.jsx(xh, {
                    title: "Host",
                    link: t.host,
                    copyLink: B
                }), _.jsx(xh, {
                    title: "Team 1",
                    link: t.team1,
                    copyLink: B
                }), _.jsx(xh, {
                    title: "Team 2",
                    link: t.team2,
                    copyLink: B
                })]
            })]
        })
    })
}
function xh({ title: s, link: t, copyLink: i }) {
    return _.jsxs("div", {
        style: dt.linkRow,
        children: [_.jsx("div", {
            style: dt.linkTitle,
            children: s
        }), _.jsx("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            style: dt.link,
            children: t
        }), _.jsx("button", {
            style: dt.copyButton,
            onClick: () => i(t),
            children: "Copy"
        })]
    })
}
const dt = {
    page: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
        fontFamily: "Arial"
    },
    card: {
        width: "600px",
        maxWidth: "90%",
        padding: "40px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 30px rgba(0,0,0,0.5)"
    },
    title: {
        textAlign: "center",
        color: "#fff",
        marginBottom: "30px",
        fontSize: "32px"
    },
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        fontSize: "16px"
    },
    button: {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "#7c3aed",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "16px"
    },
    linksBox: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    linkRow: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(255,255,255,0.05)",
        padding: "10px",
        borderRadius: "8px"
    },
    linkTitle: {
        width: "70px",
        color: "#fff",
        fontWeight: "bold"
    },
    link: {
        flex: 1,
        color: "#93c5fd",
        textDecoration: "none",
        fontSize: "14px",
        wordBreak: "break-all"
    },
    copyButton: {
        padding: "6px 12px",
        borderRadius: "6px",
        border: "none",
        background: "#22c55e",
        color: "white",
        cursor: "pointer"
    }
};
function FN() {
    const s = ["team1", "team2", "team1", "team2", "team2", "team1", "team2", "team1", "team2", "team1", "team1", "team2", "team2", "team1", "team1", "team2", "team2", "team1", "team1", "team2"]
        , [t] = qC()
        , i = t.get("role")
        , l = i === "host"
        , [o, u] = x.useState("")
        , [h, d] = x.useState(null)
        , [p, g] = x.useState(!1)
        , [S, v] = x.useState(null)
        , [E, D] = x.useState([])
        , [I, P] = x.useState([])
        , [M, Q] = x.useState([])
        , [B, q] = x.useState(!1)
        , re = M.length
        , de = s[re]
        , ve = () => {
            if (!confirm("Close draft and delete this room?"))
                return;
            const U = $t(en, "rooms/" + ke);
            RN(U),
                window.location.href = "/"
        }
        , J = !B && (l || i === "team1" && de === "team1" || i === "team2" && de === "team2")
        , we = U => l ? !0 : i === "team1" ? Ot.some($ => $.index === U) : i === "team2" ? Si.some($ => $.index === U) : !1
        , Ge = M.length > 1
        , ke = t.get("room")
        , $e = new URLSearchParams(window.location.search)
        , We = $e.get("team1")
        , G = $e.get("team2")
        , [se, ge] = x.useState("")
        , [k, F] = x.useState(0)
        , [ne, Ae] = x.useState(0)
        , [Re, T] = x.useState(0)
        , [z, K] = x.useState(0)
        , [X, ce] = x.useState(0)
        , [he, Ne] = x.useState(0)
        , [it, Fe] = x.useState(0)
        , [pn, yi] = x.useState(0)
        , [gt, Bs] = x.useState(null);
    x.useEffect(() => {
        const U = $t(en, "rooms/" + ke + "/timer");
        Qo(U, $ => {
            $.val() || kn(U, {
                activeTeam: "team1",
                team1: {
                    reserve: 600,
                    penalty: 0
                },
                team2: {
                    reserve: 600,
                    penalty: 0
                }
            })
        }
            , {
                onlyOnce: !0
            })
    }
        , [ke]);
    const Dt = U => {
        const $ = Math.floor(U / 60)
            , ee = U % 60;
        return `${$}:${ee.toString().padStart(2, "0")}`
    }
        ;
    x.useEffect(() => {
        const U = $t(en, "rooms/" + ke + "/locked");
        Qo(U, $ => {
            const ee = $.val();
            ee === null ? kn(U, !1) : q(ee)
        }
        )
    }
        , [ke]),
        x.useEffect(() => {
            const U = $t(en, "rooms/" + ke + "/timer");
            Qo(U, $ => {
                const ee = $.val();
                ee && Bs(ee)
            }
            )
        }
            , [ke]),
        x.useEffect(() => {
            if (!l || !gt || !Ge || M.length >= 20)
                return;
            const U = $t(en, "rooms/" + ke + "/timer")
                , $ = setInterval(() => {
                    if (M.length >= 20)
                        return;
                    let ee = {
                        ...gt
                    };
                    ee.activeTeam === "team1" ? ee.team1.reserve > 0 ? ee.team1.reserve -= 1 : ee.team1.penalty += 1 : ee.team2.reserve > 0 ? ee.team2.reserve -= 1 : ee.team2.penalty += 1,
                        kn(U, ee)
                }
                    , 1e3);
            return () => clearInterval($)
        }
            , [gt, l, Ge, M.length]),
        x.useEffect(() => {
            (async () => {
                const ee = await (await fetch("/data/characters.json")).json();
                D(ee);
                const _n = await (await fetch("/data/lightcones.json")).json();
                P(_n)
            }
            )()
        }
            , []),
        x.useEffect(() => {
            const U = $t(en, "rooms/" + ke + "/draft");
            Qo(U, $ => {
                const ee = $.val();
                Q(ee || [])
            }
            )
        }
            , [ke]);
    const rs = () => {
        if (M.length >= 19)
            return;
        const U = M.length + 1;
        if (U >= s.length)
            return;
        const $ = s[U]
            , ee = $t(en, "rooms/" + ke + "/timer");
        kn(ee, {
            ...gt,
            activeTeam: $
        })
    }
        , Hn = U => {
            B || !we(U) || !M[U] || Nn.includes(U) || (d(U),
                v(null),
                g(!0))
        }
        , Za = (U, $) => {
            if (!we(U))
                return;
            const ee = [...M];
            ee[U].superimposition = $,
                tn(ee)
        }
        , os = () => {
            if (h === null || !S)
                return;
            const U = [...M];
            S.lightConeName === "none" ? (U[h].lightCone = null,
                U[h].lightConeImage = null,
                U[h].superimposition = null) : (U[h].lightCone = S,
                    U[h].lightConeImage = S.imageUrl,
                    U[h].superimposition = "S1"),
                tn(U),
                g(!1)
        }
        , tn = U => {
            kn($t(en, "rooms/" + ke + "/draft"), U)
        }
        , vi = U => {
            if (B || !J || M.find(rt => rt.characterName === U.characterName) || M.length >= 20)
                return;
            const $ = {
                characterName: U.characterName,
                imageFull: U.imageFull,
                rarity: U.rarity,
                pointE0: U.E0,
                pointE1: U.E1,
                pointE2: U.E2,
                pointE3: U.E3,
                pointE4: U.E4,
                pointE5: U.E5,
                pointE6: U.E6,
                eidolon: "E0"
            }
                , ee = [...M, $];
            tn(ee),
                rs()
        }
        , cs = (U, $) => {
            if (!we(U))
                return;
            const ee = [...M];
            ee[U].eidolon = $,
                tn(ee)
        }
        , Ja = () => {
            tn([]);
            const U = $t(en, "rooms/" + ke + "/timer");
            kn(U, {
                activeTeam: "team1",
                team1: {
                    reserve: 600,
                    penalty: 0
                },
                team2: {
                    reserve: 600,
                    penalty: 0
                }
            })
        }
        , $a = () => {
            const U = $t(en, "rooms/" + ke + "/locked");
            kn(U, !B)
        }
        , bt = E.filter(U => U.characterName.toLowerCase().includes(se.toLowerCase()))
        , Ps = U => {
            let $ = 0;
            return U.forEach(ee => {
                if (Nn.includes(ee.index))
                    return;
                const rt = M[ee.index];
                if (!rt)
                    return;
                const _n = rt["point" + rt.eidolon] || 0
                    , tl = rt.lightCone && rt.superimposition && rt.lightCone[rt.superimposition] || 0;
                $ += _n + tl
            }
            ),
                $
        }
        , Bn = U => {
            const $ = M[U];
            if (!$)
                return null;
            const ee = Nn.includes(U)
                , rt = $.rarity === 5 ? "#e6b741" : "#9b59b6"
                , _n = $["point" + $.eidolon]
                , tl = $.lightCone && $.superimposition && $.lightCone[$.superimposition] || 0;
            return _.jsxs("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    background: rt,
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                    filter: ee ? "grayscale(100%) brightness(100%)" : "none"
                },
                children: [_.jsx("img", {
                    src: $.imageFull,
                    alt: $.characterName,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }
                }), $.lightConeImage && _.jsx("img", {
                    src: $.lightConeImage,
                    alt: "LC",
                    style: {
                        position: "absolute",
                        bottom: "3px",
                        left: "3px",
                        width: "50px",
                        height: "70px",
                        borderRadius: "5px",
                        border: "2px solid black"
                    }
                }), $.lightCone && _.jsx("div", {
                    style: {
                        position: "absolute",
                        bottom: "6px",
                        right: "6px",
                        background: "rgba(0,0,0,0.7)",
                        color: "#ffd700",
                        fontSize: "13px",
                        padding: "1px 5px",
                        borderRadius: "4px",
                        width: "35px",
                        textAlign: "center"
                    },
                    children: tl
                }), $.lightConeImage && !ee && _.jsxs("select", {
                    disabled: B || !we(U),
                    value: $.superimposition || "S1",
                    onClick: An => An.stopPropagation(),
                    onChange: An => Za(U, An.target.value),
                    style: {
                        position: "absolute",
                        bottom: "30px",
                        right: "5px",
                        width: "36px",
                        height: "22px",
                        fontSize: "12px",
                        borderRadius: "4px"
                    },
                    children: [_.jsx("option", {
                        children: "S1"
                    }), _.jsx("option", {
                        children: "S2"
                    }), _.jsx("option", {
                        children: "S3"
                    }), _.jsx("option", {
                        children: "S4"
                    }), _.jsx("option", {
                        children: "S5"
                    })]
                }), !ee && _.jsxs("select", {
                    disabled: B || !we(U),
                    value: $.eidolon,
                    onClick: An => An.stopPropagation(),
                    onChange: An => cs(U, An.target.value),
                    style: {
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        fontSize: "14px",
                        borderRadius: "5px",
                        width: "55px",
                        height: "24px",
                        textAlign: "center"
                    },
                    children: [_.jsx("option", {
                        children: "E0"
                    }), _.jsx("option", {
                        children: "E1"
                    }), _.jsx("option", {
                        children: "E2"
                    }), _.jsx("option", {
                        children: "E3"
                    }), _.jsx("option", {
                        children: "E4"
                    }), _.jsx("option", {
                        children: "E5"
                    }), _.jsx("option", {
                        children: "E6"
                    })]
                }), !ee && _.jsx("div", {
                    style: {
                        position: "absolute",
                        bottom: "172.5px",
                        top: "3px",
                        right: "4px",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        fontSize: "14px",
                        padding: "1px 5px",
                        borderRadius: "4px",
                        width: "35px",
                        textAlign: "center"
                    },
                    children: _n.toFixed(1)
                })]
            })
        }
        , Nn = [0, 1, 6, 7]
        , Ot = [{
            cls: "slot slot-1",
            index: 0
        }, {
            cls: "slot-half pick-slot-3",
            index: 2
        }, {
            cls: "slot-half pick-slot-6",
            index: 5
        }, {
            cls: "slot slot-8",
            index: 7
        }, {
            cls: "slot-half pick-slot-10",
            index: 9
        }, {
            cls: "slot-half pick-slot-11",
            index: 10
        }, {
            cls: "slot-half pick-slot-14",
            index: 13
        }, {
            cls: "slot-half pick-slot-15",
            index: 14
        }, {
            cls: "slot-half pick-slot-18",
            index: 17
        }, {
            cls: "slot-half pick-slot-19",
            index: 18
        }]
        , Si = [{
            cls: "slot slot-2",
            index: 1
        }, {
            cls: "slot-half pick-slot-4",
            index: 3
        }, {
            cls: "slot-half pick-slot-5",
            index: 4
        }, {
            cls: "slot slot-7",
            index: 6
        }, {
            cls: "slot-half pick-slot-9",
            index: 8
        }, {
            cls: "slot-half pick-slot-12",
            index: 11
        }, {
            cls: "slot-half pick-slot-13",
            index: 12
        }, {
            cls: "slot-half pick-slot-16",
            index: 15
        }, {
            cls: "slot-half pick-slot-17",
            index: 16
        }, {
            cls: "slot-half pick-slot-20",
            index: 19
        }]
        , us = Ps(Ot)
        , qs = Ps(Si)
        , V = (us - 30) / 5
        , ae = (qs - 30) / 5
        , ie = Number(k) + Number(ne) + Number(Re) + Number(z)
        , Ye = Number(X) + Number(he) + Number(it) + Number(pn)
        , st = () => {
            if (M.length === 0)
                return;
            const U = M.slice(0, -1);
            tn(U);
            const $ = s[U.length]
                , ee = $t(en, "rooms/" + ke + "/timer");
            kn(ee, {
                ...gt,
                activeTeam: $
            })
        }
        , fs = I.filter(U => U.characterName.toLowerCase().includes(o.toLowerCase()))
        , Ft = V + ie
        , el = ae + Ye;
    let gn = null;
    return M.length >= 20 && (Ft < el ? gn = We : el < Ft ? gn = G : gn = "DRAW"),
        _.jsxs("div", {
            children: [p && _.jsx("div", {
                className: "lc-modal",
                onClick: () => g(!1),
                children: _.jsxs("div", {
                    className: "lc-box",
                    onClick: U => U.stopPropagation(),
                    children: [_.jsx("h3", {
                        children: "Select Lightcone"
                    }), _.jsx("input", {
                        className: "lc-search",
                        placeholder: "Search lightcone...",
                        value: o,
                        onChange: U => u(U.target.value)
                    }), _.jsxs("div", {
                        className: "lc-grid",
                        children: [_.jsx("div", {
                            className: `lc-tile blank ${S?.lightConeName === "none" ? "active" : ""}`,
                            onClick: () => v({
                                lightConeName: "none",
                                imageUrl: ""
                            }),
                            children: _.jsx("p", {
                                children: "None"
                            })
                        }), fs.map((U, $) => _.jsxs("div", {
                            className: `lc-tile ${S?.lightConeName === U.lightConeName ? "active" : ""}`,
                            onClick: () => v(U),
                            children: [_.jsx("img", {
                                src: U.imageUrl
                            }), _.jsx("p", {
                                children: U.characterName
                            })]
                        }, $))]
                    }), _.jsxs("div", {
                        className: "lc-buttons",
                        children: [_.jsx("button", {
                            onClick: () => g(!1),
                            children: "Cancel"
                        }), _.jsx("button", {
                            onClick: os,
                            children: "Confirm"
                        })]
                    })]
                })
            }), _.jsxs("div", {
                className: "draft-container",
                children: [_.jsx("div", {
                    className: "team-section",
                    children: _.jsxs("div", {
                        className: "score-panel",
                        children: [_.jsx("h2", {
                            children: We
                        }), _.jsxs("p", {
                            children: ["Total cost:", _.jsx("span", {
                                children: us.toFixed(1)
                            })]
                        }), _.jsx("label", {
                            children: "First Half Cycle:"
                        }), _.jsx("input", {
                            type: "number",
                            value: k,
                            onChange: U => F(U.target.value)
                        }), _.jsx("label", {
                            children: "Second Half Cycle:"
                        }), _.jsx("input", {
                            type: "number",
                            value: ne,
                            onChange: U => Ae(U.target.value)
                        }), _.jsx("label", {
                            children: "Deaths:"
                        }), _.jsx("input", {
                            type: "number",
                            value: Re,
                            onChange: U => T(U.target.value)
                        }), _.jsx("label", {
                            children: "Time penalty:"
                        }), _.jsx("input", {
                            type: "number",
                            value: z,
                            onChange: U => K(U.target.value)
                        }), _.jsxs("p", {
                            children: ["Total Point:", _.jsx("span", {
                                children: Ft.toFixed(4)
                            })]
                        })]
                    })
                }), _.jsxs("div", {
                    className: "team-slots-center",
                    children: [_.jsxs("div", {
                        className: "team-col",
                        children: [_.jsxs("div", {
                            className: "team-top-row",
                            children: [_.jsx("div", {
                                className: `team-header blue ${gt?.activeTeam === "team1" ? "active-turn" : ""}`,
                                children: We
                            }), _.jsxs("div", {
                                className: "team-times",
                                children: [_.jsxs("div", {
                                    className: "time-box",
                                    children: [_.jsx("div", {
                                        className: "label",
                                        children: "Reserve"
                                    }), _.jsx("div", {
                                        className: "value",
                                        children: Dt(gt?.team1?.reserve ?? 0)
                                    })]
                                }), _.jsxs("div", {
                                    className: "time-box",
                                    children: [_.jsx("div", {
                                        className: "label",
                                        children: "Penalty"
                                    }), _.jsx("div", {
                                        className: "value",
                                        children: Dt(gt?.team1?.penalty ?? 0)
                                    })]
                                })]
                            })]
                        }), _.jsx("div", {
                            className: "team-slots",
                            children: _.jsx("div", {
                                className: "slot-row",
                                children: Ot.map((U, $) => _.jsx("div", {
                                    className: `${U.cls} ${re === U.index ? "blink-slot" : ""}`,
                                    onClick: () => Hn(U.index),
                                    children: Bn(U.index)
                                }, $))
                            })
                        })]
                    }), _.jsx("div", {
                        className: "winner-container",
                        children: _.jsx("div", {
                            className: "winner",
                            children: _.jsx("div", {
                                className: "label",
                                style: {
                                    fontSize: "28px",
                                    fontWeight: "bold"
                                },
                                children: gn && (gn === "DRAW" ? "DRAW" : `${gn} WIN!`)
                            })
                        })
                    }), _.jsxs("div", {
                        className: "team-col",
                        children: [_.jsxs("div", {
                            className: "team-top-row",
                            children: [_.jsx("div", {
                                className: `team-header red ${gt?.activeTeam === "team2" ? "active-turn" : ""}`,
                                children: G
                            }), _.jsxs("div", {
                                className: "team-times",
                                children: [_.jsxs("div", {
                                    className: "time-box",
                                    children: [_.jsx("div", {
                                        className: "label",
                                        children: "Reserve"
                                    }), _.jsx("div", {
                                        className: "value",
                                        children: Dt(gt?.team2?.reserve ?? 0)
                                    })]
                                }), _.jsxs("div", {
                                    className: "time-box",
                                    children: [_.jsx("div", {
                                        className: "label",
                                        children: "Penalty"
                                    }), _.jsx("div", {
                                        className: "value",
                                        children: Dt(gt?.team2?.penalty ?? 0)
                                    })]
                                })]
                            })]
                        }), _.jsx("div", {
                            className: "team-slots",
                            children: _.jsx("div", {
                                className: "slot-row",
                                children: Si.map((U, $) => _.jsx("div", {
                                    className: `${U.cls} ${re === U.index ? "blink-slot" : ""}`,
                                    onClick: () => Hn(U.index),
                                    children: Bn(U.index)
                                }, $))
                            })
                        })]
                    })]
                }), _.jsx("div", {
                    className: "team-section",
                    children: _.jsxs("div", {
                        className: "score-panel",
                        children: [_.jsx("h2", {
                            children: G
                        }), _.jsxs("p", {
                            children: ["Total cost:", _.jsx("span", {
                                children: qs.toFixed(1)
                            })]
                        }), _.jsx("label", {
                            children: "First Half Cycle:"
                        }), _.jsx("input", {
                            type: "number",
                            value: X,
                            onChange: U => ce(U.target.value)
                        }), _.jsx("label", {
                            children: "Second Half Cycle:"
                        }), _.jsx("input", {
                            type: "number",
                            value: he,
                            onChange: U => Ne(U.target.value)
                        }), _.jsx("label", {
                            children: "Deaths:"
                        }), _.jsx("input", {
                            type: "number",
                            value: it,
                            onChange: U => Fe(U.target.value)
                        }), _.jsx("label", {
                            children: "Time penalty:"
                        }), _.jsx("input", {
                            type: "number",
                            value: pn,
                            onChange: U => yi(U.target.value)
                        }), _.jsxs("p", {
                            children: ["Total Point:", _.jsx("span", {
                                children: el.toFixed(4)
                            })]
                        })]
                    })
                })]
            }), _.jsxs("div", {
                className: "grid-wrap",
                children: [_.jsxs("div", {
                    className: "search-container",
                    children: [_.jsx("input", {
                        className: "search-bar",
                        placeholder: "Search characters",
                        value: se,
                        onChange: U => ge(U.target.value)
                    }), _.jsxs("div", {
                        className: "button-group",
                        children: [l && _.jsx("button", {
                            className: "custom-btn",
                            onClick: $a,
                            style: {
                                background: B ? "#e74c3c" : "#2ecc71"
                            },
                            children: B ? "Unlock Draft" : "Lock Draft"
                        }), l && _.jsx("button", {
                            className: "custom-btn btn-undo",
                            onClick: st,
                            children: "Undo"
                        }), l && _.jsx("button", {
                            className: "custom-btn btn-reset",
                            onClick: Ja,
                            children: "Reset"
                        }), l && _.jsx("button", {
                            className: "custom-btn",
                            onClick: ve,
                            style: {
                                background: "#2c3e50",
                                color: "white"
                            },
                            children: "Close Draft"
                        })]
                    })]
                }), _.jsx("div", {
                    className: "grid",
                    children: bt.map((U, $) => {
                        const ee = M.some(rt => rt.characterName === U.characterName);
                        return _.jsx("div", {
                            className: "tile",
                            onClick: () => !ee && J && vi(U),
                            style: {
                                background: U.rarity === 5 ? "#e6b741" : "#9b59b6",
                                opacity: !J || ee ? .35 : 1,
                                pointerEvents: !J || ee ? "none" : "auto",
                                filter: ee ? "grayscale(100%) brightness(100%)" : "none"
                            },
                            children: _.jsx("img", {
                                src: U.imageIcon,
                                alt: U.characterName
                            })
                        }, $)
                    }
                    )
                })]
            })]
        })
}
function YN() {
    const [s, t] = x.useState([])
        , [i, l] = x.useState([])
        , [o, u] = x.useState("")
        , [h, d] = x.useState("")
        , [p, g] = x.useState("name")
        , [S, v] = x.useState("name")
        , [E, D] = x.useState(!0)
        , [I, P] = x.useState(!0);
    x.useEffect(() => {
        (async () => {
            const re = await (await fetch("/data/characters.json")).json();
            t(re);
            const ve = await (await fetch("/data/lightcones.json")).json();
            l(ve)
        }
        )()
    }
        , []);
    const M = s.filter(B => B.characterName.toLowerCase().includes(o.toLowerCase())).sort((B, q) => p === "name" ? E ? B.characterName.localeCompare(q.characterName) : q.characterName.localeCompare(B.characterName) : E ? B[p] - q[p] : q[p] - B[p])
        , Q = i.filter(B => B.characterName.toLowerCase().includes(h.toLowerCase())).sort((B, q) => S === "name" ? I ? B.characterName.localeCompare(q.characterName) : q.characterName.localeCompare(B.characterName) : I ? B[S] - q[S] : q[S] - B[S]);
    return _.jsxs("div", {
        style: {
            display: "flex",
            gap: "30px",
            padding: "20px 30px",
            background: "#0f0f14",
            minHeight: "100vh",
            width: "100vw",
            boxSizing: "border-box",
            color: "white"
        },
        children: [_.jsxs("div", {
            style: {
                flex: 1,
                minWidth: 0
            },
            children: [_.jsx("h2", {
                style: {
                    marginBottom: "10px"
                },
                children: "Characters"
            }), _.jsxs("div", {
                style: {
                    display: "flex",
                    gap: "10px",
                    marginBottom: "15px"
                },
                children: [_.jsx("input", {
                    placeholder: "Search character...",
                    value: o,
                    onChange: B => u(B.target.value),
                    style: {
                        flex: 1,
                        padding: "8px",
                        borderRadius: "6px",
                        border: "none"
                    }
                }), _.jsxs("select", {
                    value: p,
                    onChange: B => g(B.target.value),
                    style: {
                        padding: "8px"
                    },
                    children: [_.jsx("option", {
                        value: "name",
                        children: "Sort Name"
                    }), _.jsx("option", {
                        value: "E0",
                        children: "Sort E0"
                    }), _.jsx("option", {
                        value: "E1",
                        children: "Sort E1"
                    }), _.jsx("option", {
                        value: "E2",
                        children: "Sort E2"
                    }), _.jsx("option", {
                        value: "E3",
                        children: "Sort E3"
                    }), _.jsx("option", {
                        value: "E4",
                        children: "Sort E4"
                    }), _.jsx("option", {
                        value: "E5",
                        children: "Sort E5"
                    }), _.jsx("option", {
                        value: "E6",
                        children: "Sort E6"
                    })]
                }), _.jsx("button", {
                    onClick: () => D(!E),
                    style: {
                        padding: "8px 12px",
                        background: "#2c2c3a",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    },
                    children: E ? "ASC ↑" : "DESC ↓"
                })]
            }), _.jsx("div", {
                style: {
                    background: "#1a1a24",
                    borderRadius: "10px",
                    padding: "10px",
                    maxHeight: "80vh",
                    overflow: "auto"
                },
                children: _.jsxs("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "1px solid #2c2c3a"
                    },
                    children: [_.jsx("thead", {
                        style: {
                            position: "sticky",
                            top: 0,
                            background: "#1a1a24"
                        },
                        children: _.jsxs("tr", {
                            children: [_.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "Icon"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "Name"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E0"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E1"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E2"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E3"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E4"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E5"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "E6"
                            })]
                        })
                    }), _.jsx("tbody", {
                        children: M.map((B, q) => _.jsxs("tr", {
                            children: [_.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: _.jsx("img", {
                                    src: B.imageIcon,
                                    style: {
                                        width: "40px"
                                    }
                                })
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.characterName
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E0
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E1
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E2
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E3
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E4
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E5
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.E6
                            })]
                        }, q))
                    })]
                })
            })]
        }), _.jsxs("div", {
            style: {
                flex: 1,
                minWidth: 0
            },
            children: [_.jsx("h2", {
                style: {
                    marginBottom: "10px"
                },
                children: "Lightcones"
            }), _.jsxs("div", {
                style: {
                    display: "flex",
                    gap: "10px",
                    marginBottom: "15px"
                },
                children: [_.jsx("input", {
                    placeholder: "Search lightcone...",
                    value: h,
                    onChange: B => d(B.target.value),
                    style: {
                        flex: 1,
                        padding: "8px",
                        borderRadius: "6px",
                        border: "none"
                    }
                }), _.jsxs("select", {
                    value: S,
                    onChange: B => v(B.target.value),
                    style: {
                        padding: "8px"
                    },
                    children: [_.jsx("option", {
                        value: "name",
                        children: "Sort Name"
                    }), _.jsx("option", {
                        value: "S1",
                        children: "Sort S1"
                    }), _.jsx("option", {
                        value: "S2",
                        children: "Sort S2"
                    }), _.jsx("option", {
                        value: "S3",
                        children: "Sort S3"
                    }), _.jsx("option", {
                        value: "S4",
                        children: "Sort S4"
                    }), _.jsx("option", {
                        value: "S5",
                        children: "Sort S5"
                    })]
                }), _.jsx("button", {
                    onClick: () => P(!I),
                    style: {
                        padding: "8px 12px",
                        background: "#2c2c3a",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    },
                    children: I ? "ASC ↑" : "DESC ↓"
                })]
            }), _.jsx("div", {
                style: {
                    background: "#1a1a24",
                    borderRadius: "10px",
                    padding: "10px",
                    maxHeight: "80vh",
                    overflow: "auto"
                },
                children: _.jsxs("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "1px solid #2c2c3a"
                    },
                    children: [_.jsx("thead", {
                        style: {
                            position: "sticky",
                            top: 0,
                            background: "#1a1a24"
                        },
                        children: _.jsxs("tr", {
                            children: [_.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "Icon"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "Character"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "Name"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "S1"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "S2"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "S3"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "S4"
                            }), _.jsx("th", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: "S5"
                            })]
                        })
                    }), _.jsx("tbody", {
                        children: Q.map((B, q) => _.jsxs("tr", {
                            children: [_.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: _.jsx("img", {
                                    src: B.imageUrl,
                                    style: {
                                        width: "40px"
                                    }
                                })
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.characterName
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.lightConeName
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.S1
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.S2
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.S3
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.S4
                            }), _.jsx("td", {
                                style: {
                                    border: "1px solid #2c2c3a",
                                    padding: "6px"
                                },
                                children: B.S5
                            })]
                        }, q))
                    })]
                })
            })]
        })]
    })
}
function QN() {
    const s = ["team1", "team2", "team1", "team2", "team2", "team1", "team2", "team1", "team2", "team1", "team1", "team2", "team2", "team1", "team1", "team2", "team2", "team1", "team1", "team2"]
        , t = "TEAM A"
        , i = "TEAM B"
        , [l, o] = x.useState([])
        , [u, h] = x.useState([])
        , [d, p] = x.useState([])
        , [g, S] = x.useState("")
        , [v, E] = x.useState("")
        , [D, I] = x.useState(null)
        , [P, M] = x.useState(!1)
        , [Q, B] = x.useState(null)
        , [q, re] = x.useState(!1)
        , de = d.length
        , ve = !q
        , [J, we] = x.useState({
            activeTeam: "team1",
            team1: {
                reserve: 600,
                penalty: 0
            },
            team2: {
                reserve: 600,
                penalty: 0
            }
        })
        , Ge = V => {
            const ae = Math.floor(V / 60)
                , ie = V % 60;
            return `${ae}:${ie.toString().padStart(2, "0")}`
        }
        ;
    x.useEffect(() => {
        const V = setInterval(() => {
            we(ae => {
                const ie = {
                    ...ae
                };
                return ie.activeTeam === "team1" ? ie.team1.reserve > 0 ? ie.team1.reserve -= 1 : ie.team1.penalty += 1 : ie.team2.reserve > 0 ? ie.team2.reserve -= 1 : ie.team2.penalty += 1,
                {
                    ...ie
                }
            }
            )
        }
            , 1e3);
        return () => clearInterval(V)
    }
        , []),
        x.useEffect(() => {
            (async () => {
                const ie = await (await fetch("/data/characters.json")).json();
                o(ie);
                const st = await (await fetch("/data/lightcones.json")).json();
                h(st)
            }
            )()
        }
            , []);
    const ke = () => {
        if (d.length >= 19)
            return;
        const V = d.length + 1;
        if (V >= s.length)
            return;
        const ae = s[V];
        we(ie => ({
            ...ie,
            activeTeam: ae
        }))
    }
        , $e = V => {
            p(V)
        }
        , We = V => {
            if (q || d.find(Ye => Ye.characterName === V.characterName) || d.length >= 20)
                return;
            const ae = {
                characterName: V.characterName,
                imageFull: V.imageFull,
                rarity: V.rarity,
                pointE0: V.E0,
                pointE1: V.E1,
                pointE2: V.E2,
                pointE3: V.E3,
                pointE4: V.E4,
                pointE5: V.E5,
                pointE6: V.E6,
                eidolon: "E0"
            }
                , ie = [...d, ae];
            $e(ie),
                ke()
        }
        , G = (V, ae) => {
            const ie = [...d];
            ie[V].eidolon = ae,
                $e(ie)
        }
        , se = () => {
            if (d.length === 0)
                return;
            const V = d.slice(0, -1);
            p(V);
            const ae = s[V.length];
            we(ie => ({
                ...ie,
                activeTeam: ae
            }))
        }
        , ge = V => {
            q || !d[V] || Re.includes(V) || (I(V),
                B(null),
                M(!0))
        }
        , k = () => {
            if (D === null || !Q)
                return;
            const V = [...d];
            Q.lightConeName === "none" ? (V[D].lightCone = null,
                V[D].lightConeImage = null,
                V[D].superimposition = null) : (V[D].lightCone = Q,
                    V[D].lightConeImage = Q.imageUrl,
                    V[D].superimposition = "S1"),
                $e(V),
                M(!1)
        }
        , F = (V, ae) => {
            const ie = [...d];
            ie[V].superimposition = ae,
                $e(ie)
        }
        , ne = l.filter(V => V.characterName.toLowerCase().includes(g.toLowerCase()))
        , Ae = u.filter(V => V.characterName.toLowerCase().includes(v.toLowerCase()))
        , Re = [0, 1, 6, 7]
        , T = [{
            cls: "slot slot-1",
            index: 0
        }, {
            cls: "slot-half pick-slot-3",
            index: 2
        }, {
            cls: "slot-half pick-slot-6",
            index: 5
        }, {
            cls: "slot slot-8",
            index: 7
        }, {
            cls: "slot-half pick-slot-10",
            index: 9
        }, {
            cls: "slot-half pick-slot-11",
            index: 10
        }, {
            cls: "slot-half pick-slot-14",
            index: 13
        }, {
            cls: "slot-half pick-slot-15",
            index: 14
        }, {
            cls: "slot-half pick-slot-18",
            index: 17
        }, {
            cls: "slot-half pick-slot-19",
            index: 18
        }]
        , z = [{
            cls: "slot slot-2",
            index: 1
        }, {
            cls: "slot-half pick-slot-4",
            index: 3
        }, {
            cls: "slot-half pick-slot-5",
            index: 4
        }, {
            cls: "slot slot-7",
            index: 6
        }, {
            cls: "slot-half pick-slot-9",
            index: 8
        }, {
            cls: "slot-half pick-slot-12",
            index: 11
        }, {
            cls: "slot-half pick-slot-13",
            index: 12
        }, {
            cls: "slot-half pick-slot-16",
            index: 15
        }, {
            cls: "slot-half pick-slot-17",
            index: 16
        }, {
            cls: "slot-half pick-slot-20",
            index: 19
        }]
        , K = V => {
            let ae = 0;
            return V.forEach(ie => {
                if (Re.includes(ie.index))
                    return;
                const Ye = d[ie.index];
                if (!Ye)
                    return;
                const st = Ye["point" + Ye.eidolon] || 0
                    , fs = Ye.lightCone && Ye.superimposition && Ye.lightCone[Ye.superimposition] || 0;
                ae += st + fs
            }
            ),
                ae
        }
        , X = K(T)
        , ce = K(z)
        , [he, Ne] = x.useState(0)
        , [it, Fe] = x.useState(0)
        , [pn, yi] = x.useState(0)
        , [gt, Bs] = x.useState(0)
        , [Dt, rs] = x.useState(0)
        , [Hn, Za] = x.useState(0)
        , [os, tn] = x.useState(0)
        , [vi, cs] = x.useState(0)
        , Ja = (X - 30) / 5
        , $a = (ce - 30) / 5
        , bt = Number(he) + Number(it) + Number(pn) + Number(gt)
        , Ps = Number(Dt) + Number(Hn) + Number(os) + Number(vi)
        , Bn = Ja + bt
        , Nn = $a + Ps;
    let Ot = null;
    d.length >= 20 && (Bn < Nn ? Ot = t : Nn < Bn ? Ot = i : Ot = "DRAW");
    const Si = V => {
        const ae = d[V];
        if (!ae)
            return null;
        const ie = Re.includes(V)
            , Ye = ae.rarity === 5 ? "#e6b741" : "#9b59b6"
            , st = ae["point" + ae.eidolon]
            , fs = ae.lightCone && ae.superimposition && ae.lightCone[ae.superimposition] || 0;
        return _.jsxs("div", {
            style: {
                width: "100%",
                height: "100%",
                background: Ye,
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                filter: ie ? "grayscale(100%) brightness(100%)" : "none"
            },
            children: [_.jsx("img", {
                src: ae.imageFull,
                alt: ae.characterName,
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }
            }), ae.lightConeImage && _.jsx("img", {
                src: ae.lightConeImage,
                alt: "LC",
                style: {
                    position: "absolute",
                    bottom: "3px",
                    left: "3px",
                    width: "50px",
                    height: "70px",
                    borderRadius: "5px",
                    border: "2px solid black"
                }
            }), ae.lightCone && _.jsx("div", {
                style: {
                    position: "absolute",
                    bottom: "6px",
                    right: "6px",
                    background: "rgba(0,0,0,0.7)",
                    color: "#ffd700",
                    fontSize: "13px",
                    padding: "1px 5px",
                    borderRadius: "4px",
                    width: "35px",
                    textAlign: "center"
                },
                children: fs
            }), ae.lightConeImage && !ie && _.jsxs("select", {
                disabled: q,
                value: ae.superimposition || "S1",
                onClick: Ft => Ft.stopPropagation(),
                onChange: Ft => F(V, Ft.target.value),
                style: {
                    position: "absolute",
                    bottom: "30px",
                    right: "5px",
                    width: "36px",
                    height: "22px",
                    fontSize: "12px",
                    borderRadius: "4px"
                },
                children: [_.jsx("option", {
                    children: "S1"
                }), _.jsx("option", {
                    children: "S2"
                }), _.jsx("option", {
                    children: "S3"
                }), _.jsx("option", {
                    children: "S4"
                }), _.jsx("option", {
                    children: "S5"
                })]
            }), !ie && _.jsxs("select", {
                disabled: q,
                value: ae.eidolon,
                onClick: Ft => Ft.stopPropagation(),
                onChange: Ft => G(V, Ft.target.value),
                style: {
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    width: "55px",
                    height: "24px",
                    textAlign: "center"
                },
                children: [_.jsx("option", {
                    children: "E0"
                }), _.jsx("option", {
                    children: "E1"
                }), _.jsx("option", {
                    children: "E2"
                }), _.jsx("option", {
                    children: "E3"
                }), _.jsx("option", {
                    children: "E4"
                }), _.jsx("option", {
                    children: "E5"
                }), _.jsx("option", {
                    children: "E6"
                })]
            }), !ie && _.jsx("div", {
                style: {
                    position: "absolute",
                    top: "3px",
                    right: "4px",
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    fontSize: "14px",
                    padding: "1px 5px",
                    borderRadius: "4px",
                    width: "35px",
                    textAlign: "center"
                },
                children: st?.toFixed(1)
            })]
        })
    }
        , us = () => {
            p([]),
                we({
                    activeTeam: "team1",
                    team1: {
                        reserve: 600,
                        penalty: 0
                    },
                    team2: {
                        reserve: 600,
                        penalty: 0
                    }
                })
        }
        , qs = () => {
            re(!q)
        }
        ;
    return _.jsxs("div", {
        children: [P && _.jsx("div", {
            className: "lc-modal",
            onClick: () => M(!1),
            children: _.jsxs("div", {
                className: "lc-box",
                onClick: V => V.stopPropagation(),
                children: [_.jsx("h3", {
                    children: "Select Lightcone"
                }), _.jsx("input", {
                    className: "lc-search",
                    placeholder: "Search lightcone...",
                    value: v,
                    onChange: V => E(V.target.value)
                }), _.jsxs("div", {
                    className: "lc-grid",
                    children: [_.jsx("div", {
                        className: `lc-tile blank ${Q?.lightConeName === "none" ? "active" : ""}`,
                        onClick: () => B({
                            lightConeName: "none",
                            imageUrl: ""
                        }),
                        children: _.jsx("p", {
                            children: "None"
                        })
                    }), Ae.map((V, ae) => _.jsxs("div", {
                        className: `lc-tile ${Q?.lightConeName === V.lightConeName ? "active" : ""}`,
                        onClick: () => B(V),
                        children: [_.jsx("img", {
                            src: V.imageUrl
                        }), _.jsx("p", {
                            children: V.characterName
                        })]
                    }, ae))]
                }), _.jsxs("div", {
                    className: "lc-buttons",
                    children: [_.jsx("button", {
                        onClick: () => M(!1),
                        children: "Cancel"
                    }), _.jsx("button", {
                        onClick: k,
                        children: "Confirm"
                    })]
                })]
            })
        }), _.jsxs("div", {
            className: "draft-container",
            children: [_.jsx("div", {
                className: "team-section",
                children: _.jsxs("div", {
                    className: "score-panel",
                    children: [_.jsx("h2", {
                        children: t
                    }), _.jsxs("p", {
                        children: ["Total cost:", _.jsx("span", {
                            children: X.toFixed(1)
                        })]
                    }), _.jsx("label", {
                        children: "First Half Cycle:"
                    }), _.jsx("input", {
                        type: "number",
                        value: he,
                        onChange: V => Ne(V.target.value)
                    }), _.jsx("label", {
                        children: "Second Half Cycle:"
                    }), _.jsx("input", {
                        type: "number",
                        value: it,
                        onChange: V => Fe(V.target.value)
                    }), _.jsx("label", {
                        children: "Deaths:"
                    }), _.jsx("input", {
                        type: "number",
                        value: pn,
                        onChange: V => yi(V.target.value)
                    }), _.jsx("label", {
                        children: "Time penalty:"
                    }), _.jsx("input", {
                        type: "number",
                        value: gt,
                        onChange: V => Bs(V.target.value)
                    }), _.jsxs("p", {
                        children: ["Total Point:", _.jsx("span", {
                            children: Bn.toFixed(4)
                        })]
                    })]
                })
            }), _.jsxs("div", {
                className: "team-slots-center",
                children: [_.jsxs("div", {
                    className: "team-col",
                    children: [_.jsxs("div", {
                        className: "team-top-row",
                        children: [_.jsx("div", {
                            className: `team-header blue ${J?.activeTeam === "team1" ? "active-turn" : ""}`,
                            children: t
                        }), _.jsxs("div", {
                            className: "team-times",
                            children: [_.jsxs("div", {
                                className: "time-box",
                                children: [_.jsx("div", {
                                    className: "label",
                                    children: "Reserve"
                                }), _.jsx("div", {
                                    className: "value",
                                    children: Ge(J?.team1?.reserve ?? 0)
                                })]
                            }), _.jsxs("div", {
                                className: "time-box",
                                children: [_.jsx("div", {
                                    className: "label",
                                    children: "Penalty"
                                }), _.jsx("div", {
                                    className: "value",
                                    children: Ge(J?.team1?.penalty ?? 0)
                                })]
                            })]
                        })]
                    }), _.jsx("div", {
                        className: "team-slots",
                        children: _.jsx("div", {
                            className: "slot-row",
                            children: T.map((V, ae) => _.jsx("div", {
                                className: `${V.cls} ${de === V.index ? "blink-slot" : ""}`,
                                onClick: () => ge(V.index),
                                children: Si(V.index)
                            }, ae))
                        })
                    })]
                }), _.jsx("div", {
                    className: "winner-container",
                    children: _.jsx("div", {
                        className: "winner",
                        children: _.jsx("div", {
                            className: "label",
                            style: {
                                fontSize: "28px",
                                fontWeight: "bold"
                            },
                            children: Ot && (Ot === "DRAW" ? "DRAW" : `${Ot} WIN`)
                        })
                    })
                }), _.jsxs("div", {
                    className: "team-col",
                    children: [_.jsxs("div", {
                        className: "team-top-row",
                        children: [_.jsx("div", {
                            className: `team-header red ${J?.activeTeam === "team2" ? "active-turn" : ""}`,
                            children: i
                        }), _.jsxs("div", {
                            className: "team-times",
                            children: [_.jsxs("div", {
                                className: "time-box",
                                children: [_.jsx("div", {
                                    className: "label",
                                    children: "Reserve"
                                }), _.jsx("div", {
                                    className: "value",
                                    children: Ge(J?.team2?.reserve ?? 0)
                                })]
                            }), _.jsxs("div", {
                                className: "time-box",
                                children: [_.jsx("div", {
                                    className: "label",
                                    children: "Penalty"
                                }), _.jsx("div", {
                                    className: "value",
                                    children: Ge(J?.team2?.penalty ?? 0)
                                })]
                            })]
                        })]
                    }), _.jsx("div", {
                        className: "team-slots",
                        children: _.jsx("div", {
                            className: "slot-row",
                            children: z.map((V, ae) => _.jsx("div", {
                                className: `${V.cls} ${de === V.index ? "blink-slot" : ""}`,
                                onClick: () => ge(V.index),
                                children: Si(V.index)
                            }, ae))
                        })
                    })]
                })]
            }), _.jsx("div", {
                className: "team-section",
                children: _.jsxs("div", {
                    className: "score-panel",
                    children: [_.jsx("h2", {
                        children: i
                    }), _.jsxs("p", {
                        children: ["Total cost:", _.jsx("span", {
                            children: ce.toFixed(1)
                        })]
                    }), _.jsx("label", {
                        children: "First Half Cycle:"
                    }), _.jsx("input", {
                        type: "number",
                        value: Dt,
                        onChange: V => rs(V.target.value)
                    }), _.jsx("label", {
                        children: "Second Half Cycle:"
                    }), _.jsx("input", {
                        type: "number",
                        value: Hn,
                        onChange: V => Za(V.target.value)
                    }), _.jsx("label", {
                        children: "Deaths:"
                    }), _.jsx("input", {
                        type: "number",
                        value: os,
                        onChange: V => tn(V.target.value)
                    }), _.jsx("label", {
                        children: "Time penalty:"
                    }), _.jsx("input", {
                        type: "number",
                        value: vi,
                        onChange: V => cs(V.target.value)
                    }), _.jsxs("p", {
                        children: ["Total Point:", _.jsx("span", {
                            children: Nn.toFixed(4)
                        })]
                    })]
                })
            })]
        }), _.jsxs("div", {
            className: "grid-wrap",
            children: [_.jsxs("div", {
                className: "search-container",
                children: [_.jsx("input", {
                    className: "search-bar",
                    placeholder: "Search characters",
                    value: g,
                    onChange: V => S(V.target.value)
                }), _.jsxs("div", {
                    className: "button-group",
                    children: [_.jsx("button", {
                        className: "custom-btn",
                        onClick: qs,
                        style: {
                            background: q ? "#e74c3c" : "#2ecc71"
                        },
                        children: q ? "Unlock Draft" : "Lock Draft"
                    }), _.jsx("button", {
                        className: "custom-btn btn-undo",
                        onClick: se,
                        children: "Undo"
                    }), _.jsx("button", {
                        className: "custom-btn btn-reset",
                        onClick: us,
                        children: "Reset"
                    })]
                })]
            }), _.jsx("div", {
                className: "grid",
                children: ne.map((V, ae) => {
                    const ie = d.some(Ye => Ye.characterName === V.characterName);
                    return _.jsx("div", {
                        className: "tile",
                        onClick: () => !ie && ve && We(V),
                        style: {
                            background: V.rarity === 5 ? "#e6b741" : "#9b59b6",
                            opacity: !ve || ie ? .35 : 1,
                            pointerEvents: !ve || ie ? "none" : "auto",
                            filter: ie ? "grayscale(100%) brightness(100%)" : "none"
                        },
                        children: _.jsx("img", {
                            src: V.imageIcon,
                            alt: V.characterName
                        })
                    }, ae)
                }
                )
            })]
        })]
    })
}
function KN() {
    const [s, t] = x.useState([])
        , [i, l] = x.useState([])
        , [o, u] = x.useState("")
        , [h, d] = x.useState("")
        , [p, g] = x.useState([null, null, null, null])
        , [S, v] = x.useState(null)
        , [E, D] = x.useState(!1)
        , [I, P] = x.useState(null)
        , [M, Q] = x.useState(0);
    x.useEffect(() => {
        (async () => {
            const ge = await (await fetch("/data/characters.json")).json();
            t(ge);
            const F = await (await fetch("/data/lightcones.json")).json();
            l(F)
        }
        )()
    }
        , []);
    const B = G => {
        let se = S;
        if (se === null && (se = p.findIndex(k => !k)),
            se === -1)
            return;
        const ge = [...p];
        ge[se] = {
            characterName: G.characterName,
            imageFull: G.imageFull,
            rarity: G.rarity,
            pointE0: G.E0,
            pointE1: G.E1,
            pointE2: G.E2,
            pointE3: G.E3,
            pointE4: G.E4,
            pointE5: G.E5,
            pointE6: G.E6,
            eidolon: "E0",
            superimposition: "S1"
        },
            g(ge),
            v(null)
    }
        , q = G => {
            const se = [...p];
            se[G] = null,
                g(se)
        }
        , re = () => {
            g([null, null, null, null])
        }
        , de = G => {
            p[G] && (v(G),
                P(null),
                D(!0))
        }
        , ve = () => {
            if (S === null)
                return;
            const G = [...p];
            I.lightConeName === "none" ? (G[S].lightCone = null,
                G[S].lightConeImage = null) : (G[S].lightCone = I,
                    G[S].lightConeImage = I.imageUrl),
                g(G),
                D(!1)
        }
        , J = (G, se) => {
            const ge = [...p];
            ge[G].eidolon = se,
                g(ge)
        }
        , we = (G, se) => {
            const ge = [...p];
            ge[G].superimposition = se,
                g(ge)
        }
        , ke = (() => {
            let G = 0;
            return p.forEach(se => {
                if (!se)
                    return;
                const ge = se["point" + se.eidolon] || 0
                    , k = se.lightCone && se.superimposition && se.lightCone[se.superimposition] || 0;
                G += ge + k
            }
            ),
                G += M * 5,
                G
        }
        )()
        , $e = s.filter(G => G.characterName.toLowerCase().includes(o.toLowerCase()))
        , We = i.filter(G => G.characterName.toLowerCase().includes(h.toLowerCase()));
    return _.jsx("div", {
        className: "calc-page",
        children: _.jsxs("div", {
            className: "calc-container",
            children: [_.jsx("h1", {
                style: {
                    marginBottom: "30px",
                    textAlign: "center"
                },
                children: "Draft Calculator"
            }), _.jsxs("div", {
                className: "top-layout",
                children: [_.jsxs("div", {
                    className: "left-panel",
                    children: [_.jsx("div", {
                        className: "slot-area",
                        children: p.map((G, se) => {
                            if (!G)
                                return _.jsxs("div", {
                                    className: "slot-column",
                                    children: [_.jsx("div", {
                                        onClick: () => v(se),
                                        className: `slot-box ${S === se ? "selected" : ""}`,
                                        children: "Empty Slot"
                                    }), _.jsx("button", {
                                        className: "slot-delete",
                                        disabled: !0,
                                        children: "Delete"
                                    })]
                                }, se);
                            const ge = G["point" + G.eidolon]
                                , k = G.lightCone && G.superimposition && G.lightCone[G.superimposition] || 0;
                            return _.jsxs("div", {
                                className: "slot-column",
                                children: [_.jsxs("div", {
                                    className: "slot-box filled",
                                    children: [_.jsx("img", {
                                        src: G.imageFull,
                                        className: "slot-image",
                                        alt: G.characterName
                                    }), _.jsxs("select", {
                                        value: G.eidolon,
                                        onChange: F => J(se, F.target.value),
                                        className: "eidolon-select",
                                        children: [_.jsx("option", {
                                            children: "E0"
                                        }), _.jsx("option", {
                                            children: "E1"
                                        }), _.jsx("option", {
                                            children: "E2"
                                        }), _.jsx("option", {
                                            children: "E3"
                                        }), _.jsx("option", {
                                            children: "E4"
                                        }), _.jsx("option", {
                                            children: "E5"
                                        }), _.jsx("option", {
                                            children: "E6"
                                        })]
                                    }), _.jsx("div", {
                                        className: "char-point",
                                        children: ge?.toFixed(1)
                                    }), _.jsx("div", {
                                        onClick: () => de(se),
                                        className: "lc-thumb",
                                        children: G.lightConeImage && _.jsx("img", {
                                            src: G.lightConeImage,
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            },
                                            alt: "LC"
                                        })
                                    }), G.lightCone && _.jsx("div", {
                                        className: "lc-point",
                                        children: k
                                    }), G.lightCone && _.jsxs("select", {
                                        value: G.superimposition,
                                        onChange: F => we(se, F.target.value),
                                        className: "super-select",
                                        children: [_.jsx("option", {
                                            children: "S1"
                                        }), _.jsx("option", {
                                            children: "S2"
                                        }), _.jsx("option", {
                                            children: "S3"
                                        }), _.jsx("option", {
                                            children: "S4"
                                        }), _.jsx("option", {
                                            children: "S5"
                                        })]
                                    })]
                                }), _.jsx("button", {
                                    onClick: () => q(se),
                                    className: "slot-delete",
                                    children: "Delete"
                                })]
                            }, se)
                        }
                        )
                    }), _.jsxs("div", {
                        className: "control-panel",
                        children: [_.jsx("label", {
                            style: {
                                fontWeight: 600
                            },
                            children: "Cycle"
                        }), _.jsx("input", {
                            type: "number",
                            value: M,
                            onChange: G => Q(Number(G.target.value))
                        }), _.jsxs("h2", {
                            style: {
                                margin: 0
                            },
                            children: ["Total: ", ke.toFixed(2)]
                        }), _.jsx("button", {
                            onClick: re,
                            className: "clear-btn",
                            children: "Clear All"
                        })]
                    })]
                }), _.jsxs("div", {
                    className: "char-panel",
                    children: [_.jsx("h2", {
                        children: "Characters"
                    }), _.jsx("input", {
                        type: "text",
                        placeholder: "Search character...",
                        value: o,
                        onChange: G => u(G.target.value),
                        className: "search-input"
                    }), _.jsx("div", {
                        className: "char-grid",
                        children: $e.map((G, se) => _.jsx("img", {
                            src: G.imageIcon,
                            className: "char-icon",
                            onClick: () => B(G),
                            alt: G.characterName
                        }, se))
                    })]
                })]
            }), E && _.jsx("div", {
                className: "lc-modal",
                onClick: () => D(!1),
                children: _.jsxs("div", {
                    className: "lc-box",
                    onClick: G => G.stopPropagation(),
                    children: [_.jsx("h2", {
                        children: "Select Lightcone"
                    }), _.jsx("input", {
                        type: "text",
                        placeholder: "Search lightcone...",
                        value: h,
                        onChange: G => d(G.target.value),
                        className: "search-input"
                    }), _.jsxs("div", {
                        className: "lc-grid",
                        children: [_.jsx("div", {
                            onClick: () => P({
                                lightConeName: "none"
                            }),
                            style: {
                                border: "1px solid #999",
                                height: "115px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "8px",
                                cursor: "pointer"
                            },
                            children: "None"
                        }), We.map((G, se) => _.jsx("img", {
                            src: G.imageUrl,
                            className: `lc-icon ${I?.lightConeName === G.lightConeName ? "selected" : ""}`,
                            onClick: () => P(G),
                            alt: G.lightConeName
                        }, se))]
                    }), _.jsxs("div", {
                        className: "lc-buttons",
                        children: [_.jsx("button", {
                            onClick: () => D(!1),
                            children: "Cancel"
                        }), _.jsx("button", {
                            onClick: ve,
                            children: "Confirm"
                        })]
                    })]
                })
            })]
        })
    })
}
function XN() {
    return _.jsx(jC, {
        children: _.jsxs(hC, {
            children: [_.jsx(Na, {
                path: "/calculator",
                element: _.jsx(KN, {})
            }), _.jsx(Na, {
                path: "/",
                element: _.jsx(GN, {})
            }), _.jsx(Na, {
                path: "/data",
                element: _.jsx(YN, {})
            }), _.jsx(Na, {
                path: "/draft",
                element: _.jsx(FN, {})
            }), _.jsx(Na, {
                path: "/demo",
                element: _.jsx(QN, {})
            })]
        })
    })
}
function gE() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const WN = gE
    , _E = new Er("auth", "Firebase", gE());
const Ec = new cd("@firebase/auth");
function ZN(s, ...t) {
    Ec.logLevel <= Be.WARN && Ec.warn(`Auth (${Ya}): ${s}`, ...t)
}
function Jo(s, ...t) {
    Ec.logLevel <= Be.ERROR && Ec.error(`Auth (${Ya}): ${s}`, ...t)
}
function hi(s, ...t) {
    throw qd(s, ...t)
}
function Un(s, ...t) {
    return qd(s, ...t)
}
function yE(s, t, i) {
    const l = {
        ...WN(),
        [t]: i
    };
    return new Er("auth", "Firebase", l).create(t, {
        appName: s.name
    })
}
function ts(s) {
    return yE(s, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
}
function qd(s, ...t) {
    if (typeof s != "string") {
        const i = t[0]
            , l = [...t.slice(1)];
        return l[0] && (l[0].appName = s.name),
            s._errorFactory.create(i, ...l)
    }
    return _E.create(s, ...t)
}
function ue(s, t, ...i) {
    if (!s)
        throw qd(t, ...i)
}
function li(s) {
    const t = "INTERNAL ASSERTION FAILED: " + s;
    throw Jo(t),
    new Error(t)
}
function di(s, t) {
    s || li(t)
}
function Kh() {
    return typeof self < "u" && self.location?.href || ""
}
function JN() {
    return $y() === "http:" || $y() === "https:"
}
function $y() {
    return typeof self < "u" && self.location?.protocol || null
}
function $N() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (JN() || oT() || "connection" in navigator) ? navigator.onLine : !0
}
function eA() {
    if (typeof navigator > "u")
        return null;
    const s = navigator;
    return s.languages && s.languages[0] || s.language || null
}
class Nr {
    constructor(t, i) {
        this.shortDelay = t,
            this.longDelay = i,
            di(i > t, "Short delay should be less than long delay!"),
            this.isMobile = rd() || Gv()
    }
    get() {
        return $N() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
function Vd(s, t) {
    di(s.emulator, "Emulator should always be set here");
    const { url: i } = s.emulator;
    return t ? `${i}${t.startsWith("/") ? t.slice(1) : t}` : i
}
class vE {
    static initialize(t, i, l) {
        this.fetchImpl = t,
            i && (this.headersImpl = i),
            l && (this.responseImpl = l)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers" in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response" in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
const tA = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
const nA = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"]
    , iA = new Nr(3e4, 6e4);
function Pc(s, t) {
    return s.tenantId && !t.tenantId ? {
        ...t,
        tenantId: s.tenantId
    } : t
}
async function Wa(s, t, i, l, o = {}) {
    return SE(s, o, async () => {
        let u = {}
            , h = {};
        l && (t === "GET" ? h = l : u = {
            body: JSON.stringify(l)
        });
        const d = Fa({
            key: s.config.apiKey,
            ...h
        }).slice(1)
            , p = await s._getAdditionalHeaders();
        p["Content-Type"] = "application/json",
            s.languageCode && (p["X-Firebase-Locale"] = s.languageCode);
        const g = {
            method: t,
            headers: p,
            ...u
        };
        return rT() || (g.referrerPolicy = "no-referrer"),
            s.emulatorConfig && Ga(s.emulatorConfig.host) && (g.credentials = "include"),
            vE.fetch()(await bE(s, s.config.apiHost, i, d), g)
    }
    )
}
async function SE(s, t, i) {
    s._canInitEmulator = !1;
    const l = {
        ...tA,
        ...t
    };
    try {
        const o = new sA(s)
            , u = await Promise.race([i(), o.promise]);
        o.clearNetworkTimeout();
        const h = await u.json();
        if ("needConfirmation" in h)
            throw Ko(s, "account-exists-with-different-credential", h);
        if (u.ok && !("errorMessage" in h))
            return h;
        {
            const d = u.ok ? h.errorMessage : h.error.message
                , [p, g] = d.split(" : ");
            if (p === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw Ko(s, "credential-already-in-use", h);
            if (p === "EMAIL_EXISTS")
                throw Ko(s, "email-already-in-use", h);
            if (p === "USER_DISABLED")
                throw Ko(s, "user-disabled", h);
            const S = l[p] || p.toLowerCase().replace(/[_\s]+/g, "-");
            if (g)
                throw yE(s, S, g);
            hi(s, S)
        }
    } catch (o) {
        if (o instanceof ls)
            throw o;
        hi(s, "network-request-failed", {
            message: String(o)
        })
    }
}
async function EE(s, t, i, l, o = {}) {
    const u = await Wa(s, t, i, l, o);
    return "mfaPendingCredential" in u && hi(s, "multi-factor-auth-required", {
        _serverResponse: u
    }),
        u
}
async function bE(s, t, i, l) {
    const o = `${t}${i}?${l}`
        , u = s
        , h = u.config.emulator ? Vd(s.config, o) : `${s.config.apiScheme}://${o}`;
    return nA.includes(i) && (await u._persistenceManagerAvailable,
        u._getPersistenceType() === "COOKIE") ? u._getPersistence()._getFinalTarget(h).toString() : h
}
class sA {
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
    constructor(t) {
        this.auth = t,
            this.timer = null,
            this.promise = new Promise((i, l) => {
                this.timer = setTimeout(() => l(Un(this.auth, "network-request-failed")), iA.get())
            }
            )
    }
}
function Ko(s, t, i) {
    const l = {
        appName: s.name
    };
    i.email && (l.email = i.email),
        i.phoneNumber && (l.phoneNumber = i.phoneNumber);
    const o = Un(s, t, l);
    return o.customData._tokenResponse = i,
        o
}
async function aA(s, t) {
    return Wa(s, "POST", "/v1/accounts:delete", t)
}
async function bc(s, t) {
    return Wa(s, "POST", "/v1/accounts:lookup", t)
}
function ar(s) {
    if (s)
        try {
            const t = new Date(Number(s));
            if (!isNaN(t.getTime()))
                return t.toUTCString()
        } catch { }
}
async function lA(s, t = !1) {
    const i = mn(s)
        , l = await i.getIdToken(t)
        , o = Gd(l);
    ue(o && o.exp && o.auth_time && o.iat, i.auth, "internal-error");
    const u = typeof o.firebase == "object" ? o.firebase : void 0
        , h = u?.sign_in_provider;
    return {
        claims: o,
        token: l,
        authTime: ar(wh(o.auth_time)),
        issuedAtTime: ar(wh(o.iat)),
        expirationTime: ar(wh(o.exp)),
        signInProvider: h || null,
        signInSecondFactor: u?.sign_in_second_factor || null
    }
}
function wh(s) {
    return Number(s) * 1e3
}
function Gd(s) {
    const [t, i, l] = s.split(".");
    if (t === void 0 || i === void 0 || l === void 0)
        return Jo("JWT malformed, contained fewer than 3 sections"),
            null;
    try {
        const o = sc(i);
        return o ? JSON.parse(o) : (Jo("Failed to decode base64 JWT payload"),
            null)
    } catch (o) {
        return Jo("Caught error parsing JWT payload as JSON", o?.toString()),
            null
    }
}
function ev(s) {
    const t = Gd(s);
    return ue(t, "internal-error"),
        ue(typeof t.exp < "u", "internal-error"),
        ue(typeof t.iat < "u", "internal-error"),
        Number(t.exp) - Number(t.iat)
}
async function _r(s, t, i = !1) {
    if (i)
        return t;
    try {
        return await t
    } catch (l) {
        throw l instanceof ls && rA(l) && s.auth.currentUser === s && await s.auth.signOut(),
        l
    }
}
function rA({ code: s }) {
    return s === "auth/user-disabled" || s === "auth/user-token-expired"
}
class oA {
    constructor(t) {
        this.user = t,
            this.isRunning = !1,
            this.timerId = null,
            this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
            this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
            this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(t) {
        if (t) {
            const i = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
                i
        } else {
            this.errorBackoff = 3e4;
            const l = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
            return Math.max(0, l)
        }
    }
    schedule(t = !1) {
        if (!this.isRunning)
            return;
        const i = this.getInterval(t);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
            , i)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (t) {
            t?.code === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
class Xh {
    constructor(t, i) {
        this.createdAt = t,
            this.lastLoginAt = i,
            this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = ar(this.lastLoginAt),
            this.creationTime = ar(this.createdAt)
    }
    _copy(t) {
        this.createdAt = t.createdAt,
            this.lastLoginAt = t.lastLoginAt,
            this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
async function Cc(s) {
    const t = s.auth
        , i = await s.getIdToken()
        , l = await _r(s, bc(t, {
            idToken: i
        }));
    ue(l?.users.length, t, "internal-error");
    const o = l.users[0];
    s._notifyReloadListener(o);
    const u = o.providerUserInfo?.length ? CE(o.providerUserInfo) : []
        , h = uA(s.providerData, u)
        , d = s.isAnonymous
        , p = !(s.email && o.passwordHash) && !h?.length
        , g = d ? p : !1
        , S = {
            uid: o.localId,
            displayName: o.displayName || null,
            photoURL: o.photoUrl || null,
            email: o.email || null,
            emailVerified: o.emailVerified || !1,
            phoneNumber: o.phoneNumber || null,
            tenantId: o.tenantId || null,
            providerData: h,
            metadata: new Xh(o.createdAt, o.lastLoginAt),
            isAnonymous: g
        };
    Object.assign(s, S)
}
async function cA(s) {
    const t = mn(s);
    await Cc(t),
        await t.auth._persistUserIfCurrent(t),
        t.auth._notifyListenersIfCurrent(t)
}
function uA(s, t) {
    return [...s.filter(l => !t.some(o => o.providerId === l.providerId)), ...t]
}
function CE(s) {
    return s.map(({ providerId: t, ...i }) => ({
        providerId: t,
        uid: i.rawId || "",
        displayName: i.displayName || null,
        email: i.email || null,
        phoneNumber: i.phoneNumber || null,
        photoURL: i.photoUrl || null
    }))
}
async function fA(s, t) {
    const i = await SE(s, {}, async () => {
        const l = Fa({
            grant_type: "refresh_token",
            refresh_token: t
        }).slice(1)
            , { tokenApiHost: o, apiKey: u } = s.config
            , h = await bE(s, o, "/v1/token", `key=${u}`)
            , d = await s._getAdditionalHeaders();
        d["Content-Type"] = "application/x-www-form-urlencoded";
        const p = {
            method: "POST",
            headers: d,
            body: l
        };
        return s.emulatorConfig && Ga(s.emulatorConfig.host) && (p.credentials = "include"),
            vE.fetch()(h, p)
    }
    );
    return {
        accessToken: i.access_token,
        expiresIn: i.expires_in,
        refreshToken: i.refresh_token
    }
}
async function hA(s, t) {
    return Wa(s, "POST", "/v2/accounts:revokeToken", Pc(s, t))
}
class Ma {
    constructor() {
        this.refreshToken = null,
            this.accessToken = null,
            this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(t) {
        ue(t.idToken, "internal-error"),
            ue(typeof t.idToken < "u", "internal-error"),
            ue(typeof t.refreshToken < "u", "internal-error");
        const i = "expiresIn" in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : ev(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, i)
    }
    updateFromIdToken(t) {
        ue(t.length !== 0, "internal-error");
        const i = ev(t);
        this.updateTokensAndExpiration(t, null, i)
    }
    async getToken(t, i = !1) {
        return !i && this.accessToken && !this.isExpired ? this.accessToken : (ue(this.refreshToken, t, "user-token-expired"),
            this.refreshToken ? (await this.refresh(t, this.refreshToken),
                this.accessToken) : null)
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(t, i) {
        const { accessToken: l, refreshToken: o, expiresIn: u } = await fA(t, i);
        this.updateTokensAndExpiration(l, o, Number(u))
    }
    updateTokensAndExpiration(t, i, l) {
        this.refreshToken = i || null,
            this.accessToken = t || null,
            this.expirationTime = Date.now() + l * 1e3
    }
    static fromJSON(t, i) {
        const { refreshToken: l, accessToken: o, expirationTime: u } = i
            , h = new Ma;
        return l && (ue(typeof l == "string", "internal-error", {
            appName: t
        }),
            h.refreshToken = l),
            o && (ue(typeof o == "string", "internal-error", {
                appName: t
            }),
                h.accessToken = o),
            u && (ue(typeof u == "number", "internal-error", {
                appName: t
            }),
                h.expirationTime = u),
            h
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(t) {
        this.accessToken = t.accessToken,
            this.refreshToken = t.refreshToken,
            this.expirationTime = t.expirationTime
    }
    _clone() {
        return Object.assign(new Ma, this.toJSON())
    }
    _performRefresh() {
        return li("not implemented")
    }
}
function Fi(s, t) {
    ue(typeof s == "string" || typeof s > "u", "internal-error", {
        appName: t
    })
}
class xn {
    constructor({ uid: t, auth: i, stsTokenManager: l, ...o }) {
        this.providerId = "firebase",
            this.proactiveRefresh = new oA(this),
            this.reloadUserInfo = null,
            this.reloadListener = null,
            this.uid = t,
            this.auth = i,
            this.stsTokenManager = l,
            this.accessToken = l.accessToken,
            this.displayName = o.displayName || null,
            this.email = o.email || null,
            this.emailVerified = o.emailVerified || !1,
            this.phoneNumber = o.phoneNumber || null,
            this.photoURL = o.photoURL || null,
            this.isAnonymous = o.isAnonymous || !1,
            this.tenantId = o.tenantId || null,
            this.providerData = o.providerData ? [...o.providerData] : [],
            this.metadata = new Xh(o.createdAt || void 0, o.lastLoginAt || void 0)
    }
    async getIdToken(t) {
        const i = await _r(this, this.stsTokenManager.getToken(this.auth, t));
        return ue(i, this.auth, "internal-error"),
            this.accessToken !== i && (this.accessToken = i,
                await this.auth._persistUserIfCurrent(this),
                this.auth._notifyListenersIfCurrent(this)),
            i
    }
    getIdTokenResult(t) {
        return lA(this, t)
    }
    reload() {
        return cA(this)
    }
    _assign(t) {
        this !== t && (ue(this.uid === t.uid, this.auth, "internal-error"),
            this.displayName = t.displayName,
            this.photoURL = t.photoURL,
            this.email = t.email,
            this.emailVerified = t.emailVerified,
            this.phoneNumber = t.phoneNumber,
            this.isAnonymous = t.isAnonymous,
            this.tenantId = t.tenantId,
            this.providerData = t.providerData.map(i => ({
                ...i
            })),
            this.metadata._copy(t.metadata),
            this.stsTokenManager._assign(t.stsTokenManager))
    }
    _clone(t) {
        const i = new xn({
            ...this,
            auth: t,
            stsTokenManager: this.stsTokenManager._clone()
        });
        return i.metadata._copy(this.metadata),
            i
    }
    _onReload(t) {
        ue(!this.reloadListener, this.auth, "internal-error"),
            this.reloadListener = t,
            this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
                this.reloadUserInfo = null)
    }
    _notifyReloadListener(t) {
        this.reloadListener ? this.reloadListener(t) : this.reloadUserInfo = t
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(t, i = !1) {
        let l = !1;
        t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t),
            l = !0),
            i && await Cc(this),
            await this.auth._persistUserIfCurrent(this),
            l && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        if (En(this.auth.app))
            return Promise.reject(ts(this.auth));
        const t = await this.getIdToken();
        return await _r(this, aA(this.auth, {
            idToken: t
        })),
            this.stsTokenManager.clearRefreshToken(),
            this.auth.signOut()
    }
    toJSON() {
        return {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(t => ({
                ...t
            })),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
            ...this.metadata.toJSON(),
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        }
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(t, i) {
        const l = i.displayName ?? void 0
            , o = i.email ?? void 0
            , u = i.phoneNumber ?? void 0
            , h = i.photoURL ?? void 0
            , d = i.tenantId ?? void 0
            , p = i._redirectEventId ?? void 0
            , g = i.createdAt ?? void 0
            , S = i.lastLoginAt ?? void 0
            , { uid: v, emailVerified: E, isAnonymous: D, providerData: I, stsTokenManager: P } = i;
        ue(v && P, t, "internal-error");
        const M = Ma.fromJSON(this.name, P);
        ue(typeof v == "string", t, "internal-error"),
            Fi(l, t.name),
            Fi(o, t.name),
            ue(typeof E == "boolean", t, "internal-error"),
            ue(typeof D == "boolean", t, "internal-error"),
            Fi(u, t.name),
            Fi(h, t.name),
            Fi(d, t.name),
            Fi(p, t.name),
            Fi(g, t.name),
            Fi(S, t.name);
        const Q = new xn({
            uid: v,
            auth: t,
            email: o,
            emailVerified: E,
            displayName: l,
            isAnonymous: D,
            photoURL: h,
            phoneNumber: u,
            tenantId: d,
            stsTokenManager: M,
            createdAt: g,
            lastLoginAt: S
        });
        return I && Array.isArray(I) && (Q.providerData = I.map(B => ({
            ...B
        }))),
            p && (Q._redirectEventId = p),
            Q
    }
    static async _fromIdTokenResponse(t, i, l = !1) {
        const o = new Ma;
        o.updateFromServerResponse(i);
        const u = new xn({
            uid: i.localId,
            auth: t,
            stsTokenManager: o,
            isAnonymous: l
        });
        return await Cc(u),
            u
    }
    static async _fromGetAccountInfoResponse(t, i, l) {
        const o = i.users[0];
        ue(o.localId !== void 0, "internal-error");
        const u = o.providerUserInfo !== void 0 ? CE(o.providerUserInfo) : []
            , h = !(o.email && o.passwordHash) && !u?.length
            , d = new Ma;
        d.updateFromIdToken(l);
        const p = new xn({
            uid: o.localId,
            auth: t,
            stsTokenManager: d,
            isAnonymous: h
        })
            , g = {
                uid: o.localId,
                displayName: o.displayName || null,
                photoURL: o.photoUrl || null,
                email: o.email || null,
                emailVerified: o.emailVerified || !1,
                phoneNumber: o.phoneNumber || null,
                tenantId: o.tenantId || null,
                providerData: u,
                metadata: new Xh(o.createdAt, o.lastLoginAt),
                isAnonymous: !(o.email && o.passwordHash) && !u?.length
            };
        return Object.assign(p, g),
            p
    }
}
const tv = new Map;
function ri(s) {
    di(s instanceof Function, "Expected a class definition");
    let t = tv.get(s);
    return t ? (di(t instanceof s, "Instance stored in cache mismatched with class"),
        t) : (t = new s,
            tv.set(s, t),
            t)
}
class TE {
    constructor() {
        this.type = "NONE",
            this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(t, i) {
        this.storage[t] = i
    }
    async _get(t) {
        const i = this.storage[t];
        return i === void 0 ? null : i
    }
    async _remove(t) {
        delete this.storage[t]
    }
    _addListener(t, i) { }
    _removeListener(t, i) { }
}
TE.type = "NONE";
const nv = TE;
function $o(s, t, i) {
    return `firebase:${s}:${t}:${i}`
}
class ka {
    constructor(t, i, l) {
        this.persistence = t,
            this.auth = i,
            this.userKey = l;
        const { config: o, name: u } = this.auth;
        this.fullUserKey = $o(this.userKey, o.apiKey, u),
            this.fullPersistenceKey = $o("persistence", o.apiKey, u),
            this.boundEventHandler = i._onStorageEvent.bind(i),
            this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(t) {
        return this.persistence._set(this.fullUserKey, t.toJSON())
    }
    async getCurrentUser() {
        const t = await this.persistence._get(this.fullUserKey);
        if (!t)
            return null;
        if (typeof t == "string") {
            const i = await bc(this.auth, {
                idToken: t
            }).catch(() => { }
            );
            return i ? xn._fromGetAccountInfoResponse(this.auth, i, t) : null
        }
        return xn._fromJSON(this.auth, t)
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(t) {
        if (this.persistence === t)
            return;
        const i = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
            this.persistence = t,
            i)
            return this.setCurrentUser(i)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(t, i, l = "authUser") {
        if (!i.length)
            return new ka(ri(nv), t, l);
        const o = (await Promise.all(i.map(async g => {
            if (await g._isAvailable())
                return g
        }
        ))).filter(g => g);
        let u = o[0] || ri(nv);
        const h = $o(l, t.config.apiKey, t.name);
        let d = null;
        for (const g of i)
            try {
                const S = await g._get(h);
                if (S) {
                    let v;
                    if (typeof S == "string") {
                        const E = await bc(t, {
                            idToken: S
                        }).catch(() => { }
                        );
                        if (!E)
                            break;
                        v = await xn._fromGetAccountInfoResponse(t, E, S)
                    } else
                        v = xn._fromJSON(t, S);
                    g !== u && (d = v),
                        u = g;
                    break
                }
            } catch { }
        const p = o.filter(g => g._shouldAllowMigration);
        return !u._shouldAllowMigration || !p.length ? new ka(u, t, l) : (u = p[0],
            d && await u._set(h, d.toJSON()),
            await Promise.all(i.map(async g => {
                if (g !== u)
                    try {
                        await g._remove(h)
                    } catch { }
            }
            )),
            new ka(u, t, l))
    }
}
function iv(s) {
    const t = s.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
    if (NE(t))
        return "IEMobile";
    if (t.includes("msie") || t.includes("trident/"))
        return "IE";
    if (t.includes("edge/"))
        return "Edge";
    if (xE(t))
        return "Firefox";
    if (t.includes("silk/"))
        return "Silk";
    if (DE(t))
        return "Blackberry";
    if (OE(t))
        return "Webos";
    if (wE(t))
        return "Safari";
    if ((t.includes("chrome/") || RE(t)) && !t.includes("edge/"))
        return "Chrome";
    if (AE(t))
        return "Android";
    {
        const i = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
            , l = s.match(i);
        if (l?.length === 2)
            return l[1]
    }
    return "Other"
}
function xE(s = kt()) {
    return /firefox\//i.test(s)
}
function wE(s = kt()) {
    const t = s.toLowerCase();
    return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
}
function RE(s = kt()) {
    return /crios\//i.test(s)
}
function NE(s = kt()) {
    return /iemobile/i.test(s)
}
function AE(s = kt()) {
    return /android/i.test(s)
}
function DE(s = kt()) {
    return /blackberry/i.test(s)
}
function OE(s = kt()) {
    return /webos/i.test(s)
}
function Fd(s = kt()) {
    return /iphone|ipad|ipod/i.test(s) || /macintosh/i.test(s) && /mobile/i.test(s)
}
function dA(s = kt()) {
    return Fd(s) && !!window.navigator?.standalone
}
function mA() {
    return cT() && document.documentMode === 10
}
function IE(s = kt()) {
    return Fd(s) || AE(s) || OE(s) || DE(s) || /windows phone/i.test(s) || NE(s)
}
function ME(s, t = []) {
    let i;
    switch (s) {
        case "Browser":
            i = iv(kt());
            break;
        case "Worker":
            i = `${iv(kt())}-${s}`;
            break;
        default:
            i = s
    }
    const l = t.length ? t.join(",") : "FirebaseCore-web";
    return `${i}/JsCore/${Ya}/${l}`
}
class pA {
    constructor(t) {
        this.auth = t,
            this.queue = []
    }
    pushCallback(t, i) {
        const l = u => new Promise((h, d) => {
            try {
                const p = t(u);
                h(p)
            } catch (p) {
                d(p)
            }
        }
        );
        l.onAbort = i,
            this.queue.push(l);
        const o = this.queue.length - 1;
        return () => {
            this.queue[o] = () => Promise.resolve()
        }
    }
    async runMiddleware(t) {
        if (this.auth.currentUser === t)
            return;
        const i = [];
        try {
            for (const l of this.queue)
                await l(t),
                    l.onAbort && i.push(l.onAbort)
        } catch (l) {
            i.reverse();
            for (const o of i)
                try {
                    o()
                } catch { }
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: l?.message
            })
        }
    }
}
async function gA(s, t = {}) {
    return Wa(s, "GET", "/v2/passwordPolicy", Pc(s, t))
}
const _A = 6;
class yA {
    constructor(t) {
        const i = t.customStrengthOptions;
        this.customStrengthOptions = {},
            this.customStrengthOptions.minPasswordLength = i.minPasswordLength ?? _A,
            i.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = i.maxPasswordLength),
            i.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = i.containsLowercaseCharacter),
            i.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = i.containsUppercaseCharacter),
            i.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = i.containsNumericCharacter),
            i.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = i.containsNonAlphanumericCharacter),
            this.enforcementState = t.enforcementState,
            this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
            this.allowedNonAlphanumericCharacters = t.allowedNonAlphanumericCharacters?.join("") ?? "",
            this.forceUpgradeOnSignin = t.forceUpgradeOnSignin ?? !1,
            this.schemaVersion = t.schemaVersion
    }
    validatePassword(t) {
        const i = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(t, i),
            this.validatePasswordCharacterOptions(t, i),
            i.isValid && (i.isValid = i.meetsMinPasswordLength ?? !0),
            i.isValid && (i.isValid = i.meetsMaxPasswordLength ?? !0),
            i.isValid && (i.isValid = i.containsLowercaseLetter ?? !0),
            i.isValid && (i.isValid = i.containsUppercaseLetter ?? !0),
            i.isValid && (i.isValid = i.containsNumericCharacter ?? !0),
            i.isValid && (i.isValid = i.containsNonAlphanumericCharacter ?? !0),
            i
    }
    validatePasswordLengthOptions(t, i) {
        const l = this.customStrengthOptions.minPasswordLength
            , o = this.customStrengthOptions.maxPasswordLength;
        l && (i.meetsMinPasswordLength = t.length >= l),
            o && (i.meetsMaxPasswordLength = t.length <= o)
    }
    validatePasswordCharacterOptions(t, i) {
        this.updatePasswordCharacterOptionsStatuses(i, !1, !1, !1, !1);
        let l;
        for (let o = 0; o < t.length; o++)
            l = t.charAt(o),
                this.updatePasswordCharacterOptionsStatuses(i, l >= "a" && l <= "z", l >= "A" && l <= "Z", l >= "0" && l <= "9", this.allowedNonAlphanumericCharacters.includes(l))
    }
    updatePasswordCharacterOptionsStatuses(t, i, l, o, u) {
        this.customStrengthOptions.containsLowercaseLetter && (t.containsLowercaseLetter || (t.containsLowercaseLetter = i)),
            this.customStrengthOptions.containsUppercaseLetter && (t.containsUppercaseLetter || (t.containsUppercaseLetter = l)),
            this.customStrengthOptions.containsNumericCharacter && (t.containsNumericCharacter || (t.containsNumericCharacter = o)),
            this.customStrengthOptions.containsNonAlphanumericCharacter && (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = u))
    }
}
class vA {
    constructor(t, i, l, o) {
        this.app = t,
            this.heartbeatServiceProvider = i,
            this.appCheckServiceProvider = l,
            this.config = o,
            this.currentUser = null,
            this.emulatorConfig = null,
            this.operations = Promise.resolve(),
            this.authStateSubscription = new sv(this),
            this.idTokenSubscription = new sv(this),
            this.beforeStateQueue = new pA(this),
            this.redirectUser = null,
            this.isProactiveRefreshEnabled = !1,
            this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
            this._canInitEmulator = !0,
            this._isInitialized = !1,
            this._deleted = !1,
            this._initializationPromise = null,
            this._popupRedirectResolver = null,
            this._errorFactory = _E,
            this._agentRecaptchaConfig = null,
            this._tenantRecaptchaConfigs = {},
            this._projectPasswordPolicy = null,
            this._tenantPasswordPolicies = {},
            this._resolvePersistenceManagerAvailable = void 0,
            this.lastNotifiedUid = void 0,
            this.languageCode = null,
            this.tenantId = null,
            this.settings = {
                appVerificationDisabledForTesting: !1
            },
            this.frameworks = [],
            this.name = t.name,
            this.clientVersion = o.sdkClientVersion,
            this._persistenceManagerAvailable = new Promise(u => this._resolvePersistenceManagerAvailable = u)
    }
    _initializeWithPersistence(t, i) {
        return i && (this._popupRedirectResolver = ri(i)),
            this._initializationPromise = this.queue(async () => {
                if (!this._deleted && (this.persistenceManager = await ka.create(this, t),
                    this._resolvePersistenceManagerAvailable?.(),
                    !this._deleted)) {
                    if (this._popupRedirectResolver?._shouldInitProactively)
                        try {
                            await this._popupRedirectResolver._initialize(this)
                        } catch { }
                    await this.initializeCurrentUser(i),
                        this.lastNotifiedUid = this.currentUser?.uid || null,
                        !this._deleted && (this._isInitialized = !0)
                }
            }
            ),
            this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        const t = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !t)) {
            if (this.currentUser && t && this.currentUser.uid === t.uid) {
                this._currentUser._assign(t),
                    await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(t, !0)
        }
    }
    async initializeCurrentUserFromIdToken(t) {
        try {
            const i = await bc(this, {
                idToken: t
            })
                , l = await xn._fromGetAccountInfoResponse(this, i, t);
            await this.directlySetCurrentUser(l)
        } catch (i) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", i),
                await this.directlySetCurrentUser(null)
        }
    }
    async initializeCurrentUser(t) {
        if (En(this.app)) {
            const u = this.app.settings.authIdToken;
            return u ? new Promise(h => {
                setTimeout(() => this.initializeCurrentUserFromIdToken(u).then(h, h))
            }
            ) : this.directlySetCurrentUser(null)
        }
        const i = await this.assertedPersistence.getCurrentUser();
        let l = i
            , o = !1;
        if (t && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const u = this.redirectUser?._redirectEventId
                , h = l?._redirectEventId
                , d = await this.tryRedirectSignIn(t);
            (!u || u === h) && d?.user && (l = d.user,
                o = !0)
        }
        if (!l)
            return this.directlySetCurrentUser(null);
        if (!l._redirectEventId) {
            if (o)
                try {
                    await this.beforeStateQueue.runMiddleware(l)
                } catch (u) {
                    l = i,
                        this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(u))
                }
            return l ? this.reloadAndSetCurrentUserOrClear(l) : this.directlySetCurrentUser(null)
        }
        return ue(this._popupRedirectResolver, this, "argument-error"),
            await this.getOrInitRedirectPersistenceManager(),
            this.redirectUser && this.redirectUser._redirectEventId === l._redirectEventId ? this.directlySetCurrentUser(l) : this.reloadAndSetCurrentUserOrClear(l)
    }
    async tryRedirectSignIn(t) {
        let i = null;
        try {
            i = await this._popupRedirectResolver._completeRedirectFn(this, t, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return i
    }
    async reloadAndSetCurrentUserOrClear(t) {
        try {
            await Cc(t)
        } catch (i) {
            if (i?.code !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(t)
    }
    useDeviceLanguage() {
        this.languageCode = eA()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(t) {
        if (En(this.app))
            return Promise.reject(ts(this));
        const i = t ? mn(t) : null;
        return i && ue(i.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
            this._updateCurrentUser(i && i._clone(this))
    }
    async _updateCurrentUser(t, i = !1) {
        if (!this._deleted)
            return t && ue(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
                i || await this.beforeStateQueue.runMiddleware(t),
                this.queue(async () => {
                    await this.directlySetCurrentUser(t),
                        this.notifyAuthListeners()
                }
                )
    }
    async signOut() {
        return En(this.app) ? Promise.reject(ts(this)) : (await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
            this._updateCurrentUser(null, !0))
    }
    setPersistence(t) {
        return En(this.app) ? Promise.reject(ts(this)) : this.queue(async () => {
            await this.assertedPersistence.setPersistence(ri(t))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(t) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const i = this._getPasswordPolicyInternal();
        return i.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : i.validatePassword(t)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const t = await gA(this)
            , i = new yA(t);
        this.tenantId === null ? this._projectPasswordPolicy = i : this._tenantPasswordPolicies[this.tenantId] = i
    }
    _getPersistenceType() {
        return this.assertedPersistence.persistence.type
    }
    _getPersistence() {
        return this.assertedPersistence.persistence
    }
    _updateErrorMap(t) {
        this._errorFactory = new Er("auth", "Firebase", t())
    }
    onAuthStateChanged(t, i, l) {
        return this.registerStateListener(this.authStateSubscription, t, i, l)
    }
    beforeAuthStateChanged(t, i) {
        return this.beforeStateQueue.pushCallback(t, i)
    }
    onIdTokenChanged(t, i, l) {
        return this.registerStateListener(this.idTokenSubscription, t, i, l)
    }
    authStateReady() {
        return new Promise((t, i) => {
            if (this.currentUser)
                t();
            else {
                const l = this.onAuthStateChanged(() => {
                    l(),
                        t()
                }
                    , i)
            }
        }
        )
    }
    async revokeAccessToken(t) {
        if (this.currentUser) {
            const i = await this.currentUser.getIdToken()
                , l = {
                    providerId: "apple.com",
                    tokenType: "ACCESS_TOKEN",
                    token: t,
                    idToken: i
                };
            this.tenantId != null && (l.tenantId = this.tenantId),
                await hA(this, l)
        }
    }
    toJSON() {
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: this._currentUser?.toJSON()
        }
    }
    async _setRedirectUser(t, i) {
        const l = await this.getOrInitRedirectPersistenceManager(i);
        return t === null ? l.removeCurrentUser() : l.setCurrentUser(t)
    }
    async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
            const i = t && ri(t) || this._popupRedirectResolver;
            ue(i, this, "argument-error"),
                this.redirectPersistenceManager = await ka.create(this, [ri(i._redirectPersistence)], "redirectUser"),
                this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(t) {
        return this._isInitialized && await this.queue(async () => { }
        ),
            this._currentUser?._redirectEventId === t ? this._currentUser : this.redirectUser?._redirectEventId === t ? this.redirectUser : null
    }
    async _persistUserIfCurrent(t) {
        if (t === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(t))
    }
    _notifyListenersIfCurrent(t) {
        t === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
            this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
            this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        const t = this.currentUser?.uid ?? null;
        this.lastNotifiedUid !== t && (this.lastNotifiedUid = t,
            this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(t, i, l, o) {
        if (this._deleted)
            return () => { }
                ;
        const u = typeof i == "function" ? i : i.next.bind(i);
        let h = !1;
        const d = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (ue(d, this, "internal-error"),
            d.then(() => {
                h || u(this.currentUser)
            }
            ),
            typeof i == "function") {
            const p = t.addObserver(i, l, o);
            return () => {
                h = !0,
                    p()
            }
        } else {
            const p = t.addObserver(i);
            return () => {
                h = !0,
                    p()
            }
        }
    }
    async directlySetCurrentUser(t) {
        this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(),
            t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
            this.currentUser = t,
            t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(t) {
        return this.operations = this.operations.then(t, t),
            this.operations
    }
    get assertedPersistence() {
        return ue(this.persistenceManager, this, "internal-error"),
            this.persistenceManager
    }
    _logFramework(t) {
        !t || this.frameworks.includes(t) || (this.frameworks.push(t),
            this.frameworks.sort(),
            this.clientVersion = ME(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        const t = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
        const i = await this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })?.getHeartbeatsHeader();
        i && (t["X-Firebase-Client"] = i);
        const l = await this._getAppCheckToken();
        return l && (t["X-Firebase-AppCheck"] = l),
            t
    }
    async _getAppCheckToken() {
        if (En(this.app) && this.app.settings.appCheckToken)
            return this.app.settings.appCheckToken;
        const t = await this.appCheckServiceProvider.getImmediate({
            optional: !0
        })?.getToken();
        return t?.error && ZN(`Error while retrieving App Check token: ${t.error}`),
            t?.token
    }
}
function qc(s) {
    return mn(s)
}
class sv {
    constructor(t) {
        this.auth = t,
            this.observer = null,
            this.addObserver = vT(i => this.observer = i)
    }
    get next() {
        return ue(this.observer, this.auth, "internal-error"),
            this.observer.next.bind(this.observer)
    }
}
let Yd = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function SA(s) {
    Yd = s
}
function EA(s) {
    return Yd.loadJS(s)
}
function bA() {
    return Yd.gapiScript
}
function CA(s) {
    return `__${s}${Math.floor(Math.random() * 1e6)}`
}
function TA(s, t) {
    const i = fd(s, "auth");
    if (i.isInitialized()) {
        const o = i.getImmediate()
            , u = i.getOptions();
        if (Ms(u, t ?? {}))
            return o;
        hi(o, "already-initialized")
    }
    return i.initialize({
        options: t
    })
}
function xA(s, t) {
    const i = t?.persistence || []
        , l = (Array.isArray(i) ? i : [i]).map(ri);
    t?.errorMap && s._updateErrorMap(t.errorMap),
        s._initializeWithPersistence(l, t?.popupRedirectResolver)
}
function wA(s, t, i) {
    const l = qc(s);
    ue(/^https?:\/\//.test(t), l, "invalid-emulator-scheme");
    const o = !1
        , u = kE(t)
        , { host: h, port: d } = RA(t)
        , p = d === null ? "" : `:${d}`
        , g = {
            url: `${u}//${h}${p}/`
        }
        , S = Object.freeze({
            host: h,
            port: d,
            protocol: u.replace(":", ""),
            options: Object.freeze({
                disableWarnings: o
            })
        });
    if (!l._canInitEmulator) {
        ue(l.config.emulator && l.emulatorConfig, l, "emulator-config-failed"),
            ue(Ms(g, l.config.emulator) && Ms(S, l.emulatorConfig), l, "emulator-config-failed");
        return
    }
    l.config.emulator = g,
        l.emulatorConfig = S,
        l.settings.appVerificationDisabledForTesting = !0,
        Ga(h) ? (qv(`${u}//${h}${p}`),
            Vv("Auth", !0)) : NA()
}
function kE(s) {
    const t = s.indexOf(":");
    return t < 0 ? "" : s.substr(0, t + 1)
}
function RA(s) {
    const t = kE(s)
        , i = /(\/\/)?([^?#/]+)/.exec(s.substr(t.length));
    if (!i)
        return {
            host: "",
            port: null
        };
    const l = i[2].split("@").pop() || ""
        , o = /^(\[[^\]]+\])(:|$)/.exec(l);
    if (o) {
        const u = o[1];
        return {
            host: u,
            port: av(l.substr(u.length + 1))
        }
    } else {
        const [u, h] = l.split(":");
        return {
            host: u,
            port: av(h)
        }
    }
}
function av(s) {
    if (!s)
        return null;
    const t = Number(s);
    return isNaN(t) ? null : t
}
function NA() {
    function s() {
        const t = document.createElement("p")
            , i = t.style;
        t.innerText = "Running in emulator mode. Do not use with production credentials.",
            i.position = "fixed",
            i.width = "100%",
            i.backgroundColor = "#ffffff",
            i.border = ".1em solid #000000",
            i.color = "#b50000",
            i.bottom = "0px",
            i.left = "0px",
            i.margin = "0px",
            i.zIndex = "10000",
            i.textAlign = "center",
            t.classList.add("firebase-emulator-warning"),
            document.body.appendChild(t)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
        typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", s) : s())
}
class LE {
    constructor(t, i) {
        this.providerId = t,
            this.signInMethod = i
    }
    toJSON() {
        return li("not implemented")
    }
    _getIdTokenResponse(t) {
        return li("not implemented")
    }
    _linkToIdToken(t, i) {
        return li("not implemented")
    }
    _getReauthenticationResolver(t) {
        return li("not implemented")
    }
}
async function La(s, t) {
    return EE(s, "POST", "/v1/accounts:signInWithIdp", Pc(s, t))
}
const AA = "http://localhost";
class zs extends LE {
    constructor() {
        super(...arguments),
            this.pendingToken = null
    }
    static _fromParams(t) {
        const i = new zs(t.providerId, t.signInMethod);
        return t.idToken || t.accessToken ? (t.idToken && (i.idToken = t.idToken),
            t.accessToken && (i.accessToken = t.accessToken),
            t.nonce && !t.pendingToken && (i.nonce = t.nonce),
            t.pendingToken && (i.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (i.accessToken = t.oauthToken,
                i.secret = t.oauthTokenSecret) : hi("argument-error"),
            i
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(t) {
        const i = typeof t == "string" ? JSON.parse(t) : t
            , { providerId: l, signInMethod: o, ...u } = i;
        if (!l || !o)
            return null;
        const h = new zs(l, o);
        return h.idToken = u.idToken || void 0,
            h.accessToken = u.accessToken || void 0,
            h.secret = u.secret,
            h.nonce = u.nonce,
            h.pendingToken = u.pendingToken || null,
            h
    }
    _getIdTokenResponse(t) {
        const i = this.buildRequest();
        return La(t, i)
    }
    _linkToIdToken(t, i) {
        const l = this.buildRequest();
        return l.idToken = i,
            La(t, l)
    }
    _getReauthenticationResolver(t) {
        const i = this.buildRequest();
        return i.autoCreate = !1,
            La(t, i)
    }
    buildRequest() {
        const t = {
            requestUri: AA,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            t.pendingToken = this.pendingToken;
        else {
            const i = {};
            this.idToken && (i.id_token = this.idToken),
                this.accessToken && (i.access_token = this.accessToken),
                this.secret && (i.oauth_token_secret = this.secret),
                i.providerId = this.providerId,
                this.nonce && !this.pendingToken && (i.nonce = this.nonce),
                t.postBody = Fa(i)
        }
        return t
    }
}
class UE {
    constructor(t) {
        this.providerId = t,
            this.defaultLanguageCode = null,
            this.customParameters = {}
    }
    setDefaultLanguage(t) {
        this.defaultLanguageCode = t
    }
    setCustomParameters(t) {
        return this.customParameters = t,
            this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
class Ar extends UE {
    constructor() {
        super(...arguments),
            this.scopes = []
    }
    addScope(t) {
        return this.scopes.includes(t) || this.scopes.push(t),
            this
    }
    getScopes() {
        return [...this.scopes]
    }
}
class Yi extends Ar {
    constructor() {
        super("facebook.com")
    }
    static credential(t) {
        return zs._fromParams({
            providerId: Yi.PROVIDER_ID,
            signInMethod: Yi.FACEBOOK_SIGN_IN_METHOD,
            accessToken: t
        })
    }
    static credentialFromResult(t) {
        return Yi.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Yi.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
            return null;
        try {
            return Yi.credential(t.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Yi.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Yi.PROVIDER_ID = "facebook.com";
class Qi extends Ar {
    constructor() {
        super("google.com"),
            this.addScope("profile")
    }
    static credential(t, i) {
        return zs._fromParams({
            providerId: Qi.PROVIDER_ID,
            signInMethod: Qi.GOOGLE_SIGN_IN_METHOD,
            idToken: t,
            accessToken: i
        })
    }
    static credentialFromResult(t) {
        return Qi.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Qi.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t)
            return null;
        const { oauthIdToken: i, oauthAccessToken: l } = t;
        if (!i && !l)
            return null;
        try {
            return Qi.credential(i, l)
        } catch {
            return null
        }
    }
}
Qi.GOOGLE_SIGN_IN_METHOD = "google.com";
Qi.PROVIDER_ID = "google.com";
class Ki extends Ar {
    constructor() {
        super("github.com")
    }
    static credential(t) {
        return zs._fromParams({
            providerId: Ki.PROVIDER_ID,
            signInMethod: Ki.GITHUB_SIGN_IN_METHOD,
            accessToken: t
        })
    }
    static credentialFromResult(t) {
        return Ki.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Ki.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
            return null;
        try {
            return Ki.credential(t.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Ki.GITHUB_SIGN_IN_METHOD = "github.com";
Ki.PROVIDER_ID = "github.com";
class Xi extends Ar {
    constructor() {
        super("twitter.com")
    }
    static credential(t, i) {
        return zs._fromParams({
            providerId: Xi.PROVIDER_ID,
            signInMethod: Xi.TWITTER_SIGN_IN_METHOD,
            oauthToken: t,
            oauthTokenSecret: i
        })
    }
    static credentialFromResult(t) {
        return Xi.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Xi.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t)
            return null;
        const { oauthAccessToken: i, oauthTokenSecret: l } = t;
        if (!i || !l)
            return null;
        try {
            return Xi.credential(i, l)
        } catch {
            return null
        }
    }
}
Xi.TWITTER_SIGN_IN_METHOD = "twitter.com";
Xi.PROVIDER_ID = "twitter.com";
async function DA(s, t) {
    return EE(s, "POST", "/v1/accounts:signUp", Pc(s, t))
}
class as {
    constructor(t) {
        this.user = t.user,
            this.providerId = t.providerId,
            this._tokenResponse = t._tokenResponse,
            this.operationType = t.operationType
    }
    static async _fromIdTokenResponse(t, i, l, o = !1) {
        const u = await xn._fromIdTokenResponse(t, l, o)
            , h = lv(l);
        return new as({
            user: u,
            providerId: h,
            _tokenResponse: l,
            operationType: i
        })
    }
    static async _forOperation(t, i, l) {
        await t._updateTokensIfNecessary(l, !0);
        const o = lv(l);
        return new as({
            user: t,
            providerId: o,
            _tokenResponse: l,
            operationType: i
        })
    }
}
function lv(s) {
    return s.providerId ? s.providerId : "phoneNumber" in s ? "phone" : null
}
async function OA(s) {
    if (En(s.app))
        return Promise.reject(ts(s));
    const t = qc(s);
    if (await t._initializationPromise,
        t.currentUser?.isAnonymous)
        return new as({
            user: t.currentUser,
            providerId: null,
            operationType: "signIn"
        });
    const i = await DA(t, {
        returnSecureToken: !0
    })
        , l = await as._fromIdTokenResponse(t, "signIn", i, !0);
    return await t._updateCurrentUser(l.user),
        l
}
class Tc extends ls {
    constructor(t, i, l, o) {
        super(i.code, i.message),
            this.operationType = l,
            this.user = o,
            Object.setPrototypeOf(this, Tc.prototype),
            this.customData = {
                appName: t.name,
                tenantId: t.tenantId ?? void 0,
                _serverResponse: i.customData._serverResponse,
                operationType: l
            }
    }
    static _fromErrorAndOperation(t, i, l, o) {
        return new Tc(t, i, l, o)
    }
}
function jE(s, t, i, l) {
    return (t === "reauthenticate" ? i._getReauthenticationResolver(s) : i._getIdTokenResponse(s)).catch(u => {
        throw u.code === "auth/multi-factor-auth-required" ? Tc._fromErrorAndOperation(s, u, t, l) : u
    }
    )
}
async function IA(s, t, i = !1) {
    const l = await _r(s, t._linkToIdToken(s.auth, await s.getIdToken()), i);
    return as._forOperation(s, "link", l)
}
async function MA(s, t, i = !1) {
    const { auth: l } = s;
    if (En(l.app))
        return Promise.reject(ts(l));
    const o = "reauthenticate";
    try {
        const u = await _r(s, jE(l, o, t, s), i);
        ue(u.idToken, l, "internal-error");
        const h = Gd(u.idToken);
        ue(h, l, "internal-error");
        const { sub: d } = h;
        return ue(s.uid === d, l, "user-mismatch"),
            as._forOperation(s, o, u)
    } catch (u) {
        throw u?.code === "auth/user-not-found" && hi(l, "user-mismatch"),
        u
    }
}
async function kA(s, t, i = !1) {
    if (En(s.app))
        return Promise.reject(ts(s));
    const l = "signIn"
        , o = await jE(s, l, t)
        , u = await as._fromIdTokenResponse(s, l, o);
    return i || await s._updateCurrentUser(u.user),
        u
}
function LA(s, t, i, l) {
    return mn(s).onIdTokenChanged(t, i, l)
}
function UA(s, t, i) {
    return mn(s).beforeAuthStateChanged(t, i)
}
const xc = "__sak";
class zE {
    constructor(t, i) {
        this.storageRetriever = t,
            this.type = i
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(xc, "1"),
                this.storage.removeItem(xc),
                Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(t, i) {
        return this.storage.setItem(t, JSON.stringify(i)),
            Promise.resolve()
    }
    _get(t) {
        const i = this.storage.getItem(t);
        return Promise.resolve(i ? JSON.parse(i) : null)
    }
    _remove(t) {
        return this.storage.removeItem(t),
            Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
const jA = 1e3
    , zA = 10;
class HE extends zE {
    constructor() {
        super(() => window.localStorage, "LOCAL"),
            this.boundEventHandler = (t, i) => this.onStorageEvent(t, i),
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.fallbackToPolling = IE(),
            this._shouldAllowMigration = !0
    }
    forAllChangedKeys(t) {
        for (const i of Object.keys(this.listeners)) {
            const l = this.storage.getItem(i)
                , o = this.localCache[i];
            l !== o && t(i, o, l)
        }
    }
    onStorageEvent(t, i = !1) {
        if (!t.key) {
            this.forAllChangedKeys((h, d, p) => {
                this.notifyListeners(h, p)
            }
            );
            return
        }
        const l = t.key;
        i ? this.detachListener() : this.stopPolling();
        const o = () => {
            const h = this.storage.getItem(l);
            !i && this.localCache[l] === h || this.notifyListeners(l, h)
        }
            , u = this.storage.getItem(l);
        mA() && u !== t.newValue && t.newValue !== t.oldValue ? setTimeout(o, zA) : o()
    }
    notifyListeners(t, i) {
        this.localCache[t] = i;
        const l = this.listeners[t];
        if (l)
            for (const o of Array.from(l))
                o(i && JSON.parse(i))
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(() => {
                this.forAllChangedKeys((t, i, l) => {
                    this.onStorageEvent(new StorageEvent("storage", {
                        key: t,
                        oldValue: i,
                        newValue: l
                    }), !0)
                }
                )
            }
                , jA)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(t, i) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
            this.listeners[t] || (this.listeners[t] = new Set,
                this.localCache[t] = this.storage.getItem(t)),
            this.listeners[t].add(i)
    }
    _removeListener(t, i) {
        this.listeners[t] && (this.listeners[t].delete(i),
            this.listeners[t].size === 0 && delete this.listeners[t]),
            Object.keys(this.listeners).length === 0 && (this.detachListener(),
                this.stopPolling())
    }
    async _set(t, i) {
        await super._set(t, i),
            this.localCache[t] = JSON.stringify(i)
    }
    async _get(t) {
        const i = await super._get(t);
        return this.localCache[t] = JSON.stringify(i),
            i
    }
    async _remove(t) {
        await super._remove(t),
            delete this.localCache[t]
    }
}
HE.type = "LOCAL";
const HA = HE;
class BE extends zE {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(t, i) { }
    _removeListener(t, i) { }
}
BE.type = "SESSION";
const PE = BE;
function BA(s) {
    return Promise.all(s.map(async t => {
        try {
            return {
                fulfilled: !0,
                value: await t
            }
        } catch (i) {
            return {
                fulfilled: !1,
                reason: i
            }
        }
    }
    ))
}
class Vc {
    constructor(t) {
        this.eventTarget = t,
            this.handlersMap = {},
            this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(t) {
        const i = this.receivers.find(o => o.isListeningto(t));
        if (i)
            return i;
        const l = new Vc(t);
        return this.receivers.push(l),
            l
    }
    isListeningto(t) {
        return this.eventTarget === t
    }
    async handleEvent(t) {
        const i = t
            , { eventId: l, eventType: o, data: u } = i.data
            , h = this.handlersMap[o];
        if (!h?.size)
            return;
        i.ports[0].postMessage({
            status: "ack",
            eventId: l,
            eventType: o
        });
        const d = Array.from(h).map(async g => g(i.origin, u))
            , p = await BA(d);
        i.ports[0].postMessage({
            status: "done",
            eventId: l,
            eventType: o,
            response: p
        })
    }
    _subscribe(t, i) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
            this.handlersMap[t] || (this.handlersMap[t] = new Set),
            this.handlersMap[t].add(i)
    }
    _unsubscribe(t, i) {
        this.handlersMap[t] && i && this.handlersMap[t].delete(i),
            (!i || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
            Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
Vc.receivers = [];
function Qd(s = "", t = 10) {
    let i = "";
    for (let l = 0; l < t; l++)
        i += Math.floor(Math.random() * 10);
    return s + i
}
class PA {
    constructor(t) {
        this.target = t,
            this.handlers = new Set
    }
    removeMessageHandler(t) {
        t.messageChannel && (t.messageChannel.port1.removeEventListener("message", t.onMessage),
            t.messageChannel.port1.close()),
            this.handlers.delete(t)
    }
    async _send(t, i, l = 50) {
        const o = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!o)
            throw new Error("connection_unavailable");
        let u, h;
        return new Promise((d, p) => {
            const g = Qd("", 20);
            o.port1.start();
            const S = setTimeout(() => {
                p(new Error("unsupported_event"))
            }
                , l);
            h = {
                messageChannel: o,
                onMessage(v) {
                    const E = v;
                    if (E.data.eventId === g)
                        switch (E.data.status) {
                            case "ack":
                                clearTimeout(S),
                                    u = setTimeout(() => {
                                        p(new Error("timeout"))
                                    }
                                        , 3e3);
                                break;
                            case "done":
                                clearTimeout(u),
                                    d(E.data.response);
                                break;
                            default:
                                clearTimeout(S),
                                    clearTimeout(u),
                                    p(new Error("invalid_response"));
                                break
                        }
                }
            },
                this.handlers.add(h),
                o.port1.addEventListener("message", h.onMessage),
                this.target.postMessage({
                    eventType: t,
                    eventId: g,
                    data: i
                }, [o.port2])
        }
        ).finally(() => {
            h && this.removeMessageHandler(h)
        }
        )
    }
}
function jn() {
    return window
}
function qA(s) {
    jn().location.href = s
}
function qE() {
    return typeof jn().WorkerGlobalScope < "u" && typeof jn().importScripts == "function"
}
async function VA() {
    if (!navigator?.serviceWorker)
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function GA() {
    return navigator?.serviceWorker?.controller || null
}
function FA() {
    return qE() ? self : null
}
const VE = "firebaseLocalStorageDb"
    , YA = 1
    , wc = "firebaseLocalStorage"
    , GE = "fbase_key";
class Dr {
    constructor(t) {
        this.request = t
    }
    toPromise() {
        return new Promise((t, i) => {
            this.request.addEventListener("success", () => {
                t(this.request.result)
            }
            ),
                this.request.addEventListener("error", () => {
                    i(this.request.error)
                }
                )
        }
        )
    }
}
function Gc(s, t) {
    return s.transaction([wc], t ? "readwrite" : "readonly").objectStore(wc)
}
function QA() {
    const s = indexedDB.deleteDatabase(VE);
    return new Dr(s).toPromise()
}
function Wh() {
    const s = indexedDB.open(VE, YA);
    return new Promise((t, i) => {
        s.addEventListener("error", () => {
            i(s.error)
        }
        ),
            s.addEventListener("upgradeneeded", () => {
                const l = s.result;
                try {
                    l.createObjectStore(wc, {
                        keyPath: GE
                    })
                } catch (o) {
                    i(o)
                }
            }
            ),
            s.addEventListener("success", async () => {
                const l = s.result;
                l.objectStoreNames.contains(wc) ? t(l) : (l.close(),
                    await QA(),
                    t(await Wh()))
            }
            )
    }
    )
}
async function rv(s, t, i) {
    const l = Gc(s, !0).put({
        [GE]: t,
        value: i
    });
    return new Dr(l).toPromise()
}
async function KA(s, t) {
    const i = Gc(s, !1).get(t)
        , l = await new Dr(i).toPromise();
    return l === void 0 ? null : l.value
}
function ov(s, t) {
    const i = Gc(s, !0).delete(t);
    return new Dr(i).toPromise()
}
const XA = 800
    , WA = 3;
class FE {
    constructor() {
        this.type = "LOCAL",
            this._shouldAllowMigration = !0,
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.pendingWrites = 0,
            this.receiver = null,
            this.sender = null,
            this.serviceWorkerReceiverAvailable = !1,
            this.activeServiceWorker = null,
            this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => { }
                , () => { }
            )
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await Wh(),
            this.db)
    }
    async _withRetries(t) {
        let i = 0;
        for (; ;)
            try {
                const l = await this._openDb();
                return await t(l)
            } catch (l) {
                if (i++ > WA)
                    throw l;
                this.db && (this.db.close(),
                    this.db = void 0)
            }
    }
    async initializeServiceWorkerMessaging() {
        return qE() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = Vc._getInstance(FA()),
            this.receiver._subscribe("keyChanged", async (t, i) => ({
                keyProcessed: (await this._poll()).includes(i.key)
            })),
            this.receiver._subscribe("ping", async (t, i) => ["keyChanged"])
    }
    async initializeSender() {
        if (this.activeServiceWorker = await VA(),
            !this.activeServiceWorker)
            return;
        this.sender = new PA(this.activeServiceWorker);
        const t = await this.sender._send("ping", {}, 800);
        t && t[0]?.fulfilled && t[0]?.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(t) {
        if (!(!this.sender || !this.activeServiceWorker || GA() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: t
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch { }
    }
    async _isAvailable() {
        try {
            if (!indexedDB)
                return !1;
            const t = await Wh();
            return await rv(t, xc, "1"),
                await ov(t, xc),
                !0
        } catch { }
        return !1
    }
    async _withPendingWrite(t) {
        this.pendingWrites++;
        try {
            await t()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(t, i) {
        return this._withPendingWrite(async () => (await this._withRetries(l => rv(l, t, i)),
            this.localCache[t] = i,
            this.notifyServiceWorker(t)))
    }
    async _get(t) {
        const i = await this._withRetries(l => KA(l, t));
        return this.localCache[t] = i,
            i
    }
    async _remove(t) {
        return this._withPendingWrite(async () => (await this._withRetries(i => ov(i, t)),
            delete this.localCache[t],
            this.notifyServiceWorker(t)))
    }
    async _poll() {
        const t = await this._withRetries(o => {
            const u = Gc(o, !1).getAll();
            return new Dr(u).toPromise()
        }
        );
        if (!t)
            return [];
        if (this.pendingWrites !== 0)
            return [];
        const i = []
            , l = new Set;
        if (t.length !== 0)
            for (const { fbase_key: o, value: u } of t)
                l.add(o),
                    JSON.stringify(this.localCache[o]) !== JSON.stringify(u) && (this.notifyListeners(o, u),
                        i.push(o));
        for (const o of Object.keys(this.localCache))
            this.localCache[o] && !l.has(o) && (this.notifyListeners(o, null),
                i.push(o));
        return i
    }
    notifyListeners(t, i) {
        this.localCache[t] = i;
        const l = this.listeners[t];
        if (l)
            for (const o of Array.from(l))
                o(i)
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(async () => this._poll(), XA)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    _addListener(t, i) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
            this.listeners[t] || (this.listeners[t] = new Set,
                this._get(t)),
            this.listeners[t].add(i)
    }
    _removeListener(t, i) {
        this.listeners[t] && (this.listeners[t].delete(i),
            this.listeners[t].size === 0 && delete this.listeners[t]),
            Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
FE.type = "LOCAL";
const ZA = FE;
new Nr(3e4, 6e4);
function JA(s, t) {
    return t ? ri(t) : (ue(s._popupRedirectResolver, s, "argument-error"),
        s._popupRedirectResolver)
}
class Kd extends LE {
    constructor(t) {
        super("custom", "custom"),
            this.params = t
    }
    _getIdTokenResponse(t) {
        return La(t, this._buildIdpRequest())
    }
    _linkToIdToken(t, i) {
        return La(t, this._buildIdpRequest(i))
    }
    _getReauthenticationResolver(t) {
        return La(t, this._buildIdpRequest())
    }
    _buildIdpRequest(t) {
        const i = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return t && (i.idToken = t),
            i
    }
}
function $A(s) {
    return kA(s.auth, new Kd(s), s.bypassAuthState)
}
function e2(s) {
    const { auth: t, user: i } = s;
    return ue(i, t, "internal-error"),
        MA(i, new Kd(s), s.bypassAuthState)
}
async function t2(s) {
    const { auth: t, user: i } = s;
    return ue(i, t, "internal-error"),
        IA(i, new Kd(s), s.bypassAuthState)
}
class YE {
    constructor(t, i, l, o, u = !1) {
        this.auth = t,
            this.resolver = l,
            this.user = o,
            this.bypassAuthState = u,
            this.pendingPromise = null,
            this.eventManager = null,
            this.filter = Array.isArray(i) ? i : [i]
    }
    execute() {
        return new Promise(async (t, i) => {
            this.pendingPromise = {
                resolve: t,
                reject: i
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                    await this.onExecution(),
                    this.eventManager.registerConsumer(this)
            } catch (l) {
                this.reject(l)
            }
        }
        )
    }
    async onAuthEvent(t) {
        const { urlResponse: i, sessionId: l, postBody: o, tenantId: u, error: h, type: d } = t;
        if (h) {
            this.reject(h);
            return
        }
        const p = {
            auth: this.auth,
            requestUri: i,
            sessionId: l,
            tenantId: u || void 0,
            postBody: o || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(d)(p))
        } catch (g) {
            this.reject(g)
        }
    }
    onError(t) {
        this.reject(t)
    }
    getIdpTask(t) {
        switch (t) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return $A;
            case "linkViaPopup":
            case "linkViaRedirect":
                return t2;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return e2;
            default:
                hi(this.auth, "internal-error")
        }
    }
    resolve(t) {
        di(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.resolve(t),
            this.unregisterAndCleanUp()
    }
    reject(t) {
        di(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.reject(t),
            this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
            this.pendingPromise = null,
            this.cleanUp()
    }
}
const n2 = new Nr(2e3, 1e4);
class Da extends YE {
    constructor(t, i, l, o, u) {
        super(t, i, o, u),
            this.provider = l,
            this.authWindow = null,
            this.pollId = null,
            Da.currentPopupAction && Da.currentPopupAction.cancel(),
            Da.currentPopupAction = this
    }
    async executeNotNull() {
        const t = await this.execute();
        return ue(t, this.auth, "internal-error"),
            t
    }
    async onExecution() {
        di(this.filter.length === 1, "Popup operations only handle one event");
        const t = Qd();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t),
            this.authWindow.associatedEvent = t,
            this.resolver._originValidation(this.auth).catch(i => {
                this.reject(i)
            }
            ),
            this.resolver._isIframeWebStorageSupported(this.auth, i => {
                i || this.reject(Un(this.auth, "web-storage-unsupported"))
            }
            ),
            this.pollUserCancellation()
    }
    get eventId() {
        return this.authWindow?.associatedEvent || null
    }
    cancel() {
        this.reject(Un(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
            this.pollId && window.clearTimeout(this.pollId),
            this.authWindow = null,
            this.pollId = null,
            Da.currentPopupAction = null
    }
    pollUserCancellation() {
        const t = () => {
            if (this.authWindow?.window?.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null,
                        this.reject(Un(this.auth, "popup-closed-by-user"))
                }
                    , 8e3);
                return
            }
            this.pollId = window.setTimeout(t, n2.get())
        }
            ;
        t()
    }
}
Da.currentPopupAction = null;
const i2 = "pendingRedirect"
    , ec = new Map;
class s2 extends YE {
    constructor(t, i, l = !1) {
        super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], i, void 0, l),
            this.eventId = null
    }
    async execute() {
        let t = ec.get(this.auth._key());
        if (!t) {
            try {
                const l = await a2(this.resolver, this.auth) ? await super.execute() : null;
                t = () => Promise.resolve(l)
            } catch (i) {
                t = () => Promise.reject(i)
            }
            ec.set(this.auth._key(), t)
        }
        return this.bypassAuthState || ec.set(this.auth._key(), () => Promise.resolve(null)),
            t()
    }
    async onAuthEvent(t) {
        if (t.type === "signInViaRedirect")
            return super.onAuthEvent(t);
        if (t.type === "unknown") {
            this.resolve(null);
            return
        }
        if (t.eventId) {
            const i = await this.auth._redirectUserForId(t.eventId);
            if (i)
                return this.user = i,
                    super.onAuthEvent(t);
            this.resolve(null)
        }
    }
    async onExecution() { }
    cleanUp() { }
}
async function a2(s, t) {
    const i = o2(t)
        , l = r2(s);
    if (!await l._isAvailable())
        return !1;
    const o = await l._get(i) === "true";
    return await l._remove(i),
        o
}
function l2(s, t) {
    ec.set(s._key(), t)
}
function r2(s) {
    return ri(s._redirectPersistence)
}
function o2(s) {
    return $o(i2, s.config.apiKey, s.name)
}
async function c2(s, t, i = !1) {
    if (En(s.app))
        return Promise.reject(ts(s));
    const l = qc(s)
        , o = JA(l, t)
        , h = await new s2(l, o, i).execute();
    return h && !i && (delete h.user._redirectEventId,
        await l._persistUserIfCurrent(h.user),
        await l._setRedirectUser(null, t)),
        h
}
const u2 = 600 * 1e3;
class f2 {
    constructor(t) {
        this.auth = t,
            this.cachedEventUids = new Set,
            this.consumers = new Set,
            this.queuedRedirectEvent = null,
            this.hasHandledPotentialRedirect = !1,
            this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(t) {
        this.consumers.add(t),
            this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, t) && (this.sendToConsumer(this.queuedRedirectEvent, t),
                this.saveEventToCache(this.queuedRedirectEvent),
                this.queuedRedirectEvent = null)
    }
    unregisterConsumer(t) {
        this.consumers.delete(t)
    }
    onEvent(t) {
        if (this.hasEventBeenHandled(t))
            return !1;
        let i = !1;
        return this.consumers.forEach(l => {
            this.isEventForConsumer(t, l) && (i = !0,
                this.sendToConsumer(t, l),
                this.saveEventToCache(t))
        }
        ),
            this.hasHandledPotentialRedirect || !h2(t) || (this.hasHandledPotentialRedirect = !0,
                i || (this.queuedRedirectEvent = t,
                    i = !0)),
            i
    }
    sendToConsumer(t, i) {
        if (t.error && !QE(t)) {
            const l = t.error.code?.split("auth/")[1] || "internal-error";
            i.onError(Un(this.auth, l))
        } else
            i.onAuthEvent(t)
    }
    isEventForConsumer(t, i) {
        const l = i.eventId === null || !!t.eventId && t.eventId === i.eventId;
        return i.filter.includes(t.type) && l
    }
    hasEventBeenHandled(t) {
        return Date.now() - this.lastProcessedEventTime >= u2 && this.cachedEventUids.clear(),
            this.cachedEventUids.has(cv(t))
    }
    saveEventToCache(t) {
        this.cachedEventUids.add(cv(t)),
            this.lastProcessedEventTime = Date.now()
    }
}
function cv(s) {
    return [s.type, s.eventId, s.sessionId, s.tenantId].filter(t => t).join("-")
}
function QE({ type: s, error: t }) {
    return s === "unknown" && t?.code === "auth/no-auth-event"
}
function h2(s) {
    switch (s.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return QE(s);
        default:
            return !1
    }
}
async function d2(s, t = {}) {
    return Wa(s, "GET", "/v1/projects", t)
}
const m2 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    , p2 = /^https?/;
async function g2(s) {
    if (s.config.emulator)
        return;
    const { authorizedDomains: t } = await d2(s);
    for (const i of t)
        try {
            if (_2(i))
                return
        } catch { }
    hi(s, "unauthorized-domain")
}
function _2(s) {
    const t = Kh()
        , { protocol: i, hostname: l } = new URL(t);
    if (s.startsWith("chrome-extension://")) {
        const h = new URL(s);
        return h.hostname === "" && l === "" ? i === "chrome-extension:" && s.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : i === "chrome-extension:" && h.hostname === l
    }
    if (!p2.test(i))
        return !1;
    if (m2.test(s))
        return l === s;
    const o = s.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(l)
}
const y2 = new Nr(3e4, 6e4);
function uv() {
    const s = jn().___jsl;
    if (s?.H) {
        for (const t of Object.keys(s.H))
            if (s.H[t].r = s.H[t].r || [],
                s.H[t].L = s.H[t].L || [],
                s.H[t].r = [...s.H[t].L],
                s.CP)
                for (let i = 0; i < s.CP.length; i++)
                    s.CP[i] = null
    }
}
function v2(s) {
    return new Promise((t, i) => {
        function l() {
            uv(),
                gapi.load("gapi.iframes", {
                    callback: () => {
                        t(gapi.iframes.getContext())
                    }
                    ,
                    ontimeout: () => {
                        uv(),
                            i(Un(s, "network-request-failed"))
                    }
                    ,
                    timeout: y2.get()
                })
        }
        if (jn().gapi?.iframes?.Iframe)
            t(gapi.iframes.getContext());
        else if (jn().gapi?.load)
            l();
        else {
            const o = CA("iframefcb");
            return jn()[o] = () => {
                gapi.load ? l() : i(Un(s, "network-request-failed"))
            }
                ,
                EA(`${bA()}?onload=${o}`).catch(u => i(u))
        }
    }
    ).catch(t => {
        throw tc = null,
        t
    }
    )
}
let tc = null;
function S2(s) {
    return tc = tc || v2(s),
        tc
}
const E2 = new Nr(5e3, 15e3)
    , b2 = "__/auth/iframe"
    , C2 = "emulator/auth/iframe"
    , T2 = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    }
    , x2 = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function w2(s) {
    const t = s.config;
    ue(t.authDomain, s, "auth-domain-config-required");
    const i = t.emulator ? Vd(t, C2) : `https://${s.config.authDomain}/${b2}`
        , l = {
            apiKey: t.apiKey,
            appName: s.name,
            v: Ya
        }
        , o = x2.get(s.config.apiHost);
    o && (l.eid = o);
    const u = s._getFrameworks();
    return u.length && (l.fw = u.join(",")),
        `${i}?${Fa(l).slice(1)}`
}
async function R2(s) {
    const t = await S2(s)
        , i = jn().gapi;
    return ue(i, s, "internal-error"),
        t.open({
            where: document.body,
            url: w2(s),
            messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: T2,
            dontclear: !0
        }, l => new Promise(async (o, u) => {
            await l.restyle({
                setHideOnLeave: !1
            });
            const h = Un(s, "network-request-failed")
                , d = jn().setTimeout(() => {
                    u(h)
                }
                    , E2.get());
            function p() {
                jn().clearTimeout(d),
                    o(l)
            }
            l.ping(p).then(p, () => {
                u(h)
            }
            )
        }
        ))
}
const N2 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
    , A2 = 500
    , D2 = 600
    , O2 = "_blank"
    , I2 = "http://localhost";
class fv {
    constructor(t) {
        this.window = t,
            this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch { }
    }
}
function M2(s, t, i, l = A2, o = D2) {
    const u = Math.max((window.screen.availHeight - o) / 2, 0).toString()
        , h = Math.max((window.screen.availWidth - l) / 2, 0).toString();
    let d = "";
    const p = {
        ...N2,
        width: l.toString(),
        height: o.toString(),
        top: u,
        left: h
    }
        , g = kt().toLowerCase();
    i && (d = RE(g) ? O2 : i),
        xE(g) && (t = t || I2,
            p.scrollbars = "yes");
    const S = Object.entries(p).reduce((E, [D, I]) => `${E}${D}=${I},`, "");
    if (dA(g) && d !== "_self")
        return k2(t || "", d),
            new fv(null);
    const v = window.open(t || "", d, S);
    ue(v, s, "popup-blocked");
    try {
        v.focus()
    } catch { }
    return new fv(v)
}
function k2(s, t) {
    const i = document.createElement("a");
    i.href = s,
        i.target = t;
    const l = document.createEvent("MouseEvent");
    l.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
        i.dispatchEvent(l)
}
const L2 = "__/auth/handler"
    , U2 = "emulator/auth/handler"
    , j2 = encodeURIComponent("fac");
async function hv(s, t, i, l, o, u) {
    ue(s.config.authDomain, s, "auth-domain-config-required"),
        ue(s.config.apiKey, s, "invalid-api-key");
    const h = {
        apiKey: s.config.apiKey,
        appName: s.name,
        authType: i,
        redirectUrl: l,
        v: Ya,
        eventId: o
    };
    if (t instanceof UE) {
        t.setDefaultLanguage(s.languageCode),
            h.providerId = t.providerId || "",
            Oh(t.getCustomParameters()) || (h.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [S, v] of Object.entries({}))
            h[S] = v
    }
    if (t instanceof Ar) {
        const S = t.getScopes().filter(v => v !== "");
        S.length > 0 && (h.scopes = S.join(","))
    }
    s.tenantId && (h.tid = s.tenantId);
    const d = h;
    for (const S of Object.keys(d))
        d[S] === void 0 && delete d[S];
    const p = await s._getAppCheckToken()
        , g = p ? `#${j2}=${encodeURIComponent(p)}` : "";
    return `${z2(s)}?${Fa(d).slice(1)}${g}`
}
function z2({ config: s }) {
    return s.emulator ? Vd(s, U2) : `https://${s.authDomain}/${L2}`
}
const Rh = "webStorageSupport";
class H2 {
    constructor() {
        this.eventManagers = {},
            this.iframes = {},
            this.originValidationPromises = {},
            this._redirectPersistence = PE,
            this._completeRedirectFn = c2,
            this._overrideRedirectResult = l2
    }
    async _openPopup(t, i, l, o) {
        di(this.eventManagers[t._key()]?.manager, "_initialize() not called before _openPopup()");
        const u = await hv(t, i, l, Kh(), o);
        return M2(t, u, Qd())
    }
    async _openRedirect(t, i, l, o) {
        await this._originValidation(t);
        const u = await hv(t, i, l, Kh(), o);
        return qA(u),
            new Promise(() => { }
            )
    }
    _initialize(t) {
        const i = t._key();
        if (this.eventManagers[i]) {
            const { manager: o, promise: u } = this.eventManagers[i];
            return o ? Promise.resolve(o) : (di(u, "If manager is not set, promise should be"),
                u)
        }
        const l = this.initAndGetManager(t);
        return this.eventManagers[i] = {
            promise: l
        },
            l.catch(() => {
                delete this.eventManagers[i]
            }
            ),
            l
    }
    async initAndGetManager(t) {
        const i = await R2(t)
            , l = new f2(t);
        return i.register("authEvent", o => (ue(o?.authEvent, t, "invalid-auth-event"),
        {
            status: l.onEvent(o.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
            this.eventManagers[t._key()] = {
                manager: l
            },
            this.iframes[t._key()] = i,
            l
    }
    _isIframeWebStorageSupported(t, i) {
        this.iframes[t._key()].send(Rh, {
            type: Rh
        }, o => {
            const u = o?.[0]?.[Rh];
            u !== void 0 && i(!!u),
                hi(t, "internal-error")
        }
            , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(t) {
        const i = t._key();
        return this.originValidationPromises[i] || (this.originValidationPromises[i] = g2(t)),
            this.originValidationPromises[i]
    }
    get _shouldInitProactively() {
        return IE() || wE() || Fd()
    }
}
const B2 = H2;
var dv = "@firebase/auth"
    , mv = "1.12.1";
class P2 {
    constructor(t) {
        this.auth = t,
            this.internalListeners = new Map
    }
    getUid() {
        return this.assertAuthConfigured(),
            this.auth.currentUser?.uid || null
    }
    async getToken(t) {
        return this.assertAuthConfigured(),
            await this.auth._initializationPromise,
            this.auth.currentUser ? {
                accessToken: await this.auth.currentUser.getIdToken(t)
            } : null
    }
    addAuthTokenListener(t) {
        if (this.assertAuthConfigured(),
            this.internalListeners.has(t))
            return;
        const i = this.auth.onIdTokenChanged(l => {
            t(l?.stsTokenManager.accessToken || null)
        }
        );
        this.internalListeners.set(t, i),
            this.updateProactiveRefresh()
    }
    removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        const i = this.internalListeners.get(t);
        i && (this.internalListeners.delete(t),
            i(),
            this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        ue(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
function q2(s) {
    switch (s) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        case "WebExtension":
            return "web-extension";
        default:
            return
    }
}
function V2(s) {
    ja(new ks("auth", (t, { options: i }) => {
        const l = t.getProvider("app").getImmediate()
            , o = t.getProvider("heartbeat")
            , u = t.getProvider("app-check-internal")
            , { apiKey: h, authDomain: d } = l.options;
        ue(h && !h.includes(":"), "invalid-api-key", {
            appName: l.name
        });
        const p = {
            apiKey: h,
            authDomain: d,
            clientPlatform: s,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: ME(s)
        }
            , g = new vA(l, o, u, p);
        return xA(g, i),
            g
    }
        , "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t, i, l) => {
            t.getProvider("auth-internal").initialize()
        }
        )),
        ja(new ks("auth-internal", t => {
            const i = qc(t.getProvider("auth").getImmediate());
            return (l => new P2(l))(i)
        }
            , "PRIVATE").setInstantiationMode("EXPLICIT")),
        Ji(dv, mv, q2(s)),
        Ji(dv, mv, "esm2020")
}
const G2 = 300
    , F2 = Pv("authIdTokenMaxAge") || G2;
let pv = null;
const Y2 = s => async t => {
    const i = t && await t.getIdTokenResult()
        , l = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
    if (l && l > F2)
        return;
    const o = i?.token;
    pv !== o && (pv = o,
        await fetch(s, {
            method: o ? "POST" : "DELETE",
            headers: o ? {
                Authorization: `Bearer ${o}`
            } : {}
        }))
}
    ;
function Q2(s = Xv()) {
    const t = fd(s, "auth");
    if (t.isInitialized())
        return t.getImmediate();
    const i = TA(s, {
        popupRedirectResolver: B2,
        persistence: [ZA, HA, PE]
    })
        , l = Pv("authTokenSyncURL");
    if (l && typeof isSecureContext == "boolean" && isSecureContext) {
        const u = new URL(l, location.origin);
        if (location.origin === u.origin) {
            const h = Y2(u.toString());
            UA(i, h, () => h(i.currentUser)),
                LA(i, d => h(d))
        }
    }
    const o = Hv("auth");
    return o && wA(i, `http://${o}`),
        i
}
function K2() {
    return document.getElementsByTagName("head")?.[0] ?? document
}
SA({
    loadJS(s) {
        return new Promise((t, i) => {
            const l = document.createElement("script");
            l.setAttribute("src", s),
                l.onload = t,
                l.onerror = o => {
                    const u = Un("internal-error");
                    u.customData = o,
                        i(u)
                }
                ,
                l.type = "text/javascript",
                l.charset = "UTF-8",
                K2().appendChild(l)
        }
        )
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
V2("Browser");
const X2 = Q2();
OA(X2).then(() => {
    console.log("Firebase anonymous login success")
}
).catch(s => {
    console.error(s)
}
);
p1.createRoot(document.getElementById("root")).render(_.jsx(x.StrictMode, {
    children: _.jsx(XN, {})
}));
