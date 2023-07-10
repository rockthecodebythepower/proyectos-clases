/* function sayHello() {
  console.log("Hello");
} */

const sayHello = () => {
  console.log("Hello");
};

sayHello();

// Retorno implicito
const returnHello = () => "Hello!";
const hello = returnHello();
console.log(hello);

//Si tenemos un argumento no hace falta poner parentesis
const duplicate = (numA) => numA * 2;
console.log(duplicate(2));
