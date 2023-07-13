const projects$$ = document.querySelector(".projects");

const BASIC_URL = "http://localhost:3000/api/v1";

const peticion = async (endpoint) => {
  const res = await fetch(BASIC_URL + endpoint);

  const response = await res.json();

  return response;
};

const eliminar = async (id) => {
  await fetch(BASIC_URL + "/projects/" + id, {
    method: "DELETE",
  });

  peticion("/projects").then((res) => pintarProjects(res));
};

const pintarProjects = (projects) => {
  projects$$.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    projects$$.innerHTML += `
            <div class="project">
                <button class="eliminar ${project._id}">eliminar</button>
                <h3>${project.name}</h3>
                <a href="${project.url}" class="link" target="blank">
                    <img src="${project.img}"/>
                </a>
                <p>${project.description}</p>
            </div>
        `;
  }

  const eliminar$$ = document.querySelectorAll(`.eliminar`);
  for (const elemento of eliminar$$) {
    elemento.addEventListener("click", (e) => eliminar(e.target.classList[1]));
  }
};

peticion("/projects").then((res) => pintarProjects(res));

const enviar = {
  name: "",
  date: "",
  url: "",
  img: "",
  description: "",
};

const name$$ = document.querySelector("#name");
const date$$ = document.querySelector("#date");
const url$$ = document.querySelector("#url");
const img$$ = document.querySelector("#img");
const description$$ = document.querySelector("#description");
const post$$ = document.querySelector("#post");

name$$.addEventListener("input", (e) => {
  enviar.name = e.target.value;
});

date$$.addEventListener("input", (e) => {
  enviar.date = e.target.value;
});

url$$.addEventListener("input", (e) => {
  enviar.url = e.target.value;
});

img$$.addEventListener("input", (e) => {
  enviar.img = e.target.value;
});

description$$.addEventListener("input", (e) => {
  enviar.description = e.target.value;
});

const post = async (e) => {
  e.preventDefault();

  const enviarJson = JSON.stringify(enviar);

  await fetch(BASIC_URL + "/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: enviarJson,
  });

  peticion("/projects").then((res) => pintarProjects(res));
};

post$$.addEventListener("click", post);
