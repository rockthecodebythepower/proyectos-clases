import "./Pinturas.css";

export const initPinturas = () => {
  const main$$ = document.querySelector("main");

  main$$.innerHTML = ``;

  const buscador$$ = document.createElement("input");
  buscador$$.type = "number";

  const div$$ = document.createElement("div");

  /* fetch("http://localhost:3000/pinturas").then((res) => res.json()).then((pinturas) => {

      for (const pintura of pinturas) {
        main$$.innerHTML += `
            <div class="pintura">
                <h3>${pintura.nombre}</h3>
                <div>
                    <img src="${pintura.imagen}"/>
                </div>
                <p>${pintura.valor}€</p>
            </div>
        `;
      }

    }); */

  const peticion = (posicion = 1) => {

    div$$.innerHTML = ""

    console.log(posicion);

    fetch("http://localhost:3000/pinturas/" + posicion)
      .then((res) => res.json())
      .then((pintura) => {
        div$$.innerHTML += `
            <div class="pintura">
                <h3>${pintura.nombre}</h3>
                <div>
                    <img src="${pintura.imagen}"/>
                </div>
                <p>${pintura.valor}€</p>
            </div>
        `;
      });

  };

  buscador$$.addEventListener("input", (e) => peticion(e.target.value));

  main$$.appendChild(buscador$$)
  main$$.appendChild(div$$);

};
