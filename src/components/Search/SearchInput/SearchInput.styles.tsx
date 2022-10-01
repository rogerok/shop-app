import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  position: "relative",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "1.5rem",
  },
  "& .Mui-focused": {
    backgroundColor: theme.palette.primary.light,
  },
}));
