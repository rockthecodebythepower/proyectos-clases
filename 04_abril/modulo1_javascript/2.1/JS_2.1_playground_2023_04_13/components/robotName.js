import "./robotName.css";

const template = () => {
  return `
    <h2>Your Transformer name</h2>
    <form>
    <label for="firstName">First Name</label>
    <input type="text" id="firstName"/>
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName"/>
    <button type="submit">Generate</button>
    <h3 id="transformerResult">Click Generate to know your Transformer name...</h3>
    </form>
    `;
};

const generateRobotName = (firstName, lastName) => {
  const robotFirstName = firstName + "tron";
  const suffixes = ["mix", "droid", "bot", "prime", "tech"];
  const randomNumber = Math.floor(Math.random() * suffixes.length);
  const robotLastName = lastName + suffixes[randomNumber];
  return `Auto-${robotFirstName} ${robotLastName}`;
};

const listeners = () => {
  document.querySelector("form").addEventListener("submit", (ev) => {
    //Vamos a quitarle el comportamiento por defecto que recarga la pagina al lanzarse el evento submit
    ev.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    document.querySelector("#transformerResult").innerHTML = generateRobotName(
      firstName,
      lastName
    );
  });
};

export const printTemplate = () => {
  document.querySelector("#transformer").innerHTML = template();
  listeners();
};
