import "./Contact.css";

const Contact = () => {
  const section = document.createElement("section");
  section.classList.add("contact");
  section.innerHTML = `
<h2 id="contact">Contact</h2>
<a href="mailto:info@neilblomkamp.com">info@neilblomkamp.com</a>
<a href="mailto:press@neilblomkamp.com">press@neilblomkamp.com</a>
<a href="twitter">Twitter</a>
<a href="IMDB">IMDB</a>
<a href="instagram">Instagram</a>
<p>Oats Studios - Neil Blomkamp - 2023</p>
`;
  document.body.appendChild(section);
};

export default Contact;
