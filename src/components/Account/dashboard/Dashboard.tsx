import React from "react";
import { Container, Grid } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { selectUserData } from "../../../store/user/userSlice";

import Favorites from "./Favorites/Favorites";
import Orders from "./Orders/Orders";
import Reviews from "./Reviews/Reviews";
import User from "./User/User";

const Account = () => {
  const userData = useAppSelector(selectUserData)!;
  const { firstName, lastName, email, phone, image } = userData;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={10} justifyContent="space-around">
        <Grid item xs={4}>
          <User data={{ firstName, lastName, email, phone, image }} />
        </Grid>
        <Grid item xs={8}>
          <Reviews />
        </Grid>
        <Grid item xs={6}>
          <Favorites />
        </Grid>
        <Grid item xs={6}>
          <Orders />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
