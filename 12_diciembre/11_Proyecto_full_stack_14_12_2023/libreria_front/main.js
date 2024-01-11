import { Header } from './src/components/Header/Header';
import { Home } from './src/pages/Home/Home';
import './style.css';

const Main = () => {
  const app = document.querySelector("#app");

    app.innerHTML = `
      <header></header>
      <main></main>
    `
}

Main();
Header();
Home();