import { useEffect, useState } from "react";
import "./Country.css";
import { useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,independent,currencies,capital,region,area,maps,coatOfArms,startOfWeek`
    )
      .then((res) => res.json())
      .then((res) => setCountry(res[0]));
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
