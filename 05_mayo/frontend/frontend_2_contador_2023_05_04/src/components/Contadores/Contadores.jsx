import React, { useContext } from "react";
import { ContadoresContext } from "../../context/contadoresContext";
import "./Contadores.css"
import { colors } from "../../colors/colors";

const Contadores = () => {

  const { contadores, setContadores } = useContext(ContadoresContext);

    const cambiarColor = (contador) => {
        
        const newContadores = [...contadores];

        newContadores[contador.id].color = colors[Math.floor(Math.random() * colors.length)];

        setContadores([...newContadores]);
        localStorage.setItem("contadores", JSON.stringify(newContadores));

    }
    
    const accionar = (contador) => {

        const newContadores = [...contadores];

        newContadores[contador.id].value = contador.value + contador.sum;

        setContadores([...newContadores]);
        localStorage.setItem("contadores", JSON.stringify(newContadores));

    }

  return (
    <div className="contadores">
      {contadores.map((contador) => {
        return (
          <div key={JSON.stringify(contador)} className="contador" style={{backgroundColor: contador.color}}>
            <h3>{contador.titulo}</h3>
            <div onClick={() => accionar(contador)}>
                {contador.value}
            </div>
            <img src="/assets/pincel.png" alt="cambiar de color" onClick={() => cambiarColor(contador)}/>
          </div>
        );
      })}
    </div>
  );
};

export default Contadores;
