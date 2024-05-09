import { BASE_URL } from "./variables";

export const API = async ({ endpoint, method = "GET", payload }) => {
  const body = JSON.stringify(payload);

  const res = await fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body,
  });
  const response = await res.json();
  return response;
};
