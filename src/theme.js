import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      500: "#9e9e9e9e",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#cb11ab",
      dark: "#e313bf",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export const theme2 = {
  primaryDark: "#000000",
  primaryLight: "#FFFFFF",
  primaryViolet: "#cb11ab",
  violetHovered: "#e313bf",
};
