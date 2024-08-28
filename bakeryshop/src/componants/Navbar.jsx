import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "Contact", link: "../#contact" },
  ];
  return (
    <ul className="flex gap-3 justify-center">
      {links.map((v, i) => (
        <li key={i}>
          <Link to={v.link}>{v.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
