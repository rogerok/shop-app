import React from "react";
import { Box, styled, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const StyledSuccesIcon = styled(DoneIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

const StatusSuccess = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <StyledSuccesIcon />
    <Typography variant="h6" paragraph textAlign="center">
      The window will close automatically
    </Typography>
  </Box>
);

export default StatusSuccess;
