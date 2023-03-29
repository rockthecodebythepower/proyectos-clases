import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stock from "./pages/Stock/Stock";
import EditProduct from "./pages/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import { stock } from "./data/data";

function App() {

  const [isDark, setIsDark] = useState(false);
  const [products, setProducts] = useState([...stock]);

  return (
    <>
      <Header isDarkProp={isDark} setIsDarkProp={setIsDark}/>
      <Routes>
        <Route path="/home" element={<Home isDarkProp={isDark} />} />
        <Route path="/stock" element={<Stock isDarkProp={isDark} productsProp={products}/>} />
        <Route path="/stock/:id" element={<EditProduct isDarkProp={isDark} productsProp={products} setProductsProp={setProducts}/>} />
        <Route path="*" element={<Home isDarkProp={isDark} />} />
      </Routes>
    </>
  );
}

export default App;
