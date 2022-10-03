import React from "react";
import { Grid } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { selectUserData } from "../../../store/user/userSlice";

import Favorites from "./Favorites/Favorites";
import Orders from "./Orders/Orders";
import User from "./User/User";

const Account = () => {
  const userData = useAppSelector(selectUserData)!;
  const { firstName, lastName, email, phone, image } = userData;

  return (
    <Grid container spacing={2} mx="auto">
      <Grid item xs={12} md={12} lg={4}>
        <User data={{ firstName, lastName, email, phone, image }} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Favorites />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Orders />
      </Grid>
    </Grid>
  );
};

export default Account;
