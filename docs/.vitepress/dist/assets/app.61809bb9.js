function As(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let o = 0; o < s.length; o++) n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Dn(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = xe(s) ? Lr(s) : Dn(s);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else {
    if (xe(e)) return e;
    if (me(e)) return e;
  }
}
const Sr = /;(?![^(]*\))/g,
  Vr = /:([^]+)/,
  Tr = /\/\*.*?\*\//gs;
function Lr(e) {
  const t = {};
  return (
    e
      .replace(Tr, "")
      .split(Sr)
      .forEach((n) => {
        if (n) {
          const s = n.split(Vr);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function de(e) {
  let t = "";
  if (xe(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = de(e[n]);
      s && (t += s + " ");
    }
  else if (me(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Er =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Mr = As(Er);
function fi(e) {
  return !!e || e === "";
}
const ae = (e) =>
    xe(e)
      ? e
      : e == null
      ? ""
      : K(e) || (me(e) && (e.toString === pi || !Q(e.toString)))
      ? JSON.stringify(e, di, 2)
      : String(e),
  di = (e, t) =>
    t && t.__v_isRef
      ? di(e, t.value)
      : Nt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, o]) => ((n[`${s} =>`] = o), n),
            {}
          ),
        }
      : hi(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : me(t) && !K(t) && !vi(t)
      ? String(t)
      : t,
  ge = {},
  At = [],
  Ke = () => {},
  Ir = () => !1,
  Ar = /^on[^a-z]/,
  _n = (e) => Ar.test(e),
  Ns = (e) => e.startsWith("onUpdate:"),
  ke = Object.assign,
  Bs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Nr = Object.prototype.hasOwnProperty,
  oe = (e, t) => Nr.call(e, t),
  K = Array.isArray,
  Nt = (e) => jn(e) === "[object Map]",
  hi = (e) => jn(e) === "[object Set]",
  Q = (e) => typeof e == "function",
  xe = (e) => typeof e == "string",
  Os = (e) => typeof e == "symbol",
  me = (e) => e !== null && typeof e == "object",
  _i = (e) => me(e) && Q(e.then) && Q(e.catch),
  pi = Object.prototype.toString,
  jn = (e) => pi.call(e),
  Br = (e) => jn(e).slice(8, -1),
  vi = (e) => jn(e) === "[object Object]",
  Fs = (e) =>
    xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  en = As(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  zn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Or = /-(\w)/g,
  et = zn((e) => e.replace(Or, (t, n) => (n ? n.toUpperCase() : ""))),
  Fr = /\B([A-Z])/g,
  qt = zn((e) => e.replace(Fr, "-$1").toLowerCase()),
  Un = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ls = zn((e) => (e ? `on${Un(e)}` : "")),
  ln = (e, t) => !Object.is(e, t),
  cs = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Tn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Hs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let mo;
const Hr = () =>
  mo ||
  (mo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Ae;
class Rr {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ae),
      !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ae;
      try {
        return (Ae = this), t();
      } finally {
        Ae = n;
      }
    }
  }
  on() {
    Ae = this;
  }
  off() {
    Ae = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function Dr(e, t = Ae) {
  t && t.active && t.effects.push(e);
}
function jr() {
  return Ae;
}
function zr(e) {
  Ae && Ae.cleanups.push(e);
}
const Rs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  mi = (e) => (e.w & ht) > 0,
  gi = (e) => (e.n & ht) > 0,
  Ur = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ht;
  },
  Kr = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        mi(o) && !gi(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~ht),
          (o.n &= ~ht);
      }
      t.length = n;
    }
  },
  gs = new WeakMap();
let Zt = 0,
  ht = 1;
const bs = 30;
let ze;
const St = Symbol(""),
  ys = Symbol("");
class Ds {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Dr(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = ze,
      n = ft;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = ze),
        (ze = this),
        (ft = !0),
        (ht = 1 << ++Zt),
        Zt <= bs ? Ur(this) : go(this),
        this.fn()
      );
    } finally {
      Zt <= bs && Kr(this),
        (ht = 1 << --Zt),
        (ze = this.parent),
        (ft = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    ze === this
      ? (this.deferStop = !0)
      : this.active &&
        (go(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function go(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ft = !0;
const bi = [];
function Gt() {
  bi.push(ft), (ft = !1);
}
function Yt() {
  const e = bi.pop();
  ft = e === void 0 ? !0 : e;
}
function Be(e, t, n) {
  if (ft && ze) {
    let s = gs.get(e);
    s || gs.set(e, (s = new Map()));
    let o = s.get(n);
    o || s.set(n, (o = Rs())), yi(o);
  }
}
function yi(e, t) {
  let n = !1;
  Zt <= bs ? gi(e) || ((e.n |= ht), (n = !mi(e))) : (n = !e.has(ze)),
    n && (e.add(ze), ze.deps.push(e));
}
function ot(e, t, n, s, o, i) {
  const r = gs.get(e);
  if (!r) return;
  let l = [];
  if (t === "clear") l = [...r.values()];
  else if (n === "length" && K(e)) {
    const c = Hs(s);
    r.forEach((f, h) => {
      (h === "length" || h >= c) && l.push(f);
    });
  } else
    switch ((n !== void 0 && l.push(r.get(n)), t)) {
      case "add":
        K(e)
          ? Fs(n) && l.push(r.get("length"))
          : (l.push(r.get(St)), Nt(e) && l.push(r.get(ys)));
        break;
      case "delete":
        K(e) || (l.push(r.get(St)), Nt(e) && l.push(r.get(ys)));
        break;
      case "set":
        Nt(e) && l.push(r.get(St));
        break;
    }
  if (l.length === 1) l[0] && xs(l[0]);
  else {
    const c = [];
    for (const f of l) f && c.push(...f);
    xs(Rs(c));
  }
}
function xs(e, t) {
  const n = K(e) ? e : [...e];
  for (const s of n) s.computed && bo(s);
  for (const s of n) s.computed || bo(s);
}
function bo(e, t) {
  (e !== ze || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Wr = As("__proto__,__v_isRef,__isVue"),
  xi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Os)
  ),
  qr = js(),
  Gr = js(!1, !0),
  Yr = js(!0),
  yo = Jr();
function Jr() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = ce(this);
        for (let i = 0, r = this.length; i < r; i++) Be(s, "get", i + "");
        const o = s[t](...n);
        return o === -1 || o === !1 ? s[t](...n.map(ce)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Gt();
        const s = ce(this)[t].apply(this, n);
        return Yt(), s;
      };
    }),
    e
  );
}
function js(e = !1, t = !1) {
  return function (s, o, i) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && i === (e ? (t ? dl : Ci) : t ? Pi : $i).get(s))
      return s;
    const r = K(s);
    if (!e && r && oe(yo, o)) return Reflect.get(yo, o, i);
    const l = Reflect.get(s, o, i);
    return (Os(o) ? xi.has(o) : Wr(o)) || (e || Be(s, "get", o), t)
      ? l
      : Pe(l)
      ? r && Fs(o)
        ? l
        : l.value
      : me(l)
      ? e
        ? Ks(l)
        : Wn(l)
      : l;
  };
}
const Qr = wi(),
  Xr = wi(!0);
function wi(e = !1) {
  return function (n, s, o, i) {
    let r = n[s];
    if (jt(r) && Pe(r) && !Pe(o)) return !1;
    if (
      !e &&
      (!Ln(o) && !jt(o) && ((r = ce(r)), (o = ce(o))), !K(n) && Pe(r) && !Pe(o))
    )
      return (r.value = o), !0;
    const l = K(n) && Fs(s) ? Number(s) < n.length : oe(n, s),
      c = Reflect.set(n, s, o, i);
    return (
      n === ce(i) && (l ? ln(o, r) && ot(n, "set", s, o) : ot(n, "add", s, o)),
      c
    );
  };
}
function Zr(e, t) {
  const n = oe(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && ot(e, "delete", t, void 0), s;
}
function el(e, t) {
  const n = Reflect.has(e, t);
  return (!Os(t) || !xi.has(t)) && Be(e, "has", t), n;
}
function tl(e) {
  return Be(e, "iterate", K(e) ? "length" : St), Reflect.ownKeys(e);
}
const ki = { get: qr, set: Qr, deleteProperty: Zr, has: el, ownKeys: tl },
  nl = {
    get: Yr,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  sl = ke({}, ki, { get: Gr, set: Xr }),
  zs = (e) => e,
  Kn = (e) => Reflect.getPrototypeOf(e);
function gn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = ce(e),
    i = ce(t);
  n || (t !== i && Be(o, "get", t), Be(o, "get", i));
  const { has: r } = Kn(o),
    l = s ? zs : n ? qs : cn;
  if (r.call(o, t)) return l(e.get(t));
  if (r.call(o, i)) return l(e.get(i));
  e !== o && e.get(t);
}
function bn(e, t = !1) {
  const n = this.__v_raw,
    s = ce(n),
    o = ce(e);
  return (
    t || (e !== o && Be(s, "has", e), Be(s, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function yn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Be(ce(e), "iterate", St), Reflect.get(e, "size", e)
  );
}
function xo(e) {
  e = ce(e);
  const t = ce(this);
  return Kn(t).has.call(t, e) || (t.add(e), ot(t, "add", e, e)), this;
}
function wo(e, t) {
  t = ce(t);
  const n = ce(this),
    { has: s, get: o } = Kn(n);
  let i = s.call(n, e);
  i || ((e = ce(e)), (i = s.call(n, e)));
  const r = o.call(n, e);
  return (
    n.set(e, t), i ? ln(t, r) && ot(n, "set", e, t) : ot(n, "add", e, t), this
  );
}
function ko(e) {
  const t = ce(this),
    { has: n, get: s } = Kn(t);
  let o = n.call(t, e);
  o || ((e = ce(e)), (o = n.call(t, e))), s && s.call(t, e);
  const i = t.delete(e);
  return o && ot(t, "delete", e, void 0), i;
}
function $o() {
  const e = ce(this),
    t = e.size !== 0,
    n = e.clear();
  return t && ot(e, "clear", void 0, void 0), n;
}
function xn(e, t) {
  return function (s, o) {
    const i = this,
      r = i.__v_raw,
      l = ce(r),
      c = t ? zs : e ? qs : cn;
    return (
      !e && Be(l, "iterate", St), r.forEach((f, h) => s.call(o, c(f), c(h), i))
    );
  };
}
function wn(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      i = ce(o),
      r = Nt(i),
      l = e === "entries" || (e === Symbol.iterator && r),
      c = e === "keys" && r,
      f = o[e](...s),
      h = n ? zs : t ? qs : cn;
    return (
      !t && Be(i, "iterate", c ? ys : St),
      {
        next() {
          const { value: v, done: b } = f.next();
          return b
            ? { value: v, done: b }
            : { value: l ? [h(v[0]), h(v[1])] : h(v), done: b };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function rt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function ol() {
  const e = {
      get(i) {
        return gn(this, i);
      },
      get size() {
        return yn(this);
      },
      has: bn,
      add: xo,
      set: wo,
      delete: ko,
      clear: $o,
      forEach: xn(!1, !1),
    },
    t = {
      get(i) {
        return gn(this, i, !1, !0);
      },
      get size() {
        return yn(this);
      },
      has: bn,
      add: xo,
      set: wo,
      delete: ko,
      clear: $o,
      forEach: xn(!1, !0),
    },
    n = {
      get(i) {
        return gn(this, i, !0);
      },
      get size() {
        return yn(this, !0);
      },
      has(i) {
        return bn.call(this, i, !0);
      },
      add: rt("add"),
      set: rt("set"),
      delete: rt("delete"),
      clear: rt("clear"),
      forEach: xn(!0, !1),
    },
    s = {
      get(i) {
        return gn(this, i, !0, !0);
      },
      get size() {
        return yn(this, !0);
      },
      has(i) {
        return bn.call(this, i, !0);
      },
      add: rt("add"),
      set: rt("set"),
      delete: rt("delete"),
      clear: rt("clear"),
      forEach: xn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = wn(i, !1, !1)),
        (n[i] = wn(i, !0, !1)),
        (t[i] = wn(i, !1, !0)),
        (s[i] = wn(i, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [il, rl, ll, cl] = ol();
function Us(e, t) {
  const n = t ? (e ? cl : ll) : e ? rl : il;
  return (s, o, i) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? s
      : Reflect.get(oe(n, o) && o in s ? n : s, o, i);
}
const al = { get: Us(!1, !1) },
  ul = { get: Us(!1, !0) },
  fl = { get: Us(!0, !1) },
  $i = new WeakMap(),
  Pi = new WeakMap(),
  Ci = new WeakMap(),
  dl = new WeakMap();
function hl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _l(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hl(Br(e));
}
function Wn(e) {
  return jt(e) ? e : Ws(e, !1, ki, al, $i);
}
function pl(e) {
  return Ws(e, !1, sl, ul, Pi);
}
function Ks(e) {
  return Ws(e, !0, nl, fl, Ci);
}
function Ws(e, t, n, s, o) {
  if (!me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = o.get(e);
  if (i) return i;
  const r = _l(e);
  if (r === 0) return e;
  const l = new Proxy(e, r === 2 ? s : n);
  return o.set(e, l), l;
}
function Bt(e) {
  return jt(e) ? Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ln(e) {
  return !!(e && e.__v_isShallow);
}
function Si(e) {
  return Bt(e) || jt(e);
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function tn(e) {
  return Tn(e, "__v_skip", !0), e;
}
const cn = (e) => (me(e) ? Wn(e) : e),
  qs = (e) => (me(e) ? Ks(e) : e);
function Vi(e) {
  ft && ze && ((e = ce(e)), yi(e.dep || (e.dep = Rs())));
}
function Ti(e, t) {
  (e = ce(e)), e.dep && xs(e.dep);
}
function Pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function ve(e) {
  return Li(e, !1);
}
function vl(e) {
  return Li(e, !0);
}
function Li(e, t) {
  return Pe(e) ? e : new ml(e, t);
}
class ml {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : cn(t));
  }
  get value() {
    return Vi(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ln(t) || jt(t);
    (t = n ? t : ce(t)),
      ln(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : cn(t)), Ti(this));
  }
}
function _(e) {
  return Pe(e) ? e.value : e;
}
const gl = {
  get: (e, t, n) => _(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Pe(o) && !Pe(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Ei(e) {
  return Bt(e) ? e : new Proxy(e, gl);
}
var Mi;
class bl {
  constructor(t, n, s, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Mi] = !1),
      (this._dirty = !0),
      (this.effect = new Ds(t, () => {
        this._dirty || ((this._dirty = !0), Ti(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = ce(this);
    return (
      Vi(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Mi = "__v_isReadonly";
function yl(e, t, n = !1) {
  let s, o;
  const i = Q(e);
  return (
    i ? ((s = e), (o = Ke)) : ((s = e.get), (o = e.set)),
    new bl(s, o, i || !o, n)
  );
}
function dt(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (i) {
    qn(i, t, n);
  }
  return o;
}
function He(e, t, n, s) {
  if (Q(e)) {
    const i = dt(e, t, n, s);
    return (
      i &&
        _i(i) &&
        i.catch((r) => {
          qn(r, t, n);
        }),
      i
    );
  }
  const o = [];
  for (let i = 0; i < e.length; i++) o.push(He(e[i], t, n, s));
  return o;
}
function qn(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const r = t.proxy,
      l = n;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, r, l) === !1) return;
      }
      i = i.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      dt(c, null, 10, [e, r, l]);
      return;
    }
  }
  xl(e, n, o, s);
}
function xl(e, t, n, s = !0) {
  console.error(e);
}
let an = !1,
  ws = !1;
const $e = [];
let Xe = 0;
const Ot = [];
let st = null,
  kt = 0;
const Ii = Promise.resolve();
let Gs = null;
function Ys(e) {
  const t = Gs || Ii;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wl(e) {
  let t = Xe + 1,
    n = $e.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    un($e[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function Js(e) {
  (!$e.length || !$e.includes(e, an && e.allowRecurse ? Xe + 1 : Xe)) &&
    (e.id == null ? $e.push(e) : $e.splice(wl(e.id), 0, e), Ai());
}
function Ai() {
  !an && !ws && ((ws = !0), (Gs = Ii.then(Ni)));
}
function kl(e) {
  const t = $e.indexOf(e);
  t > Xe && $e.splice(t, 1);
}
function $l(e) {
  K(e)
    ? Ot.push(...e)
    : (!st || !st.includes(e, e.allowRecurse ? kt + 1 : kt)) && Ot.push(e),
    Ai();
}
function Po(e, t = an ? Xe + 1 : 0) {
  for (; t < $e.length; t++) {
    const n = $e[t];
    n && n.pre && ($e.splice(t, 1), t--, n());
  }
}
function En(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)];
    if (((Ot.length = 0), st)) {
      st.push(...t);
      return;
    }
    for (st = t, st.sort((n, s) => un(n) - un(s)), kt = 0; kt < st.length; kt++)
      st[kt]();
    (st = null), (kt = 0);
  }
}
const un = (e) => (e.id == null ? 1 / 0 : e.id),
  Pl = (e, t) => {
    const n = un(e) - un(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ni(e) {
  (ws = !1), (an = !0), $e.sort(Pl);
  const t = Ke;
  try {
    for (Xe = 0; Xe < $e.length; Xe++) {
      const n = $e[Xe];
      n && n.active !== !1 && dt(n, null, 14);
    }
  } finally {
    (Xe = 0),
      ($e.length = 0),
      En(),
      (an = !1),
      (Gs = null),
      ($e.length || Ot.length) && Ni();
  }
}
function Cl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ge;
  let o = n;
  const i = t.startsWith("update:"),
    r = i && t.slice(7);
  if (r && r in s) {
    const h = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: v, trim: b } = s[h] || ge;
    b && (o = n.map(($) => (xe($) ? $.trim() : $))), v && (o = n.map(Hs));
  }
  let l,
    c = s[(l = ls(t))] || s[(l = ls(et(t)))];
  !c && i && (c = s[(l = ls(qt(t)))]), c && He(c, e, 6, o);
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), He(f, e, 6, o);
  }
}
function Bi(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let r = {},
    l = !1;
  if (!Q(e)) {
    const c = (f) => {
      const h = Bi(f, t, !0);
      h && ((l = !0), ke(r, h));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (me(e) && s.set(e, null), null)
    : (K(i) ? i.forEach((c) => (r[c] = null)) : ke(r, i),
      me(e) && s.set(e, r),
      r);
}
function Gn(e, t) {
  return !e || !_n(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, qt(t)) || oe(e, t));
}
let Ce = null,
  Yn = null;
function Mn(e) {
  const t = Ce;
  return (Ce = e), (Yn = (e && e.type.__scopeId) || null), t;
}
function qe(e) {
  Yn = e;
}
function Ge() {
  Yn = null;
}
function A(e, t = Ce, n) {
  if (!t || e._n) return e;
  const s = (...o) => {
    s._d && No(-1);
    const i = Mn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Mn(i), s._d && No(1);
    }
    return r;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function as(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    props: i,
    propsOptions: [r],
    slots: l,
    attrs: c,
    emit: f,
    render: h,
    renderCache: v,
    data: b,
    setupState: $,
    ctx: U,
    inheritAttrs: F,
  } = e;
  let ne, w;
  const L = Mn(e);
  try {
    if (n.shapeFlag & 4) {
      const q = o || s;
      (ne = je(h.call(q, q, v, i, $, b, U))), (w = c);
    } else {
      const q = t;
      (ne = je(
        q.length > 1 ? q(i, { attrs: c, slots: l, emit: f }) : q(i, null)
      )),
        (w = t.props ? c : Sl(c));
    }
  } catch (q) {
    (sn.length = 0), qn(q, e, 1), (ne = V(Ne));
  }
  let I = ne;
  if (w && F !== !1) {
    const q = Object.keys(w),
      { shapeFlag: Z } = I;
    q.length && Z & 7 && (r && q.some(Ns) && (w = Vl(w, r)), (I = _t(I, w)));
  }
  return (
    n.dirs && ((I = _t(I)), (I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (I.transition = n.transition),
    (ne = I),
    Mn(L),
    ne
  );
}
const Sl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || _n(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Vl = (e, t) => {
    const n = {};
    for (const s in e) (!Ns(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Tl(e, t, n) {
  const { props: s, children: o, component: i } = e,
    { props: r, children: l, patchFlag: c } = t,
    f = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Co(s, r, f) : !!r;
    if (c & 8) {
      const h = t.dynamicProps;
      for (let v = 0; v < h.length; v++) {
        const b = h[v];
        if (r[b] !== s[b] && !Gn(f, b)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : s === r
      ? !1
      : s
      ? r
        ? Co(s, r, f)
        : !0
      : !!r;
  return !1;
}
function Co(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !Gn(n, i)) return !0;
  }
  return !1;
}
function Ll({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const El = (e) => e.__isSuspense;
function Oi(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : $l(e);
}
function Jn(e, t) {
  if (we) {
    let n = we.provides;
    const s = we.parent && we.parent.provides;
    s === n && (n = we.provides = Object.create(s)), (n[e] = t);
  }
}
function We(e, t, n = !1) {
  const s = we || Ce;
  if (s) {
    const o =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && Q(t) ? t.call(s.proxy) : t;
  }
}
function zt(e, t) {
  return Qn(e, null, t);
}
function Fi(e, t) {
  return Qn(e, null, { flush: "post" });
}
const kn = {};
function Ze(e, t, n) {
  return Qn(e, t, n);
}
function Qn(
  e,
  t,
  { immediate: n, deep: s, flush: o, onTrack: i, onTrigger: r } = ge
) {
  const l = we;
  let c,
    f = !1,
    h = !1;
  if (
    (Pe(e)
      ? ((c = () => e.value), (f = Ln(e)))
      : Bt(e)
      ? ((c = () => e), (s = !0))
      : K(e)
      ? ((h = !0),
        (f = e.some((I) => Bt(I) || Ln(I))),
        (c = () =>
          e.map((I) => {
            if (Pe(I)) return I.value;
            if (Bt(I)) return It(I);
            if (Q(I)) return dt(I, l, 2);
          })))
      : Q(e)
      ? t
        ? (c = () => dt(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return v && v(), He(e, l, 3, [b]);
          })
      : (c = Ke),
    t && s)
  ) {
    const I = c;
    c = () => It(I());
  }
  let v,
    b = (I) => {
      v = w.onStop = () => {
        dt(I, l, 4);
      };
    },
    $;
  if (dn)
    if (
      ((b = Ke),
      t ? n && He(t, l, 3, [c(), h ? [] : void 0, b]) : c(),
      o === "sync")
    ) {
      const I = wc();
      $ = I.__watcherHandles || (I.__watcherHandles = []);
    } else return Ke;
  let U = h ? new Array(e.length).fill(kn) : kn;
  const F = () => {
    if (!!w.active)
      if (t) {
        const I = w.run();
        (s || f || (h ? I.some((q, Z) => ln(q, U[Z])) : ln(I, U))) &&
          (v && v(),
          He(t, l, 3, [I, U === kn ? void 0 : h && U[0] === kn ? [] : U, b]),
          (U = I));
      } else w.run();
  };
  F.allowRecurse = !!t;
  let ne;
  o === "sync"
    ? (ne = F)
    : o === "post"
    ? (ne = () => Le(F, l && l.suspense))
    : ((F.pre = !0), l && (F.id = l.uid), (ne = () => Js(F)));
  const w = new Ds(c, ne);
  t
    ? n
      ? F()
      : (U = w.run())
    : o === "post"
    ? Le(w.run.bind(w), l && l.suspense)
    : w.run();
  const L = () => {
    w.stop(), l && l.scope && Bs(l.scope.effects, w);
  };
  return $ && $.push(L), L;
}
function Ml(e, t, n) {
  const s = this.proxy,
    o = xe(e) ? (e.includes(".") ? Hi(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  Q(t) ? (i = t) : ((i = t.handler), (n = t));
  const r = we;
  Kt(this);
  const l = Qn(o, i.bind(s), n);
  return r ? Kt(r) : Vt(), l;
}
function Hi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++) s = s[n[o]];
    return s;
  };
}
function It(e, t) {
  if (!me(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Pe(e))) It(e.value, t);
  else if (K(e)) for (let n = 0; n < e.length; n++) It(e[n], t);
  else if (hi(e) || Nt(e))
    e.forEach((n) => {
      It(n, t);
    });
  else if (vi(e)) for (const n in e) It(e[n], t);
  return e;
}
function Il() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Re(() => {
      e.isMounted = !0;
    }),
    Ui(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  Al = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Oe,
      onEnter: Oe,
      onAfterEnter: Oe,
      onEnterCancelled: Oe,
      onBeforeLeave: Oe,
      onLeave: Oe,
      onAfterLeave: Oe,
      onLeaveCancelled: Oe,
      onBeforeAppear: Oe,
      onAppear: Oe,
      onAfterAppear: Oe,
      onAppearCancelled: Oe,
    },
    setup(e, { slots: t }) {
      const n = so(),
        s = Il();
      let o;
      return () => {
        const i = t.default && ji(t.default(), !0);
        if (!i || !i.length) return;
        let r = i[0];
        if (i.length > 1) {
          for (const F of i)
            if (F.type !== Ne) {
              r = F;
              break;
            }
        }
        const l = ce(e),
          { mode: c } = l;
        if (s.isLeaving) return us(r);
        const f = So(r);
        if (!f) return us(r);
        const h = ks(f, l, s, n);
        $s(f, h);
        const v = n.subTree,
          b = v && So(v);
        let $ = !1;
        const { getTransitionKey: U } = f.type;
        if (U) {
          const F = U();
          o === void 0 ? (o = F) : F !== o && ((o = F), ($ = !0));
        }
        if (b && b.type !== Ne && (!$t(f, b) || $)) {
          const F = ks(b, l, s, n);
          if (($s(b, F), c === "out-in"))
            return (
              (s.isLeaving = !0),
              (F.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              us(r)
            );
          c === "in-out" &&
            f.type !== Ne &&
            (F.delayLeave = (ne, w, L) => {
              const I = Di(s, b);
              (I[String(b.key)] = b),
                (ne._leaveCb = () => {
                  w(), (ne._leaveCb = void 0), delete h.delayedLeave;
                }),
                (h.delayedLeave = L);
            });
        }
        return r;
      };
    },
  },
  Ri = Al;
function Di(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function ks(e, t, n, s) {
  const {
      appear: o,
      mode: i,
      persisted: r = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: v,
      onLeave: b,
      onAfterLeave: $,
      onLeaveCancelled: U,
      onBeforeAppear: F,
      onAppear: ne,
      onAfterAppear: w,
      onAppearCancelled: L,
    } = t,
    I = String(e.key),
    q = Di(n, e),
    Z = (M, X) => {
      M && He(M, s, 9, X);
    },
    he = (M, X) => {
      const J = X[1];
      Z(M, X),
        K(M) ? M.every((re) => re.length <= 1) && J() : M.length <= 1 && J();
    },
    se = {
      mode: i,
      persisted: r,
      beforeEnter(M) {
        let X = l;
        if (!n.isMounted)
          if (o) X = F || l;
          else return;
        M._leaveCb && M._leaveCb(!0);
        const J = q[I];
        J && $t(e, J) && J.el._leaveCb && J.el._leaveCb(), Z(X, [M]);
      },
      enter(M) {
        let X = c,
          J = f,
          re = h;
        if (!n.isMounted)
          if (o) (X = ne || c), (J = w || f), (re = L || h);
          else return;
        let B = !1;
        const ee = (M._enterCb = (R) => {
          B ||
            ((B = !0),
            R ? Z(re, [M]) : Z(J, [M]),
            se.delayedLeave && se.delayedLeave(),
            (M._enterCb = void 0));
        });
        X ? he(X, [M, ee]) : ee();
      },
      leave(M, X) {
        const J = String(e.key);
        if ((M._enterCb && M._enterCb(!0), n.isUnmounting)) return X();
        Z(v, [M]);
        let re = !1;
        const B = (M._leaveCb = (ee) => {
          re ||
            ((re = !0),
            X(),
            ee ? Z(U, [M]) : Z($, [M]),
            (M._leaveCb = void 0),
            q[J] === e && delete q[J]);
        });
        (q[J] = e), b ? he(b, [M, B]) : B();
      },
      clone(M) {
        return ks(M, t, n, s);
      },
    };
  return se;
}
function us(e) {
  if (Xn(e)) return (e = _t(e)), (e.children = null), e;
}
function So(e) {
  return Xn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function $s(e, t) {
  e.shapeFlag & 6 && e.component
    ? $s(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function ji(e, t = !1, n) {
  let s = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === G
      ? (r.patchFlag & 128 && o++, (s = s.concat(ji(r.children, t, l))))
      : (t || r.type !== Ne) && s.push(l != null ? _t(r, { key: l }) : r);
  }
  if (o > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
function H(e) {
  return Q(e) ? { setup: e, name: e.name } : e;
}
const Ft = (e) => !!e.type.__asyncLoader,
  Xn = (e) => e.type.__isKeepAlive;
function Nl(e, t) {
  zi(e, "a", t);
}
function Bl(e, t) {
  zi(e, "da", t);
}
function zi(e, t, n = we) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Zn(t, s, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Xn(o.parent.vnode) && Ol(s, t, n, o), (o = o.parent);
  }
}
function Ol(e, t, n, s) {
  const o = Zn(t, e, s, !0);
  pt(() => {
    Bs(s[t], o);
  }, n);
}
function Zn(e, t, n = we, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          Gt(), Kt(n);
          const l = He(t, n, e, r);
          return Vt(), Yt(), l;
        });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const it =
    (e) =>
    (t, n = we) =>
      (!dn || e === "sp") && Zn(e, (...s) => t(...s), n),
  Fl = it("bm"),
  Re = it("m"),
  Hl = it("bu"),
  Qs = it("u"),
  Ui = it("bum"),
  pt = it("um"),
  Rl = it("sp"),
  Dl = it("rtg"),
  jl = it("rtc");
function zl(e, t = we) {
  Zn("ec", e, t);
}
function Qe(e, t, n, s) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let c = l.dir[s];
    c && (Gt(), He(c, n, 8, [e.el, l, e, t]), Yt());
  }
}
const Xs = "components";
function Tt(e, t) {
  return Wi(Xs, e, !0, t) || e;
}
const Ki = Symbol();
function Zs(e) {
  return xe(e) ? Wi(Xs, e, !1) || e : e || Ki;
}
function Wi(e, t, n = !0, s = !1) {
  const o = Ce || we;
  if (o) {
    const i = o.type;
    if (e === Xs) {
      const l = bc(i, !1);
      if (l && (l === t || l === et(t) || l === Un(et(t)))) return i;
    }
    const r = Vo(o[e] || i[e], t) || Vo(o.appContext[e], t);
    return !r && s ? i : r;
  }
}
function Vo(e, t) {
  return e && (e[t] || e[et(t)] || e[Un(et(t))]);
}
function Se(e, t, n, s) {
  let o;
  const i = n && n[s];
  if (K(e) || xe(e)) {
    o = new Array(e.length);
    for (let r = 0, l = e.length; r < l; r++)
      o[r] = t(e[r], r, void 0, i && i[r]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++) o[r] = t(r + 1, r, void 0, i && i[r]);
  } else if (me(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (r, l) => t(r, l, void 0, i && i[l]));
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let l = 0, c = r.length; l < c; l++) {
        const f = r[l];
        o[l] = t(e[f], f, l, i && i[l]);
      }
    }
  else o = [];
  return n && (n[s] = o), o;
}
function T(e, t, n = {}, s, o) {
  if (Ce.isCE || (Ce.parent && Ft(Ce.parent) && Ce.parent.isCE))
    return t !== "default" && (n.name = t), V("slot", n, s && s());
  let i = e[t];
  i && i._c && (i._d = !1), d();
  const r = i && qi(i(n)),
    l = Y(
      G,
      { key: n.key || (r && r.key) || `_${t}` },
      r || (s ? s() : []),
      r && e._ === 1 ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function qi(e) {
  return e.some((t) =>
    Nn(t) ? !(t.type === Ne || (t.type === G && !qi(t.children))) : !0
  )
    ? e
    : null;
}
const Ps = (e) => (e ? (or(e) ? oo(e) || e.proxy : Ps(e.parent)) : null),
  nn = ke(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ps(e.parent),
    $root: (e) => Ps(e.root),
    $emit: (e) => e.emit,
    $options: (e) => eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Js(e.update)),
    $nextTick: (e) => e.n || (e.n = Ys.bind(e.proxy)),
    $watch: (e) => Ml.bind(e),
  }),
  fs = (e, t) => e !== ge && !e.__isScriptSetup && oe(e, t),
  Ul = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: i,
        accessCache: r,
        type: l,
        appContext: c,
      } = e;
      let f;
      if (t[0] !== "$") {
        const $ = r[t];
        if ($ !== void 0)
          switch ($) {
            case 1:
              return s[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (fs(s, t)) return (r[t] = 1), s[t];
          if (o !== ge && oe(o, t)) return (r[t] = 2), o[t];
          if ((f = e.propsOptions[0]) && oe(f, t)) return (r[t] = 3), i[t];
          if (n !== ge && oe(n, t)) return (r[t] = 4), n[t];
          Cs && (r[t] = 0);
        }
      }
      const h = nn[t];
      let v, b;
      if (h) return t === "$attrs" && Be(e, "get", t), h(e);
      if ((v = l.__cssModules) && (v = v[t])) return v;
      if (n !== ge && oe(n, t)) return (r[t] = 4), n[t];
      if (((b = c.config.globalProperties), oe(b, t))) return b[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: i } = e;
      return fs(o, t)
        ? ((o[t] = n), !0)
        : s !== ge && oe(s, t)
        ? ((s[t] = n), !0)
        : oe(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: i,
        },
      },
      r
    ) {
      let l;
      return (
        !!n[r] ||
        (e !== ge && oe(e, r)) ||
        fs(t, r) ||
        ((l = i[0]) && oe(l, r)) ||
        oe(s, r) ||
        oe(nn, r) ||
        oe(o.config.globalProperties, r)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : oe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Cs = !0;
function Kl(e) {
  const t = eo(e),
    n = e.proxy,
    s = e.ctx;
  (Cs = !1), t.beforeCreate && To(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: c,
    inject: f,
    created: h,
    beforeMount: v,
    mounted: b,
    beforeUpdate: $,
    updated: U,
    activated: F,
    deactivated: ne,
    beforeDestroy: w,
    beforeUnmount: L,
    destroyed: I,
    unmounted: q,
    render: Z,
    renderTracked: he,
    renderTriggered: se,
    errorCaptured: M,
    serverPrefetch: X,
    expose: J,
    inheritAttrs: re,
    components: B,
    directives: ee,
    filters: R,
  } = t;
  if ((f && Wl(f, s, null, e.appContext.config.unwrapInjectedRef), r))
    for (const be in r) {
      const _e = r[be];
      Q(_e) && (s[be] = _e.bind(n));
    }
  if (o) {
    const be = o.call(n, n);
    me(be) && (e.data = Wn(be));
  }
  if (((Cs = !0), i))
    for (const be in i) {
      const _e = i[be],
        mt = Q(_e) ? _e.bind(n, n) : Q(_e.get) ? _e.get.bind(n, n) : Ke,
        vn = !Q(_e) && Q(_e.set) ? _e.set.bind(n) : Ke,
        gt = ie({ get: mt, set: vn });
      Object.defineProperty(s, be, {
        enumerable: !0,
        configurable: !0,
        get: () => gt.value,
        set: (Ye) => (gt.value = Ye),
      });
    }
  if (l) for (const be in l) Gi(l[be], s, n, be);
  if (c) {
    const be = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(be).forEach((_e) => {
      Jn(_e, be[_e]);
    });
  }
  h && To(h, e, "c");
  function ue(be, _e) {
    K(_e) ? _e.forEach((mt) => be(mt.bind(n))) : _e && be(_e.bind(n));
  }
  if (
    (ue(Fl, v),
    ue(Re, b),
    ue(Hl, $),
    ue(Qs, U),
    ue(Nl, F),
    ue(Bl, ne),
    ue(zl, M),
    ue(jl, he),
    ue(Dl, se),
    ue(Ui, L),
    ue(pt, q),
    ue(Rl, X),
    K(J))
  )
    if (J.length) {
      const be = e.exposed || (e.exposed = {});
      J.forEach((_e) => {
        Object.defineProperty(be, _e, {
          get: () => n[_e],
          set: (mt) => (n[_e] = mt),
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === Ke && (e.render = Z),
    re != null && (e.inheritAttrs = re),
    B && (e.components = B),
    ee && (e.directives = ee);
}
function Wl(e, t, n = Ke, s = !1) {
  K(e) && (e = Ss(e));
  for (const o in e) {
    const i = e[o];
    let r;
    me(i)
      ? "default" in i
        ? (r = We(i.from || o, i.default, !0))
        : (r = We(i.from || o))
      : (r = We(i)),
      Pe(r) && s
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[o] = r);
  }
}
function To(e, t, n) {
  He(K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gi(e, t, n, s) {
  const o = s.includes(".") ? Hi(n, s) : () => n[s];
  if (xe(e)) {
    const i = t[e];
    Q(i) && Ze(o, i);
  } else if (Q(e)) Ze(o, e.bind(n));
  else if (me(e))
    if (K(e)) e.forEach((i) => Gi(i, t, n, s));
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(i) && Ze(o, i, e);
    }
}
function eo(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !o.length && !n && !s
      ? (c = t)
      : ((c = {}), o.length && o.forEach((f) => In(c, f, r, !0)), In(c, t, r)),
    me(t) && i.set(t, c),
    c
  );
}
function In(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && In(e, i, n, !0), o && o.forEach((r) => In(e, r, n, !0));
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = ql[r] || (n && n[r]);
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const ql = {
  data: Lo,
  props: wt,
  emits: wt,
  methods: wt,
  computed: wt,
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  components: wt,
  directives: wt,
  watch: Yl,
  provide: Lo,
  inject: Gl,
};
function Lo(e, t) {
  return t
    ? e
      ? function () {
          return ke(
            Q(e) ? e.call(this, this) : e,
            Q(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Gl(e, t) {
  return wt(Ss(e), Ss(t));
}
function Ss(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function wt(e, t) {
  return e ? ke(ke(Object.create(null), e), t) : t;
}
function Yl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ke(Object.create(null), e);
  for (const s in t) n[s] = Ve(e[s], t[s]);
  return n;
}
function Jl(e, t, n, s = !1) {
  const o = {},
    i = {};
  Tn(i, es, 1), (e.propsDefaults = Object.create(null)), Yi(e, t, o, i);
  for (const r in e.propsOptions[0]) r in o || (o[r] = void 0);
  n ? (e.props = s ? o : pl(o)) : e.type.props ? (e.props = o) : (e.props = i),
    (e.attrs = i);
}
function Ql(e, t, n, s) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: r },
    } = e,
    l = ce(o),
    [c] = e.propsOptions;
  let f = !1;
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const h = e.vnode.dynamicProps;
      for (let v = 0; v < h.length; v++) {
        let b = h[v];
        if (Gn(e.emitsOptions, b)) continue;
        const $ = t[b];
        if (c)
          if (oe(i, b)) $ !== i[b] && ((i[b] = $), (f = !0));
          else {
            const U = et(b);
            o[U] = Vs(c, l, U, $, e, !1);
          }
        else $ !== i[b] && ((i[b] = $), (f = !0));
      }
    }
  } else {
    Yi(e, t, o, i) && (f = !0);
    let h;
    for (const v in l)
      (!t || (!oe(t, v) && ((h = qt(v)) === v || !oe(t, h)))) &&
        (c
          ? n &&
            (n[v] !== void 0 || n[h] !== void 0) &&
            (o[v] = Vs(c, l, v, void 0, e, !0))
          : delete o[v]);
    if (i !== l)
      for (const v in i) (!t || (!oe(t, v) && !0)) && (delete i[v], (f = !0));
  }
  f && ot(e, "set", "$attrs");
}
function Yi(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1,
    l;
  if (t)
    for (let c in t) {
      if (en(c)) continue;
      const f = t[c];
      let h;
      o && oe(o, (h = et(c)))
        ? !i || !i.includes(h)
          ? (n[h] = f)
          : ((l || (l = {}))[h] = f)
        : Gn(e.emitsOptions, c) ||
          ((!(c in s) || f !== s[c]) && ((s[c] = f), (r = !0)));
    }
  if (i) {
    const c = ce(n),
      f = l || ge;
    for (let h = 0; h < i.length; h++) {
      const v = i[h];
      n[v] = Vs(o, c, v, f[v], e, !oe(f, v));
    }
  }
  return r;
}
function Vs(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = oe(r, "default");
    if (l && s === void 0) {
      const c = r.default;
      if (r.type !== Function && Q(c)) {
        const { propsDefaults: f } = o;
        n in f ? (s = f[n]) : (Kt(o), (s = f[n] = c.call(null, t)), Vt());
      } else s = c;
    }
    r[0] &&
      (i && !l ? (s = !1) : r[1] && (s === "" || s === qt(n)) && (s = !0));
  }
  return s;
}
function Ji(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e);
  if (o) return o;
  const i = e.props,
    r = {},
    l = [];
  let c = !1;
  if (!Q(e)) {
    const h = (v) => {
      c = !0;
      const [b, $] = Ji(v, t, !0);
      ke(r, b), $ && l.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!i && !c) return me(e) && s.set(e, At), At;
  if (K(i))
    for (let h = 0; h < i.length; h++) {
      const v = et(i[h]);
      Eo(v) && (r[v] = ge);
    }
  else if (i)
    for (const h in i) {
      const v = et(h);
      if (Eo(v)) {
        const b = i[h],
          $ = (r[v] = K(b) || Q(b) ? { type: b } : Object.assign({}, b));
        if ($) {
          const U = Ao(Boolean, $.type),
            F = Ao(String, $.type);
          ($[0] = U > -1),
            ($[1] = F < 0 || U < F),
            (U > -1 || oe($, "default")) && l.push(v);
        }
      }
    }
  const f = [r, l];
  return me(e) && s.set(e, f), f;
}
function Eo(e) {
  return e[0] !== "$";
}
function Mo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Io(e, t) {
  return Mo(e) === Mo(t);
}
function Ao(e, t) {
  return K(t) ? t.findIndex((n) => Io(n, e)) : Q(t) && Io(t, e) ? 0 : -1;
}
const Qi = (e) => e[0] === "_" || e === "$stable",
  to = (e) => (K(e) ? e.map(je) : [je(e)]),
  Xl = (e, t, n) => {
    if (t._n) return t;
    const s = A((...o) => to(t(...o)), n);
    return (s._c = !1), s;
  },
  Xi = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
      if (Qi(o)) continue;
      const i = e[o];
      if (Q(i)) t[o] = Xl(o, i, s);
      else if (i != null) {
        const r = to(i);
        t[o] = () => r;
      }
    }
  },
  Zi = (e, t) => {
    const n = to(t);
    e.slots.default = () => n;
  },
  Zl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ce(t)), Tn(t, "_", n)) : Xi(t, (e.slots = {}));
    } else (e.slots = {}), t && Zi(e, t);
    Tn(e.slots, es, 1);
  },
  ec = (e, t, n) => {
    const { vnode: s, slots: o } = e;
    let i = !0,
      r = ge;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (ke(o, t), !n && l === 1 && delete o._)
        : ((i = !t.$stable), Xi(t, o)),
        (r = t);
    } else t && (Zi(e, t), (r = { default: 1 }));
    if (i) for (const l in o) !Qi(l) && !(l in r) && delete o[l];
  };
function er() {
  return {
    app: null,
    config: {
      isNativeTag: Ir,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let tc = 0;
function nc(e, t) {
  return function (s, o = null) {
    Q(s) || (s = Object.assign({}, s)), o != null && !me(o) && (o = null);
    const i = er(),
      r = new Set();
    let l = !1;
    const c = (i.app = {
      _uid: tc++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: kc,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          r.has(f) ||
            (f && Q(f.install)
              ? (r.add(f), f.install(c, ...h))
              : Q(f) && (r.add(f), f(c, ...h))),
          c
        );
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), c;
      },
      component(f, h) {
        return h ? ((i.components[f] = h), c) : i.components[f];
      },
      directive(f, h) {
        return h ? ((i.directives[f] = h), c) : i.directives[f];
      },
      mount(f, h, v) {
        if (!l) {
          const b = V(s, o);
          return (
            (b.appContext = i),
            h && t ? t(b, f) : e(b, f, v),
            (l = !0),
            (c._container = f),
            (f.__vue_app__ = c),
            oo(b.component) || b.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, h) {
        return (i.provides[f] = h), c;
      },
    });
    return c;
  };
}
function An(e, t, n, s, o = !1) {
  if (K(e)) {
    e.forEach((b, $) => An(b, t && (K(t) ? t[$] : t), n, s, o));
    return;
  }
  if (Ft(s) && !o) return;
  const i = s.shapeFlag & 4 ? oo(s.component) || s.component.proxy : s.el,
    r = o ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    h = l.refs === ge ? (l.refs = {}) : l.refs,
    v = l.setupState;
  if (
    (f != null &&
      f !== c &&
      (xe(f)
        ? ((h[f] = null), oe(v, f) && (v[f] = null))
        : Pe(f) && (f.value = null)),
    Q(c))
  )
    dt(c, l, 12, [r, h]);
  else {
    const b = xe(c),
      $ = Pe(c);
    if (b || $) {
      const U = () => {
        if (e.f) {
          const F = b ? (oe(v, c) ? v[c] : h[c]) : c.value;
          o
            ? K(F) && Bs(F, i)
            : K(F)
            ? F.includes(i) || F.push(i)
            : b
            ? ((h[c] = [i]), oe(v, c) && (v[c] = h[c]))
            : ((c.value = [i]), e.k && (h[e.k] = c.value));
        } else
          b
            ? ((h[c] = r), oe(v, c) && (v[c] = r))
            : $ && ((c.value = r), e.k && (h[e.k] = r));
      };
      r ? ((U.id = -1), Le(U, n)) : U();
    }
  }
}
let lt = !1;
const $n = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Pn = (e) => e.nodeType === 8;
function sc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: o,
        nextSibling: i,
        parentNode: r,
        remove: l,
        insert: c,
        createComment: f,
      },
    } = e,
    h = (w, L) => {
      if (!L.hasChildNodes()) {
        n(null, w, L), En(), (L._vnode = w);
        return;
      }
      (lt = !1),
        v(L.firstChild, w, null, null, null),
        En(),
        (L._vnode = w),
        lt && console.error("Hydration completed but contains mismatches.");
    },
    v = (w, L, I, q, Z, he = !1) => {
      const se = Pn(w) && w.data === "[",
        M = () => F(w, L, I, q, Z, se),
        { type: X, ref: J, shapeFlag: re, patchFlag: B } = L;
      let ee = w.nodeType;
      (L.el = w), B === -2 && ((he = !1), (L.dynamicChildren = null));
      let R = null;
      switch (X) {
        case Ut:
          ee !== 3
            ? L.children === ""
              ? (c((L.el = o("")), r(w), w), (R = w))
              : (R = M())
            : (w.data !== L.children && ((lt = !0), (w.data = L.children)),
              (R = i(w)));
          break;
        case Ne:
          ee !== 8 || se ? (R = M()) : (R = i(w));
          break;
        case Ht:
          if ((se && ((w = i(w)), (ee = w.nodeType)), ee === 1 || ee === 3)) {
            R = w;
            const Me = !L.children.length;
            for (let ue = 0; ue < L.staticCount; ue++)
              Me && (L.children += R.nodeType === 1 ? R.outerHTML : R.data),
                ue === L.staticCount - 1 && (L.anchor = R),
                (R = i(R));
            return se ? i(R) : R;
          } else M();
          break;
        case G:
          se ? (R = U(w, L, I, q, Z, he)) : (R = M());
          break;
        default:
          if (re & 1)
            ee !== 1 || L.type.toLowerCase() !== w.tagName.toLowerCase()
              ? (R = M())
              : (R = b(w, L, I, q, Z, he));
          else if (re & 6) {
            L.slotScopeIds = Z;
            const Me = r(w);
            if (
              (t(L, Me, null, I, q, $n(Me), he),
              (R = se ? ne(w) : i(w)),
              R && Pn(R) && R.data === "teleport end" && (R = i(R)),
              Ft(L))
            ) {
              let ue;
              se
                ? ((ue = V(G)),
                  (ue.anchor = R ? R.previousSibling : Me.lastChild))
                : (ue = w.nodeType === 3 ? Te("") : V("div")),
                (ue.el = w),
                (L.component.subTree = ue);
            }
          } else
            re & 64
              ? ee !== 8
                ? (R = M())
                : (R = L.type.hydrate(w, L, I, q, Z, he, e, $))
              : re & 128 &&
                (R = L.type.hydrate(w, L, I, q, $n(r(w)), Z, he, e, v));
      }
      return J != null && An(J, null, q, L), R;
    },
    b = (w, L, I, q, Z, he) => {
      he = he || !!L.dynamicChildren;
      const { type: se, props: M, patchFlag: X, shapeFlag: J, dirs: re } = L,
        B = (se === "input" && re) || se === "option";
      if (B || X !== -1) {
        if ((re && Qe(L, null, I, "created"), M))
          if (B || !he || X & 48)
            for (const R in M)
              ((B && R.endsWith("value")) || (_n(R) && !en(R))) &&
                s(w, R, null, M[R], !1, void 0, I);
          else M.onClick && s(w, "onClick", null, M.onClick, !1, void 0, I);
        let ee;
        if (
          ((ee = M && M.onVnodeBeforeMount) && Fe(ee, I, L),
          re && Qe(L, null, I, "beforeMount"),
          ((ee = M && M.onVnodeMounted) || re) &&
            Oi(() => {
              ee && Fe(ee, I, L), re && Qe(L, null, I, "mounted");
            }, q),
          J & 16 && !(M && (M.innerHTML || M.textContent)))
        ) {
          let R = $(w.firstChild, L, w, I, q, Z, he);
          for (; R; ) {
            lt = !0;
            const Me = R;
            (R = R.nextSibling), l(Me);
          }
        } else
          J & 8 &&
            w.textContent !== L.children &&
            ((lt = !0), (w.textContent = L.children));
      }
      return w.nextSibling;
    },
    $ = (w, L, I, q, Z, he, se) => {
      se = se || !!L.dynamicChildren;
      const M = L.children,
        X = M.length;
      for (let J = 0; J < X; J++) {
        const re = se ? M[J] : (M[J] = je(M[J]));
        if (w) w = v(w, re, q, Z, he, se);
        else {
          if (re.type === Ut && !re.children) continue;
          (lt = !0), n(null, re, I, null, q, Z, $n(I), he);
        }
      }
      return w;
    },
    U = (w, L, I, q, Z, he) => {
      const { slotScopeIds: se } = L;
      se && (Z = Z ? Z.concat(se) : se);
      const M = r(w),
        X = $(i(w), L, M, I, q, Z, he);
      return X && Pn(X) && X.data === "]"
        ? i((L.anchor = X))
        : ((lt = !0), c((L.anchor = f("]")), M, X), X);
    },
    F = (w, L, I, q, Z, he) => {
      if (((lt = !0), (L.el = null), he)) {
        const X = ne(w);
        for (;;) {
          const J = i(w);
          if (J && J !== X) l(J);
          else break;
        }
      }
      const se = i(w),
        M = r(w);
      return l(w), n(null, L, M, se, I, q, $n(M), Z), se;
    },
    ne = (w) => {
      let L = 0;
      for (; w; )
        if (
          ((w = i(w)), w && Pn(w) && (w.data === "[" && L++, w.data === "]"))
        ) {
          if (L === 0) return i(w);
          L--;
        }
      return w;
    };
  return [h, v];
}
const Le = Oi;
function oc(e) {
  return ic(e, sc);
}
function ic(e, t) {
  const n = Hr();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: o,
      patchProp: i,
      createElement: r,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: h,
      parentNode: v,
      nextSibling: b,
      setScopeId: $ = Ke,
      insertStaticContent: U,
    } = e,
    F = (
      a,
      u,
      p,
      x = null,
      y = null,
      C = null,
      E = !1,
      P = null,
      S = !!u.dynamicChildren
    ) => {
      if (a === u) return;
      a && !$t(a, u) && ((x = mn(a)), Ye(a, y, C, !0), (a = null)),
        u.patchFlag === -2 && ((S = !1), (u.dynamicChildren = null));
      const { type: k, ref: D, shapeFlag: O } = u;
      switch (k) {
        case Ut:
          ne(a, u, p, x);
          break;
        case Ne:
          w(a, u, p, x);
          break;
        case Ht:
          a == null && L(u, p, x, E);
          break;
        case G:
          B(a, u, p, x, y, C, E, P, S);
          break;
        default:
          O & 1
            ? Z(a, u, p, x, y, C, E, P, S)
            : O & 6
            ? ee(a, u, p, x, y, C, E, P, S)
            : (O & 64 || O & 128) && k.process(a, u, p, x, y, C, E, P, S, Et);
      }
      D != null && y && An(D, a && a.ref, C, u || a, !u);
    },
    ne = (a, u, p, x) => {
      if (a == null) s((u.el = l(u.children)), p, x);
      else {
        const y = (u.el = a.el);
        u.children !== a.children && f(y, u.children);
      }
    },
    w = (a, u, p, x) => {
      a == null ? s((u.el = c(u.children || "")), p, x) : (u.el = a.el);
    },
    L = (a, u, p, x) => {
      [a.el, a.anchor] = U(a.children, u, p, x, a.el, a.anchor);
    },
    I = ({ el: a, anchor: u }, p, x) => {
      let y;
      for (; a && a !== u; ) (y = b(a)), s(a, p, x), (a = y);
      s(u, p, x);
    },
    q = ({ el: a, anchor: u }) => {
      let p;
      for (; a && a !== u; ) (p = b(a)), o(a), (a = p);
      o(u);
    },
    Z = (a, u, p, x, y, C, E, P, S) => {
      (E = E || u.type === "svg"),
        a == null ? he(u, p, x, y, C, E, P, S) : X(a, u, y, C, E, P, S);
    },
    he = (a, u, p, x, y, C, E, P) => {
      let S, k;
      const { type: D, props: O, shapeFlag: j, transition: W, dirs: te } = a;
      if (
        ((S = a.el = r(a.type, C, O && O.is, O)),
        j & 8
          ? h(S, a.children)
          : j & 16 &&
            M(a.children, S, null, x, y, C && D !== "foreignObject", E, P),
        te && Qe(a, null, x, "created"),
        O)
      ) {
        for (const fe in O)
          fe !== "value" &&
            !en(fe) &&
            i(S, fe, null, O[fe], C, a.children, x, y, nt);
        "value" in O && i(S, "value", null, O.value),
          (k = O.onVnodeBeforeMount) && Fe(k, x, a);
      }
      se(S, a, a.scopeId, E, x), te && Qe(a, null, x, "beforeMount");
      const pe = (!y || (y && !y.pendingBranch)) && W && !W.persisted;
      pe && W.beforeEnter(S),
        s(S, u, p),
        ((k = O && O.onVnodeMounted) || pe || te) &&
          Le(() => {
            k && Fe(k, x, a), pe && W.enter(S), te && Qe(a, null, x, "mounted");
          }, y);
    },
    se = (a, u, p, x, y) => {
      if ((p && $(a, p), x)) for (let C = 0; C < x.length; C++) $(a, x[C]);
      if (y) {
        let C = y.subTree;
        if (u === C) {
          const E = y.vnode;
          se(a, E, E.scopeId, E.slotScopeIds, y.parent);
        }
      }
    },
    M = (a, u, p, x, y, C, E, P, S = 0) => {
      for (let k = S; k < a.length; k++) {
        const D = (a[k] = P ? ut(a[k]) : je(a[k]));
        F(null, D, u, p, x, y, C, E, P);
      }
    },
    X = (a, u, p, x, y, C, E) => {
      const P = (u.el = a.el);
      let { patchFlag: S, dynamicChildren: k, dirs: D } = u;
      S |= a.patchFlag & 16;
      const O = a.props || ge,
        j = u.props || ge;
      let W;
      p && bt(p, !1),
        (W = j.onVnodeBeforeUpdate) && Fe(W, p, u, a),
        D && Qe(u, a, p, "beforeUpdate"),
        p && bt(p, !0);
      const te = y && u.type !== "foreignObject";
      if (
        (k
          ? J(a.dynamicChildren, k, P, p, x, te, C)
          : E || _e(a, u, P, null, p, x, te, C, !1),
        S > 0)
      ) {
        if (S & 16) re(P, u, O, j, p, x, y);
        else if (
          (S & 2 && O.class !== j.class && i(P, "class", null, j.class, y),
          S & 4 && i(P, "style", O.style, j.style, y),
          S & 8)
        ) {
          const pe = u.dynamicProps;
          for (let fe = 0; fe < pe.length; fe++) {
            const ye = pe[fe],
              De = O[ye],
              Mt = j[ye];
            (Mt !== De || ye === "value") &&
              i(P, ye, De, Mt, y, a.children, p, x, nt);
          }
        }
        S & 1 && a.children !== u.children && h(P, u.children);
      } else !E && k == null && re(P, u, O, j, p, x, y);
      ((W = j.onVnodeUpdated) || D) &&
        Le(() => {
          W && Fe(W, p, u, a), D && Qe(u, a, p, "updated");
        }, x);
    },
    J = (a, u, p, x, y, C, E) => {
      for (let P = 0; P < u.length; P++) {
        const S = a[P],
          k = u[P],
          D =
            S.el && (S.type === G || !$t(S, k) || S.shapeFlag & 70)
              ? v(S.el)
              : p;
        F(S, k, D, null, x, y, C, E, !0);
      }
    },
    re = (a, u, p, x, y, C, E) => {
      if (p !== x) {
        if (p !== ge)
          for (const P in p)
            !en(P) && !(P in x) && i(a, P, p[P], null, E, u.children, y, C, nt);
        for (const P in x) {
          if (en(P)) continue;
          const S = x[P],
            k = p[P];
          S !== k && P !== "value" && i(a, P, k, S, E, u.children, y, C, nt);
        }
        "value" in x && i(a, "value", p.value, x.value);
      }
    },
    B = (a, u, p, x, y, C, E, P, S) => {
      const k = (u.el = a ? a.el : l("")),
        D = (u.anchor = a ? a.anchor : l(""));
      let { patchFlag: O, dynamicChildren: j, slotScopeIds: W } = u;
      W && (P = P ? P.concat(W) : W),
        a == null
          ? (s(k, p, x), s(D, p, x), M(u.children, p, D, y, C, E, P, S))
          : O > 0 && O & 64 && j && a.dynamicChildren
          ? (J(a.dynamicChildren, j, p, y, C, E, P),
            (u.key != null || (y && u === y.subTree)) && tr(a, u, !0))
          : _e(a, u, p, D, y, C, E, P, S);
    },
    ee = (a, u, p, x, y, C, E, P, S) => {
      (u.slotScopeIds = P),
        a == null
          ? u.shapeFlag & 512
            ? y.ctx.activate(u, p, x, E, S)
            : R(u, p, x, y, C, E, S)
          : Me(a, u, S);
    },
    R = (a, u, p, x, y, C, E) => {
      const P = (a.component = _c(a, x, y));
      if ((Xn(a) && (P.ctx.renderer = Et), pc(P), P.asyncDep)) {
        if ((y && y.registerDep(P, ue), !a.el)) {
          const S = (P.subTree = V(Ne));
          w(null, S, u, p);
        }
        return;
      }
      ue(P, a, u, p, y, C, E);
    },
    Me = (a, u, p) => {
      const x = (u.component = a.component);
      if (Tl(a, u, p))
        if (x.asyncDep && !x.asyncResolved) {
          be(x, u, p);
          return;
        } else (x.next = u), kl(x.update), x.update();
      else (u.el = a.el), (x.vnode = u);
    },
    ue = (a, u, p, x, y, C, E) => {
      const P = () => {
          if (a.isMounted) {
            let { next: D, bu: O, u: j, parent: W, vnode: te } = a,
              pe = D,
              fe;
            bt(a, !1),
              D ? ((D.el = te.el), be(a, D, E)) : (D = te),
              O && cs(O),
              (fe = D.props && D.props.onVnodeBeforeUpdate) && Fe(fe, W, D, te),
              bt(a, !0);
            const ye = as(a),
              De = a.subTree;
            (a.subTree = ye),
              F(De, ye, v(De.el), mn(De), a, y, C),
              (D.el = ye.el),
              pe === null && Ll(a, ye.el),
              j && Le(j, y),
              (fe = D.props && D.props.onVnodeUpdated) &&
                Le(() => Fe(fe, W, D, te), y);
          } else {
            let D;
            const { el: O, props: j } = u,
              { bm: W, m: te, parent: pe } = a,
              fe = Ft(u);
            if (
              (bt(a, !1),
              W && cs(W),
              !fe && (D = j && j.onVnodeBeforeMount) && Fe(D, pe, u),
              bt(a, !0),
              O && rs)
            ) {
              const ye = () => {
                (a.subTree = as(a)), rs(O, a.subTree, a, y, null);
              };
              fe
                ? u.type.__asyncLoader().then(() => !a.isUnmounted && ye())
                : ye();
            } else {
              const ye = (a.subTree = as(a));
              F(null, ye, p, x, a, y, C), (u.el = ye.el);
            }
            if ((te && Le(te, y), !fe && (D = j && j.onVnodeMounted))) {
              const ye = u;
              Le(() => Fe(D, pe, ye), y);
            }
            (u.shapeFlag & 256 ||
              (pe && Ft(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
              a.a &&
              Le(a.a, y),
              (a.isMounted = !0),
              (u = p = x = null);
          }
        },
        S = (a.effect = new Ds(P, () => Js(k), a.scope)),
        k = (a.update = () => S.run());
      (k.id = a.uid), bt(a, !0), k();
    },
    be = (a, u, p) => {
      u.component = a;
      const x = a.vnode.props;
      (a.vnode = u),
        (a.next = null),
        Ql(a, u.props, x, p),
        ec(a, u.children, p),
        Gt(),
        Po(),
        Yt();
    },
    _e = (a, u, p, x, y, C, E, P, S = !1) => {
      const k = a && a.children,
        D = a ? a.shapeFlag : 0,
        O = u.children,
        { patchFlag: j, shapeFlag: W } = u;
      if (j > 0) {
        if (j & 128) {
          vn(k, O, p, x, y, C, E, P, S);
          return;
        } else if (j & 256) {
          mt(k, O, p, x, y, C, E, P, S);
          return;
        }
      }
      W & 8
        ? (D & 16 && nt(k, y, C), O !== k && h(p, O))
        : D & 16
        ? W & 16
          ? vn(k, O, p, x, y, C, E, P, S)
          : nt(k, y, C, !0)
        : (D & 8 && h(p, ""), W & 16 && M(O, p, x, y, C, E, P, S));
    },
    mt = (a, u, p, x, y, C, E, P, S) => {
      (a = a || At), (u = u || At);
      const k = a.length,
        D = u.length,
        O = Math.min(k, D);
      let j;
      for (j = 0; j < O; j++) {
        const W = (u[j] = S ? ut(u[j]) : je(u[j]));
        F(a[j], W, p, null, y, C, E, P, S);
      }
      k > D ? nt(a, y, C, !0, !1, O) : M(u, p, x, y, C, E, P, S, O);
    },
    vn = (a, u, p, x, y, C, E, P, S) => {
      let k = 0;
      const D = u.length;
      let O = a.length - 1,
        j = D - 1;
      for (; k <= O && k <= j; ) {
        const W = a[k],
          te = (u[k] = S ? ut(u[k]) : je(u[k]));
        if ($t(W, te)) F(W, te, p, null, y, C, E, P, S);
        else break;
        k++;
      }
      for (; k <= O && k <= j; ) {
        const W = a[O],
          te = (u[j] = S ? ut(u[j]) : je(u[j]));
        if ($t(W, te)) F(W, te, p, null, y, C, E, P, S);
        else break;
        O--, j--;
      }
      if (k > O) {
        if (k <= j) {
          const W = j + 1,
            te = W < D ? u[W].el : x;
          for (; k <= j; )
            F(null, (u[k] = S ? ut(u[k]) : je(u[k])), p, te, y, C, E, P, S),
              k++;
        }
      } else if (k > j) for (; k <= O; ) Ye(a[k], y, C, !0), k++;
      else {
        const W = k,
          te = k,
          pe = new Map();
        for (k = te; k <= j; k++) {
          const Ie = (u[k] = S ? ut(u[k]) : je(u[k]));
          Ie.key != null && pe.set(Ie.key, k);
        }
        let fe,
          ye = 0;
        const De = j - te + 1;
        let Mt = !1,
          _o = 0;
        const Qt = new Array(De);
        for (k = 0; k < De; k++) Qt[k] = 0;
        for (k = W; k <= O; k++) {
          const Ie = a[k];
          if (ye >= De) {
            Ye(Ie, y, C, !0);
            continue;
          }
          let Je;
          if (Ie.key != null) Je = pe.get(Ie.key);
          else
            for (fe = te; fe <= j; fe++)
              if (Qt[fe - te] === 0 && $t(Ie, u[fe])) {
                Je = fe;
                break;
              }
          Je === void 0
            ? Ye(Ie, y, C, !0)
            : ((Qt[Je - te] = k + 1),
              Je >= _o ? (_o = Je) : (Mt = !0),
              F(Ie, u[Je], p, null, y, C, E, P, S),
              ye++);
        }
        const po = Mt ? rc(Qt) : At;
        for (fe = po.length - 1, k = De - 1; k >= 0; k--) {
          const Ie = te + k,
            Je = u[Ie],
            vo = Ie + 1 < D ? u[Ie + 1].el : x;
          Qt[k] === 0
            ? F(null, Je, p, vo, y, C, E, P, S)
            : Mt && (fe < 0 || k !== po[fe] ? gt(Je, p, vo, 2) : fe--);
        }
      }
    },
    gt = (a, u, p, x, y = null) => {
      const { el: C, type: E, transition: P, children: S, shapeFlag: k } = a;
      if (k & 6) {
        gt(a.component.subTree, u, p, x);
        return;
      }
      if (k & 128) {
        a.suspense.move(u, p, x);
        return;
      }
      if (k & 64) {
        E.move(a, u, p, Et);
        return;
      }
      if (E === G) {
        s(C, u, p);
        for (let O = 0; O < S.length; O++) gt(S[O], u, p, x);
        s(a.anchor, u, p);
        return;
      }
      if (E === Ht) {
        I(a, u, p);
        return;
      }
      if (x !== 2 && k & 1 && P)
        if (x === 0) P.beforeEnter(C), s(C, u, p), Le(() => P.enter(C), y);
        else {
          const { leave: O, delayLeave: j, afterLeave: W } = P,
            te = () => s(C, u, p),
            pe = () => {
              O(C, () => {
                te(), W && W();
              });
            };
          j ? j(C, te, pe) : pe();
        }
      else s(C, u, p);
    },
    Ye = (a, u, p, x = !1, y = !1) => {
      const {
        type: C,
        props: E,
        ref: P,
        children: S,
        dynamicChildren: k,
        shapeFlag: D,
        patchFlag: O,
        dirs: j,
      } = a;
      if ((P != null && An(P, null, p, a, !0), D & 256)) {
        u.ctx.deactivate(a);
        return;
      }
      const W = D & 1 && j,
        te = !Ft(a);
      let pe;
      if ((te && (pe = E && E.onVnodeBeforeUnmount) && Fe(pe, u, a), D & 6))
        Cr(a.component, p, x);
      else {
        if (D & 128) {
          a.suspense.unmount(p, x);
          return;
        }
        W && Qe(a, null, u, "beforeUnmount"),
          D & 64
            ? a.type.remove(a, u, p, y, Et, x)
            : k && (C !== G || (O > 0 && O & 64))
            ? nt(k, u, p, !1, !0)
            : ((C === G && O & 384) || (!y && D & 16)) && nt(S, u, p),
          x && fo(a);
      }
      ((te && (pe = E && E.onVnodeUnmounted)) || W) &&
        Le(() => {
          pe && Fe(pe, u, a), W && Qe(a, null, u, "unmounted");
        }, p);
    },
    fo = (a) => {
      const { type: u, el: p, anchor: x, transition: y } = a;
      if (u === G) {
        Pr(p, x);
        return;
      }
      if (u === Ht) {
        q(a);
        return;
      }
      const C = () => {
        o(p), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (a.shapeFlag & 1 && y && !y.persisted) {
        const { leave: E, delayLeave: P } = y,
          S = () => E(p, C);
        P ? P(a.el, C, S) : S();
      } else C();
    },
    Pr = (a, u) => {
      let p;
      for (; a !== u; ) (p = b(a)), o(a), (a = p);
      o(u);
    },
    Cr = (a, u, p) => {
      const { bum: x, scope: y, update: C, subTree: E, um: P } = a;
      x && cs(x),
        y.stop(),
        C && ((C.active = !1), Ye(E, a, u, p)),
        P && Le(P, u),
        Le(() => {
          a.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    nt = (a, u, p, x = !1, y = !1, C = 0) => {
      for (let E = C; E < a.length; E++) Ye(a[E], u, p, x, y);
    },
    mn = (a) =>
      a.shapeFlag & 6
        ? mn(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : b(a.anchor || a.el),
    ho = (a, u, p) => {
      a == null
        ? u._vnode && Ye(u._vnode, null, null, !0)
        : F(u._vnode || null, a, u, null, null, null, p),
        Po(),
        En(),
        (u._vnode = a);
    },
    Et = {
      p: F,
      um: Ye,
      m: gt,
      r: fo,
      mt: R,
      mc: M,
      pc: _e,
      pbc: J,
      n: mn,
      o: e,
    };
  let is, rs;
  return (
    t && ([is, rs] = t(Et)), { render: ho, hydrate: is, createApp: nc(ho, is) }
  );
}
function bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function tr(e, t, n = !1) {
  const s = e.children,
    o = t.children;
  if (K(s) && K(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[i] = ut(o[i])), (l.el = r.el)),
        n || tr(r, l)),
        l.type === Ut && (l.el = r.el);
    }
}
function rc(e) {
  const t = e.slice(),
    n = [0];
  let s, o, i, r, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const f = e[s];
    if (f !== 0) {
      if (((o = n[n.length - 1]), e[o] < f)) {
        (t[s] = o), n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        (l = (i + r) >> 1), e[n[l]] < f ? (i = l + 1) : (r = l);
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; ) (n[i] = r), (r = t[r]);
  return n;
}
const lc = (e) => e.__isTeleport,
  G = Symbol(void 0),
  Ut = Symbol(void 0),
  Ne = Symbol(void 0),
  Ht = Symbol(void 0),
  sn = [];
let Ue = null;
function d(e = !1) {
  sn.push((Ue = e ? null : []));
}
function cc() {
  sn.pop(), (Ue = sn[sn.length - 1] || null);
}
let fn = 1;
function No(e) {
  fn += e;
}
function nr(e) {
  return (
    (e.dynamicChildren = fn > 0 ? Ue || At : null),
    cc(),
    fn > 0 && Ue && Ue.push(e),
    e
  );
}
function m(e, t, n, s, o, i) {
  return nr(g(e, t, n, s, o, i, !0));
}
function Y(e, t, n, s, o) {
  return nr(V(e, t, n, s, o, !0));
}
function Nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  return e.type === t.type && e.key === t.key;
}
const es = "__vInternal",
  sr = ({ key: e }) => (e != null ? e : null),
  Sn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? xe(e) || Pe(e) || Q(e)
        ? { i: Ce, r: e, k: t, f: !!n }
        : e
      : null;
function g(
  e,
  t = null,
  n = null,
  s = 0,
  o = null,
  i = e === G ? 0 : 1,
  r = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sr(t),
    ref: t && Sn(t),
    scopeId: Yn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce,
  };
  return (
    l
      ? (no(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= xe(n) ? 8 : 16),
    fn > 0 &&
      !r &&
      Ue &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ue.push(c),
    c
  );
}
const V = ac;
function ac(e, t = null, n = null, s = 0, o = null, i = !1) {
  if (((!e || e === Ki) && (e = Ne), Nn(e))) {
    const l = _t(e, t, !0);
    return (
      n && no(l, n),
      fn > 0 &&
        !i &&
        Ue &&
        (l.shapeFlag & 6 ? (Ue[Ue.indexOf(e)] = l) : Ue.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((yc(e) && (e = e.__vccOpts), t)) {
    t = uc(t);
    let { class: l, style: c } = t;
    l && !xe(l) && (t.class = de(l)),
      me(c) && (Si(c) && !K(c) && (c = ke({}, c)), (t.style = Dn(c)));
  }
  const r = xe(e) ? 1 : El(e) ? 128 : lc(e) ? 64 : me(e) ? 4 : Q(e) ? 2 : 0;
  return g(e, t, n, s, o, r, i, !0);
}
function uc(e) {
  return e ? (Si(e) || es in e ? ke({}, e) : e) : null;
}
function _t(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: i, children: r } = e,
    l = t ? Vn(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && sr(l),
    ref:
      t && t.ref ? (n && o ? (K(o) ? o.concat(Sn(t)) : [o, Sn(t)]) : Sn(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== G ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
  };
}
function Te(e = " ", t = 0) {
  return V(Ut, null, e, t);
}
function fc(e, t) {
  const n = V(Ht, null, e);
  return (n.staticCount = t), n;
}
function z(e = "", t = !1) {
  return t ? (d(), Y(Ne, null, e)) : V(Ne, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean"
    ? V(Ne)
    : K(e)
    ? V(G, null, e.slice())
    : typeof e == "object"
    ? ut(e)
    : V(Ut, null, String(e));
}
function ut(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : _t(e);
}
function no(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), no(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(es in t)
        ? (t._ctx = Ce)
        : o === 3 &&
          Ce &&
          (Ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Q(t)
      ? ((t = { default: t, _ctx: Ce }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Te(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Vn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = de([t.class, s.class]));
      else if (o === "style") t.style = Dn([t.style, s.style]);
      else if (_n(o)) {
        const i = t[o],
          r = s[o];
        r &&
          i !== r &&
          !(K(i) && i.includes(r)) &&
          (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Fe(e, t, n, s = null) {
  He(e, t, 7, [n, s]);
}
const dc = er();
let hc = 0;
function _c(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || dc,
    i = {
      uid: hc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Rr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ji(s, o),
      emitsOptions: Bi(s, o),
      emit: null,
      emitted: null,
      propsDefaults: ge,
      inheritAttrs: s.inheritAttrs,
      ctx: ge,
      data: ge,
      props: ge,
      attrs: ge,
      slots: ge,
      refs: ge,
      setupState: ge,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Cl.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let we = null;
const so = () => we || Ce,
  Kt = (e) => {
    (we = e), e.scope.on();
  },
  Vt = () => {
    we && we.scope.off(), (we = null);
  };
function or(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function pc(e, t = !1) {
  dn = t;
  const { props: n, children: s } = e.vnode,
    o = or(e);
  Jl(e, n, o, t), Zl(e, s);
  const i = o ? vc(e, t) : void 0;
  return (dn = !1), i;
}
function vc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = tn(new Proxy(e.ctx, Ul)));
  const { setup: s } = n;
  if (s) {
    const o = (e.setupContext = s.length > 1 ? gc(e) : null);
    Kt(e), Gt();
    const i = dt(s, e, 0, [e.props, o]);
    if ((Yt(), Vt(), _i(i))) {
      if ((i.then(Vt, Vt), t))
        return i
          .then((r) => {
            Bo(e, r, t);
          })
          .catch((r) => {
            qn(r, e, 0);
          });
      e.asyncDep = i;
    } else Bo(e, i, t);
  } else ir(e, t);
}
function Bo(e, t, n) {
  Q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : me(t) && (e.setupState = Ei(t)),
    ir(e, n);
}
let Oo;
function ir(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Oo && !s.render) {
      const o = s.template || eo(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          f = ke(ke({ isCustomElement: i, delimiters: l }, r), c);
        s.render = Oo(o, f);
      }
    }
    e.render = s.render || Ke;
  }
  Kt(e), Gt(), Kl(e), Yt(), Vt();
}
function mc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Be(e, "get", "$attrs"), t[n];
    },
  });
}
function gc(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = mc(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function oo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Ei(tn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in nn) return nn[n](e);
        },
        has(t, n) {
          return n in t || n in nn;
        },
      }))
    );
}
function bc(e, t = !0) {
  return Q(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function yc(e) {
  return Q(e) && "__vccOpts" in e;
}
const ie = (e, t) => yl(e, t, dn);
function Bn(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? me(t) && !K(t)
      ? Nn(t)
        ? V(e, null, [t])
        : V(e, t)
      : V(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Nn(n) && (n = [n]),
      V(e, t, n));
}
const xc = Symbol(""),
  wc = () => We(xc),
  kc = "3.2.45",
  $c = "http://www.w3.org/2000/svg",
  Pt = typeof document < "u" ? document : null,
  Fo = Pt && Pt.createElement("template"),
  Pc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const o = t
        ? Pt.createElementNS($c, e)
        : Pt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          o.setAttribute("multiple", s.multiple),
        o
      );
    },
    createText: (e) => Pt.createTextNode(e),
    createComment: (e) => Pt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, o, i) {
      const r = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        Fo.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Fo.content;
        if (s) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Cc(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Sc(e, t, n) {
  const s = e.style,
    o = xe(n);
  if (n && !o) {
    for (const i in n) Ts(s, i, n[i]);
    if (t && !xe(t)) for (const i in t) n[i] == null && Ts(s, i, "");
  } else {
    const i = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = i);
  }
}
const Ho = /\s*!important$/;
function Ts(e, t, n) {
  if (K(n)) n.forEach((s) => Ts(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Vc(e, t);
    Ho.test(n)
      ? e.setProperty(qt(s), n.replace(Ho, ""), "important")
      : (e[s] = n);
  }
}
const Ro = ["Webkit", "Moz", "ms"],
  ds = {};
function Vc(e, t) {
  const n = ds[t];
  if (n) return n;
  let s = et(t);
  if (s !== "filter" && s in e) return (ds[t] = s);
  s = Un(s);
  for (let o = 0; o < Ro.length; o++) {
    const i = Ro[o] + s;
    if (i in e) return (ds[t] = i);
  }
  return t;
}
const Do = "http://www.w3.org/1999/xlink";
function Tc(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Do, t.slice(6, t.length))
      : e.setAttributeNS(Do, t, n);
  else {
    const i = Mr(t);
    n == null || (i && !fi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function Lc(e, t, n, s, o, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    s && r(s, o, i), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n == null ? "" : n;
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = fi(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function Ec(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Mc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ic(e, t, n, s, o = null) {
  const i = e._vei || (e._vei = {}),
    r = i[t];
  if (s && r) r.value = s;
  else {
    const [l, c] = Ac(t);
    if (s) {
      const f = (i[t] = Oc(s, o));
      Ec(e, l, f, c);
    } else r && (Mc(e, l, r, c), (i[t] = void 0));
  }
}
const jo = /(?:Once|Passive|Capture)$/;
function Ac(e) {
  let t;
  if (jo.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(jo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : qt(e.slice(2)), t];
}
let hs = 0;
const Nc = Promise.resolve(),
  Bc = () => hs || (Nc.then(() => (hs = 0)), (hs = Date.now()));
function Oc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    He(Fc(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Bc()), n;
}
function Fc(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return t;
}
const zo = /^on[a-z]/,
  Hc = (e, t, n, s, o = !1, i, r, l, c) => {
    t === "class"
      ? Cc(e, s, o)
      : t === "style"
      ? Sc(e, n, s)
      : _n(t)
      ? Ns(t) || Ic(e, t, n, s, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Rc(e, t, s, o)
        )
      ? Lc(e, t, s, i, r, l, c)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Tc(e, t, s, o));
  };
function Rc(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && zo.test(t) && Q(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (zo.test(t) && xe(n))
    ? !1
    : t in e;
}
function Dc(e) {
  const t = so();
  if (!t) return;
  const n = (t.ut = (o = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((i) => Es(i, o));
    }),
    s = () => {
      const o = e(t.proxy);
      Ls(t.subTree, o), n(o);
    };
  Fi(s),
    Re(() => {
      const o = new MutationObserver(s);
      o.observe(t.subTree.el.parentNode, { childList: !0 }),
        pt(() => o.disconnect());
    });
}
function Ls(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Ls(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Es(e.el, t);
  else if (e.type === G) e.children.forEach((n) => Ls(n, t));
  else if (e.type === Ht) {
    let { el: n, anchor: s } = e;
    for (; n && (Es(n, t), n !== s); ) n = n.nextSibling;
  }
}
function Es(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const s in t) n.setProperty(`--${s}`, t[s]);
  }
}
const ct = "transition",
  Xt = "animation",
  ts = (e, { slots: t }) => Bn(Ri, jc(e), t);
ts.displayName = "Transition";
const rr = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ts.props = ke({}, Ri.props, rr);
const yt = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Uo = (e) => (e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function jc(e) {
  const t = {};
  for (const B in e) B in rr || (t[B] = e[B]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: o,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: r = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = r,
      appearToClass: h = l,
      leaveFromClass: v = `${n}-leave-from`,
      leaveActiveClass: b = `${n}-leave-active`,
      leaveToClass: $ = `${n}-leave-to`,
    } = e,
    U = zc(o),
    F = U && U[0],
    ne = U && U[1],
    {
      onBeforeEnter: w,
      onEnter: L,
      onEnterCancelled: I,
      onLeave: q,
      onLeaveCancelled: Z,
      onBeforeAppear: he = w,
      onAppear: se = L,
      onAppearCancelled: M = I,
    } = t,
    X = (B, ee, R) => {
      xt(B, ee ? h : l), xt(B, ee ? f : r), R && R();
    },
    J = (B, ee) => {
      (B._isLeaving = !1), xt(B, v), xt(B, $), xt(B, b), ee && ee();
    },
    re = (B) => (ee, R) => {
      const Me = B ? se : L,
        ue = () => X(ee, B, R);
      yt(Me, [ee, ue]),
        Ko(() => {
          xt(ee, B ? c : i), at(ee, B ? h : l), Uo(Me) || Wo(ee, s, F, ue);
        });
    };
  return ke(t, {
    onBeforeEnter(B) {
      yt(w, [B]), at(B, i), at(B, r);
    },
    onBeforeAppear(B) {
      yt(he, [B]), at(B, c), at(B, f);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(B, ee) {
      B._isLeaving = !0;
      const R = () => J(B, ee);
      at(B, v),
        Wc(),
        at(B, b),
        Ko(() => {
          !B._isLeaving || (xt(B, v), at(B, $), Uo(q) || Wo(B, s, ne, R));
        }),
        yt(q, [B, R]);
    },
    onEnterCancelled(B) {
      X(B, !1), yt(I, [B]);
    },
    onAppearCancelled(B) {
      X(B, !0), yt(M, [B]);
    },
    onLeaveCancelled(B) {
      J(B), yt(Z, [B]);
    },
  });
}
function zc(e) {
  if (e == null) return null;
  if (me(e)) return [_s(e.enter), _s(e.leave)];
  {
    const t = _s(e);
    return [t, t];
  }
}
function _s(e) {
  return Hs(e);
}
function at(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function xt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Ko(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Uc = 0;
function Wo(e, t, n, s) {
  const o = (e._endId = ++Uc),
    i = () => {
      o === e._endId && s();
    };
  if (n) return setTimeout(i, n);
  const { type: r, timeout: l, propCount: c } = Kc(e, t);
  if (!r) return s();
  const f = r + "end";
  let h = 0;
  const v = () => {
      e.removeEventListener(f, b), i();
    },
    b = ($) => {
      $.target === e && ++h >= c && v();
    };
  setTimeout(() => {
    h < c && v();
  }, l + 1),
    e.addEventListener(f, b);
}
function Kc(e, t) {
  const n = window.getComputedStyle(e),
    s = (U) => (n[U] || "").split(", "),
    o = s(`${ct}Delay`),
    i = s(`${ct}Duration`),
    r = qo(o, i),
    l = s(`${Xt}Delay`),
    c = s(`${Xt}Duration`),
    f = qo(l, c);
  let h = null,
    v = 0,
    b = 0;
  t === ct
    ? r > 0 && ((h = ct), (v = r), (b = i.length))
    : t === Xt
    ? f > 0 && ((h = Xt), (v = f), (b = c.length))
    : ((v = Math.max(r, f)),
      (h = v > 0 ? (r > f ? ct : Xt) : null),
      (b = h ? (h === ct ? i.length : c.length) : 0));
  const $ =
    h === ct && /\b(transform|all)(,|$)/.test(s(`${ct}Property`).toString());
  return { type: h, timeout: v, propCount: b, hasTransform: $ };
}
function qo(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Go(n) + Go(e[s])));
}
function Go(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wc() {
  return document.body.offsetHeight;
}
const qc = ["ctrl", "shift", "alt", "meta"],
  Gc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => qc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Yc =
    (e, t) =>
    (n, ...s) => {
      for (let o = 0; o < t.length; o++) {
        const i = Gc[t[o]];
        if (i && i(n, t)) return;
      }
      return e(n, ...s);
    },
  Jc = ke({ patchProp: Hc }, Pc);
let ps,
  Yo = !1;
function Qc() {
  return (ps = Yo ? ps : oc(Jc)), (Yo = !0), ps;
}
const Xc = (...e) => {
  const t = Qc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const o = Zc(s);
      if (o) return n(o, !0, o instanceof SVGElement);
    }),
    t
  );
};
function Zc(e) {
  return xe(e) ? document.querySelector(e) : e;
}
const N = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, o] of t) n[s] = o;
    return n;
  },
  ea = "modulepreload",
  ta = function (e) {
    return "/javascript-guide/" + e;
  },
  Jo = {},
  na = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = ta(i)), i in Jo)) return;
        Jo[i] = !0;
        const r = i.endsWith(".css"),
          l = r ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let h = o.length - 1; h >= 0; h--) {
            const v = o[h];
            if (v.href === i && (!r || v.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return;
        const f = document.createElement("link");
        if (
          ((f.rel = r ? "stylesheet" : ea),
          r || ((f.as = "script"), (f.crossOrigin = "")),
          (f.href = i),
          document.head.appendChild(f),
          r)
        )
          return new Promise((h, v) => {
            f.addEventListener("load", h),
              f.addEventListener("error", () =>
                v(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => t());
  };
const sa = H({
  __name: "VPBadge",
  props: { text: null, type: null },
  setup(e) {
    return (t, n) => {
      var s;
      return (
        d(),
        m(
          "span",
          { class: de(["VPBadge", (s = e.type) != null ? s : "tip"]) },
          [T(t.$slots, "default", {}, () => [Te(ae(e.text), 1)], !0)],
          2
        )
      );
    };
  },
});
const oa = N(sa, [["__scopeId", "data-v-8d21f6c9"]]),
  ia = JSON.parse(
    '{"lang":"zh-CN","title":"JavaScriptGuide","description":"Just playing around.","base":"/javascript-guide/","head":[],"appearance":true,"themeConfig":{"siteTitle":"JavaScriptGuide","logo":"/favicon.svg","nav":[{"text":"\u524D\u7AEF\u57FA\u7840","items":[{"text":"html5","link":"/basic/html/introduction"},{"text":"css3","link":"/basic/css/introduction"},{"text":"javascript","link":"/basic/javascript/introduction"}]},{"text":"\u524D\u7AEF\u8FDB\u9636","items":[{"text":"\u6D4F\u89C8\u5668","link":"/advanced/browser/introduction"},{"text":"\u7F51\u7EDC","link":"/advanced/network/introduction"},{"text":"\u9879\u76EE\u4F18\u5316","link":"/advanced/optimization/"},{"text":"\u573A\u666F\u9898","link":"/advanced/scene/"},{"text":"\u624B\u5199\u4EE3\u7801","link":"/advanced/code/introduction"},{"text":"\u4EE3\u7801\u8F93\u51FA","link":"/advanced/example/introduction"}]},{"text":"\u6846\u67B6","items":[{"text":"Vue","link":"/framework/vue/"},{"text":"React","link":"/framework/react/"}]},{"text":"StateOf","link":"/stateof/introduction"}],"sidebar":{"/basic/html/":[{"text":"Html","items":[{"text":"Introduction","link":"/basic/html/introduction"},{"text":"Interview","link":"/basic/html/interview"},{"text":"\u5143\u7D20","link":"/basic/html/element"},{"text":"\u5C5E\u6027","link":"/basic/html/attribute"},{"text":"Input","link":"/basic/html/input"},{"text":"Table","link":"/basic/html/table"},{"text":"Canvas","link":"/basic/html/canvas"},{"text":"\u65F6\u95F4","link":"/basic/html/datetime"}]}],"/basic/css/":[{"text":"CSS","items":[{"text":"Introduction","link":"/basic/css/introduction"},{"text":"\u57FA\u7840","link":"/basic/css/css"},{"text":"flex","link":"/basic/css/flex"},{"text":"grid","link":"/basic/css/grid"},{"text":"\u5C45\u4E2D","link":"/basic/css/center"},{"text":"\u5E38\u89C1\u5E03\u5C40","link":"/basic/css/layout"},{"text":"BFC","link":"/basic/css/bfc"},{"text":"position","link":"/basic/css/position"},{"text":"\u8FC7\u6E21\u4E0E\u52A8\u753B","link":"/basic/css/\u8FC7\u6E21\u4E0E\u52A8\u753B"}]}],"/basic/javascript/":[{"text":"JavaScript","items":[{"text":"Introduction","link":"/basic/javascript/introduction"},{"text":"\u57FA\u7840","link":"/basic/javascript/base"},{"text":"\u7C7B\u578B\u548C\u8BED\u6CD5","link":"/basic/javascript/\u7C7B\u578B\u548C\u8BED\u6CD5"},{"text":"Object","link":"/basic/javascript/object"},{"text":"String","link":"/basic/javascript/String"},{"text":"Array","link":"/basic/javascript/Array"},{"text":"\u7C7B\u578B\u8F6C\u6362","link":"/basic/javascript/\u7C7B\u578B\u8F6C\u6362"},{"text":"this","link":"/basic/javascript/this"},{"text":"\u539F\u578B\u548C\u539F\u578B\u94FE","link":"/basic/javascript/prototype"},{"text":"\u540C\u6B65\u548C\u5F02\u6B65","link":"/basic/javascript/async"},{"text":"\u95ED\u5305","link":"/basic/javascript/\u95ED\u5305"},{"text":"EventLoop","link":"/basic/javascript/eventLoop"},{"text":"\u6B63\u5219","link":"/basic/javascript/\u6B63\u5219\u8868\u8FBE\u5F0F"},{"text":"\u8282\u6D41\u548C\u9632\u6296","link":"/basic/javascript/\u8282\u6D41\u548C\u9632\u6296"},{"text":"ES6","link":"/basic/javascript/ES6"},{"text":"DOM","link":"/basic/javascript/DOM"},{"text":"BOM","link":"/basic/javascript/BOM"},{"text":"\u5176\u4ED6","link":"/basic/javascript/other"}]}],"/advanced/browser/":[{"text":"\u6D4F\u89C8\u5668 Browser","items":[{"text":"Introduction","link":"/advanced/browser/introduction"},{"text":"\u6D4F\u89C8\u5668\u5B58\u50A8","link":"/advanced/browser/\u6D4F\u89C8\u5668\u5B58\u50A8"},{"text":"\u6D4F\u89C8\u5668\u8DE8\u57DF","link":"/advanced/browser/\u6D4F\u89C8\u5668\u8DE8\u57DF"},{"text":"\u6D4F\u89C8\u5668\u7F13\u5B58","link":"/advanced/browser/\u6D4F\u89C8\u5668\u7F13\u5B58"},{"text":"\u6D4F\u89C8\u5668\u5B89\u5168","link":"/advanced/browser/\u6D4F\u89C8\u5668\u5B89\u5168"},{"text":"\u6D4F\u89C8\u5668\u6E32\u67D3","link":"/advanced/browser/\u6D4F\u89C8\u5668\u6E32\u67D3"},{"text":"\u6D4F\u89C8\u5668\u6027\u80FD","link":"/advanced/browser/\u6D4F\u89C8\u5668\u6027\u80FD"}]}],"/advanced/network/":[{"text":"","items":[{"text":"Introduction","link":"/advanced/browser/introduction"}]}],"/advanced/project/":[],"/advanced/code/":[{"text":"\u624B\u5199\u4EE3\u7801","items":[{"text":"Introduction","link":"/advanced/code/introduction"},{"text":"part-one","link":"/advanced/code/part-one"},{"text":"part-two","link":"/advanced/code/part-two"},{"text":"part-three","link":"/advanced/code/part-three"}]}],"/advanced/example/":[{"text":"\u4EE3\u7801\u6267\u884C\u7ED3\u679C","items":[{"text":"Introduction","link":"/advanced/example/introduction"},{"text":"\u4F5C\u7528\u57DF","link":"/advanced/example/introduction"},{"text":"this\u6307\u5411","link":"/advanced/example/introduction"},{"text":"EventLoop","link":"/advanced/example/introduction"},{"text":"\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362","link":"/advanced/example/introduction"},{"text":"\u6267\u884C\u7ED3\u679C","link":"/advanced/example/introduction"}]}],"/advanced/optimization/":[{"text":"","items":[{"text":"Introduction","link":"/advanced/browser/introduction"}]}],"/interview/":[],"/stateof/":[{"text":"\u7B80\u4ECB","items":[{"text":"Introduction","link":"/stateof/introduction"}]},{"text":"State Of CSS","items":[{"text":"@font-face","link":"/stateof/css/@font-face"},{"text":"basic-shape","link":"/stateof/css/basic-shape"},{"text":"blend-mode","link":"/stateof/css/blend-mode"},{"text":"clip-path","link":"/stateof/css/clip-path"},{"text":"filter","link":"/stateof/css/filter"},{"text":"masking","link":"/stateof/css/masking"},{"text":"shapes","link":"/stateof/css/shapes"}]},{"text":"State Of JavaScript","items":[{"text":"Introduction","link":"/basic/javascript/introduction"}]}]},"socialLinks":[{"icon":"github","link":"https://github.com/godwei123"}],"footer":{"message":"Released under the MIT License.","copyright":"Copyright \xA9 2021-present God Wei"}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}'
  ),
  ns = /^[a-z]+:/i,
  Qo = "vitepress-theme-appearance",
  Ee = typeof window < "u",
  lr = {
    relativePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: { sidebar: !1, layout: "page" },
    lastUpdated: 0,
  };
function ra(e, t) {
  t.sort((n, s) => {
    const o = s.split("/").length - n.split("/").length;
    return o !== 0 ? o : s.length - n.length;
  });
  for (const n of t) if (e.startsWith(n)) return n;
}
function Xo(e, t) {
  const n = ra(t, Object.keys(e));
  return n ? e[n] : void 0;
}
function la(e) {
  const { locales: t } = e.themeConfig || {},
    n = e.locales;
  return t && n
    ? Object.keys(t).reduce(
        (s, o) => ((s[o] = { label: t[o].label, lang: n[o].lang }), s),
        {}
      )
    : {};
}
function ca(e, t) {
  t = ua(e, t);
  const n = Xo(e.locales || {}, t),
    s = Xo(e.themeConfig.locales || {}, t);
  return Object.assign({}, e, n, {
    themeConfig: Object.assign({}, e.themeConfig, s, { locales: {} }),
    lang: (n || e).lang,
    locales: {},
    langs: la(e),
  });
}
function cr(e, t) {
  var i;
  const n = t.title || e.title,
    s = (i = t.titleTemplate) != null ? i : e.titleTemplate;
  if (typeof s == "string" && s.includes(":title"))
    return s.replace(/:title/g, n);
  const o = aa(e.title, s);
  return `${n}${o}`;
}
function aa(e, t) {
  return t === !1
    ? ""
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ""
    : ` | ${t}`;
}
function ua(e, t) {
  if (!Ee) return t;
  const n = e.base,
    s = n.endsWith("/") ? n.slice(0, -1) : n;
  return t.slice(s.length);
}
function fa(e, t) {
  const [n, s] = t;
  if (n !== "meta") return !1;
  const o = Object.entries(s)[0];
  return o == null ? !1 : e.some(([i, r]) => i === n && r[o[0]] === o[1]);
}
function da(e, t) {
  return [...e.filter((n) => !fa(t, n)), ...t];
}
const ha = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  _a = /^[a-z]:/i;
function Zo(e) {
  const t = _a.exec(e),
    n = t ? t[0] : "";
  return (
    n +
    e
      .slice(n.length)
      .replace(ha, "_")
      .replace(/(^|\/)_+(?=[^/]*$)/, "$1")
  );
}
function pa(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function hn(e) {
  return ns.test(e) ? e : pa(Wt.value.base, e);
}
function ar(e) {
  let t = e.replace(/\.html$/, "");
  if (((t = decodeURIComponent(t)), t.endsWith("/") && (t += "index"), Ee)) {
    const n = "/javascript-guide/";
    t = Zo(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    const s = __VP_HASH_MAP__[t.toLowerCase()];
    t = `${n}assets/${t}.${s}.js`;
  } else t = `./${Zo(t.slice(1).replace(/\//g, "_"))}.md.js`;
  return t;
}
const ur = Symbol(),
  Wt = vl(ia);
function va(e) {
  const t = ie(() => ca(Wt.value, e.path));
  return {
    site: t,
    theme: ie(() => t.value.themeConfig),
    page: ie(() => e.data),
    frontmatter: ie(() => e.data.frontmatter),
    lang: ie(() => t.value.lang),
    localePath: ie(() => {
      const { langs: n, lang: s } = t.value,
        o = Object.keys(n).find((i) => n[i].lang === s);
      return hn(o || "/");
    }),
    title: ie(() => cr(t.value, e.data)),
    description: ie(() => e.data.description || t.value.description),
    isDark: ve(!1),
  };
}
function le() {
  const e = We(ur);
  if (!e) throw new Error("vitepress data not properly injected in app");
  return e;
}
const fr = Symbol(),
  ei = "http://a.com",
  ma = () => ({ path: "/", component: null, data: lr });
function ga(e, t) {
  const n = Wn(ma()),
    s = { route: n, go: o };
  async function o(l = Ee ? location.href : "/") {
    var f, h;
    await ((f = s.onBeforeRouteChange) == null ? void 0 : f.call(s, l));
    const c = new URL(l, ei);
    Wt.value.cleanUrls === "disabled" &&
      !c.pathname.endsWith("/") &&
      !c.pathname.endsWith(".html") &&
      ((c.pathname += ".html"), (l = c.pathname + c.search + c.hash)),
      Ee &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title
        ),
        history.pushState(null, "", l)),
      await r(l),
      await ((h = s.onAfterRouteChanged) == null ? void 0 : h.call(s, l));
  }
  let i = null;
  async function r(l, c = 0, f = !1) {
    const h = new URL(l, ei),
      v = (i = h.pathname);
    try {
      let b = await e(v);
      if (i === v) {
        i = null;
        const { default: $, __pageData: U } = b;
        if (!$) throw new Error(`Invalid route component: ${$}`);
        (n.path = Ee ? v : hn(v)),
          (n.component = tn($)),
          (n.data = tn(U)),
          Ee &&
            Ys(() => {
              if (h.hash && !c) {
                let F = null;
                try {
                  F = document.querySelector(decodeURIComponent(h.hash));
                } catch (ne) {
                  console.warn(ne);
                }
                if (F) {
                  ti(F, h.hash);
                  return;
                }
              }
              window.scrollTo(0, c);
            });
      }
    } catch (b) {
      if (
        (!/fetch/.test(b.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(b),
        !f)
      )
        try {
          const $ = await fetch(Wt.value.base + "hashmap.json");
          (window.__VP_HASH_MAP__ = await $.json()), await r(l, c, !0);
          return;
        } catch {}
      i === v &&
        ((i = null),
        (n.path = Ee ? v : hn(v)),
        (n.component = t ? tn(t) : null),
        (n.data = lr));
    }
  }
  return (
    Ee &&
      (window.addEventListener(
        "click",
        (l) => {
          if (l.target.closest("button")) return;
          const f = l.target.closest("a");
          if (f && !f.closest(".vp-raw") && !f.download) {
            const {
                href: h,
                origin: v,
                pathname: b,
                hash: $,
                search: U,
                target: F,
              } = f,
              ne = window.location,
              w = b.match(/\.\w+$/);
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              F !== "_blank" &&
              v === ne.origin &&
              !(w && w[0] !== ".html") &&
              (l.preventDefault(),
              b === ne.pathname && U === ne.search
                ? $ &&
                  $ !== ne.hash &&
                  (history.pushState(null, "", $),
                  window.dispatchEvent(new Event("hashchange")),
                  ti(f, $, f.classList.contains("header-anchor")))
                : o(h));
          }
        },
        { capture: !0 }
      ),
      window.addEventListener("popstate", (l) => {
        r(location.href, (l.state && l.state.scrollPosition) || 0);
      }),
      window.addEventListener("hashchange", (l) => {
        l.preventDefault();
      })),
    s
  );
}
function ba() {
  const e = We(fr);
  if (!e) throw new Error("useRouter() is called without provider.");
  return e;
}
function vt() {
  return ba().route;
}
function ti(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains("header-anchor")
      ? e
      : document.querySelector(decodeURIComponent(t));
  } catch (o) {
    console.warn(o);
  }
  if (s) {
    let o = Wt.value.scrollOffset;
    typeof o == "string" &&
      (o = document.querySelector(o).getBoundingClientRect().bottom + 24);
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      r = window.scrollY + s.getBoundingClientRect().top - o + i;
    !n || Math.abs(r - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, r)
      : window.scrollTo({ left: 0, top: r, behavior: "smooth" });
  }
}
const ya = H({
    name: "VitePressContent",
    props: { onContentUpdated: Function },
    setup(e) {
      const t = vt();
      return (
        Qs(() => {
          var n;
          (n = e.onContentUpdated) == null || n.call(e);
        }),
        () =>
          Bn("div", { style: { position: "relative" } }, [
            t.component ? Bn(t.component) : null,
          ])
      );
    },
  }),
  dr = /#.*$/,
  xa = /(index)?\.(md|html)$/,
  wa = typeof window < "u",
  ka = ve(wa ? location.hash : "");
function $a(e) {
  return ns.test(e);
}
function Pa(e, t) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, t));
  };
}
function Jt(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = si(`/${e}`)), n)) return new RegExp(t).test(e);
  if (si(t) !== e) return !1;
  const s = t.match(dr);
  return s ? ka.value === s[0] : !0;
}
function ni(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function si(e) {
  return decodeURI(e).replace(dr, "").replace(xa, "");
}
function On(e) {
  if ($a(e)) return e;
  const { site: t } = le(),
    { pathname: n, search: s, hash: o } = new URL(e, "http://example.com"),
    i =
      n.endsWith("/") || n.endsWith(".html")
        ? e
        : `${n.replace(
            /(\.md)?$/,
            t.value.cleanUrls === "disabled" ? ".html" : ""
          )}${s}${o}`;
  return hn(i);
}
function hr(e, t) {
  if (Array.isArray(e)) return e;
  if (e == null) return [];
  t = ni(t);
  const n = Object.keys(e)
    .sort((s, o) => o.split("/").length - s.split("/").length)
    .find((s) => t.startsWith(ni(s)));
  return n ? e[n] : [];
}
function Ca(e) {
  const t = [];
  function n(s) {
    for (const o of s)
      o.link && t.push({ ...o, link: o.link }), "items" in o && n(o.items);
  }
  for (const s of e) n(s.items);
  return t;
}
function tt() {
  const e = vt(),
    { theme: t, frontmatter: n } = le(),
    s = ve(!1),
    o = ie(() => {
      const h = t.value.sidebar,
        v = e.data.relativePath;
      return h ? hr(h, v) : [];
    }),
    i = ie(
      () =>
        n.value.sidebar !== !1 &&
        o.value.length > 0 &&
        n.value.layout !== "home"
    ),
    r = ie(() => n.value.layout !== "home" && n.value.aside !== !1);
  function l() {
    s.value = !0;
  }
  function c() {
    s.value = !1;
  }
  function f() {
    s.value ? c() : l();
  }
  return {
    isOpen: s,
    sidebar: o,
    hasSidebar: i,
    hasAside: r,
    open: l,
    close: c,
    toggle: f,
  };
}
function Sa(e, t) {
  let n;
  zt(() => {
    n = e.value ? document.activeElement : void 0;
  }),
    Re(() => {
      window.addEventListener("keyup", s);
    }),
    pt(() => {
      window.removeEventListener("keyup", s);
    });
  function s(o) {
    o.key === "Escape" && e.value && (t(), n == null || n.focus());
  }
}
const Va = H({
  __name: "VPSkipLink",
  setup(e) {
    const t = vt(),
      n = ve();
    Ze(
      () => t.path,
      () => n.value.focus()
    );
    function s({ target: o }) {
      const i = document.querySelector(o.hash);
      if (i) {
        const r = () => {
          i.removeAttribute("tabindex"), i.removeEventListener("blur", r);
        };
        i.setAttribute("tabindex", "-1"),
          i.addEventListener("blur", r),
          i.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (o, i) => (
      d(),
      m(
        G,
        null,
        [
          g(
            "span",
            { ref_key: "backToTop", ref: n, tabindex: "-1" },
            null,
            512
          ),
          g(
            "a",
            {
              href: "#VPContent",
              class: "VPSkipLink visually-hidden",
              onClick: s,
            },
            " Skip to content "
          ),
        ],
        64
      )
    );
  },
});
const Ta = N(Va, [["__scopeId", "data-v-151f2593"]]),
  La = { key: 0, class: "VPBackdrop" },
  Ea = H({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        d(),
        Y(
          ts,
          { name: "fade" },
          { default: A(() => [e.show ? (d(), m("div", La)) : z("", !0)]), _: 1 }
        )
      );
    },
  });
const Ma = N(Ea, [["__scopeId", "data-v-0164f098"]]);
function Ia() {
  const e = ve(!1);
  function t() {
    (e.value = !0), window.addEventListener("resize", o);
  }
  function n() {
    (e.value = !1), window.removeEventListener("resize", o);
  }
  function s() {
    e.value ? n() : t();
  }
  function o() {
    window.outerWidth >= 768 && n();
  }
  const i = vt();
  return (
    Ze(() => i.path, n),
    { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: s }
  );
}
const Aa = ["src", "alt"],
  Na = { inheritAttrs: !1 },
  Ba = H({
    ...Na,
    __name: "VPImage",
    props: { image: null, alt: null },
    setup(e) {
      return (t, n) => {
        var o;
        const s = Tt("VPImage", !0);
        return e.image
          ? (d(),
            m(
              G,
              { key: 0 },
              [
                typeof e.image == "string" || "src" in e.image
                  ? (d(),
                    m(
                      "img",
                      Vn(
                        { key: 0, class: "VPImage" },
                        typeof e.image == "string"
                          ? t.$attrs
                          : { ...e.image, ...t.$attrs },
                        {
                          src: _(hn)(
                            typeof e.image == "string" ? e.image : e.image.src
                          ),
                          alt:
                            (o = e.alt) != null
                              ? o
                              : typeof e.image == "string"
                              ? ""
                              : e.image.alt || "",
                        }
                      ),
                      null,
                      16,
                      Aa
                    ))
                  : (d(),
                    m(
                      G,
                      { key: 1 },
                      [
                        V(
                          s,
                          Vn(
                            {
                              class: "dark",
                              image: e.image.dark,
                              alt:
                                typeof e.image.dark == "string"
                                  ? e.image.alt
                                  : e.image.dark.alt || e.image.alt,
                            },
                            t.$attrs
                          ),
                          null,
                          16,
                          ["image", "alt"]
                        ),
                        V(
                          s,
                          Vn(
                            {
                              class: "light",
                              image: e.image.light,
                              alt:
                                typeof e.image.light == "string"
                                  ? e.image.alt
                                  : e.image.light.alt || e.image.alt,
                            },
                            t.$attrs
                          ),
                          null,
                          16,
                          ["image", "alt"]
                        ),
                      ],
                      64
                    )),
              ],
              64
            ))
          : z("", !0);
      };
    },
  });
const _r = N(Ba, [["__scopeId", "data-v-b7ac6bd3"]]),
  Oa = ["href"],
  Fa = H({
    __name: "VPNavBarTitle",
    setup(e) {
      const { site: t, theme: n } = le(),
        { hasSidebar: s } = tt();
      return (o, i) => (
        d(),
        m(
          "div",
          { class: de(["VPNavBarTitle", { "has-sidebar": _(s) }]) },
          [
            g(
              "a",
              { class: "title", href: _(t).base },
              [
                T(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                V(_r, { class: "logo", image: _(n).logo }, null, 8, ["image"]),
                _(n).siteTitle
                  ? (d(), m(G, { key: 0 }, [Te(ae(_(n).siteTitle), 1)], 64))
                  : _(n).siteTitle === void 0
                  ? (d(), m(G, { key: 1 }, [Te(ae(_(t).title), 1)], 64))
                  : z("", !0),
                T(o.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              Oa
            ),
          ],
          2
        )
      );
    },
  });
const Ha = N(Fa, [["__scopeId", "data-v-d5925166"]]);
const Ra = { key: 0, class: "VPNavBarSearch" },
  Da = {
    type: "button",
    class: "DocSearch DocSearch-Button",
    "aria-label": "Search",
  },
  ja = { class: "DocSearch-Button-Container" },
  za = g(
    "svg",
    {
      class: "DocSearch-Search-Icon",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
    },
    [
      g("path", {
        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1
  ),
  Ua = { class: "DocSearch-Button-Placeholder" },
  Ka = g(
    "span",
    { class: "DocSearch-Button-Keys" },
    [
      g("kbd", { class: "DocSearch-Button-Key" }),
      g("kbd", { class: "DocSearch-Button-Key" }, "K"),
    ],
    -1
  ),
  Wa = H({
    __name: "VPNavBarSearch",
    setup(e) {
      Dc((r) => ({ "5943dbe8": o.value }));
      const t = () => null,
        { theme: n } = le(),
        s = ve(!1),
        o = ve("'Meta'");
      Re(() => {
        if (!n.value.algolia) return;
        o.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ? "'\u2318'"
          : "'Ctrl'";
        const r = (c) => {
            c.key === "k" &&
              (c.ctrlKey || c.metaKey) &&
              (c.preventDefault(), i(), l());
          },
          l = () => {
            window.removeEventListener("keydown", r);
          };
        window.addEventListener("keydown", r), pt(l);
      });
      function i() {
        s.value || (s.value = !0);
      }
      return (r, l) => {
        var c;
        return _(n).algolia
          ? (d(),
            m("div", Ra, [
              s.value
                ? (d(), Y(_(t), { key: 0 }))
                : (d(),
                  m("div", { key: 1, id: "docsearch", onClick: i }, [
                    g("button", Da, [
                      g("span", ja, [
                        za,
                        g(
                          "span",
                          Ua,
                          ae(
                            ((c = _(n).algolia) == null
                              ? void 0
                              : c.buttonText) || "Search"
                          ),
                          1
                        ),
                      ]),
                      Ka,
                    ]),
                  ])),
            ]))
          : z("", !0);
      };
    },
  });
const qa = {},
  Ga = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
  },
  Ya = g("path", { d: "M0 0h24v24H0V0z", fill: "none" }, null, -1),
  Ja = g(
    "path",
    { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" },
    null,
    -1
  ),
  Qa = [Ya, Ja];
function Xa(e, t) {
  return d(), m("svg", Ga, Qa);
}
const Za = N(qa, [["render", Xa]]),
  eu = H({
    __name: "VPLink",
    props: { href: null, noIcon: { type: Boolean } },
    setup(e) {
      const t = e,
        n = ie(() => t.href && ns.test(t.href));
      return (s, o) => (
        d(),
        Y(
          Zs(e.href ? "a" : "span"),
          {
            class: de(["VPLink", { link: e.href }]),
            href: e.href ? _(On)(e.href) : void 0,
            target: _(n) ? "_blank" : void 0,
            rel: _(n) ? "noreferrer" : void 0,
          },
          {
            default: A(() => [
              T(s.$slots, "default", {}, void 0, !0),
              _(n) && !e.noIcon
                ? (d(), Y(Za, { key: 0, class: "icon" }))
                : z("", !0),
            ]),
            _: 3,
          },
          8,
          ["class", "href", "target", "rel"]
        )
      );
    },
  });
const Lt = N(eu, [["__scopeId", "data-v-3c355974"]]),
  tu = H({
    __name: "VPNavBarMenuLink",
    props: { item: null },
    setup(e) {
      const { page: t } = le();
      return (n, s) => (
        d(),
        Y(
          Lt,
          {
            class: de({
              VPNavBarMenuLink: !0,
              active: _(Jt)(
                _(t).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch
              ),
            }),
            href: e.item.link,
            noIcon: !0,
          },
          { default: A(() => [Te(ae(e.item.text), 1)]), _: 1 },
          8,
          ["class", "href"]
        )
      );
    },
  });
const nu = N(tu, [["__scopeId", "data-v-47a2263e"]]),
  io = ve();
let pr = !1,
  vs = 0;
function su(e) {
  const t = ve(!1);
  if (typeof window < "u") {
    !pr && ou(), vs++;
    const n = Ze(io, (s) => {
      var o, i, r;
      s === e.el.value || ((o = e.el.value) == null ? void 0 : o.contains(s))
        ? ((t.value = !0), (i = e.onFocus) == null || i.call(e))
        : ((t.value = !1), (r = e.onBlur) == null || r.call(e));
    });
    pt(() => {
      n(), vs--, vs || iu();
    });
  }
  return Ks(t);
}
function ou() {
  document.addEventListener("focusin", vr),
    (pr = !0),
    (io.value = document.activeElement);
}
function iu() {
  document.removeEventListener("focusin", vr);
}
function vr() {
  io.value = document.activeElement;
}
const ru = {},
  lu = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  cu = g(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1
  ),
  au = [cu];
function uu(e, t) {
  return d(), m("svg", lu, au);
}
const mr = N(ru, [["render", uu]]),
  fu = {},
  du = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  hu = g("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  _u = g("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  pu = g("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  vu = [hu, _u, pu];
function mu(e, t) {
  return d(), m("svg", du, vu);
}
const gu = N(fu, [["render", mu]]),
  bu = { class: "VPMenuLink" },
  yu = H({
    __name: "VPMenuLink",
    props: { item: null },
    setup(e) {
      const { page: t } = le();
      return (n, s) => (
        d(),
        m("div", bu, [
          V(
            Lt,
            {
              class: de({
                active: _(Jt)(
                  _(t).relativePath,
                  e.item.activeMatch || e.item.link
                ),
              }),
              href: e.item.link,
            },
            { default: A(() => [Te(ae(e.item.text), 1)]), _: 1 },
            8,
            ["class", "href"]
          ),
        ])
      );
    },
  });
const ss = N(yu, [["__scopeId", "data-v-e8e0fb1d"]]),
  xu = { class: "VPMenuGroup" },
  wu = { key: 0, class: "title" },
  ku = H({
    __name: "VPMenuGroup",
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        d(),
        m("div", xu, [
          e.text ? (d(), m("p", wu, ae(e.text), 1)) : z("", !0),
          (d(!0),
          m(
            G,
            null,
            Se(
              e.items,
              (s) => (
                d(),
                m(
                  G,
                  null,
                  [
                    "link" in s
                      ? (d(), Y(ss, { key: 0, item: s }, null, 8, ["item"]))
                      : z("", !0),
                  ],
                  64
                )
              )
            ),
            256
          )),
        ])
      );
    },
  });
const $u = N(ku, [["__scopeId", "data-v-9ca52130"]]),
  Pu = { class: "VPMenu" },
  Cu = { key: 0, class: "items" },
  Su = H({
    __name: "VPMenu",
    props: { items: null },
    setup(e) {
      return (t, n) => (
        d(),
        m("div", Pu, [
          e.items
            ? (d(),
              m("div", Cu, [
                (d(!0),
                m(
                  G,
                  null,
                  Se(
                    e.items,
                    (s) => (
                      d(),
                      m(
                        G,
                        { key: s.text },
                        [
                          "link" in s
                            ? (d(),
                              Y(ss, { key: 0, item: s }, null, 8, ["item"]))
                            : (d(),
                              Y(
                                $u,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ["text", "items"]
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : z("", !0),
          T(t.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
const Vu = N(Su, [["__scopeId", "data-v-1c5d0cfc"]]),
  Tu = ["aria-expanded", "aria-label"],
  Lu = { key: 0, class: "text" },
  Eu = { class: "menu" },
  Mu = H({
    __name: "VPFlyout",
    props: { icon: null, button: null, label: null, items: null },
    setup(e) {
      const t = ve(!1),
        n = ve();
      su({ el: n, onBlur: s });
      function s() {
        t.value = !1;
      }
      return (o, i) => (
        d(),
        m(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: n,
            onMouseenter: i[1] || (i[1] = (r) => (t.value = !0)),
            onMouseleave: i[2] || (i[2] = (r) => (t.value = !1)),
          },
          [
            g(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": t.value,
                "aria-label": e.label,
                onClick: i[0] || (i[0] = (r) => (t.value = !t.value)),
              },
              [
                e.button || e.icon
                  ? (d(),
                    m("span", Lu, [
                      e.icon
                        ? (d(), Y(Zs(e.icon), { key: 0, class: "option-icon" }))
                        : z("", !0),
                      Te(" " + ae(e.button) + " ", 1),
                      V(mr, { class: "text-icon" }),
                    ]))
                  : (d(), Y(gu, { key: 1, class: "icon" })),
              ],
              8,
              Tu
            ),
            g("div", Eu, [
              V(
                Vu,
                { items: e.items },
                {
                  default: A(() => [T(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"]
              ),
            ]),
          ],
          544
        )
      );
    },
  });
const ro = N(Mu, [["__scopeId", "data-v-6ffb57d3"]]),
  Iu = H({
    __name: "VPNavBarMenuGroup",
    props: { item: null },
    setup(e) {
      const { page: t } = le();
      return (n, s) => (
        d(),
        Y(
          ro,
          {
            class: de({
              VPNavBarMenuGroup: !0,
              active: _(Jt)(
                _(t).relativePath,
                e.item.activeMatch,
                !!e.item.activeMatch
              ),
            }),
            button: e.item.text,
            items: e.item.items,
          },
          null,
          8,
          ["class", "button", "items"]
        )
      );
    },
  }),
  Au = (e) => (qe("data-v-f83db6ba"), (e = e()), Ge(), e),
  Nu = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  Bu = Au(() =>
    g(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1
    )
  ),
  Ou = H({
    __name: "VPNavBarMenu",
    setup(e) {
      const { theme: t } = le();
      return (n, s) =>
        _(t).nav
          ? (d(),
            m("nav", Nu, [
              Bu,
              (d(!0),
              m(
                G,
                null,
                Se(
                  _(t).nav,
                  (o) => (
                    d(),
                    m(
                      G,
                      { key: o.text },
                      [
                        "link" in o
                          ? (d(), Y(nu, { key: 0, item: o }, null, 8, ["item"]))
                          : (d(),
                            Y(Iu, { key: 1, item: o }, null, 8, ["item"])),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : z("", !0);
    },
  });
const Fu = N(Ou, [["__scopeId", "data-v-f83db6ba"]]),
  Hu = {},
  Ru = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Du = g("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  ju = g(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1
  ),
  zu = [Du, ju];
function Uu(e, t) {
  return d(), m("svg", Ru, zu);
}
const gr = N(Hu, [["render", Uu]]),
  Ku = { class: "items" },
  Wu = { class: "title" },
  qu = H({
    __name: "VPNavBarTranslations",
    setup(e) {
      const { theme: t } = le();
      return (n, s) =>
        _(t).localeLinks
          ? (d(),
            Y(
              ro,
              { key: 0, class: "VPNavBarTranslations", icon: gr },
              {
                default: A(() => [
                  g("div", Ku, [
                    g("p", Wu, ae(_(t).localeLinks.text), 1),
                    (d(!0),
                    m(
                      G,
                      null,
                      Se(
                        _(t).localeLinks.items,
                        (o) => (
                          d(),
                          Y(ss, { key: o.link, item: o }, null, 8, ["item"])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }
            ))
          : z("", !0);
    },
  });
const Gu = N(qu, [["__scopeId", "data-v-db824e91"]]);
const Yu = {},
  Ju = { class: "VPSwitch", type: "button", role: "switch" },
  Qu = { class: "check" },
  Xu = { key: 0, class: "icon" };
function Zu(e, t) {
  return (
    d(),
    m("button", Ju, [
      g("span", Qu, [
        e.$slots.default
          ? (d(), m("span", Xu, [T(e.$slots, "default", {}, void 0, !0)]))
          : z("", !0),
      ]),
    ])
  );
}
const ef = N(Yu, [
    ["render", Zu],
    ["__scopeId", "data-v-eba7420e"],
  ]),
  tf = {},
  nf = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  sf = fc(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  of = [sf];
function rf(e, t) {
  return d(), m("svg", nf, of);
}
const lf = N(tf, [["render", rf]]),
  cf = {},
  af = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  uf = g(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1
  ),
  ff = [uf];
function df(e, t) {
  return d(), m("svg", af, ff);
}
const hf = N(cf, [["render", df]]),
  _f = H({
    __name: "VPSwitchAppearance",
    setup(e) {
      const { site: t, isDark: n } = le(),
        s = ve(!1),
        o = typeof localStorage < "u" ? i() : () => {};
      Re(() => {
        s.value = document.documentElement.classList.contains("dark");
      });
      function i() {
        const r = window.matchMedia("(prefers-color-scheme: dark)"),
          l = document.documentElement.classList;
        let c = localStorage.getItem(Qo),
          f =
            (t.value.appearance === "dark" && c == null) ||
            (c === "auto" || c == null ? r.matches : c === "dark");
        r.onchange = (b) => {
          c === "auto" && v((f = b.matches));
        };
        function h() {
          v((f = !f)),
            (c = f
              ? r.matches
                ? "auto"
                : "dark"
              : r.matches
              ? "light"
              : "auto"),
            localStorage.setItem(Qo, c);
        }
        function v(b) {
          const $ = document.createElement("style");
          ($.type = "text/css"),
            $.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`)
            ),
            document.head.appendChild($),
            (s.value = b),
            l[b ? "add" : "remove"]("dark"),
            window.getComputedStyle($).opacity,
            document.head.removeChild($);
        }
        return h;
      }
      return (
        Ze(s, (r) => {
          n.value = r;
        }),
        (r, l) => (
          d(),
          Y(
            ef,
            {
              class: "VPSwitchAppearance",
              "aria-label": "toggle dark mode",
              "aria-checked": s.value,
              onClick: _(o),
            },
            {
              default: A(() => [
                V(lf, { class: "sun" }),
                V(hf, { class: "moon" }),
              ]),
              _: 1,
            },
            8,
            ["aria-checked", "onClick"]
          )
        )
      );
    },
  });
const lo = N(_f, [["__scopeId", "data-v-481098f9"]]),
  pf = { key: 0, class: "VPNavBarAppearance" },
  vf = H({
    __name: "VPNavBarAppearance",
    setup(e) {
      const { site: t } = le();
      return (n, s) =>
        _(t).appearance ? (d(), m("div", pf, [V(lo)])) : z("", !0);
    },
  });
const mf = N(vf, [["__scopeId", "data-v-a3e7452b"]]),
  gf = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  bf = ["href", "innerHTML"],
  yf = H({
    __name: "VPSocialLink",
    props: { icon: null, link: null },
    setup(e) {
      const t = e,
        n = ie(() => (typeof t.icon == "object" ? t.icon.svg : gf[t.icon]));
      return (s, o) => (
        d(),
        m(
          "a",
          {
            class: "VPSocialLink",
            href: e.link,
            target: "_blank",
            rel: "noopener",
            innerHTML: _(n),
          },
          null,
          8,
          bf
        )
      );
    },
  });
const xf = N(yf, [["__scopeId", "data-v-e57698f6"]]),
  wf = { class: "VPSocialLinks" },
  kf = H({
    __name: "VPSocialLinks",
    props: { links: null },
    setup(e) {
      return (t, n) => (
        d(),
        m("div", wf, [
          (d(!0),
          m(
            G,
            null,
            Se(
              e.links,
              ({ link: s, icon: o }) => (
                d(),
                Y(xf, { key: s, icon: o, link: s }, null, 8, ["icon", "link"])
              )
            ),
            128
          )),
        ])
      );
    },
  });
const co = N(kf, [["__scopeId", "data-v-f6988cfb"]]),
  $f = H({
    __name: "VPNavBarSocialLinks",
    setup(e) {
      const { theme: t } = le();
      return (n, s) =>
        _(t).socialLinks
          ? (d(),
            Y(
              co,
              { key: 0, class: "VPNavBarSocialLinks", links: _(t).socialLinks },
              null,
              8,
              ["links"]
            ))
          : z("", !0);
    },
  });
const Pf = N($f, [["__scopeId", "data-v-738bef5a"]]),
  Cf = (e) => (qe("data-v-e4361c82"), (e = e()), Ge(), e),
  Sf = { key: 0, class: "group" },
  Vf = { class: "trans-title" },
  Tf = { key: 1, class: "group" },
  Lf = { class: "item appearance" },
  Ef = Cf(() => g("p", { class: "label" }, "Appearance", -1)),
  Mf = { class: "appearance-action" },
  If = { key: 2, class: "group" },
  Af = { class: "item social-links" },
  Nf = H({
    __name: "VPNavBarExtra",
    setup(e) {
      const { site: t, theme: n } = le(),
        s = ie(
          () => n.value.localeLinks || t.value.appearance || n.value.socialLinks
        );
      return (o, i) =>
        _(s)
          ? (d(),
            Y(
              ro,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: A(() => [
                  _(n).localeLinks
                    ? (d(),
                      m("div", Sf, [
                        g("p", Vf, ae(_(n).localeLinks.text), 1),
                        (d(!0),
                        m(
                          G,
                          null,
                          Se(
                            _(n).localeLinks.items,
                            (r) => (
                              d(),
                              Y(ss, { key: r.link, item: r }, null, 8, ["item"])
                            )
                          ),
                          128
                        )),
                      ]))
                    : z("", !0),
                  _(t).appearance
                    ? (d(),
                      m("div", Tf, [g("div", Lf, [Ef, g("div", Mf, [V(lo)])])]))
                    : z("", !0),
                  _(n).socialLinks
                    ? (d(),
                      m("div", If, [
                        g("div", Af, [
                          V(
                            co,
                            {
                              class: "social-links-list",
                              links: _(n).socialLinks,
                            },
                            null,
                            8,
                            ["links"]
                          ),
                        ]),
                      ]))
                    : z("", !0),
                ]),
                _: 1,
              }
            ))
          : z("", !0);
    },
  });
const Bf = N(Nf, [["__scopeId", "data-v-e4361c82"]]),
  Of = (e) => (qe("data-v-e5dd9c1c"), (e = e()), Ge(), e),
  Ff = ["aria-expanded"],
  Hf = Of(() =>
    g(
      "span",
      { class: "container" },
      [
        g("span", { class: "top" }),
        g("span", { class: "middle" }),
        g("span", { class: "bottom" }),
      ],
      -1
    )
  ),
  Rf = [Hf],
  Df = H({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      return (t, n) => (
        d(),
        m(
          "button",
          {
            type: "button",
            class: de(["VPNavBarHamburger", { active: e.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: n[0] || (n[0] = (s) => t.$emit("click")),
          },
          Rf,
          10,
          Ff
        )
      );
    },
  });
const jf = N(Df, [["__scopeId", "data-v-e5dd9c1c"]]),
  zf = { class: "container" },
  Uf = { class: "content" },
  Kf = H({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(e) {
      const { hasSidebar: t } = tt();
      return (n, s) => (
        d(),
        m(
          "div",
          { class: de(["VPNavBar", { "has-sidebar": _(t) }]) },
          [
            g("div", zf, [
              V(Ha, null, {
                "nav-bar-title-before": A(() => [
                  T(n.$slots, "nav-bar-title-before", {}, void 0, !0),
                ]),
                "nav-bar-title-after": A(() => [
                  T(n.$slots, "nav-bar-title-after", {}, void 0, !0),
                ]),
                _: 3,
              }),
              g("div", Uf, [
                T(n.$slots, "nav-bar-content-before", {}, void 0, !0),
                V(Wa, { class: "search" }),
                V(Fu, { class: "menu" }),
                V(Gu, { class: "translations" }),
                V(mf, { class: "appearance" }),
                V(Pf, { class: "social-links" }),
                V(Bf, { class: "extra" }),
                T(n.$slots, "nav-bar-content-after", {}, void 0, !0),
                V(
                  jf,
                  {
                    class: "hamburger",
                    active: e.isScreenOpen,
                    onClick: s[0] || (s[0] = (o) => n.$emit("toggle-screen")),
                  },
                  null,
                  8,
                  ["active"]
                ),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
const Wf = N(Kf, [["__scopeId", "data-v-6f1d18b5"]]);
function qf(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  } else return Array.from(e);
}
var ao = !1;
if (typeof window < "u") {
  var oi = {
    get passive() {
      ao = !0;
    },
  };
  window.addEventListener("testPassive", null, oi),
    window.removeEventListener("testPassive", null, oi);
}
var Fn =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  Rt = [],
  Hn = !1,
  uo = -1,
  on = void 0,
  Ct = void 0,
  rn = void 0,
  br = function (t) {
    return Rt.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(t));
    });
  },
  Rn = function (t) {
    var n = t || window.event;
    return br(n.target) || n.touches.length > 1
      ? !0
      : (n.preventDefault && n.preventDefault(), !1);
  },
  Gf = function (t) {
    if (rn === void 0) {
      var n = !!t && t.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth;
      if (n && s > 0) {
        var o = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          10
        );
        (rn = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + s + "px");
      }
    }
    on === void 0 &&
      ((on = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  Yf = function () {
    rn !== void 0 && ((document.body.style.paddingRight = rn), (rn = void 0)),
      on !== void 0 && ((document.body.style.overflow = on), (on = void 0));
  },
  Jf = function () {
    return window.requestAnimationFrame(function () {
      if (Ct === void 0) {
        Ct = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var t = window,
          n = t.scrollY,
          s = t.scrollX,
          o = t.innerHeight;
        (document.body.style.position = "fixed"),
          (document.body.style.top = -n),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var i = o - window.innerHeight;
              i && n >= o && (document.body.style.top = -(n + i));
            });
          }, 300);
      }
    });
  },
  Qf = function () {
    if (Ct !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10);
      (document.body.style.position = Ct.position),
        (document.body.style.top = Ct.top),
        (document.body.style.left = Ct.left),
        window.scrollTo(n, t),
        (Ct = void 0);
    }
  },
  Xf = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
  },
  Zf = function (t, n) {
    var s = t.targetTouches[0].clientY - uo;
    return br(t.target)
      ? !1
      : (n && n.scrollTop === 0 && s > 0) || (Xf(n) && s < 0)
      ? Rn(t)
      : (t.stopPropagation(), !0);
  },
  yr = function (t, n) {
    if (!t) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !Rt.some(function (o) {
        return o.targetElement === t;
      })
    ) {
      var s = { targetElement: t, options: n || {} };
      (Rt = [].concat(qf(Rt), [s])),
        Fn ? Jf() : Gf(n),
        Fn &&
          ((t.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (uo = o.targetTouches[0].clientY);
          }),
          (t.ontouchmove = function (o) {
            o.targetTouches.length === 1 && Zf(o, t);
          }),
          Hn ||
            (document.addEventListener(
              "touchmove",
              Rn,
              ao ? { passive: !1 } : void 0
            ),
            (Hn = !0)));
    }
  },
  xr = function () {
    Fn &&
      (Rt.forEach(function (t) {
        (t.targetElement.ontouchstart = null),
          (t.targetElement.ontouchmove = null);
      }),
      Hn &&
        (document.removeEventListener(
          "touchmove",
          Rn,
          ao ? { passive: !1 } : void 0
        ),
        (Hn = !1)),
      (uo = -1)),
      Fn ? Qf() : Yf(),
      (Rt = []);
  };
const ed = H({
  __name: "VPNavScreenMenuLink",
  props: { text: null, link: null },
  setup(e) {
    const t = We("close-screen");
    return (n, s) => (
      d(),
      Y(
        Lt,
        { class: "VPNavScreenMenuLink", href: e.link, onClick: _(t) },
        { default: A(() => [Te(ae(e.text), 1)]), _: 1 },
        8,
        ["href", "onClick"]
      )
    );
  },
});
const td = N(ed, [["__scopeId", "data-v-b7098508"]]),
  nd = {},
  sd = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  od = g(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1
  ),
  id = [od];
function rd(e, t) {
  return d(), m("svg", sd, id);
}
const ld = N(nd, [["render", rd]]),
  cd = H({
    __name: "VPNavScreenMenuGroupLink",
    props: { text: null, link: null },
    setup(e) {
      const t = We("close-screen");
      return (n, s) => (
        d(),
        Y(
          Lt,
          { class: "VPNavScreenMenuGroupLink", href: e.link, onClick: _(t) },
          { default: A(() => [Te(ae(e.text), 1)]), _: 1 },
          8,
          ["href", "onClick"]
        )
      );
    },
  });
const wr = N(cd, [["__scopeId", "data-v-7f173864"]]),
  ad = { class: "VPNavScreenMenuGroupSection" },
  ud = { key: 0, class: "title" },
  fd = H({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: null, items: null },
    setup(e) {
      return (t, n) => (
        d(),
        m("div", ad, [
          e.text ? (d(), m("p", ud, ae(e.text), 1)) : z("", !0),
          (d(!0),
          m(
            G,
            null,
            Se(
              e.items,
              (s) => (
                d(),
                Y(wr, { key: s.text, text: s.text, link: s.link }, null, 8, [
                  "text",
                  "link",
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  });
const dd = N(fd, [["__scopeId", "data-v-7478538b"]]),
  hd = ["aria-controls", "aria-expanded"],
  _d = { class: "button-text" },
  pd = ["id"],
  vd = { key: 1, class: "group" },
  md = H({
    __name: "VPNavScreenMenuGroup",
    props: { text: null, items: null },
    setup(e) {
      const t = e,
        n = ve(!1),
        s = ie(
          () => `NavScreenGroup-${t.text.replace(" ", "-").toLowerCase()}`
        );
      function o() {
        n.value = !n.value;
      }
      return (i, r) => (
        d(),
        m(
          "div",
          { class: de(["VPNavScreenMenuGroup", { open: n.value }]) },
          [
            g(
              "button",
              {
                class: "button",
                "aria-controls": _(s),
                "aria-expanded": n.value,
                onClick: o,
              },
              [g("span", _d, ae(e.text), 1), V(ld, { class: "button-icon" })],
              8,
              hd
            ),
            g(
              "div",
              { id: _(s), class: "items" },
              [
                (d(!0),
                m(
                  G,
                  null,
                  Se(
                    e.items,
                    (l) => (
                      d(),
                      m(
                        G,
                        { key: l.text },
                        [
                          "link" in l
                            ? (d(),
                              m("div", { key: l.text, class: "item" }, [
                                V(wr, { text: l.text, link: l.link }, null, 8, [
                                  "text",
                                  "link",
                                ]),
                              ]))
                            : (d(),
                              m("div", vd, [
                                V(
                                  dd,
                                  { text: l.text, items: l.items },
                                  null,
                                  8,
                                  ["text", "items"]
                                ),
                              ])),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ],
              8,
              pd
            ),
          ],
          2
        )
      );
    },
  });
const gd = N(md, [["__scopeId", "data-v-5bc84358"]]),
  bd = { key: 0, class: "VPNavScreenMenu" },
  yd = H({
    __name: "VPNavScreenMenu",
    setup(e) {
      const { theme: t } = le();
      return (n, s) =>
        _(t).nav
          ? (d(),
            m("nav", bd, [
              (d(!0),
              m(
                G,
                null,
                Se(
                  _(t).nav,
                  (o) => (
                    d(),
                    m(
                      G,
                      { key: o.text },
                      [
                        "link" in o
                          ? (d(),
                            Y(
                              td,
                              { key: 0, text: o.text, link: o.link },
                              null,
                              8,
                              ["text", "link"]
                            ))
                          : (d(),
                            Y(
                              gd,
                              { key: 1, text: o.text || "", items: o.items },
                              null,
                              8,
                              ["text", "items"]
                            )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : z("", !0);
    },
  }),
  xd = (e) => (qe("data-v-7bc19822"), (e = e()), Ge(), e),
  wd = { key: 0, class: "VPNavScreenAppearance" },
  kd = xd(() => g("p", { class: "text" }, "Appearance", -1)),
  $d = H({
    __name: "VPNavScreenAppearance",
    setup(e) {
      const { site: t } = le();
      return (n, s) =>
        _(t).appearance ? (d(), m("div", wd, [kd, V(lo)])) : z("", !0);
    },
  });
const Pd = N($d, [["__scopeId", "data-v-7bc19822"]]),
  Cd = { class: "list" },
  Sd = ["href"],
  Vd = H({
    __name: "VPNavScreenTranslations",
    setup(e) {
      const { theme: t } = le(),
        n = ve(!1);
      function s() {
        n.value = !n.value;
      }
      return (o, i) =>
        _(t).localeLinks
          ? (d(),
            m(
              "div",
              {
                key: 0,
                class: de(["VPNavScreenTranslations", { open: n.value }]),
              },
              [
                g("button", { class: "title", onClick: s }, [
                  V(gr, { class: "icon lang" }),
                  Te(" " + ae(_(t).localeLinks.text) + " ", 1),
                  V(mr, { class: "icon chevron" }),
                ]),
                g("ul", Cd, [
                  (d(!0),
                  m(
                    G,
                    null,
                    Se(
                      _(t).localeLinks.items,
                      (r) => (
                        d(),
                        m("li", { key: r.link, class: "item" }, [
                          g(
                            "a",
                            { class: "link", href: r.link },
                            ae(r.text),
                            9,
                            Sd
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            ))
          : z("", !0);
    },
  });
const Td = N(Vd, [["__scopeId", "data-v-6bfcad30"]]),
  Ld = H({
    __name: "VPNavScreenSocialLinks",
    setup(e) {
      const { theme: t } = le();
      return (n, s) =>
        _(t).socialLinks
          ? (d(),
            Y(
              co,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: _(t).socialLinks,
              },
              null,
              8,
              ["links"]
            ))
          : z("", !0);
    },
  }),
  Ed = { class: "container" },
  Md = H({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = ve(null);
      function n() {
        yr(t.value, { reserveScrollBarGap: !0 });
      }
      function s() {
        xr();
      }
      return (o, i) => (
        d(),
        Y(
          ts,
          { name: "fade", onEnter: n, onAfterLeave: s },
          {
            default: A(() => [
              e.open
                ? (d(),
                  m(
                    "div",
                    { key: 0, class: "VPNavScreen", ref_key: "screen", ref: t },
                    [
                      g("div", Ed, [
                        T(
                          o.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0
                        ),
                        V(yd, { class: "menu" }),
                        V(Td, { class: "translations" }),
                        V(Pd, { class: "appearance" }),
                        V(Ld, { class: "social-links" }),
                        T(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ]),
                    ],
                    512
                  ))
                : z("", !0),
            ]),
            _: 3,
          }
        )
      );
    },
  });
const Id = N(Md, [["__scopeId", "data-v-4a289eba"]]),
  Ad = H({
    __name: "VPNav",
    setup(e) {
      const { isScreenOpen: t, closeScreen: n, toggleScreen: s } = Ia(),
        { hasSidebar: o } = tt();
      return (
        Jn("close-screen", n),
        (i, r) => (
          d(),
          m(
            "header",
            { class: de(["VPNav", { "no-sidebar": !_(o) }]) },
            [
              V(
                Wf,
                { "is-screen-open": _(t), onToggleScreen: _(s) },
                {
                  "nav-bar-title-before": A(() => [
                    T(i.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": A(() => [
                    T(i.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  "nav-bar-content-before": A(() => [
                    T(i.$slots, "nav-bar-content-before", {}, void 0, !0),
                  ]),
                  "nav-bar-content-after": A(() => [
                    T(i.$slots, "nav-bar-content-after", {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ["is-screen-open", "onToggleScreen"]
              ),
              V(
                Id,
                { open: _(t) },
                {
                  "nav-screen-content-before": A(() => [
                    T(i.$slots, "nav-screen-content-before", {}, void 0, !0),
                  ]),
                  "nav-screen-content-after": A(() => [
                    T(i.$slots, "nav-screen-content-after", {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ["open"]
              ),
            ],
            2
          )
        )
      );
    },
  });
const Nd = N(Ad, [["__scopeId", "data-v-a50780ff"]]),
  Bd = {},
  Od = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Fd = g(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1
  ),
  Hd = g(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1
  ),
  Rd = g(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1
  ),
  Dd = g(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1
  ),
  jd = [Fd, Hd, Rd, Dd];
function zd(e, t) {
  return d(), m("svg", Od, jd);
}
const Ud = N(Bd, [["render", zd]]),
  Kd = (e) => (qe("data-v-b6162a8b"), (e = e()), Ge(), e),
  Wd = { key: 0, class: "VPLocalNav" },
  qd = ["aria-expanded"],
  Gd = Kd(() => g("span", { class: "menu-text" }, "Menu", -1)),
  Yd = H({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(e) {
      const { hasSidebar: t } = tt();
      function n() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (s, o) =>
        _(t)
          ? (d(),
            m("div", Wd, [
              g(
                "button",
                {
                  class: "menu",
                  "aria-expanded": e.open,
                  "aria-controls": "VPSidebarNav",
                  onClick: o[0] || (o[0] = (i) => s.$emit("open-menu")),
                },
                [V(Ud, { class: "menu-icon" }), Gd],
                8,
                qd
              ),
              g(
                "a",
                { class: "top-link", href: "#", onClick: n },
                " Return to top "
              ),
            ]))
          : z("", !0);
    },
  });
const Jd = N(Yd, [["__scopeId", "data-v-b6162a8b"]]),
  Qd = {},
  Xd = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
  },
  Zd = g(
    "path",
    {
      d: "M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z",
    },
    null,
    -1
  ),
  eh = g(
    "path",
    {
      d: "M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z",
    },
    null,
    -1
  ),
  th = [Zd, eh];
function nh(e, t) {
  return d(), m("svg", Xd, th);
}
const sh = N(Qd, [["render", nh]]),
  oh = {},
  ih = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
  },
  rh = g(
    "path",
    {
      d: "M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z",
    },
    null,
    -1
  ),
  lh = g(
    "path",
    {
      d: "M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z",
    },
    null,
    -1
  ),
  ch = [rh, lh];
function ah(e, t) {
  return d(), m("svg", ih, ch);
}
const uh = N(oh, [["render", ah]]),
  fh = ["innerHTML"],
  dh = H({
    __name: "VPSidebarLink",
    props: { item: null, depth: { default: 1 } },
    setup(e) {
      const { page: t, frontmatter: n } = le(),
        s = ie(() => n.value.sidebarDepth || 1 / 0),
        o = We("close-sidebar");
      return (i, r) => {
        const l = Tt("VPSidebarLink", !0);
        return (
          d(),
          m(
            G,
            null,
            [
              V(
                Lt,
                {
                  class: de([
                    "link",
                    { active: _(Jt)(_(t).relativePath, e.item.link) },
                  ]),
                  style: Dn({ paddingLeft: 16 * (e.depth - 1) + "px" }),
                  href: e.item.link,
                  onClick: _(o),
                },
                {
                  default: A(() => [
                    g(
                      "span",
                      {
                        innerHTML: e.item.text,
                        class: de(["link-text", { light: e.depth > 1 }]),
                      },
                      null,
                      10,
                      fh
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["class", "style", "href", "onClick"]
              ),
              "items" in e.item && e.depth < _(s)
                ? (d(!0),
                  m(
                    G,
                    { key: 0 },
                    Se(
                      e.item.items,
                      (c) => (
                        d(),
                        Y(
                          l,
                          { key: c.link, item: c, depth: e.depth + 1 },
                          null,
                          8,
                          ["item", "depth"]
                        )
                      )
                    ),
                    128
                  ))
                : z("", !0),
            ],
            64
          )
        );
      };
    },
  });
const hh = N(dh, [["__scopeId", "data-v-36b976d1"]]),
  _h = ["role"],
  ph = ["innerHTML"],
  vh = { class: "action" },
  mh = { class: "items" },
  gh = H({
    __name: "VPSidebarGroup",
    props: {
      text: null,
      items: null,
      collapsible: { type: Boolean },
      collapsed: { type: Boolean },
    },
    setup(e) {
      const t = e,
        n = ve(!1);
      zt(() => {
        n.value = !!(t.collapsible && t.collapsed);
      });
      const { page: s } = le();
      zt(() => {
        t.items.some((i) => Jt(s.value.relativePath, i.link)) && (n.value = !1);
      });
      function o() {
        t.collapsible && (n.value = !n.value);
      }
      return (i, r) => (
        d(),
        m(
          "section",
          {
            class: de([
              "VPSidebarGroup",
              { collapsible: e.collapsible, collapsed: n.value },
            ]),
          },
          [
            e.text
              ? (d(),
                m(
                  "div",
                  {
                    key: 0,
                    class: "title",
                    role: e.collapsible ? "button" : void 0,
                    onClick: o,
                  },
                  [
                    g(
                      "h2",
                      { innerHTML: e.text, class: "title-text" },
                      null,
                      8,
                      ph
                    ),
                    g("div", vh, [
                      V(uh, { class: "icon minus" }),
                      V(sh, { class: "icon plus" }),
                    ]),
                  ],
                  8,
                  _h
                ))
              : z("", !0),
            g("div", mh, [
              (d(!0),
              m(
                G,
                null,
                Se(
                  e.items,
                  (l) => (
                    d(), Y(hh, { key: l.link, item: l }, null, 8, ["item"])
                  )
                ),
                128
              )),
            ]),
          ],
          2
        )
      );
    },
  });
const bh = N(gh, [["__scopeId", "data-v-6e45c352"]]),
  yh = (e) => (qe("data-v-a186aa16"), (e = e()), Ge(), e),
  xh = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  wh = yh(() =>
    g(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1
    )
  ),
  kh = H({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = e,
        { sidebar: n, hasSidebar: s } = tt();
      let o = ve(null);
      function i() {
        yr(o.value, { reserveScrollBarGap: !0 });
      }
      function r() {
        xr();
      }
      return (
        Fi(async () => {
          var l;
          t.open ? (i(), (l = o.value) == null || l.focus()) : r();
        }),
        (l, c) =>
          _(s)
            ? (d(),
              m(
                "aside",
                {
                  key: 0,
                  class: de(["VPSidebar", { open: e.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: c[0] || (c[0] = Yc(() => {}, ["stop"])),
                },
                [
                  g("nav", xh, [
                    wh,
                    T(l.$slots, "sidebar-nav-before", {}, void 0, !0),
                    (d(!0),
                    m(
                      G,
                      null,
                      Se(
                        _(n),
                        (f) => (
                          d(),
                          m("div", { key: f.text, class: "group" }, [
                            V(
                              bh,
                              {
                                text: f.text,
                                items: f.items,
                                collapsible: f.collapsible,
                                collapsed: f.collapsed,
                              },
                              null,
                              8,
                              ["text", "items", "collapsible", "collapsed"]
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                    T(l.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                ],
                2
              ))
            : z("", !0)
      );
    },
  });
const $h = N(kh, [["__scopeId", "data-v-a186aa16"]]),
  Ph = {},
  Ch = { class: "VPPage" };
function Sh(e, t) {
  const n = Tt("Content");
  return d(), m("div", Ch, [V(n)]);
}
const Vh = N(Ph, [["render", Sh]]),
  Th = H({
    __name: "VPButton",
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(e) {
      const t = e,
        n = ie(() => {
          var i, r;
          return [
            (i = t.size) != null ? i : "medium",
            (r = t.theme) != null ? r : "brand",
          ];
        }),
        s = ie(() => t.href && ns.test(t.href)),
        o = ie(() => (t.tag ? t.tag : t.href ? "a" : "button"));
      return (i, r) => (
        d(),
        Y(
          Zs(_(o)),
          {
            class: de(["VPButton", _(n)]),
            href: e.href ? _(On)(e.href) : void 0,
            target: _(s) ? "_blank" : void 0,
            rel: _(s) ? "noreferrer" : void 0,
          },
          { default: A(() => [Te(ae(e.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"]
        )
      );
    },
  });
const Lh = N(Th, [["__scopeId", "data-v-53dbb8eb"]]),
  Eh = (e) => (qe("data-v-0a0d4301"), (e = e()), Ge(), e),
  Mh = { class: "container" },
  Ih = { class: "main" },
  Ah = { key: 0, class: "name" },
  Nh = { class: "clip" },
  Bh = { key: 1, class: "text" },
  Oh = { key: 2, class: "tagline" },
  Fh = { key: 3, class: "actions" },
  Hh = { key: 0, class: "image" },
  Rh = { class: "image-container" },
  Dh = Eh(() => g("div", { class: "image-bg" }, null, -1)),
  jh = H({
    __name: "VPHero",
    props: {
      name: null,
      text: null,
      tagline: null,
      image: null,
      actions: null,
    },
    setup(e) {
      return (t, n) => (
        d(),
        m(
          "div",
          { class: de(["VPHero", { "has-image": e.image }]) },
          [
            g("div", Mh, [
              g("div", Ih, [
                e.name
                  ? (d(), m("h1", Ah, [g("span", Nh, ae(e.name), 1)]))
                  : z("", !0),
                e.text ? (d(), m("p", Bh, ae(e.text), 1)) : z("", !0),
                e.tagline ? (d(), m("p", Oh, ae(e.tagline), 1)) : z("", !0),
                e.actions
                  ? (d(),
                    m("div", Fh, [
                      (d(!0),
                      m(
                        G,
                        null,
                        Se(
                          e.actions,
                          (s) => (
                            d(),
                            m("div", { key: s.link, class: "action" }, [
                              V(
                                Lh,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: s.theme,
                                  text: s.text,
                                  href: s.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : z("", !0),
              ]),
              e.image
                ? (d(),
                  m("div", Hh, [
                    g("div", Rh, [
                      Dh,
                      V(_r, { class: "image-src", image: e.image }, null, 8, [
                        "image",
                      ]),
                    ]),
                  ]))
                : z("", !0),
            ]),
          ],
          2
        )
      );
    },
  });
const zh = N(jh, [["__scopeId", "data-v-0a0d4301"]]),
  Uh = H({
    __name: "VPHomeHero",
    setup(e) {
      const { frontmatter: t } = le();
      return (n, s) =>
        _(t).hero
          ? (d(),
            Y(
              zh,
              {
                key: 0,
                class: "VPHomeHero",
                name: _(t).hero.name,
                text: _(t).hero.text,
                tagline: _(t).hero.tagline,
                image: _(t).hero.image,
                actions: _(t).hero.actions,
              },
              null,
              8,
              ["name", "text", "tagline", "image", "actions"]
            ))
          : z("", !0);
    },
  }),
  Kh = {},
  Wh = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  qh = g(
    "path",
    {
      d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
    },
    null,
    -1
  ),
  Gh = [qh];
function Yh(e, t) {
  return d(), m("svg", Wh, Gh);
}
const Jh = N(Kh, [["render", Yh]]),
  Qh = { class: "box" },
  Xh = { key: 0, class: "icon" },
  Zh = { class: "title" },
  e0 = { class: "details" },
  t0 = { key: 1, class: "link-text" },
  n0 = { class: "link-text-value" },
  s0 = H({
    __name: "VPFeature",
    props: {
      icon: null,
      title: null,
      details: null,
      link: null,
      linkText: null,
    },
    setup(e) {
      return (t, n) => (
        d(),
        Y(
          Lt,
          { class: "VPFeature", href: e.link, "no-icon": !0 },
          {
            default: A(() => [
              g("article", Qh, [
                e.icon ? (d(), m("div", Xh, ae(e.icon), 1)) : z("", !0),
                g("h2", Zh, ae(e.title), 1),
                g("p", e0, ae(e.details), 1),
                e.linkText
                  ? (d(),
                    m("div", t0, [
                      g("p", n0, [
                        Te(ae(e.linkText) + " ", 1),
                        V(Jh, { class: "link-text-icon" }),
                      ]),
                    ]))
                  : z("", !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ["href"]
        )
      );
    },
  });
const o0 = N(s0, [["__scopeId", "data-v-b8147458"]]),
  i0 = { key: 0, class: "VPFeatures" },
  r0 = { class: "container" },
  l0 = { class: "items" },
  c0 = H({
    __name: "VPFeatures",
    props: { features: null },
    setup(e) {
      const t = e,
        n = ie(() => {
          const s = t.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s % 2 === 0) return "grid-4";
          } else return;
        });
      return (s, o) =>
        e.features
          ? (d(),
            m("div", i0, [
              g("div", r0, [
                g("div", l0, [
                  (d(!0),
                  m(
                    G,
                    null,
                    Se(
                      e.features,
                      (i) => (
                        d(),
                        m(
                          "div",
                          { key: i.title, class: de(["item", [_(n)]]) },
                          [
                            V(
                              o0,
                              {
                                icon: i.icon,
                                title: i.title,
                                details: i.details,
                                link: i.link,
                                "link-text": i.linkText,
                              },
                              null,
                              8,
                              ["icon", "title", "details", "link", "link-text"]
                            ),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]))
          : z("", !0);
    },
  });
const a0 = N(c0, [["__scopeId", "data-v-69662dc1"]]),
  u0 = H({
    __name: "VPHomeFeatures",
    setup(e) {
      const { frontmatter: t } = le();
      return (n, s) =>
        _(t).features
          ? (d(),
            Y(
              a0,
              { key: 0, class: "VPHomeFeatures", features: _(t).features },
              null,
              8,
              ["features"]
            ))
          : z("", !0);
    },
  }),
  f0 = { class: "VPHome" },
  d0 = H({
    __name: "VPHome",
    setup(e) {
      return (t, n) => {
        const s = Tt("Content");
        return (
          d(),
          m("div", f0, [
            T(t.$slots, "home-hero-before", {}, void 0, !0),
            V(Uh),
            T(t.$slots, "home-hero-after", {}, void 0, !0),
            T(t.$slots, "home-features-before", {}, void 0, !0),
            V(u0),
            T(t.$slots, "home-features-after", {}, void 0, !0),
            V(s),
          ])
        );
      };
    },
  });
const h0 = N(d0, [["__scopeId", "data-v-1db23833"]]);
var ii;
const pn = typeof window < "u";
pn &&
  ((ii = window == null ? void 0 : window.navigator) == null
    ? void 0
    : ii.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _0(e) {
  return e;
}
function p0(e) {
  return jr() ? (zr(e), !0) : !1;
}
function v0(e) {
  return typeof e == "function" ? ie(e) : ve(e);
}
function m0(e, t = !0) {
  so() ? Re(e) : t ? e() : Ys(e);
}
const g0 = pn ? window : void 0;
pn && window.document;
pn && window.navigator;
pn && window.location;
function b0(e, t = !1) {
  const n = ve(),
    s = () => (n.value = Boolean(e()));
  return s(), m0(s, t), n;
}
function ri(e, t = {}) {
  const { window: n = g0 } = t,
    s = b0(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = ve(!1),
    r = () => {
      !o ||
        ("removeEventListener" in o
          ? o.removeEventListener("change", l)
          : o.removeListener(l));
    },
    l = () => {
      !s.value ||
        (r(),
        (o = n.matchMedia(v0(e).value)),
        (i.value = o.matches),
        "addEventListener" in o
          ? o.addEventListener("change", l)
          : o.addListener(l));
    };
  return zt(l), p0(() => r()), i;
}
const Ms =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Is = "__vueuse_ssr_handlers__";
Ms[Is] = Ms[Is] || {};
Ms[Is];
var li;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(li || (li = {}));
var y0 = Object.defineProperty,
  ci = Object.getOwnPropertySymbols,
  x0 = Object.prototype.hasOwnProperty,
  w0 = Object.prototype.propertyIsEnumerable,
  ai = (e, t, n) =>
    t in e
      ? y0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  k0 = (e, t) => {
    for (var n in t || (t = {})) x0.call(t, n) && ai(e, n, t[n]);
    if (ci) for (var n of ci(t)) w0.call(t, n) && ai(e, n, t[n]);
    return e;
  };
const $0 = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
k0({ linear: _0 }, $0);
function P0() {
  const { hasSidebar: e } = tt(),
    t = ri("(min-width: 960px)"),
    n = ri("(min-width: 1280px)");
  return {
    isAsideEnabled: ie(() =>
      !n.value && !t.value ? !1 : e.value ? n.value : t.value
    ),
  };
}
const C0 = 71;
function S0(e) {
  if (e === !1) return [];
  let t = [];
  return (
    document.querySelectorAll("h2, h3, h4, h5, h6").forEach((n) => {
      n.textContent &&
        n.id &&
        t.push({
          level: Number(n.tagName[1]),
          title: n.innerText.replace(/\s+#\s*$/, ""),
          link: `#${n.id}`,
        });
    }),
    V0(t, e)
  );
}
function V0(e, t = 2) {
  return T0(e, typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t);
}
function T0(e, t) {
  const n = [];
  return (
    (e = e.map((s) => ({ ...s }))),
    e.forEach((s, o) => {
      s.level >= t[0] && s.level <= t[1] && L0(o, e, t) && n.push(s);
    }),
    n
  );
}
function L0(e, t, n) {
  if (e === 0) return !0;
  const s = t[e];
  for (let o = e - 1; o >= 0; o--) {
    const i = t[o];
    if (i.level < s.level && i.level >= n[0] && i.level <= n[1])
      return i.children == null && (i.children = []), i.children.push(s), !1;
  }
  return !0;
}
function E0(e, t) {
  const { isAsideEnabled: n } = P0(),
    s = Pa(i, 100);
  let o = null;
  Re(() => {
    requestAnimationFrame(i), window.addEventListener("scroll", s);
  }),
    Qs(() => {
      r(location.hash);
    }),
    pt(() => {
      window.removeEventListener("scroll", s);
    });
  function i() {
    if (!n.value) return;
    const l = [].slice.call(e.value.querySelectorAll(".outline-link")),
      c = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter(($) =>
          l.some((U) => U.hash === $.hash && $.offsetParent !== null)
        ),
      f = window.scrollY,
      h = window.innerHeight,
      v = document.body.offsetHeight,
      b = Math.abs(f + h - v) < 1;
    if (c.length && b) {
      r(c[c.length - 1].hash);
      return;
    }
    for (let $ = 0; $ < c.length; $++) {
      const U = c[$],
        F = c[$ + 1],
        [ne, w] = M0($, U, F);
      if (ne) {
        r(w);
        return;
      }
    }
  }
  function r(l) {
    o && o.classList.remove("active"),
      l !== null &&
        (o = e.value.querySelector(`a[href="${decodeURIComponent(l)}"]`));
    const c = o;
    c
      ? (c.classList.add("active"),
        (t.value.style.top = c.offsetTop + 33 + "px"),
        (t.value.style.opacity = "1"))
      : ((t.value.style.top = "33px"), (t.value.style.opacity = "0"));
  }
}
function ui(e) {
  return e.parentElement.offsetTop - C0;
}
function M0(e, t, n) {
  const s = window.scrollY;
  return e === 0 && s === 0
    ? [!0, null]
    : s < ui(t)
    ? [!1, null]
    : !n || s < ui(n)
    ? [!0, t.hash]
    : [!1, null];
}
const I0 = ["href"],
  A0 = H({
    __name: "VPDocAsideOutlineItem",
    props: { headers: null, onClick: null, root: { type: Boolean } },
    setup(e) {
      return (t, n) => {
        const s = Tt("VPDocAsideOutlineItem", !0);
        return (
          d(),
          m(
            "ul",
            { class: de(e.root ? "root" : "nested") },
            [
              (d(!0),
              m(
                G,
                null,
                Se(
                  e.headers,
                  ({ children: o, link: i, title: r }) => (
                    d(),
                    m("li", null, [
                      g(
                        "a",
                        {
                          class: "outline-link",
                          href: i,
                          onClick:
                            n[0] ||
                            (n[0] = (...l) => e.onClick && e.onClick(...l)),
                        },
                        ae(r),
                        9,
                        I0
                      ),
                      o != null && o.length
                        ? (d(),
                          Y(
                            s,
                            { key: 0, headers: o, onClick: e.onClick },
                            null,
                            8,
                            ["headers", "onClick"]
                          ))
                        : z("", !0),
                    ])
                  )
                ),
                256
              )),
            ],
            2
          )
        );
      };
    },
  });
const N0 = N(A0, [["__scopeId", "data-v-1188541a"]]),
  B0 = (e) => (qe("data-v-2865c0b0"), (e = e()), Ge(), e),
  O0 = { class: "content" },
  F0 = { class: "outline-title" },
  H0 = { "aria-labelledby": "doc-outline-aria-label" },
  R0 = B0(() =>
    g(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1
    )
  ),
  D0 = H({
    __name: "VPDocAsideOutline",
    setup(e) {
      const { frontmatter: t, theme: n } = le(),
        s = ie(() => {
          var h;
          return (h = t.value.outline) != null ? h : n.value.outline;
        }),
        o = We("onContentUpdated");
      o.value = () => {
        i.value = S0(s.value);
      };
      const i = ve([]),
        r = ie(() => i.value.length > 0),
        l = ve(),
        c = ve();
      E0(l, c);
      function f({ target: h }) {
        const v = "#" + h.href.split("#")[1],
          b = document.querySelector(decodeURIComponent(v));
        b == null || b.focus();
      }
      return (h, v) => (
        d(),
        m(
          "div",
          {
            class: de(["VPDocAsideOutline", { "has-outline": _(r) }]),
            ref_key: "container",
            ref: l,
          },
          [
            g("div", O0, [
              g(
                "div",
                { class: "outline-marker", ref_key: "marker", ref: c },
                null,
                512
              ),
              g("div", F0, ae(_(n).outlineTitle || "On this page"), 1),
              g("nav", H0, [
                R0,
                V(N0, { headers: i.value, root: !0, onClick: f }, null, 8, [
                  "headers",
                ]),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
const j0 = N(D0, [["__scopeId", "data-v-2865c0b0"]]),
  z0 = { class: "VPDocAsideCarbonAds" },
  U0 = H({
    __name: "VPDocAsideCarbonAds",
    setup(e) {
      const t = () => null;
      return (n, s) => (d(), m("div", z0, [V(_(t))]));
    },
  }),
  K0 = (e) => (qe("data-v-afc4c1a1"), (e = e()), Ge(), e),
  W0 = { class: "VPDocAside" },
  q0 = K0(() => g("div", { class: "spacer" }, null, -1)),
  G0 = H({
    __name: "VPDocAside",
    setup(e) {
      const { theme: t } = le();
      return (n, s) => (
        d(),
        m("div", W0, [
          T(n.$slots, "aside-top", {}, void 0, !0),
          T(n.$slots, "aside-outline-before", {}, void 0, !0),
          V(j0),
          T(n.$slots, "aside-outline-after", {}, void 0, !0),
          q0,
          T(n.$slots, "aside-ads-before", {}, void 0, !0),
          _(t).carbonAds ? (d(), Y(U0, { key: 0 })) : z("", !0),
          T(n.$slots, "aside-ads-after", {}, void 0, !0),
          T(n.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
const Y0 = N(G0, [["__scopeId", "data-v-afc4c1a1"]]);
function J0() {
  const { theme: e, page: t } = le();
  return ie(() => {
    const { text: n = "Edit this page", pattern: s } = e.value.editLink || {},
      { relativePath: o } = t.value;
    return { url: s.replace(/:path/g, o), text: n };
  });
}
function Q0() {
  const { page: e, theme: t, frontmatter: n } = le();
  return ie(() => {
    const s = hr(t.value.sidebar, e.value.relativePath),
      o = Ca(s),
      i = o.findIndex((r) => Jt(e.value.relativePath, r.link));
    return {
      prev: n.value.prev ? { ...o[i - 1], text: n.value.prev } : o[i - 1],
      next: n.value.next ? { ...o[i + 1], text: n.value.next } : o[i + 1],
    };
  });
}
const X0 = {},
  Z0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  e1 = g(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1
  ),
  t1 = g(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1
  ),
  n1 = [e1, t1];
function s1(e, t) {
  return d(), m("svg", Z0, n1);
}
const o1 = N(X0, [["render", s1]]),
  i1 = { class: "VPLastUpdated" },
  r1 = ["datetime"],
  l1 = H({
    __name: "VPDocFooterLastUpdated",
    setup(e) {
      const { theme: t, page: n } = le(),
        s = ie(() => new Date(n.value.lastUpdated)),
        o = ie(() => s.value.toISOString()),
        i = ve("");
      return (
        Re(() => {
          zt(() => {
            i.value = s.value.toLocaleString(window.navigator.language);
          });
        }),
        (r, l) => {
          var c;
          return (
            d(),
            m("p", i1, [
              Te(
                ae((c = _(t).lastUpdatedText) != null ? c : "Last updated") +
                  ": ",
                1
              ),
              g("time", { datetime: _(o) }, ae(i.value), 9, r1),
            ])
          );
        }
      );
    },
  });
const c1 = N(l1, [["__scopeId", "data-v-18fe8fc2"]]),
  a1 = { key: 0, class: "VPDocFooter" },
  u1 = { key: 0, class: "edit-info" },
  f1 = { key: 0, class: "edit-link" },
  d1 = { key: 1, class: "last-updated" },
  h1 = { key: 1, class: "prev-next" },
  _1 = { class: "pager" },
  p1 = ["href"],
  v1 = ["innerHTML"],
  m1 = ["innerHTML"],
  g1 = ["href"],
  b1 = ["innerHTML"],
  y1 = ["innerHTML"],
  x1 = H({
    __name: "VPDocFooter",
    setup(e) {
      const { theme: t, page: n, frontmatter: s } = le(),
        o = J0(),
        i = Q0(),
        r = ie(() => t.value.editLink && s.value.editLink !== !1),
        l = ie(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        c = ie(() => r.value || l.value || i.value.prev || i.value.next);
      return (f, h) => {
        var v, b, $, U;
        return _(c)
          ? (d(),
            m("footer", a1, [
              _(r) || _(l)
                ? (d(),
                  m("div", u1, [
                    _(r)
                      ? (d(),
                        m("div", f1, [
                          V(
                            Lt,
                            {
                              class: "edit-link-button",
                              href: _(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: A(() => [
                                V(o1, { class: "edit-link-icon" }),
                                Te(" " + ae(_(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"]
                          ),
                        ]))
                      : z("", !0),
                    _(l) ? (d(), m("div", d1, [V(c1)])) : z("", !0),
                  ]))
                : z("", !0),
              _(i).prev || _(i).next
                ? (d(),
                  m("div", h1, [
                    g("div", _1, [
                      _(i).prev
                        ? (d(),
                          m(
                            "a",
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: _(On)(_(i).prev.link),
                            },
                            [
                              g(
                                "span",
                                {
                                  class: "desc",
                                  innerHTML:
                                    (b =
                                      (v = _(t).docFooter) == null
                                        ? void 0
                                        : v.prev) != null
                                      ? b
                                      : "Previous page",
                                },
                                null,
                                8,
                                v1
                              ),
                              g(
                                "span",
                                { class: "title", innerHTML: _(i).prev.text },
                                null,
                                8,
                                m1
                              ),
                            ],
                            8,
                            p1
                          ))
                        : z("", !0),
                    ]),
                    g(
                      "div",
                      { class: de(["pager", { "has-prev": _(i).prev }]) },
                      [
                        _(i).next
                          ? (d(),
                            m(
                              "a",
                              {
                                key: 0,
                                class: "pager-link next",
                                href: _(On)(_(i).next.link),
                              },
                              [
                                g(
                                  "span",
                                  {
                                    class: "desc",
                                    innerHTML:
                                      (U =
                                        ($ = _(t).docFooter) == null
                                          ? void 0
                                          : $.next) != null
                                        ? U
                                        : "Next page",
                                  },
                                  null,
                                  8,
                                  b1
                                ),
                                g(
                                  "span",
                                  { class: "title", innerHTML: _(i).next.text },
                                  null,
                                  8,
                                  y1
                                ),
                              ],
                              8,
                              g1
                            ))
                          : z("", !0),
                      ],
                      2
                    ),
                  ]))
                : z("", !0),
            ]))
          : z("", !0);
      };
    },
  });
const w1 = N(x1, [["__scopeId", "data-v-21f75714"]]),
  k1 = (e) => (qe("data-v-cfb513e0"), (e = e()), Ge(), e),
  $1 = { class: "container" },
  P1 = { key: 0, class: "aside" },
  C1 = k1(() => g("div", { class: "aside-curtain" }, null, -1)),
  S1 = { class: "aside-container" },
  V1 = { class: "aside-content" },
  T1 = { class: "content" },
  L1 = { class: "content-container" },
  E1 = { class: "main" },
  M1 = H({
    __name: "VPDoc",
    setup(e) {
      const t = vt(),
        { hasSidebar: n, hasAside: s } = tt(),
        o = ie(() => t.path.replace(/[./]+/g, "_").replace(/_html$/, "")),
        i = ve();
      return (
        Jn("onContentUpdated", i),
        (r, l) => {
          const c = Tt("Content");
          return (
            d(),
            m(
              "div",
              {
                class: de([
                  "VPDoc",
                  { "has-sidebar": _(n), "has-aside": _(s) },
                ]),
              },
              [
                g("div", $1, [
                  _(s)
                    ? (d(),
                      m("div", P1, [
                        C1,
                        g("div", S1, [
                          g("div", V1, [
                            V(Y0, null, {
                              "aside-top": A(() => [
                                T(r.$slots, "aside-top", {}, void 0, !0),
                              ]),
                              "aside-bottom": A(() => [
                                T(r.$slots, "aside-bottom", {}, void 0, !0),
                              ]),
                              "aside-outline-before": A(() => [
                                T(
                                  r.$slots,
                                  "aside-outline-before",
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              "aside-outline-after": A(() => [
                                T(
                                  r.$slots,
                                  "aside-outline-after",
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              "aside-ads-before": A(() => [
                                T(r.$slots, "aside-ads-before", {}, void 0, !0),
                              ]),
                              "aside-ads-after": A(() => [
                                T(r.$slots, "aside-ads-after", {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ]))
                    : z("", !0),
                  g("div", T1, [
                    g("div", L1, [
                      T(r.$slots, "doc-before", {}, void 0, !0),
                      g("main", E1, [
                        V(
                          c,
                          {
                            class: de(["vp-doc", _(o)]),
                            onContentUpdated: i.value,
                          },
                          null,
                          8,
                          ["class", "onContentUpdated"]
                        ),
                      ]),
                      T(r.$slots, "doc-footer-before", {}, void 0, !0),
                      V(w1),
                      T(r.$slots, "doc-after", {}, void 0, !0),
                    ]),
                  ]),
                ]),
              ],
              2
            )
          );
        }
      );
    },
  });
const I1 = N(M1, [["__scopeId", "data-v-cfb513e0"]]),
  A1 = H({
    __name: "VPContent",
    setup(e) {
      const t = vt(),
        { frontmatter: n } = le(),
        { hasSidebar: s } = tt(),
        o = We("NotFound");
      return (i, r) => (
        d(),
        m(
          "div",
          {
            class: de([
              "VPContent",
              { "has-sidebar": _(s), "is-home": _(n).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            _(t).component === _(o)
              ? (d(), Y(_(o), { key: 0 }))
              : _(n).layout === "page"
              ? (d(), Y(Vh, { key: 1 }))
              : _(n).layout === "home"
              ? (d(),
                Y(
                  h0,
                  { key: 2 },
                  {
                    "home-hero-before": A(() => [
                      T(i.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-after": A(() => [
                      T(i.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": A(() => [
                      T(i.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": A(() => [
                      T(i.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                ))
              : (d(),
                Y(
                  I1,
                  { key: 3 },
                  {
                    "doc-footer-before": A(() => [
                      T(i.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": A(() => [
                      T(i.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": A(() => [
                      T(i.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": A(() => [
                      T(i.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": A(() => [
                      T(i.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": A(() => [
                      T(i.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": A(() => [
                      T(i.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": A(() => [
                      T(i.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": A(() => [
                      T(i.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                )),
          ],
          2
        )
      );
    },
  });
const N1 = N(A1, [["__scopeId", "data-v-d981fe29"]]),
  B1 = { class: "container" },
  O1 = ["innerHTML"],
  F1 = ["innerHTML"],
  H1 = H({
    __name: "VPFooter",
    setup(e) {
      const { theme: t } = le(),
        { hasSidebar: n } = tt();
      return (s, o) =>
        _(t).footer
          ? (d(),
            m(
              "footer",
              { key: 0, class: de(["VPFooter", { "has-sidebar": _(n) }]) },
              [
                g("div", B1, [
                  _(t).footer.message
                    ? (d(),
                      m(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: _(t).footer.message,
                        },
                        null,
                        8,
                        O1
                      ))
                    : z("", !0),
                  _(t).footer.copyright
                    ? (d(),
                      m(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: _(t).footer.copyright,
                        },
                        null,
                        8,
                        F1
                      ))
                    : z("", !0),
                ]),
              ],
              2
            ))
          : z("", !0);
    },
  });
const R1 = N(H1, [["__scopeId", "data-v-9f24cc86"]]),
  D1 = { key: 0, class: "Layout" },
  j1 = H({
    __name: "Layout",
    setup(e) {
      const { isOpen: t, open: n, close: s } = tt(),
        o = vt();
      Ze(() => o.path, s), Sa(t, s), Jn("close-sidebar", s);
      const { frontmatter: i } = le();
      return (r, l) => {
        const c = Tt("Content");
        return _(i).layout !== !1
          ? (d(),
            m("div", D1, [
              T(r.$slots, "layout-top", {}, void 0, !0),
              V(Ta),
              V(Ma, { class: "backdrop", show: _(t), onClick: _(s) }, null, 8, [
                "show",
                "onClick",
              ]),
              V(Nd, null, {
                "nav-bar-title-before": A(() => [
                  T(r.$slots, "nav-bar-title-before", {}, void 0, !0),
                ]),
                "nav-bar-title-after": A(() => [
                  T(r.$slots, "nav-bar-title-after", {}, void 0, !0),
                ]),
                "nav-bar-content-before": A(() => [
                  T(r.$slots, "nav-bar-content-before", {}, void 0, !0),
                ]),
                "nav-bar-content-after": A(() => [
                  T(r.$slots, "nav-bar-content-after", {}, void 0, !0),
                ]),
                "nav-screen-content-before": A(() => [
                  T(r.$slots, "nav-screen-content-before", {}, void 0, !0),
                ]),
                "nav-screen-content-after": A(() => [
                  T(r.$slots, "nav-screen-content-after", {}, void 0, !0),
                ]),
                _: 3,
              }),
              V(Jd, { open: _(t), onOpenMenu: _(n) }, null, 8, [
                "open",
                "onOpenMenu",
              ]),
              V(
                $h,
                { open: _(t) },
                {
                  "sidebar-nav-before": A(() => [
                    T(r.$slots, "sidebar-nav-before", {}, void 0, !0),
                  ]),
                  "sidebar-nav-after": A(() => [
                    T(r.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ["open"]
              ),
              V(N1, null, {
                "home-hero-before": A(() => [
                  T(r.$slots, "home-hero-before", {}, void 0, !0),
                ]),
                "home-hero-after": A(() => [
                  T(r.$slots, "home-hero-after", {}, void 0, !0),
                ]),
                "home-features-before": A(() => [
                  T(r.$slots, "home-features-before", {}, void 0, !0),
                ]),
                "home-features-after": A(() => [
                  T(r.$slots, "home-features-after", {}, void 0, !0),
                ]),
                "doc-footer-before": A(() => [
                  T(r.$slots, "doc-footer-before", {}, void 0, !0),
                ]),
                "doc-before": A(() => [
                  T(r.$slots, "doc-before", {}, void 0, !0),
                ]),
                "doc-after": A(() => [
                  T(r.$slots, "doc-after", {}, void 0, !0),
                ]),
                "aside-top": A(() => [
                  T(r.$slots, "aside-top", {}, void 0, !0),
                ]),
                "aside-bottom": A(() => [
                  T(r.$slots, "aside-bottom", {}, void 0, !0),
                ]),
                "aside-outline-before": A(() => [
                  T(r.$slots, "aside-outline-before", {}, void 0, !0),
                ]),
                "aside-outline-after": A(() => [
                  T(r.$slots, "aside-outline-after", {}, void 0, !0),
                ]),
                "aside-ads-before": A(() => [
                  T(r.$slots, "aside-ads-before", {}, void 0, !0),
                ]),
                "aside-ads-after": A(() => [
                  T(r.$slots, "aside-ads-after", {}, void 0, !0),
                ]),
                _: 3,
              }),
              V(R1),
              T(r.$slots, "layout-bottom", {}, void 0, !0),
            ]))
          : (d(), Y(c, { key: 1 }));
      };
    },
  });
const z1 = N(j1, [["__scopeId", "data-v-f44a984a"]]),
  os = (e) => (qe("data-v-95656537"), (e = e()), Ge(), e),
  U1 = { class: "NotFound" },
  K1 = os(() => g("p", { class: "code" }, "404", -1)),
  W1 = os(() => g("h1", { class: "title" }, "PAGE NOT FOUND", -1)),
  q1 = os(() => g("div", { class: "divider" }, null, -1)),
  G1 = os(() =>
    g(
      "blockquote",
      { class: "quote" },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1
    )
  ),
  Y1 = { class: "action" },
  J1 = ["href"],
  Q1 = H({
    __name: "NotFound",
    setup(e) {
      const { site: t } = le();
      return (n, s) => (
        d(),
        m("div", U1, [
          K1,
          W1,
          q1,
          G1,
          g("div", Y1, [
            g(
              "a",
              { class: "link", href: _(t).base, "aria-label": "go to home" },
              " Take me home ",
              8,
              J1
            ),
          ]),
        ])
      );
    },
  });
const X1 = N(Q1, [["__scopeId", "data-v-95656537"]]);
const Dt = {
  Layout: z1,
  NotFound: X1,
  enhanceApp: ({ app: e }) => {
    e.component("Badge", oa);
  },
};
function Z1(e, t) {
  let n = [],
    s = !0;
  const o = (i) => {
    if (s) {
      s = !1;
      return;
    }
    n.forEach((r) => document.head.removeChild(r)),
      (n = []),
      i.forEach((r) => {
        const l = e_(r);
        document.head.appendChild(l), n.push(l);
      });
  };
  zt(() => {
    const i = e.data,
      r = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [];
    (document.title = cr(r, i)),
      document
        .querySelector("meta[name=description]")
        .setAttribute("content", l || r.description),
      o(da(r.head, n_(c)));
  });
}
function e_([e, t, n]) {
  const s = document.createElement(e);
  for (const o in t) s.setAttribute(o, t[o]);
  return n && (s.innerHTML = n), s;
}
function t_(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function n_(e) {
  return e.filter((t) => !t_(t));
}
const ms = new Set(),
  kr = () => document.createElement("link"),
  s_ = (e) => {
    const t = kr();
    (t.rel = "prefetch"), (t.href = e), document.head.appendChild(t);
  },
  o_ = (e) => {
    const t = new XMLHttpRequest();
    t.open("GET", e, (t.withCredentials = !0)), t.send();
  };
let Cn;
const i_ =
  Ee &&
  (Cn = kr()) &&
  Cn.relList &&
  Cn.relList.supports &&
  Cn.relList.supports("prefetch")
    ? s_
    : o_;
function r_() {
  if (!Ee || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((r) => {
          if (r.isIntersecting) {
            const l = r.target;
            n.unobserve(l);
            const { pathname: c } = l;
            if (!ms.has(c)) {
              ms.add(c);
              const f = ar(c);
              i_(f);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll("#app a").forEach((i) => {
          const { target: r, hostname: l, pathname: c } = i,
            f = c.match(/\.\w+$/);
          (f && f[0] !== ".html") ||
            (r !== "_blank" &&
              l === location.hostname &&
              (c !== location.pathname ? n.observe(i) : ms.add(c)));
        });
      });
  };
  Re(s);
  const o = vt();
  Ze(() => o.path, s),
    pt(() => {
      n && n.disconnect();
    });
}
const l_ = H({
  setup(e, { slots: t }) {
    const n = ve(!1);
    return (
      Re(() => {
        n.value = !0;
      }),
      () => (n.value && t.default ? t.default() : null)
    );
  },
});
function c_() {
  if (Ee) {
    const e = new Map();
    window.addEventListener("click", (t) => {
      var s;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const o = n.parentElement,
          i =
            (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
        if (!o || !i) return;
        const r = /language-(shellscript|shell|bash|sh|zsh)/.test(
          o.classList.toString()
        );
        let { innerText: l = "" } = i;
        r && (l = l.replace(/^ *(\$|>) /gm, "").trim()),
          a_(l).then(() => {
            n.classList.add("copied"), clearTimeout(e.get(n));
            const c = setTimeout(() => {
              n.classList.remove("copied"), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, c);
          });
      }
    });
  }
}
async function a_(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute("readonly", ""),
      (t.style.contain = "strict"),
      (t.style.position = "absolute"),
      (t.style.left = "-9999px"),
      (t.style.fontSize = "12pt");
    const s = document.getSelection(),
      o = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand("copy"),
      document.body.removeChild(t),
      o && (s.removeAllRanges(), s.addRange(o)),
      n && n.focus();
  }
}
const $r = Dt.NotFound || (() => "404 Not Found"),
  u_ = H({
    name: "VitePressApp",
    setup() {
      const { site: e } = le();
      return (
        Re(() => {
          Ze(
            () => e.value.lang,
            (t) => {
              document.documentElement.lang = t;
            },
            { immediate: !0 }
          );
        }),
        r_(),
        c_(),
        Dt.setup && Dt.setup(),
        () => Bn(Dt.Layout)
      );
    },
  });
function f_() {
  const e = h_(),
    t = d_();
  t.provide(fr, e);
  const n = va(e.route);
  return (
    t.provide(ur, n),
    t.provide("NotFound", $r),
    t.component("Content", ya),
    t.component("ClientOnly", l_),
    Object.defineProperty(t.config.globalProperties, "$frontmatter", {
      get() {
        return n.frontmatter.value;
      },
    }),
    Dt.enhanceApp && Dt.enhanceApp({ app: t, router: e, siteData: Wt }),
    { app: t, router: e, data: n }
  );
}
function d_() {
  return Xc(u_);
}
function h_() {
  let e = Ee,
    t;
  return ga((n) => {
    let s = ar(n);
    return (
      e && (t = s),
      (e || t === s) && (s = s.replace(/\.js$/, ".lean.js")),
      Ee && (e = !1),
      na(() => import(s), [])
    );
  }, $r);
}
if (Ee) {
  const { app: e, router: t, data: n } = f_();
  t.go().then(() => {
    Z1(t.route, n.site), e.mount("#app");
  });
}
export { N as _, fc as a, g as b, m as c, f_ as createApp, Te as d, d as o };
