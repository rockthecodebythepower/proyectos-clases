//! yo no puedo utilizar el bucle forin para hacer vueltas específicas sin tener un array, string u objeto de apoyo

//? en principio nosotros sólo podemos recorrer los tipos de datos iterables "array" y strings

//? no podemos recorrer un objeto

const user = {
  name: "paquito",
  email: "paquito@paquito.com",
  password: "pqowieur",
  mascotas: true,
};

/* console.log(Object.keys(user)); */
/* const array = ["name", "email", "password", "mascotas"]; */

for (const i = 0; i < Object.keys(user).length; i++) {
  const key = Object.keys(user)[i];
  console.log(`${key}: ${user[key]}`);
}

//* forin podríamos suponer o entender que entre muchas comillas """recorrer""" un objeto

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}