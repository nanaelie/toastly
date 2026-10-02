"use client";
import { useEffect as e, useState as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/Toasts.tsx
function a({ toasts: e, onDismiss: t }) {
	return /* @__PURE__ */ r("div", {
		className: "fixed bottom-4 left-4 z-9999 min-w-62 max-w-xs space-y-2 text-gray-900 dark:text-white",
		children: e.map((e) => /* @__PURE__ */ i("div", {
			className: `relative flex w-full items-start gap-3 rounded-lg border p-3 py-3 shadow-lg backdrop-blur-2xl
                        ${e.variant === "info" ? "border-gray-400 bg-white dark:border-slate-700 dark:bg-slate-900/20" : e.variant === "error" ? "border-red-600/50 bg-red-600/10" : e.variant === "warning" ? "border-yellow-600/50 bg-yellow-600/10" : "border-gray-500/50 bg-white-600/10"}
                    `,
			children: [
				/* @__PURE__ */ i("span", {
					className: "mt-0.5 block h-5 w-5 shrink-0",
					children: [
						e.variant === "error" && /* @__PURE__ */ r("svg", {
							viewBox: "0 0 16 16",
							xmlns: "http://www.w3.org/2000/svg",
							fill: "currentColor",
							className: "h-full w-full",
							children: /* @__PURE__ */ r("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"
							})
						}),
						e.variant === "info" && /* @__PURE__ */ i("svg", {
							viewBox: "0 0 24 24",
							fill: "currentColor",
							xmlns: "http://www.w3.org/2000/svg",
							className: "h-full w-full",
							children: [
								/* @__PURE__ */ r("path", { d: "M12 16.75C11.8019 16.7474 11.6126 16.6676 11.4725 16.5275C11.3324 16.3874 11.2526 16.1981 11.25 16V11C11.25 10.8011 11.329 10.6103 11.4697 10.4697C11.6103 10.329 11.8011 10.25 12 10.25C12.1989 10.25 12.3897 10.329 12.5303 10.4697C12.671 10.6103 12.75 10.8011 12.75 11V16C12.7474 16.1981 12.6676 16.3874 12.5275 16.5275C12.3874 16.6676 12.1981 16.7474 12 16.75Z" }),
								/* @__PURE__ */ r("path", { d: "M12 9.25C11.8019 9.24741 11.6126 9.16756 11.4725 9.02747C11.3324 8.88737 11.2526 8.69811 11.25 8.5V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V8.5C12.7474 8.69811 12.6676 8.88737 12.5275 9.02747C12.3874 9.16756 12.1981 9.24741 12 9.25Z" }),
								/* @__PURE__ */ r("path", { d: "M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z" })
							]
						}),
						e.variant === "warning" && /* @__PURE__ */ r("svg", {
							viewBox: "-5.5 0 32 32",
							xmlns: "http://www.w3.org/2000/svg",
							fill: "currentColor",
							className: "h-full w-full",
							children: /* @__PURE__ */ r("path", { d: "M10.16 25.92c-2.6 0-8.72-0.24-9.88-2.24-1.28-2.28 2.040-8.24 3.080-10.040 1.040-1.76 4.64-7.56 7.12-7.56 2.8 0 7.24 7.48 8.56 10.12 1.92 3.84 2.48 6.4 1.56 7.6-1.52 2.040-8.96 2.12-10.44 2.12zM10.48 7.72c-0.72 0-3.080 2.36-5.64 6.76-2.76 4.68-3.48 7.72-3.080 8.4 0.32 0.56 3.2 1.4 8.4 1.4 5.44 0 8.64-0.88 9.080-1.48 0.28-0.36 0.040-2.28-1.72-5.84-2.64-5.28-6.12-9.24-7.040-9.24zM10.52 19.2c-0.48 0-0.84-0.36-0.84-0.84v-6.36c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v6.32c0 0.48-0.4 0.88-0.84 0.88zM11.36 21.36c0 0.464-0.376 0.84-0.84 0.84s-0.84-0.376-0.84-0.84c0-0.464 0.376-0.84 0.84-0.84s0.84 0.376 0.84 0.84z" })
						}),
						e.variant === "success" && /* @__PURE__ */ r("svg", {
							fill: "currentColor",
							viewBox: "0 0 24 24",
							xmlns: "http://www.w3.org/2000/svg",
							children: /* @__PURE__ */ r("path", {
								fillRule: "evenodd",
								d: "M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"
							})
						}),
						e.loading && /* @__PURE__ */ r("svg", {
							className: "animate-spin",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "currentColor",
							children: /* @__PURE__ */ i("g", { children: [
								/* @__PURE__ */ r("circle", {
									cx: "12",
									cy: "3",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_7Z73",
										begin: "0;spinner_tKsu.end-0.5s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "16.50",
									cy: "4.21",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_Wd87",
										begin: "spinner_7Z73.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "7.50",
									cy: "4.21",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_tKsu",
										begin: "spinner_9Qlc.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "19.79",
									cy: "7.50",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_lMMO",
										begin: "spinner_Wd87.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "4.21",
									cy: "7.50",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_9Qlc",
										begin: "spinner_Khxv.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "21.00",
									cy: "12.00",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_5L9t",
										begin: "spinner_lMMO.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "3.00",
									cy: "12.00",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_Khxv",
										begin: "spinner_ld6P.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "19.79",
									cy: "16.50",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_BfTD",
										begin: "spinner_5L9t.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "4.21",
									cy: "16.50",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_ld6P",
										begin: "spinner_XyBs.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "16.50",
									cy: "19.79",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_7gAK",
										begin: "spinner_BfTD.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "7.50",
									cy: "19.79",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_XyBs",
										begin: "spinner_HiSl.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("circle", {
									cx: "12",
									cy: "21",
									r: "1",
									children: /* @__PURE__ */ r("animate", {
										id: "spinner_HiSl",
										begin: "spinner_7gAK.begin+0.1s",
										attributeName: "r",
										calcMode: "spline",
										dur: "0.6s",
										values: "1;2;1",
										keySplines: ".27,.42,.37,.99;.53,0,.61,.73"
									})
								}),
								/* @__PURE__ */ r("animateTransform", {
									attributeName: "transform",
									type: "rotate",
									dur: "6s",
									values: "360 12 12;0 12 12",
									repeatCount: "indefinite"
								})
							] })
						})
					]
				}),
				/* @__PURE__ */ r("p", {
					className: "flex-1 text-sm pr-5",
					children: e.message
				}),
				e.allowDismiss && /* @__PURE__ */ r("button", {
					onClick: () => {
						t?.(e.id);
					},
					className: "absolute right-1.5 top-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
					"aria-label": "Dismiss",
					children: "×"
				})
			]
		}, e.id))
	});
}
//#endregion
//#region src/components/AlertModal.tsx
function o({ open: t, onClose: a, title: o, message: s }) {
	return e(() => {
		if (!t) return;
		let e = (e) => {
			e.key === "Escape" && a?.();
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [t, a]), e(() => {
		if (!t) return;
		let e = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = e;
		};
	}, [t]), t ? /* @__PURE__ */ i("div", {
		className: "fixed inset-0 z-9999",
		children: [/* @__PURE__ */ r("div", {
			onClick: a,
			className: "absolute inset-0 bg-black/40 backdrop-blur-[2.5px]"
		}), /* @__PURE__ */ r("div", {
			className: "pointer-events-none relative flex h-full w-full items-center justify-center",
			children: /* @__PURE__ */ r("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": o ? "alert-modal-title" : void 0,
				className: "pointer-events-auto shadow-xl inset-shadow-[20px] inset-shadow-gray-900 relative w-full max-w-66 md:max-w-[18rem] animate-in fade-in",
				children: /* @__PURE__ */ i("div", {
					className: "relative flex flex-col w-full items-start gap-3 rounded-lg border p-3 py-3 shadow-lg backdrop-blur-2xl border-gray-400 bg-white dark:border-slate-700 dark:bg-slate-900/20",
					children: [
						o && /* @__PURE__ */ r("div", {
							className: "relative flex w-full flex-col items-center justify-center gap-0.5 rounded-md bg-stone-100/70 px-3 py-1 sm:px-4 dark:bg-[#1c1a18]",
							children: /* @__PURE__ */ r("span", {
								id: "alert-modal-title",
								className: "font-semibold uppercase text-stone-500 dark:text-stone-400",
								children: o
							})
						}),
						/* @__PURE__ */ r("div", {
							className: "flex min-w-0 flex-1 items-center gap-3 px-3 py-2 sm:px-4",
							children: /* @__PURE__ */ r("div", {
								className: "min-w-0 flex-1 space-y-2 text-center",
								children: s ? /* @__PURE__ */ r(n, { children: s }) : /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r("p", {
									className: "text-black dark:text-white",
									children: "Are you sure you want to continue this action?"
								}), /* @__PURE__ */ r("p", {
									className: "text-black text-xs dark:text-white",
									children: "This action is not reversible"
								})] })
							})
						}),
						/* @__PURE__ */ r("div", {
							className: "flex w-full justify-center gap-2",
							children: /* @__PURE__ */ r("button", {
								type: "button",
								onClick: () => {
									a?.();
								},
								"aria-label": "Continue this action",
								className: "group min-w-28.25 inline-flex flex-none items-center justify-center gap-1.5 rounded-lg bg-black px-5 py-2 font-display text-[12.5px] font-medium tracking-wide text-stone-50 transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white",
								children: /* @__PURE__ */ r("span", { children: "Ok" })
							})
						})
					]
				})
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/ConfirmModal.tsx
function s({ open: t, onClose: a, title: o, message: s, onCancel: c, onConfirm: l }) {
	return e(() => {
		if (!t) return;
		let e = (e) => {
			e.key === "Escape" && (c(), a());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [t, a]), e(() => {
		if (!t) return;
		let e = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = e;
		};
	}, [t]), t ? /* @__PURE__ */ i("div", {
		className: "fixed inset-0 z-9999",
		children: [/* @__PURE__ */ r("div", {
			onClick: a,
			className: "absolute inset-0 bg-black/40 backdrop-blur-[2.5px]"
		}), /* @__PURE__ */ r("div", {
			className: "pointer-events-none relative flex h-full w-full items-center justify-center",
			children: /* @__PURE__ */ r("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": o ? "confirm-modal-title" : void 0,
				className: "pointer-events-auto shadow-xl inset-shadow-[20px] inset-shadow-gray-900 relative w-full max-w-66 md:max-w-[18rem] animate-in fade-in",
				children: /* @__PURE__ */ i("div", {
					className: "relative flex flex-col w-full items-start gap-3 rounded-lg border p-3 py-3 shadow-lg backdrop-blur-2xl border-gray-400 bg-white dark:border-slate-700 dark:bg-slate-900/20",
					children: [
						o && /* @__PURE__ */ r("div", {
							className: "relative flex w-full flex-col items-center justify-center gap-0.5 rounded-md bg-stone-100/70 px-3 py-1 sm:px-4 dark:bg-[#1c1a18]",
							children: /* @__PURE__ */ r("span", {
								id: "confirm-modal-title",
								className: "font-semibold uppercase text-stone-500 dark:text-stone-400",
								children: o
							})
						}),
						/* @__PURE__ */ r("div", {
							className: "flex min-w-0 flex-1 items-center gap-3 px-3 py-2 sm:px-4",
							children: /* @__PURE__ */ r("div", {
								className: "min-w-0 flex-1 space-y-2 text-center",
								children: s ? /* @__PURE__ */ r(n, { children: s }) : /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r("p", {
									className: "text-black dark:text-white",
									children: "Are you sure you want to continue this action?"
								}), /* @__PURE__ */ r("p", {
									className: "text-black text-xs dark:text-white",
									children: "This action is not reversible"
								})] })
							})
						}),
						/* @__PURE__ */ i("div", {
							className: "flex w-full justify-end gap-2",
							children: [/* @__PURE__ */ r("button", {
								type: "button",
								onClick: () => {
									a(), c();
								},
								"aria-label": "Cancel this action",
								className: "group inline-flex flex-none items-center justify-center gap-1.5 rounded-lg bg-red-500 px-6 py-2 font-display text-[12.5px] font-medium tracking-wide text-stone-50 transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white",
								children: /* @__PURE__ */ r("span", { children: "Cancel" })
							}), /* @__PURE__ */ r("button", {
								type: "button",
								onClick: () => {
									a(), l();
								},
								"aria-label": "Continue this action",
								className: "group min-w-28.25 inline-flex flex-none items-center justify-center gap-1.5 rounded-lg bg-black px-5 py-2 font-display text-[12.5px] font-medium tracking-wide text-stone-50 transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white",
								children: /* @__PURE__ */ r("span", { children: "Ok" })
							})]
						})
					]
				})
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/Provider.tsx
function c() {
	let [n, c] = t([]), [l, u] = t({
		open: !1,
		message: ""
	}), [d, f] = t({
		open: !1,
		message: null,
		title: void 0,
		onClose: () => {},
		onCancel: () => {},
		onConfirm: () => {}
	});
	return e(() => {
		let e = (e) => {
			let { detail: t } = e, n = {
				...t,
				id: t.id || `temp-${Date.now()}-${Math.random().toString(36).slice(2)}`
			};
			c((e) => e.some((e) => e.id === n.id) ? e : [n, ...e]), n.autoDismissIn && window.setTimeout(() => {
				c((e) => e.filter((e) => e.id !== n.id));
			}, n.autoDismissIn);
		}, t = (e) => {
			let { detail: t } = e;
			c((e) => e.filter((e) => e.id !== t.id));
		}, n = (e) => {
			let { detail: t } = e;
			u({
				open: !0,
				title: t.title,
				message: t.message,
				onClose: t.onClose
			});
		}, r = (e) => {
			let { detail: t } = e;
			f({
				open: !0,
				message: t.message,
				title: t.title,
				onClose: t.onClose,
				onCancel: t.onCancel,
				onConfirm: t.onConfirm
			});
		};
		return window.addEventListener("toastly:add-alert", e), window.addEventListener("toastly:dismiss-alert", t), window.addEventListener("toastly:alert", n), window.addEventListener("toastly:confirm", r), () => {
			window.removeEventListener("toastly:add-alert", e), window.removeEventListener("toastly:dismiss-alert", t), window.removeEventListener("toastly:alert", n), window.removeEventListener("toastly:confirm", r);
		};
	}, []), /* @__PURE__ */ i("div", {
		className: "fixed bottom-4 left-4 z-9999 min-w-62 max-w-xs space-y-2 text-gray-900 dark:text-white",
		children: [
			/* @__PURE__ */ r(o, {
				open: l.open,
				message: l.message,
				title: l.title,
				onClose: () => {
					l.onClose?.(), u({
						open: !1,
						message: ""
					});
				}
			}),
			/* @__PURE__ */ r(s, {
				open: d.open,
				message: d.message,
				title: d.title,
				onClose: () => {
					d.onClose(), f({
						open: !1,
						message: null,
						title: void 0,
						onClose: () => {},
						onCancel: () => {},
						onConfirm: () => {}
					});
				},
				onCancel: () => {
					d.onCancel();
				},
				onConfirm: () => {
					d.onConfirm();
				}
			}),
			/* @__PURE__ */ r(a, {
				toasts: n,
				onDismiss: (e) => {
					c((t) => t.filter((t) => t.id !== e));
				}
			})
		]
	});
}
//#endregion
//#region src/components/ToastlyProvider.tsx
function l({ children: e }) {
	return /* @__PURE__ */ i("div", {
		className: "toastly",
		children: [/* @__PURE__ */ r(c, {}), e]
	});
}
//#endregion
//#region src/toastly.ts
var u = {
	add: (e) => {
		window.dispatchEvent(new CustomEvent("toastly:add-alert", { detail: e }));
	},
	dismiss: (e) => {
		window.dispatchEvent(new CustomEvent("toastly:dismiss-alert", { detail: { id: e } }));
	},
	confirm: (e) => {
		window.dispatchEvent(new CustomEvent("toastly:confirm", { detail: e }));
	},
	alert: (e) => {
		window.dispatchEvent(new CustomEvent("toastly:alert", { detail: e }));
	}
};
//#endregion
export { o as AlertModal, s as ConfirmModal, l as ToastlyProvider, u as toastly };
