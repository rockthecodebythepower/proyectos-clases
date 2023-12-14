import { Header } from './src/components/Header/Header';
import { Home } from './src/pages/Home/Home';
import { LoginRegister } from './src/pages/LoginRegister/LoginRegister';
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