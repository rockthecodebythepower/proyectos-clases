import { lugaresVacacionales } from "../../data/holidays";
import { getPrice } from "../Price/Price";
import { getRate } from "../Rate/Rate";
import "./Place.css";

export const renderPlaces = () => {
  let places = ``;

  for (const place of lugaresVacacionales) {
    places += `
            <div class="place">
                <h3>${place.nombre}</h3>
                <div class="img_wrp">
                    <img src="${place.imagen}"/>
                </div>
                <div class="info">
                    <div>${getRate(place.puntuacion)}</div>
                    <p>${getPrice(place.costo)}</p>
                </div>
            </div>
        `;
  }

  return places;
};