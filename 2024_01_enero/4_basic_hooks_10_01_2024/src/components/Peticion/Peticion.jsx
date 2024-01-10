import { useEffect, useState } from "react";
import "./Peticion.css";

const Peticion = () => {
  /* let characters = []; */
  const [characters, setCharacters] = useState([]);
  const [page, setpage] = useState(1);

  /* useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => {
        /* characters = res.results;
        setCharacters(res.results);
      });
  }, []); */ //! si el array de dependencias está vacío, significa que no depende de nada y por lo tanto únicamente renderiza el código del useEffect la primera vez que se ejecuta el componente

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
      });
  }, [page]); //? si en el array de dependencias ponemos una dependencia entonces el código de dentro se ejecutará cuando este valor cambie

  return (
    <div>
      {characters.map((character) => (
        <img
          key={character.id}
          src={character.image}
          onClick={() => setpage(page + 1)}
        />
      ))}
      {console.log(page)}
    </div>
  );
};

export default Peticion;
