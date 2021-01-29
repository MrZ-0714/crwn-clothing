import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherCustomButtonProps
}) => (
  <button
    className={`
      ${isGoogleSignIn ? "google-sign-in" : ""} 
      ${isInverted ? "is-inverted" : ""} 
      custom-button
      `}
    {...otherCustomButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
