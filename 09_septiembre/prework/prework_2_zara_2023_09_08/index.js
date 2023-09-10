//? TAREAS PARA EL MENÚ DESPLEGABLE EN JS
// necesito el nav ✅
// necesito el botón ✅
// necesito saber cuando hago click al botón ✅
// si está abierto quitarle la clase abierto y si no lo está darsela ✅
// si el tamaño de la pantalla supera los 560 px de ancho quiero quitar automáticamente la clase al nav para que se cierre ✅

const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

const cambiarMenu = () => {
    /* if (nav.className === "abierto") {
        nav.className = "";
    } else {
        nav.className = "abierto"
    } */
    nav.classList.toggle("abierto");
}

menu.addEventListener("click", cambiarMenu);


const cerrarMenuDesktop = () => {
    if (window.innerWidth > 560) {
        nav.classList.remove("abierto");
    }
}

window.addEventListener("resize", cerrarMenuDesktop);


//? PINTAR PRODUCTOS EN MI PÁGINA
// necesito los productos que quiero pintar ✅
// tengo muchos productos quiero ir pintando de uno en uno necesito cada uno de ellos ✅
// necesito pintar cada producto en la página ✅
// necesito un lugar donde pintar un producto ✅

const prendas = [
    {
        nombre: "Pantalón vaquero",
        imagen: "https://slowlove.es/wp-content/uploads/2022/09/vaqueroTM-53-1.jpg",
        precio: 39.65,
        categoria: "pantalón"
    },
    {
        nombre: "camiseta básica",
        imagen: "https://g2to.com/85612-thickbox/camiseta-basica-blanca-para-hombre.jpg",
        precio: 19.99,
        categoria: "camiseta"
    },
    {
        nombre: "Pantalón de chandal",
        imagen: "https://granotashirts.com/wp-content/uploads/2017/09/Pantalon-de-chandal-ecologico-GSEP68J.jpg",
        precio: 29,
        categoria: "pantalón"
    },
    {
        nombre: "Nike 365",
        imagen: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/06/16/16869010428768.jpg",
        precio: 139.99,
        categoria: "zapatillas"
    },
    {
        nombre: "Gorro de pesca",
        imagen: "https://ih1.redbubble.net/image.2742289215.4173/ssrco,bucket_hat,mens,e5d6c5:f62bbf65ee,side,tall_portrait,750x1000-bg,f8f8f8.jpg",
        precio: 15,
        categoria: "gorro"
    }
]

const pintarProductos = (productos) => {

    const divProductos = document.querySelector("#productos");

    divProductos.innerHTML = "";

    for (const producto of productos) {
        divProductos.innerHTML += `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <div>
                    <img src="${producto.imagen}">
                </div>
                <p>${producto.precio}€</p>
            </div>
        `
    }

}

pintarProductos(prendas);


//? FILTRAR PRODUCTOS
// necesito los productos que quiero filtrar ✅ // prendas
// necesito rellenar el select con las opciones
// necesito el select ✅
// necesito todas las categorías posibles sin que se repita ninguna -> ejercicios de js ✅
// necesito saber que condiciones tienen que cumplir los productos para mostrarlos
// ¿donde están esas condiciones?
// necesito seleccionar el select y saber su valor cuando filtremos ✅
// necesito seleccionar el input del precio y saber su valor cuando filtremos ✅
// necesito saber cuando se está haciendo click sobre el botón de filtrar ✅
// necesito limpiar visualmente todos los productos y pintar los nuevos ya filtrados

const fillSelect = () => {
    const select = document.querySelector("#categories");
    const allCategories = [];

    for (const prenda of prendas) {
        if (!allCategories.includes(prenda.categoria)) {
            allCategories.push(prenda.categoria);
        }
    }

    select.innerHTML = "<option value='todas'>Todas</option>"

    for (const categorie of allCategories) {
        select.innerHTML += `
        <option value="${categorie}">${categorie}</option>`
    }
}

fillSelect();

// condiciones
// el producto tiene que tener la categoría exactamente igual a la que se está buscando
// y además tiene que tener un precio inferior al indicado, a no ser que no se haya indicado valor y por lo tanto me muestre todos los productos de esa categoría

// tenemos que saber cuando filtrar
const botonFiltrar = document.querySelector("#filtrar");

const filtrar = () => {

    const select = document.querySelector("#categories");
    const price = document.querySelector("#price");

    const filteredElements = prendas.filter((prenda) => (prenda.categoria === select.value || select.value === "todas") && (prenda.precio <= price.valueAsNumber || !price.valueAsNumber));

    pintarProductos(filteredElements);

}

botonFiltrar.addEventListener("click", filtrar);


const botonLimpiar = document.querySelector("#limpiar");

const limpiarFiltros = () => {
    const select = document.querySelector("#categories");
    select.value = "todas";

    const price = document.querySelector("#price");
    price.value = "";

    pintarProductos(prendas);
}

botonLimpiar.addEventListener("click", limpiarFiltros);