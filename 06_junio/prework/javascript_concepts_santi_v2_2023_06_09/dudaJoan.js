const frutas = ["pomelo", "pomelo", "fresa", "fresa", "pomelo"];

//! quiero sacar un nuevo array con los elementos sin que estén repetidos;

const frutasNoRepetidas = [...new Set(frutas)];

console.log(frutasNoRepetidas);