import { useContext } from "react";
import Hijo2 from "../Hijo2/Hijo2";
import "./Hijo1.css";
import { AppContext } from "../../Providers/AppContext";

const Hijo1 = () => {
  const { mode, setMode } = useContext(AppContext);

  return (
    <div className="hijo1">
      <button
        onClick={() => (mode === "light" ? setMode("dark") : setMode("light"))}
      >
        {mode === "light" ? "🌚" : "🌞"}
      </button>
      <Hijo2 />
    </div>
  );
};

export default Hijo1;
