import shopData from "./shop.data";
import ShopActionTypes from "./shop.action.types";

const INITIAL_SHOP_STATE = {
  collections: shopData,
};

const shopReducer = (state = INITIAL_SHOP_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
