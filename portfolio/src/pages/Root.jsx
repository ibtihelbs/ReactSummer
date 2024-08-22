import { Outlet } from "react-router-dom";
import Footer from "../componants/Footer";
import Nav from "../componants/Nav";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
