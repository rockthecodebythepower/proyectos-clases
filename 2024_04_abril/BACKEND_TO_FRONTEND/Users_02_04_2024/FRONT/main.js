import { Login } from "./src/pages/Login/Login";
import { Users } from "./src/pages/Users/Users";
import { API_URL } from "./src/utils/variables/variables";
import "./style.css";

fetch(API_URL + "/users/checksession", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    if (res === "Unauthorized") {
      Login();
    } else {
      Users();
      localStorage.setItem("user", JSON.stringify(res));
    }
  });
