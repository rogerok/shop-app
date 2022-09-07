import React from "react";
import { Container, Grid, Paper } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { selectUserData } from "../../redux/user/userSlice";

import ActiveSessions from "./AccountDetails/ActiveSessions/ActiveSessions";
import Favorites from "./dashboard/Favorites/Favorites";
import User from "./dashboard/User/User";
import Reviews from "./dashboard/Reviews/Reviews";
import Orders from "./dashboard/Orders/Orders";

const components = [ActiveSessions, Favorites, User, Reviews, Orders];

const Account = () => {
  const userData = useAppSelector(selectUserData)!;
  const { firstName, lastName, email, phone, image } = userData;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={10} justifyContent="space-around">
        <Grid item xs={4}>
          <User data={{ firstName, lastName, email, phone, image }} />
        </Grid>
        <Grid item xs={4}>
          <Reviews />
        </Grid>
        <Grid item xs={4}>
          <Orders />
        </Grid>
        <Grid item xs={4}>
          <Favorites />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
