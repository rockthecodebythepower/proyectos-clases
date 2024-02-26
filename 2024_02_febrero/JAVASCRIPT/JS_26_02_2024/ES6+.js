//! ecmascript 6

//! object destructuring

const object = {
  name: "Paquito",
  age: 35,
  gafas: true,
  object: {
    object: {
      object: {
        value2: 12,
        value3: 23,
        value4: 2332,
      },
    },
  },
};

const {
  value = 2390,
  value2: nombreDeValor,
  value3,
  value4,
} = object.object.object.object;
/* const value = object.object.object.object.value; */

/* console.log(object.object.object.object.value);
console.log(value);
console.log(nombreDeValor); */

const funcion = ({ posicion, cuantos }) => {
  /* console.log(posicion);
    console.log(cuantos); */
};

funcion({
  cuantos: 2,
  posicion: 1,
});

/* .splice(1); */

//! spread operator
// ...

const array = ["cosa1", "cosa2"];
const array2 = ["cosa3", "cosa4"];

//   arrayCopia: 322323233223423  array: 04739868934765897342
const arrayCopia = [
  "elemento por delante",
  ...array,
  "elementoPusheado",
  ...array2,
];

/* arrayCopia.pop(); */
console.log(arrayCopia);

const objeto = {
  prop1: "value1",
};

const objetoCopia = { ...objeto, loading: true };

console.log(objetoCopia);
console.log(objeto);

const definitivo = [
  { ...objetoCopia },
  ...array,
  ...array2,
  { prop1: "value", ...objetoCopia },
];

console.log(definitivo);

//! rest operator
// ...

const funcion2 = (a, b, ...restNums) => {
    console.log(a);
    console.log(b);
    console.log(restNums);
    console.log(restNums[1]);
};

funcion2(12, 11, 12, 12, 12, 12, 12, 12, 12, 23, 32, 34, 43, 7);



const push = (array, ...todoLoQueQuieraMeter) => {

    for (const elemento of todoLoQueQuieraMeter) {
        array[array.length] = elemento;
    }

}

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log("------------------------------------");

console.log(array);
/* array.push("cosa3", "cosa4", "cosa5") */
push(array, "cosa3", "cosa4", "cosa5");
console.log(array);