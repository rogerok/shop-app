import { styled, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundImage: `linear-gradient(
    to right,
    rgb(203, 17, 171) 0px,
    rgb(72, 17, 115) 100%
  )`,
  pt: 2,
  pb: 2,
  mb: 2,
}));
