import "./Header.css";
import Navigator from "../Navigator/Navigator";

const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = `
  <h1>CodeCrafters</h1>
  ${Navigator()}
  `;
  document.body.appendChild(header);
};

export default Header;
