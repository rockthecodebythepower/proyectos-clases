export const API = async (endpoint, page) => {
  const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}/?page=${page}`);
  const responseJSON = await response.json();
  return responseJSON.results;
};
