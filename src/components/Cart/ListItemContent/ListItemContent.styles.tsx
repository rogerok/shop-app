import { CardMedia, CardContent, styled } from "@mui/material";

export const StyledCardMedia = styled(CardMedia)<{
  component?: React.ElementType;
}>(({ theme }) => ({
  width: "80px",
  height: "100px",
  aspectRatio: "1/1",
}));

export const StyledCardContent = styled(CardContent)<{
  component?: React.ElementType;
}>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "30%",
}));
