import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Fridzsi",
  tagline: "A Fridzsi a te intelligens hűtőd",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://bencso.hu",
  baseUrl: "/",
  organizationName: "Bencso",
  projectName: "fridzsi",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "hu",
    locales: ["hu", "en"],
    path: "i18n",
    localeConfigs: {
      hu: {
        label: "Magyar",
        direction: "ltr",
        htmlLang: "hu-HU",
        calendar: "gregory",
        path: "hu",
        translate: false,
        baseUrl: "/",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
        translate: true,
        baseUrl: "/en/",
      },
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => item.url !== "/");
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Fridzsi",
      style: "primary",
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Dokumentáció",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/bencso/fridzsi",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Közösségi oldalak",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/bencso/fridzsi",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bencso. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
