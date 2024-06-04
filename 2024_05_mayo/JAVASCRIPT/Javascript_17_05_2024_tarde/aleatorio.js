const productos = [
  {
    nombre: "asldf",
    precio: 65,
  },
  {
    nombre: "asdfgsldf",
    precio: 32,
  },
  {
    nombre: "asdfgldf",
    precio: 4,
  },
  {
    nombre: "asldgf",
    precio: 4,
  },
  {
    nombre: "234rsdffgsd",
    precio: 54,
  },
  {
    nombre: "asldasdfasdfasdff",
    precio: 453,
  },
];

const arrayMostrar = [];

while (arrayMostrar.length < 3) {
  let random = Math.floor(Math.random() * productos.length);

  if (!arrayMostrar.includes(productos[random])) {
    arrayMostrar.push(productos[random]);
  }
}

console.log(arrayMostrar);