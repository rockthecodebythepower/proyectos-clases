import "./MostPopular.css"
import {getData} from "../../utils/fetchData"
import {MovieCard} from "../../components/MovieCard/MovieCard"
MovieCard
import {Loader} from "../../components/Loader/Loader"

const template = () => {
  return `
    <h2>Most 25 Popular Movies</h2>
    <h3>As determined by IMDb Users</h3>
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

const listeners = async () => {
  const container = document.querySelector("#moviescontainer")
  container.innerHTML = Loader()
  const movies = await getData()
  printMovies(movies)
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  listeners()
}
