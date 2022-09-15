import React from "react";
import { Container, List, ListItem, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Outlet } from "react-router-dom";

import Link from "../common/Link/Link";
import { RoutesNames } from "../../router/routes";

const Account = () => (
  <Container maxWidth="xl">
    <List sx={{ display: "flex" }}>
      <ListItem>
        <Link to={RoutesNames.ACCOUNT_DASHBOARD}>
          <AccountCircleIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Dashboard
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link to={RoutesNames.ACCOUNT_FAVORITES}>
          <FavoriteIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Favorites
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link to={RoutesNames.ACCOUNT_ORDERS}>
          <ShoppingCartIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Orders
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link to={RoutesNames.ACCOUNT_REVIEWS}>
          <ReviewsIcon />
          <Typography variant="body1" component="span" fontWeight={600} p={1}>
            Reviews
          </Typography>
        </Link>
      </ListItem>
    </List>
    <Outlet />
  </Container>
);

export default Account;
