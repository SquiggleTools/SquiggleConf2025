import afhBlack from "~/assets/2024/partners/afh-black.svg";
import afhWhite from "~/assets/2024/partners/afh-white.svg";
import conTejasCode from "~/assets/2024/partners/contejas-code.png";
import hackDiversityBlue from "~/assets/2024/partners/hack-diversity-blue.svg";
import hackDiversityWhite from "~/assets/2024/partners/hack-diversity-white.svg";
import jsParty from "~/assets/2024/partners/js-party.png";
import reactAfricaDark from "~/assets/2024/partners/react-africa-dark.png";
import reactAfricaLight from "~/assets/2024/partners/react-africa-light.webp";
import thisWeekInReactDarkMode from "~/assets/2024/partners/this-week-in-react-dark-mode.png";
import thisWeekInReactLightMode from "~/assets/2024/partners/this-week-in-react-light-mode.png";

export const partnersBySlug = {
	afh: {
		href: "https://www.afhboston.org/?utm_source=squiggleconf",
		logos: {
			dark: afhWhite,
			light: afhBlack,
		},
		title: "Artists for Humanity",
	},
	contejas: {
		href: "https://tej.as/#podcast",
		logos: {
			dark: conTejasCode,
			light: conTejasCode,
		},
		title: "ConTejas Code Podcast",
	},
	hackDiversity: {
		href: "https://www.hackdiversity.com/?utm_source=squiggleconf",
		logos: {
			dark: hackDiversityWhite,
			light: hackDiversityBlue,
		},
		title: "Hack.Diversity",
	},
	jsparty: {
		href: "https://changelog.com/jsparty?utm_source=squiggleconf",
		logos: {
			dark: jsParty,
			light: jsParty,
		},
		title: "JS Party",
	},
	reactAfrica: {
		href: "https://react-africa.com/?utm_source=squiggleconf",
		logos: {
			dark: reactAfricaLight,
			light: reactAfricaDark,
		},
		title: "React Africa",
	},
	twir: {
		href: "https://thisweekinreact.com?utm_source=squiggleconf",
		logos: {
			dark: thisWeekInReactDarkMode,
			light: thisWeekInReactLightMode,
		},
		title: "This Week In React",
	},
};
