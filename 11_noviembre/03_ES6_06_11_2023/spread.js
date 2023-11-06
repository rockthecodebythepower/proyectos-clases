// tipos de datos complejos: se guarda un espacio en la memoria y el valor de fauna es la dirección a ese espacio de la memoria

//! valor de fauna: 3897593498543
const fauna = ["🦕", "🐌", "🐙", "🐢", "🦄"];

//! valor de fauna2: 2908172409434
const fauna2 = ["🦕", "🐌", "🐙", "🐢", "🦄"];

//! fauna3 = 3897593498543 
const fauna3 = fauna;

fauna3.push("🐰");

console.log("fauna3 =", fauna3);
console.log("fauna =", fauna);


//! valor de fauna4: 230982743095
const fauna4 = [];

for (const elemento of fauna) {
    fauna4.push(elemento);
}

fauna4.push("🐯");

console.log(fauna);
console.log(fauna4);

//! valor de fauna5: 1230o50342598234
const fauna5 = [...fauna, "🐔"];

/* const fauna6 = ["🦕",  "🐌", "🐙", "🐢", "🦄", "🐰", "🐔"] */

console.log(fauna);
console.log(fauna5);