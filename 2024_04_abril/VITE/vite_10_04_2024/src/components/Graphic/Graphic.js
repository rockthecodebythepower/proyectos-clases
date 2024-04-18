import { colors } from "../../data/colors";
import { findClosestIndex } from "../../utils/functions/findClosestIndex";
import { generateEquidistantValues } from "../../utils/functions/generateEquidistantValues";
import { getMinMaxValue } from "../../utils/functions/getMinMaxValue";
import "./Graphic.css";

export const Graphic = (data) => {
  const divGraphic = document.createElement("div");

  divGraphic.classList.add("graphic");

  divGraphic.style.gridTemplateRows = `repeat(${data.length}, 1fr)`;

  const { min, max } = getMinMaxValue(data);

  const equidistantValues = generateEquidistantValues(min, max, 6);

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("row");

    p.textContent = `${element[Object.keys(element)[0]]} --`;
    div.style.gridRow = `${i + 1} / ${i + 2}`;
    div.style.gridColumnStart = 1;

    div.style.gridColumnEnd =
      findClosestIndex(equidistantValues, element[Object.keys(element)[1]]) + 2;

    div.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    /* const parche = document.createElement("div");
    parche.style.backgroundColor = "rgb(23, 23, 23)";

    parche.style.gridColumn = `${
      findClosestIndex(equidistantValues, element[Object.keys(element)[1]]) + 1
    } / 
      ${
        findClosestIndex(equidistantValues, element[Object.keys(element)[1]]) +
        2
      }`;

    parche.style.gridRow = `${i + 1} / ${i + 2}`;

    parche.classList.add("parche"); */

    /* divGraphic.append(parche); */
    div.append(p);
    divGraphic.append(div);
  }

  for (let i = 0; i < equidistantValues.length; i++) {
    const value = equidistantValues[i];
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("column");
    const divP = document.createElement("div");

    divP.textContent = "|";

    p.textContent = `${value}`;
    div.style.gridRow = `${data.length} / ${data.length + 1}`;
    div.style.gridColumn = `${i + 1} / ${i + 2}`;

    divP.append(p);
    div.append(divP);
    divGraphic.append(div);
  }

  divGraphic.style.gridTemplateColumns = `repeat(${equidistantValues.length}, 1fr)`;

  document.body.append(divGraphic);
};
