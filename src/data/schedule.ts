export interface ActivityBetweenData extends ActivityDataWithinBase {
	title: string;
	type: "between";
}

export interface ActivityData {
	at?: string;
	description: string[];
	location?: ActivityLocation;
	title: string;
	within?: ActivityDataWithin[];
}

export type ActivityDataWithin = ActivityBetweenData | ActivitySessionData;

export interface ActivityDataWithinBase {
	at: string;
}

export interface ActivityLocation {
	href: string;
	text: string;
}

export interface ActivitySessionData extends ActivityDataWithinBase {
	session: string;
	type: "session";
}

export interface ScheduleDay {
	activities: ActivityData[];
	title: string;
}

export const days: ScheduleDay[] = [
	{
		activities: [
			{
				at: "Afternoon",
				description: [
					"We will arrange a volunteering event with a local non-profit the afternoon before the conference.",
					`This event will free and open to any attendee who can code in at least HTML.`,
				],
				title: " Volunteering Event",
			},
		],
		title: "Wednesday, September 17th",
	},
	{
		activities: [
			{
				at: "7:00am",
				description: [
					"Join organizers, volunteers, and attendees for a free joyful jog around the Boston harbor.",
					"We'll meet at the New England Aquarium and run in a 5k loop at a comfortably light pace.",
				],
				location: {
					href: "https://www.neaq.org/visit",
					text: "New England Aquarium",
				},
				title: "Morning Fun Run",
			},
			{
				at: "8:45am",
				description: [
					"Come over to the venue, collect your badge, and network with fellow attendees.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Doors Open",
			},
			{
				at: "10:00am",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
			},
			{
				at: "12:30pm",
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups to and from popular food establishments.",
				],
				location: {
					href: "https://faneuilhallmarketplace.com",
					text: "Faneuil Hall Marketplace",
				},
				title: "Lunch",
			},
			{
				at: "2:15pm",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
			},
			{
				at: "3:45pm",
				description: [
					"What a day! Let's take a breather to have a snack and chat.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Afternoon Snack",
			},
			{
				at: "4:00pm",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
			},
			{
				at: "4:45pm",
				description: [
					"Final pieces of information on upcoming events, raffle giveaways, and appreciation notes to all of the lovely people who attended.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Closing Announcements",
			},
			{
				at: "6:00pm",
				description: [
					"We'll arrange suggested dinner and casual social gathering locations for attendees.",
				],
				title: "Casual Mid-Conference Suggestions",
			},
		],
		title: "Thursday, September 18th",
	},
	{
		activities: [
			{
				at: "7:00am",
				description: [
					"Join organizers, volunteers, and attendees for a free joyful jog around the Boston harbor.",
					"We'll meet at the New England Aquarium and run in a 5k loop at a comfortably light pace.",
				],
				location: {
					href: "https://www.neaq.org/visit",
					text: "New England Aquarium",
				},
				title: "Morning Fun Run",
			},
			{
				at: "8:45am",
				description: [
					"Come over to the venue, collect your badge, and network with fellow attendees.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Doors Open",
			},
			{
				at: "10:00am",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
			},
			{
				at: "12:30pm",
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups to and from popular food establishments.",
				],
				location: {
					href: "https://faneuilhallmarketplace.com",
					text: "Faneuil Hall Marketplace",
				},
				title: "Lunch",
			},
			{
				at: "2:15pm",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
			},
			{
				at: "3:45pm",
				description: [
					"What a day! Let's take a breather to have a snack and chat.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Afternoon Snack",
			},
			{
				at: "4:00pm",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
			},
			{
				at: "4:45pm",
				description: [
					"Final pieces of information on upcoming events, raffle giveaways, and appreciation notes to all of the lovely people who attended.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Closing Announcements",
			},
			{
				at: "6:00pm",
				description: [
					"We'll arrange suggested dinner and casual social gathering locations for attendees.",
				],
				title: "Suggested Dinner Spots",
			},
			{
				at: "7:30pm",
				description: [
					"After dinner, bring your badge for entry and hang out with the organizers, speakers, and fellow attendees in our mixer.",
					"Expect locally prepared hors d'œuvres and a craft lemonade stand.",
				],
				location: {
					href: "https://www.howlatthemoon.com/boston",
					text: "Howl at the Moon Boston",
				},
				title: "Post-Conference Hangout",
			},
		],
		title: "Friday, September 19th",
	},
];
