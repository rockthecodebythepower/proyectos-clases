const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const buscarPalabraMasLarga = (array) => {

  let palabraMasLarga = "";

  for (const element of array) {
    if (element.length > palabraMasLarga.length) {
      palabraMasLarga = element;
    }
  }

  return palabraMasLarga
};


console.log(buscarPalabraMasLarga(avengers))