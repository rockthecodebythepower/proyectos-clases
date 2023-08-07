import "./App.css";
import Pokemons from "./components/Pokemons/Pokemons";
import Filters from "./components/Filters/Filters";
import PokemonsProvider from "./context/PokemonsProvider";

function App() {

  return (
    <PokemonsProvider>
      <Filters />
      <Pokemons />
    </PokemonsProvider>
  );
  
}

export default App;