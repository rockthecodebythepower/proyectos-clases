import { Aprendizajes } from "../pages/Aprendizajes/Aprendizajes";
import { Recursos } from "../pages/Recursos/Recursos";
import { Ideas } from "../pages/Ideas/Ideas";

export const routes = [
    {
        path: "/recursos",
        text: "Recursos",
        component: Recursos
    },
    {
        path: "/aprendizajes",
        text: "Aprendizajes",
        component: Aprendizajes
    },
    {
        path: "/ideas",
        text: "Ideas",
        component: Ideas
    },
]