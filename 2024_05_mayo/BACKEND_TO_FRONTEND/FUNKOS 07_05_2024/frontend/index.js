let USER;

const getFunkos = async () => {
  const response = await fetch("http://localhost:3000/funkos");

  const funkos = await response.json();

  printFunkos(funkos);
};

const printFunkos = (funkos) => {
  const list = document.createElement("aside");
  const ul = document.createElement("ul");

  for (const funko of funkos) {
    const li = document.createElement("li");

    
    if (USER.listOfFunkos.includes(funko._id)) {
        li.classList.add("lete");
    } else {
        li.addEventListener("click", () => selectFunko(funko));
    }

    li.innerHTML = `
            <h4>${funko.name}</h4>
            <p>${funko.price} €</p>
        `;

    ul.append(li);
  }

  list.append(ul);
  document.body.append(list);
};

const selectFunko = (funko) => {
  const imgToDelete = document.querySelector(".img_funko");
  imgToDelete?.remove();

  const divImg = document.createElement("div");
  const img = document.createElement("img");
  divImg.classList.add("img_funko");

  img.src = funko.img;

  divImg.append(img);
  document.body.append(divImg);
};

const login = async () => {
  const obj = {
    userName: "Santi",
    password: "123",
  };

  const data = JSON.stringify(obj);

  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: data,
  });

  const res = await response.json();

  USER = res.user;
};

login().then(() => {
    getFunkos();
});
