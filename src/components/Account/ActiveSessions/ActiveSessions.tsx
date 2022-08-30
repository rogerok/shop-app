import React, { useMemo } from "react";
import { Paper, Typography } from "@mui/material";
import { UserData } from "../../../ts/UserData";
import { browserDetect } from "../../../utils/helpers/browserDetect";

type ActiveSessionProps = Pick<UserData, "macAddress"> & {
  currentIP: string;
};

const ActiveSessions: React.FC<ActiveSessionProps> = ({
  macAddress,
  currentIP,
}) => {
  const userAgent = navigator.userAgent.toLowerCase();
  const browser = useMemo(() => browserDetect(), [userAgent]);

  return (
    <Paper>
      <Typography variant="h5">Active Session</Typography>
      <Typography variant="body1">Browser: {browser}</Typography>
      <Typography variant="body1">IP: {currentIP}</Typography>
    </Paper>
  );
};

export default ActiveSessions;
