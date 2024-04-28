import React from "react";
import { BlogItem, BlogPagination } from "./index";

import classes from "../assets/css/Blogs.module.css";
import { useSelector } from "react-redux";
import { getOrderBy } from "../utils/orderBy";

export const Blogs = ({ blogs }) => {
  const { sortBy, orderBy } = useSelector((store) => store.blog);

  return (
    <section className="mt-3" style={{ width: "99%", margin: "0 auto" }}>
      <div className={`${classes["header_blogs_container"]} mb-3`}>
        <span className="float-sm-end" style={{ fontStyle: "italic" }}>
          Sort: {getOrderBy(sortBy, orderBy)}
        </span>
      </div>
      <div className={`${classes["blogs_container"]} mb-3`}>
        {blogs && blogs.map((x) => <BlogItem key={x.id} {...x} />)}
      </div>
      <BlogPagination />
    </section>
  );
};
