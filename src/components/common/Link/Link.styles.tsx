import { styled, Link } from "@mui/material";
import { LinkProps } from "../../../ts/types";

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  fontSize: "1rem",
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  "&: hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
