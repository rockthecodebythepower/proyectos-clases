const gotg = ["Rocket", "Starlord", "Gamora", "Groot", "Drax"]

//Posicion -> 0,1,2,3,4
//Longitud -> 1,2,3,4,5

const starlord = gotg[1]
console.log(starlord)

//Podemos averiguar la longitud de un array
//Cuando os enfadeis por no saber escribir LENGTH -> GO TO HELL
console.log(gotg.length)

//METODOS

//push
gotg.push("Adam Warlock")
console.log(gotg)
//reverse
gotg.reverse()
console.log(gotg)
//shift
gotg.shift()
console.log(gotg)
//unshift
gotg.unshift("Lyla")
//pop
gotg.pop()
console.log(gotg)
//sort
gotg.sort()
console.log(gotg)
//splice
gotg.splice(1, 1, "Mantis")
console.log(gotg)

//METODOS QUE NO MODIFICAN EL ARRAY ORIGINAL
//concat
console.log(gotg.concat("Adam Warlock"))
//join
console.log(gotg.join("---"))
//toString
console.log(gotg.toString())
//slice
console.log(gotg.slice(2, 5))
//indexOf
console.log(gotg.indexOf("Groot"))
console.log(gotg.indexOf("Spiderman"))
//includes
console.log(gotg.includes("Groot"))
console.log(gotg.includes("Hulk"))
