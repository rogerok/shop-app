import React from "react";

import { Typography, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux";
import { setSidebarOpen } from "../../redux/sidebar/sidebarSlice";

import SearchInput from "../Search/SearchInput/SearchInput";
import IconLink from "./IconLink/IconLink";
import CartIcon from "./CartIcon/CartIcon";
import {
  StyledAppBar,
  StyledIconButton,
  StyledToolbar,
  Logo,
} from "./Header.styles";

const iconLinksData = [
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

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <Grid item xs={12} position="relative">
      <StyledAppBar position="static" elevation={0}>
        <StyledToolbar>
          <StyledIconButton
            color="inherit"
            size="large"
            onClick={() => {
              dispatch(setSidebarOpen(true));
            }}
          >
            <MenuIcon />
          </StyledIconButton>
          <Logo to="/" variant="h4" component={NavLink}>
            <Typography variant="h2" component="span">
              CHERRYBERRIES
            </Typography>
          </Logo>

          <SearchInput />
          {iconLinksData.map((link) => (
            <IconLink key={link.path} {...link} />
          ))}
          <CartIcon />
        </StyledToolbar>
      </StyledAppBar>
    </Grid>
  );
};
export default Header;
