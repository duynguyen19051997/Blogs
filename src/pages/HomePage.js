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
            sm={3}
            md={3}
            lg={2}
            xl={2}
            style={{ padding: "0", margin: "0" }}
          >
            <LeftMenu />
          </Col>
          <Col sm={9} md={9} lg={10} xl={10}>
            <Blogs />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
