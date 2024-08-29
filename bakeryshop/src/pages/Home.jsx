import { useSelector } from "react-redux";

const Home = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  return <div>
    
    
  </div>;
};

export default Home;
