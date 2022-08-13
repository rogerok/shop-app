import React from "react";
import { RadioProps as MuiRadioProps } from "@mui/material";
import { StyledRadio } from "./Radio.styles";

type RadioProps = MuiRadioProps;

const Radio: React.FC<RadioProps> = ({ ...props }) => (
  <StyledRadio {...props} />
);

export default Radio;
