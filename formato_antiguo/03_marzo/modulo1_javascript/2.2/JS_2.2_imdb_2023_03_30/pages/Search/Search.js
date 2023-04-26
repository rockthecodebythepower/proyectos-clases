import "./Search.css"
import {searchMovies} from "../../utils/fetchData"
import {MovieCard} from "../../components/MovieCard/MovieCard"
import {Loader} from "../../components/Loader/Loader"

const template = () => {
  return `
    <h2>Search a movie</h2>
    <h3>From the IMDb database</h3>
    <p>For example "Leon The Professional" or "Inception". You can also search a movie with year (ex: "Inception 2010")</p>
    <form>
        <input type="text" id="searchInput" placeholder="Star Wars 1977"/>
        <button type="submit">Search</button>
    </form>
    <ul id="moviescontainer"></ul>
    `
}

const printMovies = (movies) => {
  const container = document.querySelector("#moviescontainer")
  container.innerHTML = ""
  for (let i = 0; i < 25; i++) {
    const movie = movies[i]
    container.innerHTML += MovieCard(movie)
  }
}

const listeners = () => {
  const input = document.querySelector("#searchInput")
  const container = document.querySelector("#moviescontainer")
  document.querySelector("form").addEventListener("submit", async (ev) => {
    container.innerHTML = Loader()
    ev.preventDefault()
    const movies = await searchMovies(input.value)
    printMovies(movies)
  })
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  listeners()
}
