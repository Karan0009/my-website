import React, { useState } from "react";
import "./menuIcon.css";

const MenuIcon = ({ menuIconContainerClass }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={menuIconContainerClass}>
      {isMenuOpen && <p style={{ color: "#fff" }}>hello</p>}
      <div
        className={"menuItemWrapper " + (isMenuOpen ? "menuOpen" : "menuClose")}
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <div className="line"></div>
      </div>
    </div>
  );
};

export default MenuIcon;
