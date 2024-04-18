export const findClosestIndex = (array, numero) => {

    console.log(array);
    console.log(numero);

    let diferenciaMinima = Math.abs(numero - array[0]);
    let indiceMasCercano = 0;

    for (let i = 1; i < array.length; i++) {
        const diferenciaActual = Math.abs(numero - array[i]);
        if (diferenciaActual <= diferenciaMinima) {
            diferenciaMinima = diferenciaActual;
            indiceMasCercano = i;
        }
    }

    return indiceMasCercano;
}