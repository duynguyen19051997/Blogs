import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

export const BlogPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <Pagination style={{ float: "right" }}>
        <Pagination.First />
        <Pagination.Prev />
        {arr.map((x) => (
          <Pagination.Item
            key={x}
            onClick={() => setCurrentPage(x)}
            active={currentPage === x}
          >
            {x}
          </Pagination.Item>
        ))}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};
