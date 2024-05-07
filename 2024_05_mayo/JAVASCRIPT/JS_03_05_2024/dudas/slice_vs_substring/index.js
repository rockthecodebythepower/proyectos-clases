//! substring - nos permite extraer un fragmento a elegir de una cadena de texto - STRINGS
//! slice - nos permite extraer un fragmento a elegir de una cadena de texto - STRINGS - ARRAYS

const name = "Miguel";
//?posiciones 012345

const middle = name.slice(1, 5);
// dame la parte de tu cadena, desde la posición 1 (incluida) hasta la posición 5 (no incluida)

console.log(middle);

const middle2 = name.substring(1, 5);

console.log(middle2);

console.log(name);