import {getMovies} from "../../utils/fetchData"
import {MovieCard} from "../../components/MovieCard/MovieCard"
import {Title} from "../../components/Title/Title"
import "./style.css"

export const Template = () => `
  ${Title("yellowGreen", "Movies")}
  <div class="container">
  <section id="banner">
  </section>
  </div>
  <ul id="movieList"></ul>

`

export const Listeners = async () => {
  const container = document.querySelector("#banner")
  const movieList = document.querySelector("#movieList")
  if (container !== null) {
    const movies = await getMovies()
    for (let i = 0; i < 25; i++) {
      const poster = movies[i]
      container.innerHTML += `
        <img src=${poster.image} alt=${poster.title}/>
      `
    }

    for (const movie of movies) {
      movieList.innerHTML += MovieCard(movie)
    }
  }
}
