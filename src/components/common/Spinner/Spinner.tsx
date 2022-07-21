import React from "react";
import { CircularProgress, CircularProgressProps, styled } from "@mui/material";

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

type SpinnerProps = CircularProgressProps;

const Spinner: React.FC<SpinnerProps> = () => <StyledCircularProgress />;

export default Spinner;
