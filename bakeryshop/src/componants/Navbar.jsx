import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "Contact", link: "../#contact" },
  ];
  return (
    <nav className="flex justify-between items-center px-9 py-5">
      <Link to={"/"}>
        {" "}
        <h2>Sweet Dreams</h2>{" "}
      </Link>
      <ul className="flex gap-3 justify-center">
        {links.map((v, i) => (
          <li key={i}>
            <Link to={v.link}>{v.name}</Link>
          </li>
        ))}
      </ul>
      <img src="./add-to-cart.png" alt="cart" className="h-8" />
    </nav>
  );
};

export default Navbar;
