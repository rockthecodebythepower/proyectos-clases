import { addSpellsToCharacters } from "../../API/addSpellsToCharacters";
import Character from "../Character/Character";
import "./Characters.css";
import { useState, useEffect } from "react";

const Characters = () => {

    const [characters, setCharacters] = useState();

    useEffect(() => {
        addSpellsToCharacters(setCharacters);
    }, []);

    return (
        <div className="characters">
            {console.log(characters)}
            {characters?.map((character) => <Character key={character.id} character={character}/>)}
        </div>
    )
}

export default Characters