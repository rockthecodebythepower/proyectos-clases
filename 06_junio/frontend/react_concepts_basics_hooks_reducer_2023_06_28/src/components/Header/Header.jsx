import "./Header.scss";

const Header = ({ state, peticion }) => {

    const { primary, secondary, terciary, text, stroke } = state;

  const li = {
    color:
      stroke &&
      stroke,
  };

  return (
    <header
      style={{
        backgroundColor:
          primary &&
          primary,
      }}
    >
      <img src="/assets/Logo.png" />
      <nav>
        <ul>
          <li
            style={li}
          >
            Home
          </li>
          <li
            style={li}
          >
            Service
          </li>
          <li
            style={li}
          >
            Feature
          </li>
          <li style={li}>Product</li>
          <li
            style={li}
          >
            Testimonial
          </li>
          <li
            style={li}
          >
            FAQ
          </li>
        </ul>
      </nav>
      <div>
        <button>Login</button>
        <button>Sign up</button>
      </div>
      <button onClick={peticion}>Cambiar Paleta</button>
    </header>
  );
};

export default Header;