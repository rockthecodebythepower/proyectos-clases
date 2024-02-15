import { Characters } from "../components/Characters/Characters";
import { Episodes } from "../components/Episodes/Episodes";
import { Locations } from "../components/Locations/Locations";

export const navLinks = [
  {
    text: "Characters",
    component: Characters,
    color: "black",
  },
  {
    text: "Locations",
    component: Locations,
    color: "red",
  },
  {
    text: "Episodes",
    component: Episodes,
    color: "blue",
  }
];
