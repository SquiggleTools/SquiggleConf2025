import { d as decodeKey } from "./chunks/astro/server_CEuv_dwr.mjs";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/astro-designed-error-pages_BQxRyLnN.mjs";

function sanitizeParams(params) {
	return Object.fromEntries(
		Object.entries(params).map(([key, value]) => {
			if (typeof value === "string") {
				return [
					key,
					value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F"),
				];
			}
			return [key, value];
		}),
	);
}
function getParameter(part, params) {
	if (part.spread) {
		return params[part.content.slice(3)] || "";
	}
	if (part.dynamic) {
		if (!params[part.content]) {
			throw new TypeError(`Missing parameter: ${part.content}`);
		}
		return params[part.content];
	}
	return part.content
		.normalize()
		.replace(/\?/g, "%3F")
		.replace(/#/g, "%23")
		.replace(/%5B/g, "[")
		.replace(/%5D/g, "]");
}
function getSegment(segment, params) {
	const segmentPath = segment
		.map((part) => getParameter(part, params))
		.join("");
	return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
	return (params) => {
		const sanitizedParams = sanitizeParams(params);
		let trailing = "";
		if (addTrailingSlash === "always" && segments.length) {
			trailing = "/";
		}
		const path =
			segments.map((segment) => getSegment(segment, sanitizedParams)).join("") +
			trailing;
		return path || "/";
	};
}

function deserializeRouteData(rawRouteData) {
	return {
		route: rawRouteData.route,
		type: rawRouteData.type,
		pattern: new RegExp(rawRouteData.pattern),
		params: rawRouteData.params,
		component: rawRouteData.component,
		generate: getRouteGenerator(
			rawRouteData.segments,
			rawRouteData._meta.trailingSlash,
		),
		pathname: rawRouteData.pathname || void 0,
		segments: rawRouteData.segments,
		prerender: rawRouteData.prerender,
		redirect: rawRouteData.redirect,
		redirectRoute: rawRouteData.redirectRoute
			? deserializeRouteData(rawRouteData.redirectRoute)
			: void 0,
		fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
			return deserializeRouteData(fallback);
		}),
		isIndex: rawRouteData.isIndex,
	};
}

function deserializeManifest(serializedManifest) {
	const routes = [];
	for (const serializedRoute of serializedManifest.routes) {
		routes.push({
			...serializedRoute,
			routeData: deserializeRouteData(serializedRoute.routeData),
		});
		const route = serializedRoute;
		route.routeData = deserializeRouteData(serializedRoute.routeData);
	}
	const assets = new Set(serializedManifest.assets);
	const componentMetadata = new Map(serializedManifest.componentMetadata);
	const inlinedScripts = new Map(serializedManifest.inlinedScripts);
	const clientDirectives = new Map(serializedManifest.clientDirectives);
	const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
	const key = decodeKey(serializedManifest.key);
	return {
		// in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
		middleware() {
			return { onRequest: NOOP_MIDDLEWARE_FN };
		},
		...serializedManifest,
		assets,
		componentMetadata,
		inlinedScripts,
		clientDirectives,
		routes,
		serverIslandNameMap,
		key,
	};
}

