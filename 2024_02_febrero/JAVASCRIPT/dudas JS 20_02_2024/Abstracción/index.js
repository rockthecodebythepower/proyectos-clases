const cochesFlexiCar = [
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

const cochesManola = [
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
        sucursales: ["París", "Barcelona", "Murcia", "Valencia"],
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
        sucursales: ["Madrid", "Leon", "Murcia", "Qatar"],
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
        sucursales: ["A Coruña", "Asturias"],
      },
    },
  },
];

const getSucursales = (coches) => {
  const sucursales = [];

  for (const coche of coches) {
    for (const sucursal of coche.garantia.compania.sucursales) {
      if (!sucursales.includes(sucursal)) {
        sucursales.push(sucursal);
      }
    }
  }

  return sucursales;
};

console.log(getSucursales(cochesFlexiCar));
console.log(getSucursales(cochesManola));