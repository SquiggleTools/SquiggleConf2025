import vercel from "@astrojs/vercel";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	experimental: {
		responsiveImages: true,
	},
	integrations: [konamiEmojiBlast()],
	output: "server",
	site: "https://2025.squiggleconf.com",
});
