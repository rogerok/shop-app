import React from "react";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReviewsIcon from "@mui/icons-material/Reviews";

import { Outlet } from "react-router-dom";
import { RoutesNames } from "../../router/routes";

import CustomLink from "../common/CustomLink/CustomLink";

const Account = () => (
  <Grid container spacing={4} component="ul" width="100%">
    <Grid item xs={4} component="li">
      <CustomLink to={RoutesNames.ACCOUNT_DASHBOARD}>
        <AccountCircleIcon />
        <Typography variant="body1" component="span" fontWeight={600} p={1}>
          Dashboard
        </Typography>
      </CustomLink>
    </Grid>
    <Grid item xs={4} component="li">
      <CustomLink to={RoutesNames.ACCOUNT_FAVORITES}>
        <FavoriteIcon />
        <Typography variant="body1" component="span" fontWeight={600} p={1}>
          Favorites
        </Typography>
      </CustomLink>
    </Grid>
    <Grid item xs={4} component="li">
      <CustomLink to={RoutesNames.ACCOUNT_ORDERS}>
        <ShoppingCartIcon />
        <Typography variant="body1" component="span" fontWeight={600} p={1}>
          Orders
        </Typography>
      </CustomLink>
    </Grid>
    <Outlet />
  </Grid>
);

export default Account;
