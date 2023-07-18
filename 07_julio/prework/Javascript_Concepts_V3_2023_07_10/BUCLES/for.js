//! existen tipos de datos iterables
//? ITERABLE -> Que tiene la capacidad de repetirse -> algo que se puede recorrer con un bucle

//* string
//* array

let palabra = "abcdefghijklmnñopqrstuvwxyz"; // 27
// posiciones  01234567                  26
/* una serie de números dentro de mi bucle que vayan desde 0 hasta 27 sin incluirlo */

//                        27
for (let i = 0; i < palabra.length; i++) {
                        
    let letra = palabra[i];

    console.log(letra);

}