import "./Character.css";
import { useState } from "react";

const Character = ({ character }) => {

    const [abierto, setAbierto] = useState(false);

  return (
    <div className="character">
        <h3>{character.apodo}</h3>
        <div className="img-container">
            <img onClick={() => setAbierto(!abierto)} src={character.imagen}/>
        </div>
        <div onClick={() => setAbierto(!abierto)} className={`hechizos ${abierto ? "abierto" : "cerrado"}`}>
            {character.hechizos.map((hechizo) => <h3 key={JSON.stringify(hechizo)} title={hechizo.uso}>{hechizo.hechizo}</h3>)}
        </div>
    </div>
  )
}

export default Character