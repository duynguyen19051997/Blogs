import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export const LeftMenu = () => {
  const arr = [
    { id: 1, category: "Media Object" },
    { id: 2, category: "Modal" },
    { id: 3, category: "Nav" },
    { id: 4, category: "Navbar" },
  ];

  const [currentCategory, setCurrentCategory] = useState(1);

  return (
    <ListGroup as="ul" className="bg-body-tertiary">
      {arr.map((x) => (
        <ListGroup.Item
          key={x.id}
          onClick={() => setCurrentCategory(x.id)}
          active={currentCategory === x.id}
        >
          {x.category}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
