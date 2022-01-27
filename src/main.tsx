import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainContext from "./context/mainContext";

render(
  <StrictMode>
    <BrowserRouter>
      <MainContext>
        <App />
      </MainContext>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
