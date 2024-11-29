import {
	e as createAstro,
	c as createComponent,
	r as renderTemplate,
	m as maybeRenderHead,
	f as addAttribute,
	s as spreadAttributes,
	b as renderSlot,
	g as renderHead,
	a as renderComponent,
} from "./astro/server_CEuv_dwr.mjs";
/* empty css                                   */

const $$Astro$2 = createAstro("https://2024.squiggleconf.com");
const $$ContentArea = createComponent(
	($$result, $$props, $$slots) => {
		const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
		Astro2.self = $$ContentArea;
		const { class: className, width = "normal", ...rest } = Astro2.props;
		return renderTemplate`${maybeRenderHead()}<div${addAttribute(["content-area", `content-area-${width}`, className], "class:list")}${spreadAttributes(rest)} data-astro-cid-u7k6t3yj> ${renderSlot($$result, $$slots["default"])} </div> `;
	},
	"/Users/josh/repos/SquiggleConf2025/src/components/ContentArea.astro",
	void 0,
);

const $$Astro$1 = createAstro("https://2024.squiggleconf.com");
const $$Head = createComponent(
	($$result, $$props, $$slots) => {
		const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
		Astro2.self = $$Head;
		const { description } = Astro2.props;
		const image = new URL("favicon.png", Astro2.site).toString();
		const keywords = [
			"squiggleconf",
			"conference",
			"devtools",
			"javascript",
			"typescript",
			"rust",
			"static analysis",
		];
		const title = [
			Astro2.props.title,
			"SquiggleConf 2025",
			"Supercharging web devs and their tools",
		]
			.filter(Boolean)
			.join(" | ");
		const metaPairs = [
			{
				content: description,
				name: `description`,
			},
			{
				content: keywords.join(),
				name: `keywords`,
			},
			{
				content: title,
				property: `og:title`,
			},
			{
				content: description,
				property: `og:description`,
			},
			{
				content: image,
				property: `og:image`,
			},
			{
				content: image,
				property: `og:image:secure_url`,
			},
			{
				content: `website`,
				property: `og:type`,
			},
			{
				content: Astro2.url,
				property: `og:url`,
			},
			{
				content: image,
				name: `thumbnail`,
			},
			{
				content: `summary`,
				name: `twitter:card`,
			},
			{
				content: Astro2.site,
				name: `twitter:domain`,
			},
			{
				content: "Josh Goldberg",
				name: `twitter:creator`,
			},
			{
				content: image,
				name: `twitter:image`,
			},
			{
				content: `@JoshuaKGoldberg`,
				name: `twitter:site`,
			},
			{
				content: title,
				name: `twitter:title`,
			},
			{
				content: description,
				name: `twitter:description`,
			},
		];
		return renderTemplate`<head><meta charset="utf-8"><link href="/favicon.png" rel="icon" type="image/svg+xml"><link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">${metaPairs.map((meta) => renderTemplate`<meta${spreadAttributes(meta)}>`)}<meta${addAttribute(description, "content")} name="description"><meta${addAttribute(keywords.join(), "content")} name="keywords"><meta${addAttribute(Astro2.generator, "content")} name="generator"><meta content="width=device-width" name="viewport"><meta content="SquiggleConf 2025" name="apple-mobile-web-app-title"><title>${title}</title>${renderHead()}</head>`;
	},
	"/Users/josh/repos/SquiggleConf2025/src/components/Head.astro",
	void 0,
);

const $$Header = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ContentArea", $$ContentArea, { class: "header-content-area", width: "wide", "data-astro-cid-3ef6ksr2": true }, { default: ($$result2) => renderTemplate` <a href="/" data-astro-cid-3ef6ksr2>SquiggleConf</a> <div class="header-links" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Home</a> <a href="https://2024.squiggleconf.com" data-astro-cid-3ef6ksr2>2024 Conf</a> <button data-astro-cid-3ef6ksr2>Register</button> </div> ` })} </header> `;
	},
	"/Users/josh/repos/SquiggleConf2025/src/components/Header.astro",
	void 0,
);

const $$BodyArea = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${maybeRenderHead()}<div class="body-area" data-astro-cid-7o7oe2ot> ${renderSlot($$result, $$slots["default"])} </div> `;
	},
	"/Users/josh/repos/SquiggleConf2025/src/components/BodyArea.astro",
	void 0,
);

const $$Footer = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "ContentArea", $$ContentArea, { class: "footer-content-area", width: "wide", "data-astro-cid-sz7xmlte": true }, { default: ($$result2) => renderTemplate` <div data-astro-cid-sz7xmlte>SquiggleConf</div> <div data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <a href="https://shop.squiggle.tools" data-astro-cid-sz7xmlte>Shop</a> <a href="/code-of-conduct" data-astro-cid-sz7xmlte>Code of Conduct</a> </div> <div data-astro-cid-sz7xmlte>Social Links Here</div> </div> ` })} </footer> `;
	},
	"/Users/josh/repos/SquiggleConf2025/src/components/Footer.astro",
	void 0,
);

const $$Astro = createAstro("https://2024.squiggleconf.com");
const $$PageLayout = createComponent(
	($$result, $$props, $$slots) => {
		const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
		Astro2.self = $$PageLayout;
		return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { ...Astro2.props })}${renderComponent($$result, "Header", $$Header, {})}${renderComponent($$result, "BodyArea", $$BodyArea, {}, { default: ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}${renderComponent($$result, "Footer", $$Footer, {})}</html>`;
	},
	"/Users/josh/repos/SquiggleConf2025/src/layouts/PageLayout.astro",
	void 0,
);

export { $$PageLayout as $, $$ContentArea as a };
