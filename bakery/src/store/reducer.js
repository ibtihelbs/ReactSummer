import { buyCake, restockCake } from "./actions";

const initialState = {
  cake: 0,
  bread: 0,
  icecream: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        cake: state.cake - action.payload,
      };
    case "RESTOCK_CAKE":
      return {
        ...state,
        cake: state.cake + action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
