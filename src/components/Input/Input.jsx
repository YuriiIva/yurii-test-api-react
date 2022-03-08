import React from "react";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import { saveItem } from "../../services/Api";

const END_POINT = "posts";

const Input = ({ onCloseForm, onNewProduct }) => {
  const [newProduct, setNewProduct] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!newProduct) return;
    const addNewProduct = async () => {
      const newProducts = await saveItem(END_POINT, newProduct);
      console.log(`newProducts`, newProducts);
      onNewProduct(newProducts);
      onCloseForm();
    };
    addNewProduct();
  }, [newProduct]);

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
    // reset();
  };

  // const reset = () => {
  //   setFormData(null);
  // };
  // console.log(`newProduct`, newProduct);
  // console.log(`formData`, formData);

  return (
    <div className="container">
      <h2>Please, enter the date</h2>

      <form action="/action_page.php" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            value={formData.title}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="txt">Text:</label>
          <input
            value={formData.text}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="txt"
            name="text"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="image">Img:</label>
          <input
            value={formData.image}
            onChange={handleChange}
            type="url"
            className="form-control"
            id="image"
            name="image"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="url">Url:</label>
          <input
            value={formData.url}
            onChange={handleChange}
            type="url"
            className="form-control"
            id="url"
            name="url"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="act">Active:</label>
          <input
            value={formData.active}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="act"
            name="active"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="sort">Sort:</label>
          <input
            value={formData.sort_order}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="sort"
            name="sort_order"
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
