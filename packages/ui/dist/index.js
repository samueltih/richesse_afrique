import { defineComponent as z, createElementBlock as w, openBlock as y, renderSlot as E, createCommentVNode as I, normalizeClass as L, toDisplayString as Ee, ref as A, shallowRef as Je, onMounted as Ye, watch as ze, onUnmounted as Ze, h as ie, nextTick as et, Fragment as V, createBlock as $, unref as P, useSlots as ue, renderList as Oe, resolveDynamicComponent as Fe, normalizeStyle as tt, createElementVNode as j, getCurrentScope as nt, onScopeDispose as ot, computed as it, toValue as F, Transition as rt, resolveComponent as Pe, createVNode as re, createTextVNode as st, withCtx as _e } from "vue";
import './index.css';const lt = { class: "relative overflow-show" }, $n = /* @__PURE__ */ z({
  __name: "Badge",
  props: {
    expanded: {
      type: Boolean,
      default: !1
    },
    content: {
      type: String
    },
    visible: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (t, n) => (y(), w("div", lt, [
      E(t.$slots, "default"),
      e.visible ? (y(), w("span", {
        key: 0,
        class: L({ "absolute bg-red-500 text-white text-sm flex items-center justify-center rounded-full": !0, "h-5 w-5 -top-2 -right-2": e.expanded, "h-2 w-2 -top-1 -right-1": !e.expanded })
      }, Ee(e.expanded ? e.content : ""), 3)) : I("", !0)
    ]));
  }
}), je = /^[a-z0-9]+(-[a-z0-9]+)*$/, J = (e, t, n, i = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    i = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const l = o.pop(), c = o.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : i,
      prefix: c,
      name: l
    };
    return t && !U(a) ? null : a;
  }
  const r = o[0], s = r.split("-");
  if (s.length > 1) {
    const l = {
      provider: i,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !U(l) ? null : l;
  }
  if (n && i === "") {
    const l = {
      provider: i,
      prefix: "",
      name: r
    };
    return t && !U(l, n) ? null : l;
  }
  return null;
}, U = (e, t) => e ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e.prefix === "" || e.prefix) && e.name) : !1, Le = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), X = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Y = Object.freeze({
  ...Le,
  ...X
}), se = Object.freeze({
  ...Y,
  body: "",
  hidden: !1
});
function ct(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function he(e, t) {
  const n = ct(e, t);
  for (const i in se)
    i in X ? i in e && !(i in n) && (n[i] = X[i]) : i in t ? n[i] = t[i] : i in e && (n[i] = e[i]);
  return n;
}
function at(e, t) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function r(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const l = i[s] && i[s].parent, c = l && r(l);
      c && (o[s] = [l].concat(c));
    }
    return o[s];
  }
  return Object.keys(n).concat(Object.keys(i)).forEach(r), o;
}
function ut(e, t, n) {
  const i = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let r = {};
  function s(l) {
    r = he(
      i[l] || o[l],
      r
    );
  }
  return s(t), n.forEach(s), he(e, r);
}
function $e(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const i = at(e);
  for (const o in i) {
    const r = i[o];
    r && (t(o, ut(e, o, r)), n.push(o));
  }
  return n;
}
const ft = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Le
};
function ee(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function De(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !ee(e, ft))
    return null;
  const n = t.icons;
  for (const o in n) {
    const r = n[o];
    if (
      // Name cannot be empty
      !o || // Must have body
      typeof r.body != "string" || // Check other props
      !ee(
        r,
        se
      )
    )
      return null;
  }
  const i = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in i) {
    const r = i[o], s = r.parent;
    if (
      // Name cannot be empty
      !o || // Parent must be set and point to existing icon
      typeof s != "string" || !n[s] && !i[s] || // Check other props
      !ee(
        r,
        se
      )
    )
      return null;
  }
  return t;
}
const me = /* @__PURE__ */ Object.create(null);
function dt(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function D(e, t) {
  const n = me[e] || (me[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = dt(e, t));
}
function Me(e, t) {
  return De(t) ? $e(t, (n, i) => {
    i ? e.icons[n] = i : e.missing.add(n);
  }) : [];
}
function pt(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let H = !1;
function Ne(e) {
  return typeof e == "boolean" && (H = e), H;
}
function ht(e) {
  const t = typeof e == "string" ? J(e, !0, H) : e;
  if (t) {
    const n = D(t.provider, t.prefix), i = t.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function mt(e, t) {
  const n = J(e, !0, H);
  if (!n)
    return !1;
  const i = D(n.provider, n.prefix);
  return t ? pt(i, n.name, t) : (i.missing.add(n.name), !0);
}
function gt(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), H && !t && !e.prefix) {
    let o = !1;
    return De(e) && (e.prefix = "", $e(e, (r, s) => {
      mt(r, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!U({
    prefix: n,
    name: "a"
  }))
    return !1;
  const i = D(t, n);
  return !!Me(i, e);
}
const Be = Object.freeze({
  width: null,
  height: null
}), Re = Object.freeze({
  // Dimensions
  ...Be,
  // Transformations
  ...X
}), yt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, vt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ge(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const i = e.split(yt);
  if (i === null || !i.length)
    return e;
  const o = [];
  let r = i.shift(), s = vt.test(r);
  for (; ; ) {
    if (s) {
      const l = parseFloat(r);
      isNaN(l) ? o.push(r) : o.push(Math.ceil(l * t * n) / n);
    } else
      o.push(r);
    if (r = i.shift(), r === void 0)
      return o.join("");
    s = !s;
  }
}
function bt(e, t = "defs") {
  let n = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const o = e.indexOf(">", i), r = e.indexOf("</" + t);
    if (o === -1 || r === -1)
      break;
    const s = e.indexOf(">", r);
    if (s === -1)
      break;
    n += e.slice(o + 1, r).trim(), e = e.slice(0, i).trim() + e.slice(s + 1);
  }
  return {
    defs: n,
    content: e
  };
}
function xt(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function wt(e, t, n) {
  const i = bt(e);
  return xt(i.defs, t + i.content + n);
}
const kt = (e) => e === "unset" || e === "undefined" || e === "none";
function St(e, t) {
  const n = {
    ...Y,
    ...e
  }, i = {
    ...Re,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let r = n.body;
  [n, i].forEach((b) => {
    const f = [], m = b.hFlip, x = b.vFlip;
    let k = b.rotate;
    m ? x ? k += 2 : (f.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), f.push("scale(-1 1)"), o.top = o.left = 0) : x && (f.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), f.push("scale(1 -1)"), o.top = o.left = 0);
    let S;
    switch (k < 0 && (k -= Math.floor(k / 4) * 4), k = k % 4, k) {
      case 1:
        S = o.height / 2 + o.top, f.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        f.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        S = o.width / 2 + o.left, f.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    k % 2 === 1 && (o.left !== o.top && (S = o.left, o.left = o.top, o.top = S), o.width !== o.height && (S = o.width, o.width = o.height, o.height = S)), f.length && (r = wt(
      r,
      '<g transform="' + f.join(" ") + '">',
      "</g>"
    ));
  });
  const s = i.width, l = i.height, c = o.width, a = o.height;
  let u, d;
  s === null ? (d = l === null ? "1em" : l === "auto" ? a : l, u = ge(d, c / a)) : (u = s === "auto" ? c : s, d = l === null ? ge(u, a / c) : l === "auto" ? a : l);
  const h = {}, p = (b, f) => {
    kt(f) || (h[b] = f.toString());
  };
  p("width", u), p("height", d);
  const v = [o.left, o.top, c, a];
  return h.viewBox = v.join(" "), {
    attributes: h,
    viewBox: v,
    body: r
  };
}
const It = /\sid="(\S+)"/g, Ct = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let At = 0;
function Tt(e, t = Ct) {
  const n = [];
  let i;
  for (; i = It.exec(e); )
    n.push(i[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((r) => {
    const s = typeof t == "function" ? t(r) : t + (At++).toString(), l = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const le = /* @__PURE__ */ Object.create(null);
function Et(e, t) {
  le[e] = t;
}
function ce(e) {
  return le[e] || le[""];
}
function fe(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const de = /* @__PURE__ */ Object.create(null), N = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Q = [];
for (; N.length > 0; )
  N.length === 1 || Math.random() > 0.5 ? Q.push(N.shift()) : Q.push(N.pop());
de[""] = fe({
  resources: ["https://api.iconify.design"].concat(Q)
});
function zt(e, t) {
  const n = fe(t);
  return n === null ? !1 : (de[e] = n, !0);
}
function pe(e) {
  return de[e];
}
const Ot = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ye = Ot();
function Ft(e, t) {
  const n = pe(e);
  if (!n)
    return 0;
  let i;
  if (!n.maxURL)
    i = 0;
  else {
    let o = 0;
    n.resources.forEach((s) => {
      o = Math.max(o, s.length);
    });
    const r = t + ".json?icons=";
    i = n.maxURL - o - n.path.length - r.length;
  }
  return i;
}
function Pt(e) {
  return e === 404;
}
const _t = (e, t, n) => {
  const i = [], o = Ft(e, t), r = "icons";
  let s = {
    type: r,
    provider: e,
    prefix: t,
    icons: []
  }, l = 0;
  return n.forEach((c, a) => {
    l += c.length + 1, l >= o && a > 0 && (i.push(s), s = {
      type: r,
      provider: e,
      prefix: t,
      icons: []
    }, l = c.length), s.icons.push(c);
  }), i.push(s), i;
};
function jt(e) {
  if (typeof e == "string") {
    const t = pe(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Lt = (e, t, n) => {
  if (!ye) {
    n("abort", 424);
    return;
  }
  let i = jt(t.provider);
  switch (t.type) {
    case "icons": {
      const r = t.prefix, l = t.icons.join(","), c = new URLSearchParams({
        icons: l
      });
      i += r + ".json?" + c.toString();
      break;
    }
    case "custom": {
      const r = t.uri;
      i += r.slice(0, 1) === "/" ? r.slice(1) : r;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  ye(e + i).then((r) => {
    const s = r.status;
    if (s !== 200) {
      setTimeout(() => {
        n(Pt(s) ? "abort" : "next", s);
      });
      return;
    }
    return o = 501, r.json();
  }).then((r) => {
    if (typeof r != "object" || r === null) {
      setTimeout(() => {
        r === 404 ? n("abort", r) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", r);
    });
  }).catch(() => {
    n("next", o);
  });
}, $t = {
  prepare: _t,
  send: Lt
};
function Dt(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, r) => o.provider !== r.provider ? o.provider.localeCompare(r.provider) : o.prefix !== r.prefix ? o.prefix.localeCompare(r.prefix) : o.name.localeCompare(r.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (i.name === o.name && i.prefix === o.prefix && i.provider === o.provider)
      return;
    i = o;
    const r = o.provider, s = o.prefix, l = o.name, c = n[r] || (n[r] = /* @__PURE__ */ Object.create(null)), a = c[s] || (c[s] = D(r, s));
    let u;
    l in a.icons ? u = t.loaded : s === "" || a.missing.has(l) ? u = t.missing : u = t.pending;
    const d = {
      provider: r,
      prefix: s,
      name: l
    };
    u.push(d);
  }), t;
}
function Ve(e, t) {
  e.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((o) => o.id !== t));
  });
}
function Mt(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const i = e.provider, o = e.prefix;
    t.forEach((r) => {
      const s = r.icons, l = s.pending.length;
      s.pending = s.pending.filter((c) => {
        if (c.prefix !== o)
          return !0;
        const a = c.name;
        if (e.icons[a])
          s.loaded.push({
            provider: i,
            prefix: o,
            name: a
          });
        else if (e.missing.has(a))
          s.missing.push({
            provider: i,
            prefix: o,
            name: a
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== l && (n || Ve([e], r.id), r.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let Nt = 0;
function Bt(e, t, n) {
  const i = Nt++, o = Ve.bind(null, n, i);
  if (!t.pending.length)
    return o;
  const r = {
    id: i,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(r);
  }), o;
}
function Rt(e, t = !0, n = !1) {
  const i = [];
  return e.forEach((o) => {
    const r = typeof o == "string" ? J(o, t, n) : o;
    r && i.push(r);
  }), i;
}
var Vt = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ht(e, t, n, i) {
  const o = e.resources.length, r = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let g = e.resources.slice(0);
    for (s = []; g.length > 1; ) {
      const C = Math.floor(Math.random() * g.length);
      s.push(g[C]), g = g.slice(0, C).concat(g.slice(C + 1));
    }
    s = s.concat(g);
  } else
    s = e.resources.slice(r).concat(e.resources.slice(0, r));
  const l = Date.now();
  let c = "pending", a = 0, u, d = null, h = [], p = [];
  typeof i == "function" && p.push(i);
  function v() {
    d && (clearTimeout(d), d = null);
  }
  function b() {
    c === "pending" && (c = "aborted"), v(), h.forEach((g) => {
      g.status === "pending" && (g.status = "aborted");
    }), h = [];
  }
  function f(g, C) {
    C && (p = []), typeof g == "function" && p.push(g);
  }
  function m() {
    return {
      startTime: l,
      payload: t,
      status: c,
      queriesSent: a,
      queriesPending: h.length,
      subscribe: f,
      abort: b
    };
  }
  function x() {
    c = "failed", p.forEach((g) => {
      g(void 0, u);
    });
  }
  function k() {
    h.forEach((g) => {
      g.status === "pending" && (g.status = "aborted");
    }), h = [];
  }
  function S(g, C, M) {
    const q = C !== "success";
    switch (h = h.filter((O) => O !== g), c) {
      case "pending":
        break;
      case "failed":
        if (q || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      u = M, x();
      return;
    }
    if (q) {
      u = M, h.length || (s.length ? Z() : x());
      return;
    }
    if (v(), k(), !e.random) {
      const O = e.resources.indexOf(g.resource);
      O !== -1 && O !== e.index && (e.index = O);
    }
    c = "completed", p.forEach((O) => {
      O(M);
    });
  }
  function Z() {
    if (c !== "pending")
      return;
    v();
    const g = s.shift();
    if (g === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          v(), c === "pending" && (k(), x());
        }, e.timeout);
        return;
      }
      x();
      return;
    }
    const C = {
      status: "pending",
      resource: g,
      callback: (M, q) => {
        S(C, M, q);
      }
    };
    h.push(C), a++, d = setTimeout(Z, e.rotate), n(g, t, C.callback);
  }
  return setTimeout(Z), m;
}
function He(e) {
  const t = {
    ...Vt,
    ...e
  };
  let n = [];
  function i() {
    n = n.filter((l) => l().status === "pending");
  }
  function o(l, c, a) {
    const u = Ht(
      t,
      l,
      c,
      (d, h) => {
        i(), a && a(d, h);
      }
    );
    return n.push(u), u;
  }
  function r(l) {
    return n.find((c) => l(c)) || null;
  }
  return {
    query: o,
    find: r,
    setIndex: (l) => {
      t.index = l;
    },
    getIndex: () => t.index,
    cleanup: i
  };
}
function ve() {
}
const te = /* @__PURE__ */ Object.create(null);
function qt(e) {
  if (!te[e]) {
    const t = pe(e);
    if (!t)
      return;
    const n = He(t), i = {
      config: t,
      redundancy: n
    };
    te[e] = i;
  }
  return te[e];
}
function Ut(e, t, n) {
  let i, o;
  if (typeof e == "string") {
    const r = ce(e);
    if (!r)
      return n(void 0, 424), ve;
    o = r.send;
    const s = qt(e);
    s && (i = s.redundancy);
  } else {
    const r = fe(e);
    if (r) {
      i = He(r);
      const s = e.resources ? e.resources[0] : "", l = ce(s);
      l && (o = l.send);
    }
  }
  return !i || !o ? (n(void 0, 424), ve) : i.query(t, o, n)().abort;
}
function be() {
}
function Qt(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Mt(e);
  }));
}
function Wt(e) {
  const t = [], n = [];
  return e.forEach((i) => {
    (i.match(je) ? t : n).push(i);
  }), {
    valid: t,
    invalid: n
  };
}
function B(e, t, n) {
  function i() {
    const o = e.pendingIcons;
    t.forEach((r) => {
      o && o.delete(r), e.icons[r] || e.missing.add(r);
    });
  }
  if (n && typeof n == "object")
    try {
      if (!Me(e, n).length) {
        i();
        return;
      }
    } catch (o) {
      console.error(o);
    }
  i(), Qt(e);
}
function xe(e, t) {
  e instanceof Promise ? e.then((n) => {
    t(n);
  }).catch(() => {
    t(null);
  }) : t(e);
}
function Gt(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = e, o = e.iconsToLoad;
    if (delete e.iconsToLoad, !o || !o.length)
      return;
    const r = e.loadIcon;
    if (e.loadIcons && (o.length > 1 || !r)) {
      xe(
        e.loadIcons(o, i, n),
        (u) => {
          B(e, o, u);
        }
      );
      return;
    }
    if (r) {
      o.forEach((u) => {
        const d = r(u, i, n);
        xe(d, (h) => {
          const p = h ? {
            prefix: i,
            icons: {
              [u]: h
            }
          } : null;
          B(e, [u], p);
        });
      });
      return;
    }
    const { valid: s, invalid: l } = Wt(o);
    if (l.length && B(e, l, null), !s.length)
      return;
    const c = i.match(je) ? ce(n) : null;
    if (!c) {
      B(e, s, null);
      return;
    }
    c.prepare(n, i, s).forEach((u) => {
      Ut(n, u, (d) => {
        B(e, u.icons, d);
      });
    });
  }));
}
const Xt = (e, t) => {
  const n = Rt(e, !0, Ne()), i = Dt(n);
  if (!i.pending.length) {
    let c = !0;
    return t && setTimeout(() => {
      c && t(
        i.loaded,
        i.missing,
        i.pending,
        be
      );
    }), () => {
      c = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), r = [];
  let s, l;
  return i.pending.forEach((c) => {
    const { provider: a, prefix: u } = c;
    if (u === l && a === s)
      return;
    s = a, l = u, r.push(D(a, u));
    const d = o[a] || (o[a] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), i.pending.forEach((c) => {
    const { provider: a, prefix: u, name: d } = c, h = D(a, u), p = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    p.has(d) || (p.add(d), o[a][u].push(d));
  }), r.forEach((c) => {
    const a = o[c.provider][c.prefix];
    a.length && Gt(c, a);
  }), t ? Bt(t, i, r) : be;
};
function Kt(e, t) {
  const n = {
    ...e
  };
  for (const i in t) {
    const o = t[i], r = typeof o;
    i in Be ? (o === null || o && (r === "string" || r === "number")) && (n[i] = o) : r === typeof n[i] && (n[i] = i === "rotate" ? o % 4 : o);
  }
  return n;
}
const Jt = /[\s,]+/;
function Yt(e, t) {
  t.split(Jt).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Zt(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function i(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : i(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let r = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(r) ? 0 : (r = r / o, r % 1 === 0 ? i(r) : 0);
    }
  }
  return t;
}
function en(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    n += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function tn(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function nn(e) {
  return "data:image/svg+xml," + tn(e);
}
function on(e) {
  return 'url("' + nn(e) + '")';
}
const we = {
  ...Re,
  inline: !1
}, rn = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, sn = {
  display: "inline-block"
}, ae = {
  backgroundColor: "currentColor"
}, qe = {
  backgroundColor: "transparent"
}, ke = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Se = {
  webkitMask: ae,
  mask: ae,
  background: qe
};
for (const e in Se) {
  const t = Se[e];
  for (const n in ke)
    t[e + n] = ke[n];
}
const W = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  W[e + "-flip"] = t, W[e.slice(0, 1) + "-flip"] = t, W[e + "Flip"] = t;
});
function Ie(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Ce = (e, t) => {
  const n = Kt(we, t), i = { ...rn }, o = t.mode || "svg", r = {}, s = t.style, l = typeof s == "object" && !(s instanceof Array) ? s : {};
  for (let b in t) {
    const f = t[b];
    if (f !== void 0)
      switch (b) {
        // Properties to ignore
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          n[b] = f === !0 || f === "true" || f === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          typeof f == "string" && Yt(n, f);
          break;
        // Color: override style
        case "color":
          r.color = f;
          break;
        // Rotation as string
        case "rotate":
          typeof f == "string" ? n[b] = Zt(f) : typeof f == "number" && (n[b] = f);
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete i["aria-hidden"];
          break;
        default: {
          const m = W[b];
          m ? (f === !0 || f === "true" || f === 1) && (n[m] = !0) : we[b] === void 0 && (i[b] = f);
        }
      }
  }
  const c = St(e, n), a = c.attributes;
  if (n.inline && (r.verticalAlign = "-0.125em"), o === "svg") {
    i.style = {
      ...r,
      ...l
    }, Object.assign(i, a);
    let b = 0, f = t.id;
    return typeof f == "string" && (f = f.replace(/-/g, "_")), i.innerHTML = Tt(c.body, f ? () => f + "ID" + b++ : "iconifyVue"), ie("svg", i);
  }
  const { body: u, width: d, height: h } = e, p = o === "mask" || (o === "bg" ? !1 : u.indexOf("currentColor") !== -1), v = en(u, {
    ...a,
    width: d + "",
    height: h + ""
  });
  return i.style = {
    ...r,
    "--svg": on(v),
    width: Ie(a.width),
    height: Ie(a.height),
    ...sn,
    ...p ? ae : qe,
    ...l
  }, ie("span", i);
};
Ne(!0);
Et("", $t);
if (typeof document < "u" && typeof window < "u") {
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !gt(i)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const i = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = t[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          zt(n, o) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
const ln = {
  ...Y,
  body: ""
}, K = z((e, { emit: t }) => {
  const n = A(null);
  function i() {
    n.value && (n.value.abort?.(), n.value = null);
  }
  const o = A(!!e.ssr), r = A(""), s = Je(null);
  function l() {
    const a = e.icon;
    if (typeof a == "object" && a !== null && typeof a.body == "string")
      return r.value = "", {
        data: a
      };
    let u;
    if (typeof a != "string" || (u = J(a, !1, !0)) === null)
      return null;
    let d = ht(u);
    if (!d) {
      const v = n.value;
      return (!v || v.name !== a) && (d === null ? n.value = {
        name: a
      } : n.value = {
        name: a,
        abort: Xt([u], c)
      }), null;
    }
    i(), r.value !== a && (r.value = a, et(() => {
      t("load", a);
    }));
    const h = e.customise;
    if (h) {
      d = Object.assign({}, d);
      const v = h(d.body, u.name, u.prefix, u.provider);
      typeof v == "string" && (d.body = v);
    }
    const p = ["iconify"];
    return u.prefix !== "" && p.push("iconify--" + u.prefix), u.provider !== "" && p.push("iconify--" + u.provider), { data: d, classes: p };
  }
  function c() {
    const a = l();
    a ? a.data !== s.value?.data && (s.value = a) : s.value = null;
  }
  return o.value ? c() : Ye(() => {
    o.value = !0, c();
  }), ze(() => e.icon, c), Ze(i), () => {
    const a = s.value;
    if (!a)
      return Ce(ln, e);
    let u = e;
    return a.classes && (u = {
      ...e,
      class: a.classes.join(" ")
    }), Ce({
      ...Y,
      ...a.data
    }, u);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ],
  emits: ["load"]
}), cn = {
  key: 0,
  class: "flex gap-2 items-center"
}, an = ["href"], Dn = /* @__PURE__ */ z({
  __name: "BreadcrumbItem",
  props: {
    href: {
      type: String
    },
    dropdown: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (y(), w(V, null, [
      e.href ? I("", !0) : (y(), w("span", cn, [
        E(t.$slots, "default"),
        e.dropdown ? (y(), $(P(K), {
          key: 0,
          icon: "ph:caret-down"
        })) : I("", !0)
      ])),
      e.href ? (y(), w("a", {
        key: 1,
        href: e.href,
        class: "flex gap-2 items-center"
      }, [
        E(t.$slots, "default"),
        e.dropdown ? (y(), $(P(K), {
          key: 0,
          icon: "ph:caret-down"
        })) : I("", !0)
      ], 8, an)) : I("", !0)
    ], 64));
  }
}), un = {
  key: 0,
  class: "flex my-4 gap-4 w-full items-center"
}, Mn = /* @__PURE__ */ z({
  __name: "Breadcrumbs",
  setup(e) {
    const t = ue(), n = A(t.default), i = A(n.value());
    return (o, r) => o.$slots ? (y(), w("div", un, [
      (y(!0), w(V, null, Oe(i.value, (s, l) => (y(), w(V, { key: l }, [
        (y(), $(Fe(s))),
        l < i.value.length - 1 ? (y(), $(P(K), {
          key: 0,
          icon: "ph:caret-right"
        })) : I("", !0)
      ], 64))), 128))
    ])) : I("", !0);
  }
}), fn = {
  key: 0,
  class: "content"
}, dn = {
  key: 1,
  class: "horizontal-line flex-1"
}, pn = /* @__PURE__ */ z({
  __name: "Divider",
  props: {
    vertical: {
      type: Boolean,
      default: !1
    },
    gap: {
      type: Number,
      default: 1
    }
  },
  setup(e) {
    return (t, n) => (y(), w("div", {
      class: L({ "flex items-center": !0, "vertical-gap h-full": e.vertical, "horizontal-gap": !e.vertical }),
      style: tt(`--divider-gap: ${e.gap * 0.5}rem`)
    }, [
      j("span", {
        class: L({ "flex-1": !0, "horizontal-line": !e.vertical, "vertical-line": e.vertical })
      }, null, 2),
      e.vertical ? I("", !0) : (y(), w("span", fn, [
        E(t.$slots, "default", {}, void 0, !0)
      ])),
      e.vertical ? I("", !0) : (y(), w("span", dn))
    ], 6));
  }
}), Ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, Nn = /* @__PURE__ */ Ue(pn, [["__scopeId", "data-v-158bd882"]]);
function hn(e) {
  return nt() ? (ot(e), !0) : !1;
}
const Qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mn = Object.prototype.toString, gn = (e) => mn.call(e) === "[object Object]", _ = () => {
}, yn = /* @__PURE__ */ vn();
function vn() {
  var e, t;
  return Qe && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function ne(e) {
  return Array.isArray(e) ? e : [e];
}
function bn(e, t, n) {
  return ze(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const We = Qe ? window : void 0;
function R(e) {
  var t;
  const n = F(e);
  return (t = n?.$el) != null ? t : n;
}
function oe(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, i = (l, c, a, u) => (l.addEventListener(c, a, u), () => l.removeEventListener(c, a, u)), o = it(() => {
    const l = ne(F(e[0])).filter((c) => c != null);
    return l.every((c) => typeof c != "string") ? l : void 0;
  }), r = bn(
    () => {
      var l, c;
      return [
        (c = (l = o.value) == null ? void 0 : l.map((a) => R(a))) != null ? c : [We].filter((a) => a != null),
        ne(F(o.value ? e[1] : e[0])),
        ne(P(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        F(o.value ? e[3] : e[2])
      ];
    },
    ([l, c, a, u]) => {
      if (n(), !l?.length || !c?.length || !a?.length)
        return;
      const d = gn(u) ? { ...u } : u;
      t.push(
        ...l.flatMap(
          (h) => c.flatMap(
            (p) => a.map((v) => i(h, p, v, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    r(), n();
  };
  return hn(n), s;
}
let Ae = !1;
function xn(e, t, n = {}) {
  const { window: i = We, ignore: o = [], capture: r = !0, detectIframe: s = !1, controls: l = !1 } = n;
  if (!i)
    return l ? { stop: _, cancel: _, trigger: _ } : _;
  if (yn && !Ae) {
    Ae = !0;
    const f = { passive: !0 };
    Array.from(i.document.body.children).forEach((m) => m.addEventListener("click", _, f)), i.document.documentElement.addEventListener("click", _, f);
  }
  let c = !0;
  const a = (f) => F(o).some((m) => {
    if (typeof m == "string")
      return Array.from(i.document.querySelectorAll(m)).some((x) => x === f.target || f.composedPath().includes(x));
    {
      const x = R(m);
      return x && (f.target === x || f.composedPath().includes(x));
    }
  });
  function u(f) {
    const m = F(f);
    return m && m.$.subTree.shapeFlag === 16;
  }
  function d(f, m) {
    const x = F(f), k = x.$.subTree && x.$.subTree.children;
    return k == null || !Array.isArray(k) ? !1 : k.some((S) => S.el === m.target || m.composedPath().includes(S.el));
  }
  const h = (f) => {
    const m = R(e);
    if (f.target != null && !(!(m instanceof Element) && u(e) && d(e, f)) && !(!m || m === f.target || f.composedPath().includes(m))) {
      if ("detail" in f && f.detail === 0 && (c = !a(f)), !c) {
        c = !0;
        return;
      }
      t(f);
    }
  };
  let p = !1;
  const v = [
    oe(i, "click", (f) => {
      p || (p = !0, setTimeout(() => {
        p = !1;
      }, 0), h(f));
    }, { passive: !0, capture: r }),
    oe(i, "pointerdown", (f) => {
      const m = R(e);
      c = !a(f) && !!(m && !f.composedPath().includes(m));
    }, { passive: !0 }),
    s && oe(i, "blur", (f) => {
      setTimeout(() => {
        var m;
        const x = R(e);
        ((m = i.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !x?.contains(i.document.activeElement) && t(f);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), b = () => v.forEach((f) => f());
  return l ? {
    stop: b,
    cancel: () => {
      c = !1;
    },
    trigger: (f) => {
      c = !0, h(f), c = !1;
    }
  } : b;
}
function Ge(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Ge(e[t])) && (i && (i += " "), i += n);
  else for (t in e) e[t] && (i && (i += " "), i += t);
  return i;
}
function wn() {
  for (var e, t, n = 0, i = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Ge(e)) && (i && (i += " "), i += t);
  return i;
}
function kn(e) {
  Object.keys(e).forEach(function(t) {
    e[t] === void 0 && delete e[t];
  });
}
function G(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? G = function(t) {
    return typeof t;
  } : G = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, G(e);
}
function Sn(e, t) {
  switch (G(t)) {
    case "number":
      return t;
    case "string":
      return t;
    case "object":
      return t === null ? null : t[e];
  }
  return null;
}
function In(e) {
  return e.classList.contains("xyz-appear") ? "appear" : e.classList.contains("xyz-in") ? "in" : e.classList.contains("xyz-out") ? "out" : null;
}
function Te(e) {
  e._xyzAppearObserver && e._xyzAppearObserver.disconnect(), e._xyzAnimTimeout && clearTimeout(e._xyzAnimTimeout), e.removeEventListener("animationend", e._xyzAnimEnd), e.removeEventListener("animationcancelled", e._xyzAnimEnd), delete e._xyzAppearObserver, delete e._xyzAnimTimeout, delete e._xyzAnimEnd;
}
function Cn(e, t) {
  return function(n, i) {
    Te(n);
    function o() {
      Te(n), i();
    }
    var r = In(n);
    function s() {
      var c = Sn(r, e);
      if (typeof c == "number") {
        n._xyzAnimTimeout = setTimeout(o, c);
        return;
      }
      var a = "xyz-".concat(r, "-keyframes"), u = /* @__PURE__ */ new Set([n]);
      if (c === "auto") {
        var d = n.querySelectorAll(".xyz-nested, .xyz-".concat(r, "-nested"));
        d.forEach(u.add, u);
      }
      function h(p) {
        u.delete(p), u.size === 0 && o();
      }
      n._xyzAnimTimeout = setTimeout(function() {
        u.forEach(function(p) {
          var v = p.offsetParent || p.getClientRects().length;
          v || h(p);
          var b = window.getComputedStyle(p).getPropertyValue("animation-name");
          b.indexOf(a) === -1 && h(p);
        });
      }), n._xyzAnimEnd = function(p) {
        p.animationName === a && h(p.target);
      }, n.addEventListener("animationend", n._xyzAnimEnd, !1), n.addEventListener("animationcancelled", n._xyzAnimEnd, !1);
    }
    if (r === "appear" && t) {
      var l = Object.assign({}, t);
      n.classList.add("xyz-paused-all"), n._xyzAppearObserver = new IntersectionObserver(function(c, a) {
        c.forEach(function(u) {
          u.isIntersecting && (n.classList.remove("xyz-paused-all"), a.disconnect(), s());
        });
      }, l), n._xyzAppearObserver.observe(n);
    } else
      s();
  };
}
var T = {
  appearFrom: "xyz-appear-from",
  appearActive: "xyz-appear",
  appearTo: "xyz-appear-to",
  inFrom: "xyz-in-from",
  inActive: "xyz-in",
  inTo: "xyz-in-to",
  outFrom: "xyz-out-from",
  outActive: "xyz-out",
  outTo: "xyz-out-to"
}, Xe = {
  appear: Boolean,
  appearVisible: [Boolean, Object],
  duration: [Number, String, Object],
  mode: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Object.assign({}, Xe, {
  tag: {
    type: String,
    default: "div"
  },
  moveClass: String
});
function An() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, e, t, {
    style: Object.assign({}, e?.style, t?.style),
    class: wn(e?.class, t?.class)
  });
}
function Tn(e) {
  kn(e), e.appear = !!(e.appear || e.appearVisible);
  var t = e.appear, n = e.appearVisible, i = e.duration, o = Cn(i, n), r = {
    css: !0,
    type: "animation",
    appearFromClass: T.appearFrom,
    appearActiveClass: T.appearActive,
    appearToClass: T.appearTo,
    enterFromClass: T.inFrom,
    enterActiveClass: T.inActive,
    enterToClass: T.inTo,
    leaveFromClass: T.outFrom,
    leaveActiveClass: T.outActive,
    leaveToClass: T.outTo,
    onEnter: o,
    onLeave: o
  };
  t && (r.onAppear = o);
  var s = An(r, e);
  return delete s.appearVisible, delete s.duration, s;
}
function Ke(e, t) {
  var n = Tn(Object.assign({}, t.attrs, e));
  return ie(rt, n, t.slots);
}
Ke.props = Xe;
const Bn = /* @__PURE__ */ z({
  __name: "Dropdown",
  props: {
    showDivider: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String
    },
    showOnHover: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = A(void 0), n = A(null);
    xn(n, () => {
      l.value = !1;
    });
    const i = e, o = ue(), r = A(o.default), s = A(r.value()), l = A(!1);
    function c() {
      i.disabled || (l.value = !l.value);
    }
    function a() {
      if (window !== void 0 && t.value) {
        const { x: u, width: d } = t.value.getBoundingClientRect();
        return u + d > window.innerWidth;
      }
      return !1;
    }
    return (u, d) => {
      const h = Pe("divider");
      return y(), w("div", {
        ref_key: "target",
        ref: n,
        class: "ra-dropdown"
      }, [
        j("div", {
          onClick: d[0] || (d[0] = (p) => c()),
          class: L(["ra-dropdown-toggle", { "opacity-60": e.disabled }])
        }, [
          st(Ee(e.title) + " ", 1),
          e.title ? I("", !0) : E(u.$slots, "toggle", { key: 0 })
        ], 2),
        re(P(Ke), { xyz: "fade up duration-2" }, {
          default: _e(() => [
            l.value ? (y(), w("div", {
              key: 0,
              ref_key: "tray",
              ref: t,
              class: L({ "absolute bg-white top-full ra-dropdown-menu shadow-md": !0, "left-0": !a(), "right-0": a() }),
              style: { display: "table" },
              onClick: d[1] || (d[1] = (p) => l.value = !1)
            }, [
              (y(!0), w(V, null, Oe(s.value, (p, v) => (y(), w(V, { key: v }, [
                (y(), $(Fe(p))),
                e.showDivider && v < s.value.length - 1 ? (y(), $(h, {
                  key: 0,
                  gap: 0
                })) : I("", !0)
              ], 64))), 128))
            ], 2)) : I("", !0)
          ]),
          _: 1
        })
      ], 512);
    };
  }
}), En = {
  style: { display: "table-cell" },
  class: "content !pl-2"
}, zn = {
  style: { display: "table-cell" },
  class: "w-full px-1 py-2"
}, On = { class: "flex flex-1 gap-2" }, Fn = {
  style: { display: "table-cell" },
  class: "content"
}, Pn = {
  key: 0,
  style: { display: "table-cell" },
  class: "content"
}, _n = /* @__PURE__ */ z({
  __name: "DropdownItem",
  props: {
    showOnHover: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = ue(), i = A(!1), o = A(void 0);
    function r(c) {
      console.log("Clicked drop item: ", c), s("click", {});
    }
    const s = t;
    function l() {
      if (window !== void 0 && o.value) {
        const { x: c, width: a } = o.value.getBoundingClientRect();
        return c + a > window.innerWidth;
      }
      return !1;
    }
    return (c, a) => {
      const u = Pe("xyz-transition");
      return y(), w("div", {
        style: { display: "table-row" },
        class: "hover:bg-slate-200 hover:cursor-pointer relative transition-colors",
        onMouseenter: a[1] || (a[1] = (d) => i.value = !0),
        onMouseleave: a[2] || (a[2] = (d) => i.value = !1),
        onClick: r
      }, [
        j("div", En, [
          E(c.$slots, "left", {}, void 0, !0)
        ]),
        j("div", zn, [
          j("span", On, [
            E(c.$slots, "default", {}, void 0, !0)
          ])
        ]),
        j("div", Fn, [
          E(c.$slots, "right", {}, void 0, !0)
        ]),
        P(n).submenu ? (y(), w("div", Pn, [
          re(P(K), {
            icon: "ph:caret-right-light",
            height: 16
          })
        ])) : I("", !0),
        re(u, { xyz: "fade up duration-2" }, {
          default: _e(() => [
            i.value ? (y(), w("div", {
              key: 0,
              style: { display: "table" },
              ref_key: "tray",
              ref: o,
              class: L({ "absolute top-0 bg-white ra-dropdown-menu shadow-md": !0, "left-full": !l(), "right-full": l() }),
              onClick: a[0] || (a[0] = (d) => i.value = !1)
            }, [
              E(c.$slots, "submenu", {}, void 0, !0)
            ], 2)) : I("", !0)
          ]),
          _: 3
        })
      ], 32);
    };
  }
}), Rn = /* @__PURE__ */ Ue(_n, [["__scopeId", "data-v-c2876526"]]), jn = ["src", "alt"], Vn = /* @__PURE__ */ z({
  __name: "Logo",
  props: {
    img: {
      type: String,
      default: "/logo.jpeg"
    },
    alt: {
      type: String,
      default: "Company Logo"
    }
  },
  setup(e) {
    return (t, n) => (y(), w("img", {
      class: "logo",
      src: e.img,
      alt: e.alt
    }, null, 8, jn));
  }
});
export {
  $n as Badge,
  Dn as BreadcrumbItem,
  Mn as Breadcrumbs,
  Nn as Divider,
  Bn as Dropdown,
  Rn as DropdownItem,
  Vn as Logo,
  Ke as XyzTransition
};
