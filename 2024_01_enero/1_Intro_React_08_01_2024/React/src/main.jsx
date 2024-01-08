import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const myDiv = document.querySelector("#root");

ReactDOM.createRoot(myDiv).render(<App></App>);