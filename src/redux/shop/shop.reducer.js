import shopData from "./shop.data";

const INITIAL_SHOP_STATE = {
  collections: shopData,
};

const shopReducer = (state = INITIAL_SHOP_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
