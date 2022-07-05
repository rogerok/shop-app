import React from "react";
import { styled } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const StyledSuccesIcon = styled(DoneIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

const StatusSuccess = () => <StyledSuccesIcon />;

export default StatusSuccess;
