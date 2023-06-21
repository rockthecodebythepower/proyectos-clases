import { useState } from "react";
import Button from "../Button/Button";
import "./CSSFilters.css";
import { buttons } from "./buttons";

const CSSFilters = () => {

    //! cuando se ve modificado re-renderiza TODO el componente
    const [filtro, setFiltro] = useState("");

  return (
    <div className="cssFilters">
      <h3>CSS filters</h3>
      <img src="/assets/Emily.png" style={{filter: filtro}}/>
      <div>
        {buttons.map((button) => (
          <Button key={button.cssValue} setFiltro={setFiltro} cssValue={button.cssValue}>
            {button.texto}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CSSFilters;