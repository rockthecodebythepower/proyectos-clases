import "./rps.css"

let userScore = 0
let computerScore = 0

const template = () => {
  return `
    <h2>Rock, Paper & Scissors</h2>
    <button id="playBtn">Play</button>
    <h3 id="rspResult">↑ Click play button ↑</h3>
    <div>
    <h3 id="userScore">User: ${userScore}</h3>
    <h3 id="computerScore">Computer: ${computerScore}</h3>
    </div>
    `
}

const play = () => {
  //Recuperamos el h3 para imprimir el resultado
  const result = document.querySelector("#rspResult")
  const userScoreH3 = document.querySelector("#userScore")
  const computerScoreH3 = document.querySelector("#computerScore")
  //Mostramos los contandores como están
  userScoreH3.innerHTML = `User: ${userScore}`
  computerScoreH3.innerHTML = `Computer: ${computerScore}`
  //Definimos las opciones
  const options = ["rock", "paper", "scissors"]
  //Vamos a crear la elección de la maquina mediante un Math Random con un limite de 3 (0,1,2)
  const computerChoice = options[Math.floor(Math.random() * 3)]
  //Almacenamos la respuesta del usuario en minuscula en userChoice
  const userChoice = prompt("Choose Rock, Paper or Scissors:").toLowerCase()
  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    alert("Please choose a valid option")
    //Si no se cumplen estas condiciones nos salimos de la función
    return
  }
  //Esto se va a ejecutar si las opciones elegidas por el usuario son validas
  if (userChoice === computerChoice) {
    //Si son iguales las opciones de usuario y del ordenador
    result.innerHTML = `${userChoice} 🆚 ${computerChoice} = Tie!`
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //Si gana el usuario
    result.innerHTML = `${userChoice} 🆚 ${computerChoice} = You won!`
    userScore++
    userScoreH3.innerHTML = `User: ${userScore}`
  } else {
    result.innerHTML = `${userChoice} 🆚 ${computerChoice} = You lose 😭`
    computerScore++
    computerScoreH3.innerHTML = `Computer: ${computerScore}`
  }
  //Vamos a comprobar la puntuación de cada uno y asignarle una clase al texto
  if (userScore > computerScore) {
    userScoreH3.className = "winner"
    computerScoreH3.className = "loser"
  } else if (userScore < computerScore) {
    userScoreH3.className = "loser"
    computerScoreH3.className = "winner"
  } else {
    userScoreH3.className = "tie"
    computerScoreH3.className = "tie"
  }

  //Al terminar de jugar, cambiamos el texto del botón por Jugar otra vez
  document.querySelector("#playBtn").innerHTML = "Next match"

  if (userScore === 3) {
    result.innerHTML = "🎉 PLAYER WINS! 🎉"
    userScoreH3.innerHTML = ""
    computerScoreH3.innerHTML = ""
    document.querySelector("#playBtn").innerHTML = "Reset"
    userScore = 0
    computerScore = 0
  } else if (computerScore === 3) {
    result.innerHTML = "🎉 COMPUTER WINS! 🎉"
    userScoreH3.innerHTML = ""
    computerScoreH3.innerHTML = ""
    document.querySelector("#playBtn").innerHTML = "Reset"
    userScore = 0
    computerScore = 0
  }
}

const listeners = () => {
  document.querySelector("#playBtn").addEventListener("click", () => {
    play()
  })
}

export const printTemplate = () => {
  document.querySelector("#rps").innerHTML = template()
  listeners()
}
