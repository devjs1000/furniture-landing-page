import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import MainContext from "./context/mainContext";

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);
