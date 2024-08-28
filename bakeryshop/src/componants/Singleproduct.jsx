import { Link } from "react-router-dom";

const Singleproduct = ({ prod }) => {
  return (
    <Link
      to={`/single/${prod.id}`}
      className="p-1 border-solid border-[1px] border-black rounded-lg"
    >
      <img
        src={prod.image_url}
        alt={prod.name}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      <div className="flex justify-between p-4 ">
        <div>
          <h2>{prod.name}</h2>
          <p className="text-xl">{prod.price} </p>
        </div>
        <button className="border-solid border-[1px] border-black px-8 rounded-full hover:bg-red-400  ">
          add to cart
        </button>
      </div>
    </Link>
  );
};

export default Singleproduct;
