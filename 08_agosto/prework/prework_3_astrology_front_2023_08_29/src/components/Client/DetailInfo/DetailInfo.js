import "./DetailInfo.css";

export const detailInfo = (cliente, padre$$) => {
  const divDetailInfo$$ = document.createElement("div");

  divDetailInfo$$.classList.add("detailInfo");

  if (cliente.correo) {
    const email$$ = document.createElement("p");
    email$$.textContent = `email: ${cliente.correo}`;
    divDetailInfo$$.append(email$$);
  }

  padre$$.append(divDetailInfo$$);
};