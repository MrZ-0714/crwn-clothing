import React from "react";
import "./checkout.styles.scss";
//Component
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Desc</span>
      </div>
      <div className="header-block">
        <span>Qty</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => 
    <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
    )}
    <div className="total">
      TOTAL:
      $ {cartItemsTotal}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
