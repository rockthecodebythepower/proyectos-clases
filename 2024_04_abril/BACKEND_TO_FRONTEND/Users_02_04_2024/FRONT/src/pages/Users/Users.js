import { API_URL, app } from "../../utils/variables/variables";
import "./Users.css";

export const Users = async () => {
  app.innerHTML = "";

  const res = await fetch(API_URL + "/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const users = await res.json();

  printUsers(users);
};

const printUsers = (users) => {
  for (const user of users) {
    const div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
            <h3>${user.userName}</h3>
            <p>Rol: ${user.rol}</p>
        `;

    if (JSON.parse(localStorage.getItem("user")).rol === "admin") {
      const x = document.createElement("img");
      x.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png";
      x.classList.add("x");
      x.addEventListener("click", () => deleteUser(user._id));
      div.append(x);
    }

    app.append(div);
  }
};


const deleteUser = async (id) => {
    const res = await fetch(API_URL + `/users/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });

    const response = await res.json();

    console.log(response);
    Users();
}