module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "YOON JEONGHYON PORTPOLIO",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
