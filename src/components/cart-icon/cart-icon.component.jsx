import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//config redux for cart-dropdown hidden status.
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHiddenAction } from "../../redux/cart/cart.action";
//Selector
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

const CartIcon = ({ toogleCartHiddenProps, itemCount }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toogleCartHiddenProps} />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispath) => ({
  toogleCartHiddenProps: () => dispath(toggleCartHiddenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
