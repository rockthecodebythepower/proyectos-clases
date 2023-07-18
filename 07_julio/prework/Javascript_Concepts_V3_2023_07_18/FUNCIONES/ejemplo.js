const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

//! tenemos un programa que a lo largo de su uso va recogiendo diferentes dni's y les va calculando la letra

function calcularDNI(dni = 983247234) {
  let letra = "";

  let resto = dni % 23;

  letra = letras[resto];

  console.log(letra);
}

calcularDNI();
calcularDNI(12782738);
calcularDNI(12782718);
calcularDNI(12742738);
calcularDNI(12786738);
calcularDNI(12781738);
calcularDNI(18782738);

