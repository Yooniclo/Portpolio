module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "YOON JEONGHYON PORTPOLIO",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
      __key: "projects",
    },
  ],
};
