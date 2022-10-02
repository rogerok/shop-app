import React, { ComponentType, FC } from "react";
import { Typography, IconProps } from "@mui/material";
import { LinkProps } from "../../../ts/ComponentsTypes";
import { StyledIconLink } from "./IconLink.styles";

type IconLinkProps = {
  path?: string;
  icon: React.ReactElement<IconProps>;
  href?: string;
} & Partial<LinkProps>;

const IconLink: FC<IconLinkProps> = ({
  path,
  icon,
  component,
  href,
  children,
  ...props
}) => (
  <StyledIconLink to={path || ""} component={component} href={href} {...props}>
    {/*     {React.cloneElement(icon, { ...iconProps })} */}
    {icon}
    {/*     <Typography variant="body1" component="span" fontWeight={300}>
      {name}
    </Typography> */}
    {children}
  </StyledIconLink>
);

export default IconLink;
