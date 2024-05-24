import { navigate } from "../../utils/functions/navigate";
import "./NavLink.css";

export const NavLink = ({ parentNode, link }) => {
  const { text, page, path } = link;
  const li = document.createElement("li");
  li.classList.add("nav-link")
  const a = document.createElement("a");
  a.textContent = text;
  a.href = path;
  li.append(a);
  parentNode.append(li);

  a.addEventListener("click", (e) => navigate({ e, page, text, path }))
};
