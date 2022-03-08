import React from "react";
import { Button } from "react-bootstrap";

const Button1 = ({ children }) => {
  return (
    <div>
      <Button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        {children}
      </Button>
    </div>
  );
};

export default Button1;
