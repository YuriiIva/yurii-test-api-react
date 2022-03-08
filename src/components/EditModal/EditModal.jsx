import React from "react";
import { useState } from "react";

const EditModal = ({ editProduct, editProd, onCloseForm }) => {
  const [oldProd, setOldProd] = useState({ ...editProduct });
  // const [editProd, setEditProd] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOldProd({
      ...oldProd,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProd(oldProd);
    // setIsModalEditOpen(false);
    setOldProd("");
    onCloseForm();
  };

  console.log(`oldProd`, oldProd);

  return (
    <div>
      <div className="container">
        <h2>Please, edit data</h2>

        <form action="/action_page.php" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
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
            <label htmlFor="txt">Text:</label>
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
