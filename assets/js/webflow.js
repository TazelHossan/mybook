/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var k_ = Object.create;
	var rn = Object.defineProperty;
	var X_ = Object.getOwnPropertyDescriptor;
	var W_ = Object.getOwnPropertyNames;
	var B_ = Object.getPrototypeOf,
		j_ = Object.prototype.hasOwnProperty;
	var he = (e, t) => () => (e && (t = e(e = 0)), t);
	var u = (e, t) => () => (t || e((t = {
			exports: {}
		}).exports, t), t.exports),
		Me = (e, t) => {
			for (var r in t) rn(e, r, {
				get: t[r],
				enumerable: !0
			})
		},
		xs = (e, t, r, n) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of W_(t)) !j_.call(e, i) && i !== r && rn(e, i, {
					get: () => t[i],
					enumerable: !(n = X_(t, i)) || n.enumerable
				});
			return e
		};
	var ue = (e, t, r) => (r = e != null ? k_(B_(e)) : {}, xs(t || !e || !e.__esModule ? rn(r, "default", {
			value: e,
			enumerable: !0
		}) : r, e)),
		Je = e => xs(rn({}, "__esModule", {
			value: !0
		}), e);
	var Si = u(() => {
		"use strict";
		window.tram = function(e) {
			function t(l, E) {
				var T = new U.Bare;
				return T.init(l, E)
			}

			function r(l) {
				return l.replace(/[A-Z]/g, function(E) {
					return "-" + E.toLowerCase()
				})
			}

			function n(l) {
				var E = parseInt(l.slice(1), 16),
					T = E >> 16 & 255,
					O = E >> 8 & 255,
					b = 255 & E;
				return [T, O, b]
			}

			function i(l, E, T) {
				return "#" + (1 << 24 | l << 16 | E << 8 | T).toString(16).slice(1)
			}

			function o() {}

			function a(l, E) {
				f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E)
			}

			function s(l, E, T) {
				f("Units do not match [" + l + "]: " + E + ", " + T)
			}

			function c(l, E, T) {
				if (E !== void 0 && (T = E), l === void 0) return T;
				var O = T;
				return xt.test(l) || !ct.test(l) ? O = parseInt(l, 10) : ct.test(l) && (O = 1e3 * parseFloat(l)), 0 > O && (O = 0), O === O ? O : T
			}

			function f(l) {
				ce.debug && window && window.console.warn(l)
			}

			function p(l) {
				for (var E = -1, T = l ? l.length : 0, O = []; ++E < T;) {
					var b = l[E];
					b && O.push(b)
				}
				return O
			}
			var d = function(l, E, T) {
					function O(re) {
						return typeof re == "object"
					}

					function b(re) {
						return typeof re == "function"
					}

					function w() {}

					function $(re, pe) {
						function k() {
							var Ce = new oe;
							return b(Ce.init) && Ce.init.apply(Ce, arguments), Ce
						}

						function oe() {}
						pe === T && (pe = re, re = Object), k.Bare = oe;
						var ae, _e = w[l] = re[l],
							Ze = oe[l] = k[l] = new w;
						return Ze.constructor = k, k.mixin = function(Ce) {
							return oe[l] = k[l] = $(k, Ce)[l], k
						}, k.open = function(Ce) {
							if (ae = {}, b(Ce) ? ae = Ce.call(k, Ze, _e, k, re) : O(Ce) && (ae = Ce), O(ae))
								for (var yr in ae) E.call(ae, yr) && (Ze[yr] = ae[yr]);
							return b(Ze.init) || (Ze.init = re), k
						}, k.open(pe)
					}
					return $
				}("prototype", {}.hasOwnProperty),
				h = {
					ease: ["ease", function(l, E, T, O) {
						var b = (l /= O) * l,
							w = b * l;
						return E + T * (-2.75 * w * b + 11 * b * b + -15.5 * w + 8 * b + .25 * l)
					}],
					"ease-in": ["ease-in", function(l, E, T, O) {
						var b = (l /= O) * l,
							w = b * l;
						return E + T * (-1 * w * b + 3 * b * b + -3 * w + 2 * b)
					}],
					"ease-out": ["ease-out", function(l, E, T, O) {
						var b = (l /= O) * l,
							w = b * l;
						return E + T * (.3 * w * b + -1.6 * b * b + 2.2 * w + -1.8 * b + 1.9 * l)
					}],
					"ease-in-out": ["ease-in-out", function(l, E, T, O) {
						var b = (l /= O) * l,
							w = b * l;
						return E + T * (2 * w * b + -5 * b * b + 2 * w + 2 * b)
					}],
					linear: ["linear", function(l, E, T, O) {
						return T * l / O + E
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, E, T, O) {
						return T * (l /= O) * l + E
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, E, T, O) {
						return -T * (l /= O) * (l - 2) + E
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, E, T, O) {
						return (l /= O / 2) < 1 ? T / 2 * l * l + E : -T / 2 * (--l * (l - 2) - 1) + E
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, E, T, O) {
						return T * (l /= O) * l * l + E
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, E, T, O) {
						return T * ((l = l / O - 1) * l * l + 1) + E
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, E, T, O) {
						return (l /= O / 2) < 1 ? T / 2 * l * l * l + E : T / 2 * ((l -= 2) * l * l + 2) + E
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, E, T, O) {
						return T * (l /= O) * l * l * l + E
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, E, T, O) {
						return -T * ((l = l / O - 1) * l * l * l - 1) + E
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, E, T, O) {
						return (l /= O / 2) < 1 ? T / 2 * l * l * l * l + E : -T / 2 * ((l -= 2) * l * l * l - 2) + E
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, E, T, O) {
						return T * (l /= O) * l * l * l * l + E
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, E, T, O) {
						return T * ((l = l / O - 1) * l * l * l * l + 1) + E
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, E, T, O) {
						return (l /= O / 2) < 1 ? T / 2 * l * l * l * l * l + E : T / 2 * ((l -= 2) * l * l * l * l + 2) + E
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, E, T, O) {
						return -T * Math.cos(l / O * (Math.PI / 2)) + T + E
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, E, T, O) {
						return T * Math.sin(l / O * (Math.PI / 2)) + E
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, E, T, O) {
						return -T / 2 * (Math.cos(Math.PI * l / O) - 1) + E
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, E, T, O) {
						return l === 0 ? E : T * Math.pow(2, 10 * (l / O - 1)) + E
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, E, T, O) {
						return l === O ? E + T : T * (-Math.pow(2, -10 * l / O) + 1) + E
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, E, T, O) {
						return l === 0 ? E : l === O ? E + T : (l /= O / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + E : T / 2 * (-Math.pow(2, -10 * --l) + 2) + E
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, E, T, O) {
						return -T * (Math.sqrt(1 - (l /= O) * l) - 1) + E
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, E, T, O) {
						return T * Math.sqrt(1 - (l = l / O - 1) * l) + E
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, E, T, O) {
						return (l /= O / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + E : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + E
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, E, T, O, b) {
						return b === void 0 && (b = 1.70158), T * (l /= O) * l * ((b + 1) * l - b) + E
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, E, T, O, b) {
						return b === void 0 && (b = 1.70158), T * ((l = l / O - 1) * l * ((b + 1) * l + b) + 1) + E
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, E, T, O, b) {
						return b === void 0 && (b = 1.70158), (l /= O / 2) < 1 ? T / 2 * l * l * (((b *= 1.525) + 1) * l - b) + E : T / 2 * ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) + E
					}]
				},
				g = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				m = document,
				_ = window,
				N = "bkwld-tram",
				A = /[\-\.0-9]/g,
				S = /[A-Z]/,
				I = "number",
				L = /^(rgb|#)/,
				P = /(em|cm|mm|in|pt|pc|px)$/,
				R = /(em|cm|mm|in|pt|pc|px|%)$/,
				X = /(deg|rad|turn)$/,
				B = "unitless",
				z = /(all|none) 0s ease 0s/,
				Q = /^(width|height)$/,
				G = " ",
				x = m.createElement("a"),
				v = ["Webkit", "Moz", "O", "ms"],
				C = ["-webkit-", "-moz-", "-o-", "-ms-"],
				M = function(l) {
					if (l in x.style) return {
						dom: l,
						css: l
					};
					var E, T, O = "",
						b = l.split("-");
					for (E = 0; E < b.length; E++) O += b[E].charAt(0).toUpperCase() + b[E].slice(1);
					for (E = 0; E < v.length; E++)
						if (T = v[E] + O, T in x.style) return {
							dom: T,
							css: C[E] + l
						}
				},
				F = t.support = {
					bind: Function.prototype.bind,
					transform: M("transform"),
					transition: M("transition"),
					backface: M("backface-visibility"),
					timing: M("transition-timing-function")
				};
			if (F.transition) {
				var Z = F.timing.dom;
				if (x.style[Z] = h["ease-in-back"][0], !x.style[Z])
					for (var J in g) h[J][0] = g[J]
			}
			var q = t.frame = function() {
					var l = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
					return l && F.bind ? l.bind(_) : function(E) {
						_.setTimeout(E, 16)
					}
				}(),
				V = t.now = function() {
					var l = _.performance,
						E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
					return E && F.bind ? E.bind(l) : Date.now || function() {
						return +new Date
					}
				}(),
				K = d(function(l) {
					function E(ee, se) {
						var Ee = p(("" + ee).split(G)),
							le = Ee[0];
						se = se || {};
						var Re = W[le];
						if (!Re) return f("Unsupported property: " + le);
						if (!se.weak || !this.props[le]) {
							var Xe = Re[0],
								qe = this.props[le];
							return qe || (qe = this.props[le] = new Xe.Bare), qe.init(this.$el, Ee, Re, se), qe
						}
					}

					function T(ee, se, Ee) {
						if (ee) {
							var le = typeof ee;
							if (se || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), le == "number" && se) return this.timer = new de({
								duration: ee,
								context: this,
								complete: w
							}), void(this.active = !0);
							if (le == "string" && se) {
								switch (ee) {
									case "hide":
										k.call(this);
										break;
									case "stop":
										$.call(this);
										break;
									case "redraw":
										oe.call(this);
										break;
									default:
										E.call(this, ee, Ee && Ee[1])
								}
								return w.call(this)
							}
							if (le == "function") return void ee.call(this, this);
							if (le == "object") {
								var Re = 0;
								Ze.call(this, ee, function(be, H_) {
									be.span > Re && (Re = be.span), be.stop(), be.animate(H_)
								}, function(be) {
									"wait" in be && (Re = c(be.wait, 0))
								}), _e.call(this), Re > 0 && (this.timer = new de({
									duration: Re,
									context: this
								}), this.active = !0, se && (this.timer.complete = w));
								var Xe = this,
									qe = !1,
									tn = {};
								q(function() {
									Ze.call(Xe, ee, function(be) {
										be.active && (qe = !0, tn[be.name] = be.nextStyle)
									}), qe && Xe.$el.css(tn)
								})
							}
						}
					}

					function O(ee) {
						ee = c(ee, 0), this.active ? this.queue.push({
							options: ee
						}) : (this.timer = new de({
							duration: ee,
							context: this,
							complete: w
						}), this.active = !0)
					}

					function b(ee) {
						return this.active ? (this.queue.push({
							options: ee,
							args: arguments
						}), void(this.timer.complete = w)) : f("No active transition timer. Use start() or wait() before then().")
					}

					function w() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var ee = this.queue.shift();
							T.call(this, ee.options, !0, ee.args)
						}
					}

					function $(ee) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var se;
						typeof ee == "string" ? (se = {}, se[ee] = 1) : se = typeof ee == "object" && ee != null ? ee : this.props, Ze.call(this, se, Ce), _e.call(this)
					}

					function re(ee) {
						$.call(this, ee), Ze.call(this, ee, yr, U_)
					}

					function pe(ee) {
						typeof ee != "string" && (ee = "block"), this.el.style.display = ee
					}

					function k() {
						$.call(this), this.el.style.display = "none"
					}

					function oe() {
						this.el.offsetHeight
					}

					function ae() {
						$.call(this), e.removeData(this.el, N), this.$el = this.el = null
					}

					function _e() {
						var ee, se, Ee = [];
						this.upstream && Ee.push(this.upstream);
						for (ee in this.props) se = this.props[ee], se.active && Ee.push(se.string);
						Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[F.transition.dom] = Ee)
					}

					function Ze(ee, se, Ee) {
						var le, Re, Xe, qe, tn = se !== Ce,
							be = {};
						for (le in ee) Xe = ee[le], le in ve ? (be.transform || (be.transform = {}), be.transform[le] = Xe) : (S.test(le) && (le = r(le)), le in W ? be[le] = Xe : (qe || (qe = {}), qe[le] = Xe));
						for (le in be) {
							if (Xe = be[le], Re = this.props[le], !Re) {
								if (!tn) continue;
								Re = E.call(this, le)
							}
							se.call(this, Re, Xe)
						}
						Ee && qe && Ee.call(this, qe)
					}

					function Ce(ee) {
						ee.stop()
					}

					function yr(ee, se) {
						ee.set(se)
					}

					function U_(ee) {
						this.$el.css(ee)
					}

					function ke(ee, se) {
						l[ee] = function() {
							return this.children ? V_.call(this, se, arguments) : (this.el && se.apply(this, arguments), this)
						}
					}

					function V_(ee, se) {
						var Ee, le = this.children.length;
						for (Ee = 0; le > Ee; Ee++) ee.apply(this.children[Ee], se);
						return this
					}
					l.init = function(ee) {
						if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ce.keepInherited && !ce.fallback) {
							var se = H(this.el, "transition");
							se && !z.test(se) && (this.upstream = se)
						}
						F.backface && ce.hideBackface && y(this.el, F.backface.css, "hidden")
					}, ke("add", E), ke("start", T), ke("wait", O), ke("then", b), ke("next", w), ke("stop", $), ke("set", re), ke("show", pe), ke("hide", k), ke("redraw", oe), ke("destroy", ae)
				}),
				U = d(K, function(l) {
					function E(T, O) {
						var b = e.data(T, N) || e.data(T, N, new K.Bare);
						return b.el || b.init(T), O ? b.start(O) : b
					}
					l.init = function(T, O) {
						var b = e(T);
						if (!b.length) return this;
						if (b.length === 1) return E(b[0], O);
						var w = [];
						return b.each(function($, re) {
							w.push(E(re, O))
						}), this.children = w, this
					}
				}),
				D = d(function(l) {
					function E() {
						var w = this.get();
						this.update("auto");
						var $ = this.get();
						return this.update(w), $
					}

					function T(w, $, re) {
						return $ !== void 0 && (re = $), w in h ? w : re
					}

					function O(w) {
						var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
						return ($ ? i($[1], $[2], $[3]) : w).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var b = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					l.init = function(w, $, re, pe) {
						this.$el = w, this.el = w[0];
						var k = $[0];
						re[2] && (k = re[2]), Y[k] && (k = Y[k]), this.name = k, this.type = re[1], this.duration = c($[1], this.duration, b.duration), this.ease = T($[2], this.ease, b.ease), this.delay = c($[3], this.delay, b.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = pe.unit || this.unit || ce.defaultUnit, this.angle = pe.angle || this.angle || ce.defaultAngle, ce.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + G + this.duration + "ms" + (this.ease != "ease" ? G + h[this.ease][0] : "") + (this.delay ? G + this.delay + "ms" : ""))
					}, l.set = function(w) {
						w = this.convert(w, this.type), this.update(w), this.redraw()
					}, l.transition = function(w) {
						this.active = !0, w = this.convert(w, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), w == "auto" && (w = E.call(this))), this.nextStyle = w
					}, l.fallback = function(w) {
						var $ = this.el.style[this.name] || this.convert(this.get(), this.type);
						w = this.convert(w, this.type), this.auto && ($ == "auto" && ($ = this.convert(this.get(), this.type)), w == "auto" && (w = E.call(this))), this.tween = new te({
							from: $,
							to: w,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.get = function() {
						return H(this.el, this.name)
					}, l.update = function(w) {
						y(this.el, this.name, w)
					}, l.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, y(this.el, this.name, this.get()));
						var w = this.tween;
						w && w.context && w.destroy()
					}, l.convert = function(w, $) {
						if (w == "auto" && this.auto) return w;
						var re, pe = typeof w == "number",
							k = typeof w == "string";
						switch ($) {
							case I:
								if (pe) return w;
								if (k && w.replace(A, "") === "") return +w;
								re = "number(unitless)";
								break;
							case L:
								if (k) {
									if (w === "" && this.original) return this.original;
									if ($.test(w)) return w.charAt(0) == "#" && w.length == 7 ? w : O(w)
								}
								re = "hex or rgb string";
								break;
							case P:
								if (pe) return w + this.unit;
								if (k && $.test(w)) return w;
								re = "number(px) or string(unit)";
								break;
							case R:
								if (pe) return w + this.unit;
								if (k && $.test(w)) return w;
								re = "number(px) or string(unit or %)";
								break;
							case X:
								if (pe) return w + this.angle;
								if (k && $.test(w)) return w;
								re = "number(deg) or string(angle)";
								break;
							case B:
								if (pe || k && R.test(w)) return w;
								re = "number(unitless) or string(unit or %)"
						}
						return a(re, w), w
					}, l.redraw = function() {
						this.el.offsetHeight
					}
				}),
				j = d(D, function(l, E) {
					l.init = function() {
						E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), L))
					}
				}),
				ie = d(D, function(l, E) {
					l.init = function() {
						E.init.apply(this, arguments), this.animate = this.fallback
					}, l.get = function() {
						return this.$el[this.name]()
					}, l.update = function(T) {
						this.$el[this.name](T)
					}
				}),
				ne = d(D, function(l, E) {
					function T(O, b) {
						var w, $, re, pe, k;
						for (w in O) pe = ve[w], re = pe[0], $ = pe[1] || w, k = this.convert(O[w], re), b.call(this, $, k, re)
					}
					l.init = function() {
						E.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && ce.perspective && (this.current.perspective = ce.perspective, y(this.el, this.name, this.style(this.current)), this.redraw()))
					}, l.set = function(O) {
						T.call(this, O, function(b, w) {
							this.current[b] = w
						}), y(this.el, this.name, this.style(this.current)), this.redraw()
					}, l.transition = function(O) {
						var b = this.values(O);
						this.tween = new ut({
							current: this.current,
							values: b,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var w, $ = {};
						for (w in this.current) $[w] = w in b ? b[w] : this.current[w];
						this.active = !0, this.nextStyle = this.style($)
					}, l.fallback = function(O) {
						var b = this.values(O);
						this.tween = new ut({
							current: this.current,
							values: b,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.update = function() {
						y(this.el, this.name, this.style(this.current))
					}, l.style = function(O) {
						var b, w = "";
						for (b in O) w += b + "(" + O[b] + ") ";
						return w
					}, l.values = function(O) {
						var b, w = {};
						return T.call(this, O, function($, re, pe) {
							w[$] = re, this.current[$] === void 0 && (b = 0, ~$.indexOf("scale") && (b = 1), this.current[$] = this.convert(b, pe))
						}), w
					}
				}),
				te = d(function(l) {
					function E(k) {
						re.push(k) === 1 && q(T)
					}

					function T() {
						var k, oe, ae, _e = re.length;
						if (_e)
							for (q(T), oe = V(), k = _e; k--;) ae = re[k], ae && ae.render(oe)
					}

					function O(k) {
						var oe, ae = e.inArray(k, re);
						ae >= 0 && (oe = re.slice(ae + 1), re.length = ae, oe.length && (re = re.concat(oe)))
					}

					function b(k) {
						return Math.round(k * pe) / pe
					}

					function w(k, oe, ae) {
						return i(k[0] + ae * (oe[0] - k[0]), k[1] + ae * (oe[1] - k[1]), k[2] + ae * (oe[2] - k[2]))
					}
					var $ = {
						ease: h.ease[1],
						from: 0,
						to: 1
					};
					l.init = function(k) {
						this.duration = k.duration || 0, this.delay = k.delay || 0;
						var oe = k.ease || $.ease;
						h[oe] && (oe = h[oe][1]), typeof oe != "function" && (oe = $.ease), this.ease = oe, this.update = k.update || o, this.complete = k.complete || o, this.context = k.context || this, this.name = k.name;
						var ae = k.from,
							_e = k.to;
						ae === void 0 && (ae = $.from), _e === void 0 && (_e = $.to), this.unit = k.unit || "", typeof ae == "number" && typeof _e == "number" ? (this.begin = ae, this.change = _e - ae) : this.format(_e, ae), this.value = this.begin + this.unit, this.start = V(), k.autoplay !== !1 && this.play()
					}, l.play = function() {
						this.active || (this.start || (this.start = V()), this.active = !0, E(this))
					}, l.stop = function() {
						this.active && (this.active = !1, O(this))
					}, l.render = function(k) {
						var oe, ae = k - this.start;
						if (this.delay) {
							if (ae <= this.delay) return;
							ae -= this.delay
						}
						if (ae < this.duration) {
							var _e = this.ease(ae, 0, 1, this.duration);
							return oe = this.startRGB ? w(this.startRGB, this.endRGB, _e) : b(this.begin + _e * this.change), this.value = oe + this.unit, void this.update.call(this.context, this.value)
						}
						oe = this.endHex || this.begin + this.change, this.value = oe + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, l.format = function(k, oe) {
						if (oe += "", k += "", k.charAt(0) == "#") return this.startRGB = n(oe), this.endRGB = n(k), this.endHex = k, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var ae = oe.replace(A, ""),
								_e = k.replace(A, "");
							ae !== _e && s("tween", oe, k), this.unit = ae
						}
						oe = parseFloat(oe), k = parseFloat(k), this.begin = this.value = oe, this.change = k - oe
					}, l.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = o
					};
					var re = [],
						pe = 1e3
				}),
				de = d(te, function(l) {
					l.init = function(E) {
						this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
					}, l.render = function(E) {
						var T = E - this.start;
						T < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				ut = d(te, function(l, E) {
					l.init = function(T) {
						this.context = T.context, this.update = T.update, this.tweens = [], this.current = T.current;
						var O, b;
						for (O in T.values) b = T.values[O], this.current[O] !== b && this.tweens.push(new te({
							name: O,
							from: this.current[O],
							to: b,
							duration: T.duration,
							delay: T.delay,
							ease: T.ease,
							autoplay: !1
						}));
						this.play()
					}, l.render = function(T) {
						var O, b, w = this.tweens.length,
							$ = !1;
						for (O = w; O--;) b = this.tweens[O], b.context && (b.render(T), this.current[b.name] = b.value, $ = !0);
						return $ ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, l.destroy = function() {
						if (E.destroy.call(this), this.tweens) {
							var T, O = this.tweens.length;
							for (T = O; T--;) this.tweens[T].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				ce = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !F.transition,
					agentTests: []
				};
			t.fallback = function(l) {
				if (!F.transition) return ce.fallback = !0;
				ce.agentTests.push("(" + l + ")");
				var E = new RegExp(ce.agentTests.join("|"), "i");
				ce.fallback = E.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
				return new te(l)
			}, t.delay = function(l, E, T) {
				return new de({
					complete: E,
					duration: l,
					context: T
				})
			}, e.fn.tram = function(l) {
				return t.call(null, this, l)
			};
			var y = e.style,
				H = e.css,
				Y = {
					transform: F.transform && F.transform.css
				},
				W = {
					color: [j, L],
					background: [j, L, "background-color"],
					"outline-color": [j, L],
					"border-color": [j, L],
					"border-top-color": [j, L],
					"border-right-color": [j, L],
					"border-bottom-color": [j, L],
					"border-left-color": [j, L],
					"border-width": [D, P],
					"border-top-width": [D, P],
					"border-right-width": [D, P],
					"border-bottom-width": [D, P],
					"border-left-width": [D, P],
					"border-spacing": [D, P],
					"letter-spacing": [D, P],
					margin: [D, P],
					"margin-top": [D, P],
					"margin-right": [D, P],
					"margin-bottom": [D, P],
					"margin-left": [D, P],
					padding: [D, P],
					"padding-top": [D, P],
					"padding-right": [D, P],
					"padding-bottom": [D, P],
					"padding-left": [D, P],
					"outline-width": [D, P],
					opacity: [D, I],
					top: [D, R],
					right: [D, R],
					bottom: [D, R],
					left: [D, R],
					"font-size": [D, R],
					"text-indent": [D, R],
					"word-spacing": [D, R],
					width: [D, R],
					"min-width": [D, R],
					"max-width": [D, R],
					height: [D, R],
					"min-height": [D, R],
					"max-height": [D, R],
					"line-height": [D, B],
					"scroll-top": [ie, I, "scrollTop"],
					"scroll-left": [ie, I, "scrollLeft"]
				},
				ve = {};
			F.transform && (W.transform = [ne], ve = {
				x: [R, "translateX"],
				y: [R, "translateY"],
				rotate: [X],
				rotateX: [X],
				rotateY: [X],
				scale: [I],
				scaleX: [I],
				scaleY: [I],
				skew: [X],
				skewX: [X],
				skewY: [X]
			}), F.transform && F.backface && (ve.z = [R, "translateZ"], ve.rotateZ = [X], ve.scaleZ = [I], ve.perspective = [P]);
			var xt = /ms/,
				ct = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var Cs = u((NH, Ss) => {
		"use strict";
		var z_ = window.$,
			K_ = Si() && z_.tram;
		Ss.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				o = r.push,
				a = r.slice,
				s = r.concat,
				c = n.toString,
				f = n.hasOwnProperty,
				p = r.forEach,
				d = r.map,
				h = r.reduce,
				g = r.reduceRight,
				m = r.filter,
				_ = r.every,
				N = r.some,
				A = r.indexOf,
				S = r.lastIndexOf,
				I = Array.isArray,
				L = Object.keys,
				P = i.bind,
				R = e.each = e.forEach = function(v, C, M) {
					if (v == null) return v;
					if (p && v.forEach === p) v.forEach(C, M);
					else if (v.length === +v.length) {
						for (var F = 0, Z = v.length; F < Z; F++)
							if (C.call(M, v[F], F, v) === t) return
					} else
						for (var J = e.keys(v), F = 0, Z = J.length; F < Z; F++)
							if (C.call(M, v[J[F]], J[F], v) === t) return;
					return v
				};
			e.map = e.collect = function(v, C, M) {
				var F = [];
				return v == null ? F : d && v.map === d ? v.map(C, M) : (R(v, function(Z, J, q) {
					F.push(C.call(M, Z, J, q))
				}), F)
			}, e.find = e.detect = function(v, C, M) {
				var F;
				return X(v, function(Z, J, q) {
					if (C.call(M, Z, J, q)) return F = Z, !0
				}), F
			}, e.filter = e.select = function(v, C, M) {
				var F = [];
				return v == null ? F : m && v.filter === m ? v.filter(C, M) : (R(v, function(Z, J, q) {
					C.call(M, Z, J, q) && F.push(Z)
				}), F)
			};
			var X = e.some = e.any = function(v, C, M) {
				C || (C = e.identity);
				var F = !1;
				return v == null ? F : N && v.some === N ? v.some(C, M) : (R(v, function(Z, J, q) {
					if (F || (F = C.call(M, Z, J, q))) return t
				}), !!F)
			};
			e.contains = e.include = function(v, C) {
				return v == null ? !1 : A && v.indexOf === A ? v.indexOf(C) != -1 : X(v, function(M) {
					return M === C
				})
			}, e.delay = function(v, C) {
				var M = a.call(arguments, 2);
				return setTimeout(function() {
					return v.apply(null, M)
				}, C)
			}, e.defer = function(v) {
				return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)))
			}, e.throttle = function(v) {
				var C, M, F;
				return function() {
					C || (C = !0, M = arguments, F = this, K_.frame(function() {
						C = !1, v.apply(F, M)
					}))
				}
			}, e.debounce = function(v, C, M) {
				var F, Z, J, q, V, K = function() {
					var U = e.now() - q;
					U < C ? F = setTimeout(K, C - U) : (F = null, M || (V = v.apply(J, Z), J = Z = null))
				};
				return function() {
					J = this, Z = arguments, q = e.now();
					var U = M && !F;
					return F || (F = setTimeout(K, C)), U && (V = v.apply(J, Z), J = Z = null), V
				}
			}, e.defaults = function(v) {
				if (!e.isObject(v)) return v;
				for (var C = 1, M = arguments.length; C < M; C++) {
					var F = arguments[C];
					for (var Z in F) v[Z] === void 0 && (v[Z] = F[Z])
				}
				return v
			}, e.keys = function(v) {
				if (!e.isObject(v)) return [];
				if (L) return L(v);
				var C = [];
				for (var M in v) e.has(v, M) && C.push(M);
				return C
			}, e.has = function(v, C) {
				return f.call(v, C)
			}, e.isObject = function(v) {
				return v === Object(v)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var B = /(.)^/,
				z = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				Q = /\\|'|\r|\n|\u2028|\u2029/g,
				G = function(v) {
					return "\\" + z[v]
				},
				x = /^\s*(\w|\$)+\s*$/;
			return e.template = function(v, C, M) {
				!C && M && (C = M), C = e.defaults({}, C, e.templateSettings);
				var F = RegExp([(C.escape || B).source, (C.interpolate || B).source, (C.evaluate || B).source].join("|") + "|$", "g"),
					Z = 0,
					J = "__p+='";
				v.replace(F, function(U, D, j, ie, ne) {
					return J += v.slice(Z, ne).replace(Q, G), Z = ne + U.length, D ? J += `'+
((__t=(` + D + `))==null?'':_.escape(__t))+
'` : j ? J += `'+
((__t=(` + j + `))==null?'':__t)+
'` : ie && (J += `';
` + ie + `
__p+='`), U
				}), J += `';
`;
				var q = C.variable;
				if (q) {
					if (!x.test(q)) throw new Error("variable is not a bare identifier: " + q)
				} else J = `with(obj||{}){
` + J + `}
`, q = "obj";
				J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
				var V;
				try {
					V = new Function(C.variable || "obj", "_", J)
				} catch (U) {
					throw U.source = J, U
				}
				var K = function(U) {
					return V.call(this, U, e)
				};
				return K.source = "function(" + q + `){
` + J + "}", K
			}, e
		}()
	});
	var Ue = u((PH, Fs) => {
		"use strict";
		var fe = {},
			Ut = {},
			Vt = [],
			Ri = window.Webflow || [],
			yt = window.jQuery,
			Be = yt(window),
			Y_ = yt(document),
			et = yt.isFunction,
			We = fe._ = Cs(),
			Ls = fe.tram = Si() && yt.tram,
			on = !1,
			Li = !1;
		Ls.config.hideBackface = !1;
		Ls.config.keepInherited = !0;
		fe.define = function(e, t, r) {
			Ut[e] && Ps(Ut[e]);
			var n = Ut[e] = t(yt, We, r) || {};
			return Ns(n), n
		};
		fe.require = function(e) {
			return Ut[e]
		};

		function Ns(e) {
			fe.env() && (et(e.design) && Be.on("__wf_design", e.design), et(e.preview) && Be.on("__wf_preview", e.preview)), et(e.destroy) && Be.on("__wf_destroy", e.destroy), e.ready && et(e.ready) && $_(e)
		}

		function $_(e) {
			if (on) {
				e.ready();
				return
			}
			We.contains(Vt, e.ready) || Vt.push(e.ready)
		}

		function Ps(e) {
			et(e.design) && Be.off("__wf_design", e.design), et(e.preview) && Be.off("__wf_preview", e.preview), et(e.destroy) && Be.off("__wf_destroy", e.destroy), e.ready && et(e.ready) && Q_(e)
		}

		function Q_(e) {
			Vt = We.filter(Vt, function(t) {
				return t !== e.ready
			})
		}
		fe.push = function(e) {
			if (on) {
				et(e) && e();
				return
			}
			Ri.push(e)
		};
		fe.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var nn = navigator.userAgent.toLowerCase(),
			qs = fe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			Z_ = fe.env.chrome = /chrome/.test(nn) && /Google/.test(navigator.vendor) && parseInt(nn.match(/chrome\/(\d+)\./)[1], 10),
			J_ = fe.env.ios = /(ipod|iphone|ipad)/.test(nn);
		fe.env.safari = /safari/.test(nn) && !Z_ && !J_;
		var Ci;
		qs && Y_.on("touchstart mousedown", function(e) {
			Ci = e.target
		});
		fe.validClick = qs ? function(e) {
			return e === Ci || yt.contains(e, Ci)
		} : function() {
			return !0
		};
		var Ms = "resize.webflow orientationchange.webflow load.webflow",
			eb = "scroll.webflow " + Ms;
		fe.resize = Ni(Be, Ms);
		fe.scroll = Ni(Be, eb);
		fe.redraw = Ni();

		function Ni(e, t) {
			var r = [],
				n = {};
			return n.up = We.throttle(function(i) {
				We.each(r, function(o) {
					o(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && (We.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = We.filter(r, function(o) {
					return o !== i
				})
			}, n
		}
		fe.location = function(e) {
			window.location = e
		};
		fe.env() && (fe.location = function() {});
		fe.ready = function() {
			on = !0, Li ? tb() : We.each(Vt, Rs), We.each(Ri, Rs), fe.resize.up()
		};

		function Rs(e) {
			et(e) && e()
		}

		function tb() {
			Li = !1, We.each(Ut, Ns)
		}
		var St;
		fe.load = function(e) {
			St.then(e)
		};

		function Ds() {
			St && (St.reject(), Be.off("load", St.resolve)), St = new yt.Deferred, Be.on("load", St.resolve)
		}
		fe.destroy = function(e) {
			e = e || {}, Li = !0, Be.triggerHandler("__wf_destroy"), e.domready != null && (on = e.domready), We.each(Ut, Ps), fe.resize.off(), fe.scroll.off(), fe.redraw.off(), Vt = [], Ri = [], St.state() === "pending" && Ds()
		};
		yt(fe.ready);
		Ds();
		Fs.exports = window.Webflow = fe
	});
	var Vs = u((qH, Us) => {
		"use strict";
		var Gs = Ue();
		Gs.define("brand", Us.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				o = ".w-webflow-badge",
				a = window.location,
				s = /PhantomJS/i.test(navigator.userAgent),
				c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				f;
			t.ready = function() {
				var g = n.attr("data-wf-status"),
					m = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(m) && a.hostname !== m && (g = !0), g && !s && (f = f || d(), h(), setTimeout(h, 500), e(r).off(c, p).on(c, p))
			};

			function p() {
				var g = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(f).attr("style", g ? "display: none !important;" : "")
			}

			function d() {
				var g = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
					m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
						marginRight: "4px",
						width: "26px"
					}),
					_ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
				return g.append(m, _), g[0]
			}

			function h() {
				var g = i.children(o),
					m = g.length && g.get(0) === f,
					_ = Gs.env("editor");
				if (m) {
					_ && g.remove();
					return
				}
				g.length && g.remove(), _ || i.append(f)
			}
			return t
		})
	});
	var ks = u((MH, Hs) => {
		"use strict";
		var Pi = Ue();
		Pi.define("edit", Hs.exports = function(e, t, r) {
			if (r = r || {}, (Pi.env("test") || Pi.env("frame")) && !r.fixture && !rb()) return {
				exit: 1
			};
			var n = {},
				i = e(window),
				o = e(document.documentElement),
				a = document.location,
				s = "hashchange",
				c, f = r.load || h,
				p = !1;
			try {
				p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			p ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, d).triggerHandler(s);

			function d() {
				c || /\?edit/.test(a.hash) && f()
			}

			function h() {
				c = !0, window.WebflowEditor = !0, i.off(s, d), S(function(L) {
					e.ajax({
						url: A("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: o.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: g(L)
					})
				})
			}

			function g(L) {
				return function(P) {
					if (!P) {
						console.error("Could not load editor data");
						return
					}
					P.thirdPartyCookiesSupported = L, m(N(P.bugReporterScriptPath), function() {
						m(N(P.scriptPath), function() {
							window.WebflowEditor(P)
						})
					})
				}
			}

			function m(L, P) {
				e.ajax({
					type: "GET",
					url: L,
					dataType: "script",
					cache: !0
				}).then(P, _)
			}

			function _(L, P, R) {
				throw console.error("Could not load editor script: " + P), R
			}

			function N(L) {
				return L.indexOf("//") >= 0 ? L : A("https://editor-api.webflow.com" + L)
			}

			function A(L) {
				return L.replace(/([^:])\/\//g, "$1/")
			}

			function S(L) {
				var P = window.document.createElement("iframe");
				P.src = "https://webflow.com/site/third-party-cookie-check.html", P.style.display = "none", P.sandbox = "allow-scripts allow-same-origin";
				var R = function(X) {
					X.data === "WF_third_party_cookies_unsupported" ? (I(P, R), L(!1)) : X.data === "WF_third_party_cookies_supported" && (I(P, R), L(!0))
				};
				P.onerror = function() {
					I(P, R), L(!1)
				}, window.addEventListener("message", R, !1), window.document.body.appendChild(P)
			}

			function I(L, P) {
				window.removeEventListener("message", P, !1), L.remove()
			}
			return n
		});

		function rb() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var Ws = u((DH, Xs) => {
		"use strict";
		var nb = Ue();
		nb.define("focus-visible", Xs.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					o = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function s(I) {
					return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
				}

				function c(I) {
					var L = I.type,
						P = I.tagName;
					return !!(P === "INPUT" && a[L] && !I.readOnly || P === "TEXTAREA" && !I.readOnly || I.isContentEditable)
				}

				function f(I) {
					I.getAttribute("data-wf-focus-visible") || I.setAttribute("data-wf-focus-visible", "true")
				}

				function p(I) {
					I.getAttribute("data-wf-focus-visible") && I.removeAttribute("data-wf-focus-visible")
				}

				function d(I) {
					I.metaKey || I.altKey || I.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
				}

				function h() {
					n = !1
				}

				function g(I) {
					s(I.target) && (n || c(I.target)) && f(I.target)
				}

				function m(I) {
					s(I.target) && I.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
						i = !1
					}, 100), p(I.target))
				}

				function _() {
					document.visibilityState === "hidden" && (i && (n = !0), N())
				}

				function N() {
					document.addEventListener("mousemove", S), document.addEventListener("mousedown", S), document.addEventListener("mouseup", S), document.addEventListener("pointermove", S), document.addEventListener("pointerdown", S), document.addEventListener("pointerup", S), document.addEventListener("touchmove", S), document.addEventListener("touchstart", S), document.addEventListener("touchend", S)
				}

				function A() {
					document.removeEventListener("mousemove", S), document.removeEventListener("mousedown", S), document.removeEventListener("mouseup", S), document.removeEventListener("pointermove", S), document.removeEventListener("pointerdown", S), document.removeEventListener("pointerup", S), document.removeEventListener("touchmove", S), document.removeEventListener("touchstart", S), document.removeEventListener("touchend", S)
				}

				function S(I) {
					I.target.nodeName && I.target.nodeName.toLowerCase() === "html" || (n = !1, A())
				}
				document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", _, !0), N(), r.addEventListener("focus", g, !0), r.addEventListener("blur", m, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var zs = u((FH, js) => {
		"use strict";
		var Bs = Ue();
		Bs.define("focus", js.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var s = a.target,
					c = s.tagName;
				return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
			}

			function i(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var s = e.pop();
						s.target.dispatchEvent(new MouseEvent(s.type, s))
					}
				}, 0))
			}

			function o() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Bs.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: o
			}
		})
	});
	var $s = u((GH, Ys) => {
		"use strict";
		var qi = window.jQuery,
			tt = {},
			an = [],
			Ks = ".w-ix",
			sn = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, qi(t).triggerHandler(tt.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, qi(t).triggerHandler(tt.types.OUTRO))
				}
			};
		tt.triggers = {};
		tt.types = {
			INTRO: "w-ix-intro" + Ks,
			OUTRO: "w-ix-outro" + Ks
		};
		tt.init = function() {
			for (var e = an.length, t = 0; t < e; t++) {
				var r = an[t];
				r[0](0, r[1])
			}
			an = [], qi.extend(tt.triggers, sn)
		};
		tt.async = function() {
			for (var e in sn) {
				var t = sn[e];
				sn.hasOwnProperty(e) && (tt.triggers[e] = function(r, n) {
					an.push([t, n])
				})
			}
		};
		tt.async();
		Ys.exports = tt
	});
	var cn = u((UH, Js) => {
		"use strict";
		var Mi = $s();

		function Qs(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var ib = window.jQuery,
			un = {},
			Zs = ".w-ix",
			ob = {
				reset: function(e, t) {
					Mi.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Mi.triggers.intro(e, t), Qs(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Mi.triggers.outro(e, t), Qs(t, "COMPONENT_INACTIVE")
				}
			};
		un.triggers = {};
		un.types = {
			INTRO: "w-ix-intro" + Zs,
			OUTRO: "w-ix-outro" + Zs
		};
		ib.extend(un.triggers, ob);
		Js.exports = un
	});
	var eu = u((VH, lt) => {
		function Di(e) {
			return lt.exports = Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, lt.exports.__esModule = !0, lt.exports.default = lt.exports, Di(e)
		}
		lt.exports = Di, lt.exports.__esModule = !0, lt.exports.default = lt.exports
	});
	var ln = u((HH, Er) => {
		var ab = eu().default;

		function tu(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (tu = function(i) {
				return i ? r : t
			})(e)
		}

		function sb(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || ab(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var r = tu(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
					var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
				} return n.default = e, r && r.set(e, n), n
		}
		Er.exports = sb, Er.exports.__esModule = !0, Er.exports.default = Er.exports
	});
	var ru = u((kH, mr) => {
		function ub(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		mr.exports = ub, mr.exports.__esModule = !0, mr.exports.default = mr.exports
	});
	var ye = u((XH, nu) => {
		var fn = function(e) {
			return e && e.Math == Math && e
		};
		nu.exports = fn(typeof globalThis == "object" && globalThis) || fn(typeof window == "object" && window) || fn(typeof self == "object" && self) || fn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var Ht = u((WH, iu) => {
		iu.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Ct = u((BH, ou) => {
		var cb = Ht();
		ou.exports = !cb(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var dn = u((jH, au) => {
		var _r = Function.prototype.call;
		au.exports = _r.bind ? _r.bind(_r) : function() {
			return _r.apply(_r, arguments)
		}
	});
	var lu = u(cu => {
		"use strict";
		var su = {}.propertyIsEnumerable,
			uu = Object.getOwnPropertyDescriptor,
			lb = uu && !su.call({
				1: 2
			}, 1);
		cu.f = lb ? function(t) {
			var r = uu(this, t);
			return !!r && r.enumerable
		} : su
	});
	var Fi = u((KH, fu) => {
		fu.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var je = u((YH, pu) => {
		var du = Function.prototype,
			Gi = du.bind,
			Ui = du.call,
			fb = Gi && Gi.bind(Ui);
		pu.exports = Gi ? function(e) {
			return e && fb(Ui, e)
		} : function(e) {
			return e && function() {
				return Ui.apply(e, arguments)
			}
		}
	});
	var hu = u(($H, gu) => {
		var vu = je(),
			db = vu({}.toString),
			pb = vu("".slice);
		gu.exports = function(e) {
			return pb(db(e), 8, -1)
		}
	});
	var Eu = u((QH, yu) => {
		var vb = ye(),
			gb = je(),
			hb = Ht(),
			yb = hu(),
			Vi = vb.Object,
			Eb = gb("".split);
		yu.exports = hb(function() {
			return !Vi("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return yb(e) == "String" ? Eb(e, "") : Vi(e)
		} : Vi
	});
	var Hi = u((ZH, mu) => {
		var mb = ye(),
			_b = mb.TypeError;
		mu.exports = function(e) {
			if (e == null) throw _b("Can't call method on " + e);
			return e
		}
	});
	var br = u((JH, _u) => {
		var bb = Eu(),
			Tb = Hi();
		_u.exports = function(e) {
			return bb(Tb(e))
		}
	});
	var rt = u((ek, bu) => {
		bu.exports = function(e) {
			return typeof e == "function"
		}
	});
	var kt = u((tk, Tu) => {
		var Ib = rt();
		Tu.exports = function(e) {
			return typeof e == "object" ? e !== null : Ib(e)
		}
	});
	var Tr = u((rk, Iu) => {
		var ki = ye(),
			Ob = rt(),
			Ab = function(e) {
				return Ob(e) ? e : void 0
			};
		Iu.exports = function(e, t) {
			return arguments.length < 2 ? Ab(ki[e]) : ki[e] && ki[e][t]
		}
	});
	var Au = u((nk, Ou) => {
		var wb = je();
		Ou.exports = wb({}.isPrototypeOf)
	});
	var xu = u((ik, wu) => {
		var xb = Tr();
		wu.exports = xb("navigator", "userAgent") || ""
	});
	var qu = u((ok, Pu) => {
		var Nu = ye(),
			Xi = xu(),
			Su = Nu.process,
			Cu = Nu.Deno,
			Ru = Su && Su.versions || Cu && Cu.version,
			Lu = Ru && Ru.v8,
			ze, pn;
		Lu && (ze = Lu.split("."), pn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1]));
		!pn && Xi && (ze = Xi.match(/Edge\/(\d+)/), (!ze || ze[1] >= 74) && (ze = Xi.match(/Chrome\/(\d+)/), ze && (pn = +ze[1])));
		Pu.exports = pn
	});
	var Wi = u((ak, Du) => {
		var Mu = qu(),
			Sb = Ht();
		Du.exports = !!Object.getOwnPropertySymbols && !Sb(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Mu && Mu < 41
		})
	});
	var Bi = u((sk, Fu) => {
		var Cb = Wi();
		Fu.exports = Cb && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var ji = u((uk, Gu) => {
		var Rb = ye(),
			Lb = Tr(),
			Nb = rt(),
			Pb = Au(),
			qb = Bi(),
			Mb = Rb.Object;
		Gu.exports = qb ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = Lb("Symbol");
			return Nb(t) && Pb(t.prototype, Mb(e))
		}
	});
	var Vu = u((ck, Uu) => {
		var Db = ye(),
			Fb = Db.String;
		Uu.exports = function(e) {
			try {
				return Fb(e)
			} catch {
				return "Object"
			}
		}
	});
	var ku = u((lk, Hu) => {
		var Gb = ye(),
			Ub = rt(),
			Vb = Vu(),
			Hb = Gb.TypeError;
		Hu.exports = function(e) {
			if (Ub(e)) return e;
			throw Hb(Vb(e) + " is not a function")
		}
	});
	var Wu = u((fk, Xu) => {
		var kb = ku();
		Xu.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : kb(r)
		}
	});
	var ju = u((dk, Bu) => {
		var Xb = ye(),
			zi = dn(),
			Ki = rt(),
			Yi = kt(),
			Wb = Xb.TypeError;
		Bu.exports = function(e, t) {
			var r, n;
			if (t === "string" && Ki(r = e.toString) && !Yi(n = zi(r, e)) || Ki(r = e.valueOf) && !Yi(n = zi(r, e)) || t !== "string" && Ki(r = e.toString) && !Yi(n = zi(r, e))) return n;
			throw Wb("Can't convert object to primitive value")
		}
	});
	var Ku = u((pk, zu) => {
		zu.exports = !1
	});
	var vn = u((vk, $u) => {
		var Yu = ye(),
			Bb = Object.defineProperty;
		$u.exports = function(e, t) {
			try {
				Bb(Yu, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				Yu[e] = t
			}
			return t
		}
	});
	var gn = u((gk, Zu) => {
		var jb = ye(),
			zb = vn(),
			Qu = "__core-js_shared__",
			Kb = jb[Qu] || zb(Qu, {});
		Zu.exports = Kb
	});
	var $i = u((hk, ec) => {
		var Yb = Ku(),
			Ju = gn();
		(ec.exports = function(e, t) {
			return Ju[e] || (Ju[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: Yb ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var rc = u((yk, tc) => {
		var $b = ye(),
			Qb = Hi(),
			Zb = $b.Object;
		tc.exports = function(e) {
			return Zb(Qb(e))
		}
	});
	var Et = u((Ek, nc) => {
		var Jb = je(),
			eT = rc(),
			tT = Jb({}.hasOwnProperty);
		nc.exports = Object.hasOwn || function(t, r) {
			return tT(eT(t), r)
		}
	});
	var Qi = u((mk, ic) => {
		var rT = je(),
			nT = 0,
			iT = Math.random(),
			oT = rT(1 .toString);
		ic.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + oT(++nT + iT, 36)
		}
	});
	var Zi = u((_k, cc) => {
		var aT = ye(),
			sT = $i(),
			oc = Et(),
			uT = Qi(),
			ac = Wi(),
			uc = Bi(),
			Xt = sT("wks"),
			Rt = aT.Symbol,
			sc = Rt && Rt.for,
			cT = uc ? Rt : Rt && Rt.withoutSetter || uT;
		cc.exports = function(e) {
			if (!oc(Xt, e) || !(ac || typeof Xt[e] == "string")) {
				var t = "Symbol." + e;
				ac && oc(Rt, e) ? Xt[e] = Rt[e] : uc && sc ? Xt[e] = sc(t) : Xt[e] = cT(t)
			}
			return Xt[e]
		}
	});
	var pc = u((bk, dc) => {
		var lT = ye(),
			fT = dn(),
			lc = kt(),
			fc = ji(),
			dT = Wu(),
			pT = ju(),
			vT = Zi(),
			gT = lT.TypeError,
			hT = vT("toPrimitive");
		dc.exports = function(e, t) {
			if (!lc(e) || fc(e)) return e;
			var r = dT(e, hT),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = fT(r, e, t), !lc(n) || fc(n)) return n;
				throw gT("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), pT(e, t)
		}
	});
	var Ji = u((Tk, vc) => {
		var yT = pc(),
			ET = ji();
		vc.exports = function(e) {
			var t = yT(e, "string");
			return ET(t) ? t : t + ""
		}
	});
	var to = u((Ik, hc) => {
		var mT = ye(),
			gc = kt(),
			eo = mT.document,
			_T = gc(eo) && gc(eo.createElement);
		hc.exports = function(e) {
			return _T ? eo.createElement(e) : {}
		}
	});
	var ro = u((Ok, yc) => {
		var bT = Ct(),
			TT = Ht(),
			IT = to();
		yc.exports = !bT && !TT(function() {
			return Object.defineProperty(IT("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var no = u(mc => {
		var OT = Ct(),
			AT = dn(),
			wT = lu(),
			xT = Fi(),
			ST = br(),
			CT = Ji(),
			RT = Et(),
			LT = ro(),
			Ec = Object.getOwnPropertyDescriptor;
		mc.f = OT ? Ec : function(t, r) {
			if (t = ST(t), r = CT(r), LT) try {
				return Ec(t, r)
			} catch {}
			if (RT(t, r)) return xT(!AT(wT.f, t, r), t[r])
		}
	});
	var Ir = u((wk, bc) => {
		var _c = ye(),
			NT = kt(),
			PT = _c.String,
			qT = _c.TypeError;
		bc.exports = function(e) {
			if (NT(e)) return e;
			throw qT(PT(e) + " is not an object")
		}
	});
	var Or = u(Oc => {
		var MT = ye(),
			DT = Ct(),
			FT = ro(),
			Tc = Ir(),
			GT = Ji(),
			UT = MT.TypeError,
			Ic = Object.defineProperty;
		Oc.f = DT ? Ic : function(t, r, n) {
			if (Tc(t), r = GT(r), Tc(n), FT) try {
				return Ic(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw UT("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var hn = u((Sk, Ac) => {
		var VT = Ct(),
			HT = Or(),
			kT = Fi();
		Ac.exports = VT ? function(e, t, r) {
			return HT.f(e, t, kT(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var oo = u((Ck, wc) => {
		var XT = je(),
			WT = rt(),
			io = gn(),
			BT = XT(Function.toString);
		WT(io.inspectSource) || (io.inspectSource = function(e) {
			return BT(e)
		});
		wc.exports = io.inspectSource
	});
	var Cc = u((Rk, Sc) => {
		var jT = ye(),
			zT = rt(),
			KT = oo(),
			xc = jT.WeakMap;
		Sc.exports = zT(xc) && /native code/.test(KT(xc))
	});
	var ao = u((Lk, Lc) => {
		var YT = $i(),
			$T = Qi(),
			Rc = YT("keys");
		Lc.exports = function(e) {
			return Rc[e] || (Rc[e] = $T(e))
		}
	});
	var yn = u((Nk, Nc) => {
		Nc.exports = {}
	});
	var Gc = u((Pk, Fc) => {
		var QT = Cc(),
			Dc = ye(),
			so = je(),
			ZT = kt(),
			JT = hn(),
			uo = Et(),
			co = gn(),
			eI = ao(),
			tI = yn(),
			Pc = "Object already initialized",
			fo = Dc.TypeError,
			rI = Dc.WeakMap,
			En, Ar, mn, nI = function(e) {
				return mn(e) ? Ar(e) : En(e, {})
			},
			iI = function(e) {
				return function(t) {
					var r;
					if (!ZT(t) || (r = Ar(t)).type !== e) throw fo("Incompatible receiver, " + e + " required");
					return r
				}
			};
		QT || co.state ? (mt = co.state || (co.state = new rI), qc = so(mt.get), lo = so(mt.has), Mc = so(mt.set), En = function(e, t) {
			if (lo(mt, e)) throw new fo(Pc);
			return t.facade = e, Mc(mt, e, t), t
		}, Ar = function(e) {
			return qc(mt, e) || {}
		}, mn = function(e) {
			return lo(mt, e)
		}) : (Lt = eI("state"), tI[Lt] = !0, En = function(e, t) {
			if (uo(e, Lt)) throw new fo(Pc);
			return t.facade = e, JT(e, Lt, t), t
		}, Ar = function(e) {
			return uo(e, Lt) ? e[Lt] : {}
		}, mn = function(e) {
			return uo(e, Lt)
		});
		var mt, qc, lo, Mc, Lt;
		Fc.exports = {
			set: En,
			get: Ar,
			has: mn,
			enforce: nI,
			getterFor: iI
		}
	});
	var Hc = u((qk, Vc) => {
		var po = Ct(),
			oI = Et(),
			Uc = Function.prototype,
			aI = po && Object.getOwnPropertyDescriptor,
			vo = oI(Uc, "name"),
			sI = vo && function() {}.name === "something",
			uI = vo && (!po || po && aI(Uc, "name").configurable);
		Vc.exports = {
			EXISTS: vo,
			PROPER: sI,
			CONFIGURABLE: uI
		}
	});
	var jc = u((Mk, Bc) => {
		var cI = ye(),
			kc = rt(),
			lI = Et(),
			Xc = hn(),
			fI = vn(),
			dI = oo(),
			Wc = Gc(),
			pI = Hc().CONFIGURABLE,
			vI = Wc.get,
			gI = Wc.enforce,
			hI = String(String).split("String");
		(Bc.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				o = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				c;
			if (kc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!lI(r, "name") || pI && r.name !== s) && Xc(r, "name", s), c = gI(r), c.source || (c.source = hI.join(typeof s == "string" ? s : ""))), e === cI) {
				o ? e[t] = r : fI(t, r);
				return
			} else i ? !a && e[t] && (o = !0) : delete e[t];
			o ? e[t] = r : Xc(e, t, r)
		})(Function.prototype, "toString", function() {
			return kc(this) && vI(this).source || dI(this)
		})
	});
	var go = u((Dk, zc) => {
		var yI = Math.ceil,
			EI = Math.floor;
		zc.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? EI : yI)(t)
		}
	});
	var Yc = u((Fk, Kc) => {
		var mI = go(),
			_I = Math.max,
			bI = Math.min;
		Kc.exports = function(e, t) {
			var r = mI(e);
			return r < 0 ? _I(r + t, 0) : bI(r, t)
		}
	});
	var Qc = u((Gk, $c) => {
		var TI = go(),
			II = Math.min;
		$c.exports = function(e) {
			return e > 0 ? II(TI(e), 9007199254740991) : 0
		}
	});
	var Jc = u((Uk, Zc) => {
		var OI = Qc();
		Zc.exports = function(e) {
			return OI(e.length)
		}
	});
	var ho = u((Vk, tl) => {
		var AI = br(),
			wI = Yc(),
			xI = Jc(),
			el = function(e) {
				return function(t, r, n) {
					var i = AI(t),
						o = xI(i),
						a = wI(n, o),
						s;
					if (e && r != r) {
						for (; o > a;)
							if (s = i[a++], s != s) return !0
					} else
						for (; o > a; a++)
							if ((e || a in i) && i[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		tl.exports = {
			includes: el(!0),
			indexOf: el(!1)
		}
	});
	var Eo = u((Hk, nl) => {
		var SI = je(),
			yo = Et(),
			CI = br(),
			RI = ho().indexOf,
			LI = yn(),
			rl = SI([].push);
		nl.exports = function(e, t) {
			var r = CI(e),
				n = 0,
				i = [],
				o;
			for (o in r) !yo(LI, o) && yo(r, o) && rl(i, o);
			for (; t.length > n;) yo(r, o = t[n++]) && (~RI(i, o) || rl(i, o));
			return i
		}
	});
	var _n = u((kk, il) => {
		il.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var al = u(ol => {
		var NI = Eo(),
			PI = _n(),
			qI = PI.concat("length", "prototype");
		ol.f = Object.getOwnPropertyNames || function(t) {
			return NI(t, qI)
		}
	});
	var ul = u(sl => {
		sl.f = Object.getOwnPropertySymbols
	});
	var ll = u((Bk, cl) => {
		var MI = Tr(),
			DI = je(),
			FI = al(),
			GI = ul(),
			UI = Ir(),
			VI = DI([].concat);
		cl.exports = MI("Reflect", "ownKeys") || function(t) {
			var r = FI.f(UI(t)),
				n = GI.f;
			return n ? VI(r, n(t)) : r
		}
	});
	var dl = u((jk, fl) => {
		var HI = Et(),
			kI = ll(),
			XI = no(),
			WI = Or();
		fl.exports = function(e, t) {
			for (var r = kI(t), n = WI.f, i = XI.f, o = 0; o < r.length; o++) {
				var a = r[o];
				HI(e, a) || n(e, a, i(t, a))
			}
		}
	});
	var vl = u((zk, pl) => {
		var BI = Ht(),
			jI = rt(),
			zI = /#|\.prototype\./,
			wr = function(e, t) {
				var r = YI[KI(e)];
				return r == QI ? !0 : r == $I ? !1 : jI(t) ? BI(t) : !!t
			},
			KI = wr.normalize = function(e) {
				return String(e).replace(zI, ".").toLowerCase()
			},
			YI = wr.data = {},
			$I = wr.NATIVE = "N",
			QI = wr.POLYFILL = "P";
		pl.exports = wr
	});
	var hl = u((Kk, gl) => {
		var mo = ye(),
			ZI = no().f,
			JI = hn(),
			eO = jc(),
			tO = vn(),
			rO = dl(),
			nO = vl();
		gl.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				o, a, s, c, f, p;
			if (n ? a = mo : i ? a = mo[r] || tO(r, {}) : a = (mo[r] || {}).prototype, a)
				for (s in t) {
					if (f = t[s], e.noTargetGet ? (p = ZI(a, s), c = p && p.value) : c = a[s], o = nO(n ? s : r + (i ? "." : "#") + s, e.forced), !o && c !== void 0) {
						if (typeof f == typeof c) continue;
						rO(f, c)
					}(e.sham || c && c.sham) && JI(f, "sham", !0), eO(a, s, f, e)
				}
		}
	});
	var El = u((Yk, yl) => {
		var iO = Eo(),
			oO = _n();
		yl.exports = Object.keys || function(t) {
			return iO(t, oO)
		}
	});
	var _l = u(($k, ml) => {
		var aO = Ct(),
			sO = Or(),
			uO = Ir(),
			cO = br(),
			lO = El();
		ml.exports = aO ? Object.defineProperties : function(t, r) {
			uO(t);
			for (var n = cO(r), i = lO(r), o = i.length, a = 0, s; o > a;) sO.f(t, s = i[a++], n[s]);
			return t
		}
	});
	var Tl = u((Qk, bl) => {
		var fO = Tr();
		bl.exports = fO("document", "documentElement")
	});
	var Rl = u((Zk, Cl) => {
		var dO = Ir(),
			pO = _l(),
			Il = _n(),
			vO = yn(),
			gO = Tl(),
			hO = to(),
			yO = ao(),
			Ol = ">",
			Al = "<",
			bo = "prototype",
			To = "script",
			xl = yO("IE_PROTO"),
			_o = function() {},
			Sl = function(e) {
				return Al + To + Ol + e + Al + "/" + To + Ol
			},
			wl = function(e) {
				e.write(Sl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			EO = function() {
				var e = hO("iframe"),
					t = "java" + To + ":",
					r;
				return e.style.display = "none", gO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Sl("document.F=Object")), r.close(), r.F
			},
			bn, Tn = function() {
				try {
					bn = new ActiveXObject("htmlfile")
				} catch {}
				Tn = typeof document < "u" ? document.domain && bn ? wl(bn) : EO() : wl(bn);
				for (var e = Il.length; e--;) delete Tn[bo][Il[e]];
				return Tn()
			};
		vO[xl] = !0;
		Cl.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (_o[bo] = dO(t), n = new _o, _o[bo] = null, n[xl] = t) : n = Tn(), r === void 0 ? n : pO(n, r)
		}
	});
	var Nl = u((Jk, Ll) => {
		var mO = Zi(),
			_O = Rl(),
			bO = Or(),
			Io = mO("unscopables"),
			Oo = Array.prototype;
		Oo[Io] == null && bO.f(Oo, Io, {
			configurable: !0,
			value: _O(null)
		});
		Ll.exports = function(e) {
			Oo[Io][e] = !0
		}
	});
	var Pl = u(() => {
		"use strict";
		var TO = hl(),
			IO = ho().includes,
			OO = Nl();
		TO({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return IO(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		OO("includes")
	});
	var Ml = u((rX, ql) => {
		var AO = ye(),
			wO = je();
		ql.exports = function(e, t) {
			return wO(AO[e].prototype[t])
		}
	});
	var Fl = u((nX, Dl) => {
		Pl();
		var xO = Ml();
		Dl.exports = xO("Array", "includes")
	});
	var Ul = u((iX, Gl) => {
		var SO = Fl();
		Gl.exports = SO
	});
	var Hl = u((oX, Vl) => {
		var CO = Ul();
		Vl.exports = CO
	});
	var Ao = u((aX, kl) => {
		var RO = typeof global == "object" && global && global.Object === Object && global;
		kl.exports = RO
	});
	var Ke = u((sX, Xl) => {
		var LO = Ao(),
			NO = typeof self == "object" && self && self.Object === Object && self,
			PO = LO || NO || Function("return this")();
		Xl.exports = PO
	});
	var Wt = u((uX, Wl) => {
		var qO = Ke(),
			MO = qO.Symbol;
		Wl.exports = MO
	});
	var Kl = u((cX, zl) => {
		var Bl = Wt(),
			jl = Object.prototype,
			DO = jl.hasOwnProperty,
			FO = jl.toString,
			xr = Bl ? Bl.toStringTag : void 0;

		function GO(e) {
			var t = DO.call(e, xr),
				r = e[xr];
			try {
				e[xr] = void 0;
				var n = !0
			} catch {}
			var i = FO.call(e);
			return n && (t ? e[xr] = r : delete e[xr]), i
		}
		zl.exports = GO
	});
	var $l = u((lX, Yl) => {
		var UO = Object.prototype,
			VO = UO.toString;

		function HO(e) {
			return VO.call(e)
		}
		Yl.exports = HO
	});
	var _t = u((fX, Jl) => {
		var Ql = Wt(),
			kO = Kl(),
			XO = $l(),
			WO = "[object Null]",
			BO = "[object Undefined]",
			Zl = Ql ? Ql.toStringTag : void 0;

		function jO(e) {
			return e == null ? e === void 0 ? BO : WO : Zl && Zl in Object(e) ? kO(e) : XO(e)
		}
		Jl.exports = jO
	});
	var wo = u((dX, ef) => {
		function zO(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		ef.exports = zO
	});
	var xo = u((pX, tf) => {
		var KO = wo(),
			YO = KO(Object.getPrototypeOf, Object);
		tf.exports = YO
	});
	var ft = u((vX, rf) => {
		function $O(e) {
			return e != null && typeof e == "object"
		}
		rf.exports = $O
	});
	var So = u((gX, of) => {
		var QO = _t(),
			ZO = xo(),
			JO = ft(),
			eA = "[object Object]",
			tA = Function.prototype,
			rA = Object.prototype,
			nf = tA.toString,
			nA = rA.hasOwnProperty,
			iA = nf.call(Object);

		function oA(e) {
			if (!JO(e) || QO(e) != eA) return !1;
			var t = ZO(e);
			if (t === null) return !0;
			var r = nA.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && nf.call(r) == iA
		}
		of.exports = oA
	});
	var af = u(Co => {
		"use strict";
		Object.defineProperty(Co, "__esModule", {
			value: !0
		});
		Co.default = aA;

		function aA(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var sf = u((Lo, Ro) => {
		"use strict";
		Object.defineProperty(Lo, "__esModule", {
			value: !0
		});
		var sA = af(),
			uA = cA(sA);

		function cA(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Bt;
		typeof self < "u" ? Bt = self : typeof window < "u" ? Bt = window : typeof global < "u" ? Bt = global : typeof Ro < "u" ? Bt = Ro : Bt = Function("return this")();
		var lA = (0, uA.default)(Bt);
		Lo.default = lA
	});
	var No = u(Sr => {
		"use strict";
		Sr.__esModule = !0;
		Sr.ActionTypes = void 0;
		Sr.default = ff;
		var fA = So(),
			dA = lf(fA),
			pA = sf(),
			uf = lf(pA);

		function lf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var cf = Sr.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function ff(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(ff)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				o = t,
				a = [],
				s = a,
				c = !1;

			function f() {
				s === a && (s = a.slice())
			}

			function p() {
				return o
			}

			function d(_) {
				if (typeof _ != "function") throw new Error("Expected listener to be a function.");
				var N = !0;
				return f(), s.push(_),
					function() {
						if (N) {
							N = !1, f();
							var S = s.indexOf(_);
							s.splice(S, 1)
						}
					}
			}

			function h(_) {
				if (!(0, dA.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (c) throw new Error("Reducers may not dispatch actions.");
				try {
					c = !0, o = i(o, _)
				} finally {
					c = !1
				}
				for (var N = a = s, A = 0; A < N.length; A++) N[A]();
				return _
			}

			function g(_) {
				if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
				i = _, h({
					type: cf.INIT
				})
			}

			function m() {
				var _, N = d;
				return _ = {
					subscribe: function(S) {
						if (typeof S != "object") throw new TypeError("Expected the observer to be an object.");

						function I() {
							S.next && S.next(p())
						}
						I();
						var L = N(I);
						return {
							unsubscribe: L
						}
					}
				}, _[uf.default] = function() {
					return this
				}, _
			}
			return h({
				type: cf.INIT
			}), n = {
				dispatch: h,
				subscribe: d,
				getState: p,
				replaceReducer: g
			}, n[uf.default] = m, n
		}
	});
	var qo = u(Po => {
		"use strict";
		Po.__esModule = !0;
		Po.default = vA;

		function vA(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var vf = u(Mo => {
		"use strict";
		Mo.__esModule = !0;
		Mo.default = mA;
		var df = No(),
			gA = So(),
			mX = pf(gA),
			hA = qo(),
			_X = pf(hA);

		function pf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function yA(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function EA(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: df.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: i
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + df.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function mA(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var o = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				EA(r)
			} catch (c) {
				s = c
			}
			return function() {
				var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					p = arguments[1];
				if (s) throw s;
				if (!1) var d;
				for (var h = !1, g = {}, m = 0; m < o.length; m++) {
					var _ = o[m],
						N = r[_],
						A = f[_],
						S = N(A, p);
					if (typeof S > "u") {
						var I = yA(_, p);
						throw new Error(I)
					}
					g[_] = S, h = h || S !== A
				}
				return h ? g : f
			}
		}
	});
	var hf = u(Do => {
		"use strict";
		Do.__esModule = !0;
		Do.default = _A;

		function gf(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function _A(e, t) {
			if (typeof e == "function") return gf(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var o = r[i],
					a = e[o];
				typeof a == "function" && (n[o] = gf(a, t))
			}
			return n
		}
	});
	var Go = u(Fo => {
		"use strict";
		Fo.__esModule = !0;
		Fo.default = bA;

		function bA() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(o) {
				return o
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function() {
				return i.reduceRight(function(o, a) {
					return a(o)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var yf = u(Uo => {
		"use strict";
		Uo.__esModule = !0;
		var TA = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		Uo.default = wA;
		var IA = Go(),
			OA = AA(IA);

		function AA(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function wA() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(i, o, a) {
					var s = n(i, o, a),
						c = s.dispatch,
						f = [],
						p = {
							getState: s.getState,
							dispatch: function(h) {
								return c(h)
							}
						};
					return f = t.map(function(d) {
						return d(p)
					}), c = OA.default.apply(void 0, f)(s.dispatch), TA({}, s, {
						dispatch: c
					})
				}
			}
		}
	});
	var Vo = u(Ve => {
		"use strict";
		Ve.__esModule = !0;
		Ve.compose = Ve.applyMiddleware = Ve.bindActionCreators = Ve.combineReducers = Ve.createStore = void 0;
		var xA = No(),
			SA = jt(xA),
			CA = vf(),
			RA = jt(CA),
			LA = hf(),
			NA = jt(LA),
			PA = yf(),
			qA = jt(PA),
			MA = Go(),
			DA = jt(MA),
			FA = qo(),
			AX = jt(FA);

		function jt(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Ve.createStore = SA.default;
		Ve.combineReducers = RA.default;
		Ve.bindActionCreators = NA.default;
		Ve.applyMiddleware = qA.default;
		Ve.compose = DA.default
	});
	var Ye, Ho, nt, GA, UA, ko, VA, Ef = he(() => {
		"use strict";
		Ye = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		}, Ho = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		}, nt = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		}, GA = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		}, UA = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		}, ko = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		}, VA = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		}
	});
	var He, HA, Xo = he(() => {
		"use strict";
		He = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			OBJECT_VALUE: "OBJECT_VALUE",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			PLUGIN_SPLINE: "PLUGIN_SPLINE",
			PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		}, HA = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		}
	});
	var kA, mf = he(() => {
		"use strict";
		kA = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		}
	});
	var XA, WA, BA, jA, zA, KA, YA, Wo, _f = he(() => {
		"use strict";
		Xo();
		({
			TRANSFORM_MOVE: XA,
			TRANSFORM_SCALE: WA,
			TRANSFORM_ROTATE: BA,
			TRANSFORM_SKEW: jA,
			STYLE_SIZE: zA,
			STYLE_FILTER: KA,
			STYLE_FONT_VARIATION: YA
		} = He), Wo = {
			[XA]: !0,
			[WA]: !0,
			[BA]: !0,
			[jA]: !0,
			[zA]: !0,
			[KA]: !0,
			[YA]: !0
		}
	});
	var Te = {};
	Me(Te, {
		IX2_ACTION_LIST_PLAYBACK_CHANGED: () => dw,
		IX2_ANIMATION_FRAME_CHANGED: () => aw,
		IX2_CLEAR_REQUESTED: () => nw,
		IX2_ELEMENT_STATE_CHANGED: () => fw,
		IX2_EVENT_LISTENER_ADDED: () => iw,
		IX2_EVENT_STATE_CHANGED: () => ow,
		IX2_INSTANCE_ADDED: () => uw,
		IX2_INSTANCE_REMOVED: () => lw,
		IX2_INSTANCE_STARTED: () => cw,
		IX2_MEDIA_QUERIES_DEFINED: () => vw,
		IX2_PARAMETER_CHANGED: () => sw,
		IX2_PLAYBACK_REQUESTED: () => tw,
		IX2_PREVIEW_REQUESTED: () => ew,
		IX2_RAW_DATA_IMPORTED: () => $A,
		IX2_SESSION_INITIALIZED: () => QA,
		IX2_SESSION_STARTED: () => ZA,
		IX2_SESSION_STOPPED: () => JA,
		IX2_STOP_REQUESTED: () => rw,
		IX2_TEST_FRAME_RENDERED: () => gw,
		IX2_VIEWPORT_WIDTH_CHANGED: () => pw
	});
	var $A, QA, ZA, JA, ew, tw, rw, nw, iw, ow, aw, sw, uw, cw, lw, fw, dw, pw, vw, gw, bf = he(() => {
		"use strict";
		$A = "IX2_RAW_DATA_IMPORTED", QA = "IX2_SESSION_INITIALIZED", ZA = "IX2_SESSION_STARTED", JA = "IX2_SESSION_STOPPED", ew = "IX2_PREVIEW_REQUESTED", tw = "IX2_PLAYBACK_REQUESTED", rw = "IX2_STOP_REQUESTED", nw = "IX2_CLEAR_REQUESTED", iw = "IX2_EVENT_LISTENER_ADDED", ow = "IX2_EVENT_STATE_CHANGED", aw = "IX2_ANIMATION_FRAME_CHANGED", sw = "IX2_PARAMETER_CHANGED", uw = "IX2_INSTANCE_ADDED", cw = "IX2_INSTANCE_STARTED", lw = "IX2_INSTANCE_REMOVED", fw = "IX2_ELEMENT_STATE_CHANGED", dw = "IX2_ACTION_LIST_PLAYBACK_CHANGED", pw = "IX2_VIEWPORT_WIDTH_CHANGED", vw = "IX2_MEDIA_QUERIES_DEFINED", gw = "IX2_TEST_FRAME_RENDERED"
	});
	var Se = {};
	Me(Se, {
		ABSTRACT_NODE: () => px,
		AUTO: () => rx,
		BACKGROUND: () => $w,
		BACKGROUND_COLOR: () => Yw,
		BAR_DELIMITER: () => ox,
		BORDER_COLOR: () => Qw,
		BOUNDARY_SELECTOR: () => _w,
		CHILDREN: () => ax,
		COLON_DELIMITER: () => ix,
		COLOR: () => Zw,
		COMMA_DELIMITER: () => nx,
		CONFIG_UNIT: () => Sw,
		CONFIG_VALUE: () => Ow,
		CONFIG_X_UNIT: () => Aw,
		CONFIG_X_VALUE: () => bw,
		CONFIG_Y_UNIT: () => ww,
		CONFIG_Y_VALUE: () => Tw,
		CONFIG_Z_UNIT: () => xw,
		CONFIG_Z_VALUE: () => Iw,
		DISPLAY: () => Jw,
		FILTER: () => Bw,
		FLEX: () => ex,
		FONT_VARIATION_SETTINGS: () => jw,
		HEIGHT: () => Kw,
		HTML_ELEMENT: () => fx,
		IMMEDIATE_CHILDREN: () => sx,
		IX2_ID_DELIMITER: () => hw,
		OPACITY: () => Ww,
		PARENT: () => cx,
		PLAIN_OBJECT: () => dx,
		PRESERVE_3D: () => lx,
		RENDER_GENERAL: () => gx,
		RENDER_PLUGIN: () => yx,
		RENDER_STYLE: () => hx,
		RENDER_TRANSFORM: () => vx,
		ROTATE_X: () => Gw,
		ROTATE_Y: () => Uw,
		ROTATE_Z: () => Vw,
		SCALE_3D: () => Fw,
		SCALE_X: () => qw,
		SCALE_Y: () => Mw,
		SCALE_Z: () => Dw,
		SIBLINGS: () => ux,
		SKEW: () => Hw,
		SKEW_X: () => kw,
		SKEW_Y: () => Xw,
		TRANSFORM: () => Cw,
		TRANSLATE_3D: () => Pw,
		TRANSLATE_X: () => Rw,
		TRANSLATE_Y: () => Lw,
		TRANSLATE_Z: () => Nw,
		WF_PAGE: () => yw,
		WIDTH: () => zw,
		WILL_CHANGE: () => tx,
		W_MOD_IX: () => mw,
		W_MOD_JS: () => Ew
	});
	var hw, yw, Ew, mw, _w, bw, Tw, Iw, Ow, Aw, ww, xw, Sw, Cw, Rw, Lw, Nw, Pw, qw, Mw, Dw, Fw, Gw, Uw, Vw, Hw, kw, Xw, Ww, Bw, jw, zw, Kw, Yw, $w, Qw, Zw, Jw, ex, tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, px, vx, gx, hx, yx, Tf = he(() => {
		"use strict";
		hw = "|", yw = "data-wf-page", Ew = "w-mod-js", mw = "w-mod-ix", _w = ".w-dyn-item", bw = "xValue", Tw = "yValue", Iw = "zValue", Ow = "value", Aw = "xUnit", ww = "yUnit", xw = "zUnit", Sw = "unit", Cw = "transform", Rw = "translateX", Lw = "translateY", Nw = "translateZ", Pw = "translate3d", qw = "scaleX", Mw = "scaleY", Dw = "scaleZ", Fw = "scale3d", Gw = "rotateX", Uw = "rotateY", Vw = "rotateZ", Hw = "skew", kw = "skewX", Xw = "skewY", Ww = "opacity", Bw = "filter", jw = "font-variation-settings", zw = "width", Kw = "height", Yw = "backgroundColor", $w = "background", Qw = "borderColor", Zw = "color", Jw = "display", ex = "flex", tx = "willChange", rx = "AUTO", nx = ",", ix = ":", ox = "|", ax = "CHILDREN", sx = "IMMEDIATE_CHILDREN", ux = "SIBLINGS", cx = "PARENT", lx = "preserve-3d", fx = "HTML_ELEMENT", dx = "PLAIN_OBJECT", px = "ABSTRACT_NODE", vx = "RENDER_TRANSFORM", gx = "RENDER_GENERAL", hx = "RENDER_STYLE", yx = "RENDER_PLUGIN"
	});
	var If = {};
	Me(If, {
		ActionAppliesTo: () => HA,
		ActionTypeConsts: () => He,
		EventAppliesTo: () => Ho,
		EventBasedOn: () => nt,
		EventContinuousMouseAxes: () => GA,
		EventLimitAffectedElements: () => UA,
		EventTypeConsts: () => Ye,
		IX2EngineActionTypes: () => Te,
		IX2EngineConstants: () => Se,
		InteractionTypeConsts: () => kA,
		QuickEffectDirectionConsts: () => VA,
		QuickEffectIds: () => ko,
		ReducedMotionTypes: () => Wo
	});
	var De = he(() => {
		"use strict";
		Ef();
		Xo();
		mf();
		_f();
		bf();
		Tf()
	});
	var Ex, Of, Af = he(() => {
		"use strict";
		De();
		({
			IX2_RAW_DATA_IMPORTED: Ex
		} = Te), Of = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case Ex:
					return t.payload.ixData || Object.freeze({});
				default:
					return e
			}
		}
	});
	var zt = u(me => {
		"use strict";
		Object.defineProperty(me, "__esModule", {
			value: !0
		});
		var mx = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		me.clone = On;
		me.addLast = Sf;
		me.addFirst = Cf;
		me.removeLast = Rf;
		me.removeFirst = Lf;
		me.insert = Nf;
		me.removeAt = Pf;
		me.replaceAt = qf;
		me.getIn = An;
		me.set = wn;
		me.setIn = xn;
		me.update = Df;
		me.updateIn = Ff;
		me.merge = Gf;
		me.mergeDeep = Uf;
		me.mergeIn = Vf;
		me.omit = Hf;
		me.addDefaults = kf;
		var wf = "INVALID_ARGS";

		function xf(e) {
			throw new Error(e)
		}

		function Bo(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var _x = {}.hasOwnProperty;

		function On(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = Bo(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function Fe(e, t, r) {
			var n = r;
			n == null && xf(wf);
			for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
			for (var c = 0; c < a.length; c++) {
				var f = a[c];
				if (f != null) {
					var p = Bo(f);
					if (p.length)
						for (var d = 0; d <= p.length; d++) {
							var h = p[d];
							if (!(e && n[h] !== void 0)) {
								var g = f[h];
								t && In(n[h]) && In(g) && (g = Fe(e, t, n[h], g)), !(g === void 0 || g === n[h]) && (i || (i = !0, n = On(n)), n[h] = g)
							}
						}
				}
			}
			return n
		}

		function In(e) {
			var t = typeof e > "u" ? "undefined" : mx(e);
			return e != null && (t === "object" || t === "function")
		}

		function Sf(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function Cf(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function Rf(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function Lf(e) {
			return e.length ? e.slice(1) : e
		}

		function Nf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function Pf(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function qf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
			return i[t] = r, i
		}

		function An(e, t) {
			if (!Array.isArray(t) && xf(wf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?.[i], r === void 0) return r
				}
				return r
			}
		}

		function wn(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var o = On(i);
			return o[t] = r, o
		}

		function Mf(e, t, r, n) {
			var i = void 0,
				o = t[n];
			if (n === t.length - 1) i = r;
			else {
				var a = In(e) && In(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
				i = Mf(a, t, r, n + 1)
			}
			return wn(e, o, i)
		}

		function xn(e, t, r) {
			return t.length ? Mf(e, t, r, 0) : r
		}

		function Df(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return wn(e, t, i)
		}

		function Ff(e, t, r) {
			var n = An(e, t),
				i = r(n);
			return xn(e, t, i)
		}

		function Gf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Fe(!1, !1, e, t, r, n, i, o)
		}

		function Uf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Fe(!1, !0, e, t, r, n, i, o)
		}

		function Vf(e, t, r, n, i, o, a) {
			var s = An(e, t);
			s == null && (s = {});
			for (var c = void 0, f = arguments.length, p = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++) p[d - 7] = arguments[d];
			return p.length ? c = Fe.call.apply(Fe, [null, !1, !1, s, r, n, i, o, a].concat(p)) : c = Fe(!1, !1, s, r, n, i, o, a), xn(e, t, c)
		}

		function Hf(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (_x.call(e, r[i])) {
					n = !0;
					break
				} if (!n) return e;
			for (var o = {}, a = Bo(e), s = 0; s < a.length; s++) {
				var c = a[s];
				r.indexOf(c) >= 0 || (o[c] = e[c])
			}
			return o
		}

		function kf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Fe(!0, !1, e, t, r, n, i, o)
		}
		var bx = {
			clone: On,
			addLast: Sf,
			addFirst: Cf,
			removeLast: Rf,
			removeFirst: Lf,
			insert: Nf,
			removeAt: Pf,
			replaceAt: qf,
			getIn: An,
			set: wn,
			setIn: xn,
			update: Df,
			updateIn: Ff,
			merge: Gf,
			mergeDeep: Uf,
			mergeIn: Vf,
			omit: Hf,
			addDefaults: kf
		};
		me.default = bx
	});
	var Wf, Tx, Ix, Ox, Ax, wx, Xf, Bf, jf = he(() => {
		"use strict";
		De();
		Wf = ue(zt()), {
			IX2_PREVIEW_REQUESTED: Tx,
			IX2_PLAYBACK_REQUESTED: Ix,
			IX2_STOP_REQUESTED: Ox,
			IX2_CLEAR_REQUESTED: Ax
		} = Te, wx = {
			preview: {},
			playback: {},
			stop: {},
			clear: {}
		}, Xf = Object.create(null, {
			[Tx]: {
				value: "preview"
			},
			[Ix]: {
				value: "playback"
			},
			[Ox]: {
				value: "stop"
			},
			[Ax]: {
				value: "clear"
			}
		}), Bf = (e = wx, t) => {
			if (t.type in Xf) {
				let r = [Xf[t.type]];
				return (0, Wf.setIn)(e, [r], {
					...t.payload
				})
			}
			return e
		}
	});
	var Le, xx, Sx, Cx, Rx, Lx, Nx, Px, qx, Mx, Dx, zf, Fx, Kf, Yf = he(() => {
		"use strict";
		De();
		Le = ue(zt()), {
			IX2_SESSION_INITIALIZED: xx,
			IX2_SESSION_STARTED: Sx,
			IX2_TEST_FRAME_RENDERED: Cx,
			IX2_SESSION_STOPPED: Rx,
			IX2_EVENT_LISTENER_ADDED: Lx,
			IX2_EVENT_STATE_CHANGED: Nx,
			IX2_ANIMATION_FRAME_CHANGED: Px,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: qx,
			IX2_VIEWPORT_WIDTH_CHANGED: Mx,
			IX2_MEDIA_QUERIES_DEFINED: Dx
		} = Te, zf = {
			active: !1,
			tick: 0,
			eventListeners: [],
			eventState: {},
			playbackState: {},
			viewportWidth: 0,
			mediaQueryKey: null,
			hasBoundaryNodes: !1,
			hasDefinedMediaQueries: !1,
			reducedMotion: !1
		}, Fx = 20, Kf = (e = zf, t) => {
			switch (t.type) {
				case xx: {
					let {
						hasBoundaryNodes: r,
						reducedMotion: n
					} = t.payload;
					return (0, Le.merge)(e, {
						hasBoundaryNodes: r,
						reducedMotion: n
					})
				}
				case Sx:
					return (0, Le.set)(e, "active", !0);
				case Cx: {
					let {
						payload: {
							step: r = Fx
						}
					} = t;
					return (0, Le.set)(e, "tick", e.tick + r)
				}
				case Rx:
					return zf;
				case Px: {
					let {
						payload: {
							now: r
						}
					} = t;
					return (0, Le.set)(e, "tick", r)
				}
				case Lx: {
					let r = (0, Le.addLast)(e.eventListeners, t.payload);
					return (0, Le.set)(e, "eventListeners", r)
				}
				case Nx: {
					let {
						stateKey: r,
						newState: n
					} = t.payload;
					return (0, Le.setIn)(e, ["eventState", r], n)
				}
				case qx: {
					let {
						actionListId: r,
						isPlaying: n
					} = t.payload;
					return (0, Le.setIn)(e, ["playbackState", r], n)
				}
				case Mx: {
					let {
						width: r,
						mediaQueries: n
					} = t.payload, i = n.length, o = null;
					for (let a = 0; a < i; a++) {
						let {
							key: s,
							min: c,
							max: f
						} = n[a];
						if (r >= c && r <= f) {
							o = s;
							break
						}
					}
					return (0, Le.merge)(e, {
						viewportWidth: r,
						mediaQueryKey: o
					})
				}
				case Dx:
					return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
				default:
					return e
			}
		}
	});
	var Qf = u((XX, $f) => {
		function Gx() {
			this.__data__ = [], this.size = 0
		}
		$f.exports = Gx
	});
	var Sn = u((WX, Zf) => {
		function Ux(e, t) {
			return e === t || e !== e && t !== t
		}
		Zf.exports = Ux
	});
	var Cr = u((BX, Jf) => {
		var Vx = Sn();

		function Hx(e, t) {
			for (var r = e.length; r--;)
				if (Vx(e[r][0], t)) return r;
			return -1
		}
		Jf.exports = Hx
	});
	var td = u((jX, ed) => {
		var kx = Cr(),
			Xx = Array.prototype,
			Wx = Xx.splice;

		function Bx(e) {
			var t = this.__data__,
				r = kx(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : Wx.call(t, r, 1), --this.size, !0
		}
		ed.exports = Bx
	});
	var nd = u((zX, rd) => {
		var jx = Cr();

		function zx(e) {
			var t = this.__data__,
				r = jx(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		rd.exports = zx
	});
	var od = u((KX, id) => {
		var Kx = Cr();

		function Yx(e) {
			return Kx(this.__data__, e) > -1
		}
		id.exports = Yx
	});
	var sd = u((YX, ad) => {
		var $x = Cr();

		function Qx(e, t) {
			var r = this.__data__,
				n = $x(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		ad.exports = Qx
	});
	var Rr = u(($X, ud) => {
		var Zx = Qf(),
			Jx = td(),
			eS = nd(),
			tS = od(),
			rS = sd();

		function Kt(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Kt.prototype.clear = Zx;
		Kt.prototype.delete = Jx;
		Kt.prototype.get = eS;
		Kt.prototype.has = tS;
		Kt.prototype.set = rS;
		ud.exports = Kt
	});
	var ld = u((QX, cd) => {
		var nS = Rr();

		function iS() {
			this.__data__ = new nS, this.size = 0
		}
		cd.exports = iS
	});
	var dd = u((ZX, fd) => {
		function oS(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		fd.exports = oS
	});
	var vd = u((JX, pd) => {
		function aS(e) {
			return this.__data__.get(e)
		}
		pd.exports = aS
	});
	var hd = u((eW, gd) => {
		function sS(e) {
			return this.__data__.has(e)
		}
		gd.exports = sS
	});
	var it = u((tW, yd) => {
		function uS(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		yd.exports = uS
	});
	var jo = u((rW, Ed) => {
		var cS = _t(),
			lS = it(),
			fS = "[object AsyncFunction]",
			dS = "[object Function]",
			pS = "[object GeneratorFunction]",
			vS = "[object Proxy]";

		function gS(e) {
			if (!lS(e)) return !1;
			var t = cS(e);
			return t == dS || t == pS || t == fS || t == vS
		}
		Ed.exports = gS
	});
	var _d = u((nW, md) => {
		var hS = Ke(),
			yS = hS["__core-js_shared__"];
		md.exports = yS
	});
	var Id = u((iW, Td) => {
		var zo = _d(),
			bd = function() {
				var e = /[^.]+$/.exec(zo && zo.keys && zo.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function ES(e) {
			return !!bd && bd in e
		}
		Td.exports = ES
	});
	var Ko = u((oW, Od) => {
		var mS = Function.prototype,
			_S = mS.toString;

		function bS(e) {
			if (e != null) {
				try {
					return _S.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		Od.exports = bS
	});
	var wd = u((aW, Ad) => {
		var TS = jo(),
			IS = Id(),
			OS = it(),
			AS = Ko(),
			wS = /[\\^$.*+?()[\]{}|]/g,
			xS = /^\[object .+?Constructor\]$/,
			SS = Function.prototype,
			CS = Object.prototype,
			RS = SS.toString,
			LS = CS.hasOwnProperty,
			NS = RegExp("^" + RS.call(LS).replace(wS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function PS(e) {
			if (!OS(e) || IS(e)) return !1;
			var t = TS(e) ? NS : xS;
			return t.test(AS(e))
		}
		Ad.exports = PS
	});
	var Sd = u((sW, xd) => {
		function qS(e, t) {
			return e?.[t]
		}
		xd.exports = qS
	});
	var bt = u((uW, Cd) => {
		var MS = wd(),
			DS = Sd();

		function FS(e, t) {
			var r = DS(e, t);
			return MS(r) ? r : void 0
		}
		Cd.exports = FS
	});
	var Cn = u((cW, Rd) => {
		var GS = bt(),
			US = Ke(),
			VS = GS(US, "Map");
		Rd.exports = VS
	});
	var Lr = u((lW, Ld) => {
		var HS = bt(),
			kS = HS(Object, "create");
		Ld.exports = kS
	});
	var qd = u((fW, Pd) => {
		var Nd = Lr();

		function XS() {
			this.__data__ = Nd ? Nd(null) : {}, this.size = 0
		}
		Pd.exports = XS
	});
	var Dd = u((dW, Md) => {
		function WS(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		Md.exports = WS
	});
	var Gd = u((pW, Fd) => {
		var BS = Lr(),
			jS = "__lodash_hash_undefined__",
			zS = Object.prototype,
			KS = zS.hasOwnProperty;

		function YS(e) {
			var t = this.__data__;
			if (BS) {
				var r = t[e];
				return r === jS ? void 0 : r
			}
			return KS.call(t, e) ? t[e] : void 0
		}
		Fd.exports = YS
	});
	var Vd = u((vW, Ud) => {
		var $S = Lr(),
			QS = Object.prototype,
			ZS = QS.hasOwnProperty;

		function JS(e) {
			var t = this.__data__;
			return $S ? t[e] !== void 0 : ZS.call(t, e)
		}
		Ud.exports = JS
	});
	var kd = u((gW, Hd) => {
		var e0 = Lr(),
			t0 = "__lodash_hash_undefined__";

		function r0(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = e0 && t === void 0 ? t0 : t, this
		}
		Hd.exports = r0
	});
	var Wd = u((hW, Xd) => {
		var n0 = qd(),
			i0 = Dd(),
			o0 = Gd(),
			a0 = Vd(),
			s0 = kd();

		function Yt(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Yt.prototype.clear = n0;
		Yt.prototype.delete = i0;
		Yt.prototype.get = o0;
		Yt.prototype.has = a0;
		Yt.prototype.set = s0;
		Xd.exports = Yt
	});
	var zd = u((yW, jd) => {
		var Bd = Wd(),
			u0 = Rr(),
			c0 = Cn();

		function l0() {
			this.size = 0, this.__data__ = {
				hash: new Bd,
				map: new(c0 || u0),
				string: new Bd
			}
		}
		jd.exports = l0
	});
	var Yd = u((EW, Kd) => {
		function f0(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		Kd.exports = f0
	});
	var Nr = u((mW, $d) => {
		var d0 = Yd();

		function p0(e, t) {
			var r = e.__data__;
			return d0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		$d.exports = p0
	});
	var Zd = u((_W, Qd) => {
		var v0 = Nr();

		function g0(e) {
			var t = v0(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		Qd.exports = g0
	});
	var ep = u((bW, Jd) => {
		var h0 = Nr();

		function y0(e) {
			return h0(this, e).get(e)
		}
		Jd.exports = y0
	});
	var rp = u((TW, tp) => {
		var E0 = Nr();

		function m0(e) {
			return E0(this, e).has(e)
		}
		tp.exports = m0
	});
	var ip = u((IW, np) => {
		var _0 = Nr();

		function b0(e, t) {
			var r = _0(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		np.exports = b0
	});
	var Rn = u((OW, op) => {
		var T0 = zd(),
			I0 = Zd(),
			O0 = ep(),
			A0 = rp(),
			w0 = ip();

		function $t(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		$t.prototype.clear = T0;
		$t.prototype.delete = I0;
		$t.prototype.get = O0;
		$t.prototype.has = A0;
		$t.prototype.set = w0;
		op.exports = $t
	});
	var sp = u((AW, ap) => {
		var x0 = Rr(),
			S0 = Cn(),
			C0 = Rn(),
			R0 = 200;

		function L0(e, t) {
			var r = this.__data__;
			if (r instanceof x0) {
				var n = r.__data__;
				if (!S0 || n.length < R0 - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new C0(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		ap.exports = L0
	});
	var Yo = u((wW, up) => {
		var N0 = Rr(),
			P0 = ld(),
			q0 = dd(),
			M0 = vd(),
			D0 = hd(),
			F0 = sp();

		function Qt(e) {
			var t = this.__data__ = new N0(e);
			this.size = t.size
		}
		Qt.prototype.clear = P0;
		Qt.prototype.delete = q0;
		Qt.prototype.get = M0;
		Qt.prototype.has = D0;
		Qt.prototype.set = F0;
		up.exports = Qt
	});
	var lp = u((xW, cp) => {
		var G0 = "__lodash_hash_undefined__";

		function U0(e) {
			return this.__data__.set(e, G0), this
		}
		cp.exports = U0
	});
	var dp = u((SW, fp) => {
		function V0(e) {
			return this.__data__.has(e)
		}
		fp.exports = V0
	});
	var vp = u((CW, pp) => {
		var H0 = Rn(),
			k0 = lp(),
			X0 = dp();

		function Ln(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new H0; ++t < r;) this.add(e[t])
		}
		Ln.prototype.add = Ln.prototype.push = k0;
		Ln.prototype.has = X0;
		pp.exports = Ln
	});
	var hp = u((RW, gp) => {
		function W0(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		gp.exports = W0
	});
	var Ep = u((LW, yp) => {
		function B0(e, t) {
			return e.has(t)
		}
		yp.exports = B0
	});
	var $o = u((NW, mp) => {
		var j0 = vp(),
			z0 = hp(),
			K0 = Ep(),
			Y0 = 1,
			$0 = 2;

		function Q0(e, t, r, n, i, o) {
			var a = r & Y0,
				s = e.length,
				c = t.length;
			if (s != c && !(a && c > s)) return !1;
			var f = o.get(e),
				p = o.get(t);
			if (f && p) return f == t && p == e;
			var d = -1,
				h = !0,
				g = r & $0 ? new j0 : void 0;
			for (o.set(e, t), o.set(t, e); ++d < s;) {
				var m = e[d],
					_ = t[d];
				if (n) var N = a ? n(_, m, d, t, e, o) : n(m, _, d, e, t, o);
				if (N !== void 0) {
					if (N) continue;
					h = !1;
					break
				}
				if (g) {
					if (!z0(t, function(A, S) {
							if (!K0(g, S) && (m === A || i(m, A, r, n, o))) return g.push(S)
						})) {
						h = !1;
						break
					}
				} else if (!(m === _ || i(m, _, r, n, o))) {
					h = !1;
					break
				}
			}
			return o.delete(e), o.delete(t), h
		}
		mp.exports = Q0
	});
	var bp = u((PW, _p) => {
		var Z0 = Ke(),
			J0 = Z0.Uint8Array;
		_p.exports = J0
	});
	var Ip = u((qW, Tp) => {
		function eC(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		Tp.exports = eC
	});
	var Ap = u((MW, Op) => {
		function tC(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		Op.exports = tC
	});
	var Rp = u((DW, Cp) => {
		var wp = Wt(),
			xp = bp(),
			rC = Sn(),
			nC = $o(),
			iC = Ip(),
			oC = Ap(),
			aC = 1,
			sC = 2,
			uC = "[object Boolean]",
			cC = "[object Date]",
			lC = "[object Error]",
			fC = "[object Map]",
			dC = "[object Number]",
			pC = "[object RegExp]",
			vC = "[object Set]",
			gC = "[object String]",
			hC = "[object Symbol]",
			yC = "[object ArrayBuffer]",
			EC = "[object DataView]",
			Sp = wp ? wp.prototype : void 0,
			Qo = Sp ? Sp.valueOf : void 0;

		function mC(e, t, r, n, i, o, a) {
			switch (r) {
				case EC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case yC:
					return !(e.byteLength != t.byteLength || !o(new xp(e), new xp(t)));
				case uC:
				case cC:
				case dC:
					return rC(+e, +t);
				case lC:
					return e.name == t.name && e.message == t.message;
				case pC:
				case gC:
					return e == t + "";
				case fC:
					var s = iC;
				case vC:
					var c = n & aC;
					if (s || (s = oC), e.size != t.size && !c) return !1;
					var f = a.get(e);
					if (f) return f == t;
					n |= sC, a.set(e, t);
					var p = nC(s(e), s(t), n, i, o, a);
					return a.delete(e), p;
				case hC:
					if (Qo) return Qo.call(e) == Qo.call(t)
			}
			return !1
		}
		Cp.exports = mC
	});
	var Nn = u((FW, Lp) => {
		function _C(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		Lp.exports = _C
	});
	var Oe = u((GW, Np) => {
		var bC = Array.isArray;
		Np.exports = bC
	});
	var Zo = u((UW, Pp) => {
		var TC = Nn(),
			IC = Oe();

		function OC(e, t, r) {
			var n = t(e);
			return IC(e) ? n : TC(n, r(e))
		}
		Pp.exports = OC
	});
	var Mp = u((VW, qp) => {
		function AC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (o[i++] = a)
			}
			return o
		}
		qp.exports = AC
	});
	var Jo = u((HW, Dp) => {
		function wC() {
			return []
		}
		Dp.exports = wC
	});
	var ea = u((kW, Gp) => {
		var xC = Mp(),
			SC = Jo(),
			CC = Object.prototype,
			RC = CC.propertyIsEnumerable,
			Fp = Object.getOwnPropertySymbols,
			LC = Fp ? function(e) {
				return e == null ? [] : (e = Object(e), xC(Fp(e), function(t) {
					return RC.call(e, t)
				}))
			} : SC;
		Gp.exports = LC
	});
	var Vp = u((XW, Up) => {
		function NC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		Up.exports = NC
	});
	var kp = u((WW, Hp) => {
		var PC = _t(),
			qC = ft(),
			MC = "[object Arguments]";

		function DC(e) {
			return qC(e) && PC(e) == MC
		}
		Hp.exports = DC
	});
	var Pr = u((BW, Bp) => {
		var Xp = kp(),
			FC = ft(),
			Wp = Object.prototype,
			GC = Wp.hasOwnProperty,
			UC = Wp.propertyIsEnumerable,
			VC = Xp(function() {
				return arguments
			}()) ? Xp : function(e) {
				return FC(e) && GC.call(e, "callee") && !UC.call(e, "callee")
			};
		Bp.exports = VC
	});
	var zp = u((jW, jp) => {
		function HC() {
			return !1
		}
		jp.exports = HC
	});
	var Pn = u((qr, Zt) => {
		var kC = Ke(),
			XC = zp(),
			$p = typeof qr == "object" && qr && !qr.nodeType && qr,
			Kp = $p && typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
			WC = Kp && Kp.exports === $p,
			Yp = WC ? kC.Buffer : void 0,
			BC = Yp ? Yp.isBuffer : void 0,
			jC = BC || XC;
		Zt.exports = jC
	});
	var qn = u((zW, Qp) => {
		var zC = 9007199254740991,
			KC = /^(?:0|[1-9]\d*)$/;

		function YC(e, t) {
			var r = typeof e;
			return t = t ?? zC, !!t && (r == "number" || r != "symbol" && KC.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		Qp.exports = YC
	});
	var Mn = u((KW, Zp) => {
		var $C = 9007199254740991;

		function QC(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $C
		}
		Zp.exports = QC
	});
	var ev = u((YW, Jp) => {
		var ZC = _t(),
			JC = Mn(),
			eR = ft(),
			tR = "[object Arguments]",
			rR = "[object Array]",
			nR = "[object Boolean]",
			iR = "[object Date]",
			oR = "[object Error]",
			aR = "[object Function]",
			sR = "[object Map]",
			uR = "[object Number]",
			cR = "[object Object]",
			lR = "[object RegExp]",
			fR = "[object Set]",
			dR = "[object String]",
			pR = "[object WeakMap]",
			vR = "[object ArrayBuffer]",
			gR = "[object DataView]",
			hR = "[object Float32Array]",
			yR = "[object Float64Array]",
			ER = "[object Int8Array]",
			mR = "[object Int16Array]",
			_R = "[object Int32Array]",
			bR = "[object Uint8Array]",
			TR = "[object Uint8ClampedArray]",
			IR = "[object Uint16Array]",
			OR = "[object Uint32Array]",
			ge = {};
		ge[hR] = ge[yR] = ge[ER] = ge[mR] = ge[_R] = ge[bR] = ge[TR] = ge[IR] = ge[OR] = !0;
		ge[tR] = ge[rR] = ge[vR] = ge[nR] = ge[gR] = ge[iR] = ge[oR] = ge[aR] = ge[sR] = ge[uR] = ge[cR] = ge[lR] = ge[fR] = ge[dR] = ge[pR] = !1;

		function AR(e) {
			return eR(e) && JC(e.length) && !!ge[ZC(e)]
		}
		Jp.exports = AR
	});
	var rv = u(($W, tv) => {
		function wR(e) {
			return function(t) {
				return e(t)
			}
		}
		tv.exports = wR
	});
	var iv = u((Mr, Jt) => {
		var xR = Ao(),
			nv = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
			Dr = nv && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
			SR = Dr && Dr.exports === nv,
			ta = SR && xR.process,
			CR = function() {
				try {
					var e = Dr && Dr.require && Dr.require("util").types;
					return e || ta && ta.binding && ta.binding("util")
				} catch {}
			}();
		Jt.exports = CR
	});
	var Dn = u((QW, sv) => {
		var RR = ev(),
			LR = rv(),
			ov = iv(),
			av = ov && ov.isTypedArray,
			NR = av ? LR(av) : RR;
		sv.exports = NR
	});
	var ra = u((ZW, uv) => {
		var PR = Vp(),
			qR = Pr(),
			MR = Oe(),
			DR = Pn(),
			FR = qn(),
			GR = Dn(),
			UR = Object.prototype,
			VR = UR.hasOwnProperty;

		function HR(e, t) {
			var r = MR(e),
				n = !r && qR(e),
				i = !r && !n && DR(e),
				o = !r && !n && !i && GR(e),
				a = r || n || i || o,
				s = a ? PR(e.length, String) : [],
				c = s.length;
			for (var f in e)(t || VR.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || FR(f, c))) && s.push(f);
			return s
		}
		uv.exports = HR
	});
	var Fn = u((JW, cv) => {
		var kR = Object.prototype;

		function XR(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || kR;
			return e === r
		}
		cv.exports = XR
	});
	var fv = u((e5, lv) => {
		var WR = wo(),
			BR = WR(Object.keys, Object);
		lv.exports = BR
	});
	var Gn = u((t5, dv) => {
		var jR = Fn(),
			zR = fv(),
			KR = Object.prototype,
			YR = KR.hasOwnProperty;

		function $R(e) {
			if (!jR(e)) return zR(e);
			var t = [];
			for (var r in Object(e)) YR.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		dv.exports = $R
	});
	var Nt = u((r5, pv) => {
		var QR = jo(),
			ZR = Mn();

		function JR(e) {
			return e != null && ZR(e.length) && !QR(e)
		}
		pv.exports = JR
	});
	var Fr = u((n5, vv) => {
		var eL = ra(),
			tL = Gn(),
			rL = Nt();

		function nL(e) {
			return rL(e) ? eL(e) : tL(e)
		}
		vv.exports = nL
	});
	var hv = u((i5, gv) => {
		var iL = Zo(),
			oL = ea(),
			aL = Fr();

		function sL(e) {
			return iL(e, aL, oL)
		}
		gv.exports = sL
	});
	var mv = u((o5, Ev) => {
		var yv = hv(),
			uL = 1,
			cL = Object.prototype,
			lL = cL.hasOwnProperty;

		function fL(e, t, r, n, i, o) {
			var a = r & uL,
				s = yv(e),
				c = s.length,
				f = yv(t),
				p = f.length;
			if (c != p && !a) return !1;
			for (var d = c; d--;) {
				var h = s[d];
				if (!(a ? h in t : lL.call(t, h))) return !1
			}
			var g = o.get(e),
				m = o.get(t);
			if (g && m) return g == t && m == e;
			var _ = !0;
			o.set(e, t), o.set(t, e);
			for (var N = a; ++d < c;) {
				h = s[d];
				var A = e[h],
					S = t[h];
				if (n) var I = a ? n(S, A, h, t, e, o) : n(A, S, h, e, t, o);
				if (!(I === void 0 ? A === S || i(A, S, r, n, o) : I)) {
					_ = !1;
					break
				}
				N || (N = h == "constructor")
			}
			if (_ && !N) {
				var L = e.constructor,
					P = t.constructor;
				L != P && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof P == "function" && P instanceof P) && (_ = !1)
			}
			return o.delete(e), o.delete(t), _
		}
		Ev.exports = fL
	});
	var bv = u((a5, _v) => {
		var dL = bt(),
			pL = Ke(),
			vL = dL(pL, "DataView");
		_v.exports = vL
	});
	var Iv = u((s5, Tv) => {
		var gL = bt(),
			hL = Ke(),
			yL = gL(hL, "Promise");
		Tv.exports = yL
	});
	var Av = u((u5, Ov) => {
		var EL = bt(),
			mL = Ke(),
			_L = EL(mL, "Set");
		Ov.exports = _L
	});
	var na = u((c5, wv) => {
		var bL = bt(),
			TL = Ke(),
			IL = bL(TL, "WeakMap");
		wv.exports = IL
	});
	var Un = u((l5, Pv) => {
		var ia = bv(),
			oa = Cn(),
			aa = Iv(),
			sa = Av(),
			ua = na(),
			Nv = _t(),
			er = Ko(),
			xv = "[object Map]",
			OL = "[object Object]",
			Sv = "[object Promise]",
			Cv = "[object Set]",
			Rv = "[object WeakMap]",
			Lv = "[object DataView]",
			AL = er(ia),
			wL = er(oa),
			xL = er(aa),
			SL = er(sa),
			CL = er(ua),
			Pt = Nv;
		(ia && Pt(new ia(new ArrayBuffer(1))) != Lv || oa && Pt(new oa) != xv || aa && Pt(aa.resolve()) != Sv || sa && Pt(new sa) != Cv || ua && Pt(new ua) != Rv) && (Pt = function(e) {
			var t = Nv(e),
				r = t == OL ? e.constructor : void 0,
				n = r ? er(r) : "";
			if (n) switch (n) {
				case AL:
					return Lv;
				case wL:
					return xv;
				case xL:
					return Sv;
				case SL:
					return Cv;
				case CL:
					return Rv
			}
			return t
		});
		Pv.exports = Pt
	});
	var Hv = u((f5, Vv) => {
		var ca = Yo(),
			RL = $o(),
			LL = Rp(),
			NL = mv(),
			qv = Un(),
			Mv = Oe(),
			Dv = Pn(),
			PL = Dn(),
			qL = 1,
			Fv = "[object Arguments]",
			Gv = "[object Array]",
			Vn = "[object Object]",
			ML = Object.prototype,
			Uv = ML.hasOwnProperty;

		function DL(e, t, r, n, i, o) {
			var a = Mv(e),
				s = Mv(t),
				c = a ? Gv : qv(e),
				f = s ? Gv : qv(t);
			c = c == Fv ? Vn : c, f = f == Fv ? Vn : f;
			var p = c == Vn,
				d = f == Vn,
				h = c == f;
			if (h && Dv(e)) {
				if (!Dv(t)) return !1;
				a = !0, p = !1
			}
			if (h && !p) return o || (o = new ca), a || PL(e) ? RL(e, t, r, n, i, o) : LL(e, t, c, r, n, i, o);
			if (!(r & qL)) {
				var g = p && Uv.call(e, "__wrapped__"),
					m = d && Uv.call(t, "__wrapped__");
				if (g || m) {
					var _ = g ? e.value() : e,
						N = m ? t.value() : t;
					return o || (o = new ca), i(_, N, r, n, o)
				}
			}
			return h ? (o || (o = new ca), NL(e, t, r, n, i, o)) : !1
		}
		Vv.exports = DL
	});
	var la = u((d5, Wv) => {
		var FL = Hv(),
			kv = ft();

		function Xv(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !kv(e) && !kv(t) ? e !== e && t !== t : FL(e, t, r, n, Xv, i)
		}
		Wv.exports = Xv
	});
	var jv = u((p5, Bv) => {
		var GL = Yo(),
			UL = la(),
			VL = 1,
			HL = 2;

		function kL(e, t, r, n) {
			var i = r.length,
				o = i,
				a = !n;
			if (e == null) return !o;
			for (e = Object(e); i--;) {
				var s = r[i];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++i < o;) {
				s = r[i];
				var c = s[0],
					f = e[c],
					p = s[1];
				if (a && s[2]) {
					if (f === void 0 && !(c in e)) return !1
				} else {
					var d = new GL;
					if (n) var h = n(f, p, c, e, t, d);
					if (!(h === void 0 ? UL(p, f, VL | HL, n, d) : h)) return !1
				}
			}
			return !0
		}
		Bv.exports = kL
	});
	var fa = u((v5, zv) => {
		var XL = it();

		function WL(e) {
			return e === e && !XL(e)
		}
		zv.exports = WL
	});
	var Yv = u((g5, Kv) => {
		var BL = fa(),
			jL = Fr();

		function zL(e) {
			for (var t = jL(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, BL(i)]
			}
			return t
		}
		Kv.exports = zL
	});
	var da = u((h5, $v) => {
		function KL(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		$v.exports = KL
	});
	var Zv = u((y5, Qv) => {
		var YL = jv(),
			$L = Yv(),
			QL = da();

		function ZL(e) {
			var t = $L(e);
			return t.length == 1 && t[0][2] ? QL(t[0][0], t[0][1]) : function(r) {
				return r === e || YL(r, e, t)
			}
		}
		Qv.exports = ZL
	});
	var Gr = u((E5, Jv) => {
		var JL = _t(),
			eN = ft(),
			tN = "[object Symbol]";

		function rN(e) {
			return typeof e == "symbol" || eN(e) && JL(e) == tN
		}
		Jv.exports = rN
	});
	var Hn = u((m5, eg) => {
		var nN = Oe(),
			iN = Gr(),
			oN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			aN = /^\w*$/;

		function sN(e, t) {
			if (nN(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || iN(e) ? !0 : aN.test(e) || !oN.test(e) || t != null && e in Object(t)
		}
		eg.exports = sN
	});
	var ng = u((_5, rg) => {
		var tg = Rn(),
			uN = "Expected a function";

		function pa(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(uN);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					o = r.cache;
				if (o.has(i)) return o.get(i);
				var a = e.apply(this, n);
				return r.cache = o.set(i, a) || o, a
			};
			return r.cache = new(pa.Cache || tg), r
		}
		pa.Cache = tg;
		rg.exports = pa
	});
	var og = u((b5, ig) => {
		var cN = ng(),
			lN = 500;

		function fN(e) {
			var t = cN(e, function(n) {
					return r.size === lN && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		ig.exports = fN
	});
	var sg = u((T5, ag) => {
		var dN = og(),
			pN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			vN = /\\(\\)?/g,
			gN = dN(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(pN, function(r, n, i, o) {
					t.push(i ? o.replace(vN, "$1") : n || r)
				}), t
			});
		ag.exports = gN
	});
	var va = u((I5, ug) => {
		function hN(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		ug.exports = hN
	});
	var vg = u((O5, pg) => {
		var cg = Wt(),
			yN = va(),
			EN = Oe(),
			mN = Gr(),
			_N = 1 / 0,
			lg = cg ? cg.prototype : void 0,
			fg = lg ? lg.toString : void 0;

		function dg(e) {
			if (typeof e == "string") return e;
			if (EN(e)) return yN(e, dg) + "";
			if (mN(e)) return fg ? fg.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -_N ? "-0" : t
		}
		pg.exports = dg
	});
	var hg = u((A5, gg) => {
		var bN = vg();

		function TN(e) {
			return e == null ? "" : bN(e)
		}
		gg.exports = TN
	});
	var Ur = u((w5, yg) => {
		var IN = Oe(),
			ON = Hn(),
			AN = sg(),
			wN = hg();

		function xN(e, t) {
			return IN(e) ? e : ON(e, t) ? [e] : AN(wN(e))
		}
		yg.exports = xN
	});
	var tr = u((x5, Eg) => {
		var SN = Gr(),
			CN = 1 / 0;

		function RN(e) {
			if (typeof e == "string" || SN(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -CN ? "-0" : t
		}
		Eg.exports = RN
	});
	var kn = u((S5, mg) => {
		var LN = Ur(),
			NN = tr();

		function PN(e, t) {
			t = LN(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[NN(t[r++])];
			return r && r == n ? e : void 0
		}
		mg.exports = PN
	});
	var Xn = u((C5, _g) => {
		var qN = kn();

		function MN(e, t, r) {
			var n = e == null ? void 0 : qN(e, t);
			return n === void 0 ? r : n
		}
		_g.exports = MN
	});
	var Tg = u((R5, bg) => {
		function DN(e, t) {
			return e != null && t in Object(e)
		}
		bg.exports = DN
	});
	var Og = u((L5, Ig) => {
		var FN = Ur(),
			GN = Pr(),
			UN = Oe(),
			VN = qn(),
			HN = Mn(),
			kN = tr();

		function XN(e, t, r) {
			t = FN(t, e);
			for (var n = -1, i = t.length, o = !1; ++n < i;) {
				var a = kN(t[n]);
				if (!(o = e != null && r(e, a))) break;
				e = e[a]
			}
			return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && HN(i) && VN(a, i) && (UN(e) || GN(e)))
		}
		Ig.exports = XN
	});
	var wg = u((N5, Ag) => {
		var WN = Tg(),
			BN = Og();

		function jN(e, t) {
			return e != null && BN(e, t, WN)
		}
		Ag.exports = jN
	});
	var Sg = u((P5, xg) => {
		var zN = la(),
			KN = Xn(),
			YN = wg(),
			$N = Hn(),
			QN = fa(),
			ZN = da(),
			JN = tr(),
			eP = 1,
			tP = 2;

		function rP(e, t) {
			return $N(e) && QN(t) ? ZN(JN(e), t) : function(r) {
				var n = KN(r, e);
				return n === void 0 && n === t ? YN(r, e) : zN(t, n, eP | tP)
			}
		}
		xg.exports = rP
	});
	var Wn = u((q5, Cg) => {
		function nP(e) {
			return e
		}
		Cg.exports = nP
	});
	var ga = u((M5, Rg) => {
		function iP(e) {
			return function(t) {
				return t?.[e]
			}
		}
		Rg.exports = iP
	});
	var Ng = u((D5, Lg) => {
		var oP = kn();

		function aP(e) {
			return function(t) {
				return oP(t, e)
			}
		}
		Lg.exports = aP
	});
	var qg = u((F5, Pg) => {
		var sP = ga(),
			uP = Ng(),
			cP = Hn(),
			lP = tr();

		function fP(e) {
			return cP(e) ? sP(lP(e)) : uP(e)
		}
		Pg.exports = fP
	});
	var Tt = u((G5, Mg) => {
		var dP = Zv(),
			pP = Sg(),
			vP = Wn(),
			gP = Oe(),
			hP = qg();

		function yP(e) {
			return typeof e == "function" ? e : e == null ? vP : typeof e == "object" ? gP(e) ? pP(e[0], e[1]) : dP(e) : hP(e)
		}
		Mg.exports = yP
	});
	var ha = u((U5, Dg) => {
		var EP = Tt(),
			mP = Nt(),
			_P = Fr();

		function bP(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!mP(t)) {
					var o = EP(r, 3);
					t = _P(t), r = function(s) {
						return o(i[s], s, i)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? i[o ? t[a] : a] : void 0
			}
		}
		Dg.exports = bP
	});
	var ya = u((V5, Fg) => {
		function TP(e, t, r, n) {
			for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
				if (t(e[o], o, e)) return o;
			return -1
		}
		Fg.exports = TP
	});
	var Ug = u((H5, Gg) => {
		var IP = /\s/;

		function OP(e) {
			for (var t = e.length; t-- && IP.test(e.charAt(t)););
			return t
		}
		Gg.exports = OP
	});
	var Hg = u((k5, Vg) => {
		var AP = Ug(),
			wP = /^\s+/;

		function xP(e) {
			return e && e.slice(0, AP(e) + 1).replace(wP, "")
		}
		Vg.exports = xP
	});
	var Bn = u((X5, Wg) => {
		var SP = Hg(),
			kg = it(),
			CP = Gr(),
			Xg = 0 / 0,
			RP = /^[-+]0x[0-9a-f]+$/i,
			LP = /^0b[01]+$/i,
			NP = /^0o[0-7]+$/i,
			PP = parseInt;

		function qP(e) {
			if (typeof e == "number") return e;
			if (CP(e)) return Xg;
			if (kg(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = kg(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = SP(e);
			var r = LP.test(e);
			return r || NP.test(e) ? PP(e.slice(2), r ? 2 : 8) : RP.test(e) ? Xg : +e
		}
		Wg.exports = qP
	});
	var zg = u((W5, jg) => {
		var MP = Bn(),
			Bg = 1 / 0,
			DP = 17976931348623157e292;

		function FP(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = MP(e), e === Bg || e === -Bg) {
				var t = e < 0 ? -1 : 1;
				return t * DP
			}
			return e === e ? e : 0
		}
		jg.exports = FP
	});
	var Ea = u((B5, Kg) => {
		var GP = zg();

		function UP(e) {
			var t = GP(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		Kg.exports = UP
	});
	var $g = u((j5, Yg) => {
		var VP = ya(),
			HP = Tt(),
			kP = Ea(),
			XP = Math.max;

		function WP(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : kP(r);
			return i < 0 && (i = XP(n + i, 0)), VP(e, HP(t, 3), i)
		}
		Yg.exports = WP
	});
	var ma = u((z5, Qg) => {
		var BP = ha(),
			jP = $g(),
			zP = BP(jP);
		Qg.exports = zP
	});
	var eh = {};
	Me(eh, {
		ELEMENT_MATCHES: () => KP,
		FLEX_PREFIXED: () => _a,
		IS_BROWSER_ENV: () => $e,
		TRANSFORM_PREFIXED: () => It,
		TRANSFORM_STYLE_PREFIXED: () => zn,
		withBrowser: () => jn
	});
	var Jg, $e, jn, KP, _a, It, Zg, zn, Kn = he(() => {
		"use strict";
		Jg = ue(ma()), $e = typeof window < "u", jn = (e, t) => $e ? e() : t, KP = jn(() => (0, Jg.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), _a = jn(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i];
					if (e.style.display = o, e.style.display === o) return o
				}
				return r
			} catch {
				return r
			}
		}, "flex"), It = jn(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i] + r;
					if (e.style[o] !== void 0) return o
				}
			}
			return "transform"
		}, "transform"), Zg = It.split("transform")[0], zn = Zg ? Zg + "TransformStyle" : "transformStyle"
	});
	var ba = u((K5, oh) => {
		var YP = 4,
			$P = .001,
			QP = 1e-7,
			ZP = 10,
			Vr = 11,
			Yn = 1 / (Vr - 1),
			JP = typeof Float32Array == "function";

		function th(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function rh(e, t) {
			return 3 * t - 6 * e
		}

		function nh(e) {
			return 3 * e
		}

		function $n(e, t, r) {
			return ((th(t, r) * e + rh(t, r)) * e + nh(t)) * e
		}

		function ih(e, t, r) {
			return 3 * th(t, r) * e * e + 2 * rh(t, r) * e + nh(t)
		}

		function eq(e, t, r, n, i) {
			var o, a, s = 0;
			do a = t + (r - t) / 2, o = $n(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > QP && ++s < ZP);
			return a
		}

		function tq(e, t, r, n) {
			for (var i = 0; i < YP; ++i) {
				var o = ih(t, r, n);
				if (o === 0) return t;
				var a = $n(t, r, n) - e;
				t -= a / o
			}
			return t
		}
		oh.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var o = JP ? new Float32Array(Vr) : new Array(Vr);
			if (t !== r || n !== i)
				for (var a = 0; a < Vr; ++a) o[a] = $n(a * Yn, t, n);

			function s(c) {
				for (var f = 0, p = 1, d = Vr - 1; p !== d && o[p] <= c; ++p) f += Yn;
				--p;
				var h = (c - o[p]) / (o[p + 1] - o[p]),
					g = f + h * Yn,
					m = ih(g, t, n);
				return m >= $P ? tq(c, g, t, n) : m === 0 ? g : eq(c, f, f + Yn, t, n)
			}
			return function(f) {
				return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : $n(s(f), r, i)
			}
		}
	});
	var kr = {};
	Me(kr, {
		bounce: () => Fq,
		bouncePast: () => Gq,
		ease: () => rq,
		easeIn: () => nq,
		easeInOut: () => oq,
		easeOut: () => iq,
		inBack: () => Sq,
		inCirc: () => Oq,
		inCubic: () => cq,
		inElastic: () => Lq,
		inExpo: () => bq,
		inOutBack: () => Rq,
		inOutCirc: () => wq,
		inOutCubic: () => fq,
		inOutElastic: () => Pq,
		inOutExpo: () => Iq,
		inOutQuad: () => uq,
		inOutQuart: () => vq,
		inOutQuint: () => yq,
		inOutSine: () => _q,
		inQuad: () => aq,
		inQuart: () => dq,
		inQuint: () => gq,
		inSine: () => Eq,
		outBack: () => Cq,
		outBounce: () => xq,
		outCirc: () => Aq,
		outCubic: () => lq,
		outElastic: () => Nq,
		outExpo: () => Tq,
		outQuad: () => sq,
		outQuart: () => pq,
		outQuint: () => hq,
		outSine: () => mq,
		swingFrom: () => Mq,
		swingFromTo: () => qq,
		swingTo: () => Dq
	});

	function aq(e) {
		return Math.pow(e, 2)
	}

	function sq(e) {
		return -(Math.pow(e - 1, 2) - 1)
	}

	function uq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
	}

	function cq(e) {
		return Math.pow(e, 3)
	}

	function lq(e) {
		return Math.pow(e - 1, 3) + 1
	}

	function fq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
	}

	function dq(e) {
		return Math.pow(e, 4)
	}

	function pq(e) {
		return -(Math.pow(e - 1, 4) - 1)
	}

	function vq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
	}

	function gq(e) {
		return Math.pow(e, 5)
	}

	function hq(e) {
		return Math.pow(e - 1, 5) + 1
	}

	function yq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
	}

	function Eq(e) {
		return -Math.cos(e * (Math.PI / 2)) + 1
	}

	function mq(e) {
		return Math.sin(e * (Math.PI / 2))
	}

	function _q(e) {
		return -.5 * (Math.cos(Math.PI * e) - 1)
	}

	function bq(e) {
		return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
	}

	function Tq(e) {
		return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
	}

	function Iq(e) {
		return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
	}

	function Oq(e) {
		return -(Math.sqrt(1 - e * e) - 1)
	}

	function Aq(e) {
		return Math.sqrt(1 - Math.pow(e - 1, 2))
	}

	function wq(e) {
		return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
	}

	function xq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function Sq(e) {
		let t = dt;
		return e * e * ((t + 1) * e - t)
	}

	function Cq(e) {
		let t = dt;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function Rq(e) {
		let t = dt;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function Lq(e) {
		let t = dt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
	}

	function Nq(e) {
		let t = dt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
	}

	function Pq(e) {
		let t = dt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
	}

	function qq(e) {
		let t = dt;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function Mq(e) {
		let t = dt;
		return e * e * ((t + 1) * e - t)
	}

	function Dq(e) {
		let t = dt;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function Fq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function Gq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
	}
	var Hr, dt, rq, nq, iq, oq, Ta = he(() => {
		"use strict";
		Hr = ue(ba()), dt = 1.70158, rq = (0, Hr.default)(.25, .1, .25, 1), nq = (0, Hr.default)(.42, 0, 1, 1), iq = (0, Hr.default)(0, 0, .58, 1), oq = (0, Hr.default)(.42, 0, .58, 1)
	});
	var sh = {};
	Me(sh, {
		applyEasing: () => Vq,
		createBezierEasing: () => Uq,
		optimizeFloat: () => Xr
	});

	function Xr(e, t = 5, r = 10) {
		let n = Math.pow(r, t),
			i = Number(Math.round(e * n) / n);
		return Math.abs(i) > 1e-4 ? i : 0
	}

	function Uq(e) {
		return (0, ah.default)(...e)
	}

	function Vq(e, t, r) {
		return t === 0 ? 0 : t === 1 ? 1 : Xr(r ? t > 0 ? r(t) : t : t > 0 && e && kr[e] ? kr[e](t) : t)
	}
	var ah, Ia = he(() => {
		"use strict";
		Ta();
		ah = ue(ba())
	});
	var lh = {};
	Me(lh, {
		createElementState: () => ch,
		ixElements: () => eM,
		mergeActionState: () => Oa
	});

	function ch(e, t, r, n, i) {
		let o = r === Hq ? (0, rr.getIn)(i, ["config", "target", "objectId"]) : null;
		return (0, rr.mergeIn)(e, [n], {
			id: n,
			ref: t,
			refId: o,
			refType: r
		})
	}

	function Oa(e, t, r, n, i) {
		let o = rM(i);
		return (0, rr.mergeIn)(e, [t, Jq, r], n, o)
	}

	function rM(e) {
		let {
			config: t
		} = e;
		return tM.reduce((r, n) => {
			let i = n[0],
				o = n[1],
				a = t[i],
				s = t[o];
			return a != null && s != null && (r[o] = s), r
		}, {})
	}
	var rr, $5, Hq, Q5, kq, Xq, Wq, Bq, jq, zq, Kq, Yq, $q, Qq, Zq, uh, Jq, eM, tM, fh = he(() => {
		"use strict";
		rr = ue(zt());
		De();
		({
			HTML_ELEMENT: $5,
			PLAIN_OBJECT: Hq,
			ABSTRACT_NODE: Q5,
			CONFIG_X_VALUE: kq,
			CONFIG_Y_VALUE: Xq,
			CONFIG_Z_VALUE: Wq,
			CONFIG_VALUE: Bq,
			CONFIG_X_UNIT: jq,
			CONFIG_Y_UNIT: zq,
			CONFIG_Z_UNIT: Kq,
			CONFIG_UNIT: Yq
		} = Se), {
			IX2_SESSION_STOPPED: $q,
			IX2_INSTANCE_ADDED: Qq,
			IX2_ELEMENT_STATE_CHANGED: Zq
		} = Te, uh = {}, Jq = "refState", eM = (e = uh, t = {}) => {
			switch (t.type) {
				case $q:
					return uh;
				case Qq: {
					let {
						elementId: r,
						element: n,
						origin: i,
						actionItem: o,
						refType: a
					} = t.payload, {
						actionTypeId: s
					} = o, c = e;
					return (0, rr.getIn)(c, [r, n]) !== n && (c = ch(c, n, a, r, o)), Oa(c, r, s, i, o)
				}
				case Zq: {
					let {
						elementId: r,
						actionTypeId: n,
						current: i,
						actionItem: o
					} = t.payload;
					return Oa(e, r, n, i, o)
				}
				default:
					return e
			}
		};
		tM = [
			[kq, jq],
			[Xq, zq],
			[Wq, Kq],
			[Bq, Yq]
		]
	});
	var dh = u(Ae => {
		"use strict";
		Object.defineProperty(Ae, "__esModule", {
			value: !0
		});
		Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
		var nM = e => e.value;
		Ae.getPluginConfig = nM;
		var iM = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		Ae.getPluginDuration = iM;
		var oM = e => e || {
			value: 0
		};
		Ae.getPluginOrigin = oM;
		var aM = e => ({
			value: e.value
		});
		Ae.getPluginDestination = aM;
		var sM = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		Ae.createPluginInstance = sM;
		var uM = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		Ae.renderPlugin = uM;
		var cM = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		Ae.clearPlugin = cM
	});
	var vh = u(we => {
		"use strict";
		Object.defineProperty(we, "__esModule", {
			value: !0
		});
		we.renderPlugin = we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
		var lM = e => document.querySelector(`[data-w-id="${e}"]`),
			fM = () => window.Webflow.require("spline"),
			dM = (e, t) => e.filter(r => !t.includes(r)),
			pM = (e, t) => e.value[t];
		we.getPluginConfig = pM;
		var vM = () => null;
		we.getPluginDuration = vM;
		var ph = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			gM = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let o = Object.keys(e),
						a = dM(n, o);
					return a.length ? a.reduce((c, f) => (c[f] = ph[f], c), e) : e
				}
				return n.reduce((o, a) => (o[a] = ph[a], o), {})
			};
		we.getPluginOrigin = gM;
		var hM = e => e.value;
		we.getPluginDestination = hM;
		var yM = (e, t) => {
			var r, n;
			let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
			return i ? lM(i) : null
		};
		we.createPluginInstance = yM;
		var EM = (e, t, r) => {
			let n = fM(),
				i = n.getInstance(e),
				o = r.config.target.objectId,
				a = s => {
					if (!s) throw new Error("Invalid spline app passed to renderSpline");
					let c = o && s.findObjectById(o);
					if (!c) return;
					let {
						PLUGIN_SPLINE: f
					} = t;
					f.positionX != null && (c.position.x = f.positionX), f.positionY != null && (c.position.y = f.positionY), f.positionZ != null && (c.position.z = f.positionZ), f.rotationX != null && (c.rotation.x = f.rotationX), f.rotationY != null && (c.rotation.y = f.rotationY), f.rotationZ != null && (c.rotation.z = f.rotationZ), f.scaleX != null && (c.scale.x = f.scaleX), f.scaleY != null && (c.scale.y = f.scaleY), f.scaleZ != null && (c.scale.z = f.scaleZ)
				};
			i ? a(i.spline) : n.setLoadHandler(e, a)
		};
		we.renderPlugin = EM;
		var mM = () => null;
		we.clearPlugin = mM
	});
	var hh = u(Ie => {
		"use strict";
		Object.defineProperty(Ie, "__esModule", {
			value: !0
		});
		Ie.getPluginOrigin = Ie.getPluginDuration = Ie.getPluginDestination = Ie.getPluginConfig = Ie.createPluginInstance = Ie.clearPlugin = void 0;
		Ie.normalizeColor = gh;
		Ie.renderPlugin = void 0;

		function gh(e) {
			let t, r, n, i = 1,
				o = e.replace(/\s/g, "").toLowerCase();
			if (o.startsWith("#")) {
				let a = o.substring(1);
				a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
			} else if (o.startsWith("rgba")) {
				let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
				t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), i = parseFloat(a[3])
			} else if (o.startsWith("rgb")) {
				let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
				t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
			} else if (o.startsWith("hsla")) {
				let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
					s = parseFloat(a[0]),
					c = parseFloat(a[1].replace("%", "")) / 100,
					f = parseFloat(a[2].replace("%", "")) / 100;
				i = parseFloat(a[3]);
				let p = (1 - Math.abs(2 * f - 1)) * c,
					d = p * (1 - Math.abs(s / 60 % 2 - 1)),
					h = f - p / 2,
					g, m, _;
				s >= 0 && s < 60 ? (g = p, m = d, _ = 0) : s >= 60 && s < 120 ? (g = d, m = p, _ = 0) : s >= 120 && s < 180 ? (g = 0, m = p, _ = d) : s >= 180 && s < 240 ? (g = 0, m = d, _ = p) : s >= 240 && s < 300 ? (g = d, m = 0, _ = p) : (g = p, m = 0, _ = d), t = Math.round((g + h) * 255), r = Math.round((m + h) * 255), n = Math.round((_ + h) * 255)
			} else if (o.startsWith("hsl")) {
				let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
					s = parseFloat(a[0]),
					c = parseFloat(a[1].replace("%", "")) / 100,
					f = parseFloat(a[2].replace("%", "")) / 100,
					p = (1 - Math.abs(2 * f - 1)) * c,
					d = p * (1 - Math.abs(s / 60 % 2 - 1)),
					h = f - p / 2,
					g, m, _;
				s >= 0 && s < 60 ? (g = p, m = d, _ = 0) : s >= 60 && s < 120 ? (g = d, m = p, _ = 0) : s >= 120 && s < 180 ? (g = 0, m = p, _ = d) : s >= 180 && s < 240 ? (g = 0, m = d, _ = p) : s >= 240 && s < 300 ? (g = d, m = 0, _ = p) : (g = p, m = 0, _ = d), t = Math.round((g + h) * 255), r = Math.round((m + h) * 255), n = Math.round((_ + h) * 255)
			}
			return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
				red: t,
				green: r,
				blue: n,
				alpha: i
			}
		}
		var _M = (e, t) => e.value[t];
		Ie.getPluginConfig = _M;
		var bM = () => null;
		Ie.getPluginDuration = bM;
		var TM = (e, t) => {
			if (e) return e;
			let r = t.config.value,
				n = t.config.target.objectId,
				i = getComputedStyle(document.documentElement).getPropertyValue(n);
			if (r.size != null) return {
				size: parseInt(i, 10)
			};
			if (r.red != null && r.green != null && r.blue != null) return gh(i)
		};
		Ie.getPluginOrigin = TM;
		var IM = e => e.value;
		Ie.getPluginDestination = IM;
		var OM = () => null;
		Ie.createPluginInstance = OM;
		var AM = (e, t, r) => {
			let n = r.config.target.objectId,
				i = r.config.value.unit,
				{
					PLUGIN_VARIABLE: o
				} = t,
				{
					size: a,
					red: s,
					green: c,
					blue: f,
					alpha: p
				} = o,
				d;
			a != null && (d = a + i), s != null && f != null && c != null && p != null && (d = `rgba(${s}, ${c}, ${f}, ${p})`), d != null && document.documentElement.style.setProperty(n, d)
		};
		Ie.renderPlugin = AM;
		var wM = (e, t) => {
			let r = t.config.target.objectId;
			document.documentElement.style.removeProperty(r)
		};
		Ie.clearPlugin = wM
	});
	var yh = u(Qn => {
		"use strict";
		var wa = ln().default;
		Object.defineProperty(Qn, "__esModule", {
			value: !0
		});
		Qn.pluginMethodMap = void 0;
		var Aa = (De(), Je(If)),
			xM = wa(dh()),
			SM = wa(vh()),
			CM = wa(hh()),
			tB = Qn.pluginMethodMap = new Map([
				[Aa.ActionTypeConsts.PLUGIN_LOTTIE, {
					...xM
				}],
				[Aa.ActionTypeConsts.PLUGIN_SPLINE, {
					...SM
				}],
				[Aa.ActionTypeConsts.PLUGIN_VARIABLE, {
					...CM
				}]
			])
	});
	var Eh = {};
	Me(Eh, {
		clearPlugin: () => Na,
		createPluginInstance: () => LM,
		getPluginConfig: () => Sa,
		getPluginDestination: () => Ra,
		getPluginDuration: () => RM,
		getPluginOrigin: () => Ca,
		isPluginType: () => qt,
		renderPlugin: () => La
	});

	function qt(e) {
		return xa.pluginMethodMap.has(e)
	}
	var xa, Mt, Sa, Ca, RM, Ra, LM, La, Na, Pa = he(() => {
		"use strict";
		Kn();
		xa = ue(yh());
		Mt = e => t => {
			if (!$e) return () => null;
			let r = xa.pluginMethodMap.get(t);
			if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
			let n = r[e];
			if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
			return n
		}, Sa = Mt("getPluginConfig"), Ca = Mt("getPluginOrigin"), RM = Mt("getPluginDuration"), Ra = Mt("getPluginDestination"), LM = Mt("createPluginInstance"), La = Mt("renderPlugin"), Na = Mt("clearPlugin")
	});
	var _h = u((iB, mh) => {
		function NM(e, t) {
			return e == null || e !== e ? t : e
		}
		mh.exports = NM
	});
	var Th = u((oB, bh) => {
		function PM(e, t, r, n) {
			var i = -1,
				o = e == null ? 0 : e.length;
			for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
			return r
		}
		bh.exports = PM
	});
	var Oh = u((aB, Ih) => {
		function qM(e) {
			return function(t, r, n) {
				for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
					var c = a[e ? s : ++i];
					if (r(o[c], c, o) === !1) break
				}
				return t
			}
		}
		Ih.exports = qM
	});
	var wh = u((sB, Ah) => {
		var MM = Oh(),
			DM = MM();
		Ah.exports = DM
	});
	var qa = u((uB, xh) => {
		var FM = wh(),
			GM = Fr();

		function UM(e, t) {
			return e && FM(e, t, GM)
		}
		xh.exports = UM
	});
	var Ch = u((cB, Sh) => {
		var VM = Nt();

		function HM(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!VM(r)) return e(r, n);
				for (var i = r.length, o = t ? i : -1, a = Object(r);
					(t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
				return r
			}
		}
		Sh.exports = HM
	});
	var Ma = u((lB, Rh) => {
		var kM = qa(),
			XM = Ch(),
			WM = XM(kM);
		Rh.exports = WM
	});
	var Nh = u((fB, Lh) => {
		function BM(e, t, r, n, i) {
			return i(e, function(o, a, s) {
				r = n ? (n = !1, o) : t(r, o, a, s)
			}), r
		}
		Lh.exports = BM
	});
	var qh = u((dB, Ph) => {
		var jM = Th(),
			zM = Ma(),
			KM = Tt(),
			YM = Nh(),
			$M = Oe();

		function QM(e, t, r) {
			var n = $M(e) ? jM : YM,
				i = arguments.length < 3;
			return n(e, KM(t, 4), r, i, zM)
		}
		Ph.exports = QM
	});
	var Dh = u((pB, Mh) => {
		var ZM = ya(),
			JM = Tt(),
			e1 = Ea(),
			t1 = Math.max,
			r1 = Math.min;

		function n1(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = e1(r), i = r < 0 ? t1(n + i, 0) : r1(i, n - 1)), ZM(e, JM(t, 3), i, !0)
		}
		Mh.exports = n1
	});
	var Gh = u((vB, Fh) => {
		var i1 = ha(),
			o1 = Dh(),
			a1 = i1(o1);
		Fh.exports = a1
	});

	function Uh(e, t) {
		return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
	}

	function u1(e, t) {
		if (Uh(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		let r = Object.keys(e),
			n = Object.keys(t);
		if (r.length !== n.length) return !1;
		for (let i = 0; i < r.length; i++)
			if (!s1.call(t, r[i]) || !Uh(e[r[i]], t[r[i]])) return !1;
		return !0
	}
	var s1, Da, Vh = he(() => {
		"use strict";
		s1 = Object.prototype.hasOwnProperty;
		Da = u1
	});
	var ny = {};
	Me(ny, {
		cleanupHTMLElement: () => oD,
		clearAllStyles: () => iD,
		clearObjectCache: () => A1,
		getActionListProgress: () => sD,
		getAffectedElements: () => Ha,
		getComputedStyle: () => P1,
		getDestinationValues: () => V1,
		getElementId: () => C1,
		getInstanceId: () => x1,
		getInstanceOrigin: () => D1,
		getItemConfigByKey: () => U1,
		getMaxDurationItemIndex: () => ry,
		getNamespacedParameterId: () => lD,
		getRenderType: () => Jh,
		getStyleProp: () => H1,
		mediaQueriesEqual: () => dD,
		observeStore: () => N1,
		reduceListToGroup: () => uD,
		reifyState: () => R1,
		renderHTMLElement: () => k1,
		shallowEqual: () => Da,
		shouldAllowMediaQuery: () => fD,
		shouldNamespaceEventParameter: () => cD,
		stringifyTarget: () => pD
	});

	function A1() {
		Zn.clear()
	}

	function x1() {
		return "i" + w1++
	}

	function C1(e, t) {
		for (let r in e) {
			let n = e[r];
			if (n && n.ref === t) return n.id
		}
		return "e" + S1++
	}

	function R1({
		events: e,
		actionLists: t,
		site: r
	} = {}) {
		let n = (0, ri.default)(e, (a, s) => {
				let {
					eventTypeId: c
				} = s;
				return a[c] || (a[c] = {}), a[c][s.id] = s, a
			}, {}),
			i = r && r.mediaQueries,
			o = [];
		return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
			ixData: {
				events: e,
				actionLists: t,
				eventTypeMap: n,
				mediaQueries: i,
				mediaQueryKeys: o
			}
		}
	}

	function N1({
		store: e,
		select: t,
		onChange: r,
		comparator: n = L1
	}) {
		let {
			getState: i,
			subscribe: o
		} = e, a = o(c), s = t(i());

		function c() {
			let f = t(i());
			if (f == null) {
				a();
				return
			}
			n(f, s) || (s = f, r(s, e))
		}
		return a
	}

	function Xh(e) {
		let t = typeof e;
		if (t === "string") return {
			id: e
		};
		if (e != null && t === "object") {
			let {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: o,
				appliesTo: a,
				useEventTarget: s
			} = e;
			return {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: o,
				appliesTo: a,
				useEventTarget: s
			}
		}
		return {}
	}

	function Ha({
		config: e,
		event: t,
		eventTarget: r,
		elementRoot: n,
		elementApi: i
	}) {
		if (!i) throw new Error("IX2 missing elementApi");
		let {
			targets: o
		} = e;
		if (Array.isArray(o) && o.length > 0) return o.reduce((x, v) => x.concat(Ha({
			config: {
				target: v
			},
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		})), []);
		let {
			getValidDocument: a,
			getQuerySelector: s,
			queryDocument: c,
			getChildElements: f,
			getSiblingElements: p,
			matchSelector: d,
			elementContains: h,
			isSiblingNode: g
		} = i, {
			target: m
		} = e;
		if (!m) return [];
		let {
			id: _,
			objectId: N,
			selector: A,
			selectorGuids: S,
			appliesTo: I,
			useEventTarget: L
		} = Xh(m);
		if (N) return [Zn.has(N) ? Zn.get(N) : Zn.set(N, {}).get(N)];
		if (I === Ho.PAGE) {
			let x = a(_);
			return x ? [x] : []
		}
		let R = (t?.action?.config?.affectedElements ?? {})[_ || A] || {},
			X = !!(R.id || R.selector),
			B, z, Q, G = t && s(Xh(t.target));
		if (X ? (B = R.limitAffectedElements, z = G, Q = s(R)) : z = Q = s({
				id: _,
				selector: A,
				selectorGuids: S
			}), t && L) {
			let x = r && (Q || L === !0) ? [r] : c(G);
			if (Q) {
				if (L === T1) return c(Q).filter(v => x.some(C => h(v, C)));
				if (L === Hh) return c(Q).filter(v => x.some(C => h(C, v)));
				if (L === kh) return c(Q).filter(v => x.some(C => g(C, v)))
			}
			return x
		}
		return z == null || Q == null ? [] : $e && n ? c(Q).filter(x => n.contains(x)) : B === Hh ? c(z, Q) : B === b1 ? f(c(z)).filter(d(Q)) : B === kh ? p(c(z)).filter(d(Q)) : c(Q)
	}

	function P1({
		element: e,
		actionItem: t
	}) {
		if (!$e) return {};
		let {
			actionTypeId: r
		} = t;
		switch (r) {
			case sr:
			case ur:
			case cr:
			case lr:
			case ii:
				return window.getComputedStyle(e);
			default:
				return {}
		}
	}

	function D1(e, t = {}, r = {}, n, i) {
		let {
			getStyle: o
		} = i, {
			actionTypeId: a
		} = n;
		if (qt(a)) return Ca(a)(t[a], n);
		switch (n.actionTypeId) {
			case ir:
			case or:
			case ar:
			case zr:
				return t[n.actionTypeId] || ka[n.actionTypeId];
			case Kr:
				return q1(t[n.actionTypeId], n.config.filters);
			case Yr:
				return M1(t[n.actionTypeId], n.config.fontVariations);
			case $h:
				return {
					value: (0, pt.default)(parseFloat(o(e, ei)), 1)
				};
			case sr: {
				let s = o(e, ot),
					c = o(e, at),
					f, p;
				return n.config.widthUnit === Ot ? f = Wh.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, pt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === Ot ? p = Wh.test(c) ? parseFloat(c) : parseFloat(r.height) : p = (0, pt.default)(parseFloat(c), parseFloat(r.height)), {
					widthValue: f,
					heightValue: p
				}
			}
			case ur:
			case cr:
			case lr:
				return tD({
					element: e,
					actionTypeId: n.actionTypeId,
					computedStyle: r,
					getStyle: o
				});
			case ii:
				return {
					value: (0, pt.default)(o(e, ti), r.display)
				};
			case O1:
				return t[n.actionTypeId] || {
					value: 0
				};
			default:
				return
		}
	}

	function V1({
		element: e,
		actionItem: t,
		elementApi: r
	}) {
		if (qt(t.actionTypeId)) return Ra(t.actionTypeId)(t.config);
		switch (t.actionTypeId) {
			case ir:
			case or:
			case ar:
			case zr: {
				let {
					xValue: n,
					yValue: i,
					zValue: o
				} = t.config;
				return {
					xValue: n,
					yValue: i,
					zValue: o
				}
			}
			case sr: {
				let {
					getStyle: n,
					setStyle: i,
					getProperty: o
				} = r, {
					widthUnit: a,
					heightUnit: s
				} = t.config, {
					widthValue: c,
					heightValue: f
				} = t.config;
				if (!$e) return {
					widthValue: c,
					heightValue: f
				};
				if (a === Ot) {
					let p = n(e, ot);
					i(e, ot, ""), c = o(e, "offsetWidth"), i(e, ot, p)
				}
				if (s === Ot) {
					let p = n(e, at);
					i(e, at, ""), f = o(e, "offsetHeight"), i(e, at, p)
				}
				return {
					widthValue: c,
					heightValue: f
				}
			}
			case ur:
			case cr:
			case lr: {
				let {
					rValue: n,
					gValue: i,
					bValue: o,
					aValue: a
				} = t.config;
				return {
					rValue: n,
					gValue: i,
					bValue: o,
					aValue: a
				}
			}
			case Kr:
				return t.config.filters.reduce(F1, {});
			case Yr:
				return t.config.fontVariations.reduce(G1, {});
			default: {
				let {
					value: n
				} = t.config;
				return {
					value: n
				}
			}
		}
	}

	function Jh(e) {
		if (/^TRANSFORM_/.test(e)) return Kh;
		if (/^STYLE_/.test(e)) return Ua;
		if (/^GENERAL_/.test(e)) return Ga;
		if (/^PLUGIN_/.test(e)) return Yh
	}

	function H1(e, t) {
		return e === Ua ? t.replace("STYLE_", "").toLowerCase() : null
	}

	function k1(e, t, r, n, i, o, a, s, c) {
		switch (s) {
			case Kh:
				return z1(e, t, r, i, a);
			case Ua:
				return rD(e, t, r, i, o, a);
			case Ga:
				return nD(e, i, a);
			case Yh: {
				let {
					actionTypeId: f
				} = i;
				if (qt(f)) return La(f)(c, t, i)
			}
		}
	}

	function z1(e, t, r, n, i) {
		let o = j1.map(s => {
				let c = ka[s],
					{
						xValue: f = c.xValue,
						yValue: p = c.yValue,
						zValue: d = c.zValue,
						xUnit: h = "",
						yUnit: g = "",
						zUnit: m = ""
					} = t[s] || {};
				switch (s) {
					case ir:
						return `${f1}(${f}${h}, ${p}${g}, ${d}${m})`;
					case or:
						return `${d1}(${f}${h}, ${p}${g}, ${d}${m})`;
					case ar:
						return `${p1}(${f}${h}) ${v1}(${p}${g}) ${g1}(${d}${m})`;
					case zr:
						return `${h1}(${f}${h}, ${p}${g})`;
					default:
						return ""
				}
			}).join(" "),
			{
				setStyle: a
			} = i;
		Dt(e, It, i), a(e, It, o), $1(n, r) && a(e, zn, y1)
	}

	function K1(e, t, r, n) {
		let i = (0, ri.default)(t, (a, s, c) => `${a} ${c}(${s}${B1(c,r)})`, ""),
			{
				setStyle: o
			} = n;
		Dt(e, Wr, n), o(e, Wr, i)
	}

	function Y1(e, t, r, n) {
		let i = (0, ri.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
			{
				setStyle: o
			} = n;
		Dt(e, Br, n), o(e, Br, i)
	}

	function $1({
		actionTypeId: e
	}, {
		xValue: t,
		yValue: r,
		zValue: n
	}) {
		return e === ir && n !== void 0 || e === or && n !== void 0 || e === ar && (t !== void 0 || r !== void 0)
	}

	function eD(e, t) {
		let r = e.exec(t);
		return r ? r[1] : ""
	}

	function tD({
		element: e,
		actionTypeId: t,
		computedStyle: r,
		getStyle: n
	}) {
		let i = Va[t],
			o = n(e, i),
			a = Z1.test(o) ? o : r[i],
			s = eD(J1, a).split(jr);
		return {
			rValue: (0, pt.default)(parseInt(s[0], 10), 255),
			gValue: (0, pt.default)(parseInt(s[1], 10), 255),
			bValue: (0, pt.default)(parseInt(s[2], 10), 255),
			aValue: (0, pt.default)(parseFloat(s[3]), 1)
		}
	}

	function rD(e, t, r, n, i, o) {
		let {
			setStyle: a
		} = o;
		switch (n.actionTypeId) {
			case sr: {
				let {
					widthUnit: s = "",
					heightUnit: c = ""
				} = n.config, {
					widthValue: f,
					heightValue: p
				} = r;
				f !== void 0 && (s === Ot && (s = "px"), Dt(e, ot, o), a(e, ot, f + s)), p !== void 0 && (c === Ot && (c = "px"), Dt(e, at, o), a(e, at, p + c));
				break
			}
			case Kr: {
				K1(e, r, n.config, o);
				break
			}
			case Yr: {
				Y1(e, r, n.config, o);
				break
			}
			case ur:
			case cr:
			case lr: {
				let s = Va[n.actionTypeId],
					c = Math.round(r.rValue),
					f = Math.round(r.gValue),
					p = Math.round(r.bValue),
					d = r.aValue;
				Dt(e, s, o), a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
				break
			}
			default: {
				let {
					unit: s = ""
				} = n.config;
				Dt(e, i, o), a(e, i, r.value + s);
				break
			}
		}
	}

	function nD(e, t, r) {
		let {
			setStyle: n
		} = r;
		switch (t.actionTypeId) {
			case ii: {
				let {
					value: i
				} = t.config;
				i === E1 && $e ? n(e, ti, _a) : n(e, ti, i);
				return
			}
		}
	}

	function Dt(e, t, r) {
		if (!$e) return;
		let n = Zh[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: o
		} = r, a = i(e, nr);
		if (!a) {
			o(e, nr, n);
			return
		}
		let s = a.split(jr).map(Qh);
		s.indexOf(n) === -1 && o(e, nr, s.concat(n).join(jr))
	}

	function ey(e, t, r) {
		if (!$e) return;
		let n = Zh[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: o
		} = r, a = i(e, nr);
		!a || a.indexOf(n) === -1 || o(e, nr, a.split(jr).map(Qh).filter(s => s !== n).join(jr))
	}

	function iD({
		store: e,
		elementApi: t
	}) {
		let {
			ixData: r
		} = e.getState(), {
			events: n = {},
			actionLists: i = {}
		} = r;
		Object.keys(n).forEach(o => {
			let a = n[o],
				{
					config: s
				} = a.action,
				{
					actionListId: c
				} = s,
				f = i[c];
			f && Bh({
				actionList: f,
				event: a,
				elementApi: t
			})
		}), Object.keys(i).forEach(o => {
			Bh({
				actionList: i[o],
				elementApi: t
			})
		})
	}

	function Bh({
		actionList: e = {},
		event: t,
		elementApi: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e;
		n && n.forEach(o => {
			jh({
				actionGroup: o,
				event: t,
				elementApi: r
			})
		}), i && i.forEach(o => {
			let {
				continuousActionGroups: a
			} = o;
			a.forEach(s => {
				jh({
					actionGroup: s,
					event: t,
					elementApi: r
				})
			})
		})
	}

	function jh({
		actionGroup: e,
		event: t,
		elementApi: r
	}) {
		let {
			actionItems: n
		} = e;
		n.forEach(i => {
			let {
				actionTypeId: o,
				config: a
			} = i, s;
			qt(o) ? s = c => Na(o)(c, i) : s = ty({
				effect: aD,
				actionTypeId: o,
				elementApi: r
			}), Ha({
				config: a,
				event: t,
				elementApi: r
			}).forEach(s)
		})
	}

	function oD(e, t, r) {
		let {
			setStyle: n,
			getStyle: i
		} = r, {
			actionTypeId: o
		} = t;
		if (o === sr) {
			let {
				config: a
			} = t;
			a.widthUnit === Ot && n(e, ot, ""), a.heightUnit === Ot && n(e, at, "")
		}
		i(e, nr) && ty({
			effect: ey,
			actionTypeId: o,
			elementApi: r
		})(e)
	}

	function aD(e, t, r) {
		let {
			setStyle: n
		} = r;
		ey(e, t, r), n(e, t, ""), t === It && n(e, zn, "")
	}

	function ry(e) {
		let t = 0,
			r = 0;
		return e.forEach((n, i) => {
			let {
				config: o
			} = n, a = o.delay + o.duration;
			a >= t && (t = a, r = i)
		}), r
	}

	function sD(e, t) {
		let {
			actionItemGroups: r,
			useFirstGroupAsInitialState: n
		} = e, {
			actionItem: i,
			verboseTimeElapsed: o = 0
		} = t, a = 0, s = 0;
		return r.forEach((c, f) => {
			if (n && f === 0) return;
			let {
				actionItems: p
			} = c, d = p[ry(p)], {
				config: h,
				actionTypeId: g
			} = d;
			i.id === d.id && (s = a + o);
			let m = Jh(g) === Ga ? 0 : h.duration;
			a += h.delay + m
		}), a > 0 ? Xr(s / a) : 0
	}

	function uD({
		actionList: e,
		actionItemId: t,
		rawData: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e, o = [], a = s => (o.push((0, ni.mergeIn)(s, ["config"], {
			delay: 0,
			duration: 0
		})), s.id === t);
		return n && n.some(({
			actionItems: s
		}) => s.some(a)), i && i.some(s => {
			let {
				continuousActionGroups: c
			} = s;
			return c.some(({
				actionItems: f
			}) => f.some(a))
		}), (0, ni.setIn)(r, ["actionLists"], {
			[e.id]: {
				id: e.id,
				actionItemGroups: [{
					actionItems: o
				}]
			}
		})
	}

	function cD(e, {
		basedOn: t
	}) {
		return e === Ye.SCROLLING_IN_VIEW && (t === nt.ELEMENT || t == null) || e === Ye.MOUSE_MOVE && t === nt.ELEMENT
	}

	function lD(e, t) {
		return e + I1 + t
	}

	function fD(e, t) {
		return t == null ? !0 : e.indexOf(t) !== -1
	}

	function dD(e, t) {
		return Da(e && e.sort(), t && t.sort())
	}

	function pD(e) {
		if (typeof e == "string") return e;
		if (e.pluginElement && e.objectId) return e.pluginElement + Fa + e.objectId;
		if (e.objectId) return e.objectId;
		let {
			id: t = "",
			selector: r = "",
			useEventTarget: n = ""
		} = e;
		return t + Fa + r + Fa + n
	}
	var pt, ri, Jn, ni, c1, l1, f1, d1, p1, v1, g1, h1, y1, E1, ei, Wr, Br, ot, at, zh, m1, _1, Hh, b1, kh, T1, ti, nr, Ot, jr, I1, Fa, Kh, Ga, Ua, Yh, ir, or, ar, zr, $h, Kr, Yr, sr, ur, cr, lr, ii, O1, Qh, Va, Zh, Zn, w1, S1, L1, Wh, q1, M1, F1, G1, U1, ka, X1, W1, B1, j1, Q1, Z1, J1, ty, iy = he(() => {
		"use strict";
		pt = ue(_h()), ri = ue(qh()), Jn = ue(Gh()), ni = ue(zt());
		De();
		Vh();
		Ia();
		Pa();
		Kn();
		({
			BACKGROUND: c1,
			TRANSFORM: l1,
			TRANSLATE_3D: f1,
			SCALE_3D: d1,
			ROTATE_X: p1,
			ROTATE_Y: v1,
			ROTATE_Z: g1,
			SKEW: h1,
			PRESERVE_3D: y1,
			FLEX: E1,
			OPACITY: ei,
			FILTER: Wr,
			FONT_VARIATION_SETTINGS: Br,
			WIDTH: ot,
			HEIGHT: at,
			BACKGROUND_COLOR: zh,
			BORDER_COLOR: m1,
			COLOR: _1,
			CHILDREN: Hh,
			IMMEDIATE_CHILDREN: b1,
			SIBLINGS: kh,
			PARENT: T1,
			DISPLAY: ti,
			WILL_CHANGE: nr,
			AUTO: Ot,
			COMMA_DELIMITER: jr,
			COLON_DELIMITER: I1,
			BAR_DELIMITER: Fa,
			RENDER_TRANSFORM: Kh,
			RENDER_GENERAL: Ga,
			RENDER_STYLE: Ua,
			RENDER_PLUGIN: Yh
		} = Se), {
			TRANSFORM_MOVE: ir,
			TRANSFORM_SCALE: or,
			TRANSFORM_ROTATE: ar,
			TRANSFORM_SKEW: zr,
			STYLE_OPACITY: $h,
			STYLE_FILTER: Kr,
			STYLE_FONT_VARIATION: Yr,
			STYLE_SIZE: sr,
			STYLE_BACKGROUND_COLOR: ur,
			STYLE_BORDER: cr,
			STYLE_TEXT_COLOR: lr,
			GENERAL_DISPLAY: ii,
			OBJECT_VALUE: O1
		} = He, Qh = e => e.trim(), Va = Object.freeze({
			[ur]: zh,
			[cr]: m1,
			[lr]: _1
		}), Zh = Object.freeze({
			[It]: l1,
			[zh]: c1,
			[ei]: ei,
			[Wr]: Wr,
			[ot]: ot,
			[at]: at,
			[Br]: Br
		}), Zn = new Map;
		w1 = 1;
		S1 = 1;
		L1 = (e, t) => e === t;
		Wh = /px/, q1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = X1[n.type]), r), e || {}), M1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = W1[n.type] || n.defaultValue || 0), r), e || {});
		F1 = (e, t) => (t && (e[t.type] = t.value || 0), e), G1 = (e, t) => (t && (e[t.type] = t.value || 0), e), U1 = (e, t, r) => {
			if (qt(e)) return Sa(e)(r, t);
			switch (e) {
				case Kr: {
					let n = (0, Jn.default)(r.filters, ({
						type: i
					}) => i === t);
					return n ? n.value : 0
				}
				case Yr: {
					let n = (0, Jn.default)(r.fontVariations, ({
						type: i
					}) => i === t);
					return n ? n.value : 0
				}
				default:
					return r[t]
			}
		};
		ka = {
			[ir]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[or]: Object.freeze({
				xValue: 1,
				yValue: 1,
				zValue: 1
			}),
			[ar]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[zr]: Object.freeze({
				xValue: 0,
				yValue: 0
			})
		}, X1 = Object.freeze({
			blur: 0,
			"hue-rotate": 0,
			invert: 0,
			grayscale: 0,
			saturate: 100,
			sepia: 0,
			contrast: 100,
			brightness: 100
		}), W1 = Object.freeze({
			wght: 0,
			opsz: 0,
			wdth: 0,
			slnt: 0
		}), B1 = (e, t) => {
			let r = (0, Jn.default)(t.filters, ({
				type: n
			}) => n === e);
			if (r && r.unit) return r.unit;
			switch (e) {
				case "blur":
					return "px";
				case "hue-rotate":
					return "deg";
				default:
					return "%"
			}
		}, j1 = Object.keys(ka);
		Q1 = "\\(([^)]+)\\)", Z1 = /^rgb/, J1 = RegExp(`rgba?${Q1}`);
		ty = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case ir:
				case or:
				case ar:
				case zr:
					e(n, It, r);
					break;
				case Kr:
					e(n, Wr, r);
					break;
				case Yr:
					e(n, Br, r);
					break;
				case $h:
					e(n, ei, r);
					break;
				case sr:
					e(n, ot, r), e(n, at, r);
					break;
				case ur:
				case cr:
				case lr:
					e(n, Va[t], r);
					break;
				case ii:
					e(n, ti, r);
					break
			}
		}
	});
	var Ft = u(Ne => {
		"use strict";
		var fr = ln().default;
		Object.defineProperty(Ne, "__esModule", {
			value: !0
		});
		Ne.IX2VanillaUtils = Ne.IX2VanillaPlugins = Ne.IX2ElementsReducer = Ne.IX2Easings = Ne.IX2EasingUtils = Ne.IX2BrowserSupport = void 0;
		var vD = fr((Kn(), Je(eh)));
		Ne.IX2BrowserSupport = vD;
		var gD = fr((Ta(), Je(kr)));
		Ne.IX2Easings = gD;
		var hD = fr((Ia(), Je(sh)));
		Ne.IX2EasingUtils = hD;
		var yD = fr((fh(), Je(lh)));
		Ne.IX2ElementsReducer = yD;
		var ED = fr((Pa(), Je(Eh)));
		Ne.IX2VanillaPlugins = ED;
		var mD = fr((iy(), Je(ny)));
		Ne.IX2VanillaUtils = mD
	});
	var ai, vt, _D, bD, TD, ID, OD, AD, oi, oy, wD, xD, Xa, SD, CD, RD, LD, ay, sy = he(() => {
		"use strict";
		De();
		ai = ue(Ft()), vt = ue(zt()), {
			IX2_RAW_DATA_IMPORTED: _D,
			IX2_SESSION_STOPPED: bD,
			IX2_INSTANCE_ADDED: TD,
			IX2_INSTANCE_STARTED: ID,
			IX2_INSTANCE_REMOVED: OD,
			IX2_ANIMATION_FRAME_CHANGED: AD
		} = Te, {
			optimizeFloat: oi,
			applyEasing: oy,
			createBezierEasing: wD
		} = ai.IX2EasingUtils, {
			RENDER_GENERAL: xD
		} = Se, {
			getItemConfigByKey: Xa,
			getRenderType: SD,
			getStyleProp: CD
		} = ai.IX2VanillaUtils, RD = (e, t) => {
			let {
				position: r,
				parameterId: n,
				actionGroups: i,
				destinationKeys: o,
				smoothing: a,
				restingValue: s,
				actionTypeId: c,
				customEasingFn: f,
				skipMotion: p,
				skipToValue: d
			} = e, {
				parameters: h
			} = t.payload, g = Math.max(1 - a, .01), m = h[n];
			m == null && (g = 1, m = s);
			let _ = Math.max(m, 0) || 0,
				N = oi(_ - r),
				A = p ? d : oi(r + N * g),
				S = A * 100;
			if (A === r && e.current) return e;
			let I, L, P, R;
			for (let B = 0, {
					length: z
				} = i; B < z; B++) {
				let {
					keyframe: Q,
					actionItems: G
				} = i[B];
				if (B === 0 && (I = G[0]), S >= Q) {
					I = G[0];
					let x = i[B + 1],
						v = x && S !== Q;
					L = v ? x.actionItems[0] : null, v && (P = Q / 100, R = (x.keyframe - Q) / 100)
				}
			}
			let X = {};
			if (I && !L)
				for (let B = 0, {
						length: z
					} = o; B < z; B++) {
					let Q = o[B];
					X[Q] = Xa(c, Q, I.config)
				} else if (I && L && P !== void 0 && R !== void 0) {
					let B = (A - P) / R,
						z = I.config.easing,
						Q = oy(z, B, f);
					for (let G = 0, {
							length: x
						} = o; G < x; G++) {
						let v = o[G],
							C = Xa(c, v, I.config),
							Z = (Xa(c, v, L.config) - C) * Q + C;
						X[v] = Z
					}
				} return (0, vt.merge)(e, {
				position: A,
				current: X
			})
		}, LD = (e, t) => {
			let {
				active: r,
				origin: n,
				start: i,
				immediate: o,
				renderType: a,
				verbose: s,
				actionItem: c,
				destination: f,
				destinationKeys: p,
				pluginDuration: d,
				instanceDelay: h,
				customEasingFn: g,
				skipMotion: m
			} = e, _ = c.config.easing, {
				duration: N,
				delay: A
			} = c.config;
			d != null && (N = d), A = h ?? A, a === xD ? N = 0 : (o || m) && (N = A = 0);
			let {
				now: S
			} = t.payload;
			if (r && n) {
				let I = S - (i + A);
				if (s) {
					let B = S - i,
						z = N + A,
						Q = oi(Math.min(Math.max(0, B / z), 1));
					e = (0, vt.set)(e, "verboseTimeElapsed", z * Q)
				}
				if (I < 0) return e;
				let L = oi(Math.min(Math.max(0, I / N), 1)),
					P = oy(_, L, g),
					R = {},
					X = null;
				return p.length && (X = p.reduce((B, z) => {
					let Q = f[z],
						G = parseFloat(n[z]) || 0,
						v = (parseFloat(Q) - G) * P + G;
					return B[z] = v, B
				}, {})), R.current = X, R.position = L, L === 1 && (R.active = !1, R.complete = !0), (0, vt.merge)(e, R)
			}
			return e
		}, ay = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case _D:
					return t.payload.ixInstances || Object.freeze({});
				case bD:
					return Object.freeze({});
				case TD: {
					let {
						instanceId: r,
						elementId: n,
						actionItem: i,
						eventId: o,
						eventTarget: a,
						eventStateKey: s,
						actionListId: c,
						groupIndex: f,
						isCarrier: p,
						origin: d,
						destination: h,
						immediate: g,
						verbose: m,
						continuous: _,
						parameterId: N,
						actionGroups: A,
						smoothing: S,
						restingValue: I,
						pluginInstance: L,
						pluginDuration: P,
						instanceDelay: R,
						skipMotion: X,
						skipToValue: B
					} = t.payload, {
						actionTypeId: z
					} = i, Q = SD(z), G = CD(Q, z), x = Object.keys(h).filter(C => h[C] != null && typeof h[C] != "string"), {
						easing: v
					} = i.config;
					return (0, vt.set)(e, r, {
						id: r,
						elementId: n,
						active: !1,
						position: 0,
						start: 0,
						origin: d,
						destination: h,
						destinationKeys: x,
						immediate: g,
						verbose: m,
						current: null,
						actionItem: i,
						actionTypeId: z,
						eventId: o,
						eventTarget: a,
						eventStateKey: s,
						actionListId: c,
						groupIndex: f,
						renderType: Q,
						isCarrier: p,
						styleProp: G,
						continuous: _,
						parameterId: N,
						actionGroups: A,
						smoothing: S,
						restingValue: I,
						pluginInstance: L,
						pluginDuration: P,
						instanceDelay: R,
						skipMotion: X,
						skipToValue: B,
						customEasingFn: Array.isArray(v) && v.length === 4 ? wD(v) : void 0
					})
				}
				case ID: {
					let {
						instanceId: r,
						time: n
					} = t.payload;
					return (0, vt.mergeIn)(e, [r], {
						active: !0,
						complete: !1,
						start: n
					})
				}
				case OD: {
					let {
						instanceId: r
					} = t.payload;
					if (!e[r]) return e;
					let n = {},
						i = Object.keys(e),
						{
							length: o
						} = i;
					for (let a = 0; a < o; a++) {
						let s = i[a];
						s !== r && (n[s] = e[s])
					}
					return n
				}
				case AD: {
					let r = e,
						n = Object.keys(e),
						{
							length: i
						} = n;
					for (let o = 0; o < i; o++) {
						let a = n[o],
							s = e[a],
							c = s.continuous ? RD : LD;
						r = (0, vt.set)(r, a, c(s, t))
					}
					return r
				}
				default:
					return e
			}
		}
	});
	var ND, PD, qD, uy, cy = he(() => {
		"use strict";
		De();
		({
			IX2_RAW_DATA_IMPORTED: ND,
			IX2_SESSION_STOPPED: PD,
			IX2_PARAMETER_CHANGED: qD
		} = Te), uy = (e = {}, t) => {
			switch (t.type) {
				case ND:
					return t.payload.ixParameters || {};
				case PD:
					return {};
				case qD: {
					let {
						key: r,
						value: n
					} = t.payload;
					return e[r] = n, e
				}
				default:
					return e
			}
		}
	});
	var dy = {};
	Me(dy, {
		default: () => DD
	});
	var ly, fy, MD, DD, py = he(() => {
		"use strict";
		ly = ue(Vo());
		Af();
		jf();
		Yf();
		fy = ue(Ft());
		sy();
		cy();
		({
			ixElements: MD
		} = fy.IX2ElementsReducer), DD = (0, ly.combineReducers)({
			ixData: Of,
			ixRequest: Bf,
			ixSession: Kf,
			ixElements: MD,
			ixInstances: ay,
			ixParameters: uy
		})
	});
	var gy = u((LB, vy) => {
		var FD = _t(),
			GD = Oe(),
			UD = ft(),
			VD = "[object String]";

		function HD(e) {
			return typeof e == "string" || !GD(e) && UD(e) && FD(e) == VD
		}
		vy.exports = HD
	});
	var yy = u((NB, hy) => {
		var kD = ga(),
			XD = kD("length");
		hy.exports = XD
	});
	var my = u((PB, Ey) => {
		var WD = "\\ud800-\\udfff",
			BD = "\\u0300-\\u036f",
			jD = "\\ufe20-\\ufe2f",
			zD = "\\u20d0-\\u20ff",
			KD = BD + jD + zD,
			YD = "\\ufe0e\\ufe0f",
			$D = "\\u200d",
			QD = RegExp("[" + $D + WD + KD + YD + "]");

		function ZD(e) {
			return QD.test(e)
		}
		Ey.exports = ZD
	});
	var Sy = u((qB, xy) => {
		var by = "\\ud800-\\udfff",
			JD = "\\u0300-\\u036f",
			eF = "\\ufe20-\\ufe2f",
			tF = "\\u20d0-\\u20ff",
			rF = JD + eF + tF,
			nF = "\\ufe0e\\ufe0f",
			iF = "[" + by + "]",
			Wa = "[" + rF + "]",
			Ba = "\\ud83c[\\udffb-\\udfff]",
			oF = "(?:" + Wa + "|" + Ba + ")",
			Ty = "[^" + by + "]",
			Iy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			Oy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			aF = "\\u200d",
			Ay = oF + "?",
			wy = "[" + nF + "]?",
			sF = "(?:" + aF + "(?:" + [Ty, Iy, Oy].join("|") + ")" + wy + Ay + ")*",
			uF = wy + Ay + sF,
			cF = "(?:" + [Ty + Wa + "?", Wa, Iy, Oy, iF].join("|") + ")",
			_y = RegExp(Ba + "(?=" + Ba + ")|" + cF + uF, "g");

		function lF(e) {
			for (var t = _y.lastIndex = 0; _y.test(e);) ++t;
			return t
		}
		xy.exports = lF
	});
	var Ry = u((MB, Cy) => {
		var fF = yy(),
			dF = my(),
			pF = Sy();

		function vF(e) {
			return dF(e) ? pF(e) : fF(e)
		}
		Cy.exports = vF
	});
	var Ny = u((DB, Ly) => {
		var gF = Gn(),
			hF = Un(),
			yF = Nt(),
			EF = gy(),
			mF = Ry(),
			_F = "[object Map]",
			bF = "[object Set]";

		function TF(e) {
			if (e == null) return 0;
			if (yF(e)) return EF(e) ? mF(e) : e.length;
			var t = hF(e);
			return t == _F || t == bF ? e.size : gF(e).length
		}
		Ly.exports = TF
	});
	var qy = u((FB, Py) => {
		var IF = "Expected a function";

		function OF(e) {
			if (typeof e != "function") throw new TypeError(IF);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		Py.exports = OF
	});
	var ja = u((GB, My) => {
		var AF = bt(),
			wF = function() {
				try {
					var e = AF(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		My.exports = wF
	});
	var za = u((UB, Fy) => {
		var Dy = ja();

		function xF(e, t, r) {
			t == "__proto__" && Dy ? Dy(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		Fy.exports = xF
	});
	var Uy = u((VB, Gy) => {
		var SF = za(),
			CF = Sn(),
			RF = Object.prototype,
			LF = RF.hasOwnProperty;

		function NF(e, t, r) {
			var n = e[t];
			(!(LF.call(e, t) && CF(n, r)) || r === void 0 && !(t in e)) && SF(e, t, r)
		}
		Gy.exports = NF
	});
	var ky = u((HB, Hy) => {
		var PF = Uy(),
			qF = Ur(),
			MF = qn(),
			Vy = it(),
			DF = tr();

		function FF(e, t, r, n) {
			if (!Vy(e)) return e;
			t = qF(t, e);
			for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
				var c = DF(t[i]),
					f = r;
				if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
				if (i != a) {
					var p = s[c];
					f = n ? n(p, c, s) : void 0, f === void 0 && (f = Vy(p) ? p : MF(t[i + 1]) ? [] : {})
				}
				PF(s, c, f), s = s[c]
			}
			return e
		}
		Hy.exports = FF
	});
	var Wy = u((kB, Xy) => {
		var GF = kn(),
			UF = ky(),
			VF = Ur();

		function HF(e, t, r) {
			for (var n = -1, i = t.length, o = {}; ++n < i;) {
				var a = t[n],
					s = GF(e, a);
				r(s, a) && UF(o, VF(a, e), s)
			}
			return o
		}
		Xy.exports = HF
	});
	var jy = u((XB, By) => {
		var kF = Nn(),
			XF = xo(),
			WF = ea(),
			BF = Jo(),
			jF = Object.getOwnPropertySymbols,
			zF = jF ? function(e) {
				for (var t = []; e;) kF(t, WF(e)), e = XF(e);
				return t
			} : BF;
		By.exports = zF
	});
	var Ky = u((WB, zy) => {
		function KF(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		zy.exports = KF
	});
	var $y = u((BB, Yy) => {
		var YF = it(),
			$F = Fn(),
			QF = Ky(),
			ZF = Object.prototype,
			JF = ZF.hasOwnProperty;

		function e2(e) {
			if (!YF(e)) return QF(e);
			var t = $F(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !JF.call(e, n)) || r.push(n);
			return r
		}
		Yy.exports = e2
	});
	var Zy = u((jB, Qy) => {
		var t2 = ra(),
			r2 = $y(),
			n2 = Nt();

		function i2(e) {
			return n2(e) ? t2(e, !0) : r2(e)
		}
		Qy.exports = i2
	});
	var eE = u((zB, Jy) => {
		var o2 = Zo(),
			a2 = jy(),
			s2 = Zy();

		function u2(e) {
			return o2(e, s2, a2)
		}
		Jy.exports = u2
	});
	var rE = u((KB, tE) => {
		var c2 = va(),
			l2 = Tt(),
			f2 = Wy(),
			d2 = eE();

		function p2(e, t) {
			if (e == null) return {};
			var r = c2(d2(e), function(n) {
				return [n]
			});
			return t = l2(t), f2(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		tE.exports = p2
	});
	var iE = u((YB, nE) => {
		var v2 = Tt(),
			g2 = qy(),
			h2 = rE();

		function y2(e, t) {
			return h2(e, g2(v2(t)))
		}
		nE.exports = y2
	});
	var aE = u(($B, oE) => {
		var E2 = Gn(),
			m2 = Un(),
			_2 = Pr(),
			b2 = Oe(),
			T2 = Nt(),
			I2 = Pn(),
			O2 = Fn(),
			A2 = Dn(),
			w2 = "[object Map]",
			x2 = "[object Set]",
			S2 = Object.prototype,
			C2 = S2.hasOwnProperty;

		function R2(e) {
			if (e == null) return !0;
			if (T2(e) && (b2(e) || typeof e == "string" || typeof e.splice == "function" || I2(e) || A2(e) || _2(e))) return !e.length;
			var t = m2(e);
			if (t == w2 || t == x2) return !e.size;
			if (O2(e)) return !E2(e).length;
			for (var r in e)
				if (C2.call(e, r)) return !1;
			return !0
		}
		oE.exports = R2
	});
	var uE = u((QB, sE) => {
		var L2 = za(),
			N2 = qa(),
			P2 = Tt();

		function q2(e, t) {
			var r = {};
			return t = P2(t, 3), N2(e, function(n, i, o) {
				L2(r, i, t(n, i, o))
			}), r
		}
		sE.exports = q2
	});
	var lE = u((ZB, cE) => {
		function M2(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		cE.exports = M2
	});
	var dE = u((JB, fE) => {
		var D2 = Wn();

		function F2(e) {
			return typeof e == "function" ? e : D2
		}
		fE.exports = F2
	});
	var vE = u((ej, pE) => {
		var G2 = lE(),
			U2 = Ma(),
			V2 = dE(),
			H2 = Oe();

		function k2(e, t) {
			var r = H2(e) ? G2 : U2;
			return r(e, V2(t))
		}
		pE.exports = k2
	});
	var hE = u((tj, gE) => {
		var X2 = Ke(),
			W2 = function() {
				return X2.Date.now()
			};
		gE.exports = W2
	});
	var mE = u((rj, EE) => {
		var B2 = it(),
			Ka = hE(),
			yE = Bn(),
			j2 = "Expected a function",
			z2 = Math.max,
			K2 = Math.min;

		function Y2(e, t, r) {
			var n, i, o, a, s, c, f = 0,
				p = !1,
				d = !1,
				h = !0;
			if (typeof e != "function") throw new TypeError(j2);
			t = yE(t) || 0, B2(r) && (p = !!r.leading, d = "maxWait" in r, o = d ? z2(yE(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

			function g(R) {
				var X = n,
					B = i;
				return n = i = void 0, f = R, a = e.apply(B, X), a
			}

			function m(R) {
				return f = R, s = setTimeout(A, t), p ? g(R) : a
			}

			function _(R) {
				var X = R - c,
					B = R - f,
					z = t - X;
				return d ? K2(z, o - B) : z
			}

			function N(R) {
				var X = R - c,
					B = R - f;
				return c === void 0 || X >= t || X < 0 || d && B >= o
			}

			function A() {
				var R = Ka();
				if (N(R)) return S(R);
				s = setTimeout(A, _(R))
			}

			function S(R) {
				return s = void 0, h && n ? g(R) : (n = i = void 0, a)
			}

			function I() {
				s !== void 0 && clearTimeout(s), f = 0, n = c = i = s = void 0
			}

			function L() {
				return s === void 0 ? a : S(Ka())
			}

			function P() {
				var R = Ka(),
					X = N(R);
				if (n = arguments, i = this, c = R, X) {
					if (s === void 0) return m(c);
					if (d) return clearTimeout(s), s = setTimeout(A, t), g(c)
				}
				return s === void 0 && (s = setTimeout(A, t)), a
			}
			return P.cancel = I, P.flush = L, P
		}
		EE.exports = Y2
	});
	var bE = u((nj, _E) => {
		var $2 = mE(),
			Q2 = it(),
			Z2 = "Expected a function";

		function J2(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(Z2);
			return Q2(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $2(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		_E.exports = J2
	});
	var IE = {};
	Me(IE, {
		actionListPlaybackChanged: () => pr,
		animationFrameChanged: () => ui,
		clearRequested: () => OG,
		elementStateChanged: () => rs,
		eventListenerAdded: () => si,
		eventStateChanged: () => Ja,
		instanceAdded: () => es,
		instanceRemoved: () => ts,
		instanceStarted: () => ci,
		mediaQueriesDefined: () => is,
		parameterChanged: () => dr,
		playbackRequested: () => TG,
		previewRequested: () => bG,
		rawDataImported: () => Ya,
		sessionInitialized: () => $a,
		sessionStarted: () => Qa,
		sessionStopped: () => Za,
		stopRequested: () => IG,
		testFrameRendered: () => AG,
		viewportWidthChanged: () => ns
	});
	var TE, eG, tG, rG, nG, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, vG, gG, hG, yG, EG, mG, _G, Ya, $a, Qa, Za, bG, TG, IG, OG, si, AG, Ja, ui, dr, es, ci, ts, rs, pr, ns, is, li = he(() => {
		"use strict";
		De();
		TE = ue(Ft()), {
			IX2_RAW_DATA_IMPORTED: eG,
			IX2_SESSION_INITIALIZED: tG,
			IX2_SESSION_STARTED: rG,
			IX2_SESSION_STOPPED: nG,
			IX2_PREVIEW_REQUESTED: iG,
			IX2_PLAYBACK_REQUESTED: oG,
			IX2_STOP_REQUESTED: aG,
			IX2_CLEAR_REQUESTED: sG,
			IX2_EVENT_LISTENER_ADDED: uG,
			IX2_TEST_FRAME_RENDERED: cG,
			IX2_EVENT_STATE_CHANGED: lG,
			IX2_ANIMATION_FRAME_CHANGED: fG,
			IX2_PARAMETER_CHANGED: dG,
			IX2_INSTANCE_ADDED: pG,
			IX2_INSTANCE_STARTED: vG,
			IX2_INSTANCE_REMOVED: gG,
			IX2_ELEMENT_STATE_CHANGED: hG,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: yG,
			IX2_VIEWPORT_WIDTH_CHANGED: EG,
			IX2_MEDIA_QUERIES_DEFINED: mG
		} = Te, {
			reifyState: _G
		} = TE.IX2VanillaUtils, Ya = e => ({
			type: eG,
			payload: {
				..._G(e)
			}
		}), $a = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: tG,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		}), Qa = () => ({
			type: rG
		}), Za = () => ({
			type: nG
		}), bG = ({
			rawData: e,
			defer: t
		}) => ({
			type: iG,
			payload: {
				defer: t,
				rawData: e
			}
		}), TG = ({
			actionTypeId: e = He.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: o,
			testManual: a,
			verbose: s,
			rawData: c
		}) => ({
			type: oG,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: i,
				immediate: o,
				verbose: s,
				rawData: c
			}
		}), IG = e => ({
			type: aG,
			payload: {
				actionListId: e
			}
		}), OG = () => ({
			type: sG
		}), si = (e, t) => ({
			type: uG,
			payload: {
				target: e,
				listenerParams: t
			}
		}), AG = (e = 1) => ({
			type: cG,
			payload: {
				step: e
			}
		}), Ja = (e, t) => ({
			type: lG,
			payload: {
				stateKey: e,
				newState: t
			}
		}), ui = (e, t) => ({
			type: fG,
			payload: {
				now: e,
				parameters: t
			}
		}), dr = (e, t) => ({
			type: dG,
			payload: {
				key: e,
				value: t
			}
		}), es = e => ({
			type: pG,
			payload: {
				...e
			}
		}), ci = (e, t) => ({
			type: vG,
			payload: {
				instanceId: e,
				time: t
			}
		}), ts = e => ({
			type: gG,
			payload: {
				instanceId: e
			}
		}), rs = (e, t, r, n) => ({
			type: hG,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		}), pr = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: yG,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		}), ns = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: EG,
			payload: {
				width: e,
				mediaQueries: t
			}
		}), is = () => ({
			type: mG
		})
	});
	var Pe = {};
	Me(Pe, {
		elementContains: () => ss,
		getChildElements: () => MG,
		getClosestElement: () => $r,
		getProperty: () => RG,
		getQuerySelector: () => as,
		getRefType: () => us,
		getSiblingElements: () => DG,
		getStyle: () => CG,
		getValidDocument: () => NG,
		isSiblingNode: () => qG,
		matchSelector: () => LG,
		queryDocument: () => PG,
		setStyle: () => SG
	});

	function SG(e, t, r) {
		e.style[t] = r
	}

	function CG(e, t) {
		return e.style[t]
	}

	function RG(e, t) {
		return e[t]
	}

	function LG(e) {
		return t => t[os](e)
	}

	function as({
		id: e,
		selector: t
	}) {
		if (e) {
			let r = e;
			if (e.indexOf(OE) !== -1) {
				let n = e.split(OE),
					i = n[0];
				if (r = n[1], i !== document.documentElement.getAttribute(wE)) return null
			}
			return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
		}
		return t
	}

	function NG(e) {
		return e == null || e === document.documentElement.getAttribute(wE) ? document : null
	}

	function PG(e, t) {
		return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
	}

	function ss(e, t) {
		return e.contains(t)
	}

	function qG(e, t) {
		return e !== t && e.parentNode === t.parentNode
	}

	function MG(e) {
		let t = [];
		for (let r = 0, {
				length: n
			} = e || []; r < n; r++) {
			let {
				children: i
			} = e[r], {
				length: o
			} = i;
			if (o)
				for (let a = 0; a < o; a++) t.push(i[a])
		}
		return t
	}

	function DG(e = []) {
		let t = [],
			r = [];
		for (let n = 0, {
				length: i
			} = e; n < i; n++) {
			let {
				parentNode: o
			} = e[n];
			if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
			r.push(o);
			let a = o.firstElementChild;
			for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
		}
		return t
	}

	function us(e) {
		return e != null && typeof e == "object" ? e instanceof Element ? wG : xG : null
	}
	var AE, os, OE, wG, xG, wE, $r, xE = he(() => {
		"use strict";
		AE = ue(Ft());
		De();
		({
			ELEMENT_MATCHES: os
		} = AE.IX2BrowserSupport), {
			IX2_ID_DELIMITER: OE,
			HTML_ELEMENT: wG,
			PLAIN_OBJECT: xG,
			WF_PAGE: wE
		} = Se;
		$r = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[os] && r[os](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		}
	});
	var cs = u((aj, CE) => {
		var FG = it(),
			SE = Object.create,
			GG = function() {
				function e() {}
				return function(t) {
					if (!FG(t)) return {};
					if (SE) return SE(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		CE.exports = GG
	});
	var fi = u((sj, RE) => {
		function UG() {}
		RE.exports = UG
	});
	var pi = u((uj, LE) => {
		var VG = cs(),
			HG = fi();

		function di(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		di.prototype = VG(HG.prototype);
		di.prototype.constructor = di;
		LE.exports = di
	});
	var ME = u((cj, qE) => {
		var NE = Wt(),
			kG = Pr(),
			XG = Oe(),
			PE = NE ? NE.isConcatSpreadable : void 0;

		function WG(e) {
			return XG(e) || kG(e) || !!(PE && e && e[PE])
		}
		qE.exports = WG
	});
	var GE = u((lj, FE) => {
		var BG = Nn(),
			jG = ME();

		function DE(e, t, r, n, i) {
			var o = -1,
				a = e.length;
			for (r || (r = jG), i || (i = []); ++o < a;) {
				var s = e[o];
				t > 0 && r(s) ? t > 1 ? DE(s, t - 1, r, n, i) : BG(i, s) : n || (i[i.length] = s)
			}
			return i
		}
		FE.exports = DE
	});
	var VE = u((fj, UE) => {
		var zG = GE();

		function KG(e) {
			var t = e == null ? 0 : e.length;
			return t ? zG(e, 1) : []
		}
		UE.exports = KG
	});
	var kE = u((dj, HE) => {
		function YG(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		HE.exports = YG
	});
	var BE = u((pj, WE) => {
		var $G = kE(),
			XE = Math.max;

		function QG(e, t, r) {
			return t = XE(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, o = XE(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
					i = -1;
					for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(a), $G(e, this, s)
				}
		}
		WE.exports = QG
	});
	var zE = u((vj, jE) => {
		function ZG(e) {
			return function() {
				return e
			}
		}
		jE.exports = ZG
	});
	var $E = u((gj, YE) => {
		var JG = zE(),
			KE = ja(),
			eU = Wn(),
			tU = KE ? function(e, t) {
				return KE(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: JG(t),
					writable: !0
				})
			} : eU;
		YE.exports = tU
	});
	var ZE = u((hj, QE) => {
		var rU = 800,
			nU = 16,
			iU = Date.now;

		function oU(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = iU(),
					i = nU - (n - r);
				if (r = n, i > 0) {
					if (++t >= rU) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		QE.exports = oU
	});
	var em = u((yj, JE) => {
		var aU = $E(),
			sU = ZE(),
			uU = sU(aU);
		JE.exports = uU
	});
	var rm = u((Ej, tm) => {
		var cU = VE(),
			lU = BE(),
			fU = em();

		function dU(e) {
			return fU(lU(e, void 0, cU), e + "")
		}
		tm.exports = dU
	});
	var om = u((mj, im) => {
		var nm = na(),
			pU = nm && new nm;
		im.exports = pU
	});
	var sm = u((_j, am) => {
		function vU() {}
		am.exports = vU
	});
	var ls = u((bj, cm) => {
		var um = om(),
			gU = sm(),
			hU = um ? function(e) {
				return um.get(e)
			} : gU;
		cm.exports = hU
	});
	var fm = u((Tj, lm) => {
		var yU = {};
		lm.exports = yU
	});
	var fs = u((Ij, pm) => {
		var dm = fm(),
			EU = Object.prototype,
			mU = EU.hasOwnProperty;

		function _U(e) {
			for (var t = e.name + "", r = dm[t], n = mU.call(dm, t) ? r.length : 0; n--;) {
				var i = r[n],
					o = i.func;
				if (o == null || o == e) return i.name
			}
			return t
		}
		pm.exports = _U
	});
	var gi = u((Oj, vm) => {
		var bU = cs(),
			TU = fi(),
			IU = 4294967295;

		function vi(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = IU, this.__views__ = []
		}
		vi.prototype = bU(TU.prototype);
		vi.prototype.constructor = vi;
		vm.exports = vi
	});
	var hm = u((Aj, gm) => {
		function OU(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		gm.exports = OU
	});
	var Em = u((wj, ym) => {
		var AU = gi(),
			wU = pi(),
			xU = hm();

		function SU(e) {
			if (e instanceof AU) return e.clone();
			var t = new wU(e.__wrapped__, e.__chain__);
			return t.__actions__ = xU(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		ym.exports = SU
	});
	var bm = u((xj, _m) => {
		var CU = gi(),
			mm = pi(),
			RU = fi(),
			LU = Oe(),
			NU = ft(),
			PU = Em(),
			qU = Object.prototype,
			MU = qU.hasOwnProperty;

		function hi(e) {
			if (NU(e) && !LU(e) && !(e instanceof CU)) {
				if (e instanceof mm) return e;
				if (MU.call(e, "__wrapped__")) return PU(e)
			}
			return new mm(e)
		}
		hi.prototype = RU.prototype;
		hi.prototype.constructor = hi;
		_m.exports = hi
	});
	var Im = u((Sj, Tm) => {
		var DU = gi(),
			FU = ls(),
			GU = fs(),
			UU = bm();

		function VU(e) {
			var t = GU(e),
				r = UU[t];
			if (typeof r != "function" || !(t in DU.prototype)) return !1;
			if (e === r) return !0;
			var n = FU(r);
			return !!n && e === n[0]
		}
		Tm.exports = VU
	});
	var xm = u((Cj, wm) => {
		var Om = pi(),
			HU = rm(),
			kU = ls(),
			ds = fs(),
			XU = Oe(),
			Am = Im(),
			WU = "Expected a function",
			BU = 8,
			jU = 32,
			zU = 128,
			KU = 256;

		function YU(e) {
			return HU(function(t) {
				var r = t.length,
					n = r,
					i = Om.prototype.thru;
				for (e && t.reverse(); n--;) {
					var o = t[n];
					if (typeof o != "function") throw new TypeError(WU);
					if (i && !a && ds(o) == "wrapper") var a = new Om([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					o = t[n];
					var s = ds(o),
						c = s == "wrapper" ? kU(o) : void 0;
					c && Am(c[0]) && c[1] == (zU | BU | jU | KU) && !c[4].length && c[9] == 1 ? a = a[ds(c[0])].apply(a, c[3]) : a = o.length == 1 && Am(o) ? a[s]() : a.thru(o)
				}
				return function() {
					var f = arguments,
						p = f[0];
					if (a && f.length == 1 && XU(p)) return a.plant(p).value();
					for (var d = 0, h = r ? t[d].apply(this, f) : p; ++d < r;) h = t[d].call(this, h);
					return h
				}
			})
		}
		wm.exports = YU
	});
	var Cm = u((Rj, Sm) => {
		var $U = xm(),
			QU = $U();
		Sm.exports = QU
	});
	var Lm = u((Lj, Rm) => {
		function ZU(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		Rm.exports = ZU
	});
	var Pm = u((Nj, Nm) => {
		var JU = Lm(),
			ps = Bn();

		function eV(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ps(r), r = r === r ? r : 0), t !== void 0 && (t = ps(t), t = t === t ? t : 0), JU(ps(e), t, r)
		}
		Nm.exports = eV
	});
	var km, Xm, Wm, Bm, tV, rV, nV, iV, oV, aV, sV, uV, cV, lV, fV, dV, pV, vV, gV, jm, zm, hV, yV, EV, Km, mV, _V, Ym, bV, vs, $m, qm, Mm, Qm, Zr, TV, st, Zm, IV, Ge, Qe, Jr, Jm, gs, Dm, hs, OV, Qr, AV, wV, xV, e_, Fm, SV, Gm, CV, RV, LV, Um, yi, Ei, Vm, Hm, t_, r_ = he(() => {
		"use strict";
		km = ue(Cm()), Xm = ue(Xn()), Wm = ue(Pm());
		De();
		ys();
		li();
		Bm = ue(Ft()), {
			MOUSE_CLICK: tV,
			MOUSE_SECOND_CLICK: rV,
			MOUSE_DOWN: nV,
			MOUSE_UP: iV,
			MOUSE_OVER: oV,
			MOUSE_OUT: aV,
			DROPDOWN_CLOSE: sV,
			DROPDOWN_OPEN: uV,
			SLIDER_ACTIVE: cV,
			SLIDER_INACTIVE: lV,
			TAB_ACTIVE: fV,
			TAB_INACTIVE: dV,
			NAVBAR_CLOSE: pV,
			NAVBAR_OPEN: vV,
			MOUSE_MOVE: gV,
			PAGE_SCROLL_DOWN: jm,
			SCROLL_INTO_VIEW: zm,
			SCROLL_OUT_OF_VIEW: hV,
			PAGE_SCROLL_UP: yV,
			SCROLLING_IN_VIEW: EV,
			PAGE_FINISH: Km,
			ECOMMERCE_CART_CLOSE: mV,
			ECOMMERCE_CART_OPEN: _V,
			PAGE_START: Ym,
			PAGE_SCROLL: bV
		} = Ye, vs = "COMPONENT_ACTIVE", $m = "COMPONENT_INACTIVE", {
			COLON_DELIMITER: qm
		} = Se, {
			getNamespacedParameterId: Mm
		} = Bm.IX2VanillaUtils, Qm = e => t => typeof t == "object" && e(t) ? !0 : t, Zr = Qm(({
			element: e,
			nativeEvent: t
		}) => e === t.target), TV = Qm(({
			element: e,
			nativeEvent: t
		}) => e.contains(t.target)), st = (0, km.default)([Zr, TV]), Zm = (e, t) => {
			if (t) {
				let {
					ixData: r
				} = e.getState(), {
					events: n
				} = r, i = n[t];
				if (i && !OV[i.eventTypeId]) return i
			}
			return null
		}, IV = ({
			store: e,
			event: t
		}) => {
			let {
				action: r
			} = t, {
				autoStopEventId: n
			} = r.config;
			return !!Zm(e, n)
		}, Ge = ({
			store: e,
			event: t,
			element: r,
			eventStateKey: n
		}, i) => {
			let {
				action: o,
				id: a
			} = t, {
				actionListId: s,
				autoStopEventId: c
			} = o.config, f = Zm(e, c);
			return f && vr({
				store: e,
				eventId: c,
				eventTarget: r,
				eventStateKey: c + qm + n.split(qm)[1],
				actionListId: (0, Xm.default)(f, "action.config.actionListId")
			}), vr({
				store: e,
				eventId: a,
				eventTarget: r,
				eventStateKey: n,
				actionListId: s
			}), en({
				store: e,
				eventId: a,
				eventTarget: r,
				eventStateKey: n,
				actionListId: s
			}), i
		}, Qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Jr = {
			handler: Qe(st, Ge)
		}, Jm = {
			...Jr,
			types: [vs, $m].join(" ")
		}, gs = [{
			target: window,
			types: "resize orientationchange",
			throttle: !0
		}, {
			target: document,
			types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
			throttle: !0
		}], Dm = "mouseover mouseout", hs = {
			types: gs
		}, OV = {
			PAGE_START: Ym,
			PAGE_FINISH: Km
		}, Qr = (() => {
			let e = window.pageXOffset !== void 0,
				r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
			return () => ({
				scrollLeft: e ? window.pageXOffset : r.scrollLeft,
				scrollTop: e ? window.pageYOffset : r.scrollTop,
				stiffScrollTop: (0, Wm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
				scrollWidth: r.scrollWidth,
				scrollHeight: r.scrollHeight,
				clientWidth: r.clientWidth,
				clientHeight: r.clientHeight,
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			})
		})(), AV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), wV = ({
			element: e,
			nativeEvent: t
		}) => {
			let {
				type: r,
				target: n,
				relatedTarget: i
			} = t, o = e.contains(n);
			if (r === "mouseover" && o) return !0;
			let a = e.contains(i);
			return !!(r === "mouseout" && o && a)
		}, xV = e => {
			let {
				element: t,
				event: {
					config: r
				}
			} = e, {
				clientWidth: n,
				clientHeight: i
			} = Qr(), o = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
			return AV(t.getBoundingClientRect(), {
				left: 0,
				top: c,
				right: n,
				bottom: i - c
			})
		}, e_ = e => (t, r) => {
			let {
				type: n
			} = t.nativeEvent, i = [vs, $m].indexOf(n) !== -1 ? n === vs : r.isActive, o = {
				...r,
				isActive: i
			};
			return (!r || o.isActive !== r.isActive) && e(t, o) || o
		}, Fm = e => (t, r) => {
			let n = {
				elementHovered: wV(t)
			};
			return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
		}, SV = e => (t, r) => {
			let n = {
				...r,
				elementVisible: xV(t)
			};
			return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
		}, Gm = e => (t, r = {}) => {
			let {
				stiffScrollTop: n,
				scrollHeight: i,
				innerHeight: o
			} = Qr(), {
				event: {
					config: a,
					eventTypeId: s
				}
			} = t, {
				scrollOffsetValue: c,
				scrollOffsetUnit: f
			} = a, p = f === "PX", d = i - o, h = Number((n / d).toFixed(2));
			if (r && r.percentTop === h) return r;
			let g = (p ? c : o * (c || 0) / 100) / d,
				m, _, N = 0;
			r && (m = h > r.percentTop, _ = r.scrollingDown !== m, N = _ ? h : r.anchorTop);
			let A = s === jm ? h >= N + g : h <= N - g,
				S = {
					...r,
					percentTop: h,
					inBounds: A,
					anchorTop: N,
					scrollingDown: m
				};
			return r && A && (_ || S.inBounds !== r.inBounds) && e(t, S) || S
		}, CV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, RV = e => (t, r) => {
			let n = {
				finished: document.readyState === "complete"
			};
			return n.finished && !(r && r.finshed) && e(t), n
		}, LV = e => (t, r) => {
			let n = {
				started: !0
			};
			return r || e(t), n
		}, Um = e => (t, r = {
			clickCount: 0
		}) => {
			let n = {
				clickCount: r.clickCount % 2 + 1
			};
			return n.clickCount !== r.clickCount && e(t, n) || n
		}, yi = (e = !0) => ({
			...Jm,
			handler: Qe(e ? st : Zr, e_((t, r) => r.isActive ? Jr.handler(t, r) : r))
		}), Ei = (e = !0) => ({
			...Jm,
			handler: Qe(e ? st : Zr, e_((t, r) => r.isActive ? r : Jr.handler(t, r)))
		}), Vm = {
			...hs,
			handler: SV((e, t) => {
				let {
					elementVisible: r
				} = t, {
					event: n,
					store: i
				} = e, {
					ixData: o
				} = i.getState(), {
					events: a
				} = o;
				return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === zm === r ? (Ge(e), {
					...t,
					triggered: !0
				}) : t
			})
		}, Hm = .05, t_ = {
			[cV]: yi(),
			[lV]: Ei(),
			[uV]: yi(),
			[sV]: Ei(),
			[vV]: yi(!1),
			[pV]: Ei(!1),
			[fV]: yi(),
			[dV]: Ei(),
			[_V]: {
				types: "ecommerce-cart-open",
				handler: Qe(st, Ge)
			},
			[mV]: {
				types: "ecommerce-cart-close",
				handler: Qe(st, Ge)
			},
			[tV]: {
				types: "click",
				handler: Qe(st, Um((e, {
					clickCount: t
				}) => {
					IV(e) ? t === 1 && Ge(e) : Ge(e)
				}))
			},
			[rV]: {
				types: "click",
				handler: Qe(st, Um((e, {
					clickCount: t
				}) => {
					t === 2 && Ge(e)
				}))
			},
			[nV]: {
				...Jr,
				types: "mousedown"
			},
			[iV]: {
				...Jr,
				types: "mouseup"
			},
			[oV]: {
				types: Dm,
				handler: Qe(st, Fm((e, t) => {
					t.elementHovered && Ge(e)
				}))
			},
			[aV]: {
				types: Dm,
				handler: Qe(st, Fm((e, t) => {
					t.elementHovered || Ge(e)
				}))
			},
			[gV]: {
				types: "mousemove mouseout scroll",
				handler: ({
					store: e,
					element: t,
					eventConfig: r,
					nativeEvent: n,
					eventStateKey: i
				}, o = {
					clientX: 0,
					clientY: 0,
					pageX: 0,
					pageY: 0
				}) => {
					let {
						basedOn: a,
						selectedAxis: s,
						continuousParameterGroupId: c,
						reverse: f,
						restingState: p = 0
					} = r, {
						clientX: d = o.clientX,
						clientY: h = o.clientY,
						pageX: g = o.pageX,
						pageY: m = o.pageY
					} = n, _ = s === "X_AXIS", N = n.type === "mouseout", A = p / 100, S = c, I = !1;
					switch (a) {
						case nt.VIEWPORT: {
							A = _ ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
							break
						}
						case nt.PAGE: {
							let {
								scrollLeft: L,
								scrollTop: P,
								scrollWidth: R,
								scrollHeight: X
							} = Qr();
							A = _ ? Math.min(L + g, R) / R : Math.min(P + m, X) / X;
							break
						}
						case nt.ELEMENT:
						default: {
							S = Mm(i, c);
							let L = n.type.indexOf("mouse") === 0;
							if (L && st({
									element: t,
									nativeEvent: n
								}) !== !0) break;
							let P = t.getBoundingClientRect(),
								{
									left: R,
									top: X,
									width: B,
									height: z
								} = P;
							if (!L && !CV({
									left: d,
									top: h
								}, P)) break;
							I = !0, A = _ ? (d - R) / B : (h - X) / z;
							break
						}
					}
					return N && (A > 1 - Hm || A < Hm) && (A = Math.round(A)), (a !== nt.ELEMENT || I || I !== o.elementHovered) && (A = f ? 1 - A : A, e.dispatch(dr(S, A))), {
						elementHovered: I,
						clientX: d,
						clientY: h,
						pageX: g,
						pageY: m
					}
				}
			},
			[bV]: {
				types: gs,
				handler: ({
					store: e,
					eventConfig: t
				}) => {
					let {
						continuousParameterGroupId: r,
						reverse: n
					} = t, {
						scrollTop: i,
						scrollHeight: o,
						clientHeight: a
					} = Qr(), s = i / (o - a);
					s = n ? 1 - s : s, e.dispatch(dr(r, s))
				}
			},
			[EV]: {
				types: gs,
				handler: ({
					element: e,
					store: t,
					eventConfig: r,
					eventStateKey: n
				}, i = {
					scrollPercent: 0
				}) => {
					let {
						scrollLeft: o,
						scrollTop: a,
						scrollWidth: s,
						scrollHeight: c,
						clientHeight: f
					} = Qr(), {
						basedOn: p,
						selectedAxis: d,
						continuousParameterGroupId: h,
						startsEntering: g,
						startsExiting: m,
						addEndOffset: _,
						addStartOffset: N,
						addOffsetValue: A = 0,
						endOffsetValue: S = 0
					} = r, I = d === "X_AXIS";
					if (p === nt.VIEWPORT) {
						let L = I ? o / s : a / c;
						return L !== i.scrollPercent && t.dispatch(dr(h, L)), {
							scrollPercent: L
						}
					} else {
						let L = Mm(n, h),
							P = e.getBoundingClientRect(),
							R = (N ? A : 0) / 100,
							X = (_ ? S : 0) / 100;
						R = g ? R : 1 - R, X = m ? X : 1 - X;
						let B = P.top + Math.min(P.height * R, f),
							Q = P.top + P.height * X - B,
							G = Math.min(f + Q, c),
							v = Math.min(Math.max(0, f - B), G) / G;
						return v !== i.scrollPercent && t.dispatch(dr(L, v)), {
							scrollPercent: v
						}
					}
				}
			},
			[zm]: Vm,
			[hV]: Vm,
			[jm]: {
				...hs,
				handler: Gm((e, t) => {
					t.scrollingDown && Ge(e)
				})
			},
			[yV]: {
				...hs,
				handler: Gm((e, t) => {
					t.scrollingDown || Ge(e)
				})
			},
			[Km]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: Qe(Zr, RV(Ge))
			},
			[Ym]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: Qe(Zr, LV(Ge))
			}
		}
	});
	var m_ = {};
	Me(m_, {
		observeRequests: () => QV,
		startActionGroup: () => en,
		startEngine: () => Oi,
		stopActionGroup: () => vr,
		stopAllActionGroups: () => h_,
		stopEngine: () => Ai
	});

	function QV(e) {
		Gt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.preview,
			onChange: eH
		}), Gt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.playback,
			onChange: tH
		}), Gt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.stop,
			onChange: rH
		}), Gt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.clear,
			onChange: nH
		})
	}

	function ZV(e) {
		Gt({
			store: e,
			select: ({
				ixSession: t
			}) => t.mediaQueryKey,
			onChange: () => {
				Ai(e), d_({
					store: e,
					elementApi: Pe
				}), Oi({
					store: e,
					allowEvents: !0
				}), p_()
			}
		})
	}

	function JV(e, t) {
		let r = Gt({
			store: e,
			select: ({
				ixSession: n
			}) => n.tick,
			onChange: n => {
				t(n), r()
			}
		})
	}

	function eH({
		rawData: e,
		defer: t
	}, r) {
		let n = () => {
			Oi({
				store: r,
				rawData: e,
				allowEvents: !0
			}), p_()
		};
		t ? setTimeout(n, 0) : n()
	}

	function p_() {
		document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
	}

	function tH(e, t) {
		let {
			actionTypeId: r,
			actionListId: n,
			actionItemId: i,
			eventId: o,
			allowEvents: a,
			immediate: s,
			testManual: c,
			verbose: f = !0
		} = e, {
			rawData: p
		} = e;
		if (n && i && p && s) {
			let d = p.actionLists[n];
			d && (p = VV({
				actionList: d,
				actionItemId: i,
				rawData: p
			}))
		}
		if (Oi({
				store: t,
				rawData: p,
				allowEvents: a,
				testManual: c
			}), n && r === He.GENERAL_START_ACTION || Es(r)) {
			vr({
				store: t,
				actionListId: n
			}), g_({
				store: t,
				actionListId: n,
				eventId: o
			});
			let d = en({
				store: t,
				eventId: o,
				actionListId: n,
				immediate: s,
				verbose: f
			});
			f && d && t.dispatch(pr({
				actionListId: n,
				isPlaying: !s
			}))
		}
	}

	function rH({
		actionListId: e
	}, t) {
		e ? vr({
			store: t,
			actionListId: e
		}) : h_({
			store: t
		}), Ai(t)
	}

	function nH(e, t) {
		Ai(t), d_({
			store: t,
			elementApi: Pe
		})
	}

	function Oi({
		store: e,
		rawData: t,
		allowEvents: r,
		testManual: n
	}) {
		let {
			ixSession: i
		} = e.getState();
		t && e.dispatch(Ya(t)), i.active || (e.dispatch($a({
			hasBoundaryNodes: !!document.querySelector(_i),
			reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
		})), r && (cH(e), iH(), e.getState().ixSession.hasDefinedMediaQueries && ZV(e)), e.dispatch(Qa()), oH(e, n))
	}

	function iH() {
		let {
			documentElement: e
		} = document;
		e.className.indexOf(n_) === -1 && (e.className += ` ${n_}`)
	}

	function oH(e, t) {
		let r = n => {
			let {
				ixSession: i,
				ixParameters: o
			} = e.getState();
			i.active && (e.dispatch(ui(n, o)), t ? JV(e, r) : requestAnimationFrame(r))
		};
		r(window.performance.now())
	}

	function Ai(e) {
		let {
			ixSession: t
		} = e.getState();
		if (t.active) {
			let {
				eventListeners: r
			} = t;
			r.forEach(aH), WV(), e.dispatch(Za())
		}
	}

	function aH({
		target: e,
		listenerParams: t
	}) {
		e.removeEventListener.apply(e, t)
	}

	function sH({
		store: e,
		eventStateKey: t,
		eventTarget: r,
		eventId: n,
		eventConfig: i,
		actionListId: o,
		parameterGroup: a,
		smoothing: s,
		restingValue: c
	}) {
		let {
			ixData: f,
			ixSession: p
		} = e.getState(), {
			events: d
		} = f, h = d[n], {
			eventTypeId: g
		} = h, m = {}, _ = {}, N = [], {
			continuousActionGroups: A
		} = a, {
			id: S
		} = a;
		HV(g, i) && (S = kV(t, S));
		let I = p.hasBoundaryNodes && r ? $r(r, _i) : null;
		A.forEach(L => {
			let {
				keyframe: P,
				actionItems: R
			} = L;
			R.forEach(X => {
				let {
					actionTypeId: B
				} = X, {
					target: z
				} = X.config;
				if (!z) return;
				let Q = z.boundaryMode ? I : null,
					G = BV(z) + ms + B;
				if (_[G] = uH(_[G], P, X), !m[G]) {
					m[G] = !0;
					let {
						config: x
					} = X;
					bi({
						config: x,
						event: h,
						eventTarget: r,
						elementRoot: Q,
						elementApi: Pe
					}).forEach(v => {
						N.push({
							element: v,
							key: G
						})
					})
				}
			})
		}), N.forEach(({
			element: L,
			key: P
		}) => {
			let R = _[P],
				X = (0, gt.default)(R, "[0].actionItems[0]", {}),
				{
					actionTypeId: B
				} = X,
				z = Ii(B) ? bs(B)(L, X) : null,
				Q = _s({
					element: L,
					actionItem: X,
					elementApi: Pe
				}, z);
			Ts({
				store: e,
				element: L,
				eventId: n,
				actionListId: o,
				actionItem: X,
				destination: Q,
				continuous: !0,
				parameterId: S,
				actionGroups: R,
				smoothing: s,
				restingValue: c,
				pluginInstance: z
			})
		})
	}

	function uH(e = [], t, r) {
		let n = [...e],
			i;
		return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
			keyframe: t,
			actionItems: []
		})), n[i].actionItems.push(r), n
	}

	function cH(e) {
		let {
			ixData: t
		} = e.getState(), {
			eventTypeMap: r
		} = t;
		v_(e), (0, gr.default)(r, (i, o) => {
			let a = t_[o];
			if (!a) {
				console.warn(`IX2 event type not configured: ${o}`);
				return
			}
			gH({
				logic: a,
				store: e,
				events: i
			})
		});
		let {
			ixSession: n
		} = e.getState();
		n.eventListeners.length && fH(e)
	}

	function fH(e) {
		let t = () => {
			v_(e)
		};
		lH.forEach(r => {
			window.addEventListener(r, t), e.dispatch(si(window, [r, t]))
		}), t()
	}

	function v_(e) {
		let {
			ixSession: t,
			ixData: r
		} = e.getState(), n = window.innerWidth;
		if (n !== t.viewportWidth) {
			let {
				mediaQueries: i
			} = r;
			e.dispatch(ns({
				width: n,
				mediaQueries: i
			}))
		}
	}

	function gH({
		logic: e,
		store: t,
		events: r
	}) {
		hH(r);
		let {
			types: n,
			handler: i
		} = e, {
			ixData: o
		} = t.getState(), {
			actionLists: a
		} = o, s = dH(r, vH);
		if (!(0, a_.default)(s)) return;
		(0, gr.default)(s, (d, h) => {
			let g = r[h],
				{
					action: m,
					id: _,
					mediaQueries: N = o.mediaQueryKeys
				} = g,
				{
					actionListId: A
				} = m.config;
			jV(N, o.mediaQueryKeys) || t.dispatch(is()), m.actionTypeId === He.GENERAL_CONTINUOUS_ACTION && (Array.isArray(g.config) ? g.config : [g.config]).forEach(I => {
				let {
					continuousParameterGroupId: L
				} = I, P = (0, gt.default)(a, `${A}.continuousParameterGroups`, []), R = (0, o_.default)(P, ({
					id: z
				}) => z === L), X = (I.smoothing || 0) / 100, B = (I.restingState || 0) / 100;
				R && d.forEach((z, Q) => {
					let G = _ + ms + Q;
					sH({
						store: t,
						eventStateKey: G,
						eventTarget: z,
						eventId: _,
						eventConfig: I,
						actionListId: A,
						parameterGroup: R,
						smoothing: X,
						restingValue: B
					})
				})
			}), (m.actionTypeId === He.GENERAL_START_ACTION || Es(m.actionTypeId)) && g_({
				store: t,
				actionListId: A,
				eventId: _
			})
		});
		let c = d => {
				let {
					ixSession: h
				} = t.getState();
				pH(s, (g, m, _) => {
					let N = r[m],
						A = h.eventState[_],
						{
							action: S,
							mediaQueries: I = o.mediaQueryKeys
						} = N;
					if (!Ti(I, h.mediaQueryKey)) return;
					let L = (P = {}) => {
						let R = i({
							store: t,
							element: g,
							event: N,
							eventConfig: P,
							nativeEvent: d,
							eventStateKey: _
						}, A);
						zV(R, A) || t.dispatch(Ja(_, R))
					};
					S.actionTypeId === He.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(N.config) ? N.config : [N.config]).forEach(L) : L()
				})
			},
			f = (0, l_.default)(c, $V),
			p = ({
				target: d = document,
				types: h,
				throttle: g
			}) => {
				h.split(" ").filter(Boolean).forEach(m => {
					let _ = g ? f : c;
					d.addEventListener(m, _), t.dispatch(si(d, [m, _]))
				})
			};
		Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e)
	}

	function hH(e) {
		if (!YV) return;
		let t = {},
			r = "";
		for (let n in e) {
			let {
				eventTypeId: i,
				target: o
			} = e[n], a = as(o);
			t[a] || (i === Ye.MOUSE_CLICK || i === Ye.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
		}
		if (r) {
			let n = document.createElement("style");
			n.textContent = r, document.body.appendChild(n)
		}
	}

	function g_({
		store: e,
		actionListId: t,
		eventId: r
	}) {
		let {
			ixData: n,
			ixSession: i
		} = e.getState(), {
			actionLists: o,
			events: a
		} = n, s = a[r], c = o[t];
		if (c && c.useFirstGroupAsInitialState) {
			let f = (0, gt.default)(c, "actionItemGroups[0].actionItems", []),
				p = (0, gt.default)(s, "mediaQueries", n.mediaQueryKeys);
			if (!Ti(p, i.mediaQueryKey)) return;
			f.forEach(d => {
				let {
					config: h,
					actionTypeId: g
				} = d, m = h?.target?.useEventTarget === !0 && h?.target?.objectId == null ? {
					target: s.target,
					targets: s.targets
				} : h, _ = bi({
					config: m,
					event: s,
					elementApi: Pe
				}), N = Ii(g);
				_.forEach(A => {
					let S = N ? bs(g)(A, d) : null;
					Ts({
						destination: _s({
							element: A,
							actionItem: d,
							elementApi: Pe
						}, S),
						immediate: !0,
						store: e,
						element: A,
						eventId: r,
						actionItem: d,
						actionListId: t,
						pluginInstance: S
					})
				})
			})
		}
	}

	function h_({
		store: e
	}) {
		let {
			ixInstances: t
		} = e.getState();
		(0, gr.default)(t, r => {
			if (!r.continuous) {
				let {
					actionListId: n,
					verbose: i
				} = r;
				Is(r, e), i && e.dispatch(pr({
					actionListId: n,
					isPlaying: !1
				}))
			}
		})
	}

	function vr({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i
	}) {
		let {
			ixInstances: o,
			ixSession: a
		} = e.getState(), s = a.hasBoundaryNodes && r ? $r(r, _i) : null;
		(0, gr.default)(o, c => {
			let f = (0, gt.default)(c, "actionItem.config.target.boundaryMode"),
				p = n ? c.eventStateKey === n : !0;
			if (c.actionListId === i && c.eventId === t && p) {
				if (s && f && !ss(s, c.element)) return;
				Is(c, e), c.verbose && e.dispatch(pr({
					actionListId: i,
					isPlaying: !1
				}))
			}
		})
	}

	function en({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i,
		groupIndex: o = 0,
		immediate: a,
		verbose: s
	}) {
		let {
			ixData: c,
			ixSession: f
		} = e.getState(), {
			events: p
		} = c, d = p[t] || {}, {
			mediaQueries: h = c.mediaQueryKeys
		} = d, g = (0, gt.default)(c, `actionLists.${i}`, {}), {
			actionItemGroups: m,
			useFirstGroupAsInitialState: _
		} = g;
		if (!m || !m.length) return !1;
		o >= m.length && (0, gt.default)(d, "config.loop") && (o = 0), o === 0 && _ && o++;
		let A = (o === 0 || o === 1 && _) && Es(d.action?.actionTypeId) ? d.config.delay : void 0,
			S = (0, gt.default)(m, [o, "actionItems"], []);
		if (!S.length || !Ti(h, f.mediaQueryKey)) return !1;
		let I = f.hasBoundaryNodes && r ? $r(r, _i) : null,
			L = FV(S),
			P = !1;
		return S.forEach((R, X) => {
			let {
				config: B,
				actionTypeId: z
			} = R, Q = Ii(z), {
				target: G
			} = B;
			if (!G) return;
			let x = G.boundaryMode ? I : null;
			bi({
				config: B,
				event: d,
				eventTarget: r,
				elementRoot: x,
				elementApi: Pe
			}).forEach((C, M) => {
				let F = Q ? bs(z)(C, R) : null,
					Z = Q ? KV(z)(C, R) : null;
				P = !0;
				let J = L === X && M === 0,
					q = GV({
						element: C,
						actionItem: R
					}),
					V = _s({
						element: C,
						actionItem: R,
						elementApi: Pe
					}, F);
				Ts({
					store: e,
					element: C,
					actionItem: R,
					eventId: t,
					eventTarget: r,
					eventStateKey: n,
					actionListId: i,
					groupIndex: o,
					isCarrier: J,
					computedStyle: q,
					destination: V,
					immediate: a,
					verbose: s,
					pluginInstance: F,
					pluginDuration: Z,
					instanceDelay: A
				})
			})
		}), P
	}

	function Ts(e) {
		let {
			store: t,
			computedStyle: r,
			...n
		} = e, {
			element: i,
			actionItem: o,
			immediate: a,
			pluginInstance: s,
			continuous: c,
			restingValue: f,
			eventId: p
		} = n, d = !c, h = MV(), {
			ixElements: g,
			ixSession: m,
			ixData: _
		} = t.getState(), N = qV(g, i), {
			refState: A
		} = g[N] || {}, S = us(i), I = m.reducedMotion && Wo[o.actionTypeId], L;
		if (I && c) switch (_.events[p]?.eventTypeId) {
			case Ye.MOUSE_MOVE:
			case Ye.MOUSE_MOVE_IN_VIEWPORT:
				L = f;
				break;
			default:
				L = .5;
				break
		}
		let P = UV(i, A, r, o, Pe, s);
		if (t.dispatch(es({
				instanceId: h,
				elementId: N,
				origin: P,
				refType: S,
				skipMotion: I,
				skipToValue: L,
				...n
			})), y_(document.body, "ix2-animation-started", h), a) {
			yH(t, h);
			return
		}
		Gt({
			store: t,
			select: ({
				ixInstances: R
			}) => R[h],
			onChange: E_
		}), d && t.dispatch(ci(h, m.tick))
	}

	function Is(e, t) {
		y_(document.body, "ix2-animation-stopping", {
			instanceId: e.id,
			state: t.getState()
		});
		let {
			elementId: r,
			actionItem: n
		} = e, {
			ixElements: i
		} = t.getState(), {
			ref: o,
			refType: a
		} = i[r] || {};
		a === f_ && XV(o, n, Pe), t.dispatch(ts(e.id))
	}

	function y_(e, t, r) {
		let n = document.createEvent("CustomEvent");
		n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
	}

	function yH(e, t) {
		let {
			ixParameters: r
		} = e.getState();
		e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r));
		let {
			ixInstances: n
		} = e.getState();
		E_(n[t], e)
	}

	function E_(e, t) {
		let {
			active: r,
			continuous: n,
			complete: i,
			elementId: o,
			actionItem: a,
			actionTypeId: s,
			renderType: c,
			current: f,
			groupIndex: p,
			eventId: d,
			eventTarget: h,
			eventStateKey: g,
			actionListId: m,
			isCarrier: _,
			styleProp: N,
			verbose: A,
			pluginInstance: S
		} = e, {
			ixData: I,
			ixSession: L
		} = t.getState(), {
			events: P
		} = I, R = P[d] || {}, {
			mediaQueries: X = I.mediaQueryKeys
		} = R;
		if (Ti(X, L.mediaQueryKey) && (n || r || i)) {
			if (f || c === PV && i) {
				t.dispatch(rs(o, s, f, a));
				let {
					ixElements: B
				} = t.getState(), {
					ref: z,
					refType: Q,
					refState: G
				} = B[o] || {}, x = G && G[s];
				(Q === f_ || Ii(s)) && DV(z, G, x, d, a, N, Pe, c, S)
			}
			if (i) {
				if (_) {
					let B = en({
						store: t,
						eventId: d,
						eventTarget: h,
						eventStateKey: g,
						actionListId: m,
						groupIndex: p + 1,
						verbose: A
					});
					A && !B && t.dispatch(pr({
						actionListId: m,
						isPlaying: !1
					}))
				}
				Is(e, t)
			}
		}
	}
	var o_, gt, a_, s_, u_, c_, gr, l_, mi, NV, Es, ms, _i, f_, PV, n_, bi, qV, _s, Gt, MV, DV, d_, FV, GV, UV, VV, HV, kV, Ti, XV, WV, BV, jV, zV, Ii, bs, KV, i_, YV, $V, lH, dH, pH, vH, ys = he(() => {
		"use strict";
		o_ = ue(ma()), gt = ue(Xn()), a_ = ue(Ny()), s_ = ue(iE()), u_ = ue(aE()), c_ = ue(uE()), gr = ue(vE()), l_ = ue(bE());
		De();
		mi = ue(Ft());
		li();
		xE();
		r_();
		NV = Object.keys(ko), Es = e => NV.includes(e), {
			COLON_DELIMITER: ms,
			BOUNDARY_SELECTOR: _i,
			HTML_ELEMENT: f_,
			RENDER_GENERAL: PV,
			W_MOD_IX: n_
		} = Se, {
			getAffectedElements: bi,
			getElementId: qV,
			getDestinationValues: _s,
			observeStore: Gt,
			getInstanceId: MV,
			renderHTMLElement: DV,
			clearAllStyles: d_,
			getMaxDurationItemIndex: FV,
			getComputedStyle: GV,
			getInstanceOrigin: UV,
			reduceListToGroup: VV,
			shouldNamespaceEventParameter: HV,
			getNamespacedParameterId: kV,
			shouldAllowMediaQuery: Ti,
			cleanupHTMLElement: XV,
			clearObjectCache: WV,
			stringifyTarget: BV,
			mediaQueriesEqual: jV,
			shallowEqual: zV
		} = mi.IX2VanillaUtils, {
			isPluginType: Ii,
			createPluginInstance: bs,
			getPluginDuration: KV
		} = mi.IX2VanillaPlugins, i_ = navigator.userAgent, YV = i_.match(/iPad/i) || i_.match(/iPhone/), $V = 12;
		lH = ["resize", "orientationchange"];
		dH = (e, t) => (0, s_.default)((0, c_.default)(e, t), u_.default), pH = (e, t) => {
			(0, gr.default)(e, (r, n) => {
				r.forEach((i, o) => {
					let a = n + ms + o;
					t(i, n, a)
				})
			})
		}, vH = e => {
			let t = {
				target: e.target,
				targets: e.targets
			};
			return bi({
				config: t,
				elementApi: Pe
			})
		}
	});
	var b_ = u(ht => {
		"use strict";
		var EH = ln().default,
			mH = ru().default;
		Object.defineProperty(ht, "__esModule", {
			value: !0
		});
		ht.actions = void 0;
		ht.destroy = __;
		ht.init = OH;
		ht.setEnv = IH;
		ht.store = void 0;
		Hl();
		var _H = Vo(),
			bH = mH((py(), Je(dy))),
			Os = (ys(), Je(m_)),
			TH = EH((li(), Je(IE)));
		ht.actions = TH;
		var As = ht.store = (0, _H.createStore)(bH.default);

		function IH(e) {
			e() && (0, Os.observeRequests)(As)
		}

		function OH(e) {
			__(), (0, Os.startEngine)({
				store: As,
				rawData: e,
				allowEvents: !0
			})
		}

		function __() {
			(0, Os.stopEngine)(As)
		}
	});
	var A_ = u((Hj, O_) => {
		"use strict";
		var T_ = Ue(),
			I_ = b_();
		I_.setEnv(T_.env);
		T_.define("ix2", O_.exports = function() {
			return I_
		})
	});
	var x_ = u((kj, w_) => {
		"use strict";
		var hr = Ue();
		hr.define("links", w_.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, o = hr.env(),
				a = window.location,
				s = document.createElement("a"),
				c = "w--current",
				f = /index\.(html|php)$/,
				p = /\/$/,
				d, h;
			r.ready = r.design = r.preview = g;

			function g() {
				i = o && hr.env("design"), h = hr.env("slug") || a.pathname || "", hr.scroll.off(_), d = [];
				for (var A = document.links, S = 0; S < A.length; ++S) m(A[S]);
				d.length && (hr.scroll.on(_), _())
			}

			function m(A) {
				var S = i && A.getAttribute("href-disabled") || A.getAttribute("href");
				if (s.href = S, !(S.indexOf(":") >= 0)) {
					var I = e(A);
					if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
						if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
						var L = e(s.hash);
						L.length && d.push({
							link: I,
							sec: L,
							active: !1
						});
						return
					}
					if (!(S === "#" || S === "")) {
						var P = s.href === a.href || S === h || f.test(S) && p.test(h);
						N(I, c, P)
					}
				}
			}

			function _() {
				var A = n.scrollTop(),
					S = n.height();
				t.each(d, function(I) {
					var L = I.link,
						P = I.sec,
						R = P.offset().top,
						X = P.outerHeight(),
						B = S * .5,
						z = P.is(":visible") && R + X - B >= A && R + B <= A + S;
					I.active !== z && (I.active = z, N(L, c, z))
				})
			}

			function N(A, S, I) {
				var L = A.hasClass(S);
				I && L || !I && !L || (I ? A.addClass(S) : A.removeClass(S))
			}
			return r
		})
	});
	var C_ = u((Xj, S_) => {
		"use strict";
		var wi = Ue();
		wi.define("scroll", S_.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = m() ? null : window.history,
				i = e(window),
				o = e(document),
				a = e(document.body),
				s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(x) {
					window.setTimeout(x, 15)
				},
				c = wi.env("editor") ? ".w-editor-body" : "body",
				f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
				p = 'a[href="#"]',
				d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
				h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				g = document.createElement("style");
			g.appendChild(document.createTextNode(h));

			function m() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

			function N(x) {
				return _.test(x.hash) && x.host + x.pathname === r.host + r.pathname
			}
			let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function S() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
			}

			function I(x, v) {
				var C;
				switch (v) {
					case "add":
						C = x.attr("tabindex"), C ? x.attr("data-wf-tabindex-swap", C) : x.attr("tabindex", "-1");
						break;
					case "remove":
						C = x.attr("data-wf-tabindex-swap"), C ? (x.attr("tabindex", C), x.removeAttr("data-wf-tabindex-swap")) : x.removeAttr("tabindex");
						break
				}
				x.toggleClass("wf-force-outline-none", v === "add")
			}

			function L(x) {
				var v = x.currentTarget;
				if (!(wi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
					var C = N(v) ? v.hash : "";
					if (C !== "") {
						var M = e(C);
						M.length && (x && (x.preventDefault(), x.stopPropagation()), P(C, x), window.setTimeout(function() {
							R(M, function() {
								I(M, "add"), M.get(0).focus({
									preventScroll: !0
								}), I(M, "remove")
							})
						}, x ? 0 : 300))
					}
				}
			}

			function P(x) {
				if (r.hash !== x && n && n.pushState && !(wi.env.chrome && r.protocol === "file:")) {
					var v = n.state && n.state.hash;
					v !== x && n.pushState({
						hash: x
					}, "", x)
				}
			}

			function R(x, v) {
				var C = i.scrollTop(),
					M = X(x);
				if (C !== M) {
					var F = B(x, C, M),
						Z = Date.now(),
						J = function() {
							var q = Date.now() - Z;
							window.scroll(0, z(C, M, q, F)), q <= F ? s(J) : typeof v == "function" && v()
						};
					s(J)
				}
			}

			function X(x) {
				var v = e(f),
					C = v.css("position") === "fixed" ? v.outerHeight() : 0,
					M = x.offset().top - C;
				if (x.data("scroll") === "mid") {
					var F = i.height() - C,
						Z = x.outerHeight();
					Z < F && (M -= Math.round((F - Z) / 2))
				}
				return M
			}

			function B(x, v, C) {
				if (S()) return 0;
				var M = 1;
				return a.add(x).each(function(F, Z) {
					var J = parseFloat(Z.getAttribute("data-scroll-time"));
					!isNaN(J) && J >= 0 && (M = J)
				}), (472.143 * Math.log(Math.abs(v - C) + 125) - 2e3) * M
			}

			function z(x, v, C, M) {
				return C > M ? v : x + (v - x) * Q(C / M)
			}

			function Q(x) {
				return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1
			}

			function G() {
				var {
					WF_CLICK_EMPTY: x,
					WF_CLICK_SCROLL: v
				} = t;
				o.on(v, d, L), o.on(x, p, function(C) {
					C.preventDefault()
				}), document.head.insertBefore(g, document.head.firstChild)
			}
			return {
				ready: G
			}
		})
	});
	var L_ = u((Wj, R_) => {
		"use strict";
		var AH = Ue();
		AH.define("touch", R_.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(o) {
				return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
			};

			function n(o) {
				var a = !1,
					s = !1,
					c = Math.min(Math.round(window.innerWidth * .04), 40),
					f, p;
				o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", g, !1), o.addEventListener("touchcancel", m, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", g, !1), o.addEventListener("mouseout", m, !1);

				function d(N) {
					var A = N.touches;
					A && A.length > 1 || (a = !0, A ? (s = !0, f = A[0].clientX) : f = N.clientX, p = f)
				}

				function h(N) {
					if (a) {
						if (s && N.type === "mousemove") {
							N.preventDefault(), N.stopPropagation();
							return
						}
						var A = N.touches,
							S = A ? A[0].clientX : N.clientX,
							I = S - p;
						p = S, Math.abs(I) > c && r && String(r()) === "" && (i("swipe", N, {
							direction: I > 0 ? "right" : "left"
						}), m())
					}
				}

				function g(N) {
					if (a && (a = !1, s && N.type === "mouseup")) {
						N.preventDefault(), N.stopPropagation(), s = !1;
						return
					}
				}

				function m() {
					a = !1
				}

				function _() {
					o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", g, !1), o.removeEventListener("touchcancel", m, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", g, !1), o.removeEventListener("mouseout", m, !1), o = null
				}
				this.destroy = _
			}

			function i(o, a, s) {
				var c = e.Event(o, {
					originalEvent: a
				});
				e(a.target).trigger(c, s)
			}
			return t.instance = t.init(document), t
		})
	});
	var N_ = u(ws => {
		"use strict";
		Object.defineProperty(ws, "__esModule", {
			value: !0
		});
		ws.default = wH;

		function wH(e, t, r, n, i, o, a, s, c, f, p, d, h) {
			return function(g) {
				e(g);
				var m = g.form,
					_ = {
						name: m.attr("data-name") || m.attr("name") || "Untitled Form",
						pageId: m.attr("data-wf-page-id") || "",
						elementId: m.attr("data-wf-element-id") || "",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(m.html()),
						trackingCookies: n()
					};
				let N = m.attr("data-wf-flow");
				N && (_.wfFlow = N), i(g);
				var A = o(m, _.fields);
				if (A) return a(A);
				if (_.fileUploads = s(m), c(g), !f) {
					p(g);
					return
				}
				d.ajax({
					url: h,
					type: "POST",
					data: _,
					dataType: "json",
					crossDomain: !0
				}).done(function(S) {
					S && S.code === 200 && (g.success = !0), p(g)
				}).fail(function() {
					p(g)
				})
			}
		}
	});
	var q_ = u((jj, P_) => {
		"use strict";
		var xi = Ue();
		xi.define("forms", P_.exports = function(e, t) {
			var r = {},
				n = e(document),
				i, o = window.location,
				a = window.XDomainRequest && !window.atob,
				s = ".w-form",
				c, f = /e(-)?mail/i,
				p = /^\S+@\S+$/,
				d = window.alert,
				h = xi.env(),
				g, m, _, N = /list-manage[1-9]?.com/i,
				A = t.debounce(function() {
					d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				S(), !h && !g && L()
			};

			function S() {
				c = e("html").attr("data-wf-site"), m = "https://webflow.com/api/v1/form/" + c, a && m.indexOf("https://webflow.com") >= 0 && (m = m.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${m}/signFile`, i = e(s + " form"), i.length && i.each(I)
			}

			function I(q, V) {
				var K = e(V),
					U = e.data(V, s);
				U || (U = e.data(V, s, {
					form: K
				})), P(U);
				var D = K.closest("div.w-form");
				U.done = D.find("> .w-form-done"), U.fail = D.find("> .w-form-fail"), U.fileUploads = D.find(".w-file-upload"), U.fileUploads.each(function(ne) {
					F(ne, U)
				});
				var j = U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
				U.done.attr("aria-label") || U.form.attr("aria-label", j), U.done.attr("tabindex", "-1"), U.done.attr("role", "region"), U.done.attr("aria-label") || U.done.attr("aria-label", j + " success"), U.fail.attr("tabindex", "-1"), U.fail.attr("role", "region"), U.fail.attr("aria-label") || U.fail.attr("aria-label", j + " failure");
				var ie = U.action = K.attr("action");
				if (U.handler = null, U.redirect = K.attr("data-redirect"), N.test(ie)) {
					U.handler = v;
					return
				}
				if (!ie) {
					if (c) {
						U.handler = (() => {
							let ne = N_().default;
							return ne(P, o, xi, Q, M, X, d, B, R, c, C, e, m)
						})();
						return
					}
					A()
				}
			}

			function L() {
				g = !0, n.on("submit", s + " form", function(ne) {
					var te = e.data(this, s);
					te.handler && (te.evt = ne, te.handler(te))
				});
				let q = ".w-checkbox-input",
					V = ".w-radio-input",
					K = "w--redirected-checked",
					U = "w--redirected-focus",
					D = "w--redirected-focus-visible",
					j = ":focus-visible, [data-wf-focus-visible]",
					ie = [
						["checkbox", q],
						["radio", V]
					];
				n.on("change", s + ' form input[type="checkbox"]:not(' + q + ")", ne => {
					e(ne.target).siblings(q).toggleClass(K)
				}), n.on("change", s + ' form input[type="radio"]', ne => {
					e(`input[name="${ne.target.name}"]:not(${q})`).map((de, ut) => e(ut).siblings(V).removeClass(K));
					let te = e(ne.target);
					te.hasClass("w-radio-input") || te.siblings(V).addClass(K)
				}), ie.forEach(([ne, te]) => {
					n.on("focus", s + ` form input[type="${ne}"]:not(` + te + ")", de => {
						e(de.target).siblings(te).addClass(U), e(de.target).filter(j).siblings(te).addClass(D)
					}), n.on("blur", s + ` form input[type="${ne}"]:not(` + te + ")", de => {
						e(de.target).siblings(te).removeClass(`${U} ${D}`)
					})
				})
			}

			function P(q) {
				var V = q.btn = q.form.find(':input[type="submit"]');
				q.wait = q.btn.attr("data-wait") || null, q.success = !1, V.prop("disabled", !1), q.label && V.val(q.label)
			}

			function R(q) {
				var V = q.btn,
					K = q.wait;
				V.prop("disabled", !0), K && (q.label = V.val(), V.val(K))
			}

			function X(q, V) {
				var K = null;
				return V = V || {}, q.find(':input:not([type="submit"]):not([type="file"])').each(function(U, D) {
					var j = e(D),
						ie = j.attr("type"),
						ne = j.attr("data-name") || j.attr("name") || "Field " + (U + 1),
						te = j.val();
					if (ie === "checkbox") te = j.is(":checked");
					else if (ie === "radio") {
						if (V[ne] === null || typeof V[ne] == "string") return;
						te = q.find('input[name="' + j.attr("name") + '"]:checked').val() || null
					}
					typeof te == "string" && (te = e.trim(te)), V[ne] = te, K = K || G(j, ie, ne, te)
				}), K
			}

			function B(q) {
				var V = {};
				return q.find(':input[type="file"]').each(function(K, U) {
					var D = e(U),
						j = D.attr("data-name") || D.attr("name") || "File " + (K + 1),
						ie = D.attr("data-value");
					typeof ie == "string" && (ie = e.trim(ie)), V[j] = ie
				}), V
			}
			let z = {
				_mkto_trk: "marketo"
			};

			function Q() {
				return document.cookie.split("; ").reduce(function(V, K) {
					let U = K.split("="),
						D = U[0];
					if (D in z) {
						let j = z[D],
							ie = U.slice(1).join("=");
						V[j] = ie
					}
					return V
				}, {})
			}

			function G(q, V, K, U) {
				var D = null;
				return V === "password" ? D = "Passwords cannot be submitted." : q.attr("required") ? U ? f.test(q.attr("type")) && (p.test(U) || (D = "Please enter a valid email address for: " + K)) : D = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !U && (D = "Please confirm you\u2019re not a robot."), D
			}

			function x(q) {
				M(q), C(q)
			}

			function v(q) {
				P(q);
				var V = q.form,
					K = {};
				if (/^https/.test(o.href) && !/^https/.test(q.action)) {
					V.attr("method", "post");
					return
				}
				M(q);
				var U = X(V, K);
				if (U) return d(U);
				R(q);
				var D;
				t.each(K, function(te, de) {
					f.test(de) && (K.EMAIL = te), /^((full[ _-]?)?name)$/i.test(de) && (D = te), /^(first[ _-]?name)$/i.test(de) && (K.FNAME = te), /^(last[ _-]?name)$/i.test(de) && (K.LNAME = te)
				}), D && !K.FNAME && (D = D.split(" "), K.FNAME = D[0], K.LNAME = K.LNAME || D[1]);
				var j = q.action.replace("/post?", "/post-json?") + "&c=?",
					ie = j.indexOf("u=") + 2;
				ie = j.substring(ie, j.indexOf("&", ie));
				var ne = j.indexOf("id=") + 3;
				ne = j.substring(ne, j.indexOf("&", ne)), K["b_" + ie + "_" + ne] = "", e.ajax({
					url: j,
					data: K,
					dataType: "jsonp"
				}).done(function(te) {
					q.success = te.result === "success" || /already/.test(te.msg), q.success || console.info("MailChimp error: " + te.msg), C(q)
				}).fail(function() {
					C(q)
				})
			}

			function C(q) {
				var V = q.form,
					K = q.redirect,
					U = q.success;
				if (U && K) {
					xi.location(K);
					return
				}
				q.done.toggle(U), q.fail.toggle(!U), U ? q.done.focus() : q.fail.focus(), V.toggle(!U), P(q)
			}

			function M(q) {
				q.evt && q.evt.preventDefault(), q.evt = null
			}

			function F(q, V) {
				if (!V.fileUploads || !V.fileUploads[q]) return;
				var K, U = e(V.fileUploads[q]),
					D = U.find("> .w-file-upload-default"),
					j = U.find("> .w-file-upload-uploading"),
					ie = U.find("> .w-file-upload-success"),
					ne = U.find("> .w-file-upload-error"),
					te = D.find(".w-file-upload-input"),
					de = D.find(".w-file-upload-label"),
					ut = de.children(),
					ce = ne.find(".w-file-upload-error-msg"),
					y = ie.find(".w-file-upload-file"),
					H = ie.find(".w-file-remove-link"),
					Y = y.find(".w-file-upload-file-name"),
					W = ce.attr("data-w-size-error"),
					ve = ce.attr("data-w-type-error"),
					xt = ce.attr("data-w-generic-error");
				if (h || de.on("click keydown", function(b) {
						b.type === "keydown" && b.which !== 13 && b.which !== 32 || (b.preventDefault(), te.click())
					}), de.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), H.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), h) te.on("click", function(b) {
					b.preventDefault()
				}), de.on("click", function(b) {
					b.preventDefault()
				}), ut.on("click", function(b) {
					b.preventDefault()
				});
				else {
					H.on("click keydown", function(b) {
						if (b.type === "keydown") {
							if (b.which !== 13 && b.which !== 32) return;
							b.preventDefault()
						}
						te.removeAttr("data-value"), te.val(""), Y.html(""), D.toggle(!0), ie.toggle(!1), de.focus()
					}), te.on("change", function(b) {
						K = b.target && b.target.files && b.target.files[0], K && (D.toggle(!1), ne.toggle(!1), j.toggle(!0), j.focus(), Y.text(K.name), O() || R(V), V.fileUploads[q].uploading = !0, Z(K, E))
					});
					var ct = de.outerHeight();
					te.height(ct), te.width(1)
				}

				function l(b) {
					var w = b.responseJSON && b.responseJSON.msg,
						$ = xt;
					typeof w == "string" && w.indexOf("InvalidFileTypeError") === 0 ? $ = ve : typeof w == "string" && w.indexOf("MaxFileSizeError") === 0 && ($ = W), ce.text($), te.removeAttr("data-value"), te.val(""), j.toggle(!1), D.toggle(!0), ne.toggle(!0), ne.focus(), V.fileUploads[q].uploading = !1, O() || P(V)
				}

				function E(b, w) {
					if (b) return l(b);
					var $ = w.fileName,
						re = w.postData,
						pe = w.fileId,
						k = w.s3Url;
					te.attr("data-value", pe), J(k, re, K, $, T)
				}

				function T(b) {
					if (b) return l(b);
					j.toggle(!1), ie.css("display", "inline-block"), ie.focus(), V.fileUploads[q].uploading = !1, O() || P(V)
				}

				function O() {
					var b = V.fileUploads && V.fileUploads.toArray() || [];
					return b.some(function(w) {
						return w.uploading
					})
				}
			}

			function Z(q, V) {
				var K = new URLSearchParams({
					name: q.name,
					size: q.size
				});
				e.ajax({
					type: "GET",
					url: `${_}?${K}`,
					crossDomain: !0
				}).done(function(U) {
					V(null, U)
				}).fail(function(U) {
					V(U)
				})
			}

			function J(q, V, K, U, D) {
				var j = new FormData;
				for (var ie in V) j.append(ie, V[ie]);
				j.append("file", K, U), e.ajax({
					type: "POST",
					url: q,
					data: j,
					processData: !1,
					contentType: !1
				}).done(function() {
					D(null)
				}).fail(function(ne) {
					D(ne)
				})
			}
			return r
		})
	});
	var D_ = u((zj, M_) => {
		"use strict";
		var At = Ue(),
			xH = cn(),
			xe = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		At.define("navbar", M_.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(window),
				o = e(document),
				a = t.debounce,
				s, c, f, p, d = At.env(),
				h = '<div class="w-nav-overlay" data-wf-ignore />',
				g = ".w-nav",
				m = "w--open",
				_ = "w--nav-dropdown-open",
				N = "w--nav-dropdown-toggle-open",
				A = "w--nav-dropdown-list-open",
				S = "w--nav-link-open",
				I = xH.triggers,
				L = e();
			r.ready = r.design = r.preview = P, r.destroy = function() {
				L = e(), R(), c && c.length && c.each(Q)
			};

			function P() {
				f = d && At.env("design"), p = At.env("editor"), s = e(document.body), c = o.find(g), c.length && (c.each(z), R(), X())
			}

			function R() {
				At.resize.off(B)
			}

			function X() {
				At.resize.on(B)
			}

			function B() {
				c.each(D)
			}

			function z(y, H) {
				var Y = e(H),
					W = e.data(H, g);
				W || (W = e.data(H, g, {
					open: !1,
					el: Y,
					config: {},
					selectedIdx: -1
				})), W.menu = Y.find(".w-nav-menu"), W.links = W.menu.find(".w-nav-link"), W.dropdowns = W.menu.find(".w-dropdown"), W.dropdownToggle = W.menu.find(".w-dropdown-toggle"), W.dropdownList = W.menu.find(".w-dropdown-list"), W.button = Y.find(".w-nav-button"), W.container = Y.find(".w-container"), W.overlayContainerId = "w-nav-overlay-" + y, W.outside = K(W);
				var ve = Y.find(".w-nav-brand");
				ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), W.button.attr("style", "-webkit-user-select: text;"), W.button.attr("aria-label") == null && W.button.attr("aria-label", "menu"), W.button.attr("role", "button"), W.button.attr("tabindex", "0"), W.button.attr("aria-controls", W.overlayContainerId), W.button.attr("aria-haspopup", "menu"), W.button.attr("aria-expanded", "false"), W.el.off(g), W.button.off(g), W.menu.off(g), v(W), f ? (G(W), W.el.on("setting" + g, C(W))) : (x(W), W.button.on("click" + g, q(W)), W.menu.on("click" + g, "a", V(W)), W.button.on("keydown" + g, M(W)), W.el.on("keydown" + g, F(W))), D(y, H)
			}

			function Q(y, H) {
				var Y = e.data(H, g);
				Y && (G(Y), e.removeData(H, g))
			}

			function G(y) {
				y.overlay && (ce(y, !0), y.overlay.remove(), y.overlay = null)
			}

			function x(y) {
				y.overlay || (y.overlay = e(h).appendTo(y.el), y.overlay.attr("id", y.overlayContainerId), y.parent = y.menu.parent(), ce(y, !0))
			}

			function v(y) {
				var H = {},
					Y = y.config || {},
					W = H.animation = y.el.attr("data-animation") || "default";
				H.animOver = /^over/.test(W), H.animDirect = /left$/.test(W) ? -1 : 1, Y.animation !== W && y.open && t.defer(J, y), H.easing = y.el.attr("data-easing") || "ease", H.easing2 = y.el.attr("data-easing2") || "ease";
				var ve = y.el.attr("data-duration");
				H.duration = ve != null ? Number(ve) : 400, H.docHeight = y.el.attr("data-doc-height"), y.config = H
			}

			function C(y) {
				return function(H, Y) {
					Y = Y || {};
					var W = i.width();
					v(y), Y.open === !0 && de(y, !0), Y.open === !1 && ce(y, !0), y.open && t.defer(function() {
						W !== i.width() && J(y)
					})
				}
			}

			function M(y) {
				return function(H) {
					switch (H.keyCode) {
						case xe.SPACE:
						case xe.ENTER:
							return q(y)(), H.preventDefault(), H.stopPropagation();
						case xe.ESCAPE:
							return ce(y), H.preventDefault(), H.stopPropagation();
						case xe.ARROW_RIGHT:
						case xe.ARROW_DOWN:
						case xe.HOME:
						case xe.END:
							return y.open ? (H.keyCode === xe.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, Z(y), H.preventDefault(), H.stopPropagation()) : (H.preventDefault(), H.stopPropagation())
					}
				}
			}

			function F(y) {
				return function(H) {
					if (y.open) switch (y.selectedIdx = y.links.index(document.activeElement), H.keyCode) {
						case xe.HOME:
						case xe.END:
							return H.keyCode === xe.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, Z(y), H.preventDefault(), H.stopPropagation();
						case xe.ESCAPE:
							return ce(y), y.button.focus(), H.preventDefault(), H.stopPropagation();
						case xe.ARROW_LEFT:
						case xe.ARROW_UP:
							return y.selectedIdx = Math.max(-1, y.selectedIdx - 1), Z(y), H.preventDefault(), H.stopPropagation();
						case xe.ARROW_RIGHT:
						case xe.ARROW_DOWN:
							return y.selectedIdx = Math.min(y.links.length - 1, y.selectedIdx + 1), Z(y), H.preventDefault(), H.stopPropagation()
					}
				}
			}

			function Z(y) {
				if (y.links[y.selectedIdx]) {
					var H = y.links[y.selectedIdx];
					H.focus(), V(H)
				}
			}

			function J(y) {
				y.open && (ce(y, !0), de(y, !0))
			}

			function q(y) {
				return a(function() {
					y.open ? ce(y) : de(y)
				})
			}

			function V(y) {
				return function(H) {
					var Y = e(this),
						W = Y.attr("href");
					if (!At.validClick(H.currentTarget)) {
						H.preventDefault();
						return
					}
					W && W.indexOf("#") === 0 && y.open && ce(y)
				}
			}

			function K(y) {
				return y.outside && o.off("click" + g, y.outside),
					function(H) {
						var Y = e(H.target);
						p && Y.closest(".w-editor-bem-EditorOverlay").length || U(y, Y)
					}
			}
			var U = a(function(y, H) {
				if (y.open) {
					var Y = H.closest(".w-nav-menu");
					y.menu.is(Y) || ce(y)
				}
			});

			function D(y, H) {
				var Y = e.data(H, g),
					W = Y.collapsed = Y.button.css("display") !== "none";
				if (Y.open && !W && !f && ce(Y, !0), Y.container.length) {
					var ve = ie(Y);
					Y.links.each(ve), Y.dropdowns.each(ve)
				}
				Y.open && ut(Y)
			}
			var j = "max-width";

			function ie(y) {
				var H = y.container.css(j);
				return H === "none" && (H = ""),
					function(Y, W) {
						W = e(W), W.css(j, ""), W.css(j) === "none" && W.css(j, H)
					}
			}

			function ne(y, H) {
				H.setAttribute("data-nav-menu-open", "")
			}

			function te(y, H) {
				H.removeAttribute("data-nav-menu-open")
			}

			function de(y, H) {
				if (y.open) return;
				y.open = !0, y.menu.each(ne), y.links.addClass(S), y.dropdowns.addClass(_), y.dropdownToggle.addClass(N), y.dropdownList.addClass(A), y.button.addClass(m);
				var Y = y.config,
					W = Y.animation;
				(W === "none" || !n.support.transform || Y.duration <= 0) && (H = !0);
				var ve = ut(y),
					xt = y.menu.outerHeight(!0),
					ct = y.menu.outerWidth(!0),
					l = y.el.height(),
					E = y.el[0];
				if (D(0, E), I.intro(0, E), At.redraw.up(), f || o.on("click" + g, y.outside), H) {
					b();
					return
				}
				var T = "transform " + Y.duration + "ms " + Y.easing;
				if (y.overlay && (L = y.menu.prev(), y.overlay.show().append(y.menu)), Y.animOver) {
					n(y.menu).add(T).set({
						x: Y.animDirect * ct,
						height: ve
					}).start({
						x: 0
					}).then(b), y.overlay && y.overlay.width(ct);
					return
				}
				var O = l + xt;
				n(y.menu).add(T).set({
					y: -O
				}).start({
					y: 0
				}).then(b);

				function b() {
					y.button.attr("aria-expanded", "true")
				}
			}

			function ut(y) {
				var H = y.config,
					Y = H.docHeight ? o.height() : s.height();
				return H.animOver ? y.menu.height(Y) : y.el.css("position") !== "fixed" && (Y -= y.el.outerHeight(!0)), y.overlay && y.overlay.height(Y), Y
			}

			function ce(y, H) {
				if (!y.open) return;
				y.open = !1, y.button.removeClass(m);
				var Y = y.config;
				if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (H = !0), I.outro(0, y.el[0]), o.off("click" + g, y.outside), H) {
					n(y.menu).stop(), E();
					return
				}
				var W = "transform " + Y.duration + "ms " + Y.easing2,
					ve = y.menu.outerHeight(!0),
					xt = y.menu.outerWidth(!0),
					ct = y.el.height();
				if (Y.animOver) {
					n(y.menu).add(W).start({
						x: xt * Y.animDirect
					}).then(E);
					return
				}
				var l = ct + ve;
				n(y.menu).add(W).start({
					y: -l
				}).then(E);

				function E() {
					y.menu.height(""), n(y.menu).set({
						x: 0,
						y: 0
					}), y.menu.each(te), y.links.removeClass(S), y.dropdowns.removeClass(_), y.dropdownToggle.removeClass(N), y.dropdownList.removeClass(A), y.overlay && y.overlay.children().length && (L.length ? y.menu.insertAfter(L) : y.menu.prependTo(y.parent), y.overlay.attr("style", "").hide()), y.el.triggerHandler("w-close"), y.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	var G_ = u((Kj, F_) => {
		"use strict";
		var wt = Ue(),
			SH = cn();
		wt.define("tabs", F_.exports = function(e) {
			var t = {},
				r = e.tram,
				n = e(document),
				i, o, a = wt.env,
				s = a.safari,
				c = a(),
				f = "data-w-tab",
				p = "data-w-pane",
				d = ".w-tabs",
				h = "w--current",
				g = "w--tab-active",
				m = SH.triggers,
				_ = !1;
			t.ready = t.design = t.preview = N, t.redraw = function() {
				_ = !0, N(), _ = !1
			}, t.destroy = function() {
				i = n.find(d), i.length && (i.each(I), A())
			};

			function N() {
				o = c && wt.env("design"), i = n.find(d), i.length && (i.each(L), wt.env("preview") && !_ && i.each(I), A(), S())
			}

			function A() {
				wt.redraw.off(t.redraw)
			}

			function S() {
				wt.redraw.on(t.redraw)
			}

			function I(G, x) {
				var v = e.data(x, d);
				v && (v.links && v.links.each(m.reset), v.panes && v.panes.each(m.reset))
			}

			function L(G, x) {
				var v = d.substr(1) + "-" + G,
					C = e(x),
					M = e.data(x, d);
				if (M || (M = e.data(x, d, {
						el: C,
						config: {}
					})), M.current = null, M.tabIdentifier = v + "-" + f, M.paneIdentifier = v + "-" + p, M.menu = C.children(".w-tab-menu"), M.links = M.menu.children(".w-tab-link"), M.content = C.children(".w-tab-content"), M.panes = M.content.children(".w-tab-pane"), M.el.off(d), M.links.off(d), M.menu.attr("role", "tablist"), M.links.attr("tabindex", "-1"), P(M), !o) {
					M.links.on("click" + d, X(M)), M.links.on("keydown" + d, B(M));
					var F = M.links.filter("." + h),
						Z = F.attr(f);
					Z && z(M, {
						tab: Z,
						immediate: !0
					})
				}
			}

			function P(G) {
				var x = {};
				x.easing = G.el.attr("data-easing") || "ease";
				var v = parseInt(G.el.attr("data-duration-in"), 10);
				v = x.intro = v === v ? v : 0;
				var C = parseInt(G.el.attr("data-duration-out"), 10);
				C = x.outro = C === C ? C : 0, x.immediate = !v && !C, G.config = x
			}

			function R(G) {
				var x = G.current;
				return Array.prototype.findIndex.call(G.links, v => v.getAttribute(f) === x, null)
			}

			function X(G) {
				return function(x) {
					x.preventDefault();
					var v = x.currentTarget.getAttribute(f);
					v && z(G, {
						tab: v
					})
				}
			}

			function B(G) {
				return function(x) {
					var v = R(G),
						C = x.key,
						M = {
							ArrowLeft: v - 1,
							ArrowUp: v - 1,
							ArrowRight: v + 1,
							ArrowDown: v + 1,
							End: G.links.length - 1,
							Home: 0
						};
					if (C in M) {
						x.preventDefault();
						var F = M[C];
						F === -1 && (F = G.links.length - 1), F === G.links.length && (F = 0);
						var Z = G.links[F],
							J = Z.getAttribute(f);
						J && z(G, {
							tab: J
						})
					}
				}
			}

			function z(G, x) {
				x = x || {};
				var v = G.config,
					C = v.easing,
					M = x.tab;
				if (M !== G.current) {
					G.current = M;
					var F;
					G.links.each(function(D, j) {
						var ie = e(j);
						if (x.immediate || v.immediate) {
							var ne = G.panes[D];
							j.id || (j.id = G.tabIdentifier + "-" + D), ne.id || (ne.id = G.paneIdentifier + "-" + D), j.href = "#" + ne.id, j.setAttribute("role", "tab"), j.setAttribute("aria-controls", ne.id), j.setAttribute("aria-selected", "false"), ne.setAttribute("role", "tabpanel"), ne.setAttribute("aria-labelledby", j.id)
						}
						j.getAttribute(f) === M ? (F = j, ie.addClass(h).removeAttr("tabindex").attr({
							"aria-selected": "true"
						}).each(m.intro)) : ie.hasClass(h) && ie.removeClass(h).attr({
							tabindex: "-1",
							"aria-selected": "false"
						}).each(m.outro)
					});
					var Z = [],
						J = [];
					G.panes.each(function(D, j) {
						var ie = e(j);
						j.getAttribute(f) === M ? Z.push(j) : ie.hasClass(g) && J.push(j)
					});
					var q = e(Z),
						V = e(J);
					if (x.immediate || v.immediate) {
						q.addClass(g).each(m.intro), V.removeClass(g), _ || wt.redraw.up();
						return
					} else {
						var K = window.scrollX,
							U = window.scrollY;
						F.focus(), window.scrollTo(K, U)
					}
					V.length && v.outro ? (V.each(m.outro), r(V).add("opacity " + v.outro + "ms " + C, {
						fallback: s
					}).start({
						opacity: 0
					}).then(() => Q(v, V, q))) : Q(v, V, q)
				}
			}

			function Q(G, x, v) {
				if (x.removeClass(g).css({
						opacity: "",
						transition: "",
						transform: "",
						width: "",
						height: ""
					}), v.addClass(g).each(m.intro), wt.redraw.up(), !G.intro) return r(v).set({
					opacity: 1
				});
				r(v).set({
					opacity: 0
				}).redraw().add("opacity " + G.intro + "ms " + G.easing, {
					fallback: s
				}).start({
					opacity: 1
				})
			}
			return t
		})
	});
	Vs();
	ks();
	Ws();
	zs();
	cn();
	A_();
	x_();
	C_();
	L_();
	q_();
	D_();
	G_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e": {
			"id": "e",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-17"
				}
			},
			"mediaQueries": ["main", "medium"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1651457275398
		},
		"e-3": {
			"id": "e-3",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-4"
				}
			},
			"mediaQueries": ["small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1651457993759
		},
		"e-9": {
			"id": "e-9",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-4",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-10"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".slider-main_component",
				"originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".slider-main_component",
				"originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683015537281
		},
		"e-10": {
			"id": "e-10",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-9"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".slider-main_component",
				"originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".slider-main_component",
				"originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683015537281
		},
		"e-11": {
			"id": "e-11",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-6",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-6-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-6-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1683016303511
		},
		"e-15": {
			"id": "e-15",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-14"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683022664298
		},
		"e-28": {
			"id": "e-28",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-29"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|092b5699-f94e-b35d-a2de-3284e4643ceb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|092b5699-f94e-b35d-a2de-3284e4643ceb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683197517455
		},
		"e-30": {
			"id": "e-30",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-31"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683207579686
		},
		"e-32": {
			"id": "e-32",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-33"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|5b59c855-1aa9-c633-57ad-1120b6949844",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|5b59c855-1aa9-c633-57ad-1120b6949844",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683212040117
		},
		"e-34": {
			"id": "e-34",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-11",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-35"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|10f4d6c5-36b2-ddf4-66ea-a72d8b611107",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|10f4d6c5-36b2-ddf4-66ea-a72d8b611107",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 30,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683233184104
		},
		"e-36": {
			"id": "e-36",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-37"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 30,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683235056302
		},
		"e-38": {
			"id": "e-38",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-39"
				}
			},
			"mediaQueries": ["main", "medium"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683619708152
		},
		"e-40": {
			"id": "e-40",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-41"
				}
			},
			"mediaQueries": ["small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683619708152
		},
		"e-42": {
			"id": "e-42",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-6",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-6-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-6-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1683619708152
		},
		"e-44": {
			"id": "e-44",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-43"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683619708152
		},
		"e-45": {
			"id": "e-45",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-46"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|092b5699-f94e-b35d-a2de-3284e4643ceb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|092b5699-f94e-b35d-a2de-3284e4643ceb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683619708152
		},
		"e-47": {
			"id": "e-47",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-48"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683619708152
		},
		"e-49": {
			"id": "e-49",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-50"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "626ff2cb-0fc6-2b3c-7abf-541026a7f82f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "626ff2cb-0fc6-2b3c-7abf-541026a7f82f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683619708152
		},
		"e-55": {
			"id": "e-55",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-4",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-56"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683885449647
		},
		"e-56": {
			"id": "e-56",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-55"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683885449648
		},
		"e-57": {
			"id": "e-57",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "NAVBAR_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-407"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "489064cb-9577-b618-a8e4-54da4629fd67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "489064cb-9577-b618-a8e4-54da4629fd67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1626227992075
		},
		"e-58": {
			"id": "e-58",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "NAVBAR_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-590"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "489064cb-9577-b618-a8e4-54da4629fd67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "489064cb-9577-b618-a8e4-54da4629fd67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1626227992075
		},
		"e-89": {
			"id": "e-89",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-90"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 30,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684918330468
		},
		"e-108": {
			"id": "e-108",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "NAVBAR_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-109"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684929901538
		},
		"e-109": {
			"id": "e-109",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "NAVBAR_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-108"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684929901538
		},
		"e-114": {
			"id": "e-114",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-115"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|78b939b8-be22-eba2-5011-2000ae3d1959",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|78b939b8-be22-eba2-5011-2000ae3d1959",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684931632263
		},
		"e-116": {
			"id": "e-116",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-28",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-117"
				}
			},
			"mediaQueries": ["main", "medium"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684931841688
		},
		"e-118": {
			"id": "e-118",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-29",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-119"
				}
			},
			"mediaQueries": ["small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684931841688
		},
		"e-123": {
			"id": "e-123",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-30",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-124"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|63a0afa2-368d-3979-17e6-14006407e665",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|63a0afa2-368d-3979-17e6-14006407e665",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1684943796560
		},
		"e-126": {
			"id": "e-126",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-32",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".horizontal-trigger",
				"originalId": "64d3dd9edfb41666c35b15b0|b83a5a79-3b81-c97e-ffc2-553572233ad6",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".horizontal-trigger",
				"originalId": "64d3dd9edfb41666c35b15b0|b83a5a79-3b81-c97e-ffc2-553572233ad6",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-32-p",
				"smoothing": 80,
				"startsEntering": false,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1622340741076
		},
		"e-133": {
			"id": "e-133",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-6",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-6-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-6-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1685460440534
		},
		"e-134": {
			"id": "e-134",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-135"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685461766905
		},
		"e-138": {
			"id": "e-138",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-139"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685517953217
		},
		"e-140": {
			"id": "e-140",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-141"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|fbc72031-5a2f-6ebc-b87a-acaff1037eae",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|fbc72031-5a2f-6ebc-b87a-acaff1037eae",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685518015754
		},
		"e-142": {
			"id": "e-142",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-143"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|b8fa81c6-4d14-4e48-3b43-84e374a67647",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|b8fa81c6-4d14-4e48-3b43-84e374a67647",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685518033150
		},
		"e-144": {
			"id": "e-144",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-145"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|5974a0b1-45ad-8c58-76cb-435ab5b5e29a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|5974a0b1-45ad-8c58-76cb-435ab5b5e29a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685518178256
		},
		"e-146": {
			"id": "e-146",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-37",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-37-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685520075631
		},
		"e-152": {
			"id": "e-152",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-151"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685521328876
		},
		"e-153": {
			"id": "e-153",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-39",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|647443d6-fc7a-6d84-c497-8e112eed3af5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|647443d6-fc7a-6d84-c497-8e112eed3af5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-39-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685522090692
		},
		"e-154": {
			"id": "e-154",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-155"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685522527581
		},
		"e-156": {
			"id": "e-156",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-157"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888ee8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888ee8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685522640371
		},
		"e-158": {
			"id": "e-158",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-159"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685522662458
		},
		"e-160": {
			"id": "e-160",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-41",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-161"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".service_item",
				"originalId": "64d3dd9edfb41666c35b15b3|7f5f8bed-9945-7b52-ee2f-df227c5dc7eb",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".service_item",
				"originalId": "64d3dd9edfb41666c35b15b3|7f5f8bed-9945-7b52-ee2f-df227c5dc7eb",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685522982517
		},
		"e-163": {
			"id": "e-163",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-42",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-162"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685523727470
		},
		"e-164": {
			"id": "e-164",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-165"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|8a801147-6444-5431-5cf7-590bb79a4298",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|8a801147-6444-5431-5cf7-590bb79a4298",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685524092896
		},
		"e-166": {
			"id": "e-166",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-167"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|ea927001-76a6-24c2-4c1b-66fe6c8ba8b6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|ea927001-76a6-24c2-4c1b-66fe6c8ba8b6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": 600,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685524118521
		},
		"e-170": {
			"id": "e-170",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-171"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685526993346
		},
		"e-178": {
			"id": "e-178",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-179"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|2c034968-5ffb-f62c-7af5-1141d9287ad8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|2c034968-5ffb-f62c-7af5-1141d9287ad8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685564201195
		},
		"e-180": {
			"id": "e-180",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-181"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888eec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888eec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685564285340
		},
		"e-182": {
			"id": "e-182",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-183"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685564297233
		},
		"e-186": {
			"id": "e-186",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-50",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-195"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1653369412854
		},
		"e-187": {
			"id": "e-187",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-46",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-194"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1648714724964
		},
		"e-188": {
			"id": "e-188",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-48",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-190"
				}
			},
			"mediaQueries": ["medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809560",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809560",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1648651697930
		},
		"e-191": {
			"id": "e-191",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-47",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-193"
				}
			},
			"mediaQueries": ["medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80955e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80955e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1671583599021
		},
		"e-192": {
			"id": "e-192",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-47",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-189"
				}
			},
			"mediaQueries": ["medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809557",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809557",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1671579471939
		},
		"e-194": {
			"id": "e-194",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-45",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-187"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1648714724963
		},
		"e-195": {
			"id": "e-195",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-49",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-186"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1653369412807
		},
		"e-196": {
			"id": "e-196",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-57",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-197"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|5e3b4457-8433-cf0f-d49e-14c624f41f09",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|5e3b4457-8433-cf0f-d49e-14c624f41f09",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685624128733
		},
		"e-198": {
			"id": "e-198",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-58",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-199"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685627484080
		},
		"e-201": {
			"id": "e-201",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-59",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-200"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15ae",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15ae",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1686568172130
		},
		"e-203": {
			"id": "e-203",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-60",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-202"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b6",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b6",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1686573150230
		},
		"e-204": {
			"id": "e-204",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"instant": false,
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-205"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d3dd9edfb41666c35b15b0|235815de-32e7-e394-f77d-677a969ef2fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d3dd9edfb41666c35b15b0|235815de-32e7-e394-f77d-677a969ef2fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 25,
				"scrollOffsetUnit": "%",
				"delay": 400,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1686936101336
		}
	},
	"actionLists": {
		"a": {
			"id": "a",
			"title": "Home marquee [Loop] [Desktop]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 25000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".home-marquee_marquee",
							"selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".home-marquee_marquee",
							"selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1651457286764
		},
		"a-2": {
			"id": "a-2",
			"title": "Home marquee [Loop] [Mobile]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-2-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 10000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".home-marquee_marquee",
							"selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-2-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".home-marquee_marquee",
							"selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1651457286764
		},
		"a-4": {
			"id": "a-4",
			"title": "Clients Pointer [IN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-4-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".pointer",
							"selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-4-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "swingTo",
						"duration": 400,
						"target": {
							"selector": ".pointer",
							"selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683015565373
		},
		"a-5": {
			"id": "a-5",
			"title": "Clients Pointer [OUT]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-5-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"selector": ".pointer",
							"selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1683015713462
		},
		"a-6": {
			"id": "a-6",
			"title": "Clients Pointer",
			"continuousParameterGroups": [{
				"id": "a-6-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-6-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".pointer---wrap",
								"selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
							},
							"xValue": -50,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-6-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".pointer---wrap",
								"selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
							},
							"xValue": 50,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-6-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-6-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".pointer---wrap",
								"selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
							},
							"yValue": -50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-6-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".pointer---wrap",
								"selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
							},
							"yValue": 50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1683016333358
		},
		"a-7": {
			"id": "a-7",
			"title": "Loader-1 [Hide]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-7-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader-1",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd2"]
						},
						"value": "flex"
					}
				}, {
					"id": "a-7-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".loader-1-wrapper",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd3"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-7-n-3",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-first",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
						},
						"value": "none"
					}
				}, {
					"id": "a-7-n-4",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-second",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
						},
						"value": "none"
					}
				}, {
					"id": "a-7-n-5",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-third",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd9"]
						},
						"value": "none"
					}
				}, {
					"id": "a-7-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".loader_1_background",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd5"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-17",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-first",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
						},
						"value": "block"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-8",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-second",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
						},
						"value": "block"
					}
				}, {
					"id": "a-7-n-9",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-first",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-10",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-second",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
						},
						"value": "none"
					}
				}, {
					"id": "a-7-n-11",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_1_text.is-third",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd9"]
						},
						"value": "block"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 500,
						"easing": "ease",
						"duration": 200,
						"target": {
							"selector": ".loader-1-wrapper",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd3"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"selector": ".loader_1_background",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd5"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-16",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 1000,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader-1",
							"selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd2"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1680078417278
		},
		"a-8": {
			"id": "a-8",
			"title": "Gradient Animation [RADIAL]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-13",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-8-n-9",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-8-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-2",
							"selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-2",
							"selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
						},
						"xValue": -6,
						"yValue": 10,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": -9,
						"yValue": 7,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-11",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 10,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-8-n-15",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"zValue": 90,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-2",
							"selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
						},
						"xValue": 10,
						"yValue": -14,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 2,
						"yValue": -9,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-12",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 6,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-8-n-16",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"zValue": 45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-2",
							"selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-10",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-8-n-14",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".who-shape-1",
							"selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1665137535236
		},
		"a-9": {
			"id": "a-9",
			"title": "Gradient Animation [HOME]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n-8",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"zValue": 72,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"zValue": -78,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"xValue": -4,
						"yValue": 4,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-6",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"zValue": -42,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-10",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"zValue": 96,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-12",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"xValue": -10,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-13",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"zValue": 88,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-14",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"xValue": -7,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-15",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"zValue": -68,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"xValue": -1,
						"yValue": -6,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-9-n-5",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
						},
						"zValue": -78,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-9",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"zValue": 72,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-9-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683207653903
		},
		"a-10": {
			"id": "a-10",
			"title": "Gradient Animation [FOOTER]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-10-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-2",
							"selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
						},
						"zValue": 47,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-9",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"zValue": 98,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-14",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"xValue": 1.3,
						"yValue": 1.3,
						"locked": true
					}
				}, {
					"id": "a-10-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-1",
							"selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
						},
						"zValue": -13,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-5",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-1",
							"selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
						},
						"zValue": -22,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-6",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-2",
							"selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
						},
						"zValue": 27,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-7",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"zValue": 94,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"xValue": -100,
						"yValue": 10,
						"zValue": null,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "px"
					}
				}, {
					"id": "a-10-n-12",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"xValue": 1.3,
						"yValue": 1.3,
						"locked": true
					}
				}, {
					"id": "a-10-n-18",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-2",
							"selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
						},
						"xValue": 1.1,
						"yValue": 1.1,
						"zValue": null,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-15",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-1",
							"selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
						},
						"zValue": -7,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-16",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-2",
							"selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
						},
						"zValue": 33,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"xValue": -39,
						"yValue": 2,
						"zValue": null,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "px"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-2",
							"selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
						},
						"zValue": 47,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-1",
							"selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
						},
						"zValue": -13,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-8",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"zValue": 98,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-10-n-13",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".footer-shape-3",
							"selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
						},
						"xValue": 1.3,
						"yValue": 1.3,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683212057412
		},
		"a-11": {
			"id": "a-11",
			"title": "Fade Up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-11-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 700,
						"target": {
							"selector": ".fade-up",
							"selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
						},
						"xValue": 0,
						"yValue": 5,
						"xUnit": "em",
						"yUnit": "em",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".fade-up",
							"selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outSine",
						"duration": 700,
						"target": {
							"selector": ".fade-up",
							"selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "em",
						"yUnit": "em",
						"zUnit": "PX"
					}
				}, {
					"id": "a-11-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 700,
						"target": {
							"selector": ".fade-up",
							"selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683233199926
		},
		"a-12": {
			"id": "a-12",
			"title": "Fade Up [CLIENTS]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-12-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-12-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
						},
						"xValue": 0,
						"yValue": 5,
						"xUnit": "em",
						"yUnit": "em",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-12-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outSine",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "em",
						"yUnit": "em",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outSine",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683233199926
		},
		"a-14": {
			"id": "a-14",
			"title": "Header Menu [CLOSE]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-14-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"xValue": 0,
						"yValue": -0.125,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-14-n-13",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"globalSwatchId": "7ef5d505",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 1
					}
				}, {
					"id": "a-14-n-12",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"globalSwatchId": "7ef5d505",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 1
					}
				}, {
					"id": "a-14-n-10",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu_link_text",
							"selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7"]
						},
						"globalSwatchId": "7ef5d505",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 1
					}
				}, {
					"id": "a-14-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"xValue": 0,
						"yValue": 0.125,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-14-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"zValue": -45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-14-n-5",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"zValue": 45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-14-n-7",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_overlay",
							"selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
						},
						"heightValue": 100,
						"widthUnit": "PX",
						"heightUnit": "vh",
						"locked": false
					}
				}, {
					"id": "a-14-n-8",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_container",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
						},
						"globalSwatchId": "d2fecc19",
						"rValue": 239,
						"bValue": 227,
						"gValue": 234,
						"aValue": 1
					}
				}, {
					"id": "a-14-n-9",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_logo",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-14-n-11",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu_link",
							"selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c"]
						},
						"globalSwatchId": "",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 0.2
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1626168378054
		},
		"a-15": {
			"id": "a-15",
			"title": "Header Menu [OPEN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-15-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-15-n-5",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_overlay",
							"selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "vh",
						"locked": false
					}
				}, {
					"id": "a-15-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-15-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-15-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-15-n-6",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_container",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
						},
						"globalSwatchId": "",
						"rValue": 0,
						"bValue": 0,
						"gValue": 0,
						"aValue": 0
					}
				}, {
					"id": "a-15-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_logo",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1626168766736
		},
		"a-34": {
			"id": "a-34",
			"title": "Header Menu_White [CLOSE]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-34-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"xValue": 0,
						"yValue": -0.125,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-34-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"globalSwatchId": "7ef5d505",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 1
					}
				}, {
					"id": "a-34-n-3",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"globalSwatchId": "7ef5d505",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 1
					}
				}, {
					"id": "a-34-n-4",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu_link_text",
							"selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7"]
						},
						"globalSwatchId": "7ef5d505",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 1
					}
				}, {
					"id": "a-34-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"xValue": 0,
						"yValue": 0.125,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-34-n-6",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"zValue": -45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-34-n-7",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"zValue": 45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-34-n-8",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_overlay",
							"selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
						},
						"heightValue": 100,
						"widthUnit": "PX",
						"heightUnit": "vh",
						"locked": false
					}
				}, {
					"id": "a-34-n-9",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_container",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
						},
						"globalSwatchId": "d2fecc19",
						"rValue": 239,
						"bValue": 227,
						"gValue": 234,
						"aValue": 1
					}
				}, {
					"id": "a-34-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_logo",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-34-n-11",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu_link",
							"selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c"]
						},
						"globalSwatchId": "",
						"rValue": 11,
						"bValue": 0,
						"gValue": 5,
						"aValue": 0.2
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1626168378054
		},
		"a-35": {
			"id": "a-35",
			"title": "Header Menu_White [OPEN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-35-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-35-n-11",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top.project",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70", "6a282478-1143-7602-c87d-082beca34746"]
						},
						"globalSwatchId": "d2fecc19",
						"rValue": 239,
						"bValue": 227,
						"gValue": 234,
						"aValue": 1
					}
				}, {
					"id": "a-35-n-8",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu_link_text.project",
							"selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7", "8a74cdb9-345a-682e-b576-639d88d77353"]
						},
						"globalSwatchId": "d2fecc19",
						"rValue": 239,
						"bValue": 227,
						"gValue": 234,
						"aValue": 1
					}
				}, {
					"id": "a-35-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_overlay",
							"selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "vh",
						"locked": false
					}
				}, {
					"id": "a-35-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "rem",
						"yUnit": "rem",
						"zUnit": "rem"
					}
				}, {
					"id": "a-35-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-35-n-5",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutQuint",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-top",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-35-n-9",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu_link.projects",
							"selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c", "7ed18b20-afa9-67b0-a0f6-fec9d3d59cbe"]
						},
						"globalSwatchId": "",
						"rValue": 239,
						"bValue": 227,
						"gValue": 234,
						"aValue": 0.2
					}
				}, {
					"id": "a-35-n-10",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".menu-icon_line-bottom.project",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73", "d597a6d8-0a76-ca41-e0bb-cf6c092913f0"]
						},
						"globalSwatchId": "d2fecc19",
						"rValue": 239,
						"bValue": 227,
						"gValue": 234,
						"aValue": 1
					}
				}, {
					"id": "a-35-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_logo",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-35-n-6",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".header_container",
							"selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
						},
						"globalSwatchId": "",
						"rValue": 0,
						"bValue": 0,
						"gValue": 0,
						"aValue": 0
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1626168766736
		},
		"a-33": {
			"id": "a-33",
			"title": "Gradient Animation [PROJECTS]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-33-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"zValue": -78,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"zValue": 72,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-33-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"xValue": -4,
						"yValue": -6,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n-6",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"zValue": -73,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-7",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"zValue": 76,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"xValue": -31,
						"yValue": 4,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-33-n-9",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"zValue": 79,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"xValue": -7,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n-11",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"zValue": -68,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-12",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"xValue": 1,
						"yValue": -1,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-33-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n-14",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-1.is-projects",
							"selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
						},
						"zValue": -78,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-15",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"zValue": 72,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-33-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-shape-2.is-projects",
							"selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683207653903
		},
		"a-28": {
			"id": "a-28",
			"title": "Project marquee [Loop] [Desktop]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-28-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 25000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-marquee_marquee",
							"selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-28-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-marquee_marquee",
							"selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1651457286764
		},
		"a-29": {
			"id": "a-29",
			"title": "Project marquee [Loop] [Mobile]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-29-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 10000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-marquee_marquee",
							"selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-29-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-marquee_marquee",
							"selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1651457286764
		},
		"a-30": {
			"id": "a-30",
			"title": "Gradient Animation [RADIAL] 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-30-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-30-n-3",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-30-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-2",
							"selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-30-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-2",
							"selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
						},
						"xValue": -6,
						"yValue": 10,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": -9,
						"yValue": 7,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-7",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 10,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-30-n-8",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"zValue": 90,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-30-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-2",
							"selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
						},
						"xValue": 10,
						"yValue": -14,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 2,
						"yValue": -9,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-11",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 6,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-30-n-12",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"zValue": 45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-30-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-2",
							"selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-14",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-15",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-30-n-16",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-shape-1",
							"selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1665137535236
		},
		"a-32": {
			"id": "a-32",
			"title": "Scrolling",
			"continuousParameterGroups": [{
				"id": "a-32-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-32-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".list",
								"selectorGuids": ["bbfbc0a1-be26-c9a2-538b-9dddb728a6df"]
							},
							"xValue": 0,
							"xUnit": "rem",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-32-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".list",
								"selectorGuids": ["bbfbc0a1-be26-c9a2-538b-9dddb728a6df"]
							},
							"xValue": -1,
							"xUnit": "rem",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1622340751326
		},
		"a-36": {
			"id": "a-36",
			"title": "Ft Project [IN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-36-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".ft-line",
							"selectorGuids": ["dfda3c59-2db7-bb65-4f41-2b7b45d633c9"]
						},
						"xValue": 0,
						"locked": false
					}
				}, {
					"id": "a-36-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".featured_category.text-size-small",
							"selectorGuids": ["71821199-8825-240f-c8e6-c62168492d43", "0b8efd6c-896d-28fc-326b-97a29b219bbe"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-36-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".featured_client.heading-style-h6",
							"selectorGuids": ["41ec7d51-8d2b-1e82-e631-4e360726aee7", "5fdd147c-90dd-c434-1925-5d347bc5afb2"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-36-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".featured_name.heading-style-h2",
							"selectorGuids": ["ab2f1319-321b-85ca-5500-2ea298193add", "5bdfa2f7-c115-9c93-edf4-b385123eb85e"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-36-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outQuint",
						"duration": 1400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".ft-line",
							"selectorGuids": ["dfda3c59-2db7-bb65-4f41-2b7b45d633c9"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-36-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outCubic",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".featured_client.heading-style-h6",
							"selectorGuids": ["41ec7d51-8d2b-1e82-e631-4e360726aee7", "5fdd147c-90dd-c434-1925-5d347bc5afb2"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-36-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outCubic",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".featured_name.heading-style-h2",
							"selectorGuids": ["ab2f1319-321b-85ca-5500-2ea298193add", "5bdfa2f7-c115-9c93-edf4-b385123eb85e"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-36-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outCubic",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".featured_category.text-size-small",
							"selectorGuids": ["71821199-8825-240f-c8e6-c62168492d43", "0b8efd6c-896d-28fc-326b-97a29b219bbe"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1685518185051
		},
		"a-37": {
			"id": "a-37",
			"title": "Services Parallax",
			"continuousParameterGroups": [{
				"id": "a-37-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-37-n",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-20",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
							},
							"xValue": 1.1,
							"yValue": 1.1,
							"locked": true
						}
					}, {
						"id": "a-37-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-20",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
							},
							"yValue": -10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-37-n-2",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-20",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
							},
							"xValue": 1.1,
							"yValue": 1.1,
							"locked": true
						}
					}, {
						"id": "a-37-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-20",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1685520108543
		},
		"a-38": {
			"id": "a-38",
			"title": "Studio Slide Up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-38-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".heading-style-display",
							"selectorGuids": ["e234f6e0-20ab-df40-067a-922710bdc5eb"]
						},
						"yValue": 105,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-38-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-38-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".studio_content",
							"selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-38-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".studio_content",
							"selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-38-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 200,
						"easing": "ease",
						"duration": 2000,
						"target": {
							"id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-38-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "outQuart",
						"duration": 1400,
						"target": {
							"selector": ".heading-style-display",
							"selectorGuids": ["e234f6e0-20ab-df40-067a-922710bdc5eb"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-38-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1000,
						"easing": "outCirc",
						"duration": 1000,
						"target": {
							"selector": ".studio_content",
							"selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-38-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1000,
						"easing": "ease",
						"duration": 2000,
						"target": {
							"selector": ".studio_content",
							"selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1685521087228
		},
		"a-39": {
			"id": "a-39",
			"title": "Studio Parallax",
			"continuousParameterGroups": [{
				"id": "a-39-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-39-n",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-16",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
							},
							"xValue": 1.1,
							"yValue": 1.1,
							"locked": true
						}
					}, {
						"id": "a-39-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-16",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
							},
							"yValue": -10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-39-n-2",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-16",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
							},
							"xValue": 1.1,
							"yValue": 1.1,
							"locked": true
						}
					}, {
						"id": "a-39-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image.radius-16",
								"selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1685522102857
		},
		"a-40": {
			"id": "a-40",
			"title": "Header Slide Up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-40-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec"
						},
						"yValue": 105,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-40-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1400,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1685522542435
		},
		"a-41": {
			"id": "a-41",
			"title": "Service Item",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-41-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service_line",
							"selectorGuids": ["39521ea0-e265-33a4-35f5-dcf613151d43"]
						},
						"xValue": 0,
						"locked": false
					}
				}, {
					"id": "a-41-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".si_wrapper",
							"selectorGuids": ["2d932d05-bedc-d287-daf8-d0f98d177ed1"]
						},
						"yValue": 200,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-41-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outQuint",
						"duration": 1400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service_line",
							"selectorGuids": ["39521ea0-e265-33a4-35f5-dcf613151d43"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": false
					}
				}, {
					"id": "a-41-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outCubic",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".si_wrapper",
							"selectorGuids": ["2d932d05-bedc-d287-daf8-d0f98d177ed1"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1685523004283
		},
		"a-42": {
			"id": "a-42",
			"title": "Project Page Load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-42-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b0|e85fcc1d-577f-c69f-c838-3955b102efa5"
						},
						"yValue": 105,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-42-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b0|b961cd08-52b7-86f4-c1df-fa1ebfa1b250"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-42-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b0|732b6be9-2f0e-becd-855d-67eabe634b9a"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-42-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15b0|b961cd08-52b7-86f4-c1df-fa1ebfa1b250"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-42-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15b0|e85fcc1d-577f-c69f-c838-3955b102efa5"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-42-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1000,
						"easing": "outCirc",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b0|732b6be9-2f0e-becd-855d-67eabe634b9a"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1685523750532
		},
		"a-50": {
			"id": "a-50",
			"title": "Filters 2 sort dropdown [Close]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-50-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-50-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-50-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {},
						"yValue": 3,
						"xUnit": "PX",
						"yUnit": "rem",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1626161607847
		},
		"a-46": {
			"id": "a-46",
			"title": "Filter 2 toggle button [Off]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-46-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {},
						"xValue": 0,
						"xUnit": "rem",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-46-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {},
						"globalSwatchId": "",
						"rValue": 198,
						"bValue": 198,
						"gValue": 198,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1638537122270
		},
		"a-48": {
			"id": "a-48",
			"title": "Filters 2 modal [Open] [Tablet]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-48-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": 120,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-48-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuad",
						"duration": 500,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1646959718287
		},
		"a-47": {
			"id": "a-47",
			"title": "Filters 2 modal [Close] [Tablet]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-47-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuad",
						"duration": 500,
						"target": {},
						"yValue": 120,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1646959718287
		},
		"a-45": {
			"id": "a-45",
			"title": "Filter 2 toggle button [On]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-45-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {},
						"xValue": 1,
						"xUnit": "rem",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-45-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {},
						"globalSwatchId": "dccb7db6",
						"rValue": 0,
						"bValue": 0,
						"gValue": 0,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1638537122270
		},
		"a-49": {
			"id": "a-49",
			"title": "Filters 2 sort dropdown [Open]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-49-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": 3,
						"xUnit": "PX",
						"yUnit": "rem",
						"zUnit": "PX"
					}
				}, {
					"id": "a-49-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-49-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-49-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "rem",
						"zUnit": "PX"
					}
				}, {
					"id": "a-49-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 200,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1626161607847
		},
		"a-57": {
			"id": "a-57",
			"title": "Work Gradient",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-57-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-57-n-3",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-57-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-2",
							"selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-57-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-2",
							"selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
						},
						"xValue": -6,
						"yValue": 10,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": -9,
						"yValue": 7,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-7",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 10,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-57-n-8",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"zValue": 90,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-57-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-2",
							"selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
						},
						"xValue": 10,
						"yValue": -14,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 2,
						"yValue": -9,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-11",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 6,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-57-n-12",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"zValue": 45,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-57-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-2",
							"selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-14",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-57-n-15",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-57-n-16",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".work-shapes-1",
							"selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1665137535236
		},
		"a-58": {
			"id": "a-58",
			"title": "Work Grid",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-58-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-58-n-5",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
						},
						"xValue": 0,
						"yValue": 5,
						"xUnit": "deg",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-58-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-58-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuart",
						"duration": 1200,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-58-n-6",
					"actionTypeId": "TRANSFORM_SKEW",
					"config": {
						"delay": 0,
						"easing": "inOutQuart",
						"duration": 1200,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "deg",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-58-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "inOutQuart",
						"duration": 1200,
						"target": {
							"useEventTarget": true,
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1685627490451
		},
		"a-59": {
			"id": "a-59",
			"title": "Contact Page Load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-59-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
						},
						"yValue": 50,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-21",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|cb2c5d14-49bb-25f5-def1-b8c539429dc9"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-19",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|182dfed7-cc10-fd19-6f8d-c103263c7725"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-17",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|780020fa-1ade-f99d-bc6c-25d020158dc1"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-15",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|5c5dd414-5310-069b-d87b-884fb76edf4d"
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-59-n-13",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|a8296101-f5be-d9b4-b845-5a6a897e2b38"
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-59-n-11",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|2f45e20d-b739-a10f-342c-1d8394a74b5b"
						},
						"yValue": 150,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|075545f0-e48b-1949-8279-20169f4b8d40"
						},
						"yValue": 105,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|2df42a85-0274-06a1-2caa-21263af942a5"
						},
						"yValue": 105,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-59-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuad",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-59-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 400,
						"easing": "outCirc",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|2df42a85-0274-06a1-2caa-21263af942a5"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 600,
						"easing": "outCirc",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|075545f0-e48b-1949-8279-20169f4b8d40"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 800,
						"easing": "outCirc",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|2f45e20d-b739-a10f-342c-1d8394a74b5b"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-59-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1000,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-59-n-14",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|a8296101-f5be-d9b4-b845-5a6a897e2b38"
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-59-n-22",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|cb2c5d14-49bb-25f5-def1-b8c539429dc9"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-59-n-18",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|780020fa-1ade-f99d-bc6c-25d020158dc1"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-59-n-16",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|5c5dd414-5310-069b-d87b-884fb76edf4d"
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-59-n-20",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15ae|182dfed7-cc10-fd19-6f8d-c103263c7725"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1686568176329
		},
		"a-60": {
			"id": "a-60",
			"title": "Work Page Load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-60-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|5079f2f0-8656-ce1c-3497-05ea9dc1e952"
						},
						"yValue": 105,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-60-n-9",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-60-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
						},
						"yValue": 200,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-60-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|13b13d25-91e1-dace-fbd8-10b8247f13b7"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-60-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|b8351c1d-e232-ce31-b5e2-c07b9c812f77"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-60-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|5079f2f0-8656-ce1c-3497-05ea9dc1e952"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-60-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 200,
						"easing": "outQuad",
						"duration": 1500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-60-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 200,
						"easing": "ease",
						"duration": 500,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-60-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 400,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|b8351c1d-e232-ce31-b5e2-c07b9c812f77"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-60-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 2000,
						"target": {
							"id": "64d3dd9edfb41666c35b15b6|13b13d25-91e1-dace-fbd8-10b8247f13b7"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1686573157642
		},
		"slideInBottom": {
			"id": "slideInBottom",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}]
			}]
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});