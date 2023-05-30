import "./Persona.css";

//! recogemos las props
function Persona({ persona }) {

  //! JSX
  return (
    <>
      <div className={persona.edad >= 18 ? "mayor-de-edad" : "menor-de-edad"}>
      <h2>{persona.nombre}</h2>
      <p>{persona.edad}</p>
      {persona.gustos.map((gusto) => {
        return (
          <p key={gusto}>
            {gusto === "Literatura"
              ? "En realidad no me gusta la literatura"
              : gusto}
          </p>
        );
      })}
      <img src={persona.imagen} />
    </div>
    </>
  );
}

export default Persona;
