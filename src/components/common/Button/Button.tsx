import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { StyledButton } from "./Button.styles";

type ButtonProps = MuiButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
