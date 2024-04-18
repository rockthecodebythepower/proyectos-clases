const students = [
  {
    name: "Juanma",
    score: 7,
  }, // 0
  {
    name: "Javier",
    score: 3,
  }, // 1
  {
    name: "Pablo",
    score: 2,
  }, // 2
  {
    name: "Maria",
    score: 9,
  },
  {
    name: "Norma",
    score: 0,
  },
];

const students2 = [
  {
    name: "Daniele",
    score: 7,
  }, // 0
  {
    name: "David",
    score: 3,
  }, // 1
  {
    name: "Aurora",
    score: 2,
  }, // 2
];

//! scope - hasta donde llega el poder de una variable
//! function - global

const getMaxLetter = (listado) => {
  const cont = {};

  for (const student of listado) {
    for (const letter of student.name) {
      if (cont[letter.toLowerCase()]) {
        cont[letter.toLowerCase()]++;
      } else {
        cont[letter.toLowerCase()] = 1;
      }
    }
  }

  let max = {};

  for (const key in cont) {
    if (
      parseInt(max.max?.split(" ")[1]) < cont[key] ||
      !parseInt(max.max?.split(" ")[1])
    ) {
      max.max = `${key} ${cont[key]}`;
    }
  }
  return max.max;
};

console.log(getMaxLetter(students));
console.log(getMaxLetter(students2));


const minus = a => a.toLowerCase();

console.log(minus("alsdJKJHFD"));

function sum2 (a, b) {
    return a + b;
} 
