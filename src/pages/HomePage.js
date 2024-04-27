import React from "react";
import { Header, Blogs, LeftMenu } from "../components/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const HomePage = () => {
  return (
    <main>
      <Header />
      <Container className="mt-3 mb-3">
        <Row>
          <Col
            sm={4}
            md={4}
            lg={3}
            xl={3}
            style={{ padding: "0", margin: "0" }}
          >
            <LeftMenu />
          </Col>
          <Col sm={8} md={8} lg={9} xl={9}>
            <Blogs />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
