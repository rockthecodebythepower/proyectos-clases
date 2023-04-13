export const pintarCarta = (res, ciudad) => {
  const nombreCiudad$$ = document.querySelector(".nombre_ciudad");
  const icono$$ = document.querySelector(".icono");
  const grados$$ = document.querySelector(".grados_titulo");
  const viento$$ = document.querySelector(".viento_dato");

  nombreCiudad$$.textContent = ciudad;
  grados$$.textContent = res.temperature;
  viento$$.textContent = res.wind;

  if (res.description.toLowerCase().includes("sun")) {
    icono$$.src = "./public/assets/sol.png";
  } else if (res.description.toLowerCase().includes("cloud")) {
    icono$$.src = "./public/assets/parcialmente_nublado.png";
  } else if (res.description.toLowerCase().includes("rain")) {
    icono$$.src = "./public/assets/lluvia_soleada.png";
  } else if (res.description.toLowerCase().includes("clear")) {
    icono$$.src = "./public/assets/lluvia.png";
  } else if (res.description.toLowerCase().includes("snow")) {
    icono$$.src = "./public/assets/nieve.png";
  } else if (res.description.toLowerCase().includes("storm")) {
    icono$$.src = "./public/assets/trueno.png";
  } else if (res.description.toLowerCase().includes("wind")) {
    icono$$.src = "./public/assets/viento.png";
  }

  /* switch (res.description) {
    case "Sunny":
      icono$$.src = "./public/assets/sol.png";
      break;
    case "Partly cloudy":
      icono$$.src = "./public/assets/parcialmente_nublado.png";
      break;
    case "Light rain" || "Patchy rain possible":
      icono$$.src = "./public/assets/lluvia_soleada.png";
      break;
    case "Rain" || "Rainny":
      icono$$.src = "./public/assets/lluvia.png";
      break;
    case "Clear":
      icono$$.src = "./public/assets/despejado.png";
      break;
    case "Snow" || "Light snow":
      icono$$.src = "./public/assets/nieve.png";
      break;
    case "Storm" || "Stormy" || "Electric storm":
      icono$$.src = "./public/assets/trueno.png";
      break;
    default:
      break;
  } */

  decirTiempo(res, ciudad);

  console.log(res.description);
};

const decirTiempo = (res, ciudad) => {
  let tiempo = "";

  if (res.description.toLowerCase().includes("sun")) {
    tiempo = "soleado";
  } else if (res.description.toLowerCase().includes("cloud")) {
    tiempo = "nublado";
  } else if (res.description.toLowerCase().includes("rain")) {
    tiempo = "lluvioso";
  } else if (res.description.toLowerCase().includes("clear")) {
    tiempo = "increíble con el cielo despejado";
  } else if (res.description.toLowerCase().includes("snow")) {
    tiempo = "nevado";
  } else if (res.description.toLowerCase().includes("storm")) {
    tiempo = "tormentoso";
  } else if (res.description.toLowerCase().includes("wind")) {
    tiempo = "muy ventoso";
  }

  const frase = new SpeechSynthesisUtterance(
    `en ${ciudad} hace un día ${tiempo}, hay una temperatura de ${res.temperature} y hace un viento de ${res.wind}`
  );

  speechSynthesis.speak(frase);
};
