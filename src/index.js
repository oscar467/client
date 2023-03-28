import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae3737",
    },
    secondary: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = "https://api-cloths-production.up.railway.app/api/v1/";
// axios.defaults.baseURL = "http://localhost:3001/api/v1/";
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
