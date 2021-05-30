import React, { useState, useEffect, useRef } from "react";
import "./menuIcon.css";

const MenuIcon = ({
  menuIconContainerClass,
  isMenuOpen,
  setMenuOpenStatus,
}) => {
  const menuIconWrapper = useRef();

  return (
    <div className={menuIconContainerClass}>
      {/* {isMenuOpen && <p style={{ color: "#fff" }}>hello</p>} */}
      <div
        ref={menuIconWrapper}
        className={"menuItemWrapper " + (isMenuOpen ? "menuOpen" : "menuClose")}
        onClick={() => setMenuOpenStatus(!isMenuOpen)}
      >
        <div className="line"></div>
      </div>
    </div>
  );
};

export default MenuIcon;
