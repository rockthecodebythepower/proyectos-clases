const PRODUCTOS = [
  {
    nombre: "Camisa estampada",
    imagen:
      "https://elvestidordenuria.com/14243-home_default/camisa-estampada-de-hombre-street-one-.jpg",
    precio: 29.99,
    categoria: "Ropa",
    talla: "M",
    color: "Azul",
    marca: "FashionStyle",
    descuento: false,
    valoraciones: 4.5,
    disponibilidad: true,
    etiquetas: ["rebajas", "nuevo"],
    material: "Algodón",
    stock: 10,
    peso: "200g",
  },
  {
    nombre: "zapatos deportivos",
    imagen: "https://sc04.alicdn.com/kf/H42d570a8c7924a25a069a6341074879c8.png",
    precio: 79.99,
    categoria: "Calzado",
    talla: "42",
    color: "Negro",
    marca: "ActiveFit",
    descuento: true,
    valoraciones: 3.8,
    disponibilidad: true,
    etiquetas: ["rebajas", "deporte"],
    material: "Sintético",
    stock: 5,
    peso: "500g",
  },
  {
    nombre: "Bolso de mano",
    imagen: "https://www.temprado.com/wp-content/uploads/2023/03/36701-061.png",
    precio: 49.99,
    categoria: "Accesorios",
    color: "Rojo",
    marca: "ElegantStyle",
    descuento: true,
    valoraciones: 4.2,
    disponibilidad: false,
    etiquetas: ["rebajas", "moda"],
    material: "Cuero",
    stock: 0,
    peso: "300g",
  },
  {
    nombre: "Vestido floral",
    imagen:
      "https://alohacanary.com/2484-large_default/vestido-estampado-floral-hojas-azules-amarillas-eli-new-york.jpg",
    precio: 59.99,
    categoria: "Ropa",
    talla: "S",
    color: "Multicolor",
    marca: "FashionStyle",
    descuento: false,
    valoraciones: 4.7,
    disponibilidad: true,
    etiquetas: ["nuevo", "moda"],
    material: "Poliéster",
    stock: 7,
    peso: "350g",
  },
  {
    nombre: "Reloj de pulsera",
    imagen:
      "https://www.gnoce.es/media/catalog/product/cache/a95ad56dd2a79ef00be2f8cdc9ab0431/6/2/627498ad4cbf3png.png",
    precio: 99.99,
    categoria: "Accesorios",
    color: "Plata",
    marca: "TimeMaster",
    descuento: true,
    valoraciones: 4.0,
    disponibilidad: true,
    etiquetas: ["rebajas", "lujo"],
    material: "Acero inoxidable",
    stock: 3,
    peso: "150g",
  },
  {
    nombre: "Mochila resistente al agua",
    imagen:
      "https://cdn.webshopapp.com/shops/334138/files/408501800/sw-motech-mochila-flexpack-resistente-al-agua-pleg.jpg",
    precio: 39.99,
    categoria: "Accesorios",
    color: "Negro",
    marca: "AdventurePro",
    descuento: false,
    valoraciones: 4.9,
    disponibilidad: true,
    etiquetas: ["senderismo", "viaje"],
    material: "Nylon",
    stock: 12,
    peso: "800g",
  },
  {
    nombre: "Pantalones vaqueros",
    imagen: "https://images.nexusapp.co/assets/5e/6d/a8/166953175.png",
    precio: 49.99,
    categoria: "Ropa",
    talla: "L",
    color: "Azul oscuro",
    marca: "DenimStyle",
    descuento: true,
    valoraciones: 4.3,
    disponibilidad: true,
    etiquetas: ["rebajas", "casual"],
    material: "Algodón",
    stock: 8,
    peso: "400g",
  },
  {
    nombre: "Chaqueta de cuero",
    imagen: "https://i.ebayimg.com/images/g/UnYAAOSweQNhD2rJ/s-l500.png",
    precio: 129.99,
    categoria: "Ropa",
    talla: "M",
    color: "Negro",
    marca: "LeatherStyle",
    descuento: false,
    valoraciones: 3.4,
    disponibilidad: true,
    etiquetas: ["nuevo", "moda"],
    material: "Cuero genuino",
    stock: 5,
    peso: "900g",
  },
  {
    nombre: "Botas de invierno",
    imagen:
      "https://img.mrvcdn.com/g/fb/kf/Saadba6f37a2a4798b5304b0aa311dbd9J.png_720x720q80.png_.webp",
    precio: 89.99,
    categoria: "Calzado",
    talla: "38",
    color: "Marrón",
    marca: "WinterWalk",
    descuento: true,
    valoraciones: 4.2,
    disponibilidad: true,
    etiquetas: ["rebajas", "invierno"],
    material: "Piel sintética",
    stock: 10,
    peso: "750g",
  },
  {
    nombre: "Pendientes de plata",
    imagen:
      "https://media.v2.siweb.es/uploaded_thumb_medium/aa6a1022e19d13bc32818335a99b8ea9/256a0051_sinfondo.png",
    precio: 24.99,
    categoria: "Accesorios",
    color: "Plata",
    marca: "SilverGlam",
    descuento: false,
    valoraciones: 4.8,
    disponibilidad: true,
    etiquetas: ["joyería", "elegante"],
    material: "Plata esterlina",
    stock: 15,
    peso: "10g",
  },
  {
    nombre: "Blusa de encaje",
    imagen:
      "https://www.msmode.es/on/demandware.static/-/Sites-msmode-master-catalog/default/dw3c082ef8/K11101012_1.png",
    precio: 39.99,
    categoria: "Ropa",
    talla: "S",
    color: "Blanco",
    marca: "LaceElegance",
    descuento: true,
    valoraciones: 4.4,
    disponibilidad: true,
    etiquetas: ["rebajas", "femenino"],
    material: "Algodón y encaje",
    stock: 20,
    peso: "250g",
  },
  {
    nombre: "Gafas de sol",
    imagen:
      "https://www.ombakshop.com/545/gafas-de-sol-brillo-negro-rojo-iridium-polarizada-roja-extra-patilla.jpg",
    precio: 49.99,
    categoria: "Accesorios",
    color: "Negro",
    marca: "Sunshine",
    descuento: false,
    valoraciones: 4.5,
    disponibilidad: true,
    etiquetas: ["verano", "moda"],
    material: "Plástico",
    stock: 8,
    peso: "50g",
  },
  {
    nombre: "Pantalones cortos",
    imagen:
      "https://bkasport.es/1517-thickbox_default/pantalon-corto-shot-bka.jpg",
    precio: 34.99,
    categoria: "Ropa",
    talla: "L",
    color: "Gris",
    marca: "SportyStyle",
    descuento: true,
    valoraciones: 4.0,
    disponibilidad: true,
    etiquetas: ["rebajas", "deporte"],
    material: "Poliéster",
    stock: 12,
    peso: "200g",
  },
  {
    nombre: "Billetera de cuero",
    imagen:
      "https://cdn.shopify.com/s/files/1/0285/2195/5388/products/BilleteraBlacksand2_1500x.png?v=1657046398",
    precio: 39.99,
    categoria: "Accesorios",
    color: "Marrón",
    marca: "LuxuryLeather",
    descuento: false,
    valoraciones: 4.3,
    disponibilidad: true,
    etiquetas: ["elegante", "cuero"],
    material: "Cuero genuino",
    stock: 6,
    peso: "100g",
  },
  {
    nombre: "Jersey de punto",
    imagen:
      "https://images.veromoda.com/10277464/4101863/001/veromoda-striktroeje-brun.png?v=86cea5a9592ff020cbab6308de21711f&format=webp&rsampler=catmull&width=1024&quality=90",
    precio: 59.99,
    categoria: "Ropa",
    talla: "M",
    color: "Verde",
    marca: "KnitwearCo",
    descuento: true,
    valoraciones: 4.7,
    disponibilidad: true,
    etiquetas: ["rebajas", "invierno"],
    material: "Algodón y acrílico",
    stock: 4,
    peso: "400g",
  },
  {
    nombre: "Collar de perlas",
    imagen:
      "https://www.joyeriasuarez.com/on/demandware.static/-/Sites-Suarez-master-catalog/default/dw77673588/images/hi-res/AUBOTC22A002-1.png",
    precio: 79.99,
    categoria: "Accesorios",
    color: "Blanco",
    marca: "PearlElegance",
    descuento: false,
    valoraciones: 4.6,
    disponibilidad: true,
    etiquetas: ["joyería", "elegante"],
    material: "Perlas cultivadas",
    stock: 3,
    peso: "30g",
  },
  {
    nombre: "Abrigo de invierno",
    imagen: "https://i.ebayimg.com/images/g/~GoAAOSws4Rh27Sj/s-l500.png",
    precio: 149.99,
    categoria: "Ropa",
    talla: "L",
    color: "Gris",
    marca: "WinterWardrobe",
    descuento: true,
    valoraciones: 4.2,
    disponibilidad: true,
    etiquetas: ["rebajas", "invierno"],
    material: "Lana y poliéster",
    stock: 2,
    peso: "1.2kg",
  },
  {
    nombre: "Bolso de cuero",
    imagen:
      "https://muicuero.es/wp-content/uploads/2022/01/bolso-cuero-camel-ana.png",
    precio: 109.99,
    categoria: "Accesorios",
    color: "Negro",
    marca: "LuxuryLeather",
    descuento: false,
    valoraciones: 2.3,
    disponibilidad: true,
    etiquetas: ["lujo", "cuero"],
    material: "Cuero genuino",
    stock: 5,
    peso: "800g",
  },
  {
    nombre: "Vestido de cóctel",
    imagen:
      "https://cdn.shopify.com/s/files/1/0301/7093/9529/products/feVeni746_atras_1024x1024@2x.png?v=1606436077",
    precio: 89.99,
    categoria: "Ropa",
    talla: "M",
    color: "Rojo",
    marca: "GlamourNight",
    descuento: true,
    valoraciones: 4.4,
    disponibilidad: true,
    etiquetas: ["rebajas", "fiesta"],
    material: "Poliéster y encaje",
    stock: 8,
    peso: "300g",
  },
  {
    nombre: "Chaqueta acolchada",
    imagen: "https://benisportshop.es/862/chaqueta-acolchada-pirineo.jpg",
    precio: 79.99,
    categoria: "Ropa",
    talla: "S",
    color: "Azul",
    marca: "UrbanStyle",
    descuento: false,
    valoraciones: 4.5,
    disponibilidad: true,
    etiquetas: ["nuevo", "moda"],
    material: "Nailon",
    stock: 6,
    peso: "700g",
  },
  {
    nombre: "Sneakers deportivos",
    imagen: "https://sc04.alicdn.com/kf/H183bf5dd136c4b6880be12fe9aaa59c8M.png",
    precio: 99.99,
    categoria: "Calzado",
    talla: "39",
    color: "Blanco",
    marca: "SportyFlex",
    descuento: true,
    valoraciones: 4.2,
    disponibilidad: true,
    etiquetas: ["rebajas", "deporte"],
    material: "Malla y goma",
    stock: 10,
    peso: "400g",
  },
  {
    nombre: "Pulsera de plata",
    imagen:
      "https://i0.wp.com/lajoyita.es/wp-content/uploads/2020/05/lp1877-2_1.png?fit=446%2C730&ssl=1",
    precio: 29.99,
    categoria: "Accesorios",
    color: "Plata",
    marca: "SilverCharm",
    descuento: false,
    valoraciones: 4.8,
    disponibilidad: true,
    etiquetas: ["joyería", "elegante"],
    material: "Plata esterlina",
    stock: 15,
    peso: "15g",
  },
  {
    nombre: "Blazer a rayas",
    imagen:
      "https://www.msmode.es/on/demandware.static/-/Sites-msmode-master-catalog/default/dwcc819cdb/01722303_1.png",
    precio: 59.99,
    categoria: "Ropa",
    talla: "M",
    color: "Negro y blanco",
    marca: "StripeFashion",
    descuento: true,
    valoraciones: 4.3,
    disponibilidad: true,
    etiquetas: ["rebajas", "casual"],
    material: "Algodón",
    stock: 8,
    peso: "500g",
  },
];

