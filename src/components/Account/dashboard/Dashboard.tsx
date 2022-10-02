import React from "react";
import { Container, Grid, Stack, Box } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { selectUserData } from "../../../store/user/userSlice";

import Favorites from "./Favorites/Favorites";
import Orders from "./Orders/Orders";
import User from "./User/User";

const Account = () => {
  const userData = useAppSelector(selectUserData)!;
  const { firstName, lastName, email, phone, image } = userData;

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <User data={{ firstName, lastName, email, phone, image }} />
      </Grid>
      <Grid item xs={4}>
        <Favorites />
      </Grid>
      <Grid item xs={4}>
        <Orders />
      </Grid>
    </Grid>
  );
};

export default Account;
