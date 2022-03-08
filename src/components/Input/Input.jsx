import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { nanoid } from "nanoid";

import { addProducts } from "../../redux/Operations";

const Input = ({ onCloseForm }) => {
  const [newProduct, setNewProduct] = useState(null);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!newProduct) return;
    dispatch(addProducts(newProduct));
    onCloseForm();
  }, [dispatch, newProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      id: nanoid(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct(formData);
  };

  const { title, text, image, url, active, sort_order } = formData;

  return (
    <div className="container">
      <h2>Please, enter the date</h2>

      <form action="/action_page.php" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <input
            value={text}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="text"
            name="text"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="image">Img:</label>
          <input
            value={image}
            onChange={handleChange}
            type="url"
            className="form-control"
            id="image"
            name="image"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="url">Url:</label>
          <input
            value={url}
            onChange={handleChange}
            type="url"
            className="form-control"
            id="url"
            name="url"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="active">Active:</label>
          <input
            value={active}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="active"
            name="active"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="sort">Sort:</label>
          <input
            value={sort_order}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="sort"
            name="sort_order"
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default Input;
