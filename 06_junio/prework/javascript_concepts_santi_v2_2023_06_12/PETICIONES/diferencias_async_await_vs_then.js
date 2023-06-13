//? async / await

//! .then

const peticion = async () => {
    const resultado = await fetch(
      "https://rickandmortyapi.com/api/character?page=10"
    );
  
    console.log(resultado);
  
    console.log("pepito");
  };
  
  /* let respuestaFinal;
  
  fetch("https://rickandmortyapi.com/api/character?page=10").then((respuesta) => {
    console.log(respuesta);
    respuestaFinal = respuesta;
  });
  
  console.log("pepito"); */
  
  peticion();