const obj = {
    name: "Aitor",
    age: 34,
    pet: {
        race: "perro",
        name: "Manolito"
    },
    gafas: true
}

/* const key = "name";

console.log(obj.name);
console.log(obj[key]); */

//! Object destructuring
/* const { name, age: edad, gafas = false } = obj;

console.log(name);
console.log(edad);
console.log(gafas); */

const array = ["paquito", "manolito", "esmeralda"];

const [primer,, tercero] = array;

console.log(primer);
console.log(tercero);