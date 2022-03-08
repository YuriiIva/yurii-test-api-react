import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { editProducts } from "../../redux/Operations";

const EditModal = ({ editProduct, onCloseForm }) => {
  const [oldProd, setOldProd] = useState({});
  const [activeProduct, setActiveProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!editProduct) return;
    setOldProd({ ...editProduct });
  }, [editProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOldProd({
      ...oldProd,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveProduct(oldProd);
  };

  useEffect(() => {
    if (!activeProduct) return;

    dispatch(editProducts(activeProduct));
    onCloseForm();
  }, [activeProduct, dispatch]);

  return (
    <div>
      <div className="container">
        <h2>You can change... </h2>

        <form action="/action_page.php" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Change title:</label>
            <input
              value={oldProd.title}
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="txt">Change text:</label>
            <input
              value={oldProd.text}
              type="text"
              className="form-control"
              id="txt"
              name="text"
              onChange={handleChange}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
