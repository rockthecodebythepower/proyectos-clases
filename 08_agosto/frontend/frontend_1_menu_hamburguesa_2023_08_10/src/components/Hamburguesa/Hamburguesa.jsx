import { useState } from "react";
import "./Hamburguesa.css";

const Hamburguesa = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <img src="/hm.png" onClick={() => setIsOpen(!isOpen)}/>
      <nav className={isOpen ? "opened" : "closed"}></nav>
    </div>
  );
};

export default Hamburguesa;
