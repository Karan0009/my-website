import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../logo/logo";
import MenuIcon from "../menuIcon/menuIcon";

import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="headerContainer">
      <div className="mainHeader">
        <Logo />

        <MenuIcon
          menuIconContainerClass={"menuIcon"}
          setMenuOpenStatus={setMenuOpenStatus}
          isMenuOpen={isMenuOpen}
        />
        {/* mobile nav */}
        {/* {isMenuOpen && ( */}
        <div
          className="mobile-nav-container"
          style={{ left: isMenuOpen ? "0%" : "100%" }}
        >
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item" data-order={0}>
              <Link
                to="/"
                activeClassName="mobile-active-item"
                className="mobile-nav-item-link"
              >
                Home
              </Link>
            </li>
            <li className="mobile-nav-item" data-order={1}>
              <Link
                to="/projects"
                activeClassName="mobile-active-item"
                className="mobile-nav-item-link"
              >
                Projects
              </Link>
            </li>
            <li className="mobile-nav-item" data-order={2}>
              <Link
                to="/blog"
                activeClassName="mobile-active-item"
                className="mobile-nav-item-link"
              >
                Blog
              </Link>
            </li>
            <li className="mobile-nav-item" data-order={3}>
              <Link
                to="/contact"
                activeClassName="mobile-active-item"
                className="mobile-nav-item-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* )} */}
        {/* desktop nav */}
        <ul className="navlist">
          <li className="navItem">
            <Link to="/" activeClassName="activeItem" className="navItemLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/projects"
              activeClassName="activeItem"
              className="navItemLink"
            >
              Projects
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/blog"
              activeClassName="activeItem"
              className="navItemLink"
            >
              Blog
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/contact"
              activeClassName="activeItem"
              className="navItemLink"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
