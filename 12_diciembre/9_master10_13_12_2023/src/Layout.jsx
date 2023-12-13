import { Link } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";
import LoginModal from "./components/organisms/LoginModal/LoginModal";

const Layout = ({ children }) => {

    const [ modal, setModal ] = useState(false);

  return (
    <div className="layout">
      <div className="menu">
        <div className="logo_wrp">
          <img src="/assets/logo_sin_fondo.png" alt="logo" className="logo" />
        </div>
        <nav>
          <ul className="lista_links">
            <li>
              <Link>
              <div></div>
                <img src="/assets/icons/home.png" />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <a onClick={() => setModal(true)}>
              <div></div>
                <img src="/assets/icons/login.png" />
                <p>Login</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {modal ? <LoginModal/> : children}
    </div>
  );
};

export default Layout;
