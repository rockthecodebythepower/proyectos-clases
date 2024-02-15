import { API } from "../../utils/API";
import { Pagination } from "../Pagination/Pagination";
import "./Locations.css";

export const Locations = async () => {
  const locations = await API("location", locationsPage.page);
  const main = document.querySelector("#main");
  main.innerHTML = "";
  const sectionLocations = document.createElement("section");
  sectionLocations.className = "locations";

  for (const location of locations) {
    sectionLocations.innerHTML += `
        <div>
            <div>
                <img src="https://images.creativefabrica.com/products/thumbnails/2023/10/10/dDUU8ZkB3/2WZVFNjX99pBCs4sqZcZtvW80Q1.png"/>
            </div>
            <h3>${location.name}</h3>
            <p>${location.dimension === "unknown" ? "" : location.dimension}</p>
        </div>
    `;
  }

  main.append(sectionLocations);
  main.append(Pagination(locationsPage));
};

const locationsPage = {
  page: 1,
  component: Locations,
};
