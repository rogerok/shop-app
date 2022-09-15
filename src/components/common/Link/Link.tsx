import React from "react";
import { Link as RouterLink, useLocation, useMatch } from "react-router-dom";
import { LinkProps } from "../../../ts/ComponentsTypes";
import { StyledLink } from "./Link.styles";

const Link: React.FC<LinkProps> = ({ to, children, ...props }) => {
  // TODO useMatch не работает, решить проблему

  /*  const selected = useMatch({
    path: `${to}`,
    end: false,
  }); */

  const selected = useLocation().pathname.includes(to);

  return (
    <StyledLink component={RouterLink} to={to} selected={selected} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