let FILTERED = [];

//* Declaración de la función para pintar los productos (nuestro objetivo es intentar crear una función totalmente reutilizable).
const initProductos = (productos) => {
  //? seleccionar el lugar en el html donde voy a insertar los productos
  const main$$ = document.querySelector("main");

  main$$.innerHTML = "";

  if (productos.length === 0) {
    const h2$$ = document.createElement("h2");
    h2$$.textContent = "No se han encontrado los articulos que deseabas.";
    h2$$.className = "notfound";
    main$$.appendChild(h2$$);

    //! ejecuto la función pintarProductos pasándole TODOS los productos.
    pintarProductos(PRODUCTOS, main$$);
  } else {
    //! ejecuto la función pintarProductos pasándole únicamente los productos que he encontrado
    pintarProductos(productos, main$$);
  }
};

const pintarProductos = (products, main$$) => {
  for (const product of products) {
    const carta$$ = document.createElement("div");
    const imgWrp$$ = document.createElement("div");
    const imagen$$ = document.createElement("img");
    const divEstrellas$$ = document.createElement("div");
    const nombre$$ = document.createElement("h3");
    const precio$$ = document.createElement("p");

    carta$$.className = "carta";
    divEstrellas$$.className = "estrellas";
    imgWrp$$.className = "img_wrp";

    rellenarEstrellas(divEstrellas$$, product.valoraciones);

    imagen$$.src = product.imagen;
    nombre$$.textContent = product.nombre;
    precio$$.textContent = `${product.precio}€`;

    main$$.appendChild(carta$$);
    carta$$.appendChild(divEstrellas$$);
    imgWrp$$.appendChild(imagen$$);
    carta$$.appendChild(imgWrp$$);
    carta$$.appendChild(nombre$$);
    carta$$.appendChild(precio$$);
  }
};

