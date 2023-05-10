import { useState } from "react";
import { cafes } from "../data/data";

export const useCafe = () => {

  const [cafesFiltered, setCafesFiltered] = useState(cafes);

  const filtrar = (inputValue) => {
    setCafesFiltered(
      cafes.filter(
        (cafe) =>
          cafe.nombre.toLowerCase().includes(inputValue.toLowerCase()) ||
          cafe.tipo.toLowerCase().includes(inputValue.toLowerCase()) ||
          cafe.origen.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return {
    filtrar,
    cafesFiltered
  }
};
