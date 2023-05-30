import "./Header.css";

function Header() {
  return (
    <header>
      <img src="/assets/nike.png" alt="logo" className="logo"/>
      <nav>
        <ul>
            <li>Novedades y destacados</li>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niño/a</li>
            <li>Ofertas</li>
        </ul>
      </nav>
      <div>
        <div>
            <img src="/assets/lupa.png"/>
            <input placeholder="Buscar" className="buscar"/>
        </div>
        <img src="/assets/like.png"/>
        <img src="/assets/bolsa.png"/>
      </div>
    </header>
  );
}

export default Header;