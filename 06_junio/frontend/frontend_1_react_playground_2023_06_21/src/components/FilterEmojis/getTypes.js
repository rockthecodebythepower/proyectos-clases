export const getTypes = (emojis) => {
  const types = ["all"];

  for (const emoji of emojis) {
    if (!types.includes(emoji.type)) {
      types.push(emoji.type);
    }
  }

  return types;
};
