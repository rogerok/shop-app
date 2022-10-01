import React, { useMemo } from "react";
import { Typography, Box, Paper } from "@mui/material";

import {
  browserDetect,
  convertBrowserName,
} from "../../../../utils/helpers/browserDetect";
import { UserGeoType } from "../../../../ts/types";

type SessionProps = {
  currentIP: string;
  location?: UserGeoType | undefined;
  previousUserAgent: string;
  previousIP: string;
  previousLocation: UserGeoType;
};

const Sessions: React.FC<SessionProps> = ({
  currentIP,
  location,
  previousUserAgent,
  previousIP,
  previousLocation,
}) => {
  const userAgent = navigator.userAgent.toLowerCase();
  const browser = useMemo(() => browserDetect(), [userAgent]);
  const previousBrowser = useMemo(
    () => convertBrowserName(previousUserAgent),
    [previousUserAgent]
  );

  return (
    <Paper sx={{ p: 2 }} elevation={5}>
      <Box component="section" mb={2}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Active Session
        </Typography>
        <Typography variant="body1">
          <b>Browser:</b> {browser}
        </Typography>
        <Typography variant="body1">
          <b>IP:</b> {currentIP}
        </Typography>
        <Typography variant="body1">
          <b>Location:</b>
          {location ? `${location?.city}, ${location?.country} ` : "unknown"}
        </Typography>
      </Box>
      <Box component="section" mb={2}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Previous Session
        </Typography>
        <Typography variant="body1">
          <b>Browser:</b> {previousBrowser}
        </Typography>
        <Typography variant="body1">
          <b>IP:</b> {previousIP}
        </Typography>
        <Typography variant="body1">
          <b>Location:</b>
          {`${previousLocation?.city}, ${previousLocation?.state} `}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Sessions;
