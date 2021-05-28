import React, { useState } from "react";
import "./blob.css";

const setBorderRadius = () => {
  const randomTwoDigitNumSmallerThan50 = () =>
    Math.floor(Math.random() * 100) % 50;
  const num1 = randomTwoDigitNumSmallerThan50();
  const num2 = randomTwoDigitNumSmallerThan50();
  const num3 = randomTwoDigitNumSmallerThan50();
  const num4 = randomTwoDigitNumSmallerThan50();
  const borderRadString = `${num1} ${num2} ${num3} ${num4} / ${100 - num1} ${
    100 - num2
  } ${100 - num3} ${100 - num4}`;
  return borderRadString;
};

const Blob = () => {
  const [br, setBr] = useState(setBorderRadius());

  return (
    // <div
    //   className="blobWrapper"
    //   style={{ borderRadius: br }}
    //   onClick={() => {
    //     setInterval(() => {
    //       console.log("hello");
    //       setBr(setBorderRadius());
    //     }, 2000);
    //   }}
    // ></div>
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0%",
        left: "0%",
        zIndex: -1,
        overflow: "hidden",
        // background: "yellow",
        backgroundImage:
          "url('https://css-tricks.com/wp-content/uploads/2019/02/blob.gif')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 50%",
      }}
    ></div>
  );
};

export default Blob;
