import { styled, Link } from "@mui/material";

import { LinkProps } from "../../../ts/ComponentsTypes";

export const StyledLink = styled(Link)<LinkProps>(
  ({ withBackground, selected, theme }) => ({
    ...(withBackground
      ? {
          p: theme.spacing(2),
          backgroundColor: theme.palette.secondary.main,
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.text.secondary,
          fontSize: "1rem",
          fontWeight: theme.typography.fontWeightBold,
          textTransform: "uppercase",
          transition: `0.3s ${theme.transitions.easing.easeInOut}`,
          "&: hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }
      : {
          color: theme.palette.text.primary,
          py: theme.spacing(2),
          fontSize: "1rem",
          fontWeight: theme.typography.fontWeightBold,
          textTransform: "uppercase",
          textAlign: "center",
          transition: `0.3s ${theme.transitions.easing.easeInOut}`,
          "&: hover": {
            color: theme.palette.secondary.dark,
          },
        }),
    ...(selected && {
      color: theme.palette.secondary.dark,
    }),
  })
);
