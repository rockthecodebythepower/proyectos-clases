import { useState } from "react";
import "./App.css";
import Flex from "./components/Flex/Flex";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  const [form, setForm] = useState();

  return (
    <>
      <img
        src="/assets/user.png"
        className="user_access"
        onClick={() => setForm("login")}
      />
      {form === "login" && <Login setForm={setForm}/>}
      {form === "register" && <Register paquito={setForm}/>}
    </>
  );
};

export default App;
