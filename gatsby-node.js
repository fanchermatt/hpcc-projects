const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const eclData = await graphql(`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "learnECL" } }) {
        edges {
          node {
            dir
            id
            name
            relativeDirectory
            absolutePath
          }
        }
      }
    }
  `);

  const eclFiles = eclData.data.allFile.edges;

  data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });

  eclFiles.forEach((node) => {
    console.log(node.node);
    createPage({
      path: `/learnECL/${node.node.name}`,
      component: path.resolve("./src/templates/learnECL-md.js"),
      context: { absolutePath: node.node.absolutePath },
    });
  });
};
