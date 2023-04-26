//! Creamos nuestro array de productos (una lista de varios productos)
//? estos productos son objetos, porque dentro tienen propiedades, cada producto tendrá su nombre, imagen, precio, id, y descripción
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
//? Declaro mi función con el nombre pintarProductos, esta función servirá como su propio nombre indica para pintar los productos, ¿para ello que necesita? unos productos, los que sea, ya sean los filtrados o los totales, simplemente recivo una lista de productos y los pinto. 
const pintarProductos = (productos) => {

  //* selecciono el div de productos que tengo creado en mi html (donde meteré todos los productos de uno en uno)
  const productos$$ = document.querySelector("#productos");

  //! limpio el div por si había algo dentro, con innerHTML vacío lo que consigo es limpiarlo
  productos$$.innerHTML = "";

  //! mis productos son un aray de productos, así que lo recorro con un bucle, mi variable i comienza valiendo 0, siempre y cuando la i sea menor que la longitud del array de productos haré el contenido de dentro del bucle, y posteriormente sumaré 1 a la i en cada vuelta del bucle, para ir precisamente de uno en uno
  for (let i = 0; i < productos.length; i++) {

    //! creo la variable producto en cada vuelta del bucle (tendrá el valor de cada producto del array), en la primera vuelta por ejemplo será productos[0] que eso es el primer producto, en la segunda productos[1] que será el segundo y así sucesivamente pasando por todos los productos de mi lista de productos
    const producto = productos[i];

    //! Creamos los elementos que necesitaremos para hacer la carta del producto (divs... imagenes... titulos...)
    const div$$ = document.createElement("div");
    const divimg$$ = document.createElement("div");
    const img$$ = document.createElement("img");
    const nombre$$ = document.createElement("h4");
    const precio$$ = document.createElement("p");


    //! le damos contenido a esos elementos, src a las imágenes..., contenido de texto a los títulos y párrafos... añado clases a los elementos... etc.
    img$$.src = producto.imagen;
    nombre$$.textContent = producto.nombre;
    precio$$.textContent = producto.precio + "€";
    divimg$$.className = "img_wrp";
    img$$.classList.add("img_producto");
    div$$.classList.add("producto");
    div$$.title = producto.descripcion;

    //! insertamos los elementos de html previamente creados dentro de los elementos que queramos
    divimg$$.appendChild(img$$);
    div$$.appendChild(divimg$$);
    div$$.appendChild(nombre$$);
    div$$.appendChild(precio$$);
    productos$$.appendChild(div$$);
  }
};

//! Declaro mi función buscar, que recibe el evento
const buscar = (e) => {

  //! filtramos los productos, el filter funciona como un bucle for, al final coges cada producto y lo devuelves al nuevo array cuando se cumpla la condición, en este caso la condición es que el nombre del producto puesto a minúsculas incluya el VALOR del ELEMENTO que ejecutó el EVENTO puesto a minúsculas
  const productosFiltered = PRODUCTOS.filter((producto) =>
    producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
  );

  //* Llamo a la función pintarProductos pasándole los productos filtrados que acabo de crear (la reutilizo)
  pintarProductos(productosFiltered);
};


//! Creo la función crearBotones, que servirá para crear los botones para filtrar en mi html
const crearBotones = () => {

  //! como en la de pintar productos seleccionaré el div donde quiero pintar mis botones, en este caso no me hace falta limpiarlo puesto que se que sólo pintaré los botones una vez en mi aplicación
  const divBotones$$ = document.querySelector(".botones_filtros");

  //? creo mi array de categorías vacío
  const categorias = [];

  //* recorro con un bucle for of en este caso todos los PRODUCTOS
  for (const producto of PRODUCTOS) {
    
    //? pregunto si mi array de categorías NO incluye la categoría de ese producto
    if (!categorias.includes(producto.categoria)) {

      //* de no incluirla la meto en el array
      categorias.push(producto.categoria);
    }

    //! esto lo hago para que no se me repita ninguna categoría
  }

  //* creo el botón de todas, que será el botón que filtre por todas las categorías, es decir, todos los elementos
  const todas$$ = document.createElement("button");
  todas$$.addEventListener("click", filtrar);
  todas$$.textContent = "Todas";
  todas$$.className = "categoria";
  divBotones$$.appendChild(todas$$);

  //* recorro mi array de categorías y cojo cada categoría para pintarla en el html, además le añado un escuchador de eventos para que cuando me hagan click me llame a la función filtrar
  categorias.forEach((categoria) => {
    const categoria$$ = document.createElement("button");
    categoria$$.textContent = categoria;
    categoria$$.className = "categoria";
    divBotones$$.appendChild(categoria$$);
    categoria$$.addEventListener("click", filtrar);
  });
};


//! la función filtrar cogerá el contenido de texto del botón sobre el que hayamos hecho click, es decir (e.target)
const filtrar = (e) => {

  //? preguntamos si el contenido del texto del botón es "Todas" para llamar a la función de pintarProductos pasándole todos los productos, es decir mi variable PRODUCTOS
  if (e.target.textContent === "Todas") {
    pintarProductos(PRODUCTOS);
  } else {

    //! de no ser todas, cogeremos los productos cuya categoría sea exactamente igual a la categoría que hemos seleccionado
    const productosFiltered = PRODUCTOS.filter(
      (producto) => producto.categoria === e.target.textContent
    );

    //* llamamos a la función pintarProductos con los productos filtrados
    pintarProductos(productosFiltered);
  }
};


//! seleccionamos el input buscador
const buscador$$ = document.querySelector(".buscador");

//! le añadimos el evento para que cada vez que hagamos input (es decir, modifiquemos el input) me llame a la función buscar
buscador$$.addEventListener("input", buscar);


//! EJECUCIÓN DE LA FUNCIÓN CREAR BOTONES
crearBotones();

//! EJECUCIÓN DE LA FUNCIÓN PINTAR PRODUCTOS -> envío parámetros -> como parámetros le envío en este caso los productos totales, mi variable PRODUCTOS declarada arriba
pintarProductos(PRODUCTOS);