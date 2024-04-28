import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../slices/blogSlice";

export const BlogPagination = () => {
  const dispatch = useDispatch();
  const { numberOfPage, currentPage, limit } = useSelector(
    (store) => store.blog.pagination
  );

  const elements = [];
  let newPagination = {
    numberOfPage: numberOfPage,
    currentPage: currentPage,
    limit: limit,
  };
  for (let i = 1; i <= numberOfPage; i++) {
    elements.push(
      <Pagination.Item
        key={i}
        onClick={() => {
          dispatch(setPagination({ ...newPagination, currentPage: i }));
        }}
        active={currentPage === i}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination style={{ float: "right" }}>
        <Pagination.First
          onClick={() => {
            dispatch(setPagination({ ...newPagination, currentPage: 1 }));
          }}
        />
        <Pagination.Prev
          onClick={() => {
            let prevPage = currentPage - 1;
            if (prevPage >= 1) {
              dispatch(
                setPagination({ ...newPagination, currentPage: prevPage })
              );
            }
          }}
        />
        {elements}
        <Pagination.Next
          onClick={() => {
            let nextPage = currentPage + 1;
            if (nextPage <= numberOfPage) {
              dispatch(
                setPagination({ ...newPagination, currentPage: nextPage })
              );
            }
          }}
        />
        <Pagination.Last
          onClick={() => {
            dispatch(
              setPagination({ ...newPagination, currentPage: numberOfPage })
            );
          }}
        />
      </Pagination>
    </div>
  );
};
