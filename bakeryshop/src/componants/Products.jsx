import axios from "axios";
import { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";
const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/bakery");
    setProducts(res.data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div
      className="grid md:grid-cols-3 grid-cols-1 px-10 
     gap-5"
    >
      {products.map((v) => (
        <Singleproduct key={v.id} prod={v} />
      ))}
    </div>
  );
};

export default Products;
