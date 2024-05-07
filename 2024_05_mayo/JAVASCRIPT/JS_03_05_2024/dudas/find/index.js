//? que me de el primer elemento que sea un string y que contenga una letra determinada dentro

const comidas = [
  true,
  {},
  23982392,
  "alskdfl",
  "weeflekfasf",
  "sadlf",
  239,
  [],
];

const comida = comidas.find(
  (currentValue) =>
    typeof currentValue === "string" && currentValue.includes("e")
);

console.log(comida);
