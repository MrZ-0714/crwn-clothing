import React from "react";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
//Components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHiddenAction } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, toggleCartHiddenProps }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHiddenProps();
      }}
    >
      {cartItems.length ? "Check out" : "Empty"}
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProps: cart => dispatch(toggleCartHiddenAction(cart))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
