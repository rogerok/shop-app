import { styled, Button, ButtonProps } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  fontSize: "1rem",
  fontWeight: theme.typography.fontWeightBold,
  "&: hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
