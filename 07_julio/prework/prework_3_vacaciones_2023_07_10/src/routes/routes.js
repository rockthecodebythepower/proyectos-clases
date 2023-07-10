import { renderAbout } from "../components/About/About";
import { renderHolidays } from "../components/Holidays/Holidays";
import { renderHome } from "../components/Home/Home";

export const routes = [
  {
    id: "home",
    text: "Home",
    funcion: renderHome
  },
  {
    id: "holidays",
    text: "Holidays",
    funcion: renderHolidays
  },
  {
    id: "about",
    text: "About",
    funcion: renderAbout
  }
];