import { API } from "../API/API";

export const doRegister = async (e) => {
  e.preventDefault();

  const [emailInput, passwordInput, nameInput, lastNameInput] = e.target;

  const body = {
    email: emailInput.value,
    password: passwordInput.value,
    name: nameInput.value,
    lastName: lastNameInput.value,
  };

  const res = await API({
    endpoint: "/users/register",
    body,
    method: "POST",
  });

  console.log(res);
};
