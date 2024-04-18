export const generateEquidistantValues = (min, max, count) => {
  const step = (max - min) / (count - 1);
  const equidistantValues = [];
  for (let i = 0; i < count; i++) {
    equidistantValues.push(Math.round(min + step * i));
  }
  return equidistantValues;
};
