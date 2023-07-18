import { apps } from "../../apps/apps";
import "./Apps.css";

export const renderApps = () => {
  const apps$$ = document.querySelector(".apps");

  for (const app of apps) {
    const divApp$$ = document.createElement("div");
    const divImg$$ = document.createElement("div");
    const img$$ = document.createElement("img");
    const nombre$$ = document.createElement("h3");

    divApp$$.id = app.nombre;
    divApp$$.draggable = true;
    img$$.draggable = false;
    divApp$$.addEventListener("touchstart", agarrar);
    divApp$$.addEventListener("dragstart", agarrar);
    divApp$$.addEventListener("dragend", (e) =>
      e.target.classList.remove("drag")
    );
    img$$.src = app.icono;
    /* img$$.setAttribute("src", app.icono); */
    nombre$$.textContent = app.nombre;

    divImg$$.appendChild(img$$);
    divApp$$.appendChild(divImg$$);
    divApp$$.appendChild(nombre$$);

    apps$$.appendChild(divApp$$);
  }

  //! importante prevenir el comportamiento por defecto del evento dragover de un div para permitir que se pueda soltar algo en el
  apps$$.addEventListener("dragover", (e) => e.preventDefault());
  apps$$.addEventListener("drop", soltar);
};

const agarrar = (e) => {
  e.target.className = "drag";
  e.dataTransfer.setData("text/plain", e.target.id);
};

const soltar = (e) => {
  if (e.target.className !== "apps" && !e.target.id) {
    return;
  }

  // guardar en una variable id el dato del id del elemento que hemos agarrado
  const id = e.dataTransfer.getData("text");

  console.log(id);

  // seleccionamos el elemento del dom con ese id
  const element$$ = document.getElementById(id);

  if (e.target.id && e.target.id !== "agrupacion") {
    const nuevoDiv$$ = document.createElement("div");

    nuevoDiv$$.id = "agrupacion";
    nuevoDiv$$.appendChild(e.target);
    nuevoDiv$$.appendChild(element$$);

    const apps$$ = document.querySelector(".apps");

    apps$$.appendChild(nuevoDiv$$);
  } else {
    // guardando en una variable el lugar donde quiero soltar mi elemento agarrado - div apps$$
    const divDrop$$ = e.target;

    console.log(divDrop$$);
    console.log(element$$);

    // añadir el elemento agarrado al final del div donde lo he soltado
    divDrop$$.appendChild(element$$);
  }

  // limpiar el atributo dataTransfer para poder realizarlo más veces
  e.dataTransfer.clearData();

  comprobacion();
};

const comprobacion = () => {
  const allAgrup = document.querySelectorAll("#agrupacion");

  for (const agrupacion of allAgrup) {
    if (agrupacion.children.length < 2) {
      if (agrupacion.children.length !== 0) {

        const apps$$ = document.querySelector(".apps");

        apps$$.appendChild(agrupacion.children[0]);

      }

      agrupacion.remove();
    }
  }
};
