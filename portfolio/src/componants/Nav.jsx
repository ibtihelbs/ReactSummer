import reactlogo from "../assets/react.svg";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  console.log(isOpen);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <img src="/vite.svg" alt="logo" />
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
            <a href={v.link}> {v.name} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
