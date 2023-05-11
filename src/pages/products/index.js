import React from "react";
import { Card, Button } from "antd";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";

function Portfolio({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  console.log("---------", projects);

  return (
    <Layout>
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {projects.map((project) => {
          if (project.frontmatter.title) {
            return (
              <Card
                title={project.frontmatter.title}
                style={{ width: 350, margin: "10px" }}
                key={project.frontmatter.title}
              >
                <img
                  alt={project.frontmatter.image_description}
                  src={project.frontmatter.image}
                />
                <div>{project.frontmatter.project_description}</div>
                <div style={{ marginTop: "15px" }}>
                  <Button
                    type="primary"
                    href={`/projects/${project.frontmatter.slug}`}
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            );
          } else {
            return null;
          }
        })}
      </div>
    </Layout>
  );
}

export default Portfolio;

//Export page query
export const query = graphql`
  query AllProjects {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          slug
          image
          title
          project_description
          image_description
          banner_image
        }
      }
    }
  }
`;
