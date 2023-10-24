/* 
    Usa un for🛑 
    todas las comidas🛑
    
    REEMPLAZAR
    para reemplazar todas las comidas que NO sean veganas🛑
    con las frutas del array de frutas.

    Recuerda no usar frutas duplicadas. Finalmente,  
    imprime el array resultante.


*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
//                    0           1         2        3

const foodSchedule = [
  { name: "Heura", isVegan: false },   // 0
  { name: "Salmon", isVegan: false }, // 1
  { name: "Tofu", isVegan: true },    // 2
  { name: "Burger", isVegan: false }, // 3
  { name: "Rice", isVegan: false },    // 4
  { name: "Pasta", isVegan: false },   // 5
];

for (let i = 0; i < foodSchedule.length; i++) {

    const food = foodSchedule[i];

    if (food.isVegan === false) {
        food.name = fruits.shift();
        /* food.name = fruits[i % fruits.length]; */
        food.isVegan = true;
    }
}

console.log("EJERCICIO RESUELTO");
console.log("-------------------");
console.log(foodSchedule);