const manifest = deserializeManifest({
	hrefRoot: "file:///Users/josh/repos/SquiggleConf2025/",
	adapterName: "@astrojs/vercel/serverless",
	routes: [
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/page.Deekd0lS.js" },
				{
					stage: "head-inline",
					children:
						"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t",
				},
			],
			styles: [],
			routeData: {
				type: "endpoint",
				isIndex: false,
				route: "/_image",
				pattern: "^\\/_image$",
				segments: [[{ content: "_image", dynamic: false, spread: false }]],
				params: [],
				component:
					"node_modules/.pnpm/astro@4.16.16_@types+node@22.10.1_rollup@4.27.4_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js",
				pathname: "/_image",
				prerender: false,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/page.Deekd0lS.js" },
				{
					stage: "head-inline",
					children:
						"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t",
				},
			],
			styles: [
				{
					type: "inline",
					content:
						".content-area[data-astro-cid-u7k6t3yj]{padding:0 2rem;max-width:100%;margin:auto}.content-area-normal[data-astro-cid-u7k6t3yj]{width:var(--sizeContentAreaNormal)}.content-area-wide[data-astro-cid-u7k6t3yj]{width:var(--sizeContentAreaWide)}header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid var(--colorMediumAccent);padding:2rem;width:100%}.header-content-area[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between}.header-links[data-astro-cid-3ef6ksr2]{display:flex;gap:2rem}.body-area[data-astro-cid-7o7oe2ot]{background:linear-gradient(180deg,#053051 10%,#06213b 90%);height:100%;min-height:20rem}footer[data-astro-cid-sz7xmlte]{padding:2rem;width:100%}.footer-content-area[data-astro-cid-sz7xmlte]{display:flex;justify-content:space-between}:root{--colorWhite: #ffffff;--colorBlue1: #bcdfe9;--colorBlue2: #29ced6;--colorBlue3: #116d9a;--colorBlue4: #063052;--colorBlue5: #041930;--colorLight: var(--colorWhite);--colorLightAccent: var(--colorBlue1);--colorSecondAccent: var(--colorBlue2);--colorMediumAccent: var(--colorBlue3);--colorDarkAccent: var(--colorBlue4);--colorDark: var(--colorBlue5);--sizeContentAreaNormal: 63rem;--sizeContentAreaWide: 70rem;color-scheme:light}html{background:var(--colorDark);color:var(--colorLight);min-height:100%}html.dark{color-scheme:dark}@media (prefers-reduced-motion: no-preference){html,body{scroll-behavior:smooth}}*{box-sizing:border-box}body{margin:0}a{color:inherit;text-decoration-thickness:1px}h1,h2,h3,h4,ol,p{margin:0;padding:0;font-size:inherit}\n",
				},
			],
			routeData: {
				route: "/code-of-conduct",
				isIndex: false,
				type: "page",
				pattern: "^\\/code-of-conduct\\/?$",
				segments: [
					[{ content: "code-of-conduct", dynamic: false, spread: false }],
				],
				params: [],
				component: "src/pages/code-of-conduct.astro",
				pathname: "/code-of-conduct",
				prerender: false,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/page.Deekd0lS.js" },
				{
					stage: "head-inline",
					children:
						"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t",
				},
			],
			styles: [
				{
					type: "inline",
					content:
						".content-area[data-astro-cid-u7k6t3yj]{padding:0 2rem;max-width:100%;margin:auto}.content-area-normal[data-astro-cid-u7k6t3yj]{width:var(--sizeContentAreaNormal)}.content-area-wide[data-astro-cid-u7k6t3yj]{width:var(--sizeContentAreaWide)}header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid var(--colorMediumAccent);padding:2rem;width:100%}.header-content-area[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between}.header-links[data-astro-cid-3ef6ksr2]{display:flex;gap:2rem}.body-area[data-astro-cid-7o7oe2ot]{background:linear-gradient(180deg,#053051 10%,#06213b 90%);height:100%;min-height:20rem}footer[data-astro-cid-sz7xmlte]{padding:2rem;width:100%}.footer-content-area[data-astro-cid-sz7xmlte]{display:flex;justify-content:space-between}:root{--colorWhite: #ffffff;--colorBlue1: #bcdfe9;--colorBlue2: #29ced6;--colorBlue3: #116d9a;--colorBlue4: #063052;--colorBlue5: #041930;--colorLight: var(--colorWhite);--colorLightAccent: var(--colorBlue1);--colorSecondAccent: var(--colorBlue2);--colorMediumAccent: var(--colorBlue3);--colorDarkAccent: var(--colorBlue4);--colorDark: var(--colorBlue5);--sizeContentAreaNormal: 63rem;--sizeContentAreaWide: 70rem;color-scheme:light}html{background:var(--colorDark);color:var(--colorLight);min-height:100%}html.dark{color-scheme:dark}@media (prefers-reduced-motion: no-preference){html,body{scroll-behavior:smooth}}*{box-sizing:border-box}body{margin:0}a{color:inherit;text-decoration-thickness:1px}h1,h2,h3,h4,ol,p{margin:0;padding:0;font-size:inherit}\n",
				},
			],
			routeData: {
				route: "/",
				isIndex: true,
				type: "page",
				pattern: "^\\/$",
				segments: [],
				params: [],
				component: "src/pages/index.astro",
				pathname: "/",
				prerender: false,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/page.Deekd0lS.js" },
				{
					stage: "head-inline",
					children:
						"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t",
				},
			],
			styles: [],
			routeData: {
				type: "redirect",
				isIndex: false,
				route: "/talks",
				pattern: "^\\/talks\\/?$",
				segments: [[{ content: "talks", dynamic: false, spread: false }]],
				params: [],
				component: "/talks",
				pathname: "/talks",
				prerender: false,
				redirect: "/sessions",
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
	],
	site: "https://2024.squiggleconf.com",
	base: "/",
	trailingSlash: "ignore",
	compressHTML: true,
	componentMetadata: [
		[
			"/Users/josh/repos/SquiggleConf2025/src/pages/code-of-conduct.astro",
			{ propagation: "none", containsHead: true },
		],
		[
			"/Users/josh/repos/SquiggleConf2025/src/pages/index.astro",
			{ propagation: "none", containsHead: true },
		],
	],
	renderers: [],
	clientDirectives: [
		[
			"idle",
			'(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();',
		],
		[
			"load",
			'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
		],
		[
			"media",
			'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
		],
		[
			"only",
			'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
		],
		[
			"visible",
			'(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();',
		],
	],
	entryModules: {
		"\u0000@astrojs-ssr-adapter": "_@astrojs-ssr-adapter.mjs",
		"\u0000noop-middleware": "_noop-middleware.mjs",
		"\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
		"\u0000@astro-renderers": "renderers.mjs",
		"\u0000@astro-page:src/pages/index@_@astro": "pages/index.astro.mjs",
		"\u0000@astro-page:src/pages/code-of-conduct@_@astro":
			"pages/code-of-conduct.astro.mjs",
		"\u0000@astro-page:node_modules/.pnpm/astro@4.16.16_@types+node@22.10.1_rollup@4.27.4_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic@_@js":
			"pages/_image.astro.mjs",
		"/Users/josh/repos/SquiggleConf2025/node_modules/.pnpm/astro@4.16.16_@types+node@22.10.1_rollup@4.27.4_typescript@5.7.2/node_modules/astro/dist/env/setup.js":
			"chunks/astro/env-setup_Cr6XTFvb.mjs",
		"\u0000@astrojs-manifest": "manifest_DPny31mz.mjs",
		"astro:scripts/page.js": "_astro/page.Deekd0lS.js",
		"astro:scripts/before-hydration.js": "",
	},
	inlinedScripts: [],
	assets: ["/_astro/page.Deekd0lS.js", "/_astro/page.Deekd0lS.js"],
	buildFormat: "directory",
	checkOrigin: false,
	serverIslandNameMap: [],
	key: "ko11+8Kw8rH2zseYH7+b6yXxhw5ggqJF7PhqDwfVWXs=",
	experimentalEnvGetSecretEnabled: false,
});

export { manifest };
