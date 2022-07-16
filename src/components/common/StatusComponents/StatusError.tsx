import React from "react";
import { Box, styled, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const StyledErrorIcon = styled(ErrorIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

const StatusError = () => (
  <Box>
    <StyledErrorIcon />
    <Typography variant="h6" paragraph>
      Something went wrong...
    </Typography>
  </Box>
);

export default StatusError;
