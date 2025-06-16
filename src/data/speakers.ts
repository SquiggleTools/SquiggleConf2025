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

interface SpeakerSummary {
	image: ImageMetadata;
	name: string;
}

// TODO: Source this dynamically using the scripts repo
export const speakers: SpeakerSummary[] = [
	// Launch Speakers
	{
		image: anthonyFu,
		name: "Anthony Fu",
	},
	{
		image: jakeBailey,
		name: "Jake Bailey",
	},
	{
		image: shelleyVohr,
		name: "Shelley Vohr",
	},
	{
		image: tJDeVries,
		name: "TJ DeVries",
	},

	// Announced in June

	{
		image: maddyMontaquila,
		name: "Maddy Montaquila",
	},
	{
		image: oliverMedhurst,
		name: "Oliver Medhurst",
	},
	{
		image: dominicNguyen,
		name: "Dominic Nguyen",
	},
	{
		image: oliverDunk,
		name: "Oliver Dunk",
	},
	{
		image: mattiaManzati,
		name: "Mattia Manzati",
	},
	{
		image: giacomoCavalieri,
		name: "Giacomo Cavalieri",
	},
	{
		image: amyDutton,
		name: "Amy Dutton",
	},
	{
		image: davidSherret,
		name: "David Sherret",
	},
	{
		image: jessicaGarson,
		name: "Jessica Garson",
	},
	{
		image: alexanderLichter,
		name: "Alexander Lichter",
	},
	{
		image: nicoloRibaudo,
		name: "Nicolò Ribaudo",
	},
	{
		image: michelleBakels,
		name: "Michelle Bakels",
	},
	{
		image: peteGonzalez,
		name: "Pete Gonzalez",
	},
	{
		image: dylanGoings,
		name: "Dylan Goings",
	},
];
