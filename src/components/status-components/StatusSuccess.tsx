import React from "react";
import { Box, styled, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const StyledSuccesIcon = styled(DoneIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

const StatusSuccess = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <StyledSuccesIcon />
    <Typography variant="h6" paragraph>
      Окно закроется автоматически
    </Typography>
  </Box>
);

export default StatusSuccess;
