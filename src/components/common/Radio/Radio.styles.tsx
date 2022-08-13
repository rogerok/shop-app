import { styled, Radio } from "@mui/material";

export const StyledRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.secondary.light,
  "&.Mui-checked": {
    color: theme.palette.secondary.dark,
  },
}));
