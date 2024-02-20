//? Necesitamos saber con cuantas sucursales únicas estamos trabajando

// cómo almaceno las sucursales
// objeto clave / valor {}
// array []
// string ""
const sucursales = [];

const coches = [
  {
    color: "Rojo",
    marca: "Seat",
    ruedas: 4,
    puertas: 5,
    garantia: {
      fechaLimite: "20/12/2024",
      precioLimite: 2342,
      compania: {
        nombre: "segurosThePower",
        sucursales: ["Madrid", "Barcelona", "Murcia", "Valencia"],
      },
    },
  },
  {
    color: "Azul",
    marca: "Peugeot",
    ruedas: 3,
    puertas: 1,
    garantia: {
      fechaLimite: "20/12/2024",
      precioLimite: 1000,
      compania: {
        nombre: "segurosThePower",
        sucursales: ["Madrid", "Leon", "Murcia", "Palencia"],
      },
    },
  },
  {
    color: "Negro",
    marca: "Seat",
    ruedas: 4,
    puertas: 5,
    garantia: {
      fechaLimite: "20/12/2024",
      precioLimite: 2342,
      compania: {
        nombre: "segurosThePower",
        sucursales: ["A Coruña", "Cádiz"],
      },
    },
  },
  {
    color: "Amarillo",
    marca: "Seat",
    ruedas: 1,
    puertas: 1,
    garantia: {
      fechaLimite: "20/12/2024",
      precioLimite: 2342,
      compania: {
        nombre: "segurosThePower",
        sucursales: ["Barcelona", "Sevilla"],
      },
    },
  },
];

/* for (let i = 0; i < coches.length; i++) {
  const coche = coches[i];
  for (let j = 0; j < coche.garantia.compania.sucursales.length; j++) {
    const sucursal = coche.garantia.compania.sucursales[j];
    if (!sucursales.includes(sucursal)) {
      sucursales.push(sucursal);
    }
  }
} */

/* coches.forEach((coche) => {
  coche.garantia.compania.sucursales.forEach((sucursal) => {
    if (!sucursales.includes(sucursal)) {
      sucursales.push(sucursal);
    }
  });
}); */

for (const coche of coches) {
    for (const sucursal of coche.garantia.compania.sucursales) {
        if (!sucursales.includes(sucursal)) {
            sucursales.push(sucursal)
        }
    }
}

console.log(sucursales);
