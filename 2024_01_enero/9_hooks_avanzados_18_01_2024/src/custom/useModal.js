//! un customHook es literalmente una función, no es más que una función.
//! sin embargo se le denomina customHook porque puede utilizar estados y crearlos como si fuese un componente
//! no se le denomina componente porque no renderiza contenido de JSX

import { useState } from "react";

export const useModal = (valor_inicial = false) => {
  const [open, setOpen] = useState(valor_inicial);

  const abrir = () => {
    setOpen(true);
  };

  const cerrar = () => {
    setOpen(false);
  };

  return {
    open,
    abrir,
    cerrar,
  };
};
