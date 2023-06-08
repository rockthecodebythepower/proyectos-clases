import { initHeader } from './src/components/Header/Header'
import { initMain } from './src/components/Main/Main';
import './style.css'

const initApp = () => {

  const app$$ = document.querySelector("#app");

    app$$.innerHTML = `
      <header id="header"></header>
      <main id="main"></main>
      <footer id="footer"></footer>
    `

    initHeader();
    initMain();

}

initApp();