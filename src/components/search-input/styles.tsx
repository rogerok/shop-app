import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  "& .MuiOutlinedInput-root": {
    borderRadius: "1.5rem",
    background: " rgba(255, 255, 255, 0.2)",
  },
  "& .Mui-focused": {
    backgroundColor: theme.palette.primary.light,
    border: "none",
    color: theme.palette.text.primary,
    outlineColor: theme.palette.grey[500],
  },
}));
