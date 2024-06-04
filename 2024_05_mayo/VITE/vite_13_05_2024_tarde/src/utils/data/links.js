import { AboutMe } from "../../pages/AboutMe/AboutMe";
import { Experience } from "../../pages/Experience/Experience";
import { Gallery } from "../../pages/Gallery/Gallery";

export const links = [
  {
    title: "Sobre mi",
    path: "/about",
    component: AboutMe,
  },
  {
    title: "Experiencia",
    path: "/experience",
    sub_links: [
      {
        title: "Google",
        path: "/experience/google",
      },
      {
        title: "Amazon",
        path: "/experience/amazon",
      },
      {
        title: "The Power",
        path: "/experience/thepower",
      },
    ],
    component: Experience,
  },
  {
    title: "Gallery",
    path: "/gallery",
    component: Gallery,
  },
];
