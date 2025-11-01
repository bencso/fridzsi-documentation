// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fridzsi - dokumentáció',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/bencso/fridzsi' }],
			sidebar: [
				{
					label: "Első lépések",
					autogenerate: { directory: 'getting-started' },
				},
			],
		}),
	],
});
