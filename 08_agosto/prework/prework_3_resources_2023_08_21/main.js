import { Header } from './src/components/Header/Header';
import { Recursos } from './src/pages/Recursos/Recursos';
import './style.css'

const Main = () => {

  document.body.innerHTML = `
    <header></header>
    <main></main>
  `

}

Main();
Header();
Recursos();