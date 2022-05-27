/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
// Mui components
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { IconButton, List, ListItem } from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// components
import Sidebar from "../nav/Sidebar";
// styled components

import {
  StyledAppBar,
  StyledIconButton,
  StyledTextField,
  StyledToolbar,
  HeaderNavLink,
} from "./styles";

const styles = {
  homeLink: {
    color: "primary.contrastText",
    userSelect: "none",
  },
  searchIcon: {
    color: "primary.500",
  },
};

interface HeaderLinkProps {
  name: string;
  path: string;
  icon: React.ReactElement;
}

const data: HeaderLinkProps[] = [
  {
    name: "Аккаунт",
    path: "account",
    icon: <PersonIcon />,
  },
  {
    name: "Адреса",
    path: "adress",
    icon: <LocationOnIcon />,
  },
  {
    name: "Корзина",
    path: "cart",
    icon: <ShoppingCartIcon />,
  },
];

const HeaderLink: FC<HeaderLinkProps> = ({ name, path, icon }) => (
  <HeaderNavLink to={path} component={NavLink}>
    {icon}
    {/*  <LocationOnIcon fontSize="large" /> */}
    <Typography variant="body1" component="span" fontWeight={300}>
      {name}
    </Typography>
  </HeaderNavLink>
);

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <Grid item xs={12}>
        <StyledAppBar position="static">
          <StyledToolbar>
            <StyledIconButton
              color="inherit"
              size="large"
              onClick={() => toggleOpen(true)}
            >
              <MenuIcon />
            </StyledIconButton>
            <Link to="/" component={NavLink} sx={styles.homeLink} variant="h4">
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
            {data.map((link) => (
              <HeaderLink key={link.path} {...link} />
            ))}
          </StyledToolbar>
        </StyledAppBar>
      </Grid>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
};

export default Header;
