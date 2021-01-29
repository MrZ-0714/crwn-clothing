import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//config redux for cart-dropdown hidden status.
import { connect } from "react-redux";
import toggleCartHiddenAction from "../../redux/cart/cart.action";

const CartIcon = ({ toogleCartHiddenProps }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toogleCartHiddenProps}/>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispath) => ({
  toogleCartHiddenProps: () => dispath(toggleCartHiddenAction()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
