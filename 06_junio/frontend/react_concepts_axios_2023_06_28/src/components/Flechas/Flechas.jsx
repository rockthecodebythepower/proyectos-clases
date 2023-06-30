import "./Flechas.css"

const Flechas = ({ setId, id }) => {
  return (
    <div className="etiquetas">
      <p onClick={() => setId(id - 1)}>{"<"}</p>
      <p onClick={() => setId(id + 1)}>{">"}</p>
    </div>
  );
};

export default Flechas;
