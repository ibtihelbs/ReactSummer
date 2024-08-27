const buyCake = (num) => {
  return {
    type: "BUY_CAKE",
    payload: num,
  };
};
const restockCake = (num) => {
  return {
    type: "RESTOCK_CAKE",
    payload: num,
  };
};
export { buyCake, restockCake };
