//! DOM -> DOCUMENT OBJECT MODEL

//? seleccionamos el botón de nuestro html y lo guardamos en la variable publicar$$
const publicar$$ = document.querySelector("button");

//! CREAMOS nuestra variable PRODUCTOS para guardar todos los productos que vayan creando
const PRODUCTOS = JSON.parse(localStorage.getItem("productos")) || [];

const menuForm$$ = document.querySelector(".menu-form");
const form$$ = document.querySelector("form");

let formVisible = false;

//* DECLARACIÓN de la función crearProducto
const crearProducto = (event) => {
  //! evitando la recarga de la página al darle al botón de tipo submit
  event.preventDefault();

  const nombre$$ = document.querySelector("#nombre");
  const inputImagen$$ = document.querySelector("#imagen");
  const precio$$ = document.querySelector("#precio");
  const tipo$$ = document.querySelector("#tipo");

  const newProducto = {
    nombre: nombre$$.value,
    imagen: inputImagen$$.value,
    precio: precio$$.value,
    tipo: tipo$$.value,
  };

  PRODUCTOS.push(newProducto);

  form$$.classList.add("no-visible");
  formVisible = false;

  localStorage.setItem("productos", JSON.stringify(PRODUCTOS));
  pintarProductos(PRODUCTOS);
};

const pintarProductos = (listadoProductos) => {
  //? selección de los div de mi página
  const hamburguesas$$ = document.querySelector(".hamburguesas");
  const wraps$$ = document.querySelector(".wraps");
  const acompañantes$$ = document.querySelector(".acompañantes");
  const bebidas$$ = document.querySelector(".bebidas");

  hamburguesas$$.innerHTML = "<h2>Hamburguesas</h2>";
  wraps$$.innerHTML = "<h2>Wraps</h2>";
  acompañantes$$.innerHTML = "<h2>Acompañantes</h2>";
  bebidas$$.innerHTML = "<h2>Bebidas</h2>";

  //! para recorrer un array y sacar cada elemento para pintarlo, solemos optar por los bucles: for, forof o foreach
  for (const producto of listadoProductos) {
    let productoHTML = `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <div>
                    <img src="${producto.imagen}"/>
                </div>
                <p>${producto.precio} €</p>
            </div>
        `;

    if (producto.tipo === "hamburguesa") {
      hamburguesas$$.innerHTML += productoHTML;
    } else if (producto.tipo === "wrap") {
      wraps$$.innerHTML += productoHTML;
    } else if (producto.tipo === "acompañante") {
      acompañantes$$.innerHTML += productoHTML;
    } else {
      bebidas$$.innerHTML += productoHTML;
    }
  }
};

const toggleForm = () => {
  if (formVisible) {
    form$$.classList.add("no-visible");
    formVisible = false;
  } else {
    form$$.classList.remove("no-visible");
    formVisible = true;
  }
};

//! EL MAP RECORRE UN ARRAY COGE CADA ELEMENTO HACE ALGO CON ESE ELEMENTO Y LUEGO RETORNARÁ UN ARRAY RESULTANTE

//* EJECUCIÓN O LLAMADA a la función enviar cuando se hace click en el botón
publicar$$.addEventListener("click", crearProducto);
menuForm$$.addEventListener("click", toggleForm);

pintarProductos(PRODUCTOS)