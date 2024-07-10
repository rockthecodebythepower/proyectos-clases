import { API } from "../API/API";

export const doLogin = async (e) => {
  e.preventDefault();
  console.log(e);

  e.preventDefault();

  const [emailInput, passwordInput] = e.target;

  const body = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  const res = await API({
    endpoint: "/users/login",
    body,
    method: "POST",
  });

  localStorage.setItem("token", res.token);
  console.log(res);
};
