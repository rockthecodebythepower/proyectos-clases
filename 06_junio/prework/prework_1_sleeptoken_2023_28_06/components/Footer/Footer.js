import "./Footer.css";
import Button from "../Button/Button";

const Footer = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
  <img src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/st-ch3lm5-glyph-icons.png" alt="Sleep Token Glyphs"/>
  ${Button("Newsletter sign up")}
  <video autoplay muted controls>
    <source src="../../public/musicvideo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <h4>Copyright - Sleep Token - 2023</h4>
  `;
  document.body.appendChild(footer);
};

export default Footer;
