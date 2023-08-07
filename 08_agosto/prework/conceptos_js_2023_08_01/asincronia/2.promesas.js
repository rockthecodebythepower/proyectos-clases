const URL = "https://rickandmortyapi.com/api/character";

const printData = (list) => {
  const ul = document.createElement("ul");
  for (const item of list) {
    const li = document.createElement("li");
    li.textContent = item.name;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
};

const printError = (error) => {
  const h2 = document.createElement("h2");
  h2.innerText = error.message;
  document.body.appendChild(h2);
};

fetch(URL)
  .then((response) => response.json())
  .then((data) => printData(data.results))
  .finally(() => console.log("Petición terminada"))
  .catch((error) => printError(error));
