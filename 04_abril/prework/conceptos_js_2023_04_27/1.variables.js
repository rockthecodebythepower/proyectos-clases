let movie
movie = "Titanic"
console.log(movie)

//

let show = "Breaking Bad"
console.log(show)

//NO!
let cosa = "Paco"
let item1 = "Camiseta"

//SI! -> Letras, digitos y simbolos -> . _
// Solo minusculas
// camelCase
let firstName = "Paco"
let product = "Camiseta"

//Ambito de bloque, let y const

//let
let videogame = "Crash Bandicoot"
videogame = "Metal Gear"
console.log(videogame)

if (videogame === "Metal Gear") {
  let greetings = "Juegazo!"
  console.log(greetings)
}

//No podemos hacer un console.log(greetings) porque esta dentro del bloque del condicional

//const
const character = "Rick"
//character = "Morty"
if (character === "Rick") {
  const quote = "Burp!"
  console.log(quote)
}

//console.log(quote)
