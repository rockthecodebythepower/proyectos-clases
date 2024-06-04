//! VARIABLES
//! TIPOS DE DATOS
//! BUCLES
//! CONDICIONALES
//! FUNCIONES

/* function concat (palabra1 = "Hola ", palabra2) {

    console.log(palabra1 + palabra2);

}


concat("Adios ", "Paquito");
concat(undefined, "Juanito");
concat(undefined, "Julia"); */

const date = new Date();
formatDate(date);

function formatDate(d) {
  let year = d.getFullYear();
  let month =
  d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth();
  let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();

  console.log(day + "/" + month + "/" + year);
}

const date2 = new Date(1704063600000);
formatDate(date2);
