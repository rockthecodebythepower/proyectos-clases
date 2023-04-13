const PRODUCTOS = [
  {
    id: 1,
    imagen:
      "https://cdn.shopify.com/s/files/1/0568/4255/1451/products/AOVE-5-L-PET.png?v=1640338440",
    nombre: "Aceite de Oliva Virgen Extra",
    descripcion: "Aceite de oliva virgen extra de la marca Carrefour",
    precio: 4.95,
    categoria: "Aceites y Vinagres",
  },
  {
    id: 2,
    imagen:
      "https://www.casagilo.es/732-large_default/arroz-basmati-pack-2-brillante.jpg",
    nombre: "Arroz Basmati",
    descripcion: "Arroz basmati de la marca Carrefour",
    precio: 1.65,
    categoria: "Arroces",
  },
  {
    id: 3,
    imagen:
      "https://dinkel.es/wp-content/uploads/2020/05/1009-Vollkorn-Roggenbrot-750-g-2.png",
    nombre: "Pan Integral",
    descripcion: "Pan integral de la marca Carrefour",
    precio: 1.2,
    categoria: "Panadería",
  },
  {
    id: 4,
    imagen: "https://www.supercoke.es/wp-content/uploads/2020/12/420043.png",
    nombre: "Leche Desnatada",
    descripcion: "Leche desnatada de la marca Carrefour",
    precio: 0.65,
    categoria: "Lácteos",
  },
  {
    id: 5,
    imagen:
      "https://quesosanabria.com/wp-content/uploads/2020/08/QuesoManchegoCurado-MediaPieza.png",
    nombre: "Queso Manchego",
    descripcion: "Queso manchego curado de la marca Carrefour",
    precio: 7.5,
    categoria: "Quesos",
  },
  {
    id: 6,
    imagen: "https://www.supercoke.es/wp-content/uploads/2020/05/12573.png",
    nombre: "Galletas Digestive",
    descripcion: "Galletas Digestive de la marca Carrefour",
    precio: 1.75,
    categoria: "Dulces y Galletas",
  },
  {
    id: 7,
    imagen:
      "https://media.bigcrafters.com/wp-content/uploads/2022/05/28211337/estrella-galicia-especial-botella-66cl-elaboracion.png",
    nombre: "Cerveza Estrella Galicia",
    descripcion: "Cerveza Estrella Galicia de la marca Carrefour",
    precio: 0.99,
    categoria: "Bebidas",
  },
  {
    id: 8,
    imagen: "https://www.valor.es/wp-content/uploads/2016/05/70-200gr.png",
    nombre: "Chocolate Negro 70%",
    descripcion: "Tableta de chocolate negro 70% de la marca Carrefour",
    precio: 1.95,
    categoria: "Dulces y Galletas",
  },
  {
    id: 9,
    imagen: "https://www.lasirena.es/img/p/3/8/4/1/5/38415.jpg",
    nombre: "Salmón Ahumado",
    descripcion: "Salmón ahumado de la marca Carrefour",
    precio: 3.95,
    categoria: "Pescadería",
  },
  {
    id: 10,
    imagen:
      "https://www.pastasgallo.es/wp-content/uploads/2020/12/pack_integral_fideon1.png",
    nombre: "Pasta Integral",
    descripcion: "Pasta integral de la marca Carrefour",
    precio: 1.2,
    categoria: "Pastas",
  },
  {
    id: 11,
    imagen: "https://elsolecito.com/wp-content/uploads/2020/11/cecina.png",
    nombre: "Cecina de León",
    descripcion: "La mejor cecina around the world",
    precio: 8,
    categoria: "Cosas divinas",
  },
];

//! DECLARACIÓN DE LA FUNCIÓN -> recojo parámetros
const pintarProductos = (productos) => {
  const productos$$ = document.querySelector("#productos");
  productos$$.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    const div$$ = document.createElement("div");
    const divimg$$ = document.createElement("div");
    const img$$ = document.createElement("img");
    const nombre$$ = document.createElement("h4");
    /* const descripcion$$ = document.createElement("p"); */
    const precio$$ = document.createElement("p");

    img$$.src = producto.imagen;
    nombre$$.textContent = producto.nombre;
    precio$$.textContent = producto.precio + "€";
    /* descripcion$$.textContent = producto.descripcion; */
    divimg$$.className = "img_wrp";
    img$$.classList.add("img_producto");
    div$$.classList.add("producto");
    div$$.title = producto.descripcion;

    divimg$$.appendChild(img$$);
    div$$.appendChild(divimg$$);
    div$$.appendChild(nombre$$);
    div$$.appendChild(precio$$);
    /* div$$.appendChild(descripcion$$); */
    productos$$.appendChild(div$$);
  }
};

//! EJECUCIÓN DE LA FUNCIÓN -> envío parámetros
pintarProductos(PRODUCTOS);

const buscar = (e) => {
  const productosFiltered = PRODUCTOS.filter((producto) =>
    producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
  );

  pintarProductos(productosFiltered);
};

const crearBotones = () => {
  const divBotones$$ = document.querySelector(".botones_filtros");

  const categorias = [];

  for (const producto of PRODUCTOS) {
    if (!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
  }

  const todas$$ = document.createElement("button");
  todas$$.addEventListener("click", filtrar);
  todas$$.textContent = "Todas";
  todas$$.className = "categoria";
  divBotones$$.appendChild(todas$$);

  categorias.forEach((categoria) => {
    const categoria$$ = document.createElement("button");
    categoria$$.textContent = categoria;
    categoria$$.className = "categoria";
    divBotones$$.appendChild(categoria$$);
    categoria$$.addEventListener("click", filtrar);
  });
};

const filtrar = (e) => {
  if (e.target.textContent === "Todas") {
    pintarProductos(PRODUCTOS);
  } else {
    const productosFiltered = PRODUCTOS.filter(
      (producto) => producto.categoria === e.target.textContent
    );

    pintarProductos(productosFiltered);
  }
};

const buscador$$ = document.querySelector(".buscador");

buscador$$.addEventListener("input", buscar);

crearBotones();
