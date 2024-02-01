import { useEffect, useReducer } from "react";
import "./Country.css";
import { useParams } from "react-router-dom";
import { getCountry } from "../../reducer/guessCountry/actions";
import {
  GUESS_COUNTRY_INITIAL_STATE,
  guessCountryReducer,
} from "../../reducer/guessCountry/reducer";

const Country = () => {
  const { name } = useParams();

  const [state, dispatch] = useReducer(
    guessCountryReducer,
    GUESS_COUNTRY_INITIAL_STATE
  );

  const { countryDetail: country } = state;

  useEffect(() => {
    getCountry(dispatch, name);
  }, []);

  return (
    <div className="country">
      {country && (
        <>
          <h2>{country.name.common}</h2>
          <div className="img_wrp">
            <img src={country.coatOfArms.svg} />
          </div>
          <p>{country.independent ? "Independiente" : "Dependiente"}</p>
          <p>Moneda: {Object.keys(country.currencies)[0]}</p>
          <p>Capital: {country.capital[0]}</p>
          <p>Region: {country.region}</p>
          <p>
            Area: {country.area} m<span>2</span>
          </p>
          <p>
            Mapa:
            <a target="blank" href={country.maps.googleMaps}>
              {country.maps.googleMaps}
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default Country;
