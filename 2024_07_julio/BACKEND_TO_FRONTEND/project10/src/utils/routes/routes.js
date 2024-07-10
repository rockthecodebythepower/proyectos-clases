import { CreateProject } from "../../pages/CreateProjects/CreateProject";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Projects } from "../../pages/Projects/Projects";

export const routes = [
    {
        path: "/",
        text: "Home",
        page: Home
    },
    {
        path: "/projects",
        text: "Proyectos",
        page: Projects
    },
    {
        path: "/create-project",
        text: "Crea tu proyecto",
        page: CreateProject
    },
    {
        path: "/login",
        text: "Login",
        page: Login
    },
];