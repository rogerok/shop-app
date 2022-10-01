import React from "react";
import { Container, List, ListItem, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReviewsIcon from "@mui/icons-material/Reviews";

import { Outlet } from "react-router-dom";
import { RoutesNames } from "../../router/routes";

import CustomLink from "../common/CustomLink/CustomLink";

const Account = () => (
  <Container maxWidth="xl">
    <List sx={{ display: "flex" }}>
      <ListItem>
        <CustomLink to={RoutesNames.ACCOUNT_DASHBOARD}>
          <AccountCircleIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Dashboard
          </Typography>
        </CustomLink>
      </ListItem>
      <ListItem>
        <CustomLink to={RoutesNames.ACCOUNT_FAVORITES}>
          <FavoriteIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Favorites
          </Typography>
        </CustomLink>
      </ListItem>
      <ListItem>
        <CustomLink to={RoutesNames.ACCOUNT_ORDERS}>
          <ShoppingCartIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Orders
          </Typography>
        </CustomLink>
      </ListItem>
      <ListItem>
        <CustomLink to={RoutesNames.ACCOUNT_REVIEWS}>
          <ReviewsIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Reviews
          </Typography>
        </CustomLink>
      </ListItem>
    </List>
    <Outlet />
  </Container>
);

export default Account;
