import { Paper, styled, Link, Box, PaperProps } from "@mui/material";

import { LinkProps } from "../../ts/ComponentsTypes";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  height: "100%",
  boxShadow: theme.shadows[5],
  transition: `0.3s ${theme.transitions.easing.easeInOut}`,
  "&: hover": {
    boxShadow: theme.shadows[20],
    "& .Typography-root": {
      color: "white",
    },
    "& .MuiBox-root": {
      opacity: "1.5",
      cursor: "pointer",
    },
  },
}));

export const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  border: theme.shape.borderRadius,
  transition: `0.3s ${theme.transitions.easing.easeInOut}`,
}));
