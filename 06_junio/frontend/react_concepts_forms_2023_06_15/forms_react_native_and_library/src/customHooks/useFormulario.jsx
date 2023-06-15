import { useState } from "react";

export const useFormulario = (INITIAL_STATE) => {

  const [data, setData] = useState(INITIAL_STATE);

  const añadirDato = (propiedad, valor) => {

    setData({ ...data, [propiedad]: valor });

  };

  return {
    data,
    añadirDato,
  };
};
