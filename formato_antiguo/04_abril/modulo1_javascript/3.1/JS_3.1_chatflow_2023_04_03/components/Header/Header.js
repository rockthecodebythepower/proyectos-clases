import "./Header.css"
import {printTemplate as Hero} from "../Hero/Hero"

const template = () => {
  return `
    <nav>
        <h1>ChatFlow</h1>
        <ul class="nav-links">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Pricing</a>
            </li>
            <li>
                <a href="#">Support</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#">Login</a>
            </li>
            <li>
                <a href="#" class="register-link">Register</a>
            </li>
        </ul>
    </nav>
    <section id="hero"></section>

    `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
  Hero()
}