const rellenarEstrellas = (divEstrellas$$, valoraciones) => {
  let estrellas = Math.round(valoraciones); //? 4
  /* console.log(valoraciones);
  console.log(estrellas); */

  for (let i = 1; i <= 5; i++) {
    const estrella$$ = document.createElement("img");

    if (i <= estrellas) {
      estrella$$.src = "./assets/estrella.png";
    } else {
      estrella$$.src = "./assets/estrella_vacia.png";
    }

    divEstrellas$$.appendChild(estrella$$);
  }
};

//! llamada a la función pintarProductos, en este punto es cuando se ejecuta la función
initProductos(PRODUCTOS);

const pintarFiltros = () => {
  const aside$$ = document.querySelector("aside");

  filtroCategorias(aside$$);
  filtroNombre(aside$$);
  filtroEstrellas(aside$$);
};

const filtroEstrellas = (aside$$) => {
  const filterEstrellas$$ = document.createElement("div");
  filterEstrellas$$.className = "filterEstrellas";

  const tituloFiltro$$ = document.createElement("h3");
  tituloFiltro$$.textContent = "Filtrar por valoraciones";

  filterEstrellas$$.appendChild(tituloFiltro$$);

  const estrellas$$ = document.createElement("div");

  for (let i = 1; i <= 5; i++) {
    const estrella$$ = document.createElement("img");

    estrella$$.className = "estrellaFiltradora";

    estrella$$.src = "./assets/estrella_vacia.png";
    estrella$$.id = i;

    estrella$$.addEventListener("click", filtrarEstrellas);

    estrellas$$.appendChild(estrella$$);
  }

  filterEstrellas$$.appendChild(estrellas$$);
  aside$$.appendChild(filterEstrellas$$);
};

