import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "./header/header";
import "../styles/global.scss";
import "./layout.css";
import Footer from "./footer/footer";
import Background from "./background/background";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Background />

      {/* padding: `0 1.0875rem 1.45rem`, */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--containerMaxWidth)`,
        }}
      >
        <main>
          {" "}
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
