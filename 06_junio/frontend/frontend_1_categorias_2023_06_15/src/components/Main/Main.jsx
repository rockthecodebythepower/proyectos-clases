import "./Main.css";
import { useState } from "react";
import Button from "../Button/Button";
import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main>
      <nav>
        <Button
          category="Products"
          selected={selectedCategory === "Products"}
          onClick={() => handleClick("Products")}
        />
        <Button
          category="About"
          selected={selectedCategory === "About"}
          onClick={() => handleClick("About")}
        />
        <Button
          category="Contact"
          selected={selectedCategory === "Contact"}
          onClick={() => handleClick("Contact")}
        />
      </nav>
      {selectedCategory === "Products" ? (
        <Products />
      ) : selectedCategory === "About" ? (
        <About />
      ) : selectedCategory === "Contact" ? (
        <Contact />
      ) : (
        ""
      )}
    </main>
  );
};

export default Main;
