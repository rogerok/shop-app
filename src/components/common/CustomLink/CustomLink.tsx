import React from "react";
import { Link as RouterLink, useLocation, useMatch } from "react-router-dom";
import { LinkProps } from "../../../ts/ComponentsTypes";
import { StyledLink } from "./CustomLink.styles";

const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  // TODO useMatch не работает, решить проблему

  const selected = useLocation().pathname.includes(to);

  return (
    <StyledLink component={RouterLink} to={to} selected={selected} {...props}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;
