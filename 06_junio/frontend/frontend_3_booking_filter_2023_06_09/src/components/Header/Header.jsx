import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/destinos">Destinos</Link>
        </nav>
    </header>
  )
}

export default Header