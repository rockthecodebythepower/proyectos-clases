const zapatillas = [
  {
    id: 1,
    nombre: "Nike Air Blanco",
    precio: 79.99,
    img: "./assets/NikeAirBlanca.png",
    estrellas: 4,
    modelo: "Air",
    colores: ["black", "white"],
  },
  {
    id: 2,
    nombre: "Nike Air Force 1 Black",
    precio: 89.99,
    img: "./assets/NikeAirForce1.png",
    estrellas: 4,
    modelo: "Air Force 1",
    colores: ["black"],
  },
  {
    id: 3,
    nombre: "Nike Air Force 1 White",
    precio: 99.99,
    img: "./assets/NikeAirForce1Blancas.png",
    estrellas: 3,
    modelo: "Air Force 1",
    colores: ["grey", "white"],
  },
  {
    id: 4,
    nombre: "Nike Air Force 1 Pastel",
    precio: 69.99,
    img: "./assets/NikeAirForce1Pastel.jpg",
    estrellas: 5,
    modelo: "Air Force 1",
    colores: ["#ede5cf", "#c5cadc", "#f6f6f6", "#d0b8b7", "#e9eaef"],
  },
  {
    id: 5,
    nombre: "Nike Air Max Dawn",
    precio: 74.99,
    img: "./assets/NikeAirMaxDawn.png",
    estrellas: 2,
    modelo: "Air Max",
    colores: ["white"],
  },
  {
    id: 6,
    nombre: "Nike Air Max Furyosa",
    precio: 109.99,
    img: "./assets/NikeAirMaxFuryosa.png",
    estrellas: 1,
    modelo: "Air Max",
    colores: ["grey", "purple", "yellow"],
  },
  {
    id: 7,
    nombre: "Nike Air Max Pulse",
    precio: 64.99,
    img: "./assets/NikeAirMaxPulse.png",
    estrellas: 2,
    modelo: "Air Max",
    colores: ["grey", "white"],
  },
  {
    id: 8,
    nombre: "Nike Air Vapor Max Blue",
    precio: 119.99,
    img: "./assets/NikeAirVaporMax.png",
    estrellas: 4,
    modelo: "Air Vapor Max",
    colores: ["blue"],
  },
  {
    id: 9,
    nombre: "Nike Amarillo",
    precio: 84.99,
    img: "./assets/NikeAmarillo.png",
    estrellas: 4,
    modelo: "Amarillo",
    colores: ["yellow"],
  },
  {
    id: 10,
    nombre: "Nike Court Legacy",
    precio: 94.99,
    img: "./assets/NikeCourtLegacy.png",
    estrellas: 4,
    modelo: "Court Legacy",
    colores: ["white"],
  },
  {
    id: 11,
    nombre: "Nike Dunk Low",
    precio: 75.99,
    img: "./assets/NikeDunkLow.png",
    estrellas: 4,
    modelo: "Dunk Low",
    colores: ["black", "white"],
  },
  {
    id: 12,
    nombre: "Nike Kiger 9",
    precio: 109.99,
    img: "./assets/NikeKiger9.png",
    estrellas: 1,
    modelo: "Kiger",
    colores: ["brown"],
  },
  {
    id: 13,
    nombre: "Nike Motiva Premium",
    precio: 89.99,
    img: "./assets/NikeMotivaPremium.png",
    estrellas: 3,
    modelo: "Motiva Premium",
    colores: ["pink", "white"],
  },
];

const MODELOS = [];

let MODELO = "";
let ESTRELLAS = 0;

const filtrar = () => {
    const filtered = [];

    for (const zapa of zapatillas) {
        if (MODELO.includes(zapa.modelo) && ESTRELLAS <= zapa.estrellas ) {
            filtered.push(zapa);
        }
    }

    printZapas(filtered)
}

const fillModelos = (zapas) => {
    MODELOS.splice(0);
    for (const zapa of zapas) {
        if (!MODELOS.includes(zapa.modelo)) {
            MODELOS.push(zapa.modelo);
        }
    }
}

fillModelos(zapatillas);

const createSelectModel = () => {
    const divFiltros = document.querySelector("#filtros");

    const selectModel = document.createElement("select");

    for (const modelo of MODELOS) {
        const option = document.createElement("option");

        option.value = modelo;
        option.textContent = modelo;

        selectModel.appendChild(option);
    }

    divFiltros.appendChild(selectModel);

    selectModel.addEventListener("change", (event) => {
        MODELO = event.target.value;
        filtrar();
    })

}

const printZapas = (zapas) => {
  const divZapas = document.querySelector("#zapatillas");
  divZapas.innerHTML = "";

  let colorAnterior = "";

  for (const zapa of zapas) {
    const divZapa = document.createElement("div");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    const divEstrellas = document.createElement("div");
    const divColores = document.createElement("div");

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement("div");
      estrella.className = "estrella";
      if (i <= zapa.estrellas) {
        estrella.classList.add("rellena");
      }
      divEstrellas.appendChild(estrella);
    }

    for (const color of zapa.colores) {
        const colorHTML = document.createElement("div");

        colorHTML.className = "color";
        colorHTML.style.backgroundColor = color;

        divColores.appendChild(colorHTML);
    }

    divColores.className = "colores";
    divZapa.className = "flex-container";
    divImg.classList.add("imgContainer");
    divEstrellas.classList.add("estrellas", "flex-container");
    img.src = zapa.img;
    nombre.textContent = zapa.nombre;
    precio.textContent = `${zapa.precio} €`;

    let colorAleatorio = `var(--rtc-special-color-${
      Math.floor(Math.random() * 7) + 1
    })`;

    while (colorAleatorio === colorAnterior) {
      colorAleatorio = `var(--rtc-special-color-${
        Math.floor(Math.random() * 7) + 1
      })`;
    }

    colorAnterior = colorAleatorio;

    divImg.style.backgroundColor = colorAleatorio;

    divZapa.appendChild(divColores);
    divZapa.appendChild(divImg);
    divImg.appendChild(img);
    divZapa.appendChild(nombre);
    divZapa.appendChild(precio);
    divZapa.appendChild(divEstrellas);
    divZapas.appendChild(divZapa);
  }
};

printZapas(zapatillas);
createSelectModel();