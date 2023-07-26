import "./Footer.css";

const Footer = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
  <p>Rock the Code - 2023</p>
  `;
  document.body.appendChild(footer)
};

export default Footer;
