import { styled, Typography } from "@mui/material";

export const DiscountLabel = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "100%",
  padding: theme.spacing(0.5),
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
}));
