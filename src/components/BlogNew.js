import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../slices/blogSlice";

export const BlogNew = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [description, setDescription] = useState("");

  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { categories } = useSelector((store) => store.category);
  const dispatch = useDispatch();

  const submitBlog = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const newBlog = {
      title,
      categoryId,
      description,
    };

    dispatch(addBlog(newBlog));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Blog
      </Button>
      <div className="modal show">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={submitBlog}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  name="title"
                  pattern="^[a-zA-Z0-9]+$"
                  required
                  isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(title)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Title.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Category</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                    console.log(categoryId);
                  }}
                  required
                  aria-label="Default select example"
                >
                  <option value="">--Select Category--</option>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.name}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a Category.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  pattern="^[a-zA-Z0-9]+$"
                  required
                  isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(title)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Description.
                </Form.Control.Feedback>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
