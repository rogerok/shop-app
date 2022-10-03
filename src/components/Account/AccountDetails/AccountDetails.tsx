import React, { useMemo } from "react";
import { Container, Paper, Grid, Box } from "@mui/material";

import usePosition from "../../../hooks/usePosition";
import { useGetUserGeoQuery } from "../../../services/personalSafetyApi";
import { useAppSelector } from "../../../hooks/redux";
import { selectUserData, selectUserIP } from "../../../store/user/userSlice";

import PersonalDataItem from "../PersonalData/PersonalDataItem";
import PersonalDataHeader from "../PersonalData/PersonalDataHeader";
import Sessions from "./Sessions/Sessions";

const AccountDetails = () => {
  const userData = useAppSelector(selectUserData)!;
  const {
    firstName,
    lastName,
    userAgent,
    email,
    phone,
    image,
    ip,
    birthDate,
    address: { city, state },
    bank,
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
    <Container maxWidth="xl">
      <Paper elevation={5} sx={{ px: 4, pt: 2, pb: 4, mb: 4 }}>
        <Grid container component="section">
          <Grid item xs={12} display="flex" alignItems="center" mb={4}>
            <PersonalDataHeader
              firstName={firstName}
              lastName={lastName}
              image={image}
            />
          </Grid>
          <Grid container item xs={12} display="flex" spacing={4} px={2}>
            {personalData.map(({ title, content }) => (
              <Grid item lg={4} md={6} sm={6}>
                <PersonalDataItem key={title} title={title} content={content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
      <Box mb={4}>
        <Sessions
          currentIP={userIP}
          location={location}
          previousUserAgent={userAgent}
          previousIP={ip}
          previousLocation={{ city, state }}
        />
      </Box>
    </Container>
  );
};

export default AccountDetails;
