import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../logo/logo";
import MenuIcon from "../menuIcon/menuIcon";

import "./header.css";

const menuItems = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "blog", path: "/blogs" },
  { name: "contact", path: "/contact" },
];

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
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        >
          <ul className="mobile-nav-list">
            {menuItems.map((item, index) => (
              <li
                key={`menu-item-${index}`}
                className="mobile-nav-item"
                style={{
                  "--order": isMenuOpen ? 1 : 4,
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
        {/* )} */}
        {/* desktop nav */}
        <ul className="navlist">
          {menuItems.map((item, index) => (
            <li key={`menu-item-desktop-${index}`} className="navItem">
              <Link
                to={item.path}
                activeClassName="activeItem"
                className="navItemLink"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
