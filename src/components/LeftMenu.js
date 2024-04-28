import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { setCurrentCategory } from "../slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";

export const LeftMenu = ({ categories }) => {
  const dispatch = useDispatch();
  const { currentCategory } = useSelector((store) => store.category);

  return (
    <ListGroup as="ul" className="bg-body-tertiary">
      {categories &&
        categories.map((x) => (
          <ListGroup.Item
            key={x.id}
            onClick={(e) => {
              e.preventDefault();
              dispatch(setCurrentCategory(x.id));
            }}
            active={currentCategory.id === x.id}
          >
            {x.name}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};
