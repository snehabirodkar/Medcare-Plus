import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./Components/MobileResponsive.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
