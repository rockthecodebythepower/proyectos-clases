class MyArray {
  constructor(array) {
    this.array = array;
  }

  filter(funcion) {
    const newArray = [];
    for (const element of this.array) {
      if (funcion(element) === true) {
        newArray.push(element);
      }
    }
    return newArray;
  }

  pop() {
    this.array.length = this.array.length - 1;
  }

  destroy() {
    this.array.length = 0;
  }
}

const libros = new MyArray([
  {
    title: "Lágrimas de shiva",
    author: "Carlos Ruiz Zafón",
  },
  {
    title: "Inferno",
    author: "Dan Brown",
  },
  {
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
  },
  {
    title: "Padre rico padre pobre",
    author: "Rober Kiyosaky",
  },
]);

console.log(libros.filter((libro) => libro.author === "Carlos Ruiz Zafón"));

const numbers = new MyArray([
  1, 23, 345, 45, 564, 56, 65, 567, 34, 234, 234, 234, 345, 34,
]);

console.log(numbers.filter((number) => number % 2 !== 0));

numbers.destroy();

console.log(numbers.array);