const arrayProductos = [
  {
    nombre: "Zapatillas",
    precio: 30,
  },
  {
    nombre: "Gorro",
    precio: 10,
  },
  {
    nombre: "Ordenador",
    precio: 1500,
  },
  {
    nombre: "Lampara",
    precio: 25,
  },
  {
    nombre: "Cuadro",
    precio: 10,
  },
  {
    nombre: "Ventana",
    precio: 100,
  },
  {
    nombre: "Camara",
    precio: 70,
  },
];

const arrayServicios = [
  {
    nombre: "Limpiar el coche",
    precio: 15.45,
  },
  {
    nombre: "Saludo de famoso",
    precio: 102,
  },
  {
    nombre: "Asesoría de empresa",
    precio: 1500,
  },
];

// voy a manejar arrays y cada array tendrá productos que no tienen el precio final calculado con el iva aplicado, por lo tanto lo que queremos es añadir el precio final a cada elemento del array
const calcularIVA = ({ array, IVA = 1.21 }) => {
  for (const element of array) {
    element.precioFinal = parseFloat((element.precio * IVA).toFixed(2));
  }
};

/* calcularIVA(arrayProductos);
calcularIVA(arrayServicios, 1.10); */

calcularIVA({ array: arrayProductos });
calcularIVA({ array: arrayServicios, IVA: 1.1 });

const pintarOl = (array) => {
  const ol = document.createElement("ol");
  for (const element of array) {
    const li = document.createElement("li");
    li.textContent = `${element.nombre}: ${element.precioFinal}€`;
    ol.appendChild(li);
  }
  document.body.appendChild(ol);
};

pintarOl(arrayProductos);
pintarOl(arrayServicios);

//! ¿Cómo añado una propiedad nueva a un OBJETO?
/* const objetoPrueba = {};

objetoPrueba.address = 50;

console.log(objetoPrueba); */
