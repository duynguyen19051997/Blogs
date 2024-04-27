import React from "react";
import { Link } from "react-router-dom";

export const BlogItem = ({ id, title, description }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>
        <p>
          {description}...
          <Link to={`/blogs/${id}`} className="btn btn-light">
            Detail
          </Link>
        </p>
      </div>
    </article>
  );
};
