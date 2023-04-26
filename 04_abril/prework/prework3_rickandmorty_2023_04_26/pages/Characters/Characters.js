import "./Characters.css"

let pageNum = 1

const template = () => {
  return `
  <section class="characters">
    <h2>Characters</h2>
    <ul id="characters-container"></ul>
    <button id="nextBtn">Show More</button>
  </section>
    `
}

const getCharacters = async (num) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character?page=${num}`
  )
  const dataJSON = await data.json()
  const characters = dataJSON.results

  const container = document.querySelector("#characters-container")

  for (const character of characters) {
    container.innerHTML += `
    <li>
    <img src=${character.image} alt=${character.name}/>
    <h4>${character.name}</h4>
    <h5>${character.species}</h5>
    <h5 class=${character.status}>${character.status}</h5>
    </li>
    `
    /* for (const episode of character.episode) {
      li.innerHTML += `<p>${episode}</p>`
    } */
  }
}

const listeners = () => {
  document.querySelector("#nextBtn").addEventListener("click", () => {
    pageNum++
    getCharacters(pageNum)
  })
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  getCharacters(pageNum)
  listeners()
}
