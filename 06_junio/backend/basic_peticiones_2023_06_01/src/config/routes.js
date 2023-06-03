import { initHome } from "../components/Home/Home";
import { initPinturas } from "../components/Pinturas/Pinturas";

export const HeaderRoutes = [
  {
    path: "home",
    funcion: initHome
  },
  {
    path: "pinturas",
    funcion: initPinturas
  }
];

export const FooterRoutes = [
    {
      path: "Casa",
    },
    {
      path: "Pictures",
    }
  ];