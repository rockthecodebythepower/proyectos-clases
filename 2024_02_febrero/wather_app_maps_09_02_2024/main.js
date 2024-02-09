import "./style.css";
import { imgs } from "./src/data/weatherImages.js";

const weather$$ = document.querySelector("#weather");

//                                 lat      long  zoom
let map = L.map("map").setView([40.3095, -3.6842], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="#">Aplicación del tiempo</a>',
}).addTo(map);

const realizarPeticion = async (e) => {

  weather$$.innerHTML = ``;

  const { lat, lng } = e.latlng;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const weather = await response.json();

  const datos = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h2");
  const temperatura = document.createElement("h3");
  const humedad = document.createElement("p");
  const salidaSol = document.createElement("p");
  const ocultaSol = document.createElement("p");
  const viento = document.createElement("p");

  const salida = new Date(weather.sys.sunrise * 1000);
  const puesta = new Date(weather.sys.sunset * 1000);

  name.textContent = weather.name;
  temperatura.textContent = Math.round(weather.main.temp - 273, 15) + "Cº";
  humedad.textContent = "Humedad: " + weather.main.humidity + "%";
  salidaSol.textContent = "Hora de salida del sol: " + salida.getHours() + ":" + salida.getMinutes();
  ocultaSol.textContent = "Hora de la puesta del sol: " + puesta.getHours() + ":" + puesta.getMinutes();
  viento.textContent = "Viento: " + weather.wind.speed;
  img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  weather$$.append(datos)
  datos.append(name);
  datos.append(temperatura);
  datos.append(humedad);
  datos.append(salidaSol);
  datos.append(ocultaSol);
  datos.append(viento);
  datos.append(img);

  weather$$.style = `background-image: url(${
    imgs.find((img) => img.name === weather.weather[0].main).img
  })`;

  console.log(weather);
};

map.on("click", realizarPeticion);
