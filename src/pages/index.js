import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Hero from "../components/Hero/Hero";
import { Card, Col, Row } from "antd";

const IndexPage = (data) => {
  console.log(data);

  const content = data.data.allFile.edges.map((file) => (
    <div>
      <p>Name:{file.node.name}</p>
    </div>
  ));

  return (
    <Layout>
      <Hero />
      <Row gutter={16} style={{ marginTop: "2rem" }}>
        <Col span={12}>
          <Card title="Learn ECL" bordered={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Our Products" bordered={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "2rem", marginBottom: "5rem" }}>
        <Col span={12}>
          <Card title="Learn ECL" bordered={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Our Products" bordered={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Card>
        </Col>
      </Row>
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
