//Picapiedras

const picapiedras = [];

const generatePicapiedras = (firstName) => {
  const newName = firstName + " Picapiedra";
  picapiedras.push(newName);
};

generatePicapiedras("Pedro");
generatePicapiedras("Vilma Traca");
generatePicapiedras("Dino");
generatePicapiedras("Peebles");

console.log(picapiedras);

//Calculadora de edad

const calculateAge = (firstName, bornYear, currentYear = 2023) => {
  const age = currentYear - bornYear;
  console.log(firstName + " tiene " + age + " años.");
};

calculateAge("Antonio", 1990);
calculateAge("Freddy Mercury", 1946, 1990);

//Sumar array de numeros
const sumArrays = (numList) => {
  let count = 0;
  for (const num of numList) {
    count += num;
  }
  console.log("El total es:" + count);
};

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumArrays(numberList);
