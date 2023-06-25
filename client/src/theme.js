import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#777",
    },
    secondary: {
      main: "#446084",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      ct: 1080,
      xl: 1200,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: `'Roboto Condensed', sans-serif`,
  },
});

export default theme;
