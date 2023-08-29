import { detailInfo } from "../DetailInfo/DetailInfo";
import "./PrevInfo.css";

export const prevInfo = (cliente, padre$$) => {
  // crear los elementos
  const divCliente$$ = document.createElement("div");
  const divImg$$ = document.createElement("div");
  const img$$ = document.createElement("img");
  const nombre$$ = document.createElement("h2");
  const apellidos$$ = document.createElement("h3");
  const fecha$$ = document.createElement("p");
  const hora$$ = document.createElement("p");
  const signoDiv$$ = document.createElement("div");
  const signo$$ = document.createElement("img");
  const arrow$$ = document.createElement("img");

  // dar información a los elementos
  divCliente$$.classList.add("cliente");
  img$$.src = cliente.imagen ? cliente.imagen : "/assets/usuario.png";
  nombre$$.textContent = cliente.nombre;
  apellidos$$.textContent =
    cliente.primerApellido + " " + cliente.segundoApellido;
  fecha$$.textContent = cliente.fechaNac;
  hora$$.textContent = cliente.hora;
  signo$$.src = `/assets/signos/${cliente.signo}.png`;
  divImg$$.classList.add("imgContainer");
  signoDiv$$.classList.add("signoDiv");
  arrow$$.src = "/assets/arrow.png";

  // añadir al html
  divCliente$$.append(divImg$$);
  divCliente$$.append(nombre$$);
  divCliente$$.append(apellidos$$);
  divCliente$$.append(fecha$$);
  divCliente$$.append(hora$$);
  divCliente$$.append(signoDiv$$);
  divCliente$$.append(arrow$$);
  signoDiv$$.append(signo$$);
  divImg$$.append(img$$);
  padre$$.append(divCliente$$);

  // dar funcionalidad a los elementos
  arrow$$.addEventListener("click", () => toggle(divCliente$$));

  detailInfo(cliente, divCliente$$);
};

const toggle = (divCliente$$) => {

    divCliente$$.classList.toggle("abierto");

}