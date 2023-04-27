import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Home from "./pages/Home/Home.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
