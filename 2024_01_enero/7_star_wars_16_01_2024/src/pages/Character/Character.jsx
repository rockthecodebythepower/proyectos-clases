import { useParams } from "react-router-dom";
import "./Character.css";
import { useEffect, useState } from "react";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  }, []); //! el array de dependencias vacío en el useEffect me permitirá ejecutar el código de dentro del mismo únicamente la primera vez que se ejecuta el componente (montaje)

  return (
    <main className="character">
      <h2>{character?.name}</h2>
      <div>
        <img src={character?.image} alt={character?.name} />
      </div>
      <p>{character?.description}</p>
    </main>
  );
};

export default Character;
