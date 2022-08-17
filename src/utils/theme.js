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
      primary: "#000000",
      secondary: "#FFFFFF",
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
    ul: {
      styleOverrides: {
        root: {
          listStyleTypes: "none",
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#e313bf",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#cb11ab",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#000000",
            },
          },
        },
      ],
    },
  },

  spacing: 8,
});

export const theme2 = {
  primaryDark: "#000000",
  primaryLight: "#FFFFFF",
  primaryViolet: "#cb11ab",
  violetHovered: "#e313bf",
};
