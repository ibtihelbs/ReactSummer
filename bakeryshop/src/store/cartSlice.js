import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartRed = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price;
    },
  },
});
export const { addProduct } = cartRed.actions;
export default cartRed.reducer;
