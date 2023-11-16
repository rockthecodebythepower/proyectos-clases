import "./FoodImage.css";

export const createFoodImage = (array) => {

    const background = document.createElement("div");

    background.className = "background";

  for (const element of array) {
    let anchoAleatorio = Math.random() * window.innerWidth;
    let altoAleatorio = Math.random() * window.innerHeight;
    let estilosAleatorios;
    let stringFinal;

    if (element.aleatorio) {
        estilosAleatorios = `style="top: ${altoAleatorio}px; left: ${anchoAleatorio}px"`;
        stringFinal = `<img src="${element.url}" class="food-image ${element.nombre}" ${estilosAleatorios}/>`
    } else {
        stringFinal = `<img src="${element.url}" class="food-image ${element.nombre}"/>`
    }

    background.innerHTML += stringFinal;
    document.body.appendChild(background);
  }
};