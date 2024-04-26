import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BlogNew } from "./BlogNew";
import { BlogSearch } from "./BlogSearch";

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary justify-content-around">
      <BlogNew />
      <BlogSearch />
    </Navbar>
  );
};
