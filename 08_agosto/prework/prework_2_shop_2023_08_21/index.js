const prendas = [
  {
    imagen:
      "https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-546x410px/2074741.png",
    nombre: "Camiseta básica",
    categoria: "camiseta",
    precio: 19.99,
    descuento: 0.1,
    tallas: ["S", "M", "XL", "XXL"]
  }, //? 0
  {
    imagen:
      "https://www.babiek.es/11132-home_default/pantalon-vaquero-spidi-j-tracker-long.jpg",
    nombre: "Pantalón vaquero",
    categoria: "pantalón",
    precio: 49.99,
    descuento: 0.2,
    tallas: ["XS", "L", "XL"]
  }, //? 1
  {
    imagen:
      "https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-546x410px/24899640.png",
    nombre: "Camisa elegante",
    categoria: "camisa",
    precio: 39.99,
    descuento: 0.15,
    tallas: ["S", "M", "XL"]
  }, //? 2
  {
    imagen:
      "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/03/15/source-img/20170315151909_69586.png",
    nombre: "Vestido floral",
    categoria: "vestido",
    precio: 59.99,
    descuento: 0,
    tallas: ["M"]
  }, //? 3
  {
    imagen:
      "https://www.ceuediciones.es/wp-content/uploads/2022/09/sudadera-azul-claro-letras-azul-marino-blanco.png",
    nombre: "Sudadera con capucha",
    categoria: "sudadera",
    precio: 29.99,
    descuento: 0.05,
    tallas: ["S"]
  }, //? 4
  {
    imagen:
      "https://www.muskblog.com/wp-content/uploads/2019/10/SHORT-F50-Holand-Negro-Verde-Neon-Lateral-560x560.png",
    nombre: "Shorts deportivos",
    categoria: "shorts",
    precio: 24.99,
    descuento: 0.12,
    tallas: ["S", "M"]
  }, //? 5
  {
    imagen:
      "https://www.msmode.es/on/demandware.static/-/Sites-msmode-master-catalog/default/dwe369ed33/K26039503_1.png",
    nombre: "Blusa estampada",
    categoria: "blusa",
    precio: 34.99,
    descuento: 0,
    tallas: ["XXL"]
  }, //? 6
  {
    imagen: "https://i.ebayimg.com/images/g/cs0AAOSwpsdhzpl-/s-l1200.webp",
    nombre: "Chaqueta de cuero",
    categoria: "chaqueta",
    precio: 79.99,
    descuento: 0.25,
    tallas: ["S"]
  }, //? 7
  {
    imagen:
      "https://ces-vegamedia.es/wp-content/uploads/FALDA-FRENTE-e1613653811347.png",
    nombre: "Falda plisada",
    categoria: "falda",
    precio: 44.99,
    descuento: 0.18,
    tallas: ["S", "M"]
  }, //? 8
  {
    imagen:
      "https://res.cloudinary.com/douvery/image/upload/v1674396099/Zapatos%20deportivos%20sin%20cordones%20para%20mujer/x8w0no4fk6fp0c9dkttu.webp",
    nombre: "Zapatos deportivos",
    categoria: "zapatos",
    precio: 69.99,
    descuento: 0,
    tallas: ["S", "XL", "XXL"]
  }, //? 9
];

const pintarPrendas = (ropa) => {

  const prendas$$ = document.querySelector("#prendas");

  prendas$$.innerHTML = "";

  for (let posicion = 0; posicion < ropa.length; posicion++) {
    const prenda = ropa[posicion];

    prendas$$.innerHTML += `
        <div class="prenda">
            <h3>${prenda.nombre}</h3>
            <div>
                <img src="${prenda.imagen}"/> 
            </div>
            <div class="precios">
                ${
                  prenda.descuento
                    ? `<p class="precioFinal">${(
                        prenda.precio -
                        prenda.precio * prenda.descuento
                      ).toFixed(2)}€</p>`
                    : ""
                }
                <p class="${
                  prenda.descuento ? "precioAnterior" : "precioSinDescuento"
                }">${prenda.precio}€</p>
                ${
                  prenda.descuento
                    ? `<p class="descuento">${prenda.descuento * 100}%</p>`
                    : ""
                }
            </div>
        </div>
    `;
  }

};

const checkbox = document.querySelector("#filtroDescuento");

const filtrarPorDescuento = () => {

    const prendasFiltered = [];

    for (const prenda of prendas) {
        if (checkbox.checked && prenda.descuento || !checkbox.checked && !prenda.descuento) {
            prendasFiltered.push(prenda);
        }
    }

    pintarPrendas(prendasFiltered);

};

checkbox.addEventListener("change", filtrarPorDescuento);

pintarPrendas(prendas);

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => pintarPrendas(prendas));

const select = document.querySelector("#filtroTalla");

const filtroTalla = () => {

    const prendasFiltered = [];

    for (const prenda of prendas) {
        
        if (prenda.tallas.includes(select.value)) {
            prendasFiltered.push(prenda);
        }

    }

    pintarPrendas(prendasFiltered);

}

select.addEventListener("change", filtroTalla);