import "./filters.css";

const template = () => {
  return `
    <h2>CSS Filters</h2>
    <img src="/porg.png" alt="Porg" id="filter-image"/>
    <div id="filtersBtn">
        <button id="blur">Blur</button>
        <button id="huerotate">Hue Rotate</button>
        <button id="saturate">Saturate</button>
        <button id="sepia">Sepia</button>
        <button id="opacity">Opacity</button>
        <button id="dropshadow">Drop Shadow</button>
        <button id="invert">Invert</button>
        <button id="mix">Mix</button>
        <button >Reset</button>
    </div>
    `;
};

const listeners = () => {
  //Recuperamos la imagen
  const image = document.querySelector("#filter-image");

  //Recuperamos todos los botones
  const btns = document.querySelectorAll("#filtersBtn > button");

  //Por cada uno de los botones, le añadimos un evento click que añada su id como nombre de clase a la imagen
  btns.forEach((btn) => {
    btn.onclick = () => {
      image.className = btn.id;
    };
  });
};

export const printTemplate = () => {
  document.querySelector("#filters").innerHTML = template();
  listeners();
};
