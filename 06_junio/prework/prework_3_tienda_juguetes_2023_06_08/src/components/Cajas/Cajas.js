import "./Cajas.css";
import { pintarProductos } from "../Productos/Productos";

const cajas = [
  {
    nombre: "Caja de ladrillos creativos mediana",
    precio: 29.99,
    imagen:
      "https://lacajadelosclicks.com/wp-content/uploads/2017/06/10696-ladrillos-creativos-lego.png",
    descuento: 20,
  },
  {
    nombre: "Caja de ladrillos creativos mediana",
    precio: 49.99,
    imagen:
      "https://lacajadelosclicks.com/wp-content/uploads/2017/06/10698-caja-de-ladrillos-creativos-grande-lego-classic.png",
    descuento: 8,
  },
  {
    nombre: "Almacenamiento apilable para fans de LEGO®",
    precio: 34.99,
    imagen:
      "https://www.lego.com/cdn/cs/set/assets/bltb62939f40633ae24/5006913_alt1.png?fit=bounds&format=png&width=320&height=320&dpr=1",
  },
  {
    nombre: "Caja de ladrillos para los almuerzos de los fans de LEGO®",
    precio: 9.99,
    imagen:
      "https://www.lego.com/cdn/cs/set/assets/blta1eb6e072180050f/5006948_alt1.png?fit=bounds&format=png&width=320&height=320&dpr=1",
  },
];

export const initCajas = () => {
  const main$$ = document.querySelector("#main");

  main$$.innerHTML = `
  <h1>Esto es la página de cajas</h1>
        <div id="productos">
            ${pintarProductos(cajas, "var(--terciary)")}
        </div>
    `;
};