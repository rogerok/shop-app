import { styled, Link } from "@mui/material";
import { LinkProps } from "../../../ts/ComponentsTypes";

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  fontSize: "1rem",
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  transition: `0.3s ${theme.transitions.easing.easeInOut}`,
  "&: hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
