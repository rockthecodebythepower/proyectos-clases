//! existen tipos de datos iterables
//? ITERABLE -> Que tiene la capacidad de repetirse -> algo que se puede recorrer con un bucle

//* string
//* array

let palabra = "abcdefghijklmnñopqrstuvwxyz"; // 27
// posiciones  01234567                  26
/* una serie de números dentro de mi bucle que vayan desde 0 hasta 27 sin incluirlo */

//                        27
/* for (let i = 0; i < palabra.length; i++) {
                        
    const letra = palabra[i];

    console.log(letra);

} -> esto de aquí solíamos hacerlo mucho recorrer un array, un string...  */
// la manera de recorrerlo siempre era la misma, creo un bucle, empiezo en 0 con la i, voy hasta el límite de esa palabra o array, es decir, el .length y voy sumando de uno en uno, creo una variable que le llamo como quiera que representará el valor de string[i] o arrary[i] -> letra.


//! hace exáctamente lo mismo que el for pero por dentro y no es modificable
for (const letra of palabra) {
    console.log(letra);
}