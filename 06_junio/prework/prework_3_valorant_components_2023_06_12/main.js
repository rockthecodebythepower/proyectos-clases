import { initAgents } from './src/components/Agents/Agents';
import { initHeader } from './src/components/Header/Header';
import './style.css';

const initApp = () => {

  const app$$ = document.querySelector("#app");
  
  app$$.innerHTML = `
  <header></header>
  <main></main>
  <footer></footer>
  `

  initHeader();
  initAgents();
  
}

initApp();