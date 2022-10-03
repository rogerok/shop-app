import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Outlet } from "react-router-dom";
import { RoutesNames } from "../../router/routes";

import CustomLink from "../common/CustomLink/CustomLink";

const Account = () => (
  <Grid container spacing={4} width="100%" my={2} justifyContent="center">
    <Grid
      container
      display={{ xs: "none", md: "flex" }}
      justifyContent="space-around"
      component="ul"
    >
      <Grid item lg={4} component="li">
        <CustomLink to={RoutesNames.ACCOUNT_DASHBOARD}>
          <Box
            component="p"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <AccountCircleIcon />
            <Typography variant="body1" component="span" fontWeight={600} p={1}>
              Dashboard
            </Typography>
          </Box>
        </CustomLink>
      </Grid>
      <Grid item lg={4} component="li">
        <CustomLink to={RoutesNames.ACCOUNT_FAVORITES}>
          <Box
            component="p"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <FavoriteIcon />
            <Typography variant="body1" component="span" fontWeight={600} p={1}>
              Favorites
            </Typography>
          </Box>
        </CustomLink>
      </Grid>
      <Grid item lg={4} component="li">
        <CustomLink to={RoutesNames.ACCOUNT_ORDERS}>
          <Box
            component="p"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ShoppingCartIcon />
            <Typography variant="body1" component="span" fontWeight={600} p={1}>
              Orders
            </Typography>
          </Box>
        </CustomLink>
      </Grid>
    </Grid>
    <Grid item lg={12}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Account;
