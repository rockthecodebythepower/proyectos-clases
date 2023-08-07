const allPs$$ = document.querySelectorAll("p.ordenar");

const allTextContents = [];

const cambiarClase = (e) => {

    e.target.className = "rojo"

}

for (const p of allPs$$) {
    
    allTextContents.push(p.textContent);
    p.addEventListener("click", cambiarClase)

}

allTextContents.sort();

const ordenar = () => {

    for (let i = 0; i < allPs$$.length; i++) {
    
        allPs$$[i].textContent = allTextContents[i]
        
    }

}

const desordenar = (e) => {

    e.target.style.width = "400px";
    e.target.style.height = "100px"

    const copiaArrayTC = [...allTextContents];

    for (let i = 0; i < allPs$$.length; i++) {

        const posicion = Math.floor(Math.random() * copiaArrayTC.length);

        allPs$$[i].textContent = copiaArrayTC.splice(posicion, 1);
        
    }

}

const filtrar = (e) => {

    // el evento que se ha ejecutado .e .event .ev .paquito / el evento será el evento input
    // el evento me trae el ELEMENTO DONDE se ha ejecutado // su propiedad target
    // e.target -> input -> e.target.value -> input.value

    for (const p of allPs$$) {
        
        if (!p.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            p.style.display = "none";
        } else {
            p.style.display = "block";
        }

    }

}


document.querySelector("#ordenar").addEventListener("click", ordenar);
document.querySelector("#desordenar").addEventListener("click", desordenar);

document.querySelector("#filtrar").addEventListener("input", filtrar);


const eliminar = (event) => {

    event.target.parentElement.remove();

}

const allX = document.querySelectorAll("p.x");

for (const x of allX) {
    x.addEventListener("click", eliminar);
}