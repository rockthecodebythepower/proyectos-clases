//! Object destructuring y Array destructuring

const nevera = {
  temperatura: 3,
  fruta: true,
  altura: 190,
  consumo: 160,
};

/* const temperatura = nevera.temperatura; */

/* console.log("esta es la termperatura de la nevera: " + nevera.temperatura);
console.log("esta es la termperatura de la nevera: " + nevera["temperatura"]); */
/* console.log("esta es la termperatura de la nevera: " + temperatura); */

//! Object destructuring
const { temperatura: temp = 5, fruta, altura: alt, consumo = 200 } = nevera;

/* console.log("temperatura", temp);
console.log("fruta", fruta);
console.log("altura", alt);
console.log("consumo", consumo); */

const funcion1 = ({ prop1, prop2, prop3 }) => {
  /* console.log(prop1);
  console.log(prop2);
  console.log(prop3); */
};

const funcion2 = () => {
  const props = {
    prop1: "asdlfa",
    prop2: "dlsafalk",
    prop3: "lkasdf",
  };

  funcion1(props);
};

funcion2();

const array = [
  {
    temperatura: 1,
    fruta: true,
    altura: 190,
    consumo: 160,
  },
  {
    temperatura: 2,
    fruta: true,
    altura: 190,
    consumo: 160,
  },
  {
    temperatura: 3,
    fruta: true,
    altura: 190,
    consumo: 160,
  },
  {
    temperatura: 4,
    fruta: true,
    altura: 190,
    consumo: 160,
  },
];

for (const element of array) {

    const { temperatura } = element;

    /* console.log(temperatura); */

}

const { temperatura = 200 } = array[0];

/* console.log(temperatura);

console.log(array[0]); */


let altura = array[0].altura;

let altura2 = 190;

console.log(altura);