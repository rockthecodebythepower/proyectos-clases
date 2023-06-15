import "./Products.css";
import Button from "../Button/Button";
import { useState } from "react";

const Products = () => {
  const [selectedLayout, setSelectedLayout] = useState("☰");

  const handleClick = (layout) => {
    setSelectedLayout(layout);
  };

  return (
    <section className="products">
      <h2>Products</h2>
      <nav>
        <Button
          category="☰"
          selected={selectedLayout === "☰"}
          onClick={() => handleClick("☰")}
        />
        <Button
          category="□"
          selected={selectedLayout === "□"}
          onClick={() => handleClick("□")}
        />
      </nav>
      <ul className={selectedLayout === "□" ? "gallery" : ""}>
        <li>Laptop</li>
        <li>Desktop Computer</li>
        <li>Wireless Router</li>
        <li>External Hard Drive</li>
        <li>Gaming Mouse</li>
      </ul>
    </section>
  );
};

export default Products;
