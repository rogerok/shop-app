import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "../../../ts/ComponentsTypes";
import { StyledLink } from "./Link.styles";

const Link: React.FC<LinkProps> = ({ to, children }) => (
  <StyledLink component={RouterLink} to={to}>
    {children}
  </StyledLink>
);

export default Link;
