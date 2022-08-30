import React from "react";
import { Container, Grid, Paper } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { selectUserData, selectUserIP } from "../../redux/user/userSlice";

import ActiveSessions from "./ActiveSessions/ActiveSessions";
import Favorite from "./Favorite/Favorite";
import UserInfo from "./UserInfo/UserInfo";
import UserReviews from "./UserReviews/UserReviews";
import UserOrders from "./UserOrders/UserOrders";
import { UserData } from "../../ts/UserData";
import usePosition from "../../hooks/usePosition";
import { useGetUserGeoQuery } from "../../services/personalSafetyApi";

const components = [
  ActiveSessions,
  Favorite,
  UserInfo,
  UserReviews,
  UserOrders,
];

const Account = () => {
  const userData = useAppSelector(selectUserData)!;
  const {
    firstName,
    lastName,
    userAgent,
    birthDate,
    age,
    email,
    macAddress,
    phone,
    bank,
    id,
    image,
  } = userData;
  const userIP = useAppSelector(selectUserIP) || "unknow";
  const { position, skip } = usePosition();
  const { data: location } = useGetUserGeoQuery(position, {
    skip,
  });
  console.log(location);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <UserInfo
            data={{ firstName, lastName, age, birthDate, email, phone, image }}
          />
        </Grid>
        <Grid item xs={4}>
          <ActiveSessions macAddress={macAddress} currentIP={userIP} />
        </Grid>
        <Grid item xs={4}>
          <Favorite />
        </Grid>
        <Grid item xs={4}>
          <UserReviews />
        </Grid>
        <Grid item xs={4}>
          <UserOrders />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
