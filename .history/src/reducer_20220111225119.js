import CartItem from "./CartItem";

const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }
  if (action.type === "INCREASE") {
    let tempCart = [];
    return{...state, cart:tempCart}
  }

  return state;
};

export default reducer;
