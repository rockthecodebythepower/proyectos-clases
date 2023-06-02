//! librería es aquel trozo de código que han creado otras personas con funciones y objetos que podemos utilizar para llevar a cabo ciertas funcionalidades en nuestras aplicaciones.
const readline = require("readline");

//! otra librería que viene con node.js
const { exec } = require("child_process");

const userName = "rock the code";
const password = "123";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const virus = () => {
  for (let i = 0; i < 70; i++) {
    exec("C:/Users/MrCorocottax/Desktop/hacker.jpg", (error) => {
      console.log("lanzado");
    });
  }
};

rl.question("¿Cuál es tu nombre de usuario?", (nombre) => {
  if (userName === nombre) {
    rl.question("¿Cuál es tu contraseña?", (contraseña) => {
      if (contraseña === password) {
        console.log("Te has logueado");
      } else {
        virus();
        rl.close();
      }
    });
  } else {
    virus();
    rl.close();
  }
});
