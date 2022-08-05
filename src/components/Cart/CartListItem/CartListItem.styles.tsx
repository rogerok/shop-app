import { Card, CardActions, CardProps, styled } from "@mui/material";

export const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "120px",
}));
