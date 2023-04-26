import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink/HeaderLink";
import Modo from "./Modo/Modo";

const Header = React.memo(({isDarkProp, setIsDarkProp}) => {

    console.log("SOY HEADER Y ME RE-RENDERIZO");

  return (
    <header className={isDarkProp ? "header__dark" : "header__light"}>
      <Link to="/home">
        <img className="logo" src="/assets/gominola.png" alt="logo kiosko"/>
      </Link>
      <nav>
        <ul>
          <li>
            <HeaderLink isDarkProp={isDarkProp} textProp="Home" pathProp="/home"></HeaderLink>
          </li>
          <li>
            <HeaderLink isDarkProp={isDarkProp} textProp="Stock" pathProp="/stock"></HeaderLink>
          </li>
        </ul>
      </nav>
      <Modo isDarkProp={isDarkProp} setIsDarkProp={setIsDarkProp}/>
    </header>
  );
});

export default Header;
