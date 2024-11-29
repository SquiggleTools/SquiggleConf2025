import {
	c as createComponent,
	r as renderTemplate,
	m as maybeRenderHead,
	b as renderSlot,
	a as renderComponent,
} from "../chunks/astro/server_CEuv_dwr.mjs";
import {
	a as $$ContentArea,
	$ as $$PageLayout,
} from "../chunks/PageLayout_BPgxpljh.mjs";
export { renderers } from "../renderers.mjs";

const $$BodyText = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${maybeRenderHead()}<p> ${renderSlot($$result, $$slots["default"])} </p>`;
	},
	"/Users/josh/repos/SquiggleConf2025/src/components/BodyText.astro",
	void 0,
);

const $$CodeOfConduct = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${renderComponent(
			$$result,
			"PageLayout",
			$$PageLayout,
			{
				description: "A Boston conference for excellent web dev tooling.",
				title: "Code of Conduct",
			},
			{
				default: ($$result2) =>
					renderTemplate` ${renderComponent(
						$$result2,
						"ContentArea",
						$$ContentArea,
						{},
						{
							default: (
								$$result3,
							) => renderTemplate` ${maybeRenderHead()}<h1>Code of Conduct</h1> ${renderComponent(
								$$result3,
								"BodyText",
								$$BodyText,
								{ class: "contents-body-text", size: "large" },
								{
									default: ($$result4) => renderTemplate`
SquiggleConf is dedicated to providing a respectful, harassment-free
			community for everyone. We do not tolerate harassment or bullying of any
			community member in any form. This does not only extend to members of the
			SquiggleConf, but to anyone who chooses to become involved in the larger
			SquiggleConf community of users, developers and integrators through events
			or interactions.
`,
								},
							)} ${renderComponent(
								$$result3,
								"BodyText",
								$$BodyText,
								{ class: "contents-body-text", size: "large" },
								{
									default: ($$result4) => renderTemplate`
Harassment includes offensive verbal/electronic comments related to
			personal characteristics or choices, sexual images or comments in public
			or online spaces, deliberate intimidation, bullying, stalking, following,
			harassing photography or recording, sustained disruption of talks, Discord
			messages, electronic meetings, physical meetings or other events,
			inappropriate physical contact, or unwelcome sexual attention.
			Participants asked to stop any harassing or bullying behavior are expected
			to comply immediately.
`,
								},
							)} ${renderComponent(
								$$result3,
								"BodyText",
								$$BodyText,
								{ class: "contents-body-text", size: "large" },
								{
									default: ($$result4) => renderTemplate`
If a participant engages in harassing behavior, representatives of the
			community may take reasonable action they deem appropriate, including
			warning the offender, expulsion from any SquiggleConf event, or expulsion
			from mailing lists, Discord groups, discussion boards, and other
			electronic communications channels to resolve the issue. This may include
			expulsion from SquiggleConf membership.
`,
								},
							)} ${renderComponent(
								$$result3,
								"BodyText",
								$$BodyText,
								{ class: "contents-body-text", size: "large" },
								{
									default: ($$result4) => renderTemplate`
If you are being harassed, notice that someone else is being harassed, or
			have any other concerns, please act to intercede or ask for help from any
			member of the SquiggleConf, Discord group admins, website admins, or
			organizers/representatives of any physical events put on under the
			auspices of the SquiggleConf.
`,
								},
							)}
—
${renderComponent(
	$$result3,
	"BodyText",
	$$BodyText,
	{ class: "contents-body-text", size: "large" },
	{
		default: ($$result4) => renderTemplate`
This Code of Conduct adapted from
<a href="https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct" target="_blank" rel="noreferrer">
plone.org/foundation/materials/foundation-resolutions/code-of-conduct</a>.
`,
	},
)} ${renderComponent(
								$$result3,
								"BodyText",
								$$BodyText,
								{ class: "contents-body-text", size: "large" },
								{
									default: ($$result4) => renderTemplate`
The content of this Code of Conduct is licensed under a Creative Commons
			Attribution-ShareAlike 4.0 International license.
`,
								},
							)} `,
						},
					)} `,
			},
		)}`;
	},
	"/Users/josh/repos/SquiggleConf2025/src/pages/code-of-conduct.astro",
	void 0,
);

const $$file =
	"/Users/josh/repos/SquiggleConf2025/src/pages/code-of-conduct.astro";
const $$url = "/code-of-conduct";

const _page = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			default: $$CodeOfConduct,
			file: $$file,
			url: $$url,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);

const page = () => _page;

export { page };
