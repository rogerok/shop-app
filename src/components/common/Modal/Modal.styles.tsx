import { CircularProgress, Container, styled } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";

export const StyledContainer = styled(Container)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "30vh",
  width: "30vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.light,
  boxShadow: theme.shadows[24],
}));
