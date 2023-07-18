const array = [1, 2, 3, 4, 45, 5, 6, 654, 345, 3423, 32, 23];

/* array.forEach((elemento) => console.log(elemento)) */

/* const arrow = () => console.log("alsdflaksd"); */


function foreachCasero(array, funcion) {
    
    for (let i = 0; i < array.length; i++) {
        
        funcion(array[i], i);
        
    }

}

function getElement (element) {
    console.log(element)
}

foreachCasero(array, getElement);



array.forEach((elemento) => {
    const app = document.querySelector("aslkdfjlas");

    const div = document.createElement("sdklfklasd");
});


const arrow = (num1, num2) => {
    num1 + num2
};