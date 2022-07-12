import { SxProps, ButtonProps } from "@mui/material";
import React, { FC } from "react";
import { StyledButton } from "./BasicButton.styles";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  sx?: SxProps;
}

const BasicButton: FC<CustomButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default BasicButton;
