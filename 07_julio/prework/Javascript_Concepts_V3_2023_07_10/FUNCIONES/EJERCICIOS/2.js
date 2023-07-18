// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo,
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const comidas = ["Pizza", "Hamburguesa", "Sushi", "Ensalada", "Tacos"];

const objeto = {
    palabra1: "Pizza",
    palabra2: "Sushi",
    palabra3: "IronMan"
}

const getPalabraMasLarga = (variable) => {

    let palabraMasLarga = "";

    // forin -> se creó para poder "recorrer" un objeto
    for (const key in variable) {
        if (variable[key].length > palabraMasLarga.length) {
            palabraMasLarga = variable[key];
        }
    }

    return palabraMasLarga;

};

console.log(getPalabraMasLarga(avengers)); // cual es la palabra más larga de avengers



console.log(getPalabraMasLarga(comidas)); // cual es la palabra más larga de comida


console.log(getPalabraMasLarga(objeto))


//! objeto no se puede recorrer - el forin realmente está creando un array de claves y luego recorriendo ese array

/* console.log(Object.keys(objeto))

for (let i = 0; i < Object.keys(objeto).length; i++) {
    
    const key = Object.keys(objeto)[i];

    objeto[key];


} */