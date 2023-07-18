/* quiero replicar el includes de manera nativa */

const nombres = ["Alicia", "Ainhoa", "Rocío", "Carlos", "Jose María"];

let includesCarlos = false;

for (let i = 0; i < nombres.length; i++) {

    if (nombres[i] === "Carlos") {
        includesCarlos = true;
    }

}

if (includesCarlos) {
    console.log("Bravo! lo incluye!");
} else {
    console.log("Vaya no lo incluye...");
}


// hay métodos de array que sirven para recorrer el propio array y hacer algo en cada iteración
// includes, indexOf, lastIndexOf, filter, map, forEach -> utilizan callback

//! utilizamos programación funcional.
//! también existe la programación orientada a objetos (como está creado javascript);


//? los métodos son las funciones que están creadas dentro de una clase o instancia
// new Array();
// Array es una clase creada por la gente de javascript
// esta clase tiene un constructor -> cuando se inicia un nuevo objeto partiendo de la clase del array se crea la instancia con todos las opciones y posibilidades que tenga que llevar por dentro, es decir todos los métodos que hemos visto son funciones dentro de una clase

//! una función normal no va ligada a una clase ni a un objeto