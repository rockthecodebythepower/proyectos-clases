import React from "react";
import "./Button.css"

const Button = React.memo(({ children, cssValue, setFiltro }) => {

    const cambiarEstilo = () => {
        setFiltro(cssValue);
    }

  return (
    <button className="cssFilterButton" onClick={cambiarEstilo}>{children}</button>
  )
})

export default Button