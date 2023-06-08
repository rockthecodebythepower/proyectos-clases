import "./Construcciones.css";
import { pintarProductos } from "../Productos/Productos";

const construcciones = [
  {
    nombre: "Dobby™ el Elfo Doméstico",
    precio: 29.99,
    imagen:
      "https://www.lego.com/cdn/cs/set/assets/blt60c4eccd637be544/76421.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    descuento: 10,
  },
  {
    nombre: "Expecto Patronum",
    precio: 69.99,
    imagen:
      "https://www.lego.com/cdn/cs/set/assets/blt30d1792d78007708/76414.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    descuento: 8,
  },
  {
    nombre: "PEUGEOT 9X8 24H Le Mans Hybrid Hypercar",
    precio: 199.99,
    imagen:
      "https://www.lego.com/cdn/cs/set/assets/blt51a62f6f7514d31e/42156.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    nombre: "Minifigura LEGO® Gigante",
    precio: 49.99,
    imagen:
      "https://www.lego.com/cdn/cs/set/assets/blt742e8599eb5e8931/40649.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    descuento: 90,
  },
];

export const initConstrucciones = () => {
  const main$$ = document.querySelector("#main");

  main$$.innerHTML = `
        <h1>Compra nuestras construcciones</h1>
        <div id="productos">
            ${pintarProductos(construcciones, "var(--primary)")}
        </div>
    `;
};