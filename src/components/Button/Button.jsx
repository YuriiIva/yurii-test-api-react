import React from "react";
import { Button } from "react-bootstrap";

const Button1 = ({ children, handleChange }) => {
  return (
    <div>
      <Button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
        onClick={handleChange}
      >
        {children}
      </Button>
    </div>
  );
};

export default Button1;
