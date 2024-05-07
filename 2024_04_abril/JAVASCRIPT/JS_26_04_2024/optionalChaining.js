const personas = [
  {
    name: "Paquito",
    age: 56,
    mascota: "Loro", // length
  },
  {
    name: "Laura",
    age: 12,
  },
  {
    name: "Joaquín",
    age: 23,
    mascota: "Perro", // length
  },
  {
    name: "Eva",
    age: 43,
  },
];

for (const persona of personas) {
  console.log(persona.mascota?.length ?? 0);
}