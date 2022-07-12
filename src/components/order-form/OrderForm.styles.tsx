import { styled, TextField, TextFieldProps } from "@mui/material";

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.dark,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
  })
);
