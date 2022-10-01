import React from "react";
import { Box, styled, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";

export const StyledErrorIcon = styled(ErrorIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

export const StyledSuccesIcon = styled(DoneIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: theme.typography.pxToRem(100),
}));

type StatusComponentProps = {
  isError: boolean;
  isSucces: boolean;
  errorMessage?: string;
  succesMessage?: string;
};

const StatusComponent: React.FC<StatusComponentProps> = ({
  isError,
  isSucces,
  succesMessage,
  errorMessage,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    {isError ? <StyledErrorIcon /> : <StyledSuccesIcon />}
    <Typography variant="h6" paragraph textAlign="center">
      {isError
        ? errorMessage || "Something went wrong..."
        : succesMessage || "Succes! The window will close automatically"}
    </Typography>
  </Box>
);

export default StatusComponent;
