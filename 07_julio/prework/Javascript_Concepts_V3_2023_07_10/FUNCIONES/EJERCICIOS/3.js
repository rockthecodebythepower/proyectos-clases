// quiero sumar los elementos que me encuentre en avengers, si es un string sumo su longitud al total y si es un número sumo su valor al total

const avengers = [
  "Hulk", // 4
  "Thor", // 4
  "IronMan", // 7
  34, // 34
  23, // 23
  34, // 34
  54, // 54
  "34", // 2
  "Captain A.", // 10
  "Spiderman", // 9
  "Captain M.", // 10
];

// 191

const sumaTotal = (array) => {

    let suma = 0;
  
    for (let i = 0; i < array.length; i++) {
        
        if (typeof array[i] === "string") {
            suma += array[i].length
        } else {
            suma += array[i];
        }
        
    }

    return suma;

};


console.log(sumaTotal(avengers)); // cual es la palabra más larga de avengers