import { styled, Link } from "@mui/material";
import { LinkProps } from "../../../ts/types";

export const StyledIconLink = styled(Link)<LinkProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
  transition: `0.2s color ${theme.transitions.easing.sharp}`,
  "&: MuiSvgIcon-root": {
    fontSize: "4rem",
    color: theme.palette.text.secondary,
  },
  "&: hover": {
    color: theme.palette.text.primary,
  },
}));
