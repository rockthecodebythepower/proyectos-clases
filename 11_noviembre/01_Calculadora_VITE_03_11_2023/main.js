import "./style.css";

const symbols = [
  {
    nombre: "modulo",
    s: "/assets/symbols/modulo.svg",
  },
  {
    nombre: "dividir",
    s: "/assets/symbols/dividir.svg",
  },
  {
    nombre: "multiplicar",
    s: "/assets/symbols/multiplicar.svg",
  },
  {
    nombre: "resta",
    s: "/assets/symbols/resta.svg",
  },
  {
    nombre: "suma",
    s: "/assets/symbols/suma.svg",
  },
  {
    nombre: "coma",
    s: ",", // 1
  },
  {
    nombre: "igual",
    s: "/assets/symbols/igual.svg", // 24
  },
  {
    nombre: "C",
    s: "C", // 1
  },
  {
    nombre: "elevado",
    s: "/assets/symbols/elevado.svg",
  },
];

const divCalculator = document.querySelector("#calculator");

let OPERANDO1 = "";
let OPERANDO2 = "";
let SYMBOL = "";

const calcular = () => {
  const num1 = parseInt(OPERANDO1);
  const num2 = parseInt(OPERANDO2);
  if (SYMBOL === "suma") {
    OPERANDO1 = `${num1 + num2}`;
    printResult(`${num1 + num2}`);
  } else if (SYMBOL === "resta") {
    OPERANDO1 = `${num1 - num2}`;
    printResult(`${num1 - num2}`);
  } else if (SYMBOL === "multiplicar") {
    OPERANDO1 = `${num1 * num2}`;
    printResult(`${num1 * num2}`);
  } else if (SYMBOL === "dividir") {
    OPERANDO1 = `${Math.round(num1 / num2)}`;
    printResult(`${Math.round(num1 / num2)}`);
  } else if (SYMBOL === "modulo") {
    OPERANDO1 = `${Math.round(num1 % num2)}`;
    printResult(`${Math.round(num1 % num2)}`);
  } else if (SYMBOL === "elevado") {
    OPERANDO1 = `${num1**num2}`;
    printResult(`${num1**num2}`);
  }
}

const addNumber = (e) => {
  const addText = e.target.textContent;

  if (!SYMBOL) {
    OPERANDO1 += addText;
    printResult(OPERANDO1);
  } else {
    OPERANDO2 += addText;
    printResult(OPERANDO2);
  }

}

const addSymbol = (nombre) => {
  if (nombre === "C") {
    OPERANDO1 = "";
    OPERANDO2 = "";
    SYMBOL = "";
    printResult();
  } else if (nombre === "igual") {
    calcular();
    OPERANDO2 = "";
    SYMBOL = "";
  } else {
    SYMBOL = nombre;
    printResult();
  }
}

const createNumbers = () => {
  for (let i = 0; i <= 9; i++) {
    const number = document.createElement("div");

    number.textContent = i;
    number.className = `number${i}`;

    number.addEventListener("click", addNumber);

    divCalculator.appendChild(number);
  }
};

const createSymbols = () => {
  for (const symbol of symbols) {
    const symbol$$ = document.createElement("div");

    if (symbol.s.length > 1) {
      const img = document.createElement("img");
      img.src = symbol.s;
      symbol$$.appendChild(img);
    } else {
      symbol$$.textContent = symbol.s;
    }

    symbol$$.className = symbol.nombre;

    symbol$$.addEventListener("click", () => addSymbol(symbol.nombre));
    
    divCalculator.appendChild(symbol$$);
  }
}

const printResult = (result = "0") => {

  let resultFormated = "";
  let count = 0;

  for (let i = 0; i < result.length; i++) {
    if (count === 3) {
      count = 0;
      resultFormated += ".";
      resultFormated += result[i];
    } else {
      resultFormated += result[i];
    }
    count++;
  }

  const screen = document.createElement("div");

  screen.textContent = resultFormated;
  screen.className = "result";

  divCalculator.appendChild(screen);
}

printResult();
createNumbers();
createSymbols();

window.addEventListener("keypress", (e) => console.log(e.key))