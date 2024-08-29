import { useSelector } from "react-redux";
import Contact from "../componants/Contact";

const Home = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  return (
    <div>
      <Contact />
    </div>
  );
};

export default Home;
