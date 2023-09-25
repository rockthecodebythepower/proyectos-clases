import React from "react";
import "./Perfil.css";

const Perfil = React.memo(({ perfil }) => {
  return (
    <div className="perfil">
      <img src={perfil} />
    </div>
  );
});

export default Perfil;
