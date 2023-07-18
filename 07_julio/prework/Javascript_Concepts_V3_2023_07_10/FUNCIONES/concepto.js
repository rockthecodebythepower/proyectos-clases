//? el código se lee de arriba a abajo y de izquierda a derecha

console.log("1");

//! TODAS LAS FUNCIONES tienen (parámetros) { funcionamiento }

function saludar () { //! declarar la función (se guarda en memoria) saludar línea 7.
    //* el contenido de la función no se ejecuta hasta que exprésamente lo indique
    console.log("2");
}


saludar(); //! ejecutando la función
saludar(); //! ejecutando la función

console.log("3");

const saludar2 = () => {

}

//? tienen una pequeña diferencia de sintaxis y son prácticamente iguales

//* 123
//* 132
//* 213
//* 3
//* 13  -> 


//* 1