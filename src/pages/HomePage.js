import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Blogs, LeftMenu, Loading } from "../components/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getCategories } from "../slices/categorySlice";
import { getBlogs, getTotalBlogs } from "../slices/blogSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { categories, currentCategory } = useSelector(
    (store) => store.category
  );
  const {
    blogs,
    pagination,
    search,
    sortBy,
    orderBy,
    isLoadingBlogs,
    isLoadingPagination,
  } = useSelector((store) => store.blog);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const fetchTotalBlogs = useCallback(() => {
    if (currentCategory && currentCategory.id !== undefined) {
      dispatch(
        getTotalBlogs({
          categoryId: currentCategory.id,
          orderBy,
          sortBy,
          search,
        })
      );
    } else {
      dispatch(getTotalBlogs({ orderBy, sortBy, search }));
    }
  }, [dispatch, currentCategory, orderBy, sortBy, search]);

  const fetchBlogs = useCallback(() => {
    if (currentCategory && currentCategory.id !== undefined) {
      dispatch(
        getBlogs({
          currentPage: pagination.currentPage,
          limit: pagination.limit,
          categoryId: currentCategory.id,
          orderBy,
          sortBy,
          search,
        })
      );
    } else {
      dispatch(
        getBlogs({
          currentPage: pagination.currentPage,
          limit: pagination.limit,
          orderBy,
          sortBy,
          search,
        })
      );
    }
  }, [dispatch, pagination, currentCategory, orderBy, sortBy, search]);

  useEffect(() => {
    fetchTotalBlogs();
  }, [fetchTotalBlogs]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <main>
      <Header />
      <Container className="mt-3 mb-3">
        {isLoadingBlogs && isLoadingPagination ? (
          <Row>
            <Col>
              <Loading />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col
              sm={4}
              md={4}
              lg={3}
              xl={3}
              style={{ padding: "0", margin: "0" }}
            >
              <LeftMenu categories={categories} />
            </Col>
            <Col sm={8} md={8} lg={9} xl={9}>
              <Blogs blogs={blogs} />
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};
