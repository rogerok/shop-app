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
    <Grid container spacing={2}>
      <Grid item lg={4} md={7} sm={12} xs={12}>
        <User data={{ firstName, lastName, email, phone, image }} />
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <Favorites />
      </Grid>
      <Grid item lg={4} md={7} sm={6} xs={12}>
        <Orders />
      </Grid>
    </Grid>
  );
};

export default Account;
