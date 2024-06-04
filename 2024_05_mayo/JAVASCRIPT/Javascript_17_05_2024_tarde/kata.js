function insert(arrayResultante, array, otherArray) {
  for (let i = 0; i < array.length; i++) {
    if (!arrayResultante.includes(array[i]) && !otherArray.includes(array[i])) {
        arrayResultante.push(array[i]);
    }
  }
}

function diff(a, b) {
  const array = [];

  insert(array, a, b);
  insert(array, b, a);

  return array.sort();
}

const letras = ["l", "m", "g", "a", "a", "a"];
const letras2 = ["s", "l", "l", "x", "l", "h", "a", "p"];

const resultado = diff(letras, letras2);

console.log(resultado);