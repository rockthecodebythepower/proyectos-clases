import { navigate } from "../../utils/router/navigate";
import { Link } from "../Link/Link";
import "./SubLinks.css";

export const SubLinks = (e, sub_links) => {
  console.log(e.x);
  console.log(e.y);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  nav.classList.add("sub_links");

  nav.style.top = `${e.y - 10}px`;
  nav.style.left = `${e.x - 10}px`;

  for (const sub_link of sub_links) {
    const li = document.createElement("li");

    Link(li, sub_link);

    ul.append(li);
  }

  nav.addEventListener("mouseleave", () => nav.remove());

  nav.append(ul);
  document.body.append(nav);
};
