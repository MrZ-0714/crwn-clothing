import CartActionTypes from "./cart.action.types";

export const toggleCartHiddenAction = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemAction = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemAction = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const reduceQtyAction = (item) => ({
  type: CartActionTypes.REDUCE_QTY,
  payload: item,
});
