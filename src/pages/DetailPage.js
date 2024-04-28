import React, { useEffect } from "react";
import { BlogDetail, Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogById } from "../slices/blogSlice";

export const DetailPage = () => {
  const { blog, isLoadingBlog } = useSelector((store) => store.blog);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);

  if (isLoadingBlog) {
    return <Loading {...blog} />;
  }

  return (
    <>
      <BlogDetail {...blog} />
    </>
  );
};
