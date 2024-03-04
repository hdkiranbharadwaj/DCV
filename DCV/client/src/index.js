import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import ViewerPage from "./public-components/ViewerPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/:userid" element={<ViewerPage />} />
    </Routes>
  </BrowserRouter>
);
