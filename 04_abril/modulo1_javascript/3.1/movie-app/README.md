# Movie App

1. Crear un proyecto con Vite -> npm create vite @latest
2. Limpiar nuestro proyecto -> Eliminar main.js || counter.js
3. Estructurar Proyecto -> Generar src - components + pages + utils
4. Definir mis pages -> Home + Movies + About (Page Component + Styles page)
5. Estrucutura Básica de Páginas -> Añadir contenido Minimo
6. Code - Example
  ```js
  export const Template = () => `
    <h1>Movies</h1>
  `
  ```
7. Estructura del documento HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Movie RTC</title>
</head>

<body>
  <header>
    <h1>Movie App</h1>
  </header>
  <main></main>
  <footer></footer>
  <script type="module" src="/main.js"></script>
</body>

</html>
```

Cambiamos las etiquetas para dar un valor más semantico a nuestra aplicación, es decir usar una estructura basada en HTML5 -> header || main || footer

8. Crear un componente "transversal" para la navegación - Navbar

```js

const NavBar = () => `
  <nav class="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/movies">Movies</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
`

export const NavBarPrint = () => {
  document.querySelector("header").innerHTML += NavBar()
}

```

9. Crear nuestra SPA Nativa

```js
import { Template as Home } from '../pages/Home/Home.js'
import { Template as Movie } from '../pages/Movies/Movies.js'
import { Template as About } from '../pages/About/About.js'


import { TemplatePrint as Navbar } from '../components/Navbar/Navbar.js'

export const routes = {
  '/': { title: 'Home', render: Home },
  '/movies': { title: 'Movies', render: Movie },
  '/about': { title: 'About', render: About }
}

export const router = () => {
  let page = routes[location.pathname]
  if (page) {
    document.title = page.title
    document.querySelector('main').innerHTML = page.render()
    Navbar()
  } else {
    history.replaceState(null, null, '/')
    router()
  }
}
```

10. Lanzar nuestra Aplicación cuando se levanta -> main.js || src

```js
import { router } from './utils/spa'

window.addEventListener('click', (e) => {
  console.log('paso')
  if (e.target.matches('[data-link]')) {
    e.preventDefault()
    history.pushState(null, null, e.target.href)
    router()
  }
})

window.addEventListener('popstate', router)
window.addEventListener('DOMContentLoaded', router)
```

11. No olvidamos cambiar nuestro HTML -> la ubicación de nuestro script - ./src/main.js

12. Estilando nuestro Header + Navbar (Libertad de estilado)

13. Hemos añadido un footer genérico y estilado básico

14. Creación de componentes para usarlos en nuestra Home - Title || Text || Image || Cta

15. Crear un Hero y agrupar dichos componentes viendo sus variantes vía css.

16. TODO: Crear multiLanguage -> WIP use .env to change Language