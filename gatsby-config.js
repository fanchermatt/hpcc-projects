require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `HPCC Projects`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // This plugin allows users to add  site to their home screen on most mobile browsers - MAY NOT BE NECESSARY
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    // {
    //   "name": "gatsby-transformer-remark",
    //   "options": {
    //     "name": "md-files-for-projects",
    //     "contentPath": "content/projects,blog"
    //   }
    // },

    // Clone repo into content directory
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `projects`,
        remote: "https://github.com/fanchermatt/data",
        branch: `dev`,
        local: `${__dirname}/content/projects`,
      },
    },

    // Give different name to ech instance if reading file from different locations
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "learnECL",
        path: `${__dirname}/content/projects/Learn-ECL`,
      },
      __key: "learnECL",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects/projects`,
        read: true,
      },
      __key: "projects",
    },
  ],
};
