import { styled, Typography } from "@mui/material";

export const DiscountLabel = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "0%",
  left: "5%",
  padding: theme.spacing(0.5),
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
}));
