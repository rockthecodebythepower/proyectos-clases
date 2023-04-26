const edu$$ = document.querySelector("#edu");
const hab$$ = document.querySelector("#hab");
const log$$ = document.querySelector("#log");
const mostrar$$ = document.querySelector("#mostrar");

const educacion = [
  {
    institucion: "Universidad",
    fecha_lugar: "2012 - 2016 | New York",
    contenido: "BSc. in HCI",
  },
  {
    institucion: "ESO",
    fecha_lugar: "2010 - 2012 | New York",
    contenido: "Eso",
  },
  {
    institucion: "Universidad",
    fecha_lugar: "2012 - 2016 | New York",
    contenido: "BSc. in HCI",
  },
  {
    institucion: "ESO",
    fecha_lugar: "2010 - 2012 | New York",
    contenido: "Eso",
  },
  {
    institucion: "Universidad",
    fecha_lugar: "2012 - 2016 | New York",
    contenido: "BSc. in HCI",
  },
  {
    institucion: "ESO",
    fecha_lugar: "2010 - 2012 | New York",
    contenido: "Eso",
  },
];

const habilidades = [
  {
    principal: "Herramientas",
    secundarias: ["Figma", "Sketch", "Webflow", "Notion", "Airtable", "Miro"],
  },
  {
    principal: "Metodologías",
    secundarias: ["UI/UX Design", "Buenas prácticas", "Programación funcional"],
  },
];

const logros = [
  {
    titulo: "Webflow",
    descripcion: "Website of the Day",
  },
  {
    titulo: "Eyeka",
    descripcion: "Creative idea winner",
  },
];

const pintarEdu = () => {
  mostrar$$.innerHTML = `<h2>Educacion</h2>`;

  for (const edu of educacion) {
    mostrar$$.innerHTML += `
            <div class="educacion">
                <h3>${edu.institucion}</h3>
                <p class="fecha">${edu.fecha_lugar}</p>
                <p>${edu.contenido}</p>
            </div>
        `;
  }
};

const pintarHab = () => {
  mostrar$$.innerHTML = `<h2>Habilidades</h2>`;

  for (const habilidad of habilidades) {
    const habilidad$$ = document.createElement("div");
    const principal$$ = document.createElement("h3");

    principal$$.textContent = habilidad.principal;
    principal$$.classList.add("habilidad_principal")

    habilidad$$.appendChild(principal$$);

    for (const hab of habilidad.secundarias) {
      const hab$$ = document.createElement("p");
      hab$$.textContent = hab;
      hab$$.className = "habilidad_secundaria"
      habilidad$$.appendChild(hab$$);
    }

    mostrar$$.appendChild(habilidad$$);
  }
};

const pintarLog = () => {
  mostrar$$.innerHTML = `<h2>Logros</h2>`;

  for (const logro of logros) {
    mostrar$$.innerHTML += `
            <div class="logro">
                <h3>${logro.titulo}</h3>
                <p>${logro.descripcion}</p>
            </div>
        `;
  }
};

edu$$.addEventListener("click", () => pintarEdu("educacion"));
hab$$.addEventListener("click", () => pintarHab("habilidades"));
log$$.addEventListener("click", () => pintarLog("logros"));

pintarEdu();