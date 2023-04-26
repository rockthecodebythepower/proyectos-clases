const readline = require("readline")

//Vamos crear una función que dado un rango por argumento te genere un número aleatorio

const generateRandomNumber = (min, max) => {
  //Esta función utiliza el método random para generar un número aleatorio entre 0 y 1, que luego es multiplicado por la diferencia entre max y min y sumado a min. El resultado final se redondea con el método Math.floor
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const play = () => {
  //Almacenamos el número aleatorio
  const randomNumber = generateRandomNumber(1, 50)
  //Definimos el número máximo de intentos
  const maxAttempts = 10
  //Almacenamos en una variable los intentos actuales
  let attempts = 0
  //Crear una interfaz de lectura de entrada para leer lo que escribe el usuario por consola
  const readEntry = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  //Creamos un función para ejecutar un intento de adivinar el número
  const tryAttempt = () => {
    //Vamos a almacenar el número que ingresa el usuario tras ser preguntado por la terminal
    readEntry.question("Introduce un número entre 1 y 50: ", (entry) => {
      //Lo parseamos a número entero porque la terminal detecta como string las entradas del usuario
      const userNumber = parseInt(entry)
      //Comprobamos que el usuario ha introducido un valor numérico
      if (isNaN(userNumber)) {
        //Si no es un número valido nos salimos de la función y volvemos a empezar el intento
        console.log("Por favor, introduce un número válido")
        tryAttempt()
        return
      }

      //Si es un número, le sumamos 1 al intento del usuario
      attempts++

      //Vamos a comprobar el caso en el que el numero aleatorio es adivinado por el usuario
      if (userNumber === randomNumber) {
        console.log(
          `Enhorabuena, has adivinado el número en ${attempts} intentos! 🎉`
        )
        //Cerramos la interfaz de lectura de entrada y nos salimos de la función
        readEntry.close()
        return
      } else if (attempts === maxAttempts) {
        //Si hemos alcanzado el límite de intentos
        console.log(
          `Has agotado tus ${maxAttempts} intentos. El número correcto era ${randomNumber}.`
        )
        //Mostramos al usuario el número que era, cerramos la interfaz de lectura de entrada y nos salimos de la función
        readEntry.close()
        return
      } else if (userNumber < randomNumber && randomNumber - userNumber <= 5) {
        console.log("Caliente 🔥")
      } else if (userNumber > randomNumber && userNumber - randomNumber <= 5) {
        console.log("Caliente 🔥")
      } else {
        console.log("Frio ❄️")
      }

      tryAttempt()
    })
  }
  //Una vez que hemos hecho todas las comprobaciones, si no ha salido por ningún return cuando se pierde del todo o se acierta el número, volvemos a empezar un nuevo intento
  tryAttempt()
}

//Ejecutamos el juego
play()
