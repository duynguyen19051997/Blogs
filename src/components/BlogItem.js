import React from "react";
import { Link } from "react-router-dom";

import { BsCalendar3 } from "react-icons/bs";

import classes from "../assets/css/BlogItem.module.css";
import { formatDate } from "../utils/date_time";

export const BlogItem = ({ id, title, description, createdAt }) => {
  return (
    <article className="mb-3">
      <h3 className={classes["blog_item_title"]}>{title}</h3>
      <div>
        <p style={{ marginLeft: "10px" }}>
          <BsCalendar3 />{" "}
          <span style={{ marginLeft: "10px", fontStyle: "italic" }}>
            {formatDate(new Date(createdAt))}
          </span>
        </p>
        <p style={{ marginLeft: "10px" }}>
          {description.length > 200
            ? `${description.substring(0, 200)}...`
            : description}
          <Link to={`/blogs/${id}`} className="btn btn-light">
            Detail
          </Link>
        </p>
      </div>
    </article>
  );
};
