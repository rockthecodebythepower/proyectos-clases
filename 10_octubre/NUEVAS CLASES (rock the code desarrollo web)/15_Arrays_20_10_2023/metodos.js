//! tipo de dato iterable
//? implica tener posiciones
//? implica que se pueda recorrer o iterar

/* const array = ["adios", "mundo", "cruel"];  */ // 3
// posiciones     0        1        2

// el uso más normal para un bucle es el de recorrer un array
/* for (let i = 0; i < array.length; i = i + 1) {
    
    console.log(i);
    console.log(array[i]);
    
}

console.log("salí del blucle"); */

// métodos son código que han escrito otras personas que llegan para facilitarnos la vida y tardar menos tiempo, escribir menos en hacer procesos del día día

//! comprobar si el dni está dentro del array
const clientes = [
  "23478925M",
  "23098838L",
  "12874759C",
  "X2187473M",
  "Y2934485V",
];

console.log(clientes.length);

console.log(clientes.includes("X2187473M"));

//! push - para INSERTAR elementos AL FINAL del array
clientes.push("23093409N", "20923832L");

console.log(clientes);

console.log(clientes.length);


//! pop - ELIMINA el ÚLTIMO elemento del array
clientes.pop();

console.log(clientes);

console.log(clientes.length);

//! splice - ELIMINAR O INTERCAMBIAR cualquier elemento o elementos de mi array - MODIFICA EL ARRAY ORIGINAL
clientes.splice(3, -1, "23786292Ñ");
//             pI, cuantos

console.log(clientes);

console.log(clientes.length);


//! slice - RECORTA PERO NO QUITA NADA DEL ARRAY
console.log(clientes.slice(3, 5));
//                        pI, pF

console.log(clientes);

console.log(clientes.length);