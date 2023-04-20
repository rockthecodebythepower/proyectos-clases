import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import PostPage from "./pages/PostPage"
import About from "./pages/About"
import GlobalStyle from "./globalStyles"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:title" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
