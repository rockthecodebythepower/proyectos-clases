//! NO RETORNAN JSX
//! NO INVOCAN HOOKS DE REACT

const sum = (a, b) => {
  return a + b;
};

export const random = (array) =>
  array[Math.floor(Math.random() * array.length)];