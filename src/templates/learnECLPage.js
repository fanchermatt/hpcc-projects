import { graphql } from "gatsby";
import React from "react";
import { Card } from "antd";
import AppLayout from "../components/Layout";
import LearnECLMenu from "../components/LearnECLMenu";
import NextAndPrevBtns from "../components/NextAndPrevBtns";

function LearnECLPage({ data }) {
  const { html } = data?.markdownRemark;

  return (
    <AppLayout>
      <div style={{ display: "flex", width: "100%", margin: "10px" }}>
        <Card style={{ maxWidth: "20%", margin: "10px", padding: "10px", height: "80vh", overflow: "auto" }}>
          <LearnECLMenu />
        </Card>
        <Card style={{ width: "80%", margin: "10px", padding: "10px", overflow: "auto" }}>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <NextAndPrevBtns/>
        </Card>
      </div>
    </AppLayout>
  );
}

export default LearnECLPage;

export const query = graphql`
  query LearnECL($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`;

//TODO - get rid of all warnings
//TODO - Start should be the first item in menu, learn ECL menu Item should take user there
