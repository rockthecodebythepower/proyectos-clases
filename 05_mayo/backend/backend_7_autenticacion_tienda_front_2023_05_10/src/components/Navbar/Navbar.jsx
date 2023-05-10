import { Link } from "react-router-dom"
import "./Navbar.css"
import { useContext } from "react";
import { userContext } from "../../context/userProvider";

const Navbar = () => {

    const { user, setUser } = useContext(userContext);

    const logout = () => {
        setUser();
        localStorage.removeItem("user");
    }

  return (
    <nav>
        <ul>
            {user && <li>{user.userName}</li>}
            <li><Link to="/">Home</Link></li>
            {user && <li><Link to="/cafes">Cafes</Link></li>}
            {user && user.rol === "admin" && <li><Link to="/createcafe">Crear Cafe</Link></li>}
            {!user && <li><Link to="/login">Login</Link></li>}
            {!user && <li><Link to="/register">Register</Link></li>}
            {user && <li onClick={logout}>Logout</li>}
        </ul>
    </nav>
  )
}

export default Navbar