import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/dateTime";
import { Button } from "react-bootstrap";

export const BlogDetail = ({ createdAt, title, description }) => {
  const navigate = useNavigate();

  return (
    <article className="mt-5">
      <h2>{title}</h2>
      <p style={{ marginLeft: "10px" }}>
        <BsCalendar3 />{" "}
        <span style={{ marginLeft: "10px", fontStyle: "italic" }}>
          {formatDate(new Date(createdAt))}
        </span>
      </p>
      <p style={{ marginLeft: "10px" }}>{description}</p>
      <Button
        className="float-end"
        onClick={() => {
          navigate(-1);
        }}
        variant="primary"
      >
        Back Home Page
      </Button>
    </article>
  );
};
