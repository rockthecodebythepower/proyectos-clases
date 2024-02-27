import "./Posts.css";

export const Posts = () => {
  const app = document.querySelector("#app");

  const section = document.createElement("section");

  section.id = "posts";

  app.append(section);
};
