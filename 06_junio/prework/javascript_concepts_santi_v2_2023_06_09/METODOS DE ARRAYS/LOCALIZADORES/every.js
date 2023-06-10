const personas = [
    {
      nombre: "Alejandro", //! 23098457203945
      nivelDeGuay: 10
    },
    {
      nombre: "Jeniffer",
      nivelDeGuay: 10
    },
    {
      nombre: "Manu",
      nivelDeGuay: 10
    },
    {
      nombre: "Eva", //! asldjflaskdfkls
      nivelDeGuay: 10
    },
    {
      nombre: "Rubén",
      nivelDeGuay: 10
    },
    {
      nombre: "Santi",
      nivelDeGuay: 9
    },
  ];
  
  //! el every es un método de arrays que devolverá un valor booleano si TODOS los elementos del array cumple la condición de lo indicado
  //* el método every recibirá como parámetro una FUNCIÓN que recogerá de los parámetros un elemento del array y retornará una respuesta booleana
  
  console.log(personas.every((persona) => persona.nivelDeGuay > 9));
  