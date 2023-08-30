import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header";
import Clients from "./pages/Clients/Clients";
import PostClient from "./pages/PostClient/PostClient";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Clients/>}/>
        <Route path="/altas" element={<PostClient/>}/>
        <Route path="*" element={<Clients/>}/>
      </Routes>
    </>
  )
}

export default App;