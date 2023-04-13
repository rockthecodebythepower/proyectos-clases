# En esta clase hicimos una mini tienda de productos teniendo de referencia este diseño:

![]("./assets/imagen.jpg"){width=300 height=500}


## 1- El primer paso fue definir nuestros productos, que sería un array de objetos con sus respectivas propiedades, con en la siguiente estructura:

const PRODUCTOS = [
  {
    id: 1,
    imagen:
      "https://cdn.shopify.com/s/files/1/0568/4255/1451/products/AOVE-5-L-PET.png?v=1640338440",
    nombre: "Aceite de Oliva Virgen Extra",
    descripcion: "Aceite de oliva virgen extra de la marca Carrefour",
    precio: 4.95,
    categoria: "Aceites y Vinagres",
  }
];


## 2- El segundo paso fue pintar los productos en nuestro html de manera dinámica, de tal manera que creamos una función llamada pintarProductos que recibía en sus parámetros unos productos y se ocupaba de pintarlos en el html (línea 102 a línea 140). La ejecución de la función está en la línea 225, que es cuando esta se ejecuta.


## 3- Una vez pintados los productos hicimos un buscador, para ello tenemos un input en el html con la clase "buscador", lo seleccionamos en el js y le añadimos el escuchador de eventos para que cada vez que se realice un input llame a la función buscar

const buscador$$ = document.querySelector(".buscador");

buscador$$.addEventListener("input", buscar);


## 4- Declaramos la función buscar que recogerá el evento ejecutado (el evento input) y luego accedemos al elemento en el cual ha sido ejecutado el evento (el elemento input) y posteriormente miraremos el valor del elemento input en ese momento para saber que ha escrito el usuario, haremos un filtro que coge un producto de productos y si el nombre en minúsculas incluye el valor que metió el usuario en minúsculas también entonces meterá el producto en el array resultante, quedándonos de esta manera únicamente con los productos que queríamos. Por último llamamos a la función pintarProductos la cual reutilizamos para que repinte los productos esta vez con los filtrados.

const buscar = (e) => {

  const productosFiltered = PRODUCTOS.filter((producto) =>
    producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
  );

  pintarProductos(productosFiltered);
};


## 5- Luego quisimos crear tantos botones como categorías existiesen en nuestros productos, por lo tanto hicimos la función crearBotones, la cual está declarada en la línea 156, llega hasta la línea 192 y es ejectuada en la línea 222. Esta función recorrerá nuestro array de productos para extraer sus categorías sin que estas se repitan y guardarlas dentro del array de categorías, el cual posteriormente recorreremos para crear cada botón de categoría.


## 6- Estos botones cuando son pulsados llaman a la función filtrar, la cual hace prácticamente lo mismo que la de buscar, solo que esta filtrará por categoría en vez de por el nombre

### Fin. jejeje