import { useContext } from "react";
import "./Personajes.css";
import { myContext } from "../../context/ContextProvider";

const Personajes = () => {

    const { characters } = useContext(myContext);

  return (
    <div className="personajes">
      {characters.map((personaje) => {
        return (
          <div key={personaje.id}>
            <h3>{personaje.name}</h3>
            <img src={personaje.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Personajes;
