import { useContext, useEffect } from "react";
import "./App.css";
import Cafes from "./pages/Cafes/Cafes";
import { modeContext } from "./context/modeProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateCafe from "./pages/CreateCafe/CreateCafe";
import Navbar from "./components/Navbar/Navbar";
import { userContext } from "./context/userProvider";
import RequireAuth from "./shared/RequireAuth/RequireAuth";

function App() {
  const { darkMode } = useContext(modeContext);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  

  return (
    <div className={darkMode ? "main dark" : "main"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cafes" element={<RequireAuth><Cafes /></RequireAuth>}></Route>
        <Route path="/login" element={!user ? <Login /> : <Cafes />}></Route>
        <Route
          path="/register"
          element={!user ? <Register /> : <Cafes />}
        ></Route>
        <Route
          path="/createcafe"
          element={<RequireAuth adminAccess><CreateCafe /></RequireAuth>}
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
