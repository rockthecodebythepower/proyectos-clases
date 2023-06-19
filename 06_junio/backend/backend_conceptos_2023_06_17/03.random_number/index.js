const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log("Tu numero aleatorio es: ", generateRandomNumber(0, 200));
