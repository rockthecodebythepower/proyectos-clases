//? En una función tengo que mandar las cosas que necesito para su funcionamiento en las ()

//? puede aceptar uno o varios parametros

//? sirve para repetir un fragmento de codigo

//? normalmente las queremos hacer reutilizables

//? Una cajita con un código que podemos necesitar varias veces, así podemos reutilizar dicho código sin escribirlo en cada ocasión

//? Una función suele resolver solo una acción especifica, para tenerla mas genérica posible, normalmente una función hace una cosa

//? Una cajita a la que le entra algo, y sale otra cosa

//! sintaxis

//* función flecha o arrow function
//const nombreFuncion = (parámetros (0 o más)) => {
//    el código que vamos a ejecutar en la función debe ir dentro de las llaves
// }
// todo esto en su conjunto conforma la declaración de la función
const funcion = () => {

}

//* función normal
// function nombreFuncion (parámetros (0 o más)) {
//    el código que vamos a ejecutar en la función debe ir dentro de las llaves
// }
// todo esto en su conjunto conforma la declaración de la función
function funcion2 (funcionLaQueSea) {
    funcionLaQueSea();
}

function funcion3 () {

}

funcion2(funcion3)