import "./Home.css";

export const initHome = () => {
  const main$$ = document.querySelector("main");

  //! EL CLIENTE LE PIDE AL CAMARERO ALGO Y EL CAMARERO RESPONDE, LUEGO EL CLIENTE PROCESA LA RESPUESTA
  fetch("http://localhost:3000/api/v1").then((res) => res.json()).then((respuesta) => {
      main$$.innerHTML = `
        <h1>${respuesta}</h1>
    `;
    });
};
