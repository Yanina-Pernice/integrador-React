import React from "react";
import { StyledButton } from "./ButtonStyles";

const Button = ({
  children,
  radius = "10",
  disabled = false,
  onClick,
  style
}) => {
  return (
    <StyledButton
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
      radius={radius}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
