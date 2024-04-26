import React from "react";
import classes from "../assets/css/Blogs.module.css";
import { BlogItem, BlogPagination } from "./index";

export const Blogs = () => {
  return (
    <section className="mt-3" style={{ width: "99%", margin: "0 auto" }}>
      <div className={`${classes["blogs_container"]} mb-3`}>
        <BlogItem id={1} />
        <BlogItem id={1} />
        <BlogItem id={1} />
        <BlogItem id={1} />
      </div>
      <BlogPagination />
    </section>
  );
};
