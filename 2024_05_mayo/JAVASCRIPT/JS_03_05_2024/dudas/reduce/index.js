// dame la última posición de un array

const comidas = ["apple", "orange", "jam", "pasta", "paquito"];
//?posiciones       0        1        2       3         4

// contar todas las letras de todos mis strings dentro del array
const reduce = comidas.reduce((previousValue, currentValue) => {
  return (previousValue += currentValue.length);
}, 0);
//? valor inicial

console.log(reduce);


const reduce2 = (array, callback, previousValue) => {
  let suma = previousValue;

  for (const currentValue of array) {
    suma += callback(previousValue, currentValue);
  }

  return suma;
};

console.log(reduce2(comidas,(previousValue, currentValue) => {
      return (previousValue += currentValue.length);
    }, 0)
);