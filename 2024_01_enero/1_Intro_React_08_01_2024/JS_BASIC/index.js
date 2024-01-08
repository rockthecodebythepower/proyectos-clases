const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

const divCambiar = document.querySelector(".cambiar");

divCambiar.addEventListener("click", (e) => {
     e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})