export const getPower = (objeto) => {
  for (const char of objeto._id) {
    let parsed = parseInt(char);
    if (!Number.isNaN(parsed)) {
      if (!Object.keys(objeto).includes("power")) {
        objeto.power = parsed;
      } else {
        objeto.power += parsed;
      }
    }
  }
  return objeto;
};