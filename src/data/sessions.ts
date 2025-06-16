import { ImageMetadata } from "astro";

import alexanderLichter from "~/assets/avatars/alexander-lichter.jpg";
import amyDutton from "~/assets/avatars/amy-dutton.jpg";
import anthonyFu from "~/assets/avatars/anthony-fu.jpg";
import davidSherret from "~/assets/avatars/david-sherret.jpg";
import dominicNguyen from "~/assets/avatars/dominic-nguyen.jpg";
import dylanGoings from "~/assets/avatars/dylan-goings.png";
import giacomoCavalieri from "~/assets/avatars/giacomo-cavalieri.jpg";
import jakeBailey from "~/assets/avatars/jake-bailey.jpg";
import jessicaGarson from "~/assets/avatars/jessica-garson.jpg";
import maddyMontaquila from "~/assets/avatars/maddy-montaquila.jpg";
import mattiaManzati from "~/assets/avatars/mattia-manzati.jpg";
import michelleBakels from "~/assets/avatars/michelle-bakels.jpg";
import nicoloRibaudo from "~/assets/avatars/nicolo-ribaudo.jpg";
import oliverDunk from "~/assets/avatars/oliver-dunk.png";
import oliverMedhurst from "~/assets/avatars/oliver-medhurst.jpg";
import peteGonzalez from "~/assets/avatars/pete-gonzalez.jpg";
import shelleyVohr from "~/assets/avatars/shelley-vohr.jpg";
import tJDeVries from "~/assets/avatars/tj-devries.jpg";

interface SessionSummary {
	image: ImageMetadata;
	qualification: string;
	speaker: string;
	title: string;
}

// TODO: Source this dynamically using the scripts repo
export const sessions: SessionSummary[] = [
	// Launch Speakers
	{
		image: anthonyFu,
		qualification: "open sourceror and design engineer",
		speaker: "Anthony Fu",
		title: "Make Tools That People Love",
	},
	{
		image: jakeBailey,
		qualification: "TypeScript team",
		speaker: "Jake Bailey",
		title: "How and Why We Ported TypeScript to Go",
	},
	{
		image: shelleyVohr,
		qualification: "core eng @electron; collaborator @nodejs",
		speaker: "Shelley Vohr",
		title: "Electron's Internal Tooling: Open Source at Scale",
	},
	{
		image: tJDeVries,
		qualification: "Neovim core team",
		speaker: "TJ DeVries",
		title: "Zero to Squiggle with the Language Server Protocol",
	},

	// Announced in June

	{
		image: maddyMontaquila,
		qualification: "product lead for Aspire",
		speaker: "Maddy Montaquila",
		title: "A World Class Local Dev Loop with Aspire",
	},
	{
		image: oliverMedhurst,
		qualification: "creator of Porffor; TC39 & WinterTC invited expert",
		speaker: "Oliver Medhurst",
		title: "AoT Compiling TypeScript to WASM and Native",
	},
	{
		image: dominicNguyen,
		qualification: "Chromatic creator; Storybook maintainer",
		speaker: "Dominic Nguyen",
		title: "Catch Accessibility Issues at the Source with Storybook",
	},
	{
		image: oliverDunk,
		qualification: "Chrome Extensions @ Google, Editor @ W3C WebExtensions CG",
		speaker: "Oliver Dunk",
		title: "Cross-Browser DevTools with WebExtensions",
	},
	{
		image: mattiaManzati,
		qualification: "founding engineer, Effectful Technologies",
		speaker: "Mattia Manzati",
		title: "Effect: Type-Safe Errors and Dependency Injection",
	},
	{
		image: giacomoCavalieri,
		qualification: "Gleam language core team member",
		speaker: "Giacomo Cavalieri",
		title: "Snapshot Tests in Gleam: Smarter Testing, Less Work",
	},
	{
		image: amyDutton,
		qualification: "RedwoodJS lead maintainer",
		speaker: "Amy Dutton",
		title: "JavaScript Framework Cage Match",
	},
	{
		image: davidSherret,
		qualification: "Deno developer; creator of ts-morph, dprint, ts-ast-viewer",
		speaker: "David Sherret",
		title: "JSR: Designing Package Registry Module Resolution",
	},
	{
		image: jessicaGarson,
		qualification: "senior developer advocate at Elastic and artist",
		speaker: "Jessica Garson",
		title: "Quality Code Samples Make Everything Better",
	},
	{
		image: alexanderLichter,
		qualification: "developer on Nuxt and void(0) devrel engineer",
		speaker: "Alexander Lichter",
		title: "Rolldown: How Vite Bundles at the Speed of Rust",
	},
	{
		image: nicoloRibaudo,
		qualification: "Babel maintainer and TC39 representative at Igalia",
		speaker: "Nicolò Ribaudo",
		title: "Source Maps: How Does the Magic Work?",
	},
	{
		image: michelleBakels,
		qualification:
			"software developer, program director of developer health at G2i",
		speaker: "Michelle Bakels",
		title: "Tech Broke My Heart",
	},
	{
		image: peteGonzalez,
		qualification: "co-creator of Lockfile Explorer, engineer at TikTok",
		speaker: "Pete Gonzalez",
		title: "The Lockfiles PhD You Never Got",
	},
	{
		image: dylanGoings,
		qualification: "WASM enthusiast",
		speaker: "Dylan Goings",
		title: "WASI: Building Blocks for WebAssembly",
	},
	{
		image: peteGonzalez,
		qualification: "core maintainer of TSDoc",
		speaker: "Pete Gonzalez",
		title: "Why We Made TSDoc (and How)",
	},
];
