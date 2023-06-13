const colores = ["rojo", "naranja", "azul", "verde", "magenta"];

//! el método join servirá crear un string partiendo de los diferentes valores del array, separados por el contenido que se elija
//* este método recibe un parámetro que será como va a dividir los diferentes elementos del array dentro del string, es decir si le paso "/" -> rojo/naranja/azul/verde/magenta
//* este método devolverá el string generado mediante las propiedades que hemos indicado pero el array original no se ve modificado

console.log(colores.join("()"));

console.log(colores);