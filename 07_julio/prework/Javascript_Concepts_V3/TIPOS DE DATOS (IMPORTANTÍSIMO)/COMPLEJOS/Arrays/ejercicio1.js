/* sin usar funciones ni métodos como podría quitar la posición 4 de mi array y poner un nuevo valor */

const nombres = ["Alicia", "Ainhoa", "Paquito", "Carlos", "Jose María", "Carlos" ];

//? quiero quitar a Carlos y poner a Alejandro;

/* nombres[2] = "Alejandro"; */

/* necesito encontrar la posición donde se encuentra carlos */


for (let i = 0; i < nombres.length; i++) {
    
    if (nombres[i] === "Carlos") {
        nombres[i] = "Alejandro"
    }
    
}


console.log(nombres);

//! de momento sin métodos
/* const posicion = nombres.indexOf("Carlos");

nombres.splice(posicion, 1, "Alejandro"); */