import { pintarChats } from './src/components/Chats/Chats';
import { pintarMain } from './src/components/Main/Main';
import { chats } from './src/data/chats';
import './style.css';

const initMain = () => {

  const app$$ = document.querySelector("#app");

  app$$.innerHTML = `
    <aside id="chats"></aside>
    <div id="main"></div>
  `

  // pintar los chats
  pintarChats(chats);
  pintarMain(chats[0]);

}

initMain()