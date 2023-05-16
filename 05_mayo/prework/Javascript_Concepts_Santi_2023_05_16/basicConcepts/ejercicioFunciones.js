//? Implementa una función llamada sumarNumeros que reciba dos parámetros numéricos, num1 y num2. La función debe retornar la suma de ambos números. Luego, llama a la función pasando los números 5 y 8 como argumentos e imprime el resultado por consola

function sumarNumeros(num1, num2) {
  return num1 + num2;
}

console.log(sumarNumeros(5, 8));

//? Implementa una función llamada calcularPromedio que reciba un array de números llamado numeros como parámetro. La función debe calcular el promedio de todos los números en el array y retornarlo. Luego, crea una segunda función llamada imprimirEstado que reciba el promedio como parámetro. Esta función debe imprimir por consola si el promedio es mayor o igual a 7. Si es mayor o igual a 7, debe imprimir 'Aprobado', de lo contrario, debe imprimir 'Reprobado'. Finalmente, crea un array de números con al menos 5 elementos y llama a la función calcularPromedio pasándole este array como argumento. Luego, llama a la función imprimirEstado pasándole el promedio calculado como argumento.

function calcularPromedio(numeros) {

    if (!numeros.length) {
        return "Debes pasarme un array con números"
    }

    const promedio = numeros.reduce((suma, numero) => suma + numero, 0) / numeros.length;

    imprimirEstado(promedio);

}

function imprimirEstado (promedio) {

    if (promedio >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
    

}

console.log(calcularPromedio([3, 4, 5, 5, 9]));