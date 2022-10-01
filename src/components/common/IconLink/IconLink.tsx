import React, { FC } from "react";
import { Typography, IconProps } from "@mui/material";
import { LinkProps } from "../../../ts/ComponentsTypes";
import { StyledIconLink } from "./IconLink.styles";

type IconLinkProps = {
  name: string;
  path?: string;
  icon: React.ReactElement;
  iconProps?: IconProps;
  href?: string;
} & Partial<LinkProps>;

const IconLink: FC<IconLinkProps> = ({
  name,
  path,
  icon,
  iconProps,
  component,
  href,
  ...props
}) => (
  <StyledIconLink to={path || ""} component={component} href={href} {...props}>
    {React.cloneElement(icon, { ...iconProps })}
    <Typography variant="body1" component="span" fontWeight={300}>
      {name}
    </Typography>
  </StyledIconLink>
);

export default IconLink;
