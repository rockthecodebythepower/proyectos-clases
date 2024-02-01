import { useEffect, useReducer } from "react";
import "./GuessCountry.css";
import InfoLevels from "../../components/InfoLevels/InfoLevels";
import { Link } from "react-router-dom";
import {
  GUESS_COUNTRY_INITIAL_STATE,
  guessCountryReducer,
} from "../../reducer/guessCountry/reducer";
import { checkAnswer, getCountries } from "../../reducer/guessCountry/actions";

const GuessCountry = () => {
  const [state, dispatch] = useReducer(
    guessCountryReducer,
    GUESS_COUNTRY_INITIAL_STATE
  );

  const { randomFlags, countrySelected, levels, points, countries } = state;

  useEffect(() => {
    getCountries(dispatch);
  }, []);

  return (
    <div className="guessCity">
      <h1>Adivina la bandera</h1>
      <InfoLevels levels={levels} points={points} />
      <h3>
        ¿De que bandera es este pais?{" "}
        <Link to={`/country/${countrySelected?.name.common}`}>
          {countrySelected?.name.common}
        </Link>
      </h3>
      <div className="flags">
        {randomFlags.map((flag) => (
          <div
            className="img_wrp"
            key={flag.src}
            onClick={() =>
              checkAnswer(flag.src, countrySelected, countries, dispatch)
            }
          >
            <img src={flag.src} alt={flag.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessCountry;
