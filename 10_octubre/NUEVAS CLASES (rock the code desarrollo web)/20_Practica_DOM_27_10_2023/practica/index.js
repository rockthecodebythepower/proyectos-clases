const emojis = ["😂", "😁", "😎", "😍", "😴", "🤐"];
const numbers = [32442, 234, 2, 34, 234, 23, 4, 23, 423, 4, 23, 4];

//! declaración
const printDivs = (selectorPadre, array) => {
    const div = document.querySelector(selectorPadre);

    // limpiar el contenedor
    div.innerHTML = ``;

    for (const element of array) {

        const p = document.createElement("p");

        p.textContent = element;

        p.addEventListener("click", (e) => e.target.remove());

        div.appendChild(p);
    }
}

//! ejecuciones
printDivs(".insert-num-here", numbers);
printDivs(".insert-emoji-here", emojis);


// saber que ha escrito el usuario
// controlar cuando quiere enviar el usuario el nuevo dato

//! Primero - acceder a los elementos (input), (button)
const input = document.querySelector("input");
const button = document.querySelector("button");

const insertarDato = () => {
    //! saber que ha escrito el usuario

    if (isNaN(parseInt(input.value)) === true) {
        // el código si el dato NO es un número
        console.log(input.value);
        emojis.push(input.value);
        printDivs(".insert-emoji-here", emojis);
    } else {
        // el código si el dato es un número
        numbers.push(parseInt(input.value));
        printDivs(".insert-num-here", numbers);
    }

    input.value = "";

}

//! controlar cuando quiere enviar el usuario el nuevo dato - "cuando haga click el botón"
button.onclick = insertarDato;