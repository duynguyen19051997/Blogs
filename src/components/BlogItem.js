import React from "react";
import { Link } from "react-router-dom";

export const BlogItem = ({ id }) => {
  return (
    <article>
      <h2>Title</h2>
      <div>
        <p>
          Description...
          <Link to={`/blogs/${id}`} className="btn btn-light">
            Detail
          </Link>
        </p>
      </div>
    </article>
  );
};
