import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Group F - Design Team",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Bungee Tint",
        body: "SUSE",
        code: "Inconsolata",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF", // White background
          lightgray: "#EEEEEE", // Light gray for borders
          gray: "#CCCCCC", // Gray for links and heavier borders
          darkgray: "#282828", // Darker gray for body text
          dark: "#000000", // Black for header text and icons
          secondary: "#BA393D", // Muted UGA Red for active elements
          tertiary: "#BA393D", // Muted UGA Red for hover states
          highlight: "#FFEEEE",
          textHighlight: "#fc8d8d", // Muted UGA Red for highlighted text
        },
        darkMode: {
          light: "#000000", // Dark background
          lightgray: "#282828", // Darker gray for borders
          gray: "#555555", // Lighter gray for links and heavier borders
          darkgray: "#EEEEEE", // Light gray for body text
          dark: "#EEEEEE", // Off-white for header text and icons
          secondary: "#BA393D", // Muted UGA Red for active elements
          tertiary: "#BA393D", // Muted UGA Red for hover states
          highlight: "#441111",
          textHighlight: "#7d2525", // Muted UGA Red for highlighted text
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
