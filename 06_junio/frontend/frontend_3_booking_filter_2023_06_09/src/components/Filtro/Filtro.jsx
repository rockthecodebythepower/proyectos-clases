import "./Filtro.css";

const Filtro = ({ clave, posibilidades, destinos, setDestinos }) => {

  const filtrar = (posibilidad) => {

    setDestinos(destinos.filter((destino) => {
        
        if (Array.isArray(destino[clave])) {
          console.log("es array");
          return destino[clave].includes(posibilidad);
        } else {
          console.log("no es array");
          return destino[clave] === posibilidad;
        }

      })
    );
  };

  return (
    <div className="filtro">
      <h4>{clave.replaceAll("_", " ")}</h4>
      {posibilidades.map((posibilidad) => {
        return (
          <div key={posibilidad}>
            <input type="checkbox" onChange={() => filtrar(posibilidad)} />
            <p>{posibilidad}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Filtro;
