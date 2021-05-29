import { Link } from "gatsby";
import React from "react";
import Logo from "../logo/logo";
import MenuIcon from "../menuIcon/menuIcon";

import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="mainHeader">
        <Logo />

        <MenuIcon menuIconContainerClass={"menuIcon"} />
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
