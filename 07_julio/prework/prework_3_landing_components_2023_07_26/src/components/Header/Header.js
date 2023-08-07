import { Button } from "../Button/Button";
import { links } from "../../data/links";
import { Link } from "../Link/Link";
import "./Header.css"

export const Header = () => {

    const app$$ = document.querySelector("#app");

    app$$.innerHTML += `
        <header>
            <img src="/assets/logo.svg" alt="logo"/>
            <nav>
                <ul>
                    ${links.map((link) => Link(link.texto, link.id, link.href)).toString().replaceAll(",", "")}
                </ul>
            </nav>
            <div>
                ${Button("low", "Login")}
                ${Button("high", "Sign up")}
            </div>
        </header>
    `
}