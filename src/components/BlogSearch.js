import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSorting } from "../slices/blogSlice";

export const BlogSearch = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((store) => store.blog);

  return (
    <>
      <Form inline="true">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={search}
              onChange={(e) => {
                dispatch(setSearch(e.target.value));
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <NavDropdown title="Sort" id="nav-dropdown">
        <NavDropdown.Item
          eventKey="4.1"
          onClick={() => {
            dispatch(setSorting({ sortBy: "createdAt", orderBy: "asc" }));
          }}
        >
          Create (lowest)
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey="4.2"
          onClick={() => {
            dispatch(setSorting({ sortBy: "createdAt", orderBy: "desc" }));
          }}
        >
          Create (highest)
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey="4.3"
          onClick={() => {
            dispatch(setSorting({ sortBy: "title", orderBy: "asc" }));
          }}
        >
          Name (a-z)
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey="4.4"
          onClick={() => {
            dispatch(setSorting({ sortBy: "title", orderBy: "desc" }));
          }}
        >
          Name (z-a)
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
