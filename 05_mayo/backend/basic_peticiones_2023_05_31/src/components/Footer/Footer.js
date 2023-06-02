import { printRoutes } from "../Routes/Routes";
import { FooterRoutes } from "../../config/routes";
import "./Footer.css";

export const initFooter = () => {
  const footer$$ = document.querySelector("footer");

  const ul$$ = document.createElement("ul");

  printRoutes(FooterRoutes, ul$$);

  footer$$.appendChild(ul$$);
};
