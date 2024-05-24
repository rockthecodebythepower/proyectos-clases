import { About } from "../../pages/AboutMe/AboutMe";
import { Catalogue } from "../../pages/Catalogue/Catalogue";
import { Contact } from "../../pages/Contact/Contact";
import { Home } from "../../pages/Home/Home";

export const navLinks = [
    {
        text: "Inicio",
        path: "/",
        page: Home
    },
    {
        text: "Catálogo",
        path: "/catalogue",
        page: Catalogue
    },
    {
        text: "Sobre nosotros",
        path: "/about",
        page: About
    },
    {
        text: "Contacto",
        path: "/contact",
        page: Contact
    },
];