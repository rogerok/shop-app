import React from "react";
import { Typography, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";
import { RoutesNames } from "../../router/routes";
import { useAppDispatch } from "../../hooks/redux";
import { setSidebarOpen } from "../../store/ui/uiSlice";

import SearchInput from "../Search/SearchInput/SearchInput";
import IconLink from "../common/IconLink/IconLink";
import CartIcon from "./CartIcon/CartIcon";
import {
  StyledAppBar,
  StyledIconButton,
  StyledToolbar,
  Logo,
} from "./Header.styles";

const iconLinksData = [
  {
    title: "Account",
    path: `${RoutesNames.ACCOUNT_PAGE}/${RoutesNames.ACCOUNT_DASHBOARD}`,
    icon: <PersonIcon />,
  },
  {
    title: "Addresses",
    path: "addresses",
    icon: <LocationOnIcon />,
  },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const handleSidebarOpen = () => dispatch(setSidebarOpen(true));

  return (
    <Grid item xs={12} position="relative">
      <StyledAppBar position="static" elevation={0}>
        <StyledToolbar>
          <StyledIconButton
            color="inherit"
            size="large"
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </StyledIconButton>
          <Logo to="/" variant="h4" component={NavLink}>
            <Typography
              variant="h2"
              component="span"
              sx={{
                typography: { lg: "h3", md: "h5" },
                fontWeight: { md: 500 },
              }}
            >
              CHERRYBERRIES
            </Typography>
          </Logo>

          <SearchInput />
          {iconLinksData.map((link) => (
            <IconLink
              key={link.path}
              {...link}
              component={NavLink}
              icon={link.icon}
            >
              <Typography variant="body1" component="span" fontWeight={300}>
                {link.title}
              </Typography>
            </IconLink>
          ))}
          <CartIcon />
        </StyledToolbar>
      </StyledAppBar>
    </Grid>
  );
};
export default Header;
