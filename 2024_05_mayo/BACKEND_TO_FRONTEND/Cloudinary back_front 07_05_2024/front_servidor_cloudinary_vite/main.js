import axios from "axios";

const form = document.querySelector("form");

const submit = async (e) => {
  e.preventDefault();
  const [titleInput, imgInput] = e.target;

  const body = new FormData();

  body.append("title", titleInput.value);
  body.append("img", imgInput.files[0]);

  const res = await fetch("http://localhost:3000/api/v1", {
    method: "POST",
    body: body,
  });

  const response = await res.json();

  /* const response = await axios.post("http://localhost:3000/api/v1", body); */

  console.log(response);
};

form.addEventListener("submit", submit);
