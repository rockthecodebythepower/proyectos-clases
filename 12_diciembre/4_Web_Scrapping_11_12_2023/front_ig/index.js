const peticion = async () => {
  const res = await fetch("http://localhost:3000/api/v1/games");
  const games = await res.json();

  pintar(games);
};

const pintar = (games) => {
  for (let i = 0; i < 60; i++) {
    const game = games[i];
    document.body.innerHTML += `
            <div class="game">
                <img src="${game.img}"/>
                <h3>${game.title}</h3>
                ${game.stock ? `<p>${game.price}</p>` : `<p>No hay stock</p>`}
            </div>
        `;
  }
};

peticion();
