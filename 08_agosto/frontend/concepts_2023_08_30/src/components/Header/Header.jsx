import "./Header.css";

const Header = ({ setPage }) => {

  //! object destructuring -> una manera que tenemos de "sacar" las propiedades de un objeto para luego utilizarlas por si mismas

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => setPage("home")}>Home</li>
          <li onClick={() => setPage("about")}>About</li>
          <li onClick={() => setPage("contact")}>Contact</li>
          {/* <Link to="/Home">Ir a home</Link> */}
          {/*  https://aslkdfalsd/home/34 */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;