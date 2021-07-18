import React from "react";
import "./customButton.scss";

const CustomButton = (props) => {
  const defaultStyles = {
    border: 0,
    background: "var(--color2)",
    padding: "1.1rem 1.3rem",
    borderRadius: "1rem",
    fontFamily: "Poppins",
    fontSize: "1rem",
    color: "var(--color5)",
    marginRight: "auto",
  };
  return (
    <button
      style={{ ...props?.buttonStyle, ...defaultStyles }}
      className={"customButton " + props?.buttonClass}
    >
      {props?.buttonText ? props.buttonText : "button"}
    </button>
  );
};

export default CustomButton;
