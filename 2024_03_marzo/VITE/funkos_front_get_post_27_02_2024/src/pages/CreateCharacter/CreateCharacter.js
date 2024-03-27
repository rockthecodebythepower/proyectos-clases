import { createFormField } from "../../components/FormField/FormField";
import { formFields } from "../../data/formFields";
import { API_URL, DIV_APP } from "../../variables/variables";
import { GetCharacters } from "../GetCharacters/GetCharacters";
import "./CreateCharacter.css";

export const CreateCharacter = () => {
  DIV_APP.innerHTML = "";
  createForm();
};

export const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("character_form");

  for (const field of formFields) {
    createFormField(form, field.key, field.type);
  }

  const button = document.createElement("button");

  button.textContent = "Crear Personaje";

  form.addEventListener("submit", postCharacter);

  form.append(button);
  DIV_APP.append(form);
};

const postCharacter = async (e) => {
  e.preventDefault();

  const character = {};

  for (const field of formFields) {
    character[field.key] = document.querySelector(`#${field.key}`).value;
  }

  const parsedCharacter = JSON.stringify(character);

  const res = await fetch(API_URL, {
    method: "POST",
    body: parsedCharacter,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();

  GetCharacters();
};