const filtroCategorias = (aside$$) => {
  const categorias = [];

  for (const producto of PRODUCTOS) {
    if (!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
  }

  const divCategorias$$ = document.createElement("div");

  divCategorias$$.className = "categorias";

  const tituloFiltro$$ = document.createElement("h3");
  tituloFiltro$$.textContent = "Filtrar por categoría";

  divCategorias$$.appendChild(tituloFiltro$$);

  for (const categoria of categorias) {
    const categoria$$ = document.createElement("div");
    const label$$ = document.createElement("label");
    const checkbox$$ = document.createElement("input");

    checkbox$$.type = "checkbox";
    categoria$$.className = "categoria";
    label$$.textContent = categoria;
    checkbox$$.id = categoria;
    label$$.setAttribute("for", categoria);

    divCategorias$$.appendChild(categoria$$);
    categoria$$.appendChild(label$$);
    categoria$$.appendChild(checkbox$$);

    checkbox$$.addEventListener("change", (e) => filtrarCategoria(e, label$$));
  }

  aside$$.appendChild(divCategorias$$);
};

const filtrarEstrellas = (e) => {
  const AllStars = document.querySelectorAll(".estrellaFiltradora");

  for (let i = 0; i < AllStars.length; i++) {
    if (i <= e.target.id - 1) {
      AllStars[i].src = "./assets/estrella.png";
    } else {
      AllStars[i].src = "./assets/estrella_vacia.png";
    }
  }

  let filteredStars = [];

  if (FILTERED.length) {
    filteredStars = FILTERED.filter(
      (producto) => Math.round(producto.valoraciones) >= parseInt(e.target.id)
    );
  } else {
    filteredStars = PRODUCTOS.filter(
      (producto) => Math.round(producto.valoraciones) >= parseInt(e.target.id)
    );
  }

  /* FILTERED = [...filteredStars]; */

  initProductos(filteredStars);

};

const filtrarCategoria = (e, label$$) => {
  if (e.target.checked) {
    label$$.classList.add("seleccionado");

    //! utilizamos el método some de arrays para saber si hay algún elemento dentro del array que coincida con la condición
    if (!FILTERED.some((producto) => producto.categoria === e.target.id)) {
      FILTERED = [
        ...FILTERED,
        ...PRODUCTOS.filter((producto) => producto.categoria === e.target.id),
      ];
      initProductos(FILTERED);
    }
  } else {
    label$$.classList.remove("seleccionado");

    FILTERED = FILTERED.filter(
      (producto) => producto.categoria !== e.target.id
    );

    initProductos(FILTERED);
  }
};

const filtroNombre = (aside$$) => {
  const divNombres$$ = document.createElement("div");
  const buscador$$ = document.createElement("div");
  const input$$ = document.createElement("input");
  const icon$$ = document.createElement("img");

  const tituloFiltro$$ = document.createElement("h3");
  tituloFiltro$$.textContent = "Filtrar por nombre";
  divNombres$$.className = "nombres";

  divNombres$$.appendChild(tituloFiltro$$);

  icon$$.src = "./assets/buscar.png";
  buscador$$.className = "buscador";

  buscador$$.appendChild(input$$);
  buscador$$.appendChild(icon$$);
  divNombres$$.appendChild(buscador$$);
  aside$$.appendChild(divNombres$$);

  icon$$.addEventListener("click", () => abrirBuscador(buscador$$));
  input$$.addEventListener("input", filtrarNombre);
};

const abrirBuscador = (buscador$$) => {
  buscador$$.classList.add("mostrar");
};

const filtrarNombre = (e) => {
  let filteredName = [];

  if (FILTERED.length) {
    filteredName = FILTERED.filter((producto) =>
      producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
  } else {
    filteredName = PRODUCTOS.filter((producto) =>
      producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }

  /* FILTERED = [...filteredName]; */

  initProductos(filteredName);
};

pintarFiltros();


const menu$$ = document.querySelector(".menu");

let abierto = false;

const abrirMenu = () => {
  const aside$$ = document.querySelector("aside");
  
  if (abierto) {
    aside$$.style.width = "0px";
    abierto = false;
  } else {
    aside$$.style.width = "100%";
    abierto = true;
  }

}

menu$$.addEventListener("click", abrirMenu);