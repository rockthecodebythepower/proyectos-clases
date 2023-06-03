//! PUEDE RECORRER ARRAYS, PERO NO ESTÁ HECHO PARA ELLO, EL BUCLE FOR IN ESTÁ HECHO PARA "RECORRER" OBJETOS

//* string, array son los únicos tipos de datos ITERABLES es decir, que se pueden recorrer.

const persona = {
    nombre: "Jose María",
    edad: 27,
    gafas: false,
    gustos: ["Javascript", "C++"],
}

//! no puedo recorrer el objeto, pero por qué for in si me deja?
for (const clave in persona) {
    
    console.log(clave);
    console.log(persona[clave]);

}

//! realmente forin está recorriendo el array de claves del objeto, puesto que un array si es iterable
console.log(Object.keys(persona));

const persona2 = {
    nombre: "sadlfakls"
}

let variable = "nombre"

console.log(persona2[variable]);