import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "reset.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <App />
  </Router>,
);