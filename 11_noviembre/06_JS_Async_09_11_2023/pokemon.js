//! estoy pidiendo datos a x url -> https://pokeapi.co/api/v2/pokemon/1

fetch("https://pokeapi.co/api/v2/pokemon/234")
  .then((res) => res.json())
  .then((pokemon) => {
    console.log(pokemon);
    const img = document.createElement("img");
    img.src = pokemon.sprites.other.dream_world.front_default;
    document.body.appendChild(img);
  });

const printCharacters = (characters) => {
  for (const character of characters) {
    const img = document.createElement("img");
    img.src = character.image;
    document.body.appendChild(img);
  }
};

for (let i = 1; i < 10; i++) {
  fetch("https://rickandmortyapi.com/api/character?page=" + i)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      printCharacters(res.results);
    });
}

fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((res) => console.log(res));

//! pending
//! fullfilled
//! rejected

// new Promise
// fetch
// .then
// .catch
// .finally
// async await
