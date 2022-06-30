import { SxProps } from "@mui/material";
import React, { FC } from "react";
import { StyledButton } from "./styles";

type CustomButtonProps = {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  sx?: SxProps;
};

const CustomButton: FC<CustomButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default CustomButton;
