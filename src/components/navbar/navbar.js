import React, { useEffect } from "react";
import { Link } from "gatsby";
import "./navbar.css";

// const menuItems = [
//   { name: "about", path: "#aboutMe__section" },
//   { name: "blog", path: "#blog__section" },
//   { name: "projects", path: "#projects__section" },
//   // { name: "contact", path: "/contact" },
// ];
const menuItems = [
  { name: "about", path: "/" },
  { name: "blog", path: "/#blog__section" },
  { name: "projects", path: "#projects__section" },
  // { name: "contact", path: "/contact" },
];

const Navbar = (props) => {
  // useEffect(() => {
  //   console.log(props.location.hash);
  // }, [props.location.hash]);
  // const addOrRemoveActiveClass = (e) => {
  //   e.stopPropagation();
  //   // console.log(e.target);
  //   // console.log(props.location.hash);
  // };
  return (
    <ul className="nav__list">
      {menuItems.map((item, index) => (
        <li
          key={`navItem-${index}`}
          // onClick={addOrRemoveActiveClass}
          className="nav__listItem"
        >
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
