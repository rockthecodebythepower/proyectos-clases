const URL = "https://rickandmortyapi.com/ap/character";

const getCharacters = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("No se ha podido hacer la petición => ", error.message);
  }
};

getCharacters();
