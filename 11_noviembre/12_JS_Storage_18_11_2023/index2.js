const users = JSON.parse(localStorage.getItem("users")) || [
  {
    nombre: "Clara",
    nota: 10,
  },
  {
    nombre: "Pablo",
    nota: 10,
  },
  {
    nombre: "Jonathan",
    nota: 10,
  },
  {
    nombre: "Kevin",
    nota: 10,
  },
  {
    nombre: "Paula",
    nota: 10,
  },
  {
    nombre: "Nadia",
    nota: 10,
  },
];

const ulUsers = document.createElement("ul");

const pintarLista = (lista) => {
  ulUsers.innerHTML = "";
  for (const user of lista) {
    const li = document.createElement("li");

    li.textContent = user.nombre + " " + user.nota;

    ulUsers.append(li);
  }
};

const form = document.createElement("form");

const nombreInput = document.createElement("input");
const notaInput = document.createElement("input");
const button = document.createElement("button");

button.textContent = "enviar";
button.type = "button";

button.addEventListener("click", () => {
  const newUser = {
    nombre: nombreInput.value,
    nota: notaInput.value,
  };
  users.push(newUser);
  nombreInput.value = "";
  notaInput.value = "";
  localStorage.setItem("users", JSON.stringify(users));
  pintarLista(users);
});

form.append(nombreInput);
form.append(notaInput);
form.append(button);
document.body.append(form);

pintarLista(users);

document.body.append(ulUsers);

//! por qué el navegador sólo admite strings, números y booleans

//! porque son datos simples

// JSON - JavaScript Object Notation;


