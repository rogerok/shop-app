import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "../../../ts/types";
import { StyledLink } from "./Link.styles";

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const s = 0;
  return (
    <StyledLink component={RouterLink} to={to}>
      {children}
    </StyledLink>
  );
};

export default Link;
