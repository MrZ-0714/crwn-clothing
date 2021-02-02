import React from "react";
//css
import "./collection-item.styles.scss";
//components
import CustomButton from "../custom-button/custom-button.component";
//Redux
import { connect } from "react-redux";
import { addItemAction } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItemProps }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <CustomButton onClick={() => addItemProps(item)} isInverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemProps: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
