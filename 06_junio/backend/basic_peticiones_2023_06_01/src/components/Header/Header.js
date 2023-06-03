import { HeaderRoutes } from "../../config/routes";
import { printRoutes } from "../Routes/Routes";
import "./Header.css";

export const initHeader = () => {
    
  const header$$ = document.querySelector("header");

  const nav$$ = document.createElement("nav");
  const ul$$ = document.createElement("ul");

  printRoutes(HeaderRoutes, ul$$);

  nav$$.appendChild(ul$$);
  header$$.appendChild(nav$$)

};