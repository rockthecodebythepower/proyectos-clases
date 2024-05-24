import { Home } from "../../pages/Home/Home";
import { navLinks } from "../data/navlinks";

export const popStateListener = () => {
  window.addEventListener("popstate", () => {
    const link = navLinks.find(
      (link) => link.path === window.location.pathname
    );
    link?.page();

    if (!link) {
      Home();
      window.history.pushState("", "", "/");
    }
  });
};
