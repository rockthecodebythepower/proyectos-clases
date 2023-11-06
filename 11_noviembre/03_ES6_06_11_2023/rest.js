const suma = (...numeros) => {
    let sum = 0;
    for (const num of numeros) {
        sum += num
    }
    console.log(sum);
};

suma(1, 12, 43);

suma(1, 2);

suma(2, 32, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23);


const fauna = ["🦕", "🐌", "🐙", "🐢", "🦄"];
// posiciones    0     1      2     3      4

const [ piecito, ...restoAnimales ] = fauna;
//         0            ...

const [ , , pulpo, ...resto] = fauna;

console.log(pulpo);
console.log(resto);