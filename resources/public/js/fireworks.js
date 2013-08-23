function e(a) {
  throw a;
}
var h = void 0, k = !0, l = null, n = !1;
function aa() {
  return function(a) {
    return a
  }
}
function p(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var r, s = this;
function ca(a) {
  for(var a = a.split("."), b = s, c;c = a.shift();) {
    if(b[c] != l) {
      b = b[c]
    }else {
      return l
    }
  }
  return b
}
function da() {
}
function t(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ea(a) {
  return"array" == t(a)
}
function fa(a) {
  var b = t(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
  return"string" == typeof a
}
function ga(a) {
  return"function" == t(a)
}
function ha(a) {
  var b = typeof a;
  return"object" == b && a != l || "function" == b
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || e(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function x(a, b, c) {
  x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return x.apply(l, arguments)
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var oa = Date.now || function() {
  return+new Date
};
function pa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.fa = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function qa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function ra(a) {
  if(!sa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(ta, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ua, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(va, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(wa, "&quot;"));
  return a
}
var ta = /&/g, ua = /</g, va = />/g, wa = /\"/g, sa = /[&<>\"]/;
function xa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ya(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, ya) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
pa(ya, Error);
ya.prototype.name = "CustomError";
function za(a, b) {
  b.unshift(a);
  ya.call(this, qa.apply(l, b));
  b.shift();
  this.Lf = a
}
pa(za, ya);
za.prototype.name = "AssertionError";
function Ba(a, b) {
  e(new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ca = Array.prototype, Da = Ca.indexOf ? function(a, b, c) {
  return Ca.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return!u(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ea = Ca.forEach ? function(a, b, c) {
  Ca.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Fa = Ca.filter ? function(a, b, c) {
  return Ca.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = u(a) ? a.split("") : a, j = 0;j < d;j++) {
    if(j in i) {
      var m = i[j];
      b.call(c, m, j, a) && (f[g++] = m)
    }
  }
  return f
}, Ga = Ca.some ? function(a, b, c) {
  return Ca.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return k
    }
  }
  return n
};
function Ha(a, b) {
  var c = Da(a, b);
  0 <= c && Ca.splice.call(a, c, 1)
}
function Ia(a) {
  return Ca.concat.apply(Ca, arguments)
}
function Ja(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function Ka(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function La(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ma(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Oa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Na.length;g++) {
      c = Na[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Pa(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, m, q, v, w) {
    if("%" == q) {
      return"%"
    }
    var C = c.shift();
    "undefined" == typeof C && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = C;
    return Pa.xa[q].apply(l, arguments)
  })
}
Pa.xa = {};
Pa.xa.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
Pa.xa.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var g;
  g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = g + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + Array(a + 1).join(" ") : g + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
Pa.xa.d = function(a, b, c, d, f, g, i, j) {
  return Pa.xa.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
Pa.xa.i = Pa.xa.d;
Pa.xa.u = Pa.xa.d;
function Qa(a, b) {
  a != l && this.append.apply(this, arguments)
}
Qa.prototype.$a = "";
Qa.prototype.set = function(a) {
  this.$a = "" + a
};
Qa.prototype.append = function(a, b, c) {
  this.$a += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.$a += arguments[d]
    }
  }
  return this
};
Qa.prototype.toString = p("$a");
var Ra;
function Sa(a) {
  return a
}
var Ta = ["cljs", "core", "set_print_fn_BANG_"], Ua = s;
!(Ta[0] in Ua) && Ua.execScript && Ua.execScript("var " + Ta[0]);
for(var Va;Ta.length && (Va = Ta.shift());) {
  !Ta.length && Sa !== h ? Ua[Va] = Sa : Ua = Ua[Va] ? Ua[Va] : Ua[Va] = {}
}
function Wa() {
  return Xa(["\ufdd0:flush-on-newline", k, "\ufdd0:readably", k, "\ufdd0:meta", n, "\ufdd0:dup", n])
}
function y(a) {
  return a != l && a !== n
}
function Ya(a) {
  var b = u(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function z(a, b) {
  return a[t(b == l ? l : b)] ? k : a._ ? k : n
}
function A(a, b) {
  var c = b == l ? l : b.constructor, c = y(y(c) ? c.Ad : c) ? c.Je : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Za(a) {
  return Array.prototype.slice.call(arguments)
}
var $a = {}, ab = {};
function bb(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = bb[t(a == l ? l : a)];
  c ? b = c : (c = bb._) ? b = c : e(A("ICounted.-count", a));
  return b.call(l, a)
}
function cb(a) {
  if(a ? a.S : a) {
    return a.S(a)
  }
  var b;
  var c = cb[t(a == l ? l : a)];
  c ? b = c : (c = cb._) ? b = c : e(A("IEmptyableCollection.-empty", a));
  return b.call(l, a)
}
var db = {};
function fb(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  var d = fb[t(a == l ? l : a)];
  d ? c = d : (d = fb._) ? c = d : e(A("ICollection.-conj", a));
  return c.call(l, a, b)
}
var gb = {}, B, hb = l;
function ib(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  var d = B[t(a == l ? l : a)];
  d ? c = d : (d = B._) ? c = d : e(A("IIndexed.-nth", a));
  return c.call(l, a, b)
}
function jb(a, b, c) {
  if(a ? a.ia : a) {
    return a.ia(a, b, c)
  }
  var d;
  var f = B[t(a == l ? l : a)];
  f ? d = f : (f = B._) ? d = f : e(A("IIndexed.-nth", a));
  return d.call(l, a, b, c)
}
hb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ib.call(this, a, b);
    case 3:
      return jb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hb.a = ib;
hb.e = jb;
B = hb;
var kb = {};
function E(a) {
  if(a ? a.W : a) {
    return a.W(a)
  }
  var b;
  var c = E[t(a == l ? l : a)];
  c ? b = c : (c = E._) ? b = c : e(A("ISeq.-first", a));
  return b.call(l, a)
}
function F(a) {
  if(a ? a.X : a) {
    return a.X(a)
  }
  var b;
  var c = F[t(a == l ? l : a)];
  c ? b = c : (c = F._) ? b = c : e(A("ISeq.-rest", a));
  return b.call(l, a)
}
var lb = {}, mb, nb = l;
function ob(a, b) {
  if(a ? a.U : a) {
    return a.U(a, b)
  }
  var c;
  var d = mb[t(a == l ? l : a)];
  d ? c = d : (d = mb._) ? c = d : e(A("ILookup.-lookup", a));
  return c.call(l, a, b)
}
function pb(a, b, c) {
  if(a ? a.I : a) {
    return a.I(a, b, c)
  }
  var d;
  var f = mb[t(a == l ? l : a)];
  f ? d = f : (f = mb._) ? d = f : e(A("ILookup.-lookup", a));
  return d.call(l, a, b, c)
}
nb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ob.call(this, a, b);
    case 3:
      return pb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nb.a = ob;
nb.e = pb;
mb = nb;
function qb(a, b, c) {
  if(a ? a.Ia : a) {
    return a.Ia(a, b, c)
  }
  var d;
  var f = qb[t(a == l ? l : a)];
  f ? d = f : (f = qb._) ? d = f : e(A("IAssociative.-assoc", a));
  return d.call(l, a, b, c)
}
var rb = {}, sb = {};
function tb(a) {
  if(a ? a.vd : a) {
    return a.vd(a)
  }
  var b;
  var c = tb[t(a == l ? l : a)];
  c ? b = c : (c = tb._) ? b = c : e(A("IMapEntry.-key", a));
  return b.call(l, a)
}
function ub(a) {
  if(a ? a.wd : a) {
    return a.wd(a)
  }
  var b;
  var c = ub[t(a == l ? l : a)];
  c ? b = c : (c = ub._) ? b = c : e(A("IMapEntry.-val", a));
  return b.call(l, a)
}
var vb = {};
function wb(a) {
  if(a ? a.Be : a) {
    return a.state
  }
  var b;
  var c = wb[t(a == l ? l : a)];
  c ? b = c : (c = wb._) ? b = c : e(A("IDeref.-deref", a));
  return b.call(l, a)
}
var xb = {};
function yb(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = yb[t(a == l ? l : a)];
  c ? b = c : (c = yb._) ? b = c : e(A("IMeta.-meta", a));
  return b.call(l, a)
}
var zb = {};
function Ab(a, b) {
  if(a ? a.Q : a) {
    return a.Q(a, b)
  }
  var c;
  var d = Ab[t(a == l ? l : a)];
  d ? c = d : (d = Ab._) ? c = d : e(A("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var Bb = {}, Cb, Db = l;
function Eb(a, b) {
  if(a ? a.bb : a) {
    return a.bb(a, b)
  }
  var c;
  var d = Cb[t(a == l ? l : a)];
  d ? c = d : (d = Cb._) ? c = d : e(A("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function Fb(a, b, c) {
  if(a ? a.cb : a) {
    return a.cb(a, b, c)
  }
  var d;
  var f = Cb[t(a == l ? l : a)];
  f ? d = f : (f = Cb._) ? d = f : e(A("IReduce.-reduce", a));
  return d.call(l, a, b, c)
}
Db = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Eb.call(this, a, b);
    case 3:
      return Fb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Db.a = Eb;
Db.e = Fb;
Cb = Db;
function Gb(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  var d = Gb[t(a == l ? l : a)];
  d ? c = d : (d = Gb._) ? c = d : e(A("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function Hb(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  var c = Hb[t(a == l ? l : a)];
  c ? b = c : (c = Hb._) ? b = c : e(A("IHash.-hash", a));
  return b.call(l, a)
}
function Ib(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = Ib[t(a == l ? l : a)];
  c ? b = c : (c = Ib._) ? b = c : e(A("ISeqable.-seq", a));
  return b.call(l, a)
}
var Jb = {};
function G(a, b) {
  if(a ? a.zd : a) {
    return a.zd(0, b)
  }
  var c;
  var d = G[t(a == l ? l : a)];
  d ? c = d : (d = G._) ? c = d : e(A("IWriter.-write", a));
  return c.call(l, a, b)
}
function Kb(a) {
  if(a ? a.He : a) {
    return l
  }
  var b;
  var c = Kb[t(a == l ? l : a)];
  c ? b = c : (c = Kb._) ? b = c : e(A("IWriter.-flush", a));
  return b.call(l, a)
}
function Lb(a, b, c) {
  if(a ? a.yd : a) {
    return a.yd(a, b, c)
  }
  var d;
  var f = Lb[t(a == l ? l : a)];
  f ? d = f : (f = Lb._) ? d = f : e(A("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
function Mb(a) {
  if(a ? a.ub : a) {
    return a.ub(a)
  }
  var b;
  var c = Mb[t(a == l ? l : a)];
  c ? b = c : (c = Mb._) ? b = c : e(A("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function Nb(a, b) {
  if(a ? a.vb : a) {
    return a.vb(a, b)
  }
  var c;
  var d = Nb[t(a == l ? l : a)];
  d ? c = d : (d = Nb._) ? c = d : e(A("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function Ob(a) {
  if(a ? a.Ub : a) {
    return a.Ub(a)
  }
  var b;
  var c = Ob[t(a == l ? l : a)];
  c ? b = c : (c = Ob._) ? b = c : e(A("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function Pb(a, b, c) {
  if(a ? a.eb : a) {
    return a.eb(a, b, c)
  }
  var d;
  var f = Pb[t(a == l ? l : a)];
  f ? d = f : (f = Pb._) ? d = f : e(A("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
function Qb(a) {
  if(a ? a.sd : a) {
    return a.sd()
  }
  var b;
  var c = Qb[t(a == l ? l : a)];
  c ? b = c : (c = Qb._) ? b = c : e(A("IChunk.-drop-first", a));
  return b.call(l, a)
}
function Rb(a) {
  if(a ? a.wc : a) {
    return a.wc(a)
  }
  var b;
  var c = Rb[t(a == l ? l : a)];
  c ? b = c : (c = Rb._) ? b = c : e(A("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function Sb(a) {
  if(a ? a.Tb : a) {
    return a.Tb(a)
  }
  var b;
  var c = Sb[t(a == l ? l : a)];
  c ? b = c : (c = Sb._) ? b = c : e(A("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
function Tb(a) {
  this.hf = a;
  this.A = 0;
  this.j = 1073741824
}
Tb.prototype.zd = function(a, b) {
  return this.hf.append(b)
};
Tb.prototype.He = ba(l);
function Ub(a) {
  var b = new Qa, c = new Tb(b);
  a.N(a, c, Wa());
  Kb(c);
  return"" + H(b)
}
function Vb(a, b, c, d, f) {
  this.nb = a;
  this.name = b;
  this.Xa = c;
  this.Pb = d;
  this.te = f;
  this.A = 0;
  this.j = 2154168321
}
r = Vb.prototype;
r.N = function(a, b) {
  return G(b, this.Xa)
};
r.xd = k;
r.L = function() {
  -1 === this.Pb && (this.Pb = Wb.a ? Wb.a(I.b ? I.b(this.nb) : I.call(l, this.nb), I.b ? I.b(this.name) : I.call(l, this.name)) : Wb.call(l, I.b ? I.b(this.nb) : I.call(l, this.nb), I.b ? I.b(this.name) : I.call(l, this.name)));
  return this.Pb
};
r.Q = function(a, b) {
  return new Vb(this.nb, this.name, this.Xa, this.Pb, b)
};
r.P = p("te");
var Xb = l, Xb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return mb.e(b, this, l);
    case 3:
      return mb.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vb.prototype.call = Xb;
Vb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
Vb.prototype.H = function(a, b) {
  return b instanceof Vb ? this.Xa === b.Xa : n
};
Vb.prototype.toString = p("Xa");
function J(a) {
  if(a == l) {
    return l
  }
  var b;
  if(b = a) {
    b = (b = a.j & 8388608) ? b : a.Ef
  }
  if(b) {
    return a.J(a)
  }
  if(a instanceof Array || Ya(a)) {
    return 0 === a.length ? l : new Yb(a, 0)
  }
  if(z(lb, a)) {
    return Ib(a)
  }
  e(Error([H(a), H("is not ISeqable")].join("")))
}
function L(a) {
  if(a == l) {
    return l
  }
  var b;
  if(b = a) {
    b = (b = a.j & 64) ? b : a.Kc
  }
  if(b) {
    return a.W(a)
  }
  a = J(a);
  return a == l ? l : E(a)
}
function M(a) {
  if(a != l) {
    var b;
    if(b = a) {
      b = (b = a.j & 64) ? b : a.Kc
    }
    if(b) {
      return a.X(a)
    }
    a = J(a);
    return a != l ? F(a) : N
  }
  return N
}
function O(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    if(b = a) {
      b = (b = a.j & 128) ? b : a.Df
    }
    a = b ? a.Ja(a) : J(M(a))
  }
  return a
}
var P, Zb = l;
function $b(a, b) {
  var c = a === b;
  return c ? c : Gb(a, b)
}
function ac(a, b, c) {
  for(;;) {
    if(y(Zb.a(a, b))) {
      if(O(c)) {
        a = b, b = L(c), c = O(c)
      }else {
        return Zb.a(b, L(c))
      }
    }else {
      return n
    }
  }
}
function bc(a, b, c) {
  var d = l;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return ac.call(this, a, b, d)
}
bc.p = 2;
bc.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = M(a);
  return ac(b, c, a)
};
bc.g = ac;
Zb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return k;
    case 2:
      return $b.call(this, a, b);
    default:
      return bc.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zb.p = 2;
Zb.k = bc.k;
Zb.b = ba(k);
Zb.a = $b;
Zb.g = bc.g;
P = Zb;
Hb["null"] = ba(0);
ab["null"] = k;
bb["null"] = ba(0);
Gb["null"] = function(a, b) {
  return b == l
};
zb["null"] = k;
Ab["null"] = ba(l);
xb["null"] = k;
yb["null"] = ba(l);
cb["null"] = ba(l);
rb["null"] = k;
Date.prototype.H = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Hb.number = function(a) {
  return Math.floor(a) % 2147483647
};
Gb.number = function(a, b) {
  return a === b
};
Hb["boolean"] = function(a) {
  return a === k ? 1 : 0
};
xb["function"] = k;
yb["function"] = ba(l);
$a["function"] = k;
Hb._ = function(a) {
  return ia(a)
};
var cc, dc = l;
function ec(a, b) {
  var c = bb(a);
  if(0 === c) {
    return b.t ? b.t() : b.call(l)
  }
  for(var d = B.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, B.a(a, f)) : b.call(l, d, B.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function fc(a, b, c) {
  for(var d = bb(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, B.a(a, f)) : b.call(l, c, B.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function gc(a, b, c, d) {
  for(var f = bb(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, B.a(a, d)) : b.call(l, c, B.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
dc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return ec.call(this, a, b);
    case 3:
      return fc.call(this, a, b, c);
    case 4:
      return gc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dc.a = ec;
dc.e = fc;
dc.o = gc;
cc = dc;
var hc, ic = l;
function jc(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.t ? b.t() : b.call(l)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, a[f]) : b.call(l, d, a[f]), f += 1
    }else {
      return d
    }
  }
}
function kc(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function lc(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(l, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
ic = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return jc.call(this, a, b);
    case 3:
      return kc.call(this, a, b, c);
    case 4:
      return lc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ic.a = jc;
ic.e = kc;
ic.o = lc;
hc = ic;
function mc(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.Af) ? k : a.j ? n : z(ab, a)
  }else {
    a = z(ab, a)
  }
  return a
}
function nc(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.ud) ? k : a.j ? n : z(gb, a)
  }else {
    a = z(gb, a)
  }
  return a
}
function Yb(a, b) {
  this.c = a;
  this.q = b;
  this.A = 0;
  this.j = 166199550
}
r = Yb.prototype;
r.L = function(a) {
  return oc.b ? oc.b(a) : oc.call(l, a)
};
r.Ja = function() {
  return this.q + 1 < this.c.length ? new Yb(this.c, this.q + 1) : l
};
r.K = function(a, b) {
  return S.a ? S.a(b, a) : S.call(l, b, a)
};
r.toString = function() {
  return Ub(this)
};
r.bb = function(a, b) {
  return hc.o(this.c, b, this.c[this.q], this.q + 1)
};
r.cb = function(a, b, c) {
  return hc.o(this.c, b, c, this.q)
};
r.J = aa();
r.O = function() {
  return this.c.length - this.q
};
r.W = function() {
  return this.c[this.q]
};
r.X = function() {
  return this.q + 1 < this.c.length ? new Yb(this.c, this.q + 1) : pc.t ? pc.t() : pc.call(l)
};
r.H = function(a, b) {
  return qc.a ? qc.a(a, b) : qc.call(l, a, b)
};
r.M = function(a, b) {
  var c = b + this.q;
  return c < this.c.length ? this.c[c] : l
};
r.ia = function(a, b, c) {
  a = b + this.q;
  return a < this.c.length ? this.c[a] : c
};
r.S = function() {
  return N
};
var rc, sc = l;
function tc(a) {
  return sc.a(a, 0)
}
function uc(a, b) {
  return b < a.length ? new Yb(a, b) : l
}
sc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return tc.call(this, a);
    case 2:
      return uc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sc.b = tc;
sc.a = uc;
rc = sc;
var R, vc = l;
function wc(a) {
  return rc.a(a, 0)
}
function xc(a, b) {
  return rc.a(a, b)
}
vc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return wc.call(this, a);
    case 2:
      return xc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vc.b = wc;
vc.a = xc;
R = vc;
ab.array = k;
bb.array = function(a) {
  return a.length
};
Gb._ = function(a, b) {
  return a === b
};
var yc, zc = l;
function Ac(a, b) {
  return a != l ? fb(a, b) : pc.b ? pc.b(b) : pc.call(l, b)
}
function Bc(a, b, c) {
  for(;;) {
    if(y(c)) {
      a = zc.a(a, b), b = L(c), c = O(c)
    }else {
      return zc.a(a, b)
    }
  }
}
function Cc(a, b, c) {
  var d = l;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Bc.call(this, a, b, d)
}
Cc.p = 2;
Cc.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = M(a);
  return Bc(b, c, a)
};
Cc.g = Bc;
zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ac.call(this, a, b);
    default:
      return Cc.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zc.p = 2;
zc.k = Cc.k;
zc.a = Ac;
zc.g = Cc.g;
yc = zc;
function Dc(a) {
  if(mc(a)) {
    a = bb(a)
  }else {
    a: {
      for(var a = J(a), b = 0;;) {
        if(mc(a)) {
          a = b + bb(a);
          break a
        }
        a = O(a);
        b += 1
      }
      a = h
    }
  }
  return a
}
var Ec, Fc = l;
function Gc(a, b) {
  for(;;) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(J(a)) {
        return L(a)
      }
      e(Error("Index out of bounds"))
    }
    if(nc(a)) {
      return B.a(a, b)
    }
    if(J(a)) {
      var c = O(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function Hc(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return J(a) ? L(a) : c
    }
    if(nc(a)) {
      return B.e(a, b, c)
    }
    if(J(a)) {
      a = O(a), b -= 1
    }else {
      return c
    }
  }
}
Fc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Gc.call(this, a, b);
    case 3:
      return Hc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fc.a = Gc;
Fc.e = Hc;
Ec = Fc;
var Ic, Jc = l;
function Kc(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 16) ? c : a.ud
    }
    c = c ? a.M(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : l : Ya(a) ? b < a.length ? a[b] : l : Ec.a(a, Math.floor(b))
  }
  return c
}
function Lc(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 16) ? d : a.ud
    }
    a = d ? a.ia(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : Ya(a) ? b < a.length ? a[b] : c : Ec.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
Jc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Kc.call(this, a, b);
    case 3:
      return Lc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jc.a = Kc;
Jc.e = Lc;
Ic = Jc;
var Mc, Nc = l;
function Oc(a, b) {
  var c;
  if(a == l) {
    c = l
  }else {
    if(c = a) {
      c = (c = a.j & 256) ? c : a.De
    }
    c = c ? a.U(a, b) : a instanceof Array ? b < a.length ? a[b] : l : Ya(a) ? b < a.length ? a[b] : l : z(lb, a) ? mb.a(a, b) : l
  }
  return c
}
function Pc(a, b, c) {
  if(a != l) {
    var d;
    if(d = a) {
      d = (d = a.j & 256) ? d : a.De
    }
    a = d ? a.I(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : Ya(a) ? b < a.length ? a[b] : c : z(lb, a) ? mb.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
Nc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Oc.call(this, a, b);
    case 3:
      return Pc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nc.a = Oc;
Nc.e = Pc;
Mc = Nc;
var Qc, Rc = l;
function Sc(a, b, c) {
  return a != l ? qb(a, b, c) : Tc.a ? Tc.a(b, c) : Tc.call(l, b, c)
}
function Uc(a, b, c, d) {
  for(;;) {
    if(a = Rc.e(a, b, c), y(d)) {
      b = L(d), c = L(O(d)), d = O(O(d))
    }else {
      return a
    }
  }
}
function Vc(a, b, c, d) {
  var f = l;
  3 < arguments.length && (f = R(Array.prototype.slice.call(arguments, 3), 0));
  return Uc.call(this, a, b, c, f)
}
Vc.p = 3;
Vc.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = O(a), d = L(a), a = M(a);
  return Uc(b, c, d, a)
};
Vc.g = Uc;
Rc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return Sc.call(this, a, b, c);
    default:
      return Vc.g(a, b, c, R(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rc.p = 3;
Rc.k = Vc.k;
Rc.e = Sc;
Rc.g = Vc.g;
Qc = Rc;
function Wc(a) {
  var b = ga(a);
  return b ? b : a ? y(y(l) ? l : a.ye) ? k : a.Ke ? n : z($a, a) : z($a, a)
}
var Zc = function Xc(b, c) {
  var d;
  if(d = Wc(b)) {
    d = b ? ((d = b.j & 262144) ? d : b.Hf) || (b.j ? 0 : z(zb, b)) : z(zb, b), d = !d
  }
  if(d) {
    if(h === Ra) {
      Ra = {};
      Ra = function(b, c, d, f) {
        this.l = b;
        this.Uc = c;
        this.pf = d;
        this.$e = f;
        this.A = 0;
        this.j = 393217
      };
      Ra.Ad = k;
      Ra.Je = "cljs.core/t3593";
      Ra.Ie = function(b) {
        return G(b, "cljs.core/t3593")
      };
      var f = function(b, c) {
        return Yc.a ? Yc.a(b.Uc, c) : Yc.call(l, b.Uc, c)
      };
      d = function(b, c) {
        var b = this, d = l;
        1 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.p = 1;
      d.k = function(b) {
        var c = L(b), b = M(b);
        return f(c, b)
      };
      d.g = f;
      Ra.prototype.call = d;
      Ra.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      Ra.prototype.ye = k;
      Ra.prototype.P = p("$e");
      Ra.prototype.Q = function(b, c) {
        return new Ra(this.l, this.Uc, this.pf, c)
      }
    }
    d = new Ra(c, b, Xc, l);
    d = Xc(d, c)
  }else {
    d = Ab(b, c)
  }
  return d
};
function $c(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.Fe) || (a.j ? 0 : z(xb, a)) : z(xb, a);
  return b ? yb(a) : l
}
var ad = {}, bd = 0, I, cd = l;
function dd(a) {
  return cd.a(a, k)
}
function ed(a, b) {
  var c;
  ((c = u(a)) ? b : c) ? (255 < bd && (ad = {}, bd = 0), c = ad[a], "number" !== typeof c && (c = xa(a), ad[a] = c, bd += 1)) : c = Hb(a);
  return c
}
cd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return dd.call(this, a);
    case 2:
      return ed.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cd.b = dd;
cd.a = ed;
I = cd;
function fd(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Gf) ? k : a.j ? n : z(vb, a)
  }else {
    a = z(vb, a)
  }
  return a
}
function gd(a) {
  var b = a instanceof hd;
  return b ? b : a instanceof id
}
function jd(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function kd(a) {
  if(a == l) {
    a = n
  }else {
    if(a) {
      var b = a.j & 64, a = (b ? b : a.Kc) ? k : a.j ? n : z(kb, a)
    }else {
      a = z(kb, a)
    }
  }
  return a
}
function ld(a) {
  var b = u(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function md(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if((a == l ? l : a.constructor) === (b == l ? l : b.constructor)) {
    var c;
    if(c = a) {
      c = (c = a.A & 2048) ? c : a.ze
    }
    return c ? a.Ae(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var nd, od = l;
function pd(a, b) {
  var c = Dc(a), d = Dc(b);
  return c < d ? -1 : c > d ? 1 : od.o(a, b, c, 0)
}
function rd(a, b, c, d) {
  for(;;) {
    var f = md(Ic.a(a, d), Ic.a(b, d)), g = 0 === f;
    if(g ? d + 1 < c : g) {
      d += 1
    }else {
      return f
    }
  }
}
od = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return pd.call(this, a, b);
    case 4:
      return rd.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
od.a = pd;
od.o = rd;
nd = od;
var sd, td = l;
function ud(a, b) {
  var c = J(b);
  return c ? vd.e ? vd.e(a, L(c), O(c)) : vd.call(l, a, L(c), O(c)) : a.t ? a.t() : a.call(l)
}
function wd(a, b, c) {
  for(c = J(c);;) {
    if(c) {
      b = a.a ? a.a(b, L(c)) : a.call(l, b, L(c)), c = O(c)
    }else {
      return b
    }
  }
}
td = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ud.call(this, a, b);
    case 3:
      return wd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
td.a = ud;
td.e = wd;
sd = td;
var vd, xd = l;
function yd(a, b) {
  var c;
  if(c = b) {
    c = (c = b.j & 524288) ? c : b.Ge
  }
  return c ? b.bb(b, a) : b instanceof Array ? hc.a(b, a) : Ya(b) ? hc.a(b, a) : z(Bb, b) ? Cb.a(b, a) : sd.a(a, b)
}
function zd(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.j & 524288) ? d : c.Ge
  }
  return d ? c.cb(c, a, b) : c instanceof Array ? hc.e(c, a, b) : Ya(c) ? hc.e(c, a, b) : z(Bb, c) ? Cb.e(c, a, b) : sd.e(a, b, c)
}
xd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return yd.call(this, a, b);
    case 3:
      return zd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xd.a = yd;
xd.e = zd;
vd = xd;
function Ad(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.b ? Math.floor.b((a - a % 2) / 2) : Math.floor.call(l, (a - a % 2) / 2) : Math.ceil.b ? Math.ceil.b((a - a % 2) / 2) : Math.ceil.call(l, (a - a % 2) / 2)
}
var Bd, Cd = l;
function Dd() {
  return Math.random.t ? Math.random.t() : Math.random.call(l)
}
function Ed(a) {
  return a * Cd.t()
}
Cd = function(a) {
  switch(arguments.length) {
    case 0:
      return Dd.call(this);
    case 1:
      return Ed.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cd.t = Dd;
Cd.b = Ed;
Bd = Cd;
function Fd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Gd, Hd = l;
function Id(a) {
  return a == l ? "" : a.toString()
}
function Jd(a, b) {
  return function(a, b) {
    for(;;) {
      if(y(b)) {
        var f = a.append(Hd.b(L(b))), g = O(b), a = f, b = g
      }else {
        return Hd.b(a)
      }
    }
  }.call(l, new Qa(Hd.b(a)), b)
}
function Kd(a, b) {
  var c = l;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Jd.call(this, a, c)
}
Kd.p = 1;
Kd.k = function(a) {
  var b = L(a), a = M(a);
  return Jd(b, a)
};
Kd.g = Jd;
Hd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Id.call(this, a);
    default:
      return Kd.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hd.p = 1;
Hd.k = Kd.k;
Hd.t = ba("");
Hd.b = Id;
Hd.g = Kd.g;
Gd = Hd;
var H, Ld = l;
function Md(a) {
  return ld(a) ? Gd.g(":", R([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function Nd(a, b) {
  return function(a, b) {
    for(;;) {
      if(y(b)) {
        var f = a.append(Ld.b(L(b))), g = O(b), a = f, b = g
      }else {
        return Gd.b(a)
      }
    }
  }.call(l, new Qa(Ld.b(a)), b)
}
function Od(a, b) {
  var c = l;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Nd.call(this, a, c)
}
Od.p = 1;
Od.k = function(a) {
  var b = L(a), a = M(a);
  return Nd(b, a)
};
Od.g = Nd;
Ld = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Md.call(this, a);
    default:
      return Od.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ld.p = 1;
Ld.k = Od.k;
Ld.t = ba("");
Ld.b = Md;
Ld.g = Od.g;
H = Ld;
var Pd, Qd = l, Qd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qd.a = function(a, b) {
  return a.substring(b)
};
Qd.e = function(a, b, c) {
  return a.substring(b, c)
};
Pd = Qd;
var Rd, Sd = l;
function Td(a) {
  return ld(a) ? a : a instanceof Vb ? Gd.g("\ufdd0", R([":", Pd.a(a, 2)], 0)) : Gd.g("\ufdd0", R([":", a], 0))
}
function Ud(a, b) {
  return Sd.b(Gd.g(a, R(["/", b], 0)))
}
Sd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Td.call(this, a);
    case 2:
      return Ud.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sd.b = Td;
Sd.a = Ud;
Rd = Sd;
function qc(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.Ff) || (b.j ? 0 : z(Jb, b)) : z(Jb, b);
  if(c) {
    a: {
      c = J(a);
      for(var d = J(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && P.a(L(c), L(d))) {
          c = O(c), d = O(d)
        }else {
          c = n;
          break a
        }
      }
      c = h
    }
  }else {
    c = l
  }
  return y(c) ? k : n
}
function Wb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function oc(a) {
  return vd.e(function(a, c) {
    return Wb(a, I.a(c, n))
  }, I.a(L(a), n), O(a))
}
function Vd(a) {
  for(var b = 0, a = J(a);;) {
    if(a) {
      var c = L(a), b = (b + (I.b(Wd.b ? Wd.b(c) : Wd.call(l, c)) ^ I.b(Xd.b ? Xd.b(c) : Xd.call(l, c)))) % 4503599627370496, a = O(a)
    }else {
      return b
    }
  }
}
function Yd(a, b, c, d, f) {
  this.l = a;
  this.zb = b;
  this.Fa = c;
  this.count = d;
  this.n = f;
  this.A = 0;
  this.j = 65413358
}
r = Yd.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.Ja = function() {
  return 1 === this.count ? l : this.Fa
};
r.K = function(a, b) {
  return new Yd(this.l, b, a, this.count + 1, l)
};
r.toString = function() {
  return Ub(this)
};
r.J = aa();
r.O = p("count");
r.W = p("zb");
r.X = function() {
  return 1 === this.count ? N : this.Fa
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new Yd(b, this.zb, this.Fa, this.count, this.n)
};
r.P = p("l");
r.S = function() {
  return N
};
function Zd(a) {
  this.l = a;
  this.A = 0;
  this.j = 65413326
}
r = Zd.prototype;
r.L = ba(0);
r.Ja = ba(l);
r.K = function(a, b) {
  return new Yd(this.l, b, l, 1, l)
};
r.toString = function() {
  return Ub(this)
};
r.J = ba(l);
r.O = ba(0);
r.W = ba(l);
r.X = function() {
  return N
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new Zd(b)
};
r.P = p("l");
r.S = aa();
var N = new Zd(l), pc;
function $d(a) {
  var b;
  if(a instanceof Yb) {
    b = a.c
  }else {
    a: {
      for(b = [];;) {
        if(a != l) {
          b.push(a.W(a)), a = a.Ja(a)
        }else {
          break a
        }
      }
      b = h
    }
  }
  for(var a = b.length, c = N;;) {
    if(0 < a) {
      var d = a - 1, c = c.K(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function ae(a) {
  var b = l;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return $d.call(this, b)
}
ae.p = 0;
ae.k = function(a) {
  a = J(a);
  return $d(a)
};
ae.g = $d;
pc = ae;
function be(a, b, c, d) {
  this.l = a;
  this.zb = b;
  this.Fa = c;
  this.n = d;
  this.A = 0;
  this.j = 65405164
}
r = be.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.Ja = function() {
  return this.Fa == l ? l : Ib(this.Fa)
};
r.K = function(a, b) {
  return new be(l, b, a, this.n)
};
r.toString = function() {
  return Ub(this)
};
r.J = aa();
r.W = p("zb");
r.X = function() {
  return this.Fa == l ? N : this.Fa
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new be(b, this.zb, this.Fa, this.n)
};
r.P = p("l");
r.S = function() {
  return Zc(N, this.l)
};
function S(a, b) {
  var c = b == l;
  if(!c && (c = b)) {
    c = (c = b.j & 64) ? c : b.Kc
  }
  return c ? new be(l, a, b, l) : new be(l, a, J(b), l)
}
ab.string = k;
bb.string = function(a) {
  return a.length
};
Hb.string = function(a) {
  return xa(a)
};
function T(a) {
  this.Qc = a;
  this.A = 0;
  this.j = 1
}
var ce = l, ce = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == l) {
        d = l
      }else {
        var f = b.Ya;
        d = f == l ? mb.e(b, d.Qc, l) : f[d.Qc]
      }
      return d;
    case 3:
      return b == l ? c : mb.e(b, this.Qc, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
T.prototype.call = ce;
T.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var de = l, de = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Mc.a(b, this.toString());
    case 3:
      return Mc.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = de;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? Mc.a(b[0], a) : Mc.e(b[0], a, b[1])
};
function ee(a) {
  var b = a.x;
  if(a.Zc) {
    return b
  }
  a.x = b.t ? b.t() : b.call(l);
  a.Zc = k;
  return a.x
}
function V(a, b, c, d) {
  this.l = a;
  this.Zc = b;
  this.x = c;
  this.n = d;
  this.A = 0;
  this.j = 31850700
}
r = V.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.Ja = function(a) {
  return Ib(a.X(a))
};
r.K = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return Ub(this)
};
r.J = function(a) {
  return J(ee(a))
};
r.W = function(a) {
  return L(ee(a))
};
r.X = function(a) {
  return M(ee(a))
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new V(b, this.Zc, this.x, this.n)
};
r.P = p("l");
r.S = function() {
  return Zc(N, this.l)
};
function fe(a, b) {
  this.tc = a;
  this.end = b;
  this.A = 0;
  this.j = 2
}
fe.prototype.O = p("end");
fe.prototype.add = function(a) {
  this.tc[this.end] = a;
  return this.end += 1
};
fe.prototype.va = function() {
  var a = new ge(this.tc, 0, this.end);
  this.tc = l;
  return a
};
function ge(a, b, c) {
  this.c = a;
  this.G = b;
  this.end = c;
  this.A = 0;
  this.j = 524306
}
r = ge.prototype;
r.bb = function(a, b) {
  return hc.o(this.c, b, this.c[this.G], this.G + 1)
};
r.cb = function(a, b, c) {
  return hc.o(this.c, b, c, this.G)
};
r.sd = function() {
  this.G === this.end && e(Error("-drop-first of empty chunk"));
  return new ge(this.c, this.G + 1, this.end)
};
r.M = function(a, b) {
  return this.c[this.G + b]
};
r.ia = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.G : a) ? this.c[this.G + b] : c
};
r.O = function() {
  return this.end - this.G
};
var he, ie = l;
function je(a) {
  return new ge(a, 0, a.length)
}
function ke(a, b) {
  return new ge(a, b, a.length)
}
function le(a, b, c) {
  return new ge(a, b, c)
}
ie = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return je.call(this, a);
    case 2:
      return ke.call(this, a, b);
    case 3:
      return le.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ie.b = je;
ie.a = ke;
ie.e = le;
he = ie;
function hd(a, b, c, d) {
  this.va = a;
  this.Na = b;
  this.l = c;
  this.n = d;
  this.j = 31850604;
  this.A = 1536
}
r = hd.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.K = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return Ub(this)
};
r.J = aa();
r.W = function() {
  return B.a(this.va, 0)
};
r.X = function() {
  return 1 < bb(this.va) ? new hd(Qb(this.va), this.Na, this.l, l) : this.Na == l ? N : this.Na
};
r.td = function() {
  return this.Na == l ? l : this.Na
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new hd(this.va, this.Na, b, this.n)
};
r.P = p("l");
r.S = function() {
  return Zc(N, this.l)
};
r.wc = p("va");
r.Tb = function() {
  return this.Na == l ? N : this.Na
};
function me(a, b) {
  return 0 === bb(a) ? b : new hd(a, b, l, l)
}
function ne(a) {
  for(var b = [];;) {
    if(J(a)) {
      b.push(L(a)), a = O(a)
    }else {
      return b
    }
  }
}
function oe(a, b) {
  if(mc(a)) {
    return Dc(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? J(c) : g;
    if(y(g)) {
      c = O(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var qe = function pe(b) {
  return b == l ? l : O(b) == l ? J(L(b)) : S(L(b), pe(O(b)))
}, re, se = l;
function te() {
  return new V(l, n, ba(l), l)
}
function ue(a) {
  return new V(l, n, function() {
    return a
  }, l)
}
function ve(a, b) {
  return new V(l, n, function() {
    var c = J(a);
    return c ? gd(c) ? me(Rb(c), se.a(Sb(c), b)) : S(L(c), se.a(M(c), b)) : b
  }, l)
}
function we(a, b, c) {
  return function f(a, b) {
    return new V(l, n, function() {
      var c = J(a);
      return c ? gd(c) ? me(Rb(c), f(Sb(c), b)) : S(L(c), f(M(c), b)) : y(b) ? f(L(b), O(b)) : l
    }, l)
  }(se.a(a, b), c)
}
function xe(a, b, c) {
  var d = l;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return we.call(this, a, b, d)
}
xe.p = 2;
xe.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = M(a);
  return we(b, c, a)
};
xe.g = we;
se = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return te.call(this);
    case 1:
      return ue.call(this, a);
    case 2:
      return ve.call(this, a, b);
    default:
      return xe.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
se.p = 2;
se.k = xe.k;
se.t = te;
se.b = ue;
se.a = ve;
se.g = xe.g;
re = se;
var ye, ze = l;
function Ae(a, b, c) {
  return S(a, S(b, c))
}
function Be(a, b, c, d) {
  return S(a, S(b, S(c, d)))
}
function Ce(a, b, c, d, f) {
  return S(a, S(b, S(c, S(d, qe(f)))))
}
function De(a, b, c, d, f) {
  var g = l;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return Ce.call(this, a, b, c, d, g)
}
De.p = 4;
De.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = O(a), d = L(a), a = O(a), f = L(a), a = M(a);
  return Ce(b, c, d, f, a)
};
De.g = Ce;
ze = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return J(a);
    case 2:
      return S(a, b);
    case 3:
      return Ae.call(this, a, b, c);
    case 4:
      return Be.call(this, a, b, c, d);
    default:
      return De.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ze.p = 4;
ze.k = De.k;
ze.b = function(a) {
  return J(a)
};
ze.a = function(a, b) {
  return S(a, b)
};
ze.e = Ae;
ze.o = Be;
ze.g = De.g;
ye = ze;
function Ee(a, b, c) {
  var d = J(c);
  if(0 === b) {
    return a.t ? a.t() : a.call(l)
  }
  var c = E(d), f = F(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(l, c)
  }
  var d = E(f), g = F(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = E(g), i = F(g);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(l, c, d, f)
  }
  var g = E(i), j = F(i);
  if(4 === b) {
    return a.o ? a.o(c, d, f, g) : a.o ? a.o(c, d, f, g) : a.call(l, c, d, f, g)
  }
  i = E(j);
  j = F(j);
  if(5 === b) {
    return a.ha ? a.ha(c, d, f, g, i) : a.ha ? a.ha(c, d, f, g, i) : a.call(l, c, d, f, g, i)
  }
  var a = E(j), m = F(j);
  if(6 === b) {
    return a.qa ? a.qa(c, d, f, g, i, a) : a.qa ? a.qa(c, d, f, g, i, a) : a.call(l, c, d, f, g, i, a)
  }
  var j = E(m), q = F(m);
  if(7 === b) {
    return a.ab ? a.ab(c, d, f, g, i, a, j) : a.ab ? a.ab(c, d, f, g, i, a, j) : a.call(l, c, d, f, g, i, a, j)
  }
  var m = E(q), v = F(q);
  if(8 === b) {
    return a.Ic ? a.Ic(c, d, f, g, i, a, j, m) : a.Ic ? a.Ic(c, d, f, g, i, a, j, m) : a.call(l, c, d, f, g, i, a, j, m)
  }
  var q = E(v), w = F(v);
  if(9 === b) {
    return a.Jc ? a.Jc(c, d, f, g, i, a, j, m, q) : a.Jc ? a.Jc(c, d, f, g, i, a, j, m, q) : a.call(l, c, d, f, g, i, a, j, m, q)
  }
  var v = E(w), C = F(w);
  if(10 === b) {
    return a.xc ? a.xc(c, d, f, g, i, a, j, m, q, v) : a.xc ? a.xc(c, d, f, g, i, a, j, m, q, v) : a.call(l, c, d, f, g, i, a, j, m, q, v)
  }
  var w = E(C), D = F(C);
  if(11 === b) {
    return a.yc ? a.yc(c, d, f, g, i, a, j, m, q, v, w) : a.yc ? a.yc(c, d, f, g, i, a, j, m, q, v, w) : a.call(l, c, d, f, g, i, a, j, m, q, v, w)
  }
  var C = E(D), Q = F(D);
  if(12 === b) {
    return a.zc ? a.zc(c, d, f, g, i, a, j, m, q, v, w, C) : a.zc ? a.zc(c, d, f, g, i, a, j, m, q, v, w, C) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C)
  }
  var D = E(Q), K = F(Q);
  if(13 === b) {
    return a.Ac ? a.Ac(c, d, f, g, i, a, j, m, q, v, w, C, D) : a.Ac ? a.Ac(c, d, f, g, i, a, j, m, q, v, w, C, D) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D)
  }
  var Q = E(K), U = F(K);
  if(14 === b) {
    return a.Bc ? a.Bc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q) : a.Bc ? a.Bc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q)
  }
  var K = E(U), X = F(U);
  if(15 === b) {
    return a.Cc ? a.Cc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K) : a.Cc ? a.Cc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K)
  }
  var U = E(X), Aa = F(X);
  if(16 === b) {
    return a.Dc ? a.Dc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U) : a.Dc ? a.Dc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U)
  }
  var X = E(Aa), eb = F(Aa);
  if(17 === b) {
    return a.Ec ? a.Ec(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X) : a.Ec ? a.Ec(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X)
  }
  var Aa = E(eb), qd = F(eb);
  if(18 === b) {
    return a.Fc ? a.Fc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa) : a.Fc ? a.Fc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa)
  }
  eb = E(qd);
  qd = F(qd);
  if(19 === b) {
    return a.Gc ? a.Gc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa, eb) : a.Gc ? a.Gc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa, eb) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa, eb)
  }
  var Cf = E(qd);
  F(qd);
  if(20 === b) {
    return a.Hc ? a.Hc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa, eb, Cf) : a.Hc ? a.Hc(c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa, eb, Cf) : a.call(l, c, d, f, g, i, a, j, m, q, v, w, C, D, Q, K, U, X, Aa, eb, Cf)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var Yc, Fe = l;
function Ge(a, b) {
  var c = a.p;
  if(a.k) {
    var d = oe(b, c + 1);
    return d <= c ? Ee(a, d, b) : a.k(b)
  }
  return a.apply(a, ne(b))
}
function He(a, b, c) {
  b = ye.a(b, c);
  c = a.p;
  if(a.k) {
    var d = oe(b, c + 1);
    return d <= c ? Ee(a, d, b) : a.k(b)
  }
  return a.apply(a, ne(b))
}
function Ie(a, b, c, d) {
  b = ye.e(b, c, d);
  c = a.p;
  return a.k ? (d = oe(b, c + 1), d <= c ? Ee(a, d, b) : a.k(b)) : a.apply(a, ne(b))
}
function Je(a, b, c, d, f) {
  b = ye.o(b, c, d, f);
  c = a.p;
  return a.k ? (d = oe(b, c + 1), d <= c ? Ee(a, d, b) : a.k(b)) : a.apply(a, ne(b))
}
function Ke(a, b, c, d, f, g) {
  b = S(b, S(c, S(d, S(f, qe(g)))));
  c = a.p;
  return a.k ? (d = oe(b, c + 1), d <= c ? Ee(a, d, b) : a.k(b)) : a.apply(a, ne(b))
}
function Le(a, b, c, d, f, g) {
  var i = l;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return Ke.call(this, a, b, c, d, f, i)
}
Le.p = 5;
Le.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = O(a), d = L(a), a = O(a), f = L(a), a = O(a), g = L(a), a = M(a);
  return Ke(b, c, d, f, g, a)
};
Le.g = Ke;
Fe = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Ge.call(this, a, b);
    case 3:
      return He.call(this, a, b, c);
    case 4:
      return Ie.call(this, a, b, c, d);
    case 5:
      return Je.call(this, a, b, c, d, f);
    default:
      return Le.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fe.p = 5;
Fe.k = Le.k;
Fe.a = Ge;
Fe.e = He;
Fe.o = Ie;
Fe.ha = Je;
Fe.g = Le.g;
Yc = Fe;
function Me(a, b) {
  for(;;) {
    if(J(b) == l) {
      return k
    }
    if(y(a.b ? a.b(L(b)) : a.call(l, L(b)))) {
      var c = a, d = O(b), a = c, b = d
    }else {
      return n
    }
  }
}
function Ne(a) {
  return a
}
function Oe(a) {
  function b(b) {
    0 < arguments.length && R(Array.prototype.slice.call(arguments, 0), 0);
    return a
  }
  b.p = 0;
  b.k = function(b) {
    J(b);
    return a
  };
  b.g = function() {
    return a
  };
  return b
}
var Pe, Qe = l;
function Re(a, b) {
  return new V(l, n, function() {
    var c = J(b);
    if(c) {
      if(gd(c)) {
        for(var d = Rb(c), f = Dc(d), g = new fe(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.b ? a.b(B.a(d, i)) : a.call(l, B.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return me(g.va(), Qe.a(a, Sb(c)))
      }
      return S(a.b ? a.b(L(c)) : a.call(l, L(c)), Qe.a(a, M(c)))
    }
    return l
  }, l)
}
function Se(a, b, c) {
  return new V(l, n, function() {
    var d = J(b), f = J(c);
    return(d ? f : d) ? S(a.a ? a.a(L(d), L(f)) : a.call(l, L(d), L(f)), Qe.e(a, M(d), M(f))) : l
  }, l)
}
function Te(a, b, c, d) {
  return new V(l, n, function() {
    var f = J(b), g = J(c), i = J(d);
    return(f ? g ? i : g : f) ? S(a.e ? a.e(L(f), L(g), L(i)) : a.call(l, L(f), L(g), L(i)), Qe.o(a, M(f), M(g), M(i))) : l
  }, l)
}
function Ue(a, b, c, d, f) {
  return Qe.a(function(b) {
    return Yc.a(a, b)
  }, function i(a) {
    return new V(l, n, function() {
      var b = Qe.a(J, a);
      return Me(Ne, b) ? S(Qe.a(L, b), i(Qe.a(M, b))) : l
    }, l)
  }(yc.g(f, d, R([c, b], 0))))
}
function Ve(a, b, c, d, f) {
  var g = l;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return Ue.call(this, a, b, c, d, g)
}
Ve.p = 4;
Ve.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = O(a), d = L(a), a = O(a), f = L(a), a = M(a);
  return Ue(b, c, d, f, a)
};
Ve.g = Ue;
Qe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Re.call(this, a, b);
    case 3:
      return Se.call(this, a, b, c);
    case 4:
      return Te.call(this, a, b, c, d);
    default:
      return Ve.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qe.p = 4;
Qe.k = Ve.k;
Qe.a = Re;
Qe.e = Se;
Qe.o = Te;
Qe.g = Ve.g;
Pe = Qe;
var Xe = function We(b, c) {
  return new V(l, n, function() {
    if(0 < b) {
      var d = J(c);
      return d ? S(L(d), We(b - 1, M(d))) : l
    }
    return l
  }, l)
};
function Ye(a) {
  return new V(l, n, function() {
    var b;
    a: {
      b = 1;
      for(var c = a;;) {
        var c = J(c), d = 0 < b;
        if(y(d ? c : d)) {
          b -= 1, c = M(c)
        }else {
          b = c;
          break a
        }
      }
      b = h
    }
    return b
  }, l)
}
var Ze, $e = l;
function af(a) {
  return new V(l, n, function() {
    return S(a, $e.b(a))
  }, l)
}
function bf(a, b) {
  return Xe(a, $e.b(b))
}
$e = function(a, b) {
  switch(arguments.length) {
    case 1:
      return af.call(this, a);
    case 2:
      return bf.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$e.b = af;
$e.a = bf;
Ze = $e;
var cf, df = l;
function ef(a, b) {
  return new V(l, n, function() {
    var c = J(a), d = J(b);
    return(c ? d : c) ? S(L(c), S(L(d), df.a(M(c), M(d)))) : l
  }, l)
}
function ff(a, b, c) {
  return new V(l, n, function() {
    var d = Pe.a(J, yc.g(c, b, R([a], 0)));
    return Me(Ne, d) ? re.a(Pe.a(L, d), Yc.a(df, Pe.a(M, d))) : l
  }, l)
}
function gf(a, b, c) {
  var d = l;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return ff.call(this, a, b, d)
}
gf.p = 2;
gf.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = M(a);
  return ff(b, c, a)
};
gf.g = ff;
df = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ef.call(this, a, b);
    default:
      return gf.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
df.p = 2;
df.k = gf.k;
df.a = ef;
df.g = gf.g;
cf = df;
function hf(a, b) {
  var c;
  if(a != l) {
    if(c = a) {
      c = (c = a.A & 4) ? c : a.Bf
    }
    c ? (c = vd.e(Nb, Mb(a), b), c = Ob(c)) : c = vd.e(fb, a, b)
  }else {
    c = vd.e(yc, N, b)
  }
  return c
}
function jf(a, b) {
  this.v = a;
  this.c = b
}
function kf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function lf(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new jf(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var nf = function mf(b, c, d, f) {
  var g = new jf(d.v, d.c.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? g.c[i] = f : (d = d.c[i], b = d != l ? mf(b, c - 5, d, f) : lf(l, c - 5, f), g.c[i] = b);
  return g
};
function of(a, b) {
  var c = 0 <= b;
  if(c ? b < a.h : c) {
    if(b >= kf(a)) {
      return a.R
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.c[b >>> d & 31], d = f
      }else {
        return c.c
      }
    }
  }else {
    e(Error([H("No item "), H(b), H(" in vector of length "), H(a.h)].join("")))
  }
}
var qf = function pf(b, c, d, f, g) {
  var i = new jf(d.v, d.c.slice());
  if(0 === c) {
    i.c[f & 31] = g
  }else {
    var j = f >>> c & 31, b = pf(b, c - 5, d.c[j], f, g);
    i.c[j] = b
  }
  return i
};
function rf(a, b, c, d, f, g) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.R = f;
  this.n = g;
  this.A = 4;
  this.j = 167668511
}
r = rf.prototype;
r.ub = function() {
  return new sf(this.h, this.shift, tf.b ? tf.b(this.root) : tf.call(l, this.root), uf.b ? uf.b(this.R) : uf.call(l, this.R))
};
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.U = function(a, b) {
  return a.ia(a, b, l)
};
r.I = function(a, b, c) {
  return a.ia(a, b, c)
};
r.Ia = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.h : d) {
    return kf(a) <= b ? (a = this.R.slice(), a[b & 31] = c, new rf(this.l, this.h, this.shift, this.root, a, l)) : new rf(this.l, this.h, this.shift, qf(a, this.shift, this.root, b, c), this.R, l)
  }
  if(b === this.h) {
    return a.K(a, c)
  }
  e(Error([H("Index "), H(b), H(" out of bounds  [0,"), H(this.h), H("]")].join("")))
};
var vf = l, vf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.U(this, b);
    case 3:
      return this.I(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = rf.prototype;
r.call = vf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  if(32 > this.h - kf(a)) {
    var c = this.R.slice();
    c.push(b);
    return new rf(this.l, this.h + 1, this.shift, this.root, c, l)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new jf(l, Array(32));
    d.c[0] = this.root;
    var f = lf(l, this.shift, new jf(l, this.R));
    d.c[1] = f
  }else {
    d = nf(a, this.shift, this.root, new jf(l, this.R))
  }
  return new rf(this.l, this.h + 1, c, d, [b], l)
};
r.vd = function(a) {
  return a.M(a, 0)
};
r.wd = function(a) {
  return a.M(a, 1)
};
r.toString = function() {
  return Ub(this)
};
r.bb = function(a, b) {
  return cc.a(a, b)
};
r.cb = function(a, b, c) {
  return cc.e(a, b, c)
};
r.J = function(a) {
  return 0 === this.h ? l : 32 > this.h ? R.b(this.R) : W.e ? W.e(a, 0, 0) : W.call(l, a, 0, 0)
};
r.O = p("h");
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new rf(b, this.h, this.shift, this.root, this.R, this.n)
};
r.P = p("l");
r.M = function(a, b) {
  return of(a, b)[b & 31]
};
r.ia = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.M(a, b) : c
};
r.S = function() {
  return Zc(wf, this.l)
};
var xf = new jf(l, Array(32)), wf = new rf(l, 0, 5, xf, [], 0);
function yf(a) {
  var b = a.length;
  if(32 > b) {
    return new rf(l, b, 5, xf, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = Mb(new rf(l, 32, 5, xf, c, l));;) {
    if(d < b) {
      c = d + 1, f = Nb(f, a[d]), d = c
    }else {
      return Ob(f)
    }
  }
}
function zf(a) {
  return Ob(vd.e(Nb, Mb(wf), a))
}
function Af(a) {
  var b = l;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return zf(b)
}
Af.p = 0;
Af.k = function(a) {
  a = J(a);
  return zf(a)
};
Af.g = function(a) {
  return zf(a)
};
function id(a, b, c, d, f, g) {
  this.ga = a;
  this.da = b;
  this.q = c;
  this.G = d;
  this.l = f;
  this.n = g;
  this.j = 31719660;
  this.A = 1536
}
r = id.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.Ja = function(a) {
  return this.G + 1 < this.da.length ? (a = W.o ? W.o(this.ga, this.da, this.q, this.G + 1) : W.call(l, this.ga, this.da, this.q, this.G + 1), a == l ? l : a) : a.td(a)
};
r.K = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return Ub(this)
};
r.J = aa();
r.W = function() {
  return this.da[this.G]
};
r.X = function(a) {
  return this.G + 1 < this.da.length ? (a = W.o ? W.o(this.ga, this.da, this.q, this.G + 1) : W.call(l, this.ga, this.da, this.q, this.G + 1), a == l ? N : a) : a.Tb(a)
};
r.td = function() {
  var a = this.da.length, a = this.q + a < bb(this.ga) ? W.e ? W.e(this.ga, this.q + a, 0) : W.call(l, this.ga, this.q + a, 0) : l;
  return a == l ? l : a
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return W.ha ? W.ha(this.ga, this.da, this.q, this.G, b) : W.call(l, this.ga, this.da, this.q, this.G, b)
};
r.S = function() {
  return Zc(wf, this.l)
};
r.wc = function() {
  return he.a(this.da, this.G)
};
r.Tb = function() {
  var a = this.da.length, a = this.q + a < bb(this.ga) ? W.e ? W.e(this.ga, this.q + a, 0) : W.call(l, this.ga, this.q + a, 0) : l;
  return a == l ? N : a
};
var W, Bf = l;
function Df(a, b, c) {
  return new id(a, of(a, b), b, c, l, l)
}
function Ef(a, b, c, d) {
  return new id(a, b, c, d, l, l)
}
function Ff(a, b, c, d, f) {
  return new id(a, b, c, d, f, l)
}
Bf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Df.call(this, a, b, c);
    case 4:
      return Ef.call(this, a, b, c, d);
    case 5:
      return Ff.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bf.e = Df;
Bf.o = Ef;
Bf.ha = Ff;
W = Bf;
function tf(a) {
  return new jf({}, a.c.slice())
}
function uf(a) {
  var b = Array(32);
  jd(a, 0, b, 0, a.length);
  return b
}
var Hf = function Gf(b, c, d, f) {
  var d = b.root.v === d.v ? d : new jf(b.root.v, d.c.slice()), g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[g], b = i != l ? Gf(b, c - 5, i, f) : lf(b.root.v, c - 5, f)
  }
  d.c[g] = b;
  return d
};
function sf(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.R = d;
  this.j = 275;
  this.A = 88
}
var If = l, If = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.U(this, b);
    case 3:
      return this.I(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = sf.prototype;
r.call = If;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.U = function(a, b) {
  return a.ia(a, b, l)
};
r.I = function(a, b, c) {
  return a.ia(a, b, c)
};
r.M = function(a, b) {
  if(this.root.v) {
    return of(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.ia = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.M(a, b) : c
};
r.O = function() {
  if(this.root.v) {
    return this.h
  }
  e(Error("count after persistent!"))
};
r.eb = function(a, b, c) {
  var d;
  a: {
    if(a.root.v) {
      var f = 0 <= b;
      if(f ? b < a.h : f) {
        kf(a) <= b ? a.R[b & 31] = c : (d = function i(d, f) {
          var q = a.root.v === f.v ? f : new jf(a.root.v, f.c.slice());
          if(0 === d) {
            q.c[b & 31] = c
          }else {
            var v = b >>> d & 31, w = i(d - 5, q.c[v]);
            q.c[v] = w
          }
          return q
        }.call(l, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.h) {
        d = a.vb(a, c);
        break a
      }
      e(Error([H("Index "), H(b), H(" out of bounds for TransientVector of length"), H(a.h)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.vb = function(a, b) {
  if(this.root.v) {
    if(32 > this.h - kf(a)) {
      this.R[this.h & 31] = b
    }else {
      var c = new jf(this.root.v, this.R), d = Array(32);
      d[0] = b;
      this.R = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = lf(this.root.v, this.shift, c);
        this.root = new jf(this.root.v, d);
        this.shift = f
      }else {
        this.root = Hf(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Ub = function(a) {
  if(this.root.v) {
    this.root.v = l;
    var a = this.h - kf(a), b = Array(a);
    jd(this.R, 0, b, 0, a);
    return new rf(l, this.h, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
function Jf() {
  this.A = 0;
  this.j = 2097152
}
Jf.prototype.H = ba(n);
var Kf = new Jf;
function Lf(a, b) {
  var c;
  c = b == l ? 0 : b ? ((c = b.j & 1024) ? c : b.Cf) || (b.j ? 0 : z(rb, b)) : z(rb, b);
  c = c ? Dc(a) === Dc(b) ? Me(Ne, Pe.a(function(a) {
    return P.a(Mc.e(b, L(a), Kf), L(O(a)))
  }, a)) : l : l;
  return y(c) ? k : n
}
function Mf(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return l
    }
  }
}
function Nf(a, b) {
  var c = I.b(a), d = I.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Of(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.Ya, a = $c(a), i = 0, j = Mb(Pf);;) {
    if(i < f) {
      var m = d[i], i = i + 1, j = Pb(j, m, g[m])
    }else {
      return d = Zc, b = Pb(j, b, c), b = Ob(b), d(b, a)
    }
  }
}
function Qf(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var g = b[f];
      c[g] = a[g];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Rf(a, b, c, d, f) {
  this.l = a;
  this.keys = b;
  this.Ya = c;
  this.lc = d;
  this.n = f;
  this.A = 4;
  this.j = 16123663
}
r = Rf.prototype;
r.ub = function(a) {
  a = hf(Tc.t ? Tc.t() : Tc.call(l), a);
  return Mb(a)
};
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Vd(a)
};
r.U = function(a, b) {
  return a.I(a, b, l)
};
r.I = function(a, b, c) {
  return((a = u(b)) ? Mf(b, this.keys) != l : a) ? this.Ya[b] : c
};
r.Ia = function(a, b, c) {
  if(u(b)) {
    var d = this.lc > Sf;
    if(d ? d : this.keys.length >= Sf) {
      return Of(a, b, c)
    }
    if(Mf(b, this.keys) != l) {
      return a = Qf(this.Ya, this.keys), a[b] = c, new Rf(this.l, this.keys, a, this.lc + 1, l)
    }
    a = Qf(this.Ya, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Rf(this.l, d, a, this.lc + 1, l)
  }
  return Of(a, b, c)
};
var Tf = l, Tf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.U(this, b);
    case 3:
      return this.I(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Rf.prototype;
r.call = Tf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return fd(b) ? a.Ia(a, B.a(b, 0), B.a(b, 1)) : vd.e(fb, a, b)
};
r.toString = function() {
  return Ub(this)
};
r.J = function() {
  var a = this;
  return 0 < a.keys.length ? Pe.a(function(b) {
    return Af.g(R([b, a.Ya[b]], 0))
  }, a.keys.sort(Nf)) : l
};
r.O = function() {
  return this.keys.length
};
r.H = function(a, b) {
  return Lf(a, b)
};
r.Q = function(a, b) {
  return new Rf(b, this.keys, this.Ya, this.lc, this.n)
};
r.P = p("l");
r.S = function() {
  return Zc(Uf, this.l)
};
var Uf = new Rf(l, [], {}, 0, 0), Sf = 8;
function Vf(a, b) {
  var c = a.c, d = u(b);
  if(d ? d : "number" === typeof b) {
    a: {
      for(var d = c.length, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        if(b === c[f]) {
          c = f;
          break a
        }
        f += 2
      }
      c = h
    }
  }else {
    if(b instanceof Vb) {
      a: {
        for(var d = c.length, f = b.Xa, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof Vb;
          if(j ? f === i.Xa : j) {
            c = g;
            break a
          }
          g += 2
        }
        c = h
      }
    }else {
      if(b == l) {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(c[f] == l) {
              c = f;
              break a
            }
            f += 2
          }
          c = h
        }
      }else {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(P.a(b, c[f])) {
              c = f;
              break a
            }
            f += 2
          }
          c = h
        }
      }
    }
  }
  return c
}
function Wf(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.c = c;
  this.n = d;
  this.A = 4;
  this.j = 16123663
}
r = Wf.prototype;
r.ub = function() {
  return new Xf({}, this.c.length, this.c.slice())
};
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Vd(a)
};
r.U = function(a, b) {
  return a.I(a, b, l)
};
r.I = function(a, b, c) {
  a = Vf(a, b);
  return-1 === a ? c : this.c[a + 1]
};
r.Ia = function(a, b, c) {
  var d = Vf(a, b);
  if(-1 === d) {
    if(this.h < Yf) {
      for(var d = a.c, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new Wf(this.l, this.h + 1, f, l)
    }
    return Ab(qb(hf(Pf, a), b, c), this.l)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new Wf(this.l, this.h, b, l)
};
var Zf = l, Zf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.U(this, b);
    case 3:
      return this.I(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Wf.prototype;
r.call = Zf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return fd(b) ? a.Ia(a, B.a(b, 0), B.a(b, 1)) : vd.e(fb, a, b)
};
r.toString = function() {
  return Ub(this)
};
r.J = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.c.length;
    b = function f(b) {
      return new V(l, n, function() {
        return b < c ? S(yf([a.c[b], a.c[b + 1]]), f(b + 2)) : l
      }, l)
    }(0)
  }else {
    b = l
  }
  return b
};
r.O = p("h");
r.H = function(a, b) {
  return Lf(a, b)
};
r.Q = function(a, b) {
  return new Wf(b, this.h, this.c, this.n)
};
r.P = p("l");
r.S = function() {
  return Ab($f, this.l)
};
var $f = new Wf(l, 0, [], l), Yf = 8;
function Xa(a) {
  return new Wf(l, a.length / 2, a, l)
}
function Xf(a, b, c) {
  this.gb = a;
  this.Va = b;
  this.c = c;
  this.A = 56;
  this.j = 258
}
r = Xf.prototype;
r.eb = function(a, b, c) {
  if(y(this.gb)) {
    var d = Vf(a, b);
    if(-1 === d) {
      if(this.Va + 2 <= 2 * Yf) {
        return this.Va += 2, this.c.push(b), this.c.push(c), a
      }
      a = ag.a ? ag.a(this.Va, this.c) : ag.call(l, this.Va, this.c);
      return Pb(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.vb = function(a, b) {
  if(y(this.gb)) {
    var c;
    c = b ? ((c = b.j & 2048) ? c : b.Ee) || (b.j ? 0 : z(sb, b)) : z(sb, b);
    if(c) {
      return a.eb(a, Wd.b ? Wd.b(b) : Wd.call(l, b), Xd.b ? Xd.b(b) : Xd.call(l, b))
    }
    c = J(b);
    for(var d = a;;) {
      var f = L(c);
      if(y(f)) {
        c = O(c), d = d.eb(d, Wd.b ? Wd.b(f) : Wd.call(l, f), Xd.b ? Xd.b(f) : Xd.call(l, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Ub = function() {
  if(y(this.gb)) {
    return this.gb = n, new Wf(l, Ad(this.Va), this.c, l)
  }
  e(Error("persistent! called twice"))
};
r.U = function(a, b) {
  return a.I(a, b, l)
};
r.I = function(a, b, c) {
  if(y(this.gb)) {
    return a = Vf(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.O = function() {
  if(y(this.gb)) {
    return Ad(this.Va)
  }
  e(Error("count after persistent!"))
};
function ag(a, b) {
  for(var c = Mb(Uf), d = 0;;) {
    if(d < a) {
      c = Pb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function bg() {
  this.ua = n
}
function cg(a, b) {
  return u(a) ? a === b : P.a(a, b)
}
var dg, eg = l;
function fg(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function gg(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
eg = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return fg.call(this, a, b, c);
    case 5:
      return gg.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
eg.e = fg;
eg.ha = gg;
dg = eg;
var hg, ig = l;
function jg(a, b, c, d) {
  a = a.hb(b);
  a.c[c] = d;
  return a
}
function kg(a, b, c, d, f, g) {
  a = a.hb(b);
  a.c[c] = d;
  a.c[f] = g;
  return a
}
ig = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return jg.call(this, a, b, c, d);
    case 6:
      return kg.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ig.o = jg;
ig.qa = kg;
hg = ig;
function lg(a, b, c) {
  this.v = a;
  this.F = b;
  this.c = c
}
r = lg.prototype;
r.la = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = Fd(this.F & i - 1);
  if(0 === (this.F & i)) {
    var m = Fd(this.F);
    if(2 * m < this.c.length) {
      a = this.hb(a);
      b = a.c;
      g.ua = k;
      a: {
        c = 2 * (m - j);
        g = 2 * j + (c - 1);
        for(m = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[m] = b[g];
          m -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.F |= i;
      return a
    }
    if(16 <= m) {
      j = Array(32);
      j[c >>> b & 31] = mg.la(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.F >>> d & 1) && (j[d] = this.c[f] != l ? mg.la(a, b + 5, I.b(this.c[f]), this.c[f], this.c[f + 1], g) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new ng(a, m + 1, j)
    }
    b = Array(2 * (m + 4));
    jd(this.c, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    jd(this.c, 2 * j, b, 2 * (j + 1), 2 * (m - j));
    g.ua = k;
    a = this.hb(a);
    a.c = b;
    a.F |= i;
    return a
  }
  m = this.c[2 * j];
  i = this.c[2 * j + 1];
  if(m == l) {
    return m = i.la(a, b + 5, c, d, f, g), m === i ? this : hg.o(this, a, 2 * j + 1, m)
  }
  if(cg(d, m)) {
    return f === i ? this : hg.o(this, a, 2 * j + 1, f)
  }
  g.ua = k;
  return hg.qa(this, a, 2 * j, l, 2 * j + 1, og.ab ? og.ab(a, b + 5, m, i, c, d, f) : og.call(l, a, b + 5, m, i, c, d, f))
};
r.Db = function() {
  return pg.b ? pg.b(this.c) : pg.call(l, this.c)
};
r.hb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = Fd(this.F), c = Array(0 > b ? 4 : 2 * (b + 1));
  jd(this.c, 0, c, 0, 2 * b);
  return new lg(a, this.F, c)
};
r.ka = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = Fd(this.F & g - 1);
  if(0 === (this.F & g)) {
    var j = Fd(this.F);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = mg.ka(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.F >>> c & 1) && (i[c] = this.c[d] != l ? mg.ka(a + 5, I.b(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new ng(l, j + 1, i)
    }
    a = Array(2 * (j + 1));
    jd(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    jd(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ua = k;
    return new lg(l, this.F | g, a)
  }
  j = this.c[2 * i];
  g = this.c[2 * i + 1];
  if(j == l) {
    return j = g.ka(a + 5, b, c, d, f), j === g ? this : new lg(l, this.F, dg.e(this.c, 2 * i + 1, j))
  }
  if(cg(c, j)) {
    return d === g ? this : new lg(l, this.F, dg.e(this.c, 2 * i + 1, d))
  }
  f.ua = k;
  return new lg(l, this.F, dg.ha(this.c, 2 * i, l, 2 * i + 1, og.qa ? og.qa(a + 5, j, g, b, c, d) : og.call(l, a + 5, j, g, b, c, d)))
};
r.Ua = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.F & f)) {
    return d
  }
  var g = Fd(this.F & f - 1), f = this.c[2 * g], g = this.c[2 * g + 1];
  return f == l ? g.Ua(a + 5, b, c, d) : cg(c, f) ? g : d
};
var mg = new lg(l, 0, []);
function ng(a, b, c) {
  this.v = a;
  this.h = b;
  this.c = c
}
r = ng.prototype;
r.la = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == l) {
    return a = hg.o(this, a, i, mg.la(a, b + 5, c, d, f, g)), a.h += 1, a
  }
  b = j.la(a, b + 5, c, d, f, g);
  return b === j ? this : hg.o(this, a, i, b)
};
r.Db = function() {
  return qg.b ? qg.b(this.c) : qg.call(l, this.c)
};
r.hb = function(a) {
  return a === this.v ? this : new ng(a, this.h, this.c.slice())
};
r.ka = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.c[g];
  if(i == l) {
    return new ng(l, this.h + 1, dg.e(this.c, g, mg.ka(a + 5, b, c, d, f)))
  }
  a = i.ka(a + 5, b, c, d, f);
  return a === i ? this : new ng(l, this.h, dg.e(this.c, g, a))
};
r.Ua = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != l ? f.Ua(a + 5, b, c, d) : d
};
function rg(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(cg(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function sg(a, b, c, d) {
  this.v = a;
  this.Ka = b;
  this.h = c;
  this.c = d
}
r = sg.prototype;
r.la = function(a, b, c, d, f, g) {
  if(c === this.Ka) {
    b = rg(this.c, this.h, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.h) {
        return a = hg.qa(this, a, 2 * this.h, d, 2 * this.h + 1, f), g.ua = k, a.h += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      jd(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ua = k;
      g = this.h + 1;
      a === this.v ? (this.c = b, this.h = g, a = this) : a = new sg(this.v, this.Ka, g, b);
      return a
    }
    return this.c[b + 1] === f ? this : hg.o(this, a, b + 1, f)
  }
  return(new lg(a, 1 << (this.Ka >>> b & 31), [l, this, l, l])).la(a, b, c, d, f, g)
};
r.Db = function() {
  return pg.b ? pg.b(this.c) : pg.call(l, this.c)
};
r.hb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  jd(this.c, 0, b, 0, 2 * this.h);
  return new sg(a, this.Ka, this.h, b)
};
r.ka = function(a, b, c, d, f) {
  return b === this.Ka ? (a = rg(this.c, this.h, c), -1 === a ? (a = this.c.length, b = Array(a + 2), jd(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ua = k, new sg(l, this.Ka, this.h + 1, b)) : P.a(this.c[a], d) ? this : new sg(l, this.Ka, this.h, dg.e(this.c, a + 1, d))) : (new lg(l, 1 << (this.Ka >>> a & 31), [l, this])).ka(a, b, c, d, f)
};
r.Ua = function(a, b, c, d) {
  a = rg(this.c, this.h, c);
  return 0 > a ? d : cg(c, this.c[a]) ? this.c[a + 1] : d
};
var og, tg = l;
function ug(a, b, c, d, f, g) {
  var i = I.b(b);
  if(i === d) {
    return new sg(l, i, 2, [b, c, f, g])
  }
  var j = new bg;
  return mg.ka(a, i, b, c, j).ka(a, d, f, g, j)
}
function vg(a, b, c, d, f, g, i) {
  var j = I.b(c);
  if(j === f) {
    return new sg(l, j, 2, [c, d, g, i])
  }
  var m = new bg;
  return mg.la(a, b, j, c, d, m).la(a, b, f, g, i, m)
}
tg = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return ug.call(this, a, b, c, d, f, g);
    case 7:
      return vg.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
tg.qa = ug;
tg.ab = vg;
og = tg;
function wg(a, b, c, d, f) {
  this.l = a;
  this.ma = b;
  this.q = c;
  this.oa = d;
  this.n = f;
  this.A = 0;
  this.j = 31850572
}
r = wg.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.K = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return Ub(this)
};
r.J = aa();
r.W = function() {
  return this.oa == l ? yf([this.ma[this.q], this.ma[this.q + 1]]) : L(this.oa)
};
r.X = function() {
  return this.oa == l ? pg.e ? pg.e(this.ma, this.q + 2, l) : pg.call(l, this.ma, this.q + 2, l) : pg.e ? pg.e(this.ma, this.q, O(this.oa)) : pg.call(l, this.ma, this.q, O(this.oa))
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new wg(b, this.ma, this.q, this.oa, this.n)
};
r.P = p("l");
r.S = function() {
  return Zc(N, this.l)
};
var pg, xg = l;
function yg(a) {
  return xg.e(a, 0, l)
}
function zg(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new wg(l, a, b, l, l)
        }
        var d = a[b + 1];
        if(y(d) && (d = d.Db(), y(d))) {
          return new wg(l, a, b + 2, d, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new wg(l, a, b, c, l)
  }
}
xg = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return yg.call(this, a);
    case 3:
      return zg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xg.b = yg;
xg.e = zg;
pg = xg;
function Ag(a, b, c, d, f) {
  this.l = a;
  this.ma = b;
  this.q = c;
  this.oa = d;
  this.n = f;
  this.A = 0;
  this.j = 31850572
}
r = Ag.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.K = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return Ub(this)
};
r.J = aa();
r.W = function() {
  return L(this.oa)
};
r.X = function() {
  return qg.o ? qg.o(l, this.ma, this.q, O(this.oa)) : qg.call(l, l, this.ma, this.q, O(this.oa))
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new Ag(b, this.ma, this.q, this.oa, this.n)
};
r.P = p("l");
r.S = function() {
  return Zc(N, this.l)
};
var qg, Bg = l;
function Cg(a) {
  return Bg.o(l, a, 0, l)
}
function Dg(a, b, c, d) {
  if(d == l) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(y(f) && (f = f.Db(), y(f))) {
          return new Ag(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new Ag(a, b, c, d, l)
  }
}
Bg = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Cg.call(this, a);
    case 4:
      return Dg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bg.b = Cg;
Bg.o = Dg;
qg = Bg;
function Eg(a, b, c, d, f, g) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.Y = d;
  this.ca = f;
  this.n = g;
  this.A = 4;
  this.j = 16123663
}
r = Eg.prototype;
r.ub = function() {
  return new Fg({}, this.root, this.h, this.Y, this.ca)
};
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Vd(a)
};
r.U = function(a, b) {
  return a.I(a, b, l)
};
r.I = function(a, b, c) {
  return b == l ? this.Y ? this.ca : c : this.root == l ? c : this.root.Ua(0, I.b(b), b, c)
};
r.Ia = function(a, b, c) {
  if(b == l) {
    var d = this.Y;
    return(d ? c === this.ca : d) ? a : new Eg(this.l, this.Y ? this.h : this.h + 1, this.root, k, c, l)
  }
  d = new bg;
  c = (this.root == l ? mg : this.root).ka(0, I.b(b), b, c, d);
  return c === this.root ? a : new Eg(this.l, d.ua ? this.h + 1 : this.h, c, this.Y, this.ca, l)
};
var Gg = l, Gg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.U(this, b);
    case 3:
      return this.I(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Eg.prototype;
r.call = Gg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return fd(b) ? a.Ia(a, B.a(b, 0), B.a(b, 1)) : vd.e(fb, a, b)
};
r.toString = function() {
  return Ub(this)
};
r.J = function() {
  if(0 < this.h) {
    var a = this.root != l ? this.root.Db() : l;
    return this.Y ? S(yf([l, this.ca]), a) : a
  }
  return l
};
r.O = p("h");
r.H = function(a, b) {
  return Lf(a, b)
};
r.Q = function(a, b) {
  return new Eg(b, this.h, this.root, this.Y, this.ca, this.n)
};
r.P = p("l");
r.S = function() {
  return Ab(Pf, this.l)
};
var Pf = new Eg(l, 0, l, n, l, 0);
function Fg(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.Y = d;
  this.ca = f;
  this.A = 56;
  this.j = 258
}
r = Fg.prototype;
r.eb = function(a, b, c) {
  return Hg(a, b, c)
};
r.vb = function(a, b) {
  var c;
  a: {
    if(a.v) {
      c = b ? ((c = b.j & 2048) ? c : b.Ee) || (b.j ? 0 : z(sb, b)) : z(sb, b);
      if(c) {
        c = Hg(a, Wd.b ? Wd.b(b) : Wd.call(l, b), Xd.b ? Xd.b(b) : Xd.call(l, b));
        break a
      }
      c = J(b);
      for(var d = a;;) {
        var f = L(c);
        if(y(f)) {
          c = O(c), d = Hg(d, Wd.b ? Wd.b(f) : Wd.call(l, f), Xd.b ? Xd.b(f) : Xd.call(l, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = h
  }
  return c
};
r.Ub = function(a) {
  var b;
  a.v ? (a.v = l, b = new Eg(l, a.count, a.root, a.Y, a.ca, l)) : e(Error("persistent! called twice"));
  return b
};
r.U = function(a, b) {
  return b == l ? this.Y ? this.ca : l : this.root == l ? l : this.root.Ua(0, I.b(b), b)
};
r.I = function(a, b, c) {
  return b == l ? this.Y ? this.ca : c : this.root == l ? c : this.root.Ua(0, I.b(b), b, c)
};
r.O = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Hg(a, b, c) {
  if(a.v) {
    if(b == l) {
      a.ca !== c && (a.ca = c), a.Y || (a.count += 1, a.Y = k)
    }else {
      var d = new bg, b = (a.root == l ? mg : a.root).la(a.v, 0, I.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ua && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var Tc;
function Ig(a) {
  for(var b = J(a), c = Mb(Pf);;) {
    if(b) {
      var a = O(O(b)), d = L(b), b = L(O(b)), c = Pb(c, d, b), b = a
    }else {
      return Ob(c)
    }
  }
}
function Jg(a) {
  var b = l;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Ig.call(this, b)
}
Jg.p = 0;
Jg.k = function(a) {
  a = J(a);
  return Ig(a)
};
Jg.g = Ig;
Tc = Jg;
function Kg(a) {
  return new Wf(l, Ad(Dc(a)), Yc.a(Za, a), l)
}
function Lg(a) {
  var b = l;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Kg.call(this, b)
}
Lg.p = 0;
Lg.k = function(a) {
  a = J(a);
  return Kg(a)
};
Lg.g = Kg;
function Wd(a) {
  return tb(a)
}
function Xd(a) {
  return ub(a)
}
function Mg(a) {
  var b;
  a: {
    b = a;
    for(var c = Ne;;) {
      if(J(b)) {
        var d = c.b ? c.b(L(b)) : c.call(l, L(b));
        if(y(d)) {
          b = d;
          break a
        }
        b = O(b)
      }else {
        b = l;
        break a
      }
    }
    b = h
  }
  return y(b) ? vd.a(function(a, b) {
    return yc.a(y(a) ? a : Uf, b)
  }, a) : l
}
function Ng(a) {
  var b = l;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Mg.call(this, b)
}
Ng.p = 0;
Ng.k = function(a) {
  a = J(a);
  return Mg(a)
};
Ng.g = Mg;
function Og(a) {
  if(a && y(y(l) ? l : a.xd)) {
    return a.name
  }
  if(Ya(a)) {
    return a
  }
  if(ld(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? Pd.a(a, 2) : Pd.a(a, b + 1)
  }
  e(Error([H("Doesn't support name: "), H(a)].join("")))
}
function Pg(a) {
  if(a && y(y(l) ? l : a.xd)) {
    return a.nb
  }
  if(ld(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? Pd.e(a, 2, b) : l
  }
  e(Error([H("Doesn't support namespace: "), H(a)].join("")))
}
function Qg(a, b, c, d, f) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = f;
  this.A = 0;
  this.j = 32375006
}
r = Qg.prototype;
r.L = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = oc(a)
};
r.Ja = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Qg(this.l, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Qg(this.l, this.start + this.step, this.end, this.step, l) : l
};
r.K = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return Ub(this)
};
r.bb = function(a, b) {
  return cc.a(a, b)
};
r.cb = function(a, b, c) {
  return cc.e(a, b, c)
};
r.J = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
r.O = function(a) {
  a = a.J(a);
  return!y(a) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.W = p("start");
r.X = function(a) {
  return a.J(a) != l ? new Qg(this.l, this.start + this.step, this.end, this.step, l) : N
};
r.H = function(a, b) {
  return qc(a, b)
};
r.Q = function(a, b) {
  return new Qg(b, this.start, this.end, this.step, this.n)
};
r.P = p("l");
r.M = function(a, b) {
  if(b < a.O(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
r.ia = function(a, b, c) {
  c = b < a.O(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
r.S = function() {
  return Zc(N, this.l)
};
var Rg, Sg = l;
function Tg() {
  return Sg.e(0, Number.MAX_VALUE, 1)
}
function Ug(a) {
  return Sg.e(0, a, 1)
}
function Vg(a, b) {
  return Sg.e(a, b, 1)
}
function Wg(a, b, c) {
  return new Qg(l, a, b, c, l)
}
Sg = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Tg.call(this);
    case 1:
      return Ug.call(this, a);
    case 2:
      return Vg.call(this, a, b);
    case 3:
      return Wg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sg.t = Tg;
Sg.b = Ug;
Sg.a = Vg;
Sg.e = Wg;
Rg = Sg;
var Xg, Yg = l;
function Zg(a) {
  for(;;) {
    if(J(a)) {
      a = O(a)
    }else {
      return l
    }
  }
}
function $g(a, b) {
  for(;;) {
    var c = J(b);
    if(y(c ? 0 < a : c)) {
      var c = a - 1, d = O(b), a = c, b = d
    }else {
      return l
    }
  }
}
Yg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Zg.call(this, a);
    case 2:
      return $g.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yg.b = Zg;
Yg.a = $g;
Xg = Yg;
var ah, bh = l;
function ch(a) {
  Xg.b(a);
  return a
}
function dh(a, b) {
  Xg.a(a, b);
  return b
}
bh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ch.call(this, a);
    case 2:
      return dh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bh.b = ch;
bh.a = dh;
ah = bh;
function eh(a, b, c, d, f, g, i) {
  G(a, c);
  J(i) && (b.e ? b.e(L(i), a, g) : b.call(l, L(i), a, g));
  for(var c = J(O(i)), i = l, j = 0, m = 0;;) {
    if(m < j) {
      var q = i.M(i, m);
      G(a, d);
      b.e ? b.e(q, a, g) : b.call(l, q, a, g);
      m += 1
    }else {
      if(c = J(c)) {
        i = c, gd(i) ? (c = Rb(i), m = Sb(i), i = c, j = Dc(c), c = m) : (c = L(i), G(a, d), b.e ? b.e(c, a, g) : b.call(l, c, a, g), c = O(i), i = l, j = 0), m = 0
      }else {
        break
      }
    }
  }
  return G(a, f)
}
function fh(a, b) {
  for(var c = J(b), d = l, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.M(d, g);
      G(a, i);
      g += 1
    }else {
      if(c = J(c)) {
        d = c, gd(d) ? (c = Rb(d), f = Sb(d), d = c, i = Dc(c), c = f, f = i) : (i = L(d), G(a, i), c = O(d), d = l, f = 0), g = 0
      }else {
        return l
      }
    }
  }
}
function gh(a, b) {
  var c = l;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return fh.call(this, a, c)
}
gh.p = 1;
gh.k = function(a) {
  var b = L(a), a = M(a);
  return fh(b, a)
};
gh.g = fh;
var hh = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, jh = function ih(b, c, d) {
  if(b == l) {
    return G(c, "nil")
  }
  if(h === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = Mc.a(d, "\ufdd0:meta");
  y(f) && (f = b ? ((f = b.j & 131072) ? f : b.Fe) ? k : b.j ? n : z(xb, b) : z(xb, b), f = y(f) ? $c(b) : f);
  y(f) && (G(c, "^"), ih($c(b), c, d), G(c, " "));
  if(b == l) {
    return G(c, "nil")
  }
  if(b.Ad) {
    return b.Ie(c)
  }
  if(f = b) {
    f = (f = b.j & 2147483648) ? f : b.V
  }
  return f ? b.N(b, c, d) : ((f = (b == l ? l : b.constructor) === Boolean) ? f : "number" === typeof b) ? G(c, "" + H(b)) : b instanceof Array ? eh(c, ih, "#<Array [", ", ", "]>", d, b) : u(b) ? ld(b) ? (G(c, ":"), d = Pg(b), y(d) && gh.g(c, R(["" + H(d), "/"], 0)), G(c, Og(b))) : b instanceof Vb ? (d = Pg(b), y(d) && gh.g(c, R(["" + H(d), "/"], 0)), G(c, Og(b))) : y((new T("\ufdd0:readably")).call(l, d)) ? G(c, [H('"'), H(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return hh[b]
  })), H('"')].join("")) : G(c, b) : Wc(b) ? gh.g(c, R(["#<", "" + H(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + H(b);;) {
      if(Dc(d) < c) {
        d = [H("0"), H(d)].join("")
      }else {
        return d
      }
    }
  }, gh.g(c, R(['#inst "', "" + H(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : y(b instanceof RegExp) ? gh.g(c, R(['#"', b.source, '"'], 0)) : gh.g(c, R(["#<", "" + H(b), ">"], 0))
};
function kh(a) {
  var b = Wa(), c = a == l;
  c || (c = J(a), c = y(c) ? n : k);
  if(c) {
    b = ""
  }else {
    var c = H, d = new Qa, f = new Tb(d);
    a: {
      jh(L(a), f, b);
      for(var a = J(O(a)), g = l, i = 0, j = 0;;) {
        if(j < i) {
          var m = g.M(g, j);
          G(f, " ");
          jh(m, f, b);
          j += 1
        }else {
          if(a = J(a)) {
            g = a, gd(g) ? (a = Rb(g), i = Sb(g), g = a, m = Dc(a), a = i, i = m) : (m = L(g), G(f, " "), jh(m, f, b), a = O(g), g = l, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    Kb(f);
    b = "" + c(d)
  }
  return b
}
function lh(a) {
  var b = l;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return kh(b)
}
lh.p = 0;
lh.k = function(a) {
  a = J(a);
  return kh(a)
};
lh.g = function(a) {
  return kh(a)
};
Yb.prototype.V = k;
Yb.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
hd.prototype.V = k;
hd.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
Wf.prototype.V = k;
Wf.prototype.N = function(a, b, c) {
  return eh(b, function(a) {
    return eh(b, jh, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
V.prototype.V = k;
V.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
wg.prototype.V = k;
wg.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
id.prototype.V = k;
id.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
Eg.prototype.V = k;
Eg.prototype.N = function(a, b, c) {
  return eh(b, function(a) {
    return eh(b, jh, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
rf.prototype.V = k;
rf.prototype.N = function(a, b, c) {
  return eh(b, jh, "[", " ", "]", c, a)
};
Yd.prototype.V = k;
Yd.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
Zd.prototype.V = k;
Zd.prototype.N = function(a, b) {
  return G(b, "()")
};
be.prototype.V = k;
be.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
Qg.prototype.V = k;
Qg.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
Ag.prototype.V = k;
Ag.prototype.N = function(a, b, c) {
  return eh(b, jh, "(", " ", ")", c, a)
};
Rf.prototype.V = k;
Rf.prototype.N = function(a, b, c) {
  return eh(b, function(a) {
    return eh(b, jh, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
rf.prototype.ze = k;
rf.prototype.Ae = function(a, b) {
  return nd.a(a, b)
};
function mh(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.nf = c;
  this.of = d;
  this.j = 2153938944;
  this.A = 2
}
r = mh.prototype;
r.L = function(a) {
  return ia(a)
};
r.yd = function(a, b, c) {
  for(var d = J(this.of), f = l, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.M(f, i), m = Ic.e(j, 0, l), j = Ic.e(j, 1, l);
      j.o ? j.o(m, a, b, c) : j.call(l, m, a, b, c);
      i += 1
    }else {
      if(d = J(d)) {
        gd(d) ? (f = Rb(d), d = Sb(d), m = f, g = Dc(f), f = m) : (f = L(d), m = Ic.e(f, 0, l), j = Ic.e(f, 1, l), j.o ? j.o(m, a, b, c) : j.call(l, m, a, b, c), d = O(d), f = l, g = 0), i = 0
      }else {
        return l
      }
    }
  }
};
r.N = function(a, b, c) {
  G(b, "#<Atom: ");
  jh(this.state, b, c);
  return G(b, ">")
};
r.P = p("l");
r.Be = p("state");
r.H = function(a, b) {
  return a === b
};
var nh, oh = l;
function ph(a) {
  return new mh(a, l, l, l)
}
function qh(a, b) {
  var c = kd(b) ? Yc.a(Tc, b) : b, d = Mc.a(c, "\ufdd0:validator"), c = Mc.a(c, "\ufdd0:meta");
  return new mh(a, c, d, l)
}
function rh(a, b) {
  var c = l;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return qh.call(this, a, c)
}
rh.p = 1;
rh.k = function(a) {
  var b = L(a), a = M(a);
  return qh(b, a)
};
rh.g = qh;
oh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ph.call(this, a);
    default:
      return rh.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
oh.p = 1;
oh.k = rh.k;
oh.b = ph;
oh.g = rh.g;
nh = oh;
function sh(a, b) {
  var c = a.nf;
  y(c) && !y(c.b ? c.b(b) : c.call(l, b)) && e(Error([H("Assert failed: "), H("Validator rejected reference state"), H("\n"), H(lh.g(R([Zc(pc(new Vb(l, "validate", "validate", 1233162959, l), new Vb(l, "new-value", "new-value", 972165309, l)), Tc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  Lb(a, c, b);
  return b
}
var th, uh = l;
function vh(a, b) {
  return sh(a, b.b ? b.b(a.state) : b.call(l, a.state))
}
function wh(a, b, c) {
  return sh(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
}
function xh(a, b, c, d) {
  return sh(a, b.e ? b.e(a.state, c, d) : b.call(l, a.state, c, d))
}
function yh(a, b, c, d, f) {
  return sh(a, b.o ? b.o(a.state, c, d, f) : b.call(l, a.state, c, d, f))
}
function zh(a, b, c, d, f, g) {
  return sh(a, Yc.g(b, a.state, c, d, f, R([g], 0)))
}
function Ah(a, b, c, d, f, g) {
  var i = l;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return zh.call(this, a, b, c, d, f, i)
}
Ah.p = 5;
Ah.k = function(a) {
  var b = L(a), a = O(a), c = L(a), a = O(a), d = L(a), a = O(a), f = L(a), a = O(a), g = L(a), a = M(a);
  return zh(b, c, d, f, g, a)
};
Ah.g = zh;
uh = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return vh.call(this, a, b);
    case 3:
      return wh.call(this, a, b, c);
    case 4:
      return xh.call(this, a, b, c, d);
    case 5:
      return yh.call(this, a, b, c, d, f);
    default:
      return Ah.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
uh.p = 5;
uh.k = Ah.k;
uh.a = vh;
uh.e = wh;
uh.o = xh;
uh.ha = yh;
uh.g = Ah.g;
th = uh;
var Bh = {};
function Ch(a, b) {
  if(a ? a.Ce : a) {
    return a.Ce(a, b)
  }
  var c;
  var d = Ch[t(a == l ? l : a)];
  d ? c = d : (d = Ch._) ? c = d : e(A("IEncodeClojure.-js->clj", a));
  return c.call(l, a, b)
}
var Dh, Eh = l;
function Fh(a) {
  return Eh.g(a, R([Xa(["\ufdd0:keywordize-keys", n])], 0))
}
function Gh(a, b) {
  if(Bh ? y(y(l) ? l : Bh.If) || (Bh.Ke ? 0 : z(a, Bh)) : z(a, Bh)) {
    return Ch(a, Yc.a(Lg, b))
  }
  if(J(b)) {
    var c = kd(b) ? Yc.a(Tc, b) : b, c = Mc.a(c, "\ufdd0:keywordize-keys"), d = y(c) ? Rd : H;
    return function g(a) {
      var b;
      if(kd(a)) {
        b = ah.b(Pe.a(g, a))
      }else {
        if(b = a == l ? n : a ? ((b = a.j & 8) ? b : a.zf) ? k : a.j ? n : z(db, a) : z(db, a), b) {
          b = hf(cb(a), Pe.a(g, a))
        }else {
          if(a instanceof Array) {
            b = zf(Pe.a(g, a))
          }else {
            if((a == l ? l : a.constructor) === Object) {
              b = Uf;
              var c = [];
              Ka(a, function(a, b) {
                return c.push(b)
              });
              b = hf(b, function v(b) {
                return new V(l, n, function() {
                  for(;;) {
                    var c = J(b);
                    if(c) {
                      if(gd(c)) {
                        var j = Rb(c), m = Dc(j), K = new fe(Array(m), 0);
                        a: {
                          for(var U = 0;;) {
                            if(U < m) {
                              var X = B.a(j, U), X = yf([d.b ? d.b(X) : d.call(l, X), g(a[X])]);
                              K.add(X);
                              U += 1
                            }else {
                              j = k;
                              break a
                            }
                          }
                          j = h
                        }
                        return j ? me(K.va(), v(Sb(c))) : me(K.va(), l)
                      }
                      K = L(c);
                      return S(yf([d.b ? d.b(K) : d.call(l, K), g(a[K])]), v(M(c)))
                    }
                    return l
                  }
                }, l)
              }(c))
            }else {
              b = a
            }
          }
        }
      }
      return b
    }(a)
  }
  return l
}
function Hh(a, b) {
  var c = l;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Gh.call(this, a, c)
}
Hh.p = 1;
Hh.k = function(a) {
  var b = L(a), a = M(a);
  return Gh(b, a)
};
Hh.g = Gh;
Eh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Fh.call(this, a);
    default:
      return Hh.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eh.p = 1;
Eh.k = Hh.k;
Eh.b = Fh;
Eh.g = Hh.g;
Dh = Eh;
var Ih = l;
function Jh() {
  return Ih.b(1)
}
function Kh(a) {
  return(Math.random.t ? Math.random.t() : Math.random.call(l)) * a
}
Ih = function(a) {
  switch(arguments.length) {
    case 0:
      return Jh.call(this);
    case 1:
      return Kh.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ih.t = Jh;
Ih.b = Kh;
Bd = Ih;
var Lh, Mh = l;
function Nh(a) {
  return Yc.a(H, a)
}
function Oh(a, b) {
  return Yc.a(H, Ye(cf.a(Ze.b(a), b)))
}
Mh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Nh.call(this, a);
    case 2:
      return Oh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mh.b = Nh;
Mh.a = Oh;
Lh = Mh;
nh.b(Uf);
var Ph = nh.b(N);
function Qh() {
  var a = 360 * Bd.t();
  return Pe.a(function(a) {
    return 255 * a | 0
  }, function() {
    var b = a / 60 | 0, c = a / 60 - b, d = 0.95 * (1 - 0.5 * c), c = 0.95 * (1 - 0.5 * (1 - c));
    if(P.a ? P.a(0, b) : P.call(l, 0, b)) {
      return pc.g(R([0.95, c, d], 0))
    }
    if(P.a ? P.a(1, b) : P.call(l, 1, b)) {
      return pc.g(R([d, 0.95, 0.475], 0))
    }
    if(P.a ? P.a(2, b) : P.call(l, 2, b)) {
      return pc.g(R([0.475, 0.95, c], 0))
    }
    if(P.a ? P.a(3, b) : P.call(l, 3, b)) {
      return pc.g(R([0.475, d, 0.95], 0))
    }
    if(P.a ? P.a(4, b) : P.call(l, 4, b)) {
      return pc.g(R([c, 0.475, 0.95], 0))
    }
    if(P.a ? P.a(5, b) : P.call(l, 5, b)) {
      return pc.g(R([0.95, 0.475, d], 0))
    }
    e(Error([H("No matching clause: "), H(b)].join("")))
  }())
}
function Rh() {
  var a = Uf, b = 800 * Bd.t(), c = -2 + 4 * Bd.t(), d = -1 * (2 + 4 * Bd.t());
  return Qc.g(a, "\ufdd0:particles", Pe.a(function() {
    return Xa(["\ufdd0:x", b, "\ufdd0:y", 500, "\ufdd0:x-speed", c, "\ufdd0:y-speed", d])
  }, Rg.b(25)), R(["\ufdd0:exploded", n, "\ufdd0:alpha", 1, "\ufdd0:color", Qh()], 0))
}
function Sh(a, b) {
  for(var c = J((new T("\ufdd0:particles")).call(l, b)), d = l, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.M(d, g);
      Lh.a(",", (new T("\ufdd0:color")).call(l, b));
      H("rgba(");
      H(Lh.a(",", (new T("\ufdd0:color")).call(l, b)));
      H(",");
      H((new T("\ufdd0:alpha")).call(l, b));
      H(")");
      a.fillStyle = [H("rgba("), H(Lh.a(",", (new T("\ufdd0:color")).call(l, b))), H(","), H((new T("\ufdd0:alpha")).call(l, b)), H(")")].join("");
      a.beginPath();
      a.arc((new T("\ufdd0:x")).call(l, i), (new T("\ufdd0:y")).call(l, i), 2, 0, 2 * Math.PI, k);
      a.closePath();
      a.fill();
      g += 1
    }else {
      if(c = J(c)) {
        d = c, gd(d) ? (c = Rb(d), f = Sb(d), d = c, i = Dc(c), c = f, f = i) : (i = L(d), Lh.a(",", (new T("\ufdd0:color")).call(l, b)), H("rgba("), H(Lh.a(",", (new T("\ufdd0:color")).call(l, b))), H(","), H((new T("\ufdd0:alpha")).call(l, b)), H(")"), a.fillStyle = [H("rgba("), H(Lh.a(",", (new T("\ufdd0:color")).call(l, b))), H(","), H((new T("\ufdd0:alpha")).call(l, b)), H(")")].join(""), a.beginPath(), a.arc((new T("\ufdd0:x")).call(l, i), (new T("\ufdd0:y")).call(l, i), 2, 0, 2 * Math.PI, 
        k), a.closePath(), a.fill(), c = O(d), d = l, f = 0), g = 0
      }else {
        break
      }
    }
  }
}
function Th() {
  return Pe.a(function() {
    return Rh()
  }, Rg.b(10))
}
function Uh(a) {
  return Pe.a(function(a) {
    var c = (new T("\ufdd0:exploded")).call(l, a) === k;
    return(c ? 0 > (new T("\ufdd0:alpha")).call(l, a) : c) ? Rh() : Qc.e(a, "\ufdd0:reset", n)
  }, a)
}
function Vh(a) {
  return Pe.a(function(a) {
    var c = 1 < (new T("\ufdd0:y-speed")).call(l, L((new T("\ufdd0:particles")).call(l, a)));
    return(c ? (new T("\ufdd0:exploded")).call(l, a) === n : c) ? Qc.g(a, "\ufdd0:particles", Pe.a(function(a) {
      return Qc.g(a, "\ufdd0:x", (new T("\ufdd0:x")).call(l, a) + (new T("\ufdd0:x-speed")).call(l, a), R(["\ufdd0:y", (new T("\ufdd0:y")).call(l, a) + (new T("\ufdd0:y-speed")).call(l, a), "\ufdd0:x-speed", -4 + 8 * Bd.t(), "\ufdd0:y-speed", -4 + 8 * Bd.t()], 0))
    }, (new T("\ufdd0:particles")).call(l, a)), R(["\ufdd0:exploded", k], 0)) : Qc.g(a, "\ufdd0:particles", Pe.a(function(a) {
      return Qc.g(a, "\ufdd0:x", (new T("\ufdd0:x")).call(l, a) + (new T("\ufdd0:x-speed")).call(l, a), R(["\ufdd0:y", (new T("\ufdd0:y")).call(l, a) + (new T("\ufdd0:y-speed")).call(l, a), "\ufdd0:y-speed", (new T("\ufdd0:y-speed")).call(l, a) + 0.04], 0))
    }, (new T("\ufdd0:particles")).call(l, a)), R(["\ufdd0:alpha", (new T("\ufdd0:exploded")).call(l, a) === n ? (new T("\ufdd0:alpha")).call(l, a) : (new T("\ufdd0:alpha")).call(l, a) - 0.0090], 0))
  }, a)
}
var Wh = function() {
  var a = window.mozRequestAnimationFrame;
  if(y(a)) {
    return a
  }
  a = window.requestAnimationFrame;
  if(y(a)) {
    return a
  }
  a = window.webkitRequestAnimationFrame;
  return y(a) ? a : function(a) {
    return timeout(10, a.t ? a.t() : a.call(l))
  }
}(), Yh = function Xh() {
  Wh.b ? Wh.b(Xh) : Wh.call(l, Xh);
  var b = document.getElementById("surface").getContext("2d");
  b.fillStyle = [H("rgba("), H(0), H(","), H(0), H(","), H(0), H(","), H(0.1), H(")")].join("");
  b.fillRect(0, 0, 800, 500);
  a: {
    var c;
    c = wb(Ph);
    c = J(c);
    for(var d = l, f = 0, g = 0;;) {
      if(g < f) {
        var i = d.M(d, g);
        Sh(b, i);
        g += 1
      }else {
        if(c = J(c)) {
          d = c, gd(d) ? (c = Rb(d), f = Sb(d), d = c, i = Dc(c), c = f, f = i) : (i = L(d), Sh(b, i), c = O(d), d = l, f = 0), g = 0
        }else {
          break a
        }
      }
    }
  }
  th.a(Ph, Vh);
  return th.a(Ph, Uh)
};
window.onload = function() {
  document.write("ClojureScript fireworks by Mathias Olsson");
  document.write("<div><canvas id='surface'/></div>");
  var a = document.getElementById("surface");
  a.width = 800;
  a.height = 500;
  th.a(Ph, Th);
  return Yh()
};
function Zh() {
  this.$ = n
}
Zh.prototype.Nc = function() {
  this.$ || (this.$ = k, this.B())
};
Zh.prototype.B = function() {
  this.Te && $h.apply(l, this.Te);
  if(this.ee) {
    for(;this.ee.length;) {
      this.ee.shift()()
    }
  }
};
function ai(a) {
  a && "function" == typeof a.Nc && a.Nc()
}
function $h(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    fa(d) ? $h.apply(l, d) : ai(d)
  }
}
;var bi, ci, di, ei;
function fi() {
  return s.navigator ? s.navigator.userAgent : l
}
ei = di = ci = bi = n;
var gi;
if(gi = fi()) {
  var hi = s.navigator;
  bi = 0 == gi.indexOf("Opera");
  ci = !bi && -1 != gi.indexOf("MSIE");
  di = !bi && -1 != gi.indexOf("WebKit");
  ei = !bi && !di && "Gecko" == hi.product
}
var ii = bi, Y = ci, ji = ei, ki = di, li = s.navigator, mi = -1 != (li && li.platform || "").indexOf("Mac"), ni;
a: {
  var oi = "", pi;
  if(ii && s.opera) {
    var qi = s.opera.version, oi = "function" == typeof qi ? qi() : qi
  }else {
    if(ji ? pi = /rv\:([^\);]+)(\)|;)/ : Y ? pi = /MSIE\s+([^\);]+)(\)|;)/ : ki && (pi = /WebKit\/(\S+)/), pi) {
      var ri = pi.exec(fi()), oi = ri ? ri[1] : ""
    }
  }
  if(Y) {
    var si, ti = s.document;
    si = ti ? ti.documentMode : h;
    if(si > parseFloat(oi)) {
      ni = String(si);
      break a
    }
  }
  ni = oi
}
var ui = {};
function vi(a) {
  var b;
  if(!(b = ui[a])) {
    b = 0;
    for(var c = String(ni).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var v = m.exec(i) || ["", "", ""], w = q.exec(j) || ["", "", ""];
        if(0 == v[0].length && 0 == w[0].length) {
          break
        }
        b = ((0 == v[1].length ? 0 : parseInt(v[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == v[1].length ? 0 : parseInt(v[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == v[2].length) < (0 == w[2].length) ? -1 : (0 == v[2].length) > (0 == w[2].length) ? 1 : 0) || (v[2] < w[2] ? -1 : v[2] > w[2] ? 1 : 0)
      }while(0 == b)
    }
    b = ui[a] = 0 <= b
  }
  return b
}
var wi = {};
function xi() {
  return wi[9] || (wi[9] = Y && !!document.documentMode && 9 <= document.documentMode)
}
;!Y || xi();
var yi = !Y || xi(), zi = Y && !vi("8");
!ki || vi("528");
ji && vi("1.9b") || Y && vi("8") || ii && vi("9.5") || ki && vi("528");
ji && !vi("8") || Y && vi("9");
function Ai(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
r = Ai.prototype;
r.B = function() {
};
r.Nc = function() {
};
r.ob = n;
r.defaultPrevented = n;
r.hc = k;
r.preventDefault = function() {
  this.defaultPrevented = k;
  this.hc = n
};
function Bi(a) {
  Bi[" "](a);
  return a
}
Bi[" "] = da;
function Ci(a, b) {
  try {
    return Bi(a[b]), k
  }catch(c) {
  }
  return n
}
;function Di(a, b) {
  a && this.Zb(a, b)
}
pa(Di, Ai);
r = Di.prototype;
r.target = l;
r.relatedTarget = l;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = n;
r.altKey = n;
r.shiftKey = n;
r.metaKey = n;
r.cf = n;
r.Xb = l;
r.Zb = function(a, b) {
  var c = this.type = a.type;
  Ai.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? ji && (Ci(d, "nodeName") || (d = l)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = ki || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = ki || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.cf = mi ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Xb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ob
};
r.preventDefault = function() {
  Di.fa.preventDefault.call(this);
  var a = this.Xb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, zi) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.B = function() {
};
function Ei() {
}
var Fi = 0;
r = Ei.prototype;
r.key = 0;
r.pb = n;
r.uc = n;
r.Zb = function(a, b, c, d, f, g) {
  ga(a) ? this.Xd = k : a && a.handleEvent && ga(a.handleEvent) ? this.Xd = n : e(Error("Invalid listener argument"));
  this.Fb = a;
  this.he = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Pc = g;
  this.uc = n;
  this.key = ++Fi;
  this.pb = n
};
r.handleEvent = function(a) {
  return this.Xd ? this.Fb.call(this.Pc || this.src, a) : this.Fb.handleEvent.call(this.Fb, a)
};
var Gi = {}, Hi = {}, Ii = {}, Ji = {};
function Ki(a, b, c, d, f) {
  if(b) {
    if(ea(b)) {
      for(var g = 0;g < b.length;g++) {
        Ki(a, b[g], c, d, f)
      }
      return l
    }
    var d = !!d, i = Hi;
    b in i || (i[b] = {w:0, ea:0});
    i = i[b];
    d in i || (i[d] = {w:0, ea:0}, i.w++);
    var i = i[d], j = ia(a), m;
    i.ea++;
    if(i[j]) {
      m = i[j];
      for(g = 0;g < m.length;g++) {
        if(i = m[g], i.Fb == c && i.Pc == f) {
          if(i.pb) {
            break
          }
          return m[g].key
        }
      }
    }else {
      m = i[j] = [], i.w++
    }
    var q = Li, v = yi ? function(a) {
      return q.call(v.src, v.key, a)
    } : function(a) {
      a = q.call(v.src, v.key, a);
      if(!a) {
        return a
      }
    }, g = v;
    g.src = a;
    i = new Ei;
    i.Zb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    m.push(i);
    Gi[c] = i;
    Ii[j] || (Ii[j] = []);
    Ii[j].push(i);
    a.addEventListener ? (a == s || !a.Ld) && a.addEventListener(b, g, d) : a.attachEvent(b in Ji ? Ji[b] : Ji[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Mi(a, b, c, d, f) {
  if(ea(b)) {
    for(var g = 0;g < b.length;g++) {
      Mi(a, b[g], c, d, f)
    }
    return l
  }
  a = Ki(a, b, c, d, f);
  Gi[a].uc = k;
  return a
}
function Ni(a, b, c, d, f) {
  if(ea(b)) {
    for(var g = 0;g < b.length;g++) {
      Ni(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = Hi;
      if(b in g && (g = g[b], d in g && (g = g[d], a = ia(a), g[a]))) {
        a = g[a];
        break a
      }
      a = l
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Fb == c && a[g].capture == d && a[g].Pc == f) {
          Oi(a[g].key);
          break
        }
      }
    }
  }
}
function Oi(a) {
  if(!Gi[a]) {
    return n
  }
  var b = Gi[a];
  if(b.pb) {
    return n
  }
  var c = b.src, d = b.type, f = b.he, g = b.capture;
  c.removeEventListener ? (c == s || !c.Ld) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Ji ? Ji[d] : Ji[d] = "on" + d, f);
  c = ia(c);
  Ii[c] && (f = Ii[c], Ha(f, b), 0 == f.length && delete Ii[c]);
  b.pb = k;
  if(b = Hi[d][g][c]) {
    b.be = k, Pi(d, g, c, b)
  }
  delete Gi[a];
  return k
}
function Pi(a, b, c, d) {
  if(!d.$b && d.be) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].pb ? d[f].he.src = l : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.be = n;
    0 == g && (delete Hi[a][b][c], Hi[a][b].w--, 0 == Hi[a][b].w && (delete Hi[a][b], Hi[a].w--), 0 == Hi[a].w && delete Hi[a])
  }
}
function Qi(a, b, c, d, f) {
  var g = 1, b = ia(b);
  if(a[b]) {
    a.ea--;
    a = a[b];
    a.$b ? a.$b++ : a.$b = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var m = a[j];
        m && !m.pb && (g &= Ri(m, f) !== n)
      }
    }finally {
      a.$b--, Pi(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Ri(a, b) {
  a.uc && Oi(a.key);
  return a.handleEvent(b)
}
function Li(a, b) {
  if(!Gi[a]) {
    return k
  }
  var c = Gi[a], d = c.type, f = Hi;
  if(!(d in f)) {
    return k
  }
  var f = f[d], g, i;
  if(!yi) {
    g = b || ca("window.event");
    var j = k in f, m = n in f;
    if(j) {
      if(0 > g.keyCode || g.returnValue != h) {
        return k
      }
      a: {
        var q = n;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(v) {
            q = k
          }
        }
        if(q || g.returnValue == h) {
          g.returnValue = k
        }
      }
    }
    q = new Di;
    q.Zb(g, this);
    g = k;
    try {
      if(j) {
        for(var w = [], C = q.currentTarget;C;C = C.parentNode) {
          w.push(C)
        }
        i = f[k];
        i.ea = i.w;
        for(var D = w.length - 1;!q.ob && 0 <= D && i.ea;D--) {
          q.currentTarget = w[D], g &= Qi(i, w[D], d, k, q)
        }
        if(m) {
          i = f[n];
          i.ea = i.w;
          for(D = 0;!q.ob && D < w.length && i.ea;D++) {
            q.currentTarget = w[D], g &= Qi(i, w[D], d, n, q)
          }
        }
      }else {
        g = Ri(c, q)
      }
    }finally {
      w && (w.length = 0)
    }
    return g
  }
  d = new Di(b, this);
  return g = Ri(c, d)
}
;function Si() {
  this.$ = n
}
pa(Si, Zh);
r = Si.prototype;
r.Ld = k;
r.Wc = l;
r.addEventListener = function(a, b, c, d) {
  Ki(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Ni(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = Hi;
  if(b in c) {
    if(u(a)) {
      a = new Ai(a, this)
    }else {
      if(a instanceof Ai) {
        a.target = a.target || this
      }else {
        var d = a, a = new Ai(b, this);
        Oa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = k in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Wc) {
        f.push(g)
      }
      g = c[k];
      g.ea = g.w;
      for(var i = f.length - 1;!a.ob && 0 <= i && g.ea;i--) {
        a.currentTarget = f[i], d &= Qi(g, f[i], a.type, k, a) && a.hc != n
      }
    }
    if(n in c) {
      if(g = c[n], g.ea = g.w, b) {
        for(i = 0;!a.ob && i < f.length && g.ea;i++) {
          a.currentTarget = f[i], d &= Qi(g, f[i], a.type, n, a) && a.hc != n
        }
      }else {
        for(f = this;!a.ob && f && g.ea;f = f.Wc) {
          a.currentTarget = f, d &= Qi(g, f, a.type, n, a) && a.hc != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = k
  }
  return a
};
r.B = function() {
  Si.fa.B.call(this);
  var a, b = 0, c = a == l;
  a = !!a;
  if(this == l) {
    Ka(Ii, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          Oi(g.key), b++
        }
      }
    })
  }else {
    var d = ia(this);
    if(Ii[d]) {
      for(var d = Ii[d], f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          Oi(g.key), b++
        }
      }
    }
  }
  this.Wc = l
};
function Ti(a, b) {
  this.$ = n;
  this.kb = a || 1;
  this.Lb = b || Ui;
  this.sc = x(this.mf, this);
  this.Rc = oa()
}
pa(Ti, Si);
Ti.prototype.enabled = n;
var Ui = s.window;
r = Ti.prototype;
r.Ga = l;
r.mf = function() {
  if(this.enabled) {
    var a = oa() - this.Rc;
    0 < a && a < 0.8 * this.kb ? this.Ga = this.Lb.setTimeout(this.sc, this.kb - a) : (this.dispatchEvent(Vi), this.enabled && (this.Ga = this.Lb.setTimeout(this.sc, this.kb), this.Rc = oa()))
  }
};
r.start = function() {
  this.enabled = k;
  this.Ga || (this.Ga = this.Lb.setTimeout(this.sc, this.kb), this.Rc = oa())
};
r.stop = function() {
  this.enabled = n;
  this.Ga && (this.Lb.clearTimeout(this.Ga), this.Ga = l)
};
r.B = function() {
  Ti.fa.B.call(this);
  this.stop();
  delete this.Lb
};
var Vi = "tick";
function Wi(a, b) {
  ga(a) || (a && "function" == typeof a.handleEvent ? a = x(a.handleEvent, a) : e(Error("Invalid listener argument")));
  return 2147483647 < b ? -1 : Ui.setTimeout(a, b || 0)
}
;function Xi(a) {
  if("function" == typeof a.za) {
    return a.za()
  }
  if(u(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return La(a)
}
;function Yi(a, b) {
  this.Ba = {};
  this.C = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Yi ? (c = a.ib(), d = a.za()) : (c = Ma(a), d = La(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
r = Yi.prototype;
r.w = 0;
r.pe = 0;
r.za = function() {
  Zi(this);
  for(var a = [], b = 0;b < this.C.length;b++) {
    a.push(this.Ba[this.C[b]])
  }
  return a
};
r.ib = function() {
  Zi(this);
  return this.C.concat()
};
r.wb = function(a) {
  return $i(this.Ba, a)
};
r.remove = function(a) {
  return $i(this.Ba, a) ? (delete this.Ba[a], this.w--, this.pe++, this.C.length > 2 * this.w && Zi(this), k) : n
};
function Zi(a) {
  if(a.w != a.C.length) {
    for(var b = 0, c = 0;b < a.C.length;) {
      var d = a.C[b];
      $i(a.Ba, d) && (a.C[c++] = d);
      b++
    }
    a.C.length = c
  }
  if(a.w != a.C.length) {
    for(var f = {}, c = b = 0;b < a.C.length;) {
      d = a.C[b], $i(f, d) || (a.C[c++] = d, f[d] = 1), b++
    }
    a.C.length = c
  }
}
r.get = function(a, b) {
  return $i(this.Ba, a) ? this.Ba[a] : b
};
r.set = function(a, b) {
  $i(this.Ba, a) || (this.w++, this.C.push(a), this.pe++);
  this.Ba[a] = b
};
r.Vb = function() {
  return new Yi(this)
};
function $i(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function aj(a) {
  return bj(a || arguments.callee.caller, [])
}
function bj(a, b) {
  var c = [];
  if(0 <= Da(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(cj(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = cj(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(bj(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function cj(a) {
  if(dj[a]) {
    return dj[a]
  }
  a = String(a);
  if(!dj[a]) {
    var b = /function ([^\(]+)/.exec(a);
    dj[a] = b ? b[1] : "[Anonymous]"
  }
  return dj[a]
}
var dj = {};
function ej(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
ej.prototype.jf = 0;
ej.prototype.Qd = l;
ej.prototype.Pd = l;
var fj = 0;
ej.prototype.reset = function(a, b, c, d, f) {
  this.jf = "number" == typeof f ? f : fj++;
  this.Nf = d || oa();
  this.Eb = a;
  this.af = b;
  this.Kf = c;
  delete this.Qd;
  delete this.Pd
};
ej.prototype.oe = function(a) {
  this.Eb = a
};
function gj(a) {
  this.ae = a
}
gj.prototype.na = l;
gj.prototype.Eb = l;
gj.prototype.vc = l;
gj.prototype.Ud = l;
function hj(a, b) {
  this.name = a;
  this.value = b
}
hj.prototype.toString = p("name");
var ij = new hj("SEVERE", 1E3), jj = new hj("WARNING", 900), kj = new hj("INFO", 800), lj = new hj("CONFIG", 700), mj = new hj("FINE", 500), nj = new hj("FINEST", 300);
r = gj.prototype;
r.getName = p("ae");
r.getParent = p("na");
r.Td = function() {
  this.vc || (this.vc = {});
  return this.vc
};
r.oe = function(a) {
  this.Eb = a
};
function oj(a) {
  if(a.Eb) {
    return a.Eb
  }
  if(a.na) {
    return oj(a.na)
  }
  Ba("Root logger has no level set.");
  return l
}
r.log = function(a, b, c) {
  if(a.value >= oj(this).value) {
    a = this.We(a, b, c);
    b = "log:" + a.af;
    s.console && (s.console.timeStamp ? s.console.timeStamp(b) : s.console.markTimeline && s.console.markTimeline(b));
    s.msWriteProfilerMark && s.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Ud) {
        for(var f = 0, g = h;g = c.Ud[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
r.We = function(a, b, c) {
  var d = new ej(a, String(b), this.ae);
  if(c) {
    d.Qd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var j = ca("window.location.href");
      if(u(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var m, q, v = n;
        try {
          m = c.lineNumber || c.Jf || "Not available"
        }catch(w) {
          m = "Not available", v = k
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || j
        }catch(C) {
          q = "Not available", v = k
        }
        i = v || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:q, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + ra(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + ra(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(aj(g) + "-> ")
    }catch(D) {
      f = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.Pd = f
  }
  return d
};
r.info = function(a, b) {
  this.log(kj, a, b)
};
function pj(a) {
  Z.log(mj, a, h)
}
function qj(a) {
  Z.log(nj, a, h)
}
var rj = {}, sj = l;
function tj(a) {
  sj || (sj = new gj(""), rj[""] = sj, sj.oe(lj));
  var b;
  if(!(b = rj[a])) {
    b = new gj(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = tj(a.substr(0, c));
    c.Td()[d] = b;
    b.na = c;
    rj[a] = b
  }
  return b
}
;function uj(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function vj(a) {
  var b = [];
  wj(new xj, a, b);
  return b.join("")
}
function xj() {
  this.gc = h
}
function wj(a, b, c) {
  switch(typeof b) {
    case "string":
      yj(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == l) {
        c.push("null");
        break
      }
      if(ea(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], wj(a, a.gc ? a.gc.call(b, String(g), f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), yj(g, c), c.push(":"), wj(a, a.gc ? a.gc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var zj = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Aj = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function yj(a, b) {
  b.push('"', a.replace(Aj, function(a) {
    if(a in zj) {
      return zj[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return zj[a] = f + b.toString(16)
  }), '"')
}
;var Bj = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Cj(a) {
  var b = a.match(Bj), a = b[1], c = b[2], d = b[3], b = b[4], f = [];
  a && f.push(a, ":");
  d && (f.push("//"), c && f.push(c, "@"), f.push(d), b && f.push(":", b));
  return f.join("")
}
;tj("goog.net.XhrIo");
var Dj = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {hd:"cn", qe:"at", se:"rat", Ob:"pu", Ha:"ifrid", tb:"tp", nc:"lru", Nb:"pru", Ra:"lpu", Sa:"ppu", pc:"ph", oc:"osh", qc:"role", re:"nativeProtocolVersion"}, Ej = [$.Ob, $.nc, $.Nb, $.Ra, $.Sa], Fj = {};
function Gj(a) {
  for(var b = Hj, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var Hj = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Z = tj("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ij(a, b) {
  this.Sb = [];
  this.pd = a;
  this.Md = b || l
}
r = Ij.prototype;
r.ja = n;
r.Ab = n;
r.Hb = 0;
r.dd = n;
r.xe = n;
r.Rb = 0;
r.cancel = function(a) {
  if(this.ja) {
    this.Jb instanceof Ij && this.Jb.cancel()
  }else {
    if(this.na) {
      var b = this.na;
      delete this.na;
      a ? b.cancel(a) : (b.Rb--, 0 >= b.Rb && b.cancel())
    }
    this.pd ? this.pd.call(this.Md, this) : this.dd = k;
    this.ja || this.Od(new Jj(this))
  }
};
r.Jd = function(a, b) {
  Kj(this, a, b);
  this.Hb--;
  0 == this.Hb && this.ja && Lj(this)
};
function Kj(a, b, c) {
  a.ja = k;
  a.Jb = c;
  a.Ab = !b;
  Lj(a)
}
function Mj(a) {
  a.ja && (a.dd || e(new Nj(a)), a.dd = n)
}
r.pa = function(a) {
  Mj(this);
  Kj(this, k, a)
};
r.Od = function(a) {
  Mj(this);
  Kj(this, n, a)
};
function Oj(a, b, c, d) {
  a.Sb.push([b, c, d]);
  a.ja && Lj(a)
}
function Pj(a, b) {
  var c = x(b.ue, b);
  Oj(a, c, l, h)
}
r.ue = function(a) {
  var b = new Ij;
  Oj(this, b.pa, b.Od, b);
  a && (b.na = this, this.Rb++);
  return b
};
function Qj(a) {
  return Ga(a.Sb, function(a) {
    return ga(a[1])
  })
}
function Lj(a) {
  a.gd && (a.ja && Qj(a)) && (s.clearTimeout(a.gd), delete a.gd);
  a.na && (a.na.Rb--, delete a.na);
  for(var b = a.Jb, c = n, d = n;a.Sb.length && 0 == a.Hb;) {
    var f = a.Sb.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Ab ? i : g) {
      try {
        var j = g.call(f || a.Md, b);
        j !== h && (a.Ab = a.Ab && (j == b || j instanceof Error), a.Jb = b = j);
        b instanceof Ij && (d = k, a.Hb++)
      }catch(m) {
        b = m, a.Ab = k, Qj(a) || (c = k)
      }
    }
  }
  a.Jb = b;
  d && a.Hb && (Oj(b, x(a.Jd, a, k), x(a.Jd, a, n)), b.xe = k);
  c && (a.gd = s.setTimeout(function() {
    e(new Rj(b))
  }, 0))
}
function Nj(a) {
  ya.call(this);
  this.Qe = a
}
pa(Nj, ya);
Nj.prototype.message = "Already called";
function Jj(a) {
  ya.call(this);
  this.Qe = a
}
pa(Jj, ya);
Jj.prototype.message = "Deferred was cancelled";
function Rj(a) {
  ya.call(this);
  this.yf = a;
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
pa(Rj, ya);
function Sj(a, b) {
  var c;
  if(a instanceof Sj) {
    this.ba = b !== h ? b : a.ba, Tj(this, a.qb), c = a.mc, Uj(this), this.mc = c, c = a.yb, Uj(this), this.yb = c, Vj(this, a.fc), c = a.cc, Uj(this), this.cc = c, Wj(this, a.Ea.Vb()), c = a.Yb, Uj(this), this.Yb = c
  }else {
    if(a && (c = String(a).match(Bj))) {
      this.ba = !!b;
      Tj(this, c[1] || "", k);
      var d = c[2] || "";
      Uj(this);
      this.mc = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      Uj(this);
      this.yb = d ? decodeURIComponent(d) : "";
      Vj(this, c[4]);
      d = c[5] || "";
      Uj(this);
      this.cc = d ? decodeURIComponent(d) : "";
      Wj(this, c[6] || "", k);
      c = c[7] || "";
      Uj(this);
      this.Yb = c ? decodeURIComponent(c) : ""
    }else {
      this.ba = !!b, this.Ea = new Xj(l, 0, this.ba)
    }
  }
}
r = Sj.prototype;
r.qb = "";
r.mc = "";
r.yb = "";
r.fc = l;
r.cc = "";
r.Yb = "";
r.Ze = n;
r.ba = n;
r.toString = function() {
  var a = [], b = this.qb;
  b && a.push(Yj(b, Zj), ":");
  if(b = this.yb) {
    a.push("//");
    var c = this.mc;
    c && a.push(Yj(c, Zj), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.fc;
    b != l && a.push(":", String(b))
  }
  if(b = this.cc) {
    this.yb && "/" != b.charAt(0) && a.push("/"), a.push(Yj(b, "/" == b.charAt(0) ? $j : ak))
  }
  (b = this.Ea.toString()) && a.push("?", b);
  (b = this.Yb) && a.push("#", Yj(b, bk));
  return a.join("")
};
r.Vb = function() {
  return new Sj(this)
};
function Tj(a, b, c) {
  Uj(a);
  a.qb = c ? b ? decodeURIComponent(b) : "" : b;
  a.qb && (a.qb = a.qb.replace(/:$/, ""))
}
function Vj(a, b) {
  Uj(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.fc = b) : a.fc = l
}
function Wj(a, b, c) {
  Uj(a);
  b instanceof Xj ? (a.Ea = b, a.Ea.cd(a.ba)) : (c || (b = Yj(b, ck)), a.Ea = new Xj(b, 0, a.ba))
}
function Uj(a) {
  a.Ze && e(Error("Tried to modify a read-only Uri"))
}
r.cd = function(a) {
  this.ba = a;
  this.Ea && this.Ea.cd(a);
  return this
};
function Yj(a, b) {
  return u(a) ? encodeURI(a).replace(b, dk) : l
}
function dk(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Zj = /[#\/\?@]/g, ak = /[\#\?:]/g, $j = /[\#\?]/g, ck = /[\#\?@]/g, bk = /#/g;
function Xj(a, b, c) {
  this.aa = a || l;
  this.ba = !!c
}
function ek(a) {
  if(!a.D && (a.D = new Yi, a.w = 0, a.aa)) {
    for(var b = a.aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = l, g = l;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = fk(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = Xj.prototype;
r.D = l;
r.w = l;
r.add = function(a, b) {
  ek(this);
  this.aa = l;
  var a = fk(this, a), c = this.D.get(a);
  c || this.D.set(a, c = []);
  c.push(b);
  this.w++;
  return this
};
r.remove = function(a) {
  ek(this);
  a = fk(this, a);
  return this.D.wb(a) ? (this.aa = l, this.w -= this.D.get(a).length, this.D.remove(a)) : n
};
r.wb = function(a) {
  ek(this);
  a = fk(this, a);
  return this.D.wb(a)
};
r.ib = function() {
  ek(this);
  for(var a = this.D.za(), b = this.D.ib(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
r.za = function(a) {
  ek(this);
  var b = [];
  if(a) {
    this.wb(a) && (b = Ia(b, this.D.get(fk(this, a))))
  }else {
    for(var a = this.D.za(), c = 0;c < a.length;c++) {
      b = Ia(b, a[c])
    }
  }
  return b
};
r.set = function(a, b) {
  ek(this);
  this.aa = l;
  a = fk(this, a);
  this.wb(a) && (this.w -= this.D.get(a).length);
  this.D.set(a, [b]);
  this.w++;
  return this
};
r.get = function(a, b) {
  var c = a ? this.za(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
r.toString = function() {
  if(this.aa) {
    return this.aa
  }
  if(!this.D) {
    return""
  }
  for(var a = [], b = this.D.ib(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent(String(d)), d = this.za(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent(String(d[g])));
      a.push(i)
    }
  }
  return this.aa = a.join("&")
};
r.Vb = function() {
  var a = new Xj;
  a.aa = this.aa;
  this.D && (a.D = this.D.Vb());
  return a
};
function fk(a, b) {
  var c = String(b);
  a.ba && (c = c.toLowerCase());
  return c
}
r.cd = function(a) {
  if(a && !this.ba) {
    ek(this);
    this.aa = l;
    var b = this.D, c = function(a, b) {
      var c = b.toLowerCase();
      b != c && (this.remove(b), this.remove(c), 0 < a.length && (this.aa = l, this.D.set(fk(this, c), Ja(a)), this.w += a.length))
    };
    if("function" == typeof b.forEach) {
      b.forEach(c, this)
    }else {
      if(fa(b) || u(b)) {
        Ea(b, c, this)
      }else {
        var d;
        if("function" == typeof b.ib) {
          d = b.ib()
        }else {
          if("function" != typeof b.za) {
            if(fa(b) || u(b)) {
              d = [];
              for(var f = b.length, g = 0;g < f;g++) {
                d.push(g)
              }
            }else {
              d = Ma(b)
            }
          }else {
            d = h
          }
        }
        b = Xi(b);
        f = b.length;
        for(g = 0;g < f;g++) {
          c.call(this, b[g], d && d[g])
        }
      }
    }
  }
  this.ba = a
};
function gk(a, b, c) {
  this.$ = n;
  this.Sc = a;
  this.kb = b || 0;
  this.Bb = c;
  this.ve = x(this.Ue, this)
}
pa(gk, Zh);
r = gk.prototype;
r.Cb = 0;
r.B = function() {
  gk.fa.B.call(this);
  this.stop();
  delete this.Sc;
  delete this.Bb
};
r.start = function(a) {
  this.stop();
  this.Cb = Wi(this.ve, a !== h ? a : this.kb)
};
r.stop = function() {
  this.Wd() && Ui.clearTimeout(this.Cb);
  this.Cb = 0
};
r.Wd = function() {
  return 0 != this.Cb
};
r.Ue = function() {
  this.Cb = 0;
  this.Sc && this.Sc.call(this.Bb)
};
var hk;
!Y || xi();
var ik = !ji && !Y || Y && xi() || ji && vi("1.9.1");
Y && vi("9");
function jk(a) {
  return a ? new kk(9 == a.nodeType ? a : a.ownerDocument || a.document) : hk || (hk = new kk)
}
function lk(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function kk(a) {
  this.xb = a || s.document || document
}
r = kk.prototype;
r.createElement = function(a) {
  return this.xb.createElement(a)
};
r.createTextNode = function(a) {
  return this.xb.createTextNode(a)
};
r.z = function() {
  return this.xb.parentWindow || this.xb.defaultView
};
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  function c(a) {
    a && f.appendChild(u(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i];
    if(fa(j) && !(ha(j) && 0 < j.nodeType)) {
      var m = Ea, q;
      a: {
        if((q = j) && "number" == typeof q.length) {
          if(ha(q)) {
            q = "function" == typeof q.item || "string" == typeof q.item;
            break a
          }
          if(ga(q)) {
            q = "function" == typeof q.item;
            break a
          }
        }
        q = n
      }
      m(q ? Ja(j) : j, c)
    }else {
      c(j)
    }
  }
};
r.Td = function(a) {
  return ik && a.children != h ? a.children : Fa(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function mk(a) {
  this.$ = n;
  this.ya = a || jk()
}
pa(mk, Zh);
mk.prototype.rb = 0;
mk.prototype.z = function() {
  return this.ya.z()
};
mk.prototype.getName = function() {
  return Dj[this.rb] || ""
};
function nk() {
  this.$ = n;
  this.bd = {}
}
pa(nk, Zh);
nk.prototype.ac = tj("goog.messaging.AbstractChannel");
nk.prototype.ra = function(a) {
  a && a()
};
nk.prototype.sa = ba(k);
nk.prototype.B = function() {
  nk.fa.B.call(this);
  ai(this.ac);
  delete this.ac;
  delete this.bd;
  delete this.Nd
};
function ok(a, b) {
  mk.call(this, b);
  this.m = a;
  this.Kb = this.m.r[$.Sa];
  this.gf = this.m.r[$.Ra];
  this.ic = []
}
var pk, qk;
pa(ok, mk);
r = ok.prototype;
r.df = 5;
r.rb = 4;
r.kc = 0;
r.sb = n;
r.Ta = n;
r.le = l;
function rk(a) {
  return"googlexpc_" + a.m.name + "_msg"
}
function sk(a) {
  return"googlexpc_" + a.m.name + "_ack"
}
function tk(a) {
  try {
    if(!a.$ && uk(a.m)) {
      return a.m.Da.frames || {}
    }
  }catch(b) {
    pj("error retrieving peer frames")
  }
  return{}
}
r.ra = function() {
  if(!this.$ && uk(this.m)) {
    pj("transport connect called");
    if(!this.Ta) {
      pj("initializing...");
      var a = rk(this);
      this.mb = vk(this, a);
      this.Tc = this.z().frames[a];
      a = sk(this);
      this.Za = vk(this, a);
      this.rc = this.z().frames[a];
      this.Ta = k
    }
    if(!wk(this, rk(this)) || !wk(this, sk(this))) {
      qj("foreign frames not (yet) present");
      if(1 == xk(this.m)) {
        this.le || 0 < this.df-- || (qj("Inner peer reconnect triggered."), this.m.name = Gj(10), qj("switching channels: " + this.m.name), yk(this), this.Ta = n, this.le = vk(this, "googlexpc_reconnect_" + this.m.name))
      }else {
        if(0 == xk(this.m)) {
          qj("outerPeerReconnect called");
          for(var a = tk(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(f) {
            }
            if(d) {
              var g = d.split("_");
              if(3 == g.length && "googlexpc" == g[0] && "reconnect" == g[1]) {
                this.m.name = g[2];
                yk(this);
                this.Ta = n;
                break
              }
            }
          }
        }
      }
      this.z().setTimeout(x(this.ra, this), 100)
    }else {
      pj("foreign frames present"), this.Zd = new zk(this, tk(this)[rk(this)], x(this.ff, this)), this.jd = new zk(this, tk(this)[sk(this)], x(this.ef, this)), this.rd()
    }
  }
};
function vk(a, b) {
  qj("constructing sender frame: " + b);
  var c;
  c = document.createElement("iframe");
  var d = c.style;
  d.position = "absolute";
  d.top = "-10px";
  d.left = "10px";
  d.width = "1px";
  d.height = "1px";
  c.id = c.name = b;
  c.src = a.Kb + "#INITIAL";
  a.z().document.body.appendChild(c);
  return c
}
function yk(a) {
  qj("deconstructSenderFrames called");
  a.mb && (a.mb.parentNode.removeChild(a.mb), a.mb = l, a.Tc = l);
  a.Za && (a.Za.parentNode.removeChild(a.Za), a.Za = l, a.rc = l)
}
function wk(a, b) {
  qj("checking for receive frame: " + b);
  try {
    var c = tk(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.gf)) {
      return n
    }
  }catch(d) {
    return n
  }
  return k
}
r.rd = function() {
  var a = tk(this);
  !a[sk(this)] || !a[rk(this)] ? (this.qd || (this.qd = x(this.rd, this)), this.z().setTimeout(this.qd, 100), pj("local frames not (yet) present")) : (this.$d = new Ak(this.Kb, this.Tc), this.Qb = new Ak(this.Kb, this.rc), pj("local frames ready"), this.z().setTimeout(x(function() {
    this.$d.send("SETUP");
    this.sb = this.Mf = k;
    pj("SETUP sent")
  }, this), 100))
};
function Bk(a) {
  if(a.ad && a.je) {
    if(a.m.Ca(), a.fb) {
      pj("delivering queued messages (" + a.fb.length + ")");
      for(var b = 0, c;b < a.fb.length;b++) {
        c = a.fb[b], a.m.wa(c.kf, c.Yc)
      }
      delete a.fb
    }
  }else {
    qj("checking if connected: ack sent:" + a.ad + ", ack rcvd: " + a.je)
  }
}
r.ff = function(a) {
  qj("msg received: " + a);
  if("SETUP" == a) {
    this.Qb && (this.Qb.send("SETUP_ACK"), qj("SETUP_ACK sent"), this.ad = k, Bk(this))
  }else {
    if(this.m.sa() || this.ad) {
      var b = a.indexOf("|"), c = a.substring(0, b), a = a.substring(b + 1), b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.Qb.send("ACK:" + c);
        Ck(this, a)
      }else {
        d = c.substring(0, b), this.Qb.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.Xc = []), this.Xc.push(a), b == c && (Ck(this, this.Xc.join("")), delete this.Xc)
      }
    }else {
      Z.log(jj, "received msg, but channel is not connected", h)
    }
  }
};
r.ef = function(a) {
  qj("ack received: " + a);
  "SETUP_ACK" == a ? (this.sb = n, this.je = k, Bk(this)) : this.m.sa() ? this.sb ? parseInt(a.split(":")[1], 10) == this.kc ? (this.sb = n, Dk(this)) : Z.log(jj, "got ack with wrong sequence", h) : Z.log(jj, "got unexpected ack", h) : Z.log(jj, "received ack, but channel not connected", h)
};
function Dk(a) {
  if(!a.sb && a.ic.length) {
    var b = a.ic.shift();
    ++a.kc;
    a.$d.send(a.kc + b);
    qj("msg sent: " + a.kc + b);
    a.sb = k
  }
}
function Ck(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.m.sa() ? a.m.wa(d, c) : ((a.fb || (a.fb = [])).push({kf:d, Yc:c}), qj("queued delivery"))
}
r.Mb = 3800;
r.send = function(a, b) {
  var c = a + ":" + b;
  if(!Y || b.length <= this.Mb) {
    this.ic.push("|" + c)
  }else {
    for(var d = b.length, f = Math.ceil(d / this.Mb), g = 0, i = 1;g < d;) {
      this.ic.push("," + i + "/" + f + "|" + c.substr(g, this.Mb)), i++, g += this.Mb
    }
  }
  Dk(this)
};
r.B = function() {
  ok.fa.B.call(this);
  var a = Ek;
  Ha(a, this.Zd);
  Ha(a, this.jd);
  this.Zd = this.jd = l;
  lk(this.mb);
  lk(this.Za);
  this.Tc = this.rc = this.mb = this.Za = l
};
var Ek = [], Fk = x(function() {
  var a = n;
  try {
    for(var b = 0, c = Ek.length;b < c;b++) {
      var d;
      if(!(d = a)) {
        var f = Ek[b], g = f.ie.location.href;
        if(g != f.Kd) {
          f.Kd = g;
          var i = g.split("#")[1];
          i && (i = i.substr(1), f.we(decodeURIComponent(i)));
          d = k
        }else {
          d = n
        }
      }
      a = d
    }
  }catch(j) {
    if(Z.info("receive_() failed: " + j), b = Ek[b].T.m, Z.info("Transport Error"), b.close(), !Ek.length) {
      return
    }
  }
  b = oa();
  a && (pk = b);
  qk = window.setTimeout(Fk, 1E3 > b - pk ? 10 : 100)
}, ok);
function Gk() {
  pj("starting receive-timer");
  pk = oa();
  qk && window.clearTimeout(qk);
  qk = window.setTimeout(Fk, 10)
}
function Ak(a, b) {
  this.Kb = a;
  this.ne = b;
  this.Mc = 0
}
Ak.prototype.send = function(a) {
  this.Mc = ++this.Mc % 2;
  a = this.Kb + "#" + this.Mc + encodeURIComponent(a);
  try {
    ki ? this.ne.location.href = a : this.ne.location.replace(a)
  }catch(b) {
    Z.log(ij, "sending failed", b)
  }
  Gk()
};
function zk(a, b, c) {
  this.T = a;
  this.ie = b;
  this.we = c;
  this.Kd = this.ie.location.href.split("#")[0] + "#INITIAL";
  Ek.push(this);
  Gk()
}
;function Hk(a) {
  this.$ = n;
  this.Bb = a;
  this.C = []
}
pa(Hk, Zh);
var Ik = [];
function Jk(a, b, c, d, f, g) {
  if(ea(c)) {
    for(var i = 0;i < c.length;i++) {
      Jk(a, b, c[i], d, f, g)
    }
  }else {
    b = Mi(b, c, d || a, f, g || a.Bb || a), a.C.push(b)
  }
}
Hk.prototype.B = function() {
  Hk.fa.B.call(this);
  Ea(this.C, Oi);
  this.C.length = 0
};
Hk.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Kk(a, b) {
  mk.call(this, b);
  this.m = a;
  this.Ib = [];
  this.Re = x(this.Se, this)
}
pa(Kk, mk);
r = Kk.prototype;
r.rb = 2;
r.$c = n;
r.Ga = 0;
r.ra = function() {
  0 == xk(this.m) ? (this.Aa = this.m.jb, this.Aa.XPC_toOuter = x(this.Vd, this)) : this.nd()
};
r.nd = function() {
  var a = k;
  try {
    this.Aa || (this.Aa = this.z().frameElement), this.Aa && this.Aa.XPC_toOuter && (this.Vc = this.Aa.XPC_toOuter, this.Aa.XPC_toOuter.XPC_toInner = x(this.Vd, this), a = n, this.send("tp", "SETUP_ACK"), this.m.Ca())
  }catch(b) {
    Z.log(ij, "exception caught while attempting setup: " + b, h)
  }
  a && (this.md || (this.md = x(this.nd, this)), this.z().setTimeout(this.md, 100))
};
r.fd = function(a) {
  0 == xk(this.m) && !this.m.sa() && "SETUP_ACK" == a ? (this.Vc = this.Aa.XPC_toOuter.XPC_toInner, this.m.Ca()) : e(Error("Got unexpected transport message."))
};
r.Vd = function(a, b) {
  !this.$c && 0 == this.Ib.length ? this.m.wa(a, b) : (this.Ib.push({lf:a, Yc:b}), 1 == this.Ib.length && (this.Ga = this.z().setTimeout(this.Re, 1)))
};
r.Se = function() {
  for(;this.Ib.length;) {
    var a = this.Ib.shift();
    this.m.wa(a.lf, a.Yc)
  }
};
r.send = function(a, b) {
  this.$c = k;
  this.Vc(a, b);
  this.$c = n
};
r.B = function() {
  Kk.fa.B.call(this);
  this.Aa = this.Vc = l
};
function Lk(a, b) {
  mk.call(this, b);
  this.m = a;
  this.bf = this.m.r[$.Nb];
  this.ge = this.m.r[$.Ha];
  ki && (Mk || (Mk = window.setTimeout(function() {
    Nk()
  }, 1E3)))
}
pa(Lk, mk);
if(ki) {
  var Ok = [], Mk = 0, Nk = function(a) {
    for(var b = oa(), a = a || 3E3;Ok.length && b - Ok[0].timestamp >= a;) {
      var c = Ok.shift().Ye;
      lk(c);
      qj("iframe removed")
    }
    Mk = window.setTimeout(Pk, 1E3)
  }, Pk = function() {
    Nk()
  }
}
var Qk = {};
r = Lk.prototype;
r.rb = 3;
r.ra = function() {
  this.z().xpcRelay || (this.z().xpcRelay = Rk);
  this.send("tp", "SETUP")
};
function Rk(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), f = b.substr(c + 1);
  if(!Y || -1 == (c = d.indexOf("|"))) {
    var g = d
  }else {
    var g = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), i = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), j = Qk[i];
    j || (j = Qk[i] = {Sd:[], ke:0, Rd:0});
    -1 != d.indexOf("++") && (j.Rd = c + 1);
    j.Sd[c] = f;
    j.ke++;
    if(j.ke != j.Rd) {
      return
    }
    f = j.Sd.join("");
    delete Qk[i]
  }
  Fj[a].wa(g, decodeURIComponent(f))
}
r.fd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.m.Ca()) : "SETUP_ACK" == a && this.m.Ca()
};
r.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(Y && 1800 < d) {
    for(var f = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ oa()).toString(36), g = 0, i = 0;g < d;i++) {
      var j = c.substr(g, 1800), g = g + 1800;
      Sk(this, a, j, f + (g >= d ? "++" : "+") + i)
    }
  }else {
    Sk(this, a, c)
  }
};
function Sk(a, b, c, d) {
  if(Y) {
    var f = a.z().document.createElement("div");
    f.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
    f = f.childNodes[0];
    f.xpcOnload = Tk
  }else {
    f = a.z().document.createElement("iframe"), ki ? Ok.push({timestamp:oa(), Ye:f}) : Ki(f, "load", Tk)
  }
  var g = f.style;
  g.visibility = "hidden";
  g.width = f.style.height = "0px";
  g.position = "absolute";
  g = a.bf;
  g += "#" + a.m.name;
  a.ge && (g += "," + a.ge);
  g += "|" + b;
  d && (g += "|" + d);
  g += ":" + c;
  f.src = g;
  a.z().document.body.appendChild(f);
  qj("msg sent: " + g)
}
function Tk() {
  qj("iframe-load");
  lk(this);
  this.Of = l
}
r.B = function() {
  Lk.fa.B.call(this);
  ki && Nk(0)
};
function Uk(a, b, c, d, f) {
  mk.call(this, c);
  this.m = a;
  this.Wa = f || 2;
  this.fe = b || "*";
  this.Oc = new Hk(this);
  this.Gb = new Ti(100, this.z());
  this.bc = !!d;
  this.Pa = new Ij;
  this.Qa = new Ij;
  this.La = new Ij;
  this.Ve = Gj(10);
  this.dc = l;
  this.bc ? 1 == xk(this.m) ? Pj(this.La, this.Pa) : Pj(this.La, this.Qa) : (Pj(this.La, this.Pa), 2 == this.Wa && Pj(this.La, this.Qa));
  Oj(this.La, this.ce, l, this);
  this.La.pa(k);
  a = this.Oc;
  b = this.Gb;
  c = this.Yd;
  d = Vi;
  ea(d) || (Ik[0] = d, d = Ik);
  for(f = 0;f < d.length;f++) {
    var g = Ki(b, d[f], c || a, n, a.Bb || a);
    a.C.push(g)
  }
  Z.info("NativeMessagingTransport created.  protocolVersion=" + this.Wa + ", oneSidedHandshake=" + this.bc + ", role=" + xk(this.m))
}
pa(Uk, mk);
Uk.prototype.Z = l;
Uk.prototype.Ta = n;
Uk.prototype.rb = 1;
var Vk = {};
function Wk(a) {
  var b = a.Xb.data;
  if(!u(b)) {
    return n
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return n
  }
  var f = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  pj("messageReceived: channel=" + f + ", service=" + c + ", payload=" + b);
  if(d = Fj[f]) {
    return d.wa(c, b, a.Xb.origin), k
  }
  var a = Xk(b)[0], g;
  for(g in Fj) {
    if(d = Fj[g], 1 == xk(d) && !d.sa() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return pj("changing channel name to " + f), d.name = f, delete Fj[g], Fj[f] = d, d.wa(c, b), k
    }
  }
  Z.info('channel name mismatch; message ignored"');
  return n
}
r = Uk.prototype;
r.fd = function(a) {
  var b = Xk(a), a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      Yk(this, 1);
      this.Pa.ja || this.Pa.pa(k);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.Wa && (Yk(this, 2), this.Pa.ja || this.Pa.pa(k));
      break;
    case "SETUP":
      Yk(this, 1);
      Zk(this, 1);
      break;
    case "SETUP_NTPV2":
      if(2 == this.Wa) {
        b = this.Z;
        Yk(this, 2);
        Zk(this, 2);
        if((1 == b || this.dc != l) && this.dc != a) {
          Z.info("Sending SETUP and changing peer ID to: " + a), $k(this)
        }
        this.dc = a
      }
  }
};
function $k(a) {
  if(2 == a.Wa && (a.Z == l || 2 == a.Z)) {
    var b;
    b = "SETUP_NTPV2," + a.Ve;
    a.send("tp", b)
  }
  (a.Z == l || 1 == a.Z) && a.send("tp", "SETUP")
}
function Zk(a, b) {
  if(2 == a.Wa && (a.Z == l || 2 == a.Z) && 2 == b) {
    a.send("tp", "SETUP_ACK_NTPV2")
  }else {
    if((a.Z == l || 1 == a.Z) && 1 == b) {
      a.send("tp", "SETUP_ACK")
    }else {
      return
    }
  }
  a.Qa.ja || a.Qa.pa(k)
}
function Yk(a, b) {
  b > a.Z && (a.Z = b);
  1 == a.Z && (!a.Qa.ja && !a.bc && a.Qa.pa(k), a.dc = l)
}
r.ra = function() {
  var a = this.z(), b = ia(a), c = Vk[b];
  "number" == typeof c || (c = 0);
  0 == c && Ki(a.postMessage ? a : a.document, "message", Wk, n, Uk);
  Vk[b] = c + 1;
  this.Ta = k;
  this.Yd()
};
r.Yd = function() {
  var a = 0 == xk(this.m);
  this.bc && a || this.m.sa() || this.$ ? this.Gb.stop() : (this.Gb.start(), $k(this))
};
r.send = function(a, b) {
  var c = this.m.Da;
  c ? (this.send = function(a, b) {
    var g = this, i = this.m.name;
    this.jc = Wi(function() {
      g.jc = 0;
      try {
        var j = c.postMessage ? c : c.document;
        j.postMessage ? (j.postMessage(i + "|" + a + ":" + b, g.fe), pj("send(): service=" + a + " payload=" + b + " to hostname=" + g.fe)) : Z.log(jj, "Peer window had no postMessage function.", h)
      }catch(m) {
        Z.log(jj, "Error performing postMessage, ignoring.", m)
      }
    }, 0)
  }, this.send(a, b)) : pj("send(): window not ready")
};
r.ce = function() {
  this.m.Ca(1 == this.Wa || 1 == this.Z ? 200 : h)
};
r.B = function() {
  if(this.Ta) {
    var a = this.z(), b = ia(a), c = Vk[b];
    Vk[b] = c - 1;
    1 == c && Ni(a.postMessage ? a : a.document, "message", Wk, n, Uk)
  }
  this.jc && (Ui.clearTimeout(this.jc), this.jc = 0);
  ai(this.Oc);
  delete this.Oc;
  ai(this.Gb);
  delete this.Gb;
  this.Pa.cancel();
  delete this.Pa;
  this.Qa.cancel();
  delete this.Qa;
  this.La.cancel();
  delete this.La;
  delete this.send;
  Uk.fa.B.call(this)
};
function Xk(a) {
  a = a.split(",");
  a[1] = a[1] || l;
  return a
}
;function al(a, b) {
  mk.call(this, b);
  this.m = a;
  this.od = a[$.qe] || "";
  this.me = a[$.se] || "";
  var c = this.z();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + bl + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    cl + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = k
    }catch(f) {
      Z.log(ij, "exception caught while attempting global setup: " + f, h)
    }
  }
  this[bl] = this.Xe;
  this[cl] = this.Pe
}
pa(al, mk);
var bl = "GCXPC____NIXJS_handle_message", cl = "GCXPC____NIXJS_create_channel";
r = al.prototype;
r.rb = 6;
r.lb = n;
r.Oa = l;
r.ra = function() {
  0 == xk(this.m) ? this.ld() : this.kd()
};
r.ld = function() {
  if(!this.lb) {
    var a = this.m.jb;
    try {
      a.contentWindow.opener = this.z().GCXPC____NIXVBS_get_wrapper(this, this.od), this.lb = k
    }catch(b) {
      Z.log(ij, "exception caught while attempting setup: " + b, h)
    }
    this.lb || this.z().setTimeout(x(this.ld, this), 100)
  }
};
r.kd = function() {
  if(!this.lb) {
    try {
      var a = this.z().opener;
      if(a && "GCXPC____NIXVBS_container" in a) {
        this.Oa = a;
        if(this.Oa.GetAuthToken() != this.me) {
          Z.log(ij, "Invalid auth token from other party", h);
          return
        }
        this.Oa.CreateChannel(this.z().GCXPC____NIXVBS_get_wrapper(this, this.od));
        this.lb = k;
        this.m.Ca()
      }
    }catch(b) {
      Z.log(ij, "exception caught while attempting setup: " + b, h);
      return
    }
    this.lb || this.z().setTimeout(x(this.kd, this), 100)
  }
};
r.Pe = function(a) {
  ("unknown" != typeof a || !("GCXPC____NIXVBS_container" in a)) && Z.log(ij, "Invalid NIX channel given to createChannel_", h);
  this.Oa = a;
  this.Oa.GetAuthToken() != this.me ? Z.log(ij, "Invalid auth token from other party", h) : this.m.Ca()
};
r.Xe = function(a, b) {
  this.z().setTimeout(x(function() {
    this.m.wa(a, b, h)
  }, this), 1)
};
r.send = function(a, b) {
  "unknown" !== typeof this.Oa && Z.log(ij, "NIX channel not connected", h);
  this.Oa.SendMessage(a, b)
};
r.B = function() {
  al.fa.B.call(this);
  this.Oa = l
};
function dl(a, b) {
  nk.call(this);
  for(var c = 0, d;d = Ej[c];c++) {
    d in a && !/^https?:\/\//.test(a[d]) && e(Error("URI " + a[d] + " is invalid for field " + d))
  }
  this.r = a;
  this.name = this.r[$.hd] || Gj(10);
  this.ya = b || jk();
  this.Wb = [];
  this.ec = new Hk(this);
  a[$.Ra] = a[$.Ra] || Cj(this.ya.z().location.href) + "/robots.txt";
  a[$.Sa] = a[$.Sa] || Cj(a[$.Ob] || "") + "/robots.txt";
  Fj[this.name] = this;
  Ki(window, "unload", el);
  Z.info("CrossPageChannel created: " + this.name)
}
pa(dl, nk);
var fl = /^%*tp$/, gl = /^%+tp$/;
r = dl.prototype;
r.Ma = l;
r.ta = l;
r.T = l;
r.ed = 1;
r.sa = function() {
  return 2 == this.ed
};
r.Da = l;
r.jb = l;
function uk(a) {
  try {
    return!!a.Da && !Boolean(a.Da.closed)
  }catch(b) {
    return n
  }
}
function hl(a) {
  a.ta && (a.ta.cancel(), a.ta = l);
  a.Wb.length = 0;
  a = a.ec;
  Ea(a.C, Oi);
  a.C.length = 0
}
r.ra = function(a) {
  this.Lc = a || da;
  this.ta ? Oj(this.ta, this.Id, l, h) : this.Id()
};
r.Id = function() {
  Z.info("continueConnection_()");
  this.ta = l;
  this.r[$.Ha] && (this.jb = u(this.r[$.Ha]) ? this.ya.xb.getElementById(this.r[$.Ha]) : this.r[$.Ha]);
  if(this.jb) {
    var a = this.jb.contentWindow;
    a || (a = window.frames[this.r[$.Ha]]);
    this.Da = a
  }
  this.Da || (window == window.top && e(Error("CrossPageChannel: Can't connect, peer window-object not set.")), this.Da = window.parent);
  if(!this.T) {
    if(!this.r[$.tb]) {
      var a = this.r, b = $.tb, c;
      if(ga(document.postMessage) || ga(window.postMessage) || Y && window.postMessage) {
        c = 1
      }else {
        if(ji) {
          c = 2
        }else {
          if(Y && this.r[$.Nb]) {
            c = 3
          }else {
            var d;
            if(d = Y) {
              d = n;
              try {
                c = window.opener, window.opener = {}, d = Ci(window, "opener"), window.opener = c
              }catch(f) {
              }
            }
            c = d ? 6 : 4
          }
        }
      }
      a[b] = c
    }
    switch(this.r[$.tb]) {
      case 1:
        this.T = new Uk(this, this.r[$.pc], this.ya, !!this.r[$.oc], this.r[$.re] || 2);
        break;
      case 6:
        this.T = new al(this, this.ya);
        break;
      case 2:
        this.T = new Kk(this, this.ya);
        break;
      case 3:
        this.T = new Lk(this, this.ya);
        break;
      case 4:
        this.T = new ok(this, this.ya)
    }
    this.T ? Z.info("Transport created: " + this.T.getName()) : e(Error("CrossPageChannel: No suitable transport found!"))
  }
  for(this.T.ra();0 < this.Wb.length;) {
    this.Wb.shift()()
  }
};
r.close = function() {
  hl(this);
  this.ed = 3;
  ai(this.T);
  this.Lc = this.T = l;
  ai(this.Ma);
  this.Ma = l;
  Z.info('Channel "' + this.name + '" closed')
};
r.Ca = function(a) {
  this.sa() || this.Ma && this.Ma.Wd() || (this.ed = 2, Z.info('Channel "' + this.name + '" connected'), ai(this.Ma), a ? (this.Ma = new gk(this.Lc, a), this.Ma.start()) : (this.Ma = l, this.Lc()))
};
r.ce = dl.prototype.Ca;
r.send = function(a, b) {
  this.sa() ? uk(this) ? (ha(b) && (b = vj(b)), this.T.send(il(a), b)) : (Z.log(ij, "Peer has disappeared.", h), this.close()) : Z.log(ij, "Can't send. Channel not connected.", h)
};
r.wa = function(a, b, c) {
  if(this.ta) {
    this.Wb.push(x(this.wa, this, a, b, c))
  }else {
    var d = this.r[$.pc];
    if(/^[\s\xa0]*$/.test(c == l ? "" : String(c)) || /^[\s\xa0]*$/.test(d == l ? "" : String(d)) || c == this.r[$.pc]) {
      if(this.$) {
        Z.log(jj, "CrossPageChannel::deliver_(): Disposed.", h)
      }else {
        if(!a || "tp" == a) {
          this.T.fd(b)
        }else {
          if(this.sa()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = gl.test(a) ? a.substring(1) : a, c = this.bd[a], c || (this.Nd ? c = {pa:na(this.Nd, a), de:ha(b)} : (this.ac.log(jj, 'Unknown service name "' + a + '"', h), c = l)), c) {
              var f;
              a: {
                if((d = c.de) && u(b)) {
                  try {
                    f = uj(b);
                    break a
                  }catch(g) {
                    this.ac.log(jj, "Expected JSON payload for " + a + ', was "' + b + '"', h);
                    f = l;
                    break a
                  }
                }else {
                  if(!d && !u(b)) {
                    f = vj(b);
                    break a
                  }
                }
                f = b
              }
              f != l && c.pa(f)
            }
          }else {
            Z.info("CrossPageChannel::deliver_(): Not connected.")
          }
        }
      }
    }else {
      Z.log(jj, 'Message received from unapproved origin "' + c + '" - rejected.', h)
    }
  }
};
function il(a) {
  fl.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function xk(a) {
  var b = a.r[$.qc];
  return b ? b : window.parent == a.Da ? 1 : 0
}
r.B = function() {
  this.close();
  this.jb = this.Da = l;
  delete Fj[this.name];
  ai(this.ec);
  delete this.ec;
  dl.fa.B.call(this)
};
function el() {
  for(var a in Fj) {
    ai(Fj[a])
  }
}
;hf(Uf, Pe.a(function(a) {
  var b = Ic.e(a, 0, l), a = Ic.e(a, 1, l);
  return yf([Rd.b(b.toLowerCase()), a])
}, Ng.g(R([Dh.b({rf:"complete", xf:"success", sf:"error", qf:"abort", vf:"ready", wf:"readystatechange", TIMEOUT:"timeout", tf:"incrementaldata", uf:"progress"})], 0))));
var jl, kl = l;
function ll(a) {
  if(a ? a.Bd : a) {
    return a.Bd(a)
  }
  var b;
  var c = jl[t(a == l ? l : a)];
  c ? b = c : (c = jl._) ? b = c : e(A("IConnection.connect", a));
  return b.call(l, a)
}
function ml(a, b) {
  if(a ? a.Cd : a) {
    return a.Cd(a, b)
  }
  var c;
  var d = jl[t(a == l ? l : a)];
  d ? c = d : (d = jl._) ? c = d : e(A("IConnection.connect", a));
  return c.call(l, a, b)
}
function nl(a, b, c) {
  if(a ? a.Dd : a) {
    return a.Dd(a, b, c)
  }
  var d;
  var f = jl[t(a == l ? l : a)];
  f ? d = f : (f = jl._) ? d = f : e(A("IConnection.connect", a));
  return d.call(l, a, b, c)
}
function ol(a, b, c, d) {
  if(a ? a.Ed : a) {
    return a.Ed(a, b, c, d)
  }
  var f;
  var g = jl[t(a == l ? l : a)];
  g ? f = g : (g = jl._) ? f = g : e(A("IConnection.connect", a));
  return f.call(l, a, b, c, d)
}
kl = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return ll.call(this, a);
    case 2:
      return ml.call(this, a, b);
    case 3:
      return nl.call(this, a, b, c);
    case 4:
      return ol.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
kl.b = ll;
kl.a = ml;
kl.e = nl;
kl.o = ol;
jl = kl;
var pl, ql = l;
function rl(a, b) {
  if(a ? a.Le : a) {
    return a.Le(a, b)
  }
  var c;
  var d = pl[t(a == l ? l : a)];
  d ? c = d : (d = pl._) ? c = d : e(A("IConnection.transmit", a));
  return c.call(l, a, b)
}
function sl(a, b, c) {
  if(a ? a.Fd : a) {
    return a.Fd(a, b, c)
  }
  var d;
  var f = pl[t(a == l ? l : a)];
  f ? d = f : (f = pl._) ? d = f : e(A("IConnection.transmit", a));
  return d.call(l, a, b, c)
}
function tl(a, b, c, d) {
  if(a ? a.Me : a) {
    return a.Me(a, b, c, d)
  }
  var f;
  var g = pl[t(a == l ? l : a)];
  g ? f = g : (g = pl._) ? f = g : e(A("IConnection.transmit", a));
  return f.call(l, a, b, c, d)
}
function ul(a, b, c, d, f) {
  if(a ? a.Ne : a) {
    return a.Ne(a, b, c, d, f)
  }
  var g;
  var i = pl[t(a == l ? l : a)];
  i ? g = i : (i = pl._) ? g = i : e(A("IConnection.transmit", a));
  return g.call(l, a, b, c, d, f)
}
function vl(a, b, c, d, f, g) {
  if(a ? a.Oe : a) {
    return a.Oe(a, b, c, d, f, g)
  }
  var i;
  var j = pl[t(a == l ? l : a)];
  j ? i = j : (j = pl._) ? i = j : e(A("IConnection.transmit", a));
  return i.call(l, a, b, c, d, f, g)
}
ql = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return rl.call(this, a, b);
    case 3:
      return sl.call(this, a, b, c);
    case 4:
      return tl.call(this, a, b, c, d);
    case 5:
      return ul.call(this, a, b, c, d, f);
    case 6:
      return vl.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ql.a = rl;
ql.e = sl;
ql.o = tl;
ql.ha = ul;
ql.qa = vl;
pl = ql;
var wl = hf(Uf, Pe.a(function(a) {
  var b = Ic.e(a, 0, l), a = Ic.e(a, 1, l);
  return yf([Rd.b(b.toLowerCase()), a])
}, Dh.b($))), xl, yl = l;
function zl(a, b, c) {
  if(a ? a.Gd : a) {
    return a.Gd(a, b, c)
  }
  var d;
  var f = xl[t(a == l ? l : a)];
  f ? d = f : (f = xl._) ? d = f : e(A("ICrossPageChannel.register-service", a));
  return d.call(l, a, b, c)
}
function Al(a, b, c, d) {
  if(a ? a.Hd : a) {
    return a.Hd(a, b, c, d)
  }
  var f;
  var g = xl[t(a == l ? l : a)];
  g ? f = g : (g = xl._) ? f = g : e(A("ICrossPageChannel.register-service", a));
  return f.call(l, a, b, c, d)
}
yl = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return zl.call(this, a, b, c);
    case 4:
      return Al.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yl.e = zl;
yl.o = Al;
xl = yl;
r = dl.prototype;
r.Bd = function(a) {
  return jl.a(a, l)
};
r.Cd = function(a, b) {
  return a.ra(b)
};
r.Dd = function(a, b, c) {
  return jl.o(a, b, c, document.body)
};
r.Ed = function(a, b, c, d) {
  Z.info("createPeerIframe()");
  var f = a.r[$.Ha];
  f || (f = a.r[$.Ha] = "xpcpeer" + Gj(4));
  var g = jk(d).createElement("IFRAME");
  g.id = g.name = f;
  c ? c(g) : g.style.width = g.style.height = "100%";
  hl(a);
  a.ta = new Ij(h, a);
  var i, c = a.r[$.Ob];
  u(c) && (c = a.r[$.Ob] = new Sj(c));
  var j = {};
  j[$.hd] = a.name;
  j[$.tb] = a.r[$.tb];
  j[$.oc] = a.r[$.oc];
  a.r[$.nc] && (j[$.Nb] = a.r[$.nc]);
  a.r[$.Ra] && (j[$.Sa] = a.r[$.Ra]);
  a.r[$.Sa] && (j[$.Ra] = a.r[$.Sa]);
  var m = a.r[$.qc];
  m && (j[$.qc] = 1 == m ? 0 : 1);
  m = c;
  j = vj(j);
  Uj(m);
  m.Ea.set("xpc", j);
  i = c;
  Jk(a.ec, g, "load", a.ta.pa, n, a.ta);
  ji || ki ? window.setTimeout(x(function() {
    d.appendChild(g);
    g.src = i.toString();
    Z.info("peer iframe created (" + f + ")")
  }, a), 1) : (g.src = i.toString(), d.appendChild(g), Z.info("peer iframe created (" + f + ")"));
  return a.ra(b)
};
r.Fd = function(a, b, c) {
  return a.send(Og(b), c)
};
r.Gd = function(a, b, c) {
  return xl.o(a, b, c, n)
};
r.Hd = function(a, b, c, d) {
  b = Og(b);
  a.bd[b] = {pa:c, de:!!d}
};
var Bl, Cl = l;
function Dl() {
  var a = (new Sj(window.location.href)).Ea.get("xpc");
  return y(a) ? new dl(uj(a)) : l
}
function El(a) {
  return new dl(vd.e(function(a, c) {
    var d = Ic.e(c, 0, l), f = Ic.e(c, 1, l), d = Mc.a(wl, d);
    y(d) && (a[d] = f);
    return a
  }, {}, a))
}
Cl = function(a) {
  switch(arguments.length) {
    case 0:
      return Dl.call(this);
    case 1:
      return El.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cl.t = Dl;
Cl.b = El;
Bl = Cl;
var Fl = nh.b(l);
function Gl(a) {
  var b = function() {
    try {
      return Xa(["\ufdd0:status", "\ufdd0:success", "\ufdd0:value", "" + H(eval(a))])
    }catch(b) {
      if(b instanceof Error) {
        return Xa(["\ufdd0:status", "\ufdd0:exception", "\ufdd0:value", lh.g(R([b], 0)), "\ufdd0:stacktrace", y(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."])
      }
      e(b)
    }
  }();
  return lh.g(R([b], 0))
}
nh.b(0);
var Hl = Bl.b(Xa(["\ufdd0:peer_uri", "http://localhost:9000/repl"]));
th.a(Fl, Oe(Hl));
xl.e(Hl, "\ufdd0:evaluate-javascript", function(a) {
  return pl.e(Hl, "\ufdd0:send-result", Gl(a))
});
jl.e(Hl, Oe(l), function(a) {
  return a.style.display = "none"
});
