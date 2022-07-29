import React, { FC } from "react";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";
import { StyledIconLink } from "./IconLink.styles";

type IconLinkProps = {
  name: string;
  path: string;
  icon: React.ReactElement;
};

const data: IconLinkProps[] = [
  {
    name: "Account",
    path: "account",
    icon: <PersonIcon />,
  },
  {
    name: "Addresses",
    path: "addresses",
    icon: <LocationOnIcon />,
  },
];

const IconLink: FC<IconLinkProps> = ({ name, path, icon }) => (
  <StyledIconLink to={path} component={NavLink}>
    {icon}
    <Typography variant="body1" component="span" fontWeight={300}>
      {name}
    </Typography>
  </StyledIconLink>
);

export default IconLink;
