import React from "react";
import { styled } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const StyledErrorIcon = styled(ErrorIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

const StatusError = () => <StyledErrorIcon />;

export default StatusError;
