function latestClock(...list) {
  list.sort((a, b) => b - a);

  const bigger5 = list.filter((i) => i > 5).length;

  const getMax = (max) => {
    for (let i = 0; i < list.length; i++) {
      const value = list[i];
      if (typeof value === "number" && value <= max) {
        delete list[i];
        return value;
      }
    }
  };

  const h1 = getMax(bigger5 > 1 ? 1 : 2);
  const h2 = getMax(h1 === 2 ? 3 : 9);
  const m1 = getMax(5);
  const m2 = getMax(9);

  return `${h1}${h2}:${m1}${m2}`;
}
