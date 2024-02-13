import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  console.log("SOY EL COMPONENTE APP Y ME RENDERIZO");

  const [num, setNum] = useState(1);
  const [characters, setCharacters] = useState([]);

  // useCallback, useMemo, useEffect tienen la misma sintaxis
  // useEffect -> efectos secundarios (peticiones)
  // useMemo -> memoizar cálculos costosos (ordenaciones)
  // useCallback -> no volver a declarar funciones o declararlas cuando sea necesario

  /* useEffMoBack(funcion, []); */
  //! cuando está vacío sólo se ejecuta una vez la función de la izquierda (al principio del todo)
  //! no lo ponemos funcionaría como si no estuviéramos utilizando el useEffMoBack
  //! si en el array metemos alguna dependencia entonces la función se ejecutará cada vez que esa dependencia cambie

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=" + num)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, [num]);
  // si está vacío el array de dependencias entonces nuestro useEffect ejecutará la función que le hayamos mandado una única vez, la primera vez que se renderiza nuestro componente

  // si dependemos de algo en nuestro array de dependencias entonces sólo ejecutaremos la función aledaña en caso de que ese algo se vea modificado

  return (
    <div>
      {characters.map((character) => (
        <img key={character.id} src={character.image} />
      ))}
      <h1 className="title">{num}</h1>
      <div className="buttons">
        <button onClick={() => setNum(num - 1)}>-</button>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
