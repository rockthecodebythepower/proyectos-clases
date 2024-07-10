import { API } from "../../utils/API/API";
import { createPage } from "../../utils/functions/createPage";
import "./Projects.css";

export const Projects = async () => {
  const div = createPage("projects");

  const response = await API({
    endpoint: "/projects",
    token: localStorage.getItem("token"),
  });

  for (const project of response.projects) {
    div.innerHTML += `
            <div class="project">
                <h3>${project.title}</h3>
                <div>
                    <img src="${project.imgs[0]}"/>
                </div>
            </div>
        `;
  }
};
