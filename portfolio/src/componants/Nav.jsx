import reactlogo from "../assets/react.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={reactlogo} alt="react logo" id="menu" />
      </button>
      <ul className={`nav ${isOpen == true ? "open" : ""}`}>
        {navLinks.map((v, i) => (
          <li key={i}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                };
              }}
              href={v.link}
            >
              {" "}
              {v.name}{" "}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
