import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ModeProvider from "./context/modeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/userProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModeProvider>
  </UserProvider>
);
