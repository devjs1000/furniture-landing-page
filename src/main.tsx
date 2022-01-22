import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter } from 'react-router-dom'
import MainContext from "./context/mainContext";

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);
