import { Paper, styled, Box, Typography } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  height: "100%",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[5],
  transition: `0.3s ${theme.transitions.easing.easeInOut}`,
  "& .MuiTypography-h5, .MuiTypography-h6": {
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&: hover": {
    boxShadow: theme.shadows[20],
    "& .Typography-root": {
      color: "white",
    },
    "& .MuiBox-root": {
      opacity: "1.5",
      cursor: "pointer",
    },
    "& .MuiTypography-h5, .MuiTypography-h6": {
      color: theme.palette.secondary.main,
    },
  },
}));

export const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: "1",
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
export const StyledTitle = styled(Box)(({ theme }) => ({
  transition: `0.3s ${theme.transitions.easing.easeInOut}`,
  "& .MuiTypography-h5": {},
}));
