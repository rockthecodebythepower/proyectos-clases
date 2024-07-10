import { navigate } from "../../utils/functions/navigate";
import { routes } from "../../utils/routes/routes";
import "./Header.css";

export const Header = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (const route of routes) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.addEventListener("click", (e) => navigate(e, route));

        a.textContent = route.text;
        a.href= route.path;
        li.append(a);
        ul.append(li);
    }

    header.append(nav);
    nav.append(ul);
    document.body.append(header);
}