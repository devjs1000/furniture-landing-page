import {StrictMode} from "react";
import {render} from "react-dom";
import "./index.css";
import "./global.css";

import App from "./App";
import MainContext from "./context/mainContext";

render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>,
  document.getElementById("root")
);
