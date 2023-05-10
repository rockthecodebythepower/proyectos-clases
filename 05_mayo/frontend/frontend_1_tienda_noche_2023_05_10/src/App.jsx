import { useContext } from "react";
import "./App.css";
import { modeContext } from "./context/modeProvider";
import CafeNotFound from "./components/CafeNotFound/CafeNotFound";
import Cafe from "./components/Cafe/Cafe";
import { useCafe } from "./customHooks/useCafe";

function App() {
  const { darkMode, setDarkMode } = useContext(modeContext);
  const { filtrar, cafesFiltered } = useCafe();

  return (
    <div className={darkMode ? "main dark" : "main"}>
      <img
        src={darkMode ? "/assets/sol.png" : "/assets/luna.png"}
        className="mode"
        onClick={() => setDarkMode(!darkMode)}
      />
      <input
        onInput={(e) => filtrar(e.target.value)}
        placeholder="busca aquí tu café"
        className={darkMode ? "dark" : "light"}
      />
      <div className="cafes">
        {cafesFiltered.length > 0 ? (
          cafesFiltered.map((cafe) => {
            return <Cafe key={cafe.nombre} cafe={cafe} />;
          })
        ) : (
          <CafeNotFound />
        )}
      </div>
    </div>
  );
}

export default App;
