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
  spacing: 8,
});

export default theme;
