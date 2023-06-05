import { useEffect, useState } from "react";
import "./Quotes.css";
import Quote from "../Quote/Quote";

const Quotes = () => {
  const [citas, setCitas] = useState([]);

  const getQuotes = async () => {
    const resultado = await fetch(
      "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
    );

    const res = await resultado.json();

    //! le decimos al código que el estado de mi componente a cambiado y por lo tanto necesita renderizarse de nuevo.
    setCitas(res);
  };

  //? sólo se ejecuta cuando se construye el componente por primera vez
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quotes">
      {citas.map((cita) => <Quote cita={cita} key={cita.id}/>)}
    </div>
  );
};

export default Quotes;
