import { mergeScheduleWithPublic, ScheduleDay } from "./schedule.js";

export const publicSchedule: ScheduleDay[] = mergeScheduleWithPublic([
	{
		activities: [
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
				at: "5:00pm",
				description: [
					"Split up into small groups and race to take pictures of historic Boston landmarks as a team.",
					"We'll provide a list of locations and a map to help you navigate at the end of the closing announcements.",
					"Prizes will include SquiggleConf swag and free tickets to next year's conference.",
				],
				title: "Photo Challenge",
			},
		],
		title: "Thursday, September 18th",
	},
	{
		activities: [
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
		],
		title: "Friday, September 19th",
	},
]);
