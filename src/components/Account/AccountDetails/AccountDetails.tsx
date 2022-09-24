import React, { useMemo } from "react";
import { Container, Paper, Grid, Stack, Box, Typography } from "@mui/material";

import usePosition from "../../../hooks/usePosition";
import { useGetUserGeoQuery } from "../../../services/personalSafetyApi";
import { useAppSelector } from "../../../hooks/redux";
import { selectUserData, selectUserIP } from "../../../redux/user/userSlice";

import Sessions from "./Sessions/Sessions";
import PersonalDataItem from "../PersonalData/PersonalDataItem";
import PersonalDataHeader from "../PersonalData/PersonalDataHeader";

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
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            px={2}
          >
            {personalData.map(({ title, content }) => (
              <Stack>
                <PersonalDataItem key={title} title={title} content={content} />
              </Stack>
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

      <Paper elevation={5} sx={{ p: 4 }}>
        <Box
          sx={{
            width: "30%",
            height: "80%",
            backgroundColor: "pink",
            borderRadius: "5px",
            p: 2,
          }}
        >
          <Typography variant="body1" mb={6}>
            Main card
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" gutterBottom>
              {bank.cardNumber}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bank.cardExpire}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AccountDetails;
