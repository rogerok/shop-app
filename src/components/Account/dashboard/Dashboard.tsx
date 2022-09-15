import React from "react";
import { Container, Grid } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { selectUserData } from "../../../redux/user/userSlice";
import Favorites from "./Favorites/Favorites";
import Orders from "./Orders/Orders";
import User from "./User/User";
import Reviews from "./Reviews/Reviews";

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
        <Grid item xs={6}>
          <Favorites />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
