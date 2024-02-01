import { getRandom } from "../../utils/random";

export const getCountries = (dispatch) => {
  fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((res) => res.json())
    .then((res) => {
      setRandomFlags(res, getRandom(res), dispatch);
      dispatch({ type: "SET_COUNTRIES", payload: res });
    });
};

export const setRandomFlags = (res, positionSelected, dispatch) => {
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

  dispatch({ type: "SELECT_COUNTRY", payload: res[positionSelected] });

  let random = Math.random();

  if (random < 0.33) {
    dispatch({
      type: "SET_RANDOM_FLAGS",
      payload: [previousCountry, currentCountry, nextCountry],
    });
  } else if (random < 0.66) {
    dispatch({
      type: "SET_RANDOM_FLAGS",
      payload: [currentCountry, previousCountry, nextCountry],
    });
  } else {
    dispatch({
      type: "SET_RANDOM_FLAGS",
      payload: [nextCountry, previousCountry, currentCountry],
    });
  }
};

export const checkAnswer = (src, countrySelected, countries, dispatch) => {
  if (src === countrySelected.flags.svg) {
    dispatch({ type: "SUM_POINT" });
  }
  dispatch({ type: "NEXT_LEVEL" });
  setRandomFlags(countries, getRandom(countries), dispatch);
};

export const getCountry = (dispatch, name) => {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,independent,currencies,capital,region,area,maps,coatOfArms,startOfWeek`
  )
    .then((res) => res.json())
    .then((res) => dispatch({ type: "GET_COUNTRY", payload: res[0] }));
};
