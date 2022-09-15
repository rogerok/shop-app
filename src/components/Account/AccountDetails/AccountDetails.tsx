import React, { useMemo } from "react";
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Stack,
} from "@mui/material";

import usePosition from "../../../hooks/usePosition";
import { useGetUserGeoQuery } from "../../../services/personalSafetyApi";
import { useAppSelector } from "../../../hooks/redux";
import { selectUserData, selectUserIP } from "../../../redux/user/userSlice";

import ActiveSessions from "./ActiveSessions/ActiveSessions";
import PersonalData from "../PersonalData/PersonalDataItem";
import PersonalDataHeader from "../PersonalData/PersonalDataHeader";

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
    birthDate,
  } = userData;

  const userIP = useAppSelector(selectUserIP) || "unknow";
  const { position, skip } = usePosition();
  const { data: location } = useGetUserGeoQuery(position, {
    skip,
  });
  const formattedBirthDate = useMemo(
    () => birthDate.split("-").reverse().join("."),
    [birthDate]
  );

  const personalData = useMemo(
    () => [
      {
        title: "Email",
        content: email,
      },
      {
        title: "Birth Date",
        content: formattedBirthDate,
      },
      {
        title: "Phone number",
        content: email,
      },
    ],
    [email, phone, birthDate]
  );

  return (
    <Container>
      <Paper elevation={5} sx={{ px: 4, py: 2 }}>
        <Grid container component="section">
          <Grid item xs={12} display="flex" alignItems="center" mb={4}>
            <PersonalDataHeader
              firstName={firstName}
              lastName={lastName}
              image={image}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            px={2}
          >
            {personalData.map(({ title, content }) => (
              <Stack>
                <PersonalData key={title} title={title} content={content} />
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Paper>
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
