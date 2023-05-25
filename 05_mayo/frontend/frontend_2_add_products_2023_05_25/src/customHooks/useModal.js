import { useState } from "react";

export const useModal = () => {
  const [abierto, setAbierto] = useState(false);

  const abrir = () => {
    setAbierto(true);
  };

  const cerrar = () => {
    setAbierto(false);
  };

  return {
    abierto,
    abrir,
    cerrar,
  };
};
