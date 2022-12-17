module.exports = {
  title: "Kings' Azit DAO - DOCS", // 🎉
  description: "Kings' Azit DAO Documentation",
  theme: "default-prefers-color-scheme",
  // for theme configuration, see https://vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    /* default-prefers-color-scheme theme options */
    // by default, this theme uses the user's browser preferences to set either
    // light for dark.  I overrode it to always be dark for now to match Kings stylez.
    defaultTheme: "dark",
    logo: "/logo_azit.svg",
    /* standard vuepress themeConfig options */
    repo: "kings-moloch/kings-docs",
    docsDir: "docs",
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Improve this page",
    // Gets the UNIX timestamp(ms) of each file's last git commit, and it will also display at the bottom of each page in an appropriate format. The string will be displayed as a prefix.
    lastUpdated: "Last updated",
    // sidebar configuration: https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: [
      "/",
      "Context",
      "Organization",
      "Membership",
      "AccreditationProcess",
      "AdministrationContributions",
      "VotingRights",
      "Investments",
      "DueDiligence",
      "Proceeds",
      "FeesExpensesCarry",
      "Launch",
      "RageQuitting",
      "Transfer",
      "Projects",
      "Dissolution",
      "SmartContracts",
      "Glossary",
      "DISCLAIMER",
    ]
    // set up search integration below (requires account registration/approval as OSS project)
    // algolia: {
    //   apiKey: "",
    //   indexName: ""
    // },
  },
  // When using manually specified `light theme` or `dark theme` for
  // `default-prefers-color-scheme` theme, you need to add a postcss plugins to your
  // config.js
  postcss: {
    plugins: [
      require("css-prefers-color-scheme/postcss"),
      require("autoprefixer")
    ]
  }
};
