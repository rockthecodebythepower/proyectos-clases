const select = document.querySelector("select");

const peticion = async (e) => {

    const respuesta = await fetch("http://localhost:3000/api/v1/extensiones/" + e.target.value);

    const res = await respuesta.json();

    pintar(res)

}

const pintar = (extensiones) => {

    const extensiones$$ = document.querySelector("#extensiones");

    extensiones$$.innerHTML = "";

    for (const extension of extensiones) {
        
        extensiones$$.innerHTML += `
            <div class="extension">
                <h2>${extension.nombre}</h2>
                <p>${extension.utilidad}</p>
                <div class="estrellas">${pintarEstrellas(extension.puntuacion)}</div>
            </div>
        `

    }

}

const pintarEstrellas = (puntuacion) => {

    let estrellas = ``

    for (let i = 0; i < puntuacion; i++) {
        
        estrellas += `<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png"/>`
        
    }

    return estrellas;

}

select.addEventListener("change", peticion);