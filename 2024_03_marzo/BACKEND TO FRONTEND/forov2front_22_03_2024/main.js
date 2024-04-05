import "./style.css";

const app = document.querySelector("#app");

const formLogin = () => {
  const form = document.createElement("form");
  form.classList.add("login-form");

  form.innerHTML = `
    <div>
      <label>Email</label>
      <input type="email"/>
    </div>
    <div>
      <label>Contraseña</label>
      <input type="password"/>
    </div>
    <button>Login</button>
  `;

  form.addEventListener("submit", login);

  app.append(form);
};

const login = async (e) => {
  e.preventDefault();

  const body = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  const submit = JSON.stringify(body);

  const resultado = await fetch(
    "https://foro-v2.vercel.app/api/v1/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: submit,
    }
  );

  const response = await resultado.json();

  localStorage.setItem("token", response.token);

  getForos();
};

const getForos = async () => {
  app.innerHTML = "";

  const resultado = await fetch("https://foro-v2.vercel.app/api/v1/foro", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const foros = await resultado.json();

  printForos(foros);
};

const printForos = (foros) => {
  for (const foro of foros) {
    const div = document.createElement("div");
    div.classList.add("foro");

    div.innerHTML = `
      <div>
        <img src="${foro.img}"/>
      </div>
      <h3>${foro.name}</h3>
    `;

    div.addEventListener("click", () => getForoById(foro._id));
    app.append(div);
  }
};

const getForoById = async (id) => {
  const resultado = await fetch(
    "https://foro-v2.vercel.app/api/v1/foro/" + id,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const foro = await resultado.json();

  printForo(foro);
};

const printForo = (foro) => {
  app.innerHTML = "";
  const divForo = document.createElement("section");
  divForo.classList.add("foro");

  divForo.innerHTML = `
    <div class="foro-header">
      <div>
        <img src="${foro.img}"/>
      </div>
      <h3>${foro.name}</h3>
    </div>
    <section>
      <h2>Comentarios</h2>
      <div>
        ${foro.comments.map(
          (comment) => `
          <article class="comment">
            <div class="info-user">
              <div>
                <img src="${comment.user.img}"/>
              </div>
              <h4>${comment.user.name}</h4>
            </div>
            <p>${comment.text}</p>
          </article>
        `
        )}
      </div>
    </section>
  `;

  app.append(divForo);
};

formLogin();
