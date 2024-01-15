import { useEffect, useState } from "react";
import "./GuessCountry.css";
import { getRandom } from "../../utils/random";
import InfoLevels from "../../components/InfoLevels/InfoLevels";
import { Link } from "react-router-dom";

const GuessCountry = () => {
  const [randomFlags, setRandomFlags] = useState([]);
  const [countrySelected, setCountrySelected] = useState();
  const [levels, setLevels] = useState(1);
  const [points, setPoints] = useState(0);
  const [countries, setCountries] = useState([]);

  const checkAnswer = (src) => {
    if (src === countrySelected.flags.svg) {
      setPoints(points + 1);
    }
    setLevels(levels + 1);
    nextLevel(countries);
  };

  const nextLevel = (res) => {
    const positionSelected = getRandom(res);
    const currentCountry = {
      src: res[positionSelected].flags.svg,
      alt: res[positionSelected].flags.alt,
    };
    const previousCountry = {
      src: res[positionSelected - 1].flags.svg,
      alt: res[positionSelected - 1].flags.alt,
    };
    const nextCountry = {
      src: res[positionSelected + 1].flags.svg,
      alt: res[positionSelected + 1].flags.alt,
    };
    setCountrySelected(res[positionSelected]);

    let random = Math.random();

    if (random < 0.33) {
      setRandomFlags([previousCountry, currentCountry, nextCountry]);
    } else if (random < 0.66) {
      setRandomFlags([currentCountry, previousCountry, nextCountry]);
    } else {
      setRandomFlags([nextCountry, previousCountry, currentCountry]);
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((res) => {
        nextLevel(res);
        setCountries(res);
      });
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
            onClick={() => checkAnswer(flag.src)}
          >
            <img src={flag.src} alt={flag.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuessCountry;
