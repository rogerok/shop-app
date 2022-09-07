import React from "react";
import { Container } from "@mui/material";

import usePosition from "../../../hooks/usePosition";
import { useGetUserGeoQuery } from "../../../services/personalSafetyApi";
import { useAppSelector } from "../../../hooks/redux";
import { selectUserData, selectUserIP } from "../../../redux/user/userSlice";

import ActiveSessions from "./ActiveSessions/ActiveSessions";
import User from "../dashboard/User/User";

const AccountDetails = () => {
  const userData = useAppSelector(selectUserData)!;
  const {
    firstName,
    lastName,
    userAgent,
    email,
    macAddress,
    phone,
    image,
    ip,
  } = userData;

  const userIP = useAppSelector(selectUserIP) || "unknow";
  const { position, skip } = usePosition();
  const { data: location } = useGetUserGeoQuery(position, {
    skip,
  });

  return (
    <Container>
      <User data={{ firstName, lastName, email, phone, image }} />
      <ActiveSessions
        macAddress={macAddress}
        currentIP={userIP}
        location={location}
        previousUserAgent={userAgent}
        previousIP={ip}
      />
    </Container>
  );
};

export default AccountDetails;
