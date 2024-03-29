! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t || self).Lenis = e()
}(this, function() {
	function t(t, e) {
		for (var i = 0; i < e.length; i++) {
			var o = e[i];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, "symbol" == typeof(n = function(t, e) {
				if ("object" != typeof t || null === t) return t;
				var i = t[Symbol.toPrimitive];
				if (void 0 !== i) {
					var o = i.call(t, "string");
					if ("object" != typeof o) return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return String(t)
			}(o.key)) ? n : String(n), o)
		}
		var n
	}

	function e(e, i, o) {
		return i && t(e.prototype, i), o && t(e, o), Object.defineProperty(e, "prototype", {
			writable: !1
		}), e
	}

	function i() {
		return i = Object.assign ? Object.assign.bind() : function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var i = arguments[e];
				for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
			}
			return t
		}, i.apply(this, arguments)
	}

	function o(t, e, i) {
		return Math.max(t, Math.min(e, i))
	}
	var n = /*#__PURE__*/ function() {
			function t() {}
			var e = t.prototype;
			return e.advance = function(t) {
				var e, i, n, s;
				if (this.isRunning) {
					var r = !1;
					if (this.lerp) this.value = (i = this.value, n = this.to, (1 - (s = 1 - Math.exp(-60 * this.lerp * t))) * i + s * n), Math.round(this.value) === this.to && (this.value = this.to, r = !0);
					else {
						this.currentTime += t;
						var l = o(0, this.currentTime / this.duration, 1),
							h = (r = l >= 1) ? 1 : this.easing(l);
						this.value = this.from + (this.to - this.from) * h
					}
					null == (e = this.onUpdate) || e.call(this, this.value, {
						completed: r
					}), r && this.stop()
				}
			}, e.stop = function() {
				this.isRunning = !1
			}, e.fromTo = function(t, e, i) {
				var o = i.lerp,
					n = void 0 === o ? .1 : o,
					s = i.duration,
					r = void 0 === s ? 1 : s,
					l = i.easing,
					h = void 0 === l ? function(t) {
						return t
					} : l,
					a = i.onUpdate;
				this.from = this.value = t, this.to = e, this.lerp = n, this.duration = r, this.easing = h, this.currentTime = 0, this.isRunning = !0, this.onUpdate = a
			}, t
		}(),
		s = /*#__PURE__*/ function() {
			function t(t) {
				var e, i, o = this,
					n = void 0 === t ? {} : t,
					s = n.wrapper,
					r = n.content,
					l = n.autoResize,
					h = void 0 === l || l;
				if (this.resize = function() {
						o.onWrapperResize(), o.onContentResize()
					}, this.onWrapperResize = function() {
						o.wrapper === window ? (o.width = window.innerWidth, o.height = window.innerHeight) : (o.width = o.wrapper.clientWidth, o.height = o.wrapper.clientHeight)
					}, this.onContentResize = function() {
						o.scrollHeight = o.content.scrollHeight, o.scrollWidth = o.content.scrollWidth
					}, this.wrapper = s, this.content = r, h) {
					var a = (e = this.resize, function() {
						var t = arguments,
							o = this;
						clearTimeout(i), i = setTimeout(function() {
							e.apply(o, t)
						}, 250)
					});
					this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(a), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(a), this.contentResizeObserver.observe(this.content)
				}
				this.resize()
			}
			return t.prototype.destroy = function() {
				var t, e;
				null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect()
			}, e(t, [{
				key: "limit",
				get: function() {
					return {
						x: this.scrollWidth - this.width,
						y: this.scrollHeight - this.height
					}
				}
			}]), t
		}(),
		r = /*#__PURE__*/ function() {
			function t() {
				this.events = {}
			}
			var e = t.prototype;
			return e.emit = function(t) {
				for (var e = this.events[t] || [], i = 0, o = e.length; i < o; i++) e[i].apply(e, [].slice.call(arguments, 1))
			}, e.on = function(t, e) {
				var i, o = this;
				return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [e]),
					function() {
						var i;
						o.events[t] = null == (i = o.events[t]) ? void 0 : i.filter(function(t) {
							return e !== t
						})
					}
			}, e.destroy = function() {
				this.events = {}
			}, t
		}(),
		l = /*#__PURE__*/ function() {
			function t(t, e) {
				var i = this,
					n = e.wheelMultiplier,
					s = void 0 === n ? 1 : n,
					l = e.touchMultiplier,
					h = void 0 === l ? 2 : l,
					a = e.normalizeWheel,
					c = void 0 !== a && a;
				this.onTouchStart = function(t) {
					var e = t.targetTouches ? t.targetTouches[0] : t,
						o = e.clientY;
					i.touchStart.x = e.clientX, i.touchStart.y = o, i.lastDelta = {
						x: 0,
						y: 0
					}
				}, this.onTouchMove = function(t) {
					var e = t.targetTouches ? t.targetTouches[0] : t,
						o = e.clientX,
						n = e.clientY,
						s = -(o - i.touchStart.x) * i.touchMultiplier,
						r = -(n - i.touchStart.y) * i.touchMultiplier;
					i.touchStart.x = o, i.touchStart.y = n, i.lastDelta = {
						x: s,
						y: r
					}, i.emitter.emit("scroll", {
						type: "touch",
						deltaX: s,
						deltaY: r,
						event: t
					})
				}, this.onTouchEnd = function(t) {
					i.emitter.emit("scroll", {
						type: "touch",
						inertia: !0,
						deltaX: i.lastDelta.x,
						deltaY: i.lastDelta.y,
						event: t
					})
				}, this.onWheel = function(t) {
					var e = t.deltaX,
						n = t.deltaY;
					i.normalizeWheel && (e = o(-100, e, 100), n = o(-100, n, 100)), i.emitter.emit("scroll", {
						type: "wheel",
						deltaX: e *= i.wheelMultiplier,
						deltaY: n *= i.wheelMultiplier,
						event: t
					})
				}, this.element = t, this.wheelMultiplier = s, this.touchMultiplier = h, this.normalizeWheel = c, this.touchStart = {
					x: null,
					y: null
				}, this.emitter = new r, this.element.addEventListener("wheel", this.onWheel, {
					passive: !1
				}), this.element.addEventListener("touchstart", this.onTouchStart, {
					passive: !1
				}), this.element.addEventListener("touchmove", this.onTouchMove, {
					passive: !1
				}), this.element.addEventListener("touchend", this.onTouchEnd, {
					passive: !1
				})
			}
			var e = t.prototype;
			return e.on = function(t, e) {
				return this.emitter.on(t, e)
			}, e.destroy = function() {
				this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
					passive: !1
				}), this.element.removeEventListener("touchstart", this.onTouchStart, {
					passive: !1
				}), this.element.removeEventListener("touchmove", this.onTouchMove, {
					passive: !1
				}), this.element.removeEventListener("touchend", this.onTouchEnd, {
					passive: !1
				})
			}, t
		}(); /*#__PURE__*/
	return function() {
		function t(t) {
			var e, o, h, a, c = this,
				u = void 0 === t ? {} : t,
				p = u.wrapper,
				d = void 0 === p ? window : p,
				v = u.content,
				m = void 0 === v ? document.documentElement : v,
				f = u.wheelEventsTarget,
				g = void 0 === f ? d : f,
				y = u.smoothWheel,
				S = void 0 === y ? null == (e = smooth) || e : y,
				w = u.smoothTouch,
				b = void 0 !== w && w,
				T = u.syncTouch,
				z = void 0 !== T && T,
				M = u.syncTouchLerp,
				E = void 0 === M ? .1 : M,
				L = u.touchInertiaMultiplier,
				O = void 0 === L ? 35 : L,
				R = u.duration,
				W = u.easing,
				_ = void 0 === W ? function(t) {
					return Math.min(1, 1.001 - Math.pow(2, -10 * t))
				} : W,
				k = u.lerp,
				x = void 0 === k ? R ? null : .1 : k,
				H = u.infinite,
				j = void 0 !== H && H,
				A = u.orientation,
				D = void 0 === A ? null != (o = direction) ? o : "vertical" : A,
				X = u.gestureOrientation,
				Y = void 0 === X ? null != (h = gestureDirection) ? h : "vertical" : X,
				P = u.touchMultiplier,
				C = void 0 === P ? 1 : P,
				U = u.wheelMultiplier,
				I = void 0 === U ? null != (a = mouseMultiplier) ? a : 1 : U,
				V = u.normalizeWheel,
				q = void 0 !== V && V,
				B = u.autoResize,
				F = void 0 === B || B;
			this.onVirtualScroll = function(t) {
				var e = t.type,
					o = t.inertia,
					n = t.deltaX,
					s = t.deltaY,
					r = t.event;
				if (!r.ctrlKey) {
					var l = "touch" === e,
						h = "wheel" === e;
					if (!("vertical" === c.options.gestureOrientation && 0 === s || "horizontal" === c.options.gestureOrientation && 0 === n || l && "vertical" === c.options.gestureOrientation && 0 === c.scroll && !c.options.infinite && s <= 0 || r.composedPath().find(function(t) {
							return (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")) || l && (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-touch")) || h && (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-wheel"))
						})))
						if (c.isStopped || c.isLocked) r.preventDefault();
						else {
							if (c.isSmooth = (c.options.smoothTouch || c.options.syncTouch) && l || c.options.smoothWheel && h, !c.isSmooth) return c.isScrolling = !1, void c.animate.stop();
							r.preventDefault();
							var a = s;
							"both" === c.options.gestureOrientation ? a = Math.abs(s) > Math.abs(n) ? s : n : "horizontal" === c.options.gestureOrientation && (a = n);
							var u = l && c.options.syncTouch,
								p = l && o && Math.abs(a) > 1;
							p && (a = c.velocity * c.options.touchInertiaMultiplier), c.scrollTo(c.targetScroll + a, i({
								programmatic: !1
							}, u && {
								lerp: p ? c.syncTouchLerp : .4
							}))
						}
				}
			}, this.onScroll = function() {
				if (!c.isScrolling) {
					var t = c.animatedScroll;
					c.animatedScroll = c.targetScroll = c.actualScroll, c.velocity = 0, c.direction = Math.sign(c.animatedScroll - t), c.emit()
				}
			}, window.lenisVersion = "1.0.16", d !== document.documentElement && d !== document.body || (d = window), this.options = {
				wrapper: d,
				content: m,
				wheelEventsTarget: g,
				smoothWheel: S,
				smoothTouch: b,
				syncTouch: z,
				syncTouchLerp: E,
				touchInertiaMultiplier: O,
				duration: R,
				easing: _,
				lerp: x,
				infinite: j,
				gestureOrientation: Y,
				orientation: D,
				touchMultiplier: C,
				wheelMultiplier: I,
				normalizeWheel: q,
				autoResize: F
			}, this.dimensions = new s({
				wrapper: d,
				content: m,
				autoResize: F
			}), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = S || b, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new n, this.emitter = new r, this.options.wrapper.addEventListener("scroll", this.onScroll, {
				passive: !1
			}), this.virtualScroll = new l(g, {
				touchMultiplier: C,
				wheelMultiplier: I,
				normalizeWheel: q
			}), this.virtualScroll.on("scroll", this.onVirtualScroll)
		}
		var h = t.prototype;
		return h.destroy = function() {
			this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, {
				passive: !1
			}), this.virtualScroll.destroy(), this.dimensions.destroy(), this.rootElement.classList.remove("lenis"), this.rootElement.classList.remove("lenis-smooth"), this.rootElement.classList.remove("lenis-scrolling"), this.rootElement.classList.remove("lenis-stopped")
		}, h.on = function(t, e) {
			return this.emitter.on(t, e)
		}, h.off = function(t, e) {
			var i;
			this.emitter.events[t] = null == (i = this.emitter.events[t]) ? void 0 : i.filter(function(t) {
				return e !== t
			})
		}, h.setScroll = function(t) {
			this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
		}, h.resize = function() {
			this.dimensions.resize()
		}, h.emit = function() {
			this.emitter.emit("scroll", this)
		}, h.reset = function() {
			this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop()
		}, h.start = function() {
			this.isStopped = !1, this.reset()
		}, h.stop = function() {
			this.isStopped = !0, this.animate.stop(), this.reset()
		}, h.raf = function(t) {
			var e = t - (this.time || t);
			this.time = t, this.animate.advance(.001 * e)
		}, h.scrollTo = function(t, e) {
			var i = this,
				n = void 0 === e ? {} : e,
				s = n.offset,
				r = void 0 === s ? 0 : s,
				l = n.immediate,
				h = void 0 !== l && l,
				a = n.lock,
				c = void 0 !== a && a,
				u = n.duration,
				p = void 0 === u ? this.options.duration : u,
				d = n.easing,
				v = void 0 === d ? this.options.easing : d,
				m = n.lerp,
				f = void 0 === m ? !p && this.options.lerp : m,
				g = n.onComplete,
				y = void 0 === g ? null : g,
				S = n.force,
				w = n.programmatic,
				b = void 0 === w || w;
			if (!this.isStopped || void 0 !== S && S) {
				if (["top", "left", "start"].includes(t)) t = 0;
				else if (["bottom", "right", "end"].includes(t)) t = this.limit;
				else {
					var T, z;
					if ("string" == typeof t ? z = document.querySelector(t) : null != (T = t) && T.nodeType && (z = t), z) {
						if (this.options.wrapper !== window) {
							var M = this.options.wrapper.getBoundingClientRect();
							r -= this.isHorizontal ? M.left : M.top
						}
						var E = z.getBoundingClientRect();
						t = (this.isHorizontal ? E.left : E.top) + this.animatedScroll
					}
				}
				if ("number" == typeof t) {
					if (t += r, t = Math.round(t), this.options.infinite ? b && (this.targetScroll = this.animatedScroll = this.scroll) : t = o(0, t, this.limit), h) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.emit(), void(null == y || y());
					if (!b) {
						if (t === this.targetScroll) return;
						this.targetScroll = t
					}
					this.animate.fromTo(this.animatedScroll, t, {
						duration: p,
						easing: v,
						lerp: f,
						onUpdate: function(t, e) {
							var o = e.completed;
							c && (i.isLocked = !0), i.isScrolling = !0, i.velocity = t - i.animatedScroll, i.direction = Math.sign(i.velocity), i.animatedScroll = t, i.setScroll(i.scroll), b && (i.targetScroll = t), o && (c && (i.isLocked = !1), requestAnimationFrame(function() {
								i.isScrolling = !1
							}), i.velocity = 0, null == y || y()), i.emit()
						}
					})
				}
			}
		}, e(t, [{
			key: "rootElement",
			get: function() {
				return this.options.wrapper === window ? this.options.content : this.options.wrapper
			}
		}, {
			key: "limit",
			get: function() {
				return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
			}
		}, {
			key: "isHorizontal",
			get: function() {
				return "horizontal" === this.options.orientation
			}
		}, {
			key: "actualScroll",
			get: function() {
				return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
			}
		}, {
			key: "scroll",
			get: function() {
				return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
				var t
			}
		}, {
			key: "progress",
			get: function() {
				return 0 === this.limit ? 1 : this.scroll / this.limit
			}
		}, {
			key: "isSmooth",
			get: function() {
				return this.__isSmooth
			},
			set: function(t) {
				this.__isSmooth !== t && (this.rootElement.classList.toggle("lenis-smooth", t), this.__isSmooth = t)
			}
		}, {
			key: "isScrolling",
			get: function() {
				return this.__isScrolling
			},
			set: function(t) {
				this.__isScrolling !== t && (this.rootElement.classList.toggle("lenis-scrolling", t), this.__isScrolling = t)
			}
		}, {
			key: "isStopped",
			get: function() {
				return this.__isStopped
			},
			set: function(t) {
				this.__isStopped !== t && (this.rootElement.classList.toggle("lenis-stopped", t), this.__isStopped = t)
			}
		}]), t
	}()
});