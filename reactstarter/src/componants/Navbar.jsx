import Logo from "../assets/react.svg";
const Navbar = () => {
  const links = [
    { name: "Home", link: "#" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <ul>
        {links.map((v, i) => (
          <li key={i}>
            {" "}
            <a href={v.link} className="white">
              {" "}
              {v.name}{" "}
            </a>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
