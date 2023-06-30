import { useMemo, useState } from "react";
import "./Main.scss";

const array = [
  2, 3434, 524, 35, 234, 523, 45, 23, 45, 234, 5234, 56, 234, 624, 536, 24, 53,
  4523, 4, 124, 123, 45, 231465, 23456, 2345, 5, 3, 4123, 4123, 4, 12345, 34, 5,
  23464352, 6345, 5, 345, 42314, 23, 4, 1234, 1234, 1235, 345, 34, 5, 235, 345,
  34, 5, 235, 234, 52, 345, 23, 45, 234, 523, 45, 234, 3452, 2345, 2345, 2345,
  2,
];

const Main = () => {
  const [num, setNum] = useState(0);

  // el useMemo lo que me permite es que aunque mi componente se re-renderice el contenido de dentro de la función del useMemo se ha ejecuta una única vez por el array de dependencias vacío en este caso y lo que he hecho es almacenar o memorizar el RESULTADO de ese cálculo para no tener que volver a hacerlo y no estresar a nuestra página con un cálculo que es innecesario volver a realizar
  const ordenacion = useMemo(() => array.sort((a, b) => a - b), []);

  return (
    <div style={{ userSelect: "none" }} onClick={() => setNum(num + 1)}>
      {num}
      {console.log(ordenacion)}
    </div>
  );
};

export default Main;
