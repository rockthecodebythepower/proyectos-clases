import { useEffect, useState } from "react";
import "./GuessPopulation.css";
import InfoLevels from "../../components/InfoLevels/InfoLevels";

const GuessPopulation = () => {
  const [levels, setLevels] = useState(1);
  const [populationSelected, setPopulationSelected] = useState(0);
  const [country, setCountry] = useState();
  const [points, setPoints] = useState(0);
  const [countries, setCountries] = useState([]);

  const getRandomCountry = (res) => {
    setCountry(res[Math.floor(Math.random() * res.length)]);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
      .then((res) => res.json())
      .then((res) => {
        getRandomCountry(res);
        setCountries(res);
      });
  }, []);

  const check = () => {
    if (
      (country.population - 3000000) <= populationSelected &&
      (country.population + 3000000) >= populationSelected
    ) {
      setPoints(points + 1);
    }
    setLevels(levels + 1);
    getRandomCountry(countries);
  };

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
        onChange={(e) => setPopulationSelected(parseInt(e.target.value))}
      />
      <button className="check" onClick={check}>
        Comprobar
      </button>
    </div>
  );
};

export default GuessPopulation;
