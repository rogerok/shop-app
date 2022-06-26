import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  fontSize: "1.rem",
  fontWeight: theme.typography.fontWeightMedium,
  "&: hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
