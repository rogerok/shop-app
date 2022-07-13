import {
  styled,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Link,
} from "@mui/material";
import { LinkProps } from "../../ts/types";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundImage: `linear-gradient(
    to right,
    rgb(203, 17, 171) 0px,
    rgb(72, 17, 115) 100%
  )`,
  padding: theme.spacing(4),
  borderRadius: "0 0 -20% 0",
}));

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-around;
`;

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "10%",
  marginRight: theme.spacing(2),
  color: theme.palette.text.secondary,
  "& .MuiSvgIcon-root": {
    fontSize: "2rem",
  },
}));

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

export const Logo = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  userSelect: "none",
}));
