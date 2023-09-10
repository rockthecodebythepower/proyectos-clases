// DOM -> document OBJECT model


// traducir el html a algo que entienda js -> objetos;

// seleccionar (traerme) ese select a mi js

const select$$ = document.querySelector("select");

// a mi me gustaría ver el valor del select cada vez que este cambie

select$$.addEventListener("change", () => pintar(select$$.value));

const pintar = (value) => {

    const titulo = document.createElement("h1");

    document.body.innerHTML = "";

    titulo.textContent = value;

    document.body.append(titulo)
}

if (5 < 6) {
    let nombre = "Olga";
}

console.log(nombre);