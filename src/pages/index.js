import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import "../global/global.css";
import Header from "../components/header/header";
import Blob from "../components/blob/blob";
import {
  heroSection,
  heroSectionTitle,
  contentContainer,
  tOver,
  heroSectionWrapper,
  subTitle1,
  subTitle2,
  blobStyle2,
  mainSection,
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
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        style={{
          left: "4.5%",
          top: "1%",
          height: `${offsetY * 2}px`,
          width: `${offsetX * 2}px`,
        }}
        ref={cursorRef}
        className="cursor2"
      ></div>
      <Header />
      <div className={mainSection}>
        <div className={heroSectionWrapper}>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>
          <span className={tOver}></span>

          <div className={heroSection}>
            <div className={contentContainer}>
              <h1 className={heroSectionTitle}>
                Hi,
                <br />I am Karan Singh
              </h1>
              <p className={subTitle1}>Developer</p>
              <p className={subTitle2}>I try to make things work</p>
            </div>
            {/* <div
        style={{ left: 0, right: 0 }}
        ref={cursorRef}
        className="cursor-wrapper"
      >
        <div className="cursor"></div>
      </div> */}
          </div>
        </div>
        <Blob />
        <Blob blobStyles={blobStyle2} />
      </div>
    </>
  );
};

export default Home;
