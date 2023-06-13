import { API } from "../../config/API";
import { pintarWeapon } from "../Weapon/Weapon";
import "./Weapons.css";

export const initWeapons = () => {
  getWeapons();
};

const getWeapons = async () => {
  const respuesta = await API("weapons");

  pintarArmas(respuesta);
};

const pintarArmas = (weapons) => {

  const main$$ = document.querySelector("main");

  main$$.innerHTML = `
          <h1>Estas son las armas de Valorant</h1>
          <div class="armas"></div>
      `;

  const armas$$ = document.querySelector(".armas");

  for (const weapon of weapons) {
    armas$$.innerHTML += pintarWeapon(weapon);
  }

};