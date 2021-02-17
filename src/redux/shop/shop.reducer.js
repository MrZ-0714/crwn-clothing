//import shopData from "./shop.data";
import ShopActionTypes from "./shop.action.types";

const INITIAL_SHOP_STATE = {
  collections: null,
  isFetching: false,
  errMessage: "",
};

const shopReducer = (state = INITIAL_SHOP_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
