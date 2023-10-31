/* Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate. */

/* Escribe una función que fusione dos arrays ordenados en uno solo. Los arrays solo tendrán números. Así mismo, la salida final debe estar ordenada y no tener ningún elemento duplicado  */

// función              (a, b) -> recibimos dos arrays
function mergeArrays(array1, array2) {
    // fusión de los dos arrays
    const newArray = array1.concat(array2);


}

mergeArrays([2, 3, 4, 5], [3, 4, 5, 6, 7, 32]);


const array1 = [2, 3, 4, 5];
const array2 = [3, 3, 3, 4, 5, 6, 7, 32];

// puntero1      🔽
// newArray = [2, 3, 4, 5, 3, 3, 3, 4, 5, 6, 7, 32];
// puntero2         🔼🔼 🔼 🔼🔼🔼 🔼🔼 🔼 🔼

const newArray = array1.concat(array2);

for (let i = 0; i < newArray.length; i++) {
    let buscar = newArray[i];
    
    for (let j = i + 1; j < newArray.length; j++) {
        const element = newArray[j];
        
        if (buscar === element) {
            newArray.splice(j, 1);
            i--;
        }
    }
}

newArray.sort((a, b) => a - b)

/* for (const element of array1) {
    newArray.push(element)
}

for (const element of array2) {
    newArray.push(element)
} */

/* const newArray = [...array1, ...array2]; */

console.log(newArray);


//! el splice coge una posición de un array y elimina a partir de ahí si no ponemos otro parámetro hasta el final y si ponemos otro parámetro será el número de elementos que corta

const array = ["😉", "😊", "😎", "😍", "😘", "🤩", "🙄"];
// posiciones    0     1      2     3      4     5      6
// splice            ✂----------|


array.splice(1, 2, "paquito", "menganito");

//! el primer parámetro del splice es un número que indica la posición desde donde empiezo a cortar

//? el segundo parámetro es un número que indica CUANTOS quiero eliminar

/* console.log(array); */