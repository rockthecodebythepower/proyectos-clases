export const API = async (endpoint) => {

  const response = await fetch("https://valorant-api.com/v1/" + endpoint);

  const respuesta = await response.json();

  return respuesta.data;

};