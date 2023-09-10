import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </header>
  )
}

export default Header