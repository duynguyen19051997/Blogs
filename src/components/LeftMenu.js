import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const categoriesLink =
  "https://662a6ae567df268010a3d82c.mockapi.io/api/v1/categories";

export const LeftMenu = () => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [categories, setCategories] = useState([]);

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
      setCategories(data);
      setCurrentCategory(data[0].id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ListGroup as="ul" className="bg-body-tertiary">
      {categories.map((x) => (
        <ListGroup.Item
          key={x.id}
          onClick={() => setCurrentCategory(x.id)}
          active={currentCategory === x.id}
        >
          {x.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
