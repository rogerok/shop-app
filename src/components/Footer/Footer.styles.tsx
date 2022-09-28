import { styled, Box } from "@mui/material";

export const StyledFooter = styled(Box)(({ theme }) => ({
  position: "relative",
  left: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  minHeight: "10vh",
  backgroundColor: "#481173",
  padding: theme.spacing(4),
  borderRadius: "0 0 -20% 0",
  color: theme.palette.text.secondary,
  "&::before": {
    content: "''",
    display: "block",
    background: theme.palette.primary.light,
    borderRadius: " 0 0 24px 24px",
    width: "100%",
    height: "24px",
    position: "absolute",
    top: "-1px",
    left: "0",
  },
}));
