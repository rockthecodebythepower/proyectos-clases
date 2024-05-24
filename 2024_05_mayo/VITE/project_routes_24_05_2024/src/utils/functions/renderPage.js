export const renderPage = (id) => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const page = document.createElement("div");
  page.id = id;
  main.append(page);
};
