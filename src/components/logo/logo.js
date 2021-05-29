import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./logo.css";
import { graphql, useStaticQuery } from "gatsby";

const Logo = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)|(gif)/" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);
  const logoImage = data.allFile.edges.find((n) => n.node.name === "logoImage")
    .node.publicURL;
  const logoGlitch = data.allFile.edges.find(
    (n) => n.node.name === "logoGlitch"
  ).node.publicURL;
  // console.log(logoImage);
  const [srcVal, setSrcVal] = useState(logoImage);
  return (
    <div
      className="logoContainer"
      onMouseEnter={(e) => {
        // e.stopPropagation();
        // setIsMouseOver(true);
        setSrcVal(logoGlitch);
        console.log("entered..");
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setSrcVal(logoImage);
        console.log("left..");
      }}
    >
      {/* <p>{srcVal}</p> */}
      <img src={srcVal} />
    </div>
  );
};

export default Logo;
