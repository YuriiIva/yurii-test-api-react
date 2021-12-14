import PropTypes from "prop-types";
// import s from "./ErrorMsg.module.css";

const ErrorMsg = ({ message = "" }) => {
  return <p>{message || "Something went wrong"}</p>;
};

ErrorMsg.propTypes = {
  message: PropTypes.string,
};

export default ErrorMsg;
