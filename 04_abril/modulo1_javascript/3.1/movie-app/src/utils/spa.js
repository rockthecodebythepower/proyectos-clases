import {Template as Home} from "../pages/Home/Home.js"
import {Template as Movie} from "../pages/Movies/Movies.js"
import {Listeners as MovieListeners} from "../pages/Movies/Movies.js"
import {Template as About} from "../pages/About/About.js"

import {TemplatePrint as Navbar} from "../components/Navbar/Navbar.js"
import {TemplatePrint as Logo} from "../components/Logo/Logo.js"

export const routes = {
  "/": {title: "Home", render: Home},
  "/movies": {title: "Movies", render: Movie, listeners: MovieListeners},
  "/about": {title: "About", render: About},
}

export const router = () => {
  let page = routes[location.pathname]
  if (page) {
    document.title = page.title
    document.querySelector("main").innerHTML = page.render()
    Logo()
    Navbar()
    page.listeners()
  } else {
    history.replaceState(null, null, "/")
    router()
  }
}
