import { API } from "../../utils/API";
import { Character } from "../Character/Character";
import { Pagination } from "../Pagination/Pagination";
import "./Characters.css";

export const Characters = async () => {
  const characters = await API("character", charactersPage.page);
  const main = document.querySelector("#main");
  main.innerHTML = "";
  const sectionCharacters = document.createElement("section");
  sectionCharacters.className = "characters";

  for (const character of characters) {
    sectionCharacters.innerHTML += Character(character);
  }

  main.append(sectionCharacters);
  main.append(Pagination(charactersPage));
};

const charactersPage = {
  page: 1,
  component: Characters
};