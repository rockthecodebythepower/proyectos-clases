import "./About.css";

const About = () => {
  //Creamos la sección about
  const section = document.createElement("section");
  //Le asignamos la clase about para poder maquetarla
  section.classList.add("about");
  //Le damos contenido HTML a la sección
  section.innerHTML = `
  <h2 id="about">About</h2>
  <p>
  <strong>Neil Blomkamp</strong> is a highly acclaimed director known for his innovative and thought-provoking films. Born on September 17, 1979, in <strong>Johannesburg, South Africa</strong>, Blomkamp developed a passion for visual effects and storytelling from a young age.
  </p>
  <p>
  Blomkamp gained international recognition with his breakthrough feature film, <strong>"District 9,"</strong> released in 2009. The science fiction thriller, set in a dystopian world, received critical acclaim for its compelling narrative and unique blend of documentary-style filmmaking with stunning visual effects. It earned Blomkamp an Academy Award nomination for Best Adapted Screenplay.
  </p>
  <p>
  With his unique vision and innovative storytelling techniques, <strong>Neil Blomkamp</strong> continues to captivate audiences and push the boundaries of science fiction filmmaking. His future projects are eagerly anticipated, promising more thought-provoking and visually stunning experiences for audiences around the world.
  </p>
  `;
  //Pintamos la sección en el main
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(section);
};

export default About;
