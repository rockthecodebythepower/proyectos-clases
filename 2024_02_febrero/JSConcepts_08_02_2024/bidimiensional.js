const bidimensional = [["alberto", "natalia", "Gira", "Jesus"], [], []];
// posiciones                         0                          1   2
// posiciones dentro        0         1          2        3

console.log(bidimensional.length);

console.log(bidimensional[0].length);

console.log(bidimensional[0][2]);

const tictactoe = [
    ["X", "", "O"], 
    ["X", "O", ""], 
    ["O", "X", "X"]
];

for (const filas of tictactoe) {
    console.log(filas);
    for (const columna of filas) {
        console.log(columna);
    }
}

