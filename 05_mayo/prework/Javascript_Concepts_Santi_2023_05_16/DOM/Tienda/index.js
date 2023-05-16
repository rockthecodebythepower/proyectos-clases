const productosJardineria = [
  {
    imagen:
      "https://alfarerosdejuanatrigo.com/wp-content/uploads/2022/01/maceta-cubo-e1642683122290-300x300.png",
    precio: 20.99,
    nombre: "Maceta de cerámica",
    categoria: "Jardinería",
  },
  {
    imagen:
      "https://www.fransa.es/1059-large_default/tijera-bahco-pxr-m3-r500p.jpg",
    precio: 12.49,
    nombre: "Herramienta de poda",
    categoria: "Jardinería",
  },
  {
    imagen:
      "https://cdn.pixabay.com/photo/2017/06/03/18/21/star-wars-2369317_1280.png",
    precio: 800.99,
    nombre: "Sable laser",
    categoria: "Star wars",
  },
  {
    imagen:
      "https://everano.es/content/images/thumbs/0000551_fertilizante-organico-para-plantas-trepadoras-linea-biologica_550.png",
    precio: 25.99,
    nombre: "Fertilizante orgánico",
    categoria: "Jardinería",
  },
];

const pintarProductos = (productos) => {
  const productos$$ = document.querySelector(".products");


  //! Limpiar el div para que luego se pinte de nuevo
  productos$$.innerHTML = "";

  for (const producto of productos) {
    /* const div$$ = document.createElement("div");
        const img$$ = document.createElement("img");
        const nombre$$ = document.createElement("h3");
        const precio$$ = document.createElement("p");

        div$$.className = "producto";
        img$$.src = producto.imagen;
        nombre$$.innerText = producto.nombre;
        precio$$.textContent = producto.precio;

        div$$.appendChild(nombre$$);
        div$$.appendChild(img$$);
        div$$.appendChild(precio$$);
        productos$$.appendChild(div$$); */

    productos$$.innerHTML += `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <img src="${producto.imagen}"/>
                <p>${producto.precio}€</p>
            </div>
        `;

    {
      /* <div>
            <h3></h3>
            <img />
            <p></p>
        </div> */
    }
  }
};

const filtrar = (valor) => {
  const productsFiltered = productosJardineria.filter((producto) =>
    producto.nombre.toLowerCase().includes(valor.toLowerCase()) || producto.categoria.toLowerCase().includes(valor.toLowerCase())
  );
  pintarProductos(productsFiltered);
};

const input$$ = document.querySelector("input");

input$$.addEventListener("input", () => filtrar(input$$.value));

pintarProductos(productosJardineria);
