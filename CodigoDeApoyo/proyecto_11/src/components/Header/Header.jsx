import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Adivina el Pais</NavLink>
                </li>
                <li>
                    <NavLink to="/guessPopulation">Adivina la población</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header