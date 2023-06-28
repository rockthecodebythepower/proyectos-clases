import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  const section = document.createElement("section");
  section.classList.add("hero");
  section.innerHTML = `
  <img src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/sleep-token-icon-world.png" alt="Sleep Token Icon World"/>
  <p>The New Album</p>
  <h1>Take me back to Eden</h1>
  <p>Out now</p>
  ${Button("Buy now", "active")}
  <div class="social">
    <a href="#null">
      <img src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/spotify.png" alt="Spotify logo"/>
    </a>
    <a href="#null">
    <img src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/apple-music.png" alt="Apple music logo"/>
    </a>
  </div>
  <ul class="shop">
    <li>
      ${Button("UK/EU store")}
    </li>
    <li>
      ${Button("US store")}
    </li>
    <li>
      ${Button("AU store")}
    </li>
    <li>
      ${Button("Label store")}
    </li>
    <li>
      ${Button("Impericon")}
    </li>
    </ul>
  `;
  document.body.appendChild(section);
};

export default Hero;
