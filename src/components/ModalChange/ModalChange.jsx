import React from "react";
import Button1 from "../Button/Button";
import s from "./ModalChange.module.css";

const ModalChange = ({ onDelete, onEdit }) => {
  return (
    <div className={s.changeForm}>
      <Button1 handleChange={onEdit}>Edit</Button1>
      <Button1 handleChange={onDelete}>Delete</Button1>
    </div>
  );
};

export default ModalChange;
