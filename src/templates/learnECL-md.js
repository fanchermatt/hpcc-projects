import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";

function learnECLDetails({ data }) {
  console.log(data);
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <div
        style={{
          padding: "25px",
          border: "1px solid var(--border)",
        }}
      >
        <div>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </Layout>
  );
}

export default learnECLDetails;

export const query = graphql`
  query learnECLDetail($absolutePath: String) {
    markdownRemark(fileAbsolutePath: { eq: $absolutePath }) {
      html
      rawMarkdownBody
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
