/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import { Box, Container } from "@mui/material";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// styled components

import { StyledAppBar, StyledIconButton } from "./styles";

const styles = {
  homeLink: {
    color: "primary.contrastText",
    userSelect: "none",
  },
  textField: {
    borderRadius: "100%",
    ":focus": {
      backgroundColor: "white",
    },
  },
  searchIcon: {
    color: "primary.500",
  },
};
function Header() {
  return (
    <Grid item xs={12}>
      <StyledAppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
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
            <Typography variant="h4" component="span" noWrap>
              CHERRYBERRIES
            </Typography>
          </Link>

          <form style={{ width: " 40%" }}>
            <TextField
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
              sx={styles.textField}
            />
          </form>
          <Link
            to="/"
            component={NavLink}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocationOnIcon color="primary" fontSize="large" />
            <Typography variant="body1" component="span" fontWeight={300}>
              Адреса
            </Typography>
          </Link>
          <Link to="/" component={NavLink}>
            <PersonIcon color="primary" fontSize="large" />
          </Link>
          <Link to="/" component={NavLink}>
            <ShoppingCartIcon color="primary" fontSize="large" />
          </Link>
        </Toolbar>
      </StyledAppBar>
    </Grid>
  );
}

export default Header;
