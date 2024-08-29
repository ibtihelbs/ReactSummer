import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer).cart;
  const price = useSelector((state) => state.cartReducer).totalPrice;
  console.log(cart);
  return (
    <div className="absolute w-[300px] p-5 flex flex-col gap-4 min-h-8 bg-white right-5 border-black border-solid border-[1px] rounded-lg">
      {cart.map((v) => (
        <div
          className="border-black p-2 flex justify-between border-solid border-[1px] rounded-lg"
          key={v.cart.id}
        >
          <img
            src={v.cart.image_url}
            alt={v.cart.name}
            className="w-10 h-10 rounded-lg"
          />
          <div>
            <h1> {v.cart.name} </h1>
            <h2> {v.cart.price} </h2>
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <h1>total price :</h1> <span> {price} TND </span>
      </div>
    </div>
  );
};

export default Cart;
