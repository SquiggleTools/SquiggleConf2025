import _ from "lodash";

import bloombergBlack from "~/assets/logos/bloomberg-black.svg";
import bloombergWhite from "~/assets/logos/bloomberg-white.svg";
import mintlifyBlack from "~/assets/logos/mintlify-black.svg";
import mintlifyWhite from "~/assets/logos/mintlify-white.svg";
import voidZeroBlack from "~/assets/logos/voidzero-black.svg";
import voidZeroWhite from "~/assets/logos/voidzero-white.svg";

export const sponsorsBySlug = {
	bloomberg: {
		href: "https://www.bloomberg.com/company/values/tech-at-bloomberg/javascript?utm_source=squiggleconf",
		logos: {
			dark: bloombergWhite,
			light: bloombergBlack,
		},
		placement: "first",
		title: "Bloomberg",
	},
	mintlify: {
		href: "https://mintlify.com?utm_source=squiggleconf",
		logos: {
			dark: mintlifyWhite,
			light: mintlifyBlack,
		},
		placement: "first",
		title: "Mintlify",
	},
	voidZero: {
		href: "https://voidzero.dev?utm_source=squiggleconf",
		logos: {
			dark: voidZeroWhite,
			light: voidZeroBlack,
		},
		placement: "second",
		title: "VoidZero",
	},
};

// TODO: use Object.groupBy once Vercel supports a newer Node.js version
export const sponsorsByPlacement = _.groupBy(
	Object.entries(sponsorsBySlug).map(([slug, sponsor]) => ({
		slug,
		...sponsor,
	})),
	(sponsor) => sponsor.placement,
);
