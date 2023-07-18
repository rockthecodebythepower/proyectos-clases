import ButtonTroll from "buttontroll";
import "./App.css";
import Formik from "./pages/Formik/Formik";
import ReactHookForm from "./pages/ReactHookForm/ReactHookForm";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  // useNavigate -> custom hook que han creado ellos para permitirnos navegar en la aplicación;

  const navigate = useNavigate();

  const navegar = () => {
    navigate("/formik");
  };

  return (
    <>
      <button onClick={navegar}>FORMIK</button>
      <NavLink
        to="/hookform"
        className={({ isActive }) => (isActive ? "activo" : null)}
      >
        REACT HOOK FORM
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activo" : null)}
      >
        HOME
      </NavLink>
      <Routes>
        <Route path="/formik" element={<Formik></Formik>}></Route>
        <Route
          path="/hookform"
          element={<ReactHookForm></ReactHookForm>}
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
