import { useState } from "react";

export const useModal = (initialState = false) => {

  const [isOpen, setIsOpen] = useState(initialState);

  const abrir = () => {
    setIsOpen(true);
  };

  const cerrar = () => {
    setIsOpen(false);
  };

  return {
    abrir,
    cerrar,
    isOpen,
  };
};