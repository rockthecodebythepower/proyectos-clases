import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/formik">Formik</Link>
            </li>
            <li>
                <Link to="/hookform">React Hook Form</Link>
            </li>
            <li>
                <Link to="/ourform">Our Form Library</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar