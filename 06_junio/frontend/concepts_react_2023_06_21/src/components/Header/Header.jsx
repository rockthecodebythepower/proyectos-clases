import React, { useState } from "react";
import "./Header.css"


//! React.memo lo que está haciendo es memorizar las props que le llegan al componente para ver si cambian o no.
//? Si las props que le llegan no cambian entonces no ejecuta el componente
const Header = React.memo(({ aguacate, edad, gafas }) => {

    console.log(aguacate);
    console.log(edad);
    console.log(gafas);

  return (
    <h1>
        {aguacate}
    </h1>
  )
})

export default Header