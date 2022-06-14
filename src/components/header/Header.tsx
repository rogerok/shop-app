/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// components
import { Typography, Link, Grid, InputAdornment } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
// styled components

import {
  StyledAppBar,
  StyledIconButton,
  StyledTextField,
  StyledToolbar,
  StyledIconLink,
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

type IconLinkProps = {
  name: string;
  path: string;
  icon: React.ReactElement;
};

const data: IconLinkProps[] = [
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

const IconLink: FC<IconLinkProps> = ({ name, path, icon }) => (
  <StyledIconLink to={path} component={NavLink}>
    {icon}
    <Typography variant="body1" component="span" fontWeight={300}>
      {name}
    </Typography>
  </StyledIconLink>
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
            {data.map((link) => (
              <IconLink key={link.path} {...link} />
            ))}
          </StyledToolbar>
        </StyledAppBar>
      </Grid>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
};

export default Header;
