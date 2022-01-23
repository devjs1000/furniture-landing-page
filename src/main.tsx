import {StrictMode} from "react";
import {render} from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter } from 'react-router-dom'
import MainContext from "./context/mainContext";

render(
  <StrictMode>
    <MainContext>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </MainContext>
  </StrictMode>,
  document.getElementById("root")
);
