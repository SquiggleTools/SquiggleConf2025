import { renderers } from "./renderers.mjs";
import { c as createExports } from "./chunks/entrypoint_DujXNTsT.mjs";
import { manifest } from "./manifest_DPny31mz.mjs";

const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/code-of-conduct.astro.mjs");
const _page2 = () => import("./pages/index.astro.mjs");

const pageMap = new Map([
	[
		"node_modules/.pnpm/astro@4.16.16_@types+node@22.10.1_rollup@4.27.4_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js",
		_page0,
	],
	["src/pages/code-of-conduct.astro", _page1],
	["src/pages/index.astro", _page2],
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
	pageMap,
	serverIslandMap,
	renderers,
	middleware: () => import("./_noop-middleware.mjs"),
});
const _args = {
	middlewareSecret: "74730715-f28a-45d0-87d2-897b4ca1ceb1",
	skewProtection: false,
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
