import { useEffect, useState } from "react";
import "./Contador.css";

const Contador = () => {
  //? ESTADO
  const [numero, setNumero] = useState(0);

  console.log("soy contador y me renderizo");

  useEffect(() => {

    //! si el array de dependencias está vacío el código de dentro sólo ocurre la primera vez que se ejecuta el componente
    console.log("soy contador y te saludo pero sólo una vez");

  }, []);

  useEffect(() => {

    //! este useEffect depende de que numero cambie para ejecutar el contenido de dentro, puedo depender de tantas cosas como quiera 
    console.log("soy contador y numero está cambiando");

  }, [numero]);

  const sumar = () => {
    setNumero(numero + 1);
  };

  return (
    <div className="contador">
      <h1>{numero}</h1>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Contador;