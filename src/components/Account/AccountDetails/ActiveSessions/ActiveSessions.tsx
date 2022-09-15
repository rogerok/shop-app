import React, { useMemo } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { UserData } from "../../../../ts/UserData";
import {
  browserDetect,
  convertBrowserName,
} from "../../../../utils/helpers/browserDetect";
import { UserGeoType } from "../../../../ts/types";
import { StyledPaper } from "../../Account.styles";

type ActiveSessionProps = Pick<UserData, "macAddress"> & {
  currentIP: string;
  location?: UserGeoType | undefined;
  previousUserAgent: string;
  previousIP: string;
};

const ActiveSessions: React.FC<ActiveSessionProps> = ({
  macAddress,
  currentIP,
  location,
  previousUserAgent,
  previousIP,
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
      </Box>
    </Paper>
  );
};

export default ActiveSessions;
