//Declarar una función

function sayHello() {
  console.log("Hola!");
}

//Ejecutar una función
sayHello();

//Argumentos

function sayHelloWithName(firstName) {
  if (typeof firstName === "string") {
    console.log("Buenos días " + firstName);
  } else {
    console.log("Oye, tienes que pasar un string");
  }
}

sayHelloWithName("Francisco");
sayHelloWithName("Peter");
sayHelloWithName(2);

//Con varios argumentos
function sum(numA, numB) {
  const total = numB + numA;
  console.log("El total es: " + total);
}

sum(3, 5);

//Argumentos por defecto
function duplicate(numA, numB = 2) {
  const total = numA * numB;
  console.log(total);
}

duplicate(2);
duplicate(2, 3);

//Return
function transformerName(firstName, lastName) {
  if (firstName === undefined || lastName === undefined) {
    return;
  } else {
    const transformerFirstName = firstName + "bot";
    const transformerLastName = lastName + "tron";
    const fullName = transformerFirstName + " " + transformerLastName;
    return fullName;
  }
}

const antonio = transformerName("Antonio", "Rosales");
console.log(antonio);
const jennifer = transformerName("Jennifer", "Balabuch");
console.log(jennifer);
