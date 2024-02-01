import { getRandom } from "../../utils/random";

export const getCountries = (dispatch) => {
  fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
    .then((res) => res.json())
    .then((res) => {
      getRandomCountry(res, dispatch);
      // dispatch de countries
      dispatch({ type: "SET_COUNTRIES", payload: res });
    });
};

export const check = (dispatch, countries, country, populationSelected) => {
  if (
    country.population - 3000000 <= populationSelected &&
    country.population + 3000000 >= populationSelected
  ) {
    dispatch({ type: "SUM_POINT" });
  }
  dispatch({ type: "NEXT_LEVEL" });
  getRandomCountry(countries, dispatch);
};

const getRandomCountry = (res, dispatch) => {
  const positionSelected = getRandom(res);
  dispatch({ type: "SET_COUNTRY", payload: res[positionSelected] });
};
