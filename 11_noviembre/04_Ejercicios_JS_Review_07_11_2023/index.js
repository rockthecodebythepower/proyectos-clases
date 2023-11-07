import { pintarMejorProducto } from "./src/bestProduct.js";
import { pintarProductos } from "./src/products.js";
import { pintarMedia } from "./src/media.js";

const products = [
  {
    name: "Funko Dr. Strange",
    sellCount: 1000,
    img: "https://figurasdeseries.es/39341-large_default/funko-pop-sinister-strange-de-marvel-doctor-strange-in-the-multiverse-of-madness-.webp",
  },
  {
    name: "Mochila de protones: Ghostbusters",
    sellCount: 302,
    img: "https://static.wixstatic.com/media/6a5d28_e5dc65a56a154dbea32b044b7302f160~mv2.png/v1/fill/w_648,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6a5d28_e5dc65a56a154dbea32b044b7302f160~mv2.png",
  },
  {
    name: "Sable laser FX",
    sellCount: 2300,
    img: "https://ae01.alicdn.com/kf/S198e27692cea4002a28b75cf59df41dex.png",
  },
  {
    name: "Varita de Voldemort",
    sellCount: 6,
    img: "https://mlyazqwnm7ri.i.optimole.com/cb:wAw4.2122f/w:auto/h:auto/q:mauto/sm:0/f:best/id:b0b5577c9c64a359ff6c8eafce36f3a3/https://www.espadasymas.com/varitas-harry-potter.png",
  },
];

pintarMejorProducto(products);
pintarProductos(products);
pintarMedia(products);