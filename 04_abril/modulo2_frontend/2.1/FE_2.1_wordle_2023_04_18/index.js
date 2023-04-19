export const comprobar = (palabraIntento, palabra) => {

    const arrayEstadosInputs = [];
    
    let contadorLetras = contadorLetrasFuncion(palabra);

    let contadorLetrasIntento = contadorLetrasFuncion(palabraIntento);

    for (let i = 0; i < palabra.length; i++) {
        const letraIntento = palabraIntento[i];
        const letra = palabra[i];

        arrayEstadosInputs[i] = {letra: letraIntento, resultado: "", cantidad: 0};

        if (contadorLetras[letraIntento]) {

            //! existe la letra de mi intento en mi palabra que tengo que encontrar
            arrayEstadosInputs[i] = {letra: letraIntento, resultado: "casi", cantidad: contadorLetras[letraIntento]};

            if (letra === letraIntento) {

                //! además de existir, está en la posición que debe estar
                arrayEstadosInputs[i] = {letra: letraIntento, resultado: "acertada", cantidad: contadorLetras[letraIntento]};
            }
        }
        
    }

    for (let i = 0; i < arrayEstadosInputs.length; i++) {
        const objeto = arrayEstadosInputs[i];
        const letra = palabraIntento[i];

        if (objeto.letra === letra && contadorLetras[letra]) {
            /* console.log("letra: " + letra);
            console.log("veces que aparece esa letra en la palabra que busca: " + contadorLetrasIntento[letra]);
            console.log("veces que tengo esa letra mi palabra: " + objeto.cantidad ) */

            if (objeto.resultado === "casi" && objeto.cantidad < contadorLetrasIntento[letra]) {
                objeto.resultado = ""
                if (i === palabraIntento.indexOf(letra)) {
                    objeto.resultado = "casi"
                }
            }
        }

        console.log()

    }

    return arrayEstadosInputs;

}

const contadorLetrasFuncion = (palabra) => {
    let contadorLetras = {}

    for (const letra of palabra) {
        if (contadorLetras[letra]) {
            contadorLetras[letra] = contadorLetras[letra] + 1;
        } else {
            contadorLetras[letra] = 1;
        }
    }
    return contadorLetras;
}