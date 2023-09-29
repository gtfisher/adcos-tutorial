import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SSCS docs",
  description: "Docs site for TTI SSCS",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Adocs",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide/" },
      { text: "Changelog", link: "https://github.com/Evavic44/adocs/blob/main/README.md" },
    ],

    sidebar: [
      {
        text: 'Section A',
        items: [
          { text: 'Introduction', link: '/introduction/' },
          { text: 'Getting Started', link: '/introduction/getting-started' }
        ]
      },
      {
        text: 'Section B',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/introduction/' },
          { text: 'Getting Started', link: '/introduction/getting-started' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Example from Addocs tut', link: '/example' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Adocs",
    },
  }
})
