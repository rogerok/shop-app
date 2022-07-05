import React from "react";
import { CircularProgress, styled } from "@mui/material";

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const StatusLoading = () => <StyledCircularProgress />;

export default StatusLoading;
