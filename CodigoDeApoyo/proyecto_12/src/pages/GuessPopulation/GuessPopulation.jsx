import { useEffect, useReducer, useRef } from "react";
import "./GuessPopulation.css";
import InfoLevels from "../../components/InfoLevels/InfoLevels";
import {
  GUESS_POPULATION_INITIAL_STATE,
  guessPopulationReducer,
} from "../../reducer/guessPopulation/reducer";
import { check, getCountries } from "../../reducer/guessPopulation/actions";

const GuessPopulation = () => {
  const [state, dispatch] = useReducer(
    guessPopulationReducer,
    GUESS_POPULATION_INITIAL_STATE
  );

  const { countries, levels, points, country } = state;
  const inputRef = useRef();

  useEffect(() => {
    if (countries.length === 0) {
      getCountries(dispatch);
    }
  }, []);

  return (
    <div className="population">
      <InfoLevels levels={levels} points={points} />
      <h2>¿Cuanta población crees que tiene {country?.name.common}?</h2>
      <div className="img_wrp">
        <img src={country?.flags.svg} alt={country?.name.common} />
      </div>
      <input
        type="number"
        className="input-population"
        max={2000000000}
        min={1}
        defaultValue={1}
        ref={inputRef}
      />
      <button
        className="check"
        onClick={() => check(dispatch, countries, country, parseInt(inputRef.current.value))}
      >
        Comprobar
      </button>
    </div>
  );
};

export default GuessPopulation;
