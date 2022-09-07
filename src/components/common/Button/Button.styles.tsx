import { styled, Button, ButtonProps } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  fontSize: "1rem",
  fontWeight: theme.typography.fontWeightBold,
  transition: `0.3s ${theme.transitions.easing.easeInOut}`,
  "&: hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
