import { useEffect, useState } from "react";
import "./App.css";
import ButtonTroll from "./components/ButtonTroll/ButtonTroll";

function App() {
  const [characters, setCharacters] = useState([]);
  const [fecha, setFecha] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
      });
  }, [fecha]);

  return (
    <div>
      <ButtonTroll
        text="El texto que yo quiera"
        bgColor="red"
        funcion={() => console.log("hola desde el primer botón")}
      />
      <br></br>
      <br></br>
      <ButtonTroll text="Otro texto" bgColor="#ffffff" textColor="black" />
      {console.log(characters)}
      <div className="characters">
        {characters.map((character) => (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
            <ButtonTroll text={character.species} funcion={() => console.log(character.status)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
