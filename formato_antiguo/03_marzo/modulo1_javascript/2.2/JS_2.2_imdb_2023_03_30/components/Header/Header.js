import "./Header.css"
import {printTemplate as Search} from "../../pages/Search/Search"
import {printTemplate as MostPopular} from "../../pages/MostPopular/MostPopular"
import {linkPage} from "../../utils/linkPage"

const template = () => {
  return `
    <h1>IMDb</h1>
    <nav>
        <ul>
            <li>
                <a href="#" id="searchMovies">Search a Movie</a> 
            </li>
            <li>
            <a href="#" id="popularLink">Most Popular Movies</a> 
        </li>
        </ul>
    </nav>
    `
}

const listeners = () => {
  linkPage("searchMovies", Search)
  linkPage("popularLink", MostPopular)
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
  listeners()
}
