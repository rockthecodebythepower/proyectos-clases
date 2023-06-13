const personas = [
    {
      nombre: "Alejandro", //! 23098457203945
    },
    {
      nombre: "Jeniffer",
    },
    {
      nombre: "Manu",
    },
    {
      nombre: "Eva", //! asldjflaskdfkls
    },
    {
      nombre: "Rubén",
    },
    {
      nombre: "Santi",
    },
  ];
  
  //! el find es un método de arrays que devolverá el elemento encontrado si el array incluye lo que pedimos o no lo incluye
  //* el método find recibirá como parámetro una FUNCIÓN que recogerá de los parámetros un elemento del array y retornará el elemento encontrado si lo encuentra
  
  console.log(personas.find((persona) => persona.nombre === "Rubén"));
