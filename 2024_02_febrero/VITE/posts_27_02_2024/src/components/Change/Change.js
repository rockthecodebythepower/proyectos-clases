import { getPost } from "../../services/API";
import { changePost } from "../../utils/changePost";
import { POST_NUM } from "../../utils/var";
import "./Change.css";

export const Change = () => {
  const app = document.querySelector("#app");

  const div = document.createElement("div");

  div.id = "change";

  app.append(div);
};

export const createButtons = () => {
  const divChange = document.querySelector("#change");
  const prev = document.createElement("button");
  const next = document.createElement("button");
  const num = document.createElement("p");

  getPost(POST_NUM);
  num.textContent = POST_NUM;

  prev.innerHTML = `<img class="prev" src="/assets/flecha.png"/>`;
  next.innerHTML = `<img src="/assets/flecha.png"/>`;

  prev.addEventListener("click", () => changePost("-", num));

  next.addEventListener("click", () => changePost("+", num));

  divChange.append(prev, num, next);
};
