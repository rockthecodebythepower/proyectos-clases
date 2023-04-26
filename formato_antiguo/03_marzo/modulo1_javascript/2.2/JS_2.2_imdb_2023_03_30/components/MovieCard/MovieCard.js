import "./MovieCard.css"
import {Stars} from "../Stars/Stars"

export const MovieCard = (movie) => {
  return `
<li> 
    <article class="moviecard">
    ${movie.rank ? `<h2>#${movie.rank}</h2>` : ""}
    ${movie.image && `<img src=${movie.image} alt=${movie.title} />`}
    <h3>${movie.title}</h3>
    ${movie.year ? `<h4>${movie.year}</h4>` : ""}
    ${movie.crew ? `<p>${movie.crew}</p>` : ""}
    ${movie.imDbRating ? Stars(movie.imDbRating) : ""}
    ${movie.description ? `<p>${movie.description}</p>` : ""}
    </article>
</li>`
}
