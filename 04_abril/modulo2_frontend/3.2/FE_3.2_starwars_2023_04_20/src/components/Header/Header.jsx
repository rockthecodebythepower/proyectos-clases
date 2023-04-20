import './Header.css';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Star Wars logo" />
      <nav data-testid="header-navigator">
        <ul>
          <li>
            <NavLink to="/">
              Home<span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery">
              Gallery<span>Gallery</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About<span>About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
