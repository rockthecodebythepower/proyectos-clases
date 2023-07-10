// TENEMOS QUE COMPROBAR SI EDAD ES MAYOR DE 18 O IGUAL DE 18 Y EL NOMBRE DE LA PERSONA CONTIENE UNA E Y NO TIENE DINERO Y ESTÁ ESCOLARIZADO O ES DE ESPAÑA

let edad = 18;
let nombre = "yeti";
let dinero = 390; // ? el número 0 en una condición es interpretado por javascript como FALSE
let escolarizado = false;
let nacionalidad = "España";

if ((edad > 18 || edad === 18) && nombre.includes("e") && !dinero && (escolarizado || nacionalidad === "España")) {
    console.log("La condición se cumple");
} else {
    console.log("La condición no se cumple");
}



// trusies
// falsies