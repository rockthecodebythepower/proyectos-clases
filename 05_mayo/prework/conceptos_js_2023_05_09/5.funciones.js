function sayHello() {
  console.log("Hola!")
}

sayHello()

//

function sayHelloWithName(name) {
  console.log("Hola " + name)
}

sayHelloWithName("Peter Parker")

//

function sum(numA, numB) {
  console.log(numA + numB)
}

sum(2, 5)
sum(500, 20)

//

function resta(numA = 1, numB = 2) {
  console.log(numA - numB)
}

resta()
resta(5)
resta(10, 5)

//

function calcAge(bornYear, currentYear, name) {
  const age = currentYear - bornYear
  console.log("Te llamas " + name + " y tienes " + age + " años.")
}

calcAge(1990, 2023, "Antonio")
calcAge(1869, 2023, "Gandhi")

//

function createAddamsFamilyMember(name) {
  const addamsName = name + " Addams"
  return addamsName
}

const fetido = createAddamsFamilyMember("Fétido")
console.log(fetido)
const miercoles = createAddamsFamilyMember("Miércoles")
console.log(miercoles)
const cosa = createAddamsFamilyMember("Cosa")
console.log(cosa)

//
const family = []

function addFamilyMember(member) {
  family.push(member)
}

addFamilyMember(fetido)
addFamilyMember(miercoles)
addFamilyMember(cosa)

console.log(family)
