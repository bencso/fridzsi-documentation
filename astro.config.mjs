// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    starlight({
      components: {
        PageFrame: "./src/components/PageFrame.astro",
        TwoColumnContent: "./src/components/TwoColumnContent.astro",
      },
      customCss: ["./src/styles/global.css", "@fontsource-variable/dm-sans"],
      title: {
        en: "Fridzsi - User documentation",
        hu: "Fridzsi - Felhasználói dokumentáció",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/bencso/fridzsi",
        },
      ],
      sidebar: [
        {
          label: "Első lépések",
          translations: {
            en: "Getting started",
          },
          autogenerate: {
            directory: "/getting-started",
          },
        },
      ],
      defaultLocale: "hu",
      locales: {
        hu: {
          label: "Magyar",
          lang: "hu",
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      disable404Route: true,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
