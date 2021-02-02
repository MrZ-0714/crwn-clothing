import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  removeItemAction,
  reduceQtyAction,
  addItemAction,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({
  cartItem,
  removeItemProps,
  reduceQtyProps,
  addItemProps,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceQtyProps(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemProps(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemProps(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItemProps: (item) => dispatch(removeItemAction(item)),
  reduceQtyProps: (item) => dispatch(reduceQtyAction(item)),
  addItemProps: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
