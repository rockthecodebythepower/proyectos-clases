import React, { useEffect, useReducer, useState } from "react";
import "./Characters.css";
import Card from "../../components/Card/Card";
import { getCharacters } from "../../utils/CharacterActions";
import { INITIAL_STATE, characterReducer } from "../../utils/characterReducer";

const Characters = React.memo(({ setPerfil }) => {

  const [state, dispatch] = useReducer(characterReducer, INITIAL_STATE);

  useEffect(() => {
    getCharacters(dispatch, state.page);
  }, [state.page]);

  return (
    <>
      <div className="characters">
        {state.characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            setPerfil={setPerfil}
          />
        ))}
      </div>
      <div className="paginacion">
        <p onClick={() => state.page > 1 && dispatch({ tipo: "SUBTRACT_PAGE"})}>anterior</p>
        <h3>{state.page}</h3>
        <p onClick={() => state.page < state.limit && dispatch({ tipo: "SUM_PAGE"})}>siguiente</p>
      </div>
    </>
  );
});

export default Characters;
