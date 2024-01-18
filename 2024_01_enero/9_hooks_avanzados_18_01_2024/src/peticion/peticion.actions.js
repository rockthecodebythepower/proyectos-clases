export const peticion = async (dispatch, page) => {
  dispatch({ type: "LOADING" });

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const response = await res.json();

  setTimeout(() => {
    dispatch({ type: "GET_CHARACTERS", payload: response.results });
  }, 2000);
};
