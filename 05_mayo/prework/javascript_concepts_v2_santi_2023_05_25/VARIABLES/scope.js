//! LET ES DE ÁMBITO LOCAL Y POR ENDE ESTO DARÁ ERROR
if (4 < 5) {
    let numero = 9;
}

if (8 > 7) {
    let numero = 8;
}

console.log(numero);


//! VAR ES DE ÁMBITO GLOBAL Y POR ENDE ESTO PUEDO HACERLO PERFECTAMENTE
if (4 < 5) {
    var numero = 9;
}

console.log(numero);