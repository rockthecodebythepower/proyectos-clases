import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { datos } from "../data.js";

ReactDOM.createRoot(document.getElementById("root")).render(<App datos={datos}/>);