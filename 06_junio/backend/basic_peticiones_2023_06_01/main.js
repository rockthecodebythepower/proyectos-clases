import { initFooter } from './src/components/Footer/Footer';
import { initHeader } from './src/components/Header/Header';
import { initHome } from './src/components/Home/Home';
import './style.css'

const init = () => {

  const app$$ = document.getElementById("app");

  app$$.innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
  `

  initHeader();
  initHome();
  initFooter();

}

init();