export const getCharacters = async (dispatch, page) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character?page=" + page
  );
  const response = await res.json();
  dispatch({ type: "SET_LIMIT", payload: response.info.pages });
  dispatch({ type: "GET_CHARACTERS", payload: [...response.results]})
};