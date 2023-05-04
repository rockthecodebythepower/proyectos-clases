//Y -> &&
//O -> ||
// == -> Igual que
// === -> Estrictamente igual
// > -> Mayor que
// >= -> Mayor o igual que
// < -> Menor que
// <= -> Menor o igual que
//NO -> !

let firstName = "Bruce"

if (firstName === "Bruce") {
  console.log("Te llamas Bruce")
} else {
  console.log("No te llamas Bruce")
}

//

const habitacionLimpia = true
const deberesHechos = false

if (habitacionLimpia && deberesHechos) {
  console.log("Puedes jugar al ordenador")
} else {
  console.log("Termina tus cosas primero")
}

const tengocarnet = false
const tengocoche = true

if (tengocarnet || tengocoche) {
  console.log("Puedes conducir hasta Málaga")
} else {
  console.log("Te tienes que ir en tren")
}
