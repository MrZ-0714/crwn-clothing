import CartActionTypes from "./cart.action.types";

const toggleCartHiddenAction = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemAction = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export default toggleCartHiddenAction;
