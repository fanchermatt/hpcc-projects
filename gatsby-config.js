/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `HPCC Projects`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `projects`,

        //specify branch to pull data from
        branch: `dev`,
        //if your repository is public and doesn't need an access token
        remote: process.env.GATSBY_SOURCE_GIT_URL,

        //if your repository is not public and you need a token
        //remote: `https://myuser:${process.env.GITHUB_TOKEN}@github.com/fanchermatt/data/`,

        //Clone the repository into a local easy access one for quick pushes and updates
        local: "content/",

        // Only import the docs folder from a codebase.
        patterns: `projects/**`,

        // Multiple patterns and negation supported. See https://github.com/mrmlnc/fast-glob
        //patterns: [`*`, `!*.md`]
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `./content/projects`,
      },
      __key: "images",
    },
  ],
};
