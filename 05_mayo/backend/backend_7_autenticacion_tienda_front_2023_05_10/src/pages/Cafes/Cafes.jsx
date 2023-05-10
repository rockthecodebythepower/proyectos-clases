import { useContext } from "react";
import { useCafe } from "../../customHooks/useCafe";
import "./Cafes.css"
import { modeContext } from "../../context/modeProvider";
import Cafe from "../../components/Cafe/Cafe";
import CafeNotFound from "../../components/CafeNotFound/CafeNotFound";

const Cafes = () => {

    const { filtrar, cafesFiltered } = useCafe();

    const { darkMode, setDarkMode } = useContext(modeContext);

  return (
    <div className="cafes_wrp">
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
};

export default Cafes;
