import { API } from "../../utils/API";

export const createFormAdoption = (cat) => {
  const form = document.createElement("form");

  form.innerHTML = `
        <textarea placeholder="Escribe tu mensaje de por qué deberíamos dejarte adoptar a ${cat.name}"></textarea>
        <button>Enviar</button>
    `;

  form.addEventListener("submit", (e) => submit(e, cat._id));

  document.body.append(form);
};

const submit = async (e, catId) => {
  e.preventDefault();

  const [textArea] = e.target;

  const adoption = await API({
    endpoint: "/adoptions",
    method: "POST",
    payload: { message: textArea.value, cat: catId },
  });

  console.log(adoption);
};
