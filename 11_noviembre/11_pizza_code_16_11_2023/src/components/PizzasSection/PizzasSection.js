import "./PizzasSection.css"

export const printSection = (pizzasSection, pizzaSeleccionada) => {

  pizzasSection.innerHTML = "";

  const pizzaSeleccionadaTitle = document.createElement("h2");
  const recetaOriginal = document.createElement("h4");
  const pizzaDescription = document.createElement("p");

  pizzaSeleccionadaTitle.textContent = pizzaSeleccionada.nombre;
  recetaOriginal.textContent = "RECETA ORIGINAL";
  pizzaDescription.textContent = pizzaSeleccionada.descripcion;

  pizzasSection.appendChild(pizzaSeleccionadaTitle);
  pizzasSection.appendChild(recetaOriginal);
  pizzasSection.appendChild(pizzaDescription);
  
};