import React, { FC, useEffect } from "react";

import { Typography, Grid, InputAdornment, Badge } from "@mui/material";

import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  getTotalQuantity,
  selectTotalQuantity,
} from "../../redux/cart/cartSlice";
import { setSidebarOpen } from "../../redux/sidebar/sidebarSlice";

import {
  StyledAppBar,
  StyledIconButton,
  StyledTextField,
  StyledToolbar,
  StyledIconLink,
  Logo,
} from "./styles";

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
];

const HeaderIconLink: FC<IconLinkProps> = ({ name, path, icon }) => (
  <StyledIconLink to={path} component={NavLink}>
    {icon}
    <Typography variant="body1" component="span" fontWeight={300}>
      {name}
    </Typography>
  </StyledIconLink>
);

const HeaderCartIcon = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const cartQuantity = useAppSelector(selectTotalQuantity);

  useEffect(() => {
    dispatch(getTotalQuantity());
  }, [cart, dispatch]);

  return (
    <Badge badgeContent={cartQuantity} overlap="circular" color="secondary">
      <HeaderIconLink name="Корзина" path="/cart" icon={<ShoppingCartIcon />} />
    </Badge>
  );
};

const CartIconMemoized = React.memo(HeaderCartIcon);

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <Grid item xs={12}>
      <StyledAppBar position="static">
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
            <Typography variant="h4" component="span">
              CHERRYBERRIES
            </Typography>
          </Logo>

          <StyledTextField
            name="search"
            type="text"
            placeholder="Я ищу..."
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {data.map((link) => (
            <HeaderIconLink key={link.path} {...link} />
          ))}
          <CartIconMemoized />
        </StyledToolbar>
      </StyledAppBar>
    </Grid>
  );
};
export default Header;
