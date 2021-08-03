import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./navbar.css";

// const menuItems = [
//   { name: "about", path: "#aboutMe__section" },
//   { name: "blog", path: "#blog__section" },
//   { name: "projects", path: "#projects__section" },
//   // { name: "contact", path: "/contact" },
// ];
const menuItems = [
  {
    name: "about",
    path: "#aboutMe__section",
    id: "aboutMe",
    sectionId: "aboutMe__section",
  },
  {
    name: "blog",
    path: "#blog__section",
    id: "blog",
    sectionId: "blog__section",
  },
  {
    name: "projects",
    path: "#projects__section",
    id: "projects",
    sectionId: "projects__section",
  },
  // { name: "contact", path: "/contact" },
];

const Navbar = (props) => {
  const [currentActive, setCurrentActive] = useState("aboutMe__section");
  useEffect(() => {
    window.addEventListener("scroll", scrollHandlerForActiveNavItem);
    function scrollHandlerForActiveNavItem(e) {
      const pageMainSections = document.querySelectorAll(".pageMainSection");
      const scrollPos = window.pageYOffset;
      let current = "";
      pageMainSections.forEach((sec, index) => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.clientHeight;

        if (scrollPos >= sectionTop - sectionHeight / 7) {
          current = sec.getAttribute("id");
        }
      });

      setCurrentActive(current);
      controlNavSliderPosition();
    }

    function controlNavSliderPosition() {
      // const navLinks = document.querySelectorAll("ul li a");
      // const navList = document.querySelector("nav ul");
      // const navListItems = document.querySelectorAll("ul li");
      const slider = document.querySelector(".slider");
      let offset = 0;

      const mappedVal = mapValues(
        (window.pageYOffset / window.innerHeight) * 100,
        0,
        100
      );
      console.log(mappedVal);
      // console.log(
      //   `${
      //     mapValues((window.pageYOffset / window.innerHeight) * 100, 0, 200) +
      //     offset
      //   }%`
      // );
      let width = 50;
      if (window.innerWidth < 500) {
        width = 25;
        // if (mappedVal < 10) {
        //   offset = 0;
        // } else if (mappedVal > 80) {
        //   offset = 0;
        // } else {
        //   offset = 0;
        // }
      } else {
        if (mappedVal < 10) {
          offset = 50;
        } else if (mappedVal > 80) {
          offset = -50;
        } else {
          offset = 0;
        }
      }
      slider.style.width = `${width}px`;

      const leftVal = `calc(${mappedVal}% - ${width / 2}px + ${offset}px)`;
      // console.log(leftVal);
      slider.style.left = leftVal;
      // navListItems.forEach((li) => {
      //   li.classList.remove("active");
      //   if (li.classList.contains(`navlink-${currentActive}`)) {
      //     li.classList.add("active");
      //   }
      // });
    }

    function mapValues(val, min, max) {
      // var minM = 0;
      // var maxM = 200;
      // var minV = 0;
      // var maxV = Math.log(100);
      // var scal = (maxV - minV) / (maxM - minM);
      // return Math.exp(minV + scal * (pos - minM)) - 1;
      const mappedVal = val / 2;
      if (mappedVal >= max) {
        return max;
      } else if (mappedVal < min) return min;
      else return Math.round(mappedVal);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandlerForActiveNavItem);
    };
  }, []);

  return (
    <ul className="nav__list">
      <span style={{ left: "0px" }} className="slider"></span>
      {menuItems.map((item, index) => (
        <li
          key={`navItem-${index}`}
          // onClick={addOrRemoveActiveClass}
          className={
            "nav__listItem " +
            `nav-${item.id} ` +
            (currentActive === item.sectionId ? "active" : "")
          }
        >
          <a
            // activeClassName="nav__activeItemLink"
            className="nav__itemLink"
            id={item.name}
            href={item.path}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
