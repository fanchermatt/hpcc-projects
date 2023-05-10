import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";


function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { image_description, title, banner_image } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div style={{ padding: "25px", border: "1px solid lightgray", padding: "10px" }}>
        <h1>{title}</h1>
        <div>
          <img src={banner_image} alt={image_description} />
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectDetails;

export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image
        image_description
        project_description
        slug
        title
        banner_image
      }
    }
  }
`;
