import {
	c as createComponent,
	r as renderTemplate,
	a as renderComponent,
	m as maybeRenderHead,
} from "../chunks/astro/server_CEuv_dwr.mjs";
import { $ as $$PageLayout } from "../chunks/PageLayout_BPgxpljh.mjs";
export { renderers } from "../renderers.mjs";

const $$Index = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { description: "A Boston conference for excellent web dev tooling." }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hello, world!</h1> ` })}`;
	},
	"/Users/josh/repos/SquiggleConf2025/src/pages/index.astro",
	void 0,
);

const $$file = "/Users/josh/repos/SquiggleConf2025/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			default: $$Index,
			file: $$file,
			url: $$url,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);

const page = () => _page;

export { page };
