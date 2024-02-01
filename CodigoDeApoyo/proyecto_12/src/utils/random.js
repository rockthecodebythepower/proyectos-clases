export const getRandom = (array) => {
    return Math.floor(Math.random() * (array.length - 1) + 1);
}