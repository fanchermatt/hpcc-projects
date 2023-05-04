import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

const IndexPage = (data) => {
  console.log(data);

  const content = data.data.allFile.edges.map((file) => (
    <div>
      <p>
        Name:{file.node.name}
        <br />
        Directory:{file.node.dir}
        <br />
        Content:{file.node.internal.content}
      </p>
    </div>
  ));

  return (
    <Layout>
      <div>Welcome!</div>

      <div>{content}</div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          id
          relativePath
          dir
          dev
          name
          internal {
            content
          }
        }
      }
    }
  }
`;
