/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// styled components

import { StyledAppBar, StyledIconButton, StyledTextField } from "./styles";

const styles = {
  homeLink: {
    color: "primary.contrastText",
    userSelect: "none",
  },
  searchIcon: {
    color: "primary.500",
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "primary.light",
  },
};
function Header() {
  return (
    <Grid item xs={12}>
      <StyledAppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <StyledIconButton color="inherit" size="large">
            <MenuIcon fontSize="large" />
          </StyledIconButton>
          <Link
            to="/"
            component={NavLink}
            sx={styles.homeLink}
            variant="h4"
            noWrap
          >
            <Typography variant="h4" component="span">
              CHERRYBERRIES
            </Typography>
          </Link>

          <form style={{ width: " 40%" }}>
            <StyledTextField
              name="search"
              type="text"
              placeholder="Я ищу..."
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={styles.searchIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <Link to="/" component={NavLink} sx={styles.navLinks}>
            <LocationOnIcon fontSize="large" />
            <Typography variant="body1" component="span" fontWeight={300}>
              Адреса
            </Typography>
          </Link>
          <Link to="/" component={NavLink} sx={styles.navLinks}>
            <PersonIcon color="inherit" fontSize="large" />
            <Typography variant="body1" component="span" fontWeight={300}>
              Аккаунт
            </Typography>
          </Link>
          <Link to="/" component={NavLink} sx={styles.navLinks}>
            <ShoppingCartIcon fontSize="large" />
            <Typography variant="body1" component="span" fontWeight={300}>
              Корзина
            </Typography>
          </Link>
        </Toolbar>
      </StyledAppBar>
    </Grid>
  );
}

export default Header;
