import { List, Paper, styled } from "@mui/material";

export const StyledList = styled(List)(({ theme }) => ({
  /*  position: "absolute", */
  top: "100%",
  left: "0",
  zIndex: "29",
  width: "100%",
  minHeight: "20vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "5px",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 10px)",
  left: 0,
  minHeight: "20vh",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));
