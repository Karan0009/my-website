import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

const menuItems = [
  { name: "about", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "blog", path: "/blog" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  // const move
  return (
    <ul className="nav__list">
      {menuItems.map((item, index) => (
        <li key={`navItem-${index}`} className="nav__listItem">
          <Link
            activeClassName="nav__activeItemLink"
            className="nav__itemLink"
            to={item.path}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
