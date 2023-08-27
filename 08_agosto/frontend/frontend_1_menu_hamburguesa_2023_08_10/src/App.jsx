import { useState } from "react";
import "./App.css";
import Hamburguesa from "./components/Hamburguesa/Hamburguesa";
import Header from "./components/Header/Header";

function App() {
  return <>{window.innerWidth < 400 ? <Hamburguesa /> : <Header />}</>;
}

export default App;
