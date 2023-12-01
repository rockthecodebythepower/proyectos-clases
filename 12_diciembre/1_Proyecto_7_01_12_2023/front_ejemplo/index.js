const printJuegos = (juegos) => {
  for (const juego of juegos) {
    document.body.innerHTML += `
        <div class="juego">
            <h3>${juego.nombre}</h3>
            <div>
                <img src="${juego.imagen}">
            </div>
            <p>${juego.precio}€</p>
        </div>
    `;
  }
};

fetch("http://localhost:3000/api/v1/juegos/")
  .then((res) => res.json())
  .then((juegos) => {
    printJuegos(juegos);
  });
