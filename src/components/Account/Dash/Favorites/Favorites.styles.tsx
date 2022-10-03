import { AvatarGroup, styled } from "@mui/material";

export const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  "& .MuiAvatar-colorDefault": {
    backgroundColor: theme.palette.secondary.light,
  },
  "& .MuiAvatar-root": {
    width: "96px",
    height: "96px",
    fontSize: "2rem",
  },
}));
