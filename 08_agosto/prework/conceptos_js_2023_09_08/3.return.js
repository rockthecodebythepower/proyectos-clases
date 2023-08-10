function sum(numA, numB) {
  if (typeof numA !== "number" || typeof numB !== "number") {
    return "Tienes que utilizar 2 numeros";
  } else {
    return numA + numB;
  }
}

const total = sum(5, 6);
console.log(total);
const total2 = sum("Hola", 3);
console.log(total2);

const list = [];

function pushElement(element) {
  list.push(element);
  console.log(list);
}

pushElement("Pan");
pushElement("Agua");
