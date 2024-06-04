async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  const characters = await res.json();

  console.log(characters);

  for (const character of characters.results) {
    document.body.innerHTML += `
        <div>
        <h3>${character.name}</h3>
        <img src="${character.image}"/>
        </div>`;
  }
}

getCharacters();
