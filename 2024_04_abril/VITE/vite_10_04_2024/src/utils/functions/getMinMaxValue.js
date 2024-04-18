export const getMinMaxValue = (array) => {
  const mapped = array
    .map((element) => element[Object.keys(element)[1]])
    .toSorted((a, b) => a - b);

  return {
    min: mapped[0],
    max: mapped.at(-1),
  };
};