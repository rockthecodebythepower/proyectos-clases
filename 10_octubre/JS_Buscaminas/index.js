const tablero$$ = document.querySelector("#tablero");

/* mock -> simular lo que tendré en el futuro para hacer el desarrollo principal */
const arrayBidimensional = [
  ["", "", "", "1", "1"],
  ["", "", "", "1", "💣"],
  ["", "", "1", "2", "2"],
  ["", "", "1", "💣", "1"],
  ["", "", "1", "1", "1"],
];

const comprobacion = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const printBoxes = (array) => {
  for (let i = 0; i < array.length; i++) {
    let row = array[i];

    const row$$ = document.createElement("div");
    tablero$$.appendChild(row$$);

    for (let j = 0; j < row.length; j++) {
      let box = row[j];
      const box$$ = document.createElement("div");

      box$$.addEventListener("click", (e) =>
        openBox(e.target, box, i, j, array)
      );

      row$$.appendChild(box$$);
    }
  }
};

const openBox = (element, box, row, column, array) => {
  element.textContent = box;

  if (box === "💣") {
    element.classList.add("bomb");
  } else {
    element.classList.add("clear");
  }

  switch (box) {
    case "1":
      element.style.color = "blue";
      break;
    case "2":
      element.style.color = "orange";
      break;
    case "3":
      element.style.color = "red";
      break;
    default:
      break;
  }

  setTimeout(() => {
    if (box === "💣") {
      alert("Has perdido");
    }
  }, 500);

  /* cuando la caja está vacía metemos toda la lógica de abrir las contiguas hasta llegar a los números */
  if (box === "" && comprobacion[row][column] !== "pintado") {
    comprobacion[row][column] = "pintado";

    const positions = [];

    /* JS */
    const arrayJS = [];

    if (column + 1 < array[0].length) {
      arrayJS.push(array[row][column + 1]); // un elemento derecha
      positions.push([row, column + 1]);
    }
    if (column - 1 >= 0) {
      arrayJS.push(array[row][column - 1]); // un elemento izquierda
      positions.push([row, column - 1]);
    }

    if (row + 1 < array.length) {
      arrayJS.push(array[row + 1][column]); // un elemento abajo
      positions.push([row + 1, column]);

      if (column + 1 < array[0].length) {
        arrayJS.push(array[row + 1][column + 1]); // un elemento abajo derecha
        positions.push([row + 1, column + 1]);
      }
      if (column - 1 >= 0) {
        arrayJS.push(array[row + 1][column - 1]); // un elemento abajo izquierda
        positions.push([row + 1, column - 1]);
      }
    }

    if (row - 1 >= 0) {
      arrayJS.push(array[row - 1][column]); // un elemento arriba
      positions.push([row - 1, column]);

      if (column + 1 < array[0].length) {
        arrayJS.push(array[row - 1][column + 1]); // un elemento arriba derecha
        positions.push([row - 1, column + 1]);
      }
      if (column - 1 >= 0) {
        arrayJS.push(array[row - 1][column - 1]); // un elemento arriba izquierda
        positions.push([row - 1, column - 1]);
      }
    }

    const arrayHTML = [];

    if (column + 1 < tablero$$.children[0].children.length) {
      arrayHTML.push(tablero$$.children[row].children[column + 1]); // un elemento derecha
    }
    if (column - 1 >= 0) {
      arrayHTML.push(tablero$$.children[row].children[column - 1]); // un elemento izquierda
    }

    if (row + 1 < tablero$$.children.length) {
      arrayHTML.push(tablero$$.children[row + 1].children[column]); // un elemento abajo

      if (column + 1 < tablero$$.children[0].children.length) {
        arrayHTML.push(tablero$$.children[row + 1].children[column + 1]); // un elemento abajo derecha
      }
      if (column - 1 >= 0) {
        arrayHTML.push(tablero$$.children[row + 1].children[column - 1]); // un elemento abajo izquierda
      }
    }

    if (row - 1 >= 0) {
      arrayHTML.push(tablero$$.children[row - 1].children[column]); // un elemento arriba

      if (column + 1 < tablero$$.children[0].children.length) {
        arrayHTML.push(tablero$$.children[row - 1].children[column + 1]); // un elemento arriba derecha
      }
      if (column - 1 >= 0) {
        arrayHTML.push(tablero$$.children[row - 1].children[column - 1]); // un elemento arriba izquierda
      }
    }

    for (let i = 0; i < arrayJS.length; i++) {
      let htmlElement = arrayHTML[i];
      let jsElement = arrayJS[i];
      let position = positions[i];

      openBox(htmlElement, jsElement, position[0], position[1], array);
    }
  }
};

printBoxes(arrayBidimensional);
