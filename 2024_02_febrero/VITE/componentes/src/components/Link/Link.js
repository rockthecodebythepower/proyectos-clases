import "./Link.css";

export const Link = (parentElemenet, link) => {
  const { text, component, color } = link;

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.style.color = color;
  a.textContent = text;
  a.href = "#";
  li.append(a);

  a.addEventListener("click", component);

  parentElemenet.append(li);
};