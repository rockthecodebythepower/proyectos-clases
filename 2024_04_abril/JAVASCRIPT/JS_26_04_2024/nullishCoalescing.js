let a = "";
let b = 0;
let c = undefined;
let d = null;

//! el nullish es únicamente para cuando tenemos valores NULL O UNDEFINED

console.log(a || "No tiene valor");
console.log(a ?? "No tiene valor");

console.log(b || "No tiene valor");
console.log(b ?? "No tiene valor");

console.log(c || "No tiene valor");
console.log(c ?? "No tiene valor");

console.log(d || "No tiene valor");
console.log(d ?? "No tiene valor");