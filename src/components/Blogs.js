import React, { useEffect, useState } from "react";
import classes from "../assets/css/Blogs.module.css";
import { BlogItem, BlogPagination } from "./index";

const categoriesLink =
  "https://662a6ae567df268010a3d82c.mockapi.io/api/v1/categories/1/blogs";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(categoriesLink, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mt-3" style={{ width: "99%", margin: "0 auto" }}>
      <div className={`${classes["blogs_container"]} mb-3`}>
        {blogs.map((x) => (
          <BlogItem {...x} />
        ))}
      </div>
      <BlogPagination />
    </section>
  );
};
