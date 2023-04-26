import "./Main.css"
import {searchImages} from "../../utils/searchImages"
import {Figure} from "../Figure/Figure"

const template = () => {
  return `
    <form>
        <input type="text" id="searchInput" placeholder="🔎"/>
        <button type="submit">Buscar con Google</button>
    </form>
    <section id="results"></section>
    `
}

const printResults = (results) => {
  const container = document.querySelector("#results")
  container.innerHTML = ""
  for (const res of results) {
    container.innerHTML += Figure(res)
  }
}

const listeners = () => {
  document.querySelector("form").addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const container = document.querySelector("#results")
    container.innerHTML = `<h2>Loading results...</h2>`
    const searchInput = document.querySelector("#searchInput")

    const data = await searchImages(searchInput.value)
    printResults(data)
  })
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  listeners()
}
