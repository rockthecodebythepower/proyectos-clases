//HOISTING
console.log(sayHello("Peter"))

function sayHello(firstName) {
  return "Hello " + firstName;
}

const sayHelloArrow = (firstName) => {
  return "Hello " + firstName;
};



