import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import "../global/global.css";
import Header from "../components/header/header";
import Blob from "../components/blob/blob";
import {
  heroSection,
  heroSectionTitle,
  contentContainer,
} from "../pageStyles/index.module.css";
const offsetX = 25;
const offsetY = 25;

const Home = ({ data }) => {
  const cursorRef = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", _cursorMoveEvent);
    // document.onmousemove = _cursorMoveEvent;
    return () => {
      document.removeEventListener("mousemove", _cursorMoveEvent);
    };
  }, []);

  const _cursorMoveEvent = (e) => {
    // console.log(cursorRef.current.style.left);
    cursorRef.current.style.left = e.clientX - offsetX + "px";
    cursorRef.current.style.top = e.clientY - offsetY + "px";
  };

  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          height: `${offsetY * 2}px`,
          width: `${offsetX * 2}px`,
        }}
        ref={cursorRef}
        className="cursor2"
      ></div>
      <Header />
      <div className={heroSection}>
        <div className={contentContainer}>
          <h1 className={heroSectionTitle}>I am Karandeep Singh</h1>
        </div>
        {/* <div
        style={{ left: 0, right: 0 }}
        ref={cursorRef}
        className="cursor-wrapper"
      >
        <div className="cursor"></div>
      </div> */}
      </div>
      <Blob />
    </>
  );
};

export default Home;
