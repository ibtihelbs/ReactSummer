import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const SingleProduct = () => {
  const id = useParams().id - 1;
  const [products, setProducts] = useState();
  const getProducts = async () => {
    const res = await axios.get(`http://localhost:3000/bakery`);
    setProducts(res.data.products[id]);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="grid grid-cols-3 ">
      <img src={products.image_url} alt={products.name} />
      <div className="col-span-2 ">
        <h1 className="text-3xl">{products.name} </h1>
        <p> {products.description} </p>
      </div>
    </div>
  );
};

export default SingleProduct;
