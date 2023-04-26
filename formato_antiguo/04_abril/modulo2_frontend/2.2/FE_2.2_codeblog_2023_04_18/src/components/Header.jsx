import {NavLink} from "react-router-dom"
import styled from "styled-components"

const HeaderStyled = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--secondary);

  h1 {
    text-transform: uppercase;
  }

  span {
    transform: scale(1.4);
    color: var(--secondary);
  }

  nav > ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease-in-out;
  }

  a:hover {
    color: var(--secondary);
  }

  .active {
    color: var(--secondary);
    border-bottom: 2px solid var(--secondary);
  }
`

const Header = () => {
  return (
    <HeaderStyled data-testid="header">
      <span className="material-symbols-outlined">code_blocks</span>
      <h1>Code Blog</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  )
}

export default Header
