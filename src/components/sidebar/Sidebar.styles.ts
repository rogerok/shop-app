import { styled, List } from "@mui/material";

export const StyledList = styled(List)(({ theme }) => ({
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
