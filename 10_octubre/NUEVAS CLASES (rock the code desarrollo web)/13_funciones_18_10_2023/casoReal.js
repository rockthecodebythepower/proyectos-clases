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

function calcularLetra (dni) {
    if (Number.isInteger(dni) && dni > 9999999 && dni < 100000000) {
        console.log(dni + letras[dni % 23]);
        calcularLetra("23094856");
    } else {
        console.log("deberás ingresar un número correcto");
    }
}

calcularLetra(12763264);
calcularLetra(2342354);
calcularLetra("23423567");
calcularLetra(234322338);