import { renderApps } from './src/components/Apps/Apps';
import './style.css'

const initApp = () => {

  const app$$ = document.querySelector("#app");

  app$$.innerHTML = `
    <div class="apps"></div>
  `

}

initApp();
renderApps();