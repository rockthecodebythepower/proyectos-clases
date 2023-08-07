import { imgTipos } from "../../types/types";
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon" style={{background: `var(--${pokemon.types[0].type.name})`}}>
        <h3>{pokemon.name}</h3>
        <div className="img">
            <img src={pokemon.sprites.other.dream_world.front_default}/>
        </div>
        <div className="types">
            {pokemon.types.map((type) => <img key={type.type.name} src={imgTipos[type.type.name]}/>)}
        </div>
    </div>
  )
}

export default Pokemon