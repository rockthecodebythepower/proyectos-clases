import { navigate } from "../../utils/router/navigate";
import { SubLinks } from "../SubLinks/SubLinks";
import "./Link.css";

export const Link = (parentElement, link) => {
  const a = document.createElement("a");

  a.textContent = link.title;
  a.href = link.path;

  a.addEventListener("click", (e) => navigate(e, link));

  // MI OPCIÓN ES HACER EL HOVER POR CSS
  if (link.sub_links) {
    a.addEventListener("mouseover", (e) => SubLinks(e, link.sub_links));
  }

  /* a.addEventListener("mouseleave", () =>
    document.querySelector(".sub_links").remove()
  ); */

  parentElement.append(a);
};
