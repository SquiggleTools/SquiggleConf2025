/*! For license information please see now.js.LICENSE.txt */ (() => {
	var j = {
			965: function (i, s, c) {
				var q, b, f, v, g;
				(f = function M(L) {
					var r = this,
						e = {},
						m = M;
					(m.getNumberOfInstance = function () {
						return m._numberOfInstance;
					}),
						(r.enable = function () {
							return (
								e.listenCodeCharSequence(),
								e.listenCodeGestureSequence(),
								e.debug && e.debug("Listener enabled for all."),
								r
							);
						}),
						(r.enableKeyboardKeys = function () {
							return (
								e.listenCodeCharSequence(),
								e.debug && e.debug("Listener enabled for Keyboard Keys."),
								r
							);
						}),
						(r.enableTouchGesture = function () {
							return (
								e.listenCodeGestureSequence(),
								e.debug && e.debug("Listener enabled for Touch Gesture."),
								r
							);
						}),
						(r.disable = function () {
							return (
								e.stopCodeCharSequence(),
								e.stopCodeGestureSequence(),
								e.debug && e.debug("Listener disabled for all."),
								r
							);
						}),
						(r.disableKeyboardKeys = function () {
							return (
								e.stopCodeCharSequence(),
								e.debug && e.debug("Listener disabled for Keyboard Keys."),
								r
							);
						}),
						(r.disableTouchGesture = function () {
							return (
								e.stopCodeGestureSequence(),
								e.debug && e.debug("Listener disabled for Touch Gesture."),
								r
							);
						}),
						(r.setListener = function (n) {
							return (
								e.stopCodeCharSequence(),
								e.stopCodeGestureSequence(),
								(e.listener = n || document),
								e.listenCodeCharSequence(),
								e.listenCodeGestureSequence(),
								e.debug && e.debug("Listener changed.", n),
								r
							);
						}),
						(r.setCallback = function (n) {
							return (
								(e.afterCodeSequenceCallback =
									(typeof n == "function" && n) || e.defaultCallback),
								e.debug && e.debug("Callback changed.", n),
								r
							);
						}),
						(r.setOptions = function (n) {
							return e.initOptions(n), r;
						}),
						(e.keptLastCodeChar = function () {
							e.input.length > e.konamiCodeChar.length &&
								(e.input = e.input.substr(
									e.input.length - e.konamiCodeChar.length,
								));
						}),
						(e.defaultCallback = function () {
							e.debug &&
								e.debug(
									"Konami Code Sequence Entered. There is no action defined.",
								);
						}),
						(e.checkIfCodeCharIsValid = function () {
							e.input === e.konamiCodeChar && e.afterCodeSequenceCallback(r);
						}),
						(e.codeSequenceEventKeyDown = function (n) {
							(e.input += n.keyCode),
								e.keptLastCodeChar(),
								e.checkIfCodeCharIsValid();
						}),
						(e.codeSequenceEventTouchMove = function (n) {
							var d;
							n.touches.length === 1 &&
								e.capture === !0 &&
								((d = n.touches[0]),
								(e.stopX = d.pageX),
								(e.stopY = d.pageY),
								(e.tap = !1),
								(e.capture = !1),
								e.checkIfCodeGestureIsValid());
						}),
						(e.codeSequenceEventTouchEnd = function () {
							e.tap === !0 && e.checkIfCodeGestureIsValid();
						}),
						(e.codeSequenceEventTouchStart = function (n) {
							(e.startX = n.changedTouches[0].pageX),
								(e.startY = n.changedTouches[0].pageY),
								(e.tap = !0),
								(e.capture = !0);
						}),
						(e.stopCodeCharSequence = function () {
							e.listener.removeEventListener(
								"keydown",
								e.codeSequenceEventKeyDown,
							);
						}),
						(e.stopCodeGestureSequence = function () {
							e.listener.removeEventListener(
								"touchstart",
								e.codeSequenceEventTouchStart,
							),
								e.listener.removeEventListener(
									"touchmove",
									e.codeSequenceEventTouchMove,
								),
								e.listener.removeEventListener(
									"touchend",
									e.codeSequenceEventTouchEnd,
								);
						}),
						(e.listenCodeCharSequence = function () {
							e.stopCodeCharSequence(),
								e.listener.addEventListener(
									"keydown",
									e.codeSequenceEventKeyDown,
								);
						}),
						(e.listenCodeGestureSequence = function () {
							(e.originalCodeGesture = e.konamiCodeGesture),
								e.stopCodeGestureSequence(),
								e.listener.addEventListener(
									"touchstart",
									e.codeSequenceEventTouchStart,
								),
								e.listener.addEventListener(
									"touchmove",
									e.codeSequenceEventTouchMove,
								),
								e.listener.addEventListener(
									"touchend",
									e.codeSequenceEventTouchEnd,
									!1,
								);
						}),
						(e.checkIfCodeGestureIsValid = function () {
							var n = Math.abs(e.startX - e.stopX),
								d = Math.abs(e.startY - e.stopY),
								y = e.startX - e.stopX < 0 ? "rt" : "lt",
								T = e.startY - e.stopY < 0 ? "dn" : "up",
								o = n > d ? y : T;
							(o = e.tap === !0 ? "tp" : o) === e.konamiCodeGesture.substr(0, 2)
								? (e.konamiCodeGesture = e.konamiCodeGesture.substr(
										2,
										e.konamiCodeGesture.length - 2,
									))
								: (e.konamiCodeGesture = e.originalCodeGesture),
								e.konamiCodeGesture.length === 0 &&
									((e.konamiCodeGesture = e.originalCodeGesture),
									e.afterCodeSequenceCallback(r));
						}),
						(e.checkDebugMode = function (n) {
							n && n.debug === !0
								? ((e.debug = function (d, y) {
										y !== void 0 ? console.log(d, y) : console.log(d);
									}),
									e.debug && e.debug("Debug Mode On."))
								: (e.debug = !1);
						}),
						(e.initOptions = function (n) {
							e.checkDebugMode(n),
								(e.listener = (n && n.listener) || document),
								(e.afterCodeSequenceCallback =
									(typeof n == "function" && n) ||
									(n && typeof n.callback == "function" && n.callback) ||
									e.defaultCallback);
						}),
						(e.init = function () {
							(e.input = ""),
								(e.konamiCodeChar = "38384040373937396665"),
								(e.konamiCodeGesture = "upupdndnltrtltrttptp"),
								(e.startX = 0),
								(e.startY = 0),
								(e.stopX = 0),
								(e.stopY = 0),
								(e.tap = !1),
								(e.capture = !1),
								(m._numberOfInstance = m._numberOfInstance
									? m._numberOfInstance + 1
									: 1),
								e.initOptions(L),
								e.listenCodeCharSequence(),
								e.listenCodeGestureSequence();
						}),
						e.init();
				}),
					(v = (b = this).KonamiCode),
					((g = b.KonamiCode = f).noConflict = function () {
						return (b.KonamiCode = v), g;
					}),
					(q = function () {
						return f;
					}.call(s, c, s, i)) === void 0 || (i.exports = q),
					i.exports && (i.exports = f);
			},
		},
		w = {};
	function h(i) {
		var s = w[i];
		if (s !== void 0) {
			return s.exports;
		}
		var c = (w[i] = { exports: {} });
		return j[i].call(c.exports, c, c.exports, h), c.exports;
	}
	(h.n = (i) => {
		var s = i && i.__esModule ? () => i.default : () => i;
		return h.d(s, { a: s }), s;
	}),
		(h.d = (i, s) => {
			for (var c in s) {
				h.o(s, c) &&
					!h.o(i, c) &&
					Object.defineProperty(i, c, { enumerable: !0, get: s[c] });
			}
		}),
		(h.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s)),
		(() => {
			const i = (o) =>
					typeof o == "number"
						? o
						: Math.floor(Math.random() * (o.max - o.min + 1)) + o.min,
				s = (o) => (typeof o == "function" ? o() : o),
				c = (o) => {
					const t = o.slice();
					for (let u = t.length - 1; u > 0; u -= 1) {
						const C = Math.floor(Math.random() * (u + 1)),
							x = t[u];
						(t[u] = t[C]), (t[C] = x);
					}
					return t;
				};
			class q {
				#o = 1;
				#n;
				#e;
				#t;
				element;
				constructor(t) {
					var u;
					(this.element = document.createElement("button")),
						(this.element.className = t.className),
						(this.element.textContent = (u = t.emojis)[
							Math.floor(Math.random() * u.length)
						]),
						this.element.setAttribute("role", "img"),
						(this.element.style.fontSize = `${i(t.physics.fontSize)}px`),
						(this.element.style.transition = "16ms opacity, 16ms transform"),
						(this.#n = t.physics),
						(this.#e = {
							rotation: i(t.physics.rotation),
							x: t.position.x,
							y: t.position.y,
						}),
						(this.#t = {
							rotation: i(t.physics.initialVelocities.rotation),
							x: i(t.physics.initialVelocities.x),
							y: i(t.physics.initialVelocities.y),
						}),
						this.updateElement(),
						t.process?.(this.element),
						t.container.appendChild(this.element);
				}
				updateElement() {
					(this.element.style.opacity = `${this.#o}`),
						(this.element.style.transform = `translate(${this.#e.x}px, ${this.#e.y}px) rotate(${Math.round(this.#e.rotation)}deg)`);
				}
				act(t) {
					if (
						this.#n.opacityDecay &&
						((this.#o -= t / (this.#n.opacityDecay * this.#n.framerate)),
						this.#o <= 0)
					) {
						return !0;
					}
					(this.#t.rotation *= this.#n.rotationDeceleration),
						(this.#t.y += this.#n.gravity),
						(this.#e.rotation += this.#t.rotation),
						(this.#e.x += (this.#t.x * t) / this.#n.framerate),
						(this.#e.y += (this.#t.y * t) / this.#n.framerate);
					const u = window.outerHeight || document.documentElement.clientHeight,
						C = window.outerWidth || document.documentElement.clientWidth;
					return !this.#n.preserveOutOfBounds &&
						(this.#e.y - this.element.clientHeight > u + 350 ||
							this.#e.y + this.element.clientHeight < -350 ||
							this.#e.x - this.element.clientWidth > C + 350 ||
							this.#e.x + this.element.clientWidth < -350)
						? !0
						: (this.updateElement(), !1);
				}
				dispose() {
					this.element.parentElement !== null &&
						this.element.parentElement.removeChild(this.element);
				}
				update(t) {
					t.opacity !== void 0 && (this.#o = t.opacity),
						t.velocity !== void 0 &&
							(t.velocity.rotation !== void 0 &&
								(this.#t.rotation = t.velocity.rotation),
							t.velocity.x !== void 0 && (this.#t.x = t.velocity.x),
							t.velocity.y !== void 0 && (this.#t.y = t.velocity.y));
				}
				get opacity() {
					return this.#o;
				}
				get position() {
					return this.#e;
				}
				get velocity() {
					return this.#t;
				}
			}
			const b = [
					"😁",
					"😂",
					"🤣",
					"😃",
					"😆",
					"😍",
					"🤩",
					"😎",
					"🤗",
					"🥳",
					"🤖",
					"😻",
					"😹",
					"🐱",
					"🐶",
					"🙈",
					"🙉",
					"🙊",
					"🏄",
					"💪",
					"👌",
					"👋",
					"🙌",
					"🫶",
					"💝",
					"💖",
					"💗",
					"🧡",
					"💛",
					"💚",
					"💙",
					"💜",
					"❤️‍🔥",
					"🔥",
					"🚀",
					"⛄",
					"🦩",
					"🍍",
					"💐",
					"🦾",
					"✨",
					"🎉",
					"💯",
				],
				f = "data-emoji-blast-events-initialized",
				v = new WeakMap(),
				g = new Set(),
				M = "emoji-styles",
				L = (() => {
					let o;
					return () => (
						o?.parentNode === document.body ||
							((o = document.createElement("div")), document.body.prepend(o)),
						o
					);
				})(),
				r = () => Math.floor(14 * Math.random()) + 14,
				e = {
					onClick({ actor: o }) {
						o.update({ opacity: 1, velocity: { y: o.velocity.y / 2 - 15 } });
					},
				},
				m = {
					fontSize: { max: 28, min: 14 },
					framerate: 60,
					gravity: 0.35,
					initialVelocities: {
						rotation: { max: 7, min: -7 },
						x: { max: 7, min: -7 },
						y: { max: -7, min: -21 },
					},
					preserveOutOfBounds: !1,
					rotation: { max: 45, min: -45 },
					rotationDeceleration: 0.98,
				},
				n = () => ({
					x: Math.random() * innerWidth,
					y: Math.random() * innerHeight,
				}),
				d = () => 700 + Math.floor(1401 * Math.random());
			var y = h(965),
				T = h.n(y);
			(() => {
				let o;
				new (T())(() => {
					o
						? (o.cancel(), (o = void 0))
						: (o = ((t = {}) => {
								const { interval: u = d, scheduler: C = setTimeout } = t;
								let x = !1;
								const I = () => {
										((E = {}) => {
											const {
													className: V = M,
													container: N = L,
													emojiCount: A = r,
													emojis: W = b,
													events: _ = e,
													position: $ = n,
													process: z,
													tick: H,
													uniqueness: B = 1 / 0,
												} = E,
												D = s(N);
											((a) => {
												if (g.has(a)) {
													return;
												}
												g.add(a);
												const l = document.createElement("style");
												l.setAttribute("type", "text/css"),
													l.appendChild(
														document.createTextNode(`
		.${a} {
			background: none;
			border: none;
			cursor: default;
			height: 2em;
			margin-left: -1em;
			margin-top: -1em;
			position: fixed;
			user-select: none;
			width: 2em;
			z-index: 2147483647;
		}
	`),
													),
													document.head.appendChild(l);
											})(V);
											const F = {
													...m,
													...E.physics,
													initialVelocities: {
														...m.initialVelocities,
														...(E.physics !== void 0
															? E.physics.initialVelocities
															: {}),
													},
												},
												P = {
													className: V,
													container: D,
													emojis: c(s(W)).slice(0, s(B)),
													physics: F,
													position: s($),
													process: z,
												},
												J = s(A),
												O = [];
											for (let a = 0; a < J; a += 1) {
												O.push(new q(P));
											}
											(function (a, l, G) {
												for (const p of a) {
													v.set(p.element, p);
												}
												l.hasAttribute(f) ||
													(l.setAttribute(f, "true"),
													l.addEventListener("click", (p) => {
														const S = p.target && v.get(p.target);
														S && G.onClick({ actor: S, event: p });
													}));
											})(O, D, _),
												(function (a, l) {
													let G = performance.now(),
														p = !1;
													l?.(a);
													const S = (X) => {
														if ((l?.(a), a.length === 0)) {
															return;
														}
														const Q = X - G;
														for (let k = 0; k < a.length; k += 1) {
															const Y = a[k];
															Y.act(Q) &&
																(Y.dispose(), a.splice(k, 1), (k -= 1));
														}
														a.length !== 0 &&
															((G = X), requestAnimationFrame(S));
													};
													requestAnimationFrame(S);
												})(O, H);
										})(t);
									},
									K = () => {
										x ||
											(document.visibilityState === "visible" && I(),
											C(K, s(u)));
									};
								return (
									C(K, 0),
									{
										blast: I,
										cancel() {
											x = !0;
										},
									}
								);
							})());
				});
			})();
		})();
})();
