//Creamos la funcion que controla la interseccion de elementos, y a cada uno si está en la vista de usuario le añade la clase, y si no se la quita

const activateIntersection = () => {
  const handleIntersection = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade");
      } else {
        entry.target.classList.remove("fade");
      }
    });
  };

  //Creamos el observador
  const observer = new IntersectionObserver(handleIntersection);

  const section = document.querySelector("section");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  observer.observe(section);
  observer.observe(main);
  observer.observe(footer);
};

export default activateIntersection;

//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
