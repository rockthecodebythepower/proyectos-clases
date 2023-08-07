const totalCollection = [];

const sum = (numA, numB, callback) => {
  const total = numA + numB;
  callback(total);
};

const showResult = (result) => {
  console.log("El resultado es:", result);
};

const pushResult = (result) => {
  totalCollection.push(result);
};

const showTotal = (total) => {
  console.log(total);
};

sum(2, 5, pushResult);
sum(5, 6, pushResult);
sum(7, 8, showResult);
sum(10, 5, (total) => {
  console.log(total);
});

console.log(totalCollection);

const element = document.createElement("button");

const showClick = () => {
  console.log("Has hecho click");
};

element.addEventListener("click", () => {
  console.log("Has hecho click")
});
