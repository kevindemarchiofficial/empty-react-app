import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Assets
import "./index.css";

// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(app);
