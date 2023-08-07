import { useContext } from "react"
import { imgTipos } from "../../types/types"
import "./Filter.css"
import { PokemonsContext } from "../../context/PokemonsProvider"

const Filter = ({ tipo }) => {

    const { setPokemons, pokemonsArray } = useContext(PokemonsContext);

    const filtrar = () => {

        const newPokemons = pokemonsArray.filter((pokemon) => {
            for (const type of pokemon.types) {
                if (type.type.name === tipo) {
                    return pokemon
                }
            }
        });

        setPokemons([...newPokemons])

    }

  return (
    <img style={{background: `var(--${tipo})`}} className={`${tipo} filter`} src={imgTipos[tipo]} onClick={filtrar}/>
  )
}

export default Filter