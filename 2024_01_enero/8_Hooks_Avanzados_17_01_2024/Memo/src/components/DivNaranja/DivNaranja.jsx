import React from "react";
import "./DivNaranja.css";

// pongo react.memo para que no se renderice el componente por el cambio de estado del compoenente padre cuando a este componente no le están cambiando las props y por lo tanto no cambia nada dentro del mismo y por lo tanto no es necesario una re-renderización de este componente.
// este componente es muy pequeño y es un div sólo entonces lo normal sería no usar React.memo, sin embargo es un ejemplo por si nos encontrásemos con este caso en componentes más complejos
const DivNaranja = React.memo(() => {
  console.log("Soy DivNaranja y me renderizo");

  return <div className="orange"></div>;
});

export default DivNaranja;
