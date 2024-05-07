/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada) */

const duplicates = [
  "sushi", // 0
  "pizza", // 1
  "burger", // 2
  "potatoe", // 3
  "pasta", // 4
  "ice-cream", // 5
  "pizza", // 6
  "chicken", // 7 
  "onion rings", // 8
  "pasta", // 9
  "pasta", // 10
  "pasta", // 11
  "pasta", // 12
  "soda", // 13
]; // 14

//! REUTILIZACIÓN 
function removeDuplicates(param) {
  
    for (let i = 0; i < param.length; i++) {
        
        let elementoABuscar = param[i];

        for (let j = i + 1; j < param.length; j++) {
            
            let elementoAEncontrar = param[j];

            if (elementoABuscar === elementoAEncontrar) {
                param.splice(j, 1);
                j--;
            }
        }
    }

    console.log(param);

}

removeDuplicates(duplicates);

const array = [
    "paquito",
    "pepito",
    "paquito"
];

removeDuplicates(array);
