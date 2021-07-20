import React from "react";
import "./customButton.scss";

const CustomButton = (props) => {
  const defaultStyles = {
    border: 0,
    background: "var(--color2)",
    padding: "2rem 2.2rem",
    borderRadius: "1rem",
    fontFamily: "Poppins",
    fontSize: "var(--smallFontSize)",
    color: "var(--color5)",
    // marginRight: "100%",
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
