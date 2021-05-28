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
    <span className="blob">
      <svg
        viewBox="0 0 200 200"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F2A365"
          d="M43.7,-68.1C54.1,-61.4,58.1,-44.9,64.6,-29.8C71,-14.7,79.9,-1,78.7,11.7C77.5,24.4,66.3,36,56,49.3C45.7,62.6,36.5,77.6,23.5,82.6C10.6,87.5,-6.1,82.4,-21.5,76.4C-36.9,70.4,-51.1,63.5,-58.3,52.2C-65.4,40.9,-65.5,25.2,-65.7,10.7C-65.8,-3.8,-66.1,-17.1,-63.7,-31.9C-61.3,-46.7,-56.2,-63.1,-45.1,-69.5C-34,-75.8,-17,-72.2,-0.2,-72C16.7,-71.7,33.4,-74.8,43.7,-68.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </span>
    // <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     top: "0%",
    //     left: "0%",
    //     zIndex: -1,
    //     overflow: "hidden",
    //     // background: "yellow",
    //     backgroundImage:
    //       "url('https://css-tricks.com/wp-content/uploads/2019/02/blob.gif')",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "100% 50%",
    //   }}
    // ></div>
  );
};

export default Blob;
