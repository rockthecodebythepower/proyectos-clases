import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {createGlobalStyle} from "styled-components"
import "./index.css"

const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.1rem;
}
body{
  background-color: whitesmoke;
}
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
