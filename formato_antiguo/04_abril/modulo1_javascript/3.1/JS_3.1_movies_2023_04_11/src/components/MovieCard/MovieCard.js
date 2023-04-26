import "./style.css"

export const MovieCard = (movie) => `
    <li>
      <img src=${movie.image} alt=${movie.title}/>
    </li>
`
