import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import RouterApp from "./router";
import SnackbarBase from "./components/SnackbarBase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarBase>
        <CssBaseline></CssBaseline>
        <RouterApp></RouterApp>
      </SnackbarBase>
    </ThemeProvider>
  </Provider>
);
