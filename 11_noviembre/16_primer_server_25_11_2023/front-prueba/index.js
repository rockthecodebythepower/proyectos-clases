const input = document.querySelector("input");
const button = document.querySelector("button");

const peticion = () => {
  fetch("http://localhost:3000/products/" + input.value)
    .then((res) => res.json())
    .then((products) => {
      for (const product of products) {
        const nombre = document.createElement("h2");
        const precio = document.createElement("p");

        nombre.textContent = product.nombre;
        precio.textContent = product.precio;

        document.body.append(nombre);
        document.body.append(precio);
      }
    });
};

button.addEventListener("click", peticion);

const objeto = {
  edad: "21",
  gafas: "true",
  gatos: "true",
  hamster: "false",
  nombre: "Gabriel Garcia",
};

const objetoString = JSON.stringify(objeto);

fetch("http://localhost:3000/prueba", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }, 
  body: objetoString
})
  .then((res) => res.json())
  .then((res) => console.log(res));
