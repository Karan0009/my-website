import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Logo from "../logo/logo";
import MenuIcon from "../menuIcon/menuIcon";
import Navbar from "../navbar/navbar";
import { Location } from "@reach/router";

import "./header.scss";

const menuItems = [
  { name: "home", path: "/", scrollY: 0 },
  { name: "projects", path: "/projects", scrollY: 1000 },
  { name: "blog", path: "/blog", scrollY: 575 },
  { name: "contact", path: "/contact", scrollY: 1500 },
];

const HEADER_BACKGROUND_SCROLLY = 150;
const BLOG_ACTIVE_SCROLLY = 575;

const Header = ({ locationProps, siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);

  useEffect(() => {
    let ticking = false;
    window.addEventListener("scroll", scrollHandler);
    // const lastScrollTopVal = window.pageYOffset;
    // window.addEventListener("scroll", scrollHandler);

    // (e) => {
    // if (!ticking) {
    //   window.requestAnimationFrame(() => {
    //     console.log(`x:${e.clientX},y:${e.clientY}`);
    //     ticking = false;
    //   });
    //   ticking = true;
    // }
    //   console.log(window.scrollY);
    // }
    function scrollHandler(e) {
      //   console.log("window.scrollY:", window.scrollY);
      //   console.log(window.scrollY > HEADER_BACKGROUND_SCROLLY);
      if (window.scrollY > HEADER_BACKGROUND_SCROLLY) {
        setShowHeaderBackground(true);
        // console.log("show header background");
      } else {
        // console.log("don't show header background");
        setShowHeaderBackground(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const setMenuOpenStatus = (value) => {
    setIsMenuOpen(value);

    changeBodyStyles(value);
  };

  const changeBodyStyles = (value) => {
    const body = document.querySelector("body");
    if (value) {
      body.style.height = "100vh";
      body.style.overflow = "hidden";
    } else {
      body.style.height = "auto";
      body.style.overflow = "unset";
    }
  };
  return (
    <>
      <div
        className="mobile-nav-container"
        style={{ opacity: isMenuOpen ? 1 : 0 }}
      >
        <ul className="mobile-nav-list">
          {menuItems.map((item, index) => (
            <li
              key={`menu-item-${index}`}
              className="mobile-nav-item"
              style={{
                "--order": index + 1,
                transform: isMenuOpen ? "translateX(0)" : "translateX(100vw)",
              }}
            >
              <Link
                to={item.path}
                activeClassName="mobile-active-item"
                className="mobile-nav-item-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="container headerContainer"
        style={{
          backgroundColor: showHeaderBackground ? "#05182890" : "#ffffff00",
        }}
      >
        <div className="container__inner mainHeader">
          <MenuIcon
            menuIconContainerClass={"menuIcon"}
            setMenuOpenStatus={setMenuOpenStatus}
            isMenuOpen={isMenuOpen}
          />
          {/* {isMenuOpen && ( */}

          {/* )} */}
          <Location>
            {(locationProps) => <Navbar {...locationProps} />}
          </Location>
          <Link to="/contact" className="messageMe">
            <svg
              className="messageMe__icon"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.4415 2.04603L2.893 10.0982C2.65282 10.1659 2.43905 10.3054 2.28024 10.4978C2.12144 10.6903 2.02517 10.9267 2.0043 11.1754C1.98343 11.424 2.03895 11.6732 2.16345 11.8894C2.28795 12.1057 2.47549 12.2788 2.70102 12.3856L15.818 18.599C16.0739 18.7201 16.2799 18.9261 16.4011 19.182L22.6144 32.299C22.7212 32.5245 22.8943 32.712 23.1106 32.8365C23.3268 32.961 23.576 33.0166 23.8246 32.9957C24.0733 32.9748 24.3097 32.8786 24.5022 32.7198C24.6946 32.5609 24.8341 32.3472 24.9018 32.107L32.954 3.55847C33.0131 3.34877 33.0153 3.12709 32.9603 2.91626C32.9053 2.70543 32.7951 2.51308 32.641 2.35901C32.4869 2.20494 32.2946 2.09472 32.0837 2.03971C31.8729 1.9847 31.6512 1.98688 31.4415 2.04603Z"
                stroke="#FFD166"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.7778 19.2219L23.3556 12.333"
                stroke="#FFD166"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="messageMe__text">message me</p>
          </Link>
        </div>
      </div>
    </>
    // <div className="headerContainer">
    //   <div className="mainHeader">
    //     <Logo />

    //     <MenuIcon
    //       menuIconContainerClass={"menuIcon"}
    //       setMenuOpenStatus={setMenuOpenStatus}
    //       isMenuOpen={isMenuOpen}
    //     />

    //     {/* desktop nav */}
    //     <ul className="navlist">
    //       {menuItems.map((item, index) => (
    //         <li key={`menu-item-desktop-${index}`} className="navItem">
    //           <Link
    //             to={item.path}
    //             activeClassName="activeItem"
    //             className="navItemLink"
    //           >
    //             {item.name}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
