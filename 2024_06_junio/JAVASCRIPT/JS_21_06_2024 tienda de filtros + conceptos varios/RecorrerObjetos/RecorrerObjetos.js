/* const array = [21, 3, 45, 54, 65, 23, 21];

const objArray = {
    0: 21,
    1: 3, 
    2: 45,
    3: 54, 
    4: 65,
    5: 23,
    6: 21
}


console.log(objArray.paquito);

console.log(objArray["paquito"]);

console.log(objArray[3]);

console.log(typeof array);

for (let i = 0; i < 7; i++) {
    console.log(objArray[i]);
} */

const obj = {
  name: "Aitor",
  age: 34,
  pet: {
    race: "perro",
    name: "Manolito",
  },
};

console.log(
  obj.name +
    " Tiene una mascota, que es un " +
    obj.pet.race +
    " y se llama " +
    obj.pet.name
);

/* for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}


console.log(Object.keys(obj));

const arrayKeys = Object.keys(obj);

for (const key of arrayKeys) {
    console.log(key);
    console.log(obj[key])
} */
